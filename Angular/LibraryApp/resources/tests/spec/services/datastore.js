describe('dataStore Service tests', function (){
	
  var dataStoreService;
  beforeEach(function (){
	  module('libraryApp');
	  inject(function(dataStore) {
		  dataStoreService = dataStore;
	  });
  });
     
  it('should have an fetchBookList function', function () {
	  expect(angular.isFunction(dataStoreService.fetchBookList)).toBe(true);
  });
  
  it('should have an getList function', function () {
	  expect(angular.isFunction(dataStoreService.getList)).toBe(true);
  });
  
  it('should have an getDetailByID function', function () {
	  expect(angular.isFunction(dataStoreService.getDetailByID)).toBe(true);
  });
  
});