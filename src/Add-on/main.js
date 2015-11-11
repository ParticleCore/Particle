var simplePrefs   = require("sdk/simple-prefs"),
    simpleStorage = require("sdk/simple-storage").storage;

function mainScript(worker) {
    var subWorker = worker.tab.attach({
        contentScriptFile: "./YouTubePlus.user.js",
        contentScriptOptions: {settings: simpleStorage.particleSettings}
    });
    function update() {
        subWorker.port.emit("particleSettings", simpleStorage.particleSettings);
    }
    function save(event) {
        simpleStorage.particleSettings = event;
        simplePrefs.prefs.parSets = (simplePrefs.prefs.parSets > "0" && "0") || "1";
    }
    function detach() {
        simplePrefs.removeListener("parSets", update);
        this.port.removeListener("particleSettings", save);
    }
    simpleStorage.particleSettings = simpleStorage.particleSettings || {};
    subWorker.on("detach", detach);
    simplePrefs.on("parSets", update);
    subWorker.port.on("particleSettings", save);
}

require("sdk/page-mod").PageMod({
    include: "*.youtube.com",
    exclude: [
        "http://www.youtube.com/embed/*",
        "https://www.youtube.com/embed/*",
        "*.gaming.youtube.com"
    ],
    attachTo: "top",
    contentScriptWhen: "start",
    contentStyleFile: "./YouTubePlus.css",
    onAttach: mainScript
});