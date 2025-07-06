document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('slowMoBtn');
  const statusText = document.getElementById('status');
  const logo = document.querySelector('.logo');

  let isActive = false;

  function toggleSlowMo() {
    isActive = !isActive;

    logo.classList.toggle('slowmo', isActive);
    statusText.textContent = isActive ? 'Effet SlowMo activé ✨' : 'Effet désactivé';
    btn.textContent = isActive ? 'Désactiver le SlowMo' : 'Activer le SlowMo';
  }

  btn.addEventListener('click', toggleSlowMo);
});
