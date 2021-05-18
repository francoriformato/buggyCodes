function redirectDashboard(dashType){
    // (A) GET THE PARAMETERS
    var params = new URLSearchParams(window.location.search),
        userName = params.get("userName"),
        userToken = JSON.parse(params.get("userToken"));

    params.append("userName", userName);
    params.append("userToken", JSON.stringify(userToken));

    // (C) GO!
    var url = dashType + "?" + params.toString();
    location.href = url;
    window.open(url);
}


function checkBrowser() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        console.log('redirectDashboardMOBILE');
        redirectDashboard('mobileDashboard.html');
    } else {
        console.log('redirectDashboardDESKTOP');
        redirectDashboard('dashboard.html');
    }
}

