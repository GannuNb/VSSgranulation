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

$name = $_POST["name"] ?? "";
$email = $_POST["email"] ?? "";
$subject = $_POST["subject"] ?? "Website Contact";
$message = $_POST["message"] ?? "";

if(empty($name) || empty($email) || empty($message)){
    echo json_encode(["success"=>false,"message"=>"Missing fields"]);
    exit;
}

$mail = new PHPMailer(true);

try {

    // SMTP settings
    $mail->isSMTP();
    $mail->Host = "smtp.hostinger.com";
    $mail->SMTPAuth = true;
    $mail->Username = "info@vssgranulation.com";
    $mail->Password = "YOUR_EMAIL_PASSWORD";   // replace with email password
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;

    // Sender
    $mail->setFrom("info@vssgranulation.com","Website Contact");

    // Admin receiver
    $mail->addAddress("info@vssgranulation.com");

    // Reply to user
    $mail->addReplyTo($email,$name);

    // Email content
    $mail->isHTML(false);

    $mail->Subject = "New Contact Message";

    $mail->Body =
"New Contact Message from Website

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