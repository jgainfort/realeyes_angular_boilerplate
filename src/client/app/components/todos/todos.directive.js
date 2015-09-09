(function () {
    'use strict';

    function TodosController(dataservice) {
        var vm = this;

        // add todo to todos array
        function addTodo() {
            vm.todos.push({text: vm.formTodoText, done: false});
            vm.formTodoText = '';
        }

        // remove all done todos from array
        function clearCompleted() {
            vm.todos = _.filter(vm.todos, function(todo) {
                return !todo.done;
            });
        }

        // returns the number of todo objects in todos array
        function getTotalTodos() {
            return vm.todos.length;
        }

        // use serivce to get list of todo's
        vm.todos = dataservice.getTodos();

        // define functions available to component
        vm.getTotalTodos = getTotalTodos;
        vm.addTodo = addTodo;
        vm.clearCompleted = clearCompleted;
    }

    TodosController.$inject = ['dataservice'];

    // define todosDirective using controllerAs syntax
    function todosDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/todos/todos.html',
            scope: {
                todos: '='
            },
            controller: TodosController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    // add directive to todos component
    angular.module('app.components.todos')
        .directive('todos', todosDirective);
})();
