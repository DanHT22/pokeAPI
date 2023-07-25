function hora(){
    let fecha = new Date();
    var horaSistema = fecha.toLocaleTimeString();
    console.log(horaSistema);
    return horaSistema;
}
var horaActualizada = Date.parse(horaActualizada);//toLocaleTimeString(horaActualizada(setInterval(hora, 3000)));


var miReloj = document.getElementById('reloj')
miReloj.innerHTML=horaActualizada;
console.log(typeof(horaActualizada));
// const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

// function myCallback(a, b) {
//   // Your code here
//   // Parameters are purely optional.
//   console.log(a);
//   console.log(b);
// }