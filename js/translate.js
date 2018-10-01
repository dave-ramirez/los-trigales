$(document).ready(function() {

    var dictionary = {
            "es": {
                "inicio": "Inicio",
                "resena" : "Reseña",
                "linea-negocio":"Línea de negocio",
                    "sublinea-transporte": "Transporte",
                    "sublinea-construccion": "Construccion y Mineria",
                    "sublinea-hormax": "LT Hormax",
                "contacto": "Contacto",
                "nosotros": "Nosotros",
                "hormigon": "Hormigón elaborado",

                // Marquee-content
                "marque-1":"Valoramos su confianza...",
                "marque-2":"Dinamismo e innovación...",
                "marque-3":"Soluciones integrales...",
                "marque-4":"Somos una opción diferente...",
                "marque-5":"Valoramos su confianza...",
                "marque-6":"Dinamismo e innovación...",
                "marque-7":"Soluciones integrales...",
                "marque-8":"Somos una opción diferente...",
                "marque-9":"Valoramos su confianza...",
                "marque-10":"Dinamismo e innovación...",
                "marque-11":"Soluciones integrales...",
                "marque-12":"Somos una opción diferente...",
                "marque-13":"Valoramos su confianza...",
                "marque-14":"Dinamismo e innovación...",
                "marque-15":"Soluciones integrales...",
                "marque-16":"Somos una opción diferente...",

                // footer
                "web": "Sitio web",
                "copyrigth": "© 2017 LOS TRIGALES. Todos los derechos reservados.",

                // Constructora
                "titulo-1": "LT VIAL - CONTRUCCIONES – MINERIA",
                "texto-1": "Es la división de construcción, nace como necesidad del país de contar con actores confiables para ampliar su infraestructura y red vial. Posee un equipo técnico de gran trayectoria que sumado a una flota de 200 máquinas y equipos diversos es de ejecutar cualquier tipo de proyecto de envergadura.",
                "nuestros-servicios": "NUESTROS SERVICIOS Y PRODUCTOS",
                "construccion-vial": "Construcción vial",
                    // "texto-vial-1": "TERRAPLENES Y ENRIPIADOS",
                    // "texto-vial-2": "PAVIMENTOS ASFÁLTICOS",
                    // "texto-vial-3": "ALCANTARILLAS Y PUENTES",
                    // "texto-vial-4": "PAVIMENTOS DE HORMIGÓN",
                "construccion-civil": "Construcción civil",
                    // "texto-civil-1": "PARQUES INDUSTRIALES",
                    // "texto-civil-2": "ESTACIONES DE SERVICIO",
                    // "texto-civil-3": "VIVIENDAS Y EDIFICIOS",
                "canteras": "Canteras",
                    // "texto-canteras-1": "LIMPIO - RIPIO Y CANTOS RODADOS",
                    // "texto-canteras-2": "BENJAMIN ACEVAL – BASALTO",
                    // "texto-canteras-3": "PIRAYU – BASALTO",
                    // "texto-canteras-4": "ESCOBAR – BASALTO",
                    // "texto-canteras-4": "EMBOSCADA – ARENISCA",
                "plantas": "Plantas trituradoras",
                    // "texto-plantas-1": "PLANTA DE TRITURACIÓN Y CLASIFICACIÓN MÓVIL",
                    // "texto-plantas-2": "PIEDRA TRITURADA 4TA, 5TA Y 6TA",
                    // "texto-plantas-3": "SERVICIO DE TRITURACIÓN IN SITU",
                    // "texto-plantas-4": "PERFORACIONES EN ROCA Y VOLADURAS",
                "planta-asfaltica": "Planta asfáltica",
                    // "texto-asfaltica-1": "PLANTA DE ELABORACIÓN DE CONCRETO ASFALTICO EN CALIENTE",
                    // "texto-asfaltica-2": "CAPACIDAD 140 TN/HORA",
                    // "texto-asfaltica-3": "PRODUCCIÓN MEDIA POR MES 20.000 TN",
                "nuestros-trabajos": "NUESTROS TRABAJOS",
                "clientes": "NUESTROS CLIENTES"
                    
                    
                    
                    
                       
                    
            },
            "en": {
                "inicio": "Home",
                "resena" : "Review",
                "linea-negocio":"Business line",
                "sublinea-transporte": "Transport",
                "sublinea-construccion": "Construction and Mining",
                "sublinea-hormax": "LT Hormax",
                "contacto": "Contact",
                "nosotros": "About",
                "hormigon": "Elaborated concrete",
                
                // Marquee-content
                "marque-1": "We value your trust...",
                "marque-2": "Dynamism and innovation...",
                "marque-3": "Integral solutions...",
                "marque-4": "We are a different option...",
                "marque-5": "We value your confidence...",
                "marque-6": "Dynamism and innovation...",
                "marque-7": "Integral solutions...",
                "marque-8": "We are a different option...",
                "marque-9": "We value your trust...",
                "marque-10": "Dynamism and innovation...",
                "marque-11": "Integral solutions...",
                "marque-12": "We are a different option...",
                "marque-13": "We value your trust...",
                "marque-14": "Dynamism and innovation...",
                "marque-15": "Integral solutions...",
                "marque-16": "We are a different option...",

                // footer

                "web": "Web site",
                "copyrigth": "© 2017 LOS TRIGALES. All rights reserved.",

                // Constructora
                "titulo-1": "LT VIAL - BUILDINGS - MINING",
                "texto-1": "It is the construction division, born as a need of the country to have reliable actors to expand its infrastructure and road network. It possesses a technical team of great trajectory that added to a fleet of 200 machines and diverse equipment is to execute any type of project of magnitude.",
                "nuestros-servicios": "OUR SERVICES AND PRODUCTS",         
                "construccion-vial": "Road construction",
                    // "texto-vial-1": "TERRAPLENES Y ENRIPIADOS",
                    // "texto-vial-2": "PAVIMENTOS ASFÁLTICOS",
                    // "texto-vial-3": "ALCANTARILLAS Y PUENTES",
                    // "texto-vial-4": "PAVIMENTOS DE HORMIGÓN",
                "construccion-civil": "Civil construction",
                    // "texto-civil-1": "PARQUES INDUSTRIALES",
                    // "texto-civil-2": "ESTACIONES DE SERVICIO",
                    // "texto-civil-3": "VIVIENDAS Y EDIFICIOS",
                "canteras": "Quarries",
                    // "texto-canteras-1": "LIMPIO - RIPIO Y CANTOS RODADOS",
                    // "texto-canteras-2": "BENJAMIN ACEVAL – BASALTO",
                    // "texto-canteras-3": "PIRAYU – BASALTO",
                    // "texto-canteras-4": "ESCOBAR – BASALTO",
                    // "texto-canteras-4": "EMBOSCADA – ARENISCA",
                "plantas": "Crushing plants",
                    // "texto-plantas-1": "PLANTA DE TRITURACIÓN Y CLASIFICACIÓN MÓVIL",
                    // "texto-plantas-2": "PIEDRA TRITURADA 4TA, 5TA Y 6TA",
                    // "texto-plantas-3": "SERVICIO DE TRITURACIÓN IN SITU",
                    // "texto-plantas-4": "PERFORACIONES EN ROCA Y VOLADURAS",
                "planta-asfaltica": "Asphalt plant",
                    // "texto-asfaltica-1": "PLANTA DE ELABORACIÓN DE CONCRETO ASFALTICO EN CALIENTE",
                    // "texto-asfaltica-2": "CAPACIDAD 140 TN/HORA",
                    // "texto-asfaltica-3": "PRODUCCIÓN MEDIA POR MES 20.000 TN",
                "nuestros-trabajos": "OUR JOBS",
                "clientes": "OUR CLIENTS"
                

            }
        };
        
        
        var set_lang = function (dictionary) {
            $("[data-translate]").each(function(){
               if($(this).is( "input" )){
                  $(this).attr('placeholder',dictionary[$(this).data("translate")] )
               } else{
                   $(this).text(dictionary[$(this).data("translate")])
               }
            })
        };
    
       // Swap languages when menu changes
        $("#language").on("change", function () {
            var language = $(this).val().toLowerCase();
    
            if (dictionary.hasOwnProperty(language)) {
                set_lang(dictionary[language]);
            }
        });
        
        // Set initial language to English
        set_lang(dictionary.es);
      });