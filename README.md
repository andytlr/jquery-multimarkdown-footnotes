jQuery MultiMarkdown Footnotes
==============================

This is a fork of Sumeet Jain's [jQuery Markdown Footnotes].

[View the Demo] (simple and un-styled) or see [In use](#in-use) for further usage examples.

## What's different ##

* Sumeet's original appeared to work with [PHP Markdown Extra]. I have changed it to work with the footnote output of [MultiMarkdown].
* I have moved the styling options out of the `.js` file and into a `.css` file for easier styling (for me anyway).
* It's more mobile friendly. Especially with long footnotes.

## To do ##

* Clean up `.css` file and comment mandatory and user-changeable styles.

## In use ##

This in use on my site. Here's an [example post]. In this example I've hidden footnotes at the bottom of each post, so they're only visible with the popover. I also used [Modernizr]'s .js body class to only hide them when JavaScript is present:

	.js div.footnotes {
		display: none;
	}


[jQuery Markdown Footnotes]: http://sumeetjain.com/jquery-markdown-footnotes/
[PHP Markdown Extra]: http://michelf.ca/projects/php-markdown/extra/
[MultiMarkdown]: http://fletcherpenney.net/multimarkdown/
[View the Demo]: http://andytlr.github.com/jquery-multimarkdown-footnotes/
[example post]: http://andytaylor.me/2011/07/09/simple-2d-dock-modification/
[Modernizr]: http://modernizr.com