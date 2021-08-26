<?php


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $phone = $_POST['phone'];

    $content = ' Просьба перезвонить по номеру ' . $phone;

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";

    $success = mail("info@masterlomaster.by", 'Просьба перезвонить', $content, $headers);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
};
