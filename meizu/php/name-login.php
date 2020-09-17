<?php
    header("Content-type:text/html;charset=utf-8");
    $userName = $_GET["username"];
    $phoneNumber = $_GET["phonenumber"];
    $passWord = $_GET["password"];

    $conn = mysql_connect("localhost","root","root");

    if($conn){
        // echo "连接成功！";
        mysql_select_db("meizu",$conn);
        // mysql_select_db($conn,"com");
    }else{
        echo "连接服务器失败!";
    }
    // echo $userName;
    // echo  $phoneNumber;
    // echo $passWord;


    // $com =  mysql_query($conn,"select pwd from meizu where userName='$userName' or telephone='$phoneNumber'");

     // id用来做排序
    // $com =  mysql_query("select * from meizu where id", $conn);
    // $id = mysql_num_rows($com);
    //添加
    // mysql_query("insert into meizu values ($id,'$userName','$phoneNumber','$passWord','')", $conn);
     // 单独添加
    // mysql_query($conn,"insert into meizu(id,userName,telephone,pwd) values ($id,' $userName','$phoneNumber','$passWord')");
    
    // //商品
    // mysql_query($conn,"insert into meizu(commodity) values ('dsadsadasdasdasdasdasdasdasd')");

    // // 查找
    
    $com =  mysql_query("select pwd from meizu where userName='$userName' and telephone='$phoneNumber'", $conn);

    
    if($com){
        $arr = mysql_num_rows($com);
        $obj = mysql_fetch_assoc($com);
        $key =  $obj["pwd"];
        if($key=="$passWord"){
            echo 1;
        }else{
            echo 0;
        }
        // echo $arr;
        // echo $obj;
        // echo $key;
        // echo 'success';
    }

    // $obj = mysql_fetch_assoc($com);
    // $key =  $obj["pwd"];
    // echo $key;
    // if($key ==$passWord){
    //     echo "1";
    // }else{
    //     echo "0";
    // }

    // echo $arr;

    // $obj = mysql_fetch_assoc($com);
    // echo $obj["commodity"];
    mysql_close($conn);
?>