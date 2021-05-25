var gdjs;
(function(gdjs2) {
  class TopDownMovementRuntimeBehavior extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._angle = 0;
      this._x = 0;
      this._y = 0;
      this._xVelocity = 0;
      this._yVelocity = 0;
      this._angularSpeed = 0;
      this._leftKey = false;
      this._rightKey = false;
      this._upKey = false;
      this._downKey = false;
      this._leftKeyPressedDuration = -1;
      this._rightKeyPressedDuration = -1;
      this._upKeyPressedDuration = -1;
      this._downKeyPressedDuration = -1;
      this._stickAngle = 0;
      this._stickForce = 0;
      this._temporaryPointForTransformations = [0, 0];
      this._allowDiagonals = behaviorData.allowDiagonals;
      this._acceleration = behaviorData.acceleration;
      this._deceleration = behaviorData.deceleration;
      this._maxSpeed = behaviorData.maxSpeed;
      this._angularMaxSpeed = behaviorData.angularMaxSpeed;
      this._rotateObject = behaviorData.rotateObject;
      this._angleOffset = behaviorData.angleOffset;
      this._ignoreDefaultControls = behaviorData.ignoreDefaultControls;
      this.setViewpoint(behaviorData.viewpoint, behaviorData.customIsometryAngle);
      this._movementAngleOffset = behaviorData.movementAngleOffset || 0;
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      if (oldBehaviorData.allowDiagonals !== newBehaviorData.allowDiagonals) {
        this._allowDiagonals = newBehaviorData.allowDiagonals;
      }
      if (oldBehaviorData.acceleration !== newBehaviorData.acceleration) {
        this._acceleration = newBehaviorData.acceleration;
      }
      if (oldBehaviorData.deceleration !== newBehaviorData.deceleration) {
        this._deceleration = newBehaviorData.deceleration;
      }
      if (oldBehaviorData.maxSpeed !== newBehaviorData.maxSpeed) {
        this._maxSpeed = newBehaviorData.maxSpeed;
      }
      if (oldBehaviorData.angularMaxSpeed !== newBehaviorData.angularMaxSpeed) {
        this._angularMaxSpeed = newBehaviorData.angularMaxSpeed;
      }
      if (oldBehaviorData.rotateObject !== newBehaviorData.rotateObject) {
        this._rotateObject = newBehaviorData.rotateObject;
      }
      if (oldBehaviorData.angleOffset !== newBehaviorData.angleOffset) {
        this._angleOffset = newBehaviorData.angleOffset;
      }
      if (oldBehaviorData.ignoreDefaultControls !== newBehaviorData.ignoreDefaultControls) {
        this._ignoreDefaultControls = newBehaviorData.ignoreDefaultControls;
      }
      if (oldBehaviorData.platformType !== newBehaviorData.platformType || oldBehaviorData.customIsometryAngle !== newBehaviorData.customIsometryAngle) {
        this.setViewpoint(newBehaviorData.platformType, newBehaviorData.customIsometryAngle);
      }
      if (oldBehaviorData.movementAngleOffset !== newBehaviorData.movementAngleOffset) {
        this._movementAngleOffset = newBehaviorData.movementAngleOffset;
      }
      return true;
    }
    setViewpoint(viewpoint, customIsometryAngle) {
      if (viewpoint === "PixelIsometry") {
        this._basisTransformation = new gdjs2.TopDownMovementRuntimeBehavior.IsometryTransformation(Math.atan(0.5));
      } else if (viewpoint === "TrueIsometry") {
        this._basisTransformation = new gdjs2.TopDownMovementRuntimeBehavior.IsometryTransformation(Math.PI / 6);
      } else if (viewpoint === "CustomIsometry") {
        this._basisTransformation = new gdjs2.TopDownMovementRuntimeBehavior.IsometryTransformation(customIsometryAngle * Math.PI / 180);
      } else {
        this._basisTransformation = null;
      }
    }
    setAcceleration(acceleration) {
      this._acceleration = acceleration;
    }
    getAcceleration() {
      return this._acceleration;
    }
    setDeceleration(deceleration) {
      this._deceleration = deceleration;
    }
    getDeceleration() {
      return this._deceleration;
    }
    setMaxSpeed(maxSpeed) {
      this._maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
      return this._maxSpeed;
    }
    setAngularMaxSpeed(angularMaxSpeed) {
      this._angularMaxSpeed = angularMaxSpeed;
    }
    getAngularMaxSpeed() {
      return this._angularMaxSpeed;
    }
    setAngleOffset(angleOffset) {
      this._angleOffset = angleOffset;
    }
    getAngleOffset() {
      return this._angleOffset;
    }
    allowDiagonals(allow) {
      this._allowDiagonals = allow;
    }
    diagonalsAllowed() {
      return this._allowDiagonals;
    }
    setRotateObject(allow) {
      this._rotateObject = allow;
    }
    isObjectRotated() {
      return this._rotateObject;
    }
    isMoving() {
      return this._xVelocity !== 0 || this._yVelocity !== 0;
    }
    getSpeed() {
      return Math.sqrt(this._xVelocity * this._xVelocity + this._yVelocity * this._yVelocity);
    }
    getXVelocity() {
      return this._xVelocity;
    }
    getYVelocity() {
      return this._yVelocity;
    }
    getAngle() {
      return this._angle;
    }
    setMovementAngleOffset(movementAngleOffset) {
      this._movementAngleOffset = movementAngleOffset;
    }
    getMovementAngleOffset() {
      return this._movementAngleOffset;
    }
    doStepPreEvents(runtimeScene) {
      const LEFTKEY = 37;
      const UPKEY = 38;
      const RIGHTKEY = 39;
      const DOWNKEY = 40;
      this._leftKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(LEFTKEY);
      this._rightKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(RIGHTKEY);
      this._downKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(DOWNKEY);
      this._upKey |= !this._ignoreDefaultControls && runtimeScene.getGame().getInputManager().isKeyPressed(UPKEY);
      let direction = -1;
      if (!this._allowDiagonals) {
        const elapsedTime = this.owner.getElapsedTime(runtimeScene);
        if (!this._leftKey) {
          this._leftKeyPressedDuration = 0;
        } else {
          this._leftKeyPressedDuration += elapsedTime;
        }
        if (!this._rightKey) {
          this._rightKeyPressedDuration = 0;
        } else {
          this._rightKeyPressedDuration += elapsedTime;
        }
        if (!this._downKey) {
          this._downKeyPressedDuration = 0;
        } else {
          this._downKeyPressedDuration += elapsedTime;
        }
        if (!this._upKey) {
          this._upKeyPressedDuration = 0;
        } else {
          this._upKeyPressedDuration += elapsedTime;
        }
        if (this._upKey && !this._downKey) {
          direction = 6;
        } else if (!this._upKey && this._downKey) {
          direction = 2;
        }
        if (this._leftKey && !this._rightKey && (this._upKey === this._downKey || this._upKey && this._leftKeyPressedDuration < this._upKeyPressedDuration || this._downKey && this._leftKeyPressedDuration < this._downKeyPressedDuration)) {
          direction = 4;
        } else if (this._rightKey && !this._leftKey && (this._upKey === this._downKey || this._upKey && this._rightKeyPressedDuration < this._upKeyPressedDuration || this._downKey && this._rightKeyPressedDuration < this._downKeyPressedDuration)) {
          direction = 0;
        }
      } else {
        if (this._upKey && !this._downKey) {
          if (this._leftKey && !this._rightKey) {
            direction = 5;
          } else if (!this._leftKey && this._rightKey) {
            direction = 7;
          } else {
            direction = 6;
          }
        } else if (!this._upKey && this._downKey) {
          if (this._leftKey && !this._rightKey) {
            direction = 3;
          } else if (!this._leftKey && this._rightKey) {
            direction = 1;
          } else {
            direction = 2;
          }
        } else {
          if (this._leftKey && !this._rightKey) {
            direction = 4;
          } else if (!this._leftKey && this._rightKey) {
            direction = 0;
          }
        }
      }
      const object = this.owner;
      const timeDelta = this.owner.getElapsedTime(runtimeScene) / 1e3;
      let directionInRad = 0;
      let directionInDeg = 0;
      if (direction !== -1) {
        directionInRad = (direction + this._movementAngleOffset / 45) * Math.PI / 4;
        directionInDeg = direction * 45 + this._movementAngleOffset;
        this._xVelocity += this._acceleration * timeDelta * Math.cos(directionInRad);
        this._yVelocity += this._acceleration * timeDelta * Math.sin(directionInRad);
      } else if (this._stickForce !== 0) {
        if (!this._allowDiagonals) {
          this._stickAngle = 90 * Math.floor((this._stickAngle + 45) / 90);
        }
        directionInDeg = this._stickAngle + this._movementAngleOffset;
        directionInRad = directionInDeg * Math.PI / 180;
        const norm = this._acceleration * timeDelta * this._stickForce;
        this._xVelocity += norm * Math.cos(directionInRad);
        this._yVelocity += norm * Math.sin(directionInRad);
        this._stickForce = 0;
      } else {
        directionInRad = Math.atan2(this._yVelocity, this._xVelocity);
        directionInDeg = Math.atan2(this._yVelocity, this._xVelocity) * 180 / Math.PI;
        const xVelocityWasPositive = this._xVelocity >= 0;
        const yVelocityWasPositive = this._yVelocity >= 0;
        this._xVelocity -= this._deceleration * timeDelta * Math.cos(directionInRad);
        this._yVelocity -= this._deceleration * timeDelta * Math.sin(directionInRad);
        if (this._xVelocity > 0 ^ xVelocityWasPositive) {
          this._xVelocity = 0;
        }
        if (this._yVelocity > 0 ^ yVelocityWasPositive) {
          this._yVelocity = 0;
        }
      }
      const speed = Math.sqrt(this._xVelocity * this._xVelocity + this._yVelocity * this._yVelocity);
      if (speed > this._maxSpeed) {
        this._xVelocity = this._maxSpeed * Math.cos(directionInRad);
        this._yVelocity = this._maxSpeed * Math.sin(directionInRad);
      }
      this._angularSpeed = this._angularMaxSpeed;
      if (this._basisTransformation === null) {
        object.setX(object.getX() + this._xVelocity * timeDelta);
        object.setY(object.getY() + this._yVelocity * timeDelta);
      } else {
        const point = this._temporaryPointForTransformations;
        point[0] = this._xVelocity * timeDelta;
        point[1] = this._yVelocity * timeDelta;
        this._basisTransformation.toScreen(point, point);
        object.setX(object.getX() + point[0]);
        object.setY(object.getY() + point[1]);
      }
      if (this._xVelocity !== 0 || this._yVelocity !== 0) {
        this._angle = directionInDeg;
        if (this._rotateObject) {
          object.rotateTowardAngle(directionInDeg + this._angleOffset, this._angularSpeed, runtimeScene);
        }
      }
      this._leftKey = false;
      this._rightKey = false;
      this._upKey = false;
      this._downKey = false;
    }
    simulateControl(input) {
      if (input === "Left") {
        this._leftKey = true;
      } else if (input === "Right") {
        this._rightKey = true;
      } else if (input === "Up") {
        this._upKey = true;
      } else if (input === "Down") {
        this._downKey = true;
      }
    }
    ignoreDefaultControls(ignore) {
      this._ignoreDefaultControls = ignore;
    }
    simulateLeftKey() {
      this._leftKey = true;
    }
    simulateRightKey() {
      this._rightKey = true;
    }
    simulateUpKey() {
      this._upKey = true;
    }
    simulateDownKey() {
      this._downKey = true;
    }
    simulateStick(stickAngle, stickForce) {
      this._stickAngle = stickAngle % 360;
      this._stickForce = Math.max(0, Math.min(1, stickForce));
    }
  }
  gdjs2.TopDownMovementRuntimeBehavior = TopDownMovementRuntimeBehavior;
  (function(TopDownMovementRuntimeBehavior2) {
    class IsometryTransformation {
      constructor(angle) {
        if (angle <= 0 || angle >= Math.PI / 4)
          throw new RangeError("An isometry angle must be in ]0; pi/4] but was: " + angle);
        const alpha = Math.asin(Math.tan(angle));
        const sinA = Math.sin(alpha);
        const cosB = Math.cos(Math.PI / 4);
        const sinB = cosB;
        this._screen = [
          [cosB, -sinB],
          [sinA * sinB, sinA * cosB]
        ];
      }
      toScreen(worldPoint, screenPoint) {
        const x = this._screen[0][0] * worldPoint[0] + this._screen[0][1] * worldPoint[1];
        const y = this._screen[1][0] * worldPoint[0] + this._screen[1][1] * worldPoint[1];
        screenPoint[0] = x;
        screenPoint[1] = y;
      }
    }
    TopDownMovementRuntimeBehavior2.IsometryTransformation = IsometryTransformation;
  })(TopDownMovementRuntimeBehavior = gdjs2.TopDownMovementRuntimeBehavior || (gdjs2.TopDownMovementRuntimeBehavior = {}));
  gdjs2.registerBehavior("TopDownMovementBehavior::TopDownMovementBehavior", gdjs2.TopDownMovementRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=topdownmovementruntimebehavior.js.map
