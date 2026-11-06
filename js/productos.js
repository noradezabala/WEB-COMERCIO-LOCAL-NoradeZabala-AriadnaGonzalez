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
  {
    id: 7,
    nombre: "Apparador pintado a mano",
    precio: 1397.0,
    imagen: "img/BD-00199B-630x473.webp",
    categoria: "muebles",
    edad: "vintage",
    agotado: false,
    ...TEXTO_DEMO,
    descripcion: "Mesa china Auxiliar. Pedestal en su acabado original.",
    historia:
      "Inspirado en el mobiliario tradicional de la provincia china de Shanxi, este aparador recupera la estética de los antiguos muebles de almacenamiento que formaban parte de la vida cotidiana de los hogares chinos.",
    medidas: "	138 × 40 × 88cm",
    material: "Madera de olmo",
  },
  {
    id: 8,
    nombre: "Taburete de madera",
    precio: 45.0,
    imagen: "img/BD-00098B-630x473.webp",
    categoria: "sillas",
    edad: "antique",
    agotado: false,
    ...TEXTO_DEMO,
    descripcion: "Taburete antiguo elaborados en madera de olmo",
    historia:
      "Estos taburetes proceden de Tianjin, una ciudad portuaria del norte de China que durante las primeras décadas del siglo XX vivió una intensa actividad comercial y cultural. Fueron elaborados alrededor de 1920, durante la época republicana, un periodo de transición en el que el mobiliario tradicional chino comenzó a convivir con nuevas influencias estéticas. ",
    medidas: "	28 x 15 x 28cm",
    material: "Madera de olmo",
  },
  {
    id: 9,
    nombre: "Armario blanco con celosía",
    precio: 2875.0,
    imagen: "img/BD-00059B-630x473.webp",
    categoria: "muebles",
    edad: "actual",
    agotado: false,
    ...TEXTO_DEMO,
    descripcion: "Armario restaurado y pintado en blanco con celosía.",
    historia:
      "Este armario tiene su origen en Tianjin, una ciudad portuaria del norte de China que a comienzos del siglo XX se convirtió en un importante punto de encuentro entre las tradiciones orientales y las influencias occidentales.",
    medidas: "		120 × 47 × 160 cm",
    material: "Madera de pino",
  },
  {
    id: 10,
    nombre: "Cesta de mimbre",
    precio: 200.0,
    imagen: "img/BD-00183A.webp",
    categoria: "decoracion",
    edad: "vintage",
    agotado: false,
    ...TEXTO_DEMO,
    descripcion: "Cesta de mimbre tejida a mano.",
    historia:
      "Esta cesta procede de la provincia de Fujian, en el sureste de China, una región con una larga tradición de trabajos artesanales con fibras vegetales. Fue elaborada alrededor de 1930 mediante técnicas de tejido manual, utilizando ratán para crear una estructura resistente y ligera.",
    medidas: "		30 × 30 × 60 160 cm",
    material: "Ratán",
  },
  {
    id: 11,
    nombre: "Puerta tallada a mano",
    precio: 1278.0,
    imagen: "img/BD-00053A.webp",
    categoria: "puertas",
    edad: "antique",
    agotado: false,
    ...TEXTO_DEMO,
    descripcion:
      "Puertas chinas Celosía. Barnizadas y elaboradamente talladas a mano.",
    historia:
      "Estas puertas proceden de la provincia de Yunnan, al suroeste de China, donde formaron parte de una antigua construcción residencial durante la dinastía Qing. Talladas alrededor de 1800 en madera de zelkova, sus paneles de celosía fueron decorados con aves que ocupaban un lugar especial en la simbología tradicional china. ",
    medidas: "			53 × 7 × 230 cm",
    material: "Madera de Zelková",
  },
];

const precioTexto = (p) =>
  new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(p.precio) + "€";
