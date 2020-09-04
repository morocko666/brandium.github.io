<?php
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su mail es: " . $email . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "enviado el: " . date('d/m/y' , time();

$para = 'r_ocharan@hotmail.com';
$asunto = 'Mensaje de la web';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
