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
  supabaseUrl: "https://xluxhcvddeuigccycebv.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsdXhoY3ZkZGV1aWdjY3ljZWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NTUwNTQsImV4cCI6MjA5MDEzMTA1NH0.yJzesPK2WjBRweH6CTkWXbmfolxveGzW0dRoMuJyvHQ",

  // Schema aislado donde viven las tablas de esta app (no toca tu otro proyecto,
  // que está en el schema "public"). Debe estar en Supabase -> Settings -> API
  // -> Exposed schemas. Déjalo tal cual si corriste el SQL sin cambiar el nombre.
  supabaseSchema: "examen_grado",

  // 2) Mensaje de venta (se muestra cuando el usuario quiere acceso completo).
  contactoCompra: "Acceso completo por $5.000 (pago único): las más de 500 preguntas, el modo Examen Oficial y la corrección con IA. Escríbeme por WhatsApp y te envío tu código de acceso.",

  // Número de WhatsApp (solo dígitos, con código de país). Se muestra como botón.
  whatsapp: "56998957273",
  // Texto que viene escrito al abrir el chat de WhatsApp.
  whatsappTexto: "Hola, quiero el acceso completo al Simulador Examen de Grado ($5.000).",

  // 3) Cuántas preguntas por materia se ven en la versión demo (gratis).
  demoPorMateria: 4
};
