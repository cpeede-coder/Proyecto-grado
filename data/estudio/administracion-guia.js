// Guía de estudio ordenada — ADMINISTRACIÓN (material para LEER antes de las flashcards)
// ALINEADA AL TEMARIO OFICIAL: Unidad I La Organización, Unidad II Áreas Funcionales,
// Unidad III Proceso de Gestión (Planificación, Organización, Dirección, Control).
// Se sirve como HTML por unidad y se inyecta en #estudio-guia-contenido (contenido
// estático propio, sin entrada de usuario). Usa las clases .guia-* de css/styles.css.
// Nota: aquí SÍ se usan template literals (backticks) por ser un bloque HTML largo;
// la regla de "no backticks" aplica al banco de preguntas (data/materias/*.js).
//
// Alineación al temario (2026-07-15):
//   - NO se incluyen las escuelas/historia de la administración (Taylor, Fayol, Weber,
//     Hawthorne-Mayo): no están en el temario. Los autores solo se citan cuando
//     sostienen un punto del temario (Chandler en estructura, Blake & Mouton /
//     Lewin / Hersey-Blanchard en liderazgo, Maslow/McGregor/Herzberg/McClelland
//     en motivación, Mintzberg en roles).
//   - Se reforzó el Área de Finanzas con estructura y fuentes de financiamiento.
//   - Corrección: el punto ideal "9,9" es del GRID GERENCIAL de Blake & Mouton,
//     no de los estudios de Michigan. Corregido en la Unidad V.
window.ESTUDIO_GUIA = window.ESTUDIO_GUIA || {};
window.ESTUDIO_GUIA.administracion = {
  nombre: "Administración",
  intro: "Léela unidad por unidad. Cuando entiendas una unidad, pasa a las flashcards de esa unidad para fijarla. Los recuadros azules son definiciones para memorizar; los dorados, frases que suman en el examen. Recuerda: el examen es combinado ADM + Estrategia, y las pautas premian nombrar Y justificar con el caso.",
  secciones: [
    {
      unidad: "U1", titulo: "La Organización",
      html: `
        <div class="guia-def">⭐ <strong>Qué más se pregunta en Administración:</strong> los casos reales de examen piden identificar <strong>áreas funcionales</strong> clave de una empresa; analizar su <strong>estructura y departamentalización</strong> (funcional, geográfica, centralizada vs. descentralizada, ventajas y desventajas); diagnosticar el <strong>proceso de gestión</strong> (objetivos y <strong>metas SMART</strong>, organización, dirección, control); proponer <strong>indicadores/KPI</strong> de control; y elaborar programas de <strong>liderazgo y motivación</strong> con respaldo teórico (Maslow, Herzberg, McClelland, equidad, fijación de metas). Casi siempre exigen <strong>nombrar Y justificar con las pistas del caso</strong> (solo nombrar da puntaje parcial).</div>

        <p>El hilo de todo el ramo: la <strong>organización existe para crear valor</strong> y satisfacer a sus stakeholders; para ello se divide en áreas funcionales (Unidad II) que se coordinan, y el proceso de gestión (Unidad III) hace que todo funcione.</p>

        <h4>Administración, eficiencia y eficacia</h4>
        <div class="guia-def">Administrar es <strong>coordinar y supervisar</strong> las actividades de otros para que se realicen de forma <strong>eficiente</strong> (menor uso de recursos) y <strong>eficaz</strong> (logro de objetivos). Eficiencia + eficacia = alto desempeño.</div>
        <p>La <strong>productividad</strong> es el cociente producción / insumos: sube si produces más con lo mismo, lo mismo con menos, o más con menos. Es la medida concreta de la eficiencia.</p>

        <h4>Organización social: qué es una organización y una empresa</h4>
        <p>Una <strong>organización social</strong> es un acuerdo deliberado de personas para lograr un propósito que solas no alcanzarían. Sus tres características: propósito común, personas y estructura deliberada. Una <strong>empresa</strong> es la herramienta que crean las personas para coordinar acciones y <strong>crear valor</strong>, transformando insumos en productos y servicios. Para ello necesita recursos materiales, humanos y financieros.</p>

        <h4>Finalidad y satisfacción de los stakeholders</h4>
        <p>La finalidad es lograr metas coordinando recursos, con objetivos <strong>económicos, sociales y ecológicos</strong>. Los <strong>stakeholders</strong> son todos los grupos con interés en la organización; satisfacerlos es vital para el éxito de largo plazo.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Stakeholder</th><th>Qué busca</th></tr></thead>
          <tbody>
            <tr><td><strong>Accionistas / dueños</strong></td><td>Rentabilidad y valor de las acciones</td></tr>
            <tr><td><strong>Trabajadores</strong></td><td>Estabilidad, remuneración justa, buen ambiente</td></tr>
            <tr><td><strong>Clientes</strong></td><td>Productos y servicios de calidad</td></tr>
            <tr><td><strong>Proveedores</strong></td><td>Relaciones comerciales justas y sostenibles</td></tr>
            <tr><td><strong>Comunidad y Estado</strong></td><td>Aporte social positivo</td></tr>
            <tr><td><strong>Medio ambiente</strong></td><td>Uso responsable de los recursos naturales</td></tr>
          </tbody>
        </table></div>

        <h4>Roles y habilidades gerenciales</h4>
        <p>Hay tres <strong>niveles gerenciales</strong>, según qué tan cerca están de la estrategia o de la operación. Toda su labor se resume en <strong>cuatro funciones</strong>: planificar, organizar, dirigir y controlar.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Nivel</th><th>Quiénes</th><th>Qué hace</th></tr></thead>
          <tbody>
            <tr><td><strong>Alto</strong> (institucional / estratégico)</td><td>Gerente general, directorio, alta gerencia</td><td>Ve la empresa como un todo. Fija la <strong>estrategia</strong>, la misión y los objetivos de largo plazo; se relaciona con el entorno (mercado, gobierno, competencia).</td></tr>
            <tr><td><strong>Medio</strong> (intermedio / táctico)</td><td>Gerentes de área o de departamento (Marketing, Operaciones, Finanzas…)</td><td>Es el <strong>puente</strong> entre el nivel alto y la primera línea. <strong>Traduce</strong> la estrategia general en planes y metas concretas para su área, <strong>coordina</strong> equipos y recursos, y <strong>transmite información</strong> en ambos sentidos (baja las directrices de la cúpula y sube los resultados y problemas de la operación).</td></tr>
            <tr><td><strong>Primera línea</strong> (operativo)</td><td>Supervisores, jefes de turno, jefes de equipo</td><td>Dirige directamente a los trabajadores que ejecutan el trabajo. Se enfoca en el <strong>día a día</strong>: cumplir metas, resolver problemas operativos y controlar la producción/servicio.</td></tr>
          </tbody>
        </table></div>

        <h4>Los 10 roles de Mintzberg</h4>
        <p>Mintzberg observó lo que hacen los gerentes de verdad y lo resumió en <strong>diez roles</strong>. <strong>Ojo:</strong> NO son diez tipos de gerente ni tres grupos de gerentes. Son <strong>diez "sombreros" que usa un mismo gerente</strong> a lo largo de su día; según qué esté haciendo, se pone uno u otro. Se ordenan en <strong>tres categorías</strong> solo para agruparlos por el tipo de actividad. Sirven para diagnosticar el trabajo directivo de un caso.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Categoría de rol</th><th>Los roles (sombreros)</th></tr></thead>
          <tbody>
            <tr><td><strong>Interpersonales</strong> (relación con personas)</td><td>Representante (figura visible), Líder, Enlace</td></tr>
            <tr><td><strong>Informativos</strong> (manejo de información)</td><td>Monitor, Difusor, Portavoz</td></tr>
            <tr><td><strong>Decisorios</strong> (toma de decisiones)</td><td>Emprendedor, Gestor de conflictos (imprevistos), Asignador de recursos, Negociador</td></tr>
          </tbody>
        </table></div>
        <div class="guia-def"><strong>En una frase:</strong> los roles responden a "¿qué <em>hace</em> un gerente?" (sus conductas), no a "¿qué tipos de gerente hay?".</div>

        <h4>Las 3 habilidades gerenciales (Katz)</h4>
        <p>Esto es un modelo <strong>distinto</strong> al de Mintzberg (no los confundas): los roles son lo que el gerente <strong>hace</strong>; las habilidades son aquello en lo que necesita ser <strong>bueno</strong> para hacerlo. Katz define tres, y lo clave es que su <strong>peso cambia según el nivel gerencial</strong> (los mismos tres niveles de la tabla anterior).</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Habilidad</th><th>Qué es</th><th>Dónde pesa más</th></tr></thead>
          <tbody>
            <tr><td><strong>Técnicas</strong></td><td>Conocimiento de un campo específico (usar herramientas, métodos, procedimientos)</td><td>Primera línea (cerca de la producción)</td></tr>
            <tr><td><strong>Humanas</strong></td><td>Trabajar bien con y a través de las personas (comunicar, motivar, liderar)</td><td>Todos los niveles por igual</td></tr>
            <tr><td><strong>Conceptuales</strong></td><td>Ver la empresa como un todo, entender lo complejo y decidir estratégicamente</td><td>Nivel alto</td></tr>
          </tbody>
        </table></div>
        <div class="guia-def"><strong>La idea de fondo:</strong> mientras más subes en la jerarquía, menos necesitas las habilidades <strong>técnicas</strong> y más las <strong>conceptuales</strong>; las <strong>humanas</strong> importan igual en todos los niveles (siempre trabajas con personas).</div>

        <h4>Tipos de organizaciones</h4>
        <p>Sirven para "etiquetar" cualquier empresa de un caso: por <strong>estructura jerárquica</strong> (horizontal/plana vs. vertical/piramidal), por <strong>fines de lucro</strong> (con o sin), por <strong>toma de decisiones</strong> (centralizada vs. descentralizada), por <strong>configuración</strong> (Mintzberg) y por <strong>sector</strong> (pública, privada, mixta).</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "La empresa existe para crear valor." · "Eficiencia es hacer bien las cosas; eficacia es hacer las cosas correctas." · "Primero nombra el tipo de organización, luego justifica con el caso."</div>
      `
    },
    {
      unidad: "U2", titulo: "Áreas Funcionales",
      html: `
        <p>Un <strong>área funcional</strong> agrupa a quienes cumplen una misma función. Las cuatro clásicas —Comercial, Operaciones, Gestión de Personas y Finanzas— no operan aisladas: se coordinan para crear valor. Al final se suman las Nuevas Tendencias.</p>

        <h4>Área Comercial (Marketing y Ventas)</h4>
        <p>Detecta necesidades insatisfechas, crea el producto, lo pone a precio competitivo y lo comunica. Distingue <strong>necesidad</strong> (carencia básica), <strong>deseo</strong> (bien específico que la cubre) y <strong>demanda</strong> (deseo con capacidad de compra). Su herramienta es el <strong>Marketing Mix (4 P)</strong>.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>P</th><th>Qué define</th></tr></thead>
          <tbody>
            <tr><td><strong>Producto</strong></td><td>Atributos: diseño, envase, marca, calidad, garantía</td></tr>
            <tr><td><strong>Precio</strong></td><td>Según costos y calidad (descremado, penetración, premium, psicológico)</td></tr>
            <tr><td><strong>Plaza</strong></td><td>Distribución directa o indirecta; intensiva, selectiva o exclusiva</td></tr>
            <tr><td><strong>Promoción</strong></td><td>Publicidad; estrategias Push (empujar) y Pull (atraer)</td></tr>
          </tbody>
        </table></div>
        <p>El producto recorre un <strong>ciclo de vida</strong>: introducción → crecimiento → madurez → declive. La estrategia se apoya en <strong>segmentar</strong> (grupos homogéneos), elegir un <strong>mercado objetivo</strong> (indiferenciado, multisegmento o de nicho) y <strong>posicionar</strong> (lugar en la mente del consumidor).</p>

        <h4>Área de Producción y Operaciones</h4>
        <p>Transforma insumos en bienes y servicios. Planifica con cuatro decisiones: <strong>qué</strong> producir (lo define Comercial), <strong>cómo</strong> (artesanal, masivo o por proceso), <strong>cuánto</strong> (capacidad) y <strong>dónde</strong> (localización). Los servicios tienen cuatro rasgos: <strong>intangibilidad, inseparabilidad, heterogeneidad y carácter perecedero</strong>.</p>

        <h4>Calidad: ISO y Six Sigma</h4>
        <div class="guia-def"><strong>ISO 9001:</strong> norma internacional de gestión de la calidad; certifica que la empresa tiene <strong>procesos estandarizados y documentados</strong> (un cliente confía en el "sello ISO" sin auditar la fábrica).</div>
        <div class="guia-def"><strong>Six Sigma:</strong> metodología de <strong>reducción de defectos</strong> y variabilidad mediante el ciclo <strong>DMAIC</strong>: <strong>D</strong>efinir el problema, <strong>M</strong>edir el proceso, <strong>A</strong>nalizar las causas, mejorar (<strong>I</strong>mprove) e implementar, <strong>C</strong>ontrolar para sostener la mejora.</div>

        <h4>La Cadena de Valor de Porter (integra las áreas)</h4>
        <p>Ve la empresa como una serie de actividades que agregan valor, buscando el <strong>margen</strong>.</p>
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

        <h4>Área de Gestión de Personas (RRHH)</h4>
        <p>Gestiona al capital humano —fuente de <strong>ventaja competitiva</strong> difícil de imitar— a lo largo de un proceso: planeación de RH → reclutamiento (o recorte) → selección → inducción → capacitación → manejo del desempeño → compensación → desarrollo de carrera. El <strong>reclutamiento interno</strong> es más barato y rápido; el <strong>externo</strong> trae ideas nuevas pero es caro y lento. En la selección se evitan el error de rechazo (descartar a uno bueno) y el de aceptación (contratar a uno malo).</p>

        <h4>Área de Finanzas (y Contable)</h4>
        <p>Obtiene y usa eficientemente los recursos financieros. La <strong>estructura de financiamiento</strong> combina capital propio y deuda, con fuentes <strong>internas</strong> (reinversión de utilidades, emisión de acciones/bonos, nuevos socios) y <strong>externas</strong> (bancos, créditos, fondos de inversión). Estados básicos: <strong>Balance</strong> (foto: activos, pasivos, patrimonio), <strong>Estado de resultado</strong> (utilidad o pérdida del período), <strong>Flujo de caja</strong> (liquidez) y <strong>cambios en el patrimonio</strong>. Ratios: liquidez, endeudamiento y rentabilidad (ROA, ROE). Inversiones de largo plazo: <strong>VAN, TIR y Payback</strong>.</p>

        <h4>Nuevas tendencias e interrelación</h4>
        <p>Tres motores del siglo XXI: <strong>tecnología, globalización y espíritu emprendedor</strong> (más RSE y gestión del conocimiento). Y una regla para responder casos:</p>
        <div class="guia-def">Comercial dice QUÉ producir → Operaciones dice CÓMO/CUÁNTO/DÓNDE → Finanzas dice CON QUÉ recursos → RRHH pone a QUIÉN lo ejecuta. Todo cruzado por la Cadena de Valor.</div>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El capital humano bien gestionado es ventaja competitiva." · "Un desajuste en un área rompe la cadena de valor." · "Nombra el área Y explica su función concreta (no solo el nombre)."</div>
      `
    },
    {
      unidad: "U3", titulo: "Proceso de Gestión: Planificación",
      html: `
        <p>El proceso de gestión son las cuatro funciones en acción: <strong>Planificar → Organizar → Dirigir → Controlar</strong>. Es un ciclo: lo que se controla vuelve a alimentar la planificación. Empezamos por planificar.</p>

        <h4>El proceso de planificación</h4>
        <p>Es definir <strong>objetivos</strong>, establecer <strong>estrategias</strong> y desarrollar <strong>planes</strong>. Su propósito es <strong>dar dirección</strong>; reduce la incertidumbre, aporta eficiencia y minimiza el desperdicio. La planeación <strong>formal</strong> (escrita, comunicada, con plazos) aumenta la probabilidad de éxito.</p>
        <div class="guia-def">Secuencia mental de la planificación: <strong>Objetivos → Estrategias → Planes</strong>.</div>

        <h4>Pasos del proceso (Koontz)</h4>
        <ol>
          <li>Atención a las oportunidades (mercado, competencia, fortalezas y debilidades).</li>
          <li>Establecimiento de objetivos o metas.</li>
          <li>Consideración de las premisas (condiciones internas/externas).</li>
          <li>Identificación de alternativas.</li>
          <li>Comparación de alternativas frente a las metas.</li>
          <li>Elección de un curso de acción.</li>
          <li>Formulación de <strong>planes de apoyo</strong> (planes derivados que sostienen al principal; ej.: si el plan es lanzar un producto, los de apoyo son el de producción, marketing y contratación).</li>
          <li>Conversión de los planes en cifras (presupuestos).</li>
        </ol>

        <h4>Objetivos y cómo fijarlos</h4>
        <p>Los <strong>objetivos</strong> son resultados deseados, por escrito. Pueden ser <strong>financieros</strong> (desempeño interno) o <strong>estratégicos</strong> (frente a competidores). Los buenos son <strong>SMART</strong>: eSpecíficos, Medibles, Alcanzables, Relevantes y Temporales (con plazo).</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Método</th><th>Cómo fija objetivos</th><th>Ventaja / Riesgo</th></tr></thead>
          <tbody>
            <tr><td><strong>Tradicional (top-down)</strong></td><td>Se fijan arriba y bajan</td><td>Barato y rápido / pierde claridad al bajar</td></tr>
            <tr><td><strong>APO (bottom-up)</strong></td><td>Gerentes y empleados los fijan juntos</td><td>Más motivación / más lenta y burocrática</td></tr>
          </tbody>
        </table></div>

        <h4>Los tipos de planes</h4>
        <p>Esto no es un plan especial, sino <strong>4 formas de clasificar cualquier plan</strong> (no confundir con los "planes de apoyo" del paso 6). Un mismo plan se describe con los cuatro criterios a la vez.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Criterio</th><th>Opciones</th></tr></thead>
          <tbody>
            <tr><td><strong>Alcance</strong></td><td>Estratégicos (toda la organización) vs. Operacionales (áreas)</td></tr>
            <tr><td><strong>Marco de tiempo</strong></td><td>Largo plazo (más de 3 años) vs. Corto plazo (un año o menos)</td></tr>
            <tr><td><strong>Especificidad</strong></td><td>Específicos (detallados) vs. Direccionales (flexibles)</td></tr>
            <tr><td><strong>Frecuencia de uso</strong></td><td>Uso único vs. Permanentes</td></tr>
          </tbody>
        </table></div>
        <div class="guia-def"><strong>⚠️ No confundir por la palabra "estratégico":</strong> un OBJETIVO estratégico se opone a uno financiero (mirar afuera/competidores vs. desempeño interno); un PLAN estratégico se opone a uno operacional (toda la empresa vs. un área). Es el mismo adjetivo para dos clasificaciones distintas.</div>
        <h4>Relación entre los diferentes tipos de planes</h4>
        <p>Forman una <strong>cascada</strong>: los planes estratégicos guían a los tácticos (mediano plazo) y estos a los operativos (día a día). Todo alineado con los objetivos generales. Cada nivel <strong>deriva del superior y lo hace operable</strong>: si un plan operativo se desalinea del estratégico, se rompe la cascada y se desperdician recursos.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "La planeación formal aumenta la probabilidad de éxito." · "Un plan operativo mal alineado con el estratégico rompe la cascada." · "Un objetivo sin cifra ni plazo no es SMART."</div>
      `
    },
    {
      unidad: "U4", titulo: "Proceso de Gestión: Organización",
      html: `
        <p><strong>Organizar</strong> es distribuir y estructurar el trabajo: definir qué hacer, cómo y quién lo hará. Regla de oro:</p>
        <div class="guia-def">La <strong>estrategia antecede a la estructura</strong> (Estrategia → Estructura). Primero se decide adónde ir; luego se diseña la organización que lo permite (Chandler).</div>

        <h4>Estructura de actividad y autoridad</h4>
        <p>La <strong>estructura organizacional</strong> es la distribución formal de los puestos y se diseña con seis elementos: especialización del trabajo, departamentalización, cadena de mando, tramo de control, centralización/descentralización y formalización.</p>
        <ul>
          <li><strong>Especialización:</strong> dividir tareas; la sobre-especialización genera fatiga, estrés y rotación.</li>
          <li><strong>Cadena de mando:</strong> línea de autoridad; incluye autoridad (derecho a mandar), responsabilidad (obligación) y unidad de mando (un solo jefe por persona).</li>
          <li><strong>Tramo de control:</strong> cuántos empleados supervisa bien un gerente.</li>
          <li><strong>Formalización:</strong> grado en que reglas y procedimientos estandarizan el comportamiento.</li>
        </ul>

        <h4>Mecanicista vs. orgánica</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Rasgo</th><th>Mecanicista</th><th>Orgánica</th></tr></thead>
          <tbody>
            <tr><td>Especialización</td><td>Alta</td><td>Equipos interfuncionales</td></tr>
            <tr><td>Formalización</td><td>Mucha</td><td>Poca</td></tr>
            <tr><td>Tramo de control</td><td>Limitado</td><td>Amplio</td></tr>
            <tr><td>Decisiones</td><td>Centralizadas</td><td>Descentralizadas</td></tr>
            <tr><td>Típica de</td><td>Empresas grandes</td><td>Pequeñas / innovadoras</td></tr>
          </tbody>
        </table></div>
        <div class="guia-def"><strong>⚠️ No confundir:</strong> mecanicista vs. orgánica NO es un tipo de diseño, es el GRADO DE RIGIDEZ (rígida vs. flexible). Los diseños concretos (simple, funcional, divisional, matricial, red) se ubican dentro de ese continuo: lo tradicional tiende a mecanicista y lo contemporáneo a orgánico.</div>

        <h4>Diseños organizacionales</h4>
        <p><strong>Tradicionales:</strong> Simple (centralizada, emprendimientos), Funcional (por función) y Divisional (unidades semiautónomas bajo una matriz). <strong>Contemporáneos:</strong> De equipos, Matricial/de proyectos (dos jefes) y De red (externaliza y se concentra en lo que hace mejor).</p>

        <h4>Tipos de departamentalización</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Tipo</th><th>Ventaja</th><th>Desventaja</th></tr></thead>
          <tbody>
            <tr><td><strong>Funcional</strong> (la más usada)</td><td>Eficiencia al juntar especialistas</td><td>Mala comunicación entre áreas</td></tr>
            <tr><td><strong>Geográfica</strong></td><td>Atiende mejor lo regional</td><td>Aislamiento y duplicación</td></tr>
            <tr><td><strong>Por producto</strong></td><td>Foco cuando cada línea es distinta</td><td>Duplicación de recursos</td></tr>
            <tr><td><strong>Por cliente</strong></td><td>Especialistas por tipo de cliente</td><td>Duplicación y visión limitada</td></tr>
            <tr><td><strong>Por procesos</strong></td><td>Eficiencia en el flujo productivo</td><td>Solo sirve para ciertos productos</td></tr>
          </tbody>
        </table></div>
        <p>No confundas <strong>estructura</strong> (diseño general) con <strong>departamentalización</strong> (agrupación de puestos dentro de ella).</p>
        <div class="guia-def"><strong>⚠️ No confundir por la palabra "funcional":</strong> existe como DISEÑO organizacional (estructura funcional, junto a simple y divisional) y como tipo de DEPARTAMENTALIZACIÓN (funcional, junto a geográfica y por producto). Son planos distintos aunque se llamen igual.</div>

        <h4>Centralización y descentralización</h4>
        <p><strong>Centralización</strong>: las decisiones se concentran en la cúpula (propio de la estructura mecanicista; da control y uniformidad). <strong>Descentralización</strong>: decide quien está más cerca de la acción (orgánica; permite mejor adaptación local y decisiones más rápidas, pero exige gente capacitada). La mayoría de las empresas se ubica en un punto intermedio según su tamaño, entorno y estrategia.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "La estructura sigue a la estrategia." · "Identifica primero el tipo (Divisional, Funcional…), después justifica." · "Departamentalización no es lo mismo que estructura."</div>
      `
    },
    {
      unidad: "U5", titulo: "Proceso de Gestión: Dirección",
      html: `
        <p><strong>Dirigir</strong> es energizar, orientar y sostener el esfuerzo de las personas hacia una meta, provocando esa energía en los demás. Se apoya en tres pilares: <strong>liderazgo, motivación y comunicación</strong>.</p>

        <h4>Liderazgo y sus enfoques</h4>
        <p>El <strong>liderazgo</strong> es influir en las personas para que trabajen con entusiasmo hacia las metas. Los enfoques evolucionaron del líder que "nace" al que "se hace" y al que se adapta a la situación.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Enfoque</th><th>Idea central</th></tr></thead>
          <tbody>
            <tr><td><strong>Rasgos</strong></td><td>Ciertos rasgos distinguen al líder (confianza, iniciativa, inteligencia emocional)</td></tr>
            <tr><td><strong>Comportamiento — Iowa (Lewin)</strong></td><td>Estilos autocrático, democrático y liberal (laissez-faire)</td></tr>
            <tr><td><strong>Grid Gerencial (Blake &amp; Mouton)</strong></td><td>Interés por las personas vs. por la producción; ideal 9,9 (equipo)</td></tr>
            <tr><td><strong>Situacional (Hersey-Blanchard)</strong></td><td>Dirigir, Persuadir, Participar, Delegar, según la madurez del seguidor</td></tr>
            <tr><td><strong>Transformacional</strong></td><td>Inspira a trascender el interés propio; mentor y entrenador</td></tr>
            <tr><td><strong>Carismático</strong></td><td>Visión clara, apasionado, toma riesgos por ella</td></tr>
          </tbody>
        </table></div>
        <div class="guia-def"><strong>Liderazgo situacional (Hersey &amp; Blanchard):</strong> no existe un estilo único mejor; el líder <strong>ajusta su estilo según la madurez/preparación del seguidor</strong> (su capacidad y disposición para la tarea). Cruza dos ejes —<strong>conducta directiva</strong> (cuánto instruye) y <strong>conducta de apoyo</strong> (cuánto respalda emocionalmente)— y obtiene 4 estilos: <strong>Dirigir</strong> (madurez baja: mucha instrucción, poco apoyo), <strong>Persuadir/Entrenar</strong> (mucha instrucción y mucho apoyo), <strong>Participar/Apoyar</strong> (poca instrucción, mucho apoyo) y <strong>Delegar</strong> (madurez alta: poca instrucción y poco apoyo).</div>
        <div class="guia-def"><strong>Corrección importante:</strong> el punto ideal "9,9" es del <strong>Grid Gerencial de Blake &amp; Mouton</strong>, no de los estudios de Michigan. Michigan solo distingue líder orientado a las personas vs. orientado a la producción, sin coordenadas de rejilla.</div>

        <h4>Motivación</h4>
        <p>La <strong>motivación</strong> es el impulso que energiza, dirige y sostiene el esfuerzo. Teorías clave:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Teoría</th><th>Qué plantea</th></tr></thead>
          <tbody>
            <tr><td><strong>Maslow</strong></td><td>Pirámide: fisiológicas → seguridad → sociales → estima → autorrealización</td></tr>
            <tr><td><strong>X e Y (McGregor)</strong></td><td>X: persona perezosa (hay que dirigir); Y: disfruta y busca responsabilidad</td></tr>
            <tr><td><strong>Bifactorial (Herzberg)</strong></td><td>Motivación (logro, reconocimiento) satisface; higiene (sueldo, condiciones) evita insatisfacción</td></tr>
            <tr><td><strong>Tres necesidades (McClelland)</strong></td><td>Logro, poder y afiliación</td></tr>
            <tr><td><strong>Contemporáneas</strong></td><td>Metas difíciles pero alcanzables; equidad (trato percibido como justo)</td></tr>
          </tbody>
        </table></div>
        <p>Ojo con Herzberg: mejorar la <strong>higiene</strong> (sueldo, condiciones) solo quita insatisfacción; para <strong>motivar</strong> hay que actuar sobre logro, reconocimiento y crecimiento.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El líder influye; no solo manda." · "Liga el liderazgo con la estructura del caso, no en abstracto." · "La higiene no motiva; solo evita la insatisfacción."</div>
      `
    },
    {
      unidad: "U6", titulo: "Proceso de Gestión: Control",
      html: `
        <p><strong>Controlar</strong> es dar seguimiento a las actividades para garantizar que se logren conforme a lo planeado y corregir desviaciones. Cierra el ciclo administrativo y <strong>alimenta de vuelta la planificación</strong>: por eso el proceso de gestión es un ciclo.</p>

        <h4>Procesos y sistemas de control</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Etapa</th><th>En qué consiste</th></tr></thead>
          <tbody>
            <tr><td><strong>1. Medir</strong></td><td>Resultado real (observación, informes, muestras, encuestas)</td></tr>
            <tr><td><strong>2. Comparar</strong></td><td>Real vs. estándar fijado en la planeación</td></tr>
            <tr><td><strong>3. Corregir</strong></td><td>Ajustar el desempeño o revisar/cambiar el estándar (meta)</td></tr>
          </tbody>
        </table></div>

        <h4>Tipos de control según el momento</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Tipo</th><th>Cuándo</th><th>Para qué</th></tr></thead>
          <tbody>
            <tr><td><strong>Preventivo</strong></td><td>Antes del proceso</td><td>Verifica que todo esté listo; previene fallas</td></tr>
            <tr><td><strong>Concurrente</strong></td><td>Durante el proceso</td><td>Inspecciona en tiempo real; descarta lo defectuoso</td></tr>
            <tr><td><strong>De retroalimentación</strong></td><td>Después del proceso</td><td>Mide si se cumplió el objetivo y retroalimenta</td></tr>
          </tbody>
        </table></div>
        <p>Herramientas transversales: el <strong>benchmarking</strong> (comparar con las mejores prácticas de la industria) y el control por áreas (producción, comercial, financiera, RRHH).</p>

        <h4>Determinación de indicadores (KPI)</h4>
        <p>Un <strong>KPI</strong> (Key Performance Indicator) mide cuánto varió el objetivo SMART y si se cumplió. Tipos: <strong>financieros</strong> (ROI, ROS, costos), <strong>de proceso</strong> (eficiencia, tiempos de ciclo) y <strong>de satisfacción</strong> (cliente, empleado).</p>
        <div class="guia-def">Cómo se arma un KPI: <strong>Objetivo → Meta (con cifra y plazo) → Indicador (fórmula)</strong>. Ej.: "aumentar exportaciones" → "+15% en 2024 vs. 2023" → ventas extranjero (2024/2023) ≥ 1,15.</div>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El control cierra el ciclo y realimenta la planificación." · "Un buen indicador permite tomar decisiones y hacer seguimiento." · "Nombra el indicador Y explícalo; solo listarlo da puntaje parcial."</div>
      `
    }
  ]
};
