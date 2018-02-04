myApp
.run(['$anchorScroll', function($anchorScroll) {
 	$anchorScroll.yOffset = 1500;
}])
.controller('test',function($scope,$location,$anchorScroll){
	$scope.goto = function(url){
		$location.hash(url);
		$anchorScroll();

	}
});