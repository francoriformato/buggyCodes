var gdjs;
(function(gdjs2) {
  const AnchorRuntimeBehavior2 = class extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._invalidDistances = true;
      this._leftEdgeDistance = 0;
      this._rightEdgeDistance = 0;
      this._topEdgeDistance = 0;
      this._bottomEdgeDistance = 0;
      this._relativeToOriginalWindowSize = !!behaviorData.relativeToOriginalWindowSize;
      this._leftEdgeAnchor = behaviorData.leftEdgeAnchor;
      this._rightEdgeAnchor = behaviorData.rightEdgeAnchor;
      this._topEdgeAnchor = behaviorData.topEdgeAnchor;
      this._bottomEdgeAnchor = behaviorData.bottomEdgeAnchor;
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      if (oldBehaviorData.leftEdgeAnchor !== newBehaviorData.leftEdgeAnchor) {
        this._leftEdgeAnchor = newBehaviorData.leftEdgeAnchor;
      }
      if (oldBehaviorData.rightEdgeAnchor !== newBehaviorData.rightEdgeAnchor) {
        this._rightEdgeAnchor = newBehaviorData.rightEdgeAnchor;
      }
      if (oldBehaviorData.topEdgeAnchor !== newBehaviorData.topEdgeAnchor) {
        this._topEdgeAnchor = newBehaviorData.topEdgeAnchor;
      }
      if (oldBehaviorData.bottomEdgeAnchor !== newBehaviorData.bottomEdgeAnchor) {
        this._bottomEdgeAnchor = newBehaviorData.bottomEdgeAnchor;
      }
      if (oldBehaviorData.relativeToOriginalWindowSize !== newBehaviorData.relativeToOriginalWindowSize) {
        return false;
      }
      return true;
    }
    onActivate() {
      this._invalidDistances = true;
    }
    doStepPreEvents(runtimeScene) {
      const game = runtimeScene.getGame();
      let rendererWidth = game.getGameResolutionWidth();
      let rendererHeight = game.getGameResolutionHeight();
      const layer = runtimeScene.getLayer(this.owner.getLayer());
      if (this._invalidDistances) {
        if (this._relativeToOriginalWindowSize) {
          rendererWidth = game.getOriginalWidth();
          rendererHeight = game.getOriginalHeight();
        }
        const topLeftPixel = layer.convertCoords(this.owner.getDrawableX(), this.owner.getDrawableY());
        if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_LEFT) {
          this._leftEdgeDistance = topLeftPixel[0];
        } else {
          if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_RIGHT) {
            this._leftEdgeDistance = rendererWidth - topLeftPixel[0];
          } else {
            if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.PROPORTIONAL) {
              this._leftEdgeDistance = topLeftPixel[0] / rendererWidth;
            }
          }
        }
        if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_TOP) {
          this._topEdgeDistance = topLeftPixel[1];
        } else {
          if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_BOTTOM) {
            this._topEdgeDistance = rendererHeight - topLeftPixel[1];
          } else {
            if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.PROPORTIONAL) {
              this._topEdgeDistance = topLeftPixel[1] / rendererHeight;
            }
          }
        }
        const bottomRightPixel = layer.convertCoords(this.owner.getDrawableX() + this.owner.getWidth(), this.owner.getDrawableY() + this.owner.getHeight());
        if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_LEFT) {
          this._rightEdgeDistance = bottomRightPixel[0];
        } else {
          if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_RIGHT) {
            this._rightEdgeDistance = rendererWidth - bottomRightPixel[0];
          } else {
            if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.PROPORTIONAL) {
              this._rightEdgeDistance = bottomRightPixel[0] / rendererWidth;
            }
          }
        }
        if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_TOP) {
          this._bottomEdgeDistance = bottomRightPixel[1];
        } else {
          if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_BOTTOM) {
            this._bottomEdgeDistance = rendererHeight - bottomRightPixel[1];
          } else {
            if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.PROPORTIONAL) {
              this._bottomEdgeDistance = bottomRightPixel[1] / rendererHeight;
            }
          }
        }
        this._invalidDistances = false;
      } else {
        let leftPixel = 0;
        let topPixel = 0;
        let rightPixel = 0;
        let bottomPixel = 0;
        if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_LEFT) {
          leftPixel = this._leftEdgeDistance;
        } else {
          if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_RIGHT) {
            leftPixel = rendererWidth - this._leftEdgeDistance;
          } else {
            if (this._leftEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.PROPORTIONAL) {
              leftPixel = this._leftEdgeDistance * rendererWidth;
            }
          }
        }
        if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_TOP) {
          topPixel = this._topEdgeDistance;
        } else {
          if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_BOTTOM) {
            topPixel = rendererHeight - this._topEdgeDistance;
          } else {
            if (this._topEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.PROPORTIONAL) {
              topPixel = this._topEdgeDistance * rendererHeight;
            }
          }
        }
        if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_LEFT) {
          rightPixel = this._rightEdgeDistance;
        } else {
          if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.WINDOW_RIGHT) {
            rightPixel = rendererWidth - this._rightEdgeDistance;
          } else {
            if (this._rightEdgeAnchor === AnchorRuntimeBehavior2.HorizontalAnchor.PROPORTIONAL) {
              rightPixel = this._rightEdgeDistance * rendererWidth;
            }
          }
        }
        if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_TOP) {
          bottomPixel = this._bottomEdgeDistance;
        } else {
          if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.WINDOW_BOTTOM) {
            bottomPixel = rendererHeight - this._bottomEdgeDistance;
          } else {
            if (this._bottomEdgeAnchor === AnchorRuntimeBehavior2.VerticalAnchor.PROPORTIONAL) {
              bottomPixel = this._bottomEdgeDistance * rendererHeight;
            }
          }
        }
        const topLeftCoord = layer.convertInverseCoords(leftPixel, topPixel);
        const bottomRightCoord = layer.convertInverseCoords(rightPixel, bottomPixel);
        if (this._rightEdgeAnchor !== AnchorRuntimeBehavior2.HorizontalAnchor.NONE) {
          this.owner.setWidth(bottomRightCoord[0] - topLeftCoord[0]);
        }
        if (this._bottomEdgeAnchor !== AnchorRuntimeBehavior2.VerticalAnchor.NONE) {
          this.owner.setHeight(bottomRightCoord[1] - topLeftCoord[1]);
        }
        if (this._leftEdgeAnchor !== AnchorRuntimeBehavior2.HorizontalAnchor.NONE) {
          this.owner.setX(topLeftCoord[0] + this.owner.getX() - this.owner.getDrawableX());
        }
        if (this._topEdgeAnchor !== AnchorRuntimeBehavior2.VerticalAnchor.NONE) {
          this.owner.setY(topLeftCoord[1] + this.owner.getY() - this.owner.getDrawableY());
        }
      }
    }
    doStepPostEvents(runtimeScene) {
    }
  };
  let AnchorRuntimeBehavior = AnchorRuntimeBehavior2;
  AnchorRuntimeBehavior.HorizontalAnchor = {
    NONE: 0,
    WINDOW_LEFT: 1,
    WINDOW_RIGHT: 2,
    PROPORTIONAL: 3
  };
  AnchorRuntimeBehavior.VerticalAnchor = {
    NONE: 0,
    WINDOW_TOP: 1,
    WINDOW_BOTTOM: 2,
    PROPORTIONAL: 3
  };
  gdjs2.AnchorRuntimeBehavior = AnchorRuntimeBehavior;
  gdjs2.registerBehavior("AnchorBehavior::AnchorBehavior", gdjs2.AnchorRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=anchorruntimebehavior.js.map
