$("#plotly-button").click(function(){
  $(document).toggle(
  $(".col").each(function(){
    requestAnimationFrame(updateScroll);
  }()););
})
