angular.module('DemoApp').directive('myAccordionPane', function () {
  'use strict';
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    template: '<a href="" ng-click="toggle()">{{headerText}}</a><div class="ma-pane-content" ng-transclude></div>',
    link: function (scope, element, attrs) {


      scope.headerText = attrs.header;

      scope.toggle = function () {

        var opened = element.hasClass('open');

        element.parent().find('my-accordion-pane').removeClass('open');

        if (!opened) {
          element.addClass('open');
        }

      };
    }
  };

});