var Cognito = (function() {

    var instance;

    function createInstance(name, password) {

        alert("login: " + name + "/" + password);

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
            poolData: poolData,
            cognitoUser: cognitoUser,
            authenticationDetails: authenticationDetails
        }

    }

    return {
        getInstance: function (name, password) {

            if (!instance) {
                alert("createInstance");
                instance = createInstance(name, password);
            }
            return instance;
        }
    };

})();


