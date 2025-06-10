(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // Referencias del menú
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const navDropdowns = document.querySelectorAll('.nav__items.nav__dropdown');

    // 👉 Abrir menú hamburguesa
    navToggle?.addEventListener('click', () => {
      navMenu?.classList.add('nav__link--show');
       // Asegurar visibilidad tras la animación
      navMenu.style.visibility = 'visible';
    });

    // 👉 Cerrar menú con la X
    navClose?.addEventListener('click', () => {
      navMenu?.classList.remove('nav__link--show');
       // Ocultar tras la transición
      setTimeout(() => {
        navMenu.style.visibility = 'hidden';
      }, 500); // debe coincidir con la duración en tu CSS
    });

    // 👉 Cerrar menú al clicar fuera (overlay)
    navOverlay?.addEventListener('click', () => {
      navMenu?.classList.remove('nav__link--show');
      navOverlay?.classList.remove('nav__overlay--show');
      setTimeout(() => {
        navMenu.style.visibility = 'hidden';
      }, 500);
    });

    // 👉 Control de submenús en móvil
    navDropdowns.forEach(item => {
      const link = item.querySelector('.nav__links');
      link?.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          // Si no está activo, cerramos los demás y abrimos este
          if (!item.classList.contains('active')) {
            navDropdowns.forEach(other => other.classList.remove('active'));
            item.classList.add('active');
          } else {
            // Si ya estaba abierto, lo cerramos
            item.classList.remove('active');
          }
        }
      });
    });

    // 👉 Animaciones de hero (opcional, si lo usas)
    const hero = document.querySelector(".hero__container");
    hero?.classList.add("active");
    const heroTitle = document.querySelector(".hero__container_inicio .hero__title");
    const heroParagraph = document.querySelector(".hero__container_inicio .hero__paragraph");
    heroTitle?.classList.add("active");
    heroParagraph?.classList.add("active");

    // 👉 Efecto de aparición al hacer scroll (opcional)
    const imageLinks = document.querySelectorAll(".image-link");
    function showOnScroll() {
      imageLinks.forEach(link => {
        const rect = link.getBoundingClientRect();
        link.classList.toggle("visible", rect.top < window.innerHeight - 100);
      });
    }
    window.addEventListener("scroll", showOnScroll);
    showOnScroll();

    // 👉 Alertas de descarga (opcional)
    document.querySelectorAll(".boton-descarga").forEach(btn => {
      btn.addEventListener("click", () => {
        alert("✅ Tu descarga está comenzando...");
      });
    });

    // 👉 Carrusel de videos (opcional)
    const videoList = document.querySelector("#carousel");
    const cards = document.querySelectorAll(".video-card");
    if (videoList && cards.length) {
      const totalVisible = Math.floor(videoList.offsetWidth / cards[0].offsetWidth);
      for (let i = 0; i < totalVisible; i++) {
        videoList.appendChild(cards[i].cloneNode(true));
      }
      let index = 0;
      const cardWidth = cards[0].offsetWidth;
      let isTransitioning = false;
      function slideNext() {
        if (isTransitioning) return;
        isTransitioning = true;
        index++;
        videoList.style.transition = "transform 0.5s ease-in-out";
        videoList.style.transform = `translateX(-${index * cardWidth}px)`;
        setTimeout(() => {
          if (index >= cards.length) {
            index = 0;
            videoList.style.transition = "none";
            videoList.style.transform = "translateX(0)";
          }
          isTransitioning = false;
        }, 500);
      }
      setInterval(slideNext, 4000);
    }
  });
})();
