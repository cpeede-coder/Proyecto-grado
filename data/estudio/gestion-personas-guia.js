// Guía de estudio ordenada — GESTIÓN DE PERSONAS (material para LEER antes de las flashcards)
// Contenido ALINEADO al TEMARIO OFICIAL del Examen de Grado y VALIDADO contra fuentes
// estándar de RR.HH. (Chiavenato, Dessler, Werther) y los autores del curso.
// Se sirve como HTML por unidad y se inyecta en #estudio-guia-contenido (contenido
// estático propio, sin entrada de usuario). Usa las clases .guia-* de css/styles.css.
//
// SE ELIMINÓ (fuera del temario): DERECHO LABORAL CHILENO / Código del Trabajo — gratificación
//   legal (Art. 47 / Art. 50, tope 4,75 IMM), ingreso mínimo mensual como "ancla legal";
//   franquicia SENCE / OTEC; referencia a la Ley Karin (reformulada a "canales de denuncia y
//   comités de convivencia"); nota sobre el "valor legal" del descriptor de cargo. "Rotación"
//   se conserva solo como concepto de retención dentro de Mantenimiento.
// SE AGREGÓ (del temario): utilidad de la descripción de puestos; diseño de reclutamiento
//   alineado al modelo de personas; alineamiento estratégico de la compensación; rol de los
//   líderes en la gestión del cambio.
// Nota: aquí SÍ se usan template literals (backticks) por ser un bloque HTML largo;
// la regla de "no backticks" aplica al banco de preguntas (data/materias/*.js).
window.ESTUDIO_GUIA = window.ESTUDIO_GUIA || {};
window.ESTUDIO_GUIA["gestion-personas"] = {
  nombre: "Gestión de Personas",
  intro: "Léela unidad por unidad. Cuando entiendas una unidad, pasa a las flashcards de esa unidad para fijarla. Los recuadros azules son definiciones para memorizar; los dorados, frases y pautas que suman en el examen. Idea transversal que la pauta premia: todo subsistema de RR.HH. existe para ejecutar la estrategia del negocio.",
  secciones: [
    {
      unidad: "U1", titulo: "Planificación de la Dotación",
      html: `
        <div class="guia-def">⭐ <strong>Qué más se pregunta en Gestión de Personas:</strong> los exámenes reales giran una y otra vez sobre el reclutamiento interno vs. externo y su impacto en cultura y clima; el diseño del proceso de selección alineado a la estrategia; la compensación total y la retención (rotación no deseada); la capacitación (DNC y evaluación de su efectividad); la gestión y evaluación del desempeño con retroalimentación; la gestión del cambio y la resistencia (Lewin y Kotter); y la cultura y el clima organizacional cuando fallan. Casi siempre en formato de caso: no basta con definir, hay que analizar y proponer acciones concretas conectadas con la estrategia.</div>

        <p>Antes de contratar a nadie, se decide <strong>cómo se organiza el trabajo</strong> y <strong>qué personas, con qué capacidades y en qué cantidad</strong> necesita la empresa para cumplir su estrategia.</p>

        <div class="guia-def">Idea transversal del examen: cada subsistema de RR.HH. existe para que las personas correctas, con las capacidades correctas y motivadas de la forma correcta, ejecuten la estrategia del negocio.</div>

        <h4>El ciclo de subsistemas</h4>
        <p>Planificar la dotación &rarr; reclutar &rarr; seleccionar &rarr; mantener (compensar) &rarr; desarrollar/capacitar &rarr; evaluar el desempeño. Es un <strong>ciclo</strong>: la evaluación realimenta capacitación, compensación y carrera.</p>

        <h4>Diseño de estructura organizacional: criterios y pertinencia según el modelo de negocio y la estrategia</h4>
        <p>La estructura define cómo la empresa <strong>divide, agrupa y coordina</strong> las actividades para alcanzar sus objetivos. Puede ser formal (jerarquías definidas) o informal (relaciones espontáneas). Regla clave: <strong>"la estructura sigue a la estrategia"</strong>.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Criterio de diseño</th><th>Qué mide</th><th>Alta / Ejemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Formalización</strong></td><td>Cuán escritas están las reglas</td><td>Alta: banco/AFP · Baja: startup</td></tr>
            <tr><td><strong>Centralización</strong></td><td>Cuánto se concentran las decisiones arriba</td><td>Centralizada: el gerente decide · Descentralizada: se delega</td></tr>
            <tr><td><strong>Departamentalización</strong></td><td>Cómo se agrupan las actividades</td><td>Funcional / Divisional / Matricial</td></tr>
            <tr><td><strong>Especialización</strong></td><td>Grado de división del trabajo</td><td>Alta: tareas acotadas · Baja: cargos polifuncionales</td></tr>
          </tbody>
        </table></div>
        <p><strong>Pertinencia según el modelo de negocio y la estrategia:</strong> entornos dinámicos / innovación &rarr; estructuras flexibles, descentralizadas, matriciales. Entornos estables / eficiencia o costos &rarr; formales y centralizadas. Diferenciación / cercanía al cliente &rarr; divisionales por producto o mercado. Ej.: Falabella es divisional (Retail, Banco, Sodimac, Mall Plaza); una PYME familiar suele ser funcional y centralizada.</p>

        <h4>Descripción de puestos y su utilidad: enfoque tradicional y por competencias</h4>
        <p>Describir los puestos permite saber <strong>qué tareas</strong> hace un cargo y <strong>qué se requiere</strong> de quien lo desempeña. Su utilidad: ordena la estructura, valoriza los puestos, ayuda a planificar la dotación y da la base para reclutar, seleccionar, evaluar y compensar. Dos documentos que no hay que confundir:</p>
        <ul>
          <li><strong>Descripción del cargo</strong>: QUÉ hace el puesto (tareas, responsabilidades, cómo y por qué).</li>
          <li><strong>Especificación o perfil</strong>: QUÉ necesita la persona (estudios, experiencia, conocimientos, competencias).</li>
        </ul>
        <p>El <strong>enfoque tradicional</strong> se centra en las tareas (el qué); el <strong>enfoque por competencias</strong> mira las habilidades, actitudes y conductas observables (el cómo) y se alinea mejor con la estrategia: no basta con hacer las tareas, importa <em>cómo</em> se hacen y si esas conductas construyen la ventaja competitiva.</p>

        <h4>Tipos de cargos y su impacto en el logro de resultados organizacionales</h4>
        <p>Directivos (deciden la estrategia), Gerenciales (implementan y supervisan), Operativos (producen y entregan), Administrativos (información y soporte), Especializados (expertise técnico crítico) y Temporales (flexibilidad y bajo costo). Alineamiento: si la ventaja es innovación se cuidan los especializados y directivos; si es costo, la eficiencia de los operativos.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "La estructura sigue a la estrategia." · "Descripción = qué hace el puesto; especificación = qué necesita la persona." · "El enfoque por competencias mira el cómo, no solo el qué."</div>
      `
    },
    {
      unidad: "U2", titulo: "Reclutamiento y Selección",
      html: `
        <p>Dos procesos distintos: <strong>reclutar</strong> es atraer candidatos (genera el pool a partir del perfil del cargo y del modelo de personas); <strong>seleccionar</strong> es elegir al que mejor calza con el puesto y con la estrategia.</p>

        <h4>Reclutamiento interno y externo: características y utilidad</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Aspecto</th><th>Interno</th><th>Externo</th></tr></thead>
          <tbody>
            <tr><td>Qué es</td><td>Cubrir con gente de la empresa (ascensos, movilidad)</td><td>Atraer talento de fuera (portales, ferias, referidos)</td></tr>
            <tr><td>Ventajas</td><td>Menor costo, facilita movilidad, sube moral y lealtad</td><td>Talento nuevo, mayor diversidad, ideas frescas</td></tr>
            <tr><td>Utilidad</td><td>Menos capacitación inicial</td><td>Llena vacíos de habilidades, introduce enfoques nuevos</td></tr>
          </tbody>
        </table></div>
        <p>Alineamiento: cultura fuerte / continuidad tiende a <strong>interno</strong>; necesidad de reinventarse pide más <strong>externo</strong>.</p>

        <h4>Diseño de reclutamiento en alineamiento con el modelo de personas</h4>
        <div class="guia-def">El modelo de personas es el perfil ideal del empleado según competencias, valores y cultura: no es solo "qué sabe hacer", sino "qué tipo de persona encaja aquí".</div>
        <p>El reclutamiento se diseña <strong>desde ese perfil</strong>: define qué talento buscar, dónde buscarlo y con qué mensaje, para que quienes lleguen ya calcen con el tipo de persona que la estrategia necesita. Ej.: una fintech atrae perfiles creativos y tolerantes a la ambigüedad; un banco tradicional, perfiles rigurosos y orientados al detalle.</p>

        <h4>Reclutamiento por medio de las redes sociales</h4>
        <p>El <strong>reclutamiento por redes sociales</strong> aporta alcance e interactividad, evaluación previa de perfiles (LinkedIn) y segmentación de campañas (Meta). Ejemplos chilenos: LinkedIn, GetOnBoard (tech), Laborum / Trabajando.com / Chiletrabajos (masivos).</p>

        <h4>Proceso de selección: etapas y enfoques en alineamiento con la estrategia organizacional</h4>
        <p>1) Definir el perfil &rarr; 2) Atraer candidatos &rarr; 3) Evaluación (pruebas, entrevistas, assessment) &rarr; 4) Selección final &rarr; 5) Integración (inducción y socialización). Además del calce técnico importa el <strong>ajuste cultural</strong>: un candidato brillante que no comparte los valores suele fracasar igual.</p>
        <p>Alineamiento de la selección con la estrategia: innovación &rarr; creatividad y adaptabilidad, pruebas abiertas; eficiencia/costos &rarr; confiabilidad y ajuste a procedimientos; cargos estratégicos &rarr; procesos largos y rigurosos; cargos operativos/temporales &rarr; procesos ágiles.</p>

        <h4>Entrevistas preliminar y de selección: condiciones para la efectiva evaluación de potencial</h4>
        <p>La entrevista busca crear las <strong>condiciones para evaluar de verdad el potencial</strong> del candidato:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Aspecto</th><th>Preliminar</th><th>De selección</th></tr></thead>
          <tbody>
            <tr><td>Propósito</td><td>Filtrar requisitos básicos</td><td>Evaluar en profundidad competencias y ajuste cultural</td></tr>
            <tr><td>Formato</td><td>Estructurada, breve, ambiente relajado</td><td>Preguntas situacionales/conductuales, a veces panel</td></tr>
            <tr><td>Ejemplo</td><td>Entrevista telefónica o por video</td><td>Entrevista por competencias (liderazgo, resolución)</td></tr>
          </tbody>
        </table></div>
        <p><strong>Técnica STAR</strong> (Situación &ndash; Tarea &ndash; Acción &ndash; Resultado): en vez de "&iquest;eres bueno en equipo?", se pide "cuéntame una situación real de conflicto en tu equipo y qué hiciste". El comportamiento pasado predice mejor el potencial.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Reclutar es atraer; seleccionar es elegir." · "Se contrata por competencias y se retiene por ajuste cultural." · "STAR pide un caso real, no una autopercepción."</div>
      `
    },
    {
      unidad: "U3", titulo: "Mantenimiento: Remuneraciones y Compensaciones",
      html: `
        <p>"Mantenimiento" es todo lo que hace la empresa para <strong>retener y motivar</strong>. Su corazón son las remuneraciones y compensaciones. Es una de las unidades <strong>más preguntadas</strong> del examen.</p>

        <h4>Políticas y sistemas de remuneraciones: criterios y características</h4>
        <ul>
          <li><strong>Equidad interna</strong>: consistencia entre roles similares (se logra valorizando puestos).</li>
          <li><strong>Equidad externa (competitividad)</strong>: competir con el mercado (se logra con benchmark salarial).</li>
          <li><strong>Rendimiento</strong>: parte ligada al desempeño individual y organizacional.</li>
        </ul>
        <p>Características deseables: <strong>transparencia</strong> (claridad en cómo se fijan los sueldos) y <strong>flexibilidad</strong> (capacidad de ajuste al negocio y al mercado).</p>

        <h4>Políticas y planes de compensaciones y reconocimiento monetarios y no monetarios: características y alineamiento con la estrategia</h4>
        <div class="guia-def">La compensación total tiene tres capas (monetaria directa, monetaria indirecta y no monetaria). La respuesta del examen SIEMPRE debe incluir la monetaria directa, porque es la base del sistema.</div>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Capa</th><th>Qué incluye</th><th>Por qué retiene</th></tr></thead>
          <tbody>
            <tr><td><strong>A) Monetaria directa</strong> (la base)</td><td>Sueldo base competitivo, bonos por metas, participación en utilidades / stock options</td><td>Justicia externa evita fuga; justicia interna evita trato injusto; bonos fomentan meritocracia</td></tr>
            <tr><td><strong>B) Monetaria indirecta</strong> (beneficios)</td><td>Seguros de salud/dental/mental, licencias extendidas, bonos de transporte, apoyo a la formación</td><td>Reduce el estrés financiero y muestra preocupación por la persona</td></tr>
            <tr><td><strong>C) No monetaria</strong> (salario emocional)</td><td>Trabajo híbrido, flexibilidad horaria, reconocimiento, propósito, bienestar emocional</td><td>La generación joven trabaja por sentido y balance vida-trabajo</td></tr>
          </tbody>
        </table></div>
        <p><strong>Alineamiento estratégico:</strong> el mix de compensación se diseña hacia atrás desde la estrategia: debe incentivar los comportamientos que el negocio necesita y retener al talento clave. Si la ventaja es innovación pesan la participación en utilidades y la autonomía; si es costo/eficiencia, sueldos competitivos y bonos por productividad.</p>
        <div class="guia-frase"><strong>Pauta &mdash; esquema de compensación:</strong> proponer al menos 2 tipos de compensación con impacto y ejemplos concretos de cada uno. Trampa: incluir SIEMPRE la monetaria directa; no respondas solo "flexibilidad y reconocimiento".</div>

        <h4>La otra cara: retención y rotación no deseada</h4>
        <p>Si el mantenimiento falla, la gente se va. La rotación no deseada se trata como la cara B de la retención; la pauta pide <strong>analizar</strong> sus consecuencias (el porqué), no solo nombrarlas:</p>
        <ul>
          <li>Costos de reemplazo, contratación e inducción (pueden superar el 100% del sueldo anual del cargo).</li>
          <li>Baja de productividad durante la curva de aprendizaje del reemplazo.</li>
          <li>Sobrecarga de los que se quedan &rarr; estrés &rarr; más renuncias (efecto dominó).</li>
          <li>Pérdida de conocimiento crítico / capital intelectual (experiencia no documentada).</li>
          <li>Deterioro del clima y daño al employer branding; riesgo de perder clientes o relaciones clave.</li>
        </ul>
        <div class="guia-frase"><strong>Frases de examen:</strong> "La compensación total SIEMPRE parte por la monetaria directa." · "Se paga por lo que se quiere que ocurra." · "La rotación se analiza, no se lista."</div>
      `
    },
    {
      unidad: "U4", titulo: "Capacitación y Desarrollo de Carrera",
      html: `
        <p>Busca cerrar la brecha entre lo que las personas <strong>saben hoy</strong> y lo que la estrategia <strong>necesitará mañana</strong>.</p>

        <h4>Proceso de inducción y socialización</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th></th><th>Inducción</th><th>Socialización</th></tr></thead>
          <tbody>
            <tr><td>Qué es</td><td>Proceso formal que introduce a políticas, cultura y expectativas</td><td>Proceso continuo de integración ("hacerse parte")</td></tr>
            <tr><td>Naturaleza</td><td>Evento formal y acotado</td><td>Proceso informal y prolongado</td></tr>
            <tr><td>Ejemplo</td><td>Programa de bienvenida + mentoría</td><td>Team building</td></tr>
          </tbody>
        </table></div>
        <p>La socialización tiene tres fases: <strong>Anticipatoria</strong> (expectativas antes de entrar), <strong>Encuentro</strong> (choque expectativa/realidad) y <strong>Metamorfosis</strong> (ajuste pleno).</p>

        <h4>Etapas de un proceso de capacitación: DNC, diseño, implementación, evaluación</h4>
        <p><strong>DNC &rarr; Diseño &rarr; Implementación &rarr; Evaluación.</strong> La <strong>DNC</strong> (Detección de Necesidades) es la etapa clave: identifica las brechas reales con evaluaciones de desempeño, encuestas e indicadores. Si se detecta mal, se capacita en lo que no sirve.</p>
        <ul>
          <li><strong>Diseño</strong>: objetivos de aprendizaje claros, métodos (presencial, e-learning, taller) y materiales.</li>
          <li><strong>Implementación</strong>: ejecutar cursos, e-learning, talleres, on-the-job.</li>
          <li><strong>Evaluación</strong>: medir efectividad e impacto (post-test, observación, indicadores antes/después).</li>
        </ul>

        <h4>Modelo de Kirkpatrick: 4 niveles de efectividad</h4>
        <p>⭐ Modelo estrella del examen para <strong>medir si la capacitación sirvió</strong>. Son 4 niveles en escalera: cada uno mide más profundo que el anterior.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Nivel</th><th>Qué mide</th><th>Cómo se mide</th></tr></thead>
          <tbody>
            <tr><td><strong>1. Reacción</strong></td><td>&iquest;Les gustó? Satisfacción de los participantes</td><td>Encuesta de salida ("&iquest;qué te pareció?")</td></tr>
            <tr><td><strong>2. Aprendizaje</strong></td><td>&iquest;Aprendieron? Conocimientos/habilidades adquiridos</td><td>Test antes/después</td></tr>
            <tr><td><strong>3. Comportamiento</strong></td><td>&iquest;Lo aplican en el puesto? Transferencia al trabajo</td><td>Observación del desempeño en el cargo</td></tr>
            <tr><td><strong>4. Resultados</strong></td><td>&iquest;Impacto en el negocio? Productividad, ventas, calidad</td><td>Indicadores del negocio antes/después</td></tr>
          </tbody>
        </table></div>
        <p>El <strong>ROI de la capacitación (Phillips)</strong> se suma como un 5&ordm; nivel que <strong>monetiza</strong> el impacto: traduce los resultados a dinero para justificar la inversión ante la gerencia.</p>
        <div class="guia-frase">El examen pide subir de nivel: la mayoría de las empresas mide solo Reacción; el valor real está en Comportamiento y Resultados.</div>

        <h4>Medición del impacto de la capacitación: evaluación ROI</h4>
        <div class="guia-def">ROI (%) = (Beneficios &minus; Costos) / Costos &times; 100. Ej.: invertir $10.000 y que las ventas suban $30.000 &rarr; ROI = (30.000 &minus; 10.000) / 10.000 &times; 100 = 200%.</div>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Capacitar sin DNC es dispararle a ciegas al presupuesto." · "El ROI traduce la capacitación al lenguaje de la gerencia: el dinero."</div>
      `
    },
    {
      unidad: "U5", titulo: "Gestión del Desempeño",
      html: `
        <p>Medir cómo lo está haciendo cada persona para <strong>decidir</strong> (desarrollo, promoción, compensación) y <strong>alinear</strong> su aporte con la estrategia. Se evalúa el <strong>qué</strong> (metas/resultados) y el <strong>cómo</strong> (conductas y competencias).</p>

        <h4>Modelos de evaluación de desempeño y la cultura y estrategia organizacional</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Modelo</th><th>En qué se basa</th><th>Ventaja / Desventaja</th></tr></thead>
          <tbody>
            <tr><td><strong>Por objetivos (MBO/APO)</strong></td><td>Logro de objetivos medibles</td><td>Claro y con foco en resultados / Rígido</td></tr>
            <tr><td><strong>360&deg;</strong></td><td>Feedback de jefe, pares, subordinados y autoevaluación</td><td>Visión integral / Complejo, riesgo de sesgo</td></tr>
            <tr><td><strong>Por competencias</strong></td><td>Competencias y conductas clave</td><td>Foco en desarrollo y estrategia / Subjetivo si no están bien definidas</td></tr>
          </tbody>
        </table></div>
        <p>El modelo debe reflejar los <strong>valores</strong> y estar alineado con la <strong>estrategia</strong>: si valoras la colaboración pero solo evalúas metas individuales, generas competencia interna tóxica.</p>

        <h4>Desempeño efectivo: focos en metas y desempeño</h4>
        <p>Desempeño efectivo es el que logra los resultados Y lo hace coherente con los valores. Las metas deben ser <strong>SMART</strong>: eSpecíficas, Medibles, Alcanzables, Relevantes y Temporales. Ej.: "aumentar las ventas 10% en 6 meses".</p>

        <h4>Errores frecuentes de evaluación</h4>
        <ul>
          <li><strong>Efecto halo</strong>: una cualidad contamina toda la evaluación.</li>
          <li><strong>Tendencia central</strong>: poner a todos "en el medio".</li>
          <li><strong>Indulgencia / severidad</strong>: evaluar a todos muy alto o muy bajo.</li>
          <li><strong>Recencia</strong>: pesa solo lo último del período.</li>
          <li><strong>Similitud ("similar a mí")</strong>: sesgo por afinidad personal.</li>
        </ul>

        <h4>Hito de la retroalimentación: rol de evaluador y evaluado</h4>
        <p>El <strong>feedback</strong> es el hito donde la evaluación se vuelve desarrollo: específico, oportuno y orientado a mejorar (no un "buen trabajo" genérico). Rol del <strong>evaluador</strong>: feedback honesto y apoyo; rol del <strong>evaluado</strong>: aceptar, reflexionar, trabajar las brechas y comunicar necesidades.</p>

        <h4>Planes de desarrollo y gestión de resultados de la evaluación</h4>
        <p>El ciclo se cierra con <strong>planes de desarrollo</strong> individualizados, <strong>gestión de resultados</strong> (promoción, compensación, desarrollo) y acciones correctivas para el bajo desempeño. La evaluación vuelve a alimentar capacitación, compensación y carrera.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Se evalúa el qué (metas) y el cómo (conductas)." · "El feedback convierte la evaluación en desarrollo." · "Se evalúa lo que se quiere que ocurra: la métrica moldea la conducta."</div>
      `
    },
    {
      unidad: "U6", titulo: "Cambio y Desarrollo Organizacional",
      html: `
        <p>La organización se mira como un todo que cambia: su <strong>identidad</strong> (visión, misión, valores), su <strong>comportamiento</strong> y cómo <strong>gestionar el cambio</strong>.</p>

        <h4>Visión, misión y valores</h4>
        <ul>
          <li><strong>Visión</strong>: lo que la organización aspira a ser en el futuro (da dirección).</li>
          <li><strong>Misión</strong>: su razón de ser hoy (qué hace, para quién y cómo).</li>
          <li><strong>Valores</strong>: principios que guían el comportamiento y las decisiones.</li>
        </ul>

        <h4>Comportamiento Organizacional</h4>
        <p>El <strong>Comportamiento Organizacional (CO)</strong> estudia la conducta humana en el trabajo en tres niveles: individuo (motivación, personalidad, percepción), grupos (equipos, liderazgo, comunicación) y sistema organizacional (estructura, cultura, políticas).</p>

        <h4>Etapas de un equipo (Tuckman)</h4>
        <p>Todo equipo atraviesa 4 fases antes de rendir; no se puede saltar la del conflicto:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Fase</th><th>Qué pasa</th></tr></thead>
          <tbody>
            <tr><td><strong>1. Forming</strong> (formación)</td><td>Se conocen, cortesía y dependencia del líder; aún no hay confianza</td></tr>
            <tr><td><strong>2. Storming</strong> (conflicto)</td><td>Choques, tensión y crisis por roles y poder &mdash; la etapa clave</td></tr>
            <tr><td><strong>3. Norming</strong> (normas)</td><td>Se acuerdan reglas, crece la cohesión y la confianza</td></tr>
            <tr><td><strong>4. Performing</strong> (desempeño)</td><td>El equipo rinde, colabora y se enfoca en resultados</td></tr>
          </tbody>
        </table></div>
        <p>La "crisis" de un equipo suele ser el <strong>storming</strong>; superarlo no se logra evitándolo, sino con <strong>normas claras y liderazgo</strong> que canalicen la tensión hacia el norming.</p>

        <h4>Conflicto de tarea vs. de relación</h4>
        <div class="guia-def"><strong>Conflicto de tarea:</strong> es sobre el trabajo, las ideas y el cómo hacer las cosas. En dosis moderadas es <em>útil</em>: obliga a debatir y mejora las decisiones. <strong>Conflicto de relación:</strong> son choques personales y emocionales (antipatías, egos). Es <em>siempre dañino</em>: destruye la confianza y quiebra los equipos.</div>
        <p>La <strong>cohesión</strong> y las <strong>normas</strong> del equipo son lo que regula el conflicto: mantienen el de tarea en niveles productivos y contienen el de relación antes de que escale.</p>

        <h4>Cambio organizacional</h4>
        <div class="guia-def">Cambio organizacional = proceso planificado que lleva a la organización de un estado actual (A) a uno deseado (B), ejecutado a través de las personas. Es un proceso, no un evento, y siempre hay resistencia.</div>
        <p>Puede ser <strong>incremental</strong> (mejoras continuas) o <strong>transformacional</strong> (radical, redefine el rumbo).</p>

        <h4>Resistencias al cambio</h4>
        <p>Causas de <strong>resistencia</strong>: miedo a lo desconocido, pérdida de control, hábitos y amenaza a la seguridad laboral. Estrategias para superarla: comunicación clara, participación, apoyo y negociación.</p>

        <h4>Modelos de gestión del cambio</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Modelo</th><th>Idea central</th></tr></thead>
          <tbody>
            <tr><td><strong>Lewin</strong></td><td>Descongelar (romper el statu quo) &rarr; Cambiar (implementar) &rarr; Recongelar (consolidar)</td></tr>
            <tr><td><strong>Kotter (8 pasos)</strong></td><td>Urgencia &rarr; coalición &rarr; visión &rarr; comunicar &rarr; eliminar obstáculos &rarr; triunfos cortos &rarr; consolidar &rarr; anclar en la cultura</td></tr>
            <tr><td><strong>Rousseau &amp; Ten Have</strong></td><td>Cambio basado en evidencia (datos, no modas), vía las personas y sus contratos psicológicos</td></tr>
            <tr><td><strong>McKinsey (influencia)</strong></td><td>4 condiciones simultáneas: role modeling, comprensión y convicción, mecanismos de refuerzo, desarrollo de habilidades</td></tr>
          </tbody>
        </table></div>
        <p>El <strong>rol de los líderes</strong> es decisivo: modelan las conductas deseadas, dan sentido, sostienen la energía y remueven barreras. Sin líderes comprometidos, el cambio se apaga.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El cambio es un proceso, no un evento." · "Sin recongelar, la organización vuelve al hábito viejo." · "Kotter parte en la urgencia y termina anclando el cambio en la cultura."</div>
      `
    },
    {
      unidad: "U7", titulo: "Cultura y Clima Organizacional",
      html: `
        <p>La cultura es el <strong>núcleo profundo</strong> de la organización; el clima, su <strong>temperatura del momento</strong>. No hay que confundirlos.</p>

        <h4>Cultura organizacional efectiva</h4>
        <div class="guia-def">Cultura = conjunto de valores, creencias, normas y prácticas compartidas que influyen en el comportamiento de los miembros. Es efectiva cuando se alinea con la estrategia, es flexible y genera compromiso.</div>
        <p>El <strong>modelo de Schein</strong> distingue 3 niveles:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Nivel</th><th>Qué es</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Artefactos</strong></td><td>Lo visible (fácil de observar, difícil de interpretar)</td><td>Oficinas, ritos, lenguaje, vestimenta</td></tr>
            <tr><td><strong>Valores adoptados</strong></td><td>Lo que la empresa dice que valora</td><td>Misión, código de ética</td></tr>
            <tr><td><strong>Supuestos básicos</strong></td><td>Creencias inconscientes que se dan por sentadas (el verdadero núcleo)</td><td>"Aquí el jefe siempre tiene la razón"</td></tr>
          </tbody>
        </table></div>
        <p><strong>Modelos que miden o clasifican la cultura:</strong> Cameron &amp; Quinn (Valores en Competencia, ver abajo), Denison &amp; Neale (4 dimensiones: misión, consistencia, involucramiento, adaptabilidad), Spencer Stuart &amp; Harvard (8 tipos), Richard Barrett (evolutivo, 7 niveles) y Maslow (base motivacional).</p>

        <h4>Culturas de Cameron &amp; Quinn (Valores en Competencia)</h4>
        <p>Clasifica la cultura cruzando <strong>dos ejes</strong>: el vertical <strong>Flexibilidad &harr; Control (estabilidad)</strong> y el horizontal <strong>Foco interno &harr; Foco externo</strong>. De ese 2x2 salen 4 tipos:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th></th><th>Foco interno</th><th>Foco externo</th></tr></thead>
          <tbody>
            <tr><td><strong>Flexibilidad</strong></td><td><strong>Clan:</strong> familia, colaboración, personas, mentoría</td><td><strong>Adhocrática:</strong> innovación, riesgo, creatividad, cambio</td></tr>
            <tr><td><strong>Control (estabilidad)</strong></td><td><strong>Jerárquica:</strong> procesos, reglas, orden, eficiencia interna</td><td><strong>Mercado:</strong> resultados, competir, metas, ganar al rival</td></tr>
          </tbody>
        </table></div>

        <h4>Fuerza de la cultura y subculturas</h4>
        <p>No es lo mismo el <strong>tipo</strong> de cultura (qué valores tiene: clan, mercado, etc.) que su <strong>fuerza o intensidad</strong> (cuánto se comparten esos valores entre los miembros, medida por Sathe &amp; Wiener).</p>
        <p>Una <strong>cultura fuerte</strong> alinea a las personas y da identidad y sentido de pertenencia, pero es un <strong>arma de doble filo</strong>: cuando el entorno cambia, esos mismos valores tan arraigados <strong>resisten el cambio</strong> y se vuelven rigidez. Además, dentro de la cultura dominante conviven <strong>subculturas</strong> (áreas, filiales o grupos con valores propios) que conviene reconocer e integrar hacia los objetivos comunes.</p>

        <h4>Estrategias para el cambio cultural</h4>
        <p>Transformar la cultura requiere proceso estructurado, liderazgo activo y participación de toda la organización; el Desarrollo Organizacional (DO) actúa como facilitador. Estrategias: liderazgo que modele los valores, comunicación constante, entrenamiento en los nuevos comportamientos y recompensas alineadas con esos valores.</p>
        <div class="guia-frase"><strong>Pauta &mdash; cultura que falla:</strong> analizar (no nombrar) los elementos que fallan y proponer acciones concretas y medibles. Ej.: liderazgo autoritario &rarr; coaching + 360&deg; ligada a bonos; ambiente tóxico &rarr; canales de denuncia confidenciales, comités de convivencia y encuestas de clima con planes de mejora; falta de propósito &rarr; involucrar a las personas en el rediseño de misión/visión.</div>

        <h4>Gestión del clima laboral</h4>
        <p>El clima es la <strong>percepción compartida</strong> del ambiente de trabajo. Componentes: físico (condiciones, seguridad), psicológico (relaciones, apoyo, equidad) y organizacional (políticas y procedimientos). Se mide con encuestas y se corrige con planes según resultados. El <strong>modelo de Likert</strong> define 4 sistemas de clima:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Sistema</th><th>Estilo</th><th>Participación</th></tr></thead>
          <tbody>
            <tr><td><strong>1 · Autoritario coercitivo</strong></td><td>Decisiones arriba, miedo</td><td>Nula</td></tr>
            <tr><td><strong>2 · Autoritario benevolente</strong></td><td>Paternalista</td><td>Delegación controlada</td></tr>
            <tr><td><strong>3 · Consultivo</strong></td><td>Se consulta antes de decidir</td><td>Media</td></tr>
            <tr><td><strong>4 · Participativo</strong></td><td>Confianza plena, decisiones compartidas</td><td>Alta (mejor clima)</td></tr>
          </tbody>
        </table></div>

        <div class="guia-frase"><strong>Cultura vs. clima:</strong> la cultura es profunda, estable y compartida (valores y supuestos), y cambiarla toma años; el clima es la percepción del ambiente en un momento dado, más cambiante y medible con encuestas. Mejorar el clima es más rápido que cambiar la cultura.</div>
      `
    }
  ]
};
