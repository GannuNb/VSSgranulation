<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success"=>false,"message"=>"Invalid request"]);
    exit;
}

$name = htmlspecialchars($_POST["name"] ?? "");
$email = htmlspecialchars($_POST["email"] ?? "");
$subject = htmlspecialchars($_POST["subject"] ?? "Website Contact");
$message = htmlspecialchars($_POST["message"] ?? "");

if(empty($name) || empty($email) || empty($message)){
    echo json_encode(["success"=>false,"message"=>"Missing fields"]);
    exit;
}

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->Host = "smtp.hostinger.com";
    $mail->SMTPAuth = true;

    $mail->Username = "info@vssgranulation.com";
    $mail->Password = "VSSgranulation@123";

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom("info@vssgranulation.com","VSS Granulation Website");

    $mail->addAddress("info@vssgranulation.com");

    $mail->addReplyTo($email,$name);

    $mail->isHTML(false);

    $mail->Subject = "New Contact Message";

    $mail->Body =
"New Contact Message

Name: $name
Email: $email
Subject: $subject

Message:
$message
";

    $mail->send();

    echo json_encode(["success"=>true]);

} catch (Exception $e) {

    echo json_encode([
        "success"=>false,
        "error"=>$mail->ErrorInfo
    ]);

}