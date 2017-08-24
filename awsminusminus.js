$(document).ready(function() {

    var apigClient = apigClientFactory.newClient();

    apigClient.securitygroupsGet().then(sgs => {

        $.each(sgs.data["security_groups"], function() {

            rowHTML = '<tr>';
            rowHTML += '<td>' + this["name"] + '</td>';
            rowHTML += '<td>' + this["vpc"] + '</td>';
            rowHTML += '<td>' + this["description"] + '</td>';
            rowHTML += '<td></td>';
            rowHTML += '</tr>';

            $('#securitygroups').append(rowHTML);

        });

    });

});
