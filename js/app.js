// =====================================================================
// Simulador Examen de Grado — lógica de la aplicación
// =====================================================================

const CLAVE_HISTORIAL = "examen-grado-historial";
const CLAVE_TEMA = "examen-grado-tema";
const CLAVE_ACCESO = "examen-grado-acceso";
const CLAVE_DEMO_USADA = "examen-grado-demo-usada";
const CLAVE_NOMBRE = "examen-grado-nombre";
const CLAVE_APELLIDO = "examen-grado-apellido";

// ---------------------------------------------------------------------
// Acceso freemium: demo hasta canjear un código (validado en Supabase).
// El backend hace que cada código sea de UN SOLO USO, amarrado a un
// máximo de dispositivos; los códigos "cortesía" son ilimitados.
// ---------------------------------------------------------------------
const CLAVE_DEVICE = "examen-grado-device";

// Identificador estable de este navegador/dispositivo (se crea una vez).
function obtenerDeviceId() {
  let id = localStorage.getItem(CLAVE_DEVICE);
  if (!id) {
    id = (window.crypto && crypto.randomUUID)
      ? crypto.randomUUID()
      : "dev-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 12);
    localStorage.setItem(CLAVE_DEVICE, id);
  }
  return id;
}

function estaDesbloqueado() {
  return localStorage.getItem(CLAVE_ACCESO) === "1";
}

// ¿Están puestas la URL y la clave anon de Supabase?
function supabaseConfigurado() {
  const u = window.ACCESO.supabaseUrl || "";
  const k = window.ACCESO.supabaseAnonKey || "";
  return /^https:\/\/.+\.supabase\.co/.test(u) && k.length > 20 && !k.startsWith("PEGA_AQUI");
}

// Canjea un código contra Supabase. Devuelve { ok, motivo?, tipo? }.
// nombre/apellido se envían para registrar quién canjeó (anti-compartir).
async function canjearCodigo(codigo, nombre, apellido) {
  const limpio = (codigo || "").trim().toUpperCase().replace(/\s+/g, "");
  if (!limpio) return { ok: false, motivo: "invalido" };
  if (!supabaseConfigurado()) return { ok: false, motivo: "config" };
  try {
    const url = window.ACCESO.supabaseUrl.replace(/\/+$/, "") + "/rest/v1/rpc/redeem_code";
    const headers = {
      "apikey": window.ACCESO.supabaseAnonKey,
      "Authorization": "Bearer " + window.ACCESO.supabaseAnonKey,
      "Content-Type": "application/json"
    };
    // Si la app usa un schema aislado, hay que decirle a Supabase cuál (PostgREST).
    const schema = (window.ACCESO.supabaseSchema || "").trim();
    if (schema) {
      headers["Content-Profile"] = schema;
      headers["Accept-Profile"] = schema;
    }
    const base = { p_codigo: limpio, p_device: obtenerDeviceId() };
    const conNombre = { ...base, p_nombre: (nombre || "").trim() || null, p_apellido: (apellido || "").trim() || null };
    let res = await fetch(url, { method: "POST", headers, body: JSON.stringify(conNombre) });
    // Si el backend aún no tiene la versión que guarda el nombre (función de 2 args),
    // PostgREST responde 404: reintenta sin esos campos para no romper el canje.
    if (res.status === 404) {
      res = await fetch(url, { method: "POST", headers, body: JSON.stringify(base) });
    }
    if (!res.ok) return { ok: false, motivo: "red" };
    const data = await res.json();
    return (data && typeof data === "object") ? data : { ok: false, motivo: "red" };
  } catch (e) {
    return { ok: false, motivo: "red" };
  }
}

// Limita una lista de preguntas al cupo demo cuando está bloqueado
function limitarDemo(preguntas) {
  return estaDesbloqueado() ? preguntas : preguntas.slice(0, window.ACCESO.demoPorMateria);
}

function abrirModalAcceso(mensaje) {
  $("#modal-mensaje").textContent = mensaje || "Con el acceso completo desbloqueas las más de 500 preguntas, el modo Examen Oficial y la corrección con IA.";
  // Mensaje de venta + botón de WhatsApp (si hay número configurado).
  const cont = $("#modal-contacto");
  cont.textContent = window.ACCESO.contactoCompra || "";
  const numero = (window.ACCESO.whatsapp || "").replace(/\D/g, "");
  if (numero) {
    const texto = encodeURIComponent(window.ACCESO.whatsappTexto || "Hola, quiero el acceso completo.");
    const a = document.createElement("a");
    a.href = `https://wa.me/${numero}?text=${texto}`;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = "📱 Escríbeme por WhatsApp";
    a.style.cssText = "display:inline-block;margin-top:12px;padding:10px 18px;background:#25D366;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;";
    cont.appendChild(document.createElement("br"));
    cont.appendChild(a);
  }
  $("#modal-estado").textContent = "";
  $("#modal-codigo").value = "";
  // Prellenar el nombre/apellido si el usuario ya los había puesto antes
  $("#modal-nombre").value = obtenerNombre();
  $("#modal-apellido").value = obtenerApellido();
  $("#modal-acceso").classList.remove("hidden");
  (obtenerNombre() ? $("#modal-codigo") : $("#modal-nombre")).focus();
}

function cerrarModalAcceso() {
  $("#modal-acceso").classList.add("hidden");
}

function desbloquear() {
  localStorage.setItem(CLAVE_ACCESO, "1");
  reflejarAcceso();
}

// ¿El usuario ya gastó su prueba gratis (un examen)?
function demoUsada() {
  return localStorage.getItem(CLAVE_DEMO_USADA) === "1";
}

function marcarDemoUsada() {
  localStorage.setItem(CLAVE_DEMO_USADA, "1");
  reflejarAcceso();
}

// ---- Perfil ("cuenta" local: nombre + apellido, guardado en el navegador) ----
function obtenerNombre() { return (localStorage.getItem(CLAVE_NOMBRE) || "").trim(); }
function obtenerApellido() { return (localStorage.getItem(CLAVE_APELLIDO) || "").trim(); }
function guardarPerfil(nombre, apellido) {
  localStorage.setItem(CLAVE_NOMBRE, (nombre || "").trim());
  localStorage.setItem(CLAVE_APELLIDO, (apellido || "").trim());
}

