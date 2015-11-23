
/**
 * @ngdoc directive
 * @name DemoApp.directive:myCarousel
 * @restrict E
 *
 *
 * @description
 *
 *  The carousel directive
 *
 */
angular.module('DemoApp').directive('myCarousel', function ($timeout, Current) {
  'use strict';
  return {
    restrict: 'E',
    scope: {
      images: '=',
      loadImage: '='
    },
    templateUrl: 'modules/DemoApp/directives/myCarousel/myCarousel.jade',
    link: function (scope, element, attrs) {


      // ======================== METHODS ==================== //

      scope.nextSlide = function () {
        if ((typeof scope.loadImage === 'function') && scope.images.length === scope.currentIndex + 1) {
          scope.loadImage();
        }
        if (scope.currentIndex < scope.images.length - 1) {
          element.find('li').removeClass('active');
          $timeout(function () {
            angular.element(element.find('li')[++scope.currentIndex]).addClass('active');
          });
        }
      };


      scope.prevSlide = function () {
        if (scope.currentIndex > 0) {
          element.find('li').removeClass('active');
          angular.element(element.find('li')[--scope.currentIndex]).addClass('active');
        }
      };


      // ================= INITIALIZATION ================== //

      scope.currentIndex = scope.images.length - 1;
      scope.settings = Current.settings.carousel;

      // load first slide
      $timeout(function () {
        scope.nextSlide();
      });

    }
  };

});