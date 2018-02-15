/* global $ */
"use strict";
$('#pythonButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    var titulo = d[0].titulo;
    var puntuacion = d[0].puntuacion;
    var descripcion = d[0].descripcion;
    var imagen = d[0].imagen;
    var alt = d[0].alt;
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen, alt);
  });
});



$('#htmlButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    var titulo = d[2].titulo;
    var puntuacion = d[2].puntuacion;
    var descripcion = d[2].descripcion;
    var imagen = d[2].imagen;
    var alt = d[2].alt;
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen, alt);
  });
});



$('#javaButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    var titulo = d[1].titulo;
    var puntuacion = d[1].puntuacion;
    var descripcion = d[1].descripcion;
    var imagen = d[1].imagen;
    var alt = d[1].alt;
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen, alt);

  });
});

$('#javascriptButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    var titulo = d[3].titulo;
    var puntuacion = d[3].puntuacion;
    var descripcion = d[3].descripcion;
    var imagen = d[3].imagen;
    var alt = d[3].alt;
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen, alt);

  });
});

$('#sqlButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    var titulo = d[4].titulo;
    var puntuacion = d[4].puntuacion;
    var descripcion = d[4].descripcion;
    var imagen = d[4].imagen;
    var alt = d[4].alt;
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen, alt);

  });
});
function validarColor(puntuacion){
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
  $('#modal-image').css('width', '92%').css('height', '92%').attr("src",url).attr("alt",alt);
}
