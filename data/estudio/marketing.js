// Módulo de estudio — MARKETING (flashcards con repaso espaciado)
// Contenido derivado del resumen del ramo y VALIDADO contra fuentes estándar
// (Kotler & Armstrong, Kotler & Keller, Aaker, Rogers, Porter, Ansoff, BCG).
// Correcciones / precisiones aplicadas sobre los apuntes originales:
//   - MEZCLA PROMOCIONAL: el apunte omite la "venta personal", elemento clásico
//     del promotion mix de Kotler. Se añadió (publicidad, promoción de ventas,
//     venta personal, relaciones públicas, marketing directo/digital).
//   - NECESIDAD vs DESEO vs DEMANDA: el apunte solo menciona "necesidades"; se
//     agrega la distinción clásica de Kotler (necesidad → deseo → demanda).
//   - EQUIDAD DE MARCA: los 5 componentes del apunte (reconocimiento,
//     asociaciones, lealtad, calidad percibida, otros activos) corresponden al
//     modelo de brand equity de David AAKER; se atribuye explícitamente.
//   - NIVELES DE PRODUCTO: el apunte usa el modelo simplificado de 3 niveles
//     (básico/central, real, aumentado). Kotler describe hasta 5 (suma esperado
//     y potencial); se conserva el de 3 por ser el enseñado, con la nota.
//   - REQUISITOS DE UN SEGMENTO y ESTRATEGIAS DE COBERTURA: se enriquecen con los
//     criterios estándar de Kotler (medible, accesible, sustancial, diferenciable,
//     accionable) y las 3 coberturas (indiferenciado, diferenciado, concentrado).
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
    { id: "U4", titulo: "Mezcla de Marketing (4P y 7P)" },
    { id: "U5", titulo: "Marca, Posicionamiento y Propuesta de Valor" },
    { id: "U6", titulo: "Experiencia del Cliente, Fidelización y Métricas" }
  ],
  tarjetas: [
    // ============ U1 · CONDUCTA DEL CONSUMIDOR Y ADOPCIÓN ============
    {
      id: "mkt-fc-001", unidad: "U1", tema: "Conducta del consumidor",
      frente: "¿Qué es la conducta del consumidor y por qué importa estudiarla?",
      reverso: "Es cómo y por qué las personas deciden comprar y usar productos y servicios. Estudiarla permite satisfacer mejor sus necesidades, diseñar estrategias de marketing más efectivas y aumentar la lealtad del cliente.",
      tip: "Entender al consumidor es la base de TODAS las decisiones de marketing."
    },
    {
      id: "mkt-fc-002", unidad: "U1", tema: "Comportamiento vs mentalidad",
      frente: "Diferencia entre comportamiento y mentalidad del consumidor.",
      reverso: "Comportamiento: las acciones observables de compra y uso (qué hace). Mentalidad: los pensamientos, creencias y percepciones sobre productos y marcas (qué piensa y siente).",
      tip: ""
    },
    {
      id: "mkt-fc-003", unidad: "U1", tema: "Necesidad, deseo y demanda",
      frente: "Distingue necesidad, deseo y demanda (Kotler).",
      reverso: "Necesidad: carencia básica (hambre, seguridad, pertenencia). Deseo: la forma que toma esa necesidad moldeada por la cultura y la persona (querer una hamburguesa). Demanda: deseo respaldado por poder de compra.",
      tip: "El marketing NO crea necesidades: las detecta y orienta el deseo hacia una oferta."
    },
    {
      id: "mkt-fc-004", unidad: "U1", tema: "Preferencias del consumidor",
      frente: "¿Qué son las preferencias de producto, canal y marca?",
      reverso: "Producto: por qué elige unos productos sobre otros. Canal: dónde prefiere comprar (tienda física, online, app). Marca: tendencia a preferir ciertas marcas por confianza o valor percibido.",
      tip: ""
    },
    {
      id: "mkt-fc-005", unidad: "U1", tema: "Psicología del consumidor",
      frente: "Nombra factores psicológicos que influyen en la compra.",
      reverso: "Necesidades, persuasión (cómo la empresa influye en la decisión), emociones (sentimientos que evoca el producto), sentimientos (estados emocionales más duraderos, como confianza y lealtad), y las acciones finales (comprar, recomendar, abandonar).",
      tip: "Emoción = momentánea; sentimiento = duradero. La lealtad es un sentimiento."
    },
    {
      id: "mkt-fc-006", unidad: "U1", tema: "Difusión de innovaciones",
      frente: "¿Qué describe la teoría de difusión de innovaciones de Everett Rogers?",
      reverso: "El proceso y el ritmo con que una innovación se difunde en una población. Clasifica a los consumidores en cinco categorías de adoptantes según su rapidez para adoptar novedades.",
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
      id: "mkt-fc-011", unidad: "U2", tema: "Segmentación de mercado",
      frente: "¿Qué es la segmentación de mercado y cuál es su propósito?",
      reverso: "Dividir un mercado en grupos más pequeños y homogéneos de consumidores con necesidades o comportamientos similares. Permite entender mejor al cliente, optimizar recursos, aumentar la satisfacción y ganar ventaja competitiva.",
      tip: "\"No se puede satisfacer a todos por igual\": segmentar es elegir a quién servir mejor."
    },
    {
      id: "mkt-fc-012", unidad: "U2", tema: "Modelo STP",
      frente: "¿Qué significa el modelo STP?",
      reverso: "Segmentation, Targeting, Positioning: 1) Segmentar (dividir el mercado), 2) Seleccionar el mercado objetivo (targeting) y 3) Posicionar la oferta en la mente del cliente elegido. Es la secuencia central de la estrategia de marketing.",
      tip: "Primero se DIVIDE, luego se ELIGE, y por último se POSICIONA."
    },
    {
      id: "mkt-fc-013", unidad: "U2", tema: "Bases de segmentación",
      frente: "¿Cuáles son las 4 bases clásicas de segmentación?",
      reverso: "Geográfica (ubicación, clima, región), Demográfica (edad, género, ingresos, educación), Psicográfica (estilo de vida, personalidad, valores) y Conductual (uso, beneficios buscados, lealtad).",
      tip: "Gancho: Geo-Demo-Psico-Conductual."
    },
    {
      id: "mkt-fc-014", unidad: "U2", tema: "Segmentación psicográfica vs conductual",
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

    // ============ U4 · MEZCLA DE MARKETING (4P Y 7P) ============
    {
      id: "mkt-fc-027", unidad: "U4", tema: "Marketing mix / 4P",
      frente: "¿Qué es el marketing mix y cuáles son las 4P?",
      reverso: "Conjunto de herramientas tácticas que la empresa combina para lograr la respuesta deseada del mercado objetivo: Producto, Precio, Plaza (distribución) y Promoción (comunicación).",
      tip: "Las 4P son la caja de herramientas TÁCTICA que ejecuta la estrategia de posicionamiento."
    },
    {
      id: "mkt-fc-028", unidad: "U4", tema: "Producto vs servicio y niveles",
      frente: "¿Cuáles son los tres niveles de producto?",
      reverso: "Producto básico o central (la necesidad de fondo que satisface, ej. transporte), Producto real (características tangibles: diseño, marca, calidad) y Producto aumentado (beneficios extra: garantía, postventa, financiamiento). Un servicio es un beneficio intangible.",
      tip: "Kotler amplía a 5 niveles (suma esperado y potencial); el modelo enseñado usa 3."
    },
    {
      id: "mkt-fc-029", unidad: "U4", tema: "Desarrollo de nuevos productos",
      frente: "¿Cuáles son las etapas del desarrollo de un nuevo producto?",
      reverso: "Generación de ideas → filtrado de ideas → desarrollo y prueba de concepto → estrategia de marketing → análisis de negocio (viabilidad) → desarrollo del producto → prueba de mercado → comercialización (lanzamiento).",
      tip: "El filtrado temprano evita gastar en ideas inviables (\"matar rápido lo que no sirve\")."
    },
    {
      id: "mkt-fc-030", unidad: "U4", tema: "Líneas y mezcla de productos",
      frente: "Diferencia entre línea de productos y mezcla de productos.",
      reverso: "Línea de productos: grupo de productos relacionados dirigidos al mismo segmento (ej. champú + acondicionador + gel). Mezcla (o cartera): el conjunto completo de todas las líneas que ofrece la empresa.",
      tip: ""
    },
    {
      id: "mkt-fc-031", unidad: "U4", tema: "Ciclo de vida del producto",
      frente: "¿Cuáles son las 4 etapas del ciclo de vida del producto (CVP)?",
      reverso: "Introducción (ventas bajas, alta inversión, crear conciencia), Crecimiento (ventas suben rápido, mejora la rentabilidad), Madurez (ventas se estabilizan, competencia intensa) y Declive (caen las ventas por obsolescencia o sustitutos).",
      tip: "Cada etapa exige distinta estrategia de las 4P."
    },
    {
      id: "mkt-fc-032", unidad: "U4", tema: "Estrategias por etapa del CVP",
      frente: "¿Qué estrategia conviene en cada etapa del ciclo de vida?",
      reverso: "Introducción: crear conciencia (penetración o descremado). Crecimiento: ampliar distribución y mejorar el producto. Madurez: diferenciar y fidelizar. Declive: reducir costos, cosechar (harvesting), enfocar en nichos o retirar.",
      tip: ""
    },
    {
      id: "mkt-fc-033", unidad: "U4", tema: "Factores del precio",
      frente: "¿Qué factores influyen en la fijación de precios?",
      reverso: "Costos (producción, distribución, marketing), demanda y sensibilidad al precio (elasticidad), precios de la competencia, objetivos de marketing (utilidad, cuota, supervivencia) y factores externos (regulación, economía).",
      tip: "El precio es la única P que genera INGRESOS; las demás generan costos."
    },
    {
      id: "mkt-fc-034", unidad: "U4", tema: "Métodos de fijación de precios",
      frente: "¿Cuáles son los tres enfoques base para fijar precios?",
      reverso: "Basado en costos (costo más margen), basado en el valor (según la percepción de valor del cliente, ej. perfume premium) y basado en la competencia (alinear precios a los rivales).",
      tip: "La fijación por valor suele capturar más margen que la de costo más margen."
    },
    {
      id: "mkt-fc-035", unidad: "U4", tema: "Penetración vs descremado",
      frente: "Diferencia entre estrategia de penetración y de descremado.",
      reverso: "Penetración: precio inicial BAJO para ganar cuota de mercado rápido. Descremado (skimming): precio inicial ALTO para captar a quienes pagan más y luego bajarlo por etapas (ej. lanzamiento de smartphones).",
      tip: "Penetración = volumen; descremado = margen por segmentos sucesivos."
    },
    {
      id: "mkt-fc-036", unidad: "U4", tema: "Plaza y canales",
      frente: "¿Qué es la Plaza y cuál es la diferencia entre canal directo e indirecto?",
      reverso: "Plaza = canales de distribución que llevan el producto del fabricante al consumidor. Directo: sin intermediarios (venta propia online). Indirecto: con intermediarios (mayoristas, minoristas, agentes/brokers).",
      tip: "Agentes y brokers facilitan la venta pero NO toman posesión del producto."
    },
    {
      id: "mkt-fc-037", unidad: "U4", tema: "Estrategias de distribución",
      frente: "¿Cuáles son las 3 estrategias de intensidad de distribución?",
      reverso: "Intensiva (máximos puntos de venta posibles; ej. bebidas y snacks), Selectiva (número limitado de puntos; ej. electrónica de gama alta) y Exclusiva (uno o pocos puntos seleccionados; ej. marcas de lujo como Rolex).",
      tip: "Omnicanal: integrar todos los canales (físico, online, app) en una experiencia coherente."
    },
    {
      id: "mkt-fc-038", unidad: "U4", tema: "Mezcla promocional",
      frente: "¿Cuáles son los elementos de la mezcla de comunicación (promoción)?",
      reverso: "Publicidad (pagada, medios masivos y digitales), promoción o incentivos de ventas (descuentos, cupones, concursos), venta personal, relaciones públicas y marketing directo. Rol: informar, persuadir y recordar.",
      tip: "El apunte omite la VENTA PERSONAL: es un elemento clásico del promotion mix de Kotler."
    },
    {
      id: "mkt-fc-039", unidad: "U4", tema: "7P (marketing de servicios)",
      frente: "¿Qué tres P añade el marketing de servicios a las 4P?",
      reverso: "Personas (quienes prestan el servicio y su marketing interno), Procesos (los pasos del servicio y su eficiencia) y Evidencia física (elementos tangibles: instalaciones, uniformes, empaque, documentación que forman la percepción).",
      tip: "Las 7P (Booms & Bitner) surgen porque los servicios son intangibles y se producen frente al cliente."
    },
    {
      id: "mkt-fc-040", unidad: "U4", tema: "Evidencia física",
      frente: "¿Qué es la evidencia física y para qué sirve?",
      reverso: "Los elementos tangibles que el cliente ve, toca y experimenta (ambiente, apariencia del personal, materiales, empaque, documentación). Da confianza y credibilidad, diferencia la marca y sube la percepción de valor.",
      tip: "Clave en servicios: como el servicio es intangible, lo tangible \"prueba\" su calidad."
    },

    // ============ U5 · MARCA, POSICIONAMIENTO Y PROPUESTA DE VALOR ============
    {
      id: "mkt-fc-041", unidad: "U5", tema: "Concepto de marca",
      frente: "¿Qué es una marca?",
      reverso: "Es más que un nombre o un logo: es la percepción general y el conjunto de asociaciones que los consumidores tienen de una empresa, producto o servicio; crea una imagen distintiva en su mente.",
      tip: "\"La marca vive en la mente del consumidor, no en el producto.\""
    },
    {
      id: "mkt-fc-042", unidad: "U5", tema: "Identidad de marca",
      frente: "¿Qué es la identidad de marca y qué elementos incluye?",
      reverso: "El conjunto de elementos que representan y diferencian a la marca: nombre, logo, colores, tipografía, eslogan y tono de comunicación. Es lo que la empresa PROYECTA para ser reconocida.",
      tip: "Identidad = lo que la marca emite; imagen = lo que el consumidor percibe."
    },
    {
      id: "mkt-fc-043", unidad: "U5", tema: "Equidad de marca (brand equity)",
      frente: "¿Qué es la equidad de marca y sus componentes (modelo de Aaker)?",
      reverso: "El valor adicional que una marca aporta a un producto. Aaker la compone de: reconocimiento de marca, asociaciones de marca, lealtad a la marca, calidad percibida y otros activos (patentes, marcas registradas).",
      tip: "Alta equidad = el cliente paga más y es más leal solo por la marca (ej. Coca-Cola)."
    },
    {
      id: "mkt-fc-044", unidad: "U5", tema: "Gestión de marca",
      frente: "¿Qué es la gestión de marca (branding)?",
      reverso: "El proceso de crear, mantener, mejorar y proteger la identidad y la equidad de la marca. Incluye desarrollo, posicionamiento, comunicación de marca y evaluación/ajuste para mantenerla relevante y competitiva.",
      tip: ""
    },
    {
      id: "mkt-fc-045", unidad: "U5", tema: "Posicionamiento de marca",
      frente: "¿Qué es el posicionamiento de marca?",
      reverso: "El proceso de diseñar la oferta y la imagen de la empresa para ocupar un lugar distintivo y valorado en la mente del público objetivo, frente a los competidores. Define cómo quiere ser percibida.",
      tip: "Posicionar no es ser mejor en todo, sino ocupar un lugar CLARO y DIFERENTE."
    },
    {
      id: "mkt-fc-046", unidad: "U5", tema: "Componentes del posicionamiento",
      frente: "¿Qué componentes definen el posicionamiento de una marca?",
      reverso: "Definición del público objetivo, análisis de la competencia, propuesta de valor única (UVP), beneficios funcionales y emocionales, y una estrategia de comunicación coherente en todos los puntos de contacto.",
      tip: ""
    },
    {
      id: "mkt-fc-047", unidad: "U5", tema: "Declaración de posicionamiento",
      frente: "¿Cómo se estructura una declaración de posicionamiento?",
      reverso: "\"Para [público objetivo] que [necesidad], [marca] ofrece [beneficio clave] a diferencia de [competencia]\". Ej. Volvo: para familias que valoran la seguridad, ofrece vehículos diseñados para máxima seguridad.",
      tip: "Fórmula: Para… que… [marca] es… que… a diferencia de…"
    },
    {
      id: "mkt-fc-048", unidad: "U5", tema: "Beneficios funcionales y emocionales",
      frente: "Diferencia entre beneficios funcionales y emocionales de una marca.",
      reverso: "Funcionales: atributos tangibles y de desempeño (qué HACE el producto). Emocionales: sentimientos y significados intangibles que evoca (ej. Dove vende autoestima, no solo jabón).",
      tip: "Las marcas fuertes combinan ambos: el beneficio emocional fideliza."
    },
    {
      id: "mkt-fc-049", unidad: "U5", tema: "Propuesta de valor",
      frente: "¿Qué es la propuesta de valor y sus componentes?",
      reverso: "Declaración clara de los beneficios únicos que un producto ofrece y cómo resuelve el problema del cliente mejor que las alternativas. Componentes: beneficio principal, resolución del problema y diferenciación.",
      tip: "Es una PROMESA de valor: lo que la empresa se compromete a entregar y el cliente percibe como valioso."
    },
    {
      id: "mkt-fc-050", unidad: "U5", tema: "Importancia del posicionamiento",
      frente: "¿Por qué es importante un buen posicionamiento de marca?",
      reverso: "Diferencia en un mercado saturado, construye conexión emocional y lealtad, da consistencia a todas las comunicaciones y crea valor perceptual que justifica precios más altos.",
      tip: ""
    },

    // ============ U6 · EXPERIENCIA, FIDELIZACIÓN Y MÉTRICAS ============
    {
      id: "mkt-fc-051", unidad: "U6", tema: "Experiencia del cliente",
      frente: "¿Qué es la gestión de la experiencia del cliente (CX)?",
      reverso: "Planificar y controlar cada interacción que el cliente tiene con la marca para asegurar una experiencia positiva y coherente en todos los puntos de contacto, desde el primer conocimiento hasta la postventa.",
      tip: ""
    },
    {
      id: "mkt-fc-052", unidad: "U6", tema: "Viaje del cliente",
      frente: "¿Cuáles son las etapas del viaje del cliente (customer journey)?",
      reverso: "1) Conocimiento (se entera de la marca), 2) Consideración (investiga y compara), 3) Compra (decide), 4) Servicio / postventa (usa el producto y recibe soporte) y 5) Fidelización (repite y recomienda).",
      tip: "El viaje NO termina en la compra: la postventa y la fidelización cierran el ciclo."
    },
    {
      id: "mkt-fc-053", unidad: "U6", tema: "Mapeo del viaje del cliente",
      frente: "¿Qué es el mapeo del viaje del cliente y para qué sirve?",
      reverso: "Crear un mapa visual de todas las interacciones y puntos de contacto entre cliente y empresa. Sirve para identificar oportunidades de mejora y puntos de dolor en cada etapa del viaje.",
      tip: ""
    },
    {
      id: "mkt-fc-054", unidad: "U6", tema: "Retención, recuperación y fidelización",
      frente: "Diferencia entre retención, recuperación y fidelización.",
      reverso: "Retención: mantener a los clientes actuales para que no se vayan. Recuperación: reconquistar a clientes insatisfechos o que se fueron. Fidelización: convertirlos en defensores leales que compran y recomiendan.",
      tip: "Retener cuesta mucho menos que captar un cliente nuevo."
    },
    {
      id: "mkt-fc-055", unidad: "U6", tema: "Técnicas de retención",
      frente: "Nombra técnicas de retención de clientes.",
      reverso: "Programas de fidelidad (puntos, recompensas), comunicación personalizada (según el comportamiento de compra) y mejora continua del producto basada en el feedback del cliente.",
      tip: ""
    },
    {
      id: "mkt-fc-056", unidad: "U6", tema: "Recuperación de clientes (service recovery)",
      frente: "¿Qué técnicas se usan para recuperar clientes insatisfechos?",
      reverso: "Atención proactiva (contactar al insatisfecho para resolver), ofrecer compensaciones (descuentos, reembolsos, servicios extra) y encuestas de satisfacción para entender y corregir el problema.",
      tip: "Una buena recuperación puede dejar al cliente MÁS leal que antes de la falla (paradoja de la recuperación)."
    },
    {
      id: "mkt-fc-057", unidad: "U6", tema: "Gestión de categorías",
      frente: "¿Qué es la gestión de categorías (category management)?",
      reverso: "Proceso colaborativo entre fabricante y minorista que trata cada categoría de productos como una unidad de negocio, para maximizar sus ventas y rentabilidad mediante surtido, precios, promociones y ubicación en el estante.",
      tip: "Es parte del trade marketing: marketing dirigido al canal (intermediarios), no al consumidor final."
    },
    {
      id: "mkt-fc-058", unidad: "U6", tema: "Trade marketing y merchandising",
      frente: "Diferencia entre trade marketing y merchandising.",
      reverso: "Trade marketing: estrategias dirigidas a los INTERMEDIARIOS (mayoristas, minoristas) para impulsar la compra y distribución. Merchandising: técnicas en el PUNTO DE VENTA para promover la venta (exhibiciones, ubicación, promociones).",
      tip: ""
    },
    {
      id: "mkt-fc-059", unidad: "U6", tema: "Medición y ROI de marketing",
      frente: "¿Qué es la medición de la productividad de marketing y qué métricas la componen?",
      reverso: "Evaluar la eficacia y eficiencia del marketing respecto a lo invertido (ROI). Métricas clave: ROI, CPA (costo por adquisición), CLV (valor de vida del cliente), tasa de conversión y tasa de retención.",
      tip: "\"Lo que no se mide, no se puede mejorar.\" El marketing moderno se justifica con métricas."
    },
    {
      id: "mkt-fc-060", unidad: "U6", tema: "CLV, CPA y conversión",
      frente: "¿Qué miden el CLV, el CPA y la tasa de conversión?",
      reverso: "CLV (valor de vida del cliente): valor total que un cliente aporta durante toda su relación con la marca. CPA (costo por adquisición): cuánto cuesta captar un cliente nuevo. Tasa de conversión: % de leads o visitantes que realizan la acción deseada.",
      tip: "Un negocio es sano cuando el CLV supera con holgura al CPA."
    },
    {
      id: "mkt-fc-061", unidad: "U6", tema: "Métricas por tipo",
      frente: "¿Qué tipos de métricas de marketing existen?",
      reverso: "De alcance y visibilidad (impresiones, alcance), de compromiso (likes, comentarios, tiempo en página), de generación de leads, de ventas y conversión, de satisfacción (NPS, encuestas) y financieras (ingresos por campaña, ROI).",
      tip: "El NPS (Net Promoter Score) mide la disposición del cliente a recomendar la marca."
    },
    {
      id: "mkt-fc-062", unidad: "U6", tema: "Frases de examen (marketing)",
      frente: "Frases clave de marketing para el examen.",
      reverso: "\"El marketing detecta y satisface necesidades de forma rentable.\" · \"Primero segmentar, luego elegir, después posicionar (STP).\" · \"Retener un cliente cuesta menos que captar uno nuevo.\" · \"La marca vive en la mente del consumidor.\"",
      tip: ""
    }
  ]
};
