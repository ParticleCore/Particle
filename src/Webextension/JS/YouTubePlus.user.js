// ==UserScript==
// @version         1.8.8
// @name            YouTube +
// @namespace       https://github.com/ParticleCore
// @description     YouTube with more freedom
// @compatible      firefox
// @compatible      opera
// @icon            https://raw.githubusercontent.com/ParticleCore/Particle/gh-pages/images/YT%2Bicon.png
// @match           *://www.youtube.com/*
// @exclude         *://www.youtube.com/tv*
// @exclude         *://www.youtube.com/embed/*
// @exclude         *://www.youtube.com/live_chat*
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
    var particle = {
        inject: function(is_userscript) {
            function setLocale(content) {
                var i, j, list, temp, ytplabel;
                ytplabel = content.querySelectorAll("[data-p]");
                i = ytplabel.length;
                while (i--) {
                    list = ytplabel[i].dataset.p.split("&");
                    j = list.length;
                    while (j--) {
                        temp = list[j].split("|");
                        if (temp[0] === "tnd") {
                            ytplabel[i].appendChild(document.createTextNode(lang(temp[1])));
                        } else if (temp[0] === "ttl") {
                            ytplabel[i].setAttribute("title", lang(temp[1]));
                        } else {
                            ytplabel[i].dataset.tooltipText = lang(temp[1]);
                        }
                    }
                }
                return content;
            }
            function getLocale(data) {
                lang.fetching = false;
                data = document.documentElement.dataset.setlocale;
                data = data && JSON.parse(data);
                if (data) {
                    user_settings.extLang[lang.ytlang] = JSON.parse(document.documentElement.dataset.setlocale);
                    user_settings.extLang[lang.ytlang].lastMod = new Date().getTime();
                    user_settings.extLang.nextCheck = new Date().getTime() + 6048E5;
                    set("extLang", user_settings.extLang);
                }
                lang.observer.disconnect();
            }
            function getLanguage(data) {
                lang.fetching = false;
                if (data.target.readyState === 4 && data.target.status === 200) {
                    user_settings.extLang[lang.ytlang] = JSON.parse(data.target.response);
                    user_settings.extLang[lang.ytlang].lastMod = new Date(data.target.getResponseHeader("Last-Modified")).getTime();
                }
                user_settings.extLang.nextCheck = new Date().getTime() + 6048E5;
                set("extLang", user_settings.extLang);
            }
            function checkModified(data) {
                lang.fetching = false;
                if (data.target.readyState === 4 && data.target.status === 200) {
                    lang.fetching = true;
                    localXHR("GET", getLanguage, lang.urlBase + lang.ytlang + ".json", ["Accept", "application/vnd.github.raw"]);
                }
            }
            function lang(label) {
                lang.ytlang = window.yt && window.yt.config_ && window.yt.config_.GAPI_LOCALE;
                lang.urlBase = "https://api.github.com/repos/ParticleCore/Particle/contents/Locale/";
                if (!user_settings.extLang) {
                    set("extLang", {});
                }
                if (user_settings.GEN_LOCL_LANG && user_settings.localLang && user_settings.localLang[label]) {
                    if (JSON.stringify(user_settings.extLang) !== "{}") {
                        set("extLang", {});
                    }
                    return user_settings.localLang[label];
                }
                if (!user_settings.GEN_LOCL_LANG && lang.ytlang && lang.ytlang !== "en_US") {
                    if (user_settings.extLang[lang.ytlang] && user_settings.extLang[lang.ytlang][label]) {
                        if (!lang.fetching && user_settings.extLang.nextCheck && user_settings.extLang.nextCheck <= new Date().getTime()) {
                            lang.fetching = true;
                            if (!is_userscript) {
                                lang.observer = new MutationObserver(getLocale);
                                lang.observer.observe(document.documentElement, {
                                    attributes: true,
                                    attributeFilter: ["data-setlocale"]
                                });
                                document.documentElement.dataset.getlocale = lang.ytlang;
                            } else {
                                localXHR("HEAD", checkModified, lang.urlBase + lang.ytlang + ".json", ["If-Modified-Since", new Date(user_settings.extLang[lang.ytlang].lastMod).toUTCString()]);
                            }
                            user_settings.extLang.nextCheck = new Date().getTime() + 6048E5;
                            set("extLang", user_settings.extLang);
                        }
                        return user_settings.extLang[lang.ytlang][label];
                    }
                    if (!user_settings.extLang[lang.ytlang] && !lang.fetching && (!user_settings.extLang.nextCheck || user_settings.extLang.nextCheck <= new Date().getTime())) {
                        lang.fetching = true;
                        if (!is_userscript) {
                            lang.observer = new MutationObserver(getLocale);
                            lang.observer.observe(document.documentElement, {
                                attributes: true,
                                attributeFilter: ["data-setlocale"]
                            });
                            document.documentElement.dataset.getlocale = lang.ytlang;
                        } else {
                            localXHR("GET", getLanguage, lang.urlBase + lang.ytlang + ".json", ["Accept", "application/vnd.github.raw"]);
                        }
                    }
                }
                return language[label];
            }
            function sortList(previous, next){
                return next[Object.keys(next)[0]].localeCompare(previous[Object.keys(previous)[0]]);
            }
            function getBlacklist(blist) {
                var i, obj, temp, lnk, keys, list, fragment, sortAlpha;
                list = user_settings.blacklist;
                fragment = document.createDocumentFragment();
                sortAlpha = [];
                temp = Object.keys(list);
                i = temp.length;
                while (i--) {
                    obj = {};
                    obj[temp[i]] = list[temp[i]];
                    sortAlpha.push(obj);
                }
                temp = sortAlpha.sort(sortList);
                i = temp.length;
                while (i--) {
                    keys = Object.keys(temp[i]);
                    obj = document.createElement("template");
                    obj.innerHTML = //
                        `<div class='blacklist'>
                            <button class='close' data-p='ttl|GLB_RMBL'>
                                <svg viewBox='0 0 10 10'>
                                    <polygon points='10,1.4 8.6,0 5,3.6 1.4,0 0,1.4 3.6,5 0,8.6 1.4,10 5,6.4 8.6,10 10,8.6 6.4,5'/>
                                </svg>
                            </button><a target='_blank'></a>
                        </div>`;
                    obj = setLocale(obj.content.firstChild);
                    lnk = obj.querySelector("a");
                    lnk.href = "/channel/" + keys[0];
                    lnk.setAttribute("title", temp[i][keys[0]]);
                    lnk.textContent = temp[i][keys[0]];
                    fragment.appendChild(obj);
                    fragment.appendChild(document.createTextNode("\n"));
                }
                blist.appendChild(fragment);
            }
            function getValues(menu) {
                var i, ytp, list;
                if (user_settings) {
                    list = menu.querySelector("#blacklist");
                    if (list) {
                        getBlacklist(list);
                    }
                    ytp = menu.querySelectorAll("input[id]");
                    i = ytp.length;
                    while (i--) {
                        if (ytp[i].type === "checkbox" && user_settings[ytp[i].id] === true) {
                            ytp[i].setAttribute("checked", "true");
                        }
                        if (ytp[i].type === "text" && typeof user_settings[ytp[i].id] === 'string') {
                            ytp[i].setAttribute("value", user_settings[ytp[i].id]);
                        }
                    }
                    ytp = menu.querySelectorAll("option");
                    i = ytp.length;
                    while (i--) {
                        if (user_settings[ytp[i].parentNode.id] === ytp[i].value) {
                            ytp[i].setAttribute("selected", "true");
                        }
                    }
                }
                return menu;
            }
            function getMenu(section) {
                var i, temp, svg, inputs;
                temp = document.createElement("template");
                if (section === "MEN") {
                    temp.innerHTML = //
                        `<div id='P-settings'>
                            <div id='P-container'>
                                <div id='P-sidebar'>
                                    <ul id='P-sidebar-list'>
                                        <li id='GEN' class='selected' data-p='tnd|GEN'></li>
                                        <li id='VID' data-p='tnd|VID'></li>
                                        <li id='BLK' data-p='tnd|BLK'></li>
                                        <li id='ABT' data-p='tnd|ABT'></li>
                                        <li id='HLP'><a target='_blank' href='https://github.com/ParticleCore/Particle/wiki' data-p='tnd|HLP'></a></li>
                                        <li id='DNT'><a title='PayPal' target='_blank' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UMVQJJFG4BFHW' data-p='tnd|DNT'></a><svg viewBox='0 0 15.3 18'><path style='fill:#27346A;' d='M13,1.4C12.2,0.4,10.6,0,8.7,0H3.1C2.7,0,2.4,0.3,2.3,0.7L0,15.4C0,15.7,0.2,16,0.5,16h3.5 l0.9-5.5l0,0.2C4.8,10.3,5.2,10,5.6,10h1.6c3.2,0,5.7-1.3,6.5-5.1c0-0.1,0-0.2,0.1-0.3c-0.1,0-0.1,0,0,0C14,3.2,13.7,2.2,13,1.4'/><path style='fill:#27346A;' d='M6.1,4.1C6.2,4,6.3,4,6.4,4h4.4c0.5,0,1,0,1.4,0.1c0.1,0,0.2,0,0.4,0.1c0.1,0,0.2,0.1,0.3,0.1 c0.1,0,0.1,0,0.2,0.1c0.2,0.1,0.4,0.2,0.6,0.3c0.2-1.4,0-2.4-0.8-3.2C12.2,0.4,10.6,0,8.7,0H3.1C2.7,0,2.4,0.3,2.3,0.7L0,15.4 C0,15.7,0.2,16,0.5,16h3.5L5.7,4.6C5.8,4.4,5.9,4.2,6.1,4.1z'/><path style='fill:#2790C3;' d='M13.7,4.9C13,8.7,10.4,10,7.2,10H5.6c-0.4,0-0.7,0.3-0.8,0.7l-1.1,6.8c0,0.3,0.2,0.5,0.4,0.5H7 c0.3,0,0.6-0.3,0.7-0.6l0-0.1l0.5-3.5l0-0.2C8.4,13.3,8.7,13,9,13h0.4c2.8,0,5-1.1,5.7-4.5c0.3-1.4,0.1-2.5-0.6-3.4 c-0.2-0.2-0.5-0.4-0.8-0.6C13.7,4.7,13.7,4.8,13.7,4.9L13.7,4.9z'/><path style='fill:#1F264F;' d='M13,4.3c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.4-0.1C11.8,4,11.3,4,10.8,4H6.4 C6.3,4,6.2,4,6.1,4.1C5.9,4.2,5.8,4.4,5.7,4.6l-0.9,5.9l0,0.2C4.8,10.3,5.2,10,5.6,10h1.6c3.2,0,5.7-1.3,6.5-5.1 c0-0.1,0-0.2,0.1-0.3c-0.2-0.1-0.4-0.2-0.6-0.3C13.1,4.3,13,4.3,13,4.3'/></svg></li>
                                    </ul>
                                </div>
                            </div>
                            <svg style='display:none;'><symbol id='ytp-svg-checkmark' viewBox='0 0 12.7 9.9'><polygon points='1.4,4.2 0,5.7 4.2,9.9 12.7,1.4 11.3,0 4.2,7.1'/></symbol><symbol id='ytp-svg-save' viewBox='0 0 16 16'><path d='M13,0H0v16h16V3L13,0z M3,1h9v6H3V1z M14,15H2V9h12V15z'/><rect x='10' y='2' width='1' height='4'/></symbol></svg>
                        </div>`;
                } else if (section === "GEN") {
                    temp.innerHTML = //
                        `<div id='P-content'>
                            <div class='P-header'>
                                <button class='P-save'    data-p='tnd|GLB_SVE'></button>
                                <button class='P-reset'   data-p='tnd|GLB_RSET'></button>
                                <button class='P-impexp'  data-p='ttl|GLB_IMPR'><svg class='save'><use xlink:href='#ytp-svg-save'/></svg></button>
                                <button class='P-implang' data-p='ttl|GLB_LOCL_LANG&tnd|LOCALE'></button>
                                <h2 data-p='tnd|GEN_TTL'></h2>
                            </div>
                            <hr class='P-horz'></hr>
                            <h3 data-p='tnd|GEN_GEN'></h3>
                            <div><input id='GEN_LOCL_LANG'    type='checkbox'><label for='GEN_LOCL_LANG'    data-p='tnd|GEN_LOCL_LANG'>   </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#custom_lang'     data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_DSBL_ADS'     type='checkbox'><label for='GEN_DSBL_ADS'     data-p='tnd|GEN_DSBL_ADS'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#outside_ads'     data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_YT_LOGO_LINK' type='checkbox'><label for='GEN_YT_LOGO_LINK' data-p='tnd|GEN_YT_LOGO_LINK'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#logo_redirect'   data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_SUB_LIST'     type='checkbox'><label for='GEN_SUB_LIST'     data-p='tnd|GEN_SUB_LIST'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#sub_playlist'    data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_INF_SCRL'     type='checkbox'><label for='GEN_INF_SCRL'     data-p='tnd|GEN_INF_SCRL'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#infinite_scroll' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_PPOT_ON'      type='checkbox'><label for='GEN_PPOT_ON'      data-p='tnd|GEN_PPOT_ON'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#popout_on'       data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_REM_APUN'     type='checkbox'><label for='GEN_REM_APUN'     data-p='tnd|GEN_REM_APUN'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#remove_autoplay' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_SPF_OFF'      type='checkbox'><label for='GEN_SPF_OFF'      data-p='tnd|GEN_SPF_OFF'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#spf_off'         data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div>
                                <label for='GEN_CHN_DFLT_PAGE' data-p='tnd|GEN_CHN_DFLT_PAGE'></label>
                                <div class='P-select'>
                                    <select id='GEN_CHN_DFLT_PAGE'>
                                        <option value='default'    data-p='tnd|GEN_CHN_DFLT_PAGE_DFLT'></option>
                                        <option value='videos'     data-p='tnd|GEN_CHN_DFLT_PAGE_VID'></option>
                                        <option value='playlists'  data-p='tnd|GEN_CHN_DFLT_PAGE_PL'></option>
                                        <option value='channels'   data-p='tnd|GEN_CHN_DFLT_PAGE_CHN'></option>
                                        <option value='discussion' data-p='tnd|GEN_CHN_DFLT_PAGE_DISC'></option>
                                        <option value='about'      data-p='tnd|GEN_CHN_DFLT_PAGE_ABT'></option>
                                    </select>
                                </div>\n
                                <a href='https://github.com/ParticleCore/Particle/wiki/Features#channel_page' data-p='ttl|FTR_DESC' target='features'>?</a>
                            </div>
                            <h3 data-p='tnd|GEN_LYT'></h3>
                            <div><input id='GEN_GRID_SUBS'     type='checkbox'><label for='GEN_GRID_SUBS'     data-p='tnd|GEN_GRID_SUBS'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#sub_grid'             data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_GRID_SRCH'     type='checkbox'><label for='GEN_GRID_SRCH'     data-p='tnd|GEN_GRID_SRCH'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#search_grid'          data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_BTTR_NTF'      type='checkbox'><label for='GEN_BTTR_NTF'      data-p='tnd|GEN_BTTR_NTF'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#blue_box'             data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_DSB_HVRC'      type='checkbox'><label for='GEN_DSB_HVRC'      data-p='tnd|GEN_DSB_HVRC'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hovercards_off'       data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_CMPT_TTLS'     type='checkbox'><label for='GEN_CMPT_TTLS'     data-p='tnd|GEN_CMPT_TTLS'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#feed_titles'          data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_BLUE_GLOW'     type='checkbox'><label for='GEN_BLUE_GLOW'     data-p='tnd|GEN_BLUE_GLOW'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#blue_glow'            data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_HIDE_FTR'      type='checkbox'><label for='GEN_HIDE_FTR'      data-p='tnd|GEN_HIDE_FTR'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_footer'          data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_HDE_RECM_SDBR' type='checkbox'><label for='GEN_HDE_RECM_SDBR' data-p='tnd|GEN_HDE_RECM_SDBR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_recom_sidebar'   data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_HDE_SRCH_SDBR' type='checkbox'><label for='GEN_HDE_SRCH_SDBR' data-p='tnd|GEN_HDE_SRCH_SDBR'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_search_sidebar'  data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='GEN_HDE_CHN_SDBR'  type='checkbox'><label for='GEN_HDE_CHN_SDBR'  data-p='tnd|GEN_HDE_CHN_SDBR'> </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_channel_sidebar' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                        </div>`;
                    if (user_settings.GEN_LOCL_LANG && user_settings.localLang) {
                        temp.content.querySelector(".P-implang").dataset.p = "GLB_LOCL_LANG_CSTM";
                    }
                } else if (section === "VID") {
                    temp.innerHTML = //
                        `<div id='P-content'>
                            <div class='P-header'>
                                <button class='P-save'    data-p='tnd|GLB_SVE'></button>
                                <button class='P-reset'   data-p='tnd|GLB_RSET'></button>
                                <button class='P-impexp'  data-p='ttl|GLB_IMPR'><svg class='save'><use xlink:href='#ytp-svg-save'/></svg></button>
                                <button class='P-implang' data-p='ttl|GLB_LOCL_LANG&tnd|LOCALE'></button>
                                <h2 data-p='tnd|VID_TTL'></h2>
                            </div>
                            <hr class='P-horz'></hr>
                            <h3 data-p='tnd|VID_PLR'></h3>
                            <div><input id='VID_PLR_ADS'        type='checkbox'><label for='VID_PLR_ADS'      data-p='tnd|VID_PLR_ADS'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#video_ads'             data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_SUB_ADS'        type='checkbox'><label for='VID_SUB_ADS'      data-p='tnd|VID_SUB_ADS'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#subs_ads_on'           data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_ALVIS'      type='checkbox'><label for='VID_PLR_ALVIS'    data-p='tnd|VID_PLR_ALVIS'>   </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#floating_player'       data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_ALVIS_WDTH' type='text' placeholder='350' size='6'><label for='VID_PLR_ALVIS_WDTH' data-p='tnd|VID_PLR_ALVIS_WDTH'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#floating_player_width' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_ATPL'       type='checkbox'><label for='VID_PLR_ATPL'     data-p='tnd|VID_PLR_ATPL'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#video_autoplay'        data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_CC'         type='checkbox'><label for='VID_PLR_CC'       data-p='tnd|VID_PLR_CC'>      </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#subtitles_off'         data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_ANTS'       type='checkbox'><label for='VID_PLR_ANTS'     data-p='tnd|VID_PLR_ANTS'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#annotations_off'       data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_END_SHRE'       type='checkbox'><label for='VID_END_SHRE'     data-p='tnd|VID_END_SHRE'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#share_panel_off'       data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_VOL_MEM'    type='checkbox'><label for='VID_PLR_VOL_MEM'  data-p='tnd|VID_PLR_VOL_MEM'> </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#remember_volume'       data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_VOL_LDN'    type='checkbox'><label for='VID_PLR_VOL_LDN'  data-p='tnd|VID_PLR_VOL_LDN'> </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#disable_normalisation' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_ALACT'      type='checkbox'><label for='VID_PLR_ALACT'    data-p='tnd|VID_PLR_ALACT'>   </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#shortcuts_on'          data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_SIZE_MEM'   type='checkbox'><label for='VID_PLR_SIZE_MEM' data-p='tnd|VID_PLR_SIZE_MEM'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#remember_mode'         data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_VOL_WHEEL'      type='checkbox'><label for='VID_VOL_WHEEL'    data-p='tnd|VID_VOL_WHEEL'>   </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#wheel_volume'          data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_HFR'        type='checkbox'><label for='VID_PLR_HFR'      data-p='tnd|VID_PLR_HFR'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hfr_off'               data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_HTML5'      type='checkbox'><label for='VID_PLR_HTML5'    data-p='tnd|VID_PLR_HTML5'>   </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#force_html5'           data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div>
                                <label for='VID_DFLT_QLTY' data-p='tnd|VID_DFLT_QLTY'></label>
                                <div class='P-select'>
                                    <select id='VID_DFLT_QLTY'>
                                        <option value='auto'    data-p='tnd|VID_DFLT_QLTY_AUTO'></option>
                                        <option value='highres' data-p='tnd|VID_DFLT_QLTY_ORIG'></option>
                                        <option value='hd2880'  data-p='tnd|VID_DFLT_QLTY_2880'></option>
                                        <option value='hd2160'  data-p='tnd|VID_DFLT_QLTY_2160'></option>
                                        <option value='hd1440'  data-p='tnd|VID_DFLT_QLTY_1440'></option>
                                        <option value='hd1080'  data-p='tnd|VID_DFLT_QLTY_1080'></option>
                                        <option value='hd720'   data-p='tnd|VID_DFLT_QLTY_720' ></option>
                                        <option value='large'   data-p='tnd|VID_DFLT_QLTY_LRG' ></option>
                                        <option value='medium'  data-p='tnd|VID_DFLT_QLTY_MDM' ></option>
                                        <option value='small'   data-p='tnd|VID_DFLT_QLTY_SML' ></option>
                                        <option value='tiny'    data-p='tnd|VID_DFLT_QLTY_TNY' ></option>
                                    </select>
                                </div>\n
                                <a href='https://github.com/ParticleCore/Particle/wiki/Features#default_quality' data-p='ttl|FTR_DESC' target='features'>?</a>
                            </div>
                            <h3 data-p='tnd|VID_PLR_LYT'></h3>
                            <div><input id='VID_PLR_INFO'     type='checkbox'><label for='VID_PLR_INFO'     data-p='tnd|VID_PLR_INFO'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#info_bar'          data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_DYN_SIZE' type='checkbox'><label for='VID_PLR_DYN_SIZE' data-p='tnd|VID_PLR_DYN_SIZE'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#dynamic_size_off'  data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_FIT'      type='checkbox'><label for='VID_PLR_FIT'      data-p='tnd|VID_PLR_FIT'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#fit_to_page'       data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLR_FIT_WDTH' type='text' placeholder='1280px' size='6'><label for='VID_PLR_FIT_WDTH' data-p='tnd|VID_PLR_FIT_WDTH'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#fit_max_width' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <h3 data-p='tnd|VID_PLST'></h3>
                            <div><input id='VID_PLST_ATPL'    type='checkbox'><label for='VID_PLST_ATPL'    data-p='tnd|VID_PLST_ATPL'>   </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#playlist_autoplay' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_PLST_RVRS'    type='checkbox'><label for='VID_PLST_RVRS'    data-p='tnd|VID_PLST_RVRS'>   </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#playlist_reverse'  data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <h3 data-p='tnd|VID_LAYT'></h3>
                            <div><input id='VID_PPOT_SZ' type='text' placeholder='533' size='6'><label for='VID_PPOT_SZ' data-p='tnd|VID_PPOT_SZ'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#popout_size' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div>
                                <label for='VID_HIDE_COMS' data-p='tnd|VID_HIDE_COMS'></label>
                                <div class='P-select'>
                                    <select id='VID_HIDE_COMS'>
                                        <option value='0' data-p='tnd|VID_HIDE_COMS_SHOW'></option>
                                        <option value='1' data-p='tnd|VID_HIDE_COMS_HIDE'></option>
                                        <option value='2' data-p='tnd|VID_HIDE_COMS_REM'></option>
                                    </select>
                                </div>\n
                                <a href='https://github.com/ParticleCore/Particle/wiki/Features#comments' data-p='ttl|FTR_DESC' target='features'>?</a>
                            </div>
                            <div><input id='VID_TTL_CMPT'      type='checkbox'><label for='VID_TTL_CMPT'      data-p='tnd|VID_TTL_CMPT'>     </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#video_title'          data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_DESC_SHRT'     type='checkbox'><label for='VID_DESC_SHRT'     data-p='tnd|VID_DESC_SHRT'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#labelless_buttons'    data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_VID_CNT'       type='checkbox'><label for='VID_VID_CNT'       data-p='tnd|VID_VID_CNT'>      </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#upload_counter'       data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_POST_TIME'     type='checkbox'><label for='VID_POST_TIME'     data-p='tnd|VID_POST_TIME'>    </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#relative_upload_time' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_HIDE_DETLS'    type='checkbox'><label for='VID_HIDE_DETLS'    data-p='tnd|VID_HIDE_DETLS'>   </label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#hide_video_details'   data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div><input id='VID_LAYT_AUTO_PNL' type='checkbox'><label for='VID_LAYT_AUTO_PNL' data-p='tnd|VID_LAYT_AUTO_PNL'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#expand_description'   data-p='ttl|FTR_DESC' target='features'>?</a></div>
                        </div>`;
                    if (user_settings.GEN_LOCL_LANG && user_settings.localLang) {
                        temp.content.querySelector(".P-implang").dataset.p = "GLB_LOCL_LANG_CSTM";
                    }
                } else if (section === "BLK") {
                    temp.innerHTML = //
                        `<div id='P-content'>
                            <div class='P-header'>
                                <button class='P-save'    data-p='tnd|GLB_SVE'></button>
                                <button class='P-reset'   data-p='tnd|GLB_RSET'></button>
                                <button class='P-impexp'  data-p='ttl|GLB_IMPR'><svg class='save'><use xlink:href='#ytp-svg-save'/></svg></button>
                                <button class='P-implang' data-p='ttl|GLB_LOCL_LANG&tnd|LOCALE'></button>
                                <h2 data-p='tnd|BLK_TTL'></h2>
                            </div>
                            <hr class='P-horz'/>
                            <h3 data-p='tnd|BLK_BLK'></h3>
                            <div><input id='BLK_ON' type='checkbox'><label for='BLK_ON' data-p='tnd|BLK_ON'></label>\n<a href='https://github.com/ParticleCore/Particle/wiki/Features#blacklist_on' data-p='ttl|FTR_DESC' target='features'>?</a></div>
                            <div id='blacklist'>
                                <div id='blacklist-controls'>
                                    <button id='blacklist-edit'  class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'><span class='yt-uix-button-content' data-p='tnd|BLCK_EDIT'></span></button>
                                    <button id='blacklist-save'  class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'><span class='yt-uix-button-content' data-p='tnd|BLCK_SAVE'></span></button>
                                    <button id='blacklist-close' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'><span class='yt-uix-button-content' data-p='tnd|BLCK_CLSE'></span></button>
                                </div>
                                <textarea id='blacklist-edit-list'></textarea>
                            </div>
                            <br/>
                        </div>`;
                    if (user_settings.GEN_LOCL_LANG && user_settings.localLang) {
                        temp.content.querySelector(".P-implang").dataset.p = "ttl|GLB_LOCL_LANG&tnd|GLB_LOCL_LANG_CSTM";
                    }
                } else if (section === "ABT") {
                    temp.innerHTML = //
                        `<div id='P-content'>
                            <div class='P-header'>
                                <h2 data-p='tnd|ABT_TTL'></h2>
                            </div>
                            <hr class='P-horz'/>
                            <h3 data-p='tnd|ABT_THKS'></h3>
                            <div><a target='_blank' href='https://github.com/YePpHa'>Jeppe Rune Mortensen</a><span data-p='tnd|ABT_THKS_YEPPHA'></span></div>
                            <div><a target='_blank' href='http://www.greasespot.net/'>Greasemonkey</a> + <a href='http://tampermonkey.net/'>Tampermonkey</a><span data-p='tnd|ABT_THKS_USERSCRIPT'></span></div>
                            <div><a target='_blank' href='http://stackoverflow.com/'>Stack Overflow</a><span data-p='tnd|ABT_THKS_STACKOV'></span></div>
                            <h3 data-p='tnd|ABT_INFO'></h3>
                            <div><a target='_blank' href='https://github.com/ParticleCore/Particle/'>GitHub</a></div>
                            <div><a target='_blank' href='https://greasyfork.org/en/users/8223-particlecore'>Greasy Fork</a></div>
                            <div><a target='_blank' href='http://openuserjs.org/scripts/ParticleCore/'>OpenUserJS</a></div>
                        </div>`;
                }
                inputs = temp.content.querySelectorAll("input[type='checkbox'] + label");
                svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                svg.innerHTML = "<use xlink:href='#ytp-svg-checkmark'>";
                for (i = 0; i < inputs.length; i++) {
                    inputs[i].appendChild(svg.cloneNode(true));
                }
                return setLocale(getValues(temp.content));
            }
            function exportSettings(target) {
                var expCont;
                if (target.classList.contains("P-impexp") || target.classList.contains("P-implang")) {
                    expCont = document.getElementById("exp-cont");
                    if (expCont) {
                        expCont.remove();
                        return;
                    }
                    expCont = document.createElement("template");
                    expCont.innerHTML = //
                        `<div id='exp-cont'>
                           <button id='implang-save' class='yt-uix-button yt-uix-sessionlink yt-uix-button-default yt-uix-button-size-default'>
                                <span class='yt-uix-button-content' data-p='tnd|GLB_IMPR_SAVE'></span>
                            </button>
                           <textarea id='impexp-list'></textarea>
                        </div>`;
                    if (target.classList.contains("P-impexp")) {
                        expCont.content.querySelector("#implang-save").id = "impexp-save";
                    }
                    expCont = setLocale(expCont.content).firstChild;
                    document.getElementById("P-content").appendChild(expCont);
                    document.getElementById("impexp-list").value = JSON.stringify((target.classList.contains("P-impexp") && user_settings) || user_settings.localLang || language, undefined, 2);
                } else if (target.id === "impexp-save" || target.id === "implang-save") {
                    if (target.id === "implang-save") {
                        set("localLang", JSON.parse(document.getElementById("impexp-list").value));
                        window.location.reload();
                    } else {
                        set("user_settings", JSON.parse(document.getElementById("impexp-list").value));
                        settingsMenu.settingsButton.click();
                        settingsMenu.settingsButton.click();
                    }
                }
            }
            function setBlackList(target) {
                if (target.id === "blacklist-edit") {
                    document.getElementById("blacklist").classList.add("edit");
                    document.getElementById("blacklist-edit-list").value = JSON.stringify(user_settings.blacklist, undefined, 2);
                } else if (target.id === "blacklist-save") {
                    set("blacklist", JSON.parse(document.getElementById("blacklist-edit-list").value));
                } else if (target.id === "blacklist-close") {
                    document.getElementById("BLK").click();
                }
            }
            function delBlackList(event) {
                var newKey = user_settings.blacklist;
                delete newKey[event.target.nextSibling.href.split("/channel/")[1]];
                event.target.parentNode.remove();
                set("blacklist", newKey);
            }
            function delNotification() {
                document.body.classList.remove("show-guide-button-notification");
            }
            function saveSettings(salt) {
                var i, value, notification, navId, userSets, savedSets;
                navId = document.querySelector(".selected").id;
                userSets = document.getElementById("P-content").querySelectorAll("[id^='" + navId + "']");
                savedSets = user_settings;
                i = userSets.length;
                while (i--) {
                    value = (userSets[i].checked && (userSets[i].value === "on" || userSets[i].value)) || (userSets[i].length && userSets[i].value) || (userSets[i].getAttribute("type") === "text" && userSets[i].value);
                    if (value) {
                        savedSets[userSets[i].name || userSets[i].id] = value;
                    } else if (!value && userSets[i].type !== "radio") {
                        savedSets[userSets[i].id] = false;
                    }
                }
                set("user_settings", savedSets);
                customStyles();
                if (!salt) {
                    notification = document.getElementById("appbar-main-guide-notification-container");
                    if (notification.childNodes.length < 1) {
                        notification.remove();
                        notification = document.createElement("template");
                        notification.innerHTML = //
                            `<div id='appbar-main-guide-notification-container'>
                                <div class='appbar-guide-notification' role='alert'>
                                    <span class='appbar-guide-notification-content-wrapper yt-valign'>
                                        <span class='appbar-guide-notification-icon yt-sprite'></span>
                                        <span class='appbar-guide-notification-text-content'></span>
                                    </span>
                                </div>
                            </div>`;
                        notification = setLocale(notification.content).firstChild;
                        document.querySelector(".yt-masthead-logo-container").appendChild(notification);
                    }
                    document.querySelector(".appbar-guide-notification-text-content").textContent = lang("GLB_SVE_SETS");
                    document.body.classList.add("show-guide-button-notification");
                    window.setTimeout(delNotification, 2000);
                }
            }
            function navigateSettings(event) {
                if (event.target.classList.contains("P-save")) {
                    saveSettings();
                } else if (event.target.classList.contains("P-reset") && window.confirm(lang("GLB_RSET_CONF"))) {
                    set("user_settings", default_settings);
                    settingsMenu.settingsButton.click();
                    settingsMenu.settingsButton.click();
                } else if (event.target.classList.contains("close")) {
                    delBlackList(event);
                } else if (event.target.classList.contains("P-impexp") || event.target.id === "impexp-save" || event.target.classList.contains("P-implang") || event.target.id === "implang-save") {
                    exportSettings(event.target);
                } else if (event.target.id === "blacklist-edit" || event.target.id === "blacklist-save" || event.target.id === "blacklist-close") {
                    setBlackList(event.target);
                } else if (event.target.id === "P-container" || event.target.id === "P-settings") {
                    event = (event.target.id === "P-settings") ? event.target : event.target.parentNode;
                    event.remove();
                    document[(window.chrome && "body") || "documentElement"].scrollTop = 0;
                    window.dispatchEvent(new Event("resize"));
                } else if (event.target.id !== "DNT" && event.target.tagName !== "A" && event.target.parentNode.id === "P-sidebar-list") {
                    saveSettings("no-notification");
                    document.getElementById("P-content").remove();
                    document.getElementById("P-container").appendChild(getMenu(event.target.id));
                    event.target.parentNode.querySelector(".selected").removeAttribute("class");
                    event.target.className = "selected";
                }
            }
            function settingsTemplate(event) {
                var pWrapper;
                if (event.target.id === "P" && event.target.tagName !== "INPUT") {
                    pWrapper = document.getElementById("P-settings");
                    if (pWrapper) {
                        pWrapper.remove();
                    } else {
                        if (document.documentElement.classList.contains("floater")) {
                            document.documentElement.classList.remove("floater");
                            document.getElementById("movie_player").removeAttribute("style");
                        }
                        pWrapper = getMenu("MEN");
                        pWrapper.querySelector("#P-container").appendChild(getMenu("GEN"));
                        document.getElementById("body-container").insertBefore(pWrapper, document.getElementById("page-container"));
                        document.addEventListener("click", navigateSettings);
                    }
                    document[(window.chrome && "body") || "documentElement"].scrollTop = 0;
                    window.dispatchEvent(new Event("resize"));
                }
            }
            function firstTime(event) {
                if (event && event.target && event.target.parentNode && event.target.parentNode.className === "par_closewlcm") {
                    set("firstTime", false);
                    document.removeEventListener("click", firstTime);
                    settingsMenu.welcome.style.display = "none";
                }
            }
            function settingsMenu() {
                var notif_button, settings_button, welcome_message;
                if (settingsMenu.settingsButton) {
                    return;
                }
                notif_button = document.querySelector("#yt-masthead-notifications, .notifications-container");
                settings_button = document.querySelector("#yt-masthead-user, #yt-masthead-signin");
                if (settings_button) {
                    welcome_message = document.createElement("template");
                    welcome_message.innerHTML = //
                        `<div id='Psettings'>
                            <button id='P' data-p='ttl|YTSETS' style='height:28px;margin-right:10px;opacity:.55;vertical-align:middle;width:18px;'>
                                <svg viewBox='0 0 18 20'>
                                    <polygon points='0,20 14,12 0,4'/>
                                    <polygon points='15,3 15,0 13,0 13,3 10,3 10,5 13,5 13,8 15,8 15,5 18,5 18,3'/>
                                </svg>
                            </button>
                            <div id='part_welcome' style='display:none;margin-left:-220px;top:38px;right:0'>
                                <span data-p='tnd|WLCM'></span>
                                <br/>
                                <span data-p='tnd|WLCMSTRT'></span>
                                <br/><br/>
                                <a data-p='tnd|WLCMFTRS' style='color:#FFF;' href='https://github.com/ParticleCore/Particle/wiki/Features' target='_blank'></a>
                                <div class='par_closewlcm'><span>×</span></div>
                            </div>
                        </div>`;
                    welcome_message = setLocale(welcome_message.content);
                    document.addEventListener("click", settingsTemplate);
                    if (notif_button) {
                        settings_button.insertBefore(welcome_message, notif_button);
                    } else {
                        settings_button.appendChild(welcome_message);
                    }
                    settingsMenu.settingsButton = document.getElementById("P");
                    settingsMenu.welcome = document.getElementById("part_welcome");
                    if (user_settings.firstTime) {
                        settingsMenu.welcome.style.display = "block";
                        document.addEventListener("click", firstTime);
                    }
                }
            }
            function modComment(original) {
                return function (a) {
                    var comments, is_live;
                    comments = document.getElementById("watch-discussion");
                    is_live = window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.livestream;
                    if (!window.location.search.match(/&?(lc|google_comment_id)=/) && a.split("comments").length > 1 && !is_live && comments && !comments.lazyload && user_settings.VID_HIDE_COMS === "1" && !comments.classList.contains("show")) {
                        comments.lazyload = arguments;
                    } else {
                        return original.apply(this, arguments);
                    }
                };
            }
            function modSetConfig(original) {
                return function (a) {
                    if (typeof a === "object") {
                        if ("SHARE_ON_VIDEO_END" in a) {
                            a.SHARE_ON_VIDEO_END = !user_settings.VID_END_SHRE;
                        }
                        if ("UNIVERSAL_HOVERCARDS" in a) {
                            a.UNIVERSAL_HOVERCARDS = !user_settings.GEN_DSB_HVRC;
                        }
                    }
                    original.apply(this, arguments);
                };
            }
            function modEmbed(original) {
                return function (a, b) {
                    var temp, player;
                    temp = a.id || a;
                    if (temp !== "player-api" && temp !== "upsell-video") {
                        return original.apply(this, arguments);
                    }
                    modArgs(b);
                    temp = original.apply(this, arguments);
                    player = document.getElementById("movie_player");
                    if (player) {
                        player.setPlaybackQuality(user_settings.VID_DFLT_QLTY);
                    }
                    return temp;
                };
            }
            function modAutoplay(original) {
                return function (a, b) {
                    if (!b || user_settings.plApl || (!user_settings.plApl && b.feature && b.feature !== "autoplay")) {
                        original.apply(this, arguments);
                    }
                };
            }
            function modAutoplayFullscreen(original) {
                return function () {
                    var has_ended, next_button, next_clicked;
                    if (!document.mozFullScreenElement && !document.webkitFullscreenElement) {
                        return original.apply(this, arguments);
                    }
                    has_ended = api && api.getCurrentTime && Math.round(api.getCurrentTime()) >= Math.floor(api.getDuration());
                    next_clicked = document.activeElement.classList.contains("ytp-button-next") || document.activeElement.classList.contains("ytp-next-button");
                    if (!user_settings.plApl && !next_clicked && has_ended) {
                        next_button = document.querySelector(".ytp-next-button");
                        if (next_button && next_button.getAttribute("aria-disabled") === "true") {
                            next_button.onclick = api.nextVideo;
                            document.addEventListener("click", api.nextVideo);
                            next_button.setAttribute("aria-disabled", "false");
                        }
                        return false;
                    }
                    if (user_settings.plApl || next_clicked || !has_ended) {
                        if (next_clicked) {
                            document.getElementById("movie_player").focus();
                        }
                        return original.apply(this, arguments);
                    }
                };
            }
            function modPlayerCreate(original) {
                return function (a, b) {
                    var temp, player;
                    temp = a.id || a;
                    if (temp !== "player-api" && temp !== "upsell-video") {
                        return original.apply(this, arguments);
                    }
                    modArgs(b);
                    if (a.id === "upsell-video") {
                        original.apply(this, arguments);
                    } else if (typeof a === "object") {
                        player_instance = original.apply(this, arguments);
                        player = document.getElementById("movie_player");
                        if (user_settings.VID_PLR_FIT) {
                            resizePlayer();
                        }
                    }
                };
            }
            function modSeekTo(original) {
                return function(time) {
                    if (document.documentElement.classList.contains("floater")) {
                        original.call(this, time, false);
                    } else {
                        original.apply(this, arguments);
                    }
                };
            }
            function ModArgsWatch(args) {
                if (args && args.autoplay === "1" && !user_settings.VID_PLR_ATPL && window.location.hash === "") {
                    args.autoplay = "0";
                }
                return ModArgsWatch.Original.apply(this, arguments);
            }
            function scriptExit(event) {
                var i, j, key, temp;
                if (event && event.target) {
                    if (event.target.getAttribute("name") === "www/base") {
                        window.yt.setConfig = modSetConfig(window.yt.setConfig);
                        if (window._yt_www) {
                            temp = Object.keys(window._yt_www);
                            i = temp.length;
                            j = 0;
                            while (i--) {
                                key = temp[i];
                                if (typeof window._yt_www[key] === "function") {
                                    if (String(window._yt_www[key]).split("player-added").length > 1) {
                                        window._yt_www[key] = modEmbed(window._yt_www[key]);
                                        j++;
                                    } else if (String(window._yt_www[key]).split("window.spf.navigate").length > 1) {
                                        window._yt_www[key] = modAutoplay(window._yt_www[key]);
                                        j++;
                                    } else if (String(window._yt_www[key]).split(".set(\"\"+a,b,c,\"/\",d").length > 1) {
                                        window.ytpsetwide = window._yt_www[key];
                                        j++;
                                    }
                                }
                                if (j === 3) {
                                    break;
                                }
                            }
                        }
                    }
                    if (event.target.getAttribute("name") === "www/watch") {
                        window.yt.www.watch.player.seekTo = modSeekTo(window.yt.www.watch.player.seekTo);
                    }
                    if (event.target.getAttribute("name") === "spf/spf") {
                        window.spf.load = modComment(window.spf.load);
                        window.spf.prefetch = function(){};
                        if (window.name === "popOut") {
                            window.spf.navigate = function(){};
                        }
                    }
                }
                if (
                    (event && event.target && event.target.getAttribute("name") === "player/base") ||
                    (!window.html5Patched && window.yt && window.yt.player && window.yt.player.Application && window.yt.player.Application.create)
                ) {
                    window.html5Patched = true;
                    window.yt.player.Application.create = modPlayerCreate(window.yt.player.Application.create);
                    if (window._yt_player) {
                        temp = Object.keys(window._yt_player);
                        for (i = 0; i < temp.length; i++) {
                            if (typeof window._yt_player[temp[i]] === "function" && window._yt_player[temp[i]].prototype && window._yt_player[temp[i]].prototype.hasNext) {
                                window._yt_player[temp[i]].prototype.hasNext = modAutoplayFullscreen(window._yt_player[temp[i]].prototype.hasNext);
                                break;
                            }
                        }
                        for (i = 0; i < temp.length; i++) {
                            if (typeof window._yt_player[temp[i]] === "function" && window._yt_player[temp[i]].toString().match(/this\.adaptiveFormats/)) {
                                key = temp[i];
                                break;
                            }
                        }
                        if (key) {
                            ModArgsWatch.Original = window._yt_player[key];
                            ModArgsWatch.prototype = ModArgsWatch.Original.prototype;
                            temp = Object.keys(ModArgsWatch.Original);
                            for (i = 0; i < temp.length; i++) {
                                ModArgsWatch[temp[i]] = ModArgsWatch.Original[temp[i]];
                            }
                            window._yt_player[key] = ModArgsWatch;
                        }
                    }
                }
            }
            function checkBounds(elm, X, Y) {
                var snapX, snapY;
                if (X > -1 && X + elm.offsetWidth < document.documentElement.offsetWidth) {
                    snapX = false;
                } else if (X < 1) {
                    X = 0;
                    snapX = -1;
                } else {
                    X = document.documentElement.offsetWidth - elm.offsetWidth;
                    snapX = 1;
                }
                if (Y > 50 && Y + elm.offsetHeight < document.documentElement.offsetHeight) {
                    snapY = false;
                } else if (Y < 51) {
                    Y = 50;
                    snapY = -1;
                } else {
                    Y = document.documentElement.offsetHeight - elm.offsetHeight;
                    snapY = 1;
                }
                return {X: X + "px", Y: Y + "px", snapX: snapX, snapY: snapY};
            }
            function updatePos() {
                var x, y, height, player, bounds;
                player = document.getElementById("movie_player");
                if (!document.documentElement.classList.contains("floater") || window.innerWidth < 657) {
                    if (player) {
                        player.removeAttribute("style");
                    }
                    document.documentElement.classList.remove("floater");
                    window.removeEventListener("resize", updatePos);
                    return;
                }
                height = parseInt(user_settings.VID_PLR_ALVIS_WDTH) || 350;
                player = document.getElementById("movie_player");
                bounds = checkBounds(player, user_settings.floaterX, user_settings.floaterY);
                height = (height < 350 ? 350 : height) / (16 / 9);
                if (user_settings.floaterSnapX === -1) {
                    x = "0px";
                } else if (user_settings.floaterSnapX === 1) {
                    x = document.documentElement.offsetWidth - player.offsetWidth + "px";
                } else {
                    x = bounds.X;
                }
                if (user_settings.floaterSnapY === -1) {
                    y = "50px";
                } else if (user_settings.floaterSnapY === 1) {
                    y = document.documentElement.offsetHeight - player.offsetHeight + "px";
                } else {
                    y = bounds.Y;
                }
                player.setAttribute("style", "width:" + (height * (16 / 9)) + "px;height:" + height + "px;left:" + x + ";top:" + y);
            }
            function goToTop() {
                document[(window.chrome && "body") || "documentElement"].scrollTop = 0;
            }
            function dragFloater(event) {
                var excluded, isFScreen, isFloater, bounds, player;
                isFScreen = document.querySelector(".ytp-fullscreen");
                isFloater = document.documentElement.classList.contains("floater");
                if (event && !isFScreen && isFloater) {
                    player = document.getElementById("movie_player");
                    if (event.buttons === 1) {
                        excluded = document.querySelector(".ytp-chrome-bottom");
                        if (event.type === "mousedown" && player.contains(event.target) && (!excluded || !excluded.contains(event.target))) {
                            event.preventDefault();
                            event.stopPropagation();
                            document.addEventListener("mousemove", dragFloater);
                            document.addEventListener("click", dragFloater, true);
                            dragFloater.oldPos = {
                                X: parseInt(player.style.left) - event.clientX,
                                Y: parseInt(player.style.top) - event.clientY,
                                orgX: event.clientX,
                                orgY: event.clientY
                            };
                        } else if (
                            event.type === "mousemove" && (
                                dragFloater.hasMoved ||
                                Math.abs(event.clientX - dragFloater.oldPos.orgX) > 10 ||
                                Math.abs(event.clientY - dragFloater.oldPos.orgY) > 10
                            )
                        ) {
                            bounds = checkBounds(player, event.clientX + dragFloater.oldPos.X, event.clientY + dragFloater.oldPos.Y);
                            player.style.left = bounds.X;
                            player.style.top = bounds.Y;
                            dragFloater.hasMoved = true;
                            dragFloater.snapX = bounds.snapX;
                            dragFloater.snapY = bounds.snapY;
                        }
                    }
                    if (event.buttons !== 1 || event.type === "click") {
                        if (dragFloater.hasMoved) {
                            event.preventDefault();
                            event.stopImmediatePropagation();
                            dragFloater.oldPos = false;
                            dragFloater.hasMoved = false;
                            user_settings.floaterX = parseInt(player.style.left);
                            user_settings.floaterY = parseInt(player.style.top);
                            user_settings.floaterSnapX = dragFloater.snapX;
                            user_settings.floaterSnapY = dragFloater.snapY;
                            set("user_settings", user_settings);
                        }
                        document.removeEventListener("mousemove", dragFloater);
                        document.removeEventListener("click", dragFloater, true);
                    }
                }
            }
            function iniFloater() {
                var player, plrApi, out_of_sight, isFloater, isFScreen, floaterUI, settings_open;
                player = document.getElementById("movie_player");
                plrApi = document.getElementById("player-api").getBoundingClientRect();
                settings_open = document.getElementById("P-settings");
                if (player) {
                    out_of_sight = plrApi.bottom < ((plrApi.height / 2) + 50);
                    isFloater = document.documentElement.classList.contains("floater");
                    isFScreen = document.querySelector(".ytp-fullscreen");
                    floaterUI = document.getElementById("part_floaterui");
                    if (!floaterUI && !isFScreen) {
                        floaterUI = document.createElement("template");
                        floaterUI.innerHTML = //
                            `<div id='part_floaterui'>
                                <button id='part_floaterui_move' data-p='ttl|VID_PLR_ALVIS_MOVE'><svg viewBox='0 0 20 20'><polygon points='6.4,3.6 7.2,4.3 10,1.5 12.8,4.3 13.6,3.6 10,0'/><polygon points='16.4,6.4 15.7,7.2 18.5,10 15.7,12.8 16.4,13.6 20,10'/><polygon points='3.6,6.4 0,10 3.6,13.6 4.3,12.8 1.5,10 4.3,7.2'/><polygon points='10,18.5 7.2,15.7 6.4,16.4 10,20 13.6,16.4 12.8,15.7'/><circle cx='10' cy='10' r='2'/></svg></button>
                                <button id='part_floaterui_scrolltop' data-p='ttl|VID_PLR_ALVIS_SCRL_TOP'><svg viewBox='0 0 20 20'><polygon points='10,0.1 0,10.1 2.9,12.9 10,5.8 17.1,12.9 20,10.1 '/></svg></button>
                            </div>`;
                        floaterUI = setLocale(floaterUI.content).firstChild;
                        player.appendChild(floaterUI);
                        document.getElementById("part_floaterui_move").addEventListener("mousedown", dragFloater);
                        document.getElementById("part_floaterui_scrolltop").addEventListener("click", goToTop);
                    }
                    if (out_of_sight && !isFloater && !settings_open && window.location.pathname === "/watch") {
                        document.documentElement.classList.add("floater");
                        window.addEventListener("resize", updatePos);
                        updatePos();
                        window.dispatchEvent(new Event("resize"));
                    } else if ((!out_of_sight || settings_open || window.location.pathname !== "/watch") && isFloater) {
                        document.documentElement.classList.remove("floater");
                        window.removeEventListener("resize", updatePos);
                        player.removeAttribute("style");
                        window.dispatchEvent(new Event("resize"));
                    }
                }
            }
            function alwaysVisible() {
                if (user_settings.VID_PLR_ALVIS) {
                    if (window.location.pathname === "/watch") {
                        window.addEventListener("scroll", iniFloater);
                    } else if (window.location.pathname !== "/watch") {
                        window.removeEventListener("scroll", iniFloater);
                    }
                }
            }
            function alwaysActive(event) {
                var i, list, clear, length, eventClone;
                clear = window.location.pathname == "/watch" && api && api !== event.target && !api.contains(event.target) && !event.ctrlKey && !event.shiftKey && !event.altKey && !event.metaKey && !event.target.isContentEditable;
                if (
                    clear && (
                        event.which > 47 && event.which < 58 ||
                        event.which > 95 && event.which < 106 ||
                        [27, 32, 35, 36, 37, 38, 39, 40, 66, 67, 79, 87, 187, 189].indexOf(event.which) > -1
                    ) &&
                    ["EMBED", "INPUT", "OBJECT", "TEXTAREA", "IFRAME"].indexOf(document.activeElement.tagName) < 0
                ) {
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
                if (user_settings.fullBrs || user_settings.lightsOut) {
                    document.documentElement.classList[(event < 5 && event > 0 && "add") || "remove"]((user_settings.fullBrs && "part_fullbrowser") || "0", (user_settings.lightsOut && "part_cinema_mode") || "0");
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
            function playerReady() {
                api = document.getElementById("movie_player");
                if (api && !document.getElementById("c4-player")) {
                    api.addEventListener("onStateChange", playerState);
                    if (user_settings.VID_PLR_VOL_MEM) {
                        api.addEventListener("onVolumeChange", handleCustoms);
                    }
                    if (user_settings.VID_PLR_SIZE_MEM) {
                        api.addEventListener("SIZE_CLICKED", handleCustoms);
                    }
                    if (user_settings.VID_PLR_VOL_MEM) {
                        api.setVolume(user_settings.volLev);
                    }
                    if (user_settings.loopVid) {
                        document.querySelector("video").loop = user_settings.loopVid;
                    }
                    if (user_settings.VID_PLR_ALACT) {
                        document.addEventListener("keydown", alwaysActive);
                    }
                }
            }
            function getThumb() {
                var thumbnail_url;
                thumbnail_url = document.querySelector("[href*='maxresdefault']");
                thumbnail_url = thumbnail_url && thumbnail_url.getAttribute("href");
                if (thumbnail_url) {
                    window.open(thumbnail_url);
                } else if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.thumbnail_url) {
                    window.open(window.ytplayer.config.args.thumbnail_url);
                }
            }
            function hideScreenshot(event) {
                if (event.target.id === "close-screenshot") {
                    event.target.parentNode.remove();
                    document.removeEventListener("click", hideScreenshot);
                }
            }
            function getScreenshot() {
                var width, height, aspectRatio, video, container, canvas, close, context;
                video = document.querySelector("video");
                container = document.getElementById("screenshot-result") || document.createElement("div");
                canvas = container.querySelector("canvas") || document.createElement("canvas");
                context = canvas.getContext("2d");
                aspectRatio = video.videoWidth / video.videoHeight;
                width = video.videoWidth;
                height = parseInt(width / aspectRatio, 10);
                canvas.width = width;
                canvas.height = height;
                context.drawImage(video, 0, 0, width, height);
                if (!container.id) {
                    container.id = "screenshot-result";
                    container.appendChild(canvas);
                    close = document.createElement("div");
                    close.id = "close-screenshot";
                    close.textContent = lang("CNSL_SS_CLS");
                    document.addEventListener("click", hideScreenshot);
                    container.appendChild(close);
                    document.body.appendChild(container);
                }
            }
            function exitFullBrowser(key) {
                if (
                    document.documentElement.classList.contains("part_fullbrowser") && (
                        key.keyCode === 27 ||
                        key.key === "Escape" || (
                            key.target.className &&
                            key.target.className.split("ytp-size").length > 1
                        )
                    )
                ) {
                    toggleFullBrowser(key);
                    if (key.type === "mousedown") {
                        document.removeEventListener("keydown", exitFullBrowser);
                        document.removeEventListener("mousedown", exitFullBrowser);
                        key.preventDefault();
                    }
                }
            }
            function toggleFullBrowser(event) {
                var plrState = api && api.getPlayerState && api.getPlayerState();
                plrState = plrState < 5 && plrState > 0;
                document[(window.chrome && "body") || "documentElement"].scrollTop = 0;
                document.addEventListener("keydown", exitFullBrowser);
                document.addEventListener("mousedown", exitFullBrowser);
                set("fullBrs", event ? !user_settings.fullBrs : true);
                advancedOptions.full_browser.classList[(user_settings.fullBrs && "add") || "remove"]("active");
                if (event && (plrState || event.keyCode === 27 || event.key === "Escape")) {
                    document.documentElement.classList[(user_settings.fullBrs && "add") || "remove"]("part_fullbrowser");
                    window.dispatchEvent(new Event("resize"));
                }
            }
            function toggleFrames(event) {
                var i, pi, fps, temp;
                advancedOptions.frame_step = document.getElementById("framestep-button");
                if (event && ["EMBED", "INPUT", "OBJECT", "TEXTAREA"].indexOf(document.activeElement.tagName) < 0 && event.target.tagName !== "IFRAME" && !event.target.getAttribute("contenteditable")) {
                    if ((event.keyCode === 37 || event.keyCode === 39) && event.shiftKey) {
                        pi = api.getVideoStats().fmt;
                        if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.adaptive_fmts) {
                            temp = window.ytplayer.config.args.adaptive_fmts.split(",");
                            i = temp.length;
                            while (i--) {
                                if (temp[i].indexOf("itag=" + pi) > 0) {
                                    advancedOptions.fps = parseInt(temp[i].match(/fps=([\d]+)/)[1]);
                                    break;
                                }
                            }
                        }
                        if (!advancedOptions.fps || advancedOptions.fps === 1) {
                            advancedOptions.fps = 30;
                        }
                        fps = ((event.keyCode < 39 && -1) || 1) * ((advancedOptions.fps < 2 && 30) || advancedOptions.fps);
                        if (fps && api) {
                            if (!document.querySelector("video").paused) {
                                api.pauseVideo();
                            }
                            api.seekBy(1 / fps);
                        }
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    } else if (event.type === "click" && event.target.id === "framestep-button") {
                        set("frame_step", !user_settings.frame_step);
                        advancedOptions.frame_step.classList[(user_settings.frame_step && "add") || "remove"]("active");
                    }
                }
                if (advancedOptions.frame_step && advancedOptions.frame_step.classList.contains("active")) {
                    document.addEventListener("keydown", toggleFrames, true);
                } else if (!advancedOptions.frame_step || !advancedOptions.frame_step.classList.contains("active")) {
                    document.removeEventListener("keydown", toggleFrames, true);
                }
            }
            function toggleShortcuts() {
                window.open("https://github.com/ParticleCore/Particle/wiki/YouTube-shortcuts", "_blank");
            }
            function toggleConsole(event) {
                if (event.target.id === "console-button") {
                    document.documentElement.classList.toggle("player-console");
                    event.target.classList[document.documentElement.classList.contains("player-console") ? "add" : "remove"]("close");
                    set("advOpts", document.documentElement.classList.contains("player-console"));
                }
            }
            function togglePlay() {
                set("VID_PLR_ATPL", !user_settings.VID_PLR_ATPL);
                document.documentElement.classList[(user_settings.VID_PLR_ATPL && "add") || "remove"]("part_autoplayon");
                document.getElementById("autoplay-button").classList[(user_settings.VID_PLR_ATPL && "add") || "remove"]("active");
            }
            function toggleLoop(event) {
                var videoPlayer = document.querySelector("video");
                if (videoPlayer) {
                    videoPlayer.loop = event ? !user_settings.loopVid : user_settings.loopVid;
                    if (event) {
                        advancedOptions.loop_button.classList[(!user_settings.loopVid && "add") || "remove"]("active");
                    }
                }
                set("loopVid", advancedOptions.loop_button.classList.contains("active"));
            }
            function toggleCinemaMode(event) {
                var plrState = api && api.getPlayerState && api.getPlayerState() < 5 && api.getPlayerState() > 0;
                set("lightsOut", event ? !user_settings.lightsOut : true);
                advancedOptions.cinema_mode.classList[(user_settings.lightsOut && "add") || "remove"]("active");
                if (event && plrState) {
                    document.documentElement.classList[(user_settings.lightsOut && "add") || "remove"]("part_cinema_mode");
                }
            }
            function handleToggles(event) {
                if (event.target.dataset && event.target.dataset.action && advancedOptions.actions[event.target.dataset.action]) {
                    advancedOptions.actions[event.target.dataset.action](event);
                }
            }
            function hookButtons() {
                advancedOptions.popPlayer = popPlayer;
                advancedOptions.full_browser = advancedOptions.controls.querySelector("#fullbrowser-button");
                advancedOptions.cinema_mode = advancedOptions.controls.querySelector("#cinemamode-button");
                advancedOptions.loop_button = advancedOptions.controls.querySelector("#loop-button");
                advancedOptions.frame_step = advancedOptions.controls.querySelector("#framestep-button");
                advancedOptions.actions = {
                    togglePlay: togglePlay,
                    toggleLoop: toggleLoop,
                    getThumb: getThumb,
                    getScreenshot: getScreenshot,
                    popPlayer: popPlayer,
                    toggleFullBrowser: toggleFullBrowser,
                    toggleCinemaMode: toggleCinemaMode,
                    toggleFrames: toggleFrames,
                    toggleShortcuts: toggleShortcuts
                };
                document.addEventListener("click", handleToggles);
                if (user_settings.loopVid && !advancedOptions.loop_button.classList.contains("active")) {
                    advancedOptions.loop_button.classList.add("active");
                    toggleLoop();
                }
                if (user_settings.fullBrs && !advancedOptions.full_browser.classList.contains("active")) {
                    advancedOptions.full_browser.classList.add("active");
                    toggleFullBrowser();
                }
                if (user_settings.lightsOut && !advancedOptions.cinema_mode.classList.contains("active")) {
                    advancedOptions.cinema_mode.classList.add("active");
                    toggleCinemaMode();
                }
                if (user_settings.frame_step && !advancedOptions.frame_step.classList.contains("active")) {
                    advancedOptions.frame_step.classList.add("active");
                    toggleFrames();
                }
            }
            function advancedOptions() {
                var header, cnslBtn, cnslCont;
                header = document.getElementById("watch-header");
                cnslBtn = document.getElementById("console-button");
                advancedOptions.controls = document.getElementById("player-console");
                if (window.location.pathname === "/watch" && header && !cnslBtn) {
                    cnslBtn = document.createElement("template");
                    cnslBtn.innerHTML = //
                        `<button id='console-button' data-p='ttl|ADV_OPTS'>
                            <svg class='close' viewBox='0 0 10 10'>
                                <polygon points='10,1.4 8.6,0 5,3.6 1.4,0 0,1.4 3.6,5 0,8.6 1.4,10 5,6.4 8.6,10 10,8.6 6.4,5'/>
                            </svg>
                            <svg class='open' viewBox='0 0 12 10'>
                                <rect width='12' height='2'/>
                                <rect width='12' height='2' y='4'/>
                                <rect width='12' height='2' y='8'/>
                            </svg>
                        </button>`;
                    cnslBtn = setLocale(cnslBtn.content).firstChild;
                    document.addEventListener("click", toggleConsole);
                    cnslCont = document.createElement("template");
                    cnslCont.innerHTML = "<div id='advanced-options'></div>";
                    cnslCont = cnslCont.content.firstChild;
                    cnslCont.appendChild(cnslBtn);
                    header.appendChild(cnslCont);
                    if (advancedOptions.controls) {
                        advancedOptions.controls.remove();
                    }
                    advancedOptions.controls = document.createElement("template");
                    advancedOptions.controls.innerHTML = //
                        `<div id='player-console'>
                            <div id='autoplay-button' class='yt-uix-tooltip' data-p='ttp|CNSL_AP' data-action='togglePlay'><svg viewBox='0 0 14 16'><polygon points='0,16 14,8 0,0'/></svg></div>
                            <div id='loop-button' class='yt-uix-tooltip' data-p='ttp|CNSL_RPT' data-action='toggleLoop'><svg viewBox='0 0 20.5 18'><path d='M11.5,0C9,0,6.8,1,5.1,2.6l1.4,1.4C7.8,2.8,9.6,2,11.5,2c3.9,0,7,3.1,7,7c0,3.9-3.1,7-7,7s-7-3.1-7-7H7L3.5,4L0,9 h2.5c0,5,4,9,9,9s9-4,9-9C20.5,4,16.5,0,11.5,0z'/></svg></div>
                            <div id='save-thumbnail-button' class='yt-uix-tooltip' data-p='ttp|CNSL_SVTH' data-action='getThumb'><svg viewBox='0 0 24 18'><path d='M0,0v18h24V0H0z M22,16H2V2h20V16z'/><circle cx='8' cy='6' r='3'/><polygon points='3,12 6,10 9,12 10,12 16,6 21,11 21,15 3,15'/></svg></div>
                            <div id='screenshot-button' class='yt-uix-tooltip' data-p='ttp|CNSL_SS' data-action='getScreenshot'><svg viewBox='0 0 22 18'><path d='M17.7,4l-2.3-4h-9L4.1,4H0v14h22V4H17.7z M11,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S13.8,15,11,15z'/><circle cx='11' cy='10' r='4'/></svg></div>
                            <div id='popout-button' class='yt-uix-tooltip' data-p='ttp|CNSL_PPOT' data-action='popPlayer'><svg viewBox='0 0 22 16'><path d='M6,0v12h16V0H6z M20,10H8V2h12V10z'/><polygon points='14,14 2,14 2,6 5,6 5,4 0,4 0,16 16,16 16,13 14,13'/></svg></div>
                            <div id='fullbrowser-button' class='yt-uix-tooltip' data-p='ttp|CNSL_FLBR' data-action='toggleFullBrowser'><svg viewBox='0 0 20 18'><path d='M0,0v18h20V0H0z M18,16H2V4h16V16z'/><polygon points='3,5 3,9 5,9 5,7 7,7 7,5'/><polygon points='17,5 13,5 13,7 15,7 15,9 17,9'/><polygon points='17,15 17,11 15,11 15,13 13,13 13,15'/><polygon points='3,15 7,15 7,13 5,13 5,11 3,11'/></svg></div>
                            <div id='cinemamode-button' class='yt-uix-tooltip' data-p='ttp|CNSL_CINM_MD' data-action='toggleCinemaMode'><svg viewBox='0 0 20 18'><path d='M18,0v2h-2V0H4v2H2V0H0v18h2v-2h2v2h12v-2h2v2h2V0H18z M4,14H2v-2h2V14z M4,10H2V8h2V10z M4,6H2V4h2V6z M14,16 H6v-6h8V16z M14,8H6V2h8V8z M18,14h-2v-2h2V14z M18,10h-2V8h2V10z M18,6h-2V4h2V6z'/></svg></div>
                            <div id='framestep-button' class='yt-uix-tooltip' data-p='ttp|CNSL_FRME' data-action='toggleFrames'><svg viewBox='0 0 20 20'><path d='M20,9h-2.1c-0.5-3.6-3.3-6.5-6.9-6.9V0H9v2.1C5.4,2.5,2.5,5.4,2.1,9H0v2h2.1c0.5,3.6,3.3,6.5,6.9,6.9V20h2 v-2.1c3.6-0.5,6.5-3.3,6.9-6.9H20V9z M11,15.9V14H9v1.9c-2.5-0.4-4.5-2.4-4.9-4.9H6V9H4.1C4.5,6.5,6.5,4.5,9,4.1V6h2V4.1 c2.5,0.4,4.5,2.4,4.9,4.9H14v2h1.9C15.5,13.5,13.5,15.5,11,15.9z'/><circle cx='10' cy='10' r='1'/></svg></div>
                            <div id='shortcuts-button' class='yt-uix-tooltip' data-p='ttp|CNSL_YTSC' data-action='toggleShortcuts'><svg viewBox='0 0 18 18'><polygon points='7,8 10,8 10,13 11,13 11,14 7,14 7,13 8,13 8,9 7,9'/><rect x='8' y='4' width='2' height='2'/><path d='M9,0C4,0,0,4,0,9c0,5,4,9,9,9s9-4,9-9C18,4,14,0,9,0z M9,16.1c-3.9,0-7.1-3.2-7.1-7.1S5.1,1.9,9,1.9 s7.1,3.2,7.1,7.1S12.9,16.1,9,16.1z'/></svg></div>
                        </div>`;
                    if (user_settings.VID_PLR_ATPL) {
                        advancedOptions.controls.content.querySelector("#autoplay-button").classList.add("active");
                    }
                    advancedOptions.controls = setLocale(advancedOptions.controls.content).firstChild;
                    cnslCont.appendChild(advancedOptions.controls);
                    hookButtons();
                    if (user_settings.advOpts) {
                        document.documentElement.classList.add("player-console");
                        cnslBtn.classList.add("close");
                    }
                }
            }
            function iniAction(event) {
                var observer, load_more, click_title;
                load_more = document.querySelector("#watch-more-related, .load-more-button");
                click_title = document.querySelector(".yt-uix-tile");
                while (click_title) {
                    click_title.classList.remove("yt-uix-tile");
                    click_title = document.querySelector(".yt-uix-tile");
                }
                if (load_more && !load_more.classList.contains("modThumbs")) {
                    load_more.classList.add("modThumbs");
                    observer = new MutationObserver(modThumbs);
                    observer.observe(load_more, {
                        childList: true,
                        attributes: true,
                        attributeOldValue: true
                    });
                }
                if (event && /popoutmode|blacklist/.test(event.target.className)) {
                    event.preventDefault();
                    event = event.target;
                    if (event.classList.contains("popoutmode")) {
                        popPlayer(event.dataset.link);
                    } else if (event.dataset.ytid !== "undefined") {
                        user_settings.blacklist[event.dataset.ytid] = event.dataset.user;
                        set("blacklist", user_settings.blacklist);
                        modThumbs();
                    }
                }
            }
            function setButtons() {
                var i, j, list, temp, thumb, button;
                list = Object.keys(modThumbs.thumbs);
                i = list.length;
                while (i--) {
                    temp = modThumbs.thumbs[list[i]];
                    j = temp.length;
                    while (j--) {
                        thumb = temp[j].querySelector(".yt-lockup .yt-lockup-thumbnail, .thumb-wrapper");
                        if (thumb) {
                            if (user_settings.GEN_PPOT_ON && !thumb.querySelector(".popoutmode") && !/channel/.test(temp[j].firstChild.className)) {
                                button = document.createElement("template");
                                button.innerHTML = //
                                    `<div data-p='ttl|PPOT_OPEN&ttp|PPOT_OPEN' class='yt-uix-tooltip popoutmode'>
                                        <svg viewBox='0 0 10 10' class='thumb-svg'>
                                            <polygon points='7,9 1,9 1,4 3,4 3,2 0,2 0,10 8,10 8,7 7,7'/>
                                            <path d='M4,0v6h6V0H4z M9,5H5V2h4V5z'/>
                                        </svg>
                                    </div>`;
                                button.content.firstChild.dataset.link = temp[j].querySelector("a[href*='/watch?v']").href;
                                thumb.appendChild(setLocale(button.content).firstChild);
                            }
                            if (user_settings.BLK_ON && !thumb.querySelector(".blacklist") && window.yt.config_.PAGE_NAME !== "channel" && window.location.pathname !== "/feed/subscriptions") {
                                button = document.createElement("template");
                                button.innerHTML = //
                                    `<div data-p='ttl|BLCK_ADD&ttp|BLCK_ADD' class='yt-uix-tooltip blacklist'>
                                        <svg viewBox='0 0 10 10' class='thumb-svg'>
                                            <polygon points='10,1.4 8.6,0 5,3.6 1.4,0 0,1.4 3.6,5 0,8.6 1.4,10 5,6.4 8.6,10 10,8.6 6.4,5'/>
                                        </svg>
                                    </div>`;
                                button.content.firstChild.dataset.user = temp[j].username;
                                button.content.firstChild.dataset.ytid = list[i];
                                thumb.appendChild(setLocale(button.content).firstChild);
                            }
                        }
                    }
                }
            }
            function delVideos() {
                var i, j, temp, parent, blacklist, has_upnext;
                has_upnext = document.querySelector(".autoplay-bar");
                blacklist = Object.keys(user_settings.blacklist);
                i = blacklist.length;
                while (i--) {
                    temp = modThumbs.thumbs[blacklist[i]];
                    if (temp) {
                        j = temp.length;
                        while (j--) {
                            if (has_upnext && has_upnext.contains(temp[j])) {
                                has_upnext.parentNode.remove();
                                has_upnext = document.querySelector(".watch-sidebar-separation-line");
                                if (has_upnext) {
                                    has_upnext.remove();
                                }
                                has_upnext = false;
                                parent = false;
                            } else {
                                parent = temp[j].parentNode;
                                temp[j].remove();
                            }
                            temp.splice(j, 1);
                            while (parent) {
                                if (parent.childElementCount) {
                                    break;
                                }
                                parent = parent.parentNode;
                                parent.firstChild.remove();
                            }
                        }
                        if (!temp.length) {
                            delete modThumbs.thumbs[blacklist[i]];
                        }
                        temp = false;
                    }
                }
                temp = document.querySelectorAll(".feed-item-container:not(.search-history-item)");
                i = temp.length;
                while (i--) {
                    if (temp[i].querySelectorAll("ul").length < 2) {
                        parent = temp[i].parentNode;
                        temp[i].remove();
                        while (parent) {
                            if (parent.childElementCount) {
                                break;
                            }
                            parent = parent.parentNode;
                            parent.firstChild.remove();
                        }
                    }
                }
            }
            function getVideos() {
                var i, list, temp, video_list, channel_id;
                modThumbs.thumbs = {};
                video_list = Array.from(document.querySelectorAll(`
                    .yt-shelf-grid-item,
                    .video-list-item,
                    #results .item-section > li,
                    .expanded-shelf-content-item-wrapper
                `));
                list = document.querySelectorAll(`
                    .yt-lockup-byline > a,
                    .yt-lockup-content .g-hovercard,
                    .video-list-item .g-hovercard,
                    .channels-content-item .yt-lockup-title > a
                `);
                i = list.length;
                while (i--) {
                    temp = list[i];
                    channel_id = temp.dataset.ytid;
                    while (temp) {
                        if (temp.tagName && temp.tagName === "LI" && video_list.indexOf(temp) > -1) {
                            temp.username = list[i].textContent;
                            if (!modThumbs.thumbs[channel_id]) {
                                modThumbs.thumbs[channel_id] = [temp];
                            } else if (modThumbs.thumbs[channel_id].indexOf(temp) < 0) {
                                modThumbs.thumbs[channel_id].push(temp);
                            }
                            break;
                        }
                        temp = temp.parentNode;
                    }
                }
            }
            function modThumbs() {
                if ((user_settings.BLK_ON || user_settings.GEN_PPOT_ON) && !window.opener && window.yt && window.yt.config_ && /watch|index|feed|channel|results/.test(window.yt.config_.PAGE_NAME)) {
                    getVideos();
                    if (user_settings.BLK_ON && window.yt.config_.PAGE_NAME !== "channel") {
                        delVideos();
                    }
                    setButtons();
                    document.addEventListener("click", iniAction);
                    iniAction();
                }
            }
            function setVideoCount() {
                var span = document.createElement("span");
                span.textContent = " · ";
                enhancedDetails.username.appendChild(span);
                enhancedDetails.link.href = window.location.origin + "/channel/" + enhancedDetails.user.dataset.ytid + "/videos";
                enhancedDetails.username.appendChild(enhancedDetails.link);
            }
            function updateVideoCount(details) {
                details = details.target.response.querySelector(".pl-header-details li:nth-child(2)");
                if (details) {
                    enhancedDetails.link.className = "spf-link";
                    enhancedDetails.link.textContent = cid[enhancedDetails.user.dataset.ytid] = details.textContent;
                    setVideoCount();
                }
            }
            function getVideoCount() {
                enhancedDetails.username = document.querySelector(".yt-user-info");
                if (!document.getElementById("uploaded-videos") && enhancedDetails.username) {
                    enhancedDetails.link = document.createElement("a");
                    enhancedDetails.link.id = "uploaded-videos";
                    enhancedDetails.username.appendChild(enhancedDetails.link);
                    enhancedDetails.user = enhancedDetails.username.querySelector("a");
                    if (cid[enhancedDetails.user.dataset.ytid]) {
                        enhancedDetails.link.textContent = cid[enhancedDetails.user.dataset.ytid];
                        setVideoCount();
                    } else {
                        localXHR("GET", updateVideoCount, "/playlist?list=" + enhancedDetails.user.dataset.ytid.replace("UC", "UU"), "doc");
                    }
                }
            }
            function getChannelInfo(details) {
                var retry, isLive;
                isLive = details.target.response.querySelector(".yt-badge-live");
                if (!isLive) {
                    retry = details.target.responseURL.split("/videos").length < 2;
                    details = details.target.response.querySelectorAll("[data-context-item-id='" + window.ytplayer.config.args.video_id + "'] .yt-lockup-meta-info li");
                    if (details && details.length > 0 && enhancedDetails.watchTime.textContent.split("·").length < 2) {
                        enhancedDetails.watchTime.textContent += " · " + details[retry ? 0 : 1].textContent;
                    } else if (retry && window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.ucid) {
                        localXHR("GET", getChannelInfo, "/channel/" + window.ytplayer.config.args.ucid + "/videos", "doc");
                    }
                }
            }
            function getPublishedTime() {
                enhancedDetails.watchTime = document.querySelector(".watch-time-text");
                if (enhancedDetails.watchTime && !enhancedDetails.watchTime.fetching && window.ytplayer && window.ytplayer.config) {
                    enhancedDetails.watchTime.fetching = true;
                    localXHR("GET", getChannelInfo, "/channel/" + window.ytplayer.config.args.ucid + "/search?query=%22" + window.ytplayer.config.args.video_id + "%22", "doc");
                }
            }
            function enhancedDetails() {
                if (window.location.pathname === "/watch") {
                    if (user_settings.VID_VID_CNT) {
                        getVideoCount();
                    }
                    if (user_settings.VID_POST_TIME) {
                        getPublishedTime();
                    }
                }
            }
            function reverseControl() {
                var i, temp, prev, next, list, videos;
                prev = document.querySelector(".prev-playlist-list-item");
                next = document.querySelector(".next-playlist-list-item");
                list = document.getElementById("playlist-autoscroll-list");
                videos = list.getElementsByTagName("li");
                i = videos.length;
                while (i--) {
                    list.appendChild(videos[i]);
                }
                temp = prev.href;
                prev.href = next.href;
                next.href = temp;
                list.scrollTop = document.querySelector(".currently-playing").offsetTop;
                if (api) {
                    api.updatePlaylist();
                }
            }
            function reverseButton(event) {
                if (event.target.id === "reverse") {
                    event.target.classList.toggle("yt-uix-button-toggled");
                    set("plRev", event.target.classList.contains("yt-uix-button-toggled"));
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
                var button = document.createElement("template");
                button.innerHTML = //
                    `<button class='yt-uix-button yt-uix-button-player-controls yt-uix-button-opacity yt-uix-tooltip' type='button'>
                            <svg class='pl-autoplay' viewBox='0 0 14 16'>
                                <polygon points='0,16 14,8 0,0'/>
                            </svg>
                            <svg class='pl-reverse' viewBox='0 0 16 20'>
                                <polygon points='7,8 3,8 3,14 0,14 5,20 10,14 7,14'/>
                                <polygon points='11,0 6,6 9,6 9,12 13,12 13,6 16,6'/>
                            </svg>
                    </button>`;
                if (bool === true || window.location.href.split(bool).length > 1) {
                    button.content.querySelector("button").classList.add("yt-uix-button-toggled");
                }
                button.content.firstChild.id = type;
                button.content.firstChild.dataset.p = "ttp|" + label + "&ttl|" + label;
                button.content.firstChild.classList.add("yt-uix-button-icon-watch-appbar-" + type + "-video-list");
                button = setLocale(button.content).firstChild;
                playlistControls.plBar.className = playlistControls.plBar.className.replace("radio-playlist", "");
                document.addEventListener("click", call);
                document.querySelector(".playlist-nav-controls").appendChild(button);
            }
            function playlistControls() {
                playlistControls.plBar = document.getElementById("watch-appbar-playlist");
                if (playlistControls.plBar) {
                    if (document.readyState === "complete" && user_settings.plRev) {
                        reverseControl();
                    }
                    if (user_settings.VID_PLST_RVRS && !document.getElementById("reverse")) {
                        createButton("reverse", "PLST_RVRS", user_settings.plRev, reverseButton);
                    }
                    if (user_settings.VID_PLST_ATPL && !document.getElementById("autoplay")) {
                        createButton("autoplay", "PLST_AP", user_settings.plApl, autoplayButton);
                    }
                }
            }
            function xhrPatch() {
                var temp, player;
                if (this.readyState === 4) {
                    temp = {args: JSON.parse(
                        "{\"" +
                        decodeURIComponent(this.responseText
                            .replace(/%5C/g, "%5C%5C")
                            .replace(/%22/g, "%5C%22")
                            .replace(/&/g, "\",\"")
                            .replace(/\=/g, "\":\"")
                            .replace(/\+/g, "%20")
                        ) +
                        "\"}"
                    )};
                    temp = modArgs(temp);
                    temp = encodeURIComponent(JSON.stringify(temp.args).split(/\{"([\w\W]*?)"}/)[1])
                        .replace(/%5C%5C/g, "%5C")
                        .replace(/%5C%22/g, "%22")
                        .replace(/%22%2C%22/g, "&")
                        .replace(/%22%3A%22/g, "=")
                        .replace(/%20/g, "+");
                    Object.defineProperty(this, "responseText", {writable: true});
                    this.responseText = temp;
                    player = document.getElementById("movie_player");
                    if (player) {
                        player.setPlaybackQuality(user_settings.VID_DFLT_QLTY);
                    }
                }
            }
            function checkXHR(original) {
                return function(method, url) {
                    if (url.match("get_video_info")) {
                        this.addEventListener("readystatechange", xhrPatch);
                    }
                    return original.apply(this, arguments);
                };
            }
            function hideVolume() {
                if (volumeWheel.cBottom && volumeWheel.cBottom.classList.contains("ytp-volume-slider-active")) {
                    volumeWheel.cBottom.classList.remove("ytp-volume-slider-active");
                    delete volumeWheel.cBottom.timer;
                }
            }
            function volumeWheel(event) {
                var fsPl, pSets, ivCard, player, canScroll, direction;
                player = document.querySelector("video");
                fsPl = document.querySelector(".ytp-playlist-menu");
                pSets = document.querySelector(".ytp-settings-menu");
                ivCard = document.querySelector(".iv-drawer");
                canScroll = event && (!fsPl || (fsPl && !fsPl.contains(event.target))) && (!ivCard || (ivCard && !ivCard.contains(event.target))) && (!pSets || (pSets && !pSets.contains(event.target)));
                if (event && api && player && canScroll && (event.target.id === api || api.contains(event.target))) {
                    event.preventDefault();
                    volumeWheel.cBottom = document.querySelector(".ytp-chrome-bottom");
                    if (volumeWheel.cBottom) {
                        if (!volumeWheel.cBottom.classList.contains("ytp-volume-slider-active")) {
                            volumeWheel.cBottom.classList.add("ytp-volume-slider-active");
                        }
                        if (volumeWheel.cBottom.timer) {
                            window.clearTimeout(volumeWheel.cBottom.timer);
                        }
                        if (api) {
                            api.dispatchEvent(new Event("mousemove"));
                        }
                        volumeWheel.cBottom.timer = window.setTimeout(hideVolume, 4000);
                    }
                    direction = event && (event.deltaY || event.wheelDeltaY);
                    api.setVolume(player.volume * 100 - (Math.sign(direction) * 5));
                } else if (!event && user_settings.VID_VOL_WHEEL) {
                    document.addEventListener("wheel", volumeWheel);
                } else if (window.location.pathname !== "/watch") {
                    document.removeEventListener("wheel", volumeWheel);
                }
            }
            function dragPopOut(event) {
                var excluded, isFScreen;
                excluded = document.querySelector(".ytp-chrome-bottom");
                isFScreen = document.querySelector(".ytp-fullscreen");
                if (event && !isFScreen && (!excluded || (event.target !== excluded && !excluded.contains(event.target)))) {
                    if (event.buttons === 1) {
                        if (event.type === "mousedown") {
                            event.preventDefault();
                            event.stopPropagation();
                            document.addEventListener("mousemove", dragPopOut);
                            document.addEventListener("click", dragPopOut, true);
                            window.oldPos = {
                                X: event.clientX,
                                Y: event.clientY,
                                orgX: event.clientX,
                                orgY: event.clientY
                            };
                        } else if (
                            event.type === "mousemove" && (
                            window.hasMoved ||
                            Math.abs(event.clientX - window.oldPos.orgX) > 10 ||
                            Math.abs(event.clientY - window.oldPos.orgY) > 10)
                        ) {
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
                        document.removeEventListener("mousemove", dragPopOut);
                        document.removeEventListener("click", dragPopOut, true);
                    }
                } else if (!event && window.name === "popOut") {
                    document.addEventListener("mousedown", dragPopOut);
                }
            }
            function resumePlayback() {
                var temp = this.document.querySelector("video");
                if (temp && !isNaN(temp.duration) && temp.currentTime < temp.duration) {
                    temp = temp.currentTime;
                    window.setTimeout(function() {
                        window.location.hash = "t=" + temp;
                    }, 0);
                }
            }
            function popPlayer(url) {
                var popOut, width, height, pop_url, video;
                width = parseInt(user_settings.VID_PPOT_SZ) || 533;
                height = Math.round(width / (16 / 9));
                video = document.querySelector("video");
                pop_url = (!url.target && url) || window.location.href.split(/&t=[0-9]+|#t=[0-9]+|&time=[0-9]+/).join("");
                if (url.target && video && video.currentTime && video.currentTime < video.duration) {
                    pop_url += "#t=" + video.currentTime;
                    window.ytplayer.config.args.start = video.currentTime;
                    api.cueVideoByPlayerVars(window.ytplayer.config.args);
                }
                popOut = window.open(pop_url, "popOut", "width=" + width + ",height=" + height);
                if (url.target) {
                    popOut.addEventListener("beforeunload", resumePlayback);
                }
                popOut.focus();
            }
            function setSubPlaylist(event) {
                var i, list, button;
                list = [];
                if (event.target && event.target.id === "subscription-playlist") {
                    i = subPlaylist.video_list.length;
                    while (i--) {
                        if (i > -1) {
                            list.push(subPlaylist.video_list[i].dataset.videoIds);
                        }
                    }
                    list = list.reverse().splice(0, 20).join("%2C");
                    subPlaylist.list_title = subPlaylist.list_title && subPlaylist.list_title.querySelector(".epic-nav-item-heading").textContent.trim();
                    button = document.getElementById("subscription-playlist");
                    button.href = "/watch_videos?title=" + subPlaylist.list_title + "&video_ids=" + list;
                }
            }
            function subPlaylist() {
                var button, nav_menu;
                nav_menu = document.querySelector(".appbar-nav-menu");
                button = document.getElementById("subscription-playlist");
                subPlaylist.list_title = document.querySelector(".appbar-nav-menu");
                subPlaylist.video_list = document.getElementsByClassName("addto-watch-later-button");
                if (user_settings.GEN_SUB_LIST && nav_menu && window.location.href.split("/feed/subscriptions").length > 1 && !button && subPlaylist.list_title && subPlaylist.video_list) {
                    button = document.createElement("template");
                    button.innerHTML = //
                        `<li id='subscription-playlist-icon'>
                            <a id='subscription-playlist' data-p='ttl|SUB_PLST' class='yt-uix-button spf-link yt-uix-sessionlink yt-uix-button-epic-nav-item yt-uix-button-size-default'>
                                <svg viewBox='0 0 14 16'>
                                    <polygon points='0,16 14,8 0,0 '/>
                                </svg>
                            </a>
                        </li>`;
                    button = setLocale(button.content).firstChild;
                    nav_menu.appendChild(button);
                    document.addEventListener("click", setSubPlaylist);
                }
            }
            function loadComments(event) {
                if (event.target && event.target.parentNode && event.target.parentNode.id === "P-show-comments") {
                    if (modComments.comments.lazyload) {
                        window.spf.load.apply(main, modComments.comments.lazyload);
                    }
                    modComments.comments.classList.toggle("show");
                    modComments.wrapper.querySelector("button").textContent = lang((modComments.comments.classList.contains("show") && "HIDE_CMTS") || "SHOW_CMTS");
                }
            }
            function resizePlayer(event) {
                var temp, is_small, content, max_width;
                if (window.location.pathname.indexOf("/watch")) {
                    return;
                }
                temp = document.getElementById("player-api");
                if (!temp) {
                    return;
                }
                temp = document.documentElement.clientWidth;
                is_small = window.innerWidth < 657 ? "" : ".watch-stage-mode ";
                if (is_small !== "") {
                    if (user_settings.VID_PLR_FIT_WDTH) {
                        if (user_settings.VID_PLR_FIT_WDTH.match(/%/)) {
                            max_width = window.parseInt(user_settings.VID_PLR_FIT_WDTH) / 100 * temp;
                        } else {
                            max_width = window.parseInt(user_settings.VID_PLR_FIT_WDTH);
                        }
                        max_width = temp >= max_width ? max_width : temp;
                    } else {
                        max_width = temp >= 1280 ? 1280 : temp;
                    }
                } else {
                    max_width = temp;
                }
                content = //
                    `@media screen and (max-width: 656px) {
                        #player-api,
                        #player-unavailable {
                            top: 51px;
                            position: fixed !important;
                            box-shadow: 0 0 10px #000;
                        }
                        #theater-background {
                            background-color: transparent !important;
                        }
                    }
                    ${is_small}.player-width {
                        width: ${max_width}px !important;
                        left: ${max_width / 2 * -1}px !important;
                    }
                    ${is_small}.player-height:not(.watch-playlist) {
                        height: ${max_width / (16 / 9)}px !important;
                    }
                    ${is_small}#watch-appbar-playlist {
                        top: ${max_width / (16 / 9) - (is_small === "" ? 0 : 360)}px !important;
                    }`;
                temp = document.getElementById("ytp-resizer");
                if (!temp) {
                    temp = document.createElement("style");
                    temp.id = "ytp-resizer";
                    document.head.appendChild(temp);
                }
                temp.textContent = content;
                if (!event) {
                    window.dispatchEvent(new Event("resize"));
                }
            }
            function modPlayerSize() {
                if (user_settings.VID_PLR_FIT) {
                    resizePlayer();
                    window.addEventListener("resize", resizePlayer);
                    document.addEventListener("spfdone", resizePlayer);
                } else {
                    window.removeEventListener("resize", resizePlayer);
                    document.removeEventListener("spfdone", resizePlayer);
                }
            }
            function modComments() {
                var is_live = window.ytplayer && window.ytplayer.config && window.ytplayer.config.args && window.ytplayer.config.args.livestream;
                modComments.comments = document.getElementById("watch-discussion");
                if (!is_live && modComments.comments && !document.getElementById("P-show-comments") && user_settings.VID_HIDE_COMS === "1") {
                    modComments.wrapper = document.createElement("template");
                    modComments.wrapper.innerHTML = //
                        `<div id='P-show-comments' class='yt-card'>
                            <button class='yt-uix-button yt-uix-button-expander' data-p='tnd|SHOW_CMTS'></button>
                        </div>`;
                    modComments.wrapper = setLocale(modComments.wrapper.content).firstChild;
                    document.addEventListener("click", loadComments);
                    modComments.comments.parentNode.insertBefore(modComments.wrapper, modComments.comments);
                    if (window.location.search.match(/&?(lc|google_comment_id)=/)) {
                        modComments.wrapper.querySelector("button").click();
                    }
                }
            }
            function setCustomStyles(clss) {
                document.documentElement.classList[user_settings[clss] ? "add" : "remove"](customStyles.custom_styles[clss]);
            }
            function customStyles() {
                var child, width, height, parent, comments, sidebar, ytGrid, adverts, ads_list;
                comments = document.getElementById("watch-discussion");
                ytGrid = document.querySelector(".yt-uix-menu-top-level-flow-button:last-child a");
                customStyles.custom_styles = {
                    GEN_DSBL_ADS    : "part_no_ads",
                    GEN_BLUE_GLOW   : "part_dsbl_glow",
                    GEN_HIDE_FTR    : "part_hide_footer",
                    GEN_BTTR_NTF    : "part_notif_button",
                    GEN_GRID_SUBS   : "part_grid_subs",
                    GEN_GRID_SRCH   : "part_grid_search",
                    GEN_CMPT_TTLS   : "part_compact_titles",
                    VID_PLR_ATPL    : "part_autoplayon",
                    VID_PLR_DYN_SIZE: "part_static_size",
                    VID_HIDE_DETLS  : "part_hide_details",
                    VID_TTL_CMPT    : "part_compact_title",
                    VID_DESC_SHRT   : "part_labelless_buttons"
                };
                if (window.yt && window.yt.config_ && window.yt.config_.PAGE_NAME === "shared_conversation") {
                    window.stop();
                    window.location = document.querySelector("[rel='shortlink']").href;
                    return;
                }
                if (window.name === "popOut") {
                    document.documentElement.classList.add("part_popout");
                    width = parseInt(user_settings.VID_PPOT_SZ) || 533;
                    height = Math.round(width / (16 / 9));
                    window.resizeTo(
                        width + (window.outerWidth - window.innerWidth),
                        height + (window.outerHeight - window.innerHeight)
                    );
                }
                if (ytGrid && user_settings.GEN_GRID_SUBS) {
                    ytGrid.click();
                } else {
                    sidebar = document.querySelector(".branded-page-v2-secondary-col");
                    ads_list = //
                        `#masthead_child,
                        #feed-pyv-container,
                        #watch7-sidebar-ads,
                        #watch7-sidebar-offer,
                        .ad-div,
                        .pyv-afc-ads-container,
                        .video-list-item:not(.related-list-item):not(.dashboard-widget-item)`;
                    adverts = user_settings.GEN_DSBL_ADS && document.querySelector(ads_list);
                    while (adverts) {
                        child = adverts;
                        while (child) {
                            parent = child.parentNode;
                            if (parent.childElementCount > 1) {
                                child.remove();
                                break;
                            }
                            child = parent;
                        }
                        adverts = document.querySelector(ads_list);
                    }
                    if (
                        sidebar &&
                        sidebar.parentNode && (
                        window.location.pathname === "/results" &&
                        sidebar &&
                        sidebar.querySelectorAll("*").length < 10) || (
                            sidebar && (
                                user_settings.GEN_HDE_RECM_SDBR &&
                                window.location.href.split("/feed/subscriptions").length > 1 ||
                                user_settings.GEN_HDE_SRCH_SDBR &&
                                window.location.pathname === "/results" ||
                                user_settings.GEN_HDE_CHN_SDBR &&
                                window.location.href.split(/\/(channel|user|c)\//).length > 1
                            )
                        )
                    ) {
                        sidebar.remove();
                    }
                    if (!window.location.search.match(/&?(lc|google_comment_id)=/) && window.location.pathname === "/watch" && user_settings.VID_HIDE_COMS > 1 && comments) {
                        comments.remove();
                    }
                    if (user_settings.VID_HIDE_COMS === "1") {
                        document.documentElement.classList.add("part_hide_comments");
                    } else if (user_settings.VID_HIDE_COMS !== "1") {
                        document.documentElement.classList.remove("part_hide_comments");
                    }
                    if (user_settings.VID_PLR_FIT) {
                        modPlayerSize();
                    }
                    Object.keys(customStyles.custom_styles).forEach(setCustomStyles);
                    if (window.location.href.split("/feed/subscriptions").length < 2) {
                        document.documentElement.classList.remove("part_grid_subs");
                    }
                }
            }
            function defaultChannelPage(event) {
                var parentNode;
                if (user_settings.GEN_CHN_DFLT_PAGE !== "default") {
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
                        if (
                            parentNode &&
                            parentNode.href &&
                            parentNode.href.split(user_settings.GEN_CHN_DFLT_PAGE).length < 2 &&
                            (
                                parentNode.href.split("/channel/").length > 1 ||
                                parentNode.href.split("/user/").length > 1
                            ) &&
                            parentNode.href.split(/[a-z0-9]\/[a-z0-9]/i).length < 4
                        ) {
                            parentNode.href += "/" + user_settings.GEN_CHN_DFLT_PAGE;
                        }
                    } else if (!event) {
                        document.addEventListener("mouseup", defaultChannelPage);
                    }
                }
            }
            function modArgs(config) {
                var i, temp, list, length, videos, new_list, can_share;
                if (window.name === "popOut") {
                    can_share = document.querySelector(".playlist-header-content");
                    if (can_share && can_share.dataset.shareable === "False" && !config.args.video) {
                        config.args.video = [];
                        videos = document.querySelectorAll("li[data-video-id]");
                        length = videos.length;
                        for (i = 0; i < length; i++) {
                            config.args.video[i] = {"encrypted_id": videos[i].getAttribute("data-video-id")};
                        }
                    }
                    document.title = config.args.title;
                    config.args.el = "embedded";
                }
                if (config.args.vq) {
                    config.args.vq = user_settings.VID_DFLT_QLTY;
                }
                if (user_settings.VID_DFLT_QLTY !== "auto") {
                    try {
                        window.localStorage["yt-player-quality"] = JSON.stringify({
                            "data": user_settings.VID_DFLT_QLTY,
                            "expiration": new Date().getTime() + 864E5,
                            "creation": new Date().getTime()
                        });
                    } catch (ignore) {}
                }
                if (config.args.caption_audio_tracks && user_settings.VID_PLR_CC) {
                    config.args.caption_audio_tracks = config.args.caption_audio_tracks.split(/&d=[0-9]|d=[0-9]&/).join("");
                }
                if (user_settings.VID_PLR_VOL_LDN) {
                    delete config.args.loudness;
                    delete config.args.relative_loudness;
                }
                if (user_settings.VID_PLR_HTML5) {
                    config.html5 = true;
                }
                if (user_settings.VID_PLR_INFO) {
                    config.args.showinfo = "1";
                }
                if (window.opener && window.location.hash !== "") {
                    config.args.autoplay = "1";
                } else if (!user_settings.VID_PLR_ATPL) {
                    config.args.autoplay = "0";
                }
                if (config.args.fflags) {
                    config.args.fflags = config.args.fflags.replace("legacy_autoplay_flag=true", "legacy_autoplay_flag=false");
                }
                if (user_settings.VID_PLR_SIZE_MEM) {
                    config.args.player_wide = (user_settings.theaterMode && "1") || "0";
                    if (window.ytpsetwide) {
                        window.ytpsetwide("wide", config.args.player_wide, -1);
                    }
                }
                if (config.args.iv_load_policy && user_settings.VID_PLR_ANTS) {
                    config.args.iv_load_policy = "3";
                }
                if (user_settings.VID_PLR_ADS && (!user_settings.VID_SUB_ADS || (user_settings.VID_SUB_ADS && !config.args.subscribed))) {
                    delete config.args.ad3_module;
                }
                if (config.args.adaptive_fmts && user_settings.VID_PLR_HFR) {
                    new_list = [];
                    list = config.args.adaptive_fmts.split(",");
                    i = list.length;
                    while (i--) {
                        temp = list[i].split(/fps=([0-9]{2})/)[1];
                        if (!temp || temp < 31) {
                            new_list.push(list[i]);
                        }
                    }
                    config.args.adaptive_fmts = new_list.join(",");
                }
                return config;
            }
            function modMatchMedia(original) {
                return function(text) {
                    var temp = original.apply(this, arguments);
                    if (text === "screen and (max-width: 656px)" && temp.matches) {
                        return temp;
                    }
                    Object.defineProperty(temp, "matches", {writable: true});
                    temp.matches = false;
                    return temp;
                };
            }
            function checkDomParser(original) {
                return function() {
                    var i, fps, result, streams;
                    if (user_settings.VID_PLR_HFR) {
                        result = original.apply(this, arguments);
                        streams = result.getElementsByTagName("Representation");
                        i = streams.length;
                        while (i--) {
                            fps = streams[i].getAttribute("frameRate");
                            if (fps > 30) {
                                streams[i].remove();
                            }
                        }
                        return result;
                    }
                    return original.apply(this, arguments);
                };
            }
            function generalChanges() {
                var logo, checkbox, autoplaybar, description;
                autoplaybar = document.querySelector(".autoplay-bar");
                description = document.getElementById("action-panel-details");
                if (user_settings.GEN_YT_LOGO_LINK && window.yt && window.yt.config_ && window.yt.config_.LOGGED_IN) {
                    logo = document.querySelector("map[name='doodle'] > area, a#logo-container");
                    if (logo && logo.href === window.location.origin + "/") {
                        logo.href = "/feed/subscriptions";
                    }
                }
                if (user_settings.GEN_REM_APUN && window.location.pathname === "/watch" && autoplaybar) {
                    checkbox = document.querySelector(".checkbox-on-off");
                    if (checkbox) {
                        checkbox.remove();
                    }
                }
                if (user_settings.VID_LAYT_AUTO_PNL && window.location.pathname === "/watch" && description) {
                    description.classList.remove("yt-uix-expander-collapsed");
                }
                if (user_settings.GEN_SPF_OFF && window.spf && window.spf.dispose) {
                    window.spf.dispose();
                }
            }
            function localXHR(method, call, url, head) {
                var request = new XMLHttpRequest();
                request.addEventListener("load", call);
                request.open(method, url, true);
                if (head && head !== "doc") {
                    request.setRequestHeader(head[0], head[1]);
                } else {
                    request.responseType = "document";
                }
                request.send();
            }
            function playerMode() {
                var pageElement, playerElement;
                if (user_settings.VID_PLR_SIZE_MEM) {
                    pageElement = document.getElementById("page");
                    playerElement = document.getElementById("player");
                    if (window.ytpsetwide) {
                        window.ytpsetwide("wide", (user_settings.theaterMode ? "1" : "0"), -1);
                    }
                    if (pageElement && playerElement && window.location.pathname === "/watch") {
                        pageElement.classList[user_settings.theaterMode ? "add" : "remove"]("watch-wide");
                        pageElement.className = pageElement.className.replace(user_settings.theaterMode ? "non-" : "watch-stage", user_settings.theaterMode ? "" : "watch-non-stage");
                        playerElement.className = user_settings.theaterMode ? playerElement.className.replace("small", "large") : playerElement.className.replace("large", "small").replace("medium", "small");
                    }
                }
            }
            function infiniteScroll() {
                var observer, loadMore;
                loadMore = document.querySelector(".load-more-button");
                if (window.location.pathname !== "/watch" && loadMore && user_settings.GEN_INF_SCRL) {
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
            function checkNewFeatures() {
                var i, keys;
                keys = Object.keys(default_settings);
                i = keys.length;
                while (i) {
                    i -= 1;
                    if (!user_settings.hasOwnProperty(keys[i])) {
                        set(keys[i], default_settings[keys[i]]);
                    }
                }
            }
            function shareApi(original) {
                return function () {
                    playerReady();
                    if (original) {
                        return original.apply(this, arguments);
                    }
                };
            }
            function request(event) {
                var video_player = document.getElementById("movie_player");
                document.documentElement.classList.remove("floater");
                if (video_player) {
                    video_player.removeAttribute("style");
                    if (!user_settings.VID_PLR_ATPL || !event.detail.url.indexOf("/watch")) {
                        if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded) {
                            delete window.ytplayer.config.loaded;
                        }
                        api.destroy();
                    }
                }
            }
            function pageScriptMessages() {
                var key, gate, sets, observer;
                key = "parreceive";
                gate = document.documentElement;
                sets = JSON.parse(gate.dataset[key] || null);
                if (!gate.pagescript) {
                    gate.pagescript = true;
                    observer = new MutationObserver(pageScriptMessages);
                    return observer.observe(gate, {
                        attributes: true,
                        attributeFilter: ["data-" + key]
                    });
                }
                if (sets) {
                    user_settings = sets;
                    gate.dataset[key] = null;
                    customStyles();
                    document.documentElement.removeAttribute("data-parreceive");
                }
            }
            function set(setting, new_value) {
                if (setting !== "user_settings") {
                    user_settings[setting] = new_value;
                } else {
                    user_settings = new_value;
                }
                document.documentElement.dataset.parsend = JSON.stringify(user_settings);
            }
            function main() {
                if (isMaterial()) {
                    return;
                }
                pageScriptMessages();
                customStyles();
                settingsMenu();
                infiniteScroll();
                playlistControls();
                playerMode();
                modPlayerSize();
                advancedOptions();
                volumeWheel();
                subPlaylist();
                alwaysVisible();
                modThumbs();
                enhancedDetails();
                modComments();
                defaultChannelPage();
                generalChanges();
                dragPopOut();
            }
            function isMaterial() {
                var temp;
                temp = document.querySelector("ytd-app, [src*='polymer'],link[href*='polymer']");
                if (temp && !document.getElementById("material-notice")) {
                    temp = document.createElement("template");
                    temp.innerHTML = //
                        `<div id='material-notice' style='border-radius:2px;color:#FFF;padding:10px;background-color:#09F;box-shadow:0 0 3px rgba(0,0,0,.5);font-size:12px;position:fixed;bottom:20px;right:50px;z-index:99999'>
                        YouTube Plus is not compatible with the YouTube beta Material Layout<br>
                        <a href='https://github.com/ParticleCore/Particle/wiki/Restore-classic-YouTube' target='_blank' style='color:#FFF;font-weight:bold;'>Click here</a> for instructions to restore classic YouTube and continue using YT+<br>
                        When an alpha version is ready for public testing it will be announced <a href='https://github.com/ParticleCore/Particle/issues/448' target='_blank' style='color:#FFF;font-weight:bold;'>here</a><br>
                        To keep using the current layout without this message please disable YT+
                        </div>`;
                    document.documentElement.appendChild(temp.content.firstChild);
                    document.documentElement.removeAttribute("data-user_settings");
                    return true;
                }
            }
            var api, cid, language, user_settings, player_instance, default_settings;
            if (isMaterial()) {
                return;
            }
            cid = {};
            user_settings = JSON.parse(document.documentElement.dataset.user_settings || null);
            if (document.documentElement.dataset.user_settings) {
                document.documentElement.removeAttribute("data-user_settings");
            }
            default_settings = {
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
                VID_PLR_VOL_LDN : true,
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
            };
            language = {
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
                CNSL_YTSC             : "YouTube shortcuts list",
                PLST_AP               : "Autoplay",
                PLST_RVRS             : "Reverse",
                SHOW_CMTS             : "Show comments",
                HIDE_CMTS             : "Hide comments",
                GLB_IMPR              : "Import/export settings",
                GLB_LOCL_LANG         : "Click to edit YT+ language",
                GLB_LOCL_LANG_CSTM    : "Local",
                GLB_IMPR_SAVE         : "Save and load",
                GLB_RSET              : "Reset",
                GLB_RSET_CONF         : "This will reset YT+ settings and the blacklist will be erased. Do you want to continue?",
                GLB_SVE               : "Save",
                GLB_SVE_SETS          : "Settings saved",
                GLB_RMBL              : "Remove from blacklist",
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
                VID_PLR_ALVIS_MOVE    : "Move player",
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
            if (!user_settings || Object.keys(user_settings).length < 1) {
                user_settings = default_settings;
            } else {
                checkNewFeatures();
            }
            if (window.chrome) {
                document.documentElement.addEventListener("load", scriptExit, true);
            } else {
                document.addEventListener("afterscriptexecute", scriptExit);
            }
            document.addEventListener("spfdone", main);
            document.addEventListener("spfrequest", request);
            document.addEventListener("readystatechange", main, true);
            XMLHttpRequest.prototype.open = checkXHR(XMLHttpRequest.prototype.open);
            DOMParser.prototype.parseFromString = checkDomParser(DOMParser.prototype.parseFromString);
            window.onYouTubePlayerReady = shareApi(window.onYouTubePlayerReady);
            window.matchMedia = modMatchMedia(window.matchMedia);
            main();
        },
        contentScriptMessages: function() {
            var key1, key2, gate, sets, locs, observer;
            key1 = "parsend";
            key2 = "getlocale";
            gate = document.documentElement;
            sets = JSON.parse(gate.dataset[key1] || null);
            locs = gate.dataset[key2] || null;
            if (!gate.contentscript) {
                gate.contentscript = true;
                observer = new MutationObserver(particle.contentScriptMessages);
                return observer.observe(gate, {
                    attributes: true,
                    attributeFilter: ["data-" + key1, "data-" + key2]
                });
            }
            if (sets) {
                if (particle.is_userscript) {
                    particle.GM_setValue(particle.id, JSON.stringify(sets));
                } else {
                    chrome.storage.local.set({particleSettings: sets});
                }
                document.documentElement.removeAttribute("data-parsend");
            } else if (locs) {
                document.documentElement.dataset.setlocale = chrome.i18n.getMessage(locs);
            }
        },
        filterChromeKeys: function(keys) {
            if (keys[particle.id] && keys[particle.id].new_value) {
                document.documentElement.dataset.parreceive = JSON.stringify(
                    (keys[particle.id].new_value && keys[particle.id].new_value[particle.id]) || keys[particle.id].new_value || {}
                );
            }
        },
        main: function(event) {
            var holder;
            if (!event && particle.is_userscript) {
                event = JSON.parse(particle.GM_getValue(particle.id, "{}"));
            }
            if (event) {
                event = JSON.stringify(event[particle.id] || event);
                document.documentElement.dataset.user_settings = event;
                if (particle.is_userscript) {
                    holder = document.createElement("link");
                    holder.rel = "stylesheet";
                    holder.type = "text/css";
                    holder.href = "https://particlecore.github.io/Particle/stylesheets/YouTubePlus.css?v=1.8.8";
                    document.documentElement.appendChild(holder);
                }
                holder = document.createElement("script");
                holder.textContent = "(" + particle.inject + "(" + particle.is_userscript + "))";
                document.documentElement.appendChild(holder);
                if (!particle.is_userscript) {
                    chrome.storage.onChanged.addListener(particle.filterChromeKeys);
                }
            }
        },
        ini: function() {
            particle.id = "particleSettings";
            particle.is_userscript = typeof GM_info === "object";
            if (particle.is_userscript) {
                particle.GM_getValue = GM_getValue;
                particle.GM_setValue = GM_setValue;
                particle.main();
            } else {
                chrome.storage.local.get(particle.id, particle.main);
            }
            particle.contentScriptMessages();
        }
    };
    particle.ini();
}());