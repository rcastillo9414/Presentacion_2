// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Validación de formularios con Bootstrap
// (Patrón oficial de docs: https://getbootstrap.com/docs/5.3/forms/validation/)
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
