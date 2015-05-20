// ==UserScript==
// @version     0.0.1
// @name        YouTube +
// @namespace   https://github.com/ParticleCore
// @description YouTube with more freedom
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAJp0lEQVR4XsWZDYwcZRnHf8/M7Nfd7V6v912upYVri7Q0lIJgVYgSABUMqhA0JBJiYrAhmJhIItaERCAxaAxJWlGBNkUQQYWaAMVYQ4mpxfZsaSn1+um117v2rnfX27vbr5l5fG9yl9ub7m6WtIVf8uzOvm9m5v887zP/eZOVI1cuphIWICIIUwgIIIQGYKHAcmAp0AGkCCCt0At0A/tQDiOAgjKNokW/VRWlMg7nRzvwVZTbgWtV6EApj3AS2IXyNvA6cJxyXGjhQsAKhYdBvgY0CKDTJUQAnfoMocwDMcGdgj4Oshn0V8Cuiy28CfgJ8KBCFBTCAsNj4SmZnicl6H3At4DfAY8BfRdD+K3AOlUu53zQ8CE28D3gy8BDwOsXUvgPFJ4CbC4e84HXgEeBJ6gM9sPNjVSGxxSeBKxKBdQS40pptPK5NyskgbfPp+I/An46y7qkuF9DAhQgNF6NeAUVivmhKhlgLWWQI1d0UhLh64r8iRlCuqtDAC1zDKCVz7kfZSMlkEOlhXcAXUAznyyjwCrgECEcLZ3yLz4W0b4PCFhCGVLA0yhfAXS2cJQQX0S5p7rFp9qFL/0diYAqeF6Fa/Ml4E5gM0XYaxrnolAc64FOLiLq+6ht07FxE7ErriS95U2wHSpwKbAB0KKKz2IVcIsSdo4wxcVT/IkJrGh0qoLhc8JPp6KFAiBEFy7CGxnBy+WxI1HUccrddzXo54F3Zio+t2GWDQGf/Sg9KrW11H/nfnL9fXh9fYhtg2VRCnVdrIa5LHjhRRofeIBIW3sQc75xN4mVKxl98w0QKVesAspfUUDB8XWWp9/OR8FXxPdpWfMQjQ9+n75nniH90ovI6dNITU2QhIYqr74frFCQnCrqeXjj43iZLL6CKCWRoBOIA1kA2Xv5IqZYCuwFIlSL5wUV73zzLWLzFwAwdPQoA7/9Dbm//BkZHg4SwLagqP/8TAZxInxqZxcTXV0cufdu7GQKiUapgA98GtgF4PhF/S1KRItSFAUNH0/PAapgKbOYu2gRdU88ycC99zLy3HN4Zvk5exZMAhJUWSAaB8che+AAuRMnkEQNGpkRrXquXyFYWiRcdi9aSIDwM+BRKhF+1Xselqn40re2BBUPc9Z1GXxvB9lNmyhs2QIT44HIsG9XD08DD892FaU9pK2yeEB1JkpR7zgkPrOaoeVXkf7m3eReMAls3QqZHJJIzNxHhBDlzKlNCMDxZ+6aKqGtIhpSXYqoCK3JJInVqzm74ipyu7rIbNxI4d1t4LpBAmjojuU1pLTEK9+iCkIWHkRlQESoNwLjts3w9dfjXH017o4dZIwDFXbuCnxdqqi6gk1AsR2KZimJlHqLoEWf1RKLRmmNRBg1djh2221YHR2cfeQR/P0foGUcRWfryICG9irKICXRMr+rr3i4+jXGtwfWrePMC78Hk4REolXkrwCDnNvjcqx4gapCwdfqa54fPEP/huc59fwGCid7sWpqwXGqTx7tAQn3uP4nlF1VD6dVxV3d0VH6Nmyk/9lnyR47hj3p6ckkqnzUJTMalfALaA8wKNCk4Q7Xc3eoqkDlauOaljj14kv0mq1AtvsgViKOnUqBgu+DAAgQetEh5+YjQhpl50yPz2Q8DPxLlTuYRkLCfALQynbo53L0/+FlTqxfT2b/fqxYHCuVBMD3dda1Zz/foTEpGle6gJNhV5nmFaFIuFLRoqZXWiwLAN9zOfXHVzmxbj1ju3cbwTGsZAoA1ZAWLbnjRcr7wqtMEa44wGaFXuASKqDFPW5J8D3wxhsce+qXpHfuRBzHCJ6qsCrVvNi08vwZgVcoQv7RFtbIj4HHqQZVJB4nvmABY/v2IqpY8QQIoFw4hJ8Dj1CEbD1XeAPoHmB+VXstVfx8ASsaBeE8KGvEg8BVQD9FyLtGuKuKzyzuUXh5xkguMpXf098Fni2ej4ggv25sZqHtkLIsXIU8igIom4D7+GR5HbhLgKiAgzCmyjG3gAB02A7XxuPcHEuwzIkQVSUHKU/YCqzik+FDG26MwaCL8KHn8vdshvdyGXpcFyl2eDsSYWVtHTcb8deLRZOy0IO/5aGTj5EonHCUW4YsDvxbYIsRvCeXJZ/LgersfyQsESxgn+9x0InxKnCdp8c+V3Bv7VRes0VWeI7DxcR2XXzV7gPCXf907AM7bIshxyY94SFTGqftVcI7t3g8TiqVIlZTQyyZpHXOHFY3NTWvPPK/TU1Hjt5mxKOWxYVEfB+74DK0cMG23Z2XfXv7yHBv79AQuXQaL5djcHCQQqGA7/vhhxgSiQQLjB8vXrxY2tra6oz4ZjPWZjtOS96SJAU3OX/P+3dc+l7XF6ITE3EvGkFFOB8C388XcBPxfM+qldt6rrl6s0YjIxFfx3zXPZ3NZvtHR0cH+vr6xg4fPuz39PQwPj4OgNTV1XHDDTfI8uXLE/X19W0i0mkyW2SiUVUTJixAVcTzIpFM7Zmh1gU7u25sPnR4RSSTdXzHwbdsEKrG8jws18ONRb3Byy/b13PdNe+km5v67EIhIao2IIBvWVbWxBkTx1T1kEmib//+/RPbt29XWbNmjdXa2jrHLMVSz/OWAfOACKAzMYNv267atld3eqC9pfvgisbDR5fVjIw0Wa6LIkEbISFHVhD1TSi+7ZCprx86c9nC/aeXLn4/3dpyQnzfNsk45f5mBQpAv0ngg2g0+l/TOsOydu1aR0SaXdddBpigAbAAnxDhBCYjks3WTK5Cqr9/ft2pgUvio+kGO59PBEKUIFEvFs3mknXD6Zbmk+n21p7xxsZT+URifFLsZFT538BIYJG2vVdETsuyZcu46aabIi0tLY0istgksMS0SZuqxotO8svtgVREJ1dALctDlUCM60ZE1Zqa9007BUkiouaXJUasqArnIqFKIyKT7XLKCO4WkYMDAwOD27ZtywtAJBKhs7OTJUuW2OYBTSWTyXYz1iEi7SaJuSZqgaiq2iYktJlTwptGEaWIKZESEjdrzKAmPKBghI6bGFLVftPCx8fGxvqOHz9+tru72zt48CD5fB4hRFNTE6bnaWxspKGhwTFRaxJJmd6a4zjOZKTMReuAmqlViQIOJlTVmoyQKAVURPzJAAJxQF5EcsCEKcyYWelREyNG6Eg6nR4dHh4eN1EwwcmTJwNLLEaKPdwsB0YksVgMIw5VDY7b29sxFw0s09gkmUyG2tpamTdvnmNu6pjzHBGxzSo5xqVMt3iWqk4vtZp5NTbmmUq5quq5BjPm9vf3u0akmuti5jHHwf16e3uDqqpqoMPMYaqOuW4wBvB/9U2tWRGNRkIAAAAASUVORK5CYII=
// @match       https://www.youtube.com/*
// @run-at      document-start
// @downloadURL https://github.com/ParticleCore/Particle/raw/master/src/Userscript/YouTubePlus.user.js
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// @noframes
// ==/UserScript==
(function () {
    'use strict';
    var userscript      = typeof GM_info === 'object',
        defaultSettings = {
            GEN_BTTR_NTF     : true,
            GEN_YT_LOGO_LINK : true,
            GEN_CMPT_TTLS    : true,
            GEN_BLUE_GLOW    : true,
            GEN_CHN_DFLT_PAGE: 'videos',
            GEN_SDBR_ON      : true,
            VID_END_SHRE     : true,
            VID_DFLT_QLTY    : 'auto',
            VID_PLST_SEP     : true,
            VID_PLST_ATPL    : true,
            VID_PLST_RVRS    : true,
            VID_PLR_ANTS     : true,
            VID_PLR_CC       : true,
            VID_PLR_ALVIS    : true,
            VID_PLR_ADS      : true,
            VID_PLR_SIZE_MEM : true,
            VID_PLR_CTRL_VIS : true,
            VID_PLR_DYN_SIZE : true,
            VID_PLR_FIT_WDTH : '1280px',
            VID_PROG_BAR_CLR : 'red',
            VID_CTRL_BAR_CLR : 'light',
            VID_HIDE_COMS    : '1',
            VID_POST_TIME    : true,
            VID_VID_CNT      : true,
            VID_DESC_SHRT    : true,
            VID_SDBR_ALGN    : '1',
            VID_TTL_CMPT     : true,
            BLK_ON           : true,
            volLev           : 50,
            plApl            : false,
            plRev            : false,
            advOpts          : true,
            blacklist        : {}
        },
        particleStyle   = [
        // start| Playlist spacer
            '.part_playlist_spacer:not(.content-snap-width-skinny-mode) #watch-appbar-playlist{\n',
            '    margin-left: 0 !important;\n',
            '}\n',
        //   end| Playlist spacer
        // start| Ads visibility
            '.part_no_ads #header, .part_no_ads #feed-pyv-container, .part_no_ads .video-list-item:not(.related-list-item), .part_no_ads .pyv-afc-ads-container, .part_no_ads .ad-div{\n',
            '    display: none;\n',
            '}\n',
        //   end| Ads visibility
        // start| Hide video details
            '.part_hide_details #action-panel-details{\n',
            '    display: none;\n',
            '}\n',
        //   end| Hide video details
        // start| Disable blue glow
            '.part_dsbl_glow .yt-uix-button:focus, .yt-uix-button:focus:hover{\n',
            '    box-shadow: initial !important;\n',
            '}\n',
        //   end| Disable blue glow
        // start| Hide footer
            '.part_hide_footer #footer-container{\n',
            '    display: none;\n',
            '}\n',
            '.part_hide_footer #body-container{\n',
            '    padding-bottom: initial;\n',
            '}\n',
        //   end| Hide footer
        // start| Compact video title
            '.part_compact_title #watch7-headline #eow-title{\n',
            '    display: block;\n',
            '    overflow: hidden;\n',
            '    text-overflow: ellipsis;\n',
            '    white-space: nowrap;\n',
            '}\n',
        //   end| Compact video title
        // start| Compact thumbnail titles
            '.part_compact_titles .feed-item-container .yt-ui-ellipsis, .yt-shelf-grid-item .yt-ui-ellipsis{\n',
            '    white-space: nowrap !important;\n',
            '    display: inherit !important;\n',
            '}\n',
        //   end| Compact thumbnail titles
        // start| Floater player
            'html.floater:not([data-player-size="fullscreen"]):not(.content-snap-width-skinny-mode) #player #player-api{\n',
            '    left: initial !important;\n',
            '    margin: 0 auto !important;\n',
            '    transform: none;\n',
            '}\n',
            'html.floater:not([data-player-size="fullscreen"]) #player #movie_player{\n',
            '    box-shadow: 0 0 10px rgb(0, 0, 0);\n',
            '    position: fixed !important;\n',
            '}\n',
            'html.floater:not([data-player-size="fullscreen"]):not(.content-snap-width-skinny-mode) #player #movie_player{\n',
            '    top: 50% !important;\n',
            '    z-index: 10;\n',
            '}\n',
            'html.content-snap-width-skinny-mode.floater:not([data-player-size="fullscreen"]) #player #movie_player{\n',
            '    margin-top: 0 !important;\n',
            '    top: 50px !important;\n',
            '    transform: none;\n',
            '}\n',
        //   end| Floater player
        // start| Labelless video buttons
            '.part_labelless_buttons #watch8-secondary-actions{\n',
            '    left: 0 !important;\n',
            '}\n',
            '.part_labelless_buttons #watch8-secondary-actions .yt-uix-button-content{\n',
            '    display: none;\n',
            '}\n',
            '.part_labelless_buttons #watch8-secondary-actions button{\n',
            '    padding: 0;\n',
            '}\n',
        //   end| Labelless video buttons
        // start| Hide comments
            '.part_hide_comments #watch-discussion:not(.show){\n',
            '    height: 0;\n',
            '    margin-bottom: 0;\n',
            '    margin-top: 0;\n',
            '    opacity: 0;\n',
            '    overflow: hidden;\n',
            '    padding-bottom: 0;\n',
            '    padding-top: 0;\n',
            '}\n',
            '.content-snap-width-skinny-mode.part_hide_comments #P-show-comments{\n',
            '    display: none;\n',
            '}\n',
            '.part_hide_comments #P-show-comments button{\n',
            '    border-top: none;\n',
            '    padding-top: 2px;\n',
            '}\n',
        //   end| Hide comments
        // start| Custom styles
            '#body #uploaded-videos{\n',
            '    color: #666;\n',
            '    display: initial;\n',
            '    font-size: 11px;\n',
            '    font-weight: initial;\n',
            '    overflow: initial;\n',
            '    vertical-align: initial;\n',
            '}\n',
            '.yt-user-info > span{\n',
            '    color: #666;\n',
            '    font-size: 11px;\n',
            '}\n',
            '.invisible{\n',
            '    display: none;\n',
            '}\n',
            '#subscription-playlist-icon{\n',
            '    margin-right: -20px;\n',
            '}\n',
            '#subscription-playlist:hover span{\n',
            '    opacity: 1;\n',
            '}\n',
            '#subscription-playlist span{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAZlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwbJTWAAAAIXRSTlMAAnkBEP3p7/mGCwUHWwOoURVpQ5hCTvVZZARvBgmIDJcLZgxgAAAAVUlEQVR4Xl3ORRLAIBBE0YFAQtxd+/6XDEuav3xVI9L2wgGTYfDlBYNPVxHADiUD4OqGAcg6xQCkYxLBTJAtNLJuKlzq9iM8a8+LHtM3vf68EvYZoX5HKg99MDC3NAAAAABJRU5ErkJggg==") no-repeat scroll center;\n',
            '    display: block;\n',
            '    height: 100%;\n',
            '    opacity: 0.4;\n',
            '    width: 20px;\n',
            '}\n',
            '#blacklist-import, #blacklist-export{\n',
            '    margin-top: 10px;\n',
            '}\n',
            '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-reverse-video-list{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEX///////////////////////////////////////////////////////////////////////8BOg0gAAAAEXRSTlMA8KS9FQYBt8gPhw6JigvJyoYcNuUAAABRSURBVHhevdE5DsAgDERRs8ZAtrn/ZaMIiSKD5AbllX8qg/wubnHam0JPYSkACIl69nj5LB8VXRXm4EbggdvKYbCHHd1hHc3PxMqFuxhfsdwDNLwDxD27Q0MAAAAASUVORK5CYII=") no-repeat;\n',
            '    height: 24px;\n',
            '    width: 24px;\n',
            '}\n',
            '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-autoplay-video-list{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+hBK93AAAAJHRSTlMAAPT+sPxAEPcUSbmkAcWYHTWQK8+DJIKN+pcZoB+oJzC6OMQ+rrabAAAAY0lEQVQokbXQNw6AQBADwIMj55wz/v8b6RBI3g7cjrTBSn2c2HjnhioQAEgcAYAwFwCwSgGgo4YDYKcZB8ArfA6AWbsCtBS8jo7qh5Ett6eZnauXlT5obbSS/aAlnq9uH/BvLpzPEZ02MKzwAAAAAElFTkSuQmCC") no-repeat;\n',
            '    height: 24px;\n',
            '    width: 24px;\n',
            '}\n',
        //   end| Custom styles
        // start| Player console
            '#watch-header{\n',
            '    position: relative;\n',
            '}\n',
            '.part_fullbrowser #movie_player:not(.unstarted-mode):not(.ended-mode){\n',
            '    bottom: 0px;\n',
            '    left: 0px;\n',
            '    position: fixed;\n',
            '    right: 0px;\n',
            '    top: 0px;\n',
            '}\n',
            '.part_fullbrowser body{\n',
            '    overflow: hidden;\n',
            '}\n',
            '.part_fullbrowser #masthead-positioner{\n',
            '    z-index: initial;\n',
            '}\n',
            '#console-button{\n',
            '    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAKAQMAAABVIEaHAAAABlBMVEX///8AAABVwtN+AAAAAXRSTlMAQObYZgAAABBJREFUeF5j+P8DhMAAkw0AsQkLy6q+yNQAAAAASUVORK5CYII=) no-repeat center;\n',
            '    cursor: pointer;\n',
            '    height: 20px;\n',
            '    opacity: 0.5;\n',
            '    position: absolute;\n',
            '    top: 0;\n',
            '    right: 0;\n',
            '    width: 25px;\n',
            '    z-index: 1;\n',
            '}\n',
            '#console-button:hover{\n',
            '    opacity: 0.8;\n',
            '}\n',
            '#player-console{\n',
            '    display: none;\n',
            '    font-size: 0;\n',
            '    height: 40px;\n',
            '    position: absolute;\n',
            '    right: 20px;\n',
            '    top: 10px;\n',
            '    text-align: center;\n',
            '    border-left: 20px solid;\n',
            '    border-image: linear-gradient(to left, #FFF 20%, transparent 100%) 1 100%;\n',
            '}\n',
            '.player-console #player-console{\n',
            '    display: initial;\n',
            '}\n',
            '#player-console > div{\n',
            '    cursor: pointer;\n',
            '    display: inline-block;\n',
            '    height: 30px;\n',
            '    opacity: 0.4;\n',
            '    padding: 0 7px;\n',
            '    position: relative;\n',
            '    top: 50%;\n',
            '    transform: translateY(-50%);\n',
            '}\n',
            '#player-console:before{\n',
            '    background: #FFF;\n',
            '    border-right: 20px solid white;\n',
            '    content: "";\n',
            '    height: 100%;\n',
            '    position: absolute;\n',
            '    width: 100%;\n',
            '}\n',
            '#player-console > div.active{\n',
            '    opacity: 0.8 !important;\n',
            '}\n',
            '#player-console > div:hover{\n',
            '    opacity: 0.6;\n',
            '}\n',
            '#autoplay-button{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAZlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwbJTWAAAAIXRSTlMAAnkBEP3p7/mGCwUHWwOoURVpQ5hCTvVZZARvBgmIDJcLZgxgAAAAVUlEQVR4Xl3ORRLAIBBE0YFAQtxd+/6XDEuav3xVI9L2wgGTYfDlBYNPVxHADiUD4OqGAcg6xQCkYxLBTJAtNLJuKlzq9iM8a8+LHtM3vf68EvYZoX5HKg99MDC3NAAAAABJRU5ErkJggg==") no-repeat center;\n',
            '    width: 16px;\n',
            '}\n',
            '#save-thumbnail-button{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAMAAAB2Mu6sAAAAXVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDURIJAAAAHnRSTlMAAN5AsgMB/dECiK1jzAireHcS5GIZ1RUk9eLK6wls6Nm2AAAAbUlEQVR4Xn3QWQ6AIAxFUZRBxXme3/6XKSr9MCDnq8lN2qQMP0KBfUQPCpILwaUncBjcEwQMEQxD4V2lNKCVe1zWMHJJgVQ7HuVJIWvajLGuh5XaME5mnpcVZHuDwi1JQHBQcNgQO6LgE70C4QJ/fB23OA62kwAAAABJRU5ErkJggg==") no-repeat center;\n',
            '    width: 24px;\n',
            '}\n',
            '#seek-map{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAFVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAACWttmcAAAABnRSTlMAABXMz9EsYubbAAAAK0lEQVQIW2NQSUtzYgATbmlpKRAiDQiIIYCKUyGEalqaEYSAAUEkFpXtAABuQC6raZ2ufgAAAABJRU5ErkJggg==") no-repeat center;\n',
            '    width: 18px;\n',
            '}\n',
            '#screenshot-button{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAQlBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4warDAAAAFXRSTlMAAAJAHGj94JnP3j8VzZUi6wvcytGH5aKYAAAAcUlEQVR4XoXPSQ6AIAxAUSwzAjLI/a/qQIOSJvoXNHkLoKy3OedKOY9tueuaU8NSfhhqG1UYHNureLO3jWQ9Q1VSAAip0Bnqyo3Whq/oyJKHawQuJxamTyMmBt1ZwzfTS/6fpB8k6wymXcvTLPM71d0f5EgYnuxfALoAAAAASUVORK5CYII=") no-repeat center;\n',
            '    width: 22px;\n',
            '}\n',
            '#sidebar-button{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASAQMAAABl67xuAAAABlBMVEUAAAD///+l2Z/dAAAADklEQVR4XmNgbGCgBgYARvEJE30TDdMAAAAASUVORK5CYII=") no-repeat center;\n',
            '    width: 22px;\n',
            '}\n',
            '#loop-button{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAMAAABsDg4iAAAAY1BMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcL/mXAAAAIHRSTlMAAKVZHRNz5BQCyFAYsgEfmk71I4KrKdfMBEcGVwWGf0tiNMIAAACRSURBVHhebdBXDsIwEADRxSVu6fQ+9z8lhgRLCbwfSyNZXq/MjFbOKW1kk03JVswq+43tnqLppniTgZh8CD5FaOw7Hti2u1o+6h6qHNsjp/YsszqCERmAixQJtFxHYLyX6EHJA4BniQFcPhwEWUcFXpbXRTSk1UMiBmK9HCmroF8On9mG9TezrvlZyO/q/i75BYzRD2BnJL4kAAAAAElFTkSuQmCC") no-repeat center;\n',
            '    width: 20px;\n',
            '}\n',
            '#fullbrowser-button{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASAQMAAABhHmxTAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAACVJREFUeF5j+P//Axw3MAgw7GO/AMYbGOAYJA7CyGJQdWA5kF4AfegdTRKgSyUAAAAASUVORK5CYII=") no-repeat center;\n',
            '    width: 20px;\n',
            '}\n',
        //   end| Player console
        // start| Seek thumbs
            '#seek-thumb-map{\n',
            '    font-size: 0;\n',
            '    overflow: auto;\n',
            '    position: absolute;\n',
            '    bottom: 0;\n',
            '    width: 100%;\n',
            '    white-space: nowrap;\n',
            '    z-index: 940;\n',
            '}\n',
            '#seek-controls{\n',
            '    background: rgba(0, 0, 0, 0.8);\n',
            '    border-top-left-radius: 5px;\n',
            '    border-top-right-radius: 5px;\n',
            '    bottom: 100%;\n',
            '    display: inline-block;\n',
            '    left: 50%;\n',
            '    padding: 5px 5px 0;\n',
            '    position: relative;\n',
            '    transform: translateX(-50%);\n',
            '}\n',
            '#seek-controls > div{\n',
            '    color: rgba(255,255,255, 0.4);\n',
            '    cursor: pointer;\n',
            '    font-size: 10px;\n',
            '    display: inline;\n',
            '    font-size: 10px;\n',
            '    margin: 5px;\n',
            '}\n',
            '.quality-1 .quality-1, .quality-2 .quality-2, .quality-3 .quality-3{\n',
            '    color: rgba(255,255,255, 0.7) !important;\n',
            '}\n',
            '#seek-controls > div:hover{\n',
            '    color: #F1F1F1 !important;\n',
            '}\n',
            '#seek-thumbs{\n',
            '    background: rgba(0, 0, 0, 0.8);\n',
            '    overflow: auto;\n',
            '}\n',
            '#seek-thumbs span{\n',
            '    display: inline-block;\n',
            '    margin: 10px 5px 20px;\n',
            '    position: relative;\n',
            '}\n',
            '#seek-thumbs .timer{\n',
            '    font-size: 11px;\n',
            '    line-height: 20px;\n',
            '    position: absolute;\n',
            '    text-align: center;\n',
            '    top: 100%;\n',
            '    width: 100%;\n',
            '}\n',
        //   end| Seek thumbs
        // start| Screenshot window
            '#screenshot-result{\n',
            '    bottom: 15px;\n',
            '    box-shadow: 0 0 15px #000000;\n',
            '    font-size: 0;\n',
            '    margin: 5px;\n',
            '    max-height: calc(100% - 90px);\n',
            '    max-width: 420px;\n',
            '    overflow: hidden;\n',
            '    position: fixed;\n',
            '    right: 15px;\n',
            '    width: 30%;\n',
            '    z-index: 1000;\n',
            '}\n',
            '#screenshot-result > canvas{\n',
            '    width: 100%;\n',
            '}\n',
            '#close-screenshot{\n',
            '    background: rgba(0, 0, 0, 0.5);\n',
            '    border-top-left-radius: 5px;\n',
            '    color: #F1F1F1;\n',
            '    cursor: pointer;\n',
            '    font-size: 10px;\n',
            '    padding: 5px;\n',
            '    position: absolute;\n',
            '    right: 0;\n',
            '    text-transform: uppercase;\n',
            '    bottom: 0;\n',
            '}\n',
            '#close-screenshot:hover{\n',
            '    background: rgba(0, 0, 0, 0.8);\n',
            '}\n',
        //   end| Screenshot window
        // start| Sidebar mode
            '.yt-pl-thumb .sidebarmode, .thumb-wrapper .sidebarmode, .yt-lockup-thumbnail .sidebarmode{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAIAQMAAAD6NPz1AAAABlBMVEX///9mZmaO7mygAAAAAXRSTlMAQObYZgAAAA1JREFUeF5jeH8AKwIAonQNedxnO+oAAAAASUVORK5CYII=") #FFF no-repeat center;\n',
            '    bottom: 0;\n',
            '    color: #666;\n',
            '    cursor: pointer;\n',
            '    display: none;\n',
            '    font-size: 12px;\n',
            '    height: 17px;\n',
            '    left: 0;\n',
            '    line-height: 1;\n',
            '    position: absolute;\n',
            '    width: 17px;\n',
            '}\n',
        //   end| Sidebar mode
        // start| Thumb buttons
            '.yt-pl-thumb .blacklist, .thumb-wrapper .blacklist, .yt-lockup-thumbnail .blacklist{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARBAMAAADNtor0AAAAJ1BMVEVmZmZzc3N/f3+Kioqqqqqzs7PFxcXOzs7X19fn5+fv7+/39/f///+6PEy9AAAAXElEQVR4XnXO0QnAMAgE0EszhV0lPxmhozhQRhEoEJIWHKpW288IB48DReg/55JXUx3iZFKtJZhaR3CCahanMqwMTlgZ7EjtY91AQVu3I84jy8Tu5PLGeYtn8dkDuUZuK/X5jU8AAAAASUVORK5CYII=") #FFF no-repeat center / contain;\n',
            '    color: #666;\n',
            '    cursor: pointer;\n',
            '    display: none;\n',
            '    font-size: 12px;\n',
            '    height: 17px;\n',
            '    line-height: 1;\n',
            '    position: absolute;\n',
            '    right: 0;\n',
            '    top: 0;\n',
            '    width: 17px;\n',
            '}\n',
            '.thumb-wrapper:hover .blacklist, .yt-lockup-thumbnail:hover .blacklist, .yt-pl-thumb:hover .blacklist, .yt-pl-thumb:hover .sidebarmode, .thumb-wrapper:hover .sidebarmode, .yt-lockup-thumbnail:hover .sidebarmode{\n',
            '    display: initial;\n',
            '}\n',
        //   end| Thumb buttons
        // start| Grid layout
            '    .part_grid_subs .feed-item-container .branded-page-module-title, .part_grid_subs .feed-item-container .yt-lockup-description, .part_grid_search #results .yt-lockup-description{\n',
            '        display: none !important;\n',
            '        height: 0 !important;\n',
            '    }\n',
            '    .part_grid_subs div#browse-items-primary, .part_grid_search #results {\n',
            '        font-size: 0;\n',
            '        margin-right: -15px;\n',
            '        padding: 15px;\n',
            '        padding-right: 0;\n',
            '    }\n',
            '    .part_grid_subs div#browse-items-primary .section-list > li, .part_grid_search #results .item-section > li{\n',
            '        display: inline-block;\n',
            '        margin-bottom: 20px;\n',
            '        margin-right: 10px;\n',
            '        width: 196px;\n',
            '        word-wrap: break-word;\n',
            '    }\n',
            '    .part_grid_subs div#browse-items-primary .expanded-shelf-content-item{\n',
            '        margin-bottom: initial;\n',
            '    }\n',
            '    .part_grid_subs div#browse-items-primary .item-section .feed-item-container, .part_grid_search #results .item-section > li .yt-lockup{\n',
            '        border: initial;\n',
            '        padding: initial;\n',
            '    }\n',
            '    .part_grid_subs div#browse-items-primary .item-section .feed-item-container .menu-container{\n',
            '        top: 110px;\n',
            '        right: -5px;\n',
            '    }\n',
            '    .part_grid_subs div#browse-items-primary .yt-lockup-thumbnail, .part_grid_search #results .yt-lockup-thumbnail{\n',
            '        float: initial !important;\n',
            '    }\n',
            '    .part_grid_subs div#browse-items-primary .yt-lockup-meta, .part_grid_subs div#browse-items-primary .yt-lockup-byline{\n',
            '        font-size: 11px;\n',
            '        max-width: 196px;\n',
            '    }\n',
            '    .part_grid_subs div#browse-items-primary .yt-lockup-title, .part_grid_subs div#browse-items-primary .feed-item-dismissal{\n',
            '        font-size: 13px;\n',
            '    }\n',
            '    .part_grid_search #results .yt-lockup-title a{\n',
            '        white-space: nowrap;\n',
            '    }\n',
            '    .part_grid_search #results .yt-lockup-playlist-items, .part_grid_search #results .yt-lockup-badges{\n',
            '        display: none;\n',
            '    }\n',
        //   end| Grid layout
        // start| Enhancements
            ':focus{\n',
            '    outline: none;\n',
            '}\n',
            ':-moz-focus-inner{\n',
            '    border: 0;\n',
            '}\n',
            'input[type="checkbox"], input[type="radio"]{\n',
            '    opacity: 0;\n',
            '}\n',
            '.signin-container{\n',
            '    margin-right: 10px;\n',
            '}\n',
            '#body-container{\n',
            '    position: relative;\n',
            '}\n',
            '.branded-page-related-channels-item .yt-close{\n',
            '    z-index: 1;\n',
            '}\n',
            '.show-guide #appbar-guide-menu{\n',
            '    border-bottom: 1px solid #E8E8E8;\n',
            '    border-right: 1px solid #E8E8E8;\n',
            '    box-shadow: none;\n',
            '}\n',
            '#movie_player:not(.ended-mode) .html5-progress-bar, #movie_player:not(.ended-mode) video{\n',
            '    max-width: 100%;\n',
            '    max-height: 100%;\n',
            '    min-width: 100%;\n',
            '    min-height: 100%;\n',
            '    left: initial !important;\n',
            '    top: initial !important;\n',
            '}\n',
            '.ideal-aspect .html5-player-chrome{\n',
            '    background: rgba(27,27,27,0.9) !important;\n',
            '}\n',
            '.ideal-aspect.light-theme .html5-player-chrome{\n',
            '    background: rgba(204,204,204,0.9) !important;\n',
            '}\n',
            '#theater-background, #watch7-sidebar, #watch-appbar-playlist{\n',
            '    transition: none !important;\n',
            '}\n',
            '.part_fit_theater .watch-stage-mode #theater-background, .part_hide_controls.part_fit_theater .watch-stage-mode #theater-background{\n',
            '    bottom: 0;\n',
            '    height: initial !important;\n',
            '    top: 0;\n',
            '}\n',
            '#footer-container{\n',
            '    max-width: initial;\n',
            '}\n',
            '.content-snap-width-skinny-mode #theater-background{\n',
            '    display: none;\n',
            '}\n',
            '.content-snap-width-skinny-mode #player-playlist{\n',
            '    margin-top: 10px;\n',
            '}\n',
            '.content-snap-width-skinny-mode #footer-container{\n',
            '    display: none;\n',
            '}\n',
            '.content-snap-width-skinny-mode #player, .content-snap-width-skinny-mode #content, .content-snap-width-skinny-mode #watch-appbar-playlist{\n',
            '    top: 0 !important;\n',
            '}\n',
            '.content-snap-width-skinny-mode #player-playlist, .content-snap-width-skinny-mode #watch-appbar-playlist{\n',
            '    margin-bottom: 0;\n',
            '}\n',
            '#page.watch .content-alignment, .watch.watch-non-stage-mode #player.content-alignment, .yt-base-gutter, .watch #content.content-alignment, .watch.watch-non-stage-mode #player.content-alignment, .watch.watch-stage-mode #player-playlist.watch-player-playlist{\n',
            '   min-width: 0;\n',
            '}\n',
            '.content-snap-width-skinny-mode .ytp-size-toggle-large, .content-snap-width-skinny-mode .ytp-size-toggle-small{\n',
            '   display: none !important;\n',
            '}\n',
            '.new_player .ytp-large-play-button{\n',
            '   text-align: center;\n',
            '}\n',
            '.new_player .ytp-large-play-button svg{\n',
            '   max-width: 85px;\n',
            '}\n',
            '.new_player .html5-video-container{\n',
            '   height: 100%;\n',
            '}\n',
        //   end| Enhancements
        // start| Improved notification button
            '.part_notif_button #appbar-main-guide-notification-container{\n',
            '    box-shadow: 0 1px 2px #eee inset;\n',
            '    display: inline-block;\n',
            '    top: 1px !important;\n',
            '    left: auto !important;\n',
            '    margin-left: 79px !important;\n',
            '    opacity: 0;\n',
            '    overflow: hidden !important;\n',
            '    position: absolute !important;\n',
            '    visibility: hidden;\n',
            '    width: auto;\n',
            '    z-index: 1;\n',
            '}\n',
            '.part_notif_button #appbar-main-guide-notification-container .appbar-guide-notification{\n',
            '    height: 27px !important;\n',
            '}\n',
            '.part_notif_button .show-guide-button-notification #appbar-main-guide-notification-container{\n',
            '    visibility: visible;\n',
            '    opacity: 1;\n',
            '}\n',
            '.part_notif_button #appbar-main-guide-notification-container{\n',
            '    transition: visibility .3s linear .1s, opacity .3s linear .1s;\n',
            '}\n',
            '.part_notif_button #appbar-guide-button-notification-check{\n',
            '    display: none !important;\n',
            '}\n',
            '.part_notif_button .show-guide-button-notification #appbar-guide-button{\n',
            '    opacity: 1 !important;\n',
            '}\n',
        //   end| Improved notification button
        // start| Static normal mode
            '.part_static_size:not(.content-snap-width-skinny-mode) .watch-non-stage-mode .player-width, .part_static_size:not(.content-snap-width-skinny-mode) .watch-non-stage-mode #watch7-content{\n',
            '    width: 640px;\n',
            '}\n',
            '.part_static_size:not(.content-snap-width-skinny-mode) .watch-non-stage-mode .player-height{\n',
            '    height: 390px;\n',
            '}\n',
            '.part_static_size:not(.content-snap-width-skinny-mode).new_player .watch-non-stage-mode .player-height{\n',
            '    height: 360px;\n',
            '}\n',
            '.part_static_size:not(.content-snap-width-skinny-mode) .watch-non-stage-mode #watch7-sidebar{\n',
            '    margin-left: 650px;\n',
            '    top: 0;\n',
            '}\n',
            '.part_static_size:not(.content-snap-width-skinny-mode) .watch.watch-non-stage-mode #content.content-alignment, .part_static_size:not(.content-snap-width-skinny-mode) .watch.watch-non-stage-mode #player.content-alignment{\n',
            '    max-width: 1066px;\n',
            '}\n',
            '.part_static_size:not(.content-snap-width-skinny-mode) .watch-non-stage-mode #watch-appbar-playlist{\n',
            '    left: 650px;\n',
            '}\n',
        //   end| Static normal mode
        // start| Fit player in theater mode
            '.part_fit_theater .watch-stage-mode #player-api, .content-snap-width-skinny-mode #player-api{\n',
            '    height: auto !important;\n',
            '    left: 0 !important;\n',
            '    margin: 0 auto !important;\n',
            '    max-width: 1280px;\n',
            '    position: relative;\n',
            '    right: 0;\n',
            '    width: 100%;\n',
            '}\n',
            '.part_fit_theater .watch-stage-mode #player-api:before, .content-snap-width-skinny-mode #player-api:before{\n',
            '    content: "";\n',
            '    display: block;\n',
            '    padding-top: calc(56.25% + 30px);\n',
            '}\n',
            '.part_fit_theater.new_player .watch-stage-mode #player-api:before, .content-snap-width-skinny-mode.new_player #player-api:before{\n',
            '    padding-top: calc(56.25%);\n',
            '}\n',
            '.part_fit_theater .watch-stage-mode #movie_player, .content-snap-width-skinny-mode #movie_player{\n',
            '    bottom: 0;\n',
            '    left: 0;\n',
            '    position: absolute;\n',
            '    right: 0;\n',
            '    top: 0;\n',
            '}\n',
            '.part_fit_theater .watch-stage-mode #placeholder-player, .content-snap-width-skinny-mode #placeholder-player{\n',
            '    display: none;\n',
            '}\n',
            '.part_fit_theater .watch-stage-mode #watch-appbar-playlist{\n',
            '    top: 10px;\n',
            '}\n',
            '.part_fit_theater .watch-stage-mode #watch-appbar-playlist, .content-snap-width-skinny-mode #watch-appbar-playlist{\n',
            '    transform: none !important;\n',
            '}\n',
            '.part_fit_theater .watch-stage-mode #content, .content-snap-width-skinny-mode #content{\n',
            '    margin-top: 10px;\n',
            '}\n',
        //   end| Fit player in theater mode
        // start| Hide player controls
            '.part_hide_controls.part_fit_theater:not(.new_player) .watch-stage-mode #player-api:before, .part_hide_controls.content-snap-width-skinny-mode:not(.new_player) #player-api:before{\n',
            '    padding-top: calc(56.25%);\n',
            '}\n',
            '.part_hide_controls:not(.content-snap-width-skinny-mode):not(.new_player) .watch-non-stage-mode #watch7-sidebar{\n',
            '    margin-top: -370px;\n',
            '}\n',
            '.part_hide_controls:not(.content-snap-width-skinny-mode):not(.part_fit_theater):not(.new_player) .watch-stage-mode #watch-appbar-playlist{\n',
            '    top: 90px;\n',
            '}\n',
            '@media screen and (min-width:1320px) and (min-height:870px){\n',
            '    .part_hide_controls:not(.content-snap-width-skinny-mode):not(.part_fit_theater):not(.new_player) .watch-stage-mode #watch-appbar-playlist{\n',
            '        top: 330px;\n',
            '    }\n',
            '}\n',
            'html.part_hide_controls:not(.content-snap-width-skinny-mode):not(.new_player) #page.watch-non-stage-mode .player-height{\n',
            '    height: 360px;\n',
            '}\n',
            '@media screen and (min-width:1294px) and (min-height:630px){\n',
            '    html.part_hide_controls:not(.part_static_size):not(.new_player) #page.watch-non-stage-mode .player-height{\n',
            '        height: 480px;\n',
            '    }\n',
            '}\n',
            '@media screen and (min-width:1720px) and (min-height:980px){\n',
            '    html.part_hide_controls:not(.part_static_size):not(.new_player) #page.watch-non-stage-mode .player-height{\n',
            '        height: 720px;\n',
            '    }\n',
            '}\n',
            'html.part_hide_controls:not(.content-snap-width-skinny-mode):not(.new_player) #page.watch-stage-mode .player-height:not(.watch-playlist){\n',
            '    height: 480px;\n',
            '}\n',
            '@media screen and (min-width:1320px) and (min-height:870px){\n',
            '    html.part_hide_controls:not(.content-snap-width-skinny-mode):not(.new_player) #page.watch-stage-mode .player-height:not(.watch-playlist){\n',
            '        height: 720px;\n',
            '    }\n',
            '}\n',
        //   end| Hide player controls
        // start| Particle settings
            '#P-settings{\n',
            '    background: #f1f1f1;\n',
            '    height: 100%;\n',
            '    left: 0;\n',
            '    position: absolute;\n',
            '    right: 0;\n',
            '    z-index: 1000;\n',
            '}\n',
            '#P-container{\n',
            '    margin: 10px auto 0;\n',
            '    max-width: 1262px;\n',
            '}\n',
            '.guide-pinned.show-guide .guide-pinning-enabled #P-container{\n',
            '    padding-left: 230px;\n',
            '}\n',
            '#P-sidebar, #P-content{\n',
            '    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n',
            '    box-sizing: border-box;\n',
            '}\n',
            '#P-sidebar{\n',
            '    background: #1e1e1e;\n',
            '    color: grey;\n',
            '    float: left;\n',
            '    width: 195px;\n',
            '    margin-right: 10px;\n',
            '    padding: 10px 0;\n',
            '}\n',
            '#P-sidebar-list > li{\n',
            '    color: grey;\n',
            '    padding: 0 21px;\n',
            '    cursor: pointer;\n',
            '    font-size: 11px;\n',
            '    line-height: 24px;\n',
            '}\n',
            '#P-sidebar-list > li:hover{\n',
            '    color: #1e1e1e;\n',
            '    background: #f6f6f6;\n',
            '}\n',
            '#P-sidebar-list > li.selected{\n',
            '    color: #FFF;\n',
            '    font-weight: bold;\n',
            '    background-color: #CC181E;\n',
            '}\n',
            '#P-content{\n',
            '    background: #FFF;\n',
            '    color: #666;\n',
            '    overflow: hidden;\n',
            '    padding-bottom: 40px;\n',
            '    padding-left: 15px;\n',
            '    margin-bottom: 10px;\n',
            '}\n',
            '#P-content h2{\n',
            '    color: #333;\n',
            '    float: left;\n',
            '    font-size: 18px;\n',
            '    font-weight: bold;\n',
            '}\n',
            '#P-content h3{\n',
            '    color: #555;\n',
            '    font-size: 14px;\n',
            '    font-weight: bold;\n',
            '    margin: 30px 0 16px;\n',
            '}\n',
            '#P-content br{\n',
            '    clear: both;\n',
            '}\n',
            '#P-content div{\n',
            '    line-height: 26px;\n',
            '    overflow: hidden;\n',
            '}\n',
            '#P-content div:first-child{\n',
            '    overflow: initial;\n',
            '}\n',
            '#P-content label{\n',
            '    line-height: 26px;\n',
            '}\n',
            '#P-content input{\n',
            '    display: none;\n',
            '    margin-left: 25px;\n',
            '}\n',
            '#P-content input + label{\n',
            '    position: relative;\n',
            '    margin-left: 25px;\n',
            '}\n',
            '#P-content input + label:before{\n',
            '    cursor: pointer;\n',
            '    border: 1px solid #c6c6c6;\n',
            '    content: "";\n',
            '    left: -25px;\n',
            '    height: 14px;\n',
            '    position: absolute;\n',
            '    top: 5px;\n',
            '    width: 14px;\n',
            '}\n',
            '#P-content input:checked + label:before{\n',
            '    border: 1px solid #36649c;\n',
            '}\n',
            '#P-content input[type="text"]{\n',
            '    top: 2px;\n',
            '    position: relative;\n',
            '    display: initial;\n',
            '    margin-left: 5px;\n',
            '}\n',
            '#P-content input[type="text"] + label{\n',
            '    float: left;\n',
            '    margin-left: 0;\n',
            '}\n',
            '#P-content input[type="text"] + label:before{\n',
            '    display: none;\n',
            '}\n',
            '#P-content input[type="radio"] + label{\n',
            '    display: inline-block;\n',
            '}\n',
            '#P-content input[type="radio"] + label:before{\n',
            '    border-radius: 50%;\n',
            '    left: -20px;\n',
            '}\n',
            '#P-content input[type="checkbox"] + label{\n',
            '    display: block;\n',
            '}\n',
            '#P-content input[type="checkbox"]:checked + label:before{\n',
            '    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAb1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt6r1GAAAAJXRSTlMAmQmDBYwZUT92AjdnbAtadZRPBBaSfqRBejiODWWJEoJ5Gx0gnoi62QAAAExJREFUCB1NwQUSgDAAA7B2G+7uzv/fCAdDEvyY+HgFXnYV4WHRcXFTPgNo4cJYAUjSDLlkKXCq2bQdZY/LQHKccBMzjRWPzdjxEdAOtVECtAyMKkUAAAAASUVORK5CYII=) no-repeat 2px 1px;\n',
            '}\n',
            '#P-content input[type="radio"]:checked + label:before{\n',
            '    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZma1tx8vAAAAFXRSTlMAdRg22LcS6r1mJyQw/OcJ80UzaRuV38qbAAAANElEQVQIHQWAhxGAIBDA8oDYsABm/1U9gDMBkIsuCeqqusGuqgehqpl2qd4PhPp2gBHzgx9d1gLnmWiDtQAAAABJRU5ErkJggg==) no-repeat 3px;\n',
            '}\n',
            '#P-content select{\n',
            '    background-image: linear-gradient(#FCFCFC, #F8F8F8);\n',
            '    border: 1px solid #d3d3d3;\n',
            '    color: #333 !important;\n',
            '    cursor: pointer;\n',
            '    font-family: arial,sans-serif;\n',
            '    font-size: 11px;\n',
            '    font-weight: bold;\n',
            '    height: 26px;\n',
            '    margin-left: 5px;\n',
            '    padding: 0 2em 0 1em;\n',
            '    text-shadow: none;\n',
            '    -moz-appearance: none;\n',
            '    -webkit-appearance: none;\n',
            '}\n',
            '#P-content select option{\n',
            '    padding: 0 1em;\n',
            '}\n',
            '.P-header{\n',
            '    height: 20px;\n',
            '    margin: 0;\n',
            '    padding: 24px 0 0;\n',
            '}\n',
            '.P-save, .P-reset{\n',
            '    background: #167AC6;\n',
            '    border-color: #167AC6;\n',
            '    border-radius: 2px;\n',
            '    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);\n',
            '    color: #fff;\n',
            '    cursor: pointer;\n',
            '    display: inline-block;\n',
            '    float: right;\n',
            '    font-size: 11px;\n',
            '    font-weight: bold;\n',
            '    height: 28px;\n',
            '    line-height: normal;\n',
            '    margin-right: 20px;\n',
            '    margin-top: -5px;\n',
            '    outline: 0 none;\n',
            '    padding: 0 20px;\n',
            '    vertical-align: middle;\n',
            '    white-space: nowrap;\n',
            '    word-wrap: normal;\n',
            '}\n',
            '.P-reset{\n',
            '    background: #F8F8F8;\n',
            '    border: 1px solid #D3D3D3;\n',
            '    color: #333;\n',
            '}\n',
            '.P-reset:hover{\n',
            '    background: #F0F0F0;\n',
            '    border-color: #C6C6C6;\n',
            '}\n',
            '.P-reset:active{\n',
            '    background: #E9E9E9;\n',
            '}\n',
            '.P-save:hover{\n',
            '    background: #126DB3;\n',
            '}\n',
            '.P-save:active{\n',
            '    background: #095B99;\n',
            '}\n',
            '.P-horz{\n',
            '    border-bottom: 0 none;\n',
            '    border-top: 1px solid #e2e2e2;\n',
            '    height: 0;\n',
            '    margin: 20px 0 0 -15px;\n',
            '    position: relative;\n',
            '}\n',
            '#P-settings select{\n',
            '    color: transparent !important;\n',
            '    text-shadow: 0 0 0 #333;\n',
            '}\n',
            '#P-settings .P-select{\n',
            '    display: inline;\n',
            '    position: relative;\n',
            '}\n',
            '#P-settings .P-select:after{\n',
            '    content: "";\n',
            '    border: 1px solid transparent;\n',
            '    border-width: 4px 4px 0;\n',
            '    border-top-color: #666;\n',
            '    pointer-events: none;\n',
            '    position: absolute;\n',
            '    right: 10px;\n',
            '    top: 50%;\n',
            '}\n',
            '#P-settings option{\n',
            '    color: #000;\n',
            '    text-shadow: none;\n',
            '}\n',
            '#DNT{\n',
            '    position: relative;\n',
            '}\n',
            '#DNT a{\n',
            '    color: #808080;\n',
            '    display: block;\n',
            '}\n',
            '#DNT:hover a{\n',
            '    color: #F1F1F1;\n',
            '}\n',
            '#DNT:hover:after{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAMAAACzQHQ9AAACIlBMVEUBnN4AMIUAMYUAMIUAMIUAMIUAMIUAMIUAMIUAMIUAMIUAMIUAMIUAJH0AVqQAMYYAIXcAMIUAMIUAMYUBMIIBsPEAMIUAMIUAMIUBaq0Bv/wAMIUAMIUAMIQBuPYAMIUAMIUBnd4AMIUAMIUBmNoAMIUAMIUAMIUAMIUBnN4AMIUAMIUBnN4BnN4AMIUBYK4AMIUBnN4BnN4AMIUAHHUBcLoBmdsBm90Bnd8BnN4BnN4AMIUBnd4BnN4BnN4BnN4AL4UBnN4BnN4AMIYANIgAGXMAKn8BoOEBnN4BnN4AMYYAM4cACWUAWqcBnN4BnN4AMYYAJXwAS5sBtfIBpuYBmNoBnN4BnN4AMIUBm90AMYgAMIQAMYYBnd8AMogBpugCHGMBl9oCIGoCIGkAMokAJn0AMocAL4QAGHICElsAM4cAHnYBP5ABpeQBqOgBHGoBoeQBre8Br/ABnt8BmdwBLH8CIGsBXKAAJ3oANIoBu/kBre4Bo+UBJ3UBl9kCGV4CHGQCIWsCIW0AMoYAKoACJ28CL3UBqekBm9wCAEACLnYCIGgCS5ICgcQBJnMCNX0AH3gBg8sBse8CHmUCImwBs/UCKXMCC1QANYgAHHUBj9MBs/ABnN4CDlUBoOAAMYcAOI4BuvsCI24CH2YBr+4CJG4CHWQCADwBa7EBvv8Bp+gBwfwCIGwCJG8AM4oANYsALoMCElwCEFgCE1wCBlECBUxjnIttAAAAWHRSTlMAAADdw7x0I/H4QwGAigB9AdnaFZwAedvV8VYEEbjVDrXuHtLWMe4UlqJH3/1HaP5f9HCH/v7u1tW1TqP6ZSIg4+MZudHBzvrEERMaFFmpAQAAAD/v6upvQTSr7wAAAPRJREFUGBklwE8rBGEcwPHf95mZbf+0KtueNrSyYiZD1m0lLWqzlU2SC+/AXU5egjexlZtVkEpMWBFOW7TJRaXCnEgZjWfWB5IEP11Yb9l38m2B3OuSiCER78uH2MCIgZKOBpAIF4wwqb6DuYvJdWB0SJabpDIfNl4dyJYlbyoGj53W8Dbk0mNm3LbuhSIxtuijZAQVTqV8PgUb9DNbQTuo4tmJTQqMq940pvVL/FpdYbvdaH4G7QhcN0WzykvPU6H9wB3FGrss8thCuxRKTujAzTNwJiJMr9xOAHVOJMIM2uq+z6FEmAfW9oJPGhKhxr8d6fgDKsQ/Heb6AJAAAAAASUVORK5CYII=") no-repeat center / contain;\n',
            '    content: "";\n',
            '    height: 18px;\n',
            '    margin-top: -9px;\n',
            '    position: absolute;\n',
            '    right: 10px;\n',
            '    top: 50%;\n',
            '    width: 15px;\n',
            '}\n',
            '#DNT:hover{\n',
            '    background: linear-gradient(to right, #167AC6 50%, #F6F6F6) !important;\n',
            '}\n',
            '#blacklist{\n',
            '    margin: 10px 15px 0 0;\n',
            '}\n',
            '#blacklist-controls{\n',
            '    margin-bottom: 10px;\n',
            '}\n',
            '#blacklist .blacklist{\n',
            '    border: 1px solid #C6C6C6;\n',
            '    cursor: default;\n',
            '    display: inline-block;\n',
            '    overflow: hidden !important;\n',
            '    padding: 0 10px;\n',
            '    position: relative;\n',
            '}\n',
            '#blacklist .blacklist .close{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARBAMAAADNtor0AAAAJ1BMVEVmZmZzc3N/f3+Kioqqqqqzs7PFxcXOzs7X19fn5+fv7+/39/f///+6PEy9AAAAXElEQVR4XnXO0QnAMAgE0EszhV0lPxmhozhQRhEoEJIWHKpW288IB48DReg/55JXUx3iZFKtJZhaR3CCahanMqwMTlgZ7EjtY91AQVu3I84jy8Tu5PLGeYtn8dkDuUZuK/X5jU8AAAAASUVORK5CYII=") #FFF no-repeat center / contain;\n',
            '    border: 1px solid #C6C6C6;\n',
            '    border-left: none;\n',
            '    border-top: none;\n',
            '    color: #666;\n',
            '    cursor: pointer;\n',
            '    display: none;\n',
            '    height: 17px;\n',
            '    font-size: 10px;\n',
            '    font-weight: bold;\n',
            '    position: absolute;\n',
            '    left: 0;\n',
            '    top: 0;\n',
            '    width: 17px;\n',
            '}\n',
            '#blacklist .blacklist:hover .close{\n',
            '    display: initial;\n',
            '}\n',
            '#blacklist-edit span, #blacklist-save span, #blacklist-close span{\n',
            '    pointer-events: none;\n',
            '}\n',
            '#blacklist.edit .blacklist, #blacklist.edit #blacklist-edit, #blacklist:not(.edit) #blacklist-save, #blacklist:not(.edit) #blacklist-close, #blacklist:not(.edit) #blacklist-edit-list{\n',
            '    display: none;\n',
            '}\n',
            '#blacklist-edit-list{\n',
            '    font-family: Consolas, Lucida Console, monospace;\n',
            '    height: 200px;\n',
            '    width: calc(100% - 10px);\n',
            '}\n',
            '#P{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAAk1BMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEGrSNAAAAMHRSTlMAAOy/fwv6+XxgQOiP5PYXbi/OT7Q135UdMAd3ndNaCY3YDvuaIbc50lV0CpMbojQR/p9JAAAAfElEQVR4XmXMRRLEMBRDQVN4mJkZ//1PNxqnspD9ll0lKc62tNaBif3bqh9b2tl1m6H4nDIi7d7CW+GcTJwrYWgwpC0MyWgcm2TTGayc19ZULRMoGVpvtmy+PLJ9kQRm8kPwdzydIWSXK4DsdgeQVY+nIkuz1xtA9vkC2H44qRgsX16KtQAAAABJRU5ErkJggg==") no-repeat 0 4px;\n',
            '    cursor: pointer;\n',
            '    height: 28px;\n',
            '    margin-right: 10px;\n',
            '    opacity: 0.55;\n',
            '    vertical-align: middle;\n',
            '    width: 19px;\n',
            '}\n',
            '.content-snap-width-skinny-mode #P{\n',
            '    display: none;\n',
            '}\n',
            '#P:hover{\n',
            '    opacity: 0.85;\n',
            '}\n',
            '.P-hide{\n',
            '    display: none;\n',
            '}\n'
        //   end| Particle settings
        ].join('');
    if (userscript) {
        window.GM_getValue = GM_getValue;
        window.GM_setValue = GM_setValue;
        window.GM_xmlhttpRequest = GM_xmlhttpRequest;
    }
    function particle() {
        var api,
            fullscreen,
            channelId = {},
            events    = [],
            isChrome  = typeof window.chrome === 'object',
            defSets   = null,
            parSets,
            lang      = {
                ADV_OPTS              : {
                    en     : 'Advanced options',
                    'pt-PT': 'Opções avançadas'
                },
                SUB_PLST              : {
                    en     : 'Play recent uploads',
                    'pt-PT': 'Reproduzir vídeos recentes'
                },
                GEN_SDBR_ON           : {
                    en     : 'Enable sidebar mode',
                    'pt-PT': 'Activar modo barra lateral'
                },
                SDBR_OPEN             : {
                    en     : 'Open in sidebar',
                    'pt-PT': 'Abrir barra lateral'
                },
                BLCK_ADD              : {
                    en     : 'Add to blacklist',
                    'pt-PT': 'Adicionar à lista negra'
                },
                BLCK_EDIT             : {
                    en     : 'Edit',
                    'pt-PT': 'Editar'
                },
                BLCK_SAVE             : {
                    en     : 'Save',
                    'pt-PT': 'Guardar'
                },
                BLCK_CLSE             : {
                    en     : 'Close',
                    'pt-PT': 'Fechar'
                },
                CNSL_CNSL             : {
                    en     : 'Console',
                    'pt-PT': 'Consola'
                },
                CNSL_AP               : {
                    en     : 'Autoplay',
                    'pt-PT': 'Início automático'
                },
                CNSL_RPT              : {
                    en     : 'Repeat video',
                    'pt-PT': 'Repetir vídeo'
                },
                CNSL_SKMP             : {
                    en     : 'Seek map',
                    'pt-PT': 'Mapa de procura'
                },
                CNSL_SKMP_OFF         : {
                    en     : 'No thumbs found',
                    'pt-PT': 'Não existem imagens'
                },
                CNSL_SKMP_SMAL        : {
                    en     : 'SMALL',
                    'pt-PT': 'PEQUENO'
                },
                CNSL_SKMP_MED         : {
                    en     : 'MEDIUM',
                    'pt-PT': 'MÉDIO'
                },
                CNSL_SKMP_LRGE        : {
                    en     : 'LARGE',
                    'pt-PT': 'GRANDE'
                },
                CNSL_SVTH             : {
                    en     : 'Open thumbnail',
                    'pt-PT': 'Abrir imagem de fundo'
                },
                CNSL_SS               : {
                    en     : 'Take screenshot',
                    'pt-PT': 'Capturar imagem'
                },
                CNSL_SS_CLS           : {
                    en     : 'CLOSE',
                    'pt-PT': 'FECHAR'
                },
                CNSL_SDBR             : {
                    en     : 'Sidebar mode',
                    'pt-PT': 'Modo barra lateral'
                },
                CNSL_FLBR             : {
                    en     : 'Fullbrowser mode',
                    'pt-PT': 'Modo navegador inteiro'
                },
                PLST_AP               : {
                    en     : 'Autoplay',
                    'pt-PT': 'Início automático'
                },
                PLST_RVRS             : {
                    en     : 'Reverse',
                    'pt-PT': 'Inverter'
                },
                SHOW_CMTS             : {
                    en     : 'Show comments',
                    'pt-PT': 'Mostrar comentários'
                },
                HIDE_CMTS             : {
                    en     : 'Hide comments',
                    'pt-PT': 'Esconder comentários'
                },
                GLB_RSET              : {
                    en     : 'Reset',
                    'pt-PT': 'Repor'
                },
                GLB_SVE               : {
                    en     : 'Save',
                    'pt-PT': 'Guardar'
                },
                GEN                   : {
                    en     : 'General',
                    'pt-PT': 'Geral'
                },
                VID                   : {
                    en     : 'Video',
                    'pt-PT': 'Video'
                },
                CHN                   : {
                    en     : 'Channels',
                    'pt-PT': 'Canais'
                },
                BLK                   : {
                    en     : 'Blacklist',
                    'pt-PT': 'Lista negra'
                },
                ABT                   : {
                    en     : 'About',
                    'pt-PT': 'Sobre'
                },
                DNT                   : {
                    en     : 'Donate',
                    'pt-PT': 'Doação'
                },
                GEN_TTL               : {
                    en     : 'General settings',
                    'pt-PT': 'Definições gerais'
                },
                GEN_GEN               : {
                    en     : 'General',
                    'pt-PT': 'Geral'
                },
                GEN_LYT               : {
                    en     : 'Layout',
                    'pt-PT': 'Aparência'
                },
                GEN_DSBL_ADS          : {
                    en     : 'Disable advertisements outside the video page',
                    'pt-PT': 'Desactivar publicidades fora da página de vídeo'
                },
                GEN_YT_LOGO_LINK      : {
                    en     : 'YouTube logo redirects to subscriptions',
                    'pt-PT': 'Logotipo do Youtube redirecciona para as subscrições'
                },
                GEN_REM_APUN          : {
                    en     : 'Remove autoplay up next',
                    'pt-PT': 'Remover reprodução automática do vídeo a seguir'
                },
                GEN_SPF_OFF           : {
                    en     : 'Disable SPF',
                    'pt-PT': 'Desactivar SPF'
                },
                GEN_HIDE_FTR          : {
                    en     : 'Hide footer',
                    'pt-PT': 'Esconder rodapé'
                },
                GEN_BLUE_GLOW         : {
                    en     : 'Remove blue glow around clicked buttons',
                    'pt-PT': 'Retirar brilho azul em torno dos botões clicados'
                },
                GEN_HDE_RECM_SDBR     : {
                    en     : 'Hide recommended channels sidebar',
                    'pt-PT': 'Esconder barra lateral de canais recomendados'
                },
                GEN_HDE_SRCH_SDBR     : {
                    en     : 'Hide search results sidebar',
                    'pt-PT': 'Esconder barra lateral nos resultados de pesquisa'
                },
                GEN_HDE_CHN_SDBR      : {
                    en     : 'Hide channel sidebar',
                    'pt-PT': 'Esconder barra lateral dos canais'
                },
                GEN_CMPT_TTLS         : {
                    en     : 'Compact titles in feeds',
                    'pt-PT': 'Títulos compactos nas listas'
                },
                GEN_DSB_HVRC          : {
                    en     : 'Disable hovercards',
                    'pt-PT': 'Desactivar hovercards'
                },
                GEN_BTTR_NTF          : {
                    en     : 'Improved blue notification box',
                    'pt-PT': 'Caixa de notificação azul melhorada'
                },
                GEN_GRID_SUBS         : {
                    en     : 'Grid layout in subscriptions',
                    'pt-PT': 'Subscrições em formato grelha'
                },
                GEN_GRID_SRCH         : {
                    en     : 'Grid layout in search results',
                    'pt-PT': 'Resultados de pesquisa em formato grelha'
                },
                VID_TTL               : {
                    en     : 'Video settings',
                    'pt-PT': 'Definições de vídeo'
                },
                VID_PLR               : {
                    en     : 'Player settings',
                    'pt-PT': 'Definições do reproductor'
                },
                VID_PLR_LYT           : {
                    en     : 'Player layout',
                    'pt-PT': 'Aspecto do reproductor'
                },
                VID_DFLT_QLTY         : {
                    en     : 'Default video quality:',
                    'pt-PT': 'Qualidade de vídeo padrão:'
                },
                VID_DFLT_QLTY_AUTO    : {
                    en     : 'Auto',
                    'pt-PT': 'Auto'
                },
                VID_DFLT_QLTY_TNY     : {
                    en: '144p'
                },
                VID_DFLT_QLTY_SML     : {
                    en: '240p'
                },
                VID_DFLT_QLTY_MDM     : {
                    en: '360p'
                },
                VID_DFLT_QLTY_LRG     : {
                    en: '480p'
                },
                VID_DFLT_QLTY_720     : {
                    en: '720p'
                },
                VID_DFLT_QLTY_1080    : {
                    en: '1080p'
                },
                VID_DFLT_QLTY_1440    : {
                    en: '1440p'
                },
                VID_DFLT_QLTY_ORIG    : {
                    en: '2160p'
                },
                VID_PLR_ALVIS         : {
                    en     : 'Always visible',
                    'pt-PT': 'Sempre visível'
                },
                VID_PLR_ATPL          : {
                    en     : 'Autoplay videos',
                    'pt-PT': 'Iniciar vídeos automáticamente'
                },
                VID_PROG_BAR_CLR      : {
                    en     : 'Progress bar color:',
                    'pt-PT': 'Cor da barra de progresso:'
                },
                VID_PROG_BAR_CLR_RED  : {
                    en     : 'Red',
                    'pt-PT': 'Vermelha'
                },
                VID_PROG_BAR_CLR_WHT  : {
                    en     : 'White',
                    'pt-PT': 'Branca'
                },
                VID_CTRL_BAR_CLR      : {
                    en     : 'Control bar color:',
                    'pt-PT': 'Cor da barra de controlos:'
                },
                VID_CTRL_BAR_CLR_DARK : {
                    en     : 'Dark',
                    'pt-PT': 'Escura'
                },
                VID_CTRL_BAR_CLR_LGHT : {
                    en     : 'Light',
                    'pt-PT': 'Clara'
                },
                VID_LAYT              : {
                    en     : 'Layout',
                    'pt-PT': 'Aparência'
                },
                VID_VID_CNT           : {
                    en     : 'Show link with number of uploaded videos',
                    'pt-PT': 'Mostrar link com número de vídeos carregados'
                },
                VID_POST_TIME         : {
                    en     : 'Show how long the video has been published',
                    'pt-PT': 'Mostrar há quanto tempo o vídeo foi publicado'
                },
                VID_HIDE_DETLS        : {
                    en     : 'Hide video details',
                    'pt-PT': 'Esconder detalhes do vídeo'
                },
                VID_HIDE_COMS         : {
                    en     : 'Comment section',
                    'pt-PT': 'Secção de comentários'
                },
                VID_HIDE_COMS_SHOW    : {
                    en     : 'Show',
                    'pt-PT': 'Mostrar'
                },
                VID_HIDE_COMS_HIDE    : {
                    en     : 'Hide',
                    'pt-PT': 'Esconder'
                },
                VID_HIDE_COMS_REM     : {
                    en     : 'Remove',
                    'pt-PT': 'Remover'
                },
                VID_END_SHRE          : {
                    en     : 'Disable share panel when video ends',
                    'pt-PT': 'Desactivar painel de partilha quando o video acaba'
                },
                VID_PLST              : {
                    en     : 'Playlists',
                    'pt-PT': 'Listas'
                },
                VID_PLST_SEP          : {
                    en     : 'Separate playlist from player',
                    'pt-PT': 'Separar lista de reprodução do reproductor'
                },
                VID_PLST_ATPL         : {
                    en     : 'Enable playlist autoplay control',
                    'pt-PT': 'Activar controlo de início automático das listas'
                },
                VID_PLST_RVRS         : {
                    en     : 'Enable reverse playlist control',
                    'pt-PT': 'Activar controlo de inversão das listas'
                },
                VID_PLR_SIZE_MEM      : {
                    en     : 'Memorize player mode',
                    'pt-PT': 'Memorizar tamanho do reproductor'
                },
                VID_VOL_WHEEL         : {
                    en     : 'Change volume with mouse wheel',
                    'pt-PT': 'Alterar nível de som com a roda do rato'
                },
                VID_PLR_VOL_MEM       : {
                    en     : 'Memorize audio volume',
                    'pt-PT': 'Memorizar volume de audio'
                },
                VID_PLR_ADS           : {
                    en     : 'Disable advertisements in the video page',
                    'pt-PT': 'Desactivar publicidades na página de vídeo'
                },
                VID_SUB_ADS           : {
                    en     : 'Enable advertisements only in videos from subscribed channels',
                    'pt-PT': 'Activar publicidades só para vídeos de canais subscritos'
                },
                VID_PLR_ANTS          : {
                    en     : 'Disable annotations',
                    'pt-PT': 'Desactivar notas'
                },
                VID_PLR_DASH          : {
                    en     : 'Disable DASH playback',
                    'pt-PT': 'Desactivar reprodução DASH'
                },
                VID_PLR_CC            : {
                    en     : 'Disable subtitles',
                    'pt-PT': 'Desactivar legendas'
                },
                VID_PLR_CTRL_VIS      : {
                    en     : 'Hide player controls',
                    'pt-PT': 'Esconder controlos do reproductor'
                },
                VID_PLR_FIT           : {
                    en     : 'Fit to page in theater mode',
                    'pt-PT': 'Ajustar na página no modo cinema'
                },
                VID_PLR_FIT_WDTH      : {
                    en     : 'Fit to page max width:',
                    'pt-PT': 'Largura máxima do ajuste na página:'
                },
                VID_PLR_DYN_SIZE      : {
                    en     : 'Disable dynamic player size in default view',
                    'pt-PT': 'Desactivar tamanho dinâmico do reproductor na vista predefinida'
                },
                VID_DESC_SHRT         : {
                    en     : 'Short video description buttons',
                    'pt-PT': 'Botões curtos na descrição do vídeo'
                },
                VID_TTL_CMPT          : {
                    en     : 'Compact title in video description',
                    'pt-PT': 'Título compacto na descrição do vídeo'
                },
                VID_SDBR_ALGN         : {
                    en     : 'Sidebar mode alignment',
                    'pt-PT': 'Alinhar modo barra lateral'
                },
                VID_SDBR_ALGN_NONE    : {
                    en     : 'None',
                    'pt-PT': 'Nenhum'
                },
                VID_SDBR_ALGN_LEFT    : {
                    en     : 'Left',
                    'pt-PT': 'Esquerda'
                },
                VID_SDBR_ALGN_RIGHT   : {
                    en     : 'Right',
                    'pt-PT': 'Direita'
                },
                VID_LAYT_AUTO_PNL     : {
                    en     : 'Auto expand video description',
                    'pt-PT': 'Automáticamente mostrar mais na descrição do vídeo'
                },
                GEN_CHN_DFLT_PAGE     : {
                    en     : 'Default channel page:',
                    'pt-PT': 'Página de canal predefinida:'
                },
                GEN_CHN_DFLT_PAGE_DFLT: {
                    en     : 'Default',
                    'pt-PT': 'Padrão'
                },
                GEN_CHN_DFLT_PAGE_VID : {
                    en     : 'Videos',
                    'pt-PT': 'Vídeos'
                },
                GEN_CHN_DFLT_PAGE_PL  : {
                    en     : 'Playlists',
                    'pt-PT': 'Listas de reprodução'
                },
                GEN_CHN_DFLT_PAGE_CHN : {
                    en     : 'Channels',
                    'pt-PT': 'Canais'
                },
                GEN_CHN_DFLT_PAGE_DISC: {
                    en     : 'Discussion',
                    'pt-PT': 'Discussão'
                },
                GEN_CHN_DFLT_PAGE_ABT : {
                    en     : 'About',
                    'pt-PT': 'Acerca de'
                },
                BLK_TTL               : {
                    en     : 'Blacklist settings',
                    'pt-PT': 'Definições da lista negra'
                },
                BLK_BLK               : {
                    en     : 'Blacklist',
                    'pt-PT': 'Lista negra'
                },
                BLK_ON                : {
                    en     : 'Enable blacklist',
                    'pt-PT': 'Activar lista negra'
                },
                ABT_TTL               : {
                    en     : 'Information and useful links',
                    'pt-PT': 'Informação e ligações úteis'
                },
                ABT_THKS              : {
                    en     : 'Thanks to:',
                    'pt-PT': 'Agradecimentos a:'
                },
                ABT_THKS_YEPPHA       : {
                    en     : ', who\'s work inspired the creation of this project, without whom none of this would exist today.',
                    'pt-PT': ', cujo trabalho inspirou a criação deste projecto, sem ele nada disto existiria hoje.'
                },
                ABT_THKS_USERSCRIPT   : {
                    en     : ' for making the task of developing and shipping third party software incredibly easier.',
                    'pt-PT': ' por tornarem o processo de produção e publicação de software bastante fácil.'
                },
                ABT_THKS_STACKOV      : {
                    en     : ' for all of its priceless information which greatly contributes for software development.',
                    'pt-PT': ' por toda a informação valiosa que contém e que contribui bastante para a criação de software.'
                },
                ABT_INFO              : {
                    en     : 'Official pages',
                    'pt-PT': 'Páginas oficiais'
                },
                ABT_LNK_GHB           : {
                    en: 'GitHub'
                },
                ABT_LNK_GRFK          : {
                    en: 'Greasy Fork'
                },
                ABT_LNK_OPNU          : {
                    en: 'OpenUserJS'
                },
                ABT_PRBL              : {
                    en     : 'Report a problem',
                    'pt-PT': 'Reportar problema'
                },
                ABT_LNK_PRBL          : {
                    en     : 'Click here for instructions',
                    'pt-PT': 'Clique aqui para instruções'
                }
            };
        if (!parSets || Object.keys(parSets).length < 1) {
            parSets = defSets;
        }
        function string2HTML(string) {
            var html = new window.DOMParser();
            return html.parseFromString(string, 'text/html');
        }
        function set(setting, newValue) {
            var object = {};
            if (newValue !== undefined) {
                parSets[setting] = newValue;
                object[setting] = newValue;
                window.postMessage({set: object}, '*');
            } else {
                delete parSets[setting];
                window.postMessage({replace: parSets}, '*');
            }
        }
        function handleEvents(target, event, call, capture, type) {
            var name = call.name;
            capture = !!capture;
            if (target.events && target.events[event] && target.events[event][name]) {
                target.removeEventListener(event, target.events[event][name], capture);
                delete target.events[event][name];
            }
            if (!type) {
                target.addEventListener(event, call, capture);
                target.events = target.events || {};
                target.events[event] = target.events[event] || {};
                target.events[event][name] = call;
                if ((String(target)).split('HTML').length > 1) {
                    events.push(target);
                }
            }
        }
        function userLang(label) {
            var ytlang = (window.yt && window.yt.config_ && window.yt.config_.FEEDBACK_LOCALE_LANGUAGE) || 'en';
            if (lang[label][ytlang]) {
                return lang[label][ytlang];
            }
            return lang[label].en;
        }
        function clearOrphans() {
            var i = events.length;
            while (i) {
                i -= 1;
                if (!document.contains(events[i])) {
                    events[i].remove();
                    events.splice(i, 1);
                }
            }
        }
        function localXHR(details) {
            var request = new XMLHttpRequest();
            request.addEventListener('load', details.call);
            request.open(details.method, details.url, true);
            request.send();
        }
        function timeConv(time) {
            var days    = time / 86400,
                hours   = (time % 86400) / 3600,
                minutes = (time % 3600) / 60,
                seconds = (time % 3600) % 60;
            function zero(trim) {
                return ('0' + Math.floor(trim)).slice(-2);
            }
            time = zero(days) + ':' + zero(hours) + ':' + zero(minutes) + ':' + zero(seconds);
            time = time.replace(/^0(0:(0(0:(0)?)?)?)?/, '');
            return time;
        }
        function customStyles() {
            var classes,
                plrApi   = document.getElementById('player-api'),
                commSect = document.getElementById('watch-discussion'),
                sidebar  = document.getElementsByClassName('branded-page-v2-secondary-col')[0],
                adverts  = parSets.GEN_DSBL_ADS && (document.getElementById('header') || document.getElementById('feed-pyv-container') || document.getElementsByClassName('pyv-afc-ads-container')[0] || document.getElementsByClassName('ad-div')[0] || document.querySelector('.video-list-item:not(.related-list-item)')),
                setsList = {
                    'GEN_DSBL_ADS'    : 'part_no_ads',
                    'GEN_BLUE_GLOW'   : 'part_dsbl_glow',
                    'GEN_HIDE_FTR'    : 'part_hide_footer',
                    'GEN_BTTR_NTF'    : 'part_notif_button',
                    'GEN_GRID_SUBS'   : 'part_grid_subs',
                    'GEN_GRID_SRCH'   : 'part_grid_search',
                    'GEN_CMPT_TTLS'   : 'part_compact_titles',
                    'VID_PLR_FIT'     : 'part_fit_theater',
                    'VID_PLR_DYN_SIZE': 'part_static_size',
                    'VID_HIDE_DETLS'  : 'part_hide_details',
                    'VID_TTL_CMPT'    : 'part_compact_title',
                    'VID_PLR_CTRL_VIS': 'part_hide_controls',
                    'VID_PLST_SEP'    : 'part_playlist_spacer',
                    'VID_DESC_SHRT'   : 'part_labelless_buttons'
                };
            while (adverts) {
                adverts.remove();
                adverts = document.getElementById('header') || document.getElementById('feed-pyv-container') || document.getElementsByClassName('pyv-afc-ads-container')[0] || document.getElementsByClassName('ad-div')[0] || document.querySelector('.video-list-item:not(.related-list-item)');
            }
            if ((window.location.pathname === '/results' && sidebar && sidebar.querySelectorAll('*').length < 10) || (sidebar && ((parSets.GEN_HDE_RECM_SDBR && window.location.pathname === '/feed/subscriptions') || (parSets.GEN_HDE_SRCH_SDBR && window.location.pathname === '/results') || (parSets.GEN_HDE_CHN_SDBR && window.location.href.split(/\/(channel|user|c)\//).length > 1)))) {
                sidebar.remove();
            }
            if (window.location.pathname === '/watch' && parSets.VID_HIDE_COMS > 1 && commSect) {
                commSect.remove();
            }
            if (parSets.VID_HIDE_COMS === '1') {
                document.documentElement.classList.add('part_hide_comments');
            } else if (parSets.VID_HIDE_COMS !== '1') {
                document.documentElement.classList.remove('part_hide_comments');
            }
            if (parSets.VID_PLR_FIT && plrApi && (!!plrApi.style.maxWidth || plrApi.style.maxWidth !== parSets.VID_PLR_FIT_WDTH)) {
                plrApi.style.maxWidth = parSets.VID_PLR_FIT_WDTH || '1280px';
            }
            for (classes in setsList) {
                if (setsList.hasOwnProperty(classes)) {
                    if (parSets[classes]) {
                        document.documentElement.classList.add(setsList[classes]);
                    } else {
                        document.documentElement.classList.remove(setsList[classes]);
                    }
                }
            }
            classes = setsList = commSect = sidebar = adverts = null;
        }
        function settingsMenu() {
            var pContent,
                pContainer,
                buttonNotif,
                buttonsSection,
                settingsButton;
            if (document.readyState === 'complete') {
                return;
            }
            function template() {
                var custom = function () {
                        var button = '',
                            list   = parSets && parSets.blacklist;
                        function buildList(ytid) {
                            button += '<div class="blacklist" data-ytid="' + ytid + '"><button class="close"></button>' + list[ytid] + '</div>\n';
                        }
                        if (list && Object.keys(list).length > 0) {
                            Object.keys(list).forEach(buildList);
                        }
                        return button;
                    },
                    htEl   = {
                        title : function (content, tag) {
                            return '<' + tag + '>' + userLang(content) + '</' + tag + '>\n';
                        },
                        select: function (id, list) {
                            var select = '<label for="' + id + '">' + userLang(id) + '</label>\n' +
                                '<div class="P-select"><select id="' + id + '">\n';
                            function keysIterator(keys) {
                                select += '<option';
                                if (parSets && parSets[id] === list[keys]) {
                                    select += ' selected="true"';
                                }
                                select += ' value="' + list[keys] + '">' + userLang(keys) + '</option>\n';
                            }
                            Object.keys(list).forEach(keysIterator);
                            select += '</select></div>\n';
                            return select;
                        },
                        radio : function (name, list) {
                            var radio = '<label>' + userLang(name) + '</label>\n';
                            function keysIterator(keys) {
                                radio += '<input id="' + keys + '" name="' + name + '" value="' + list[keys] + '" type="radio"';
                                if (parSets && parSets[name] === list[keys]) {
                                    radio += ' checked="true"';
                                }
                                radio += '>\n<label for="' + keys + '">' + userLang(keys) + '</label>';
                            }
                            Object.keys(list).forEach(keysIterator);
                            return radio;
                        },
                        input : function (id, type, placeholder, size) {
                            var input = '<input id="' + id + '" type="' + type + '"';
                            if (placeholder) {
                                input += ' placeholder="' + placeholder + '" size="' + size + '"';
                                if (typeof parSets && parSets[id] === 'string') {
                                    input += ' value="' + parSets && parSets[id] + '"';
                                }
                            } else if (parSets && parSets[id] === true) {
                                input += ' checked="true"';
                            }
                            input += '>\n<label for="' + id + '">' + userLang(id) + '</label>\n';
                            return input;
                        }
                    },
                    menus  = {
                        setMenu: [
                            '<div id="P-settings">\n',
                            '    <div id="P-container">\n',
                            '        <div id="P-sidebar">\n',
                            '            <ul id="P-sidebar-list">\n',
                            '                <li id="GEN" class="selected">' + userLang('GEN') + '</li>\n',
                            '                <li id="VID">' + userLang('VID') + '</li>\n',
                            '                <li id="BLK">' + userLang('BLK') + '</li>\n',
                            '                <li id="ABT">' + userLang('ABT') + '</li>\n',
                            '                <li id="DNT"><a title="PayPal" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UMVQJJFG4BFHW">' + userLang('DNT') + '</a></li>\n',
                            '            </ul>\n',
                            '        </div>\n',
                            '    </div>\n',
                            '</div>\n'
                        ].join(''),
                        GEN    : [
                            '<div id="P-content">\n',
                            '    <div class="P-header">\n',
                            '        <button class="P-save">' + userLang('GLB_SVE') + '</button>\n',
                            '        <button class="P-reset">' + userLang('GLB_RSET') + '</button>\n',
                            htEl.title('GEN_TTL', 'h2'),
                            '    </div>\n',
                            '    <hr class="P-horz">\n',
                            htEl.title('GEN_GEN', 'h3'),
                            htEl.input('GEN_DSBL_ADS', 'checkbox'),
                            htEl.input('GEN_YT_LOGO_LINK', 'checkbox'),
                            htEl.input('GEN_SDBR_ON', 'checkbox'),
                            htEl.input('GEN_REM_APUN', 'checkbox'),
                            htEl.input('GEN_SPF_OFF', 'checkbox'),
                            htEl.select('GEN_CHN_DFLT_PAGE', {
                                'GEN_CHN_DFLT_PAGE_DFLT': 'default',
                                'GEN_CHN_DFLT_PAGE_VID': 'videos',
                                'GEN_CHN_DFLT_PAGE_PL': 'playlists',
                                'GEN_CHN_DFLT_PAGE_CHN': 'channels',
                                'GEN_CHN_DFLT_PAGE_DISC': 'discussion',
                                'GEN_CHN_DFLT_PAGE_ABT': 'about'
                            }),
                            htEl.title('GEN_LYT', 'h3'),
                            htEl.input('GEN_GRID_SUBS', 'checkbox'),
                            htEl.input('GEN_GRID_SRCH', 'checkbox'),
                            htEl.input('GEN_BTTR_NTF', 'checkbox'),
                            htEl.input('GEN_DSB_HVRC', 'checkbox'),
                            htEl.input('GEN_CMPT_TTLS', 'checkbox'),
                            htEl.input('GEN_BLUE_GLOW', 'checkbox'),
                            htEl.input('GEN_HIDE_FTR', 'checkbox'),
                            htEl.input('GEN_HDE_RECM_SDBR', 'checkbox'),
                            htEl.input('GEN_HDE_SRCH_SDBR', 'checkbox'),
                            htEl.input('GEN_HDE_CHN_SDBR', 'checkbox'),
                            '</div>\n'
                        ].join(''),
                        VID    : [
                            '<div id="P-content">\n',
                            '    <div class="P-header">\n',
                            '        <button class="P-save">' + userLang('GLB_SVE') + '</button>\n',
                            '        <button class="P-reset">' + userLang('GLB_RSET') + '</button>\n',
                            htEl.title('VID_TTL', 'h2'),
                            '    </div>\n',
                            '    <hr class="P-horz">\n',
                            htEl.title('VID_PLR', 'h3'),
                            htEl.input('VID_PLR_ADS', 'checkbox'),
                            htEl.input('VID_SUB_ADS', 'checkbox'),
                            htEl.input('VID_PLR_ALVIS', 'checkbox'),
                            htEl.input('VID_PLR_ATPL', 'checkbox'),
                            htEl.input('VID_PLR_CC', 'checkbox'),
                            htEl.input('VID_PLR_ANTS', 'checkbox'),
                            htEl.input('VID_END_SHRE', 'checkbox'),
                            htEl.input('VID_PLR_VOL_MEM', 'checkbox'),
                            htEl.input('VID_PLR_SIZE_MEM', 'checkbox'),
                            htEl.input('VID_VOL_WHEEL', 'checkbox'),
                            htEl.input('VID_PLR_DASH', 'checkbox'),
                            htEl.select('VID_DFLT_QLTY', {
                                'VID_DFLT_QLTY_AUTO': 'auto',
                                'VID_DFLT_QLTY_ORIG': 'highres',
                                'VID_DFLT_QLTY_1440': 'hd1440',
                                'VID_DFLT_QLTY_1080': 'hd1080',
                                'VID_DFLT_QLTY_720': 'hd720',
                                'VID_DFLT_QLTY_LRG': 'large',
                                'VID_DFLT_QLTY_MDM': 'medium',
                                'VID_DFLT_QLTY_SML': 'small',
                                'VID_DFLT_QLTY_TNY': 'tiny'
                            }),
                            '    <br>',
                            htEl.title('VID_PLR_LYT', 'h3'),
                            htEl.input('VID_PLR_CTRL_VIS', 'checkbox'),
                            htEl.input('VID_PLR_DYN_SIZE', 'checkbox'),
                            htEl.input('VID_PLR_FIT', 'checkbox'),
                            htEl.input('VID_PLR_FIT_WDTH', 'text', '1280px', 6),
                            '    <br>',
                            htEl.radio('VID_PROG_BAR_CLR', {
                                'VID_PROG_BAR_CLR_RED': 'red',
                                'VID_PROG_BAR_CLR_WHT': 'white'
                            }),
                            '    <br>',
                            htEl.radio('VID_CTRL_BAR_CLR', {
                                'VID_CTRL_BAR_CLR_DARK': 'dark',
                                'VID_CTRL_BAR_CLR_LGHT': 'light'
                            }),
                            '    <br>',
                            htEl.title('VID_PLST', 'h3'),
                            htEl.input('VID_PLST_SEP', 'checkbox'),
                            htEl.input('VID_PLST_ATPL', 'checkbox'),
                            htEl.input('VID_PLST_RVRS', 'checkbox'),
                            htEl.title('VID_LAYT', 'h3'),
                            htEl.select('VID_HIDE_COMS', {
                                'VID_HIDE_COMS_SHOW': '0',
                                'VID_HIDE_COMS_HIDE': '1',
                                'VID_HIDE_COMS_REM': '2'
                            }),
                            '    <br>',
                            htEl.select('VID_SDBR_ALGN', {
                                'VID_SDBR_ALGN_NONE': '0',
                                'VID_SDBR_ALGN_LEFT': '1',
                                'VID_SDBR_ALGN_RIGHT': '2'
                            }),
                            '    <br>',
                            htEl.input('VID_TTL_CMPT', 'checkbox'),
                            htEl.input('VID_DESC_SHRT', 'checkbox'),
                            htEl.input('VID_VID_CNT', 'checkbox'),
                            htEl.input('VID_POST_TIME', 'checkbox'),
                            htEl.input('VID_HIDE_DETLS', 'checkbox'),
                            htEl.input('VID_LAYT_AUTO_PNL', 'checkbox'),
                            '</div>\n'
                        ].join(''),
                        BLK    : [
                            '<div id="P-content">\n',
                            '    <div class="P-header">\n',
                            '        <button class="P-save">' + userLang('GLB_SVE') + '</button>\n',
                            '        <button class="P-reset">' + userLang('GLB_RSET') + '</button>\n',
                            htEl.title('BLK_TTL', 'h2'),
                            '    </div>\n',
                            '    <hr class="P-horz">\n',
                            htEl.title('BLK_BLK', 'h3'),
                            htEl.input('BLK_ON', 'checkbox'),
                            '    <div id="blacklist">\n',
                            '        <div id="blacklist-controls">\n',
                            '            <button id="blacklist-edit" class="yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default">\n',
                            '                <span class="yt-uix-button-content">' + userLang('BLCK_EDIT') + '</span>\n',
                            '            </button>\n',
                            '            <button id="blacklist-save" class="yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default">\n',
                            '                <span class="yt-uix-button-content">' + userLang('BLCK_SAVE') + '</span>\n',
                            '            </button>\n',
                            '            <button id="blacklist-close" class="yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default">\n',
                            '                <span class="yt-uix-button-content">' + userLang('BLCK_CLSE') + '</span>\n',
                            '            </button>\n',
                            '        </div>\n',
                            '        ' + custom() + '\n',
                            '        <textarea id="blacklist-edit-list"></textarea>\n',
                            '    </div>\n',
                            '    <br>',
                            '</div>\n'
                        ].join(''),
                        ABT    : [
                            '<div id="P-content">\n',
                            '    <div class="P-header">\n',
                            htEl.title('ABT_TTL', 'h2'),
                            '    </div>\n',
                            '    <hr class="P-horz">\n',
                            htEl.title('ABT_THKS', 'h3'),
                            '    <div>\n',
                            '        <a target="_blank" href="https://github.com/YePpHa">Jeppe Rune Mortensen</a>' + userLang('ABT_THKS_YEPPHA') + '\n',
                            '    </div>\n',
                            '    <div>\n',
                            '        <a target="_blank" href="http://www.greasespot.net/">Greasemonkey</a> + <a href="http://tampermonkey.net/">Tampermonkey</a>' + userLang('ABT_THKS_USERSCRIPT') + '\n',
                            '    </div>\n',
                            '    <div>\n',
                            '        <a target="_blank" href="http://stackoverflow.com/">Stack Overflow</a>' + userLang('ABT_THKS_STACKOV') + '\n',
                            '    </div>\n',
                            htEl.title('ABT_INFO', 'h3'),
                            '    <div>\n',
                            '        <a target="_blank" href="https://github.com/ParticleCore/Particle/">GitHub</a>\n',
                            '    </div>\n',
                            '    <div>\n',
                            '        <a target="_blank" href="https://greasyfork.org/en/users/8223-particlecore">Greasy Fork</a>\n',
                            '    </div>\n',
                            '    <div>\n',
                            '        <a target="_blank" href="http://openuserjs.org/scripts/ParticleCore/">OpenUserJS</a>\n',
                            '    </div>\n',
                            htEl.title('ABT_PRBL', 'h3'),
                            '    <div>\n',
                            '        <a target="_blank" href="https://github.com/ParticleCore/Particle/wiki/Report-a-problem">' + userLang('ABT_LNK_PRBL') + '</a>\n',
                            '    </div>\n',
                            '</div>\n'
                        ].join('')
                    };
                return menus;
            }
            function navigateSettings(event) {
                function manageBlackList(target) {
                    function removeEmptyLines(string) {
                        return (/\S/).test(string);
                    }
                    if (target.id === 'blacklist-edit') {
                        document.getElementById('blacklist').classList.add('edit');
                        document.getElementById('blacklist-edit-list').value = JSON.stringify(parSets.blacklist).replace(/":"/g, '": "').replace(/","/g, '"\n"').replace('{"', '"').replace('"}', '"').replace('{}', '');
                    } else if (target.id === 'blacklist-save') {
                        set('blacklist', JSON.parse('{' + document.getElementById('blacklist-edit-list').value.split('\n').filter(removeEmptyLines).join(',') + '}'));
                    } else if (target.id === 'blacklist-close') {
                        document.getElementById('BLK').click();
                    }
                }
                function remBlackList() {
                    var newKey = parSets.blacklist;
                    delete newKey[event.target.parentNode.getAttribute('data-ytid')];
                    event.target.parentNode.remove();
                    set('blacklist', newKey);
                    newKey = null;
                }
                function saveSettings(salt) {
                    var value,
                        notification = document.getElementById('appbar-main-guide-notification-container'),
                        navId        = document.getElementsByClassName('selected')[0].id,
                        savedSets    = parSets,
                        userSets     = document.getElementById('P-content').querySelectorAll('[id^="' + navId + '"]'),
                        length       = userSets.length;
                    function hideNotif() {
                        document.body.classList.remove('show-guide-button-notification');
                    }
                    while (length) {
                        length -= 1;
                        value = (userSets[length].checked && (userSets[length].value === 'on' || userSets[length].value)) || (userSets[length].length && userSets[length].value) || (userSets[length].getAttribute('type') === 'text' && userSets[length].value);
                        if (value) {
                            savedSets[userSets[length].name || userSets[length].id] = value;
                        } else if (!value && userSets[length].type !== 'radio') {
                            delete savedSets[userSets[length].id];
                        }
                    }
                    parSets = savedSets;
                    window.postMessage({replace: parSets}, '*');
                    customStyles();
                    if (!salt) {
                        if (notification.childNodes.length < 1) {
                            notification.remove();
                            notification = [
                                '<div id="appbar-main-guide-notification-container">\n',
                                '    <div class="appbar-guide-notification" role="alert">\n',
                                '        <span class="appbar-guide-notification-content-wrapper yt-valign">\n',
                                '            <span class="appbar-guide-notification-icon yt-sprite"></span>\n',
                                '            <span class="appbar-guide-notification-text-content"></span>\n',
                                '        </span>\n',
                                '    </div>\n',
                                '</div>'
                            ].join('');
                            notification = string2HTML(notification).querySelector('#appbar-main-guide-notification-container');
                            document.getElementsByClassName('yt-masthead-logo-container')[0].appendChild(notification);
                        }
                        document.getElementsByClassName('appbar-guide-notification-text-content')[0].textContent = 'Settings saved';
                        document.body.classList.add('show-guide-button-notification');
                        window.setTimeout(hideNotif, 2000);
                    }
                    value = notification = navId = savedSets = userSets = length = null;
                }
                if (event.target.classList.contains('P-save')) {
                    saveSettings();
                } else if (event.target.classList.contains('P-reset')) {
                    parSets = defSets;
                    window.postMessage({replace: defSets}, '*');
                    settingsButton.click();
                    settingsButton.click();
                } else if (event.target.classList.contains('close')) {
                    remBlackList();
                } else if (event.target.id === 'blacklist-edit' || event.target.id === 'blacklist-save' || event.target.id === 'blacklist-close') {
                    manageBlackList(event.target);
                } else if (event.target.id === 'P-container' || event.target.id === 'P-settings') {
                    event = (event.target.id === 'P-settings') ? event.target : event.target.parentNode;
                    event.remove();
                } else if (event.target.id !== 'DNT' && event.target.tagName !== 'A' && event.target.parentNode.id === 'P-sidebar-list') {
                    saveSettings('no-notification');
                    document.getElementById('P-content').remove();
                    pContainer = document.getElementById('P-container');
                    pContent = string2HTML(template()[event.target.id]).querySelector('#P-content');
                    pContainer.appendChild(pContent);
                    event.target.parentNode.getElementsByClassName('selected')[0].removeAttribute('class');
                    event.target.className = 'selected';
                }
            }
            function settingsTemplate() {
                var bodyContainer,
                    pageContainer,
                    pWrapper = document.getElementById('P-settings');
                if (pWrapper) {
                    pWrapper.remove();
                } else {
                    bodyContainer = document.getElementById('body-container');
                    pageContainer = document.getElementById('page-container');
                    pWrapper = string2HTML(template().setMenu).querySelector('#P-settings');
                    pWrapper.querySelector('#P-container').appendChild(string2HTML(template().GEN).querySelector('#P-content'));
                    bodyContainer.insertBefore(pWrapper, pageContainer);
                    handleEvents(pWrapper, 'click', navigateSettings);
                }
                document[isChrome ? 'body' : 'documentElement'].scrollTop = 0;
                bodyContainer = pageContainer = pWrapper = null;
            }
            buttonNotif = document.getElementsByClassName('notifications-container')[0];
            buttonsSection = document.getElementById('yt-masthead-user') || document.getElementById('yt-masthead-signin');
            if (buttonsSection && !document.getElementById('P')) {
                settingsButton = document.createElement('button');
                settingsButton.id = 'P';
                settingsButton.title = 'YouTube+ settings';
                handleEvents(settingsButton, 'click', settingsTemplate);
                if (buttonNotif) {
                    buttonsSection.insertBefore(settingsButton, buttonNotif);
                } else {
                    buttonsSection.appendChild(settingsButton);
                }
            }
        }
        function enhancedDetails() {
            function username() {
                var link,
                    span,
                    user,
                    verified,
                    name = document.getElementsByClassName('yt-user-info')[0];
                function videoCounter() {
                    link.href = window.location.origin + '/channel/' + user.getAttribute('data-ytid') + '/videos';
                    span = document.createElement('span');
                    span.textContent = ' · ';
                    name.appendChild(span);
                    name.appendChild(link);
                    verified = document.getElementsByClassName('yt-channel-title-icon-verified')[0];
                    if (verified) {
                        user.className += ' yt-uix-tooltip';
                        user.setAttribute('data-tooltip-text', verified.getAttribute('data-tooltip-text'));
                        user.style.color = '#167ac6';
                        verified.remove();
                    }
                    link = span = user = verified = name = null;
                }
                function getPLInfo(details) {
                    details = details.target.responseText;
                    if (details) {
                        details = JSON.parse(details);
                        details = details.body && details.body.content && details.body.content.match(/class="pl-header-details">([\w\W]*?)<\/ul>/)[1];
                        details = details && details.match(/<li>([\w\W]*?)<\/li>/g)[1];
                        if (details) {
                            link.className = 'spf-link';
                            link.textContent = channelId[user.getAttribute('data-ytid')] = details.replace(/<\/?li>/g, '').replace('&#39;', '\'');
                            videoCounter();
                        }
                    }
                    details = null;
                }
                if (!document.getElementById('uploaded-videos') && name) {
                    link = document.createElement('a');
                    link.id = 'uploaded-videos';
                    name.appendChild(link);
                    user = name.querySelector('a');
                    if (channelId[user.getAttribute('data-ytid')]) {
                        link.textContent = channelId[user.getAttribute('data-ytid')];
                        videoCounter();
                    } else {
                        localXHR({
                            method: 'GET',
                            url: '/playlist?spf=navigate&list=' + user.getAttribute('data-ytid').replace('UC', 'UU'),
                            call: getPLInfo
                        });
                    }
                }
            }
            function publishedTime() {
                var watchTime = document.getElementsByClassName('watch-time-text')[0];
                function getCHInfo(details) {
                    details = details.target.responseText;
                    if (details) {
                        if (watchTime.textContent.split('·').length < 2) {
                            details = JSON.parse(details);
                            details = details.body && details.body.content && details.body.content.match(/yt-lockup-meta-info">\n<li>([\w\W]*?)<\/ul/);
                            if (details) {
                                watchTime.textContent += ' · ' + details[1].split('</li><li>')[0];
                            }
                        }
                    }
                    details = watchTime = null;
                }
                if (watchTime && window.ytplayer && window.ytplayer.config) {
                    localXHR({
                        method: 'GET',
                        url: '/channel/' + window.ytplayer.config.args.ucid + '/search?query="' + window.ytplayer.config.args.video_id + '"&spf=navigate',
                        call: getCHInfo
                    });
                }
            }
            if (window.location.pathname === '/watch') {
                if (parSets.VID_VID_CNT) {
                    username();
                }
                if (parSets.VID_POST_TIME) {
                    publishedTime();
                }
            }
        }
        function commentsButton() {
            var comments = document.getElementById('watch-discussion'),
                wrapper;
            function showComments() {
                comments.classList.toggle('show');
                wrapper.querySelector('button').textContent = userLang((comments.classList.contains('show')) ? 'HIDE_CMTS' : 'SHOW_CMTS');
            }
            if (comments && !document.getElementById('P-show-comments') && parSets.VID_HIDE_COMS === '1') {
                wrapper =
                    '<div id="P-show-comments" class="yt-card">\n' +
                    '    <button class="yt-uix-button yt-uix-button-expander">' + userLang('SHOW_CMTS') + '</button>\n' +
                    '</div>\n';
                wrapper = string2HTML(wrapper).querySelector('#P-show-comments');
                handleEvents(wrapper, 'click', showComments);
                comments.parentNode.insertBefore(wrapper, comments);
            }
        }
        function updateSettings(event) {
            if (event.data.updateSettings) {
                parSets = event.data;
                customStyles();
            }
        }
        function playerMode() {
            var cookie        = document.cookie,
                pageElement   = document.getElementById('page'),
                playerElement = document.getElementById('player');
            if (parSets.VID_PLR_SIZE_MEM && parSets.theaterMode) {
                if (window.navigator.cookieEnabled && (cookie.split('wide=0').length > 1 || cookie.split('wide=1').length < 2)) {
                    document.cookie = 'wide=1; path=/';
                }
                if (playerElement && window.location.pathname === '/watch') {
                    pageElement.classList.add('watch-wide');
                    pageElement.className = pageElement.className.replace('non-', '');
                    playerElement.className = playerElement.className.replace('small', 'large');
                }
            } else if (parSets.VID_PLR_SIZE_MEM && !parSets.theaterMode) {
                if (window.navigator.cookieEnabled && (cookie.split('wide=1').length > 1 || cookie.split('wide=0').length < 2)) {
                    document.cookie = 'wide=0; path=/';
                }
                if (playerElement && window.location.pathname === '/watch') {
                    pageElement.classList.remove('watch-wide');
                    pageElement.className = pageElement.className.replace('watch-stage', 'watch-non-stage');
                    playerElement.className = playerElement.className.replace('large', 'small').replace('medium', 'small');
                }
            }
            cookie = pageElement = playerElement = null;
        }
        function argsCleaner(config) {
            var base = (config.args.iurl_webp) ? '_webp' : '',
                hdThumb,
                maxRes;
            function checkThumbnail() {
                var img,
                    video = document.getElementsByTagName('video')[0],
                    hdURL = config.args['iurl' + base].replace('hqdefault', 'maxresdefault'),
                    state = api && api.getPlayerState && api.getPlayerState();
                function widthReport() {
                    handleEvents(img, 'load', widthReport, 'remove');
                    function prefixIterator(prefix) {
                        config.args[prefix + base] = hdURL;
                    }
                    if (img.width > 120 && !config.args['iurlmaxres' + base] && state && (state === 5 || (state === 3 && video && video.src === ''))) {
                        ['iurl', 'iurlsd', 'iurlmq', 'iurlhq', 'iurlmaxres'].forEach(prefixIterator);
                        api.cueVideoByPlayerVars(config.args);
                        api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                        if (parSets.VID_PLR_VOL_MEM) {
                            api.setVolume(parSets.volLev);
                        }
                    }
                    img = video = hdURL = state = null;
                }
                img = new Image();
                handleEvents(img, 'load', widthReport);
                img.src = hdURL;
            }
            function prefixIterator(prefix) {
                config.args[prefix + base] = config.args['iurlmaxres' + base];
            }
            function clearRVS(rvs) {
                var i,
                    rvsList   = [],
                    rvsReturn = [];
                rvs = rvs.split(',');
                function blacklistMatch(names) {
                    i = rvs.length;
                    while (i) {
                        i -= 1;
                        if (rvs[i].replace(/\+/g, ' ').split(parSets.blacklist[names]).length > 1) {
                            rvsList.push(i);
                        }
                    }
                }
                Object.keys(parSets.blacklist).forEach(blacklistMatch);
                i = rvs.length;
                while (i) {
                    i -= 1;
                    if (rvsList.indexOf(i) < 0) {
                        rvsReturn.push(rvs[i]);
                    }
                }
                return rvsReturn.join(',');
            }
            if (config.args.video_id) {
                if ((parSets.VID_PLR_ADS && (!parSets.VID_SUB_ADS || (parSets.VID_SUB_ADS && !config.args.subscribed)))) {
                    delete config.args.ad3_module;
                }
                if (parSets.VID_PLR_SIZE_MEM && parSets.theaterMode) {
                    config.args.player_wide = '1';
                }
                if (config.args.iv_load_policy) {
                    config.args.iv_load_policy = (parSets.VID_PLR_ANTS) ? '3' : '1';
                }
                if (config.args.cc_load_policy) {
                    config.args.cc_load_policy = (parSets.VID_PLR_CC) ? '0' : '1';
                    if (parSets.VID_PLR_CC) {
                        delete config.args.ttsurl;
                        delete config.args.caption_tracks;
                    }
                }
                config.args.autohide = '2';
                config.args.vq = parSets.VID_DFLT_QLTY;
                config.args.theme = parSets.VID_CTRL_BAR_CLR;
                config.args.color = parSets.VID_PROG_BAR_CLR;
                config.args.dash = (parSets.VID_PLR_DASH) ? '0' : '1';
                config.args.autoplay = (parSets.VID_PLR_ATPL) ? '1' : '0';
                if (config.args.autoplay === '0') {
                    hdThumb = document.querySelector('[href*="maxresdefault"]') || document.querySelector('[content*="maxresdefault"]');
                    maxRes = hdThumb && (hdThumb.getAttribute('href') || hdThumb.getAttribute('content'));
                    config.args['iurlmaxres' + base] = config.args['iurlmaxres' + base] || maxRes || false;
                    if (config.args['iurlmaxres' + base] === false || (config.args['iurlmaxres' + base] && config.args['iurlmaxres' + base].split(config.args.video_id).length < 2)) {
                        delete config.args['iurlmaxres' + base];
                        checkThumbnail();
                    } else if (config.args['iurlmaxres' + base]) {
                        ['iurl', 'iurlsd', 'iurlmq', 'iurlhq'].forEach(prefixIterator);
                    }
                }
                if (parSets.BLK_ON && window.yt && window.yt.config_ && window.yt.config_.RELATED_PLAYER_ARGS && window.yt.config_.RELATED_PLAYER_ARGS.rvs) {
                    config.args.rvs = window.yt.config_.RELATED_PLAYER_ARGS.rvs = clearRVS(window.yt.config_.RELATED_PLAYER_ARGS.rvs);
                }
                if (window.location.pathname === '/watch' && window.ytplayer && window.ytplayer.config === null) {
                    window.ytplayer.config = config;
                }
                window.ytplayer.config.args = config.args;
                return config;
            }
        }
        function alwaysVisible() {
            var width,
                height,
                skinny,
                sidebar,
                newPlayer,
                sidebarSize,
                aspectRatio,
                containerSize,
                playerContainer,
                videoPlayer = document.getElementById('movie_player');
            function initFloater() {
                newPlayer = window.ytplayer && window.ytplayer.config && window.ytplayer.config.assets.js.split('-new').length > 1;
                skinny = document.documentElement.classList.contains('content-snap-width-skinny-mode');
                videoPlayer = document.getElementById('movie_player');
                playerContainer = document.getElementById('player-api');
                containerSize = playerContainer && playerContainer.getBoundingClientRect();
                sidebar = document.getElementById('watch7-sidebar');
                sidebarSize = sidebar && sidebar.getBoundingClientRect();
                function updatePos() {
                    if (!document.documentElement.classList.contains('floater')) {
                        handleEvents(window, 'resize', updatePos, 'remove');
                        return;
                    }
                    sidebarSize = sidebar.getBoundingClientRect();
                    videoPlayer.style.marginTop = '-' + (height / 2) + 'px';
                    videoPlayer.style.left = ((skinny && '0') || sidebarSize.left) + 'px';
                    videoPlayer.style.width = (skinny && containerSize.width) || sidebarSize.width + 'px';
                    videoPlayer.style.height = ((!parSets.VID_PLR_CTRL_VIS && !newPlayer) ? 30 : 0) + ((skinny && containerSize.height) || (sidebarSize.width / aspectRatio)) + 'px';
                }
                if (!sidebar) {
                    handleEvents(window, 'scroll', initFloater, 'remove');
                    return;
                }
                if (videoPlayer && containerSize.bottom < (((skinny && containerSize.height - 2) || (containerSize.height / 2)) + 51) && !document.documentElement.classList.contains('floater')) {
                    aspectRatio = 16 / 9;
                    width = (skinny && containerSize.width) || sidebarSize.width;
                    height = ((!parSets.VID_PLR_CTRL_VIS && !newPlayer) ? 30 : 0) + ((skinny && containerSize.height) || (sidebarSize.width / aspectRatio));
                    document.documentElement.classList.toggle('floater');
                    videoPlayer.setAttribute('style', 'width: ' + width + 'px; margin-top: -' + (height / 2) + 'px; height: ' + height + 'px; left: ' + ((skinny && '0') || sidebarSize.left) + 'px;');
                    handleEvents(window, 'resize', updatePos);
                } else if (videoPlayer && containerSize.bottom > (((skinny && containerSize.height - 2) || (!skinny && (containerSize.height / 2))) + 51) && document.documentElement.classList.contains('floater')) {
                    document.documentElement.classList.toggle('floater');
                    videoPlayer.removeAttribute('style');
                    handleEvents(window, 'resize', updatePos, 'remove');
                }
            }
            if (parSets.VID_PLR_ALVIS) {
                if (window.location.pathname === '/watch') {
                    handleEvents(window, 'scroll', initFloater);
                } else if (window.location.pathname !== '/watch') {
                    handleEvents(window, 'scroll', initFloater, 'remove');
                }
            }
        }
        function subPlaylist() {
            var i,
                list      = [],
                button    = document.getElementById('subscription-playlist'),
                navMenu   = document.getElementById('channel-navigation-menu'),
                listTitle = document.getElementsByClassName('appbar-nav-menu')[0],
                videoList = document.getElementsByClassName('addto-watch-later-button');
            function initSubPlaylist(event) {
                event = event.target.responseText;
                if (event) {
                    button.href = '/watch?v=' + videoList[0].getAttribute('data-video-ids') + '&list=' + JSON.parse(event)[1].data.swfcfg.args.list;
                }
                i = list = button = navMenu = listTitle = videoList = null;
            }
            if (window.location.pathname === '/feed/subscriptions' && !button && listTitle && videoList) {
                button =
                    '<li id="subscription-playlist-icon">\n' +
                    '    <a id="subscription-playlist" title="' + userLang('SUB_PLST') + '" class="yt-uix-button spf-link yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default">\n' +
                    '        <span class="yt-uix-button-content"></span>\n' +
                    '    </a>\n' +
                    '</li>';
                button = string2HTML(button).querySelector('li');
                navMenu.insertBefore(button, navMenu.firstChild);
                i = videoList.length;
                while (i) {
                    i -= 1;
                    if (i > -1) {
                        list.push(videoList[i].getAttribute('data-video-ids'));
                    }
                }
                list.reverse().join('%2C');
                listTitle = listTitle && listTitle.getElementsByClassName('epic-nav-item-heading')[0].textContent;
                button = document.getElementById('subscription-playlist');
                button.href = '/watch_videos?title=' + listTitle + '&video_ids=' + list;
                localXHR({
                    method: 'GET',
                    url: '/watch_videos?title=' + listTitle + '&spf=navigate&video_ids=' + list,
                    call: initSubPlaylist
                });
            }
        }
        function playerReady(playerApi) {
            function playerState(state) {
                var moviePlayer = document.getElementById('movie_player'),
                    cueThumb    = document.getElementsByClassName('ytp-thumbnail-overlay')[0],
                    cueButton   = document.getElementsByClassName('ytp-large-play-button')[0],
                    newPlayer   = window.ytplayer && window.ytplayer.config && window.ytplayer.config.assets.js.split('-new').length > 1;
                if (newPlayer) {
                    if (window.matchMedia) {
                        window.matchMedia = false;
                        document.documentElement.classList.add('new_player');
                    }
                    if (cueThumb && cueButton) {
                        if (state === 5) {
                            cueThumb.removeAttribute('aria-hidden');
                            cueThumb.style.display = 'initial';
                            cueButton.removeAttribute('aria-hidden');
                            cueButton.style.display = 'initial';
                        } else {
                            cueThumb.setAttribute('aria-hidden', 'true');
                            cueThumb.style.display = 'none';
                            cueButton.setAttribute('aria-hidden', 'true');
                            cueButton.style.display = 'none';
                        }
                    }
                }
                if (parSets.VID_PLR_CTRL_VIS && moviePlayer) {
                    moviePlayer.classList.add('ideal-aspect');
                }
                if (parSets.fullBrs) {
                    if (state !== 5 && state !== -1 && state !== 0) {
                        document.documentElement.classList.add('part_fullbrowser');
                    } else {
                        document.documentElement.classList.remove('part_fullbrowser');
                    }
                }
                cueThumb = cueButton = null;
            }
            function playerFullscreen(event) {
                fullscreen = event.fullscreen;
                if (parSets.VID_PLR_CTRL_VIS) {
                    document.getElementById('movie_player').classList.add('ideal-aspect');
                }
            }
            function volumeChanged(event) {
                set('volLev', event.volume);
            }
            function sizeChanged(event) {
                set('theaterMode', event);
            }
            if ((typeof playerApi === 'object' || window.ytplayer.config.assets.js.split('-new').length > 1) && !document.getElementById('c4-player')) {
                api = playerApi;
                handleEvents(api, 'onStateChange', playerState);
                handleEvents(api, 'onFullscreenChange', playerFullscreen);
                if (parSets.VID_PLR_VOL_MEM) {
                    handleEvents(api, 'onVolumeChange', volumeChanged);
                }
                if (parSets.VID_PLR_SIZE_MEM) {
                    handleEvents(api, 'SIZE_CLICKED', sizeChanged);
                }
                if (!parSets.VID_PLR_ATPL) {
                    argsCleaner(window.ytplayer.config);
                    api.cueVideoByPlayerVars(window.ytplayer.config.args);
                    api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                } else {
                    api.pauseVideo();
                    api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                    api.playVideo();
                }
                if (parSets.VID_PLR_VOL_MEM) {
                    api.setVolume(parSets.volLev);
                }
            }
        }
        function scriptExit(event) {
            function baseDetour(originalFunction) {
                return function () {
                    originalFunction.apply(this, arguments);
                    window.yt.config_.SHARE_ON_VIDEO_END = (parSets.VID_END_SHRE) ? false : true;
                    window.yt.config_.UNIVERSAL_HOVERCARDS = (parSets.GEN_DSB_HVRC) ? false : true;
                };
            }
            function embedDetour(originalFunction) {
                return function () {
                    var args = arguments;
                    argsCleaner(args[1]);
                    if (args[0].id === 'upsell-video') {
                        return originalFunction.apply(this, args);
                    }
                    originalFunction.apply(this, args);
                    if (api) {
                        api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                    }
                };
            }
            function autoplayDetour(originalFunction) {
                return function () {
                    var args = arguments;
                    if (!args[1] || parSets.plApl || (!parSets.plApl && args[1].feature && args[1].feature !== 'autoplay')) {
                        originalFunction.apply(this, arguments);
                    }
                };
            }
            function autoplayDetourFullScreen(originalFunction) {
                return function () {
                    var nextButton,
                        nextClicked = document.activeElement.classList.contains('ytp-button-next') || document.activeElement.classList.contains('ytp-next-button'),
                        currentTime = document.getElementsByClassName('ytp-time-current')[0].textContent,
                        totalTime   = document.getElementsByClassName('ytp-time-duration')[0].textContent;
                    if (!parSets.plApl && !nextClicked && currentTime !== '0:00' && currentTime === totalTime) {
                        nextButton = document.getElementsByClassName('ytp-next-button')[0];
                        if (nextButton && nextButton.getAttribute('aria-disabled') === 'true') {
                            nextButton.onclick = api.nextVideo;
                            handleEvents(nextButton, 'click', api.nextVideo);
                            nextButton.setAttribute('aria-disabled', 'false');
                        }
                        return false;
                    }
                    if (parSets.plApl || nextClicked || currentTime !== totalTime) {
                        return originalFunction.apply(this, arguments);
                    }
                };
            }
            function fullscreenVideoChange(originalFunction) {
                return function () {
                    var key,
                        patch   = [{}],
                        config  = {args: {}},
                        args    = arguments;
                    function buildConfig(conf) {
                        config.args[conf.split('=')[0]] = decodeURIComponent(conf.split('=')[1]).replace(/\+/g, ' ');
                    }
                    function revertConfig(conf) {
                        patch[0].response.push(conf + '=' + encodeURIComponent(config.args[conf]).replace(/\%20/g, '+'));
                    }
                    for (key in args[0]) {
                        if (args[0][key] !== undefined) {
                            patch[0][key] = args[0][key];
                        }
                    }
                    patch[0].response.split('&').forEach(buildConfig);
                    config = argsCleaner(config);
                    patch[0].response = [];
                    Object.keys(config.args).forEach(revertConfig);
                    patch[0].response = patch[0].response.join('&');
                    patch[0].responseText = patch[0].response;
                    api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                    originalFunction.apply(this, patch);
                };
            }
            function fsPointerDetour(originalFunction) {
                return function () {
                    var self = this;
                    function firstLevel(fl) {
                        function secondLevel(sl) {
                            if (typeof self[fl][sl] === 'function' && String(self[fl][sl]).split('onStatusFail').length > 1) {
                                self[fl][sl] = fullscreenVideoChange(self[fl][sl]);
                            }
                        }
                        if (typeof self[fl] === 'object' && self[fl]) {
                            Object.keys(Object.getPrototypeOf(self[fl])).forEach(secondLevel);
                        }
                    }
                    Object.keys(self).some(firstLevel);
                    return originalFunction.apply(this, arguments);
                };
            }
            function html5Detour(originalFunction) {
                return function () {
                    var moviePlayer,
                        playerInstance,
                        args = arguments;
                    function html5Pointers(originalPointer) {
                        return function () {
                            var player,
                                changed = originalPointer.apply(this, arguments);
                            if (changed.width && changed.height && !fullscreen) {
                                player = document.getElementById('movie_player');
                                if (player) {
                                    changed.width = player.offsetWidth;
                                    changed.height = player.offsetHeight;
                                }
                            }
                            return changed;
                        };
                    }
                    function playerInstanceIterator(keys) {
                        function firstLevel(fl) {
                            if (typeof playerInstance[keys][fl] === 'function' && String(playerInstance[keys][fl]).split('get_video_info').length > 1 && playerInstance[keys][fl] !== fsPointerDetour) {
                                playerInstance[keys][fl] = fsPointerDetour(playerInstance[keys][fl]);
                            }
                        }
                        function keysIterator(sizes) {
                            if (typeof playerInstance[keys][sizes] === 'function' && (playerInstance[keys][sizes] + String()).split('"detailpage"!=').length > 1) {
                                playerInstance[keys][sizes] = html5Pointers(playerInstance[keys][sizes]);
                            }
                        }
                        if (typeof playerInstance[keys] === 'object') {
                            if (playerInstance[keys] && playerInstance[keys].element && window.ytplayer.config.assets.js.split('-new').length < 2) {
                                Object.keys(Object.getPrototypeOf(playerInstance[keys])).some(keysIterator);
                            } else if (playerInstance[keys] && playerInstance[keys].hasNext) {
                                playerInstance[keys].hasNext = autoplayDetourFullScreen(playerInstance[keys].hasNext);
                            } else if (playerInstance[keys]) {
                                Object.keys(Object.getPrototypeOf(playerInstance[keys])).some(firstLevel);
                            }
                        }
                    }
                    args[1] = argsCleaner(args[1]);
                    if (args[0].id === 'upsell-video') {
                        originalFunction.apply(this, args);
                    } else if (typeof args[0] === 'object' || window.ytplayer.config.assets.js.split('-new').length > 1) {
                        playerInstance = originalFunction.apply(this, args);
                        Object.keys(playerInstance).some(playerInstanceIterator);
                        moviePlayer = document.getElementById('movie_player');
                        if (moviePlayer) {
                            if (!parSets.VID_PLR_ATPL && window.ytplayer.config.assets.js.split('-new').length > 1) {
                                moviePlayer.cueVideoByPlayerVars(window.ytplayer.config.args);
                            }
                            moviePlayer.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                        }
                    }
                };
            }
            function ytIterator(keys) {
                var str;
                if (typeof window._yt_www[keys] === 'function') {
                    str = String(window._yt_www[keys]);
                    if (str.split('player-added').length > 1) {
                        window._yt_www[keys] = embedDetour(window._yt_www[keys]);
                    } else if (str.split('window.spf.navigate').length > 1) {
                        window._yt_www[keys] = autoplayDetour(window._yt_www[keys]);
                    }
                }
            }
            if (event && event.target && event.target.getAttribute('name') === 'www/base') {
                window.yt.setConfig = baseDetour(window.yt.setConfig);
                Object.keys(window._yt_www).some(ytIterator);
            }
            if ((event && event.target && event.target.getAttribute('name') === 'html5player/html5player') || (!window.html5Patched && window.yt && window.yt.player && window.yt.player.Application && window.yt.player.Application.create)) {
                window.html5Patched = true;
                window.yt.player.Application.create = html5Detour(window.yt.player.Application.create);
            }
        }
        function thumbMod() {
            var userId,
                userName,
                loadMore,
                videoLink,
                infoField,
                titleField,
                thumbField,
                clickTitle,
                masterList,
                trashList  = [],
                detailList = [],
                blackList  = parSets.blacklist;
            function initThumbMod(event) {
                var observer,
                    userList = parSets.blacklist;
                function initSidebarMode() {
                    var sidebarAlign = (parSets.VID_SDBR_ALGN > 1) ? ',left=' + (window.screen.availWidth - 467) : (parSets.VID_SDBR_ALGN < 1) ? '' : ',left=0',
                        newSidebar   = window.open(event.getAttribute('data-link'), 'sidebarMode', 'width=467,height=' + window.screen.availHeight + ',scrollbars=1' + sidebarAlign);
                    function snapFit() {
                        newSidebar.resizeTo(newSidebar.outerWidth, window.screen.availHeight);
                    }
                    newSidebar.addEventListener('readystatechange', snapFit, true);
                    newSidebar.focus();
                }
                function initBlackList() {
                    userList[event.getAttribute('data-ytid')] = event.getAttribute('data-user');
                    set('blacklist', userList);
                    thumbMod();
                }
                loadMore = document.getElementsByClassName('load-more-button')[0] || document.getElementById('watch-more-related');
                clickTitle = document.getElementsByClassName('yt-uix-tile')[0];
                while (clickTitle) {
                    clickTitle.classList.remove('yt-uix-tile');
                    clickTitle = document.getElementsByClassName('yt-uix-tile')[0];
                }
                if (loadMore && !loadMore.classList.contains('hooked')) {
                    loadMore.classList.add('hooked');
                    observer = new window.MutationObserver(thumbMod);
                    observer.observe(loadMore, {
                        childList: true,
                        attributes: true,
                        attributeOldValue: true
                    });
                }
                if (event) {
                    event.preventDefault();
                    event = event.target;
                    if (event.className === 'sidebarmode yt-uix-tooltip') {
                        initSidebarMode();
                    } else if (event.className === 'blacklist yt-uix-tooltip') {
                        initBlackList();
                    }
                }
            }
            function insertButtons(i) {
                var button;
                function createButton(type, details) {
                    if (type === 'sidebarmode') {
                        button = '<div title="' + userLang('SDBR_OPEN') + '" data-link="' + details.videolink + '" data-tooltip-text="' + userLang('SDBR_OPEN') + '" class="' + type + ' yt-uix-tooltip"></div>';
                    } else {
                        button = '<div title="' + userLang('BLCK_ADD') + '" data-user="' + details.username + '" data-ytid="' + details.youtubeid + '" data-tooltip-text="' + userLang('BLCK_ADD') + '" class="' + type + ' yt-uix-tooltip"></div>';
                    }
                    return string2HTML(button).querySelector('div');
                }
                if (detailList[i]) {
                    if (parSets.GEN_SDBR_ON && !window.opener && !detailList[i].thumbfield.getElementsByClassName('sidebarmode')[0]) {
                        button = createButton('sidebarmode', detailList[i]);
                        handleEvents(button, 'click', initThumbMod);
                        detailList[i].thumbfield.appendChild(button);
                    }
                    if (parSets.BLK_ON && window.location.pathname !== '/feed/subscriptions' && !detailList[i].thumbfield.getElementsByClassName('blacklist')[0]) {
                        button = createButton('blacklist', detailList[i]);
                        handleEvents(button, 'click', initThumbMod);
                        detailList[i].thumbfield.appendChild(button);
                    }
                }
            }
            function buildDetailList(i) {
                var upNext;
                if (i > -1 && masterList[i]) {
                    infoField = masterList[i].getElementsByClassName('g-hovercard')[1] || masterList[i].getElementsByClassName('g-hovercard')[0];
                    titleField = masterList[i].getElementsByClassName('yt-uix-tile-link')[0] || masterList[i].getElementsByClassName('yt-ui-ellipsis')[0] || masterList[i].getElementsByClassName('content-link')[0] || masterList[i].getElementsByTagName('a')[0];
                    thumbField = masterList[i].getElementsByClassName('yt-lockup-thumbnail')[0] || masterList[i].getElementsByClassName('thumb-wrapper')[0] || masterList[i].getElementsByClassName('yt-pl-thumb')[0];
                    userId = infoField && infoField.getAttribute('data-ytid');
                    userName = infoField && infoField.textContent;
                    videoLink = titleField && titleField.href;
                    detailList[i] = undefined;
                    if (blackList[userId]) {
                        upNext = document.getElementsByClassName('watch-sidebar-head')[0] && document.getElementsByClassName('watch-sidebar-section')[0];
                        if (upNext && upNext.contains(thumbField)) {
                            upNext.remove();
                            document.getElementsByClassName('watch-sidebar-separation-line')[0].remove();
                        } else {
                            while (thumbField) {
                                thumbField = thumbField.parentNode;
                                if (thumbField.tagName === 'LI') {
                                    trashList.push(thumbField);
                                    break;
                                }
                            }
                        }
                    } else if (userName && userId && videoLink && thumbField) {
                        detailList[i] = {
                            username: userName,
                            youtubeid: userId,
                            videolink: videoLink,
                            thumbfield: thumbField
                        };
                    }
                }
            }
            function cleanList(trash) {
                var i,
                    emptyShelves = document.getElementsByClassName('feed-item-container');
                trashList[trash].remove();
                if (emptyShelves.length > 0) {
                    i = emptyShelves.length;
                    while (i) {
                        i -= 1;
                        if (emptyShelves[i].getElementsByTagName('li').length < 2) {
                            emptyShelves[i].remove();
                        }
                    }
                }
            }
            function getList(list) {
                list = document.getElementsByClassName(list);
                if (list.length > 0) {
                    masterList = list;
                }
            }
            if ((parSets.BLK_ON || parSets.GEN_SDBR_ON) && (window.location.pathname === '/' || window.location.pathname === '/results' || window.location.pathname === '/watch' || window.location.pathname === '/feed/music' || window.location.pathname === '/feed/subscriptions')) {
                ['yt-lockup-tile', 'video-list-item', 'yt-shelf-grid-item'].forEach(getList);
                if (masterList) {
                    Object.keys(masterList).forEach(buildDetailList);
                    Object.keys(trashList).forEach(cleanList);
                    Object.keys(detailList).forEach(insertButtons);
                    initThumbMod();
                }
            }
        }
        function volumeWheel(event) {
            var playerApi  = document.getElementById('player-api'),
                direction  = event && (event.deltaY || event.wheelDeltaY),
                playlistFS = document.getElementsByClassName('ytp-playlist-tray-tray')[0] || document.getElementsByClassName('ytp-playlist-menu')[0];
            if (event && api && playerApi && (!playlistFS || (playlistFS && !playlistFS.contains(event.target))) && (event.target.id === 'player-api' || playerApi.contains(event.target))) {
                event.preventDefault();
                if (direction > 0 && api.getVolume() > 0) {
                    api.setVolume(api.getVolume() - 10);
                } else if (direction < 0 && api.getVolume() < 100) {
                    api.setVolume(api.getVolume() + 10);
                }
            }
            if (!event && parSets.VID_VOL_WHEEL) {
                handleEvents(window, 'wheel', volumeWheel);
            }
            direction = playerApi = null;
        }
        function playlistControls() {
            var href  = window.location.href,
                plBar = document.getElementById('watch-appbar-playlist');
            function reverseControl() {
                var temp,
                    prev   = document.getElementsByClassName('prev-playlist-list-item')[0],
                    next   = document.getElementsByClassName('next-playlist-list-item')[0],
                    list   = document.getElementById('playlist-autoscroll-list'),
                    videos = list.getElementsByTagName('li'),
                    length = videos.length;
                while (length) {
                    length -= 1;
                    list.appendChild(videos[length]);
                }
                temp = prev.href;
                prev.href = next.href;
                next.href = temp;
                list.scrollTop = document.getElementsByClassName('currently-playing')[0].offsetTop;
                if (api) {
                    api.updatePlaylist();
                }
                temp = prev = next = list = videos = length = null;
            }
            function reverseButton(event) {
                event = isChrome ? event.target.parentNode : event.target;
                event.classList.toggle('yt-uix-button-toggled');
                set('plRev', (event.classList.contains('yt-uix-button-toggled')) ? window.yt.config_.LIST_ID : false);
                reverseControl();
            }
            function autoplayButton(event) {
                event = isChrome ? event.target.parentNode : event.target;
                event.classList.toggle('yt-uix-button-toggled');
                set('plApl', event.classList.contains('yt-uix-button-toggled'));
            }
            function createButton(type, label, boolean, call) {
                var navCtrls = document.getElementsByClassName('playlist-nav-controls')[0],
                    button   = [
                        '<button data-tooltip-text="' + label + '" class="yt-uix-button yt-uix-button-player-controls yt-uix-button-opacity yt-uix-tooltip' + (((boolean === true || href.split(boolean).length > 1) && ' yt-uix-button-toggled') || '') + '" type="button" title="' + label + '" id="' + type + '">\n',
                        '    <span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-' + type + '-video-list"></span>\n',
                        '</button>\n'
                    ].join('');
                plBar.className = plBar.className.replace('radio-playlist', '');
                button = string2HTML(button).querySelector('button');
                handleEvents(button, 'click', call);
                navCtrls.appendChild(button);
                navCtrls = button = null;
            }
            if (plBar) {
                if (document.readyState === 'complete' && href.split(parSets.plRev).length > 1) {
                    reverseControl();
                }
                if (parSets.VID_PLST_RVRS && !document.getElementById('reverse')) {
                    createButton('reverse', userLang('PLST_RVRS'), parSets.plRev, reverseButton);
                }
                if (parSets.VID_PLST_ATPL && !document.getElementById('autoplay')) {
                    createButton('autoplay', userLang('PLST_AP'), parSets.plApl, autoplayButton);
                }
            }
        }
        function advancedOptions() {
            var page         = document.documentElement,
                header       = document.getElementById('watch-header'),
                cnslBtn      = document.getElementById('console-button'),
                controls     = document.getElementById('player-console'),
                videoPlayer  = document.getElementsByTagName('video')[0],
                storyBoard   = window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.storyboard_spec;
            function hookButtons() {
                var autoPlay    = controls.querySelector('#autoplay-button'),
                    loopButton  = controls.querySelector('#loop-button'),
                    seekMap     = controls.querySelector('#seek-map'),
                    saveThumb   = controls.querySelector('#save-thumbnail-button'),
                    screenShot  = controls.querySelector('#screenshot-button'),
                    sidebarMode = controls.querySelector('#sidebar-button'),
                    fullBrowser = controls.querySelector('#fullbrowser-button');
                function togglePlay() {
                    set('VID_PLR_ATPL', !parSets.VID_PLR_ATPL);
                    autoPlay.classList[(parSets.VID_PLR_ATPL) ? 'add' : 'remove']('active');
                }
                function toggleLoop(event) {
                    videoPlayer = document.getElementsByTagName('video')[0];
                    videoPlayer.loop = event ? !videoPlayer.loop : parSets.loopVid;
                    loopButton.classList[(videoPlayer.loop) ? 'add' : 'remove']('active');
                    set('loopVid', loopButton.classList.contains('active'));
                }
                function toggleMap() {
                    var container = document.getElementById('seek-thumb-map') || false,
                        thumbs    = [],
                        thumbControls,
                        thumbsContainer,
                        matrix,
                        base;
                    storyBoard = window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.storyboard_spec;
                    function centerThumb() {
                        var thumbJump;
                        videoPlayer = document.getElementsByTagName('video')[0];
                        thumbsContainer = document.getElementById('seek-thumbs');
                        thumbJump = thumbsContainer.getElementsByTagName('span')[1];
                        if (videoPlayer && videoPlayer.currentTime > 0 && !container.classList.contains('invisible')) {
                            thumbsContainer.scrollLeft = (thumbJump.offsetWidth + 10) * (videoPlayer.currentTime / thumbJump.getAttribute('data-time-jump')) - (thumbsContainer.offsetWidth / 2) + ((thumbJump.offsetWidth + 10) / 2);
                        } else {
                            thumbsContainer.scrollLeft = 0;
                        }
                    }
                    function clickManager(event) {
                        var timeJump = event.target.getAttribute('data-time-jump'),
                            quality  = event.target.className.split('quality').length;
                        if (timeJump) {
                            if (videoPlayer.src !== '') {
                                videoPlayer.currentTime = timeJump;
                            } else {
                                window.yt.www.watch.player.seekTo(timeJump);
                            }
                        }
                        if (quality > 1 && event.target.tagName === 'DIV') {
                            container.className = event.target.className;
                            thumbsContainer.remove();
                            thumbsContainer = '<div id="seek-thumbs">' + thumbs[event.target.className.replace('quality-', '')] + '</div>\n';
                            thumbsContainer = string2HTML(thumbsContainer).querySelector('#seek-thumbs');
                            container.appendChild(thumbsContainer);
                            centerThumb();
                        }
                    }
                    function removeOld() {
                        if (container) {
                            container.remove();
                            seekMap.classList.remove('active');
                        }
                        handleEvents(container, 'click', clickManager);
                        handleEvents(window, 'spfdone', removeOld, 'remove');
                    }
                    function parseThumbs() {
                        thumbControls = '<div id="seek-controls">\n';
                        function matrixIterator(qualities, level) {
                            var i,
                                currentBase,
                                details,
                                thumbAmount,
                                frameAmount = 0,
                                gridX       = 0,
                                gridY       = 0;
                            if (qualities.split('storyboard').length < 2 && qualities.split('default').length < 2) {
                                details = qualities.split('#');
                                currentBase = base.replace('$L', level - 1).replace('$N', details[6]);
                                thumbAmount = details[2] - 1;
                                for (i = 0; i < thumbAmount; i += 1) {
                                    if (!thumbs[level - 1]) {
                                        thumbs[level - 1] = '';
                                    }
                                    thumbs[level - 1] += [
                                        '<span class="quality-' + (level - 1) + '"',
                                        ' data-time-jump="' + ((i * details[5]) / 1000) + '"',
                                        ' style="background-image: url(\'' + currentBase.replace('$M', frameAmount) + '?sigh=' + details[7] + '\');',
                                        ' background-position: -' + (gridX * details[0]) + 'px -' + (gridY * details[1]) + 'px;',
                                        ' width: ' + (details[0] - 2) + 'px; height: ' + ((details[1] % 2 === 0) ? details[1] : details[1] - 1) + 'px;">\n',
                                        '    <div class="timer">' + timeConv((i * details[5]) / 1000) + '</div>\n',
                                        '</span>\n'
                                    ].join('');
                                    if (gridX === details[3] - 1 && gridY === details[4] - 1) {
                                        frameAmount += 1;
                                        gridY = gridX = 0;
                                    } else {
                                        gridY = (gridX === details[3] - 1) ? gridY + 1 : gridY;
                                        gridX = (gridX === details[3] - 1) ? 0 : gridX + 1;
                                    }
                                }
                            }
                            if (level > 1) {
                                thumbControls += '<div class="quality-' + (level - 1) + '">' + ((level < 3 && userLang('CNSL_SKMP_SMAL')) || (level < 4 && userLang('CNSL_SKMP_MED')) || (level < 5 && userLang('CNSL_SKMP_LRGE'))) + '</div>\n';
                            }
                        }
                        matrix.forEach(matrixIterator);
                        thumbControls += '</div>\n';
                    }
                    if (storyBoard) {
                        matrix = storyBoard && storyBoard.split('|');
                        base = matrix[0];
                        if (!container) {
                            seekMap.classList.toggle('active');
                            parseThumbs();
                            container +=
                                '<div id="seek-thumb-map" class="' + ((thumbs[2] && 'quality-2') || (thumbs[1] && 'quality-1')) + '">\n' +
                                thumbControls +
                                '    <div id="seek-thumbs">' + (thumbs[2] || thumbs[1]) + '</div>\n' +
                                '</div>';
                            container = string2HTML(container).querySelector('#seek-thumb-map');
                            document.getElementById('movie_player').appendChild(container);
                            centerThumb();
                            handleEvents(container, 'click', clickManager);
                            handleEvents(window, 'spfdone', removeOld);
                        } else if (container.id) {
                            seekMap.classList.toggle('active');
                            container.classList.toggle('invisible');
                            centerThumb();
                        }
                    }
                }
                function dlThumb() {
                    var args     = window.ytplayer.config.args,
                        base     = (args.iurl_webp) ? '_webp' : '',
                        thumbURL = args['iurlmaxres' + base] || args['iurlsd' + base] || args['iurl' + base];
                    window.open(thumbURL);
                }
                function saveSS() {
                    var width,
                        height,
                        aspectRatio,
                        video     = document.getElementsByTagName('video')[0],
                        container = document.getElementById('screenshot-result') || document.createElement('div'),
                        canvas    = container.querySelector('canvas') || document.createElement('canvas'),
                        close     = document.createElement('div'),
                        context   = canvas.getContext('2d');
                    function hideContainer() {
                        container.classList.toggle('invisible');
                    }
                    aspectRatio = video.videoWidth / video.videoHeight;
                    width = video.videoWidth;
                    height = parseInt(width / aspectRatio, 10);
                    canvas.width = width;
                    canvas.height = height;
                    context.drawImage(video, 0, 0, width, height);
                    if (!container.id) {
                        container.id = 'screenshot-result';
                        container.appendChild(canvas);
                        close.id = 'close-screenshot';
                        close.textContent = userLang('CNSL_SS_CLS');
                        handleEvents(close, 'click', hideContainer);
                        container.appendChild(close);
                        document.body.appendChild(container);
                    } else if (container.id && container.classList.contains('invisible')) {
                        container.classList.toggle('invisible');
                    }
                }
                function openSidebar() {
                    var sidebarAlign = (parSets.VID_SDBR_ALGN > 1) ? ',left=' + (window.screen.availWidth - 467) : (parSets.VID_SDBR_ALGN < 1) ? '' : ',left=0',
                        newSidebar   = window.open(window.location.href, 'sidebarMode', 'width=467,height=' + window.screen.availHeight + ',scrollbars=1' + sidebarAlign);
                    function snapFit() {
                        newSidebar.resizeTo(newSidebar.outerWidth, window.screen.availHeight);
                    }
                    newSidebar.addEventListener('readystatechange', snapFit, true);
                    newSidebar.focus();
                }
                function toggleFullBrowser(event) {
                    function exitFullBrowser(key) {
                        if (key.keyCode === 27 || key.key === 'Escape') {
                            document.documentElement.classList.remove('part_fullbrowser');
                        }
                    }
                    handleEvents(document, 'keydown', exitFullBrowser);
                    set('fullBrs', event ? !parSets.fullBrs : true);
                    fullBrowser.classList[(parSets.fullBrs) ? 'add' : 'remove']('active');
                    if (event) {
                        document.documentElement.classList[(parSets.fullBrs) ? 'add' : 'remove']('part_fullbrowser');
                    }
                }
                handleEvents(autoPlay, 'click', togglePlay);
                handleEvents(loopButton, 'click', toggleLoop);
                handleEvents(seekMap, 'click', toggleMap);
                handleEvents(saveThumb, 'click', dlThumb);
                handleEvents(screenShot, 'click', saveSS);
                handleEvents(sidebarMode, 'click', openSidebar);
                handleEvents(fullBrowser, 'click', toggleFullBrowser);
                if (parSets.loopVid && !loopButton.classList.contains('active')) {
                    loopButton.classList.add('active');
                    toggleLoop();
                }
                if (parSets.fullBrs && !fullBrowser.classList.contains('active')) {
                    fullBrowser.classList.add('active');
                    toggleFullBrowser();
                }
            }
            function toggleConsole() {
                page.classList.toggle('player-console');
                set('advOpts', page.classList.contains('player-console'));
            }
            if (window.location.pathname === '/watch' && header && !cnslBtn) {
                cnslBtn = '<button id="console-button" title="' + userLang('ADV_OPTS') + '"></button>';
                cnslBtn = string2HTML(cnslBtn).querySelector('#console-button');
                handleEvents(cnslBtn, 'click', toggleConsole);
                header.appendChild(cnslBtn);
                if (controls) {
                    controls.remove();
                }
                controls = [
                    '<div id="player-console">\n',
                    '    <div id="autoplay-button" class="yt-uix-tooltip' + ((parSets.VID_PLR_ATPL) ? ' active' : '') + '" data-tooltip-text="' + userLang('CNSL_AP') + '"></div>\n',
                    '    <div id="loop-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_RPT') + '"></div>\n',
                    '    <div id="seek-map" class="yt-uix-tooltip" data-tooltip-text="' + (storyBoard ? userLang('CNSL_SKMP') : userLang('CNSL_SKMP_OFF')) + '"' + ((!storyBoard) ? 'style="opacity:0.2;"' : '') + '></div>\n',
                    '    <div id="save-thumbnail-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_SVTH') + '"></div>\n',
                    '    <div id="screenshot-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_SS') + '"></div>\n',
                    '    <div id="sidebar-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_SDBR') + '"' + ((window.opener) ? ' style="display:none"' : '') + '></div>\n',
                    '    <div id="fullbrowser-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_FLBR') + '"></div>\n',
                    '</div>\n'
                ].join('');
                controls = string2HTML(controls).querySelector('div');
                document.getElementById('watch-header').appendChild(controls);
                hookButtons();
                if (parSets.advOpts) {
                    page.classList.add('player-console');
                }
            }
        }
        function generalChanges() {
            var logo,
                channelLink,
                autoplaybar       = document.getElementsByClassName('autoplay-bar')[0],
                descriptionPanel = document.getElementById('action-panel-details');
            function linkIterator(link) {
                if (link !== 'length' && channelLink[link].href.split('/').length < 6 && parSets.GEN_CHN_DFLT_PAGE !== 'default') {
                    channelLink[link].href += '/' + parSets.GEN_CHN_DFLT_PAGE;
                }
            }
            if (parSets.GEN_YT_LOGO_LINK && window.yt && window.yt.config_ && window.yt.config_.LOGGED_IN) {
                logo = document.getElementById('logo-container');
                if (logo && logo.href === window.location.origin + '/') {
                    logo.href = '/feed/subscriptions';
                }
            }
            if (parSets.GEN_REM_APUN && window.location.pathname === '/watch' && autoplaybar) {
                autoplaybar.removeAttribute('class');
                document.getElementsByClassName('checkbox-on-off')[0].remove();
            }
            if (parSets.VID_LAYT_AUTO_PNL && window.location.pathname === '/watch' && descriptionPanel) {
                descriptionPanel.classList.remove('yt-uix-expander-collapsed');
            }
            if (parSets.GEN_SPF_OFF && window.spf && window.spf.dispose) {
                window.spf.dispose();
            }
            if (window.location.href.split(/\/(channel|user|c)\//).length < 2) {
                channelLink = document.querySelectorAll('[href*="/channel/"]');
                Object.keys(channelLink).forEach(linkIterator);
                channelLink = document.querySelectorAll('[href*="/user/"]');
                Object.keys(channelLink).forEach(linkIterator);
            }
            if (window.location.href.split('/channel/').length > 1 && document.documentElement.scrollTop + document.body.scrollTop > 266) {
                document.documentElement.scrollTop = document.body.scrollTop = 0;
            }
            logo = channelLink = autoplaybar = null;
        }
        function initFunctions() {
            customStyles();
            settingsMenu();
            playlistControls();
            playerMode();
            advancedOptions();
            volumeWheel();
            subPlaylist();
            alwaysVisible();
            thumbMod();
            enhancedDetails();
            commentsButton();
            generalChanges();
            clearOrphans();
        }
        function request(event) {
            var url         = event.detail.url,
                previous    = event.detail.previous,
                videoBefore = previous.split('/watch?').length < 2,
                videoAfter  = url.split('/watch?').length > 1,
                listBefore  = previous.split('list=').length > 1,
                listAfter   = url.split('list=').length > 1,
                player      = document.getElementById('movie_player'),
                loaded      = window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded;
            if (player && videoAfter && (listAfter !== listBefore || videoBefore)) {
                if (loaded) {
                    delete window.ytplayer.config.loaded;
                }
                player.remove();
            }
            url = previous = videoBefore = videoAfter = listBefore = listAfter = player = loaded = null;
        }
        function shareApi(originalFunction) {
            return function (ytApi) {
                playerReady(ytApi);
                if (originalFunction) {
                    return originalFunction.apply(this, arguments);
                }
            };
        }
        window.onYouTubePlayerReady = shareApi(window.onYouTubePlayerReady);
        handleEvents(window, 'spfdone', initFunctions);
        handleEvents(window, 'spfrequest', request);
        handleEvents(window, 'readystatechange', initFunctions, true);
        if (isChrome) {
            handleEvents(document.documentElement, 'load', scriptExit, true);
        } else {
            handleEvents(window, 'afterscriptexecute', scriptExit);
        }
        handleEvents(window, 'message', updateSettings);
    }
    function updateSettings(event) {
        event = event.particleSettings || event || defaultSettings;
        event.updateSettings = true;
        window.postMessage(event, '*');
    }
    function initParticle(event) {
        var inject;
        function filterChromeStorage(keys) {
            if (keys.particleSettings && keys.particleSettings.newValue) {
                updateSettings(keys.particleSettings.newValue);
            }
        }
        if (!event && userscript) {
            event = JSON.parse(window.GM_getValue('particleSettings', JSON.stringify(defaultSettings)));
        }
        if (event) {
            event = JSON.stringify(event.particleSettings || event);
            inject = document.createElement('style');
            inject.textContent = particleStyle;
            document.documentElement.appendChild(inject);
            inject = document.createElement('script');
            inject.textContent = '(' + String(particle).replace('defSets   = null,', 'defSets   = ' + JSON.stringify(defaultSettings) + ',').replace('parSets,', 'parSets   = ' + event + ',') + '())';
            document.documentElement.appendChild(inject);
            if (!userscript) {
                if (window.chrome) {
                    window.chrome.storage.onChanged.addListener(filterChromeStorage);
                } else if (!window.chrome) {
                    window.self.port.on('particleSettings', updateSettings);
                }
            }
            inject = null;
        }
    }
    function xhr(details) {
        var request;
        details = details.data;
        function process(xhrResponse) {
            var response = {};
            response[details.id] = userscript ? xhrResponse.response : xhrResponse.target.response;
            window.postMessage(response, '*');
        }
        function settingsHandler(item) {
            var object = (item && item.particleSettings) || JSON.parse(window.GM_getValue('particleSettings', JSON.stringify(defaultSettings)));
            function buildSettings(keys) {
                object[keys] = details.set[keys];
            }
            if (details.set) {
                Object.keys(details.set).forEach(buildSettings);
                if (item) {
                    window.chrome.storage.sync.set({'particleSettings': object});
                } else {
                    window.GM_setValue('particleSettings', JSON.stringify(object));
                }
            } else if (details.replace) {
                if (item) {
                    window.chrome.storage.sync.set({'particleSettings': details.replace});
                } else {
                    window.GM_setValue('particleSettings', JSON.stringify(details.replace));
                }
            }
            if (!item) {
                updateSettings(JSON.parse(window.GM_getValue('particleSettings', JSON.stringify(defaultSettings))));
            }
        }
        if (typeof details === 'object') {
            if (details.id) {
                if (userscript) {
                    window.GM_xmlhttpRequest({
                        onload: process,
                        method: details.method,
                        url   : details.url
                    });
                } else if (!userscript) {
                    request = new XMLHttpRequest();
                    request.onload = process;
                    request.open(details.method, details.url, true);
                    request.send();
                }
            } else if (details.set || details.get || details.replace) {
                if (userscript) {
                    settingsHandler();
                } else if (window.chrome) {
                    window.chrome.storage.sync.get('particleSettings', settingsHandler);
                } else {
                    window.self.port.emit('particleSettings', details);
                }
            }
        }
    }
    if (!userscript) {
        if (window.chrome) {
            window.chrome.storage.sync.get('particleSettings', initParticle);
        } else if (!window.chrome) {
            window.self.port.once('particleSettings', initParticle);
        }
    } else if (userscript) {
        initParticle();
    }
    window.addEventListener('message', xhr);
}());
