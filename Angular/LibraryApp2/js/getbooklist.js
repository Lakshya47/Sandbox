app.factory('getBookList',['$http','$rootScope',function(h,r){
	console.log('inside getBookList');
	
	var list = {};
	
	var fetchList = function(){
		h({
			url:'templates/searchbook.json',
			method:'GET'
		}).then(function(data){
			console.log('Data fetch Success');
			console.log(data.data.books);
			//list = data.data.books;
			r.$broadcast('LIST_UPDATED');
		},function(e){
			console.log('Data fetch Failure');
			console.log(e);
		});
	};
	
	var getList = function(){
		return list;
	};
		
	return {
		fetchList : fetchList,
		getList : getList
	};
}]);