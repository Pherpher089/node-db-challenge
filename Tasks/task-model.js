const db = require("../db-config.js");

module.exports = {
	addResource,
	getResource,
	addProject,
	getProjects,
	addTask,
	getTasks,
};

function addResource(new_resource) {
	//{name: 'name' , description: 'description'}
	return db("resources").insert(new_resource);
}

function getResource(project_id) {
	return db("project-resource as pr")
		.join("projects as p", "pr.project_id", "p.id")
		.join("resources as r", "pr.resource_id", "r.id")
		.where({ project_id });
}

function addProject(project) {
	const new_project = project;
	new_project.completed = false;

	return db("projects").insert(new_project);
}

function getProjects() {
	return db("projects");
}

function addTask(task, projectId) {
	const new_task = task;
	new_task.project_id = projectId;

	return db("tasks").insert(new_task);
}

function getTasks(project_id) {
	return db("projects as p")
		.join("tasks as t", "p.id", "t.project_id")
		.where({ project_id });
}
