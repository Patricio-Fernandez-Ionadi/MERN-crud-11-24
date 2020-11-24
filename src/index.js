const express = require("express")
const app = express()
// app es mi servidor
const morgan = require("morgan")
// morgan es un modulo que nos permite ver en consola las peticiones a nuestro servidor
// metodoRequerido | Ruta | Status | tiempoRespouesta | pesoEnBytes
const path = require("path")

const { mongoose } = require("./database")

// Settings
// establecer configuracion a travez del metodo set,(nombre de la configuracion, valor del puerto)
// process... tomar el puerto del sistema operativo
// si no hay puerto toma el 3000
app.set("port", process.env.PORT || 3000)

// Middlewares
// los middlewares son funciones que se ejecutan antes de que lleguen a nuestras rutas
app.use(morgan("dev"))
app.use(express.json())

// Routes
app.use("/api/tasks", require("./routes/task.routes"))

// Statics Files
// localizamos el html en nuestra ruta base
app.use(express.static(path.join(__dirname, "public")))

// Starting the server
// primer parametro el puerto (lo tomamos con el metodo get con el nombre que establecimos en las settings line:1 in settings)
app.listen(app.get("port"), () => {
	console.log(`server on port ${app.get("port")}`)
})
