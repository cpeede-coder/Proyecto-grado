// =====================================================================
// MATERIA: Administración — SOLO preguntas DEMO (4)
// Las preguntas premium ya NO viven aqui: se descargan desde Supabase
// (funcion get_preguntas) solo para dispositivos que canjearon un codigo.
// =====================================================================

window.BANCO.materias.push({
  "id": "administracion",
  "nombre": "Administración",
  "preguntas": [
    {
      "id": "adm-001",
      "tema": "Proceso de gestión: las cuatro funciones administrativas",
      "dificultad": "facil",
      "enunciado": "Defina las cuatro funciones del proceso administrativo (planificar, organizar, dirigir y controlar) y explique por qué se dice que constituyen un ciclo que se retroalimenta. Además, indique qué se entiende por eficiencia y eficacia, y cómo se relacionan ambas con el logro de un alto desempeño organizacional.",
      "respuestaModelo": "Planificar: definir los objetivos de la organización, establecer las estrategias para lograrlos y desarrollar los planes que las llevarán a cabo. Es la función primordial porque sienta las bases de las demás.\n\nOrganizar: distribuir y estructurar el trabajo para cumplir los objetivos; determinar qué es necesario hacer, cómo llevarlo a cabo y quién lo hará (diseño de la estructura, departamentalización, asignación de autoridad y responsabilidades).\n\nDirigir: influir en las personas para que contribuyan a las metas organizacionales; implica liderar, motivar, comunicar, coordinar y manejar conflictos.\n\nControlar: dar seguimiento a las actividades para garantizar que se logren conforme a lo planeado, comparar el desempeño real con los estándares y corregir las desviaciones.\n\nSe habla de un ciclo porque los resultados del control retroalimentan la planificación: al detectar desviaciones, el gerente ajusta objetivos, planes o estándares, reiniciando el proceso. Sin control no se sabe si la planificación funcionó, y sin planificación no hay estándares contra los cuales controlar.\n\nEficiencia es hacer las cosas con el menor uso de recursos (poco desperdicio); eficacia es hacer las cosas correctas para alcanzar los objetivos (obtener logros). El alto desempeño se logra cuando la organización es eficiente y eficaz a la vez: cumple sus metas utilizando la menor cantidad de tiempo, dinero, materiales e insatisfacción del personal, es decir, crea valor agregado.",
      "criterios": [
        {
          "texto": "Define correctamente cada una de las cuatro funciones del proceso administrativo (planificar, organizar, dirigir, controlar).",
          "peso": 4
        },
        {
          "texto": "Explica la naturaleza cíclica del proceso: el control retroalimenta a la planificación.",
          "peso": 2
        },
        {
          "texto": "Distingue correctamente eficiencia (uso de recursos) de eficacia (logro de objetivos).",
          "peso": 1
        },
        {
          "texto": "Vincula eficiencia y eficacia con el alto desempeño o la creación de valor agregado.",
          "peso": 1
        }
      ],
      "erroresComunes": [
        "Solo nombrar las cuatro funciones sin explicarlas: la pauta exige nombrar y explicar para obtener puntaje completo.",
        "Confundir eficiencia con eficacia o usarlas como sinónimos.",
        "Describir las funciones como etapas aisladas sin mencionar la retroalimentación del ciclo."
      ]
    },
    {
      "id": "adm-002",
      "tema": "Planificación: tipos de planes y su relación",
      "dificultad": "facil",
      "enunciado": "Explique los criterios que se utilizan para clasificar los planes en una organización (alcance, marco de tiempo, especificidad y frecuencia de uso) y describa cómo se relacionan entre sí los planes estratégicos, tácticos y operativos. Entregue un ejemplo que muestre la cascada desde un plan estratégico hasta uno operativo.",
      "respuestaModelo": "Los planes se clasifican según cuatro criterios:\n\n1) Según alcance: Estratégicos (abarcan toda la organización, establecen objetivos generales, largo plazo) versus Operacionales (abarcan un área específica, detallan cómo se lograrán los objetivos generales, corto plazo).\n\n2) Según marco de tiempo: de Largo plazo (más de tres años) versus de Corto plazo (un año o menos).\n\n3) Según especificidad: Específicos o concretos (claramente definidos, sin ambigüedad ni margen de interpretación) versus Direccionales (flexibles, establecen pautas generales y permiten discrecionalidad, útiles en entornos inciertos).\n\n4) Según frecuencia de uso: de Uso único (diseñados para una situación particular) versus Permanentes (guían actividades que se repiten, como políticas y procedimientos).\n\nRelación entre planes: forman una cascada coherente. Los planes estratégicos, definidos por la alta gerencia, guían a los planes tácticos (mediano plazo, por área) y éstos a los planes operativos (corto plazo, actividades del día a día). La clave es la integración y coherencia: todos deben estar alineados con la misión y los objetivos generales; si un plan operativo se desalinea del estratégico, se rompe la cascada.\n\nEjemplo: una empresa define como plan estratégico la expansión internacional (largo plazo, toda la organización); de él se desprende el plan táctico de abrir nuevas oficinas en Perú durante el próximo año; y de éste, los planes operativos con las actividades diarias de instalación, contratación y ventas de esas oficinas.",
      "criterios": [
        {
          "texto": "Explica correctamente los cuatro criterios de clasificación de los planes con sus categorías.",
          "peso": 4
        },
        {
          "texto": "Describe la relación en cascada: estratégico guía al táctico y éste al operativo, destacando la coherencia y alineamiento.",
          "peso": 2
        },
        {
          "texto": "Entrega un ejemplo pertinente que recorra los tres niveles de planes.",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Confundir el plazo con el alcance: un plan estratégico no se define solo por ser de largo plazo, sino por abarcar a toda la organización.",
        "Enumerar los tipos de planes sin explicar la relación de cascada entre ellos.",
        "Dar un ejemplo genérico que no distingue los tres niveles de planificación."
      ]
    },
    {
      "id": "adm-003",
      "tema": "Organización: tipos de departamentalización",
      "dificultad": "facil",
      "salioEnExamen": true,
      "enunciado": "Compare la departamentalización funcional con la departamentalización geográfica. Para cada una: defina en qué consiste, señale una (1) ventaja y una (1) desventaja, e indique en qué tipo de empresa resulta más apropiada. Finalmente, explique por qué se afirma que la estrategia antecede a la estructura.",
      "respuestaModelo": "Departamentalización funcional: agrupa los puestos de acuerdo con las funciones realizadas (marketing, finanzas, operaciones, gestión de personas). Es la forma más utilizada. Ventaja: mayor eficiencia al agrupar especialidades similares y personas con habilidades y orientación comunes, lo que facilita la coordinación dentro de cada área. Desventaja: mala comunicación entre áreas funcionales y menor visión de los objetivos globales de la organización. Es apropiada para empresas con una sola línea de negocio o de tamaño mediano que buscan eficiencia.\n\nDepartamentalización geográfica: agrupa los puestos de acuerdo con el territorio o la geografía (zona norte, centro, sur; o por países). Ventaja: mayor eficiencia y eficacia en el manejo de problemas específicos regionales, satisfaciendo mejor las necesidades de mercados geográficos únicos. Desventaja: sensación de aislamiento respecto de otras áreas y duplicación de funciones (cada zona repite cargos y recursos). Es apropiada para empresas con operaciones dispersas en territorios con necesidades distintas, como multinacionales o cadenas con presencia regional.\n\nLa estrategia antecede a la estructura porque la estructura organizacional es el medio para ejecutar la estrategia: primero se define qué se quiere lograr y cómo se competirá, y luego se diseña la distribución formal de los puestos que mejor apoye ese plan. Un cambio de estrategia (por ejemplo, expandirse internacionalmente) suele exigir un cambio de estructura (por ejemplo, migrar de funcional a geográfica).",
      "criterios": [
        {
          "texto": "Define correctamente la departamentalización funcional y entrega una ventaja y una desventaja válidas.",
          "peso": 2
        },
        {
          "texto": "Define correctamente la departamentalización geográfica y entrega una ventaja y una desventaja válidas.",
          "peso": 2
        },
        {
          "texto": "Indica de forma pertinente el tipo de empresa en que conviene cada una.",
          "peso": 2
        },
        {
          "texto": "Explica la relación estrategia-estructura (la estructura se diseña para ejecutar la estrategia).",
          "peso": 2
        }
      ],
      "erroresComunes": [
        "Confundir departamentalización (cómo se agrupan los puestos) con estructura organizacional (el diseño general de la organización).",
        "Nombrar ventajas y desventajas sin explicarlas o sin que correspondan al tipo de departamentalización señalado."
      ]
    },
    {
      "id": "adm-004",
      "tema": "La organización: roles y habilidades gerenciales",
      "dificultad": "facil",
      "enunciado": "Describa las tres habilidades gerenciales (técnicas, humanas y conceptuales) y explique cómo varía su importancia relativa según el nivel jerárquico del gerente (primera línea, nivel medio y nivel alto). Complemente su respuesta señalando los tres grupos de roles gerenciales de Mintzberg, con un ejemplo de rol para cada grupo.",
      "respuestaModelo": "Habilidades técnicas: conocimiento y competencia en un campo específico de trabajo (por ejemplo, manejar un software contable o un proceso productivo). Son más importantes en los gerentes de primera línea, por su cercanía con la operación y la producción.\n\nHabilidades humanas: capacidad de trabajar bien con otras personas, comunicarse, motivar y liderar equipos. Son igualmente importantes en todos los niveles, porque todo gerente logra resultados a través de personas; en el nivel medio son especialmente centrales, ya que estos gerentes dedican gran parte de su tiempo a dirigir.\n\nHabilidades conceptuales y de diseño: capacidad de pensar y resolver situaciones abstractas y complejas, viendo la organización como un todo. Son más importantes en el nivel alto, donde se toman las decisiones y se fijan los planes y objetivos de toda la organización.\n\nRegla general: nivel alto = conceptuales + humanas; nivel medio = principalmente humanas; primera línea = técnicas + humanas.\n\nRoles gerenciales de Mintzberg (comportamientos específicos esperados de un gerente):\n\n1) Interpersonales: representante, líder, enlace. Ejemplo: el gerente que actúa como líder motivando a su equipo.\n\n2) Informativos: monitor, difusor, portavoz. Ejemplo: el gerente que actúa como portavoz comunicando resultados de la empresa al exterior.\n\n3) Decisorios: emprendedor, manejador de conflictos, asignador de recursos, negociador. Ejemplo: el gerente que asigna el presupuesto entre proyectos (asignador de recursos).",
      "criterios": [
        {
          "texto": "Describe correctamente las tres habilidades gerenciales.",
          "peso": 3
        },
        {
          "texto": "Explica la variación de la importancia de cada habilidad según el nivel jerárquico.",
          "peso": 3
        },
        {
          "texto": "Señala los tres grupos de roles de Mintzberg con un ejemplo válido por grupo.",
          "peso": 3
        }
      ],
      "erroresComunes": [
        "Afirmar que las habilidades humanas solo importan en algunos niveles: son relevantes en todos.",
        "Confundir roles (comportamientos esperados) con funciones administrativas (planificar, organizar, dirigir, controlar).",
        "Nombrar los roles sin asociarlos al grupo correcto (interpersonal, informativo, decisorio)."
      ]
    }
  ]
});
