app.factory('dataStore',['$http','$rootScope',function($http,$rootScope){
	
	var bookList;
	
	var fetchBookList = function(){
		$http({
			method:'GET',
			url : 'searchbook.json'
		}).success(function(data){
			console.log('Data fetch Success');
			console.log(data);
			bookList = data;
			$rootScope.$broadcast('booklistupdated');
		}).error(function(data){
			console.log('Data fetch Failure');
		});
	};
	
	var getList = function(){
		return bookList;
	};
	
	return {
		fetchBookList: fetchBookList,
		getList : getList
	}
}]);