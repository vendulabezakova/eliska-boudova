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

//Animace na načítání čísel
const numberElement = document.getElementById('number');
// Počáteční hodnota
let number = 0;
// Konečná hodnota
const targetNumber = 100;
// Rychlost animace (počet kroků na sekundu)
const speed = 100; // Například 100 kroků za sekundu
// Funkce pro animaci čísla
function animateNumber() {
    // Inkrementace čísla
    number++;
    // Aktualizace textu elementu
    numberElement.textContent = number;
    // Podmínka pro zastavení animace, když dosáhneme cílového čísla
    if (number === targetNumber) {
        clearInterval(intervalId); // Zastavení intervalu
    }
}
// Spuštění animace s definovanou rychlostí
const intervalId = setInterval(animateNumber, 1000 / speed); // Vytvoření intervalu
//Konec animace na načítání čísel