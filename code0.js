gdjs.Level_321Code = {};
gdjs.Level_321Code.GDFloorObjects1= [];
gdjs.Level_321Code.GDFloorObjects2= [];
gdjs.Level_321Code.GDFloorObjects3= [];
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDPlayerObjects3= [];
gdjs.Level_321Code.GDAppleObjects1= [];
gdjs.Level_321Code.GDAppleObjects2= [];
gdjs.Level_321Code.GDAppleObjects3= [];
gdjs.Level_321Code.GDBananaObjects1= [];
gdjs.Level_321Code.GDBananaObjects2= [];
gdjs.Level_321Code.GDBananaObjects3= [];
gdjs.Level_321Code.GDAnaObjects1= [];
gdjs.Level_321Code.GDAnaObjects2= [];
gdjs.Level_321Code.GDAnaObjects3= [];
gdjs.Level_321Code.GDBlankEmoteLeftObjects1= [];
gdjs.Level_321Code.GDBlankEmoteLeftObjects2= [];
gdjs.Level_321Code.GDBlankEmoteLeftObjects3= [];
gdjs.Level_321Code.GDSpawnPointObjects1= [];
gdjs.Level_321Code.GDSpawnPointObjects2= [];
gdjs.Level_321Code.GDSpawnPointObjects3= [];


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects2Objects = Hashtable.newFrom({"Apple": gdjs.Level_321Code.GDAppleObjects2});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects2Objects = Hashtable.newFrom({"Banana": gdjs.Level_321Code.GDBananaObjects2});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_321Code.GDSpawnPointObjects1, gdjs.Level_321Code.GDSpawnPointObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDSpawnPointObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSpawnPointObjects2[i].getVariableNumber(gdjs.Level_321Code.GDSpawnPointObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDSpawnPointObjects2[k] = gdjs.Level_321Code.GDSpawnPointObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSpawnPointObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDSpawnPointObjects2 */
gdjs.Level_321Code.GDAppleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects2Objects, (( gdjs.Level_321Code.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDSpawnPointObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDSpawnPointObjects2[0].getPointY("")), " ");
}{for(var i = 0, len = gdjs.Level_321Code.GDAppleObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAppleObjects2[i].setSize(52, 52);
}
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDSpawnPointObjects1, gdjs.Level_321Code.GDSpawnPointObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDSpawnPointObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDSpawnPointObjects2[i].getVariableNumber(gdjs.Level_321Code.GDSpawnPointObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDSpawnPointObjects2[k] = gdjs.Level_321Code.GDSpawnPointObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDSpawnPointObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDSpawnPointObjects2 */
gdjs.Level_321Code.GDBananaObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects2Objects, (( gdjs.Level_321Code.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDSpawnPointObjects2[0].getPointX("")), (( gdjs.Level_321Code.GDSpawnPointObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDSpawnPointObjects2[0].getPointY("")), " ");
}{for(var i = 0, len = gdjs.Level_321Code.GDBananaObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDBananaObjects2[i].setSize(52, 52);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Level_321Code.GDSpawnPointObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDSpawnPointObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSpawnPointObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects = Hashtable.newFrom({"Apple": gdjs.Level_321Code.GDAppleObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects = Hashtable.newFrom({"Banana": gdjs.Level_321Code.GDBananaObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects = Hashtable.newFrom({"Apple": gdjs.Level_321Code.GDAppleObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAnaObjects1Objects = Hashtable.newFrom({"Ana": gdjs.Level_321Code.GDAnaObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects = Hashtable.newFrom({"Banana": gdjs.Level_321Code.GDBananaObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAnaObjects1Objects = Hashtable.newFrom({"Ana": gdjs.Level_321Code.GDAnaObjects1});
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SpawnPoint"), gdjs.Level_321Code.GDSpawnPointObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDSpawnPointObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSpawnPointObjects1[i].returnVariable(gdjs.Level_321Code.GDSpawnPointObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 2));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Run Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Run Up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Run Down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDPlayerObjects1[k] = gdjs.Level_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.Level_321Code.GDAppleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAppleObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDAppleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAppleObjects1[i].setPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("PickUpPoint")) + 45,(( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("PickUpPoint")) + 40);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("apple");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Banana"), gdjs.Level_321Code.GDBananaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBananaObjects1 */
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBananaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBananaObjects1[i].setPosition((( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("PickUpPoint")) + 45,(( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("PickUpPoint")) + 45);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setString("apple");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ana"), gdjs.Level_321Code.GDAnaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Apple"), gdjs.Level_321Code.GDAppleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAnaObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAnaObjects1[i].getVariableString(gdjs.Level_321Code.GDAnaObjects1[i].getVariables().getFromIndex(0)) == "apple" ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDAnaObjects1[k] = gdjs.Level_321Code.GDAnaObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAnaObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAppleObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAnaObjects1Objects, false, runtimeScene, true);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAppleObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDAppleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDAppleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ana"), gdjs.Level_321Code.GDAnaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Banana"), gdjs.Level_321Code.GDBananaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAnaObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAnaObjects1[i].getVariableString(gdjs.Level_321Code.GDAnaObjects1[i].getVariables().getFromIndex(0)) == "banana" ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDAnaObjects1[k] = gdjs.Level_321Code.GDAnaObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAnaObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBananaObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDAnaObjects1Objects, false, runtimeScene, true);
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDBananaObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBananaObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBananaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDFloorObjects1.length = 0;
gdjs.Level_321Code.GDFloorObjects2.length = 0;
gdjs.Level_321Code.GDFloorObjects3.length = 0;
gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDPlayerObjects3.length = 0;
gdjs.Level_321Code.GDAppleObjects1.length = 0;
gdjs.Level_321Code.GDAppleObjects2.length = 0;
gdjs.Level_321Code.GDAppleObjects3.length = 0;
gdjs.Level_321Code.GDBananaObjects1.length = 0;
gdjs.Level_321Code.GDBananaObjects2.length = 0;
gdjs.Level_321Code.GDBananaObjects3.length = 0;
gdjs.Level_321Code.GDAnaObjects1.length = 0;
gdjs.Level_321Code.GDAnaObjects2.length = 0;
gdjs.Level_321Code.GDAnaObjects3.length = 0;
gdjs.Level_321Code.GDBlankEmoteLeftObjects1.length = 0;
gdjs.Level_321Code.GDBlankEmoteLeftObjects2.length = 0;
gdjs.Level_321Code.GDBlankEmoteLeftObjects3.length = 0;
gdjs.Level_321Code.GDSpawnPointObjects1.length = 0;
gdjs.Level_321Code.GDSpawnPointObjects2.length = 0;
gdjs.Level_321Code.GDSpawnPointObjects3.length = 0;

gdjs.Level_321Code.eventsList1(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
