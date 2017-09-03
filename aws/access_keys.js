$(document).ready(function() {

    $("#waitMessage").show();

    var awsHeaders = {};
    awsHeaders['Authorization'] = sessionStorage.idToken;

    var url = sessionStorage.awsPlusPlus + '/userskeys';

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
        error: function (e) {
            alert("Error getting users and keys: " + JSON.stringify(e));
        }
    });
});
