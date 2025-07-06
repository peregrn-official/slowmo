async function fetchData() {
  try {
    const res = await fetch("https://api.pump.fun/api/v0/coins/FQwBR2CVt2vyFZeqBQ3veGYxpYgFYi4NuHfHoi7tpump");
    const data = await res.json();

    const liquidity = data.liquiditySol || 0;
    const threshold = data.graduationThresholdSol || 1;
    const percent = threshold > 0 ? (liquidity / threshold) * 100 : 0;

    document.getElementById("curveBar").style.width = percent.toFixed(1) + "%";
    document.getElementById("curvePercent").textContent = percent.toFixed(1) + "%";
    document.getElementById("liveLiquidity").textContent = liquidity.toFixed(2) + " SOL";

    if (liquidity > 0) {
      document.getElementById("curveBanner").style.display = "block";
    }

  } catch (e) {
    console.error("Erreur Pump.fun 🐌", e);
    document.getElementById("curvePercent").textContent = "❌";
    document.getElementById("liveLiquidity").textContent = "indisponible";
  }
}

fetchData();
