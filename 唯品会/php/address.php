<?php
    header('Access-Control-Allow-Origin:*');
    $dbhost = 'localhost:3306'; 
    $dbuser = 'root';           
    $dbpass = 'ysdzmkm';       
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    if(! $conn )
    {
        die('连接失败: ' . mysqli_error($conn));
    }
    // 设置编码，防止中文乱码
    mysqli_query($conn , "set names utf8");

    $sql = 'select address from vip_account where id='.$_POST['id'];
    mysqli_select_db( $conn, 'vip' );
    $retval = mysqli_query( $conn, $sql );
    $add = mysqli_fetch_array($retval, MYSQLI_ASSOC)['address'];

    if($add != 0){
        echo $add;
    }else{
        if($_POST['add']){
            $sql = 'update vip_account set address="'.$_POST['add'].'" where id='.$_POST['id'];
            mysqli_select_db( $conn, 'vip' );
            mysqli_query( $conn, $sql );
        } 
        echo false;  
    }  
?>     