const express = require("express");

const db = require("./task-model.js");

const router = express.Router();

//add resources
router.put("/resources", async (req, res) => {
	try {
		const resource = await db.addResource(req.body);
		res.status(200).json(resource);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

//get resources of a particular project
router.get("/:id/resources", async (req, res) => {
	try {
		const resources = await db.getResource(req.params.id);
		res.status(200).json(resources);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

//add a project
router.put("/", async (req, res) => {
	try {
		const project = await db.addProject(req.body);
		res.status(200).json(project);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

//get all projects
router.get("/", async (req, res) => {
	try {
		const projects = await db.getProjects();
		res.status(200).json(projects);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

//add a task to a project
router.put("/:id/tasks", async (req, res) => {
	try {
		const new_task = await db.addTask(req.body, req.params.id);
		res.status(200).json(new_task);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

//Get all tasks of a spesific project
router.get("/:id/tasks", async (req, res) => {
	try {
		const tasks = await db.getTasks(req.params.id);
		res.status(200).json(tasks);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

module.exports = router;

/**
    try {

    } catch ({message}) {
        res.status(500).json(message)
    }
 */
