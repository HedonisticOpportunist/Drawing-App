! function (t, i) {
    "function" == typeof define && define.amd ? define("p5.play", ["p5"], function (t) {
        i(t)
    }) : "object" == typeof exports ? i(require("../p5")) : i(t.p5)
}(this, function (j) {
    function t(i, e) {
        Object.defineProperty(j.prototype, i, {
            configurable: !0,
            enumerable: !0,
            get: function () {
                var t = this instanceof j && !this._isGlobal ? this : window;
                return void 0 === t._p5PlayProperties && (t._p5PlayProperties = {}), i in t._p5PlayProperties || (t._p5PlayProperties[i] = e.call(t)), t._p5PlayProperties[i]
            }
        })
    }

    function i(e) {
        if ("function" != typeof e) throw new Error("constructor must be a function");
        return function () {
            var i = this;

            function t() {
                var t = Array.prototype.slice.call(arguments);
                return e.apply(this, [i].concat(t))
            }
            return t.prototype = e.prototype, t
        }
    }

    function k(e) {
        return function (t) {
            var i = e[t];
            if ("function" != typeof i) throw new Error('"' + t + '" is not a p5 method');
            return i.bind(e)
        }
    }
    j.prototype.registerMethod("init", function () {
        this.camera = new e(this, 0, 0, 1), this.camera.init = !1
    });
    var z = j.prototype.abs,
        L = j.prototype.radians,
        K = j.prototype.dist,
        q = j.prototype.degrees,
        G = j.prototype.pow,
        V = j.prototype.round;
    t("allSprites", function () {
        return new j.prototype.Group
    }), j.prototype.spriteUpdate = !0, j.prototype.createSprite = function (t, i, e, s) {
        s = new Q(this, t, i, e, s);
        return s.depth = this.allSprites.maxDepth() + 1, this.allSprites.add(s), s
    }, j.prototype.removeSprite = function (t) {
        t.remove()
    }, j.prototype.updateSprites = function (t) {
        if (!1 === t && (this.spriteUpdate = !1), !0 === t && (this.spriteUpdate = !0), this.spriteUpdate)
            for (var i = 0; i < this.allSprites.size(); i++) this.allSprites.get(i).update()
    }, j.prototype.getSprites = function () {
        if (0 === arguments.length) return this.allSprites.toArray();
        for (var t = [], i = 0; i < arguments.length; i++)
            for (var e = 0; e < this.allSprites.size(); e++) this.allSprites.get(e).isTagged(arguments[i]) && t.push(this.allSprites.get(e));
        return t
    }, j.prototype.drawSprites = function (t) {
        if ("function" != typeof (t = t || this.allSprites).draw) throw "Error: with drawSprites you can only draw all sprites or a group";
        t.draw()
    }, j.prototype.drawSprite = function (t) {
        t && t.display()
    }, j.prototype.loadAnimation = function () {
        return tt(this.Animation, arguments)
    }, j.prototype.loadSpriteSheet = function () {
        return tt(this.SpriteSheet, arguments)
    }, j.prototype.animation = function (t, i, e) {
        t.draw(i, e)
    }, t("_p5play", function () {
        return {
            keyStates: {},
            mouseStates: {}
        }
    });

    function Q(v, t, i, e, s) {
        var o = k(v),
            x = o("createVector"),
            n = o("color"),
            h = o("random"),
            r = o("print"),
            a = o("push"),
            l = o("pop"),
            c = o("colorMode"),
            u = o("noStroke"),
            d = o("rectMode"),
            f = o("ellipseMode"),
            p = o("imageMode"),
            g = o("translate"),
            y = o("scale"),
            m = o("rotate"),
            _ = o("stroke"),
            b = o("strokeWeight"),
            S = o("line"),
            w = o("noFill"),
            A = o("fill"),
            P = o("textAlign"),
            I = o("textSize"),
            M = o("text"),
            E = o("rect"),
            T = o("cos"),
            C = o("sin"),
            D = o("atan2"),
            O = v.quadTree,
            W = v.camera,
            N = j.prototype.RGB,
            Y = j.prototype.CENTER,
            F = j.prototype.LEFT,
            R = j.prototype.BOTTOM;
        this.position = x(t, i), this.previousPosition = x(t, i), this.newPosition = x(t, i), this.deltaX = 0, this.deltaY = 0, this.velocity = x(0, 0), this.maxSpeed = -1, this.friction = 0, this.collider = void 0, this.colliderType = "none", this.touching = {}, this.touching.left = !1, this.touching.right = !1, this.touching.top = !1, this.touching.bottom = !1, this.mass = 1, this.immovable = !1, this.restitution = 1, Object.defineProperty(this, "rotation", {
            enumerable: !0,
            get: function () {
                return this._rotation
            },
            set: function (t) {
                this._rotation = t, this.rotateToDirection && this.setSpeed(this.getSpeed(), t)
            }
        }), this._rotation = 0, this.rotationSpeed = 0, this.rotateToDirection = !1, this.depth = 0;
        var B = this.scale = 1,
            U = 1;
        this.visible = !0, this.mouseActive = !1, this.mouseIsOver = !1, this.mouseIsPressed = !1, this._internalWidth = e, this._internalHeight = s, Object.defineProperty(this, "width", {
            enumerable: !0,
            configurable: !0,
            get: function () {
                return this._internalWidth
            },
            set: function (t) {
                this._internalWidth = t
            }
        }), this.width = void 0 === e ? 100 : e, Object.defineProperty(this, "height", {
            enumerable: !0,
            configurable: !0,
            get: function () {
                return this._internalHeight
            },
            set: function (t) {
                this._internalHeight = t
            }
        }), this.height = void 0 === s ? 100 : s, this.originalWidth = this._internalWidth, this.originalHeight = this._internalHeight, this.removed = !1, this.life = -1, this.debug = !1, this.shapeColor = n(h(255), h(255), h(255)), this.groups = [];
        var H = {},
            X = "";
        this.animation = void 0, this._drawnWithCamera = !1, this._syncAnimationSizes = function () {
            "default" === this.colliderType && 1 !== H[X].getWidth() && 1 !== H[X].getHeight() && (this.collider = this.getBoundingBox(), this.colliderType = "image", this._internalWidth = H[X].getWidth() * z(this._getScaleX()), this._internalHeight = H[X].getHeight() * z(this._getScaleY())), !H[X].frameChanged && void 0 !== this.width && void 0 !== this.height || (this._internalWidth = H[X].getWidth() * z(this._getScaleX()), this._internalHeight = H[X].getHeight() * z(this._getScaleY()))
        }, this.update = function () {
            var t;
            this.removed || (this.newPosition !== this.position ? this.previousPosition = x(this.newPosition.x, this.newPosition.y) : this.previousPosition = x(this.position.x, this.position.y), this.velocity.x *= 1 - this.friction, this.velocity.y *= 1 - this.friction, -1 !== this.maxSpeed && this.limitSpeed(this.maxSpeed), this.rotateToDirection && 0 < this.velocity.mag() && (this._rotation = this.getDirection()), this.rotation += this.rotationSpeed, this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.newPosition = x(this.position.x, this.position.y), this.deltaX = this.position.x - this.previousPosition.x, this.deltaY = this.position.y - this.previousPosition.y, H[X] && (H[X].update(), this._syncAnimationSizes()), this.collider && (this.collider instanceof Z && (t = v._angleMode === v.RADIANS ? L(this.rotation) : this.rotation, "custom" === this.colliderType ? (this.collider.extents.x = this.collider.originalExtents.x * z(this._getScaleX()) * z(T(t)) + this.collider.originalExtents.y * z(this._getScaleY()) * z(C(t)), this.collider.extents.y = this.collider.originalExtents.x * z(this._getScaleX()) * z(C(t)) + this.collider.originalExtents.y * z(this._getScaleY()) * z(T(t))) : "default" === this.colliderType ? (this.collider.extents.x = this._internalWidth * z(this._getScaleX()) * z(T(t)) + this._internalHeight * z(this._getScaleY()) * z(C(t)), this.collider.extents.y = this._internalWidth * z(this._getScaleX()) * z(C(t)) + this._internalHeight * z(this._getScaleY()) * z(T(t))) : "image" === this.colliderType && (this.collider.extents.x = this._internalWidth * z(T(t)) + this._internalHeight * z(C(t)), this.collider.extents.y = this._internalWidth * z(C(t)) + this._internalHeight * z(T(t)))), this.collider instanceof J && (this.collider.radius = this.collider.originalRadius * z(this.scale))), this.mouseActive ? (this.collider || this.setDefaultCollider(), this.mouseUpdate()) : "function" != typeof this.onMouseOver && "function" != typeof this.onMouseOut && "function" != typeof this.onMousePressed && "function" != typeof this.onMouseReleased || (this.mouseActive = !0, this.collider || this.setDefaultCollider(), this.mouseUpdate()), 0 < this.life && this.life--, 0 === this.life && this.remove())
        }, this.setDefaultCollider = function () {
            H[X] && 1 !== H[X].getWidth() && 1 !== H[X].getHeight() ? (this.collider = this.getBoundingBox(), this._internalWidth = H[X].getWidth() * z(this._getScaleX()), this._internalHeight = H[X].getHeight() * z(this._getScaleY()), this.colliderType = "image") : H[X] && 1 === H[X].getWidth() && 1 === H[X].getHeight() || (this.collider = new Z(v, this.position, x(this._internalWidth, this._internalHeight)), this.colliderType = "default"), v.quadTree.insert(this)
        }, this.mouseUpdate = function () {
            var t, i = this.mouseIsOver,
                e = this.mouseIsPressed;
            this.mouseIsOver = !1, this.mouseIsPressed = !1, t = this._drawnWithCamera ? x(W.mouseX, W.mouseY) : x(v.mouseX, v.mouseY), this.collider && (this.collider instanceof J ? K(t.x, t.y, this.collider.center.x, this.collider.center.y) < this.collider.radius && (this.mouseIsOver = !0) : this.collider instanceof Z && t.x > this.collider.left() && t.y > this.collider.top() && t.x < this.collider.right() && t.y < this.collider.bottom() && (this.mouseIsOver = !0), this.mouseIsOver && v.mouseIsPressed && (this.mouseIsPressed = !0), !i && this.mouseIsOver && void 0 !== this.onMouseOver && ("function" == typeof this.onMouseOver ? this.onMouseOver.call(this, this) : r("Warning: onMouseOver should be a function")), i && !this.mouseIsOver && void 0 !== this.onMouseOut && ("function" == typeof this.onMouseOut ? this.onMouseOut.call(this, this) : r("Warning: onMouseOut should be a function")), !e && this.mouseIsPressed && void 0 !== this.onMousePressed && ("function" == typeof this.onMousePressed ? this.onMousePressed.call(this, this) : r("Warning: onMousePressed should be a function")), !e || v.mouseIsPressed || this.mouseIsPressed || void 0 === this.onMouseReleased || ("function" == typeof this.onMouseReleased ? this.onMouseReleased.call(this, this) : r("Warning: onMouseReleased should be a function")))
        }, this.setCollider = function (t, i, e, s, o) {
            if ("rectangle" !== t && "circle" !== t) throw new TypeError('setCollider expects the first argument to be either "circle" or "rectangle"');
            if ("circle" === t && 1 < arguments.length && arguments.length < 4) throw new TypeError('Usage: setCollider("circle") or setCollider("circle", offsetX, offsetY, radius)');
            if ("circle" === t && 4 < arguments.length) v._warn('Extra parameters to setCollider were ignored. Usage: setCollider("circle") or setCollider("circle", offsetX, offsetY, radius)');
            else {
                if ("rectangle" === t && 1 < arguments.length && arguments.length < 5) throw new TypeError('Usage: setCollider("rectangle") or setCollider("rectangle", offsetX, offsetY, width, height)');
                "rectangle" === t && 5 < arguments.length && v._warn('Extra parameters to setCollider were ignored. Usage: setCollider("rectangle") or setCollider("rectangle", offsetX, offsetY, width, height)')
            }
            this.colliderType = "custom";
            var n = x(i, e);
            "rectangle" === t && 1 === arguments.length ? this.collider = new Z(v, this.position, x(this.width, this.height)) : "rectangle" === t && 5 <= arguments.length ? this.collider = new Z(v, this.position, x(s, o), n) : "circle" === t && 1 === arguments.length ? this.collider = new J(v, this.position, Math.floor(Math.max(this.width, this.height) / 2)) : "circle" === t && 4 <= arguments.length && (this.collider = new J(v, this.position, s, n)), O.insert(this)
        }, this.getBoundingBox = function () {
            var t = H[X].getWidth() * z(this._getScaleX()),
                i = H[X].getHeight() * z(this._getScaleY());
            return new Z(v, this.position, x(t, i))
        }, this.mirrorX = function (t) {
            if (1 !== t && -1 !== t) return B;
            B = t
        }, this.mirrorY = function (t) {
            if (1 !== t && -1 !== t) return U;
            U = t
        }, this._getScaleX = function () {
            return this.scale
        }, this._getScaleY = function () {
            return this.scale
        }, this.display = function () {
            this.visible && !this.removed && (a(), c(N), u(), d(Y), f(Y), p(Y), g(this.position.x, this.position.y), y(this._getScaleX() * B, this._getScaleY() * U), v._angleMode === v.RADIANS ? m(L(this.rotation)) : m(this.rotation), this.draw(), l(), this._drawnWithCamera = W.active, this.debug && (a(), _(0, 255, 0), b(1), S(this.position.x - 10, this.position.y, this.position.x + 10, this.position.y), S(this.position.x, this.position.y - 10, this.position.x, this.position.y + 10), w(), u(), A(0, 255, 0), P(F, R), I(16), M(this.depth + "", this.position.x + 4, this.position.y - 2), w(), _(0, 255, 0), void 0 !== this.collider && this.collider.draw(), l()))
        }, this.draw = function () {
            "" !== X && H ? H[X] && H[X].draw(0, 0, 0) : (u(), A(this.shapeColor), E(0, 0, this._internalWidth, this._internalHeight))
        }, this.remove = function () {
            for (this.removed = !0, O.removeObject(this); 0 < this.groups.length;) this.groups[0].remove(this)
        }, this.setVelocity = function (t, i) {
            this.velocity.x = t, this.velocity.y = i
        }, this.getSpeed = function () {
            return this.velocity.mag()
        }, this.getDirection = function () {
            var t = D(this.velocity.y, this.velocity.x);
            return isNaN(t) && (t = 0), v._angleMode === v.RADIANS && (t = q(t)), t
        }, this.addToGroup = function (t) {
            t instanceof Array ? t.add(this) : r("addToGroup error: " + t + " is not a group")
        }, this.limitSpeed = function (t) {
            var i = this.getSpeed();
            z(i) > t && (i = t / z(i), this.velocity.x *= i, this.velocity.y *= i)
        }, this.setSpeed = function (t, i) {
            i = void 0 === i ? 0 !== this.velocity.x || 0 !== this.velocity.y ? v.atan2(this.velocity.y, this.velocity.x) : v._angleMode === v.RADIANS ? L(this._rotation) : this._rotation : v._angleMode === v.RADIANS ? L(i) : i;
            this.velocity.x = T(i) * t, this.velocity.y = C(i) * t
        }, this.addSpeed = function (t, i) {
            i = v._angleMode === v.RADIANS ? L(i) : i;
            this.velocity.x += T(i) * t, this.velocity.y += C(i) * t
        }, this.attractionPoint = function (t, i, e) {
            i = D(e - this.position.y, i - this.position.x);
            this.velocity.x += T(i) * t, this.velocity.y += C(i) * t
        }, this.addImage = function () {
            if ("string" == typeof arguments[0] && arguments[1] instanceof j.Image) this.addAnimation(arguments[0], arguments[1]);
            else {
                if (!(arguments[0] instanceof j.Image)) throw "addImage error: allowed usages are <image> or <label>, <image>";
                this.addAnimation("normal", arguments[0])
            }
        }, this.addAnimation = function (t) {
            if ("string" != typeof t) return r("Sprite.addAnimation error: the first argument must be a label (String)"), -1;
            if (arguments.length < 2) return r("addAnimation error: you must specify a label and n frame images"), -1;
            if (arguments[1] instanceof $) {
                var i = arguments[1].clone();
                return H[t] = i, "" === X && (X = t, this.animation = i), i.isSpriteAnimation = !0, this._internalWidth = i.getWidth() * z(this._getScaleX()), this._internalHeight = i.getHeight() * z(this._getScaleY()), i
            }
            for (var e = [], s = 1; s < arguments.length; s++) e.push(arguments[s]);
            return i = tt(v.Animation, e), H[t] = i, "" === X && (X = t, this.animation = i), i.isSpriteAnimation = !0, this._internalWidth = i.getWidth() * z(this._getScaleX()), this._internalHeight = i.getHeight() * z(this._getScaleY()), i
        }, this.changeImage = function (t) {
            this.changeAnimation(t)
        }, this.getAnimationLabel = function () {
            return X
        }, this.changeAnimation = function (t) {
            H[t] ? (X = t, this.animation = H[t]) : r("changeAnimation error: no animation labeled " + t)
        }, this.overlapPixel = function (t, i) {
            t = x(t, i), i = this.animation.getFrameImage();
            return t.x -= this.position.x - i.width / 2, t.y -= this.position.y - i.height / 2, !(t.x < 0 || t.x > i.width || t.y < 0 || t.y > i.height) && (0 !== this.rotation || 1 !== this.scale ? (r("Error: overlapPixel doesn't work with scaled or rotated sprites yet"), !1) : 255 === i.get(t.x, t.y)[3])
        }, this.overlapPoint = function (t, i) {
            t = x(t, i);
            if (this.collider || this.setDefaultCollider(), void 0 === this.collider) return !1;
            if (this.collider instanceof Z) return t.x > this.collider.left() && t.x < this.collider.right() && t.y > this.collider.top() && t.y < this.collider.bottom();
            if (this.collider instanceof J) {
                i = this.collider.radius * this.collider.radius;
                return G(this.collider.center.x - t.x, 2) + G(this.collider.center.y - t.y, 2) < i
            }
            return !1
        }, this.overlap = function (t, i) {
            return this.AABBops("overlap", t, i)
        }, this.collide = function (t, i) {
            return this.AABBops("collide", t, i)
        }, this.displace = function (t, i) {
            return this.AABBops("displace", t, i)
        }, this.bounce = function (t, i) {
            return this.AABBops("bounce", t, i)
        }, this.AABBops = function (t, i, e) {
            this.touching.left = !1, this.touching.right = !1, this.touching.top = !1;
            var s = this.touching.bottom = !1,
                o = [];
            if (i instanceof Q) o.push(i);
            else {
                if (!(i instanceof Array)) throw "Error: overlap can only be checked between sprites or groups";
                void 0 !== O && O.active && (o = O.retrieveFromGroup(this, i)), 0 === o.length && (o = i)
            }
            for (var n, h, r, a, l, c, u, d, f, p, g, y, m = 0; m < o.length; m++) this === o[m] || this.removed || (h = o[m], void 0 === this.collider && this.setDefaultCollider(), void 0 === h.collider && h.setDefaultCollider(), void 0 !== this.collider && void 0 !== h.collider && ("overlap" === t ? (this.collider instanceof J ? h.collider.overlap(this.collider) : this.collider.overlap(h.collider)) && (s = !0, void 0 !== e && "function" == typeof e && e.call(this, this, h)) : "collide" !== t && "displace" !== t && "bounce" !== t || (n = x(0, 0), f = z(this.velocity.x - h.velocity.x) >= h.collider.extents.x / 2 && 0 === V(this.deltaX - this.velocity.x), p = z(this.velocity.y - h.velocity.y) >= h.collider.size().y / 2 && 0 === V(this.deltaY - this.velocity.y), f || p ? (y = x((this.position.x + this.previousPosition.x) / 2, (this.position.y + this.previousPosition.y) / 2), d = x(z(this.position.x - this.previousPosition.x) + this.collider.extents.x, z(this.position.y - this.previousPosition.y) + this.collider.extents.y), new Z(v, y, d, this.collider.offset).overlap(h.collider) && (f && (this.velocity.x < 0 ? n.x = h.collider.right() - this.collider.left() + 1 : 0 < this.velocity.x && (n.x = h.collider.left() - this.collider.right() - 1)), p && (0 < this.velocity.y ? n.y = h.collider.top() - this.collider.bottom() - 1 : this.velocity.y < 0 && (n.y = h.collider.bottom() - this.collider.top() + 1)))) : n = this.collider instanceof J ? h.collider.collide(this.collider).mult(-1) : this.collider.collide(h.collider), 0 === n.x && 0 === n.y || ("displace" !== t || h.immovable ? "collide" !== t && "bounce" !== t || this.immovable || (this.position.add(n), this.previousPosition = x(this.position.x, this.position.y), this.newPosition = x(this.position.x, this.position.y)) : h.position.sub(n), 0 < n.x && (this.touching.left = !0), n.x < 0 && (this.touching.right = !0), n.y < 0 && (this.touching.bottom = !0), 0 < n.y && (this.touching.top = !0), "bounce" === t && (this.collider instanceof J && h.collider instanceof J ? (g = j.Vector.sub(this.position, h.position), u = j.Vector.sub(h.position, this.position), y = g.magSq(), d = this.mass + h.mass, p = f = 0, this.immovable ? p = 2 : h.immovable ? f = 2 : (f = 2 * h.mass / d, p = 2 * this.mass / d), g = g.mult(f * j.Vector.sub(this.velocity, h.velocity).dot(g) / y), y = u.mult(p * j.Vector.sub(h.velocity, this.velocity).dot(u) / y), this.velocity.sub(g.mult(this.restitution)), h.velocity.sub(y.mult(h.restitution))) : (h.immovable ? (r = -this.velocity.x + h.velocity.x, a = -this.velocity.y + h.velocity.y) : (r = (this.velocity.x * (this.mass - h.mass) + 2 * h.mass * h.velocity.x) / (this.mass + h.mass), a = (this.velocity.y * (this.mass - h.mass) + 2 * h.mass * h.velocity.y) / (this.mass + h.mass), l = (h.velocity.x * (h.mass - this.mass) + 2 * this.mass * this.velocity.x) / (this.mass + h.mass), c = (h.velocity.y * (h.mass - this.mass) + 2 * this.mass * this.velocity.y) / (this.mass + h.mass)), z(n.x) > z(n.y) && (this.immovable || (this.velocity.x = r * this.restitution), h.immovable || (h.velocity.x = l * h.restitution)), z(n.x) < z(n.y) && (this.immovable || (this.velocity.y = a * this.restitution), h.immovable || (h.velocity.y = c * h.restitution)))), void 0 !== e && "function" == typeof e && e.call(this, this, h), s = !0))));
            return s
        }
    }

    function e(t, i, e, s) {
        this.position = t.createVector(i, e), this.zoom = s, this.mouseX = t.mouseX, this.mouseY = t.mouseY, this.active = !1, this.on = function () {
            this.active || (o.call(t), this.active = !0)
        }, this.off = function () {
            this.active && (n.call(t), this.active = !1)
        }
    }

    function o() {
        var t = this,
            i = t.camera;
        i.init || 0 !== i.position.x || 0 !== i.position.y || (i.position.x = t.width / 2, i.position.y = t.height / 2, i.init = !0), i.mouseX = t.mouseX + i.position.x - t.width / 2, i.mouseY = t.mouseY + i.position.y - t.height / 2, i.active || (i.active = !0, t.push(), t.scale(i.zoom), t.translate(-i.position.x + t.width / 2 / i.zoom, -i.position.y + t.height / 2 / i.zoom))
    }

    function n() {
        this.camera.active && (this.pop(), this.camera.active = !1)
    }

    function J(h, t, i, e) {
        var r = k(h)("createVector"),
            s = j.prototype.CENTER;
        this.center = t, this.radius = i, this.originalRadius = i, this.offset = void 0 === e ? r(0, 0) : e, this.extents = r(2 * i, 2 * i), this.draw = function () {
            h.noFill(), h.stroke(0, 255, 0), h.rectMode(s), h.ellipse(this.center.x + this.offset.x, this.center.y + this.offset.y, 2 * this.radius, 2 * this.radius)
        }, this.overlap = function (t) {
            var i = this.radius + t.radius;
            i *= i;
            var e = this.center.x + this.offset.x,
                s = this.center.y + this.offset.y,
                o = t.center.x + t.offset.x,
                t = t.center.y + t.offset.y;
            return G(e - o, 2) + G(s - t, 2) < i
        }, this.collide = function (t) {
            if (this.overlap(t)) {
                var i = this.center.x + this.offset.x,
                    e = this.center.y + this.offset.y,
                    s = t.center.x + t.offset.x,
                    o = t.center.y + t.offset.y,
                    n = h.atan2(e - o, i - s),
                    t = this.radius + t.radius,
                    o = z(t - K(i, e, s, o));
                return r(h.cos(n) * o, h.sin(n) * o)
            }
            return r(0, 0)
        }, this.size = function () {
            return r(2 * this.radius, 2 * this.radius)
        }, this.left = function () {
            return this.center.x + this.offset.x - this.radius
        }, this.right = function () {
            return this.center.x + this.offset.x + this.radius
        }, this.top = function () {
            return this.center.y + this.offset.y - this.radius
        }, this.bottom = function () {
            return this.center.y + this.offset.y + this.radius
        }
    }

    function Z(o, t, i, e) {
        var n = k(o)("createVector"),
            s = j.prototype.CENTER,
            h = j.prototype.PI;
        this.center = t, this.extents = i, this.originalExtents = i.copy(), this.offset = void 0 === e ? n(0, 0) : e, this.min = function () {
            return n(this.center.x + this.offset.x - this.extents.x, this.center.y + this.offset.y - this.extents.y)
        }, this.max = function () {
            return n(this.center.x + this.offset.x + this.extents.x, this.center.y + this.offset.y + this.extents.y)
        }, this.right = function () {
            return this.center.x + this.offset.x + this.extents.x / 2
        }, this.left = function () {
            return this.center.x + this.offset.x - this.extents.x / 2
        }, this.top = function () {
            return this.center.y + this.offset.y - this.extents.y / 2
        }, this.bottom = function () {
            return this.center.y + this.offset.y + this.extents.y / 2
        }, this.size = function () {
            return n(2 * this.extents.x, 2 * this.extents.y)
        }, this.rotate = function (t) {
            var i = o._angleMode === o.RADIANS ? L(t) : t,
                t = this.extents.x * z(o.cos(i)) + this.extents.y * z(o.sin(i)),
                i = this.extents.x * z(o.sin(i)) + this.extents.y * z(o.cos(i));
            this.extents.x = t, this.extents.y = i
        }, this.draw = function () {
            o.noFill(), o.stroke(0, 255, 0), o.rectMode(s), o.rect(this.center.x + this.offset.x, this.center.y + this.offset.y, this.size().x / 2, this.size().y / 2)
        }, this.overlap = function (t) {
            if (t instanceof Z) {
                var i = t.minkowskiDifference(this);
                return i.min().x <= 0 && 0 <= i.max().x && i.min().y <= 0 && 0 <= i.max().y
            }
            if (t instanceof J) {
                i = n(t.center.x, t.center.y);
                return t.center.x < this.left() ? i.x = this.left() : t.center.x > this.right() && (i.x = this.right()), t.center.y < this.top() ? i.y = this.top() : t.center.y > this.bottom() && (i.y = this.bottom()), i.dist(t.center) < t.radius
            }
        }, this.collide = function (t) {
            if (t instanceof Z) {
                var i = t.minkowskiDifference(this);
                return i.min().x <= 0 && 0 <= i.max().x && i.min().y <= 0 && 0 <= i.max().y ? i.closestPointOnBoundsToPoint(n(0, 0)) : n(0, 0)
            }
            if (t instanceof J) {
                var e, s = n(t.center.x, t.center.y);
                if (t.center.x < this.left() ? s.x = this.left() : t.center.x > this.right() && (s.x = this.right()), t.center.y < this.top() ? s.y = this.top() : t.center.y > this.bottom() && (s.y = this.bottom()), s.dist(t.center) < t.radius) {
                    s.x === t.center.x && s.y === t.center.y ? (i = s.x - this.center.x, e = s.y - this.center.y, z(i) < z(e) ? s.x = 0 < i ? this.right() : this.left() : s.y = e < 0 ? this.top() : this.bottom(), 0 === (e = o.atan2(t.center.y - s.y, t.center.x - s.x)) && (s.x === this.right() && (e = h), s.y === this.top() && (e = h / 2), s.y === this.bottom() && (e = -h / 2))) : e = o.atan2(s.y - t.center.y, s.x - t.center.x);
                    s = n(s.x - t.center.x, s.y - t.center.y);
                    return n(o.cos(e) * t.radius - s.x, o.sin(e) * t.radius - s.y)
                }
                return n(0, 0)
            }
        }, this.minkowskiDifference = function (t) {
            var i = this.min().sub(t.max()),
                t = this.size().add(t.size());
            return new Z(o, i.add(t.div(2)), t.div(2))
        }, this.closestPointOnBoundsToPoint = function (t) {
            var i = z(t.x - this.min().x),
                e = n(this.min().x, t.y);
            return z(this.max().x - t.x) < i && (i = z(this.max().x - t.x), e = n(this.max().x, t.y)), z(this.max().y - t.y) < i && (i = z(this.max().y - t.y), e = n(t.x, this.max().y)), z(this.min().y - t.y) < i && (i = z(this.min.y - t.y), e = n(t.x, this.min().y)), e
        }
    }

    function $(s) {
        var t = Array.prototype.slice.call(arguments, 1),
            o = j.prototype.CENTER;
        this.images = [];
        var n = 0,
            i = 0,
            e = -1;
        if (this.offX = 0, this.offY = 0, this.frameDelay = 4, this.playing = !0, this.visible = !0, this.looping = !0, this.frameChanged = !1, this.imageCollider = !1, 2 === t.length && "string" == typeof t[0] && "string" == typeof t[1]) {
            var h = t[0],
                r = t[1];
            if (".png" !== h.substring(h.length - 4, h.length) && (s.print("Animation error: you need to use .png files (filename " + h + ")"), h = -1), ".png" !== r.substring(r.length - 4, r.length) && (s.print("Animation error: you need to use .png files (filename " + r + ")"), r = -1), -1 !== h && -1 !== r) {
                for (var a = 0, l = 0, c = h.length - 5; 0 <= c; c--) "0" <= h.charAt(c) && h.charAt(c) <= "9" && a++;
                for (c = r.length - 5; 0 <= c; c--) "0" <= r.charAt(c) && r.charAt(c) <= "9" && l++;
                var u, d, f = h.substring(0, h.length - (4 + a)),
                    p = r.substring(0, r.length - (4 + l)),
                    g = parseInt(h.substring(h.length - (4 + a), h.length - 4), 10),
                    y = parseInt(r.substring(r.length - (4 + l), r.length - 4), 10);
                if (y < g && (u = y, y = g, g = u), f !== p) this.images.push(s.loadImage(h)), this.images.push(s.loadImage(r));
                else if (a === l)
                    for (c = g; c <= y; c++) d = f + s.nf(c, a) + ".png", this.images.push(s.loadImage(d));
                else
                    for (c = g; c <= y; c++) d = f + c + ".png", this.images.push(s.loadImage(d))
            }
        } else if (1 === t.length && t[0] instanceof m) this.spriteSheet = t[0], this.images = this.spriteSheet.frames;
        else if (0 !== t.length)
            for (c = 0; c < t.length; c++) t[c] instanceof j.Image ? this.images.push(t[c]) : this.images.push(s.loadImage(t[c]));
        this.clone = function () {
            var t = new $(s);
            return t.images = [], this.spriteSheet && (t.spriteSheet = this.spriteSheet.clone()), t.images = this.images.slice(), t.offX = this.offX, t.offY = this.offY, t.frameDelay = this.frameDelay, t.playing = this.playing, t.looping = this.looping, t
        }, this.draw = function (t, i, e) {
            this.xpos = t, this.ypos = i, this.rotation = e || 0, this.visible && (this.isSpriteAnimation || this.update(), s.push(), s.imageMode(o), s.translate(this.xpos, this.ypos), s._angleMode === s.RADIANS ? s.rotate(L(this.rotation)) : s.rotate(this.rotation), void 0 !== this.images[n] ? this.spriteSheet ? (e = this.images[n].frame, s.image(this.spriteSheet.image, this.offX, this.offY, e.width, e.height, e.x, e.y, e.width, e.height)) : s.image(this.images[n], this.offX, this.offY) : s.print("Warning undefined frame " + n), s.pop())
        }, this.update = function () {
            i++;
            var t = n;
            this.frameChanged = !1, 1 === this.images.length && (this.playing = !1, n = 0), this.playing && i % this.frameDelay == 0 && (n < e && -1 !== e ? n++ : e < n && -1 !== e ? n-- : e === n && -1 !== e ? this.playing = !1 : this.looping ? n >= this.images.length - 1 ? n = 0 : n++ : n < this.images.length - 1 && n++), n == this.images.length - 1 && null != this.onComplete && this.onComplete(), t !== n && (this.frameChanged = !0)
        }, this.play = function () {
            this.playing = !0, e = -1
        }, this.stop = function () {
            this.playing = !1
        }, this.rewind = function () {
            n = 0
        }, this.onComplete = function () {}, this.changeFrame = function (t) {
            n = t < this.images.length ? t : this.images.length - 1, e = -1
        }, this.nextFrame = function () {
            n < this.images.length - 1 ? n += 1 : this.looping && (n = 0), e = -1, this.playing = !1
        }, this.previousFrame = function () {
            0 < n ? --n : this.looping && (n = this.images.length - 1), e = -1, this.playing = !1
        }, this.goToFrame = function (t) {
            t < 0 || t >= this.images.length || (e = t) !== n && (this.playing = !0)
        }, this.getFrame = function () {
            return n
        }, this.getLastFrame = function () {
            return this.images.length - 1
        }, this.getFrameImage = function () {
            return this.images[n]
        }, this.getImageAt = function (t) {
            return this.images[t]
        }, this.getWidth = function () {
            return this.images[n] instanceof j.Image ? this.images[n].width : this.images[n] ? this.images[n].frame.width : 1
        }, this.getHeight = function () {
            return this.images[n] instanceof j.Image ? this.images[n].height : this.images[n] ? this.images[n].frame.height : 1
        }
    }

    function m(r) {
        var t = Array.prototype.slice.call(arguments, 1);
        this.image = null, this.frames = [], this.frame_width = 0, this.frame_height = 0, this.num_frames = 0, this._generateSheetFrames = function () {
            for (var t = 0, i = 0, e = 0; e < this.num_frames; e++) this.frames.push({
                name: e,
                frame: {
                    x: t,
                    y: i,
                    width: this.frame_width,
                    height: this.frame_height
                }
            }), (t += this.frame_width) >= this.image.width && (t = 0, (i += this.frame_height) >= this.image.height && (i = 0))
        }, 2 === t.length && Array.isArray(t[1]) ? (this.frames = t[1], this.num_frames = this.frames.length) : 4 === t.length && "number" == typeof t[1] && "number" == typeof t[2] && "number" == typeof t[3] && (this.frame_width = t[1], this.frame_height = t[2], this.num_frames = t[3]), t[0] instanceof j.Image ? (this.image = t[0], 4 === t.length && this._generateSheetFrames()) : 2 === t.length ? this.image = r.loadImage(t[0]) : 4 === t.length && (this.image = r.loadImage(t[0], this._generateSheetFrames.bind(this))), this.drawFrame = function (t, i, e, s, o) {
            var n;
            if ("number" == typeof t) n = this.frames[t].frame;
            else
                for (var h = 0; h < this.frames.length; h++)
                    if (this.frames[h].name === t) {
                        n = this.frames[h].frame;
                        break
                    }
            s = s || n.width, o = o || n.height;
            r.image(this.image, n.x, n.y, n.width, n.height, i, e, s, o)
        }, this.clone = function () {
            for (var t = new m(r), i = 0; i < this.frames.length; i++) {
                var e = this.frames[i].frame,
                    e = {
                        name: e.name,
                        frame: {
                            x: e.x,
                            y: e.y,
                            width: e.width,
                            height: e.height
                        }
                    };
                t.frames.push(e)
            }
            return t.image = this.image, t.frame_width = this.frame_width, t.frame_height = this.frame_height, t.num_frames = this.num_frames, t
        }
    }

    function tt(t, i) {
        function e() {
            return t.apply(this, i)
        }
        return e.prototype = t.prototype, new e
    }

    function h(t, i, e, s) {
        this.active = !0, this.max_objects = i || 10, this.max_levels = e || 4, this.level = s || 0, this.bounds = t, this.objects = [], this.object_refs = [], this.nodes = []
    }
    j.prototype.keyWentDown = function (t) {
        return this._isKeyInState(t, 1)
    }, j.prototype.keyWentUp = function (t) {
        return this._isKeyInState(t, 3)
    }, j.prototype.keyDown = function (t) {
        return this._isKeyInState(t, 2)
    }, j.prototype._isKeyInState = function (t, i) {
        var e = this._p5play.keyStates,
            t = "string" == typeof t ? this._keyCodeFromAlias(t) : t;
        return void 0 === e[t] && (this.keyIsDown(t) ? e[t] = 2 : e[t] = 0), e[t] === i
    }, j.prototype.mouseDown = function (t) {
        return this._isMouseButtonInState(t, 2)
    }, j.prototype.mouseUp = function (t) {
        return this._isMouseButtonInState(t, 0)
    }, j.prototype.mouseWentUp = function (t) {
        return this._isMouseButtonInState(t, 3)
    }, j.prototype.mouseWentDown = function (t) {
        return this._isMouseButtonInState(t, 1)
    }, j.prototype._isMouseButtonInState = function (t, i) {
        var e = this._p5play.mouseStates;
        return void 0 === t && (t = this.LEFT), void 0 === e[t] && (this.mouseIsPressed && this.mouseButton === t ? e[t] = 2 : e[t] = 0), e[t] === i
    }, j.prototype.KEY = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        " ": 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        LEFT: 37,
        UP_ARROW: 38,
        UP: 38,
        RIGHT_ARROW: 39,
        RIGHT: 39,
        DOWN_ARROW: 40,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        "0NUMPAD": 96,
        "1NUMPAD": 97,
        "2NUMPAD": 98,
        "3NUMPAD": 99,
        "4NUMPAD": 100,
        "5NUMPAD": 101,
        "6NUMPAD": 102,
        "7NUMPAD": 103,
        "8NUMPAD": 104,
        "9NUMPAD": 105,
        MULTIPLY: 106,
        PLUS: 107,
        MINUS: 109,
        DOT: 110,
        SLASH1: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        EQUAL: 187,
        COMMA: 188,
        SLASH: 191,
        BACKSLASH: 220
    }, j.prototype.KEY_DEPRECATIONS = {
        MINUT: "MINUS",
        COMA: "COMMA"
    }, j.prototype._keyCodeFromAlias = function (t) {
        return t = t.toUpperCase(), this.KEY_DEPRECATIONS[t] && (this._warn('Key literal "' + t + '" is deprecated and may be removed in a future version of p5.play. Please use "' + this.KEY_DEPRECATIONS[t] + '" instead.'), t = this.KEY_DEPRECATIONS[t]), this.KEY[t]
    }, j.prototype.readPresses = function () {
        var t, i, e = this._p5play.keyStates,
            s = this._p5play.mouseStates;
        for (t in e) this.keyIsDown(t) ? 0 === e[t] ? e[t] = 1 : e[t] = 2 : 2 === e[t] ? e[t] = 3 : e[t] = 0;
        for (i in s) this.mouseIsPressed && this.mouseButton === i ? 0 === s[i] ? s[i] = 1 : s[i] = 2 : 2 === s[i] ? s[i] = 3 : s[i] = 0
    }, j.prototype.useQuadTree = function (t) {
        return void 0 !== this.quadTree && (void 0 === t ? this.quadTree.active : void(this.quadTree.active = !!t))
    }, t("quadTree", function () {
        return new h({
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }, 4)
    }), t("Sprite", i(Q)), t("Camera", i(e)), j.prototype.Group = function () {
        var s = [];

        function t(t, i, e) {
            for (var s = !1, o = 0; o < this.size(); o++) s = this.get(o).AABBops(t, i, e) || s;
            return s
        }
        return s.get = function (t) {
            return s[t]
        }, s.contains = function (t) {
            return -1 < this.indexOf(t)
        }, s.indexOf = function (t) {
            for (var i = 0, e = s.length; i < e; ++i)
                if (function (t, i) {
                        if (null === t || null === i) return null === t && null === i;
                        if ("string" == typeof t) return t === i;
                        if ("object" != typeof t) return t === i;
                        if (t.equals instanceof Function) return t.equals(i);
                        return t === i
                    }(t, s[i])) return i;
            return -1
        }, s.add = function (t) {
            if (!(t instanceof Q)) throw "Error: you can only add sprites to a group"; - 1 === this.indexOf(t) && (s.push(t), t.groups.push(this))
        }, s.size = function () {
            return s.length
        }, s.removeSprites = function () {
            for (; 0 < s.length;) s[0].remove()
        }, s.clear = function () {
            s.length = 0
        }, s.remove = function (t) {
            if (!(t instanceof Q)) throw "Error: you can only remove sprites from a group";
            for (var i = !1, e = s.length - 1; 0 <= e; e--) s[e] === t && (s.splice(e, 1), i = !0);
            if (i)
                for (e = t.groups.length - 1; 0 <= e; e--) t.groups[e] === this && t.groups.splice(e, 1);
            return i
        }, s.toArray = function () {
            return s.slice(0)
        }, s.maxDepth = function () {
            return 0 === s.length ? 0 : s.reduce(function (t, i) {
                return Math.max(t, i.depth)
            }, -1 / 0)
        }, s.minDepth = function () {
            return 0 === s.length ? 99999 : s.reduce(function (t, i) {
                return Math.min(t, i.depth)
            }, 1 / 0)
        }, s.draw = function () {
            this.sort(function (t, i) {
                return t.depth - i.depth
            });
            for (var t = 0; t < this.size(); t++) this.get(t).display()
        }, s.overlap = t.bind(s, "overlap"), s.collide = t.bind(s, "collide"), s.displace = t.bind(s, "displace"), s.bounce = t.bind(s, "bounce"), s
    }, t("CircleCollider", i(J)), t("AABB", i(Z)), t("Animation", i($)), t("SpriteSheet", i(m)), h.prototype.updateBounds = function () {
        for (var t = this.getAll(), i = 1e4, e = 1e4, s = -1e4, o = -1e4, n = 0; n < t.length; n++) t[n].position.x < i && (i = t[n].position.x), t[n].position.y < e && (e = t[n].position.y), t[n].position.x > s && (s = t[n].position.x), t[n].position.y > o && (o = t[n].position.y);
        this.bounds = {
            x: i,
            y: e,
            width: s,
            height: o
        }
    }, h.prototype.split = function () {
        var t = this.level + 1,
            i = Math.round(this.bounds.width / 2),
            e = Math.round(this.bounds.height / 2),
            s = Math.round(this.bounds.x),
            o = Math.round(this.bounds.y);
        this.nodes[0] = new h({
            x: s + i,
            y: o,
            width: i,
            height: e
        }, this.max_objects, this.max_levels, t), this.nodes[1] = new h({
            x: s,
            y: o,
            width: i,
            height: e
        }, this.max_objects, this.max_levels, t), this.nodes[2] = new h({
            x: s,
            y: o + e,
            width: i,
            height: e
        }, this.max_objects, this.max_levels, t), this.nodes[3] = new h({
            x: s + i,
            y: o + e,
            width: i,
            height: e
        }, this.max_objects, this.max_levels, t)
    }, h.prototype.getIndex = function (t) {
        if (t.collider) {
            var i = -1,
                e = this.bounds.x + this.bounds.width / 2,
                s = this.bounds.y + this.bounds.height / 2,
                o = t.collider.top() < s && t.collider.top() + t.collider.size().y < s,
                s = t.collider.top() > s;
            return t.collider.left() < e && t.collider.left() + t.collider.size().x < e ? o ? i = 1 : s && (i = 2) : t.collider.left() > e && (o ? i = 0 : s && (i = 3)), i
        }
        return -1
    }, h.prototype.insert = function (t) {
        if (-1 === this.objects.indexOf(t)) {
            var i, e = 0;
            if (void 0 === this.nodes[0] || -1 === (i = this.getIndex(t))) {
                if (this.objects.push(t), this.objects.length > this.max_objects && this.level < this.max_levels)
                    for (void 0 === this.nodes[0] && this.split(); e < this.objects.length;) - 1 !== (i = this.getIndex(this.objects[e])) ? this.nodes[i].insert(this.objects.splice(e, 1)[0]) : e += 1
            } else this.nodes[i].insert(t)
        }
    }, h.prototype.retrieve = function (t) {
        var i = this.getIndex(t),
            e = this.objects;
        if (void 0 !== this.nodes[0])
            if (-1 !== i) e = e.concat(this.nodes[i].retrieve(t));
            else
                for (var s = 0; s < this.nodes.length; s += 1) e = e.concat(this.nodes[s].retrieve(t));
        return e
    }, h.prototype.retrieveFromGroup = function (t, i) {
        for (var e = [], s = this.retrieve(t), o = 0; o < s.length; o++) i.contains(s[o]) && e.push(s[o]);
        return e
    }, h.prototype.getAll = function () {
        for (var t = this.objects, i = 0; i < this.nodes.length; i += 1) t = t.concat(this.nodes[i].getAll());
        return t
    }, h.prototype.getObjectNode = function (t) {
        var i;
        if (!this.nodes.length) return this;
        if (-1 === (i = this.getIndex(t))) return this;
        t = this.nodes[i].getObjectNode(t);
        return t || !1
    }, h.prototype.removeObject = function (t) {
        var i = this.getObjectNode(t),
            t = i.objects.indexOf(t);
        if (-1 === t) return !1;
        i.objects.splice(t, 1)
    }, h.prototype.clear = function () {
        if (this.objects = [], this.nodes.length) {
            for (var t = 0; t < this.nodes.length; t += 1) this.nodes[t].clear();
            this.nodes = []
        }
    }, h.prototype.cleanup = function () {
        var t = this.getAll();
        this.clear();
        for (var i = 0; i < t.length; i++) this.insert(t[i])
    }, j.prototype.registerMethod("pre", j.prototype.readPresses), j.prototype.registerMethod("pre", j.prototype.updateSprites), j.prototype.registerMethod("post", function () {
        this.quadTree.active && (this.quadTree.updateBounds(), this.quadTree.cleanup())
    }), j.prototype.registerMethod("pre", o), j.prototype.registerMethod("post", n), j.prototype._warn = function (t) {
        var i = window.console;
        i && ("function" == typeof i.warn ? i.warn(t) : "function" == typeof i.log && i.log("Warning: " + t))
    }
});
