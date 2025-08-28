export const GA_CONFIG = {
  // ID de Google Analytics (configurar en .env.local)
  trackingId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  
  // Habilitar/deshabilitar analytics
  enabled: process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_GA_ENABLED === 'true',
  
  // Configuración de eventos personalizados
  customEvents: {
    simulator_opened: {
      category: 'Simulador',
      action: 'open',
      label: 'simulator_name',
    },
    category_filtered: {
      category: 'Filtro',
      action: 'filter',
      label: 'category',
    },
    search_performed: {
      category: 'Búsqueda',
      action: 'search',
      label: 'search_term',
    },
    page_view: {
      category: 'Navegación',
      action: 'page_view',
      label: 'page_title',
    },
  },
  
  // Configuración de dimensiones personalizadas
  customDimensions: {
    simulator_id: 'cd1',
    simulator_name: 'cd2',
    category: 'cd3',
    search_term: 'cd4',
    results_count: 'cd5',
  },
  
  // Configuración de métricas personalizadas
  customMetrics: {
    search_length: 'cm1',
    results_count: 'cm2',
  },
};

export const GA_EVENTS = {
  SIMULATOR_OPENED: 'simulator_opened',
  CATEGORY_FILTERED: 'category_filtered',
  SEARCH_PERFORMED: 'search_performed',
  PAGE_VIEW: 'page_view',
  FILTER_CHANGED: 'filter_changed',
} as const;

// Configuración para diferentes entornos
export const getGAConfig = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const isProd = process.env.NODE_ENV === 'production';
  
  return {
    ...GA_CONFIG,
    debug: isDev,
    enabled: isProd || process.env.NEXT_PUBLIC_GA_ENABLED === 'true',
  };
};
