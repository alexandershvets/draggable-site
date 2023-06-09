gsap.registerPlugin(Draggable, InertiaPlugin);

window.addEventListener('load', function () {
  setTimeout(() => {
    // Loader
    document.body.classList.add('loaded');

    // is not mobile
    if (window.matchMedia('(min-width: 992px)').matches) {
      // Drag & Drop
      Draggable.create('.gallery', {
        bounds: '.wrapper', // границы
        inertia: true, //
      });
    }
  }, 200);
});
