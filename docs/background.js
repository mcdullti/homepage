$( document ).ready(function() {
    var is_mobile = false;

    if( $('#some-element').css('display')=='none') {
        is_mobile = true;
    }

    if (is_mobile == true) {
      $( "div" ).toggleClass( "background" );
    }
 });
