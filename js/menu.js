(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById('navToggle');
    const navClose = document.getElementById('navClose');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const navDropdowns = document.querySelectorAll('.nav__items.nav__dropdown');

    // 👉 Abrir menú hamburguesa
    navToggle?.addEventListener('click', () => {
      navMenu?.classList.add('nav__link--show');
      navMenu.style.visibility = 'visible';
    });

    // 👉 Cerrar menú
    navClose?.addEventListener('click', () => {
      navMenu?.classList.remove('nav__link--show');
      setTimeout(() => {
        navMenu.style.visibility = 'hidden';
      }, 500);
    });

    // 👉 Cerrar al hacer clic fuera
    navOverlay?.addEventListener('click', () => {
      navMenu?.classList.remove('nav__link--show');
      navOverlay?.classList.remove('nav__overlay--show');
      setTimeout(() => {
        navMenu.style.visibility = 'hidden';
      }, 500);
    });

    // 👉 Submenús en móvil (abre al primer toque, navega al segundo)
navDropdowns.forEach(item => {
  const toggleLink = item.querySelector('.nav__links');
  const submenu = item.querySelector('.nav__submenu');

  toggleLink?.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      const isActive = item.classList.contains('active');

      // Si el submenú NO está abierto, lo abrimos y prevenimos navegación
      if (!isActive) {
        e.preventDefault();
        navDropdowns.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
      // Si YA está abierto y el usuario hace clic de nuevo, permitimos navegar
      // No se usa preventDefault esta vez
    }
  });
});


    // 👉 Hero animación (si aplica)
    const hero = document.querySelector(".hero__container");
    hero?.classList.add("active");

    const heroTitle = document.querySelector(".hero__container_inicio .hero__title");
    const heroParagraph = document.querySelector(".hero__container_inicio .hero__paragraph");
    heroTitle?.classList.add("active");
    heroParagraph?.classList.add("active");

    // 👉 Animación al hacer scroll
    const imageLinks = document.querySelectorAll(".image-link");
    function showOnScroll() {
      imageLinks.forEach(link => {
        const rect = link.getBoundingClientRect();
        link.classList.toggle("visible", rect.top < window.innerHeight - 100);
      });
    }
    window.addEventListener("scroll", showOnScroll);
    showOnScroll();

    // 👉 Alerta de descarga
    document.querySelectorAll(".boton-descarga").forEach(btn => {
      btn.addEventListener("click", () => {
        alert("✅ Tu descarga está comenzando...");
      });
    });

    // 👉 Carrusel de videos (si hay)
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
