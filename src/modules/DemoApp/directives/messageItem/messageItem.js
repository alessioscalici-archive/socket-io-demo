
/**
 * @ngdoc directive
 * @name DemoApp.directive:message
 * @restrict E
 *
 *
 * @description
 *
 *  A message item in the message list
 *
 */
angular.module('DemoApp').directive('messageItem', function () {
  'use strict';
  return {
    restrict: 'E',
    replace: true,
    scope: {
      msg: '=message'
    },
    templateUrl: 'modules/DemoApp/directives/messageItem/messageItem.jade',
    link: function (scope, element, attrs) {

      // adds the from-me class to the message if it's from the current user
      //
      if (scope.msg.outgoing) {
        element.addClass('from-me');
        element.parent().addClass('from-me');
      }
    }
  };

});