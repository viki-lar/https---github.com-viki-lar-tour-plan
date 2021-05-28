<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';


//подписка

// Переменные, которые отправляет пользователь
$email2 = $_POST['email2'];

// Формирование самого письма
$title2 = "Заявка на подписку Best Tour Plan";
$body2 = "
<h2>Заявка на подписку</h2>
<b>E-mail</b> $email2<br>
";

// Настройки PHPMailer
$mail2 = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail2->isSMTP();   
    $mail2->CharSet = "UTF-8";
    $mail2->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail2->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail2->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail2->Username   = 'viktorija.lar@gmail.com'; // Логин на почте
    $mail2->Password   = '871344239vika'; // Пароль на почте
    $mail2->SMTPSecure = 'ssl';
    $mail2->Port       = 465;
    $mail2->setFrom('viktorija.lar@gmail.com', 'Виктория Ларионова'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail2->addAddress('viki.lar@yandex.ru');  
    

    
// Отправка сообщения
$mail2->isHTML(true);
$mail2->Subject = $title2;
$mail2->Body = $body2;    

// Проверяем отравленность сообщения
if ($mail2->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail2->ErrorInfo}";
}

// Отображение результата
header('location:thankyou.html');

