
function goToGoogle() {
	window.open('/auth/google', '_self');
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
