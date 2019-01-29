<!DOCTYPE html>
<html lang="en">
  <head>
    <title>LOS TRIGALES - Contacto</title>
    
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, target-densityDpi=device-dpi, initial-scale=1.0, user-scalable=no, maximum-scale=1.0"/>
    <meta name="description" content=""/>
    <meta name="keywords" content="obras, obras civiles, obras viales, construccion, infraestructura, constructora, ingenieria, ingenieros, arquitectos"/>
    <meta name="author" content="Omnico"/>    
    
    <link type="image/jpeg" rel="icon" href="../images/favicon.png"/>
    <link type="image/ico" rel="Shortcut Icon" href="../images/favicon.ico"/>
    <link type="image/png" rel="apple-touch-icon-precomposed" sizes="144x144" href="../images/apple-touch-icon-144x144-precomposed.png"/>
    <link type="image/png" rel="apple-touch-icon-precomposed" sizes="114x114" href="../images/apple-touch-icon-114x114-precomposed.png"/>
    <link type="image/png" rel="apple-touch-icon-precomposed" sizes="72x72" href="../images/apple-touch-icon-72x72-precomposed.png"/>
    <link type="image/png" rel="apple-touch-icon-precomposed" sizes="57x57" href="../images/apple-touch-icon-57x57-precomposed.png"/>

    <meta property="og:description" content="LOS TRIGALES es un grupo empresarial paraguayo que se dedica al transporte, construcción y minería">
    <meta property="og:image" content="http://www.lostrigales.com.py/images/lostrigales-fb.jpg"/>
    <meta property="og:site_name" content="LOS TRIGALES">
    <meta property="og:title" content="LOS TRIGALES"/>
    <meta property="og:type" content="website">
    <meta property="og:url" content="http://www.lostrigales.com.py/">

    <link rel="alternate" hreflang="en" href="https://lostrigales.com.py/en" type="text/html" />
    <meta property="og:locale:alternate" content="en" />

    <link rel="alternate" hreflang="es" href="https://lostrigales.com.py/es" type="text/html" />
    <meta property="og:locale:alternate" content="es" />

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/bundle.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/lostrigales.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <!-- <link rel="stylesheet" type="text/css" href="../css/normalize.css" />
		<link rel="stylesheet" type="text/css" href="../css/demo.css" /> -->
    <link rel="stylesheet" type="text/css" href="../css/set1.css" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/0.8.2/css/flag-icon.min.css" rel="stylesheet"/>
  </head>
  <body>
    <div id="loader">
      <div class="centrize">
        <div class="v-center">
          <div id="mask"><img src="../images/logo-1.png" alt=""></div>
        </div>
      </div>
    </div>
    <header id="topnav">
      <div class="flag"><img src="../images/bandera-1.jpeg" alt=""></div>
      <div class="logo"><a href="."><img src="../images/logo-1.png" alt="" class="logo-light"></a></div>
      <div class="menu-extras">
        <div class="menu-item"><a class="navbar-toggle">
            <div class="lines"><span></span><span></span><span></span></div></a>
        </div>
      </div>
      <div id="navigation">
        <ul class="navigation-menu">
          <li><a href=".">Inicio</a></li>
          <li><a href="nosotros.php">Reseña</a></li>
          <li class="has-submenu"><a href="#">Líneas de negocios</a>
            <ul class="submenu">
              <li><a href="transporte.php">Transporte</a></li>
              <li><a href="constructora.php">Construcciones <br>Minería</a></li>
              <li><a href="lt-hormax.php">LT Hormax</a></li>
              <!-- <li><a href="representaciones.php">Representaciones</a></li> -->
            </ul>
          </li>
          <li class="active"><a href="contacto.php">Contacto</a></li>
          <li><a href="noticias.php">Noticias</a></li>
          <li class="has-submenu lang-style">
              <select class="selectpicker" id="language" data-width="fit">
                <option  value="es" selected data-content='ESPAÑOL'></option>
                <option value="en" data-content='INGLES'></option>
              </select>  
          </li>
        </ul>
      </div>
    </header>
    <section class="page-title parallax">
      <div data-parallax="scroll" data-image-src="../images/cover/contacto.jpg" class="parallax-bg"></div>
      <div class="parallax-overlay">
        <div class="centrize">
          <div class="v-center">
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="container">
        <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <div class="title">
            <h2 data-translate="contacto">Contacto</h2>
          </div>
          <div class="contact-form">
            <form id="contact-form" method="POST" action="../mail.php">
              <div class="form-group">
                <input name="fullname" type="text" placeholder="Nombre y apellido" data-required="true" class="form-control">
              </div>
              <div class="form-group">
                <input name="email" type="email" placeholder="Email" data-required="true" class="form-control">
              </div>
              <div class="form-group">
                <input name="phone" type="text" placeholder="Teléfono" class="form-control">
              </div>
              <div class="form-group">
                <input name="email" type="text" placeholder="Empresa" data-required="true" class="form-control">
              </div>
              <div class="form-group">
                <textarea name="message" placeholder="Mensaje" data-required="true" class="form-control"></textarea>
              </div>
              <div class="form-group text-center">
                <button type="submit" class="btn btn-color" data-translate="mensaje">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
        <div class="contact-container">
          <div class="col-sm-4">
            <div class="icon-box-small"><i class="icon-map"></i>
              <h4 data-translate="direccion">Dirección</h4>
              <p><span>Ruta Transchaco N° 212 Km 17.5</span><span>Mariano Roque Alonso - PARAGUAY</span></p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="icon-box-small"><i class="icon-phone"></i>
              <h4 data-translate="telefono">Teléfono</h4>
              <p><span><a href="tel+59521751325">(+595) 21 751 325</a></span><span><a href="tel:+59521755043">(+595) 21 755 043</a></span></p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="icon-box-small"><i class="icon-envelope"></i>
              <h4 data-translate="email">Email</h4>
              <p><span><a href="mailto:lostrigales@lostrigales.com.py">lostrigales@lostrigales.com.py</a></span></p>
            </div>
          </div>
        </div>
        <div class="map-container">
          <div id="map" data-lat="-25.1857834" data-lang="-57.4961128" class="full-width"></div>
        </div>
      </div>
    </section>
    <footer id="footer-widgets">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-address">
            <div class="widget">
              <h6 class="upper" data-translate="contacto">Contacto</h6>
              <p>
                <span>Ruta Transchaco N° 212 Km 17.5, Mariano Roque Alonso - Paraguay</span>
                <span><a href="tel:+59521751325">(+595) 21 751 325</a> - <a href="tel:+59521755043">(+595) 21 755 043</a></span>
                <span><a href="mailto:lostrigales@lostrigales.com.py">lostrigales@lostrigales.com.py</a></span>
                <span>Codigo Postal: 2040</span>
                <ul class="list-unstyled">
                  <li style="display: inline-block;margin-right: 10px;"><a href="https://www.facebook.com/grupolostrigales/"><i class="fab fa-facebook" style="font-size: 30px;"></i></a></li>
                  <li style="display: inline-block;margin-left: 10px;"><a href="https://www.instagram.com/grupolostrigales/?hl=es-la"><i class="fab fa-instagram" style="font-size: 30px;"></i></a></li>
                </ul>
              </p>
            </div>
          </div>
          <div class="footer-column">
            <div class="widget">
              <h6 class="upper" data-translate="web">Sitio web</h6>
              <ul class="list-unstyled">
                <li><a href="." data-translate="inicio">Inicio</a></li>
                <li><a href="nosotros.php" data-translate="resena">Reseña</a></li>
                <li><a href="lineas-de-negocios.php" data-translate="linea-negocio">Líneas de negocio</a></li>
                <li><a href="contacto.php" data-translate="contacto">Contacto</a></li>
                <li><a href="noticias.php" data-translate="noticias">Noticias</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer id="footer">
      <div class="container">
        <p>© 2017 LOS TRIGALES. Todos los derechos reservados.</p>
      </div>
    </footer>
    <link href="//fonts.googleapis.com/css?family=Roboto:400,700|Quicksand:400,500" rel="stylesheet">
    <script type="text/javascript" src="../js/jquery.js"></script>
    <script type="text/javascript" src="../js/bundle.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlEXP3c-q8EROGxfMG7lM8iQxAWQLOWws&callback"></script>
    <script type="text/javascript" src="../js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.2/js/bootstrap-select.min.js"></script>
    <script src="../js/translate.js"></script>
    <script type="text/javascript">
      $('.center-slick').slick({
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 2500,
            centerPadding: '0px',
            slidesToShow: 5,
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '0px',
                  slidesToShow: 2
                }
              }
            ]
          });
    </script>
    		<script>
			// For Demo purposes only (show hover effect on mobile devices)
			[].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
				el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
      } );
      
      
      $('#select').select2();
      $('.selectpicker').selectpicker();


                var $disabledResults = $(".js-example-disabled-results");
        $disabledResults.select2();
        $(function(){
            $('.selectpicker').selectpicker();
        });
		</script>
  </body>
</html>