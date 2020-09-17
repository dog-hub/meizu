<?php

header("Content-type:text/html;charset=utf-8");
$title = $_GET["title"];

$conn = mysql_connect("localhost","root","root");

if($conn){
    mysql_select_db("meizu",$conn);
    echo "连接成功";

}else{
    echo "连接失败";
}

mysql_query("update com set title=$title where goodsId=1",$conn);


mysql_close($conn);


?>