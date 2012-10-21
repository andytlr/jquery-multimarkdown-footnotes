$(function() {
	// To edit the display of the footnote
	var footnoteContentCSS = {
		'background': '#000',
		'color': '#fff'
	}
	
	// To edit the display of the link that closes the footnote
	var closeFootnoteCSS = {
		'text-transform': 'uppercase',
		'text-decoration': 'none',
		'font-size': '9px',
		'float': 'right',
		'color': '#666',
		'font-family': 'Helvetica, sans-serif'
	}
	
	$("a[class=footnote]").each(function(){
		var link = $(this);
		var token = link.attr('href').substr(1);
		var footnoteContent = $(document.getElementById(token)).html();
		
		$('body').append('<div id="overlay-' + token + '" class="footnoteContent">' + footnoteContent + '</div>');
		
		link.click(function(){
			var $currentFootnote = $(document.getElementById('overlay-' + token));
			
			// If the footnote is already displayed, hide it instead
			if ($currentFootnote.is(':visible')) {
				$currentFootnote.slideUp('fast');

			} else {
				$('.footnoteContent').hide();
				$currentFootnote.slideDown('fast');
			}
			
			return false;
		});
	});
	
	$('.footnoteContent a[class=reversefootnote]').remove();
	$('.footnoteContent').prepend('<a href="#" class="closeFootnote">&#10006;</a>').css(footnoteContentCSS);
	$('.closeFootnote').click(function(){
		$(this).closest('.footnoteContent').slideUp('fast');
		return false;
	}).css(closeFootnoteCSS);
});
