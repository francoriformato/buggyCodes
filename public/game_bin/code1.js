gdjs.minigame1Code = {};
gdjs.minigame1Code.GDuserObjects1= [];
gdjs.minigame1Code.GDuserObjects2= [];
gdjs.minigame1Code.GDuserObjects3= [];
gdjs.minigame1Code.GDobstacleObjects1= [];
gdjs.minigame1Code.GDobstacleObjects2= [];
gdjs.minigame1Code.GDobstacleObjects3= [];
gdjs.minigame1Code.GDminigame1Objects1= [];
gdjs.minigame1Code.GDminigame1Objects2= [];
gdjs.minigame1Code.GDminigame1Objects3= [];
gdjs.minigame1Code.GDbug1Objects1= [];
gdjs.minigame1Code.GDbug1Objects2= [];
gdjs.minigame1Code.GDbug1Objects3= [];

gdjs.minigame1Code.conditionTrue_0 = {val:false};
gdjs.minigame1Code.condition0IsTrue_0 = {val:false};
gdjs.minigame1Code.condition1IsTrue_0 = {val:false};


gdjs.minigame1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.minigame1Code.GDuserObjects2);

gdjs.minigame1Code.condition0IsTrue_0.val = false;
{
gdjs.minigame1Code.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) < (( gdjs.minigame1Code.GDuserObjects2.length === 0 ) ? 0 :gdjs.minigame1Code.GDuserObjects2[0].getPointY("")) - 15;
}if (gdjs.minigame1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.minigame1Code.GDuserObjects2 */
{for(var i = 0, len = gdjs.minigame1Code.GDuserObjects2.length ;i < len;++i) {
    gdjs.minigame1Code.GDuserObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.minigame1Code.GDuserObjects2);

gdjs.minigame1Code.condition0IsTrue_0.val = false;
{
gdjs.minigame1Code.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) > (( gdjs.minigame1Code.GDuserObjects2.length === 0 ) ? 0 :gdjs.minigame1Code.GDuserObjects2[0].getPointY("")) + 15;
}if (gdjs.minigame1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.minigame1Code.GDuserObjects2 */
{for(var i = 0, len = gdjs.minigame1Code.GDuserObjects2.length ;i < len;++i) {
    gdjs.minigame1Code.GDuserObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.minigame1Code.GDuserObjects2);

gdjs.minigame1Code.condition0IsTrue_0.val = false;
{
gdjs.minigame1Code.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) < (( gdjs.minigame1Code.GDuserObjects2.length === 0 ) ? 0 :gdjs.minigame1Code.GDuserObjects2[0].getPointX("")) - 15;
}if (gdjs.minigame1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.minigame1Code.GDuserObjects2 */
{for(var i = 0, len = gdjs.minigame1Code.GDuserObjects2.length ;i < len;++i) {
    gdjs.minigame1Code.GDuserObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.minigame1Code.GDuserObjects1);

gdjs.minigame1Code.condition0IsTrue_0.val = false;
{
gdjs.minigame1Code.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > (( gdjs.minigame1Code.GDuserObjects1.length === 0 ) ? 0 :gdjs.minigame1Code.GDuserObjects1[0].getPointX("")) + 15;
}if (gdjs.minigame1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.minigame1Code.GDuserObjects1 */
{for(var i = 0, len = gdjs.minigame1Code.GDuserObjects1.length ;i < len;++i) {
    gdjs.minigame1Code.GDuserObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


};gdjs.minigame1Code.mapOfGDgdjs_46minigame1Code_46GDbug1Objects1Objects = Hashtable.newFrom({"bug1": gdjs.minigame1Code.GDbug1Objects1});gdjs.minigame1Code.mapOfGDgdjs_46minigame1Code_46GDuserObjects1Objects = Hashtable.newFrom({"user": gdjs.minigame1Code.GDuserObjects1});gdjs.minigame1Code.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.minigame1Code.GDuserObjects1);

gdjs.minigame1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.minigame1Code.GDuserObjects1.length;i<l;++i) {
    if ( gdjs.minigame1Code.GDuserObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.minigame1Code.condition0IsTrue_0.val = true;
        gdjs.minigame1Code.GDuserObjects1[k] = gdjs.minigame1Code.GDuserObjects1[i];
        ++k;
    }
}
gdjs.minigame1Code.GDuserObjects1.length = k;}if (gdjs.minigame1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.minigame1Code.GDuserObjects1 */
{for(var i = 0, len = gdjs.minigame1Code.GDuserObjects1.length ;i < len;++i) {
    gdjs.minigame1Code.GDuserObjects1[i].setAnimation(1 + gdjs.evtTools.common.mod(Math.round(((gdjs.minigame1Code.GDuserObjects1[i].getBehavior("TopDownMovement").getAngle())) / 45 + 1), 8));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.minigame1Code.GDuserObjects1);

gdjs.minigame1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.minigame1Code.GDuserObjects1.length;i<l;++i) {
    if ( !(gdjs.minigame1Code.GDuserObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.minigame1Code.condition0IsTrue_0.val = true;
        gdjs.minigame1Code.GDuserObjects1[k] = gdjs.minigame1Code.GDuserObjects1[i];
        ++k;
    }
}
gdjs.minigame1Code.GDuserObjects1.length = k;}if (gdjs.minigame1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.minigame1Code.GDuserObjects1 */
{for(var i = 0, len = gdjs.minigame1Code.GDuserObjects1.length ;i < len;++i) {
    gdjs.minigame1Code.GDuserObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.minigame1Code.condition0IsTrue_0.val = false;
{
gdjs.minigame1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.minigame1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.minigame1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.minigame1Code.condition0IsTrue_0.val = false;
{
gdjs.minigame1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.minigame1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("obstacle"), gdjs.minigame1Code.GDobstacleObjects1);
{for(var i = 0, len = gdjs.minigame1Code.GDobstacleObjects1.length ;i < len;++i) {
    gdjs.minigame1Code.GDobstacleObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bug1"), gdjs.minigame1Code.GDbug1Objects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.minigame1Code.GDuserObjects1);

gdjs.minigame1Code.condition0IsTrue_0.val = false;
{
gdjs.minigame1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.minigame1Code.mapOfGDgdjs_46minigame1Code_46GDbug1Objects1Objects, gdjs.minigame1Code.mapOfGDgdjs_46minigame1Code_46GDuserObjects1Objects, false, runtimeScene, false);
}if (gdjs.minigame1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "worldIntro", false);
}}

}


};

gdjs.minigame1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.minigame1Code.GDuserObjects1.length = 0;
gdjs.minigame1Code.GDuserObjects2.length = 0;
gdjs.minigame1Code.GDuserObjects3.length = 0;
gdjs.minigame1Code.GDobstacleObjects1.length = 0;
gdjs.minigame1Code.GDobstacleObjects2.length = 0;
gdjs.minigame1Code.GDobstacleObjects3.length = 0;
gdjs.minigame1Code.GDminigame1Objects1.length = 0;
gdjs.minigame1Code.GDminigame1Objects2.length = 0;
gdjs.minigame1Code.GDminigame1Objects3.length = 0;
gdjs.minigame1Code.GDbug1Objects1.length = 0;
gdjs.minigame1Code.GDbug1Objects2.length = 0;
gdjs.minigame1Code.GDbug1Objects3.length = 0;

gdjs.minigame1Code.eventsList1(runtimeScene);
return;

}

gdjs['minigame1Code'] = gdjs.minigame1Code;
