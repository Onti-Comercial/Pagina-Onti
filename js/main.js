window.addEventListener('load', function() {
    var owl = $("#header-slider");
    if (owl.length) {
      owl.owlCarousel({
        singleItem: true,
        navigation: true,
        navigationText: ["<", ">"],
        transitionStyle: "fade",
        pagination: true,
      });
    }

    if ($("#Client_Logo").length) {
      $("#Client_Logo").owlCarousel({
        autoPlay: 5000,
        items: 6,
        responsiveClass: true,
        responsive: { 0: { items: 1 }, 480: { items: 1 }, 768: { items: 3 }, 1200: { items: 3 } }
      });
    }

    if ($("#blog-post").length) {
      $("#blog-post").owlCarousel({
        autoPlay: 5000,
        items: 3,
        responsiveClass: true,
        responsive: { 0: { items: 1 }, 480: { items: 1 }, 768: { items: 3 }, 1200: { items: 3 } }
      });
    }

    if ($('#mixed-items').length) {
      $('#mixed-items').mixItUp({
        animation: { animateResizeContainer: false }
      });
    }

    if (typeof WOW === "function") {
      new WOW().init();
    }
});