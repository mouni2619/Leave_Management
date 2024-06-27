const path = require("path");
const express = require("express");
const pino = require("express-pino-logger")();
const proxy = require("express-http-proxy");

// Proxy Server Config & URLs
const SERVER_HOST = process.env.PROXY_SERVER_HOST || "0.0.0.0";
const SERVER_PORT = process.env.PROXY_SERVER_PORT || 5000;
const API_SERVICE_URL = process.env.API_SERVICE_URL || "http://127.0.0.1:8080";

console.log("\n========== Proxy Server Config : Start ==========\n");
console.log("Proxy Server Host  :", SERVER_HOST);
console.log("Proxy Server Port  :", SERVER_PORT);
console.log(" ");
console.log("API Service URL  :", API_SERVICE_URL);
console.log("\n========== Proxy Server Config : End ============\n");

// Configure Express

const app = express();
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "static")));
app.use(pino);

app.use(
  "/",
  proxy(API_SERVICE_URL, {
    filter: function (req) {
      return req.url.startsWith("/api");
    },
  })
);

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(SERVER_PORT, SERVER_HOST, () => {
  console.log("Express server is running on :", SERVER_HOST, SERVER_PORT);
});
