particlesJS("background", {

  particles: {
      number: {
          value: 25, // Number of Particles (count)
          density: {
              enable: true,
              value_area: 300, // Area where particles will be distributed
          },
      },

      color: {
          value: "#fff", // Particles color
      },
      shape: {
          type: "circle", // Shape type
      },
      opacity: {
          value: 0.8, // Base opacity of particles
          random: true,
          anum: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
          },
      },
      size: {
          value: 5, // Base size of particles
          random: true,
          anim: {
              enable: true,
              speed: 4,
              size_min: 0.3,
              sync: false,
          },
      },

      // Connecting lines
      line_linked: {
          enable: true,
          distance: 150, // Maximum distance between linked particles
          color: "#3273a8",
          opacity: 0.4,
          width: 1,
      },

      // Particle movement
      move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce", // Behavior when particles move out of the canvas
          bounce: false,
      },
  },
  // Interactivity settings
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: {
              enable: true, // Enable hover interactivity
              mode: "repulse",
          },
          onclick: {
              enable: true, // Enable for click
              mode: "push", // Push particles on click
          },
          resize: true, // Resize particles animation on window resize
      },
  },

  // Detect retina displays
  retina_detect: true,

});

// Espera a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  const goUpButton = document.getElementById('go-up');

  // Añade un evento clic al enlace "Go Up"
  goUpButton.addEventListener('click', function() {
      // Obtiene la posición actual de desplazamiento vertical
      const currentPosition = window.scrollY;

      // Define la posición a la que quieres desplazarte (en este caso, arriba)
      const targetPosition = 0;

      // Calcula la distancia que se debe desplazar en cada fotograma
      const distance = targetPosition - currentPosition;

      // La duración de la animación en milisegundos
      const duration = 1000; // Puedes ajustar este valor según tus preferencias

      let start = null;

      // Crea una función para animar el desplazamiento
      function animateScroll(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;

          // Calcula la nueva posición de desplazamiento
          window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));

          if (progress < duration) {
              requestAnimationFrame(animateScroll);
          }
      }

      // Función para la animación suave (puedes ajustar esta función)
      function easeInOutCubic(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t * t + b;
          t -= 2;
          return (c / 2) * (t * t * t + 2) + b;
      }

      // Inicia la animación
      requestAnimationFrame(animateScroll);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800, // Duración de la animación en milisegundos
        once: true, // La animación solo se ejecutará una vez
    });
});
