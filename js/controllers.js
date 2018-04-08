
//Flickr image service api  
(function(){
    var myApp = angular.module('myApp',['ngMessages'])
    myApp.controller('MyController', ['$scope', '$http', function($scope, $http){	
	$scope.searchImages = function(tags){
    if($scope.myForm.$valid){
	  var flickrImageUri = "http://api.flickr.com/services/feeds/photos_public.gne";
        flickrImageUrl = flickrImageUri + "?jsoncallback=JSON_CALLBACK"
          + "&tags=" + tags
          + "&tagmode= all" 
          + "&format=json";
        $http.jsonp(flickrImageUrl).success(function (data){ 
            console.log(data);
                 $scope.images = data;
	});
    }
};
}])
})();
