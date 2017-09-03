var Cognito = (function() {

    var instance;

    function createInstance() {

        var config = Config.getInstance();

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

        return {
            poolData: poolData,
            cognitoUser: cognitoUser,
            authenticationDetails: authenticationDetails
        }

    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };

})();


