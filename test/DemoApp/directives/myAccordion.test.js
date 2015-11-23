describe('directive myAccordion', function () {
  'use strict';



  beforeEach(module('DemoApp'));
  beforeEach(module('mocks'));




  var $scope, $rootScope, elem;

  beforeEach(inject(function (_$rootScope_) {


    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));


  var compileDirective = function () {
    inject(function ($compile) {

      var tpl = '<my-accordion></my-accordion>';
      elem = $compile(tpl)($scope);
      $scope.$digest();
    });
  };



  describe('compile', function(){

    beforeEach(function () {
      compileDirective();
    });

    it ('it should do nothing special', function(){
      expect(true).toBe(true);
    });

  });



});