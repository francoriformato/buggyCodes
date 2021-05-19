

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    const Guser = {
        ID: googleUser.getBasicProfile()['MT'],
        name: profile.getName(),
        email: profile.getEmail(),
        img: profile.getImageUrl(),
    };

    console.log(JSON.parse(JSON.stringify(Guser)));

    localStorage.setItem('stableUser',JSON.stringify(Guser));
    sessionStorage.setItem('loggedUser', JSON.stringify(Guser));

    var x = document.getElementById('gProfileShow');
    var y = document.getElementById('gButton');
    var z = document.getElementById('gOut');
    var h = document.getElementById('redirector');


    document.getElementById('gProfileShow').innerHTML = profile.getName() + "<br>" + "<a href='mailto:'" + profile.getEmail() + "'>" + profile.getEmail() + "</a>" + "<br>" + "<img class='rounded-circle border border-white' src ='" + profile.getImageUrl() + "'/>";

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



// Redirect to the correct dashboard ( mobile or desktop )

function redirectDashboard(dashType){
    var url = dashType;
    location.href = url;
    window.open(url, '_self');
}

function openDashboard(){

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        console.log('redirectDashboardMOBILE');
        redirectDashboard('mobileDashboard.html');
    } else {
        console.log('redirectDashboardDESKTOP');
        redirectDashboard('dashboard.html');
    }

}
