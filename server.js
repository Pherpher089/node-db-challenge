const express = require("express");

const Tasks = require("./Tasks/task-router.js");

const server = express();

server.use(express.json());
server.use("/api/projects", Tasks);

server.get("/", (req, res) => {
	res.status(200).send("<h1>Hello from Node Database Sprint Challenge!</h1>");
});

module.exports = server;
