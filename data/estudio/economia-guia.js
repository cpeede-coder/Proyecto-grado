// Guía de estudio ordenada — ECONOMÍA (material para LEER antes de las flashcards)
// Contenido ALINEADO al TEMARIO OFICIAL de Economía y VALIDADO contra fuentes
// estándar (Mankiw, Samuelson, Pindyck & Rubinfeld) y contexto chileno
// (Banco Central de Chile, IPC/INE, FNE/TDLC).
// Se sirve como HTML por unidad y se inyecta en #estudio-guia-contenido (contenido
// estático propio, sin entrada de usuario). Usa las clases .guia-* de css/styles.css.
// Nota: aquí SÍ se usan template literals (backticks) por ser un bloque HTML largo;
// la regla de "no backticks" aplica al banco de preguntas (data/materias/*.js).
// Las 11 unidades (ids y títulos) son IDÉNTICAS a las de data/estudio/economia.js.
// Ver el detalle de qué se agregó/reorganizó respecto del temario en economia.js.
window.ESTUDIO_GUIA = window.ESTUDIO_GUIA || {};
window.ESTUDIO_GUIA.economia = {
  nombre: "Economía",
  intro: "Léela unidad por unidad. Cuando entiendas una unidad, pasa a las flashcards de esa unidad para fijarla. Recuerda que el examen es SIN CALCULADORA: se evalúan conceptos, relaciones causa-efecto y gráficos, no cálculos. Los recuadros azules son definiciones para memorizar; los dorados, frases que suman en el examen.",
  secciones: [
    {
      unidad: "U1", titulo: "Principios, Escasez y Mercados",
      html: `
        <p>La economía parte de un hecho: los recursos son <strong>escasos</strong> y las necesidades <strong>ilimitadas</strong>. De ahí nace todo lo demás: elegir, renunciar y asignar.</p>

        <h4>¿Qué estudia la economía?</h4>
        <div class="guia-def">La economía estudia cómo la sociedad administra sus <strong>recursos escasos</strong> para satisfacer necesidades ilimitadas. La escasez obliga a <strong>elegir</strong>.</div>
        <p>La economía es una <strong>ciencia social</strong>: observa, formula supuestos y usa <strong>modelos</strong> (representaciones simplificadas de la realidad) para analizar decisiones. Sus principios se agrupan en tres bloques:</p>
        <ul>
          <li><strong>Cómo deciden las personas:</strong> enfrentan disyuntivas; el costo de algo es aquello a lo que se renuncia; piensan en el margen; responden a incentivos.</li>
          <li><strong>Cómo interactúan:</strong> el comercio mejora el bienestar de todos; el mercado suele organizar bien la actividad; el Estado puede intervenir para corregir fallas.</li>
          <li><strong>Cómo funciona el conjunto:</strong> el nivel de vida depende de la productividad; el exceso de dinero genera inflación; a corto plazo hay disyuntiva entre inflación y desempleo.</li>
        </ul>

        <h4>Costo de oportunidad y pensamiento marginal</h4>
        <p>El <strong>costo de oportunidad</strong> es el valor de la mejor alternativa a la que se renuncia. Pensar <strong>en el margen</strong> es comparar el beneficio de una unidad adicional con su costo: conviene actuar mientras el <strong>beneficio marginal supere al costo marginal</strong>.</p>

        <h4>La Frontera de Posibilidades de Producción (FPP)</h4>
        <p>Muestra las combinaciones <strong>máximas</strong> de dos bienes que se pueden producir con los recursos y la tecnología disponibles.</p>
        <ul>
          <li>Puntos <strong>sobre</strong> la curva: eficientes (se usan todos los recursos).</li>
          <li>Puntos <strong>interiores</strong>: ineficientes (recursos ociosos, desempleo).</li>
          <li>Puntos <strong>exteriores</strong>: inalcanzables hoy.</li>
        </ul>
        <p>Su pendiente es el costo de oportunidad; suele ser <strong>cóncava</strong> (costo de oportunidad creciente). Se desplaza <strong>hacia afuera</strong> con más recursos o mejor tecnología: eso es <strong>crecimiento económico</strong>.</p>

        <h4>Ventaja comparativa, especialización y comercio</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Concepto</th><th>Definición</th><th>Base del comercio</th></tr></thead>
          <tbody>
            <tr><td><strong>Ventaja absoluta</strong></td><td>Producir un bien con MENOS recursos que el otro</td><td>No</td></tr>
            <tr><td><strong>Ventaja comparativa</strong></td><td>Producir un bien a MENOR costo de oportunidad que el otro</td><td>Sí</td></tr>
          </tbody>
        </table></div>
        <p>Cada parte se especializa donde tiene <strong>ventaja comparativa</strong> y comercia por el resto. Así se produce más con los mismos recursos y ambas partes ganan.</p>

        <h4>El mercado y sus tipos</h4>
        <p>El <strong>mercado</strong> coordina a compradores y vendedores a través de los <strong>precios</strong>, que transmiten información e incentivos y responden qué, cómo y para quién producir. Según cuántos participantes haya y cuán diferenciado sea el producto, se distinguen cuatro tipos:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Tipo de mercado</th><th>N.º de empresas</th><th>Producto</th></tr></thead>
          <tbody>
            <tr><td><strong>Competencia perfecta</strong></td><td>Muchas</td><td>Homogéneo</td></tr>
            <tr><td><strong>Competencia monopolística</strong></td><td>Muchas</td><td>Diferenciado</td></tr>
            <tr><td><strong>Oligopolio</strong></td><td>Pocas</td><td>Homogéneo o diferenciado</td></tr>
            <tr><td><strong>Monopolio</strong></td><td>Una</td><td>Sin sustitutos cercanos</td></tr>
          </tbody>
        </table></div>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El costo de algo es aquello a lo que se renuncia." · "El comercio se basa en la ventaja comparativa, no en la absoluta." · "El comercio no es de suma cero: agranda la torta."</div>
      `
    },
    {
      unidad: "U2", titulo: "Demanda, Oferta y Elasticidad",
      html: `
        <p>El mercado coordina a compradores (demanda) y vendedores (oferta) a través de los <strong>precios</strong>, que transmiten información e incentivos.</p>

        <h4>La demanda</h4>
        <p><strong>Ley de la demanda:</strong> ceteris paribus, al subir el precio baja la cantidad demandada (relación <strong>inversa</strong>; curva de pendiente negativa). Se explica por el efecto sustitución y el efecto ingreso.</p>
        <div class="guia-def">Clave del examen: distingue <strong>movimiento a lo largo</strong> de la curva (lo causa el precio del propio bien) de un <strong>desplazamiento</strong> de la curva (lo causa cualquier otro factor).</div>
        <p>Factores que <strong>desplazan</strong> la demanda: ingreso, precios de bienes relacionados (sustitutos y complementarios), gustos, expectativas y número de compradores.</p>

        <h4>La oferta</h4>
        <p><strong>Ley de la oferta:</strong> ceteris paribus, al subir el precio sube la cantidad ofrecida (relación <strong>directa</strong>; pendiente positiva). La <strong>desplazan</strong>: precios de los insumos, tecnología, expectativas y número de vendedores. Mejor tecnología o insumos más baratos → la oferta se corre a la derecha.</p>
        <p><strong>Representación lineal (sin cálculo):</strong> en el plano precio-cantidad, la demanda es una recta que baja y la oferta una recta que sube. Basta describir la <em>pendiente</em> y qué la mueve; el examen no pide resolver ecuaciones.</p>

        <h4>Elasticidad</h4>
        <p>La <strong>elasticidad</strong> mide la sensibilidad de una variable ante el cambio de otra.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Tipo de elasticidad</th><th>Qué mide</th><th>Cómo se lee</th></tr></thead>
          <tbody>
            <tr><td><strong>Precio de la demanda</strong></td><td>Reacción de la cantidad al precio del bien</td><td>Elástica (reacciona mucho) / inelástica (reacciona poco)</td></tr>
            <tr><td><strong>Cruzada</strong></td><td>Reacción de la demanda al precio de OTRO bien</td><td>Positiva = sustitutos; negativa = complementarios</td></tr>
            <tr><td><strong>Ingreso</strong></td><td>Reacción de la demanda al ingreso</td><td>Positiva = bien normal; negativa = bien inferior</td></tr>
            <tr><td><strong>Oferta</strong></td><td>Reacción de la cantidad ofrecida al precio</td><td>Más elástica en el largo plazo</td></tr>
          </tbody>
        </table></div>
        <p>La elasticidad precio es mayor cuando hay <strong>más sustitutos</strong>, el bien es un <strong>lujo</strong>, hay más <strong>tiempo</strong> para reaccionar y representa una gran <strong>proporción del ingreso</strong>. Regla útil: si la demanda es <strong>inelástica</strong>, subir el precio aumenta el ingreso total; si es <strong>elástica</strong>, lo reduce.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El precio mueve a lo largo de la curva; los demás factores la desplazan." · "Elasticidad cruzada positiva = sustitutos." · "Elasticidad ingreso negativa = bien inferior."</div>
      `
    },
    {
      unidad: "U3", titulo: "Equilibrio de Mercado y Bienestar",
      html: `
        <p>Cuando oferta y demanda se cruzan aparece el <strong>equilibrio</strong>. Desde ahí se mide el bienestar mediante los excedentes.</p>

        <h4>Equilibrio de mercado</h4>
        <div class="guia-def">El <strong>equilibrio</strong> es el punto donde la cantidad demandada iguala a la ofrecida. El precio de equilibrio "vacía" el mercado: no hay ni escasez ni excedente.</div>
        <p>Reglas de estática comparativa (muy preguntadas):</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Cambio</th><th>Precio de equilibrio</th><th>Cantidad de equilibrio</th></tr></thead>
          <tbody>
            <tr><td>Aumenta la demanda</td><td>Sube</td><td>Sube</td></tr>
            <tr><td>Disminuye la demanda</td><td>Baja</td><td>Baja</td></tr>
            <tr><td>Aumenta la oferta</td><td>Baja</td><td>Sube</td></tr>
            <tr><td>Disminuye la oferta</td><td>Sube</td><td>Baja</td></tr>
          </tbody>
        </table></div>
        <p>Si se desplazan <strong>ambas curvas a la vez</strong>, se puede determinar con certeza la dirección de una variable (precio o cantidad), pero la otra queda <strong>ambigua</strong>: depende de qué desplazamiento sea mayor.</p>

        <h4>Análisis de bienestar</h4>
        <p><strong>Excedente del consumidor:</strong> diferencia entre lo que estaba dispuesto a pagar (disponibilidad a pagar) y lo que pagó (área bajo la demanda y sobre el precio); un precio más bajo lo aumenta. <strong>Excedente del productor:</strong> diferencia entre el precio recibido y el costo/disponibilidad a vender (área sobre la oferta y bajo el precio); un precio más alto lo aumenta. Un mercado competitivo es <strong>eficiente</strong>: maximiza el excedente total.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El mercado competitivo maximiza el excedente total." · "La demanda mide la disponibilidad a pagar; la oferta, el costo." · "Con dos desplazamientos, una variable siempre queda ambigua."</div>
      `
    },
    {
      unidad: "U4", titulo: "Políticas del Gobierno y Fallas de Mercado",
      html: `
        <p>El gobierno interviene en los mercados con controles de precio, impuestos y comercio exterior, y también para corregir <strong>fallas de mercado</strong>.</p>

        <h4>Políticas del gobierno</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Política</th><th>Efecto en el mercado</th></tr></thead>
          <tbody>
            <tr><td><strong>Precio máximo</strong> (bajo el equilibrio)</td><td>Escasez: la cantidad demandada supera la ofrecida (ej. control de arriendos)</td></tr>
            <tr><td><strong>Precio mínimo</strong> (sobre el equilibrio)</td><td>Excedente/sobreoferta; el salario mínimo puede generar desempleo</td></tr>
            <tr><td><strong>Impuesto</strong></td><td>Baja la cantidad transada y crea pérdida irrecuperable de eficiencia (carga muerta)</td></tr>
            <tr><td><strong>Subsidio</strong></td><td>Sube la cantidad transada; también distorsiona el equilibrio</td></tr>
            <tr><td><strong>Comercio exterior</strong></td><td>Acerca el precio local al mundial; un arancel sube el precio interno y reduce importaciones</td></tr>
          </tbody>
        </table></div>
        <p>La <strong>carga</strong> de un impuesto recae más sobre el lado <strong>más inelástico</strong> del mercado (el que menos puede reaccionar). El libre comercio aumenta el excedente <strong>total</strong>, aunque redistribuye entre consumidores y productores.</p>

        <h4>Fallas de mercado</h4>
        <p>Una <strong>falla de mercado</strong> es cuando el mercado no asigna eficientemente los recursos, lo que justifica la intervención del Estado. Cuatro fallas clásicas:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Falla</th><th>En qué consiste</th><th>Corrección</th></tr></thead>
          <tbody>
            <tr><td><strong>Externalidades</strong></td><td>Efecto sobre terceros sin compensación (negativa: contaminación; positiva: educación)</td><td>Coase, impuesto pigoviano / subsidio, permisos transables, regulación</td></tr>
            <tr><td><strong>Bienes públicos</strong></td><td>No excluibles y no rivales (defensa, faros); el mercado los subprovee ("free rider")</td><td>Provisión estatal o subsidios</td></tr>
            <tr><td><strong>Poder de mercado</strong></td><td>Monopolios y oligopolios que restringen cantidad</td><td>Regulación y defensa de la competencia</td></tr>
            <tr><td><strong>Información asimétrica</strong></td><td>Una parte sabe más que la otra</td><td>Señales, garantías, reputación, monitoreo (se detalla en Organización Industrial)</td></tr>
          </tbody>
        </table></div>
        <p><strong>Externalidad negativa → impuesto pigoviano; externalidad positiva → subsidio.</strong> Los bienes públicos, al ser no excluibles y no rivales, los provee el Estado.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Precio máximo → escasez; precio mínimo → excedente." · "Todo impuesto genera carga muerta." · "Externalidad negativa → impuesto pigoviano; positiva → subsidio."</div>
      `
    },
    {
      unidad: "U5", titulo: "Teoría del Consumidor",
      html: `
        <p>Miramos "por dentro" cómo decide el <strong>consumidor</strong>: de dónde sale su curva de demanda y cómo reacciona a precios e ingreso.</p>

        <h4>Demanda individual y de mercado</h4>
        <p>La demanda de un <strong>individuo</strong> muestra cuánto está dispuesto a comprar a cada precio (pendiente negativa). La demanda de <strong>mercado</strong> es la <strong>suma horizontal</strong> de las demandas individuales: a cada precio se suman las cantidades de todos los consumidores.</p>

        <h4>Efecto renta y efecto sustitución</h4>
        <p>Cuando baja el precio de un bien, la cantidad demandada cambia por dos razones que se suman:</p>
        <ul>
          <li><strong>Efecto sustitución:</strong> el bien se abarató respecto de otros, así que el consumidor lo prefiere frente a sus sustitutos (cambio por el <strong>precio relativo</strong>).</li>
          <li><strong>Efecto renta (ingreso):</strong> con el precio más bajo, su poder de compra sube y puede comprar más (cambio por el <strong>ingreso real</strong>).</li>
        </ul>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Clasificación del bien</th><th>Si sube el ingreso…</th><th>Ejemplo</th></tr></thead>
          <tbody>
            <tr><td><strong>Normal</strong></td><td>La demanda aumenta</td><td>Ropa de marca, viajes</td></tr>
            <tr><td><strong>Inferior</strong></td><td>La demanda disminuye</td><td>Transporte público, marcas económicas</td></tr>
            <tr><td><strong>Sustitutos</strong></td><td>Sube el precio de uno → sube la demanda del otro</td><td>Té y café</td></tr>
            <tr><td><strong>Complementarios</strong></td><td>Sube el precio de uno → baja la demanda del otro</td><td>Impresora y tinta</td></tr>
          </tbody>
        </table></div>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Efecto total de un cambio de precio = efecto sustitución + efecto renta." · "El bien inferior no es de mala calidad: se deja al ganar más." · "La demanda de mercado es la suma horizontal de las individuales."</div>
      `
    },
    {
      unidad: "U6", titulo: "Producción y Costos",
      html: `
        <p>Del lado de la empresa: cómo produce (tecnología) y cuánto le cuesta (costos), en el corto y el largo plazo.</p>

        <h4>La producción</h4>
        <p>La <strong>función de producción</strong> relaciona los factores (trabajo, capital) con el producto. <strong>Corto plazo</strong>: hay al menos un factor fijo. <strong>Largo plazo</strong>: todos los factores son variables. Con un factor variable (el trabajo) se distinguen el <strong>producto medio</strong> (producción por trabajador) y el <strong>producto marginal</strong> (lo que aporta el último trabajador).</p>
        <p>Dos leyes que no hay que confundir:</p>
        <ul>
          <li><strong>Rendimientos marginales decrecientes</strong> (corto plazo): al añadir más de un factor variable con los demás fijos, el producto marginal termina por bajar.</li>
          <li><strong>Rendimientos a escala</strong> (largo plazo): qué pasa al aumentar <em>todos</em> los factores en igual proporción → crecientes, constantes o decrecientes.</li>
        </ul>

        <h4>Los costos</h4>
        <p>El <strong>costo contable</strong> solo cuenta desembolsos; el <strong>costo económico</strong> añade el costo de oportunidad (implícito). Los <strong>costos hundidos</strong> (irrecuperables) no deben influir en las decisiones.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Costo</th><th>Definición</th></tr></thead>
          <tbody>
            <tr><td><strong>Fijo</strong></td><td>No varía con la producción (arriendo)</td></tr>
            <tr><td><strong>Variable</strong></td><td>Cambia con la producción (insumos)</td></tr>
            <tr><td><strong>Marginal (CMg)</strong></td><td>Costo de producir una unidad adicional</td></tr>
            <tr><td><strong>Medio (CMe)</strong></td><td>Costo total dividido por la cantidad</td></tr>
          </tbody>
        </table></div>
        <p><strong>Gráficos de corto plazo:</strong> el CMg y el CMe tienen forma de <strong>U</strong>, y el CMg corta al CMe en su punto <strong>mínimo</strong>. <strong>En el largo plazo</strong> aparecen las <strong>economías de escala</strong> (el costo medio baja al crecer la producción) y las <strong>deseconomías de escala</strong> (sube por problemas de coordinación): la curva de costo medio de largo plazo suele ser una U ancha.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Los costos hundidos no se consideran para decidir." · "El costo marginal corta al costo medio en su mínimo." · "Rendimientos decrecientes = corto plazo; rendimientos a escala = largo plazo."</div>
      `
    },
    {
      unidad: "U7", titulo: "Estructuras de Mercado y Poder de Mercado",
      html: `
        <p>Las estructuras de mercado se ordenan según cuánta competencia y poder de precio hay. En todas, la regla de oro para maximizar es <strong>IMg = CMg</strong>.</p>

        <h4>Las cuatro estructuras de mercado</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Estructura</th><th>N.º de empresas</th><th>Producto</th><th>Poder de precio</th></tr></thead>
          <tbody>
            <tr><td><strong>Competencia perfecta</strong></td><td>Muchas</td><td>Homogéneo</td><td>Nulo (toma precios)</td></tr>
            <tr><td><strong>Competencia monopolística</strong></td><td>Muchas</td><td>Diferenciado</td><td>Bajo</td></tr>
            <tr><td><strong>Oligopolio</strong></td><td>Pocas</td><td>Homogéneo o diferenciado</td><td>Alto (interdependencia)</td></tr>
            <tr><td><strong>Monopolio</strong></td><td>Una</td><td>Sin sustitutos cercanos</td><td>Máximo (fija precio)</td></tr>
          </tbody>
        </table></div>

        <h4>La empresa competitiva</h4>
        <p>Se maximiza el beneficio donde <strong>ingreso marginal = costo marginal</strong>. En competencia perfecta el ingreso marginal es igual al precio (<strong>P = CMg</strong>), y la curva de oferta de la empresa es su costo marginal (por sobre el mínimo del costo variable medio). La <strong>oferta de mercado</strong> es la suma horizontal de las ofertas individuales.</p>
        <p><strong>Punto de cierre</strong> (corto plazo): si el precio no cubre el costo variable medio, conviene dejar de producir. En el <strong>largo plazo</strong>, si el precio no cubre el costo total medio, la empresa sale de la industria.</p>

        <h4>Monopolio y poder de mercado</h4>
        <p>El monopolio es un único vendedor sin sustitutos cercanos. Como enfrenta toda la demanda, para vender más debe bajar el precio a todo: por eso su <strong>ingreso marginal es menor que el precio</strong>. Produce donde IMg = CMg pero cobra el precio (más alto) de la demanda → produce <strong>menos</strong> y cobra <strong>más</strong> que la competencia, generando <strong>pérdida de eficiencia</strong> (carga muerta). Su poder nace de <strong>barreras de entrada</strong> (recurso exclusivo, patentes, economías de escala, regulación); el <strong>monopolio natural</strong> abastece a menor costo con una sola empresa.</p>
        <p>El monopolista puede aplicar <strong>discriminación de precios</strong> para capturar excedente: 1er grado (por cada unidad), 2° grado (por cantidad/versión) y 3er grado (por segmento). Como estrategia de entrada, las empresas usan los <strong>precios como barrera</strong>: predatorios (bajo el costo, para expulsar rivales) y de penetración (bajos para ganar cuota).</p>

        <h4>Oligopolio</h4>
        <p>Pocas empresas con <strong>interdependencia</strong>: cada una decide anticipando la reacción del rival. Modelos: <strong>Cournot</strong> (cantidades), <strong>Bertrand</strong> (precios) y <strong>Stackelberg</strong> (líder-seguidor). La <strong>competencia monopolística</strong>, en cambio, tiene muchas empresas con productos diferenciados y libre entrada, que erosiona las ganancias en el largo plazo.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Se maximiza el beneficio donde IMg = CMg." · "En monopolio, el ingreso marginal es menor que el precio." · "Cierra si P &lt; costo variable medio; sale si P &lt; costo total medio."</div>
      `
    },
    {
      unidad: "U8", titulo: "Organización Industrial: Firma, Juegos e Información",
      html: `
        <p>La Organización Industrial estudia cómo se organizan las empresas, cómo compiten estratégicamente y qué pasa cuando la información es asimétrica.</p>

        <h4>Teoría de la firma e integración vertical</h4>
        <p>La <strong>integración vertical</strong> es controlar varias etapas de la cadena (hacia atrás: insumos; hacia adelante: distribución). La decisión depende de los costos <strong>no triviales</strong> (negociación, contratos, activos específicos), no de los triviales (transporte, impuestos).</p>
        <div class="guia-def">Según <strong>Coase (1937)</strong>, la empresa existe para ahorrar <strong>costos de transacción</strong> del mercado (negociar, contratar, resolver disputas) internalizando actividades. Crece hasta que el costo de <strong>coordinar</strong> internamente iguala al de transar en el mercado: eso fija su tamaño.</div>
        <p>La <strong>teoría de agencia</strong> analiza la relación en que un <strong>principal</strong> (dueño) delega en un <strong>agente</strong> (gerente) con intereses distintos; el <strong>contrato</strong> busca alinearlos con incentivos, monitoreo y participación en resultados.</p>

        <h4>Comportamiento estratégico y teoría de juegos</h4>
        <p>La <strong>teoría de juegos</strong> analiza decisiones donde el resultado depende de varios agentes (forma <strong>estratégica</strong>: tabla de pagos; forma <strong>extensiva</strong>: árbol de decisión).</p>
        <ul>
          <li><strong>Equilibrio de Nash:</strong> nadie mejora cambiando su estrategia de forma unilateral.</li>
          <li><strong>Estrategia dominante:</strong> la mejor opción sin importar lo que hagan los demás.</li>
          <li><strong>Dilema del prisionero:</strong> cada uno persigue su interés y ambos terminan peor que cooperando. Explica por qué las <strong>colusiones</strong> son inestables.</li>
        </ul>
        <p>La <strong>colusión</strong> (cartel) fija precios o cantidades para actuar como monopolio (precios altos, menos competencia, ilegal); la <strong>guerra de precios</strong> es el extremo opuesto (bajar precios agresivamente, reduciendo beneficios). El <strong>compromiso estratégico</strong> altera la conducta de los rivales solo si es <strong>creíble</strong> (costos hundidos, reputación); la <strong>señalización</strong> son acciones costosas que comunican información creíble (ej. publicidad como señal de calidad).</p>

        <h4>Información asimétrica</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Problema</th><th>Cuándo</th><th>Ejemplo</th><th>Solución</th></tr></thead>
          <tbody>
            <tr><td><strong>Selección adversa</strong></td><td>ANTES del contrato (características ocultas)</td><td>Autos "limones"; seguros a los de alto riesgo</td><td>Señales, garantías, screening, seguro obligatorio</td></tr>
            <tr><td><strong>Riesgo moral</strong></td><td>DESPUÉS del contrato (acciones ocultas)</td><td>El asegurado se cuida menos; el agente se esfuerza menos</td><td>Monitoreo, pagos por desempeño, incentivos</td></tr>
          </tbody>
        </table></div>

        <h4>Regulación de la libre competencia en Chile</h4>
        <p>La <strong>Fiscalía Nacional Económica (FNE)</strong> investiga y acusa; el <strong>Tribunal de Defensa de la Libre Competencia (TDLC)</strong> juzga y sanciona la colusión, los abusos de posición dominante y las fusiones riesgosas. La <strong>delación compensada</strong> (2009) permite a un miembro del cartel delatarse a cambio de una rebaja de multa. Casos emblemáticos: colusión de las farmacias y rechazo de la fusión Falabella-D&amp;S.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "La empresa existe para ahorrar costos de transacción (Coase)." · "Selección adversa es antes del contrato; riesgo moral, después." · "FNE acusa, TDLC juzga."</div>
      `
    },
    {
      unidad: "U9", titulo: "Macro: Cuentas Nacionales, Ahorro y Empleo",
      html: `
        <p>La macroeconomía mira la economía como un todo. Empezamos por <strong>medirla</strong>: producción (PIB), precios (IPC) y empleo (tasa de desempleo), más el <strong>ahorro-inversión</strong>.</p>

        <h4>El PIB</h4>
        <div class="guia-def">El <strong>PIB</strong> es el valor de mercado de todos los bienes y servicios <strong>finales</strong> producidos <strong>dentro</strong> de un país en un período. "Finales" evita el doble conteo; "dentro del país" lo distingue del PNB.</div>
        <p>Se puede medir por el <strong>gasto</strong> (PIB = C + I + G + (X - M)) o por el <strong>ingreso</strong> (suma de salarios, rentas, intereses y beneficios). Ambos coinciden porque el gasto de uno es el ingreso de otro.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Medida</th><th>Precios que usa</th><th>Para qué sirve</th></tr></thead>
          <tbody>
            <tr><td><strong>PIB nominal</strong></td><td>Corrientes (del año en curso)</td><td>Valor a precios de hoy</td></tr>
            <tr><td><strong>PIB real</strong></td><td>Constantes (año base)</td><td>Comparar crecimiento sin inflación</td></tr>
            <tr><td><strong>Deflactor del PIB</strong></td><td>Nominal / Real</td><td>Nivel general de precios de todo el PIB</td></tr>
          </tbody>
        </table></div>
        <p>El <strong>PIB real</strong> es el que sirve para hablar de crecimiento (el nominal se infla por el alza de precios). Para comparar países se usa el PIB per cápita ajustado por <strong>paridad de poder de compra (PPA)</strong>.</p>

        <h4>El IPC y la inflación</h4>
        <p>El <strong>IPC</strong> mide el precio de una <strong>canasta fija</strong> representativa del consumo de los hogares (índice de Laspeyres). La <strong>inflación</strong> es su variación porcentual. En Chile lo calcula mensualmente el <strong>INE</strong>. Tiene sesgos: de <strong>sustitución</strong>, de <strong>nuevos productos</strong> y de <strong>calidad</strong>, por lo que tiende a sobreestimar la inflación. A diferencia del deflactor (que cubre todo el PIB), el IPC usa canasta fija y solo bienes de consumo.</p>

        <h4>El desempleo y el ahorro-inversión</h4>
        <p><strong>Fuerza de trabajo</strong> = ocupados + desocupados que buscan empleo. Los <strong>inactivos</strong> (estudiantes, jubilados, labores del hogar) quedan fuera. La <strong>tasa de desempleo</strong> = desocupados / fuerza de trabajo, es decir U / (E + U).</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Tipo de desempleo</th><th>Causa</th></tr></thead>
          <tbody>
            <tr><td><strong>Friccional</strong></td><td>Tiempo de búsqueda entre empleos (transitorio)</td></tr>
            <tr><td><strong>Estructural</strong></td><td>Desajuste entre habilidades y lo que pide el mercado</td></tr>
            <tr><td><strong>Cíclico</strong></td><td>Recesiones: cae la actividad económica</td></tr>
          </tbody>
        </table></div>
        <p>La <strong>tasa natural</strong> de desempleo = friccional + estructural (existe aun con la economía sana). El <strong>salario mínimo</strong> y los <strong>sindicatos</strong> pueden elevar el desempleo si fijan salarios por sobre el de equilibrio. En el largo plazo, el <strong>mercado de fondos prestables</strong> (ahorro = inversión) determina la tasa de interés real: más ahorro baja la tasa y estimula la inversión.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El PIB real mide crecimiento; el nominal, no." · "Inflación = variación del IPC (en Chile lo mide el INE)." · "Quien no busca trabajo es inactivo, no desempleado."</div>
      `
    },
    {
      unidad: "U10", titulo: "Dinero, Inflación y Fluctuaciones",
      html: `
        <p>El corazón de la macro de precios y ciclos: el <strong>dinero</strong>, la <strong>inflación</strong> y cómo el Estado y el Banco Central manejan la <strong>demanda agregada</strong>.</p>

        <h4>El dinero y el Banco Central</h4>
        <p>El <strong>dinero</strong> cumple tres funciones: <strong>medio de cambio</strong>, <strong>unidad de cuenta</strong> y <strong>depósito de valor</strong>. Los bancos comerciales <strong>crean dinero</strong> al prestar parte de los depósitos: el <strong>multiplicador del dinero</strong> es mayor mientras menor sea el coeficiente de reservas.</p>
        <p>El <strong>Banco Central de Chile</strong> (creado en 1925, autónomo desde 1989) busca la estabilidad de precios; su <strong>meta de inflación es 3% anual</strong> (rango 2%-4%). Controla el dinero con:</p>
        <ul>
          <li><strong>Operaciones de mercado abierto:</strong> compra/venta de bonos.</li>
          <li><strong>Encaje:</strong> reservas mínimas exigidas a los bancos.</li>
          <li><strong>Tasa de política / descuento:</strong> a la que presta a los bancos.</li>
        </ul>
        <p>La <strong>demanda de dinero</strong> (por transacción, precaución y especulación) tiene relación <strong>inversa</strong> con la tasa de interés; el <strong>equilibrio monetario</strong> ocurre donde la oferta de dinero iguala a la demanda.</p>

        <h4>La inflación</h4>
        <p>La <strong>teoría cuantitativa</strong> (M x V = P x Y) dice que, si la velocidad y la producción son estables, más dinero significa más precios: por eso "la inflación es, en el largo plazo, un fenómeno monetario". Sus <strong>costos</strong>: de menú, de suela de zapatos, distorsión de precios relativos, distorsión tributaria e incertidumbre. La <strong>ecuación de Fisher</strong> relaciona las tasas: nominal = real + inflación esperada (i = r + &pi;). El <strong>impuesto inflacionario</strong> es la pérdida de poder de compra de quien mantiene efectivo.</p>

        <h4>Demanda agregada, oferta agregada y políticas</h4>
        <p>La <strong>demanda agregada (DA)</strong> es el gasto total (C + I + G + XN); tiene pendiente negativa. La <strong>oferta agregada</strong> es ascendente en el corto plazo (precios rígidos) y <strong>vertical</strong> en el largo plazo (PIB potencial). Sobre la DA actúan dos políticas:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Política</th><th>Expansiva (estimula)</th><th>Contractiva (enfría)</th></tr></thead>
          <tbody>
            <tr><td><strong>Monetaria</strong></td><td>Más dinero → baja la tasa → sube consumo e inversión</td><td>Menos dinero → sube la tasa → frena la inflación</td></tr>
            <tr><td><strong>Fiscal</strong></td><td>Más gasto público o menos impuestos (efecto multiplicador)</td><td>Menos gasto o más impuestos</td></tr>
          </tbody>
        </table></div>
        <p>El <strong>efecto multiplicador</strong> amplifica el impulso inicial del gasto: ese gasto es ingreso de otros que a su vez consumen, encadenando nuevas rondas. La <strong>curva de Phillips</strong> muestra en el <strong>corto plazo</strong> una relación inversa entre inflación y desempleo; en el <strong>largo plazo</strong> es vertical en la tasa natural: no hay disyuntiva permanente, porque las expectativas se ajustan.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "En el largo plazo, la inflación es un fenómeno monetario." · "La oferta agregada de largo plazo es vertical en el PIB potencial." · "A largo plazo no hay disyuntiva entre inflación y desempleo."</div>
      `
    },
    {
      unidad: "U11", titulo: "Economía Abierta y Modelos Macro (Solow, IS-LM, Mundell-Fleming)",
      html: `
        <p>Cierra el curso la macro abierta y los modelos que estructuran el crecimiento (Solow) y los ciclos (IS-LM, Mundell-Fleming).</p>

        <h4>Economía abierta</h4>
        <p>Las <strong>exportaciones netas</strong> (XN = X - M) miden el saldo comercial; el <strong>flujo de salida neta de capital (FSNC)</strong> es la compra neta de activos externos por residentes. La identidad clave es <strong>S = I + FSNC</strong> (el ahorro financia la inversión doméstica y la salida neta de capital), y en equilibrio <strong>XN = FSNC</strong>.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Concepto</th><th>Qué es</th></tr></thead>
          <tbody>
            <tr><td><strong>Tipo de cambio nominal</strong></td><td>Precio de una moneda en otra (1 USD = 900 CLP)</td></tr>
            <tr><td><strong>Tipo de cambio real</strong></td><td>El nominal ajustado por precios de ambos países (poder adquisitivo relativo)</td></tr>
            <tr><td><strong>Paridad del poder de compra (PPP)</strong></td><td>A largo plazo el tipo de cambio iguala el precio de una misma canasta entre países (e = P / P*)</td></tr>
          </tbody>
        </table></div>
        <p>El tipo de cambio se determina en el mercado de <strong>divisas</strong>. En equilibrio se ajustan a la vez los mercados de bienes, fondos prestables y divisas. Una <strong>depreciación</strong> del peso abarata las exportaciones y sube XN.</p>

        <h4>Crecimiento de largo plazo: el modelo de Solow</h4>
        <p>Explica el crecimiento por la <strong>acumulación de capital</strong> y el crecimiento de la población. Como el capital tiene <strong>rendimientos decrecientes</strong>, la economía llega a un <strong>estado estacionario</strong>: el capital donde la inversión solo repone la depreciación (inversión neta cero) y el producto por trabajador deja de crecer. El único motor del crecimiento <strong>sostenido</strong> es el <strong>progreso tecnológico</strong>. Medidas para fomentarlo: ahorro e inversión, capital humano (educación), I+D y apertura comercial.</p>

        <h4>Ciclos de corto plazo: IS-LM y Mundell-Fleming</h4>
        <p>El modelo <strong>IS-LM</strong> (precios rígidos) tiene dos curvas: la <strong>IS</strong> (mercado de bienes, pendiente negativa) y la <strong>LM</strong> (mercado de dinero, pendiente positiva); su cruce fija producto y tasa de interés de corto plazo. La <strong>política fiscal</strong> desplaza la IS; la <strong>monetaria</strong>, la LM. El IS-LM es la base teórica de la demanda agregada.</p>
        <p>El modelo <strong>Mundell-Fleming</strong> es el IS-LM de una economía <strong>pequeña y abierta</strong> con movilidad perfecta de capital. Su gran lección: la eficacia de las políticas depende del régimen cambiario.</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Régimen cambiario</th><th>Política eficaz</th><th>Política ineficaz</th></tr></thead>
          <tbody>
            <tr><td><strong>Tipo de cambio flexible</strong></td><td>Monetaria</td><td>Fiscal</td></tr>
            <tr><td><strong>Tipo de cambio fijo</strong></td><td>Fiscal</td><td>Monetaria (atada a defender la paridad)</td></tr>
          </tbody>
        </table></div>

        <div class="guia-frase"><strong>Frases de examen:</strong> "S = I + FSNC: el ahorro financia inversión y salida de capital." · "Sin progreso tecnológico, el capital solo lleva al estado estacionario." · "Cambio flexible → manda la política monetaria; cambio fijo → manda la fiscal."</div>
      `
    }
  ]
};
