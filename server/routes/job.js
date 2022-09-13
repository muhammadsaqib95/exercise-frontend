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
    const date = Date.parse(req.body.date);
    const newJob = new Job({
      title,
      description,
      job_type,
      expire_on,
      date,
    });
    newJob
      .save()
      .then(() => res.json("job added!"))
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
    .then(() => res.json("job deleted"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/update").put(userAuth,(req, res) => {
  Job.findById(req.body.id)
    .then((job) => {
      job.title = req.body.name ?? job.title;
      job.description = req.body.description ?? job.description;
      job.job_type = req.body.job_type ?? job.job_type;
      job.expire_on = Date.parse(req.body.expire_on ?? job.expire_on);
      job.date = Date.parse(req.body.date ?? job.date);

      job
        .save()
        .then(() => res.json("job updated!!"))
        .catch((err) => res.status(400).json("Error : " + err));
    })
    .catch((err) => res.status(400).json("Error : " + err));
});

module.exports = router;
