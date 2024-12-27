window.onload = function () {
  Particles.init({
    selector: ".background",
    maxParticles: 500,
    connectParticles: false,
    color: "#000000",
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 500,
          color: "#000000",
          connectParticles: false,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 500,
          color: "#000000",
          connectParticles: false,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 500,
          color: "#000000",
          connectParticles: false,
        },
      },
    ],
  });
};
