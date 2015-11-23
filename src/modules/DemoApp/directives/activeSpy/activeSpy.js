
/**
 * @ngdoc directive
 * @name DemoApp.directive:activeSpy
 * @restrict A
 *
 *
 * @description
 *
 *  Sets the active status on the menu button depending on the current state
 *
 */
angular.module('DemoApp').directive('activeSpy', function ($state) {
  'use strict';
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {

      // updates the class based on the current state
      var updateClass = function (stateName) {
        if (stateName === attrs.uiSref) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      };

      // initialize the class at compilation time
      updateClass($state.current.name);

      // listen to state changes to update the class
      var listeners = [
        scope.$on('$stateChangeSuccess', function (event, toState) {
          updateClass(toState.name);
        }),

        scope.$on('$destroy', /* istanbul ignore next */ function () {
          angular.forEach(listeners, function (detach) {
            detach();
          });
        })
      ];



    }
  };

});