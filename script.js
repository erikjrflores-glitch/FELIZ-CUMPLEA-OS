// Inicializar librería de animaciones
AOS.init({ duration: 1000, once: true });

// Función para bajar a la galería e iniciar música
function scrollToSection(id) {
    const element = document.getElementById(id);
    const audio = document.getElementById('musicaFondo');
    
    if (audio) {
        // Truco: Bajar el volumen, darle play y luego subirlo para evitar el lag
        audio.volume = 0.5; 
        audio.play().then(() => {
            console.log("Sonando perfectamente");
        }).catch(error => {
            console.log("Error de carga rápida:", error);
        });
    }

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para pausar/activar música con el botón flotante
function toggleMusic() {
    const audio = document.getElementById('musicaFondo');
    const btn = document.getElementById('musicToggle');
    if (audio.paused) {
        audio.play();
        btn.innerHTML = '🔊';
    } else {
        audio.pause();
        btn.innerHTML = '🔇';
    }
}

// Crear partículas flotantes (corazones y estrellas)
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const emojis = ['❤️', '✨', '💖', '⭐', '💗'];
    
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(particle);
    }
}

createParticles();

// Manejar el botón de "Me gusta"
function toggleLike(btn) {
    const icon = btn.querySelector('.heart-icon');
    if(icon.innerHTML === '🤍') {
        icon.innerHTML = '❤️';
        btn.style.transform = 'scale(1.5)';
        setTimeout(() => btn.style.transform = 'scale(1)', 200);
    } else {
        icon.innerHTML = '🤍';
    }
}

// Activar animación de texto del mensaje final al hacer scroll
window.addEventListener('scroll', () => {
    const texts = document.querySelectorAll('.message-text');
    texts.forEach((text, index) => {
        const position = text.getBoundingClientRect().top;
        if(position < window.innerHeight - 100) {
            setTimeout(() => {
                text.classList.add('fade-in-animate');
            }, index * 300);
        }
    });
});