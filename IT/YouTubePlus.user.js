// ==UserScript==
// @version     1.4.0
// @name        YouTube +
// @namespace   https://github.com/ParticleCore
// @description YouTube with more freedom
// @icon        data:image/png;base64,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
// @match       https://www.youtube.com/*
// @run-at      document-start
// @downloadURL https://github.com/ParticleCore/Particle/raw/master/IT/YouTubePlus.user.js
// @grant       none
// @noframes
// ==/UserScript==
(function particle() {
    'use strict';
    var api,
        lang,
        injection,
        styleSheet,
        fullscreen,
        channelId = {},
        defaultSettings,
        usingChrome = typeof window.chrome === 'object';
    if (document.querySelector('[name="html5player/html5player"]')) {
        window.location.reload(false);
    } else if (!document.getElementById('Particle')) {
        injection = document.createElement('script');
        injection.id = 'Particle';
        injection.textContent = '(' + particle + '())';
        document.documentElement.appendChild(injection);
        return;
    }
    lang = {
        SHOW_CMTS: {
            en: 'Show comments',
            'pt-PT': 'Mostrar comentários'
        },
        HIDE_CMTS: {
            en: 'Hide comments',
            'pt-PT': 'Esconder comentários'
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
        EXT: {
            en: 'Extras',
            'pt-PT': 'Extras'
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
            'pt-PT': 'Esconder barra lateral nos canais'
        },
        GEN_ENHC: {
            en: 'Enhancements',
            'pt-PT': 'Melhorias'
        },
        GEN_USER_LNKS: {
            en: 'Enable user links in recommended videos',
            'pt-PT': 'Activar links dos utilizadores nos videos recomendados'
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
        GEN_CNTR_LYT: {
            en: 'Center navigation and footer',
            'pt-PT': 'Centrar barra de navegação e rodapé'
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
        VID_PLR_TYPE: {
            en: 'Player type:',
            'pt-PT': 'Tipo de player:'
        },
        VID_PLR_TYPE_FLSH: {
            en: 'Flash'
        },
        VID_PLR_TYPE_HTML: {
            en: 'HTML5'
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
        VID_PLR_VOL_MEM: {
            en: 'Memorize audio volume',
            'pt-PT': 'Memorizar volume de audio'
        },
        VID_PLR_ADS: {
            en: 'Disable advertisements',
            'pt-PT': 'Desactivar publicidades'
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
            en: 'Progress and controls bar visibility:',
            'pt-PT': 'Visibilidade das barras de progresso e controlo:'
        },
        VID_PLR_CTRL_VIS_HIDE_PROG: {
            en: 'Hide progress',
            'pt-PT': 'Esconder progresso'
        },
        VID_PLR_CTRL_VIS_HIDE_ALL: {
            en: 'Hide both',
            'pt-PT': 'Esconder ambos'
        },
        VID_PLR_CTRL_VIS_SHOW_ALL: {
            en: 'Show both',
            'pt-PT': 'Mostrar ambos'
        },
        VID_PLR_CTRL_VIS_RMV_ALL: {
            en: 'Remove both',
            'pt-PT': 'Remover ambos'
        },
        VID_PLR_FIT: {
            en: 'Fit to page in theater mode',
            'pt-PT': 'Ajustar na página no modo cinema'
        },
        VID_PLR_FIT_WDTH: {
            en: 'Fit to page max width:',
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
            'pt-PT': 'Título compacto ba descrição do vídeo'
        },
        CHN_TTL: {
            en: 'Channel settings',
            'pt-PT': 'Definições de canais'
        },
        CHN_FAV: {
            en: 'Favorites',
            'pt-PT': 'Favoritos'
        },
        CHN_FAV_ADS: {
            en: 'Enable ads in favorite channels',
            'pt-PT': 'Activar publicidades nos canais favoritos'
        },
        CHN_ALK: {
            en: 'Auto-like',
            'pt-PT': 'Gostar automaticamente'
        },
        CHN_BVR: {
            en: 'Behavior',
            'pt-PT': 'Comportamento'
        },
        CHN_TRL_ATP: {
            en: 'Disable trailer autoplay',
            'pt-PT': 'Desactivar começo automático do trailer'
        },
        CHN_DFLT_PAGE: {
            en: 'Default landing page:',
            'pt-PT': 'Página de destino:'
        },
        CHN_DFLT_PAGE_DFLT: {
            en: 'Default',
            'pt-PT': 'Padrão'
        },
        CHN_DFLT_PAGE_VID: {
            en: 'Videos',
            'pt-PT': 'Vídeos'
        },
        CHN_DFLT_PAGE_PL: {
            en: 'Playlists',
            'pt-PT': 'Listas de reprodução'
        },
        CHN_DFLT_PAGE_CHN: {
            en: 'Channels',
            'pt-PT': 'Canais'
        },
        CHN_DFLT_PAGE_DISC: {
            en: 'Discussion',
            'pt-PT': 'Discussão'
        },
        CHN_DFLT_PAGE_ABT: {
            en: 'About',
            'pt-PT': 'Acerca de'
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
    defaultSettings = {
        GEN_YT_LOGO_LINK: true,
        GEN_BLUE_GLOW: true,
        VID_END_SHRE: true,
        VID_DFLT_QLTY: 'auto',
        VID_PLR_TYPE: 'html5',
        VID_PLST_ATPL: true,
        VID_PLST_RVRS: true,
        VID_PLR_FIT_WDTH: '1280px',
        VID_PROG_BAR_CLR: 'red',
        VID_CTRL_BAR_CLR: 'light',
        VID_PLR_SIZE_MEM: true,
        CHN_DFLT_PAGE: 'channels',
        volLev: false,
        plApl: true,
        plRev: false,
        theaterMode: true
    };
    window.localStorage.Particle = window.localStorage.Particle || JSON.stringify(defaultSettings);
    function string2HTML(string) {
        var mortar = new window.DOMParser();
        return mortar.parseFromString(string, 'text/html');
    }
    function get(a) {
        return JSON.parse(window.localStorage.Particle)[a];
    }
    function set(a, b) {
        var userSettings = JSON.parse(window.localStorage.Particle);
        if (b !== undefined) {
            userSettings[a] = b;
        } else {
            delete userSettings[a];
        }
        window.localStorage.Particle = JSON.stringify(userSettings);
    }
    function userLang(a) {
        var ytlang = window.yt.config_.FEEDBACK_LOCALE_LANGUAGE || 'en';
        return lang[a][ytlang];
    }
    styleSheet = document.createElement('style');
    styleSheet.id = 'P-style';
    styleSheet.textContent = [
        'input[type="checkbox"], input[type="radio"]{\n',
        '    opacity: 0;\n',
        '}\n',
        ':focus{\n',
        '    outline: none;\n',
        '}\n',
        '::-moz-focus-inner{\n',
        '    border: 0;\n',
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
        '.not-yt-legacy-css .watch-sidebar{\n',
        '    width: initial;\n',
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
        '#P-settings{\n',
        '    background: #f1f1f1;\n',
        '    height: 100%;\n',
        '    left: 0;\n',
        '    position: absolute;\n',
        '    right: 0;\n',
        '    z-index: 1000;\n',
        '}\n',
        '#P-sidebar, #P-content{\n',
        '    -moz-user-select: none;\n',
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
        '    cursor: pointer;\n',
        '    margin-left: 5px;\n',
        '    background-image: linear-gradient(#FCFCFC, #F8F8F8);\n',
        '    border: 1px solid #d3d3d3;\n',
        '    color: #333 !important;\n',
        '    font-family: arial,sans-serif;\n',
        '    font-size: 11px;\n',
        '    font-weight: bold;\n',
        '    height: 26px;\n',
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
        '.P-save{\n',
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
        '#P{\n',
        '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAAk1BMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEGrSNAAAAMHRSTlMAAOy/fwv6+XxgQOiP5PYXbi/OT7Q135UdMAd3ndNaCY3YDvuaIbc50lV0CpMbojQR/p9JAAAAfElEQVR4XmXMRRLEMBRDQVN4mJkZ//1PNxqnspD9ll0lKc62tNaBif3bqh9b2tl1m6H4nDIi7d7CW+GcTJwrYWgwpC0MyWgcm2TTGayc19ZULRMoGVpvtmy+PLJ9kQRm8kPwdzydIWSXK4DsdgeQVY+nIkuz1xtA9vkC2H44qRgsX16KtQAAAABJRU5ErkJggg==") no-repeat 0 4px;\n',
        '    margin-left: 10px;\n',
        '    cursor: pointer;\n',
        '    opacity: 0.55;\n',
        '    height: 28px;\n',
        '    width: 19px;\n',
        '    vertical-align: middle;\n',
        '}\n',
        '#P:hover{\n',
        '    opacity: 0.85;\n',
        '}\n',
        '.P-hide{\n',
        '    display: none;\n',
        '}\n',
        '#body #uploaded-videos{\n',
        '    font-size: 11px;\n',
        '    color: #666;\n',
        '    display: initial;\n',
        '    font-weight: initial;\n',
        '    overflow: initial;\n',
        '    vertical-align: initial;\n',
        '}\n',
        '.yt-user-info > span{\n',
        '    font-size: 11px;\n',
        '    color: #666;\n',
        '}\n',
        '#header, #feed-pyv-container, .video-list-item:not(.related-list-item), .pyv-afc-ads-container, .ad-div{\n',
        '    display: none;\n',
        '}\n',
        '#masthead-appbar{\n',
        '    display: block !important;\n',
        '}\n',
        '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-reverse-video-list{\n',
        '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEX///////////////////////////////////////////////////////////////////////8BOg0gAAAAEXRSTlMA8KS9FQYBt8gPhw6JigvJyoYcNuUAAABRSURBVHhevdE5DsAgDERRs8ZAtrn/ZaMIiSKD5AbllX8qg/wubnHam0JPYSkACIl69nj5LB8VXRXm4EbggdvKYbCHHd1hHc3PxMqFuxhfsdwDNLwDxD27Q0MAAAAASUVORK5CYII=") no-repeat;\n',
        '    width: 24px;\n',
        '    height: 24px;\n',
        '}\n',
        '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-autoplay-video-list{\n',
        '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+hBK93AAAAJHRSTlMAAPT+sPxAEPcUSbmkAcWYHTWQK8+DJIKN+pcZoB+oJzC6OMQ+rrabAAAAY0lEQVQokbXQNw6AQBADwIMj55wz/v8b6RBI3g7cjrTBSn2c2HjnhioQAEgcAYAwFwCwSgGgo4YDYKcZB8ArfA6AWbsCtBS8jo7qh5Ett6eZnauXlT5obbSS/aAlnq9uH/BvLpzPEZ02MKzwAAAAAElFTkSuQmCC") no-repeat;\n',
        '    width: 24px;\n',
        '    height: 24px;\n',
        '}\n',
        '#player{\n',
        '    position: relative;\n',
        '    width: 100% !important;\n',
        '}\n',
        '#theater-background{\n',
        '    height: 100% !important;\n',
        '}\n',
        '#player #player-api, #player #player-unavailable{\n',
        '    position: relative !important;\n',
        '    height: auto !important;\n',
        '}\n',
        '#player:not(.watch-small) #player-api, #player:not(.watch-small) #player-unavailable{\n',
        '    max-width: ' + get('VID_PLR_FIT_WDTH') + ' !important;\n',
        '    width: 100% !important;\n',
        '}\n',
        '#player #player-api:before, #player #player-unavailable:before{\n',
        '    content: "";\n',
        '    display: block;\n',
        '    padding-top: 56.25%\n',
        '}\n',
        '#player #movie_player{\n',
        '    bottom: 0 !important;\n',
        '    left: 0 !important;\n',
        '    position: absolute !important;\n',
        '    right: 0 !important;\n',
        '    top: 0 !important;\n',
        '}\n',
        '#player-unavailable:not(.hid) + #player-api{\n',
        '    display: none;\n',
        '}\n',
        '.watch-stage-mode #player-unavailable{\n',
        '    margin: 0 auto;\n',
        '    float: none;\n',
        '}\n'
    ].join('');
    document.documentElement.appendChild(styleSheet);
    function xhr(a, b, c) {
        var request = new XMLHttpRequest();
        function process() {
            c(request.responseText);
        }
        request.onload = process;
        request.open(a, b, true);
        request.send();
    }
    function settingsMenu() {
        var pContent,
            pContainer,
            buttonsSection,
            settingsButton,
            htEl = {
                title: function (content, tag) {
                    return '<' + tag + '>' + userLang(content) + '</' + tag + '>\n';
                },
                select: function (id, list) {
                    var select = '<label for="' + id + '">' + userLang(id) + '</label>\n' +
                        '<select id="' + id + '">\n';
                    Object.keys(list).forEach(function (a) {
                        select += '<option';
                        if (get(id) === list[a]) {
                            select += ' selected="true"';
                        }
                        select += ' value="' + list[a] + '">' + userLang(a) + '</option>\n';
                    });
                    select += '</select>\n';
                    return select;
                },
                radio: function (name, list) {
                    var radio = '<label>' + userLang(name) + '</label>\n';
                    Object.keys(list).forEach(function (a) {
                        radio += '<input id="' + a + '" name="' + name + '" value="' + list[a] + '" type="radio"';
                        if (get(name) === list[a]) {
                            radio += ' checked="true"';
                        }
                        radio += '>\n<label for="' + a + '">' + userLang(a) + '</label>';
                    });
                    return radio;
                },
                input: function (id, type, placeholder, size) {
                    var input = '<input id="' + id + '" type="' + type + '"';
                    if (placeholder) {
                        input += ' placeholder="' + placeholder + '" size="' + size + '"';
                        if (typeof get(id) === 'string') {
                            input += ' value="' + get(id) + '"';
                        }
                    } else if (get(id) === true) {
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
                    '                <li id="CHN">' + userLang('CHN') + '</li>\n',
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
                    htEl.title('GEN_TTL', 'h2'),
                    '    </div>\n',
                    '    <hr class="P-horz">\n',
                    htEl.title('GEN_GEN', 'h3'),
                    htEl.input('GEN_YT_LOGO_LINK', 'checkbox'),
                    htEl.title('GEN_LYT', 'h3'),
                    htEl.input('GEN_BTTR_NTF', 'checkbox'),
                    htEl.input('GEN_DSB_HVRC', 'checkbox'),
                    htEl.input('GEN_CNTR_LYT', 'checkbox'),
                    htEl.input('GEN_CMPT_TTLS', 'checkbox'),
                    htEl.input('GEN_BLUE_GLOW', 'checkbox'),
                    htEl.input('GEN_HIDE_FTR', 'checkbox'),
                    htEl.input('GEN_HDE_RECM_SDBR', 'checkbox'),
                    htEl.input('GEN_HDE_SRCH_SDBR', 'checkbox'),
                    htEl.input('GEN_HDE_CHN_SDBR', 'checkbox'),
                    htEl.title('GEN_ENHC', 'h3'),
                    htEl.input('GEN_USER_LNKS', 'checkbox'),
                    '</div>\n'
                ].join(''),
                VID: [
                    '<div id="P-content">\n',
                    '    <div class="P-header">\n',
                    '        <button class="P-save">' + userLang('GLB_SVE') + '</button>\n',
                    htEl.title('VID_TTL', 'h2'),
                    '    </div>\n',
                    '    <hr class="P-horz">\n',
                    htEl.title('VID_PLR', 'h3'),
                    htEl.input('VID_PLR_ATPL', 'checkbox'),
                    htEl.input('VID_PLR_ADS', 'checkbox'),
                    htEl.input('VID_PLR_CC', 'checkbox'),
                    htEl.input('VID_PLR_ANTS', 'checkbox'),
                    htEl.input('VID_END_SHRE', 'checkbox'),
                    htEl.input('VID_PLR_VOL_MEM', 'checkbox'),
                    htEl.input('VID_PLR_SIZE_MEM', 'checkbox'),
                    htEl.input('VID_PLR_DASH', 'checkbox'),
                    htEl.radio('VID_PLR_TYPE', {
                        'VID_PLR_TYPE_FLSH': 'flash',
                        'VID_PLR_TYPE_HTML': 'html5'
                    }),
                    '    <br>',
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
                        'VID_PLR_CTRL_VIS_HIDE_PROG': '2',
                        'VID_PLR_CTRL_VIS_HIDE_ALL': '1',
                        'VID_PLR_CTRL_VIS_SHOW_ALL': '0',
                        'VID_PLR_CTRL_VIS_RMV_ALL': '3'
                    }),
                    '    <br>',
                    htEl.title('VID_PLST', 'h3'),
                    htEl.input('VID_PLST_SEP', 'checkbox'),
                    htEl.input('VID_PLST_ATPL', 'checkbox'),
                    htEl.input('VID_PLST_RVRS', 'checkbox'),
                    htEl.title('VID_LAYT', 'h3'),
                    htEl.input('VID_TTL_CMPT', 'checkbox'),
                    htEl.input('VID_DESC_SHRT', 'checkbox'),
                    htEl.input('VID_VID_CNT', 'checkbox'),
                    htEl.input('VID_POST_TIME', 'checkbox'),
                    htEl.input('VID_HIDE_COMS', 'checkbox'),
                    '</div>\n'
                ].join(''),
                CHN: [
                    '<div id="P-content">\n',
                    '    <div class="P-header">\n',
                    '        <button class="P-save">' + userLang('GLB_SVE') + '</button>\n',
                    htEl.title('CHN_TTL', 'h2'),
                    '    </div>\n',
                    '    <hr class="P-horz">\n',
                    htEl.title('CHN_FAV', 'h3'),
                    htEl.input('CHN_FAV_ADS', 'checkbox'),
                    htEl.input('CHN_ALK', 'checkbox'),
                    htEl.title('CHN_BVR', 'h3'),
                    htEl.input('CHN_TRL_ATP', 'checkbox'),
                    htEl.select('CHN_DFLT_PAGE', {
                        'CHN_DFLT_PAGE_DFLT': 'default',
                        'CHN_DFLT_PAGE_VID': 'videos',
                        'CHN_DFLT_PAGE_PL': 'playlists',
                        'CHN_DFLT_PAGE_CHN': 'channels',
                        'CHN_DFLT_PAGE_DISC': 'discussion',
                        'CHN_DFLT_PAGE_ABT': 'about'
                    }),
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
        function navigateSettings(a) {
            function saveSettings() {
                var value,
                    navId = document.querySelector('.selected').id,
                    savedSets = JSON.parse(window.localStorage.Particle),
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
                window.localStorage.Particle = JSON.stringify(savedSets);
            }
            if (a.target.classList.contains('P-save')) {
                saveSettings();
            } else if (a.target.parentNode.id === 'P-sidebar-list') {
                document.getElementById('P-content').remove();
                pContainer = document.getElementById('P-container');
                pContent = string2HTML(menus[a.target.id]).querySelector('#P-content');
                pContainer.appendChild(pContent);
                a.target.parentNode.querySelector('.selected').removeAttribute('class');
                a.target.className = 'selected';
            }
        }
        function settingsTemplate() {
            var bodyContainer,
                pageContainer,
                pWrapper = document.getElementById('P-settings');
            if (pWrapper) {
                pWrapper.classList.toggle('P-hide');
            } else {
                bodyContainer = document.getElementById('body-container');
                pageContainer = document.getElementById('page-container');
                pWrapper = string2HTML(menus.setMenu).querySelector('#P-settings');
                pWrapper.querySelector('#P-container').appendChild(string2HTML(menus.GEN).querySelector('#P-content'));
                bodyContainer.insertBefore(pWrapper, pageContainer);
                pWrapper.addEventListener('click', navigateSettings);
            }
            document[usingChrome ? 'body' : 'documentElement'].scrollTop = 0;
        }
        buttonsSection = document.getElementById('yt-masthead-user') || document.getElementById('yt-masthead-signin');
        if (buttonsSection && !document.getElementById('P')) {
            settingsButton = document.createElement('button');
            settingsButton.id = 'P';
            settingsButton.title = 'YouTube+ settings';
            settingsButton.addEventListener('click', settingsTemplate);
            buttonsSection.appendChild(settingsButton);
        }
    }
    function customStyles() {
        var href = window.location.href;
        if ((get('GEN_HDE_RECM_SDBR') && href.split('/feed/').length > 1) || (get('GEN_HDE_SRCH_SDBR') && href.split('/results').length > 1) || (get('GEN_HDE_CHN_SDBR') && /\/(channel|user|c)\//.test(href))) {
            if (document.querySelector('.branded-page-v2-secondary-col')) {
                document.querySelector('.branded-page-v2-secondary-col').remove();
            }
        }
        if (document.readyState !== 'interactive') {
            return;
        }
        if (get('VID_DESC_SHRT')) {
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
        if (get('VID_TTL_CMPT')) {
            styleSheet.textContent +=
                '#watch-headline-title{\n' +
                '    display: block !important;\n' +
                '    white-space: nowrap !important;\n' +
                '}\n' +
                '#watch-headline-title h1{\n' +
                '    display: block !important;\n' +
                '    text-overflow: ellipsis !important;\n' +
                '}\n';
        }
        if (get('GEN_CMPT_TTLS')) {
            styleSheet.textContent +=
                '.feed-item-container .yt-ui-ellipsis, .yt-shelf-grid-item .yt-ui-ellipsis{\n' +
                '    white-space: nowrap !important;\n' +
                '    display: inherit !important;\n' +
                '}\n';
        }
        if (get('GEN_CNTR_LYT')) {
            styleSheet.textContent +=
                '#yt-masthead, #footer{\n' +
                '    max-width: 1262px !important;\n' +
                '}\n';
        }
        if (get('GEN_BLUE_GLOW')) {
            styleSheet.textContent +=
                '.yt-uix-button:focus, .yt-uix-button:focus:hover{\n' +
                '    box-shadow: initial !important;\n' +
                '}\n';
        }
        if (get('GEN_BTTR_NTF')) {
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
        if (get('GEN_HIDE_FTR')) {
            styleSheet.textContent +=
                '#footer-container{\n' +
                '    visibility: hidden;\n' +
                '}\n' +
                '#body-container{\n' +
                '    padding-bottom: initial;\n' +
                '}\n';
        }
        if (get('VID_PLST_SEP')) {
            styleSheet.textContent +=
                '#watch-appbar-playlist{\n' +
                '    margin-left: 0 !important;\n' +
                '}\n';
        }
        if (!get('VID_PLR_FIT')) {
            styleSheet.textContent +=
                '#body #player:not(.watch-small) #player-api{\n' +
                '    width: 854px !important;\n' +
                '}\n' +
                '@media screen and (min-width:1320px) and (min-height:870px){\n' +
                '    #body #player: not(.watch-small) #player-api{\n' +
                '        width: 1280px !important;\n' +
                '    }\n' +
                '}\n';
        }
        if (get('GEN_DSB_HVRC')) {
            styleSheet.textContent +=
                'iframe[src*="hovercard"]{\n' +
                '    display: none !important;\n' +
                '}\n';
        }
        if (get('VID_PLR_CTRL_VIS') > 1) {
            styleSheet.textContent +=
                '#player-api{\n' +
                '    padding-bottom: 30px;\n' +
                '}\n';
        } else if (get('VID_PLR_CTRL_VIS') < 1) {
            styleSheet.textContent +=
                '#player-api{\n' +
                '   padding-bottom: 35px;\n' +
                '}\n';
        } else if (get('VID_PLR_CTRL_VIS') === '1') {
            styleSheet.textContent +=
                '#player-api{\n' +
                '    padding-bottom: 0;\n' +
                '}\n';
        }
        if (get('VID_PLR_DYN_SIZE')) {
            styleSheet.textContent +=
                '.watch-non-stage-mode #watch7-content{\n' +
                '    width: 640px !important;\n' +
                '}\n' +
                '.watch-non-stage-mode #content.content-alignment, .watch-non-stage-mode #player.watch-small{\n' +
                '    max-width: 1066px !important;\n' +
                '}\n' +
                '.watch-non-stage-mode #watch7-preview{\n' +
                '    margin-top: -750px !important;\n' +
                '}\n' +
                '.watch-non-stage-mode #watch7-sidebar{\n' +
                '    margin-left: 650px !important;\n' +
                '    margin-top: ';
            if (get('VID_PLR_CTRL_VIS') > 1) {
                styleSheet.textContent += '-390px';
            } else if (get('VID_PLR_CTRL_VIS') < 1) {
                styleSheet.textContent += '-395px';
            } else if (get('VID_PLR_CTRL_VIS') === '1') {
                styleSheet.textContent += '-360px';
            }
            styleSheet.textContent +=
                ';\n' +
                '    top: 0;\n' +
                '}\n' +
                '.watch-non-stage-mode .player-width{\n' +
                '    width: 640px !important;\n' +
                '}\n' +
                '.watch-non-stage-mode .player-height{\n' +
                '    height: 390px !important;\n' +
                '}\n' +
                '.watch-non-stage-mode .watch-playlist{\n' +
                '    height: ';
            if (get('VID_PLR_CTRL_VIS') > 1) {
                styleSheet.textContent += '390px';
            } else if (get('VID_PLR_CTRL_VIS') < 1) {
                styleSheet.textContent += '395px';
            } else if (get('VID_PLR_CTRL_VIS') === '1') {
                styleSheet.textContent += '360px';
            }
            styleSheet.textContent +=
                ' !important;\n' +
                '}\n';
        }
        if (!get('VID_PLR_DYN_SIZE')) {
            styleSheet.textContent +=
                '#watch7-sidebar{\n' +
                '    margin-top: ';
            if (get('VID_PLR_CTRL_VIS') > 1) {
                styleSheet.textContent += '-390px';
            } else if (get('VID_PLR_CTRL_VIS') < 1) {
                styleSheet.textContent += '-395px';
            } else if (get('VID_PLR_CTRL_VIS') === '1') {
                styleSheet.textContent += '-360px';
            }
            styleSheet.textContent +=
                ';\n' +
                '}\n' +
                '#watch-appbar-playlist{\n' +
                '    height: ';
            if (get('VID_PLR_CTRL_VIS') > 1) {
                styleSheet.textContent += '390px';
            } else if (get('VID_PLR_CTRL_VIS') < 1) {
                styleSheet.textContent += '395px';
            } else if (get('VID_PLR_CTRL_VIS') === '1') {
                styleSheet.textContent += '360px';
            }
            styleSheet.textContent +=
                ';\n' +
                '}\n' +
                '@media screen and (min-width:1294px) and (min-height:630px){\n' +
                '    #watch-appbar-playlist{\n' +
                '        height: ';
            if (get('VID_PLR_CTRL_VIS') > 1) {
                styleSheet.textContent += '510px';
            } else if (get('VID_PLR_CTRL_VIS') < 1) {
                styleSheet.textContent += '515px';
            } else if (get('VID_PLR_CTRL_VIS') === '1') {
                styleSheet.textContent += '480px';
            }
            styleSheet.textContent +=
                ';\n' +
                '    }\n' +
                '}\n' +
                '@media screen and (min-width:1720px) and (min-height:980px){\n' +
                '    #watch-appbar-playlist{\n' +
                '    height: ';
            if (get('VID_PLR_CTRL_VIS') > 1) {
                styleSheet.textContent += '750px';
            } else if (get('VID_PLR_CTRL_VIS') < 1) {
                styleSheet.textContent += '755px';
            } else if (get('VID_PLR_CTRL_VIS') === '1') {
                styleSheet.textContent += '720px';
            }
            styleSheet.textContent +=
                ';\n' +
                '    }\n' +
                '}\n';
        }
        if (get('VID_HIDE_COMS')) {
            styleSheet.textContent +=
                '#watch-discussion{\n' +
                '    opacity: 0;\n' +
                '    height :0;\n' +
                '    overflow: hidden;\n' +
                '}\n' +
                '#P-show-comments button{\n' +
                '    border-top: none;\n' +
                '    padding-top: 2px;\n' +
                '}\n' +
                '.show{\n' +
                '    opacity: 1 !important;\n' +
                '    height: auto !important;\n' +
                '}\n';
        }
    }
    function enhancedDetails() {
        function username() {
            var link,
                span,
                user,
                verified,
                name = document.querySelector('.yt-user-info');
            function videoCounter() {
                link.href = user.getAttribute('href') + '/videos';
                span = document.createElement('span');
                span.textContent = ' · ';
                name.appendChild(span);
                name.appendChild(link);
                verified = document.querySelector('.yt-channel-title-icon-verified');
                if (verified) {
                    user.className += ' yt-uix-tooltip';
                    user.setAttribute('data-tooltip-text', verified.getAttribute('data-tooltip-text'));
                    user.style.color = '#167ac6';
                    verified.remove();
                }
            }
            function getInfo(a) {
                link.className = 'spf-link';
                link.textContent = channelId[user.getAttribute('data-ytid')] = JSON.parse(a).body.content.match(/class="pl-header-details">([\w\W]*?)<\/ul>/)[1].split('</li><li>')[1].replace('</li>', '').replace('&#39;', '\'');
                videoCounter();
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
                    xhr('GET', '/playlist?spf=navigate&list=' + user.getAttribute('data-ytid').replace('UC', 'UU'), getInfo);
                }
            }
        }
        function publishedTime() {
            var watchTime = document.querySelector('.watch-time-text');
            function getInfo(a) {
                if (watchTime.textContent.split('·').length < 2) {
                    a = JSON.parse(a).body.content.match(/yt-lockup-meta-info">\n<li>([\w\W]*?)<\/ul/);
                    if (a) {
                        watchTime.textContent += ' · ' + a[1].split('</li><li>')[0];
                    }
                }
            }
            if (watchTime) {
                xhr('GET', '/channel/' + window.ytplayer.config.args.ucid + '/search?spf=navigate&query="' + window.ytplayer.config.args.video_id, getInfo);
            }
        }
        if (window.location.href.split('/watch').length > 1) {
            if (get('VID_VID_CNT')) {
                username();
            }
            if (get('VID_POST_TIME')) {
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
        if (comments && !document.getElementById('P-show-comments') && get('VID_HIDE_COMS')) {
            wrapper = [
                '<div id="P-show-comments" class="yt-card">\n',
                '    <button class="yt-uix-button yt-uix-button-expander">' + userLang('SHOW_CMTS') + '</button>\n',
                '</div>\n'
            ].join('');
            wrapper = string2HTML(wrapper).querySelector('#P-show-comments');
            wrapper.addEventListener('click', showComments, false);
            comments.parentNode.insertBefore(wrapper, comments);
        }
    }
    function playerMode() {
        var playerElement,
            cookie = document.cookie;
        if (get('VID_PLR_SIZE_MEM') && get('theaterMode') && (cookie.split('wide=0').length > 1 || cookie.split('wide=1').length < 1)) {
            document.cookie = 'wide=1; domain=.youtube.com; path=/';
            document.cookie = 'wide=1; domain=www.youtube.com; path=/';
            playerElement = document.getElementById('player');
            if (playerElement && window.location.href.split('/watch').length > 1) {
                playerElement.className = 'watch-large';
                document.getElementById('watch7-container').className = 'watch-wide';
            }
        }
    }
    function argsCleaner(a) {
        var base = (a.args.iurl_webp) ? '_webp' : '',
            hdThumb,
            maxRes;
        function checkThumbnail(b) {
            var img,
                hdURL = b.args['iurl' + base].replace('hqdefault', 'maxresdefault');
            function widthReport() {
                if (img.width > 120 && !b.args['iurlmaxres' + base] && api && api.getPlayerState && api.getPlayerState() === 5) {
                    ['iurl', 'iurlsd', 'iurlmq', 'iurlhq', 'iurlmaxres'].forEach(function (c) {
                        b.args[c + base] = hdURL;
                    });
                    api.cueVideoByPlayerVars(b.args);
                    api.setPlaybackQuality(get('VID_DFLT_QLTY'));
                    if (get('VID_PLR_VOL_MEM')) {
                        api.setVolume(get('volLev') || 50);
                    }
                    img.removeEventListener('load', widthReport);
                }
            }
            img = new Image();
            img.addEventListener('load', widthReport);
            img.src = hdURL;
        }
        if (a.args.video_id) {
            if (get('VID_PLR_ADS')) {
                delete a.args.ad3_module;
            }
            if (get('VID_PLR_SIZE_MEM') && get('theaterMode')) {
                a.args.player_wide = '1';
            }
            if (a.args.iv_load_policy) {
                a.args.iv_load_policy = (get('VID_PLR_ANTS')) ? '3' : '1';
            }
            if (a.args.cc_load_policy) {
                a.args.cc_load_policy = (get('VID_PLR_CC')) ? '0' : '1';
            }
            if (get('VID_PLR_CTRL_VIS') === '3') {
                a.args.controls = '0';
            } else {
                a.args.autohide = get('VID_PLR_CTRL_VIS');
            }
            a.args.dash = (get('VID_PLR_DASH')) ? '0' : '1';
            a.args.vq = get('VID_DFLT_QLTY');
            a.args.autoplay = (get('VID_PLR_ATPL')) ? '1' : '0';
            a.args.theme = get('VID_CTRL_BAR_CLR');
            a.args.color = get('VID_PROG_BAR_CLR');
            a.html5 = get('VID_PLR_TYPE') === 'html5';
            a.params.wmode = 'gpu';
            if (a.args.autoplay === '0') {
                hdThumb = document.querySelector('[href*="maxresdefault"]') || document.querySelector('[content*="maxresdefault"]');
                maxRes = hdThumb && (hdThumb.getAttribute('href') || hdThumb.getAttribute('content'));
                a.args['iurlmaxres' + base] = a.args['iurlmaxres' + base] || maxRes || false;
                if (a.args['iurlmaxres' + base] === false || (a.args['iurlmaxres' + base] && a.args['iurlmaxres' + base].split(a.args.video_id).length < 2)) {
                    delete a.args['iurlmaxres' + base];
                    checkThumbnail(a);
                } else if (a.args['iurlmaxres' + base]) {
                    ['iurl', 'iurlsd', 'iurlmq', 'iurlhq'].forEach(function (b) {
                        a.args[b + base] = a.args['iurlmaxres' + base];
                    });
                }
            }
            if (window.location.href.split('/watch').length > 1 && window.ytplayer && window.ytplayer.config === null) {
                window.ytplayer.config = a;
            }
        }
    }
    function playerReady(a) {
        function playerState() {
            var args = {},
                vidData = api.getVideoData(),
                beacon = vidData.video_id + vidData.list;
            function go(c) {
                c.split('&').forEach(function (d) {
                    args[d.split('=')[0]] = window.decodeURIComponent(d.split('=')[1].replace(/\+/g, ' '));
                });
                window.ytplayer.config.args = args;
                argsCleaner(window.ytplayer.config);
                api.cueVideoByPlayerVars(window.ytplayer.config.args);
                api.setPlaybackQuality(get('VID_DFLT_QLTY'));
                api.playVideo();
            }
            if (document.getElementById('movie_player') && fullscreen && window.beacon !== beacon) {
                window.beacon = beacon;
                xhr('GET', '/get_video_info?el=detailpage&video_id=' + vidData.video_id + ((vidData.list && ('&list=' + vidData.list)) || ''), go);
            }
        }
        function playerFullscreen(b) {
            window.beacon = api.getVideoData().video_id + api.getVideoData().list;
            fullscreen = b.fullscreen;
        }
        function sizeChanged(b) {
            set('theaterMode', b);
        }
        function volumeChanged(b) {
            set('volLev', b.volume);
        }
        if (typeof a === 'object' && !document.getElementById('c4-player')) {
            api = a;
            api.addEventListener('onFullscreenChange', playerFullscreen, false);
            api.addEventListener('onVolumeChange', volumeChanged, false);
            api.addEventListener('onStateChange', playerState, false);
            api.addEventListener('SIZE_CLICKED', sizeChanged, false);
            if (!get('VID_PLR_ATPL')) {
                if (document.querySelector('video')) {
                    document.querySelector('video').removeAttribute('src');
                }
                argsCleaner(window.ytplayer.config);
                api.cueVideoByPlayerVars(window.ytplayer.config.args);
            }
            api.setPlaybackQuality(get('VID_DFLT_QLTY'));
            if (get('VID_PLR_VOL_MEM')) {
                api.setVolume(get('volLev') || 50);
            }
        }
    }
    function scriptEntry(a) {
        var ytConfig;
        if (a.target.textContent.split('var ytplayer = ytplayer').length > 1) {
            a.preventDefault();
            a.stopPropagation();
            if (window.location.href.split('/watch').length > 1) {
                ytConfig = a.target.textContent.match(/ytplayer\.config = \{([\w\W]*?)\};/)[1];
                window.ytplayer = window.ytplayer || {};
                window.ytplayer.config = JSON.parse('{' + ytConfig + '}');
                argsCleaner(window.ytplayer.config);
                a.target.remove();
            }
        } else if (a.target.textContent.split('ytspf.enabled = false').length > 1) {
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
                if (get('VID_END_SHRE')) {
                    window.yt.config_.SHARE_ON_VIDEO_END = false;
                }
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
                if (api) {
                    api.setPlaybackQuality(get('VID_DFLT_QLTY'));
                }
            };
        }
        function autoplayDetour(b) {
            return function () {
                var args = arguments;
                if (!args[1] || get('plApl') || (!get('plApl') && args[1].feature && args[1].feature !== 'autoplay')) {
                    b.apply(this, arguments);
                }
            };
        }
        function html5Detour(b) {
            return function () {
                var pi,
                    args = arguments;
                function html5Pointers(c, d) {
                    return function () {
                        var player,
                            canvas,
                            changed = c.apply(this, arguments);
                        if (changed.width && changed.height && !fullscreen) {
                            player = document.getElementById('movie_player');
                            canvas = document.querySelector('.html5-video-container');
                            if (player && canvas) {
                                changed.width = (d && player.offsetWidth) || canvas.offsetWidth;
                                changed.height = (d && player.offsetHeight) || canvas.offsetHeight;
                            }
                        }
                        return changed;
                    };
                }
                if (args[0].id === 'upsell-video') {
                    b.apply(this, arguments);
                } else if (typeof args[0] === 'object') {
                    pi = b.apply(this, arguments);
                    Object.keys(pi).forEach(function (c) {
                        if (typeof pi[c] === 'object' && pi[c] && pi[c].element) {
                            Object.keys(Object.getPrototypeOf(pi[c])).forEach(function (d) {
                                if (typeof pi[c][d] === 'function' && (pi[c][d] + String()).split('"detailpage"!=').length > 1) {
                                    if ((pi[c][d] + String()).split('!0)').length > 1) {
                                        pi[c][d] = html5Pointers(pi[c][d], '');
                                    } else if ((pi[c][d] + String()).split('!0)').length < 2) {
                                        pi[c][d] = html5Pointers(pi[c][d]);
                                    }
                                }
                            });
                        }
                    });
                }
            };
        }
        function html5Fix(b) {
            return function () {
                var changed = b.apply(this, arguments);
                if (changed && changed.list && changed.index !== changed.video.length - 1) {
                    changed.loop = false;
                    changed.index = changed.video.length - 1;
                }
                return changed;
            };
        }
        a = a.target.getAttribute('name');
        if (a) {
            if (a === 'www/base') {
                window.yt.setConfig = baseDetour(window.yt.setConfig);
                Object.keys(window._yt_www).some(function (b) {
                    if (typeof window._yt_www[b] === 'function') {
                        if ((window._yt_www[b] + String()).split('player-added').length > 1) {
                            window._yt_www[b] = embedDetour(window._yt_www[b]);
                        } else if ((window._yt_www[b] + String()).split('window.spf.navigate').length > 1) {
                            window._yt_www[b] = autoplayDetour(window._yt_www[b]);
                        }
                    }
                });
            } else if (a === 'www/watch') {
                window.yt.www.watch.lists.getState = html5Fix(window.yt.www.watch.lists.getState);
            } else if (a === 'html5player/html5player') {
                window.yt.player.Application.create = html5Detour(window.yt.player.Application.create);
            }
        }
    }
    function title() {
        var observer,
            config = {childList: true},
            titleElement = document.querySelector('title'),
            titleStatus = titleElement.id === 'observing',
            currentState = api && api.getPlayerState && api.getPlayerState();
        if (!titleStatus) {
            titleElement.id = 'observing';
            observer = new window.MutationObserver(title);
            observer.observe(titleElement, config);
        } else if (titleStatus && titleElement.textContent.split('▶').length > 1 && !(currentState && currentState > -1 && currentState < 5)) {
            titleElement.textContent = titleElement.textContent.replace('▶ ', '');
        }
    }
    function plControls() {
        var href = window.location.href;
        function reverseControl() {
            var temp,
                prev = document.querySelector('.prev-playlist-list-item'),
                next = document.querySelector('.next-playlist-list-item'),
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
            if (api) {
                api.updatePlaylist();
            }
            list.scrollTop = document.querySelector('.currently-playing').offsetTop;
        }
        function reverseButton(a) {
            a = usingChrome ? a.target.parentNode : a.target;
            a.classList.toggle('yt-uix-button-toggled');
            set('plRev', (a.classList.contains('yt-uix-button-toggled')) ? window.yt.config_.LIST_ID : false);
            reverseControl();
        }
        function autoplayButton(a) {
            a = usingChrome ? a.target.parentNode : a.target;
            a.classList.toggle('yt-uix-button-toggled');
            set('plApl', a.classList.contains('yt-uix-button-toggled'));
        }
        function createButton(a, b, c) {
            var navControls = document.querySelector('.playlist-nav-controls'),
                playlistBar = document.getElementById('watch-appbar-playlist'),
                button = [
                    '<button data-tooltip-text="' + a + '" class="yt-uix-button yt-uix-button-player-controls yt-uix-button-opacity yt-uix-tooltip' + (((b === true || href.split(b).length > 1) && ' yt-uix-button-toggled') || '') + '" type="button" title="' + a + '" id="' + a + '">\n',
                    '    <span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-' + a.toLowerCase() + '-video-list"></span>\n',
                    '</button>\n'
                ].join('');
            playlistBar.className = playlistBar.className.replace('radio-playlist', '');
            button = string2HTML(button).querySelector('button');
            button.addEventListener('click', c);
            navControls.appendChild(button);
        }
        if (href.split('list=').length > 1 && href.split('/watch').length > 1) {
            if (document.readyState === 'complete' && href.split(get('plRev')).length > 1) {
                reverseControl();
            }
            if (get('VID_PLST_RVRS') && !document.getElementById('Reverse')) {
                createButton('Reverse', get('plRev'), reverseButton);
            }
            if (get('VID_PLST_ATPL') && !document.getElementById('Autoplay')) {
                createButton('Autoplay', get('plApl'), autoplayButton);
            }
        }
    }
    function htmlGate() {
        customStyles();
        settingsMenu();
        plControls();
        playerMode();
        title();
        enhancedDetails();
        commentsButton();
    }
    function request(a) {
        var url = a.detail.url,
            previous = a.detail.previous,
            videoBefore = previous.split('/watch?').length < 2,
            videoAfter = url.split('/watch?').length > 1,
            listBefore = previous.split('list=').length > 1,
            listAfter = url.split('list=').length > 1,
            player = document.getElementById('movie_player'),
            loaded = window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded;
        if (player && videoAfter && (listAfter !== listBefore || videoBefore)) {
            if (loaded) {
                delete window.ytplayer.config.loaded;
            }
            player.remove();
        }
    }
    window.onYouTubePlayerReady = playerReady;
    window.addEventListener('readystatechange', htmlGate, true);
    window.addEventListener('spfrequest', request);
    window.addEventListener('spfdone', htmlGate);
    window.addEventListener('beforescriptexecute', scriptEntry);
    if (usingChrome) {
        document.documentElement.addEventListener('load', scriptExit, true);
    } else {
        window.addEventListener('afterscriptexecute', scriptExit);
    }
}());
