myApp.controller('mainController', ['$scope', 'fetchJsonObject',
  function($scope, fetchJsonObject) {
	$scope.getJSON = function(){
		$scope.jsonData = fetchJsonObject.simple({simpleID:'details'});
	};
	$scope.checkData = function(){
		var jsonObjLength = $scope.jsonData.images.length;
		
	};
	$scope.populateImage = function(obj){
		alert($scope.jsonData.images.key);
	}
	
  }]);