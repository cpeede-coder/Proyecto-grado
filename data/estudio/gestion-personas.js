// Módulo de estudio — GESTIÓN DE PERSONAS (flashcards con repaso espaciado)
// Contenido ALINEADO al TEMARIO OFICIAL del Examen de Grado (GDP I: Planificación de la
// dotación, Reclutamiento, Selección, Mantenimiento, Desarrollo y Capacitación, Gestión
// del Desempeño; GDP II: Cambio y Desarrollo Organizacional, Gestión del Cambio, Cultura
// y Clima). Validado contra fuentes estándar de RR.HH. (Chiavenato, Dessler, Werther) y
// los autores del curso (Schein, Lewin, Kotter, Likert, Cameron & Quinn, Tuckman, McKinsey,
// Rousseau & Ten Have).
//
// SE ELIMINÓ (no está en el temario): todo el DERECHO LABORAL CHILENO / Código del Trabajo
//   - Gratificación legal (Art. 47 / Art. 50, tope 4,75 IMM), ingreso mínimo mensual como
//     "ancla legal" de la remuneración → tarjeta borrada; la remuneración se trata solo como
//     política, criterios y alineamiento estratégico.
//   - Franquicia SENCE / OTEC como financiamiento de la capacitación → tarjeta borrada (no
//     es un punto del temario).
//   - Referencia a la Ley Karin en la pauta de cultura → reformulada a "canales de denuncia
//     y comités de convivencia" (acción de gestión, sin normativa legal).
//   - Nota sobre el "valor legal" del descriptor de cargo vs. contrato de trabajo → quitada.
//   - "Rotación" dejó de ser tema propio: se conserva solo como concepto de RETENCIÓN dentro
//     de Mantenimiento.
// SE AGREGÓ (faltaba y está en el temario): utilidad de la descripción de puestos; diseño de
//   reclutamiento alineado al modelo de personas; alineamiento estratégico de la compensación;
//   rol de los líderes en la gestión del cambio.
//
// Formato estricto por tarjeta:
//   { id, unidad, tema, frente, reverso, tip? }
//   frente  = lo que se muestra primero (pregunta / concepto a recordar)
//   reverso = la respuesta ideal, breve y precisa
//   tip     = OPCIONAL: frase de examen o gancho para memorizar
window.ESTUDIO = window.ESTUDIO || {};
window.ESTUDIO["gestion-personas"] = {
  materia: "Gestión de Personas",
  nombre: "Gestión de Personas",
  unidades: [
    { id: "U1", titulo: "Planificación de la Dotación" },
    { id: "U2", titulo: "Reclutamiento y Selección" },
    { id: "U3", titulo: "Mantenimiento: Remuneraciones y Compensaciones" },
    { id: "U4", titulo: "Capacitación y Desarrollo de Carrera" },
    { id: "U5", titulo: "Gestión del Desempeño" },
    { id: "U6", titulo: "Cambio y Desarrollo Organizacional" },
    { id: "U7", titulo: "Cultura y Clima Organizacional" }
  ],
  tarjetas: [
    // ===================== U1 · PLANIFICACIÓN DE LA DOTACIÓN =====================
    {
      id: "gdp-fc-001", unidad: "U1", tema: "Idea transversal",
      frente: "¿Cuál es la idea que el examen premia en toda la Gestión de Personas?",
      reverso: "El alineamiento con la estrategia. Cada subsistema de RR.HH. existe para que las personas correctas, con las capacidades correctas y motivadas de la forma correcta, ejecuten la estrategia del negocio.",
      tip: "Si no sabes cómo cerrar una respuesta, conéctala con la estrategia del negocio."
    },
    {
      id: "gdp-fc-002", unidad: "U1", tema: "Ciclo de subsistemas",
      frente: "Ordena los subsistemas del ciclo de Gestión de Personas.",
      reverso: "Planificar la dotación → reclutar → seleccionar → mantener (compensar) → desarrollar/capacitar → evaluar el desempeño. La evaluación realimenta capacitación, compensación y carrera.",
      tip: "Es un ciclo, no una lista: el desempeño vuelve a alimentar el inicio."
    },
    {
      id: "gdp-fc-003", unidad: "U1", tema: "Estructura organizacional",
      frente: "¿Qué es la estructura organizacional?",
      reverso: "La forma en que la empresa se organiza para alcanzar sus objetivos: cómo se dividen, agrupan y coordinan las actividades. Puede ser formal (jerarquías y responsabilidades definidas) o informal (relaciones espontáneas).",
      tip: "\"La estructura sigue a la estrategia\" (Chandler)."
    },
    {
      id: "gdp-fc-004", unidad: "U1", tema: "Criterios de diseño estructural",
      frente: "¿Cuáles son los 4 criterios de diseño de la estructura?",
      reverso: "1) Formalización (cuán escritas están las reglas). 2) Centralización (cuánto se concentran las decisiones arriba). 3) Departamentalización (cómo se agrupan las actividades). 4) Especialización (grado de división del trabajo).",
      tip: "Regla mnemónica: Formalización, Centralización, Departamentalización, Especialización."
    },
    {
      id: "gdp-fc-005", unidad: "U1", tema: "Departamentalización",
      frente: "¿Cuáles son los tipos de departamentalización?",
      reverso: "Funcional (por áreas: finanzas, marketing…), Divisional (por producto, cliente o zona geográfica) y Matricial (doble reporte: funcional + proyecto/producto).",
      tip: "Falabella es divisional (Retail, Banco, Sodimac, Mall Plaza); una PYME familiar suele ser funcional."
    },
    {
      id: "gdp-fc-006", unidad: "U1", tema: "Estructura según modelo de negocio y estrategia",
      frente: "¿Qué estructura conviene según el modelo de negocio y la estrategia?",
      reverso: "Innovación / entorno dinámico → estructuras flexibles, descentralizadas y matriciales. Eficiencia o costos / entorno estable → estructuras formales y centralizadas. Diferenciación o cercanía al cliente → estructuras divisionales por producto o mercado.",
      tip: "Innovar exige flexibilidad; competir en costos exige control."
    },
    {
      id: "gdp-fc-007", unidad: "U1", tema: "Utilidad de la descripción de puestos", salioEnExamen: true,
      frente: "¿Para qué sirve describir los puestos (su utilidad)?",
      reverso: "Permite saber qué tareas hace un cargo y qué se requiere de quien lo desempeña. Ordena la estructura, sirve para valorizar los puestos, planificar la dotación y da la base para reclutar, seleccionar, evaluar y compensar.",
      tip: "Sin descripción de puestos, todos los demás subsistemas trabajan a ciegas."
    },
    {
      id: "gdp-fc-008", unidad: "U1", tema: "Descripción vs. especificación", salioEnExamen: true,
      frente: "Diferencia entre descripción y especificación (perfil) del cargo.",
      reverso: "Descripción del cargo = QUÉ hace el puesto (tareas, responsabilidades, cómo y por qué). Especificación o perfil = QUÉ necesita la persona (estudios, experiencia, conocimientos, competencias).",
      tip: "Descripción = el puesto; especificación = la persona."
    },
    {
      id: "gdp-fc-009", unidad: "U1", tema: "Enfoque tradicional vs. por competencias",
      frente: "¿En qué se diferencia el análisis de cargos tradicional del enfoque por competencias?",
      reverso: "Tradicional: se centra en QUÉ hace (tareas y obligaciones), foco en cumplir funciones. Por competencias: se centra en CÓMO lo hace (habilidades, actitudes, conductas observables), foco en desarrollo. Este último se alinea mejor con la estrategia.",
      tip: "No basta con hacer las tareas: importa si esas conductas construyen la ventaja competitiva."
    },
    {
      id: "gdp-fc-010", unidad: "U1", tema: "Tipos de cargos",
      frente: "Nombra los tipos de cargos según su impacto en los resultados.",
      reverso: "Directivos (deciden la estrategia), Gerenciales (implementan y supervisan), Operativos (producen y entregan), Administrativos (información y soporte), Especializados (expertise técnico crítico) y Temporales (flexibilidad y bajo costo).",
      tip: "Si la ventaja es innovación, se cuidan los especializados y directivos; si es costo, la eficiencia de los operativos."
    },

    // ===================== U2 · RECLUTAMIENTO Y SELECCIÓN =====================
    {
      id: "gdp-fc-011", unidad: "U2", tema: "Reclutar vs. seleccionar",
      frente: "¿Qué diferencia hay entre reclutar y seleccionar?",
      reverso: "Reclutar es ATRAER candidatos: genera el pool a partir del perfil del cargo y del modelo de personas. Seleccionar es ELEGIR al que mejor calza con el puesto y con la estrategia.",
      tip: "Reclutamiento llena el embudo; selección decide quién pasa."
    },
    {
      id: "gdp-fc-012", unidad: "U2", tema: "Interno vs. externo", salioEnExamen: true,
      frente: "Compara el reclutamiento interno y el externo.",
      reverso: "Interno: cubrir con gente de la empresa (ascensos, movilidad). Menor costo, sube moral y lealtad, menos capacitación. Externo: atraer talento de fuera (portales, ferias, referidos). Ideas frescas, mayor diversidad, llena vacíos de habilidades.",
      tip: "Cultura fuerte / continuidad → interno. Necesidad de reinventarse → externo."
    },
    {
      id: "gdp-fc-013", unidad: "U2", tema: "Modelo de personas",
      frente: "¿Qué es el \"modelo de personas\" de una empresa?",
      reverso: "El perfil ideal del empleado según competencias, valores y cultura. No es solo \"qué sabe hacer\", sino \"qué tipo de persona encaja aquí\".",
      tip: "Una fintech atrae perfiles creativos y tolerantes a la ambigüedad; un banco tradicional, perfiles rigurosos y orientados al detalle."
    },
    {
      id: "gdp-fc-014", unidad: "U2", tema: "Reclutamiento alineado al modelo de personas",
      frente: "¿Cómo se diseña el reclutamiento en alineamiento con el modelo de personas?",
      reverso: "Se define primero el perfil ideal (competencias, valores y cultura) y desde ahí se eligen los canales y el mensaje: qué talento buscar, dónde buscarlo y cómo atraerlo, de modo que quienes lleguen ya calcen con el tipo de persona que la empresa necesita para su estrategia.",
      tip: "El reclutamiento no busca \"cualquiera\": filtra desde el inicio según el modelo de personas."
    },
    {
      id: "gdp-fc-015", unidad: "U2", tema: "Reclutamiento por redes",
      frente: "¿Qué ventajas aporta el reclutamiento por redes sociales?",
      reverso: "Alcance amplio e interactividad (compromiso con candidatos), evaluación previa de perfiles (LinkedIn muestra la trayectoria) y segmentación de campañas (Meta apunta a audiencias específicas).",
      tip: "Ejemplos chilenos: LinkedIn (profesionales), GetOnBoard (tech), Laborum / Trabajando.com / Chiletrabajos (masivos)."
    },
    {
      id: "gdp-fc-016", unidad: "U2", tema: "Etapas de la selección", salioEnExamen: true,
      frente: "¿Cuáles son las etapas del proceso de selección?",
      reverso: "1) Definir el perfil. 2) Atraer candidatos. 3) Evaluación (pruebas, entrevistas, assessment). 4) Selección final (decisión). 5) Integración (inducción y socialización).",
      tip: "El proceso no termina al firmar: la integración también es selección bien hecha."
    },
    {
      id: "gdp-fc-017", unidad: "U2", tema: "Selección según estrategia",
      frente: "¿Cómo se alinea la selección con la estrategia?",
      reverso: "Innovación → competencias de creatividad y adaptabilidad, pruebas más abiertas. Eficiencia/costos → confiabilidad y ajuste a procedimientos. Cargos estratégicos → procesos largos y rigurosos. Cargos operativos/temporales → procesos ágiles y estandarizados.",
      tip: "En cargos estratégicos el error cuesta caro: se justifica invertir más en el proceso."
    },
    {
      id: "gdp-fc-018", unidad: "U2", tema: "Ajuste cultural", salioEnExamen: true,
      frente: "Además del calce técnico, ¿qué determina el éxito de una contratación?",
      reverso: "El ajuste cultural: que el candidato comparta los valores y encaje en la cultura. Un candidato brillante que no comparte los valores suele fracasar igual.",
      tip: "\"Se contrata por competencias y se retiene por valores.\""
    },
    {
      id: "gdp-fc-019", unidad: "U2", tema: "Entrevistas",
      frente: "Diferencia entre entrevista preliminar y de selección, y sus condiciones para evaluar potencial.",
      reverso: "Preliminar: filtra requisitos básicos; estructurada, breve, ambiente relajado (ej.: telefónica o por video). De selección: evalúa en profundidad competencias y ajuste cultural; preguntas situacionales/conductuales, a veces en panel. Para evaluar potencial de verdad se usa la entrevista por competencias.",
      tip: "El comportamiento pasado predice mejor el potencial que la autopercepción."
    },
    {
      id: "gdp-fc-020", unidad: "U2", tema: "Técnica STAR",
      frente: "¿Qué es la técnica STAR en la entrevista por competencias?",
      reverso: "Situación – Tarea – Acción – Resultado. En vez de \"¿eres bueno en equipo?\", se pide \"cuéntame una situación real de conflicto en tu equipo y qué hiciste\". El comportamiento pasado predice mejor el potencial.",
      tip: "STAR pide un caso real, no una autopercepción."
    },

    // ===================== U3 · MANTENIMIENTO: REMUNERACIONES Y COMPENSACIONES =====================
    {
      id: "gdp-fc-021", unidad: "U3", tema: "Qué es mantenimiento",
      frente: "¿Qué abarca el subsistema de \"mantenimiento\"?",
      reverso: "Todo lo que hace la empresa para RETENER y MOTIVAR al talento. Su corazón son las remuneraciones y compensaciones. Es una de las unidades más preguntadas del examen.",
      tip: "Si el mantenimiento falla, la gente se va (rotación no deseada)."
    },
    {
      id: "gdp-fc-022", unidad: "U3", tema: "Criterios de remuneración",
      frente: "¿Cuáles son los criterios que rigen una política de remuneraciones?",
      reverso: "Equidad interna (consistencia entre roles similares; se logra valorizando puestos), Equidad externa o competitividad (competir con el mercado; se logra con benchmark salarial) y Rendimiento (parte ligada al desempeño individual y organizacional).",
      tip: "Equidad interna evita percepción de injusticia; equidad externa evita fuga."
    },
    {
      id: "gdp-fc-023", unidad: "U3", tema: "Características de la remuneración",
      frente: "¿Qué dos características debe tener un buen sistema de remuneraciones?",
      reverso: "Transparencia (claridad en cómo se fijan los sueldos) y flexibilidad (capacidad de ajustarse a cambios del negocio y del mercado).",
      tip: ""
    },
    {
      id: "gdp-fc-024", unidad: "U3", tema: "Compensación total", salioEnExamen: true,
      frente: "¿Cuáles son las tres capas de la compensación total (monetaria vs. no monetaria)?",
      reverso: "A) Monetaria DIRECTA (sueldo base, bonos, participación en utilidades). B) Monetaria INDIRECTA (beneficios: seguros, licencias, apoyo a la formación). C) NO monetaria o salario emocional (flexibilidad, reconocimiento, propósito).",
      tip: "TRAMPA del examen: la respuesta SIEMPRE debe incluir la monetaria directa, es la base del sistema."
    },
    {
      id: "gdp-fc-025", unidad: "U3", tema: "Monetaria directa", salioEnExamen: true,
      frente: "¿Qué incluye la compensación monetaria directa y por qué es la base?",
      reverso: "Sueldo base competitivo (justo vs. mercado y equitativo internamente), bonos por metas individuales/colectivas y participación en utilidades / stock options. Es la base porque sostiene todo el sistema: sin ella, los demás beneficios no retienen.",
      tip: "Justicia externa evita fuga; justicia interna evita percepción de trato injusto; bonos fomentan meritocracia."
    },
    {
      id: "gdp-fc-026", unidad: "U3", tema: "Monetaria indirecta",
      frente: "¿Qué es la compensación monetaria indirecta (beneficios)?",
      reverso: "Beneficios de valor económico que no son sueldo: seguro de salud complementario, dental o mental; licencias extendidas; bonos de conectividad/transporte; apoyo a la formación (becas, cursos); días extra de descanso.",
      tip: "Reduce el estrés financiero y muestra que la empresa se preocupa por la persona."
    },
    {
      id: "gdp-fc-027", unidad: "U3", tema: "Salario emocional", salioEnExamen: true,
      frente: "¿Qué es la compensación no monetaria o \"salario emocional\"?",
      reverso: "Beneficios de bienestar y sentido: trabajo remoto/híbrido, flexibilidad horaria, espacios para innovar y aprender, bienestar emocional, reconocimiento y feedback frecuente, propósito organizacional claro.",
      tip: "La generación joven no trabaja solo por dinero, sino por sentido y balance vida-trabajo."
    },
    {
      id: "gdp-fc-028", unidad: "U3", tema: "Alineamiento estratégico de la compensación", salioEnExamen: true,
      frente: "¿Cómo se alinea el esquema de compensación con la estrategia?",
      reverso: "El mix de compensación debe incentivar los comportamientos que la estrategia necesita y retener al talento clave. Ej.: si la ventaja es innovación, pesan la participación en utilidades y la autonomía; si es costo/eficiencia, sueldos competitivos y bonos por productividad.",
      tip: "La política de compensación se diseña hacia atrás desde la estrategia: se paga por lo que se quiere que ocurra."
    },
    {
      id: "gdp-fc-029", unidad: "U3", tema: "Retención y rotación no deseada", salioEnExamen: true,
      frente: "Si el mantenimiento falla y hay rotación no deseada, ¿qué consecuencias tiene?",
      reverso: "Costos de reemplazo, contratación e inducción (pueden superar el 100% del sueldo anual del cargo); baja de productividad en la curva de aprendizaje; sobrecarga de los que quedan (efecto dominó); pérdida de conocimiento crítico; deterioro del clima y del employer branding; riesgo de perder clientes clave.",
      tip: "La rotación es la cara B de la retención: se ANALIZAN las consecuencias (el porqué), no solo se listan."
    },

    // ===================== U4 · CAPACITACIÓN Y DESARROLLO =====================
    {
      id: "gdp-fc-030", unidad: "U4", tema: "Objetivo del desarrollo",
      frente: "¿Qué busca el desarrollo de carrera y la capacitación?",
      reverso: "Cerrar la brecha entre lo que las personas saben hoy y lo que la estrategia necesitará mañana. Preparan a la organización para su futuro, no solo para su presente.",
      tip: ""
    },
    {
      id: "gdp-fc-031", unidad: "U4", tema: "Inducción vs. socialización",
      frente: "Diferencia entre inducción y socialización.",
      reverso: "Inducción: evento formal y acotado que introduce al nuevo a políticas, cultura y expectativas (ej.: programa de bienvenida + mentoría). Socialización: proceso informal y prolongado de \"hacerse parte\" (ej.: team building).",
      tip: "Inducción = un evento; socialización = un proceso."
    },
    {
      id: "gdp-fc-032", unidad: "U4", tema: "Fases de socialización",
      frente: "¿Cuáles son las tres fases de la socialización?",
      reverso: "1) Anticipatoria (expectativas antes de entrar). 2) Encuentro (choque entre expectativa y realidad). 3) Metamorfosis (ajuste pleno, la persona se integra).",
      tip: ""
    },
    {
      id: "gdp-fc-033", unidad: "U4", tema: "Ciclo de capacitación", salioEnExamen: true,
      frente: "¿Cuáles son las etapas del ciclo de capacitación?",
      reverso: "DNC (Detección de Necesidades) → Diseño (objetivos y métodos) → Implementación (ejecutar: cursos, e-learning, talleres, on-the-job) → Evaluación (medir efectividad e impacto).",
      tip: "Es un ciclo: la evaluación realimenta la próxima DNC."
    },
    {
      id: "gdp-fc-034", unidad: "U4", tema: "DNC", salioEnExamen: true,
      frente: "¿Por qué la DNC es la etapa clave del ciclo de capacitación?",
      reverso: "La Detección de Necesidades identifica las brechas reales (con evaluaciones de desempeño, encuestas, indicadores). Si se detecta mal, se capacita en lo que no sirve: se gasta tiempo y dinero sin cerrar la brecha estratégica.",
      tip: "Capacitar sin DNC es dispararle a ciegas al presupuesto."
    },
    {
      id: "gdp-fc-035", unidad: "U4", tema: "ROI de capacitación",
      frente: "¿Cómo se calcula el ROI de una capacitación?",
      reverso: "ROI (%) = (Beneficios − Costos) / Costos × 100. Ejemplo: se invierten $10.000 y las ventas suben $30.000 → ROI = (30.000 − 10.000) / 10.000 × 100 = 200%.",
      tip: "El ROI traduce la capacitación a dinero: es el lenguaje que convence a la gerencia."
    },
    {
      id: "gdp-fc-036", unidad: "U4", tema: "Kirkpatrick", salioEnExamen: true,
      frente: "¿Qué mide el modelo de Kirkpatrick (4 niveles)?",
      reverso: "La efectividad de una capacitación en 4 niveles: 1) Reacción (¿les gustó?), 2) Aprendizaje (¿aprendieron?), 3) Comportamiento (¿lo aplican en el trabajo?), 4) Resultados (¿impactó el negocio?). El ROI (Phillips) es un 5º nivel que traduce el 4 a dinero.",
      tip: "Sube de \"les gustó\" a \"cambió los resultados\": lo importante está arriba."
    },

    // ===================== U5 · GESTIÓN DEL DESEMPEÑO =====================
    {
      id: "gdp-fc-037", unidad: "U5", tema: "Objetivo del desempeño", salioEnExamen: true,
      frente: "¿Para qué sirve la gestión del desempeño?",
      reverso: "Medir cómo lo está haciendo cada persona para tomar decisiones (desarrollo, promoción, compensación) y alinear su aporte con la estrategia. Evalúa el qué (metas/resultados) y el cómo (conductas y competencias).",
      tip: ""
    },
    {
      id: "gdp-fc-038", unidad: "U5", tema: "Modelos de evaluación", salioEnExamen: true,
      frente: "Compara los modelos MBO, 360° y por competencias.",
      reverso: "MBO (por objetivos): según el logro de metas medibles; claro y con foco en resultados, pero rígido. 360°: feedback de jefe, pares, subordinados y autoevaluación; visión integral pero complejo y con riesgo de sesgo. Por competencias: evalúa conductas clave; foco en desarrollo, pero subjetivo si no están bien definidas.",
      tip: "MBO mira resultados; 360° mira múltiples miradas; competencias mira conductas."
    },
    {
      id: "gdp-fc-039", unidad: "U5", tema: "Desempeño, cultura y estrategia",
      frente: "¿Por qué el modelo de evaluación debe alinearse con la cultura y la estrategia?",
      reverso: "Porque debe evaluar lo que hace ganar a la empresa y promover las conductas que se valoran. Si valoras la colaboración pero solo evalúas metas individuales, generas competencia interna tóxica.",
      tip: "Se evalúa lo que se quiere que ocurra: la métrica moldea la conducta."
    },
    {
      id: "gdp-fc-040", unidad: "U5", tema: "Desempeño efectivo y metas SMART", salioEnExamen: true,
      frente: "¿Qué es el desempeño efectivo y qué son las metas SMART?",
      reverso: "Desempeño efectivo es el que logra los resultados (el qué) Y lo hace coherente con los valores y competencias (el cómo). Las metas deben ser SMART: eSpecíficas, Medibles, Alcanzables, Relevantes y Temporales. Ej.: \"aumentar las ventas 10% en 6 meses\".",
      tip: "Una meta sin plazo ni medida no es SMART, es un deseo."
    },
    {
      id: "gdp-fc-041", unidad: "U5", tema: "Errores de evaluación",
      frente: "Nombra los errores frecuentes al evaluar el desempeño.",
      reverso: "Efecto halo (una cualidad contamina toda la evaluación), Tendencia central (poner a todos en el medio), Indulgencia/severidad (todos muy alto o muy bajo), Recencia (pesa solo lo último) y Similitud (sesgo por afinidad con \"los que se parecen a mí\").",
      tip: "El halo y la recencia son los más preguntados: identifícalos rápido."
    },
    {
      id: "gdp-fc-042", unidad: "U5", tema: "Retroalimentación",
      frente: "¿Qué caracteriza a un buen feedback y cuál es el rol del evaluador y del evaluado?",
      reverso: "Es específico, oportuno y orientado a mejorar (no un \"buen trabajo\" genérico): ej. \"entregaste el informe antes de plazo y muy detallado, buen manejo del tiempo\". El evaluador da feedback honesto y apoyo; el evaluado acepta, reflexiona, trabaja las brechas y comunica necesidades. Es el hito donde la evaluación se vuelve DESARROLLO.",
      tip: "La retroalimentación es el hito clave: sin ella la nota no cambia nada."
    },
    {
      id: "gdp-fc-043", unidad: "U5", tema: "Cierre del ciclo",
      frente: "¿Cómo se cierra el ciclo de gestión del desempeño?",
      reverso: "Con planes de desarrollo individualizados (objetivos, acciones, recursos, cronograma), gestión de resultados (usar la evaluación para promoción, compensación y desarrollo) y acciones correctivas para el bajo desempeño. La evaluación vuelve a alimentar capacitación, compensación y carrera.",
      tip: "Evaluar sin plan de acción es solo poner nota: el valor está en el plan que sigue."
    },

    // ===================== U6 · CAMBIO Y DESARROLLO ORGANIZACIONAL =====================
    {
      id: "gdp-fc-044", unidad: "U6", tema: "Visión, misión y valores",
      frente: "Diferencia entre visión, misión y valores.",
      reverso: "Visión: lo que la organización aspira a ser en el futuro (da dirección). Misión: su razón de ser hoy (qué hace, para quién y cómo). Valores: principios que guían el comportamiento y las decisiones.",
      tip: "Son el marco que orienta toda la gestión de personas: a quién contrato, qué premio, qué conductas evalúo."
    },
    {
      id: "gdp-fc-045", unidad: "U6", tema: "Comportamiento organizacional",
      frente: "¿Qué estudia el Comportamiento Organizacional (CO) y en qué niveles?",
      reverso: "El comportamiento humano en el entorno de trabajo, en tres niveles: individuo (motivación, personalidad, percepción, aprendizaje), grupos (equipos, liderazgo, comunicación) y sistema organizacional (estructura, cultura, políticas de RR.HH.).",
      tip: "Mejora a la vez la eficacia de la organización y el bienestar de las personas."
    },
    {
      id: "gdp-fc-046", unidad: "U6", tema: "Conflicto en equipos",
      frente: "¿Qué dos tipos de conflicto existen en un equipo?",
      reverso: "Conflicto de tarea (sobre el trabajo; más fácil de mitigar y hasta útil) y conflicto de relación (emociones, prejuicios entre personas; el más dañino). La cohesión y las normas del grupo regulan lo permitido y mitigan el conflicto.",
      tip: "Sacar a un equipo de la crisis exige liberar la tensión emocional e intervenir la etapa de tormenta."
    },
    {
      id: "gdp-fc-047", unidad: "U6", tema: "Etapas de Tuckman",
      frente: "¿Cuáles son las etapas de desarrollo de un equipo según Tuckman?",
      reverso: "Forming (formación), Storming (tormenta/conflicto), Norming (normalización) y Performing (desempeño). La \"crisis\" de un equipo suele ser el storming: intervenirlo bien lo lleva al performing.",
      tip: "Todo equipo pasa por la tormenta; el liderazgo decide si la supera o se estanca."
    },
    {
      id: "gdp-fc-048", unidad: "U6", tema: "Cambio organizacional", salioEnExamen: true,
      frente: "¿Qué es el cambio organizacional y sus dos tipos?",
      reverso: "Proceso planificado que lleva a la organización de un estado actual (A) a uno deseado (B), ejecutado a través de las personas. Incremental: pequeñas mejoras continuas. Transformacional: cambios radicales que redefinen la dirección estratégica.",
      tip: "Es un proceso, no un evento; siempre hay resistencia."
    },
    {
      id: "gdp-fc-049", unidad: "U6", tema: "Resistencia al cambio", salioEnExamen: true,
      frente: "¿Cuáles son las causas de la resistencia al cambio?",
      reverso: "Miedo a lo desconocido (incertidumbre sobre los resultados), pérdida de control sobre el entorno de trabajo, hábitos (preferencia por las rutinas) y amenaza a la seguridad (temor por la estabilidad laboral).",
      tip: "La resistencia es normal: se gestiona, no se ignora."
    },
    {
      id: "gdp-fc-050", unidad: "U6", tema: "Superar la resistencia", salioEnExamen: true,
      frente: "¿Qué estrategias ayudan a superar la resistencia al cambio?",
      reverso: "Comunicación clara (informar y educar), participación (involucrar a las personas), apoyo (emocional y de recursos) y negociación (acuerdos con quienes pierden algo con el cambio).",
      tip: "Se participa a la gente en el cambio; no se le impone."
    },
    {
      id: "gdp-fc-051", unidad: "U6", tema: "Modelo de Lewin", salioEnExamen: true,
      frente: "Explica el modelo de cambio de Kurt Lewin.",
      reverso: "Tres fases: Descongelar (preparar a la organización, romper el statu quo), Cambiar (implementar el nuevo estado) y Recongelar (estabilizar y consolidar el cambio para que no se retroceda).",
      tip: "Descongelar → Cambiar → Recongelar. Sin recongelar, la organización vuelve al hábito viejo."
    },
    {
      id: "gdp-fc-052", unidad: "U6", tema: "8 pasos de Kotter", salioEnExamen: true,
      frente: "¿Cuáles son los 8 pasos del cambio de John Kotter?",
      reverso: "1) Crear urgencia. 2) Formar una coalición poderosa. 3) Desarrollar visión y estrategia. 4) Comunicar la visión. 5) Eliminar obstáculos. 6) Generar triunfos de corto plazo. 7) Consolidar logros y producir más cambio. 8) Anclar los nuevos enfoques en la cultura.",
      tip: "Empieza en la urgencia y termina anclando el cambio en la cultura."
    },
    {
      id: "gdp-fc-053", unidad: "U6", tema: "Rousseau & Ten Have",
      frente: "¿Qué propone el modelo de cambio de Rousseau & Ten Have?",
      reverso: "Cambio basado en EVIDENCIA: las decisiones deben apoyarse en datos y en el mejor conocimiento disponible (no en modas), gestionando el proceso a través de las personas y sus contratos psicológicos.",
      tip: "El antídoto contra cambiar \"porque está de moda\"."
    },
    {
      id: "gdp-fc-054", unidad: "U6", tema: "Modelo de McKinsey",
      frente: "¿Qué cuatro condiciones exige el modelo de influencia de McKinsey para cambiar comportamientos?",
      reverso: "Simultáneamente: 1) Role modeling (ver el ejemplo en líderes y pares), 2) Comprensión y convicción (entender el porqué), 3) Mecanismos de refuerzo (estructura, procesos e incentivos que apoyen el cambio) y 4) Desarrollo de talento y habilidades (saber cómo hacerlo).",
      tip: "Faltando una sola condición, el cambio de conducta no se sostiene."
    },
    {
      id: "gdp-fc-055", unidad: "U6", tema: "Rol de los líderes en el cambio", salioEnExamen: true,
      frente: "¿Cuál es el rol de los líderes en la gestión del cambio?",
      reverso: "Modelan las conductas deseadas (role modeling), dan sentido y comunican el porqué, sostienen la energía del proceso y remueven barreras. Sin líderes comprometidos, el cambio se apaga.",
      tip: "El líder no anuncia el cambio: lo encarna. Es el primer eslabón del modelo de McKinsey."
    },

    // ===================== U7 · CULTURA Y CLIMA =====================
    {
      id: "gdp-fc-056", unidad: "U7", tema: "Cultura organizacional", salioEnExamen: true,
      frente: "¿Qué es la cultura organizacional y cuándo es efectiva?",
      reverso: "Conjunto de valores, creencias, normas y prácticas compartidas que influyen en el comportamiento de los miembros. Es efectiva cuando se alinea con la estrategia, es flexible/adaptable y genera compromiso.",
      tip: "\"La cultura se come a la estrategia en el desayuno\" (Drucker): sin cultura acorde, la estrategia no se ejecuta."
    },
    {
      id: "gdp-fc-057", unidad: "U7", tema: "Modelo de Schein",
      frente: "¿Cuáles son los 3 niveles de cultura de Edgar Schein?",
      reverso: "1) Artefactos: lo visible (oficinas, ritos, lenguaje, vestimenta); fácil de observar, difícil de interpretar. 2) Valores adoptados (declarados): lo que la empresa dice que valora (misión, código de ética). 3) Supuestos básicos: creencias inconscientes que se dan por sentadas; el verdadero núcleo de la cultura.",
      tip: "Lo que ves (artefactos) no siempre coincide con lo que la empresa cree de verdad (supuestos)."
    },
    {
      id: "gdp-fc-058", unidad: "U7", tema: "Cameron & Quinn",
      frente: "¿Cuáles son las 4 culturas del modelo de Cameron & Quinn (Competing Values)?",
      reverso: "Cruza flexibilidad↔control con foco interno↔externo: Clan (colaboración, foco interno flexible), Adhocrática (creatividad, externo flexible), Jerárquica (control, interno estable) y de Mercado (competencia, externo estable).",
      tip: "Clan colabora, Adhocracia innova, Jerarquía controla, Mercado compite."
    },
    {
      id: "gdp-fc-059", unidad: "U7", tema: "Medición de la cultura",
      frente: "Nombra modelos que miden o clasifican la cultura organizacional.",
      reverso: "Denison & Neale (4 dimensiones: misión, consistencia, involucramiento, adaptabilidad), Cameron & Quinn (4 culturas), Spencer Stuart & Harvard (8 tipos), Richard Barrett (evolutivo, 7 niveles de conciencia) y Maslow (base motivacional: 5 niveles de necesidades).",
      tip: "Varios cruzan dos ejes: flexible↔estable e interno↔externo."
    },
    {
      id: "gdp-fc-060", unidad: "U7", tema: "Fuerza de la cultura",
      frente: "¿Qué mide la \"fuerza\" de la cultura (Sathe & Wiener) y qué son las subculturas?",
      reverso: "No mira qué TIPO de cultura hay, sino qué tan fuerte o débil es (nivel de acuerdo y compromiso con los valores). Una cultura fuerte alinea, pero también puede resistir el cambio. En organizaciones grandes coexisten subculturas por equipo, área o nivel: conviene integrarlas hacia objetivos comunes.",
      tip: "Cultura fuerte = arma de doble filo: alinea, pero se resiste a cambiar."
    },
    {
      id: "gdp-fc-061", unidad: "U7", tema: "Estrategias para el cambio cultural",
      frente: "¿Qué requiere transformar la cultura y con qué estrategias?",
      reverso: "Requiere proceso estructurado, liderazgo activo y participación de toda la organización; el Desarrollo Organizacional (DO) actúa como facilitador. Estrategias: liderazgo que modele los valores, comunicación constante, entrenamiento en los nuevos comportamientos y recompensas alineadas con esos valores.",
      tip: "Se cambia la cultura modelando, comunicando, entrenando y recompensando: no basta declararla."
    },
    {
      id: "gdp-fc-062", unidad: "U7", tema: "Cultura que falla: analizar y actuar", salioEnExamen: true,
      frente: "Si una cultura está fallando, ¿cómo se analiza y qué acciones concretas se proponen?",
      reverso: "Se ANALIZAN los elementos que fallan (no solo se nombran) y se proponen acciones medibles. Ej.: liderazgo autoritario → programas de coaching + evaluación 360° ligada a bonos; ambiente tóxico → canales de denuncia confidenciales, comités de convivencia y encuestas de clima con planes de mejora; falta de propósito → involucrar a las personas en el rediseño de misión/visión.",
      tip: "Analizar, no nombrar; y traducir \"cambiar el liderazgo\" en acciones concretas y medibles."
    },
    {
      id: "gdp-fc-063", unidad: "U7", tema: "Clima laboral", salioEnExamen: true,
      frente: "¿Qué es el clima laboral y cuáles son sus componentes?",
      reverso: "La percepción compartida de los empleados sobre el ambiente de trabajo (más \"temperatura del momento\" que cultura profunda). Componentes: físico (condiciones, seguridad), psicológico (relaciones, apoyo, equidad) y organizacional (políticas y procedimientos).",
      tip: "Se mide con encuestas de clima y se corrige con planes según resultados."
    },
    {
      id: "gdp-fc-064", unidad: "U7", tema: "Sistemas de Likert",
      frente: "¿Cuáles son los 4 sistemas de clima de Rensis Likert?",
      reverso: "Sistema 1 — Autoritario coercitivo (decisiones arriba, miedo, sin participación). Sistema 2 — Autoritario benevolente (paternalista, algo de delegación controlada). Sistema 3 — Consultivo (se consulta antes de decidir). Sistema 4 — Participativo (confianza plena, decisiones compartidas: mejor clima).",
      tip: "Del 1 al 4 aumenta la participación y mejora el clima."
    },
    {
      id: "gdp-fc-065", unidad: "U7", tema: "Cultura vs. clima",
      frente: "No confundir: ¿en qué se diferencian cultura y clima?",
      reverso: "Cultura: profunda, estable y compartida (valores y supuestos); cambiarla toma años. Clima: percepción del ambiente en un momento dado, más cambiante y medible con encuestas; mejorarlo es más rápido.",
      tip: "Cultura = el clima de fondo; clima = el pronóstico de hoy."
    },

    // ===================== CASOS DE EXAMEN (vistos en exámenes reales) =====================
    {
      id: "gdp-fc-066", unidad: "U2", tema: "Caso de examen: diseñar la selección alineada a la estrategia", salioEnExamen: true,
      frente: "Una empresa financiera con una cultura de cercanía automatizó su selección: IA para filtrar CV, videos de presentación en vez de entrevistas y preselección por datos. Ganó eficiencia, pero subió la rotación temprana (renuncias antes de 3 meses) y hubo quejas de candidatos.\na) Señale 2 debilidades del proceso así diseñado.\nb) Proponga 2 ajustes que lo alineen con la estrategia y la cultura.",
      reverso: "a) Debilidades: (1) se pierde el ajuste cultural y el trato humano —la experiencia de selección es la primera señal de la cultura y aleja talento—; (2) sin entrevista por competencias no se evalúa bien el potencial ni el calce con el modelo de personas, lo que explica la rotación temprana.\nb) Ajustes: reincorporar una entrevista por competencias (técnica STAR) en la etapa final; definir el perfil desde el modelo de personas y sumar una etapa de integración/inducción; usar la IA como apoyo de filtrado, no como decisión final.",
      tip: "La pauta premia conectar cada debilidad con un ajuste concreto y con la estrategia/cultura, no solo listar las etapas."
    },
    {
      id: "gdp-fc-067", unidad: "U6", tema: "Caso de examen: diagnosticar y gestionar la resistencia al cambio", salioEnExamen: true,
      frente: "Una organización inicia una transformación (nuevo modelo operativo y cultural). El equipo afectado, que no participó en el diseño, muestra confusión, desmotivación y desconfianza.\na) Identifique 2 focos de resistencia y proponga 1 intervención por cada uno.\nb) Con un modelo de gestión del cambio, señale 3 pasos que usted habría seguido para implementarlo.",
      reverso: "a) Focos: miedo a lo desconocido / a perder el puesto (intervención: comunicar el propósito y el rol futuro, capacitar en las nuevas competencias); falta de participación y de sentido (intervención: involucrar al equipo en el rediseño y dar apoyo).\nb) Con Kotter: crear urgencia, formar una coalición y comunicar la visión, generar triunfos de corto plazo y anclar el cambio en la cultura. Con Lewin: descongelar, cambiar y recongelar.",
      tip: "La pauta premia nombrar el modelo (Lewin/Kotter) y aplicarlo AL CASO, con una intervención por cada foco de resistencia."
    },
    {
      id: "gdp-fc-068", unidad: "U5", tema: "Caso de examen: diseñar la gestión del desempeño y la retroalimentación", salioEnExamen: true,
      frente: "Una empresa no da incentivos por resultados y solo hace una evaluación anual para ajustar sueldos. Quiere alinear a su personal con una nueva prioridad estratégica (ej.: calidad de servicio a bajo costo).\nDesarrolle las 3 etapas principales de un modelo de gestión del desempeño que logre ese alineamiento.",
      reverso: "Etapa 1 — Planificación: fijar metas SMART y competencias ligadas a la prioridad estratégica (ej.: satisfacción del cliente, orientación al servicio), definir el modelo (90°/180°/360°) y comunicarlas.\nEtapa 2 — Seguimiento: medir avances, dar retroalimentación continua, entregar apoyo y recursos.\nEtapa 3 — Evaluación y cierre: evaluar cumplimiento y competencias, retroalimentar resultados, reconocer logros y fijar planes de acción para las brechas.",
      tip: "La pauta premia distinguir GESTIÓN (ciclo completo) de EVALUACIÓN (una etapa) y amarrar las metas a la estrategia."
    },
    {
      id: "gdp-fc-069", unidad: "U3", tema: "Caso de examen: alinear la compensación a la estrategia y retener", salioEnExamen: true,
      frente: "Un estudio revela que un tercio de los trabajadores jóvenes piensa renunciar: valoran la salud mental, el equilibrio vida-trabajo y el propósito.\na) Proponga un esquema de compensación total (con ejemplos de cada tipo) que responda a esas prioridades y explique cómo cada elemento ayuda a retener.\nb) Analice 3 consecuencias concretas de la rotación no deseada.",
      reverso: "a) Esquema: monetaria DIRECTA (sueldo competitivo y equitativo, bono por desempeño) —base del sistema, evita la fuga—; monetaria INDIRECTA (seguro de salud mental, apoyo a la formación) —reduce el estrés y muestra cuidado—; NO monetaria / salario emocional (trabajo híbrido, flexibilidad, reconocimiento, propósito) —responde al balance vida-trabajo que buscan las nuevas generaciones—.\nb) Consecuencias: costos de reemplazo e inducción (hasta más del 100% del sueldo anual del cargo); pérdida de conocimiento crítico; sobrecarga y desmotivación de los que quedan (efecto dominó) y daño al clima y al employer branding.",
      tip: "Trampa de la pauta: el esquema SIEMPRE debe incluir la compensación monetaria directa; y la rotación se ANALIZA (el porqué), no se lista."
    },
    {
      id: "gdp-fc-070", unidad: "U7", tema: "Caso de examen: intervenir una cultura o clima que falla", salioEnExamen: true,
      frente: "Las renuncias en una empresa se asocian al agotamiento, la falta de reconocimiento, la desconexión con la cultura y ambientes tóxicos.\nHaga un análisis crítico de qué elementos de la cultura podrían estar fallando frente a las expectativas de las nuevas generaciones y, para los 2 más relevantes, proponga 1 acción concreta de alineamiento por cada uno.",
      reverso: "Elementos que fallan (analizar, no solo nombrar): (1) liderazgo distante y falta de reconocimiento → acción: formar a las jefaturas en liderazgo cercano y feedback, con reconocimiento ligado a la evaluación; (2) falta de propósito y de equilibrio vida-trabajo → acción: involucrar a las personas en el rediseño de misión/valores e implementar flexibilidad y bienestar. Ambiente tóxico → canales de denuncia confidenciales, comités de convivencia y encuestas de clima con planes de mejora.",
      tip: "La pauta premia ANALIZAR el elemento que falla y traducirlo en una acción concreta y medible, no en un enunciado genérico."
    },
    {
      id: "gdp-fc-071", unidad: "U2", tema: "Caso de examen: reclutamiento interno vs. externo y su impacto en cultura y clima", salioEnExamen: true,
      frente: "Una empresa de servicios se adjudica un proyecto grande y debe cubrir varios cargos (jefe de proyecto, técnicos y administrativos). Puede promover a empleados actuales o buscar candidatos externos.\na) Mencione y explique una ventaja y una desventaja de cada tipo de reclutamiento.\nb) Analice cómo cada uno impactaría en la cultura y el clima organizacional.",
      reverso: "a) Interno — ventaja: se conoce al candidato y su calce cultural, adaptación rápida y motiva el desarrollo de carrera; desventaja: no ingresan ideas nuevas y, si el proceso no es transparente, genera roces por favoritismo. Externo — ventaja: aporta talento, diversidad y competencias que no existen dentro; desventaja: más caro y lento, y puede desmotivar a quien esperaba ascender.\nb) Cultura: el interno tiende a mantenerla y refuerza la meritocracia; el externo puede renovarla, pero exige un buen onboarding para el fit cultural. Clima: el interno mejora la percepción de crecimiento (o genera roces si se percibe injusto); el externo puede tensionar al equipo si no se valora el talento interno.",
      tip: "La pauta premia explicar (no solo mencionar) una ventaja y una desventaja de AMBOS tipos, y analizar el impacto en cultura Y clima de cada uno."
    },
    {
      id: "gdp-fc-072", unidad: "U4", tema: "Caso de examen: capacitación estratégica, DNC y evaluación de la efectividad", salioEnExamen: true,
      frente: "Una empresa entiende que capacitar a todo su personal (no solo al técnico) es clave para su estrategia de servicio.\na) Explique una forma de detectar las necesidades de capacitación (DNC).\nb) Explique 2 formas de evaluar la efectividad de la capacitación.\nc) Fundamente por qué la capacitación es estratégica.",
      reverso: "a) DNC: cruzar los resultados de la evaluación de desempeño y de las encuestas de satisfacción/clima con el estándar esperado para detectar las brechas reales.\nb) Efectividad: medir la TRANSFERENCIA al puesto —comparar indicadores antes/después (ej.: satisfacción del cliente, reingresos, errores) y usar los niveles de Kirkpatrick (reacción, aprendizaje, comportamiento, resultados)—.\nc) Es estratégica porque cierra la brecha entre lo que las personas saben hoy y lo que la estrategia necesitará mañana, transmite cultura y valores, y atrae, retiene y motiva al talento.",
      tip: "La pauta premia responder la efectividad como TRANSFERENCIA a la práctica (con datos del caso), no como si gustó la actividad."
    }
  ]
};
