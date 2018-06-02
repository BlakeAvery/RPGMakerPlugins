/*:
-------------------------------------------------------------------------
@title Wipe Saves
@author UFO Productions
@date 5/31/18
@filename UFO_WipeSaves.js
@url file:///dev/null
@plugindesc Will literally wipe every one of your saves when you call the proper command.

@help
---------------------------------------------------------------------------

This plugin deletes every one of your save files when you send the proper
command, said command being "WipeGame". Is a work in progress.
Works with the Yanfly Save Core plugin, developed on v1.0.6 of said plugin.

---------------------------------------------------------------------------
 */
//Plugin init
var UFO = UFO || {};
console.log("UFO_WipeSaves init!");

Game_Interpreter_PluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Game_Interpreter_PluginCommand.call(this, command, args);
    if(command === 'WipeGame') {
        wipeGame(DataManager.maxSavefiles());
    }
}
function wipeGame(upTo) {
    for(var x = 0; x <= upTo; x++) { 
        if (DataManager.isThisGameFile(x)) {
            console.log("Save file " + x + " found.");
            console.log("Attempting removal.")
            StorageManager.remove(x);
        }
    }
}