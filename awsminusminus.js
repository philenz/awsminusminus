var apigClient = apigClientFactory.newClient();

apigClient.securitygroupsGet().then(result => {

    var rowHTML = '';
    $.each(result.data["security_groups"], function() {
        rowHTML += '<tr><td>' + this + '</td><td></td><td></td><td></td></tr>';
    });
    $('#securitygroups').append(rowHTML);

});

var params = {security_group_id: 'sg-7a93ee1d'};
apigClient.securitygroupSecurityGroupIdGet(params).then(result => {
        alert(JSON.stringify(result.data));
});
