// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('open');
});

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Dolů
        document.querySelector("nav").style.top = "-100px";
    } else {
        // Nahoru
        document.querySelector("nav").style.top = "0";
    }
    lastScrollTop = currentScroll;
});

// Detekce jazyka prohlížeče a načtení odpovídající verze stránky
window.addEventListener('DOMContentLoaded', function() {
    const lang = navigator.language || navigator.userLanguage;

    if (lang.startsWith('cs')) {
        // Načíst českou verzi
        // Není potřeba žádná akce, pokud uživatel navštíví již českou verzi
    } else {
        // Načíst anglickou verzi
        if (window.location.pathname !== "/en/index.html") {
            window.location.href = 'en/index.html';
        }
    }
});
