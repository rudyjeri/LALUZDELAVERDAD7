(function () {
    // Menú de navegación
    const openButton = document.querySelector(".nav__menu");
    const menu = document.querySelector(".nav__link");
    const closeMenu = document.querySelector(".nav__close");

    if (openButton && menu && closeMenu) {
        openButton.addEventListener("click", () => {
            menu.classList.add("nav__link--show");
        });

        closeMenu.addEventListener("click", () => {
            menu.classList.remove("nav__link--show");
        });
    }

    // Efecto de aparición de imágenes al hacer scroll
    const imageLinks = document.querySelectorAll(".image-link");

    function showOnScroll() {
        imageLinks.forEach((link) => {
            const rect = link.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                link.classList.add("visible");
            } else {
                link.classList.remove("visible");
            }
        });
    }

    document.querySelectorAll(".boton-descarga").forEach(btn => {
        btn.addEventListener("click", () => {
          alert("✅ Tu descarga está comenzando...");
        });
      });
      
      document.addEventListener("DOMContentLoaded", () => {
        const hero = document.querySelector(".hero__container");
        hero.classList.add("active");
  });
  document.addEventListener("DOMContentLoaded", function () {
    const videoList = document.querySelector("#carousel");
    const cards = document.querySelectorAll(".video-card");

    // Clonamos los primeros artículos para un desplazamiento sin huecos
    const totalVisible = Math.floor(videoList.offsetWidth / cards[0].offsetWidth);
    for (let i = 0; i < totalVisible; i++) {
        let clone = cards[i].cloneNode(true);
        videoList.appendChild(clone);
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

        // Cuando llegamos al final, reiniciamos sin animación
        setTimeout(() => {
            if (index >= cards.length) {
                index = 0;
                videoList.style.transition = "none";
                videoList.style.transform = "translateX(0)";
            }
            isTransitioning = false;
        }, 500);
    }

    setInterval(slideNext, 4000); // Cambia cada 4 segundos
});
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero__container_inicio .hero__title");
  const heroParagraph = document.querySelector(".hero__container_inicio .hero__paragraph");

  heroTitle.classList.add("active");
  heroParagraph.classList.add("active");
});

 // Cerrar menú (por botón de cerrar)
 navClose.addEventListener('click', () => {
  navMenu.classList.remove('nav__link--show');
  navOverlay.classList.remove('nav__overlay--show');
});
})();

