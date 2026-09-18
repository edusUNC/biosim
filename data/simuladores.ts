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
  },
  {
    id: "simulador-via-optica",
    nombre: "Simulador de Lesiones en la Vía Óptica",
    descripcion: "Simulador interactivo que muestra los defectos del campo visual producidos por lesiones en nueve puntos de la vía óptica, desde el nervio óptico hasta la corteza occipital, con el campo binocular superpuesto y una escena que muestra lo que percibe el paciente.",
    categoria: "Neurofisiología",
    objetivo: "Identificar y correlacionar la ubicación de una lesión neuroanatómica con el patrón de pérdida del campo visual resultante (hemianopsia, cuadrantanopsia, escotoma juncional) y su repercusión en la visión binocular.",
    archivo: "simulador-via-optica.html",
    instrucciones: [
      "Elegí una lesión en el riel de chips o haciendo clic en los puntos numerados del diagrama (también podés usar las teclas 1–9; 0 restablece). Pasá el cursor por un punto para previsualizar el defecto.",
      "Seguí el pulso de la señal: viaja del campo a la retina y por las fibras, y se apaga en el punto del corte.",
      "Compará la campimetría de cada ojo con el campo binocular superpuesto. Activá la vista 'Escena' para ver cómo percibe el paciente una escena real.",
      "Leé en la ficha el nombre del defecto, el nivel de la lesión, el DPAR y las causas típicas.",
      "Con 'Ver en 3D' recorré la vía en tres dimensiones y mirá la escena desde los ojos del paciente; también podés elegir la lesión haciendo clic en los números.",
      "En el modo Examen, resolvé casos clínicos: mirá el defecto y elegí la lesión que lo explica."
    ],
    requisitos: [
      "Conocimiento básico de la anatomía del sistema nervioso central.",
      "Comprensión del concepto de campo visual y proyección retiniana."
    ],
    tiempoEstimado: "10–20 minutos"
  },
  {
    id: 'dipolo4',
    nombre: 'Dinámica del Dipolo y el Electrodo',
    descripcion: 'Animación de una onda de despolarización atravesando tejido cardíaco, con galvanómetro y trazado ECG en tiempo real según la posición del electrodo explorador.',
    categoria: 'Cardiología',
    objetivo: 'Comprender cómo el ángulo entre el vector de despolarización y el electrodo determina si la deflexión es positiva, negativa o isodifásica.',
    archivo: 'dipolo4.html',
    instrucciones: [
      "Observa el tejido cardíaco mientras la onda de despolarización avanza y genera el trazado ECG.",
      "Mueve el deslizador de posición del electrodo y compara la lectura del galvanómetro con la forma de la onda.",
      "Usa los presets 'Máximo Positivo', 'Isodifásico' y 'Máximo Negativo' para fijar posiciones clave.",
      "Lee la explicación en vivo para relacionar el ángulo del electrodo con el signo de la deflexión."
    ],
    requisitos: [
      'Concepto básico de dipolo eléctrico',
      'Nociones de electrocardiografía'
    ],
    tiempoEstimado: '10-15 minutos'
  },
  {
    id: 'simulador-ecg',
    nombre: 'Simulador ECG — Teoría del dipolo',
    descripcion: 'Simulador de electrocardiografía básica con 12 derivaciones. Un vector de despolarización rota en el corazón y cada derivación lo proyecta desde un ángulo distinto en los planos frontal y horizontal.',
    categoria: 'Cardiología',
    objetivo: 'Relacionar el ángulo del vector cardíaco con la polaridad y amplitud de las ondas en las derivaciones de miembros y precordiales.',
    archivo: 'simulador-ecg.html',
    instrucciones: [
      "En modo automático, reproduce el ciclo cardíaco y ajusta la frecuencia con el deslizador.",
      "Selecciona una derivación para inspeccionarla en el trazado principal y en la grilla de 12 derivaciones.",
      "Cambia a modo vector manual y arrastra la punta del vector en el plano frontal y en el horizontal.",
      "Compara cómo se acercan o alejan las derivaciones del vector y si la onda resulta positiva o negativa."
    ],
    requisitos: [
      'Sistema de referencia hexaxial',
      'Derivaciones de miembros y precordiales'
    ],
    tiempoEstimado: '15-25 minutos'
  },
  {
    id: 'simulador-pv-ecg',
    nombre: 'Simulador ECG — Bucle presión-volumen',
    descripcion: 'El mismo ciclo cardíaco visto de dos formas: la señal eléctrica (ECG) y el trabajo mecánico del ventrículo izquierdo (bucle P-V), con controles de precarga, poscarga, contractilidad y rigidez.',
    categoria: 'Cardiología',
    objetivo: 'Correlacionar cambios hemodinámicos (precarga, poscarga, contractilidad) con la deformación del bucle P-V, la fracción de eyección y el ECG.',
    archivo: 'simulador-pv-ecg2.html',
    instrucciones: [
      "Reproduce o pausa el ciclo y observa el ECG junto al bucle presión-volumen.",
      "Ajusta precarga (volumen diastólico final), contractilidad (Emax), poscarga y rigidez diastólica.",
      "Cambia la frecuencia cardíaca y observa el gasto cardíaco y la fracción de eyección.",
      "Relaciona cada cambio de parámetro con la forma del bucle y las estadísticas del panel."
    ],
    requisitos: [
      'Ciclo cardíaco y bucle presión-volumen',
      'Conceptos de precarga, poscarga y contractilidad'
    ],
    tiempoEstimado: '15-25 minutos'
  },
  {
    id: 'frank-starling',
    nombre: 'Mecanismo de Frank-Starling',
    descripcion: 'Demostración visual de cómo el estiramiento del corazón determina su fuerza de contracción, desde el solapamiento de actina-miosina hasta el volumen sistólico y el gasto cardíaco.',
    categoria: 'Cardiología',
    objetivo: 'Entender la ley de Frank-Starling: a mayor precarga (llenado ventricular), mayor fuerza contráctil y mayor volumen sistólico, dentro de un rango fisiológico.',
    archivo: 'frank-starling.html',
    instrucciones: [
      "Mueve el deslizador de precarga / llenado ventricular.",
      "Observa cómo cambian la fuerza contráctil, el volumen sistólico y el gasto cardíaco.",
      "Compara la animación del corazón (nivel macroscópico) con el diagrama del sarcómero (nivel microscópico).",
      "Revisa el gráfico de rendimiento y la explicación de la ley de Frank-Starling."
    ],
    requisitos: [
      'Fisiología cardíaca básica',
      'Concepto de precarga y volumen sistólico'
    ],
    tiempoEstimado: '10-15 minutos'
  },
  {
    id: 'no-linear',
    nombre: 'Fisiología cardíaca no lineal',
    descripcion: 'Simulador que combina la curva de gasto cardíaco frente a frecuencia cardíaca con el bucle presión-volumen, mostrando por qué “más rápido” no siempre implica mejor rendimiento.',
    categoria: 'Cardiología',
    objetivo: 'Comprender la relación no lineal entre frecuencia cardíaca, volumen sistólico y gasto cardíaco, y cómo el acortamiento de la diástole reduce el llenado y el trabajo por latido.',
    archivo: 'no-linear.html',
    instrucciones: [
      "Ajusta la edad y la frecuencia cardíaca con los deslizadores.",
      "Observa el gráfico de gasto cardíaco: sube hasta un óptimo y luego cae.",
      "Mira el bucle P-V a la derecha: al subir la FC se estrecha (menor volumen sistólico y trabajo por latido).",
      "Compara los valores de gasto cardíaco, trabajo por latido y trabajo por minuto."
    ],
    requisitos: [
      'Gasto cardíaco = FC × volumen sistólico',
      'Nociones de bucle presión-volumen'
    ],
    tiempoEstimado: '10-20 minutos'
  },
  {
    id: 'resistencia',
    nombre: 'Flujo vascular fisiológico',
    descripcion: 'Explora cómo la presión de perfusión y las resistencias de distintos lechos vasculares (en serie y en paralelo) determinan la distribución del gasto cardíaco.',
    categoria: 'Cardiología',
    objetivo: 'Aplicar la relación flujo = ΔP / R y entender el efecto de resistencias en paralelo sobre la resistencia total y el flujo a cada órgano.',
    archivo: 'resistencia.html',
    instrucciones: [
      "Ajusta la presión de perfusión y las resistencias arterial y venosa globales.",
      "Modifica las resistencias orgánicas en paralelo (cerebro, riñón, etc.).",
      "Observa cómo cambia el flujo total y la distribución entre lechos.",
      "Relaciona un aumento local de resistencia con la caída del flujo a ese órgano."
    ],
    requisitos: [
      'Ley de Ohm aplicada a hemodinamia',
      'Resistencias en serie y en paralelo'
    ],
    tiempoEstimado: '10-15 minutos'
  },
  {
    id: 'equilibrio',
    nombre: 'Equilibrio humano — Péndulo invertido',
    descripcion: 'Modelo biomecánico de postura erguida como péndulo invertido con límites fisiológicos: control PD, retardo, saturación muscular y umbrales de caída.',
    categoria: 'Fisiología',
    objetivo: 'Explorar cómo la ganancia del control, el retardo sensorial y la saturación del torque muscular afectan la estabilidad postural y el riesgo de caída.',
    archivo: 'equilibrio.html',
    instrucciones: [
      "Prueba los presets (estable, sub-amortiguado, retardo alto, saturación muscular, gravedad lunar, niño, adulto alto).",
      "Ajusta altura, masa, ganancias del controlador y límites de torque.",
      "Observa el ángulo, la velocidad y si el modelo cruza el umbral de caída.",
      "Compara cómo el retardo o la saturación desestabilizan un sistema que antes era estable."
    ],
    requisitos: [
      'Nociones de control y realimentación',
      'Conceptos básicos de biomecánica postural'
    ],
    tiempoEstimado: '10-20 minutos'
  }
];

export const categorias = Array.from(new Set(simuladores.map(s => s.categoria)));
