<?php


 

$sendmail = "selluscar@yandex.ru";
$model = $_POST['fio'];
$phone = $_POST['phone'];
$adress = $_POST['adress'];
$email = $_POST['email'];
$koupon = $_POST['koupon'];
$model = $_POST['model'];
$mileage = $_POST['mileage'];
$tyres = $_POST['tyres'];
$year = $_POST['year'];
$ptsnumber = $_POST['pts-number'];
$ptsplace = $_POST['pts-place'];
$ptsdate = $_POST['pts-date'];
$gosnomer = $_POST['gosnomer'];
$vin = $_POST['vin'];
$frame = $_POST['frame'];
$max = $_POST['max'];
$min = $_POST['min'];


$city = $_POST['city'];


$photos = count($_POST)-5;
$i = 0; 
while ($i <= $photos) {
	 $file = "file".$i;
     $files .= "Фото".$i.": http://to-auto-chelny.ru/uploads/".$_POST[$file]."<br>";
     $i++;
}
 

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$message = "Модель авто: ".$model."<br>".
           "Телефон: ".$phone."<br>".
           "E-mail:".$email."<br>".
           "Город: ".$city."<br>".
           "Адрес:".$adress."<br>".
           "Код купона:".$koupon."<br>".
           "Пробег:".$mileage."<br>".
           "Шины:".$tyres."<br>".
           "Год выпуска:".$year."<br>".
           "Номер и серия ПТС или СТС:".$ptsnumber."<br>".
           "Кем выдан ПТС:".$ptsplace."<br>".
           "Дата выдачи ПТС:".$ptsdate."<br>".
           "Госномер автомобиля:".$gosnomer."<br>".
           "VIN номер автомобиля:".$vin."<br>".
           "Номер рамы автомобиля:".$frame."<br>".
           "Масса без нагрузки:".$min."<br>".
           "Максимальная разрешенная масса:".$max."<br>".
		   $files;
		   

mail($sendmail, "Новая заявка на ТЕХОСМОТР", "$message", $headers); 

$sms = "Техосмотр: ".$fio."%20".$phone;
$sms = str_replace(" ", "%20", $sms);

$body=file_get_contents("http://sms.ru/sms/send?api_id=c7cd3160-b628-54b4-6560-6de19c9fade9&to=79274941020&text=$sms");


?>