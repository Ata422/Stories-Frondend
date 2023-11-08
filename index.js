const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./functions/api"));
app.listen(8002, () => {
  console.log("app listen at http://localhost:8002");
});
