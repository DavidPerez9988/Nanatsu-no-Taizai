/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const leerMasBtns = document.querySelectorAll('.leer-mas-btn');

    leerMasBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const contenidoAdicional = this.closest('article').querySelector('.contenido-adicional');
            if (contenidoAdicional.style.display === 'none') {
                contenidoAdicional.style.display = 'block';
                this.textContent = 'Leer menos';
            } else {
                contenidoAdicional.style.display = 'none';
                this.textContent = 'Leer más';
            }
        });
    });
});
