// ========================
// 1️⃣ PARTICLES.JS SETUP (Interactive + Color Change)
// ========================
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": { "enable": true, "value_area": 1000 }
    },
    "color": { "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#fff" },
      "polygon": { "nb_sides": 5 }
    },
    "opacity": {
      "value": 0.6,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": { "enable": true, "speed": 4, "size_min": 0.3, "sync": false }
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ffffff",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["grab", "bubble"]
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 180,
        "line_linked": {
          "opacity": 1,
          "color": "#00ffcc"
        }
      },
      "bubble": {
        "distance": 200,
        "size": 6,
        "duration": 2,
        "opacity": 1,
        "color": {
          "value": ["#00ffcc", "#ff4081", "#ffd740", "#69f0ae"]
        }
      },
      "repulse": { "distance": 200, "duration": 0.4 }
    }
  },
  "retina_detect": true
});

// ========================
// 2️⃣ CUSTOM PARALLAX MOTION FOLLOW
// ========================
const particleCanvas = document.getElementById("particles-js");
let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", (e) => {
  // Get cursor position relative to center
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  // Smooth transition to give inertia
  mouseX += (x - mouseX) * 0.05;
  mouseY += (y - mouseY) * 0.05;

  // Apply transform for parallax effect
  particleCanvas.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

// ========================
// 3️⃣ SKILL CIRCLES ANIMATION
// ========================
const circles = document.querySelectorAll('.circle');

window.addEventListener('scroll', () => {
  circles.forEach(circle => {
    const rect = circle.getBoundingClientRect();
    const percentage = circle.getAttribute('data-percentage');
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    if (rect.top < window.innerHeight - 100) {
      const progress = circle.querySelector('svg circle:nth-child(2)');
      progress.style.strokeDashoffset = offset;

      // Animate number counter
      const num = circle.querySelector('h3');
      let count = 0;
      const interval = setInterval(() => {
        if (count >= percentage) clearInterval(interval);
        else {
          count++;
          num.innerHTML = count + "<span>%</span>";
        }
      }, 20);
    }
  });
});

// ========================
// 4️⃣ HERO SECTION ANIMATIONS (GSAP)
// ========================
gsap.from(".intro", { y: 50, opacity: 0, duration: 1 });
gsap.from(".tagline", { y: 60, opacity: 0, delay: 0.5 });
gsap.from(".cta", { scale: 0, opacity: 0, delay: 1 });

// ========================
// 5️⃣ SCROLL-TRIGGERED SECTION ANIMATIONS
// ========================
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 100,
    duration: 1,
  });
});

// ========================
// 6️⃣ FADE-IN PARTICLES ON SCROLL
// ========================
window.addEventListener("scroll", () => {
  const particleLayer = document.getElementById("particles-js");
  const aboutSection = document.getElementById("about");
  if (aboutSection.getBoundingClientRect().top < window.innerHeight / 1.2) {
    particleLayer.style.opacity = "1";
  }
});
