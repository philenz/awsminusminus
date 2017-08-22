var apigClient = apigClientFactory.newClient();

apigClient.securitygroupsGet().then(sgs => {

    $.each(sgs.data["security_groups"], function() {

        var rowHTML = '';
        var sg_id = this;
        var params = {security_group_id: sg_id};

        apigClient.securitygroupSecurityGroupIdGet(params).then(sg => {

            rowHTML += '<tr>';
            rowHTML += '<td>' + sg.data["name"] + '</td>';
            rowHTML += '<td>' + sg.data["vpc"] + '</td>';
            rowHTML += '<td>' + sg.data["description"] + '</td>';
            rowHTML += '<td></td>';
            rowHTML += '</tr>';

            $('#securitygroups').append(rowHTML);
        });

    });

});
