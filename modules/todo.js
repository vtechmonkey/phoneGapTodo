
	var ToDoApp = angular.module('ToDoApp',['ngStorage', 'ngMessages', 'ngRoute','todoListControllers']);


	ToDoApp.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/home', { 
				templateUrl: 'partials/basic-template.html',
				controller: 'FAQcontroller'
			}).
			when('/whatNow', { 
				templateUrl: 'partials/pointlessPartial.html',
				controller: 'FAQcontroller'
			}).
			otherwise({
			redirectTo: '/home'
			});
		}]);



	var todoListControllers = angular.module('todoListControllers', []);

	todoListControllers.controller('TodoController',['$scope', '$localStorage', function($scope, $localStorage){
		
		

		$scope.$storage = $localStorage.$default ({
		

		todo : [
			//{'title':'Build a To Do App', done: false}//start with empty array so as not to start with a lost checkbox
			//if(!angular.isObject(todo.title) todo=[];
		]

		//emptyTodo = function () {  //hides checkbox but still counts as one todo

		//angular.isObject(todo.title) todo=[];
		//}
		});


		$scope.addTodo = function () {

			$scope.$storage.todo.push({title: $scope.newTodo, done: false, importance:$scope.currentTodo.importance});
				$scope.newTodo = '';
				$scope.currentTodo.importance ='';	
			$scope.todoForm.new.$setPristine();		
			$scope.todoForm.new.$setUntouched();		
				}//close addTodo function 


		$scope.remaining = function() {
			var count = 0;
			angular.forEach($scope.$storage.todo, function(currentTodo){  //angular.forEach iterator function 
				count += currentTodo.done ? 0 : 1;  
			});
			return count;
		}

		
		$scope.deleteDone = function () {
			var i = $scope.$storage.todo.length;
			while (i--) {
				if ($scope.$storage.todo[i].done){
					$scope.$storage.todo.splice(i,1);
				}
			}
		}	


}]);


todoListControllers.controller('FAQcontroller',['$scope', function($scope){

	function FAQcontroller($scope) {

	$scope.title="question about local storage";
	$scope.body ="answer to question";
}
}]);