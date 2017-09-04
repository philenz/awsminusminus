var Config = (function() {

    var instance;

    function createInstance() {

        var userPoolId = null;
        var clientId = null;
        var region = null;
        var awsPlusPlus = null;

        $.ajax({
            'async': false,
            'global': false,
            'url': "config/config.json",
            'dataType': "json",
            'success': function (data) {
                userPoolId = data["UserPoolId"];
                clientId = data["ClientId"];
                region = data["Region"];
                awsPlusPlus = data["AwsPlusPlus"];
                sessionStorage.awsPlusPlus = data["AwsPlusPlus"];
            }
        });

        return {
            userPoolId: userPoolId,
            clientId: clientId,
            region: region,
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


