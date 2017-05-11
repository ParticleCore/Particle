// ==UserScript==
// @version         0.0.2a
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

            function saveSettings(id, value) {

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
            particleApi,
            user_settings;

            user_settings = {};

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
                            label:       "Play videos automatically"
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
                    ini: function() {

                        var
                        key,
                        auto_play;

                        auto_play = this;

                        if (auto_play.started) {
                            return;
                        }

                        auto_play.started = true;

                        for (key in auto_play.options) {
                            if (auto_play.options.hasOwnProperty(key)) {
                                if (!(key in user_settings)) {
                                    user_settings[key] = auto_play.options[key].value;
                                }
                            }
                        }

                        Object.defineProperty(Object.prototype, "TIMING_AFT_KEYS", {
                            set: function(data) {
                                this._TIMING_AFT_KEYS = data;
                            },
                            get: function() {
                                var key;

                                if (window.ytcsi && window.ytcsi.data_ && window.ytcsi.data_.tick) {
                                    for (key in window.ytcsi.data_.tick) {
                                        return [key];
                                    }
                                } else {
                                    return ["srt"];
                                }

                                return this._TIMING_AFT_KEYS;
                            }
                        });

                        Object.defineProperty(Object.prototype, "loaded", {
                            set: function(data) {
                                this._loaded = data;
                            },
                            get: function() {
                                if (user_settings.player_auto_play && this.args) {
                                    return false;
                                }

                                return this._loaded;
                            },
                            configurable: true
                        });

                        Object.defineProperty(Object.prototype, "loadVideoByPlayerVars", {
                            set: function(data) {
                                this._loadVideoByPlayerVars = data;
                            },
                            get: function() {
                                if (user_settings.player_auto_play) {
                                    return this.cueVideoByPlayerVars;
                                }

                                return this._loadVideoByPlayerVars;
                            }
                        });

                        Object.defineProperty(Object.prototype, "autoplay", {
                            set: function(data) {
                                this._autoplay = data;
                            },
                            get: function() {
                                if (user_settings.player_auto_play && this.ucid && this._autoplay === "1") {
                                    return "0";
                                }

                                return this._autoplay;
                            }
                        });

                        Object.defineProperty(Object.prototype, "fflags", {
                            set: function(data) {
                                this._fflags = data;
                            },
                            get: function() {
                                if (user_settings.player_auto_play && this.ucid) {
                                    return this._fflags
                                        .replace(
                                            "legacy_autoplay_flag=true",
                                            "legacy_autoplay_flag=false"
                                        ).replace(
                                            "disable_new_pause_state3=true",
                                            "disable_new_pause_state3=false"
                                        ); // remove transition-delay
                                }

                                return this._fflags;
                            }
                        });
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

            particleApi.ini();
        },
        contentScriptMessages: function() {

            var
            key1,
            key2,
            gate,
            sets,
            locs,
            observer;

            key1 = "particle-save-settings";
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

                document.documentElement.removeAttribute("data-particle-save-settings");
            } else if (locs) {
                document.documentElement.dataset.setlocale = chrome.i18n.getMessage(locs);
            }
        },
        filterChromeKeys: function(keys) {
            if (keys[particle.id] && keys[particle.id].new_value) {
                document.documentElement.dataset.particleLoadSettings = JSON.stringify(
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
                document.documentElement.dataset.particleUserSettings = event;

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
