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
                "noticias": "Noticias",
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
                "clientes": "NUESTROS CLIENTES",

                // Nosotros
                "texto-2": "LOS TRIGALES es un grupo empresarial paraguayo que se dedica al transporte, construcción y minería. Opera en Paraguay y países de la región. La compañía posee la capacidad operativa y técnica para la ejecución de grandes proyectos de transporte, minería y obras de infraestructura.",
                "mision-title": "Misión",
                    "mision": "Contribuir a la rentabilidad de las empresas que nos contratan, prestando servicio en el lugar adecuado, momento preciso y bajo las condiciones pactadas, utilizando modernos recursos materiales movilizados por capital humano capacitado que garantizan seguridad y competencia en nuestra gestión.",
                "vision-title": "Visión",
                    "vision": "Impulsar nuestro rumbo hacia el liderazgo en las áreas que operamos, con altos estándares de competitividad y reconocida solvencia económica que nos permitan desarrollar nuestro trabajo ofreciendo calidad y seguridad.",
                "valores-title": "Valores",
                    "valores": "Constituyen el cimiento de LOS TRIGALES… brindando sentido estructural de dirección común a todas las personas que componen la empresa, delineando el comportamiento en la labor diaria, propiciando cohesión y desarrollando una filosofía de gestión diferenciada.",
                        "subvalores-1": "Ética",
                        "subvalores-2": "Sustentabilidad",
                        "subvalores-3": "Liderazgo",
                        "subvalores-4": "Responsabilidad social y ambiental",
                "politica-title": "Políticas de seguridad y medio ambiente",
                    "politica": "LOS TRIGALES además de ofrecer soluciones integrales a sus clientes en la prestación de servicios, también opera en compromiso con la seguridad de sus funcionarios y respeto hacia el medio ambiente… es por ello que desarrolla sus actividades siguiendo los siguientes procesos",
                        "politica-text-1": "Fomentar el progreso personal y profesional de los empleados.",
                        "politica-text-2": "Implicar a todo el recurso humano en la orientación hacia una Gestión integrada, que incluya criterios de calidad, medio ambiente y prevención de riesgos laborales.",
                        "politica-text-3": "Buscar la satisfacción de los clientes como forma de asegurar la continuidad y el crecimiento de las operaciones.",
                        "politica-text-4": "Respetar el compromiso pactado al momento de la adjudicación de un determinado trabajo.",
                        "politica-text-5": "Prevenir la contaminación, mediante la aplicación de medidas organizativas y tecnológicas que sean adecuadas y viables, dentro del marco de su competencia y de sus recursos e incorporando criterios ambientales en lo que corresponde su ámbito de actuación.",
                        "politica-text-6": "Prevención de daños en la salud, y de mejora continúa de la gestión de la seguridad y salud en el trabajo.",
                        "politica-text-7": "Integrar la prevención de riesgos laborales en todas las actividades y decisiones, tanto en los procesos técnicos, en la organización del trabajo y en las condiciones que éste se presente, como en la línea jerárquica de las empresas, incluidos todos los niveles de la misma.",
                        "politica-text-8": "Anteponer las protecciones colectivas a las individuales.",
                        "politica-text-9": "Analizar los accidentes e incidentes ocurridos con el fin de implantar las adecuadas medidas correctoras.",
                        "politica-text-10": "Establecer los cauces de comunicación y formación necesarios para potenciar la participación en la prevención de riesgos laborales.", 
                
                // Noticias
                "paraguay-video-text": "Descubriendo Paraguay",
                "paraguay-video-resumen": "Breve resumen de nuestro pais",
                "video": "https://www.youtube.com/embed/0q5z76uc8Ko",

                    
            },
            "en": {
                "inicio": "Home",
                "resena" : "Review",
                "linea-negocio":"Business line",
                "sublinea-transporte": "Transport",
                "sublinea-construccion": "Construction and Mining",
                "sublinea-hormax": "LT Hormax",
                "contacto": "Contact",
                "noticias": "Notices",
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
                "clientes": "OUR CLIENTS",

                // Nosotros
                "texto-2": "LOS TRIGALES is a Paraguayan business group dedicated to transport, construction and mining. It operates in Paraguay and countries in the region. The company has the operational and technical capacity to carry out large transport, mining and infrastructure projects.",
                "mision-title": "Mission",
                    "mision": "Contribute to the profitability of the companies that hire us, providing service in the right place, at the right time and under the agreed conditions, using modern material resources mobilized by trained human capital that guarantee security and competence in our management.",
                "vision-title": "Vision",
                    "vision": "To promote our direction towards leadership in the areas we operate, with high standards of competitiveness and recognized economic solvency that allow us to develop our work offering quality and safety.",
                "valores-title": "Values",
                    "valores": "They are the foundation of LOS TRIGALES ... providing a structural sense of direction common to all the people that make up the company, delineating the behavior in the daily work, fostering cohesion and developing a philosophy of differentiated management.",
                        "subvalores-1": "Ethics",
                        "subvalores-2": "Sustainability",
                        "subvalores-3": "Leadership",
                        "subvalores-4": "Social and environmental responsibility",
                "politica-title": "Security and environmental policies",
                    "politica": "TRIGALES, in addition to offering integral solutions to its clients in the provision of services, also operates in commitment to the safety of its officials and respect for the environment ... that is why it develops its activities following the following processes.",
                        "politica-text-1": "Encourage personal and professional progress of employees.",
                        "politica-text-2": "Involving the whole human resource in the orientation towards an integrated management, which criteria of quality, environment and prevention of occupational risks.",
                        "politica-text-3": "Find customer satisfaction as a way to ensure the continuity and growth of operations.",
                        "politica-text-4": "Respect the commitment for the moment of the award of a certain job.",
                        "politica-text-5": "Prevent pollution, through the application of organizational and technological measures that are adequate and viable, within the framework of its competence and resources, and that incorporate the environmental criteria corresponding to its scope of performance.",
                        "politica-text-6": "Prevention of damage to health, and improvement of occupational safety and health management.",
                        "politica-text-7": "Integrate the prevention of occupational risks in all activities and decisions, both in the technical processes, in the organization of work and in the conditions in which it is presented, as in the hierarchical line of the companies , all levels of it.",
                        "politica-text-8": "Preposing collective protections to individual protections.",
                        "politica-text-9": "Analyze the accidents and incidents that occurred in order to implement the appropriate correction measures.",
                        "politica-text-10": "Establish the channels of communication and training necessary to enhance participation in the prevention of occupational risks.",

                // Noticias
                "paraguay-video-text": "Discovering Paraguay",
                "paraguay-video-resumen": "Brief summary of our country",

                "video": "https://www.youtube.com/embed/PLZUFKS9ggU",
                    
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