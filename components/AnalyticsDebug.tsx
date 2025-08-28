'use client';

import { useState, useEffect } from 'react';
import { BarChart3, Eye, MousePointer, TrendingUp } from 'lucide-react';

interface AnalyticsEvent {
  type: string;
  data: any;
  timestamp: string;
}

export default function AnalyticsDebug() {
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Solo mostrar en desarrollo
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    // Simular eventos de analytics para debug
    const mockEvents: AnalyticsEvent[] = [
      {
        type: 'simulator_opened',
        data: { simulator_id: 'ecg', simulator_name: 'Simulador ECG', category: 'Cardiología' },
        timestamp: new Date().toISOString()
      },
      {
        type: 'category_filtered',
        data: { category: 'Cardiología' },
        timestamp: new Date().toISOString()
      }
    ];
    setEvents(mockEvents);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="analytics-debug">
      <div className="analytics-debug-header">
        <BarChart3 size={16} />
        <span>Analytics Debug</span>
        <button 
          onClick={() => setIsVisible(false)}
          className="analytics-debug-close"
        >
          ×
        </button>
      </div>
      <div className="analytics-debug-content">
        <div className="analytics-stats">
          <div className="stat-item">
            <Eye size={14} />
            <span>Page Views: {events.filter(e => e.type === 'page_view').length}</span>
          </div>
          <div className="stat-item">
            <MousePointer size={14} />
            <span>Simulators Opened: {events.filter(e => e.type === 'simulator_opened').length}</span>
          </div>
          <div className="stat-item">
            <TrendingUp size={14} />
            <span>Total Events: {events.length}</span>
          </div>
        </div>
        <div className="analytics-events">
          <h4>Recent Events:</h4>
          {events.slice(-3).map((event, index) => (
            <div key={index} className="event-item">
              <span className="event-type">{event.type}</span>
              <span className="event-time">
                {new Date(event.timestamp).toLocaleTimeString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
