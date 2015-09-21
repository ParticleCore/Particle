var pageMod       = require("sdk/page-mod"),
    simplePrefs   = require("sdk/simple-prefs"),
    simpleStorage = require("sdk/simple-storage");

function settingsHandler(worker) {
    function settingsUpdate() {
        worker.port.emit("particleSettings", simpleStorage.storage.particleSettings);
    }
    function settingsGate(event) {
        if (event.set && typeof event.set === "object") {
            simpleStorage.storage.particleSettings = event.set;
            simplePrefs.prefs["parSets"] = (simplePrefs.prefs["parSets"] > "0" && "0") || "1";
        }
    }
    function detachGhosts() {
        simplePrefs.removeListener("parSets", settingsUpdate);
        this.port.removeListener("particleSettings", settingsGate);
    }
    simpleStorage.storage.particleSettings = simpleStorage.storage.particleSettings || {};
    worker.on("detach", detachGhosts);
    simplePrefs.on("parSets", settingsUpdate);
    worker.port.on("particleSettings", settingsGate);
    worker.port.emit("particleSettings", simpleStorage.storage.particleSettings);
}

pageMod.PageMod({
    include: "*.youtube.com",
    exclude: [
        "http://www.youtube.com/embed/*",
        "https://www.youtube.com/embed/*",
        "*.gaming.youtube.com"
    ],
    attachTo: "top",
    contentScriptWhen: "start",
    contentScriptFile: "./YouTubePlus.user.js",
    contentStyleFile: "./YouTubePlus.css",
    onAttach: settingsHandler
});