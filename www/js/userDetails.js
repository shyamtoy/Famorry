(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .factory('userDetails', userDetails);

    userDetails.$inject = ['famSessStorage'];
    function userDetails(famSessStorage) {

        var user = {};

        return {
            setUserDetails: setUserDetails,
            getUserDetails: getUserDetails
        };
        ////////////////
        function setUserDetails(data) {
            user = data;
            famSessStorage.setUserDetails(data);
        }

        function getUserDetails() {
            return user;
        }
    }
})();