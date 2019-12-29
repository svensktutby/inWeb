var portfolio = $('#portfolio');

portfolio.slick({
  arrows: false,
  dots: true,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});

$('#portfolio-arrow-prev').on('click', function (evt) {
  evt.preventDefault();
  portfolio.slick('slickPrev');
});

$('#portfolio-arrow-next').on('click', function (evt) {
  evt.preventDefault();
  portfolio.slick('slickNext');
});
