# PROPUESTA DE DISEÑO - delbosque Landing Page

## 📋 Síntesis Ejecutiva

Se ha desarrollado una landing page profesional, seria y corporativa para **delbosque** que transmite:
- ✅ **Pureza y confianza** en cada elemento visual
- ✅ **Autoridad técnica** mediante certificaciones y proceso detallado
- ✅ **Control sanitario** como valor central
- ✅ **Credibilidad institucional** no startup/SaaS

---

## 🎯 Estructura Base - Anatomía de Secciones

### 1. **HEADER/NAVEGACIÓN (Sticky)**
```
[Logo delbosque] [Nav Links] [CTA WhatsApp]
- Position: sticky top-0
- Background: white con border sutil
- Responde a scroll
- Menú hamburguesa en móvil
```

### 2. **HERO - Impacto Cinematográfico**
```
┌─────────────────────────────────────┐
│ [Gradiente azul profundo]           │
│ ┌─────────────┐     ┌───────────┐  │
│ │  Contenido  │     │  Botella  │  │
│ │  Principal  │     │    3D     │  │
│ │  (Left)     │     │ (Right)   │  │
│ └─────────────┘     └───────────┘  │
└─────────────────────────────────────┘

Min-height: 100vh
Elementos:
- Gradiente: #003D7A → #0052CC → #00BFA5
- Botella flotante con animación
- Parallax effect al scroll
- Badge "Pureza Certificada INVIMA"
- Título impactante
- Subtítulo descriptivo
- CTA primario (WhatsApp blanco)
- Flecha scroll down animada
```

### 3. **BENEFICIOS - Cards Corporativas**
```
┌──────────────────────────────────────┐
│ ¿Por qué elegir delbosque?          │
├──────────────────────────────────────┤
│ [Card 1]  [Card 2]  [Card 3]        │
│ [Card 4]  [Card 5]  [Card 6]        │
└──────────────────────────────────────┘

Grid: 3 columns (auto-fit)
Background: white
6 Beneficios:
1. 💧 Pureza Garantizada
2. 🛡️ Control Sanitario
3. 🚚 Entrega a Domicilio
4. ♻️ Sostenibilidad
5. 🌡️ Temperatura Controlada
6. ⭐ Servicio Premium

Card behavior:
- Hover: elevación + shadow
- Transición suave
- Border left accent teal
```

### 4. **PROCESO DE PURIFICACIÓN - Timeline Visual**
```
┌─────────────────────────────────────┐
│ Nuestro Proceso de Purificación    │
├─────────────────────────────────────┤
│
│ ① Captación de Agua
│ ↓ (línea animada)
│ ② Pre-filtración
│ ↓
│ ③ Filtración con Carbón
│ ↓
│ ④ Osmosis Inversa
│ ↓
│ ⑤ Post-filtración
│
└─────────────────────────────────────┘

Layout: Vertical timeline
- Números en círculos azules gradient
- Línea conectora teal animada
- Contenido con border-left teal
- 5 etapas con detalles técnicos
```

### 5. **CERTIFICACIONES - Trust Box**
```
┌──────────────────────────────────────┐
│ Certificaciones y Garantías         │
├──────────────────────────────────────┤
│ [✓ INVIMA]    [✓ ISO 22000]        │
│ [✓ Control]   [✓ Sostenibilidad]  │
│                                    │
│ [Trust Statement Box]              │
└──────────────────────────────────────┘

4 Certificaciones principales
Badge: Todos disponibles para consulta
Tone: Institucional, seria
```

### 6. **TESTIMONIOS - Social Proof**
```
┌──────────────────────────────────────┐
│ Lo que dicen nuestros clientes     │
├──────────────────────────────────────┤
│ [Card 1]    [Card 2]    [Card 3]   │
│
│ "Testimonio..."  ⭐⭐⭐⭐⭐        │
│ - Nombre, Rol
│
└──────────────────────────────────────┘

- 3 testimonios reales
- Rating de estrellas teal
- Nombre y rol del cliente
- Grid responsivo
```

