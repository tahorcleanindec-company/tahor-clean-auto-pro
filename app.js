const IVA_POR_DEFECTO = 0.15; // 15% de IVA

const products = [
  {
    id: 1,
    name: "Shampoo FOR CAR",
    description: "Shampoo equilibrado que combina limpieza efectiva con cuidado de superficies, ideal para mantenimiento regular. pH 8.0",
    category: "Lavado",
    images: [
      
      "img/36003 SHAMPOO PARA CARRO GLBR.webp",
      "img/SHAMPOO PARA CARRO 1L.webp",
      "img/SHAMPOO PARA AUTO 20L.webp",
      
    ],
    video: " ",
    features: ["Buen poder de limpieza", "Mantiene brillo natural ", "Espuma controlada", "No deja residuos", "Alto rendimiento "],
    sizes: [
      
      { name: "Botella 1L", code: "45242", price: 1.74, icon: "🍶", iva: 0.15 },      
      { name: "Galon 4L", code: "53829", price: 5, icon: "🫙", iva: 0.15 },       
      { name: "Caneca 20L", code: "36005", price: 19.1, icon: "🛢️", iva: 0.15 }   
    ],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Shampoo EC",
    description: "Shampoo automotriz formulado para limpieza diaria, elimina suciedad ligera sin afectar pintura ni acabados. pH 7.0",
    category: "Lavado",
    images: [
      "img/SHAMPOO PARA AUTO ECONOMICO 20L.webp",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: ["Limpieza suave y segura ", "No daña pintura ni plásticos ", "Ideal para uso frecuente ", "Fácil enjuague", "Uso doméstico y profesional"],
    sizes: [
      { name: "Caneca 20", code: "63506", price: 15, icon: "🛢️", iva: 0.15 },
      { name: "Caneca 28", code: "63226", price: 19, icon: "🛢️", iva: 0.15 }

    ],
    rating: 4.9,
    reviews: 89
  },
  { 
    id: 3,
    name: "Shampoo con Cera",
    description: "Shampoo automotriz con cera incorporada que limpia profundamente mientras deja una capa protectora brillante sobre la pintura. Ideal para mantener el vehículo limpio y con acabado profesional en cada lavado. pH 7.5",
    category: "Lavado",
    images: [
      "img/44303 SHAMPOO CON CERA GLBR.webp",
      "img/SHAMPO CON CERA 20L.webp"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: ["Limpieza y protección en un solo paso ", "Aporta brillo inmediato tipo encerado ", "No daña pintura ni plásticos ", "Facilita el secado ", "Ideal para uso frecuente"],
    sizes: [
      // Codigos
      { name: "Galon 4L", code: "44303", price: 5.99, icon: "🫙", iva: 0.15 },        
      { name: "Caneca", code: "44868", price: 23.9, icon: "🛢️", iva: 0.15 }

    ],
    rating: 4.9,
    reviews: 89
  },
  { 
    id: 4,
    name: "Desengrasante deter plus",
    description: "Shampoo desengrasante de alta potencia diseñado para eliminar grasa, barro y suciedad acumulada en vehículos. Ideal para lavados intensivos y vehículos con alta exposición. pH 10",
    category: "Lavado",
    images: [
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: ["Alta acción desengrasante ", "Ideal para vehículos muy sucios ", "Limpieza profunda ", "Reduce esfuerzo ", "Uso profesional "],
    sizes: [
      // Codigos
      { name: "Galon 4L", code: "53829", price: 4.34, icon: "🫙", iva: 0.15 },        
      { name: "Caneca", code: "36005", price: 18.3, icon: "🛢️", iva: 0.15 }

    ],
    rating: 4.9,
    reviews: 89
  },
  {
     id: 5,                           
     name: "Tahor Wash R",
     description: "Producto profesional desarrollado para la limpieza, restauración y protección de vehículos. Su formulación permite eliminar suciedad, grasa y contaminantes sin dañar superficies, logrando resultados de alto nivel en menos tiempo, alta espuma. pH 8.5",
     category: "Lavado",           
     images: [
       "img/54028 TAHOR WASH R GLBR.webp",
       "img/TAHOR WAS CANECA.webp"
     ],
     video: "url-video-youtube",
     features: ["Alta generación de espuma ", "Sin aroma (uso técnico) ", "No deja residuos,  Seguro para superficies automotrices ", "Alto rendimiento (rinde más por dilución) ", "Uso profesional y doméstico ", "Compatible con equipos de lavado"],
     sizes: [
      
       { name: "Galon", code: "54028", price: 6.5, icon: "🫙", iva: 0.15 },
       { name: "Caneca ", code: "51187", price: 25.33, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 6,                           
     name: "Lavaclean",
     description: "Desengrasante alcalino de alto rendimiento diseñado para eliminar grasa pesada, aceites y suciedad extrema en motores, chasis y maquinaria.",
     category: "Limpieza Extrema",           
     images: [
       "img/LAVACLEAN 1L.webp",
       "img/LAVACLEAN GLBR.webp",
       "img/LAVACLEAN 20L.webp",
     ],
     video: "url-video-youtube",
     features: ["Máxima potencia desengrasante ", "Ideal para motores y talleres ", "Acción rápida  ", "Reduce tiempo de limpieza ", "Uso industrial y automotriz ", ],
     sizes: [
       
       { name: "Botella 1L", code: "55887", price: 1.75, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "55920", price: 4, icon: "🫙", iva: 0.15 },
       { name: "Caneca ", code: "55826", price: 13.1, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 7,                           
     name: "Deter 100 Industrial",
     description: "Producto alcalino fuerte para limpieza de suciedad extrema en vehículos y maquinaria.",
     category: "Limpieza Extrema",           
     images: [
      "img/DETER100 INDUSTRIAL GLC.webp",
      "img/DETER100 INDUSTRIAL 20L.webp",
       
     ],
     video: "url-video-youtube",
     features: ["Alto poder alcalino  ", "Limpieza profunda  ", "Uso en talleres  ", "Alto rendimiento  ", "Acción rápida", ],
     sizes: [
       
       { name: "Galon", code: "39599", price: 8.03, icon: "🫙", iva: 0.15 },
       { name: "Caneca 20", code: "39601", price: 22.8, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 8,                           
     name: "Deter 100 pro",
     description: "Desengrasante de alto rendimiento para eliminar aceites, grasa y suciedad difícil.",
     category: "Limpieza Extrema",           
     images: [
       "url-imagen-1",
       "url-imagen-2"
     ],
     video: "url-video-youtube",
     features: ["Máxima potencia  ", "Ideal para motores y chasis  ", "Reduce esfuerzo  ", "Uso profesional  ", "Alta eficiencia", ],
     sizes: [
     
       { name: "Galon", code: "54167", price: 8.69, icon: "🫙", iva: 0.15 },
       { name: "Caneca ", code: "59228", price: 39.2, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 9,                           
     name: "Deter super industrial",
     description: "Formulación de máxima potencia para suciedad extremadamente adherida.",
     category: "Limpieza Extrema",           
     images: [
       "url-imagen-1",
       "url-imagen-2"
     ],
     video: "url-video-youtube",
     features: ["Ultra desengrasante", "Uso industrial", "Limpieza severa ", "Alta concentración  ", "Resultados rápidos ", ],
     sizes: [
       
       { name: "Galon", code: "65628", price: 13, icon: "🫙", iva: 0.15 },
       { name: "Caneca", code: "64767", price: 42.6, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 10,                           
     name: "Desoxidante",
     description: "Elimina óxido y manchas metálicas devolviendo el aspecto original.",
     category: "Limpieza Extrema",           
     images: [
       "img/DESOXIDANTE 1L.webp",
       "img/DESOXIDANTE GL.webp",
       "img/DESOXIDANTE 20L.webp"
     ],
     video: "url-video-youtube",
     features: ["Remueve óxido ", "Recupera superficies ", "Acción rápida  ", "Ideal para metales ", "Mejora estética ", ],
     sizes: [
      
       { name: "Botella 1L", code: "35813", price: 2.45, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "35814", price: 6.25, icon: "🫙", iva: 0.15 },
       { name: "Caneca", code: "35815", price: 22.32, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 11,                           
     name: "Tahox 100 desincrustante",
     description: "Elimina sarro, minerales y residuos incrustados en superficies del vehículo.",
     category: "Limpieza Extrema",           
     images: [
       "img/TAHOX1OO 1L.webp",
       "img/TAHOX100 GLC.webp",
       "img/TAHOX100 20L.webp",
     ],
     video: "url-video-youtube",
     features: ["Elimina incrustaciones ", "Acción ácida controlada  ", "Ideal para lavado técnico   ", "Resultados visibles ", "Uso profesional", ],
     sizes: [
       
       { name: "Botella 1L", code: "49748", price: 3.91, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "35943", price: 13.5, icon: "🫙", iva: 0.15 },
       { name: "Caneca", code: "52607", price: 57.1, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   
   {
     id: 12,                           
     name: "Tahox solvent",
     description: "Remueve grasas, aceites y residuos difíciles que no salen con detergentes convencionales.",
     category: "Limpieza Extrema",           
     images: [
       "img/TAHOX SOLVENT 1L.webp",
       "img/TAHOX SOLVENT GLC.webp",
       "img/TAHOX SOLVENT 20L.webp",
     ],
     video: "url-video-youtube",
     features: ["Disuelve grasa pesada", "Limpieza profunda ", "Uso especializado ", "Acción rápida  ", ],
     sizes: [
       
       { name: "Botella 1L", code: "54906", price: 6.69, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "55986", price: 25.25, icon: "🫙", iva: 0.15 },
       { name: "Caneca", code: "56327", price: 100, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 13,                           
     name: "Limpiador de Rines",
     description: "Elimina polvo de freno y suciedad adherida en rines.",
     category: "Limpieza Extrema",           
     images: [
       "url-imagen-1",
       "img/LIMPIADOR DE RINES Y AROS GLBR.webp"
     ],
     video: "url-video-youtube",
     features: ["Limpieza profunda ", "Recupera brillo  ", "Seguro para rines  ", "Fácil aplicación ", "Resultados rápidos ", ],
     sizes: [
       
       { name: "Botella 1L", code: "65726", price: 3.50, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "63367", price: 9.99, icon: "🫙", iva: 0.15 },
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 14,                           
     name: "Intahor",
     description: "Limpiador multiusos para interiores de vehículos. Remueve suciedad en tapicería, plásticos y paneles sin dañar superficies.",
     category: "Limpieza Interior",          
     images: [
       "img/IN-TAHOR 1L.webp",
       "img/IN-TAHOR 20L.webp",
     ],
     video: "url-video-youtube",
     features: ["Limpieza profunda en interiores ", "No mancha ni decolora  ", "Ideal para tapicería  ", "Aroma agradable ", "Uso frecuente", ],
     sizes: [
       
       { name: "Botella 1L", code: "63429", price: 2.4, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "63428", price: 7.5, icon: "🫙", iva: 0.15 },
       { name: "Caneca", code: "63386", price: 30.5, icon: "🛢️", iva: 0.15 }

     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 15,                           
     name: "Deter Bio",
     description: "Detergente biodegradable para limpieza interior segura.",
     category: "Limpieza Interior",           
     images: [
      "img/48906 DETERBIO 100ML.webp",
       "img/47623 DETERBIO GBR.webp",
     ],
     video: "url-video-youtube",
     features: ["Biodegradable ", "Seguro para interiores  ", "Limpieza eficiente ", "Uso frecuente ", "Menor impacto ambiental ", ],
     sizes: [
      
       { name: "Botella 1L", code: "48906", price: 2.3, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "47623", price: 6.8, icon: "🫙", iva: 0.15 },
       { name: "Caneca", code: "47103", price: 32.8, icon: "🛢️", iva: 0.15 }

     ],
     rating: 4.5,
     reviews: 0
   },
    {
     id: 16,                           
     name: "Detergente Oxigenado",
     description: "Elimina manchas orgánicas y suciedad en tapicería.",
     category: "Limpieza Interior",           
     images: [
       "url-imagen-1",
       "url-imagen-2"
     ],
     video: "url-video-youtube",
     features: ["Remueve manchas", "Acción oxigenada", "Ideal para telas  ", "Limpieza profunda ", "Seguro en superficies", ],
     sizes: [
       
       { name: "Botella 1L", code: "59627", price: 2.3, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "59628", price: 6.8, icon: "🫙", iva: 0.15 },
       { name: "Caneca", code: "58586", price: 32.8, icon: "🛢️", iva: 0.15 }

     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 17,                           
     name: "Dioxigen Multiusos",
     description: "Limpia y desinfecta el interior del vehículo eliminando microorganismos.",
     category: "Limpieza Interior",           
     images: [
       "img/DIOXIGENT MULTIUSOS 1L.webp",
       "img/DIOXIGET MULTIUSOS GLC.webp",
       "img/DIOXIGENT MULTIUSOS 20L.webp",
     ],
     video: "url-video-youtube",
     features: ["Acción desinfectante ", "Elimina olores ", "Seguro para interiores ", "Uso diario ", "Mejora higiene ", ],
     sizes: [
 
       { name: "Botella 1L", code: "56568", price: 2.18, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "56567", price: 6.95, icon: "🫙", iva: 0.15 },
       { name: "Caneca", code: "59106", price: 34.7, icon: "🛢️", iva: 0.15 }

     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 18,                           
     name: "Brillantex",
     description: "Devuelve el color negro intenso a las llantas.",
     category: "Acabado y protección",           
     images: [
       "img/BRILLANTEX 1L.webp",
       "img/BRILLANTEX GLBR.webp",
       "img/BRILLANTEX CANECA.webp"
     ],
     video: "url-video-youtube",
     features: ["Brillo duradero ", "Protección ", "Mejora apariencia ", "Fácil aplicación ", "Resultado profesional", ],
     sizes: [
      
       { name: "Botella 1L", code: "35742", price: 2.17, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "35744", price: 4.79, icon: "🫙", iva: 0.15 },
       { name: "Caneca", code: "35746", price: 19.99, icon: "🛢️", iva: 0.15 }

     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 19,                          
     name: "Silicon de Motores",
     description: "Protege motores contra polvo y humedad.",
     category: "Acabado y protección",           
     images: [
       "url-imagen-1",
       "url-imagen-2"
     ],
     video: "url-video-youtube",
     features: ["Protección prolongada ", "Mejora apariencia ", "Evita acumulación de suciedad ", "Fácil aplicación ", "Uso técnico ", ],
     sizes: [
       
       { name: "Botella 1L", code: "53848", price: 6, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "53849", price: 25.5, icon: "🫙", iva: 0.15 },
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 20,                           
     name: "Restaurador de plastico",
     description: "Recupera el color original de plásticos deteriorados.",
     category: "Acabado y protección",           
     images: [
       "url-imagen-1",
       "url-imagen-2"
     ],
     video: "url-video-youtube",
     features: ["Restaura color ", "Protección duradera ", "Mejora apariencia ", "Fácil uso ", "Resultado inmediato "],
     sizes: [
       
       { name: "Botella 250ml", code: "54088", price: 6.1, icon: "🧴", iva: 0.15 },
       { name: "Botella 500ml", code: "56628", price: 10, icon: "🧴", iva: 0.15 },
       { name: "Botella 1L", code: "55392", price: 17, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "55708", price: 59, icon: "🫙", iva: 0.15 },
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 21,                           
     name: "Lluvia Grafitada",
     description: "Mejora la visibilidad al repeler agua.",
     category: "Acabado y protección",           
     images: [
       "img/40484 DUCHA GRAFITADA 1000ML.webp",
       "img/52386 DUCHA GRAFITADA GLBR.webp",
       "img/DUCHA GRAFITADA 20L.webp",
     ],
     video: "url-video-youtube",
     features: ["Efecto repelente ", "Mejora seguridad ", "Aplicación sencilla ", "Duración prolongada ", "Ideal para lluvia "],
     sizes: [
       
       { name: "Botella 1L", code: "40484", price: 3.07, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "52386", price: 10.35, icon: "🫙", iva: 0.15 },
       { name: "Caneca 20L", code: "53087", price: 34.7, icon: "🛢️", iva: 0.15 }

     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 22,                           
     name: "Protector tc (WD40)",
     description: "Protege superficies contra desgaste y suciedad.",
     category: "Acabado y protección",           
     images: [
      
       "img/PROTECTOR TC GLBR.webp",
       "img/46444 PROTECTOR TC 1000ML.webp",
       "img/PROTECTOR TC CANECA.webp",
     ],
     video: "url-video-youtube",
     features: ["Protege superficies contra desgaste y suciedad. ", "Mejora durabilidad ", "Reduce suciedad ", "Uso versátil ", "Fácil aplicación  "],
     sizes: [
       
       { name: "Botella 1L", code: "46444", price: 6, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "46406", price: 22.19, icon: "🫙", iva: 0.15 },
       { name: "Caneca 20L", code: "60866", price: 107, icon: "🛢️", iva: 0.15 }

     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 23,                           
     name: "Brillantex Full",
     description: "Brillo general para exteriores del vehículo.",
     category: "Acabado y protección",          
     images: [
       "img/BRILLANTEX FULL 1L.webp",
       "img/BRILLANTEX GLBRR.webp",
       "img/BRILLANTEX FULL CANECA.webp",
     ],
     video: "url-video-youtube",
     features: ["Acabado uniforme  ", "Mejora estética ", "Protección ligera ", "Fácil uso ", "Versátil"],
     sizes: [
      
       { name: "Botella 1L", code: "65729", price: 3.05, icon: "🍶", iva: 0.15 },
       { name: "Galon", code: "65727", price: 7.82, icon: "🫙", iva: 0.15 },
       { name: "Caneca 20L", code: "65728", price: 25.21, icon: "🛢️", iva: 0.15 }

     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 24,                           
     name: "Ambiental Desinfectante ",
     description: "Aroma con acción desinfectante para el interior del vehículo.",
     category: "Ambientación",           
     images: [
       "url-imagen-1",
       "url-imagen-2"
     ],
     video: "url-video-youtube",
     features: ["Desinfecta y aromatiza ", "Mejora ambiente ", "Uso frecuente ", "Acción rápida ", "Seguro"],
     sizes: [
       
       { name: "Botella 1L", code: "65731", price: 2, icon: "🍶", iva: 0.15 },
       { name: "Galon 4L", code: "65732", price: 5.5, icon: "🫙", iva: 0.15 },
       { name: "Caneca 20L", code: "65733", price: 23, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 25,                           
     name: "Splash Esencia",
     description: "Fragancia duaradera para el interior del vehículo.",
     category: "Ambientación",           
     images: [
       "img/Splash Esencia 1L.webp",
       "img/SPLASH ESENCIA GALÓN.webp",
       "img/SPLASH ESENCIA CANECA.webp"
     ],
     video: "url-video-youtube",
     features: ["Aroma agradable", "Larga duración", "Facil Aplicación", "Variedad de fragancias", "Uso diario"],
     sizes: [
       
       { name: "Botella 1L", code: "0", price: 0, icon: "🍶", iva: 0.15 },
       { name: "Galon 4L", code: "0", price: 0, icon: "🫙", iva: 0.15 },
       { name: "Caneca 20L", code: "0", price: 0, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 27,                           
     name: "Cera autobrillante 1,2,3",
     description: "Compuesto de corte diseñado para eliminar rayones leves, marcas, oxidación y defectos en la pintura. Prepara la superficie para procesos de pulido y acabado, logrando una base uniforme.",
     category: "Acabado y protección",           
     images: [
       "img/CERA 123 1L.webp",
       "img/CERA 123 GLBR.webp",
       "img/CERA 123 CANECA.webp"
     ],
     video: "url-video-youtube",
     features: ["Aroma agradable", "Larga duración", "Facil Aplicación", "Variedad de fragancias", "Uso diario"],
     sizes: [
       
       { name: "Botella 1L", code: "44490", price: 3.07, icon: "🍶", iva: 0.15 },
       { name: "Galon 4L", code: "51946", price: 10.35, icon: "🫙", iva: 0.15 },
       { name: "Caneca 20L", code: "54607", price: 39.25, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 28,                           
     name: "EXTRACTOR",
     description: "Xtractor elimina suciedad y manchas difíciles en minutos, sin saturar la tela ni dejar residuos.",
     category: "Limpieza Interior",           
     images: [
       "img/EXTRACTOR 1L.webp",
       "img/EXTRACTOR GLBR.webp",
       "img/EXTRACTOR CANECA.webp"
     ],
     video: "url-video-youtube",
     features: ["Ideal para detailing automotriz", "deja la tapicería limpia", "resca y lista para usar",],
     sizes: [
       
       { name: "Botella 1L", code: "59306", price: 1.75, icon: "🍶", iva: 0.15 },
       { name: "Galon 4L", code: "55569", price: 4.99, icon: "🫙", iva: 0.15 },
       { name: "Caneca 20L", code: "62286", price: 19.9, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 29,                           
     name: "Franela",
     description: "",
     category: "Accesorios",           
     images: [
       "img/FRANELA.webp",
     ],
     video: "url-video-youtube",
     features: ["", "", "",],
     sizes: [
       
       { name: "Franela", code: "", price: 0, icon: "▩", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 30,                           
     name: "Cepillo",
     description: "",
     category: "Accesorios",           
     images: [
       "img/CEPILLO.webp",
     ],
     video: "url-video-youtube",
     features: ["", "", "",],
     sizes: [
       
       { name: "Cepillo", code: "", price: 0, icon: "▩", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   {
     id: 31,                           
     name: "Paño de microfibra",
     description: "",
     category: "Accesorios",   
     images: [
       "img/PAÑO MICROFIBRA VERDE.webp",
     ],
     video: "url-video-youtube",
     features: ["", "", "",],
     sizes: [
       { name: "Paño de microfibra", code: "", price: 0, icon: "▩", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
];

/* ============================================================================
   PLANTILLA PARA AGREGAR NUEVOS PRODUCTOS CON CÓDIGOS POR PRESENTACIÓN
   ============================================================================
   
   Copia esta plantilla y pégala dentro del array "products" para agregar 
   un nuevo producto. Modifica los valores según corresponda:
   
   IMPORTANTE: Cada presentación (500ml, 1L, Galón, Caneca) tiene su propio código.
   
   {
     id: 9,                           // Número único (incrementa el último id)
     name: "Nombre del Nuevo Producto",
     description: "Descripción detallada del producto.",
     category: "categoria",           // shampoo, cera, interior, llantas, vidrios, desengrasante
     images: [
       "url-imagen-1",
       "url-imagen-2"
     ],
     video: "url-video-youtube",
     features: ["Caracteristica 1", "Caracteristica 2", "Caracteristica 3"],
     sizes: [
       // CADA PRESENTACIÓN TIENE SU PROPIO CÓDIGO ÚNICO
       // Formato sugerido: [CATEGORIA]-[NUMERO]-[ML]
       // Agrega solo las presentaciones que tenga el producto
       { name: "Botella 500ml", code: "XXX-001-500", price: 0, icon: "🧴", iva: 0.15 },
       { name: "Botella 1L", code: "XXX-001-1000", price: 0, icon: "🍶", iva: 0.15 },
       { name: "Galon 4L", code: "XXX-001-4000", price: 0, icon: "🫙", iva: 0.15 },
       { name: "Caneca 20L", code: "XXX-001-20000", price: 0, icon: "🛢️", iva: 0.15 }
     ],
     rating: 4.5,
     reviews: 0
   },
   
   EJEMPLO DE CÓDIGOS:
   - Shampoo FOR CAR:     SHP-FOR-500, SHP-FOR-1000, SHP-FOR-4000, SHP-FOR-20000
   - Lavaclean:           LAV-001-500, LAV-001-1000, LAV-001-4000, LAV-001-20000
   - Intahor:             INT-001-500, INT-001-1000, INT-001-4000, INT-001-20000
   
   ============================================================================ */

// ============ STATE ============
let cart = [];
let currentCategory = 'todos';
let searchQuery = '';
let selectedProduct = null;
let selectedSize = 0;
let quantity = 1;

const WHATSAPP_NUMBER = '+593958812843';

// ============ DOM ELEMENTS ============
const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const productsGrid = document.getElementById('productsGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const productModalOverlay = document.getElementById('productModalOverlay');
const productModal = document.getElementById('productModal');
const productModalContent = document.getElementById('productModalContent');
const closeProductModal = document.getElementById('closeProductModal');
const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSummary = document.getElementById('checkoutSummary');

// ============ UTILITIES ============
function round2(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

function formatPrice(price) {
  return new Intl.NumberFormat('es-EC', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
}



function getCategoryLabel(category) {
  const labels = {
    shampoo: 'Shampoo',
    cera: 'Cera',
    interior: 'Interior',
    llantas: 'Llantas',
    vidrios: 'Vidrios',
    desengrasante: 'Desengrasante'
  };
  return labels[category] || category;
}


function getIvaRate(size) {
  return size.iva !== undefined ? size.iva : IVA_POR_DEFECTO;
}

// Calcula el precio con IVA incluido
function getPriceWithIva(price, ivaRate) {
  return round2(Number(price) * (1 + ivaRate));
}

function getIvaAmount(price, ivaRate) {
  return round2(Number(price) * ivaRate);
}


// ============ HEADER ============
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

// ============ CART ============
function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartBadge.textContent = totalItems;
}

// Subtotal sin IVA
function calculateSubtotal() {
  return round2(cart.reduce((sum, item) => {
    return sum + (Number(item.price) * item.quantity);
  }, 0));
}

// Total IVA
function calculateTotalIva() {
  return round2(cart.reduce((sum, item) => {
    const ivaAmount = getIvaAmount(item.price, item.ivaRate);
    return sum + (ivaAmount * item.quantity);
  }, 0));
}

// Total final con IVA
function calculateTotal() {
  return round2(cart.reduce((sum, item) => {
    const totalItem = getPriceWithIva(item.price, item.ivaRate);
    return sum + (totalItem * item.quantity);
  }, 0));
}



function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = '';
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
  } else {
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';
    
    cartItems.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-code">Cod: ${item.sizeCode}</div>
          <div class="cart-item-variant">${item.sizeName}</div>
          <div class="cart-item-actions">
            <div class="quantity-controls">
              <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)">-</button>
              <span class="cart-item-qty">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
            </div>
            <span class="cart-item-price">${formatPrice(getPriceWithIva(item.price, item.ivaRate) * item.quantity)}</span>
          </div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})" aria-label="Eliminar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </div>
    `).join('');
    
    const subtotal = calculateSubtotal();
    const totalIva = calculateTotalIva();
    const total = calculateTotal();
    
    cartTotal.innerHTML = `
      <div class="cart-subtotal">
        <span>Subtotal:</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      <div class="cart-iva">
        <span>IVA (15%):</span>
        <span>${formatPrice(totalIva)}</span>
      </div>
      <div class="cart-total-final">
        <span>Total:</span>
        <span>${formatPrice(total)}</span>
      </div>
    `;
  }
  updateCartBadge();
}

function addToCart(product, sizeIndex, qty) {
  const size = product.sizes[sizeIndex];

  if (!size) {
    console.error("Tamaño no encontrado", sizeIndex);
    return;
  }

  const ivaRate = getIvaRate(size); 
  const sizeCode = size.code || 'SIN-CODIGO'; 

  const existingIndex = cart.findIndex(
    item => item.productId === product.id && item.sizeIndex === sizeIndex
  );

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      productId: product.id,
      sizeCode: sizeCode,             
      name: product.name,
      sizeName: size.name,
      sizeIndex: sizeIndex,
      price: Number(size.price),      
      ivaRate: ivaRate,
      quantity: qty,
      image: product.images[0] || ""
    });
  }

  renderCart();
  openCart();
}


function updateCartQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function openCart() {
  cartOverlay.classList.add('active');
  cartDrawer.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartOverlay.classList.remove('active');
  cartDrawer.classList.remove('active');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);

// ============ PRODUCTS ============
function filterProducts() {
  let filtered = [...products];
  
  if (currentCategory !== 'todos') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.sizes.some(size => size.code && size.code.toLowerCase().includes(query))
    );
  }
  
  return filtered;
}

function renderProducts() {
  const filtered = filterProducts();
  
  if (filtered.length === 0) {
    productsGrid.innerHTML = '';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    productsGrid.innerHTML = filtered.map(product => `
      <div class="product-card" onclick="openProductModal(${product.id})">
        <div class="product-image">
          <img src="${product.images[0]}" alt="${product.name}">
          <span class="product-badge">${getCategoryLabel(product.category)}</span>
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-code">Cod: ${product.sizes[0].code || 'N/A'}</p>
          <p class="product-desc">${product.description}</p>
          <div class="product-footer">
            <span class="product-price">Desde ${formatPrice(product.sizes[0].price)}</span>
            <div class="product-rating">
              <svg viewBox="0 0 24 24">
                <polygon fill="currentColor" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <span>${product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Search
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

// Category filters
categoryFilters.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentCategory = e.target.dataset.category;
    renderProducts();
  }
});

// ============ PRODUCT MODAL ============
function openProductModal(productId) {
  selectedProduct = products.find(p => p.id === productId);
  selectedSize = 0;
  quantity = 1;
  
  renderProductModal();
  productModalOverlay.classList.add('active');
  productModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModalFunc() {
  productModalOverlay.classList.remove('active');
  productModal.classList.remove('active');
  document.body.style.overflow = '';
  selectedProduct = null;
}

function renderProductModal() {
  if (!selectedProduct) return;
  
  const p = selectedProduct;
  const currentSize = p.sizes[selectedSize];
  const ivaRate = getIvaRate(currentSize);
  const priceWithIva = getPriceWithIva(currentSize.price, ivaRate);
  const ivaPercentage = Math.round(ivaRate * 100);
  
  productModalContent.innerHTML = `
    <div class="product-modal-grid">
      <div class="product-modal-gallery">
        <div class="main-image" id="mainImage">
          <img src="${p.images[0]}" alt="${p.name}" id="mainImageEl">
        </div>
        <div class="thumbnails">
          ${p.images.map((img, i) => `
            <div class="thumbnail ${i === 0 ? 'active' : ''}" onclick="changeImage(${i})">
              <img src="${img}" alt="Imagen ${i + 1}">
            </div>
          `).join('')}
          <div class="thumbnail thumbnail-video" onclick="showVideo()">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="product-modal-info">
        <span class="modal-product-category">${getCategoryLabel(p.category)}</span>
        <h2 class="modal-product-name">${p.name}</h2>
        <p class="modal-product-code">Codigo: ${currentSize.code || 'N/A'}</p>
        <p class="modal-product-desc">${p.description}</p>
        
        <div class="modal-product-features">
          <h4>Caracteristicas</h4>
          <ul class="features-list">
            ${p.features.map(f => `
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                ${f}
              </li>
            `).join('')}
          </ul>
        </div>
        
        <div class="size-selector">
          <h4>Selecciona la Presentacion</h4>
          <div class="size-options">
            ${p.sizes.map((size, i) => {
              const sizeIvaRate = getIvaRate(size);
              const sizePriceWithIva = getPriceWithIva(size.price, sizeIvaRate);
              return `
                <div class="size-option ${i === selectedSize ? 'active' : ''}" onclick="selectSize(${i})">
                  <span class="size-icon">${size.icon}</span>
                  <span class="size-name">${size.name}</span>
                  <span class="size-code">Cod: ${size.code || 'N/A'}</span>
                  <span class="size-price">${formatPrice(size.price)}</span>
                  <span class="size-iva">+ IVA ${Math.round(sizeIvaRate * 100)}%</span>
                  <span class="size-price-total">${formatPrice(sizePriceWithIva)}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        
        <div class="price-breakdown">
          <div class="price-row">
            <span>Precio base:</span>
            <span>${formatPrice(currentSize.price)}</span>
          </div>
          <div class="price-row">
            <span>IVA (${ivaPercentage}%):</span>
            <span>${formatPrice(getIvaAmount(currentSize.price, ivaRate))}</span>
          </div>
          <div class="price-row price-total">
            <span>Precio final:</span>
            <span>${formatPrice(priceWithIva)}</span>
          </div>
        </div>
        
        <div class="add-to-cart-section">
          <div class="quantity-selector">
            <span>Cantidad:</span>
            <button class="qty-btn" onclick="changeQuantity(-1)">-</button>
            <span class="quantity-value" id="modalQuantity">${quantity}</span>
            <button class="qty-btn" onclick="changeQuantity(1)">+</button>
          </div>
          <button class="btn btn-primary btn-full" onclick="addProductToCart()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon">
              <circle cx="8" cy="21" r="1"/>
              <circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            Agregar al Carrito - ${formatPrice(priceWithIva * quantity)}
          </button>
        </div>
      </div>
    </div>
  `;
}

function changeImage(index) {
  const mainImageEl = document.getElementById('mainImageEl');
  const mainImage = document.getElementById('mainImage');
  
  mainImage.innerHTML = `<img src="${selectedProduct.images[index]}" alt="${selectedProduct.name}" id="mainImageEl">`;
  
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === index);
  });
}

function showVideo() {
  const mainImage = document.getElementById('mainImage');
  mainImage.innerHTML = `
    <iframe 
      src="${selectedProduct.video}?autoplay=1" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      style="width: 100%; height: 100%;"
    ></iframe>
  `;
  
  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.classList.remove('active');
  });
  document.querySelector('.thumbnail-video').classList.add('active');
}

function selectSize(index) {
  selectedSize = index;
  renderProductModal();
}

function changeQuantity(delta) {
  quantity = Math.max(1, quantity + delta);
  document.getElementById('modalQuantity').textContent = quantity;
  
  const currentSize = selectedProduct.sizes[selectedSize];
  const ivaRate = getIvaRate(currentSize);
  const priceWithIva = getPriceWithIva(currentSize.price, ivaRate);
  
  // Update button price
  const btn = document.querySelector('.add-to-cart-section .btn-primary');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon">
      <circle cx="8" cy="21" r="1"/>
      <circle cx="19" cy="21" r="1"/>
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
    </svg>
    Agregar al Carrito - ${formatPrice(priceWithIva * quantity)}
  `;
}

function addProductToCart() {
  addToCart(selectedProduct, selectedSize, quantity);
  closeProductModalFunc();
}

closeProductModal.addEventListener('click', closeProductModalFunc);
productModalOverlay.addEventListener('click', closeProductModalFunc);

// ============ CHECKOUT ============
function openCheckoutModal() {
  if (cart.length === 0) return;
  
  renderCheckoutSummary();
  closeCartDrawer();
  checkoutModalOverlay.classList.add('active');
  checkoutModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModalFunc() {
  checkoutModalOverlay.classList.remove('active');
  checkoutModal.classList.remove('active');
  document.body.style.overflow = '';
}

function renderCheckoutSummary() {
  const subtotal = calculateSubtotal();
  const totalIva = calculateTotalIva();
  const total = calculateTotal();
  
  checkoutSummary.innerHTML = `
    <h4 class="summary-title">Resumen del Pedido</h4>
    <div class="summary-items">
      ${cart.map(item => {
        const priceWithIva = getPriceWithIva(item.price, item.ivaRate);
        return `
          <div class="summary-item">
            <span class="summary-item-name">${item.name}</span>
            <span class="summary-item-code">Cod: ${item.sizeCode}</span>
            <span class="summary-item-variant">${item.sizeName}</span>
            <span class="summary-item-qty">x${item.quantity}</span>
            <span class="summary-item-price">${formatPrice(priceWithIva * item.quantity)}</span>
          </div>
        `;
      }).join('')}
    </div>
    <div class="summary-subtotal">
      <span>Subtotal:</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="summary-iva">
      <span>IVA (15%):</span>
      <span>${formatPrice(totalIva)}</span>
    </div>
    <div class="summary-total">
      <span>Total a Pagar:</span>
      <span>${formatPrice(total)}</span>
    </div>
  `;
}

checkoutBtn.addEventListener('click', openCheckoutModal);
closeCheckoutModal.addEventListener('click', closeCheckoutModalFunc);
checkoutModalOverlay.addEventListener('click', closeCheckoutModalFunc);

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(checkoutForm);
  const data = {
    nombre: formData.get('nombre'),
    cedula: formData.get('cedula'),
    email: formData.get('email'),
    telefono: formData.get('telefono'),
    direccion: formData.get('direccion'),
    ciudad: formData.get('ciudad'),
    provincia: formData.get('provincia'),
    notas: formData.get('notas') || 'Sin notas'
  };
  
  const subtotal = calculateSubtotal();
  const totalIva = calculateTotalIva();
  const total = calculateTotal();
  
  // Build WhatsApp message
  let message = `*NUEVO PEDIDO - Tahor Clean*\n\n`;
  message += `*DATOS DEL CLIENTE*\n`;
  message += `Nombre: ${data.nombre}\n`;
  message += `Cedula: ${data.cedula}\n`;
  message += `Email: ${data.email}\n`;
  message += `Telefono: ${data.telefono}\n\n`;
  message += `*DIRECCION DE ENVIO*\n`;
  message += `${data.direccion}\n`;
  message += `${data.ciudad}${data.provincia ? ', ' + data.provincia : ''}\n\n`;
  message += `*PRODUCTOS*\n`;

  cart.forEach(item => {
    const priceWithIva = getPriceWithIva(item.price, item.ivaRate);
    const ivaPercentage = Math.round(item.ivaRate * 100);
    message += `- [${item.sizeCode}] ${item.name} (${item.sizeName}) x${item.quantity} = ${formatPrice(priceWithIva * item.quantity)} (IVA ${ivaPercentage}% incluido)\n`;
  });
  
  message += `\n*RESUMEN*\n`;
  message += `Subtotal: ${formatPrice(subtotal)}\n`;
  message += `IVA (15%): ${formatPrice(totalIva)}\n`;
  message += `*TOTAL: ${formatPrice(total)}*\n\n`;
  message += `*Notas:* ${data.notas}`;
  
  // Open WhatsApp
  const whatsappUrl = `https://wa.me/${+593958812843}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  // Clear cart and close modal
  cart = [];
  renderCart();
  closeCheckoutModalFunc();
  checkoutForm.reset();
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
});

