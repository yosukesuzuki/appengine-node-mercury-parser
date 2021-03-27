"use strict";

// [START gae_node_request_example]
const express = require("express");

const app = express();

const Mercury = require("@postlight/mercury-parser");

app.get("/web/parse/article", (req, res) => {
  const url = req.query.url;
  console.log(url);
  Mercury.parse(url).then((result) => {
    return res.json(result);
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
// [END gae_node_request_example]

module.exports = app;
