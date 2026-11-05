// ---- Modo claro / oscuro ----
const html = document.documentElement;
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
  const oscuro = html.classList.toggle("dark");
  localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
  btnTema.classList.remove("giro");
  void btnTema.offsetWidth; // reinicia la animación
  btnTema.classList.add("giro");
});

// ---- Menú desplegable (móvil y tablet) ----
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu-movil");

function abrirMenu(abrir) {
  menu.classList.toggle("abierto", abrir);
  document.body.classList.toggle("menu-abierto", abrir);
  document.body.classList.toggle("overflow-hidden", abrir);
  btnMenu.setAttribute("aria-expanded", String(abrir));
  btnMenu.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
}

btnMenu.addEventListener("click", () =>
  abrirMenu(!menu.classList.contains("abierto")),
);
menu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => abrirMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") abrirMenu(false);
});
window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
  if (e.matches) abrirMenu(false);
});

// ---- Animaciones al hacer scroll (AOS) ----
AOS.init({
  duration: 700,
  once: true,
  disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});
