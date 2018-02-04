<?php
	if(isset($_COOKIE['userLogin'])){
		if($_COOKIE['userLogin']=='yes'){
			/*session_start();
			$_SESSION['userName']=$_COOKIE['userName']; */
			echo "user log in";
		}
		/*echo $_COOKIE['userLogin'];*/
	else{
			echo "please log in first";
		}
	}
?>
