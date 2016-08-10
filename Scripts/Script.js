app = angular.module("myApp",[])
    .controller("myCtrl", function ($scope) {
       $scope.countries = [
           {
               name:"India",
               cities:[
                   {name:"Heberabad"},
                   {name:"Chenai"}
               ]
           }
       ]
    })
