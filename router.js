/*
* 路由
* */

angular.module("myapp",["ngRoute","ngAnimate","ctrls","services"])
    .config(function($routeProvider){
        /*
        * $routeProvider?
        * */
        $routeProvider.when("/",{
            templateUrl:"index.html",
            controller:"index"
        })
        .when("/list/:id",{
           templateUrl:"list.html" ,
           controller:"list"
        })
        .when("/show/:id",{
            templateUrl:"show.html" ,
            controller:"show"
        });
        $routeProvider.otherwise("/");
    });