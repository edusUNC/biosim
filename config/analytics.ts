export const ANALYTICS_CONFIG = {
  // Habilitar/deshabilitar analytics
  enabled: process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
  
  // Eventos que queremos trackear
  events: {
    simulator_opened: true,
    category_filtered: true,
    search_performed: true,
    page_view: true,
    filter_changed: true,
    time_spent: true
  },
  
  // Configuración de timeouts
  timeouts: {
    session_timeout: 30 * 60 * 1000, // 30 minutos
    page_view_delay: 2000 // 2 segundos para considerar una vista válida
  },
  
  // Categorías de simuladores para analytics
  categories: {
    cardiologia: 'Cardiología',
    fisiologia: 'Fisiología',
    fisica: 'Física',
    neurofisiologia: 'Neurofisiología'
  }
};

export const ANALYTICS_EVENTS = {
  SIMULATOR_OPENED: 'simulator_opened',
  CATEGORY_FILTERED: 'category_filtered',
  SEARCH_PERFORMED: 'search_performed',
  PAGE_VIEW: 'page_view',
  FILTER_CHANGED: 'filter_changed',
  TIME_SPENT: 'time_spent'
} as const;
