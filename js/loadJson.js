/* global $ */
"use strict";
$('#pythonButton').click(function(){
    //On click get the JSON archive
  $.getJSON('./json/python.json',function(d){
    var titulo = d[0].titulo;
    var puntuacion = d[0].puntuacion;
    var descripcion = d[0].descripcion;
    var imagen = d[0].imagen;
    var alt = d[0].alt;
      //Add the elements to the html-modal.
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
      //Llamar el método que asigna el color al circulo del modal.
    validarColor(puntuacion);
      //Asignar la imagen respectiva al modal
    anadirImagen(imagen, alt);
  });
});



$('#htmlButton').click(function(){
    //Obtener el archivo JSON
  $.getJSON('./json/python.json',function(d){
    var titulo = d[2].titulo;
    var puntuacion = d[2].puntuacion;
    var descripcion = d[2].descripcion;
    var imagen = d[2].imagen;
    var alt = d[2].alt;
      //Anadir elementos al html
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
      //Llamar el método que asigna el color al circulo del modal.
    validarColor(puntuacion);
      //Asignar la imagen respectiva al modal
    anadirImagen(imagen, alt);
  });
});



$('#javaButton').click(function(){
    //Obtener el archivo JSON
  $.getJSON('./json/python.json',function(d){
    var titulo = d[1].titulo;
    var puntuacion = d[1].puntuacion;
    var descripcion = d[1].descripcion;
    var imagen = d[1].imagen;
    var alt = d[1].alt;
      //Anadir elementos al html
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
      //Llamar el método que asigna el color al circulo del modal.
    validarColor(puntuacion);
      //Asignar la imagen respectiva al modal
    anadirImagen(imagen, alt);

  });
});

$('#javascriptButton').click(function(){
    //Obtener el archivo JSON
  $.getJSON('./json/python.json',function(d){
    var titulo = d[3].titulo;
    var puntuacion = d[3].puntuacion;
    var descripcion = d[3].descripcion;
    var imagen = d[3].imagen;
    var alt = d[3].alt;
      //Anadir elementos al html
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
      //Llamar el método que asigna el color al circulo del modal.
    validarColor(puntuacion);
      //Asignar la imagen respectiva al modal
    anadirImagen(imagen, alt);

  });
});

$('#sqlButton').click(function(){
    //Obtener el archivo JSON
  $.getJSON('./json/python.json',function(d){
    var titulo = d[4].titulo;
    var puntuacion = d[4].puntuacion;
    var descripcion = d[4].descripcion;
    var imagen = d[4].imagen;
    var alt = d[4].alt;
    $('.modal-title').text(titulo);
      //Anadir elementos al html
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
      //Llamar el método que asigna el color al circulo del modal.
    validarColor(puntuacion);
      //Asignar la imagen respectiva al modal
    anadirImagen(imagen, alt);

  });
});
function validarColor(puntuacion){
    //Asignar el color de acuerdo a la puntuación. 
  if(puntuacion < 6){
    $('.dot').css('background-color', 'red');
  }
  else if(puntuacion < 8){
    $('.dot').css('background-color', 'rgb(255, 204, 0)');
  }
  else{
    $('.dot').css('background-color', 'lawngreen');
  }
}

function anadirImagen(url, alt){
    //Añadir la imagen al modal.
  $('#modal-image').css('width', '92%').css('height', '92%').attr("src",url).attr("alt",alt);
}
