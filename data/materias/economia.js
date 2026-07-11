// =====================================================================
// MATERIA: ECONOMÍA — Banco de preguntas Examen de Grado
// 35 preguntas: 7 fáciles, 16 medias, 12 difíciles
// Las marcadas con salioEnExamen: true corresponden a temas aparecidos
// en exámenes de grado y pautas reales (2021-2026)
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
    }

  ]
});
