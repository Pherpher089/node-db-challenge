exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("projects")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("projects").insert([
				{ name: "Project_01", description: "First Project" },
				{ name: "Project_02", description: "Second Project" },
				{ name: "Project_03", description: "Third Project" },
			]);
		});
};
