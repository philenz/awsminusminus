$(document).ready(function() {

    $("#waitMessage").show();

    var awsHeaders = {};
    awsHeaders['Authorization'] = sessionStorage.idToken;

    var url = sessionStorage.awsPlusPlus + '/securitygroups';

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        headers: awsHeaders,
        crossDomain: true,
        contentType: 'application/json',
        success: function (data) {

            $("#waitMessage").hide();

            $('#securitygroups').DataTable({
                "data": data["security_groups"],
                //"pageLength": 20,
                "columns": [
                    { "data": "name" },
                    { "data": "vpc" },
                    { "data": "description" }
                ]
            });
        },
        error: function (e) {
            alert("Error getting security groups: " + JSON.stringify(e));
        }
    });

});
