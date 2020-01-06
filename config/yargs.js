const descripcion = {
  alias: "d",
  demand: true,
  desc: "Descripción de la tarea"
}

const completado = {
  default: true,
  alias: "c",
  desc: "Marca como completado una tarea"
}

const argv = require('yargs')
             .command("borrar","Borra una tarea",{descripcion})
             .command("crear","Crea una nueva tarea",{descripcion})
             .command("actualizar","Pone una tarea como completada", {descripcion,completado})
             .help()
             .argv

module.exports = {
  argv
}
