// =====================================================================
// MATERIA: Economía — SOLO preguntas DEMO (4)
// Las preguntas premium ya NO viven aqui: se descargan desde Supabase
// (funcion get_preguntas) solo para dispositivos que canjearon un codigo.
// =====================================================================

window.BANCO.materias.push({
  "id": "economia",
  "nombre": "Economía",
  "preguntas": [
    {
      "id": "eco-001",
      "tema": "Principios básicos: escasez, costo de oportunidad y FPP",
      "dificultad": "facil",
      "enunciado": "Explique en qué consiste el problema económico fundamental y cómo la Frontera de Posibilidades de Producción (FPP) permite ilustrar los conceptos de escasez, costo de oportunidad y eficiencia. Indique, además, dos factores que pueden desplazar la FPP hacia afuera. 6 puntos",
      "respuestaModelo": "El problema económico fundamental es la escasez: las necesidades humanas son ilimitadas, pero los recursos disponibles para satisfacerlas son limitados. Ello obliga a la sociedad a elegir cómo asignar sus recursos escasos, y toda elección implica renunciar a algo: eso que se sacrifica es el costo de oportunidad.\n\nLa FPP representa las combinaciones máximas de dos bienes o servicios que una economía puede producir con los recursos y la tecnología disponibles. Los puntos sobre la curva son eficientes (se utilizan todos los recursos), los puntos interiores son ineficientes (hay recursos ociosos) y los puntos exteriores son inalcanzables con los recursos actuales.\n\nEl costo de oportunidad se refleja en la pendiente de la FPP: para producir más unidades de un bien es necesario sacrificar unidades del otro. La forma cóncava de la curva ilustra costos de oportunidad crecientes, asociados a la ley de rendimientos decrecientes.\n\nDescripción del gráfico esperado: ejes con el bien X y el bien Y; curva cóncava hacia el origen; un punto A sobre la curva (eficiente), un punto B interior (ineficiente) y un punto C exterior (inalcanzable).\n\nLa FPP se desplaza hacia afuera cuando aumenta la capacidad productiva de la economía, por ejemplo: (1) mejoras tecnológicas, (2) aumento en la dotación de recursos productivos (más capital, más trabajo o descubrimiento de recursos naturales).",
      "criterios": [
        {
          "texto": "Define escasez como recursos limitados frente a necesidades ilimitadas y la vincula con la necesidad de elegir",
          "peso": 1
        },
        {
          "texto": "Define correctamente costo de oportunidad como aquello a lo que se renuncia al elegir",
          "peso": 1
        },
        {
          "texto": "Explica qué representa la FPP y distingue puntos eficientes, ineficientes e inalcanzables",
          "peso": 2
        },
        {
          "texto": "Grafica correctamente la FPP (curva cóncava, ejes rotulados, puntos A, B y C identificados)",
          "peso": 1
        },
        {
          "texto": "Menciona dos factores válidos que desplazan la FPP hacia afuera (tecnología, más recursos)",
          "peso": 1
        }
      ],
      "erroresComunes": [
        "Confundir costo de oportunidad con costo monetario o contable: el costo de oportunidad es la mejor alternativa sacrificada, no el desembolso de dinero.",
        "Dibujar la FPP como una recta y no explicar por qué la concavidad refleja costos de oportunidad crecientes.",
        "Señalar que un punto interior es inalcanzable, cuando en realidad es alcanzable pero ineficiente."
      ]
    },
    {
      "id": "eco-002",
      "tema": "La demanda: cambios en la demanda vs. cantidad demandada",
      "dificultad": "facil",
      "enunciado": "a) Explique la diferencia entre un cambio en la cantidad demandada y un cambio en la demanda, indicando qué variables provocan cada uno y cómo se representan gráficamente. 3 puntos\n\nb) Explique qué significa la condición ceteris paribus y por qué es indispensable para enunciar la ley de la demanda. 2 puntos",
      "respuestaModelo": "a) Un cambio en la cantidad demandada es un movimiento A LO LARGO de la misma curva de demanda, provocado exclusivamente por una variación en el precio del propio bien: si el precio sube, la cantidad demandada disminuye (y viceversa), cumpliéndose la ley de la demanda.\n\nUn cambio en la demanda, en cambio, es un DESPLAZAMIENTO completo de la curva, provocado por variables distintas al precio del bien: el ingreso de los consumidores (bienes normales e inferiores), los precios de bienes relacionados (sustitutos y complementarios), los gustos y preferencias, las expectativas y el número de compradores. Si estos factores aumentan la disposición a comprar, la curva se desplaza hacia la derecha (aumento de demanda); si la reducen, hacia la izquierda.\n\nDescripción del gráfico esperado: dos paneles. En el primero, una curva de demanda con pendiente negativa y un movimiento sobre la curva desde el punto A al punto B ante un cambio de precio (P0 a P1). En el segundo, la curva D0 desplazándose paralelamente a D1 (a la derecha), manteniendo el precio constante.\n\nb) Ceteris paribus significa \"todo lo demás constante\": al analizar la relación entre el precio y la cantidad demandada se supone que las demás variables (ingreso, precios de otros bienes, gustos, etc.) permanecen fijas. Es indispensable porque la ley de la demanda (relación inversa entre precio y cantidad demandada) solo se cumple aislando el efecto del precio; si otras variables cambiaran simultáneamente, podría observarse, por ejemplo, mayor precio y mayor cantidad, sin que ello contradiga la ley de la demanda.",
      "criterios": [
        {
          "texto": "a) Explica que el cambio en la cantidad demandada es un movimiento sobre la curva causado solo por el precio del bien",
          "peso": 1
        },
        {
          "texto": "a) Explica que el cambio en la demanda es un desplazamiento de la curva y menciona al menos tres determinantes (ingreso, bienes relacionados, gustos, expectativas, número de compradores)",
          "peso": 1
        },
        {
          "texto": "a) Grafica correctamente ambos casos: movimiento sobre la curva y desplazamiento de la curva",
          "peso": 1
        },
        {
          "texto": "b) Define ceteris paribus como mantener constantes las demás variables",
          "peso": 1
        },
        {
          "texto": "b) Justifica por qué la ley de la demanda requiere esa condición para aislar el efecto precio",
          "peso": 1
        }
      ],
      "erroresComunes": [
        "Decir que una baja del precio \"aumenta la demanda\": el precio del propio bien solo cambia la cantidad demandada (movimiento sobre la curva), no la demanda.",
        "Desplazar la curva de demanda ante un cambio en el precio del propio bien en el gráfico."
      ]
    },
    {
      "id": "eco-003",
      "tema": "Elasticidades: precio, cruzada e ingreso",
      "dificultad": "facil",
      "salioEnExamen": true,
      "enunciado": "Un estudio de mercado sobre el consumo de café en Chile entregó los siguientes resultados: elasticidad precio de la demanda del café = -0,4; elasticidad cruzada entre café y té = +0,8; elasticidad ingreso del café = +1,3.\n\na) Defina cada una de las tres elasticidades e interprete económicamente los valores entregados. 4 puntos\n\nb) Si una cafetera decidiera subir el precio del café en 10%, ¿qué ocurriría con la cantidad demandada y con el ingreso total por ventas? Justifique usando la elasticidad. 2 puntos",
      "respuestaModelo": "a) La elasticidad precio de la demanda mide la sensibilidad porcentual de la cantidad demandada ante cambios porcentuales en el precio del propio bien. Un valor de -0,4 indica una demanda INELÁSTICA (|E| < 1): ante un alza de 10% en el precio, la cantidad demandada cae solo 4%. El café se comporta como un bien de consumo habitual con pocos sustitutos cercanos para sus consumidores.\n\nLa elasticidad cruzada mide la sensibilidad de la cantidad demandada de un bien ante cambios en el precio de otro bien. Un valor de +0,8 (positivo) indica que café y té son bienes SUSTITUTOS: si sube el precio del té en 10%, la demanda de café aumenta 8%.\n\nLa elasticidad ingreso mide la sensibilidad de la demanda ante cambios en el ingreso del consumidor. Un valor de +1,3 (positivo y mayor que 1) indica que el café es un bien NORMAL, y en particular se comporta como bien de lujo o superior: la demanda crece más que proporcionalmente cuando aumenta el ingreso.\n\nb) Con elasticidad precio de -0,4, un alza de 10% en el precio reduce la cantidad demandada solo en 4%. Como la demanda es inelástica, el efecto precio domina al efecto cantidad y el ingreso total por ventas (P x Q) AUMENTA. En demandas inelásticas, subir el precio incrementa la recaudación de la empresa.",
      "criterios": [
        {
          "texto": "a) Define correctamente las tres elasticidades (precio, cruzada e ingreso)",
          "peso": 1
        },
        {
          "texto": "a) Interpreta -0,4 como demanda inelástica y cuantifica el efecto (ej.: +10% precio implica -4% cantidad)",
          "peso": 1
        },
        {
          "texto": "a) Interpreta el signo positivo de la cruzada como bienes sustitutos",
          "peso": 1
        },
        {
          "texto": "a) Interpreta la elasticidad ingreso positiva como bien normal (y mayor que 1 como bien de lujo/superior)",
          "peso": 1
        },
        {
          "texto": "b) Concluye que ante demanda inelástica el alza de precio aumenta el ingreso total, justificando con la magnitud de la elasticidad",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Interpretar el signo negativo de la elasticidad precio como \"demanda que cae mucho\": el signo solo refleja la ley de la demanda; la magnitud (0,4 < 1) es lo que indica que es inelástica.",
        "Confundir el signo de la elasticidad cruzada: positivo = sustitutos, negativo = complementarios.",
        "Concluir que subir el precio siempre reduce el ingreso total, sin considerar que con demanda inelástica ocurre lo contrario."
      ]
    },
    {
      "id": "eco-004",
      "tema": "Fallas de mercado: tipologías y corrección",
      "dificultad": "facil",
      "enunciado": "a) Defina qué es una falla de mercado y explique por qué justifica la intervención del Estado en la economía. 2 puntos\n\nb) Explique dos de las siguientes fallas de mercado y proponga, para cada una, un mecanismo de corrección: (i) externalidades negativas, (ii) bienes públicos, (iii) monopolio. 4 puntos",
      "respuestaModelo": "a) Una falla de mercado es una situación en que el mercado, operando libremente, NO logra una asignación eficiente de los recursos, es decir, no maximiza el bienestar social (excedente total). En presencia de fallas, el equilibrio privado difiere del óptimo social, lo que justifica la intervención del Estado para corregir la distorsión y acercar la asignación al óptimo (principio de que el Estado puede mejorar los resultados del mercado cuando este falla).\n\nb) (i) Externalidades negativas: ocurren cuando una actividad de producción o consumo genera costos a terceros que no son compensados (ej.: contaminación). El costo social supera al costo privado, por lo que el mercado produce MÁS de lo socialmente óptimo. Corrección: impuestos pigouvianos que internalicen el costo externo, permisos de emisión transables, regulación directa (normas de emisión) o asignación de derechos de propiedad (Teorema de Coase).\n\n(ii) Bienes públicos: son bienes no excluibles (no se puede impedir su uso) y no rivales (el consumo de uno no reduce la disponibilidad para otros), como la defensa nacional o el alumbrado público. Generan el problema del polizón (free rider): nadie está dispuesto a pagar voluntariamente, por lo que el mercado los provee en cantidad insuficiente o no los provee. Corrección: provisión estatal financiada con impuestos, o subsidios a su producción.\n\n(iii) Monopolio: un único oferente sin sustitutos cercanos, protegido por barreras de entrada, que produce menos y cobra un precio mayor que en competencia (P > CMg), generando pérdida irrecuperable de eficiencia social. Corrección: regulación de tarifas (especialmente en monopolios naturales), legislación de libre competencia (FNE y TDLC en Chile), apertura comercial o licitación del mercado.",
      "criterios": [
        {
          "texto": "a) Define falla de mercado como incapacidad del mercado de asignar eficientemente los recursos (equilibrio privado distinto del óptimo social)",
          "peso": 1
        },
        {
          "texto": "a) Justifica la intervención estatal como corrección para acercarse al óptimo social",
          "peso": 1
        },
        {
          "texto": "b) Explica correctamente la primera falla elegida, identificando por qué el mercado falla (sobreproducción, free rider o P>CMg según corresponda)",
          "peso": 1
        },
        {
          "texto": "b) Explica correctamente la segunda falla elegida",
          "peso": 1
        },
        {
          "texto": "b) Propone un mecanismo de corrección pertinente para cada falla (impuesto pigouviano, permisos transables, provisión estatal, regulación tarifaria, ley de libre competencia, etc.)",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Definir bien público como \"cualquier bien provisto por el Estado\": lo que lo define son la no exclusión y la no rivalidad, no quién lo provee.",
        "Afirmar que ante una externalidad negativa el mercado produce menos de lo óptimo: produce MÁS, porque el productor no asume el costo externo."
      ]
    }
  ]
});
