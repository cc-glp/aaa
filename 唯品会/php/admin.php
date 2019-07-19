<?php
    header('Access-Control-Allow-Origin:*');
    if($_POST['key'] != 971030){
        echo '抱歉，您不具备使用该页面的权限';
        die();
    }
    $dbhost = 'localhost:3306'; 
    $dbuser = 'root';           
    $dbpass = 'ysdzmkm';        
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass);
    mysqli_select_db( $conn, 'vip' );
    $user_id = $_POST['id'];

    switch($_POST['type']){
        case 1:
            $sql = 'select * from vip_account';
            $retval = mysqli_query( $conn, $sql );
            $result = array();
            while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)){
                array_push($result, $row);
            }
            $result = json_encode($result);
        break;
        case 2:
            $sql = 'select * from '.$user_id.'_cart';
            $retval = mysqli_query( $conn, $sql );
            $result = array();
            while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC)){
                array_push($result, $row);
            }
            $result = json_encode($result);
        break;
        case 3:
            $sql = 'drop table '.$user_id.'_cart';
            $retval = mysqli_query( $conn, $sql );
            $sql = "CREATE TABLE IF NOT EXISTS ".$user_id."_cart(".
                    "`num` INT UNSIGNED AUTO_INCREMENT,".
                    "`goods` VARCHAR(100) NOT NULL,".
                    "`pic` VARCHAR(1000) NOT NULL,".
                    "`info` VARCHAR(1000) NOT NULL,".
                    "`price` VARCHAR(100) NOT NULL,".
                    "`number` VARCHAR(100) NOT NULL,".
                    "`level` VARCHAR(100) NOT NULL,".
                    "PRIMARY KEY ( `num` )".
                    ")ENGINE=InnoDB DEFAULT CHARSET=utf8;";
            mysqli_select_db( $conn, 'vip' );
            $retval = mysqli_query( $conn, $sql );
            $result = '购物车以清空';
        break;
        case 4:
            $sql = 'update vip_account set pass="'.$_POST['pass'].'" where id='.$user_id;
            $retval = mysqli_query( $conn, $sql );
            $result = $_POST['pass'];
        break;
        case 5:
            $sql = 'drop table '.$user_id.'_cart';
            $retval = mysqli_query( $conn, $sql );
            $sql = 'delete from vip_account where id='.$user_id;
            mysqli_select_db( $conn, 'vip' );
            $retval = mysqli_query( $conn, $sql );
            $result = true;
        break;
    }

    echo $result;
    mysqli_close($conn);
?>