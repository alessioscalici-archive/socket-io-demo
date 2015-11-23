
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

      /**
       * Goes to the next slide. If there is no next slide, loads a new one using the provided function
       */
      scope.nextSlide = function () {

        // load a new image if we are on the last slide
        if ((typeof scope.loadImage === 'function') && scope.images.length === scope.currentIndex + 1) {
          scope.loadImage();
        }

        // go to the next slide
        if (scope.currentIndex < scope.images.length - 1) {
          element.find('li').removeClass('active');
          $timeout(function () {
            angular.element(element.find('li')[++scope.currentIndex]).addClass('active');
          });
        }
      };

      /**
       * Goes to the previous slide if any
       */
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