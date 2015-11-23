describe('directibe activeSpy', function () {
  'use strict';



  beforeEach(module('DemoApp'));
  beforeEach(module('mocks'));



  var $scope, $rootScope, elem;


  var compileDirective = function (attrs) {
    inject(function (_$rootScope_, $compile) {
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      var attrs = attrs || '';
      var tpl = '<button id="test-btn" ui-sref="app.chat" active-spy>Chat</button>';
      elem = $compile(tpl)($scope);
      $scope.$digest();
    });
  };



  describe('when the we are in the state in the elements ui-sref attribute', function(){

    beforeEach(inject(function ($state) {
      $state.current.name = 'app.chat';
      compileDirective();
    }));

    it ('it should set the class active when compiled', function(){
      expect(elem.hasClass('active')).toBe(true);
    });

  });

  describe('when the we are NOT in the state in the elements ui-sref attribute', function(){

    beforeEach(inject(function ($state) {
      $state.current.name = 'app.settings';
      compileDirective();
    }));

    it ('it should NOT set the class active when compiled', function(){
      expect(elem.hasClass('active')).toBe(false);
    });

  });



  // ============================= LISTENERS ============================= //


  describe('Event', function(){

    describe('$stateChangeSuccess', function(){

      describe('if the target state is the referenced state', function(){

        var targetState;
        beforeEach(function () {
          targetState = { name: 'app.chat' };
          compileDirective();
        });

        it ('should set the class active', function(){

          $rootScope.$broadcast('$stateChangeSuccess', targetState);
          expect(elem.hasClass('active')).toBe(true);
        });

      });


      describe('if the target state is NOT the referenced state', function(){

        var targetState;
        beforeEach(function () {
          targetState = { name: 'app.settings' };
          compileDirective();
        });

        it ('should NOT set the class active', function(){

          $rootScope.$broadcast('$stateChangeSuccess', targetState);
          expect(elem.hasClass('active')).toBe(false);
        });

      });

    });

  });



});