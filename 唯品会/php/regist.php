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
    if(($_POST['id'] == $row['id'])){
      $bool = true;
    }
}
if($bool){
  echo '名字存在';
}else{
  $user_id = $_POST['id'];
  $user_pass = $_POST['pass'];

  if(preg_match_all('/[0-9]{11}/', $user_id)){
    $sql = "INSERT INTO vip_account".
    "(id, pass, level, address) ".
    "VALUES ".
    "('$user_id','$user_pass', 0, 0)";

    mysqli_select_db( $conn, 'vip' );
    $retval = mysqli_query( $conn, $sql );
    if(! $retval ){
      die('无法插入数据: ' . mysqli_error($conn));
    }

    $createcart = "CREATE TABLE IF NOT EXISTS ".$user_id."_cart(".
      "`num` INT UNSIGNED AUTO_INCREMENT,".
      "`goods` VARCHAR(100) NOT NULL,".
      "`pic` VARCHAR(1000) NOT NULL,".
      "`info` VARCHAR(1000) NOT NULL,".
      "`price` VARCHAR(100) NOT NULL,".
      "`number` VARCHAR(100) NOT NULL,".
      "`level` VARCHAR(100) NOT NULL,".
      "PRIMARY KEY ( `num` )".
      ")ENGINE=InnoDB DEFAULT CHARSET=utf8;";
    $retval = mysqli_query( $conn, $createcart );
    if(! $retval ){
      die('创建购物车失败: ' . mysqli_error($conn));
    }
 
    echo "注册成功";
  }else{
    echo 'id不符合规范';
  }
}
mysqli_close($conn);
?>