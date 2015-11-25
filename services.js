(function () {
  "use strict";

  angular
    .module('dupin')
    .factory('CommentService',function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/dupinComments1';
      var getComments = function(itemId){
        console.log("itemId",itemId)
        var array = $http.get(url);
        console.log('array',array);
        return $http.get(url);
      };
      var addComment = function(comment,post){
        console.log('newID',post._id);
      var actualComment = {
        username : 'charles',
        description: comment.description,
        itemId: post._id,
      }
        $http.post(url,actualComment).success(function(res){
          console.log(res);
        });
      };
      return{
        getComments:getComments,
        addComment:addComment,
      };
    })
    .factory('ProductService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/dupin1';
      var getProduct = function (item) {
        return $http.get(url);
      };
      var addToShoppingCart = function(item){
        item.inShoppingCart = 'yes';
        $http.put(url + '/' + item._id,item).then(function(res){
          console.log("add to Shopping Cart",res);
        })
      };
      var getSingleProduct = function (itemId) {
        return $http.get(url + '/' + itemId);
      };
      var updateSingleProduct = function (item) {
        $http.put(url + '/' + item._id, item).then(function (res) {
          console.log(res);
        });
      };
      var getAddedItems = function(item){
      return $http.get(url);
      };
      return {
        getProduct:getProduct,
        getSingleProduct:getSingleProduct,
        updateSingleProduct:updateSingleProduct,
        getAddedItems:getAddedItems,
        addToShoppingCart:addToShoppingCart,
      };
    })
    // .factory('ShopingCartService',function($http){
    //   var url = 'http://tiny-tiny.herokuapp.com/collections/dupin1';
    //   var getAddedItems = function(item){
    //     return $http.get(url);
    //   //   var obj = $http.get(url);
    //   //   _.each(obj,function(el){
    //   //     console.log(el);
    //   //   })
    //   // }
    // }
    // })
    .factory('AdminService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/dupin1';
      var addSingleProduct = function (item) {
        item.inShoppingCart = "No";
        $http.post(url, item).success(function (res) {
          console.log(res);
        });
      };
      var deleteSingleProduct = function (itemId) {
        $http.delete(url + '/' + itemid).then(function (res) {
          console.log(res);
        });
      };
      var updateSingleProduct = function (item) {
        $http.put(url + '/' + item._id, item).then(function (res) {
          console.log(res);
        });
      };
      return{
        addSingleProduct:addSingleProduct,
        deleteSingleProduct:deleteSingleProduct,
        updateSingleProduct:updateSingleProduct,
      }
  })
})();