// Mensaje de bienvenida personalizado y motivador (elige uno al azar).
function saludoPersonal(nombre) {
  const n = nombre || "crack";
  const mensajes = [
    `¡Hola de nuevo, ${n}! 🎓 Hoy sumamos puntos para ese título.`,
    `¡Qué bueno verte, ${n}! 💪 El 7,0 no se estudia solo… ¡vamos!`,
    `¡Arriba, ${n}! ✨ Cada pregunta que practicas te acerca al grado.`,
    `¡A darle, ${n}! 🧠 Tu yo del futuro te lo va a agradecer.`,
    `¡${n}, qué gusto tenerte de vuelta! ☕ Respira, enfócate y a practicar.`,
    `¡${n}, crack! 🔥 Un examen más y estás más cerca de aprobar.`,
    `¡Vamos que se puede, ${n}! 🚀 El grado es tuyo, solo falta prepararlo.`,
    `¡Hola, ${n}! 📚 No es suerte, es práctica — y aquí te sobra.`
  ];
  return mensajes[Math.floor(Math.random() * mensajes.length)];
}

// Actualiza la interfaz según el estado de acceso (demo vs completo)
function reflejarAcceso() {
  const libre = estaDesbloqueado();
  $("#banner-demo").classList.toggle("hidden", libre);
  const nombreConfig = obtenerNombre();
  const tituloBase = nombreConfig ? `${nombreConfig}, configura tu examen` : "Configura tu examen";
  $("#titulo-config").textContent = libre ? tituloBase : tituloBase + " (versión demo)";
  // Texto del banner según si aún tiene su prueba gratis o ya la usó
  const bannerTexto = $("#banner-demo-texto");
  if (bannerTexto && !libre) {
    bannerTexto.innerHTML = demoUsada()
      ? "<strong>🔒 Ya usaste tu prueba gratis</strong> — desbloquea el <strong>acceso completo</strong> (+500 preguntas, Examen Oficial y corrección con IA) por <strong>$5.000</strong> (pago único)."
      : "<strong>🎁 Prueba gratis</strong> — tienes <strong>1 examen de práctica gratis</strong>. Después, desbloquea las <strong>+500 preguntas</strong>, el <strong>Examen Oficial</strong> y la <strong>corrección con IA</strong>.";
  }
  // Marca el chip de examen oficial como bloqueado cuando está en demo
  const chipOficial = document.querySelector('#lista-materias .chip[data-materia="oficial"]');
  if (chipOficial) {
    chipOficial.classList.toggle("chip-bloqueado", !libre);
    chipOficial.textContent = libre ? "🏛️ Examen oficial (formato real)" : "🔒 Examen oficial (acceso completo)";
  }

  // Saludo personalizado en el inicio (si tiene cuenta y acceso completo)
  const saludoEl = $("#saludo-inicio");
  if (saludoEl) {
    if (libre && obtenerNombre()) {
      saludoEl.textContent = saludoPersonal(obtenerNombre());
      saludoEl.classList.remove("hidden");
    } else {
      saludoEl.classList.add("hidden");
    }
  }

  // Pantalla de inicio: botones según estado (pagado / demo usada / demo disponible)
  const btnDemo = $("#btn-inicio-demo");
  const btnPagar = $("#btn-inicio-pagar");
  const notaInicio = $("#inicio-nota");
  if (btnDemo && btnPagar && notaInicio) {
    if (libre) {
      btnDemo.textContent = "Entrar a practicar";
      btnDemo.disabled = false;
      btnPagar.classList.add("hidden");
      notaInicio.textContent = "✅ Acceso completo activo. ¡A estudiar!";
    } else if (demoUsada()) {
      btnDemo.textContent = "🔒 Ya usaste tu prueba gratis";
      btnDemo.disabled = true;
      btnPagar.classList.remove("hidden");
      btnPagar.textContent = "🔓 Desbloquear acceso completo — $5.000";
      btnPagar.classList.remove("btn-secundario");
      btnPagar.classList.add("btn-primario");
      notaInicio.textContent = "Desbloquea las +500 preguntas, el Examen Oficial y la corrección con IA por $5.000 (pago único).";
    } else {
      btnDemo.textContent = "🎁 Probar demo gratis";
      btnDemo.disabled = false;
      btnPagar.classList.remove("hidden");
      btnPagar.textContent = "🔓 Acceso completo — $5.000";
      btnPagar.classList.remove("btn-primario");
      btnPagar.classList.add("btn-secundario");
      notaInicio.textContent = "La demo incluye 1 examen de práctica gratis, sin registro.";
    }
  }
}

// Pantalla de inicio: navegación y llamadas a la acción
function iniciarInicio() {
  $("#btn-inicio-demo").addEventListener("click", () => {
    if (!estaDesbloqueado() && demoUsada()) {
      abrirModalAcceso("🔒 Ya usaste tu prueba gratis. Desbloquea el acceso completo por $5.000 (pago único): más de 500 preguntas, el Examen Oficial y la corrección con IA.");
      return;
    }
    mostrarPantalla("pantalla-config");
  });
  $("#btn-inicio-pagar").addEventListener("click", () => abrirModalAcceso());
  $("#btn-inicio-codigo").addEventListener("click", () => abrirModalAcceso());
  $("#btn-inicio-volver").addEventListener("click", () => mostrarPantalla("pantalla-inicio"));
  // El logo de la barra lleva al inicio
  const marca = document.querySelector(".marca");
  if (marca) {
    marca.style.cursor = "pointer";
    marca.title = "Ir al inicio";
    marca.addEventListener("click", () => mostrarPantalla("pantalla-inicio"));
  }
  reflejarAcceso();
}

function iniciarAcceso() {
  $("#btn-ingresar-codigo").addEventListener("click", () => abrirModalAcceso());
  $("#btn-como-obtener").addEventListener("click", () => abrirModalAcceso());
  $("#modal-cerrar").addEventListener("click", cerrarModalAcceso);
  $("#modal-acceso").addEventListener("click", (e) => {
    if (e.target === $("#modal-acceso")) cerrarModalAcceso();
  });
  $("#modal-validar").addEventListener("click", canjearYReflejar);
  $("#modal-codigo").addEventListener("keydown", (e) => {
    if (e.key === "Enter") canjearYReflejar();
  });
  reflejarAcceso();
}

