// Guía de estudio ordenada — ECONOMÍA (material para LEER antes de las flashcards)
// Contenido reorganizado y VALIDADO desde el "RESUMEN ECONOMÍA GRADO" contra
// fuentes estándar (Mankiw, Samuelson, Pindyck & Rubinfeld) y contexto chileno
// (Banco Central de Chile, IPC/INE, FNE/TDLC).
// Se sirve como HTML por unidad y se inyecta en #estudio-guia-contenido (contenido
// estático propio, sin entrada de usuario). Usa las clases .guia-* de css/styles.css.
// Nota: aquí SÍ se usan template literals (backticks) por ser un bloque HTML largo;
// la regla de "no backticks" aplica al banco de preguntas (data/materias/*.js).
// Correcciones aplicadas (ver detalle en data/estudio/economia.js): fecha de Coase
// (1937), precisión de selección adversa vs. riesgo moral, identidad de economía
// abierta S = I + FSNC (y XN = FSNC), ventaja absoluta vs. comparativa, e IPC/INE
// y meta de inflación del Banco Central de Chile (3%).
window.ESTUDIO_GUIA = window.ESTUDIO_GUIA || {};
window.ESTUDIO_GUIA.economia = {
  nombre: "Economía",
  intro: "Léela unidad por unidad. Cuando entiendas una unidad, pasa a las flashcards de esa unidad para fijarla. Recuerda que el examen es SIN CALCULADORA: se evalúan conceptos, relaciones causa-efecto y gráficos, no cálculos. Los recuadros azules son definiciones para memorizar; los dorados, frases que suman en el examen.",
  secciones: [
    {
      unidad: "U1", titulo: "Principios y Escasez",
      html: `
        <p>La economía parte de un hecho: los recursos son <strong>escasos</strong> y las necesidades <strong>ilimitadas</strong>. De ahí nace todo lo demás: elegir, renunciar y asignar.</p>

        <h4>¿Qué estudia la economía?</h4>
        <div class="guia-def">La economía estudia cómo la sociedad administra sus <strong>recursos escasos</strong> para satisfacer necesidades ilimitadas. La escasez obliga a <strong>elegir</strong>.</div>
        <p>Cuatro principios sobre cómo decidimos: (1) enfrentamos <strong>disyuntivas</strong>; (2) el costo de algo es aquello a lo que se <strong>renuncia</strong>; (3) las personas racionales piensan <strong>en el margen</strong>; (4) respondemos a <strong>incentivos</strong>. Los economistas usan <strong>modelos</strong> (supuestos que simplifican la realidad) para analizar estas decisiones.</p>

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
      unidad: "U3", titulo: "Equilibrio, Bienestar y Políticas Públicas",
      html: `
        <p>Cuando oferta y demanda se cruzan aparece el <strong>equilibrio</strong>. Desde ahí se mide el bienestar y se evalúa qué pasa cuando el gobierno interviene.</p>

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

        <h4>Análisis de bienestar</h4>
        <p><strong>Excedente del consumidor:</strong> diferencia entre lo que estaba dispuesto a pagar y lo que pagó (área bajo la demanda y sobre el precio). <strong>Excedente del productor:</strong> diferencia entre el precio recibido y el costo (área sobre la oferta y bajo el precio). Un mercado competitivo es <strong>eficiente</strong>: maximiza el excedente total.</p>

        <h4>Políticas del gobierno</h4>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Política</th><th>Efecto en el mercado</th></tr></thead>
          <tbody>
            <tr><td><strong>Precio máximo</strong> (bajo el equilibrio)</td><td>Escasez: la cantidad demandada supera la ofrecida (ej. control de arriendos)</td></tr>
            <tr><td><strong>Precio mínimo</strong> (sobre el equilibrio)</td><td>Excedente/sobreoferta; el salario mínimo puede generar desempleo</td></tr>
            <tr><td><strong>Impuesto</strong></td><td>Baja la cantidad transada y crea pérdida irrecuperable de eficiencia (carga muerta)</td></tr>
            <tr><td><strong>Subsidio</strong></td><td>Sube la cantidad transada; también distorsiona el equilibrio</td></tr>
          </tbody>
        </table></div>
        <p>La <strong>carga</strong> de un impuesto recae más sobre el lado <strong>más inelástico</strong> del mercado (el que menos puede reaccionar).</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El mercado competitivo maximiza el excedente total." · "Precio máximo → escasez; precio mínimo → excedente." · "Todo impuesto genera carga muerta."</div>
      `
    },
    {
      unidad: "U4", titulo: "Consumidor, Producción y Costos",
      html: `
        <p>Aquí se mira "por dentro" a los dos protagonistas: cómo decide el <strong>consumidor</strong> y cómo produce y cuánto le cuesta a la <strong>empresa</strong>.</p>

        <h4>Teoría del consumidor: efecto renta y efecto sustitución</h4>
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

        <h4>La producción</h4>
        <p>La <strong>función de producción</strong> relaciona los factores (trabajo, capital) con el producto. <strong>Corto plazo</strong>: hay al menos un factor fijo. <strong>Largo plazo</strong>: todos los factores son variables.</p>
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
        <p>Dato gráfico: la curva de costo marginal corta a la de costo medio en su punto <strong>mínimo</strong>.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Efecto total de un cambio de precio = efecto sustitución + efecto renta." · "El bien inferior no es de mala calidad: se deja al ganar más." · "Los costos hundidos no se consideran para decidir."</div>
      `
    },
    {
      unidad: "U5", titulo: "Estructuras de Mercado y Fallas",
      html: `
        <p>Las estructuras de mercado se ordenan según cuánta competencia y poder de precio hay. Al final aparecen las <strong>fallas de mercado</strong>, que justifican la intervención del Estado.</p>

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
        <p><strong>Regla de oro (todas las estructuras):</strong> se maximiza el beneficio donde <strong>ingreso marginal = costo marginal</strong>. En competencia perfecta el ingreso marginal es igual al precio; en monopolio el ingreso marginal es <strong>menor</strong> que el precio (para vender más hay que bajar el precio a todo). El <strong>punto de cierre</strong> de corto plazo llega cuando el precio no cubre los costos variables medios.</p>

        <h4>Monopolio y oligopolio</h4>
        <p>El poder de monopolio nace de <strong>barreras de entrada</strong> (recurso exclusivo, patentes, economías de escala, regulación). El <strong>monopolio natural</strong> abastece a menor costo con una sola empresa (altos costos fijos). El monopolista puede aplicar <strong>discriminación de precios</strong>: 1er grado (por cada unidad), 2° grado (por cantidad/versión) y 3er grado (por segmento).</p>
        <p>En el <strong>oligopolio</strong> manda la <strong>interdependencia</strong>: cada empresa decide anticipando la reacción del rival. Modelos: Cournot (cantidades), Bertrand (precios) y Stackelberg (líder-seguidor). La <strong>teoría de juegos</strong> lo formaliza:</p>
        <ul>
          <li><strong>Equilibrio de Nash:</strong> nadie mejora cambiando su estrategia de forma unilateral.</li>
          <li><strong>Estrategia dominante:</strong> la mejor opción sin importar lo que hagan los demás.</li>
          <li><strong>Dilema del prisionero:</strong> cada uno persigue su interés y ambos terminan peor que cooperando. Explica por qué las <strong>colusiones</strong> (carteles) son inestables: a cada uno le conviene traicionar.</li>
        </ul>

        <h4>Fallas de mercado</h4>
        <p>El mercado no siempre asigna bien los recursos. Cuatro fallas clásicas:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Falla</th><th>En qué consiste</th><th>Corrección</th></tr></thead>
          <tbody>
            <tr><td><strong>Externalidades</strong></td><td>Efecto sobre terceros sin compensación (negativa: contaminación; positiva: educación)</td><td>Coase, impuesto pigoviano / subsidio, regulación</td></tr>
            <tr><td><strong>Bienes públicos</strong></td><td>No excluibles y no rivales (defensa, faros)</td><td>Provisión estatal o subsidios</td></tr>
            <tr><td><strong>Poder de mercado</strong></td><td>Monopolios y oligopolios que restringen cantidad</td><td>Regulación y defensa de la competencia</td></tr>
            <tr><td><strong>Información asimétrica</strong></td><td>Una parte sabe más que la otra</td><td>Señales, garantías, reputación, monitoreo</td></tr>
          </tbody>
        </table></div>
        <p>Dentro de la información asimétrica hay que distinguir dos problemas:</p>
        <div class="guia-def"><strong>Selección adversa</strong> = información oculta ANTES del contrato (características ocultas, ej. autos "limones"). <strong>Riesgo moral</strong> = acciones ocultas DESPUÉS del contrato (ej. el asegurado se cuida menos). El <strong>problema de agencia</strong> (principal-agente) se alinea con incentivos, contratos y monitoreo.</div>
        <p><strong>Contexto chileno:</strong> la <strong>Fiscalía Nacional Económica (FNE)</strong> investiga y acusa; el <strong>Tribunal de Defensa de la Libre Competencia (TDLC)</strong> juzga y sanciona. Casos emblemáticos: colusión de las farmacias y rechazo de la fusión Falabella-D&S.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "Se maximiza el beneficio donde IMg = CMg." · "En monopolio, el ingreso marginal es menor que el precio." · "Selección adversa es antes del contrato; riesgo moral, después."</div>
      `
    },
    {
      unidad: "U6", titulo: "Cuentas Nacionales y Mercado Laboral",
      html: `
        <p>La macroeconomía mira la economía como un todo. Empezamos por <strong>medirla</strong>: producción (PIB), precios (IPC) y empleo (tasa de desempleo).</p>

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

        <h4>El desempleo</h4>
        <p><strong>Fuerza de trabajo</strong> = ocupados + desocupados que buscan empleo. Los <strong>inactivos</strong> (estudiantes, jubilados, labores del hogar) quedan fuera. La <strong>tasa de desempleo</strong> = desocupados / fuerza de trabajo, es decir U / (E + U).</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Tipo de desempleo</th><th>Causa</th></tr></thead>
          <tbody>
            <tr><td><strong>Friccional</strong></td><td>Tiempo de búsqueda entre empleos (transitorio)</td></tr>
            <tr><td><strong>Estructural</strong></td><td>Desajuste entre habilidades y lo que pide el mercado</td></tr>
            <tr><td><strong>Cíclico</strong></td><td>Recesiones: cae la actividad económica</td></tr>
          </tbody>
        </table></div>
        <p>La <strong>tasa natural</strong> de desempleo = friccional + estructural (existe aun con la economía sana). El salario mínimo y los sindicatos pueden elevar el desempleo si fijan salarios por sobre el de equilibrio. En el largo plazo, el <strong>mercado de fondos prestables</strong> (ahorro = inversión) determina la tasa de interés real.</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "El PIB real mide crecimiento; el nominal, no." · "Inflación = variación del IPC (en Chile lo mide el INE)." · "Quien no busca trabajo es inactivo, no desempleado."</div>
      `
    },
    {
      unidad: "U7", titulo: "Dinero, Inflación y Política Macroeconómica",
      html: `
        <p>Cierra el curso la macro de corto y largo plazo: el <strong>dinero</strong>, la <strong>inflación</strong>, cómo el Estado y el Banco Central manejan la economía, y la <strong>economía abierta</strong>.</p>

        <h4>El dinero y el Banco Central</h4>
        <p>El <strong>dinero</strong> cumple tres funciones: <strong>medio de cambio</strong>, <strong>unidad de cuenta</strong> y <strong>depósito de valor</strong>. Los bancos comerciales <strong>crean dinero</strong> al prestar parte de los depósitos: el <strong>multiplicador del dinero</strong> es mayor mientras menor sea el coeficiente de reservas.</p>
        <p>El <strong>Banco Central de Chile</strong> (autónomo desde 1989) busca la estabilidad de precios; su <strong>meta de inflación es 3% anual</strong> (rango 2%-4%). Controla el dinero con:</p>
        <ul>
          <li><strong>Operaciones de mercado abierto:</strong> compra/venta de bonos.</li>
          <li><strong>Encaje:</strong> reservas mínimas exigidas a los bancos.</li>
          <li><strong>Tasa de política / descuento:</strong> a la que presta a los bancos.</li>
        </ul>

        <h4>La inflación</h4>
        <p>La <strong>teoría cuantitativa</strong> (M x V = P x Y) dice que, si la velocidad y la producción son estables, más dinero significa más precios: por eso "la inflación es, en el largo plazo, un fenómeno monetario". Sus <strong>costos</strong>: de menú, de suela de zapatos, distorsión de precios relativos, distorsión tributaria e incertidumbre. La <strong>ecuación de Fisher</strong> relaciona las tasas: nominal = real + inflación esperada (i = r + &pi;).</p>

        <h4>Demanda agregada, oferta agregada y políticas</h4>
        <p>La <strong>demanda agregada (DA)</strong> es el gasto total (C + I + G + XN); tiene pendiente negativa. La <strong>oferta agregada</strong> es ascendente en el corto plazo (precios rígidos) y <strong>vertical</strong> en el largo plazo (PIB potencial). Sobre la DA actúan dos políticas:</p>
        <div class="tabla-scroll"><table class="guia-tabla">
          <thead><tr><th>Política</th><th>Expansiva (estimula)</th><th>Contractiva (enfría)</th></tr></thead>
          <tbody>
            <tr><td><strong>Monetaria</strong></td><td>Más dinero → baja la tasa → sube consumo e inversión</td><td>Menos dinero → sube la tasa → frena la inflación</td></tr>
            <tr><td><strong>Fiscal</strong></td><td>Más gasto público o menos impuestos (efecto multiplicador)</td><td>Menos gasto o más impuestos</td></tr>
          </tbody>
        </table></div>
        <p>La <strong>curva de Phillips</strong> muestra en el <strong>corto plazo</strong> una relación inversa entre inflación y desempleo; en el <strong>largo plazo</strong> es vertical en la tasa natural: no hay disyuntiva permanente, porque las expectativas se ajustan.</p>

        <h4>Economía abierta</h4>
        <p>Las <strong>exportaciones netas</strong> (XN = X - M) miden el saldo comercial. El <strong>tipo de cambio nominal</strong> es el precio de una moneda en otra (ej. 1 USD = 900 CLP); el <strong>real</strong> lo ajusta por los precios de ambos países. La <strong>paridad del poder de compra (PPC)</strong> sostiene que, a largo plazo, el tipo de cambio iguala el precio de una misma canasta entre países. Identidad clave: <strong>S = I + FSNC</strong> (el ahorro financia la inversión doméstica y la salida neta de capital).</p>

        <div class="guia-frase"><strong>Frases de examen:</strong> "En el largo plazo, la inflación es un fenómeno monetario." · "La oferta agregada de largo plazo es vertical en el PIB potencial." · "A largo plazo no hay disyuntiva entre inflación y desempleo."</div>
      `
    }
  ]
};
