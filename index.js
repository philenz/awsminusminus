$(document).ready(function() {

    var loginDialog, loginForm,
        name = $("#name"),
        password = $("#password"),
        allFields = $([]).add(name).add(password),
        tips = $(".validateTips"),
        defaultTip = "All form fields are required.";

    tips.text( defaultTip );

    loginDialog = $("#login-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Login": login,
            Cancel: function () {
                loginDialog.dialog("close");
                tips.text( defaultTip );
            }
        },
        close: function () {
            loginForm[0].reset();
            allFields.removeClass("ui-state-error");
            tips.text( defaultTip );
        }
    });

    loginForm = loginDialog.find("form").on("submit", function (event) {
        event.preventDefault();
        login();
    });


    function login() {
        var valid = true;

        allFields.removeClass( "ui-state-error" );

        valid = valid && checkLength( name, "username", 5 );
        valid = valid && checkLength( password, "password", 7 );

        if (valid) {

            var cognito = Cognito.initialise(name.val(), password.val());

            cognito.cognitoUser.authenticateUser(cognito.authenticationDetails, {

                onSuccess: function (result) {

                    var id = result.getIdToken().getJwtToken();
                    var user = cognito.cognitoUser.getUsername();

                    console.log("authenticated: " + user);

                    $( "#authenticate" ).button("disable");

                    $( "a" ).off('click');

                    sessionStorage.idToken = id;

                    loginDialog.dialog("close");
                    tips.text( defaultTip );

                },
                onFailure: function (result) {
                    updateTips( "Login failed!" );
                    valid = false;
                }
            });
        }
        return valid;
    }

    function updateTips( t ) {
        tips
            .text( t )
            .addClass( "ui-state-highlight" );
        setTimeout(function() {
            tips.removeClass( "ui-state-highlight", 1500 );
        }, 500 );
    }

    function checkLength( o, n, min ) {
        if ( o.val().length < min ) {
            o.addClass( "ui-state-error" );
            updateTips( "Length of " + n + " must be greater than or equal to " + min + "." );
            return false;
        } else {
            return true;
        }
    }

    if (!sessionStorage.idToken) {

        $( "a" ).click(function( e ) {
            event.preventDefault();
            alert ("You need to login first");
        });

    }

    $( "#authenticate" ).button( {

        disabled: sessionStorage.idToken

    }).click( function( event ) {

        loginDialog.dialog( "open" );

    });

});

