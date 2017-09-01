$(document).ready(function() {

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

            AWS.config.region = config.region;

            // can't use config.identityProvider below... why???

            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: config.identityPoolId,
                Logins: {
                    "cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_Gbjvx5EuE": result.getIdToken().getJwtToken()
                }
            });

            AWS.config.credentials.get(function (err) {

                if(err) {
                    console.log('Authentication Error: ' + err);
                } else {

                    var credentials = AWS.config.credentials;

                    /*
                    console.log(credentials.accessKeyId);
                    console.log(credentials.secretAccessKey);
                    console.log(credentials.identityId);
                    console.log(credentials.sessionToken);
                    */

                    var apigClient = apigClientFactory.newClient(
                        {
                            accessKeyId: credentials.accessKeyId,
                            secretAccessKey: credentials.secretAccessKey,
                            sessionToken: credentials.sessionToken,
                            region: config.region
                        }
                    );

                    $("#waitMessage").show();

                    apigClient.securitygroupsGet().then(function(response) {

                        $("#waitMessage").hide();

                        $('#securitygroups').DataTable({
                            "data": response.data["security_groups"],
                            "pageLength": 20,
                            "columns": [
                                { "data": "name" },
                                { "data": "vpc" },
                                { "data": "description" }
                            ]
                        });
                    });

                }
            });


        },

        onFailure: function(err) {
            alert(err);
        }


    });

    // Code to add a user...

    /*
    var attributeList = [];

    var dataEmail = {
        Name : 'email',
        Value : 'bob@x.com'
    };
    var dataPhoneNumber = {
        Name : 'phone_number',
        Value : '+6491234567'
    };
    var dataGivenName = {
        Name : 'given_name',
        Value : 'Bob'
    };
    var attributeEmail =
        new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
    var attributePhoneNumber =
        new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
    var attributeGivenName =
        new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataGivenName);

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeGivenName);

    var cognitoUser;
    userPool.signUp('bobby', 'helloB0b', attributeList, null, function(err, result){
        if (err) {
            alert(err);
            return;
        }
        cognitoUser = result.user;
        alert('user name is ' + cognitoUser.getUsername());
    });
    */

});
