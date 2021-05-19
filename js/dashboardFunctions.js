/* There will be some JS Function for the dashboard of buggyCodes */

//Session Keeper


function get(){

    console.log(window.localStorage.getItem('user'));
}

function checkDashboardM() {

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        console.log('we are on mobile!');
    } else {
        console.log('redirectDashboardDESKTOP');
        redirectDashboard('dashboard.html');

    }
}

function checkDashboardD() {
    var contatore = '1';

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        redirectDashboard('mobileDashboard.html');
    } else {
        console.log('we are on desktop!');
        localStorage.setItem('stableUser', contatore);
    }
}



function openURL() {
    window.open('./profilePage.html', '_self');
}

function hideUser() {
    if (window.innerWidth < 900) {
        x = document.getElementById("userdiv");
        x.style.display = "none"
    }
}

function showUser() {
    if (window.innerWidth < 900) {
        z = document.getElementById("userdiv");
        z.style.display = "block"
    }
}

function openGame() {
    window.open('game_bin/index.html', '_self');
}


/* PWA */

class PWAConfApp {

}


window.addEventListener('load', e => {
    new PWAConfApp();
    registerSW();
});

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            alert('ServiceWorker registration failed. Sorry about that.');
        }
    } else {
        document.querySelector('.alert').removeAttribute('hidden');
    }
}