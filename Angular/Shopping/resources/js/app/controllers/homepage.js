/*
 * Author: Lakshya Chaudhary 
 */

/* 
 * @controller: HomePageController
 * @param1: dataStore - This service is used to fetch JSON data information of all the shopping items present at remote location.
 */

app.controller('HomePageController',['$scope','dataStore',function($scope,dataStore){
	
        /*
         * model for storing Partial paths 
         * */

        $scope.partialMap = {
                "product" : "resources/partials/itemtypeA.html",
                "thumbnail" : "resources/partials/itemtypeB.html",
                "productLarge" : "resources/partials/itemtypeC.html"
        };
        
        /*
         * Function for toggling side bar
         * */
        
        var sidebar = angular.element(document.getElementById('sidebar'));
        $scope.openSidebar = function(){
            if(sidebar.hasClass('open')){
                sidebar.removeClass('open');
            }else{
                sidebar.addClass('open');
            }
        };
        
        /*
         * Page consists of 4 columns, $scope.columnModel MODEL stores the item which needs to be shown on each column.
         * Whenever dataStoreUpdated event is fired, Shop item will be pushed into the four array element of
         * $scope.columnModel one by one through loop by function renderItem(). 
         * */
        
        $scope.columnModel = [[],[],[],[]];
        
        var renderItem = function(){
            var columnNumber = 0;
            for(var i=0;i<$scope.shopItemList.items.length;i++){
                $scope.columnModel[columnNumber].push($scope.shopItemList.items[i]);
                columnNumber++;
                if(columnNumber == 4){columnNumber=0;}
                if(i == 7){columnNumber=1;}
            }
            console.log($scope.columnModel);
        }
        
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
		renderItem();
	});
	
	//Initiating fetching of shopping items data
	dataStore.fetchItems();
	
}]);