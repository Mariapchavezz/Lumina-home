// menu.js - Tyra Micolta

(function () {

  const createCard = (icon, text, className) => `
    <div class="card ${className}">
      <span>${icon}</span>
      <p>${text}</p>
    </div>
  `;

  const render = () => {
    const container = document.createElement("section");
    container.className = "menu-section";

    container.innerHTML = `
      <div class="main-container">

        <div class="hero">
          <h1>Create your daily wellness ritual</h1>
          <p>
            Transform your self-care routine with our thoughtfully crafted cannabis wellness products. 
            Each product is designed to bring calm, balance, and natural beauty to your day.
          </p>
          <a href="#" id="exploreBtn">Explore rituals →</a>

          <div class="hero-img"></div>
        </div>

        <div class="section" id="rituals">
          <h2>Shop by wellness goal</h2>
          <p>Find the perfect product for your needs</p>

          <div class="carousel">
            ${createCard("🌿", "Relax", "relax")}
            ${createCard("✨", "Skin", "skin")}
            ${createCard("🌙", "Sleep", "sleep")}
            ${createCard("⭐", "Mood", "mood")}
            ${createCard("🧘", "Rituals", "rituals")}
          </div>
        </div>

      </div>
    `;

    // 🔥 CLAVE: se agrega después de #home (igual que productos)
    document.querySelector("#home")?.after(container);

    // SCROLL
    const exploreBtn = container.querySelector("#exploreBtn");

    exploreBtn.addEventListener("click", (e) => {
      e.preventDefault();

      container.querySelector("#rituals").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", render)
    : render();

})();