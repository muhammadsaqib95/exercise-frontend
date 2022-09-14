const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
      },
      description: {type : String, required : true},
      job_type : {type : String, required : true},
      expire_on: {type : Date, required : true},
      date: {type : Date}
  },
  {
    timestamps: true,
  }
);
const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
