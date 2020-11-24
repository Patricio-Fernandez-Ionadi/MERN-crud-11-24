const express = require("express")
const router = express.Router()
const Task = require("../models/task")

router.get("/", async (req, res) => {
	// CALLBACKS (no recomendado)
	// Task.find(function (err, tasks) {
	// 	console.log(tasks)
	// 	res.json({
	// 		status: "API Works!",
	// 	})
	// })

	// PROMESAS
	// Task.find()
	// 	.then((data) => console.log(data))
	// 	.catch((err) => console.log("Error: ", err))

	// ASYN/AWAIT (agregamos asyc antes de los parametros en el parametro del .get())
	const tasks = await Task.find()
	res.json(tasks)
})

router.get("/:id", async (req, res) => {
	const task = await Task.findById(req.params.id)
	res.json(task)
})

router.post("/", async (req, res) => {
	const { title, description } = req.body
	const task = new Task({ title, description })
	await task.save()
	res.json({ status: "task saved" })
})

router.put("/:id", async (req, res) => {
	const { title, description } = req.body
	const newTask = { title, description }
	await Task.findByIdAndUpdate(req.params.id, newTask)
	res.json({ statis: "task updated" })
})

router.delete("/:id", async (req, res) => {
	await Task.findByIdAndRemove(req.params.id)
	res.json({ status: "task deleted" })
})

module.exports = router
