app.directive('listDirective',['getBookList',function(getBookList){
		return {
			restrict : 'E',
			template : '<div class="clearfix" ng-repeat="item in $parent.tempo"><div class="column">{{item.globalbookid}}</div><div class="column">{{item.title}}</div></div>',
			scope: {
			      list: '=list'
			    },
			link : function(scope, element, attrs){
				console.log('inside listDirective');
				getBookList.fetchList();
				scope.$on('LIST_UPDATED',function(){
					console.log('directive scope variable updated');
					console.log(scope.list);
					scope.list = getBookList.getList();
					console.log(scope.list);
				});
			}
		}
}]);