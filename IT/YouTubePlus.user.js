// ==UserScript==
// @version     1.1.4
// @name        YouTube +
// @namespace   https://github.com/ParticleCore
// @description YouTube with more freedom
// @icon        data:image/png;base64,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
// @match       https://www.youtube.com/*
// @run-at      document-start
// @downloadURL https://github.com/ParticleCore/YouTubePlus/raw/master/IT/YouTubePlus.user.js
// @grant       none
// @noframes
// ==/UserScript==
(function () {
    'use strict';
    if (window.chrome && document.querySelector('[name="html5player/html5player"]')) {
        window.location.reload(false);
    }
    function injector(a, b) {
        var injection = document.createElement(b);
        document.head.appendChild(injection);
        injection.textContent = a;
    }
    var styleSheet = '#header,' +
        '#watch-discussion,' +
        '#feed-pyv-container,' +
        '.video-list-item:not(.related-list-item),' +
        '.pyv-afc-ads-container,' +
        '.ad-div' +
        '{display:none}\n' +
        '#masthead-appbar' +
        '{display:block !important}\n' +
        '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-autoplay-video-list\n' +
        '{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+hBK93AAAAJHRSTlMAAPT+sPxAEPcUSbmkAcWYHTWQK8+DJIKN+pcZoB+oJzC6OMQ+rrabAAAAY0lEQVQokbXQNw6AQBADwIMj55wz/v8b6RBI3g7cjrTBSn2c2HjnhioQAEgcAYAwFwCwSgGgo4YDYKcZB8ArfA6AWbsCtBS8jo7qh5Ett6eZnauXlT5obbSS/aAlnq9uH/BvLpzPEZ02MKzwAAAAAElFTkSuQmCC") no-repeat; width:24px; height:24px}',
        core = function () {
            var loaded,
                channelId = {},
                videoQuality = 'hd720',
                api = false,
                widePlayer = true,
                fullscreen = false,
                html5Player = true,
                playerAutoPlay = false,
                requestRunning = false,
                playlistAutoPlay = window.localStorage.playlistAutoplay || 'false';
            function get(a, b, c) {
                var request = new XMLHttpRequest();
                function process() {
                    if (request.readyState === 4) {
                        b(request.responseText);
                    }
                }
                request.onreadystatechange = process;
                request.open(c, a);
                request.send();
            }
            function checkThumbnail(a) {
                var img,
                    base = (a.args.iurl_webp && '_webp') || '',
                    hdURL = a.args['iurl' + base].replace('hqdefault', 'maxresdefault');
                function widthReport() {
                    if (img.width > 120 && img.height > 90 && !a.args['iurlmaxres' + base] && api && api.getPlayerState && api.getPlayerState() === 5) {
                        a.args['iurl' + base] = a.args['iurlsd' + base] = a.args['iurlmq' + base] = a.args['iurlhq' + base] = a.args['iurlmaxres' + base] = hdURL;
                        api.cueVideoByPlayerVars(a.args);
                        api.setPlaybackQuality(videoQuality);
                        img.removeEventListener('load', widthReport);
                    }
                }
                img = new Image();
                img.addEventListener('load', widthReport);
                img.src = hdURL;
            }
            function username() {
                var videos,
                    link,
                    span,
                    user,
                    verified;
                function videoCounter() {
                    link.href = user.getAttribute('href') + '/videos';
                    link.setAttribute('style', 'font-size:11px;color:#666;display:initial;font-weight:initial;overflow:initial;vertical-align:initial');
                    span = document.createElement('span');
                    span.textContent = ' · ';
                    span.setAttribute('style', 'font-size:11px;color:#666');
                    document.getElementsByClassName('yt-user-info')[0].insertBefore(span, document.getElementById('uploaded-videos'));
                    verified = document.getElementsByClassName('yt-channel-title-icon-verified')[0];
                    if (verified) {
                        user.className += ' yt-uix-tooltip';
                        user.setAttribute('data-tooltip-text', verified.getAttribute('data-tooltip-text'));
                        user.style.color = '#167ac6';
                        verified.remove();
                    }
                }
                function getInfo(b) {
                    videos = JSON.parse(b);
                    link.className = 'spf-link';
                    link.textContent = channelId[user.getAttribute('data-ytid')] = videos.body.content.match(/class="pl-header-details">([\w\W]*?)<\/ul>/)[1].split('</li><li>')[1];
                    videoCounter();
                }
                if (location.href.indexOf('/watch') !== -1 && !document.getElementById('uploaded-videos')) {
                    link = document.createElement('a');
                    user = document.getElementsByClassName('yt-user-info')[0].getElementsByTagName('a')[0];
                    link.id = 'uploaded-videos';
                    document.getElementsByClassName('yt-user-info')[0].appendChild(link);
                    if (channelId[user.getAttribute('data-ytid')]) {
                        link.textContent = channelId[user.getAttribute('data-ytid')];
                        videoCounter();
                    } else {
                        get('/playlist?list=' + user.getAttribute('data-ytid').replace('UC', 'UU') + '&spf=navigate', getInfo, 'GET');
                    }
                }
            }
            function wide() {
                var playerElement;
                if (widePlayer && (document.cookie.indexOf('wide=0') !== -1 || document.cookie.indexOf('wide=1') === -1)) {
                    document.cookie = 'wide=1; domain=.youtube.com; path=/';
                    playerElement = document.getElementById('player');
                    if (playerElement && location.href.indexOf('/watch') !== -1) {
                        playerElement.className = 'watch-large';
                        document.getElementById('watch7-container').className = 'watch-wide';
                    }
                }
            }
            function playerState(a) {
                if (window.movie_player) {
                    if (a === -1) {
                        if (!requestRunning && fullscreen) {
                            var sentinel = setInterval(function () {
                                var href = location.href,
                                    link = document.createElement('a'),
                                    id = api.getVideoData().video_id,
                                    list = api.getVideoData().list,
                                    index = api.getPlaylistIndex() + 1,
                                    idCheck = href.indexOf(id) !== -1,
                                    listCheck = (list && href.indexOf(list) !== -1) || href.indexOf(list) === -1;
                                function go(b) {
                                    link.className = 'spf-link';
                                    document.head.appendChild(link);
                                    link.href = b;
                                    link.click();
                                    link.remove();
                                }
                                if (href.indexOf(list) === -1 && list) {
                                    clearInterval(sentinel);
                                    document.querySelector('.spf-link[href*="list=' + list + '"]').click();
                                } else if (href.indexOf(id) === -1 && href.indexOf(list) !== -1) {
                                    clearInterval(sentinel);
                                    go('/watch?v=' + id + '&list=' + list + '&index=' + index);
                                } else if (href.indexOf(id) === -1 && !list) {
                                    clearInterval(sentinel);
                                    go('/watch?v=' + id);
                                } else if ((idCheck && listCheck) || !fullscreen) {
                                    clearInterval(sentinel);
                                }
                            }, 100);
                        }
                    } else if (a === 1) {
                        if (!html5Player && window.ytplayer.config.args.list && loaded !== window.ytplayer.config.args.video_id) {
                            loaded = window.ytplayer.config.args.video_id;
                            api.loadVideoByPlayerVars(window.ytplayer.config.args);
                        }
                    }
                }
            }
            function argsCleaner(a) {
                var base = (a.args.iurl_webp && '_webp') || '',
                    maxRes = (document.querySelector('[href*="maxresdefault"]') && document.querySelector('[href*="maxresdefault"]').getAttribute('href')) || (document.querySelector('[content*="maxresdefault"]') && document.querySelector('[content*="maxresdefault"]').getAttribute('content')),
                    ads = [
                        'ad3_module',
                        'ad_module',
                        'ad_tag',
                        'afv',
                        'aftv',
                        'invideo',
                        'instream',
                        'trueview',
                        'ypc_vid'
                    ],
                    length = ads.length;
                function vidInfo(b) {
                    var obj = {};
                    b.split('&').forEach(function (c) {
                        obj[c.split('=')[0]] = decodeURIComponent(c.split('=')[1]);
                    });
                    a.args = obj;
                    window.ytplayer.config.args = obj;
                    argsCleaner(window.ytplayer.config);
                }
                if (a.args.ypc_module && !a.args.ypc_item_title) {
                    get('/get_video_info?video_id=' + a.args.ypc_vid, vidInfo, 'GET');
                    return;
                }
                if (a.args.video_id) {
                    while (length) {
                        length -= 1;
                        delete a.args[ads[length]];
                    }
                    a.args.enablecsi = '0';
                    a.args.player_wide = '1';
                    a.args.iv_load_policy = '3';
                    a.args.vq = videoQuality;
                    a.args.autoplay = (!fullscreen && !playerAutoPlay && '0') || '1';
                    a.html5 = html5Player;
                    a.params.wmode = 'gpu';
                    a.args['iurlmaxres' + base] = a.args['iurlmaxres' + base] || maxRes || false;
                    if (a.args['iurlmaxres' + base] === false || (a.args['iurlmaxres' + base] && a.args['iurlmaxres' + base].indexOf(a.args.video_id) === -1)) {
                        delete a.args['iurlmaxres' + base];
                        checkThumbnail(a, a.args['iurl' + base]);
                    } else if (a.args['iurlmaxres' + base]) {
                        a.args['iurl' + base] = a.args['iurlsd' + base] = a.args['iurlmq' + base] = a.args['iurlhq' + base] = a.args['iurlmaxres' + base];
                    }
                    if (location.href.indexOf('/watch') !== -1 && window.ytplayer && window.ytplayer.config === null) {
                        window.ytplayer.config = a;
                    }
                }
            }
            function playerReady(a) {
                function playerFullscreen(b) {
                    fullscreen = b.fullscreen;
                }
                function fullscreenControl(b) {
                    return function () {
                        if (!requestRunning) {
                            return b.apply(this, arguments);
                        }
                        return true;
                    };
                }
                if (typeof a === 'object' && !document.getElementById('c4-player')) {
                    if (!api) {
                        api = a;
                        api.addEventListener('onStateChange', playerState, false);
                        api.addEventListener('onFullscreenChange', playerFullscreen, false);
                    }
                    if (!playerAutoPlay) {
                        if (document.getElementsByTagName('video')[0]) {
                            document.getElementsByTagName('video')[0].removeAttribute('src');
                        }
                        argsCleaner(window.ytplayer.config);
                        api.cueVideoByPlayerVars(window.ytplayer.config.args);
                    }
                    if (html5Player) {
                        api.setPlaybackQuality(videoQuality);
                        document.mozCancelFullScreen = fullscreenControl(document.mozCancelFullScreen);
                    }
                }
            }
            function general() {
                var sidebar = document.getElementsByClassName('branded-page-v2-secondary-col')[0];
                if (sidebar && sidebar.getElementsByTagName('div').length < 5) {
                    sidebar.remove();
                }
            }
            function scriptEntry(a) {
                var ytConfig;
                if (a.target.textContent.indexOf('var ytplayer = ytplayer') !== -1) {
                    a.preventDefault();
                    a.stopPropagation();
                    if (location.href.indexOf('/watch') !== -1) {
                        ytConfig = a.target.textContent.match(/ytplayer\.config = \{([\w\W]*?)\};/)[1];
                        window.ytplayer = window.ytplayer || {};
                        window.ytplayer.config = JSON.parse('{' + ytConfig + '}');
                        argsCleaner(window.ytplayer.config);
                        a.target.remove();
                    }
                } else if (a.target.textContent.indexOf('ytspf.enabled = false') !== -1) {
                    a.preventDefault();
                    a.stopPropagation();
                    window.ytspf = {
                        enabled: true,
                        config: {
                            'cache-max': 50,
                            'navigate-limit': 20,
                            'navigate-lifetime': 64800000,
                            'reload-identifier': 'spfreload'
                        }
                    };
                }
            }
            function scriptExit(a) {
                function baseDetour(b) {
                    return function () {
                        b.apply(this, arguments);
                        [
                            'ADS_DATA',
                            'CONVERSION_CONFIG_DICT',
                            'PYV_IFRAME_CONTENT',
                            'PYV_IFRAME_ID',
                            'DELAYED_EMBED',
                            'TIMING_ACTION',
                            'TIMING_INFO',
                            'SHARE_ON_VIDEO_END',
                            'UNIVERSAL_HOVERCARDS'
                        ].forEach(function (c) {
                            delete window.yt.config_[c];
                        });
                    };
                }
                function embedDetour(b) {
                    return function () {
                        var args = arguments;
                        argsCleaner(args[1]);
                        if (args[0].id === 'upsell-video') {
                            return b.apply(this, args);
                        }
                        b.apply(this, args);
                        if (html5Player && api) {
                            api.setPlaybackQuality(videoQuality);
                        }
                    };
                }
                function autoplayDetour(b) {
                    return function () {
                        var args = arguments;
                        if (!args[1] || playlistAutoPlay !== 'false' || (playlistAutoPlay === 'false' && args[1].feature && args[1].feature !== 'autoplay')) {
                            b.apply(this, arguments);
                        }
                    };
                }
                function html5Detour(b) {
                    return function () {
                        var i,
                            j,
                            pi,
                            args = arguments;
                        function html5Pointers(c, d) {
                            return function () {
                                var player,
                                    canvas,
                                    changed = c.apply(this, arguments);
                                if (changed.width && changed.height) {
                                    player = document.getElementById('movie_player');
                                    canvas = document.getElementsByClassName('html5-video-container')[0];
                                    changed.width = (d && player.offsetWidth) || canvas.offsetWidth;
                                    changed.height = (d && player.offsetHeight) || canvas.offsetHeight;
                                }
                                return changed;
                            };
                        }
                        if (args[0].id === 'upsell-video') {
                            b.apply(this, arguments);
                        } else if (typeof args[0] === 'object') {
                            pi = b.apply(this, arguments);
                            for (i in pi) {
                                if (typeof pi[i] === 'object' && pi[i] && pi[i].element) {
                                    for (j in pi[i]) {
                                        if (typeof pi[i][j] === 'function' && pi[i][j].toString().indexOf('"detailpage"!=') !== -1) {
                                            if (pi[i][j].toString().indexOf('!0)') !== -1) {
                                                pi[i][j] = html5Pointers(pi[i][j], '');
                                            } else if (pi[i][j].toString().indexOf('!0)') === -1) {
                                                pi[i][j] = html5Pointers(pi[i][j]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                }
                function html5Fix(b) {
                    return function () {
                        var changed = b.apply(this, arguments);
                        if (changed && changed.autoPlay && !fullscreen) {
                            changed.autoPlay = false;
                        }
                        return changed;
                    };
                }
                if (a.target.getAttribute('name') && a.target.getAttribute('name') === 'www/base') {
                    window.yt.setConfig = baseDetour(window.yt.setConfig);
                    Object.keys(window._yt_www).some(function (b) {
                        if (typeof window._yt_www[b] === 'function') {
                            if (window._yt_www[b].toString().indexOf('player-added') !== -1) {
                                window._yt_www[b] = embedDetour(window._yt_www[b]);
                            } else if (window._yt_www[b].toString().indexOf('window.spf.navigate') !== -1) {
                                window._yt_www[b] = autoplayDetour(window._yt_www[b]);
                            }
                        }
                    });
                } else if (a.target.getAttribute('name') && a.target.getAttribute('name') === 'html5player/html5player') {
                    window.yt.player.Application.create = html5Detour(window.yt.player.Application.create);
                } else if (a.target.getAttribute('name') && a.target.getAttribute('name') === 'www/watch') {
                    window.yt.www.watch.lists.getState = html5Fix(window.yt.www.watch.lists.getState);
                    window.yt.www.watch.ads = function () {
                        return;
                    };
                }
            }
            function title() {
                var observer,
                    config = {childList: true},
                    titleElement = document.getElementsByTagName('title')[0],
                    titleStatus = titleElement.id;
                if (titleStatus === '') {
                    titleElement.id = 'observing';
                    observer = new window.MutationObserver(title);
                    observer.observe(titleElement, config);
                } else if (titleStatus === 'observing' && location.href.indexOf('/watch') !== -1 && titleElement.textContent.indexOf('▶') !== -1 && !(api && api.getPlayerState && '0123'.indexOf(api.getPlayerState()) !== -1)) {
                    titleElement.textContent = titleElement.textContent.replace('▶ ', '');
                }
            }
            function autoplayButton(a) {
                a = (window.chrome && a.target.parentNode) || a.target;
                a.classList.toggle('yt-uix-button-toggled');
                window.localStorage.playlistAutoplay = playlistAutoPlay = (playlistAutoPlay === 'true' && 'false') || 'true';
            }
            function insertButton() {
                var spanIcon,
                    navControls,
                    playlistBar,
                    button = document.getElementById('Autoplay');
                if (location.href.indexOf('list=') !== -1 && !button) {
                    window.localStorage.playlistAutoplay = window.localStorage.playlistAutoplay || playlistAutoPlay;
                    playlistBar = document.getElementById('watch-appbar-playlist');
                    navControls = document.getElementsByClassName('playlist-nav-controls')[0];
                    button = document.createElement('button');
                    button.id = 'Autoplay';
                    button.title = 'Autoplay';
                    button.type = 'button';
                    button.className = 'yt-uix-button yt-uix-button-size-default yt-uix-button-player-controls yt-uix-button-empty yt-uix-button-has-icon autoplay-playlist yt-uix-button-opacity yt-uix-tooltip' + ((playlistAutoPlay === 'true' && ' yt-uix-button-toggled') || '');
                    button.setAttribute('data-tooltip-text', 'Autoplay');
                    spanIcon = document.createElement('span');
                    spanIcon.className = 'yt-uix-button-icon yt-uix-button-icon-watch-appbar-autoplay-video-list';
                    button.appendChild(spanIcon);
                    navControls.appendChild(button);
                    button.addEventListener('click', autoplayButton);
                    playlistBar.className = playlistBar.className.replace('radio-playlist', '');
                }
            }
            function htmlGate() {
                if (fullscreen && window.ytplayer.config) {
                    if (!html5Player && location.href.indexOf('list=') !== -1) {
                        var sentinel = setInterval(function () {
                            if (window.yt.config_.ERRORS) {
                                clearInterval(sentinel);
                                api.loadVideoByPlayerVars(window.ytplayer.config.args);
                            }
                        }, 100);
                    } else {
                        api.loadVideoByPlayerVars(window.ytplayer.config.args);
                    }
                }
                requestRunning = false;
                insertButton();
                wide();
                title();
                general();
                username();
            }
            function request(a) {
                var videoBefore = a.detail.previous.indexOf('/watch?') === -1,
                    videoAfter = a.detail.url.indexOf('/watch?') !== -1,
                    listBefore = a.detail.previous.indexOf('list=') !== -1,
                    listAfter = a.detail.url.indexOf('list=') !== -1,
                    player = document.getElementById('movie_player');
                if (player && videoAfter && (listAfter !== listBefore || videoBefore)) {
                    if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded) {
                        delete window.ytplayer.config.loaded;
                    }
                    player.remove();
                }
                requestRunning = true;
            }
            window.onYouTubePlayerReady = playerReady;
            window.addEventListener('readystatechange', htmlGate, true);
            window.addEventListener('spfrequest', request);
            window.addEventListener('spfdone', htmlGate);
            window.addEventListener('beforescriptexecute', scriptEntry);
            if (window.chrome) {
                document.documentElement.addEventListener('load', scriptExit, true);
            } else {
                window.addEventListener('afterscriptexecute', scriptExit);
            }
        };
    injector('(' + core + ')()', 'script');
    injector(styleSheet, 'style');
}());
