// Módulo de estudio — ECONOMÍA (flashcards con repaso espaciado)
// Contenido ALINEADO al TEMARIO OFICIAL de Economía del Examen de Grado y
// VALIDADO contra fuentes estándar (Mankiw, Samuelson, Pindyck & Rubinfeld) y
// el contexto chileno (Banco Central de Chile, IPC/INE, FNE/TDLC).
//
// Alineación al temario (regla del cliente: lo que está en el temario se enseña;
// lo que no está se elimina; lo que falta se agrega):
//   - NO SE ELIMINÓ ningún tema: todo el contenido anterior ya pertenecía al
//     temario. Se REORGANIZÓ de 7 a 11 unidades para cubrir el 100% del temario.
//   - SE AGREGARON (faltaban por completo o estaban muy sueltos):
//       * Los 10 principios de la economía y el método/modelos.
//       * Mecanismo de mercado y tipos de mercado (las 4 estructuras) como intro.
//       * Comercio exterior como política del gobierno (aranceles/apertura).
//       * Teoría del consumidor: demanda individual vs. de mercado.
//       * Producto medio y marginal; formas de las curvas de costo de corto plazo;
//         curvas de costo de largo plazo (economías/deseconomías de escala).
//       * Maximización de la empresa competitiva (IMg=CMg), curva de oferta de
//         mercado, punto de cierre y salida.
//       * Costos sociales del monopolio; barreras de entrada y precios como barrera
//         (predatorios/penetración).
//       * ORGANIZACIÓN INDUSTRIAL completa: integración vertical (costos triviales/
//         no triviales), costos de transacción y coordinación (Coase), teoría de
//         agencia (principal-agente-contrato), teoría de juegos (Nash, dominante,
//         dilema del prisionero, forma estratégica/extensiva), colusión y guerra de
//         precios, compromiso estratégico y credibilidad, señalización, selección
//         adversa y riesgo moral (separados), regulación FNE/TDLC y delación
//         compensada.
//       * Demanda de dinero y equilibrio monetario.
//       * ECONOMÍA ABIERTA y MODELOS MACRO avanzados: tipo de cambio real/nominal,
//         PPP, mercado de divisas, modelo de SOLOW (estado estacionario, progreso
//         tecnológico), modelo IS-LM (estabilización con política fiscal/monetaria)
//         y modelo MUNDELL-FLEMING (tipo de cambio flexible vs. fijo).
//
// Correcciones de contenido validadas:
//   - Coase, "La naturaleza de la empresa", es de 1937 (el apunte original decía 1939).
//   - Selección adversa = información oculta ANTES del contrato (características
//     ocultas); riesgo moral = acciones ocultas DESPUÉS del contrato.
//   - Economía abierta: identidad consistente S = I + FSNC (por lo tanto XN = FSNC
//     con la convención de signo del ahorro; el apunte mezclaba "XN = -FSNC").
//   - Ventaja absoluta vs. comparativa (el comercio se basa en la comparativa).
//   - Contexto chileno: el IPC lo mide el INE; la meta de inflación del Banco
//     Central de Chile es 3% anual (rango de tolerancia 2%-4%).
//
// El examen real es SIN CALCULADORA: todas las identidades (PIB = C+I+G+XN, MV=PY,
// i = r + pi, TD = U/FT) y todos los modelos gráficos (FPP, oferta/demanda, DA-OA,
// IS-LM, Mundell-Fleming, Solow, Phillips, teoría de juegos) se incluyen como
// RELACIONES conceptuales y GRÁFICAS a entender, no como ejercicios de cálculo.
//
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
    { id: "U1", titulo: "Principios, Escasez y Mercados" },
    { id: "U2", titulo: "Demanda, Oferta y Elasticidad" },
    { id: "U3", titulo: "Equilibrio de Mercado y Bienestar" },
    { id: "U4", titulo: "Políticas del Gobierno y Fallas de Mercado" },
    { id: "U5", titulo: "Teoría del Consumidor" },
    { id: "U6", titulo: "Producción y Costos" },
    { id: "U7", titulo: "Estructuras de Mercado y Poder de Mercado" },
    { id: "U8", titulo: "Organización Industrial: Firma, Juegos e Información" },
    { id: "U9", titulo: "Macro: Cuentas Nacionales, Ahorro y Empleo" },
    { id: "U10", titulo: "Dinero, Inflación y Fluctuaciones" },
    { id: "U11", titulo: "Economía Abierta y Modelos Macro (Solow, IS-LM, Mundell-Fleming)" }
  ],
  tarjetas: [
    // ===================== U1 · PRINCIPIOS, ESCASEZ Y MERCADOS =====================
    {
      id: "eco-fc-001", unidad: "U1", tema: "Definición de economía",
      frente: "¿Qué estudia la economía (definición para memorizar)?",
      reverso: "Cómo la sociedad administra sus recursos ESCASOS para satisfacer necesidades ILIMITADAS. La escasez obliga a elegir cómo se asignan esos recursos.",
      tip: "Escasez = recursos limitados frente a necesidades ilimitadas. Sin escasez no habría economía."
    },
    {
      id: "eco-fc-002", unidad: "U1", tema: "Cómo deciden las personas",
      frente: "Nombra los principios sobre cómo toman decisiones las personas.",
      reverso: "1) Enfrentan disyuntivas (trade-offs). 2) El costo de una cosa es aquello a lo que se renuncia. 3) Las personas racionales piensan en el margen. 4) Responden a incentivos.",
      tip: "Toda decisión económica es una disyuntiva: elegir algo implica renunciar a otra cosa."
    },
    {
      id: "eco-fc-003", unidad: "U1", tema: "Cómo funciona la economía en conjunto",
      frente: "Nombra los principios sobre cómo interactúan las personas y funciona la economía como un todo.",
      reverso: "El comercio mejora el bienestar de todos; el mercado suele organizar bien la actividad económica; el Estado puede intervenir para corregir FALLAS de mercado. Además: el nivel de vida depende de la PRODUCTIVIDAD; la inflación surge cuando se emite demasiado dinero; y a corto plazo hay disyuntiva entre inflación y desempleo.",
      tip: "Son los principios que enlazan micro (mercados) con macro (crecimiento, inflación, empleo)."
    },
    {
      id: "eco-fc-004", unidad: "U1", tema: "Método y modelos económicos",
      frente: "¿Por qué la economía es una ciencia y qué son los modelos económicos?",
      reverso: "Es una ciencia social porque observa, formula supuestos y contrasta teorías. Los MODELOS son representaciones simplificadas de la realidad (basadas en supuestos) que aíslan las relaciones clave entre variables para analizarlas.",
      tip: "Un modelo es útil no por ser realista en todo, sino por capturar lo esencial del problema."
    },
    {
      id: "eco-fc-005", unidad: "U1", tema: "Costo de oportunidad",
      frente: "¿Qué es el costo de oportunidad?",
      reverso: "Es aquello a lo que se RENUNCIA para obtener otra cosa: el valor de la mejor alternativa desechada. No es solo dinero, incluye tiempo y opciones perdidas.",
      tip: "El verdadero costo de algo es lo que dejas de hacer por hacerlo."
    },
    {
      id: "eco-fc-006", unidad: "U1", tema: "Pensamiento marginal",
      frente: "¿Qué significa pensar \"en términos marginales\"?",
      reverso: "Evaluar los pequeños ajustes adicionales a un plan de acción: comparar el beneficio marginal (de una unidad extra) con su costo marginal. Se decide hacer algo mientras el beneficio marginal supere al costo marginal.",
      tip: "Racional = actúa hasta que el beneficio marginal iguala al costo marginal."
    },
    {
      id: "eco-fc-007", unidad: "U1", tema: "Frontera de Posibilidades de Producción",
      frente: "¿Qué representa la Frontera de Posibilidades de Producción (FPP)?",
      reverso: "Las combinaciones MÁXIMAS de dos bienes que una economía puede producir con sus recursos y tecnología dados. Los puntos sobre la curva son eficientes; los interiores, ineficientes (recursos ociosos); los exteriores, inalcanzables hoy.",
      tip: "La FPP ilustra escasez, costo de oportunidad (su pendiente) y eficiencia."
    },
    {
      id: "eco-fc-008", unidad: "U1", tema: "Desplazamiento de la FPP",
      frente: "¿Qué desplaza la FPP hacia afuera y por qué suele ser cóncava?",
      reverso: "Se desplaza hacia afuera con mejoras tecnológicas o más recursos (crecimiento económico). Es cóncava (curva hacia el origen) por el costo de oportunidad CRECIENTE: los recursos no son igual de productivos en todos los usos.",
      tip: "Crecimiento económico = la FPP se corre hacia afuera."
    },
    {
      id: "eco-fc-009", unidad: "U1", tema: "Ventaja comparativa vs. absoluta",
      frente: "Diferencia entre ventaja absoluta y ventaja comparativa.",
      reverso: "Absoluta: producir un bien usando MENOS recursos que el otro. Comparativa: producirlo a un MENOR costo de oportunidad que el otro. El comercio se basa en la ventaja COMPARATIVA, no en la absoluta.",
      tip: "Aunque un país sea mejor en todo (ventaja absoluta), aún gana especializándose según su ventaja comparativa."
    },
    {
      id: "eco-fc-010", unidad: "U1", tema: "Especialización e intercambio",
      frente: "¿Por qué el intercambio y la especialización mejoran el bienestar de todos?",
      reverso: "Cada parte se especializa en el bien donde tiene ventaja comparativa (mayor eficiencia) y comercia por el resto. Así se produce más con los mismos recursos y ambas partes quedan mejor.",
      tip: "El comercio no es un juego de suma cero: agranda la torta para todos."
    },
    {
      id: "eco-fc-011", unidad: "U1", tema: "Mercado y tipos de mercado",
      frente: "¿Cómo funciona el mecanismo de mercado y cuáles son los cuatro tipos de mercado?",
      reverso: "El mercado coordina a compradores (demanda) y vendedores (oferta) mediante los PRECIOS, que transmiten información e incentivos y responden qué, cómo y para quién producir. Tipos: competencia perfecta (muchos, producto homogéneo), competencia monopolística (muchos, producto diferenciado), oligopolio (pocos) y monopolio (uno solo, sin sustitutos cercanos).",
      tip: "El precio de mercado surge del cruce de oferta y demanda; ordena la actividad económica."
    },

    // ===================== U2 · DEMANDA, OFERTA Y ELASTICIDAD =====================
    {
      id: "eco-fc-012", unidad: "U2", tema: "Ley de la demanda",
      frente: "¿Qué dice la ley de la demanda y por qué la curva tiene pendiente negativa?",
      reverso: "Ceteris paribus, al SUBIR el precio de un bien BAJA su cantidad demandada (relación inversa). Se explica por el efecto sustitución y el efecto ingreso.",
      tip: "\"Ceteris paribus\" = todo lo demás constante. La curva de demanda baja de izquierda a derecha."
    },
    {
      id: "eco-fc-013", unidad: "U2", tema: "Cambio en demanda vs. cantidad demandada",
      frente: "Diferencia entre \"cambio en la cantidad demandada\" y \"cambio en la demanda\".",
      reverso: "Cambio en la CANTIDAD demandada: movimiento A LO LARGO de la curva, causado por el precio del propio bien. Cambio en la DEMANDA: DESPLAZAMIENTO de toda la curva, causado por otros factores (ingreso, precios relacionados, gustos, expectativas).",
      tip: "El precio del bien mueve a lo largo; cualquier otra cosa desplaza la curva."
    },
    {
      id: "eco-fc-014", unidad: "U2", tema: "Determinantes de la demanda",
      frente: "¿Qué factores (distintos al precio) DESPLAZAN la curva de demanda?",
      reverso: "Ingreso del consumidor, precios de bienes relacionados (sustitutos y complementarios), gustos y preferencias, expectativas y número de compradores.",
      tip: "Un alza del ingreso desplaza a la derecha la demanda de un bien normal y a la izquierda la de un bien inferior."
    },
    {
      id: "eco-fc-015", unidad: "U2", tema: "Función lineal de demanda y oferta",
      frente: "¿Cómo se representa gráficamente una función lineal de demanda y de oferta?",
      reverso: "En un plano precio (eje vertical) - cantidad (eje horizontal), la DEMANDA es una recta de pendiente negativa (a mayor precio, menor cantidad) y la OFERTA una recta de pendiente positiva (a mayor precio, mayor cantidad). Un cambio de precio mueve a lo largo de la recta; otro factor la desplaza en paralelo.",
      tip: "Sin cálculo: basta describir la pendiente (negativa la demanda, positiva la oferta) y qué la mueve."
    },
    {
      id: "eco-fc-016", unidad: "U2", tema: "Ley de la oferta",
      frente: "¿Qué dice la ley de la oferta y qué desplaza su curva?",
      reverso: "Ceteris paribus, al SUBIR el precio SUBE la cantidad ofrecida (relación directa; pendiente positiva). La curva se desplaza por: precios de los insumos, tecnología, expectativas y número de vendedores.",
      tip: "Mejor tecnología o insumos más baratos desplazan la oferta a la derecha (mayor oferta)."
    },
    {
      id: "eco-fc-017", unidad: "U2", tema: "Cambio en oferta vs. cantidad ofrecida",
      frente: "Diferencia entre \"cambio en la cantidad ofrecida\" y \"cambio en la oferta\".",
      reverso: "Cambio en la CANTIDAD ofrecida: movimiento a lo largo de la curva por el precio del propio bien. Cambio en la OFERTA: desplazamiento de toda la curva por otros factores (costos de los insumos, tecnología, expectativas, número de vendedores).",
      tip: "Misma lógica que en demanda: el precio mueve a lo largo; lo demás desplaza."
    },
    {
      id: "eco-fc-018", unidad: "U2", tema: "Elasticidad precio de la demanda",
      frente: "¿Qué mide la elasticidad precio de la demanda?",
      reverso: "La SENSIBILIDAD de la cantidad demandada ante cambios en el precio. Demanda ELÁSTICA: la cantidad reacciona mucho (bienes de lujo, con sustitutos). INELÁSTICA: reacciona poco (necesidades, sin sustitutos).",
      tip: "Si la demanda es inelástica, subir el precio AUMENTA el ingreso total; si es elástica, lo REDUCE."
    },
    {
      id: "eco-fc-019", unidad: "U2", tema: "Elasticidad cruzada",
      frente: "¿Qué mide la elasticidad cruzada y qué signo indica sustitutos o complementarios?",
      reverso: "Mide cómo cambia la demanda de un bien ante el cambio de precio de OTRO bien. Signo POSITIVO = bienes sustitutos (sube el precio del té, sube la demanda de café). Signo NEGATIVO = complementarios (sube el precio de la impresora, baja la demanda de tinta).",
      tip: "Positiva → sustitutos; negativa → complementarios."
    },
    {
      id: "eco-fc-020", unidad: "U2", tema: "Elasticidad ingreso",
      frente: "¿Qué mide la elasticidad ingreso de la demanda?",
      reverso: "La sensibilidad de la demanda ante cambios en el INGRESO del consumidor. Signo POSITIVO = bien normal (más ingreso, más demanda). Signo NEGATIVO = bien inferior (más ingreso, menos demanda).",
      tip: "Positiva → normal; negativa → inferior."
    },
    {
      id: "eco-fc-021", unidad: "U2", tema: "Determinantes de la elasticidad precio",
      frente: "¿De qué depende que la demanda de un bien sea más o menos elástica?",
      reverso: "De la existencia de sustitutos cercanos (más sustitutos → más elástica), de si es necesidad o lujo (los lujos son más elásticos), del horizonte temporal (más elástica en el largo plazo) y de la proporción del ingreso que representa.",
      tip: "Mientras más fácil sea reemplazar el bien, más elástica es su demanda."
    },
    {
      id: "eco-fc-022", unidad: "U2", tema: "Elasticidad de la oferta",
      frente: "¿Qué mide la elasticidad de la oferta y de qué depende?",
      reverso: "La sensibilidad de la cantidad OFRECIDA ante cambios en el precio. Depende sobre todo del horizonte temporal y de la flexibilidad para ajustar la producción: la oferta es más elástica en el largo plazo, cuando todos los factores pueden variar.",
      tip: "En el corto plazo (con factores fijos) la oferta es más rígida (inelástica)."
    },

    // ===================== U3 · EQUILIBRIO DE MERCADO Y BIENESTAR =====================
    {
      id: "eco-fc-023", unidad: "U3", tema: "Equilibrio de mercado",
      frente: "¿Qué es el equilibrio de mercado?",
      reverso: "El punto donde la cantidad demandada iguala a la cantidad ofrecida (se cruzan oferta y demanda). Determina el precio y la cantidad de equilibrio. A ese precio no hay escasez ni excedente.",
      tip: "Precio de equilibrio = precio que \"vacía\" el mercado."
    },
    {
      id: "eco-fc-024", unidad: "U3", tema: "Cambio en el equilibrio por la demanda",
      frente: "¿Qué le pasa al equilibrio si AUMENTA la demanda (la oferta no cambia)?",
      reverso: "La curva de demanda se desplaza a la derecha: SUBEN tanto el precio como la cantidad de equilibrio. Si la demanda cae, ambos bajan.",
      tip: "Con oferta fija, precio y cantidad se mueven en la MISMA dirección que la demanda."
    },
    {
      id: "eco-fc-025", unidad: "U3", tema: "Cambio en el equilibrio por la oferta",
      frente: "¿Qué le pasa al equilibrio si AUMENTA la oferta (la demanda no cambia)?",
      reverso: "La curva de oferta se desplaza a la derecha: BAJA el precio y SUBE la cantidad de equilibrio. Si la oferta cae, el precio sube y la cantidad baja.",
      tip: "Con demanda fija, precio y cantidad se mueven en direcciones OPUESTAS al desplazarse la oferta."
    },
    {
      id: "eco-fc-026", unidad: "U3", tema: "Cambios simultáneos de oferta y demanda",
      frente: "Si se desplazan a la vez la oferta y la demanda, ¿qué queda determinado y qué queda ambiguo?",
      reverso: "Cuando ambas curvas se mueven, se puede determinar con certeza la dirección de UNA variable (precio o cantidad) pero la otra queda AMBIGUA: depende de cuál desplazamiento sea mayor. Hay que analizar caso a caso la magnitud relativa de cada cambio.",
      tip: "Con dos desplazamientos a la vez, siempre uno de los dos resultados (precio o cantidad) es indeterminado sin saber magnitudes."
    },
    {
      id: "eco-fc-027", unidad: "U3", tema: "Excedente del consumidor",
      frente: "¿Qué es el excedente del consumidor?",
      reverso: "La diferencia entre lo que los consumidores estaban DISPUESTOS a pagar (disponibilidad a pagar) y lo que efectivamente pagaron. Gráficamente, el área bajo la curva de demanda y sobre el precio de mercado. Un precio más bajo lo AUMENTA.",
      tip: "Mide el beneficio neto que el comprador obtiene del intercambio."
    },
    {
      id: "eco-fc-028", unidad: "U3", tema: "Excedente del productor y eficiencia",
      frente: "¿Qué es el excedente del productor y cuándo un mercado es eficiente?",
      reverso: "Excedente del productor: diferencia entre el precio recibido y el costo de producir / disponibilidad a vender (área sobre la oferta y bajo el precio). Un precio más alto lo AUMENTA. Un mercado competitivo es EFICIENTE porque maximiza el excedente total (consumidor + productor).",
      tip: "En competencia, la \"mano invisible\" asigna los recursos maximizando el bienestar total."
    },

    // ============ U4 · POLÍTICAS DEL GOBIERNO Y FALLAS DE MERCADO ============
    {
      id: "eco-fc-029", unidad: "U4", tema: "Precio máximo (techo)",
      frente: "¿Qué efecto tiene un precio máximo fijado bajo el equilibrio?",
      reverso: "Genera ESCASEZ: a ese precio la cantidad demandada supera la ofrecida. Aparecen listas de espera, racionamiento o mercados informales. Ejemplo típico: controles de arriendo.",
      tip: "Precio máximo efectivo (bajo el equilibrio) → falta el producto."
    },
    {
      id: "eco-fc-030", unidad: "U4", tema: "Precio mínimo y salario mínimo",
      frente: "¿Qué efecto tiene un precio mínimo fijado sobre el equilibrio (ej. salario mínimo)?",
      reverso: "Genera EXCEDENTE (sobreoferta): la cantidad ofrecida supera la demandada. En el mercado laboral, un salario mínimo por encima del de equilibrio puede producir desempleo (más trabajadores dispuestos que puestos disponibles).",
      tip: "Precio mínimo efectivo (sobre el equilibrio) → sobra producto / desempleo."
    },
    {
      id: "eco-fc-031", unidad: "U4", tema: "Impuestos, subsidios y carga muerta",
      frente: "¿Cómo afectan los impuestos al mercado y qué es la pérdida de eficiencia?",
      reverso: "Un impuesto abre una brecha entre el precio que paga el comprador y el que recibe el vendedor, reduce la cantidad transada y genera una PÉRDIDA IRRECUPERABLE DE EFICIENCIA (carga muerta): transacciones beneficiosas que ya no ocurren. Un subsidio hace lo inverso (aumenta la cantidad).",
      tip: "La carga del impuesto recae más sobre el lado MÁS INELÁSTICO del mercado."
    },
    {
      id: "eco-fc-032", unidad: "U4", tema: "Comercio exterior y aranceles",
      frente: "¿Cómo afectan el comercio exterior y los aranceles al mercado doméstico?",
      reverso: "Abrir el mercado al comercio acerca el precio local al precio mundial: si el país importa, el precio baja (gana el consumidor); si exporta, sube (gana el productor). El comercio aumenta el excedente TOTAL. Un ARANCEL (impuesto a la importación) sube el precio interno, reduce las importaciones y crea pérdida de eficiencia.",
      tip: "El libre comercio agranda la torta total, aunque redistribuye entre consumidores y productores."
    },
    {
      id: "eco-fc-033", unidad: "U4", tema: "Fallas de mercado",
      frente: "¿Qué es una falla de mercado y cuáles son sus tipos?",
      reverso: "Situación en que el mercado NO logra una asignación eficiente de recursos, justificando la intervención del Estado. Tipos: EXTERNALIDADES, BIENES PÚBLICOS, PODER DE MERCADO (monopolios/oligopolios/carteles) e INFORMACIÓN ASIMÉTRICA.",
      tip: "Las fallas de mercado son el principal argumento económico para que intervenga el Estado."
    },
    {
      id: "eco-fc-034", unidad: "U4", tema: "Externalidades y su corrección",
      frente: "¿Qué son las externalidades y cómo se corrigen?",
      reverso: "Efecto de una actividad sobre terceros sin compensación. NEGATIVA: impone costos externos (contaminación). POSITIVA: genera beneficios externos (educación). Se corrige con negociación privada (teorema de COASE), impuestos PIGOVIANOS o permisos transables (para las negativas) y subsidios (para las positivas), o con regulación directa.",
      tip: "Externalidad negativa → impuesto pigoviano; externalidad positiva → subsidio."
    },
    {
      id: "eco-fc-035", unidad: "U4", tema: "Bienes públicos",
      frente: "¿Qué es un bien público y por qué lo provee el Estado?",
      reverso: "Un bien NO excluible (no se puede impedir su uso) y NO rival (que uno lo use no reduce lo disponible para otros): defensa nacional, faros, alumbrado. El mercado lo SUBPROVEE por el problema del \"free rider\" (polizón), así que suele proveerlo el Estado o subsidiarse.",
      tip: "No excluible + no rival = el mercado no lo provee bien; entra el Estado."
    },

    // ============ U5 · TEORÍA DEL CONSUMIDOR ============
    {
      id: "eco-fc-036", unidad: "U5", tema: "Demanda individual y de mercado",
      frente: "Diferencia entre la demanda de un individuo y la demanda de mercado.",
      reverso: "La demanda del INDIVIDUO muestra las cantidades que un consumidor está dispuesto a comprar a cada precio (pendiente negativa). La demanda de MERCADO es la SUMA HORIZONTAL de las demandas individuales: a cada precio, se suman las cantidades que todos demandan.",
      tip: "Mercado = suma horizontal (por cantidades) de todas las demandas individuales."
    },
    {
      id: "eco-fc-037", unidad: "U5", tema: "Efecto sustitución",
      frente: "¿Qué es el efecto sustitución cuando baja el precio de un bien?",
      reverso: "El consumidor reemplaza los bienes que se volvieron relativamente más caros por el bien que abarató, manteniendo constante el nivel de utilidad. Es el cambio de consumo por el precio RELATIVO.",
      tip: "Baja el precio de un bien → lo prefiero frente a sus sustitutos."
    },
    {
      id: "eco-fc-038", unidad: "U5", tema: "Efecto renta (ingreso)",
      frente: "¿Qué es el efecto renta cuando baja el precio de un bien?",
      reverso: "Al bajar el precio, el poder adquisitivo (ingreso real) del consumidor AUMENTA, aunque su ingreso nominal no cambie, permitiéndole comprar más. Es el cambio de consumo por el mayor poder de compra.",
      tip: "El efecto total de un cambio de precio = efecto sustitución + efecto renta."
    },
    {
      id: "eco-fc-039", unidad: "U5", tema: "Bienes normales vs. inferiores",
      frente: "Diferencia entre bien normal y bien inferior.",
      reverso: "Bien NORMAL: la demanda AUMENTA cuando sube el ingreso (ej. ropa de marca). Bien INFERIOR: la demanda DISMINUYE cuando sube el ingreso (ej. transporte público, alimentos de menor calidad, que se reemplazan al tener más plata).",
      tip: "\"Inferior\" no es de mala calidad: es el que se deja de consumir al ganar más."
    },
    {
      id: "eco-fc-040", unidad: "U5", tema: "Sustitutos vs. complementarios",
      frente: "Diferencia entre bienes sustitutos y complementarios.",
      reverso: "SUSTITUTOS: se reemplazan entre sí (té y café); si sube el precio de uno, sube la demanda del otro. COMPLEMENTARIOS: se consumen juntos (impresora y tinta); si sube el precio de uno, baja la demanda del otro.",
      tip: "Sustitutos compiten; complementarios se acompañan."
    },

    // ============ U6 · PRODUCCIÓN Y COSTOS ============
    {
      id: "eco-fc-041", unidad: "U6", tema: "Función de producción y plazos",
      frente: "¿Qué es la función de producción y cómo se distingue el corto del largo plazo?",
      reverso: "Relaciona la cantidad de factores (trabajo, capital) con la cantidad de producto obtenido. CORTO PLAZO: al menos un factor es FIJO (ej. la planta). LARGO PLAZO: TODOS los factores son variables.",
      tip: "La distinción corto/largo plazo no es de tiempo en el reloj, sino de qué factores puedo ajustar."
    },
    {
      id: "eco-fc-042", unidad: "U6", tema: "Producto medio y marginal",
      frente: "¿Qué son el producto medio y el producto marginal del trabajo?",
      reverso: "PRODUCTO MEDIO: producción total dividida por el número de trabajadores (producción promedio por trabajador). PRODUCTO MARGINAL: el aumento de la producción total al añadir UN trabajador más.",
      tip: "El marginal es \"lo que aporta el último\"; el medio es \"el promedio de todos\"."
    },
    {
      id: "eco-fc-043", unidad: "U6", tema: "Rendimientos marginales decrecientes",
      frente: "¿Qué dice la ley de los rendimientos marginales decrecientes?",
      reverso: "Al añadir unidades adicionales de un factor variable (ej. trabajo) manteniendo fijos los demás, el producto marginal (lo que aporta cada unidad extra) termina por DISMINUIR a partir de cierto punto.",
      tip: "Es de CORTO plazo (hay un factor fijo). No confundir con rendimientos a escala."
    },
    {
      id: "eco-fc-044", unidad: "U6", tema: "Rendimientos a escala",
      frente: "¿Qué son los rendimientos a escala y sus tres tipos?",
      reverso: "Miden cómo cambia la producción cuando se aumentan TODOS los factores en la misma proporción (largo plazo). CRECIENTES: el producto sube más que proporcionalmente. CONSTANTES: en igual proporción. DECRECIENTES: menos que proporcionalmente.",
      tip: "Rendimientos crecientes a escala se asocian a economías de escala (baja el costo medio de largo plazo)."
    },
    {
      id: "eco-fc-045", unidad: "U6", tema: "Costo económico vs. contable",
      frente: "Diferencia entre costo económico y costo contable. ¿Qué son los costos hundidos?",
      reverso: "El costo CONTABLE registra solo desembolsos explícitos. El costo ECONÓMICO agrega el costo de OPORTUNIDAD (implícito). Los costos HUNDIDOS (irrecuperables) ya se pagaron y no se recuperan: NO deben influir en las decisiones futuras.",
      tip: "Para decidir bien, ignora los costos hundidos y mira el costo de oportunidad."
    },
    {
      id: "eco-fc-046", unidad: "U6", tema: "Costos fijos, variables, marginal y medio",
      frente: "Distingue costo fijo, variable, marginal y medio.",
      reverso: "FIJO: no varía con la producción (arriendo). VARIABLE: cambia con la producción (insumos). MARGINAL (CMg): costo de producir UNA unidad adicional. MEDIO (CMe): costo total dividido por la cantidad producida.",
      tip: "La curva de costo marginal corta a la de costo medio en su punto MÍNIMO."
    },
    {
      id: "eco-fc-047", unidad: "U6", tema: "Curvas de costo de corto plazo",
      frente: "¿Qué forma tienen las curvas de costo de corto plazo?",
      reverso: "El costo marginal (CMg) tiene forma de U: primero baja y luego sube por los rendimientos marginales decrecientes. El costo medio total (CMe) también es una U y su mínimo lo cruza el CMg. El costo fijo medio cae de forma continua al repartirse en más unidades.",
      tip: "Todo el análisis es gráfico: curvas en U y el CMg cortando al CMe en su mínimo."
    },
    {
      id: "eco-fc-048", unidad: "U6", tema: "Costo de largo plazo y economías de escala",
      frente: "En el largo plazo, ¿qué son las economías y deseconomías de escala?",
      reverso: "En el largo plazo todos los factores varían y la empresa elige la escala óptima. ECONOMÍAS DE ESCALA: el costo medio de largo plazo BAJA al aumentar la producción (especialización, tamaño). DESECONOMÍAS: el costo medio SUBE (problemas de coordinación y burocracia). Entre medio hay rendimientos constantes.",
      tip: "La curva de costo medio de largo plazo suele tener forma de U ancha: economías, luego deseconomías de escala."
    },

    // ============ U7 · ESTRUCTURAS DE MERCADO Y PODER DE MERCADO ============
    {
      id: "eco-fc-049", unidad: "U7", tema: "Competencia perfecta",
      frente: "¿Qué caracteriza a un mercado de competencia perfecta?",
      reverso: "Muchos compradores y vendedores, producto HOMOGÉNEO, libre entrada y salida y transparencia de información. Las empresas son TOMADORAS de precios: ninguna puede influir en el precio de mercado.",
      tip: "En competencia perfecta la empresa acepta el precio; no lo fija."
    },
    {
      id: "eco-fc-050", unidad: "U7", tema: "Maximización de beneficios y oferta competitiva",
      frente: "¿Dónde produce la empresa competitiva y cómo se forma la curva de oferta de mercado?",
      reverso: "Produce donde el INGRESO MARGINAL = COSTO MARGINAL (IMg = CMg). En competencia perfecta el ingreso marginal es igual al precio (P = CMg). La curva de oferta de la empresa es su CMg (sobre el mínimo del costo variable medio) y la de MERCADO es la suma horizontal de las curvas de oferta individuales.",
      tip: "Regla de oro: se maximiza el beneficio donde IMg = CMg."
    },
    {
      id: "eco-fc-051", unidad: "U7", tema: "Punto de cierre y salida",
      frente: "¿Qué es el punto de cierre de corto plazo y cuándo sale la empresa en el largo plazo?",
      reverso: "PUNTO DE CIERRE (corto plazo): si el precio no alcanza a cubrir los costos VARIABLES medios, conviene dejar de producir (perder solo los fijos). En el LARGO PLAZO, si el precio no cubre el costo TOTAL medio, la empresa SALE de la industria.",
      tip: "Corto plazo: cierra si P < costo variable medio. Largo plazo: sale si P < costo total medio."
    },
    {
      id: "eco-fc-052", unidad: "U7", tema: "Monopolio",
      frente: "¿Qué es un monopolio y por qué su ingreso marginal es menor que el precio?",
      reverso: "Un ÚNICO vendedor de un bien SIN sustitutos cercanos. Enfrenta toda la curva de demanda del mercado, así que para vender más debe BAJAR el precio a todas las unidades: por eso su ingreso marginal es MENOR que el precio (IMg < P). Es fijador de precios.",
      tip: "El monopolista produce donde IMg = CMg, pero cobra el precio de la demanda (más alto)."
    },
    {
      id: "eco-fc-053", unidad: "U7", tema: "Fuentes de poder de monopolio",
      frente: "¿De dónde surge el poder de monopolio y qué es un monopolio natural?",
      reverso: "De barreras de entrada: control exclusivo de un recurso, patentes y concesiones, economías de escala y regulación. MONOPOLIO NATURAL: una sola empresa abastece el mercado a menor costo que varias (altos costos fijos, ej. distribución de agua o electricidad).",
      tip: "Barreras de entrada altas → protegen las rentas del monopolista."
    },
    {
      id: "eco-fc-054", unidad: "U7", tema: "Costos sociales del monopolio",
      frente: "¿Cuál es el costo social del poder de monopolio?",
      reverso: "El monopolista produce MENOS y cobra MÁS que un mercado competitivo. Eso genera una PÉRDIDA IRRECUPERABLE DE EFICIENCIA (carga muerta): hay consumidores dispuestos a pagar por encima del costo que se quedan sin el bien. Además transfiere excedente del consumidor al monopolista.",
      tip: "Menos cantidad + precio más alto = pérdida de bienestar social respecto de la competencia."
    },
    {
      id: "eco-fc-055", unidad: "U7", tema: "Discriminación de precios",
      frente: "¿Qué es la discriminación de precios y sus tres grados?",
      reverso: "Cobrar precios distintos por el mismo bien para capturar excedente del consumidor. 1er GRADO: precio distinto por cada unidad (el máximo que cada cliente pagaría). 2° GRADO: el precio varía según la CANTIDAD o versión (descuentos por volumen, tarifas en dos partes). 3er GRADO: precios distintos por SEGMENTO (estudiantes, jubilados).",
      tip: "Requiere poder de mercado y poder separar a los clientes evitando la reventa."
    },
    {
      id: "eco-fc-056", unidad: "U7", tema: "Competencia monopolística",
      frente: "¿Qué caracteriza a la competencia monopolística?",
      reverso: "MUCHAS empresas que venden productos DIFERENCIADOS (similares pero no idénticos), con libre entrada y salida. Cada una tiene algo de poder de mercado por la diferenciación, pero en el largo plazo la entrada de competidores erosiona las ganancias económicas.",
      tip: "Ejemplos: restaurantes, ropa, librerías. Diferenciación + libre entrada."
    },
    {
      id: "eco-fc-057", unidad: "U7", tema: "Oligopolio",
      frente: "¿Qué es un oligopolio y qué modelos describen su competencia?",
      reverso: "POCAS empresas dominan el mercado (producto homogéneo o diferenciado) con barreras de entrada; hay INTERDEPENDENCIA estratégica: cada decisión afecta y depende de las rivales. Modelos: COURNOT (compiten en cantidades), BERTRAND (en precios) y STACKELBERG (una lidera y las otras siguen).",
      tip: "La clave del oligopolio es la interdependencia: se decide anticipando la reacción del rival."
    },
    {
      id: "eco-fc-058", unidad: "U7", tema: "Barreras de entrada y precios como barrera",
      frente: "¿Qué son las barreras de entrada y cómo se usan los precios como barrera?",
      reverso: "Factores que dificultan la entrada de nuevos competidores: altos costos iniciales, economías de escala, diferenciación, control de canales y regulación. Como estrategia de precios: PRECIOS PREDATORIOS (bajar el precio bajo el costo para expulsar rivales) y PRECIOS DE PENETRACIÓN (precios bajos para ganar cuota rápido).",
      tip: "Las barreras de entrada protegen la rentabilidad de los que ya están dentro."
    },

    // ============ U8 · ORGANIZACIÓN INDUSTRIAL: FIRMA, JUEGOS E INFORMACIÓN ============
    {
      id: "eco-fc-059", unidad: "U8", tema: "Integración vertical",
      frente: "¿Qué es la integración vertical y qué son los costos triviales y no triviales?",
      reverso: "Estrategia en que la empresa controla varias etapas de su cadena de producción o distribución (hacia atrás: insumos; hacia adelante: distribución). Costos TRIVIALES: menores, no deciden la integración (transporte, impuestos). Costos NO TRIVIALES: significativos y decisivos (negociación, cumplimiento de contratos, activos específicos).",
      tip: "Los costos NO triviales (asociados a activos específicos e incertidumbre) son los que empujan a integrar."
    },
    {
      id: "eco-fc-060", unidad: "U8", tema: "Costos de transacción y el tamaño de la empresa",
      frente: "Según Coase, ¿qué determina el tamaño de la empresa (costos de transacción vs. coordinación)?",
      reverso: "COSTOS DE TRANSACCIÓN: gastos de negociar, contratar y resolver disputas en el MERCADO. COSTOS DE COORDINACIÓN: gastos internos de gestionar la empresa, que crecen con su tamaño. Coase (1937) explica que la empresa existe para AHORRAR costos de transacción internalizando actividades; crece hasta que el costo de coordinar internamente iguala al de usar el mercado.",
      tip: "La empresa se expande mientras internalizar salga más barato que transar en el mercado (Coase, 1937)."
    },
    {
      id: "eco-fc-061", unidad: "U8", tema: "Teoría de agencia",
      frente: "¿Qué estudia la teoría de agencia (principal, agente y contrato)?",
      reverso: "Analiza la relación en que un PRINCIPAL (ej. dueño/accionista) delega una tarea en un AGENTE (ej. gerente/empleado) con intereses distintos. El CONTRATO busca alinear esos intereses. Problemas típicos: riesgo moral y selección adversa. Se mitigan con incentivos, monitoreo y contratos de participación en resultados.",
      tip: "Principal delega, agente ejecuta; el contrato bien diseñado alinea sus incentivos."
    },
    {
      id: "eco-fc-062", unidad: "U8", tema: "Teoría de juegos",
      frente: "Define equilibrio de Nash, estrategia dominante y dilema del prisionero.",
      reverso: "La teoría de juegos estudia decisiones donde el resultado depende de lo que hagan varios agentes (se representa en forma ESTRATÉGICA -tabla de pagos- o EXTENSIVA -árbol de decisión-). EQUILIBRIO DE NASH: nadie gana cambiando su estrategia de forma unilateral. ESTRATEGIA DOMINANTE: la mejor opción sin importar lo que hagan los demás. DILEMA DEL PRISIONERO: cada uno persigue su interés y ambos terminan peor que cooperando.",
      tip: "El dilema del prisionero explica por qué las colusiones son inestables: a cada empresa le conviene traicionar."
    },
    {
      id: "eco-fc-063", unidad: "U8", tema: "Colusión y guerra de precios",
      frente: "¿Qué son la colusión y la guerra de precios?",
      reverso: "COLUSIÓN: acuerdo entre empresas (cartel) para fijar precios o repartir cantidades y maximizar el beneficio conjunto, actuando como un monopolio → precios más altos y menos competencia (es ilegal). GUERRA DE PRECIOS: las empresas bajan agresivamente los precios para ganar cuota, reduciendo los beneficios de todas y pudiendo expulsar competidores.",
      tip: "La colusión sube precios; la guerra de precios los desploma. Ambas son extremos de la interdependencia."
    },
    {
      id: "eco-fc-064", unidad: "U8", tema: "Compromiso estratégico y señalización",
      frente: "¿Qué son el compromiso estratégico creíble y la señalización?",
      reverso: "COMPROMISO ESTRATÉGICO: decisión que altera la conducta de los rivales (ej. invertir en capacidad para disuadir la entrada); solo funciona si es CREÍBLE (respaldado por costos hundidos, contratos o reputación). SEÑALIZACIÓN: acciones costosas que comunican información creíble al mercado o a los rivales (ej. publicidad o precios que \"señalan\" calidad).",
      tip: "Un compromiso solo disuade si es irreversible y creíble; por eso los costos hundidos importan."
    },
    {
      id: "eco-fc-065", unidad: "U8", tema: "Selección adversa",
      frente: "¿Qué es la selección adversa? Da un ejemplo.",
      reverso: "Información oculta ANTES del contrato (características ocultas de una parte). Ejemplo clásico: los autos usados \"limones\" (el vendedor sabe la calidad y el comprador no) o los seguros de salud (se aseguran sobre todo los de alto riesgo). Soluciones: señales, garantías, exámenes/screening, seguros obligatorios.",
      tip: "Adversa = ANTES del contrato: el problema es a quién elijo (características ocultas)."
    },
    {
      id: "eco-fc-066", unidad: "U8", tema: "Riesgo moral",
      frente: "¿Qué es el riesgo moral? Da un ejemplo.",
      reverso: "Acciones ocultas DESPUÉS del contrato: una parte cambia su conducta porque no asume todas las consecuencias. Ejemplos: el asegurado se cuida menos; el trabajador (agente) se esfuerza menos porque el jefe no puede observar su esfuerzo. Soluciones: monitoreo, pagos por desempeño e incentivos (restricciones de participación y de compatibilidad de incentivos).",
      tip: "Moral = DESPUÉS del contrato: el problema es cómo se comporta (acciones ocultas)."
    },
    {
      id: "eco-fc-067", unidad: "U8", tema: "Libre competencia en Chile (FNE y TDLC)",
      frente: "¿Qué instituciones defienden la libre competencia en Chile y qué hace cada una?",
      reverso: "La FISCALÍA NACIONAL ECONÓMICA (FNE) investiga y acusa infracciones (colusión, abusos, fusiones riesgosas); el TRIBUNAL DE DEFENSA DE LA LIBRE COMPETENCIA (TDLC) juzga y sanciona. La DELACIÓN COMPENSADA (2009) permite a un miembro del cartel delatarse a cambio de reducir su multa. Casos emblemáticos: colusión de farmacias (FASA, Salcobrand, Cruz Verde) y rechazo de la fusión Falabella-D&S.",
      tip: "FNE acusa, TDLC juzga. La delación compensada rompe carteles desde adentro."
    },

    // ============ U9 · MACRO: CUENTAS NACIONALES, AHORRO Y EMPLEO ============
    {
      id: "eco-fc-068", unidad: "U9", tema: "Qué es la macroeconomía",
      frente: "¿Qué estudia la macroeconomía y qué son variables endógenas y exógenas?",
      reverso: "Estudia el comportamiento AGREGADO de la economía (PIB, desempleo, inflación, tasas de interés). Variables ENDÓGENAS: se determinan DENTRO del modelo (producción, empleo, inflación). EXÓGENAS: vienen de FUERA (políticas, shocks externos).",
      tip: "Micro mira mercados individuales; macro mira la economía como un todo."
    },
    {
      id: "eco-fc-069", unidad: "U9", tema: "PIB: definición",
      frente: "¿Qué es el Producto Interno Bruto (PIB)?",
      reverso: "El VALOR DE MERCADO de todos los bienes y servicios FINALES producidos DENTRO de un país en un período determinado. \"Finales\" excluye los bienes intermedios para no contar doble; \"dentro del país\" lo distingue del PNB.",
      tip: "Bienes FINALES y producidos en el TERRITORIO, en un PERÍODO dado."
    },
    {
      id: "eco-fc-070", unidad: "U9", tema: "Métodos de cálculo del PIB",
      frente: "¿Cuáles son los métodos para medir el PIB?",
      reverso: "MÉTODO DEL GASTO: PIB = C + I + G + (X - M), es decir consumo + inversión + gasto de gobierno + exportaciones netas. MÉTODO DEL INGRESO: suma de todos los ingresos (salarios, rentas, intereses y beneficios). Ambos deben dar lo mismo.",
      tip: "El gasto de uno es el ingreso de otro: por eso los dos métodos coinciden."
    },
    {
      id: "eco-fc-071", unidad: "U9", tema: "PIB nominal vs. real",
      frente: "Diferencia entre PIB nominal y PIB real. ¿Qué es el deflactor?",
      reverso: "PIB NOMINAL: valora la producción a precios CORRIENTES (del año en curso). PIB REAL: la valora a precios CONSTANTES de un año base, eliminando el efecto de la inflación. El DEFLACTOR del PIB = (PIB nominal / PIB real) mide el nivel general de precios de todo lo producido.",
      tip: "El PIB REAL es el que sirve para comparar crecimiento entre años (no lo infla el alza de precios)."
    },
    {
      id: "eco-fc-072", unidad: "U9", tema: "IPC",
      frente: "¿Qué mide el IPC y cómo se construye?",
      reverso: "El Índice de Precios al Consumidor mide la variación del precio de una CANASTA fija de bienes y servicios representativa del consumo de los hogares (índice de Laspeyres). Es la principal medida del costo de la vida y de la INFLACIÓN. En Chile lo calcula el INE.",
      tip: "Inflación = variación porcentual del IPC. En Chile lo publica mensualmente el INE."
    },
    {
      id: "eco-fc-073", unidad: "U9", tema: "Sesgos del IPC vs. deflactor",
      frente: "¿Qué sesgos tiene el IPC y en qué se diferencia del deflactor?",
      reverso: "Sesgos del IPC: de SUSTITUCIÓN (canasta fija, no capta que la gente cambia hacia lo más barato), aparición de NUEVOS productos y mejoras de CALIDAD. El IPC usa una canasta fija (Laspeyres) y solo bienes de consumo; el DEFLACTOR abarca todo el PIB y varía su composición.",
      tip: "El IPC tiende a SOBREESTIMAR la inflación por el sesgo de sustitución."
    },
    {
      id: "eco-fc-074", unidad: "U9", tema: "Medición del desempleo",
      frente: "¿Cómo se mide el desempleo? Define fuerza de trabajo y tasa de desempleo.",
      reverso: "FUERZA DE TRABAJO (activa) = ocupados + desocupados que buscan empleo. Los INACTIVOS (estudiantes, jubilados, labores del hogar) no la integran. TASA DE DESEMPLEO = desocupados / fuerza de trabajo, es decir U / (E + U).",
      tip: "Quien no busca trabajo NO cuenta como desempleado: está inactivo, fuera de la fuerza de trabajo."
    },
    {
      id: "eco-fc-075", unidad: "U9", tema: "Tipos de desempleo",
      frente: "¿Cuáles son los tipos de desempleo?",
      reverso: "FRICCIONAL: tiempo de búsqueda entre un empleo y otro (transitorio, inevitable). ESTRUCTURAL: desajuste entre las habilidades de los trabajadores y lo que pide el mercado. CÍCLICO: por las recesiones (cae la actividad). La TASA NATURAL de desempleo = friccional + estructural (existe aun con economía sana).",
      tip: "El desempleo cíclico es el que las políticas de corto plazo buscan reducir; el friccional y estructural persisten."
    },
    {
      id: "eco-fc-076", unidad: "U9", tema: "Ahorro, inversión y fondos prestables",
      frente: "¿Cómo se relacionan el ahorro y la inversión en el sistema financiero?",
      reverso: "Las instituciones financieras conectan a quienes AHORRAN con quienes INVIERTEN. En una economía cerrada, el ahorro nacional iguala a la inversión (S = I). En el mercado de FONDOS PRESTABLES, la oferta viene del ahorro y la demanda de la inversión; la TASA DE INTERÉS es su precio de equilibrio.",
      tip: "Más ahorro → baja la tasa de interés → más inversión."
    },
    {
      id: "eco-fc-077", unidad: "U9", tema: "Salario mínimo y sindicatos",
      frente: "¿Cómo afectan el salario mínimo y los sindicatos al mercado laboral?",
      reverso: "Ambos pueden fijar salarios por ENCIMA del de equilibrio. El SALARIO MÍNIMO garantiza un ingreso piso, pero si es muy alto reduce la demanda de trabajo y genera desempleo (sobre todo en jóvenes y baja calificación). Los SINDICATOS negocian colectivamente mejores salarios y condiciones, con un efecto similar sobre el empleo si los salarios superan el de equilibrio.",
      tip: "Salario sobre el de equilibrio → más oferta que demanda de trabajo → desempleo."
    },

    // ============ U10 · DINERO, INFLACIÓN Y FLUCTUACIONES ============
    {
      id: "eco-fc-078", unidad: "U10", tema: "Funciones del dinero",
      frente: "¿Cuáles son las funciones del dinero?",
      reverso: "MEDIO DE CAMBIO (se acepta para transar y evita el trueque), UNIDAD DE CUENTA (mide y compara valores) y DEPÓSITO DE VALOR (conserva poder de compra en el tiempo). Debe ser aceptado, transportable, divisible y durable.",
      tip: "Medio de cambio, unidad de cuenta y depósito de valor: las tres funciones clásicas."
    },
    {
      id: "eco-fc-079", unidad: "U10", tema: "Banco Central y política monetaria",
      frente: "¿Qué hace el Banco Central y con qué herramientas controla el dinero?",
      reverso: "El Banco Central de Chile (creado en 1925, autónomo desde 1989) busca la ESTABILIDAD de precios y el normal funcionamiento de los pagos; su meta de inflación es 3% anual (rango 2%-4%). Herramientas: OPERACIONES DE MERCADO ABIERTO (compra/venta de bonos), ENCAJE (reservas exigidas a los bancos) y la TASA de política / descuento.",
      tip: "Para controlar la inflación, el Banco Central sube la tasa de interés (política contractiva)."
    },
    {
      id: "eco-fc-080", unidad: "U10", tema: "Creación de dinero y multiplicador",
      frente: "¿Cómo crean dinero los bancos y qué es el multiplicador del dinero?",
      reverso: "Los bancos comerciales reciben depósitos, guardan una parte como reserva y prestan el resto, que vuelve a depositarse: así EXPANDEN la cantidad de dinero. El MULTIPLICADOR del dinero es mayor mientras MENOR sea el coeficiente de reservas (aprox. 1 / coeficiente de reservas).",
      tip: "Más encaje (reservas) → menor multiplicador → menos dinero creado."
    },
    {
      id: "eco-fc-081", unidad: "U10", tema: "Teoría cuantitativa e inflación",
      frente: "¿Qué dice la teoría cuantitativa del dinero sobre la inflación?",
      reverso: "Ecuación de cambio: M x V = P x Y (dinero por velocidad = nivel de precios por producción). Si V e Y son estables, un aumento de la cantidad de dinero (M) se traduce en mayor nivel de precios (P). Por eso, en el largo plazo, \"la inflación es siempre un fenómeno monetario\".",
      tip: "Imprimir dinero por encima del crecimiento de la producción genera inflación."
    },
    {
      id: "eco-fc-082", unidad: "U10", tema: "Demanda de dinero y equilibrio monetario",
      frente: "¿Por qué la gente demanda dinero y cómo se alcanza el equilibrio monetario?",
      reverso: "Se demanda dinero por TRANSACCIÓN (pagos cotidianos), PRECAUCIÓN (imprevistos) y ESPECULACIÓN (guardar riqueza líquida). La demanda de dinero tiene relación INVERSA con la tasa de interés (a mayor tasa, más caro tener efectivo). El EQUILIBRIO MONETARIO ocurre donde la oferta de dinero (que fija el Banco Central) iguala a la demanda de dinero.",
      tip: "Sube la tasa de interés → baja la demanda de dinero (cuesta más caro no invertirlo)."
    },
    {
      id: "eco-fc-083", unidad: "U10", tema: "Costos de la inflación y efecto Fisher",
      frente: "¿Cuáles son los costos de la inflación y qué dice la ecuación de Fisher?",
      reverso: "Costos: de MENÚ (cambiar precios), de SUELA DE ZAPATOS (evitar tener efectivo), distorsión de precios relativos, distorsión tributaria e incertidumbre para planificar. ECUACIÓN DE FISHER: tasa nominal = tasa real + inflación esperada (i = r + pi).",
      tip: "El impuesto inflacionario es la pérdida de poder de compra de quien mantiene efectivo."
    },
    {
      id: "eco-fc-084", unidad: "U10", tema: "Demanda y oferta agregadas",
      frente: "¿Qué son la demanda agregada (DA) y la oferta agregada (OA)?",
      reverso: "DA: gasto total en la economía a distintos niveles de precios (C + I + G + XN); pendiente NEGATIVA. OA de corto plazo: ASCENDENTE (los precios y salarios son rígidos). OA de largo plazo: VERTICAL en el PIB potencial (pleno empleo de los recursos).",
      tip: "En el largo plazo la producción la fijan los recursos y la tecnología, no el nivel de precios."
    },
    {
      id: "eco-fc-085", unidad: "U10", tema: "Política monetaria y fiscal",
      frente: "¿Cómo actúan la política monetaria y la fiscal sobre la demanda agregada?",
      reverso: "MONETARIA EXPANSIVA: más dinero → baja la tasa de interés → sube consumo e inversión → DA a la derecha (contractiva: lo inverso, para frenar la inflación). FISCAL EXPANSIVA: más gasto público o menos impuestos → DA a la derecha, amplificada por el EFECTO MULTIPLICADOR.",
      tip: "Expansiva = estimular la actividad y el empleo; contractiva = enfriar la economía y la inflación."
    },
    {
      id: "eco-fc-086", unidad: "U10", tema: "Efecto multiplicador",
      frente: "¿Qué es el efecto multiplicador del gasto?",
      reverso: "Un aumento inicial del gasto (ej. gasto público) genera un aumento MAYOR del PIB, porque ese gasto es ingreso de otros que a su vez consumen, encadenando nuevas rondas de gasto. Mientras mayor sea la propensión a consumir, mayor es el multiplicador.",
      tip: "El gasto de uno es el ingreso de otro: por eso un impulso inicial se amplifica en el PIB."
    },
    {
      id: "eco-fc-087", unidad: "U10", tema: "Curva de Phillips",
      frente: "¿Qué muestra la curva de Phillips en el corto y en el largo plazo?",
      reverso: "CORTO PLAZO: relación INVERSA entre inflación y desempleo (para bajar el desempleo se acepta más inflación, y viceversa). LARGO PLAZO: es VERTICAL en la tasa natural de desempleo: no existe disyuntiva permanente, porque las expectativas de inflación se ajustan.",
      tip: "A largo plazo no se puede \"comprar\" menos desempleo con más inflación: solo queda más inflación."
    },

    // ============ U11 · ECONOMÍA ABIERTA Y MODELOS MACRO ============
    {
      id: "eco-fc-088", unidad: "U11", tema: "Economía abierta: XN y FSNC",
      frente: "En economía abierta, ¿qué son las exportaciones netas, el flujo de salida neta de capital y su identidad con el ahorro?",
      reverso: "EXPORTACIONES NETAS (XN = X - M) miden el saldo comercial. FLUJO DE SALIDA NETA DE CAPITAL (FSNC): compra de activos extranjeros por residentes menos compra de activos locales por extranjeros. Identidad: S = I + FSNC (el ahorro financia la inversión doméstica y la salida neta de capital), y en equilibrio XN = FSNC.",
      tip: "El ahorro nacional se reparte entre inversión interna y compra neta de activos externos (FSNC)."
    },
    {
      id: "eco-fc-089", unidad: "U11", tema: "Tipo de cambio nominal y real",
      frente: "Diferencia entre tipo de cambio nominal y real.",
      reverso: "TIPO DE CAMBIO NOMINAL: precio de una moneda en términos de otra (ej. 1 USD = 900 CLP). TIPO DE CAMBIO REAL: el nominal ajustado por los precios de ambos países; mide el poder adquisitivo relativo, es decir a cuántos bienes extranjeros equivale un bien nacional.",
      tip: "Nominal = cuántos pesos por dólar; real = cuántos bienes de allá por un bien de acá."
    },
    {
      id: "eco-fc-090", unidad: "U11", tema: "Paridad del poder de compra (PPP)",
      frente: "¿Qué sostiene la paridad del poder de compra (PPP)?",
      reverso: "Que, en el LARGO PLAZO, el tipo de cambio tiende a ajustarse para igualar el precio de una misma canasta de bienes entre países (una unidad de moneda compra lo mismo en todas partes). Se resume en e = P / P* (tipo de cambio según precios doméstico y extranjero).",
      tip: "Si un bien es más barato en un país, la demanda y el arbitraje ajustan el tipo de cambio hasta igualar precios."
    },
    {
      id: "eco-fc-091", unidad: "U11", tema: "Mercado de divisas y equilibrio abierto",
      frente: "¿Cómo se determina el tipo de cambio y cuál es el equilibrio de la economía abierta?",
      reverso: "El TIPO DE CAMBIO se determina en el mercado de DIVISAS por la oferta y demanda de moneda extranjera. En equilibrio se ajustan a la vez tres mercados: bienes (Y = C + I + G + XN), fondos prestables (S = I + FSNC) y divisas (XN = FSNC). Una depreciación del peso abarata las exportaciones y sube XN.",
      tip: "Depreciación del peso → exportaciones más baratas afuera → suben las exportaciones netas."
    },
    {
      id: "eco-fc-092", unidad: "U11", tema: "Modelo de Solow",
      frente: "¿Qué explica el modelo de Solow y qué es el estado estacionario?",
      reverso: "Explica el crecimiento de largo plazo por la ACUMULACIÓN DE CAPITAL y el crecimiento de la población. Como el capital tiene rendimientos decrecientes, la economía llega a un ESTADO ESTACIONARIO: nivel de capital donde la inversión solo alcanza a reponer la depreciación (inversión neta cero) y el producto por trabajador deja de crecer.",
      tip: "Sin progreso tecnológico, más ahorro sube el nivel de ingreso, pero no el crecimiento permanente (rendimientos decrecientes)."
    },
    {
      id: "eco-fc-093", unidad: "U11", tema: "Progreso tecnológico y crecimiento",
      frente: "En el modelo de Solow, ¿qué papel juega el progreso tecnológico?",
      reverso: "El progreso TECNOLÓGICO es el único motor del crecimiento SOSTENIDO del ingreso por trabajador en el largo plazo (la acumulación de capital sola se agota por los rendimientos decrecientes). Medidas para fomentar el crecimiento: promover el ahorro y la inversión, la educación (capital humano), la investigación y desarrollo y la apertura al comercio.",
      tip: "Capital acumulado tiene techo; la tecnología corre ese techo hacia arriba de forma permanente."
    },
    {
      id: "eco-fc-094", unidad: "U11", tema: "Modelo IS-LM",
      frente: "¿Qué representan las curvas IS y LM y su equilibrio?",
      reverso: "El modelo IS-LM explica el corto plazo con precios rígidos. La curva IS (mercado de BIENES): combinaciones de producto y tasa de interés que equilibran ahorro e inversión; tiene pendiente NEGATIVA. La curva LM (mercado de DINERO): combinaciones que equilibran oferta y demanda de dinero; pendiente POSITIVA. Su intersección fija la producción y la tasa de interés de corto plazo.",
      tip: "IS = mercado de bienes (baja); LM = mercado de dinero (sube); se cruzan en el equilibrio de corto plazo."
    },
    {
      id: "eco-fc-095", unidad: "U11", tema: "Estabilización con IS-LM",
      frente: "¿Cómo estabilizan la economía la política fiscal y la monetaria en el modelo IS-LM?",
      reverso: "La política FISCAL (más gasto o menos impuestos) desplaza la curva IS a la derecha (sube producto y tasa de interés). La política MONETARIA (más dinero) desplaza la curva LM a la derecha (sube producto y baja la tasa de interés). Combinando ambas se estabiliza la demanda; el IS-LM es la base teórica de la demanda agregada.",
      tip: "Fiscal mueve la IS; monetaria mueve la LM. El IS-LM sustenta la curva de demanda agregada."
    },
    {
      id: "eco-fc-096", unidad: "U11", tema: "Modelo Mundell-Fleming",
      frente: "¿Qué agrega el modelo Mundell-Fleming y cómo cambia la eficacia de las políticas según el tipo de cambio?",
      reverso: "Es el IS-LM de una economía PEQUEÑA y ABIERTA con movilidad PERFECTA de capital. Con tipo de cambio FLEXIBLE, la política MONETARIA es eficaz (afecta el producto vía tipo de cambio) y la fiscal pierde eficacia. Con tipo de cambio FIJO, ocurre lo inverso: la política FISCAL es eficaz y la monetaria queda atada a defender la paridad.",
      tip: "Cambio flexible → manda la política monetaria; cambio fijo → manda la política fiscal."
    }
  ]
};
