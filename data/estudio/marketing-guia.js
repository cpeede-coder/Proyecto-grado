// Guía de estudio ordenada — MARKETING (material para LEER antes de las flashcards)
// ALINEADA AL TEMARIO OFICIAL de Marketing (Marketing I, II y III) y VALIDADA contra
// fuentes estándar (Kotler & Armstrong, Kotler & Keller, Aaker, Rogers, Porter,
// Ansoff, BCG, Booms & Bitner).
//
// ALINEACIÓN CON EL TEMARIO (revisión 2026-07-15):
//   - NADA se eliminó por estar fuera del temario (todo el contenido mapeaba).
//   - REESTRUCTURA de 6 a 7 unidades; se separó el Marketing Mix en dos unidades
//     (Producto/Precio/Plaza y Promoción/Proceso/Personas) para dar espacio a la
//     PROMOCIÓN, antes subrepresentada.
//   - AGREGADO: promoción completa (principios de la comunicación, funciones de la
//     publicidad, recursos y estrategias publicitarias, roles y estereotipos, público
//     objetivo, medios y estrategia creativa, planificación de medios, marketing
//     cooperativo/afiliación); las 7P completas con PROCESO y PERSONAS/marketing
//     interno como secciones propias; sensibilidad de precios; gestión de categorías
//     ampliada (roles y pasos del proceso).
//   Unidades (ids/títulos) IDÉNTICAS a data/estudio/marketing.js.
// Se sirve como HTML por unidad y se inyecta en #estudio-guia-contenido (contenido
// estático propio, sin entrada de usuario). Usa las clases .guia-* de css/styles.css.
// Nota: aquí SÍ se usan template literals (backticks) por ser un bloque HTML largo;
// la regla de "no backticks" aplica al banco de preguntas (data/materias/*.js).
window.ESTUDIO_GUIA = window.ESTUDIO_GUIA || {};
window.ESTUDIO_GUIA.marketing = {
  nombre: "Marketing",
  intro: "Léela unidad por unidad. Cuando entiendas una unidad, pasa a las flashcards de esa unidad para fijarla. Los recuadros azules son definiciones para memorizar; los dorados, frases que suman en el examen.",
  secciones: [
    {
      unidad: "U1", titulo: "Conducta del Consumidor y Adopción de Innovaciones",
      html: `
        <div class="guia-def">⭐ <strong>Qué más se pregunta en Marketing:</strong> los exámenes reales usan casos de empresas (Cleveland Clinic, Concha y Toro, Vita Coco, Toys R Us) y piden aplicar, no definir. Los temas que más caen: <strong>segmentación</strong> con sus cuatro variables (geográfica, demográfica, psicográfica y conductual, dos atributos c/u); <strong>propuesta de valor</strong> y atributos diferenciadores; <strong>desarrollo de nuevos productos</strong> (etapas + acciones); <strong>comunicaciones integradas de marketing</strong> (herramienta + objetivo + ejemplo); <strong>customer journey</strong> y puntos de contacto (precompra/compra/postcompra); <strong>fidelización</strong> (objetivo concreto + indicador + mensaje + canales dirigidos, nunca medios masivos para un público acotado); <strong>ciclo de vida</strong> y estrategias de precio (valor vs. competencia); y la <strong>marca</strong> como activo y su posicionamiento.</div>

        <p>El marketing parte de una idea simple: <strong>entender al consumidor</strong> para satisfacer sus necesidades de forma rentable. Esta unidad cubre por qué compra la gente y cómo se adoptan los productos nuevos.</p>

        <h4>El propósito de entender la conducta del consumidor</h4>
        <p>La <strong>conducta del consumidor</strong> es cómo y por qué las personas deciden comprar y usar productos. Entenderla permite satisfacer mejor sus necesidades, diseñar campañas más efectivas y aumentar la lealtad.</p>
        <ul>
          <li><strong>Comportamiento</strong>: las acciones observables (qué compra y cómo usa).</li>
          <li><strong>Mentalidad</strong>: pensamientos, creencias y percepciones sobre marcas (qué piensa y siente).</li>
        </ul>
        <p>De ahí nacen las <strong>preferencias</strong> de <strong>producto</strong> (por qué elige uno sobre otro), <strong>canal</strong> (dónde prefiere comprar: tienda, online, app) y <strong>marca</strong> (a qué marcas es leal y por qué).</p>

        <h4>Necesidad, deseo y demanda</h4>
        <div class="guia-def">Necesidad = carencia básica. Deseo = la forma que toma esa necesidad según la cultura y la persona. Demanda = deseo respaldado por poder de compra. El marketing NO crea necesidades: detecta y orienta el deseo.</div>

        <h4>Psicología del consumidor</h4>
        <p>Sobre esa base actúan los factores de la <strong>psicología del consumidor</strong>: <strong>necesidades</strong>, <strong>persuasión</strong> (cómo la empresa influye), <strong>emociones</strong> (sentimientos momentáneos que evoca el producto), <strong>sentimientos</strong> (estados más duraderos, como confianza y lealtad), <strong>adopción</strong> (empezar a usar algo nuevo) y <strong>acciones</strong> (comprar, recomendar o abandonar).</p>

        <h4>Adopción de innovaciones (Everett Rogers)</h4>
        <p>No todos adoptan un producto nuevo al mismo ritmo. Rogers clasifica a los consumidores en <strong>cinco categorías de adoptantes</strong> que forman una curva normal (campana):</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Categoría</th><th>%</th><th>Perfil</th></tr></thead>
          <tbody>
            <tr><td><strong>Innovadores</strong></td><td>2,5%</td><td>Aventureros, toleran riesgo, primeros en probar</td></tr>
            <tr><td><strong>Primeros adoptantes</strong></td><td>13,5%</td><td>Líderes de opinión respetados; difunden la innovación</td></tr>
            <tr><td><strong>Mayoría temprana</strong></td><td>34%</td><td>Deliberativos; adoptan justo antes del promedio</td></tr>
            <tr><td><strong>Mayoría tardía</strong></td><td>34%</td><td>Escépticos; adoptan por presión social</td></tr>
            <tr><td><strong>Rezagados</strong></td><td>16%</td><td>Tradicionales, reacios al cambio</td></tr>
          </tbody>
        </table></div>
        <p>Los <strong>primeros adoptantes</strong> son estratégicos: actúan como líderes de opinión que legitiman el producto ante la gran masa (las dos mayorías, 68%).</p>

        <h4>Proceso de adopción (a nivel individual)</h4>
        <p>Cada persona pasa por cinco etapas: <strong>Conocimiento → Interés → Evaluación → Prueba → Adopción</strong>. Del enterarse (con poca información) hasta el uso pleno y regular, ensayando primero a pequeña escala.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El marketing detecta y satisface necesidades de forma rentable." · "Los early adopters son líderes de opinión que legitiman la innovación." · "La adopción sigue una curva normal."</div>
      `
    },
    {
      unidad: "U2", titulo: "Segmentación y Mercado Objetivo",
      html: `
        <p>Ninguna empresa satisface a todos por igual. La estrategia de marketing arranca con el modelo <strong>STP</strong>: <strong>S</strong>egmentar, seleccionar el mercado objetivo (<strong>T</strong>argeting) y <strong>P</strong>osicionar.</p>

        <h4>⭐ El modelo STP (Segmentación &ndash; Targeting &ndash; Posicionamiento)</h4>
        <p>El <strong>STP</strong> es el esqueleto de toda la estrategia de marketing. Marca el orden en que se decide a quién y cómo servir: <strong>S</strong>egmentar (dividir el mercado en grupos, en esta unidad) &rarr; <strong>T</strong>argeting (elegir a qué segmento apuntar, también en esta unidad) &rarr; <strong>P</strong>osicionar (ocupar un lugar distintivo y valorado en la mente del cliente, que se trabaja en U4). Las tres grandes secciones del curso NO son temas sueltos: son los tres pasos del STP, en ese orden.</p>
        <div class="guia-def">STP = primero se DIVIDE el mercado (Segmentación), luego se ELIGE a quién servir (Targeting), y por último se POSICIONA la oferta en su mente (Posicionamiento).</div>

        <h4>Propósito de la segmentación</h4>
        <p>La <strong>segmentación</strong> divide el mercado en grupos más pequeños y homogéneos con necesidades o comportamientos similares. Propósito: entender mejor al cliente, optimizar recursos, subir la satisfacción y ganar ventaja competitiva.</p>

        <h4>⭐ Bases de segmentación</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Base</th><th>Variables</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Geográfica</strong></td><td>Ubicación, clima, región, tamaño de ciudad</td><td>Urbano vs. rural</td></tr>
            <tr><td><strong>Demográfica</strong></td><td>Edad, género, ingresos, educación, estado civil</td><td>Adultos jóvenes de ingreso medio</td></tr>
            <tr><td><strong>Psicográfica</strong></td><td>Estilo de vida, personalidad, valores, intereses</td><td>Consumidor con conciencia ecológica</td></tr>
            <tr><td><strong>Conductual</strong></td><td>Uso, beneficios buscados, lealtad, ocasión</td><td>Busca hidratación; cliente leal</td></tr>
          </tbody>
        </table></div>
        <p>La <strong>psicográfica</strong> agrupa por cómo ES la persona; la <strong>conductual</strong> por cómo ACTÚA frente al producto (suele ser la más útil porque se liga directo a la compra).</p>

        <h4>Requisitos de un buen segmento (Kotler)</h4>
        <p>Un segmento sirve si es <strong>Medible</strong>, <strong>Sustancial</strong> (grande y rentable), <strong>Accesible</strong> (se le puede alcanzar), <strong>Diferenciable</strong> (responde distinto) y <strong>Accionable</strong> (se pueden diseñar estrategias para él).</p>

        <h4>Proceso de segmentación</h4>
        <ol>
          <li>Identificar las bases de segmentación.</li>
          <li>Desarrollar perfiles de cada segmento.</li>
          <li>Evaluar el atractivo (tamaño, crecimiento, rentabilidad, accesibilidad, compatibilidad).</li>
          <li>Seleccionar el mercado objetivo (<strong>targeting</strong>).</li>
          <li>Diseñar la mezcla de marketing para cada segmento elegido.</li>
        </ol>

        <h4>⭐ Targeting: estrategias de cobertura de mercado</h4>
        <p>Elegidos los segmentos atractivos, hay que decidir <strong>a cuántos y cómo apuntar</strong>. Existen tres estrategias de cobertura:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Estrategia</th><th>En qué consiste</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Indiferenciado (masivo)</strong></td><td>Un mismo mix de marketing para todo el mercado; ignora las diferencias. Máximo alcance y bajo costo, pero poco ajustado.</td><td>Sal de mesa; azúcar</td></tr>
            <tr><td><strong>Diferenciado</strong></td><td>Un mix distinto para cada segmento elegido. Más ventas y satisfacción, pero mayor costo y complejidad.</td><td>Coca-Cola (regular, zero, light)</td></tr>
            <tr><td><strong>Concentrado / de nicho</strong></td><td>Todo el esfuerzo en un solo segmento. Ideal para empresas pequeñas o marcas de lujo; alto foco, pero depende de un solo mercado.</td><td>Ferrari; una marca vegana</td></tr>
          </tbody>
        </table></div>

        <div class="guia-frase"><strong>Frases de examen:</strong> "No se puede satisfacer a todos por igual." · "Primero segmentar, luego elegir, después posicionar." · "Un segmento debe ser medible, accesible y rentable."</div>
      `
    },
    {
      unidad: "U3", titulo: "Planificación Estratégica de Marketing",
      html: `
        <p>Elegido el mercado, hay que decidir <strong>cómo competir</strong> y <strong>hacia dónde crecer</strong>. La <strong>planificación estratégica de marketing</strong> define la estrategia de largo plazo: analiza el entorno, fija objetivos y crea planes de acción sobre las 4P. Esta unidad reúne sus grandes herramientas.</p>

        <h4>Estrategias genéricas de Porter</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Estrategia</th><th>En qué consiste</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Liderazgo en costos</strong></td><td>Ser el productor más barato de la industria</td><td>Walmart</td></tr>
            <tr><td><strong>Diferenciación</strong></td><td>Oferta única y valorada; permite precio premium</td><td>Apple</td></tr>
            <tr><td><strong>Enfoque</strong></td><td>Especializarse en un segmento específico</td><td>Rolex</td></tr>
          </tbody>
        </table></div>

        <h4>Estrategias competitivas de mercado (Kotler)</h4>
        <p>Según la cuota que ocupa, la empresa juega un rol distinto:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Rol</th><th>Estrategia</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Líder</strong></td><td>Mayor cuota; defiende y marca la pauta</td><td>Coca-Cola</td></tr>
            <tr><td><strong>Retador</strong></td><td>Ataca al líder con innovación o precios</td><td>Pepsi</td></tr>
            <tr><td><strong>Seguidor</strong></td><td>Imita o mejora ligeramente al líder</td><td>LG</td></tr>
            <tr><td><strong>Nicho</strong></td><td>Se especializa en un segmento pequeño</td><td>Tesla (inicios)</td></tr>
          </tbody>
        </table></div>

        <h4>Matriz de Ansoff (crecimiento)</h4>
        <p>Cruza <strong>productos</strong> (actuales/nuevos) con <strong>mercados</strong> (actuales/nuevos):</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th></th><th>Mercado actual</th><th>Mercado nuevo</th></tr></thead>
          <tbody>
            <tr><td><strong>Producto actual</strong></td><td>Penetración de mercado</td><td>Desarrollo de mercado</td></tr>
            <tr><td><strong>Producto nuevo</strong></td><td>Desarrollo de producto</td><td>Diversificación</td></tr>
          </tbody>
        </table></div>
        <p>La <strong>diversificación</strong> (producto nuevo en mercado nuevo) es la de mayor riesgo.</p>

        <h4>Matriz BCG (cartera de productos)</h4>
        <p>Cruza <strong>participación de mercado</strong> con <strong>crecimiento del mercado</strong> para asignar recursos:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th></th><th>Alta cuota</th><th>Baja cuota</th></tr></thead>
          <tbody>
            <tr><td><strong>Alto crecimiento</strong></td><td>Estrella (invertir)</td><td>Interrogante (decidir)</td></tr>
            <tr><td><strong>Bajo crecimiento</strong></td><td>Vaca lechera (ordeñar)</td><td>Perro (retirar)</td></tr>
          </tbody>
        </table></div>
        <p>Las <strong>vacas lecheras</strong> generan la caja que financia a estrellas e interrogantes.</p>

        <h4>Matriz GE / McKinsey</h4>
        <p>Versión más rica (3x3) que evalúa unidades de negocio según <strong>atractivo del mercado</strong> y <strong>fortaleza competitiva</strong>, con tres zonas: <strong>invertir y crecer</strong>, <strong>seleccionar</strong> y <strong>desinvertir</strong>.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Costos, diferenciación o enfoque: no quedar atrapado en el medio." · "La BCG mide cuota × crecimiento, no rentabilidad directa." · "Diversificar es crecer con el mayor riesgo."</div>
      `
    },
    {
      unidad: "U4", titulo: "Marca, Posicionamiento y Propuesta de Valor",
      html: `
        <p>La <strong>marca</strong> es el activo intangible más valioso del marketing: vive en la mente del consumidor y puede justificar precios más altos y lealtad.</p>

        <h4>⭐ Marca, identidad y equidad</h4>
        <p>Una <strong>marca</strong> es más que un nombre o logo: es la percepción general y el conjunto de asociaciones que el consumidor tiene de la empresa. La <strong>identidad de marca</strong> es lo que la empresa PROYECTA (nombre, logo, colores, tipografía, eslogan, tono); la <strong>imagen</strong> es lo que el consumidor percibe.</p>
        <div class="guia-def">Equidad de marca (brand equity, modelo de Aaker) = valor adicional que la marca aporta al producto. Componentes: reconocimiento, asociaciones, lealtad, calidad percibida y otros activos (patentes, marcas registradas).</div>
        <p>La <strong>gestión de marca (branding)</strong> crea, mantiene, mejora y protege esa identidad y equidad mediante desarrollo, posicionamiento, comunicación y evaluación continua.</p>

        <h4>⭐ Posicionamiento de marca</h4>
        <p>Es diseñar la oferta y la imagen para ocupar un lugar <strong>distintivo y valorado</strong> en la mente del público objetivo. No es ser mejor en todo, sino ocupar un lugar claro y diferente. Sus componentes:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Componente</th><th>Pregunta que responde</th></tr></thead>
          <tbody>
            <tr><td><strong>Público objetivo</strong></td><td>¿A quién nos dirigimos?</td></tr>
            <tr><td><strong>Análisis de competencia</strong></td><td>¿Cómo se posicionan los rivales?</td></tr>
            <tr><td><strong>Propuesta de valor única (UVP)</strong></td><td>¿Por qué elegirnos a nosotros?</td></tr>
            <tr><td><strong>Beneficios funcionales y emocionales</strong></td><td>¿Qué gana el cliente, racional y emocionalmente?</td></tr>
            <tr><td><strong>Estrategia de comunicación</strong></td><td>¿Cómo lo reforzamos en cada contacto?</td></tr>
          </tbody>
        </table></div>
        <p>Se resume en una <strong>declaración de posicionamiento</strong>: "Para [público] que [necesidad], [marca] ofrece [beneficio] a diferencia de [competencia]" (ej. Volvo = seguridad). Los <strong>beneficios funcionales</strong> son tangibles (qué hace el producto); los <strong>emocionales</strong>, intangibles (Dove promueve la autoestima, no solo jabón).</p>
        <div class="guia-def"><strong>⚠️ No confundir:</strong> la cobertura de mercado con el posicionamiento: la cobertura (targeting: indiferenciado / diferenciado / concentrado) decide a CUÁNTOS segmentos apuntar; el posicionamiento decide QUÉ LUGAR ocupar en la mente del cliente. Incluso un nicho concentrado debe decidir cómo se posiciona.</div>

        <h4>⭐ Propuesta de valor</h4>
        <p>Declaración clara de los <strong>beneficios únicos</strong> que el producto ofrece y cómo resuelve el problema del cliente mejor que las alternativas. Componentes: beneficio principal, resolución del problema y diferenciación. Es una PROMESA que la empresa cumple y el cliente percibe como valiosa. Un buen posicionamiento diferencia, conecta emocionalmente, da consistencia y crea valor perceptual que justifica precios más altos.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "La marca vive en la mente del consumidor." · "Identidad es lo que la marca emite; imagen, lo que el cliente percibe." · "Posicionar es ser distinto, no solo mejor."</div>
      `
    },
    {
      unidad: "U5", titulo: "Marketing Mix: Producto, Precio y Plaza",
      html: `
        <h4>Concepto de marketing mix</h4>
        <p>El <strong>marketing mix</strong> es la caja de herramientas TÁCTICA que ejecuta la estrategia. Son las <strong>4P</strong>: Producto, Precio, Plaza y Promoción (ampliadas a <strong>7P</strong> en servicios). Esta unidad cubre las tres primeras; la Promoción y las P de servicios van en la unidad siguiente.</p>

        <h4>⭐ Producto</h4>
        <p>Un <strong>producto</strong> es un bien tangible; un <strong>servicio</strong>, un beneficio intangible. Todo producto tiene tres niveles:</p>
        <div class="guia-def">Producto básico o central (la necesidad de fondo, ej. transporte) → Producto real (características tangibles: diseño, marca, calidad) → Producto aumentado (extras: garantía, postventa, financiamiento).</div>
        <p>La <strong>planificación y desarrollo de nuevos productos</strong> sigue: generación de ideas → filtrado → desarrollo/prueba de concepto → estrategia de marketing → análisis de negocio → desarrollo → prueba de mercado → comercialización, más la gestión posterior del ciclo de vida. Una <strong>línea</strong> es un grupo de productos relacionados; la <strong>mezcla</strong> (cartera) es el conjunto de todas las líneas. La <strong>marca</strong> influye en la percepción del producto (relación producto-marca).</p>
        <p><strong>Ciclo de vida del producto (CVP):</strong> Introducción → Crecimiento → Madurez → Declive. Cada etapa exige distinta estrategia (la "estrategia de adopción del mercado"):</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Etapa</th><th>Estrategia clave</th></tr></thead>
          <tbody>
            <tr><td><strong>Introducción</strong></td><td>Crear conciencia; penetración o descremado</td></tr>
            <tr><td><strong>Crecimiento</strong></td><td>Ampliar distribución y mejorar el producto</td></tr>
            <tr><td><strong>Madurez</strong></td><td>Diferenciar, fidelizar y segmentar</td></tr>
            <tr><td><strong>Declive</strong></td><td>Reducir costos, cosechar (harvesting), nichos o eliminar</td></tr>
          </tbody>
        </table></div>

        <h4>⭐ Precio</h4>
        <p>Es la única P que genera <strong>ingresos</strong>. Depende de costos, demanda (elasticidad), competencia, objetivos de marketing y factores externos. La <strong>sensibilidad de precios</strong> mide cuánto reacciona la demanda ante cambios de precio: los productos de lujo suelen tener baja sensibilidad (se paga por el prestigio). Métodos y estrategias:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Enfoque</th><th>Lógica</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Basado en costos</strong></td><td>Costo más un margen</td><td>Mueble: costo + 20%</td></tr>
            <tr><td><strong>Basado en el valor</strong></td><td>Según la percepción del cliente</td><td>Perfume premium</td></tr>
            <tr><td><strong>Basado en competencia</strong></td><td>Alinearse a los rivales</td><td>Nuevo proveedor de internet</td></tr>
            <tr><td><strong>Penetración</strong></td><td>Precio bajo para ganar cuota rápido</td><td>Cereal nuevo barato</td></tr>
            <tr><td><strong>Descremado</strong></td><td>Precio alto inicial que baja por etapas</td><td>Lanzamiento de smartphone</td></tr>
          </tbody>
        </table></div>
        <div class="guia-def"><strong>⚠️ No confundir:</strong> penetración con descremado: penetración = precio BAJO inicial para ganar volumen y cuota rápido (sirve cuando hay competencia o clientes sensibles al precio); descremado (skimming) = precio ALTO inicial para captar margen de quienes pagan más (sirve en lanzamientos pioneros sin referencia de precio) y luego se baja por etapas.</div>

        <h4>Plaza (distribución)</h4>
        <p>Rutas del fabricante al consumidor. <strong>Directo</strong> (sin intermediarios) o <strong>indirecto</strong> (mayoristas, minoristas, agentes/brokers, que facilitan pero no toman posesión). El enfoque <strong>omnicanal</strong> integra físico, online y app en una experiencia coherente; el <strong>e-commerce</strong> vende por plataformas digitales. Estrategias de intensidad: <strong>intensiva</strong> (máximos puntos, ej. snacks), <strong>selectiva</strong> (limitada, ej. electrónica de gama) y <strong>exclusiva</strong> (uno o pocos, ej. lujo).</p>
        <p>En el canal actúan dos disciplinas: el <strong>trade marketing</strong> (estrategias dirigidas a los intermediarios para impulsar compra y distribución) y el <strong>merchandising</strong> (técnicas en el punto de venta: exhibiciones, ubicación, promociones).</p>

        <h4>Gestión de categorías</h4>
        <p>La <strong>gestión de categorías</strong> es un proceso colaborativo fabricante-minorista que trata cada categoría como una unidad de negocio. <strong>Principios, componentes y beneficios:</strong> se maximiza el valor de toda la categoría (no de una sola marca), integrando surtido, precio, promoción y espacio para subir ventas y rentabilidad y mejorar la experiencia de compra. Define <strong>roles de categoría</strong> (generadora de tráfico, de ingresos, de imagen o de conveniencia) y sigue los <strong>pasos del proceso</strong>: definir la categoría → asignar su rol → evaluar (análisis) → fijar objetivos y <strong>estrategias</strong> → definir las <strong>ejecuciones tácticas</strong> (surtido, precio, promoción, ubicación) → implementar y revisar.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El precio es la única P que genera ingresos." · "Cada etapa del ciclo de vida exige distinta mezcla de marketing." · "Trade marketing mira al canal; merchandising, a la góndola."</div>
      `
    },
    {
      unidad: "U6", titulo: "Promoción, Proceso y Personas (7P)",
      html: `
        <p>La <strong>promoción</strong> es la P de la comunicación, y en servicios se suman las P de <strong>Proceso</strong>, <strong>Personas</strong> y <strong>Evidencia física</strong>. Aquí van los temas que más suelen preguntarse y que conviene dominar completos.</p>

        <h4>⭐ Promoción: rol y mezcla de comunicación</h4>
        <p>La promoción reúne las actividades que <strong>informan, persuaden y recuerdan</strong> al consumidor. La <strong>mezcla de comunicación</strong> combina varias herramientas:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Herramienta</th><th>Qué es</th></tr></thead>
          <tbody>
            <tr><td><strong>Publicidad</strong></td><td>Comunicación pagada en medios masivos y digitales</td></tr>
            <tr><td><strong>Promoción de ventas</strong></td><td>Incentivos de corto plazo: descuentos, cupones, concursos</td></tr>
            <tr><td><strong>Venta personal</strong></td><td>Contacto directo vendedor-cliente</td></tr>
            <tr><td><strong>Relaciones públicas</strong></td><td>Gestión de imagen: prensa, eventos</td></tr>
            <tr><td><strong>Marketing directo</strong></td><td>Contacto directo para respuesta inmediata (email, telemarketing)</td></tr>
            <tr><td><strong>Marketing cooperativo / de afiliación</strong></td><td>Promoción conjunta entre empresas; afiliados que cobran comisión por venta</td></tr>
          </tbody>
        </table></div>
        <p>Para <strong>determinar la mezcla promocional</strong> se fijan primero los <strong>objetivos</strong> (más ventas, mejor imagen) y luego se eligen las herramientas más efectivas. Toda comunicación se apoya en tres <strong>principios</strong>: <strong>claridad</strong>, <strong>consistencia</strong> (mismo mensaje en todos los canales) y <strong>relevancia</strong> para el público.</p>
        <div class="guia-def"><strong>⚠️ No confundir:</strong> "promoción" (toda la P de comunicación) no es lo mismo que "promoción de ventas" (una sola herramienta: cupones y descuentos de corto plazo). Y la publicidad es PAGADA en medios, mientras las RR.PP. buscan reputación SIN pago directo (prensa, eventos).</div>

        <h4>⭐ Comunicaciones Integradas de Marketing (IMC)</h4>
        <p>Las <strong>Comunicaciones Integradas de Marketing (IMC)</strong> son la coordinación de TODAS las herramientas de la mezcla promocional &mdash;publicidad, promoción de ventas, relaciones públicas, venta personal y marketing directo/digital&mdash; bajo un <strong>mensaje único y coherente</strong> en todos los puntos de contacto. Justamente los tres principios de claridad, consistencia y relevancia son los que hacen que la marca "hable con una sola voz": el cliente recibe la misma promesa vea un anuncio, entre a la web o hable con un vendedor.</p>
        <div class="guia-def">IMC = integrar todas las herramientas de comunicación bajo un mismo mensaje, para que la marca se perciba coherente en cada contacto (no mensajes sueltos y contradictorios por canal).</div>
        <div class="guia-frase"><strong>Fórmula de examen (piden "tres estrategias de IMC"):</strong> responde cada una con <strong>herramienta + objetivo + ejemplo concreto</strong>. Ej.: (1) <em>Publicidad</em> en redes &rarr; dar a conocer el lanzamiento &rarr; video en Instagram con el eslogan; (2) <em>Promoción de ventas</em> &rarr; acelerar la primera compra &rarr; cupón de 20% por lanzamiento; (3) <em>Venta personal / marketing directo</em> &rarr; fidelizar &rarr; email personalizado post-compra al cliente. Las tres deben repetir el MISMO mensaje central.</div>

        <h4>Publicidad, medios y estrategia creativa (planificación de medios)</h4>
        <p>Las <strong>funciones de la publicidad</strong> son <strong>informar</strong>, <strong>persuadir</strong> y <strong>recordar</strong>. Para lograrlas se usan:</p>
        <ul>
          <li><strong>Recursos publicitarios</strong>: imágenes, texto, música, celebridades.</li>
          <li><strong>Estrategias publicitarias</strong>: enfoque emocional, racional, de miedo, humorístico, testimonial.</li>
          <li><strong>Roles y estereotipos</strong>: representaciones de personas (roles) y generalizaciones simplificadas de grupos (estereotipos, ej. de género) que a veces se usan en los anuncios.</li>
        </ul>
        <p>El <strong>público objetivo</strong> es el segmento específico al que se dirige la campaña (ej. jóvenes de 18-25 para una bebida energética). La <strong>planificación de medios</strong> elige los canales (TV, radio, prensa, internet, redes) según público y presupuesto, y la <strong>estrategia creativa</strong> define cómo se cuenta el mensaje (ej. storytelling para conectar emocionalmente).</p>

        <h4>Proceso (7P)</h4>
        <p>El <strong>proceso</strong> es el conjunto de actividades para entregar el servicio: el flujo desde la primera interacción hasta la postventa. Procesos eficientes mejoran la satisfacción, la calidad y la <strong>conexión entre empresa y cliente</strong> (ej. un check-in de hotel rápido y sin fricción).</p>

        <h4>Personas y marketing interno (7P)</h4>
        <p>Las <strong>personas</strong> que prestan el servicio son parte del producto. Importa su <strong>perfil</strong>, la <strong>cultura organizacional</strong> y el <strong>ambiente de trabajo</strong>. El <strong>marketing interno</strong> trata a los empleados como clientes internos: los motiva y capacita (reconocimiento, recompensas, formación) para que entreguen un mejor servicio.</p>

        <h4>Evidencia física (7P)</h4>
        <p>Los <strong>elementos tangibles</strong> que el cliente ve, toca y experimenta (ambiente físico, apariencia del personal, materiales, empaque, documentación) dan confianza y credibilidad, diferencian la marca y suben la percepción de valor. Como el servicio no se ve, lo tangible "prueba" su calidad.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "La promoción informa, persuade y recuerda." · "Primero el objetivo, después el mix promocional." · "El marketing interno precede al externo: empleado motivado, mejor servicio."</div>
      `
    },
    {
      unidad: "U7", titulo: "Experiencia del Cliente, Fidelización y Métricas",
      html: `
        <p>El marketing no termina en la venta. Esta unidad cubre cómo cuidar la <strong>experiencia</strong>, retener y fidelizar clientes, y <strong>medir</strong> los resultados.</p>

        <h4>⭐ Experiencia y viaje del cliente</h4>
        <p>La <strong>gestión de la experiencia del cliente (CX)</strong> planifica cada interacción con la marca para que sea positiva y coherente en todos los puntos de contacto. El <strong>viaje del cliente</strong> (customer journey) tiene cinco etapas:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Etapa</th><th>Qué ocurre</th></tr></thead>
          <tbody>
            <tr><td><strong>Conocimiento</strong></td><td>Se entera de la marca</td></tr>
            <tr><td><strong>Consideración</strong></td><td>Investiga y compara opciones</td></tr>
            <tr><td><strong>Compra</strong></td><td>Decide y adquiere</td></tr>
            <tr><td><strong>Servicio / postventa</strong></td><td>Usa el producto y recibe soporte</td></tr>
            <tr><td><strong>Fidelización</strong></td><td>Repite y recomienda</td></tr>
          </tbody>
        </table></div>
        <p>El <strong>mapeo</strong> del viaje visualiza estas interacciones para detectar oportunidades de mejora y puntos de dolor.</p>

        <h4>⭐ Puntos de contacto: precompra, compra y postcompra</h4>
        <p>Un <strong>punto de contacto (touchpoint)</strong> es cada momento en que el cliente interactúa con la marca. Las cinco etapas del viaje se agrupan en <strong>tres fases</strong>, y el examen suele pedir justamente los touchpoints ordenados en ellas:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Fase</th><th>Etapas del viaje</th><th>Puntos de contacto (ejemplos)</th></tr></thead>
          <tbody>
            <tr><td><strong>Precompra</strong></td><td>Conocimiento y consideración</td><td>Anuncio, sitio web, redes sociales, reseñas y recomendaciones</td></tr>
            <tr><td><strong>Compra</strong></td><td>Compra</td><td>Tienda física, checkout del e-commerce, atención del vendedor</td></tr>
            <tr><td><strong>Postcompra</strong></td><td>Servicio/postventa y fidelización</td><td>Soporte, email de seguimiento, programa de fidelización</td></tr>
          </tbody>
        </table></div>
        <p>La empresa debe cuidar la coherencia en las tres fases: un buen anuncio (precompra) no sirve si el checkout falla (compra) o si nadie responde el reclamo (postcompra).</p>

        <h4>⭐ Retención, recuperación y fidelización</h4>
        <div class="guia-def">Retención = mantener al cliente actual. Recuperación = reconquistar al insatisfecho o perdido. Fidelización = convertirlo en defensor leal que compra y recomienda.</div>
        <ul>
          <li><strong>Retención</strong>: programas de fidelidad, comunicación personalizada, mejora continua del producto.</li>
          <li><strong>Recuperación</strong>: atención proactiva, compensaciones, encuestas de satisfacción.</li>
          <li><strong>Fidelización</strong>: recompensas por referidos, contenido exclusivo, eventos para clientes leales.</li>
        </ul>
        <p>Retener cuesta mucho menos que captar un cliente nuevo, y una buena recuperación puede dejar al cliente incluso más leal que antes de la falla.</p>

        <h4>⭐ Medición: productividad y métricas de marketing</h4>
        <p>"Lo que no se mide, no se puede mejorar." La <strong>medición de productividad</strong> evalúa la eficacia respecto a lo invertido (ROI) y permite optimizar recursos y decidir con datos. Indicadores clave:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Métrica</th><th>Qué mide</th></tr></thead>
          <tbody>
            <tr><td><strong>ROI</strong></td><td>Retorno sobre la inversión de marketing</td></tr>
            <tr><td><strong>CPA</strong></td><td>Costo de adquirir un cliente nuevo</td></tr>
            <tr><td><strong>CLV</strong></td><td>Valor total del cliente en toda su relación</td></tr>
            <tr><td><strong>Tasa de conversión</strong></td><td>% de leads que realizan la acción deseada</td></tr>
            <tr><td><strong>Retención / NPS</strong></td><td>Cuántos siguen comprando; disposición a recomendar</td></tr>
          </tbody>
        </table></div>
        <p>Las métricas se agrupan en tipos: de <strong>alcance</strong> y visibilidad, de <strong>compromiso</strong>, de generación de <strong>leads</strong>, de <strong>ventas/conversión</strong>, de <strong>satisfacción</strong> (NPS) y <strong>financieras</strong>. Un negocio es sano cuando el <strong>CLV supera con holgura al CPA</strong>.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El viaje del cliente no termina en la compra." · "Retener cuesta menos que captar." · "Lo que no se mide, no se puede mejorar."</div>
      `
    }
  ]
};
