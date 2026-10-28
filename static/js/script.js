// LUCENTE MOBILE MENU
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#mobile-menu");
    const close = document.querySelector(".mobile-menu-close");

    if (!toggle || !menu || !close) return;

    function openMenu() {
        menu.classList.add("is-open");
        menu.setAttribute("aria-hidden", "false");
        toggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        menu.classList.remove("is-open");
        menu.setAttribute("aria-hidden", "true");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    toggle.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);

    menu.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const targetId = link.getAttribute("href").slice(1);
            const target = document.getElementById(targetId);

            closeMenu();

            if (target) {
                event.preventDefault();
                history.replaceState(null, "", "#" + targetId);
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });
});
