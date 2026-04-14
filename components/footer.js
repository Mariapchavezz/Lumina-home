/* footer.js - Luisa Hoyos*/

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("footer");

  if (!container) return;

  container.innerHTML = `
    <div class="footer">
      <div class="footer-top">
        <h2>Join the Lumina Herb ritual</h2>
        <p>Get wellness tips, exclusive offers, and product updates</p>
        <div class="footer-subscribe">
          <input type="email" id="emailInput" placeholder="Enter your email">
          <button id="subscribeBtn">Subscribe</button>
        </div>
        <!-- FIX: se agrega el div footer-message que faltaba en HTML original (ya estaba, se conserva) -->
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
            <!-- FIX: se agregan etiquetas <a> para que los estilos li a apliquen -->
            <ul>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Follow Us</h3>
            <!-- FIX: se agregan etiquetas <a> para que los estilos li a apliquen -->
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
    </div>
  `;

  const input = document.getElementById("emailInput");
  const button = document.getElementById("subscribeBtn");
  const message = document.getElementById("footerMessage");

  button.addEventListener("click", () => {
    const email = input.value.trim();

    if (!email) {
      message.textContent = "Please enter your email";
      message.className = "footer-message error";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.textContent = "Please enter a valid email address";
      message.className = "footer-message error";
      return;
    }

    message.textContent = "✓ Subscribed successfully!";
    message.className = "footer-message success";
    input.value = "";
  });
});
