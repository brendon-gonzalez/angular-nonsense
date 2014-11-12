'use strict';

// Define Controllers
function PhoneListCtrl($scope, $http, typography) {
  $http.get('data/phones.json').success(function(data) {
    angular.forEach(data, function(v, k) {
      v.name = typography.upperCase(v.name);
    });
    $scope.phones = data;
  });

  $scope.orderProp = 'age';

}


// Register Controllers
angular.module('phonecatApp.controllers', [])
  // .controller - Register a new controller
  // (['ControllerName', 'service', 'service', 'customModule', Handler function])
  .controller('PhoneListCtrl',
    ['$scope',
     '$http',
     'phonecatApp.typography',
     PhoneListCtrl
    ]);
