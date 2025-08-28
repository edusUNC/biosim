import { useEffect, useCallback } from 'react';

interface AnalyticsEvent {
  id: string;
  type: string;
  data: any;
  timestamp: string;
  sessionId: string;
}

interface LocalAnalyticsConfig {
  enabled: boolean;
  storageKey: string;
  maxEvents: number;
  sendToServer: boolean;
  serverEndpoint?: string;
}

const DEFAULT_CONFIG: LocalAnalyticsConfig = {
  enabled: true,
  storageKey: 'fibi_analytics',
  maxEvents: 1000,
  sendToServer: false,
  serverEndpoint: '/api/analytics'
};

class LocalAnalytics {
  private config: LocalAnalyticsConfig;
  private sessionId: string;

  constructor(config: Partial<LocalAnalyticsConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private getEvents(): AnalyticsEvent[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const stored = localStorage.getItem(this.config.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading analytics from localStorage:', error);
      return [];
    }
  }

  private saveEvents(events: AnalyticsEvent[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      // Mantener solo los últimos maxEvents
      const trimmedEvents = events.slice(-this.config.maxEvents);
      localStorage.setItem(this.config.storageKey, JSON.stringify(trimmedEvents));
    } catch (error) {
      console.error('Error saving analytics to localStorage:', error);
    }
  }

  private async sendToServer(event: AnalyticsEvent): Promise<void> {
    if (!this.config.sendToServer || !this.config.serverEndpoint) return;

    try {
      await fetch(this.config.serverEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Error sending analytics to server:', error);
    }
  }

  track(type: string, data: any = {}): void {
    if (!this.config.enabled) return;

    const event: AnalyticsEvent = {
      id: 'event_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      type,
      data: {
        ...data,
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        screenResolution: typeof screen !== 'undefined' ? `${screen.width}x${screen.height}` : '',
        referrer: typeof document !== 'undefined' ? document.referrer : '',
      },
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
    };

    // Guardar localmente
    const events = this.getEvents();
    events.push(event);
    this.saveEvents(events);

    // Enviar al servidor si está configurado
    this.sendToServer(event);

    // Log en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', event);
    }
  }

  getAllEvents(): AnalyticsEvent[] {
    return this.getEvents();
  }

  clearEvents(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(this.config.storageKey);
  }

  exportEvents(): string {
    const events = this.getAllEvents();
    return JSON.stringify(events, null, 2);
  }

  getStats(): {
    totalEvents: number;
    eventsByType: Record<string, number>;
    recentEvents: AnalyticsEvent[];
  } {
    const events = this.getAllEvents();
    const eventsByType = events.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalEvents: events.length,
      eventsByType,
      recentEvents: events.slice(-10), // Últimos 10 eventos
    };
  }
}

// Instancia global
const analytics = new LocalAnalytics();

export function useLocalAnalytics() {
  const trackSimulatorOpen = useCallback((simulatorId: string, simulatorName: string, category: string) => {
    analytics.track('simulator_opened', {
      simulator_id: simulatorId,
      simulator_name: simulatorName,
      category: category,
    });
  }, []);

  const trackCategoryFilter = useCallback((category: string) => {
    analytics.track('category_filtered', {
      category: category,
      total_simulators: category === 'todas' ? 'all' : 'filtered'
    });
  }, []);

  const trackSearch = useCallback((searchTerm: string, resultsCount: number) => {
    analytics.track('search_performed', {
      search_term: searchTerm,
      results_count: resultsCount,
      search_length: searchTerm.length
    });
  }, []);

  const trackPageView = useCallback((page: string) => {
    analytics.track('page_view', {
      page: page,
    });
  }, []);

  const getStats = useCallback(() => {
    return analytics.getStats();
  }, []);

  const exportData = useCallback(() => {
    return analytics.exportEvents();
  }, []);

  const clearData = useCallback(() => {
    analytics.clearEvents();
  }, []);

  return {
    trackSimulatorOpen,
    trackCategoryFilter,
    trackSearch,
    trackPageView,
    getStats,
    exportData,
    clearData,
  };
}
