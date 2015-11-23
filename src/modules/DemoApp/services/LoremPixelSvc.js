/**
 * @ngdoc service
 * @name DemoApp.service:LoremPixelSvc
 *
 * @description
 *
 * This service contains methods to deal with LoremPixel.
 *
 */
angular.module('DemoApp').service('LoremPixelSvc', function(Current){
  'use strict';

  var picCategories = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'sports', 'technics', 'transport'];

    return  {

    getRandomPicUrl : function () {

      var category = picCategories[Math.floor(Math.random() * 100) % picCategories.length],
        index = Math.floor(Math.random() * 10),
        grayscale = Math.random() < 0.5 ? '/g' : '',
        width = Current.settings.carousel.width,
        height = Current.settings.carousel.height;

      return 'http://lorempixel.com' + grayscale + '/' + width + '/' + height + '/' + category + '/' + index;
    }

  };

});