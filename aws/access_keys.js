$(document).ready(function() {

    $("#waitMessage").show();

    let awsHeaders = {};
    awsHeaders['Authorization'] = sessionStorage.idToken;

    let url = sessionStorage.awsPlusPlus + '/userskeys';

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        headers: awsHeaders,
        crossDomain: true,
        contentType: 'application/json',
        success: function (data) {

            $("#waitMessage").hide();

            $('#accesskeys').DataTable({
                "data": data["userskeys"],
                //"pageLength": 20,
                "columns": [
                    {"data": "name"},
                    {"data": "key"},
                    {"data": "key_status"},
                    {"data": "key_age"}
                ]
            });
        },
        error: function () {
            alert("Your session has timed out. Please return to the home page and login again.");
            delete sessionStorage.idToken;
        }
    });
});
