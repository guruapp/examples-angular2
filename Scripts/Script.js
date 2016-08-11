app = angular.module("myApp",[])
    .controller("myCtrl", function ($scope) {
        $scope.employees = [
            {name:"Vadim",gender: "male", salary:5500},
            {name:"Sara",gender: "female", salary:6800},
            {name:"Mark",gender: "male", salary:5700},
            {name:"Pam",gender: "female", salary:5300},
            {name:"Todd",gender: "male", salary:5200}
        ]

    })