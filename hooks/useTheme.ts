import { useEffect } from 'react';
import { getCategoryColors } from '../data/categoryColors';

export function useTheme(category: string) {
  useEffect(() => {
    const colors = getCategoryColors(category);
    
    // Aplicar colores al documento usando CSS custom properties
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--primary-dark', colors.primaryDark);
    root.style.setProperty('--category-bg', colors.background);
    root.style.setProperty('--category-border', colors.border);
    root.style.setProperty('--category-text', colors.text);
    
    // Aplicar transición suave para el cambio de colores
    root.style.setProperty('--transition', 'all 0.3s ease-in-out');
    
  }, [category]);
}
