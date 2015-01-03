// ==UserScript==
// @version     1.0.6
// @name        YouTube +
// @namespace   https://github.com/ParticleCore
// @description YouTube with more freedom
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
        '{display:block !important}',
        core = function () {
            var loaded,
                channelId = {},
                videoQuality = 'hd720',
                api = false,
                widePlayer = true,
                fullscreen = false,
                html5Player = true,
                playerAutoPlay = false,
                requestRunning = false;
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
                    div,
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
                    div = document.createElement('div');
                    div.innerHTML = videos.body.content;
                    link.className = 'spf-link';
                    link.textContent = channelId[user.getAttribute('data-ytid')] = div.querySelectorAll('ul.pl-header-details li')[1].textContent;
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
                        if (args[1].feature && args[1].feature !== 'autoplay') {
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
            function linkList(a, b) {
                var i,
                    list = document.getElementById('channels-browse-content-grid') || document.getElementById('browse-items-primary'),
                    button = document.querySelector('button[data-uix-load-more-href]'),
                    length,
                    observer,
                    config = {
                        attributes: true,
                        attributeOldValue: true
                    };
                if (location.href.indexOf('/playlist') === -1) {
                    if (a) {
                        b.disconnect();
                    }
                    if (list) {
                        if (button && document.readyState === 'complete') {
                            observer = new window.MutationObserver(linkList);
                            observer.observe(button, config);
                        }
                        list = list.querySelectorAll('a[href*="&list="]');
                        length = list.length;
                        if (length !== 0) {
                            for (i = 0; i < length; i += 1) {
                                list[i].href = list[i].href.split('&list=')[0];
                            }
                        }
                    }
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
                wide();
                title();
                general();
                linkList();
                username();
            }
            function request(a) {
                var videoBefore = a.detail.previous.indexOf('/watch?') === -1,
                    videoAfter = a.detail.url.indexOf('/watch?') !== -1,
                    listBefore = a.detail.previous.indexOf('list=') !== -1,
                    listAfter = a.detail.url.indexOf('list=') !== -1,
                    player = document.getElementById('movie_player');
                if (player && videoAfter && (listAfter !== listBefore || videoBefore)) {
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
