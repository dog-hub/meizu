<?php
header("Content-type:text/html/html;charset=utf-8");

$conn = mysql_connect("localhost","root","root");

if($conn){

    mysql_select_db("meizu",$conn);
}


$com =  mysql_query("select * from com where title>1", $conn);

if($com){
    // $arr = mysql_num_rows($com);
    $obj = mysql_fetch_assoc($com);
    echo $obj["cname"]."||".$obj["path"]."||".$obj["price"];
}


?>