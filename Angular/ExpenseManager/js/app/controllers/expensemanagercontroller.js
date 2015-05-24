/*
 * Author: Lakshya Chaudhary 
 */

/* 
 * @controller: ExpenseManagerController
 * - This controller contains a form which collects expenses detail.
 * - A default set of initialisation data model is maintained which is pre-populates
 * the various form elements when controller loads.
 */

app.controller('ExpenseManagerController',['$scope',function($scope){
	
	/*
	 * $scope.mode: This model is used to differentiate between ADDING NEW EXPENSE or EDITING EXISTING EXPENSE.
	 * Possible values: 1. add, 2. edit
	 */
	$scope.mode = 'add';
	
	/*
	 * Initialisation data that pre-fills the various form elements like Select boxes and filters.
	 */
	$scope.initData = {
			paymentTypes : ['Card','Cash','Other'],
			friends : ['Andy','Mandy','Sandy','Randy'],
			currencies : [
			              {name : 'USD', value : 1},
			              {name : 'INR', value : 0.016},
			              {name : 'EUR', value : 1.10}
			              ]
	};
	
	/*
	 * Model to store list of all expenses.
	 */
	$scope.expenseList = [];
	
	/*
	 * Model which is used to maintain the current state of form.
	 */
	$scope.expenseFormData = {};
	
	/*
	 * On form submission, $scope.submitForm() function is called.
	 * Firstly, it checks all form valdiation.
	 * Second, it checks the mode (Add/Edit), if MODE = ADD then only new entry is added.
	 */
	$scope.submitForm = function(){

		// Checking form validity
		if($scope.expenseForm.$invalid){
			console.log('Form Inavlid');
			return null;
		}else{
			// Checking form mode
			if($scope.mode == 'add'){
				console.log($scope.expenseFormData);
				//Pushing new Entry into $scope.expenseList model.
				$scope.expenseList.push($scope.expenseFormData);
			}
			resetForm();
		}
	};
	
	// resetForm() is used to take form to default state.
	var resetForm = function(){
		$scope.mode = 'add';
		$scope.expenseFormData = {};
		$scope.expenseFormData.date = '';
		$scope.expenseFormData.expenseAmount = '';
		$scope.expenseFormData.expenseName = '';
		$scope.expenseFormData.friends = [];
		$scope.expenseFormData.paymentTypes = '';
		$scope.expenseAmount = '';
	};
	
	// searchList() searches given list(array) with specified obj.
	var searchList = function(obj,list){
		console.log(list.length);
		for(var i=0; i<list.length;i++){
			if(obj == list[i]){
				return true;
			}
		}
		return false;
	};
	
	// Adds new friend into list if not already present.
	$scope.addFriend = function(){
		if(!searchList($scope.newFriend,$scope.initData.friends)){
			$scope.initData.friends.push($scope.newFriend);
		}
	};
	
	// deleteExpense() searches the expense list by using the object HASH-ID and if found then deletes object
	$scope.deleteExpense = function(objID){
		for(var i=0; i<$scope.expenseList.length;i++){
			if(objID == $scope.expenseList[i].$$hashKey){
				$scope.expenseList.splice(i, 1);
				break;
			}
		}
	};
	
	// edit expense add reference of passed object to $scope.expenseFormData, then editing can be done in real time.
	$scope.editExpense = function(objID){
		$scope.mode = 'edit';
		var i;
		for(i=0; i<$scope.expenseList.length;i++){
			if(objID == $scope.expenseList[i].$$hashKey){
				console.log('object found at ' + i);
				break;
			}
		}
		
		// Assigning reference of object to $scope.expenseFormData, So that editing can be done.
		$scope.expenseFormData = $scope.expenseList[i];
		$scope.expenseAmount = $scope.expenseFormData.expenseAmount * $scope.currencyFactor;
	};
	
}]);