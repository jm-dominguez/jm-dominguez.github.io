/* global $ */
"use strict";
$(document).ready(function ( ){
    //Get the Json that has the images stored.
    $.getJSON('./json/images.json', function(data){
        data.map(function(i,p){
            var url = i.url;
            var id = i.id;
            var alt = i.alt;
            //Add the carousel items.
            $(".carousel-inner").append("<div class=\"carousel-item\" id = \"" + id + "\"> </div>");
            //Add the url to the respective carouselt-items
            $('#' + id).append("<img class=\"carousel-image\" src = \"" + url + "\" alt=\" " + alt + " \">");
            //Add the indicators elements to the data-slide
            $(".carousel-indicators").append("<li data-target = \"#demo\" data-slide-to = \"" + p + "\" id = \"data-slide" + p + "\"> </li>");
            //If is the first element add the active class, so that it displays first.
            if(p === 0){
                $('#data-slide' + p).addClass("active");
                $('#' + id).addClass("active");
            }
        });
    });
});