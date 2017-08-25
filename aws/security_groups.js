$(document).ready(function() {

    var apigClient = apigClientFactory.newClient();

    $("#waitMessage").show();

    apigClient.securitygroupsGet().then(sgs => {

        $("#waitMessage").hide();

        $('#securitygroups').DataTable({
            "data": sgs.data["security_groups"],
            "pageLength": 20,
            "columns": [
                { "data": "name" },
                { "data": "vpc" },
                { "data": "description" }
            ]
        });
    });
});
