// =====================================================================
// ACCESO — configuración del modo freemium (validación en Supabase)
// ---------------------------------------------------------------------
// El sitio funciona en modo DEMO (algunas preguntas) hasta que el usuario
// canjea un código de acceso válido. La validación de los códigos ocurre
// en Supabase (backend): así un código es de UN SOLO USO, se amarra a un
// máximo de dispositivos y hay códigos "cortesía" ilimitados. Los códigos
// en texto viven SOLO en tu Supabase (privado), nunca en este repo.
//
// >>> PARA CONFIGURAR: pega abajo la URL de tu proyecto y la clave ANON. <<<
//     (Supabase -> Project Settings -> API. La clave "anon public" es
//      segura de publicar: solo puede llamar a la función redeem_code.)
// >>> PARA EDITAR EL MENSAJE DE COMPRA: cambia el texto de contactoCompra. <<<
// =====================================================================

window.ACCESO = {
  // 1) Conexión a Supabase. Reemplaza los dos valores de ejemplo.
  //    supabaseUrl:  https://TUPROYECTO.supabase.co   (sin barra final)
  //    supabaseAnonKey:  la clave "anon public" (empieza con "eyJ...")
  supabaseUrl: "https://TUPROYECTO.supabase.co",
  supabaseAnonKey: "PEGA_AQUI_TU_CLAVE_ANON_PUBLIC",

  // 2) Mensaje que se muestra al usuario cuando quiere obtener acceso completo.
  //    Edita esto con tu forma de contacto/pago (Instagram, WhatsApp, precio).
  contactoCompra: "Para desbloquear las 228 preguntas, el modo Examen Oficial y la corrección con IA, escríbeme por Instagram @tu_cuenta o WhatsApp +569 XXXX XXXX. Acceso único: $XXXX.",

  // 3) Cuántas preguntas por materia se ven en la versión demo (gratis).
  demoPorMateria: 4
};
