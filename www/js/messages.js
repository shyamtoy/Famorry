(function () {
    'use strict';

    angular
        .module(FAM_MODULE)
        .constant("famMessages", {
            "MESSAGE": {
                "M100001": "No records found",
                "M100002": "Famorry says",
                "M100003": "Terms & Condition",
                "M100004": "DEMO collects personally identifying information and data about individuals, their company, and the companies demographics “personally identifying information and data” including (i) when you provide information to DEMO, such as when you register or sign up for any of our products such as, but not limited to, events, conferences, on-line seminars contests, RSS Feeds, webcasts, and other communications with DEMO; (ii) when you register or sign up on any DEMO site, your information will be known to DEMO; and (iii) from time to time we may add other information that we collect from third party sources to enhance the information that you provided to DEMO.",
            },
            "ERROR": {
                "M200001": "Unable to save data",                
                "M200002": "Please enter userID",
                "M200003": "Please enter valid email address",
                "M200004": "Please enter password",
                "M200005": "Please enter valid password",
                "M200006": "Please confirm your password",
                "M200007": "Passwords entered are not matching",
                "M200008": "Invalid Credential",
                "M200009": "Error Code 404",
                "M200010": "Please enter your first name",
                "M200011": "Please enter your last name",
                "M200012": "Please enter your phone number",
                "M200013": "Please select your sex",
                "M200014": "Please select your birth day",
                "M200015": "Please select your birth month",
                "M200016": "Please select your birth year",
                "M200017": "Please enter your email",
            },
            "SUCCESS": {
                "M300001": "Data saved successfully.",
                "M300002": "Data deleted successfully."
            },
            "WARNING": {
                "M400001": ""
            },
            "CONFIRM": {
                "M500001": "Are you sure you want to cancel?",
                "M500002": "Are you sure you want to delete this?",
                "M500003": "Are you sure you want logout?",
                "M500004": "Are you sure you want to Activate this Test?",
                "M500005": "Are you sure you want to Complete this Test?",
                "M500006": "Are you sure you want to reset the information?",
                "M500007": "Are you sure want to add blank log"
            },
            'BUSINESS_MESSAGE': {
                '0': 'Email Address is not registered',
                '900001': 'Please enter valid email address',
                '900002': 'Please contact Product Test Group',
                '900003': 'Password not matching',
                '900004': 'Password does not meet requirements',
                '900005': 'Email Address is not registered',
                '900006': 'Please contact Product Test Group to reset username and password',
                '900007': 'Please enter correct password',
                '900008': 'Please contact Product Test Group to reset username and password',
                '900009': 'Security code incorrect',
                '900010': 'Please contact product test group',
                '900011': 'Date selected earlier than ship date',
                '900012': 'Data invalid or missing',
                '900013': 'Data invalid or missing',
                '900014': 'Data invalid or missing',
                '900015': 'User already exists. please contact Product Test Group',
                '900016': 'Login account/password not yet created.',
                '900017': 'Security Violation',
                '900018': 'Test not found',
                '900019': 'Data already exists; cannot add new',
                '900020': 'Cannot inactivate test when test is active with testers',
                '900021': 'Record not found',
                '900022': 'Due date cannot be in the past',
                '900023': 'Survey not active or not open',
                '900090': 'Missing required field(s)',
                '900091': 'Invalid data'
            }
        });
})();
