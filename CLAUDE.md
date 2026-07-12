# CLAUDE.md — APROBA2 (Simulador Examen de Grado)

> **Marca oficial: APROBA2** (logo con birrete azul + detalles verdes). Título de la página: "APROBA2 — Simulador Examen de Grado". El logo vive en `img/aproba2-logo.png` (barra superior) y `img/favicon.png` (pestaña). El logo trae fondo oscuro texturizado incrustado: se muestra con `border-radius` (clase `.logo-app`) para que en tema claro se vea como una insignia intencional.


Guía para trabajar en este proyecto. Léela completa antes de hacer cambios.

## Qué es

Web **estática** (GitHub Pages; el único backend es una función de Supabase que
valida los códigos de acceso) para preparar el **Examen de Grado de Ingeniería
Comercial** (Chile, escala de notas 1.0–7.0). El usuario (dueño) es estudiante,
no programador: rinde exámenes demo de desarrollo, se autoevalúa contra una
pauta y opcionalmente corrige con IA. Todo el contenido y la interfaz están en
**español chileno**.

- **Repositorio**: https://github.com/cpeede-coder/Proyecto-grado (público, rama `main`)
- **Sitio en vivo**: https://cpeede-coder.github.io/Proyecto-grado/ (GitHub Pages, rama `main`, carpeta raíz)
- **Git**: usuario `cpeede` / `cpeede@capitalinteligente.cl`, auth por Git Credential Manager.

## Estructura

```
index.html              Una sola página; todas las "pantallas" son <section> que se muestran/ocultan
css/styles.css          Estilos. Tema oscuro por defecto + tema claro (:root[data-theme="light"])
img/                    Marca oficial: aproba2-logo.png (barra superior) + favicon.png (pestaña)
js/app.js               Toda la lógica (vanilla JS, sin frameworks ni build)
data/acceso.js          Config freemium: URL+clave anon de Supabase + mensaje de venta (validación en backend)
data/banco.js           Inicializa window.BANCO = { materias: [] }
data/materias/*.js       Un archivo por materia; cada uno hace window.BANCO.materias.push({...})
.claude/launch.json     Config del server local (python http.server, puerto 8734, nombre "examen-grado")
MIS-CODIGOS-PRIVADOS.txt Códigos de acceso en texto — GITIGNORED, nunca en el repo
SUPABASE-SETUP-PRIVADO.sql SQL de carga de códigos a Supabase — GITIGNORED (tiene códigos en texto)
```

Materiales de estudio (`Materia */`, `Temarios y Plantillas examen grado/`) están
en `.gitignore` — **nunca subirlos** (son PDFs del alumno / propiedad de la
universidad). Son la fuente con que se generó el banco.

## Cómo correr / verificar

