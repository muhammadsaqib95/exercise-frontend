const router = require("express").Router();
let Job = require("../models/jobs.model");
const userAuth = require('../Auth');

router.route("/").get(userAuth,(req, res) => {
  Job.find({ name: req.query.name })
    .then((jobs) => res.json(jobs))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/add").post(userAuth,(req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const job_type = req.body.job_type;
    const expire_on = Date.parse(req.body.expire_on);
    const date = Date.parse(req.body.date ?? new Date());
    const newJob = new Job({
      title,
      description,
      job_type,
      expire_on,
      date,
    });
    newJob
      .save()
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json("Error : " + err));
  } catch (error) {
    res.status(400).json("Error : " + error);
  }
});
router.route("/:id").get(userAuth,(req, res) => {
  Job.findById(req.params.id)
    .then((job) => res.json(job))
    .catch((err) => res.status(400).json("Error : " + err));
});
router.route("/:id").delete(userAuth,(req, res) => {
  Job.findByIdAndDelete(req.params.id)
    .then(() => res.json({id : req.params.id}))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/update").put(userAuth,(req, res) => {
  Job.findById(req.body.id)
    .then((job) => {
      job.title = req.body.title ?? job.title;
      job.description = req.body.description ?? job.description;
      job.job_type = req.body.job_type ?? job.job_type;
      job.expire_on = Date.parse(req.body.expire_on ?? job.expire_on);

      job
        .save()
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json("Error : " + err));
    })
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
