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
 
$sql = 'SELECT * FROM '.$_POST['id'].'_cart';

mysqli_select_db( $conn, 'vip' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('无法读取数据: ' . mysqli_error($conn));
}
$text = array();
while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
{
    array_push($text, $row);
}
echo json_encode($text);

mysqli_close($conn);

?>