// Valida el código escrito, muestra estado de carga y refleja el resultado.
async function canjearYReflejar() {
  const boton = $("#modal-validar");
  const estado = $("#modal-estado");
  const nombre = $("#modal-nombre").value.trim();
  const apellido = $("#modal-apellido").value.trim();
  const codigo = $("#modal-codigo").value;
  if (!nombre) {
    estado.textContent = "Escribe tu nombre para crear tu acceso.";
    estado.style.color = "var(--peligro)";
    $("#modal-nombre").focus();
    return;
  }
  if (!codigo.trim()) {
    estado.textContent = "Escribe tu código de acceso.";
    estado.style.color = "var(--peligro)";
    $("#modal-codigo").focus();
    return;
  }
  boton.disabled = true;
  estado.style.color = "";
  estado.textContent = "⏳ Validando código…";
  const r = await canjearCodigo(codigo, nombre, apellido);
  boton.disabled = false;
  if (r.ok) {
    guardarPerfil(nombre, apellido);
    desbloquear();
    estado.textContent = r.tipo === "cortesia"
      ? `🎁 ¡Listo, ${nombre}! Acceso cortesía activado — ya tienes las más de 500 preguntas.`
      : `🎉 ¡Listo, ${nombre}! Tu acceso quedó activo — ya tienes las más de 500 preguntas.`;
    estado.style.color = "var(--exito)";
    setTimeout(cerrarModalAcceso, 1800);
  } else {
    const mensajes = {
      invalido: "❌ Código no válido. Revisa que esté bien escrito.",
      limite: "❌ Este código ya se usó en el máximo de dispositivos. Si es tuyo y cambiaste de equipo, escríbeme para reactivarlo.",
      rate: "⏳ Demasiados intentos. Espera unos minutos e intenta de nuevo.",
      red: "⚠️ No se pudo conectar para validar. Revisa tu conexión a internet e intenta de nuevo.",
      config: "⚠️ El sistema de códigos aún no está activo. Escríbeme para obtener acceso.",
      dispositivo: "⚠️ No se pudo identificar este dispositivo. Prueba en otro navegador."
    };
    estado.textContent = mensajes[r.motivo] || "❌ No se pudo validar el código. Intenta de nuevo.";
    estado.style.color = "var(--peligro)";
  }
}

const CLAVE_GEMINI = "examen-grado-gemini-key";
const CLAVE_MODELO_GEMINI = "examen-grado-gemini-modelo";
// Se prueban en orden hasta encontrar uno disponible para la cuenta;
// el que funciona queda recordado. "gemini-flash-latest" es un alias de
// Google que apunta siempre al Flash más reciente.
const MODELOS_GEMINI = [
  "gemini-flash-latest",
  "gemini-3.5-flash",
  "gemini-3-flash",
  "gemini-3.1-flash-lite",
  "gemini-2.5-flash"
];

// Formato del examen oficial: preguntas por área (cada área pondera 20 pts)
const FORMATO_OFICIAL = [
  { id: "economia", n: 4 },
  { id: "gestion-personas", n: 3 },
  { id: "marketing", n: 3 },
  { id: "administracion", n: 2 },
  { id: "estrategia", n: 2 }
];
const MINUTOS_OFICIAL = 220; // ~2,2 min por punto, como el examen real
const EXIGENCIA = 0.6; // 60% para nota 4.0 (escala chilena 1.0 - 7.0)

const estado = {
  materias: [],        // ids de materias elegidas (modo normal, una o varias)
  modoOficial: false,  // true cuando está elegido el Examen oficial
  dificultad: "media",
  numPreguntas: 5,
  usarTimer: true,
  minPorPregunta: 15,
  preguntas: [],      // preguntas del examen en curso
  respuestas: [],     // respuesta escrita por pregunta
  criteriosMarcados: [], // por pregunta: Set de índices de criterios cumplidos
  indice: 0,
  timerId: null,
  segundosRestantes: 0
};

// ---------------------------------------------------------------------
// Utilidades
// ---------------------------------------------------------------------
const $ = (sel) => document.querySelector(sel);

function mostrarPantalla(id) {
  document.querySelectorAll(".pantalla").forEach(p => p.classList.add("hidden"));
  $("#" + id).classList.remove("hidden");
  // La corrección usa todo el ancho para mostrar las dos "hojas" lado a lado
  document.body.classList.toggle("vista-amplia", id === "pantalla-correccion");
  window.scrollTo(0, 0);
}

function barajar(arr) {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function escaparHtml(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

// Nota escala chilena 1.0 - 7.0 con exigencia del 60%
function calcularNota(porcentaje) {
  let nota;
  if (porcentaje < EXIGENCIA) {
    nota = 1 + 3 * (porcentaje / EXIGENCIA);
  } else {
    nota = 4 + 3 * ((porcentaje - EXIGENCIA) / (1 - EXIGENCIA));
  }
  return Math.round(nota * 10) / 10;
}

// ---------------------------------------------------------------------
// Pantalla: configuración
// ---------------------------------------------------------------------
function iniciarConfig() {
  const contenedor = $("#lista-materias");
  contenedor.innerHTML = "";
  const opciones = [
    { id: "oficial", nombre: "🏛️ Examen oficial (formato real)" },
    ...BANCO.materias.map(m => ({ id: m.id, nombre: m.nombre })),
    { id: "todas", nombre: "🎯 Mix libre (todas)" }
  ];
  const todosLosIds = BANCO.materias.map(m => m.id);
  opciones.forEach((m) => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.textContent = m.nombre;
    btn.dataset.materia = m.id;
    btn.addEventListener("click", () => {
      if (m.id === "oficial") {
        // Modo especial y exclusivo: deselecciona todas las materias.
        estado.modoOficial = true;
        estado.materias = [];
      } else if (m.id === "todas") {
        // Atajo: selecciona todas las materias.
        estado.modoOficial = false;
        estado.materias = todosLosIds.slice();
      } else {
        // Materia individual: se agrega o se quita (selección múltiple).
        estado.modoOficial = false;
        estado.materias = estado.materias.includes(m.id)
          ? estado.materias.filter(id => id !== m.id)
          : [...estado.materias, m.id];
      }
      pintarChipsMateria();
      actualizarModoConfig();
    });
    contenedor.appendChild(btn);
  });
  // Por defecto: Examen oficial seleccionado (como antes).
  estado.modoOficial = true;
  estado.materias = [];
  pintarChipsMateria();
  actualizarModoConfig();

  $("#lista-dificultad").querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      $("#lista-dificultad").querySelectorAll(".chip").forEach(c => c.classList.remove("seleccionado"));
      btn.classList.add("seleccionado");
      estado.dificultad = btn.dataset.dif;
    });
  });

  $("#num-preguntas").addEventListener("input", (e) => {
    estado.numPreguntas = Number(e.target.value);
    $("#num-preguntas-valor").textContent = e.target.value;
  });

  $("#timer-min").addEventListener("input", (e) => {
    estado.minPorPregunta = Number(e.target.value);
    $("#timer-valor").textContent = e.target.value;
  });

  $("#usar-timer").addEventListener("change", (e) => {
    estado.usarTimer = e.target.checked;
    $("#timer-min").disabled = !e.target.checked;
  });

  $("#btn-comenzar").addEventListener("click", comenzarExamen);
  $("#btn-ver-historial").addEventListener("click", mostrarHistorial);
}

