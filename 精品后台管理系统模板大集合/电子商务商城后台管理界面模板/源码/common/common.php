<?php
session_start();
  $mysql_server_name="localhost:3306"; 
  //改成自己的mysql数据库服务器  
  $mysql_username="root"; 
  //改成自己的mysql数据库用户名  
  $mysql_password="123456"; 
  //改成自己的mysql数据库密码  
  $mysql_database="Backstage_mysql";
   //改成自己的mysql数据库名  
  $conn=mysql_connect($mysql_server_name,
  $mysql_username,$mysql_password);   
if (!$conn){
	die("连接数据库失败：" . mysql_error());
	
}
mysql_select_db($mysql_database,$conn);//选择数据库名
mysql_query("set names utf8");  //通迅编码，指代码与数据库之间采用的编码
//数据库的断开
mysql_close($conn);
?>