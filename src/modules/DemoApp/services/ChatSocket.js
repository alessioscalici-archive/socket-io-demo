/**
 * @ngdoc service
 * @name DemoApp.service:ChatSocket
 *
 * @description
 *
 * This service makes the socket available through the app
 *
 */
angular.module('DemoApp').factory('ChatSocket', function (URL) {

  return io.connect(URL.socketio);;
});