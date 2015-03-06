// ==UserScript==
// @version     1.3.5
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
        defaultSettings;
    if (document.querySelector('[name="html5player/html5player"]')) {
        window.location.reload(false);
    } else if (!document.getElementById('Particle')) {
        injection = document.createElement('script');
        injection.id = 'Particle';
        injection.textContent = '(' + particle + '())';
        document.documentElement.appendChild(injection);
        return;
    }
    if (document.getElementById('P-style')) {
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
        GEN_GRID_SUBS: {
            en: 'Grid layout in subscriptions',
            'pt-PT': 'Subscrições em formato grelha'
        },
        GEN_GRID_SRCH: {
            en: 'Grid layout in search results',
            'pt-PT': 'Resultados de pesquisa em formato grelha'
        },
        GEN_CMPT_TITL: {
            en: 'Compact titles in grid layout',
            'pt-PT': 'Títulos compactos no formato grelha'
        },
        GEN_HIDE_FTR: {
            en: 'Hide footer',
            'pt-PT': 'Esconder rodapé'
        },
        GEN_BLUE_GLOW: {
            en: 'Remove blue glow around clicked buttons',
            'pt-PT': 'Retirar brilho azul em torno dos botões clicados'
        },
        GEN_REM_RECM_SDBR: {
            en: 'Remove recommended channels sidebar',
            'pt-PT': 'Retirar barra lateral de canais recomendados'
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
        VID_PROG_BAR_CLR_RED: { // color = red
            en: 'Red',
            'pt-PT': 'Vermelha'
        },
        VID_PROG_BAR_CLR_WHT: { // color = white
            en: 'White',
            'pt-PT': 'Branca'
        },
        VID_CTRL_BAR_CLR: {
            en: 'Control bar color:',
            'pt-PT': 'Cor da barra de controlos:'
        },
        VID_CTRL_BAR_CLR_DARK: { // theme = dark
            en: 'Dark',
            'pt-PT': 'Escura'
        },
        VID_CTRL_BAR_CLR_LGHT: { // theme = light
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
        return a[window.yt.config_.FEEDBACK_LOCALE_LANGUAGE] || a.en;
    }
    styleSheet = document.createElement('style');
    styleSheet.id = 'P-style';
    styleSheet.textContent = [
        'input[type="checkbox"],input[type="radio"]{opacity:0}\n',
        ':focus{outline:none}\n',
        '::-moz-focus-inner{border:0}\n',
        '.ideal-aspect .html5-player-chrome{background:rgba(27,27,27,0.9) !important}\n',
        '.ideal-aspect.light-theme .html5-player-chrome{background:rgba(204,204,204,0.9) !important}\n',
        '.branded-page-related-channels-item .yt-close{z-index:1}\n',
        '.watch #content.content-alignment, #footer-container, #player.watch-small{min-width:initial !important;width:auto}.content-alignment{max-width:1262px;min-width:initial;width:auto}.not-yt-legacy-css .watch-sidebar{width:initial}#footer-container{max-width:initial}\n',
        '#body-container{position:relative}\n',
        '#footer-container{position:relative}\n',
        '#P-settings{background:#f1f1f1;height:100%;left:0;position:absolute;right:0;z-index:1000}\n',
        '#P-sidebar,#P-content{-moz-user-select:none}\n',
        '#P-container{margin:10px auto 0;max-width:1262px}\n',
        '#P-sidebar,#P-content{box-shadow:0 1px 2px rgba(0, 0, 0, 0.1);box-sizing:border-box}\n',
        '#P-sidebar{background:#1e1e1e;color:grey;float:left;width:195px;margin-right:10px;padding:10px 0}\n',
        '#P-sidebar-list > li{color:grey;padding:0 21px;cursor:pointer;font-size:11px;line-height:24px}\n',
        '#P-sidebar-list > li:hover{color:#1e1e1e;background:#f6f6f6}\n',
        '#P-sidebar-list > li.selected{color:#FFF;font-weight:bold;background-color:#CC181E}\n',
        '#P-content{background:#FFF;overflow:hidden;padding-bottom:40px;margin-bottom:10px}\n',
        '#P-content h2{color:#333;float:left;font-size:18px;font-weight:bold}\n',
        '#P-content h3{color:#555;font-size:14px;font-weight:bold;margin:30px 0 16px}\n',
        '#P-content > div{color:#666;padding:4px 0;overflow:hidden}\n',
        '#P-content > div:first-child{padding:0}\n',
        '#P-content div:first-child + div h3{margin-top:initial}\n',
        '#P-content > div:not(:first-child){padding-left:15px}\n',
        '#P-content label{line-height:20px}\n',
        '#P-content input{display:none;margin-left:25px}\n',
        '#P-content input + label{position:relative;margin-left:25px}\n',
        '#P-content input + label:before{cursor:pointer;border:1px solid #c6c6c6;content:"";left:-25px;height:14px;position:absolute;top:-1px;width:14px}\n',
        '#P-content input:checked + label:before{border:1px solid #36649c}\n',
        '#P-content input[type="text"]{display:initial;margin-left:5px}',
        '#P-content input[type="radio"] + label:before{border-radius:50%;left:-20px}\n',
        '#P-content input[type="checkbox"]:checked + label:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAb1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABt6r1GAAAAJXRSTlMAmQmDBYwZUT92AjdnbAtadZRPBBaSfqRBejiODWWJEoJ5Gx0gnoi62QAAAExJREFUCB1NwQUSgDAAA7B2G+7uzv/fCAdDEvyY+HgFXnYV4WHRcXFTPgNo4cJYAUjSDLlkKXCq2bQdZY/LQHKccBMzjRWPzdjxEdAOtVECtAyMKkUAAAAASUVORK5CYII=) no-repeat 2px 1px;}\n',
        '#P-content input[type="radio"]:checked + label:before{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZma1tx8vAAAAFXRSTlMAdRg22LcS6r1mJyQw/OcJ80UzaRuV38qbAAAANElEQVQIHQWAhxGAIBDA8oDYsABm/1U9gDMBkIsuCeqqusGuqgehqpl2qd4PhPp2gBHzgx9d1gLnmWiDtQAAAABJRU5ErkJggg==) no-repeat 3px;}\n',
        '#P-content select{cursor:pointer;margin-left:5px;background-image:linear-gradient(to bottom, #fcfcfc 0px, #f8f8f8 100%);border:1px solid #d3d3d3;color:#333 !important;font-family:arial,sans-serif;font-size:11px;font-weight:bold;height:26px;-moz-appearance:none;-webkit-appearance:none;padding:0 1em;text-shadow:none}\n',
        '#P-content select option{padding:0;padding:0 1em}\n',
        '.P-header{height:20px;margin:0;padding:24px 0 0 15px}\n',
        '.P-save{background:#167ac6;border-color:#167ac6;border-radius:2px;box-shadow:0 1px 0 rgba(0, 0, 0, 0.05);color:#fff;cursor:pointer;display:inline-block;float:right;font-size:11px;font-weight:bold;height:28px;line-height:normal;margin-right:20px;margin-top:-5px;outline:0 none;padding:0 20px;vertical-align:middle;white-space:nowrap;word-wrap:normal}\n',
        '.P-save:hover{background:#126db3}\n',
        '.P-save:active{background:#095b99}\n',
        '.P-horz{border-bottom:0 none;border-top:1px solid #e2e2e2;height:0;margin:20px 0;position:relative}\n',
        '#P-settings select{color:transparent !important;text-shadow:0 0 0 #333}\n',
        '#P-settings option{color:#000;text-shadow:none}\n',
        '#P{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAAk1BMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEGrSNAAAAMHRSTlMAAOy/fwv6+XxgQOiP5PYXbi/OT7Q135UdMAd3ndNaCY3YDvuaIbc50lV0CpMbojQR/p9JAAAAfElEQVR4XmXMRRLEMBRDQVN4mJkZ//1PNxqnspD9ll0lKc62tNaBif3bqh9b2tl1m6H4nDIi7d7CW+GcTJwrYWgwpC0MyWgcm2TTGayc19ZULRMoGVpvtmy+PLJ9kQRm8kPwdzydIWSXK4DsdgeQVY+nIkuz1xtA9vkC2H44qRgsX16KtQAAAABJRU5ErkJggg==") no-repeat 0 4px;margin-left:10px;cursor:pointer;opacity:0.55;height:28px;width:19px;vertical-align:middle}\n',
        '#P:hover{opacity:0.85}\n',
        '.P-hide{display:none}\n',
        '#body #uploaded-videos{font-size:11px;color:#666;display:initial;font-weight:initial;overflow:initial;vertical-align:initial}',
        '.yt-user-info > span{font-size:11px;color:#666}\n',
        ((get('VID_DESC_SHRT') && '#watch8-secondary-actions{left:0 !important}#watch8-secondary-actions .yt-uix-button-content{display:none}#watch8-secondary-actions button{padding:0}') || ''),
        ((get('VID_TTL_CMPT') && '#watch-headline-title{display:block !important;white-space:nowrap !important}#watch-headline-title h1{display:block !important;text-overflow:ellipsis !important}') || ''),
        ((get('GEN_CMPT_TTLS') && '.feed-item-container .yt-ui-ellipsis, .yt-shelf-grid-item .yt-ui-ellipsis{white-space:nowrap !important;display:inherit !important}') || ''),
        ((get('GEN_CNTR_LYT') && '#yt-masthead, #footer{max-width:1262px !important}') || ''),
        ((get('GEN_BLUE_GLOW') && '.yt-uix-button:focus, .yt-uix-button:focus:hover{box-shadow: initial !important}') || ''),
        ((get('GEN_BTTR_NTF') && '#appbar-main-guide-notification-container{box-shadow:0 1px 2px #eee inset;display:inline-block;top:2px !important;left:auto !important;margin-left:79px !important;opacity:0;overflow:hidden !important;position:absolute !important;visibility:hidden;width:auto;z-index:1}#appbar-main-guide-notification-container .appbar-guide-notification{height:27px !important}.show-guide-button-notification #appbar-main-guide-notification-container{visibility: visible;opacity:1}#appbar-main-guide-notification-container{transition:visibility .3s linear .1s, opacity .3s linear .1s}#appbar-guide-button-notification-check{display:none !important}.show-guide-button-notification #appbar-guide-button{opacity:1 !important}') || ''),
        ((get('VID_PLST_SEP') && '#watch-appbar-playlist{margin-left:0 !important;}\n') || ''),
        ((!get('VID_PLR_FIT') && '#body #player:not(.watch-small) #player-api{width:854px !important}@media screen and (min-width:1320px) and (min-height:870px){#body #player:not(.watch-small) #player-api{width:1280px !important}}\n') || ''),
        '#player{position:relative;width:100% !important}#theater-background{height:100% !important}#player #player-api, #player #player-unavailable{position:relative !important;height:auto !important}#player:not(.watch-small) #player-api, #player:not(.watch-small) #player-unavailable{max-width:' + get('VID_PLR_FIT_WDTH') + ' !important;width:100% !important}#player #player-api:before, #player #player-unavailable:before{content:"";display:block;padding-top:56.25%}#player #movie_player{bottom:0 !important;left:0 !important;position:absolute !important;right:0 !important;top:0 !important}#player-unavailable:not(.hid) + #player-api{display:none}.watch-stage-mode #player-unavailable{margin:0 auto;float:none}\n',
        '#player-api{padding-bottom:' + ((get('VID_PLR_CTRL_VIS') === '2' && '30px') || (get('VID_PLR_CTRL_VIS') === '0' && '35px') || (get('VID_PLR_CTRL_VIS') === '1' && '0')) + ';}\n',
        ((get('VID_PLR_DYN_SIZE') && '.watch-non-stage-mode #watch7-content{width: 640px !important}.watch-non-stage-mode #content.content-alignment, .watch-non-stage-mode #player.watch-small{max-width: 1066px !important}.watch-non-stage-mode #watch7-preview{margin-top: -750px !important}.watch-non-stage-mode #watch7-sidebar{margin-left: 650px !important;margin-top: ' + ((get('VID_PLR_CTRL_VIS') === '2' && '-390px') || (get('VID_PLR_CTRL_VIS') === '0' && '-395px') || (get('VID_PLR_CTRL_VIS') === '1' && '-360px')) + ';top: 0;}.watch-non-stage-mode .player-width{width: 640px !important}.watch-non-stage-mode .player-height{height: 390px !important}.watch-non-stage-mode .watch-playlist{height: ' + ((get('VID_PLR_CTRL_VIS') === '2' && '390px') || (get('VID_PLR_CTRL_VIS') === '0' && '395px') || (get('VID_PLR_CTRL_VIS') === '1' && '360px')) + ' !important}\n') || ''),
        ((!get('VID_PLR_DYN_SIZE') && '#watch7-sidebar{margin-top: ' + ((get('VID_PLR_CTRL_VIS') === '2' && '-390px') || (get('VID_PLR_CTRL_VIS') === '0' && '-395px') || (get('VID_PLR_CTRL_VIS') === '1' && '-360px')) + '}#watch-appbar-playlist{;height:' + ((get('VID_PLR_CTRL_VIS') === '2' && '390px') || (get('VID_PLR_CTRL_VIS') === '0' && '395px') || (get('VID_PLR_CTRL_VIS') === '1' && '360px')) + ';}@media screen and (min-width:1294px) and (min-height:630px){#watch-appbar-playlist{height:' + ((get('VID_PLR_CTRL_VIS') === '2' && '510px') || (get('VID_PLR_CTRL_VIS') === '0' && '515px') || (get('VID_PLR_CTRL_VIS') === '1' && '480px')) + ';}}@media screen and (min-width:1720px) and (min-height:980px){#watch-appbar-playlist{height:' + ((get('VID_PLR_CTRL_VIS') === '2' && '750px') || (get('VID_PLR_CTRL_VIS') === '0' && '755px') || (get('VID_PLR_CTRL_VIS') === '1' && '720px')) + ';}}\n') || ''),
        '#header,',
        '#feed-pyv-container,',
        '.video-list-item:not(.related-list-item),',
        '.pyv-afc-ads-container,',
        '.ad-div',
        '{display:none}\n',
        ((get('VID_HIDE_COMS') && '#watch-discussion{opacity:0;height:0;overflow:hidden}\n#P-show-comments button{border-top:none;padding-top:2px}\n.show{opacity:1 !important;height:auto !important}\n') || ''),
        '#masthead-appbar',
        '{display:block !important}\n',
        '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-reverse-video-list\n',
        '{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAANlBMVEX///////////////////////////////////////////////////////////////////////8BOg0gAAAAEXRSTlMA8KS9FQYBt8gPhw6JigvJyoYcNuUAAABRSURBVHhevdE5DsAgDERRs8ZAtrn/ZaMIiSKD5AbllX8qg/wubnHam0JPYSkACIl69nj5LB8VXRXm4EbggdvKYbCHHd1hHc3PxMqFuxhfsdwDNLwDxD27Q0MAAAAASUVORK5CYII=") no-repeat; width:24px; height:24px}\n',
        '#watch-appbar-playlist .yt-uix-button-icon-watch-appbar-autoplay-video-list\n',
        '{background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAb1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+hBK93AAAAJHRSTlMAAPT+sPxAEPcUSbmkAcWYHTWQK8+DJIKN+pcZoB+oJzC6OMQ+rrabAAAAY0lEQVQokbXQNw6AQBADwIMj55wz/v8b6RBI3g7cjrTBSn2c2HjnhioQAEgcAYAwFwCwSgGgo4YDYKcZB8ArfA6AWbsCtBS8jo7qh5Ett6eZnauXlT5obbSS/aAlnq9uH/BvLpzPEZ02MKzwAAAAAElFTkSuQmCC") no-repeat; width:24px; height:24px}'
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
        var li,
            h2,
            h3,
            hr,
            div,
            link,
            span,
            input,
            label,
            select,
            option,
            button,
            pList,
            pHeader,
            pContent,
            pContainer,
            buttonsSection,
            settingsButton,
            menus = {
                GEN: {
                    GEN_TTL: ['h2'],
                    GEN_GEN: ['h3'],
                    GEN_YT_LOGO_LINK: ['checkbox'],
                    GEN_LYT: ['h3'],
                    GEN_BTTR_NTF: ['checkbox'],
                    GEN_CNTR_LYT: ['checkbox'],
                    GEN_CMPT_TTLS: ['checkbox'],
                    GEN_BLUE_GLOW: ['checkbox'],
                    GEN_HIDE_FTR: ['checkbox'],
                    GEN_REM_RECM_SDBR: ['checkbox'],
                    GEN_GRID_SUBS: ['checkbox'],
                    GEN_GRID_SRCH: ['checkbox'],
                    GEN_CMPT_TITL: ['checkbox'],
                    GEN_ENHC: ['h3'],
                    GEN_USER_LNKS: ['checkbox']
                },
                VID: {
                    VID_TTL: ['h2'],
                    VID_PLR: ['h3'],
                    VID_PLR_ATPL: ['checkbox'],
                    VID_PLR_ADS: ['checkbox'],
                    VID_PLR_CC: ['checkbox'],
                    VID_PLR_ANTS: ['checkbox'],
                    VID_END_SHRE: ['checkbox'],
                    VID_PLR_VOL_MEM: ['checkbox'],
                    VID_PLR_SIZE_MEM: ['checkbox'],
                    VID_PLR_DASH: ['checkbox'],
                    VID_PLR_TYPE: ['radio', {
                        'VID_PLR_TYPE_FLSH': 'flash',
                        'VID_PLR_TYPE_HTML': 'html5'
                    }],
                    VID_DFLT_QLTY: ['select', {
                        'VID_DFLT_QLTY_AUTO': 'auto',
                        'VID_DFLT_QLTY_ORIG': 'highres',
                        'VID_DFLT_QLTY_1440': 'hd1440',
                        'VID_DFLT_QLTY_1080': 'hd1080',
                        'VID_DFLT_QLTY_720': 'hd720',
                        'VID_DFLT_QLTY_LRG': 'large',
                        'VID_DFLT_QLTY_MDM': 'medium',
                        'VID_DFLT_QLTY_SML': 'small',
                        'VID_DFLT_QLTY_TNY': 'tiny'
                    }],
                    VID_PLR_LYT: ['h3'],
                    VID_PLR_DYN_SIZE: ['checkbox'],
                    VID_PLR_FIT: ['checkbox'],
                    VID_PLR_FIT_WDTH: ['text', '1280px', 6],
                    VID_PROG_BAR_CLR: ['radio', {
                        'VID_PROG_BAR_CLR_RED': 'red',
                        'VID_PROG_BAR_CLR_WHT': 'white'
                    }],
                    VID_CTRL_BAR_CLR: ['radio', {
                        'VID_CTRL_BAR_CLR_DARK': 'dark',
                        'VID_CTRL_BAR_CLR_LGHT': 'light'
                    }],
                    VID_PLR_CTRL_VIS: ['select', {
                        'VID_PLR_CTRL_VIS_HIDE_PROG': '2',
                        'VID_PLR_CTRL_VIS_HIDE_ALL': '1',
                        'VID_PLR_CTRL_VIS_SHOW_ALL': '0',
                        'VID_PLR_CTRL_VIS_RMV_ALL': '3'
                    }],
                    VID_PLST: ['h3'],
                    VID_PLST_SEP: ['checkbox'],
                    VID_PLST_ATPL: ['checkbox'],
                    VID_PLST_RVRS: ['checkbox'],
                    VID_LAYT: ['h3'],
                    VID_TTL_CMPT: ['checkbox'],
                    VID_DESC_SHRT: ['checkbox'],
                    VID_VID_CNT: ['checkbox'],
                    VID_POST_TIME: ['checkbox'],
                    VID_HIDE_COMS: ['checkbox']
                },
                CHN: {
                    CHN_TTL: ['h2'],
                    CHN_FAV: ['h3'],
                    CHN_FAV_ADS: ['checkbox'],
                    CHN_ALK: ['checkbox'],
                    CHN_BVR: ['h3'],
                    CHN_TRL_ATP: ['checkbox'],
                    CHN_DFLT_PAGE: ['select', {
                        'CHN_DFLT_PAGE_DFLT': 'default',
                        'CHN_DFLT_PAGE_VID': 'videos',
                        'CHN_DFLT_PAGE_PL': 'playlists',
                        'CHN_DFLT_PAGE_CHN': 'channels',
                        'CHN_DFLT_PAGE_DISC': 'discussion',
                        'CHN_DFLT_PAGE_ABT': 'about'
                    }]
                },
                ABT: {
                    ABT_TTL: ['h2'],
                    ABT_INFO: ['h3'],
                    ABT_LNK_GHB: ['a', 'https://github.com/ParticleCore/Particle/issues'],
                    ABT_LNK_GRFK: ['a', 'https://greasyfork.org/en/scripts/'],
                    ABT_LNK_OPNU: ['a', 'http://openuserjs.org/scripts/ParticleCore/'],
                    ABT_PRBL: ['h3'],
                    ABT_LNK_PRBL: ['a', 'https://github.com/ParticleCore/Particle/issues']
                }
            };
        function navigateSettings(a) {
            function saveSettings() {
                var value,
                    navId = document.querySelector('.selected').id,
                    savedSets = JSON.parse(window.localStorage.Particle),
                    userSets = document.getElementById('P-content').querySelectorAll('[id^="' + navId + '"]'),
                    length = userSets.length;
                while (length--) {
                    value = (userSets[length].checked && (userSets[length].value === 'on' || userSets[length].value)) || (userSets[length].length && userSets[length].value) || (userSets[length].getAttribute('type') === 'text' && userSets[length].value);
                    if (value) {
                        savedSets[userSets[length].name || userSets[length].id] = value;
                    } else if (!value && userSets[length].type !== 'radio') {
                        delete savedSets[userSets[length].id];
                    }
                }
                window.localStorage.Particle = JSON.stringify(savedSets);
            }
            if (typeof a === 'string' || a.target.parentNode.id === 'P-sidebar-list') {
                if (typeof a === 'string') {
                    li = document.createElement('li');
                    li.textContent = userLang(lang[a]);
                    li.className = 'selected';
                    li.id = a;
                    pList.appendChild(li);
                } else {
                    document.getElementById('P-content').remove();
                    pContainer = document.getElementById('P-container');
                    pContent = document.createElement('div');
                    pContent.id = 'P-content';
                    pContainer.appendChild(pContent);
                    a.target.parentNode.querySelector('.selected').removeAttribute('class');
                    a.target.className = 'selected';
                    a = a.target.id;
                }
                Object.keys(menus[a]).forEach(function (c) {
                    var language = userLang(lang[c]);
                    div = document.createElement('div');
                    if (menus[a][c][0] === 'h2') {
                        h2 = document.createElement('h2');
                        h2.textContent = language;
                        hr = document.createElement('hr');
                        hr.className = 'P-horz';
                        button = document.createElement('button');
                        button.className = 'P-save';
                        button.textContent = userLang(lang.GLB_SVE);
                        button.addEventListener('click', saveSettings);
                        pHeader = document.createElement('div');
                        pHeader.className = 'P-header';
                        pHeader.appendChild(button);
                        pHeader.appendChild(h2);
                        div.appendChild(pHeader);
                        div.appendChild(hr);
                    } else if (menus[a][c][0] === 'h3') {
                        h3 = document.createElement('h3');
                        h3.textContent = language;
                        div.appendChild(h3);
                    } else if (menus[a][c][0] === 'a') {
                        link = document.createElement('a');
                        link.textContent = language;
                        link.href = menus[a][c][1];
                        div.appendChild(link);
                    } else if (menus[a][c][0] === 'span') {
                        span = document.createElement('span');
                        span.textContent = language;
                        div.appendChild(span);
                    } else if (menus[a][c][0] === 'text') {
                        input = document.createElement('input');
                        input.placeholder = menus[a][c][1];
                        input.size = menus[a][c][2];
                        input.type = 'text';
                        input.id = c;
                        if (get(c)) {
                            input.value = get(c);
                        }
                        div.textContent = language;
                        div.appendChild(input);
                    } else if (menus[a][c][0] === 'checkbox') {
                        input = document.createElement('input');
                        input.type = 'checkbox';
                        input.checked = get(c);
                        input.id = c;
                        label = document.createElement('label');
                        label.setAttribute('for', c);
                        label.textContent = language;
                        div.appendChild(input);
                        div.appendChild(label);
                    } else if (menus[a][c][0] === 'radio') {
                        label = document.createElement('label');
                        label.textContent = language;
                        div.appendChild(label);
                        Object.keys(menus[a][c][1]).forEach(function (d) {
                            input = document.createElement('input');
                            input.type = 'radio';
                            input.value = menus[a][c][1][d];
                            input.name = c;
                            input.id = d;
                            if (get(c) === menus[a][c][1][d]) {
                                input.checked = true;
                            }
                            label = document.createElement('label');
                            label.setAttribute('for', d);
                            label.textContent = userLang(lang[d]);
                            div.appendChild(input);
                            div.appendChild(label);
                        });
                    } else if (menus[a][c][0] === 'select') {
                        label = document.createElement('label');
                        label.setAttribute('for', c);
                        label.textContent = language;
                        select = document.createElement('select');
                        select.id = c;
                        Object.keys(menus[a][c][1]).forEach(function (d) {
                            option = document.createElement('option');
                            if (get(c) === menus[a][c][1][d]) {
                                option.selected = true;
                            }
                            option.value = menus[a][c][1][d];
                            option.textContent = userLang(lang[d]);
                            select.appendChild(option);
                        });
                        div.appendChild(label);
                        div.appendChild(select);
                    }
                    pContent.appendChild(div);
                });
            }
        }
        function settingsTemplate() {
            var bodyContainer,
                pageContainer,
                pSidebar,
                pWrapper = document.getElementById('P-settings');
            if (pWrapper) {
                pWrapper.classList.toggle('P-hide');
            } else {
                bodyContainer = document.getElementById('body-container');
                pageContainer = document.getElementById('page-container');
                pWrapper = document.createElement('div');
                pContainer = document.createElement('div');
                pSidebar = document.createElement('div');
                pContent = document.createElement('div');
                pList = document.createElement('ul');
                pWrapper.id = 'P-settings';
                pContainer.id = 'P-container';
                pSidebar.id = 'P-sidebar';
                pList.id = 'P-sidebar-list';
                pContent.id = 'P-content';
                pContainer.appendChild(pSidebar);
                pContainer.appendChild(pContent);
                pWrapper.appendChild(pContainer);
                pSidebar.appendChild(pList);
                Object.keys(menus).forEach(function (a, b) {
                    if (b < 1) {
                        navigateSettings(a);
                    } else {
                        li = document.createElement('li');
                        li.id = a;
                        li.textContent = userLang(lang[a]);
                        pList.appendChild(li);
                    }
                });
                bodyContainer.insertBefore(pWrapper, pageContainer);
                pWrapper.addEventListener('click', navigateSettings);
            }
            if (window.chrome) {
                document.body.scrollTop = 0;
            } else {
                document.documentElement.scrollTop = 0;
            }
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
                if (watchTime.textContent.indexOf('·') < 0) {
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
        if (window.location.href.indexOf('/watch') > -1) {
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
            wrapper,
            button;
        function showComments() {
            comments.classList.toggle('show');
            button.textContent = userLang((comments.classList.contains('show') && lang.HIDE_CMTS) || lang.SHOW_CMTS);
        }
        if (comments && !document.getElementById('P-show-comments') && get('VID_HIDE_COMS')) {
            button = document.createElement('button');
            button.className = 'yt-uix-button yt-uix-button-expander';
            button.textContent = userLang(lang.SHOW_CMTS);
            button.addEventListener('click', showComments, false);
            wrapper = document.createElement('div');
            wrapper.id = 'P-show-comments';
            wrapper.className = 'yt-card';
            wrapper.appendChild(button);
            comments.parentNode.insertBefore(wrapper, comments);
        }
    }
    function playerMode() {
        var playerElement,
            cookie = document.cookie;
        if (get('VID_PLR_SIZE_MEM') && get('theaterMode') && (cookie.indexOf('wide=0') > -1 || cookie.indexOf('wide=1') < 0)) {
            document.cookie = 'wide=1; domain=.youtube.com; path=/';
            document.cookie = 'wide=1; domain=www.youtube.com; path=/';
            playerElement = document.getElementById('player');
            if (playerElement && window.location.href.indexOf('/watch') > -1) {
                playerElement.className = 'watch-large';
                document.getElementById('watch7-container').className = 'watch-wide';
            }
        }
    }
    function argsCleaner(a) {
        var base = (a.args.iurl_webp && '_webp') || '',
            hdThumb,
            maxRes;
        function checkThumbnail(a) {
            var img,
                hdURL = a.args['iurl' + base].replace('hqdefault', 'maxresdefault');
            function widthReport() {
                if (img.width > 120 && img.height > 90 && !a.args['iurlmaxres' + base] && api && api.getPlayerState && api.getPlayerState() === 5) {
                    a.args['iurl' + base] = a.args['iurlsd' + base] = a.args['iurlmq' + base] = a.args['iurlhq' + base] = a.args['iurlmaxres' + base] = hdURL;
                    api.cueVideoByPlayerVars(a.args);
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
                a.args.iv_load_policy = (get('VID_PLR_ANTS') && '3') || '1';
            }
            if (a.args.cc_load_policy) {
                a.args.cc_load_policy = (get('VID_PLR_CC') && '0') || '1';
            }
            if (get('VID_PLR_CTRL_VIS') === '3') {
                a.args.controls = '0';
            } else {
                a.args.autohide = get('VID_PLR_CTRL_VIS');
            }
            a.args.dash = (get('VID_PLR_DASH') && '0') || '1';
            a.args.vq = get('VID_DFLT_QLTY');
            a.args.autoplay = (get('VID_PLR_ATPL') && '1') || '0';
            a.args.theme = get('VID_CTRL_BAR_CLR');
            a.args.color = get('VID_PROG_BAR_CLR');
            a.html5 = get('VID_PLR_TYPE') === 'html5';
            a.params.wmode = 'gpu';
            if (a.args.autoplay === '0') {
                hdThumb = document.querySelector('[href*="maxresdefault"]') || document.querySelector('[content*="maxresdefault"]');
                maxRes = hdThumb && (hdThumb.getAttribute('href') || hdThumb.getAttribute('content'));
                a.args['iurlmaxres' + base] = a.args['iurlmaxres' + base] || maxRes || false;
                if (a.args['iurlmaxres' + base] === false || (a.args['iurlmaxres' + base] && a.args['iurlmaxres' + base].indexOf(a.args.video_id) < 0)) {
                    delete a.args['iurlmaxres' + base];
                    checkThumbnail(a);
                } else if (a.args['iurlmaxres' + base]) {
                    a.args['iurl' + base] = a.args['iurlsd' + base] = a.args['iurlmq' + base] = a.args['iurlhq' + base] = a.args['iurlmaxres' + base];
                }
            }
            if (window.location.href.indexOf('/watch') > -1 && window.ytplayer && window.ytplayer.config === null) {
                window.ytplayer.config = a;
            }
        }
    }
    function playerReady(a) {
        function playerState(b) {
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
            if (!api) {
                api = a;
                api.addEventListener('onFullscreenChange', playerFullscreen, false);
                api.addEventListener('onVolumeChange', volumeChanged, false);
                api.addEventListener('onStateChange', playerState, false);
                api.addEventListener('SIZE_CLICKED', sizeChanged, false);
            }
            if (!get('VID_PLR_ATPL')) {
                if (document.querySelector('video')) {
                    document.querySelector('video').removeAttribute('src');
                }
                argsCleaner(window.ytplayer.config);
                api.cueVideoByPlayerVars(window.ytplayer.config.args);
            }
            if (window.ytplayer.config.html5) {
                api.setPlaybackQuality(get('VID_DFLT_QLTY'));
            }
            if (get('VID_PLR_VOL_MEM')) {
                api.setVolume(get('volLev') || 50);
            }
        }
    }
    function scriptEntry(a) {
        var ytConfig;
        if (a.target.textContent.indexOf('var ytplayer = ytplayer') > -1) {
            a.preventDefault();
            a.stopPropagation();
            if (window.location.href.indexOf('/watch') > -1) {
                ytConfig = a.target.textContent.match(/ytplayer\.config = \{([\w\W]*?)\};/)[1];
                window.ytplayer = window.ytplayer || {};
                window.ytplayer.config = JSON.parse('{' + ytConfig + '}');
                argsCleaner(window.ytplayer.config);
                a.target.remove();
            }
        } else if (a.target.textContent.indexOf('ytspf.enabled = false') > -1) {
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
                    get('VID_END_SHRE') && 'SHARE_ON_VIDEO_END',
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
                if (window.ytplayer.config.html5 && api) {
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
                                if (typeof pi[c][d] === 'function' && (pi[c][d] + String()).indexOf('"detailpage"!=') > -1) {
                                    if ((pi[c][d] + String()).indexOf('!0)') > -1) {
                                        pi[c][d] = html5Pointers(pi[c][d], '');
                                    } else if ((pi[c][d] + String()).indexOf('!0)') < 0) {
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
                if (changed && changed.autoPlay) {
                    changed.autoPlay = false;
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
                        if ((window._yt_www[b] + String()).indexOf('player-added') > -1) {
                            window._yt_www[b] = embedDetour(window._yt_www[b]);
                        } else if ((window._yt_www[b] + String()).indexOf('window.spf.navigate') > -1) {
                            window._yt_www[b] = autoplayDetour(window._yt_www[b]);
                        }
                    }
                });
            } else if (a === 'www/watch') {
                window.yt.www.watch.lists.getState = html5Fix(window.yt.www.watch.lists.getState);
                window.yt.www.watch.ads = function () {
                    return;
                };
            } else if (a === 'html5player/html5player') {
                window.yt.player.Application.create = html5Detour(window.yt.player.Application.create);
            }
        }
    }
    function title() {
        var observer,
            config = {childList: true},
            titleElement = document.querySelector('title'),
            titleStatus = titleElement.id === 'observing';
        if (!titleStatus) {
            titleElement.id = 'observing';
            observer = new window.MutationObserver(title);
            observer.observe(titleElement, config);
        } else if (titleStatus && titleElement.textContent.indexOf('▶') > -1 && !(api && api.getPlayerState && '0123'.indexOf(api.getPlayerState()) > -1)) {
            titleElement.textContent = titleElement.textContent.replace('▶ ', '');
        }
    }
    function plControls() {
        function reverseControl() {
            var temp,
                prev = document.querySelector('.prev-playlist-list-item'),
                next = document.querySelector('.next-playlist-list-item'),
                list = document.getElementById('playlist-autoscroll-list'),
                videos = list.getElementsByTagName('li'),
                length = videos.length;
            while (length--) {
                list.appendChild(videos[length]);
            }
            temp = prev.href;
            prev.href = next.href;
            next.href = temp;
            api.updatePlaylist();
            list.scrollTop = document.querySelector('.currently-playing').offsetTop;
        }
        function reverseButton(a) {
            a = (window.chrome && a.target.parentNode) || a.target;
            a.classList.toggle('yt-uix-button-toggled');
            set('plRev', (a.classList.contains('yt-uix-button-toggled') && window.yt.config_.LIST_ID) || false);
            reverseControl();
        }
        function autoplayButton(a) {
            a = (window.chrome && a.target.parentNode) || a.target;
            a.classList.toggle('yt-uix-button-toggled');
            set('plApl', a.classList.contains('yt-uix-button-toggled'));
        }
        function createButton(a, b, c) {
            var spanIcon = document.createElement('span'),
                navControls = document.querySelector('.playlist-nav-controls'),
                playlistBar = document.getElementById('watch-appbar-playlist'),
                button = document.createElement('button');
            playlistBar.className = playlistBar.className.replace('radio-playlist', '');
            spanIcon.className = 'yt-uix-button-icon yt-uix-button-icon-watch-appbar-' + a.toLowerCase() + '-video-list';
            button.id = a;
            button.title = a;
            button.type = 'button';
            button.className = 'yt-uix-button yt-uix-button-player-controls yt-uix-button-opacity yt-uix-tooltip' + (((b === true || window.location.href.indexOf(b) > -1) && ' yt-uix-button-toggled') || '');
            button.setAttribute('data-tooltip-text', a);
            button.appendChild(spanIcon);
            button.addEventListener('click', c);
            navControls.appendChild(button);
        }
        if (window.location.href.indexOf('list=') > -1) {
            if (document.readyState === 'complete' && window.location.href.indexOf(get('plRev')) > -1) {
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
        settingsMenu();
        plControls();
        playerMode();
        title();
        enhancedDetails();
        commentsButton();
    }
    function request(a) {
        var videoBefore = a.detail.previous.indexOf('/watch?') < 0,
            videoAfter = a.detail.url.indexOf('/watch?') > -1,
            listBefore = a.detail.previous.indexOf('list=') > -1,
            listAfter = a.detail.url.indexOf('list=') > -1,
            player = document.getElementById('movie_player');
        if (player && videoAfter && (listAfter !== listBefore || videoBefore)) {
            if (window.ytplayer && window.ytplayer.config && window.ytplayer.config.loaded) {
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
    if (window.chrome) {
        document.documentElement.addEventListener('load', scriptExit, true);
    } else {
        window.addEventListener('afterscriptexecute', scriptExit);
    }
}());
