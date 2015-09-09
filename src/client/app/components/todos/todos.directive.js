(function () {
    'use strict';

    TodosController.$inject = ['dataservice'];

    function TodosController(dataservice) {
        var vm = this;

        // TODO: Get this array from a service
        vm.todos = dataservice.getTodos();

        vm.getTotalTodos = getTotalTodos;
        vm.addTodo = addTodo;
        vm.clearCompleted = clearCompleted;

        function addTodo() {
            vm.todos.push({text: vm.formTodoText, done: false});
        }

        function clearCompleted() {
            vm.todos = _.filter(vm.todos, function(todo) {
                return !todo.done;
            });
        }

        function getTotalTodos() {
            return vm.todos.length;
        }
    }

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

    angular.module('app.components.todos')
        .directive('todos', todosDirective);
})();
