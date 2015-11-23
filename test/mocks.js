

angular.module('mocks', []).service('ChatSocket', function () {

  return {
    on: function () {},
    emit: function() {}
  };
});

angular.module('templates-main', []);


/**
 * @ngdoc overview
 * @name stateMock
 *
 * @description
 * This module is used in the unit tests to mock the ui-router $state service.
 * This is meant to avoid expecting the $httpBackend requests for templates,  decoupling them from router states.
 *
 */
angular.module('stateMock',  []).service('$state',  function(){
  'use strict';
  this.expectedTransitions = [];
  this.enabled = false;
  this.current = {
    name: 'app.dashboard'
  };
  this.transitionTo = function(stateName){
    if (!this.enabled) {
      return;
    }


    this.current.name = stateName;

    if (this.expectedTransitions.length > 0){
      var expectedState = this.expectedTransitions.shift();
      if (expectedState !== stateName){
        throw Error("Expected transition to state: " + expectedState + " but transitioned to " + stateName );
      }
    } else {
      throw Error("No more transitions were expected!");
    }
  };

  this.expectTransitionTo = function(stateName){
    this.enabled = true;
    this.expectedTransitions.push(stateName);
  };


  this.ensureAllTransitionsHappened = function(){
    if (this.enabled && this.expectedTransitions.length > 0){
      throw Error("Not all transitions happened!");
    }
  };

  this.go = this.transitionTo;
});