app = angular.module("myApp",[])
    .controller("myCtrl", function ($scope, $http) {
        $http.get("index.php")
            .then(function (response){
                console.log(response.data);
            })
        $scope.employees =
        
        $scope.employeeView = "employeeTable.html";

    })