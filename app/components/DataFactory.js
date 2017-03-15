angular.module('myApp')
    .factory('dataFactory', ['$http', '$q',function($http,$q) {

        console.log('datafactory service');

        var urlBase = 'https://jsonplaceholder.typicode.com';
        var dataFactory = {};

        var users=[];
        var posts=[];




        return dataFactory;



    }]);