### 7. **CTA FINAL - Call to Action Poderoso**
```
┌──────────────────────────────────────┐
│   [Gradient azul/teal background]   │
│                                     │
│   ¿Listo para cambiar a agua       │
│   de calidad premium?              │
│                                     │
│   [Botón WhatsApp blanco]          │
│   [Info: Horarios, entrega]        │
│                                     │
└──────────────────────────────────────┘

Background: Gradient deep
Button: white con sombra
Info box: semi-transparent backdrop
```

### 8. **FOOTER - Información Completa**
```
┌──────────────────────────────────────┐
│ [Dark Background]                  │
│                                     │
│ [delbosque]  [Empresa]  [Legal]   │
│ Descripción  Links      Links     │
│ Socials                            │
│                                     │
│ © 2026 delbosque - Todos derechos │
│ Distribuidora certificada INVIMA   │
│                                     │
└──────────────────────────────────────┘

Color: #1E293B (charcoal oscuro)
Links: Teal accent
Acceso: Empresa, legal, contacto
Socials: Icons con hover effects
```

---

## 🎨 Paleta de Colores Refinada

### Primarios Corporativos
| Color | Hex | Uso |
|-------|-----|-----|
| Azul Profundo | #003D7A | Hero, headings, primary button text |
| Azul Principal | #0052CC | Links, accents, gradients |
| Azul Claro | #0066FF | Hover states, borders |
| Azul BG | #E6F0FF | Fondos sutiles, card backgrounds |

### Acentos (Pureza & Higiene)
| Color | Hex | Uso |
|-------|-----|-----|
| Teal | #00BFA5 | Badges, borders, highlights |
| Cyan | #00D4FF | Animations, agua effects |

### Neutrales (Limpieza & Profesionalismo)
| Color | Hex | Uso |
|-------|-----|-----|
| Blanco | #FFFFFF | Background principal, cards |
| Gris Claro | #F8F9FA | Fondos sutiles |
| Gris | #E0E6ED | Borders, dividers |
| Gris Oscuro | #64748B | Body text secundario |
| Charcoal | #1E293B | Títulos, footer bg |

### Gradientes
```
Hero: linear-gradient(135deg, #003D7A, #0052CC, #00BFA5)
CTA: linear-gradient(135deg, #003D7A, #0052CC)
Subtle: linear-gradient(135deg, #F8F9FA, #E6F0FF)
```

---

## 📐 Sistema Tipográfico

### Fuentes Seleccionadas
- **Primary**: Inter (Google Fonts) - Limpia, moderna, legible
- **Secondary**: Poppins (Google Fonts) - Headings, énfasis
- **Mono**: Fira Code (Google Fonts) - Elementos técnicos

### Escala Tipográfica
```
h1: 2.5rem - 4rem       (títulos grandes, hero)
h2: 2rem - 3rem         (sección headings)
h3: 1.5rem - 2rem       (subsecciones)
h4: 1.5rem              (card titles)
body: 1rem              (texto principal)
small: 0.875rem         (metadata)
```

---

## ✨ Animaciones Implementadas

### 1. **Parallax Sutil**
- Background moves at 50% scroll speed
- Botella moves at 30% scroll speed
- Effect: Profundidad sin ser distractivo

### 2. **Stagger Animations** (Framer Motion)
```javascript
containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}
```
- Lists y cards aparecen una por una
- Efecto de revelación elegante

### 3. **Scroll Triggers** (whileInView)
- Elementos se animan cuando entran en viewport
- Smooth fade-in + slide-up
- No se repite si ya fue visto

### 4. **Hover Effects**
- Botones: scale 1.05 + sombra aumentada
- Cards: elevación + cambio de color de borde
- Enlaces: cambio de color suave

