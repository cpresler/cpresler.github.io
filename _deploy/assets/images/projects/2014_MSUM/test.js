// Declare Variables
var slideWidth, slideTotal, reelWidth, position, current, slide,
		swap = function(before, after, name) {
			$(before).removeClass(name);
			$(after).addClass(name);
		},
		rotate = function(direction) {		
			current = $('.slide.active');
			// Get current position
			position = parseInt($('.slideReel').css('left'), 10);
			//console.log('current position: ' +  position + ', slide width: ' + slideWidth);

			if(direction === 'next') {
				slide = current.next();
				if(slide.attr('id')) {
					position = position - slideWidth + 'px';
					//console.log('new position: ' + position);	
					$('.slideReel').animate({'left': position}, 300);
				} else {
					slide = $('.slide:first');
					position = 0;
					$('.slideReel').css({'left': position + 'px'});
				}
			} else if(direction === 'prev') {
				slide = current.prev();
				if(slide.attr('id')) {
				position = position + slideWidth + 'px';
				//console.log('new position: ' + position);
				$('.slideReel').animate({'left': position}, 300);	
				} else {
					slide = $('.slide:last');
					position = slideWidth - reelWidth;
					//console.log('last slide position: ' + position);
					$('.slideReel').css({'left': position + 'px'});
				}
			} else if(direction === 'goTo') {
				// Get current slide number
				current_num = current.attr('id');
				current_num = current_num.substring(1);
				//console.log('current number: ' + current_num);
				// Generate slide number from page dot
				slide_num = slide.attr('rel');
				//console.log('destination slide number: ' + slide_num);
				var step = (current_num - slide_num) * slideWidth;
				//console.log('step size: ' + step);
				position = position + step;
				$('.slideReel').animate({'left': position}, 300);
				slide_num = 's' + slide_num;

				// Swap active slide
				swap(current,'#' + slide_num,'active');
				// Switch active status
				swap('.status a.onPage',slide,'onPage');
				// Exit
				return;		
			}
			// Set slide correct slide number
			var slide_num = slide.attr('id');
				slide_num = slide_num.substring(1);
			//console.log("slide number" + slide_num);
			// Swap active slide
			swap(current,slide,'active');
			// Swap active status
			swap('.status a.onPage','a[rel="' + slide_num + '"]','onPage');
		};

$(document).ready(function() {
	// Set up the carousel
		slideWidth = $('.carouselWindow').width();
		carouselHeight = slideWidth * 0.75;
		$('.carouselWindow').height(carouselHeight);
		$('.slide').width(slideWidth);
		//console.log('slide height: ' + carouselHeight);
		//console.log('width: ' + slideWidth);
		slideTotal = $('.slide').length;
		console.log('number of slides = ' + slideTotal);
		reelWidth = slideWidth * slideTotal;
		//console.log('reel width: ' + reelWidth);
		$('.slideReel').width(reelWidth);

		$('.slide').each(function(index) {
			var i = index + 1;
			$(this).attr('id', 's' + i);
			$('.status').append('<a class="dot" href="#" rel="' + i + '"></a>');
		});

	// Set first element as active
	$('.slide:first').addClass('active');
	//console.log('first is active');
	$('.status a:first').addClass('onPage');

	// Click to specific slide
	$('.status a').click(function() {
		slide = $(this);
		rotate('goTo');
			//console.log('clicked');
	});

	return slideWidth, slideTotal, reelWidth;
});  // end .ready
