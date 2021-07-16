const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: String,
	punchLine: String
});

const User = mongoose.model("joke", JokeSchema);

module.exports = User;