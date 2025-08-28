export interface Simulador {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  archivo: string;
}

export const simuladores: Simulador[] = [
  {
    id: 'ecg',
    nombre: 'Simulador ECG',
    descripcion: 'Calculadora de frecuencia cardíaca y análisis de ondas ECG',
    categoria: 'Cardiología',
    archivo: 'ecg.html'
  },
  {
    id: 'ecg-competencia',
    nombre: 'ECG - Competencia',
    descripcion: 'Simulador avanzado de ECG para competencias y evaluaciones',
    categoria: 'Cardiología',
    archivo: 'ecg-competencia.html'
  },
  {
    id: 'dipolo',
    nombre: 'Simulador de Dipolo',
    descripcion: 'Visualización y análisis de campos eléctricos de dipolos',
    categoria: 'Física',
    archivo: 'dipolo.html'
  },
  {
    id: 'automatismo',
    nombre: 'Simulador de Automatismo',
    descripcion: 'Estudio de los automatismos cardíacos y su funcionamiento',
    categoria: 'Fisiología',
    archivo: 'automatismo.html'
  },
  {
    id: 'ghk',
    nombre: 'Ecuación de Goldman-Hodgkin-Katz',
    descripcion: 'Calculadora del potencial de membrana usando la ecuación GHK',
    categoria: 'Fisiología',
    archivo: 'ghk.html'
  },
  {
    id: 'nernst',
    nombre: 'Ecuación de Nernst',
    descripcion: 'Calculadora del potencial de equilibrio usando la ecuación de Nernst',
    categoria: 'Fisiología',
    archivo: 'nernst.html'
  },
  {
    id: 'todo-o-nada',
    nombre: 'Potencial de Acción - Todo o Nada',
    descripcion: 'Simulación del potencial de acción y el principio todo o nada',
    categoria: 'Neurofisiología',
    archivo: 'todo-o-nada.html'
  },
  {
    id: 'vector-desafio',
    nombre: 'Vector',
    descripcion: 'Desafío de simulación de vectores',
    categoria: 'Cardiología',
    archivo: 'vector-desafio.html'
  }
];

export const categorias = Array.from(new Set(simuladores.map(s => s.categoria)));
