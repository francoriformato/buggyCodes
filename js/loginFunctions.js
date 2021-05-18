

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var x = document.getElementById('gProfileShow');
    var y = document.getElementById('gButton');
    var z = document.getElementById('gOut');
    var h = document.getElementById('redirector');
    document.getElementById('gProfileShow').innerHTML = profile.getName() + "<br>" + "<a href='mailto:'" + profile.getEmail() + "'>" + profile.getEmail() + "</a>" + "<br>" + "<img src ='" + profile.getImageUrl() + "'/>";
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "block";
    h.style.display = "block";
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();

    var x = document.getElementById('gProfileShow');
    var y = document.getElementById('gButton');
    var z = document.getElementById('gOut');
    var h = document.getElementById('redirector');

    auth2.signOut().then(function () {
        document.getElementById('gProfileShow').innerHTML = "";
    });

    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    h.style.display = "none";
}


// Session Keeper
function openDashboard(){
    // (A) VARIABLES TO PASS
    var userName = "Franco";
    var userToken = "tokenID";

    // (B) URL PARAMETERS
    var params = new URLSearchParams();
    params.append("userName", userName);
    params.append("userToken", JSON.stringify(userToken));

    // (C) GO!
    var url = "dashboardRedirector.html?" + params.toString();
    location.href = url;
    window.open(url);
}

