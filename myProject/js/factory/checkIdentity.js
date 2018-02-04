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