/*global $*/
"use strict";
$(document).ready(function() {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
        //Smooth scroll navigation
      scrollTop: $(this.hash).offset().top - 200
    }, 1000 );
  });

})
