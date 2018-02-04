myApp.directive('qrcode',['$timeout','$http',function($timeout,$http){
    return {
        restrict:'AEMC',
        transclude:true,
        template: '<div id="qrcode"></div>',
        link:function(scope,ele,attr){
           scope.createQR(ele.children()[0]);
        }
    }
}]);

