// =====================================================================
// MATERIA: ECONOMÍA — Banco de preguntas Examen de Grado
// 55 preguntas: 13 fáciles, 24 medias, 18 difíciles
// Las marcadas con salioEnExamen: true corresponden a temas aparecidos
// en exámenes de grado y pautas reales (2021-2026)
// Las preguntas eco-036 a eco-055 son de práctica adicional (sin marca de
// examen real) y amplían subtemas del temario menos representados
// Cubre Principios de Microeconomía, Microeconomía, Organización
// Industrial, Principios de Macroeconomía y Macroeconomía (temario oficial)
// =====================================================================

window.BANCO.materias.push({
  id: "economia",
  nombre: "Economía",
  preguntas: [

    // ================= FÁCIL (7) =================

    {
      id: "eco-001",
      tema: "Principios básicos: escasez, costo de oportunidad y FPP",
      dificultad: "facil",
      enunciado: "Explique en qué consiste el problema económico fundamental y cómo la Frontera de Posibilidades de Producción (FPP) permite ilustrar los conceptos de escasez, costo de oportunidad y eficiencia. Indique, además, dos factores que pueden desplazar la FPP hacia afuera. 6 puntos",
      respuestaModelo: "El problema económico fundamental es la escasez: las necesidades humanas son ilimitadas, pero los recursos disponibles para satisfacerlas son limitados. Ello obliga a la sociedad a elegir cómo asignar sus recursos escasos, y toda elección implica renunciar a algo: eso que se sacrifica es el costo de oportunidad.\n\nLa FPP representa las combinaciones máximas de dos bienes o servicios que una economía puede producir con los recursos y la tecnología disponibles. Los puntos sobre la curva son eficientes (se utilizan todos los recursos), los puntos interiores son ineficientes (hay recursos ociosos) y los puntos exteriores son inalcanzables con los recursos actuales.\n\nEl costo de oportunidad se refleja en la pendiente de la FPP: para producir más unidades de un bien es necesario sacrificar unidades del otro. La forma cóncava de la curva ilustra costos de oportunidad crecientes, asociados a la ley de rendimientos decrecientes.\n\nDescripción del gráfico esperado: ejes con el bien X y el bien Y; curva cóncava hacia el origen; un punto A sobre la curva (eficiente), un punto B interior (ineficiente) y un punto C exterior (inalcanzable).\n\nLa FPP se desplaza hacia afuera cuando aumenta la capacidad productiva de la economía, por ejemplo: (1) mejoras tecnológicas, (2) aumento en la dotación de recursos productivos (más capital, más trabajo o descubrimiento de recursos naturales).",
      criterios: [
        { texto: "Define escasez como recursos limitados frente a necesidades ilimitadas y la vincula con la necesidad de elegir", peso: 1 },
        { texto: "Define correctamente costo de oportunidad como aquello a lo que se renuncia al elegir", peso: 1 },
        { texto: "Explica qué representa la FPP y distingue puntos eficientes, ineficientes e inalcanzables", peso: 2 },
        { texto: "Grafica correctamente la FPP (curva cóncava, ejes rotulados, puntos A, B y C identificados)", peso: 1 },
        { texto: "Menciona dos factores válidos que desplazan la FPP hacia afuera (tecnología, más recursos)", peso: 1 }
      ],
      erroresComunes: [
        "Confundir costo de oportunidad con costo monetario o contable: el costo de oportunidad es la mejor alternativa sacrificada, no el desembolso de dinero.",
        "Dibujar la FPP como una recta y no explicar por qué la concavidad refleja costos de oportunidad crecientes.",
        "Señalar que un punto interior es inalcanzable, cuando en realidad es alcanzable pero ineficiente."
      ]
    },

    {
      id: "eco-002",
      tema: "La demanda: cambios en la demanda vs. cantidad demandada",
      dificultad: "facil",
      enunciado: "a) Explique la diferencia entre un cambio en la cantidad demandada y un cambio en la demanda, indicando qué variables provocan cada uno y cómo se representan gráficamente. 3 puntos\n\nb) Explique qué significa la condición ceteris paribus y por qué es indispensable para enunciar la ley de la demanda. 2 puntos",
      respuestaModelo: "a) Un cambio en la cantidad demandada es un movimiento A LO LARGO de la misma curva de demanda, provocado exclusivamente por una variación en el precio del propio bien: si el precio sube, la cantidad demandada disminuye (y viceversa), cumpliéndose la ley de la demanda.\n\nUn cambio en la demanda, en cambio, es un DESPLAZAMIENTO completo de la curva, provocado por variables distintas al precio del bien: el ingreso de los consumidores (bienes normales e inferiores), los precios de bienes relacionados (sustitutos y complementarios), los gustos y preferencias, las expectativas y el número de compradores. Si estos factores aumentan la disposición a comprar, la curva se desplaza hacia la derecha (aumento de demanda); si la reducen, hacia la izquierda.\n\nDescripción del gráfico esperado: dos paneles. En el primero, una curva de demanda con pendiente negativa y un movimiento sobre la curva desde el punto A al punto B ante un cambio de precio (P0 a P1). En el segundo, la curva D0 desplazándose paralelamente a D1 (a la derecha), manteniendo el precio constante.\n\nb) Ceteris paribus significa \"todo lo demás constante\": al analizar la relación entre el precio y la cantidad demandada se supone que las demás variables (ingreso, precios de otros bienes, gustos, etc.) permanecen fijas. Es indispensable porque la ley de la demanda (relación inversa entre precio y cantidad demandada) solo se cumple aislando el efecto del precio; si otras variables cambiaran simultáneamente, podría observarse, por ejemplo, mayor precio y mayor cantidad, sin que ello contradiga la ley de la demanda.",
      criterios: [
        { texto: "a) Explica que el cambio en la cantidad demandada es un movimiento sobre la curva causado solo por el precio del bien", peso: 1 },
        { texto: "a) Explica que el cambio en la demanda es un desplazamiento de la curva y menciona al menos tres determinantes (ingreso, bienes relacionados, gustos, expectativas, número de compradores)", peso: 1 },
        { texto: "a) Grafica correctamente ambos casos: movimiento sobre la curva y desplazamiento de la curva", peso: 1 },
        { texto: "b) Define ceteris paribus como mantener constantes las demás variables", peso: 1 },
        { texto: "b) Justifica por qué la ley de la demanda requiere esa condición para aislar el efecto precio", peso: 1 }
      ],
      erroresComunes: [
        "Decir que una baja del precio \"aumenta la demanda\": el precio del propio bien solo cambia la cantidad demandada (movimiento sobre la curva), no la demanda.",
        "Desplazar la curva de demanda ante un cambio en el precio del propio bien en el gráfico."
      ]
    },

    {
      id: "eco-003",
      tema: "Elasticidades: precio, cruzada e ingreso",
      dificultad: "facil",
      salioEnExamen: true,
      enunciado: "Un estudio de mercado sobre el consumo de café en Chile entregó los siguientes resultados: elasticidad precio de la demanda del café = -0,4; elasticidad cruzada entre café y té = +0,8; elasticidad ingreso del café = +1,3.\n\na) Defina cada una de las tres elasticidades e interprete económicamente los valores entregados. 4 puntos\n\nb) Si una cafetera decidiera subir el precio del café en 10%, ¿qué ocurriría con la cantidad demandada y con el ingreso total por ventas? Justifique usando la elasticidad. 2 puntos",
      respuestaModelo: "a) La elasticidad precio de la demanda mide la sensibilidad porcentual de la cantidad demandada ante cambios porcentuales en el precio del propio bien. Un valor de -0,4 indica una demanda INELÁSTICA (|E| < 1): ante un alza de 10% en el precio, la cantidad demandada cae solo 4%. El café se comporta como un bien de consumo habitual con pocos sustitutos cercanos para sus consumidores.\n\nLa elasticidad cruzada mide la sensibilidad de la cantidad demandada de un bien ante cambios en el precio de otro bien. Un valor de +0,8 (positivo) indica que café y té son bienes SUSTITUTOS: si sube el precio del té en 10%, la demanda de café aumenta 8%.\n\nLa elasticidad ingreso mide la sensibilidad de la demanda ante cambios en el ingreso del consumidor. Un valor de +1,3 (positivo y mayor que 1) indica que el café es un bien NORMAL, y en particular se comporta como bien de lujo o superior: la demanda crece más que proporcionalmente cuando aumenta el ingreso.\n\nb) Con elasticidad precio de -0,4, un alza de 10% en el precio reduce la cantidad demandada solo en 4%. Como la demanda es inelástica, el efecto precio domina al efecto cantidad y el ingreso total por ventas (P x Q) AUMENTA. En demandas inelásticas, subir el precio incrementa la recaudación de la empresa.",
      criterios: [
        { texto: "a) Define correctamente las tres elasticidades (precio, cruzada e ingreso)", peso: 1 },
        { texto: "a) Interpreta -0,4 como demanda inelástica y cuantifica el efecto (ej.: +10% precio implica -4% cantidad)", peso: 1 },
        { texto: "a) Interpreta el signo positivo de la cruzada como bienes sustitutos", peso: 1 },
        { texto: "a) Interpreta la elasticidad ingreso positiva como bien normal (y mayor que 1 como bien de lujo/superior)", peso: 1 },
        { texto: "b) Concluye que ante demanda inelástica el alza de precio aumenta el ingreso total, justificando con la magnitud de la elasticidad", peso: 2 }
      ],
      erroresComunes: [
        "Interpretar el signo negativo de la elasticidad precio como \"demanda que cae mucho\": el signo solo refleja la ley de la demanda; la magnitud (0,4 < 1) es lo que indica que es inelástica.",
        "Confundir el signo de la elasticidad cruzada: positivo = sustitutos, negativo = complementarios.",
        "Concluir que subir el precio siempre reduce el ingreso total, sin considerar que con demanda inelástica ocurre lo contrario."
      ]
    },

    {
      id: "eco-004",
      tema: "Fallas de mercado: tipologías y corrección",
      dificultad: "facil",
      enunciado: "a) Defina qué es una falla de mercado y explique por qué justifica la intervención del Estado en la economía. 2 puntos\n\nb) Explique dos de las siguientes fallas de mercado y proponga, para cada una, un mecanismo de corrección: (i) externalidades negativas, (ii) bienes públicos, (iii) monopolio. 4 puntos",
      respuestaModelo: "a) Una falla de mercado es una situación en que el mercado, operando libremente, NO logra una asignación eficiente de los recursos, es decir, no maximiza el bienestar social (excedente total). En presencia de fallas, el equilibrio privado difiere del óptimo social, lo que justifica la intervención del Estado para corregir la distorsión y acercar la asignación al óptimo (principio de que el Estado puede mejorar los resultados del mercado cuando este falla).\n\nb) (i) Externalidades negativas: ocurren cuando una actividad de producción o consumo genera costos a terceros que no son compensados (ej.: contaminación). El costo social supera al costo privado, por lo que el mercado produce MÁS de lo socialmente óptimo. Corrección: impuestos pigouvianos que internalicen el costo externo, permisos de emisión transables, regulación directa (normas de emisión) o asignación de derechos de propiedad (Teorema de Coase).\n\n(ii) Bienes públicos: son bienes no excluibles (no se puede impedir su uso) y no rivales (el consumo de uno no reduce la disponibilidad para otros), como la defensa nacional o el alumbrado público. Generan el problema del polizón (free rider): nadie está dispuesto a pagar voluntariamente, por lo que el mercado los provee en cantidad insuficiente o no los provee. Corrección: provisión estatal financiada con impuestos, o subsidios a su producción.\n\n(iii) Monopolio: un único oferente sin sustitutos cercanos, protegido por barreras de entrada, que produce menos y cobra un precio mayor que en competencia (P > CMg), generando pérdida irrecuperable de eficiencia social. Corrección: regulación de tarifas (especialmente en monopolios naturales), legislación de libre competencia (FNE y TDLC en Chile), apertura comercial o licitación del mercado.",
      criterios: [
        { texto: "a) Define falla de mercado como incapacidad del mercado de asignar eficientemente los recursos (equilibrio privado distinto del óptimo social)", peso: 1 },
        { texto: "a) Justifica la intervención estatal como corrección para acercarse al óptimo social", peso: 1 },
        { texto: "b) Explica correctamente la primera falla elegida, identificando por qué el mercado falla (sobreproducción, free rider o P>CMg según corresponda)", peso: 1 },
        { texto: "b) Explica correctamente la segunda falla elegida", peso: 1 },
        { texto: "b) Propone un mecanismo de corrección pertinente para cada falla (impuesto pigouviano, permisos transables, provisión estatal, regulación tarifaria, ley de libre competencia, etc.)", peso: 2 }
      ],
      erroresComunes: [
        "Definir bien público como \"cualquier bien provisto por el Estado\": lo que lo define son la no exclusión y la no rivalidad, no quién lo provee.",
        "Afirmar que ante una externalidad negativa el mercado produce menos de lo óptimo: produce MÁS, porque el productor no asume el costo externo."
      ]
    },

    {
      id: "eco-005",
      tema: "Inflación: ecuación de Fisher, impuesto inflacionario y costos",
      dificultad: "facil",
      enunciado: "a) Explique la diferencia entre tasa de interés nominal y tasa de interés real, y enuncie la ecuación de Fisher. 2 puntos\n\nb) Explique qué es el impuesto inflacionario y quiénes lo \"pagan\". 2 puntos\n\nc) Describa dos costos de la inflación para la economía. 2 puntos",
      respuestaModelo: "a) La tasa de interés nominal (i) es la que se pacta y observa en el mercado, sin descontar la inflación; la tasa de interés real (r) mide el aumento efectivo del poder adquisitivo, es decir, descuenta la inflación. La ecuación de Fisher las relaciona: i = r + π (la tasa nominal es igual a la tasa real más la inflación esperada). Así, si la inflación esperada aumenta, la tasa nominal tiende a aumentar en la misma magnitud (efecto Fisher).\n\nb) El impuesto inflacionario es la pérdida de poder adquisitivo que sufre quien mantiene dinero en efectivo (o activos nominales no indexados) cuando hay inflación. Cuando el gobierno financia gasto imprimiendo dinero (señoreaje), el aumento de la cantidad de dinero eleva los precios y reduce el valor real del dinero en manos del público. Lo \"pagan\" quienes mantienen saldos monetarios: como un impuesto sin legislación, castiga proporcionalmente más a quienes no pueden protegerse en activos indexados o reales, típicamente los hogares de menores ingresos.\n\nc) Costos de la inflación (basta con dos): (1) Costos de suela de zapatos: tiempo y esfuerzo destinados a minimizar la tenencia de efectivo (idas más frecuentes al banco). (2) Costos de menú: costos de modificar frecuentemente precios, catálogos y contratos. (3) Distorsión de precios relativos: como no todos los precios se ajustan a la vez, se distorsionan las señales que guían la asignación de recursos. (4) Distorsiones tributarias: la inflación altera la carga tributaria real (ej.: se gravan ganancias nominales). (5) Confusión e inconveniencia: dificulta la planificación de largo plazo y redistribuye arbitrariamente riqueza entre deudores y acreedores cuando es inesperada.",
      criterios: [
        { texto: "a) Distingue tasa nominal de tasa real y escribe correctamente la ecuación de Fisher (i = r + π)", peso: 2 },
        { texto: "b) Explica el impuesto inflacionario como pérdida de poder adquisitivo del dinero en efectivo asociada a la emisión/inflación", peso: 1 },
        { texto: "b) Identifica que lo pagan quienes mantienen saldos monetarios, con mayor impacto en quienes no pueden indexarse", peso: 1 },
        { texto: "c) Describe correctamente dos costos de la inflación (suela de zapatos, menú, distorsión de precios relativos, distorsión fiscal, redistribución arbitraria)", peso: 2 }
      ],
      erroresComunes: [
        "Confundir la tasa real con la tasa \"vigente en el mercado\": la observada en el mercado es la nominal; la real se obtiene descontando la inflación.",
        "Decir que la inflación perjudica a todos por igual: el impuesto inflacionario recae sobre quienes mantienen dinero no indexado, y la inflación inesperada beneficia a los deudores en desmedro de los acreedores."
      ]
    },

    {
      id: "eco-006",
      tema: "Sistema monetario: Banco Central, multiplicador y control monetario",
      dificultad: "facil",
      salioEnExamen: true,
      enunciado: "a) Explique las tres funciones básicas del dinero. 2 puntos\n\nb) Explique cómo los bancos comerciales \"crean\" dinero y qué rol juega el multiplicador del dinero. 2 puntos\n\nc) Describa las tres herramientas de control monetario del Banco Central y señale, para cada una, cómo debería usarse para AUMENTAR la oferta monetaria. 3 puntos",
      respuestaModelo: "a) Funciones del dinero: (1) Medio de cambio: es aceptado a cambio de bienes y servicios, eliminando la necesidad del trueque. (2) Unidad de cuenta: sirve como medida común para expresar precios y valores. (3) Depósito o reserva de valor: permite trasladar poder adquisitivo del presente al futuro.\n\nb) Los bancos comerciales operan con un sistema de reservas fraccionarias: de cada depósito que reciben, mantienen solo una fracción como reserva (encaje) y prestan el resto. Ese préstamo se gasta y vuelve a depositarse en el sistema bancario, que nuevamente presta una fracción, y así sucesivamente. De esta forma, a partir de una emisión primaria del Banco Central, el sistema bancario genera una emisión secundaria: crea dinero en forma de depósitos. El multiplicador del dinero indica cuántos pesos de oferta monetaria se generan por cada peso de base monetaria; es mayor mientras menor sea la tasa de encaje y menor sea la preferencia del público por circulante. Así, M = multiplicador x Emisión (base monetaria).\n\nc) Herramientas del Banco Central y su uso expansivo: (1) Operaciones de mercado abierto (OMA): compra y venta de títulos financieros; para aumentar la oferta monetaria debe realizar una OMA de COMPRA de bonos, inyectando liquidez. (2) Tasa de encaje legal: reservas mínimas exigidas a los bancos; para expandir la oferta monetaria debe REDUCIR el encaje, lo que aumenta el multiplicador bancario y las colocaciones. (3) Tasa de descuento (ventanilla de liquidez): tasa a la que el Banco Central presta a los bancos comerciales; para expandir debe REDUCIRLA, abaratando el fondeo bancario y estimulando el crédito.",
      criterios: [
        { texto: "a) Enuncia y explica las tres funciones del dinero (medio de cambio, unidad de cuenta, depósito de valor)", peso: 2 },
        { texto: "b) Explica la creación secundaria de dinero mediante reservas fraccionarias (depósitos y préstamos sucesivos)", peso: 1 },
        { texto: "b) Explica el multiplicador y su relación inversa con la tasa de encaje", peso: 1 },
        { texto: "c) Describe las tres herramientas: OMA, encaje legal y tasa de descuento", peso: 2 },
        { texto: "c) Indica correctamente la dirección expansiva de cada herramienta (OMA de compra, bajar encaje, bajar tasa de descuento)", peso: 1 }
      ],
      erroresComunes: [
        "Confundir la tasa de encaje con la tasa de interés de política monetaria: el encaje es un porcentaje de reservas obligatorias, no el precio del dinero.",
        "Señalar que una OMA de venta aumenta la oferta monetaria: la venta de bonos RETIRA dinero de la economía; la compra lo inyecta.",
        "Afirmar que los bancos crean dinero \"imprimiendo billetes\": solo el Banco Central emite; los bancos crean depósitos vía crédito."
      ]
    },

    {
      id: "eco-007",
      tema: "Medición macroeconómica: PIB, IPC y desempleo",
      dificultad: "facil",
      enunciado: "a) Defina el PIB y explique la diferencia entre PIB nominal y PIB real. ¿Cuál de los dos es apropiado para medir crecimiento económico y por qué? 3 puntos\n\nb) Explique qué mide el IPC y mencione un problema o sesgo de este indicador. 2 puntos\n\nc) Defina la tasa de desempleo e indique por qué una caída de esta tasa no siempre significa que la economía está generando más empleo. 2 puntos",
      respuestaModelo: "a) El PIB es el valor de mercado de todos los bienes y servicios FINALES producidos dentro de una economía en un período determinado. Por el método del gasto: PIB = C + I + G + (X - M). El PIB nominal valora la producción a precios corrientes del período, por lo que mezcla cambios de cantidades con cambios de precios; el PIB real valora la producción a precios constantes de un año base, aislando el cambio en las cantidades producidas. Para medir crecimiento económico corresponde usar el PIB REAL, porque el nominal puede aumentar solo por inflación sin que se produzca más. El cociente entre ambos (deflactor del PIB) es una medida del nivel de precios.\n\nb) El IPC mide la variación en el precio de una canasta fija de bienes y servicios representativa del consumo de los hogares (índice tipo Laspeyres); su variación porcentual es la medida habitual de inflación. Problemas o sesgos (basta uno): sesgo de sustitución (la canasta fija no captura que los consumidores sustituyen bienes que se encarecen), incorporación tardía de nuevos productos, cambios de calidad no medidos y sesgo de puntos de venta (outlet).\n\nc) La tasa de desempleo es el porcentaje de la fuerza de trabajo (ocupados + desocupados que buscan empleo) que está desocupada: TD = U / (E + U). Puede caer sin que se cree empleo si los desocupados se desalientan y dejan de buscar trabajo: al salir de la fuerza de trabajo pasan a ser inactivos y dejan de contarse como desempleados, reduciendo la tasa sin que aumente la ocupación.",
      criterios: [
        { texto: "a) Define PIB (valor de mercado, bienes finales, dentro del país, período) y/o presenta la identidad C+I+G+X-M", peso: 1 },
        { texto: "a) Distingue PIB nominal (precios corrientes) de PIB real (precios constantes)", peso: 1 },
        { texto: "a) Justifica que el crecimiento se mide con PIB real porque aísla el efecto de los precios", peso: 1 },
        { texto: "b) Explica qué mide el IPC y menciona un sesgo válido (sustitución, nuevos productos, calidad, outlet)", peso: 2 },
        { texto: "c) Define la tasa de desempleo sobre la fuerza de trabajo y explica el efecto del trabajador desalentado / salida de la fuerza laboral", peso: 2 }
      ],
      erroresComunes: [
        "Calcular la tasa de desempleo sobre la población total en lugar de la fuerza de trabajo.",
        "Afirmar que el PIB incluye bienes intermedios o de segunda mano: solo incluye bienes y servicios finales producidos en el período.",
        "Tratar IPC y deflactor del PIB como equivalentes: el IPC usa una canasta fija de consumo de los hogares; el deflactor cubre todos los bienes del PIB."
      ]
    },

    // ================= MEDIA (8) =================

    {
      id: "eco-008",
      tema: "Equilibrio de mercado: cambios simultáneos de oferta y demanda",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Durante el último invierno, heladas excepcionales en la zona central de Chile destruyeron cerca de un tercio de la producción de paltas. Paralelamente, la palta chilena vive un auge de demanda: campañas sobre alimentación saludable y el crecimiento del consumo interno y externo han incrementado sostenidamente su popularidad.\n\nUtilizando el modelo de oferta y demanda, explique y grafique el efecto conjunto de ambos fenómenos sobre el precio y la cantidad de equilibrio en el mercado nacional de la palta. Indique claramente qué variable queda determinada con certeza y cuál es ambigua, y de qué depende la resolución de esa ambigüedad. 6 puntos",
      respuestaModelo: "Se producen dos desplazamientos simultáneos: (1) las heladas destruyen producción, lo que CONTRAE la oferta (O0 se desplaza hacia arriba/izquierda a O1); (2) el cambio en gustos y preferencias por alimentación saludable EXPANDE la demanda (D0 se desplaza a la derecha a D1).\n\nAmbos movimientos presionan el precio AL ALZA, por lo que el precio de equilibrio sube con certeza (P1 > P0). En cambio, el efecto sobre la cantidad de equilibrio es AMBIGUO: la contracción de oferta tiende a reducirla y la expansión de demanda tiende a aumentarla. El resultado final depende de la magnitud relativa de ambos desplazamientos (y de las elasticidades de las curvas): si domina el shock de oferta, la cantidad cae; si domina el aumento de demanda, la cantidad sube; si son de magnitud similar, la cantidad puede quedar prácticamente constante.\n\nDescripción del gráfico esperado: ejes P y Q; curva de demanda con pendiente negativa y oferta con pendiente positiva; equilibrio inicial A (P0, Q0). La oferta se desplaza a la izquierda (O0 a O1) y la demanda a la derecha (D0 a D1). El nuevo equilibrio B muestra un precio claramente mayor (P1 > P0) y una cantidad que puede quedar a la izquierda, a la derecha o al mismo nivel de Q0 (se acepta cualquiera de los tres casos si el alumno explicita que la cantidad es ambigua).",
      criterios: [
        { texto: "Identifica la helada como contracción de la oferta (desplazamiento a la izquierda) y no como movimiento sobre la curva", peso: 1 },
        { texto: "Identifica el cambio de preferencias como expansión de la demanda (desplazamiento a la derecha)", peso: 1 },
        { texto: "Concluye que el precio sube con certeza y que la cantidad es ambigua", peso: 2 },
        { texto: "Explica que la ambigüedad se resuelve según la magnitud relativa de los desplazamientos", peso: 1 },
        { texto: "Grafica correctamente ambos desplazamientos, con equilibrios A y B identificados y P1 > P0", peso: 1 }
      ],
      erroresComunes: [
        "Analizar solo uno de los dos shocks y dar un resultado único para precio y cantidad.",
        "Concluir una cantidad final determinada sin advertir que depende de la magnitud relativa de los desplazamientos.",
        "Desplazar la demanda por el alza del precio (confundir el mayor precio de equilibrio con un cambio en la demanda)."
      ]
    },

    {
      id: "eco-009",
      tema: "Políticas de gobierno: salario mínimo y mercado del trabajo",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "El Congreso aprobó un nuevo reajuste del salario mínimo, que lo situará claramente por sobre el salario de equilibrio del mercado del trabajo juvenil no calificado, segmento donde la tasa de desempleo ya duplica el promedio nacional.\n\na) Explique y grafique los efectos de esta medida en el mercado del trabajo juvenil no calificado, identificando qué ocurre con el empleo, el desempleo y el salario. 4 puntos\n\nb) ¿Por qué el efecto sería distinto en el mercado de trabajadores calificados con salarios muy superiores al mínimo? Explique (no es necesario graficar). 2 puntos",
      respuestaModelo: "a) El salario mínimo es un precio mínimo (piso) impuesto por sobre el salario de equilibrio, por lo que es una restricción activa en este mercado. Al salario mínimo Wm > W*, la cantidad ofrecida de trabajo aumenta (más jóvenes desean trabajar a ese salario, movimiento sobre la curva de oferta) y la cantidad demandada de trabajo disminuye (las empresas contratan menos, movimiento sobre la curva de demanda). Se genera un EXCESO DE OFERTA de trabajo: desempleo. El empleo efectivo queda determinado por el lado corto del mercado, la demanda: cae de L* a Ld. El desempleo es la brecha total entre Ls y Ld, que incluye tanto a quienes perdieron su empleo (L* - Ld) como a quienes se sumaron a buscar trabajo atraídos por el mayor salario (Ls - L*). Quienes conservan su empleo ganan un salario mayor; el costo lo pagan quienes quedan desempleados.\n\nDescripción del gráfico esperado: ejes W (salario) y L (cantidad de trabajo); demanda de trabajo con pendiente negativa (empresas) y oferta de trabajo con pendiente positiva (trabajadores); equilibrio inicial en (W*, L*); línea horizontal en Wm por SOBRE W*; se identifican Ld (cantidad demandada) y Ls (cantidad ofrecida) a ese salario, con el segmento entre ambos rotulado como desempleo o exceso de oferta.\n\nb) En el mercado de trabajadores calificados el salario de equilibrio ya es superior al mínimo, por lo que el piso legal NO es una restricción activa (no \"muerde\"): el mercado sigue operando en su equilibrio original y el salario mínimo no genera efectos sobre empleo ni salarios en ese segmento. Los controles de precios solo tienen efecto cuando se fijan del lado restrictivo del equilibrio.",
      criterios: [
        { texto: "a) Identifica el salario mínimo como precio mínimo fijado sobre el equilibrio (restricción activa)", peso: 1 },
        { texto: "a) Explica el exceso de oferta: cantidad ofrecida aumenta y cantidad demandada cae, con empleo determinado por la demanda", peso: 1 },
        { texto: "a) Distingue efectos distributivos: ganan quienes conservan empleo con mayor salario, pierden los desempleados", peso: 1 },
        { texto: "a) Grafica correctamente el mercado laboral con Wm sobre W*, identificando Ld, Ls y la brecha de desempleo", peso: 1 },
        { texto: "b) Explica que en el segmento calificado el mínimo no es restricción activa y por tanto no tiene efectos", peso: 2 }
      ],
      erroresComunes: [
        "Dibujar el salario mínimo por debajo del equilibrio: un precio mínimo solo tiene efecto si se fija por encima del precio de equilibrio.",
        "Medir el desempleo solo como la caída del empleo (L* - Ld), olvidando a los nuevos buscadores de empleo atraídos por el mayor salario.",
        "Desplazar las curvas de oferta o demanda de trabajo: el salario mínimo no desplaza curvas, genera movimientos sobre ellas y una brecha."
      ]
    },

    {
      id: "eco-010",
      tema: "Impuestos: incidencia, elasticidades y pérdida social",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Como parte de una nueva reforma de salud pública, el gobierno anunció un aumento del impuesto específico a las bebidas azucaradas, que se cobrará a los productores por cada litro vendido. La industria reaccionó afirmando que \"el impuesto lo terminarán pagando los consumidores\".\n\na) Explique y grafique los efectos del impuesto en el mercado de bebidas azucaradas: precio pagado por el consumidor, precio recibido por el productor, cantidad transada, recaudación y pérdida social. 4 puntos\n\nb) ¿De qué depende que el impuesto \"lo paguen\" mayoritariamente los consumidores, como afirma la industria? ¿Importa que el impuesto se cobre legalmente al productor y no al consumidor? Explique. 3 puntos",
      respuestaModelo: "a) El impuesto por unidad cobrado al productor encarece la venta de cada litro: la oferta se contrae (se desplaza hacia arriba/izquierda en el monto exacto del impuesto). En el nuevo equilibrio: el precio que paga el consumidor SUBE (Pc > P0), el precio que recibe el productor neto de impuesto BAJA (Pp < P0), y la diferencia Pc - Pp es exactamente el impuesto unitario. La cantidad transada CAE de Q0 a Q1: el impuesto introduce una cuña que desincentiva transacciones. La recaudación del gobierno es el impuesto por la cantidad final: t x Q1 (rectángulo entre Pc y Pp hasta Q1). Se genera además una pérdida irrecuperable de eficiencia social (triángulo entre la demanda y la oferta original entre Q1 y Q0), que corresponde a transacciones que valían más para los consumidores de lo que costaba producirlas y que dejan de realizarse. Los excedentes del consumidor y del productor caen en más de lo que recauda el gobierno.\n\nDescripción del gráfico esperado: oferta y demanda con equilibrio inicial A (P0, Q0); nueva oferta O1 desplazada verticalmente en t; se identifican Pc (precio consumidor, arriba), Pp (precio productor, abajo), Q1 < Q0, el rectángulo de recaudación entre Pc y Pp, y el triángulo de pérdida social hacia la derecha, con vértice en el equilibrio original.\n\nb) La incidencia económica del impuesto depende de las ELASTICIDADES relativas de oferta y demanda, no de a quién se le cobra legalmente: la carga recae proporcionalmente más sobre el lado MÁS INELÁSTICO del mercado. Si la demanda por bebidas azucaradas es relativamente inelástica (consumo habitual, pocos sustitutos percibidos), los consumidores absorberán la mayor parte del impuesto vía mayores precios, como afirma la industria. La incidencia legal es irrelevante: cobrar el impuesto al consumidor o al productor genera el mismo precio final al consumidor, el mismo precio neto al productor, la misma cantidad y la misma pérdida social; solo cambia qué curva se desplaza en el gráfico.",
      criterios: [
        { texto: "a) Explica el desplazamiento de la oferta en el monto del impuesto y la cuña entre precio consumidor y precio productor", peso: 1 },
        { texto: "a) Identifica correctamente: sube Pc, baja Pp, cae Q, recaudación = t x Q1", peso: 1 },
        { texto: "a) Identifica y explica la pérdida irrecuperable de eficiencia (transacciones que dejan de realizarse)", peso: 1 },
        { texto: "a) Grafica correctamente: O1 sobre O0, Pc y Pp señalados, rectángulo de recaudación y triángulo de pérdida social", peso: 1 },
        { texto: "b) Explica que la incidencia depende de las elasticidades relativas (paga más el lado más inelástico)", peso: 2 },
        { texto: "b) Concluye que la incidencia legal es irrelevante: el resultado económico es el mismo se cobre a quien se cobre", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que el impuesto lo paga íntegramente quien lo entera legalmente en Tesorería: la incidencia económica depende de las elasticidades, no de la ley.",
        "Calcular la recaudación con la cantidad inicial Q0 en lugar de la cantidad final Q1.",
        "Omitir la pérdida social o dibujarla como toda el área bajo la demanda en vez del triángulo entre Q1 y Q0."
      ]
    },

    {
      id: "eco-011",
      tema: "Monopolio natural y su regulación",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Tras las alzas en las cuentas del agua potable, parlamentarios propusieron obligar a las empresas sanitarias a cobrar un precio igual al costo marginal, argumentando que \"así se replicaría el resultado de la competencia perfecta\".\n\na) Explique por qué la distribución de agua potable constituye un monopolio natural. 2 puntos\n\nb) Explique y grafique el problema que tendría la regla propuesta (P = CMg) en esta industria, y proponga una alternativa de regulación. 5 puntos",
      respuestaModelo: "a) Un monopolio natural existe cuando una sola empresa puede abastecer todo el mercado a un costo menor que dos o más empresas, debido a economías de escala en todo el tramo relevante de producción: el costo medio es decreciente porque hay costos fijos muy elevados (redes de tuberías, plantas de tratamiento) y costos marginales bajos. Duplicar la red para tener competencia sería socialmente ineficiente; por eso la industria sanitaria se organiza como monopolio regulado.\n\nb) En un monopolio natural, como el costo medio (CMe) es decreciente, el costo marginal (CMg) está siempre POR DEBAJO del costo medio. Si el regulador fija P = CMg, el precio queda bajo el CMe, y la empresa tendría PÉRDIDAS en cada unidad vendida (P < CMe): en el largo plazo no podría cubrir sus costos fijos y saldría del mercado o requeriría subsidios permanentes. Aunque P = CMg es el óptimo social en teoría (se producen todas las unidades cuyo beneficio supera su costo), en un monopolio natural es financieramente insostenible.\n\nDescripción del gráfico esperado: demanda con pendiente negativa; curva de CMe decreciente en todo el tramo relevante; curva de CMg por debajo del CMe; el punto donde la demanda corta al CMg define P = CMg y Q*; a esa cantidad, el CMe está por encima del precio, y el rectángulo entre CMe y P (por la cantidad Q*) se identifica como pérdida de la empresa.\n\nAlternativas de regulación (basta una): (1) tarificación a costo medio (P = CMe): la empresa obtiene utilidad normal (beneficio económico cero) y es sostenible, aunque con una pequeña pérdida de eficiencia; (2) tarifa en dos partes: cargo fijo que cubre costos fijos más cargo variable cercano al CMg; (3) subsidio estatal que cubra la pérdida manteniendo P = CMg; (4) licitación del mercado (competencia POR la cancha, empresa modelo, como se usa en la regulación sanitaria chilena).",
      criterios: [
        { texto: "a) Define monopolio natural por economías de escala / CMe decreciente con altos costos fijos, aplicado a la red sanitaria", peso: 2 },
        { texto: "b) Explica que con CMe decreciente el CMg está bajo el CMe, por lo que P = CMg implica pérdidas (P < CMe)", peso: 2 },
        { texto: "b) Concluye que la empresa no operaría en el largo plazo sin subsidio", peso: 1 },
        { texto: "b) Grafica correctamente: CMe decreciente, CMg bajo CMe, P = CMg en la intersección con demanda y rectángulo de pérdidas identificado", peso: 1 },
        { texto: "b) Propone una alternativa de regulación válida (P = CMe, tarifa en dos partes, subsidio, licitación/empresa modelo)", peso: 1 }
      ],
      erroresComunes: [
        "Dibujar curvas de costos en forma de U estándar: en el monopolio natural el CMe debe ser decreciente en todo el tramo relevante, con el CMg por debajo.",
        "Afirmar que P = CMg genera utilidades máximas o normales: genera pérdidas porque el precio queda bajo el costo medio.",
        "Confundir la regulación del monopolio natural con prohibir el monopolio: la solución no es forzar competencia (sería ineficiente duplicar la red), sino regular tarifas."
      ]
    },

    {
      id: "eco-012",
      tema: "Mercado de fondos prestables: política de incentivo al ahorro",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "El Ministerio de Hacienda anunció un proyecto que amplía significativamente los beneficios tributarios al Ahorro Previsional Voluntario (APV) y a otros instrumentos de ahorro de largo plazo, con el objetivo declarado de \"profundizar el mercado de capitales y financiar más inversión con ahorro interno\".\n\nUtilizando el modelo del mercado de fondos prestables, explique y grafique los efectos de esta medida sobre el ahorro nacional, la tasa de interés y la inversión. Señale además, brevemente, qué efecto tendría esto sobre el crecimiento de largo plazo de la economía. 6 puntos",
      respuestaModelo: "En el mercado de fondos prestables, la oferta de fondos proviene del ahorro nacional (S = Sprivado + Spúblico) y la demanda proviene de la inversión. La identidad contable relevante es I = S + (T - G) + Xn.\n\nEl incentivo tributario aumenta la rentabilidad después de impuestos del ahorro, por lo que los hogares ahorran más a cada nivel de tasa de interés: la OFERTA de fondos prestables se EXPANDE (OFP0 se desplaza a la derecha a OFP1). Con mayor disponibilidad de fondos, la tasa de interés de equilibrio CAE de r0 a r1. La menor tasa de interés aumenta el valor presente neto (VPN) de los proyectos, por lo que la cantidad demandada de fondos para INVERSIÓN AUMENTA (movimiento a lo largo de la curva de demanda, de A a B): la inversión de equilibrio sube de $0 a $1.\n\nDescripción del gráfico esperado: ejes r (tasa de interés) y $ (fondos prestables); demanda de fondos (inversión) con pendiente negativa; oferta de fondos (ahorro) con pendiente positiva desplazándose a la derecha (OFP0 a OFP1); nuevo equilibrio B con r1 < r0 y cantidad de fondos mayor ($1 > $0).\n\nEfecto de largo plazo: una mayor tasa de ahorro sostiene mayor inversión y acumulación de capital por trabajador (K/L), lo que en el modelo de Solow lleva a un mayor nivel de producto per cápita en el nuevo estado estacionario, es decir, mayor crecimiento durante la transición y un mayor nivel de PIB per cápita de largo plazo.\n\nMatiz aceptable: parte del mayor ahorro incentivado puede sustituir ahorro que igual se habría hecho por otras vías, atenuando (pero no revirtiendo) el desplazamiento de la oferta.",
      criterios: [
        { texto: "Identifica que el incentivo tributario expande la OFERTA de fondos prestables (mayor ahorro a cada tasa)", peso: 2 },
        { texto: "Concluye correctamente: cae la tasa de interés y aumenta la inversión (movimiento sobre la demanda, mayor VPN de los proyectos)", peso: 2 },
        { texto: "Grafica correctamente el mercado de fondos prestables con desplazamiento de la oferta a la derecha, r1 < r0 y mayor cantidad de fondos", peso: 1 },
        { texto: "Vincula el mayor ahorro e inversión con mayor acumulación de capital y mayor PIB per cápita de largo plazo (lógica del modelo de Solow)", peso: 1 }
      ],
      erroresComunes: [
        "Desplazar la demanda de fondos prestables en lugar de la oferta: el incentivo afecta la decisión de ahorrar (oferta), y la inversión responde después vía menor tasa (movimiento sobre la curva).",
        "Concluir que la tasa de interés sube porque \"hay más actividad\": con más oferta de fondos la tasa de equilibrio baja.",
        "Confundir el mercado de fondos prestables (tasa de largo plazo, ahorro-inversión) con el mercado monetario (oferta y demanda de dinero)."
      ]
    },

    {
      id: "eco-013",
      tema: "Modelo OA-DA: shock de oferta y estanflación",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Un recrudecimiento del conflicto en Medio Oriente elevó el precio del petróleo desde 75 a más de 110 dólares el barril, nivel que los analistas esperan se mantenga durante todo el año. Chile importa la práctica totalidad del petróleo que consume, insumo clave en transporte, generación eléctrica y producción industrial.\n\na) Utilizando el modelo de oferta y demanda agregada (OA-DA), explique y grafique los efectos de este shock sobre el nivel de precios y el PIB de Chile en el corto plazo. 4 puntos\n\nb) Explique el dilema que este escenario le plantea al Banco Central para decidir su política monetaria. 3 puntos",
      respuestaModelo: "a) El petróleo es un insumo importado clave: su encarecimiento aumenta los costos de producción de las empresas en toda la economía. Esto CONTRAE la oferta agregada de corto plazo (OA0 se desplaza hacia arriba/izquierda a OA1). En el nuevo equilibrio, el nivel de precios SUBE (P1 > P0) y el PIB CAE (Y1 < Y0). Este fenómeno —caída de la actividad con aceleración inflacionaria simultánea— se denomina ESTANFLACIÓN, y es característico de los shocks negativos de oferta (a diferencia de los shocks de demanda, donde precios y producto se mueven en la misma dirección). La caída del PIB implica además un aumento del desempleo.\n\nDescripción del gráfico esperado: ejes P (nivel de precios) e Y (PIB); demanda agregada DA con pendiente negativa; oferta agregada OA0 con pendiente positiva desplazándose hacia arriba/izquierda a OA1; equilibrio inicial A (P0, Y0) y final B (P1, Y1), con P1 > P0 e Y1 < Y0.\n\nb) El dilema del Banco Central: el shock de oferta empeora simultáneamente sus dos preocupaciones (inflación y actividad), y la política monetaria solo mueve la DEMANDA agregada, por lo que no puede corregir ambas a la vez. Si aplica política monetaria CONTRACTIVA (sube la tasa de interés) para controlar la inflación, contrae aún más la DA y profundiza la caída del PIB y el aumento del desempleo. Si aplica política EXPANSIVA para sostener la actividad, valida y amplifica la inflación, arriesgando desanclar las expectativas respecto de la meta de 3%. Debe elegir qué objetivo priorizar (disyuntiva de corto plazo entre inflación y desempleo, en la lógica de la curva de Phillips); en un esquema de metas de inflación, típicamente priorizará la convergencia inflacionaria.",
      criterios: [
        { texto: "a) Identifica el shock como contracción de la OFERTA agregada por mayores costos de producción (insumo importado)", peso: 2 },
        { texto: "a) Concluye correctamente: sube el nivel de precios y cae el PIB (estanflación), idealmente mencionando el efecto en desempleo", peso: 1 },
        { texto: "a) Grafica correctamente el modelo OA-DA con desplazamiento de OA hacia arriba/izquierda, puntos A y B, P1 > P0 e Y1 < Y0", peso: 1 },
        { texto: "b) Explica que la política monetaria solo desplaza la DA y no puede estabilizar precios y producto a la vez ante un shock de oferta", peso: 2 },
        { texto: "b) Describe las consecuencias de cada opción (contractiva: más recesión; expansiva: más inflación)", peso: 1 }
      ],
      erroresComunes: [
        "Modelar el alza del petróleo como caída de la demanda agregada: es un shock de costos que contrae la OFERTA agregada; con caída de DA los precios bajarían, lo contrario de lo observado.",
        "Concluir que precios y PIB se mueven en la misma dirección: en un shock de oferta se mueven en direcciones opuestas (estanflación).",
        "Afirmar que el Banco Central puede resolver simultáneamente inflación y recesión con una sola herramienta de demanda."
      ]
    },

    {
      id: "eco-014",
      tema: "Comercio internacional: arancel y bienestar",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Ante denuncias de competencia desleal, el gobierno de Chile decidió aplicar una sobretasa arancelaria a la importación de acero, principal insumo de la construcción, con el objetivo de proteger la producción siderúrgica nacional y sus empleos. Chile es importador neto de acero y, por su tamaño, toma el precio internacional como dado.\n\nExplique y grafique los efectos de este arancel en el mercado chileno del acero: precio interno, producción nacional, consumo, importaciones, y cambios en el bienestar (excedente del consumidor, excedente del productor, recaudación fiscal y efecto neto para la sociedad). 7 puntos",
      respuestaModelo: "Situación inicial (libre comercio): al precio mundial Pm, inferior al precio de equilibrio autárquico, los consumidores nacionales compran una cantidad alta (Qd0), los productores nacionales producen poco (Qs0) y la diferencia se cubre con importaciones (Qd0 - Qs0).\n\nCon el arancel t, el precio interno sube a Pm + t (Chile es tomador de precios, el arancel se traslada íntegro al precio interno). Efectos: (1) la producción nacional AUMENTA de Qs0 a Qs1 (movimiento sobre la oferta nacional: productores locales ahora compiten a un precio mayor); (2) el consumo interno CAE de Qd0 a Qd1 (movimiento sobre la demanda); (3) las importaciones se REDUCEN a (Qd1 - Qs1), comprimidas por ambos lados.\n\nBienestar: el excedente del consumidor CAE fuertemente (paga más y consume menos). El excedente del productor nacional AUMENTA (área entre Pm y Pm+t a la izquierda de la oferta). El fisco RECAUDA t por cada unidad importada (rectángulo t x importaciones finales). Sin embargo, la suma de la ganancia del productor y la recaudación es menor que la pérdida del consumidor: quedan dos triángulos de PÉRDIDA SOCIAL NETA: (1) pérdida de eficiencia productiva, por unidades producidas internamente a un costo mayor que el precio mundial; y (2) pérdida de eficiencia en el consumo, por unidades que los consumidores valoraban por sobre el precio mundial y dejan de consumirse. El arancel protege empleos del sector, pero a un costo social neto positivo que pagan los consumidores (y sectores usuarios del acero, como la construcción).\n\nDescripción del gráfico esperado: oferta y demanda nacionales; línea horizontal en Pm (precio mundial) y otra en Pm + t; se identifican Qs0 < Qs1 y Qd1 < Qd0; las importaciones antes y después como segmentos horizontales; las áreas: trapecio de aumento de excedente del productor, rectángulo de recaudación entre Qs1 y Qd1, y los dos triángulos de pérdida social a ambos lados del rectángulo.",
      criterios: [
        { texto: "Plantea correctamente la situación inicial de libre comercio con precio mundial bajo el precio autárquico e importaciones como brecha entre demanda y oferta nacional", peso: 1 },
        { texto: "Explica que el precio interno sube a Pm + t, con aumento de la producción nacional y caída del consumo", peso: 2 },
        { texto: "Identifica la reducción de las importaciones por ambos lados", peso: 1 },
        { texto: "Analiza el bienestar: cae excedente del consumidor, sube el del productor, hay recaudación fiscal y una pérdida social neta (dos triángulos)", peso: 2 },
        { texto: "Grafica correctamente: líneas de precio mundial y precio con arancel, cantidades Qs0, Qs1, Qd1, Qd0 y áreas de bienestar identificadas", peso: 1 }
      ],
      erroresComunes: [
        "Desplazar las curvas de oferta o demanda nacionales: el arancel cambia el precio relevante (línea horizontal), generando movimientos SOBRE las curvas, no desplazamientos.",
        "Concluir que el arancel beneficia a la sociedad porque el fisco recauda y el productor gana: la pérdida del consumidor es mayor y el efecto neto es negativo (dos triángulos de pérdida social).",
        "Calcular la recaudación sobre todo el consumo interno en vez de solo sobre las importaciones finales."
      ]
    },

    {
      id: "eco-015",
      tema: "Mercado cambiario y flujos de capitales",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "La Reserva Federal de Estados Unidos (FED) sorprendió al mercado con un recorte agresivo de su tasa de interés de referencia, ante señales de debilitamiento de su economía. Suponga que el Banco Central de Chile mantiene su Tasa de Política Monetaria sin cambios.\n\na) Explique y grafique el efecto de esta medida sobre el tipo de cambio peso/dólar en Chile. 4 puntos\n\nb) Explique el efecto esperado sobre las exportaciones, las importaciones y el saldo de la balanza comercial chilena. 2 puntos",
      respuestaModelo: "a) Al bajar la FED su tasa y mantener Chile la suya, se genera un DIFERENCIAL DE TASAS a favor de Chile (r Chile > r EE.UU.): los activos financieros chilenos se vuelven relativamente más rentables. Esto provoca un movimiento de capitales especulativos HACIA Chile: entran dólares al país buscando la mayor rentabilidad. En el mercado cambiario, la mayor entrada de divisas EXPANDE la oferta de dólares (Xs US$ se desplaza a la derecha). Con más dólares disponibles, el precio del dólar CAE: el tipo de cambio baja de TC0 a TC1, es decir, el peso chileno se APRECIA.\n\nDescripción del gráfico esperado: mercado cambiario con el tipo de cambio (TC, pesos por dólar) en el eje vertical y cantidad de dólares (US$) en el horizontal; demanda de dólares con pendiente negativa; oferta de dólares con pendiente positiva desplazándose a la derecha (XsUS$0 a XsUS$1); equilibrio inicial A y final B, con TC1 < TC0 y mayor cantidad de dólares transada.\n\nb) La apreciación del peso encarece los productos chilenos en el exterior y abarata los productos extranjeros en Chile: las EXPORTACIONES CAEN (pierden competitividad: los exportadores reciben menos pesos por cada dólar) y las IMPORTACIONES AUMENTAN. En consecuencia, el saldo de la balanza comercial (X - M) se DETERIORA. Este menor saldo externo reduce las exportaciones netas y, ceteris paribus, resta impulso a la demanda agregada y al PIB.",
      criterios: [
        { texto: "a) Identifica el diferencial de tasas (r Chile > r EE.UU.) y la consecuente entrada de capitales especulativos", peso: 2 },
        { texto: "a) Concluye que aumenta la oferta de dólares y el tipo de cambio cae (apreciación del peso)", peso: 1 },
        { texto: "a) Grafica correctamente el mercado cambiario con desplazamiento de la oferta de dólares a la derecha y TC1 < TC0", peso: 1 },
        { texto: "b) Explica la caída de exportaciones y el aumento de importaciones por la apreciación", peso: 1 },
        { texto: "b) Concluye el deterioro del saldo de la balanza comercial y su efecto contractivo sobre la demanda agregada/PIB", peso: 1 }
      ],
      erroresComunes: [
        "Confundir apreciación con depreciación: si entra un flujo de dólares, el dólar se abarata y el peso se aprecia (el tipo de cambio BAJA).",
        "Invertir la dirección del flujo de capitales: los capitales van hacia donde la tasa es relativamente MÁS alta, en este caso hacia Chile.",
        "Afirmar que la apreciación mejora la balanza comercial: la apreciación resta competitividad a las exportaciones y abarata importar."
      ]
    },

    // ================= DIFÍCIL (7) =================

    {
      id: "eco-016",
      tema: "Competencia perfecta: equilibrio de corto y largo plazo (mercado y firma)",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "La industria chilena de las cerezas de exportación operaba en un equilibrio de largo plazo, con cientos de productores pequeños que venden un producto homogéneo, libre entrada y salida y estructura de costos similar. Durante la última temporada, una desaceleración del consumo en China —destino de casi el 90% de los envíos— provocó una fuerte y persistente caída de la demanda mundial por cerezas chilenas.\n\na) Explique y grafique la situación INICIAL de equilibrio de largo plazo, tanto para el mercado como para una firma representativa, indicando la condición de precios, costos y utilidades. 4 puntos\n\nb) Explique y grafique los efectos de CORTO PLAZO de la caída de la demanda sobre el mercado y sobre la firma representativa (precio, cantidad y utilidades). ¿En qué condición una firma debería cerrar en el corto plazo? 4 puntos\n\nc) Explique y grafique el ajuste de LARGO PLAZO de la industria, suponiendo rendimientos constantes a escala (curvas de costos que no cambian). Compare el equilibrio final con el inicial. 4 puntos",
      respuestaModelo: "a) En el equilibrio de largo plazo de una industria perfectamente competitiva se cumple: P = IMg = CMg = CMe mínimo. Las firmas son tomadoras de precios, producen en la escala eficiente (mínimo del costo medio) y obtienen utilidades económicas NULAS (utilidad normal): no hay incentivos a entrar ni a salir.\n\nDescripción del gráfico esperado (dos paneles): panel MERCADO con oferta y demanda y equilibrio (P0, Q0); panel FIRMA con curvas CMg y CMe en forma de U, y la recta de demanda individual/precio P0 tangente al mínimo del CMe, produciendo q0. Sin áreas de utilidad ni pérdida.\n\nb) Corto plazo: la caída de la demanda mundial desplaza la demanda de mercado a la izquierda (D0 a D1): el precio cae de P0 a P1 y la cantidad de mercado cae. Para la firma, el precio es un dato: con P1 < CMe, cada firma reduce su producción hasta donde P1 = CMg (movimiento sobre su curva de CMg) y tiene PÉRDIDAS económicas, equivalentes al rectángulo (CMe(q1) - P1) x q1. Condición de cierre de corto plazo: la firma sigue operando mientras el precio cubra el costo variable medio (P >= CVMe), porque así al menos financia parte de los costos fijos, que se pagan igual; si P < CVMe, minimiza pérdidas cerrando (punto de cierre = mínimo del CVMe).\n\nDescripción del gráfico esperado: en el mercado, D1 a la izquierda de D0 con menor precio y cantidad; en la firma, la línea de precio P1 bajo el mínimo del CMe, cortando al CMg en q1 < q0, con el rectángulo de pérdidas sombreado entre P1 y el CMe.\n\nc) Largo plazo: las pérdidas provocan la SALIDA de firmas de la industria. Al salir firmas, la oferta de mercado se contrae (O0 a O1), lo que hace subir el precio gradualmente. El proceso continúa hasta que el precio retorna al mínimo del costo medio (P0, dado que con rendimientos constantes a escala las curvas de costos no cambian) y las firmas que permanecen vuelven a utilidad económica cero. Comparación con el equilibrio inicial: mismo precio P0, cada firma sobreviviente vuelve a producir su escala eficiente q0, pero hay MENOS firmas y la cantidad total transada en el mercado es menor (Q2 < Q0).\n\nDescripción del gráfico esperado: en el mercado, la oferta se desplaza a la izquierda hasta que el precio vuelve a P0 con cantidad final Q2 < Q0; en la firma, el precio de nuevo tangente al mínimo del CMe con producción q0 y utilidad cero.",
      criterios: [
        { texto: "a) Enuncia la condición de equilibrio de largo plazo (P = CMg = CMe mínimo, utilidad económica cero) y grafica mercado y firma coherentes (precio tangente al mínimo del CMe)", peso: 3 },
        { texto: "b) Explica la caída del precio por contracción de la demanda de mercado y las pérdidas de la firma (P < CMe), graficando el rectángulo de pérdidas y la producción donde P = CMg", peso: 3 },
        { texto: "b) Enuncia correctamente la condición de cierre de corto plazo (P < CVMe)", peso: 1 },
        { texto: "c) Explica el ajuste por salida de firmas que contrae la oferta y devuelve el precio al mínimo del CMe con utilidad cero", peso: 3 },
        { texto: "c) Compara equilibrio final con inicial: mismo precio, menos firmas, menor cantidad de mercado; grafica ambos paneles del ajuste", peso: 2 }
      ],
      erroresComunes: [
        "Dibujar solo el gráfico del mercado y omitir el de la firma (o viceversa): la pregunta exige la coherencia entre ambos paneles.",
        "Afirmar que la firma debe cerrar apenas tiene pérdidas: en el corto plazo conviene operar mientras P cubra el costo variable medio, pues los costos fijos se pagan igual.",
        "Sostener que en el largo plazo el precio queda permanentemente más bajo: la salida de firmas contrae la oferta hasta restaurar el precio al mínimo del CMe (utilidad económica cero)."
      ]
    },

    {
      id: "eco-017",
      tema: "Externalidades negativas y mecanismos de regulación",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Una zona industrial del norte de Chile concentra fundiciones y termoeléctricas cuyas emisiones han provocado repetidos episodios de intoxicación en la población escolar de las comunas vecinas. Las empresas cumplen la normativa vigente, pero organizaciones ciudadanas exigen el cierre total del cordón industrial, mientras el gobierno evalúa nuevos instrumentos de regulación.\n\na) Utilizando el modelo de oferta y demanda, explique y grafique por qué esta situación constituye una falla de mercado y por qué el mercado, por sí solo, produce una cantidad socialmente excesiva. 4 puntos\n\nb) Compare dos instrumentos de regulación que podría usar el gobierno: un impuesto pigouviano y un sistema de permisos de emisión transables. Explique cómo opera cada uno y qué ventaja comparativa tienen frente a la regulación por norma directa. 4 puntos\n\nc) Evalúe económicamente la demanda ciudadana de \"contaminación cero\" (cierre total). ¿Es socialmente óptimo eliminar completamente la externalidad? Explique. 3 puntos",
      respuestaModelo: "a) Se trata de una EXTERNALIDAD NEGATIVA EN LA PRODUCCIÓN: la actividad industrial impone costos a terceros (daño a la salud de la población) que las empresas no compensan ni consideran en sus decisiones. Por ello, el costo social de producir (costo privado + costo externo) es MAYOR que el costo privado. Las empresas deciden según su costo privado, por lo que el equilibrio de mercado (A) se da a una cantidad MAYOR y un precio MENOR que el óptimo social (B): la rentabilidad privada excede a la rentabilidad social y el mercado sobreproduce. Entre ambas cantidades se genera una pérdida de eficiencia social: unidades cuyo costo social supera su valoración.\n\nDescripción del gráfico esperado: demanda; curva de oferta = costo marginal privado (CMgP); una segunda curva paralela POR ENCIMA = costo marginal social (CMgS = CMgP + costo externo). Equilibrio privado A en la intersección demanda-CMgP (cantidad Qp); óptimo social B en la intersección demanda-CMgS (cantidad Qs < Qp); triángulo de pérdida social entre ambas curvas, entre Qs y Qp.\n\nb) Impuesto pigouviano: impuesto por unidad producida (o emitida) igual al costo externo marginal. Encarece producir en exactamente el daño causado: internaliza la externalidad, desplazando el costo privado hasta el social, y lleva al mercado por sí solo a la cantidad óptima Qs, además de recaudar. Permisos transables: la autoridad fija la CANTIDAD total de emisiones tolerable y licita o reparte cuotas que las empresas pueden comprar y vender; el precio del permiso surge del mercado. Las empresas con menores costos de abatimiento reducen emisiones y venden sus permisos, y las de mayores costos los compran: la meta ambiental se logra al MENOR costo agregado. Ventaja de ambos frente a la norma directa (estándar uniforme): la norma exige lo mismo a todas las firmas sin considerar que sus costos de abatimiento difieren, resultando más cara para la sociedad; los instrumentos económicos usan el sistema de precios para asignar el esfuerzo de descontaminación eficientemente y dan incentivos permanentes a innovar en tecnologías limpias. (El impuesto fija el precio de contaminar y deja endógena la cantidad; los permisos fijan la cantidad y dejan endógeno el precio.)\n\nc) \"Contaminación cero\" no es, en general, socialmente óptimo. El óptimo se alcanza donde el beneficio marginal de reducir contaminación iguala su costo marginal de abatimiento: reducir las últimas unidades de emisión tiene costos crecientes y beneficios marginales decrecientes. Exigir cero emisiones (cierre total) eliminaría también toda la producción, el empleo y el valor que la actividad genera, pudiendo costar a la sociedad más que el daño evitado. La excepción: si el costo social de la actividad supera al beneficio total que genera (por ejemplo, daños graves e irreversibles a la salud), el cierre puede ser eficiente; pero como regla general el óptimo es una cantidad POSITIVA pero MENOR de contaminación, no cero.",
      criterios: [
        { texto: "a) Identifica la externalidad negativa en la producción y la divergencia entre costo privado y costo social", peso: 2 },
        { texto: "a) Grafica correctamente CMg privado y CMg social (por encima), con equilibrio privado A, óptimo social B (Qs < Qp) y pérdida social identificada", peso: 2 },
        { texto: "b) Explica el impuesto pigouviano como internalización del costo externo que lleva a la cantidad óptima", peso: 1 },
        { texto: "b) Explica los permisos transables (tope de cantidad + comercio de cuotas) y la minimización del costo agregado de abatimiento", peso: 2 },
        { texto: "b) Señala la ventaja de los instrumentos económicos frente a la norma directa (eficiencia con costos de abatimiento heterogéneos, incentivo a innovar)", peso: 1 },
        { texto: "c) Argumenta con lógica marginal que el óptimo de contaminación no es cero (costos crecientes de abatimiento vs. beneficios decrecientes), reconociendo el caso extremo en que cerrar es eficiente", peso: 3 }
      ],
      erroresComunes: [
        "Dibujar el costo social por debajo del costo privado o mover la demanda: la externalidad negativa en la producción se representa con el CMg social POR ENCIMA del privado.",
        "Afirmar que el objetivo de la regulación es eliminar toda la contaminación: el óptimo social iguala beneficio y costo marginal de abatir, y usualmente implica contaminación positiva.",
        "Tratar el impuesto pigouviano como un impuesto recaudatorio cualquiera: su monto óptimo es igual al daño externo marginal, y su fin es corregir la asignación, no recaudar."
      ]
    },

    {
      id: "eco-018",
      tema: "Oligopolio, colusión, teoría de juegos y libre competencia",
      dificultad: "dificil",
      enunciado: "La Fiscalía Nacional Económica (FNE) presentó un requerimiento contra las dos principales cadenas de farmacias del país, acusándolas de coludirse durante tres años para subir coordinadamente los precios de un grupo de medicamentos. La investigación se inició gracias a que una de las cadenas se acogió al mecanismo de delación compensada. Suponga que cada cadena tiene dos estrategias posibles: \"Coludirse\" (respetar el acuerdo de precios altos) o \"Competir\" (bajar precios). Los beneficios semanales (en millones de pesos) son: si ambas se coluden, cada una gana 100; si ambas compiten, cada una gana 40; si una compite mientras la otra respeta el acuerdo, la que compite gana 140 y la que respeta gana 10.\n\na) Construya la matriz de pagos del juego, identifique la estrategia dominante de cada empresa y el equilibrio de Nash. ¿Corresponde a un dilema del prisionero? Explique. 5 puntos\n\nb) Si el equilibrio de Nash del juego simultáneo es competir, ¿por qué las farmacias lograron sostener la colusión durante tres años? Explique qué condiciones facilitan la estabilidad de un cartel. 3 puntos\n\nc) Explique el rol de la FNE, del Tribunal de Defensa de la Libre Competencia (TDLC) y del mecanismo de delación compensada en el combate a la colusión, y por qué la delación compensada \"ataca\" precisamente la estabilidad del cartel. 4 puntos",
      respuestaModelo: "a) Matriz de pagos (pagos: Farmacia 1, Farmacia 2):\n\n- (Coludirse, Coludirse) = (100, 100)\n- (Coludirse, Competir) = (10, 140)\n- (Competir, Coludirse) = (140, 10)\n- (Competir, Competir) = (40, 40)\n\nEstrategia dominante: para cada farmacia, \"Competir\" domina a \"Coludirse\": si la rival se colude, competir da 140 > 100; si la rival compite, competir da 40 > 10. Como ambas tienen la misma estrategia dominante, el EQUILIBRIO DE NASH es (Competir, Competir) con pagos (40, 40). Sí es un dilema del prisionero: existe un resultado cooperativo mejor para ambas (100, 100), pero el incentivo individual a desviarse lleva a un equilibrio inferior en términos de los jugadores; la cooperación (colusión) es inestable en el juego de una sola vez. (Nótese que el \"mal\" resultado para las empresas —competir— es el BUENO para los consumidores y la sociedad.)\n\nb) La colusión puede sostenerse porque el juego NO se juega una sola vez: es un juego REPETIDO indefinidamente. En la interacción repetida, desviarse otorga una ganancia de corto plazo (140 por una semana) pero gatilla represalias futuras (guerra de precios: 40 para siempre), por lo que si las empresas valoran suficientemente el futuro, conviene respetar el acuerdo (estrategias de castigo tipo gatillo). Condiciones que facilitan la estabilidad del cartel: pocas empresas (más fácil coordinar y vigilar), interacción frecuente y horizonte largo, precios observables y transparentes (detectar desvíos rápido), productos homogéneos, barreras a la entrada (las rentas no atraen entrantes que rompan el acuerdo) y demanda estable.\n\nc) La FNE es el órgano investigador y acusador: investiga las infracciones a la libre competencia (DL 211), fiscaliza y presenta requerimientos. El TDLC es el órgano jurisdiccional: juzga, resuelve y sanciona las conductas (multas, prohibiciones), además de proponer cambios normativos. La DELACIÓN COMPENSADA otorga exención o reducción de sanciones al primer miembro del cartel que lo confiese y aporte pruebas. Ataca directamente la estabilidad del cartel porque cambia los pagos del juego: cada miembro sabe que sus socios tienen un incentivo permanente a \"correr a confesar\" primero (quien delata queda inmune; los demás reciben todo el castigo). Esto instala desconfianza mutua —recrea el dilema del prisionero al interior del cartel—, aumenta la probabilidad de detección y hace que la colusión sea más difícil de sostener y más fácil de probar (evidencia dura aportada por un partícipe).",
      criterios: [
        { texto: "a) Construye correctamente la matriz de pagos 2x2 con los cuatro resultados", peso: 1 },
        { texto: "a) Identifica \"Competir\" como estrategia dominante de ambas y el equilibrio de Nash (Competir, Competir)", peso: 2 },
        { texto: "a) Justifica que es un dilema del prisionero: existe un resultado cooperativo superior para ambas que no es equilibrio", peso: 2 },
        { texto: "b) Explica la sostenibilidad de la colusión por juego repetido (ganancia de desviarse vs. castigo futuro) y menciona al menos dos condiciones de estabilidad del cartel", peso: 3 },
        { texto: "c) Distingue los roles: FNE investiga y acusa; TDLC juzga y sanciona", peso: 2 },
        { texto: "c) Explica cómo la delación compensada desestabiliza el cartel al premiar al primero que confiesa (desconfianza, carrera por delatar)", peso: 2 }
      ],
      erroresComunes: [
        "Señalar (Coludirse, Coludirse) como equilibrio de Nash porque da mayores pagos: el equilibrio de Nash se define por la ausencia de incentivos unilaterales a desviarse, no por el mejor resultado conjunto.",
        "Confundir los roles institucionales: la FNE no sanciona (investiga y acusa); quien juzga y sanciona es el TDLC.",
        "Explicar la delación compensada como un simple castigo mayor: su fuerza está en cambiar los incentivos internos del cartel premiando al que delata primero."
      ]
    },

    {
      id: "eco-019",
      tema: "Información asimétrica: selección adversa y riesgo moral",
      dificultad: "dificil",
      enunciado: "Una nueva insurtech chilena lanzó un seguro de salud 100% digital: cualquier persona puede contratarlo en cinco minutos desde el celular, sin exámenes médicos ni declaración de enfermedades preexistentes, con una prima única igual para todos los asegurados. A los dos años, la empresa reportó pérdidas significativas: sus asegurados resultaron gastar en salud mucho más que el promedio de la población y, además, la frecuencia de consultas y exámenes de sus clientes aumentó fuertemente después de contratar la póliza.\n\na) Identifique y explique la falla de información que explica que los asegurados de la empresa gasten más que el promedio poblacional. ¿Por qué la prima única agrava el problema en el tiempo (espiral)? 4 puntos\n\nb) Identifique y explique la segunda falla de información presente en el caso, distinguiéndola conceptualmente de la anterior. 3 puntos\n\nc) Proponga dos mecanismos concretos para mitigar cada una de las dos fallas identificadas (cuatro en total), explicando cómo operan. 4 puntos",
      respuestaModelo: "a) Es un problema de SELECCIÓN ADVERSA: asimetría de información PREVIA al contrato (características ocultas). Cada persona conoce su estado de salud mejor que la aseguradora; con prima única y sin exámenes, el seguro resulta \"barato\" para las personas de alto riesgo (esperan gastar más que la prima) y \"caro\" para las de bajo riesgo. Por autoselección, contratan mayoritariamente los de alto riesgo. La espiral: al concentrarse malos riesgos, los costos superan las primas; si la empresa sube la prima para cubrirlos, expulsa a los riesgos relativamente mejores que quedaban y retiene solo a los peores, obligando a nuevas alzas... el mercado puede llegar a desaparecer (lógica del mercado de los \"limones\" de Akerlof aplicada a seguros).\n\nb) La segunda falla es RIESGO MORAL: asimetría de información POSTERIOR al contrato (acciones ocultas). Una vez asegurada, la persona no enfrenta el costo completo de sus decisiones: aumenta el uso de consultas y exámenes (sobreutilización) y puede reducir el autocuidado, porque el costo lo absorbe la aseguradora que no puede observar perfectamente su comportamiento. Distinción conceptual: la selección adversa ocurre ANTES de contratar y se refiere a QUIÉN contrata (características ocultas); el riesgo moral ocurre DESPUÉS de contratar y se refiere a CÓMO se comporta el asegurado (acciones ocultas).\n\nc) Mitigación de la selección adversa (dos): (1) exámenes médicos y declaración de salud previos, que permiten tarificar según riesgo (revelar la característica oculta); (2) seguro obligatorio o grupal (por ejemplo, pólizas colectivas por empresa), que fuerza la incorporación de buenos y malos riesgos al pool, impidiendo la autoselección; también son válidos: períodos de carencia, exclusión temporal de preexistencias, descuentos por historial (señalización). Mitigación del riesgo moral (dos): (1) copagos y deducibles: el asegurado paga una fracción de cada prestación, recuperando el incentivo a usar el sistema con moderación; (2) monitoreo y auditoría de prestaciones (o requerir derivación médica para exámenes), que reduce la asimetría sobre las acciones; también válidos: topes de cobertura, bonificaciones por baja siniestralidad (alinear incentivos, lógica agente-principal).",
      criterios: [
        { texto: "a) Identifica selección adversa como asimetría previa al contrato con autoselección de altos riesgos ante prima única", peso: 2 },
        { texto: "a) Explica la espiral: alza de primas que expulsa a los buenos riesgos y concentra a los malos, pudiendo destruir el mercado", peso: 2 },
        { texto: "b) Identifica riesgo moral como asimetría posterior al contrato (sobreuso, menor autocuidado)", peso: 2 },
        { texto: "b) Distingue conceptualmente ambos problemas (antes/después del contrato; características ocultas vs. acciones ocultas)", peso: 1 },
        { texto: "c) Propone dos mecanismos pertinentes contra la selección adversa y explica cómo operan", peso: 2 },
        { texto: "c) Propone dos mecanismos pertinentes contra el riesgo moral y explica cómo operan", peso: 1 }
      ],
      erroresComunes: [
        "Confundir selección adversa con riesgo moral: la primera es previa al contrato (quién contrata), el segundo es posterior (cómo se comporta el asegurado).",
        "Proponer \"subir la prima\" como solución a la selección adversa: eso agrava el problema, pues expulsa a los buenos riesgos y retiene a los malos.",
        "Atribuir las pérdidas a \"mala suerte\" o mala gestión de costos, sin reconocer que el diseño del contrato (prima única, sin exámenes) genera los incentivos del problema."
      ]
    },

    {
      id: "eco-020",
      tema: "Ahorro, fondos prestables, Solow y OA-DA: análisis integrado",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "El Congreso aprobó una reforma que aumenta gradualmente la tasa de cotización previsional en 6 puntos porcentuales, con destino íntegro a cuentas de capitalización individual de los trabajadores. Analistas debaten sus efectos: algunos destacan el impulso al ahorro y la inversión; otros advierten una contracción del consumo en el corto plazo.\n\na) Utilizando el mercado de fondos prestables, explique y grafique el efecto de la reforma sobre el ahorro nacional, la tasa de interés y la inversión. Mencione qué supuesto sobre el ahorro voluntario está detrás de su respuesta. 4 puntos\n\nb) Utilizando el modelo de Solow, explique y grafique el efecto de largo plazo sobre el capital por trabajador y el ingreso per cápita. ¿Cambiaría su respuesta si la mayor cotización se destinara a financiar pensiones actuales bajo un esquema de reparto (\"pay-as-you-go\")? 4 puntos\n\nc) Utilizando el modelo OA-DA, explique y grafique el efecto de CORTO PLAZO de la reforma sobre el PIB y el nivel de precios, considerando el impacto sobre el consumo de los hogares. 4 puntos",
      respuestaModelo: "a) La mayor cotización es AHORRO FORZOSO que va a cuentas de capitalización individual: aumenta el ahorro nacional. En el mercado de fondos prestables, la OFERTA de fondos se EXPANDE (OFP0 a OFP1, a la derecha): la tasa de interés CAE de r0 a r1 y, con menor tasa, aumenta el VPN de los proyectos y la INVERSIÓN de equilibrio AUMENTA (movimiento sobre la demanda de fondos). Supuesto clave: que el mayor ahorro forzoso NO es compensado completamente por una caída del ahorro voluntario de los hogares (ni por mayor informalidad laboral); si la compensación fuera total, la oferta de fondos no se desplazaría. En un esquema de capitalización individual es razonable esperar un efecto neto positivo sobre el ahorro.\n\nDescripción del gráfico esperado: mercado de fondos prestables con demanda (inversión) de pendiente negativa y oferta (ahorro) de pendiente positiva desplazándose a la derecha; r1 < r0 y fondos $1 > $0.\n\nb) En el modelo de Solow, el aumento de la tasa de ahorro s desplaza la función de ahorro/inversión s·f(k) hacia ARRIBA. En el estado estacionario inicial la inversión ahora supera a la depreciación, por lo que el capital por trabajador (K/L) se ACUMULA hasta un nuevo estado estacionario con MAYOR capital por trabajador (k1 > k0) y MAYOR ingreso per cápita (y1 > y0). Durante la transición la economía crece más rápido; en el nuevo estado estacionario el crecimiento vuelve a su tasa de largo plazo, pero en un NIVEL de PIB per cápita superior. Si la cotización financiara pensiones actuales (reparto/pay-as-you-go), las contribuciones se destinarían a GASTO CORRIENTE (consumo de los pensionados), no a ahorro: el efecto neto sobre el ahorro nacional sería nulo o incluso negativo (si cae el ahorro voluntario), con lo cual s·f(k) no sube (o baja), y no habría ganancia —o habría pérdida— de capital e ingreso per cápita de largo plazo.\n\nDescripción del gráfico esperado: modelo de Solow con eje k (capital por trabajador); función de producción f(k); recta de depreciación (δ+n)k; curva de ahorro s0·f(k) desplazándose hacia arriba a s1·f(k); nuevo estado estacionario en k1 > k0 con y1 > y0.\n\nc) En el corto plazo, la mayor cotización reduce el ingreso disponible (líquido) de los trabajadores (y/o encarece la contratación): el CONSUMO cae, contrayendo la DEMANDA AGREGADA (DA = C + I + G + X - M): DA0 se desplaza a la izquierda a DA1. Resultado de corto plazo: el PIB CAE (Y1 < Y0) y el nivel de precios BAJA (P1 < P0), con menores presiones inflacionarias. El mayor estímulo a la inversión vía menor tasa de interés (parte a) amortigua, pero típicamente no revierte de inmediato, la contracción del consumo. Se aprecia entonces la disyuntiva temporal de la reforma: costo de corto plazo (menor demanda) versus beneficio de largo plazo (más capital e ingreso per cápita).\n\nDescripción del gráfico esperado: modelo OA-DA con OA de pendiente positiva y DA desplazándose a la izquierda; equilibrio inicial A (P0, Y0) y final B con P1 < P0 e Y1 < Y0.",
      criterios: [
        { texto: "a) Explica la expansión de la oferta de fondos prestables con caída de la tasa de interés y aumento de la inversión, y grafica correctamente", peso: 2 },
        { texto: "a) Explicita el supuesto de compensación incompleta del ahorro voluntario (efecto neto positivo bajo capitalización individual)", peso: 1 },
        { texto: "b) Explica y grafica en Solow el aumento de s: mayor k y mayor ingreso per cápita en el nuevo estado estacionario", peso: 2 },
        { texto: "b) Contrasta con el esquema de reparto: las cotizaciones van a gasto corriente, sin aumento (o con caída) del ahorro y sin ganancia de largo plazo", peso: 2 },
        { texto: "c) Identifica la caída del consumo y la contracción de la DA en el corto plazo, con menor PIB y menor nivel de precios, y grafica correctamente", peso: 2 },
        { texto: "c) Integra el análisis: disyuntiva entre costo de corto plazo y beneficio de largo plazo", peso: 1 }
      ],
      erroresComunes: [
        "Tratar el aumento del ahorro como expansión de la demanda agregada de corto plazo: en el corto plazo mayor ahorro significa MENOR consumo y una DA más contraída.",
        "Afirmar que en Solow la mayor tasa de ahorro eleva permanentemente la TASA de crecimiento: eleva el NIVEL de ingreso per cápita del estado estacionario; el crecimiento extra es solo transitorio.",
        "Ignorar la diferencia entre capitalización individual y reparto: en reparto las cotizaciones financian consumo presente y no constituyen ahorro nacional adicional."
      ]
    },

    {
      id: "eco-021",
      tema: "Política fiscal: IS-LM, fondos prestables y déficits gemelos",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Para enfrentar la debilidad de la actividad y el desempleo, el gobierno anunció un ambicioso plan plurianual de inversión pública en infraestructura, financiado íntegramente con emisión de deuda pública, sin aumento de impuestos. La Dirección de Presupuestos reconoció que el plan elevará el déficit fiscal por varios años. Suponga, para las partes a) y b), una economía CERRADA con precios fijos en el corto plazo.\n\na) Utilizando el modelo IS-LM, explique y grafique el efecto de corto plazo del plan sobre el PIB y la tasa de interés. Explique el rol del efecto multiplicador y por qué el aumento final del PIB es menor al que predeciría el multiplicador simple del gasto. 5 puntos\n\nb) Utilizando el mercado de fondos prestables, explique y grafique el efecto del mayor déficit fiscal sostenido sobre el ahorro nacional, la tasa de interés de largo plazo y la inversión privada. Nombre el efecto sobre la inversión. 4 puntos\n\nc) Ahora considere una economía ABIERTA. A partir de la identidad (X - M) = (S - I) + (T - G), explique el fenómeno de los \"déficits gemelos\": ¿qué cabría esperar para la cuenta corriente de mantenerse el mayor déficit fiscal? (No es necesario graficar). 3 puntos",
      respuestaModelo: "a) El aumento del gasto público (G) expande la demanda de bienes: la curva IS se desplaza a la DERECHA (IS0 a IS1). El efecto multiplicador amplifica el impulso inicial: el mayor gasto se convierte en ingreso de hogares y empresas, que consumen una fracción (propensión marginal a consumir), generando nuevas rondas de gasto; por eso el desplazamiento horizontal de la IS es mayor que el aumento de G. Sin embargo, el mayor ingreso eleva la demanda de dinero y, con oferta monetaria dada (LM fija), la TASA DE INTERÉS SUBE de r0 a r1. La mayor tasa reduce la inversión privada (menor VPN de los proyectos): este CROWDING OUT parcial hace que el equilibrio final (B) muestre un aumento del PIB menor al que predice el multiplicador simple. Resultado: Y sube (Y1 > Y0) y r sube (r1 > r0).\n\nDescripción del gráfico esperado: ejes r e Y; curva IS con pendiente negativa desplazándose a la derecha; LM con pendiente positiva fija; equilibrio inicial A (r0, Y0) y final B (r1, Y1), con ambos mayores. Puede indicarse el punto hipotético a tasa constante (multiplicador pleno) a la derecha de B para ilustrar el crowding out.\n\nb) El financiamiento con deuda implica mayor déficit fiscal: (T - G) se hace más negativo, es decir, cae el ahorro público y con él el AHORRO NACIONAL (S = Sp + Sg). En el mercado de fondos prestables la OFERTA de fondos se CONTRAE (OFP0 a OFP1, a la izquierda): la tasa de interés de largo plazo SUBE (r1 > r0) y la INVERSIÓN PRIVADA CAE (movimiento sobre la demanda de fondos, menor VPN). Este desplazamiento de inversión privada por gasto público se denomina EFECTO EXPULSIÓN o CROWDING OUT. La menor inversión reduce la acumulación de capital y compromete el crecimiento de largo plazo.\n\nDescripción del gráfico esperado: mercado de fondos prestables con oferta desplazándose a la izquierda; r1 > r0 y cantidad de fondos $1 < $0; puntos A y B identificados.\n\nc) De la identidad (X - M) = (S - I) + (T - G): un aumento sostenido del déficit fiscal (caída de T - G), sin un aumento equivalente del ahorro privado ni una caída equivalente de la inversión, reduce el lado derecho de la identidad y por tanto DETERIORA las exportaciones netas: el déficit fiscal \"gemelo\" arrastra un déficit de CUENTA CORRIENTE. Intuición: el exceso de gasto interno sobre el ingreso (Y < C + I + G) debe financiarse con ahorro externo, importando más de lo que se exporta y/o endeudándose con el resto del mundo (con perfecta movilidad de capitales, la entrada de capitales aprecia la moneda y comprime las exportaciones netas). Por eso cabe esperar que el mayor déficit fiscal sostenido venga acompañado de un mayor déficit en la cuenta corriente: los \"déficits gemelos\".",
      criterios: [
        { texto: "a) Explica y grafica el desplazamiento de la IS a la derecha con aumento del PIB y de la tasa de interés (puntos A y B)", peso: 2 },
        { texto: "a) Explica el efecto multiplicador (rondas de consumo según la propensión marginal a consumir)", peso: 1 },
        { texto: "a) Explica el crowding out parcial vía alza de la tasa que modera el aumento del PIB respecto del multiplicador simple", peso: 2 },
        { texto: "b) Explica la caída del ahorro público y nacional, contracción de la oferta de fondos prestables, alza de r y caída de la inversión privada (efecto expulsión), con gráfico correcto", peso: 3 },
        { texto: "b) Nombra explícitamente el efecto crowding out / efecto expulsión", peso: 1 },
        { texto: "c) Usa la identidad (X-M) = (S-I) + (T-G) para deducir el deterioro de la cuenta corriente y explica la intuición de los déficits gemelos (exceso de gasto financiado con ahorro externo)", peso: 3 }
      ],
      erroresComunes: [
        "Desplazar la LM ante una política fiscal: el gasto público desplaza la IS; la LM solo se mueve con política monetaria (o cambios en precios).",
        "Omitir el crowding out y afirmar que el PIB aumenta en el monto completo del multiplicador simple: el alza de la tasa de interés expulsa inversión privada y modera la expansión.",
        "Confundir la dirección en fondos prestables: el mayor déficit fiscal CONTRAE la oferta de fondos (menos ahorro nacional); no expande la demanda de fondos del sector privado."
      ]
    },

    {
      id: "eco-022",
      tema: "Mundell-Fleming: política monetaria en economía abierta",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Con la inflación anual muy por sobre la meta de 3%, el Banco Central de Chile decidió un alza agresiva de la Tasa de Política Monetaria. Considere a Chile como una economía pequeña y abierta, con perfecta movilidad de capitales y tipo de cambio flexible.\n\na) Explique y grafique el efecto inicial del alza de la tasa en el mercado monetario y sobre la curva LM, y su primer impacto sobre la inversión y el PIB. 3 puntos\n\nb) Explique y grafique lo que ocurre en el mercado cambiario: diferencial de tasas, movimiento de capitales y tipo de cambio. 4 puntos\n\nc) Situándose en el modelo Mundell-Fleming, explique y grafique el mecanismo automático que sigue al movimiento cambiario y el efecto final sobre la balanza comercial, el PIB y las presiones inflacionarias. Indique, además, por qué el resultado sería distinto bajo tipo de cambio FIJO. 5 puntos",
      respuestaModelo: "a) El alza de la tasa corresponde a una política monetaria CONTRACTIVA: el Banco Central reduce la oferta monetaria (por ejemplo, mediante una OMA de venta de instrumentos). En el mercado monetario, la oferta real de dinero (MS/P) se contrae y la tasa de interés doméstica sube de r0 a r1. En el plano IS-LM, la LM se desplaza hacia ARRIBA/IZQUIERDA (LM0 a LM1). La mayor tasa reduce el VPN de los proyectos, contrayendo la inversión (y el consumo durable): el PIB cae de Y0 a Y1 (punto B).\n\nDescripción del gráfico esperado: mercado monetario con demanda de dinero de pendiente negativa y oferta vertical desplazándose a la izquierda (r sube); plano IS-LM con LM desplazada a la izquierda, equilibrio de A (r0, Y0) a B (r1, Y1), con r1 > r0 e Y1 < Y0.\n\nb) Con perfecta movilidad de capitales, al quedar la tasa doméstica sobre la internacional (r1 > r*), los activos financieros chilenos rentan más: se produce una ENTRADA de capitales especulativos. En el mercado cambiario, la entrada de dólares EXPANDE la oferta de divisas (XsUS$0 a XsUS$1): el tipo de cambio CAE (TC1 < TC0), es decir, el peso se APRECIA.\n\nDescripción del gráfico esperado: mercado cambiario con TC en el eje vertical y dólares en el horizontal; demanda de dólares de pendiente negativa; oferta de dólares desplazándose a la derecha; TC cae de TC0 a TC1 (puntos A y B).\n\nc) Mecanismo automático: la apreciación del peso encarece las exportaciones y abarata las importaciones, deteriorando el saldo de la balanza comercial (caen las exportaciones netas). Como NX es parte del gasto (Y = C + I + G + X - M), la curva IS se CONTRAE (IS0 a IS1), reduciendo aún más el PIB (de Y1 a Y2) y presionando la tasa doméstica de vuelta hacia r* hasta eliminar el diferencial (desaparece el incentivo al flujo de capitales). Efecto final: bajo tipo de cambio flexible, la política monetaria contractiva es MUY potente: contrae el PIB por dos vías (menor inversión y menor balanza comercial) y reduce las presiones inflacionarias (menor demanda agregada, más el abaratamiento de los bienes importados por la apreciación).\n\nDescripción del gráfico esperado: plano IS-LM (o IS-LM con r* horizontal): LM contraída y luego IS desplazándose a la izquierda hasta que la tasa retorna a r* en el punto final C, con Y2 < Y1 < Y0.\n\nBajo tipo de cambio FIJO el resultado sería el opuesto en eficacia: la entrada de capitales presionaría a apreciar el peso, y para defender la paridad el Banco Central debería COMPRAR dólares emitiendo pesos, lo que REEXPANDE la oferta monetaria y devuelve la LM a su posición original: la política monetaria pierde autonomía y resulta INEFECTIVA con cambio fijo y perfecta movilidad de capitales (el PIB y la tasa vuelven al punto inicial).",
      criterios: [
        { texto: "a) Explica la contracción monetaria, el alza de la tasa en el mercado monetario y el desplazamiento de la LM a la izquierda con caída de inversión y PIB, con gráficos correctos", peso: 2 },
        { texto: "b) Identifica el diferencial r1 > r* y la entrada de capitales especulativos", peso: 2 },
        { texto: "b) Concluye y grafica la apreciación del peso (mayor oferta de dólares, TC cae)", peso: 2 },
        { texto: "c) Explica el mecanismo automático: apreciación deteriora la balanza comercial, contrae la IS y elimina el diferencial de tasas, con caída adicional del PIB (grafica IS1 y punto final)", peso: 3 },
        { texto: "c) Concluye la reducción de las presiones inflacionarias y explica la inefectividad de la política monetaria bajo tipo de cambio fijo (el BC compra dólares y la LM vuelve)", peso: 2 }
      ],
      erroresComunes: [
        "Concluir depreciación del peso ante el alza de la tasa doméstica: con r1 > r* ENTRAN capitales, aumenta la oferta de dólares y el peso se APRECIA.",
        "Olvidar el efecto rebote de la IS (mecanismo automático): el análisis no termina en el desplazamiento de la LM; la apreciación contrae la balanza comercial y la IS hasta restaurar r = r*.",
        "Afirmar que con tipo de cambio fijo la política monetaria es más potente: es al revés; defender la paridad obliga al Banco Central a revertir la contracción monetaria."
      ]
    },

    // ================= NUEVAS: TEMAS SALIDOS EN EXÁMENES REALES (13) =================

    {
      id: "eco-023",
      tema: "Mercado de la salud pública con precio cero: exceso de demanda y contracción de oferta",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "El presidente del Colegio Médico de Valparaíso denunció que al menos nueve de los 16 pabellones quirúrgicos del Hospital Carlos Van Buren permanecen cerrados debido a la falta de recursos, los cuales habrían sido destinados a otros fines. Antes del cierre ya existía una lista de espera de pacientes para la realización de una cirugía. Suponga que el 100% de los pacientes del hospital están afiliados a FONASA y se atienden gratuitamente en el establecimiento.\n\na) Utilizando el modelo de oferta y demanda, explique y grafique la situación inicial del mercado de cirugías en este hospital, antes del cierre de los pabellones. 2 puntos\n\nb) Explique y grafique los efectos del cierre de estos pabellones. 2 puntos\n\nc) Suponga ahora que en una clínica privada aumentan los costos de operación en magnitud similar. Explique por qué el efecto sobre la cantidad de atenciones sería distinto al del sector público. 2 puntos",
      respuestaModelo: "a) En el sector público los pacientes de FONASA enfrentan un precio igual a CERO, muy por debajo del precio de equilibrio del mercado. A precio cero, la cantidad demandada de cirugías (Qd) es máxima y supera con creces la cantidad que el hospital puede ofrecer con sus pabellones y presupuesto (Qs): existe un EXCESO DE DEMANDA, que se manifiesta precisamente como la lista de espera mencionada en el enunciado. La cantidad efectivamente atendida queda determinada por el lado corto del mercado: la oferta (Qs). Como el precio no puede subir para racionar, el racionamiento se hace por mecanismos no monetarios: tiempo de espera, priorización clínica, etc.\n\nDescripción del gráfico esperado: ejes P y Q; demanda con pendiente negativa y oferta con pendiente positiva que se cruzan en un equilibrio hipotético (P*, Q*); línea de precio en P = 0 (eje horizontal); a ese precio se identifican Qs (sobre la oferta) y Qd (sobre la demanda, donde la demanda corta el eje de cantidades), con el segmento entre ambas rotulado como exceso de demanda o lista de espera.\n\nb) El cierre de nueve de los 16 pabellones reduce la capacidad de producción del hospital: la OFERTA se CONTRAE (O0 se desplaza a la izquierda a O1). Como el precio sigue fijo en cero, no hay ajuste vía precios: la cantidad de cirugías realizadas CAE (de Qs0 a Qs1) y el exceso de demanda AUMENTA (la brecha entre Qd y Qs se amplía): las listas de espera se alargan y se agrava el racionamiento no monetario.\n\nDescripción del gráfico esperado: el mismo gráfico anterior con la oferta desplazada a la izquierda (O0 a O1), precio fijo en cero, Qs1 < Qs0 y la brecha de exceso de demanda claramente mayor.\n\nc) En el sector privado los precios SÍ pueden ajustarse. El aumento de costos contrae la oferta, pero gran parte del mayor costo se traslada a precios: el precio de equilibrio sube de P0 a P1 y la cantidad transada cae relativamente poco (según la elasticidad de la demanda). El mecanismo de precios absorbe parte del shock, evitando la reducción drástica de atenciones que ocurre en el sector público, donde el precio fijo en cero obliga a que TODO el ajuste sea vía cantidad (menos atenciones y más lista de espera).",
      criterios: [
        { texto: "a) Identifica que a precio cero existe exceso de demanda (Qd > Qs), que corresponde a la lista de espera, y que la cantidad atendida la determina la oferta", peso: 1 },
        { texto: "a) Grafica correctamente la situación inicial: precio en cero, Qs y Qd identificados y brecha de exceso de demanda rotulada", peso: 1 },
        { texto: "b) Explica el cierre de pabellones como contracción de la oferta con caída de las atenciones y aumento del exceso de demanda (listas de espera más largas)", peso: 1 },
        { texto: "b) Grafica correctamente el desplazamiento de la oferta a la izquierda con precio fijo en cero y brecha mayor", peso: 1 },
        { texto: "c) Explica que en el sector privado el ajuste es principalmente vía precios (traslado de costos), por lo que la cantidad cae mucho menos que en el sector público", peso: 2 }
      ],
      erroresComunes: [
        "Analizar el mercado como si el precio pudiera subir hasta el equilibrio: con precio fijo en cero no hay ajuste vía precios y el equilibrio de mercado nunca se alcanza.",
        "Modelar el cierre de pabellones como caída de la demanda: es una contracción de la OFERTA (capacidad productiva), la demanda por cirugías no cambia.",
        "Olvidar que la cantidad transada la determina el lado corto (la oferta): dibujar la cantidad atendida sobre la curva de demanda."
      ]
    },

    {
      id: "eco-024",
      tema: "Modelo OA-DA: shock de demanda agregada por política monetaria expansiva",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "En un reciente comunicado, el Banco Central estadounidense (FED) aplicó un recorte de la tasa de interés que controla, situándola en un rango del 3,75% al 4%. La institución justificó la medida señalando que, si bien la inflación permanece por encima del objetivo del 2%, ha mostrado signos de moderación. Asimismo, el mercado laboral presenta señales de desaceleración y los riesgos sobre el empleo han ido en aumento.\n\nUtilizando el modelo de oferta y demanda agregada, analice y grafique los efectos de la decisión de la FED en la economía de los EE.UU. En particular, muestre y analice los efectos sobre la demanda agregada, el PIB, el empleo y el nivel de precios. 5 puntos",
      respuestaModelo: "El recorte de la tasa de interés constituye una POLÍTICA MONETARIA EXPANSIVA. La menor tasa de interés aumenta el valor presente neto (VPN) de los proyectos, estimulando la INVERSIÓN, y abarata el crédito de consumo e hipotecario, estimulando el CONSUMO (especialmente de bienes durables). Como la demanda agregada es DA = C + I + G + X - M, el aumento de C e I EXPANDE la demanda agregada: DA0 se desplaza a la derecha a DA1.\n\nEn el nuevo equilibrio del modelo OA-DA: el PIB AUMENTA de Y0 a Y1; con mayor actividad, las empresas contratan más trabajadores, por lo que el EMPLEO AUMENTA (y la tasa de desempleo cae, que es justamente lo que busca la FED ante la desaceleración del mercado laboral); y el NIVEL DE PRECIOS SUBE de P0 a P1, es decir, la medida genera presiones inflacionarias adicionales.\n\nEl riesgo de la decisión: como la inflación aún está por sobre la meta de 2%, el estímulo a la demanda puede retrasar la convergencia inflacionaria. La FED enfrenta la disyuntiva de corto plazo entre actividad/empleo e inflación, y en este caso priorizó sostener el empleo.\n\nDescripción del gráfico esperado: ejes P (nivel de precios) e Y (PIB); oferta agregada OA con pendiente positiva; demanda agregada desplazándose a la derecha (DA0 a DA1); equilibrio inicial A (P0, Y0) y final B (P1, Y1), con Y1 > Y0 y P1 > P0.",
      criterios: [
        { texto: "Identifica el recorte de tasa como política monetaria expansiva que estimula inversión y consumo (mayor VPN, crédito más barato) y expande la DA", peso: 2 },
        { texto: "Concluye correctamente los tres efectos: aumenta el PIB, aumenta el empleo (cae el desempleo) y sube el nivel de precios", peso: 1 },
        { texto: "Grafica correctamente el modelo OA-DA con DA desplazada a la derecha, puntos A y B, Y1 > Y0 y P1 > P0", peso: 1 },
        { texto: "Analiza el riesgo o disyuntiva: la medida agrega presión inflacionaria cuando la inflación aún está sobre la meta (trade-off actividad-inflación)", peso: 1 }
      ],
      erroresComunes: [
        "Desplazar la oferta agregada: la política monetaria opera sobre la DEMANDA agregada; la OA se mueve con shocks de costos o de capacidad productiva.",
        "Concluir que los precios bajan porque baja la tasa de interés: una expansión de demanda sube el PIB Y los precios (se mueven en la misma dirección).",
        "Confundir la dirección de la política: un RECORTE de tasa es expansivo; un alza es contractiva."
      ]
    },

    {
      id: "eco-025",
      tema: "Términos de intercambio: precio del cobre, balanza comercial y OA-DA",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Los datos de la economía chilena han mostrado un aumento sostenido en el precio del cobre, impulsado por el dinamismo de la demanda mundial y la transición energética. Los analistas esperan que este nivel de precios se mantenga durante los próximos meses, mientras el precio de las importaciones chilenas (como el petróleo) permanece estable.\n\nExplique cómo afectaría el aumento del precio del cobre a los términos de intercambio de Chile, a la balanza comercial y al PIB. Sitúese gráfica y analíticamente en el modelo de oferta y demanda agregada para fundamentar su respuesta. 5 puntos",
      respuestaModelo: "Los TÉRMINOS DE INTERCAMBIO se definen como el cociente entre el precio de las exportaciones y el precio de las importaciones: TI = Px / Pm. Como el cobre es la principal exportación chilena, el aumento sostenido de su precio —con el precio de las importaciones estable— hace que Px suba más que Pm: los términos de intercambio MEJORAN. Cada unidad exportada permite ahora comprar más importaciones: mejora el poder de compra del país.\n\nLa mejora de los términos de intercambio aumenta el VALOR de las exportaciones, mejorando el saldo de la BALANZA COMERCIAL (X - M aumenta). Como las exportaciones netas son un componente de la demanda agregada (DA = C + I + G + X - M), el mayor saldo comercial EXPANDE la demanda agregada: DA0 se desplaza a la derecha a DA1. Además, el mayor ingreso del sector exportador y del fisco (vía Codelco e impuestos a la minería) refuerza el consumo y el gasto.\n\nEn el modelo OA-DA, el nuevo equilibrio muestra un PIB MAYOR (Y1 > Y0) y un NIVEL DE PRECIOS MAYOR (P1 > P0): el shock favorable de términos de intercambio es expansivo, con presiones inflacionarias de demanda como contrapartida.\n\nDescripción del gráfico esperado: ejes P e Y; oferta agregada OA con pendiente positiva; demanda agregada desplazándose a la derecha (DA0 a DA1); equilibrio inicial A (P0, Y0) y final B (P1, Y1), con Y1 > Y0 y P1 > P0.",
      criterios: [
        { texto: "Define los términos de intercambio (TI = Px/Pm) y concluye que el alza del precio del cobre los mejora", peso: 1 },
        { texto: "Explica la mejora del saldo de la balanza comercial y su efecto expansivo sobre la demanda agregada (X - M componente de la DA)", peso: 2 },
        { texto: "Concluye correctamente: aumenta el PIB y sube el nivel de precios", peso: 1 },
        { texto: "Grafica correctamente el modelo OA-DA con la DA desplazada a la derecha, puntos A y B identificados", peso: 1 }
      ],
      erroresComunes: [
        "Definir los términos de intercambio al revés (Pm/Px) o confundirlos con el tipo de cambio: son el precio relativo de las exportaciones respecto de las importaciones.",
        "Desplazar la oferta agregada: el mayor precio del cobre opera vía balanza comercial e ingreso, es decir, por el lado de la DEMANDA agregada.",
        "Concluir que el nivel de precios cae: una expansión de demanda agregada sube producto Y precios."
      ]
    },

    {
      id: "eco-026",
      tema: "Impuesto al trabajo: cotización previsional y mercado laboral formal e informal",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Se encuentra en trámite legislativo un proyecto de reforma al sistema de pensiones en el cual se propone aumentar la tasa de cotización previsional en 6 puntos porcentuales con cargo al empleador. En relación con este tema:\n\na) ¿Hay alguna diferencia entre establecer que esta tasa de 6% sea de cargo del empleador o del propio trabajador? Explique. 2 puntos\n\nb) Explique y grafique los efectos de esta mayor tasa de cotización en el mercado del trabajo formal y en el mercado del trabajo informal. Compare ambos mercados. 6 puntos",
      respuestaModelo: "a) La cotización adicional funciona como un IMPUESTO AL TRABAJO, y en los impuestos la incidencia LEGAL es irrelevante: no importa a quién se le cobre (empleador o trabajador), los efectos sobre la cantidad de empleo, los salarios y la eficiencia son los MISMOS. Si se carga al empleador, la demanda de trabajo se contrae (contratar se encarece); si se carga al trabajador, la oferta de trabajo se contrae (trabajar formalmente rinde menos líquido). En ambos casos el resultado es idéntico: cae el empleo de equilibrio, AUMENTA el costo laboral total que paga el empleador y DISMINUYE el salario líquido que recibe el trabajador; la diferencia entre ambos es la cotización. La distribución real de la carga depende de las elasticidades relativas de oferta y demanda de trabajo, no de la ley.\n\nb) Mercado FORMAL: la cotización introduce una cuña entre lo que paga la empresa y lo que recibe el trabajador. Con la cotización a cargo del empleador, la demanda de trabajo formal se contrae (D0 a D1): el EMPLEO FORMAL CAE de L0 a L1, el salario líquido del trabajador BAJA y el costo total por trabajador para la empresa SUBE. Se genera además una pérdida de eficiencia (empleos formales que dejan de existir).\n\nMercado INFORMAL: los trabajadores que pierden (o no encuentran) empleo formal, y aquellos para quienes el trabajo formal se vuelve menos atractivo por el menor salario líquido, se desplazan al sector informal: la OFERTA de trabajo informal se EXPANDE (O0 a O1). En consecuencia, el SALARIO informal BAJA y el EMPLEO informal AUMENTA.\n\nComparación: la política reduce el empleo y el salario líquido en el sector formal y expande el sector informal con salarios más bajos; es decir, incentiva la INFORMALIDAD, precisamente el sector sin cotizaciones ni protección previsional, lo que puede erosionar el objetivo de la reforma.\n\nDescripción del gráfico esperado: dos paneles con ejes W y L. Panel formal: demanda de trabajo desplazándose a la izquierda (o equivalentemente la cuña del impuesto), con L1 < L0, salario líquido menor y costo del empleador mayor. Panel informal: oferta de trabajo desplazándose a la derecha, con salario informal menor y empleo informal mayor.",
      criterios: [
        { texto: "a) Explica que la cotización opera como impuesto al trabajo y que la incidencia legal (empleador o trabajador) es irrelevante: mismos efectos sobre empleo, salarios y eficiencia", peso: 2 },
        { texto: "b) Mercado formal: explica la contracción de la demanda (o la cuña), con caída del empleo, menor salario líquido y mayor costo para el empleador", peso: 2 },
        { texto: "b) Mercado informal: explica la expansión de la oferta de trabajo, con caída del salario informal y aumento del empleo informal", peso: 2 },
        { texto: "b) Compara ambos mercados y concluye el incentivo a la informalidad como efecto no deseado de la política", peso: 1 },
        { texto: "b) Grafica correctamente ambos paneles (formal: demanda a la izquierda; informal: oferta a la derecha) con equilibrios identificados", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que si la cotización es de cargo del empleador el trabajador no se ve afectado: la carga económica se reparte según las elasticidades, y el salario líquido cae igual.",
        "Olvidar el mercado informal o modelarlo con una contracción de oferta: los desplazados del sector formal AUMENTAN la oferta informal, bajando el salario en ese sector.",
        "Tratar la cotización como un subsidio porque \"beneficia la pensión futura\": en el análisis de corto plazo del mercado laboral opera como impuesto que reduce el empleo formal."
      ]
    },

    {
      id: "eco-027",
      tema: "Controles de precios: precios rígidos en el mercado de la salud privada (caso Isapres)",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "En el último tiempo las Isapres han visto aumentar los costos de materiales, personal y otros insumos. Dado esto, han intentado subir los precios de los planes de salud para clientes nuevos y antiguos. Sin embargo, estas alzas se han judicializado sistemáticamente, impidiendo en la práctica el ajuste de precios.\n\nUtilizando el modelo de oferta y demanda, explique y grafique cómo esta imposibilidad de ajustar los precios impacta en el mercado de la salud privada, en el corto y en el largo plazo. 6 puntos",
      respuestaModelo: "El alza de costos de las Isapres contrae la OFERTA de planes de salud (O0 se desplaza hacia arriba/izquierda a O1): a cada precio, las aseguradoras están dispuestas a ofrecer menos cobertura. En un mercado libre, el precio subiría de P0 a P1 y la cantidad caería moderadamente, absorbiendo parte del shock vía precios.\n\nPero la judicialización impide subir los precios: el precio queda FIJO en P0, operando como un PRECIO MÁXIMO efectivo por debajo del nuevo precio de equilibrio. A P0 con la nueva oferta O1, la cantidad ofrecida (Qs1) es menor que la cantidad demandada (Qd0): se genera un EXCESO DE DEMANDA. Todo el ajuste recae en la cantidad y en márgenes no monetarios: las Isapres restringen la afiliación, empeoran la calidad o cobertura de los planes, aumentan los tiempos de tramitación y reducen los convenios con prestadores.\n\nEn el LARGO PLAZO, si las empresas venden por debajo de sus costos medios, acumulan pérdidas sostenidas: algunas aseguradoras se descapitalizan y SALEN del mercado (quiebra o retiro), contrayendo aún más la oferta y agravando el exceso de demanda. Los afiliados desplazados migran forzosamente al sistema público (FONASA), presionando su capacidad y sus listas de espera. La imposibilidad de ajustar precios, pensada para proteger a los afiliados, termina reduciendo la disponibilidad y calidad de la cobertura privada.\n\nDescripción del gráfico esperado: ejes P y Q; demanda con pendiente negativa; oferta O0 desplazándose a la izquierda a O1 por el alza de costos; línea horizontal de precio fijo en P0 (bajo el nuevo equilibrio hipotético P1); a P0 se identifican Qs1 (sobre O1) y Qd0 (sobre la demanda), con la brecha rotulada como exceso de demanda.",
      criterios: [
        { texto: "Identifica el alza de costos como contracción de la oferta y la judicialización como precio fijo (precio máximo efectivo bajo el nuevo equilibrio)", peso: 2 },
        { texto: "Concluye el exceso de demanda a precio fijo y explica el ajuste por cantidad y calidad (menor afiliación, peores planes, racionamiento)", peso: 2 },
        { texto: "Analiza el largo plazo: pérdidas sostenidas, salida de aseguradoras del mercado y presión sobre el sistema público", peso: 1 },
        { texto: "Grafica correctamente: O1 a la izquierda de O0, precio fijo en P0, brecha de exceso de demanda identificada entre Qs1 y Qd0", peso: 1 }
      ],
      erroresComunes: [
        "Dibujar el precio máximo por encima del equilibrio: un control de precios solo tiene efecto cuando queda por debajo del precio de equilibrio (restricción activa).",
        "Concluir que el precio fijo protege la cantidad ofrecida: al no poder ajustar precios, el ajuste completo se traslada a la cantidad y calidad, reduciendo la cobertura.",
        "Modelar el alza de costos como caída de la demanda: los costos afectan a la OFERTA."
      ]
    },

    {
      id: "eco-028",
      tema: "Discriminación de precios de segundo grado: empaquetamiento y descuentos por volumen",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Diversas empresas utilizan el empaquetamiento de productos como parte de su estrategia competitiva. Por ejemplo, algunas cadenas de supermercados venden un \"tripack\" de bebidas de 3 litros a $4.990 (equivalente a $1.663 por unidad), mientras la misma botella comprada individualmente cuesta $1.970. Suponga que el tripack también puede comprarse con una sola variedad de bebida al mismo precio.\n\nExplique en qué consiste esta estrategia, a qué tipo de discriminación de precios corresponde, cuál es su objetivo y qué condiciones debe cumplir el mercado para que sea viable. 4 puntos",
      respuestaModelo: "El empaquetamiento con descuento por volumen corresponde a una estrategia de DISCRIMINACIÓN DE PRECIOS DE SEGUNDO GRADO: la empresa cobra precios unitarios distintos según la CANTIDAD comprada, diseñando un menú de tarifas para que los consumidores se AUTOSELECCIONEN. La empresa no puede observar directamente la disposición a pagar de cada cliente, por lo que ofrece opciones: quienes consumen mucho (mayor disposición a pagar total) eligen el tripack a $1.663 la unidad, y quienes consumen poco compran la botella individual a $1.970. Cada consumidor revela su tipo mediante su elección.\n\nEl OBJETIVO es capturar (apropiarse de) la mayor parte posible del EXCEDENTE DEL CONSUMIDOR, aumentando los ingresos y utilidades de la empresa por sobre lo que obtendría con un precio único. Con precio único, los consumidores de alto volumen retienen mucho excedente; el descuento por volumen permite venderles más unidades extrayendo parte de ese excedente, sin perder a los consumidores pequeños que siguen pagando el precio alto por unidad.\n\nCondiciones de viabilidad: (1) la empresa debe tener algún PODER DE MERCADO (capacidad de fijar precios: P > CMg); (2) debe poder impedirse o dificultarse el ARBITRAJE o reventa (que quien compra el tripack barato revenda unidades a quienes pagarían el precio individual); (3) los consumidores deben diferir en su disposición a pagar o intensidad de consumo, para que el menú de opciones efectivamente los separe.",
      criterios: [
        { texto: "Identifica la estrategia como discriminación de precios de SEGUNDO grado (precios según cantidad, menú de tarifas)", peso: 1 },
        { texto: "Explica el mecanismo de autoselección: los consumidores revelan su tipo eligiendo entre el pack con descuento por volumen y la unidad individual", peso: 1 },
        { texto: "Señala el objetivo: capturar excedente del consumidor y aumentar los ingresos/utilidades de la empresa", peso: 1 },
        { texto: "Menciona las condiciones: poder de mercado y ausencia de arbitraje/reventa (idealmente también heterogeneidad de consumidores)", peso: 1 }
      ],
      erroresComunes: [
        "Confundir el grado de discriminación: la de primer grado cobra a cada consumidor su disposición a pagar exacta; la de tercer grado segmenta por características observables (edad, ubicación); la de segundo grado usa la CANTIDAD y la autoselección.",
        "Explicar el descuento por volumen solo como \"estrategia para vender más\" sin reconocer que su lógica es extraer excedente del consumidor.",
        "Omitir que se requiere poder de mercado: en competencia perfecta (P = CMg) no es posible discriminar precios."
      ]
    },

    {
      id: "eco-029",
      tema: "Competencia monopolística: equilibrio de corto y largo plazo",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "En el mercado de los automóviles podemos observar que los Mercedes Benz tienen un precio superior a los Toyota, y que ambas marcas conviven con decenas de otras que ofrecen modelos diferenciados, sin barreras significativas a la entrada o salida de fabricantes.\n\na) Determine qué estructura de mercado es esta. Fundamente su respuesta. 2 puntos\n\nb) ¿Cuál es el equilibrio de largo plazo de esta industria en términos de precio, escala de producción, eficiencia y utilidades? Fundamente y complemente su respuesta con un gráfico. 3 puntos\n\nc) Ahora suponga que una empresa de este mercado introduce una tecnología disruptiva en su producto. ¿Cuál es el efecto de corto y de largo plazo para la firma y para el mercado? Fundamente y grafique. 3 puntos",
      respuestaModelo: "a) Se trata de COMPETENCIA MONOPOLÍSTICA: hay muchas empresas, productos DIFERENCIADOS (cada marca tiene atributos, diseño y prestigio propios, lo que explica que un Mercedes se venda más caro que un Toyota) y LIBRE ENTRADA Y SALIDA de firmas. No es oligopolio, porque no existen barreras a la entrada relevantes y el número de competidores es alto. La diferenciación otorga a cada firma una demanda propia con pendiente negativa: cierto poder para fijar precios.\n\nb) En el equilibrio de LARGO PLAZO de la competencia monopolística: (1) cada firma maximiza donde IMg = CMg y cobra P > CMg (poder de mercado por diferenciación); (2) la libre entrada erosiona las utilidades hasta que P = CMe: las UTILIDADES ECONÓMICAS SON NULAS (la demanda de cada firma queda TANGENTE a su curva de CMe); (3) la firma produce a una escala MENOR que la eficiente (a la izquierda del mínimo del CMe): existe EXCESO DE CAPACIDAD; (4) como P > CMg, hay una pérdida irrecuperable de eficiencia respecto de la competencia perfecta, que es el costo social de la variedad.\n\nDescripción del gráfico esperado: curvas CMe y CMg en forma de U; demanda de la firma con pendiente negativa TANGENTE al CMe en un punto a la izquierda del mínimo del CMe; ingreso marginal bajo la demanda; cantidad q* donde IMg = CMg; P = CMe en q* (utilidad cero), con la escala eficiente (mínimo del CMe) señalada a la derecha de q*.\n\nc) CORTO PLAZO: la innovación disruptiva diferencia aún más el producto de la firma: su demanda individual se expande (y se hace más inelástica). La firma escoge precio y cantidad como un monopolista sobre su nueva demanda (IMg = CMg) y obtiene UTILIDADES SOBRENORMALES: P > CMe, con el rectángulo de utilidades entre precio y costo medio.\n\nLARGO PLAZO: las utilidades atraen imitadores y nuevos entrantes que igualan o mejoran la característica innovadora. La demanda residual de la firma innovadora se contrae y se hace más elástica, hasta volver a la TANGENCIA con el CMe: las utilidades sobrenormales desaparecen y todas las firmas retornan a utilidad económica CERO. La innovación rinde ventajas solo transitorias.\n\nDescripción del gráfico esperado: dos paneles de la firma. Corto plazo: demanda expandida por sobre el CMe, con rectángulo de utilidades entre P y CMe a la cantidad óptima. Largo plazo: la demanda contraída nuevamente tangente al CMe (utilidad cero).",
      criterios: [
        { texto: "a) Identifica competencia monopolística fundamentando con la diferenciación de producto, muchas firmas y libre entrada/salida (y descarta oligopolio por ausencia de barreras)", peso: 2 },
        { texto: "b) Caracteriza el equilibrio de largo plazo: P > CMg, P = CMe, utilidades económicas nulas y producción bajo la escala eficiente (exceso de capacidad, pérdida de eficiencia)", peso: 2 },
        { texto: "b) Grafica correctamente la tangencia de la demanda con el CMe a la izquierda del mínimo, con IMg = CMg en q*", peso: 1 },
        { texto: "c) Corto plazo: explica y grafica las utilidades sobrenormales de la firma innovadora (P > CMe, elección tipo monopolio sobre su demanda)", peso: 2 },
        { texto: "c) Largo plazo: explica y grafica la entrada/imitación que contrae la demanda residual hasta la tangencia y elimina las utilidades", peso: 1 }
      ],
      erroresComunes: [
        "Clasificar el mercado automotor como oligopolio solo porque hay marcas grandes: sin barreras a la entrada y con alta diferenciación, la estructura que corresponde es competencia monopolística.",
        "Afirmar que en el largo plazo la firma produce en el mínimo del CMe: produce a la IZQUIERDA del mínimo (exceso de capacidad); la tangencia ocurre en la parte decreciente del CMe.",
        "Sostener que las utilidades de la innovación son permanentes: la libre entrada e imitación las erosionan hasta cero en el largo plazo."
      ]
    },

    {
      id: "eco-030",
      tema: "Teoría del consumidor: racionamiento, restricción presupuestaria y curvas de indiferencia",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "La crisis de la sequía ha llevado a las autoridades a evaluar el racionamiento del uso del agua potable, es decir, definir un máximo de consumo diario por familia, manteniendo la tarifa actual. Pensando en el bienestar de esas familias y utilizando la teoría del consumidor (restricción presupuestaria y curvas de indiferencia), explique y grafique cómo el racionamiento afecta el bienestar de una familia que, sin restricción, consumiría más agua que el máximo permitido. 5 puntos",
      respuestaModelo: "Sin racionamiento, la familia elige libremente sobre su RECTA PRESUPUESTARIA la canasta que maximiza su bienestar: el ÓPTIMO se da en la TANGENCIA entre la recta presupuestaria y la curva de indiferencia más alta alcanzable (donde la tasa marginal de sustitución iguala la razón de precios). En ese óptimo consume una cantidad de agua AL (agua libre) y una cantidad del resto de los bienes.\n\nEl racionamiento impone una RESTRICCIÓN ADICIONAL DE CANTIDAD: el consumo de agua no puede superar AR, con AR < AL. La restricción \"corta\" verticalmente el conjunto presupuestario: los puntos con más agua que AR dejan de estar disponibles, aunque la familia pueda pagarlos. Como su canasta preferida ya no es alcanzable, la familia elige la mejor canasta disponible: consumir exactamente AR (solución de esquina sobre el límite de racionamiento) y destinar el gasto liberado a consumir MÁS de los otros bienes.\n\nEfecto sobre el bienestar: la familia queda en una CURVA DE INDIFERENCIA MÁS BAJA que la original: su bienestar CAE inequívocamente, porque se le impide alcanzar la combinación que prefería. La reasignación del gasto hacia otros bienes COMPENSA SOLO PARCIALMENTE la pérdida: los otros bienes no son sustitutos perfectos del agua. Nótese que en la nueva canasta la curva de indiferencia NO es tangente a la recta presupuestaria (la TMS difiere de la razón de precios): señal de la distorsión que introduce el racionamiento.\n\nDescripción del gráfico esperado: ejes con agua en el horizontal y otros bienes (o gasto en otros bienes) en el vertical; recta presupuestaria; curva de indiferencia U0 tangente en el óptimo libre A (con consumo de agua AL); línea vertical en AR < AL marcando el racionamiento; nueva canasta B sobre la recta presupuestaria en AR, sobre una curva de indiferencia U1 más baja (U1 < U0), sin tangencia en B.",
      criterios: [
        { texto: "Plantea el óptimo inicial del consumidor: tangencia entre recta presupuestaria y curva de indiferencia (TMS = razón de precios)", peso: 1 },
        { texto: "Modela el racionamiento como restricción de cantidad (línea vertical en AR) que elimina canastas alcanzables con la renta disponible", peso: 1 },
        { texto: "Concluye que la familia queda en una curva de indiferencia más baja: pérdida inequívoca de bienestar", peso: 1 },
        { texto: "Explica la reasignación del gasto a otros bienes como compensación parcial (no total) de la pérdida", peso: 1 },
        { texto: "Grafica correctamente: óptimo libre A con tangencia, límite AR, nueva canasta B en la esquina con U1 < U0", peso: 1 }
      ],
      erroresComunes: [
        "Desplazar la recta presupuestaria: el racionamiento no cambia precios ni ingreso; recorta el conjunto de canastas disponibles con una restricción de cantidad.",
        "Concluir que el bienestar no cambia porque la familia \"gasta lo mismo\": el bienestar depende de la curva de indiferencia alcanzada, y la canasta forzada está en una curva inferior.",
        "Dibujar la nueva canasta como tangencia: en el punto racionado la curva de indiferencia corta (no es tangente a) la recta presupuestaria."
      ]
    },

    {
      id: "eco-031",
      tema: "Teoría de la producción: isocuantas e isocostos, expansión de corto y largo plazo",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Las universidades chilenas tuvieron un exitoso proceso de matrícula en sus carreras diurnas y muchas están en su máxima capacidad de infraestructura en ese horario. Por esta razón, varias evalúan abrir una cantidad importante de cupos adicionales (por ejemplo, 30%). Utilizando el modelo de isocuantas e isocostos:\n\na) Explique y grafique la situación inicial, suponiendo que las universidades están minimizando sus costos. 2 puntos\n\nb) Explique y grafique lo que sucede si deciden abrir los cupos adicionales para el PRÓXIMO SEMESTRE, cuando la infraestructura (capital) no puede modificarse. Analice la diferencia respecto de (a) en costos totales, producción y contratación de factores. 3 puntos\n\nc) Compare la situación anterior con la posibilidad de aumentar los cupos en la misma proporción pero en un plazo de varios años. Explique y grafique. 3 puntos",
      respuestaModelo: "a) La universidad produce cupos/vacantes combinando dos factores: CAPITAL K (salas, infraestructura) y TRABAJO L (académicos, personal). La situación inicial de minimización de costos se representa con la TANGENCIA entre la isocuanta Q0 (nivel de producción actual) y la recta de isocosto más baja posible: en ese punto la tasa marginal de sustitución técnica iguala la razón de precios de los factores (TMST = w/r). La combinación óptima es (K0, L0) con costo total C0.\n\nDescripción del gráfico esperado: ejes K (vertical) y L (horizontal); isocuanta Q0 convexa; recta de isocosto tangente en el punto A = (L0, K0).\n\nb) CORTO PLAZO: el capital está FIJO en K0 (no se pueden construir salas para el próximo semestre). Para producir la isocuanta mayor Q1 (30% más cupos), la universidad solo puede expandirse contratando MÁS TRABAJO a lo largo de la línea horizontal K = K0 (más profesores, más secciones, horarios extendidos). El punto de corto plazo B = (L1cp, K0) está sobre la isocuanta Q1 pero NO es una tangencia: la combinación no minimiza costos. Como el trabajo enfrenta rendimientos marginales decrecientes con capital fijo, se requiere mucho más trabajo del que sería óptimo: el isocosto que pasa por B es MÁS ALTO que el de la expansión eficiente. Resultado: producción Q1, contratación intensiva de trabajo con capital fijo, y costo total mayor al mínimo posible para ese nivel de producción.\n\nDescripción del gráfico esperado: isocuanta Q1 por encima de Q0; línea horizontal en K = K0; punto B en la intersección de K0 con Q1, donde la isocuanta CORTA al isocosto (sin tangencia); el isocosto por B más alejado del origen que el isocosto de tangencia con Q1.\n\nc) LARGO PLAZO: todos los factores son variables: la universidad puede ampliar infraestructura Y contratar el trabajo adecuado. La expansión eficiente se da en la nueva TANGENCIA entre Q1 y un isocosto (punto C = (L1, K1), con más capital y más trabajo, sobre la SENDA DE EXPANSIÓN que une las tangencias). Comparación: para producir el mismo Q1, el costo total en C es MENOR que en B (el corto plazo es siempre al menos tan caro como el largo plazo, porque tiene una restricción adicional); la combinación de factores es más equilibrada (menos trabajo y más capital que en B). Por eso a la universidad le conviene planificar la expansión con tiempo.\n\nDescripción del gráfico esperado: mismo plano con la tangencia C sobre Q1, isocosto por C paralelo y más cercano al origen que el que pasa por B; senda de expansión conectando A y C.",
      criterios: [
        { texto: "a) Plantea y grafica la minimización de costos como tangencia isocuanta-isocosto (TMST = w/r) en el punto inicial", peso: 2 },
        { texto: "b) Explica que en el corto plazo el capital está fijo y la expansión se logra solo con más trabajo (punto sobre Q1 en la línea K = K0, sin tangencia)", peso: 2 },
        { texto: "b) Concluye que el costo total de corto plazo es mayor al mínimo (isocosto más alto, rendimientos decrecientes del trabajo con capital fijo)", peso: 1 },
        { texto: "c) Explica la expansión de largo plazo como nueva tangencia con más capital y trabajo (senda de expansión) y costo menor que en el corto plazo para el mismo Q1", peso: 2 },
        { texto: "Grafica correctamente los tres momentos: tangencia inicial A, punto de corto plazo B con K fijo y tangencia de largo plazo C, con isocuanta Q1 e isocostos coherentes", peso: 1 }
      ],
      erroresComunes: [
        "Dibujar el punto de corto plazo como tangencia: con capital fijo la isocuanta corta al isocosto; la tangencia solo se recupera en el largo plazo.",
        "Afirmar que producir Q1 cuesta lo mismo en el corto y largo plazo: el corto plazo agrega una restricción (K fijo), por lo que su costo es mayor o igual, nunca menor.",
        "Confundir isocuantas con curvas de indiferencia: las isocuantas representan niveles de PRODUCCIÓN con combinaciones de factores, no preferencias del consumidor."
      ]
    },

    {
      id: "eco-032",
      tema: "Monopolio: licitación de derechos exclusivos y pérdida social",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "El gobierno descubrió un nuevo yacimiento de litio y decidió otorgar derechos exclusivos de explotación por 30 años a la firma que ofrezca el mayor pago por este derecho. La empresa donde usted trabaja participará en la licitación. Estudios internos indican que la explotación del yacimiento generaría un beneficio igual a US$ 120 millones (valor presente neto de los flujos del proyecto, descontados a una tasa pertinente). El ganador solo podrá vender en el mercado nacional y este NO es un monopolio natural.\n\na) Si usted es el encargado de decidir el monto a ofertar, ¿qué monto ofertaría? ¿Por qué? 3 puntos\n\nb) Suponga que su firma gana la licitación y que el gobierno usa íntegramente lo recaudado para construir obras públicas. ¿A cuánto asciende la pérdida social causada por su monopolio? Identifique esta pérdida gráfica y conceptualmente. 4 puntos",
      respuestaModelo: "a) El monto máximo racional a ofertar es US$ 120 millones: pagar más que el VPN del proyecto garantiza pérdidas. Ofertar exactamente US$ 120 millones permitiría ganar la licitación, pero dejaría un beneficio neto esperado de CERO (todo el valor del proyecto se transferiría al Estado). Ofertar menos aumenta el beneficio neto en caso de ganar, pero reduce la probabilidad de ser la mejor oferta. Por lo tanto, la oferta óptima es un monto MENOR a US$ 120 millones, que balancee el mayor beneficio condicional a ganar contra la menor probabilidad de ganar (depende de la competencia esperada en la licitación: con más competidores, la oferta óptima se acerca a 120).\n\nb) Aunque el Estado use toda la recaudación en obras públicas, la licitación NO elimina la pérdida social del monopolio. El pago por la licencia es una TRANSFERENCIA: redistribuye rentas desde la empresa hacia la sociedad (vía bienes públicos), pero no cambia la conducta productiva del monopolista. Una vez adjudicado el derecho exclusivo, el monopolista maximiza donde IMg = CMg, produciendo una cantidad Qm MENOR y cobrando un precio Pm MAYOR que los de competencia perfecta (Qc, Pc, donde P = CMg). Las unidades entre Qm y Qc, que los consumidores valoran por sobre su costo de producción, dejan de producirse: esa es la PÉRDIDA IRRECUPERABLE DE EFICIENCIA (deadweight loss), el triángulo entre la curva de demanda y la de costo marginal entre Qm y Qc. Parte de ese triángulo es excedente que pierde el consumidor y parte es excedente que pierde el productor por la menor producción. En síntesis: la licitación transfiere la renta monopólica, pero la pérdida social del monopolio (el triángulo) subsiste íntegra, porque proviene de producir menos que el óptimo social, no de quién se queda con las utilidades.\n\nDescripción del gráfico esperado: demanda con pendiente negativa, ingreso marginal por debajo, costo marginal; cantidad de monopolio Qm donde IMg = CMg con precio Pm sobre la demanda; cantidad de competencia Qc donde la demanda corta al CMg con precio Pc; triángulo de pérdida social sombreado entre demanda y CMg, entre Qm y Qc.",
      criterios: [
        { texto: "a) Establece US$ 120 millones (el VPN) como cota superior de la oferta y explica que ofertar ese monto deja beneficio neto cero", peso: 1 },
        { texto: "a) Explica el trade-off de la oferta óptima: menor monto aumenta el beneficio si gana pero reduce la probabilidad de ganar (oferta menor a 120)", peso: 2 },
        { texto: "b) Explica que el pago de la licitación es una transferencia que no altera la conducta del monopolista ni elimina la ineficiencia", peso: 1 },
        { texto: "b) Identifica la pérdida social como el triángulo entre demanda y CMg entre Qm y Qc (unidades valoradas sobre su costo que dejan de producirse), distinguiendo la parte del consumidor y del productor", peso: 2 },
        { texto: "b) Grafica correctamente: demanda, IMg, CMg, Qm con Pm, Qc con Pc y el triángulo de pérdida social sombreado", peso: 1 }
      ],
      erroresComunes: [
        "Concluir que no hay pérdida social porque el Estado recauda y lo gasta en bienes públicos: la recaudación es una transferencia; la pérdida social proviene de la MENOR CANTIDAD producida y subsiste.",
        "Ofertar más de US$ 120 millones \"para asegurar el triunfo\": nunca es racional pagar por sobre el VPN del proyecto.",
        "Dibujar la pérdida social como toda el área de utilidades del monopolista: las utilidades son transferencia desde los consumidores; la pérdida social es solo el triángulo entre Qm y Qc."
      ]
    },

    {
      id: "eco-033",
      tema: "Riesgo país y deuda pública: inversión, crecimiento y cuenta corriente",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Una agencia clasificadora de riesgo rebajó la calificación de la deuda soberana de Chile, elevando el riesgo país, en un contexto en que la deuda pública bruta ha seguido creciendo por la emisión sostenida de bonos para financiar gasto corriente.\n\na) Analice cómo el mayor riesgo país puede afectar a la inversión, al crecimiento económico y al empleo. Apoye su respuesta en la ecuación de arbitraje de tasas para capitales especulativos. No es necesario graficar. 4 puntos\n\nb) Explique cómo el aumento sostenido de la deuda pública afecta al ahorro nacional y al saldo de la balanza en cuenta corriente. Fundamente con las identidades contables pertinentes. No es necesario graficar. 3 puntos",
      respuestaModelo: "a) El riesgo país mide la probabilidad percibida de que una economía incumpla sus obligaciones financieras. Su aumento encarece el financiamiento externo del país: la ecuación de arbitraje de tasas para capitales especulativos es r = r*(1 + ρ)(e(t+1)/e(t)), donde r es la tasa doméstica, r* la tasa internacional, ρ el riesgo país y e(t+1)/e(t) el riesgo cambiario. Un aumento de ρ ELEVA la tasa de interés doméstica exigida por los inversionistas. La mayor tasa reduce el VALOR PRESENTE NETO de los proyectos, contrayendo la INVERSIÓN productiva. Además, la mayor incertidumbre provoca SALIDA de capitales (productivos y especulativos). Con menor inversión, se acumula menos capital: el CRECIMIENTO económico se reduce y, vía la identidad PIB = C + I + G + X - M, la menor demanda de inversión también contrae la actividad y la generación de EMPLEO.\n\nb) El ahorro nacional se descompone como St = Sp + (T - G) + Xn (o simplemente S = Sp + Sg). La emisión sostenida de deuda para financiar gasto corriente refleja un DÉFICIT FISCAL creciente: (T - G) cae, es decir, hay DESAHORRO público que reduce el AHORRO NACIONAL. Además, la mayor deuda obliga a pagar más intereses (servicio de la deuda), lo que presiona aún más el gasto y provoca salida de divisas.\n\nPara la cuenta corriente se usa la identidad (X - M + TR) = (S - I) + (T - G): el deterioro del ahorro público (T - G más negativo), sin una compensación equivalente del ahorro privado o una caída de la inversión, reduce el lado derecho de la identidad, por lo que la balanza en CUENTA CORRIENTE SE DETERIORA (mayor déficit externo). Intuición: el exceso de gasto interno sobre el ingreso debe financiarse con ahorro externo, es decir, endeudándose con el resto del mundo; es la lógica de los déficits gemelos.",
      criterios: [
        { texto: "a) Explica que el mayor riesgo país (ρ) eleva la tasa de interés doméstica, apoyándose en la ecuación de arbitraje r = r*(1+ρ)(e(t+1)/e(t)) o en el encarecimiento del crédito externo", peso: 2 },
        { texto: "a) Concluye la cadena completa: mayor tasa reduce el VPN y la inversión (con salida de capitales), reduciendo el crecimiento y el empleo", peso: 2 },
        { texto: "b) Usa la identidad del ahorro nacional (St = Sp + (T - G) + Xn) para mostrar que el déficit fiscal por mayor deuda reduce el ahorro nacional", peso: 1 },
        { texto: "b) Usa la identidad (X - M + TR) = (S - I) + (T - G) para concluir el deterioro de la balanza en cuenta corriente y explica la intuición (exceso de gasto financiado con ahorro externo)", peso: 2 }
      ],
      erroresComunes: [
        "Afirmar que el mayor riesgo país baja la tasa de interés doméstica: los inversionistas exigen un PREMIO por riesgo, por lo que la tasa exigida sube.",
        "Confundir riesgo país con tipo de cambio: son variables distintas en la ecuación de arbitraje (ρ es el premio por riesgo de incumplimiento; e(t+1)/e(t) es el riesgo cambiario).",
        "Concluir que la mayor deuda pública mejora la cuenta corriente: el desahorro público deteriora el saldo externo (déficits gemelos)."
      ]
    },

    {
      id: "eco-034",
      tema: "Subsidios: efectos en el equilibrio y en el bienestar social",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "El gobierno está trabajando en un proyecto de subsidio tributario para la adquisición de viviendas nuevas, donde los compradores verán un complemento a su ingreso equivalente a dos o tres dividendos anuales.\n\na) Explique y grafique los efectos de este subsidio en el equilibrio del mercado de viviendas nuevas: precio pagado por el comprador, precio recibido por la inmobiliaria y cantidad transada. 3 puntos\n\nb) Grafique los cambios en el bienestar de la sociedad (excedente del consumidor, excedente del productor, costo fiscal y efecto neto) y explique cada uno de ellos. 3 puntos",
      respuestaModelo: "a) Es un SUBSIDIO A LA DEMANDA: complementa el ingreso de los compradores, aumentando su disposición a pagar por vivienda. La DEMANDA se EXPANDE (D0 se desplaza a la derecha a D0 + s, verticalmente en el monto del subsidio por unidad). En el nuevo equilibrio: la CANTIDAD transada AUMENTA (Q0 a Q1); el precio que RECIBE el productor SUBE (Pp > P0) y el precio que efectivamente PAGA el consumidor (precio de mercado menos subsidio) BAJA (Pc < P0). La diferencia entre ambos precios es exactamente el subsidio unitario: Pp - Pc = s. El subsidio se reparte entre consumidores y productores según las elasticidades relativas: se beneficia más el lado más inelástico del mercado.\n\nDescripción del gráfico esperado: oferta con pendiente positiva y demanda desplazándose a la derecha (D0 a D1 = D0 + s); equilibrio inicial A (P0, Q0); nueva cantidad Q1 > Q0; sobre Q1 se identifican Pp (precio recibido por el productor, arriba, sobre la oferta) y Pc (precio pagado por el consumidor, abajo, sobre la demanda original), con la distancia vertical entre ambos igual al subsidio.\n\nb) Cambios en el bienestar: (1) el EXCEDENTE DEL CONSUMIDOR AUMENTA: compra más unidades y paga menos por cada una; (2) el EXCEDENTE DEL PRODUCTOR AUMENTA: vende más unidades y recibe más por cada una; (3) el GOBIERNO incurre en un COSTO FISCAL igual al subsidio por la cantidad final (rectángulo s x Q1, entre Pp y Pc hasta Q1); (4) el costo fiscal es MAYOR que la suma de las ganancias de consumidores y productores: queda un triángulo de PÉRDIDA SOCIAL entre la oferta y la demanda original, entre Q0 y Q1. Esta pérdida se produce porque el subsidio hace producir unidades \"artificialmente\": las unidades adicionales cuestan a la sociedad más de lo que los individuos las valoran, lo que se traduce en ineficiencia.\n\nDescripción del gráfico esperado: además de lo anterior, las áreas: ganancia de excedente del consumidor bajo la demanda original entre Pc y P0; ganancia de excedente del productor sobre la oferta entre P0 y Pp; rectángulo del costo fiscal entre Pc y Pp hasta Q1; y el triángulo de pérdida social con vértice en el equilibrio inicial A, apuntando hacia Q1.",
      criterios: [
        { texto: "a) Identifica el subsidio a la demanda como expansión de la demanda, con aumento de la cantidad transada", peso: 1 },
        { texto: "a) Distingue correctamente los dos precios: el productor recibe más y el consumidor paga menos, con diferencia igual al subsidio unitario", peso: 1 },
        { texto: "a) Grafica correctamente: demanda desplazada, Q1 > Q0, Pp y Pc identificados con la cuña del subsidio", peso: 1 },
        { texto: "b) Explica el aumento del excedente del consumidor y del productor, y el costo fiscal como s x Q1", peso: 1 },
        { texto: "b) Identifica el triángulo de pérdida social y explica su origen: unidades adicionales que cuestan más de lo que se valoran (sobreproducción)", peso: 2 }
      ],
      erroresComunes: [
        "Creer que el subsidio no tiene costo social porque \"todos ganan\": el costo fiscal excede las ganancias privadas y queda un triángulo de pérdida social por sobreproducción.",
        "Confundir el sentido del triángulo de pérdida: con subsidio la pérdida está a la DERECHA del equilibrio original (unidades de más); con impuesto está a la izquierda (unidades de menos).",
        "Señalar un solo precio de equilibrio: el subsidio abre una cuña, con precio al productor mayor y precio al consumidor menor."
      ]
    },

    {
      id: "eco-035",
      tema: "Modelo de Solow: aumento de la tasa de crecimiento de la población",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Según la información de los Censos de Población y Vivienda, la tasa de crecimiento anual promedio de la población de Chile aumentó desde 0,96% (período 2002-2012) a 1,10% (período 2012-2017), impulsada principalmente por la inmigración.\n\nUtilizando el modelo de crecimiento económico de Solow, analice y grafique los efectos del incremento en la tasa de crecimiento demográfico sobre el capital por trabajador, la inversión per cápita y el ingreso per cápita en el estado estacionario. 5 puntos",
      respuestaModelo: "En el modelo de Solow, el estado estacionario se determina donde la inversión por trabajador iguala a la inversión de reposición: s·f(k) = (δ + n)·k, donde k es el capital por trabajador, s la tasa de ahorro, δ la tasa de depreciación y n la tasa de crecimiento de la población.\n\nUn AUMENTO de la tasa de crecimiento demográfico (de n0 a n1) hace que la recta de inversión de reposición (δ + n)·k ROTE HACIA ARRIBA: ahora se requiere más inversión por trabajador solo para mantener constante el capital por trabajador, porque hay que equipar a más trabajadores nuevos cada período (además de reponer la depreciación). Con la misma curva de ahorro s·f(k), en el capital inicial la inversión efectiva resulta insuficiente para mantener k: el CAPITAL POR TRABAJADOR CAE hasta el nuevo estado estacionario k1 < k0 (el capital se \"diluye\" entre más trabajadores).\n\nConsecuencias en el nuevo estado estacionario: menor capital por trabajador implica menor producto por trabajador, es decir, el INGRESO PER CÁPITA CAE de (Y/L)0 a (Y/L)1; y la INVERSIÓN PER CÁPITA (s·f(k)) también es menor, pues se calcula sobre un ingreso per cápita más bajo. Matiz relevante: el PIB TOTAL de la economía crece más rápido (hay más trabajadores), pero el nivel de vida medido por el ingreso POR PERSONA es menor en el estado estacionario.\n\nDescripción del gráfico esperado: ejes con k = K/L en el horizontal e y = Y/L en el vertical; función de producción f(k); curva de ahorro s·f(k); recta de reposición rotando desde (δ + n0)·k hasta (δ + n1)·k (más empinada); estados estacionarios en las intersecciones con s·f(k): k1 < k0, con (Y/L)1 < (Y/L)0 señalados sobre f(k).",
      criterios: [
        { texto: "Plantea la condición de estado estacionario s·f(k) = (δ + n)k e identifica que el aumento de n empina/rota hacia arriba la recta de reposición", peso: 2 },
        { texto: "Concluye correctamente los tres efectos: cae el capital por trabajador, cae el ingreso per cápita y cae la inversión per cápita en el nuevo estado estacionario", peso: 2 },
        { texto: "Grafica correctamente el modelo de Solow con la recta (δ + n)k rotada hacia arriba y los dos estados estacionarios identificados (k1 < k0)", peso: 1 }
      ],
      erroresComunes: [
        "Desplazar la curva de ahorro s·f(k): el cambio demográfico afecta la recta de reposición (δ + n)k, no la tasa de ahorro.",
        "Confundir PIB total con PIB per cápita: con más población el PIB total puede crecer más rápido, pero el ingreso POR TRABAJADOR del estado estacionario es menor.",
        "Afirmar que el mayor crecimiento poblacional aumenta el capital por trabajador: ocurre lo contrario, el capital se diluye entre más trabajadores."
      ]
    },

    // ================= PRÁCTICA ADICIONAL: SUBTEMAS MENOS CUBIERTOS (20) =================

    // ----- FÁCIL (6) -----

    {
      id: "eco-036",
      tema: "Intercambio, ventaja comparativa y especialización",
      dificultad: "facil",
      enunciado: "a) Distinga ventaja absoluta de ventaja comparativa. 2 puntos\n\nb) Explique por qué dos personas (o países) pueden beneficiarse del intercambio aunque una de ellas sea más productiva en la producción de TODOS los bienes. Ilústrelo con un ejemplo numérico simple basado en costos de oportunidad. 3 puntos\n\nc) ¿Qué determina el rango dentro del cual debe ubicarse la relación de intercambio para que ambas partes ganen? 1 punto",
      respuestaModelo: "a) La ventaja ABSOLUTA se refiere a producir un bien usando menos recursos (o produciendo más con los mismos recursos) que otro productor: es una comparación de productividad. La ventaja COMPARATIVA se refiere a producir un bien con un MENOR COSTO DE OPORTUNIDAD que otro productor: es una comparación de lo que se sacrifica al producir. Una persona puede tener ventaja absoluta en todo, pero no puede tener ventaja comparativa en todo, porque el costo de oportunidad de un bien es el inverso del costo de oportunidad del otro.\n\nb) Ejemplo: con una jornada de trabajo, Ana produce 10 panes o 5 kilos de pescado, y Ben produce 4 panes o 4 kilos de pescado. Ana tiene ventaja ABSOLUTA en ambos bienes. Sin embargo, el costo de oportunidad de 1 kilo de pescado es 2 panes para Ana (10/5) y solo 1 pan para Ben (4/4): Ben tiene ventaja comparativa en pescado. A la inversa, el costo de oportunidad de 1 pan es 1/2 pescado para Ana y 1 pescado para Ben: Ana tiene ventaja comparativa en pan. Si cada uno se ESPECIALIZA en el bien en que tiene menor costo de oportunidad (Ana en pan, Ben en pescado) y luego intercambian, la producción total aumenta y ambos pueden consumir combinaciones que están FUERA de su frontera de posibilidades de producción individual. El intercambio es un juego de suma positiva.\n\nc) La relación de intercambio (el precio relativo) debe ubicarse ENTRE los costos de oportunidad de ambas partes. En el ejemplo, el precio del pescado debe estar entre 1 y 2 panes por kilo: sobre 1 (para que a Ben le convenga vender pescado en vez de producir su propio pan) y bajo 2 (para que a Ana le convenga comprar pescado en vez de producirlo). Dentro de ese rango, ambos mejoran respecto de la autarquía.",
      criterios: [
        { texto: "a) Distingue ventaja absoluta (menos recursos/mayor productividad) de ventaja comparativa (menor costo de oportunidad)", peso: 2 },
        { texto: "b) Explica las ganancias del comercio por especialización según el costo de oportunidad, con un ejemplo numérico correcto", peso: 2 },
        { texto: "c) Señala que la relación de intercambio debe ubicarse entre los costos de oportunidad de ambas partes", peso: 1 }
      ],
      erroresComunes: [
        "Confundir ventaja absoluta con comparativa: la especialización eficiente se rige por el COSTO DE OPORTUNIDAD (ventaja comparativa), no por quién produce más.",
        "Concluir que si una parte es más productiva en todo no hay ganancias del comercio: siempre existe ventaja comparativa mientras los costos de oportunidad difieran."
      ]
    },

    {
      id: "eco-037",
      tema: "Costos de producción: costo contable vs. económico, costos hundidos y curvas de costos",
      dificultad: "facil",
      enunciado: "a) Explique la diferencia entre costo contable y costo económico, incorporando el concepto de costo de oportunidad, y distinga beneficio contable de beneficio económico. 2 puntos\n\nb) Defina costo fijo, costo variable, costo marginal y costo medio, y explique por qué la curva de costo marginal corta a la de costo medio total en su punto mínimo. 3 puntos\n\nc) ¿Qué es un costo hundido (irrecuperable) y por qué NO debe influir en la decisión de producción? 1 punto",
      respuestaModelo: "a) El costo CONTABLE considera solo los desembolsos monetarios explícitos (pago a proveedores, remuneraciones, arriendos). El costo ECONÓMICO agrega, además, los costos IMPLÍCITOS o de oportunidad: el valor de la mejor alternativa sacrificada al usar recursos propios (por ejemplo, el sueldo que el dueño deja de ganar en otro empleo, o el retorno que dejaría su capital en otro uso). Por eso el beneficio ECONÓMICO (ingresos menos costos explícitos e implícitos) es MENOR que el beneficio CONTABLE (ingresos menos costos explícitos). Un beneficio contable positivo puede convivir con un beneficio económico nulo o negativo.\n\nb) El costo FIJO (CF) no varía con la cantidad producida (arriendo, seguros); el costo VARIABLE (CV) crece con la producción (insumos, mano de obra directa). El costo MARGINAL (CMg) es el aumento del costo total al producir una unidad adicional (CMg = ΔCT/ΔQ). El costo MEDIO total (CMe) es el costo total por unidad (CMe = CT/Q). La curva de CMg corta a la de CMe en su MÍNIMO por una relación aritmética entre marginal y promedio: mientras el CMg está por DEBAJO del CMe, el promedio cae; cuando el CMg está por ENCIMA del CMe, el promedio sube; por lo tanto el CMe deja de caer y empieza a subir justo cuando CMg = CMe, es decir, en el mínimo del CMe.\n\nDescripción del gráfico esperado: ejes costo (vertical) y cantidad Q (horizontal); curvas de CMe y CMg con forma de U; la curva de CMg cortando a la de CMe exactamente en el punto mínimo del CMe (y también al mínimo del costo variable medio, si se dibuja).\n\nc) Un costo HUNDIDO es un desembolso ya realizado que NO puede recuperarse, ocurra lo que ocurra con la decisión (por ejemplo, publicidad ya pagada o una inversión sin valor de reventa). No debe influir en la decisión de producir porque es el mismo cualquiera sea la elección: las decisiones deben basarse solo en costos y beneficios que cambian con la decisión (costos evitables o marginales), no en costos ya incurridos e irreversibles.",
      criterios: [
        { texto: "a) Distingue costo contable (explícito) de costo económico (explícito + implícito/oportunidad) y beneficio contable de beneficio económico", peso: 2 },
        { texto: "b) Define CF, CV, CMg y CMe y explica correctamente por qué el CMg corta al CMe en su mínimo (lógica marginal-promedio)", peso: 2 },
        { texto: "b) Grafica correctamente las curvas de CMe y CMg en forma de U con la intersección en el mínimo del CMe", peso: 1 },
        { texto: "c) Define costo hundido e indica que no debe influir en la decisión por ser irreversible/inevitable", peso: 1 }
      ],
      erroresComunes: [
        "Ignorar los costos implícitos: el costo económico incluye el costo de oportunidad de los recursos propios, no solo los desembolsos monetarios.",
        "Afirmar que el CMg corta al CMe en el mínimo del CMg: lo corta en el mínimo del CMe (y del CVMe), no en el suyo propio.",
        "Considerar los costos hundidos al decidir (falacia del costo hundido): solo importan los costos evitables a futuro."
      ]
    },

    {
      id: "eco-038",
      tema: "Desempleo: friccional, estructural, cíclico y tasa natural",
      dificultad: "facil",
      enunciado: "a) Defina la tasa natural de desempleo y distíngala del desempleo cíclico. 2 puntos\n\nb) Explique el desempleo friccional y el desempleo estructural, señalando una causa de cada uno. 2 puntos\n\nc) Mencione y explique brevemente dos factores institucionales que pueden elevar la tasa natural de desempleo. 2 puntos",
      respuestaModelo: "a) La TASA NATURAL de desempleo es el nivel de desempleo en torno al cual fluctúa la economía en el largo plazo, aun cuando esté en pleno empleo: corresponde al desempleo que persiste incluso sin brechas de actividad, y se compone del desempleo friccional más el estructural. El desempleo CÍCLICO, en cambio, es la desviación del desempleo respecto de su tasa natural asociada a las fluctuaciones del ciclo económico: es POSITIVO en las recesiones (cae la actividad y aumenta el desempleo por sobre el natural) y NEGATIVO o nulo en las expansiones. La política macroeconómica de demanda puede afectar el desempleo cíclico, pero no la tasa natural.\n\nb) El desempleo FRICCIONAL surge del tiempo que toma emparejar trabajadores con empleos: aun habiendo vacantes, la búsqueda y el proceso de selección toman tiempo. Causa: rotación laboral normal, entrada de nuevos trabajadores al mercado, información imperfecta sobre las vacantes. El desempleo ESTRUCTURAL surge de un desajuste persistente entre la oferta y la demanda de trabajo en ciertos sectores o regiones, o de salarios rígidos por encima del equilibrio. Causa: desajuste de habilidades (skills mismatch) o rigideces salariales (salario mínimo, sindicatos, salarios de eficiencia) que impiden que el salario baje hasta equilibrar el mercado.\n\nc) Factores institucionales que elevan la tasa natural (bastan dos): (1) Seguro de cesantía generoso: al reducir el costo de estar desempleado, alarga la búsqueda de empleo y eleva el desempleo friccional. (2) Salario mínimo por sobre el equilibrio en segmentos de baja productividad: genera desempleo estructural (excedente de oferta de trabajo). (3) Sindicatos y negociación colectiva: pueden fijar salarios sobre el de equilibrio, reduciendo el empleo en el sector sindicalizado. (4) Salarios de eficiencia: las empresas pagan sobre el equilibrio para elevar la productividad y retener talento, lo que también deja desempleo.",
      criterios: [
        { texto: "a) Define la tasa natural (desempleo de largo plazo, friccional + estructural) y la distingue del cíclico (desviación asociada al ciclo)", peso: 2 },
        { texto: "b) Explica el desempleo friccional y el estructural con una causa correcta de cada uno", peso: 2 },
        { texto: "c) Menciona y explica dos factores institucionales que elevan la tasa natural (seguro de cesantía, salario mínimo, sindicatos, salarios de eficiencia)", peso: 2 }
      ],
      erroresComunes: [
        "Confundir desempleo friccional con estructural: el friccional es transitorio y de emparejamiento; el estructural es persistente y de desajuste o rigidez salarial.",
        "Creer que la política monetaria o fiscal puede reducir permanentemente la tasa natural: solo afecta el componente cíclico del desempleo."
      ]
    },

    {
      id: "eco-039",
      tema: "Teoría cuantitativa del dinero: ecuación de cambio, neutralidad y dicotomía clásica",
      dificultad: "facil",
      enunciado: "a) Escriba la ecuación cuantitativa del dinero (ecuación de cambio) y explique el significado de cada término. 2 puntos\n\nb) Bajo los supuestos clásicos (velocidad estable y producto determinado por factores reales), ¿qué predice la teoría sobre la relación entre el crecimiento del dinero y la inflación? 2 puntos\n\nc) Explique los conceptos de neutralidad del dinero y dicotomía clásica en el largo plazo. 2 puntos",
      respuestaModelo: "a) La ecuación cuantitativa o ecuación de cambio es: M · V = P · Y, donde M es la cantidad de dinero, V la velocidad de circulación del dinero (número de veces que una unidad monetaria cambia de manos en el período), P el nivel de precios e Y el producto real (PIB real). El lado izquierdo mide el flujo de dinero gastado; el derecho, el valor nominal de las transacciones (PIB nominal).\n\nb) En tasas de crecimiento aproximadas: gM + gV = π + gY, donde π es la inflación. Bajo los supuestos clásicos, la velocidad V es estable (gV ≈ 0) y el producto Y está determinado por factores reales (dotación de factores y tecnología), no por el dinero. Entonces π ≈ gM − gY: la inflación es, en esencia, un FENÓMENO MONETARIO. Si el dinero crece más rápido que la capacidad productiva, el exceso se traduce en inflación. Un aumento sostenido de la cantidad de dinero genera, en el largo plazo, un aumento proporcional del nivel de precios.\n\nc) La NEUTRALIDAD DEL DINERO señala que, en el largo plazo, los cambios en la cantidad de dinero afectan únicamente a las variables NOMINALES (nivel de precios, salarios nominales, PIB nominal) y no a las variables REALES (PIB real, empleo, salarios reales, tasa de interés real). La DICOTOMÍA CLÁSICA es la separación teórica entre variables reales y nominales: las variables reales se determinan en el sector real de la economía y las nominales dependen de la oferta monetaria. En conjunto, implican que imprimir dinero, en el largo plazo, solo eleva los precios sin mejorar el bienestar material.",
      criterios: [
        { texto: "a) Escribe correctamente M·V = P·Y y explica el significado de cada término", peso: 2 },
        { texto: "b) Concluye que, con V y Y dados, la inflación es un fenómeno monetario (π ≈ gM − gY)", peso: 2 },
        { texto: "c) Explica correctamente la neutralidad del dinero y la dicotomía clásica en el largo plazo", peso: 2 }
      ],
      erroresComunes: [
        "Afirmar que emitir dinero eleva permanentemente el PIB real: en el largo plazo el dinero es neutral y solo afecta el nivel de precios.",
        "Confundir la velocidad de circulación con la tasa de interés: V mide cuántas veces circula el dinero, no su costo."
      ]
    },

    {
      id: "eco-040",
      tema: "Análisis de bienestar: excedente del consumidor y del productor",
      dificultad: "facil",
      enunciado: "a) Defina el excedente del consumidor y el excedente del productor, relacionándolos con la disposición a pagar y la disposición a vender. 3 puntos\n\nb) Explique por qué el equilibrio de un mercado competitivo maximiza el excedente total (eficiencia asignativa). 2 puntos\n\nc) Grafique ambos excedentes en un mercado competitivo en equilibrio. 1 punto",
      respuestaModelo: "a) El EXCEDENTE DEL CONSUMIDOR es la diferencia entre la disposición a pagar por un bien (el máximo que el consumidor estaría dispuesto a pagar, reflejada por la altura de la curva de demanda) y el precio que efectivamente paga. Sumado sobre todas las unidades, corresponde al área bajo la curva de demanda y por sobre el precio de mercado: mide el beneficio neto que los consumidores obtienen de participar en el mercado. El EXCEDENTE DEL PRODUCTOR es la diferencia entre el precio que recibe el productor y su disposición a vender (el costo de producir la unidad, reflejado por la altura de la curva de oferta). Sumado, corresponde al área sobre la curva de oferta y bajo el precio de mercado: mide el beneficio neto de los productores.\n\nb) En el equilibrio competitivo se transan todas las unidades para las cuales la disposición a pagar del consumidor es mayor o igual al costo de producción (demanda por sobre oferta), y ninguna en que el costo supere la valoración. Por eso el EXCEDENTE TOTAL (consumidor + productor) es MÁXIMO en la cantidad de equilibrio: producir menos dejaría fuera transacciones mutuamente beneficiosas, y producir más agregaría unidades cuyo costo supera su valoración (reduciendo el excedente). El equilibrio competitivo es, en ausencia de fallas de mercado, eficiente en el sentido de Pareto.\n\nDescripción del gráfico esperado: ejes P y Q; curva de demanda con pendiente negativa y de oferta con pendiente positiva que se cruzan en el equilibrio (P*, Q*); el triángulo sobre P* y bajo la demanda rotulado como excedente del consumidor; el triángulo bajo P* y sobre la oferta rotulado como excedente del productor.",
      criterios: [
        { texto: "a) Define el excedente del consumidor (disposición a pagar menos precio) y del productor (precio menos disposición a vender/costo)", peso: 3 },
        { texto: "b) Explica que el equilibrio competitivo maximiza el excedente total (se realizan todas las transacciones eficientes y ninguna ineficiente)", peso: 2 },
        { texto: "c) Grafica correctamente ambos excedentes como áreas respecto del precio de equilibrio", peso: 1 }
      ],
      erroresComunes: [
        "Invertir las áreas: el excedente del consumidor está SOBRE el precio y bajo la demanda; el del productor, bajo el precio y sobre la oferta.",
        "Afirmar que producir más que la cantidad de equilibrio aumenta el bienestar: las unidades adicionales cuestan más de lo que se valoran y reducen el excedente total."
      ]
    },

    {
      id: "eco-041",
      tema: "Economía abierta: tipo de cambio real y nominal y paridad del poder de compra",
      dificultad: "facil",
      enunciado: "a) Distinga el tipo de cambio nominal del tipo de cambio real y escriba la fórmula que los relaciona. 2 puntos\n\nb) Explique la teoría de la paridad del poder de compra (PPP) y la 'ley de un solo precio' que la sustenta. 2 puntos\n\nc) Si Chile presentara una inflación persistentemente mayor que la de Estados Unidos, ¿qué predice la PPP para el tipo de cambio nominal peso/dólar en el largo plazo? Explique. 2 puntos",
      respuestaModelo: "a) El TIPO DE CAMBIO NOMINAL (e) es el precio de una moneda en términos de otra (por ejemplo, pesos por dólar). El TIPO DE CAMBIO REAL (q) mide el precio relativo de los bienes de un país respecto de los de otro, es decir, cuántos bienes extranjeros se obtienen por un bien nacional; expresa la competitividad de los productos locales. La relación es: q = e · (P* / P), donde e es el tipo de cambio nominal (pesos por dólar), P* el nivel de precios extranjero y P el nivel de precios nacional. El tipo de cambio real corrige el nominal por la diferencia de precios entre países.\n\nb) La LEY DE UN SOLO PRECIO establece que un bien idéntico, comerciable y sin costos de transporte ni barreras, debe tener el mismo precio en todos los países cuando se expresa en una moneda común; si no fuera así, el arbitraje (comprar barato donde está barato y vender caro) igualaría los precios. La PARIDAD DEL PODER DE COMPRA (PPP) extiende esta idea al nivel general de precios: el tipo de cambio nominal tiende a ajustarse de modo que una misma canasta de bienes cueste lo mismo en ambos países medida en una moneda común, es decir, que el tipo de cambio real tienda a ser constante en el largo plazo.\n\nc) Si Chile tiene mayor inflación que EE.UU. (P sube más rápido que P*), para que el tipo de cambio real q se mantenga constante (PPP), el tipo de cambio nominal e debe AUMENTAR: es decir, el peso debe DEPRECIARSE frente al dólar. Intuitivamente, si los precios chilenos suben más rápido, el peso pierde poder de compra relativo y se necesita más pesos para comprar un dólar. La PPP predice que el diferencial de inflación se traduce, en el largo plazo, en una depreciación nominal de la moneda del país con mayor inflación.",
      criterios: [
        { texto: "a) Distingue tipo de cambio nominal de real y escribe la fórmula q = e·(P*/P)", peso: 2 },
        { texto: "b) Explica la PPP y la ley de un solo precio (arbitraje que iguala precios en moneda común)", peso: 2 },
        { texto: "c) Concluye que mayor inflación local implica depreciación nominal del peso en el largo plazo, explicando la lógica", peso: 2 }
      ],
      erroresComunes: [
        "Confundir tipo de cambio real con nominal: el real incorpora los niveles de precios de ambos países.",
        "Concluir que mayor inflación local aprecia la moneda: la PPP predice lo contrario, una depreciación nominal que compensa el diferencial de inflación."
      ]
    },

    // ----- MEDIA (8) -----

    {
      id: "eco-042",
      tema: "Teoría del consumidor: efecto renta y efecto sustitución ante una baja de precio",
      dificultad: "media",
      enunciado: "El precio del transporte público (bien X) baja de manera significativa, mientras permanecen constantes el precio de los demás bienes y el ingreso del consumidor. Suponga que X es un bien normal.\n\nUtilizando curvas de indiferencia y restricción presupuestaria, descomponga el efecto total de la baja de precio sobre la cantidad demandada de X en efecto sustitución y efecto ingreso. Explique y grafique. Señale, además, cómo cambiaría el análisis si X fuera un bien inferior o un bien Giffen. 6 puntos",
      respuestaModelo: "La baja del precio de X ROTA la restricción presupuestaria hacia afuera sobre el eje de X (el intercepto en X aumenta porque, con el mismo ingreso, se pueden comprar más unidades de X; el intercepto del otro bien no cambia). El consumidor pasa de un óptimo inicial A (tangencia con la curva de indiferencia U0) a un nuevo óptimo C (tangencia con una curva de indiferencia más alta U1). El movimiento total de A a C se descompone en dos:\n\n(1) EFECTO SUSTITUCIÓN: como X se volvió relativamente más barato, el consumidor sustituye consumo hacia X, manteniéndose en la MISMA curva de indiferencia U0. Se representa con una recta presupuestaria auxiliar, paralela a la nueva (nueva razón de precios) pero tangente a U0, definiendo un punto intermedio B. El movimiento de A a B es el efecto sustitución: SIEMPRE aumenta la cantidad del bien que se abarató (es negativo respecto del precio, sin excepción).\n\n(2) EFECTO INGRESO: la baja de precio aumenta el poder adquisitivo real del consumidor (puede alcanzar una curva de indiferencia más alta). El movimiento de B a C es el efecto ingreso. Como X es un bien NORMAL, el mayor poder adquisitivo aumenta el consumo de X: el efecto ingreso también es positivo.\n\nAmbos efectos operan en el MISMO sentido, por lo que la cantidad demandada de X aumenta inequívocamente: la curva de demanda tiene pendiente negativa.\n\nSi X fuera un bien INFERIOR, el efecto ingreso sería NEGATIVO (mayor poder adquisitivo reduce el consumo de X), contrarrestando parcialmente al efecto sustitución; la cantidad total igual aumenta mientras el efecto sustitución domine. Si X fuera un bien GIFFEN (inferior extremo), el efecto ingreso negativo SUPERARÍA al de sustitución y la cantidad demandada CAERÍA ante la baja de precio: la demanda tendría pendiente positiva (excepción a la ley de la demanda).\n\nDescripción del gráfico esperado: ejes con X (horizontal) y el resto de los bienes (vertical); restricción inicial y óptimo A sobre U0; restricción rotada por la baja de Px con óptimo final C sobre U1; recta auxiliar paralela a la nueva restricción, tangente a U0, con el punto B; el tramo A→B rotulado efecto sustitución y B→C efecto ingreso.",
      criterios: [
        { texto: "Identifica que la baja de Px rota la restricción presupuestaria y lleva a una curva de indiferencia más alta", peso: 1 },
        { texto: "Explica el efecto sustitución con la recta auxiliar tangente a U0 (siempre aumenta el consumo del bien abaratado)", peso: 2 },
        { texto: "Explica el efecto ingreso y concluye que, por ser X normal, opera en el mismo sentido (aumenta X)", peso: 2 },
        { texto: "Grafica correctamente la descomposición (puntos A, B y C con la recta auxiliar) y menciona el caso de bien inferior/Giffen", peso: 1 }
      ],
      erroresComunes: [
        "Confundir la dirección de los efectos: el efecto sustitución del bien que se abarata SIEMPRE aumenta su consumo; solo el efecto ingreso puede tener signo distinto según el tipo de bien.",
        "Desplazar la restricción de forma paralela en vez de rotarla: una baja de precio de un solo bien cambia la pendiente (rota), no traslada paralelamente la recta.",
        "Afirmar que un bien inferior siempre viola la ley de la demanda: solo el caso Giffen (efecto ingreso que domina al de sustitución) genera demanda de pendiente positiva."
      ]
    },

    {
      id: "eco-043",
      tema: "La producción con un factor variable: producto medio, marginal y rendimientos decrecientes",
      dificultad: "media",
      enunciado: "Un packing de fruta cuenta con una cantidad fija de maquinaria (capital) y va agregando trabajadores a su línea de empaque para aumentar la producción de cajas por jornada.\n\na) Defina producto total, producto medio del trabajo y producto marginal del trabajo. 2 puntos\n\nb) Enuncie la ley de los rendimientos marginales decrecientes y explique su causa cuando el capital está fijo. 2 puntos\n\nc) Explique y grafique la relación entre la curva de producto marginal y la de producto medio del trabajo (indicando dónde se cortan). 2 puntos",
      respuestaModelo: "a) El PRODUCTO TOTAL (PT) es la cantidad total producida (cajas por jornada) para cada nivel de trabajo empleado. El PRODUCTO MEDIO del trabajo (PMeL) es la producción por trabajador: PMeL = PT / L. El PRODUCTO MARGINAL del trabajo (PMgL) es el aumento de la producción al agregar un trabajador adicional: PMgL = ΔPT / ΔL.\n\nb) La LEY DE LOS RENDIMIENTOS MARGINALES DECRECIENTES establece que, manteniendo fijos los demás factores (en este caso el capital), a medida que se agregan unidades adicionales de un factor variable (el trabajo), llega un punto a partir del cual el producto marginal de ese factor comienza a DISMINUIR. Causa con capital fijo: los primeros trabajadores aprovechan bien la maquinaria disponible y pueden aumentar el rendimiento (incluso con rendimientos crecientes por especialización), pero como la maquinaria es limitada, cada trabajador adicional dispone de menos capital para trabajar (congestión, esperas, menor equipo por persona), por lo que su aporte marginal a la producción va cayendo.\n\nc) Relación entre PMgL y PMeL: mientras el producto marginal está POR ENCIMA del producto medio, este último AUMENTA (cada trabajador adicional aporta más que el promedio, subiéndolo); cuando el producto marginal está POR DEBAJO del producto medio, este DISMINUYE. Por lo tanto, la curva de producto marginal corta a la de producto medio exactamente en el MÁXIMO del producto medio. Es la misma lógica marginal-promedio que relaciona el costo marginal con el costo medio.\n\nDescripción del gráfico esperado: ejes con producto (vertical) y cantidad de trabajo L (horizontal); curva de PMgL que primero sube y luego baja; curva de PMeL con forma de joroba; la curva de PMgL cortando a la de PMeL en el punto máximo del PMeL (con el PMgL por encima del PMeL a su izquierda y por debajo a su derecha).",
      criterios: [
        { texto: "a) Define producto total, producto medio (PT/L) y producto marginal (ΔPT/ΔL) del trabajo", peso: 2 },
        { texto: "b) Enuncia la ley de rendimientos marginales decrecientes y explica su causa con capital fijo (menos capital por trabajador)", peso: 2 },
        { texto: "c) Explica que el PMgL corta al PMeL en el máximo del PMeL (lógica marginal-promedio)", peso: 1 },
        { texto: "c) Grafica correctamente las curvas de PMgL y PMeL con la intersección en el máximo del PMeL", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que el producto marginal decrece desde el primer trabajador: puede haber un tramo inicial creciente; la ley opera 'a partir de cierto punto'.",
        "Confundir producto marginal decreciente con producto total decreciente: el PMg puede caer (rendimientos decrecientes) mientras el PT sigue aumentando (mientras el PMg sea positivo).",
        "Situar el corte de PMg y PMe en el máximo del PMg: se cortan en el máximo del PMe."
      ]
    },

    {
      id: "eco-044",
      tema: "Controles de precio: precio máximo en el mercado de arriendos",
      dificultad: "media",
      enunciado: "Ante el fuerte aumento del valor de los arriendos, un grupo de parlamentarios propone fijar por ley un arriendo máximo por metro cuadrado, situado claramente por DEBAJO del arriendo de equilibrio del mercado.\n\nUtilizando el modelo de oferta y demanda, explique y grafique los efectos de esta medida sobre la cantidad de viviendas en arriendo, el exceso de demanda y la calidad de las viviendas, distinguiendo el corto y el largo plazo. 6 puntos",
      respuestaModelo: "Un arriendo máximo fijado por debajo del precio de equilibrio es un PRECIO MÁXIMO (techo) que constituye una restricción activa. Al precio tope Pmax < P*, la cantidad demandada de viviendas en arriendo AUMENTA (más personas quieren arrendar a ese precio bajo) y la cantidad ofrecida DISMINUYE (los propietarios ofrecen menos unidades): se genera un EXCESO DE DEMANDA, es decir, ESCASEZ de viviendas en arriendo. Como el precio no puede subir para racionar, el racionamiento se produce por mecanismos no monetarios: listas de espera, discriminación de arrendatarios, exigencias de garantías, 'pagos por fuera' o mercado negro.\n\nCorto plazo: la oferta de viviendas es relativamente INELÁSTICA (el stock existente no cambia mucho de inmediato), por lo que la caída de la cantidad ofrecida es moderada y la escasez, aunque existe, es acotada.\n\nLargo plazo: la oferta es mucho más ELÁSTICA. Con arriendos topados bajo el costo, los propietarios retiran viviendas del mercado de arriendo (las venden, las dejan vacías o las destinan a otros usos) y, sobre todo, se DESINCENTIVA la construcción de nuevas viviendas para arriendo y el mantenimiento de las existentes. En consecuencia: el stock de viviendas en arriendo se REDUCE aún más, el exceso de demanda se AGRAVA y la CALIDAD de las viviendas se DETERIORA (menos inversión en mantención). La política, pensada para proteger a los arrendatarios, termina reduciendo la disponibilidad y la calidad de la vivienda en arriendo y beneficia solo a quienes logran conservar un contrato.\n\nDescripción del gráfico esperado: ejes P (arriendo) y Q (viviendas en arriendo); demanda con pendiente negativa y oferta con pendiente positiva que se cruzan en (P*, Q*); línea horizontal de precio tope en Pmax por debajo de P*; a ese precio se identifican Qs (sobre la oferta, menor) y Qd (sobre la demanda, mayor), con el segmento entre ambas rotulado como exceso de demanda o escasez. Puede dibujarse una oferta más plana (elástica) para el largo plazo, mostrando una caída mayor de Qs.",
      criterios: [
        { texto: "Identifica el arriendo máximo como precio máximo bajo el equilibrio (restricción activa) que genera exceso de demanda / escasez", peso: 2 },
        { texto: "Explica el racionamiento no monetario (listas de espera, discriminación, mercado negro)", peso: 1 },
        { texto: "Distingue corto y largo plazo: en el largo plazo la oferta es más elástica, cae el stock y se deteriora la calidad, agravando la escasez", peso: 2 },
        { texto: "Grafica correctamente: precio tope bajo P*, Qs < Qd y la brecha de exceso de demanda identificada", peso: 1 }
      ],
      erroresComunes: [
        "Dibujar el precio máximo por encima del equilibrio: un techo de precios solo tiene efecto cuando queda por debajo del precio de equilibrio.",
        "Concluir que el control de arriendos aumenta la cantidad de viviendas disponibles: reduce la cantidad ofrecida y, en el largo plazo, el stock y la calidad.",
        "Ignorar la diferencia de elasticidad entre corto y largo plazo: los efectos negativos sobre la oferta se agudizan en el largo plazo."
      ]
    },

    {
      id: "eco-045",
      tema: "Discriminación de precios de tercer grado: segmentación por elasticidad",
      dificultad: "media",
      enunciado: "Una sala de cine cobra $3.500 por la entrada a estudiantes y adultos mayores, y $6.000 al público general, por exactamente la misma función.\n\na) Identifique el tipo de discriminación de precios y las condiciones que la hacen posible. 2 puntos\n\nb) Explique en qué segmento se cobra el precio más alto y por qué, utilizando la elasticidad-precio de la demanda de cada grupo. 2 puntos\n\nc) Explique y grafique cómo la empresa determina el precio y la cantidad en cada submercado. 2 puntos",
      respuestaModelo: "a) Corresponde a una DISCRIMINACIÓN DE PRECIOS DE TERCER GRADO: la empresa cobra precios distintos a GRUPOS de consumidores identificables por una característica observable (ser estudiante o adulto mayor versus público general), vendiendo el mismo servicio. Condiciones que la hacen posible: (1) la empresa debe tener PODER DE MERCADO (capacidad de fijar precios, P > CMg); (2) los segmentos deben ser IDENTIFICABLES mediante una característica observable y verificable (carné estudiantil, cédula de identidad), y deben tener DISTINTA elasticidad-precio de la demanda; (3) debe poder impedirse el ARBITRAJE o reventa entre grupos (un estudiante no puede comprar entradas baratas y revenderlas al público general; por eso se exige identificación al ingresar).\n\nb) El precio más alto se cobra al segmento con demanda MÁS INELÁSTICA, y el más bajo al de demanda más elástica. El público general tiene una demanda relativamente más inelástica (menos sensible al precio), mientras que estudiantes y adultos mayores, con menor ingreso disponible, tienen una demanda más ELÁSTICA (más sensible al precio: si el precio fuera alto, muchos no irían). La regla de fijación de precios con poder de mercado es P·(1 − 1/|ε|) = CMg: despejando, cuanto MENOR es la elasticidad |ε|, MAYOR es el precio óptimo. Por eso conviene cobrar más a quien es menos sensible al precio (público general) y menos a quien es más sensible (estudiantes y adultos mayores), capturando así más excedente de cada grupo.\n\nc) La empresa trata cada segmento como un mercado separado y aplica en cada uno la regla del monopolista: iguala el INGRESO MARGINAL de ese submercado con el COSTO MARGINAL común (IMg1 = CMg y IMg2 = CMg). Así obtiene una cantidad y un precio para cada grupo, resultando un precio mayor en el mercado inelástico y menor en el elástico.\n\nDescripción del gráfico esperado: dos paneles, uno por submercado, con el mismo CMg (línea horizontal si el costo marginal es constante). En cada panel: demanda del grupo, su ingreso marginal por debajo, y la cantidad donde IMg = CMg con el precio leído sobre la demanda. El panel del público general (demanda más inelástica/empinada) muestra un precio mayor que el del panel de estudiantes (demanda más elástica/plana).",
      criterios: [
        { texto: "a) Identifica la discriminación de tercer grado y sus condiciones (poder de mercado, segmentos observables con distinta elasticidad, ausencia de arbitraje)", peso: 2 },
        { texto: "b) Explica que el precio mayor va al segmento más inelástico, apoyándose en la elasticidad y la regla del ingreso marginal", peso: 2 },
        { texto: "c) Explica que en cada submercado se iguala IMg = CMg", peso: 1 },
        { texto: "c) Grafica correctamente los dos submercados con precios distintos según la elasticidad", peso: 1 }
      ],
      erroresComunes: [
        "Confundir el grado de discriminación: la de tercer grado segmenta por características observables del grupo; la de segundo usa la cantidad (autoselección); la de primer grado cobra la disposición a pagar individual.",
        "Concluir que se cobra más al grupo más elástico: se cobra más al segmento MÁS INELÁSTICO (menos sensible al precio).",
        "Olvidar la condición de no arbitraje: si los grupos pudieran revender entre sí, la discriminación se derrumbaría."
      ]
    },

    {
      id: "eco-046",
      tema: "Curva de Phillips de corto y largo plazo y expectativas de inflación",
      dificultad: "media",
      enunciado: "Tras un período de política monetaria expansiva, la inflación en Chile se ubica por sobre la meta de 3% y el desempleo se encuentra por debajo de su tasa natural.\n\na) Explique la relación de corto plazo entre inflación y desempleo (curva de Phillips de corto plazo) y su origen en el modelo de oferta y demanda agregada. 2 puntos\n\nb) Explique por qué en el LARGO PLAZO la curva de Phillips es vertical en la tasa natural de desempleo. 2 puntos\n\nc) Explique y grafique qué ocurre con la curva de Phillips de corto plazo cuando los agentes ajustan al alza sus expectativas de inflación. 2 puntos",
      respuestaModelo: "a) La CURVA DE PHILLIPS DE CORTO PLAZO describe una relación INVERSA entre inflación y desempleo: cuando la actividad se expande, el desempleo cae por debajo de su tasa natural y la inflación aumenta; cuando se contrae, ocurre lo contrario. Su origen está en el modelo OA-DA: un shock POSITIVO de demanda agregada (como la política monetaria expansiva) desplaza la DA a la derecha, elevando el nivel de precios (más inflación) y el PIB (menos desempleo). Recorrer distintos puntos de la curva de oferta agregada de corto plazo equivale a moverse a lo largo de la curva de Phillips de corto plazo: es la misma disyuntiva vista desde otro plano.\n\nb) En el LARGO PLAZO la curva de Phillips es VERTICAL en la tasa natural de desempleo porque el dinero es neutral: la oferta agregada de largo plazo es vertical en el producto potencial y el desempleo retorna a su tasa natural cualquiera sea la tasa de inflación. La disyuntiva entre inflación y desempleo es solo transitoria: se puede reducir el desempleo bajo el natural a costa de más inflación únicamente mientras la inflación SORPRENDE a los agentes (expectativas rezagadas). Una vez que los agentes incorporan la mayor inflación en sus expectativas y contratos, el desempleo vuelve a la tasa natural, pero con una inflación más alta. No hay trade-off permanente.\n\nc) Cuando los agentes ajustan AL ALZA sus expectativas de inflación (por ejemplo, tras un período de inflación alta), la curva de Phillips de corto plazo se DESPLAZA HACIA ARRIBA (o hacia la derecha): para cada nivel de desempleo, la inflación efectiva es mayor, porque los trabajadores y las empresas exigen alzas de salarios y precios anticipando más inflación. Esto implica que, para mantener el desempleo bajo su tasa natural, se requiere una inflación cada vez más alta (inflación acelerada); y si la política intenta frenar la inflación, deberá tolerar un desempleo por sobre el natural durante la transición (costo de la desinflación). El caso extremo de expectativas al alza con actividad estancada corresponde a la estanflación.\n\nDescripción del gráfico esperado: ejes con inflación (vertical) y tasa de desempleo (horizontal); una recta vertical en la tasa natural (Phillips de largo plazo); una curva de Phillips de corto plazo con pendiente negativa que cruza la vertical; una segunda curva de Phillips de corto plazo desplazada hacia arriba (mayores expectativas de inflación), que corta la vertical a una inflación más alta.",
      criterios: [
        { texto: "a) Explica la relación inversa inflación-desempleo de corto plazo y la vincula con un shock de demanda en el modelo OA-DA", peso: 2 },
        { texto: "b) Explica que la Phillips de largo plazo es vertical en la tasa natural (neutralidad del dinero, sin trade-off permanente)", peso: 2 },
        { texto: "c) Explica que mayores expectativas de inflación desplazan la Phillips de corto plazo hacia arriba", peso: 1 },
        { texto: "c) Grafica correctamente la Phillips de corto plazo, la vertical de largo plazo y el desplazamiento por expectativas", peso: 1 }
      ],
      erroresComunes: [
        "Sostener que existe un trade-off permanente entre inflación y desempleo: en el largo plazo la Phillips es vertical y el desempleo vuelve a su tasa natural.",
        "Confundir un desplazamiento de la curva de Phillips (por expectativas o shocks de oferta) con un movimiento a lo largo de ella (por shocks de demanda).",
        "Olvidar el rol de las expectativas: la disyuntiva de corto plazo solo se sostiene mientras la inflación sorprende a los agentes."
      ]
    },

    {
      id: "eco-047",
      tema: "Recursos de propiedad común: la tragedia de los comunes",
      dificultad: "media",
      enunciado: "Una pesquería de acceso abierto, donde cualquier embarcación puede pescar sin límite, muestra una caída sostenida de las capturas y del tamaño promedio de los peces, con señales de agotamiento del recurso.\n\na) Clasifique este recurso según los criterios de rivalidad y exclusión, y distíngalo de un bien público puro. 2 puntos\n\nb) Explique, utilizando el concepto de externalidad, por qué el libre acceso conduce a la sobreexplotación (la 'tragedia de los comunes'). Apóyese en un gráfico. 3 puntos\n\nc) Proponga y explique dos mecanismos para corregir el problema. 2 puntos",
      respuestaModelo: "a) La pesquería es un RECURSO DE PROPIEDAD COMÚN (bien común): es RIVAL en el consumo (cada pez capturado por una embarcación ya no está disponible para otra) pero NO EXCLUIBLE (con acceso abierto no se puede impedir que otros pesquen). Se distingue del BIEN PÚBLICO PURO en la rivalidad: el bien público es no rival (el consumo de uno no reduce el disponible para otros, como la defensa nacional) y no excluible; el recurso común, en cambio, sí es rival, y por eso puede agotarse.\n\nb) El problema es una EXTERNALIDAD NEGATIVA de congestión o agotamiento: cada pescador, al decidir cuánto pescar, considera solo su beneficio y su costo privado, pero NO internaliza el costo que impone a los demás y al recurso: cada captura reduce el stock reproductivo y encarece o disminuye las capturas futuras de todos. Como este costo externo no es asumido por quien pesca, el costo marginal SOCIAL de pescar es MAYOR que el costo marginal PRIVADO. Con acceso abierto, la pesca continúa mientras el beneficio privado sea positivo, llevando a un nivel de esfuerzo/captura MAYOR que el socialmente óptimo: el recurso se sobreexplota hasta su agotamiento. Es la 'tragedia de los comunes': lo que es racional para cada individuo resulta destructivo para el colectivo.\n\nDescripción del gráfico esperado: ejes con precio/costo (vertical) y cantidad de captura o esfuerzo pesquero (horizontal); una curva de beneficio marginal (o demanda) con pendiente negativa; una curva de costo marginal PRIVADO y, por encima, una de costo marginal SOCIAL (que incluye el costo de agotamiento del stock). El equilibrio de acceso abierto (intersección beneficio marginal con costo privado) da una captura Qco mayor que el óptimo social (intersección con el costo social) Q*; el triángulo entre ambas curvas, entre Q* y Qco, representa la pérdida social por sobreexplotación.\n\nc) Mecanismos de corrección (bastan dos): (1) CUOTAS INDIVIDUALES TRANSABLES (ITQ): la autoridad fija una captura total sostenible y la reparte en cuotas asignables y transables; al tener un derecho definido y vendible, cada pescador internaliza el valor del recurso y se pesca la cantidad eficiente al menor costo. (2) DERECHOS DE PROPIEDAD o concesiones exclusivas sobre zonas de pesca: al asignar la propiedad, el dueño internaliza el costo de agotar el recurso y lo administra sosteniblemente (lógica del Teorema de Coase). (3) IMPUESTO por unidad capturada (pigouviano) igual al costo externo, que desincentiva la sobrepesca. (4) Regulación directa: vedas, tallas mínimas, límites de esfuerzo.",
      criterios: [
        { texto: "a) Clasifica el recurso como bien común (rival y no excluible) y lo distingue del bien público puro (no rival)", peso: 2 },
        { texto: "b) Explica la sobreexplotación como externalidad negativa (costo social > costo privado; no se internaliza el agotamiento del stock)", peso: 2 },
        { texto: "b) Grafica correctamente el costo marginal privado y social con la captura de acceso abierto por sobre el óptimo social", peso: 1 },
        { texto: "c) Propone y explica dos mecanismos de corrección (cuotas transables, derechos de propiedad, impuesto, regulación directa)", peso: 2 }
      ],
      erroresComunes: [
        "Clasificar el recurso como bien público puro: a diferencia de este, el recurso común SÍ es rival y por ello puede agotarse.",
        "Atribuir la sobreexplotación a la 'codicia' sin identificar la externalidad: el problema estructural es la ausencia de derechos de propiedad que obligue a internalizar el costo de agotar el recurso.",
        "Proponer solo prohibir la pesca (contaminación/captura cero): el óptimo social es una captura POSITIVA pero sostenible, no nula."
      ]
    },

    {
      id: "eco-048",
      tema: "Rendimientos a escala y economías/deseconomías de escala en el largo plazo",
      dificultad: "media",
      enunciado: "Una empresa manufacturera evalúa la escala de una nueva planta y quiere entender cómo variará su costo unitario a medida que crece su tamaño de operación.\n\na) Distinga rendimientos a escala crecientes, constantes y decrecientes. 2 puntos\n\nb) Relacione estos rendimientos con la forma de la curva de costo medio de LARGO PLAZO (economías y deseconomías de escala) e identifique la escala eficiente mínima. 2 puntos\n\nc) Explique y grafique la relación entre las curvas de costo medio de CORTO plazo y la curva de costo medio de LARGO plazo (curva envolvente). 2 puntos",
      respuestaModelo: "a) Los RENDIMIENTOS A ESCALA describen cómo cambia la producción cuando se multiplican TODOS los factores por una misma proporción. Son CRECIENTES si la producción aumenta más que proporcionalmente (duplicar los factores más que duplica el producto); CONSTANTES si aumenta en la misma proporción; y DECRECIENTES si aumenta menos que proporcionalmente.\n\nb) Estos rendimientos se reflejan en la forma de la curva de COSTO MEDIO DE LARGO PLAZO (CMeLP), típicamente en forma de U: (1) el tramo DECRECIENTE del CMeLP corresponde a ECONOMÍAS DE ESCALA (rendimientos crecientes): al aumentar la escala, el costo por unidad baja (por especialización, indivisibilidades, mejor uso de la capacidad, poder de negociación); (2) el tramo plano o mínimo corresponde a rendimientos aproximadamente constantes; el punto mínimo del CMeLP define la ESCALA EFICIENTE MÍNIMA, el menor tamaño que alcanza el costo unitario más bajo; (3) el tramo CRECIENTE corresponde a DESECONOMÍAS DE ESCALA (rendimientos decrecientes): al crecer demasiado, el costo unitario sube por problemas de coordinación, burocracia y control.\n\nc) En el LARGO PLAZO todos los factores son variables, por lo que la empresa puede elegir la planta (nivel de capital) óptima para cada nivel de producción. Cada planta posible tiene su propia curva de costo medio de CORTO plazo (CMeCP). La curva de CMeLP es la ENVOLVENTE de todas las CMeCP: para cada nivel de producción, el costo de largo plazo es el mínimo costo medio alcanzable eligiendo la mejor planta. Por eso la CMeLP nunca está por encima de ninguna CMeCP y las toca por debajo; solo en el punto mínimo de la CMeLP la planta de corto plazo se usa también en su propio mínimo.\n\nDescripción del gráfico esperado: ejes costo medio (vertical) y cantidad Q (horizontal); varias curvas de CMeCP en forma de U a distintas escalas; la curva de CMeLP como envolvente que las contiene por debajo, con forma de U más amplia; identificado el mínimo de la CMeLP (escala eficiente mínima), el tramo de economías de escala (decreciente) y el de deseconomías (creciente).",
      criterios: [
        { texto: "a) Distingue rendimientos a escala crecientes, constantes y decrecientes (variación proporcional de todos los factores)", peso: 2 },
        { texto: "b) Relaciona los rendimientos con la CMeLP (economías/deseconomías de escala) e identifica la escala eficiente mínima", peso: 2 },
        { texto: "c) Explica la CMeLP como envolvente de las CMeCP y grafica correctamente la relación", peso: 2 }
      ],
      erroresComunes: [
        "Confundir rendimientos decrecientes a escala con la ley de rendimientos marginales decrecientes: la primera varía TODOS los factores; la segunda mantiene fijos algunos y varía uno.",
        "Dibujar la CMeLP cortando (no envolviendo) a las CMeCP: la de largo plazo es tangente por debajo a las de corto plazo, nunca las supera.",
        "Suponer que siempre conviene ser más grande: pasada la escala eficiente aparecen deseconomías de escala que elevan el costo unitario."
      ]
    },

    {
      id: "eco-049",
      tema: "Elasticidad precio de la oferta: determinantes y horizonte temporal",
      dificultad: "media",
      enunciado: "a) Defina la elasticidad precio de la oferta e indique cómo se interpreta que sea mayor o menor que 1. 2 puntos\n\nb) Explique tres determinantes de la elasticidad de la oferta, incluido el horizonte temporal, señalando por qué la oferta suele ser más elástica en el largo plazo. 2 puntos\n\nc) Compare, mediante un gráfico, el efecto de un mismo aumento de la demanda sobre el precio y la cantidad de equilibrio cuando la oferta es muy inelástica frente a cuando es muy elástica. 2 puntos",
      respuestaModelo: "a) La ELASTICIDAD PRECIO DE LA OFERTA mide la sensibilidad porcentual de la cantidad ofrecida ante un cambio porcentual en el precio del bien: Eo = (%ΔQs) / (%ΔP). Si Eo > 1, la oferta es ELÁSTICA (la cantidad responde más que proporcionalmente al precio); si Eo < 1, es INELÁSTICA (responde menos que proporcionalmente); si Eo = 1, es unitaria. Casos extremos: oferta perfectamente inelástica (vertical, Qs fija ante cualquier precio, típica de bienes de oferta limitada como terrenos) y perfectamente elástica (horizontal).\n\nb) Determinantes (bastan tres): (1) HORIZONTE TEMPORAL: en el corto plazo muchos factores están fijos (capital, capacidad instalada), por lo que la oferta responde poco al precio (inelástica); en el largo plazo la empresa puede ajustar todos sus factores, construir capacidad, entrar o salir del mercado, por lo que la oferta es MÁS ELÁSTICA. (2) CAPACIDAD DE ALMACENAMIENTO Y EXISTENCIA DE CAPACIDAD OCIOSA: si hay stock o capacidad sin usar, la producción puede aumentar rápido ante un mayor precio (más elástica). (3) MOVILIDAD Y DISPONIBILIDAD DE FACTORES PRODUCTIVOS: si los insumos y trabajadores pueden reasignarse fácilmente hacia el sector, la oferta responde más al precio.\n\nc) Ante un mismo desplazamiento de la demanda hacia la derecha: si la oferta es muy INELÁSTICA (curva empinada), el ajuste recae principalmente en el PRECIO, que sube mucho, mientras la cantidad aumenta poco. Si la oferta es muy ELÁSTICA (curva plana), el ajuste recae principalmente en la CANTIDAD, que aumenta mucho, mientras el precio sube poco. La elasticidad de la oferta determina, entonces, cómo se reparte el efecto de un shock de demanda entre precio y cantidad.\n\nDescripción del gráfico esperado: dos paneles con ejes P y Q. Panel 1 (oferta inelástica): oferta empinada, demanda desplazándose de D0 a D1, con un gran aumento de precio (P0 a P1) y pequeño aumento de cantidad. Panel 2 (oferta elástica): oferta plana, mismo desplazamiento de demanda, con pequeño aumento de precio y gran aumento de cantidad.",
      criterios: [
        { texto: "a) Define la elasticidad de la oferta (Eo = %ΔQs/%ΔP) e interpreta los casos elástico (>1) e inelástico (<1)", peso: 2 },
        { texto: "b) Explica tres determinantes, incluido el horizonte temporal (mayor elasticidad en el largo plazo)", peso: 2 },
        { texto: "c) Grafica y compara el efecto de un aumento de demanda con oferta inelástica (sube más el precio) frente a oferta elástica (sube más la cantidad)", peso: 2 }
      ],
      erroresComunes: [
        "Confundir la elasticidad de la oferta con la pendiente sin más: la elasticidad se mide en términos porcentuales, aunque una oferta más plana suele ser más elástica.",
        "Afirmar que la oferta es igualmente elástica en el corto y el largo plazo: la presencia de factores fijos hace la oferta de corto plazo más inelástica.",
        "Concluir que un aumento de demanda siempre sube mucho el precio: depende de la elasticidad de la oferta."
      ]
    },

    // ----- DIFÍCIL (6) -----

    {
      id: "eco-050",
      tema: "Teoría de la firma: integración vertical, costos de transacción y problema del hold-up",
      dificultad: "dificil",
      enunciado: "Una gran minera se abastece de un insumo altamente específico fabricado por un único proveedor. Para producirlo, el proveedor debe realizar una inversión dedicada (una planta a pie de mina que no tiene otro uso ni otros clientes). La minera evalúa si seguir comprando el insumo a este proveedor o integrarlo dentro de la empresa (producirlo ella misma).\n\na) Explique, a partir de los costos de transacción y de coordinación (enfoque de Coase), qué determina el tamaño o el límite de la empresa y cuándo conviene 'hacer' en lugar de 'comprar'. 4 puntos\n\nb) Explique el problema del 'hold-up' (oportunismo post-contractual) asociado a los activos específicos y por qué desincentiva la inversión eficiente. 4 puntos\n\nc) Explique cómo la integración vertical y/o los contratos de largo plazo permiten mitigar el problema, señalando además un costo de integrarse verticalmente. 4 puntos",
      respuestaModelo: "a) Según Coase, la empresa existe porque usar el mercado tiene COSTOS DE TRANSACCIÓN: buscar contraparte, negociar y redactar contratos, y hacerlos cumplir (fiscalización, resolución de disputas). Cuando estos costos son altos, conviene organizar la actividad DENTRO de la empresa mediante coordinación jerárquica en lugar de recurrir al mercado. Pero coordinar internamente también tiene costos (de organización, control y burocracia) que crecen con el tamaño. El LÍMITE de la empresa se alcanza donde el costo de organizar una transacción adicional dentro de la empresa iguala el costo de realizarla a través del mercado. La decisión de 'hacer versus comprar' se resuelve comparando ambos costos: conviene HACER (integrar) cuando los costos de transacción de mercado son altos (por ejemplo, con activos muy específicos, contratos incompletos e incertidumbre) y COMPRAR cuando el mercado es competitivo y los costos de transacción son bajos.\n\nb) Un ACTIVO ESPECÍFICO es aquel cuyo valor en su mejor uso alternativo es mucho menor que en la relación para la que fue creado (la planta a pie de mina no sirve para otro cliente). Esto genera CUASI-RENTAS apropiables y expone al problema del HOLD-UP: una vez que el proveedor realizó la inversión irreversible, la minera puede comportarse oportunistamente y renegociar a la baja el precio (sabiendo que el proveedor no tiene alternativa y aceptará cualquier precio que cubra sus costos variables). Anticipando este riesgo de expropiación, el proveedor tiende a SUBINVERTIR en el activo específico (o exige precios altos o garantías), lo que conduce a una inversión INEFICIENTEMENTE BAJA. El origen del problema es la combinación de especificidad de los activos, contratos incompletos (no se puede prever todo) e irreversibilidad de la inversión.\n\nc) La INTEGRACIÓN VERTICAL resuelve el hold-up al unir a ambas partes bajo una sola propiedad: desaparece el conflicto de intereses entre comprador y proveedor, pues las decisiones se toman para maximizar el beneficio conjunto, restaurando el incentivo a invertir eficientemente. Alternativamente, los CONTRATOS DE LARGO PLAZO (con precios, volúmenes y cláusulas de salvaguarda pactados por adelantado) reducen el riesgo de renegociación oportunista, aunque son inevitablemente incompletos. Costo de integrarse verticalmente (basta uno): pérdida de los incentivos de alta potencia del mercado (una división interna tiene menos presión competitiva que un proveedor independiente), mayores costos de coordinación y burocracia, menor especialización y flexibilidad, y posible pérdida de economías de escala del proveedor especializado. Por eso la integración no siempre es óptima: se justifica cuando el ahorro en costos de transacción (evitar el hold-up) supera el mayor costo de organización interna.",
      criterios: [
        { texto: "a) Explica los costos de transacción y de coordinación (Coase) y define el límite de la empresa donde se igualan el costo interno y el de mercado", peso: 2 },
        { texto: "a) Aplica el criterio 'hacer vs. comprar' según la magnitud de los costos de transacción y la especificidad de los activos", peso: 1 },
        { texto: "b) Explica el hold-up (oportunismo post-contractual con activos específicos y cuasi-rentas) y su origen (especificidad, contratos incompletos, irreversibilidad)", peso: 2 },
        { texto: "b) Concluye que el riesgo de expropiación lleva a una subinversión ineficiente", peso: 1 },
        { texto: "c) Explica que la integración vertical y/o los contratos de largo plazo mitigan el problema alineando incentivos", peso: 2 },
        { texto: "c) Señala un costo de integrarse verticalmente (pérdida de incentivos de mercado, burocracia, menor especialización)", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que integrarse siempre es mejor: la integración ahorra costos de transacción pero agrega costos de coordinación; solo conviene cuando los primeros dominan.",
        "Confundir el hold-up con un simple incumplimiento de contrato: el hold-up es la renegociación oportunista permitida por la especificidad del activo y la incompletitud contractual, que ocurre incluso 'respetando' los contratos.",
        "Ignorar que el problema desincentiva la inversión ex ante: el efecto clave del hold-up es la subinversión anticipada, no solo la pérdida ex post."
      ]
    },

    {
      id: "eco-051",
      tema: "Teoría de agencia: relación principal-agente, riesgo moral y contratos de incentivos",
      dificultad: "dificil",
      enunciado: "Los dueños de una empresa (principal) contratan a un gerente (agente) para dirigirla. El esfuerzo del gerente no es directamente observable por los dueños, y sus intereses no coinciden con los de ellos: el gerente prefiere menos esfuerzo y mayores beneficios personales, mientras los dueños buscan maximizar el valor de la empresa.\n\na) Explique en qué consiste el problema de agencia y por qué constituye un caso de riesgo moral. 4 puntos\n\nb) Explique la disyuntiva entre incentivos y riesgo al diseñar la remuneración del gerente, comparando un sueldo fijo con un pago ligado a los resultados de la empresa. 4 puntos\n\nc) Proponga y explique dos mecanismos adicionales (distintos del esquema de remuneración) para alinear los intereses del agente con los del principal. 4 puntos",
      respuestaModelo: "a) El PROBLEMA DE AGENCIA surge cuando una parte (el AGENTE, el gerente) actúa en representación de otra (el PRINCIPAL, los dueños), pero (i) sus intereses NO están alineados y (ii) existe INFORMACIÓN ASIMÉTRICA: el principal no puede observar perfectamente el esfuerzo ni las acciones del agente. Es un caso de RIESGO MORAL porque la asimetría se refiere a una ACCIÓN OCULTA POSTERIOR al contrato: una vez contratado, el gerente puede reducir su esfuerzo, tomar decisiones que lo benefician a costa de la empresa (gastos suntuarios, proyectos de prestigio, aversión excesiva al riesgo) sin que los dueños puedan distinguir si un mal resultado se debe a poco esfuerzo o a mala suerte. El agente no soporta plenamente las consecuencias de sus actos, por lo que tiende a comportarse de forma distinta a la que el principal desearía.\n\nb) El diseño del contrato enfrenta una DISYUNTIVA entre INCENTIVOS y RIESGO: (1) Un SUELDO FIJO no expone al gerente al riesgo (recibe lo mismo pase lo que pase con los resultados), lo cual es eficiente en el reparto del riesgo si el gerente es averso al riesgo y el principal es más neutral; PERO no le da ningún incentivo a esforzarse, pues su paga no depende de su desempeño (maximiza el riesgo moral). (2) Un PAGO LIGADO A RESULTADOS (bonos, comisiones, participación en utilidades) alinea los incentivos: el gerente se beneficia si a la empresa le va bien, por lo que se esfuerza más; PERO le traslada RIESGO, porque los resultados dependen no solo de su esfuerzo sino también de factores exógenos fuera de su control (el ciclo económico, shocks). Un gerente averso al riesgo exigirá una PRIMA por asumir ese riesgo, encareciendo el contrato. El contrato óptimo es INTERMEDIO: combina una parte fija (que da seguridad) con una parte variable (que da incentivos), equilibrando la necesidad de motivar el esfuerzo con el costo de imponer riesgo al agente.\n\nc) Mecanismos adicionales de alineación (bastan dos): (1) MONITOREO Y CONTROL: auditorías, sistemas de reporte, un directorio activo y comités que supervisen la gestión reducen la asimetría de información y limitan el margen de comportamiento oportunista. (2) REPUTACIÓN Y MERCADO LABORAL: la preocupación del gerente por su carrera futura y su reputación en el mercado de ejecutivos lo disciplina, pues un mal desempeño reduce sus oportunidades futuras. (3) PARTICIPACIÓN EN LA PROPIEDAD (stock options, entrega de acciones): al hacerlo copropietario, sus intereses se alinean con los de los accionistas. (4) COMPETENCIA Y AMENAZA DE TAKEOVER: la amenaza de ser reemplazado o de una toma de control hostil si la empresa se gestiona mal disciplina a la gerencia. (5) Deuda: obliga a generar caja y reduce el flujo libre disponible para gastos discrecionales.",
      criterios: [
        { texto: "a) Explica el problema de agencia (conflicto de intereses + información asimétrica) y lo caracteriza como riesgo moral por acción oculta posterior al contrato", peso: 3 },
        { texto: "a) Explica por qué el agente tiende a desviarse (no soporta plenamente las consecuencias de sus acciones)", peso: 1 },
        { texto: "b) Explica el sueldo fijo (sin riesgo para el agente pero sin incentivo al esfuerzo)", peso: 1 },
        { texto: "b) Explica el pago por resultados (alinea incentivos pero traslada riesgo al agente averso, que exige prima) y concluye que el óptimo es un contrato intermedio", peso: 2 },
        { texto: "c) Propone y explica dos mecanismos de alineación distintos de la remuneración (monitoreo, reputación, participación en la propiedad, competencia/takeover)", peso: 2 }
      ],
      erroresComunes: [
        "Confundir el problema de agencia (riesgo moral, acción oculta posterior al contrato) con la selección adversa (característica oculta previa al contrato).",
        "Proponer siempre el 100% de pago variable como solución: eso maximiza incentivos pero impone todo el riesgo a un agente averso, encareciendo el contrato; el óptimo balancea incentivos y riesgo.",
        "Olvidar que los resultados dependen también de factores exógenos: por eso un contrato de incentivos puros castiga o premia al agente por circunstancias fuera de su control."
      ]
    },

    {
      id: "eco-052",
      tema: "Barreras de entrada, precio límite y compromiso estratégico creíble",
      dificultad: "dificil",
      enunciado: "Una empresa dominante en su mercado enfrenta la amenaza de entrada de un competidor potencial y evalúa distintas estrategias para disuadirlo.\n\na) Distinga las barreras de entrada estructurales de las barreras de entrada estratégicas, con un ejemplo de cada una. 3 puntos\n\nb) Explique la estrategia de 'precio límite' (limit pricing) como forma de disuadir la entrada y bajo qué condición resulta efectiva. 4 puntos\n\nc) Explique por qué una amenaza de 'guerra de precios' solo disuade la entrada si es CREÍBLE, y cómo la empresa dominante puede volverla creíble mediante un compromiso (por ejemplo, invirtiendo previamente en capacidad instalada). Relacione con el concepto de compromiso estratégico. 5 puntos",
      respuestaModelo: "a) Las BARRERAS DE ENTRADA ESTRUCTURALES derivan de las condiciones básicas de la industria, no de una acción deliberada de la empresa establecida: economías de escala que exigen entrar a gran tamaño, altos costos hundidos, control de un insumo esencial, patentes o regulación. Ejemplo: una industria con enormes economías de escala (como la distribución sanitaria) en que un entrante pequeño no puede competir en costos. Las BARRERAS ESTRATÉGICAS, en cambio, son creadas DELIBERADAMENTE por la empresa establecida para disuadir la entrada: precio límite, exceso de capacidad instalada, inversión agresiva en publicidad o proliferación de marcas, contratos de exclusividad. Ejemplo: instalar más capacidad de la necesaria para amenazar de forma creíble con inundar el mercado si alguien entra.\n\nb) El PRECIO LÍMITE consiste en que la empresa establecida fija, antes de la entrada, un precio suficientemente BAJO (menor al que maximizaría su beneficio de monopolio) de modo que un entrante potencial, al observarlo, concluya que no podría operar de forma rentable. La idea es que el entrante infiera que, si entra, el precio (o los costos de la establecida) hará que su beneficio sea negativo. Es efectiva bajo dos condiciones: (1) que exista una ASIMETRÍA que el precio bajo señale creíblemente, típicamente que la establecida tiene COSTOS MÁS BAJOS (por escala o eficiencia) que el entrante, de modo que un precio que a ella le deja beneficio al entrante le dejaría pérdidas; y (2) que la amenaza implícita de mantener ese precio tras la entrada sea CREÍBLE. Si el entrante sabe que, una vez que entre, a la establecida le convendrá subir el precio y acomodar la competencia, el precio límite no lo disuade (sería un simple 'bluff').\n\nc) Una amenaza de GUERRA DE PRECIOS busca disuadir advirtiendo al entrante que, si entra, la establecida bajará agresivamente los precios y le hará perder dinero. El problema es la CREDIBILIDAD: si tras la entrada a la establecida le conviene más ACOMODAR (repartirse el mercado a precios altos) que pelear (ambas pierden en una guerra de precios), entonces la amenaza NO es creíble: es una amenaza vacía que, por inducción hacia atrás (equilibrio perfecto en subjuegos), el entrante ignora y entra igual. Para volver la amenaza CREÍBLE, la empresa debe adquirir un COMPROMISO ESTRATÉGICO: una acción previa, IRREVERSIBLE y observable, que cambie sus propios incentivos ex post de modo que pelear pase a ser su mejor respuesta. El ejemplo clásico es invertir de antemano en EXCESO DE CAPACIDAD INSTALADA: al tener capacidad ociosa con costos ya hundidos, a la establecida le resulta óptimo (ex post) producir mucho y bajar el precio si alguien entra, porque su costo marginal de usar esa capacidad es bajo. Como el entrante anticipa que ahora la guerra de precios SÍ ocurriría, se abstiene de entrar. La clave es que el compromiso funciona precisamente porque es COSTOSO E IRREVERSIBLE: al 'atarse las manos', la empresa hace creíble lo que de otro modo sería solo una amenaza.",
      criterios: [
        { texto: "a) Distingue barreras estructurales (condiciones de la industria) de estratégicas (creadas deliberadamente) con un ejemplo de cada una", peso: 2 },
        { texto: "b) Explica el precio límite (fijar un precio bajo que hace no rentable la entrada) y su lógica de señalización de costos bajos", peso: 2 },
        { texto: "b) Señala la condición de efectividad (asimetría de costos y/o credibilidad de mantener el precio)", peso: 1 },
        { texto: "c) Explica por qué la amenaza debe ser creíble (sin compromiso, acomodar es la mejor respuesta ex post; la amenaza es un bluff que el entrante ignora)", peso: 2 },
        { texto: "c) Explica cómo un compromiso irreversible (exceso de capacidad, costos hundidos) cambia los incentivos ex post y vuelve creíble la disuasión", peso: 2 }
      ],
      erroresComunes: [
        "Confundir barreras estructurales con estratégicas: las primeras son inherentes a la industria; las segundas son acciones deliberadas de la empresa establecida.",
        "Sostener que cualquier amenaza disuade la entrada: solo las amenazas CREÍBLES lo hacen; una amenaza que no conviene cumplir ex post es ignorada por el entrante.",
        "No advertir que el compromiso funciona por ser irreversible y costoso: es justamente la imposibilidad de retractarse lo que hace creíble la disuasión."
      ]
    },

    {
      id: "eco-053",
      tema: "Mundell-Fleming: política fiscal con tipo de cambio flexible y fijo",
      dificultad: "dificil",
      enunciado: "Considere a Chile como una economía pequeña y abierta, con perfecta movilidad de capitales. Para reactivar la economía, el gobierno aplica una política fiscal EXPANSIVA (aumento del gasto público).\n\na) Con tipo de cambio FLEXIBLE, explique y grafique el efecto sobre la tasa de interés, los flujos de capital, el tipo de cambio, la balanza comercial y el PIB. Concluya sobre la efectividad de la política fiscal. 5 puntos\n\nb) Con tipo de cambio FIJO, explique y grafique el mismo experimento y concluya sobre su efectividad. 4 puntos\n\nc) Contraste ambos regímenes y explique la 'trinidad imposible' (trilema) de la economía abierta. 3 puntos",
      respuestaModelo: "a) TIPO DE CAMBIO FLEXIBLE: el aumento del gasto público desplaza la IS a la DERECHA (IS0 a IS1), lo que tiende a elevar la tasa de interés doméstica por sobre la internacional (r > r*). Con perfecta movilidad de capitales, ese diferencial atrae una ENTRADA de capitales; en el mercado cambiario aumenta la oferta de dólares y el peso se APRECIA (el tipo de cambio cae). La apreciación encarece las exportaciones y abarata las importaciones, DETERIORANDO la balanza comercial (caen las exportaciones netas). Como NX es un componente del gasto, la caída de las exportaciones netas CONTRAE la IS de vuelta (IS1 regresa hacia IS0), hasta que la tasa doméstica retorna a r* y desaparece el diferencial. Resultado final: el PIB vuelve a su nivel inicial; el mayor gasto público desplazó exactamente a las exportaciones netas (crowding out externo total). CONCLUSIÓN: con tipo de cambio flexible y perfecta movilidad de capitales, la política fiscal es INEFECTIVA para alterar el producto.\n\nDescripción del gráfico esperado (parte a): plano IS-LM con una recta horizontal en r* (movilidad perfecta de capitales); la IS se desplaza a la derecha (IS0 a IS1) y luego retorna a IS0 por la apreciación; la LM se mantiene; el equilibrio final vuelve al inicial sobre r*, con el PIB sin cambios. Complementariamente, el mercado cambiario con la oferta de dólares desplazándose a la derecha y el tipo de cambio cayendo.\n\nb) TIPO DE CAMBIO FIJO: nuevamente el mayor gasto desplaza la IS a la derecha y presiona la tasa al alza (r > r*), atrayendo capitales. Ahora, para MANTENER la paridad cambiaria, el Banco Central debe impedir la apreciación del peso COMPRANDO los dólares que ingresan (interviene el mercado cambiario), lo que INYECTA pesos y AUMENTA la oferta monetaria: la LM se desplaza a la DERECHA (LM0 a LM1). Este aumento de la oferta monetaria refuerza la expansión en lugar de contrarrestarla. El proceso continúa hasta que la tasa vuelve a r*, con un PIB claramente MAYOR. CONCLUSIÓN: con tipo de cambio fijo y perfecta movilidad de capitales, la política fiscal es MUY EFECTIVA (no hay crowding out; la política monetaria queda subordinada a defender la paridad y termina acomodando la expansión fiscal).\n\nDescripción del gráfico esperado (parte b): plano IS-LM con r* horizontal; la IS se desplaza a la derecha (IS0 a IS1) y la LM también se desplaza a la derecha (LM0 a LM1) por la compra de divisas del Banco Central; el equilibrio final está sobre r* con un PIB mayor (Y1 > Y0).\n\nc) Contraste: la política fiscal es INEFECTIVA con tipo de cambio flexible (la apreciación expulsa exportaciones netas) y MUY EFECTIVA con tipo de cambio fijo (la defensa de la paridad expande el dinero y refuerza el impulso). Esto ilustra la TRINIDAD IMPOSIBLE o TRILEMA de la economía abierta: un país no puede tener simultáneamente los tres objetivos siguientes: (1) tipo de cambio fijo, (2) libre movilidad de capitales y (3) política monetaria autónoma. Solo puede elegir DOS. Si opta por tipo de cambio fijo con libre movilidad de capitales (caso b), pierde la autonomía monetaria (el dinero debe moverse para sostener la paridad). Si opta por tipo de cambio flexible con libre movilidad (caso a), conserva la autonomía monetaria pero renuncia a controlar el tipo de cambio (y la política fiscal pierde eficacia). Chile, con tipo de cambio flexible y cuentas de capital abiertas, conserva su política monetaria autónoma.",
      criterios: [
        { texto: "a) Explica la cadena con tipo de cambio flexible (IS a la derecha, r sube, entra capital, peso se aprecia, caen exportaciones netas, la IS retorna) con el PIB volviendo al inicial", peso: 2 },
        { texto: "a) Grafica correctamente y concluye la inefectividad de la política fiscal bajo tipo de cambio flexible (crowding out externo)", peso: 1 },
        { texto: "b) Explica la cadena con tipo de cambio fijo (el Banco Central compra divisas para defender la paridad, la oferta monetaria y la LM se expanden, reforzando el impulso)", peso: 2 },
        { texto: "b) Grafica correctamente y concluye la alta efectividad de la política fiscal bajo tipo de cambio fijo", peso: 1 },
        { texto: "c) Contrasta ambos regímenes y explica la trinidad imposible (fijo + movilidad + autonomía monetaria: solo dos a la vez)", peso: 2 }
      ],
      erroresComunes: [
        "Invertir la efectividad: la política fiscal es INEFECTIVA con tipo de cambio flexible y EFECTIVA con tipo de cambio fijo (al revés que la política monetaria).",
        "Olvidar la reacción del Banco Central bajo tipo de cambio fijo: la defensa de la paridad obliga a expandir la oferta monetaria, lo que refuerza la expansión fiscal.",
        "No cerrar el mecanismo bajo tipo de cambio flexible: la apreciación deteriora las exportaciones netas y contrae la IS hasta anular el efecto sobre el producto."
      ]
    },

    {
      id: "eco-054",
      tema: "Poder de monopolio y discriminación de precios de primer grado (perfecta)",
      dificultad: "dificil",
      enunciado: "Un monopolista logra conocer con precisión la disposición a pagar de cada consumidor y puede cobrar un precio distinto por cada unidad vendida.\n\na) Explique en qué consiste la discriminación de precios de primer grado (perfecta) y cómo fija el precio de cada unidad. 3 puntos\n\nb) Explique y grafique qué ocurre con el excedente del consumidor, el excedente del productor, la cantidad producida y la pérdida social, comparándolo con un monopolio de precio único. 5 puntos\n\nc) Defina el poder de monopolio y el índice de Lerner, y explique de qué depende su magnitud (relación con la elasticidad de la demanda). 4 puntos",
      respuestaModelo: "a) La DISCRIMINACIÓN DE PRECIOS DE PRIMER GRADO (perfecta) consiste en cobrar a cada consumidor, por cada unidad, EXACTAMENTE su disposición máxima a pagar (reflejada por la altura de la curva de demanda en esa unidad). El monopolista no fija un precio único, sino que 'recorre' la curva de demanda cobrando el precio más alto que cada comprador está dispuesto a pagar por cada unidad adicional. En consecuencia, la curva de demanda se convierte en la curva de INGRESO MARGINAL del monopolista (ya no hay que bajar el precio de las unidades anteriores para vender una más). Produce mientras la disposición a pagar (demanda) sea mayor o igual al costo marginal, es decir, hasta donde la DEMANDA CORTA AL COSTO MARGINAL (P = CMg en la última unidad).\n\nb) Comparación con el monopolio de precio único: (1) CANTIDAD: el monopolio de precio único produce donde IMg = CMg, una cantidad Qm MENOR que la eficiente; el discriminador perfecto, en cambio, produce hasta donde la demanda corta al CMg, es decir, la cantidad EFICIENTE Qc (la misma que en competencia perfecta). (2) EXCEDENTE DEL CONSUMIDOR: bajo discriminación perfecta el excedente del consumidor es CERO, porque cada consumidor paga exactamente su disposición a pagar y no retiene ningún excedente. (3) EXCEDENTE DEL PRODUCTOR: el monopolista se APROPIA de TODO el excedente total del mercado (toda el área entre la demanda y el costo marginal). (4) PÉRDIDA SOCIAL: NO hay pérdida irrecuperable de eficiencia, porque se producen todas las unidades cuya valoración supera el costo (la asignación es eficiente en cantidad). En síntesis: la discriminación perfecta es EFICIENTE en términos de cantidad (elimina la pérdida social del monopolio), pero es extrema en lo DISTRIBUTIVO, pues transfiere todo el excedente del consumidor al productor.\n\nDescripción del gráfico esperado: ejes P y Q; curva de demanda con pendiente negativa y curva de costo marginal; el monopolista discriminador cobra a lo largo de la demanda hasta la cantidad Qc donde la demanda corta al CMg; el área completa entre la demanda y el CMg (hasta Qc) se identifica como excedente del productor, sin excedente del consumidor ni triángulo de pérdida social. Puede compararse con el monopolio de precio único (Qm < Qc, con triángulo de pérdida social) para contrastar.\n\nc) El PODER DE MONOPOLIO es la capacidad de una empresa de fijar un precio POR ENCIMA de su costo marginal (P > CMg), a diferencia de la empresa competitiva que es tomadora de precios (P = CMg). El ÍNDICE DE LERNER lo mide: L = (P − CMg) / P, que toma valores entre 0 (competencia perfecta, sin poder de mercado) y 1 (máximo poder). Se puede demostrar que, para la empresa que maximiza beneficios, L = 1/|ε|, donde |ε| es la elasticidad-precio de la demanda que enfrenta la empresa. Por lo tanto, el poder de mercado depende INVERSAMENTE de la elasticidad de la demanda: cuanto MÁS INELÁSTICA es la demanda (menos sustitutos, menor sensibilidad al precio), MAYOR es el margen que la empresa puede cobrar sobre el costo marginal y mayor su poder de monopolio. Las fuentes de ese poder (pocas empresas, barreras a la entrada, diferenciación) operan justamente reduciendo la elasticidad de la demanda que enfrenta la firma.",
      criterios: [
        { texto: "a) Explica la discriminación de primer grado (cobrar a cada unidad la disposición a pagar) y que produce hasta P = CMg (la demanda es su ingreso marginal)", peso: 2 },
        { texto: "b) Concluye que el excedente del consumidor es cero, el productor captura todo el excedente, la cantidad es la eficiente y no hay pérdida social, comparando con el monopolio de precio único", peso: 2 },
        { texto: "b) Grafica correctamente (demanda, CMg, cantidad eficiente, excedente del productor como área total y ausencia de pérdida social)", peso: 1 },
        { texto: "c) Define el poder de monopolio (P > CMg) y el índice de Lerner L = (P − CMg)/P = 1/|ε|", peso: 2 },
        { texto: "c) Explica la relación inversa con la elasticidad (más inelástica la demanda, mayor el poder de mercado)", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que la discriminación perfecta genera pérdida social: al producir la cantidad eficiente (P = CMg en la última unidad), ELIMINA la pérdida social del monopolio; su problema es distributivo, no de eficiencia.",
        "Sostener que el discriminador perfecto produce menos que el monopolio de precio único: produce MÁS (la cantidad eficiente), no menos.",
        "Confundir el índice de Lerner con el margen contable: mide (P − CMg)/P y se relaciona con la elasticidad de la demanda, no con la utilidad sobre costos totales."
      ]
    },

    {
      id: "eco-055",
      tema: "Comercio internacional: ventaja comparativa entre países y ganancias del comercio",
      dificultad: "dificil",
      enunciado: "Considere dos países, Chile y Perú, que producen vino (V) y textiles (T). Con una unidad de trabajo, Chile produce 6 unidades de vino o 2 de textiles; Perú produce 4 unidades de vino o 4 de textiles.\n\na) Determine la ventaja absoluta y la ventaja comparativa de cada país (calculando los costos de oportunidad) y el patrón de especialización eficiente. 4 puntos\n\nb) Determine el rango de la relación de intercambio internacional que hace conveniente el comercio para ambos países, y muestre con un ejemplo numérico las ganancias del comercio. 5 puntos\n\nc) Explique quiénes ganan y quiénes pueden perder al interior de cada país con la apertura comercial, y por qué el efecto neto sobre el bienestar del país es positivo. 3 puntos",
      respuestaModelo: "a) Ventaja ABSOLUTA: Chile produce más vino por unidad de trabajo (6 > 4), por lo que tiene ventaja absoluta en VINO; Perú produce más textiles (4 > 2), por lo que tiene ventaja absoluta en TEXTILES. Costos de OPORTUNIDAD: en Chile, producir 1 textil cuesta 3 vinos (6/2), y 1 vino cuesta 1/3 de textil; en Perú, producir 1 textil cuesta 1 vino (4/4), y 1 vino cuesta 1 textil. Comparando: el costo de oportunidad de un TEXTIL es menor en Perú (1 vino < 3 vinos), por lo que Perú tiene VENTAJA COMPARATIVA en textiles; el costo de oportunidad de un VINO es menor en Chile (1/3 textil < 1 textil), por lo que Chile tiene VENTAJA COMPARATIVA en vino. Patrón de especialización eficiente: Chile se especializa en VINO y Perú en TEXTILES (cada uno en el bien de menor costo de oportunidad).\n\nb) La relación de intercambio internacional (precio de un textil expresado en vinos) debe ubicarse ENTRE los costos de oportunidad de ambos países para que a los dos les convenga comerciar: entre 1 vino (costo de oportunidad del textil en Perú) y 3 vinos (costo de oportunidad del textil en Chile). Es decir: 1 < (precio del textil en vinos) < 3. Solo en ese rango Perú obtiene por su textil más vino del que obtendría produciéndolo internamente, y Chile consigue textiles a cambio de menos vino del que le costaría producirlos.\n\nEjemplo numérico: supongamos que el precio internacional es 1 textil por 2 vinos. Chile se especializa en vino: con su trabajo produce vino y lo exporta; por cada textil que importa entrega 2 vinos, en lugar de los 3 vinos que le costaría producirlo internamente: AHORRA 1 vino por textil. Perú se especializa en textiles: por cada textil que exporta recibe 2 vinos, en lugar de 1 vino que obtendría produciéndolo internamente: GANA 1 vino por textil. Ambos países pueden CONSUMIR combinaciones de vino y textiles que están FUERA de su frontera de posibilidades de producción individual: esa es la ganancia del comercio.\n\nc) Al interior de cada país, la apertura NO beneficia a todos por igual. En cada país GANAN los productores del bien EXPORTABLE (el sector en que el país se especializa) y los CONSUMIDORES del bien IMPORTADO (que ahora es más barato). PIERDEN los productores del bien IMPORTABLE, que compiten con importaciones más baratas, y los factores específicos empleados en ese sector (que deben reasignarse, a veces con costos de transición y desempleo temporal). Sin embargo, el efecto NETO sobre el bienestar del país es POSITIVO: la ganancia de los que ganan (mayor excedente de consumidores y de exportadores) es MAYOR que la pérdida de los que pierden, de modo que, en principio, los ganadores podrían compensar a los perdedores y aún quedar mejor. Por eso el libre comercio aumenta el bienestar agregado, aunque genere ganadores y perdedores que justifican políticas de compensación y reconversión.",
      criterios: [
        { texto: "a) Calcula correctamente los costos de oportunidad e identifica la ventaja comparativa de cada país (Chile en vino, Perú en textiles)", peso: 2 },
        { texto: "a) Determina el patrón de especialización eficiente según el menor costo de oportunidad (distinguiéndolo de la ventaja absoluta)", peso: 1 },
        { texto: "b) Determina el rango de la relación de intercambio (entre 1 y 3 vinos por textil) que hace conveniente el comercio para ambos", peso: 2 },
        { texto: "b) Muestra numéricamente las ganancias del comercio (consumo fuera de la FPP de cada país)", peso: 2 },
        { texto: "c) Explica ganadores y perdedores internos y por qué el efecto neto sobre el bienestar del país es positivo (los ganadores podrían compensar a los perdedores)", peso: 2 }
      ],
      erroresComunes: [
        "Definir la especialización según la ventaja absoluta: el patrón eficiente lo determina la ventaja COMPARATIVA (menor costo de oportunidad).",
        "Fijar una relación de intercambio fuera del rango entre los costos de oportunidad: si el precio no está entre 1 y 3 vinos por textil, a uno de los países no le convendría comerciar.",
        "Concluir que el comercio beneficia a todos dentro de cada país: genera ganadores y perdedores, aunque la ganancia neta agregada es positiva."
      ]
    },

    // ================= NUEVAS: PRÁCTICA ADICIONAL (eco-056 a eco-104) =================
    // 10 fáciles, 24 medias, 15 difíciles. Amplían subtemas del temario poco
    // representados (método de la economía, teoría del consumidor y de la firma,
    // estructuras de mercado, teoría de juegos, regulación, crecimiento y macro abierta).

    // ---- FÁCILES ----

    {
      id: "eco-056",
      tema: "El método de la economía: economía positiva vs. normativa y el flujo circular",
      dificultad: "facil",
      enunciado: "a) Explique la diferencia entre economía positiva y economía normativa, entregando un ejemplo de afirmación de cada tipo. 2 puntos\n\nb) ¿Qué es un modelo económico y por qué el diagrama del flujo circular de la renta es un modelo? Explique qué representan sus dos mercados y sus dos tipos de agentes. 3 puntos",
      respuestaModelo: "a) La economía positiva describe y explica cómo ES la realidad económica; sus afirmaciones son descriptivas y, en principio, contrastables con datos (verdaderas o falsas). Ejemplo positivo: \"un alza del salario mínimo por sobre el equilibrio aumenta el desempleo juvenil\". La economía normativa, en cambio, prescribe cómo DEBERÍAN ser las cosas; sus afirmaciones son juicios de valor, no verificables empíricamente. Ejemplo normativo: \"el gobierno debería subir el salario mínimo para reducir la desigualdad\".\n\nb) Un modelo económico es una representación simplificada de la realidad que aísla las variables relevantes para entender un fenómeno; simplifica (supuestos) para explicar y predecir. El flujo circular de la renta es un modelo porque representa de manera simplificada cómo se organiza una economía. En él interactúan dos tipos de agentes: los hogares (dueños de los factores productivos y consumidores) y las empresas (productoras de bienes y servicios). Y dos mercados: el mercado de bienes y servicios (las empresas ofrecen y los hogares demandan) y el mercado de factores productivos (los hogares ofrecen trabajo, capital y tierra, y las empresas los demandan). Circulan en sentidos opuestos un flujo real (bienes y factores) y un flujo monetario (gasto, ingresos, salarios y utilidades).\n\nDescripción del esquema esperado: dos cajas (hogares y empresas) unidas por dos anillos: uno superior (mercado de bienes) y uno inferior (mercado de factores), con flechas de flujo real en un sentido y de flujo monetario en el opuesto.",
      criterios: [
        { texto: "a) Distingue economía positiva (descriptiva, contrastable) de normativa (juicio de valor)", peso: 1 },
        { texto: "a) Entrega un ejemplo válido de cada tipo de afirmación", peso: 1 },
        { texto: "b) Define modelo económico como representación simplificada de la realidad", peso: 1 },
        { texto: "b) Identifica los dos agentes (hogares y empresas) y los dos mercados (bienes y factores) del flujo circular", peso: 1 },
        { texto: "b) Explica que circulan un flujo real y un flujo monetario en sentidos opuestos", peso: 1 }
      ],
      erroresComunes: [
        "Confundir economía positiva con \"opinión favorable\": lo positivo se refiere a lo descriptivo/verificable, no a algo bueno.",
        "Olvidar el mercado de factores y describir solo el mercado de bienes en el flujo circular."
      ]
    },

    {
      id: "eco-057",
      tema: "La oferta: determinantes y cambios en la oferta vs. cantidad ofrecida",
      dificultad: "facil",
      salioEnExamen: true,
      enunciado: "a) Explique la diferencia entre un cambio en la cantidad ofrecida y un cambio en la oferta, indicando qué variable provoca cada uno y cómo se representa gráficamente. 3 puntos\n\nb) Mencione tres determinantes de la oferta (distintos del precio del propio bien) e indique, para cada uno, en qué sentido desplaza la curva. 2 puntos",
      respuestaModelo: "a) Un cambio en la cantidad ofrecida es un movimiento A LO LARGO de la misma curva de oferta, provocado exclusivamente por una variación en el precio del propio bien: si el precio sube, la cantidad ofrecida aumenta (relación directa de la ley de la oferta) y viceversa.\n\nUn cambio en la oferta es un DESPLAZAMIENTO completo de la curva, provocado por variables distintas al precio del bien. Si estos factores hacen más rentable o barato producir, la curva se desplaza a la derecha (aumento de oferta); si encarecen o dificultan la producción, se desplaza a la izquierda (disminución de oferta).\n\nDescripción del gráfico esperado: en un panel, curva de oferta con pendiente positiva y un movimiento sobre la curva del punto A al B ante un cambio de precio; en otro panel, la curva O0 desplazándose paralelamente a O1 manteniendo el precio constante.\n\nb) Determinantes de la oferta (basta tres): precios de los insumos o costos de producción (si suben, la oferta se contrae a la izquierda); la tecnología (una mejora desplaza la oferta a la derecha); las expectativas de los productores; el número de vendedores en el mercado (más oferentes desplazan la oferta a la derecha); y los precios de bienes relacionados en la producción (sustitutos o complementarios en la producción).",
      criterios: [
        { texto: "a) Explica que el cambio en la cantidad ofrecida es un movimiento sobre la curva causado solo por el precio del bien", peso: 1 },
        { texto: "a) Explica que el cambio en la oferta es un desplazamiento de la curva por otras variables", peso: 1 },
        { texto: "a) Grafica correctamente ambos casos (movimiento sobre la curva y desplazamiento)", peso: 1 },
        { texto: "b) Menciona tres determinantes válidos e indica el sentido del desplazamiento de cada uno", peso: 2 }
      ],
      erroresComunes: [
        "Decir que una baja del precio del bien \"disminuye la oferta\": el precio del propio bien solo cambia la cantidad ofrecida (movimiento sobre la curva).",
        "Confundir un aumento de costos (desplaza la oferta a la izquierda) con un movimiento sobre la curva."
      ]
    },

    {
      id: "eco-058",
      tema: "Bienes públicos y el problema del polizón (free rider)",
      dificultad: "facil",
      enunciado: "Defina las dos características que distinguen a un bien público, explique con un ejemplo el problema del polizón (free rider) que generan y señale por qué el mercado tiende a proveerlos en cantidad insuficiente. 5 puntos",
      respuestaModelo: "Un bien público se define por dos características: es NO EXCLUIBLE (no es posible, o es muy costoso, impedir que alguien lo use aunque no pague) y NO RIVAL (el consumo de una persona no reduce la cantidad disponible para las demás). Ejemplos típicos: la defensa nacional, el alumbrado público, un faro o la señal de radio abierta.\n\nEl problema del polizón (free rider) surge de la no exclusión: como nadie puede ser excluido del beneficio, cada individuo tiene el incentivo a NO pagar y aprovechar el bien financiado por otros. Ejemplo: si se pide un aporte voluntario para instalar alumbrado en una calle, cada vecino preferirá que paguen los demás y disfrutar igualmente de la luz.\n\nPor esta razón, la disposición a pagar revelada es menor que el beneficio social real, y ningún oferente privado encuentra rentable producirlo (no puede cobrar a los usuarios). El resultado es que el mercado provee estos bienes en cantidad insuficiente o no los provee. Ello justifica la provisión estatal financiada con impuestos, que obligan a todos a contribuir.",
      criterios: [
        { texto: "Define correctamente las dos características: no exclusión y no rivalidad", peso: 2 },
        { texto: "Explica el problema del free rider (incentivo a no pagar por la no exclusión) con un ejemplo", peso: 2 },
        { texto: "Concluye que el mercado los provee en cantidad insuficiente y justifica la provisión estatal", peso: 1 }
      ],
      erroresComunes: [
        "Definir bien público como \"cualquier bien provisto por el Estado\": lo definen la no exclusión y la no rivalidad, no quién lo provee.",
        "Confundir bien público con recurso común: el recurso común es rival pero no excluible; el bien público no es ni rival ni excluible."
      ]
    },

    {
      id: "eco-059",
      tema: "El significado del dinero: tipos, funciones de liquidez y agregados monetarios",
      dificultad: "facil",
      enunciado: "a) Explique la diferencia entre dinero mercancía y dinero fiduciario, entregando un ejemplo de cada uno. 2 puntos\n\nb) Explique qué es la liquidez de un activo y ordene, de más a menos líquido, los siguientes: un depósito a plazo, dinero en efectivo y un bien raíz. 2 puntos\n\nc) ¿Qué diferencia hay, en términos generales, entre los agregados monetarios M1 y M2? 2 puntos",
      respuestaModelo: "a) El dinero mercancía tiene valor intrínseco: sirve como dinero pero también tiene un uso o valor propio como bien (ejemplo clásico: el oro o la plata). El dinero fiduciario NO tiene valor intrínseco; vale como dinero por decreto del Estado y por la confianza de que será aceptado (ejemplo: los billetes y monedas actuales, que son solo papel respaldado por confianza).\n\nb) La liquidez es la facilidad y rapidez con que un activo puede convertirse en medio de cambio (dinero) sin pérdida de valor. Orden de mayor a menor liquidez: (1) dinero en efectivo (es directamente medio de cambio, máxima liquidez); (2) depósito a plazo (debe esperarse o pagar costo para hacerlo líquido); (3) bien raíz (vender una propiedad es lento y costoso, mínima liquidez).\n\nc) M1 es el agregado más líquido: incluye el circulante (billetes y monedas en poder del público) más los depósitos a la vista (cuentas corrientes). M2 es más amplio: incluye M1 más activos algo menos líquidos, como los depósitos de ahorro y a plazo. En general, mientras mayor es el número del agregado (M1, M2, M3), menor es la liquidez de los instrumentos que incorpora.",
      criterios: [
        { texto: "a) Distingue dinero mercancía (valor intrínseco) de fiduciario (por decreto/confianza) con ejemplos", peso: 2 },
        { texto: "b) Define liquidez y ordena correctamente los tres activos (efectivo > depósito a plazo > bien raíz)", peso: 2 },
        { texto: "c) Explica que M1 es más líquido (circulante + depósitos a la vista) y M2 lo amplía con instrumentos menos líquidos", peso: 2 }
      ],
      erroresComunes: [
        "Creer que el dinero actual es dinero mercancía respaldado en oro: el dinero moderno es fiduciario.",
        "Ordenar un bien raíz como más líquido que un depósito por su alto valor: la liquidez mide facilidad de conversión, no el monto."
      ]
    },

    {
      id: "eco-060",
      tema: "Exportaciones netas y la balanza comercial: superávit, déficit y ahorro externo",
      dificultad: "facil",
      salioEnExamen: true,
      enunciado: "a) Defina exportaciones netas y explique qué significa que un país tenga superávit comercial y qué significa que tenga déficit comercial. 3 puntos\n\nb) Explique brevemente la relación contable entre las exportaciones netas y la diferencia entre el ahorro nacional y la inversión (Xn = S - I). 3 puntos",
      respuestaModelo: "a) Las exportaciones netas (Xn) son la diferencia entre el valor de las exportaciones y el de las importaciones (Xn = X - M); también se denominan balanza comercial. Un país tiene SUPERÁVIT comercial cuando exporta más de lo que importa (Xn > 0): vende al resto del mundo más de lo que le compra. Tiene DÉFICIT comercial cuando importa más de lo que exporta (Xn < 0): compra al resto del mundo más de lo que le vende. Si Xn = 0 el comercio está equilibrado.\n\nb) A partir de la identidad de cuentas nacionales de una economía abierta, Y = C + I + G + Xn, y sabiendo que el ahorro nacional es S = Y - C - G, se obtiene: Xn = S - I. Es decir, las exportaciones netas equivalen a la brecha entre el ahorro nacional y la inversión interna. Si un país ahorra más de lo que invierte internamente (S > I), tiene superávit comercial y presta ese exceso de ahorro al resto del mundo (salida neta de capital positiva). Si invierte más de lo que ahorra (S < I), tiene déficit comercial y financia esa diferencia con ahorro externo (endeudándose con el resto del mundo).",
      criterios: [
        { texto: "a) Define exportaciones netas como X - M (balanza comercial)", peso: 1 },
        { texto: "a) Explica correctamente superávit (Xn>0, exporta más) y déficit (Xn<0, importa más)", peso: 2 },
        { texto: "b) Presenta y explica la identidad Xn = S - I", peso: 2 },
        { texto: "b) Vincula el déficit comercial con financiamiento vía ahorro externo (S < I)", peso: 1 }
      ],
      erroresComunes: [
        "Interpretar un déficit comercial como algo necesariamente \"malo\": puede reflejar mayor inversión financiada con ahorro externo.",
        "Confundir la balanza comercial (bienes y servicios) con la cuenta corriente completa (que incluye además rentas y transferencias)."
      ]
    },

    {
      id: "eco-061",
      tema: "El punto de cierre de la empresa competitiva en el corto plazo",
      dificultad: "facil",
      enunciado: "En un mercado de competencia perfecta, explique cuál es la condición que lleva a una empresa a cerrar (dejar de producir) en el CORTO plazo y por qué esa condición se relaciona con el costo variable medio y no con el costo total medio. Explique además qué representa la curva de oferta de corto plazo de la empresa competitiva. 6 puntos",
      respuestaModelo: "Una empresa competitiva maximiza beneficios produciendo donde el precio iguala al costo marginal (P = CMg), pues el precio es su ingreso marginal. Sin embargo, en el CORTO plazo debe decidir si conviene producir o cerrar temporalmente.\n\nLa empresa cierra (produce cero) en el corto plazo si el precio cae por debajo del mínimo del costo variable medio (P < CVMe mínimo). La razón es que, en el corto plazo, los costos fijos son costos hundidos: se pagan produzca o no. Por lo tanto, la decisión relevante es si el ingreso alcanza al menos a cubrir los costos VARIABLES. Si P ≥ CVMe, cada unidad vendida cubre su costo variable y deja algo para pagar parte de los costos fijos, por lo que conviene seguir produciendo aunque haya pérdidas. Si P < CVMe, produciendo se pierde más que el costo fijo, y conviene cerrar y perder solo los costos fijos.\n\nSe usa el CVMe y no el costo total medio porque los costos fijos son inevitables en el corto plazo; solo importan los costos que se evitan al cerrar, que son los variables.\n\nLa curva de oferta de corto plazo de la empresa competitiva es, por lo tanto, el tramo de su curva de costo marginal que se ubica POR ENCIMA del mínimo del costo variable medio.\n\nDescripción del gráfico esperado: curvas CMg, CVMe y CTMe con forma de U; el punto de cierre en el mínimo del CVMe (donde el CMg lo corta); la oferta de la firma es el CMg desde ese punto hacia arriba.",
      criterios: [
        { texto: "Establece que la empresa produce donde P = CMg", peso: 1 },
        { texto: "Explica la condición de cierre de corto plazo: P < mínimo del CVMe", peso: 2 },
        { texto: "Justifica por qué se usa el CVMe y no el CTMe (los costos fijos son hundidos en el corto plazo)", peso: 2 },
        { texto: "Identifica la oferta de corto plazo como el CMg por encima del mínimo del CVMe", peso: 1 }
      ],
      erroresComunes: [
        "Usar el costo total medio como umbral de cierre de corto plazo: en el corto plazo el umbral es el costo variable medio.",
        "Confundir el punto de cierre (corto plazo, CVMe) con el punto de salida de la industria (largo plazo, CTMe)."
      ]
    },

    {
      id: "eco-062",
      tema: "Tipos de mercado: características de las cuatro estructuras de mercado",
      dificultad: "facil",
      enunciado: "Explique las cuatro grandes estructuras de mercado (competencia perfecta, competencia monopolística, oligopolio y monopolio) señalando, para cada una, el número de empresas, el tipo de producto (homogéneo o diferenciado) y la existencia o no de barreras de entrada. 6 puntos",
      respuestaModelo: "Las estructuras de mercado se clasifican según el número de vendedores, la naturaleza del producto y las barreras de entrada:\n\n(1) COMPETENCIA PERFECTA: muchas empresas pequeñas; producto homogéneo (idéntico entre vendedores); sin barreras de entrada ni salida. Las empresas son precio-aceptantes (tomadoras de precio); no tienen poder de mercado. Ejemplo aproximado: productos agrícolas básicos.\n\n(2) COMPETENCIA MONOPOLÍSTICA: muchas empresas; producto DIFERENCIADO (cada firma vende una variante con marca o características propias); sin barreras relevantes de entrada. Cada empresa tiene algo de poder de mercado por la diferenciación, pero la libre entrada disipa las utilidades en el largo plazo. Ejemplo: restaurantes, peluquerías, ropa.\n\n(3) OLIGOPOLIO: pocas empresas grandes que dominan el mercado; producto homogéneo o diferenciado; con barreras de entrada significativas. Existe interdependencia estratégica: las decisiones de una afectan a las demás (relevancia de la teoría de juegos). Ejemplo: telefonía, combustibles, retail.\n\n(4) MONOPOLIO: una sola empresa; producto único sin sustitutos cercanos; barreras de entrada muy altas o absolutas. Tiene el máximo poder de mercado y es formadora de precio. Ejemplo: una empresa sanitaria en su zona de concesión.",
      criterios: [
        { texto: "Caracteriza correctamente la competencia perfecta (muchas firmas, producto homogéneo, sin barreras, precio-aceptante)", peso: 2 },
        { texto: "Caracteriza la competencia monopolística (muchas firmas, producto diferenciado, sin barreras)", peso: 1 },
        { texto: "Caracteriza el oligopolio (pocas firmas, barreras, interdependencia estratégica)", peso: 2 },
        { texto: "Caracteriza el monopolio (una firma, sin sustitutos, barreras altas, formador de precio)", peso: 1 }
      ],
      erroresComunes: [
        "Confundir competencia monopolística con oligopolio: la primera tiene MUCHAS empresas y libre entrada; el segundo, POCAS y con barreras.",
        "Afirmar que en competencia perfecta las empresas fijan el precio: son precio-aceptantes."
      ]
    },

    {
      id: "eco-063",
      tema: "Los incentivos y el principio de pensar en el margen",
      dificultad: "facil",
      enunciado: "a) Explique qué significa que \"las personas racionales piensan en términos marginales\" y por qué una decisión se justifica cuando el beneficio marginal supera al costo marginal. 3 puntos\n\nb) Explique, con un ejemplo, por qué los agentes económicos responden a incentivos y cómo una política pública puede generar efectos no buscados al alterarlos. 3 puntos",
      respuestaModelo: "a) Pensar en el margen significa evaluar los cambios ADICIONALES o incrementales de una decisión, en lugar de razonar en términos de \"todo o nada\". Un agente racional realiza una acción adicional (producir una unidad más, estudiar una hora más) solo si el beneficio marginal (el beneficio de esa unidad extra) es mayor o igual que el costo marginal (el costo de esa unidad extra). Mientras BMg > CMg conviene seguir; el óptimo se alcanza cuando BMg = CMg. Los costos ya incurridos e irrecuperables (hundidos) no deben influir en la decisión marginal.\n\nb) Un incentivo es algo que induce a actuar (una recompensa o un castigo). Como las personas comparan beneficios y costos, un cambio en estos altera su conducta. Ejemplo: un impuesto a los combustibles encarece conducir e incentiva usar transporte público. Efecto no buscado: una ley que exige cinturones de seguridad puede hacer que los conductores se sientan más seguros y conduzcan con menos cuidado, aumentando accidentes de peatones. Al diseñar políticas hay que anticipar cómo los agentes reaccionarán a los nuevos incentivos, pues pueden aparecer efectos secundarios contrarios al objetivo.",
      criterios: [
        { texto: "a) Explica el razonamiento marginal (cambios incrementales) y la regla BMg vs CMg", peso: 2 },
        { texto: "a) Señala que el óptimo se da cuando BMg = CMg (o ignora costos hundidos)", peso: 1 },
        { texto: "b) Explica que los agentes responden a incentivos comparando beneficios y costos, con un ejemplo", peso: 2 },
        { texto: "b) Ilustra un efecto no buscado de una política al alterar incentivos", peso: 1 }
      ],
      erroresComunes: [
        "Confundir el análisis marginal con el promedio: la decisión óptima depende del margen, no del valor medio.",
        "Incorporar costos hundidos en la decisión marginal: solo importan los beneficios y costos adicionales futuros."
      ]
    },

    {
      id: "eco-064",
      tema: "El PIB y sus limitaciones como medida de bienestar",
      dificultad: "facil",
      enunciado: "El PIB per cápita se usa habitualmente como indicador del nivel de vida de un país. Explique tres limitaciones o problemas del PIB como medida del bienestar de una sociedad. 6 puntos",
      respuestaModelo: "El PIB mide el valor de mercado de la producción de bienes y servicios finales, y el PIB per cápita se asocia al nivel de vida promedio. Sin embargo, como medida del BIENESTAR presenta varias limitaciones (basta explicar tres):\n\n(1) No incluye actividades fuera del mercado: el trabajo doméstico no remunerado, el cuidado de hijos o el autoconsumo no se contabilizan, pese a generar bienestar. Tampoco capta bien la economía informal.\n\n(2) No refleja la distribución del ingreso: un mismo PIB per cápita puede corresponder a una sociedad equitativa o a una muy desigual; el promedio oculta cómo se reparte.\n\n(3) No valora el ocio ni la calidad de vida: dos países con igual PIB pueden diferir en horas trabajadas, seguridad o salud.\n\n(4) No descuenta externalidades ni el deterioro ambiental: la contaminación o el agotamiento de recursos naturales asociados a la producción no se restan; incluso un desastre que obliga a reconstruir puede aumentar el PIB.\n\n(5) No mide directamente bienes intangibles como salud, educación o felicidad. Por ello se complementa con indicadores como el Índice de Desarrollo Humano (IDH).",
      criterios: [
        { texto: "Reconoce que el PIB mide producción de mercado y se usa como proxy del nivel de vida", peso: 1 },
        { texto: "Explica una primera limitación válida (actividades fuera del mercado / informalidad)", peso: 2 },
        { texto: "Explica una segunda limitación válida (distribución del ingreso o desigualdad)", peso: 2 },
        { texto: "Explica una tercera limitación válida (ocio, medio ambiente, salud u otro indicador de calidad de vida)", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que el PIB mide directamente la felicidad o la calidad de vida: mide producción, no bienestar.",
        "Olvidar que el PIB no considera la distribución del ingreso al usar el promedio per cápita."
      ]
    },

    {
      id: "eco-065",
      tema: "La curva de demanda agregada: por qué tiene pendiente negativa",
      dificultad: "facil",
      enunciado: "Explique por qué la curva de demanda agregada tiene pendiente negativa, describiendo los tres efectos (riqueza, tasa de interés y tipo de cambio) que hacen que una caída del nivel general de precios aumente la cantidad demandada de bienes y servicios. 6 puntos",
      respuestaModelo: "La demanda agregada (DA) relaciona el nivel general de precios (P) con la cantidad total de bienes y servicios demandados (Y = C + I + G + Xn). Tiene pendiente NEGATIVA: cuando el nivel de precios baja, la cantidad demandada de producción aumenta. A diferencia de una demanda de un bien, aquí no opera la sustitución hacia otros bienes (baja el precio de todo), sino tres efectos:\n\n(1) EFECTO RIQUEZA (o Pigou): una caída del nivel de precios aumenta el valor real del dinero y de los activos nominales que poseen las personas; se sienten más ricas y consumen más. Sube C.\n\n(2) EFECTO TASA DE INTERÉS (o Keynes): un menor nivel de precios reduce la cantidad de dinero que la gente necesita para transacciones; el exceso de saldos se presta o deposita, bajando la tasa de interés. Una tasa menor estimula la inversión y el consumo de bienes durables. Sube I (y C).\n\n(3) EFECTO TIPO DE CAMBIO (o Mundell-Fleming): al bajar la tasa de interés interna, sale capital hacia el exterior, se deprecia la moneda local, se abaratan las exportaciones y se encarecen las importaciones. Suben las exportaciones netas Xn.\n\nLos tres efectos operan en la misma dirección: una baja de P eleva C, I y Xn, aumentando la cantidad demandada de producción. Por eso la DA es decreciente.\n\nDescripción del gráfico esperado: ejes P (nivel de precios) y Y (producción); curva DA con pendiente negativa.",
      criterios: [
        { texto: "Explica el efecto riqueza (menor P eleva el valor real del dinero y el consumo)", peso: 2 },
        { texto: "Explica el efecto tasa de interés (menor P baja la tasa y estimula la inversión)", peso: 2 },
        { texto: "Explica el efecto tipo de cambio (menor tasa deprecia la moneda y sube Xn)", peso: 1 },
        { texto: "Concluye que los tres efectos hacen la DA decreciente y grafica correctamente (P vs Y)", peso: 1 }
      ],
      erroresComunes: [
        "Explicar la pendiente de la DA por el efecto sustitución entre bienes, como en una demanda microeconómica: en la DA baja el precio de TODOS los bienes.",
        "Confundir la demanda agregada con la demanda de un bien individual."
      ]
    },

    // ---- MEDIAS ----

    {
      id: "eco-066",
      tema: "El óptimo del consumidor: restricción presupuestaria y condición de tangencia",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Un consumidor distribuye su ingreso entre dos bienes, X e Y.\n\na) Explique qué representa la restricción presupuestaria y qué representa una curva de indiferencia. 2 puntos\n\nb) Explique y grafique cuál es la condición de óptimo del consumidor y por qué en ese punto la relación marginal de sustitución se iguala al cociente de precios. 4 puntos",
      respuestaModelo: "a) La RESTRICCIÓN PRESUPUESTARIA representa todas las combinaciones de los bienes X e Y que el consumidor puede comprar gastando exactamente su ingreso, dados los precios. Es una recta con pendiente negativa igual a menos el cociente de precios (-Px/Py): indica a cuántas unidades de Y hay que renunciar para comprar una unidad más de X en el mercado.\n\nUna CURVA DE INDIFERENCIA representa todas las combinaciones de X e Y que le dan al consumidor el MISMO nivel de satisfacción (utilidad). Tiene pendiente negativa y es convexa al origen; su pendiente en valor absoluto es la relación marginal de sustitución (RMS), que mide cuántas unidades de Y está dispuesto a ceder por una unidad más de X manteniendo su utilidad.\n\nb) El consumidor maximiza su bienestar eligiendo la combinación sobre la restricción presupuestaria que le permite alcanzar la curva de indiferencia MÁS ALTA posible. Ese punto es aquel donde la curva de indiferencia es TANGENTE a la recta presupuestaria. En la tangencia, la pendiente de la curva de indiferencia (RMS) se iguala a la pendiente de la restricción (Px/Py): RMS = Px/Py.\n\nLa intuición: la RMS es la valoración SUBJETIVA (cuánto Y está dispuesto a ceder por X) y Px/Py es la tasa de intercambio del MERCADO. Si RMS > Px/Py, el consumidor valora X más de lo que cuesta y conviene comprar más X; si RMS < Px/Py, conviene lo contrario. Solo cuando se igualan no hay reasignación que mejore su bienestar.\n\nDescripción del gráfico esperado: ejes X e Y; recta presupuestaria decreciente; varias curvas de indiferencia; el óptimo en el punto de tangencia entre la recta y la curva de indiferencia más alta alcanzable.",
      criterios: [
        { texto: "a) Explica la restricción presupuestaria (combinaciones asequibles, pendiente -Px/Py)", peso: 1 },
        { texto: "a) Explica la curva de indiferencia (igual utilidad, convexa, pendiente = RMS)", peso: 1 },
        { texto: "b) Identifica el óptimo como tangencia con la curva de indiferencia más alta alcanzable", peso: 2 },
        { texto: "b) Justifica la condición RMS = Px/Py comparando valoración subjetiva con tasa de mercado", peso: 1 },
        { texto: "b) Grafica correctamente la tangencia entre restricción y curva de indiferencia", peso: 1 }
      ],
      erroresComunes: [
        "Ubicar el óptimo en una curva de indiferencia que corta la restricción (no la tangencia): allí siempre existe una asignación mejor.",
        "Confundir la RMS (valoración subjetiva del consumidor) con el cociente de precios (dato del mercado)."
      ]
    },

    {
      id: "eco-067",
      tema: "Bienes inferiores y bienes Giffen: efecto renta y efecto sustitución opuestos",
      dificultad: "media",
      enunciado: "a) Explique la diferencia entre un bien normal, un bien inferior y un bien Giffen en términos del efecto renta y el efecto sustitución ante una baja de su precio. 4 puntos\n\nb) ¿Por qué la curva de demanda de un bien Giffen tiene pendiente positiva y por qué es un caso muy excepcional? 2 puntos",
      respuestaModelo: "a) Ante una baja del precio de un bien, la variación de la cantidad demandada se descompone en dos efectos: el efecto SUSTITUCIÓN (el bien se abarata en relación a otros, por lo que siempre induce a consumir MÁS de él) y el efecto RENTA (al abaratarse, el poder adquisitivo real aumenta, y el consumidor puede comprar más de todos los bienes).\n\n- Bien NORMAL: el efecto renta es positivo (más ingreso real, más consumo del bien) y refuerza al efecto sustitución. La cantidad demandada aumenta claramente; demanda con pendiente negativa.\n\n- Bien INFERIOR: el efecto renta es NEGATIVO (al tener más ingreso real, se consume menos del bien, como pan corriente si se puede comprar algo mejor), oponiéndose al efecto sustitución. Aun así, en un bien inferior típico el efecto sustitución domina, por lo que la cantidad demandada igual sube; demanda con pendiente negativa.\n\n- Bien GIFFEN: es un bien inferior extremo en el que el efecto renta negativo es TAN grande que SUPERA al efecto sustitución. Ante una baja de precio, la cantidad demandada CAE.\n\nb) En un bien Giffen la demanda tiene pendiente POSITIVA: si baja el precio, se demanda menos, y si sube, se demanda más. Es un caso muy excepcional porque requiere un bien inferior que además absorba una parte muy grande del presupuesto (bienes de subsistencia en contextos de pobreza), de modo que el efecto renta negativo domine. Casi no se observa en la práctica.",
      criterios: [
        { texto: "a) Descompone la baja de precio en efecto sustitución (siempre eleva consumo del bien) y efecto renta", peso: 2 },
        { texto: "a) Distingue bien normal (renta refuerza), inferior (renta se opone pero sustitución domina) y Giffen (renta domina)", peso: 2 },
        { texto: "b) Explica que la demanda del bien Giffen tiene pendiente positiva y por qué es excepcional (inferior y gran peso presupuestario)", peso: 2 }
      ],
      erroresComunes: [
        "Afirmar que todo bien inferior es un bien Giffen: en el bien inferior típico el efecto sustitución domina y la demanda es decreciente.",
        "Confundir el efecto sustitución con el efecto renta: el de sustitución siempre aumenta el consumo del bien que se abarata."
      ]
    },

    {
      id: "eco-068",
      tema: "De la demanda individual a la demanda de mercado: suma horizontal",
      dificultad: "media",
      enunciado: "Explique cómo se obtiene la curva de demanda de mercado a partir de las curvas de demanda individuales de los consumidores. Explique por qué se realiza una suma \"horizontal\" y no \"vertical\", y qué ocurre con la demanda de mercado si aumenta el número de compradores. 6 puntos",
      respuestaModelo: "La demanda de mercado de un bien es la suma de las demandas individuales de todos los consumidores de ese bien. Se construye sumando, PARA CADA NIVEL DE PRECIO, las cantidades que cada consumidor está dispuesto a comprar a ese precio.\n\nEs una suma HORIZONTAL porque se fija un precio (una altura en el eje vertical) y se suman las CANTIDADES demandadas (medidas en el eje horizontal) de todos los individuos a ese precio. Se repite el procedimiento para cada precio y se obtiene la curva de mercado. No es una suma vertical (que sumaría precios a una cantidad dada); la suma vertical se usa en otro contexto, el de bienes públicos, donde todos consumen la misma cantidad y se suman las disposiciones a pagar.\n\nSi AUMENTA el número de compradores, a cada precio hay más cantidad total demandada, por lo que la curva de demanda de mercado se desplaza hacia la DERECHA (aumenta la demanda). Si disminuyen los compradores, se desplaza a la izquierda.\n\nDescripción del gráfico esperado: dos demandas individuales (D1 y D2) y la demanda de mercado obtenida sumando horizontalmente las cantidades a cada precio; la de mercado es más \"plana\" y está más a la derecha.",
      criterios: [
        { texto: "Explica que la demanda de mercado suma las demandas individuales a cada nivel de precio", peso: 2 },
        { texto: "Justifica que la suma es horizontal (se suman cantidades a un precio dado) y no vertical", peso: 2 },
        { texto: "Explica que más compradores desplazan la demanda de mercado a la derecha", peso: 1 },
        { texto: "Grafica o describe correctamente la suma horizontal de las curvas", peso: 1 }
      ],
      erroresComunes: [
        "Sumar verticalmente las demandas individuales: esa suma corresponde a bienes públicos, no a un bien privado.",
        "Confundir el efecto de más compradores (desplazamiento de la curva) con un movimiento sobre la curva."
      ]
    },

    {
      id: "eco-069",
      tema: "El monopolio: equilibrio con IMg = CMg, poder de mercado e índice de Lerner",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "a) Explique y grafique cómo determina un monopolista su cantidad y su precio, y por qué su ingreso marginal es menor que el precio. 4 puntos\n\nb) Explique qué mide el índice de Lerner y por qué el precio de monopolio supera al costo marginal, generando pérdida social. 3 puntos",
      respuestaModelo: "a) El monopolista es el único oferente y enfrenta la curva de demanda de mercado, con pendiente negativa. Como cualquier empresa, maximiza beneficios produciendo donde el INGRESO MARGINAL se iguala al COSTO MARGINAL (IMg = CMg). Pero, a diferencia de la competencia, su ingreso marginal es MENOR que el precio (IMg < P): para vender una unidad adicional debe bajar el precio, y esa rebaja se aplica a TODAS las unidades, no solo a la última. Por eso la curva de IMg queda por debajo de la demanda.\n\nUna vez hallada la cantidad óptima Qm (donde IMg = CMg), el monopolista cobra el PRECIO MÁXIMO que los consumidores están dispuestos a pagar por esa cantidad, leído en la curva de demanda (Pm), que es mayor que el CMg.\n\nDescripción del gráfico esperado: demanda decreciente; curva de IMg por debajo de la demanda (con doble pendiente); curva de CMg; la cantidad Qm se determina donde IMg = CMg y el precio Pm se lee subiendo hasta la demanda; se marca que Pm > CMg.\n\nb) El índice de Lerner mide el poder de mercado como la brecha relativa entre precio y costo marginal: L = (P - CMg) / P. Vale cero en competencia perfecta (P = CMg) y es mayor mientras más poder de mercado, es decir, mientras más inelástica sea la demanda que enfrenta la empresa.\n\nEl monopolista fija P > CMg, por lo que produce MENOS de lo socialmente óptimo: existen unidades cuyo valor para los consumidores (demanda) supera su costo marginal y que no se producen. Esas transacciones perdidas constituyen la pérdida irrecuperable de eficiencia social (triángulo entre la demanda y el CMg, entre Qm y la cantidad competitiva).",
      criterios: [
        { texto: "a) Establece que el monopolista produce donde IMg = CMg y cobra el precio de la demanda", peso: 2 },
        { texto: "a) Explica por qué IMg < P (bajar el precio afecta a todas las unidades) y grafica correctamente", peso: 2 },
        { texto: "b) Define el índice de Lerner L = (P - CMg)/P como medida de poder de mercado", peso: 1 },
        { texto: "b) Explica que P > CMg genera subproducción y pérdida social", peso: 2 }
      ],
      erroresComunes: [
        "Igualar el ingreso marginal al precio en el monopolio: solo ocurre en competencia perfecta; en monopolio IMg < P.",
        "Decir que el monopolista fija cantidad y precio de forma independiente: elige la cantidad (IMg=CMg) y el precio queda determinado por la demanda."
      ]
    },

    {
      id: "eco-070",
      tema: "Fuentes del poder de monopolio y barreras a la entrada",
      dificultad: "media",
      enunciado: "Explique cuáles son las principales fuentes o barreras de entrada que dan origen y sostienen el poder de monopolio de una empresa. Desarrolle al menos tres, con un ejemplo cada una. 6 puntos",
      respuestaModelo: "El poder de monopolio se sostiene en la existencia de BARRERAS DE ENTRADA que impiden que nuevas empresas ingresen y compitan. Las principales fuentes son (basta desarrollar tres):\n\n(1) Control de un recurso o insumo clave: una empresa que posee o controla un recurso escaso indispensable para producir. Ejemplo: una firma dueña de la única mina de un mineral en una región.\n\n(2) Monopolio natural (economías de escala): cuando los costos fijos son tan altos y el costo medio es decreciente en todo el tramo relevante, una sola empresa abastece a menor costo que varias. La entrada de un competidor sería ineficiente. Ejemplo: distribución de agua potable, transmisión eléctrica.\n\n(3) Barreras legales o institucionales: el Estado otorga derechos exclusivos. Ejemplo: patentes que protegen una invención por un tiempo, licencias, concesiones o derechos de autor.\n\n(4) Ventajas estratégicas o tecnológicas: una tecnología superior, una marca muy posicionada, o efectos de red (el valor del producto crece con el número de usuarios), que dificultan la entrada.\n\nMientras más altas y duraderas las barreras, mayor y más sostenible es el poder de mercado. La ausencia de barreras, en cambio, erosiona el poder de mercado por la amenaza de entrada.",
      criterios: [
        { texto: "Explica que el poder de monopolio se sostiene en barreras de entrada", peso: 1 },
        { texto: "Desarrolla una primera fuente con ejemplo (control de recurso clave)", peso: 2 },
        { texto: "Desarrolla una segunda fuente con ejemplo (monopolio natural / economías de escala)", peso: 2 },
        { texto: "Desarrolla una tercera fuente con ejemplo (barrera legal, patente, marca o efectos de red)", peso: 1 }
      ],
      erroresComunes: [
        "Confundir tener muchos clientes con tener poder de monopolio: el poder proviene de barreras que impiden la competencia, no del tamaño per se.",
        "Omitir que sin barreras de entrada el poder de mercado tiende a desaparecer por la amenaza de nuevos competidores."
      ]
    },

    {
      id: "eco-071",
      tema: "La producción y el costo: del producto marginal del trabajo al costo marginal",
      dificultad: "media",
      enunciado: "Explique la relación entre el producto marginal del trabajo y el costo marginal de la empresa. En particular, explique por qué, cuando rige la ley de los rendimientos marginales decrecientes, el costo marginal es creciente. 6 puntos",
      respuestaModelo: "El producto marginal del trabajo (PMgL) es la producción adicional que genera un trabajador extra. El costo marginal (CMg) es el costo de producir una unidad adicional de producto. Ambos están conectados por el costo del factor: si contratar un trabajador cuesta un salario w y ese trabajador produce PMgL unidades, entonces el costo de cada unidad adicional es CMg = w / PMgL.\n\nDe esta relación INVERSA se desprende: cuando el PMgL es alto, el CMg es bajo (cada trabajador rinde mucho, por lo que cada unidad cuesta poco); cuando el PMgL es bajo, el CMg es alto.\n\nLa ley de los rendimientos marginales decrecientes establece que, manteniendo fijos los demás factores (capital), a medida que se añaden más unidades de trabajo, el producto marginal del trabajo TERMINA decreciendo (los trabajadores adicionales tienen menos capital con que trabajar). Al caer el PMgL, y siendo CMg = w/PMgL, el costo marginal AUMENTA. Por eso la curva de costo marginal es creciente en el tramo relevante: es el reflejo, \"dado vuelta\", de un producto marginal decreciente.\n\nDescripción del gráfico esperado (opcional): un panel con PMgL decreciente y otro con CMg creciente, mostrando la relación de espejo entre ambos.",
      criterios: [
        { texto: "Define producto marginal del trabajo y costo marginal", peso: 1 },
        { texto: "Establece la relación CMg = w / PMgL (relación inversa)", peso: 2 },
        { texto: "Explica la ley de rendimientos marginales decrecientes (factor fijo, PMgL cae al añadir trabajo)", peso: 2 },
        { texto: "Concluye que un PMgL decreciente implica un CMg creciente", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que el producto marginal decreciente se debe a trabajadores \"menos capaces\": se debe a que hay cada vez menos capital por trabajador, con los demás factores fijos.",
        "Suponer una relación directa entre PMgL y CMg: la relación es inversa."
      ]
    },

    {
      id: "eco-072",
      tema: "Costos de corto y largo plazo: la curva de costo medio de largo plazo como envolvente",
      dificultad: "media",
      enunciado: "Explique la diferencia entre el corto y el largo plazo en las decisiones de producción, y explique por qué la curva de costo medio de largo plazo (CMeLP) es la \"envolvente\" de las curvas de costo medio de corto plazo. Relacione su forma con las economías y deseconomías de escala. 6 puntos",
      respuestaModelo: "El CORTO plazo es el período en que al menos un factor productivo es fijo (típicamente el capital o el tamaño de planta): la empresa solo puede variar los factores variables (como el trabajo). El LARGO plazo es el período en que TODOS los factores son variables: la empresa puede cambiar incluso el tamaño de su planta y no hay costos fijos.\n\nCada tamaño de planta posible tiene su propia curva de costo medio de corto plazo (CMeCP). En el largo plazo, la empresa puede ELEGIR el tamaño de planta que minimiza el costo medio para el nivel de producción que desea. La curva de costo medio de largo plazo (CMeLP) se forma tomando, para cada nivel de producción, el menor costo medio alcanzable entre todas las plantas posibles. Por eso es la curva ENVOLVENTE (por abajo) de las curvas de costo medio de corto plazo: es tangente a cada una en el tramo donde esa planta es la más eficiente.\n\nLa forma en U del CMeLP se explica por: (1) ECONOMÍAS DE ESCALA en el tramo decreciente: al aumentar la escala, el costo medio de largo plazo cae (especialización, indivisibilidades, mejor uso de la capacidad); (2) rendimientos constantes en el mínimo (escala eficiente mínima); (3) DESECONOMÍAS DE ESCALA en el tramo creciente: plantas demasiado grandes elevan el costo medio (dificultades de coordinación y gestión).\n\nDescripción del gráfico esperado: varias curvas CMeCP en forma de U y la CMeLP tangente por debajo a todas ellas, también en forma de U.",
      criterios: [
        { texto: "Distingue corto plazo (algún factor fijo) de largo plazo (todos los factores variables)", peso: 2 },
        { texto: "Explica que la empresa elige en el largo plazo el tamaño de planta que minimiza el costo medio", peso: 1 },
        { texto: "Explica que la CMeLP es la envolvente inferior de las CMeCP", peso: 2 },
        { texto: "Relaciona la forma de la CMeLP con economías y deseconomías de escala", peso: 1 }
      ],
      erroresComunes: [
        "Creer que la CMeLP pasa por los mínimos de todas las curvas de corto plazo: solo es tangente al mínimo de la planta de escala eficiente; en el resto es tangente en otros puntos.",
        "Confundir rendimientos marginales decrecientes (corto plazo, factor fijo) con deseconomías de escala (largo plazo, todos los factores variables)."
      ]
    },

    {
      id: "eco-073",
      tema: "Teoría de juegos: juegos secuenciales, árbol de decisión e inducción hacia atrás",
      dificultad: "media",
      enunciado: "En muchos mercados las empresas deciden por turnos (una observa lo que hace la otra antes de mover). Explique qué es un juego secuencial y cómo se resuelve mediante inducción hacia atrás. Ilustre con un ejemplo de una empresa establecida que decide si expandir capacidad y una entrante que decide si ingresar al mercado. 7 puntos",
      respuestaModelo: "Un juego secuencial es una interacción estratégica en la que los jugadores mueven POR TURNOS y el que juega después observa la decisión del que jugó antes. Se representa con un ÁRBOL DE DECISIÓN (forma extensiva): nodos que indican quién decide, ramas que indican las acciones posibles y, al final, los pagos de cada jugador.\n\nSe resuelve por INDUCCIÓN HACIA ATRÁS: se analiza primero la decisión del ÚLTIMO jugador en cada rama (qué le conviene hacer al final), y con esa respuesta óptima anticipada se retrocede para determinar qué le conviene al jugador que decide antes. Así se obtiene el resultado del juego (equilibrio) considerando que cada uno anticipa la reacción racional del otro.\n\nEjemplo: la empresa ESTABLECIDA decide primero si expande su capacidad (lo que le permitiría inundar el mercado y bajar precios) o no. Luego la ENTRANTE decide si ingresa o no. Por inducción hacia atrás: si la establecida expandió capacidad, entrar sería poco rentable para la entrante (habría exceso de oferta y precios bajos), por lo que NO entra; si la establecida no expandió, entrar sería rentable, por lo que SÍ entra. Anticipando esto, a la establecida puede convenirle expandir capacidad como forma de DISUADIR la entrada, siempre que la amenaza sea creíble (que la inversión ya esté hecha).\n\nDescripción del árbol esperado: nodo inicial de la establecida (expandir / no expandir); en cada rama, nodo de la entrante (entrar / no entrar); pagos en las hojas.",
      criterios: [
        { texto: "Define juego secuencial (movimientos por turnos, información del movimiento previo)", peso: 2 },
        { texto: "Explica la representación mediante árbol de decisión (forma extensiva)", peso: 1 },
        { texto: "Explica la inducción hacia atrás (resolver desde la última decisión hacia la primera)", peso: 2 },
        { texto: "Aplica correctamente el método al ejemplo de expansión de capacidad y decisión de entrada", peso: 2 }
      ],
      erroresComunes: [
        "Resolver un juego secuencial como si fuera simultáneo, ignorando que el segundo jugador observa al primero.",
        "Olvidar que la disuasión de entrada requiere que la amenaza sea creíble (compromiso previo), no una simple declaración."
      ]
    },

    {
      id: "eco-074",
      tema: "Regulación de la libre competencia: rol de la FNE y el TDLC en Chile",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "En Chile existe una institucionalidad para defender la libre competencia. Explique el rol de la Fiscalía Nacional Económica (FNE) y del Tribunal de Defensa de la Libre Competencia (TDLC), y describa dos tipos de conductas o situaciones que esta institucionalidad busca prevenir o sancionar. 6 puntos",
      respuestaModelo: "La institucionalidad de libre competencia busca proteger el funcionamiento eficiente de los mercados frente a conductas que reducen la competencia y perjudican a consumidores y al bienestar social.\n\nLa FISCALÍA NACIONAL ECONÓMICA (FNE) es el organismo INVESTIGADOR y persecutor: investiga de oficio o por denuncia posibles atentados contra la libre competencia, reúne antecedentes, puede realizar interrogatorios y allanamientos con autorización, y presenta requerimientos ante el tribunal. También revisa fusiones y adquisiciones (control de operaciones de concentración).\n\nEl TRIBUNAL DE DEFENSA DE LA LIBRE COMPETENCIA (TDLC) es el órgano JURISDICCIONAL especializado: conoce y RESUELVE los casos, dicta sentencias, impone multas y medidas correctivas, y puede establecer condiciones a las fusiones. Sus fallos pueden ser revisados por la Corte Suprema.\n\nConductas o situaciones que se busca prevenir o sancionar (basta dos): (1) COLUSIÓN o carteles: acuerdos entre competidores para fijar precios, repartirse mercados o limitar la producción (es la conducta más grave). (2) ABUSO DE POSICIÓN DOMINANTE: una empresa con poder de mercado que impone precios abusivos, discrimina o pone barreras para excluir competidores. (3) FUSIONES que reducen sustancialmente la competencia y podrían crear o reforzar poder de mercado.",
      criterios: [
        { texto: "Explica el rol investigador y persecutor de la FNE (investiga y requiere ante el tribunal)", peso: 2 },
        { texto: "Explica el rol jurisdiccional del TDLC (resuelve, sanciona, impone medidas)", peso: 2 },
        { texto: "Describe correctamente dos conductas o situaciones sancionables (colusión, abuso de posición dominante, fusiones anticompetitivas)", peso: 2 }
      ],
      erroresComunes: [
        "Confundir los roles: la FNE investiga y acusa, pero es el TDLC quien juzga y sanciona.",
        "Creer que la ley prohíbe ser monopolio: se sanciona el abuso y las conductas anticompetitivas, no el tamaño o la posición dominante en sí."
      ]
    },

    {
      id: "eco-075",
      tema: "Sindicatos y negociación colectiva en el mercado laboral",
      dificultad: "media",
      enunciado: "Explique cómo influyen los sindicatos y la negociación colectiva en el mercado del trabajo. Analice sus efectos sobre los salarios y el empleo de los trabajadores sindicalizados, y mencione un argumento a favor y uno en contra de los sindicatos. 6 puntos",
      respuestaModelo: "Un sindicato es una asociación de trabajadores que negocia colectivamente con los empleadores las condiciones laborales (salarios, jornada, beneficios). Al negociar en bloque, los trabajadores obtienen mayor poder de negociación que si lo hicieran individualmente; en el extremo, el sindicato actúa como un oferente con poder de mercado sobre el trabajo (similar a un monopolio del lado de la oferta laboral).\n\nEfecto sobre salarios y empleo: mediante la negociación (y la amenaza de huelga), el sindicato consigue un salario POR SOBRE el que habría en un mercado competitivo. Ese salario más alto beneficia a los trabajadores que conservan su empleo, pero, al encarecer el trabajo, tiende a REDUCIR la cantidad de empleo demandada por las empresas en ese sector. Se genera así un grupo de \"insiders\" (sindicalizados con mejores salarios) y \"outsiders\" (quienes quedan fuera y pueden desplazarse a sectores no sindicalizados, presionando allí los salarios a la baja).\n\nArgumento A FAVOR: equilibran el poder de negociación frente a empleadores grandes, pueden reducir costos de coordinación y mejorar condiciones y voz de los trabajadores, aumentando la productividad y reduciendo la rotación. Argumento EN CONTRA: al elevar salarios por sobre el equilibrio, pueden generar desempleo en el sector y una asignación menos eficiente del trabajo, perjudicando a los no sindicalizados.",
      criterios: [
        { texto: "Explica qué es un sindicato y cómo la negociación colectiva aumenta el poder de negociación de los trabajadores", peso: 2 },
        { texto: "Analiza el efecto: mayor salario para los sindicalizados y menor empleo demandado en el sector", peso: 2 },
        { texto: "Presenta un argumento a favor de los sindicatos", peso: 1 },
        { texto: "Presenta un argumento en contra de los sindicatos", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que los sindicatos aumentan salario y empleo simultáneamente: el mayor salario tiende a reducir la cantidad demandada de trabajo.",
        "Ignorar el efecto sobre los trabajadores no sindicalizados (outsiders)."
      ]
    },

    {
      id: "eco-076",
      tema: "Salarios de eficiencia y desempleo involuntario",
      dificultad: "media",
      enunciado: "Explique la teoría de los salarios de eficiencia: por qué a una empresa puede convenirle pagar un salario POR SOBRE el de equilibrio de forma voluntaria, y cómo esto contribuye a explicar la existencia de desempleo involuntario. Mencione al menos dos mecanismos por los que un mayor salario elevaría la productividad. 6 puntos",
      respuestaModelo: "La teoría de los salarios de eficiencia sostiene que a las empresas puede CONVENIRLES pagar salarios superiores al de equilibrio del mercado, porque un salario más alto AUMENTA la productividad de los trabajadores, y ese mayor rendimiento compensa (o supera) el mayor costo salarial. A diferencia de los salarios mínimos o los sindicatos, aquí el salario elevado lo fija la propia empresa voluntariamente.\n\nMecanismos por los que un mayor salario eleva la productividad (basta dos): (1) MENOR ROTACIÓN: un buen salario reduce la renuncia de trabajadores, ahorrando costos de reclutamiento y capacitación. (2) MAYOR ESFUERZO / menor \"shirking\": si perder el empleo es costoso (porque el salario es bueno), el trabajador se esfuerza más para no ser despedido, reduciendo la necesidad de supervisión. (3) MEJOR SELECCIÓN: un salario alto atrae y retiene a los trabajadores más capaces (reduce la selección adversa). (4) SALUD Y MORAL: mejores salarios pueden mejorar la salud, nutrición y motivación.\n\nRelación con el desempleo INVOLUNTARIO: si muchas empresas pagan por sobre el equilibrio para retener y motivar personal, el salario de mercado se mantiene alto y la cantidad demandada de trabajo es menor que la ofrecida. Se genera un exceso de oferta de trabajo: personas dispuestas a trabajar al salario vigente que no encuentran empleo (desempleo involuntario), que persiste porque a las empresas NO les conviene bajar el salario.",
      criterios: [
        { texto: "Explica que la empresa paga voluntariamente por sobre el equilibrio porque eleva la productividad", peso: 2 },
        { texto: "Explica dos mecanismos válidos (rotación, esfuerzo/shirking, selección, salud/moral)", peso: 2 },
        { texto: "Vincula los salarios de eficiencia con el desempleo involuntario (exceso de oferta que persiste)", peso: 2 }
      ],
      erroresComunes: [
        "Confundir salarios de eficiencia con salario mínimo legal: el de eficiencia lo fija voluntariamente la empresa, no la ley.",
        "Afirmar que a la empresa nunca le conviene pagar más que el equilibrio: sí le conviene si el aumento de productividad compensa el mayor costo."
      ]
    },

    {
      id: "eco-077",
      tema: "El efecto multiplicador del gasto y la política fiscal expansiva",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "El gobierno decide aumentar el gasto público en obras de infraestructura para reactivar la economía.\n\na) Explique en qué consiste el efecto multiplicador del gasto y por qué un aumento del gasto público puede elevar la demanda agregada en un monto MAYOR al gasto inicial. 4 puntos\n\nb) Explique qué es el efecto expulsión (crowding out) y por qué puede ATENUAR el impacto del multiplicador. 2 puntos",
      respuestaModelo: "a) El efecto multiplicador señala que un aumento inicial del gasto público genera aumentos SUCESIVOS del consumo, de modo que la demanda agregada crece más que el gasto inicial. El mecanismo: el gasto del gobierno (por ejemplo, en construcción) se convierte en ingreso para trabajadores y empresas proveedoras; estos, a su vez, gastan una parte de ese mayor ingreso en consumo, generando ingreso para otros, que vuelven a gastar una fracción, y así sucesivamente en rondas decrecientes.\n\nLa magnitud depende de la propensión marginal a consumir (PMgC), la fracción de cada peso adicional de ingreso que se destina a consumo. Mientras mayor sea la PMgC, más se regasta en cada ronda y mayor es el multiplicador. Así, la demanda agregada se desplaza a la derecha en un monto que supera al gasto inicial.\n\nDescripción del gráfico esperado (opcional): la curva de demanda agregada DA0 se desplaza a DA1 en una magnitud mayor que el gasto inicial G.\n\nb) El efecto EXPULSIÓN (crowding out) ocurre porque el mayor gasto público, especialmente si se financia con deuda, aumenta la demanda de fondos prestables y presiona AL ALZA la tasa de interés. Una tasa de interés más alta desincentiva la inversión privada (y el consumo de durables), que se \"expulsa\". Esta caída de la inversión privada compensa parcialmente el impulso fiscal, por lo que el efecto neto sobre la demanda agregada es MENOR que el que sugeriría el multiplicador puro.",
      criterios: [
        { texto: "a) Explica el mecanismo del multiplicador (rondas sucesivas de gasto e ingreso)", peso: 2 },
        { texto: "a) Relaciona el tamaño del multiplicador con la propensión marginal a consumir", peso: 1 },
        { texto: "a) Concluye que la DA aumenta más que el gasto inicial", peso: 1 },
        { texto: "b) Explica el efecto expulsión (mayor tasa de interés reduce la inversión privada) y su efecto atenuador", peso: 2 }
      ],
      erroresComunes: [
        "Suponer que el multiplicador es infinito: es finito porque en cada ronda solo se regasta una fracción (la PMgC es menor que 1).",
        "Ignorar el crowding out y concluir que el efecto sobre la DA es exactamente el del multiplicador puro."
      ]
    },

    {
      id: "eco-078",
      tema: "La curva de oferta agregada: tramos y su forma según el horizonte temporal",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Explique por qué la curva de oferta agregada de LARGO plazo es vertical, mientras que la de CORTO plazo tiene pendiente positiva. Explique qué determina el nivel de producción de largo plazo y qué implica esto para el efecto de un aumento de la demanda agregada en el corto y en el largo plazo. 7 puntos",
      respuestaModelo: "La oferta agregada (OA) relaciona el nivel de precios con la cantidad de bienes y servicios que las empresas producen.\n\nEn el LARGO plazo, la OA es VERTICAL en el nivel de producto potencial (o de pleno empleo). La producción de largo plazo depende de factores REALES: la dotación de capital, trabajo, recursos naturales y la tecnología, NO del nivel de precios. Rige la dicotomía clásica: los precios (variable nominal) no afectan la capacidad productiva (variable real). Por eso, cambios en el nivel de precios no alteran la producción de largo plazo.\n\nEn el CORTO plazo, la OA tiene PENDIENTE POSITIVA: un mayor nivel de precios se asocia a mayor producción. Esto se explica por rigideces temporales, por ejemplo: salarios y precios que no se ajustan de inmediato (contratos), o percepciones equivocadas (las empresas confunden un alza general de precios con un alza de su precio relativo y producen más). Estas rigideces son transitorias.\n\nImplicancia para un aumento de la DEMANDA agregada: en el CORTO plazo, un aumento de la DA eleva TANTO la producción (por sobre el potencial) COMO el nivel de precios (movimiento a lo largo de la OA de corto plazo). Pero en el LARGO plazo, los precios y salarios se ajustan, la OA de corto plazo se desplaza hacia arriba, y la economía retorna al producto potencial con un nivel de precios MÁS ALTO: el aumento de DA solo se traduce en más inflación, sin efecto permanente sobre la producción.\n\nDescripción del gráfico esperado: OA de largo plazo vertical en Yp; OA de corto plazo con pendiente positiva; un desplazamiento de la DA que en el corto plazo sube Y y P, y en el largo plazo vuelve a Yp con P aún mayor.",
      criterios: [
        { texto: "Explica que la OA de largo plazo es vertical y depende de factores reales (dicotomía clásica)", peso: 2 },
        { texto: "Explica por qué la OA de corto plazo tiene pendiente positiva (rigideces o percepciones temporales)", peso: 2 },
        { texto: "Explica el efecto de un aumento de DA en el corto plazo (sube Y y P)", peso: 2 },
        { texto: "Explica el efecto en el largo plazo (retorno al producto potencial con mayor nivel de precios)", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que un aumento de la demanda agregada eleva la producción de forma permanente: en el largo plazo solo eleva los precios.",
        "Confundir la producción potencial (determinada por factores reales) con un nivel dependiente de los precios."
      ]
    },

    {
      id: "eco-079",
      tema: "Demanda de dinero y equilibrio del mercado monetario",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "a) Explique los principales motivos por los que las personas demandan dinero y cómo la demanda de dinero depende de la tasa de interés y del nivel de ingreso. 4 puntos\n\nb) Explique y grafique cómo se determina la tasa de interés de equilibrio en el mercado monetario y qué ocurre si el Banco Central aumenta la oferta de dinero. 3 puntos",
      respuestaModelo: "a) La demanda de dinero es la cantidad de riqueza que las personas desean mantener en forma líquida (dinero) en lugar de en activos que rinden interés. Motivos: (1) motivo TRANSACCIÓN: se necesita dinero para realizar compras cotidianas; (2) motivo PRECAUCIÓN: mantener dinero para imprevistos; (3) motivo ESPECULACIÓN: mantener liquidez para aprovechar oportunidades financieras.\n\nDeterminantes: la demanda de dinero depende NEGATIVAMENTE de la tasa de interés, porque la tasa es el COSTO DE OPORTUNIDAD de mantener dinero (lo que se sacrifica por no tenerlo en un activo que rinde interés): a mayor tasa, menos dinero se desea mantener. Y depende POSITIVAMENTE del nivel de ingreso o producto y del nivel de precios: a mayor ingreso, más transacciones y más dinero se demanda.\n\nb) La oferta de dinero la fija el Banco Central y se representa como una línea VERTICAL (no depende de la tasa de interés). La demanda de dinero es decreciente respecto de la tasa. La tasa de interés de EQUILIBRIO es aquella que iguala la cantidad de dinero ofrecida con la demandada.\n\nSi el Banco Central AUMENTA la oferta de dinero, la línea vertical se desplaza a la derecha; al haber más dinero del que se desea mantener a la tasa vigente, las personas compran activos financieros, subiendo su precio y BAJANDO la tasa de interés hasta el nuevo equilibrio. Una tasa menor estimula la inversión y el consumo.\n\nDescripción del gráfico esperado: ejes tasa de interés (r) y cantidad de dinero (M); oferta monetaria vertical; demanda de dinero decreciente; el aumento de oferta desplaza la vertical a la derecha y baja r.",
      criterios: [
        { texto: "a) Explica los motivos de demanda de dinero (transacción, precaución, especulación)", peso: 2 },
        { texto: "a) Explica la dependencia negativa de la tasa (costo de oportunidad) y positiva del ingreso", peso: 2 },
        { texto: "b) Explica y grafica el equilibrio del mercado monetario (oferta vertical = demanda) y el efecto de un aumento de oferta (baja la tasa)", peso: 3 }
      ],
      erroresComunes: [
        "Decir que la demanda de dinero aumenta con la tasa de interés: la relación es inversa (la tasa es el costo de oportunidad de mantener dinero).",
        "Dibujar la oferta monetaria con pendiente positiva: la fija el Banco Central y es vertical (independiente de la tasa)."
      ]
    },

    {
      id: "eco-080",
      tema: "Política monetaria y la curva LM: efecto de corto plazo en el modelo IS-LM",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "El Banco Central decide reducir la tasa de interés de política mediante una política monetaria expansiva.\n\na) Explique qué representa la curva LM y cómo una expansión monetaria la desplaza. 3 puntos\n\nb) Explique y grafique el efecto de esta política sobre la tasa de interés y el producto en el modelo IS-LM de corto plazo. 4 puntos",
      respuestaModelo: "a) La curva LM representa las combinaciones de tasa de interés y nivel de producto que mantienen en EQUILIBRIO el mercado del dinero (donde la demanda de dinero iguala a la oferta). Tiene pendiente positiva: a mayor producto, más demanda de dinero por transacciones, lo que requiere una tasa de interés más alta para equilibrar el mercado monetario con una oferta de dinero dada.\n\nUna POLÍTICA MONETARIA EXPANSIVA (por ejemplo, una operación de mercado abierto de compra de bonos que inyecta liquidez) aumenta la oferta de dinero. Con más dinero, para cada nivel de producto la tasa de interés de equilibrio del mercado monetario es menor: la curva LM se desplaza hacia la DERECHA (o hacia abajo).\n\nb) La curva IS (equilibrio del mercado de bienes) tiene pendiente negativa y no se mueve con la política monetaria. Al desplazarse la LM a la derecha, el nuevo equilibrio de corto plazo (intersección IS-LM) tiene una tasa de interés MENOR y un producto MAYOR. La intuición: la menor tasa de interés eleva el valor presente neto de los proyectos, estimulando la inversión (y el consumo de durables), lo que aumenta el gasto agregado y, por lo tanto, el producto.\n\nEste mayor producto y demanda agregada, en el modelo OA-DA, se traduce en un desplazamiento de la DA a la derecha, con más producción y presiones inflacionarias en el corto plazo.\n\nDescripción del gráfico esperado: ejes r e Y; curva IS decreciente fija; curva LM que se desplaza de LM0 a LM1 a la derecha; nuevo equilibrio con r menor e Y mayor.",
      criterios: [
        { texto: "a) Explica qué representa la LM (equilibrio del mercado del dinero, pendiente positiva)", peso: 2 },
        { texto: "a) Explica que una expansión monetaria desplaza la LM a la derecha", peso: 1 },
        { texto: "b) Concluye que baja la tasa de interés y sube el producto, con la intuición vía inversión", peso: 2 },
        { texto: "b) Grafica correctamente el desplazamiento de la LM y el nuevo equilibrio IS-LM", peso: 1 }
      ],
      erroresComunes: [
        "Desplazar la curva IS ante una política monetaria: la política monetaria mueve la LM, no la IS.",
        "Confundir el sentido del desplazamiento: una expansión monetaria mueve la LM a la derecha (baja la tasa), no a la izquierda."
      ]
    },

    {
      id: "eco-081",
      tema: "Apreciación y depreciación de la moneda: efectos sobre agentes e inflación",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "Suponga que el tipo de cambio (pesos por dólar) sube de forma sostenida, es decir, el peso se deprecia.\n\na) Explique la diferencia entre apreciación y depreciación de la moneda y dé un ejemplo de un factor que provoque una depreciación del peso. 3 puntos\n\nb) Analice los efectos de una depreciación del peso sobre exportadores, importadores y sobre la inflación interna. 4 puntos",
      respuestaModelo: "a) El tipo de cambio nominal (e) es el precio de una moneda extranjera en términos de la local (pesos por dólar). Una DEPRECIACIÓN del peso ocurre cuando sube el tipo de cambio: se necesitan más pesos para comprar un dólar, es decir, el peso pierde valor. Una APRECIACIÓN es lo contrario: baja el tipo de cambio, el peso gana valor y se requieren menos pesos por dólar.\n\nFactor que deprecia el peso (basta uno): una salida de capitales (por ejemplo, un alza de la tasa de interés externa que atrae capitales al exterior), una caída del precio del cobre (menos dólares ingresando por exportaciones), un aumento de la incertidumbre o riesgo país, o una política monetaria interna expansiva que baja la tasa local.\n\nb) Efectos de una depreciación del peso:\n- EXPORTADORES: se benefician. Sus productos se vuelven más baratos en dólares para los extranjeros y, al convertir sus ventas en dólares a pesos, reciben más pesos. Se estimulan las exportaciones.\n- IMPORTADORES (y quienes compran bienes importados): se perjudican. Los productos importados se encarecen en pesos, porque cada dólar cuesta más. Cae la cantidad importada.\n- INFLACIÓN interna: tiende a AUMENTAR. Al encarecerse los bienes importados y los insumos importados (combustibles, maquinaria), suben los costos de producción y los precios de bienes transables. Este \"traspaso\" (pass-through) del tipo de cambio a precios genera presiones inflacionarias.",
      criterios: [
        { texto: "a) Distingue correctamente apreciación de depreciación en términos del tipo de cambio", peso: 1 },
        { texto: "a) Da un ejemplo válido de un factor que deprecia el peso", peso: 2 },
        { texto: "b) Explica el efecto favorable sobre los exportadores y desfavorable sobre los importadores", peso: 2 },
        { texto: "b) Explica el efecto al alza sobre la inflación (encarecimiento de importados e insumos)", peso: 1 }
      ],
      erroresComunes: [
        "Confundir depreciación con apreciación: si sube el tipo de cambio (más pesos por dólar), el peso se DEPRECIA.",
        "Afirmar que una depreciación beneficia a todos: perjudica a importadores y presiona la inflación al alza."
      ]
    },

    {
      id: "eco-082",
      tema: "El flujo de salida neta de capital y su identidad con las exportaciones netas",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "En una economía abierta se cumple la identidad: salida neta de capital = exportaciones netas (SNC = Xn).\n\na) Explique qué es la salida neta de capital y qué son las exportaciones netas. 3 puntos\n\nb) Explique por qué ambas magnitudes son necesariamente iguales, usando un ejemplo del flujo de dólares que genera una exportación. 3 puntos",
      respuestaModelo: "a) La SALIDA NETA DE CAPITAL (SNC) es la diferencia entre la compra de activos extranjeros por residentes nacionales y la compra de activos nacionales por extranjeros. Es positiva cuando el país, en neto, presta o invierte en el resto del mundo (compra más activos externos de los que los extranjeros le compran); es negativa cuando, en neto, recibe financiamiento externo.\n\nLas EXPORTACIONES NETAS (Xn) son el valor de las exportaciones menos las importaciones de bienes y servicios (la balanza comercial).\n\nb) Ambas son iguales porque toda transacción internacional tiene dos caras: el flujo de bienes y el flujo de recursos financieros que lo financia. Cada dólar que ingresa por una exportación debe usarse para comprar algo del resto del mundo: o bien un bien importado (afectando Xn) o bien un activo extranjero (afectando la SNC).\n\nEjemplo: un exportador chileno vende uvas a Estados Unidos y recibe dólares. Con esos dólares, o bien se importan bienes desde el exterior (reduce Xn), o bien se compran activos financieros extranjeros (aumenta la SNC). Los dólares no pueden \"desaparecer\": si Chile exporta más de lo que importa (Xn > 0), esos dólares excedentes se traducen en compra neta de activos externos (SNC > 0). Por eso, contablemente, SNC = Xn siempre. Un superávit comercial equivale a prestar al resto del mundo; un déficit, a endeudarse con él.",
      criterios: [
        { texto: "a) Define salida neta de capital (compra neta de activos externos)", peso: 1 },
        { texto: "a) Define exportaciones netas (balanza comercial, X - M)", peso: 2 },
        { texto: "b) Explica por qué SNC = Xn usando el doble carácter de las transacciones (flujo real y financiero)", peso: 2 },
        { texto: "b) Ilustra la identidad con un ejemplo del flujo de dólares de una exportación", peso: 1 }
      ],
      erroresComunes: [
        "Tratar la salida neta de capital y las exportaciones netas como magnitudes independientes: son las dos caras de la misma transacción y son iguales.",
        "Interpretar una salida neta de capital positiva como algo necesariamente negativo: refleja un superávit comercial y ahorro prestado al exterior."
      ]
    },

    {
      id: "eco-083",
      tema: "Externalidades positivas y subsidios correctivos",
      dificultad: "media",
      salioEnExamen: true,
      enunciado: "La educación superior y la vacunación generan beneficios que exceden al beneficio privado de quien los recibe.\n\na) Explique qué es una externalidad positiva y por qué el mercado, por sí solo, produce MENOS de lo socialmente óptimo. 4 puntos\n\nb) Explique y grafique cómo un subsidio puede corregir esta falla de mercado y llevar la cantidad al óptimo social. 3 puntos",
      respuestaModelo: "a) Una externalidad positiva ocurre cuando una actividad de producción o consumo genera BENEFICIOS a terceros que no participan en la transacción y que no son compensados por ello. En estos casos, el beneficio SOCIAL (que incluye el beneficio de terceros) es MAYOR que el beneficio privado que percibe quien realiza la actividad. Ejemplos: la educación (beneficia al individuo, pero también a la sociedad por mayor productividad y ciudadanía); la vacunación (protege al vacunado y reduce el contagio de los demás).\n\nComo los agentes deciden mirando solo su beneficio PRIVADO, consumen o producen hasta donde el beneficio privado iguala al costo, ignorando el beneficio adicional que reciben terceros. Por eso el mercado produce MENOS de la cantidad socialmente óptima (subproducción): quedan sin realizarse actividades cuyo beneficio social supera su costo.\n\nDescripción del gráfico esperado: curva de demanda que representa el beneficio privado marginal (BPMg) y, por encima, una curva de beneficio social marginal (BSMg = BPMg + beneficio externo); oferta = costo marginal. El equilibrio de mercado (BPMg = CMg) da Qmercado; el óptimo social (BSMg = CMg) da Qóptimo > Qmercado. Entre ambas cantidades hay una pérdida de bienestar por subproducción.\n\nb) Un SUBSIDIO (por ejemplo, por unidad consumida o producida) reduce el costo o precio efectivo para el agente, incentivándolo a aumentar la cantidad. Si el subsidio se fija igual al valor del beneficio externo marginal, INTERNALIZA la externalidad: el agente actúa como si percibiera el beneficio social, y la cantidad de mercado aumenta hasta el óptimo social (Qóptimo). Ejemplos reales: becas y gratuidad en educación, vacunación gratuita.\n\nDescripción del gráfico esperado: el subsidio desplaza la decisión del agente de modo que la nueva cantidad transada coincide con Qóptimo.",
      criterios: [
        { texto: "a) Define externalidad positiva (beneficio a terceros no compensado; beneficio social > privado)", peso: 2 },
        { texto: "a) Explica la subproducción y grafica BSMg por sobre BPMg con Qmercado < Qóptimo", peso: 2 },
        { texto: "b) Explica que un subsidio internaliza la externalidad y lleva la cantidad al óptimo social", peso: 2 },
        { texto: "b) Da un ejemplo pertinente (becas, gratuidad, vacunación)", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que ante una externalidad positiva el mercado sobreproduce: subproduce, porque no se contabiliza el beneficio a terceros.",
        "Proponer un impuesto para corregir una externalidad positiva: se corrige con un subsidio (el impuesto corrige las negativas)."
      ]
    },

    {
      id: "eco-084",
      tema: "El teorema de Coase y la asignación de derechos de propiedad",
      dificultad: "media",
      enunciado: "Explique el teorema de Coase como solución privada a las externalidades. Indique bajo qué condiciones la negociación privada puede alcanzar el resultado eficiente sin intervención del Estado, y por qué en la práctica esa solución muchas veces falla. 6 puntos",
      respuestaModelo: "El teorema de Coase sostiene que, si los DERECHOS DE PROPIEDAD están bien definidos y los costos de transacción (negociación) son bajos, las partes involucradas en una externalidad pueden NEGOCIAR PRIVADAMENTE y alcanzar por sí mismas una asignación EFICIENTE de los recursos, sin necesidad de intervención estatal. Además, el resultado eficiente se logra INDEPENDIENTEMENTE de a quién se le asignen inicialmente los derechos; lo que cambia según la asignación es la distribución de la riqueza (quién paga a quién), no la eficiencia.\n\nEjemplo: una fábrica que contamina y un vecino afectado. Si el derecho a un ambiente limpio es del vecino, la fábrica le pagará para poder contaminar hasta el nivel eficiente; si el derecho a producir es de la fábrica, el vecino le pagará para que reduzca la contaminación. En ambos casos se llega al mismo nivel eficiente de contaminación.\n\nCONDICIONES para que funcione: (1) derechos de propiedad claramente definidos y exigibles; (2) costos de transacción bajos (negociar es barato); (3) pocas partes involucradas y buena información.\n\nEn la PRÁCTICA suele fallar porque: los costos de transacción son altos cuando hay MUCHAS partes involucradas (por ejemplo, contaminación que afecta a miles de personas); es difícil coordinar y hay incentivo a comportarse como polizón; la información es incompleta o asimétrica; y los derechos de propiedad no siempre están bien definidos (como el aire o el mar). Por eso muchas externalidades requieren intervención pública (impuestos, regulación).",
      criterios: [
        { texto: "Enuncia el teorema de Coase (con derechos definidos y bajos costos de transacción, la negociación privada alcanza la eficiencia)", peso: 2 },
        { texto: "Explica que el resultado eficiente es independiente de la asignación inicial de derechos (que solo afecta la distribución)", peso: 1 },
        { texto: "Señala las condiciones necesarias (derechos claros, bajos costos de transacción, pocas partes)", peso: 1 },
        { texto: "Explica por qué falla en la práctica (muchas partes, altos costos de transacción, free rider, información imperfecta)", peso: 2 }
      ],
      erroresComunes: [
        "Creer que el teorema de Coase implica que nunca se necesita al Estado: solo funciona con bajos costos de transacción y pocas partes.",
        "Afirmar que el resultado depende de a quién se asignen los derechos: la eficiencia no cambia; solo cambia la distribución de la riqueza."
      ]
    },

    {
      id: "eco-085",
      tema: "Clasificación de bienes según exclusión y rivalidad: privados, comunes, club y públicos",
      dificultad: "media",
      enunciado: "Los bienes se pueden clasificar según dos características: si son excluibles y si son rivales en el consumo. Explique estas dos características y clasifique, con un ejemplo cada uno, los cuatro tipos de bienes que resultan: bienes privados, bienes públicos, recursos comunes y bienes de club (monopolios naturales). 6 puntos",
      respuestaModelo: "Dos características clasifican los bienes:\n- EXCLUIBILIDAD: si es posible impedir que alguien que no paga los use.\n- RIVALIDAD: si el consumo de una persona reduce la cantidad disponible para otras.\n\nCombinando ambas se obtienen cuatro tipos:\n\n(1) BIENES PRIVADOS: excluibles y rivales. Se puede cobrar por ellos y el consumo de uno impide el de otro. Ejemplo: un helado, la ropa, un auto. Son la mayoría de los bienes de mercado.\n\n(2) BIENES PÚBLICOS: no excluibles y no rivales. Nadie puede ser excluido y el consumo de uno no reduce el de otros. Ejemplo: la defensa nacional, el alumbrado público. Generan el problema del free rider y el mercado los subprovee.\n\n(3) RECURSOS COMUNES: no excluibles pero SÍ rivales. No se puede excluir a nadie, pero lo que consume uno reduce lo disponible para otros. Ejemplo: los peces del océano, el agua de una napa, el aire limpio. Sufren la \"tragedia de los comunes\" (sobreexplotación).\n\n(4) BIENES DE CLUB (o monopolios naturales): excluibles pero NO rivales. Se puede cobrar, pero el consumo de uno no reduce el de otros (hasta la congestión). Ejemplo: la TV por cable, una autopista concesionada poco congestionada, un puente.\n\nDescripción del esquema esperado: una matriz 2x2 con excluibilidad en un eje y rivalidad en el otro, ubicando los cuatro tipos.",
      criterios: [
        { texto: "Explica correctamente las dos características (exclusión y rivalidad)", peso: 2 },
        { texto: "Clasifica y ejemplifica bienes privados y bienes públicos", peso: 2 },
        { texto: "Clasifica y ejemplifica recursos comunes (no excluible, rival)", peso: 1 },
        { texto: "Clasifica y ejemplifica bienes de club / monopolio natural (excluible, no rival)", peso: 1 }
      ],
      erroresComunes: [
        "Confundir recurso común con bien público: el recurso común SÍ es rival (se agota), el bien público no.",
        "Definir la clasificación por quién provee el bien en lugar de por sus características de exclusión y rivalidad."
      ]
    },

    {
      id: "eco-086",
      tema: "Eficiencia tributaria: impuestos de suma fija vs. impuestos distorsionadores",
      dificultad: "media",
      enunciado: "Explique la diferencia entre un impuesto de suma fija (lump sum) y un impuesto distorsionador (como un impuesto por unidad transada). Explique por qué el impuesto de suma fija es el más eficiente en términos de pérdida social, y por qué, pese a ello, casi no se utiliza. 6 puntos",
      respuestaModelo: "Un IMPUESTO DE SUMA FIJA (lump sum) es un monto igual que toda persona debe pagar independientemente de sus decisiones, ingreso o consumo (por ejemplo, un monto fijo por habitante). Un IMPUESTO DISTORSIONADOR grava una actividad, transacción o ingreso, de modo que su monto DEPENDE del comportamiento del agente (por ejemplo, un impuesto por unidad vendida, el IVA o el impuesto a la renta).\n\nEficiencia: el impuesto de suma fija es el MÁS EFICIENTE porque NO altera los incentivos marginales: como se paga lo mismo haga lo que haga el agente, no modifica sus decisiones de producir, consumir o trabajar. Por lo tanto, NO genera pérdida irrecuperable de eficiencia (no introduce una cuña que reduzca las transacciones mutuamente beneficiosas). El impuesto distorsionador, en cambio, cambia los precios relativos y desincentiva la actividad gravada, reduciendo la cantidad transada por debajo del óptimo y generando pérdida social (el triángulo de pérdida de bienestar).\n\nPor qué NO se usa, pese a su eficiencia: porque es muy INEQUITATIVO. Al cobrar lo mismo a todos, representa una carga proporcionalmente mucho mayor para quienes tienen menos ingresos (es fuertemente regresivo) y no considera la capacidad de pago. La sociedad valora también la EQUIDAD, no solo la eficiencia, por lo que se prefieren impuestos ligados a la capacidad de pago (ingreso, consumo), aunque introduzcan alguna distorsión. Existe así una disyuntiva (trade-off) entre eficiencia y equidad.",
      criterios: [
        { texto: "Distingue impuesto de suma fija (monto fijo independiente de decisiones) de impuesto distorsionador (depende del comportamiento)", peso: 2 },
        { texto: "Explica por qué el de suma fija es eficiente (no altera incentivos marginales, sin pérdida social)", peso: 2 },
        { texto: "Explica por qué no se usa: es regresivo/inequitativo (no considera capacidad de pago)", peso: 1 },
        { texto: "Menciona la disyuntiva entre eficiencia y equidad", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que todos los impuestos generan la misma pérdida social: el de suma fija no distorsiona incentivos y no genera pérdida de eficiencia.",
        "Ignorar la dimensión de equidad al evaluar impuestos: la eficiencia no es el único criterio."
      ]
    },

    {
      id: "eco-087",
      tema: "Progresividad tributaria: impuestos progresivos, proporcionales y regresivos",
      dificultad: "media",
      enunciado: "a) Explique la diferencia entre un impuesto progresivo, uno proporcional y uno regresivo. 3 puntos\n\nb) Explique la diferencia entre equidad horizontal y equidad vertical, y clasifique el IVA (impuesto al consumo de tasa plana) según su progresividad, justificando. 3 puntos",
      respuestaModelo: "a) La clasificación se hace según cómo varía la TASA MEDIA del impuesto (impuesto pagado sobre el ingreso) al aumentar el ingreso:\n- PROGRESIVO: la tasa media AUMENTA con el ingreso; quienes ganan más pagan una fracción mayor de su ingreso. Ejemplo: el impuesto a la renta con tramos crecientes.\n- PROPORCIONAL (o de tasa plana): la tasa media es CONSTANTE; todos pagan el mismo porcentaje de su ingreso, sin importar cuánto ganen.\n- REGRESIVO: la tasa media DISMINUYE con el ingreso; quienes ganan menos terminan pagando una fracción mayor de su ingreso.\n\nb) La EQUIDAD HORIZONTAL sostiene que contribuyentes con similar capacidad de pago deben pagar impuestos similares (tratar igual a los iguales). La EQUIDAD VERTICAL sostiene que quienes tienen mayor capacidad de pago deben pagar más (tratar distinto a los desiguales), y suele asociarse a la progresividad.\n\nClasificación del IVA: aunque el IVA tiene una TASA PLANA sobre el consumo (parece proporcional respecto del consumo), en relación al INGRESO tiende a ser REGRESIVO. La razón: los hogares de menores ingresos destinan una PROPORCIÓN MAYOR de su ingreso al consumo (y ahorran poco o nada), mientras que los de mayores ingresos ahorran una fracción mayor. Como el IVA grava el consumo, termina representando un porcentaje mayor del ingreso de los más pobres que del de los más ricos.",
      criterios: [
        { texto: "a) Define correctamente progresivo, proporcional y regresivo según la tasa media respecto del ingreso", peso: 2 },
        { texto: "a) Da un ejemplo válido (al menos el impuesto a la renta como progresivo)", peso: 1 },
        { texto: "b) Distingue equidad horizontal (iguales tratados igual) de vertical (mayor capacidad, mayor pago)", peso: 1 },
        { texto: "b) Clasifica el IVA como regresivo respecto del ingreso y lo justifica (los de menor ingreso consumen mayor proporción)", peso: 2 }
      ],
      erroresComunes: [
        "Clasificar el IVA como proporcional respecto del ingreso: aunque su tasa es plana sobre el consumo, respecto del ingreso resulta regresivo.",
        "Confundir equidad horizontal con vertical."
      ]
    },

    {
      id: "eco-088",
      tema: "El modelo de Solow: la regla de oro de acumulación de capital",
      dificultad: "media",
      enunciado: "En el modelo de Solow, una mayor tasa de ahorro conduce a un mayor capital por trabajador en el estado estacionario.\n\na) Explique qué es el estado estacionario y por qué un mayor ahorro no genera crecimiento permanente, sino un mayor nivel de producto de largo plazo. 4 puntos\n\nb) Explique qué es la \"regla de oro\" de acumulación de capital y por qué más ahorro no siempre es mejor para el consumo. 3 puntos",
      respuestaModelo: "a) El ESTADO ESTACIONARIO es la situación de largo plazo en la que el capital por trabajador se mantiene constante: la inversión (que depende del ahorro) apenas alcanza para reponer la depreciación del capital y dotar de capital a los nuevos trabajadores. En ese punto, el capital por trabajador y el producto por trabajador ya no varían.\n\nUn aumento de la tasa de AHORRO eleva la inversión, por lo que el capital por trabajador crece hasta alcanzar un NUEVO estado estacionario más alto, con mayor producto por trabajador. Sin embargo, este efecto es de NIVEL, no de tasa: durante la transición hay crecimiento, pero una vez alcanzado el nuevo estado estacionario, el crecimiento del producto por trabajador vuelve a cero (o al que dé el progreso tecnológico). La razón es la productividad marginal DECRECIENTE del capital: cada unidad adicional de capital rinde menos, y llega un punto en que la nueva inversión solo repone la depreciación. Por eso más ahorro da un nivel más alto, pero no crecimiento permanente.\n\nb) La REGLA DE ORO de acumulación de capital es el nivel de capital por trabajador (asociado a una tasa de ahorro específica) que MAXIMIZA el CONSUMO por trabajador en el estado estacionario. Más ahorro no siempre es mejor porque ahorrar significa consumir menos hoy: si el ahorro es demasiado alto, el país acumula mucho capital pero destina tanto a inversión y a reponer depreciación que le queda poco para consumir. Existe un nivel óptimo (regla de oro) donde el producto marginal del capital iguala a la tasa de depreciación (más crecimiento poblacional). Por encima de ese nivel, más capital reduce el consumo de estado estacionario (sobreacumulación ineficiente).",
      criterios: [
        { texto: "a) Explica el estado estacionario (capital por trabajador constante: inversión repone depreciación y crecimiento poblacional)", peso: 2 },
        { texto: "a) Explica que más ahorro eleva el nivel de producto de largo plazo pero no el crecimiento permanente (productividad marginal decreciente del capital)", peso: 2 },
        { texto: "b) Define la regla de oro como el nivel de capital que maximiza el consumo por trabajador de estado estacionario", peso: 2 },
        { texto: "b) Explica por qué más ahorro no siempre es mejor (sacrifica consumo presente; puede haber sobreacumulación)", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que un mayor ahorro genera crecimiento permanente: en Solow genera un mayor NIVEL de largo plazo, no una mayor tasa de crecimiento sostenida.",
        "Creer que cuanto más capital se acumule, mejor: por sobre la regla de oro, la sobreacumulación reduce el consumo."
      ]
    },

    {
      id: "eco-089",
      tema: "Crecimiento económico: el efecto de convergencia (catch-up) en el modelo de Solow",
      dificultad: "media",
      enunciado: "Explique el efecto de convergencia (o \"catch-up\") que predice el modelo de Solow: por qué, en igualdad de otras condiciones, se esperaría que los países más pobres crezcan más rápido que los más ricos. Explique además por qué en la realidad esa convergencia no siempre se observa. 6 puntos",
      respuestaModelo: "El efecto de CONVERGENCIA (o catch-up) es la predicción del modelo de Solow según la cual, manteniendo constantes los demás factores (misma tasa de ahorro, tecnología, depreciación y crecimiento poblacional), los países que parten con MENOS capital por trabajador (más pobres) tienden a CRECER MÁS RÁPIDO que los países que ya tienen mucho capital (más ricos), acercándose a estos con el tiempo.\n\nLa razón es la PRODUCTIVIDAD MARGINAL DECRECIENTE del capital: donde hay poco capital por trabajador, cada nueva unidad de capital es MUY productiva (genera mucho producto adicional), por lo que la inversión rinde mucho y el país crece rápido. En cambio, donde ya hay mucho capital, una unidad adicional aporta poco, y el crecimiento es más lento. Por eso los países pobres, con mayor rendimiento del capital, tenderían a alcanzar (converger hacia) a los ricos si comparten los mismos parámetros y llegan al mismo estado estacionario.\n\nPor qué NO siempre se observa en la realidad: porque los países NO comparten los mismos determinantes de largo plazo. Difieren en tasas de ahorro e inversión, en capital humano, en tecnología, en calidad de las instituciones, en estabilidad política y en derechos de propiedad. Como tienen estados estacionarios DISTINTOS, cada uno converge a su propio nivel, no a uno común. Por ello se habla de convergencia CONDICIONAL: los países convergen solo entre aquellos con características similares. Diferencias persistentes en instituciones y tecnología explican que muchas brechas no se cierren.",
      criterios: [
        { texto: "Explica el efecto de convergencia (los países más pobres crecerían más rápido, en igualdad de condiciones)", peso: 2 },
        { texto: "Justifica la convergencia por la productividad marginal decreciente del capital", peso: 2 },
        { texto: "Explica por qué no siempre se observa: distintos estados estacionarios (ahorro, capital humano, tecnología, instituciones)", peso: 2 }
      ],
      erroresComunes: [
        "Afirmar que Solow predice convergencia absoluta e incondicional: la convergencia es CONDICIONAL a compartir los mismos parámetros de estado estacionario.",
        "Olvidar el papel de las instituciones y la tecnología en explicar brechas persistentes entre países."
      ]
    },

    // ---- DIFÍCILES ----

    {
      id: "eco-090",
      tema: "Teoría clásica de la distribución del ingreso: productividad marginal de los factores",
      dificultad: "dificil",
      enunciado: "En la teoría clásica, la producción de una economía depende de sus factores (capital K y trabajo L) mediante una función de producción con productividad marginal decreciente.\n\na) Explique cómo la demanda de trabajo de una empresa competitiva se determina a partir del producto marginal del trabajo, y por qué contrata hasta que el salario real iguala al producto marginal del trabajo. 4 puntos\n\nb) Análogamente, explique cómo se determina la retribución del capital (la tasa de renta real del capital). 3 puntos\n\nc) Explique qué significa que, bajo estos supuestos, cada factor recibe su producto marginal y cómo se reparte el ingreso total entre trabajo y capital. 3 puntos",
      respuestaModelo: "a) Una empresa competitiva que maximiza beneficios demanda trabajo comparando lo que aporta un trabajador adicional con lo que cuesta. El aporte es el valor del PRODUCTO MARGINAL DEL TRABAJO (PMgL): la producción extra que genera. El costo es el salario. En términos reales, la empresa contrata trabajadores mientras el PMgL sea mayor que el SALARIO REAL (W/P), y deja de contratar cuando se igualan: PMgL = W/P. Por la productividad marginal DECRECIENTE, el PMgL cae a medida que se contrata más trabajo; por eso la curva de demanda de trabajo (que es la curva del PMgL) tiene pendiente negativa: a menor salario real, se contrata más.\n\nDescripción del gráfico esperado: eje horizontal L, eje vertical salario real; curva PMgL decreciente que es la demanda de trabajo; el empleo se determina donde el salario real corta la curva del PMgL.\n\nb) De forma simétrica, la retribución del CAPITAL se determina por su productividad marginal. La empresa alquila (o emplea) capital hasta que el PRODUCTO MARGINAL DEL CAPITAL (PMgK) iguala el precio real de alquiler del capital (la tasa de renta real R/P): PMgK = R/P. También el PMgK es decreciente, por lo que a mayor stock de capital, menor es su retribución real.\n\nc) Bajo competencia y estos supuestos, cada factor recibe una remuneración igual a su PRODUCTO MARGINAL (teoría de la productividad marginal de la distribución). El ingreso total se reparte así: el trabajo recibe (salario real × cantidad de trabajo) y el capital recibe (renta real × cantidad de capital). Si la función de producción tiene rendimientos constantes a escala, la suma de ambas retribuciones AGOTA exactamente el producto total (teorema de Euler): no sobra ni falta ingreso. Las participaciones de cada factor en el ingreso (por ejemplo, la participación del trabajo) dependen de la tecnología. Así, la teoría clásica explica la distribución funcional del ingreso a partir de la productividad de los factores, sin recurrir a la negociación o al poder.",
      criterios: [
        { texto: "a) Explica que la empresa contrata trabajo hasta PMgL = salario real y que la demanda de trabajo es el PMgL decreciente", peso: 2 },
        { texto: "a) Grafica o describe correctamente la demanda de trabajo (PMgL) con pendiente negativa", peso: 2 },
        { texto: "b) Explica que el capital se retribuye según su producto marginal (PMgK = renta real del capital)", peso: 2 },
        { texto: "c) Explica que cada factor recibe su producto marginal y cómo se reparte el ingreso total entre trabajo y capital (agotamiento del producto con rendimientos constantes)", peso: 2 }
      ],
      erroresComunes: [
        "Confundir el salario nominal con el salario real: la condición de contratación es PMgL = salario REAL (W/P).",
        "Olvidar la productividad marginal decreciente, que es la que da a la demanda de factores su pendiente negativa.",
        "Creer que la distribución depende solo de la negociación: en la teoría clásica depende de la productividad marginal de los factores."
      ]
    },

    {
      id: "eco-091",
      tema: "Oligopolio: comparación entre colusión, competencia de Cournot y competencia perfecta",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Considere un mercado con pocas empresas (oligopolio) que producen un bien homogéneo.\n\na) Explique por qué existe interdependencia estratégica en el oligopolio y qué diferencia a un resultado colusivo de uno competitivo. 4 puntos\n\nb) Explique, de forma conceptual, cómo se ubica el resultado de un oligopolio que compite en cantidades (tipo Cournot) respecto de los extremos de monopolio (colusión perfecta) y competencia perfecta, en términos de precio y cantidad. 4 puntos\n\nc) Explique por qué los acuerdos colusivos tienden a ser inestables usando la lógica de la teoría de juegos. 3 puntos",
      respuestaModelo: "a) En el oligopolio hay pocas empresas, de modo que las decisiones de una (precio o cantidad) afectan significativamente a las demás: existe INTERDEPENDENCIA ESTRATÉGICA. Cada firma debe anticipar la reacción de sus rivales al decidir. En un resultado COLUSIVO, las empresas se coordinan (explícita o tácitamente) para actuar como si fueran un solo monopolio: restringen la producción conjunta y cobran un precio alto, maximizando la utilidad conjunta. En un resultado COMPETITIVO, en cambio, cada empresa compite, la producción total es mayor y el precio menor, acercándose al costo marginal.\n\nb) El resultado de un oligopolio que compite en cantidades (Cournot) se ubica en un punto INTERMEDIO entre los dos extremos:\n- MONOPOLIO / colusión perfecta: la menor cantidad y el mayor precio (máxima pérdida social, máxima utilidad conjunta).\n- COMPETENCIA PERFECTA: la mayor cantidad y el menor precio (P = CMg, sin pérdida social).\n- OLIGOPOLIO (Cournot): produce MÁS que el monopolio pero MENOS que la competencia; su precio es MENOR que el de monopolio pero MAYOR que el competitivo. Además, a medida que AUMENTA el número de empresas que compiten, el resultado se acerca cada vez más al competitivo (el precio tiende al costo marginal y la cantidad al nivel eficiente). Con pocas empresas, en cambio, se parece más al monopolio.\n\nc) Los acuerdos colusivos son INESTABLES por la lógica del dilema del prisionero: dado que los demás restringen su producción y sostienen un precio alto, cada empresa tiene el INCENTIVO INDIVIDUAL a hacer trampa (desviarse), produciendo un poco más o bajando levemente el precio para captar más mercado y aumentar su utilidad. Como TODAS enfrentan ese mismo incentivo, el acuerdo tiende a romperse: la estrategia dominante de cada una es desviarse, lo que lleva a un equilibrio de Nash con más producción y menor precio que el colusivo. Por eso la colusión requiere mecanismos de monitoreo, castigo y, muchas veces, es sancionada por la ley (es ilegal).",
      criterios: [
        { texto: "a) Explica la interdependencia estratégica del oligopolio", peso: 2 },
        { texto: "a) Distingue el resultado colusivo (como monopolio, precio alto) del competitivo (precio bajo, mayor cantidad)", peso: 2 },
        { texto: "b) Ubica el oligopolio (Cournot) entre monopolio y competencia y señala que más empresas acercan el resultado al competitivo", peso: 3 },
        { texto: "c) Explica la inestabilidad de la colusión con la lógica del dilema del prisionero (incentivo individual a desviarse)", peso: 2 }
      ],
      erroresComunes: [
        "Tratar al oligopolio como competencia perfecta (P = CMg): el oligopolio mantiene poder de mercado y precios por sobre el costo marginal.",
        "Afirmar que la colusión es estable por sí sola: cada miembro tiene incentivo a hacer trampa, lo que la vuelve frágil.",
        "Ignorar que al aumentar el número de firmas el equilibrio del oligopolio converge al competitivo."
      ]
    },

    {
      id: "eco-092",
      tema: "Información asimétrica: señalización (signaling) y filtrado (screening) como soluciones",
      dificultad: "dificil",
      enunciado: "En mercados con información asimétrica, la parte mejor informada y la peor informada pueden usar mecanismos para reducir el problema.\n\na) Explique brevemente en qué consiste la selección adversa y por qué puede llevar al colapso de un mercado (ejemplo de los autos usados o \"mercado de limones\"). 3 puntos\n\nb) Explique qué es la señalización (signaling) y dé un ejemplo (por ejemplo, la educación como señal en el mercado laboral). 4 puntos\n\nc) Explique qué es el filtrado o screening y en qué se diferencia de la señalización. 3 puntos",
      respuestaModelo: "a) La SELECCIÓN ADVERSA es un problema de información asimétrica PREVIO a la transacción: una parte conoce una característica oculta relevante que la otra desconoce. En el mercado de autos usados (\"mercado de limones\" de Akerlof), el vendedor conoce la calidad real del auto, el comprador no. Como el comprador no puede distinguir un auto bueno de uno malo (\"limón\"), solo está dispuesto a pagar un precio promedio. A ese precio, los dueños de autos buenos se retiran del mercado (no les conviene vender barato), quedando proporcionalmente más autos malos. Esto baja aún más el precio y expulsa más autos buenos, en una espiral que puede llevar al COLAPSO del mercado (solo quedan limones).\n\nb) La SEÑALIZACIÓN (signaling) es una acción que toma la parte MEJOR informada para REVELAR CREÍBLEMENTE su información oculta a la parte peor informada. Para que la señal funcione debe ser COSTOSA y más barata (o más fácil) para el tipo \"bueno\" que para el \"malo\", de modo que solo al bueno le convenga emitirla. Ejemplo clásico (Spence): la EDUCACIÓN como señal en el mercado laboral. Un trabajador de alta productividad usa un título o credencial para SEÑALIZAR su capacidad al empleador que no puede observarla directamente; como estudiar es menos costoso para el más capaz, el título separa a los productivos de los menos productivos, aunque la educación no aumentara directamente la productividad. Otros ejemplos: la garantía de un producto (señal de calidad), el gasto en publicidad.\n\nc) El FILTRADO o SCREENING es un mecanismo que emplea la parte PEOR informada para INDUCIR a la mejor informada a REVELAR su información, típicamente ofreciendo un menú de opciones diseñado para que cada tipo se autoseleccione. La diferencia clave con la señalización está en QUIÉN actúa: en la señalización actúa la parte INFORMADA (emite la señal); en el screening actúa la parte NO INFORMADA (diseña el mecanismo de selección). Ejemplo: una aseguradora que ofrece distintos planes (uno con prima alta y cobertura total, otro con prima baja y deducible alto) para que los clientes de alto riesgo elijan uno y los de bajo riesgo otro, revelando así su tipo. Un banco que pide garantías, o un empleador que ofrece contratos con distinta estructura de incentivos, también hacen screening.",
      criterios: [
        { texto: "a) Explica la selección adversa y el colapso del mercado de limones", peso: 2 },
        { texto: "b) Define señalización como acción costosa de la parte informada para revelar su tipo (con la condición de costo diferencial)", peso: 2 },
        { texto: "b) Da un ejemplo válido de señalización (educación como señal, garantía, publicidad)", peso: 2 },
        { texto: "c) Define screening y lo diferencia de la señalización según quién actúa (parte no informada diseña el menú de autoselección)", peso: 2 }
      ],
      erroresComunes: [
        "Confundir señalización con screening: en la primera actúa la parte informada; en el segundo, la parte no informada.",
        "Afirmar que una señal sirve aunque sea gratis: para ser creíble debe ser costosa y con costo diferencial entre tipos.",
        "Confundir selección adversa (característica oculta, antes del contrato) con riesgo moral (acción oculta, después del contrato)."
      ]
    },

    {
      id: "eco-093",
      tema: "Mercado de fondos prestables en economía abierta: ahorro, inversión y salida de capital",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Considere una economía abierta pequeña. Analice el efecto de un aumento del RIESGO PAÍS (que reduce la confianza de los inversionistas extranjeros) sobre las siguientes variables. Fundamente analítica y gráficamente.\n\na) La salida neta de capital y la tasa de interés interna, situándose en el mercado de fondos prestables. 4 puntos\n\nb) El tipo de cambio real, situándose en el mercado de divisas. 4 puntos\n\nc) Las exportaciones netas y la balanza comercial. 3 puntos",
      respuestaModelo: "a) En una economía abierta, el mercado de fondos prestables tiene como oferta el ahorro nacional y como demanda la inversión interna MÁS la salida neta de capital (SNC). Un aumento del RIESGO PAÍS hace menos atractivos los activos locales para los extranjeros y, en general, incentiva a residentes a invertir afuera: aumenta la SALIDA NETA DE CAPITAL a cualquier tasa. Esto INCREMENTA la demanda de fondos prestables (para adquirir activos externos), desplazándola a la derecha. En el mercado de fondos, ello presiona AL ALZA la tasa de interés interna: el país debe pagar más para retener ahorro. (En el enfoque de economía pequeña con premio por riesgo, la tasa local se eleva respecto de la mundial en el monto del mayor riesgo.)\n\nDescripción del gráfico esperado: mercado de fondos prestables con oferta (ahorro) creciente y demanda (I + SNC) que se desplaza a la derecha; nueva tasa de interés interna mayor.\n\nb) La mayor salida neta de capital implica que los residentes quieren comprar más activos extranjeros, para lo cual demandan más DIVISAS (dólares). En el mercado de divisas, aumenta la DEMANDA de moneda extranjera (o, equivalentemente, aumenta la oferta de moneda local en el exterior), lo que DEPRECIA la moneda local: el tipo de cambio real SUBE (se necesita más moneda local por unidad extranjera).\n\nDescripción del gráfico esperado: mercado de divisas con el tipo de cambio real en el eje vertical; la oferta de moneda local (proveniente de la SNC) se desplaza a la derecha, depreciando la moneda (tipo de cambio real mayor).\n\nc) La depreciación real abarata los bienes nacionales frente a los extranjeros: las exportaciones se vuelven más competitivas y las importaciones se encarecen. Por lo tanto, las EXPORTACIONES NETAS AUMENTAN y la balanza comercial mejora (se mueve hacia el superávit). Esto es consistente con la identidad SNC = Xn: la mayor salida neta de capital se corresponde con un mayor superávit comercial. En síntesis: mayor riesgo país eleva la tasa interna, deprecia la moneda y aumenta las exportaciones netas.",
      criterios: [
        { texto: "a) Explica que el mayor riesgo país aumenta la salida neta de capital y la demanda de fondos, elevando la tasa de interés interna, con gráfico correcto", peso: 3 },
        { texto: "a) Identifica correctamente el desplazamiento en el mercado de fondos prestables", peso: 1 },
        { texto: "b) Explica y grafica que la mayor SNC deprecia la moneda (sube el tipo de cambio real) en el mercado de divisas", peso: 3 },
        { texto: "c) Concluye que las exportaciones netas aumentan (mejora la balanza comercial), consistente con SNC = Xn", peso: 2 }
      ],
      erroresComunes: [
        "Concluir que la depreciación empeora la balanza comercial: la depreciación real aumenta las exportaciones netas.",
        "Olvidar la identidad SNC = Xn, que conecta el mercado de fondos con el de divisas y la balanza comercial.",
        "Suponer que la tasa de interés interna baja ante fuga de capitales: la salida de capital y el mayor riesgo la elevan."
      ]
    },

    {
      id: "eco-094",
      tema: "Modelo IS-LM: derivación y combinación de políticas fiscal y monetaria (policy mix)",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "a) Explique qué representa la curva IS y qué representa la curva LM, y por qué tienen las pendientes que tienen. 4 puntos\n\nb) Una economía está en recesión y el gobierno desea reactivar el producto SIN que suba la tasa de interés (para no dañar la inversión privada). Explique y grafique una combinación de políticas fiscal y monetaria (policy mix) que logre ese objetivo. 5 puntos\n\nc) Explique el efecto de ese policy mix sobre la composición del gasto (consumo público vs. inversión privada). 3 puntos",
      respuestaModelo: "a) La curva IS representa las combinaciones de tasa de interés (r) y producto (Y) que equilibran el MERCADO DE BIENES (donde el gasto planeado iguala a la producción). Tiene pendiente NEGATIVA porque una menor tasa de interés estimula la inversión (y el consumo), elevando el gasto agregado y el producto de equilibrio. La curva LM representa las combinaciones de r e Y que equilibran el MERCADO DEL DINERO (demanda de dinero igual a oferta). Tiene pendiente POSITIVA porque un mayor producto aumenta la demanda de dinero por transacciones, lo que, con una oferta de dinero dada, exige una tasa de interés más alta para equilibrar.\n\nb) Para elevar el producto SIN que suba la tasa de interés, se combina:\n- POLÍTICA FISCAL EXPANSIVA (mayor gasto público o menores impuestos): desplaza la IS a la DERECHA, lo que por sí sola subiría el producto PERO también la tasa de interés (generando crowding out sobre la inversión privada).\n- POLÍTICA MONETARIA EXPANSIVA (aumento de la oferta de dinero): desplaza la LM a la DERECHA, bajando la tasa de interés.\n\nCombinando ambas, la expansión monetaria COMPENSA el alza de tasa provocada por la expansión fiscal: la tasa de interés se mantiene aproximadamente CONSTANTE, mientras que el producto aumenta por el efecto conjunto de ambos desplazamientos. Este es un policy mix \"acomodaticio\".\n\nDescripción del gráfico esperado: ejes r e Y; IS0 se desplaza a IS1 (derecha) y LM0 a LM1 (derecha); el nuevo equilibrio tiene Y mayor y r igual (o casi igual) al inicial.\n\nc) Al mantener la tasa de interés constante, se EVITA el efecto expulsión (crowding out): la inversión privada no se contrae por alza de tasas. El mayor producto se logra tanto por el mayor gasto público como por el mantenimiento de la inversión privada. Sin embargo, la composición del gasto se altera respecto de una expansión puramente monetaria: aumenta la PARTICIPACIÓN del gasto público (o del componente estimulado por la política fiscal) en el producto. Si en cambio se hubiese usado solo política fiscal, la mayor tasa habría desplazado inversión privada; el policy mix protege esa inversión al acomodar monetariamente el impulso.",
      criterios: [
        { texto: "a) Explica qué representan la IS (mercado de bienes) y la LM (mercado del dinero) y justifica sus pendientes", peso: 2 },
        { texto: "a) Fundamenta correctamente la pendiente negativa de la IS y positiva de la LM", peso: 2 },
        { texto: "b) Propone expansión fiscal (IS a la derecha) más expansión monetaria (LM a la derecha) para subir Y manteniendo r", peso: 3 },
        { texto: "b) Grafica correctamente ambos desplazamientos con producto mayor y tasa constante", peso: 1 },
        { texto: "c) Explica que se evita el crowding out y cómo cambia la composición del gasto", peso: 1 }
      ],
      erroresComunes: [
        "Creer que la política fiscal mueve la LM o la monetaria mueve la IS: la fiscal desplaza la IS, la monetaria la LM.",
        "Olvidar el crowding out de una expansión fiscal pura, que es justamente lo que el policy mix busca evitar.",
        "Confundir las pendientes de IS y LM."
      ]
    },

    {
      id: "eco-095",
      tema: "Mundell-Fleming: shock externo (alza de la tasa mundial) con tipo de cambio fijo vs. flexible",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Una economía pequeña y abierta con perfecta movilidad de capitales enfrenta un alza de la tasa de interés MUNDIAL (por ejemplo, un endurecimiento de la política de la Reserva Federal). Usando el modelo Mundell-Fleming:\n\na) Explique y grafique el efecto sobre el tipo de cambio y el producto si el país tiene tipo de cambio FLEXIBLE. 5 puntos\n\nb) Explique y grafique el efecto si el país tiene tipo de cambio FIJO y el banco central debe defender la paridad. 4 puntos\n\nc) Compare ambos regímenes en cuanto a la autonomía de la política monetaria. 3 puntos",
      respuestaModelo: "En Mundell-Fleming con perfecta movilidad de capitales, la tasa de interés interna tiende a igualarse a la tasa mundial (r = r*). Un alza de r* rompe ese equilibrio: con la tasa local inicialmente por debajo de la nueva tasa mundial, sale capital del país en busca de mayor rendimiento externo.\n\na) TIPO DE CAMBIO FLEXIBLE: la salida de capitales aumenta la demanda de divisas y DEPRECIA la moneda local. La depreciación abarata las exportaciones y encarece las importaciones, aumentando las exportaciones netas, lo que desplaza la demanda (IS/DA) a la DERECHA y EXPANDE el producto. El ajuste ocurre vía tipo de cambio: la moneda se deprecia hasta que la tasa interna vuelve a igualar a la mundial (r sube a r*), con un producto MAYOR gracias a las mayores exportaciones netas. En este régimen, el banco central NO gasta reservas; el tipo de cambio absorbe el shock.\n\nDescripción del gráfico esperado: esquema Mundell-Fleming (r vs Y) con la línea horizontal de tasa mundial que sube de r0* a r1*; la moneda se deprecia y la IS se desplaza a la derecha; nuevo equilibrio con r = r1* mayor e Y mayor.\n\nb) TIPO DE CAMBIO FIJO: el banco central se compromete a mantener la paridad. Ante la salida de capitales que presiona a la depreciación, el banco central debe VENDER RESERVAS internacionales (comprar moneda local) para sostener el tipo de cambio. Esa compra de moneda local CONTRAE la oferta monetaria (la LM se desplaza a la izquierda), elevando la tasa de interés interna hasta igualar la mundial (r sube a r*). El resultado es una CONTRACCIÓN monetaria \"forzada\" y una caída (o no expansión) del producto, además de una pérdida de reservas. El banco central pierde el control de su oferta de dinero: la subordina a defender la paridad.\n\nDescripción del gráfico esperado: la LM se desplaza a la izquierda por la venta de reservas; la tasa interna sube a r1* y el producto cae.\n\nc) COMPARACIÓN de autonomía monetaria: bajo tipo de cambio FLEXIBLE, el país CONSERVA autonomía monetaria y el ajuste lo hace el tipo de cambio (la moneda se deprecia y hasta amortigua el shock, expandiendo el producto). Bajo tipo de cambio FIJO con libre movilidad de capitales, el país PIERDE la autonomía monetaria: la oferta de dinero queda determinada por la necesidad de defender la paridad, y la tasa de interés local debe seguir a la mundial. Esto ilustra la \"trinidad imposible\": no se pueden tener simultáneamente tipo de cambio fijo, libre movilidad de capitales y política monetaria autónoma.",
      criterios: [
        { texto: "a) Explica que con tipo de cambio flexible la moneda se deprecia, suben las exportaciones netas y el producto se expande; grafica correctamente", peso: 3 },
        { texto: "a) Señala que el banco central no gasta reservas: el tipo de cambio absorbe el shock", peso: 2 },
        { texto: "b) Explica que con tipo de cambio fijo el banco central vende reservas, contrae la oferta monetaria (LM a la izquierda) y sube la tasa interna", peso: 3 },
        { texto: "c) Compara la autonomía monetaria de ambos regímenes (flexible la conserva; fijo la pierde) y/o menciona la trinidad imposible", peso: 2 }
      ],
      erroresComunes: [
        "Suponer que con tipo de cambio fijo el banco central conserva autonomía monetaria: debe subordinar la oferta de dinero a defender la paridad.",
        "Confundir el sentido del ajuste: bajo flexible ajusta el tipo de cambio; bajo fijo ajustan las reservas y la oferta monetaria.",
        "Ignorar que la salida de capitales bajo tipo de cambio flexible, al depreciar la moneda, puede terminar expandiendo el producto vía exportaciones netas."
      ]
    },

    {
      id: "eco-096",
      tema: "Inconsistencia temporal, reglas vs. discreción e independencia del Banco Central",
      dificultad: "dificil",
      enunciado: "a) Explique el problema de la inconsistencia temporal de la política monetaria y cómo puede generar un sesgo inflacionario. 4 puntos\n\nb) Explique la diferencia entre conducir la política monetaria mediante reglas y mediante discreción, y qué ventajas tiene la credibilidad de la autoridad. 4 puntos\n\nc) Explique por qué la independencia del Banco Central se considera un mecanismo para reducir el sesgo inflacionario. 3 puntos",
      respuestaModelo: "a) La INCONSISTENCIA TEMPORAL ocurre cuando una política que es óptima anunciar hoy deja de ser óptima ejecutar mañana, una vez que los agentes formaron sus expectativas. En política monetaria: la autoridad anuncia que mantendrá baja la inflación; los trabajadores y empresas fijan salarios y precios creyendo ese anuncio. Pero una vez fijadas las expectativas, la autoridad tiene la TENTACIÓN de generar una inflación sorpresa para expandir el producto y reducir el desempleo por debajo del natural (aprovechando la curva de Phillips de corto plazo). Como los agentes son racionales y ANTICIPAN esta tentación, incorporan de antemano mayor inflación esperada en sus decisiones. El resultado es un SESGO INFLACIONARIO: mayor inflación de equilibrio SIN ganancia de producto (la economía queda con más inflación y el mismo desempleo natural).\n\nb) Bajo REGLAS, la autoridad se compromete de antemano a seguir un criterio preanunciado (por ejemplo, una meta de inflación, o una regla de tasa), limitando su discrecionalidad. Bajo DISCRECIÓN, decide período a período según le convenga, sin atarse a un compromiso. Las reglas ayudan a resolver la inconsistencia temporal porque eliminan la tentación de generar inflación sorpresa y hacen CREÍBLE el compromiso antiinflacionario. La CREDIBILIDAD es clave: si los agentes creen que la autoridad cumplirá su meta, forman expectativas de baja inflación, y así la desinflación se logra con MENOR costo en términos de producto y empleo (menor \"tasa de sacrificio\"). Una autoridad sin credibilidad, en cambio, debe pagar un costo mayor para reducir la inflación.\n\nc) La INDEPENDENCIA del Banco Central (autonomía respecto del gobierno de turno) reduce el sesgo inflacionario porque aísla la política monetaria de presiones POLÍTICAS de corto plazo: los gobiernos podrían tener incentivos a estimular la economía antes de elecciones o a monetizar déficits fiscales, generando inflación. Un banco central independiente, con mandato centrado en la estabilidad de precios y con horizonte de largo plazo, puede COMPROMETERSE de forma más creíble a mantener baja la inflación. La evidencia asocia mayor independencia con menor inflación promedio, sin costo en crecimiento de largo plazo. En Chile, el Banco Central es autónomo y su objetivo principal es la estabilidad de precios.",
      criterios: [
        { texto: "a) Explica la inconsistencia temporal (tentación de inflación sorpresa tras fijadas las expectativas)", peso: 2 },
        { texto: "a) Explica cómo genera sesgo inflacionario (mayor inflación sin ganancia de producto por expectativas racionales)", peso: 2 },
        { texto: "b) Distingue reglas de discreción y explica el valor de la credibilidad (menor costo de desinflar)", peso: 3 },
        { texto: "c) Explica que la independencia del Banco Central reduce el sesgo inflacionario al aislar la política de presiones políticas", peso: 2 }
      ],
      erroresComunes: [
        "Confundir inconsistencia temporal con simple incumplimiento: es que la política óptima cambia una vez formadas las expectativas.",
        "Creer que la inflación sorpresa genera ganancias permanentes de producto: solo funciona por sorpresa; anticipada, solo deja más inflación.",
        "Ignorar el rol de la credibilidad en abaratar el costo de reducir la inflación."
      ]
    },

    {
      id: "eco-097",
      tema: "Fluctuaciones económicas: shock de demanda negativo, brecha del producto y estabilización",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Una economía sufre una fuerte caída de la confianza de consumidores e inversionistas, que reduce el consumo y la inversión privados.\n\na) Explique y grafique, en el modelo de oferta y demanda agregada, el efecto de corto plazo de este shock sobre el producto y el nivel de precios. 4 puntos\n\nb) Explique qué es la brecha del producto (recesiva) resultante y cómo la economía retornaría al producto potencial SIN intervención (mecanismo de autoajuste). 4 puntos\n\nc) Explique qué política de estabilización (fiscal o monetaria) podría acelerar la recuperación y sus riesgos. 3 puntos",
      respuestaModelo: "a) La caída de confianza reduce el consumo (C) y la inversión (I), componentes de la demanda agregada. La curva de DEMANDA AGREGADA se desplaza hacia la IZQUIERDA (DA0 a DA1). En el corto plazo, con la oferta agregada de corto plazo dada, el nuevo equilibrio muestra MENOR producto (Y cae por debajo del potencial) y MENOR nivel de precios (o menor inflación). La economía entra en recesión.\n\nDescripción del gráfico esperado: ejes P e Y; OA de corto plazo con pendiente positiva y OA de largo plazo vertical en Yp; la DA se desplaza a la izquierda; el equilibrio de corto plazo pasa a un Y1 < Yp y un P1 < P0.\n\nb) La BRECHA DEL PRODUCTO (recesiva) es la diferencia entre el producto efectivo (Y1) y el producto potencial (Yp): aquí Y1 < Yp, hay capacidad ociosa y desempleo por sobre el natural. Mecanismo de AUTOAJUSTE sin intervención: con alto desempleo y recursos ociosos, con el tiempo los salarios y precios (que eran rígidos en el corto plazo) tienden a BAJAR. Esa caída de costos desplaza la OFERTA AGREGADA de corto plazo hacia la DERECHA/abajo, lo que reduce los precios y reactiva la producción, hasta que la economía RETORNA al producto potencial Yp, ahora con un nivel de precios más bajo. El autoajuste es lento y costoso en desempleo mientras dura.\n\nc) POLÍTICA DE ESTABILIZACIÓN: para acelerar la recuperación se puede aplicar una política expansiva que devuelva la DA a su nivel original: fiscal (aumento del gasto público o baja de impuestos) o monetaria (baja de la tasa de interés / aumento de la oferta de dinero). Cualquiera desplaza la DA de vuelta a la derecha, cerrando la brecha recesiva más rápido, con menos desempleo transitorio. RIESGOS: (1) rezagos de reconocimiento e implementación (la política puede actuar tarde, cuando la economía ya se recuperó, resultando procíclica); (2) si se sobreestimula, generar inflación; (3) la política fiscal puede aumentar el déficit y la deuda; (4) errores de diagnóstico sobre la magnitud de la brecha.",
      criterios: [
        { texto: "a) Identifica el shock como desplazamiento de la DA a la izquierda y concluye caída de producto y precios; grafica correctamente", peso: 3 },
        { texto: "a) Ubica el producto por debajo del potencial (recesión)", peso: 1 },
        { texto: "b) Define la brecha recesiva y explica el autoajuste vía caída de salarios/precios que desplaza la OA de corto plazo a la derecha", peso: 3 },
        { texto: "c) Propone una política de estabilización expansiva (fiscal o monetaria) y menciona al menos un riesgo (rezagos, inflación, deuda)", peso: 2 }
      ],
      erroresComunes: [
        "Desplazar la oferta agregada en vez de la demanda ante un shock de confianza que afecta C e I.",
        "Afirmar que la economía nunca se recupera sin intervención: existe un autoajuste vía precios y salarios, aunque lento.",
        "Omitir los riesgos y rezagos de las políticas de estabilización (pueden resultar procíclicas)."
      ]
    },

    {
      id: "eco-098",
      tema: "La trampa de liquidez y los límites de la política monetaria",
      dificultad: "dificil",
      enunciado: "a) Explique qué es una trampa de liquidez y por qué en esa situación la política monetaria convencional pierde eficacia para estimular la economía. 5 puntos\n\nb) Explique qué alternativas de política existen cuando la economía está en una trampa de liquidez (por ejemplo, política fiscal o medidas monetarias no convencionales). 4 puntos\n\nc) Relacione esta situación con la efectividad relativa de la política fiscal en el modelo IS-LM. 3 puntos",
      respuestaModelo: "a) Una TRAMPA DE LIQUIDEZ es una situación en que la tasa de interés nominal se encuentra en (o muy cerca de) su límite inferior, cercano a CERO, y no puede bajar más. En esas condiciones, la demanda de dinero se vuelve muy elástica (casi horizontal): las personas están dispuestas a mantener cualquier cantidad de dinero adicional sin que la tasa baje, porque el costo de oportunidad de mantener liquidez es casi nulo y esperan que las tasas no caigan más. Por eso, cuando el banco central AUMENTA la oferta de dinero (política monetaria expansiva), la tasa de interés YA NO PUEDE bajar más, y no se estimula la inversión ni el consumo: la política monetaria convencional PIERDE EFICACIA (\"empujar una cuerda\"). El dinero inyectado se acumula como saldos ociosos en vez de traducirse en gasto.\n\nDescripción del gráfico esperado: en el modelo IS-LM, un tramo horizontal de la LM a la tasa mínima; desplazar la LM hacia la derecha en ese tramo no cambia la tasa ni el producto.\n\nb) ALTERNATIVAS: (1) POLÍTICA FISCAL expansiva: como la política monetaria es inefectiva, el gasto público o las rebajas de impuestos pasan a ser la herramienta principal para estimular la demanda agregada, desplazando la IS a la derecha SIN que suba la tasa (no hay crowding out en la trampa de liquidez). (2) Medidas monetarias NO CONVENCIONALES: expansión cuantitativa (compra masiva de activos de largo plazo para bajar tasas largas), \"forward guidance\" (comprometer tasas bajas por tiempo prolongado para elevar la inflación esperada y bajar la tasa real), o elevar la meta de inflación. (3) Políticas que aumenten la inflación esperada, reduciendo la tasa de interés REAL aun con la nominal en cero.\n\nc) En el modelo IS-LM, la trampa de liquidez corresponde al tramo HORIZONTAL de la LM. Allí, la POLÍTICA FISCAL es MÁXIMAMENTE EFECTIVA: un desplazamiento de la IS a la derecha aumenta el producto en toda su magnitud, sin elevar la tasa de interés y, por tanto, SIN efecto expulsión sobre la inversión privada. En cambio, la política MONETARIA es inefectiva: desplazar la LM en su tramo horizontal no altera ni la tasa ni el producto. Es el caso opuesto al de una LM muy empinada.",
      criterios: [
        { texto: "a) Define la trampa de liquidez (tasa en su límite inferior cercano a cero, demanda de dinero muy elástica)", peso: 2 },
        { texto: "a) Explica por qué la política monetaria pierde eficacia (la tasa no puede bajar más; el dinero se atesora)", peso: 3 },
        { texto: "b) Propone alternativas válidas (política fiscal, expansión cuantitativa, forward guidance, elevar inflación esperada)", peso: 2 },
        { texto: "c) Relaciona con el IS-LM: tramo horizontal de la LM, donde la política fiscal es máximamente efectiva sin crowding out", peso: 2 }
      ],
      erroresComunes: [
        "Afirmar que la política monetaria siempre es efectiva: en la trampa de liquidez pierde su capacidad de bajar tasas y estimular el gasto.",
        "Sostener que la política fiscal genera crowding out en la trampa de liquidez: allí no eleva la tasa, por lo que no expulsa inversión.",
        "Confundir la tasa nominal cero con la imposibilidad de afectar la tasa real (se puede vía inflación esperada)."
      ]
    },

    {
      id: "eco-099",
      tema: "Competencia perfecta: la curva de oferta de la industria en el largo plazo",
      dificultad: "dificil",
      enunciado: "En un mercado de competencia perfecta con libre entrada y salida:\n\na) Explique por qué, en el largo plazo, las empresas obtienen beneficio económico CERO y producen en el mínimo de su costo medio de largo plazo. 4 puntos\n\nb) Derive la forma de la curva de oferta de la INDUSTRIA en el largo plazo para el caso de una industria de costos CONSTANTES, y explique cómo cambia si es una industria de costos CRECIENTES. 5 puntos\n\nc) Explique el papel que juega la entrada y salida de empresas en este ajuste. 3 puntos",
      respuestaModelo: "a) En competencia perfecta con libre entrada y salida, el beneficio económico de largo plazo es CERO. La razón: si las empresas obtienen beneficios económicos positivos, entran nuevas firmas atraídas por esas utilidades, lo que aumenta la oferta del mercado y BAJA el precio; si hay pérdidas, salen firmas, la oferta cae y el precio SUBE. Este proceso continúa hasta que el precio iguala al mínimo del costo medio de largo plazo y el beneficio económico es cero (utilidad normal). Además, como cada empresa produce donde P = CMg y en el largo plazo P = mínimo del CMeLP, la empresa termina produciendo en el MÍNIMO de su costo medio de largo plazo, es decir, en su escala eficiente (P = IMg = CMg = CMeLP mínimo).\n\nb) INDUSTRIA DE COSTOS CONSTANTES: los precios de los insumos NO cambian al expandirse la industria (la entrada de firmas no eleva los costos). Como en el largo plazo el precio siempre vuelve al mínimo del CMeLP (que no varía), la curva de oferta de la industria en el largo plazo es HORIZONTAL (perfectamente elástica) a ese precio: ante un aumento de la demanda, en el largo plazo se produce más cantidad al MISMO precio, porque entran nuevas empresas idénticas.\n\nDescripción del gráfico esperado: oferta de largo plazo de la industria como una línea horizontal al nivel del mínimo del CMeLP.\n\nINDUSTRIA DE COSTOS CRECIENTES: al expandirse la industria y demandar más insumos, los precios de los factores SUBEN, elevando las curvas de costos de todas las empresas. Por ello, para que quepan más firmas se requiere un precio MAYOR. La curva de oferta de la industria en el largo plazo tiene PENDIENTE POSITIVA (creciente), aunque más elástica (plana) que la de corto plazo, porque la entrada de firmas amortigua el alza de precio.\n\nc) La ENTRADA y SALIDA de empresas es el mecanismo que ajusta el mercado en el largo plazo: elimina beneficios o pérdidas económicas y determina la cantidad total ofrecida. Es lo que hace que la oferta de largo plazo sea mucho más elástica que la de corto plazo (donde el número de firmas es fijo): en el largo plazo la cantidad se ajusta principalmente por el número de empresas, no solo por la producción de cada una.",
      criterios: [
        { texto: "a) Explica el beneficio económico cero de largo plazo por libre entrada y salida", peso: 2 },
        { texto: "a) Explica que la empresa produce en el mínimo del CMeLP (P = CMg = CMeLP mínimo)", peso: 2 },
        { texto: "b) Deriva la oferta de largo plazo horizontal para costos constantes", peso: 2 },
        { texto: "b) Explica la oferta de largo plazo con pendiente positiva para costos crecientes (suben precios de insumos)", peso: 2 },
        { texto: "c) Explica el rol de la entrada y salida de empresas en el ajuste de largo plazo", peso: 1 }
      ],
      erroresComunes: [
        "Afirmar que en competencia perfecta las empresas obtienen utilidades económicas en el largo plazo: la libre entrada las lleva a cero (utilidad normal).",
        "Dibujar la oferta de largo plazo de una industria de costos constantes con pendiente positiva: es horizontal.",
        "Ignorar que el ajuste de largo plazo opera principalmente por entrada y salida de firmas."
      ]
    },

    {
      id: "eco-100",
      tema: "Política comercial: comparación entre arancel y cuota de importación",
      dificultad: "dificil",
      enunciado: "Un país importador de un bien evalúa proteger a su industria nacional mediante un arancel o mediante una cuota de importación.\n\na) Explique y grafique los efectos de un ARANCEL sobre el precio interno, la producción nacional, las importaciones, la recaudación fiscal y el bienestar. 5 puntos\n\nb) Explique en qué se diferencia una CUOTA de importación de un arancel, y quién captura la \"renta\" que en el arancel iba al fisco. 4 puntos\n\nc) Concluya cuál instrumento suele ser preferible desde el punto de vista del país y por qué. 3 puntos",
      respuestaModelo: "a) Partiendo del libre comercio, el país importador enfrenta un precio internacional Pm menor al precio de autarquía. Un ARANCEL (impuesto por unidad importada) ELEVA el precio interno a Pm + t. Efectos: el precio interno SUBE; la producción NACIONAL aumenta (los productores locales, protegidos, producen más, moviéndose sobre su curva de oferta); la cantidad DEMANDADA cae; las IMPORTACIONES DISMINUYEN (la brecha entre demanda y oferta interna se reduce). La RECAUDACIÓN fiscal es el arancel por la cantidad importada (t × importaciones). En bienestar: el excedente del CONSUMIDOR cae; el del PRODUCTOR sube; el fisco recauda; y queda una PÉRDIDA IRRECUPERABLE de eficiencia social (dos triángulos: uno por sobreproducción ineficiente interna y otro por subconsumo).\n\nDescripción del gráfico esperado: oferta y demanda internas; línea de precio internacional Pm y línea Pm + t; se identifican la nueva producción interna, el nuevo consumo, las importaciones reducidas, el rectángulo de recaudación arancelaria y los dos triángulos de pérdida social.\n\nb) Una CUOTA de importación fija directamente una CANTIDAD MÁXIMA que puede importarse, en lugar de gravar. Al restringir la oferta importada, el precio interno también SUBE (de forma equivalente a un arancel que produzca la misma reducción de importaciones). La diferencia clave está en la RENTA equivalente a la recaudación: en el arancel, esa área (precio interno menos precio internacional, por la cantidad importada) va al FISCO. En la cuota, esa misma área es una \"RENTA DE CUOTA\" que captura QUIEN posee las licencias o permisos de importación (importadores con cuota, o productores extranjeros si estos fijan el precio). Si las licencias se reparten discrecionalmente, la renta va a privados (con riesgo de lobby y corrupción); si el Estado las SUBASTA, puede recuperar esa renta (asemejándose al arancel).\n\nc) Desde el punto de vista del país, el ARANCEL suele ser PREFERIBLE a una cuota (que produzca la misma protección), porque: (1) la renta la captura el FISCO (recaudación pública) en vez de importadores privados o extranjeros; (2) es más transparente y menos propenso a la asignación discrecional de licencias, el lobby y la corrupción; (3) mantiene algo de competencia de precios (con una cuota, un aumento de demanda se traduce solo en mayor precio, no en más importaciones). Ambos, sin embargo, generan pérdida de eficiencia respecto del libre comercio.",
      criterios: [
        { texto: "a) Explica los efectos del arancel (sube precio interno, más producción nacional, menos importaciones, recaudación) y la pérdida social; grafica correctamente", peso: 3 },
        { texto: "a) Identifica los cambios de excedentes (consumidor cae, productor sube, fisco recauda, pérdida irrecuperable)", peso: 2 },
        { texto: "b) Explica que la cuota fija una cantidad y sube el precio, y que la renta de cuota la captura quien tiene las licencias (no el fisco, salvo subasta)", peso: 3 },
        { texto: "c) Concluye que el arancel suele ser preferible (renta al fisco, transparencia, menos discrecionalidad)", peso: 2 }
      ],
      erroresComunes: [
        "Afirmar que la cuota no afecta el precio interno: al restringir cantidad, eleva el precio igual que un arancel equivalente.",
        "Suponer que la renta de cuota siempre va al Estado: solo si se subastan las licencias; de lo contrario la capturan privados o extranjeros.",
        "Olvidar la pérdida de eficiencia que ambos instrumentos generan respecto del libre comercio."
      ]
    },

    {
      id: "eco-101",
      tema: "Corrección de externalidades: impuesto pigouviano vs. permisos de emisión transables",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "El Estado busca reducir la contaminación de una industria mediante dos instrumentos de mercado: un impuesto por unidad emitida (pigouviano) o un sistema de permisos de emisión transables (cap and trade).\n\na) Explique cómo cada instrumento internaliza la externalidad negativa y lleva la contaminación hacia el nivel eficiente. 5 puntos\n\nb) Explique la diferencia clave entre ambos: qué variable fija el regulador en cada caso (precio vs. cantidad) y qué ventaja tiene un sistema de permisos transables en cuanto a costo de reducción entre empresas. 4 puntos\n\nc) Explique cómo influye la incertidumbre sobre los costos de reducción en la elección entre ambos instrumentos. 3 puntos",
      respuestaModelo: "a) Una externalidad negativa (contaminación) hace que el costo SOCIAL supere al costo privado, por lo que sin intervención la industria produce y contamina MÁS de lo eficiente. Ambos instrumentos INTERNALIZAN el costo externo:\n- IMPUESTO PIGOUVIANO: cobra un monto por cada unidad de contaminación igual al daño marginal externo. Con ello, cada empresa incorpora ese costo en su decisión y reduce sus emisiones hasta el punto donde su costo marginal de reducir la contaminación iguala al impuesto. El nivel de contaminación cae al eficiente y se recauda.\n- PERMISOS TRANSABLES (cap and trade): el regulador fija una cantidad TOTAL de emisiones permitidas (el \"cap\", igual al nivel eficiente) y emite permisos por esa cantidad, que las empresas deben poseer para contaminar. Los permisos se pueden COMPRAR y VENDER en un mercado. El precio de mercado del permiso cumple el mismo papel que el impuesto: las empresas reducen emisiones hasta igualar su costo marginal de abatimiento al precio del permiso.\n\nb) DIFERENCIA CLAVE: el impuesto fija el PRECIO de contaminar (el monto por unidad) y deja que el mercado determine la CANTIDAD total de emisiones; los permisos fijan la CANTIDAD total (el cap) y dejan que el mercado determine el PRECIO. VENTAJA de los permisos transables en cuanto a costo: como los permisos se transan, las empresas con BAJO costo de reducción reducen más (y venden permisos), y las de ALTO costo de reducción compran permisos y reducen menos. Así, la reducción total se logra al MENOR costo agregado posible: quienes pueden abatir barato lo hacen, y quienes abatir es caro pagan. (El impuesto logra una eficiencia de costos análoga, pues todas igualan su costo marginal de abatimiento al impuesto.)\n\nc) Bajo INCERTIDUMBRE sobre los costos de reducción, la elección importa: si el regulador fija un IMPUESTO (precio), tiene certeza del costo marginal que enfrentarán las empresas, pero INCERTIDUMBRE sobre la cantidad final de contaminación. Si fija PERMISOS (cantidad), tiene certeza del nivel de contaminación (el cap), pero incertidumbre sobre el precio (costo) que soportarán las empresas. Por ello: si lo crítico es NO superar un nivel de daño ambiental (un umbral peligroso), conviene fijar la CANTIDAD (permisos); si lo crítico es no imponer un costo excesivo e impredecible a la economía, conviene fijar el PRECIO (impuesto). Es la lógica de \"precios vs. cantidades\" bajo incertidumbre.",
      criterios: [
        { texto: "a) Explica que la externalidad genera sobreproducción/contaminación y cómo el impuesto pigouviano la internaliza", peso: 2 },
        { texto: "a) Explica cómo los permisos transables (cap) internalizan la externalidad vía un precio de mercado del permiso", peso: 3 },
        { texto: "b) Distingue que el impuesto fija el precio y los permisos la cantidad, y explica la eficiencia de costos de la transabilidad", peso: 3 },
        { texto: "c) Explica el rol de la incertidumbre (certeza en precio con impuesto vs. certeza en cantidad con permisos) en la elección", peso: 2 }
      ],
      erroresComunes: [
        "Creer que un impuesto y una cuota de permisos son idénticos siempre: difieren en qué variable queda fija y cuál queda incierta.",
        "Afirmar que permitir la venta de permisos aumenta la contaminación: el total está topado por el cap; el comercio solo reasigna quién reduce.",
        "Olvidar que la ventaja del mercado de permisos es minimizar el costo total de abatimiento entre empresas heterogéneas."
      ]
    },

    {
      id: "eco-102",
      tema: "Determinantes del crecimiento de largo plazo: capital humano, tecnología e instituciones",
      dificultad: "dificil",
      enunciado: "El modelo de Solow muestra que la acumulación de capital físico, por sí sola, no genera crecimiento sostenido de largo plazo.\n\na) Explique por qué el capital físico tiene rendimientos decrecientes y por qué esto limita el crecimiento de largo plazo basado solo en invertir más. 3 puntos\n\nb) Explique el papel del PROGRESO TECNOLÓGICO y del CAPITAL HUMANO como motores del crecimiento sostenido. 5 puntos\n\nc) Explique por qué las INSTITUCIONES (derechos de propiedad, estabilidad, apertura) son determinantes del crecimiento y proponga dos políticas de fomento. 4 puntos",
      respuestaModelo: "a) El capital físico tiene PRODUCTIVIDAD MARGINAL DECRECIENTE: al añadir más capital manteniendo el resto de los factores, cada unidad adicional aporta cada vez menos producto. Por ello, en el modelo de Solow, invertir más eleva el capital por trabajador hasta un estado estacionario, pero luego la nueva inversión solo alcanza a reponer la depreciación y a equipar a los nuevos trabajadores. Así, acumular capital físico da un mayor NIVEL de producto, pero NO un crecimiento sostenido de largo plazo del producto por trabajador: la mera acumulación se agota.\n\nb) El crecimiento SOSTENIDO del producto por trabajador proviene principalmente del PROGRESO TECNOLÓGICO: mejoras en el conocimiento y en la forma de combinar los factores que elevan la productividad de TODOS los factores (productividad total de factores). A diferencia del capital físico, el conocimiento no está sujeto a rendimientos decrecientes de la misma manera (las ideas pueden usarse muchas veces y por muchos a la vez: son no rivales), por lo que puede sostener el crecimiento indefinidamente. El CAPITAL HUMANO (educación, salud, habilidades y experiencia de los trabajadores) complementa a la tecnología: eleva la productividad del trabajo, facilita adoptar y crear nuevas tecnologías, y genera externalidades positivas (el conocimiento se difunde). Países que invierten en educación, investigación y desarrollo (I+D) tienden a crecer más.\n\nc) Las INSTITUCIONES determinan los INCENTIVOS a invertir, innovar y trabajar. Sin DERECHOS DE PROPIEDAD seguros y un Estado de derecho, nadie invierte ni innova si teme expropiación o no puede hacer cumplir contratos. La ESTABILIDAD política y macroeconómica reduce la incertidumbre y favorece la inversión de largo plazo. La APERTURA comercial permite acceder a mercados, tecnología e insumos, y aumenta la competencia y la difusión de ideas. Un sistema financiero desarrollado canaliza ahorro hacia inversión productiva. POLÍTICAS de fomento (basta dos): (1) invertir en educación y capacitación (capital humano); (2) fomentar la I+D y la innovación (subsidios, protección de patentes equilibrada); (3) garantizar derechos de propiedad y contratos; (4) mantener estabilidad macroeconómica; (5) promover la apertura comercial y la inversión extranjera. Estas políticas actúan sobre los motores no sujetos a rendimientos decrecientes, sosteniendo el crecimiento.",
      criterios: [
        { texto: "a) Explica los rendimientos decrecientes del capital físico y por qué limitan el crecimiento basado solo en acumular capital", peso: 2 },
        { texto: "b) Explica el progreso tecnológico como motor del crecimiento sostenido (ideas no rivales, no sujetas a rendimientos decrecientes)", peso: 3 },
        { texto: "b) Explica el rol del capital humano (educación, salud, adopción de tecnología, externalidades)", peso: 2 },
        { texto: "c) Explica el papel de las instituciones (derechos de propiedad, estabilidad, apertura) y propone dos políticas de fomento", peso: 2 }
      ],
      erroresComunes: [
        "Sostener que basta invertir en capital físico para crecer indefinidamente: los rendimientos decrecientes lo impiden.",
        "Confundir el capital humano (habilidades de las personas) con el capital físico (máquinas y equipos).",
        "Ignorar el papel de las instituciones y los incentivos en explicar diferencias de crecimiento entre países."
      ]
    },

    {
      id: "eco-103",
      tema: "Deuda pública, sostenibilidad fiscal y equivalencia ricardiana",
      dificultad: "dificil",
      enunciado: "Un gobierno financia un aumento del gasto mediante DEUDA en lugar de impuestos.\n\na) Explique, según la visión convencional, cómo un déficit fiscal financiado con deuda afecta el ahorro nacional, la tasa de interés y la inversión (efecto expulsión). 4 puntos\n\nb) Explique la hipótesis de la EQUIVALENCIA RICARDIANA y por qué, bajo sus supuestos, el momento del financiamiento (impuestos hoy vs. deuda) sería irrelevante. 4 puntos\n\nc) Explique al menos dos razones por las que, en la práctica, la equivalencia ricardiana puede no cumplirse. 4 puntos",
      respuestaModelo: "a) VISIÓN CONVENCIONAL: un déficit fiscal significa que el ahorro público es negativo. Como el ahorro nacional es la suma del ahorro público y privado, un mayor déficit REDUCE el ahorro nacional. En el mercado de fondos prestables, la menor oferta de ahorro (o la mayor demanda del gobierno por endeudarse) PRESIONA AL ALZA la tasa de interés. Una tasa más alta desincentiva la inversión privada: es el EFECTO EXPULSIÓN (crowding out). Además, si el país es abierto, parte del déficit se financia con ahorro externo, deteriorando la cuenta corriente (déficits gemelos). El resultado de largo plazo es menor acumulación de capital y menor crecimiento.\n\nb) La EQUIVALENCIA RICARDIANA sostiene que la forma de financiar un gasto dado —con impuestos hoy o con deuda (impuestos futuros)— es IRRELEVANTE para la economía. El argumento: los consumidores son racionales y con horizonte largo; si el gobierno baja impuestos hoy emitiendo deuda, entienden que esa deuda deberá pagarse con MAYORES IMPUESTOS en el futuro. Por lo tanto, NO consideran el recorte de impuestos como mayor riqueza: AHORRAN todo el ingreso adicional para pagar los impuestos futuros. Ese mayor ahorro PRIVADO compensa exactamente la caída del ahorro público, dejando el ahorro nacional, la tasa de interés y la inversión SIN cambios. En esta visión, deuda e impuestos son \"equivalentes\" y no hay efecto expulsión.\n\nc) Razones por las que puede NO cumplirse en la práctica (basta dos): (1) MIOPÍA o racionalidad limitada: muchos consumidores no anticipan del todo los impuestos futuros y tratan el recorte como mayor ingreso disponible, aumentando el consumo. (2) RESTRICCIONES DE LIQUIDEZ: hogares que no pueden pedir prestado gastan el alivio tributario presente en vez de ahorrarlo. (3) HORIZONTE FINITO / cambio generacional: si los impuestos futuros recaerán en generaciones distintas, los actuales no internalizan del todo esa carga (a menos que haya altruismo intergeneracional perfecto). (4) INCERTIDUMBRE sobre los impuestos futuros y sobre quién los pagará. Por estas razones, en la práctica un déficit suele reducir algo el ahorro nacional y tener efectos reales, aunque quizá menores que en la visión convencional pura.",
      criterios: [
        { texto: "a) Explica la visión convencional: el déficit reduce el ahorro nacional, sube la tasa y expulsa inversión (crowding out)", peso: 3 },
        { texto: "a) Menciona el efecto sobre la cuenta corriente o el crecimiento de largo plazo", peso: 1 },
        { texto: "b) Explica la equivalencia ricardiana (los agentes anticipan impuestos futuros y ahorran, compensando el menor ahorro público)", peso: 3 },
        { texto: "c) Da al menos dos razones válidas por las que puede no cumplirse (miopía, restricciones de liquidez, horizonte finito, incertidumbre)", peso: 2 }
      ],
      erroresComunes: [
        "Afirmar que la equivalencia ricardiana dice que el déficit no importa nunca: se refiere a que, bajo supuestos fuertes, la FORMA de financiar (deuda vs. impuestos) es neutral.",
        "Olvidar que la equivalencia depende de que los agentes ahorren anticipando impuestos futuros; si son miopes o tienen restricciones de liquidez, no se cumple.",
        "Confundir el nivel de gasto público (que sí importa) con la forma de financiarlo (que es lo que la equivalencia discute)."
      ]
    },

    {
      id: "eco-104",
      tema: "Términos de intercambio, enfermedad holandesa y economías dependientes de recursos naturales",
      dificultad: "dificil",
      salioEnExamen: true,
      enunciado: "Chile es exportador de cobre. Suponga un aumento fuerte y prolongado del precio internacional del cobre.\n\na) Explique qué son los términos de intercambio y cómo los afecta este aumento de precio. 3 puntos\n\nb) Explique el fenómeno de la \"enfermedad holandesa\": cómo un boom de un recurso natural puede apreciar la moneda y perjudicar a los demás sectores transables (industria, agricultura exportadora). 5 puntos\n\nc) Proponga políticas para mitigar la enfermedad holandesa y sus riesgos. 4 puntos",
      respuestaModelo: "a) Los TÉRMINOS DE INTERCAMBIO son la relación entre el precio de las exportaciones de un país y el precio de sus importaciones (Px/Pm). Miden cuántas importaciones puede comprar el país por cada unidad de exportación. Un aumento fuerte y prolongado del precio del cobre (principal exportación de Chile) MEJORA los términos de intercambio: con la misma cantidad exportada, el país puede financiar más importaciones. Es una ganancia de ingreso real para el país (un \"shock externo positivo\").\n\nb) La ENFERMEDAD HOLANDESA describe cómo un boom exportador de un recurso natural puede terminar PERJUDICANDO a los otros sectores transables. Mecanismo: el auge del cobre genera una gran entrada de DÓLARES (por mayores exportaciones y por inversión extranjera atraída al sector). Esa abundancia de divisas APRECIA la moneda local (baja el tipo de cambio real): el peso se fortalece. Una moneda apreciada abarata las importaciones y, sobre todo, ENCARECE en dólares los productos de los DEMÁS sectores transables (manufactura, agroexportación, turismo, servicios), que pierden competitividad internacional. Además, el sector en auge atrae recursos (capital y trabajo), subiendo salarios y costos, lo que presiona aún más a los otros transables. El resultado puede ser una DESINDUSTRIALIZACIÓN y una mayor dependencia del recurso natural, con vulnerabilidad a la volatilidad de su precio. Es \"enfermedad\" porque una buena noticia (boom) daña la diversificación productiva.\n\nDescripción del gráfico esperado (opcional): mercado de divisas con gran aumento de la oferta de dólares que aprecia la moneda (baja el tipo de cambio real), afectando a los exportadores no-cobre.\n\nc) POLÍTICAS de mitigación (basta dos o tres): (1) FONDOS SOBERANOS / ahorro del auge: ahorrar los ingresos extraordinarios en el exterior (como los fondos de estabilización del cobre en Chile) para no volcar todos los dólares a la economía interna, moderando la apreciación y suavizando el gasto entre años buenos y malos (política fiscal contracíclica y regla fiscal). (2) DIVERSIFICACIÓN productiva: fomentar otros sectores transables e invertir los ingresos del recurso en capital humano, innovación e infraestructura que aumenten la productividad. (3) POLÍTICA CAMBIARIA/monetaria prudente: acumular reservas o esterilizar para moderar la apreciación. RIESGOS: gastar todo el auge (procíclico) agrava la apreciación y deja al país expuesto cuando el precio del recurso caiga; también hay riesgo de \"maldición de los recursos\" si el auge debilita las instituciones. El objetivo es transformar una riqueza transitoria en capacidad productiva permanente.",
      criterios: [
        { texto: "a) Define términos de intercambio (Px/Pm) y explica que el alza del cobre los mejora (shock externo positivo)", peso: 2 },
        { texto: "b) Explica el mecanismo de la enfermedad holandesa: entrada de dólares que aprecia la moneda", peso: 2 },
        { texto: "b) Explica el daño a los demás sectores transables (pérdida de competitividad, desindustrialización) y grafica o describe la apreciación", peso: 3 },
        { texto: "c) Propone políticas de mitigación válidas (fondos soberanos/regla fiscal, diversificación, política cambiaria) y menciona un riesgo", peso: 2 }
      ],
      erroresComunes: [
        "Interpretar la apreciación como siempre beneficiosa: perjudica a los exportadores no-cobre y puede desindustrializar.",
        "Confundir la enfermedad holandesa con una caída del precio del recurso: surge justamente de un BOOM (buena noticia) del recurso.",
        "Proponer gastar todo el ingreso del auge internamente, lo que agrava la apreciación y el carácter procíclico."
      ]
    }

  ]
});
