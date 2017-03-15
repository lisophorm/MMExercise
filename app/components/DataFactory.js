angular.module('myApp')
    .factory('dataFactory', ['$http', '$q',function($http,$q) {

        var urlBase = 'https://jsonplaceholder.typicode.com';
        var dataFactory = {};

        var users=[];
        var posts=[];


        dataFactory.getUsers = function () {
            return $http.get(urlBase + "/users");
        };

        dataFactory.getPosts = function () {
            var deferred = $q.defer();

            $http.get(urlBase + "/users")
                .then(function (result) {
                    users = result.data;
                    return $http.get(urlBase + "/posts");
                })
                .then(function (result) {
                    posts = [];
                    for (var i = 0; i < result.data.length; i++) {
                        var currentPost = result.data[i];

                        currentPost.user = findUser(currentPost.userId);
                        console.log('currentPost', currentPost);
                        posts.push(currentPost);
                    }
                    posts.sort(function (a, b) {
                        var nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
                        if (nameA < nameB) //sort string ascending
                            return -1;
                        if (nameA > nameB)
                            return 1;
                        return 0; //default return value (no sorting)
                    });
                    deferred.resolve(posts);

                }).catch(function (error) {
                deferred.reject(error);

                console.log('error', error);
            });

            return deferred.promise;

        };

        dataFactory.getUserPosts = function (userID) {
            return $http.get(urlBase + "/posts?userId=" + userID);
        };

        dataFactory.getComments = function (id) {
            return $http.get(urlBase + "/posts/" + id + "/comments");
        };

        return dataFactory;

        function findUser(id) {

            for (var i = 0; i < users.length; i++) {

                if (users[i].id == id) {

                    return users[i];
                }
            }
        }

    }]);