<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form fields
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Recipient (your email)
    $to = "nwayoopyaezo@outlook.com";

    // Email subject
    $mail_subject = "Contact Form: " . $subject;

    // Email body
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Subject: $subject\n\n";
    $body .= "Message:\n$message\n";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $mail_subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again.";
    }
}
