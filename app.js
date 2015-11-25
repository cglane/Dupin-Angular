
(function () {
  "use strict";


  angular
    .module('dupin', [
      'ngRoute',
      'underscore',
      'moment',

    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<div class = front-page><a href="#/product">Under 40?</a></div>',
          controller: 'MainController'
        })
        .when('/admin',{
          templateUrl:'views/admin/admin.html',
          controller:'AdminController'
        })
        .when('/product', {
          templateUrl: 'views/product/list.html',
          controller: 'ProductController'
        })
        .when('/product/:itemid', {
          templateUrl: 'views/product/detail.html',
          controller: 'ProductController'
        })
        .when('/shoppingCart', {
          templateUrl: 'views/shoppingCart/list.html',
          controller: 'ShoppingCartController'
        })
    });

  angular
    .module('underscore', [])
    .factory('_', function ($window) {
      return $window._;
    });
  angular
    .module('moment', [])
    .factory('moment', function ($window) {
      return $window.moment;
    });


})();
