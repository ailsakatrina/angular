/**
  * 判断是否是身份证号码
  * @param {string} ywList
*/
myApp.service('checkIdentity',function(){
	this.check=function(num){
		num = num.toUpperCase();
		var reg=/(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
	    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
	    if (!reg.test(num)) {
	        // alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
	        return false;
	    } 
	    else {
	        return true;
	    }
	};
	this.checkPhone=function(num){
		var reg = /^1[34578]\d{9}$/;
	    if(!reg.test(num)){
	    	return false;
	    } 
	    else {
	        return true;
	    }
	};
		
});