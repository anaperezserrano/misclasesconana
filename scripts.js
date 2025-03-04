document.getElementById('reservaForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const materia = document.getElementById('materia').value;
    const tema = document.getElementById('tema').value;
    const duracion = document.getElementById('duracion').value;
    const modalidad = document.getElementById('modalidad').value;
  
    const url = 'URL_DE_TU_GOOGLE_APPS_SCRIPT'; // Cambia esto por la URL de tu script
  
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ nombre, email, materia, tema, duracion, modalidad }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.text())
    .then(data => {
      alert('Reserva enviada con éxito. Te llegará un correo de confirmación.');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });