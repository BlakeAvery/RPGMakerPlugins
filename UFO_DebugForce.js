/*:
-------------------------------------------------------------------------
@title Force Debug Mode
@author UFO Productions
@date 3/24/18
@filename UFO_DebugForce.js
@url file:///dev/null
@plugindesc Forces the game to be in test mode.

@param ForceDebug
@desc Force the game to be in debug mode.
@default true

@help
-------------------------------------------------------------------------

This plugin forces your game to be in test mode. It can be useful if you
decide to make events that are test mode only. It mods the
createGameObjects in DataManager.
-------------------------------------------------------------------------
 */

//Plugin init
var UFO = UFO || {};
UFO.createGameObjects = UFO.createGameObjects || {};
//Parameter init
var Parameter = PluginManager.parameters('UFO_DebugForce');
var forceDebug = eval(Parameter['ForceDebug']);
console.log("UFO_DebugForce init! set to " + forceDebug);

UFO.createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
  UFO.createGameObjects.call(this);
  if(forceDebug) {
    $gameTemp._isPlaytest = 1;
    console.log("UFO_DebugForce set $gameTemp._isPlaytest to " + $gameTemp._isPlaytest + ": test mode forced");
  }
}
