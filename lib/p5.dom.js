! function (t, e) {
    "function" == typeof define && define.amd ? define("p5.dom", ["p5"], function (t) {
        e(t)
    }) : "object" == typeof exports ? e(require("../p5")) : e(t.p5)
}(this, function (d) {
    function l(t) {
        var e = document;
        return "string" == typeof t && "#" === t[0] ? (t = t.slice(1), e = document.getElementById(t) || document) : t instanceof d.Element ? e = t.elt : t instanceof HTMLElement && (e = t), e
    }

    function c(t, e, i) {
        (e._userNode || document.body).appendChild(t);
        t = new(i ? d.MediaElement : d.Element)(t);
        return e._elements.push(t), t
    }
    d.prototype.select = function (t, e) {
        d._validateParameters("select", arguments);
        var i = null,
            n = l(e);
        return (i = "." === t[0] ? (t = t.slice(1), (i = n.getElementsByClassName(t)).length ? i[0] : null) : "#" === t[0] ? (t = t.slice(1), n.getElementById(t)) : (i = n.getElementsByTagName(t)).length ? i[0] : null) ? this._wrapElement(i) : null
    }, d.prototype.selectAll = function (t, e) {
        d._validateParameters("selectAll", arguments);
        var i = [],
            n = l(e),
            r = "." === t[0] ? (t = t.slice(1), n.getElementsByClassName(t)) : n.getElementsByTagName(t);
        if (r)
            for (var o = 0; o < r.length; o++) {
                var s = this._wrapElement(r[o]);
                i.push(s)
            }
        return i
    }, d.prototype._wrapElement = function (t) {
        var e = Array.prototype.slice.call(t.children);
        if ("INPUT" !== t.tagName || "checkbox" !== t.type) return "VIDEO" === t.tagName || "AUDIO" === t.tagName ? new d.MediaElement(t) : "SELECT" === t.tagName ? this.createSelect(new d.Element(t)) : 0 < e.length && e.every(function (t) {
            return "INPUT" === t.tagName || "LABEL" === t.tagName
        }) ? this.createRadio(new d.Element(t)) : new d.Element(t);
        t = new d.Element(t);
        return t.checked = function () {
            return 0 === arguments.length ? this.elt.checked : (this.elt.checked = !!arguments[0], this)
        }, t
    }, d.prototype.removeElements = function (t) {
        d._validateParameters("removeElements", arguments);
        for (var e = 0; e < this._elements.length; e++) this._elements[e].elt instanceof HTMLCanvasElement || this._elements[e].remove()
    };

    function i(t, e, i, n) {
        var r = document.createElement(e);
        "string" == typeof (i = i || "") && (i = [i]);
        for (var o, s = 0; s < i.length; s++) {
            var l = document.createElement("source");
            l.src = i[s], r.appendChild(l)
        }
        void 0 !== n && (o = function () {
            n(), r.removeEventListener("canplaythrough", o)
        }, r.addEventListener("canplaythrough", o));
        var a = c(r, t, !0);
        return a.loadedmetadata = !1, r.addEventListener("loadedmetadata", function () {
            a.width = r.videoWidth, a.height = r.videoHeight, 0 === a.elt.width && (a.elt.width = r.videoWidth), 0 === a.elt.height && (a.elt.height = r.videoHeight), a.loadedmetadata = !0
        }), a
    }["div", "p", "span"].forEach(function (i) {
        var t = "create" + i.charAt(0).toUpperCase() + i.slice(1);
        d.prototype[t] = function (t) {
            var e = document.createElement(i);
            return e.innerHTML = void 0 === t ? "" : t, c(e, this)
        }
    }), d.prototype.createImg = function () {
        d._validateParameters("createImg", arguments);
        var t, e = document.createElement("img"),
            i = arguments;
        return e.src = i[0], 1 < i.length && "string" == typeof i[1] && (e.alt = i[1]), e.onload = function () {
            t.width = e.offsetWidth || e.width, t.height = e.offsetHeight || e.height, 1 < i.length && "function" == typeof i[1] ? (t.fn = i[1], t.fn()) : 1 < i.length && "function" == typeof i[2] && (t.fn = i[2], t.fn())
        }, t = c(e, this)
    }, d.prototype.createA = function (t, e, i) {
        d._validateParameters("createA", arguments);
        var n = document.createElement("a");
        return n.href = t, n.innerHTML = e, i && (n.target = i), c(n, this)
    }, d.prototype.createSlider = function (t, e, i, n) {
        d._validateParameters("createSlider", arguments);
        var r = document.createElement("input");
        return r.type = "range", r.min = t, r.max = e, 0 === n ? r.step = 1e-18 : n && (r.step = n), "number" == typeof i && (r.value = i), c(r, this)
    }, d.prototype.createButton = function (t, e) {
        d._validateParameters("createButton", arguments);
        var i = document.createElement("button");
        return i.innerHTML = t, e && (i.value = e), c(i, this)
    }, d.prototype.createCheckbox = function () {
        d._validateParameters("createCheckbox", arguments);
        var t = document.createElement("div"),
            e = document.createElement("input");
        e.type = "checkbox", t.appendChild(e);
        var i, n, r = c(t, this);
        return r.checked = function () {
            var t = r.elt.getElementsByTagName("input")[0];
            if (t) {
                if (0 === arguments.length) return t.checked;
                t.checked = !!arguments[0]
            }
            return r
        }, this.value = function (t) {
            return r.value = t, this
        }, arguments[0] && (i = Math.random().toString(36).slice(2), n = document.createElement("label"), e.setAttribute("id", i), n.htmlFor = i, r.value(arguments[0]), n.appendChild(document.createTextNode(arguments[0])), t.appendChild(n)), arguments[1] && (e.checked = !0), r
    }, d.prototype.createSelect = function () {
        var o, t;
        d._validateParameters("createSelect", arguments);
        var e = arguments[0];
        return "object" == typeof e && "SELECT" === e.elt.nodeName ? (t = e, o = this.elt = e.elt) : (o = document.createElement("select"), e && "boolean" == typeof e && o.setAttribute("multiple", "true"), t = c(o, this)), t.option = function (t, e) {
            for (var i, n, r = 0; r < this.elt.length; r++)
                if (this.elt[r].innerHTML === t) {
                    i = r;
                    break
                }
            void 0 !== i ? !1 === e ? this.elt.remove(i) : this.elt[i].innerHTML === this.elt[i].value ? this.elt[i].innerHTML = this.elt[i].value = e : this.elt[i].value = e : ((n = document.createElement("option")).innerHTML = t, n.value = 1 < arguments.length ? e : t, o.appendChild(n))
        }, t.selected = function (t) {
            var e, i = [];
            if (0 < arguments.length) {
                for (e = 0; e < this.elt.length; e++) t.toString() === this.elt[e].value && (this.elt.selectedIndex = e);
                return this
            }
            if (this.elt.getAttribute("multiple")) {
                for (e = 0; e < this.elt.selectedOptions.length; e++) i.push(this.elt.selectedOptions[e].value);
                return i
            }
            return this.elt.value
        }, t
    }, d.prototype.createRadio = function (t) {
        d._validateParameters("createRadio", arguments);
        var n, r, e = document.querySelectorAll("input[type=radio]"),
            o = 0;
        if (1 < e.length)
            for (var i = e.length, s = e[0].name, l = e[1].name, o = 1, a = 1; a < i; a++) s !== (l = e[a].name) && o++, s = l;
        else 1 === e.length && (o = 1);
        "object" == typeof t ? (r = t, n = this.elt = t.elt) : (n = document.createElement("div"), r = c(n, this)), r._getInputChildrenArray = function () {
            return Array.prototype.slice.call(this.elt.children).filter(function (t) {
                return "INPUT" === t.tagName
            })
        };
        var h = -1;
        return r.option = function (t, e) {
            var i = document.createElement("input");
            return i.type = "radio", i.innerHTML = t, i.value = e || t, i.setAttribute("name", "defaultradio" + o), n.appendChild(i), t && (h++, e = document.createElement("label"), i.setAttribute("id", "defaultradio" + o + "-" + h), e.htmlFor = "defaultradio" + o + "-" + h, e.appendChild(document.createTextNode(t)), n.appendChild(e)), i
        }, r.selected = function (t) {
            var e, i = r._getInputChildrenArray();
            if (t) {
                for (e = 0; e < i.length; e++) i[e].value === t && (i[e].checked = !0);
                return this
            }
            for (e = 0; e < i.length; e++)
                if (!0 === i[e].checked) return i[e].value
        }, r.value = function (t) {
            var e, i = r._getInputChildrenArray();
            if (t) {
                for (e = 0; e < i.length; e++) i[e].value === t && (i[e].checked = !0);
                return this
            }
            for (e = 0; e < i.length; e++)
                if (!0 === i[e].checked) return i[e].value;
            return ""
        }, r
    }, d.prototype.createInput = function (t, e) {
        d._validateParameters("createInput", arguments);
        var i = document.createElement("input");
        return i.type = e || "text", t && (i.value = t), c(i, this)
    }, d.prototype.createFileInput = function (o, t) {
        if (d._validateParameters("createFileInput", arguments), window.File && window.FileReader && window.FileList && window.Blob) {
            var e = document.createElement("input");
            return e.type = "file", t && (e.multiple = "multiple"), e.addEventListener("change", function (t) {
                for (var e = t.target.files, i = 0; i < e.length; i++) {
                    var n = e[i],
                        r = new FileReader;
                    r.onload = function (t) {
                        var e = new d.File(t);
                        return function (t) {
                            e.data = t.target.result, o(e)
                        }
                    }(n), -1 < n.type.indexOf("text") ? r.readAsText(n) : r.readAsDataURL(n)
                }
            }, !1), c(e, this)
        }
        console.log("The File APIs are not fully supported in this browser. Cannot create element.")
    }, d.prototype.createVideo = function (t, e) {
        return d._validateParameters("createVideo", arguments), i(this, "video", t, e)
    }, d.prototype.createAudio = function (t, e) {
        return d._validateParameters("createAudio", arguments), i(this, "audio", t, e)
    }, d.prototype.VIDEO = "video", d.prototype.AUDIO = "audio", void 0 === navigator.mediaDevices && (navigator.mediaDevices = {}), void 0 === navigator.mediaDevices.getUserMedia && (navigator.mediaDevices.getUserMedia = function (i) {
        var n = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        return n ? new Promise(function (t, e) {
            n.call(navigator, i, t, e)
        }) : Promise.reject(new Error("getUserMedia is not implemented in this browser"))
    }), d.prototype.createCapture = function () {
        d._validateParameters("createCapture", arguments);
        for (var t, i, e = !0, n = !0, r = 0; r < arguments.length; r++) arguments[r] === d.prototype.VIDEO ? n = !1 : arguments[r] === d.prototype.AUDIO ? e = !1 : "object" == typeof arguments[r] ? t = arguments[r] : "function" == typeof arguments[r] && (i = arguments[r]);
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw "getUserMedia not supported in this browser";
        var o = document.createElement("video");
        o.setAttribute("playsinline", ""), t = t || {
            video: e,
            audio: n
        }, navigator.mediaDevices.getUserMedia(t).then(function (e) {
            try {
                "srcObject" in o ? o.srcObject = e : o.src = window.URL.createObjectURL(e)
            } catch (t) {
                o.src = e
            }
            i && i(e)
        }, function (t) {
            console.log(t)
        });
        var s = c(o, this, !0);
        return s.loadedmetadata = !1, o.addEventListener("loadedmetadata", function () {
            o.play(), o.width ? (s.width = o.videoWidth = o.width, s.height = o.videoHeight = o.height) : (s.width = s.elt.width = o.videoWidth, s.height = s.elt.height = o.videoHeight), s.loadedmetadata = !0
        }), s
    }, d.prototype.createElement = function (t, e) {
        d._validateParameters("createElement", arguments);
        var i = document.createElement(t);
        return void 0 !== e && (i.innerHTML = e), c(i, this)
    }, d.Element.prototype.addClass = function (t) {
        return this.elt.className ? this.elt.className = this.elt.className + " " + t : this.elt.className = t, this
    }, d.Element.prototype.removeClass = function (t) {
        t = new RegExp("(?:^|\\s)" + t + "(?!\\S)");
        return this.elt.className = this.elt.className.replace(t, ""), this.elt.className = this.elt.className.replace(/^\s+|\s+$/g, ""), this
    }, d.Element.prototype.child = function (t) {
        return void 0 === t ? this.elt.childNodes : ("string" == typeof t ? ("#" === t[0] && (t = t.substring(1)), t = document.getElementById(t)) : t instanceof d.Element && (t = t.elt), this.elt.appendChild(t), this)
    }, d.Element.prototype.center = function (t) {
        var e = this.elt.style.display,
            i = "none" === this.elt.style.display,
            n = "none" === this.parent().style.display,
            r = {
                x: this.elt.offsetLeft,
                y: this.elt.offsetTop
            };
        i && this.show(), this.elt.style.display = "block", this.position(0, 0), n && (this.parent().style.display = "block");
        var o = Math.abs(this.parent().offsetWidth - this.elt.offsetWidth),
            s = Math.abs(this.parent().offsetHeight - this.elt.offsetHeight),
            l = r.y,
            r = r.x;
        return "both" === t || void 0 === t ? this.position(o / 2, s / 2) : "horizontal" === t ? this.position(o / 2, l) : "vertical" === t && this.position(r, s / 2), this.style("display", e), i && this.hide(), n && (this.parent().style.display = "none"), this
    }, d.Element.prototype.html = function () {
        return 0 === arguments.length ? this.elt.innerHTML : (arguments[1] ? this.elt.innerHTML += arguments[0] : this.elt.innerHTML = arguments[0], this)
    }, d.Element.prototype.position = function () {
        return 0 === arguments.length ? {
            x: this.elt.offsetLeft,
            y: this.elt.offsetTop
        } : (this.elt.style.position = "absolute", this.elt.style.left = arguments[0] + "px", this.elt.style.top = arguments[1] + "px", this.x = arguments[0], this.y = arguments[1], this)
    }, d.Element.prototype._translate = function () {
        this.elt.style.position = "absolute";
        var t = "";
        return this.elt.style.transform && (t = (t = this.elt.style.transform.replace(/translate3d\(.*\)/g, "")).replace(/translate[X-Z]?\(.*\)/g, "")), 2 === arguments.length ? this.elt.style.transform = "translate(" + arguments[0] + "px, " + arguments[1] + "px)" : 2 < arguments.length && (this.elt.style.transform = "translate3d(" + arguments[0] + "px," + arguments[1] + "px," + arguments[2] + "px)", this.elt.parentElement.style.perspective = 3 === arguments.length ? "1000px" : arguments[3] + "px"), this.elt.style.transform += t, this
    }, d.Element.prototype._rotate = function () {
        var t = "";
        return this.elt.style.transform && (t = (t = this.elt.style.transform.replace(/rotate3d\(.*\)/g, "")).replace(/rotate[X-Z]?\(.*\)/g, "")), 1 === arguments.length ? this.elt.style.transform = "rotate(" + arguments[0] + "deg)" : 2 === arguments.length ? this.elt.style.transform = "rotate(" + arguments[0] + "deg, " + arguments[1] + "deg)" : 3 === arguments.length && (this.elt.style.transform = "rotateX(" + arguments[0] + "deg)", this.elt.style.transform += "rotateY(" + arguments[1] + "deg)", this.elt.style.transform += "rotateZ(" + arguments[2] + "deg)"), this.elt.style.transform += t, this
    }, d.Element.prototype.style = function (t, e) {
        var i;
        if (e instanceof d.Color && (e = "rgba(" + e.levels[0] + "," + e.levels[1] + "," + e.levels[2] + "," + e.levels[3] / 255 + ")"), void 0 === e) {
            if (-1 === t.indexOf(":")) return window.getComputedStyle(this.elt).getPropertyValue(t);
            for (var n = t.split(";"), r = 0; r < n.length; r++) {
                var o = n[r].split(":");
                o[0] && o[1] && (this.elt.style[o[0].trim()] = o[1].trim())
            }
        } else "rotate" === t || "translate" === t || "position" === t ? (this[i = Array.prototype.shift.apply(arguments)] || this["_" + i]).apply(this, arguments) : (this.elt.style[t] = e, "width" !== t && "height" !== t && "left" !== t && "top" !== t || (i = e.replace(/\D+/g, ""), this[t] = parseInt(i, 10)));
        return this
    }, d.Element.prototype.attribute = function (t, e) {
        if (null == this.elt.firstChild || "checkbox" !== this.elt.firstChild.type && "radio" !== this.elt.firstChild.type) return void 0 === e ? this.elt.getAttribute(t) : (this.elt.setAttribute(t, e), this);
        if (void 0 === e) return this.elt.firstChild.getAttribute(t);
        for (var i = 0; i < this.elt.childNodes.length; i++) this.elt.childNodes[i].setAttribute(t, e)
    }, d.Element.prototype.removeAttribute = function (t) {
        if (null != this.elt.firstChild && ("checkbox" === this.elt.firstChild.type || "radio" === this.elt.firstChild.type))
            for (var e = 0; e < this.elt.childNodes.length; e++) this.elt.childNodes[e].removeAttribute(t);
        return this.elt.removeAttribute(t), this
    }, d.Element.prototype.value = function () {
        return 0 < arguments.length ? (this.elt.value = arguments[0], this) : "range" === this.elt.type ? parseFloat(this.elt.value) : this.elt.value
    }, d.Element.prototype.show = function () {
        return this.elt.style.display = "block", this
    }, d.Element.prototype.hide = function () {
        return this.elt.style.display = "none", this
    }, d.Element.prototype.size = function (t, e) {
        if (0 === arguments.length) return {
            width: this.elt.offsetWidth,
            height: this.elt.offsetHeight
        };
        var i = t,
            n = e,
            r = d.prototype.AUTO;
        if (i !== r || n !== r) {
            if (i === r ? i = e * this.width / this.height : n === r && (n = t * this.height / this.width), this.elt instanceof HTMLCanvasElement) {
                var o, s = {},
                    l = this.elt.getContext("2d");
                for (o in l) s[o] = l[o];
                for (o in this.elt.setAttribute("width", i * this._pInst._pixelDensity), this.elt.setAttribute("height", n * this._pInst._pixelDensity), this.elt.setAttribute("style", "width:" + i + "px; height:" + n + "px"), this._pInst.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), s) this.elt.getContext("2d")[o] = s[o]
            } else this.elt.style.width = i + "px", this.elt.style.height = n + "px", this.elt.width = i, this.elt.height = n, this.width = i, this.height = n;
            this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this._pInst && this._pInst._curElement.elt === this.elt && (this._pInst._setProperty("width", this.elt.offsetWidth), this._pInst._setProperty("height", this.elt.offsetHeight))
        }
        return this
    }, d.Element.prototype.remove = function () {
        for (var t in this._events) this.elt.removeEventListener(t, this._events[t]);
        this.elt.parentNode && this.elt.parentNode.removeChild(this.elt)
    }, d.MediaElement = function (n, t) {
        d.Element.call(this, n, t);
        var r = this;
        this.elt.crossOrigin = "anonymous", this._prevTime = 0, this._cueIDCounter = 0, this._cues = [], this._pixelDensity = 1, this._modified = !1, this._pixelsDirty = !0, this._pixelsTime = -1, Object.defineProperty(r, "src", {
            get: function () {
                var t = r.elt.children[0].src,
                    e = r.elt.src === window.location.href ? "" : r.elt.src;
                return t === window.location.href ? e : t
            },
            set: function (t) {
                for (var e = 0; e < r.elt.children.length; e++) r.elt.removeChild(r.elt.children[e]);
                var i = document.createElement("source");
                i.src = t, n.appendChild(i), r.elt.src = t, r.modified = !0
            }
        }), r._onended = function () {}, r.elt.onended = function () {
            r._onended(r)
        }
    }, d.MediaElement.prototype = Object.create(d.Element.prototype), d.MediaElement.prototype.play = function () {
        var t;
        return this.elt.currentTime === this.elt.duration && (this.elt.currentTime = 0), (t = (1 < this.elt.readyState || this.elt.load(), this.elt.play())) && t.catch && t.catch(function (t) {
            console.log("WARN: Element play method raised an error asynchronously", t)
        }), this
    }, d.MediaElement.prototype.stop = function () {
        return this.elt.pause(), this.elt.currentTime = 0, this
    }, d.MediaElement.prototype.pause = function () {
        return this.elt.pause(), this
    }, d.MediaElement.prototype.loop = function () {
        return this.elt.setAttribute("loop", !0), this.play(), this
    }, d.MediaElement.prototype.noLoop = function () {
        return this.elt.setAttribute("loop", !1), this
    }, d.MediaElement.prototype.autoplay = function (t) {
        return this.elt.setAttribute("autoplay", t), this
    }, d.MediaElement.prototype.volume = function (t) {
        if (void 0 === t) return this.elt.volume;
        this.elt.volume = t
    }, d.MediaElement.prototype.speed = function (t) {
        if (void 0 === t) return this.elt.playbackRate;
        this.elt.playbackRate = t
    }, d.MediaElement.prototype.time = function (t) {
        return void 0 === t ? this.elt.currentTime : (this.elt.currentTime = t, this)
    }, d.MediaElement.prototype.duration = function () {
        return this.elt.duration
    }, d.MediaElement.prototype.pixels = [], d.MediaElement.prototype.loadPixels = function () {
        var t;
        return this.canvas || (this.canvas = document.createElement("canvas"), this.drawingContext = this.canvas.getContext("2d")), this.loadedmetadata && (this.canvas.width !== this.elt.width && (this.canvas.width = this.elt.width, this.canvas.height = this.elt.height, this.width = this.canvas.width, this.height = this.canvas.height, this._pixelsDirty = !0), t = this.elt.currentTime, !this._pixelsDirty && this._pixelsTime === t || (this._pixelsTime = t, this._pixelsDirty = !0, this.drawingContext.drawImage(this.elt, 0, 0, this.canvas.width, this.canvas.height), d.Renderer2D.prototype.loadPixels.call(this))), this.setModified(!0), this
    }, d.MediaElement.prototype.updatePixels = function (t, e, i, n) {
        return this.loadedmetadata && d.Renderer2D.prototype.updatePixels.call(this, t, e, i, n), this.setModified(!0), this
    }, d.MediaElement.prototype.get = function (t, e, i, n) {
        if (this.loadedmetadata) {
            var r = this.elt.currentTime;
            return this._pixelsTime !== r && (this._pixelsDirty = !0, this._pixelsTime = r), d.Renderer2D.prototype.get.call(this, t, e, i, n)
        }
        return void 0 === t ? new d.Image(1, 1) : 1 < i ? new d.Image(t, e, i, n) : [0, 0, 0, 255]
    }, d.MediaElement.prototype.set = function (t, e, i) {
        this.loadedmetadata && (d.Renderer2D.prototype.set.call(this, t, e, i), this.setModified(!0))
    }, d.MediaElement.prototype.copy = function () {
        d.Renderer2D.prototype.copy.apply(this, arguments)
    }, d.MediaElement.prototype.mask = function () {
        this.loadPixels(), this.setModified(!0), d.Image.prototype.mask.apply(this, arguments)
    }, d.MediaElement.prototype.isModified = function () {
        return this._modified
    }, d.MediaElement.prototype.setModified = function (t) {
        this._modified = t
    }, d.MediaElement.prototype.onended = function (t) {
        return this._onended = t, this
    }, d.MediaElement.prototype.connect = function (t) {
        var e, i;
        if ("function" == typeof d.prototype.getAudioContext) e = d.prototype.getAudioContext(), i = d.soundOut.input;
        else try {
            i = (e = t.context).destination
        } catch (t) {
            throw "connect() is meant to be used with Web Audio API or p5.sound.js"
        }
        this.audioSourceNode || (this.audioSourceNode = e.createMediaElementSource(this.elt), this.audioSourceNode.connect(i)), t ? t.input ? this.audioSourceNode.connect(t.input) : this.audioSourceNode.connect(t) : this.audioSourceNode.connect(i)
    }, d.MediaElement.prototype.disconnect = function () {
        if (!this.audioSourceNode) throw "nothing to disconnect";
        this.audioSourceNode.disconnect()
    }, d.MediaElement.prototype.showControls = function () {
        this.elt.style["text-align"] = "inherit", this.elt.controls = !0
    }, d.MediaElement.prototype.hideControls = function () {
        this.elt.controls = !1
    };

    function r(t, e, i, n) {
        this.callback = t, this.time = e, this.id = i, this.val = n
    }
    d.MediaElement.prototype.addCue = function (t, e, i) {
        var n = this._cueIDCounter++,
            i = new r(e, t, n, i);
        return this._cues.push(i), this.elt.ontimeupdate || (this.elt.ontimeupdate = this._onTimeUpdate.bind(this)), n
    }, d.MediaElement.prototype.removeCue = function (t) {
        for (var e = 0; e < this._cues.length; e++) this._cues[e].id === t && (console.log(t), this._cues.splice(e, 1));
        0 === this._cues.length && (this.elt.ontimeupdate = null)
    }, d.MediaElement.prototype.clearCues = function () {
        this._cues = [], this.elt.ontimeupdate = null
    }, d.MediaElement.prototype._onTimeUpdate = function () {
        for (var t = this.time(), e = 0; e < this._cues.length; e++) {
            var i = this._cues[e].time,
                n = this._cues[e].val;
            this._prevTime < i && i <= t && this._cues[e].callback(n)
        }
        this._prevTime = t
    }, d.File = function (t, e) {
        this.file = t, this._pInst = e;
        e = t.type.split("/");
        this.type = e[0], this.subtype = e[1], this.name = t.name, this.size = t.size, this.data = void 0
    }
});
