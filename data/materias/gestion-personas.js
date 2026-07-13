// =====================================================================
// MATERIA: Gestión de Personas — SOLO preguntas DEMO (4)
// Las preguntas premium ya NO viven aqui: se descargan desde Supabase
// (funcion get_preguntas) solo para dispositivos que canjearon un codigo.
// =====================================================================

window.BANCO.materias.push({
  "id": "gestion-personas",
  "nombre": "Gestión de Personas",
  "preguntas": [
    {
      "id": "gdp-001",
      "tema": "Reclutamiento y selección",
      "dificultad": "facil",
      "salioEnExamen": true,
      "enunciado": "Defina y diferencie los conceptos de reclutamiento y selección de personas. Luego, mencione y explique una (1) ventaja y una (1) desventaja del reclutamiento interno, y una (1) ventaja y una (1) desventaja del reclutamiento externo.",
      "respuestaModelo": "El reclutamiento es el proceso de atraer candidatos potencialmente calificados para ocupar una vacante, generando un pool de postulantes a partir del perfil del cargo y del modelo de personas de la empresa. La selección, en cambio, es el proceso posterior de evaluar y elegir, dentro de ese pool, al candidato que mejor calza con el puesto, con la cultura y con la estrategia de la organización. En síntesis: reclutar es atraer; seleccionar es elegir.\n\nReclutamiento interno (cubrir la vacante con personas de la propia empresa, vía ascensos o movilidad):\n- Ventaja: se conocen las habilidades, competencias y comportamiento del candidato, lo que permite predecir mejor su desempeño; además, ya conoce la cultura y los valores, por lo que su adaptación es más rápida y es fuente de motivación para el resto, pues demuestra que en la empresa se puede crecer (desarrollo de carrera).\n- Desventaja: si el proceso no es transparente puede generar percepción de favoritismo e injusticia, provocando roces internos y desmotivación; además, se limita el ingreso de nuevas ideas y talentos, estancando el inventario de capacidades de la empresa.\n\nReclutamiento externo (atraer talento de fuera mediante portales, consultoras, redes sociales, etc.):\n- Ventaja: aporta nuevas ideas, conocimientos y talentos, ampliando las posibilidades de encontrar al candidato más adecuado y permitiendo aprovechar experiencia y capacitación adquiridas en otras organizaciones.\n- Desventaja: es un proceso más lento y costoso (publicación de ofertas, filtro de CV, entrevistas, pruebas, eventualmente headhunters) y la persona requiere un período de adaptación cultural; también puede desmotivar al personal interno que percibe que no hay posibilidades de ascenso.",
      "criterios": [
        {
          "texto": "Define correctamente reclutamiento (atraer candidatos) y selección (elegir al que mejor calza) y establece la diferencia entre ambos",
          "peso": 3
        },
        {
          "texto": "Menciona y explica una ventaja y una desventaja del reclutamiento interno",
          "peso": 3
        },
        {
          "texto": "Menciona y explica una ventaja y una desventaja del reclutamiento externo",
          "peso": 3
        },
        {
          "texto": "Las explicaciones van más allá de la mención: fundamentan el porqué del efecto (por ejemplo, adaptación cultural más rápida, percepción de favoritismo, costo y lentitud del proceso)",
          "peso": 3
        }
      ],
      "erroresComunes": [
        "Usar reclutamiento y selección como sinónimos: reclutar es atraer candidatos, seleccionar es elegir entre ellos.",
        "Mencionar ventajas y desventajas sin explicarlas; la pauta premia la explicación, no el listado.",
        "Atribuir al reclutamiento interno la ventaja de traer ideas nuevas (eso corresponde al externo)."
      ]
    },
    {
      "id": "gdp-002",
      "tema": "Compensaciones y mantenimiento",
      "dificultad": "facil",
      "salioEnExamen": true,
      "enunciado": "Explique el concepto de compensación total y describa sus tres componentes principales, entregando dos (2) ejemplos concretos para cada uno. Indique además por qué un esquema de compensación total contribuye a la retención del talento.",
      "respuestaModelo": "La compensación total es toda retribución, monetaria o no monetaria, que la empresa entrega a sus colaboradores a cambio de su tiempo, talento, esfuerzo y resultados. Va mucho más allá del sueldo: busca crear una oferta de valor que considere todos los aspectos que las personas valoran.\n\n1) Compensación monetaria directa (la base del sistema, siempre debe existir): pagos en dinero asociados al trabajo y al desempeño. Ejemplos: sueldo base competitivo respecto del mercado y equitativo internamente; bonos por cumplimiento de metas individuales o colectivas; participación en utilidades o stock options.\n\n2) Compensación monetaria indirecta (beneficios): elementos con valor económico que no se pagan como remuneración directa. Ejemplos: seguro de salud complementario y dental; becas o apoyo a la formación; días adicionales de descanso como el día de cumpleaños; bonos de movilización o conectividad.\n\n3) Compensación no monetaria o salario emocional: elementos intangibles que mejoran la calidad de vida y el sentido del trabajo. Ejemplos: trabajo híbrido o flexibilidad horaria; reconocimiento y retroalimentación frecuente; propósito organizacional claro; programas de bienestar y salud mental.\n\nUn esquema de compensación total contribuye a la retención porque atiende simultáneamente las distintas motivaciones de las personas: la equidad externa del sueldo evita la fuga hacia competidores; la equidad interna evita la percepción de injusticia (teoría de la equidad); los bonos refuerzan la meritocracia; y los beneficios y el salario emocional responden al balance vida-trabajo y a la búsqueda de propósito, especialmente valorados por las generaciones más jóvenes, aumentando el compromiso y reduciendo la rotación no deseada.",
      "criterios": [
        {
          "texto": "Define compensación total como retribución monetaria y no monetaria por tiempo, talento, esfuerzo y resultados",
          "peso": 2
        },
        {
          "texto": "Describe la compensación monetaria directa con dos ejemplos válidos (sueldo base, bonos, participación en utilidades)",
          "peso": 2
        },
        {
          "texto": "Describe la compensación monetaria indirecta (beneficios) con dos ejemplos válidos",
          "peso": 2
        },
        {
          "texto": "Describe la compensación no monetaria o salario emocional con dos ejemplos válidos",
          "peso": 2
        },
        {
          "texto": "Explica el vínculo entre compensación total y retención (equidad interna y externa, meritocracia, balance vida-trabajo, propósito)",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Reducir la compensación total solo al sueldo o solo a elementos monetarios; el esquema siempre debe incluir la compensación directa más los otros componentes.",
        "Responder únicamente con flexibilidad y reconocimiento, omitiendo la compensación monetaria directa que es la base del sistema.",
        "Dar ejemplos sin asociarlos al componente correspondiente."
      ]
    },
    {
      "id": "gdp-003",
      "tema": "Cultura y clima organizacional",
      "dificultad": "facil",
      "salioEnExamen": true,
      "enunciado": "Defina cultura organizacional y clima organizacional, y explique tres (3) diferencias entre ambos conceptos. Apoye su definición de cultura describiendo brevemente los tres niveles del modelo de Edgar Schein.",
      "respuestaModelo": "La cultura organizacional es el conjunto de valores, creencias, normas y prácticas compartidas que influyen en el comportamiento de los miembros de la organización; es su forma profunda de ser y hacer las cosas. El clima organizacional, en cambio, es la percepción compartida de los empleados sobre el ambiente de trabajo en un momento determinado: la temperatura del momento, con componentes físicos (condiciones, seguridad), psicológicos (relaciones, apoyo, equidad) y organizacionales (políticas y procedimientos).\n\nSegún Edgar Schein, la cultura tiene tres niveles: (1) Artefactos: lo visible y observable (oficinas, ritos, lenguaje, vestimenta), fácil de ver pero difícil de interpretar; (2) Valores adoptados o declarados: lo que la empresa dice que valora (misión, código de ética, valores publicados); (3) Supuestos básicos: creencias inconscientes que se dan por sentadas y que constituyen el verdadero núcleo de la cultura.\n\nTres diferencias entre cultura y clima:\n1) Profundidad y estabilidad: la cultura es profunda y estable en el tiempo (valores y supuestos); el clima es superficial y cambiante, refleja percepciones del momento.\n2) Medición y gestión: el clima se mide con encuestas periódicas y puede mejorarse relativamente rápido con acciones concretas; cambiar la cultura requiere un proceso estructurado de años, con liderazgo activo.\n3) Naturaleza: la cultura es el conjunto de valores y formas de hacer compartidas (lo que la organización ES); el clima es la percepción de las personas sobre su ambiente de trabajo (cómo se SIENTE trabajar ahí). Una misma cultura puede convivir con climas distintos entre áreas o momentos.",
      "criterios": [
        {
          "texto": "Define correctamente cultura organizacional (valores, creencias, normas y prácticas compartidas)",
          "peso": 2
        },
        {
          "texto": "Define correctamente clima organizacional (percepción compartida del ambiente de trabajo en un momento dado)",
          "peso": 2
        },
        {
          "texto": "Describe los tres niveles de Schein: artefactos, valores declarados y supuestos básicos",
          "peso": 3
        },
        {
          "texto": "Explica tres diferencias válidas entre cultura y clima (profundidad/estabilidad, forma de medición y gestión, naturaleza del concepto)",
          "peso": 3
        }
      ],
      "erroresComunes": [
        "Confundir clima con cultura o usarlos como sinónimos; la cultura es profunda y estable, el clima es la percepción del momento.",
        "Invertir los niveles de Schein o señalar que los supuestos básicos son lo visible.",
        "Enunciar las diferencias sin explicarlas."
      ]
    },
    {
      "id": "gdp-004",
      "tema": "Gestión y evaluación del desempeño",
      "dificultad": "facil",
      "salioEnExamen": true,
      "enunciado": "a) Explique la diferencia entre gestión del desempeño y evaluación del desempeño, describiendo las tres etapas principales de un ciclo de gestión del desempeño.\nb) Mencione y explique dos (2) errores o sesgos frecuentes en que puede incurrir un evaluador al calificar el desempeño de sus colaboradores.",
      "respuestaModelo": "a) La gestión del desempeño es un ciclo continuo (usualmente anual) que busca alinear el aporte de las personas con la estrategia y su mejora continua; la evaluación del desempeño es solo una etapa dentro de ese ciclo: la apreciación sistemática de cómo se desempeña una persona en su puesto. No son lo mismo: la evaluación es un medio dentro de un proceso mayor, no un fin en sí misma.\n\nLas tres etapas del ciclo son:\n1) Planificación: definición de objetivos, metas (idealmente SMART) y competencias asociadas al desempeño individual o colectivo para el período, incluyendo el modelo de evaluación (90°, 180°, 360°) y la comunicación de las expectativas a los evaluados.\n2) Seguimiento: implementación de los planes con mediciones de avance y retroalimentación permanente; se brinda apoyo, se levantan dificultades y se entregan recursos para alcanzar las metas.\n3) Evaluación y retroalimentación: se evalúa el cumplimiento de metas y competencias del período, se retroalimenta al colaborador sobre sus resultados, se reconocen logros (monetarios y no monetarios) y se definen planes de acción y desarrollo para las brechas detectadas, cerrando el ciclo hacia capacitación, compensación y carrera.\n\nb) Errores frecuentes del evaluador (dos entre los siguientes):\n- Efecto halo: una sola cualidad (positiva o negativa) contamina la evaluación de todas las demás dimensiones.\n- Tendencia central: calificar a todos cerca del promedio de la escala, sin diferenciar desempeños.\n- Indulgencia o severidad: evaluar sistemáticamente a todos muy alto o muy bajo.\n- Sesgo de recencia: considerar solo los eventos recientes e ignorar el desempeño de todo el período.\n- Error de similitud: favorecer a quienes se parecen al evaluador o le resultan más simpáticos.\n- Error de contraste: evaluar comparando a un trabajador con otro en vez de contra el estándar del cargo.",
      "criterios": [
        {
          "texto": "a) Distingue gestión del desempeño (ciclo continuo) de evaluación del desempeño (una etapa del ciclo)",
          "peso": 2
        },
        {
          "texto": "a) Describe la etapa de planificación: objetivos, metas SMART, competencias y comunicación de expectativas",
          "peso": 2
        },
        {
          "texto": "a) Describe las etapas de seguimiento con retroalimentación y de evaluación con feedback y planes de desarrollo",
          "peso": 3
        },
        {
          "texto": "b) Menciona y explica correctamente dos errores o sesgos de evaluación (halo, tendencia central, indulgencia/severidad, recencia, similitud, contraste)",
          "peso": 3
        }
      ],
      "erroresComunes": [
        "Confundir gestión del desempeño con evaluación del desempeño: la evaluación es solo una etapa dentro del ciclo de gestión.",
        "Describir la evaluación como un evento aislado sin retroalimentación ni planes de desarrollo posteriores.",
        "Nombrar los sesgos sin explicar en qué consisten."
      ]
    }
  ]
});
