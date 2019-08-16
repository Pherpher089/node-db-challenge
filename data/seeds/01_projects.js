exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("projects")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("projects").insert([
				{ name: "Project_01", description: "First Project", completed: false },
				{ name: "Project_02", description: "Second Project", completed: false },
				{ name: "Project_03", description: "Third Project", completed: false },
			]);
		});
};
