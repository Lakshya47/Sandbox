/*
 * Author: Lakshya Chaudhary 
 */

/*
 * @service: dataStore - This service uses Angular's basic HTTP methods to fetch list of books
 * in form of JSON from remote location. On a successful hit "booklistupdated" event is broadcasted
 * throughout the RootScope's and its children.
 * 
 * @param1: $http - Required to make HTTP call.
 * @param2: $rootScope - Required in order to broadcast booklistupdated throughout the app.
 * 
 * returns:-
 * @method1: fetchBookList() - This method initiates the HTTP call.
 * @method2: getList() - Returns the Book List Model in which all book list information is stored.
 * @method3: getDetailByID() - Searches the Book List Model on basis of BOOKID and returns the particular book detail else returns null.
 */

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
	
	var getDetailByID = function(id){
		for(var i=0;i<bookList.books.length;i++){
			console.log(bookList.books[i]['globalbookid']);
			if(bookList.books[i]['globalbookid'] == id){
				return bookList.books[i];
			}
		}
		return null;
	};
	
	return {
		fetchBookList: fetchBookList,
		getList : getList,
		getDetailByID: getDetailByID
	}
}]);