describe('SettingsCtrl', function () {
  'use strict';


  beforeEach(module('DemoApp'));
  beforeEach(module('mocks'));




  /*
   Inject the needed services into the s object
   */
  var s = {}, toInject = [];

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
      $controller('SettingsCtrl', injected);

    });



  describe('after instantiation', function () {

    beforeEach(function () {
      runController();
    });

    it('should set settings property', function () {
      expect($scope.settings).toBeDefined();
    });


  });



});