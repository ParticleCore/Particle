// ==UserScript==
// @version         0.8.3
// @name            YouTube +
// @namespace       https://github.com/ParticleCore
// @description     YouTube with more freedom
// @icon            https://raw.githubusercontent.com/ParticleCore/Particle/gh-pages/images/YT%2Bicon.png
// @match           *://www.youtube.com/*
// @exclude         *://www.youtube.com/embed/*
// @run-at          document-start
// @downloadURL     https://github.com/ParticleCore/Particle/raw/master/src/Userscript/YouTubePlus.user.js
// @homepageURL     https://github.com/ParticleCore/Particle
// @supportURL      https://github.com/ParticleCore/Particle/wiki
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UMVQJJFG4BFHW
// @grant           GM_getValue
// @grant           GM_setValue
// @noframes
// ==/UserScript==
(function () {
    "use strict";
    var id         = "particleSettings",
        userscript = typeof GM_info === "object";
    function particle() {
        var api,
            playerInstance,
            events    = {},
            channelId = {},
            isChrome  = typeof window.chrome === "object",
            parSets   = JSON.parse(document.documentElement.dataset.parSets || null),
            defSets   = {
                GEN_BTTR_NTF    : true,
                GEN_SUB_LIST    : true,
                GEN_INF_SCRL    : true,
                GEN_BLUE_GLOW   : true,
                GEN_SDBR_ON     : true,
                VID_END_SHRE    : true,
                VID_DFLT_QLTY   : "auto",
                VID_PLST_SEP    : true,
                VID_PLST_ATPL   : true,
                VID_PLST_RVRS   : true,
                VID_PLR_ALVIS   : true,
                VID_PLR_SIZE_MEM: true,
                VID_PLR_FIT_WDTH: "1280px",
                VID_HIDE_COMS   : "1",
                VID_POST_TIME   : true,
                VID_VID_CNT     : true,
                VID_DESC_SHRT   : true,
                VID_SDBR_ALGN   : "1",
                VID_PLR_HTML5   : true,
                BLK_ON          : true,
                volLev          : 50,
                plApl           : false,
                plRev           : false,
                advOpts         : true,
                blacklist       : {}
            },
            language  = {
                YTSETS                : "YouTube+ settings",
                ADV_OPTS              : "Advanced options",
                SUB_PLST              : "Play recent uploads",
                GEN_SDBR_ON           : "Enable sidebar mode",
                SDBR_OPEN             : "Open in sidebar",
                BLCK_ADD              : "Add to blacklist",
                BLCK_EDIT             : "Edit",
                BLCK_SAVE             : "Save",
                BLCK_CLSE             : "Close",
                CNSL_AP               : "Autoplay",
                CNSL_RPT              : "Repeat video",
                CNSL_SVTH             : "Open thumbnail",
                CNSL_SS               : "Take screenshot",
                CNSL_SS_CLS           : "CLOSE",
                CNSL_SDBR             : "Sidebar mode",
                CNSL_FLBR             : "Fullbrowser mode",
                CNSL_CINM_MD          : "Cinema mode",
                CNSL_FRME             : "Frame by frame",
                PLST_AP               : "Autoplay",
                PLST_RVRS             : "Reverse",
                SHOW_CMTS             : "Show comments",
                HIDE_CMTS             : "Hide comments",
                GLB_IMPR              : "Import/export settings",
                GLB_LOCL_LANG         : "Click to edit YT+ language",
                GLB_LOCL_LANG_CSTM    : "Local",
                GLB_IMPR_SAVE         : "Save and load",
                GLB_RSET              : "Reset",
                GLB_SVE               : "Save",
                GLB_SVE_SETS          : "Settings saved",
                FTR_DESC              : "Find out what this does",
                GEN                   : "General",
                VID                   : "Video",
                CHN                   : "Channels",
                BLK                   : "Blacklist",
                ABT                   : "About",
                HLP                   : "Help",
                DNT                   : "Donate",
                GEN_TTL               : "General settings",
                GEN_GEN               : "General",
                GEN_LYT               : "Layout",
                GEN_LOCL_LANG         : "Use modified YT+ language",
                GEN_DSBL_ADS          : "Disable advertisements outside the video page",
                GEN_INF_SCRL          : "Enable infinite scroll in feeds",
                GEN_YT_LOGO_LINK      : "YouTube logo redirects to subscriptions",
                GEN_SUB_LIST          : "Enable subscription playlist",
                GEN_REM_APUN          : "Remove autoplay up next",
                GEN_SPF_OFF           : "Disable SPF",
                GEN_HIDE_FTR          : "Hide footer",
                GEN_BLUE_GLOW         : "Remove blue glow around clicked buttons",
                GEN_HDE_RECM_SDBR     : "Hide recommended channels sidebar",
                GEN_HDE_SRCH_SDBR     : "Hide search results sidebar",
                GEN_HDE_CHN_SDBR      : "Hide channel sidebar",
                GEN_CMPT_TTLS         : "Compact titles in feeds",
                GEN_DSB_HVRC          : "Disable hovercards",
                GEN_BTTR_NTF          : "Improved blue notification box",
                GEN_GRID_SUBS         : "Grid layout in subscriptions",
                GEN_GRID_SRCH         : "Grid layout in search results",
                VID_TTL               : "Video settings",
                VID_PLR               : "Player settings",
                VID_PLR_LYT           : "Player layout",
                VID_DFLT_QLTY         : "Default video quality:",
                VID_DFLT_QLTY_AUTO    : "Auto",
                VID_DFLT_QLTY_TNY     : "144p",
                VID_DFLT_QLTY_SML     : "240p",
                VID_DFLT_QLTY_MDM     : "360p",
                VID_DFLT_QLTY_LRG     : "480p",
                VID_DFLT_QLTY_720     : "720p",
                VID_DFLT_QLTY_1080    : "1080p",
                VID_DFLT_QLTY_1440    : "1440p",
                VID_DFLT_QLTY_2160    : "2160p (4k)",
                VID_DFLT_QLTY_2880    : "2880p (5k)",
                VID_DFLT_QLTY_ORIG    : "4320p (8k)",
                VID_PLR_ALVIS         : "Player always visible when reading comments",
                VID_PLR_ALVIS_MOVE    : "Move",
                VID_PLR_ALVIS_RST     : "Reset position",
                VID_PLR_ALVIS_SCRL_TOP: "Go to top",
                VID_PLR_ATPL          : "Autoplay videos",
                VID_LAYT              : "Layout",
                VID_VID_CNT           : "Show link with number of uploaded videos",
                VID_POST_TIME         : "Show how long the video has been published",
                VID_HIDE_DETLS        : "Hide video details",
                VID_HIDE_COMS         : "Comment section",
                VID_HIDE_COMS_SHOW    : "Show",
                VID_HIDE_COMS_HIDE    : "Hide",
                VID_HIDE_COMS_REM     : "Remove",
                VID_END_SHRE          : "Disable share panel when video ends",
                VID_PLST              : "Playlists",
                VID_PLST_SEP          : "Separate playlist from player",
                VID_PLST_ATPL         : "Enable playlist autoplay control",
                VID_PLST_RVRS         : "Enable reverse playlist control",
                VID_PLR_SIZE_MEM      : "Memorize player mode",
                VID_VOL_WHEEL         : "Change volume with mouse wheel",
                VID_PLR_VOL_MEM       : "Memorize audio volume",
                VID_PLR_ADS           : "Disable advertisements in the video page",
                VID_PLR_ALACT         : "Player shortcuts always active",
                VID_SUB_ADS           : "Enable advertisements only in videos from subscribed channels",
                VID_PLR_ANTS          : "Disable annotations",
                VID_PLR_DASH          : "Disable DASH playback",
                VID_PLR_HFR           : "Disable HFR (60fps)",
                VID_PLR_HTML5         : "Use the HTML5 player when possible",
                VID_PLR_CC            : "Disable subtitles and CC",
                VID_PLR_INFO          : "Enable info bar with watch later button",
                VID_PLR_FIT           : "Fit to page in theater mode",
                VID_PLR_FIT_WDTH      : "Fit to page max width:",
                VID_PLR_DYN_SIZE      : "Disable dynamic player size in default view",
                VID_DESC_SHRT         : "Short video description buttons",
                VID_TTL_CMPT          : "Compact title in video description",
                VID_SDBR_ALGN         : "Sidebar mode alignment",
                VID_SDBR_ALGN_NONE    : "None",
                VID_SDBR_ALGN_LEFT    : "Left",
                VID_SDBR_ALGN_RIGHT   : "Right",
                VID_LAYT_AUTO_PNL     : "Auto expand video description",
                GEN_CHN_DFLT_PAGE     : "Default channel page:",
                GEN_CHN_DFLT_PAGE_DFLT: "Default",
                GEN_CHN_DFLT_PAGE_VID : "Videos",
                GEN_CHN_DFLT_PAGE_PL  : "Playlists",
                GEN_CHN_DFLT_PAGE_CHN : "Channels",
                GEN_CHN_DFLT_PAGE_DISC: "Discussion",
                GEN_CHN_DFLT_PAGE_ABT : "About",
                BLK_TTL               : "Blacklist settings",
                BLK_BLK               : "Blacklist",
                BLK_ON                : "Enable blacklist",
                ABT_TTL               : "Information and useful links",
                ABT_THKS              : "Thanks to:",
                ABT_THKS_YEPPHA       : ", who's work inspired the creation of this project, without whom none of this would exist today.",
                ABT_THKS_USERSCRIPT   : " for making the task of developing and shipping third party software incredibly easier.",
                ABT_THKS_STACKOV      : " for all of its priceless information which greatly contributes for software development.",
                ABT_INFO              : "Official pages",
                ABT_LNK_GHB           : "GitHub",
                ABT_LNK_GRFK          : "Greasy Fork",
                ABT_LNK_OPNU          : "OpenUserJS",
                LOCALE                : "English (US)"
            };
        function set(setting, newValue) {
            if (setting !== "parSets") {
                parSets[setting] = newValue;
            } else {
                parSets = newValue;
            }
            document.documentElement.dataset.parsend = JSON.stringify(parSets);
        }
        function eventHandler(event) {
            var i,
                keys,
                type       = event[1] || event.type,
                target     = event[0] || event.target,
                listener   = event[2],
                useCapture = !!event[3];
            if (Array.isArray(event)) {
                if (event[4] && events[type] && events[type][listener.name]) {
                    delete events[type][listener.name];
                    if (Object.keys(events[type]).length === 0) {
                        target.removeEventListener(type, eventHandler, useCapture);
                        delete events[type];
                    }
                } else if (!event[4]) {
                    target.addEventListener(type, eventHandler, useCapture);
                    events[type] = events[type] || {};
                    events[type][listener.name] = listener;
                }
            } else if (events[type]) {
                keys = Object.keys(events[type]);
                i = keys.length;
                while (i) {
                    i -= 1;
                    events[type][keys[i]](event);
                }
            }
        }
        function localXHR(method, call, url, setRequestHeader) {
            var request = new XMLHttpRequest();
            request.addEventListener("load", call);
            request.open(method, url, true);
            if (setRequestHeader && setRequestHeader !== "doc") {
                request.setRequestHeader(setRequestHeader[0], setRequestHeader[1]);
            } else {
                request.responseType = "document";
            }
            request.send();
        }
        function userLang(label) {
            var ytlang  = window.yt && window.yt.config_ && window.yt.config_.GAPI_LOCALE,
                urlBase = "https://api.github.com/repos/ParticleCore/Particle/contents/Locale/";
            function getLanguage(data) {
                delete language.fetching;
                if (data.target.readyState === 4 && data.target.status === 200) {
                    parSets.extLang[ytlang] = JSON.parse(data.target.response);
                    parSets.extLang[ytlang].lastMod = new Date(data.target.getResponseHeader("Last-Modified")).getTime();
                }
                parSets.extLang.nextCheck = new Date().getTime() + 864E5;
                set("extLang", parSets.extLang);
            }
            function checkModified(data) {
                delete language.fetching;
                if (data.target.readyState === 4 && data.target.status === 200) {
                    language.fetching = true;
                    localXHR("GET", getLanguage, urlBase + ytlang + ".json", ["Accept", "application/vnd.github.raw"]);
                }
            }
            if (!parSets.extLang) {
                set("extLang", {});
            }
            if (parSets.GEN_LOCL_LANG && parSets.localLang && parSets.localLang[label]) {
                if (JSON.stringify(parSets.extLang) !== "{}") {
                    set("extLang", {});
                }
                return parSets.localLang[label];
            }
            if (!parSets.GEN_LOCL_LANG && ytlang && ytlang !== "en_US") {
                if (parSets.extLang[ytlang] && parSets.extLang[ytlang][label]) {
                    if (!language.fetching && parSets.extLang.nextCheck && parSets.extLang.nextCheck <= new Date().getTime()) {
                        language.fetching = true;
                        localXHR("HEAD", checkModified, urlBase + ytlang + ".json", ["If-Modified-Since", new Date(parSets.extLang[ytlang].lastMod).toUTCString()]);
                        parSets.extLang.nextCheck = new Date().getTime() + 864E5;
                        set("extLang", parSets.extLang);
                    }
                    return parSets.extLang[ytlang][label];
                }
                if (!parSets.extLang[ytlang] && !language.fetching && (!parSets.extLang.nextCheck || parSets.extLang.nextCheck <= new Date().getTime())) {
                    language.fetching = true;
                    localXHR("GET", getLanguage, urlBase + ytlang + ".json", ["Accept", "application/vnd.github.raw"]);
                }
            }
            return language[label];
        }
        function setLocale(content) {
            var i,
                ytplabel;
            function addLocale(list) {
                list = list.split("|");
                if (list[0] === "tnd") {
                    ytplabel[i].appendChild(document.createTextNode(userLang(list[1])));
                } else if (list[0] === "ttl") {
                    ytplabel[i].setAttribute("title", userLang(list[1]));
                } else {
                    ytplabel[i].dataset.tooltipText = userLang(list[1]);
                }
            }
            ytplabel = content.querySelectorAll("[data-p]");
            i = ytplabel.length;
            while (i) {
                i -= 1;
                ytplabel[i].dataset.p.split("&").forEach(addLocale);
            }
            return content;
        }
        function customStyles() {
            var classes,
                plrApi   = document.getElementById("player-api"),
                commSect = document.getElementById("watch-discussion"),
                sidebar  = document.getElementsByClassName("branded-page-v2-secondary-col")[0],
                ytGrid   = document.querySelectorAll(".yt-uix-menu-top-level-flow-button:last-child a")[0],
                adverts  = parSets.GEN_DSBL_ADS && (document.getElementById("masthead_child") || document.getElementById("feed-pyv-container") || document.getElementsByClassName("pyv-afc-ads-container")[0] || document.getElementsByClassName("ad-div")[0] || document.querySelector(".video-list-item:not(.related-list-item)")),
                setsList = {
                    GEN_DSBL_ADS    : "part_no_ads",
                    GEN_BLUE_GLOW   : "part_dsbl_glow",
                    GEN_HIDE_FTR    : "part_hide_footer",
                    GEN_BTTR_NTF    : "part_notif_button",
                    GEN_GRID_SUBS   : "part_grid_subs",
                    GEN_GRID_SRCH   : "part_grid_search",
                    GEN_CMPT_TTLS   : "part_compact_titles",
                    VID_PLR_FIT     : "part_fit_theater",
                    VID_PLR_DYN_SIZE: "part_static_size",
                    VID_HIDE_DETLS  : "part_hide_details",
                    VID_TTL_CMPT    : "part_compact_title",
                    VID_PLST_SEP    : "part_playlist_spacer",
                    VID_DESC_SHRT   : "part_labelless_buttons"
                };
            if (ytGrid && parSets.GEN_GRID_SUBS) {
                ytGrid.click();
            } else {
                while (adverts) {
                    adverts.remove();
                    adverts = document.getElementById("masthead_child") || document.getElementById("feed-pyv-container") || document.getElementsByClassName("pyv-afc-ads-container")[0] || document.getElementsByClassName("ad-div")[0] || document.querySelector(".video-list-item:not(.related-list-item)");
                }
                if ((window.location.pathname === "/results" && sidebar && sidebar.querySelectorAll("*").length < 10) || (sidebar && ((parSets.GEN_HDE_RECM_SDBR && window.location.href.split("/feed/subscriptions").length > 1) || (parSets.GEN_HDE_SRCH_SDBR && window.location.pathname === "/results") || (parSets.GEN_HDE_CHN_SDBR && window.location.href.split(/\/(channel|user|c)\//).length > 1)))) {
                    sidebar.remove();
                }
                if (window.location.pathname === "/watch" && parSets.VID_HIDE_COMS > 1 && commSect) {
                    commSect.remove();
                }
                if (parSets.VID_HIDE_COMS === "1") {
                    document.documentElement.classList.add("part_hide_comments");
                } else if (parSets.VID_HIDE_COMS !== "1") {
                    document.documentElement.classList.remove("part_hide_comments");
                }
                if (parSets.VID_PLR_FIT && plrApi && (!!plrApi.style.maxWidth || plrApi.style.maxWidth !== parSets.VID_PLR_FIT_WDTH)) {
                    plrApi.style.maxWidth = parSets.VID_PLR_FIT_WDTH || "1280px";
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
                if (window.location.href.split("/feed/subscriptions").length < 2) {
                    document.documentElement.classList.remove("part_grid_subs");
                }
            }
        }
        function pageScript() {
            var observer,
                key  = "parreceive",
                gate = document.documentElement,
                sets = JSON.parse(gate.dataset[key] || null);
            if (!gate.pagescript) {
                gate.pagescript = true;
                observer = new window.MutationObserver(pageScript);
                return observer.observe(gate, {attributeFilter: ["data-" + key]});
            }
            if (sets) {
                parSets = sets;
                gate.dataset[key] = null;
                customStyles();
            }
        }
        function settingsMenu() {
            var pContainer,
                buttonNotif,
                buttonsSection,
                settingsButton = document.getElementById("P");
            if (settingsButton) {
                return;
            }
            function template(section) {
                var temp = document.createElement("template");
                function buildBlacklist(blist) {
                    var sortAlpha = [],
                        list      = parSets.blacklist;
                    function buildList(obj) {
                        var keys = Object.keys(obj),
                            blk  = document.createElement("div"),
                            btn  = document.createElement("button"),
                            lnk  = document.createElement("a");
                        blk.className = "blacklist";
                        btn.className = "close";
                        blk.appendChild(btn);
                        lnk.href = "/channel/" + keys[0];
                        lnk.setAttribute("target", "_blank");
                        lnk.setAttribute("title", obj[keys[0]]);
                        lnk.textContent = obj[keys[0]];
                        blk.appendChild(lnk);
                        blist.appendChild(blk);
                        blist.appendChild(document.createTextNode("\n"));
                    }
                    function sortArray(previous, next) {
                        return previous[Object.keys(previous)[0]].localeCompare(next[Object.keys(next)[0]]);
                    }
                    function fillArray(ytid) {
                        var obj = {};
                        obj[ytid] = list[ytid];
                        sortAlpha.push(obj);
                    }
                    Object.keys(list).forEach(fillArray);
                    sortAlpha.sort(sortArray).forEach(buildList);
                }
                function addValues(menu) {
                    var i,
                        ytp,
                        list = menu.querySelector("#blacklist");
                    if (!parSets) {
                        return;
                    }
                    if (list) {
                        buildBlacklist(list);
                    }
                    ytp = menu.querySelectorAll("input[id]");
                    i = ytp.length;
                    while (i) {
                        i -= 1;
                        if (ytp[i].type === "checkbox" && parSets[ytp[i].id] === true) {
                            ytp[i].setAttribute("checked", "true");
                        }
                        if (ytp[i].type === "text" && typeof parSets[ytp[i].id] === 'string') {
                            ytp[i].setAttribute("value", parSets[ytp[i].id]);
                        }
                    }
                    ytp = menu.querySelectorAll("option[data-p]");
                    i = ytp.length;
                    while (i) {
                        i -= 1;
                        if (parSets[ytp[i].parentNode.id] === ytp[i].value) {
                            ytp[i].setAttribute("selected", "true");
                        }
                    }
                }
                if (section === "MEN") {
                    temp.innerHTML = "<div id='P-settings'>" +
                        "    <div id='P-container'>" +
                        "        <div id='P-sidebar'>" +
                        "            <ul id='P-sidebar-list'>" +
                        "                <li id='GEN' class='selected' data-p='tnd|GEN'></li>" +
                        "                <li id='VID' data-p='tnd|VID'></li>" +
                        "                <li id='BLK' data-p='tnd|BLK'></li>" +
                        "                <li id='ABT' data-p='tnd|ABT'></li>" +
                        "                <li id='HLP'><a target='_blank' href='https://github.com/ParticleCore/Particle/wiki' data-p='tnd|HLP'></a></li>" +
                        "                <li id='DNT'><a title='PayPal' target='_blank' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UMVQJJFG4BFHW' data-p='tnd|DNT'></a></li>" +
                        "            </ul>" +
                        "        </div>" +
                        "    </div>" +
                        "</div>";
                } else if (section === "GEN") {
                    temp.innerHTML = "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        "        <button class='P-save' data-p='tnd|GLB_SVE'></button>" +
                        "        <button class='P-reset' data-p='tnd|GLB_RSET'></button>" +
                        "        <button class='P-impexp' data-p='ttl|GLB_IMPR'></button>" +
                        "        <button class='P-implang' data-p='ttl|GLB_LOCL_LANG&tnd|" + ((parSets.GEN_LOCL_LANG && parSets.localLang && "GLB_LOCL_LANG_CSTM") || "LOCALE") + "'></button>" +
                        "        <h2 data-p='tnd|GEN_TTL'></h2>" +
                        "    </div>" +
                        "    <hr class='P-horz'>" +
                        "    <h3 data-p='tnd|GEN_GEN'></h3>" +
                        "    <div><input id='GEN_LOCL_LANG' type='checkbox'><label for='GEN_LOCL_LANG' data-p='tnd|GEN_LOCL_LANG'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#custom_lang' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_DSBL_ADS' type='checkbox'><label for='GEN_DSBL_ADS' data-p='tnd|GEN_DSBL_ADS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#outside_ads' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_YT_LOGO_LINK' type='checkbox'><label for='GEN_YT_LOGO_LINK' data-p='tnd|GEN_YT_LOGO_LINK'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#logo_redirect' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_SUB_LIST' type='checkbox'><label for='GEN_SUB_LIST' data-p='tnd|GEN_SUB_LIST'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#sub_playlist' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_INF_SCRL' type='checkbox'><label for='GEN_INF_SCRL' data-p='tnd|GEN_INF_SCRL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#infinite_scroll' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_SDBR_ON' type='checkbox'><label for='GEN_SDBR_ON' data-p='tnd|GEN_SDBR_ON'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#sidebar_on' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_REM_APUN' type='checkbox'><label for='GEN_REM_APUN' data-p='tnd|GEN_REM_APUN'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#remove_autoplay' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_SPF_OFF' type='checkbox'><label for='GEN_SPF_OFF' data-p='tnd|GEN_SPF_OFF'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#spf_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div>" +
                        "        <label for='GEN_CHN_DFLT_PAGE' data-p='tnd|GEN_CHN_DFLT_PAGE'></label>" +
                        "        <div class='P-select'>" +
                        "            <select id='GEN_CHN_DFLT_PAGE'>" +
                        "                <option value='default' data-p='tnd|GEN_CHN_DFLT_PAGE_DFLT'></option>" +
                        "                <option value='videos' data-p='tnd|GEN_CHN_DFLT_PAGE_VID'></option>" +
                        "                <option value='playlists' data-p='tnd|GEN_CHN_DFLT_PAGE_PL'></option>" +
                        "                <option value='channels' data-p='tnd|GEN_CHN_DFLT_PAGE_CHN'></option>" +
                        "                <option value='discussion' data-p='tnd|GEN_CHN_DFLT_PAGE_DISC'></option>" +
                        "                <option value='about' data-p='tnd|GEN_CHN_DFLT_PAGE_ABT'></option>" +
                        "            </select>" +
                        "        </div>\n" +
                        "        <a href='https://github.com/ParticleCore/Particle/wiki/Features#channel_page' data-p='ttl|FTR_DESC' target='features'>?</a>" +
                        "    </div>" +
                        "    <h3 data-p='tnd|GEN_LYT'></h3>" +
                        "    <div><input id='GEN_GRID_SUBS' type='checkbox'><label for='GEN_GRID_SUBS' data-p='tnd|GEN_GRID_SUBS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#sub_grid' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_GRID_SRCH' type='checkbox'><label for='GEN_GRID_SRCH' data-p='tnd|GEN_GRID_SRCH'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#search_grid' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_BTTR_NTF' type='checkbox'><label for='GEN_BTTR_NTF' data-p='tnd|GEN_BTTR_NTF'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#blue_box' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_DSB_HVRC' type='checkbox'><label for='GEN_DSB_HVRC' data-p='tnd|GEN_DSB_HVRC'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hovercards_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_CMPT_TTLS' type='checkbox'><label for='GEN_CMPT_TTLS' data-p='tnd|GEN_CMPT_TTLS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#feed_titles' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_BLUE_GLOW' type='checkbox'><label for='GEN_BLUE_GLOW' data-p='tnd|GEN_BLUE_GLOW'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#blue_glow' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_HIDE_FTR' type='checkbox'><label for='GEN_HIDE_FTR' data-p='tnd|GEN_HIDE_FTR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_footer' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_HDE_RECM_SDBR' type='checkbox'><label for='GEN_HDE_RECM_SDBR' data-p='tnd|GEN_HDE_RECM_SDBR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_recom_sidebar' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_HDE_SRCH_SDBR' type='checkbox'><label for='GEN_HDE_SRCH_SDBR' data-p='tnd|GEN_HDE_SRCH_SDBR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_search_sidebar' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_HDE_CHN_SDBR' type='checkbox'><label for='GEN_HDE_CHN_SDBR' data-p='tnd|GEN_HDE_CHN_SDBR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_channel_sidebar' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "</div>";
                } else if (section === "VID") {
                    temp.innerHTML = "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        "        <button class='P-save' data-p='tnd|GLB_SVE'></button>" +
                        "        <button class='P-reset' data-p='tnd|GLB_RSET'></button>" +
                        "        <button class='P-impexp' data-p='ttl|GLB_IMPR'></button>" +
                        "        <button class='P-implang' data-p='ttl|GLB_LOCL_LANG&tnd|" + ((parSets.GEN_LOCL_LANG && parSets.localLang && "GLB_LOCL_LANG_CSTM") || "LOCALE") + "'></button>" +
                        "        <h2 data-p='tnd|VID_TTL'></h2>" +
                        "    </div>" +
                        "    <hr class='P-horz'>" +
                        "    <h3 data-p='tnd|VID_PLR'></h3>" +
                        "    <div><input id='VID_PLR_ADS' type='checkbox'><label for='VID_PLR_ADS' data-p='tnd|VID_PLR_ADS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#video_ads' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_SUB_ADS' type='checkbox'><label for='VID_SUB_ADS' data-p='tnd|VID_SUB_ADS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#subs_ads_on' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_ALVIS' type='checkbox'><label for='VID_PLR_ALVIS' data-p='tnd|VID_PLR_ALVIS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#floating_player' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_ATPL' type='checkbox'><label for='VID_PLR_ATPL' data-p='tnd|VID_PLR_ATPL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#video_autoplay' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_CC' type='checkbox'><label for='VID_PLR_CC' data-p='tnd|VID_PLR_CC'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#subtitles_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_ANTS' type='checkbox'><label for='VID_PLR_ANTS' data-p='tnd|VID_PLR_ANTS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#annotations_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_END_SHRE' type='checkbox'><label for='VID_END_SHRE' data-p='tnd|VID_END_SHRE'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#share_panel_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_VOL_MEM' type='checkbox'><label for='VID_PLR_VOL_MEM' data-p='tnd|VID_PLR_VOL_MEM'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#remember_volume' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_ALACT' type='checkbox'><label for='VID_PLR_ALACT' data-p='tnd|VID_PLR_ALACT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#shortcuts_on' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_SIZE_MEM' type='checkbox'><label for='VID_PLR_SIZE_MEM' data-p='tnd|VID_PLR_SIZE_MEM'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#remember_mode' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_VOL_WHEEL' type='checkbox'><label for='VID_VOL_WHEEL' data-p='tnd|VID_VOL_WHEEL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#wheel_volume' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_DASH' type='checkbox'><label for='VID_PLR_DASH' data-p='tnd|VID_PLR_DASH'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#dash_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_HFR' type='checkbox'><label for='VID_PLR_HFR' data-p='tnd|VID_PLR_HFR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hfr_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_HTML5' type='checkbox'><label for='VID_PLR_HTML5' data-p='tnd|VID_PLR_HTML5'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#force_html5' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div>" +
                        "        <label for='VID_DFLT_QLTY' data-p='tnd|VID_DFLT_QLTY'></label>" +
                        "        <div class='P-select'>" +
                        "            <select id='VID_DFLT_QLTY'>" +
                        "                <option value='auto' data-p='tnd|VID_DFLT_QLTY_AUTO'></option>" +
                        "                <option value='highres' data-p='tnd|VID_DFLT_QLTY_ORIG'></option>" +
                        "                <option value='hd2880' data-p='tnd|VID_DFLT_QLTY_2880'></option>" +
                        "                <option value='hd2160' data-p='tnd|VID_DFLT_QLTY_2160'></option>" +
                        "                <option value='hd1440' data-p='tnd|VID_DFLT_QLTY_1440'></option>" +
                        "                <option value='hd1080' data-p='tnd|VID_DFLT_QLTY_1080'></option>" +
                        "                <option value='hd720' data-p='tnd|VID_DFLT_QLTY_720'></option>" +
                        "                <option value='large' data-p='tnd|VID_DFLT_QLTY_LRG'></option>" +
                        "                <option value='medium' data-p='tnd|VID_DFLT_QLTY_MDM'></option>" +
                        "                <option value='small' data-p='tnd|VID_DFLT_QLTY_SML'></option>" +
                        "                <option value='tiny' data-p='tnd|VID_DFLT_QLTY_TNY'></option>" +
                        "            </select>" +
                        "        </div>\n" +
                        "        <a href='https://github.com/ParticleCore/Particle/wiki/Features#default_quality' data-p='ttl|FTR_DESC' target='features'>?</a>" +
                        "    </div>" +
                        "    <h3 data-p='tnd|VID_PLR_LYT'></h3>" +
                        "    <div><input id='VID_PLR_INFO' type='checkbox'><label for='VID_PLR_INFO' data-p='tnd|VID_PLR_INFO'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#info_bar' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_DYN_SIZE' type='checkbox'><label for='VID_PLR_DYN_SIZE' data-p='tnd|VID_PLR_DYN_SIZE'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#dynamic_size_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_FIT' type='checkbox'><label for='VID_PLR_FIT' data-p='tnd|VID_PLR_FIT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#fit_to_page' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_FIT_WDTH' type='text' placeholder='1280px' size='6'><label for='VID_PLR_FIT_WDTH' data-p='tnd|VID_PLR_FIT_WDTH'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#fit_max_width' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <h3 data-p='tnd|VID_PLST'></h3>" +
                        "    <div><input id='VID_PLST_SEP' type='checkbox'><label for='VID_PLST_SEP' data-p='tnd|VID_PLST_SEP'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#separate_playlist' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLST_ATPL' type='checkbox'><label for='VID_PLST_ATPL' data-p='tnd|VID_PLST_ATPL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#playlist_autoplay' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLST_RVRS' type='checkbox'><label for='VID_PLST_RVRS' data-p='tnd|VID_PLST_RVRS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#playlist_reverse' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <h3 data-p='tnd|VID_LAYT'></h3>" +
                        "    <div>" +
                        "        <label for='VID_HIDE_COMS' data-p='tnd|VID_HIDE_COMS'></label>" +
                        "        <div class='P-select'>" +
                        "            <select id='VID_HIDE_COMS'>" +
                        "                <option value='0' data-p='tnd|VID_HIDE_COMS_SHOW'></option>" +
                        "                <option value='1' data-p='tnd|VID_HIDE_COMS_HIDE'></option>" +
                        "                <option value='2' data-p='tnd|VID_HIDE_COMS_REM'></option>" +
                        "            </select>" +
                        "        </div>\n" +
                        "        <a href='https://github.com/ParticleCore/Particle/wiki/Features#comments' data-p='ttl|FTR_DESC' target='features'>?</a>" +
                        "    </div>" +
                        "    <div>" +
                        "        <label for='VID_SDBR_ALGN' data-p='tnd|VID_SDBR_ALGN'></label>" +
                        "        <div class='P-select'>" +
                        "            <select id='VID_SDBR_ALGN'>" +
                        "                <option value='0' data-p='tnd|VID_SDBR_ALGN_NONE'></option>" +
                        "                <option value='1' data-p='tnd|VID_SDBR_ALGN_LEFT'></option>" +
                        "                <option value='2' data-p='tnd|VID_SDBR_ALGN_RIGHT'></option>" +
                        "            </select>" +
                        "        </div>\n" +
                        "        <a href='https://github.com/ParticleCore/Particle/wiki/Features#sidebar_align' data-p='ttl|FTR_DESC' target='features'>?</a>" +
                        "    </div>" +
                        "    <div><input id='VID_TTL_CMPT' type='checkbox'><label for='VID_TTL_CMPT' data-p='tnd|VID_TTL_CMPT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#video_title' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_DESC_SHRT' type='checkbox'><label for='VID_DESC_SHRT' data-p='tnd|VID_DESC_SHRT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#labelless_buttons' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_VID_CNT' type='checkbox'><label for='VID_VID_CNT' data-p='tnd|VID_VID_CNT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#upload_counter' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_POST_TIME' type='checkbox'><label for='VID_POST_TIME' data-p='tnd|VID_POST_TIME'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#relative_upload_time' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_HIDE_DETLS' type='checkbox'><label for='VID_HIDE_DETLS' data-p='tnd|VID_HIDE_DETLS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_video_details' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_LAYT_AUTO_PNL' type='checkbox'><label for='VID_LAYT_AUTO_PNL' data-p='tnd|VID_LAYT_AUTO_PNL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#expand_description' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "</div>";
                } else if (section === "BLK") {
                    temp.innerHTML = "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        "        <button class='P-save' data-p='tnd|GLB_SVE'></button>" +
                        "        <button class='P-reset' data-p='tnd|GLB_RSET'></button>" +
                        "        <button class='P-impexp' data-p='ttl|GLB_IMPR'></button>" +
                        "        <button class='P-implang' data-p='ttl|GLB_LOCL_LANG&tnd|" + ((parSets.GEN_LOCL_LANG && parSets.localLang && "GLB_LOCL_LANG_CSTM") || "LOCALE") + "'></button>" +
                        "        <h2 data-p='tnd|BLK_TTL'></h2>" +
                        "    </div>" +
                        "    <hr class='P-horz'>" +
                        "    <h3 data-p='tnd|BLK_BLK'></h3>" +
                        "    <div><input id='BLK_ON' type='checkbox'><label for='BLK_ON' data-p='tnd|BLK_ON'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#blacklist_on' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div id='blacklist'>" +
                        "        <div id='blacklist-controls'>" +
                        "            <button id='blacklist-edit' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'><span class='yt-uix-button-content' data-p='tnd|BLCK_EDIT'></span></button>" +
                        "            <button id='blacklist-save' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'><span class='yt-uix-button-content' data-p='tnd|BLCK_SAVE'></span></button>" +
                        "            <button id='blacklist-close' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'><span class='yt-uix-button-content' data-p='tnd|BLCK_CLSE'></span></button>" +
                        "        </div>" +
                        "        <textarea id='blacklist-edit-list'></textarea>" +
                        "    </div>" +
                        "    <br>" +
                        "</div>";
                } else if (section === "ABT") {
                    temp.innerHTML = "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        "        <h2 data-p='tnd|ABT_TTL'></h2>" +
                        "    </div>" +
                        "    <hr class='P-horz'>" +
                        "    <h3 data-p='tnd|ABT_THKS'></h3>" +
                        "    <div><a target='_blank' href='https://github.com/YePpHa'>Jeppe Rune Mortensen</a><span data-p='tnd|ABT_THKS_YEPPHA'></span></div>" +
                        "    <div><a target='_blank' href='http://www.greasespot.net/'>Greasemonkey</a> + <a href='http://tampermonkey.net/'>Tampermonkey</a><span data-p='tnd|ABT_THKS_USERSCRIPT'></span></div>" +
                        "    <div><a target='_blank' href='http://stackoverflow.com/'>Stack Overflow</a><span data-p='tnd|ABT_THKS_STACKOV'></span></div>" +
                        "    <h3 data-p='tnd|ABT_INFO'></h3>" +
                        "    <div><a target='_blank' href='https://github.com/ParticleCore/Particle/'>GitHub</a></div>" +
                        "    <div><a target='_blank' href='https://greasyfork.org/en/users/8223-particlecore'>Greasy Fork</a></div>" +
                        "    <div><a target='_blank' href='http://openuserjs.org/scripts/ParticleCore/'>OpenUserJS</a></div>" +
                        "</div>";
                }
                addValues(temp.content);
                return setLocale(temp.content);
            }
            function navigateSettings(event) {
                function exportSettings(target) {
                    var expCont = document.getElementById("exp-cont");
                    if (target.classList.contains("P-impexp") || target.classList.contains("P-implang")) {
                        if (expCont) {
                            expCont.remove();
                            return;
                        }
                        expCont = document.createElement("template");
                        expCont.innerHTML = "<div id='exp-cont'>" +
                            "   <button id='" + ((target.classList.contains("P-impexp") && "impexp-save") || "implang-save") + "' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'>" +
                            "        <span class='yt-uix-button-content' data-p='tnd|GLB_IMPR_SAVE'></span>" +
                            "    </button>" +
                            "   <textarea id='impexp-list'></textarea>" +
                            "</div>";
                        expCont = setLocale(expCont.content).firstChild;
                        document.getElementById("P-content").appendChild(expCont);
                        document.getElementById("impexp-list").value = JSON.stringify((target.classList.contains("P-impexp") && parSets) || parSets.localLang || language, undefined, 2);
                    } else if (target.id === "impexp-save" || target.id === "implang-save") {
                        if (target.id === "implang-save") {
                            set("localLang", JSON.parse(document.getElementById("impexp-list").value));
                            window.location.reload();
                        } else {
                            set("parSets", JSON.parse(document.getElementById("impexp-list").value));
                            document.getElementById("P").click();
                            document.getElementById("P").click();
                        }
                    }
                }
                function manageBlackList(target) {
                    if (target.id === "blacklist-edit") {
                        document.getElementById("blacklist").classList.add("edit");
                        document.getElementById("blacklist-edit-list").value = JSON.stringify(parSets.blacklist, undefined, 2);
                    } else if (target.id === "blacklist-save") {
                        set("blacklist", JSON.parse(document.getElementById("blacklist-edit-list").value));
                    } else if (target.id === "blacklist-close") {
                        document.getElementById("BLK").click();
                    }
                }
                function remBlackList() {
                    var newKey = parSets.blacklist;
                    delete newKey[event.target.nextSibling.href.split("/channel/")[1]];
                    event.target.parentNode.remove();
                    set("blacklist", newKey);
                }
                function saveSettings(salt) {
                    var value,
                        notification = document.getElementById("appbar-main-guide-notification-container"),
                        navId        = document.getElementsByClassName("selected")[0].id,
                        userSets     = document.getElementById("P-content").querySelectorAll("[id^='" + navId + "']"),
                        length       = userSets.length,
                        savedSets    = parSets;
                    function hideNotif() {
                        document.body.classList.remove("show-guide-button-notification");
                    }
                    while (length) {
                        length -= 1;
                        value = (userSets[length].checked && (userSets[length].value === "on" || userSets[length].value)) || (userSets[length].length && userSets[length].value) || (userSets[length].getAttribute("type") === "text" && userSets[length].value);
                        if (value) {
                            savedSets[userSets[length].name || userSets[length].id] = value;
                        } else if (!value && userSets[length].type !== "radio") {
                            savedSets[userSets[length].id] = false;
                        }
                    }
                    set("parSets", savedSets);
                    customStyles();
                    if (!salt) {
                        if (notification.childNodes.length < 1) {
                            notification.remove();
                            notification = document.createElement("template");
                            notification.innerHTML = "<div id='appbar-main-guide-notification-container'>" +
                                "    <div class='appbar-guide-notification' role='alert'>" +
                                "        <span class='appbar-guide-notification-content-wrapper yt-valign'>" +
                                "            <span class='appbar-guide-notification-icon yt-sprite'></span>" +
                                "            <span class='appbar-guide-notification-text-content'></span>" +
                                "        </span>" +
                                "    </div>" +
                                "</div>";
                            notification = setLocale(notification.content).firstChild;
                            document.getElementsByClassName("yt-masthead-logo-container")[0].appendChild(notification);
                        }
                        document.getElementsByClassName("appbar-guide-notification-text-content")[0].textContent = userLang("GLB_SVE_SETS");
                        document.body.classList.add("show-guide-button-notification");
                        window.setTimeout(hideNotif, 2000);
                    }
                }
                if (event.target.classList.contains("P-save")) {
                    saveSettings();
                } else if (event.target.classList.contains("P-reset")) {
                    set("parSets", defSets);
                    settingsButton.click();
                    settingsButton.click();
                } else if (event.target.classList.contains("close")) {
                    remBlackList();
                } else if (event.target.classList.contains("P-impexp") || event.target.id === "impexp-save" || event.target.classList.contains("P-implang") || event.target.id === "implang-save") {
                    exportSettings(event.target);
                } else if (event.target.id === "blacklist-edit" || event.target.id === "blacklist-save" || event.target.id === "blacklist-close") {
                    manageBlackList(event.target);
                } else if (event.target.id === "P-container" || event.target.id === "P-settings") {
                    event = (event.target.id === "P-settings") ? event.target : event.target.parentNode;
                    event.remove();
                } else if (event.target.id !== "DNT" && event.target.tagName !== "A" && event.target.parentNode.id === "P-sidebar-list") {
                    saveSettings("no-notification");
                    document.getElementById("P-content").remove();
                    pContainer = document.getElementById("P-container");
                    pContainer.appendChild(template(event.target.id));
                    event.target.parentNode.getElementsByClassName("selected")[0].removeAttribute("class");
                    event.target.className = "selected";
                }
            }
            function settingsTemplate(event) {
                var bodyContainer,
                    pageContainer,
                    pWrapper = document.getElementById("P-settings");
                if (event.target.id === "P") {
                    if (pWrapper) {
                        pWrapper.remove();
                    } else {
                        bodyContainer = document.getElementById("body-container");
                        pageContainer = document.getElementById("page-container");
                        pWrapper = template("MEN");
                        pWrapper.querySelector("#P-container").appendChild(template("GEN"));
                        bodyContainer.insertBefore(pWrapper, pageContainer);
                        eventHandler([document, "click", navigateSettings]);
                    }
                    document[(isChrome && "body") || "documentElement"].scrollTop = 0;
                }
            }
            buttonNotif = document.getElementsByClassName("notifications-container")[0];
            buttonsSection = document.getElementById("yt-masthead-user") || document.getElementById("yt-masthead-signin");
            if (buttonsSection && !document.getElementById("P")) {
                settingsButton = document.createElement("button");
                settingsButton.id = "P";
                settingsButton.setAttribute("title", userLang("YTSETS"));
                eventHandler([document, "click", settingsTemplate]);
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
                    name = document.getElementsByClassName("yt-user-info")[0];
                function videoCounter() {
                    link.href = window.location.origin + "/channel/" + user.dataset.ytid + "/videos";
                    span = document.createElement("span");
                    span.textContent = " · ";
                    name.appendChild(span);
                    name.appendChild(link);
                }
                function getPLInfo(details) {
                    details = details.target.response.querySelector(".pl-header-details li:nth-child(2)");
                    if (details) {
                        link.className = "spf-link";
                        link.textContent = channelId[user.dataset.ytid] = details.textContent;
                        videoCounter();
                    }
                }
                if (!document.getElementById("uploaded-videos") && name) {
                    link = document.createElement("a");
                    link.id = "uploaded-videos";
                    name.appendChild(link);
                    user = name.querySelector("a");
                    if (channelId[user.dataset.ytid]) {
                        link.textContent = channelId[user.dataset.ytid];
                        videoCounter();
                    } else {
                        localXHR("GET", getPLInfo, "/playlist?list=" + user.dataset.ytid.replace("UC", "UU"), "doc");
                    }
                }
            }
            function publishedTime() {
                var watchTime = document.getElementsByClassName("watch-time-text")[0];
                function getCHInfo(details) {
                    var retry  = details.target.responseURL.split("/videos").length < 2,
                        isLive = details.target.response.querySelector(".yt-badge-live");
                    details = details.target.response.querySelectorAll("[data-context-item-id='" + window.ytplayer.config.args.video_id + "'] .yt-lockup-meta-info li");
                    if (!isLive) {
                        if (details && details.length > 0 && watchTime.textContent.split("·").length < 2) {
                            watchTime.textContent += " · " + details[retry ? 0 : 1].textContent;
                        } else if (retry) {
                            localXHR("GET", getCHInfo, "/channel/" + window.ytplayer.config.args.ucid + "/videos", "doc");
                        }
                    }
                }
                if (watchTime && !watchTime.fetching && window.ytplayer && window.ytplayer.config) {
                    watchTime.fetching = true;
                    localXHR("GET", getCHInfo, "/channel/" + window.ytplayer.config.args.ucid + "/search?query=%22" + window.ytplayer.config.args.video_id + "%22", "doc");
                }
            }
            if (window.location.pathname === "/watch") {
                if (parSets.VID_VID_CNT) {
                    username();
                }
                if (parSets.VID_POST_TIME) {
                    publishedTime();
                }
            }
        }
        function commentsButton() {
            var wrapper,
                comments = document.getElementById("watch-discussion"),
                isLive   = window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.livestream;
            function showComments(event) {
                if (event.target.parentNode.id === "P-show-comments") {
                    if (comments.lazyload) {
                        window.spf.load(comments.lazyload[0], comments.lazyload[1]);
                    }
                    comments.classList.toggle("show");
                    wrapper.querySelector("button").textContent = userLang((comments.classList.contains("show") && "HIDE_CMTS") || "SHOW_CMTS");
                }
            }
            if (!isLive && comments && !document.getElementById("P-show-comments") && parSets.VID_HIDE_COMS === "1") {
                wrapper = document.createElement("template");
                wrapper.innerHTML = "<div id='P-show-comments' class='yt-card'>" +
                    "    <button class='yt-uix-button yt-uix-button-expander' data-p='tnd|SHOW_CMTS'></button>" +
                    "</div>";
                wrapper = setLocale(wrapper.content).firstChild;
                eventHandler([document, "click", showComments]);
                comments.parentNode.insertBefore(wrapper, comments);
            }
        }
        function playerMode() {
            var pageElement   = document.getElementById("page"),
                playerElement = document.getElementById("player");
            if (parSets.VID_PLR_SIZE_MEM && parSets.theaterMode) {
                if (window.navigator.cookieEnabled && (document.cookie.split("wide=0").length > 1 || document.cookie.split("wide=1").length < 2)) {
                    document.cookie = "wide=1; path=/";
                }
                if (playerElement && window.location.pathname === "/watch") {
                    pageElement.classList.add("watch-wide");
                    pageElement.className = pageElement.className.replace("non-", "");
                    playerElement.className = playerElement.className.replace("small", "large");
                }
            } else if (parSets.VID_PLR_SIZE_MEM && !parSets.theaterMode) {
                if (window.navigator.cookieEnabled && (document.cookie.split("wide=1").length > 1 || document.cookie.split("wide=0").length < 2)) {
                    document.cookie = "wide=0; path=/";
                }
                if (playerElement && window.location.pathname === "/watch") {
                    pageElement.classList.remove("watch-wide");
                    pageElement.className = pageElement.className.replace("watch-stage", "watch-non-stage");
                    playerElement.className = playerElement.className.replace("large", "small").replace("medium", "small");
                }
            }
        }
        function argsCleaner(config) {
            function rvshfr(list, type) {
                var i,
                    temp,
                    newList = [];
                list = list.split(",");
                i = list.length;
                while (i) {
                    i -= 1;
                    if (type === "HFR") {
                        temp = list[i].split(/fps\=([0-9]{2})/)[1];
                        if (!temp || temp < 31) {
                            newList.push(list[i]);
                        }
                    } else {
                        temp = false;
                        if (list[i].split("author").length > 1) {
                            temp = list[i].split(/\=|&/g);
                            temp = decodeURIComponent(temp[temp.indexOf("author") + 1]).replace(/\+/g, " ");
                        }
                        if (!temp || JSON.stringify(parSets.blacklist).split('"' + temp + '"').length < 2) {
                            newList.unshift(list[i]);
                        }
                    }
                }
                return newList.join(",");
            }
            if (config.args.video_id) {
                config.args.dash = (parSets.VID_PLR_DASH && "0") || config.args.dash;
                config.args.vq = parSets.VID_DFLT_QLTY;
                if (parSets.VID_DFLT_QLTY !== "auto") {
                    try {
                        if (!window.localStorage["yt-player-quality"] || window.localStorage["yt-player-quality"].split(parSets.VID_DFLT_QLTY).length < 2) {
                            window.localStorage["yt-player-quality"] = JSON.stringify({
                                "data": parSets.VID_DFLT_QLTY,
                                "expiration": new Date().getTime() + 864E5,
                                "creation": new Date().getTime()
                            });
                        }
                    } catch (ignore) {}
                }
                if (config.args.cc_load_policy && parSets.VID_PLR_CC) {
                    config.args.cc_load_policy = "0";
                    try {
                        window.localStorage["yt-html5-player-modules::subtitlesModuleData::module-enabled"] = false;
                    } catch (ignore) {}
                }
                if (parSets.VID_PLR_HTML5) {
                    config.html5 = true;
                }
                if (parSets.VID_PLR_INFO) {
                    config.args.showinfo = "1";
                }
                if (!parSets.VID_PLR_ATPL) {
                    config.args.autoplay = "0";
                }
                if (parSets.VID_PLR_SIZE_MEM) {
                    config.args.player_wide = (parSets.theaterMode && "1") || "0";
                }
                if (config.args.iv_load_policy && parSets.VID_PLR_ANTS) {
                    config.args.iv_load_policy = "3";
                }
                if ((parSets.VID_PLR_ADS && (!parSets.VID_SUB_ADS || (parSets.VID_SUB_ADS && !config.args.subscribed)))) {
                    delete config.args.ad3_module;
                }
                if (config.args.vmap && !parSets.VID_PLR_ATPL && !parSets.VID_PLR_ADS) {
                    config.args.dvmap = config.args.vmap;
                    delete config.args.vmap;
                }
                if (parSets.VID_PLR_HFR && config.args.adaptive_fmts) {
                    config.args.adaptive_fmts = rvshfr(config.args.adaptive_fmts, "HFR");
                }
                if (parSets.BLK_ON && window.yt && window.yt.config_ && window.yt.config_.RELATED_PLAYER_ARGS && window.yt.config_.RELATED_PLAYER_ARGS.rvs) {
                    config.args.rvs = window.yt.config_.RELATED_PLAYER_ARGS.rvs = rvshfr(window.yt.config_.RELATED_PLAYER_ARGS.rvs);
                }
                if (window.ytplayer) {
                    if (window.ytplayer.config === null) {
                        window.ytplayer.config = config;
                    } else if (window.ytplayer.config) {
                        window.ytplayer.config.args = config.args;
                    }
                }
                return config;
            }
        }
        function alwaysVisible() {
            function initFloater() {
                var height,
                    oldPosX,
                    oldPosY,
                    XBounds,
                    YBounds,
                    maxOffsetX,
                    maxOffsetY,
                    minOffsetX,
                    minOffsetY,
                    activeMove,
                    videoPlayer     = document.getElementById("movie_player"),
                    playerContainer = document.getElementById("player-api"),
                    containerSize   = playerContainer && playerContainer.getBoundingClientRect(),
                    sidebar         = document.getElementById("watch7-sidebar"),
                    sidebarSize     = sidebar && sidebar.getBoundingClientRect(),
                    outOfSight      = containerSize.bottom < ((containerSize.height / 2) + 51),
                    isFloater       = document.documentElement.classList.contains("floater"),
                    floaterUI       = document.getElementById("part_floaterui");
                function updatePos() {
                    if (!document.documentElement.classList.contains("floater")) {
                        return eventHandler([window, "resize", updatePos, false, "remove"]);
                    }
                    sidebar = document.getElementById("watch7-sidebar");
                    sidebarSize = sidebar.getBoundingClientRect();
                    height = ((sidebarSize.width > 299 && sidebarSize.width) || 300) / (16 / 9);
                    videoPlayer.style.width = ((sidebarSize.width > 299 && sidebarSize.width) || 300) + "px";
                    videoPlayer.style.height = height + "px";
                    XBounds = parSets.floaterX > -1 && (parSets.floaterX + videoPlayer.offsetWidth) < document.documentElement.offsetWidth;
                    YBounds = parSets.floaterY > 50 && (parSets.floaterY + videoPlayer.offsetHeight) < document.documentElement.offsetHeight;
                    if (!parSets.customFloater) {
                        videoPlayer.style.top = "calc(50% - " + (height / 2) + "px)";
                        videoPlayer.style.left = sidebarSize.left + "px";
                    } else {
                        videoPlayer.style.top = ((YBounds && parSets.floaterY) || (parSets.floaterY < 51 && 51) || (document.documentElement.offsetHeight - videoPlayer.offsetHeight)) + "px";
                        videoPlayer.style.left = ((XBounds && parSets.floaterX) || (parSets.floaterX < 1 && "0") || (document.documentElement.offsetWidth - videoPlayer.offsetWidth)) + "px";
                    }
                }
                function customFloaterPosition(event) {
                    var newXval,
                        newYval;
                    if (activeMove) {
                        if (event.type === "mouseup") {
                            set("floaterY", videoPlayer.offsetTop);
                            set("floaterX", videoPlayer.offsetLeft);
                            activeMove = false;
                            return;
                        }
                        if (event.type === "mousemove") {
                            newXval = videoPlayer.offsetLeft + (event.clientX - oldPosX);
                            newYval = videoPlayer.offsetTop + (event.clientY - oldPosY);
                            newXval = (event.clientX < (minOffsetX + 1) && "0") || (event.clientX > (maxOffsetX - 1) && (document.documentElement.offsetWidth - videoPlayer.offsetWidth)) || newXval;
                            newYval = (event.clientY < (minOffsetY + 1) && "51") || (event.clientY > (maxOffsetY - 1) && (document.documentElement.offsetHeight - videoPlayer.offsetHeight)) || newYval;
                            if (newYval !== videoPlayer.style.top) {
                                videoPlayer.style.top = newYval + "px";
                            }
                            if (newXval !== videoPlayer.style.left) {
                                videoPlayer.style.left = newXval + "px";
                            }
                        }
                        oldPosX = event.clientX;
                        oldPosY = event.clientY;
                    } else if (!document.getElementById("part_floaterui")) {
                        eventHandler([document, "mousemove", customFloaterPosition, false, "remove"]);
                        eventHandler([document, "mouseup", customFloaterPosition, false, "remove"]);
                    }
                }
                function floaterControl(event) {
                    if (event.target.id === "part_floaterui_scrolltop") {
                        document[(isChrome && "body") || "documentElement"].scrollTop = 0;
                    } else if (event.target.id === "part_floaterui_reset") {
                        set("customFloater", false);
                        updatePos();
                    } else if (event.target.id === "part_floaterui_move") {
                        set("customFloater", true);
                        activeMove = true;
                        maxOffsetX = document.documentElement.offsetWidth - (videoPlayer.offsetWidth - (event.clientX - videoPlayer.offsetLeft));
                        maxOffsetY = document.documentElement.offsetHeight - (videoPlayer.offsetHeight - (event.clientY - videoPlayer.offsetTop));
                        minOffsetX = Math.abs(event.clientX - videoPlayer.offsetLeft);
                        minOffsetY = Math.abs(event.clientY - videoPlayer.offsetTop) + 51;
                        customFloaterPosition(event);
                    } else if (!document.getElementById("part_floaterui")) {
                        eventHandler([document, "mousedown", floaterControl, false, "remove"]);
                    }
                }
                if (!sidebar) {
                    eventHandler([window, "scroll", initFloater, false, "remove"]);
                    return;
                }
                if (videoPlayer) {
                    if (!floaterUI) {
                        floaterUI = document.createElement("template");
                        floaterUI.innerHTML = "<div id='part_floaterui'>" +
                            "    <button id='part_floaterui_move' data-p='ttl|VID_PLR_ALVIS_MOVE'></button>" +
                            "    <button id='part_floaterui_reset' data-p='ttl|VID_PLR_ALVIS_RST'></button>" +
                            "    <button id='part_floaterui_scrolltop' data-p='ttl|VID_PLR_ALVIS_SCRL_TOP'></button>" +
                            "</div>";
                        floaterUI = setLocale(floaterUI.content).firstChild;
                        eventHandler([document, "mousemove", customFloaterPosition]);
                        eventHandler([document, "mouseup", customFloaterPosition]);
                        eventHandler([document, "mousedown", floaterControl]);
                        videoPlayer.appendChild(floaterUI);
                    }
                    if (outOfSight && !isFloater) {
                        document.documentElement.classList.add("floater");
                        eventHandler([window, "resize", updatePos]);
                        updatePos();
                    } else if (!outOfSight && isFloater) {
                        document.documentElement.classList.remove("floater");
                        eventHandler([window, "resize", updatePos, false, "remove"]);
                        videoPlayer.removeAttribute("style");
                    }
                }
            }
            if (parSets.VID_PLR_ALVIS) {
                if (window.location.pathname === "/watch") {
                    eventHandler([window, "scroll", initFloater]);
                } else if (window.location.pathname !== "/watch") {
                    eventHandler([window, "scroll", initFloater, false, "remove"]);
                }
            }
        }
        function subPlaylist() {
            var i,
                list      = [],
                button    = document.getElementById("subscription-playlist"),
                navMenu   = document.getElementsByClassName("appbar-nav-menu")[0],
                listTitle = document.getElementsByClassName("appbar-nav-menu")[0],
                videoList = document.getElementsByClassName("addto-watch-later-button");
            function initSubPlaylist(event) {
                if (event.target.parentNode.id === "subscription-playlist") {
                    i = videoList.length;
                    while (i) {
                        i -= 1;
                        if (i > -1) {
                            list.push(videoList[i].dataset.videoIds);
                        }
                    }
                    list.reverse().join("%2C");
                    listTitle = listTitle && listTitle.getElementsByClassName("epic-nav-item-heading")[0].textContent.trim();
                    button = document.getElementById("subscription-playlist");
                    button.href = "/watch_videos?title=" + listTitle + "&video_ids=" + list;
                }
            }
            if (parSets.GEN_SUB_LIST && window.location.href.split("/feed/subscriptions").length > 1 && !button && listTitle && videoList) {
                button = document.createElement("template");
                button.innerHTML = "<li id='subscription-playlist-icon'>" +
                    "    <a id='subscription-playlist' data-p='ttl|SUB_PLST' class='yt-uix-button spf-link yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default'>" +
                    "        <span class='yt-uix-button-content'></span>" +
                    "    </a>" +
                    "</li>";
                button = setLocale(button.content).firstChild;
                navMenu.appendChild(button);
                eventHandler([document, "click", initSubPlaylist]);
            }
        }
        function playerReady() {
            var video;
            function alwaysActive(event) {
                var x,
                    y,
                    sets = document.getElementById("P-settings");
                if (event.target.tagName === "IFRAME" || event.target.getAttribute("contenteditable") || (sets && sets.contains(event.target)) || window.getSelection().toString() !== "") {
                    return;
                }
                if (["EMBED", "INPUT", "OBJECT", "TEXTAREA"].indexOf(document.activeElement.tagName) < 0) {
                    x = window.scrollX;
                    y = window.scrollY;
                    api.focus();
                    window.scrollTo(x, y);
                }
            }
            function playerState(event) {
                if (parSets.fullBrs) {
                    document.documentElement.classList[(event < 5 && event > 0 && "add") || "remove"]("part_fullbrowser");
                }
                if (parSets.lightsOut) {
                    document.documentElement.classList[(event < 5 && event > 0 && "add") || "remove"]("part_cinema_mode");
                }
            }
            function volumeChanged(event) {
                set("volLev", event.volume);
            }
            function sizeChanged(event) {
                set("theaterMode", event);
            }
            if (!document.getElementById("c4-player")) {
                api = document.getElementById("movie_player");
                video = document.getElementsByTagName("video")[0];
                api.addEventListener("onStateChange", playerState);
                if (parSets.VID_PLR_VOL_MEM) {
                    api.addEventListener("onVolumeChange", volumeChanged);
                }
                if (parSets.VID_PLR_SIZE_MEM) {
                    api.addEventListener("SIZE_CLICKED", sizeChanged);
                }
                if (parSets.VID_PLR_VOL_MEM) {
                    api.setVolume(parSets.volLev);
                }
                if (parSets.loopVid) {
                    video.loop = parSets.loopVid;
                }
                if (parSets.VID_PLR_ALACT) {
                    eventHandler([document.documentElement, "focus", alwaysActive, true]);
                    eventHandler([document.documentElement, "mouseup", alwaysActive, true]);
                }
            }
        }
        function scriptExit(event) {
            function commentsLoad(originalFunction) {
                return function () {
                    var args     = arguments,
                        comments = document.getElementById("watch-discussion"),
                        isLive   = window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.livestream;
                    if (!isLive && comments && !comments.lazyload && parSets.VID_HIDE_COMS === "1" && !comments.classList.contains("show") && args[0].split("comments").length > 1) {
                        comments.lazyload = args;
                    } else {
                        return originalFunction.apply(this, args);
                    }
                };
            }
            function baseDetour(originalFunction) {
                return function () {
                    originalFunction.apply(this, arguments);
                    window.yt.config_.SHARE_ON_VIDEO_END = !parSets.VID_END_SHRE;
                    window.yt.config_.UNIVERSAL_HOVERCARDS = !parSets.GEN_DSB_HVRC;
                };
            }
            function embedDetour(originalFunction) {
                return function () {
                    var player,
                        args = arguments;
                    argsCleaner(args[1]);
                    originalFunction.apply(this, args);
                    player = document.getElementById("movie_player");
                    if (player) {
                        player.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                    }
                };
            }
            function autoplayDetour(originalFunction) {
                return function () {
                    var args = arguments;
                    if (!args[1] || parSets.plApl || (!parSets.plApl && args[1].feature && args[1].feature !== "autoplay")) {
                        originalFunction.apply(this, arguments);
                    }
                };
            }
            function autoplayDetourFullScreen(originalFunction) {
                return function () {
                    var nextButton,
                        hasEnded    = api && api.getCurrentTime && !(Math.round(api.getCurrentTime()) < Math.floor(api.getDuration())),
                        nextClicked = document.activeElement.classList.contains("ytp-button-next") || document.activeElement.classList.contains("ytp-next-button");
                    if (!parSets.plApl && !nextClicked && hasEnded) {
                        nextButton = document.getElementsByClassName("ytp-next-button")[0];
                        if (nextButton && nextButton.getAttribute("aria-disabled") === "true") {
                            nextButton.onclick = api.nextVideo;
                            eventHandler(document, "click", api.nextVideo);
                            nextButton.setAttribute("aria-disabled", "false");
                        }
                        return false;
                    }
                    if (parSets.plApl || nextClicked || !hasEnded) {
                        if (nextClicked) {
                            document.getElementById("movie_player").focus();
                        }
                        return originalFunction.apply(this, arguments);
                    }
                };
            }
            function fullscreenVideoChange(originalFunction) {
                return function () {
                    var key,
                        patch  = [{}],
                        config = {args: {}},
                        args   = arguments;
                    for (key in args[0]) {
                        if (args[0][key] !== undefined) {
                            patch[0][key] = args[0][key];
                        }
                    }
                    config.args = JSON.parse("{\"" + decodeURIComponent(patch[0].response.replace(/&/g, "\",\"").replace(/\=/g, "\":\"").replace(/\+/g, "%20")) + "\"}");
                    config = argsCleaner(config);
                    patch[0].responseText = patch[0].response = encodeURIComponent(JSON.stringify(config.args).split(/\{"([\w\W]*?)"\}/)[1]).replace(/%22%2C%22/g, "&").replace(/%22%3A%22/g, "=").replace(/%20/g, "+");
                    originalFunction.apply(this, patch);
                    api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                };
            }
            function fsPointerDetour(originalFunction) {
                return function () {
                    var self = this;
                    function firstLevel(fl) {
                        function secondLevel(sl) {
                            if (typeof self[fl][sl] === "function" && String(self[fl][sl]).split("onStatusFail").length > 1) {
                                self[fl][sl] = fullscreenVideoChange(self[fl][sl]);
                            }
                        }
                        if (typeof self[fl] === "object" && self[fl]) {
                            Object.keys(Object.getPrototypeOf(self[fl])).forEach(secondLevel);
                        }
                    }
                    Object.keys(self).some(firstLevel);
                    return originalFunction.apply(this, arguments);
                };
            }
            function html5Detour(originalFunction) {
                return function () {
                    var player,
                        args = arguments;
                    function playerInstanceIterator(keys) {
                        function firstLevel(fl) {
                            if (typeof playerInstance[keys][fl] === "function" && String(playerInstance[keys][fl]).split("get_video_info").length > 1 && playerInstance[keys][fl] !== fsPointerDetour) {
                                playerInstance[keys][fl] = fsPointerDetour(playerInstance[keys][fl]);
                            }
                        }
                        if (typeof playerInstance[keys] === "object") {
                            if (playerInstance[keys] && playerInstance[keys].hasNext) {
                                playerInstance[keys].hasNext = autoplayDetourFullScreen(playerInstance[keys].hasNext);
                            } else if (playerInstance[keys]) {
                                Object.keys(Object.getPrototypeOf(playerInstance[keys])).some(firstLevel);
                            }
                        }
                    }
                    args[1] = argsCleaner(args[1]);
                    if (args[0].id === "upsell-video") {
                        originalFunction.apply(this, args);
                    } else if (typeof args[0] === "object") {
                        playerInstance = originalFunction.apply(this, args);
                        Object.keys(playerInstance).some(playerInstanceIterator);
                        player = document.getElementById("movie_player");
                        if (!parSets.VID_PLR_ATPL && player) {
                            if (window.ytplayer.config.args.dvmap && !parSets.VID_PLR_ADS) {
                                window.ytplayer.config.args.vmap = window.ytplayer.config.args.dvmap;
                            }
                            player.cueVideoByPlayerVars(window.ytplayer.config.args);
                        }
                    }
                };
            }
            function ytIterator(keys) {
                var str;
                if (typeof window._yt_www[keys] === "function") {
                    str = String(window._yt_www[keys]);
                    if (str.split("player-added").length > 1) {
                        window._yt_www[keys] = embedDetour(window._yt_www[keys]);
                    } else if (str.split("window.spf.navigate").length > 1) {
                        window._yt_www[keys] = autoplayDetour(window._yt_www[keys]);
                    }
                }
            }
            if (event && event.target && event.target.getAttribute("name") === "www/base") {
                window.yt.setConfig = baseDetour(window.yt.setConfig);
                Object.keys(window._yt_www).some(ytIterator);
            }
            if ((event && event.target && event.target.getAttribute("name") === "player/base") || (!window.html5Patched && window.yt && window.yt.player && window.yt.player.Application && window.yt.player.Application.create)) {
                window.html5Patched = true;
                window.yt.player.Application.create = html5Detour(window.yt.player.Application.create);
            }
            if (event && event.target && event.target.getAttribute("name") === "spf/spf") {
                window.spf.load = commentsLoad(window.spf.load);
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
                masterList = [],
                trashList  = [],
                detailList = [];
            function initThumbMod(event) {
                var observer;
                function initSidebarMode() {
                    var sidebarAlign = (parSets.VID_SDBR_ALGN > 1) ? ",left=" + (window.screen.availWidth - 467) : (parSets.VID_SDBR_ALGN < 1) ? "" : ",left=0",
                        newSidebar   = window.open(event.dataset.link, "sidebarMode", "width=467,height=" + window.screen.availHeight + ",scrollbars=1" + sidebarAlign);
                    function snapFit() {
                        newSidebar.resizeTo(newSidebar.outerWidth, window.screen.availHeight);
                    }
                    newSidebar.addEventListener("readystatechange", snapFit, true);
                    newSidebar.focus();
                }
                function initBlackList() {
                    parSets.blacklist[event.dataset.ytid] = event.dataset.user;
                    set("blacklist", parSets.blacklist);
                    thumbMod();
                }
                loadMore = document.getElementsByClassName("load-more-button")[0] || document.getElementById("watch-more-related");
                clickTitle = document.getElementsByClassName("yt-uix-tile")[0];
                while (clickTitle) {
                    clickTitle.classList.remove("yt-uix-tile");
                    clickTitle = document.getElementsByClassName("yt-uix-tile")[0];
                }
                if (loadMore && !loadMore.classList.contains("thumbMod")) {
                    loadMore.classList.add("thumbMod");
                    observer = new window.MutationObserver(thumbMod);
                    observer.observe(loadMore, {
                        childList: true,
                        attributes: true,
                        attributeOldValue: true
                    });
                }
                if (event && (event.target.className === "yt-uix-tooltip sidebarmode" || event.target.className === "yt-uix-tooltip blacklist")) {
                    event.preventDefault();
                    event = event.target;
                    if (event.className === "yt-uix-tooltip sidebarmode") {
                        initSidebarMode();
                    } else {
                        initBlackList();
                    }
                }
            }
            function insertButtons(i) {
                var button;
                function createButton(type, details) {
                    button = document.createElement("template");
                    if (type === "sidebarmode") {
                        button.innerHTML = "<div data-p='ttl|SDBR_OPEN&ttp|SDBR_OPEN' class='yt-uix-tooltip'></div>";
                        button.content.firstChild.dataset.link = details.videolink;
                        button.content.firstChild.classList.add(type);
                    } else {
                        button.innerHTML = "<div data-p='ttl|BLCK_ADD&ttp|BLCK_ADD' class='yt-uix-tooltip'></div>";
                        button.content.firstChild.dataset.user = details.username;
                        button.content.firstChild.dataset.ytid = details.youtubeid;
                        button.content.firstChild.classList.add(type);
                    }
                    return setLocale(button.content).firstChild;
                }
                if (detailList[i]) {
                    if (parSets.GEN_SDBR_ON && !window.opener && !detailList[i].thumbfield.getElementsByClassName("sidebarmode")[0]) {
                        button = createButton("sidebarmode", detailList[i]);
                        eventHandler([document, "click", initThumbMod]);
                        detailList[i].thumbfield.appendChild(button);
                    }
                    if (parSets.BLK_ON && window.location.href.split("/feed/subscriptions").length < 2 && !detailList[i].thumbfield.getElementsByClassName("blacklist")[0]) {
                        button = createButton("blacklist", detailList[i]);
                        eventHandler([document, "click", initThumbMod]);
                        detailList[i].thumbfield.appendChild(button);
                    }
                }
            }
            function buildDetailList(i) {
                var upNext;
                if (i > -1 && masterList[i]) {
                    infoField = masterList[i].getElementsByClassName("g-hovercard")[1] || masterList[i].getElementsByClassName("g-hovercard")[0];
                    titleField = masterList[i].getElementsByClassName("yt-uix-tile-link")[0] || masterList[i].getElementsByClassName("yt-ui-ellipsis")[0] || masterList[i].getElementsByClassName("content-link")[0] || masterList[i].getElementsByTagName("a")[0];
                    thumbField = masterList[i].getElementsByClassName("yt-lockup-thumbnail")[0] || masterList[i].getElementsByClassName("thumb-wrapper")[0] || masterList[i].getElementsByClassName("yt-pl-thumb")[0];
                    userId = infoField && infoField.dataset.ytid;
                    userName = infoField && infoField.textContent;
                    videoLink = titleField && titleField.href;
                    detailList[i] = undefined;
                    if (userId && userId.split("UC").length < 2) {
                        infoField = masterList[i].getElementsByClassName("g-hovercard")[0];
                        userId = infoField && infoField.dataset.ytid;
                        userName = infoField && infoField.textContent;
                    }
                    if (userId && parSets.blacklist[userId]) {
                        upNext = document.getElementsByClassName("watch-sidebar-head")[0] && document.getElementsByClassName("watch-sidebar-section")[0];
                        if (upNext && upNext.contains(thumbField)) {
                            upNext.remove();
                            document.getElementsByClassName("watch-sidebar-separation-line")[0].remove();
                        } else {
                            while (thumbField) {
                                thumbField = thumbField.parentNode;
                                if (thumbField.className.split("lohp-medium-shelf").length > 1 || thumbField.className.split("lohp-large-shelf-container").length > 1 || thumbField.tagName === "LI") {
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
                    emptyShelves = document.getElementsByClassName("feed-item-container");
                trashList[trash].remove();
                if (emptyShelves.length > 0) {
                    i = emptyShelves.length;
                    while (i) {
                        i -= 1;
                        if (emptyShelves[i].getElementsByTagName("li").length < 2) {
                            emptyShelves[i].remove();
                        }
                    }
                }
            }
            function getList(list) {
                var i;
                list = document.getElementsByClassName(list);
                if (list.length > 0) {
                    i = list.length;
                    while (i) {
                        i -= 1;
                        masterList.push(list[i]);
                    }
                }
            }
            if ((parSets.BLK_ON || parSets.GEN_SDBR_ON) && (window.location.pathname === "/" || window.location.pathname === "/results" || window.location.pathname === "/watch" || window.location.pathname === "/feed/music" || window.location.href.split("/feed/subscriptions").length > 1)) {
                ["yt-lockup-tile", "video-list-item", "yt-shelf-grid-item", "yt-lockup-mini", "lohp-large-shelf-container", "expanded-shelf-content-item-wrapper"].forEach(getList);
                if (masterList) {
                    Object.keys(masterList).forEach(buildDetailList);
                    Object.keys(trashList).forEach(cleanList);
                    Object.keys(detailList).forEach(insertButtons);
                    initThumbMod();
                }
            }
        }
        function volumeWheel(event) {
            var playerApi  = document.getElementById("player-api"),
                direction  = event && (event.deltaY || event.wheelDeltaY),
                currentVol = api && api.getVolume && api.getVolume(),
                playlistFS = document.getElementsByClassName("ytp-playlist-tray-tray")[0] || document.getElementsByClassName("ytp-playlist-menu")[0];
            if (event && api && playerApi && (!playlistFS || (playlistFS && !playlistFS.contains(event.target))) && (event.target.id === "player-api" || playerApi.contains(event.target))) {
                event.preventDefault();
                if (direction > 0 && currentVol > 0) {
                    api.setVolume(currentVol - 5);
                } else if (direction < 0 && currentVol < 100) {
                    api.setVolume(currentVol + 5);
                }
            }
            if (!event && parSets.VID_VOL_WHEEL) {
                eventHandler([document, "wheel", volumeWheel]);
            } else if (window.location.pathname !== "/watch") {
                eventHandler([document, "wheel", volumeWheel, false, "remove"]);
            }
        }
        function playlistControls() {
            var href  = window.location.href,
                plBar = document.getElementById("watch-appbar-playlist");
            function reverseControl() {
                var temp,
                    prev   = document.getElementsByClassName("prev-playlist-list-item")[0],
                    next   = document.getElementsByClassName("next-playlist-list-item")[0],
                    list   = document.getElementById("playlist-autoscroll-list"),
                    videos = list.getElementsByTagName("li"),
                    length = videos.length;
                while (length) {
                    length -= 1;
                    list.appendChild(videos[length]);
                }
                temp = prev.href;
                prev.href = next.href;
                next.href = temp;
                list.scrollTop = document.getElementsByClassName("currently-playing")[0].offsetTop;
                if (api) {
                    api.updatePlaylist();
                }
            }
            function reverseButton(event) {
                if (event.target.id === "reverse") {
                    event = isChrome ? event.target.parentNode : event.target;
                    event.classList.toggle("yt-uix-button-toggled");
                    set("plRev", (event.classList.contains("yt-uix-button-toggled")) ? window.yt.config_.LIST_ID : false);
                    reverseControl();
                }
            }
            function autoplayButton(event) {
                if (event.target.id === "autoplay") {
                    event = isChrome ? event.target.parentNode : event.target;
                    event.classList.toggle("yt-uix-button-toggled");
                    set("plApl", event.classList.contains("yt-uix-button-toggled"));
                }
            }
            function createButton(type, label, bool, call) {
                var navCtrls = document.getElementsByClassName("playlist-nav-controls")[0],
                    button   = document.createElement("template");
                button.innerHTML = "<button class='yt-uix-button yt-uix-button-player-controls yt-uix-button-opacity yt-uix-tooltip" + (((bool === true || href.split(bool).length > 1) && " yt-uix-button-toggled") || "") + "' type='button'>" +
                    "    <span class='yt-uix-button-icon'></span>" +
                    "</button>";
                button.content.firstChild.id = type;
                button.content.firstChild.dataset.p = "ttp|" + label + "&ttl|" + label;
                button.content.firstChild.classList.add("yt-uix-button-icon-watch-appbar-" + type + "-video-list");
                button = setLocale(button.content).firstChild;
                plBar.className = plBar.className.replace("radio-playlist", "");
                eventHandler([document, "click", call]);
                navCtrls.appendChild(button);
            }
            if (plBar) {
                if (document.readyState === "complete" && href.split(parSets.plRev).length > 1) {
                    reverseControl();
                }
                if (parSets.VID_PLST_RVRS && !document.getElementById("reverse")) {
                    createButton("reverse", "PLST_RVRS", parSets.plRev, reverseButton);
                }
                if (parSets.VID_PLST_ATPL && !document.getElementById("autoplay")) {
                    createButton("autoplay", "PLST_AP", parSets.plApl, autoplayButton);
                }
            }
        }
        function advancedOptions() {
            var header      = document.getElementById("watch-header"),
                cnslBtn     = document.getElementById("console-button"),
                cnslCont    = document.getElementById("advanced-options"),
                controls    = document.getElementById("player-console"),
                videoPlayer = document.getElementsByTagName("video")[0];
            function hookButtons() {
                var loopButton  = controls.querySelector("#loop-button"),
                    fullBrowser = controls.querySelector("#fullbrowser-button"),
                    cinemaMode  = controls.querySelector("#cinemamode-button"),
                    frameStep   = controls.querySelector("#framestep-button");
                function togglePlay() {
                    set("VID_PLR_ATPL", !parSets.VID_PLR_ATPL);
                    document.getElementById("autoplay-button").classList[(parSets.VID_PLR_ATPL && "add") || "remove"]("active");
                }
                function toggleLoop(event) {
                    videoPlayer = document.getElementsByTagName("video")[0];
                    if (videoPlayer) {
                        videoPlayer.loop = event ? !parSets.loopVid : parSets.loopVid;
                        if (event) {
                            loopButton.classList[(!parSets.loopVid && "add") || "remove"]("active");
                        }
                    }
                    set("loopVid", loopButton.classList.contains("active"));
                }
                function dlThumb() {
                    var args     = window.ytplayer.config.args,
                        base     = (args.iurl_webp && "_webp") || "",
                        thumbURL = args["iurlmaxres" + base] || args["iurlsd" + base] || args["iurl" + base];
                    window.open(thumbURL);
                }
                function saveSS() {
                    var width,
                        height,
                        aspectRatio,
                        video     = document.getElementsByTagName("video")[0],
                        container = document.getElementById("screenshot-result") || document.createElement("div"),
                        canvas    = container.querySelector("canvas") || document.createElement("canvas"),
                        close     = document.createElement("div"),
                        context   = canvas.getContext("2d");
                    function hideContainer(event) {
                        if (event.target.id === "close-screenshot") {
                            container.classList.toggle("invisible");
                        }
                    }
                    aspectRatio = video.videoWidth / video.videoHeight;
                    width = video.videoWidth;
                    height = parseInt(width / aspectRatio, 10);
                    canvas.width = width;
                    canvas.height = height;
                    context.drawImage(video, 0, 0, width, height);
                    if (!container.id) {
                        container.id = "screenshot-result";
                        container.appendChild(canvas);
                        close.id = "close-screenshot";
                        close.textContent = userLang("CNSL_SS_CLS");
                        eventHandler([document, "click", hideContainer]);
                        container.appendChild(close);
                        document.body.appendChild(container);
                    } else if (container.id && container.classList.contains("invisible")) {
                        container.classList.toggle("invisible");
                    }
                }
                function openSidebar() {
                    var sidebarURL,
                        newSidebar,
                        video        = document.getElementsByTagName("video")[0],
                        sidebarAlign = (parSets.VID_SDBR_ALGN > 1) ? ",left=" + (window.screen.availWidth - 467) : (parSets.VID_SDBR_ALGN < 1) ? "" : ",left=0";
                    function snapFit() {
                        newSidebar.resizeTo(newSidebar.outerWidth, window.screen.availHeight);
                    }
                    if (video && video.currentTime && video.currentTime < video.duration) {
                        video.pause();
                        sidebarURL = "#t=" + video.currentTime;
                    } else {
                        sidebarURL = "";
                    }
                    newSidebar = window.open(window.location.href + sidebarURL, "sidebarMode", "width=467,height=" + window.screen.availHeight + ",scrollbars=1" + sidebarAlign);
                    newSidebar.addEventListener("readystatechange", snapFit, true);
                    newSidebar.focus();
                }
                function toggleFullBrowser(event) {
                    var plrState = api && api.getPlayerState && api.getPlayerState();
                    plrState = plrState < 5 && plrState > 0;
                    function exitFullBrowser(key) {
                        if (document.documentElement.classList.contains("part_fullbrowser") && (key.keyCode === 27 || key.key === "Escape" || (key.target.className && key.target.className.split("ytp-size").length > 1))) {
                            toggleFullBrowser(key);
                            if (key.type === "click") {
                                eventHandler([document, "keydown", exitFullBrowser, false, "remove"]);
                                eventHandler([document, "click", exitFullBrowser, false, "remove"]);
                                key.target.click();
                            }
                        }
                    }
                    document[(isChrome && "body") || "documentElement"].scrollTop = 0;
                    eventHandler([document, "keydown", exitFullBrowser]);
                    eventHandler([document, "click", exitFullBrowser]);
                    set("fullBrs", event ? !parSets.fullBrs : true);
                    fullBrowser.classList[(parSets.fullBrs && "add") || "remove"]("active");
                    if (event && (plrState || event.keyCode === 27 || event.key === "Escape")) {
                        document.documentElement.classList[(parSets.fullBrs && "add") || "remove"]("part_fullbrowser");
                    }
                }
                function toggleCinemaMode(event) {
                    var plrState = api && api.getPlayerState && api.getPlayerState() < 5 && api.getPlayerState() > 0;
                    set("lightsOut", event ? !parSets.lightsOut : true);
                    cinemaMode.classList[(parSets.lightsOut && "add") || "remove"]("active");
                    if (event && plrState) {
                        document.documentElement.classList[(parSets.lightsOut && "add") || "remove"]("part_cinema_mode");
                    }
                }
                function toggleFrames(event) {
                    var pi,
                        fps;
                    frameStep = document.getElementById("framestep-button");
                    function currentFps(keys) {
                        if (typeof pi[keys] === "object" && pi[keys] && pi[keys].video && pi[keys].video.fps) {
                            fps = pi[keys].video.fps;
                        }
                    }
                    if (event && ["EMBED", "INPUT", "OBJECT", "TEXTAREA"].indexOf(document.activeElement.tagName) < 0 && event.target.tagName !== "IFRAME" && !event.target.getAttribute("contenteditable")) {
                        if (event.shiftKey) {
                            event.target.blur();
                            document.getSelection().removeAllRanges();
                            if (event.keyCode === 37 || event.keyCode === 39) {
                                pi = playerInstance.getVideoData();
                                Object.keys(pi).forEach(currentFps);
                                fps = fps && ((event.keyCode < 39 && -1) || 1) * ((fps < 2 && 30) || fps);
                                if (fps && api) {
                                    api.pauseVideo();
                                    api.seekBy(1 / fps);
                                }
                            }
                        } else if (event.type === "click" && event.target.id === "framestep-button") {
                            set("frameStep", !parSets.frameStep);
                            frameStep.classList[(parSets.frameStep && "add") || "remove"]("active");
                        }
                    }
                    if (frameStep && frameStep.classList.contains("active")) {
                        eventHandler([document, "keydown", toggleFrames]);
                    } else if (!frameStep || !frameStep.classList.contains("active")) {
                        eventHandler([document, "keydown", toggleFrames, false, "remove"]);
                    }
                }
                function handleToggles(event) {
                    switch (event.target.id) {
                    case "autoplay-button":
                        return togglePlay();
                    case "loop-button":
                        return toggleLoop(event);
                    case "save-thumbnail-button":
                        return dlThumb();
                    case "screenshot-button":
                        return saveSS();
                    case "sidebar-button":
                        return openSidebar();
                    case "fullbrowser-button":
                        return toggleFullBrowser(event);
                    case "cinemamode-button":
                        return toggleCinemaMode(event);
                    case "framestep-button":
                        return toggleFrames(event);
                    }
                }
                eventHandler([document, "click", handleToggles]);
                if (parSets.loopVid && !loopButton.classList.contains("active")) {
                    loopButton.classList.add("active");
                    toggleLoop();
                }
                if (parSets.fullBrs && !fullBrowser.classList.contains("active")) {
                    fullBrowser.classList.add("active");
                    toggleFullBrowser();
                }
                if (parSets.lightsOut && !cinemaMode.classList.contains("active")) {
                    cinemaMode.classList.add("active");
                    toggleCinemaMode();
                }
                if (parSets.frameStep && !frameStep.classList.contains("active")) {
                    frameStep.classList.add("active");
                    toggleFrames();
                }
            }
            function toggleConsole(event) {
                if (event.target.id === "console-button") {
                    document.documentElement.classList.toggle("player-console");
                    set("advOpts", document.documentElement.classList.contains("player-console"));
                }
            }
            if (window.location.pathname === "/watch" && header && !cnslBtn) {
                cnslBtn = document.createElement("template");
                cnslBtn.innerHTML = "<button id='console-button' data-p='ttl|ADV_OPTS'></button>";
                cnslBtn = setLocale(cnslBtn.content).firstChild;
                eventHandler([document, "click", toggleConsole]);
                cnslCont = document.createElement("template");
                cnslCont.innerHTML = "<div id='advanced-options'></div>";
                cnslCont = setLocale(cnslCont.content).firstChild;
                cnslCont.appendChild(cnslBtn);
                header.appendChild(cnslCont);
                if (controls) {
                    controls.remove();
                }
                controls = document.createElement("template");
                controls.innerHTML = "<div id='player-console'>" +
                    "    <div id='autoplay-button' class='yt-uix-tooltip" + ((parSets.VID_PLR_ATPL && " active") || "") + "' data-p='ttp|CNSL_AP''></div>" +
                    "    <div id='loop-button' class='yt-uix-tooltip' data-p='ttp|CNSL_RPT'></div>" +
                    "    <div id='save-thumbnail-button' class='yt-uix-tooltip' data-p='ttp|CNSL_SVTH'></div>" +
                    "    <div id='screenshot-button' class='yt-uix-tooltip' data-p='ttp|CNSL_SS''></div>" +
                    "    <div id='sidebar-button' class='yt-uix-tooltip' data-p='ttp|CNSL_SDBR'" + ((window.opener && " style='display:none'") || "") + "></div>" +
                    "    <div id='fullbrowser-button' class='yt-uix-tooltip' data-p='ttp|CNSL_FLBR'></div>" +
                    "    <div id='cinemamode-button' class='yt-uix-tooltip' data-p='ttp|CNSL_CINM_MD'></div>" +
                    "    <div id='framestep-button' class='yt-uix-tooltip' data-p='ttp|CNSL_FRME'></div>" +
                    "</div>";
                controls = setLocale(controls.content).firstChild;
                cnslCont.appendChild(controls);
                hookButtons();
                if (parSets.advOpts) {
                    document.documentElement.classList.add("player-console");
                }
            }
        }
        function defaultChannelPage(event) {
            var observer,
                channelLink,
                loadMore = document.getElementsByClassName("load-more-button")[0];
            function linkIterator(link) {
                if (link !== "length" && channelLink[link].href.split("/").length < 6 && parSets.GEN_CHN_DFLT_PAGE !== "default") {
                    channelLink[link].href += "/" + parSets.GEN_CHN_DFLT_PAGE;
                }
            }
            if (parSets.GEN_CHN_DFLT_PAGE !== "default") {
                if (loadMore && !loadMore.classList.contains("defaultChannel")) {
                    loadMore.classList.add("defaultChannel");
                    observer = new window.MutationObserver(defaultChannelPage);
                    observer.observe(loadMore, {attributes: true});
                }
                if (event && event.target && event.target.tagName === "A" && !event.target.classList.contains("spf-link") && event.target.href.split(parSets.GEN_CHN_DFLT_PAGE).length < 2 && (event.target.href.split("/channel/").length > 1 || event.target.href.split("/user/").length > 1)) {
                    event.target.href += "/" + parSets.GEN_CHN_DFLT_PAGE;
                } else if (!event || (event && event[0])) {
                    if (window.location.href.split(/\/(channel|user|c)\//).length < 2) {
                        channelLink = document.querySelectorAll("[href*='/channel/']");
                        Object.keys(channelLink).forEach(linkIterator);
                        channelLink = document.querySelectorAll("[href*='/user/']");
                        Object.keys(channelLink).forEach(linkIterator);
                    }
                    eventHandler([document, "click", defaultChannelPage]);
                }
            }
        }
        function generalChanges() {
            var logo,
                autoplaybar = document.getElementsByClassName("autoplay-bar")[0],
                description = document.getElementById("action-panel-details");
            if (parSets.GEN_YT_LOGO_LINK && window.yt && window.yt.config_ && window.yt.config_.LOGGED_IN) {
                logo = document.querySelector("map[name='doodle'] > area") || document.getElementById("logo-container");
                if (logo && logo.href === window.location.origin + "/") {
                    logo.href = "/feed/subscriptions";
                }
            }
            if (parSets.GEN_REM_APUN && window.location.pathname === "/watch" && autoplaybar) {
                autoplaybar.removeAttribute("class");
                document.getElementsByClassName("checkbox-on-off")[0].remove();
            }
            if (parSets.VID_LAYT_AUTO_PNL && window.location.pathname === "/watch" && description) {
                description.classList.remove("yt-uix-expander-collapsed");
            }
            if (parSets.GEN_SPF_OFF && window.spf && window.spf.dispose) {
                window.spf.dispose();
            }
        }
        function infiniteScroll() {
            var observer,
                loadMore = document.getElementsByClassName("load-more-button")[0];
            if (loadMore && parSets.GEN_INF_SCRL) {
                if (!loadMore.classList.contains("infiniteScroll")) {
                    loadMore.classList.add("infiniteScroll");
                    observer = new window.MutationObserver(infiniteScroll);
                    observer.observe(loadMore, {attributes: true});
                } else if (!loadMore.classList.contains("scrolldetect")) {
                    loadMore.classList.add("scrolldetect");
                    loadMore.dataset.scrolldetectCallback = "load-more-auto";
                }
            }
        }
        function initFunctions() {
            pageScript();
            customStyles();
            settingsMenu();
            infiniteScroll();
            playlistControls();
            playerMode();
            advancedOptions();
            volumeWheel();
            subPlaylist();
            alwaysVisible();
            thumbMod();
            enhancedDetails();
            commentsButton();
            defaultChannelPage();
            generalChanges();
        }
        function request() {
            var videoPlayer = document.getElementById("movie_player");
            document.documentElement.classList.remove("floater");
            if (videoPlayer) {
                if (!parSets.VID_PLR_ATPL) {
                    if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded) {
                        delete window.ytplayer.config.loaded;
                    }
                    return videoPlayer.remove();
                }
                videoPlayer.removeAttribute("style");
            }
        }
        function shareApi(originalFunction) {
            return function (ytApi) {
                playerReady(ytApi);
                if (originalFunction) {
                    return originalFunction.apply(this, arguments);
                }
            };
        }
        function checkNewFeatures() {
            var keys = Object.keys(defSets),
                i    = keys.length;
            while (i) {
                i -= 1;
                if (!parSets.hasOwnProperty(keys[i])) {
                    set(keys[i], defSets[keys[i]]);
                }
            }
        }
        if (!parSets || Object.keys(parSets).length < 1) {
            parSets = defSets;
        } else {
            checkNewFeatures();
        }
        delete document.documentElement.dataset.parSets;
        if (isChrome) {
            eventHandler([document.documentElement, "load", scriptExit, true]);
        } else {
            eventHandler([document, "afterscriptexecute", scriptExit]);
        }
        eventHandler([document, "spfdone", initFunctions]);
        eventHandler([document, "spfrequest", request]);
        eventHandler([document, "readystatechange", initFunctions, true]);
        window.onYouTubePlayerReady = shareApi(window.onYouTubePlayerReady);
        window.matchMedia = false;
        initFunctions();
    }
    function updateSettings(event) {
        document.documentElement.dataset.parreceive = JSON.stringify((event && event[id]) || event || {});
    }
    function initParticle(event) {
        var holder;
        function filterChromeStorage(keys) {
            if (keys[id] && keys[id].newValue) {
                updateSettings(keys[id].newValue);
            }
        }
        if (!event && userscript) {
            event = JSON.parse(window.GM_getValue(id, "{}"));
        }
        if (event) {
            event = JSON.stringify(event[id] || event);
            document.documentElement.dataset.parSets = event;
            if (window.chrome || userscript) {
                holder = document.createElement("link");
                holder.rel = "stylesheet";
                holder.type = "text/css";
                holder.href = "https://particlecore.github.io/Particle/stylesheets/YouTubePlus.css";
                document.documentElement.appendChild(holder);
            }
            holder = document.createElement("script");
            holder.textContent = "(" + particle + "())";
            document.documentElement.appendChild(holder);
            if (!userscript) {
                if (window.chrome) {
                    window.chrome.storage.onChanged.addListener(filterChromeStorage);
                } else {
                    window.self.port.on(id, updateSettings);
                }
            }
        }
    }
    function contentScript() {
        var observer,
            key  = "parsend",
            gate = document.documentElement,
            sets = JSON.parse(gate.dataset[key] || null);
        if (!gate.contentscript) {
            gate.contentscript = true;
            observer = new window.MutationObserver(contentScript);
            return observer.observe(gate, {attributeFilter: ["data-" + key]});
        }
        if (sets) {
            if (userscript) {
                window.GM_setValue(id, JSON.stringify(sets));
            } else if (window.chrome) {
                window.chrome.storage.local.set({particleSettings: sets});
            } else {
                window.self.port.emit(id, sets);
            }
            gate.dataset[key] = null;
        }
    }
    if (userscript) {
        window.GM_getValue = GM_getValue;
        window.GM_setValue = GM_setValue;
        initParticle();
    } else if (window.chrome) {
        window.chrome.storage.local.get(id, initParticle);
    } else {
        initParticle(window.self.options.settings);
    }
    contentScript();
}());
