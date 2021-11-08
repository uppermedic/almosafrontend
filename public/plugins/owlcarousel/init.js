$(document).ready(function () {
  $('.home-centers .owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 100, ////   width: 394.74px;
    dots: false,
    // center: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      840: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  $('.testimonial .owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    dots: true,
    // center: true,
    navText: [
      '<i class="fas fa-long-arrow-alt-left"></i>',
      '<i class="fas fa-long-arrow-alt-right"></i>'
    ],
    responsive: {
      0: {
        items: 1,
        nav: true
      }
    }
  });
});