// ---------------------------------------------------------------------
// Pantalla: examen
// ---------------------------------------------------------------------
// Refleja en los chips qué está seleccionado (oficial, materias y "todas")
function pintarChipsMateria() {
  const contenedor = $("#lista-materias");
  const total = BANCO.materias.length;
  contenedor.querySelectorAll(".chip").forEach(chip => {
    const id = chip.dataset.materia;
    let activo;
    if (id === "oficial") {
      activo = estado.modoOficial;
    } else if (id === "todas") {
      activo = !estado.modoOficial && estado.materias.length === total && total > 0;
    } else {
      activo = !estado.modoOficial && estado.materias.includes(id);
    }
    chip.classList.toggle("seleccionado", activo);
  });
}

// Muestra/oculta los controles que no aplican al modo examen oficial
function actualizarModoConfig() {
  const oficial = estado.modoOficial;
  $("#nota-oficial").classList.toggle("hidden", !oficial);
  $("#campo-dificultad").classList.toggle("hidden", oficial);
  $("#campo-num").classList.toggle("hidden", oficial);
}

// Arma el examen con el formato oficial: n preguntas por área, agrupadas,
// solo dificultad media/difícil (completa con fáciles si faltaran)
function construirExamenOficial() {
  const preguntas = [];
  FORMATO_OFICIAL.forEach(f => {
    const materia = BANCO.materias.find(m => m.id === f.id);
    if (!materia) return;
    const preferidas = barajar(materia.preguntas.filter(p => p.dificultad !== "facil"));
    const faciles = barajar(materia.preguntas.filter(p => p.dificultad === "facil"));
    [...preferidas, ...faciles].slice(0, f.n).forEach(p => {
      preguntas.push({ ...p, materiaId: materia.id, materiaNombre: materia.nombre, tema: `${materia.nombre} · ${p.tema}` });
    });
  });
  return preguntas;
}

// Une las preguntas de todas las materias elegidas. Si hay más de una,
// antepone el nombre de la materia al tema para poder distinguirlas.
function obtenerPoolPreguntas() {
  const materias = BANCO.materias.filter(m => estado.materias.includes(m.id));
  const multi = materias.length > 1;
  return materias.flatMap(m =>
    limitarDemo(m.preguntas).map(p => ({
      ...p,
      materiaId: m.id,
      materiaNombre: m.nombre,
      tema: multi ? `${m.nombre} · ${p.tema}` : p.tema
    })));
}

function comenzarExamen() {
  if (estado.modoOficial && !estaDesbloqueado()) {
    abrirModalAcceso("El modo Examen Oficial es parte del acceso completo.");
    return;
  }

  // Candado de la prueba gratis: si ya rindió su examen gratis y no ha pagado.
  if (!estaDesbloqueado() && demoUsada()) {
    abrirModalAcceso("🔒 Ya usaste tu prueba gratis. Desbloquea el acceso completo por $5.000 (pago único): más de 500 preguntas, el Examen Oficial y la corrección con IA.");
    return;
  }

  if (estado.modoOficial) {
    estado.preguntas = construirExamenOficial();
    if (estado.preguntas.length === 0) return;
  } else {
    if (estado.materias.length === 0) {
      alert("Elige al menos una materia (o el Examen oficial / Mix libre).");
      return;
    }
    let disponibles = obtenerPoolPreguntas();
    if (disponibles.length === 0) return;
    if (estado.dificultad !== "mixta") {
      disponibles = disponibles.filter(p => p.dificultad === estado.dificultad);
    }
    if (disponibles.length === 0) {
      alert("No hay preguntas con esa dificultad en las materias elegidas. Prueba con dificultad 'Mixta'.");
      return;
    }
    estado.preguntas = barajar(disponibles).slice(0, estado.numPreguntas);
  }

  estado.respuestas = estado.preguntas.map(() => "");
  estado.criteriosMarcados = estado.preguntas.map(() => new Set());
  estado.indice = 0;

  if (estado.usarTimer) {
    estado.segundosRestantes = estado.modoOficial
      ? MINUTOS_OFICIAL * 60
      : estado.preguntas.length * estado.minPorPregunta * 60;
    iniciarTimer();
  } else {
    $("#timer").classList.add("hidden");
  }

  // Consume la prueba gratis al iniciar el examen (solo usuarios en demo).
  if (!estaDesbloqueado()) marcarDemoUsada();

  renderPregunta();
  mostrarPantalla("pantalla-examen");
}

