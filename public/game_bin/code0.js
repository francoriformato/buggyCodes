gdjs.worldIntroCode = {};
gdjs.worldIntroCode.GDuserObjects1= [];
gdjs.worldIntroCode.GDuserObjects2= [];
gdjs.worldIntroCode.GDuserObjects3= [];
gdjs.worldIntroCode.GDobstacleObjects1= [];
gdjs.worldIntroCode.GDobstacleObjects2= [];
gdjs.worldIntroCode.GDobstacleObjects3= [];
gdjs.worldIntroCode.GDstraightRoadObjects1= [];
gdjs.worldIntroCode.GDstraightRoadObjects2= [];
gdjs.worldIntroCode.GDstraightRoadObjects3= [];
gdjs.worldIntroCode.GDtreeObjects1= [];
gdjs.worldIntroCode.GDtreeObjects2= [];
gdjs.worldIntroCode.GDtreeObjects3= [];
gdjs.worldIntroCode.GDleftTurnObjects1= [];
gdjs.worldIntroCode.GDleftTurnObjects2= [];
gdjs.worldIntroCode.GDleftTurnObjects3= [];
gdjs.worldIntroCode.GDturnRightObjects1= [];
gdjs.worldIntroCode.GDturnRightObjects2= [];
gdjs.worldIntroCode.GDturnRightObjects3= [];
gdjs.worldIntroCode.GDbenchObjects1= [];
gdjs.worldIntroCode.GDbenchObjects2= [];
gdjs.worldIntroCode.GDbenchObjects3= [];
gdjs.worldIntroCode.GDbankObjects1= [];
gdjs.worldIntroCode.GDbankObjects2= [];
gdjs.worldIntroCode.GDbankObjects3= [];
gdjs.worldIntroCode.GDlanternObjects1= [];
gdjs.worldIntroCode.GDlanternObjects2= [];
gdjs.worldIntroCode.GDlanternObjects3= [];
gdjs.worldIntroCode.GDcafeObjects1= [];
gdjs.worldIntroCode.GDcafeObjects2= [];
gdjs.worldIntroCode.GDcafeObjects3= [];
gdjs.worldIntroCode.GDbridgeObjects1= [];
gdjs.worldIntroCode.GDbridgeObjects2= [];
gdjs.worldIntroCode.GDbridgeObjects3= [];
gdjs.worldIntroCode.GDexterminatorObjects1= [];
gdjs.worldIntroCode.GDexterminatorObjects2= [];
gdjs.worldIntroCode.GDexterminatorObjects3= [];
gdjs.worldIntroCode.GDlaptopObjects1= [];
gdjs.worldIntroCode.GDlaptopObjects2= [];
gdjs.worldIntroCode.GDlaptopObjects3= [];
gdjs.worldIntroCode.GDhouse0Objects1= [];
gdjs.worldIntroCode.GDhouse0Objects2= [];
gdjs.worldIntroCode.GDhouse0Objects3= [];
gdjs.worldIntroCode.GDhouse1Objects1= [];
gdjs.worldIntroCode.GDhouse1Objects2= [];
gdjs.worldIntroCode.GDhouse1Objects3= [];
gdjs.worldIntroCode.GDplayUIObjects1= [];
gdjs.worldIntroCode.GDplayUIObjects2= [];
gdjs.worldIntroCode.GDplayUIObjects3= [];

gdjs.worldIntroCode.conditionTrue_0 = {val:false};
gdjs.worldIntroCode.condition0IsTrue_0 = {val:false};
gdjs.worldIntroCode.condition1IsTrue_0 = {val:false};


