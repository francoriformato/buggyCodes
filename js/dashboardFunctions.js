/* There will be some JS Function for the dashboard of buggyCodes */


//Session Keeper

function checkUser(){
    var paramCheck = new URLSearchParams(window.location.search),
        userToken = JSON.parse(paramCheck.get("userToken"));

    if (userToken == null) {
        window.open('./loginPage.html', '_self');
    }
}

function get(){
    // (A) GET THE PARAMETERS
    var params = new URLSearchParams(window.location.search),
        userName = params.get("userName"),
        userToken = JSON.parse(params.get("userToken"));

    // (B) IT WORKS!
    console.log(userName);
    console.log(userToken);
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