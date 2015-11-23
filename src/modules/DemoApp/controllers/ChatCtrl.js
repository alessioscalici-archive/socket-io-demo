/**
 * @ngdoc controller
 * @name DemoApp.controller:ChatCtrl
 *
 * @requires $scope
 *
 * @description
 *
 * The controller of the Chat view
 *
 */
angular.module('DemoApp').controller('ChatCtrl', function ($scope, Current, ChatSocket){
  'use strict';


  // ===================== EXPOSED METHODS ================= //

  /**
   * @ngdoc method
   * @methodOf DemoApp.controller:ChatCtrl
   * @name postMsg
   * @description posts a new message: emits the socket.io "message" event and adds the message
   * to the collection as outgoing
   */
  $scope.postMsg = function () {

    var msg = {
      user: Current.settings.chat.username,
      date: new Date(),
      message: $scope.newMessageText,
      outgoing: true
    };

    ChatSocket.emit('message', msg);
    $scope.messages.push(msg);
    $scope.newMessageText = '';
  };




  // ===================== INITIALIZATION ================= //

  // if we are instantiating this controller, we assume the messages all read
  $scope.unreadMsgFlag = false;


});