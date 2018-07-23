$("#plotly-button").click(function(){
  $(".col").each(function(){
    requestAnimationFrame(updateScroll);
  }());
})
