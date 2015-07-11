/*
 * Author: Lakshya Chaudhary 
 */

/*
 * @service: dataStore - This service uses Angular's basic HTTP methods to fetch list of shopping items
 * in form of JSON from remote location. On a successful hit "dataStoreUpdated" event is emitted
 * throughout the RootScope and its children.
 * 
 * @param1: $http - Required to make HTTP call.
 * @param2: $rootScope - Required in order to broadcast dataStoreUpdated throughout the app.
 * 
 * returns:-
 * @method1: fetchBookList() - This method initiates the HTTP call.
 * @method2: getList() - Returns the Shopping Item List Model in which all items information is stored.
 */

app.factory('dataStore',['$http','$rootScope',function($http,$rootScope){
	
	var items;
	
	var fetchItems = function(){
		$http({
			method:'GET',
			url : 'shoppingitems.json'
		}).success(function(data){
			console.log('Data fetch Success');
			console.log(data);
			items = data;
			$rootScope.$broadcast('dataStoreUpdated');
		}).error(function(data){
			console.log('Data fetch Failure');
			var text = 'Hi ! Chrome doesn\'t allow template files to be loaded from local, you need to put these HTMLs on Web Server for best result. These HTMLs will work fine in Firefox.'
			alert(text);
			console.log(text)
		});
	};
	
	var getList = function(){
		return items;
	};
	
	return {
	        fetchItems: fetchItems,
		getList : getList
	}
}]);