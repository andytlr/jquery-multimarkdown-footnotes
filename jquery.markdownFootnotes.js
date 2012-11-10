$(function() {
	
// Different implementations of Markdown do footnotes in different ways. The default in this file is for MultiMarkdown. If it doesn't work, try using the commented lines instead of the line directly below each instance.
	
//	$("a[rel=footnote]").each(function(){
	$("a[class=footnote]").each(function(){
		var link = $(this);
		var token = link.attr('href').substr(1);
		var footnoteContent = $(document.getElementById(token)).html();
		
		$('body').append('<div class="footnoteWrapper"><div id="overlay-' + token + '" class="footnoteContent">' + footnoteContent + '</div></div>');
		
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
	
//	$('.footnoteContent a[rev=footnote]').remove();
	$('.footnoteContent a[class=reversefootnote]').remove();
	$('.footnoteContent').prepend('<a href="#" class="closeFootnote">&times;</a>');
	$('.closeFootnote').click(function(){
		$(this).closest('.footnoteContent').slideUp('fast');
		return false;
	});
});
