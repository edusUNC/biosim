export interface Simulador {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  archivo: string;
  objetivo?: string;
  instrucciones?: string[];
  requisitos?: string[];
  tiempoEstimado?: string;
}

export const simuladores: Simulador[] = [
  {
    id: 'ecg',
    nombre: 'Simulador ECG',
    descripcion: "Una herramienta interactiva para practicar el cálculo de la frecuencia cardíaca en un trazado de ritmo sinusal. Incluye un modo de corrección para aprender.",
    categoria: "Cardiología",
    archivo: "ecg.html",
    objetivo: "Practicar el cálculo de la frecuencia cardíaca utilizando el método de conteo.",
    instrucciones: [
      "Observa el trazado de 10 segundos.",
      "Calcula la frecuencia cardíaca y escribe tu respuesta.",
      "Presiona 'Verificar' para comprobar tu resultado.",
      "Usa el modo corrección para ver el cálculo exacto si te equivocas."
    ],
    requisitos: [
      "Conocimientos básicos de electrocardiografía.",
      "Saber calcular la frecuencia cardíaca en un ECG."
    ],
    tiempoEstimado: "5-10 minutos"
  },
  {
    id: "competencia-ecg",
    nombre: "Competencia de ECG: ¿Quién es más rápido?",
    descripcion: "Un juego competitivo para múltiples jugadores donde se pone a prueba la velocidad y precisión en el cálculo de la frecuencia cardíaca en 60 segundos.",
    categoria: "Cardiología",
    objetivo: "Desarrollar velocidad y agilidad en el cálculo de la frecuencia cardíaca.",
    archivo: "ecg-competencia.html",
    instrucciones: [
      "Ingresa el número y nombre de los jugadores.",
      "Calcula la FC de cada trazado lo más rápido que puedas.",
      "Acumula la mayor cantidad de aciertos en 60 segundos.",
      "Compite contra tus compañeros para ver quién gana."
    ],
    requisitos: [
      "Rapidez en el cálculo de la frecuencia cardíaca.",
      "Reconocimiento del complejo QRS."
    ],
    tiempoEstimado: "1 minuto por jugador"
  },
  {
    id: 'dipolo',
    nombre: 'Simulador de Dipolo',
    descripcion: 'Modelo interactivo y simplificado para entender el principio básico del electrocardiograma: lo que un electrodo "ve" es la proyección del vector eléctrico del corazón desde su punto de vista.',
    categoria: 'Cardiología',
    objetivo: "Comprender que la forma de una onda en el ECG depende del ángulo desde el cual el electrodo está 'observando' el vector eléctrico del corazón.",
    archivo: 'dipolo.html',
    instrucciones: [
      "Arrastra el electrodo (círculo azul 'E') alrededor del vector central (flecha roja).",
        "Observa cómo el voltímetro cambia en tiempo real. La lectura es máxima (+100) cuando el electrodo está en la punta de la flecha, y mínima (-100) cuando está en la cola.",
        "Coloca el electrodo a 90 grados del vector para ver cómo la lectura se vuelve cero.",
        "Presiona 'Animar Vector' para que la flecha gire y observa cómo cambia la lectura en el voltímetro para una posición fija del electrodo."
    ],
    requisitos: [
      'Conceptos básicos de electricidad',
      'Comprensión de campos eléctricos'
    ],
    tiempoEstimado: '15-20 minutos'
  },
  {
    id: 'automatismo',
    nombre: 'Potencial de Acción del Nódulo Sinusal (SA)',
    descripcion: 'Una animación del potencial del marcapasos natural del corazón, que demuestra su automatismo y cómo es afectado por los niveles de iones extracelulares.',
    categoria: 'Fisiología',
    archivo: 'automatismo.html',
    objetivo:'Entender la base iónica del automatismo cardíaco y cómo alteraciones electrolíticas como la hiperkalemia pueden modificar drásticamente el ritmo y la forma del potencial de acción.',
    instrucciones: [
       "Presiona 'Iniciar' para ver el ciclo animado del potencial de acción.",
        "Ajusta el slider de '[K⁺]out' para simular hiperkalemia. Observa cómo la onda se eleva, se ensancha y el pico se aplana.",
        "Ajusta el slider de '[Na⁺]out' para ver cómo cambia la pendiente de la Fase 4, afectando la frecuencia cardíaca.",
        "Lee la tarjeta de información para entender los flujos iónicos en las Fases 4, 0 y 3."
    ],
    requisitos: [
      'Conocimientos de fisiología cardíaca',
      'Comprensión del sistema de conducción'
    ],
    tiempoEstimado: '15-25 minutos'
  },
  {
    id: 'ghk',
    nombre: 'Ecuación de Goldman-Hodgkin-Katz',
    descripcion: 'Un modelo de tira y afloja que muestra cómo el potencial de membrana en reposo (Vₘ) es un promedio ponderado de los potenciales de Nernst de varios iones, donde la fuerza de cada ión es su permeabilidad relativa.',
    categoria: 'Fisiología',
    objetivo:'Comprender que el potencial de membrana en reposo está determinado principalmente por el ión al que la membrana es más permeable.',
    archivo: 'ghk.html',
    instrucciones: [
      "Observa la escala de voltaje con los potenciales de Nernst (E) de cada ión como 'anclas'.",
        "Ajusta la 'Permeabilidad (P)' de cada ión con su respectivo deslizador.",
        "Mira cómo la línea que conecta el Vₘ (amarillo) con el ancla del ión se hace más gruesa (más 'fuerte').",
        "Nota cómo el Vₘ es 'arrastrado' hacia el potencial del ión con mayor permeabilidad."
    ],
    requisitos: [
      'Conocimientos de fisiología celular',
      'Comprensión de gradientes iónicos'
    ],
    tiempoEstimado: '10-15 minutos'
  },
  {
    id: 'nernst',
    nombre: 'Ecuación de Nernst',
    descripcion: 'Calcula y visualiza el potencial de equilibrio para un único ión, demostrando cómo la diferencia de concentración genera un voltaje que se opone a la difusión',
    categoria: 'Fisiología',
    objetivo:'Entender cómo los gradientes de concentración iónica a través de una membrana crean potenciales eléctricos específicos (potenciales de Nernst).',
    archivo: 'nernst.html',
    instrucciones: [
      "Elige un ión del menú desplegable (K⁺, Na⁺, Cl⁻, Ca²⁺).",
        "Ajusta las concentraciones del ión 'Afuera' y 'Adentro' de la célula usando las barras.",
        "Observa el 'Potencial de Equilibrio (E_ion)' calculado en tiempo real.",
        "Interpreta las flechas de la animación: la 'Fuerza Química' (verde) siempre se opone a la 'Fuerza Eléctrica' (azul), demostrando el equilibrio."
    ],
    requisitos: [
      'Conceptos básicos de electroquímica',
      'Comprensión de potenciales de membrana'
    ],
    tiempoEstimado: '8-12 minutos'
  },
  {
    id: 'todo-o-nada',
    nombre: 'Potencial de Acción - Todo o Nada',
    descripcion: 'Simulador que demuestra el principio fundamental de que un potencial de acción neuronal se dispara con toda su intensidad una vez que se alcanza un umbral, o no se dispara en absoluto',
    categoria: 'Neurofisiología',
    objetivo:'Comprender que la magnitud del potencial de acción es independiente de la intensidad del estímulo que lo genera, siempre que este sea umbral o supraumbral',
    archivo: 'todo-o-nada.html',
    instrucciones: [
      "Desliza la barra para ajustar la 'Intensidad del Estímulo'.",
        "Presiona el botón 'Aplicar Estímulo'.",
        "Observa el gráfico: si el estímulo supera el umbral (-55mV), se genera un potencial de acción completo e idéntico siempre. Si no lo supera, no ocurre nada.",
        "Lee el mensaje de estado para confirmar el resultado."
    ],
    requisitos: [
      'Conocimientos de neurofisiología',
      'Comprensión de potenciales de acción'
    ],
    tiempoEstimado: '12-18 minutos'
  },
  {
    id: 'vector-desafio',
    nombre: 'Vector',
    descripcion: 'Desafío de simulación de vectores',
    categoria: 'Cardiología',
    objetivo: "Comprender la relación entre el eje eléctrico y su proyección en las derivaciones.",
    archivo: 'vector-desafio.html',
    instrucciones: [ "Selecciona el 'Modo Laboratorio' para explorar libremente.",
      "Arrastra el vector cardíaco y observa los cambios en tiempo real en las 6 derivaciones.",
      "Cambia al 'Modo Desafío' para poner a prueba tus conocimientos.",
      "Completa los 20 desafíos cronometrados para dominar el concepto."
    ],
    requisitos: [
      "Comprensión del concepto de eje eléctrico.",
      "Conocimiento del sistema de referencia hexaxial."
    ],
    tiempoEstimado: '15-25 minutos'
  }
];

export const categorias = Array.from(new Set(simuladores.map(s => s.categoria)));
