/* global $ */
"use strict";
$('#pythonButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    console.log(d);
    var titulo = d[0].titulo;
    var puntuacion = d[0].puntuacion;
    var descripcion = d[0].descripcion;
    var imagen = d[0].imagen;
    console.log(puntuacion);
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen);
  });
});



$('#htmlButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    console.log(d);
    var titulo = d[2].titulo;
    var puntuacion = d[2].puntuacion;
    var descripcion = d[2].descripcion;
    var imagen = d[2].imagen;
    console.log(puntuacion);
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen);
  });
});



$('#javaButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    console.log(d);
    var titulo = d[1].titulo;
    var puntuacion = d[1].puntuacion;
    var descripcion = d[1].descripcion;
    var imagen = d[1].imagen;
    console.log(puntuacion);
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen);

  });
});

$('#javascriptButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    console.log(d);
    var titulo = d[3].titulo;
    var puntuacion = d[3].puntuacion;
    var descripcion = d[3].descripcion;
    var imagen = d[3].imagen;
    console.log(puntuacion);
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen);

  });
});

$('#sqlButton').click(function(){
  $.getJSON('./json/python.json',function(d){
    console.log(d);
    var titulo = d[4].titulo;
    var puntuacion = d[4].puntuacion;
    var descripcion = d[4].descripcion;
    var imagen = d[4].imagen;
    console.log(puntuacion);
    $('.modal-title').text(titulo);
    $('.modal-puntuacion').text(puntuacion);
    $('.modal-descripcion').text(descripcion);
    validarColor(puntuacion);
    anadirImagen(imagen);

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

function anadirImagen(url){
  console.log(url);
  $('#modal-image').css('width', '92%').css('height', '92%').attr("src",url);
}
