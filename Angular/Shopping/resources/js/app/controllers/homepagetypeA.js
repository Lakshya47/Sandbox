/*
 * Author: Lakshya Chaudhary 
 */

/* 
 * @controller: HomePageTypeAController
 * @param1: dataStore - This service is used to fetch JSON data information of all the shopping items present at remote location.
 */

app.controller('HomePageTypeAController',['$scope','dataStore',function($scope,dataStore){
	
	/*
	 * @model: $scope.shopItemList - Initially model is empty and after the trigger of dataStoreUpdated event,
	 * the model is updated with shopping items information.
	 */
	$scope.shopItemList = null;
	
	/* 
	 * @watcher: dataStoreUpdated - This watcher listens to the "dataStoreUpdated" event.
	 * dataStoreUpdated event is fired when dataStore has successfully finished fetching the shopping items from remote location.
	 * The watcher updates & populates the Controller model with concrete data on fire of dataStoreUpdated.
	 */
	$scope.$on('dataStoreUpdated',function(){
		$scope.shopItemList = dataStore.getList();
	});
	
	//Initiating fetching of shopping items data
	dataStore.fetchBookList();
	
}]);