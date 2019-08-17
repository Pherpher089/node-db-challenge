exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("tasks")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("tasks").insert([
				{
					description: "First task for first project",
					notes: "the task notes",
					project_id: 1,
				},
				{
					description: "Second task for first project",
					notes: "the task notes",
					project_id: 1,
				},
				{
					description: "First task for second project",
					project_id: 2,
				},
				{
					description: "Second task for second project",
					notes: "the task notes",
					project_id: 2,
				},
				{
					description: "First task for third project",
					notes: "the task notes",
					project_id: 3,
				},
				{
					description: "Second task for third project",
					project_id: 3,
				},
			]);
		});
};
