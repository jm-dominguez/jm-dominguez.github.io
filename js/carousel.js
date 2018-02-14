/* global $ */
"use strict";
$(document).ready(function ( ){
    $.getJSON('./json/images.json', function(data){
        data.map(function(i,p){
            var url = i.url;
            var id = i.id;
            $(".carousel-inner").append("<div class=\"carousel-item\" id = \"" + id + "\"> </div>");
            $('#' + id).append("<img class=\"carousel-image\" src = \"" + url + "\">");
            
            $(".carousel-indicators").append("<li data-target = \"#demo\" data-slide-to = \"" + p + "\" id = \"data-slide" + p + "\"> </li>");
            
            if(p === 0){
                $('#data-slide' + p).addClass("active");
                $('#' + id).addClass("active");
            }
        });
    });
}
);