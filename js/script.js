//? PARTICULAS DE FONDO
particlesJS(
    {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#070202"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4813876591144046,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 173.6152213199492,
      "color": "#000000",
      "opacity": 0.5287372649289362,
      "width": 0.631328077527088
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);

// JS para manejar el formulario de contacto usando mailto:
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return; // no hay formulario, nada que hacer

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const recipient = form.dataset.recipient || 'crisdevapo@gmail.com';
    if (!recipient || recipient === 'crisdevapo@gmail.com') {
      // Aviso al usuario para que reemplace el email por uno real
      const proceed = confirm('El destinatario del formulario está configurado como "crisdevapo@gmail.com". ¿Deseas continuar de todos modos? (Reemplaza el correo en data-recipient por tu email para funcionar correctamente)');
      if (!proceed) return;
    }

    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const from = encodeURIComponent(document.getElementById('email').value.trim());
    const subject = encodeURIComponent(document.getElementById('subject').value.trim());
    const message = encodeURIComponent(document.getElementById('message').value.trim());

    const bodyLines = [
      `Nombre: ${name}`,
      `Correo: ${from}`,
      '',
      `${message}`
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Abrir el cliente de correo del usuario
    window.location.href = mailto;
  });
});