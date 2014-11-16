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
  	name: 'GoPro HERO3: Black Edition',  
  	description: "Wearable and gear mountable, waterproof to 197' (60m), capable of capturing ultra-wide 1440p 48fps, 1080p 60 fps and 720p 120 fps video and 12MP photos at a rate of 30 photos per second, the HERO3: Black Edition is the world's most versatile camera.",
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
	  		days: "1 Day", 
	  		ammount: 25
	  	},{
	  		days: "3 Days",
	  		ammount: 35
	  	},{
	  		days: "7 Days", 
	  		ammount: 45
	  	},{
	  		days: "14 Days",
	  		ammount: 50
	  	},{
	  		days: "30 Days",
	  		ammount: 65
	  	}]
  },
  {
  	name: 'GoPro HD HERO2',
  	description: "The HD HERO2 has stoked out more professional and amateur athletes, adventurers and filmmakers than any other camera in the world.",
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
	  		days: "1 Day", 
	  		ammount: 15
	  	},{
	  		days: "3 Days",
	  		ammount: 25
	  	},{
	  		days: "7 Days", 
	  		ammount: 35
	  	},{
	  		days: "14 Days",
	  		ammount: 40
	  	},{
	  		days: "30 Days",
	  		ammount: 55
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

function ToggleReviewController($scope){
	$scope.visible = false;

	$scope.toggleReview = function(){
		$scope.visible = !$scope.visible;
	};
}

//Stripe function
jQuery(function($) {
  $('#payment-form').submit(function(event) {
    var $form = $(this);

    // Disable the submit button to prevent repeated clicks
    $form.find('button').prop('disabled', true);

    Stripe.card.createToken($form, stripeResponseHandler);

    // Prevent the form from submitting with the default action
    return false;
  });
});

function stripeResponseHandler(status, response) {
  var $form = $('#payment-form');

  if (response.error) {
    // Show the errors on the form
    $form.find('.payment-errors').text(response.error.message);
    $form.find('button').prop('disabled', false);
  } else {
    // response contains id and card, which contains additional card details
    var token = response.id;
    // Insert the token into the form so it gets submitted to the server
    $form.append($('<input type="hidden" name="stripeToken" />').val(token));
    // and submit
    $form.get(0).submit();
  }
};

