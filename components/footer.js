const footer = document.createElement("footer");
footer.classList.add("footer");

footer.innerHTML = `
  <div class="footer-top">
    <h2>Join the Lumina Herb ritual</h2>
    <p>Get wellness tips, exclusive offers, and product updates</p>

    <div class="footer-subscribe">
      <input type="email" id="emailInput" placeholder="Enter your email">
      <button id="subscribeBtn">Subscribe</button>
    </div>

    <div id="message" class="footer-message"></div>
  </div>

  <div class="footer-bottom">
    <div class="footer-grid">

      <div class="footer-column">
        <h3>Lumina Herb</h3>
        <p>Holistic cannabis care for modern wellness.</p>
        <p>Discover plant-based self-care products.</p>
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

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const button = footer.querySelector("#subscribeBtn");

button.addEventListener("click", () => {
  const input = footer.querySelector("#emailInput");
  const message = footer.querySelector("#message");
  const email = input.value.trim();

  message.className = "footer-message";

  if (!email) {
    message.textContent = "Please enter your email";
    message.classList.add("error");
    return;
  }

  if (!isValidEmail(email)) {
    message.textContent = "Invalid email format";
    message.classList.add("error");
    return;
  }

  button.textContent = "Sending...";

  setTimeout(() => {
    message.textContent = "Subscribed successfully";
    message.classList.add("success");
    input.value = "";
    button.textContent = "Subscribe";
  }, 1200);
});

const home = document.getElementById("home");
const oldFooter = document.querySelector(".footer");
if (oldFooter) oldFooter.remove();
home.appendChild(footer);
