'use strict';

angular.module('imgalleryApp')
  .factory('imageFactory',
    [
      function () {

        //var o = $http.get('/images');

        var o = {

          imageList: [
            {title:'Chinese shirt', image: './images/shirt2.jpg' , favourite: false, link: '',  added: new Date(),
              worn: [], category: 'Shirt', colors: ['black', 'yellow'], price: 39, seasons: ['winter', 'fall']},
            {title:'Jeans', image: './images/pants.jpg' , favourite: true, link: '',  added: new Date(),
              worn: [], category: 'Pants', colors: ['blue'], price: 50, seasons: ['any']},
            {title:'Superman shirt', image: './images/shirt.jpg' ,favourite: true, link: '', added: new Date(),
              worn: [], category: 'Shirt', colors: ['red', 'blue'], price: 50, seasons: ['summer']},
            {title:'Red shirt', image: './images/shirt3.jpg' , favourite: false, link: '',  added: new Date(),
              worn: [], category: 'Shirt', colors: ['red'], price: 50, seasons: ['summer']}
          ]
        };

        return o;
      }
    ]);
