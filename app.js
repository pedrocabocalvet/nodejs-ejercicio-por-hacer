const {argv} = require('./config/yargs');
const {crear, getListado, actualizar, borrar} = require('./por-hacer/por-hacer');
const colors = require('colors');

const comando = argv._[0];

switch (comando) {
  case "crear":
    const tarea = crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    const listado = getListado();
    listado.forEach((tarea)=>{
      console.log("======== Por hacer ========".green);
      console.log(tarea.descripcion);
      console.log("Completado:",tarea.completado);
      console.log("===========================".green);
    })
    break;
  case "actualizar":
    actualizar(argv.descripcion, argv.completado) ?
      console.log("Tarea actualizada con exito".green) :
      console.log("La tarea no se pudo actualizar".red);
    break;
  case "borrar":
    borrar(argv.descripcion) ?
      console.log("La tarea ha sido borrada con existo".green) :
      console.log("La tarea no se pudo borrar".red);
    break;
  default:
    console.log("comando no valido".red);
}
