var pageMod     = require("sdk/page-mod");
var simplePrefs = require("sdk/simple-prefs");

function settingsHandler(worker) {
    function settingsGate(event) {
        var object = JSON.parse(simplePrefs.prefs["parSets"]);
        function updateSettings(keys) {
            object[keys] = event.set[keys];
        }
        if (event.set) {
            Object.keys(event.set).forEach(updateSettings);
            simplePrefs.prefs["parSets"] = JSON.stringify(object);
        } else if (event.replace) {
            simplePrefs.prefs["parSets"] = JSON.stringify(event.replace);
        }
        worker.port.emit("particleSettings", JSON.parse(simplePrefs.prefs["parSets"]));
    }
    function settingsUpdate(event) {
        var update = JSON.parse(simplePrefs.prefs["parSets"]);
        worker.port.emit("particleSettings", update);
    }
    function detachGhosts() {
        simplePrefs.removeListener("parSets", settingsUpdate);
        this.port.removeListener("particleSettings", settingsGate);
    }
    worker.on("detach", detachGhosts);
    simplePrefs.on("parSets", settingsUpdate);
    worker.port.on("particleSettings", settingsGate);
    worker.port.emit("particleSettings", JSON.parse(simplePrefs.prefs["parSets"]));
}

pageMod.PageMod({
    include: "*.youtube.com",
    attachTo: "top",
    contentScriptWhen: "start",
    contentScriptFile: "./YouTubePlus.user.js",
    onAttach: settingsHandler
});
