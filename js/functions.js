$(function() {
	smoothScroll(300);
	
	workLoad();
	// showProjects();
	playVideo();


	$('.thumb-unit').click(function(e){
        e.preventDefault();
        
    });

    $(function(){
	  $('#Contains').mixItUp({
	  	animation: {
	  		duration: 1200
	  	}
	  });
	});

	$('.filter').click(function(e){
        e.preventDefault();
        
    });

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

// function projectBelt() {

// 	$('.thumb-unit').click(function() {

// 		$('.project-belt').css('left', '-100%');
// 		$('.project-container').show();
// 	});

// 	$('.project-return').click(function() {

// 		$('.project-belt').css('left', '0%');
// 		$('.project-container').hide(2000);
// 	});

// 	$('#projects').click(function() {

// 		$('.project-belt').css('left', '0%');
// 		$('.project-container').hide(2000);
// 	});

// }

function workLoad() {

	$.ajaxSetup({ cache: true });

	$('.thumb-unit').click(function() {

		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '/project/' + newFolder + '.html';
			
		$('.pop_details').html(spinner).load(newHTML);
		$('.pop_details').css({visibility: 'visible'});
		$('.close_btn').css({visibility: 'visible'});
		$('#filter_back').css({visibility: 'visible'});
		// $('.project-title').text(newTitle);

		// var spinner = '<div class="loader">Loading...</div>',
		// 	newHTML = '/project/project2.html';
			
		// $('.pop_details').html(spinner).load(newHTML);

	});

	// $('.controls').click(function() {		
	// 	$('.pop_details').css({visibility: 'hidden'});
	// 	$('#filter_back').css({visibility: 'hidden'});
	// });

	$('.close_btn').click(function() {		
		$('.pop_details').css({visibility: 'hidden'});
		$('#filter_back').css({visibility: 'hidden'});
		$('.close_btn').css({visibility: 'hidden'});
	});


	

}

function playVideo() {
	$(".close_btn").click(function(){
	    // $("video")[0].pause();
	    $(document).ready(function(){
		var stopVideo = function(player) {
			var vidSrc = player.prop('src');
			player.prop('src', ''); // to force it to pause
			player.prop('src', vidSrc);
		};

		// at some appropriate time later in your code
		stopVideo($('#video'));

		});
    });


}
