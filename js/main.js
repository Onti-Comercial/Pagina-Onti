window.addEventListener('load', function() {
  // Retrasamos la ejecución de los carruseles hasta que el navegador esté inactivo
  // (O si el navegador es viejo, le damos 500ms de retraso)
  const initPlugins = function() {
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
  };

  //requestIdleCallback ejecuta el código cuando el procesador del celular ya no está ocupado
  if ('requestIdleCallback' in window) {
    requestIdleCallback(initPlugins);
  } else {
    setTimeout(initPlugins, 500); 
  }
});