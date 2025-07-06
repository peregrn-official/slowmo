document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const tracker = document.querySelector('.tracker');

  // Animation slowmo toggle
  logo?.addEventListener('click', () => {
    logo.classList.toggle('slowmo');
  });

  // Récupération du prix via Solana Tracker API
  async function fetchPrice() {
    try {
      const res = await fetch('https://public-api.solanatracker.io/tokens/FQwBR2CVt2vyFZeqBQ3veGYxpYgFYi4NuHfHoi7tpump');
      const data = await res.json();
      const price = data?.token?.price?.usd;

      if (price && tracker) {
        tracker.textContent = `💸 Prix actuel : $${price.toFixed(4)} USD`;
      }
    } catch (err) {
      tracker.textContent = 'Erreur de chargement du prix 🐌';
    }
  }

  fetchPrice();
  setInterval(fetchPrice, 30000); // mise à jour toutes les 30 sec
});
