<?php
$username = $_POST["username"];
$surname = $_POST["surname"];
$sex = $_POST["sex"];
$age = $_POST["age"];
$phone = $_POST["phone"];
$mailbox = $_POST["mailbox"];
/*echo $mailbox;
echo $phone;
echo $age;
echo $surname;
echo $username;
echo "success";*/


$arr = array ('a'=>'success','b'=>$mailbox,'c'=>$username,'d'=>$sex,'e'=>$age,'f'=>$phone);
echo json_encode($arr);
?>