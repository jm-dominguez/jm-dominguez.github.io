/* global $ */
"use strict";
$(".nav-link").on("click", function(){
   $(".nav-link").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});