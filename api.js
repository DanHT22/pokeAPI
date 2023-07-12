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

        //Las siguientes dos lineas sirven para imprimir los datos extraidos
        console.log(datos['abilities'][0]['ability']['name']);
        console.log(datos['base_experience']);
        //Aquí convertimos esos mismos datos en variables
        var nom = datos['abilities'][0]['ability']['name'];
        var baseExp = datos['base_experience'];
        //Aquí nada mas imprimimos esos mismos datos. Nomas para asegurarnos que si creamos bien las variables 
        console.log(nom);
        console.log(baseExp);

        //Grafico burbujas
        var data = [
          {
            x: [nom],
            y: [baseExp],
            type: 'bar'
          }
        ];
        //Recordar cambiar el myDiv1 por myDiv2,3 o 4
        Plotly.newPlot('myDiv1', data);
    })
}