gdjs.worldIntroCode.eventsList0 = function(runtimeScene) {

};gdjs.worldIntroCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects2);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) < (( gdjs.worldIntroCode.GDuserObjects2.length === 0 ) ? 0 :gdjs.worldIntroCode.GDuserObjects2[0].getPointY("")) - 15;
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDuserObjects2 */
{for(var i = 0, len = gdjs.worldIntroCode.GDuserObjects2.length ;i < len;++i) {
    gdjs.worldIntroCode.GDuserObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects2);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) > (( gdjs.worldIntroCode.GDuserObjects2.length === 0 ) ? 0 :gdjs.worldIntroCode.GDuserObjects2[0].getPointY("")) + 15;
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDuserObjects2 */
{for(var i = 0, len = gdjs.worldIntroCode.GDuserObjects2.length ;i < len;++i) {
    gdjs.worldIntroCode.GDuserObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects2);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) < (( gdjs.worldIntroCode.GDuserObjects2.length === 0 ) ? 0 :gdjs.worldIntroCode.GDuserObjects2[0].getPointX("")) - 15;
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDuserObjects2 */
{for(var i = 0, len = gdjs.worldIntroCode.GDuserObjects2.length ;i < len;++i) {
    gdjs.worldIntroCode.GDuserObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > (( gdjs.worldIntroCode.GDuserObjects1.length === 0 ) ? 0 :gdjs.worldIntroCode.GDuserObjects1[0].getPointX("")) + 15;
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDuserObjects1 */
{for(var i = 0, len = gdjs.worldIntroCode.GDuserObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDuserObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


};gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDbankObjects1Objects = Hashtable.newFrom({"bank": gdjs.worldIntroCode.GDbankObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects = Hashtable.newFrom({"user": gdjs.worldIntroCode.GDuserObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDbankObjects1Objects = Hashtable.newFrom({"bank": gdjs.worldIntroCode.GDbankObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects = Hashtable.newFrom({"user": gdjs.worldIntroCode.GDuserObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDcafeObjects1Objects = Hashtable.newFrom({"cafe": gdjs.worldIntroCode.GDcafeObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects = Hashtable.newFrom({"user": gdjs.worldIntroCode.GDuserObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDcafeObjects1Objects = Hashtable.newFrom({"cafe": gdjs.worldIntroCode.GDcafeObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects = Hashtable.newFrom({"user": gdjs.worldIntroCode.GDuserObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDexterminatorObjects1Objects = Hashtable.newFrom({"exterminator": gdjs.worldIntroCode.GDexterminatorObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects = Hashtable.newFrom({"user": gdjs.worldIntroCode.GDuserObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDexterminatorObjects1Objects = Hashtable.newFrom({"exterminator": gdjs.worldIntroCode.GDexterminatorObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects = Hashtable.newFrom({"user": gdjs.worldIntroCode.GDuserObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects = Hashtable.newFrom({"user": gdjs.worldIntroCode.GDuserObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDexterminatorObjects1Objects = Hashtable.newFrom({"exterminator": gdjs.worldIntroCode.GDexterminatorObjects1});gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDobstacleObjects1Objects = Hashtable.newFrom({"obstacle": gdjs.worldIntroCode.GDobstacleObjects1});gdjs.worldIntroCode.eventsList2 = function(runtimeScene) {

{


gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("bridge"), gdjs.worldIntroCode.GDbridgeObjects2);
gdjs.copyArray(runtimeScene.getObjects("obstacle"), gdjs.worldIntroCode.GDobstacleObjects2);
{for(var i = 0, len = gdjs.worldIntroCode.GDobstacleObjects2.length ;i < len;++i) {
    gdjs.worldIntroCode.GDobstacleObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.worldIntroCode.GDbridgeObjects2.length ;i < len;++i) {
    gdjs.worldIntroCode.GDbridgeObjects2[i].hide();
}
}}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("obstacle"), gdjs.worldIntroCode.GDobstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);
{for(var i = 0, len = gdjs.worldIntroCode.GDuserObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDuserObjects1[i].separateFromObjectsList(gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDobstacleObjects1Objects, false);
}
}}

}


};gdjs.worldIntroCode.eventsList3 = function(runtimeScene) {

{


gdjs.worldIntroCode.eventsList0(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.worldIntroCode.GDuserObjects1.length;i<l;++i) {
    if ( gdjs.worldIntroCode.GDuserObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.worldIntroCode.condition0IsTrue_0.val = true;
        gdjs.worldIntroCode.GDuserObjects1[k] = gdjs.worldIntroCode.GDuserObjects1[i];
        ++k;
    }
}
gdjs.worldIntroCode.GDuserObjects1.length = k;}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDuserObjects1 */
{for(var i = 0, len = gdjs.worldIntroCode.GDuserObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDuserObjects1[i].setAnimation(1 + gdjs.evtTools.common.mod(Math.round(((gdjs.worldIntroCode.GDuserObjects1[i].getBehavior("TopDownMovement").getAngle())) / 45 + 1), 8));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.worldIntroCode.GDuserObjects1.length;i<l;++i) {
    if ( !(gdjs.worldIntroCode.GDuserObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.worldIntroCode.condition0IsTrue_0.val = true;
        gdjs.worldIntroCode.GDuserObjects1[k] = gdjs.worldIntroCode.GDuserObjects1[i];
        ++k;
    }
}
gdjs.worldIntroCode.GDuserObjects1.length = k;}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDuserObjects1 */
{for(var i = 0, len = gdjs.worldIntroCode.GDuserObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDuserObjects1[i].setAnimation(0);
}
}}

}


{



}


{


gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.worldIntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("bank"), gdjs.worldIntroCode.GDbankObjects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDbankObjects1Objects, gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects, 250, false);
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDbankObjects1 */
{for(var i = 0, len = gdjs.worldIntroCode.GDbankObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDbankObjects1[i].setAnimationName("activated");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bank"), gdjs.worldIntroCode.GDbankObjects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDbankObjects1Objects, gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects, 250, true);
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDbankObjects1 */
{for(var i = 0, len = gdjs.worldIntroCode.GDbankObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDbankObjects1[i].setAnimationName("idle");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("cafe"), gdjs.worldIntroCode.GDcafeObjects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDcafeObjects1Objects, gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects, 250, false);
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDcafeObjects1 */
{for(var i = 0, len = gdjs.worldIntroCode.GDcafeObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDcafeObjects1[i].setAnimationName("activated");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cafe"), gdjs.worldIntroCode.GDcafeObjects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDcafeObjects1Objects, gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects, 250, true);
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDcafeObjects1 */
{for(var i = 0, len = gdjs.worldIntroCode.GDcafeObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDcafeObjects1[i].setAnimationName("idle");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("exterminator"), gdjs.worldIntroCode.GDexterminatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDexterminatorObjects1Objects, gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects, 250, false);
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDexterminatorObjects1 */
{for(var i = 0, len = gdjs.worldIntroCode.GDexterminatorObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDexterminatorObjects1[i].setAnimationName("activated");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exterminator"), gdjs.worldIntroCode.GDexterminatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDexterminatorObjects1Objects, gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects, 250, true);
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.worldIntroCode.GDexterminatorObjects1 */
{for(var i = 0, len = gdjs.worldIntroCode.GDexterminatorObjects1.length ;i < len;++i) {
    gdjs.worldIntroCode.GDexterminatorObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exterminator"), gdjs.worldIntroCode.GDexterminatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.worldIntroCode.GDuserObjects1);

gdjs.worldIntroCode.condition0IsTrue_0.val = false;
{
gdjs.worldIntroCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDuserObjects1Objects, gdjs.worldIntroCode.mapOfGDgdjs_46worldIntroCode_46GDexterminatorObjects1Objects, false, runtimeScene, false);
}if (gdjs.worldIntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "minigame1");
}}

}


{


gdjs.worldIntroCode.eventsList2(runtimeScene);
}


};

gdjs.worldIntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.worldIntroCode.GDuserObjects1.length = 0;
gdjs.worldIntroCode.GDuserObjects2.length = 0;
gdjs.worldIntroCode.GDuserObjects3.length = 0;
gdjs.worldIntroCode.GDobstacleObjects1.length = 0;
gdjs.worldIntroCode.GDobstacleObjects2.length = 0;
gdjs.worldIntroCode.GDobstacleObjects3.length = 0;
gdjs.worldIntroCode.GDstraightRoadObjects1.length = 0;
gdjs.worldIntroCode.GDstraightRoadObjects2.length = 0;
gdjs.worldIntroCode.GDstraightRoadObjects3.length = 0;
gdjs.worldIntroCode.GDtreeObjects1.length = 0;
gdjs.worldIntroCode.GDtreeObjects2.length = 0;
gdjs.worldIntroCode.GDtreeObjects3.length = 0;
gdjs.worldIntroCode.GDleftTurnObjects1.length = 0;
gdjs.worldIntroCode.GDleftTurnObjects2.length = 0;
gdjs.worldIntroCode.GDleftTurnObjects3.length = 0;
gdjs.worldIntroCode.GDturnRightObjects1.length = 0;
gdjs.worldIntroCode.GDturnRightObjects2.length = 0;
gdjs.worldIntroCode.GDturnRightObjects3.length = 0;
gdjs.worldIntroCode.GDbenchObjects1.length = 0;
gdjs.worldIntroCode.GDbenchObjects2.length = 0;
gdjs.worldIntroCode.GDbenchObjects3.length = 0;
gdjs.worldIntroCode.GDbankObjects1.length = 0;
gdjs.worldIntroCode.GDbankObjects2.length = 0;
gdjs.worldIntroCode.GDbankObjects3.length = 0;
gdjs.worldIntroCode.GDlanternObjects1.length = 0;
gdjs.worldIntroCode.GDlanternObjects2.length = 0;
gdjs.worldIntroCode.GDlanternObjects3.length = 0;
gdjs.worldIntroCode.GDcafeObjects1.length = 0;
gdjs.worldIntroCode.GDcafeObjects2.length = 0;
gdjs.worldIntroCode.GDcafeObjects3.length = 0;
gdjs.worldIntroCode.GDbridgeObjects1.length = 0;
gdjs.worldIntroCode.GDbridgeObjects2.length = 0;
gdjs.worldIntroCode.GDbridgeObjects3.length = 0;
gdjs.worldIntroCode.GDexterminatorObjects1.length = 0;
gdjs.worldIntroCode.GDexterminatorObjects2.length = 0;
gdjs.worldIntroCode.GDexterminatorObjects3.length = 0;
gdjs.worldIntroCode.GDlaptopObjects1.length = 0;
gdjs.worldIntroCode.GDlaptopObjects2.length = 0;
gdjs.worldIntroCode.GDlaptopObjects3.length = 0;
gdjs.worldIntroCode.GDhouse0Objects1.length = 0;
gdjs.worldIntroCode.GDhouse0Objects2.length = 0;
gdjs.worldIntroCode.GDhouse0Objects3.length = 0;
gdjs.worldIntroCode.GDhouse1Objects1.length = 0;
gdjs.worldIntroCode.GDhouse1Objects2.length = 0;
gdjs.worldIntroCode.GDhouse1Objects3.length = 0;
gdjs.worldIntroCode.GDplayUIObjects1.length = 0;
gdjs.worldIntroCode.GDplayUIObjects2.length = 0;
gdjs.worldIntroCode.GDplayUIObjects3.length = 0;

gdjs.worldIntroCode.eventsList3(runtimeScene);
return;

}

gdjs['worldIntroCode'] = gdjs.worldIntroCode;
