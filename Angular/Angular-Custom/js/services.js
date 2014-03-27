myApp.factory('fetchJsonObject',['$resource',
  function($resource){
    return $resource('details/:simpleID.json',{},{
    	simple : {method : 'GET',params : {simpleID:'@id'}}
    });
 }]);