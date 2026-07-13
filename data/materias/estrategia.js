// =====================================================================
// MATERIA: Estrategia — SOLO preguntas DEMO (4)
// Las preguntas premium ya NO viven aqui: se descargan desde Supabase
// (funcion get_preguntas) solo para dispositivos que canjearon un codigo.
// =====================================================================

window.BANCO.materias.push({
  "id": "estrategia",
  "nombre": "Estrategia",
  "preguntas": [
    {
      "id": "est-001",
      "tema": "U2. Visión, misión y objetivos estratégicos",
      "dificultad": "facil",
      "enunciado": "Defina los conceptos de misión, visión y objetivos estratégicos de una firma, explicando la función estratégica que cumple cada uno. Luego, explique cómo estos tres elementos se relacionan con las decisiones de crecimiento y diversificación de la empresa.",
      "respuestaModelo": "La misión define la razón de ser de la empresa: qué hace, para quién lo hace y con qué propósito. Su función estratégica es orientar las decisiones corporativas, dar coherencia al crecimiento y la diversificación, y delimitar el marco de actuación de la firma.\n\nLa visión expresa el estado futuro deseado de la organización, aquello que aspira a ser en el largo plazo. Su función estratégica es proporcionar dirección, motivar y alinear a la organización, y guiar las decisiones de expansión y transformación.\n\nLos objetivos estratégicos son metas concretas, medibles y de largo plazo, coherentes con la misión y la visión. Están orientados a la creación de valor y guían la asignación de recursos.\n\nEn cuanto a su relación con el crecimiento y la diversificación: la visión define hacia dónde crecer, la misión delimita hasta dónde crecer, y los objetivos estratégicos determinan cómo y a qué ritmo crecer. La diversificación es un medio, no un fin en sí mismo: el crecimiento sin coherencia estratégica destruye valor. Por ello, toda decisión de expansión debe estar alineada con estos tres elementos.",
      "criterios": [
        {
          "texto": "Define correctamente la misión (razón de ser: qué hace, para quién y con qué propósito) y su función estratégica",
          "peso": 2
        },
        {
          "texto": "Define correctamente la visión (estado futuro deseado de largo plazo) y su función estratégica",
          "peso": 2
        },
        {
          "texto": "Define los objetivos estratégicos como metas concretas, medibles y de largo plazo, coherentes con misión y visión",
          "peso": 1
        },
        {
          "texto": "Explica la relación con crecimiento y diversificación (la visión orienta hacia dónde crecer, la misión delimita, los objetivos determinan cómo y a qué ritmo)",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Confundir misión con visión (definir la misión como aspiración futura y la visión como propósito actual)",
        "Definir objetivos estratégicos como metas operativas de corto plazo",
        "No conectar los tres conceptos con las decisiones de crecimiento, quedándose solo en las definiciones"
      ]
    },
    {
      "id": "est-002",
      "tema": "U1. Concepto de estrategia, dimensiones y niveles",
      "dificultad": "facil",
      "enunciado": "Defina el concepto de estrategia empresarial y explique los tres niveles (o ámbitos de acción) en que esta opera: corporativo, competitivo (o de negocio) y funcional, indicando la pregunta clave que responde cada nivel y un ejemplo de decisión propia de cada uno. Finalmente, explique por qué la coherencia entre los tres niveles es clave para crear valor.",
      "respuestaModelo": "La estrategia es el conjunto de decisiones y acciones de largo plazo que una organización adopta para alcanzar un desempeño superior y sostenible, creando ventajas competitivas difíciles de imitar, en coherencia con su entorno y sus capacidades internas. Implica elecciones, renuncias y asignación de recursos.\n\nLos tres niveles son:\n\n1) Estrategia corporativa: responde a la pregunta 'dónde competir'. Define en qué negocios, industrias o mercados participa la empresa. Incluye decisiones de crecimiento, diversificación, integración vertical y horizontal, internacionalización, fusiones, adquisiciones y alianzas. Ejemplo: una empresa de bebidas que decide entrar a la industria de snacks saludables.\n\n2) Estrategia competitiva o de negocio: responde a 'cómo competir' en una industria específica. Incluye el posicionamiento estratégico, la elección de la ventaja competitiva (costos o diferenciación) y las estrategias genéricas. Ejemplo: competir en la industria del retail mediante liderazgo en costos.\n\n3) Estrategia funcional: responde a 'con qué medios competir'. Define cómo cada área (operaciones, marketing, finanzas, RR.HH., tecnología) contribuye a la ventaja competitiva, alineando la cadena de valor con la estrategia competitiva. Ejemplo: una política de operaciones de procesos estandarizados para sostener el liderazgo en costos.\n\nLa coherencia entre niveles es clave porque la estrategia corporativa define el marco general, la competitiva determina el posicionamiento y la funcional permite ejecutar y sostener la ventaja. La falta de coherencia entre estos niveles destruye valor: no existe estrategia sin ejecución.",
      "criterios": [
        {
          "texto": "Define estrategia como decisiones de largo plazo para lograr desempeño superior y ventaja competitiva difícil de imitar, con elecciones y renuncias",
          "peso": 2
        },
        {
          "texto": "Explica el nivel corporativo (dónde competir) con un ejemplo de decisión pertinente",
          "peso": 1
        },
        {
          "texto": "Explica el nivel competitivo o de negocio (cómo competir) con un ejemplo pertinente",
          "peso": 1
        },
        {
          "texto": "Explica el nivel funcional (con qué medios competir) con un ejemplo pertinente",
          "peso": 1
        },
        {
          "texto": "Argumenta que la falta de coherencia entre niveles destruye valor (el corporativo define el marco, el competitivo el posicionamiento y el funcional la ejecución)",
          "peso": 1
        }
      ],
      "erroresComunes": [
        "Confundir la estrategia competitiva (cómo competir en una industria) con la corporativa (en qué industrias participar)",
        "Definir estrategia como un plan operativo de corto plazo, omitiendo la ventaja competitiva y las renuncias"
      ]
    },
    {
      "id": "est-003",
      "tema": "U3. Modelo de las 5 Fuerzas Competitivas de Porter",
      "dificultad": "facil",
      "salioEnExamen": true,
      "enunciado": "Explique el objetivo del Modelo de Análisis Estructural de la Industria (5 Fuerzas de Porter) y describa cada una de las cinco fuerzas, indicando para cada una al menos un factor que la intensifica. Señale, además, cuál es la unidad de análisis correcta del modelo y una limitación de este.",
      "respuestaModelo": "El Modelo de las 5 Fuerzas de Porter permite analizar la estructura de una industria para determinar su rentabilidad potencial (atractivo) y la intensidad de la competencia. Su premisa es que la rentabilidad no depende solo de la competencia directa, sino del conjunto de fuerzas que actúan sobre la industria.\n\n1) Rivalidad entre competidores existentes: mide la intensidad de la competencia directa. Se intensifica con alto número de competidores, bajo crecimiento del mercado, productos poco diferenciados, altos costos fijos y barreras de salida elevadas.\n\n2) Amenaza de nuevos entrantes: evalúa la facilidad con que nuevas empresas pueden ingresar. Depende de las barreras de entrada: economías de escala, diferenciación, requerimientos de capital, acceso a canales de distribución y regulaciones. Mientras más altas las barreras, menor la amenaza.\n\n3) Poder de negociación de los proveedores: capacidad de los proveedores para influir en precios y condiciones. Aumenta cuando existen pocos proveedores, no hay sustitutos de los insumos o el proveedor puede integrarse hacia adelante.\n\n4) Poder de negociación de los clientes: capacidad de los compradores para presionar precios. Aumenta cuando compran grandes volúmenes, hay muchos sustitutos, los productos están poco diferenciados y los costos de cambio son bajos.\n\n5) Amenaza de productos sustitutos: existencia de productos que satisfacen la misma necesidad. Depende de la relación precio-calidad del sustituto y de los costos de cambio del cliente.\n\nLa unidad de análisis correcta es la industria (conjunto de empresas que ofrecen productos sustitutos cercanos entre sí), no una empresa en particular. Entre sus limitaciones: supone industrias relativamente estables y no incorpora directamente la innovación ni la cooperación (por eso surge la 6ª fuerza, los complementadores, y debe complementarse con análisis dinámicos).",
      "criterios": [
        {
          "texto": "Explica el objetivo del modelo: evaluar la estructura de la industria para determinar su rentabilidad potencial o atractivo",
          "peso": 2
        },
        {
          "texto": "Describe correctamente las cinco fuerzas (rivalidad, nuevos entrantes, poder de proveedores, poder de clientes, sustitutos)",
          "peso": 3
        },
        {
          "texto": "Indica al menos un factor que intensifica cada fuerza (barreras de entrada, concentración, costos de cambio, etc.)",
          "peso": 1
        },
        {
          "texto": "Señala que la unidad de análisis es la industria (no una empresa) y menciona una limitación del modelo",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Aplicar las 5 fuerzas a una empresa en particular en vez de a la industria",
        "Confundir productos sustitutos (satisfacen la misma necesidad desde otra categoría) con competidores directos",
        "Listar las fuerzas sin explicar qué mide cada una ni concluir sobre el atractivo de la industria"
      ]
    },
    {
      "id": "est-004",
      "tema": "U4. Análisis interno: Modelo de la Cadena de Valor",
      "dificultad": "facil",
      "enunciado": "Explique en qué consiste el Modelo de la Cadena de Valor de Porter como herramienta de análisis interno. Distinga entre actividades primarias y actividades de apoyo, nombrando y describiendo brevemente las de cada grupo, y explique cómo este modelo permite identificar fuentes de ventaja competitiva en costos o en diferenciación.",
      "respuestaModelo": "La cadena de valor es un modelo de análisis interno desarrollado por Michael Porter que descompone a la empresa en actividades que crean valor para el cliente. Su premisa es que la empresa no crea valor como un todo, sino a través de un conjunto de actividades interrelacionadas: la ventaja competitiva surge de cómo se ejecutan y coordinan esas actividades.\n\nActividades primarias (directamente relacionadas con crear, vender y entregar el producto o servicio):\n- Logística interna: recepción, almacenamiento y manejo de insumos.\n- Operaciones: transformación de insumos en productos finales.\n- Logística externa: distribución del producto al cliente.\n- Marketing y ventas: generación de demanda y posicionamiento.\n- Servicios: postventa, soporte y fidelización.\n\nActividades de apoyo (permiten que las primarias se ejecuten eficientemente):\n- Infraestructura de la empresa: gestión general, finanzas y planificación.\n- Gestión de recursos humanos: reclutamiento, capacitación y desarrollo.\n- Desarrollo tecnológico: innovación y sistemas de información.\n- Abastecimiento: compras y negociación con proveedores.\n\nEl modelo permite identificar fuentes de ventaja competitiva porque cada actividad puede ser fuente de eficiencia (menores costos, por ejemplo operaciones estandarizadas o logística optimizada) o de diferenciación (mayor valor percibido, por ejemplo servicio postventa superior o I+D innovadora). Además, las actividades están conectadas mediante encadenamientos: el valor surge del sistema completo y de su coherencia con el posicionamiento estratégico, no de una actividad aislada.",
      "criterios": [
        {
          "texto": "Define la cadena de valor como herramienta de análisis interno que descompone a la empresa en actividades creadoras de valor",
          "peso": 2
        },
        {
          "texto": "Identifica y describe las cinco actividades primarias (logística interna, operaciones, logística externa, marketing y ventas, servicios)",
          "peso": 2
        },
        {
          "texto": "Identifica y describe las cuatro actividades de apoyo (infraestructura, RR.HH., desarrollo tecnológico, abastecimiento)",
          "peso": 2
        },
        {
          "texto": "Explica que cada actividad puede ser fuente de eficiencia (costos) o de diferenciación, y que el valor surge de la coordinación del sistema completo",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Usar la cadena de valor como herramienta de análisis externo (confundirla con las 5 fuerzas o PESTEL)",
        "Clasificar marketing y ventas o logística como actividades de apoyo",
        "Confundir la cadena de valor interna con la cadena de suministro (proveedores y distribuidores externos)"
      ]
    }
  ]
});
