$(document).ready(function() {

    var apigClient = apigClientFactory.newClient();

    $("#waitMessage").show();

    apigClient.securitygroupsGet().then(sgs => {

        $("#waitMessage").hide();

        $('#securitygroups').DataTable({
            "data": sgs.data["security_groups"],
            "columns": [
                { "data": "name" },
                { "data": "vpc" },
                { "data": "description" }
            ]
        });
    });
});
