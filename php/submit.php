<?php
$name = $_POST["name"];
$organization = $_POST["org"];
$email = $_POST["email"];
$message = $_POST["message"];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.example.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->username = "you@example.com";
$mail->password = "password";

$mail->setFrom($email, $name);
$mail->addAddress("pasaprobes@gmail.com");

$mail->subject = $subject;
$mail->body = $message;

$mail->send();

echo "email sent";

?>