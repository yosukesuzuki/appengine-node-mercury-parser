"use strict";

// [START gae_node_request_example]
const express = require("express");

const app = express();

const Mercury = require("@postlight/mercury-parser");
const validUrl = require("valid-url");

app.get("/parse", (req, res) => {
  const url = req.query.url;
  if (validUrl.isUri(url)) {
    Mercury.parse(url).then((result) => {
      return res.json(result);
    });
  } else {
    res.status(400);
    res.json({ error: "The url is invalid" });
  }
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
// [END gae_node_request_example]

module.exports = app;
