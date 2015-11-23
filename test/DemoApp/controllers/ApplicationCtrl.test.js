describe('ApplicationCtrl', function () {
  'use strict';


  beforeEach(module('DemoApp'));
  beforeEach(module('mocks'));




  /*
   Inject the needed services into the s object
   */
  var s = {}, toInject = ['$rootScope'];

  beforeEach(inject(function ($injector, $q) {
    for (var i=0; i<toInject.length; ++i)
      s[toInject[i]] = $injector.get(toInject[i]);
  }));


  // runs the controller
  var $scope, $state,
    runController = inject(function ($controller, $rootScope) {

      $state = {
        current: {
          name: 'app.chat'
        }
      };
      // create a new clean scope for the controller
      $scope = $rootScope.$new();

      // define what's injected in the controller
      var injected = angular.extend({
        $scope: $scope,
        $state: $state
      }, s);

      // execute  the controller
      $controller('ApplicationCtrl', injected);

    });



  describe('after instantiation', function () {

    beforeEach(function () {
      runController();
    });

    it('should define a property "messages"', function () {
      expect($scope.messages).toBeDefined();
    });
    it('should define a property "unreadMsgFlag" set to false', function () {
      expect($scope.unreadMsgFlag).toBe(false);
    });


  });

  // ========================= EVENTS ========================= //

  describe('Event ', function () {

    describe('NEW_MESSAGE', function () {

      var testMsg;

      beforeEach(function () {
        testMsg = { user: 'chatbot123', message: 'hello' };
        runController();
      });

      it('should push the message to the messages collection', function () {
        var prevLength = $scope.messages.length;
        s.$rootScope.$broadcast('NEW_MESSAGE', testMsg);
        expect($scope.messages.length).toBe(prevLength + 1);
      });

      describe('if we are in the chat state', function () {

        beforeEach(function () {
          $state.current.name = 'app.chat';
        });

        it('the unreadMsgFlag should be false', function () {
          s.$rootScope.$broadcast('NEW_MESSAGE', testMsg);
          expect($scope.unreadMsgFlag).toBe(false);
        });

      });


      describe('if we are NOT in the chat state', function () {

        beforeEach(function () {
          $state.current.name = 'app.settings';
        });

        it('the unreadMsgFlag should be set to true', function () {
          s.$rootScope.$broadcast('NEW_MESSAGE', testMsg);
          expect($scope.unreadMsgFlag).toBe(true);
        });

      });

    });

  });


});