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
    nombre: "Busto Tailandesa",
    precio: 560.0,
    imagen: "img/Vical-Busto-Thailandesa1.webp ",
    categoria: "decoracion",
    edad: "actual",
    agotado: false,
    ...TEXTO_DEMO,
  },
  {
    id: 2,
    nombre: "Figura decorativa de piedra",
    precio: 237.0,
    imagen: "img/Vical-Figura-de-piedra-beige1.webp",
    categoria: "decoracion",
    edad: "antique",
    agotado: false,
    ...TEXTO_DEMO,
  },
  {
    id: 3,
    nombre: "Baúl pintado a mano",
    precio: 850.0,
    imagen: "img/BD-00147B-630x472.webp",
    categoria: "baúles",
    edad: "vintage",
    agotado: true,
    ...TEXTO_DEMO,
  },
  {
    id: 4,
    nombre: "Jarrón e madera",
    precio: 143.0,
    imagen: "img/Vical-Jarrones-Madera-RAYNAL-1536x1536.webp",
    categoria: "decoracion",
    edad: "actual",
    agotado: false,
    ...TEXTO_DEMO,
  },
  {
    id: 5,
    nombre: "Vela de teka",
    precio: 165.0,
    imagen: "img/BD-00258.webp",
    categoria: "iluminacion",
    edad: "antique",
    agotado: true,
    ...TEXTO_DEMO,
  },
  {
    id: 6,
    nombre: "Pedestal en su acabado original",
    precio: 1894.0,
    imagen: "img/BD-00216B-630x473.webp",
    categoria: "mesas",
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
