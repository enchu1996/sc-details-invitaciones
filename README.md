# SC Detail — Sistema de Invitaciones Digitales

## Estructura del proyecto

```
sc-detail-invitaciones/
├── index.html                    ← Página principal de SC Detail
├── vercel.json                   ← Configuración de Vercel (no tocar)
└── clientes/
    └── daniel-nicole/
        ├── index.html            ← Template de la invitación (no tocar)
        ├── config.js             ← ✏️ ÚNICO archivo a modificar por cliente
        └── fotos/                ← Carpeta para fotos (opcional)
```

---

## ✏️ Cómo agregar un cliente nuevo

1. Copiá la carpeta `clientes/daniel-nicole`
2. Renombrala con el nombre del nuevo cliente, ej: `clientes/marcos-sofia`
3. Abrí el archivo `config.js` de esa carpeta
4. Modificá todos los datos del cliente
5. Hacé deploy en Vercel (ver abajo)
6. El link será: `scdetails.vercel.app/marcos-sofia`

---

## 🎨 Planes disponibles

En `config.js`, el campo `plan` controla qué secciones se muestran:

| Sección                  | classic | standard | premium |
|--------------------------|:-------:|:--------:|:-------:|
| Bienvenida + countdown   |    ✓    |    ✓     |    ✓    |
| Ceremonia + Celebración  |    ✓    |    ✓     |    ✓    |
| Regalos                  |    ✓    |    ✓     |    ✓    |
| Confirmación (WhatsApp)  |    ✓    |    ✓     |    ✓    |
| Galería de fotos         |         |    ✓     |    ✓    |
| Dress Code & Tips        |         |    ✓     |    ✓    |
| Música de fondo          |         |          |    ✓    |
| Sugerir canción          |         |          |    ✓    |
| Video                    |         |          |    ✓    |
| Subir fotos / QR         |         |          |    ✓    |

---

## 🖼️ Cómo agregar fotos

1. Subí las fotos a [imgur.com](https://imgur.com) (gratis)
2. Copiá el link directo (termina en `.jpg` o `.png`)
3. Pegalo en el array `fotos` del `config.js`

---

## 🎵 Cómo agregar música

1. Subí el MP3 a Google Drive
2. Compartilo como "Cualquiera con el link"
3. Copiá el ID del archivo de la URL
4. Armá el link así: `https://drive.google.com/uc?export=download&id=TU_ID`
5. Pegalo en `musicaURL` del `config.js`

---

## 🚀 Cómo hacer deploy en Vercel

### Primera vez:
1. Creá cuenta en [vercel.com](https://vercel.com) con GitHub
2. Subí este proyecto a GitHub
3. En Vercel: "Add New Project" → importá el repo
4. Click en "Deploy"
5. Tu link: `scdetails.vercel.app`

### Cuando agregás un cliente nuevo:
1. Agregás la carpeta del cliente
2. Hacés commit en GitHub
3. Vercel detecta el cambio y redeploya automáticamente (2 minutos)

### Cuando conectes dominio propio (`scdetails.lat`):
1. En Vercel → Settings → Domains
2. Escribís `scdetails.lat`
3. Seguís las instrucciones para configurar el DNS en Namecheap
4. Listo — el link pasa a ser `scdetails.lat/marcos-sofia`

---

## 📱 Confirmación por WhatsApp

Cuando el invitado confirma asistencia, se abre WhatsApp con un mensaje pre-armado dirigido a tu número. Configurá el número en `whatsappNumero` del `config.js`.

Formato: código de país + código de área + número, sin espacios ni +
Ejemplo Argentina: `5491155667788`
