# Analytics para Simuladores FIBI

## 📊 Sistema de Analytics Implementado

Este proyecto utiliza **Vercel Analytics** para trackear el uso de los simuladores y obtener insights valiosos sobre el comportamiento de los usuarios.

## 🎯 Eventos Trackeados

### 1. **Simuladores Abiertos** (`simulator_opened`)
- **Cuándo**: Cuando un usuario hace clic en "Abrir Simulador"
- **Datos capturados**:
  - ID del simulador
  - Nombre del simulador
  - Categoría
  - Timestamp
  - User Agent
  - Resolución de pantalla

### 2. **Filtros por Categoría** (`category_filtered`)
- **Cuándo**: Cuando un usuario selecciona una categoría específica
- **Datos capturados**:
  - Categoría seleccionada
  - Timestamp
  - Total de simuladores (filtrados vs todos)

### 3. **Búsquedas** (`search_performed`)
- **Cuándo**: Cuando un usuario realiza una búsqueda
- **Datos capturados**:
  - Término de búsqueda
  - Cantidad de resultados
  - Longitud del término de búsqueda
  - Timestamp

### 4. **Vistas de Página** (`page_view`)
- **Cuándo**: Cuando un usuario visita una página
- **Datos capturados**:
  - Página visitada
  - Referrer (de dónde viene)
  - Timestamp

## 🔧 Configuración

### Variables de Entorno

```bash
# Habilitar analytics en desarrollo (opcional)
NEXT_PUBLIC_ANALYTICS_ENABLED=true
```

### Configuración en `config/analytics.ts`

```typescript
export const ANALYTICS_CONFIG = {
  enabled: process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
  
  events: {
    simulator_opened: true,
    category_filtered: true,
    search_performed: true,
    page_view: true,
    filter_changed: true,
    time_spent: true
  }
};
```

## 📈 Cómo Ver los Datos

### 1. **Vercel Dashboard**
- Ve a tu proyecto en Vercel
- Navega a la sección "Analytics"
- Verás métricas como:
  - Páginas más visitadas
  - Eventos personalizados
  - Usuarios únicos
  - Tiempo en página

### 2. **Componente de Debug** (Solo desarrollo)
- En modo desarrollo, aparece un panel en la esquina inferior derecha
- Muestra eventos en tiempo real
- Estadísticas básicas de uso

## 🎨 Personalización

### Agregar Nuevos Eventos

1. **Actualizar configuración**:
```typescript
// config/analytics.ts
events: {
  nuevo_evento: true
}
```

2. **Agregar constante**:
```typescript
export const ANALYTICS_EVENTS = {
  NUEVO_EVENTO: 'nuevo_evento'
};
```

3. **Crear función de tracking**:
```typescript
// hooks/useAnalytics.ts
const trackNuevoEvento = (data: any) => {
  if (!ANALYTICS_CONFIG.enabled || !ANALYTICS_CONFIG.events.nuevo_evento) return;
  
  track(ANALYTICS_EVENTS.NUEVO_EVENTO, {
    ...data,
    timestamp: new Date().toISOString()
  });
};
```

## 📊 Métricas Importantes

### Para Simuladores
- **Más populares**: Cuáles se abren más
- **Por categoría**: Qué categorías son más usadas
- **Patrones de uso**: Cuándo se usan más

### Para UX
- **Búsquedas**: Qué buscan los usuarios
- **Filtros**: Qué categorías prefieren
- **Navegación**: Cómo navegan por el sitio

## 🔒 Privacidad

- **No se capturan datos personales**
- **Solo métricas de uso anónimas**
- **Cumple con GDPR**
- **Datos agregados para análisis**

## 🚀 Despliegue

El sistema de analytics se activa automáticamente en producción. En desarrollo, puedes habilitarlo con:

```bash
NEXT_PUBLIC_ANALYTICS_ENABLED=true npm run dev
```

## 📝 Notas Técnicas

- **Vercel Analytics** es la solución oficial de Vercel
- **Sin configuración adicional** necesaria
- **Performance optimizada** - no afecta la velocidad del sitio
- **Datos en tiempo real** disponibles en el dashboard
