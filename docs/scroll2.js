$("#plotly-button").click(function(){
  var last=Date.now();
  var y;
  var speed=0.015;
  $(document).toggle(function updateScroll(){
    var now=Date.now();
    var deltaT=now-last;
    y+=speed*deltaT;
    y=y % ($(".layer").height()/2);
    TweenMax.set($(".layer"),{
      y:-y,
      force3D:true,
      transformOrigin:"50% "+(($(window).height()/3)+y)+"px"
    });
    last=now;

    requestAnimationFrame(updateScroll);
  }());
  })
