(function(){

var app = angular.module("app",[]);

app.controller('StoreController', function(){

this.products = gems;

});

var gems =[
{
  name: 'Fast and Furious',
  price: 2.95,
  description: 'Action...',
  purchase: true,
  soldout: false
},
{
  name: 'Batman 3',
  price: 2.95,
  description: 'Action...',
  purchase: false,
  soldout: false
},
{
  name: 'Goal 2',
  price: 2.95,
  description: 'Action...',
  purchase: true,
  soldout: true
},

]

})();
