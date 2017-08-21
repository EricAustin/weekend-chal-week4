console.log('client.js sourced');

var app = angular.module('SalaryApp', []);

app.controller('SalaryController', ['$http', function ($http) {
    console.log('Angular sourced');
    var self = this;
    self.employees = []
    self.newestEmployee = {}



    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function (response) {
            console.log(response.data);
            self.employees = response.data;
            self.getTotal();
        }) // end then
    } //end getEmployees

    self.newEmployee = function () {
        console.log('newEmployee function hit');
        console.log(self.newestEmployee);

        $http({
            method: 'POST',
            url: '/employees',
            data: self.newestEmployee
        }).then(function (response) {
            console.log(response);
            self.newestEmployee = {};
            self.getEmployees();
        }); // end then
    }; // end newEmployee

    self.getTotal = function () {
        $http({
            method: 'GET',
            url: '/totaling'
        }).then(function (response) {
            console.log('response.data', response.data);
            self.total = response.data[0].sum;
            self.salary = self.total / 12
            console.log(self.salary);
        }) // end then
    } //end getEmployees


    self.makeInactive = function (id) {
        console.log('makeInactive hit');
        $http({
            method: 'PUT',
            url: '/switchactive/' + id,
            data: { newState: false }
        }).then(function (response) {
            self.getEmployees();
        }); // end then
    } //end makeInactive

    self.makeActive = function (id) {
        console.log('makeActive hit');
        $http({
            method: 'PUT',
            url: '/switchactive/' + id,
            data: { newState: true }
        }).then(function (response) {
            self.getEmployees();
        }); // end then
    } // end makeActive




    self.getEmployees();



}])