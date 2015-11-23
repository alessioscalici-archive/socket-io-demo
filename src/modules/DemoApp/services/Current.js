/**
 * @ngdoc service
 * @name DemoApp.service:Current
 *
 * @description
 *
 * This service contains current application-wide data (e.g. current user name).
 *
 */
angular.module('DemoApp').service('Current', function(){
  'use strict';


  var me = {


    /**
     * @ngdoc property
     * @name settings
     * @propertyOf Main.service:Current
     * @type object
     *
     * @description Contains the current settings
     */
    settings: {
      carousel: {
        width: 400,
        height: 200
      },
      chat: {
        username: 'default_user'
      }
    }



  };

  return me;
});