describe('directive myCarousel', function () {
  'use strict';



  beforeEach(module('DemoApp'));
  beforeEach(module('mocks'));



  var $scope, $rootScope, $httpBackend, $timeout, isolatedScope, elem;

  beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$timeout_) {

    $httpBackend = _$httpBackend_;
    $timeout = _$timeout_;

    $httpBackend.whenGET('modules/DemoApp/directives/myCarousel/myCarousel.jade').respond('<div></div>');

    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
  }));


  var compileDirective = function () {
    inject(function ($compile) {

      var tpl = '<my-carousel images="imagesCollection" load-image="loadImageFunc"></my-carousel>';
      elem = $compile(tpl)($scope);
      $scope.$digest();
      $httpBackend.flush();
      $timeout.flush();

      isolatedScope = elem.isolateScope();

    });
  };


  beforeEach(function () {
    $scope.imagesCollection = [{ source: 'image/url0.png' }, { source: 'image/url1.png' }];
    $scope.loadImageFunc = function () {};
  });





  // =========================== METHODS ========================== //

  describe('method', function(){

    describe('.prevSlide()', function(){

      describe('if there is a previous slide', function(){

        beforeEach(function () {
          compileDirective();
          isolatedScope.currentIndex = 1;
        });

        it ('should decrease the current index', function(){
          var prevVal = isolatedScope.currentIndex;
          isolatedScope.prevSlide();
          expect(isolatedScope.currentIndex).toBe(prevVal - 1);
        });

      });

      describe('if there is a NOT previous slide', function(){

        beforeEach(function () {
          compileDirective();
          isolatedScope.currentIndex = 0;
        });

        it ('should NOT decrease the current index', function(){
          var prevVal = isolatedScope.currentIndex;
          isolatedScope.prevSlide();
          expect(isolatedScope.currentIndex).toBe(prevVal);
        });

      });

    });



    describe('.nextSlide()', function(){

      describe('if there is NOT a next slide', function(){

        beforeEach(function () {
          compileDirective();

          isolatedScope.currentIndex = 1;
        });

        it ('should call loadImage to load a new slide', function(){
          spyOn(isolatedScope, 'loadImage');
          isolatedScope.nextSlide();
          expect(isolatedScope.loadImage).toHaveBeenCalled();
        });


      });

      describe('if there is a next slide', function(){

        beforeEach(function () {

          compileDirective();
          isolatedScope.currentIndex = 0;
        });

        it ('should NOT call loadImage to load a new slide', function(){
          spyOn(isolatedScope, 'loadImage');
          isolatedScope.nextSlide();
          expect(isolatedScope.loadImage).not.toHaveBeenCalled();
        });

      });

    });

  });



});