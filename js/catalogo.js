(() => {
  const lista = document.getElementById("lista-productos");
  const contenedor = document.getElementById("filtros");
  const fila = document.getElementById("filtros-fila");
  const btnToggle = document.getElementById("btn-filtros");
  const panel = document.getElementById("panel-filtros");
  const casillas = [...document.querySelectorAll(".casilla")];
  const botonesLimpiar = document.querySelectorAll("[data-limpiar]");
  const escritorio = window.matchMedia("(min-width: 1024px)");

  const tabTodos = document.getElementById("tab-todos");
  const tabNovedades = document.getElementById("tab-novedades");
  const tabFavoritos = document.getElementById("tab-favoritos");
  const tituloSeccion = document.getElementById("titulo-seccion");
  let vistaActual = "todos"; // "todos" | "novedades" | "favoritos"

  const iconoEstrellaVacia = `<svg viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true"><path d="M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 17l-5.4 3 1.2-6L3.3 9.8l6.1-.7z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;
  const iconoEstrellaRellena = `<svg viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true"><path d="M12 3.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 17l-5.4 3 1.2-6L3.3 9.8l6.1-.7z" fill="currentColor" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;

  function crearTarjeta(p, i) {
    return `
        <li data-aos="fade-up" data-aos-delay="${(i % 3) * 100}" data-i="${i}" data-id="${p.id}">
          <article class="group mx-auto max-w-[420px] md:max-w-none">
            <a href="pieza.html?id=${p.id}" class="block rounded" aria-label="Ver ${p.nombre}, ${precioTexto(p)}">
              <div class="relative aspect-[5/4] overflow-hidden rounded bg-white lg:aspect-[4/3]">
                <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </a>
            <div class="mt-3 flex items-start justify-between gap-3">
              <div class="flex-1">
                <a href="pieza.html?id=${p.id}" class="font-titulo text-[15px] leading-tight hover:underline block font-medium">
                  ${p.nombre}
                </a>
                <p class="font-texto text-[17px] mt-0.5">${precioTexto(p)}</p>
                <p class="font-titulo text-[11px] text-tinta/60 dark:text-crema/60 mt-1">
                  · 1 de 1 · Disponible en tienda
                </p>
              </div>
              <button type="button" data-accion="fav" data-id="${p.id}" aria-pressed="false" aria-label="Guardar ${p.nombre} en favoritos" class="grid h-8 w-8 place-items-center rounded hover:opacity-60 shrink-0 mt-0.5">${iconoEstrellaVacia}</button>
            </div>
          </article>
        </li>`;
  }

  lista.innerHTML = PRODUCTOS.map(crearTarjeta).join("");
  const tarjetas = [...lista.children];

  lista.addEventListener("click", (e) => {
    const btn = e.target.closest('button[data-accion="fav"]');
    if (!btn) return;
    const activo = btn.getAttribute("aria-pressed") === "true";
    btn.setAttribute("aria-pressed", String(!activo));
    btn.innerHTML = !activo ? iconoEstrellaRellena : iconoEstrellaVacia;

    if (vistaActual === "favoritos") {
      filtrar();
    }
  });

  const marcados = (grupo) =>
    casillas
      .filter((c) => c.dataset.grupo === grupo && c.checked)
      .map((c) => c.value);

  function reanimar() {
    tarjetas
      .filter((li) => !li.hidden)
      .forEach((li) => {
        const art = li.firstElementChild;
        art.classList.remove("tarjeta-entra");
        void art.offsetWidth;
        art.classList.add("tarjeta-entra");
      });
  }
  lista.addEventListener("animationend", (e) =>
    e.target.classList.remove("tarjeta-entra"),
  );

  function filtrar() {
    const cats = marcados("categoria");
    const edades = marcados("edad");

    tarjetas.forEach((li) => {
      const p = PRODUCTOS[li.dataset.i];
      const btnFav = li.querySelector('button[data-accion="fav"]');
      const esFavorito =
        btnFav && btnFav.getAttribute("aria-pressed") === "true";

      let coincideVista = true;
      if (vistaActual === "novedades") {
        coincideVista = Boolean(p.novedad);
      } else if (vistaActual === "favoritos") {
        coincideVista = esFavorito;
      }

      const coincideFiltros =
        (!cats.length || cats.includes(p.categoria)) &&
        (!edades.length || edades.includes(p.edad));

      li.hidden = !(coincideVista && coincideFiltros);
    });

    reanimar();
    if (window.AOS) AOS.refresh();
  }

  function cambiarPestana(nuevaVista) {
    vistaActual = nuevaVista;

    if (tituloSeccion) {
      tituloSeccion.style.display =
        vistaActual === "novedades" ? "block" : "none";
    }

    [tabTodos, tabNovedades, tabFavoritos].forEach((tab) => {
      tab.classList.remove(
        "underline",
        "underline-offset-8",
        "text-tinta",
        "dark:text-crema",
      );
      tab.classList.add("text-tinta/50", "dark:text-crema/50");
      tab.setAttribute("aria-selected", "false");
    });

    let tabActiva = tabTodos;
    if (vistaActual === "novedades") tabActiva = tabNovedades;
    if (vistaActual === "favoritos") tabActiva = tabFavoritos;

    tabActiva.classList.remove("text-tinta/50", "dark:text-crema/50");
    tabActiva.classList.add(
      "underline",
      "underline-offset-8",
      "text-tinta",
      "dark:text-crema",
    );
    tabActiva.setAttribute("aria-selected", "true");

    filtrar();
  }

  tabTodos.addEventListener("click", () => cambiarPestana("todos"));
  tabNovedades.addEventListener("click", () => cambiarPestana("novedades"));
  tabFavoritos.addEventListener("click", () => cambiarPestana("favoritos"));

  casillas.forEach((c) => c.addEventListener("change", filtrar));
  botonesLimpiar.forEach((b) =>
    b.addEventListener("click", () => {
      casillas.forEach((c) => (c.checked = false));
      filtrar();
    }),
  );

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

  cambiarPestana("todos");
})();
