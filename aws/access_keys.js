$(document).ready(function() {

    var config = Config.getInstance();

    // authenticate against cognito...
    var poolData = {
        UserPoolId: config.userPoolId,
        ClientId: config.clientId
    };
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    var userData = {
        Username: config.userName,
        Pool: userPool
    };
    var authenticationData = {
        Username: config.userName,
        Password: config.password
    };
    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {

        onSuccess: function (result) {

            $("#waitMessage").show();

            var awsHeaders = {};
            awsHeaders['Authorization'] = result.getIdToken().getJwtToken();

            var url = config.awsPlusPlus + '/userskeys';

            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                headers: awsHeaders,
                crossDomain: true,
                contentType: 'application/json',
                success: function (data) {

                    $("#waitMessage").hide();

                    $('#accesskeys').DataTable({
                        "data": data["userskeys"],
                        //"pageLength": 20,
                        "columns": [
                            {"data": "name"},
                            {"data": "key"},
                            {"data": "key_status"},
                            {"data": "key_age"}
                        ]
                    });
                },
                error: function (e) {
                    alert("Error getting users and keys: " + JSON.stringify(e));
                }
            });
        },
        onFailure: function(e) {
            alert("Error authenticating user: " + JSON.stringify(e));
        }
    });

});
