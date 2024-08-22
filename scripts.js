document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los enlaces de navegación
    const links = document.querySelectorAll('nav a');

    // Añadir un evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace
            const targetId = this.getAttribute('href').substring(1); // Obtener el ID del destino
            const targetElement = document.getElementById(targetId);

            // Desplazarse suavemente al elemento objetivo
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Seleccionar los elementos "ver más"
    const verMasLinks = document.querySelectorAll('.ver-mas');

    verMasLinks.forEach(link => {
        link.addEventListener('click', function () {
            const masInfo = this.closest('.descripcion').nextElementSibling;
            masInfo.style.display = masInfo.style.display === 'block' ? 'none' : 'block';
            this.textContent = masInfo.style.display === 'block' ? 'Ver menos' : 'Ver más';
        });
    });
});
