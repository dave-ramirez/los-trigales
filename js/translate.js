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
                "copyrigth": "© 2017 LOS TRIGALES. Todos los derechos reservados."

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
                "copyrigth": "© 2017 LOS TRIGALES. All rights reserved."
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