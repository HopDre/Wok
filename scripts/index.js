// Menu dropdown
const toggleBtn = document.querySelector('.btn-menu')
const toggleBtnIcon = document.querySelector('.btn-menu i')
const dropdownMenu = document.querySelector('.dropdown-menu')
toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}


// Slider
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Avanza al siguiente slide al hacer clic en el botón siguiente
    document.getElementById('nextBtn').addEventListener('click', nextSlide);

    // Retrocede al slide anterior al hacer clic en el botón anterior
    document.getElementById('prevBtn').addEventListener('click', prevSlide);

    // Avanza al siguiente slide cada 5 segundos
    const intervalId = setInterval(nextSlide, 5000);

    // Muestra el primer slide al cargar la página
    showSlide(currentSlide);
});