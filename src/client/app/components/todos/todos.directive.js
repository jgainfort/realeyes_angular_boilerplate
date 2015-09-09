/* global:_ */

(function () {
    'use strict';

    function TodosController(dataservice) {
        var vm = this;

        function addTodo() {
            vm.todos.push({text: vm.formTodoText, done: false});
            vm.formTodoText = '';
        }

        function clearCompleted() {
            vm.todos = _.filter(vm.todos, function(todo) {
                return !todo.done;
            });
        }

        function getTotalTodos() {
            return vm.todos.length;
        }

        vm.todos = dataservice.getTodos();

        vm.getTotalTodos = getTotalTodos;
        vm.addTodo = addTodo;
        vm.clearCompleted = clearCompleted;
    }

    TodosController.$inject = ['dataservice'];

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
