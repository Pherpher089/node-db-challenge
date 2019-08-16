// Update with your config settings.

module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./tasks.db3",
		},
		useNullAsDefault: true,
	},

	migrateions: {
		directory: "./data/migrateions.js",
	},

	seeds: {
		directory: "./data/seeds.js",
	},
};
