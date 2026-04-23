// ============================================================
//  SC Details — Configuración del cliente
//  ✏️  Este es el ÚNICO archivo que necesitás modificar
// ============================================================

const CONFIG = {

  // ── PLAN ─────────────────────────────────────────────────
  plan: "premium",

  // ── NOVIA Y NOVIO (novia primero) ────────────────────────
  novio: "Enzo",
  novia: "Caro",

  // ── FECHA Y HORA DEL EVENTO ──────────────────────────────
  fechaEvento: "2025-06-14 17:00:00",
  fechaTexto: "Sábado 14 de Junio, 2025",

  // ── FRASE / CITA ─────────────────────────────────────────
  frase: "Dos almas con un solo pensamiento, dos corazones que laten como uno.",
  fraseOrigen: "John Keats",

  // ── CEREMONIA ────────────────────────────────────────────
  ceremonia: {
    lugar:     "Iglesia San Isidro",
    direccion: "Av. del Libertador 16200, San Isidro",
    hora:      "17:00 hs",
    mapLink:   "https://maps.google.com/?q=Av.+del+Libertador+16200,+San+Isidro",
    saveDate:  "",
  },

  // ── CELEBRACIÓN ──────────────────────────────────────────
  celebracion: {
    lugar:     "Palacio Sans Souci",
    direccion: "Paz 705, Victoria, Provincia de Buenos Aires",
    hora:      "20:00 hs",
    mapLink:   "https://maps.google.com/?q=Paz+705,+Victoria,+Buenos+Aires",
    saveDate:  "",
  },

  // ── IMAGEN DE FONDO (welcome screen) ─────────────────────
  // Link directo a imagen .jpg o .png
  fondoURL: "https://i.imgur.com/PLACEHOLDER.jpg", // ← Reemplazar con imagen del salón

  // ── COLORES ──────────────────────────────────────────────
  colores: {
    fondo:       "#FDFBF8",
    acento:      "#C9A96E",
    acentoClaro: "#E8D5B0",
    oscuro:      "#1E1E1E",
    gris:        "#7A7470",
  },

  // ── MÚSICA DE FONDO ──────────────────────────────────────
  musicaURL: "",

  // ── GALERÍA DE FOTOS ─────────────────────────────────────
  fotos: [
    "https://imgur.com/OJnwltq.jpg",
    "https://imgur.com/Ge7eRET.jpg",
    "https://imgur.com/bJFs1Xh.jpg",
    "https://imgur.com/zCii6nm.jpg",
  ],

  // ── VIDEO ────────────────────────────────────────────────
  videoThumbnail: "",
  videoURL:       "",

  // ── QR / SUBIR FOTOS ─────────────────────────────────────
  fotosLink: "",
  qrImagen:  "",

  // ── REGALOS ──────────────────────────────────────────────
  regalos: {
    texto: "Nos llenará de alegría contar con su presencia. Si está a su disposición brindar una muestra de cariño, estaremos muy agradecidos.",
    opciones: [
      { tipo: "Transferencia bancaria", detalle: "CBU: 0000000000000\nAlias: caro.enzo.boda" },
      { tipo: "Efectivo", detalle: "Dólares, euros o pesos en sobre son bienvenidos." },
    ],
  },

  // ── DRESS CODE ───────────────────────────────────────────
  dresscode: "Formal — Colores neutros y pastel. Pedimos evitar el blanco reservado para la novia.",

  // ── TIPS Y NOTAS ─────────────────────────────────────────
  tips: [
    "El evento comenzará puntualmente.",
    "Habrá servicio de traslado desde la iglesia al Palacio Sans Souci.",
    "Para los más pequeños habrá una zona especial para niños.",
    "¡Cargá la batería del celular para no perderte ningún momento!",
  ],

  // ── WHATSAPP ─────────────────────────────────────────────
  whatsappNumero: "5491100000000",

  // ── FECHA LÍMITE RSVP ────────────────────────────────────
  fechaLimiteRSVP: "30 de Mayo",

};
