// ==UserScript==
// @version     1.0.4
// @name        Playlist Autoplay Control for YouTube
// @namespace   https://github.com/ParticleCore
// @description Control autoplay in your playlists
// @match       https://www.youtube.com/*
// @run-at      document-start
// @downloadURL https://github.com/ParticleCore/Particle/raw/master/MDL/pac.user.js
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
        '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-autoplay-video-list\n' +
        '{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+hBK93AAAAJHRSTlMAAPT+sPxAEPcUSbmkAcWYHTWQK8+DJIKN+pcZoB+oJzC6OMQ+rrabAAAAY0lEQVQokbXQNw6AQBADwIMj55wz/v8b6RBI3g7cjrTBSn2c2HjnhioQAEgcAYAwFwCwSgGgo4YDYKcZB8ArfA6AWbsCtBS8jo7qh5Ett6eZnauXlT5obbSS/aAlnq9uH/BvLpzPEZ02MKzwAAAAAElFTkSuQmCC") no-repeat; width:24px; height:24px}',
        core = function () {
            function autoPlayControl(a) {
                return function () {
                    var args = arguments;
                    if (!args[1] || window.localStorage.playlistAutoplay !== 'false' || (window.localStorage.playlistAutoplay === 'false' && args[1].feature && args[1].feature !== 'autoplay')) {
                        a.apply(this, arguments);
                    }
                };
            }
            function detour(a) {
                if (a.target.getAttribute('name') && a.target.getAttribute('name') === 'www/base') {
                    Object.keys(window._yt_www).some(function (b) {
                        if (typeof window._yt_www[b] === 'function' && window._yt_www[b].toString().indexOf('window.spf.navigate') !== -1) {
                            window._yt_www[b] = autoPlayControl(window._yt_www[b]);
                            return;
                        }
                    });
                }
            }
            function buttonToggled(a) {
                if (window.chrome) {
                    a.target.parentNode.classList.toggle('yt-uix-button-toggled');
                } else {
                    a.target.classList.toggle('yt-uix-button-toggled');
                }
                window.localStorage.playlistAutoplay = (window.localStorage.playlistAutoplay === 'true' && 'false') || 'true';
            }
            function insertButton() {
                var playlistBar,
                    navControls,
                    spanWrapper,
                    spanIcon,
                    button = document.querySelector('[title="Autoplay"]');
                if (location.href.indexOf('list=') !== -1 && !button) {
                    window.localStorage.playlistAutoplay = window.localStorage.playlistAutoplay || (window.localStorage.playlistAutoplay === undefined && 'false');
                    playlistBar = document.getElementById('watch-appbar-playlist');
                    navControls = document.querySelector('.playlist-nav-controls');
                    button = document.createElement('button');
                    button.title = 'Autoplay';
                    button.type = 'button';
                    button.className = 'yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon autoplay-playlist yt-uix-button-opacity yt-uix-tooltip' + ((window.localStorage.playlistAutoplay === 'true' && ' yt-uix-button-toggled') || '');
                    button.setAttribute('data-tooltip-text', 'Autoplay');
                    spanWrapper = document.createElement('span');
                    spanWrapper.className = 'yt-uix-button-icon-wrapper';
                    spanIcon = document.createElement('span');
                    spanIcon.className = 'yt-uix-button-icon yt-uix-button-icon-watch-appbar-autoplay-video-list';
                    button.appendChild(spanWrapper);
                    button.appendChild(spanIcon);
                    navControls.appendChild(button);
                    button.addEventListener('click', buttonToggled);
                    playlistBar.className = playlistBar.className.replace('radio-playlist', '');
                }
            }
            if (window.chrome) {
                document.documentElement.addEventListener('load', detour, true);
            } else {
                window.addEventListener('afterscriptexecute', detour);
            }
            window.addEventListener('readystatechange', insertButton, true);
            window.addEventListener('spfdone', insertButton);
        };
    injector('(' + core + ')()', 'script');
    injector(styleSheet, 'style');
}());
