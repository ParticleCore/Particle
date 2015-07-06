// ==UserScript==
// @version     1.0.3
// @name        Reverse Playlist Order for YouTube
// @namespace   https://github.com/ParticleCore
// @description Reverse the order of YouTube playlists
// @match       *://www.youtube.com/*
// @run-at      document-start
// @downloadURL https://github.com/ParticleCore/Particle/raw/master/MDL/rpo.user.js
// @grant       none
// @noframes
// ==/UserScript==
(function () {
    'use strict';
    function injector(a, b) {
        var injection = document.createElement(b);
        document.head.appendChild(injection);
        injection.textContent = a;
    }
    var styleSheet =
        '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-reverse-video-list\n' +
        '{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEX///////////////////////////////////////////////////////////////////////8BOg0gAAAAEXRSTlMA8KS9FQYBt8gPhw6JigvJyoYcNuUAAABRSURBVHhevdE5DsAgDERRs8ZAtrn/ZaMIiSKD5AbllX8qg/wubnHam0JPYSkACIl69nj5LB8VXRXm4EbggdvKYbCHHd1hHc3PxMqFuxhfsdwDNLwDxD27Q0MAAAAASUVORK5CYII=") no-repeat; width:24px; height:24px}',
        core = function () {
            function reverseControl() {
                var temp,
                    prev = document.querySelector('[class*="prev-playlist-list-item"]'),
                    next = document.querySelector('[class*="next-playlist-list-item"]'),
                    list = document.getElementById('playlist-autoscroll-list'),
                    videos = list.getElementsByTagName('li'),
                    length = videos.length;
                while (length--) {
                    list.appendChild(videos[length]);
                }
                temp = prev.href;
                prev.href = next.href;
                next.href = temp;
                window.yt.player.getPlayerByElement('player-api').updatePlaylist();
                list.scrollTop = document.getElementsByClassName('currently-playing')[0].offsetTop;
            }
            function buttonToggled(a) {
                a = (window.chrome && a.target.parentNode) || a.target;
                a.classList.toggle('yt-uix-button-toggled');
                if (window.localStorage.playlistReverse) {
                    delete window.localStorage.playlistReverse;
                } else {
                    window.localStorage.playlistReverse = window.yt.config_.LIST_ID;
                }
                reverseControl();
            }
            function insertButton() {
                var playlistBar,
                    navControls,
                    spanWrapper,
                    spanIcon,
                    button = document.querySelector('[title="Reverse playlist"]');
                if (location.href.indexOf('list=') !== -1 && !button) {
                    playlistBar = document.getElementById('watch-appbar-playlist');
                    navControls = document.querySelector('.playlist-nav-controls');
                    button = document.createElement('button');
                    button.title = 'Reverse playlist';
                    button.type = 'button';
                    button.className = 'yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon reverse-playlist yt-uix-button-opacity yt-uix-tooltip' + ((location.href.indexOf(window.localStorage.playlistReverse) !== -1 && ' yt-uix-button-toggled') || '');
                    button.setAttribute('data-tooltip-text', 'Reverse playlist');
                    spanWrapper = document.createElement('span');
                    spanWrapper.className = 'yt-uix-button-icon-wrapper';
                    spanIcon = document.createElement('span');
                    spanIcon.className = 'yt-uix-button-icon yt-uix-button-icon-watch-appbar-reverse-video-list';
                    button.appendChild(spanWrapper);
                    button.appendChild(spanIcon);
                    navControls.appendChild(button);
                    button.addEventListener('click', buttonToggled);
                    playlistBar.className = playlistBar.className.replace('radio-playlist', '');
                }
                if (document.readyState === 'complete' && location.href.indexOf(window.localStorage.playlistReverse) !== -1) {
                    reverseControl();
                }
            }
            window.addEventListener('readystatechange', insertButton, true);
            window.addEventListener('spfdone', insertButton);
        };
    injector('(' + core + ')()', 'script');
    injector(styleSheet, 'style');
}());
