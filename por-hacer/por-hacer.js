const fs = require('fs');
const colors = require('colors');

let tareas = [];

function cargarDatos(){
  try {
    tareas = require("../db/tareas.json");
  } catch (e) {
    tareas = [];
  }
}

function getListado(){
  cargarDatos();
  return tareas;
}


function guardarDB () {
    const data = JSON.stringify(tareas);

    fs.writeFile(`db/tareas.json`, data, (err) => {
      if (err) console.log(err);
    });
}

function crear (descripcion) {
  cargarDatos();
  const tarea = {
    descripcion,
    completado: false
  }
  tareas.push(tarea);
  guardarDB ();
  return tarea;
}

function actualizar (descripcion, completado=true) {
  const listado = getListado();
  const index = listado.findIndex(item => item.descripcion === descripcion);
  if(index >= 0){
    listado[index].completado = completado;
    guardarDB();
    return true;
  }
  return false;
}

function borrar (descripcion){
  const listado = getListado();
  const index = listado.findIndex(item => item.descripcion === descripcion);
  if(index >= 0){
    listado.splice(index,1);
    guardarDB();
    return true;
  }
  return false;
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}
