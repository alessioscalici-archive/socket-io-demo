describe('ChatCtrl', function () {
  'use strict';


  beforeEach(module('DemoApp'));
  beforeEach(module('mocks'));




  /*
   Inject the needed services into the s object
   */
  var s = {}, toInject = ['ChatSocket'];

  beforeEach(inject(function ($injector, $q) {
    for (var i=0; i<toInject.length; ++i)
      s[toInject[i]] = $injector.get(toInject[i]);
  }));


  // runs the controller
  var $scope,
    runController = inject(function ($controller, $rootScope) {

      // create a new clean scope for the controller
      var appScope = $rootScope.$new();
      $scope = appScope.$new();

      // define what's injected in the controller
      var injected = angular.extend({
        $scope: $scope
      }, s);

      // execute  the controller
      $controller('ApplicationCtrl', { $scope: appScope });
      $controller('ChatCtrl', injected);

    });



  describe('after instantiation', function () {

    beforeEach(function () {
      runController();
    });

    it('should set unreadMsgFlag to false', function () {
      expect($scope.unreadMsgFlag).toBe(false);
    });


  });

  // ========================= METHODS ========================= //

  describe('Method ', function () {

    describe('.postMsg()', function () {

      beforeEach(function () {
        $scope.messages = [];
        $scope.newMessageText = 'hello';
        runController();
      });

      it('should push a new message to the messages collection', function () {
        var prevLength = $scope.messages.length;
        $scope.postMsg();
        expect($scope.messages.length).toBe(prevLength + 1);
      });

      it('should set newMessageText to empty string', function () {
        $scope.postMsg();
        expect($scope.newMessageText).toBe('');
      });


    });

  });


});