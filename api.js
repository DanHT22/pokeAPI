// CONSUMIR LA API
function consumir(){
    var endPoint = document.getElementById('endPoint').value;
    
    // Llamado a la API
    fetch(endPoint)

    // Promesa cuando se cumple o cuando la respuesta es exitosa
    .then(function(respuesta){
        return respuesta.json();
    })

    //Promesa recibe los datos en formato JSON
    .then(function(datos){
        console.log(datos);
        var lista = document.getElementById('lista');
        var contenido = '';
        for(var i = 0; i < datos.length; i ++){
            contenido += '<li>' + datos[i].name + '</li>';
        }
        lista.innerHTML = contenido;
    })
}

// Grafica de barras
var data = [
    {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar'
    }
];
Plotly.newPlot('myDiv1', data);


