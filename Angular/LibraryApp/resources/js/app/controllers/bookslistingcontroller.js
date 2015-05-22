/*
 * Author: Lakshya Chaudhary 
 */

/* 
 * @controller: BooksListingController
 * @param1: dataStore - This service is used to fetch JSON data information of all the books present at remote location.
 */

app.controller('BooksListingController',['$scope','dataStore',function($scope,dataStore){
	
	/*
	 * @model: $scope.bookListData - Initially model is empty and after the trigger of booklistupdated event,
	 * the model is updated with BookList information.
	 */
	$scope.bookListData = null;
	
	/* 
	 * @watcher: booklistupdated - This watcher listens to the "booklistupdated" event.
	 * booklistupdated event is fired when dataStore has successfully finished fetching the BookList from remote loaction.
	 * The watcher updates populates the Controller model with concrete data on fire of booklistupdated.
	 */
	$scope.$on('booklistupdated',function(){
		$scope.bookListData = dataStore.getList();
	});
	
	//Initiating fetching of BookList data
	dataStore.fetchBookList();
	
}]);