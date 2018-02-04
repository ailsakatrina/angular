<?php include 'dataTrain.php';
	$userName = test_input($_POST["userNameNew"]);
	$userPass = test_input($_POST["userPassNew1"]);

	$conn = new mysqli('localhost','root','root','myProject');

	if($conn->connect_error){
		die("connect error");
	}
	else{
		$account = "SELECT userName from user where userName='$userName'";
		$queryAccount = $conn->query($account);
		if($queryAccount->num_rows > 0){
			echo "user account already exist";
		}
		else{
			$insertInfo = "INSERT into user values ('$userName','$userPass')";
			if($conn->query($insertInfo)===true){
				
				$expire=time()+10;
				
			    setcookie("userName",$userName,$expire);
			    /*echo $_COOKIE["userName"];*/
				
		        /*header("Location:myIndex.php");*/
		       	echo "insert success";
			}
		}
	}
	$conn->close();

	


?>