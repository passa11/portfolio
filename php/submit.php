<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : "";
    $org = isset($_POST['org']) ? htmlspecialchars($_POST['org']) : "";
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : "";
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : "";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
    } else {
        // Prepare the email parts
        $to = 'pasaprobes@gmail.com';  // <--- Change this to your email address
        $subject = 'New Contact From Your Portfolio Site';
        $body = "You have received a new message from: $name\n\n";
        $body .= "Email: $email\n";
        $body .= "Organization/Company: $org\n\n";
        $body .= "Message:\n$message\n";

        // Set the header
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "<div class='thank-you'>Thank you for contacting me, $name! I will get back to you soon.</div>";
        } else {
            echo "<div class='error'>Oops! Something went wrong and we couldn't send your message.</div>";
        }
    }
} else {
    echo "<div class='error'>Error: Request must be POST.</div>";
}
?>
