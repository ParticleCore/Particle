// ==UserScript==
// @version         1.4.0
// @name            YouTube +
// @namespace       https://github.com/ParticleCore
// @description     YouTube with more freedom
// @icon            https://raw.githubusercontent.com/ParticleCore/Particle/gh-pages/images/YT%2Bicon.png
// @match           *://www.youtube.com/*
// @exclude         *://www.youtube.com/tv*
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
    function particle(isaddon) {
        function set(setting, newValue) {
            if (setting !== "parSets") {
                parSets[setting] = newValue;
            } else {
                parSets = newValue;
            }
            document.documentElement.dataset.parsend = JSON.stringify(parSets);
        }
        function eventHandler(event) {
            var i, keys,
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
                    events[type][listener.name] = [listener, useCapture];
                }
            } else if (events[type]) {
                keys = Object.keys(events[type]);
                i = keys.length;
                while (i--) {
                    if ((!events[type][keys[i]][1] && event.eventPhase > 1) || (events[type][keys[i]][1] && event.eventPhase < 3)) {
                        events[type][keys[i]][0](event);
                    }
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
        function lang(label) {
            function getLocale(data) {
                delete language.fetching;
                data = document.documentElement.dataset.setlocale;
                data = data && JSON.parse(data);
                if (data) {
                    parSets.extLang[ytlang] = data;
                    parSets.extLang[ytlang].lastMod = new Date().getTime();
                    parSets.extLang.nextCheck = new Date().getTime() + 6048E5;
                    set("extLang", parSets.extLang);
                }
                observer.disconnect();
            }
            function getLanguage(data) {
                delete language.fetching;
                if (data.target.readyState === 4 && data.target.status === 200) {
                    parSets.extLang[ytlang] = JSON.parse(data.target.response);
                    parSets.extLang[ytlang].lastMod = new Date(data.target.getResponseHeader("Last-Modified")).getTime();
                }
                parSets.extLang.nextCheck = new Date().getTime() + 6048E5;
                set("extLang", parSets.extLang);
            }
            function checkModified(data) {
                delete language.fetching;
                if (data.target.readyState === 4 && data.target.status === 200) {
                    language.fetching = true;
                    localXHR("GET", getLanguage, urlBase + ytlang + ".json", ["Accept", "application/vnd.github.raw"]);
                }
            }
            var observer,
                ytlang  = window.yt && window.yt.config_ && window.yt.config_.GAPI_LOCALE,
                urlBase = "https://api.github.com/repos/ParticleCore/Particle/contents/Locale/";
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
                        if (isaddon) {
                            observer = new MutationObserver(getLocale);
                            observer.observe(document.documentElement, {
                                attributes: true,
                                attributeFilter: ["data-setlocale"]
                            });
                            document.documentElement.dataset.getlocale = ytlang;
                        } else {
                            localXHR("HEAD", checkModified, urlBase + ytlang + ".json", ["If-Modified-Since", new Date(parSets.extLang[ytlang].lastMod).toUTCString()]);
                        }
                        parSets.extLang.nextCheck = new Date().getTime() + 6048E5;
                        set("extLang", parSets.extLang);
                    }
                    return parSets.extLang[ytlang][label];
                }
                if (!parSets.extLang[ytlang] && !language.fetching && (!parSets.extLang.nextCheck || parSets.extLang.nextCheck <= new Date().getTime())) {
                    language.fetching = true;
                    if (isaddon) {
                        observer = new MutationObserver(getLocale);
                        observer.observe(document.documentElement, {
                            attributes: true,
                            attributeFilter: ["data-setlocale"]
                        });
                        document.documentElement.dataset.getlocale = ytlang;
                    } else {
                        localXHR("GET", getLanguage, urlBase + ytlang + ".json", ["Accept", "application/vnd.github.raw"]);
                    }
                }
            }
            return language[label];
        }
        function setLocale(content) {
            function addLocale(list) {
                list = list.split("|");
                if (list[0] === "tnd") {
                    ytplabel[i].appendChild(document.createTextNode(lang(list[1])));
                } else if (list[0] === "ttl") {
                    ytplabel[i].setAttribute("title", lang(list[1]));
                } else {
                    ytplabel[i].dataset.tooltipText = lang(list[1]);
                }
            }
            var i, ytplabel;
            ytplabel = content.querySelectorAll("[data-p]");
            i = ytplabel.length;
            while (i--) {
                ytplabel[i].dataset.p.split("&").forEach(addLocale);
            }
            return content;
        }
        function customStyles() {
            function checkClasses(clss) {
                document.documentElement.classList[parSets[clss] ? "add" : "remove"](setsList[clss]);
            }
            var plrApi   = document.getElementById("player-api"),
                commSect = document.getElementById("watch-discussion"),
                sidebar  = document.getElementsByClassName("branded-page-v2-secondary-col")[0],
                ytGrid   = document.querySelectorAll(".yt-uix-menu-top-level-flow-button:last-child a")[0],
                adverts  = parSets.GEN_DSBL_ADS && (document.getElementById("masthead_child") || document.getElementById("feed-pyv-container") || document.getElementsByClassName("pyv-afc-ads-container")[0] || document.getElementsByClassName("ad-div")[0] || document.querySelector(".video-list-item:not(.related-list-item):not(.dashboard-widget-item)")),
                setsList = {
                    GEN_DSBL_ADS    : "part_no_ads",
                    GEN_BLUE_GLOW   : "part_dsbl_glow",
                    GEN_HIDE_FTR    : "part_hide_footer",
                    GEN_BTTR_NTF    : "part_notif_button",
                    GEN_GRID_SUBS   : "part_grid_subs",
                    GEN_GRID_SRCH   : "part_grid_search",
                    GEN_CMPT_TTLS   : "part_compact_titles",
                    VID_PLR_ATPL    : "part_autoplayon",
                    VID_PLR_FIT     : "part_fit_theater",
                    VID_PLR_DYN_SIZE: "part_static_size",
                    VID_HIDE_DETLS  : "part_hide_details",
                    VID_TTL_CMPT    : "part_compact_title",
                    VID_DESC_SHRT   : "part_labelless_buttons"
                };
            if (window.name === "popOut") {
                document.documentElement.classList.add("part_popout");
            }
            if (ytGrid && parSets.GEN_GRID_SUBS) {
                ytGrid.click();
            } else {
                while (adverts) {
                    adverts.remove();
                    adverts = document.getElementById("masthead_child") || document.getElementById("feed-pyv-container") || document.getElementsByClassName("pyv-afc-ads-container")[0] || document.getElementsByClassName("ad-div")[0] || document.querySelector(".video-list-item:not(.related-list-item):not(.dashboard-widget-item)");
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
                Object.keys(setsList).forEach(checkClasses);
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
                observer = new MutationObserver(pageScript);
                return observer.observe(gate, {
                    attributes:true,
                    attributeFilter: ["data-" + key]
                });
            }
            if (sets) {
                parSets = sets;
                gate.dataset[key] = null;
                customStyles();
            }
        }
        function settingsMenu() {
            if (document.getElementById("P")) {
                return;
            }
            function template(section) {
                function buildBlacklist(blist) {
                    var sortAlpha = [],
                        list      = parSets.blacklist;
                    function buildList(obj) {
                        var lnk,
                            keys  = Object.keys(obj),
                            _temp = document.createElement("template");
                        _temp.innerHTML = "<div class='blacklist'><button class='close'></button><a target='_blank'></a></div>";
                        _temp = _temp.content.firstChild;
                        lnk = _temp.getElementsByTagName("a")[0];
                        lnk.href = "/channel/" + keys[0];
                        lnk.setAttribute("title", obj[keys[0]]);
                        lnk.textContent = obj[keys[0]];
                        blist.appendChild(_temp);
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
                    var i, ytp, list = menu.querySelector("#blacklist");
                    if (parSets) {
                        if (list) {
                            buildBlacklist(list);
                        }
                        ytp = menu.querySelectorAll("input[id]");
                        i = ytp.length;
                        while (i--) {
                            if (ytp[i].type === "checkbox" && parSets[ytp[i].id] === true) {
                                ytp[i].setAttribute("checked", "true");
                            }
                            if (ytp[i].type === "text" && typeof parSets[ytp[i].id] === 'string') {
                                ytp[i].setAttribute("value", parSets[ytp[i].id]);
                            }
                        }
                        ytp = menu.querySelectorAll("option");
                        i = ytp.length;
                        while (i--) {
                            if (parSets[ytp[i].parentNode.id] === ytp[i].value) {
                                ytp[i].setAttribute("selected", "true");
                            }
                        }
                    }
                    return menu;
                }
                var temp = document.createElement("template");
                if (section === "MEN") {
                    temp.innerHTML = //
                        "<div id='P-settings'>" +
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
                    temp.innerHTML = //
                        "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        "        <button class='P-save' data-p='tnd|GLB_SVE'></button>" +
                        "        <button class='P-reset' data-p='tnd|GLB_RSET'></button>" +
                        "        <button class='P-impexp' data-p='ttl|GLB_IMPR'></button>" +
                        "        <button class='P-implang' data-p='ttl|GLB_LOCL_LANG&tnd|LOCALE'></button>" +
                        "        <h2 data-p='tnd|GEN_TTL'></h2>" +
                        "    </div>" +
                        "    <hr class='P-horz'></hr>" +
                        "    <h3 data-p='tnd|GEN_GEN'></h3>" +
                        "    <div><input id='GEN_LOCL_LANG' type='checkbox'></input><label for='GEN_LOCL_LANG' data-p='tnd|GEN_LOCL_LANG'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#custom_lang' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_DSBL_ADS' type='checkbox'></input><label for='GEN_DSBL_ADS' data-p='tnd|GEN_DSBL_ADS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#outside_ads' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_YT_LOGO_LINK' type='checkbox'></input><label for='GEN_YT_LOGO_LINK' data-p='tnd|GEN_YT_LOGO_LINK'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#logo_redirect' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_SUB_LIST' type='checkbox'></input><label for='GEN_SUB_LIST' data-p='tnd|GEN_SUB_LIST'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#sub_playlist' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_INF_SCRL' type='checkbox'></input><label for='GEN_INF_SCRL' data-p='tnd|GEN_INF_SCRL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#infinite_scroll' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_PPOT_ON' type='checkbox'></input><label for='GEN_PPOT_ON' data-p='tnd|GEN_PPOT_ON'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#popout_on' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_REM_APUN' type='checkbox'></input><label for='GEN_REM_APUN' data-p='tnd|GEN_REM_APUN'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#remove_autoplay' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_SPF_OFF' type='checkbox'></input><label for='GEN_SPF_OFF' data-p='tnd|GEN_SPF_OFF'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#spf_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
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
                        "    <div><input id='GEN_GRID_SUBS' type='checkbox'></input><label for='GEN_GRID_SUBS' data-p='tnd|GEN_GRID_SUBS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#sub_grid' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_GRID_SRCH' type='checkbox'></input><label for='GEN_GRID_SRCH' data-p='tnd|GEN_GRID_SRCH'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#search_grid' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_BTTR_NTF' type='checkbox'></input><label for='GEN_BTTR_NTF' data-p='tnd|GEN_BTTR_NTF'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#blue_box' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_DSB_HVRC' type='checkbox'></input><label for='GEN_DSB_HVRC' data-p='tnd|GEN_DSB_HVRC'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hovercards_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_CMPT_TTLS' type='checkbox'></input><label for='GEN_CMPT_TTLS' data-p='tnd|GEN_CMPT_TTLS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#feed_titles' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_BLUE_GLOW' type='checkbox'></input><label for='GEN_BLUE_GLOW' data-p='tnd|GEN_BLUE_GLOW'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#blue_glow' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_HIDE_FTR' type='checkbox'></input><label for='GEN_HIDE_FTR' data-p='tnd|GEN_HIDE_FTR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_footer' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_HDE_RECM_SDBR' type='checkbox'></input><label for='GEN_HDE_RECM_SDBR' data-p='tnd|GEN_HDE_RECM_SDBR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_recom_sidebar' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_HDE_SRCH_SDBR' type='checkbox'></input><label for='GEN_HDE_SRCH_SDBR' data-p='tnd|GEN_HDE_SRCH_SDBR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_search_sidebar' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='GEN_HDE_CHN_SDBR' type='checkbox'></input><label for='GEN_HDE_CHN_SDBR' data-p='tnd|GEN_HDE_CHN_SDBR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_channel_sidebar' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "</div>";
                    if (parSets.GEN_LOCL_LANG && parSets.localLang) {
                        temp.content.querySelector(".P-implang").dataset.p = "GLB_LOCL_LANG_CSTM";
                    }
                } else if (section === "VID") {
                    temp.innerHTML = //
                        "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        "        <button class='P-save' data-p='tnd|GLB_SVE'></button>" +
                        "        <button class='P-reset' data-p='tnd|GLB_RSET'></button>" +
                        "        <button class='P-impexp' data-p='ttl|GLB_IMPR'></button>" +
                        "        <button class='P-implang' data-p='ttl|GLB_LOCL_LANG&tnd|LOCALE'></button>" +
                        "        <h2 data-p='tnd|VID_TTL'></h2>" +
                        "    </div>" +
                        "    <hr class='P-horz'></hr>" +
                        "    <h3 data-p='tnd|VID_PLR'></h3>" +
                        "    <div><input id='VID_PLR_ADS' type='checkbox'></input><label for='VID_PLR_ADS' data-p='tnd|VID_PLR_ADS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#video_ads' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_SUB_ADS' type='checkbox'></input><label for='VID_SUB_ADS' data-p='tnd|VID_SUB_ADS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#subs_ads_on' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_ALVIS' type='checkbox'></input><label for='VID_PLR_ALVIS' data-p='tnd|VID_PLR_ALVIS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#floating_player' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_ALVIS_WDTH' type='text' placeholder='350' size='6'></input><label for='VID_PLR_ALVIS_WDTH' data-p='tnd|VID_PLR_ALVIS_WDTH'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#floating_player_width' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_ATPL' type='checkbox'></input><label for='VID_PLR_ATPL' data-p='tnd|VID_PLR_ATPL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#video_autoplay' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_CC' type='checkbox'></input><label for='VID_PLR_CC' data-p='tnd|VID_PLR_CC'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#subtitles_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_ANTS' type='checkbox'></input><label for='VID_PLR_ANTS' data-p='tnd|VID_PLR_ANTS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#annotations_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_END_SHRE' type='checkbox'></input><label for='VID_END_SHRE' data-p='tnd|VID_END_SHRE'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#share_panel_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_VOL_MEM' type='checkbox'></input><label for='VID_PLR_VOL_MEM' data-p='tnd|VID_PLR_VOL_MEM'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#remember_volume' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_VOL_LDN' type='checkbox'></input><label for='VID_PLR_VOL_LDN' data-p='tnd|VID_PLR_VOL_LDN'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#disable_normalisation' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_ALACT' type='checkbox'></input><label for='VID_PLR_ALACT' data-p='tnd|VID_PLR_ALACT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#shortcuts_on' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_SIZE_MEM' type='checkbox'></input><label for='VID_PLR_SIZE_MEM' data-p='tnd|VID_PLR_SIZE_MEM'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#remember_mode' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_VOL_WHEEL' type='checkbox'></input><label for='VID_VOL_WHEEL' data-p='tnd|VID_VOL_WHEEL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#wheel_volume' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_DASH' type='checkbox'></input><label for='VID_PLR_DASH' data-p='tnd|VID_PLR_DASH'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#dash_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_HFR' type='checkbox'></input><label for='VID_PLR_HFR' data-p='tnd|VID_PLR_HFR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hfr_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_HTML5' type='checkbox'></input><label for='VID_PLR_HTML5' data-p='tnd|VID_PLR_HTML5'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#force_html5' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
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
                        "    <div><input id='VID_PLR_INFO' type='checkbox'></input><label for='VID_PLR_INFO' data-p='tnd|VID_PLR_INFO'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#info_bar' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_DYN_SIZE' type='checkbox'></input><label for='VID_PLR_DYN_SIZE' data-p='tnd|VID_PLR_DYN_SIZE'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#dynamic_size_off' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_FIT' type='checkbox'></input><label for='VID_PLR_FIT' data-p='tnd|VID_PLR_FIT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#fit_to_page' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLR_FIT_WDTH' type='text' placeholder='1280px' size='6'></input><label for='VID_PLR_FIT_WDTH' data-p='tnd|VID_PLR_FIT_WDTH'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#fit_max_width' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <h3 data-p='tnd|VID_PLST'></h3>" +
                        "    <div><input id='VID_PLST_ATPL' type='checkbox'></input><label for='VID_PLST_ATPL' data-p='tnd|VID_PLST_ATPL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#playlist_autoplay' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_PLST_RVRS' type='checkbox'></input><label for='VID_PLST_RVRS' data-p='tnd|VID_PLST_RVRS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#playlist_reverse' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <h3 data-p='tnd|VID_LAYT'></h3>" +
                        "    <div><input id='VID_PPOT_SZ' type='text' placeholder='533' size='6'></input><label for='VID_PPOT_SZ' data-p='tnd|VID_PPOT_SZ'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#popout_size' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
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
                        "    <div><input id='VID_TTL_CMPT' type='checkbox'></input><label for='VID_TTL_CMPT' data-p='tnd|VID_TTL_CMPT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#video_title' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_DESC_SHRT' type='checkbox'></input><label for='VID_DESC_SHRT' data-p='tnd|VID_DESC_SHRT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#labelless_buttons' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_VID_CNT' type='checkbox'></input><label for='VID_VID_CNT' data-p='tnd|VID_VID_CNT'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#upload_counter' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_POST_TIME' type='checkbox'></input><label for='VID_POST_TIME' data-p='tnd|VID_POST_TIME'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#relative_upload_time' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_HIDE_DETLS' type='checkbox'></input><label for='VID_HIDE_DETLS' data-p='tnd|VID_HIDE_DETLS'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_video_details' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div><input id='VID_LAYT_AUTO_PNL' type='checkbox'></input><label for='VID_LAYT_AUTO_PNL' data-p='tnd|VID_LAYT_AUTO_PNL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#expand_description' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "</div>";
                    if (parSets.GEN_LOCL_LANG && parSets.localLang) {
                        temp.content.querySelector(".P-implang").dataset.p = "GLB_LOCL_LANG_CSTM";
                    }
                } else if (section === "BLK") {
                    temp.innerHTML = //
                        "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        "        <button class='P-save' data-p='tnd|GLB_SVE'></button>" +
                        "        <button class='P-reset' data-p='tnd|GLB_RSET'></button>" +
                        "        <button class='P-impexp' data-p='ttl|GLB_IMPR'></button>" +
                        "        <button class='P-implang' data-p='ttl|GLB_LOCL_LANG&tnd|LOCALE'></button>" +
                        "        <h2 data-p='tnd|BLK_TTL'></h2>" +
                        "    </div>" +
                        "    <hr class='P-horz'></hr>" +
                        "    <h3 data-p='tnd|BLK_BLK'></h3>" +
                        "    <div><input id='BLK_ON' type='checkbox'></input><label for='BLK_ON' data-p='tnd|BLK_ON'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#blacklist_on' data-p='ttl|FTR_DESC' target='features'>?</a></div>" +
                        "    <div id='blacklist'>" +
                        "        <div id='blacklist-controls'>" +
                        "            <button id='blacklist-edit' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'><span class='yt-uix-button-content' data-p='tnd|BLCK_EDIT'></span></button>" +
                        "            <button id='blacklist-save' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'><span class='yt-uix-button-content' data-p='tnd|BLCK_SAVE'></span></button>" +
                        "            <button id='blacklist-close' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'><span class='yt-uix-button-content' data-p='tnd|BLCK_CLSE'></span></button>" +
                        "        </div>" +
                        "        <textarea id='blacklist-edit-list'></textarea>" +
                        "    </div>" +
                        "    <br></br>" +
                        "</div>";
                    if (parSets.GEN_LOCL_LANG && parSets.localLang) {
                        temp.content.querySelector(".P-implang").dataset.p = "ttl|GLB_LOCL_LANG&tnd|GLB_LOCL_LANG_CSTM";
                    }
                } else if (section === "ABT") {
                    temp.innerHTML = //
                        "<div id='P-content'>" +
                        "    <div class='P-header'>" +
                        "        <h2 data-p='tnd|ABT_TTL'></h2>" +
                        "    </div>" +
                        "    <hr class='P-horz'></hr>" +
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
                return setLocale(addValues(temp.content));
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
                        expCont.innerHTML = //
                            "<div id='exp-cont'>" +
                            "   <button id='implang-save' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'>" +
                            "        <span class='yt-uix-button-content' data-p='tnd|GLB_IMPR_SAVE'></span>" +
                            "    </button>" +
                            "   <textarea id='impexp-list'></textarea>" +
                            "</div>";
                        if (target.classList.contains("P-impexp")) {
                            expCont.content.querySelector("#implang-save").id = "impexp-save";
                        }
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
                    function hideNotif() {
                        document.body.classList.remove("show-guide-button-notification");
                    }
                    var value,
                        notification = document.getElementById("appbar-main-guide-notification-container"),
                        navId        = document.getElementsByClassName("selected")[0].id,
                        userSets     = document.getElementById("P-content").querySelectorAll("[id^='" + navId + "']"),
                        savedSets    = parSets,
                        length       = userSets.length;
                    while (length--) {
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
                            notification.innerHTML = //
                                "<div id='appbar-main-guide-notification-container'>" +
                                "    <div class='appbar-guide-notification' role='alert'>" +
                                "        <span class='appbar-guide-notification-content-wrapper yt-valign'>" +
                                "            <span class='appbar-guide-notification-icon yt-sprite'></span>" +
                                "            <span class='appbar-guide-notification-text-content'></span>" +
                                "        </span>" +
                                "    </div>" +
                                "</div>";
                            notification = notification.content.firstChild;
                            document.getElementsByClassName("yt-masthead-logo-container")[0].appendChild(notification);
                        }
                        document.getElementsByClassName("appbar-guide-notification-text-content")[0].textContent = lang("GLB_SVE_SETS");
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
                if (event.target.id === "P" && event.target.tagName !== "INPUT") {
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
            function firstTime(event) {
                if (event && event.target && event.target.parentNode && event.target.parentNode.className === "par_closewlcm") {
                    set("firstTime", false);
                    eventHandler([welcome, "click", firstTime, false, "remove"]);
                    welcome.style.display = "none";
                }
            }
            var welcome, pContainer, buttonNotif, buttonsSection, settingsSection, settingsButton;
            buttonNotif = document.getElementsByClassName("notifications-container")[0];
            buttonsSection = document.getElementById("yt-masthead-user") || document.getElementById("yt-masthead-signin");
            if (buttonsSection) {
                settingsSection = document.createElement("template");
                settingsSection.innerHTML = //
                    "<div id='Psettings' style='display:inline-block;position:relative'>" +
                    "   <button id='P' data-p='ttl|YTSETS'></button>" +
                    "   <div id='part_welcome' style='display:none;margin-left:-220px;top:38px;right:0'>"+
                    "       <span data-p='tnd|WLCM'></span>" +
                    "       <br></br>" +
                    "       <span data-p='tnd|WLCMSTRT'></span>" +
                    "       <br></br><br></br>" +
                    "       <a data-p='tnd|WLCMFTRS' style='color:#FFF;' href='https://github.com/ParticleCore/Particle/wiki/Features' target='_blank'></a>" +
                    "       <div class='par_closewlcm'><span>×</span></div>" +
                    "   </div>" +
                    "</div>";
                settingsSection = setLocale(settingsSection.content);
                eventHandler([document, "click", settingsTemplate]);
                if (buttonNotif) {
                    buttonsSection.insertBefore(settingsSection, buttonNotif);
                } else {
                    buttonsSection.appendChild(settingsSection);
                }
                settingsButton = document.getElementById("P");
                welcome = document.getElementById("part_welcome");
                if (parSets.firstTime) {
                    welcome.style.display = "block";
                    eventHandler([welcome, "click", firstTime]);
                }
            }
        }
        function enhancedDetails() {
            function username() {
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
                var link, span, user,
                    name = document.getElementsByClassName("yt-user-info")[0];
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
                var watchTime = document.getElementsByClassName("watch-time-text")[0];
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
            function showComments(event) {
                if (event.target && event.target.parentNode && event.target.parentNode.id === "P-show-comments") {
                    if (comments.lazyload) {
                        window.spf.load(comments.lazyload[0], comments.lazyload[1]);
                    }
                    comments.classList.toggle("show");
                    wrapper.querySelector("button").textContent = lang((comments.classList.contains("show") && "HIDE_CMTS") || "SHOW_CMTS");
                }
            }
            var wrapper,
                comments = document.getElementById("watch-discussion"),
                isLive   = window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.livestream;
            if (!isLive && comments && !document.getElementById("P-show-comments") && parSets.VID_HIDE_COMS === "1") {
                wrapper = document.createElement("template");
                wrapper.innerHTML = //
                    "<div id='P-show-comments' class='yt-card'>" +
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
            if (parSets.VID_PLR_SIZE_MEM) {
                if (window.ytpsetwide) {
                    window.ytpsetwide("wide", (parSets.theaterMode ? "1" : "0"), -1);
                }
                if (playerElement && window.location.pathname === "/watch") {
                    pageElement.classList[parSets.theaterMode ? "add" : "remove"]("watch-wide");
                    pageElement.className = pageElement.className.replace(parSets.theaterMode ? "non-" : "watch-stage", parSets.theaterMode ? "" : "watch-non-stage");
                    playerElement.className = parSets.theaterMode ? playerElement.className.replace("small", "large") : playerElement.className.replace("large", "small").replace("medium", "small");
                }
            }
        }
        function argsCleaner(config) {
            function rvshfr(list) {
                var i, temp,
                    newList = [];
                list = list.split(",");
                i = list.length;
                while (i--) {
                    temp = list[i].split(/fps\=([0-9]{2})/)[1];
                    if (!temp || temp < 31) {
                        newList.push(list[i]);
                    }
                }
                return newList.join(",");
            }
            function plList() {
                var i, length, videos,
                    canShare = document.getElementsByClassName("playlist-header-content")[0];
                if (canShare && canShare.dataset.shareable === "False" && !config.args.video) {
                    config.args.video = [];
                    videos = document.querySelectorAll("li[data-video-id]");
                    length = videos.length;
                    for (i = 0; i < length; i++) {
                        config.args.video[i] = {"encrypted_id": videos[i].getAttribute("data-video-id")};
                    }
                }
            }
            if (config.args.video_id) {
                if (window.name === "popOut") {
                    plList();
                    document.title = config.args.title;
                    config.args.el = "embedded";
                }
                config.args.dash = (parSets.VID_PLR_DASH && "0") || config.args.dash;
                config.args.vq = parSets.VID_DFLT_QLTY;
                if (parSets.VID_DFLT_QLTY !== "auto") {
                    try {
                        window.localStorage["yt-player-quality"] = JSON.stringify({
                            "data": parSets.VID_DFLT_QLTY,
                            "expiration": new Date().getTime() + 864E5,
                            "creation": new Date().getTime()
                        });
                    } catch (ignore) {}
                }
                if (config.args.caption_audio_tracks && parSets.VID_PLR_CC) {
                    config.args.caption_audio_tracks = config.args.caption_audio_tracks.split(/&d=[0-9]|d=[0-9]&/).join("");
                }
                if (parSets.VID_PLR_VOL_LDN) {
                    delete config.args.loudness;
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
                    if (window.ytpsetwide) {
                        window.ytpsetwide("wide", config.args.player_wide, -1);
                    }
                }
                if ((config.args.iv_load_policy || config.args.iv_endscreen_url) && parSets.VID_PLR_ANTS) {
                    config.args.iv_load_policy = "3";
                    delete config.args.iv_endscreen_url;
                }
                if (parSets.VID_PLR_ADS && (!parSets.VID_SUB_ADS || (parSets.VID_SUB_ADS && !config.args.subscribed))) {
                    delete config.args.ad3_module;
                }
                if (config.args.vmap && !parSets.VID_PLR_ATPL && !parSets.VID_PLR_ADS) {
                    config.args.dvmap = config.args.vmap;
                    delete config.args.vmap;
                }
                if (config.args.adaptive_fmts && parSets.VID_PLR_HFR) {
                    config.args.adaptive_fmts = rvshfr(config.args.adaptive_fmts);
                }
                if (window.ytplayer) {
                    if (window.ytplayer.config === null) {
                        window.ytplayer.config = config;
                    } else if (window.ytplayer.config) {
                        window.ytplayer.config.args = config.args;
                    }
                }
            }
            return config;
        }
        function alwaysVisible() {
            function checkBounds(elm, X, Y) {
                return {
                    X: (((X > -1 && (X + elm.offsetWidth) < document.documentElement.offsetWidth) && X) || (X < 1 && "0") || (document.documentElement.offsetWidth - elm.offsetWidth)),
                    Y: (((Y > 51 && (Y + elm.offsetHeight) < document.documentElement.offsetHeight) && Y) || (Y < 52 && 52) || (document.documentElement.offsetHeight - elm.offsetHeight))
                };
            }
            function updatePos() {
                if (!document.documentElement.classList.contains("floater")) {
                    return eventHandler([window, "resize", updatePos, false, "remove"]);
                }
                var height = parseInt(parSets.VID_PLR_ALVIS_WDTH) || 350,
                    player = document.getElementById("movie_player"),
                    bounds = checkBounds(player, parSets.floaterX, parSets.floaterY);
                height = (height < 350 ? 350 : height) / (16 / 9);
                player.setAttribute("style", "width:" + (height * (16 / 9)) + "px;height:" + height + "px;left:" + bounds.X + "px;top:" + bounds.Y + "px");
            }
            function dragFloater(event) {
                var bounds,
                    player    = document.getElementById("movie_player"),
                    isFloater = document.documentElement.classList.contains("floater"),
                    isFScreen = document.getElementsByClassName("ytp-fullscreen")[0],
                    excluded  = document.getElementsByClassName("ytp-chrome-bottom")[0];
                if (event && isFloater && !isFScreen) {
                    if (event.type === "click" && event.target.id === "part_floaterui_scrolltop") {
                         document[(isChrome && "body") || "documentElement"].scrollTop = 0;
                    } else {
                        if (event.buttons === 1) {
                            if (event.type === "mousedown" && player.contains(event.target) && (!excluded || !excluded.contains(event.target))) {
                                event.preventDefault();
                                event.stopPropagation();
                                eventHandler([document, "mousemove", dragFloater, false]);
                                eventHandler([document, "click", dragFloater, true]);
                                window.oldPos = {
                                    X: parseInt(player.style.left) - event.clientX,
                                    Y: parseInt(player.style.top) - event.clientY,
                                    orgX: event.clientX,
                                    orgY: event.clientY
                                };
                            } else if (event.type === "mousemove" && (window.hasMoved || Math.abs(event.clientX - window.oldPos.orgX) > 10 || Math.abs(event.clientY - window.oldPos.orgY) > 10)) {
                                bounds = checkBounds(player, event.clientX + window.oldPos.X, event.clientY + window.oldPos.Y);
                                player.style.left = bounds.X + "px";
                                player.style.top = bounds.Y + "px";
                                window.hasMoved = true;
                            }
                        }
                        if (event.buttons !== 1 || event.type === "click") {
                            if (window.hasMoved) {
                                event.preventDefault();
                                event.stopImmediatePropagation();
                                delete window.oldPos;
                                delete window.hasMoved;
                                set("floaterX", parseInt(player.style.left));
                                set("floaterY", parseInt(player.style.top));
                            }
                            eventHandler([document, "mousemove", dragFloater, false, "remove"]);
                            eventHandler([document, "click", dragFloater, true, "remove"]);
                        }
                    }
                }
            }
            function initFloater() {
                var player     = document.getElementById("movie_player"),
                    plrApi     = document.getElementById("player-api").getBoundingClientRect(),
                    outOfSight = plrApi.bottom < ((plrApi.height / 2) + 52),
                    isFloater  = document.documentElement.classList.contains("floater"),
                    isFScreen  = document.getElementsByClassName("ytp-fullscreen")[0],
                    floaterUI  = document.getElementById("part_floaterui");
                if (player) {
                    if (!floaterUI && !isFScreen) {
                        floaterUI = document.createElement("template");
                        floaterUI.innerHTML = //
                            "<div id='part_floaterui'>" +
                            "    <button id='part_floaterui_scrolltop' data-p='ttl|VID_PLR_ALVIS_SCRL_TOP'></button>" +
                            "</div>";
                        floaterUI = setLocale(floaterUI.content).firstChild;
                        eventHandler([document, "mousedown", dragFloater]);
                        player.appendChild(floaterUI);
                    }
                    if (outOfSight && !isFloater) {
                        document.documentElement.classList.add("floater");
                        eventHandler([window, "resize", updatePos]);
                        updatePos();
                        window.dispatchEvent(new Event("resize"));
                    } else if (!outOfSight && isFloater) {
                        document.documentElement.classList.remove("floater");
                        eventHandler([window, "resize", updatePos, false, "remove"]);
                        player.removeAttribute("style");
                        window.dispatchEvent(new Event("resize"));
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
            function initSubPlaylist(event) {
                if (event.target && event.target.parentNode && event.target.parentNode.id === "subscription-playlist") {
                    i = videoList.length;
                    while (i--) {
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
            var i,
                list      = [],
                button    = document.getElementById("subscription-playlist"),
                navMenu   = document.getElementsByClassName("appbar-nav-menu")[0],
                listTitle = document.getElementsByClassName("appbar-nav-menu")[0],
                videoList = document.getElementsByClassName("addto-watch-later-button");
            if (parSets.GEN_SUB_LIST && window.location.href.split("/feed/subscriptions").length > 1 && !button && listTitle && videoList) {
                button = document.createElement("template");
                button.innerHTML = //
                    "<li id='subscription-playlist-icon'>" +
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
            function alwaysActive(event) {
                var i, list, length, eventClone,
                    clear = window.location.pathname == "/watch" && api && event.target !== api && !api.contains(event.target) && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey && !event.target.isContentEditable;
                if (clear && ((event.which > 47 && event.which < 58) || (event.which > 95 && event.which < 106) || [27, 32, 35, 36, 37, 38, 39, 40, 66, 67, 79, 87, 187, 189].indexOf(event.which) > -1) && ["EMBED", "INPUT", "OBJECT", "TEXTAREA", "IFRAME"].indexOf(document.activeElement.tagName) < 0) {
                    eventClone = new Event("keydown");
                    list = Object.keys(Object.getPrototypeOf(event));
                    length = list.length;
                    for (i = 0; i < length; i++) {
                        eventClone[list[i]] = event[list[i]];
                    }
                    event.preventDefault();
                    api.dispatchEvent(eventClone);
                }
            }
            function playerState(event) {
                if (parSets.fullBrs || parSets.lightsOut) {
                    document.documentElement.classList[(event < 5 && event > 0 && "add") || "remove"]((parSets.fullBrs && "part_fullbrowser") || "0", (parSets.lightsOut && "part_cinema_mode") || "0");
                }
                window.dispatchEvent(new Event("resize"));
            }
            function handleCustoms(event) {
                if (typeof event === "object") {
                    set("volLev", event.volume);
                } else {
                    set("theaterMode", event);
                }
            }
            api = document.getElementById("movie_player");
            if (api && !document.getElementById("c4-player")) {
                if (parSets.fullBrs || parSets.lightsOut) {
                    api.addEventListener("onStateChange", playerState);
                }
                if (parSets.VID_PLR_VOL_MEM) {
                    api.addEventListener("onVolumeChange", handleCustoms);
                }
                if (parSets.VID_PLR_SIZE_MEM) {
                    api.addEventListener("SIZE_CLICKED", handleCustoms);
                }
                if (parSets.VID_PLR_VOL_MEM) {
                    api.setVolume(parSets.volLev);
                }
                if (parSets.loopVid) {
                    document.getElementsByTagName("video")[0].loop = parSets.loopVid;
                }
                if (parSets.VID_PLR_ALACT) {
                    eventHandler([document, "keydown", alwaysActive]);
                }
            }
        }
        function xhrCleaner(originalFunction) {
            return function(a, b) {
                var key, args, patch, config;
                if (a && a.detail && a.detail.part && a.detail.part.data && a.detail.part.data.swfcfg) {
                    config = {args: a.detail.part.data.swfcfg};
                    a.detail.part.data.swfcfg = argsCleaner(config.args);
                } else if (b && b.constructor && b.constructor.name === "XMLHttpRequest" && b.responseURL && b.responseURL.split("get_video_info").length > 1) {
                    args = arguments;
                    patch = {};
                    for (key in args[1]) {
                        if (args[1][key] !== undefined && args[1][key]) {
                            patch[key] = args[1][key];
                        }
                    }
                    config = {args: JSON.parse("{\"" + decodeURIComponent(patch.responseText.replace(/%5C/g, "<<>>").replace(/%22/g, "<>").replace(/&/g, "\",\"").replace(/\=/g, "\":\"").replace(/\+/g, "%20")) + "\"}")};
                    config = argsCleaner(config);
                    patch.responseText = patch.response = encodeURIComponent(JSON.stringify(config.args).split(/\{"([\w\W]*?)"\}/)[1]).replace(/%3C%3C%3E%3E/g, "%5C").replace(/%3C%3E/g, "%22").replace(/%22%2C%22/g, "&").replace(/%22%3A%22/g, "=").replace(/%20/g, "+");
                    args[1] = patch;
                    originalFunction.apply(this, args);
                    return api.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                }
                return originalFunction.apply(this, arguments);
            };
        }
        function spfPipe(originalFunction){
            return function(a, b){
                if (a === "spfpartprocess") {
                    b = xhrCleaner(b);
                }
                return originalFunction.apply(this, arguments);
            };
        }
        function scriptExit(event) {
            function commentsLoad(originalFunction) {
                return function (a) {
                    var comments = document.getElementById("watch-discussion"),
                        isLive   = window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.livestream;
                    if (!isLive && comments && !comments.lazyload && parSets.VID_HIDE_COMS === "1" && !comments.classList.contains("show") && a.split("comments").length > 1) {
                        comments.lazyload = arguments;
                    } else {
                        return originalFunction.apply(this, arguments);
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
                return function (a, b) {
                    var orig, player;
                    b = argsCleaner(b);
                    orig = originalFunction.apply(this, arguments);
                    player = document.getElementById("movie_player");
                    if (player) {
                        player.setPlaybackQuality(parSets.VID_DFLT_QLTY);
                    }
                    return orig;
                };
            }
            function autoplayDetour(originalFunction) {
                return function (a, b) {
                    if (!b || parSets.plApl || (!parSets.plApl && b.feature && b.feature !== "autoplay")) {
                        originalFunction.apply(this, arguments);
                    }
                };
            }
            function autoplayDetourFullScreen(originalFunction) {
                return function () {
                    var nextButton,
                        hasEnded    = api && api.getCurrentTime && Math.round(api.getCurrentTime()) >= Math.floor(api.getDuration()),
                        nextClicked = document.activeElement.classList.contains("ytp-button-next") || document.activeElement.classList.contains("ytp-next-button");
                    if (!parSets.plApl && !nextClicked && hasEnded) {
                        nextButton = document.getElementsByClassName("ytp-next-button")[0];
                        if (nextButton && nextButton.getAttribute("aria-disabled") === "true") {
                            nextButton.onclick = api.nextVideo;
                            eventHandler([document, "click", api.nextVideo]);
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
            function html5Detour(originalFunction) {
                return function (a, b) {
                    function playerInstanceIterator(keys) {
                        if (typeof playerInstance[keys] === "object") {
                            if (playerInstance[keys] && playerInstance[keys].hasNext) {
                                playerInstance[keys].hasNext = autoplayDetourFullScreen(playerInstance[keys].hasNext);
                            }
                        }
                    }
                    var player;
                    b = argsCleaner(b);
                    if (a.id === "upsell-video") {
                        originalFunction.apply(this, arguments);
                    } else if (typeof a === "object") {
                        playerInstance = originalFunction.apply(this, arguments);
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
                    } else if (str.split(".set(\"\"+a,b,c,\"/\",d").length > 1) {
                        window.ytpsetwide = window._yt_www[keys];
                    }
                }
            }
            function nullFunc() {return;}
            if (event && event.target) {
                if (event.target.getAttribute("name") === "www/base") {
                    window.yt.setConfig = baseDetour(window.yt.setConfig);
                    Object.keys(window._yt_www).forEach(ytIterator);
                }
                if (event.target.getAttribute("name") === "spf/spf") {
                    window.spf.load = commentsLoad(window.spf.load);
                    window.spf.prefetch = nullFunc;
                    if (window.name === "popOut") {
                        window.spf.navigate = nullFunc;
                    }
                }
            }
            if ((event && event.target && event.target.getAttribute("name") === "player/base") || (!window.html5Patched && window.yt && window.yt.player && window.yt.player.Application && window.yt.player.Application.create)) {
                window.html5Patched = true;
                window.yt.player.Application.create = html5Detour(window.yt.player.Application.create);
            }
        }
        function dragPopOut(event) {
            var excluded = document.getElementsByClassName("ytp-chrome-bottom")[0],
                isFScreen = document.getElementsByClassName("ytp-fullscreen")[0];
            if (event && !isFScreen && (!excluded || (event.target !== excluded && !excluded.contains(event.target)))) {
                if (event.buttons === 1) {
                    if (event.type === "mousedown") {
                        event.preventDefault();
                        event.stopPropagation();
                        eventHandler([document, "mousemove", dragPopOut, false]);
                        eventHandler([document, "click", dragPopOut, true]);
                        window.oldPos = {
                            X: event.clientX,
                            Y: event.clientY,
                            orgX: event.clientX,
                            orgY: event.clientY
                        };
                    } else if (event.type === "mousemove" && (window.hasMoved || Math.abs(event.clientX - window.oldPos.orgX) > 10 || Math.abs(event.clientY - window.oldPos.orgY) > 10)) {
                        window.moveBy(event.clientX - window.oldPos.X, event.clientY - window.oldPos.Y);
                        window.hasMoved = true;
                    }
                }
                if (event.buttons !== 1 || event.type === "click") {
                    if (window.hasMoved) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                        delete window.oldPos;
                        delete window.hasMoved;
                    }
                    eventHandler([document, "mousemove", dragPopOut, false, "remove"]);
                    eventHandler([document, "click", dragPopOut, true, "remove"]);
                }
            } else if (!event && window.name === "popOut") {
                eventHandler([document, "mousedown", dragPopOut]);
            }
        }
        function popPlayer(url) {
            var popOut,
                width  = parseInt(parSets.VID_PPOT_SZ) || 533,
                height = Math.round(width / (16 / 9)),
                popUrl = (!url.target && url) || window.location.href.split(/&t=[0-9]+|#t=[0-9]+|&time=[0-9]+/).join(""),
                video  = document.getElementsByTagName("video")[0];
            if (url.target && video && video.currentTime && video.currentTime < video.duration) {
                popUrl += "#t=" + video.currentTime;
                window.ytplayer.config.args.start = video.currentTime;
                api.cueVideoByPlayerVars(window.ytplayer.config.args);
            }
            popOut = window.open(popUrl, "popOut", "width=" + width + ",height=" + height);
            popOut.focus();
        }
        function thumbMod() {
            function initThumbMod(event) {
                function initBlackList() {
                    parSets.blacklist[event.dataset.ytid] = event.dataset.user;
                    set("blacklist", parSets.blacklist);
                    thumbMod();
                }
                var observer;
                loadMore = document.getElementsByClassName("load-more-button")[0] || document.getElementById("watch-more-related");
                clickTitle = document.getElementsByClassName("yt-uix-tile")[0];
                while (clickTitle) {
                    clickTitle.classList.remove("yt-uix-tile");
                    clickTitle = document.getElementsByClassName("yt-uix-tile")[0];
                }
                if (loadMore && !loadMore.classList.contains("thumbMod")) {
                    loadMore.classList.add("thumbMod");
                    observer = new MutationObserver(thumbMod);
                    observer.observe(loadMore, {
                        childList: true,
                        attributes: true,
                        attributeOldValue: true
                    });
                }
                if (event && (event.target.className === "yt-uix-tooltip popoutmode" || event.target.className === "yt-uix-tooltip blacklist")) {
                    event.preventDefault();
                    event = event.target;
                    if (event.className === "yt-uix-tooltip popoutmode") {
                        popPlayer(event.dataset.link);
                    } else {
                        initBlackList();
                    }
                }
            }
            function insertButtons(i) {
                function createButton(type, details) {
                    button = document.createElement("template");
                    if (type === "popoutmode") {
                        button.innerHTML = "<div data-p='ttl|PPOT_OPEN&ttp|PPOT_OPEN' class='yt-uix-tooltip'></div>";
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
                var button;
                if (detailList[i] && detailList[i].thumbfield) {
                    if (parSets.GEN_PPOT_ON && !window.opener && !detailList[i].thumbfield.getElementsByClassName("popoutmode")[0]) {
                        button = createButton("popoutmode", detailList[i]);
                        eventHandler([document, "click", initThumbMod]);
                        detailList[i].thumbfield.appendChild(button);
                    }
                    if (parSets.BLK_ON && window.yt.config_.PAGE_NAME !== "channel" && detailList[i].username && detailList[i].youtubeid && !detailList[i].thumbfield.getElementsByClassName("blacklist")[0]) {
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
                    titleField = (window.yt.config_.PAGE_NAME === "channel" && masterList[i].getElementsByClassName("yt-pl-thumb-link")[0]) || masterList[i].getElementsByClassName("yt-uix-tile-link")[0] || masterList[i].getElementsByClassName("yt-ui-ellipsis")[0] || masterList[i].getElementsByClassName("content-link")[0] || masterList[i].getElementsByTagName("a")[0];
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
                    } else if (videoLink) {
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
                    parentNode,
                    emptyShelves = document.getElementsByClassName("feed-item-container");
                trashList[trash].remove();
                i = emptyShelves.length;
                while (i--) {
                    if (emptyShelves[i].getElementsByTagName("li").length < 2) {
                        emptyShelves[i].remove();
                    }
                }
                emptyShelves = document.querySelectorAll("li");
                i = emptyShelves.length;
                while (i--) {
                    if (emptyShelves[i].children.length === 0 && emptyShelves[i].textContent.trim() === "") {
                        parentNode = emptyShelves[i].parentNode;
                        emptyShelves[i].remove();
                        while (parentNode) {
                            if (parentNode.children.length === 0 && parentNode.textContent.trim() === "") {
                                parentNode.remove();
                                parentNode = parentNode.parentNode;
                            } else {
                                break;
                            }
                        }
                    }
                }
            }
            function getList(list) {
                var i;
                list = document.getElementsByClassName(list);
                if (list.length > 0) {
                    i = list.length;
                    while (i--) {
                        masterList.push(list[i]);
                    }
                }
            }
            var userId, userName, loadMore, videoLink, infoField, titleField, thumbField, clickTitle,
                masterList = [],
                trashList  = [],
                detailList = [],
                pageName   = window.yt && window.yt.config_ && /watch|index|feed|channel|results/.test(window.yt.config_.PAGE_NAME);
            if ((parSets.BLK_ON || parSets.GEN_PPOT_ON) && pageName) {
                ["yt-lockup-tile", "video-list-item", "yt-shelf-grid-item", "yt-lockup-mini", "lohp-large-shelf-container", "expanded-shelf-content-item-wrapper"].forEach(getList);
                if (masterList) {
                    Object.keys(masterList).forEach(buildDetailList);
                    if (parSets.BLK_ON && window.yt.config_.PAGE_NAME !== "channel") {
                        Object.keys(trashList).forEach(cleanList);
                    }
                    Object.keys(detailList).forEach(insertButtons);
                    initThumbMod();
                }
            }
        }
        function volumeWheel(event) {
            function resetSliderState() {
                if (cBottom && cBottom.classList.contains("ytp-volume-slider-active")) {
                    cBottom.classList.remove("ytp-volume-slider-active");
                    delete cBottom.timer;
                }
            }
            var player    = document.querySelectorAll("video")[0],
                cBottom   = document.getElementsByClassName("ytp-chrome-bottom")[0],
                fsPl      = document.getElementsByClassName("ytp-playlist-menu")[0],
                pSets     = document.getElementsByClassName("ytp-settings-menu")[0],
                ivCard    = document.getElementsByClassName("iv-drawer")[0],
                canScroll = event && (!fsPl || (fsPl && !fsPl.contains(event.target))) && (!ivCard || (ivCard && !ivCard.contains(event.target))) && (!pSets || (pSets && !pSets.contains(event.target))),
                direction = event && (event.deltaY || event.wheelDeltaY);
            if (event && api && player && canScroll && (event.target.id === api || api.contains(event.target))) {
                event.preventDefault();
                if (cBottom) {
                    if (!cBottom.classList.contains("ytp-volume-slider-active")) {
                        cBottom.classList.add("ytp-volume-slider-active");
                    }
                    if (cBottom.timer) {
                        window.clearTimeout(cBottom.timer);
                    }
                    if (api) {
                        api.dispatchEvent(new Event("mousemove"));
                    }
                    cBottom.timer = window.setTimeout(resetSliderState, 4000);
                }
                api.setVolume(player.volume * 100 - (Math.sign(direction) * 5));
            } else if (!event && parSets.VID_VOL_WHEEL) {
                eventHandler([document, "wheel", volumeWheel]);
            } else if (window.location.pathname !== "/watch") {
                eventHandler([document, "wheel", volumeWheel, false, "remove"]);
            }
        }
        function playlistControls() {
            function reverseControl() {
                var temp,
                    prev   = document.getElementsByClassName("prev-playlist-list-item")[0],
                    next   = document.getElementsByClassName("next-playlist-list-item")[0],
                    list   = document.getElementById("playlist-autoscroll-list"),
                    videos = list.getElementsByTagName("li"),
                    length = videos.length;
                while (length--) {
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
                    event.target.classList.toggle("yt-uix-button-toggled");
                    set("plRev", (event.target.classList.contains("yt-uix-button-toggled")) ? window.yt.config_.LIST_ID : false);
                    reverseControl();
                }
            }
            function autoplayButton(event) {
                if (event.target.id === "autoplay") {
                    event.target.classList.toggle("yt-uix-button-toggled");
                    set("plApl", event.target.classList.contains("yt-uix-button-toggled"));
                }
            }
            function createButton(type, label, bool, call) {
                var navCtrls = document.getElementsByClassName("playlist-nav-controls")[0],
                    button   = document.createElement("template");
                button.innerHTML = //
                    "<button class='yt-uix-button yt-uix-button-player-controls yt-uix-button-opacity yt-uix-tooltip' type='button'>" +
                    "    <span class='yt-uix-button-icon'></span>" +
                    "</button>";
                if (bool === true || href.split(bool).length > 1) {
                    button.content.querySelector("button").classList.add("yt-uix-button-toggled");
                }
                button.content.firstChild.id = type;
                button.content.firstChild.dataset.p = "ttp|" + label + "&ttl|" + label;
                button.content.firstChild.classList.add("yt-uix-button-icon-watch-appbar-" + type + "-video-list");
                button = button.content.firstChild;
                plBar.className = plBar.className.replace("radio-playlist", "");
                eventHandler([document, "click", call]);
                navCtrls.appendChild(button);
            }
            var href  = window.location.href,
                plBar = document.getElementById("watch-appbar-playlist");
            if (plBar) {
                if (document.readyState === "complete" && parSets.plRev && href.split(parSets.plRev).length > 1) {
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
            function hookButtons() {
                var loopButton  = controls.querySelector("#loop-button"),
                    fullBrowser = controls.querySelector("#fullbrowser-button"),
                    cinemaMode  = controls.querySelector("#cinemamode-button"),
                    frameStep   = controls.querySelector("#framestep-button"),
                    actions     = {
                    popPlayer: popPlayer,
                    togglePlay: function() {
                        set("VID_PLR_ATPL", !parSets.VID_PLR_ATPL);
                        document.documentElement.classList[(parSets.VID_PLR_ATPL && "add") || "remove"]("part_autoplayon");
                        document.getElementById("autoplay-button").classList[(parSets.VID_PLR_ATPL && "add") || "remove"]("active");
                    },
                    toggleLoop: function(event) {
                        var videoPlayer = document.getElementsByTagName("video")[0];
                        if (videoPlayer) {
                            videoPlayer.loop = event ? !parSets.loopVid : parSets.loopVid;
                            if (event) {
                                loopButton.classList[(!parSets.loopVid && "add") || "remove"]("active");
                            }
                        }
                        set("loopVid", loopButton.classList.contains("active"));
                    },
                    dlThumb: function() {
                        var args     = window.ytplayer.config.args,
                            base     = (args.iurl_webp && "_webp") || "",
                            thumbURL = args["iurlmaxres" + base] || args["iurlsd" + base] || args["iurl" + base];
                        window.open(thumbURL);
                    },
                    saveSS: function() {
                        var width, height, aspectRatio,
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
                            close.textContent = lang("CNSL_SS_CLS");
                            eventHandler([document, "click", hideContainer]);
                            container.appendChild(close);
                            document.body.appendChild(container);
                        } else if (container.id && container.classList.contains("invisible")) {
                            container.classList.toggle("invisible");
                        }
                    },
                    toggleFullBrowser: function(event) {
                        var plrState = api && api.getPlayerState && api.getPlayerState();
                        plrState = plrState < 5 && plrState > 0;
                        function exitFullBrowser(key) {
                            if (document.documentElement.classList.contains("part_fullbrowser") && (key.keyCode === 27 || key.key === "Escape" || (key.target.className && key.target.className.split("ytp-size").length > 1))) {
                                actions.toggleFullBrowser(key);
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
                            window.dispatchEvent(new Event("resize"));
                        }
                    },
                    toggleCinemaMode: function(event) {
                        var plrState = api && api.getPlayerState && api.getPlayerState() < 5 && api.getPlayerState() > 0;
                        set("lightsOut", event ? !parSets.lightsOut : true);
                        cinemaMode.classList[(parSets.lightsOut && "add") || "remove"]("active");
                        if (event && plrState) {
                            document.documentElement.classList[(parSets.lightsOut && "add") || "remove"]("part_cinema_mode");
                        }
                    },
                    toggleFrames: function(event) {
                        var i, pi, fps, temp;
                        frameStep = document.getElementById("framestep-button");
                        if (event && ["EMBED", "INPUT", "OBJECT", "TEXTAREA"].indexOf(document.activeElement.tagName) < 0 && event.target.tagName !== "IFRAME" && !event.target.getAttribute("contenteditable")) {
                            if ((event.keyCode === 37 || event.keyCode === 39) && event.shiftKey) {
                                pi = api.getVideoStats().fmt;
                                temp = window.ytplayer.config.args.adaptive_fmts.split(",");
                                i = temp.length;
                                while (i--) {
                                    if (temp[i].indexOf("itag=" + pi) > 0) {
                                        actions.fps = parseInt(temp[i].match(/fps=([\d]+)/)[1]);
                                        break;
                                    }
                                }
                                if (!actions.fps || actions.fps === 1) {
                                    actions.fps = 30;
                                }
                                fps = ((event.keyCode < 39 && -1) || 1) * ((actions.fps < 2 && 30) || actions.fps);
                                if (fps && api) {
                                    if (!document.querySelector("video").paused) {
                                        api.pauseVideo();
                                    }
                                    api.seekBy(1 / fps);
                                }
                                event.preventDefault();
                                event.stopImmediatePropagation();
                            } else if (event.type === "click" && event.target.id === "framestep-button") {
                                set("frameStep", !parSets.frameStep);
                                frameStep.classList[(parSets.frameStep && "add") || "remove"]("active");
                            }
                        }
                        if (frameStep && frameStep.classList.contains("active")) {
                            eventHandler([document, "keydown", actions.toggleFrames, true]);
                        } else if (!frameStep || !frameStep.classList.contains("active")) {
                            eventHandler([document, "keydown", actions.toggleFrames, true, "remove"]);
                        }
                    },
                    handleToggles: function(event) {
                        if (event.target.dataset && event.target.dataset.action) {
                            actions[event.target.dataset.action](event);
                        }
                    }
                };
                eventHandler([document, "click", actions.handleToggles]);
                if (parSets.loopVid && !loopButton.classList.contains("active")) {
                    loopButton.classList.add("active");
                    actions.toggleLoop();
                }
                if (parSets.fullBrs && !fullBrowser.classList.contains("active")) {
                    fullBrowser.classList.add("active");
                    actions.toggleFullBrowser();
                }
                if (parSets.lightsOut && !cinemaMode.classList.contains("active")) {
                    cinemaMode.classList.add("active");
                    actions.toggleCinemaMode();
                }
                if (parSets.frameStep && !frameStep.classList.contains("active")) {
                    frameStep.classList.add("active");
                    actions.toggleFrames();
                }
            }
            function toggleConsole(event) {
                if (event.target.id === "console-button") {
                    document.documentElement.classList.toggle("player-console");
                    event.target.classList[document.documentElement.classList.contains("player-console") ? "add" : "remove"]("close");
                    set("advOpts", document.documentElement.classList.contains("player-console"));
                }
            }
            var header   = document.getElementById("watch-header"),
                cnslBtn  = document.getElementById("console-button"),
                cnslCont = document.getElementById("advanced-options"),
                controls = document.getElementById("player-console");
            if (window.location.pathname === "/watch" && header && !cnslBtn) {
                cnslBtn = document.createElement("template");
                cnslBtn.innerHTML = "<button id='console-button' data-p='ttl|ADV_OPTS'></button>";
                cnslBtn = setLocale(cnslBtn.content).firstChild;
                eventHandler([document, "click", toggleConsole]);
                cnslCont = document.createElement("template");
                cnslCont.innerHTML = "<div id='advanced-options'></div>";
                cnslCont = cnslCont.content.firstChild;
                cnslCont.appendChild(cnslBtn);
                header.appendChild(cnslCont);
                if (controls) {
                    controls.remove();
                }
                controls = document.createElement("template");
                controls.innerHTML = //
                    "<div id='player-console'>" +
                    "    <div id='autoplay-button' class='yt-uix-tooltip' data-p='ttp|CNSL_AP'' data-action='togglePlay'></div>" +
                    "    <div id='loop-button' class='yt-uix-tooltip' data-p='ttp|CNSL_RPT' data-action='toggleLoop'></div>" +
                    "    <div id='save-thumbnail-button' class='yt-uix-tooltip' data-p='ttp|CNSL_SVTH' data-action='dlThumb'></div>" +
                    "    <div id='screenshot-button' class='yt-uix-tooltip' data-p='ttp|CNSL_SS'' data-action='saveSS'></div>" +
                    "    <div id='popout-button' class='yt-uix-tooltip' data-p='ttp|CNSL_PPOT' data-action='popPlayer'></div>" +
                    "    <div id='fullbrowser-button' class='yt-uix-tooltip' data-p='ttp|CNSL_FLBR' data-action='toggleFullBrowser'></div>" +
                    "    <div id='cinemamode-button' class='yt-uix-tooltip' data-p='ttp|CNSL_CINM_MD' data-action='toggleCinemaMode'></div>" +
                    "    <div id='framestep-button' class='yt-uix-tooltip' data-p='ttp|CNSL_FRME' data-action='toggleFrames'></div>" +
                    "</div>";
                if (parSets.VID_PLR_ATPL) {
                    controls.content.querySelector("#autoplay-button").classList.add("active");
                }
                controls = setLocale(controls.content).firstChild;
                cnslCont.appendChild(controls);
                hookButtons();
                if (parSets.advOpts) {
                    document.documentElement.classList.add("player-console");
                    cnslBtn.classList.add("close");
                }
            }
        }
        function defaultChannelPage(event) {
            var parentNode;
            if (parSets.GEN_CHN_DFLT_PAGE !== "default") {
                if (event && event.target) {
                    parentNode = event.target;
                    if (event.target.tagName !== "A") {
                        while (parentNode) {
                            parentNode = parentNode.parentNode;
                            if (parentNode && parentNode.tagName === "A") {
                                break;
                            }
                        }
                    }
                    if (parentNode && parentNode.href && parentNode.href.split(parSets.GEN_CHN_DFLT_PAGE).length < 2 && (parentNode.href.split("/channel/").length > 1 || parentNode.href.split("/user/").length > 1) && parentNode.href.split(/[a-z0-9]\/[a-z0-9]/i).length < 4) {
                        parentNode.href += "/" + parSets.GEN_CHN_DFLT_PAGE;
                    }
                } else if (!event) {
                    eventHandler([document, "mouseup", defaultChannelPage]);
                }
            }
        }
        function generalChanges() {
            var logo,
                checkbox    = document.getElementsByClassName("checkbox-on-off")[0],
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
                if (checkbox) {
                    checkbox.remove();
                }
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
                    observer = new MutationObserver(infiniteScroll);
                    observer.observe(loadMore, {attributes: true});
                }
                if (!loadMore.classList.contains("scrolldetect")) {
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
            dragPopOut();
        }
        function request(event) {
            var videoPlayer = document.getElementById("movie_player");
            document.documentElement.classList.remove("floater");
            if (videoPlayer) {
                videoPlayer.removeAttribute("style");
                if (!parSets.VID_PLR_ATPL || event.detail.url.split("/watch").length < 2) {
                    if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded) {
                        delete window.ytplayer.config.loaded;
                    }
                    api.destroy();
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
        var api, playerInstance,
            events    = {},
            channelId = {},
            isChrome  = typeof window.chrome === "object",
            parSets   = JSON.parse(document.documentElement.dataset.parSets || null),
            defSets   = {
                GEN_BTTR_NTF    : true,
                GEN_SUB_LIST    : true,
                GEN_INF_SCRL    : true,
                GEN_BLUE_GLOW   : true,
                GEN_PPOT_ON     : true,
                VID_END_SHRE    : true,
                VID_DFLT_QLTY   : "auto",
                VID_PLST_ATPL   : true,
                VID_PLST_RVRS   : true,
                VID_PLR_ATPL    : true,
                VID_PLR_ALVIS   : true,
                VID_PLR_SIZE_MEM: true,
                VID_PLR_FIT     : true,
                VID_PLR_VOL_LDN : true,
                VID_HIDE_COMS   : "1",
                VID_POST_TIME   : true,
                VID_VID_CNT     : true,
                VID_DESC_SHRT   : true,
                VID_PPOT_SZ     : 533,
                VID_PLR_HTML5   : true,
                BLK_ON          : true,
                floaterX        : 2000,
                floaterY        : 2000,
                firstTime       : true,
                volLev          : 50,
                advOpts         : true,
                blacklist       : {}
            },
            language  = {
                YTSETS                : "YouTube+ settings",
                ADV_OPTS              : "Advanced options",
                SUB_PLST              : "Play recent uploads",
                PPOT_OPEN             : "Open in pop-out",
                BLCK_ADD              : "Add to blacklist",
                BLCK_EDIT             : "Edit",
                BLCK_SAVE             : "Save",
                BLCK_CLSE             : "Close",
                CNSL_AP               : "Autoplay",
                CNSL_RPT              : "Repeat video",
                CNSL_SVTH             : "Open thumbnail",
                CNSL_SS               : "Take screenshot",
                CNSL_SS_CLS           : "CLOSE",
                CNSL_PPOT             : "Pop-out video",
                CNSL_FLBR             : "Fullbrowser mode",
                CNSL_CINM_MD          : "Cinema mode",
                CNSL_FRME             : "Frame by frame (Shift + ← or →)",
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
                GEN_PPOT_ON           : "Enable pop-out mode",
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
                VID_PLR_ALVIS_WDTH    : "Floating player width",
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
                VID_PLST_ATPL         : "Enable playlist autoplay control",
                VID_PLST_RVRS         : "Enable reverse playlist control",
                VID_PLR_SIZE_MEM      : "Memorize player mode",
                VID_VOL_WHEEL         : "Change volume with mouse wheel",
                VID_PLR_VOL_MEM       : "Memorize audio volume",
                VID_PLR_VOL_LDN       : "Disable YouTube loudness normalisation",
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
                VID_PPOT_SZ           : "Pop-out player size",
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
                WLCM                  : "Thank you for installing YouTube+",
                WLCMSTRT              : "You can customize your settings by clicking the button above",
                WLCMFTRS              : "Click here to see all the features",
                LOCALE                : "English (US)"
            };
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
        window.Function.prototype.call = xhrCleaner(window.Function.prototype.call);
        window.addEventListener = spfPipe(window.addEventListener);
        window.onYouTubePlayerReady = shareApi(window.onYouTubePlayerReady);
        window.matchMedia = false;
        initFunctions();
    }
    function isMaterial() {
        var i, temp;
        temp = document.querySelectorAll("script");
        i = temp.length;
        while (i--) {
            if (temp[i].textContent.match("window.Polymer")) {
                temp = document.createElement("template");
                temp.innerHTML = //
                    "<div style='border-radius:2px;color:#FFF;padding:10px;background-color:#09F;box-shadow:0 0 3px rgba(0,0,0,.5);position:fixed;bottom:20px;right:20px;z-index:99999'>" +
                    "YouTube Plus is not yet compatible with the YouTube beta Material Layout<br>" +
                    "<a href='https://github.com/ParticleCore/Particle/wiki/Restore-classic-YouTube' target='_blank' style='color:#FFF;font-weight:bold;'>Click here</a> for instructions to restore classic YouTube and continue using YT+<br>" +
                    "To keep using the current layout without this message please disable YT+" +
                    "</div>";
                document.documentElement.appendChild(temp.content.firstChild);
                return true;
            }
        }
    }
    function updateSettings(event) {
        document.documentElement.dataset.parreceive = JSON.stringify((event && event[id]) || event || {});
    }
    function localeResponse(data) {
        document.documentElement.dataset.setlocale = data;
    }
    function initParticle(event) {
        function filterChromeStorage(keys) {
            if (keys[id] && keys[id].newValue) {
                updateSettings(keys[id].newValue);
            }
        }
        var holder;
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
            holder.textContent = "(" + particle + "(" + ((!window.chrome && !userscript) ? "true" : "") + "))";
            document.documentElement.appendChild(holder);
            if (!userscript) {
                if (window.chrome) {
                    window.chrome.storage.onChanged.addListener(filterChromeStorage);
                } else {
                    window.self.port.on(id, updateSettings);
                    window.self.port.on(id2, localeResponse);
                }
            }
        }
    }
    function contentScript() {
        var observer,
            key  = "parsend",
            key2 = "getlocale",
            gate = document.documentElement,
            sets = JSON.parse(gate.dataset[key] || null),
            locs = gate.dataset[key2] || null;
        if (!gate.contentscript) {
            gate.contentscript = true;
            observer = new MutationObserver(contentScript);
            return observer.observe(gate, {
                attributes: true,
                attributeFilter: ["data-" + key, "data-" + key2]
            });
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
        } else if (locs) {
            window.self.port.emit(id2, locs);
        }
    }
    var id         = "particleSettings",
        id2        = "particleLocale",
        userscript = typeof GM_info === "object";
    if (isMaterial()) {
        return;
    }
    if (userscript) {
        window.GM_getValue = GM_getValue;
        window.GM_setValue = GM_setValue;
        initParticle();
    } else if (window.chrome) {
        window.chrome.storage.local.get(id, initParticle);
    } else {
        initParticle(window.self.options.settings || {});
    }
    contentScript();
}());
