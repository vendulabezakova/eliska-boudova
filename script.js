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
const numberElements = document.querySelectorAll('.number-animation');
// Pro každý element s číslem
numberElements.forEach(numberElement => {
    // Načtení hodnoty z HTML kódu
    const targetNumber = parseInt(numberElement.innerText);
    // Animace
    animateNumber(numberElement, targetNumber);
});

function animateNumber(element, targetNumber) {
    // Počáteční hodnota
    let number = 0;
    // Interval
    const interval = setInterval(() => {
        // Zvyšování čísla
        number++;
        // Zobrazení aktuální hodnoty
        element.innerText = number;
        // Pokud dosáhne cílové hodnoty, zastaví se interval
        if (number === targetNumber) {
            clearInterval(interval);
        }
    }, 60); // Časový interval animace (například každých 100ms)
}

// Spuštění animace s definovanou rychlostí
const intervalId = setInterval(animateNumber, 1000 / speed); // Vytvoření intervalu
//Konec animace na načítání čísel