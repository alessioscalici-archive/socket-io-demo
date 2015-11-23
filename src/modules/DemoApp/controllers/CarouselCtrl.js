/**
 * @ngdoc controller
 * @name DemoApp.controller:CarouselCtrl
 *
 * @requires $scope
 *
 * @description
 *
 * The controller of the Carousel view
 *
 */
angular.module('DemoApp').controller('CarouselCtrl', function ($scope, $timeout, Current, LoremPixelSvc){
  'use strict';


  // ===================== EXPOSED METHODS ================= //



  $scope.loadNewPicture = function () {
    $scope.images.push({ source: LoremPixelSvc.getRandomPicUrl() });
  };

  // ===================== INITIALIZATION ================= //


  $scope.images = [];




});