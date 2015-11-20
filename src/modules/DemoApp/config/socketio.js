/**
 * @ngdoc object
 * @name socketio
 *
 * @requires socketFactory, URL
 *
 * @description
 *
 * The io socket configuration for the chat
 *
 */
angular.module('DemoApp').run( function (socketFactory, URL) {
  var ChatSocket = socketFactory({
    ioSocket: io.connect(URL.socketio)
  });
  ChatSocket.forward('message');
});