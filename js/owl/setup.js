$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  itemsDesktop: [200, 3],
  itemsDesktopSmall: [150, 3],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 7,
      itemsDesktop: [200, 3],
      itemsDesktopSmall: [150, 3],
    },
  },
});
 