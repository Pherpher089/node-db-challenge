exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("resources")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("resources").insert([
				{ name: "Resource_01", description: "The first resource" },
				{ name: "Resource_02", description: "The second resource" },
				{ name: "Resource_03", description: "The third resource" },
			]);
		});
};
