# delbosque - Landing Page de Agua Purificada Certificada

## 🌊 Descripción del Proyecto

Landing page profesional y moderna para **delbosque**, una distribuidora de agua purificada certificada INVIMA en Colombia. El sitio está diseñado para transmitir **confianza sanitaria**, **autoridad técnica** y generar **pedidos a domicilio** mediante WhatsApp.

## 🎨 Características Implementadas

✅ **Hero cinematográfico** con gradiente azul profundo y animación parallax  
✅ **Elemento 3D** (botella de agua animada) con efecto de flotación  
✅ **Navegación sticky** responsiva con menú móvil  
✅ **Sección de Beneficios** con 6 cards animadas al scroll  
✅ **Proceso de purificación** en 5 etapas con animaciones visuales  
✅ **Certificaciones y garantías** (INVIMA, ISO 22000, etc.)  
✅ **Testimonios reales** con ratings de estrellas  
✅ **CTA clear** con botones de WhatsApp  
✅ **Animaciones suaves** al scroll (fade-in, slide-up)  
✅ **Diseño 100% responsive** para móvil, tablet y desktop  
✅ **Paleta de colores corporativa** profesional y seria  

## 🎯 Paleta de Colores

```
Azul Profundo (Principal):   #003D7A
Azul Corporativo:             #0052CC
Azul Claro:                   #0066FF
Azul Muy Claro (Fondo):       #E6F0FF

Teal (Pureza):                #00BFA5
Cyan (Higiene):               #00D4FF

Neutrales:
  - Blanco:                   #FFFFFF
  - Gris Claro:               #F8F9FA
  - Gris:                     #E0E6ED
  - Gris Oscuro:              #64748B
  - Carbón:                   #1E293B
  - Negro:                    #0F172A
```

## 📐 Estructura del Proyecto

```
src/
├── components/
│   └── Header.tsx              # Navegación principal
├── sections/
│   ├── Hero.tsx                # Sección hero principal
│   ├── Benefits.tsx            # Beneficios (6 cards)
│   ├── Process.tsx             # Proceso de purificación (5 pasos)
│   ├── Certifications.tsx      # Certificaciones y garantías
│   ├── Testimonials.tsx        # Testimonios de clientes
│   ├── CTA.tsx                 # Call-to-Action final
│   └── Footer.tsx              # Pie de página
├── styles/
│   ├── colors.ts               # Sistema de colores
│   ├── typography.ts           # Estilos tipográficos
│   ├── Header.css              # Estilos del header
│   ├── Hero.css                # Estilos del hero
│   ├── Benefits.css            # Estilos de beneficios
│   ├── Process.css             # Estilos del proceso
│   ├── Certifications.css      # Estilos de certificaciones
│   ├── Testimonials.css        # Estilos de testimonios
│   ├── CTA.css                 # Estilos del CTA
│   └── Footer.css              # Estilos del footer
├── App.tsx                     # Componente principal
├── App.css                     # Estilos globales de la app
├── index.css                   # Variables y reset global
└── main.tsx                    # Punto de entrada
```

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool de última generación
- **Framer Motion** - Animaciones suave
- **CSS3** - Estilos modernos con variables CSS

## 📱 Características Responsive

- ✅ Mobile-first design
- ✅ Menú hamburguesa adaptable
- ✅ Grid layouts responsivos
- ✅ Tipografía fluida con clamp()
- ✅ Optimizado para pantallas desde 320px hasta 4K

## 🎬 Animaciones Incluidas

- **Parallax sutil** en el hero al hacer scroll
- **Morph animations** en botones y cards
- **Stagger animations** para listas
- **Fade-in & Slide-up** al entrar en viewport
- **Floating animation** en la botella 3D
- **Color transitions** suaves en interacciones

## 🔧 Instalación y Uso

### Requisitos
- Node.js 18+
- npm o yarn

### Desarrollo
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Acceder a http://localhost:5173/
```

### Producción
```bash
# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview

# Lint (verificar código)
npm lint
```

## 📝 Configuración de WhatsApp

Para activar los botones de WhatsApp, reemplaza el número de teléfono en:
- `src/components/Header.tsx` (línea ~55)
- `src/sections/Hero.tsx` (línea ~87)
- `src/sections/CTA.tsx` (línea ~32)

Cambia: `https://wa.me/573001234567` por tu número real

## 🎨 Personalización

### Cambiar colores principales
Edita `src/styles/colors.ts` con tu paleta

### Cambiar tipografía
Edita `src/styles/typography.ts` para otras fuentes de Google Fonts

### Modificar contenido
Actualiza los textos en cada componente de `src/sections/`

## 📊 Secciones Principales

### 1. **Hero**
- Fondo gradient cinematográfico con parallax
- Botella 3D animada con hover effects
- CTA principal a WhatsApp
- Badge con certificación INVIMA

### 2. **Beneficios**
- 6 cards con hover animations
- Icons emoji + descripciones
- Grid responsivo

### 3. **Proceso**
- Timeline visual de 5 etapas
- Números animados en círculos
- Línea conectora animada
- Detalles técnicos de cada paso

### 4. **Certificaciones**
- 4 certifications principales
- INVIMA, ISO 22000, control de calidad, sostenibilidad
- Box de confianza con mensaje de verificación

### 5. **Testimonios**
- 3 testimonios reales de clientes
- Ratings con estrellas
- Animaciones al scroll

### 6. **CTA Final**
- Fondo gradient llamativo
- Información de horarios y entrega
- Botón principal de contacto

### 7. **Footer**
- Enlaces útiles
- Información de contacto
- Redes sociales
- Copyright

## ✨ Mejores Prácticas Implementadas

- ✅ SEO amigable (meta tags, titles)
- ✅ Accesibilidad (ARIA labels, contrast ratios)
- ✅ Performance optimizado (code splitting, lazy loading)
- ✅ Variables CSS para mantenimiento simple
- ✅ Componentes reutilizables
- ✅ Clear file structure
- ✅ TypeScript strict mode

## 🐛 Troubleshooting

**Problema:** Los estilos no se cargan
- Solución: Asegúrate que `index.css` esté importado en `main.tsx`

**Problema:** Las animaciones lagean
- Solución: Reduce el `duration` en Framer Motion o usa `will-change` en CSS

**Problema:** WhatsApp links no funcionan en móvil
- Solución: Asegúrate de usar `window.open()` sin preventDefault

## 📄 Próximas Mejoras Sugeridas

- [ ] Agregar más testimonios dinámicos
- [ ] Blog section
- [ ] Galería de producto
- [ ] Formulario de contacto avanzado
- [ ] Integración con backend
- [ ] Analytics tracking
- [ ] Optimización de imágenes

## 📧 Contacto y Soporte

Para cambios, sugerencias o reportar bugs:
- Email: developer@delbosque.com.co
- WhatsApp: +57 300 123 4567

---

**Diseñado y desarrollado con ❤️ para delbosque - 2026**
