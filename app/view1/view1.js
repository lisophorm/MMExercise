'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/posts', {
            templateUrl: 'view1/view1.html',
            controller: 'PostsController'
        });
    }])

    .controller('PostsController', ['$scope', 'dataFactory', function ($scope, dataFactory) {
        $scope.ciao = 5;

        var users = [];
        $scope.posts = [];


        dataFactory.getPosts()
            .then(function (result) {
                console.log('post', result)
                $scope.posts = result;


            }).catch(function (error) {
            console.log('error', error);
        });


    }]);