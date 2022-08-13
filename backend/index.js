const express = require("express");
const app = express();
const MONGO_DB_CONNECTION = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/userRegister");
const PORT = process.env.PORT || 5000;
const path = require("path");

// MongoDb connection //
MONGO_DB_CONNECTION();
// parse application/json
app.use(bodyParser.json());

// --------- Deployment ----------


// __dirname = path.resolve();
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, "/frontend/build")))

//   app.get("*", (req,res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   })
// }else {

// }

// --------- Deployment ----------

app.use(cors());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Your Server is started at ${PORT}`);
});
