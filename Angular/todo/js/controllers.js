app.controller('handlePageTransition',['$scope','$timeout','$location',function($scope,$timeout,$location){
	/*$scope.currentRoute = window.location.href;
	$scope.displayURL = function(){
		var temp = $scope.currentRoute.split('/');
		temp = temp[temp.length-1]
		console.log(temp);
		if(!temp.localeCompare('todo')){
			$scope.todoAnimate = '';
			$scope.imageAppAnimate = '';
			window.location.href="/GitRepo/Angular/todo/#/imageapp";
		}
		
	};*/
	$scope.leftPage = function(){
		$scope.pageTransition = 'slide-right';
		$location.path('/imageapp');
	};
	$scope.rightPage = function(){
		$scope.pageTransition = 'slide-left';
		$location.path('/todo');
	};
}]);
app.controller('listManagerController',['$scope','serverList',function($scope,serverList){
	$scope.list = {"todo": []};
	$scope.task;
	$scope.newFileName;
	
	var checkListItemAlreadyExist = function(array,element){
		if(array.indexOf(element) == -1){
			return false;
		}
			return true;
	};
	$scope.addToList = function(){
		if(!checkListItemAlreadyExist($scope.list.todo,$scope.task)){
			$scope.list.todo.push($scope.task);
			$scope.task = '';
		}else{
			alert("Item already exist");
		}
	};
	$scope.removeFromList = function(listItem){
		$scope.list.todo.splice($scope.list.todo.indexOf(listItem), 1);
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