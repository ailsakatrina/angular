myApp.provider('jsonToStr',function(){
  return {
    $get:function () {
          function transformRequest(data){
            return $.param(data); 
          }
          return {
            transformRequest : transformRequest
          }
      }
  }
});

/*myApp.service('jsonToStr',function(){
  
  this.transformRequest = function(data){
       return $.param(data); 
    };
});*/

/*myApp.factory('jsonToStr',function(){
  function transformRequest(data){
     return $.param(data); 
  }
  return {
    transformRequest:transformRequest
  }
});*/
