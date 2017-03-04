$(function() {
	$( '.calc select' ).change(function() {
		$edition = $( 'select#card_edition' ).val();
		$paper = $( 'select#card_paper' ).val();
		$color = $( 'select#card_color' ).val();
	});
 }); // end ready