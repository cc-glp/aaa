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
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");
 
$sql = 'select id, pass from vip_account';
 
mysqli_select_db( $conn, 'vip' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('无法读取数据: ' . mysqli_error($conn));
}
$bool = false;
while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
{
    if($_POST['id'] == $row['id']){
      $bool = true;
      if($_POST['pass'] == $row['pass']){
        echo '登录成功';
      }else{
        echo '密码不正确';
      }
    }
}
if(!$bool){
  echo '账号不存在';
}
mysqli_close($conn);
?>
