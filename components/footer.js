document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home");

  const footer = document.createElement("div");
  footer.className = "footer";

  footer.innerHTML = `
    <div class="footer-top">
      <h2>Join the Lumina Herb ritual</h2>
      <p>Get wellness tips, exclusive offers, and product updates</p>
      <div class="footer-subscribe">
        <input type="email" id="emailInput" placeholder="Enter your email">
        <button id="subscribeBtn">Subscribe</button>
      </div>
      <div class="footer-message" id="footerMessage"></div>
    </div>

    <div class="footer-bottom">
      <div class="footer-grid">
        <div class="footer-column">
          <h3>Lumina Herb</h3>
          <p>Holistic cannabis care for modern wellness.<br>Discover plant-based self-care products.</p>
        </div>

        <div class="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-copy">
        © 2026 Lumina Herb. All rights reserved.
      </div>
    </div>
  `;

  home.appendChild(footer);

  const input = document.getElementById("emailInput");
  const button = document.getElementById("subscribeBtn");
  const message = document.getElementById("footerMessage");

  button.addEventListener("click", () => {
    const email = input.value.trim();

    if (!email) {
      message.textContent = "Please enter your email";
      return;
    }

    message.textContent = "Subscribed successfully";
    input.value = "";
  });
});