// Módulo de estudio — MARKETING (flashcards con repaso espaciado)
// Contenido ALINEADO AL TEMARIO OFICIAL de Marketing (Marketing I, II y III) y
// VALIDADO contra fuentes estándar (Kotler & Armstrong, Kotler & Keller, Aaker,
// Rogers, Porter, Ansoff, BCG, Booms & Bitner).
//
// ALINEACIÓN CON EL TEMARIO (revisión 2026-07-15):
//   NADA se eliminó por estar fuera del temario: todo el contenido previo mapeaba
//   a un punto del temario (STP, Aaker, Rogers, matrices, etc.). Lo que se hizo:
//   - REESTRUCTURA de 6 a 7 unidades para dar espacio a los temas que faltaban.
//   - Se dividió la "Mezcla de Marketing" en dos unidades (Producto/Precio/Plaza y
//     Promoción/Proceso/Personas) porque la PROMOCIÓN estaba subrepresentada.
//   TEMAS AGREGADOS que faltaban (estaban en el temario y no en las tarjetas):
//   - Promoción completa: principios de la comunicación; funciones de la publicidad;
//     recursos y estrategias publicitarias; roles y estereotipos en la publicidad;
//     concepto de público objetivo; los medios y la estrategia creativa; planificación
//     de medios; marketing cooperativo y de afiliación en la mezcla de comunicación.
//   - Las 7P completas: PROCESO (flujo de servicio, conexión empresa-cliente) y
//     PERSONAS (perfil, cultura organizacional, ambiente de trabajo, marketing interno)
//     como tarjetas propias, no como una sola línea.
//   - SENSIBILIDAD de precios como tarjeta propia (estaba solo mencionada).
//   - GESTIÓN DE CATEGORÍAS ampliada (principios, roles de categoría, pasos del proceso).
// Correcciones / precisiones ya aplicadas en versiones previas y conservadas:
//   - MEZCLA PROMOCIONAL: se añade la "venta personal" (el apunte la omite).
//   - NECESIDAD vs DESEO vs DEMANDA: distinción clásica de Kotler.
//   - EQUIDAD DE MARCA: los 5 componentes se atribuyen a David AAKER.
//   - NIVELES DE PRODUCTO: se enseña el modelo de 3 niveles; se nota que Kotler usa 5.
//   - REQUISITOS DE SEGMENTO y COBERTURAS: criterios estándar de Kotler.
// Formato estricto por tarjeta:
//   { id, unidad, tema, frente, reverso, tip? }
//   frente  = lo que se muestra primero (pregunta / concepto a recordar)
//   reverso = la respuesta ideal, breve y precisa
//   tip     = OPCIONAL: frase de examen o gancho para memorizar
window.ESTUDIO = window.ESTUDIO || {};
window.ESTUDIO.marketing = {
  materia: "Marketing",
  nombre: "Marketing",
  unidades: [
    { id: "U1", titulo: "Conducta del Consumidor y Adopción de Innovaciones" },
    { id: "U2", titulo: "Segmentación y Mercado Objetivo" },
    { id: "U3", titulo: "Planificación Estratégica de Marketing" },
    { id: "U4", titulo: "Marca, Posicionamiento y Propuesta de Valor" },
    { id: "U5", titulo: "Marketing Mix: Producto, Precio y Plaza" },
    { id: "U6", titulo: "Promoción, Proceso y Personas (7P)" },
    { id: "U7", titulo: "Experiencia del Cliente, Fidelización y Métricas" }
  ],
  tarjetas: [
    // ============ U1 · CONDUCTA DEL CONSUMIDOR Y ADOPCIÓN ============
    {
      id: "mkt-fc-001", unidad: "U1", tema: "Propósito de entender al consumidor",
      frente: "¿Qué es la conducta del consumidor y por qué importa estudiarla?",
      reverso: "Es cómo y por qué las personas deciden comprar y usar productos y servicios. Estudiarla permite satisfacer mejor sus necesidades y deseos, diseñar estrategias de marketing más efectivas y aumentar la lealtad del cliente.",
      tip: "Entender al consumidor es la base de TODAS las decisiones de marketing."
    },
    {
      id: "mkt-fc-002", unidad: "U1", tema: "Comportamiento vs mentalidad",
      frente: "Diferencia entre comportamiento y mentalidad del consumidor.",
      reverso: "Comportamiento: las acciones observables de compra y uso (qué hace). Mentalidad: los pensamientos, creencias y percepciones sobre productos y marcas (qué piensa y siente).",
      tip: ""
    },
    {
      id: "mkt-fc-003", unidad: "U1", tema: "Preferencias de producto, canal y marca",
      frente: "¿Qué son las preferencias de producto, canal y marca?",
      reverso: "Producto: por qué elige unos productos sobre otros (ej. un notebook Apple por diseño). Canal: dónde prefiere comprar (tienda física, online, app). Marca: tendencia a preferir ciertas marcas por confianza o valor percibido (ej. lealtad a Nike).",
      tip: "El marketing debe leer las tres preferencias para llegar al cliente correcto."
    },
    {
      id: "mkt-fc-004", unidad: "U1", tema: "Necesidad, deseo y demanda",
      frente: "Distingue necesidad, deseo y demanda (Kotler).",
      reverso: "Necesidad: carencia básica (hambre, seguridad, pertenencia). Deseo: la forma que toma esa necesidad según la cultura y la persona (querer una hamburguesa). Demanda: deseo respaldado por poder de compra.",
      tip: "El marketing NO crea necesidades: las detecta y orienta el deseo hacia una oferta."
    },
    {
      id: "mkt-fc-005", unidad: "U1", tema: "Psicología del consumidor",
      frente: "Nombra los factores psicológicos que influyen en la compra (temario).",
      reverso: "Necesidades, persuasión (cómo la empresa influye en la decisión), emociones (sentimientos momentáneos que evoca el producto), sentimientos (estados más duraderos, como confianza y lealtad), adopción (empezar a usar algo nuevo) y acciones (comprar, recomendar, abandonar).",
      tip: "Emoción = momentánea; sentimiento = duradero. La lealtad es un sentimiento."
    },
    {
      id: "mkt-fc-006", unidad: "U1", tema: "Difusión de innovaciones",
      frente: "¿Qué describe la teoría de difusión de innovaciones de Everett Rogers?",
      reverso: "El proceso y el ritmo con que una innovación (producto o tecnología nueva) se difunde en una población. Clasifica a los consumidores en cinco categorías de adoptantes según su rapidez para adoptar novedades.",
      tip: ""
    },
    {
      id: "mkt-fc-007", unidad: "U1", tema: "Categorías de adoptantes",
      frente: "Nombra las 5 categorías de adoptantes de Rogers y su porcentaje.",
      reverso: "Innovadores (2,5%), Primeros adoptantes / early adopters (13,5%), Mayoría temprana (34%), Mayoría tardía (34%) y Rezagados / laggards (16%).",
      tip: "Forman una curva normal (campana): el grueso está en las dos mayorías (68%)."
    },
    {
      id: "mkt-fc-008", unidad: "U1", tema: "Innovadores y early adopters",
      frente: "¿Qué caracteriza a innovadores y primeros adoptantes?",
      reverso: "Innovadores: aventureros, toleran riesgo e incertidumbre, primeros en probar. Primeros adoptantes: líderes de opinión respetados por sus pares; adoptan temprano pero con criterio y ayudan a difundir la innovación.",
      tip: "Los early adopters son clave: actúan como líderes de opinión que legitiman el producto."
    },
    {
      id: "mkt-fc-009", unidad: "U1", tema: "Mayorías y rezagados",
      frente: "¿Qué distingue a la mayoría temprana, la tardía y los rezagados?",
      reverso: "Mayoría temprana: deliberativa, adopta justo antes del promedio. Mayoría tardía: escéptica, adopta por presión social cuando ya es estándar. Rezagados: tradicionales, reacios al cambio, adoptan tarde o por necesidad.",
      tip: ""
    },
    {
      id: "mkt-fc-010", unidad: "U1", tema: "Proceso de adopción",
      frente: "¿Cuáles son las 5 etapas del proceso de adopción de una innovación?",
      reverso: "1) Conocimiento (se entera), 2) Interés (busca información), 3) Evaluación (sopesa pros y contras), 4) Prueba (la ensaya a pequeña escala) y 5) Adopción (uso pleno y regular).",
      tip: "Gancho: CIEPA — Conocimiento, Interés, Evaluación, Prueba, Adopción."
    },

    // ============ U2 · SEGMENTACIÓN Y MERCADO OBJETIVO ============
    {
      id: "mkt-fc-011", unidad: "U2", tema: "Segmentación de mercado", salioEnExamen: true,
      frente: "¿Qué es la segmentación de mercado y cuál es su propósito?",
      reverso: "Dividir un mercado en grupos más pequeños y homogéneos de consumidores con necesidades, características o comportamientos similares. Permite entender mejor al cliente, optimizar recursos, aumentar la satisfacción y ganar ventaja competitiva.",
      tip: "\"No se puede satisfacer a todos por igual\": segmentar es elegir a quién servir mejor."
    },
    {
      id: "mkt-fc-012", unidad: "U2", tema: "Modelo STP", salioEnExamen: true,
      frente: "¿Qué significa el modelo STP?",
      reverso: "Segmentation, Targeting, Positioning: 1) Segmentar (dividir el mercado), 2) Seleccionar el mercado objetivo (targeting) y 3) Posicionar la oferta en la mente del cliente elegido. Es la secuencia central de la estrategia de marketing.",
      tip: "Primero se DIVIDE, luego se ELIGE, y por último se POSICIONA."
    },
    {
      id: "mkt-fc-013", unidad: "U2", tema: "Bases de segmentación", salioEnExamen: true,
      frente: "¿Cuáles son las 4 bases clásicas de segmentación?",
      reverso: "Geográfica (ubicación, clima, región), Demográfica (edad, género, ingresos, educación), Psicográfica (estilo de vida, personalidad, valores) y Conductual (uso, beneficios buscados, lealtad).",
      tip: "Gancho: Geo-Demo-Psico-Conductual."
    },
    {
      id: "mkt-fc-014", unidad: "U2", tema: "Psicográfica vs conductual", salioEnExamen: true,
      frente: "Diferencia entre segmentación psicográfica y conductual.",
      reverso: "Psicográfica: agrupa por CÓMO ES la persona (estilo de vida, valores, personalidad, intereses). Conductual: agrupa por CÓMO ACTÚA frente al producto (frecuencia de uso, beneficios buscados, lealtad a la marca, ocasión de compra).",
      tip: "La conductual suele ser la más útil porque se liga directo a la decisión de compra."
    },
    {
      id: "mkt-fc-015", unidad: "U2", tema: "Requisitos de un buen segmento",
      frente: "¿Qué condiciones debe cumplir un segmento para ser útil (Kotler)?",
      reverso: "Medible (tamaño y poder cuantificables), Sustancial (suficientemente grande y rentable), Accesible (se le puede alcanzar y atender), Diferenciable (responde distinto a la oferta) y Accionable (se pueden diseñar estrategias para él).",
      tip: "De poco sirve un segmento que no se puede medir, alcanzar ni atender rentablemente."
    },
    {
      id: "mkt-fc-016", unidad: "U2", tema: "Proceso de segmentación",
      frente: "¿Cuáles son los pasos del proceso de segmentación?",
      reverso: "1) Identificar las bases de segmentación, 2) Desarrollar perfiles de cada segmento, 3) Evaluar el atractivo de cada segmento, 4) Seleccionar el mercado objetivo y 5) Diseñar estrategias de marketing para cada segmento elegido.",
      tip: ""
    },
    {
      id: "mkt-fc-017", unidad: "U2", tema: "Evaluación del atractivo",
      frente: "¿Qué factores determinan el atractivo de un segmento?",
      reverso: "Tamaño y potencial de crecimiento, rentabilidad, accesibilidad y compatibilidad con los objetivos y recursos de la empresa. Un segmento grande no sirve si la empresa no puede atenderlo con ventaja.",
      tip: ""
    },
    {
      id: "mkt-fc-018", unidad: "U2", tema: "Targeting y cobertura",
      frente: "¿Qué es el targeting y cuáles son las 3 estrategias de cobertura de mercado?",
      reverso: "Targeting es elegir a qué segmentos dirigirse. Coberturas: Indiferenciado (mismo marketing para todo el mercado), Diferenciado (oferta distinta por segmento) y Concentrado o de nicho (foco en uno o pocos segmentos específicos).",
      tip: "El marketing concentrado (nicho) es la vía típica de empresas pequeñas o de lujo."
    },

    // ============ U3 · PLANIFICACIÓN ESTRATÉGICA DE MARKETING ============
    {
      id: "mkt-fc-019", unidad: "U3", tema: "Planificación estratégica",
      frente: "¿Qué es la planificación estratégica de marketing?",
      reverso: "El proceso de definir una estrategia de marketing de largo plazo para alcanzar los objetivos comerciales: analizar el entorno, fijar objetivos y crear planes de acción sobre las 4P para cada mercado objetivo.",
      tip: ""
    },
    {
      id: "mkt-fc-020", unidad: "U3", tema: "Estrategias genéricas de Porter",
      frente: "¿Cuáles son las tres estrategias genéricas de Porter?",
      reverso: "1) Liderazgo en costos (ser el productor más barato, ej. Walmart), 2) Diferenciación (oferta única y valorada que permite precio premium, ej. Apple) y 3) Enfoque (especializarse en un segmento específico, ej. Rolex).",
      tip: "Costos = competir por precio; Diferenciación = competir por valor; Enfoque = competir en un nicho."
    },
    {
      id: "mkt-fc-021", unidad: "U3", tema: "Estrategias competitivas de mercado",
      frente: "¿Cuáles son las 4 posiciones competitivas de mercado (Kotler)?",
      reverso: "Líder (mayor cuota, marca la pauta; ej. Coca-Cola), Retador (desafía al líder con innovación o precios; ej. Pepsi), Seguidor (imita o mejora ligeramente al líder; ej. LG) y Nicho (se especializa en un segmento pequeño; ej. Tesla en sus inicios).",
      tip: "Líder defiende, retador ataca, seguidor imita, nicho se especializa."
    },
    {
      id: "mkt-fc-022", unidad: "U3", tema: "Matriz de Ansoff",
      frente: "¿Qué cuatro estrategias de crecimiento define la Matriz de Ansoff?",
      reverso: "Cruza productos (actuales/nuevos) con mercados (actuales/nuevos): Penetración de mercado, Desarrollo de producto, Desarrollo de mercado y Diversificación.",
      tip: "La diversificación (producto nuevo + mercado nuevo) es la de mayor riesgo."
    },
    {
      id: "mkt-fc-023", unidad: "U3", tema: "Estrategias de Ansoff en detalle",
      frente: "Define penetración, desarrollo de producto y desarrollo de mercado.",
      reverso: "Penetración: más ventas de productos ACTUALES en mercados ACTUALES. Desarrollo de producto: productos NUEVOS en mercados actuales. Desarrollo de mercado: productos actuales en mercados NUEVOS (nuevas geografías o segmentos).",
      tip: ""
    },
    {
      id: "mkt-fc-024", unidad: "U3", tema: "Matriz BCG",
      frente: "¿Qué dos variables cruza la Matriz BCG y qué mide?",
      reverso: "Cruza participación de mercado (alta/baja) con crecimiento del mercado (alto/bajo) para analizar la cartera de productos y asignar recursos de forma eficiente.",
      tip: "BCG = cartera de productos; su eje NO es rentabilidad sino cuota × crecimiento."
    },
    {
      id: "mkt-fc-025", unidad: "U3", tema: "Categorías BCG",
      frente: "Nombra las 4 categorías de la Matriz BCG.",
      reverso: "Estrellas (alta cuota, alto crecimiento: invertir). Vacas lecheras (alta cuota, bajo crecimiento: ordeñar caja). Interrogantes (baja cuota, alto crecimiento: decidir si invertir o abandonar). Perros (baja cuota, bajo crecimiento: retirar).",
      tip: "Las vacas lecheras financian a las estrellas e interrogantes."
    },
    {
      id: "mkt-fc-026", unidad: "U3", tema: "Matriz GE / McKinsey",
      frente: "¿Qué evalúa la Matriz GE (General Electric) y sus tres zonas?",
      reverso: "Evalúa unidades de negocio en dos dimensiones: atractivo del mercado y fortaleza competitiva. Tres zonas: Invertir y crecer (alto/alto), Seleccionar (posición media) y Desinvertir (bajo atractivo o baja fortaleza).",
      tip: "Es una versión más rica y matizada (3x3) que la BCG (2x2)."
    },

    // ============ U4 · MARCA, POSICIONAMIENTO Y PROPUESTA DE VALOR ============
    {
      id: "mkt-fc-027", unidad: "U4", tema: "Concepto de marca", salioEnExamen: true,
      frente: "¿Qué es una marca?",
      reverso: "Es más que un nombre o un logo: es la percepción general y el conjunto de asociaciones que los consumidores tienen de una empresa, producto o servicio; crea una imagen distintiva en su mente.",
      tip: "\"La marca vive en la mente del consumidor, no en el producto.\""
    },
    {
      id: "mkt-fc-028", unidad: "U4", tema: "Identidad de marca",
      frente: "¿Qué es la identidad de marca y qué elementos incluye?",
      reverso: "El conjunto de elementos que representan y diferencian a la marca: nombre, logo, colores, tipografía, eslogan y tono de comunicación. Es lo que la empresa PROYECTA para ser reconocida.",
      tip: "Identidad = lo que la marca emite; imagen = lo que el consumidor percibe."
    },
    {
      id: "mkt-fc-029", unidad: "U4", tema: "Equidad de marca (brand equity)", salioEnExamen: true,
      frente: "¿Qué es la equidad de marca y sus componentes (modelo de Aaker)?",
      reverso: "El valor adicional que una marca aporta a un producto. Aaker la compone de: reconocimiento de marca, asociaciones de marca, lealtad a la marca, calidad percibida y otros activos (patentes, marcas registradas).",
      tip: "Alta equidad = el cliente paga más y es más leal solo por la marca (ej. Coca-Cola)."
    },
    {
      id: "mkt-fc-030", unidad: "U4", tema: "Gestión de marca",
      frente: "¿Qué es la gestión de marca (branding) y qué incluye?",
      reverso: "El proceso de crear, mantener, mejorar y proteger la identidad y la equidad de la marca. Incluye desarrollo de marca, posicionamiento, comunicación de marca y evaluación/ajuste para mantenerla relevante y competitiva.",
      tip: ""
    },
    {
      id: "mkt-fc-031", unidad: "U4", tema: "Posicionamiento de marca", salioEnExamen: true,
      frente: "¿Qué es el posicionamiento de marca?",
      reverso: "El proceso de diseñar la oferta y la imagen de la empresa para ocupar un lugar distintivo y valorado en la mente del público objetivo, frente a los competidores. Define cómo quiere ser percibida.",
      tip: "Posicionar no es ser mejor en todo, sino ocupar un lugar CLARO y DIFERENTE."
    },
    {
      id: "mkt-fc-032", unidad: "U4", tema: "Componentes del posicionamiento",
      frente: "¿Qué componentes definen el posicionamiento de una marca?",
      reverso: "Definición del público objetivo, análisis de la competencia, propuesta de valor única (UVP), beneficios funcionales y emocionales, y una estrategia de comunicación coherente en todos los puntos de contacto.",
      tip: ""
    },
    {
      id: "mkt-fc-033", unidad: "U4", tema: "Declaración de posicionamiento",
      frente: "¿Cómo se estructura una declaración de posicionamiento?",
      reverso: "\"Para [público objetivo] que [necesidad], [marca] ofrece [beneficio clave] a diferencia de [competencia]\". Ej. Volvo: para familias que valoran la seguridad, ofrece vehículos diseñados para máxima seguridad en cada viaje.",
      tip: "Fórmula: Para… que… [marca] ofrece… a diferencia de…"
    },
    {
      id: "mkt-fc-034", unidad: "U4", tema: "Beneficios funcionales y emocionales",
      frente: "Diferencia entre beneficios funcionales y emocionales de una marca.",
      reverso: "Funcionales: atributos tangibles y de desempeño (qué HACE el producto). Emocionales: sentimientos y significados intangibles que evoca (ej. Dove promueve la autoestima, no solo vende jabón).",
      tip: "Las marcas fuertes combinan ambos: el beneficio emocional fideliza."
    },
    {
      id: "mkt-fc-035", unidad: "U4", tema: "Propuesta de valor", salioEnExamen: true,
      frente: "¿Qué es la propuesta de valor y sus componentes?",
      reverso: "Declaración clara de los beneficios únicos que un producto ofrece y cómo resuelve el problema del cliente mejor que las alternativas. Componentes: beneficio principal, resolución del problema y diferenciación.",
      tip: "Es una PROMESA de valor: lo que la empresa se compromete a entregar y el cliente percibe como valioso."
    },
    {
      id: "mkt-fc-036", unidad: "U4", tema: "Importancia del posicionamiento",
      frente: "¿Por qué es importante un buen posicionamiento de marca?",
      reverso: "Diferencia en un mercado saturado, construye conexión emocional y lealtad, da consistencia a todas las comunicaciones y crea valor perceptual que justifica precios más altos.",
      tip: ""
    },

    // ============ U5 · MARKETING MIX: PRODUCTO, PRECIO Y PLAZA ============
    {
      id: "mkt-fc-037", unidad: "U5", tema: "Marketing mix / 4P y 7P",
      frente: "¿Qué es el marketing mix y cuáles son las 4P (y las 7P)?",
      reverso: "Conjunto de herramientas tácticas que la empresa combina para lograr la respuesta deseada del mercado objetivo: Producto, Precio, Plaza (distribución) y Promoción (comunicación). En servicios se amplía a 7P sumando Personas, Procesos y Evidencia física.",
      tip: "Las 4P son la caja de herramientas TÁCTICA que ejecuta la estrategia de posicionamiento."
    },
    {
      id: "mkt-fc-038", unidad: "U5", tema: "Producto: clasificación y niveles",
      frente: "Distingue producto de servicio y nombra los tres niveles de producto.",
      reverso: "Producto: bien tangible; servicio: beneficio intangible. Niveles: producto básico o central (la necesidad de fondo, ej. transporte), producto real (características tangibles: diseño, marca, calidad) y producto aumentado (extras: garantía, postventa, financiamiento).",
      tip: "La marca influye en la percepción del producto (relación producto-marca). Kotler amplía a 5 niveles; se enseña el de 3."
    },
    {
      id: "mkt-fc-039", unidad: "U5", tema: "Planificación y desarrollo de productos", salioEnExamen: true,
      frente: "¿Cuáles son las etapas del desarrollo de un nuevo producto?",
      reverso: "Generación de ideas → filtrado de ideas → desarrollo y prueba de concepto → estrategia de marketing → análisis de negocio (viabilidad) → desarrollo del producto → prueba de mercado → comercialización (lanzamiento), más la gestión del ciclo de vida posterior.",
      tip: "El filtrado temprano evita gastar en ideas inviables (\"matar rápido lo que no sirve\")."
    },
    {
      id: "mkt-fc-040", unidad: "U5", tema: "Líneas y mezcla de productos",
      frente: "Diferencia entre línea de productos y mezcla de productos.",
      reverso: "Línea de productos: grupo de productos relacionados dirigidos al mismo segmento (ej. champú + acondicionador + gel). Mezcla (o cartera): el conjunto completo de todas las líneas que ofrece la empresa (ej. detergentes + higiene + alimento para mascotas de P&G).",
      tip: "Las decisiones de características (diseño, calidad, estilo) también son parte de la P de Producto."
    },
    {
      id: "mkt-fc-041", unidad: "U5", tema: "Ciclo de vida del producto", salioEnExamen: true,
      frente: "¿Cuáles son las 4 etapas del ciclo de vida del producto (CVP)?",
      reverso: "Introducción (ventas bajas, alta inversión, crear conciencia), Crecimiento (ventas suben rápido, mejora la rentabilidad), Madurez (ventas se estabilizan, competencia intensa) y Declive (caen las ventas por obsolescencia o sustitutos).",
      tip: "Cada etapa exige distinta estrategia de las 4P."
    },
    {
      id: "mkt-fc-042", unidad: "U5", tema: "Estrategias por etapa del CVP", salioEnExamen: true,
      frente: "¿Qué estrategia conviene en cada etapa del ciclo de vida?",
      reverso: "Introducción: crear conciencia (penetración o descremado). Crecimiento: ampliar distribución y mejorar el producto. Madurez: diferenciar, fidelizar y segmentar. Declive: reducir costos, cosechar (harvesting), enfocar en nichos o eliminar el producto.",
      tip: "Es la \"estrategia de adopción del mercado\": adaptar el marketing a la etapa del CVP."
    },
    {
      id: "mkt-fc-043", unidad: "U5", tema: "Factores del precio",
      frente: "¿Qué factores influyen en la fijación de precios y por qué es relevante?",
      reverso: "El precio afecta directamente rentabilidad, competitividad y percepción de valor. Factores: costos (producción, distribución, marketing), demanda y elasticidad, precios de la competencia, objetivos de marketing (utilidad, cuota, supervivencia) y factores externos (regulación, economía).",
      tip: "El precio es la única P que genera INGRESOS; las demás generan costos."
    },
    {
      id: "mkt-fc-044", unidad: "U5", tema: "Sensibilidad de precios",
      frente: "¿Qué es la sensibilidad de precios?",
      reverso: "Mide cuánto cambia la demanda de un producto ante variaciones en su precio (elasticidad). Alta sensibilidad: pequeñas alzas reducen mucho la demanda. Baja sensibilidad: la demanda casi no reacciona (ej. productos de lujo, por el prestigio asociado).",
      tip: "A menor sensibilidad, más margen de maniobra para subir precios."
    },
    {
      id: "mkt-fc-045", unidad: "U5", tema: "Métodos de fijación de precios", salioEnExamen: true,
      frente: "¿Cuáles son los tres enfoques base para fijar precios?",
      reverso: "Basado en costos (costo más margen), basado en el valor (según la percepción de valor del cliente, ej. perfume premium) y basado en la competencia (alinear precios a los rivales).",
      tip: "La fijación por valor suele capturar más margen que la de costo más margen."
    },
    {
      id: "mkt-fc-046", unidad: "U5", tema: "Penetración vs descremado", salioEnExamen: true,
      frente: "Diferencia entre estrategia de penetración y de descremado.",
      reverso: "Penetración: precio inicial BAJO para ganar cuota de mercado rápido. Descremado (skimming): precio inicial ALTO para captar a quienes pagan más y luego bajarlo por etapas (ej. lanzamiento de smartphones).",
      tip: "Penetración = volumen; descremado = margen por segmentos sucesivos."
    },
    {
      id: "mkt-fc-047", unidad: "U5", tema: "Plaza y canales",
      frente: "¿Qué es la Plaza y cuál es la diferencia entre canal directo e indirecto?",
      reverso: "Plaza = canales de distribución que llevan el producto del fabricante al consumidor. Directo: sin intermediarios (venta propia online). Indirecto: con intermediarios (mayoristas, minoristas, agentes/brokers).",
      tip: "Agentes y brokers facilitan la venta pero NO toman posesión del producto."
    },
    {
      id: "mkt-fc-048", unidad: "U5", tema: "Omnicanal, e-commerce y distribución",
      frente: "¿Qué es el omnicanal y cuáles son las 3 estrategias de intensidad de distribución?",
      reverso: "Omnicanal: integrar todos los canales (físico, online, app) en una experiencia coherente; e-commerce: venta por plataformas digitales. Intensidades: Intensiva (máximos puntos, ej. bebidas y snacks), Selectiva (número limitado, ej. electrónica de gama) y Exclusiva (uno o pocos, ej. lujo como Rolex).",
      tip: ""
    },
    {
      id: "mkt-fc-049", unidad: "U5", tema: "Merchandising y trade marketing",
      frente: "Diferencia entre trade marketing y merchandising.",
      reverso: "Trade marketing: estrategias dirigidas a los INTERMEDIARIOS (mayoristas, minoristas) para impulsar la compra y distribución. Merchandising: técnicas en el PUNTO DE VENTA para promover la venta (exhibiciones, ubicación, promociones).",
      tip: "Trade marketing mira al canal; merchandising, a la góndola."
    },
    {
      id: "mkt-fc-050", unidad: "U5", tema: "Gestión de categorías",
      frente: "¿Qué es la gestión de categorías, sus roles y pasos?",
      reverso: "Proceso colaborativo fabricante-minorista que trata cada categoría de productos como una unidad de negocio para maximizar ventas y rentabilidad. Roles de categoría: generador de tráfico, de ingresos o de imagen. Pasos: definir la categoría → asignar rol → analizar → definir estrategia → implementar (surtido, precio, promoción, ubicación) → revisar.",
      tip: "Beneficios: más ventas, mejor satisfacción del cliente y eficiencia operativa."
    },

    // ============ U6 · PROMOCIÓN, PROCESO Y PERSONAS (7P) ============
    {
      id: "mkt-fc-051", unidad: "U6", tema: "Promoción: concepto y rol", salioEnExamen: true,
      frente: "¿Qué es la promoción y cuál es el rol de las comunicaciones en marketing?",
      reverso: "Conjunto de actividades de comunicación que informan, persuaden y recuerdan a los consumidores sobre los productos o servicios. Su rol: generar conciencia, crear interés, incitar a la compra y fomentar la lealtad.",
      tip: "Los tres verbos de la promoción: informar, persuadir y recordar."
    },
    {
      id: "mkt-fc-052", unidad: "U6", tema: "Mezcla de comunicación", salioEnExamen: true,
      frente: "¿Cuáles son los elementos de la mezcla de comunicación (promoción)?",
      reverso: "Publicidad, medios digitales, promoción/incentivos de ventas (descuentos, cupones, concursos), venta personal, relaciones públicas, marketing directo, marketing cooperativo (promoción conjunta entre empresas) y marketing de afiliación (afiliados que cobran comisión por venta).",
      tip: "El apunte omite la VENTA PERSONAL: es un elemento clásico del promotion mix de Kotler."
    },
    {
      id: "mkt-fc-053", unidad: "U6", tema: "Determinación de la mezcla promocional", salioEnExamen: true,
      frente: "¿Cómo se determina la mezcla promocional?",
      reverso: "Se definen primero los OBJETIVOS de la promoción (aumentar ventas, mejorar imagen, lanzar un producto) y luego se seleccionan las herramientas y tácticas más efectivas para alcanzarlos, según el público, el presupuesto y la etapa del producto.",
      tip: "Primero el objetivo, después el mix: la herramienta se elige para cumplir la meta."
    },
    {
      id: "mkt-fc-054", unidad: "U6", tema: "Principios de la comunicación",
      frente: "¿Cuáles son los principios de una buena comunicación de marketing?",
      reverso: "Claridad (mensajes simples y comprensibles), Consistencia (mensaje coherente en todos los canales) y Relevancia (significativo para el público objetivo).",
      tip: "Ej. de consistencia: Coca-Cola usa el mismo eslogan en TV, radio y redes."
    },
    {
      id: "mkt-fc-055", unidad: "U6", tema: "Funciones de la publicidad",
      frente: "¿Cuáles son las funciones de la publicidad?",
      reverso: "Informar (dar a conocer un producto nuevo), Persuadir (convencer de comprarlo o preferirlo) y Recordar (mantener la marca en la mente del consumidor).",
      tip: "Coinciden con el rol de la promoción: informar, persuadir, recordar."
    },
    {
      id: "mkt-fc-056", unidad: "U6", tema: "Recursos y estrategias publicitarias",
      frente: "¿Qué son los recursos y las estrategias publicitarias?",
      reverso: "Recursos: elementos usados en el anuncio (imágenes, texto, música, celebridades). Estrategias: enfoques para conectar con el público (publicidad emocional, racional, de miedo, humorística, testimonial).",
      tip: "Recurso = con qué se hace el anuncio; estrategia = con qué enfoque persuade."
    },
    {
      id: "mkt-fc-057", unidad: "U6", tema: "Roles y estereotipos en la publicidad",
      frente: "¿Qué son los roles y los estereotipos en la publicidad?",
      reverso: "Roles: representaciones de personas que reflejan comportamientos y estilos de vida (ej. una madre preocupada por la salud en un anuncio de alimentos). Estereotipos: generalizaciones simplificadas sobre grupos (ej. estereotipos de género en juguetes) que a veces se usan en los anuncios.",
      tip: "Los estereotipos comunican rápido, pero pueden reforzar sesgos: úsense con criterio."
    },
    {
      id: "mkt-fc-058", unidad: "U6", tema: "Público objetivo", salioEnExamen: true,
      frente: "¿Qué es el público objetivo en publicidad?",
      reverso: "El segmento específico de la población al que se dirige una campaña publicitaria (ej. jóvenes de 18 a 25 años para una bebida energética). Definirlo bien orienta el mensaje, el tono y la elección de medios.",
      tip: "Sin público objetivo claro, el mensaje se diluye y se malgasta el presupuesto."
    },
    {
      id: "mkt-fc-059", unidad: "U6", tema: "Medios y estrategia creativa",
      frente: "¿Qué son la planificación de medios y la estrategia creativa?",
      reverso: "Medios: canales para difundir la publicidad (TV, radio, prensa, internet, redes). Planificación de medios: elegir la combinación de canales adecuada al público y presupuesto. Estrategia creativa: el enfoque para desarrollar el mensaje (ej. storytelling para una conexión emocional).",
      tip: "Medios = DÓNDE aparece; estrategia creativa = CÓMO se cuenta el mensaje."
    },
    {
      id: "mkt-fc-060", unidad: "U6", tema: "Proceso (7P)",
      frente: "¿Qué abarca la P de Proceso en el marketing de servicios?",
      reverso: "El conjunto de actividades y pasos para entregar el producto o servicio (flujo del servicio, desde la primera interacción hasta la postventa). Procesos eficientes mejoran la satisfacción, la calidad y la conexión entre empresa y cliente.",
      tip: "Ej.: un check-in de hotel rápido y sin fricción mejora toda la experiencia."
    },
    {
      id: "mkt-fc-061", unidad: "U6", tema: "Personas y marketing interno (7P)",
      frente: "¿Qué abarca la P de Personas y qué es el marketing interno?",
      reverso: "Personas: quienes prestan el servicio y su perfil; incluye cultura organizacional y ambiente de trabajo. Marketing interno: estrategias para motivar y capacitar a los empleados tratándolos como clientes internos (reconocimiento, recompensas, formación continua).",
      tip: "Un empleado motivado entrega mejor servicio: el marketing interno precede al externo."
    },
    {
      id: "mkt-fc-062", unidad: "U6", tema: "Evidencia física (7P)",
      frente: "¿Qué es la evidencia física y para qué sirve?",
      reverso: "Los elementos tangibles que el cliente ve, toca y experimenta (ambiente físico, apariencia del personal, materiales de marketing, empaque, documentación). Da confianza y credibilidad, diferencia la marca y sube la percepción de valor.",
      tip: "Clave en servicios: como el servicio es intangible, lo tangible \"prueba\" su calidad."
    },

    // ============ U7 · EXPERIENCIA, FIDELIZACIÓN Y MÉTRICAS ============
    {
      id: "mkt-fc-063", unidad: "U7", tema: "Experiencia del cliente", salioEnExamen: true,
      frente: "¿Qué es la gestión de la experiencia del cliente (CX)?",
      reverso: "Planificar y controlar cada interacción que el cliente tiene con la marca para asegurar una experiencia positiva y coherente en todos los puntos de contacto, desde el primer conocimiento hasta la postventa.",
      tip: ""
    },
    {
      id: "mkt-fc-064", unidad: "U7", tema: "Viaje del cliente", salioEnExamen: true,
      frente: "¿Cuáles son las etapas del viaje del cliente (customer journey)?",
      reverso: "1) Conocimiento (se entera de la marca), 2) Consideración (investiga y compara), 3) Compra (decide), 4) Servicio / postventa (usa el producto y recibe soporte) y 5) Fidelización (repite y recomienda).",
      tip: "El viaje NO termina en la compra: la postventa y la fidelización cierran el ciclo."
    },
    {
      id: "mkt-fc-065", unidad: "U7", tema: "Mapeo del viaje del cliente", salioEnExamen: true,
      frente: "¿Qué es el mapeo del viaje del cliente y para qué sirve?",
      reverso: "Crear un mapa visual de todas las interacciones y puntos de contacto entre cliente y empresa. Sirve para identificar oportunidades de mejora y puntos de dolor en cada etapa del viaje.",
      tip: ""
    },
    {
      id: "mkt-fc-066", unidad: "U7", tema: "Retención, recuperación y fidelización", salioEnExamen: true,
      frente: "Diferencia entre retención, recuperación y fidelización.",
      reverso: "Retención: mantener a los clientes actuales para que no se vayan. Recuperación: reconquistar a clientes insatisfechos o que se fueron. Fidelización: convertirlos en defensores leales que compran y recomiendan.",
      tip: "Retener cuesta mucho menos que captar un cliente nuevo."
    },
    {
      id: "mkt-fc-067", unidad: "U7", tema: "Técnicas de retención", salioEnExamen: true,
      frente: "Nombra técnicas de retención de clientes.",
      reverso: "Programas de fidelidad (puntos, recompensas), comunicación personalizada (según el comportamiento de compra) y mejora continua del producto basada en el feedback del cliente.",
      tip: ""
    },
    {
      id: "mkt-fc-068", unidad: "U7", tema: "Recuperación y fidelización", salioEnExamen: true,
      frente: "¿Qué técnicas se usan para recuperar y para fidelizar clientes?",
      reverso: "Recuperación: atención proactiva (contactar al insatisfecho), compensaciones (descuentos, reembolsos) y encuestas de satisfacción. Fidelización: recompensas por referidos, contenido exclusivo y eventos especiales para clientes leales.",
      tip: "Una buena recuperación puede dejar al cliente MÁS leal que antes de la falla (paradoja de la recuperación)."
    },
    {
      id: "mkt-fc-069", unidad: "U7", tema: "Productividad de marketing y ROI", salioEnExamen: true,
      frente: "¿Qué es la medición de la productividad de marketing?",
      reverso: "Evaluar la eficacia y eficiencia de las actividades de marketing en relación con los recursos invertidos, es decir, si generan un retorno adecuado (ROI). Permite optimizar recursos, tomar decisiones informadas y mejorar de forma continua.",
      tip: "\"Lo que no se mide, no se puede mejorar.\" El marketing moderno se justifica con métricas."
    },
    {
      id: "mkt-fc-070", unidad: "U7", tema: "Métricas de marketing", salioEnExamen: true,
      frente: "¿Qué miden el ROI, CPA, CLV y la tasa de conversión, y qué tipos de métricas existen?",
      reverso: "ROI: retorno sobre la inversión. CPA: costo de captar un cliente nuevo. CLV: valor total del cliente durante toda su relación. Conversión: % de leads que realizan la acción deseada. Tipos: de alcance/visibilidad, de compromiso, de generación de leads, de ventas/conversión, de satisfacción (NPS) y financieras.",
      tip: "Un negocio es sano cuando el CLV supera con holgura al CPA."
    },
    {
      id: "mkt-fc-071", unidad: "U7", tema: "Frases de examen (marketing)",
      frente: "Frases clave de marketing para el examen.",
      reverso: "\"El marketing detecta y satisface necesidades de forma rentable.\" · \"Primero segmentar, luego elegir, después posicionar (STP).\" · \"El precio es la única P que genera ingresos.\" · \"Retener un cliente cuesta menos que captar uno nuevo.\" · \"La marca vive en la mente del consumidor.\"",
      tip: ""
    },

    // ============ CASOS DE EXAMEN (formato real del Examen de Grado) ============
    {
      id: "mkt-fc-072", unidad: "U2", tema: "Caso de examen: segmentar el ingreso de una tienda al mercado chileno", salioEnExamen: true,
      frente: "Una cadena internacional de retail de juguetes reingresa a Chile mediante una alianza local. Desarrolle las cuatro (4) variables de segmentación (geográfica, demográfica, psicográfica y conductual) describiendo dos (2) atributos concretos para cada una.",
      reverso: "Geográfica: zonas urbanas de alto flujo (malls de Santiago y regiones); estacionalidad de la demanda (campaña de Navidad y Día del Niño).\nDemográfica: familias con hijos de 0 a 12 años; padres/madres de 28-45 años de ingreso medio y medio-alto.\nPsicográfica: familias que valoran el juego educativo y la experiencia en tienda; consumidores nostálgicos ligados a la marca.\nConductual: ocasión de compra (cumpleaños, Navidad, regalos); nivel de lealtad a la marca y beneficio buscado (entretención, aprendizaje).",
      tip: "La pauta premia DOS atributos específicos y verosímiles por variable (sin repetir la misma idea) y coherentes con el caso."
    },
    {
      id: "mkt-fc-073", unidad: "U4", tema: "Caso de examen: propuesta de valor de una línea innovadora", salioEnExamen: true,
      frente: "Una viña lanza una línea de vinos sin alcohol y bajos en calorías, dirigida a consumidores que buscan moderar su ingesta. Indique la propuesta de valor de la línea y fundaméntela con dos (2) atributos diferenciadores frente al vino tradicional.",
      reverso: "Propuesta de valor: disfrutar del sabor y el ritual del vino sin los efectos del alcohol, habilitando nuevas ocasiones de consumo cotidianas para un estilo de vida saludable.\nAtributos diferenciadores: (1) sin/bajo alcohol y menos calorías (beneficio de salud) manteniendo el sabor; (2) flexibilidad de ocasiones (almuerzo de oficina, cócteles, brindis sin alcohol) que amplía el momento de consumo respecto del vino tradicional.\nCierre: resuelve mejor que las alternativas el problema de querer disfrutar/brindar sin alcohol = promesa clara y diferenciada.",
      tip: "La pauta exige propuesta de valor = beneficio + a quién + por qué es superior; los atributos deben ser DIFERENCIADORES, no características genéricas."
    },
    {
      id: "mkt-fc-074", unidad: "U5", tema: "Caso de examen: etapas del desarrollo de un nuevo producto", salioEnExamen: true,
      frente: "De un caso se infiere que la empresa llevó a cabo un proceso de desarrollo de nuevos productos. Identifique cuatro (4) etapas del proceso y, para cada una, describa dos (2) decisiones o acciones concretas que habría tomado para avanzar a la siguiente etapa.",
      reverso: "Generación y filtrado de ideas: detectar la tendencia (ej. moderación del alcohol) y descartar ideas inviables.\nDesarrollo y prueba de concepto: definir la fórmula (mantener el sabor con bajo alcohol) y testearla con consumidores.\nAnálisis de negocio: estimar demanda, costos y rentabilidad; validar las nuevas ocasiones de consumo.\nPrueba de mercado y comercialización: lanzar en un mercado o variedad piloto, ajustar y luego escalar con distribución y comunicación.\n(Cada etapa con dos acciones concretas y encadenadas.)",
      tip: "La pauta valora que las acciones sean CONCRETAS, propias de esa etapa y que expliquen el paso a la siguiente (no definiciones de manual)."
    },
    {
      id: "mkt-fc-075", unidad: "U6", tema: "Caso de examen: comunicaciones integradas de marketing (IMC)", salioEnExamen: true,
      frente: "Proponga tres (3) estrategias de Comunicaciones Integradas de Marketing para posicionar una nueva línea de producto. Para cada una indique la herramienta de comunicación, el objetivo que busca y un ejemplo concreto de aplicación.",
      reverso: "1) Publicidad digital y redes sociales: objetivo, generar conocimiento del lanzamiento; ej. campaña en Instagram con creadores de contenido de vida saludable.\n2) Promoción de ventas y degustaciones: objetivo, inducir la prueba; ej. muestras y descuento de introducción en supermercados y eventos.\n3) Relaciones públicas y marketing de contenidos: objetivo, construir posicionamiento y credibilidad; ej. notas de prensa y recetas de cócteles sin alcohol.\nTodo con mensaje consistente (claridad, consistencia y relevancia) en cada canal.",
      tip: "La pauta exige las TRES partes por estrategia: herramienta + objetivo + ejemplo; y coherencia con el público objetivo del caso."
    },
    {
      id: "mkt-fc-076", unidad: "U7", tema: "Caso de examen: puntos de contacto del customer journey", salioEnExamen: true,
      frente: "Para una compra presencial en una tienda de retail, identifique y describa dos (2) puntos de contacto del Customer Journey Map en cada una de las etapas: precompra, compra y postcompra.",
      reverso: "Precompra: (1) publicidad, redes o web que dan a conocer la oferta; (2) búsqueda de información, reseñas y consulta de stock.\nCompra: (1) experiencia en tienda (layout, señalética, zonas interactivas); (2) atención del vendedor y proceso de pago ágil.\nPostcompra: (1) seguimiento y soporte (garantía, cambios); (2) encuesta de satisfacción y comunicación de fidelización (email o app).\nCada punto es una interacción concreta cliente-empresa que influye en la experiencia.",
      tip: "La pauta premia puntos de contacto REALES por etapa (no confundir la etapa con el touchpoint) y que aporten a una experiencia positiva y coherente."
    },
    {
      id: "mkt-fc-077", unidad: "U7", tema: "Caso de examen: plan de fidelización (objetivo, indicador, mensaje y canales)", salioEnExamen: true,
      frente: "Para fidelizar a clientes que no compran hace más de seis meses, se le pide: (a) fijar un objetivo concreto, (b) construir un indicador para medirlo, (c) diseñar el mensaje de fidelización y (d) indicar al menos dos canales adecuados al perfil.",
      reverso: "a) Objetivo: aumentar la tasa de retorno de esos clientes (ej. que el 20% vuelva a comprar en 3 meses). Una acción de marketing NO es un objetivo.\nb) Indicador: tasa de retorno o recompra, NPS o % de clientes reactivados.\nc) Mensaje: con call to action personalizado, ej. \"Te extrañamos: vuelve y disfruta un beneficio exclusivo pensado para ti\".\nd) Canales dirigidos: email, SMS o llamada/WhatsApp (NO medios masivos como la TV, por costo y por no apuntar al perfil solicitado).",
      tip: "La pauta castiga confundir objetivo con acción y usar medios masivos cuando el público es acotado y conocido (se exige canal directo)."
    },
    {
      id: "mkt-fc-078", unidad: "U5", tema: "Caso de examen: precio y ciclo de vida de un producto pionero", salioEnExamen: true,
      frente: "Una empresa introduce en un país una categoría de bebida totalmente nueva, de la que el consumidor no tiene referencias de precio. Explique en qué etapa del ciclo de vida se encuentra y qué estrategia de precios conviene y por qué.",
      reverso: "Etapa: introducción del ciclo de vida (ventas bajas, hay que crear conciencia y educar al consumidor; casi no hay competencia directa).\nEstrategia de precio: conviene el DESCREMADO (skimming), un precio ALTO inicial. Al ser pionero no hay competencia que obligue a bajar el precio y el consumidor no tiene referencia, así que se capta primero a los innovadores y early adopters (dispuestos a pagar) y se recupera la inversión en educar el mercado y distribuir. Ese precio alto se sostiene en el VALOR percibido, no en la competencia. (La penetración —precio bajo para masificar rápido— se descarta: sin competencia no se necesita y sacrificaría margen.)\nAl madurar la categoría (entran competidores y el consumidor ya puede comparar), se baja el precio por etapas y se refuerza marca y diferenciación en vez de competir solo por precio.",
      tip: "Pionero en introducción → DESCREMADO (precio alto): sin competencia ni referencia, se captura a los early adopters y se recupera la inversión. Penetración se descarta. Al madurar, baja el precio."
    }
  ]
};
