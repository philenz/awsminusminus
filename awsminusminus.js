// Below are examples of how the javascript SDK methods
// correspond to chalice @app.routes()
var apigClient = apigClientFactory.newClient();

// @app.route('/securitygroups')
apigClient.securitygroupsGet().then(result => {

    var rowHTML = '';
    $.each(result.data["security_groups"], function() {
        rowHTML += '<tr><td>' + this + '</td><td></td><td></td><td></td></tr>';
    });
    $('#securitygroups').append(rowHTML);

});
