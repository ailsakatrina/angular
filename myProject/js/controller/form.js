myApp.controller('form',function($scope,$http,$timeout,$state,checkPassword,jsonToStr,serialize){
	$scope.masterLog={
		userName:'',
		userPassword:''
	}
	$scope.masterSign={
		userNameNew:'',
		userPassword1:'',
		userPassword2:''
	}

	function resetLog(){
      $scope.client = angular.copy($scope.masterLog);
    }
    function resetSign(){
      $scope.user = angular.copy($scope.masterSign);
    }
	var initial = function(){
		resetLog();
		
		$scope.userLogin = false;
		$scope.userSuccess = false;
		$scope.userLogout = true;
		$scope.chooseColor = true;
		$scope.validPass = false;
		$('.loginBtn').html('Log In');
	}

	function signInitial(){
		resetSign();
		$scope.signName=false;
		$scope.validPass1=false;		
		$scope.validPass2=false;
		$scope.chooseColorNew= true;	
		$('.signinBtn').html('Sign In');
	}
	postCfg = {
	    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	};


	/*check input for login*/
	function checkPass(){
		//alert($scope.userPassword);
		if($scope.client.userName==''){
			console.log('no uer name');
			$scope.loginName=true;	
			$timeout(function(){
				$scope.loginName=false;	
			},2000);
			return false;
		}
		else{
			if($scope.client.userPassword==''){
				console.log('no password');
				$scope.loginPass=true;	
				$scope.pass_hint="plase type into your password";
				$timeout(function(){
					$scope.loginPass=false;	
				},2000);
				return false;

			}
			else{
				if(checkPassword.check($scope.client.userPassword)==false){
					console.log('no password');
					$scope.loginPass=true;	
					$scope.pass_hint="wrong formation";
					$timeout(function(){
						$scope.loginPass=false;	
					},2000);
					return false;
				}
				else{
					return true;
				} 
			}
		}
	}


	function checkSign(){
		if($scope.user.userNameNew==''){
			console.log('no uer name');
			$scope.signName=true;	
			$scope.user_hint="please type into user name";
			$timeout(function(){
				$scope.signName=false;	
			},2000);
			return false;
		}
		else{
			if($scope.user.userPassword1==''){
				console.log('no password');
				$scope.validPass1=true;	
				$scope.pass_hint1 ='please type into your password';
				$timeout(function(){
					$scope.validPass1=false;	
				},2000);
				return false;
			}
			else{
				if(checkPassword.check($scope.user.userPassword1)==false){
					console.log('invalid password');
					$scope.validPass1=true;	
					$scope.pass_hint1 ='wrong formation';
					$timeout(function(){
						$scope.validPass1=false;	
					},2000);
					return false;
				}
			
				else if($scope.user.userPassword2==''){
					console.log('no password confirmation');
					$scope.validPass2=true;	
					$scope.pass_hint2 ='please make sure of your password';	
					$timeout(function(){
						$scope.validPass2=false;
					},2000);
					return false;
				}
				else{
					if(($scope.user.userPassword1 != $scope.user.userPassword2)||(checkPassword.check($scope.user.userPassword2)==false)){
						console.log('invalid password');
						$scope.validPass2=true;	
						$scope.pass_hint2 ='wrong formation';
						$timeout(function(){
							$scope.validPass2=false;	
						},2000);
						return false;

					}
					else{
						return true;
					}
				}
			}
		}
	}

	

	/*****************************************initial***********************************/


	
	initial();
	$scope.loginInit=function(){
		initial();
	}

	$scope.checkForm=function(){
		if(checkPass()){
			var formVal = $('.logInForm');
			$http
				.post('php/login.php', serialize.transformRequest(formVal) , postCfg)
				.success(function(result){
					console.log(result);
	            	if(result=="log in success"){
	            		$('.loginBtn').button('loading').delay(2000).queue(function() {
				            $(this).button('reset');
				            $(this).dequeue(); 
			        	});
			        	$timeout(function(){
				        	$scope.chooseColor = false;
				        	$('.loginBtn').html('Success');
			        	},2010);
			        	$timeout(function(){
				        	$(".close").click();
				        	$scope.userLogin=true;
			        		$scope.userSuccess = true;
			        		$scope.userLogout = false;
			        		$('.navbar-text').find('span').html(" "+$scope.client.userName);
			        	},2500);
	            	}
	            	else if(result=="wrong password!"){
	            		alert('wrong password');
	            	}
	            	else if(result=="user does not exist"){
	            		alert('user does not exist');
	            	}
				        
	            })
	            .error(function() {
	                    alert('error!');
	             });
		}
		
		 /* $.ajax({
            //几个参数需要注意一下
                type: "POST",//方法类型
                dataType: "html",//预期服务器返回的数据类型
                url: "php/login.php" ,//url
                data: $('.logInForm').serialize(),
                success: function (result) {
                	console.log(result);
                	if(result=='1'){
                		
                		$('.loginBtn').button('loading').delay(2000).queue(function() {
				            $(this).button('reset');
				            $(this).dequeue(); 
			        	});
			        	$timeout(function(){
				        	$scope.chooseColor = false;
				        	$('.loginBtn').html('Success');
			        	},2010);
			        	$timeout(function(){
				        	$(".close").click();
				        	$scope.userLogin=true;
			        		$scope.userSuccess = true;
			        		$scope.userLogout = false;
			        		$('.navbar-text').find('span').html(" "+$scope.userName);
			        	},2500);
                	}
                	else if(result=='2'){
                		alert('wrong password');
                	}
                	else if(result=='3'){
                		alert('user does not exist');
                	}
			        
                },
                error : function() {
                    alert('error!');
                }
            });*/
	}

	$scope.logoutFun = function(){
		$scope.userLogin=false;
		$scope.userSuccess = false;
		$scope.userLogout = true;
		/*$scope.$apply();*/
		initial();
		console.log('logout');
	}


	/***********************************sign in part****************************************/

	signInitial();
	$scope.signInHandler=function(){
		/*close log in page*/
		$('.closeLogin').click();
		console.log('close first modal');
		signInitial();
	}



	/*test*/
		/*$scope.userNameNew ='xxt1';
		$scope.userPassword1 ='123456';
		$scope.userPassword2='123456';*/
	/*test*/
	/*var data = {
	    pageindex: 1,
	    pagesize: 8,
	};
	url = "php/signIn.php";
	$http
		.post(url, jsonToStr.transformRequest(data), posCfg)
	    .success(function (response) {
	        alert(response+"haha1");
	    });*/
	$scope.checkSign=function(){
		if(checkSign()){
			console.log('right formation');	
			var data = $('.signInForm');
			$http
				.post(
					"php/signIn.php", 
					serialize.transformRequest(data), postCfg)
			    .success(function (response) {
			    	if(response=='insert success'){
			    		$('.signinBtn').button('loading').delay(2000).queue(function() {
			            $(this).button('reset');
			            $(this).dequeue(); 
			        	});
			        	$timeout(function(){
				        	$scope.chooseColorNew = false;
				        	$('.signinBtn').html('Success');
			        	},2010);
			        	$timeout(function(){
				        	$(".closeSignin").click();
				        	$('.loginBtnBar').click();
				        	$scope.client.userName=$scope.user.userNameNew;
			        	},2500);
			        	console.log(response);

			    	}
			    	else if(response=='user account already exist'){
			    		
			    		$scope.signName=true;	
						$scope.user_hint=response;
						$timeout(function(){
							$scope.signName=false;	
						},2000);
			    	}
			    });
		}
	}

	$scope.checkIdentity=function(){
		$http
			.get(
				"php/checkIdentity.php"
				)
			.success(function(response){
				if(response=="user log in"){
					console.log(response);
					$state.go('home.test');
					//$scope.$apply();
				}
				else{
					console.log(response);
					alert(response);
					
				}
			});
	}
	/*$scope.proPromote=function(){
		$state.go('home.proPromote');
		console.log('promote success');
	}*/
});
