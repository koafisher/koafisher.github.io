var myApp = angular.module("app",[]);
myApp.controller("mainController", ["$scope",
                                    function($scope) {
                                    
                                    }
                                    ]);


var fruits = false;

function toggle() {
    var text;
    
    if (fruits === true) {
        fruits = false
        var toggle = document.getElementById("filename");
        toggle.disabled = true;
        toggle = document.getElementById("record");
        toggle.disabled = false;
    }
    else if (fruits === false) {
        fruits = true
        var toggle = document.getElementById("filename");
        toggle.disabled = false;
        toggle = document.getElementById("record");
        toggle.disabled = true;
    }
    //console.log(fruits)
    //document.getElementById("demo").innerHTML = text;
}

