$(document).ready(function() {

    $("#waitMessage").show();

    let awsHeaders = {};
    awsHeaders['Authorization'] = sessionStorage.idToken;

    let url = sessionStorage.awsPlusPlus + '/securitygroups';

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
        error: function () {
            alert("Your session has timed out. Please return to the home page and login again.");
            delete sessionStorage.idToken;
        }
    });

});
