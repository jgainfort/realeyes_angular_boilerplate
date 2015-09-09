(function() {
    'use strict';

    angular.module('app')
        .factory('dataservice', dataservice);

    function dataservice() {
        function getTodos() {
            return [
                {
                    text: 'Sample Todo #1',
                    done: false,
                },
                {
                    text: 'Sample Todo #2',
                    done: false,
                }
            ];
        }

        var service = {
            getTodos: getTodos
        };

        return service;
    }
})();