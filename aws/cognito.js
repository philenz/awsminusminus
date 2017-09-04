var Cognito = (function() {

    function initialise(name, password) {

        var config = Config.getInstance();

        var poolData = {
            UserPoolId: config.userPoolId,
            ClientId: config.clientId
        };
        var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
        var userData = {
            Username: name,
            Pool: userPool
        };
        var authenticationData = {
            Username: name,
            Password: password
        };
        var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
        var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);

        return {
            cognitoUser: cognitoUser,
            authenticationDetails: authenticationDetails
        }

    }

    return {
        initialise: initialise
    }

})();