### 5. **Floating Animation**
```javascript
botanAnimates={{
  y: [0, -15, 0],
  rotate: [0, 5, 0]
}}
transition={{
  duration: 6,
  repeat: Infinity
}}
```
- Botella flota suavemente
- Rotación sutil
- Loop infinito relajante

### 6. **Línea Timeline Animada**
- Escala desde arriba (scaleY)
- Sincronizada con cada paso
- Gradient de color

---

## 🎯 Decisiones de Diseño Explicadas

### 1. **¿Por qué Azul Profundo como primario?**
- Azul = Confianza, profesionalismo, higiene
- Profundo (#003D7A) = Seriedad corporativa, no startup
- Gradiente hacia teal = Agua, pureza, movimiento

### 2. **¿Por qué Hero Cinematográfico?**
- Impacto visual memorable
- Comunica modernidad + profesionalismo
- Parallax agrega profundidad sin ser abrumador

### 3. **¿Por qué Botella 3D SVG en lugar de imagen?**
- Escalable a cualquier resolución
- Animación suave incorporada
- Refuerza tema visual (agua, purificación)

### 4. **¿Por qué Timeline lineal para el proceso?**
- Claridad visual del flujo
- Transmite procedimiento técnico ordenado
- Profesional + fácil de entender

### 5. **¿Por qué WhatsApp como CTA principal?**
- Canal de contacto preferido en Colombia
- Conversación directa genera confianza
- Mobile-first (mayoría de usuarios)

### 6. **¿Por qué sin ilustraciones caricaturescas?**
- Requisito del brief: evitar estilo infantil
- Emojis subtiles en lugar de gráficos animados
- Enfoque en fotografía/iconografía profesional

### 7. **¿Por qué responsive grid (auto-fit)?**
- Ajusta automáticamente a pantalla
- 3 cols desktop → 2 cols tablet → 1 col móvil
- Mantenimiento simple sin media queries complejas

---

## 📱 Responsive Strategy

### Breakpoints
```css
Desktop: 1200px max-width container
Tablet:  768px media query
Mobile:  480px y menores
```

### Comportamientos Clave
- Typography: `clamp()` para fluidez
- Grids: `auto-fit` con min-width
- Spacing: Variables CSS adaptables
- Images: Escalado natural

### Touch-friendly
- Botones: mínimo 48x48px
- Gap entre links: mínimo 1rem
- CTA: full-width en móvil

---

## ♿ Accesibilidad

- ✅ Contrast ratios WCAG AA
- ✅ ARIA labels en nav
- ✅ Semantic HTML (header, nav, section, footer)
- ✅ Focus outlines visibles (2px solid)
- ✅ Skip to main content link (hidden pero funcional)
- ✅ Reducción de movimiento respetada

---

## 🚀 Performance Considerations

1. **CSS-in-JS**: Variables CSS globales (no overhead)
2. **Animaciones**: GPU-accelerated (transform, opacity)
3. **Code Splitting**: React lazy loading
4. **Bundle Size**: Framer Motion tree-shakeable
5. **LCP (Largest Contentful Paint)**: Hero carga primera

---

## 🔗 Links en el Diseño

| Elemento | URL |
|----------|-----|
| WhatsApp CTA | `https://wa.me/573001234567?text=...` |
| Navegación | Links internos `#Benefits`, `#Process` |
| Footer | Links a subpáginas futuras |

---

## 📊 Próximos Pasos Sugeridos

1. **Contenido Real**
   - Reemplazar testimonios con reales
   - Agregar logo y marca oficial
   - URLs correctas de WhatsApp

2. **Imágenes**
   - Fotografía de garrafón real
   - Oficina/laboratorio
   - Equipo de trabajo

3. **Integración**
   - Backend para formulario contacto
   - Analytics (GTM, Hotjar)
   - CRM integration

4. **Optimización**
   - Image optimization
   - Webfont preload
   - Cache estratégico

---

**Documento creado: Febrero 2026**
**Diseño: Corporativo | Serio | Profesional | Trustworthy**
