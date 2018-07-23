var clicks = true;
var y=0;
var speed=0.015;
$("#plotly-button").click(function(){
  var last=Date.now();
  if (clicks) {
    speed=0.015;
    clicks = false;
  } else {
    speed=0;
    clicks = true;
  }
  (function updateScroll(){
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
