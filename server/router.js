const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send({ response: "Server is up and running." });
  res.send("server is up");
});

module.exports = router;