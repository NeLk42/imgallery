'use strict';

angular.module('imgalleryApp')
  //.controller('MainCtrl', function ($scope, $http, socket) {
  //  $scope.awesomeThings = [];
  //
  //  $http.get('/api/things').success(function(awesomeThings) {
  //    $scope.awesomeThings = awesomeThings;
  //    socket.syncUpdates('thing', $scope.awesomeThings);
  //  });
  //
  //  $scope.addThing = function() {
  //    if($scope.newThing === '') {
  //      return;
  //    }
  //    $http.post('/api/things', { name: $scope.newThing });
  //    $scope.newThing = '';
  //  };
  //
  //  $scope.deleteThing = function(thing) {
  //    $http.delete('/api/things/' + thing._id);
  //  };
  //
  //  $scope.$on('$destroy', function () {
  //    socket.unsyncUpdates('thing');
  //  });
  //});
  .controller('MainController',
    ['$scope', 'imageFactory',
      function ($scope, images) {

        $scope.imgs = images.imageList;

        $scope.addImg = function () {
          if(!$scope.title || $scope.title === ''){return;}

          $scope.imgs.push({
            title: $scope.title,
            image: './images/boots.jpg',
            favourite: false,
            link: $scope.link,
            added: new Date(),
            worn: [],
            category: 'Shoes',
            colors: ['black'],
            price: 50,
            seasons: ['any']
          });
          $scope.title = '';
          $scope.link = '';

        };

        $scope.favourite = function (img) {
          img.favourite = !img.favourite;

        };

        $scope.update = function (img) {
          img.worn.push(new Date());
        };
      }
    ]
  );
