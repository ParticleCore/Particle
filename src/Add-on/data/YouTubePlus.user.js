// ==UserScript==
// @version     0.6.6
// @name        YouTube +
// @namespace   https://github.com/ParticleCore
// @description YouTube with more freedom
// @icon        https://raw.githubusercontent.com/ParticleCore/Particle/gh-pages/images/YT%2Bicon.png
// @match       *://www.youtube.com/*
// @exclude     *://www.youtube.com/embed/*
// @run-at      document-start
// @downloadURL https://github.com/ParticleCore/Particle/raw/master/src/Userscript/YouTubePlus.user.js
// @grant       GM_getValue
// @grant       GM_setValue
// @noframes
// ==/UserScript==
(function () {
    "use strict";
    var userscript = typeof GM_info === "object";
    function particle() {
        var api,
            parSets,
            playerInstance,
            events    = [],
            channelId = {},
            isChrome  = typeof window.chrome === "object",
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
                CNSL_CNSL             : "Console",
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
            parSets[setting] = newValue;
            window.postMessage({set: parSets}, "*");
        }
        function eventHandler(target, event, call, capture, type) {
            if (target.events && target.events[event] && target.events[event][call.name]) {
                target.removeEventListener(event, target.events[event][call.name], !!capture);
                delete target.events[event][call.name];
                if (JSON.stringify(target.events[event]) === "{}") {
                    delete target.events[event];
                }
            }
            if (!type) {
                target.addEventListener(event, call, !!capture);
                target.events = target.events || {};
                target.events[event] = target.events[event] || {};
                target.events[event][call.name] = call;
                if (events.indexOf(target) < 0 && (String(target)).split("HTML").length > 1) {
                    events.push(target);
                }
            }
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
        function localXHR(method, url, call, setRequestHeader) {
            var request = new XMLHttpRequest();
            request.addEventListener("load", call);
            request.open(method, url, true);
            if (setRequestHeader) {
                request.setRequestHeader(setRequestHeader[0], setRequestHeader[1]);
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
                parSets.extLang.nextCheck = new Date().getTime() + 86400000;
                set("extLang", parSets.extLang);
            }
            function checkModified(data) {
                delete language.fetching;
                if (data.target.readyState === 4 && data.target.status === 200) {
                    language.fetching = true;
                    localXHR(
                        "GET",
                        urlBase + ytlang + ".json",
                        getLanguage,
                        ["Accept", "application/vnd.github.raw"]
                    );
                }
            }
            if (!parSets.extLang) {
                parSets.extLang = {};
                set("extLang", parSets.extLang);
            }
            if (parSets.GEN_LOCL_LANG && parSets.localLang && parSets.localLang[label]) {
                if (JSON.stringify(parSets.extLang) !== "{}") {
                    parSets.extLang = {};
                    set("extLang", parSets.extLang);
                }
                return parSets.localLang[label];
            }
            if (!parSets.GEN_LOCL_LANG && ytlang && ytlang !== "en_US") {
                if (parSets.extLang[ytlang] && parSets.extLang[ytlang][label]) {
                    if (!language.fetching && parSets.extLang.nextCheck && parSets.extLang.nextCheck <= new Date().getTime()) {
                        language.fetching = true;
                        localXHR(
                            "HEAD",
                            urlBase + ytlang + ".json",
                            checkModified,
                            ["If-Modified-Since", new Date(parSets.extLang[ytlang].lastMod).toUTCString()]
                        );
                        parSets.extLang.nextCheck = new Date().getTime() + 86400000;
                        set("extLang", parSets.extLang);
                    }
                    return parSets.extLang[ytlang][label];
                }
                if (!parSets.extLang[ytlang] && !language.fetching && (!parSets.extLang.nextCheck || parSets.extLang.nextCheck <= new Date().getTime())) {
                    language.fetching = true;
                    localXHR(
                        "GET",
                        urlBase + ytlang + ".json",
                        getLanguage,
                        ["Accept", "application/vnd.github.raw"]
                    );
                }
            }
            return language[label];
        }
        function string2HTML(string) {
            var i,
                ytplabel,
                container = document.createElement("div");
            function addLocale(list) {
                list = list.split("|");
                switch (list[0]) {
                case "tnd":
                    return ytplabel[i].appendChild(document.createTextNode(userLang(list[1])));
                case "ttl":
                    return ytplabel[i].setAttribute("title", userLang(list[1]));
                case "ttp":
                    return ytplabel[i].setAttribute("data-tooltip-text", userLang(list[1]));
                }
            }
            container.innerHTML = string;
            ytplabel = container.querySelectorAll("[ytplus]");
            i = ytplabel.length;
            while (i) {
                i -= 1;
                ytplabel[i].getAttribute("ytplus").split("&").forEach(addLocale);
            }
            return container.firstChild;
        }
        function customStyles() {
            var classes,
                plrApi   = document.getElementById("player-api"),
                commSect = document.getElementById("watch-discussion"),
                sidebar  = document.getElementsByClassName("branded-page-v2-secondary-col")[0],
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
        function updateSettings(event) {
            if (event.data && event.data.updateSettings) {
                delete event.data.updateSettings;
                parSets = event.data;
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
                function title(content, tag) {
                    return "<" + tag + " ytplus='tnd|" + content + "'></" + tag + ">";
                }
                function head(menu) {
                    return "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        "        <button class='P-save' ytplus='tnd|GLB_SVE'></button>" +
                        "        <button class='P-reset' ytplus='tnd|GLB_RSET'></button>" +
                        "        <button class='P-impexp' ytplus='ttl|GLB_IMPR'></button>" +
                        "        <button class='P-implang' ytplus='ttl|GLB_LOCL_LANG&tnd|" + ((parSets.GEN_LOCL_LANG && parSets.localLang && "GLB_LOCL_LANG_CSTM") || "LOCALE") + "'></button>" +
                        title(menu, "h2") +
                        "    </div>";
                }
                function selec(id, list, anchor) {
                    var select = "<div><label for='" + id + "' ytplus='tnd|" + id + "'></label>" +
                        "<div class='P-select'><select id='" + id + "'>";
                    function keysIterator(keys) {
                        select += "<option";
                        if (parSets && parSets[id] === list[keys]) {
                            select += " selected='true'";
                        }
                        select += " value='" + list[keys] + "' ytplus='tnd|" + keys + "'></option>";
                    }
                    Object.keys(list).forEach(keysIterator);
                    return select + "</select></div>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#" + anchor + "' ytplus='ttl|FTR_DESC' target='_blank'>?</a></div>";
                }
                function input(id, type, anchor, placeholder, size) {
                    var inp = "<div><input id='" + id + "' type='" + type + "'";
                    if (placeholder) {
                        inp += " placeholder='" + placeholder + "' size='" + size + "'";
                        if (parSets && typeof parSets[id] === 'string') {
                            inp += " value='" + (parSets && parSets[id]) + "'";
                        }
                    } else if (parSets && parSets[id] === true) {
                        inp += " checked='true'";
                    }
                    return inp + "><label for='" + id + "' ytplus='tnd|" + id + "'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#" + anchor + "' ytplus='ttl|FTR_DESC' target='_blank'>?</a></div>";
                }
                function blck() {
                    var button    = "",
                        sortAlpha = [],
                        list      = parSets && parSets.blacklist;
                    function buildList(obj) {
                        button += "<div class='blacklist' data-ytid='" + Object.keys(obj)[0] + "'><button class='close'></button><a href='/channel/" + Object.keys(obj)[0] + "' target='_blank'>" + obj[Object.keys(obj)[0]] + "</a></div>\n";
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
                    return button;
                }
                switch (section) {
                case "MEN":
                    return "<div id='P-settings'>" +
                        "    <div id='P-container'>" +
                        "        <div id='P-sidebar'>" +
                        "            <ul id='P-sidebar-list'>" +
                        "                <li id='GEN' class='selected' ytplus='tnd|GEN'></li>" +
                        "                <li id='VID' ytplus='tnd|VID'></li>" +
                        "                <li id='BLK' ytplus='tnd|BLK'></li>" +
                        "                <li id='ABT' ytplus='tnd|ABT'></li>" +
                        "                <li id='HLP'><a target='_blank' href='https://github.com/ParticleCore/Particle/wiki' ytplus='tnd|HLP'></a></li>" +
                        "                <li id='DNT'><a title='PayPal' target='_blank' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UMVQJJFG4BFHW' ytplus='tnd|DNT'></a></li>" +
                        "            </ul>" +
                        "        </div>" +
                        "    </div>" +
                        "</div>";
                case "GEN":
                    return head("GEN_TTL") +
                        "    <hr class='P-horz'>" +
                        title("GEN_GEN", "h3") +
                        input("GEN_LOCL_LANG", "checkbox", "custom_lang") +
                        input("GEN_DSBL_ADS", "checkbox", "outside_ads") +
                        input("GEN_YT_LOGO_LINK", "checkbox", "logo_redirect") +
                        input("GEN_SUB_LIST", "checkbox", "sub_playlist") +
                        input("GEN_INF_SCRL", "checkbox", "infinite_scroll") +
                        input("GEN_SDBR_ON", "checkbox", "sidebar_on") +
                        input("GEN_REM_APUN", "checkbox", "remove_autoplay") +
                        input("GEN_SPF_OFF", "checkbox", "spf_off") +
                        selec("GEN_CHN_DFLT_PAGE", {
                            GEN_CHN_DFLT_PAGE_DFLT: "default",
                            GEN_CHN_DFLT_PAGE_VID : "videos",
                            GEN_CHN_DFLT_PAGE_PL  : "playlists",
                            GEN_CHN_DFLT_PAGE_CHN : "channels",
                            GEN_CHN_DFLT_PAGE_DISC: "discussion",
                            GEN_CHN_DFLT_PAGE_ABT : "about"
                        }, "channel_page") +
                        title("GEN_LYT", "h3") +
                        input("GEN_GRID_SUBS", "checkbox", "sub_grid") +
                        input("GEN_GRID_SRCH", "checkbox", "search_grid") +
                        input("GEN_BTTR_NTF", "checkbox", "blue_box") +
                        input("GEN_DSB_HVRC", "checkbox", "hovercards_off") +
                        input("GEN_CMPT_TTLS", "checkbox", "feed_titles") +
                        input("GEN_BLUE_GLOW", "checkbox", "blue_glow") +
                        input("GEN_HIDE_FTR", "checkbox", "hide_footer") +
                        input("GEN_HDE_RECM_SDBR", "checkbox", "hide_recom_sidebar") +
                        input("GEN_HDE_SRCH_SDBR", "checkbox", "hide_search_sidebar") +
                        input("GEN_HDE_CHN_SDBR", "checkbox", "hide_channel_sidebar") +
                        "</div>";
                case "VID":
                    return head("VID_TTL") +
                        "    <hr class='P-horz'>" +
                        title("VID_PLR", "h3") +
                        input("VID_PLR_ADS", "checkbox", "video_ads") +
                        input("VID_SUB_ADS", "checkbox", "subs_ads_on") +
                        input("VID_PLR_ALVIS", "checkbox", "floating_player") +
                        input("VID_PLR_ATPL", "checkbox", "video_autoplay") +
                        input("VID_PLR_CC", "checkbox", "subtitles_off") +
                        input("VID_PLR_ANTS", "checkbox", "annotations_off") +
                        input("VID_END_SHRE", "checkbox", "share_panel_off") +
                        input("VID_PLR_VOL_MEM", "checkbox", "remember_volume") +
                        input("VID_PLR_ALACT", "checkbox", "shortcuts_on") +
                        input("VID_PLR_SIZE_MEM", "checkbox", "remember_mode") +
                        input("VID_VOL_WHEEL", "checkbox", "wheel_volume") +
                        input("VID_PLR_DASH", "checkbox", "dash_off") +
                        selec("VID_DFLT_QLTY", {
                            VID_DFLT_QLTY_AUTO: "auto",
                            VID_DFLT_QLTY_ORIG: "highres",
                            VID_DFLT_QLTY_2880: "hd2880",
                            VID_DFLT_QLTY_2160: "hd2160",
                            VID_DFLT_QLTY_1440: "hd1440",
                            VID_DFLT_QLTY_1080: "hd1080",
                            VID_DFLT_QLTY_720 : "hd720",
                            VID_DFLT_QLTY_LRG : "large",
                            VID_DFLT_QLTY_MDM : "medium",
                            VID_DFLT_QLTY_SML : "small",
                            VID_DFLT_QLTY_TNY : "tiny"
                        }, "default_quality") +
                        title("VID_PLR_LYT", "h3") +
                        input("VID_PLR_INFO", "checkbox", "info_bar") +
                        input("VID_PLR_DYN_SIZE", "checkbox", "dynamic_size_off") +
                        input("VID_PLR_FIT", "checkbox", "fit_to_page") +
                        input("VID_PLR_FIT_WDTH", "text", "fit_max_width", "1280px", 6) +
                        title("VID_PLST", "h3") +
                        input("VID_PLST_SEP", "checkbox", "separate_playlist") +
                        input("VID_PLST_ATPL", "checkbox", "playlist_autoplay") +
                        input("VID_PLST_RVRS", "checkbox", "playlist_reverse") +
                        title("VID_LAYT", "h3") +
                        selec("VID_HIDE_COMS", {
                            VID_HIDE_COMS_SHOW: "0",
                            VID_HIDE_COMS_HIDE: "1",
                            VID_HIDE_COMS_REM : "2"
                        }, "comments") +
                        selec("VID_SDBR_ALGN", {
                            VID_SDBR_ALGN_NONE : "0",
                            VID_SDBR_ALGN_LEFT : "1",
                            VID_SDBR_ALGN_RIGHT: "2"
                        }, "sidebar_align") +
                        input("VID_TTL_CMPT", "checkbox", "video_title") +
                        input("VID_DESC_SHRT", "checkbox", "labelless_buttons") +
                        input("VID_VID_CNT", "checkbox", "upload_counter") +
                        input("VID_POST_TIME", "checkbox", "relative_upload_time") +
                        input("VID_HIDE_DETLS", "checkbox", "hide_video_details") +
                        input("VID_LAYT_AUTO_PNL", "checkbox", "expand_description") +
                        "</div>";
                case "BLK":
                    return head("BLK_TTL") +
                        "    <hr class='P-horz'>" +
                        title("BLK_BLK", "h3") +
                        input("BLK_ON", "checkbox", "blacklist_on") +
                        "    <div id='blacklist'>" +
                        "        <div id='blacklist-controls'>" +
                        "            <button id='blacklist-edit' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'>" +
                        "                <span class='yt-uix-button-content' ytplus='tnd|BLCK_EDIT'></span>" +
                        "            </button>" +
                        "            <button id='blacklist-save' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'>" +
                        "                <span class='yt-uix-button-content' ytplus='tnd|BLCK_SAVE'></span>" +
                        "            </button>" +
                        "            <button id='blacklist-close' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'>" +
                        "                <span class='yt-uix-button-content' ytplus='tnd|BLCK_CLSE'></span>" +
                        "            </button>" +
                        "        </div>" +
                        blck() +
                        "        <textarea id='blacklist-edit-list'></textarea>" +
                        "    </div>" +
                        "    <br>" +
                        "</div>";
                case "ABT":
                    return "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        title("ABT_TTL", "h2") +
                        "    </div>" +
                        "    <hr class='P-horz'>" +
                        title("ABT_THKS", "h3") +
                        "    <div>" +
                        "        <a target='_blank' href='https://github.com/YePpHa'>Jeppe Rune Mortensen</a><span ytplus='tnd|ABT_THKS_YEPPHA'></span>" +
                        "    </div>" +
                        "    <div>" +
                        "        <a target='_blank' href='http://www.greasespot.net/'>Greasemonkey</a> + <a href='http://tampermonkey.net/'>Tampermonkey</a><span ytplus='tnd|ABT_THKS_USERSCRIPT'></span>" +
                        "    </div>" +
                        "    <div>" +
                        "        <a target='_blank' href='http://stackoverflow.com/'>Stack Overflow</a><span ytplus='tnd|ABT_THKS_STACKOV'></span>" +
                        "    </div>" +
                        title("ABT_INFO", "h3") +
                        "    <div>" +
                        "        <a target='_blank' href='https://github.com/ParticleCore/Particle/'>GitHub</a>" +
                        "    </div>" +
                        "    <div>" +
                        "        <a target='_blank' href='https://greasyfork.org/en/users/8223-particlecore'>Greasy Fork</a>" +
                        "    </div>" +
                        "    <div>" +
                        "        <a target='_blank' href='http://openuserjs.org/scripts/ParticleCore/'>OpenUserJS</a>" +
                        "    </div>" +
                        "</div>";
                }
            }
            function navigateSettings(event) {
                function exportSettings(target) {
                    var expCont = document.getElementById("exp-cont");
                    if (target.classList.contains("P-impexp") || target.classList.contains("P-implang")) {
                        if (expCont) {
                            expCont.remove();
                            return;
                        }
                        expCont = string2HTML("<div id='exp-cont'>" +
                            "   <button id='" + ((target.classList.contains("P-impexp") && "impexp-save") || "implang-save") + "' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'>" +
                            "        <span class='yt-uix-button-content' ytplus='tnd|GLB_IMPR_SAVE'></span>" +
                            "    </button>" +
                            "   <textarea id='impexp-list'></textarea>" +
                            "</div>");
                        document.getElementById("P-content").appendChild(expCont);
                        document.getElementById("impexp-list").value = JSON.stringify((target.classList.contains("P-impexp") && parSets) || parSets.localLang || language, undefined, 2);
                    } else if (target.id === "impexp-save" || target.id === "implang-save") {
                        if (target.id === "implang-save") {
                            parSets.localLang = JSON.parse(document.getElementById("impexp-list").value);
                            set("localLang", parSets.localLang);
                            window.location.reload();
                        } else {
                            parSets = JSON.parse(document.getElementById("impexp-list").value);
                            window.postMessage({set: parSets}, "*");
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
                    delete newKey[event.target.parentNode.getAttribute("data-ytid")];
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
                    parSets = savedSets;
                    window.postMessage({set: parSets}, "*");
                    customStyles();
                    if (!salt) {
                        if (notification.childNodes.length < 1) {
                            notification.remove();
                            notification = string2HTML("<div id='appbar-main-guide-notification-container'>" +
                                "    <div class='appbar-guide-notification' role='alert'>" +
                                "        <span class='appbar-guide-notification-content-wrapper yt-valign'>" +
                                "            <span class='appbar-guide-notification-icon yt-sprite'></span>" +
                                "            <span class='appbar-guide-notification-text-content'></span>" +
                                "        </span>" +
                                "    </div>" +
                                "</div>");
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
                    parSets = defSets;
                    window.postMessage({set: defSets}, "*");
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
                    pContainer.appendChild(string2HTML(template(event.target.id)));
                    event.target.parentNode.getElementsByClassName("selected")[0].removeAttribute("class");
                    event.target.className = "selected";
                }
            }
            function settingsTemplate() {
                var bodyContainer,
                    pageContainer,
                    pWrapper = document.getElementById("P-settings");
                if (pWrapper) {
                    pWrapper.remove();
                } else {
                    bodyContainer = document.getElementById("body-container");
                    pageContainer = document.getElementById("page-container");
                    pWrapper = string2HTML(template("MEN"));
                    pWrapper.appendChild(string2HTML(template("GEN")));
                    bodyContainer.insertBefore(pWrapper, pageContainer);
                    eventHandler(pWrapper, "click", navigateSettings);
                }
                document[(isChrome && "body") || "documentElement"].scrollTop = 0;
            }
            buttonNotif = document.getElementsByClassName("notifications-container")[0];
            buttonsSection = document.getElementById("yt-masthead-user") || document.getElementById("yt-masthead-signin");
            if (buttonsSection && !document.getElementById("P")) {
                settingsButton = document.createElement("button");
                settingsButton.id = "P";
                settingsButton.setAttribute("title", userLang("YTSETS"));
                eventHandler(settingsButton, "click", settingsTemplate);
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
                    name = document.getElementsByClassName("yt-user-info")[0];
                function videoCounter() {
                    link.href = window.location.origin + "/channel/" + user.getAttribute("data-ytid") + "/videos";
                    span = document.createElement("span");
                    span.textContent = " · ";
                    name.appendChild(span);
                    name.appendChild(link);
                    verified = document.getElementsByClassName("yt-channel-title-icon-verified")[0];
                    if (verified) {
                        user.className += " yt-uix-tooltip";
                        user.setAttribute("data-tooltip-text", verified.getAttribute("data-tooltip-text"));
                        user.style.color = "#167ac6";
                        verified.remove();
                    }
                }
                function getPLInfo(details) {
                    details = details.target.responseText;
                    if (details) {
                        details = JSON.parse(details);
                        details = details.body && details.body.content && (details.body.content.html || details.body.content);
                        details = details && details.match && details.match(/class="pl-header-details">([\w\W]*?)<\/ul>/)[1];
                        details = details && details.match(/<li>([\w\W]*?)<\/li>/g)[1];
                        if (details) {
                            link.className = "spf-link";
                            link.textContent = channelId[user.getAttribute("data-ytid")] = details.replace(/<\/?li>/g, "").replace("&#39;", "'");
                            videoCounter();
                        }
                    }
                }
                if (!document.getElementById("uploaded-videos") && name) {
                    link = document.createElement("a");
                    link.id = "uploaded-videos";
                    name.appendChild(link);
                    user = name.querySelector("a");
                    if (channelId[user.getAttribute("data-ytid")]) {
                        link.textContent = channelId[user.getAttribute("data-ytid")];
                        videoCounter();
                    } else {
                        localXHR(
                            "GET",
                            "/playlist?spf=navigate&list=" + user.getAttribute("data-ytid").replace("UC", "UU"),
                            getPLInfo
                        );
                    }
                }
            }
            function publishedTime() {
                var watchTime = document.getElementsByClassName("watch-time-text")[0];
                function getCHInfo(details) {
                    var isLive;
                    details = details.target.responseText;
                    if (details) {
                        if (watchTime.textContent.split("·").length < 2) {
                            details = JSON.parse(details);
                            details = details.body && details.body.content && (details.body.content.html || details.body.content);
                            isLive = details && details.match && details.match(/yt-badge-live/);
                            details = details && details.match && details.match(/yt-lockup-meta-info">\n<li>([\w\W]*?)<\/ul/);
                            if (details && !isLive) {
                                watchTime.textContent += " · " + details[1].split("</li><li>")[0];
                            }
                        }
                    }
                }
                if (watchTime && window.ytplayer && window.ytplayer.config) {
                    localXHR(
                        "GET",
                        "/channel/" + window.ytplayer.config.args.ucid + "/search?query='" + window.ytplayer.config.args.video_id + "'&spf=navigate",
                        getCHInfo
                    );
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
                comments = document.getElementById("watch-discussion");
            function showComments() {
                if (comments.lazyload) {
                    window.spf.load(comments.lazyload[0], comments.lazyload[1]);
                }
                comments.classList.toggle("show");
                wrapper.querySelector("button").textContent = userLang((comments.classList.contains("show") && "HIDE_CMTS") || "SHOW_CMTS");
            }
            if (comments && !document.getElementById("P-show-comments") && parSets.VID_HIDE_COMS === "1") {
                wrapper = string2HTML("<div id='P-show-comments' class='yt-card'>" +
                    "    <button class='yt-uix-button yt-uix-button-expander' ytplus='tnd|SHOW_CMTS'></button>" +
                    "</div>");
                eventHandler(wrapper, "click", showComments);
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
            function clearRVS(rvs) {
                var i,
                    author,
                    newrvs = [];
                rvs = rvs.split(",");
                i = rvs.length;
                while (i) {
                    i -= 1;
                    author = false;
                    if (rvs[i].split("author").length > 1) {
                        author = rvs[i].split(/\=|&/g);
                        author = decodeURIComponent(author[author.indexOf("author") + 1]).replace(/\+/g, " ");
                    }
                    if (!author || JSON.stringify(parSets.blacklist).split(author).length < 2) {
                        newrvs.unshift(rvs[i]);
                    }
                }
                return newrvs.join(",");
            }
            if (config.args.video_id) {
                config.args.autohide = "2";
                config.args.dash = (parSets.VID_PLR_DASH && "0") || config.args.dash;
                config.args.vq = parSets.VID_DFLT_QLTY;
                if (parSets.VID_DFLT_QLTY !== "auto") {
                    try {
                        if (!window.localStorage["yt-player-quality"] || window.localStorage["yt-player-quality"].split(parSets.VID_DFLT_QLTY).length < 2) {
                            window.localStorage["yt-player-quality"] = JSON.stringify({
                                "data": parSets.VID_DFLT_QLTY,
                                "expiration": new Date().getTime() + 86400000,
                                "creation": new Date().getTime()
                            });
                        }
                    } catch (ignore) {}
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
                if (config.args.cc_load_policy && parSets.VID_PLR_CC) {
                    config.args.cc_load_policy = "0";
                    if (config.args.ttsurl) {
                        delete config.args.ttsurl;
                        delete config.args.caption_tracks;
                    }
                }
                if ((parSets.VID_PLR_ADS && (!parSets.VID_SUB_ADS || (parSets.VID_SUB_ADS && !config.args.subscribed)))) {
                    delete config.args.ad3_module;
                }
                if (parSets.BLK_ON && window.yt && window.yt.config_ && window.yt.config_.RELATED_PLAYER_ARGS && window.yt.config_.RELATED_PLAYER_ARGS.rvs) {
                    config.args.rvs = window.yt.config_.RELATED_PLAYER_ARGS.rvs = clearRVS(window.yt.config_.RELATED_PLAYER_ARGS.rvs);
                }
                if (window.ytplayer && window.ytplayer.config === null) {
                    window.ytplayer.config = config;
                }
                if (window.ytplayer && window.ytplayer.config) {
                    window.ytplayer.config.args = config.args;
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
                        return eventHandler(window, "resize", updatePos, false, "remove");
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
                        eventHandler(document, "mousemove", customFloaterPosition, false, "remove");
                        eventHandler(document, "mouseup", customFloaterPosition, false, "remove");
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
                        eventHandler(document, "mousedown", floaterControl, false, "remove");
                    }
                }
                if (!sidebar) {
                    eventHandler(window, "scroll", initFloater, false, "remove");
                    return;
                }
                if (videoPlayer) {
                    if (!floaterUI) {
                        floaterUI = string2HTML("<div id='part_floaterui'>" +
                            "    <button id='part_floaterui_move' ytplus='ttl|VID_PLR_ALVIS_MOVE'></button>" +
                            "    <button id='part_floaterui_reset' ytplus='ttl|VID_PLR_ALVIS_RST'></button>" +
                            "    <button id='part_floaterui_scrolltop' ytplus='ttl|VID_PLR_ALVIS_SCRL_TOP'></button>" +
                            "</div>");
                        eventHandler(document, "mousemove", customFloaterPosition);
                        eventHandler(document, "mouseup", customFloaterPosition);
                        eventHandler(document, "mousedown", floaterControl);
                        videoPlayer.appendChild(floaterUI);
                    }
                    if (outOfSight && !isFloater) {
                        document.documentElement.classList.add("floater");
                        eventHandler(window, "resize", updatePos);
                        updatePos();
                    } else if (!outOfSight && isFloater) {
                        document.documentElement.classList.remove("floater");
                        eventHandler(window, "resize", updatePos, false, "remove");
                        videoPlayer.removeAttribute("style");
                    }
                }
            }
            if (parSets.VID_PLR_ALVIS) {
                if (window.location.pathname === "/watch") {
                    eventHandler(window, "scroll", initFloater);
                } else if (window.location.pathname !== "/watch") {
                    eventHandler(window, "scroll", initFloater, false, "remove");
                }
            }
        }
        function subPlaylist() {
            var i,
                list      = [],
                button    = document.getElementById("subscription-playlist"),
                navMenu   = document.getElementById("channel-navigation-menu"),
                listTitle = document.getElementsByClassName("appbar-nav-menu")[0],
                videoList = document.getElementsByClassName("addto-watch-later-button");
            function initSubPlaylist() {
                i = videoList.length;
                while (i) {
                    i -= 1;
                    if (i > -1) {
                        list.push(videoList[i].getAttribute("data-video-ids"));
                    }
                }
                list.reverse().join("%2C");
                listTitle = listTitle && listTitle.getElementsByClassName("epic-nav-item-heading")[0].textContent.trim();
                button = document.getElementById("subscription-playlist");
                button.href = "/watch_videos?title=" + listTitle + "&video_ids=" + list;
            }
            if (parSets.GEN_SUB_LIST && window.location.href.split("/feed/subscriptions").length > 1 && !button && listTitle && videoList) {
                button = string2HTML("<li id='subscription-playlist-icon'>" +
                    "    <a id='subscription-playlist' ytplus='ttl|SUB_PLST' class='yt-uix-button spf-link yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default'>" +
                    "        <span class='yt-uix-button-content'></span>" +
                    "    </a>" +
                    "</li>");
                navMenu.insertBefore(button, navMenu.firstChild);
                eventHandler(button, "click", initSubPlaylist);
            }
        }
        function playerReady() {
            function alwaysActive(event) {
                var x,
                    y,
                    sets = document.getElementById("P-settings");
                if (window.location.pathname !== "/watch") {
                    eventHandler(document.documentElement, "focus", alwaysActive, true, "remove");
                    eventHandler(document.documentElement, "click", alwaysActive, true, "remove");
                    return;
                }
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
            function playerState(state) {
                if (parSets.fullBrs) {
                    document.documentElement.classList[(state < 5 && state > 0 && "add") || "remove"]("part_fullbrowser");
                }
                if (parSets.lightsOut) {
                    document.documentElement.classList[(state < 5 && state > 0 && "add") || "remove"]("part_cinema_mode");
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
                eventHandler(api, "onStateChange", playerState);
                if (parSets.VID_PLR_VOL_MEM) {
                    eventHandler(api, "onVolumeChange", volumeChanged);
                }
                if (parSets.VID_PLR_SIZE_MEM) {
                    eventHandler(api, "SIZE_CLICKED", sizeChanged);
                }
                if (parSets.VID_PLR_VOL_MEM) {
                    api.setVolume(parSets.volLev);
                }
                if (parSets.loopVid) {
                    document.getElementsByTagName("video")[0].loop = parSets.loopVid;
                }
                if (parSets.VID_PLR_ALACT) {
                    eventHandler(document.documentElement, "focus", alwaysActive, true);
                    eventHandler(document.documentElement, "mouseup", alwaysActive, true);
                }
            }
        }
        function scriptExit(event) {
            function commentsLoad(originalFunction) {
                return function () {
                    var args     = arguments,
                        comments = document.getElementById("watch-discussion");
                    if (comments && !comments.lazyload && !comments.classList.contains("show") && args[0].split("comments").length > 1) {
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
                    var args = arguments;
                    argsCleaner(args[1]);
                    if (args[0].id === "upsell-video") {
                        return originalFunction.apply(this, args);
                    }
                    originalFunction.apply(this, args);
                    if (api) {
                        if (!parSets.VID_PLR_ATPL) {
                            api.cueVideoByPlayerVars(window.ytplayer.config.args);
                        }
                        api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
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
                            eventHandler(nextButton, "click", api.nextVideo);
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
                    function buildConfig(conf) {
                        config.args[conf.split("=")[0]] = decodeURIComponent(conf.split("=")[1]).replace(/\+/g, " ");
                    }
                    function revertConfig(conf) {
                        patch[0].response.push(conf + "=" + encodeURIComponent(config.args[conf]).replace(/\%20/g, "+"));
                    }
                    for (key in args[0]) {
                        if (args[0][key] !== undefined) {
                            patch[0][key] = args[0][key];
                        }
                    }
                    patch[0].response.split("&").forEach(buildConfig);
                    config = argsCleaner(config);
                    patch[0].response = [];
                    Object.keys(config.args).forEach(revertConfig);
                    patch[0].response = patch[0].response.join("&");
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
                    var moviePlayer,
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
                        moviePlayer = document.getElementById("movie_player");
                        if (moviePlayer && !parSets.VID_PLR_ATPL) {
                            moviePlayer.cueVideoByPlayerVars(window.ytplayer.config.args);
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
            if ((event && event.target && event.target.getAttribute("name") === "html5player/html5player") || (!window.html5Patched && window.yt && window.yt.player && window.yt.player.Application && window.yt.player.Application.create)) {
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
                        newSidebar   = window.open(event.getAttribute("data-link"), "sidebarMode", "width=467,height=" + window.screen.availHeight + ",scrollbars=1" + sidebarAlign);
                    function snapFit() {
                        newSidebar.resizeTo(newSidebar.outerWidth, window.screen.availHeight);
                    }
                    newSidebar.addEventListener("readystatechange", snapFit, true);
                    newSidebar.focus();
                }
                function initBlackList() {
                    parSets.blacklist[event.getAttribute("data-ytid")] = event.getAttribute("data-user");
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
                if (event) {
                    event.preventDefault();
                    event = event.target;
                    if (event.className === "sidebarmode yt-uix-tooltip") {
                        initSidebarMode();
                    } else if (event.className === "blacklist yt-uix-tooltip") {
                        initBlackList();
                    }
                }
            }
            function insertButtons(i) {
                var button;
                function createButton(type, details) {
                    if (type === "sidebarmode") {
                        button = "<div ytplus='ttl|SDBR_OPEN&ttp|SDBR_OPEN' data-link='" + details.videolink + "' class='" + type + " yt-uix-tooltip'></div>";
                    } else {
                        button = "<div ytplus='ttl|BLCK_ADD&ttp|BLCK_ADD' data-user='" + details.username + "' data-ytid='" + details.youtubeid + "' class='" + type + " yt-uix-tooltip'></div>";
                    }
                    return string2HTML(button);
                }
                if (detailList[i]) {
                    if (parSets.GEN_SDBR_ON && !window.opener && !detailList[i].thumbfield.getElementsByClassName("sidebarmode")[0]) {
                        button = createButton("sidebarmode", detailList[i]);
                        eventHandler(button, "click", initThumbMod);
                        detailList[i].thumbfield.appendChild(button);
                    }
                    if (parSets.BLK_ON && window.location.href.split("/feed/subscriptions").length < 2 && !detailList[i].thumbfield.getElementsByClassName("blacklist")[0]) {
                        button = createButton("blacklist", detailList[i]);
                        eventHandler(button, "click", initThumbMod);
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
                    userId = infoField && infoField.getAttribute("data-ytid");
                    userName = infoField && infoField.textContent;
                    videoLink = titleField && titleField.href;
                    detailList[i] = undefined;
                    if (userId && userId.split("UC").length < 2) {
                        infoField = masterList[i].getElementsByClassName("g-hovercard")[0];
                        userId = infoField && infoField.getAttribute("data-ytid");
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
                                if (thumbField.tagName === "LI") {
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
                ["yt-lockup-tile", "video-list-item", "yt-shelf-grid-item", "expanded-shelf-content-item-wrapper"].forEach(getList);
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
                eventHandler(window, "wheel", volumeWheel);
            } else if (window.location.pathname !== "/watch") {
                eventHandler(window, "wheel", volumeWheel, false, "remove");
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
                event = isChrome ? event.target.parentNode : event.target;
                event.classList.toggle("yt-uix-button-toggled");
                set("plRev", (event.classList.contains("yt-uix-button-toggled")) ? window.yt.config_.LIST_ID : false);
                reverseControl();
            }
            function autoplayButton(event) {
                event = isChrome ? event.target.parentNode : event.target;
                event.classList.toggle("yt-uix-button-toggled");
                set("plApl", event.classList.contains("yt-uix-button-toggled"));
            }
            function createButton(type, label, bool, call) {
                var navCtrls = document.getElementsByClassName("playlist-nav-controls")[0],
                    button   = string2HTML("<button ytplus='ttp|" + label + "&ttl|" + label + "' class='yt-uix-button yt-uix-button-player-controls yt-uix-button-opacity yt-uix-tooltip" + (((bool === true || href.split(bool).length > 1) && " yt-uix-button-toggled") || '') + "'' type='button' id='" + type + "'>" +
                        "    <span class='yt-uix-button-icon yt-uix-button-icon-watch-appbar-" + type + "-video-list'></span>" +
                        "</button>");
                plBar.className = plBar.className.replace("radio-playlist", "");
                eventHandler(button, "click", call);
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
                    function hideContainer() {
                        container.classList.toggle("invisible");
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
                        eventHandler(close, "click", hideContainer);
                        container.appendChild(close);
                        document.body.appendChild(container);
                    } else if (container.id && container.classList.contains("invisible")) {
                        container.classList.toggle("invisible");
                    }
                }
                function openSidebar() {
                    var sidebarAlign = (parSets.VID_SDBR_ALGN > 1) ? ",left=" + (window.screen.availWidth - 467) : (parSets.VID_SDBR_ALGN < 1) ? "" : ",left=0",
                        newSidebar   = window.open(window.location.href, "sidebarMode", "width=467,height=" + window.screen.availHeight + ",scrollbars=1" + sidebarAlign);
                    function snapFit() {
                        newSidebar.resizeTo(newSidebar.outerWidth, window.screen.availHeight);
                    }
                    newSidebar.addEventListener("readystatechange", snapFit, true);
                    newSidebar.focus();
                }
                function toggleFullBrowser(event) {
                    var plrState = api && api.getPlayerState && api.getPlayerState() < 5 && api.getPlayerState() > 0;
                    function exitFullBrowser(key) {
                        if (document.documentElement.classList.contains("part_fullbrowser") && (key.keyCode === 27 || key.key === "Escape" || key.target.className.split("ytp-size").length > 1)) {
                            toggleFullBrowser(key);
                            if (key.type === "click") {
                                eventHandler(document, "keydown", exitFullBrowser, false, "remove");
                                eventHandler(document, "click", exitFullBrowser, false, "remove");
                                key.target.click();
                            }
                        }
                    }
                    eventHandler(document, "keydown", exitFullBrowser);
                    eventHandler(document, "click", exitFullBrowser);
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
                        eventHandler(document, "keydown", toggleFrames);
                    } else if (!frameStep || !frameStep.classList.contains("active")) {
                        eventHandler(document, "keydown", toggleFrames, false, "remove");
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
                eventHandler(cnslCont, "click", handleToggles);
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
            function toggleConsole() {
                document.documentElement.classList.toggle("player-console");
                set("advOpts", document.documentElement.classList.contains("player-console"));
            }
            if (window.location.pathname === "/watch" && header && !cnslBtn) {
                cnslBtn = string2HTML("<button id='console-button' ytplus='ttl|ADV_OPTS'></button>");
                eventHandler(cnslBtn, "click", toggleConsole);
                cnslCont = string2HTML("<div id='advanced-options'></div>");
                cnslCont.appendChild(cnslBtn);
                header.appendChild(cnslCont);
                if (controls) {
                    controls.remove();
                }
                controls = string2HTML("<div id='player-console'>" +
                    "    <div id='autoplay-button' class='yt-uix-tooltip" + ((parSets.VID_PLR_ATPL && " active") || "") + "' ytplus='ttp|CNSL_AP''></div>" +
                    "    <div id='loop-button' class='yt-uix-tooltip' ytplus='ttp|CNSL_RPT'></div>" +
                    "    <div id='save-thumbnail-button' class='yt-uix-tooltip' ytplus='ttp|CNSL_SVTH'></div>" +
                    "    <div id='screenshot-button' class='yt-uix-tooltip' ytplus='ttp|CNSL_SS''></div>" +
                    "    <div id='sidebar-button' class='yt-uix-tooltip' ytplus='ttp|CNSL_SDBR'" + ((window.opener && " style='display:none'") || "") + "></div>" +
                    "    <div id='fullbrowser-button' class='yt-uix-tooltip' ytplus='ttp|CNSL_FLBR'></div>" +
                    "    <div id='cinemamode-button' class='yt-uix-tooltip' ytplus='ttp|CNSL_CINM_MD'></div>" +
                    "    <div id='framestep-button' class='yt-uix-tooltip' ytplus='ttp|CNSL_FRME'></div>" +
                    "</div>");
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
                    eventHandler(document, "click", defaultChannelPage);
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
                    loadMore.setAttribute("data-scrolldetect-callback", "load-more-auto");
                }
            }
        }
        function initFunctions() {
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
            clearOrphans();
        }
        function request(event) {
            var listAfter   = event.detail.url.split("list=").length > 1,
                videoAfter  = event.detail.url.split("/watch?").length > 1,
                listBefore  = event.detail.previous.split("list=").length > 1,
                videoBefore = event.detail.previous.split("/watch?").length > 1,
                videoPlayer = document.getElementById("movie_player"),
                videoLoaded = window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded;
            document.documentElement.classList.remove("floater");
            if (videoPlayer) {
                videoPlayer.removeAttribute("style");
                if ((videoBefore && !videoAfter) || (videoAfter && (listAfter !== listBefore || !videoBefore))) {
                    if (videoLoaded) {
                        delete window.ytplayer.config.loaded;
                    }
                    videoPlayer.remove();
                }
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
        if (isChrome) {
            eventHandler(document.documentElement, "load", scriptExit, true);
        } else {
            eventHandler(window, "afterscriptexecute", scriptExit);
        }
        eventHandler(window, "message", updateSettings);
        eventHandler(window, "spfdone", initFunctions);
        eventHandler(window, "spfrequest", request);
        eventHandler(window, "readystatechange", initFunctions, true);
        window.onYouTubePlayerReady = shareApi(window.onYouTubePlayerReady);
        window.matchMedia = false;
        initFunctions();
    }
    function updateSettings(event) {
        event = (event && event.particleSettings) || event || {};
        event.updateSettings = true;
        window.postMessage(event, "*");
    }
    function initParticle(event) {
        var inject;
        function filterChromeStorage(keys) {
            if (keys.particleSettings && keys.particleSettings.newValue) {
                updateSettings(keys.particleSettings.newValue);
            }
        }
        if (!event && userscript) {
            event = JSON.parse(window.GM_getValue("particleSettings", "{}"));
        }
        if (event) {
            event = JSON.stringify(event.particleSettings || event);
            if (window.chrome || userscript) {
                inject = document.createElement("link");
                inject.rel = "stylesheet";
                inject.type = "text/css";
                inject.href = "https://particlecore.github.io/Particle/stylesheets/YouTubePlus.css";
                document.documentElement.appendChild(inject);
            }
            inject = document.createElement("script");
            inject.textContent = "(" + String(particle).replace("parSets,", "parSets = " + event + ",") + "())";
            document.documentElement.appendChild(inject);
            if (!userscript) {
                if (window.chrome) {
                    window.chrome.storage.onChanged.addListener(filterChromeStorage);
                } else {
                    window.self.port.on("particleSettings", updateSettings);
                }
            }
        }
    }
    function internalXHR(details) {
        details = details.data;
        if (typeof details === "object" && details.set) {
            if (userscript) {
                window.GM_setValue("particleSettings", JSON.stringify(details.set));
                updateSettings(JSON.parse(window.GM_getValue("particleSettings", "{}")));
            } else if (window.chrome) {
                window.chrome.storage.local.set({"particleSettings": details.set});
            } else {
                window.self.port.emit("particleSettings", details);
            }
        }
    }
    if (userscript) {
        window.GM_getValue = GM_getValue;
        window.GM_setValue = GM_setValue;
        initParticle();
    } else if (window.chrome) {
        window.chrome.storage.local.get("particleSettings", initParticle);
    } else {
        window.self.port.once("particleSettings", initParticle);
    }
    window.addEventListener("message", internalXHR);
}());
