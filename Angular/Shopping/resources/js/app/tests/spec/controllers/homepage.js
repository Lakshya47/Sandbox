/*
 * Author: Lakshya Chaudhary 
 */

describe('Unit: HomePageController', function() {

	// Loading shoppingApp module before tests begin
	beforeEach(module('shoppingApp'));
	
	// Loading controller dependency
	var ctrl, scope;
	beforeEach(inject(function($controller, $rootScope, dataStore) {
		// Create a new scope that's a child of the $rootScope
		scope = $rootScope.$new();
		// Create the controller
		ctrl = $controller('HomePageController', {
			$scope: scope,
			dataStore : dataStore
		});
		
	}));
	
	it('Initially $scope.shopItemList must be NULL',function() {
		expect(scope.shopItemList).toBeNull();
	});
	
	it('Initially $scope.columnModel must be of length 4',function() {
            expect(scope.columnModel.length).toBe(4);
	});
	
});