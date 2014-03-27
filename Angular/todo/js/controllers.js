app.controller('listManagerController',['$scope','serverList',function($scope,serverList){
	$scope.list = {"todo": []};
	$scope.task;
	$scope.newFileName;
	$scope.addToList = function(){
		$scope.list.todo.push($scope.task);
	};
	$scope.openImageApp = function(){		    
		window.location.href="/GitRepo/Angular/todo/#/imageapp";
	};
	$scope.importList = function(){
		$scope.list = serverList.get({file:$scope.fileName});
	};
	$scope.exportList = function(){
		serverList.save({"newFileName":($scope.newFileName + '.json'),"todoList":JSON.stringify($scope.list.todo)});
	};
}]);

app.controller('mainController', ['$scope', 'fetchJsonObject',
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