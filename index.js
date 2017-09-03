$(document).ready(function() {

    if (!sessionStorage.idToken) {

        $( "a" ).click(function( e ) {
            event.preventDefault();
            alert ("You need to login first")
        });

    }

    $( "#authenticate" ).button( {

        disabled: sessionStorage.idToken ? true : false

    }).click( function( event ) {

        var cognito = Cognito.getInstance();

        cognito.cognitoUser.authenticateUser(cognito.authenticationDetails, {

            onSuccess: function (result) {

                var id = result.getIdToken().getJwtToken();
                var user = cognito.cognitoUser.getUsername();

                console.log("authenticated: " + user);

                $( "#authenticate" ).button("disable");

                $( "a" ).off('click');

                sessionStorage.idToken = id;

            }

        });

    });

});

