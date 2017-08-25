$(document).ready(function() {

    var apigClient = apigClientFactory.newClient();

    $("#waitMessage").show();

    apigClient.userskeysGet().then(users => {

        $("#waitMessage").hide();

        $('#accesskeys').DataTable({
            "data": users.data["userskeys"],
            "pageLength": 20,
            "columns": [
                { "data": "name" },
                { "data": "key" },
                { "data": "key_status" },
                { "data": "key_age" }
            ]
        });
    });
});
