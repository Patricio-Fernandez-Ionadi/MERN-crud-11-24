const mongoose = require("mongoose")
const { Schema } = mongoose

// formato que tendran mis tareas
const TaskSchema = new Schema({
	title: { type: String, requires: true },
	description: { type: String, required: true },
})

module.exports = mongoose.model("Task", TaskSchema)
