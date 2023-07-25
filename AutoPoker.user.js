// ==UserScript==
// @name         FacebookAutoPoker
// @namespace    https://denniscsl.com/
// @version      0.1
// @description  Poke back your friends automatically.
// @author       Dennis
// @match        https://www.facebook.com/pokes/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var counter = 0;

    // Following values are in milliseconds
    const min_delay_between_poke = 10000;
    const max_delay_between_poke = 200000;
    const min_delay_between_cycle = 50000;
    const max_delay_between_cycle = 100000;

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async function poke() {
        var list = document.querySelectorAll('[aria-label="Poke Back"]');
        for (var i = 0; i < list.length; i++) {
            list[i].click();
            await sleep(getRandomInt(min_delay_between_poke, max_delay_between_poke));
        }
    }

    function loop() {
        if (counter > 10) {
            location.reload();
        }
        console.log(counter);
        var rand = getRandomInt(min_delay_between_cycle, max_delay_between_cycle);
        console.log("AutoPoke cycle will be executed after " + rand/1000 + " seconds.");
        setTimeout(function() {
            counter++;
            poke();
            loop();
        }, rand);
    }

    loop();
})();
