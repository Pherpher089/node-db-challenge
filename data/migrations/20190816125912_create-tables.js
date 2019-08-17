exports.up = function(knex) {
	return knex.schema
		.createTable("projects", tbl => {
			tbl.increments();
			tbl.text("name", 128).notNullable();
			tbl.text("description", 128);
			tbl.text("completed").defaultTo("false");
		})
		.createTable("resources", tbl => {
			tbl.increments();
			tbl.text("name", 128).notNullable();
			tbl.text("description", 128);
		})
		.createTable("tasks", tbl => {
			tbl.increments();
			tbl.text("description", 128).notNullable();
			tbl.text("notes", 128);
			tbl.text("completed").defaultTo("false");
			tbl
				.integer("project_id")
				.unsigned()
				.notNullable()
				.references("project_id")
				.inTable("projects");
		})
		.createTable("project-resource", tbl => {
			tbl
				.integer("project_id")
				.notNullable()
				.unsigned()
				.references("project_id")
				.inTable("projects");
			tbl
				.integer("resource_id")
				.notNullable()
				.unsigned()
				.references("resources_id")
				.inTable("resources");
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("project-resource")
		.dropTableIfExists("tasks")
		.dropTableIfExists("resources")
		.dropTableIfExists("projects");
};
