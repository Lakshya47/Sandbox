describe('dataStore Service tests', function (){
	
  var dataStoreService;
  
  beforeEach(function (){
	  
	  //loading shoppingApp module
	  module('shoppingApp');
	  inject(function(dataStore) {
		  
		  // Getting instance dataStore service
		  dataStoreService = dataStore;
	  });
  });
     
  it('should have an fetchItems function', function () {
	  expect(angular.isFunction(dataStoreService.fetchItems)).toBe(true);
  });
  
  it('should have an getList function', function () {
	  expect(angular.isFunction(dataStoreService.getList)).toBe(true);
  });
  
});