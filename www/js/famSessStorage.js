(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .factory('famSessStorage', famSessStorage);

    famSessStorage.$inject = ['$window'];
    function famSessStorage($window) {

        return {
            setUserDetails: setUserDetails,
            getUserDetails: getUserDetails,
            setTestDetails: setTestDetails,
            getTestDetails: getTestDetails,
            setSurveysDetails: setSurveysDetails,
            getSurveysDetails: getSurveysDetails
        };
        ////////////////

        function setUserDetails(data) {
            if (data) {
                $window.sessionStorage.loggedInUser = JSON.stringify(data);
            } else {
                $window.sessionStorage.loggedInUser = null;
            }
        }

        function getUserDetails() {
            if ($window.sessionStorage.loggedInUser) {
                return JSON.parse($window.sessionStorage.loggedInUser);
            }
            return null;
        }

        function setTestDetails(data) {
            if (data) {
                $window.sessionStorage.testDetails = JSON.stringify(data);
            } else {
                $window.sessionStorage.testDetails = null;
            }
        }

        function getTestDetails() {
            if ($window.sessionStorage.testDetails) {
                return JSON.parse($window.sessionStorage.loggedInUser);
            }
            return null;
        }

        function setSurveysDetails(data) {
            if (data) {
                $window.sessionStorage.surveysDetails = JSON.stringify(data);
            } else {
                $window.sessionStorage.surveysDetails = null;
            }
        }

        function getSurveysDetails() {
            if ($window.sessionStorage.surveysDetails) {
                return JSON.parse($window.sessionStorage.surveysDetails);
            }
            return null;
        }
    }
})();