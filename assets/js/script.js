$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        // Subtract desired offset. In this case, we're assuming a header height of 60px.
        var scrollPoint = $(hash).offset().top - 145;
  
        $('html, body').animate({
          scrollTop: scrollPoint
        }, 420, function(){
          window.location.hash = hash - 60; // This will not change the actual ID of the element.
        });
      }
    });
  });