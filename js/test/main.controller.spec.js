describe("app", function() {

    beforeEach(module('app'));

    describe('MainController:Test', function() {

        var maincontroller;

        beforeEach(inject(function($controller) {
            maincontroller = $controller('MainController');
        }));

        it('should start with message', function() {
            expect(maincontroller.msg).toBe('Hello AngularJS!');
        });
    });
});
