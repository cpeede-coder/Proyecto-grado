// =====================================================================
// ACCESO — configuración del modo freemium
// ---------------------------------------------------------------------
// El sitio funciona en modo DEMO (algunas preguntas) hasta que el usuario
// ingresa un código de acceso válido. Aquí solo viven las "huellas" (hashes)
// de los códigos: NUNCA los códigos en texto. Los códigos para vender los
// guarda el creador en privado.
//
// >>> PARA EDITAR EL MENSAJE DE COMPRA: cambia el texto de CONTACTO_COMPRA. <<<
// =====================================================================

window.ACCESO = {
  // Mensaje que se muestra al usuario cuando quiere obtener acceso completo.
  // Edita esto con tu forma de contacto/pago (Instagram, WhatsApp, precio, etc.).
  contactoCompra: "Para desbloquear las 228 preguntas, el modo Examen Oficial y la corrección con IA, escríbeme por Instagram @tu_cuenta o WhatsApp +569 XXXX XXXX. Acceso único: $XXXX.",

  // Cuántas preguntas por materia se ven en la versión demo (gratis).
  demoPorMateria: 4,

  // "Sal" para el hash (no es un secreto real; solo dificulta adivinar).
  salt: "eg-grado-2026-acceso",

  // Huellas de los códigos válidos. Reemplazar/ampliar cuando se generen más.
  hashes: ["dt4576mtn8","1qicxw3d1eq","224dudcqfp1","1uupt3of6z0","20dsitbuw9u","8yeh01mssu","1w7sw9s7kr3","27440h85l9d","szy36b6rsw","21kgg6m0zyp","y4gfvv8tu","24znfiruo6","p8l68zhwq7","1durvzdnofx","moiiawg1hw","p5yjnotudw","y7kovcgbtg","ps4iwiwt0a","bv2a1tfjlo","1385txt0lui","58bgmvqgr3","1t8ne3tmzui","20wu4rn5hhe","29t6mbi0aco","1oc6b6h3aop","24x0haqpxni","rvgkc2uyd8","28bonyey4g","2bextydp06f","zd4w5zhh79","1b7mwlt462i","1gljt2ylqjt","vrgunc0051","ltz1yv9jeo","1309ccu7t5v","vtvumnncmf","17yu59xde3s","2e72ex7gfmb","1p7xtod8em9","21ix1n11a4m","1uq9y5sya8a","2cgq3tc2zl","2h7nodwao9","1lr1x5oneqo","1w4g80lefvu","1ti8txxtwzn","n2q7lokk2u","1ew2j1jt5jl","1xleclj9mrh","urhhobbvqx","1bz172rdlmz","7z7hxkkesr","2yq1vy1l37","oa5yovr6x5","1hobje6cihu","i9c9g2jpay","26r6e6yupxv","fot71a3hpr","1bneqtkzzr8","mjufjg4pqp","15v4on4cwas","1ce9bsdhsxf","qgd0rhn5hh","9t3hvhfiln","2allmtrwwcl","20j33zhsbq","z42n7esx1","1fdnvh79fn6","1loay6hchvr","1s8yf1mfrfg","1rezdxc9nkh","29osvuzjar6","rk1qgo9fd7","ejbaftuviz","oelxcttmdo","oaa2zxl6j","24lstjap8w9","20wxiwm60wl","27ft15d8cg0","2bd6l7q4oob","1wt5x1qekld","45d9vg7yty","5i6gsqevmb","259m9xfix3t","paq2hnp5v5","1b574bmrrhg","1qs9cca3w5v","1p5v3o5iwq8","26m12p2cu1w","x7qzgz081p","281zlo472uv","1i3rjfettzz","3ru03vbo5s","idj2taohp5","bz8six59hd","1zbn58er5c5","2c5mee4q5o8","1gwlmdio36u","gv941gt6ea","1ybc07ivvv6"]
};
