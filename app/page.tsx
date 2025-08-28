'use client';

import { useState, useMemo } from 'react';
import { simuladores, categorias, Simulador } from '../data/simuladores';
import { getCategoryColors } from '../data/categoryColors';
import { useTheme } from '../hooks/useTheme';
import Footer from '../components/Footer';
import { Search, BookOpen, Heart, Brain, Zap, Filter, Sparkles } from 'lucide-react';

export default function Home() {
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Aplicar tema dinámico basado en la categoría seleccionada
  useTheme(categoriaFiltro === 'todas' ? '' : categoriaFiltro);

  const simuladoresFiltrados = useMemo(() => {
    let filtered = simuladores;
    
    if (categoriaFiltro !== 'todas') {
      filtered = filtered.filter(s => s.categoria === categoriaFiltro);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(s => 
        s.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [categoriaFiltro, searchTerm]);

  const getCategoryIcon = (categoria: string) => {
    const icons = {
      'Cardiología': Heart,
      'Fisiología': Brain,
      'Física': Zap,
      'Neurofisiología': Brain
    };
    return icons[categoria as keyof typeof icons] || BookOpen;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="brand">
              <div className="brand-icon">
                <Sparkles />
              </div>
              <h1 className="brand-title">Simuladores FIBI</h1>
            </div>
            
            {/* Barra de búsqueda */}
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Buscar simuladores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="main">
        <div className="container">
          {/* Estadísticas */}
          <div className="stats">
            <div className="stats-badge">
              <Filter />
              <span>{simuladoresFiltrados.length} de {simuladores.length} simuladores disponibles</span>
            </div>
            {categoriaFiltro !== 'todas' && (
              <div className="category-indicator">
                <span>Filtrando por: {categoriaFiltro}</span>
              </div>
            )}
          </div>

          {/* Filtros */}
          <div className="filters">
            <div className="filters-container">
              <button
                onClick={() => setCategoriaFiltro('todas')}
                className={`filter-btn ${categoriaFiltro === 'todas' ? 'active' : ''}`}
              >
                Todas las categorías
              </button>
              {categorias.map((categoria) => {
                const Icon = getCategoryIcon(categoria);
                return (
                  <button
                    key={categoria}
                    onClick={() => setCategoriaFiltro(categoria)}
                    className={`filter-btn ${categoriaFiltro === categoria ? 'active' : ''}`}
                  >
                    <Icon />
                    {categoria}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid de simuladores */}
          <div className="simulators-grid">
            {simuladoresFiltrados.map((simulador) => (
              <SimuladorCard key={simulador.id} simulador={simulador} />
            ))}
          </div>

          {/* Estado vacío */}
          {simuladoresFiltrados.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">
                <Search />
              </div>
              <h3 className="empty-title">No se encontraron simuladores</h3>
              <p className="empty-description">
                Intenta ajustar los filtros o términos de búsqueda
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function SimuladorCard({ simulador }: { simulador: Simulador }) {
  const getCategoryIcon = (categoria: string) => {
    const icons = {
      'Cardiología': Heart,
      'Fisiología': Brain,
      'Física': Zap,
      'Neurofisiología': Brain
    };
    return icons[categoria as keyof typeof icons] || BookOpen;
  };

  const Icon = getCategoryIcon(simulador.categoria);
  const categoryColors = getCategoryColors(simulador.categoria);

  return (
    <div className="simulator-card">
      {/* Header con colores temáticos */}
      <div 
        className="card-header"
        style={{
          backgroundColor: categoryColors.background,
          borderBottomColor: categoryColors.border
        }}
      >
        <div className="card-header-content">
          <div 
            className="card-icon"
            style={{
              backgroundColor: categoryColors.primary
            }}
          >
            <Icon />
          </div>
          <div>
            <span 
              className="card-category"
              style={{
                color: categoryColors.text
              }}
            >
              {simulador.categoria}
            </span>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="card-content">
        <h3 className="card-title">
          {simulador.nombre}
        </h3>

        <p className="card-description">
          {simulador.descripcion}
        </p>

        {/* Botón de acción */}
        <a
          href={`/simuladores/${simulador.archivo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
        >
          <BookOpen />
          Abrir Simulador
        </a>
      </div>
    </div>
  );
}
