// Below are examples of how the javascript SDK methods
// correspond to chalice @app.routes()
var apigClient = apigClientFactory.newClient();

// @app.route('/securitygroups')
apigClient.securitygroupsGet().then(result => {
    document.getElementById('securitygroups-get').innerHTML = JSON.stringify(result.data);
});
