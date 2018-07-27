<?php

$to = "lostrigales@lostrigales.com.py";
$cc = "hola@hilumos.com";
$subject = "Texaro - Inscripción";

if ($_POST) {
  $fullname = stripslashes($_POST['fullname']);
  $email = trim($_POST['email']);
  $phone = stripslashes($_POST['phone']);
  $company = stripslashes($_POST['company']);
  $message = stripslashes($_POST['message']);

  $error = '';

  if (!$name) {
    $error .= '<p>Ingresa tu nombre y apellido</p>';
  }
  
  if (!$email) {
    $error .= '<p>Ingresa un email</p>';
  }

  if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $error .= "<p>Email no válido</p>";
  }

  $mess = "Nombre y apellido: " . $fullname . "\r\n";
  $mess .= "Telefono: " . $phone . "\r\n";
  $mess .= "Email: " . $email . "\r\n";
  $mess .= "Empresa: " . $company . "\r\n";
  $mess .= "Mensaje: " . $company . "\r\n";

  if (!$error) {
    $mail = mail($to, $subject, $mess,
    "From: ".$fullname." <".$email.">\r\n"
    ."Reply-To: ".$fullname."<".$email.">\r\n"
    ."CC: ".$cc."\r\n"
    );

    if ($mail) {
      echo "Ok";
    }
    else{
      header('HTTP/1.1 500 ' . $error );
      exit();
    }
  }
  else{
    echo $error;
  }
}

?>
