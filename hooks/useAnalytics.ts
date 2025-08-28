import { track } from '@vercel/analytics';
import { ANALYTICS_CONFIG, ANALYTICS_EVENTS } from '../config/analytics';

export function useAnalytics() {
  const trackSimulatorOpen = (simulatorId: string, simulatorName: string, category: string) => {
    if (!ANALYTICS_CONFIG.enabled || !ANALYTICS_CONFIG.events.simulator_opened) return;
    
    track(ANALYTICS_EVENTS.SIMULATOR_OPENED, {
      simulator_id: simulatorId,
      simulator_name: simulatorName,
      category: category,
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`
    });
  };

  const trackCategoryFilter = (category: string) => {
    if (!ANALYTICS_CONFIG.enabled || !ANALYTICS_CONFIG.events.category_filtered) return;
    
    track(ANALYTICS_EVENTS.CATEGORY_FILTERED, {
      category: category,
      timestamp: new Date().toISOString(),
      total_simulators: category === 'todas' ? 'all' : 'filtered'
    });
  };

  const trackSearch = (searchTerm: string, resultsCount: number) => {
    if (!ANALYTICS_CONFIG.enabled || !ANALYTICS_CONFIG.events.search_performed) return;
    
    track(ANALYTICS_EVENTS.SEARCH_PERFORMED, {
      search_term: searchTerm,
      results_count: resultsCount,
      timestamp: new Date().toISOString(),
      search_length: searchTerm.length
    });
  };

  const trackPageView = (page: string) => {
    if (!ANALYTICS_CONFIG.enabled || !ANALYTICS_CONFIG.events.page_view) return;
    
    track(ANALYTICS_EVENTS.PAGE_VIEW, {
      page: page,
      timestamp: new Date().toISOString(),
      referrer: document.referrer || 'direct'
    });
  };

  return {
    trackSimulatorOpen,
    trackCategoryFilter,
    trackSearch,
    trackPageView
  };
}
