/**
 * @ngdoc object
 * @name socketio
 *
 * @description
 *
 * Socket io client onfiguration
 *
 */
angular.module('DemoApp').run(function ($rootScope, ChatSocket) {

  ChatSocket.on('message', function (data) {
    $rootScope.$broadcast('NEW_MESSAGE', data);
    $rootScope.$digest();
  });

});