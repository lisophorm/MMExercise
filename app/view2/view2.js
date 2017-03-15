'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/user/:id', {
            templateUrl: 'view2/view2.html',
            controller: 'UsersController'
        });
    }])

    .controller('UsersController', ['$scope', 'dataFactory', '$routeParams', '$location', function ($scope, dataFactory, $routeParams, $location) {
        $scope.posts = [];

        $scope.onChangedUser = function () {
            console.log($scope.currentUser);
            $location.path("/user/" + $scope.currentUser);

        }

        $scope.displayComments = function (post) {
            console.log('display comments for ', post);
            dataFactory.getComments(post.id).then(
                function (result) {
                    post.expanded = true;

                    console.log('comments');
                    console.log(result);
                    post.comments = result.data;
                }
            ).catch(function (error) {
                console.log('error retrieving comments', error);
            });
        }

        $scope.hideComments = function (post) {
            post.expanded = false;

        }

        var currentUser = $routeParams.id;
        $scope.currentUser = $routeParams.id;
        $scope.userList = [];
        dataFactory.getUsers().then(function (result) {

            $scope.userList = result.data;

        }, function (erro) {
            console.log('error', erro);
        });


        dataFactory.getUserPosts(currentUser).then(function (result) {
            $scope.posts = [];

            $scope.posts = result.data;

        }, function (erro) {
            console.log('error', erro);
        });


    }]);