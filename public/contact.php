<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// allow only POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success"=>false,"message"=>"Invalid request"]);
    exit;
}

// get form data
$name = htmlspecialchars($_POST["name"] ?? "");
$email = htmlspecialchars($_POST["email"] ?? "");
$subject = htmlspecialchars($_POST["subject"] ?? "Website Contact");
$message = htmlspecialchars($_POST["message"] ?? "");

// check required fields
if(empty($name) || empty($email) || empty($message)){
    echo json_encode(["success"=>false,"message"=>"Missing fields"]);
    exit;
}

// admin email
$to = "info@vssgranulation.com";

// email subject
$email_subject = "New Contact Message - VSS Granulation Website";

// email body
$email_body = "You received a new message from your website contact form.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "Message:\n$message\n";

// headers
$headers = "From: info@vssgranulation.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// send mail
if(mail($to,$email_subject,$email_body,$headers)){
    echo json_encode(["success"=>true]);
}else{
    echo json_encode(["success"=>false,"message"=>"Mail failed"]);
}

?>