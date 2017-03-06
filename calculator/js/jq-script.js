$(function() {
	$( '.calc select' ).change(function() {
		$edition = $( 'select#card_edition' ).val();
		$paper = $( 'select#card_paper' ).val();
		$color = $( 'select#card_color' ).val();
		$paper_ratio = $( 'select#card_paper option:selected' );
		$color_format = $( 'select#card_color option:selected' ).attr( 'data-color' );
		$division = 30;
		$final_edition = $edition / $division;
		$price = $final_edition * $paper_ratio;

		if ( $color_format == 1 ) {
			$( '.card_images img' ).hide();
			$( '#card_1_0' ).show();
		}

		if ( $color_format == 2 ) {
			$( '.card_images img' ).hide();
			$( '#card_1_1' ).show();
		}

		if ( $color_format == 3 ) {
			$( '.card_images img' ).hide();
			$( '#card_4_0' ).show();
		}

		if ( $color_format == 4 ) {
			$( '.card_images img' ).hide();
			$( '#card_4_1' ).show();
		}
		// for git
		if ( $color_format == 4 ) {
			$( '.card_images img' ).hide();
			$( '#card_4_1' ).show();
		}

		if ( $color_format == 5 ) {
			$( '.card_images img' ).hide();
			$( '#card_4_4' ).show();
		}
	});
 }); // end ready