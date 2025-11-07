// Menú responsive
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('open');
});

// Scroll suave a secciones
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Formulario de contacto (simulado)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMsg').textContent = '¡Gracias! Te contactaremos pronto 🚀';
  setTimeout(() => {
    document.getElementById('formMsg').textContent = '';
    document.getElementById('contactForm').reset();
  }, 3500);
});