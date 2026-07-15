// Módulo de estudio — ADMINISTRACIÓN (flashcards con repaso espaciado)
// Contenido ALINEADO AL TEMARIO OFICIAL de Administración (autoridad única de alcance):
//   Unidad I  La Organización (organización social, finalidad, stakeholders,
//             roles y habilidades gerenciales, tipos de organizaciones)
//   Unidad II Áreas Funcionales (Comercial, Producción/Operaciones, Gestión de
//             Personas, Finanzas y contable, Nuevas Tendencias)
//   Unidad III Proceso de Gestión (Planificación, Organización, Dirección, Control)
//
// ── QUÉ SE REVISÓ CONTRA EL TEMARIO (2026-07-15) ─────────────────────────────
// ELIMINADO / NO INCLUIDO (por no estar en el temario):
//   - ESCUELAS / historia de la administración (Taylor / administración científica,
//     Fayol / 14 principios, Weber / burocracia, Hawthorne-Mayo / relaciones humanas):
//     se verificó que el módulo NO tenía tarjetas propias de estas escuelas y se
//     mantiene así. Solo se citan autores al pasar cuando sostienen un punto del
//     temario (Mintzberg en roles; Chandler en "estructura sigue a la estrategia";
//     Blake & Mouton, Lewin, Hersey-Blanchard, Maslow, McGregor, Herzberg,
//     McClelland en Dirección) — todos permitidos por el temario.
//   - Se depuró la referencia a FODA del cierre (tarjeta "Qué premian las pautas"):
//     FODA / 5 Fuerzas / BCG pertenecen al eje ESTRATEGIA, no al temario de ADM.
// AGREGADO (puntos del temario que estaban flojos):
//   - Unidad II · Operaciones: tarjeta de CALIDAD (normas ISO y Six Sigma / DMAIC).
//   - Unidad II · Finanzas: tarjeta de ESTRUCTURA Y FUENTES DE FINANCIAMIENTO
//     (internas vs. externas), para reforzar el "Área de Finanzas (y contable)".
//   - Se enriqueció la tarjeta de segmentación con las estrategias de mercado
//     objetivo (indiferenciada / multisegmento / nicho).
// CORRECCIÓN de contenido conservada del apunte original:
//   - El punto ideal "9,9" es del GRID GERENCIAL de Blake & Mouton, NO de los
//     estudios de Michigan (que solo distinguen líder orientado a personas vs. a
//     la producción, sin coordenadas de rejilla).
//
// Formato estricto por tarjeta:
//   { id, unidad, tema, frente, reverso, tip? }
//   frente  = lo que se muestra primero (pregunta / concepto a recordar)
//   reverso = la respuesta ideal, breve y precisa
//   tip     = OPCIONAL: frase de examen o gancho para memorizar
window.ESTUDIO = window.ESTUDIO || {};
window.ESTUDIO.administracion = {
  materia: "Administración",
  nombre: "Administración",
  unidades: [
    { id: "U1", titulo: "La Organización" },
    { id: "U2", titulo: "Áreas Funcionales" },
    { id: "U3", titulo: "Proceso de Gestión: Planificación" },
    { id: "U4", titulo: "Proceso de Gestión: Organización" },
    { id: "U5", titulo: "Proceso de Gestión: Dirección" },
    { id: "U6", titulo: "Proceso de Gestión: Control" }
  ],
  tarjetas: [
    // ===================== U1 · LA ORGANIZACIÓN =====================
    // (Temario I: organización social, finalidad, stakeholders, roles y
    //  habilidades gerenciales, tipos de organizaciones)
    {
      id: "adm-fc-001", unidad: "U1", tema: "Qué es administrar",
      frente: "¿Qué es la administración (definición para memorizar)?",
      reverso: "Proceso de diseñar y mantener un ambiente donde individuos que trabajan en grupos cumplen metas específicas. Es la coordinación y supervisión de las actividades laborales de otros para que se realicen de forma eficiente y eficaz.",
      tip: "Eficiencia + eficacia = alto desempeño."
    },
    {
      id: "adm-fc-002", unidad: "U1", tema: "Eficiencia vs eficacia",
      frente: "Diferencia entre eficiencia y eficacia.",
      reverso: "Eficiencia: hacer las cosas BIEN, con el menor uso de recursos (medios). Eficacia: hacer las cosas CORRECTAS, lograr los objetivos (fines). La buena administración combina ambas.",
      tip: "Eficiencia mira los recursos; eficacia mira las metas."
    },
    {
      id: "adm-fc-003", unidad: "U1", tema: "Productividad",
      frente: "¿Qué es la productividad y cómo se aumenta?",
      reverso: "Es el cociente producción / insumos. Sube si: produzco más con los mismos insumos, uso menos insumos para la misma producción, o subo producción y bajo insumos a la vez.",
      tip: "Es la medida concreta de la eficiencia de la organización."
    },
    {
      id: "adm-fc-004", unidad: "U1", tema: "Organización social",
      frente: "¿Qué es una organización social y cuáles son sus tres características?",
      reverso: "Acuerdo deliberado de personas para llevar a cabo un propósito específico que solas no lograrían. Características: 1) propósito/objetivo común, 2) personas que coordinan sus acciones y 3) estructura deliberada (jerarquía pensada a propósito).",
      tip: ""
    },
    {
      id: "adm-fc-005", unidad: "U1", tema: "Qué es una empresa",
      frente: "¿Qué es una empresa y para qué existen las empresas?",
      reverso: "Medio o herramienta que crean las personas para coordinar acciones y CREAR VALOR (transforman insumos en productos/servicios). Existen para satisfacer necesidades, lograr objetivos, permanecer en el tiempo, conservar experiencia y reducir costos de transacción.",
      tip: "Necesita tres recursos: materiales, humanos y financieros."
    },
    {
      id: "adm-fc-006", unidad: "U1", tema: "Finalidad y objetivos",
      frente: "¿Cuál es la finalidad de la organización y qué tres tipos de objetivos persigue?",
      reverso: "Lograr metas mediante la coordinación de sus recursos. Objetivos: Económicos (rentabilidad, crecimiento), Sociales (bienestar de la comunidad) y Ecológicos (minimizar el impacto ambiental).",
      tip: ""
    },
    {
      id: "adm-fc-007", unidad: "U1", tema: "Stakeholders",
      frente: "¿Qué son los stakeholders y qué busca cada uno?",
      reverso: "Individuos o grupos con interés en la organización. Accionistas: rentabilidad; empleados: estabilidad y buen ambiente; clientes: calidad; proveedores: relaciones justas; comunidad y Estado: aporte social y ambiental. Satisfacerlos es clave para el éxito de largo plazo.",
      tip: "Es la base de las preguntas de RSE, sostenibilidad y cultura."
    },
    {
      id: "adm-fc-008", unidad: "U1", tema: "Niveles de gerentes",
      frente: "¿Cuáles son los tres niveles gerenciales?",
      reverso: "Primera línea (operativo): dirigen a empleados no gerentes, cerca de la producción. Nivel medio (intermedio): dirigen a los de primera línea. Nivel alto (institucional): fijan planes y objetivos de toda la organización, la ven \"como un todo\".",
      tip: ""
    },
    {
      id: "adm-fc-009", unidad: "U1", tema: "Cuatro funciones del gerente",
      frente: "¿Cuáles son las 4 funciones del gerente?",
      reverso: "Planificar (definir objetivos y planes), Organizar (estructurar el trabajo), Dirigir (motivar y liderar a las personas) y Controlar (seguir, comparar y corregir). Son la columna del proceso de gestión (Unidad III).",
      tip: "Planificar → Organizar → Dirigir → Controlar (un ciclo que se retroalimenta)."
    },
    {
      id: "adm-fc-010", unidad: "U1", tema: "Roles de Mintzberg",
      frente: "¿Cuáles son los tres grupos de roles gerenciales de Mintzberg?",
      reverso: "Interpersonales (representante, líder, enlace), Informativos (monitor, difusor, portavoz) y Decisorios (emprendedor, manejador de conflictos, asignador de recursos, negociador).",
      tip: "Son comportamientos que se esperan de un gerente."
    },
    {
      id: "adm-fc-011", unidad: "U1", tema: "Habilidades gerenciales",
      frente: "¿Cuáles son las tres habilidades gerenciales y cómo pesan según el nivel?",
      reverso: "Técnicas (conocimiento de un campo; pesan en niveles inferiores), Humanas (trabajar con personas; importan en TODOS los niveles) y Conceptuales/de diseño (ver la empresa como un todo; pesan en el nivel alto).",
      tip: "Nivel alto: conceptuales + humanas. Nivel inferior: humanas + técnicas."
    },
    {
      id: "adm-fc-012", unidad: "U1", tema: "Tipos de organizaciones",
      frente: "¿Bajo qué criterios se clasifican las organizaciones?",
      reverso: "Por estructura jerárquica (horizontal/plana vs. vertical/piramidal), por fines de lucro (con o sin), por toma de decisiones (centralizada vs. descentralizada), por configuración (Mintzberg) y por sector (pública, privada, mixta).",
      tip: "Sirve para \"etiquetar\" cualquier empresa de un caso."
    },

    // ===================== U2 · ÁREAS FUNCIONALES =====================
    // (Temario II: Comercial, Producción/Operaciones, Gestión de Personas,
    //  Finanzas y contable, Nuevas Tendencias)
    {
      id: "adm-fc-013", unidad: "U2", tema: "Qué es un área funcional",
      frente: "¿Qué es un área funcional y cuáles son las cuatro más relevantes?",
      reverso: "Área de la empresa donde todos trabajan en una misma función; la empresa se divide en áreas para facilitar sus objetivos. Las cuatro clásicas: Comercial, Producción/Operaciones, Gestión de Personas y Finanzas (más las Nuevas Tendencias).",
      tip: ""
    },
    {
      id: "adm-fc-014", unidad: "U2", tema: "Área comercial",
      frente: "¿Qué hace el área comercial y qué diferencia necesidad, deseo y demanda?",
      reverso: "Detecta necesidades insatisfechas, produce lo que se requiere, lo pone a un precio competitivo y lo comunica. Necesidad: carencia básica (hambre). Deseo: bien específico que la cubre (comer). Demanda: deseo con capacidad de compra (comprar en McDonald's).",
      tip: "En una frase: dar valor agregado para satisfacer al consumidor."
    },
    {
      id: "adm-fc-015", unidad: "U2", tema: "Marketing Mix (4P)",
      frente: "¿Qué son las 4 P del Marketing Mix?",
      reverso: "Producto (atributos, diseño, marca, calidad), Precio (según costos y calidad; estrategias descremado, penetración, psicológico, premium), Plaza/distribución (directa o indirecta; intensiva, selectiva, exclusiva) y Promoción (publicidad; estrategias Push y Pull).",
      tip: "Push = empujar vía intermediarios; Pull = generar demanda del cliente final."
    },
    {
      id: "adm-fc-016", unidad: "U2", tema: "Ciclo de vida del producto",
      frente: "¿Cuáles son las etapas del ciclo de vida del producto?",
      reverso: "Introducción → Crecimiento → Madurez → Declive. Las ventas suben, se estabilizan y caen; la estrategia de marketing cambia en cada etapa.",
      tip: ""
    },
    {
      id: "adm-fc-017", unidad: "U2", tema: "Segmentación y posicionamiento",
      frente: "¿Qué son segmentación, mercado objetivo y posicionamiento?",
      reverso: "Segmentación: dividir el mercado en grupos pequeños y homogéneos. Mercado objetivo (target): el segmento donde se centran los esfuerzos, con estrategia indiferenciada (un producto para muchos), multisegmento (uno por segmento) o de nicho (un segmento pequeño). Posicionamiento: el \"lugar que ocupa la marca en la mente del consumidor\".",
      tip: "Bases de segmentación: demográfica, geográfica, psicográfica y conductual."
    },
    {
      id: "adm-fc-018", unidad: "U2", tema: "Área de operaciones",
      frente: "¿Qué cuatro decisiones definen la planificación de operaciones?",
      reverso: "Qué producir (lo define Comercial), Cómo producir (proceso: artesanal, masivo o por proceso), Cuánto producir (capacidad, según demanda y recursos) y Dónde producir (localización de la planta).",
      tip: "Marketing dice QUÉ; Operaciones resuelve cómo, cuánto y dónde."
    },
    {
      id: "adm-fc-019", unidad: "U2", tema: "Características de los servicios",
      frente: "¿Cuáles son las cuatro características de las empresas de servicios?",
      reverso: "Intangibilidad (no se ve/toca antes de comprar), Inseparabilidad (se producen y consumen a la vez), Heterogeneidad (cada uno es distinto, depende de quién lo presta) y Carácter perecedero (no se almacenan).",
      tip: "Gancho: In-In-He-Pe."
    },
    {
      id: "adm-fc-020", unidad: "U2", tema: "Calidad: ISO y Six Sigma",
      frente: "¿Con qué se aseguran los estándares de calidad en el área de operaciones?",
      reverso: "Con las normas ISO (requisitos de producción internacionalmente aceptados que certifican y estandarizan los procesos) y Six Sigma (metodología para mejorar la calidad y reducir defectos, con el ciclo DMAIC: Definir, Medir, Analizar, Mejorar, Controlar).",
      tip: "Ambas viven dentro del Área de Operaciones: buscan procesos estandarizados y con menos errores."
    },
    {
      id: "adm-fc-021", unidad: "U2", tema: "Cadena de Valor (Porter)",
      frente: "¿Qué es la Cadena de Valor de Porter y qué actividades la componen?",
      reverso: "Herramienta que ve la empresa como una serie de actividades que agregan valor. Primarias (logística de entrada, operaciones, logística de salida, marketing y ventas, servicio) crean valor directo; de apoyo (infraestructura, RRHH, tecnología, compras) las habilitan. El fin es el margen.",
      tip: "Es la herramienta que integra todas las áreas funcionales."
    },
    {
      id: "adm-fc-022", unidad: "U2", tema: "Gestión de personas (RRHH)",
      frente: "¿Cuáles son las etapas del proceso de administración de RRHH?",
      reverso: "Planeación de RH → Reclutamiento (o recorte) → Selección → Inducción → Capacitación → Manejo del desempeño → Compensación → Desarrollo de carrera. Fin: identificar, desarrollar y RETENER empleados competentes.",
      tip: "Una buena gestión de personas es ventaja competitiva: capital humano difícil de imitar."
    },
    {
      id: "adm-fc-023", unidad: "U2", tema: "Reclutamiento y selección",
      frente: "Reclutamiento interno vs. externo, y errores de selección.",
      reverso: "Interno: dentro de la empresa (barato, rápido, conozco a la persona). Externo: fuera (trae talento e ideas nuevas, pero caro y lento). Errores de selección: de rechazo (descartar a uno bueno) y de aceptación (contratar a uno malo).",
      tip: "Seleccionar = elegir al de mayor predicción de desempeño en el cargo."
    },
    {
      id: "adm-fc-024", unidad: "U2", tema: "Área de finanzas",
      frente: "¿Cuáles son los estados financieros básicos?",
      reverso: "Balance / Estado de situación financiera (foto estática: activos, pasivos, patrimonio), Estado de resultado (dinámico: ingresos − gastos = utilidad/pérdida), Estado de flujo de caja (liquidez) y Estado de cambios en el patrimonio.",
      tip: "El flujo de caja mide la liquidez (capacidad de pago de corto plazo)."
    },
    {
      id: "adm-fc-025", unidad: "U2", tema: "Financiamiento de la empresa",
      frente: "¿Qué es la estructura de financiamiento y cuáles son sus fuentes?",
      reverso: "Es cómo la empresa financia sus activos combinando capital propio y deuda. Fuentes internas: recursos propios (reinversión de utilidades, emisión de acciones/bonos, nuevos socios). Fuentes externas: de terceros (bancos, créditos, fondos de inversión).",
      tip: "Internas = de la propia empresa; externas = de terceros. Es tarea del Área de Finanzas."
    },
    {
      id: "adm-fc-026", unidad: "U2", tema: "Índices y decisiones de inversión",
      frente: "¿Qué miden los ratios financieros y cómo se evalúan las inversiones de largo plazo?",
      reverso: "Ratios: liquidez (pago de corto plazo), endeudamiento y rentabilidad (ROA sobre activos, ROE sobre patrimonio). Decisiones de inversión de largo plazo: VAN (Valor Actual Neto), TIR (Tasa Interna de Retorno) y Payback (período de recupero).",
      tip: ""
    },
    {
      id: "adm-fc-027", unidad: "U2", tema: "Nuevas tendencias",
      frente: "¿Cuáles son los tres motores de las nuevas tendencias en administración?",
      reverso: "Tecnología (internet, comercio móvil, redes, TI), Globalización (perspectiva internacional del gerente) y Espíritu emprendedor (identificar oportunidades y necesidades no satisfechas). Se suman como transversales la RSE y la Gestión del Conocimiento (aprovechar el capital intelectual).",
      tip: "Tres motores del siglo XXI: tecnología, globalización y emprendimiento."
    },
    {
      id: "adm-fc-028", unidad: "U2", tema: "Interrelación de las áreas",
      frente: "¿Cómo se conectan las áreas funcionales en una respuesta?",
      reverso: "Comercial define QUÉ necesita el mercado → Operaciones lo produce (cómo/cuánto/dónde) → Finanzas provee y controla los recursos → Gestión de Personas pone a QUIÉN lo ejecuta. Todo cruzado por la Cadena de Valor.",
      tip: "Un desajuste en un área rompe la cadena y afecta a las demás."
    },

    // ===================== U3 · PLANIFICACIÓN =====================
    // (Temario III · Planificación: proceso, tipos de planes, relación entre ellos)
    {
      id: "adm-fc-029", unidad: "U3", tema: "Qué es planificar",
      frente: "¿Qué es la planificación y cuál es su secuencia mental?",
      reverso: "Actividad gerencial primordial: definir objetivos, establecer estrategias para lograrlos y desarrollar planes. Secuencia: Objetivos → Estrategias → Planes.",
      tip: "Es la primera de las cuatro funciones y da dirección a las otras tres."
    },
    {
      id: "adm-fc-030", unidad: "U3", tema: "Propósito y beneficios",
      frente: "¿Cuál es el propósito de planificar y qué beneficios aporta?",
      reverso: "Propósito: proporcionar dirección. Beneficios: reduce la incertidumbre, aporta eficiencia y minimiza el desperdicio y la redundancia. La planeación formal (escrita, comunicada, con plazos) aumenta la probabilidad de éxito.",
      tip: ""
    },
    {
      id: "adm-fc-031", unidad: "U3", tema: "Pasos de planificación (Koontz)",
      frente: "¿Cuáles son los pasos del proceso de planificación según Koontz?",
      reverso: "1) Atención a las oportunidades, 2) establecimiento de objetivos, 3) consideración de las premisas, 4) identificación de alternativas, 5) comparación de alternativas, 6) elección de una, 7) formulación de planes de apoyo y 8) conversión en presupuestos (cifras).",
      tip: "Empieza en las oportunidades y termina en los presupuestos."
    },
    {
      id: "adm-fc-032", unidad: "U3", tema: "Tipos de objetivos",
      frente: "¿Qué son los objetivos y qué dos tipos hay?",
      reverso: "Resultados deseados, por escrito y en términos de resultados. Financieros: desempeño interno de la empresa. Estratégicos: desempeño frente a factores externos y competidores (largo plazo).",
      tip: ""
    },
    {
      id: "adm-fc-033", unidad: "U3", tema: "Objetivos SMART",
      frente: "¿Qué significan los objetivos SMART?",
      reverso: "eSpecíficos, Medibles, Alcanzables, Realistas y con Tiempo (plazo límite). Un buen objetivo cumple los cinco.",
      tip: ""
    },
    {
      id: "adm-fc-034", unidad: "U3", tema: "Tradicional vs APO",
      frente: "¿Cómo se fijan los objetivos: método tradicional vs. APO?",
      reverso: "Tradicional (top-down): se fijan arriba y bajan; barato y rápido, pero pierde claridad al bajar. APO / Administración por Objetivos (bottom-up): gerentes y empleados los fijan en conjunto; más motivación y participación, pero más lenta y burocrática.",
      tip: "Tradicional sirve en entornos cambiantes; APO en entornos estables."
    },
    {
      id: "adm-fc-035", unidad: "U3", tema: "Tipos de planes",
      frente: "¿Bajo qué cuatro criterios se clasifican los planes?",
      reverso: "Por alcance (estratégicos vs. operacionales), por marco de tiempo (largo vs. corto plazo), por especificidad (específicos vs. direccionales) y por frecuencia de uso (uso único vs. permanentes).",
      tip: "Caen fácil: memoriza los cuatro pares."
    },
    {
      id: "adm-fc-036", unidad: "U3", tema: "Cascada de planes",
      frente: "¿Cómo se relacionan los tipos de planes entre sí?",
      reverso: "Forman una cascada coherente: los planes estratégicos guían a los tácticos (mediano plazo) y estos a los operativos (corto plazo, día a día). Todos deben estar alineados con los objetivos generales.",
      tip: "Ej.: expansión (estratégico) → abrir oficinas (táctico) → actividades diarias (operativo)."
    },

    // ===================== U4 · ORGANIZACIÓN =====================
    // (Temario III · Organización: estructura de actividad y autoridad,
    //  tipos de departamentalización, centralización y descentralización)
    {
      id: "adm-fc-037", unidad: "U4", tema: "Qué es organizar",
      frente: "¿Qué es organizar y qué relación tiene con la estrategia?",
      reverso: "Distribuir y estructurar el trabajo para cumplir los objetivos: definir qué hacer, cómo y quién lo hará. Regla de oro: la estrategia antecede a la estructura (Estrategia → Estructura).",
      tip: "\"La estructura sigue a la estrategia\" (Chandler)."
    },
    {
      id: "adm-fc-038", unidad: "U4", tema: "Elementos del diseño",
      frente: "¿Cuáles son los seis elementos del diseño de la estructura organizacional?",
      reverso: "1) Especialización del trabajo, 2) departamentalización, 3) cadena de mando, 4) tramo de control, 5) centralización/descentralización y 6) formalización (grado en que reglas y procedimientos estandarizan el comportamiento).",
      tip: ""
    },
    {
      id: "adm-fc-039", unidad: "U4", tema: "Especialización del trabajo",
      frente: "¿Qué es la especialización del trabajo y qué riesgo tiene?",
      reverso: "Grado en que las tareas se dividen en trabajos separados. La SOBRE-especialización genera aburrimiento, fatiga, estrés y rotación (deseconomías humanas).",
      tip: ""
    },
    {
      id: "adm-fc-040", unidad: "U4", tema: "Cadena de mando",
      frente: "¿Qué es la cadena de mando y sus conceptos asociados?",
      reverso: "Línea continua de autoridad de arriba hacia abajo (quién reporta a quién). Autoridad = derecho a mandar; Responsabilidad = obligación de desempeño; Unidad de mando = cada persona reporta a un solo jefe.",
      tip: ""
    },
    {
      id: "adm-fc-041", unidad: "U4", tema: "Tramo de control",
      frente: "¿Qué es el tramo de control?",
      reverso: "Número de empleados que un gerente puede supervisar de forma eficiente. Tramos pequeños → estructura alta y centralizada; tramos amplios → estructura plana y descentralizada.",
      tip: ""
    },
    {
      id: "adm-fc-042", unidad: "U4", tema: "Mecanicista vs orgánica",
      frente: "Diferencia entre estructura mecanicista y orgánica.",
      reverso: "Mecanicista: alta especialización, cadena de mando clara, tramos limitados, centralización y mucha formalización (empresas grandes). Orgánica: equipos interfuncionales, libre flujo de información, tramos amplios, descentralización y poca formalización (empresas pequeñas/innovadoras).",
      tip: "Son las dos estructuras genéricas: rígida vs. flexible."
    },
    {
      id: "adm-fc-043", unidad: "U4", tema: "Diseños tradicionales",
      frente: "¿Cuáles son los diseños organizacionales tradicionales?",
      reverso: "Simple (poca departamentalización, autoridad centralizada; emprendimientos), Funcional (agrupa por función: operación, finanzas, marketing, RRHH) y Divisional (unidades/divisiones semiautónomas bajo una casa matriz).",
      tip: ""
    },
    {
      id: "adm-fc-044", unidad: "U4", tema: "Diseños contemporáneos",
      frente: "¿Cuáles son los diseños organizacionales contemporáneos?",
      reverso: "De equipos (equipos autodirigidos con facultades de decisión), Matricial/de proyectos (especialistas de varias áreas en proyectos; dos jefes) y De red (organización pequeña que externaliza funciones y se concentra en lo que hace mejor).",
      tip: "El de red se asocia a externalizar (freelancers) y a enfoque/diferenciación."
    },
    {
      id: "adm-fc-045", unidad: "U4", tema: "Departamentalización",
      frente: "¿Cuáles son los cinco tipos de departamentalización?",
      reverso: "Funcional (por función; la más usada), Geográfica (por territorio), Por producto (por líneas), Por cliente (por tipo de cliente) y Por procesos (por flujo de producción). Todas comparten un riesgo: la duplicación de funciones y la visión limitada del objetivo global.",
      tip: "Primero identifica el tipo, LUEGO justifica con las pistas del caso."
    },
    {
      id: "adm-fc-046", unidad: "U4", tema: "Departamentalización vs estructura",
      frente: "¿Cuál es la diferencia entre departamentalización y estructura?",
      reverso: "Estructura = el diseño general de la organización (simple, funcional, divisional…). Departamentalización = cómo se agrupan los puestos DENTRO de esa estructura (funcional, geográfica, por producto…). No confundirlas en el examen.",
      tip: ""
    },
    {
      id: "adm-fc-047", unidad: "U4", tema: "Centralización vs descentralización",
      frente: "Diferencia entre centralización y descentralización.",
      reverso: "Centralización: las decisiones se concentran arriba (los de abajo solo ejecutan); va con estructuras piramidales/mecanicistas. Descentralización: decide quien está más cerca de la acción; va con estructuras planas/orgánicas y permite adaptarse mejor a lo local.",
      tip: "Ej.: una cadena centraliza la marca y descentraliza decisiones operativas por sucursal."
    },

    // ===================== U5 · DIRECCIÓN =====================
    // (Temario III · Dirección: liderazgo y motivación)
    {
      id: "adm-fc-048", unidad: "U5", tema: "Qué es dirigir",
      frente: "¿Qué es dirigir y sobre qué tres pilares se apoya?",
      reverso: "Energizar, dirigir y sostener los esfuerzos de las personas hacia una meta, provocando esa energía en los demás. Incluye guiar, comunicar, motivar y manejar conflictos. Se apoya en tres pilares: liderazgo, motivación y comunicación.",
      tip: ""
    },
    {
      id: "adm-fc-049", unidad: "U5", tema: "Liderazgo",
      frente: "¿Qué es el liderazgo?",
      reverso: "Conjunto de habilidades para influir en las personas de modo que los equipos trabajen con entusiasmo hacia las metas. No es lo mismo que autoridad formal: el líder influye, no solo manda.",
      tip: ""
    },
    {
      id: "adm-fc-050", unidad: "U5", tema: "Teoría de los rasgos",
      frente: "¿Qué plantea la teoría de los rasgos del liderazgo?",
      reverso: "Se centra en el LÍDER: ciertos rasgos lo distinguen (confianza, extroversión, deseo de dirigir, honestidad, iniciativa) junto a una alta inteligencia emocional. Supone que el líder \"nace\".",
      tip: ""
    },
    {
      id: "adm-fc-051", unidad: "U5", tema: "Estilos de Iowa (Lewin)",
      frente: "¿Cuáles son los tres estilos de liderazgo de los estudios de Iowa (Lewin)?",
      reverso: "Autocrático (decide solo), Democrático (delega e involucra al grupo) y Liberal/laissez-faire (deja que el grupo decida). Son teorías del comportamiento: el líder \"se hace\".",
      tip: ""
    },
    {
      id: "adm-fc-052", unidad: "U5", tema: "Grid Gerencial (9,9)",
      frente: "¿Qué modelo del liderazgo usa las dos dimensiones \"interés por las personas\" e \"interés por la producción\", con el punto ideal 9,9?",
      reverso: "El Grid o Rejilla Gerencial de Blake & Mouton. Cruza interés por las personas (eje Y) e interés por la producción (eje X); el estilo ideal es el 9,9 (administración en equipo: alto en ambos).",
      tip: "El 9,9 es de Blake & Mouton, NO de los estudios de Michigan (que solo distinguen líder orientado a personas vs. a producción)."
    },
    {
      id: "adm-fc-053", unidad: "U5", tema: "Liderazgo situacional",
      frente: "¿Qué plantea el liderazgo situacional y qué cuatro estilos define?",
      reverso: "El estilo depende de la situación (madurez del seguidor). Combina conducta directiva (define tareas) y de apoyo (participación, motiva), dando cuatro estilos: Dirigir, Persuadir, Participar y Delegar.",
      tip: "Modelo de Hersey-Blanchard."
    },
    {
      id: "adm-fc-054", unidad: "U5", tema: "Transformacional vs carismático",
      frente: "Diferencia entre liderazgo transformacional y carismático.",
      reverso: "Transformacional: transforma a sus seguidores, los inspira a trascender sus intereses y hacer más de lo que creían posible; es mentor y entrenador. Carismático: visión clara y bien comunicada, toma riesgos por ella, apasionado e íntegro; hace cosas fuera de lo común.",
      tip: ""
    },
    {
      id: "adm-fc-055", unidad: "U5", tema: "Motivación y Maslow",
      frente: "¿Qué es la motivación y qué plantea la jerarquía de Maslow?",
      reverso: "Motivación: impulso que energiza, dirige y sostiene el esfuerzo hacia una meta. Maslow: pirámide de necesidades; se satisface primero la base y se sube: fisiológicas → seguridad → sociales → estima → autorrealización.",
      tip: "Una necesidad satisfecha deja de motivar."
    },
    {
      id: "adm-fc-056", unidad: "U5", tema: "Teoría X/Y y Herzberg",
      frente: "¿Qué plantean la Teoría X e Y (McGregor) y la teoría bifactorial (Herzberg)?",
      reverso: "McGregor: X = visión negativa (persona perezosa, hay que dirigirla); Y = visión positiva (disfruta el trabajo, busca responsabilidad). Herzberg: los factores de MOTIVACIÓN (logro, reconocimiento, crecimiento) generan satisfacción; los de HIGIENE (sueldo, condiciones, seguridad) no motivan, pero si faltan generan insatisfacción.",
      tip: "En Herzberg, mejorar la higiene solo quita insatisfacción; no motiva."
    },
    {
      id: "adm-fc-057", unidad: "U5", tema: "McClelland y contemporáneas",
      frente: "¿Cuáles son las tres necesidades de McClelland y qué aportan las teorías contemporáneas?",
      reverso: "McClelland: logro (tareas desafiantes), poder (influir/dirigir) y afiliación (buenas relaciones). Contemporáneas: establecimiento de metas (metas difíciles pero alcanzables motivan más, con compromiso) y equidad (motiva cuando el aporte–recompensa se percibe justo).",
      tip: ""
    },

    // ===================== U6 · CONTROL =====================
    // (Temario III · Control: procesos y sistemas de control, determinación de indicadores)
    {
      id: "adm-fc-058", unidad: "U6", tema: "Qué es controlar",
      frente: "¿Qué es controlar y por qué cierra el ciclo administrativo?",
      reverso: "Dar seguimiento a las actividades para garantizar que se logren conforme a lo planeado y corregir desviaciones. Cierra el ciclo y ALIMENTA de vuelta la planificación (por eso el proceso de gestión es un ciclo).",
      tip: "Sirve para asegurar coherencia, detectar problemas y prevenir desviaciones."
    },
    {
      id: "adm-fc-059", unidad: "U6", tema: "Proceso de control",
      frente: "¿Cuáles son las tres etapas del proceso de control?",
      reverso: "1) Medición del resultado real (monitoreo: observación, informes, muestras), 2) comparación con un estándar (real vs. objetivo fijado en la planeación) y 3) toma de decisiones correctivas (corregir el desempeño o revisar el estándar).",
      tip: "Medir → Comparar → Corregir."
    },
    {
      id: "adm-fc-060", unidad: "U6", tema: "Tipos de control",
      frente: "¿Cuáles son los tres tipos de control según el momento?",
      reverso: "Preventivo (antes del proceso: previene fallas), Concurrente (durante: inspecciona en tiempo real, descarta lo defectuoso) y De retroalimentación/correctivo (después: mide si se cumplió el objetivo y retroalimenta).",
      tip: "Ej.: inspeccionar en la línea = concurrente; revisar el producto terminado = retroalimentación."
    },
    {
      id: "adm-fc-061", unidad: "U6", tema: "Benchmarking",
      frente: "¿Qué es el benchmarking como herramienta de control?",
      reverso: "Comparar el desempeño propio con las mejores prácticas de la industria (o de líderes) para detectar brechas y mejorar. Es una herramienta transversal, junto con el control por áreas (producción, comercial, financiera, RRHH).",
      tip: ""
    },
    {
      id: "adm-fc-062", unidad: "U6", tema: "KPI e indicadores",
      frente: "¿Qué es un KPI y qué tipos de indicadores existen?",
      reverso: "KPI (Key Performance Indicator): herramienta de control que mide cuánto varió el objetivo SMART y si se cumplió. Tipos: financieros (ROI, ROS, costos, ingresos), de proceso (eficiencia, tiempos de ciclo) y de satisfacción (cliente, empleado).",
      tip: "El indicador debe permitir tomar decisiones y hacer seguimiento."
    },
    {
      id: "adm-fc-063", unidad: "U6", tema: "Cómo se arma un KPI",
      frente: "¿Cómo se construye un KPI a partir de un objetivo?",
      reverso: "Objetivo → Meta (con cifra y plazo) → Indicador (fórmula). Ej.: \"aumentar exportaciones\" → \"subir ventas al extranjero 15% en 2024 vs. 2023\" → ventas extranjero (2024/2023) ≥ 1,15.",
      tip: "Sin cifra ni plazo no es meta; sin fórmula no es indicador."
    },
    {
      id: "adm-fc-064", unidad: "U6", tema: "Qué premian las pautas",
      frente: "¿Qué premian transversalmente las pautas del examen de Administración?",
      reverso: "Nombrar + explicar/justificar con el caso (solo nombrar = puntaje parcial). Anclar la respuesta al caso concreto (áreas funcionales, estructura, liderazgo, control, indicadores), identificar antes de justificar (poner la etiqueta correcta primero) y mantener coherencia interna.",
      tip: "Primero pon la etiqueta correcta (área, estructura, tipo), luego argumenta con las pistas del caso."
    }
  ]
};
