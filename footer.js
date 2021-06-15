$(function () {
	var bar = '';
	bar += '<footer class="footer">';
	bar += '<div class="container">';
	bar += '<div class="row">';
	bar += '<div class="col align-self-start">';
	bar += '<span class="text-muted">Logoshanko Logic LLC Copyright 2021. <a href="https://www.logoshanko.com/privacy">Privacy</a></span>';
	bar += '</div>';
	bar += '<div class="col align-self-end">';
	bar += '<span class="text-muted" style="float:right">Follow <a href="https://twitter.com/logologic?ref_src=twsrc%5Etfw" data-show-count="false">@logologic</a></span>';
	bar += '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
	bar += '</div>';
	bar += '</div>';
			
	bar += '</div>';
	bar += '</footer>';
	document.getElementById("footer").innerHTML += bar;
});
