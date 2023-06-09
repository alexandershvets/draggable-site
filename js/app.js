gsap.registerPlugin(Draggable);

window.addEventListener('load', function () {
  // Drag & Drop
  Draggable.create('.gallery', {
    bounds: '.wrapper', // границы
  });
});
