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

        dataFactory.getPosts()
            .then(function (result) {
                console.log('post', result)
                $scope.posts = result;


            }).catch(function (error) {
            console.log('error', error);
        });


    }]);