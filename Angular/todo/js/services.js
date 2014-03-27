app.factory('serverList',['$resource',function($resource){
	return $resource('saved-lists/:file:filetype',{},{
		get : {params: {file:'@Name',filetype:'.json'}},
		save : {params: {file:'receive',filetype:'.php'},isArray: true}
	});
}]);
app.factory('fetchJsonObject',['$resource',
  function($resource){
    return $resource('details/:simpleID.json',{},{
    	simple : {method : 'GET',params : {simpleID:'@id'}}
    });
 }]);
