const app = document.getElementById("home");

app.innerHTML = `
  <div class="main-container">

    <div class="hero">
      <h1>Create your daily wellness ritual</h1>
      <p>
        Transform your self-care routine with our thoughtfully crafted cannabis wellness products. 
        Each product is designed to bring calm, balance, and natural beauty to your day.
      </p>
      <a href="#">Explore rituals →</a>

      <div class="hero-img"></div>
    </div>

    <div class="section">
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

function createCard(icon, text, className) {
  return `
    <div class="card ${className}">
      <span>${icon}</span>
      <p>${text}</p>
    </div>
  `;
}