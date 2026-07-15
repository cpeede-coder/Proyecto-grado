// Módulo de estudio — ESTRATEGIA (flashcards con repaso espaciado)
// Contenido derivado del resumen del ramo y VALIDADO contra fuentes estándar
// (Porter, Barney/VRIO, Prahalad & Hamel, Kim & Mauborgne, Teece, etc.).
// Correcciones aplicadas sobre los apuntes originales:
//   - "Competencia" (en ambientes de colaboración) → término correcto: COOPETICIÓN.
// Formato estricto por tarjeta:
//   { id, unidad, tema, frente, reverso, tip? }
//   frente  = lo que se muestra primero (pregunta / concepto a recordar)
//   reverso = la respuesta ideal, breve y precisa
//   tip     = OPCIONAL: frase de examen o gancho para memorizar
window.ESTUDIO = window.ESTUDIO || {};
window.ESTUDIO.estrategia = {
  materia: "Estrategia",
  nombre: "Estrategia",
  unidades: [
    { id: "U1", titulo: "Concepto de Estrategia" },
    { id: "U2", titulo: "Estrategia Corporativa" },
    { id: "U3", titulo: "Estrategia Competitiva" },
    { id: "U4", titulo: "Estrategia Funcional" },
    { id: "U5", titulo: "Tópicos Modernos" }
  ],
  tarjetas: [
    // ===================== U1 · CONCEPTO DE ESTRATEGIA =====================
    {
      id: "est-fc-001", unidad: "U1", tema: "Definición de estrategia",
      frente: "¿Qué es la estrategia (definición para memorizar)?",
      reverso: "Conjunto de decisiones y acciones de largo plazo que una organización adopta para lograr un desempeño superior y sostenible, creando ventajas competitivas difíciles de imitar, en coherencia con su entorno y sus capacidades internas.",
      tip: "La estrategia implica elegir, renunciar y asignar recursos: \"elegir qué NO hacer\"."
    },
    {
      id: "est-fc-002", unidad: "U1", tema: "Objetivo de la estrategia",
      frente: "¿Cuál es el objetivo central de la estrategia?",
      reverso: "Crear ventaja competitiva, lograr rentabilidad superior y asegurar la sustentabilidad del desempeño en el tiempo. En entornos dinámicos suma adaptabilidad e innovación continua.",
      tip: ""
    },
    {
      id: "est-fc-003", unidad: "U1", tema: "Megatendencias",
      frente: "¿Qué son las megatendencias en la economía globalizada?",
      reverso: "Fuerzas estructurales de largo plazo (disrupción tecnológica, incertidumbre, cambios sociales, sostenibilidad, reconfiguración de la globalización) que transforman los entornos competitivos y obligan a estrategias flexibles, innovadoras y dinámicas.",
      tip: ""
    },
    {
      id: "est-fc-004", unidad: "U1", tema: "VUCA y BANI",
      frente: "¿Qué significan los acrónimos VUCA y BANI?",
      reverso: "VUCA: Volátil, Incierto (Uncertain), Complejo, Ambiguo. BANI: Frágil (Brittle), Ansioso, No-lineal, Incomprensible. Describen entornos cada vez menos predecibles.",
      tip: "Aumentan el riesgo estratégico y la necesidad de flexibilidad."
    },
    {
      id: "est-fc-005", unidad: "U1", tema: "Evolución de la estrategia",
      frente: "Nombra las 5 etapas de la evolución del pensamiento estratégico.",
      reverso: "1) Planificación (60-70). 2) Posicionamiento — Porter, la industria manda (80). 3) Basado en recursos/RBV — la ventaja nace dentro (90). 4) Capacidades dinámicas (2000+). 5) Ventaja competitiva transitoria (hoy).",
      tip: "Hoy la estrategia es dinámica y orientada al aprendizaje, no un plan fijo."
    },
    {
      id: "est-fc-006", unidad: "U1", tema: "Ventaja transitoria",
      frente: "¿Qué plantea el enfoque de la ventaja competitiva transitoria?",
      reverso: "En entornos actuales la ventaja SOSTENIBLE es la excepción, no la regla. Las empresas deben crear, explotar y abandonar ventajas rápidamente.",
      tip: ""
    },
    {
      id: "est-fc-007", unidad: "U1", tema: "Dimensiones de la estrategia",
      frente: "¿Cuáles son las 5 dimensiones de la estrategia?",
      reverso: "Temporal (largo plazo), Competitiva (cómo competir), Organizacional (recursos, estructura, cultura), Económica (creación de valor y rentabilidad) y Dinámica (monitoreo y ajuste constante).",
      tip: ""
    },
    {
      id: "est-fc-008", unidad: "U1", tema: "Niveles de estrategia",
      frente: "¿Cuáles son los tres ámbitos o niveles de la estrategia?",
      reverso: "Corporativa (en QUÉ negocios/mercados participar), Competitiva o de negocio (CÓMO competir en una industria) y Funcional (cómo cada área ejecuta y sostiene la ventaja).",
      tip: "La falta de coherencia entre los tres niveles destruye valor."
    },
    {
      id: "est-fc-009", unidad: "U1", tema: "Estrategia corporativa (rol)",
      frente: "¿Qué define la estrategia corporativa y cuál es su objetivo?",
      reverso: "Define en qué negocios, industrias y mercados participa la empresa (crecimiento, diversificación, integración, internacionalización, F&A). Objetivo: que el valor conjunto de los negocios sea mayor que la suma individual.",
      tip: ""
    },
    {
      id: "est-fc-010", unidad: "U1", tema: "Implicancias estratégicas",
      frente: "¿A qué obligan las megatendencias a las empresas?",
      reverso: "A pensar la estrategia como proceso dinámico, combinar análisis externo e interno, desarrollar capacidades dinámicas y monitorear el entorno de forma continua (\"always-on strategy\").",
      tip: "La ventaja competitiva es cada vez más transitoria."
    },
    {
      id: "est-fc-011", unidad: "U1", tema: "Frases de examen U1",
      frente: "Frase clave: completa — \"La estrategia implica ___ y ___\".",
      reverso: "Elegir y renunciar. Otras: \"No existe estrategia sin ejecución\" y \"La coherencia entre los niveles estratégicos es clave para crear valor\".",
      tip: ""
    },

    // ===================== U2 · ESTRATEGIA CORPORATIVA =====================
    {
      id: "est-fc-012", unidad: "U2", tema: "Misión, visión, objetivos",
      frente: "Diferencia entre misión, visión y objetivos estratégicos.",
      reverso: "Misión: razón de ser (qué hace, para quién y con qué propósito). Visión: estado futuro deseado (qué aspira a ser). Objetivos: metas concretas, medibles y de largo plazo, coherentes con misión y visión.",
      tip: "Visión = hacia dónde crecer; Misión = hasta dónde crecer; Objetivos = cómo y a qué ritmo."
    },
    {
      id: "est-fc-013", unidad: "U2", tema: "Diversificación",
      frente: "¿Qué es la diversificación y sus dos tipos?",
      reverso: "Expansión hacia nuevos productos, mercados o industrias. Relacionada: comparte recursos/capacidades con el negocio original. No relacionada: sin vínculo directo (mayor riesgo).",
      tip: "La relacionada es preferible cuando genera sinergias reales y economías de escala/ámbito."
    },
    {
      id: "est-fc-013b", unidad: "U2", tema: "Economías de escala vs ámbito",
      frente: "Diferencia entre economías de escala y economías de ámbito (alcance).",
      reverso: "Escala: el costo unitario baja al producir MÁS del mismo bien. Ámbito (scope): ahorros por producir bienes DISTINTOS compartiendo recursos/actividades.",
      tip: ""
    },
    {
      id: "est-fc-014", unidad: "U2", tema: "Creación de valor",
      frente: "¿Cuándo el crecimiento y la diversificación crean valor? Fuentes y riesgos.",
      reverso: "Solo crean valor si generan: sinergias operacionales, economías de escala y de ámbito, transferencia de conocimiento/reputación y mayor poder de negociación. Riesgos: costos de coordinación, burocracia, problemas de agencia y deseconomías de escala.",
      tip: "\"El crecimiento solo es estratégico si crea valor.\" Más grande no es mejor; más coherente sí."
    },
    {
      id: "est-fc-015", unidad: "U2", tema: "Estrategia horizontal",
      frente: "¿Qué es una estrategia/integración horizontal?",
      reverso: "Expansión en una MISMA etapa de la cadena de valor (nuevos productos, servicios o mercados en el mismo nivel productivo). Busca participación de mercado, economías de escala y reducir la intensidad competitiva.",
      tip: ""
    },
    {
      id: "est-fc-016", unidad: "U2", tema: "Integración vertical",
      frente: "¿Qué es la integración vertical y sus dos direcciones?",
      reverso: "Internalizar actividades de distintas etapas del proceso productivo. Hacia atrás: control de insumos/proveedores. Hacia adelante: control de distribución/relación con el cliente.",
      tip: "Conviene integrar cuando hay activos específicos, alta incertidumbre y riesgo de oportunismo."
    },
    {
      id: "est-fc-017", unidad: "U2", tema: "Costos de transacción",
      frente: "¿De qué depende la decisión de integrar verticalmente?",
      reverso: "De comparar los costos de transacción del mercado versus los costos internos. No siempre conviene integrar: internalizar da rigidez, menos flexibilidad y altos costos de inversión.",
      tip: "\"La integración solo es eficiente si reduce costos de transacción.\""
    },
    {
      id: "est-fc-018", unidad: "U2", tema: "Internacionalización",
      frente: "¿Cuáles son los modos de entrada a mercados internacionales (de menor a mayor compromiso)?",
      reverso: "Exportaciones → alianzas estratégicas → joint ventures → fusiones y adquisiciones → inversión directa (instalación propia). A mayor compromiso, mayor control pero también mayor riesgo.",
      tip: "\"El modo de entrada determina el nivel de riesgo y control.\""
    },
    {
      id: "est-fc-019", unidad: "U2", tema: "RBV — Enfoque basado en recursos",
      frente: "¿Qué plantea el Enfoque Basado en Recursos (RBV)?",
      reverso: "La ventaja competitiva se origina PRINCIPALMENTE al interior de la empresa (recursos y capacidades), no solo en la estructura de la industria. Las empresas son heterogéneas: no todas tienen los mismos recursos aunque compitan en la misma industria.",
      tip: "\"La ventaja competitiva nace desde dentro de la organización.\""
    },
    {
      id: "est-fc-020", unidad: "U2", tema: "Recursos vs capacidades",
      frente: "Diferencia entre recursos y capacidades.",
      reverso: "Recursos: activos que la empresa controla (tangibles, intangibles, humanos). Capacidades: habilidad para coordinar y combinar recursos de forma eficiente (surgen del uso repetido, la experiencia y la cultura).",
      tip: "Los recursos por sí solos NO garantizan ventaja competitiva."
    },
    {
      id: "est-fc-021", unidad: "U2", tema: "Competencias esenciales",
      frente: "¿Qué son las competencias esenciales (core competencies)?",
      reverso: "Capacidades clave que: permiten acceder a diversos mercados, contribuyen significativamente a la propuesta de valor y son difíciles de imitar. Son base del crecimiento y la diversificación corporativa.",
      tip: ""
    },
    {
      id: "est-fc-022", unidad: "U2", tema: "Modelo VRIO",
      frente: "¿Qué evalúa el modelo VRIO y qué significa cada letra?",
      reverso: "Si un recurso/capacidad es estratégico. V: Valioso (¿aprovecha oportunidades o neutraliza amenazas?). R: Raro (¿escaso?). I: Inimitable (¿difícil o costoso de imitar?). O: Organización (¿la empresa está organizada para explotarlo?).",
      tip: "Solo los recursos que cumplen los CUATRO criterios generan ventaja competitiva sostenible."
    },
    {
      id: "est-fc-023", unidad: "U2", tema: "Riesgos del RBV",
      frente: "¿Cuáles son los riesgos del enfoque basado en recursos?",
      reverso: "Rigidez estratégica (no soltar recursos obsoletos), miopía interna (ignorar el entorno externo) y compromisos estratégicos que se vuelven desventajas. Por eso el RBV debe complementarse con análisis del entorno.",
      tip: ""
    },
    {
      id: "est-fc-024", unidad: "U2", tema: "Triángulo corporativo",
      frente: "¿Cuáles son los tres vértices del Triángulo Corporativo?",
      reverso: "1) Atractivo de la industria, 2) Ventaja competitiva de la empresa y 3) Sinergias corporativas. Una estrategia corporativa crea valor solo si los tres vértices se refuerzan mutuamente; si uno falla, se destruye valor.",
      tip: ""
    },
    {
      id: "est-fc-025", unidad: "U2", tema: "Fusiones vs Adquisiciones",
      frente: "Diferencia entre fusión y adquisición.",
      reverso: "Fusión: dos o más empresas se combinan en una nueva entidad; las originales dejan de existir por separado. Adquisición: una empresa compra el control de otra, que puede seguir existiendo legalmente.",
      tip: "El objetivo es que el valor conjunto sea mayor que la suma individual."
    },
    {
      id: "est-fc-026", unidad: "U2", tema: "Fallas de las F&A",
      frente: "¿Dónde fallan principalmente las fusiones y adquisiciones?",
      reverso: "En el proceso de INTEGRACIÓN. Riesgos: sobreestimación de sinergias, choques culturales, problemas de coordinación, costos de agencia y falta de alineación estratégica.",
      tip: "\"El crecimiento externo (F&A) no garantiza creación de valor.\""
    },
    {
      id: "est-fc-027", unidad: "U2", tema: "F&A vs Alianzas",
      frente: "Compara F&A vs Alianzas estratégicas en control, riesgo, flexibilidad e inversión.",
      reverso: "F&A: control ALTO, riesgo ALTO, flexibilidad BAJA, inversión ALTA, integración compleja. Alianzas: control COMPARTIDO, riesgo MODERADO, flexibilidad ALTA, inversión MENOR, integración parcial.",
      tip: "No son sustitutos, sino alternativas según el contexto."
    },
    {
      id: "est-fc-028", unidad: "U2", tema: "Alianzas y joint ventures",
      frente: "¿Qué es una alianza estratégica y qué es un joint venture?",
      reverso: "Alianza: acuerdo de cooperación donde las empresas comparten recursos manteniendo su independencia legal. Joint venture: tipo de alianza donde se CREA una nueva empresa, mientras las matrices siguen existiendo por separado.",
      tip: "\"Las alianzas permiten aprender con menor compromiso de recursos.\""
    },
    {
      id: "est-fc-029", unidad: "U2", tema: "Frases de examen U2",
      frente: "Frase clave: \"La diversificación debe estar alineada con ___\".",
      reverso: "…con la misión y las capacidades de la firma. La diversificación es un MEDIO, no un fin: el crecimiento sin coherencia estratégica destruye valor.",
      tip: ""
    },

    // ===================== U3 · ESTRATEGIA COMPETITIVA =====================
    {
      id: "est-fc-030", unidad: "U3", tema: "Estrategia competitiva",
      frente: "¿Qué es la estrategia competitiva y en qué se diferencia de la corporativa?",
      reverso: "Es CÓMO una unidad de negocio compite dentro de una industria específica para lograr una posición favorable frente a sus rivales. Se enfoca en una sola industria/mercado; la corporativa decide en qué negocios participar.",
      tip: ""
    },
    {
      id: "est-fc-031", unidad: "U3", tema: "Definición de industria",
      frente: "¿Qué es una industria y por qué importa definirla bien?",
      reverso: "Conjunto de empresas que ofrecen productos o servicios sustitutos cercanos entre sí. Definirla bien determina quiénes son los competidores, el análisis de rentabilidad y la elección de estrategia.",
      tip: "\"Definir mal la industria es competir a ciegas.\" Ni muy estrecha ni muy amplia."
    },
    {
      id: "est-fc-032", unidad: "U3", tema: "PESTLE",
      frente: "¿Qué analiza el PESTLE y qué representa cada letra?",
      reverso: "El MACROentorno (factores generales no controlables): Político, Económico, Social, Tecnológico, Legal y Ambiental (Environmental).",
      tip: "No son controlables, pero influyen directamente en la estrategia."
    },
    {
      id: "est-fc-033", unidad: "U3", tema: "Micro vs macroentorno",
      frente: "¿Qué compone el microentorno (entorno industrial)?",
      reverso: "Los actores que interactúan directamente con la empresa: competidores actuales, proveedores, clientes, sustitutos, nuevos entrantes y complementadores. Determina la intensidad competitiva y la rentabilidad potencial.",
      tip: ""
    },
    {
      id: "est-fc-034", unidad: "U3", tema: "5 Fuerzas de Porter",
      frente: "Nombra las 5 Fuerzas Competitivas de Porter.",
      reverso: "1) Rivalidad entre competidores. 2) Amenaza de nuevos entrantes. 3) Poder de negociación de proveedores. 4) Poder de negociación de clientes. 5) Amenaza de productos sustitutos.",
      tip: "Sirven para evaluar el ATRACTIVO (rentabilidad potencial) de una industria."
    },
    {
      id: "est-fc-035", unidad: "U3", tema: "Rivalidad",
      frente: "¿Qué factores INTENSIFICAN la rivalidad entre competidores?",
      reverso: "Muchos competidores, bajo crecimiento del mercado, productos poco diferenciados, altos costos fijos y altas barreras de salida.",
      tip: "Alta rivalidad reduce la rentabilidad de la industria."
    },
    {
      id: "est-fc-036", unidad: "U3", tema: "Barreras de entrada",
      frente: "¿Qué barreras reducen la amenaza de nuevos entrantes?",
      reverso: "Economías de escala, diferenciación de productos, requerimientos de capital, acceso a canales de distribución y regulaciones gubernamentales.",
      tip: "\"Las barreras de entrada protegen la rentabilidad.\""
    },
    {
      id: "est-fc-037", unidad: "U3", tema: "Poder de proveedores/clientes",
      frente: "¿Cuándo aumenta el poder de negociación de los clientes?",
      reverso: "Cuando compran grandes volúmenes, existen muchos sustitutos, los productos están poco diferenciados y los costos de cambio son bajos. Alto poder de clientes presiona los márgenes.",
      tip: "El poder de proveedores sube si son pocos, sin sustitutos, o pueden integrarse hacia adelante."
    },
    {
      id: "est-fc-038", unidad: "U3", tema: "Sexta fuerza",
      frente: "¿Cuál es la 6ª fuerza competitiva y qué son?",
      reverso: "Los complementadores: empresas cuyos productos aumentan el valor del producto principal cuando se consumen juntos (ej. hardware+software, smartphones+apps). No compiten directamente, pero influyen en la rentabilidad.",
      tip: "\"No todos los actores del entorno son competidores.\""
    },
    {
      id: "est-fc-039", unidad: "U3", tema: "Coopetición",
      frente: "¿Qué es la coopetición (ambientes de colaboración)?",
      reverso: "Cuando las empresas compiten y cooperan simultáneamente, incluso con rivales, para crear mayor valor (alianzas, joint ventures, estándares compartidos, plataformas). Permite compartir riesgos y acelerar la innovación.",
      tip: "Corrige el apunte: el concepto es \"coopetición\", no solo \"competencia\"."
    },
    {
      id: "est-fc-040", unidad: "U3", tema: "Posicionamiento estratégico",
      frente: "¿Qué es el posicionamiento estratégico?",
      reverso: "Cómo la empresa decide competir en una industria y qué lugar ocupa en la mente del cliente frente a rivales. Se basa en elecciones conscientes, implica renuncias, debe ser difícil de imitar y consistente en el tiempo.",
      tip: "No se trata de ser mejor en TODO, sino de ser DISTINTO."
    },
    {
      id: "est-fc-041", unidad: "U3", tema: "Ventaja competitiva",
      frente: "¿Cuándo existe ventaja competitiva y de qué dos formas se logra?",
      reverso: "Cuando la empresa genera más valor económico que sus competidores: ofreciendo MENORES COSTOS o entregando MAYOR VALOR PERCIBIDO al cliente. Se valida en el mercado.",
      tip: ""
    },
    {
      id: "est-fc-042", unidad: "U3", tema: "Estrategias genéricas",
      frente: "¿Cuáles son las tres estrategias genéricas de Porter?",
      reverso: "1) Liderazgo en costos (producir más barato: eficiencia, escala, control de gastos). 2) Diferenciación (atributos únicos valorados: marca, calidad, diseño, innovación, servicio). 3) Enfoque/segmentación (atender mejor un segmento específico).",
      tip: ""
    },
    {
      id: "est-fc-043", unidad: "U3", tema: "Atrapado en el medio",
      frente: "¿Qué significa quedar \"atrapado en el medio\" (stuck in the middle)?",
      reverso: "Cuando la empresa no logra ser líder en costos NI diferenciarse claramente. Consecuencia: bajo desempeño y pérdida de identidad estratégica.",
      tip: ""
    },
    {
      id: "est-fc-044", unidad: "U3", tema: "Grupos estratégicos",
      frente: "¿Qué son los grupos estratégicos?",
      reverso: "Conjuntos de empresas dentro de una misma industria que siguen estrategias similares. Compiten más intensamente ENTRE ELLAS que con empresas de otros grupos.",
      tip: "Variables: precio, diferenciación, alcance geográfico, integración vertical, canales, calidad."
    },
    {
      id: "est-fc-045", unidad: "U3", tema: "Barreras de movilidad",
      frente: "¿Qué son las barreras de movilidad y qué explican?",
      reverso: "Obstáculos que dificultan que una empresa cambie de grupo estratégico (inversiones específicas, imagen de marca, economías de escala, capacidades). Explican por qué la competencia es menor entre grupos y por qué se mantienen estables.",
      tip: "\"La competencia es más intensa DENTRO del grupo estratégico.\""
    },

    // ===================== U4 · ESTRATEGIA FUNCIONAL =====================
    {
      id: "est-fc-046", unidad: "U4", tema: "Valor económico",
      frente: "¿Cómo se define el valor económico?",
      reverso: "Valor económico = disposición a pagar del cliente − costo de la empresa. La estrategia funcional busca MAXIMIZAR esa diferencia.",
      tip: "\"El valor se crea cuando el cliente percibe beneficios superiores al costo.\""
    },
    {
      id: "est-fc-047", unidad: "U4", tema: "Eficiencia vs eficacia",
      frente: "Diferencia entre eficiencia y eficacia.",
      reverso: "Eficiencia: hacer las cosas BIEN (al menor costo). Eficacia: hacer las cosas CORRECTAS (alineadas a la estrategia). La creación de valor exige ambas.",
      tip: ""
    },
    {
      id: "est-fc-048", unidad: "U4", tema: "Cadena de valor",
      frente: "¿Qué es la Cadena de Valor de Porter y para qué sirve?",
      reverso: "Herramienta de análisis INTERNO que descompone la empresa en actividades que crean valor, para identificar fuentes de ventaja competitiva, actividades que generan más valor y costos innecesarios.",
      tip: "La empresa no crea valor como un todo, sino a través de actividades interrelacionadas."
    },
    {
      id: "est-fc-049", unidad: "U4", tema: "Actividades primarias",
      frente: "¿Cuáles son las 5 actividades PRIMARIAS de la cadena de valor?",
      reverso: "Logística interna, Operaciones, Logística externa, Marketing y ventas, y Servicio (postventa). Son las directamente relacionadas con crear, vender y entregar el producto.",
      tip: ""
    },
    {
      id: "est-fc-050", unidad: "U4", tema: "Actividades de apoyo",
      frente: "¿Cuáles son las 4 actividades de APOYO de la cadena de valor?",
      reverso: "Infraestructura de la empresa, Gestión de recursos humanos, Desarrollo tecnológico y Abastecimiento (compras). Permiten que las primarias se ejecuten eficientemente.",
      tip: ""
    },
    {
      id: "est-fc-051", unidad: "U4", tema: "Sistema de actividades",
      frente: "¿Qué es el encaje estratégico (sistema de actividades)?",
      reverso: "La ventaja competitiva surge del ENCAJE entre actividades que se refuerzan mutuamente y son difíciles de imitar en conjunto. No basta declarar una estrategia: debe materializarse en un sistema coherente de actividades.",
      tip: "\"Imitar no es copiar una actividad, sino todo el sistema.\""
    },
    {
      id: "est-fc-052", unidad: "U4", tema: "Ventaja sostenible — fuentes",
      frente: "¿Cuáles son las principales fuentes de sustentabilidad de la ventaja competitiva?",
      reverso: "Sistema de actividades coherente, trade-offs (renuncias) claros, recursos y capacidades difíciles de imitar, barreras a la imitación (escala, costos hundidos, ambigüedad causal) e innovación/adaptación continua.",
      tip: "\"Sin trade-offs no hay estrategia (ni sustentabilidad).\""
    },
    {
      id: "est-fc-053", unidad: "U4", tema: "Ambigüedad causal",
      frente: "¿Qué es la ambigüedad causal como barrera a la imitación?",
      reverso: "Cuando los competidores no logran identificar exactamente cuál es la fuente de la ventaja de una empresa, por lo que no pueden copiarla. Refuerza la sostenibilidad de la ventaja.",
      tip: ""
    },
    {
      id: "est-fc-054", unidad: "U4", tema: "Ventaja temporal vs sostenible",
      frente: "Diferencia entre ventaja competitiva temporal y sostenible.",
      reverso: "Temporal: surge rápido pero puede ser imitada. Sostenible: se mantiene gracias a barreras estratégicas. En entornos dinámicos, la sostenibilidad depende de la capacidad de adaptación.",
      tip: "\"La ventaja sostenible no se copia, se construye.\""
    },

    // ===================== U5 · TÓPICOS MODERNOS =====================
    {
      id: "est-fc-055", unidad: "U5", tema: "Innovación disruptiva",
      frente: "¿Qué analiza la innovación disruptiva?",
      reverso: "Cómo nuevas tecnologías o modelos de negocio desplazan a empresas establecidas, crean nuevos mercados y cambian las reglas competitivas. Permite anticipar amenazas y oportunidades.",
      tip: ""
    },
    {
      id: "est-fc-056", unidad: "U5", tema: "Océanos azules",
      frente: "¿Qué busca la Estrategia de Océanos Azules?",
      reverso: "Crear espacios de mercado NO disputados (nueva demanda) en vez de competir en mercados saturados. Innova en valor: se diferencia y reduce costos SIMULTÁNEAMENTE.",
      tip: "\"Competir ya no basta: hay que reinventar el mercado.\""
    },
    {
      id: "est-fc-057", unidad: "U5", tema: "Capacidades dinámicas",
      frente: "¿Qué son las capacidades dinámicas?",
      reverso: "La habilidad de la empresa para integrar, construir y reconfigurar recursos y competencias frente a entornos cambiantes. Clave para competir cuando el entorno se transforma rápido.",
      tip: ""
    },
    {
      id: "est-fc-058", unidad: "U5", tema: "Design thinking",
      frente: "¿Qué aporta el Design Thinking a la estrategia?",
      reverso: "Metodología centrada en la comprensión profunda del usuario, la experimentación y el prototipado rápido. Favorece la innovación estratégica.",
      tip: ""
    },
    {
      id: "est-fc-059", unidad: "U5", tema: "Plataformas y ecosistemas",
      frente: "¿Qué plantea la estrategia basada en plataformas y ecosistemas?",
      reverso: "La ventaja surge del ECOSISTEMA (redes de valor, complementadores, interacciones entre actores), no solo de la empresa aislada.",
      tip: ""
    },
    {
      id: "est-fc-060", unidad: "U5", tema: "Valor compartido",
      frente: "¿Qué es la creación de valor compartido?",
      reverso: "Generar simultáneamente beneficios económicos para la empresa y beneficios sociales/ambientales para la sociedad. No son objetivos opuestos, sino interdependientes.",
      tip: "\"Crear valor compartido es una fuente de sustentabilidad.\""
    },
    {
      id: "est-fc-061", unidad: "U5", tema: "Sustentabilidad triple",
      frente: "¿Qué tres dimensiones integra el marco de sustentabilidad estratégica?",
      reverso: "Económica (rentabilidad, eficiencia, crecimiento), Social (stakeholders, condiciones laborales, comunidad) y Ambiental (uso eficiente de recursos, reducción de impactos). Deben ser coherentes y complementarias.",
      tip: "\"No hay ventaja competitiva sin legitimidad social.\""
    },
    {
      id: "est-fc-062", unidad: "U5", tema: "Enfoque en stakeholders",
      frente: "¿Qué implica el enfoque en stakeholders?",
      reverso: "Considerar a clientes, trabajadores, proveedores, comunidad, Estado y medio ambiente. El éxito estratégico se mide por la legitimidad social, no solo por utilidades.",
      tip: ""
    }
  ]
};
