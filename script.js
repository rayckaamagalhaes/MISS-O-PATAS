// Navegação por abas
const abas = document.querySelectorAll('.aba');
const botoesNav = document.querySelectorAll('.nav-btn');

function abrirAba(id) {
  abas.forEach(a => a.classList.toggle('active', a.id === id));
  botoesNav.forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  // pausa vídeos ao sair da galeria
  if (id !== 'galeria') document.querySelectorAll('video').forEach(v => v.pause());
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', '#' + id);
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', () => abrirAba(el.dataset.tab));
});

// Abre a aba indicada na URL (ex.: index.html#leis)
const inicial = location.hash.replace('#', '');
if (inicial && document.getElementById(inicial)) abrirAba(inicial);

// Ampliar fotos (lightbox)
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.fotos img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});

lightbox.addEventListener('click', () => lightbox.classList.remove('open'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});
