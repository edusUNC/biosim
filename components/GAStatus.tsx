'use client';

import { useEffect, useState } from 'react';

export default function GAStatus() {
  const [gaInfo, setGaInfo] = useState({
    gaId: '',
    gtagExists: false,
    isProduction: false,
  });

  useEffect(() => {
    const checkGA = () => {
      const gaId = process.env.NEXT_PUBLIC_GA_ID || 'No configurado';
      const gtagExists = typeof window !== 'undefined' && typeof window.gtag === 'function';
      const isProduction = process.env.NODE_ENV === 'production';

      setGaInfo({ gaId, gtagExists, isProduction });

      // Log para debugging
      console.log('🔍 GA Status:', { gaId, gtagExists, isProduction });
    };

    checkGA();
    setTimeout(checkGA, 2000); // Verificar después de 2 segundos
  }, []);

  if (process.env.NODE_ENV === 'development') return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      fontSize: '12px',
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div><strong>GA ID:</strong> {gaInfo.gaId}</div>
      <div><strong>gtag:</strong> {gaInfo.gtagExists ? '✅' : '❌'}</div>
      <div><strong>Env:</strong> {gaInfo.isProduction ? '🚀 Prod' : '🛠️ Dev'}</div>
    </div>
  );
}
