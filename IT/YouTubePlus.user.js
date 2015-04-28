// ==UserScript==
// @version     1.8.0
// @name        YouTube +
// @namespace   https://github.com/ParticleCore
// @description YouTube with more freedom
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAJp0lEQVR4XsWZDYwcZRnHf8/M7Nfd7V6v912upYVri7Q0lIJgVYgSABUMqhA0JBJiYrAhmJhIItaERCAxaAxJWlGBNkUQQYWaAMVYQ4mpxfZsaSn1+um117v2rnfX27vbr5l5fG9yl9ub7m6WtIVf8uzOvm9m5v887zP/eZOVI1cuphIWICIIUwgIIIQGYKHAcmAp0AGkCCCt0At0A/tQDiOAgjKNokW/VRWlMg7nRzvwVZTbgWtV6EApj3AS2IXyNvA6cJxyXGjhQsAKhYdBvgY0CKDTJUQAnfoMocwDMcGdgj4Oshn0V8Cuiy28CfgJ8KBCFBTCAsNj4SmZnicl6H3At4DfAY8BfRdD+K3AOlUu53zQ8CE28D3gy8BDwOsXUvgPFJ4CbC4e84HXgEeBJ6gM9sPNjVSGxxSeBKxKBdQS40pptPK5NyskgbfPp+I/An46y7qkuF9DAhQgNF6NeAUVivmhKhlgLWWQI1d0UhLh64r8iRlCuqtDAC1zDKCVz7kfZSMlkEOlhXcAXUAznyyjwCrgECEcLZ3yLz4W0b4PCFhCGVLA0yhfAXS2cJQQX0S5p7rFp9qFL/0diYAqeF6Fa/Ml4E5gM0XYaxrnolAc64FOLiLq+6ht07FxE7ErriS95U2wHSpwKbAB0KKKz2IVcIsSdo4wxcVT/IkJrGh0qoLhc8JPp6KFAiBEFy7CGxnBy+WxI1HUccrddzXo54F3Zio+t2GWDQGf/Sg9KrW11H/nfnL9fXh9fYhtg2VRCnVdrIa5LHjhRRofeIBIW3sQc75xN4mVKxl98w0QKVesAspfUUDB8XWWp9/OR8FXxPdpWfMQjQ9+n75nniH90ovI6dNITU2QhIYqr74frFCQnCrqeXjj43iZLL6CKCWRoBOIA1kA2Xv5IqZYCuwFIlSL5wUV73zzLWLzFwAwdPQoA7/9Dbm//BkZHg4SwLagqP/8TAZxInxqZxcTXV0cufdu7GQKiUapgA98GtgF4PhF/S1KRItSFAUNH0/PAapgKbOYu2gRdU88ycC99zLy3HN4Zvk5exZMAhJUWSAaB8che+AAuRMnkEQNGpkRrXquXyFYWiRcdi9aSIDwM+BRKhF+1Xselqn40re2BBUPc9Z1GXxvB9lNmyhs2QIT44HIsG9XD08DD892FaU9pK2yeEB1JkpR7zgkPrOaoeVXkf7m3eReMAls3QqZHJJIzNxHhBDlzKlNCMDxZ+6aKqGtIhpSXYqoCK3JJInVqzm74ipyu7rIbNxI4d1t4LpBAmjojuU1pLTEK9+iCkIWHkRlQESoNwLjts3w9dfjXH017o4dZIwDFXbuCnxdqqi6gk1AsR2KZimJlHqLoEWf1RKLRmmNRBg1djh2221YHR2cfeQR/P0foGUcRWfryICG9irKICXRMr+rr3i4+jXGtwfWrePMC78Hk4REolXkrwCDnNvjcqx4gapCwdfqa54fPEP/huc59fwGCid7sWpqwXGqTx7tAQn3uP4nlF1VD6dVxV3d0VH6Nmyk/9lnyR47hj3p6ckkqnzUJTMalfALaA8wKNCk4Q7Xc3eoqkDlauOaljj14kv0mq1AtvsgViKOnUqBgu+DAAgQetEh5+YjQhpl50yPz2Q8DPxLlTuYRkLCfALQynbo53L0/+FlTqxfT2b/fqxYHCuVBMD3dda1Zz/foTEpGle6gJNhV5nmFaFIuFLRoqZXWiwLAN9zOfXHVzmxbj1ju3cbwTGsZAoA1ZAWLbnjRcr7wqtMEa44wGaFXuASKqDFPW5J8D3wxhsce+qXpHfuRBzHCJ6qsCrVvNi08vwZgVcoQv7RFtbIj4HHqQZVJB4nvmABY/v2IqpY8QQIoFw4hJ8Dj1CEbD1XeAPoHmB+VXstVfx8ASsaBeE8KGvEg8BVQD9FyLtGuKuKzyzuUXh5xkguMpXf098Fni2ej4ggv25sZqHtkLIsXIU8igIom4D7+GR5HbhLgKiAgzCmyjG3gAB02A7XxuPcHEuwzIkQVSUHKU/YCqzik+FDG26MwaCL8KHn8vdshvdyGXpcFyl2eDsSYWVtHTcb8deLRZOy0IO/5aGTj5EonHCUW4YsDvxbYIsRvCeXJZ/LgersfyQsESxgn+9x0InxKnCdp8c+V3Bv7VRes0VWeI7DxcR2XXzV7gPCXf907AM7bIshxyY94SFTGqftVcI7t3g8TiqVIlZTQyyZpHXOHFY3NTWvPPK/TU1Hjt5mxKOWxYVEfB+74DK0cMG23Z2XfXv7yHBv79AQuXQaL5djcHCQQqGA7/vhhxgSiQQLjB8vXrxY2tra6oz4ZjPWZjtOS96SJAU3OX/P+3dc+l7XF6ITE3EvGkFFOB8C388XcBPxfM+qldt6rrl6s0YjIxFfx3zXPZ3NZvtHR0cH+vr6xg4fPuz39PQwPj4OgNTV1XHDDTfI8uXLE/X19W0i0mkyW2SiUVUTJixAVcTzIpFM7Zmh1gU7u25sPnR4RSSTdXzHwbdsEKrG8jws18ONRb3Byy/b13PdNe+km5v67EIhIao2IIBvWVbWxBkTx1T1kEmib//+/RPbt29XWbNmjdXa2jrHLMVSz/OWAfOACKAzMYNv267atld3eqC9pfvgisbDR5fVjIw0Wa6LIkEbISFHVhD1TSi+7ZCprx86c9nC/aeXLn4/3dpyQnzfNsk45f5mBQpAv0ngg2g0+l/TOsOydu1aR0SaXdddBpigAbAAnxDhBCYjks3WTK5Cqr9/ft2pgUvio+kGO59PBEKUIFEvFs3mknXD6Zbmk+n21p7xxsZT+URifFLsZFT538BIYJG2vVdETsuyZcu46aabIi0tLY0istgksMS0SZuqxotO8svtgVREJ1dALctDlUCM60ZE1Zqa9007BUkiouaXJUasqArnIqFKIyKT7XLKCO4WkYMDAwOD27ZtywtAJBKhs7OTJUuW2OYBTSWTyXYz1iEi7SaJuSZqgaiq2iYktJlTwptGEaWIKZESEjdrzKAmPKBghI6bGFLVftPCx8fGxvqOHz9+tru72zt48CD5fB4hRFNTE6bnaWxspKGhwTFRaxJJmd6a4zjOZKTMReuAmqlViQIOJlTVmoyQKAVURPzJAAJxQF5EcsCEKcyYWelREyNG6Eg6nR4dHh4eN1EwwcmTJwNLLEaKPdwsB0YksVgMIw5VDY7b29sxFw0s09gkmUyG2tpamTdvnmNu6pjzHBGxzSo5xqVMt3iWqk4vtZp5NTbmmUq5quq5BjPm9vf3u0akmuti5jHHwf16e3uDqqpqoMPMYaqOuW4wBvB/9U2tWRGNRkIAAAAASUVORK5CYII=
// @match       https://www.youtube.com/*
// @run-at      document-start
// @downloadURL https://github.com/ParticleCore/Particle/raw/master/IT/YouTubePlus.user.js
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// @noframes
// ==/UserScript==
(function () {
    'use strict';
    var userscript = typeof GM_info === 'object',
        particleStyle = [
            'input[type="checkbox"], input[type="radio"]{\n',
            '    opacity: 0;\n',
            '}\n',
            '#movie_player:not(.ended-mode):not(.ideal-aspect) video, #movie_player:not(.ended-mode):not(.ideal-aspect) .html5-main-video, #movie_player:not(.ended-mode):not(.ideal-aspect) .html5-video-content{\n',
            '   top: 50% !important;\n',
            '   transform: translateY(-50%) !important;\n',
            '}\n',
            ':focus{\n',
            '    outline: none;\n',
            '}\n',
            '::-moz-focus-inner{\n',
            '    border: 0;\n',
            '}\n',
            '.signin-container{\n',
            '    margin-right: 10px;\n',
            '}\n',
            '.ideal-aspect .html5-player-chrome{\n',
            '    background: rgba(27,27,27,0.9) !important;\n',
            '}\n',
            '.ideal-aspect.light-theme .html5-player-chrome{\n',
            '    background: rgba(204,204,204,0.9) !important;\n',
            '}\n',
            '.branded-page-related-channels-item .yt-close{\n',
            '    z-index: 1;\n',
            '}\n',
            '.watch #content.content-alignment, #footer-container, #player.watch-small{\n',
            '    min-width: initial !important;\n',
            '    width: auto;\n',
            '}\n',
            '.content-alignment{\n',
            '    max-width: 1262px;\n',
            '    min-width: initial;\n',
            '    width: auto;\n',
            '}\n',
            '.show-guide #appbar-guide-menu{\n',
            '    border-bottom: 1px solid #E8E8E8;\n',
            '    border-right: 1px solid #E8E8E8;\n',
            '    box-shadow: none;\n',
            '}\n',
            '.not-yt-legacy-css .watch-sidebar{\n',
            '    width: initial;\n',
            '}\n',
            '.content-snap-width-skinny-mode #footer-container{\n',
            '    display: none;\n',
            '}\n',
            '.content-snap-width-skinny-mode #player-api{\n',
            '    width: 100%;\n',
            '}\n',
            '.content-snap-width-skinny-mode #player{\n',
            '    margin-top: 0;\n',
            '}\n',
            '#footer-container{\n',
            '    max-width: initial;\n',
            '}\n',
            '#body-container{\n',
            '    position: relative;\n',
            '}\n',
            '#footer-container{\n',
            '    position: relative;\n',
            '}\n',
            '#watch7-sidebar{\n',
            '    transition: none !important;\n',
            '}\n',
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
            '    padding: 0 1em;\n',
            '    text-shadow: none;\n',
            '    -moz-appearance: none;\n',
            '    -webkit-appearance: none;\n',
            '}\n',
            '#P-content select option{\n',
            '    padding: 0;\n',
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
            '#P-settings option{\n',
            '    color: #000;\n',
            '    text-shadow: none;\n',
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
            '}\n',
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
            '.thumb-wrapper:hover .blacklist, .yt-lockup-thumbnail:hover .blacklist, .yt-pl-thumb:hover .blacklist, .yt-pl-thumb:hover .sidebarmode, .thumb-wrapper:hover .sidebarmode, .yt-lockup-thumbnail:hover .sidebarmode{\n',
            '    display: initial;\n',
            '}\n',
            '#header, #feed-pyv-container, .video-list-item:not(.related-list-item), .pyv-afc-ads-container, .ad-div{\n',
            '    display: none;\n',
            '}\n',
            '#masthead-appbar{\n',
            '    display: block !important;\n',
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
            '#player{\n',
            '    position: relative;\n',
            '    width: 100% !important;\n',
            '}\n',
            '#theater-background{\n',
            '    height: 100% !important;\n',
            '}\n',
            '#player #player-api, #player #player-unavailable{\n',
            '    height: auto !important;\n',
            '    position: relative !important;\n',
            '}\n',
            '#player #movie_player{\n',
            '    bottom: 0 !important;\n',
            '    left: 0 !important;\n',
            '    position: absolute !important;\n',
            '    right: 0 !important;\n',
            '    top: 0 !important;\n',
            '}\n',
            '#movie_player video{\n',
            '    max-height: 100%;\n',
            '    max-width: 100%;\n',
            '    min-height: 100%;\n',
            '    min-width: 100%;\n',
            '}\n',
            '#player-unavailable:not(.hid) + #player-api{\n',
            '    display: none;\n',
            '}\n',
            '.watch-stage-mode #player-unavailable{\n',
            '    float: none;\n',
            '    margin: 0 auto;\n',
            '}\n',
            '.ytp-button-stop{\n',
            '    margin: 0 -10px;\n',
            '    position: relative;\n',
            '    width: 45px !important;\n',
            '    z-index: 1;\n',
            '}\n',
            '.invisible{\n',
            '    display: none;\n',
            '}\n',
            // player console section
            '#watch-header{\n',
            '    position: relative;\n',
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
            '.player-console #console-button{\n',
            '    opacity: 1;\n',
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
            '#audio-only{\n',
            '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAVFBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkwc6KAAAAG3RSTlMAABOb4hrc6AROTQIXOHnZaHdEzu9A9dfz6/cz7bX/AAAAiUlEQVR4Xm3QVw6DQAxF0alMo6aWu/99ZhiHRES8L+tILrJqMck6Z5OppdYrxBxoCTkKxZlv5tgoA0tfSr8AeSUTYJCRAwRTKcGoPhkhVbJgNjJgKzkoGxVwQpMX8ZOQBTqhjtZ4egEIATyu6saeuCj+iQM6ajw99xSusvp3RNc+4e/ndqpUWr8Ba0MPBQ06LVcAAAAASUVORK5CYII=") no-repeat center;\n',
            '    width: 18px;\n',
            '}\n',
            '#screenshot-result{\n',
            '    bottom: 15px;\n',
            '    box-shadow: 0 0 15px #000000;\n',
            '    font-size: 0;\n',
            '    margin: 5px;\n',
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
            '    border-bottom-left-radius: 5px;\n',
            '    color: #F1F1F1;\n',
            '    cursor: pointer;\n',
            '    font-size: 10px;\n',
            '    padding: 5px;\n',
            '    position: absolute;\n',
            '    right: 0;\n',
            '    text-transform: uppercase;\n',
            '    top: 0;\n',
            '}\n',
            '#close-screenshot:hover{\n',
            '    background: rgba(0, 0, 0, 0.8);\n',
            '}\n',
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
            '#podcast-container, #podcast-container:before, #podcast-container:after{\n',
            '    content: "";\n',
            '    height: 100%;\n',
            '    position: absolute;\n',
            '    width: 100%;\n',
            '}\n',
            '#podcast-container{\n',
            '    background-position: center;\n',
            '    background-size: cover;\n',
            '    z-index: 800;\n',
            '}\n',
            '.ended-mode #podcast-container{\n',
            '    opacity: 0;\n',
            '}\n',
            '#podcast-container:before{\n',
            '    background: #000;\n',
            '}\n',
            '#podcast-container:after{\n',
            '    background: inherit;\n',
            '    filter: blur(10px) brightness(50%);\n',
            '    -webkit-filter: blur(10px) brightness(50%);\n',
            '}\n',
            '#podcast-elements{\n',
            '    left: 50%;\n',
            '    position: absolute;\n',
            '    top: 50%;\n',
            '    transform: translate(-50%, -50%);\n',
            '    width: 70%;\n',
            '    z-index: 1;\n',
            '}\n',
            '#podcast-poster{\n',
            '    background: rgba(0, 0, 0, 0.3);\n',
            '    box-sizing: border-box;\n',
            '    float: left;\n',
            '    padding: 5px;\n',
            '    position: relative;\n',
            '    width: 30%;\n',
            '    margin-right: 10px;\n',
            '}\n',
            '#podcast-poster #poster{\n',
            '    background: #000 no-repeat center / cover content-box;\n',
            '    width: 100%;\n',
            '}\n',
            '#podcast-poster #poster:before{\n',
            '    content: "";\n',
            '    display: block;\n',
            '    padding-top: 100%\n',
            '}\n',
            '#podcast-info{\n',
            '    font-weight: bold;\n',
            '    left: 30%;\n',
            '    margin-left: 2%;\n',
            '    text-shadow: 1px 1px 2px #000;\n',
            '    top: 50%;\n',
            '    transform: translateY(-50%);\n',
            '    position: absolute;\n',
            '    width: 70%;\n',
            '}\n',
            '#podcast-info > div:not(:first-child){\n',
            '    font-weight: initial;\n',
            '}\n',
            '#podcast-info div:last-child{\n',
            '    margin-top: 2%;\n',
            '}\n',
            '#podcast-progress{\n',
            '    background: rgba(0, 0, 0, 0.8);\n',
            '    bottom: 10px;\n',
            '    font-size: 10px;\n',
            '    padding: 5px;\n',
            '    position: absolute;\n',
            '    right: 5px;\n',
            '}\n',
            '#podcast-progress div{\n',
            '    display: inline;\n',
            '}\n',
            '#podcast-total{\n',
            '    color: rgba(255, 255, 255, 0.8);\n',
            '}\n',
            '#podcast-current{\n',
            '    color: rgba(255, 255, 255, 0.6);\n',
            '}\n',
            'html:not([data-player-size="fullscreen"]) #player #movie_player.floater{\n',
            '    position: fixed !important;\n',
            '    top: 50% !important;\n',
            '    transform: translateY(-50%);\n',
            '    z-index: 10;\n',
            '}\n',
            'html:not([data-player-size="fullscreen"]).content-snap-width-skinny-mode #player #movie_player.floater{\n',
            '    position: fixed !important;\n',
            '    top: 50px !important;\n',
            '    transform: none;\n',
            '}\n',
            '#subscription-playlist-icon{\n',
            '    margin-right: -20px;\n',
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
            '#subscription-playlist:hover span{\n',
            '    opacity: 1;\n',
            '}\n'
        ].join(''),
        particle = function () {
            var api,
                parSets,
                fullscreen,
                requesting,
                channelId = {},
                eventStock = [],
                usingChrome = typeof window.chrome === 'object',
                styleSheet = document.getElementById('P-style'),
                defaultSettings = {
                    GEN_BTTR_NTF: true,
                    GEN_YT_LOGO_LINK: true,
                    GEN_CMPT_TTLS: true,
                    GEN_BLUE_GLOW: true,
                    GEN_CHN_DFLT_PAGE: 'videos',
                    GEN_SDBR_ON: true,
                    VID_END_SHRE: true,
                    VID_DFLT_QLTY: 'auto',
                    VID_PLST_SEP: true,
                    VID_PLST_ATPL: true,
                    VID_PLST_RVRS: true,
                    VID_PLR_ANTS: true,
                    VID_PLR_CC: true,
                    VID_PLR_ALVIS: true,
                    VID_PLR_ADS: true,
                    VID_PLR_SIZE_MEM: true,
                    VID_PLR_CTRL_VIS: '1',
                    VID_PLR_DYN_SIZE: true,
                    VID_PLR_FIT_WDTH: '1280px',
                    VID_PROG_BAR_CLR: 'red',
                    VID_CTRL_BAR_CLR: 'light',
                    VID_HIDE_COMS: true,
                    VID_POST_TIME: true,
                    VID_VID_CNT: true,
                    VID_DESC_SHRT: true,
                    VID_SDBR_ALGN: '1',
                    VID_TTL_CMPT: true,
                    VID_STP_BTN: true,
                    BLK_ON: true,
                    volLev: false,
                    plApl: false,
                    plRev: false,
                    advOpts: true,
                    blacklist: {}
                },
                lang = {
                    ADV_OPTS: {
                        en: 'Advanced options',
                        'pt-PT': 'Opções avançadas'
                    },
                    SUB_PLST: {
                        en: 'Play recent uploads',
                        'pt-PT': 'Reproduzir vídeos recentes'
                    },
                    GEN_SDBR_ON: {
                        en: 'Enable sidebar mode',
                        'pt-PT': 'Activar modo barra lateral'
                    },
                    SDBR_OPEN: {
                        en: 'Open in sidebar',
                        'pt-PT': 'Abrir barra lateral'
                    },
                    BLCK_ADD: {
                        en: 'Add to blacklist',
                        'pt-PT': 'Adicionar à lista negra'
                    },
                    BLCK_EDIT: {
                        en: 'Edit',
                        'pt-PT': 'Editar'
                    },
                    BLCK_SAVE: {
                        en: 'Save',
                        'pt-PT': 'Guardar'
                    },
                    BLCK_CLSE: {
                        en: 'Close',
                        'pt-PT': 'Fechar'
                    },
                    CNSL_CNSL: {
                        en: 'Console',
                        'pt-PT': 'Consola'
                    },
                    CNSL_AP: {
                        en: 'Autoplay',
                        'pt-PT': 'Início automático'
                    },
                    CNSL_RPT: {
                        en: 'Repeat video',
                        'pt-PT': 'Repetir vídeo'
                    },
                    CNSL_AUDI: {
                        en: 'Audio only',
                        'pt-PT': 'Só áudio'
                    },
                    CNSL_SKMP: {
                        en: 'Seek map',
                        'pt-PT': 'Mapa de procura'
                    },
                    CNSL_SKMP_OFF: {
                        en: 'No thumbs found',
                        'pt-PT': 'Não existem imagens'
                    },
                    CNSL_SKMP_SMAL: {
                        en: 'SMALL',
                        'pt-PT': 'PEQUENO'
                    },
                    CNSL_SKMP_MED: {
                        en: 'MEDIUM',
                        'pt-PT': 'MÉDIO'
                    },
                    CNSL_SKMP_LRGE: {
                        en: 'LARGE',
                        'pt-PT': 'GRANDE'
                    },
                    CNSL_SVTH: {
                        en: 'Save thumbnail',
                        'pt-PT': 'Guardar fundo'
                    },
                    CNSL_SS: {
                        en: 'Take screenshot',
                        'pt-PT': 'Capturar imagem'
                    },
                    CNSL_SS_CLS: {
                        en: 'CLOSE',
                        'pt-PT': 'FECHAR'
                    },
                    CNSL_SDBR: {
                        en: 'Sidebar mode',
                        'pt-PT': 'Modo barra lateral'
                    },
                    PLST_AP: {
                        en: 'Autoplay',
                        'pt-PT': 'Início automático'
                    },
                    PLST_RVRS: {
                        en: 'Reverse',
                        'pt-PT': 'Inverter'
                    },
                    SHOW_CMTS: {
                        en: 'Show comments',
                        'pt-PT': 'Mostrar comentários'
                    },
                    HIDE_CMTS: {
                        en: 'Hide comments',
                        'pt-PT': 'Esconder comentários'
                    },
                    GLB_RSET: {
                        en: 'Reset',
                        'pt-PT': 'Repor'
                    },
                    GLB_SVE: {
                        en: 'Save',
                        'pt-PT': 'Guardar'
                    },
                    GEN: {
                        en: 'General',
                        'pt-PT': 'Geral'
                    },
                    VID: {
                        en: 'Video',
                        'pt-PT': 'Video'
                    },
                    CHN: {
                        en: 'Channels',
                        'pt-PT': 'Canais'
                    },
                    BLK: {
                        en: 'Blacklist',
                        'pt-PT': 'Lista negra'
                    },
                    ABT: {
                        en: 'About',
                        'pt-PT': 'Sobre'
                    },
                    GEN_TTL: {
                        en: 'General settings',
                        'pt-PT': 'Definições gerais'
                    },
                    GEN_GEN: {
                        en: 'General',
                        'pt-PT': 'Geral'
                    },
                    GEN_LYT: {
                        en: 'Layout',
                        'pt-PT': 'Aparência'
                    },
                    GEN_YT_LOGO_LINK: {
                        en: 'YouTube logo redirects to subscriptions',
                        'pt-PT': 'Logotipo do Youtube redirecciona para as subscrições'
                    },
                    GEN_REM_APUN: {
                        en: 'Remove autoplay up next',
                        'pt-PT': 'Remover reprodução automática do vídeo a seguir'
                    },
                    GEN_SPF_OFF: {
                        en: 'Disable SPF',
                        'pt-PT': 'Desactivar SPF'
                    },
                    GEN_HIDE_FTR: {
                        en: 'Hide footer',
                        'pt-PT': 'Esconder rodapé'
                    },
                    GEN_BLUE_GLOW: {
                        en: 'Remove blue glow around clicked buttons',
                        'pt-PT': 'Retirar brilho azul em torno dos botões clicados'
                    },
                    GEN_HDE_RECM_SDBR: {
                        en: 'Hide recommended channels sidebar',
                        'pt-PT': 'Esconder barra lateral de canais recomendados'
                    },
                    GEN_HDE_SRCH_SDBR: {
                        en: 'Hide search results sidebar',
                        'pt-PT': 'Esconder barra lateral nos resultados de pesquisa'
                    },
                    GEN_HDE_CHN_SDBR: {
                        en: 'Hide channel sidebar',
                        'pt-PT': 'Esconder barra lateral dos canais'
                    },
                    GEN_CMPT_TTLS: {
                        en: 'Compact titles in feeds',
                        'pt-PT': 'Títulos compactos nas listas'
                    },
                    GEN_DSB_HVRC: {
                        en: 'Disable hovercards',
                        'pt-PT': 'Desactivar hovercards'
                    },
                    GEN_BTTR_NTF: {
                        en: 'Improved blue notification box',
                        'pt-PT': 'Caixa de notificação azul melhorada'
                    },
                    VID_TTL: {
                        en: 'Video settings',
                        'pt-PT': 'Definições de vídeo'
                    },
                    VID_PLR: {
                        en: 'Player settings',
                        'pt-PT': 'Definições do reproductor'
                    },
                    VID_PLR_LYT: {
                        en: 'Player layout',
                        'pt-PT': 'Aspecto do reproductor'
                    },
                    VID_STP_BTN: {
                        en: 'Add stop button to the player',
                        'pt-PT': 'Adicionar botão de parar ao reproductor'
                    },
                    VID_DFLT_QLTY: {
                        en: 'Default video quality:',
                        'pt-PT': 'Qualidade de vídeo padrão:'
                    },
                    VID_DFLT_QLTY_AUTO: {
                        en: 'Auto',
                        'pt-PT': 'Auto'
                    },
                    VID_DFLT_QLTY_TNY: {
                        en: '144p'
                    },
                    VID_DFLT_QLTY_SML: {
                        en: '240p'
                    },
                    VID_DFLT_QLTY_MDM: {
                        en: '360p'
                    },
                    VID_DFLT_QLTY_LRG: {
                        en: '480p'
                    },
                    VID_DFLT_QLTY_720: {
                        en: '720p'
                    },
                    VID_DFLT_QLTY_1080: {
                        en: '1080p'
                    },
                    VID_DFLT_QLTY_1440: {
                        en: '1440p'
                    },
                    VID_DFLT_QLTY_ORIG: {
                        en: '2160p'
                    },
                    VID_PLR_ALVIS: {
                        en: 'Always visible',
                        'pt-PT': 'Sempre visível'
                    },
                    VID_PLR_ATPL: {
                        en: 'Autoplay videos',
                        'pt-PT': 'Iniciar vídeos automáticamente'
                    },
                    VID_PROG_BAR_CLR: {
                        en: 'Progress bar color:',
                        'pt-PT': 'Cor da barra de progresso:'
                    },
                    VID_PROG_BAR_CLR_RED: {
                        en: 'Red',
                        'pt-PT': 'Vermelha'
                    },
                    VID_PROG_BAR_CLR_WHT: {
                        en: 'White',
                        'pt-PT': 'Branca'
                    },
                    VID_CTRL_BAR_CLR: {
                        en: 'Control bar color:',
                        'pt-PT': 'Cor da barra de controlos:'
                    },
                    VID_CTRL_BAR_CLR_DARK: {
                        en: 'Dark',
                        'pt-PT': 'Escura'
                    },
                    VID_CTRL_BAR_CLR_LGHT: {
                        en: 'Light',
                        'pt-PT': 'Clara'
                    },
                    VID_LAYT: {
                        en: 'Layout',
                        'pt-PT': 'Aparência'
                    },
                    VID_VID_CNT: {
                        en: 'Show link with number of uploaded videos',
                        'pt-PT': 'Mostrar link com número de vídeos carregados'
                    },
                    VID_POST_TIME: {
                        en: 'Show how long the video has been published',
                        'pt-PT': 'Mostrar há quanto tempo o vídeo foi publicado'
                    },
                    VID_HIDE_DETLS: {
                        en: 'Hide video details',
                        'pt-PT': 'Esconder detalhes do vídeo'
                    },
                    VID_HIDE_COMS: {
                        en: 'Hide comment section',
                        'pt-PT': 'Esconder secção de comentários'
                    },
                    VID_END_SHRE: {
                        en: 'Disable share panel when video ends',
                        'pt-PT': 'Desactivar painel de partilha quando o video acaba'
                    },
                    VID_PLST: {
                        en: 'Playlists',
                        'pt-PT': 'Listas'
                    },
                    VID_PLST_SEP: {
                        en: 'Separate playlist from player',
                        'pt-PT': 'Separar lista de reprodução do reproductor'
                    },
                    VID_PLST_ATPL: {
                        en: 'Enable playlist autoplay control',
                        'pt-PT': 'Activar controlo de início automático das listas'
                    },
                    VID_PLST_RVRS: {
                        en: 'Enable reverse playlist control',
                        'pt-PT': 'Activar controlo de inversão das listas'
                    },
                    VID_PLR_SIZE_MEM: {
                        en: 'Memorize player mode',
                        'pt-PT': 'Memorizar tamanho do reproductor'
                    },
                    VID_VOL_WHEEL: {
                        en: 'Change volume with mouse wheel',
                        'pt-PT': 'Alterar nível de som com a roda do rato'
                    },
                    VID_PLR_VOL_MEM: {
                        en: 'Memorize audio volume',
                        'pt-PT': 'Memorizar volume de audio'
                    },
                    VID_PLR_ADS: {
                        en: 'Disable advertisements',
                        'pt-PT': 'Desactivar publicidades'
                    },
                    VID_SUB_ADS: {
                        en: 'Enable advertisements only in videos from subscribed channels',
                        'pt-PT': 'Activar publicidades só para vídeos de canais subscritos'
                    },
                    VID_PLR_ANTS: {
                        en: 'Disable annotations',
                        'pt-PT': 'Desactivar notas'
                    },
                    VID_PLR_DASH: {
                        en: 'Disable DASH playback',
                        'pt-PT': 'Desactivar reprodução DASH'
                    },
                    VID_PLR_CC: {
                        en: 'Disable subtitles',
                        'pt-PT': 'Desactivar legendas'
                    },
                    VID_PLR_CTRL_VIS: {
                        en: 'Player bar visibility:',
                        'pt-PT': 'Visibilidade da barra do reproductor:'
                    },
                    VID_PLR_CTRL_VIS_HIDE_ALL: {
                        en: 'Hide',
                        'pt-PT': 'Esconder'
                    },
                    VID_PLR_CTRL_VIS_HIDE_PROG: {
                        en: 'Default',
                        'pt-PT': 'Predefinido'
                    },
                    VID_PLR_FIT: {
                        en: 'Fit to page in theater mode',
                        'pt-PT': 'Ajustar na página no modo cinema'
                    },
                    VID_PLR_FIT_WDTH: {
                        en: 'Fit to page maximum width:',
                        'pt-PT': 'Largura máxima do ajuste na página:'
                    },
                    VID_PLR_DYN_SIZE: {
                        en: 'Disable dynamic player size in default view',
                        'pt-PT': 'Desactivar tamanho dinâmico do reproductor na vista predefinida'
                    },
                    VID_DESC_SHRT: {
                        en: 'Short video description buttons',
                        'pt-PT': 'Botões curtos na descrição do vídeo'
                    },
                    VID_TTL_CMPT: {
                        en: 'Compact title in video description',
                        'pt-PT': 'Título compacto na descrição do vídeo'
                    },
                    VID_SDBR_ALGN: {
                        en: 'Sidebar mode alignment',
                        'pt-PT': 'Alinhar modo barra lateral'
                    },
                    VID_SDBR_ALGN_NONE: {
                        en: 'None',
                        'pt-PT': 'Nenhum'
                    },
                    VID_SDBR_ALGN_LEFT: {
                        en: 'Left',
                        'pt-PT': 'Esquerda'
                    },
                    VID_SDBR_ALGN_RIGHT: {
                        en: 'Right',
                        'pt-PT': 'Direita'
                    },
                    GEN_CHN_DFLT_PAGE: {
                        en: 'Default channel page:',
                        'pt-PT': 'Página de canal predefinida:'
                    },
                    GEN_CHN_DFLT_PAGE_DFLT: {
                        en: 'Default',
                        'pt-PT': 'Padrão'
                    },
                    GEN_CHN_DFLT_PAGE_VID: {
                        en: 'Videos',
                        'pt-PT': 'Vídeos'
                    },
                    GEN_CHN_DFLT_PAGE_PL: {
                        en: 'Playlists',
                        'pt-PT': 'Listas de reprodução'
                    },
                    GEN_CHN_DFLT_PAGE_CHN: {
                        en: 'Channels',
                        'pt-PT': 'Canais'
                    },
                    GEN_CHN_DFLT_PAGE_DISC: {
                        en: 'Discussion',
                        'pt-PT': 'Discussão'
                    },
                    GEN_CHN_DFLT_PAGE_ABT: {
                        en: 'About',
                        'pt-PT': 'Acerca de'
                    },
                    BLK_TTL: {
                        en: 'Blacklist settings',
                        'pt-PT': 'Definições da lista negra'
                    },
                    BLK_BLK: {
                        en: 'Blacklist',
                        'pt-PT': 'Lista negra'
                    },
                    BLK_ON: {
                        en: 'Enable blacklist',
                        'pt-PT': 'Activar lista negra'
                    },
                    ABT_TTL: {
                        en: 'Information and useful links',
                        'pt-PT': 'Informação e ligações úteis'
                    },
                    ABT_INFO: {
                        en: 'Official pages',
                        'pt-PT': 'Páginas oficiais'
                    },
                    ABT_LNK_GHB: {
                        en: 'GitHub'
                    },
                    ABT_LNK_GRFK: {
                        en: 'Greasy Fork'
                    },
                    ABT_LNK_OPNU: {
                        en: 'OpenUserJS'
                    },
                    ABT_PRBL: {
                        en: 'Report a problem',
                        'pt-PT': 'Reportar problema'
                    },
                    ABT_LNK_PRBL: {
                        en: 'Click here for instructions',
                        'pt-PT': 'Clique aqui para instruções'
                    }
                };
            if (Object.keys(parSets).length < 1) {
                parSets = defaultSettings;
            }
            function string2HTML(string) {
                var html = new window.DOMParser();
                return html.parseFromString(string, 'text/html');
            }
            function updateSettings(event) {
                if (event.data.updateSettings) {
                    parSets = event.data;
                }
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
            function handleEvents(type, target, event, call, capture) {
                var name = call.name;
                capture = !!capture;
                if (target.eventStock && target.eventStock[event] && target.eventStock[event][name]) {
                    target.removeEventListener(event, target.eventStock[event][name], capture);
                    delete target.eventStock[event][name];
                }
                if (type === 'add') {
                    target.addEventListener(event, call, capture);
                    target.eventStock = target.eventStock || {};
                    target.eventStock[event] = target.eventStock[event] || {};
                    target.eventStock[event][name] = call;
                    if ((String(target)).split('HTML').length > 1) {
                        eventStock.push(target);
                    }
                }
            }
            function userLang(placeHolder) {
                var ytlang = (window.yt && window.yt.config_ && window.yt.config_.FEEDBACK_LOCALE_LANGUAGE) || 'en';
                if (lang[placeHolder][ytlang]) {
                    return lang[placeHolder][ytlang];
                }
                return lang[placeHolder].en;
            }
            function clearOrphans() {
                var i,
                    remove = [];
                i = eventStock.length;
                while (i) {
                    i -= 1;
                    if (!document.contains(eventStock[i])) {
                        eventStock[i].remove();
                        remove.push(i);
                    }
                }
                i = remove.length;
                while (i) {
                    i -= 1;
                    eventStock.splice(remove[i], 1);
                }
            }
            function timeConv(time) {
                var days = time / 86400,
                    hours = (time % 86400) / 3600,
                    minutes = (time % 3600) / 60,
                    seconds = (time % 3600) % 60;
                function zero(trim) {
                    return ('0' + Math.floor(trim)).slice(-2);
                }
                time = zero(days) + ':' + zero(hours) + ':' + zero(minutes) + ':' + zero(seconds);
                time = time.replace(/^0(0:(0(0:(0)?)?)?)?/, '');
                return time;
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
                                list = parSets.blacklist;
                            function buildList(ytid) {
                                button += '<div class="blacklist" data-ytid="' + ytid + '"><button class="close"></button>' + list[ytid] + '</div>\n';
                            }
                            if (Object.keys(list).length > 0) {
                                Object.keys(list).forEach(buildList);
                            }
                            return button;
                        },
                        htEl = {
                            title: function (content, tag) {
                                return '<' + tag + '>' + userLang(content) + '</' + tag + '>\n';
                            },
                            select: function (id, list) {
                                var select = '<label for="' + id + '">' + userLang(id) + '</label>\n' +
                                    '<select id="' + id + '">\n';
                                function keysIterator(keys) {
                                    select += '<option';
                                    if (parSets[id] === list[keys]) {
                                        select += ' selected="true"';
                                    }
                                    select += ' value="' + list[keys] + '">' + userLang(keys) + '</option>\n';
                                }
                                Object.keys(list).forEach(keysIterator);
                                select += '</select>\n';
                                return select;
                            },
                            radio: function (name, list) {
                                var radio = '<label>' + userLang(name) + '</label>\n';
                                function keysIterator(keys) {
                                    radio += '<input id="' + keys + '" name="' + name + '" value="' + list[keys] + '" type="radio"';
                                    if (parSets[name] === list[keys]) {
                                        radio += ' checked="true"';
                                    }
                                    radio += '>\n<label for="' + keys + '">' + userLang(keys) + '</label>';
                                }
                                Object.keys(list).forEach(keysIterator);
                                return radio;
                            },
                            input: function (id, type, placeholder, size) {
                                var input = '<input id="' + id + '" type="' + type + '"';
                                if (placeholder) {
                                    input += ' placeholder="' + placeholder + '" size="' + size + '"';
                                    if (typeof parSets[id] === 'string') {
                                        input += ' value="' + parSets[id] + '"';
                                    }
                                } else if (parSets[id] === true) {
                                    input += ' checked="true"';
                                }
                                input += '>\n<label for="' + id + '">' + userLang(id) + '</label>\n';
                                return input;
                            }
                        },
                        menus = {
                            setMenu: [
                                '<div id="P-settings">\n',
                                '    <div id="P-container">\n',
                                '        <div id="P-sidebar">\n',
                                '            <ul id="P-sidebar-list">\n',
                                '                <li id="GEN" class="selected">' + userLang('GEN') + '</li>\n',
                                '                <li id="VID">' + userLang('VID') + '</li>\n',
                                '                <li id="BLK">' + userLang('BLK') + '</li>\n',
                                '                <li id="ABT">' + userLang('ABT') + '</li>\n',
                                '            </ul>\n',
                                '        </div>\n',
                                '    </div>\n',
                                '</div>\n'
                            ].join(''),
                            GEN: [
                                '<div id="P-content">\n',
                                '    <div class="P-header">\n',
                                '        <button class="P-save">' + userLang('GLB_SVE') + '</button>\n',
                                '        <button class="P-reset">' + userLang('GLB_RSET') + '</button>\n',
                                htEl.title('GEN_TTL', 'h2'),
                                '    </div>\n',
                                '    <hr class="P-horz">\n',
                                htEl.title('GEN_GEN', 'h3'),
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
                            VID: [
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
                                htEl.input('VID_STP_BTN', 'checkbox'),
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
                                htEl.select('VID_PLR_CTRL_VIS', {
                                    'VID_PLR_CTRL_VIS_HIDE_PROG': '0',
                                    'VID_PLR_CTRL_VIS_HIDE_ALL': '1'
                                }),
                                '    <br>',
                                htEl.title('VID_PLST', 'h3'),
                                htEl.input('VID_PLST_SEP', 'checkbox'),
                                htEl.input('VID_PLST_ATPL', 'checkbox'),
                                htEl.input('VID_PLST_RVRS', 'checkbox'),
                                htEl.title('VID_LAYT', 'h3'),
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
                                htEl.input('VID_HIDE_COMS', 'checkbox'),
                                '</div>\n'
                            ].join(''),
                            BLK: [
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
                            ABT: [
                                '<div id="P-content">\n',
                                '    <div class="P-header">\n',
                                htEl.title('ABT_TTL', 'h2'),
                                '    </div>\n',
                                '    <hr class="P-horz">\n',
                                htEl.title('ABT_INFO', 'h3'),
                                '    <div>\n',
                                '        <a href="https://github.com/ParticleCore/Particle/issues">GitHub</a>\n',
                                '    </div>\n',
                                '    <div>\n',
                                '        <a href="https://greasyfork.org/en/scripts/">Greasy Fork</a>\n',
                                '    </div>\n',
                                '    <div>\n',
                                '        <a href="http://openuserjs.org/scripts/ParticleCore/">OpenUserJS</a>\n',
                                '    </div>\n',
                                htEl.title('ABT_PRBL', 'h3'),
                                '    <div>\n',
                                '        <a href="https://github.com/ParticleCore/Particle/issues">Click here for instructions</a>\n',
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
                    }
                    function saveSettings(salt) {
                        var value,
                            notification = document.getElementById('appbar-main-guide-notification-container'),
                            navId = document.getElementsByClassName('selected')[0].id,
                            savedSets = parSets,
                            userSets = document.getElementById('P-content').querySelectorAll('[id^="' + navId + '"]'),
                            length = userSets.length;
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
                            window.setTimeout(function () {
                                document.body.classList.remove('show-guide-button-notification');
                            }, 2000);
                        }
                    }
                    if (event.target.classList.contains('P-save')) {
                        saveSettings();
                    } else if (event.target.classList.contains('P-reset')) {
                        window.postMessage({replace: defaultSettings}, '*');
                        settingsButton.click();
                        settingsButton.click();
                    } else if (event.target.classList.contains('close')) {
                        remBlackList();
                    } else if (event.target.id === 'blacklist-edit' || event.target.id === 'blacklist-save' || event.target.id === 'blacklist-close') {
                        manageBlackList(event.target);
                    } else if (event.target.id === 'P-container' || event.target.id === 'P-settings') {
                        event = (event.target.id === 'P-settings') ? event.target : event.target.parentNode;
                        event.remove();
                    } else if (event.target.parentNode.id === 'P-sidebar-list') {
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
                        handleEvents('add', pWrapper, 'click', navigateSettings);
                    }
                    document[usingChrome ? 'body' : 'documentElement'].scrollTop = 0;
                }
                buttonNotif = document.getElementsByClassName('notifications-container')[0];
                buttonsSection = document.getElementById('yt-masthead-user') || document.getElementById('yt-masthead-signin');
                if (buttonsSection && !document.getElementById('P')) {
                    settingsButton = document.createElement('button');
                    settingsButton.id = 'P';
                    settingsButton.title = 'YouTube+ settings';
                    handleEvents('add', settingsButton, 'click', settingsTemplate);
                    if (buttonNotif) {
                        buttonsSection.insertBefore(settingsButton, buttonNotif);
                    } else {
                        buttonsSection.appendChild(settingsButton);
                    }
                }
            }
            function customStyles() {
                var href = window.location.href,
                    sidebar = document.getElementsByClassName('branded-page-v2-secondary-col')[0];
                if (sidebar && ((parSets.GEN_HDE_RECM_SDBR && href.split('/feed/').length > 1) || (parSets.GEN_HDE_SRCH_SDBR && href.split('/results').length > 1) || (parSets.GEN_HDE_CHN_SDBR && href.split(/\/(channel|user|c)\//).length > 1))) {
                    sidebar.remove();
                }
                if (href.split('/results?').length > 1 && sidebar && sidebar.querySelectorAll('*').length < 10) {
                    sidebar.remove();
                }
                if (document.readyState !== 'interactive') {
                    return;
                }
                if (parSets.VID_PLR_CTRL_VIS) {
                    styleSheet.textContent +=
                        '#watch7-sidebar{\n' +
                        '    margin-top: ' + (
                            (parSets.VID_PLR_CTRL_VIS < 1 && '-390px') ||
                            (parSets.VID_PLR_CTRL_VIS > 0 && '-360px')
                        ) + ';\n' +
                        '}\n' +
                        '#watch-appbar-playlist{\n' +
                        '    height: ' + (
                            (parSets.VID_PLR_CTRL_VIS < 1 && '390px') ||
                            (parSets.VID_PLR_CTRL_VIS > 0 && '360px')
                        ) + ';\n' +
                        '}\n' +
                        '@media screen and (min-width:1294px) and (min-height:630px){\n' +
                        '    #watch-appbar-playlist{\n' +
                        '        height: ' + (
                            (parSets.VID_PLR_CTRL_VIS < 1 && '510px') ||
                            (parSets.VID_PLR_CTRL_VIS > 0 && '480px')
                        ) + ';\n' +
                        '    }\n' +
                        '}\n' +
                        '@media screen and (min-width:1720px) and (min-height:980px){\n' +
                        '    #watch-appbar-playlist{\n' +
                        '    height: ' + (
                            (parSets.VID_PLR_CTRL_VIS < 1 && '750px') ||
                            (parSets.VID_PLR_CTRL_VIS > 0 && '720px')
                        ) + ';\n' +
                        '    }\n' +
                        '}\n' +
                        '#player #player-api:before, #player #player-unavailable:before{\n' +
                        '    content: "";\n' +
                        '    display: block;\n' +
                        '    padding-top: calc(56.25% + ' + ((parSets.VID_PLR_CTRL_VIS > 0) ? 0 : 30) + 'px);\n' +
                        '}\n';
                }
                if (parSets.VID_DESC_SHRT) {
                    styleSheet.textContent +=
                        '#watch8-secondary-actions{\n' +
                        '    left: 0 !important;\n' +
                        '}\n' +
                        '#watch8-secondary-actions .yt-uix-button-content{\n' +
                        '    display: none;\n' +
                        '}\n' +
                        '#watch8-secondary-actions button{\n' +
                        '    padding: 0;\n' +
                        '}\n';
                }
                if (parSets.VID_TTL_CMPT) {
                    styleSheet.textContent +=
                        '#watch7-headline #eow-title{\n' +
                        '    display: block;\n' +
                        '    overflow: hidden;\n' +
                        '    text-overflow: ellipsis;\n' +
                        '    white-space: nowrap;\n' +
                        '}\n';
                }
                if (parSets.GEN_CMPT_TTLS) {
                    styleSheet.textContent +=
                        '.feed-item-container .yt-ui-ellipsis, .yt-shelf-grid-item .yt-ui-ellipsis{\n' +
                        '    white-space: nowrap !important;\n' +
                        '    display: inherit !important;\n' +
                        '}\n';
                }
                if (parSets.GEN_BLUE_GLOW) {
                    styleSheet.textContent +=
                        '.yt-uix-button:focus, .yt-uix-button:focus:hover{\n' +
                        '    box-shadow: initial !important;\n' +
                        '}\n';
                }
                if (parSets.GEN_BTTR_NTF) {
                    styleSheet.textContent +=
                        '#appbar-main-guide-notification-container{\n' +
                        '    box-shadow: 0 1px 2px #eee inset;\n' +
                        '    display: inline-block;\n' +
                        '    top: 1px !important;\n' +
                        '    left: auto !important;\n' +
                        '    margin-left: 79px !important;\n' +
                        '    opacity: 0;\n' +
                        '    overflow: hidden !important;\n' +
                        '    position: absolute !important;\n' +
                        '    visibility: hidden;\n' +
                        '    width: auto;\n' +
                        '    z-index: 1;\n' +
                        '}\n' +
                        '#appbar-main-guide-notification-container .appbar-guide-notification{\n' +
                        '    height: 27px !important;\n' +
                        '}\n' +
                        '.show-guide-button-notification #appbar-main-guide-notification-container{\n' +
                        '    visibility: visible;\n' +
                        '    opacity: 1;\n' +
                        '}\n' +
                        '#appbar-main-guide-notification-container{\n' +
                        '    transition: visibility .3s linear .1s, opacity .3s linear .1s;\n' +
                        '}\n' +
                        '#appbar-guide-button-notification-check{\n' +
                        '    display: none !important;\n' +
                        '}\n' +
                        '.show-guide-button-notification #appbar-guide-button{\n' +
                        '    opacity: 1 !important;\n' +
                        '}\n';
                }
                if (parSets.GEN_HIDE_FTR) {
                    styleSheet.textContent +=
                        '#footer-container{\n' +
                        '    visibility: hidden;\n' +
                        '}\n' +
                        '#body-container{\n' +
                        '    padding-bottom: initial;\n' +
                        '}\n';
                }
                if (parSets.VID_PLST_SEP) {
                    styleSheet.textContent +=
                        '#watch-appbar-playlist{\n' +
                        '    margin-left: 0 !important;\n' +
                        '}\n';
                }
                if (parSets.VID_PLR_FIT) {
                    styleSheet.textContent +=
                        '#player:not(.watch-small):not(.watch-tiny) #player-api, #player:not(.watch-small):not(.watch-tiny) #player-unavailable{\n' +
                        '    max-width: ' + parSets.VID_PLR_FIT_WDTH + ' !important;\n' +
                        '    width: 100% !important;\n' +
                        '}\n';
                }
                if (parSets.GEN_DSB_HVRC) {
                    styleSheet.textContent +=
                        'iframe[src*="hovercard"]{\n' +
                        '    display: none !important;\n' +
                        '}\n';
                }
                if (parSets.VID_HIDE_DETLS) {
                    styleSheet.textContent +=
                        '#action-panel-details{\n' +
                        '    display: none;\n' +
                        '}\n';
                }
                if (parSets.VID_HIDE_COMS) {
                    styleSheet.textContent +=
                        '#watch-discussion:not(.show){\n' +
                        '    height: 0;\n' +
                        '    margin-bottom: 0;\n' +
                        '    margin-top: 0;\n' +
                        '    opacity: 0;\n' +
                        '    overflow: hidden;\n' +
                        '    padding-bottom: 0;\n' +
                        '    padding-top: 0;\n' +
                        '}\n' +
                        '.content-snap-width-skinny-mode #P-show-comments{\n' +
                        '    display: none;\n' +
                        '}\n' +
                        '#P-show-comments button{\n' +
                        '    border-top: none;\n' +
                        '    padding-top: 2px;\n' +
                        '}\n';
                }
                if (parSets.VID_PLR_DYN_SIZE) {
                    styleSheet.textContent +=
                        'html:not(.content-snap-width-skinny-mode) .watch-non-stage-mode #watch7-container:not(.watch-wide) #watch7-content{\n' +
                        '    width: 640px !important;\n' +
                        '}\n' +
                        'html:not(.content-snap-width-skinny-mode) .watch-non-stage-mode #content.content-alignment, html:not(.content-snap-width-skinny-mode) .watch-non-stage-mode #player.watch-small{\n' +
                        '    max-width: 1066px !important;\n' +
                        '}\n' +
                        'html:not(.content-snap-width-skinny-mode) .watch-non-stage-mode #watch7-container:not(.watch-wide) #watch7-preview{\n' +
                        '    margin-top: -750px !important;\n' +
                        '}\n' +
                        'html:not(.content-snap-width-skinny-mode) .watch-non-stage-mode #watch7-container:not(.watch-wide) #watch7-sidebar{\n' +
                        '    margin-left: 650px !important;\n' +
                        '    margin-top: ' + (
                            (parSets.VID_PLR_CTRL_VIS > 0 && '-360px') ||
                            (parSets.VID_PLR_CTRL_VIS < 1 &&  '-390px')
                        ) + ';\n' +
                        '    top: 0;\n' +
                        '}\n' +
                        'html:not(.content-snap-width-skinny-mode) .watch-non-stage-mode .player-width{\n' +
                        '    width: 640px !important;\n' +
                        '}\n' +
                        'html:not(.content-snap-width-skinny-mode) .watch-non-stage-mode .player-height{\n' +
                        '    height: 390px !important;\n' +
                        '}\n' +
                        'html:not(.content-snap-width-skinny-mode) .watch-non-stage-mode #watch7-container:not(.watch-wide) .watch-playlist{\n' +
                        '    height: ' + (
                            (parSets.VID_PLR_CTRL_VIS > 0 && '360px') ||
                            (parSets.VID_PLR_CTRL_VIS < 1 && '390px')
                        ) + ' !important;\n' +
                        '}\n';
                }
                if (!parSets.VID_PLR_DYN_SIZE) {
                    styleSheet.textContent +=
                        'html:not(.content-snap-width-skinny-mode) #watch7-container:not(.watch-wide) #watch7-sidebar{\n' +
                        '    margin-top: ' + (
                            (parSets.VID_PLR_CTRL_VIS > 0 && '-360px') ||
                            (parSets.VID_PLR_CTRL_VIS < 1 && '-390px')
                        ) + ';\n' +
                        '}\n' +
                        'html:not(.content-snap-width-skinny-mode) #watch7-container:not(.watch-wide) #watch-appbar-playlist{\n' +
                        '    height: ' + (
                            (parSets.VID_PLR_CTRL_VIS > 0 && '360px') ||
                            (parSets.VID_PLR_CTRL_VIS < 1 && '390px')
                        ) + ';\n' +
                        '}\n' +
                        '@media screen and (min-width:1294px) and (min-height:630px){\n' +
                        '    html:not(.content-snap-width-skinny-mode) #watch7-container:not(.watch-wide) #watch-appbar-playlist{\n' +
                        '        height: ' + (
                            (parSets.VID_PLR_CTRL_VIS > 0 && '480px') ||
                            (parSets.VID_PLR_CTRL_VIS < 1 && '510px')
                        ) + ';\n' +
                        '    }\n' +
                        '}\n' +
                        '@media screen and (min-width:1720px) and (min-height:980px){\n' +
                        '    html:not(.content-snap-width-skinny-mode) #watch7-container:not(.watch-wide) #watch-appbar-playlist{\n' +
                        '    height: ' + (
                            (parSets.VID_PLR_CTRL_VIS > 0 && '720px') ||
                            (parSets.VID_PLR_CTRL_VIS < 1 && '750px')
                        ) + ';\n' +
                        '    }\n' +
                        '}\n';
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
                    }
                    function getPLInfo(details) {
                        details = details.data;
                        if (details.getPLInfo) {
                            handleEvents('remove', window, 'message', getPLInfo);
                            details = JSON.parse(details.getPLInfo);
                            details = details.body && details.body.content && details.body.content.match(/class="pl-header-details">([\w\W]*?)<\/ul>/)[1];
                            details = details && details.match(/<li>([\w\W]*?)<\/li>/g)[1];
                            if (details) {
                                link.className = 'spf-link';
                                link.textContent = channelId[user.getAttribute('data-ytid')] = details.replace(/<\/?li>/g, '').replace('&#39;', '\'');
                                videoCounter();
                            }
                        }
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
                            window.postMessage({
                                method: 'GET',
                                url: window.location.origin + '/playlist?spf=navigate&list=' + user.getAttribute('data-ytid').replace('UC', 'UU'),
                                id: 'getPLInfo'
                            }, '*');
                            handleEvents('add', window, 'message', getPLInfo);
                        }
                    }
                }
                function publishedTime() {
                    var watchTime = document.getElementsByClassName('watch-time-text')[0];
                    function getCHInfo(details) {
                        details = details.data;
                        if (details.getCHInfo) {
                            handleEvents('remove', window, 'message', getCHInfo);
                            if (watchTime.textContent.split('·').length < 2) {
                                details = JSON.parse(details.getCHInfo);
                                details = details.body && details.body.content && details.body.content.match(/yt-lockup-meta-info">\n<li>([\w\W]*?)<\/ul/);
                                if (details) {
                                    watchTime.textContent += ' · ' + details[1].split('</li><li>')[0];
                                }
                            }
                        }
                    }
                    if (watchTime && window.ytplayer.config) {
                        window.postMessage({
                            method: 'GET',
                            url: window.location.origin + '/channel/' + window.ytplayer.config.args.ucid + '/search?query="' + window.ytplayer.config.args.video_id + '"&spf=navigate',
                            id: 'getCHInfo'
                        }, '*');
                        handleEvents('add', window, 'message', getCHInfo);
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
                if (comments && !document.getElementById('P-show-comments') && parSets.VID_HIDE_COMS) {
                    wrapper =
                        '<div id="P-show-comments" class="yt-card">\n' +
                        '    <button class="yt-uix-button yt-uix-button-expander">' + userLang('SHOW_CMTS') + '</button>\n' +
                        '</div>\n';
                    wrapper = string2HTML(wrapper).querySelector('#P-show-comments');
                    handleEvents('add', wrapper, 'click', showComments);
                    comments.parentNode.insertBefore(wrapper, comments);
                }
            }
            function playerMode() {
                var cookie = document.cookie,
                    pageElement = document.getElementById('page'),
                    playerElement = document.getElementById('player');
                if (parSets.VID_PLR_SIZE_MEM && parSets.theaterMode) {
                    if (window.navigator.cookieEnabled && (cookie.split('wide=0').length > 1 || cookie.split('wide=1').length < 2)) {
                        document.cookie = 'wide=1; path=/';
                    }
                    if (playerElement && window.location.pathname === '/watch') {
                        pageElement.className = pageElement.className.replace('non-', '');
                        playerElement.className = playerElement.className.replace('small', 'large');
                        document.getElementById('watch7-container').className = 'watch-wide';
                    }
                } else if (parSets.VID_PLR_SIZE_MEM && !parSets.theaterMode) {
                    if (window.navigator.cookieEnabled && (cookie.split('wide=1').length > 1 || cookie.split('wide=0').length < 2)) {
                        document.cookie = 'wide=0; path=/';
                    }
                    if (playerElement && window.location.pathname === '/watch') {
                        pageElement.className = pageElement.className.replace('watch-stage', 'watch-non-stage');
                        playerElement.className = playerElement.className.replace('large', 'small').replace('medium', 'small');
                        document.getElementById('watch7-container').removeAttribute('class');
                    }
                }
            }
            function argsCleaner(config) {
                var audioMode = document.getElementById('autoplay-button'),
                    base = (config.args.iurl_webp) ? '_webp' : '',
                    hdThumb,
                    maxRes;
                function checkThumbnail() {
                    var img,
                        video = document.getElementsByTagName('video')[0],
                        hdURL = config.args['iurl' + base].replace('hqdefault', 'maxresdefault'),
                        state = api && api.getPlayerState && api.getPlayerState();
                    function widthReport() {
                        handleEvents('remove', img, 'load', widthReport);
                        function prefixIterator(prefix) {
                            config.args[prefix + base] = hdURL;
                        }
                        if (img.width > 120 && !config.args['iurlmaxres' + base] && state && (state === 5 || (state === 3 && video && video.src === ''))) {
                            ['iurl', 'iurlsd', 'iurlmq', 'iurlhq', 'iurlmaxres'].forEach(prefixIterator);
                            api.cueVideoByPlayerVars(config.args);
                            api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                            if (parSets.VID_PLR_VOL_MEM) {
                                api.setVolume(parSets.volLev || 50);
                            }
                        }
                    }
                    img = new Image();
                    handleEvents('add', img, 'load', widthReport);
                    img.src = hdURL;
                }
                function prefixIterator(prefix) {
                    config.args[prefix + base] = config.args['iurlmaxres' + base];
                }
                if (config.args.video_id) {
                    if ((parSets.VID_PLR_ADS && (!parSets.VID_SUB_ADS || (parSets.VID_SUB_ADS && !config.args.subscribed))) || (audioMode && audioMode.classList.contains('active'))) {
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
                    config.args.dash = (parSets.VID_PLR_DASH) ? '0' : '1';
                    config.args.vq = parSets.VID_DFLT_QLTY;
                    config.args.autoplay = (parSets.VID_PLR_ATPL) ? '1' : '0';
                    config.args.theme = parSets.VID_CTRL_BAR_CLR;
                    config.args.color = parSets.VID_PROG_BAR_CLR;
                    config.html5 = true;
                    config.params.wmode = 'gpu';
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
                    if (window.location.pathname === '/watch' && window.ytplayer && window.ytplayer.config === null) {
                        window.ytplayer.config = config;
                    }
                }
            }
            function alwaysVisible() {
                var width,
                    height,
                    aspectRatio,
                    playerContainer,
                    containerSize,
                    skinny,
                    sidebar,
                    sidebarSize,
                    videoPlayer = document.getElementById('movie_player');
                function initFloater() {
                    skinny = document.documentElement.classList.contains('content-snap-width-skinny-mode');
                    videoPlayer = document.getElementById('movie_player');
                    playerContainer = document.getElementById('player-api');
                    containerSize = playerContainer && playerContainer.getBoundingClientRect();
                    sidebar = document.getElementById('watch7-sidebar');
                    sidebarSize = sidebar && sidebar.getBoundingClientRect();
                    function updatePos() {
                        if (!videoPlayer.classList.contains('floater')) {
                            handleEvents('remove', window, 'resize', updatePos);
                            return;
                        }
                        sidebarSize = sidebar.getBoundingClientRect();
                        videoPlayer.style.marginLeft = ((skinny && '0') || sidebarSize.left) + 'px';
                        videoPlayer.style.width = (skinny && containerSize.width) || sidebarSize.width + 'px';
                        videoPlayer.style.height = ((skinny && containerSize.width) || sidebarSize.width) / aspectRatio + 'px';
                    }
                    if (!sidebar) {
                        handleEvents('remove', window, 'scroll', initFloater);
                        return;
                    }
                    if (videoPlayer && containerSize.bottom < (((skinny && containerSize.height - 2) || (containerSize.height / 2)) + 51) && !videoPlayer.classList.contains('floater')) {
                        aspectRatio = 16 / 9;
                        width = (skinny && containerSize.width) || sidebarSize.width;
                        height = ((skinny && containerSize.width) || sidebarSize.width) / aspectRatio;
                        videoPlayer.classList.toggle('floater');
                        videoPlayer.setAttribute('style', 'width: ' + width + 'px; height: ' + height + 'px; margin-left: ' + ((skinny && '0') || sidebarSize.left) + 'px;');
                        handleEvents('add', window, 'resize', updatePos);
                    } else if (videoPlayer && containerSize.bottom > (((skinny && containerSize.height - 2) || (!skinny && (containerSize.height / 2))) + 51) && videoPlayer.classList.contains('floater')) {
                        videoPlayer.classList.toggle('floater');
                        videoPlayer.removeAttribute('style');
                        handleEvents('remove', window, 'resize', updatePos);
                    }
                }
                if (parSets.VID_PLR_ALVIS) {
                    if (window.location.pathname === '/watch') {
                        handleEvents('add', window, 'scroll', initFloater);
                        initFloater();
                    } else if (window.location.pathname === '/watch') {
                        handleEvents('remove', window, 'scroll', initFloater);
                    }
                }
            }
            function subPlaylist() {
                var list = '',
                    button = document.getElementById('subscription-playlist'),
                    navMenu = document.getElementById('channel-navigation-menu'),
                    listTitle = document.getElementsByClassName('appbar-nav-menu')[0],
                    videoList = document.getElementsByClassName('addto-watch-later-button');
                function listIterator(i) {
                    if (i > -1) {
                        list += videoList[i].getAttribute('data-video-ids') + '%2C';
                    }
                }
                function initSubPlaylist(event) {
                    event = event.data;
                    if (event && event.initSubPlaylist) {
                        handleEvents('remove', window, 'message', initSubPlaylist);
                        button.href = '/watch?v=' + videoList[0].getAttribute('data-video-ids') + '&list=' + JSON.parse(event.initSubPlaylist)[1].data.swfcfg.args.list;
                    }
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
                    Object.keys(videoList).forEach(listIterator);
                    listTitle = listTitle && listTitle.getElementsByClassName('epic-nav-item-heading')[0].textContent;
                    button = document.getElementById('subscription-playlist');
                    button.href = '/watch_videos?title=' + listTitle + '&video_ids=' + list;
                    window.postMessage({
                        method: 'GET',
                        url: window.location.origin + '/watch_videos?title=' + listTitle + '&spf=navigate&video_ids=' + list,
                        id: 'initSubPlaylist'
                    }, '*');
                    handleEvents('add', window, 'message', initSubPlaylist);
                }
            }
            function playerReady(playerApi) {
                function playerState() {
                    var vidData = api.getVideoData(),
                        beacon = vidData.video_id + vidData.list;
                    if (document.getElementById('movie_player') && fullscreen && window.beacon !== beacon) {
                        window.beacon = beacon;
                        window.spf.navigate(window.location.origin + '/watch?v=' + vidData.video_id + ((vidData.list && ('&list=' + vidData.list + '&index=' + api.getPlaylistIndex())) || ''));
                    }
                }
                function fsControl(event) {
                    return function () {
                        if (!requesting && fullscreen) {
                            event.apply(this, arguments);
                        }
                        return true;
                    };
                }
                function playerFullscreen(event) {
                    window.beacon = api.getVideoData().video_id + api.getVideoData().list;
                    fullscreen = event.fullscreen;
                    if (parSets.GEN_SPF_OFF && event.fullscreen) {
                        window.spf.init();
                    } else if (parSets.GEN_SPF_OFF && !event.fullscreen) {
                        window.spf.dispose();
                    }
                }
                function volumeChanged(event) {
                    set('volLev', event.volume);
                }
                function sizeChanged(event) {
                    set('theaterMode', event);
                }
                function stopButton() {
                    var prev,
                        button,
                        playBtn,
                        playerBar = document.getElementsByClassName('html5-player-chrome')[0];
                    function resumeVideo() {
                        var currentQuality = api.getPlaybackQuality(),
                            currentTime = api.getCurrentTime();
                        handleEvents('remove', playBtn, 'click', resumeVideo);
                        window.ytplayer.config.loaded = false;
                        api.loadNewVideoConfig(window.ytplayer.config, 'html5');
                        api.setPlaybackQuality(currentQuality);
                        api.seekTo(currentTime);
                    }
                    function stopVideo() {
                        api.stopVideo();
                        playBtn = document.getElementsByClassName('ytp-button-pause')[0] || document.getElementsByClassName('ytp-button-play')[0];
                        handleEvents('add', playBtn, 'click', resumeVideo);
                    }
                    if (!document.getElementsByClassName('ytp-button-stop')[0] && playerBar) {
                        prev = document.getElementsByClassName('ytp-button-prev')[0];
                        button = '<div role="button" class="ytp-button ytp-button-stop"></div>';
                        button = string2HTML(button).querySelector('div');
                        handleEvents('add', button, 'click', stopVideo);
                        playerBar.insertBefore(button, prev);
                    }
                }
                if (typeof playerApi === 'object' && !document.getElementById('c4-player')) {
                    document[usingChrome ? 'webkitExitFullscreen' : 'mozCancelFullScreen'] = fsControl(document[usingChrome ? 'webkitExitFullscreen' : 'mozCancelFullScreen']);
                    api = playerApi;
                    handleEvents('add', api, 'onStateChange', playerState);
                    handleEvents('add', api, 'onFullscreenChange', playerFullscreen);
                    if (parSets.VID_PLR_VOL_MEM) {
                        handleEvents('add', api, 'onVolumeChange', volumeChanged);
                    }
                    if (parSets.VID_PLR_SIZE_MEM) {
                        handleEvents('add', api, 'SIZE_CLICKED', sizeChanged);
                    }
                    if (parSets.VID_STP_BTN) {
                        stopButton();
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
                        api.setVolume(parSets.volLev || 50);
                    }
                }
            }
            function scriptEntry(event) {
                var ytConfig;
                if (event.target.textContent.split('var ytplayer = ytplayer').length > 1) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (window.location.pathname === '/watch') {
                        ytConfig = event.target.textContent.match(/ytplayer\.config = \{([\w\W]*?)\};/)[1];
                        window.ytplayer = window.ytplayer || {};
                        window.ytplayer.config = JSON.parse('{' + ytConfig + '}');
                        argsCleaner(window.ytplayer.config);
                    }
                } else if (event.target.textContent.split('ytspf.enabled = false').length > 1) {
                    event.preventDefault();
                    event.stopPropagation();
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
            function scriptExit(event) {
                function baseDetour(originalFunction) {
                    return function () {
                        originalFunction.apply(this, arguments);
                        if (parSets.VID_END_SHRE) {
                            window.yt.config_.SHARE_ON_VIDEO_END = false;
                        }
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
                            if (parSets.VID_PLR_ATPL) {
                                api.pauseVideo();
                                api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                                api.playVideo();
                            } else {
                                api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                            }
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
                function html5Detour(originalFunction) {
                    return function () {
                        var playerInstance,
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
                        function sizesIterator(keys) {
                            function keysIterator(sizes) {
                                if (typeof playerInstance[keys][sizes] === 'function' && (playerInstance[keys][sizes] + String()).split('"detailpage"!=').length > 1) {
                                    playerInstance[keys][sizes] = html5Pointers(playerInstance[keys][sizes]);
                                }
                            }
                            if (typeof playerInstance[keys] === 'object' && playerInstance[keys] && playerInstance[keys].element) {
                                Object.keys(Object.getPrototypeOf(playerInstance[keys])).forEach(keysIterator);
                            }
                        }
                        if (args[0].id === 'upsell-video') {
                            originalFunction.apply(this, arguments);
                        } else if (typeof args[0] === 'object') {
                            playerInstance = originalFunction.apply(this, arguments);
                            Object.keys(playerInstance).forEach(sizesIterator);
                        }
                    };
                }
                function ytIterator(keys) {
                    if (typeof window._yt_www[keys] === 'function') {
                        if ((window._yt_www[keys] + String()).split('player-added').length > 1) {
                            window._yt_www[keys] = embedDetour(window._yt_www[keys]);
                        } else if ((window._yt_www[keys] + String()).split('window.spf.navigate').length > 1) {
                            window._yt_www[keys] = autoplayDetour(window._yt_www[keys]);
                        }
                    }
                }
                if (event && event.target && event.target.getAttribute('name') === 'www/base') {
                    window.yt.setConfig = baseDetour(window.yt.setConfig);
                    Object.keys(window._yt_www).some(ytIterator);
                }
                if (!window.html5Patched && (window.yt && window.yt.player && window.yt.player.Application && window.yt.player.Application.create)) {
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
                    trashList = [],
                    detailList = [],
                    blackList = parSets.blacklist;
                function initThumbMod(event) {
                    var observer,
                        userList = parSets.blacklist;
                    function initSidebarMode() {
                        var sidebarAlign = (parSets.VID_SDBR_ALGN > 1) ? ',left=' + (window.screen.availWidth - 467) : (parSets.VID_SDBR_ALGN < 1) ? '' : ',left=0',
                            newSidebar = window.open(event.getAttribute('data-link'), 'sidebarMode', 'width=467,height=' + window.screen.availHeight + ',scrollbars=1' + sidebarAlign);
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
                            handleEvents('add', button, 'click', initThumbMod);
                            detailList[i].thumbfield.appendChild(button);
                        }
                        if (parSets.BLK_ON && window.location.pathname !== '/feed/subscriptions' && !detailList[i].thumbfield.getElementsByClassName('blacklist')[0]) {
                            button = createButton('blacklist', detailList[i]);
                            handleEvents('add', button, 'click', initThumbMod);
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
                    trashList[trash].remove();
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
            function title() {
                var observer,
                    config = {childList: true},
                    titleElement = document.getElementsByTagName('title')[0],
                    titleStatus = titleElement.id === 'observing',
                    state = api && api.getPlayerState && api.getPlayerState();
                if (!titleStatus) {
                    titleElement.id = 'observing';
                    observer = new window.MutationObserver(title);
                    observer.observe(titleElement, config);
                } else if (titleStatus && titleElement.textContent.split('▶').length > 1 && !(state && state > -1 && state < 5)) {
                    titleElement.textContent = titleElement.textContent.replace('▶ ', '');
                }
            }
            function volumeWheel(event) {
                var direction = event && (event.deltaY || event.wheelDeltaY),
                    playerApi = document.getElementById('player-api');
                if (event && api && playerApi && (event.target.id === 'player-api' || playerApi.contains(event.target))) {
                    event.preventDefault();
                    if (direction > 0) {
                        api.setVolume(api.getVolume() - 10);
                    } else if (direction < 0) {
                        api.setVolume(api.getVolume() + 10);
                    }
                }
                if (!event && parSets.VID_VOL_WHEEL) {
                    handleEvents('add', window, 'wheel', volumeWheel);
                }
            }
            function playlistControls() {
                var href = window.location.href,
                    playlistBar = document.getElementById('watch-appbar-playlist');
                function reverseControl() {
                    var temp,
                        prev = document.getElementsByClassName('prev-playlist-list-item')[0],
                        next = document.getElementsByClassName('next-playlist-list-item')[0],
                        list = document.getElementById('playlist-autoscroll-list'),
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
                }
                function reverseButton(event) {
                    event = usingChrome ? event.target.parentNode : event.target;
                    event.classList.toggle('yt-uix-button-toggled');
                    set('plRev', (event.classList.contains('yt-uix-button-toggled')) ? window.yt.config_.LIST_ID : false);
                    reverseControl();
                }
                function autoplayButton(event) {
                    event = usingChrome ? event.target.parentNode : event.target;
                    event.classList.toggle('yt-uix-button-toggled');
                    set('plApl', event.classList.contains('yt-uix-button-toggled'));
                }
                function createButton(type, placeHolder, boolean, call) {
                    var navControls = document.getElementsByClassName('playlist-nav-controls')[0],
                        button = [
                            '<button data-tooltip-text="' + placeHolder + '" class="yt-uix-button yt-uix-button-player-controls yt-uix-button-opacity yt-uix-tooltip' + (((boolean === true || href.split(boolean).length > 1) && ' yt-uix-button-toggled') || '') + '" type="button" title="' + placeHolder + '" id="' + type + '">\n',
                            '    <span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-' + type + '-video-list"></span>\n',
                            '</button>\n'
                        ].join('');
                    playlistBar.className = playlistBar.className.replace('radio-playlist', '');
                    button = string2HTML(button).querySelector('button');
                    handleEvents('add', button, 'click', call);
                    navControls.appendChild(button);
                }
                if (playlistBar) {
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
                var page = document.documentElement,
                    header = document.getElementById('watch-header'),
                    consoleButton = document.getElementById('console-button'),
                    controls = document.getElementById('player-console'),
                    storyBoard = window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.storyboard_spec,
                    videoPlayer = document.getElementsByTagName('video')[0];
                function hookButtons() {
                    var autoPlay = controls.querySelector('#autoplay-button'),
                        loopButton = controls.querySelector('#loop-button'),
                        audioOnly = controls.querySelector('#audio-only'),
                        seekMap = controls.querySelector('#seek-map'),
                        saveThumb = controls.querySelector('#save-thumbnail-button'),
                        screenShot = controls.querySelector('#screenshot-button'),
                        sidebarMode = controls.querySelector('#sidebar-button');
                    function togglePlay() {
                        set('VID_PLR_ATPL', !parSets.VID_PLR_ATPL);
                        autoPlay.classList[(parSets.VID_PLR_ATPL) ? 'add' : 'remove']('active');
                    }
                    function toggleLoop() {
                        videoPlayer = document.getElementsByTagName('video')[0];
                        videoPlayer.loop = !videoPlayer.loop;
                        loopButton.classList[(videoPlayer.loop) ? 'add' : 'remove']('active');
                    }
                    function toggleAudio() {
                        var user,
                            base,
                            poster,
                            streams,
                            container,
                            loadStream,
                            currentTime,
                            currentQuality;
                        function timeProgress() {
                            var total = document.getElementById('podcast-total'),
                                elapsed = document.getElementById('podcast-current'),
                                ending = document.getElementsByClassName('ytp-time-duration')[0],
                                progress = document.getElementsByClassName('ytp-time-current')[0];
                            if (!total) {
                                handleEvents('remove', videoPlayer, 'timeupdate', timeProgress);
                                return;
                            }
                            if (elapsed && progress && elapsed.textContent !== progress.textContent) {
                                elapsed.textContent = progress.textContent;
                            }
                            if (total && ending && total.textContent !== '/ ' + ending.textContent) {
                                total.textContent = '/ ' + ending.textContent;
                            }
                        }
                        function initAudioMode() {
                            api.playVideo();
                            videoPlayer.src = loadStream.url;
                            videoPlayer.play();
                            if (container) {
                                container.remove();
                            }
                            container = [
                                '<div id="podcast-container" style="background-image:url(\'' + poster + '\')">\n',
                                '    <div id="podcast-elements">\n',
                                '        <div id="podcast-poster">\n',
                                '            <div id="poster" style="background-image:url(\'' + poster + '\')"></div>\n',
                                '            <div id="podcast-progress">\n',
                                '                <div id="podcast-current">0:00</div>\n',
                                '                <div id="podcast-total">/ ' + document.getElementsByClassName('ytp-time-duration')[0].textContent + '</div>\n',
                                '            </div>\n',
                                '        </div>\n',
                                '        <div id="podcast-info">\n',
                                '            <div id="podcast-title">' + document.title.replace(' - YouTube', '').replace('▶ ', '') + '</div>\n',
                                '            <div id="podcast-channel">' + user + '</div>\n',
                                '        </div>\n',
                                '    </div>\n',
                                '</div>\n'
                            ].join('');
                            container = string2HTML(container).querySelector('#podcast-container');
                            document.getElementsByClassName('html5-video-container')[0].insertBefore(container, videoPlayer);
                            handleEvents('add', videoPlayer, 'timeupdate', timeProgress);
                            document.getElementById('audio-only').classList.add('active');
                        }
                        function cipherAlgorithm(event) {
                            var algo = {},
                                storedCipher = parSets.cipherAlgorithm,
                                html5 = window.ytplayer.config.assets.js,
                                html5ID = html5.match(/html5player-([\w\W]*?)\/html5player/)[1];
                            function buildCipher(string) {
                                var replace,
                                    splice,
                                    reverse,
                                    firstMatch = string.match(/var [\w\W]{2}\=\{[\w\W]{2}\:function\(a([\w\W]*?)a\[0\]\=a\[b%a\.length\]([\w\W]*?)\};/)[0],
                                    secondMatch = string.match(/a\=a\.split\(""\);([\w\W]*?)return a\.join\(""\)/)[0];
                                function iterateFirstMatch(string) {
                                    if (string.match('.length')) {
                                        replace = string.split(':')[0];
                                    } else if (string.match('.splice')) {
                                        splice = string.split(':')[0];
                                    } else if (string.match('.reverse')) {
                                        reverse = string.split(':')[0];
                                    }
                                }
                                function iterateSecondMatch(string) {
                                    if (string.match('.' + replace)) {
                                        algo[html5ID].push(Number(string.split(',')[1].replace(')', '')));
                                    } else if (string.match('.' + splice)) {
                                        algo[html5ID].push(-Number(string.split(',')[1].replace(')', '')));
                                    } else if (string.match('.' + reverse)) {
                                        algo[html5ID].push(0);
                                    }
                                }
                                firstMatch.replace(/var ([\w\W]*?)=\{/, '').split('},').forEach(iterateFirstMatch);
                                secondMatch.split(';').forEach(iterateSecondMatch);
                                console.info(algo, replace, splice, reverse);
                            }
                            function deCipher(sig) {
                                var temp,
                                    cipher = JSON.parse(storedCipher)[html5ID];
                                console.info(cipher);
                                sig = sig.split('');
                                cipher.forEach(function (value) {
                                    if (value > 0) {
                                        temp = sig[0];
                                        sig[0] = sig[value % sig.length];
                                        sig[value] = temp;
                                    } else if (value < 0) {
                                        sig.splice(0, -value);
                                    } else {
                                        sig.reverse();
                                    }
                                });
                                return sig.join('');
                            }
                            if (event && event.data.cipherAlgorithm) {
                                handleEvents('remove', window, 'message', cipherAlgorithm);
                                event = event.data.cipherAlgorithm;
                                algo[html5ID] = [];
                                buildCipher(event);
                                storedCipher = parSets.cipherAlgorithm = JSON.stringify(algo);
                            } else if (!event && (!storedCipher || storedCipher.split(html5ID).length < 2)) {
                                window.postMessage({
                                    method: 'GET',
                                    url: window.location.protocol + html5,
                                    id: 'cipherAlgorithm'
                                }, '*');
                                handleEvents('add', window, 'message', cipherAlgorithm);
                                return;
                            }
                            if (storedCipher && storedCipher.split(html5ID).length > 1) {
                                loadStream.url += '&signature=' + deCipher(loadStream.s);
                                initAudioMode();
                            }
                        }
                        function startAudioMode() {
                            if (!window.ytplayer.config) {
                                return;
                            }
                            streams = {};
                            videoPlayer = document.getElementsByTagName('video')[0];
                            container = document.getElementById('podcast-container');
                            user = window.ytplayer.config.args.author || document.querySelector('.yt-user-info > a').textContent;
                            base = window.ytplayer.config.args.iurl_webp ? '_webp' : '';
                            poster = window.ytplayer.config.args['iurlmaxres' + base] || window.ytplayer.config.args['iurl' + base];
                            function adaptiveIterator(stream) {
                                var itag = stream.match(/itag\=([0-9]{3})/)[1];
                                streams[itag] = {};
                                function streamIterator(details) {
                                    streams[itag][details.split('=')[0]] = decodeURIComponent(details.split('=')[1]).replace(/\+/g, ' ');
                                }
                                stream.split('&').forEach(streamIterator);
                            }
                            window.ytplayer.config.args.adaptive_fmts.split(',').forEach(adaptiveIterator);
                            loadStream = streams['171'] || streams['140'];
                            console.info(streams);
                            if (loadStream) {
                                if (!loadStream.s) {
                                    initAudioMode();
                                } else if (loadStream.s) {
                                    cipherAlgorithm();
                                }
                            }
                        }
                        if (audioOnly.classList.contains('active')) {
                            handleEvents('remove', window, 'spfdone', startAudioMode);
                            container = document.getElementById('podcast-container').remove();
                            audioOnly.classList.remove('active');
                            currentQuality = api.getPlaybackQuality();
                            currentTime = api.getCurrentTime();
                            window.ytplayer.config.loaded = false;
                            api.loadNewVideoConfig(window.ytplayer.config, 'html5');
                            api.setPlaybackQuality(currentQuality);
                            api.seekTo(currentTime);
                        } else {
                            handleEvents('add', window, 'spfdone', startAudioMode);
                            startAudioMode();
                        }
                    }
                    function toggleMap() {
                        var container = document.getElementById('seek-thumb-map') || false,
                            thumbControls,
                            thumbsContainer,
                            matrix,
                            base,
                            thumbs = [];
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
                                quality = event.target.className.split('quality').length;
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
                            handleEvents('add', container, 'click', clickManager);
                            handleEvents('remove', window, 'spfdone', removeOld);
                        }
                        function parseThumbs() {
                            thumbControls = '<div id="seek-controls">\n';
                            function matrixIterator(qualities, level) {
                                var i,
                                    currentBase,
                                    details,
                                    thumbAmount,
                                    gridX = 0,
                                    gridY = 0,
                                    frameAmount = 0;
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
                                handleEvents('add', container, 'click', clickManager);
                                handleEvents('add', window, 'spfdone', removeOld);
                            } else if (container.id) {
                                seekMap.classList.toggle('active');
                                container.classList.toggle('invisible');
                                centerThumb();
                            }
                        }
                    }
                    function dlThumb() {
                        var args = window.ytplayer.config.args,
                            base = (args.iurl_webp) ? '_webp' : '',
                            thumbURL = args['iurlmaxres' + base] || args['iurlsd' + base] || args['iurl' + base];
                        window.open(thumbURL);
                    }
                    function saveSS() {
                        var width,
                            height,
                            aspectRatio,
                            video = document.getElementsByTagName('video')[0],
                            container = document.getElementById('screenshot-result') || document.createElement('div'),
                            canvas = container.querySelector('canvas') || document.createElement('canvas'),
                            close = document.createElement('div'),
                            context = canvas.getContext('2d');
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
                            handleEvents('add', close, 'click', hideContainer);
                            container.appendChild(close);
                            document.body.appendChild(container);
                        } else if (container.id && container.classList.contains('invisible')) {
                            container.classList.toggle('invisible');
                        }
                    }
                    function openSidebar() {
                        var sidebarAlign = (parSets.VID_SDBR_ALGN > 1) ? ',left=' + (window.screen.availWidth - 467) : (parSets.VID_SDBR_ALGN < 1) ? '' : ',left=0',
                            newSidebar = window.open(window.location.href, 'sidebarMode', 'width=467,height=' + window.screen.availHeight + ',scrollbars=1' + sidebarAlign);
                        function snapFit() {
                            newSidebar.resizeTo(newSidebar.outerWidth, window.screen.availHeight);
                        }
                        newSidebar.addEventListener('readystatechange', snapFit, true);
                        newSidebar.focus();
                    }
                    handleEvents('add', autoPlay, 'click', togglePlay);
                    handleEvents('add', loopButton, 'click', toggleLoop);
                    handleEvents('add', audioOnly, 'click', toggleAudio);
                    handleEvents('add', seekMap, 'click', toggleMap);
                    handleEvents('add', saveThumb, 'click', dlThumb);
                    handleEvents('add', screenShot, 'click', saveSS);
                    handleEvents('add', sidebarMode, 'click', openSidebar);
                }
                function toggleConsole() {
                    page.classList.toggle('player-console');
                    set('advOpts', page.classList.contains('player-console'));
                }
                if (window.location.pathname === '/watch' && header && !consoleButton) {
                    consoleButton = '<button id="console-button" title="' + userLang('ADV_OPTS') + '"></button>';
                    consoleButton = string2HTML(consoleButton).querySelector('#console-button');
                    handleEvents('add', consoleButton, 'click', toggleConsole);
                    header.appendChild(consoleButton);
                    if (controls) {
                        controls.remove();
                    }
                    controls = [
                        '<div id="player-console">\n',
                        '    <div id="autoplay-button" class="yt-uix-tooltip' + ((parSets.VID_PLR_ATPL) ? ' active' : '') + '" data-tooltip-text="' + userLang('CNSL_AP') + '"></div>\n',
                        '    <div id="loop-button" class="yt-uix-tooltip' + ((videoPlayer && videoPlayer.loop) ? ' active' : '') + '" data-tooltip-text="' + userLang('CNSL_RPT') + '"></div>\n',
                        '    <div id="audio-only" class="yt-uix-tooltip' + ((document.getElementById('podcast-container')) ? ' active' : '') + '" data-tooltip-text="' + userLang('CNSL_AUDI') + '"></div>\n',
                        '    <div id="seek-map" class="yt-uix-tooltip" data-tooltip-text="' + (storyBoard ? userLang('CNSL_SKMP') : userLang('CNSL_SKMP_OFF')) + '"' + ((!storyBoard) ? 'style="opacity:0.2;"' : '') + '></div>\n',
                        '    <div id="save-thumbnail-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_SVTH') + '"></div>\n',
                        '    <div id="screenshot-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_SS') + '"></div>\n',
                        '    <div id="sidebar-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_SDBR') + '"' + ((window.opener) ? ' style="display:none"' : '') + '></div>\n',
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
                    autoplaybar = document.getElementsByClassName('autoplay-bar')[0];
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
            }
            function initFunctions() {
                requesting = false;
                customStyles();
                settingsMenu();
                playlistControls();
                playerMode();
                advancedOptions();
                title();
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
                var url = event.detail.url,
                    previous = event.detail.previous,
                    videoBefore = previous.split('/watch?').length < 2,
                    videoAfter = url.split('/watch?').length > 1,
                    listBefore = previous.split('list=').length > 1,
                    listAfter = url.split('list=').length > 1,
                    player = document.getElementById('movie_player'),
                    loaded = window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded;
                requesting = true;
                if (player && videoAfter && (listAfter !== listBefore || videoBefore)) {
                    if (loaded) {
                        delete window.ytplayer.config.loaded;
                    }
                    player.remove();
                }
            }
            window.onYouTubePlayerReady = playerReady;
            handleEvents('add', window, 'spfdone', initFunctions);
            handleEvents('add', window, 'spfrequest', request);
            handleEvents('add', window, 'readystatechange', initFunctions, true);
            handleEvents('add', window, 'beforescriptexecute', scriptEntry);
            if (usingChrome) {
                handleEvents('add', document.documentElement, 'load', scriptExit, true);
            } else {
                handleEvents('add', window, 'afterscriptexecute', scriptExit);
            }
            handleEvents('add', window, 'message', updateSettings);
        };
    function updateSettings(event) {
        event = event.particleSettings || event || {};
        event.updateSettings = true;
        window.postMessage(event, '*');
    }
    function initParticle(event) {
        var injectScript,
            injectstyle;
        function filterChromeStorage(keys) {
            if (keys.particleSettings && keys.particleSettings.newValue) {
                updateSettings(keys.particleSettings.newValue);
            }
        }
        if (!event && userscript) {
            event = JSON.parse(GM_getValue('particleSettings', '{}'));
        }
        if (event) {
            event = event.particleSettings || event;
            event = JSON.stringify(event);
            injectScript = document.createElement('script');
            injectScript.textContent = '(' + particle + '())';
            injectScript.textContent = injectScript.textContent.replace('parSets,', 'parSets = ' + event + ',');
            injectstyle = document.createElement('style');
            injectstyle.id = 'P-style';
            injectstyle.textContent = particleStyle;
            document.documentElement.appendChild(injectstyle);
            document.documentElement.appendChild(injectScript);
            if (!userscript) {
                if (window.chrome) {
                    chrome.storage.onChanged.addListener(filterChromeStorage);
                } else if (!window.chrome) {
                    self.port.on('particleSettings', updateSettings);
                }
            }
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
        function gmSettings() {
            var object = JSON.parse(GM_getValue('particleSettings', '{}'));
            function updateGMSettings(keys) {
                object[keys] = details.set[keys];
            }
            if (details.set) {
                Object.keys(details.set).forEach(updateGMSettings);
                GM_setValue('particleSettings', JSON.stringify(object));
            } else if (details.replace) {
                GM_setValue('particleSettings', JSON.stringify(details.replace));
            }
            updateSettings(JSON.parse(GM_getValue('particleSettings', '{}')));
        }
        function chromeSettings(item) {
            var object = item && item.particleSettings;
            if (!item) {
                chrome.storage.sync.get('particleSettings', chromeSettings);
                return;
            }
            function updateChromeSettings(keys) {
                object[keys] = details.set[keys];
            }
            if (details.set) {
                Object.keys(details.set).forEach(updateChromeSettings);
                chrome.storage.sync.set({'particleSettings': object});
            } else if (details.replace) {
                chrome.storage.sync.set({'particleSettings': details.replace});
            }
        }
        if (typeof details === 'object') {
            if (details.id) {
                if (userscript) {
                    GM_xmlhttpRequest({
                        onload: process,
                        method: details.method,
                        url: details.url
                    });
                } else {
                    request = new XMLHttpRequest();
                    request.onload = process;
                    request.open(details.method, details.url, true);
                    request.send();
                }
            } else if (details.set || details.get || details.replace) {
                if (userscript) {
                    gmSettings();
                } else if (window.chrome) {
                    chromeSettings();
                } else {
                    self.port.emit('particleSettings', details);
                }
            }
        }
    }
    if (!userscript) {
        if (window.chrome) {
            chrome.storage.sync.get('particleSettings', initParticle);
        } else if (!window.chrome) {
            self.port.once('particleSettings', initParticle);
            self.port.emit('particleSettings', {get: {}});
        }
    } else if (userscript) {
        initParticle();
    }
    window.addEventListener('message', xhr);
}());
