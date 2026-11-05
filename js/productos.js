// Datos de los productos. Para añadir una pieza, copia un bloque y cambia sus valores.
// categoria: baules | decoracion | iluminacion | jardin | mesas | muebles | puertas | sillas
// edad: actual | antique | vintage
const CATEGORIAS = {
  baules: "Baúles",
  decoracion: "Decoración",
  iluminacion: "Iluminación",
  jardin: "Jardín",
  mesas: "Mesas",
  muebles: "Muebles",
  puertas: "Puertas, Celosías y Tallas",
  sillas: "Sillas y bancos",
};
const EDADES = { actual: "Actual", antique: "Antique", vintage: "Vintage" };

const TEXTO_DEMO = {
  descripcion: "Texto de ejemplo: breve descripción de la pieza.",
  historia:
    "Texto de ejemplo: de dónde viene la pieza, quién la hizo y qué uso tuvo.",
  medidas: "00 × 00 × 00 cm",
  material: "Material de ejemplo",
};

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Producto",
    precio: 50.95,
    imagen: "img/producto-magnolia.webp",
    categoria: "decoracion",
    edad: "actual",
    agotado: false,
    ...TEXTO_DEMO,
  },
  {
    id: 2,
    nombre: "Producto",
    precio: 50.95,
    imagen: "img/producto-disco.webp",
    categoria: "decoracion",
    edad: "antique",
    agotado: true,
    ...TEXTO_DEMO,
  },
  {
    id: 3,
    nombre: "Producto",
    precio: 50.95,
    imagen: "img/producto-vasijas.webp",
    categoria: "jardin",
    edad: "vintage",
    agotado: false,
    ...TEXTO_DEMO,
  },
  {
    id: 4,
    nombre: "Producto",
    precio: 50.95,
    imagen: "img/producto-magnolia.webp",
    categoria: "decoracion",
    edad: "actual",
    agotado: false,
    ...TEXTO_DEMO,
  },
  {
    id: 5,
    nombre: "Producto",
    precio: 50.95,
    imagen: "img/producto-disco.webp",
    categoria: "iluminacion",
    edad: "antique",
    agotado: true,
    ...TEXTO_DEMO,
  },
  {
    id: 6,
    nombre: "Producto",
    precio: 50.95,
    imagen: "img/producto-vasijas.webp",
    categoria: "jardin",
    edad: "vintage",
    agotado: false,
    ...TEXTO_DEMO,
  },
];

const precioTexto = (p) =>
  new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(p.precio) + "€";
