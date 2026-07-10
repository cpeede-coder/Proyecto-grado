// =====================================================================
// MATERIA: ECONOMÍA — Banco de preguntas Examen de Grado
// 22 preguntas: 7 fáciles, 8 medias, 7 difíciles
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
    }

  ]
});
