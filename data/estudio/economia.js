// Módulo de estudio — ECONOMÍA (flashcards con repaso espaciado)
// Contenido derivado del "RESUMEN ECONOMÍA GRADO" y VALIDADO contra fuentes
// estándar (Mankiw, Samuelson, Pindyck & Rubinfeld) y el contexto chileno
// (Banco Central de Chile, IPC/INE, FNE/TDLC).
// Correcciones aplicadas sobre los apuntes originales:
//   - Coase, "La naturaleza de la empresa", es de 1937 (el apunte decía 1939).
//   - Selección adversa vs. riesgo moral: se precisa que la selección adversa es
//     información oculta ANTES del contrato (características ocultas) y el riesgo
//     moral son acciones ocultas DESPUÉS del contrato (el apunte los definía de
//     forma difusa).
//   - Economía abierta: se usa la identidad consistente S = I + FSNC y, por lo
//     tanto, XN = FSNC (el apunte escribía "XN = -FSNC", inconsistente con
//     "S = I + FSNC"; sale de mezclar convenciones de signo del saldo de capital).
//   - Ventaja comparativa: se agrega la distinción con la ventaja absoluta (el
//     apunte solo trataba la comparativa).
//   - Contexto chileno: el IPC lo mide el INE; la meta de inflación del Banco
//     Central de Chile es 3% anual (rango de tolerancia 2%-4%).
// El examen real es SIN CALCULADORA: las identidades (PIB = C+I+G+XN, MV=PY,
// i = r + pi, TD = U/FT) se incluyen como RELACIONES conceptuales a entender,
// no como ejercicios de cálculo.
// Formato estricto por tarjeta:
//   { id, unidad, tema, frente, reverso, tip? }
//   frente  = lo que se muestra primero (pregunta / concepto a recordar)
//   reverso = la respuesta ideal, breve y precisa
//   tip     = OPCIONAL: frase de examen o gancho para memorizar
window.ESTUDIO = window.ESTUDIO || {};
window.ESTUDIO.economia = {
  materia: "Economía",
  nombre: "Economía",
  unidades: [
    { id: "U1", titulo: "Principios y Escasez" },
    { id: "U2", titulo: "Demanda, Oferta y Elasticidad" },
    { id: "U3", titulo: "Equilibrio, Bienestar y Políticas Públicas" },
    { id: "U4", titulo: "Consumidor, Producción y Costos" },
    { id: "U5", titulo: "Estructuras de Mercado y Fallas" },
    { id: "U6", titulo: "Cuentas Nacionales y Mercado Laboral" },
    { id: "U7", titulo: "Dinero, Inflación y Política Macroeconómica" }
  ],
  tarjetas: [
    // ===================== U1 · PRINCIPIOS Y ESCASEZ =====================
    {
      id: "eco-fc-001", unidad: "U1", tema: "Definición de economía",
      frente: "¿Qué estudia la economía (definición para memorizar)?",
      reverso: "Cómo la sociedad administra sus recursos ESCASOS para satisfacer necesidades ILIMITADAS. La escasez obliga a elegir cómo se asignan esos recursos.",
      tip: "Escasez = recursos limitados frente a necesidades ilimitadas. Sin escasez no habría economía."
    },
    {
      id: "eco-fc-002", unidad: "U1", tema: "Principios de la economía",
      frente: "Nombra los principios básicos sobre cómo toman decisiones las personas.",
      reverso: "1) Enfrentan disyuntivas (trade-offs). 2) El costo de una cosa es aquello a lo que se renuncia. 3) Las personas racionales piensan en el margen. 4) Responden a incentivos.",
      tip: "Toda decisión económica es una disyuntiva: elegir algo implica renunciar a otra cosa."
    },
    {
      id: "eco-fc-003", unidad: "U1", tema: "Costo de oportunidad",
      frente: "¿Qué es el costo de oportunidad?",
      reverso: "Es aquello a lo que se RENUNCIA para obtener otra cosa: el valor de la mejor alternativa desechada. No es solo dinero, incluye tiempo y opciones perdidas.",
      tip: "El verdadero costo de algo es lo que dejas de hacer por hacerlo."
    },
    {
      id: "eco-fc-004", unidad: "U1", tema: "Pensamiento marginal",
      frente: "¿Qué significa pensar \"en términos marginales\"?",
      reverso: "Evaluar los pequeños ajustes adicionales a un plan de acción: comparar el beneficio marginal (de una unidad extra) con su costo marginal. Se decide hacer algo mientras el beneficio marginal supere al costo marginal.",
      tip: "Racional = actúa hasta que el beneficio marginal iguala al costo marginal."
    },
    {
      id: "eco-fc-005", unidad: "U1", tema: "Frontera de Posibilidades de Producción",
      frente: "¿Qué representa la Frontera de Posibilidades de Producción (FPP)?",
      reverso: "Las combinaciones MÁXIMAS de dos bienes que una economía puede producir con sus recursos y tecnología dados. Los puntos sobre la curva son eficientes; los interiores, ineficientes (recursos ociosos); los exteriores, inalcanzables hoy.",
      tip: "La FPP ilustra escasez, costo de oportunidad (su pendiente) y eficiencia."
    },
    {
      id: "eco-fc-006", unidad: "U1", tema: "Desplazamiento de la FPP",
      frente: "¿Qué desplaza la FPP hacia afuera y por qué suele ser cóncava?",
      reverso: "Se desplaza hacia afuera con mejoras tecnológicas o más recursos (crecimiento económico). Es cóncava (curva hacia el origen) por el costo de oportunidad CRECIENTE: los recursos no son igual de productivos en todos los usos.",
      tip: "Crecimiento económico = la FPP se corre hacia afuera."
    },
    {
      id: "eco-fc-007", unidad: "U1", tema: "Ventaja comparativa vs. absoluta",
      frente: "Diferencia entre ventaja absoluta y ventaja comparativa.",
      reverso: "Absoluta: producir un bien usando MENOS recursos que el otro. Comparativa: producirlo a un MENOR costo de oportunidad que el otro. El comercio se basa en la ventaja COMPARATIVA, no en la absoluta.",
      tip: "Aunque un país sea mejor en todo (ventaja absoluta), aún gana especializándose según su ventaja comparativa."
    },
    {
      id: "eco-fc-008", unidad: "U1", tema: "Especialización e intercambio",
      frente: "¿Por qué el intercambio y la especialización mejoran el bienestar de todos?",
      reverso: "Cada parte se especializa en el bien donde tiene ventaja comparativa (mayor eficiencia) y comercia por el resto. Así se produce más con los mismos recursos y ambas partes quedan mejor.",
      tip: "El comercio no es un juego de suma cero: agranda la torta para todos."
    },

    // ===================== U2 · DEMANDA, OFERTA Y ELASTICIDAD =====================
    {
      id: "eco-fc-009", unidad: "U2", tema: "Ley de la demanda",
      frente: "¿Qué dice la ley de la demanda y por qué la curva tiene pendiente negativa?",
      reverso: "Ceteris paribus, al SUBIR el precio de un bien BAJA su cantidad demandada (relación inversa). Se explica por el efecto sustitución y el efecto ingreso.",
      tip: "\"Ceteris paribus\" = todo lo demás constante. La curva de demanda baja de izquierda a derecha."
    },
    {
      id: "eco-fc-010", unidad: "U2", tema: "Cambio en demanda vs. cantidad demandada",
      frente: "Diferencia entre \"cambio en la cantidad demandada\" y \"cambio en la demanda\".",
      reverso: "Cambio en la CANTIDAD demandada: movimiento A LO LARGO de la curva, causado por el precio del propio bien. Cambio en la DEMANDA: DESPLAZAMIENTO de toda la curva, causado por otros factores (ingreso, precios relacionados, gustos, expectativas).",
      tip: "El precio del bien mueve a lo largo; cualquier otra cosa desplaza la curva."
    },
    {
      id: "eco-fc-011", unidad: "U2", tema: "Determinantes de la demanda",
      frente: "¿Qué factores (distintos al precio) DESPLAZAN la curva de demanda?",
      reverso: "Ingreso del consumidor, precios de bienes relacionados (sustitutos y complementarios), gustos y preferencias, expectativas y número de compradores.",
      tip: "Un alza del ingreso desplaza a la derecha la demanda de un bien normal y a la izquierda la de un bien inferior."
    },
    {
      id: "eco-fc-012", unidad: "U2", tema: "Ley de la oferta",
      frente: "¿Qué dice la ley de la oferta y qué desplaza su curva?",
      reverso: "Ceteris paribus, al SUBIR el precio SUBE la cantidad ofrecida (relación directa; pendiente positiva). La curva se desplaza por: precios de los insumos, tecnología, expectativas y número de vendedores.",
      tip: "Mejor tecnología o insumos más baratos desplazan la oferta a la derecha (mayor oferta)."
    },
    {
      id: "eco-fc-013", unidad: "U2", tema: "Cambio en oferta vs. cantidad ofrecida",
      frente: "Diferencia entre \"cambio en la cantidad ofrecida\" y \"cambio en la oferta\".",
      reverso: "Cambio en la CANTIDAD ofrecida: movimiento a lo largo de la curva por el precio del propio bien. Cambio en la OFERTA: desplazamiento de toda la curva por otros factores (costos, tecnología, expectativas).",
      tip: "Misma lógica que en demanda: el precio mueve a lo largo; lo demás desplaza."
    },
    {
      id: "eco-fc-014", unidad: "U2", tema: "Elasticidad precio de la demanda",
      frente: "¿Qué mide la elasticidad precio de la demanda?",
      reverso: "La SENSIBILIDAD de la cantidad demandada ante cambios en el precio. Demanda ELÁSTICA: la cantidad reacciona mucho (bienes de lujo, con sustitutos). INELÁSTICA: reacciona poco (necesidades, sin sustitutos).",
      tip: "Si la demanda es inelástica, subir el precio AUMENTA el ingreso total; si es elástica, lo REDUCE."
    },
    {
      id: "eco-fc-015", unidad: "U2", tema: "Elasticidad cruzada",
      frente: "¿Qué mide la elasticidad cruzada y qué signo indica sustitutos o complementarios?",
      reverso: "Mide cómo cambia la demanda de un bien ante el cambio de precio de OTRO bien. Signo POSITIVO = bienes sustitutos (sube el precio del té, sube la demanda de café). Signo NEGATIVO = complementarios (sube el precio de la impresora, baja la demanda de tinta).",
      tip: "Positiva → sustitutos; negativa → complementarios."
    },
    {
      id: "eco-fc-016", unidad: "U2", tema: "Elasticidad ingreso",
      frente: "¿Qué mide la elasticidad ingreso de la demanda?",
      reverso: "La sensibilidad de la demanda ante cambios en el INGRESO del consumidor. Signo POSITIVO = bien normal (más ingreso, más demanda). Signo NEGATIVO = bien inferior (más ingreso, menos demanda).",
      tip: "Positiva → normal; negativa → inferior."
    },
    {
      id: "eco-fc-017", unidad: "U2", tema: "Determinantes de la elasticidad precio",
      frente: "¿De qué depende que la demanda de un bien sea más o menos elástica?",
      reverso: "De la existencia de sustitutos cercanos (más sustitutos → más elástica), de si es necesidad o lujo (los lujos son más elásticos), del horizonte temporal (más elástica en el largo plazo) y de la proporción del ingreso que representa.",
      tip: "Mientras más fácil sea reemplazar el bien, más elástica es su demanda."
    },
    {
      id: "eco-fc-018", unidad: "U2", tema: "Elasticidad de la oferta",
      frente: "¿Qué mide la elasticidad de la oferta y de qué depende?",
      reverso: "La sensibilidad de la cantidad OFRECIDA ante cambios en el precio. Depende sobre todo del horizonte temporal y de la flexibilidad para ajustar la producción: la oferta es más elástica en el largo plazo, cuando todos los factores pueden variar.",
      tip: "En el corto plazo (con factores fijos) la oferta es más rígida (inelástica)."
    },

    // ============ U3 · EQUILIBRIO, BIENESTAR Y POLÍTICAS PÚBLICAS ============
    {
      id: "eco-fc-019", unidad: "U3", tema: "Equilibrio de mercado",
      frente: "¿Qué es el equilibrio de mercado?",
      reverso: "El punto donde la cantidad demandada iguala a la cantidad ofrecida (se cruzan oferta y demanda). Determina el precio y la cantidad de equilibrio. A ese precio no hay escasez ni excedente.",
      tip: "Precio de equilibrio = precio que \"vacía\" el mercado."
    },
    {
      id: "eco-fc-020", unidad: "U3", tema: "Cambio en el equilibrio por la demanda",
      frente: "¿Qué le pasa al equilibrio si AUMENTA la demanda (la oferta no cambia)?",
      reverso: "La curva de demanda se desplaza a la derecha: SUBEN tanto el precio como la cantidad de equilibrio. Si la demanda cae, ambos bajan.",
      tip: "Con oferta fija, precio y cantidad se mueven en la MISMA dirección que la demanda."
    },
    {
      id: "eco-fc-021", unidad: "U3", tema: "Cambio en el equilibrio por la oferta",
      frente: "¿Qué le pasa al equilibrio si AUMENTA la oferta (la demanda no cambia)?",
      reverso: "La curva de oferta se desplaza a la derecha: BAJA el precio y SUBE la cantidad de equilibrio. Si la oferta cae, el precio sube y la cantidad baja.",
      tip: "Con demanda fija, precio y cantidad se mueven en direcciones OPUESTAS al desplazarse la oferta."
    },
    {
      id: "eco-fc-022", unidad: "U3", tema: "Excedente del consumidor",
      frente: "¿Qué es el excedente del consumidor?",
      reverso: "La diferencia entre lo que los consumidores estaban DISPUESTOS a pagar y lo que efectivamente pagaron. Gráficamente, el área bajo la curva de demanda y sobre el precio de mercado.",
      tip: "Mide el beneficio neto que el comprador obtiene del intercambio."
    },
    {
      id: "eco-fc-023", unidad: "U3", tema: "Excedente del productor y eficiencia",
      frente: "¿Qué es el excedente del productor y cuándo un mercado es eficiente?",
      reverso: "Excedente del productor: diferencia entre el precio recibido y el costo de producir (área sobre la oferta y bajo el precio). Un mercado competitivo es EFICIENTE porque maximiza el excedente total (consumidor + productor).",
      tip: "En competencia, la \"mano invisible\" asigna los recursos maximizando el bienestar total."
    },
    {
      id: "eco-fc-024", unidad: "U3", tema: "Precio máximo (techo)",
      frente: "¿Qué efecto tiene un precio máximo fijado bajo el equilibrio?",
      reverso: "Genera ESCASEZ: a ese precio la cantidad demandada supera la ofrecida. Aparecen listas de espera, racionamiento o mercados informales. Ejemplo típico: controles de arriendo.",
      tip: "Precio máximo efectivo (bajo el equilibrio) → falta el producto."
    },
    {
      id: "eco-fc-025", unidad: "U3", tema: "Precio mínimo y salario mínimo",
      frente: "¿Qué efecto tiene un precio mínimo fijado sobre el equilibrio (ej. salario mínimo)?",
      reverso: "Genera EXCEDENTE (sobreoferta): la cantidad ofrecida supera la demandada. En el mercado laboral, un salario mínimo por encima del de equilibrio puede producir desempleo (más trabajadores dispuestos que puestos disponibles).",
      tip: "Precio mínimo efectivo (sobre el equilibrio) → sobra producto / desempleo."
    },
    {
      id: "eco-fc-026", unidad: "U3", tema: "Impuestos, subsidios y carga muerta",
      frente: "¿Cómo afectan los impuestos al mercado y qué es la pérdida de eficiencia?",
      reverso: "Un impuesto abre una brecha entre el precio que paga el comprador y el que recibe el vendedor, reduce la cantidad transada y genera una PÉRDIDA IRRECUPERABLE DE EFICIENCIA (carga muerta): transacciones beneficiosas que ya no ocurren. Un subsidio hace lo inverso (aumenta la cantidad).",
      tip: "La carga del impuesto recae más sobre el lado MÁS INELÁSTICO del mercado."
    },

    // ============ U4 · CONSUMIDOR, PRODUCCIÓN Y COSTOS ============
    {
      id: "eco-fc-027", unidad: "U4", tema: "Efecto sustitución",
      frente: "¿Qué es el efecto sustitución cuando baja el precio de un bien?",
      reverso: "El consumidor reemplaza los bienes que se volvieron relativamente más caros por el bien que abarató, manteniendo constante el nivel de utilidad. Es el cambio de consumo por el precio RELATIVO.",
      tip: "Baja el precio de un bien → lo prefiero frente a sus sustitutos."
    },
    {
      id: "eco-fc-028", unidad: "U4", tema: "Efecto renta (ingreso)",
      frente: "¿Qué es el efecto renta cuando baja el precio de un bien?",
      reverso: "Al bajar el precio, el poder adquisitivo (ingreso real) del consumidor AUMENTA, aunque su ingreso nominal no cambie, permitiéndole comprar más. Es el cambio de consumo por el mayor poder de compra.",
      tip: "El efecto total de un cambio de precio = efecto sustitución + efecto renta."
    },
    {
      id: "eco-fc-029", unidad: "U4", tema: "Bienes normales vs. inferiores",
      frente: "Diferencia entre bien normal y bien inferior.",
      reverso: "Bien NORMAL: la demanda AUMENTA cuando sube el ingreso (ej. ropa de marca). Bien INFERIOR: la demanda DISMINUYE cuando sube el ingreso (ej. transporte público, alimentos de menor calidad, que se reemplazan al tener más plata).",
      tip: "\"Inferior\" no es de mala calidad: es el que se deja de consumir al ganar más."
    },
    {
      id: "eco-fc-030", unidad: "U4", tema: "Sustitutos vs. complementarios",
      frente: "Diferencia entre bienes sustitutos y complementarios.",
      reverso: "SUSTITUTOS: se reemplazan entre sí (té y café); si sube el precio de uno, sube la demanda del otro. COMPLEMENTARIOS: se consumen juntos (impresora y tinta); si sube el precio de uno, baja la demanda del otro.",
      tip: "Sustitutos compiten; complementarios se acompañan."
    },
    {
      id: "eco-fc-031", unidad: "U4", tema: "Función de producción y plazos",
      frente: "¿Qué es la función de producción y cómo se distingue el corto del largo plazo?",
      reverso: "Relaciona la cantidad de factores (trabajo, capital) con la cantidad de producto obtenido. CORTO PLAZO: al menos un factor es FIJO (ej. la planta). LARGO PLAZO: TODOS los factores son variables.",
      tip: "La distinción corto/largo plazo no es de tiempo en el reloj, sino de qué factores puedo ajustar."
    },
    {
      id: "eco-fc-032", unidad: "U4", tema: "Rendimientos marginales decrecientes",
      frente: "¿Qué dice la ley de los rendimientos marginales decrecientes?",
      reverso: "Al añadir unidades adicionales de un factor variable (ej. trabajo) manteniendo fijos los demás, el producto marginal (lo que aporta cada unidad extra) termina por DISMINUIR a partir de cierto punto.",
      tip: "Es de CORTO plazo (hay un factor fijo). No confundir con rendimientos a escala."
    },
    {
      id: "eco-fc-033", unidad: "U4", tema: "Rendimientos a escala",
      frente: "¿Qué son los rendimientos a escala y sus tres tipos?",
      reverso: "Miden cómo cambia la producción cuando se aumentan TODOS los factores en la misma proporción (largo plazo). CRECIENTES: el producto sube más que proporcionalmente (economías de escala). CONSTANTES: en igual proporción. DECRECIENTES: menos que proporcionalmente (deseconomías de escala).",
      tip: "Economías de escala = el costo medio de largo plazo BAJA al crecer la producción."
    },
    {
      id: "eco-fc-034", unidad: "U4", tema: "Costo económico vs. contable",
      frente: "Diferencia entre costo económico y costo contable. ¿Qué son los costos hundidos?",
      reverso: "El costo CONTABLE registra solo desembolsos explícitos. El costo ECONÓMICO agrega el costo de OPORTUNIDAD (implícito). Los costos HUNDIDOS (irrecuperables) ya se pagaron y no se recuperan: NO deben influir en las decisiones futuras.",
      tip: "Para decidir bien, ignora los costos hundidos y mira el costo de oportunidad."
    },
    {
      id: "eco-fc-035", unidad: "U4", tema: "Costos fijos, variables, marginal y medio",
      frente: "Distingue costo fijo, variable, marginal y medio.",
      reverso: "FIJO: no varía con la producción (arriendo). VARIABLE: cambia con la producción (insumos). MARGINAL (CMg): costo de producir UNA unidad adicional. MEDIO (CMe): costo total dividido por la cantidad producida.",
      tip: "La curva de costo marginal corta a la de costo medio en su punto MÍNIMO."
    },

    // ============ U5 · ESTRUCTURAS DE MERCADO Y FALLAS ============
    {
      id: "eco-fc-036", unidad: "U5", tema: "Competencia perfecta",
      frente: "¿Qué caracteriza a un mercado de competencia perfecta?",
      reverso: "Muchos compradores y vendedores, producto HOMOGÉNEO, libre entrada y salida y transparencia de información. Las empresas son TOMADORAS de precios: ninguna puede influir en el precio de mercado.",
      tip: "En competencia perfecta la empresa acepta el precio; no lo fija."
    },
    {
      id: "eco-fc-037", unidad: "U5", tema: "Maximización de beneficios y punto de cierre",
      frente: "¿Dónde maximiza beneficios una empresa y qué es el punto de cierre?",
      reverso: "Produce donde el INGRESO MARGINAL = COSTO MARGINAL (IMg = CMg). En competencia perfecta el ingreso marginal es igual al precio. PUNTO DE CIERRE (corto plazo): cuando el precio no alcanza a cubrir los costos VARIABLES medios, conviene dejar de producir.",
      tip: "Corto plazo: cierra si P < costo variable medio. Largo plazo: sale si P < costo total medio."
    },
    {
      id: "eco-fc-038", unidad: "U5", tema: "Monopolio",
      frente: "¿Qué es un monopolio y por qué su ingreso marginal es menor que el precio?",
      reverso: "Un ÚNICO vendedor de un bien SIN sustitutos cercanos. Enfrenta toda la curva de demanda del mercado, así que para vender más debe BAJAR el precio a todas las unidades: por eso su ingreso marginal es MENOR que el precio (IMg < P). Es fijador de precios.",
      tip: "El monopolista produce menos y cobra más que un mercado competitivo → pérdida de bienestar social."
    },
    {
      id: "eco-fc-039", unidad: "U5", tema: "Fuentes de poder de monopolio",
      frente: "¿De dónde surge el poder de monopolio y qué es un monopolio natural?",
      reverso: "De barreras de entrada: control exclusivo de un recurso, patentes y concesiones, economías de escala y regulación. MONOPOLIO NATURAL: una sola empresa abastece el mercado a menor costo que varias (altos costos fijos, ej. distribución de agua o electricidad).",
      tip: "Barreras de entrada altas → protegen las rentas del monopolista."
    },
    {
      id: "eco-fc-040", unidad: "U5", tema: "Discriminación de precios",
      frente: "¿Qué es la discriminación de precios y sus tres grados?",
      reverso: "Cobrar precios distintos por el mismo bien para capturar excedente del consumidor. 1er GRADO: precio distinto por cada unidad (el máximo que cada cliente pagaría). 2° GRADO: el precio varía según la CANTIDAD o versión (descuentos por volumen, tarifas en dos partes). 3er GRADO: precios distintos por SEGMENTO (estudiantes, jubilados).",
      tip: "Requiere poder de mercado y poder separar a los clientes evitando la reventa."
    },
    {
      id: "eco-fc-041", unidad: "U5", tema: "Competencia monopolística",
      frente: "¿Qué caracteriza a la competencia monopolística?",
      reverso: "MUCHAS empresas que venden productos DIFERENCIADOS (similares pero no idénticos), con libre entrada y salida. Cada una tiene algo de poder de mercado por la diferenciación, pero en el largo plazo la entrada de competidores erosiona las ganancias económicas.",
      tip: "Ejemplos: restaurantes, ropa, librerías. Diferenciación + libre entrada."
    },
    {
      id: "eco-fc-042", unidad: "U5", tema: "Oligopolio",
      frente: "¿Qué es un oligopolio y qué modelos describen su competencia?",
      reverso: "POCAS empresas dominan el mercado (producto homogéneo o diferenciado) con barreras de entrada; hay INTERDEPENDENCIA estratégica: cada decisión afecta y depende de las rivales. Modelos: COURNOT (compiten en cantidades), BERTRAND (en precios) y STACKELBERG (una lidera y las otras siguen).",
      tip: "La clave del oligopolio es la interdependencia: se decide anticipando la reacción del rival."
    },
    {
      id: "eco-fc-043", unidad: "U5", tema: "Teoría de juegos",
      frente: "Define equilibrio de Nash, estrategia dominante y dilema del prisionero.",
      reverso: "EQUILIBRIO DE NASH: situación en que ningún jugador gana cambiando su estrategia de forma unilateral. ESTRATEGIA DOMINANTE: la mejor opción para un jugador sin importar lo que hagan los demás. DILEMA DEL PRISIONERO: cada uno persigue su interés y ambos terminan peor que si hubieran cooperado.",
      tip: "El dilema del prisionero explica por qué las colusiones son inestables: a cada empresa le conviene traicionar."
    },
    {
      id: "eco-fc-044", unidad: "U5", tema: "Colusión y carteles",
      frente: "¿Qué es la colusión y qué efectos tiene?",
      reverso: "Acuerdo entre empresas (cartel) para fijar precios o repartir cantidades y maximizar el beneficio conjunto, actuando como un monopolio. Efectos: precios MÁS ALTOS para los consumidores y menor competencia. Es ilegal.",
      tip: "El compromiso estratégico creíble (costos hundidos, reputación) sostiene amenazas y acuerdos entre rivales."
    },
    {
      id: "eco-fc-045", unidad: "U5", tema: "Fallas de mercado",
      frente: "¿Qué es una falla de mercado y cuáles son sus tipos?",
      reverso: "Situación en que el mercado NO logra una asignación eficiente de recursos, justificando la intervención del Estado. Tipos: EXTERNALIDADES, BIENES PÚBLICOS, PODER DE MERCADO (monopolios/oligopolios) e INFORMACIÓN ASIMÉTRICA.",
      tip: "Las fallas de mercado son el principal argumento económico para que intervenga el Estado."
    },
    {
      id: "eco-fc-046", unidad: "U5", tema: "Externalidades y bienes públicos",
      frente: "¿Qué son las externalidades y los bienes públicos, y cómo se corrigen?",
      reverso: "EXTERNALIDAD: efecto sobre terceros sin compensación (negativa: contaminación; positiva: educación). Se corrige con negociación privada (teorema de COASE), impuestos PIGOVIANOS o regulación. BIEN PÚBLICO: NO excluible y NO rival (defensa, faros); el mercado lo subprovee, así que lo provee el Estado.",
      tip: "Externalidad negativa → impuesto pigoviano; externalidad positiva → subsidio."
    },
    {
      id: "eco-fc-047", unidad: "U5", tema: "Información asimétrica y agencia",
      frente: "¿Qué son la selección adversa, el riesgo moral y el problema de agencia?",
      reverso: "SELECCIÓN ADVERSA: información oculta ANTES del contrato (características ocultas), ej. autos usados \"limones\" o quien contrata seguro sabiendo que es de alto riesgo. RIESGO MORAL: acciones ocultas DESPUÉS del contrato, ej. el asegurado se cuida menos. PROBLEMA DE AGENCIA: un PRINCIPAL delega en un AGENTE con intereses distintos; se alinea con contratos, incentivos y monitoreo.",
      tip: "Adversa = antes (a quién elijo). Moral = después (cómo se comporta). Se mitigan con señales, garantías, monitoreo e incentivos."
    },
    {
      id: "eco-fc-048", unidad: "U5", tema: "Libre competencia en Chile",
      frente: "¿Qué instituciones defienden la libre competencia en Chile?",
      reverso: "La FISCALÍA NACIONAL ECONÓMICA (FNE) investiga y acusa infracciones; el TRIBUNAL DE DEFENSA DE LA LIBRE COMPETENCIA (TDLC) juzga y sanciona. Casos emblemáticos de colusión: farmacias (FASA, Salcobrand, Cruz Verde) y el rechazo de la fusión Falabella-D&S.",
      tip: "La delación compensada (2009) permite a un miembro del cartel delatarse a cambio de reducir su multa."
    },

    // ============ U6 · CUENTAS NACIONALES Y MERCADO LABORAL ============
    {
      id: "eco-fc-049", unidad: "U6", tema: "Qué es la macroeconomía",
      frente: "¿Qué estudia la macroeconomía y qué son variables endógenas y exógenas?",
      reverso: "Estudia el comportamiento AGREGADO de la economía (PIB, desempleo, inflación, tasas de interés). Variables ENDÓGENAS: se determinan DENTRO del modelo (producción, empleo, inflación). EXÓGENAS: vienen de FUERA (políticas, shocks externos).",
      tip: "Micro mira mercados individuales; macro mira la economía como un todo."
    },
    {
      id: "eco-fc-050", unidad: "U6", tema: "PIB: definición",
      frente: "¿Qué es el Producto Interno Bruto (PIB)?",
      reverso: "El VALOR DE MERCADO de todos los bienes y servicios FINALES producidos DENTRO de un país en un período determinado. \"Finales\" excluye los bienes intermedios para no contar doble; \"dentro del país\" lo distingue del PNB.",
      tip: "Bienes FINALES y producidos en el TERRITORIO, en un PERÍODO dado."
    },
    {
      id: "eco-fc-051", unidad: "U6", tema: "Métodos de cálculo del PIB",
      frente: "¿Cuáles son los métodos para medir el PIB?",
      reverso: "MÉTODO DEL GASTO: PIB = C + I + G + (X - M), es decir consumo + inversión + gasto de gobierno + exportaciones netas. MÉTODO DEL INGRESO: suma de todos los ingresos (salarios, rentas, intereses y beneficios). Ambos deben dar lo mismo.",
      tip: "El gasto de uno es el ingreso de otro: por eso los dos métodos coinciden."
    },
    {
      id: "eco-fc-052", unidad: "U6", tema: "PIB nominal vs. real",
      frente: "Diferencia entre PIB nominal y PIB real. ¿Qué es el deflactor?",
      reverso: "PIB NOMINAL: valora la producción a precios CORRIENTES (del año en curso). PIB REAL: la valora a precios CONSTANTES de un año base, eliminando el efecto de la inflación. El DEFLACTOR del PIB = (PIB nominal / PIB real) mide el nivel general de precios de todo lo producido.",
      tip: "El PIB REAL es el que sirve para comparar crecimiento entre años (no lo infla el alza de precios)."
    },
    {
      id: "eco-fc-053", unidad: "U6", tema: "IPC",
      frente: "¿Qué mide el IPC y cómo se construye?",
      reverso: "El Índice de Precios al Consumidor mide la variación del precio de una CANASTA fija de bienes y servicios representativa del consumo de los hogares (índice de Laspeyres). Es la principal medida del costo de la vida y de la INFLACIÓN. En Chile lo calcula el INE.",
      tip: "Inflación = variación porcentual del IPC. En Chile lo publica mensualmente el INE."
    },
    {
      id: "eco-fc-054", unidad: "U6", tema: "Sesgos del IPC vs. deflactor",
      frente: "¿Qué sesgos tiene el IPC y en qué se diferencia del deflactor?",
      reverso: "Sesgos del IPC: de SUSTITUCIÓN (canasta fija, no capta que la gente cambia hacia lo más barato), aparición de NUEVOS productos y mejoras de CALIDAD. El IPC usa una canasta fija (Laspeyres) y solo bienes de consumo; el DEFLACTOR abarca todo el PIB y varía su composición.",
      tip: "El IPC tiende a SOBREESTIMAR la inflación por el sesgo de sustitución."
    },
    {
      id: "eco-fc-055", unidad: "U6", tema: "Medición del desempleo",
      frente: "¿Cómo se mide el desempleo? Define fuerza de trabajo y tasa de desempleo.",
      reverso: "FUERZA DE TRABAJO (activa) = ocupados + desocupados que buscan empleo. Los INACTIVOS (estudiantes, jubilados, labores del hogar) no la integran. TASA DE DESEMPLEO = desocupados / fuerza de trabajo, es decir U / (E + U).",
      tip: "Quien no busca trabajo NO cuenta como desempleado: está inactivo, fuera de la fuerza de trabajo."
    },
    {
      id: "eco-fc-056", unidad: "U6", tema: "Tipos de desempleo",
      frente: "¿Cuáles son los tipos de desempleo?",
      reverso: "FRICCIONAL: tiempo de búsqueda entre un empleo y otro (transitorio, inevitable). ESTRUCTURAL: desajuste entre las habilidades de los trabajadores y lo que pide el mercado. CÍCLICO: por las recesiones (cae la actividad). La TASA NATURAL de desempleo = friccional + estructural (existe aun con economía sana).",
      tip: "El desempleo cíclico es el que las políticas de corto plazo buscan reducir; el friccional y estructural persisten."
    },
    {
      id: "eco-fc-057", unidad: "U6", tema: "Ahorro, inversión y fondos prestables",
      frente: "¿Cómo se relacionan el ahorro y la inversión en el sistema financiero?",
      reverso: "Las instituciones financieras conectan a quienes AHORRAN con quienes INVIERTEN. En una economía cerrada, el ahorro nacional iguala a la inversión (S = I). En el mercado de FONDOS PRESTABLES, la oferta viene del ahorro y la demanda de la inversión; la TASA DE INTERÉS es su precio de equilibrio.",
      tip: "Más ahorro → baja la tasa de interés → más inversión."
    },

    // ============ U7 · DINERO, INFLACIÓN Y POLÍTICA MACROECONÓMICA ============
    {
      id: "eco-fc-058", unidad: "U7", tema: "Funciones del dinero",
      frente: "¿Cuáles son las funciones del dinero?",
      reverso: "MEDIO DE CAMBIO (se acepta para transar y evita el trueque), UNIDAD DE CUENTA (mide y compara valores) y DEPÓSITO DE VALOR (conserva poder de compra en el tiempo). Debe ser aceptado, transportable, divisible y durable.",
      tip: "Medio de cambio, unidad de cuenta y depósito de valor: las tres funciones clásicas."
    },
    {
      id: "eco-fc-059", unidad: "U7", tema: "Banco Central y política monetaria",
      frente: "¿Qué hace el Banco Central y con qué herramientas controla el dinero?",
      reverso: "El Banco Central de Chile (autónomo desde 1989) busca la ESTABILIDAD de precios y el normal funcionamiento de los pagos; su meta de inflación es 3% anual (rango 2%-4%). Herramientas: OPERACIONES DE MERCADO ABIERTO (compra/venta de bonos), ENCAJE (reservas exigidas a los bancos) y la TASA de política / descuento.",
      tip: "Para controlar la inflación, el Banco Central sube la tasa de interés (política contractiva)."
    },
    {
      id: "eco-fc-060", unidad: "U7", tema: "Creación de dinero y multiplicador",
      frente: "¿Cómo crean dinero los bancos y qué es el multiplicador del dinero?",
      reverso: "Los bancos comerciales reciben depósitos, guardan una parte como reserva y prestan el resto, que vuelve a depositarse: así EXPANDEN la cantidad de dinero. El MULTIPLICADOR del dinero es mayor mientras MENOR sea el coeficiente de reservas (aprox. 1 / coeficiente de reservas).",
      tip: "Más encaje (reservas) → menor multiplicador → menos dinero creado."
    },
    {
      id: "eco-fc-061", unidad: "U7", tema: "Teoría cuantitativa e inflación",
      frente: "¿Qué dice la teoría cuantitativa del dinero sobre la inflación?",
      reverso: "Ecuación de cambio: M x V = P x Y (dinero por velocidad = nivel de precios por producción). Si V e Y son estables, un aumento de la cantidad de dinero (M) se traduce en mayor nivel de precios (P). Por eso, en el largo plazo, \"la inflación es siempre un fenómeno monetario\".",
      tip: "Imprimir dinero por encima del crecimiento de la producción genera inflación."
    },
    {
      id: "eco-fc-062", unidad: "U7", tema: "Costos de la inflación y efecto Fisher",
      frente: "¿Cuáles son los costos de la inflación y qué dice la ecuación de Fisher?",
      reverso: "Costos: de MENÚ (cambiar precios), de SUELA DE ZAPATOS (evitar tener efectivo), distorsión de precios relativos, distorsión tributaria e incertidumbre para planificar. ECUACIÓN DE FISHER: tasa nominal = tasa real + inflación esperada (i = r + pi).",
      tip: "El impuesto inflacionario es la pérdida de poder de compra de quien mantiene efectivo."
    },
    {
      id: "eco-fc-063", unidad: "U7", tema: "Demanda y oferta agregadas",
      frente: "¿Qué son la demanda agregada (DA) y la oferta agregada (OA)?",
      reverso: "DA: gasto total en la economía a distintos niveles de precios (C + I + G + XN); pendiente NEGATIVA. OA de corto plazo: ASCENDENTE (los precios y salarios son rígidos). OA de largo plazo: VERTICAL en el PIB potencial (pleno empleo de los recursos).",
      tip: "En el largo plazo la producción la fijan los recursos y la tecnología, no el nivel de precios."
    },
    {
      id: "eco-fc-064", unidad: "U7", tema: "Política monetaria y fiscal",
      frente: "¿Cómo actúan la política monetaria y la fiscal sobre la demanda agregada?",
      reverso: "MONETARIA EXPANSIVA: más dinero → baja la tasa de interés → sube consumo e inversión → DA a la derecha (contractiva: lo inverso, para frenar la inflación). FISCAL EXPANSIVA: más gasto público o menos impuestos → DA a la derecha, amplificada por el EFECTO MULTIPLICADOR.",
      tip: "Expansiva = estimular la actividad y el empleo; contractiva = enfriar la economía y la inflación."
    },
    {
      id: "eco-fc-065", unidad: "U7", tema: "Curva de Phillips",
      frente: "¿Qué muestra la curva de Phillips en el corto y en el largo plazo?",
      reverso: "CORTO PLAZO: relación INVERSA entre inflación y desempleo (para bajar el desempleo se acepta más inflación, y viceversa). LARGO PLAZO: es VERTICAL en la tasa natural de desempleo: no existe disyuntiva permanente, porque las expectativas de inflación se ajustan.",
      tip: "A largo plazo no se puede \"comprar\" menos desempleo con más inflación: solo queda más inflación."
    },
    {
      id: "eco-fc-066", unidad: "U7", tema: "Economía abierta",
      frente: "En economía abierta, ¿qué son las exportaciones netas, el tipo de cambio y la PPC?",
      reverso: "EXPORTACIONES NETAS (XN = X - M) miden el saldo comercial. TIPO DE CAMBIO NOMINAL: precio de una moneda en términos de otra (ej. 1 USD = 900 CLP); REAL: el nominal ajustado por los precios de ambos países (poder adquisitivo relativo). PARIDAD DEL PODER DE COMPRA (PPC): a largo plazo el tipo de cambio tiende a igualar el precio de una misma canasta entre países. Identidad: S = I + FSNC (el ahorro financia la inversión y la salida neta de capital).",
      tip: "Depreciación del peso → exportaciones más baratas afuera → suben las exportaciones netas."
    }
  ]
};