function iniciarTimer() {
  const timerEl = $("#timer");
  timerEl.classList.remove("hidden", "urgente");
  clearInterval(estado.timerId);
  const pintar = () => {
    const h = Math.floor(estado.segundosRestantes / 3600);
    const m = Math.floor((estado.segundosRestantes % 3600) / 60);
    const s = estado.segundosRestantes % 60;
    timerEl.textContent = h > 0
      ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
      : `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    if (estado.segundosRestantes <= 120) timerEl.classList.add("urgente");
  };
  pintar();
  estado.timerId = setInterval(() => {
    estado.segundosRestantes--;
    pintar();
    if (estado.segundosRestantes <= 0) {
      clearInterval(estado.timerId);
      guardarRespuestaActual();
      alert("⏰ Se acabó el tiempo. Pasamos a la corrección.");
      irACorreccion();
    }
  }, 1000);
}

function renderPregunta() {
  const p = estado.preguntas[estado.indice];
  $("#examen-progreso").textContent = `Pregunta ${estado.indice + 1} de ${estado.preguntas.length}`;
  $("#examen-tema").textContent = p.tema;
  const difEl = $("#examen-dificultad");
  difEl.textContent = p.dificultad.charAt(0).toUpperCase() + p.dificultad.slice(1);
  difEl.className = "etiqueta-dif " + p.dificultad;
  $("#examen-salio").classList.toggle("hidden", !p.salioEnExamen);
  $("#examen-enunciado").textContent = p.enunciado;
  $("#examen-respuesta").value = estado.respuestas[estado.indice];

  $("#btn-anterior").disabled = estado.indice === 0;
  const esUltima = estado.indice === estado.preguntas.length - 1;
  $("#btn-siguiente").classList.toggle("hidden", esUltima);
  $("#examen-respuesta").focus();
}

function guardarRespuestaActual() {
  estado.respuestas[estado.indice] = $("#examen-respuesta").value;
}

function irACorreccion() {
  clearInterval(estado.timerId);
  $("#timer").classList.add("hidden");
  renderCorreccion();
  $("#btn-corregir-ia").classList.toggle("hidden", !obtenerGeminiKey() || !estaDesbloqueado());
  $("#btn-corregir-ia").disabled = false;
  $("#ia-progreso").classList.add("hidden");
  mostrarPantalla("pantalla-correccion");
}

// ---------------------------------------------------------------------
// Pantalla: corrección guiada
// ---------------------------------------------------------------------
function renderCorreccion() {
  const contenedor = $("#lista-correccion");
  contenedor.innerHTML = "";

  estado.preguntas.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card";

    const respuesta = estado.respuestas[i].trim();
    const criteriosHtml = p.criterios.map((c, j) => `
      <label class="criterio">
        <input type="checkbox" data-pregunta="${i}" data-criterio="${j}">
        <span>${escaparHtml(c.texto)} <em>(${c.peso} pts)</em></span>
      </label>
    `).join("");

    const erroresHtml = (p.erroresComunes ?? []).map(e =>
      `<div class="errores-comunes">⚠️ ${escaparHtml(e)}</div>`
    ).join("");

    card.innerHTML = `
      <div class="examen-cabecera">
        <strong>Pregunta ${i + 1}</strong>
        <span class="etiqueta-tema">${escaparHtml(p.tema)}</span>
        <span class="etiqueta-dif ${p.dificultad}">${p.dificultad}</span>
        ${p.salioEnExamen ? '<span class="etiqueta-salio">⭐ Tema visto en exámenes reales</span>' : ""}
      </div>
      <p class="enunciado">${escaparHtml(p.enunciado)}</p>

      <div class="comparacion">
        <div class="columna-comparacion">
          <div class="subtitulo">Tu respuesta</div>
          <div class="bloque-respuesta ${respuesta ? "" : "vacia"}">${respuesta ? escaparHtml(respuesta) : "(No respondiste esta pregunta)"}</div>
        </div>
        <div class="columna-comparacion">
          <div class="subtitulo">Respuesta modelo</div>
          <div class="bloque-respuesta">${escaparHtml(p.respuestaModelo)}</div>
        </div>
      </div>

      <div class="subtitulo">Pauta — marca lo que tu respuesta sí cubrió</div>
      ${criteriosHtml}

      <div class="subtitulo">Errores comunes</div>
      ${erroresHtml || "<p class='ayuda'>—</p>"}
    `;
    contenedor.appendChild(card);
  });

  contenedor.querySelectorAll("input[type=checkbox]").forEach(chk => {
    chk.addEventListener("change", () => {
      const i = Number(chk.dataset.pregunta);
      const j = Number(chk.dataset.criterio);
      if (chk.checked) estado.criteriosMarcados[i].add(j);
      else estado.criteriosMarcados[i].delete(j);
    });
  });
}

// ---------------------------------------------------------------------
// Pantalla: resultados
// ---------------------------------------------------------------------
function calcularResultados() {
  const porPregunta = estado.preguntas.map((p, i) => {
    const total = p.criterios.reduce((s, c) => s + c.peso, 0);
    const obtenido = p.criterios.reduce((s, c, j) =>
      s + (estado.criteriosMarcados[i].has(j) ? c.peso : 0), 0);
    return { pregunta: p, indice: i, obtenido, total, fraccion: total ? obtenido / total : 0 };
  });
  const total = porPregunta.reduce((s, r) => s + r.total, 0);
  const obtenido = porPregunta.reduce((s, r) => s + r.obtenido, 0);
  let porcentaje = total ? obtenido / total : 0;

  // Modo oficial: cada área pondera 20 puntos (total 100), como el examen real
  let areas = null;
  if (estado.modoOficial) {
    areas = FORMATO_OFICIAL
      .map(f => {
        const deArea = porPregunta.filter(rp => rp.pregunta.materiaId === f.id);
        if (deArea.length === 0) return null;
        const t = deArea.reduce((s, r) => s + r.total, 0);
        const o = deArea.reduce((s, r) => s + r.obtenido, 0);
        return {
          id: f.id,
          nombre: deArea[0].pregunta.materiaNombre,
          puntos: t ? Math.round(20 * o / t * 10) / 10 : 0,
          fraccion: t ? o / t : 0
        };
      })
      .filter(Boolean);
    const total100 = areas.reduce((s, a) => s + a.puntos, 0);
    porcentaje = total100 / 100;
  }

  return { porPregunta, total, obtenido, porcentaje, areas, nota: calcularNota(porcentaje) };
}

function mostrarResultados() {
  const r = calcularResultados();

  const notaEl = $("#resultado-nota");
  notaEl.textContent = r.nota.toFixed(1);
  notaEl.className = "nota-grande " + (r.nota >= 4 ? "aprobado" : "reprobado");
  $("#resultado-porcentaje").textContent = estado.modoOficial
    ? `${Math.round(r.porcentaje * 100)} de 100 puntos — ${r.nota >= 4 ? "Aprobado ✅" : "Reprobado ❌"}`
    : `${r.obtenido} de ${r.total} puntos (${Math.round(r.porcentaje * 100)}%) — ${r.nota >= 4 ? "Aprobado ✅" : "Reprobado ❌"}`;

  // Desglose por área (solo modo oficial)
  const areasHtml = !r.areas ? "" : r.areas.map(a => {
    const pct = Math.round(a.fraccion * 100);
    const color = a.fraccion >= 0.6 ? "var(--exito)" : a.fraccion >= 0.4 ? "var(--advertencia)" : "var(--peligro)";
    return `
      <div class="resultado-pregunta">
        <span><strong>${escaparHtml(a.nombre)}</strong></span>
        <div class="barra"><div style="width:${pct}%; background:${color}"></div></div>
        <span><strong>${a.puntos}</strong> / 20 pts</span>
      </div>`;
  }).join("") + "<hr style='border:none; border-top:1px solid var(--borde); margin:14px 0'>";

  // Detalle por pregunta
  $("#resultado-detalle").innerHTML = areasHtml + r.porPregunta.map(rp => {
    const pct = Math.round(rp.fraccion * 100);
    const color = rp.fraccion >= 0.6 ? "var(--exito)" : rp.fraccion >= 0.4 ? "var(--advertencia)" : "var(--peligro)";
    return `
      <div class="resultado-pregunta">
        <span>P${rp.indice + 1} · ${escaparHtml(rp.pregunta.tema)}</span>
        <div class="barra"><div style="width:${pct}%; background:${color}"></div></div>
        <span>${pct}%</span>
      </div>`;
  }).join("");

  // Feedback por pregunta con criterios faltantes
  const feedback = r.porPregunta.filter(rp => rp.fraccion < 1);
  $("#resultado-feedback").innerHTML = feedback.length === 0
    ? `<div class="card"><h3>🎉 ¡Examen perfecto!</h3><p>Cubriste todos los criterios de la pauta.</p></div>`
    : `<div class="card"><h3>Feedback — qué reforzar</h3>` + feedback.map(rp => {
        const faltantes = rp.pregunta.criterios
          .filter((c, j) => !estado.criteriosMarcados[rp.indice].has(j))
          .map(c => `<li>${escaparHtml(c.texto)}</li>`).join("");
        const clase = rp.fraccion >= 0.4 ? "parcial" : "";
        return `
          <div class="feedback-item ${clase}">
            <strong>P${rp.indice + 1} · ${escaparHtml(rp.pregunta.tema)} (${Math.round(rp.fraccion * 100)}%)</strong>
            <p>Te faltó cubrir:</p>
            <ul>${faltantes}</ul>
          </div>`;
      }).join("") + `</div>`;

  guardarEnHistorial(r);
  mostrarPantalla("pantalla-resultados");
}

// ---------------------------------------------------------------------
// Historial (localStorage)
// ---------------------------------------------------------------------
function leerHistorial() {
  try { return JSON.parse(localStorage.getItem(CLAVE_HISTORIAL)) ?? []; }
  catch { return []; }
}

function guardarEnHistorial(r) {
  const historial = leerHistorial();
  const total = BANCO.materias.length;
  let etiquetaMateria;
  if (estado.modoOficial) {
    etiquetaMateria = "🏛️ Examen oficial";
  } else if (estado.materias.length === total) {
    etiquetaMateria = "Mix libre";
  } else if (estado.materias.length === 1) {
    etiquetaMateria = BANCO.materias.find(m => m.id === estado.materias[0])?.nombre ?? "—";
  } else {
    etiquetaMateria = `${estado.materias.length} materias`;
  }
  historial.unshift({
    fecha: new Date().toISOString(),
    materia: etiquetaMateria,
    dificultad: estado.dificultad,
    numPreguntas: estado.preguntas.length,
    porcentaje: Math.round(r.porcentaje * 100),
    nota: r.nota
  });
  localStorage.setItem(CLAVE_HISTORIAL, JSON.stringify(historial.slice(0, 100)));
}

function mostrarHistorial() {
  const historial = leerHistorial();
  $("#lista-historial").innerHTML = historial.length === 0
    ? "<p class='ayuda'>Aún no has rendido ningún examen.</p>"
    : historial.map(h => `
        <div class="historial-item">
          <span>${new Date(h.fecha).toLocaleString("es-CL", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
          <span>${escaparHtml(h.materia)} · ${h.dificultad} · ${h.numPreguntas} preguntas</span>
          <span class="historial-nota ${h.nota >= 4 ? "aprobado" : "reprobado"}">${h.nota.toFixed(1)} (${h.porcentaje}%)</span>
        </div>`).join("");
  mostrarPantalla("pantalla-historial");
}

// ---------------------------------------------------------------------
// Eventos globales
// ---------------------------------------------------------------------
function iniciarEventos() {
  $("#btn-anterior").addEventListener("click", () => {
    guardarRespuestaActual();
    if (estado.indice > 0) { estado.indice--; renderPregunta(); }
  });
  $("#btn-siguiente").addEventListener("click", () => {
    guardarRespuestaActual();
    if (estado.indice < estado.preguntas.length - 1) { estado.indice++; renderPregunta(); }
  });
  $("#btn-terminar").addEventListener("click", () => {
    guardarRespuestaActual();
    const sinResponder = estado.respuestas.filter(r => !r.trim()).length;
    const msg = sinResponder > 0
      ? `Tienes ${sinResponder} pregunta(s) sin responder. ¿Terminar igualmente?`
      : "¿Terminar el examen y pasar a la corrección?";
    if (confirm(msg)) irACorreccion();
  });
  $("#btn-ver-resultados").addEventListener("click", mostrarResultados);
  $("#btn-nuevo-examen").addEventListener("click", () => mostrarPantalla("pantalla-config"));
  $("#btn-volver-config").addEventListener("click", () => mostrarPantalla("pantalla-config"));
  $("#btn-borrar-historial").addEventListener("click", () => {
    if (confirm("¿Borrar todo el historial de exámenes?")) {
      localStorage.removeItem(CLAVE_HISTORIAL);
      mostrarHistorial();
    }
  });
}

// ---------------------------------------------------------------------
// Explorador del banco de preguntas
// ---------------------------------------------------------------------
const bancoFiltro = { materia: "todas", dificultad: "todas", texto: "", soloExamen: false };

function iniciarBanco() {
  const contenedor = $("#banco-materias");
  const opciones = [
    { id: "todas", nombre: "Todas" },
    ...BANCO.materias.map(m => ({ id: m.id, nombre: m.nombre }))
  ];
  opciones.forEach((m, i) => {
    const btn = document.createElement("button");
    btn.className = "chip" + (i === 0 ? " seleccionado" : "");
    btn.textContent = m.nombre;
    btn.addEventListener("click", () => {
      contenedor.querySelectorAll(".chip").forEach(c => c.classList.remove("seleccionado"));
      btn.classList.add("seleccionado");
      bancoFiltro.materia = m.id;
      renderBanco();
    });
    contenedor.appendChild(btn);
  });

  $("#banco-dificultad").querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      $("#banco-dificultad").querySelectorAll(".chip").forEach(c => c.classList.remove("seleccionado"));
      btn.classList.add("seleccionado");
      bancoFiltro.dificultad = btn.dataset.dif;
      renderBanco();
    });
  });

  $("#banco-buscar").addEventListener("input", (e) => {
    bancoFiltro.texto = e.target.value.trim().toLowerCase();
    renderBanco();
  });

  $("#banco-solo-examen").addEventListener("change", (e) => {
    bancoFiltro.soloExamen = e.target.checked;
    renderBanco();
  });

  $("#btn-ver-banco").addEventListener("click", () => {
    renderBanco();
    mostrarPantalla("pantalla-banco");
  });
  $("#btn-banco-volver").addEventListener("click", () => mostrarPantalla("pantalla-config"));
}

function renderBanco() {
  const lista = $("#banco-lista");
  let preguntas = BANCO.materias.flatMap(m =>
    limitarDemo(m.preguntas).map(p => ({ ...p, materiaId: m.id, materiaNombre: m.nombre })));

  if (bancoFiltro.materia !== "todas") {
    preguntas = preguntas.filter(p => p.materiaId === bancoFiltro.materia);
  }
  if (bancoFiltro.dificultad !== "todas") {
    preguntas = preguntas.filter(p => p.dificultad === bancoFiltro.dificultad);
  }
  if (bancoFiltro.soloExamen) {
    preguntas = preguntas.filter(p => p.salioEnExamen);
  }
  if (bancoFiltro.texto) {
    // Busca también dentro de la respuesta modelo y la pauta (ej: "Kotter"
    // aparece en la pauta de un caso aunque el enunciado no lo nombre)
    preguntas = preguntas.filter(p => {
      const texto = [p.enunciado, p.tema, p.respuestaModelo,
        ...p.criterios.map(c => c.texto)].join(" ").toLowerCase();
      return texto.includes(bancoFiltro.texto);
    });
  }

  const total = BANCO.materias.reduce((s, m) => s + m.preguntas.length, 0);
  const disponibles = estaDesbloqueado()
    ? total
    : BANCO.materias.reduce((s, m) => s + limitarDemo(m.preguntas).length, 0);
  $("#banco-contador").textContent = estaDesbloqueado()
    ? `Mostrando ${preguntas.length} de ${total} preguntas.`
    : `Versión demo: mostrando ${preguntas.length} de ${disponibles} preguntas disponibles (${total - disponibles} más con el acceso completo).`;

  lista.innerHTML = preguntas.map(p => {
    const criteriosHtml = p.criterios.map(c =>
      `<li>${escaparHtml(c.texto)} <em>(${c.peso} pts)</em></li>`).join("");
    const erroresHtml = (p.erroresComunes ?? []).map(e =>
      `<div class="errores-comunes">⚠️ ${escaparHtml(e)}</div>`).join("");
    const totalPts = p.criterios.reduce((s, c) => s + c.peso, 0);
    return `
      <div class="card">
        <div class="examen-cabecera">
          <strong>${escaparHtml(p.id)}</strong>
          <span class="etiqueta-tema">${escaparHtml(p.materiaNombre)} · ${escaparHtml(p.tema)}</span>
          <span class="etiqueta-dif ${p.dificultad}">${p.dificultad}</span>
          <span>${totalPts} pts</span>
          ${p.salioEnExamen ? '<span class="etiqueta-salio">⭐ Visto en exámenes</span>' : ""}
        </div>
        <p class="enunciado">${escaparHtml(p.enunciado)}</p>
        <details class="banco-detalle">
          <summary>Ver respuesta modelo y pauta</summary>
          <div class="subtitulo">Respuesta modelo</div>
          <div class="bloque-respuesta">${escaparHtml(p.respuestaModelo)}</div>
          <div class="subtitulo">Pauta de corrección</div>
          <ul>${criteriosHtml}</ul>
          <div class="subtitulo">Errores comunes</div>
          ${erroresHtml || "<p class='ayuda'>—</p>"}
        </details>
      </div>`;
  }).join("") || "<div class='card'><p class='ayuda'>No hay preguntas que coincidan con los filtros.</p></div>";
}

// ---------------------------------------------------------------------
// Corrección automática con IA (Google Gemini, API key del usuario)
// ---------------------------------------------------------------------
function obtenerGeminiKey() {
  return localStorage.getItem(CLAVE_GEMINI) ?? "";
}

function pintarEstadoKey() {
  const key = obtenerGeminiKey();
  $("#estado-key").textContent = key
    ? `✅ Key guardada (termina en …${key.slice(-4)}). La corrección con IA está activa.`
    : "";
  $("#btn-borrar-key").classList.toggle("hidden", !key);
}

function iniciarIA() {
  pintarEstadoKey();

  $("#btn-guardar-key").addEventListener("click", () => {
    const key = $("#gemini-key").value.trim();
    if (!key) { alert("Pega tu API key primero."); return; }
    if (!key.startsWith("AIza") && !key.startsWith("AQ.")) {
      if (!confirm("La key no tiene un formato habitual de Gemini (AIza… o AQ.…). ¿Guardarla igual?")) return;
    }
    localStorage.setItem(CLAVE_GEMINI, key);
    $("#gemini-key").value = "";
    pintarEstadoKey();
  });

  $("#btn-borrar-key").addEventListener("click", () => {
    localStorage.removeItem(CLAVE_GEMINI);
    pintarEstadoKey();
  });

  $("#btn-corregir-ia").addEventListener("click", corregirConIA);
}

const ESQUEMA_EVALUACION = {
  type: "OBJECT",
  properties: {
    criterios: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          indice: { type: "INTEGER" },
          cumplido: { type: "BOOLEAN" },
          justificacion: { type: "STRING" }
        },
        required: ["indice", "cumplido", "justificacion"]
      }
    },
    comentario: { type: "STRING" }
  },
  required: ["criterios", "comentario"]
};

function construirPromptCorreccion(pregunta, respuestaAlumno) {
  const criterios = pregunta.criterios
    .map((c, j) => `${j}) ${c.texto} (${c.peso} pts)`)
    .join("\n");
  return `Eres un profesor corrector del Examen de Grado de Ingeniería Comercial (Chile). Corrige la respuesta de un alumno usando estrictamente la pauta oficial.

PREGUNTA:
${pregunta.enunciado}

RESPUESTA MODELO (referencia de contenido correcto):
${pregunta.respuestaModelo}

PAUTA DE CRITERIOS (evalúa cada uno por su índice):
${criterios}

RESPUESTA DEL ALUMNO:
${respuestaAlumno}

INSTRUCCIONES DE CORRECCIÓN:
- Para cada criterio decide si la respuesta del alumno lo cumple (cumplido: true/false).
- NO exijas redacción textual: acepta paráfrasis, sinónimos y otro orden si el concepto está correcto y explícito en la respuesta.
- Lo que no está escrito no existe: no des por cumplido algo que "se podría inferir" pero no se dice.
- Si el criterio pide una cantidad (ej. "dos ventajas") y el alumno entrega menos, NO se cumple.
- Si el criterio exige graficar, márcalo como NO cumplido salvo que el alumno describa correctamente el gráfico en texto; en la justificación recuérdale autoevaluar su dibujo en papel.
- Justificación breve por criterio (1 o 2 frases, en español).
- comentario: feedback global constructivo de 2 a 4 frases (qué estuvo bien, qué le faltó, qué repasar).`;
}

async function llamarGemini(key, modelo, pregunta, respuestaAlumno, avisar, reintento = false) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": key },
    body: JSON.stringify({
      contents: [{ parts: [{ text: construirPromptCorreccion(pregunta, respuestaAlumno) }] }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json",
        responseSchema: ESQUEMA_EVALUACION
      }
    })
  });

  if ((res.status === 429 || res.status === 503) && !reintento) {
    // Saturación o límite de frecuencia: avisar, esperar y reintentar una vez
    avisar?.(`el modelo ${modelo} está saturado, reintentando en 15 s…`);
    await new Promise(r => setTimeout(r, 15000));
    return llamarGemini(key, modelo, pregunta, respuestaAlumno, avisar, true);
  }
  if (!res.ok) {
    let detalle = `HTTP ${res.status}`;
    try { detalle = (await res.json()).error?.message ?? detalle; } catch {}
    const err = new Error(detalle);
    err.status = res.status;
    throw err;
  }

  const data = await res.json();
  const texto = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!texto) throw new Error("Gemini no devolvió contenido evaluable.");
  return JSON.parse(texto);
}

// ¿Error de credenciales? No tiene sentido probar otros modelos.
function esErrorDeKey(e) {
  if (e.status === 401 || e.status === 403) return true;
  return /api key|permission denied|unauthorized/i.test(e.message ?? "");
}

// ¿Vale la pena probar el siguiente modelo? (retirado, inexistente,
// saturado o con la cuota de ESE modelo agotada — cada modelo tiene la suya)
function convieneOtroModelo(e) {
  if (e.status === 404 || e.status === 429 || e.status === 503) return true;
  return /no longer available|not found|not available|not supported|deprecated|does not exist|high demand|overloaded|try again later|resource.?exhausted|quota/i
    .test(e.message ?? "");
}

// Prueba los modelos en orden y recuerda el que funciona para esta cuenta
async function evaluarConGemini(key, pregunta, respuestaAlumno, avisar) {
  const recordado = localStorage.getItem(CLAVE_MODELO_GEMINI);
  const lista = recordado
    ? [recordado, ...MODELOS_GEMINI.filter(m => m !== recordado)]
    : MODELOS_GEMINI;

  let ultimoError = null;
  for (const modelo of lista) {
    try {
      const resultado = await llamarGemini(key, modelo, pregunta, respuestaAlumno, avisar);
      localStorage.setItem(CLAVE_MODELO_GEMINI, modelo);
      return resultado;
    } catch (e) {
      if (esErrorDeKey(e) || !convieneOtroModelo(e)) throw e;
      if (modelo === recordado) localStorage.removeItem(CLAVE_MODELO_GEMINI);
      ultimoError = e;
      avisar?.(`${modelo} no disponible, probando otro modelo…`);
    }
  }
  throw new Error(`Ningún modelo de Gemini respondió (último error: ${ultimoError?.message ?? "desconocido"}). Suele ser saturación temporal: intenta de nuevo en unos minutos.`);
}

function aplicarEvaluacionIA(indicePregunta, card, evaluacion) {
  const pregunta = estado.preguntas[indicePregunta];

  (evaluacion.criterios ?? []).forEach(ev => {
    const j = Number(ev.indice);
    if (!(j >= 0 && j < pregunta.criterios.length)) return;
    if (ev.cumplido) estado.criteriosMarcados[indicePregunta].add(j);
    else estado.criteriosMarcados[indicePregunta].delete(j);
    const chk = card.querySelector(`input[data-pregunta="${indicePregunta}"][data-criterio="${j}"]`);
    if (chk) chk.checked = !!ev.cumplido;
  });

  const detalleHtml = (evaluacion.criterios ?? []).map(ev => {
    const j = Number(ev.indice);
    const texto = pregunta.criterios[j]?.texto ?? `Criterio ${j}`;
    return `<li><span class="${ev.cumplido ? "ia-ok" : "ia-no"}">${ev.cumplido ? "✔ Cumplido" : "✘ No cumplido"}</span> — ${escaparHtml(texto)}<br><em>${escaparHtml(ev.justificacion ?? "")}</em></li>`;
  }).join("");

  insertarBloqueIA(card, `
    <ul class="ia-lista">${detalleHtml}</ul>
    <p>${escaparHtml(evaluacion.comentario ?? "")}</p>
    <p class="ayuda">La pauta se marcó automáticamente según esta evaluación — ajusta cualquier casilla si no estás de acuerdo.</p>
  `);
}

function insertarBloqueIA(card, htmlInterno, esError = false) {
  card.querySelector(".ia-feedback")?.remove();
  const div = document.createElement("div");
  div.className = "ia-feedback" + (esError ? " ia-error" : "");
  div.innerHTML = `<div class="subtitulo">🤖 Evaluación IA</div>` + htmlInterno;
  card.appendChild(div);
}

async function corregirConIA() {
  const key = obtenerGeminiKey();
  if (!key) {
    alert("Primero guarda tu API key de Gemini en la pantalla inicial (sección Corrección automática con IA).");
    return;
  }

  const btn = $("#btn-corregir-ia");
  const progreso = $("#ia-progreso");
  btn.disabled = true;
  progreso.classList.remove("hidden");

  const cards = document.querySelectorAll("#lista-correccion > .card");
  let errores = 0;

  for (let i = 0; i < estado.preguntas.length; i++) {
    const respuesta = estado.respuestas[i].trim();
    const card = cards[i];
    if (!card) continue;
    const base = `Corrigiendo pregunta ${i + 1} de ${estado.preguntas.length}`;
    progreso.textContent = `${base}…`;

    if (!respuesta) {
      insertarBloqueIA(card, `<p class="ayuda">No respondiste esta pregunta: no hay nada que evaluar (0 puntos).</p>`);
      continue;
    }

    try {
      const avisar = detalle => { progreso.textContent = `${base} (${detalle})`; };
      const evaluacion = await evaluarConGemini(key, estado.preguntas[i], respuesta, avisar);
      aplicarEvaluacionIA(i, card, evaluacion);
    } catch (e) {
      errores++;
      insertarBloqueIA(card, `<p>No se pudo evaluar esta pregunta: ${escaparHtml(e.message)}. Márcala manualmente.</p>`, true);
    }
  }

  progreso.textContent = errores === 0
    ? "✅ Corrección IA completada. Revisa las justificaciones y ajusta lo que no te convenza antes de ver los resultados."
    : `Corrección IA completada con ${errores} pregunta(s) sin evaluar (revisa el detalle en cada tarjeta).`;
  btn.disabled = false;
}

// ---------------------------------------------------------------------
// Tema claro/oscuro (oscuro por defecto, preferencia guardada)
// ---------------------------------------------------------------------
function aplicarTema(tema) {
  if (tema === "light") document.documentElement.dataset.theme = "light";
  else delete document.documentElement.dataset.theme;
  $("#btn-tema").textContent = tema === "light" ? "🌙" : "☀️";
}

function iniciarTema() {
  const tema = localStorage.getItem(CLAVE_TEMA) ?? "dark";
  aplicarTema(tema);
  $("#btn-tema").addEventListener("click", () => {
    const nuevo = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    localStorage.setItem(CLAVE_TEMA, nuevo);
    aplicarTema(nuevo);
  });
}

// ---------------------------------------------------------------------
iniciarTema();
iniciarConfig();
iniciarBanco();
iniciarIA();
iniciarAcceso();
iniciarInicio();
iniciarEventos();
