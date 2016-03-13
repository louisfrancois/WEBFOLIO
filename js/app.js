$(document).ready(function() {
  setBindings();
});

function setBindings() {


	  	$(".nav__item_a").click(function(e) {
		  		e.preventDefault();
		  		var sectionID = e.currentTarget.id + "Section";
		      	// alert('button id ' + e.currentTarget.id);

		      	$("html body").animate({
			      		scrollTop: $("#" + sectionID).offset().top
		      	}, 1000);

  		});

}


