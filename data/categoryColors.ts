export interface CategoryColors {
  primary: string;
  primaryDark: string;
  background: string;
  border: string;
  text: string;
}

export const categoryColors: Record<string, CategoryColors> = {
  'Cardiología': {
    primary: '#dc2626', // Rojo suave
    primaryDark: '#b91c1c',
    background: '#fef2f2',
    border: '#fecaca',
    text: '#991b1b'
  },
  'Fisiología': {
    primary: '#059669', // Verde suave
    primaryDark: '#047857',
    background: '#f0fdf4',
    border: '#bbf7d0',
    text: '#065f46'
  },
  'Física': {
    primary: '#d97706', // Amarillo/naranja suave
    primaryDark: '#b45309',
    background: '#fffbeb',
    border: '#fed7aa',
    text: '#92400e'
  },
  'Neurofisiología': {
    primary: '#7c3aed', // Púrpura suave
    primaryDark: '#6d28d9',
    background: '#faf5ff',
    border: '#ddd6fe',
    text: '#5b21b6'
  }
};

// Colores por defecto cuando no hay categoría seleccionada
export const defaultColors: CategoryColors = {
  primary: '#3b82f6',
  primaryDark: '#2563eb',
  background: '#f8fafc',
  border: '#e2e8f0',
  text: '#1e293b'
};

export function getCategoryColors(category: string): CategoryColors {
  return categoryColors[category] || defaultColors;
}
