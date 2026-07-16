// Guía de estudio ordenada — ESTRATEGIA (material para LEER antes de las flashcards)
// Contenido reorganizado y VALIDADO desde "RESUMEN GRADO ESTRATEGIA".
// Se sirve como HTML por unidad y se inyecta en #estudio-guia-contenido (contenido
// estático propio, sin entrada de usuario). Usa las clases .guia-* de css/styles.css.
// Nota: aquí SÍ se usan template literals (backticks) por ser un bloque HTML largo;
// la regla de "no backticks" aplica al banco de preguntas (data/materias/*.js).
window.ESTUDIO_GUIA = window.ESTUDIO_GUIA || {};
window.ESTUDIO_GUIA.estrategia = {
  nombre: "Estrategia",
  intro: "Léela unidad por unidad. Cuando entiendas una unidad, pasa a las flashcards de esa unidad para fijarla. Los recuadros azules son definiciones para memorizar; los dorados, frases que suman en el examen.",
  secciones: [
    {
      unidad: "U1", titulo: "Concepto de Estrategia",
      html: `
        <div class="guia-def">⭐ <strong>Qué más se pregunta en Estrategia:</strong> los exámenes reales suelen entregar un caso de empresa y pedir aplicar <strong>las 5 Fuerzas de Porter</strong> y evaluar el atractivo de la industria; identificar y justificar la <strong>estrategia genérica</strong> (liderazgo en costos, diferenciación o enfoque) y detectar cuándo una empresa quedó <strong>"atrapada en el medio"</strong>; reconocer decisiones de <strong>estrategia corporativa</strong> (diversificación relacionada/no relacionada, integración vertical hacia adelante/atrás, alianzas, F&amp;A) y evaluar si crean valor; hacer <strong>análisis interno</strong> (fortalezas y debilidades, recursos y capacidades, VRIO); y usar la <strong>cadena de valor</strong> para hallar la ventaja competitiva. Casi siempre se trabaja sobre un caso concreto: no basta definir, hay que <strong>aplicar y justificar con evidencia del caso</strong>.</div>

        <p>Esta unidad responde tres preguntas: <strong>qué es la estrategia</strong>, <strong>por qué hoy es dinámica</strong> y <strong>en qué niveles opera</strong>.</p>

        <h4>¿Qué es la estrategia?</h4>
        <p>Conjunto de <strong>decisiones y acciones de largo plazo</strong> que una organización adopta para lograr un desempeño superior y sostenible, creando ventajas competitivas difíciles de imitar, en coherencia con su entorno y sus capacidades internas. Implica <strong>elegir, renunciar y asignar recursos</strong>.</p>
        <div class="guia-def">La estrategia es elegir qué hacer y, sobre todo, <strong>qué NO hacer</strong>, para crear y sostener valor en el tiempo.</div>
        <p><strong>Objetivo central:</strong> crear ventaja competitiva, lograr rentabilidad superior y asegurar la sustentabilidad del desempeño. En entornos dinámicos suma adaptabilidad e innovación continua.</p>

        <h4>Por qué hoy la estrategia es dinámica: megatendencias</h4>
        <p>Las <strong>megatendencias</strong> son fuerzas estructurales de largo plazo (disrupción tecnológica, incertidumbre, cambios sociales, sostenibilidad, globalización fragmentada) que transforman los entornos competitivos. Obligan a estrategias flexibles e innovadoras.</p>
        <ul>
          <li><strong>VUCA</strong>: Volátil, Incierto, Complejo, Ambiguo.</li>
          <li><strong>BANI</strong>: Frágil, Ansioso, No-lineal, Incomprensible.</li>
        </ul>
        <p>Consecuencia: la ventaja competitiva es cada vez más <strong>transitoria</strong>; hay que crear, explotar y abandonar ventajas rápido.</p>

        <h4>Evolución del pensamiento estratégico</h4>
        <ol>
          <li><strong>Planificación</strong> (60-70): planes rígidos de largo plazo, entorno estable.</li>
          <li><strong>Posicionamiento</strong> (80): la industria manda; Porter y el análisis estructural.</li>
          <li><strong>Basado en recursos / RBV</strong> (90): la ventaja nace dentro de la empresa.</li>
          <li><strong>Capacidades dinámicas</strong> (2000+): adaptarse y reconfigurarse rápido.</li>
          <li><strong>Ventaja transitoria</strong> (hoy): lo sostenible es la excepción.</li>
        </ol>

        <h4>Dimensiones y niveles</h4>
        <p><strong>5 dimensiones:</strong> temporal, competitiva, organizacional, económica y dinámica.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Nivel</th><th>Pregunta que responde</th><th>Decisiones</th></tr></thead>
          <tbody>
            <tr><td><strong>Corporativa</strong></td><td>¿En qué negocios competir?</td><td>Crecimiento, diversificación, integración, internacionalización, F&amp;A</td></tr>
            <tr><td><strong>Competitiva</strong></td><td>¿Cómo competir en una industria?</td><td>Posicionamiento, ventaja competitiva, segmentación</td></tr>
            <tr><td><strong>Funcional</strong></td><td>¿Cómo ejecuta cada área?</td><td>Operaciones, marketing, finanzas, RRHH, I+D</td></tr>
          </tbody>
        </table></div>
        <p>La falta de coherencia entre los tres niveles <strong>destruye valor</strong>.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "La estrategia implica elegir y renunciar." · "No existe estrategia sin ejecución." · "La coherencia entre niveles es clave para crear valor."</div>
      `
    },
    {
      unidad: "U2", titulo: "Estrategia Corporativa",
      html: `
        <p>Define <strong>el ámbito de la empresa</strong>: en qué negocios y mercados participa y cómo coordina sus unidades para que el valor conjunto supere la suma individual.</p>

        <h4>Misión, visión y objetivos</h4>
        <ul>
          <li><strong>Misión</strong>: razón de ser (qué hace, para quién, con qué propósito). Delimita <em>hasta dónde</em> crecer.</li>
          <li><strong>Visión</strong>: estado futuro deseado. Define <em>hacia dónde</em> crecer.</li>
          <li><strong>Objetivos estratégicos</strong>: metas concretas, medibles y de largo plazo. Definen <em>cómo y a qué ritmo</em>.</li>
        </ul>

        <h4>Crecimiento y diversificación</h4>
        <p>La <strong>diversificación</strong> es expandirse a nuevos productos, mercados o industrias.</p>
        <ul>
          <li><strong>Relacionada</strong>: comparte recursos/capacidades con el negocio original (preferible: genera sinergias).</li>
          <li><strong>No relacionada</strong>: sin vínculo directo (mayor riesgo).</li>
        </ul>
        <p>Solo crea valor si hay <strong>sinergias reales</strong>: economías de escala (más de lo mismo, baja el costo unitario), economías de ámbito (bienes distintos compartiendo recursos), transferencia de conocimiento/reputación y mayor poder de negociación. Riesgos: costos de coordinación, burocracia, problemas de agencia, deseconomías de escala.</p>
        <div class="guia-def">El crecimiento solo es estratégico si crea valor. Más grande no es mejor; más coherente sí.</div>

        <h4>Cómo crece la empresa (estrategia corporativa)</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Estrategia</th><th>En qué consiste</th><th>Objetivo clave</th></tr></thead>
          <tbody>
            <tr><td><strong>Horizontal</strong></td><td>Expandirse en la MISMA etapa de la cadena (más productos/mercados)</td><td>Escala y sinergias</td></tr>
            <tr><td><strong>Vertical hacia atrás</strong></td><td>Controlar insumos/proveedores</td><td>Control y eficiencia</td></tr>
            <tr><td><strong>Vertical hacia adelante</strong></td><td>Controlar distribución/cliente</td><td>Control y eficiencia</td></tr>
            <tr><td><strong>Internacionalización</strong></td><td>Entrar a nuevos países</td><td>Crecimiento y diversificación</td></tr>
          </tbody>
        </table></div>
        <p><strong>Integración vertical:</strong> conviene cuando hay activos específicos, alta incertidumbre y riesgo de oportunismo. La decisión depende de comparar <strong>costos de transacción del mercado vs. costos internos</strong>. No siempre conviene integrar (da rigidez).</p>
        <p><strong>Modos de entrada internacional</strong> (de menor a mayor compromiso/control/riesgo): exportaciones → alianzas → joint ventures → F&amp;A → inversión directa.</p>

        <h4>Enfoque basado en recursos (RBV) y VRIO</h4>
        <p>La ventaja competitiva nace <strong>al interior</strong> de la empresa: las empresas son heterogéneas. <strong>Recursos</strong> = activos que controla (tangibles, intangibles, humanos); <strong>capacidades</strong> = habilidad para combinar recursos. Las <strong>competencias esenciales</strong> son capacidades clave, difíciles de imitar, que abren mercados y sustentan la propuesta de valor.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>VRIO</th><th>Pregunta clave</th></tr></thead>
          <tbody>
            <tr><td><strong>V</strong> — Valioso</td><td>¿Aprovecha oportunidades o neutraliza amenazas?</td></tr>
            <tr><td><strong>R</strong> — Raro</td><td>¿Es escaso frente a la competencia?</td></tr>
            <tr><td><strong>I</strong> — Inimitable</td><td>¿Es difícil o costoso de imitar?</td></tr>
            <tr><td><strong>O</strong> — Organización</td><td>¿La empresa está organizada para explotarlo?</td></tr>
          </tbody>
        </table></div>
        <p>Solo los recursos que cumplen <strong>los cuatro</strong> criterios dan ventaja sostenible. Riesgos del RBV: rigidez y miopía interna → complementar con análisis del entorno.</p>

        <h4>Modelo del Triángulo Corporativo</h4>
        <p>Herramienta para evaluar si una estrategia corporativa <strong>realmente crea valor</strong>. Se apoya en tres vértices que deben reforzarse mutuamente:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Vértice</th><th>Qué evalúa</th></tr></thead>
          <tbody>
            <tr><td><strong>1. Atractivo de la industria</strong></td><td>Rentabilidad estructural del sector: competencia, barreras de entrada, crecimiento, regulación (se analiza con las 5 Fuerzas)</td></tr>
            <tr><td><strong>2. Ventaja competitiva</strong></td><td>Recursos, capacidades, marca y know-how que permiten diferenciarse o liderar en costos (se analiza con RBV/VRIO)</td></tr>
            <tr><td><strong>3. Sinergias corporativas</strong></td><td>Valor adicional por pertenecer al grupo: economías de escala y de ámbito, transferencia de conocimiento y reputación</td></tr>
          </tbody>
        </table></div>
        <div class="guia-def">Una estrategia corporativa crea valor solo si los <strong>tres vértices se refuerzan mutuamente</strong>. Si uno falla, se destruye valor.</div>

        <h4>Crecimiento externo: F&amp;A vs. Alianzas</h4>
        <p><strong>Fusión</strong>: dos empresas se combinan en una nueva (las originales desaparecen). <strong>Adquisición</strong>: una compra el control de otra. Las F&amp;A fallan sobre todo en la <strong>integración</strong> (sobreestimar sinergias, choques culturales). <strong>Joint venture</strong>: alianza donde se crea una empresa nueva y las matrices siguen existiendo.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Aspecto</th><th>F&amp;A</th><th>Alianzas</th></tr></thead>
          <tbody>
            <tr><td>Control</td><td>Alto</td><td>Compartido</td></tr>
            <tr><td>Riesgo</td><td>Alto</td><td>Moderado</td></tr>
            <tr><td>Flexibilidad</td><td>Baja</td><td>Alta</td></tr>
            <tr><td>Inversión</td><td>Alta</td><td>Menor</td></tr>
          </tbody>
        </table></div>

        <div class="guia-frase"><strong>Frases de examen:</strong> "La diversificación debe alinearse con la misión y las capacidades." · "El crecimiento externo no garantiza creación de valor." · "La ventaja competitiva nace desde dentro."</div>
      `
    },
    {
      unidad: "U3", titulo: "Estrategia Competitiva",
      html: `
        <p>Es <strong>cómo una unidad de negocio compite dentro de una industria</strong> para lograr una posición favorable frente a sus rivales.</p>

        <h4>Definir bien la industria</h4>
        <p>Industria = conjunto de empresas con productos <strong>sustitutos cercanos</strong>. Definirla mal (muy estrecha o muy amplia) lleva a errores estratégicos: determina quiénes son tus competidores y la rentabilidad potencial.</p>

        <h4>Análisis externo: macro y microentorno</h4>
        <p><strong>Macroentorno — PESTLE</strong> (factores generales, no controlables): Político, Económico, Social, Tecnológico, Legal, Ambiental.</p>
        <p><strong>Microentorno</strong>: actores directos de la industria (competidores, proveedores, clientes, sustitutos, nuevos entrantes, complementadores).</p>

        <h4>Las 5 Fuerzas de Porter</h4>
        <p>Miden el <strong>atractivo</strong> (rentabilidad potencial) de una industria. La rentabilidad no depende solo de los rivales directos.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Fuerza</th><th>Presiona la rentabilidad cuando…</th></tr></thead>
          <tbody>
            <tr><td><strong>Rivalidad</strong></td><td>Muchos competidores, bajo crecimiento, poca diferenciación, altos costos fijos, barreras de salida altas</td></tr>
            <tr><td><strong>Nuevos entrantes</strong></td><td>Barreras de entrada bajas (poca escala, poco capital, sin regulación)</td></tr>
            <tr><td><strong>Poder de proveedores</strong></td><td>Pocos proveedores, sin sustitutos de insumos, pueden integrarse hacia adelante</td></tr>
            <tr><td><strong>Poder de clientes</strong></td><td>Compran grandes volúmenes, muchos sustitutos, bajo costo de cambio</td></tr>
            <tr><td><strong>Sustitutos</strong></td><td>Buena relación precio-calidad del sustituto, bajo costo de cambio</td></tr>
          </tbody>
        </table></div>
        <p><strong>6ª fuerza — complementadores:</strong> empresas cuyos productos aumentan el valor del principal (hardware+software, smartphone+apps). No compiten directo, pero influyen en la rentabilidad. Se relaciona con la <strong>coopetición</strong>: competir y cooperar a la vez para crear más valor.</p>

        <h4>Posicionamiento y ventaja competitiva</h4>
        <p>El <strong>posicionamiento</strong> es cómo decides competir y qué lugar ocupas en la mente del cliente: elecciones conscientes, con renuncias, difícil de imitar. No es ser mejor en todo, sino ser <strong>distinto</strong>. Hay <strong>ventaja competitiva</strong> cuando generas más valor económico que los rivales (menor costo o mayor valor percibido).</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Estrategia genérica</th><th>Cómo se logra</th></tr></thead>
          <tbody>
            <tr><td><strong>Liderazgo en costos</strong></td><td>Eficiencia, economías de escala, control de gastos</td></tr>
            <tr><td><strong>Diferenciación</strong></td><td>Atributos únicos: marca, calidad, diseño, innovación, servicio</td></tr>
            <tr><td><strong>Enfoque</strong></td><td>Atender mejor un segmento específico</td></tr>
          </tbody>
        </table></div>
        <p><strong>Atrapado en el medio</strong>: no ser líder en costos NI diferenciarse → bajo desempeño y pérdida de identidad.</p>

        <h4>Grupos estratégicos</h4>
        <p>Empresas de una misma industria con estrategias similares. Compiten más <strong>dentro</strong> del grupo que entre grupos. Las <strong>barreras de movilidad</strong> (marca, escala, inversiones específicas) impiden cambiar de grupo y explican su estabilidad.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Definir mal la industria es competir a ciegas." · "No solo se compite contra rivales directos." · "La estrategia es elegir qué no hacer."</div>
      `
    },
    {
      unidad: "U4", titulo: "Estrategia Funcional",
      html: `
        <p>Es cómo <strong>cada área</strong> (operaciones, marketing, finanzas, RRHH, I+D) ejecuta y sostiene la ventaja competitiva. Aquí la estrategia se vuelve acción.</p>

        <h4>Crear valor económico</h4>
        <div class="guia-def">Valor económico = <strong>disposición a pagar del cliente − costo de la empresa</strong>. La estrategia funcional busca maximizar esa diferencia.</div>
        <p><strong>Eficiencia</strong> = hacer las cosas bien (menor costo). <strong>Eficacia</strong> = hacer las cosas correctas (alineadas a la estrategia). Se necesitan ambas.</p>

        <h4>Cadena de valor (Porter)</h4>
        <p>Herramienta de <strong>análisis interno</strong>: descompone la empresa en actividades que crean valor. La ventaja surge de <strong>cómo encajan</strong> las actividades, no de una sola.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Primarias (crean/venden/entregan)</th><th>De apoyo (habilitan)</th></tr></thead>
          <tbody>
            <tr><td>Logística interna</td><td>Infraestructura de la empresa</td></tr>
            <tr><td>Operaciones</td><td>Gestión de recursos humanos</td></tr>
            <tr><td>Logística externa</td><td>Desarrollo tecnológico</td></tr>
            <tr><td>Marketing y ventas</td><td>Abastecimiento (compras)</td></tr>
            <tr><td>Servicio (postventa)</td><td></td></tr>
          </tbody>
        </table></div>

        <h4>Sistema de actividades y encaje estratégico</h4>
        <p>Una estrategia genérica no basta declararla: debe materializarse en un <strong>sistema coherente de actividades</strong> que se refuercen entre sí. Cuanto mayor el <strong>encaje</strong>, más sostenible la ventaja, porque imitar una actividad aislada no reproduce el sistema.</p>

        <h4>Sostenibilidad de la ventaja competitiva</h4>
        <p>Una ventaja es <strong>sostenible</strong> (no temporal) cuando resiste la imitación. Fuentes:</p>
        <ul>
          <li>Sistema de actividades coherente y <strong>trade-offs</strong> (renuncias) claros.</li>
          <li>Recursos y capacidades difíciles de imitar (know-how, marca, cultura, aprendizaje).</li>
          <li>Barreras a la imitación: escala, costos hundidos, complejidad y <strong>ambigüedad causal</strong> (el rival no logra identificar la fuente de la ventaja).</li>
          <li>Innovación y adaptación continua.</li>
        </ul>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El valor se crea cuando el cliente percibe beneficios superiores al costo." · "Imitar no es copiar una actividad, sino todo el sistema." · "Sin trade-offs no hay estrategia."</div>
      `
    },
    {
      unidad: "U5", titulo: "Tópicos Modernos",
      html: `
        <p>Herramientas para competir en entornos dinámicos, donde las tradicionales no bastan por sí solas. El foco se desplaza de <strong>competir</strong> a <strong>crear nuevos espacios de valor</strong>.</p>

        <h4>Herramientas estratégicas modernas</h4>
        <ul>
          <li><strong>Innovación disruptiva</strong>: nuevas tecnologías/modelos desplazan a los establecidos y crean mercados nuevos.</li>
          <li><strong>Océanos azules</strong>: crear mercados no disputados; se diferencia y reduce costos <em>a la vez</em> (innovación en valor).</li>
          <li><strong>Capacidades dinámicas</strong>: integrar, construir y reconfigurar recursos frente al cambio.</li>
          <li><strong>Design thinking</strong>: entender al usuario, experimentar, prototipar rápido.</li>
          <li><strong>Plataformas y ecosistemas</strong>: la ventaja surge de la red de valor, no de la empresa aislada.</li>
        </ul>

        <h4>Sustentabilidad estratégica (triple dimensión)</h4>
        <p>La empresa opera en un entorno económico, <strong>social</strong> y <strong>natural</strong>. La estrategia moderna integra las tres dimensiones:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Dimensión</th><th>Qué considera</th></tr></thead>
          <tbody>
            <tr><td><strong>Económica</strong></td><td>Rentabilidad, eficiencia, crecimiento</td></tr>
            <tr><td><strong>Social</strong></td><td>Stakeholders, condiciones laborales, comunidad</td></tr>
            <tr><td><strong>Ambiental</strong></td><td>Uso eficiente de recursos, reducción de impactos</td></tr>
          </tbody>
        </table></div>
        <p><strong>Valor compartido</strong>: generar a la vez beneficios económicos para la empresa y sociales/ambientales para la sociedad; no son opuestos, sino interdependientes. El éxito se mide también por la <strong>legitimidad social</strong>.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Competir ya no basta: hay que reinventar el mercado." · "No hay ventaja competitiva sin legitimidad social." · "Crear valor compartido es fuente de sustentabilidad."</div>
      `
    }
  ]
};
