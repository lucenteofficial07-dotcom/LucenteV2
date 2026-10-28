
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal navigation links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Add a subtle effect to the navbar while scrolling
    const navbar = document.querySelector(".navbar");

    const updateNavbar = () => {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 20);
        }
    };

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
});

// Lucente Greek statue slideshow
document.addEventListener("DOMContentLoaded", () => {
    const slides = Array.from(
        document.querySelectorAll(".statue-slideshow .statue-slide")
    );

    if (slides.length !== 3) {
        console.error("Lucente slideshow: expected 3 images, found", slides.length);
        return;
    }

    let current = 0;

    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === 0);
    });

    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");

        console.log("Lucente slideshow showing image", current + 1);
    }, 3000);
});
