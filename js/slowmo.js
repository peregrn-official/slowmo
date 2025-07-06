document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const tracker = document.querySelector('.tracker');

  // État d’activation du mode slow
  let slowActive = false;

  // Fonction d’activation cosmique 🐢
  function toggleSlowMo() {
    slowActive = !slowActive;
    logo.classList.toggle('slowmo');
  }

  // Clique lent sur le logo = toggle slowmo
  if (logo) {
    logo.addEventListener('click', () => {
      toggleSlowMo();
    });
  }

  // Simulation de croissance lente
  const startDate = new Date('2024-07-01'); // date fictive de lancement
  const today = new Date();
  const daysElapsed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const growth = (0.001 * daysElapsed).toFixed(3);

  if (tracker) {
    tracker.textContent = `📈 Croissance cosmique : +${growth} % depuis le début`;
  }
});
