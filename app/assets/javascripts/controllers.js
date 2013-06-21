'use strict';

angular.module('time.controllers', []).controller('TimeSheetController', [function ($scope, $http, dateService) {
    $scope.criteria = { startDate: dateService.monthStartDate()};
}]);