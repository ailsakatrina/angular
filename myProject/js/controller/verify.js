myApp.controller('verify',function($scope,$timeout,$state,checkIdentity){
	$scope.chooseColor =true;
	$scope.createQR = function(ele){
		console.log(ele);
		var qrcode = new QRCode(ele, {
			width : 300,
			height : 300
		});
		function makeCode () {		
			var url = 'http://172.20.10.4/myProject/withPad2/phone.html?ticketNum=Z006&queueNum=2&padCode=0002';
			//var url = 'localhost/myProject/withPad2/phone.html?ticketNum=L006&queueNum=2&padCode=0002';
			 
			qrcode.makeCode(url);
		}
		makeCode();
	}

	var _checkID = 0;
	var _checkPhone = 0;
	$scope.check = function(){
		var ID = $('#zjhm_yyqh').val();
		if(ID==''){
			console.log('your ID please');
		}
		else{
			if(checkIdentity.check(ID)==false){
				alert('Wrong ID');
			}
			else{
				_checkID = 1;
			}
		}


		var phone = $('#phone_yyqh').val();
		if(phone==''){
			console.log('your Phone please');
		}
		else{
			if(checkIdentity.checkPhone(phone)==false){
				alert('Wrong phone');
			}
			else{
				_checkPhone = 1;
			}
		}

		if(_checkID==true&&_checkPhone==true){
			$timeout(function(){
				$scope.chooseColor = false;
				//alert('hh');
			},1000);
			$timeout(function(){
				$state.go('home.proPromote.QRcode');
				/*$scope.createQR();*/
			},2000);
		}
	}
});