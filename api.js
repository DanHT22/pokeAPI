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
        // var height = [];
        // var weight = [];

        // height.push(datos.height);
        // weight.push(datos.weight);
        // console.log(height);
        // console.log(weight);
        console.log(datos['abilities'][0]['ability']['name']);
    })
    
}


//Grafico burbujas
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: 'markers',
    marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      opacity: [1, 0.8, 0.6, 0.4],
      size: [40, 60, 80, 100]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Marker Size and Color',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('myDiv4', data, layout);

// Grafica de barras
// function graficar (pesos){
//     var data = [
//     {
//         x: pesos,['pesos']
//         y: 
       
//         type: 'bar'
//     }
// ];
// Plotly.newPlot('myDiv1', data);
// }





