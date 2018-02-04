myApp.service('checkPassword',function(){
    this.check = function(pass){
       var reg = /^[A-Za-z0-9]{6,8}$/;
       if(!reg.test(pass)){
       		return false;
       }
       else return true;
    };
});