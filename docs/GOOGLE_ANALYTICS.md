# Google Analytics para Simuladores FIBI

## 📊 Configuración de Google Analytics 4

Este proyecto utiliza **Google Analytics 4 (GA4)** para trackear el uso de los simuladores de manera gratuita y completa.

## 🚀 Configuración Inicial

### 1. **Crear Cuenta de Google Analytics**

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una nueva cuenta para "FIBI" o tu institución
3. Crea una nueva propiedad para "Simuladores FIBI"
4. Selecciona "Web" como plataforma
5. Completa la información de tu sitio web

### 2. **Obtener el ID de Seguimiento**

1. En Google Analytics, ve a **Administrador** → **Propiedad** → **Configuración de datos**
2. Copia el **ID de medición** (formato: `G-XXXXXXXXXX`)

### 3. **Configurar Variables de Entorno**

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Google Analytics Configuration
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Habilitar analytics en desarrollo (opcional)
NEXT_PUBLIC_GA_ENABLED=true
```

**Reemplaza `G-XXXXXXXXXX` con tu ID real de Google Analytics.**

## 🎯 Eventos Trackeados

### **1. Simuladores Abiertos** (`simulator_opened`)
- **Cuándo**: Usuario hace clic en "Abrir Simulador"
- **Datos capturados**:
  - ID del simulador
  - Nombre del simulador
  - Categoría
  - User Agent
  - Resolución de pantalla

### **2. Filtros por Categoría** (`category_filtered`)
- **Cuándo**: Usuario selecciona una categoría
- **Datos capturados**:
  - Categoría seleccionada
  - Total de simuladores (filtrados vs todos)

### **3. Búsquedas** (`search_performed`)
- **Cuándo**: Usuario realiza una búsqueda
- **Datos capturados**:
  - Término de búsqueda
  - Cantidad de resultados
  - Longitud del término

### **4. Vistas de Página** (`page_view`)
- **Cuándo**: Usuario visita una página
- **Datos capturados**:
  - Página visitada
  - Referrer

## 📈 Cómo Ver los Datos

### **1. Google Analytics Dashboard**

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Selecciona tu propiedad "Simuladores FIBI"
3. Navega a **Informes** → **Engagement** → **Eventos**

### **2. Eventos Personalizados**

En Google Analytics, ve a:
- **Informes** → **Engagement** → **Eventos**
- **Informes** → **Engagement** → **Eventos personalizados**

### **3. Informes Personalizados**

Puedes crear informes personalizados para:
- **Simuladores más populares**
- **Categorías más usadas**
- **Patrones de búsqueda**
- **Comportamiento de usuarios**

## 🔧 Configuración Avanzada

### **Dimensiones Personalizadas**

El sistema está configurado para usar dimensiones personalizadas:
- `cd1`: ID del simulador
- `cd2`: Nombre del simulador
- `cd3`: Categoría
- `cd4`: Término de búsqueda
- `cd5`: Cantidad de resultados

### **Métricas Personalizadas**

- `cm1`: Longitud del término de búsqueda
- `cm2`: Cantidad de resultados

## 🎨 Personalización

### **Agregar Nuevos Eventos**

1. **Actualizar configuración**:
```typescript
// config/googleAnalytics.ts
customEvents: {
  nuevo_evento: {
    category: 'Nueva Categoría',
    action: 'nueva_accion',
    label: 'nuevo_label',
  }
}
```

2. **Agregar constante**:
```typescript
export const GA_EVENTS = {
  NUEVO_EVENTO: 'nuevo_evento'
};
```

3. **Crear función de tracking**:
```typescript
// hooks/useGoogleAnalytics.ts
const trackNuevoEvento = (data: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', GA_EVENTS.NUEVO_EVENTO, {
      event_category: 'Nueva Categoría',
      event_label: data.label,
      ...data,
    });
  }
};
```

## 📊 Métricas Importantes

### **Para Simuladores**
- **Más populares**: Cuáles se abren más
- **Por categoría**: Qué categorías son más usadas
- **Patrones de uso**: Cuándo se usan más

### **Para UX**
- **Búsquedas**: Qué buscan los usuarios
- **Filtros**: Qué categorías prefieren
- **Navegación**: Cómo navegan por el sitio

## 🔒 Privacidad y Cumplimiento

- **Cumple con GDPR**: Google Analytics tiene configuraciones de privacidad
- **Datos anónimos**: No se capturan datos personales
- **Configurable**: Puedes deshabilitar tracking específico
- **Consentimiento**: Considera agregar banner de cookies si es necesario

## 🚀 Despliegue

### **Desarrollo**
```bash
# Habilitar analytics en desarrollo
NEXT_PUBLIC_GA_ENABLED=true npm run dev
```

### **Producción**
- Analytics se activa automáticamente
- Solo necesitas configurar `NEXT_PUBLIC_GA_ID`

## 📝 Notas Técnicas

- **GA4**: Versión más moderna de Google Analytics
- **Gratuito**: Sin límites para uso personal/educativo
- **Performance**: No afecta la velocidad del sitio
- **Tiempo real**: Datos disponibles en minutos
- **Integración**: Funciona perfectamente con Next.js

## 🎯 Próximos Pasos

1. **Configurar Google Analytics** con tu ID real
2. **Probar eventos** en desarrollo
3. **Crear informes personalizados** en GA
4. **Configurar alertas** para métricas importantes
5. **Analizar datos** regularmente para mejorar UX

## 🔗 Enlaces Útiles

- [Google Analytics](https://analytics.google.com/)
- [GA4 Eventos](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [GA4 Configuración](https://support.google.com/analytics/answer/10089681)
