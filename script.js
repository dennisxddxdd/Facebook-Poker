// ==UserScript==
// @name         FacebookAutoPoker
// @namespace    https://www.facebook.com/
// @version      0.1
// @description  Poke your friends automatically.
// @author       Dennis
// @match        https://www.facebook.com/pokes/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var counter = 0;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function poke() {
        var list = document.querySelectorAll('[aria-label="Poke Back"]');
        for (var i = 0; i < list.length; i++) {
            list[i].click();
            await sleep(1000+Math.round(Math.random()*20000));
        }
    }

    function loop() {
        if (counter > 10) {
            location.reload();
        }
        console.log(counter);
        var rand = 30000+Math.round(Math.random()*100000);
        console.log("AutoPoke will be executed after " + rand/1000 + " seconds.");
        setTimeout(function() {
            counter++;
            poke();
            loop();
        }, rand);
    }

    loop();
})();
