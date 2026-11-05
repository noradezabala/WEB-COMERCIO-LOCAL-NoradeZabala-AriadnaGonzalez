// Ficha de pieza: lee ?id= de la URL y rellena la página con los datos de PRODUCTOS.
(() => {
  const id = Number(new URLSearchParams(location.search).get("id"));
  const p = PRODUCTOS.find((x) => x.id === id);
  const $ = (s) => document.getElementById(s);

  if (!p) {
    $("pieza").hidden = true;
    $("no-encontrada").hidden = false;
    document.title = "Pieza no encontrada · Bidadari";
    return;
  }

  document.title = `${p.nombre} · Bidadari`;
  $("pieza-img").src = p.imagen;
  $("pieza-img").alt = p.nombre;
  $("pieza-nombre").textContent = p.nombre;
  $("pieza-precio").textContent = precioTexto(p);
  $("pieza-desc").textContent = p.descripcion;
  $("pieza-categoria").textContent = CATEGORIAS[p.categoria];
  $("pieza-edad").textContent = EDADES[p.edad];
  $("pieza-medidas").textContent = p.medidas;
  $("pieza-material").textContent = p.material;
  $("pieza-historia").textContent = p.historia;
  $("pieza-agotado").hidden = !p.agotado;
  $("pieza-cta").hidden = p.agotado;
})();
