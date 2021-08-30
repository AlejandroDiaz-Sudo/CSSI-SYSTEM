
// guarda archivos 

const db = firebase.firestore();

const taskform = document.getElementById("task-form");


taskform.addEventListener('submit',async(e) =>{
e.preventDefault();

const codigo = taskform['task-codigo'].value;
const nombres = taskform['task-nombre'].value;
const apellidos = taskform['task-apellido'].value;
const grado = taskform['task-grado'].value;

await db.collection('alumnos').doc().set({

codigo,
nombres,
apellidos,
grado

})




})





