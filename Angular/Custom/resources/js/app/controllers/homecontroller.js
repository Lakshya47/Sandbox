app.controller('HomeController',['$scope','dataStore',function($scope,dataStore){
	
	dataStore.fetchBookList();
	
	$scope.$on('booklistupdated',function(){
		console.log(dataStore.getList());
	});
}]);