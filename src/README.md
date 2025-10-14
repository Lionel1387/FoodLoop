# Foodloop

Aplicación web para conectar restaurantes con comida sobrante con personas que la necesitan.

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+ instalado
- npm o yarn

### Instalación

1. **Clona o descarga este proyecto**

2. **Instala las dependencias:**
```bash
npm install
# o
yarn install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm run dev
# o
yarn dev
```

4. **Abre tu navegador en** `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Preview de la build de producción
- `npm run lint` - Ejecuta el linter

## 🏗️ Estructura del Proyecto

```
foodloop/
├── src/
│   ├── App.tsx                      # Componente principal
│   ├── main.tsx                     # Punto de entrada
│   ├── components/
│   │   ├── Navbar.tsx               # Barra de navegación
│   │   ├── Footer.tsx               # Pie de página
│   │   ├── PublicHome.tsx           # Página de inicio pública
│   │   ├── PublicPages.tsx          # Páginas informativas
│   │   ├── Login.tsx                # Login con selector de rol
│   │   ├── RestaurantRegister.tsx   # Registro de restaurantes
│   │   ├── RestaurantDashboard.tsx  # Panel de restaurante
│   │   ├── CPCDashboard.tsx         # Panel CPC/Voluntario
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   └── ui/                      # Componentes de UI (shadcn)
│   └── styles/
│       └── globals.css              # Estilos globales y Tailwind
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎯 Funcionalidades

### Público General
- ✅ Página de inicio con hero y estadísticas de impacto
- ✅ Sección "Cómo funciona" con pasos visuales
- ✅ Lista de restaurantes adheridos
- ✅ Páginas: Nosotros, Noticias
- ✅ Footer con contacto y redes sociales

### Panel Restaurante
- ✅ Agregar comida sobrante (formulario completo)
- ✅ Ver historial de publicaciones
- ✅ Estadísticas de impacto social

### Panel CPC/Voluntario
- ✅ Lista completa de comidas disponibles
- ✅ Filtros por zona, tipo de comida y búsqueda
- ✅ Marcar comidas como "entregadas"
- ✅ Estadísticas en tiempo real

## 🎨 Tecnologías Utilizadas

- **React 18** - Framework frontend
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Tailwind CSS v4** - Estilos
- **Motion (Framer Motion)** - Animaciones
- **Lucide React** - Iconos
- **shadcn/ui** - Componentes UI
- **Sonner** - Notificaciones toast

## 🔐 Demo de Autenticación

Para fines de demostración, puedes iniciar sesión con cualquier usuario y contraseña:

- **Rol Restaurante**: Ver y gestionar publicaciones de comida
- **Rol CPC**: Ver todas las publicaciones y coordinar entregas

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- 📱 Mobile
- 💻 Desktop
- 🖥️ Tablets

## 🚧 Próximos Pasos (Producción)

Para llevar esta app a producción, considera:

1. **Backend con Supabase o Firebase:**
   - Autenticación real de usuarios
   - Base de datos para restaurantes y publicaciones
   - Almacenamiento de imágenes

2. **Mejoras:**
   - Sistema de notificaciones en tiempo real
   - Mapa interactivo de restaurantes
   - Panel de administración
   - Analytics y reportes

3. **Deploy:**
   - Vercel, Netlify o GitHub Pages para el frontend
   - Supabase para backend y base de datos

## 📄 Licencia

Este es un proyecto de demostración para Foodloop.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes, abre primero un issue para discutir los cambios propuestos.

---

**Desarrollado con ❤️ para reducir el desperdicio y alimentar la esperanza**
