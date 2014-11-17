function buttonaso() {
    $('.button').hover(
    	$( this ).fadeOut( 100 ),
    	$( this ).fadeIn( 100 )
    	);
}


$( document ).ready(function() {
    buttonaso();
});