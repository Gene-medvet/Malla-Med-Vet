document.querySelectorAll('main .year li').forEach(li => {
  li.addEventListener('click', () => {
    const codigo = li.getAttribute('data-codigo');
    const creditos = li.getAttribute('data-creditos');
    const prerrequisitos = li.getAttribute('data-prerrequisitos');

    document.getElementById('detalle-codigo').textContent = codigo || '-';
    document.getElementById('detalle-creditos').textContent = creditos || '-';

    if (prerrequisitos) {
      const pre = prerrequisitos.split(',').join(', ');
      document.getElementById('detalle-prerrequisitos').textContent = pre || 'Ninguno';
    }

