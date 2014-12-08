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
  .controller('ImagesController',
    ['$scope', '$stateParams', 'imageFactory',
      function ($scope, $stateParams, images) {

        $scope.img = images.imageList[$stateParams.id];




        $scope.favourite = function (img) {
          img.favourite = !img.favourite;
        };

        $scope.update = function (img) {
          img.worn.push(new Date());
        };
      }
    ]
  );
