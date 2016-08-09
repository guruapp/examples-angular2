app = angular.module("myApp",[])
    .controller("myCtrl", function ($scope) {
        $scope.employees = [
            {name:"Vadim",gender: 1, salary:5500},
            {name:"Sara",gender: 2, salary:6800},
            {name:"Mark",gender: 1, salary:5700},
            {name:"Pam",gender: 1, salary:5300},
            {name:"Todd",gender: 3, salary:5200}
        ]

    })
