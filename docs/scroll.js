$(document).ready(function(){
  var steps=10;
  var angle=6;

  var angleDiff=angle/steps;
  var startAngle=-angle/2;
  var opacityDiff=(1/steps)+0.05;

  var $container=$(".container");
  var $original=$(".layer");

  $(".col").each(function(){
    $(this).clone().appendTo($(this).parent());
  })
  for(var i=0;i<steps;i++){
    var a=startAngle+(angleDiff*i);
    var $newLayer=$original
      .clone()
      .appendTo($container)
      .css({
        transform:"rotateX("+a+"deg)",
        opacity:opacityDiff
      })
    ;
  }
  $original.remove();
})
