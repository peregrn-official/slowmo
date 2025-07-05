async function fetchData() {
  try {
    const res = await fetch("https://api.pump.fun/api/v0/coins/FQwBR2CVt2vyFZeqBQ3veGYxpYgFYi4NuHfHoi7tpump");
    const data = await res.json();

    const liquidity = data.liquiditySol || 0;
    const threshold = data.graduationThresholdSol || 1;
    const percent = threshold > 0 ? (liquidity / threshold) * 100 : 0;

    // 🎯 Met à jour la barre de Bonding Curve
    document.getElementById("curveBar").style.width = percent.toFixed(1) + "%";

    // ✏️ Met à jour le texte du pourcentage
    document.getElementById("curvePercent").textContent = percent.toFixed(1) + "%";

    // 💧 Affiche la liquidité en SOL
    document.getElementById("liveLiquidity").textContent = liquidity.toFixed(2) + " SOL";

    // 🟢 Active la bannière animée si dispo
    if (liquidity > 0) {
      const banner = document.getElementById("curveBanner");
      banner.style.display = "block";
      window.addEventListener("scroll", () => {
        const y = window.scrollY;
        banner.style.transform = `translateY(${Math.sin(y / 100) * 5}px)`;
      });
    }

  } catch (e) {
    console.error("Erreur Pump.fun 🐌", e);
    document.getElementById("curvePercent").textContent = "❌";
    document.getElementById("liveLiquidity").textContent = "indisponible";
  }
}

fetchData();
