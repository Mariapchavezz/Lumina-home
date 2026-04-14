// header.js - Maria Chavez
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");

  header.innerHTML = `
  <header class="hero">
    <nav class="navbar">
      <div class="logo">Lumina Herb</div>

      <ul class="nav-links">
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div class="icons">
        <span>🛒</span>
        <span>👤</span>
      </div>
    </nav>

    <div class="hero-content">
      <div class="text">
        <h1>Natural balance<br>through plant-<br>based wellness</h1>
        <button>Shop collection →</button>
      </div>

      <div class="image-container">
        <div class="glass-card">
          <img src="https://res.cloudinary.com/dsybz6dpt/image/upload/v1776133537/image_2-2_yxrxvc.png" />
        </div>
      </div>
    </div>
  </header>

  <section class="features">
    <div class="feature">
      <div class="icon green">🌿</div>
      <h4>Plant-based ingredients</h4>
      <p>Pure, organic and CBD derived from natural sources</p>
    </div>

    <div class="feature">
      <div class="icon purple">💜</div>
      <h4>Holistic wellness</h4>
      <p>Designed for complete mind and body balance</p>
    </div>

    <div class="feature">
      <div class="icon yellow">✨</div>
      <h4>Clean formulas</h4>
      <p>No harsh chemicals, only natural goodness</p>
    </div>
  </section>
  `;
});