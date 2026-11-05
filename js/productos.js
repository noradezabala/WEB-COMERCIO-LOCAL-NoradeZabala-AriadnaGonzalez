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
    agotado: false,
    ...TEXTO_DEMO,
    descripcion: "Busto decorativo tallado a mano de origen tailandés.",
    historia:
      "Este busto procede de un pequeño taller artesanal de Chiang Mai, al norte de Tailandia, donde fue elaborado recientemente por artesanos locales. La pieza nació como parte de una colección de figuras inspiradas en la tradición escultórica tailandesa, reinterpretada desde una perspectiva contemporánea.",
    medidas: "27 × 23 × 70 cm",
    material: "Metal",
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
    descripcion: "Figura decorativa elaborada en piedra blanca.",
    historia:
      "Esta pieza nace en un taller de creación contemporánea especializado en el trabajo de la piedra. Su elaboración parte de la selección de bloques de piedra natural, trabajados mediante técnicas artesanales hasta conseguir su forma definitiva.",
    medidas: "	10 × 30 × 45 cm",
    material: "Piedra blanca",
  },
  {
    id: 3,
    nombre: "Baúl pintado a mano",
    precio: 850.0,
    imagen: "img/BD-00147B-630x472.webp",
    categoria: "baules",
    edad: "vintage",
    agotado: true,
    ...TEXTO_DEMO,
    descripcion: "Baúl blanco lacado y pintado a mano .",
    historia:
      "Inspirado en los antiguos baúles de la provincia china de Shanxi, este mueble toma como referencia las piezas tradicionales que durante generaciones sirvieron para guardar ajuar, documentos y objetos personales en los hogares chinos.",
    medidas: "	80 × 43 × 52 cm",
    material: "Madera de olmo",
  },
  {
    id: 4,
    nombre: "Jarrón de madera",
    precio: 143.0,
    imagen: "img/Vical-Jarrones-Madera-RAYNAL-1536x1536.webp",
    categoria: "decoracion",
    edad: "actual",
    agotado: false,
    ...TEXTO_DEMO,
    descripcion: "Jarrón decorativo de madera con acabados.",
    historia:
      "Esta pieza fue elaborada en un taller de artesanía contemporánea, donde la madera se trabaja y transforma siguiendo técnicas tradicionales de carpintería. Su creación parte de la selección de madera natural, que posteriormente se talla y se trabaja hasta obtener su forma definitiva.",
    medidas: "	72 × 20 × 88 cm",
    material: "Madera",
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
    descripcion: "Conjunto decorativo elaborado en madera de teka.",
    historia:
      " Estas piezas tienen su origen en los talleres artesanales de la isla de Java, en Indonesia, donde la madera de teca ha sido tradicionalmente apreciada por su resistencia y durabilidad. Su diseño toma como referencia los antiguos soportes de madera utilizados en hogares y espacios ceremoniales para sostener velas y pequeñas fuentes de luz. ",
    medidas: "		43 × 45 × 20 cm",
    material: "Madera de teka",
  },
  {
    id: 6,
    nombre: "Pedestal chino",
    precio: 1894.0,
    imagen: "img/BD-00216B-630x473.webp",
    categoria: "mesas",
    edad: "vintage",
    agotado: false,
    ...TEXTO_DEMO,
    descripcion: "Mesa china Auxiliar. Pedestal en su acabado original.",
    historia:
      "Este pedestal tiene su origen en el Tíbet, donde formó parte del mobiliario de una antigua residencia vinculada a la vida tradicional de la región. Durante el siglo XIX, este tipo de mesas auxiliares se utilizaban para sostener objetos cotidianos, piezas ceremoniales y elementos decorativos en los hogares.",
    medidas: "	45 × 45 × 83 cm",
    material: "Madera de ciprés",
  },
];

const precioTexto = (p) =>
  new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(p.precio) + "€";
