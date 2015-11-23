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

  /**
   * @ngdoc method
   * @methodOf DemoApp.controller:CarouselCtrl
   * @name loadNewPicture
   * @description loads a new picture in the pictures collection
   */
  $scope.loadNewPicture = function () {
    $scope.images.push({ source: LoremPixelSvc.getRandomPicUrl() });
  };



  // ===================== INITIALIZATION ================= //

  // the slides collection
  $scope.images = [];



});