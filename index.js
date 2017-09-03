$(document).ready(function() {

    $( "#authenticate" ).button( {

        disabled: sessionStorage.idToken ? true : false

    }).click( function( event ) {

        var cognito = Cognito.getInstance();

        cognito.cognitoUser.authenticateUser(cognito.authenticationDetails, {

            onSuccess: function (result) {

                var id = result.getIdToken().getJwtToken();
                var user = cognito.cognitoUser.getUsername();

                console.log("authenticated: " + user);
                console.log(     "id token: " + id);

                $( "#authenticate" ).button("disable");

                sessionStorage.idToken = id;

            }

        });

    });

});

