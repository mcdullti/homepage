var clicks = true;
var y=0;
var speed=0.025;
var last=Date.now();
$("#plotly-button").click(function(){
  if (clicks) {
    speed=0.025;
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
