describe('directive messageItem', function () {
  'use strict';



  beforeEach(module('DemoApp'));
  beforeEach(module('mocks'));
  beforeEach(module('stateMock'));



  var $scope, $rootScope, $httpBackend, elem;

  beforeEach(inject(function (_$rootScope_, _$httpBackend_) {

    $httpBackend = _$httpBackend_;

    $httpBackend.whenGET('modules/DemoApp/directives/messageItem/messageItem.jade').respond('<div></div>');

    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));


  var compileDirective = function () {
    inject(function ($compile) {

      var tpl = '<message-item message="testMessage"></message-item>';
      elem = $compile(tpl)($scope);
      $scope.$digest();
      $httpBackend.flush();
    });
  };



  describe('when the message is outgoing', function(){

    beforeEach(function () {
      $scope.testMessage = {
        user: 'testUser',
        message: 'hello',
        outgoing: true
      };
      compileDirective();
    });

    it ('it should set the class from-me when compiled', function(){
      expect(elem.hasClass('from-me')).toBe(true);
    });

  });


  describe('when the message is incoming', function(){

    beforeEach(function () {
      $scope.testMessage = {
        user: 'chatbot123',
        message: 'hello'
      };
      compileDirective();
    });

    it ('it should NOT set the class from-me when compiled', function(){
      console.log(elem);
      expect(elem.hasClass('from-me')).toBe(false);
    });

  });

});