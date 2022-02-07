const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post('/dni', function (req, res) {
   //num, id... segun como se lo vayamos a pasar
   let dni = req.body.dni;
   console.log(dni);
   let expresion_regular_dni = /(^([0-9]{8,8}\-[A-Z]))$/;
   let respuesta;
   if (expresion_regular_dni.test(dni) == true) {
      numero = dni.substr(0, dni.length-2); //aqui te lo cambio Sandra
      letr = dni.substr(dni.length - 1, 1);
      console.log("Numero Introducido",numero)
      console.log("Letra introducida",letr)
      i = numero % 23;
      console.log("Indice: ",i)
      letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
      letra = letras.substring(i, i+1); //cambio
      console.log("Letra que toca: ",letra)
      //letra= letra[i];
      if (letra != letr.toUpperCase()) {
         respuesta = { msg: "La letra no corresponde. debería ser " + letra };
      } else {
         respuesta = { msg: "DNI valido" };
      }
   } else {
      respuesta = { msg: "Formato DNI no valido" }
   }
   
   res.json(respuesta);
});

port = 81;

app.listen(port, () => console.log("Escuchando por el puerto " + port));