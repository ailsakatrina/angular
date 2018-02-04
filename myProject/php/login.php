<?php include 'dataTrain.php';

	$userName = test_input($_POST["userName"]);
	$passWord = test_input($_POST["userPass"]); 
	/*print_r("userName".":".$userName.",<br>"."password".":".$passWord."<br>");*/
	// 创建连接
	$conn = new mysqli('localhost', 'root', 'root','myProject');
	 
	// 检测连接
	if ($conn->connect_error) {
	    die("connect error: " . $conn->connect_error);
	} 

	else{
		$account = "SELECT userName from user where userName='$userName'";
		$resultUser = $conn->query($account);
		if ($resultUser->num_rows > 0){
	 		$pwd = "SELECT password from user where userName='$userName'";
	 		$resultPwd = $conn->query($pwd);
	 		if ($resultPwd->num_rows > 0) {
	 			while($row = $resultPwd->fetch_assoc()) {
	 				$pwdResult = $row['password'];
	 			 	if($passWord == $pwdResult){
	 			 		/*print_r("log in success");*/
	 			 		echo "log in success";
	 			 		$expire=time()+10;
						setcookie("userLogin",'yes',$expire);
					    setcookie("userName",$userName,$expire);
	 			 	}
	 			 	else{
	 			 		/*echo "wrong password!";*/
	 			 		echo "wrong password!";
	 			 	}
	 			 }
	 		}
		}
		else{
	 	
			/*echo "user does not exist";*/
			echo "user does not exist";
		}
	}


	$conn->close();
?>