- **Server local**: `preview_start` con `{name: "examen-grado"}` (ejecuta `python -m http.server 8734`). Nunca usar Bash para el server.
- La app también funciona abriendo `index.html` directo (file://), salvo la corrección con IA (necesita http/https).
- **Python en este PC**: el alias `python` de WindowsApps es INESTABLE para `-c`. Usar la ruta completa: `C:\Users\cleme\AppData\Local\Python\pythoncore-3.14-64\python.exe`.
- **Validar cambios al banco**: `node --check data/materias/<materia>.js` y cargar con un stub `global.window = { BANCO: { materias: [] } }` para chequear ids únicos y estructura.

## Ritual de despliegue (IMPORTANTE)

El navegador cachea `css/styles.css` y `js/app.js`. **Cada vez que edites CSS o
JS debes subir el número de versión en TRES lugares de `index.html`**:
1. `<link ... href="css/styles.css?v=N">`
2. `<script src="js/app.js?v=N">`
3. `<span class="version-app">vN</span>` (la insignia visible en la barra superior)

La insignia existe justo para diagnosticar caché: si el usuario reporta que un
cambio "no aparece", casi siempre es caché — que confirme el número de versión y
recargue con Ctrl+F5. Los archivos de datos (`data/*.js`) también llevan `?v=`;
súbelos si cambian.

Luego: `git add -A && git commit && git push`. GitHub Pages tarda **1–3 minutos**
en publicar. Verificar con `Invoke-WebRequest` a la URL pública buscando el
marcador nuevo (ej. `>vN<`).

**Commits**: terminar el mensaje con `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.
En PowerShell, para mensajes multilínea usar here-string `@'...'@` o `git commit -F archivo.txt` (los `-m` con comillas dan problemas).

## Banco de preguntas (520 preguntas)

104 por materia: Economía · Administración · Gestión de Personas · Estrategia · Marketing (ids `<prefijo>-001` a `-104`). Se amplió de 228 a 520 (2026-07-12) con una flota de subagentes (uno por materia) para que el eslogan "+500 preguntas" fuera verídico.

Cada pregunta es un objeto con este formato **estricto** (respetarlo al agregar):

```js
{
  id: "eco-001",              // prefijo por materia: eco/adm/est/gdp/mkt + correlativo
  tema: "Oferta y demanda",   // subtema del temario
  dificultad: "media",        // "facil" | "media" | "dificil"
  salioEnExamen: true,        // OPCIONAL: true si el tema apareció en exámenes/pautas reales
  enunciado: "…",             // texto; casos con partes a) b) c); usar \n, comillas dobles
  respuestaModelo: "…",       // respuesta ideal; describe el gráfico si la pregunta pide graficar
  criterios: [                // pauta: 3 a 6 criterios, pesos ENTEROS, total 4–12 pts
    { texto: "…", peso: 2 }
  ],
  erroresComunes: ["…"]        // 1 a 3
}
```

Reglas: strings con comillas dobles y `\n` (NUNCA backticks/template literals).
Criterios prefijados `a)`/`b)`/`c)` si el enunciado tiene partes. En preguntas de
"explique y grafique", la `respuestaModelo` describe el gráfico y un criterio dice
"Grafica correctamente…". Español chileno formal.

- **`salioEnExamen: true`** → insignia ⭐ "Tema visto en exámenes reales" (en examen, corrección y explorador). 165 preguntas marcadas. Es el material de **máxima prioridad** de estudio; las demás son cobertura amplia del temario.
- **Calibración de dificultad**: las "difícil" están alineadas al examen real (casos ricos con partes a/b/c, 8–12 pts, cada parte un concepto). El examen real es **sin calculadora** (conceptual/gráfico) — no crear preguntas con cálculo aritmético. No hacerlas más difíciles que el examen real ni más fáciles.
- Para auditar cobertura o generar preguntas nuevas se usó una flota de subagentes (uno por materia) leyendo textos extraídos de los PDFs. Esos textos vivían en el scratchpad temporal (NO persisten entre sesiones); para re-extraer, usar `pypdf`/`python-docx`/`PyMuPDF` sobre las carpetas `Materia */` y `Temarios */`. Algunos temarios (GDP, Marketing) son PDFs escaneados: renderizar a PNG con PyMuPDF y leer como imagen.

## Modos de examen (js/app.js)

- **Por materia**: elige materia + dificultad + N preguntas.
- **🏛️ Examen oficial**: replica el formato real → 14 preguntas (Economía 4, GDP 3, Marketing 3, Adm 2, Estrategia 2), cada área pondera **20 pts (total 100)**, agrupadas por área, solo media/difícil, timer 220 min (~2,2 min/pto). Constante `FORMATO_OFICIAL`.
- **🎯 Mix libre**: mezcla aleatoria de las 5 materias.
- Corrección **guiada**: el usuario compara su respuesta con la modelo (vista de **dos hojas lado a lado**, `body.vista-amplia` ensancha a 1560px solo en esa pantalla) y marca los criterios cumplidos. Nota escala chilena, exigencia 60%.

## Corrección con IA (Google Gemini)

- El usuario pega su propia **API key gratuita** de Gemini (se guarda solo en `localStorage`, clave `examen-grado-gemini-key`). Formatos válidos: `AQ.` (nuevo) o `AIza` (antiguo). La key va en el header `x-goog-api-key` (no en la URL).
- **Modelos con fallback**: `MODELOS_GEMINI` es una lista (`gemini-flash-latest`, `gemini-3.5-flash`, …); se prueban en orden hasta uno disponible y se recuerda el que funciona (`examen-grado-gemini-modelo`). Google jubila modelos seguido — por eso la lista y el alias `-latest`. Ante 429/503 (saturación) reintenta y salta de modelo, avisando en pantalla (nada de esperas silenciosas).
- La IA evalúa cada respuesta contra la pauta (acepta paráfrasis), marca criterios y da feedback; el usuario puede ajustar a mano. **Es función premium** (requiere acceso desbloqueado).

## Modelo freemium (data/acceso.js + js/app.js + Supabase)

- **Demo gratis**: `ACCESO.demoPorMateria` (=4) preguntas por materia + corrección guiada. **Premium** (con código): las 520 + Examen Oficial + corrección IA. Además, en demo hay **1 prueba gratis** (un examen): al iniciar el primer examen se marca `localStorage` `examen-grado-demo-usada`; al intentar un segundo, `comenzarExamen()` muestra el popup de pago. El banner alterna entre "🎁 Prueba gratis" y "🔒 Ya usaste tu prueba gratis".
- **Validación con backend (Supabase)** desde v13: los códigos son de **un solo uso**, amarrados a un **máximo de 2 dispositivos** (celular + notebook), y existen códigos **cortesía** ilimitados para amigos. Reemplazó al viejo gating client-side por hashes (`cyrb53`), que permitía compartir códigos sin límite.
  - **Schema aislado `examen_grado`**: todo (tablas + función) vive en un schema propio, NO en `public`. El usuario reutiliza un proyecto Supabase que ya tenía (llegó al límite de proyectos gratis), así que este simulador queda con datos independientes que no tocan su otro proyecto. Requiere exponerlo: Supabase → **Settings → API → Exposed schemas → agregar `examen_grado`**.
  - **Esquema**: tablas `examen_grado.codigos` (codigo, tipo `pago`|`cortesia`, max_dispositivos) y `examen_grado.dispositivos` (codigo, device_id). RLS activado sin policies → nadie lee las tablas directo. Toda la lógica de canje vive en la función `examen_grado.redeem_code(p_codigo, p_device)` (`security definer`, con `for update` para atomicidad), con `grant usage`(schema) + `execute`(función) para el rol `anon`.
  - **Cliente**: `js/app.js` genera un `device_id` (UUID en `localStorage` `examen-grado-device`) y llama `POST {supabaseUrl}/rest/v1/rpc/redeem_code` con la clave anon (`apikey` + `Authorization: Bearer`) y los headers `Content-Profile`/`Accept-Profile: examen_grado` (para que PostgREST resuelva la función en el schema aislado). Devuelve `{ok, motivo?, tipo?}`; motivos: `invalido`/`limite`/`red`/`config`/`dispositivo`. Si `ok`, se marca `localStorage` `examen-grado-acceso="1"`.
  - **Config en `data/acceso.js`**: `supabaseUrl` + `supabaseAnonKey` + `supabaseSchema` (`"examen_grado"`). La clave **anon public** es segura de publicar. Requiere internet **solo al desbloquear**; ya desbloqueado, la app sigue offline.
  - **Cargar códigos**: correr `SUPABASE-SETUP-PRIVADO.sql` (GITIGNORED, generado por `scratchpad/gen-sql.js` desde `MIS-CODIGOS-PRIVADOS.txt`) en el SQL Editor de Supabase. Es idempotente. Trae los 100 de pago + 10 cortesía. Administración por SQL: marcar cortesía (`update codigos set tipo='cortesia' where codigo=...`), liberar un código (`delete from dispositivos where codigo=...`), ver canjes (`select * from dispositivos`).
- **Mensaje de venta**: `ACCESO.contactoCompra` en `data/acceso.js`. Precio fijo **$5.000** (pago único). Contacto por **WhatsApp +56 9 98957273** (`ACCESO.whatsapp="56998957273"` + `whatsappTexto`); el modal renderiza un botón verde `wa.me` con mensaje pre-escrito.
- **Límite residual aceptado**: el `device_id` vive en `localStorage`; si el usuario lo borra en su propio equipo puede recanjear con su código (sigue siendo su dispositivo). El amarre a 2 dispositivos impide repartir un código a varios amigos.

## Otros detalles

- **Tema**: oscuro por defecto; botón ☀️/🌙 en la barra; preferencia en `localStorage` (`examen-grado-tema`).
- **Historial**: por dispositivo (`localStorage`), no se sincroniza entre navegadores.
- **Explorador del banco**: filtros por materia/dificultad, filtro "⭐ solo vistas en examen", y buscador que rastrea también `respuestaModelo` y criterios (por eso buscar "Kotter"/"Lewin" encuentra casos donde el modelo aparece en la pauta).
- El usuario a veces trabaja con **otra IA en paralelo** sobre el mismo repo: si un cambio parece revertido o inconsistente, revisar `git fetch`/`git log origin/main` antes de asumir. Hacer `git pull` si el remoto divergió.

## Notas de trabajo con el usuario

- No es técnico: explicar en simple, entregar pasos concretos (crear repo, activar Pages, pegar API key son cosas que hace él en su navegador).
- El panel de previsualización de screenshots suele fallar (timeout) en este entorno; verificar por `javascript_tool` (estilos computados, estado del DOM, lógica) en vez de capturas.
- Prioridad del usuario: fidelidad al examen real. Todo (banco, dificultad, formato, tiempos) se calibra contra los exámenes de grado pasados que están en `Temarios y Plantillas examen grado/`.
