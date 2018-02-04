var regID=/(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
var regPhone=/(^\d{15}$)|(^\d{17}([0-9]|X)$)/;

myApp.directive('rightID',function(){
	return {
		require:'ngModel',
		link:function(scope,ele,attr,ctrl){
			ctrl.$parsers.unshift(function(viewValue){
				if(regID.test(viewValue)){
					ctrl.$setValidity('ID',true);
					return viewValue;
				}
				else{
					ctrl.$setValidity('ID',false);
					return undefined;
				}
			});
		}
	}
});

myApp.directive('rightPhone',function(){
	return {
		require:'ngModel',
		link:function(scope,ele,attr,ctrl){
			ctrl.$parsers.unshift(function(viewValue){
				if(regPhone.test(viewValue.toUpperCase())){
					ctrl.$setValidity('phone',true);
					return viewValue;
				}
				else{
					ctrl.$setValidity('phone',false);
					return undefined;
				}
			});
		}
	}
});


