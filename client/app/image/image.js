'use strict';

angular.module('imgalleryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('images', {
        url:'/images/{id}',
        templateUrl: 'app/image/image.html',
        controller: 'ImagesController'
      });
  });
