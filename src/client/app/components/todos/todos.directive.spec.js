/* global $q */
/* global dataservice */
/* global expect */
/* global $compile */
/* global $templateCache */
/* global $rootScope */
/* global bard */
/* jshint -W117, -W030, -W020 */
(function() {
    'use strict';

    describe('Directive: todos', function() {
        var element, vm;

        beforeEach(function() {
            bard.appModule('app');
            bard.inject(
                '$compile',
                '$q',
                '$rootScope',
                '$state',
                '$templateCache',
                'dataservice'
            );

            bard.mockService(dataservice, {
                getTodos: $q.when({})
            });
        });

        beforeEach(function() {
            var html = angular.element('<todos></todos>');
            $rootScope = $rootScope.$new();
            $templateCache.put('app/components/todos/todos.html', '');
            element = $compile(html)($rootScope);

            $rootScope.$digest(element);

            vm = element.controller('todos');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('Should open the container directive', function() {
            expect(element).to.be.ok;
            expect(vm).to.be.ok;
        });

        it('Should call dataservice getTodos', function() {
            expect(dataservice.getTodos).to.have.been.calledOnce;
        });
    });
})();
