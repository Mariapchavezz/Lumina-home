(function () {
  const productos = [
    {
      id: 1,
      nombre: "Relax",
      descripcion: "CBD Calm Oil",
      precio: "$49",
      imagen: "https://res.cloudinary.com/dhan9gfxc/image/upload/v1776134006/image_4_rwferg.png",
      alt: "CBD calming oil dropper",
    },
    {
      id: 2,
      nombre: "Rituals",
      descripcion: "Morning Ritual Oil",
      precio: "$52",
      imagen: "https://res.cloudinary.com/dhan9gfxc/image/upload/v1776134006/image_8_a1cwas.png",
      alt: "morning skincare routine",
    },
    {
      id: 3,
      nombre: "Mood",
      descripcion: "Energy Balance Balm",
      precio: "$42",
      imagen: "https://res.cloudinary.com/dhan9gfxc/image/upload/v1776134006/image_7_civlvz.png",
      alt: "natural balm product",
    },
    {
      id: 4,
      nombre: "Sleep",
      descripcion: "Night Ritual Serum",
      precio: "$65",
      imagen: "https://res.cloudinary.com/dhan9gfxc/image/upload/v1776134006/image_5_h9mgqf.png",
      alt: "night skincare serum",
    },
  ];

  const createCard = (p) => `
    <article class="producto-card">
      <div class="producto-card__image-wrap">
        <img src="${p.imagen}" alt="${p.alt}">
      </div>

      <div class="producto-card__info">
        <h3 class="producto-card__name">${p.nombre}</h3>
        <p class="producto-card__desc">${p.descripcion}</p>
        <p class="producto-card__price">${p.precio}</p>
      </div>
    </article>
  `;

  const render = () => {
    const container = document.getElementById("productos");

    container.innerHTML = `
      <section class="productos-section">

        <div class="productos-header">
          <div>
            <h2>Featured products</h2>
            <p>Our most loved wellness essentials</p>
          </div>
          <a href="#">View all →</a>
        </div>

        <div class="productos-grid">
          ${productos.map(createCard).join("")}
        </div>

      </section>
    `;
  };

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", render)
    : render();
})();