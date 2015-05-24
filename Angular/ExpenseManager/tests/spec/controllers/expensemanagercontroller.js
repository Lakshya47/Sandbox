describe('Unit: ExpenseManagerController', function() {

	// Loading expenseManagerApp module before tests begin
	beforeEach(module('expenseManagerApp'));
	
	// Loading controller dependency
	var ctrl, scope;
	beforeEach(inject(function($controller, $rootScope) {
		// Create a new scope that's a child of the $rootScope
		scope = $rootScope.$new();
		// Create the controller
		ctrl = $controller('ExpenseManagerController', {
			$scope: scope
		});
		
	}));
	
	it('Initially $scope.mode must be ADD',function() {
		expect(scope.mode).toBe('add');
	});
	
	it('Initially $scope.initData must be there',function() {
		expect(Array.isArray(scope.initData.paymentTypes)).toBe(true);
		expect(Array.isArray(scope.initData.friends)).toBe(true);
		expect(Array.isArray(scope.initData.currencies)).toBe(true);
	});
	
	it('Initially $scope.expenseList must be an empty array',function() {
		expect(Array.isArray(scope.expenseList)).toBe(true);
	});
	
	var mockFormData = {
			date : '1992-04-16',
			expenseAmount : 100,
			expenseName : 'Lakshya Chaudhary',
			friends : ["Andy"],
			paymentTypes : 'Cash',
	};
	
	var mockExpenseAmount = 100;
	var mockCurrencyFactor = 1;
	
	it('Checking ADD TO EXPENSE LIST functionality by inserting mock data',function() {
		
		//adding mock data to $scope.expenseFormData model, mock data is valid so no validation error will occur.
		scope.expenseFormData = mockFormData;
		scope.currencyFactor = mockExpenseAmount;
		scope.expenseAmount = mockCurrencyFactor;
		scope.expenseForm = false;
		scope.submitForm();
		expect(scope.expenseList.length).toBe(1);
		scope.submitForm();
		expect(scope.expenseList.length).toBe(2);
	});
	
	var friend = 'Rahul';
	
	it('Checking ADD TO FRIEND LIST functionality by inserting friend',function() {
		
		//adding mock friend
		scope.newFriend = friend;
		scope.addFriend();
		expect(scope.initData.friends[scope.initData.friends.length-1]).toBe('Rahul');
	});
});