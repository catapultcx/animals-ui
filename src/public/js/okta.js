var oktaSignIn = new OktaSignIn({
    baseUrl: "https://dev-940847.okta.com",
    clientId: "0oahycu19XmocOb93356",
    authParams: {
        issuer: "https://dev-940847.okta.com/oauth2/default",
        responseType: ["token", "id_token"],
        display: "page"
    }
});
if (oktaSignIn.token.hasTokensInUrl()) {
    oktaSignIn.token.parseTokensFromUrl(
        function success(res) {
            // The tokens are returned in the order requested by `responseType` above
            var accessToken = res[0];
            var idToken = res[1];

            // Say hello to the person who just signed in:
            console.log("Hello, " + idToken.claims.email);

            // Save the tokens for later use, e.g. if the page gets refreshed:
            oktaSignIn.tokenManager.add("accessToken", accessToken);
            oktaSignIn.tokenManager.add("idToken", idToken);

            // Remove the tokens from the window location hash
            window.location.hash = "";
        },
        function error(err) {
            // handle errors as needed
            console.error(err);
        }
    );
} else {
    oktaSignIn.session.get(function (res) {
        // Session exists, show logged in state.
        if (res.status === "ACTIVE") {
            console.log("Welcome back, " + res.login);
            return;
        }
        // No session, show the login form
        oktaSignIn.renderEl(
            {el: "#okta-login-container"},
            function success(response) {
                // Nothing to do in this case, the widget will automatically redirect
                // the user to Okta for authentication, then back to this page if successful
            },
            function error(err) {
                // handle errors as needed
                console.error(err);
            }
        );
    });
}

function callMessagesApi() {
    var accessToken = oktaSignIn.tokenManager.get("accessToken");

    if (!accessToken) {
        return;
    }

    // Make the request using jQuery
    $.ajax({
        url: "http://localhost:{serverPort}/api/messages",
        headers: {
            Authorization : "Bearer " + accessToken.accessToken
        },
        success(response) {
            // Received messages!
            console.log("Messages", response);
        },
        error(response) {
            console.error(response);
        }
    });
}