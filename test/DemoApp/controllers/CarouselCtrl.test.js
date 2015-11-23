describe('CarouselCtrl', function () {
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
  var $scope,
    runController = inject(function ($controller, $rootScope) {

      // create a new clean scope for the controller
      $scope = $rootScope.$new();

      // define what's injected in the controller
      var injected = angular.extend({
        $scope: $scope
      }, s);

      // execute  the controller
      $controller('CarouselCtrl', injected);

    });



  describe('after instantiation', function () {

    beforeEach(function () {
      runController();
    });

    it('should define a property "images"', function () {
      expect($scope.images).toBeDefined();
    });


  });

  // ========================= METHODS ========================= //

  describe('Method ', function () {

    describe('.loadNewPicture()', function () {


      beforeEach(function () {
        runController();
      });

      it('should push a new image to the images collection', function () {
        var prevLength = $scope.images.length;
        $scope.loadNewPicture();
        expect($scope.images.length).toBe(prevLength + 1);
      });


    });

  });


});