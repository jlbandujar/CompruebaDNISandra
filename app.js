const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post('/dni', function (req, res) {
    //num, id... segun como se lo vayamos a pasar
    let dni = req.body.dni;
    console.log(dni);
    let expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    let respuesta;
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       respuesta = {msg: "La letra no corresponde"};
     }else{
        respuesta = {msg: "DNI valido"};
     }
  }
    res.json(respuesta);
});

port= 3000;

app.listen(port, () => console.log("Escuchando por el puerto " + port));