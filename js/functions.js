$(function() {
	smoothScroll(300);
	projectBelt();
	workLoad();
});

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

function projectBelt() {

	$('.thumb-unit').click(function() {

		$('.project-belt').css('left','-100%');
		$('.project-container').show();
	});

	$('.project-return').click(function() {

		$('.project-belt').css('left', '0%');
		$('.project-container').hide(800);
	})

}

function workLoad() {

	$.ajaxSetup({ cache: false });

	$('.thumb-unit').click(function() {

		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newfolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '/project/'+ newfolder + '.html';
		$('.project-load').hmtl(spinner).load(newHTML);
		$('.project-title').text(newTitle);


	});
}