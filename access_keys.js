$(document).ready(function() {

    var apigClient = apigClientFactory.newClient();

    apigClient.userskeysGet().then(users => {

        $.each(users.data["userskeys"], function() {

            rowHTML = '<tr>';
            rowHTML += '<td>' + this["id"] + '</td>';
            rowHTML += '<td>' + this["name"] + '</td>';
            rowHTML += '<td>' + this["key"] + '</td>';
            rowHTML += '<td>' + this["key_status"] + '</td>';
            rowHTML += '<td>' + this["key_age"] + '</td>';
            rowHTML += '</tr>';

            $('#accesskeys').append(rowHTML);

        });
    });
});
