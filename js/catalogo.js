// Catálogo: pinta las tarjetas desde PRODUCTOS (productos.js) y aplica los filtros.
(() => {
  const lista = document.getElementById("lista-productos");
  const contenedor = document.getElementById("filtros");
  const fila = document.getElementById("filtros-fila");
  const btnToggle = document.getElementById("btn-filtros");
  const panel = document.getElementById("panel-filtros");
  const resumen = document.getElementById("filtros-activos");
  const casillas = [...document.querySelectorAll(".casilla")];
  const botonesLimpiar = document.querySelectorAll("[data-limpiar]");
  const escritorio = window.matchMedia("(min-width: 1024px)");

  const iconoEstrella = `<svg viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true"><path d="M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 17l-5.4 3 1.2-6L3.3 9.8l6.1-.7z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;

  function crearTarjeta(p, i) {
    const agotado = p.agotado
      ? `<span class="absolute inset-x-0 bottom-0 grid h-1/2 place-items-center bg-crema/70 font-titulo text-[15px] uppercase tracking-wide text-tinta dark:bg-tinta/70 dark:text-crema">Agotado</span>`
      : "";
    return `
        <li data-aos="fade-up" data-aos-delay="${(i % 3) * 100}" data-i="${i}">
          <article class="group mx-auto max-w-[420px] md:max-w-none">
            <a href="pieza.html?id=${
              p.id
            }" class="block rounded" aria-label="Ver ${p.nombre}, ${precioTexto(
      p
    )}${p.agotado ? ", agotado" : ""}">
              <div class="relative aspect-[5/4] overflow-hidden rounded bg-white lg:aspect-[4/3]">
                <img src="${p.imagen}" alt="${
      p.nombre
    }" loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ${agotado}
              </div>
            </a>
            <div class="mt-3 flex items-start justify-between gap-3">
              <a href="pieza.html?id=${
                p.id
              }" class="font-titulo text-[15px] leading-tight hover:underline">
                <h3 class="font-medium">${p.nombre}</h3>
                <p>${precioTexto(p)}</p>
              </a>
              <button type="button" data-id="${
                p.id
              }" aria-pressed="false" aria-label="Guardar ${
      p.nombre
    } en favoritos" class="grid h-8 w-8 place-items-center rounded hover:opacity-60">${iconoEstrella}</button>
            </div>
          </article>
        </li>`;
  }

  lista.innerHTML = PRODUCTOS.map(crearTarjeta).join("");
  const tarjetas = [...lista.children];

  const marcados = (grupo) =>
    casillas
      .filter((c) => c.dataset.grupo === grupo && c.checked)
      .map((c) => c.value);

  function pintarResumen(cats, edades) {
    const nombres = [
      ...cats.map((v) => CATEGORIAS[v]),
      ...edades.map((v) => EDADES[v]),
    ];
    resumen.replaceChildren(
      ...(nombres.length ? nombres : ["Todos los productos"]).map((n) => {
        const li = document.createElement("li");
        li.textContent = "· " + n;
        return li;
      })
    );
    botonesLimpiar.forEach((b) =>
      b.classList.toggle("hidden", !nombres.length)
    );
  }

  function reanimar() {
    tarjetas
      .filter((li) => !li.hidden)
      .forEach((li) => {
        const art = li.firstElementChild;
        art.classList.remove("tarjeta-entra");
        void art.offsetWidth; // reinicia la animación
        art.classList.add("tarjeta-entra");
      });
  }
  lista.addEventListener("animationend", (e) =>
    e.target.classList.remove("tarjeta-entra")
  );

  function filtrar() {
    const cats = marcados("categoria");
    const edades = marcados("edad");
    tarjetas.forEach((li) => {
      const p = PRODUCTOS[li.dataset.i];
      li.hidden = !(
        (!cats.length || cats.includes(p.categoria)) &&
        (!edades.length || edades.includes(p.edad))
      );
    });
    pintarResumen(cats, edades);
    reanimar();
    if (window.AOS) AOS.refresh();
  }

  casillas.forEach((c) => c.addEventListener("change", filtrar));
  botonesLimpiar.forEach((b) =>
    b.addEventListener("click", () => {
      casillas.forEach((c) => (c.checked = false));
      filtrar();
    })
  );

  // ---- Desplegable de filtros (solo móvil y tablet) ----
  function abrirPanel(abrir) {
    panel.classList.toggle("hidden", !abrir);
    fila.dataset.abierto = String(abrir);
    btnToggle.setAttribute("aria-expanded", String(abrir));
  }
  fila.addEventListener("click", (e) => {
    if (escritorio.matches) return;
    if (e.target.closest("#btn-guardar")) return abrirPanel(false);
    abrirPanel(btnToggle.getAttribute("aria-expanded") !== "true");
  });
  document.addEventListener("click", (e) => {
    if (!escritorio.matches && !e.target.closest("#filtros")) abrirPanel(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") abrirPanel(false);
  });
  escritorio.addEventListener("change", () => abrirPanel(false));

  pintarResumen([], []);
})();
