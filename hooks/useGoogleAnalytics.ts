import { useEffect, useCallback } from 'react';

// ID de Google Analytics (lo configurarás después)
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Inicializar Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: 'Simuladores FIBI',
      page_location: window.location.href,
    });
  }
};

// Tipos de eventos personalizados
export const GA_EVENTS = {
  SIMULATOR_OPENED: 'simulator_opened',
  CATEGORY_FILTERED: 'category_filtered',
  SEARCH_PERFORMED: 'search_performed',
  PAGE_VIEW: 'page_view',
  FILTER_CHANGED: 'filter_changed',
} as const;

export function useGoogleAnalytics() {
  // Inicializar GA al cargar
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      initGA();
    }
  }, []);

  // Trackear apertura de simulador
  const trackSimulatorOpen = useCallback((
    simulatorId: string, 
    simulatorName: string, 
    category: string
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', GA_EVENTS.SIMULATOR_OPENED, {
        event_category: 'Simulador',
        event_label: simulatorName,
        simulator_id: simulatorId,
        simulator_name: simulatorName,
        category: category,
        value: 1,
      });
    }
  }, []);

  // Trackear filtro por categoría
  const trackCategoryFilter = useCallback((category: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', GA_EVENTS.CATEGORY_FILTERED, {
        event_category: 'Filtro',
        event_label: category,
        category: category,
        value: 1,
      });
    }
  }, []);

  // Trackear búsqueda
  const trackSearch = useCallback((searchTerm: string, resultsCount: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', GA_EVENTS.SEARCH_PERFORMED, {
        event_category: 'Búsqueda',
        event_label: searchTerm,
        search_term: searchTerm,
        results_count: resultsCount,
        search_length: searchTerm.length,
        value: 1,
      });
    }
  }, []);

  // Trackear vista de página
  const trackPageView = useCallback((page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: page,
        page_location: window.location.href,
      });
    }
  }, []);

  // Trackear cambio de filtro
  const trackFilterChange = useCallback((filterType: string, value: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', GA_EVENTS.FILTER_CHANGED, {
        event_category: 'Filtro',
        event_label: `${filterType}: ${value}`,
        filter_type: filterType,
        filter_value: value,
        value: 1,
      });
    }
  }, []);

  return {
    trackSimulatorOpen,
    trackCategoryFilter,
    trackSearch,
    trackPageView,
    trackFilterChange,
  };
}

// Declaración global para TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
