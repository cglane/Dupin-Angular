(function () {
  "use strict";

  angular
    .module('dupin')
    .controller('MainController', function ($scope) {

    })
    .controller('ProductController', function ($scope,ProductService,CommentService,$routeParams) {
      ProductService.getProduct().success(function (items) {
        console.log(items);
        $scope.items = items;
      });
      CommentService.getComments($routeParams.itemid).success(function(posts){
        var id = $routeParams.itemid;
        var arrayofCurrentPosts = [];
        _.each(posts,function(el){
          if(el.itemId == id){
            arrayofCurrentPosts.push(el);
          }
        })
        $scope.posts = arrayofCurrentPosts;
      })

      $scope.addToShoppingCart = function (item) {
        ProductService.addToShoppingCart(item);
      };
      if($routeParams.itemid) {
      ProductService.getSingleProduct($routeParams.itemid).success(function (item) {
        $scope.item = item;
        console.log('likedPhoto: ',$scope.item);
      });
    }
    $scope.addComment = function(post,id){
      console.log(id);
      CommentService.addComment(post,id);
    }
    })
    .controller('AdminController',function($scope,AdminService,$routeParams){
      $scope.addSingleProduct = function(item){
        AdminService.addSingleProduct(item);
      }
    })
    .controller('ShoppingCartController',function($scope,ProductService){
      ProductService.getAddedItems().success(function (items) {
        var arrayItems = [];
        _.each(items,function(el){
          if(el.inShoppingCart == "yes"){
            arrayItems.push(el);
          }
        })
        console.log('inShoppingCart',arrayItems);
        $scope.shoppingItems = arrayItems;
      });
    })
})();
