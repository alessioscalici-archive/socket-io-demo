describe('directive myAccordionPane', function () {
  'use strict';



  beforeEach(module('DemoApp'));
  beforeEach(module('mocks'));



  var $scope, $rootScope, isolatedScope, accordionElem, elem;

  beforeEach(inject(function (_$rootScope_) {

    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));


  var compileDirective = function () {
    inject(function ($compile) {

      var tpl = '<my-accordion><my-accordion-pane header="Hello"></my-accordion-pane></my-accordion>';
      accordionElem = $compile(tpl)($scope);
      $scope.$digest();

      elem = accordionElem.find('my-accordion-pane');

      isolatedScope = elem.isolateScope();

    });
  };



  describe('when compiled', function(){

    beforeEach(function () {
      compileDirective();
    });

    it ('should set the headerText property to the header attribute value', function(){
      expect(isolatedScope.headerText).toBe('Hello');
    });

  });



  // =========================== METHODS ========================== //

  describe('method', function(){

    describe('.toggle()', function(){

      describe('if the panel is opened', function(){

        beforeEach(function () {
          compileDirective();
          elem.addClass('open');
        });

        it ('should remove the class "open"', function(){
          isolatedScope.toggle();
          expect(elem.hasClass('open')).toBe(false);
        });

      });


      describe('if the panel is NOT opened', function(){

        beforeEach(function () {
          compileDirective();
        });

        it ('should add the class "open"', function(){
          isolatedScope.toggle();
          expect(elem.hasClass('open')).toBe(true);
        });

      });



    });



  });



});