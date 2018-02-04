myApp.factory('serialize',function(){
  function transformRequest(data){
     return data.serialize();
  }
  return {
    transformRequest:transformRequest
  }
});

