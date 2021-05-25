
gdjs.evtsExt__YSort__YSort = gdjs.evtsExt__YSort__YSort || {};

/**
 * Behavior generated from YSort
 */
gdjs.evtsExt__YSort__YSort.YSort = class YSort extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1[i].setZOrder((gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY()));
}
}}

}


};

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__YSort__YSort.YSort.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("YSort::YSort", gdjs.evtsExt__YSort__YSort.YSort);
