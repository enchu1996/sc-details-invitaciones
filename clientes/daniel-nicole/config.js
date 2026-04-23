// ============================================================
//  SC Detail — Configuración del cliente
//  ✏️  Este es el ÚNICO archivo que necesitás modificar
//      para personalizar la invitación de cada cliente.
// ============================================================

const CONFIG = {

  // ── PLAN ─────────────────────────────────────────────────
  // Opciones: "premium" | "standard" | "classic"
  // premium  → todo incluido
  // standard → sin música, sin sugerir canción, sin video, sin QR
  // classic  → solo bienvenida, countdown, evento, regalos, confirmación
  plan: "premium",

  // ── NOVIOS ───────────────────────────────────────────────
  novio: "",
  novia: "",

  // ── FECHA Y HORA DEL EVENTO ──────────────────────────────
  // Formato: "AÑO-MES-DIA HH:MM:SS"
  fechaEvento: "2024-10-11 14:30:00",
  fechaTexto: "Viernes 11 de Octubre, 2024",

  // ── FRASE / CITA ─────────────────────────────────────────
  frase: "Aunque uno pueda ser vencido, dos pueden resistir. La cuerda de tres hilos no se rompe fácilmente.",
  fraseOrigen: "Eclesiastés 4:12",

  // ── CEREMONIA ────────────────────────────────────────────
  ceremonia: {
    lugar:     "Parroquia Nuestra Señora",
    direccion: "Av. San Isidro 207, San José",
    hora:      "2:30 pm",
    mapLink:   "https://maps.app.goo.gl/vaZ8XSv24krieWVC7",
    saveDate:  "https://www.addevent.com/event/FC20167296+google",
  },

  // ── CELEBRACIÓN ──────────────────────────────────────────
  celebracion: {
    lugar:     "Salón de Eventos Exclu",
    direccion: "Av 10, San José",
    hora:      "4:30 pm",
    mapLink:   "https://maps.app.goo.gl/vaZ8XSv24krieWVC7",
    saveDate:  "https://www.addevent.com/event/FC20167296+google",
  },

  // ── COLORES (paleta personalizable) ──────────────────────
  colores: {
    fondo:     "#FDFBF8",   // Blanco cálido
    acento:    "#C9A96E",   // Dorado
    acentoClaro: "#E8D5B0", // Dorado claro
    oscuro:    "#2C2C2C",   // Carbón
    gris:      "#7A7470",   // Gris cálido
  },

  // ── MÚSICA DE FONDO (solo plan premium) ──────────────────
  // Pegá acá el link directo a un archivo .mp3
  // Ejemplo con Google Drive: https://drive.google.com/uc?export=download&id=TU_ID
  musicaURL: "",  // ← Dejar vacío si no hay música todavía

  // ── GALERÍA DE FOTOS (solo standard y premium) ───────────
  // Agregá o quitá links de fotos. Podés usar Imgur, Google Drive, etc.
  fotos: [
    "https://imgur.com/OJnwltq.jpg",
    "https://imgur.com/Ge7eRET.jpg",
    "https://imgur.com/bJFs1Xh.jpg",
    "https://imgur.com/zCii6nm.jpg",
  ],

  // ── VIDEO (solo plan premium) ────────────────────────────
  videoThumbnail: "https://imgur.com/v2Au58D.jpeg",
  videoURL:       "",  // ← Link directo al .mp4 o YouTube embed

  // ── QR / SUBIR FOTOS (solo plan premium) ─────────────────
  fotosLink: "https://drive.google.com/drive/folders/1iHpiokYMsx5BTAcsNC-qjyr8aG17kZtD",
  qrImagen:  "",  // ← Link a imagen del QR (generala en qr-code-generator.com)

  // ── REGALOS ──────────────────────────────────────────────
  regalos: {
    texto: "Nos llenará de alegría contar con su presencia. Si está a su disposición brindar una muestra de cariño, estaremos muy agradecidos.",
    opciones: [
      { tipo: "Transferencia bancaria", detalle: "CBU: 0000000000000\nAlias: daniel.nicole.boda" },
      { tipo: "Efectivo", detalle: "Dólares, euros o pesos en sobre son bienvenidos." },
    ],
  },

  // ── DRESS CODE ───────────────────────────────────────────
  dresscode: "Formal — Colores neutros y pastel. Pedimos evitar el blanco reservado para la novia.",

  // ── TIPS Y NOTAS ─────────────────────────────────────────
  tips: [
    "El evento comenzará puntualmente.",
    "Habrá servicio de traslado desde la ceremonia al salón.",
    "Para los más pequeños habrá una zona especial para niños.",
    "¡Cargá la batería del celular para no perderte ningún momento!",
  ],

  // ── WHATSAPP CONFIRMACIÓN ────────────────────────────────
  // Número con código de país, sin espacios ni +
  // Argentina: 549 + 11 + 68465883
  whatsappNumero: "5491168465883",

  // ── CONFIRMACIÓN: FECHA LÍMITE ───────────────────────────
  fechaLimiteRSVP: "30 de Septiembre",

};
