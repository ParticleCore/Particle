// ==UserScript==
// @version     1.5.7
// @name        YouTube +
// @namespace   https://github.com/ParticleCore
// @description YouTube with more freedom
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAJp0lEQVR4XsWZDYwcZRnHf8/M7Nfd7V6v912upYVri7Q0lIJgVYgSABUMqhA0JBJiYrAhmJhIItaERCAxaAxJWlGBNkUQQYWaAMVYQ4mpxfZsaSn1+um117v2rnfX27vbr5l5fG9yl9ub7m6WtIVf8uzOvm9m5v887zP/eZOVI1cuphIWICIIUwgIIIQGYKHAcmAp0AGkCCCt0At0A/tQDiOAgjKNokW/VRWlMg7nRzvwVZTbgWtV6EApj3AS2IXyNvA6cJxyXGjhQsAKhYdBvgY0CKDTJUQAnfoMocwDMcGdgj4Oshn0V8Cuiy28CfgJ8KBCFBTCAsNj4SmZnicl6H3At4DfAY8BfRdD+K3AOlUu53zQ8CE28D3gy8BDwOsXUvgPFJ4CbC4e84HXgEeBJ6gM9sPNjVSGxxSeBKxKBdQS40pptPK5NyskgbfPp+I/An46y7qkuF9DAhQgNF6NeAUVivmhKhlgLWWQI1d0UhLh64r8iRlCuqtDAC1zDKCVz7kfZSMlkEOlhXcAXUAznyyjwCrgECEcLZ3yLz4W0b4PCFhCGVLA0yhfAXS2cJQQX0S5p7rFp9qFL/0diYAqeF6Fa/Ml4E5gM0XYaxrnolAc64FOLiLq+6ht07FxE7ErriS95U2wHSpwKbAB0KKKz2IVcIsSdo4wxcVT/IkJrGh0qoLhc8JPp6KFAiBEFy7CGxnBy+WxI1HUccrddzXo54F3Zio+t2GWDQGf/Sg9KrW11H/nfnL9fXh9fYhtg2VRCnVdrIa5LHjhRRofeIBIW3sQc75xN4mVKxl98w0QKVesAspfUUDB8XWWp9/OR8FXxPdpWfMQjQ9+n75nniH90ovI6dNITU2QhIYqr74frFCQnCrqeXjj43iZLL6CKCWRoBOIA1kA2Xv5IqZYCuwFIlSL5wUV73zzLWLzFwAwdPQoA7/9Dbm//BkZHg4SwLagqP/8TAZxInxqZxcTXV0cufdu7GQKiUapgA98GtgF4PhF/S1KRItSFAUNH0/PAapgKbOYu2gRdU88ycC99zLy3HN4Zvk5exZMAhJUWSAaB8che+AAuRMnkEQNGpkRrXquXyFYWiRcdi9aSIDwM+BRKhF+1Xselqn40re2BBUPc9Z1GXxvB9lNmyhs2QIT44HIsG9XD08DD892FaU9pK2yeEB1JkpR7zgkPrOaoeVXkf7m3eReMAls3QqZHJJIzNxHhBDlzKlNCMDxZ+6aKqGtIhpSXYqoCK3JJInVqzm74ipyu7rIbNxI4d1t4LpBAmjojuU1pLTEK9+iCkIWHkRlQESoNwLjts3w9dfjXH017o4dZIwDFXbuCnxdqqi6gk1AsR2KZimJlHqLoEWf1RKLRmmNRBg1djh2221YHR2cfeQR/P0foGUcRWfryICG9irKICXRMr+rr3i4+jXGtwfWrePMC78Hk4REolXkrwCDnNvjcqx4gapCwdfqa54fPEP/huc59fwGCid7sWpqwXGqTx7tAQn3uP4nlF1VD6dVxV3d0VH6Nmyk/9lnyR47hj3p6ckkqnzUJTMalfALaA8wKNCk4Q7Xc3eoqkDlauOaljj14kv0mq1AtvsgViKOnUqBgu+DAAgQetEh5+YjQhpl50yPz2Q8DPxLlTuYRkLCfALQynbo53L0/+FlTqxfT2b/fqxYHCuVBMD3dda1Zz/foTEpGle6gJNhV5nmFaFIuFLRoqZXWiwLAN9zOfXHVzmxbj1ju3cbwTGsZAoA1ZAWLbnjRcr7wqtMEa44wGaFXuASKqDFPW5J8D3wxhsce+qXpHfuRBzHCJ6qsCrVvNi08vwZgVcoQv7RFtbIj4HHqQZVJB4nvmABY/v2IqpY8QQIoFw4hJ8Dj1CEbD1XeAPoHmB+VXstVfx8ASsaBeE8KGvEg8BVQD9FyLtGuKuKzyzuUXh5xkguMpXf098Fni2ej4ggv25sZqHtkLIsXIU8igIom4D7+GR5HbhLgKiAgzCmyjG3gAB02A7XxuPcHEuwzIkQVSUHKU/YCqzik+FDG26MwaCL8KHn8vdshvdyGXpcFyl2eDsSYWVtHTcb8deLRZOy0IO/5aGTj5EonHCUW4YsDvxbYIsRvCeXJZ/LgersfyQsESxgn+9x0InxKnCdp8c+V3Bv7VRes0VWeI7DxcR2XXzV7gPCXf907AM7bIshxyY94SFTGqftVcI7t3g8TiqVIlZTQyyZpHXOHFY3NTWvPPK/TU1Hjt5mxKOWxYVEfB+74DK0cMG23Z2XfXv7yHBv79AQuXQaL5djcHCQQqGA7/vhhxgSiQQLjB8vXrxY2tra6oz4ZjPWZjtOS96SJAU3OX/P+3dc+l7XF6ITE3EvGkFFOB8C388XcBPxfM+qldt6rrl6s0YjIxFfx3zXPZ3NZvtHR0cH+vr6xg4fPuz39PQwPj4OgNTV1XHDDTfI8uXLE/X19W0i0mkyW2SiUVUTJixAVcTzIpFM7Zmh1gU7u25sPnR4RSSTdXzHwbdsEKrG8jws18ONRb3Byy/b13PdNe+km5v67EIhIao2IIBvWVbWxBkTx1T1kEmib//+/RPbt29XWbNmjdXa2jrHLMVSz/OWAfOACKAzMYNv267atld3eqC9pfvgisbDR5fVjIw0Wa6LIkEbISFHVhD1TSi+7ZCprx86c9nC/aeXLn4/3dpyQnzfNsk45f5mBQpAv0ngg2g0+l/TOsOydu1aR0SaXdddBpigAbAAnxDhBCYjks3WTK5Cqr9/ft2pgUvio+kGO59PBEKUIFEvFs3mknXD6Zbmk+n21p7xxsZT+URifFLsZFT538BIYJG2vVdETsuyZcu46aabIi0tLY0istgksMS0SZuqxotO8svtgVREJ1dALctDlUCM60ZE1Zqa9007BUkiouaXJUasqArnIqFKIyKT7XLKCO4WkYMDAwOD27ZtywtAJBKhs7OTJUuW2OYBTSWTyXYz1iEi7SaJuSZqgaiq2iYktJlTwptGEaWIKZESEjdrzKAmPKBghI6bGFLVftPCx8fGxvqOHz9+tru72zt48CD5fB4hRFNTE6bnaWxspKGhwTFRaxJJmd6a4zjOZKTMReuAmqlViQIOJlTVmoyQKAVURPzJAAJxQF5EcsCEKcyYWelREyNG6Eg6nR4dHh4eN1EwwcmTJwNLLEaKPdwsB0YksVgMIw5VDY7b29sxFw0s09gkmUyG2tpamTdvnmNu6pjzHBGxzSo5xqVMt3iWqk4vtZp5NTbmmUq5quq5BjPm9vf3u0akmuti5jHHwf16e3uDqqpqoMPMYaqOuW4wBvB/9U2tWRGNRkIAAAAASUVORK5CYII=
// @match       https://www.youtube.com/*
// @run-at      document-start
// @downloadURL https://github.com/ParticleCore/Particle/raw/master/IT/YouTubePlus.user.js
// @grant       GM_xmlhttpRequest
// @noframes
// ==/UserScript==
(function () {
    'use strict';
    var userscript = typeof GM_info;
    function xhr(details) {
        if (typeof details.data !== 'object' || !details.data.id) {
            return;
        }
        details = details.data;
        function process(xhrResponse) {
            var response = {};
            response[details.id] = xhrResponse.response;
            window.postMessage(response, '*');
        }
        GM_xmlhttpRequest({
            url: details.url,
            method: details.method,
            onload: process
        });
    }
    if (userscript !== 'undefined') {
        window.localStorage.GM_userscript = '1';
        window.removeEventListener('message', xhr);
        window.addEventListener('message', xhr);
    } else {
        window.localStorage.GM_userscript = '0';
    }
}());
(function particle() {
    'use strict';
    var api,
        lang,
        injection,
        styleSheet,
        fullscreen,
        requesting,
        channelId = {},
        eventStock = {},
        defaultSettings,
        usingChrome = typeof window.chrome === 'object';
    if (document.getElementById('P-style')) {
        return;
    }
    if (document.body || document.querySelector('[name="html5player/html5player"]')) {
        window.location.reload(false);
    } else if (!document.getElementById('Particle')) {
        injection = document.createElement('script');
        injection.id = 'Particle';
        injection.textContent = '(' + particle + '())';
        document.documentElement.appendChild(injection);
        return;
    }
    lang = {
        BLCK_ADD: {
            en: 'Add to blacklist',
            'pt-PT': 'Adicionar à lista negra'
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
        VID_PLR_TYPE: {
            en: 'Player type:',
            'pt-PT': 'Tipo de reproductor:'
        },
        VID_PLR_TYPE_FLSH: {
            en: 'Flash'
        },
        VID_PLR_TYPE_HTML: {
            en: 'HTML5'
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
        BLK_ON: true,
        volLev: false,
        plApl: true,
        plRev: false,
        theaterMode: true,
        blacklist: {}
    };
    window.localStorage.Particle = window.localStorage.Particle || JSON.stringify(defaultSettings);
    function string2HTML(string) {
        var mortar = new window.DOMParser();
        return mortar.parseFromString(string, 'text/html');
    }
    function get(setting) {
        return JSON.parse(window.localStorage.Particle)[setting];
    }
    function set(setting, newValue) {
        var userSettings = JSON.parse(window.localStorage.Particle);
        if (newValue !== undefined) {
            userSettings[setting] = newValue;
        } else {
            delete userSettings[setting];
        }
        window.localStorage.Particle = JSON.stringify(userSettings);
    }
    function userLang(placeHolder) {
        var ytlang = window.yt.config_.FEEDBACK_LOCALE_LANGUAGE || 'en';
        if (lang[placeHolder][ytlang]) {
            return lang[placeHolder][ytlang];
        }
        return lang[placeHolder].en;
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
        '    border-right: none;\n',
        '    border-top: none;\n',
        '    color: #666;\n',
        '    cursor: pointer;\n',
        '    display: none;\n',
        '    height: 17px;\n',
        '    font-size: 10px;\n',
        '    font-weight: bold;\n',
        '    position: absolute;\n',
        '    right: 0;\n',
        '    top: 0;\n',
        '    width: 17px;\n',
        '}\n',
        '#blacklist .blacklist:hover .close{\n',
        '    display: initial;\n',
        '}\n',
        '#P{\n',
        '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAAk1BMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACEGrSNAAAAMHRSTlMAAOy/fwv6+XxgQOiP5PYXbi/OT7Q135UdMAd3ndNaCY3YDvuaIbc50lV0CpMbojQR/p9JAAAAfElEQVR4XmXMRRLEMBRDQVN4mJkZ//1PNxqnspD9ll0lKc62tNaBif3bqh9b2tl1m6H4nDIi7d7CW+GcTJwrYWgwpC0MyWgcm2TTGayc19ZULRMoGVpvtmy+PLJ9kQRm8kPwdzydIWSXK4DsdgeQVY+nIkuz1xtA9vkC2H44qRgsX16KtQAAAABJRU5ErkJggg==") no-repeat 0 4px;\n',
        '    cursor: pointer;\n',
        '    height: 28px;\n',
        '    margin-left: 10px;\n',
        '    opacity: 0.55;\n',
        '    vertical-align: middle;\n',
        '    width: 19px;\n',
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
        '.thumb-wrapper .blacklist, .yt-lockup-thumbnail .blacklist{\n',
        '    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARBAMAAADNtor0AAAAJ1BMVEVmZmZzc3N/f3+Kioqqqqqzs7PFxcXOzs7X19fn5+fv7+/39/f///+6PEy9AAAAXElEQVR4XnXO0QnAMAgE0EszhV0lPxmhozhQRhEoEJIWHKpW288IB48DReg/55JXUx3iZFKtJZhaR3CCahanMqwMTlgZ7EjtY91AQVu3I84jy8Tu5PLGeYtn8dkDuUZuK/X5jU8AAAAASUVORK5CYII=") #FFF no-repeat center / contain;\n',
        '    bottom: 0px;\n',
        '    color: #666;\n',
        '    cursor: pointer;\n',
        '    display: none;\n',
        '    font-size: 12px;\n',
        '    height: 17px;\n',
        '    line-height: 1;\n',
        '    left: 0;\n',
        '    position: absolute;\n',
        '    width: 17px;\n',
        '}\n',
        '.thumb-wrapper:hover .blacklist, .yt-lockup-thumbnail:hover .blacklist{\n',
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
        '    top: 50%;\n',
        '    transform: translateY(-50%);\n',
        '    width: 100%;\n',
        '    white-space: nowrap;\n',
        '    z-index: 910;\n',
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
        '    pointer-events: none;\n',
        '    z-index: 900;\n',
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
        '    width: 30%;\n',
        '    margin-right: 10px;\n',
        '}\n',
        '#podcast-poster div{\n',
        '    background: #000 no-repeat center / cover content-box;\n',
        '    width: 100%;\n',
        '}\n',
        '#podcast-poster div:before{\n',
        '    content: "";\n',
        '    display: block;\n',
        '    padding-top: 100%\n',
        '}\n',
        '#podcast-info{\n',
        '    font-size: 18px;\n',
        '    font-weight: bold;\n',
        '    left: 30%;\n',
        '    margin-left: 2%;\n',
        '    overflow: hidden;\n',
        '    text-overflow: ellipsis;\n',
        '    text-shadow: 1px 1px 2px #000;\n',
        '    top: 50%;\n',
        '    transform: translateY(-50%);\n',
        '    position: absolute;\n',
        '    width: 70%;\n',
        '    white-space: nowrap;\n',
        '}\n',
        '#podcast-info > div:not(:first-child){\n',
        '    font-size: 15px;\n',
        '    font-weight: initial;\n',
        '    margin: 2% 0;\n',
        '}\n',
        '#podcast-info div:last-child{\n',
        '    margin-bottom: 0;\n',
        '}\n',
        '#podcast-title{\n',
        '    display: inline;\n',
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
        '}\n'
    ].join('');
    document.documentElement.appendChild(styleSheet);
    function xhr(details) {
        var request;
        function process(xhrResponse) {
            var response = {};
            response[details.id] = xhrResponse.target.response;
            window.postMessage(response, '*');
        }
        if (window.localStorage.GM_userscript === '0') {
            request = new XMLHttpRequest();
            request.onload = process;
            request.open(details.method, details.url, true);
            request.send();
        } else {
            window.postMessage(details, '*');
        }
    }
    function addEvent(target, event, call, capture) {
        var name = call.name;
        capture = !!capture;
        if (eventStock[name] && eventStock[name][event]) {
            eventStock[name][event][0].removeEventListener(event, eventStock[name][event][1], eventStock[name][event][2]);
        }
        target.addEventListener(event, call, capture);
        eventStock[name] = eventStock[name] || {};
        eventStock[name][event] = eventStock[name][event] || {};
        eventStock[name][event] = [target, call, capture];
    }
    function remEvent(event, call, capture) {
        var name = call.name;
        capture = !!capture;
        if (eventStock[name] && eventStock[name][event]) {
            eventStock[name][event][0].removeEventListener(event, eventStock[name][event][1], eventStock[name][event][2]);
        }
    }
    function timeConv(time) {
        var days = Math.floor(time / 86400),
            hours = Math.floor((time % 86400) / 3600),
            minutes = Math.floor((time % 3600) / 60),
            seconds = Math.ceil((time % 3600) % 60),
            matrix = [];
        if (days > 0) {
            matrix.push(days);
        }
        if (hours > 0) {
            matrix.push((((days > 0 && '0') || '') + hours).slice(-2));
        }
        matrix.push((((hours > 0 && '0') || '') + minutes).slice(-2), ('0' + seconds).slice(-2));
        return matrix.join(':');
    }
    function settingsMenu() {
        var pContent,
            pContainer,
            buttonsSection,
            settingsButton,
            custom,
            htEl,
            menus;
        if (document.readyState === 'complete') {
            return;
        }
        function navigateSettings(a) {
            function remBlackList() {
                var newKey = get('blacklist');
                delete newKey[a.target.parentNode.getAttribute('data-ytid')];
                a.target.parentNode.remove();
                set('blacklist', newKey);
            }
            function saveSettings() {
                var value,
                    navId = document.getElementsByClassName('selected')[0].id,
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
            } else if (a.target.classList.contains('close')) {
                remBlackList();
            } else if (a.target.parentNode.id === 'P-sidebar-list') {
                document.getElementById('P-content').remove();
                pContainer = document.getElementById('P-container');
                pContent = string2HTML(menus[a.target.id]).querySelector('#P-content');
                pContainer.appendChild(pContent);
                a.target.parentNode.getElementsByClassName('selected')[0].removeAttribute('class');
                a.target.className = 'selected';
            }
        }
        function settingsTemplate() {
            var bodyContainer,
                pageContainer,
                pWrapper = document.getElementById('P-settings');
            custom = function () {
                var button = '',
                    list = get('blacklist');
                function buildList(ytid){
                    button += '<div class="blacklist" data-ytid="' + ytid + '"><button class="close"></button>' + list[ytid] + '</div>\n';
                }
                if (Object.keys(list).length > 0) {
                    Object.keys(list).forEach(buildList);
                }
                return button;
            };
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
            };
            menus = {
                setMenu: [
                    '<div id="P-settings">\n',
                    '    <div id="P-container">\n',
                    '        <div id="P-sidebar">\n',
                    '            <ul id="P-sidebar-list">\n',
                    '                <li id="GEN" class="selected">' + userLang('GEN') + '</li>\n',
                    '                <li id="VID">' + userLang('VID') + '</li>\n',
                    '                <li id="CHN">' + userLang('CHN') + '</li>\n',
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
                    htEl.title('GEN_TTL', 'h2'),
                    '    </div>\n',
                    '    <hr class="P-horz">\n',
                    htEl.title('GEN_GEN', 'h3'),
                    htEl.input('GEN_YT_LOGO_LINK', 'checkbox'),
                    htEl.title('GEN_LYT', 'h3'),
                    htEl.input('GEN_BTTR_NTF', 'checkbox'),
                    htEl.input('GEN_DSB_HVRC', 'checkbox'),
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
                    htEl.input('VID_PLR_ALVIS', 'checkbox'),
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
                BLK: [
                    '<div id="P-content">\n',
                    '    <div class="P-header">\n',
                    '        <button class="P-save">' + userLang('GLB_SVE') + '</button>\n',
                    htEl.title('BLK_TTL', 'h2'),
                    '    </div>\n',
                    '    <hr class="P-horz">\n',
                    htEl.title('BLK_BLK', 'h3'),
                    htEl.input('BLK_ON', 'checkbox'),
                    '    <div id="blacklist">\n',
                    '    ' + custom(),
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
            if (pWrapper) {
                pWrapper.remove();
            } else {
                bodyContainer = document.getElementById('body-container');
                pageContainer = document.getElementById('page-container');
                pWrapper = string2HTML(menus.setMenu).querySelector('#P-settings');
                pWrapper.querySelector('#P-container').appendChild(string2HTML(menus.GEN).querySelector('#P-content'));
                bodyContainer.insertBefore(pWrapper, pageContainer);
                addEvent(pWrapper, 'click', navigateSettings);
            }
            document[usingChrome ? 'body' : 'documentElement'].scrollTop = 0;
        }
        buttonsSection = document.getElementById('yt-masthead-user') || document.getElementById('yt-masthead-signin');
        if (buttonsSection && !document.getElementById('P')) {
            settingsButton = document.createElement('button');
            settingsButton.id = 'P';
            settingsButton.title = 'YouTube+ settings';
            addEvent(settingsButton, 'click', settingsTemplate);
            buttonsSection.appendChild(settingsButton);
        }
    }
    function customStyles() {
        var href = window.location.href,
            sidebar = document.getElementsByClassName('branded-page-v2-secondary-col')[0];
        if (sidebar && ((get('GEN_HDE_RECM_SDBR') && href.split('/feed/').length > 1) || (get('GEN_HDE_SRCH_SDBR') && href.split('/results').length > 1) || (get('GEN_HDE_CHN_SDBR') && /\/(channel|user|c)\//.test(href)))) {
            sidebar.remove();
        }
        if (href.split('/results?').length > 1 && sidebar && sidebar.querySelectorAll('*').length < 10) { //Remove sidebar ad in search
            sidebar.remove();
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
                '#eow-title{\n' +
                '    display: block;\n' +
                '    overflow: hidden;\n' +
                '    text-overflow: ellipsis;\n' +
                '    white-space: nowrap;\n' +
                '}\n';
        }
        if (get('GEN_CMPT_TTLS')) {
            styleSheet.textContent +=
                '.feed-item-container .yt-ui-ellipsis, .yt-shelf-grid-item .yt-ui-ellipsis{\n' +
                '    white-space: nowrap !important;\n' +
                '    display: inherit !important;\n' +
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
        if (get('VID_PLR_FIT')) {
            styleSheet.textContent +=
                '#player:not(.watch-small) #player-api, #player:not(.watch-small) #player-unavailable{\n' +
                '    max-width: ' + get('VID_PLR_FIT_WDTH') + ' !important;\n' +
                '    width: 100% !important;\n' +
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
                '    margin-top: ' + (
                    (get('VID_PLR_CTRL_VIS') > 1 && '-390px') ||
                    (get('VID_PLR_CTRL_VIS') < 1 &&  '-395px') ||
                    (get('VID_PLR_CTRL_VIS') === '1' && '-360px')
                ) + ';\n' +
                '    top: 0;\n' +
                '}\n' +
                '.watch-non-stage-mode .player-width{\n' +
                '    width: 640px !important;\n' +
                '}\n' +
                '.watch-non-stage-mode .player-height{\n' +
                '    height: 390px !important;\n' +
                '}\n' +
                '.watch-non-stage-mode .watch-playlist{\n' +
                '    height: ' + (
                    (get('VID_PLR_CTRL_VIS') > 1 && '390px') ||
                    (get('VID_PLR_CTRL_VIS') < 1 && '395px') ||
                    (get('VID_PLR_CTRL_VIS') === '1' && '360px')
                ) + ' !important;\n' +
                '}\n';
        }
        if (!get('VID_PLR_DYN_SIZE')) {
            styleSheet.textContent +=
                '#watch7-sidebar{\n' +
                '    margin-top: ' + (
                    (get('VID_PLR_CTRL_VIS') > 1 && '-390px') ||
                    (get('VID_PLR_CTRL_VIS') < 1 && '-395px') ||
                    (get('VID_PLR_CTRL_VIS') === '1' && '-360px')
                ) + ';\n' +
                '}\n' +
                '#watch-appbar-playlist{\n' +
                '    height: ' + (
                    (get('VID_PLR_CTRL_VIS') > 1 && '390px') ||
                    (get('VID_PLR_CTRL_VIS') < 1 && '395px') ||
                    (get('VID_PLR_CTRL_VIS') === '1' && '360px')
                ) + ';\n' +
                '}\n' +
                '@media screen and (min-width:1294px) and (min-height:630px){\n' +
                '    #watch-appbar-playlist{\n' +
                '        height: ' + (
                    (get('VID_PLR_CTRL_VIS') > 1 && '510px') ||
                    (get('VID_PLR_CTRL_VIS') < 1 && '515px') ||
                    (get('VID_PLR_CTRL_VIS') === '1' && '480px')
                ) + ';\n' +
                '    }\n' +
                '}\n' +
                '@media screen and (min-width:1720px) and (min-height:980px){\n' +
                '    #watch-appbar-playlist{\n' +
                '    height: ' + (
                    (get('VID_PLR_CTRL_VIS') > 1 && '750px') ||
                    (get('VID_PLR_CTRL_VIS') < 1 && '755px') ||
                    (get('VID_PLR_CTRL_VIS') === '1' && '720px')
                ) + ';\n' +
                '    }\n' +
                '}\n';
        }
        if (get('VID_HIDE_COMS')) {
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
                '#P-show-comments button{\n' +
                '    border-top: none;\n' +
                '    padding-top: 2px;\n' +
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
                link.href = user.getAttribute('href') + '/videos';
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
                    remEvent('message', getPLInfo);
                    details = JSON.parse(details.getPLInfo);
                    details = details.body && details.body.content && details.body.content.match(/class="pl-header-details">([\w\W]*?)<\/ul>/)[1].split('</li><li>')[1].replace('</li>', '').replace('&#39;', '\'');
                    if (details) {
                        link.className = 'spf-link';
                        link.textContent = channelId[user.getAttribute('data-ytid')] = details;
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
                    xhr({
                        method: 'GET',
                        url: window.location.origin + '/playlist?spf=navigate&list=' + user.getAttribute('data-ytid').replace('UC', 'UU'),
                        id: 'getPLInfo'
                    });
                    addEvent(window, 'message', getPLInfo);
                }
            }
        }
        function publishedTime() {
            var watchTime = document.getElementsByClassName('watch-time-text')[0];
            function getCHInfo(details) {
                details = details.data;
                if (details.getCHInfo) {
                    remEvent('message', getCHInfo);
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
                xhr({
                    method: 'GET',
                    url: window.location.origin + '/channel/' + window.ytplayer.config.args.ucid + '/search?query="' + window.ytplayer.config.args.video_id + '"&spf=navigate',
                    id: 'getCHInfo'
                });
                addEvent(window, 'message', getCHInfo);
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
            addEvent(wrapper, 'click', showComments);
            comments.parentNode.insertBefore(wrapper, comments);
        }
    }
    function playerMode() {
        var cookie = document.cookie,
            pageElement = document.getElementById('page'),
            playerElement = document.getElementById('player');
        if (get('VID_PLR_SIZE_MEM') && get('theaterMode')) {
            if (window.navigator.cookieEnabled && (cookie.split('wide=0').length > 1 || cookie.split('wide=1').length < 2)) {
                document.cookie = 'wide=1; path=/';
            }
            if (playerElement && window.location.href.split('/watch').length > 1) {
                pageElement.className = pageElement.className.replace('non-', '');
                playerElement.className = playerElement.className.replace('small', 'large');
                document.getElementById('watch7-container').className = 'watch-wide';
            }
        } else if (get('VID_PLR_SIZE_MEM') && !get('theaterMode')) {
            if (window.navigator.cookieEnabled && (cookie.split('wide=1').length > 1 || cookie.split('wide=0').length < 2)) {
                document.cookie = 'wide=0; path=/';
            }
            if (playerElement && window.location.href.split('/watch').length > 1) {
                pageElement.className = pageElement.className.replace('watch-stage', 'watch-non-stage');
                playerElement.className = playerElement.className.replace('large', 'small').replace('medium', 'small');
                document.getElementById('watch7-container').removeAttribute('class');
            }
        }
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
                remEvent('load', widthReport);
                if (img.width > 120 && !config.args['iurlmaxres' + base] && state && (state === 5 || (state === 3 && video && video.src === ''))) {
                    ['iurl', 'iurlsd', 'iurlmq', 'iurlhq', 'iurlmaxres'].forEach(function (prefix) {
                        config.args[prefix + base] = hdURL;
                    });
                    api.cueVideoByPlayerVars(config.args);
                    api.setPlaybackQuality(get('VID_DFLT_QLTY'));
                    if (get('VID_PLR_VOL_MEM')) {
                        api.setVolume(get('volLev') || 50);
                    }
                }
            }
            img = new Image();
            addEvent(img, 'load', widthReport);
            img.src = hdURL;
        }
        if (config.args.video_id) {
            if (get('VID_PLR_ADS')) {
                delete config.args.ad3_module;
            }
            if (get('VID_PLR_SIZE_MEM') && get('theaterMode')) {
                config.args.player_wide = '1';
            }
            if (config.args.iv_load_policy) {
                config.args.iv_load_policy = (get('VID_PLR_ANTS')) ? '3' : '1';
            }
            if (config.args.cc_load_policy) {
                config.args.cc_load_policy = (get('VID_PLR_CC')) ? '0' : '1';
            }
            if (get('VID_PLR_CTRL_VIS') === '3') {
                config.args.controls = '0';
            } else {
                config.args.autohide = get('VID_PLR_CTRL_VIS');
            }
            config.args.dash = (get('VID_PLR_DASH')) ? '0' : '1';
            config.args.vq = get('VID_DFLT_QLTY');
            config.args.autoplay = (get('VID_PLR_ATPL')) ? '1' : '0';
            config.args.theme = get('VID_CTRL_BAR_CLR');
            config.args.color = get('VID_PROG_BAR_CLR');
            config.html5 = get('VID_PLR_TYPE') === 'html5';
            config.params.wmode = 'gpu';
            if (config.args.autoplay === '0') {
                hdThumb = document.querySelector('[href*="maxresdefault"]') || document.querySelector('[content*="maxresdefault"]');
                maxRes = hdThumb && (hdThumb.getAttribute('href') || hdThumb.getAttribute('content'));
                config.args['iurlmaxres' + base] = config.args['iurlmaxres' + base] || maxRes || false;
                if (config.args['iurlmaxres' + base] === false || (config.args['iurlmaxres' + base] && config.args['iurlmaxres' + base].split(config.args.video_id).length < 2)) {
                    delete config.args['iurlmaxres' + base];
                    checkThumbnail();
                } else if (config.args['iurlmaxres' + base]) {
                    ['iurl', 'iurlsd', 'iurlmq', 'iurlhq'].forEach(function (prefix) {
                        config.args[prefix + base] = config.args['iurlmaxres' + base];
                    });
                }
            }
            if (window.location.href.split('/watch').length > 1 && window.ytplayer && window.ytplayer.config === null) {
                window.ytplayer.config = config;
            }
        }
    }
    function floater() {
        var width,
            height,
            aspectRatio,
            playerContainer,
            containerSize,
            videoPlayer,
            playerSize,
            sidebar,
            sidebarSize;
        function initFloater() {
            playerContainer = document.getElementById('player-api');
            containerSize = playerContainer && playerContainer.getBoundingClientRect();
            videoPlayer = document.getElementById('movie_player');
            playerSize = videoPlayer && videoPlayer.getBoundingClientRect();
            containerSize = playerContainer.getBoundingClientRect();
            sidebar = document.getElementById('watch7-sidebar');
            sidebarSize = sidebar.getBoundingClientRect();
            function updatePos() {
                sidebarSize = sidebar.getBoundingClientRect();
                videoPlayer.style.marginLeft = sidebarSize.left + 'px';
                videoPlayer.style.width = sidebarSize.width + 'px';
                videoPlayer.style.height = sidebarSize.width / aspectRatio + 'px';
            }
            if (videoPlayer && containerSize.bottom < ((containerSize.height / 2) + 51) && !videoPlayer.classList.contains('floater')) {
                aspectRatio = playerSize.width / playerSize.height;
                width = sidebarSize.width;
                height = sidebarSize.width / aspectRatio;
                videoPlayer.classList.toggle('floater');
                videoPlayer.setAttribute('style', 'width: ' + width + 'px; height: ' + height + 'px; margin-left: ' + sidebarSize.left + 'px;');
                addEvent(window, 'resize', updatePos);
            } else if (videoPlayer && containerSize.bottom > ((containerSize.height / 2) + 51) && videoPlayer.classList.contains('floater')) {
                remEvent('resize', updatePos);
                videoPlayer.removeAttribute('style');
                videoPlayer.classList.toggle('floater');
            }
        }
        if (get('VID_PLR_ALVIS')) {
            if (location.href.split('/watch').length > 1) {
                addEvent(window, 'scroll', initFloater);
            } else if (location.href.split('/watch').length < 2) {
                remEvent('scroll', initFloater);
            }
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
        function fsControl(fsEvent) {
            return function () {
                if (!requesting && fullscreen) {
                    fsEvent.apply(this, arguments);
                }
                return true;
            };
        }
        function playerFullscreen(fsState) {
            window.beacon = api.getVideoData().video_id + api.getVideoData().list;
            fullscreen = fsState.fullscreen;
        }
        function volumeChanged(volState) {
            set('volLev', volState.volume);
        }
        function sizeChanged(sizeState) {
            set('theaterMode', sizeState);
        }
        function stopButton() {
            var prev,
                button,
                playBtn,
                playerBar = document.getElementsByClassName('html5-player-chrome')[0];
            function resumeVideo() {
                var currentQuality = api.getPlaybackQuality(),
                    currentTime = api.getCurrentTime();
                remEvent('click', resumeVideo);
                window.ytplayer.config.loaded = false;
                api.loadNewVideoConfig(window.ytplayer.config, 'html5');
                api.setPlaybackQuality(currentQuality);
                api.seekTo(currentTime);
            }
            function stopVideo() {
                api.stopVideo();
                playBtn = document.getElementsByClassName('ytp-button-pause')[0] || document.getElementsByClassName('ytp-button-play')[0];
                addEvent(playBtn, 'click', resumeVideo);
            }
            if (!document.getElementsByClassName('ytp-button-stop')[0] && playerBar) {
                prev = document.getElementsByClassName('ytp-button-prev')[0];
                button = '<div role="button" class="ytp-button ytp-button-stop"></div>';
                button = string2HTML(button).querySelector('div');
                addEvent(button, 'click', stopVideo);
                playerBar.insertBefore(button, prev);
            }
        }
        if (typeof playerApi === 'object' && !document.getElementById('c4-player')) {
            document[usingChrome ? 'webkitExitFullscreen' : 'mozCancelFullScreen'] = fsControl(document[usingChrome ? 'webkitExitFullscreen' : 'mozCancelFullScreen']);
            api = playerApi;
            addEvent(api, 'onStateChange', playerState);
            addEvent(api, 'onFullscreenChange', playerFullscreen);
            addEvent(api, 'onVolumeChange', volumeChanged);
            addEvent(api, 'SIZE_CLICKED', sizeChanged);
            if (get('VID_STP_BTN')) {
                stopButton();
            }
            if (!get('VID_PLR_ATPL')) {
                if (document.getElementsByTagName('video')[0]) {
                    document.getElementsByTagName('video')[0].removeAttribute('src');
                }
                argsCleaner(window.ytplayer.config);
                api.cueVideoByPlayerVars(window.ytplayer.config.args);
                api.setPlaybackQuality(get('VID_DFLT_QLTY'));
            } else {
                api.pauseVideo();
                api.setPlaybackQuality(get('VID_DFLT_QLTY'));
                api.playVideo();
            }
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
                    if (get('VID_PLR_ATPL')) {
                        api.pauseVideo();
                        api.setPlaybackQuality(get('VID_DFLT_QLTY'));
                        api.playVideo();
                    } else {
                        api.setPlaybackQuality(get('VID_DFLT_QLTY'));
                    }
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
                            canvas = document.getElementsByClassName('html5-video-container')[0];
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
            } else if (a === 'html5player/html5player') {
                window.yt.player.Application.create = html5Detour(window.yt.player.Application.create);
            }
        }
    }
    function blackList() {
        var i,
            list,
            user,
            name,
            ytid,
            button,
            autoplay,
            observer,
            loadMore,
            userList = get('blacklist') || {};
        if (!get('BLK_ON')) {
            return;
        }
        function initBlackList(target) {
            var newEntry;
            if (target.target.className === 'blacklist yt-uix-tooltip') {
                newEntry = get('blacklist');
                newEntry[target.target.getAttribute('data-ytid')] = target.target.getAttribute('data-user');
                set('blacklist', newEntry);
                blackList();
            }
        }
        function createButton(userID, userName) {
            button = document.createElement('div');
            button.className = 'blacklist yt-uix-tooltip';
            button.setAttribute('data-tooltip-text', userLang('BLCK_ADD'));
            button.setAttribute('data-ytid', userID);
            button.setAttribute('data-user', userName);
            return button;
        }
        if (location.pathname === '/' && document.getElementsByClassName('shelf-content')[0]) {
            list = document.getElementsByClassName('shelf-content')[0].getElementsByClassName('yt-shelf-grid-item');
            loadMore = document.getElementsByClassName('load-more-button')[0];
        } else if (location.pathname === '/watch') {
            list = document.getElementsByClassName('video-list-item');
            loadMore = document.getElementById('watch-more-related');
        } else if (location.pathname === '/results') {
            list = document.getElementsByClassName('yt-lockup-video');
            loadMore = document.getElementsByClassName('yt-uix-tile')[0];
            while (loadMore) {
                loadMore.classList.remove('yt-uix-tile');
                loadMore = document.getElementsByClassName('yt-uix-tile')[0];
            }
        }
        if (list) {
            i = list.length;
            autoplay = document.getElementsByClassName('autoplay-bar')[0] && document.getElementsByClassName('watch-sidebar-section')[0];
            while (i) {
                i -= 1;
                user = list[i].getElementsByClassName('g-hovercard')[(location.pathname === '/watch') ? 1 : 0];
                if (user && list[i]) {
                    name = user.textContent;
                    ytid = user.getAttribute('data-ytid');
                    if (userList[ytid]) {
                        if (autoplay && autoplay.contains(list[i])) {
                            autoplay.remove();
                            document.getElementsByClassName('watch-sidebar-separation-line')[0].remove();
                        } else {
                            list[i].remove();
                        }
                    } else if (!list[i].getElementsByClassName('blacklist')[0] && list[i].getElementsByClassName((location.pathname === '/watch') ? 'thumb-wrapper' : 'yt-lockup-thumbnail')[0]) {
                        button = createButton(ytid, name);
                        list[i].getElementsByClassName((location.pathname === '/watch') ? 'thumb-wrapper' : 'yt-lockup-thumbnail')[0].appendChild(button);
                    }
                }
            }
            addEvent(window, 'click', initBlackList);
        }
        if (loadMore && !loadMore.classList.contains('hooked')) {
            loadMore.classList.add('hooked'); 
            observer = new MutationObserver(blackList);
            observer.observe(loadMore, {
                childList: true,
                attributes: true,
                attributeOldValue: true
            });
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
    function plControls() {
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
        function createButton(type, placeHolder, boolean, call) {
            var navControls = document.getElementsByClassName('playlist-nav-controls')[0],
                button = [
                    '<button data-tooltip-text="' + placeHolder + '" class="yt-uix-button yt-uix-button-player-controls yt-uix-button-opacity yt-uix-tooltip' + (((boolean === true || href.split(boolean).length > 1) && ' yt-uix-button-toggled') || '') + '" type="button" title="' + placeHolder + '" id="' + type + '">\n',
                    '    <span class="yt-uix-button-icon yt-uix-button-icon-watch-appbar-' + type + '-video-list"></span>\n',
                    '</button>\n'
                ].join('');
            playlistBar.className = playlistBar.className.replace('radio-playlist', '');
            button = string2HTML(button).querySelector('button');
            addEvent(button, 'click', call);
            navControls.appendChild(button);
        }
        if (playlistBar) {
            if (document.readyState === 'complete' && href.split(get('plRev')).length > 1) {
                reverseControl();
            }
            if (get('VID_PLST_RVRS') && !document.getElementById('reverse')) {
                createButton('reverse', userLang('PLST_RVRS'), get('plRev'), reverseButton);
            }
            if (get('VID_PLST_ATPL') && !document.getElementById('autoplay')) {
                createButton('autoplay', userLang('PLST_AP'), get('plApl'), autoplayButton);
            }
        }
    }
    function playerConsole() {
        var page = document.getElementsByTagName('html')[0],
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
                screenShot = controls.querySelector('#screenshot-button');
            function togglePlay() {
                set('VID_PLR_ATPL', !get('VID_PLR_ATPL'));
                autoPlay.classList[(get('VID_PLR_ATPL')) ? 'add' : 'remove']('active');
            }
            function toggleLoop() {
                videoPlayer = document.getElementsByTagName('video')[0];
                videoPlayer.loop = !videoPlayer.loop;
                loopButton.classList[(videoPlayer.loop) ? 'add' : 'remove']('active');
            }
            function toggleAudio() {
                var streams,
                    loadStream,
                    currentTime,
                    currentQuality,
                    container,
                    user,
                    base,
                    poster;
                function timeProgress() {
                    var total = document.getElementById('podcast-total'),
                        elapsed = document.getElementById('podcast-current');
                    if (!total) {
                        remEvent('timeupdate', timeProgress);
                        return;
                    }
                    if (elapsed) {
                        elapsed.textContent = timeConv(Math.floor(api.getCurrentTime())) + ' ';
                    }
                    if (total.textContent === '' && videoPlayer.duration) {
                        total.textContent = '/ ' + timeConv(videoPlayer.duration - 1);
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
                        '            <div style="background-image:url(\'' + poster + '\')"></div>\n',
                        '        </div>\n',
                        '        <div id="podcast-info">\n',
                        '            <div id="podcast-title">' + document.title.replace(' - YouTube', '').replace('▶ ', '') + '</div>\n',
                        '            <div id="podcast-channel">' + user + '</div>\n',
                        '            <div id="podcast-progress">\n',
                        '                <div id="podcast-current">0:00</div>\n',
                        '                <div id="podcast-total"></div>\n',
                        '            </div>\n',
                        '        </div>\n',
                        '    </div>\n',
                        '</div>\n'
                    ].join('');
                    container = string2HTML(container).querySelector('#podcast-container');
                    document.getElementById('movie_player').appendChild(container);
                    addEvent(document.getElementsByTagName('video')[0], 'timeupdate', timeProgress);
                    document.getElementById('audio-only').classList.add('active');
                }
                function cipherAlgorithm(event) {
                    var deCipher,
                        algo = {},
                        cipherFunction,
                        prevCipher = localStorage.cipherAlgorithm,
                        html5 = window.ytplayer.config.assets.js,
                        html5ID = html5.match(/html5player-([\w\W]*?)\/html5player/)[1];
                    function string2Function(string) {
                        return new Function('sig', string);
                    }
                    if (!event && prevCipher && prevCipher.split(html5ID).length > 1) {
                        deCipher = string2Function(JSON.parse(prevCipher)[html5ID]);
                        console.info('local', deCipher + String());
                    } else if (event && event.data.cipherAlgorithm) {
                        remEvent('message', cipherAlgorithm);
                        event = event.data.cipherAlgorithm;
                        cipherFunction =
                            event.match(/var [\w]{2}\=\{[\w]{2}\:function\(a([\w\W]*?)a\[0\]\=a\[b%a\.length\]([\w\W]*?)\};/)[0] +
                            event.match(/a\=a\.split\(""\);([\w\W]*?)return a\.join\(""\)/)[0]
                            .replace(/a\=a/g, 'sig=sig')
                            .replace(/ a\./g, ' sig.')
                            .replace(/a\,/g, 'sig,');
                        deCipher = string2Function(cipherFunction);
                        algo[html5ID] = cipherFunction + String();
                        localStorage.cipherAlgorithm = JSON.stringify(algo);
                        console.info(deCipher + String());
                    } else if (!event && (!prevCipher || prevCipher.split(html5ID).length < 2)) {
                        xhr({
                            method: 'GET',
                            url: location.protocol + html5,
                            id: 'cipherAlgorithm'
                        });
                        addEvent(window, 'message', cipherAlgorithm);
                        return;
                    }
                    if (deCipher) {
                        loadStream.url += '&signature=' + deCipher(loadStream.s);
                        initAudioMode();
                    }
                }
                function startAudioMode() {
                    if (!window.ytplayer.config) {
                        return;
                    }
                    videoPlayer = document.getElementsByTagName('video')[0];
                    container = document.getElementById('podcast-container');
                    user = window.ytplayer.config.args.author || document.querySelector('.yt-user-info > a').textContent;
                    base = window.ytplayer.config.args.iurl_webp ? '_webp' : '';
                    poster = window.ytplayer.config.args['iurlmaxres' + base] || window.ytplayer.config.args['iurl' + base];
                    streams = {};
                    window.ytplayer.config.args.adaptive_fmts.split(',').forEach(
                        function (stream) {
                            var itag = stream.match(/itag\=([0-9]{3})/)[1];
                            streams[itag] = {};
                            stream.split('&').forEach(
                                function (details) {
                                    streams[itag][details.split('=')[0]] = decodeURIComponent(details.split('=')[1]).replace(/\+/g, ' ');
                                }
                            );
                        }
                    );
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
                    remEvent('spfdone', startAudioMode);
                    container = document.getElementById('podcast-container').remove();
                    audioOnly.classList.remove('active');
                    currentQuality = api.getPlaybackQuality();
                    currentTime = api.getCurrentTime();
                    window.ytplayer.config.loaded = false;
                    api.loadNewVideoConfig(window.ytplayer.config, 'html5');
                    api.setPlaybackQuality(currentQuality);
                    api.seekTo(currentTime);
                } else {
                    addEvent(window, 'spfdone', startAudioMode);
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
                    addEvent(container, 'click', clickManager);
                    remEvent('spfdone', removeOld);
                }
                function parseThumbs() {
                    thumbControls = '<div id="seek-controls">\n';
                    matrix.forEach(function (qualities, level) {
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
                                    ' width: ' + (details[0] - 2) + 'px; height: ' + details[1] + 'px;">\n',
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
                    });
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
                        addEvent(container, 'click', clickManager);
                        addEvent(window, 'spfdone', removeOld);
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
                    addEvent(close, 'click', hideContainer);
                    container.appendChild(close);
                    document.body.appendChild(container);
                } else if (container.id && container.classList.contains('invisible')) {
                    container.classList.toggle('invisible');
                }
            }
            addEvent(autoPlay, 'click', togglePlay);
            addEvent(loopButton, 'click', toggleLoop);
            addEvent(audioOnly, 'click', toggleAudio);
            addEvent(seekMap, 'click', toggleMap);
            addEvent(saveThumb, 'click', dlThumb);
            addEvent(screenShot, 'click', saveSS);
        }
        function toggleConsole() {
            page.classList.toggle('player-console');
        }
        if (location.href.split('/watch').length > 1 && header && !consoleButton) {
            consoleButton = '<button id="console-button" title="Player console"></button>';
            consoleButton = string2HTML(consoleButton).querySelector('#console-button');
            addEvent(consoleButton, 'click', toggleConsole);
            header.appendChild(consoleButton);
            if (controls) {
                controls.remove();
            }
            controls = [
                '<div id="player-console">\n',
                '    <div id="autoplay-button" class="yt-uix-tooltip' + ((get('VID_PLR_ATPL')) ? ' active' : '') + '" data-tooltip-text="' + userLang('CNSL_AP') + '"></div>\n',
                '    <div id="loop-button" class="yt-uix-tooltip' + ((videoPlayer && videoPlayer.loop) ? ' active' : '') + '" data-tooltip-text="' + userLang('CNSL_RPT') + '"></div>\n',
                '    <div id="audio-only" class="yt-uix-tooltip' + ((document.getElementById('podcast-container')) ? ' active' : '') + '" data-tooltip-text="' + userLang('CNSL_AUDI') + '"></div>\n',
                '    <div id="seek-map" class="yt-uix-tooltip" data-tooltip-text="' + (storyBoard ? userLang('CNSL_SKMP') : userLang('CNSL_SKMP_OFF')) + '"' + ((!storyBoard) ? 'style="opacity:0.2;"' : '') + '></div>\n',
                '    <div id="save-thumbnail-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_SVTH') + '"></div>\n',
                '    <div id="screenshot-button" class="yt-uix-tooltip" data-tooltip-text="' + userLang('CNSL_SS') + '"></div>\n',
                '</div>\n'
            ].join('');
            controls = string2HTML(controls).querySelector('div');
            document.getElementById('watch-header').appendChild(controls);
            hookButtons();
        }
    }
    function htmlGate() {
        requesting = false;
        customStyles();
        settingsMenu();
        plControls();
        playerMode();
        playerConsole();
        title();
        floater();
        blackList();
        enhancedDetails();
        commentsButton();
        if (location.href.split('/channel/').length > 1 && document.documentElement.scrollTop + document.body.scrollTop > 266) {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
    }
    function request(requestEvent) {
        var url = requestEvent.detail.url,
            previous = requestEvent.detail.previous,
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
    addEvent(window, 'spfdone', htmlGate);
    addEvent(window, 'spfrequest', request);
    addEvent(window, 'readystatechange', htmlGate, true);
    addEvent(window, 'beforescriptexecute', scriptEntry);
    if (usingChrome) {
        addEvent(document.documentElement, 'load', scriptExit, true);
    } else {
        addEvent(window, 'afterscriptexecute', scriptExit);
    }
}());
