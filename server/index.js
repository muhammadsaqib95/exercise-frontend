const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const multer = require("multer");
var upload = multer({ dest: "uploads/" });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
// for parsing multipart/form-data
app.use(upload.array());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri
  );
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connected successfully");
});

const userRoutes = require("./routes/users");
const excerciseRoutes = require("./routes/exercise");
const sendmailRoutes = require("./routes/sendmail");
const jobRoutes = require("./routes/job");

app.use("/users", userRoutes);
app.use("/excercise", excerciseRoutes);
app.use("/sendmail",upload.single('attchments'), sendmailRoutes);
app.use("/job", jobRoutes);
app.listen(port, () => {
  console.log("server is running at port " + port);
});