// ####################################################################
// GRÁFICOS DE ECONOMÍA — SVG reutilizables para flashcards y guía.
// El examen de grado pide "explique Y grafique", así que cada concepto
// gráfico clave tiene aquí su dibujo. Se referencian por clave desde las
// flashcards (campo `grafico:"clave"`) y desde la guía (data-grafico="clave").
//
// Estilo: los colores/trazos se controlan por CSS (clases g-*), por eso
// respetan el tema claro/oscuro solo. No cambiar los viewBox sin revisar CSS.
//   Ejes: g-eje (línea) + g-efill (puntas de flecha)
//   Curvas: g-d (demanda), g-s (oferta), g-3 (tercera), *-2 = versión punteada
//   Guías punteadas al eje: g-aux · Punto de equilibrio: g-dot
//   Áreas: g-area-ec / g-area-ep / g-dwl · Textos: g-lbl (+ -d/-s/-3), g-axis
// ####################################################################
(function () {
  "use strict";

  // ---- helpers de dibujo (devuelven strings SVG) ----
  var A = function (x1, y1, x2, y2, cls) {
    return '<line class="' + cls + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>';
  };
  var PL = function (pts, cls) { return '<polyline class="' + cls + '" points="' + pts + '"/>'; };
  var POLY = function (pts, cls) { return '<polygon class="' + cls + '" points="' + pts + '"/>'; };
  var DOT = function (x, y) { return '<circle class="g-dot" cx="' + x + '" cy="' + y + '" r="3.4"/>'; };
  var T = function (x, y, s, cls, anchor) {
    return '<text class="' + (cls || "g-lbl") + '" x="' + x + '" y="' + y + '"' +
      (anchor ? ' text-anchor="' + anchor + '"' : "") + ">" + s + "</text>";
  };
  // línea guía punteada desde un punto (x,y) hasta ambos ejes
  var GUIA = function (x, y) { return A(46, y, x, y, "g-aux") + A(x, 168, x, y, "g-aux"); };
  // flecha simple (con punta) entre dos puntos, casi siempre corta
  var FLECHA = function (x1, y1, x2, y2) {
    var ang = Math.atan2(y2 - y1, x2 - x1), L = 6;
    var xa = x2 - L * Math.cos(ang - 0.5), ya = y2 - L * Math.sin(ang - 0.5);
    var xb = x2 - L * Math.cos(ang + 0.5), yb = y2 - L * Math.sin(ang + 0.5);
    return A(x1, y1, x2, y2, "g-arrow") +
      '<polyline class="g-arrowfill" points="' + xa + ',' + ya + ' ' + x2 + ',' + y2 + ' ' + xb + ',' + yb + '"/>';
  };

  // marco de ejes con puntas de flecha + etiquetas de eje
  var FR = function (yl, xl) {
    return A(46, 168, 46, 24, "g-eje") + A(46, 168, 300, 168, "g-eje") +
      POLY("46,18 42,27 50,27", "g-efill") +      // punta eje Y
      POLY("306,168 297,164 297,172", "g-efill") + // punta eje X
      T(40, 20, yl, "g-axis", "end") +
      T(300, 184, xl, "g-axis", "end");
  };

  var G = function (inner) {
    return '<svg viewBox="0 0 320 200" class="g-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="gráfico económico">' +
      inner + "</svg>";
  };

  // ---- geometría base oferta/demanda (reutilizada) ----
  // D0: (46,38)->(286,152)  ·  S0: (46,158)->(286,44)  ·  eq0 ≈ (172,98)
  var D0 = A(46, 38, 286, 152, "g-d");
  var S0 = A(46, 158, 286, 44, "g-s");
  var lblD = T(290, 150, "D", "g-lbl-d");
  var lblS = T(290, 46, "O", "g-lbl-s");

  var GR = {};

  // 1) Equilibrio de mercado
  GR["od-equilibrio"] = G(
    FR("Precio", "Cantidad") + D0 + S0 + GUIA(172, 98) + DOT(172, 98) +
    lblD + lblS + T(176, 92, "E", "g-lbl") +
    T(40, 102, "P*", "g-axis", "end") + T(172, 182, "Q*", "g-axis", "middle")
  );

  // 2) Movimiento a lo largo vs. desplazamiento de la curva
  GR["desplaza-vs-movimiento"] = G(
    FR("Precio", "Cantidad") + D0 +
    A(120, 30, 300, 152, "g-d2") + T(300, 140, "D'", "g-lbl-d") +
    lblD +
    // flecha de movimiento A LO LARGO de D0 (por cambio de precio)
    FLECHA(90, 63, 150, 92) + T(96, 55, "por precio", "g-lbl") +
    // flecha de DESPLAZAMIENTO de toda la curva (por un determinante)
    FLECHA(150, 118, 195, 118) + T(150, 134, "por determinante", "g-lbl")
  );

  // 3) Aumento de la demanda → sube P y Q
  GR["od-aumento-demanda"] = G(
    FR("Precio", "Cantidad") + D0 + S0 +
    A(80, 38, 300, 142, "g-d2") + T(300, 130, "D'", "g-lbl-d") +
    GUIA(172, 98) + DOT(172, 98) + GUIA(189, 90) + DOT(189, 90) +
    lblS + lblD +
    FLECHA(150, 70, 178, 70) + T(120, 66, "D↑", "g-lbl-d")
  );

  // 4) Aumento de la oferta → baja P, sube Q
  GR["od-aumento-oferta"] = G(
    FR("Precio", "Cantidad") + D0 + S0 +
    A(80, 158, 300, 54, "g-s2") + T(300, 66, "O'", "g-lbl-s") +
    GUIA(172, 98) + DOT(172, 98) + GUIA(189, 106) + DOT(189, 106) +
    lblS + lblD +
    FLECHA(150, 128, 178, 128) + T(120, 140, "O↑", "g-lbl-s")
  );

  // 5) Elasticidad: demanda inelástica (empinada) vs elástica (plana)
  GR["elasticidad"] = G(
    FR("Precio", "Cantidad") +
    A(150, 34, 196, 160, "g-d") + T(150, 30, "Inelástica", "g-lbl-d", "middle") +
    A(60, 118, 292, 84, "g-3") + T(292, 78, "Elástica", "g-lbl-3", "end")
  );

  // 6) Excedentes del consumidor y del productor
  GR["excedentes"] = G(
    FR("Precio", "Cantidad") +
    A(46, 38, 286, 152, "g-d") + A(46, 158, 286, 44, "g-s") +
    POLY("46,38 46,98 172,98", "g-area-ec") +
    POLY("46,158 46,98 172,98", "g-area-ep") +
    A(46, 98, 172, 98, "g-aux") + A(172, 168, 172, 98, "g-aux") + DOT(172, 98) +
    lblD + lblS +
    T(70, 74, "EC", "g-lbl") + T(70, 128, "EP", "g-lbl") +
    T(40, 102, "P*", "g-axis", "end")
  );

  // 7) Precio máximo (techo) → escasez
  GR["precio-techo"] = G(
    FR("Precio", "Cantidad") + D0 + S0 +
    A(46, 125, 250, 125, "g-3") + T(52, 120, "Techo", "g-lbl-3") +
    A(115, 168, 115, 125, "g-aux") + A(229, 168, 229, 125, "g-aux") +
    lblD + lblS +
    T(115, 182, "Qo", "g-axis", "middle") + T(229, 182, "Qd", "g-axis", "middle") +
    FLECHA(122, 158, 222, 158) + T(172, 154, "escasez", "g-lbl", "middle")
  );

  // 8) Precio mínimo / salario mínimo → excedente (desempleo)
  GR["precio-piso"] = G(
    FR("Precio", "Cantidad") + D0 + S0 +
    A(46, 72, 250, 72, "g-3") + T(52, 67, "Piso", "g-lbl-3") +
    A(118, 168, 118, 72, "g-aux") + A(227, 168, 227, 72, "g-aux") +
    lblD + lblS +
    T(118, 182, "Qd", "g-axis", "middle") + T(227, 182, "Qo", "g-axis", "middle") +
    FLECHA(125, 88, 220, 88) + T(172, 84, "excedente", "g-lbl", "middle")
  );

  // 9) Impuesto y pérdida de eficiencia (carga muerta)
  GR["impuesto-carga-muerta"] = G(
    FR("Precio", "Cantidad") + D0 + S0 +
    A(46, 132, 286, 18, "g-s2") + T(300, 26, "O+t", "g-lbl-s") +
    POLY("172,98 145,85 145,111", "g-dwl") +
    A(145, 85, 145, 111, "g-aux") + DOT(172, 98) + DOT(145, 85) + DOT(145, 111) +
    lblD + lblS +
    T(150, 82, "Pc", "g-axis") + T(150, 122, "Pv", "g-axis") +
    T(198, 70, "carga muerta", "g-lbl")
  );

  // 10) Arancel a la importación
  GR["arancel"] = G(
    FR("Precio", "Cantidad") +
    A(46, 38, 286, 152, "g-d") + A(46, 158, 286, 44, "g-s") +
    A(46, 130, 286, 130, "g-aux") + T(52, 125, "Pmundial", "g-axis") +
    A(46, 110, 286, 110, "g-3") + T(52, 105, "P+arancel", "g-lbl-3") +
    POLY("105,130 147,110 105,110", "g-dwl") +
    POLY("240,130 198,110 240,110", "g-dwl") +
    lblD + lblS +
    T(150, 148, "importa", "g-lbl", "middle")
  );

  // 11) Competencia perfecta (firma): P = IMg, CMg y CMe en U
  GR["competencia-perfecta"] = G(
    FR("Costo / Precio", "Cantidad") +
    PL("70,118 105,104 140,98 180,100 220,112 258,132", "g-3") + T(262, 130, "CMe", "g-lbl-3") +
    PL("66,150 110,120 150,100 190,78 226,54", "g-s") + T(230, 50, "CMg", "g-lbl-s") +
    A(46, 90, 270, 90, "g-d") + T(274, 88, "P = IMg", "g-lbl-d") +
    GUIA(188, 90) + DOT(188, 90) +
    T(188, 182, "q*", "g-axis", "middle")
  );

  // 12) Monopolio: Qm donde IMg=CMg, Pm sobre la demanda
  GR["monopolio"] = G(
    FR("Precio", "Cantidad") +
    A(46, 50, 286, 158, "g-d") + T(290, 156, "D", "g-lbl-d") +
    A(46, 50, 182, 161, "g-d2") + T(150, 150, "IMg", "g-lbl-d") +
    A(46, 150, 270, 60, "g-s") + T(274, 58, "CMg", "g-lbl-s") +
    A(121, 168, 121, 81, "g-aux") + A(46, 81, 121, 81, "g-aux") +
    DOT(121, 112) + DOT(121, 81) +
    T(40, 85, "Pm", "g-axis", "end") + T(121, 182, "Qm", "g-axis", "middle") +
    T(150, 100, "IMg=CMg", "g-lbl")
  );

  // 13) Curvas de costo de corto plazo
  GR["costos-cp"] = G(
    FR("Costo", "Cantidad") +
    PL("70,150 110,128 150,116 195,116 235,126 270,142", "g-3") + T(274, 140, "CVMe", "g-lbl-3") +
    PL("70,120 110,100 150,90 195,90 235,98 270,112", "g-d") + T(274, 108, "CMe", "g-lbl-d") +
    PL("64,152 108,120 150,96 190,72 224,48", "g-s") + T(228, 44, "CMg", "g-lbl-s")
  );

  // 14) Oferta y demanda agregadas (OA-DA)
  GR["oa-da"] = G(
    FR("Nivel de precios", "PIB real") +
    A(46, 46, 286, 152, "g-d") + T(290, 150, "DA", "g-lbl-d") +
    A(46, 158, 286, 52, "g-s") + T(290, 54, "OAcp", "g-lbl-s") +
    A(172, 30, 172, 168, "g-3") + T(172, 26, "OAlp", "g-lbl-3", "middle") +
    GUIA(172, 100) + DOT(172, 100) +
    T(172, 182, "Y*", "g-axis", "middle")
  );

  // 15) Mercado de fondos prestables (r vs. fondos)
  GR["fondos-prestables"] = G(
    FR("Tasa (r)", "Fondos") + D0 + S0 + GUIA(172, 98) + DOT(172, 98) +
    T(290, 150, "Demanda (inversión)", "g-lbl-d", "end") +
    T(290, 46, "Oferta (ahorro)", "g-lbl-s", "end") +
    T(40, 102, "r*", "g-axis", "end")
  );

  // 16) Modelo IS-LM (r vs. Y)
  GR["is-lm"] = G(
    FR("Tasa (r)", "PIB (Y)") +
    A(46, 46, 286, 152, "g-d") + T(290, 150, "IS", "g-lbl-d") +
    A(46, 158, 286, 46, "g-s") + T(290, 48, "LM", "g-lbl-s") +
    GUIA(172, 100) + DOT(172, 100) +
    T(40, 104, "r*", "g-axis", "end") + T(172, 182, "Y*", "g-axis", "middle")
  );

  // 17) Mundell-Fleming (economía abierta, movilidad de capital)
  GR["mundell-fleming"] = G(
    FR("Tasa (r)", "PIB (Y)") +
    A(46, 46, 286, 152, "g-d") + T(290, 150, "IS", "g-lbl-d") +
    A(46, 158, 286, 46, "g-s") + T(290, 48, "LM", "g-lbl-s") +
    A(46, 100, 300, 100, "g-3") + T(52, 95, "BP (r mundial)", "g-lbl-3") +
    GUIA(172, 100) + DOT(172, 100)
  );

  // 18) Modelo de Solow (por trabajador)
  GR["solow"] = G(
    FR("por trabajador", "Capital (k)") +
    PL("46,168 90,108 140,80 195,66 260,57 296,54", "g-d") + T(300, 52, "f(k)", "g-lbl-d") +
    PL("46,168 90,138 140,120 195,110 260,104 296,102", "g-s") + T(300, 108, "s·f(k)", "g-lbl-s") +
    A(46, 168, 300, 60, "g-3") + T(300, 66, "δk", "g-lbl-3") +
    A(196, 168, 196, 109, "g-aux") + DOT(196, 109) +
    T(196, 182, "k*", "g-axis", "middle")
  );

  // 19) Curva de Phillips (corto y largo plazo)
  GR["phillips"] = G(
    FR("Inflación", "Desempleo") +
    PL("60,48 100,72 150,98 210,120 276,136", "g-d") + T(280, 134, "CPcp", "g-lbl-d") +
    A(175, 30, 175, 168, "g-3") + T(175, 26, "CPlp", "g-lbl-3", "middle") +
    T(175, 182, "NAIRU", "g-axis", "middle")
  );

  // 20) Mercado de divisas (tipo de cambio)
  GR["mercado-divisas"] = G(
    FR("Tipo de cambio", "Dólares") + D0 + S0 + GUIA(172, 98) + DOT(172, 98) +
    T(290, 150, "Demanda US$", "g-lbl-d", "end") +
    T(290, 46, "Oferta US$", "g-lbl-s", "end") +
    T(40, 102, "E*", "g-axis", "end")
  );

  window.GRAFICOS = GR;
})();
