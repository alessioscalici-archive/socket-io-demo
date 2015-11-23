
/**
 * @ngdoc directive
 * @name DemoApp.directive:myAccordion
 * @restrict E
 *
 *
 * @description
 *
 *  The accordion directive
 *
 */
angular.module('DemoApp').directive('myAccordion', function () {
  'use strict';
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="my-accordion" ng-transclude></div>'
  };
});