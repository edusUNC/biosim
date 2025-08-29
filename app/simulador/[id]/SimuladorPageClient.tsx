'use client';

import { useEffect, useState } from 'react';
import { simuladores } from '../../../data/simuladores';
import { getCategoryColors } from '../../../data/categoryColors';
import { ArrowLeft, BookOpen, Clock, CheckCircle, Target, Sparkles, Goal } from 'lucide-react';
import Link from 'next/link';
import Footer from '../../../components/Footer';

interface SimuladorPageClientProps {
  params: {
    id: string;
  };
}

export default function SimuladorPageClient({ params }: SimuladorPageClientProps) {
  const [simulador, setSimulador] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundSimulador = simuladores.find(s => s.id === params.id);
    setSimulador(foundSimulador);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Cargando simulador...</p>
        </div>
      </div>
    );
  }

  if (!simulador) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        color: '#666'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1e293b', marginBottom: '1rem' }}>Simulador no encontrado</h1>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>El simulador que buscas no existe.</p>
          <Link 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: '#3b82f6',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#3b82f6';
            }}
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors = getCategoryColors(simulador.categoria);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
    }}>
      {/* Header consistente con la página principal */}
      <header style={{
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: categoryColors.primary,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <Sparkles />
              </div>
              <h1 style={{
                fontSize: '2.25rem',
                fontWeight: '700',
                color: '#1e293b',
                margin: 0
              }}>Simuladores FIBI</h1>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link 
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  color: '#64748b',
                  textDecoration: 'none',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                  e.currentTarget.style.color = '#374151';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#64748b';
                }}
              >
                <ArrowLeft size={16} />
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main style={{ padding: '2rem 0', flex: 1 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
         
          {/* Información del simulador */}
          <div style={{
            background: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <BookOpen size={48} style={{ margin: '0 auto', color: categoryColors.primary, marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '0.5rem' }}>¿Listo para comenzar?</h2>
              <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                Haz clic en el botón de abajo para abrir el simulador en una nueva pestaña
              </p>
              {simulador.tiempoEstimado && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#64748b', marginBottom: '1rem' }}>
                  <Clock size={16} />
                  <span>Tiempo estimado: {simulador.tiempoEstimado}</span>
                </div>
              )}
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <a
                href={`/simuladores/${simulador.archivo}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  background: categoryColors.primary,
                  color: 'white',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '1.125rem',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = categoryColors.primaryDark;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = categoryColors.primary;
                }}

              >
                <BookOpen size={20} />
                Abrir Simulador
              </a>
            </div>
          </div>

          {/* Información adicional */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {/* Objetivo */}
            {simulador.objetivo && (
              <div style={{
                background: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0',
                padding: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Goal  size={18} />
                  Objetivo
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <p style={{ color: '#374151', fontSize: '0.875rem' }}>{simulador.objetivo}</p>
                </div>
              </div>
            )}

            {/* Instrucciones */}
            {simulador.instrucciones && (
              <div style={{
                background: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0',
                padding: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Target size={18} />
                  Instrucciones
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {simulador.instrucciones.map((instruccion: string, index: number) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{
                        flexShrink: 0,
                        width: '20px',
                        height: '20px',
                        background: categoryColors.background,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px'
                      }}>
                        <span style={{ color: categoryColors.primary, fontSize: '0.75rem', fontWeight: '500' }}>{index + 1}</span>
                      </div>
                      <p style={{ color: '#374151', fontSize: '0.875rem' }}>{instruccion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requisitos */}
            {simulador.requisitos && (
              <div style={{
                background: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0',
                padding: '1.5rem'
              }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={18} />
                  Requisitos Previos
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {simulador.requisitos.map((requisito: string, index: number) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle size={14} style={{ color: '#10b981', flexShrink: 0 }} />
                      <p style={{ color: '#374151', fontSize: '0.875rem' }}>{requisito}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>


          {/* Botón de volver */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                border: '1px solid #d1d5db',
                color: '#374151',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ArrowLeft size={18} />
              Ver Todos los Simuladores
            </Link>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
