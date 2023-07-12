// CONSUMIR LA API
function consumir(){
    var endPoint = document.getElementById('endPoint').value;
    var nom ='';
    var baseExp = '';
    var nom1 ='';
    var baseExp1 = '';
    var data = [];
    var datap =[];
    var layoutp = [];
    var trace1 ='';
    var trace2 = '';
    var datab = [];
    var layoutb =[];
    var layoutgb = '';
    var dataBP = [];
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
        /*const obj = JSON.parse(datos);

        console.log("esto es una prueba"+obj);*/

        //en que parte ejecutas el codigo?

        // height.push(datos.height);
        // weight.push(datos.weight);
        // console.log(height);
        // console.log(weight);

        //Las siguientes dos lineas sirven para imprimir los datos extraidos
        //console.log('nombre'+datos['abilities'][0]['ability']['name']);
        //console.log('baseExp'+datos['base_experience']);
        //Aquí convertimos esos mismos datos en variables
       nom = datos['abilities'][1]['ability']['name'];
       baseExp = datos['base_experience'];
        //Aquí nada mas imprimimos esos mismos datos. Nomas para asegurarnos que si creamos bien las variables 
        
        //console.log('Nombre '+nom);
        //console.log('BaseExp '+baseExp);

        //Grafica de barras
        data = [
          {
            x: [nom],
            y: [baseExp],
            type: 'bar',
            orientation:"v",
            marker: {color:"rgba(0,0,255)"}
          }
        ];
        layoutgb= {
            title: "Grafica de barras"
          };
        console.log('Data '+ data[0].x);
        console.log('Data y '+ data[0].y);
        console.log('Data type '+ data[0].type);
        //Recordar cambiar el myDiv1 por myDiv2,3 o 4
        Plotly.newPlot('myDiv1', data,layoutgb);

                 // Grafica de pie
 datap= [
    {
        values: [baseExp1],
        labels: [nom1],
        type: "pie",
    }
];

  layoutp = {
    title: "Pie Charts"
  };
  
  Plotly.newPlot('myDiv2', datap,layoutp);
//Grafica Burbuja
  trace1= {
  x:[nom],
  y: [baseExp],
  mode: 'markers',
  marker: {
    color: ['red'],
    size: [20]
  }
};

 datab = [trace1];

 layoutb= {
  title: "Plotting Bubbles"
};

Plotly.newPlot('myDiv4', datab, layoutb);
    })
}





