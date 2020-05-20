$('.slider').slick({
	arrows: false,
	dots: true,
	infinite: true,
	speed: 700,
	slidesToShow: 1,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 3000
});


$('.works__slider').slick({
	arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
