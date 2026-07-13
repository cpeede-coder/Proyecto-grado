// =====================================================================
// MATERIA: Marketing — SOLO preguntas DEMO (4)
// Las preguntas premium ya NO viven aqui: se descargan desde Supabase
// (funcion get_preguntas) solo para dispositivos que canjearon un codigo.
// =====================================================================

window.BANCO.materias.push({
  "id": "marketing",
  "nombre": "Marketing",
  "preguntas": [
    {
      "id": "mkt-001",
      "tema": "Segmentación, targeting y posicionamiento (STP)",
      "dificultad": "facil",
      "salioEnExamen": true,
      "enunciado": "Explique en qué consiste el proceso STP (Segmentación, Targeting y Posicionamiento), describiendo cada una de sus tres etapas y la relación secuencial entre ellas. Indique además un (1) ejemplo concreto de una marca que conozca, mostrando cómo se aplica cada etapa en ese caso.",
      "respuestaModelo": "El proceso STP es la columna del marketing estratégico y ordena tres decisiones secuenciales: primero se divide el mercado, luego se elige a quién atender y finalmente se define el lugar que se quiere ocupar en la mente de ese público.\n\n1) Segmentación: consiste en dividir el mercado total en grupos más pequeños y homogéneos de consumidores que comparten necesidades, características o comportamientos similares. Se utilizan cuatro variables: geográfica (región, ciudad, clima), demográfica (edad, género, ingreso, ocupación), psicográfica (estilo de vida, personalidad, valores) y conductual (ocasiones de uso, beneficios buscados, frecuencia de uso, lealtad). Su propósito es entender mejor a los clientes, optimizar recursos y ganar ventaja competitiva.\n\n2) Targeting (selección del mercado meta): una vez identificados los segmentos, se evalúa su atractivo (tamaño, crecimiento, rentabilidad, accesibilidad y compatibilidad con los recursos de la empresa) y se decide a cuáles dirigirse. Las coberturas posibles son: marketing indiferenciado (todo el mercado con una sola mezcla), concentrado o de nicho (un solo segmento) y multisegmento (varios segmentos con mezclas adaptadas).\n\n3) Posicionamiento: es diseñar la oferta y la imagen de la empresa para ocupar un lugar claro, distintivo y deseable en la mente del consumidor objetivo respecto de la competencia. Se apoya en herramientas como el mapa de posicionamiento (ej.: ejes precio-calidad) y se comunica a través de una propuesta de valor diferenciada.\n\nEjemplo integrado: una viña chilena que lanza vinos sin alcohol segmenta por variable conductual (personas que buscan moderar su consumo de alcohol) y demográfica (jóvenes adultos urbanos); selecciona como mercado meta a consumidores conscientes de la salud que antes no se identificaban con el vino tradicional (estrategia concentrada); y se posiciona como \"el sabor del vino tradicional, pero libre de alcohol\", diferenciándose por salud y nuevas ocasiones de consumo.",
      "criterios": [
        {
          "texto": "Define correctamente segmentación e identifica las cuatro variables (geográfica, demográfica, psicográfica y conductual)",
          "peso": 3
        },
        {
          "texto": "Explica el targeting como evaluación y selección del mercado meta, mencionando criterios de atractivo o tipos de cobertura",
          "peso": 3
        },
        {
          "texto": "Define posicionamiento como el lugar distintivo que ocupa la marca en la mente del consumidor frente a la competencia",
          "peso": 3
        },
        {
          "texto": "Entrega un ejemplo de marca coherente que muestra las tres etapas aplicadas y su secuencia",
          "peso": 3
        }
      ],
      "erroresComunes": [
        "Confundir posicionamiento con segmentación: el posicionamiento es percepción en la mente del consumidor, no una división del mercado",
        "Describir las etapas en abstracto sin ejemplo aplicado a una marca concreta",
        "Mezclar la variable psicográfica (estilo de vida, personalidad) con la conductual (frecuencia, beneficio buscado, lealtad)"
      ]
    },
    {
      "id": "mkt-002",
      "tema": "Marketing Mix: de las 4P a las 7P",
      "dificultad": "facil",
      "enunciado": "Explique en qué consiste el Marketing Mix de las 4P (Producto, Precio, Plaza y Promoción) y señale por qué, en el caso de los servicios, se amplía a 7P. Describa las tres (3) P adicionales entregando un ejemplo concreto de cada una aplicado a una empresa de servicios en Chile.",
      "respuestaModelo": "El Marketing Mix es el conjunto de herramientas tácticas que la empresa combina para producir la respuesta deseada en su mercado meta. Las 4P son:\n\n1) Producto: el bien o servicio que satisface la necesidad del cliente, incluyendo sus niveles (básico, real y aumentado), características, líneas y marca.\n2) Precio: el sacrificio económico que paga el consumidor; afecta ingresos, rentabilidad, competitividad y percepción de valor.\n3) Plaza (distribución): los canales por los cuales el producto llega al cliente, en forma directa o mediante intermediarios (mayoristas, minoristas), con estrategias intensiva, selectiva o exclusiva.\n4) Promoción: las comunicaciones que informan, persuaden y recuerdan (publicidad, promoción de ventas, relaciones públicas, marketing directo y ventas personales).\n\nEn los servicios el mix se amplía a 7P porque los servicios son intangibles, inseparables de quien los presta, heterogéneos y no almacenables: el cliente no puede probarlos antes de comprar, por lo que la experiencia y el contacto humano son parte central de la oferta. Las 3P adicionales son:\n\n5) Procesos: las actividades y flujos que garantizan la entrega efectiva y consistente del servicio (recepción de pedidos, atención, postventa). Ejemplo: una isapre o clínica en Santiago que estandariza su proceso de reserva de horas por app y check-in digital para reducir tiempos de espera.\n6) Personas: el personal que interactúa con el cliente es la primera línea y define la percepción de calidad; incluye capacitación, empatía y marketing interno. Ejemplo: una cadena hotelera de Puerto Varas que capacita a sus recepcionistas en protocolos de bienvenida y resolución de reclamos.\n7) Evidencia física: todos los elementos tangibles que permiten al cliente percibir la calidad del servicio: instalaciones, uniformes, decoración, sitio web, documentación. Ejemplo: un gimnasio premium en Las Condes con equipamiento moderno, instalaciones limpias y staff uniformado que refuerzan su imagen de calidad.",
      "criterios": [
        {
          "texto": "Explica correctamente cada una de las 4P con su rol dentro de la mezcla",
          "peso": 3
        },
        {
          "texto": "Justifica la ampliación a 7P a partir de las características de los servicios (intangibilidad, rol de la experiencia y del contacto humano)",
          "peso": 2
        },
        {
          "texto": "Describe correctamente Procesos, Personas y Evidencia física",
          "peso": 3
        },
        {
          "texto": "Entrega un ejemplo concreto y pertinente para cada una de las 3P adicionales",
          "peso": 3
        }
      ],
      "erroresComunes": [
        "Listar las 7P sin explicar por qué las 3P adicionales son necesarias en servicios",
        "Confundir evidencia física con el producto: la evidencia física es el entorno tangible que rodea al servicio, no el servicio mismo",
        "Dar ejemplos genéricos sin identificar una empresa o rubro de servicios concreto"
      ]
    },
    {
      "id": "mkt-003",
      "tema": "Propuesta de valor",
      "dificultad": "facil",
      "salioEnExamen": true,
      "enunciado": "Defina qué es la propuesta de valor de un producto o servicio y explique sus tres (3) componentes principales: beneficio principal, resolución de problemas y diferenciación. Luego redacte, a modo de ejemplo, la propuesta de valor de una marca chilena que usted elija, identificando en ella los tres componentes.",
      "respuestaModelo": "La propuesta de valor es una declaración clara y concisa que describe los beneficios únicos que un producto o servicio ofrece a los clientes y cómo resuelve sus problemas o satisface sus necesidades mejor que las alternativas disponibles. Es una promesa de valor que la empresa se compromete a entregar y que el cliente percibe como valiosa; constituye la razón por la cual el consumidor debería elegir esa marca y no otra.\n\nSus componentes principales son:\n\n1) Beneficio principal: el valor central o beneficio más importante que el producto entrega al cliente. Responde a la pregunta ¿qué gano yo como cliente?\n\n2) Resolución de problemas: cómo el producto o servicio resuelve un problema específico o satisface una necesidad concreta del cliente. Responde a ¿qué dolor o carencia me soluciona?\n\n3) Diferenciación: lo que hace único al producto frente a las alternativas del mercado. Responde a ¿por qué elegirlo por sobre la competencia?\n\nEjemplo (marca chilena inventada de productos de limpieza ecológicos, \"LimpioSur\"): \"LimpioSur ofrece productos de limpieza efectivos y seguros para tu hogar y el medio ambiente, elaborados con ingredientes naturales y envases reciclables, para que cuides a tu familia y al planeta al mismo tiempo\". En esta declaración, el beneficio principal es la limpieza efectiva y segura; la resolución de problemas es eliminar la suciedad sin exponer a la familia a químicos tóxicos; y la diferenciación son los ingredientes 100% naturales y biodegradables con envases reciclables, atributos que la competencia tradicional no ofrece.",
      "criterios": [
        {
          "texto": "Define propuesta de valor como promesa de beneficios únicos percibida como valiosa por el cliente, superior a las alternativas",
          "peso": 3
        },
        {
          "texto": "Explica correctamente los tres componentes: beneficio principal, resolución de problemas y diferenciación",
          "peso": 3
        },
        {
          "texto": "Redacta una propuesta de valor clara y concisa para una marca concreta",
          "peso": 2
        },
        {
          "texto": "Identifica explícitamente los tres componentes dentro del ejemplo redactado",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Confundir propuesta de valor con eslogan publicitario: la propuesta de valor articula beneficios y diferenciación, no es solo una frase pegajosa",
        "Redactar el ejemplo sin identificar los componentes solicitados",
        "Señalar atributos que no son diferenciadores (que también posee toda la competencia)"
      ]
    },
    {
      "id": "mkt-004",
      "tema": "Ciclo de vida del producto",
      "dificultad": "facil",
      "enunciado": "Describa las cuatro (4) etapas del ciclo de vida del producto (introducción, crecimiento, madurez y declive), señalando para cada etapa: (i) qué ocurre con las ventas y la competencia, y (ii) una (1) estrategia de marketing recomendada con un ejemplo concreto.",
      "respuestaModelo": "El ciclo de vida del producto describe las etapas que atraviesa un producto desde su lanzamiento hasta su retiro del mercado, y cada etapa exige estrategias distintas.\n\n1) Introducción: el producto recién se lanza; las ventas son bajas, los costos por cliente son altos y prácticamente no hay competencia directa, pero tampoco conocimiento de la categoría. La prioridad es generar conciencia y estimular la prueba. Estrategia: promoción intensa y educación del cliente, con precios de penetración (para ganar mercado rápido) o de descreme (precio alto inicial para captar a los dispuestos a pagar más). Ejemplo: el lanzamiento de un nuevo smartwatch con campaña en redes sociales, demostraciones y descuentos a los primeros compradores.\n\n2) Crecimiento: las ventas aumentan rápidamente, mejora la rentabilidad y comienzan a entrar competidores. Estrategia: expandir la distribución a nuevos canales y mejorar el producto con base en el feedback, manteniendo publicidad persuasiva para construir preferencia de marca. Ejemplo: ampliar la venta del smartwatch a retail y e-commerce, lanzando una versión mejorada.\n\n3) Madurez: las ventas alcanzan su punto máximo y se estabilizan; la competencia es máxima y la lucha es por participación de mercado. Estrategia: diferenciación del producto, promociones y programas de fidelización para retener clientes; publicidad recordatoria. Ejemplo: una bebida gaseosa consolidada que lanza ediciones especiales, hace promociones 2x1 y refuerza su programa de puntos.\n\n4) Declive: las ventas caen por obsolescencia, cambios en las preferencias o productos sustitutos. Estrategia: reducción de costos, cosecha (harvesting: exprimir el producto con mínima inversión), enfoque en nichos que aún lo valoran, o descontinuación gradual liquidando inventarios. Ejemplo: teléfonos con teclas que se orientan a un nicho de adultos mayores antes de retirarse del mercado.",
      "criterios": [
        {
          "texto": "Identifica las cuatro etapas en orden correcto y describe el comportamiento de ventas y competencia en cada una",
          "peso": 4
        },
        {
          "texto": "Propone una estrategia pertinente para cada etapa (promoción/educación, expansión, diferenciación/fidelización, reducción de costos o retiro)",
          "peso": 4
        },
        {
          "texto": "Entrega ejemplos concretos y coherentes con cada etapa",
          "peso": 2
        },
        {
          "texto": "Usa correctamente conceptos asociados (penetración, descreme, harvesting, publicidad informativa/persuasiva/recordatoria)",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Describir las etapas sin asociar una estrategia distinta a cada una",
        "Confundir la estrategia de introducción (crear conciencia, educar) con la de madurez (diferenciar y fidelizar)",
        "Omitir que en madurez la competencia es máxima y el foco pasa a la retención de clientes"
      ]
    }
  ]
});
