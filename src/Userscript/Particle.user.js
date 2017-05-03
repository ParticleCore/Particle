// ==UserScript==
// @version         0.0.1
// @name            Particle
// @namespace       https://github.com/ParticleCore
// @description     YouTube with more freedom
// @compatible      chrome
// @compatible      firefox
// @icon            https://raw.githubusercontent.com/ParticleCore/Particle/gh-pages/images/p-icon.png
// @match           *://www.youtube.com/*
// @exclude         *://www.youtube.com/tv*
// @exclude         *://www.youtube.com/embed/*
// @exclude         *://www.youtube.com/live_chat*
// @run-at          document-start
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

            function settingsBuilder(option) {

                var
                input,
                label,
                anchor,
                header,
                divider,
                setting,
                section,
                sub_section,
                active_section,
                active_sidebar,
                sidebar_section,
                settings_sidebar,
                settings_container;

                if (!(settings_sidebar = document.getElementById("particle_settings_sidebar"))) {
                    settings_sidebar = document.createElement("div");
                    settings_sidebar.id = "particle_settings_sidebar";
                    settings_sidebar.setAttribute("class", "settings_sidebar");

                    document.body.appendChild(settings_sidebar);
                }

                if (!(sidebar_section = document.getElementById("sidebar_" + option.section))) {
                    sidebar_section = document.createElement("div");
                    sidebar_section.id = "sidebar_" + option.section;
                    sidebar_section.setAttribute("class", "sidebar_section");
                    sidebar_section.dataset.section = option.section;
                    sidebar_section.textContent = option.section;

                    settings_sidebar.appendChild(sidebar_section);
                }

                if (!(settings_container = document.getElementById("particle_settings_container"))) {
                    settings_container = document.createElement("div");
                    settings_container.id = "particle_settings_container";
                    settings_container.setAttribute("class", "settings_container");

                    document.body.appendChild(settings_container);
                }

                if (!(section = document.getElementById(option.section))) {
                    section = document.createElement("div");
                    section.id = option.section;
                    section.setAttribute("class", "settings_section");

                    header = document.createElement("h2");
                    header.textContent = option.title;

                    divider = document.createElement("div");
                    divider.setAttribute("class", "settings_divider");

                    section.appendChild(header);
                    section.appendChild(divider);

                    settings_container.appendChild(section);
                }

                if (!(sub_section = document.getElementById(option.sub_section))) {
                    sub_section = document.createElement("div");
                    sub_section.id = option.sub_section;
                    sub_section.setAttribute("class", "settings_sub_section");

                    header = document.createElement("h3");
                    header.textContent = option.sub_section;

                    sub_section.appendChild(header);
                    section.appendChild(sub_section);
                }

                setting = document.createElement("div");
                setting.setAttribute("class", "settings_setting");

                if (option.type === "checkbox") {
                    input = document.createElement("input");
                    input.setAttribute("class", "setting");
                    input.id = option.id;
                    input.type = option.type;
                    input.checked = option.value;

                    label = document.createElement("label");
                    label.setAttribute("class", "setting");
                    label.setAttribute("for", option.id);
                    label.textContent = option.label;

                    setting.appendChild(input);
                    setting.appendChild(label);
                }

                if (!(active_sidebar = document.querySelector(".active_sidebar"))) {
                    sidebar_section.classList.add("active_sidebar");
                }

                if (!(active_section = document.querySelector(".active_section"))) {
                    section.classList.add("active_section");
                }

                sub_section.appendChild(setting);
            }

            function updateSidebarSelection(event) {

                var
                next,
                current,
                sidebar_next,
                sidebar_current;

                if (event.target.dataset.section) {
                    current = document.querySelector(".active_section");
                    next = document.getElementById(event.target.dataset.section);

                    if (next !== current) {

                        if ((sidebar_current = document.querySelector(".active_sidebar"))) {
                            sidebar_current.classList.remove("active_sidebar");
                        }

                        event.target.classList.add("active_sidebar");
                        current.classList.remove("active_section");
                        next.classList.add("active_section");
                    }
                }
            }

            function loadSettingsMenu() {

                var
                i,
                name,
                title,
                anchor,
                option,
                container,
                new_option;

                if (!document.head) {
                    document.documentElement.appendChild(document.createElement("head"));
                }

                if (!(title = document.querySelector("title"))) {
                    title = document.createElement("title");
                    document.head.appendChild(title);
                }

                title.textContent = "Particle settings";

                if (!document.body) {
                    document.documentElement.appendChild(document.createElement("body"));
                }

                document.body.id = "particle_settings";
                document.body.style.display = "none";

                for (i = 0; i < modules.length; i++) {
                    if (modules[i].options) {
                        for (name in modules[i].options) {
                            if (modules[i].options.hasOwnProperty(name)) {
                                option = modules[i].options[name];
                                settingsBuilder(option);
                            }
                        }
                    }
                }

                document.addEventListener("click", updateSidebarSelection);
            }

            function initializeModules() {

                var
                i;

                i = modules.length;

                for (i = 0; i < modules.length; i++) {
                    if (modules[i].ini) {
                        modules[i].ini();
                    }
                }
            }

            var
            fsexit,
            modules,
            particleApi;

            modules = [
                {
                    options: {
                        player_auto_play: {
                            id:          "player_auto_play",
                            section:     "video",
                            sub_section: "player",
                            type:        "checkbox",
                            value:       true,
                            title:       "video settings",
                            label:       "Play videos automatically",
                        },
                        channel_trailer_auto_play: {
                            id:          "channel_trailer_auto_play",
                            section:     "video",
                            sub_section: "channel",
                            type:        "checkbox",
                            value:       true,
                            title:       "video settings",
                            label:       "Play channel trailers automatically"
                        }
                    },
                    interceptApplicationCreate: function(event, index) {
                        if (window.yt && window.yt.player && window.yt.player.Application && window.yt.player.Application.create) {

                            console.log(event.target);

                            document.documentElement.removeEventListener("load", index, true);

                            window.yt.player.Application.create = this.modApplicationCreate(this, window.yt.player.Application.create);
                        }
                    },
                    /*interceptYtPlayer: function(event, index) {
                        if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.args) {

                            console.log(event.target);

                            document.documentElement.removeEventListener("load", index, true);

                            window.ytplayer.config.loaded = false;
                            window.ytplayer.config.args.autoplay = "0";
                            window.ytplayer.config.args.fflags = window.ytplayer.config.args.fflags
                                .replace("legacy_autoplay_flag=true", "legacy_autoplay_flag=false")
                                .replace("disable_new_pause_state3=true", "disable_new_pause_state3=false"); // remove transition-delay
                        }
                    },
                    intercept_yt_player: function(event, index) {
                        var
                        i,
                        key,
                        keys,
                        temp,
                        pattern;

                        if (window._yt_player) {

                            console.log(event.target);

                            document.documentElement.removeEventListener("load", index, true);

                            pattern = /this\.adaptiveFormats/;
                            keys = Object.keys(window._yt_player);

                            for (i = 0; i < keys.length; i++) {
                                if (typeof window._yt_player[keys[i]] === "function" && pattern.test(window._yt_player[keys[i]].toString())) {
                                    key = keys[i];
                                    break;
                                }
                            }

                            if (key) {
                                this.modGetVideoData.Original = window._yt_player[key];
                                this.modGetVideoData.prototype = this.modGetVideoData.Original.prototype;
                                temp = Object.keys(this.modGetVideoData.Original);
                                for (i = 0; i < temp.length; i++) {
                                    this.modGetVideoData[temp[i]] = this.modGetVideoData.Original[temp[i]];
                                }
                                window._yt_player[key] = this.modGetVideoData;
                            }
                        }
                    },
                    interceptSpfRequest: function() {
                        var
                        video_player;

                        video_player = document.getElementById("movie_player");
                        if (video_player) {
                            video_player.remove();
                        }
                        if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded) {
                            delete window.ytplayer.config.loaded;
                        }
                    },
                    interceptSpfRequest_Material: function(event, index) {
                        if (window.spf && window.spf.request) {
                            //console.info(index, event.target);
                            document.documentElement.removeEventListener("load", index, true);
                            //particleApi.interceptScriptLoaded.hooks.splice(index, 1);
                            window.spf.request = (function intercept(original) {
                                return function(a, b) {
                                    console.log("spf intercepted", a, b);
                                    //player_auto_play.interceptSpfRequest();
                                    return original.apply(this, arguments);
                                };
                            }(window.spf.request));
                        }
                    },
                    modGetVideoData: function modGetVideoData(args) {
                        if (args && args.autoplay === "1") {
                            args.autoplay = "0";
                        }
                        //console.trace();
                        var temp = modGetVideoData.Original.apply(this, arguments);
                        //window.api.stopVideo();
                        return temp;
                    },*/
                    modApplicationCreate: function(context, original) {
                        return function(target, config) {

                            var
                            i,
                            j,
                            temp,
                            player;

                            if (config) {
                                config.loaded = false;
                                //Object.defineProperty(window.ytplayer.config, 'loaded', {
                                Object.defineProperty(config, 'loaded', {
                                    value: false,
                                    writable : false/*,
                                    enumerable : true,
                                    configurable : false*/
                                });

                                if (config.args) {
                                    config.args.autoplay = "0";
                                    if (config.args.fflags) {
                                        config.args.fflags = config.args.fflags
                                            .replace(
                                                "legacy_autoplay_flag=true",
                                                "legacy_autoplay_flag=false"
                                            ).replace(
                                                "disable_new_pause_state3=true",
                                                "disable_new_pause_state3=false"
                                            ); // remove transition-delay
                                    }
                                }
                                //window.ytplayer.config = config;
                            }

                            temp = original.apply(this, arguments);

                            for (i in temp) {
                                if (temp.hasOwnProperty(i)) {
                                    if (typeof temp[i] === "object") {
                                        for (j in temp[i]) {
                                            if (temp[i].hasOwnProperty(j)) {
                                                if (typeof temp[i][j] === "object" && temp[i][j] && temp[i][j].loadVideoByPlayerVars && temp[i][j].cueVideoByPlayerVars) {
                                                    temp[i][j].loadVideoByPlayerVars = context.patchLoadVideoByPlayerVars(target, temp[i][j].loadVideoByPlayerVars, temp[i][j].cueVideoByPlayerVars);
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            player = document.getElementById("movie_player");

                            if (player) {
                                player.cueVideoByPlayerVars(config.args);
                            }

                            return temp;
                        };
                    },
                    patchLoadVideoByPlayerVars: function(target, load, cue) {

                        var context = this;

                        return function() {
                            console.log(context);
                            console.log(target);
                            console.log(this);
                            // if (context.options.)
                            return cue.apply(this, arguments);
                            //return load.apply(this, arguments);
                        };
                    },
                    ini: function() {

                        var
                        key,
                        player_auto_play;

                        if (this.started) {
                            return;
                        }

                        this.started     = true;
                        player_auto_play = this;

                        for (key in this.options) {
                            if (this.options.hasOwnProperty(key)) {
                                if ("user_setting" in this.options[key]) {
                                    this[key] = this.options[key].user_setting;
                                } else {
                                    this[key] = this.options[key].value;
                                }
                            }
                        }

                        document.documentElement.addEventListener("load", function intercept(event) {
                            player_auto_play.interceptApplicationCreate(event, intercept);
                        }, true);
                        //document.documentElement.addEventListener("load", function intercept(event) {
                        //    player_auto_play.interceptYtPlayer(event, intercept);
                        //}, true);
                        //document.documentElement.addEventListener("load", function intercept(event) {
                        //    player_auto_play.intercept_yt_player(event, intercept);
                        //}, true);
                        /*document.documentElement.addEventListener("load", function intercept(event) {
                            player_auto_play.interceptSpfRequest_Material(event, intercept);
                        }, true);*/
                        /*document.addEventListener("spfrequest", function intercept(event) {
                            player_auto_play.interceptSpfRequest(event, intercept);
                        });*/
                    }
                }, {
                    options: {
                        about: {
                            id:      "about",
                            section: "about",
                            type:    "custom",
                            title:   "information and useful links"
                        }
                    }
                }
            ];

            particleApi = {
                ini: function() {
                    if (window.location.pathname === "/particle-settings") {
                        loadSettingsMenu();
                    } else {
                        initializeModules();
                    }
                }
            };

            /*window.onYouTubePlayerReady = function(api) {
                window.api = api;
                api.loadVideoByPlayerVars = api.cueVideoByPlayerVars;
            };*/

            /*window.onYouTubePlayerReady = (function intercept(original) {
                return function(api) {
                    var
                        player;
                    window.api = api;
                    api.loadVideoByPlayerVars = api.cueVideoByPlayerVars;

                    player = document.getElementById("movie_player");
                    if (player) {
                        console.log(player);
                        player.loadVideoByPlayerVars = player.cueVideoByPlayerVars;
                    }
                    if (original) {
                        return original.apply(this, arguments);
                    }
                };
            }(window.onYouTubePlayerReady));*/

            particleApi.ini();

            /*if (document.exitFullscreen) {
                fsexit = "exitFullscreen";
            } else if (document.webkitExitFullscreen) {
                fsexit = "webkitExitFullscreen";
            } else if (document.mozCancelFullScreen) {
                fsexit = "mozCancelFullScreen";
            } else {
                fsexit = "msExitFullscreen";
            }

            document[fsexit] = (function(original) {
                return function me() {
                    console.log(me.caller, this, arguments);
                    //return original.apply(this, arguments);
                }
            }(document[fsexit]));*/

            /*if (window.chrome) {
                document.documentElement.addEventListener("load", function(event) {
                    particleApi.interceptScriptLoaded(event);
                }, true);
            } else {
                document.addEventListener("afterscriptexecute", function(event) {
                    particleApi.interceptScriptLoaded(event);
                });
            }*/

            /*HTMLVideoElement.prototype.play = (function tracer(original) {
                return function() {
                    console.trace();
                    return original.apply(this, arguments);
                };
            }(HTMLVideoElement.prototype.play));*/

            /*
                yt-navigate
                yt-navigate-start
                yt-navigate-finish
            */

            //document.addEventListener("spfdone", particleApi.interceptSpfDone);
            //document.addEventListener("spfrequest", particleApi.interceptSpfRequest);
        },
        contentScriptMessages: function() {

            var
            key1,
            key2,
            gate,
            sets,
            locs,
            observer;

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
                    holder.href = "https://particlecore.github.io/Particle/stylesheets/Particle.css?v=0.0.1";
                    document.documentElement.appendChild(holder);
                }

                holder = document.createElement("script");
                holder.textContent = "(" + particle.inject + "(" + particle.is_userscript + "))";
                document.documentElement.appendChild(holder);
                holder.remove();

                if (!particle.is_userscript) {
                    chrome.storage.onChanged.addListener(particle.filterChromeKeys);
                }
            }
        },
        ini: function() {
            if (window.location.pathname === "/particle-settings") {
                window.stop();
            }

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
