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
angular.module('DemoApp').controller('CarouselCtrl', function ($scope){
  'use strict';


  // ===================== EXPOSED METHODS ================= //






  // ===================== INITIALIZATION ================= //


  angular.element(document.querySelector('.rn-carousel-control-prev')).on('click', function () {
    console.log('PREV!');
  });
  angular.element(document.querySelector('.rn-carousel-control-next')).on('click', function () {
    console.log('NEXT!');
  });

});