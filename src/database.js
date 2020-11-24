const mongoose = require("mongoose")

const URI = "mongodb://localhost/mern-tasks"

mongoose
	.connect(URI)
	.then((db) => console.log("DB connected"))
	.catch((err) => console.log("Error: ", err))

module.exports = mongoose
