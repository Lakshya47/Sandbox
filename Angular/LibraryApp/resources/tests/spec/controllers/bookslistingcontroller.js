describe('Unit: BooksListingController', function() {

	// Loading libraryApp module before tests begin
	beforeEach(module('libraryApp'));
	
	// Loading controller dependency
	var ctrl, scope;
	beforeEach(inject(function($controller, $rootScope, dataStore) {
		// Create a new scope that's a child of the $rootScope
		scope = $rootScope.$new();
		// Create the controller
		ctrl = $controller('BooksListingController', {
			$scope: scope,
			dataStore : dataStore
		});
		
	}));
	
	it('Initially $scope.bookListData must be NULL',function() {
		expect(scope.bookListData).toBeNull();
	});
	
});