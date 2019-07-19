<?php
header('Access-Control-Allow-Origin:*');
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = 'ysdzmkm';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
//设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");
$sql0 = 'select level from vip_account where id='.$_POST['id'];
mysqli_select_db( $conn, 'vip' );
$result = mysqli_query( $conn, $sql0 );
$level = mysqli_fetch_array($result, MYSQLI_ASSOC)['level'] + 1;


$sql1 = 'SELECT * FROM '.$_POST[id].'_cart;';
mysqli_select_db( $conn, 'vip' );
$result = mysqli_query( $conn, $sql1 );
$bool = false;

while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
    if($row['goods'] == $_POST['goods']){
        $number = $row['number'] + $_POST['number'];
        mysqli_select_db( $conn, 'vip' );
        if(($_POST['number'] == 1) && ($number == 1)){
            $sql4 = "UPDATE vip_account SET level=".$level." where id=".$_POST['id'];
            mysqli_query( $conn, $sql4 );
            mysqli_select_db( $conn, 'vip' );
            $sql2 = "UPDATE ".$_POST['id']."_cart SET number=".$number.", level=".$level." where num=".$row['num'].";";
        }else{
            if($_POST['number'] == 0){
                $number = 0;
            }
            $sql2 = "UPDATE ".$_POST['id']."_cart SET number=".$number." where num=".$row['num'].";";
        }
        mysqli_query( $conn, $sql2 );
        $bool = true;
        echo $number;
    }
}

if(!$bool){
    $sql5 = "UPDATE vip_account SET level=".$level." where id=".$_POST['id'];
    mysqli_select_db( $conn, 'vip' );
    mysqli_query( $conn, $sql5 );
    $sql3 = "INSERT INTO ".$_POST['id']."_cart ( goods, pic, info, price, number, level )".
    "VALUES".
    "( '".$_POST['goods']."', '".$_POST['pic']."', '".$_POST['info']."', '".$_POST['price']."', '".$_POST['number']."', '".$level."' );";
    mysqli_select_db( $conn, 'vip' );
    $retval = mysqli_query( $conn, $sql3 );
    echo '购物车添加成功';
}
mysqli_close($conn);

?>