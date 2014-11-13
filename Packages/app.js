(function(){
  var app = angular.module('store', []);

  app.controller("StoreController", function(){
    this.products=cameras;
  });

  app.controller("ReviewController",function(){
  	this.review={};

  	  this.addReview=function(product){
    		product.reviews.push(this.review);
    		this.review={};
    };
    this.review.createdOn = Date.now();
  });

  app.controller("PanelController", function(){
    this.tab=1;

    this.selectTab=function(setTab){
     this.tab=setTab;
    };
  
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var cameras = [
  { 
  	name: 'Scuba Package', 
  	price: 10, 
  	description: "The perfect package for those going for an underwater adventure!",
  	canPurchase: true,
  	soldOut: false,
  	images: [
	  	{
	  		full: 'images/GoPro.jpg',
	  		thumb: 'images/Thumb.jpg'
	  	},
	  	{
	  		full: 'images/Scuba.jpeg',
	  		thumb: 'images/Thumb.jpg'
	  	}],
	  reviews: [
	  	{
	  		stars: 5,
	  		body:"I love this package!",
	  		author: "wes@example.com",
	  		createdOn: 1397490980837
	  	},{
	  		stars:1,
	  		body:"Awesome Deal!",
	  		author:"sab@example.com",
	  		createdOn: 1397490980837
	  	}],
	  prices: [
	  	{
	  		days: "1", 
	  		ammount: "25"
	  	},{
	  		days: "3",
	  		ammount: "35"
	  	},{
	  		days: "7", 
	  		ammount: "45"
	  	},{
	  		days: "14",
	  		ammount: "50"
	  	},{
	  		days: "30",
	  		ammount: "65"
	  	}]
  },
  {
  	name: 'GoPro HERO3: Black Edition',
  	price: 15,
  	description: "This is the second product!",
  	canPurchase:true,
  	soldOut:false,
  	images: [
	  	{
	  		full: 'images/hero2.jpg',
	  		thumb: 'images/Thumb.jpg'
	  	},
	  	{
	  		full: 'images/Sky.jpg',
	  		thumb: 'images/Thumb.jpg'
	  	}],
	  reviews: [
	  	{
	  		stars: 5,
	  		body:"I love this package2!",
	  		author: "wes2@example.com",
	  		createdOn:1397490980837
	  	},{
	  		stars:1,
	  		body:"Awesome Deal2!",
	  		author:"sab2@example.com",
	  		createdOn: 1397490980837
	  	}],
	  prices: [
	  	{
	  		days: "1", 
	  		ammount: "15"
	  	},{
	  		days: "3",
	  		ammount: "25"
	  	},{
	  		days: "7", 
	  		ammount: "35"
	  	},{
	  		days: "14",
	  		ammount: "40"
	  	},{
	  		days: "30",
	  		ammount: "55"
	  	}]
  }];
  
})();


function checkout() {
	 document.getElementById('confirm').style.display = "none";
   document.getElementById('checkout').style.display = "block";
}
function submitCheckout() {
   document.getElementById('checkout').style.display = "none";
   document.getElementById('confirm').style.display = "block";

}
