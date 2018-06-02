/*:
-------------------------------------------------------------------------
@title Game Version Display
@author UFO Productions
@date 3/22/18
@filename UFO_GameVer.js
@url file:///dev/null
@plugindesc A plugin to display the game's version in various areas.

@param Game version
@desc String for game version
@default 1.0

@param Font Size
@desc Size for font(You prolly don't wanna up this more than 16, it'll look funny)
@default 10

@help
-------------------------------------------------------------------------

This plugin displays the game's version number on the title screen.
It adds to the createCommandWindow function in Scene_Title.

-------------------------------------------------------------------------
 */
//Plugin init
var UFO = UFO || {};
UFO.Scene_Title = UFO.Scene_Title || {};
//Parameter init
var Parameter = PluginManager.parameters('UFO_GameVer');
var gameVersion = String(Parameter['Game version']);
var textSize = Number(Parameter['Font Size']);
console.log("UFO_GameVer init!");

UFO.Scene_Title.createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
  console.log("Init title " + $dataSystem.gameTitle + " " + gameVersion);
  UFO.Scene_Title.createCommandWindow.call(this);
  this._gameVersionSprite = new Sprite(new Bitmap(Graphics.width, Graphics.height));
  this.addChild(this._gameVersionSprite);
  var x = 45; //We're gonna try values until it looks nice there
  var y = Graphics.height - 36; //Same for y
  var maxWidth = Graphics.width - x * 1.2; //The values don't make any sense, you know that?
  var UAString = "Version " + gameVersion;
  this._gameVersionSprite.bitmap.outlineColor = 'black';
  this._gameTitleSprite.bitmap.outlineWidth = 2;
  this._gameTitleSprite.bitmap.fontSize = textSize;
  this._gameVersionSprite.bitmap.drawText(UAString, x, y, maxWidth, 20, 'right'); //Can someone tell me what sorta shite is this
}
