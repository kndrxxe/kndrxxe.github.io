window.onload = function () {
  Particles.init({
    selector: ".background",
    maxParticles: 150,
    connectParticles: true,
    color: "#000000",
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 100,
          color: "#000000",
          connectParticles: true,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 80,
          color: "#000000",
          connectParticles: true,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 60,
          color: "#000000",
          connectParticles: true,
        },
      },
    ],
  });
};
