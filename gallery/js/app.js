var galleryApp = angular.module("bookGallery", []);

galleryApp.controller('galleryCtrl', ['$scope', function($scope) {
    $scope.test = "Gallery should contain logic and updated templatepath";
    
    $scope.count = 0;
    
    $scope.next = function() {
        $scope.count += 1;
    }
    
    $scope.prev = function() {
        if($scope.count-1 >= 0) {
            $scope.count -= 1;
        }
    }
    
    $scope.goToPage = function(page) {
        $scope.count = page;
    }
  }]);

galleryApp.directive('currentImage', function() {
    console.log("Current Image is present.");
    return {
        restrict: 'E',
        templateUrl: "js/currentImage.html"
    }
});

galleryApp.directive('navigationBlock',function() {
    console.log("Navigation element is on page.");
    return {
        restrict: 'E',
        templateUrl: "js/navigationBlock.html"
    }
});
