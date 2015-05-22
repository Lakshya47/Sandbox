/*
 * Author: Lakshya Chaudhary 
 */

/* 
 * @controller: BookDetailController
 * @param1: dataStore - This service is used to get a particular Book data on basis of BOOKID.
 * @param2: $routeParams - Required in order to get the BOOKID from URL.
 */

app.controller('BookDetailController',['$scope','dataStore','$routeParams',function($scope,dataStore,$routeParams){
	
	$scope.bookDetail = dataStore.getDetailByID($routeParams.bookid);
	console.log($scope.bookDetail);
}]);