// =====================================================================
// BANCO DE PREGUNTAS — Simulador Examen de Grado (Ingeniería Comercial)
// ---------------------------------------------------------------------
// Este archivo solo inicializa el registro. Cada materia se carga desde
// data/materias/<materia>.js, que hace window.BANCO.materias.push({...})
//
// Estructura de cada pregunta:
//   - tema: subtema del temario al que pertenece
//   - dificultad: "facil" | "media" | "dificil"
//   - enunciado: texto de la pregunta (puede incluir caso y partes a/b/c)
//   - respuestaModelo: respuesta ideal completa (incluye descripción de
//     gráficos cuando la pregunta pide graficar)
//   - criterios: pauta de corrección [{ texto, peso }]
//   - erroresComunes: advertencias de errores típicos
// =====================================================================

window.BANCO = { materias: [] };
