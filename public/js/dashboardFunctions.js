/* There will be some JS Function for the dashboard of buggyCodes */

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