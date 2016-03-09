$(function() {
	smoothScroll(300);
	projectBelt();
	workLoad();
	backToTop();
	// scrollEnd();

	$('.thumb-unit').click(function(e){
        e.preventDefault();
        projectBelt();
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
        projectBelt();
    });

    $('html, body').animate({scrollTop:$(document).height()}, 1000);

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

		$('.project-belt').css('left', '-100%');
		$('.project-container').show();
	});

	$('.project-return').click(function() {

		$('.project-belt').css('left', '0%');
		$('.project-container').hide(2000);
	});

	$('#projects').click(function() {

		$('.project-belt').css('left', '0%');
		$('.project-container').hide(2000);
	});

}

function workLoad() {

	$.ajaxSetup({ cache: true });

	$('.thumb-unit').click(function() {

		var $this = $(this),
			newTitle = $this.find('strong').text(),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = '/project/' + newFolder + '.html';
			
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);


	});
}

function backToTop() {
	$(document).ready(function() {
			// Show or hide the sticky footer button
			$(window).scroll(function() {
				if ($(this).scrollTop() > 200) {
					$('.go-top').fadeIn(200);
				} else {
					$('.go-top').fadeOut(200);
				}
			});
			
			// Animate the scroll to top
			$('.go-top').click(function(event) {
				event.preventDefault();
				
				$('html, div').animate({scrollTop: 0}, 300);
			})
		});
}

function scrollEnd() {
			// 	$(
			//   function($)
			//   {
			//     $('#projectsSection').bind('scroll', function()
			//       {
			//         if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
			//         {
			//           alert('end reached');
			//         }
			//       })
			// }
			// );
	$('#projectsSection').on('DOMMouseScroll mousewheel', function(ev) {
	    var $this = $(this),
	        scrollTop = this.scrollTop,
	        scrollHeight = this.scrollHeight,
	        height = $this.height(),
	        delta = (ev.type == 'DOMMouseScroll' ?
	            ev.originalEvent.detail * -40 :
	            ev.originalEvent.wheelDelta),
	        up = delta > 0;

	    var prevent = function() {
	        ev.stopPropagation();
	        ev.preventDefault();
	        ev.returnValue = false;
	        return false;
	    }
	    
	    if (!up && -delta > scrollHeight - height - scrollTop) {
	        // Scrolling down, but this will take us past the bottom.
	        $this.scrollTop(scrollHeight);
	        return prevent();
	    } else if (up && delta > scrollTop) {
	        // Scrolling up, but this will take us past the top.
	        $this.scrollTop(0);
	        return prevent();
	    }
	});
}

