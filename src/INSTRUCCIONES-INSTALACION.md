# 🚀 Instalación de Foodloop

## ⚡ Inicio Rápido (2 comandos)

```bash
npm install
npm run dev
```

¡Eso es todo! La aplicación se abrirá en `http://localhost:5173`

---

## 📋 Requisitos Previos

- **Node.js** versión 18 o superior
- **npm** (viene con Node.js)

Para verificar:
```bash
node --version   # Debe mostrar v18.x.x o superior
npm --version    # Debe mostrar 9.x.x o superior
```

---

## 🎯 Pasos Detallados

### 1. Descargar el Proyecto

**Opción A: Desde Figma Make**
- Haz clic en "Download" o "Export"
- Descomprime el archivo

**Opción B: Desde Git**
```bash
git clone [URL-DEL-REPOSITORIO]
cd foodloop
```

### 2. Instalar Dependencias

```bash
npm install
```

Esto instalará:
- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (animaciones)
- Lucide React (iconos)
- shadcn/ui (componentes)
- Y todas las demás librerías

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

Verás algo como:
```
  VITE v6.0.7  ready in 450 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 4. Abrir en el Navegador

Abre: **http://localhost:5173**

---

## 🛠️ Comandos Disponibles

```bash
# Desarrollo (con hot reload)
npm run dev

# Compilar para producción
npm run build

# Preview de la build
npm run preview

# Linting del código
npm run lint
```

---

## 📁 Estructura del Proyecto

```
foodloop/
├── public/              ← Archivos estáticos (logo)
│   └── logo.png
│
├── src/
│   ├── main.tsx         ← Entrada de la aplicación
│   ├── App.tsx          ← Componente principal
│   │
│   ├── components/      ← Componentes React
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── PublicHome.tsx
│   │   ├── Login.tsx
│   │   └── ...
│   │
│   └── styles/
│       └── globals.css  ← Estilos globales
│
├── package.json         ← Dependencias
├── vite.config.ts       ← Configuración de Vite
├── tsconfig.json        ← Configuración de TypeScript
└── index.html           ← HTML principal
```

---

## 🎨 Funcionalidades

✅ Página pública (Home, Cómo funciona, Nosotros)
✅ Catálogo de restaurantes
✅ Registro de restaurantes
✅ Login de restaurantes
✅ Panel privado de restaurante
✅ Listado de comidas disponibles
✅ Diseño responsive (móvil y desktop)
✅ Animaciones suaves
✅ Paleta de colores personalizada

---

## 🎯 Uso de la Aplicación

### Para Usuarios Públicos:
- Navega por las secciones públicas
- Ve restaurantes adheridos
- Consulta comidas disponibles

### Para Restaurantes:
1. Registra tu restaurante
2. Inicia sesión (cualquier usuario/contraseña para demo)
3. Agrega comida sobrante
4. Ver historial de publicaciones
5. Consulta estadísticas

---

## 🛠️ Solución de Problemas

### ❌ Error: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### ❌ Error: "Port 5173 already in use"

```bash
# Usa otro puerto
npm run dev -- --port 3000
```

### ❌ Logo no se muestra

Verifica que `/public/logo.png` exista.

### ❌ Estilos no se aplican

Verifica que `src/styles/globals.css` esté importado en `src/main.tsx`.

---

## 🚀 Deploy a Producción

### Vercel (Recomendado - Gratis)

1. Sube tu código a GitHub
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Deploy automático

### Netlify

```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### Compilar Localmente

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

---

## 🎨 Personalización

### Cambiar Colores

Edita `src/styles/globals.css`:

```css
:root {
  --primary: #FDB940;              /* Amarillo principal */
  --primary-foreground: #1a1a1a;   /* Negro */
  /* Cambia estos valores a tu gusto */
}
```

### Agregar Nuevas Páginas

1. Crea un componente en `src/components/`
2. Impórtalo en `src/App.tsx`
3. Agrégalo al sistema de navegación

---

## 📚 Tecnologías Utilizadas

- **React 18** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS v4** - Framework de estilos
- **Motion** - Animaciones
- **Lucide React** - Iconos
- **shadcn/ui** - Componentes UI
- **Sonner** - Notificaciones toast

---

## ❓ FAQ

**P: ¿Necesito conocimientos de TypeScript?**
R: No necesariamente. El código está bien estructurado y documentado.

**P: ¿Funciona sin internet?**
R: Las imágenes requieren internet (Unsplash). El resto funciona offline.

**P: ¿Puedo modificar los estilos?**
R: Sí, todos los estilos están en Tailwind CSS y son personalizables.

**P: ¿Cómo agrego autenticación real?**
R: Necesitarás un backend (Supabase, Firebase, etc.)

---

## 📞 Soporte

Si tienes problemas:
1. Verifica que Node.js sea v18+
2. Borra `node_modules` y reinstala
3. Revisa los errores en la consola del navegador
4. Consulta la documentación de Vite

---

## 🎉 ¡Listo!

Tu aplicación Foodloop está lista para usar.

**Recuerda:**
- `npm install` → Instala dependencias (una sola vez)
- `npm run dev` → Inicia el servidor de desarrollo
- `http://localhost:5173` → Abre la aplicación

**¡Feliz desarrollo! 🚀**
