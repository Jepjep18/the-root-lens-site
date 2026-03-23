(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();

	(function initBlogModal() {
	  var modal = document.getElementById('blog-modal');
	  var modalContent = document.getElementById('blog-modal-content');
	  var modalTitleId = 'blog-modal-title';
	  if (!modal || !modalContent) {
	    return;
	  }

	  function openBlog(targetId) {
	    var article = document.getElementById(targetId);
	    if (!article) {
	      return;
	    }
	    modalContent.innerHTML = article.innerHTML;
	    var title = modalContent.querySelector('h3');
	    if (title) {
	      title.id = modalTitleId;
	    }
	    modal.classList.add('is-visible');
	    modal.setAttribute('aria-hidden', 'false');
	    document.body.classList.add('blog-modal-open');
	  }

	  function closeBlog() {
	    modal.classList.remove('is-visible');
	    modal.setAttribute('aria-hidden', 'true');
	    modalContent.innerHTML = '';
	    document.body.classList.remove('blog-modal-open');
	  }

	  document.querySelectorAll('.blog-read-more').forEach(function(button) {
	    button.addEventListener('click', function() {
	      openBlog(button.getAttribute('data-blog-target'));
	    });
	  });

	  modal.querySelectorAll('[data-blog-close]').forEach(function(element) {
	    element.addEventListener('click', closeBlog);
	  });

	  document.addEventListener('keydown', function(event) {
	    if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
	      closeBlog();
	    }
	  });
	})();


	(function init() {
	  if (!document.querySelector(".days > .value")) {
	    return;
	  }

	  function getTimeRemaining(endtime) {
	    var t = Date.parse(endtime) - Date.parse(new Date());
	    var seconds = Math.floor((t / 1000) % 60);
	    var minutes = Math.floor((t / 1000 / 60) % 60);
	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
	    return {
	      'total': t,
	      'days': days,
	      'hours': hours,
	      'minutes': minutes,
	      'seconds': seconds
	    };
	  }
	  
	  function initializeClock(endtime){
	  var timeinterval = setInterval(function(){
	    var t = getTimeRemaining(endtime);
	    document.querySelector(".days > .value").innerText=t.days;
	    document.querySelector(".hours > .value").innerText=t.hours;
	    document.querySelector(".minutes > .value").innerText=t.minutes;
	    document.querySelector(".seconds > .value").innerText=t.seconds;
	    if(t.total<=0){
	      clearInterval(timeinterval);
	    }
	  },1000);
	}
	initializeClock(((new Date()).getFullYear()+1) + "/1/1")
	})()

})(jQuery);
