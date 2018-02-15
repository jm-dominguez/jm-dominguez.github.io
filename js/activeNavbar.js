/* global $ */
"use strict";
//Javascript for the active navbar.
$(".nav-link").on("click", function(){
   $(".nav-link").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});