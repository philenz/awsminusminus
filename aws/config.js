var config = (function() {

    var userPoolId = null;
    var clientId = null;
    var identityPoolId = null;
    var identityProvider = null;
    var region = null;
    var userName = null;
    var password = null;

    $.ajax({
        'async': false,
        'global': false,
        'url': "../etc/config.json",
        'dataType': "json",
        'success': function (data) {
            userPoolId = data["UserPoolId"];
            clientId = data["ClientId"];
            identityPoolId = data["IdentityPoolId"];
            identityProvider = data["IdentityProvider"];
            region = data["Region"];
            userName = data["UserName"];
            password = data["Password"];
        }
    });

    return {
        userPoolId: userPoolId,
        clientId: clientId,
        identityPoolId: identityPoolId,
        identityProvider: identityProvider,
        region: region,
        userName: userName,
        password: password
    };

})();


