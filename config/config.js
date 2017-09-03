var Config = (function() {

    var instance;

    function createInstance() {

        var userPoolId = null;
        var clientId = null;
        var identityPoolId = null;
        var identityProvider = null;
        var region = null;
        var userName = null;
        var password = null;
        var awsPlusPlus = null;

        $.ajax({
            'async': false,
            'global': false,
            'url': "config/config.json",
            'dataType': "json",
            'success': function (data) {
                userPoolId = data["UserPoolId"];
                clientId = data["ClientId"];
                identityPoolId = data["IdentityPoolId"];
                identityProvider = data["IdentityProvider"];
                region = data["Region"];
                userName = data["UserName"];
                password = data["Password"];
                awsPlusPlus = data["AwsPlusPlus"];
                sessionStorage.awsPlusPlus = data["AwsPlusPlus"];
            }
        });

        return {
            userPoolId: userPoolId,
            clientId: clientId,
            identityPoolId: identityPoolId,
            identityProvider: identityProvider,
            region: region,
            userName: userName,
            password: password,
            awsPlusPlus: awsPlusPlus
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


