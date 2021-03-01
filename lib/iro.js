! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).iro = e()
}(this, function () {
    "use strict";
    var m, l, e, n, u, x = {},
        w = [],
        r = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

    function k(t, e) {
        for (var n in e) t[n] = e[n];
        return t
    }

    function b(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }

    function p(t, e, n) {
        var r, i, o, s, l = arguments;
        if (e = k({}, e), 3 < arguments.length)
            for (n = [n], r = 3; r < arguments.length; r++) n.push(l[r]);
        if (null != n && (e.children = n), null != t && null != t.defaultProps)
            for (i in t.defaultProps) void 0 === e[i] && (e[i] = t.defaultProps[i]);
        return s = e.key, null != (o = e.ref) && delete e.ref, null != s && delete e.key, a(t, e, s, o)
    }

    function a(t, e, n, r) {
        r = {
            type: t,
            props: e,
            key: n,
            ref: r,
            __k: null,
            __p: null,
            __b: 0,
            __e: null,
            l: null,
            __c: null,
            constructor: void 0
        };
        return m.vnode && m.vnode(r), r
    }

    function S(t) {
        return t.children
    }

    function E(t, e) {
        this.props = t, this.context = e
    }

    function y(t, e) {
        if (null == e) return t.__p ? y(t.__p, t.__p.__k.indexOf(t) + 1) : null;
        for (var n; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
        return "function" == typeof t.type ? y(t) : null
    }

    function i(t) {
        (!t.__d && (t.__d = !0) && 1 === l.push(t) || n !== m.debounceRendering) && (n = m.debounceRendering, (m.debounceRendering || e)(o))
    }

    function o() {
        var t, e, n, r, i, o, s;
        for (l.sort(function (t, e) {
                return e.__v.__b - t.__v.__b
            }); s = l.pop();) s.__d && (0, i = (r = (t = s).__v).__e, o = t.__P, s = t.u, t.u = !1, o && (e = [], n = A(o, r, k({}, r), t.__n, void 0 !== o.ownerSVGElement, null, e, s, null == i ? y(r) : i), f(e, r), n != i && function t(e) {
            var n, r;
            if (null != (e = e.__p) && null != e.__c) {
                for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
                    if (null != (r = e.__k[n]) && null != r.__e) {
                        e.__e = e.__c.base = r.__e;
                        break
                    }
                return t(e)
            }
        }(r)))
    }

    function M(e, n, t, r, i, o, s, l, a) {
        var u, h, c, f, d, p, g, v = t && t.__k || w,
            _ = v.length;
        if (l == x && (l = null != o ? o[0] : _ ? y(t, 0) : null), u = 0, n.__k = C(n.__k, function (t) {
                if (null != t) {
                    if (t.__p = n, t.__b = n.__b + 1, null === (c = v[u]) || c && t.key == c.key && t.type === c.type) v[u] = void 0;
                    else
                        for (h = 0; h < _; h++) {
                            if ((c = v[h]) && t.key == c.key && t.type === c.type) {
                                v[h] = void 0;
                                break
                            }
                            c = null
                        }
                    if (f = A(e, t, c = c || x, r, i, o, s, null, l, a), (h = t.ref) && c.ref != h && (g = g || []).push(h, t.__c || f, t), null != f) {
                        if (null == p && (p = f), null != t.l) f = t.l, t.l = null;
                        else if (o == c || f != l || null == f.parentNode) {
                            t: if (null == l || l.parentNode !== e) e.appendChild(f);
                                else {
                                    for (d = l, h = 0;
                                        (d = d.nextSibling) && h < _; h += 2)
                                        if (d == f) break t;
                                    e.insertBefore(f, l)
                                }
                                "option" == n.type && (e.value = "")
                        }
                        l = f.nextSibling, "function" == typeof n.type && (n.l = f)
                    }
                }
                return u++, t
            }), n.__e = p, null != o && "function" != typeof n.type)
            for (u = o.length; u--;) null != o[u] && b(o[u]);
        for (u = _; u--;) null != v[u] && function t(e, n, r) {
            var i, o, s;
            if (m.unmount && m.unmount(e), (i = e.ref) && O(i, null, n), r || "function" == typeof e.type || (r = null != (o = e.__e)), e.__e = e.l = null, null != (i = e.__c)) {
                if (i.componentWillUnmount) try {
                    i.componentWillUnmount()
                } catch (e) {
                    m.__e(e, n)
                }
                i.base = i.__P = null
            }
            if (i = e.__k)
                for (s = 0; s < i.length; s++) i[s] && t(i[s], n, r);
            null != o && b(o)
        }(v[u], v[u]);
        if (g)
            for (u = 0; u < g.length; u++) O(g[u], g[++u], g[++u])
    }

    function C(t, e, n) {
        if (null == n && (n = []), null == t || "boolean" == typeof t) e && n.push(e(null));
        else if (Array.isArray(t))
            for (var r = 0; r < t.length; r++) C(t[r], e, n);
        else n.push(e ? e(function (t) {
            if (null == t || "boolean" == typeof t) return null;
            if ("string" == typeof t || "number" == typeof t) return a(null, t, null, null);
            if (null == t.__e && null == t.__c) return t;
            var e = a(t.type, t.props, t.key, null);
            return e.__e = t.__e, e
        }(t)) : t);
        return n
    }

    function h(t, e, n) {
        "-" === e[0] ? t.setProperty(e, n) : t[e] = "number" == typeof n && !1 === r.test(e) ? n + "px" : null == n ? "" : n
    }

    function T(t, e, n, r, i) {
        var o, s, l, a, u;
        if ("key" !== (e = i ? "className" === e ? "class" : e : "class" === e ? "className" : e) && "children" !== e)
            if ("style" === e)
                if (o = t.style, "string" == typeof n) o.cssText = n;
                else {
                    if ("string" == typeof r && (o.cssText = "", r = null), r)
                        for (s in r) n && s in n || h(o, s, "");
                    if (n)
                        for (l in n) r && n[l] === r[l] || h(o, l, n[l])
                } else "o" === e[0] && "n" === e[1] ? (a = e !== (e = e.replace(/Capture$/, "")), e = ((u = e.toLowerCase()) in t ? u : e).slice(2), n ? (r || t.addEventListener(e, c, a), (t.t || (t.t = {}))[e] = n) : t.removeEventListener(e, c, a)) : "list" !== e && "tagName" !== e && "form" !== e && !i && e in t ? t[e] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == n || !1 === n ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), n) : null == n || !1 === n ? t.removeAttribute(e) : t.setAttribute(e, n))
    }

    function c(t) {
        return this.t[t.type](m.event ? m.event(t) : t)
    }

    function A(t, e, n, r, i, o, s, l, a, u) {
        var h, c, f, d, p, g, v, _, b, y = e.type;
        if (void 0 !== e.constructor) return null;
        (h = m.__b) && h(e);
        try {
            t: if ("function" == typeof y) {
                    if (v = e.props, _ = (h = y.contextType) && r[h.__c], b = h ? _ ? _.props.value : h.__p : r, n.__c ? g = (c = e.__c = n.__c).__p = c.__E : ("prototype" in y && y.prototype.render ? e.__c = c = new y(v, b) : (e.__c = c = new E(v, b), c.constructor = y, c.render = I), _ && _.sub(c), c.props = v, c.state || (c.state = {}), c.context = b, c.__n = r, f = c.__d = !0, c.__h = []), null == c.__s && (c.__s = c.state), null != y.getDerivedStateFromProps && k(c.__s == c.state ? c.__s = k({}, c.__s) : c.__s, y.getDerivedStateFromProps(v, c.__s)), f) null == y.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(), null != c.componentDidMount && s.push(c);
                    else {
                        if (null == y.getDerivedStateFromProps && null == l && null != c.componentWillReceiveProps && c.componentWillReceiveProps(v, b), !l && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(v, c.__s, b)) {
                            for (c.props = v, c.state = c.__s, c.__d = !1, (c.__v = e).__e = null != a ? a !== n.__e ? a : n.__e : null, e.__k = n.__k, h = 0; h < e.__k.length; h++) e.__k[h] && (e.__k[h].__p = e);
                            break t
                        }
                        null != c.componentWillUpdate && c.componentWillUpdate(v, c.__s, b)
                    }
                    for (d = c.props, _ = c.state, c.context = b, c.props = v, c.state = c.__s, (h = m.__r) && h(e), c.__d = !1, c.__v = e, c.__P = t, h = c.render(c.props, c.state, c.context), e.__k = C(null != h && h.type == S && null == h.key ? h.props.children : h), null != c.getChildContext && (r = k(k({}, r), c.getChildContext())), f || null == c.getSnapshotBeforeUpdate || (p = c.getSnapshotBeforeUpdate(d, _)), M(t, e, n, r, i, o, s, a, u), c.base = e.__e; h = c.__h.pop();) c.__s && (c.state = c.__s), h.call(c);
                    f || null == d || null == c.componentDidUpdate || c.componentDidUpdate(d, _, p), g && (c.__E = c.__p = null)
                } else e.__e = function (t, e, n, r, i, o, s, l) {
                    var a, u, h, c, f = n.props,
                        d = e.props;
                    if (i = "svg" === e.type || i, null == t && null != o)
                        for (a = 0; a < o.length; a++)
                            if (null != (u = o[a]) && (null === e.type ? 3 === u.nodeType : u.localName === e.type)) {
                                t = u, o[a] = null;
                                break
                            }
                    if (null == t) {
                        if (null === e.type) return document.createTextNode(d);
                        t = i ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type), o = null
                    }
                    return null === e.type ? f !== d && (null != o && (o[o.indexOf(t)] = null), t.data = d) : e !== n && (null != o && (o = w.slice.call(t.childNodes)), h = (f = n.props || x).dangerouslySetInnerHTML, c = d.dangerouslySetInnerHTML, l || (c || h) && (c && h && c.__html == h.__html || (t.innerHTML = c && c.__html || "")), function (t, e, n, r, i) {
                        for (var o in n) o in e || T(t, o, null, n[o], r);
                        for (o in e) i && "function" != typeof e[o] || "value" === o || "checked" === o || n[o] === e[o] || T(t, o, e[o], n[o], r)
                    }(t, d, f, i, l), e.__k = e.props.children, c || M(t, e, n, r, "foreignObject" !== e.type && i, o, s, x, l), l || ("value" in d && void 0 !== d.value && d.value !== t.value && (t.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== t.checked && (t.checked = d.checked))), t
                }(n.__e, e, n, r, i, o, s, u);
                (h = m.diffed) && h(e)
        } catch (t) {
            m.__e(t, e, n)
        }
        return e.__e
    }

    function f(t, e) {
        for (var n; n = t.pop();) try {
            n.componentDidMount()
        } catch (t) {
            m.__e(t, n.__v)
        }
        m.__c && m.__c(e)
    }

    function O(t, e, n) {
        try {
            "function" == typeof t ? t(e) : t.current = e
        } catch (t) {
            m.__e(t, n)
        }
    }

    function I(t, e, n) {
        return this.constructor(t, n)
    }
    m = {}, E.prototype.setState = function (t, e) {
        var n = this.__s !== this.state && this.__s || (this.__s = k({}, this.state));
        "function" == typeof t && !(t = t(n, this.props)) || k(n, t), null != t && this.__v && (this.u = !1, e && this.__h.push(e), i(this))
    }, E.prototype.forceUpdate = function (t) {
        this.__v && (t && this.__h.push(t), this.u = !0, i(this))
    }, E.prototype.render = S, l = [], e = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, n = m.debounceRendering, m.__e = function (t, e, n) {
        for (var r; e = e.__p;)
            if ((r = e.__c) && !r.__p) try {
                if (r.constructor && null != r.constructor.getDerivedStateFromError) r.setState(r.constructor.getDerivedStateFromError(t));
                else {
                    if (null == r.componentDidCatch) continue;
                    r.componentDidCatch(t)
                }
                return i(r.__E = r)
            } catch (e) {
                t = e
            }
            throw t
    }, u = x;
    var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
        s = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
        d = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
        g = new RegExp("rgb" + s),
        v = new RegExp("rgba" + d),
        _ = new RegExp("hsl" + s),
        R = new RegExp("hsla" + d),
        t = "^(?:#?|0x?)",
        s = "([0-9a-fA-F]{1})",
        d = "([0-9a-fA-F]{2})",
        j = new RegExp(t + s + s + s + "$"),
        P = new RegExp(t + s + s + s + s + "$"),
        W = new RegExp(t + d + d + d + "$"),
        D = new RegExp(t + d + d + d + d + "$"),
        N = Math.log,
        $ = Math.round,
        H = Math.floor;

    function L(t, e, n) {
        return Math.min(Math.max(t, e), n)
    }

    function U(t, e) {
        var n = -1 < t.indexOf("%"),
            t = parseFloat(t);
        return n ? e / 100 * t : t
    }

    function B(t) {
        return parseInt(t, 16)
    }

    function F(t) {
        return t.toString(16).padStart(2, "0")
    }
    var z = function (t, e) {
            this.$ = {
                h: 0,
                s: 0,
                v: 0,
                a: 1
            }, t && this.set(t), this.onChange = e, this.initialValue = Object.assign({}, this.$)
        },
        t = {
            hsv: {
                configurable: !0
            },
            hsva: {
                configurable: !0
            },
            hue: {
                configurable: !0
            },
            saturation: {
                configurable: !0
            },
            value: {
                configurable: !0
            },
            alpha: {
                configurable: !0
            },
            kelvin: {
                configurable: !0
            },
            red: {
                configurable: !0
            },
            green: {
                configurable: !0
            },
            blue: {
                configurable: !0
            },
            rgb: {
                configurable: !0
            },
            rgba: {
                configurable: !0
            },
            hsl: {
                configurable: !0
            },
            hsla: {
                configurable: !0
            },
            rgbString: {
                configurable: !0
            },
            rgbaString: {
                configurable: !0
            },
            hexString: {
                configurable: !0
            },
            hex8String: {
                configurable: !0
            },
            hslString: {
                configurable: !0
            },
            hslaString: {
                configurable: !0
            }
        };
    z.prototype.set = function (t) {
        if ("string" == typeof t) /^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t) ? this.hexString = t : /^rgba?/.test(t) ? this.rgbString = t : /^hsla?/.test(t) && (this.hslString = t);
        else {
            if ("object" != typeof t) throw new Error("Invalid color value");
            t instanceof z ? this.hsv = t.hsv : "object" == typeof t && "r" in t && "g" in t && "b" in t ? this.rgb = t : "object" == typeof t && "h" in t && "s" in t && "v" in t ? this.hsv = t : "object" == typeof t && "h" in t && "s" in t && "l" in t && (this.hsl = t)
        }
    }, z.prototype.setChannel = function (t, e, n) {
        this[t] = Object.assign({}, this[t], ((t = {})[e] = n, t))
    }, z.prototype.reset = function () {
        this.hsva = this.initialValue
    }, z.prototype.clone = function () {
        return new z(this)
    }, z.prototype.unbind = function () {
        this.onChange = void 0
    }, z.hsvToRgb = function (t) {
        var e = t.h / 60,
            n = t.s / 100,
            r = t.v / 100,
            i = H(e),
            o = e - i,
            s = r * (1 - n),
            t = r * (1 - o * n),
            e = r * (1 - (1 - o) * n),
            o = i % 6,
            n = [e, r, r, t, s, s][o],
            i = [s, s, e, r, r, t][o];
        return {
            r: L(255 * [r, t, s, s, e, r][o], 0, 255),
            g: L(255 * n, 0, 255),
            b: L(255 * i, 0, 255)
        }
    }, z.rgbToHsv = function (t) {
        var e = t.r / 255,
            n = t.g / 255,
            r = t.b / 255,
            i = Math.max(e, n, r),
            o = Math.min(e, n, r),
            s = i - o,
            l = 0,
            a = i,
            t = 0 === i ? 0 : s / i;
        switch (i) {
            case o:
                l = 0;
                break;
            case e:
                l = (n - r) / s + (n < r ? 6 : 0);
                break;
            case n:
                l = (r - e) / s + 2;
                break;
            case r:
                l = (e - n) / s + 4
        }
        return {
            h: 60 * l % 360,
            s: L(100 * t, 0, 100),
            v: L(100 * a, 0, 100)
        }
    }, z.hsvToHsl = function (t) {
        var e = t.s / 100,
            n = t.v / 100,
            r = (2 - e) * n,
            i = r <= 1 ? r : 2 - r,
            i = i < 1e-9 ? 0 : e * n / i;
        return {
            h: t.h,
            s: L(100 * i, 0, 100),
            l: L(50 * r, 0, 100)
        }
    }, z.hslToHsv = function (t) {
        var e = 2 * t.l,
            n = t.s * (e <= 100 ? e : 200 - e) / 100,
            r = e + n < 1e-9 ? 0 : 2 * n / (e + n);
        return {
            h: t.h,
            s: L(100 * r, 0, 100),
            v: L((e + n) / 2, 0, 100)
        }
    }, z.kelvinToRgb = function (t) {
        var e, n, t = t / 100,
            r = t < 66 ? (e = 255, n = -155.25485562709179 - .44596950469579133 * (n = t - 2) + 104.49216199393888 * N(n), t < 20 ? 0 : .8274096064007395 * (r = t - 10) - 254.76935184120902 + 115.67994401066147 * N(r)) : (e = 351.97690566805693 + .114206453784165 * (e = t - 55) - 40.25366309332127 * N(e), n = 325.4494125711974 + .07943456536662342 * (n = t - 50) - 28.0852963507957 * N(n), 255);
        return {
            r: L(H(e), 0, 255),
            g: L(H(n), 0, 255),
            b: L(H(r), 0, 255)
        }
    }, z.rgbToKelvin = function (t) {
        for (var e, n = t.r, r = t.b, i = 1e3, o = 4e4;.4 < o - i;) {
            e = .5 * (o + i);
            var s = z.kelvinToRgb(e);
            s.b / s.r >= r / n ? o = e : i = e
        }
        return e
    }, t.hsv.get = function () {
        var t = this.$;
        return {
            h: t.h,
            s: t.s,
            v: t.v
        }
    }, t.hsv.set = function (t) {
        var e = this.$;
        if (t = Object.assign({}, e, t), this.onChange) {
            var n, r = {
                h: !1,
                v: !1,
                s: !1,
                a: !1
            };
            for (n in e) r[n] = t[n] != e[n];
            this.$ = t, (r.h || r.s || r.v || r.a) && this.onChange(this, r)
        } else this.$ = t
    }, t.hsva.get = function () {
        return Object.assign({}, this.$)
    }, t.hsva.set = function (t) {
        this.hsv = t
    }, t.hue.get = function () {
        return this.$.h
    }, t.hue.set = function (t) {
        this.hsv = {
            h: t
        }
    }, t.saturation.get = function () {
        return this.$.s
    }, t.saturation.set = function (t) {
        this.hsv = {
            s: t
        }
    }, t.value.get = function () {
        return this.$.v
    }, t.value.set = function (t) {
        this.hsv = {
            v: t
        }
    }, t.alpha.get = function () {
        return this.$.a
    }, t.alpha.set = function (t) {
        this.hsv = Object.assign({}, this.hsv, {
            a: t
        })
    }, t.kelvin.get = function () {
        return z.rgbToKelvin(this.rgb)
    }, t.kelvin.set = function (t) {
        this.rgb = z.kelvinToRgb(t)
    }, t.red.get = function () {
        return this.rgb.r
    }, t.red.set = function (t) {
        this.rgb = Object.assign({}, this.rgb, {
            r: t
        })
    }, t.green.get = function () {
        return this.rgb.g
    }, t.green.set = function (t) {
        this.rgb = Object.assign({}, this.rgb, {
            g: t
        })
    }, t.blue.get = function () {
        return this.rgb.b
    }, t.blue.set = function (t) {
        this.rgb = Object.assign({}, this.rgb, {
            b: t
        })
    }, t.rgb.get = function () {
        var t = z.hsvToRgb(this.$),
            e = t.r,
            n = t.g,
            t = t.b;
        return {
            r: $(e),
            g: $(n),
            b: $(t)
        }
    }, t.rgb.set = function (t) {
        this.hsv = Object.assign({}, z.rgbToHsv(t), {
            a: void 0 === t.a ? 1 : t.a
        })
    }, t.rgba.get = function () {
        return Object.assign({}, this.rgb, {
            a: this.alpha
        })
    }, t.rgba.set = function (t) {
        this.rgb = t
    }, t.hsl.get = function () {
        var t = z.hsvToHsl(this.$),
            e = t.h,
            n = t.s,
            t = t.l;
        return {
            h: $(e),
            s: $(n),
            l: $(t)
        }
    }, t.hsl.set = function (t) {
        this.hsv = Object.assign({}, z.hslToHsv(t), {
            a: void 0 === t.a ? 1 : t.a
        })
    }, t.hsla.get = function () {
        return Object.assign({}, this.hsl, {
            a: this.alpha
        })
    }, t.hsla.set = function (t) {
        this.hsl = t
    }, t.rgbString.get = function () {
        var t = this.rgb;
        return "rgb(" + t.r + ", " + t.g + ", " + t.b + ")"
    }, t.rgbString.set = function (t) {
        var e, n, r, i, o = 1;
        if ((e = g.exec(t)) ? (n = U(e[1], 255), r = U(e[2], 255), i = U(e[3], 255)) : (e = v.exec(t)) && (n = U(e[1], 255), r = U(e[2], 255), i = U(e[3], 255), o = U(e[4], 1)), !e) throw new Error("Invalid rgb string");
        this.rgb = {
            r: n,
            g: r,
            b: i,
            a: o
        }
    }, t.rgbaString.get = function () {
        var t = this.rgba;
        return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")"
    }, t.rgbaString.set = function (t) {
        this.rgbString = t
    }, t.hexString.get = function () {
        var t = this.rgb;
        return "#" + F(t.r) + F(t.g) + F(t.b)
    }, t.hexString.set = function (t) {
        var e, n, r, i, o = 255;
        if ((e = j.exec(t)) ? (n = 17 * B(e[1]), r = 17 * B(e[2]), i = 17 * B(e[3])) : (e = P.exec(t)) ? (n = 17 * B(e[1]), r = 17 * B(e[2]), i = 17 * B(e[3]), o = 17 * B(e[4])) : (e = W.exec(t)) ? (n = B(e[1]), r = B(e[2]), i = B(e[3])) : (e = D.exec(t)) && (n = B(e[1]), r = B(e[2]), i = B(e[3]), o = B(e[4])), !e) throw new Error("Invalid hex string");
        this.rgb = {
            r: n,
            g: r,
            b: i,
            a: o / 255
        }
    }, t.hex8String.get = function () {
        var t = this.rgba;
        return "#" + F(t.r) + F(t.g) + F(t.b) + F(H(255 * t.a))
    }, t.hex8String.set = function (t) {
        this.hexString = t
    }, t.hslString.get = function () {
        var t = this.hsl;
        return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)"
    }, t.hslString.set = function (t) {
        var e, n, r, i, o = 1;
        if ((e = _.exec(t)) ? (n = U(e[1], 360), r = U(e[2], 100), i = U(e[3], 100)) : (e = R.exec(t)) && (n = U(e[1], 360), r = U(e[2], 100), i = U(e[3], 100), o = U(e[4], 1)), !e) throw new Error("Invalid hsl string");
        this.hsl = {
            h: n,
            s: r,
            l: i,
            a: o
        }
    }, t.hslaString.get = function () {
        var t = this.hsla;
        return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")"
    }, t.hslaString.set = function (t) {
        this.hslString = t
    }, Object.defineProperties(z.prototype, t);
    var G;

    function V(t) {
        var e = t.width,
            n = t.sliderSize,
            r = t.borderWidth,
            i = t.handleRadius,
            o = t.padding,
            s = t.sliderShape,
            l = "horizontal" === t.layoutDirection,
            n = n || 2 * o + 2 * i + 2 * r;
        return "circle" === s ? {
            handleStart: t.padding + t.handleRadius,
            handleRange: e - 2 * o - 2 * i - 2 * r,
            width: e,
            height: e,
            cx: e / 2,
            cy: e / 2,
            radius: e / 2 - r / 2
        } : {
            handleStart: n / 2,
            handleRange: e - n,
            radius: n / 2,
            x: 0,
            y: 0,
            width: l ? n : e,
            height: l ? e : n
        }
    }

    function q(t, e) {
        var n = V(t),
            r = n.width,
            i = n.height,
            o = n.handleRange,
            s = n.handleStart,
            n = "horizontal" === t.layoutDirection,
            i = n ? r / 2 : i / 2,
            e = s + function (t, e) {
                var n = e.hsva,
                    r = e.rgb;
                switch (t.sliderType) {
                    case "red":
                        return r.r / 2.55;
                    case "green":
                        return r.g / 2.55;
                    case "blue":
                        return r.b / 2.55;
                    case "alpha":
                        return 100 * n.a;
                    case "kelvin":
                        var i = t.minTemperature,
                            o = t.maxTemperature - i,
                            o = (e.kelvin - i) / o * 100;
                        return Math.max(0, Math.min(o, 100));
                    case "hue":
                        return n.h /= 3.6;
                    case "saturation":
                        return n.s;
                    case "value":
                    default:
                        return n.v
                }
            }(t, e) / 100 * o;
        return n && (e = -1 * e + o + 2 * s), {
            x: n ? i : e,
            y: n ? e : i
        }
    }

    function K(t) {
        var e = t.width / 2;
        return {
            width: t.width,
            radius: e - t.borderWidth,
            cx: e,
            cy: e
        }
    }

    function X(t, e, n) {
        var r = t.wheelAngle,
            t = t.wheelDirection;
        return ((e = !n && "clockwise" === t || n && "anticlockwise" === t ? (n ? 180 : 360) - (r - e) : r + e) % 360 + 360) % 360
    }

    function Y(t, e, n) {
        var r = K(t),
            i = r.cx,
            o = r.cy,
            r = t.width / 2 - t.padding - t.handleRadius - t.borderWidth;
        e = i - e, n = o - n;
        t = X(t, Math.atan2(-n, -e) * (180 / Math.PI)), n = Math.min(Math.sqrt(e * e + n * n), r);
        return {
            h: Math.round(t),
            s: Math.round(100 / r * n)
        }
    }

    function J(t) {
        var e = t.width;
        return {
            width: e,
            height: e,
            radius: t.padding + t.handleRadius
        }
    }

    function Q(t, e, n) {
        var r = J(t),
            i = r.width,
            t = r.height,
            r = r.radius,
            i = (e - r) / (i - 2 * r) * 100,
            r = (n - r) / (t - 2 * r) * 100;
        return {
            s: Math.max(0, Math.min(i, 100)),
            v: Math.max(0, Math.min(100 - r, 100))
        }
    }

    function Z(t) {
        G = G || document.getElementsByTagName("base");
        var e = window.navigator.userAgent,
            n = /^((?!chrome|android).)*safari/i.test(e),
            r = /iPhone|iPod|iPad/i.test(e),
            e = window.location;
        return (n || r) && 0 < G.length ? e.protocol + "//" + e.host + e.pathname + e.search + t : t
    }

    function tt(t, e, n, r) {
        for (var i = 0; i < r.length; i++) {
            var o = r[i].x - e,
                s = r[i].y - n;
            if (Math.sqrt(o * o + s * s) < t.handleRadius) return i
        }
        return null
    }
    var et = ["mousemove", "touchmove", "mouseup", "touchend"],
        nt = function (e) {
            function t(t) {
                e.call(this, t), this.uid = (Math.random() + 1).toString(36).substring(5)
            }
            return e && (t.__proto__ = e), ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.render = function (t) {
                var e = this.handleEvent.bind(this),
                    n = {
                        onMouseDown: e,
                        ontouchstart: e
                    },
                    r = "horizontal" === t.layoutDirection,
                    i = null === t.margin ? t.sliderMargin : t.margin,
                    e = {
                        overflow: "visible",
                        display: r ? "inline-block" : "block"
                    };
                return 0 < t.index && (e[r ? "marginLeft" : "marginTop"] = i), p(S, null, t.children(this.uid, n, e))
            }, t.prototype.handleEvent = function (t) {
                var e = this,
                    n = this.props.onInput,
                    r = this.base.getBoundingClientRect();
                t.preventDefault();
                var i = t.touches ? t.changedTouches[0] : t,
                    o = i.clientX - r.left,
                    s = i.clientY - r.top;
                switch (t.type) {
                    case "mousedown":
                    case "touchstart":
                        et.forEach(function (t) {
                            document.addEventListener(t, e, {
                                passive: !1
                            })
                        }), n(o, s, 0);
                        break;
                    case "mousemove":
                    case "touchmove":
                        n(o, s, 1);
                        break;
                    case "mouseup":
                    case "touchend":
                        n(o, s, 2), et.forEach(function (t) {
                            document.removeEventListener(t, e)
                        })
                }
            }, t
        }(E);

    function rt(t) {
        var e = t.r,
            n = t.url;
        return p("svg", {
            className: "IroHandle IroHandle--" + t.index + " " + (t.isActive ? "IroHandle--isActive" : ""),
            x: t.x,
            y: t.y,
            style: {
                overflow: "visible"
            }
        }, n && p("use", Object.assign({
            xlinkHref: Z(n)
        }, t.props)), !n && p("circle", {
            r: e,
            fill: "none",
            "stroke-width": 2,
            stroke: "#000"
        }), !n && p("circle", {
            r: e - 2,
            fill: t.fill,
            "stroke-width": 2,
            stroke: "#fff"
        }))
    }

    function it(r) {
        var t = r.activeIndex,
            i = void 0 !== t && t < r.colors.length ? r.colors[t] : r.color,
            t = V(r),
            o = t.width,
            s = t.height,
            l = t.radius,
            a = q(r, i),
            u = function (t, e) {
                var n = e.hsv,
                    r = e.rgb;
                switch (t.sliderType) {
                    case "red":
                        return [[0, "rgb(0," + r.g + "," + r.b + ")"], [100, "rgb(255," + r.g + "," + r.b + ")"]];
                    case "green":
                        return [[0, "rgb(" + r.r + ",0," + r.b + ")"], [100, "rgb(" + r.r + ",255," + r.b + ")"]];
                    case "blue":
                        return [[0, "rgb(" + r.r + "," + r.g + ",0)"], [100, "rgb(" + r.r + "," + r.g + ",255)"]];
                    case "alpha":
                        return [[0, "rgba(" + r.r + "," + r.g + "," + r.b + ",0)"], [100, "rgb(" + r.r + "," + r.g + "," + r.b + ")"]];
                    case "kelvin":
                        for (var i = [], o = t.minTemperature, s = t.maxTemperature, l = s - o, a = o, u = 0; a < s; a += l / 8, u += 1) {
                            var h = z.kelvinToRgb(a),
                                c = h.r,
                                f = h.g,
                                h = h.b;
                            i.push([12.5 * u, "rgb(" + c + "," + f + "," + h + ")"])
                        }
                        return i;
                    case "hue":
                        return [[0, "#f00"], [16.666, "#ff0"], [33.333, "#0f0"], [50, "#0ff"], [66.666, "#00f"], [83.333, "#f0f"], [100, "#f00"]];
                    case "saturation":
                        var o = z.hsvToHsl({
                                h: n.h,
                                s: 0,
                                v: n.v
                            }),
                            d = z.hsvToHsl({
                                h: n.h,
                                s: 100,
                                v: n.v
                            });
                        return [[0, "hsl(" + o.h + "," + o.s + "%," + o.l + "%)"], [100, "hsl(" + d.h + "," + d.s + "%," + d.l + "%)"]];
                    case "value":
                    default:
                        d = z.hsvToHsl({
                            h: n.h,
                            s: n.s,
                            v: 100
                        });
                        return [[0, "#000"], [100, "hsl(" + d.h + "," + d.s + "%," + d.l + "%)"]]
                }
            }(r, i),
            h = "alpha" === r.sliderType;
        return p(nt, Object.assign({}, r, {
            onInput: function (t, e, n) {
                e = function (t, e, n) {
                    var r = (i = V(t)).handleRange,
                        i = i.handleStart,
                        i = "horizontal" === t.layoutDirection ? -1 * n + r + i : e - i;
                    i = Math.max(Math.min(i, r), 0);
                    var o = Math.round(100 / r * i);
                    switch (t.sliderType) {
                        case "kelvin":
                            var s = t.minTemperature;
                            return s + o / 100 * (t.maxTemperature - s);
                        case "alpha":
                            return o / 100;
                        case "hue":
                            return 3.6 * o;
                        case "red":
                        case "blue":
                        case "green":
                            return 2.55 * o;
                        default:
                            return o
                    }
                }(r, t, e), r.parent.inputActive = !0, i[r.sliderType] = e, r.onInput(n)
            }
        }), function (t, e, n) {
            return p("svg", Object.assign({}, e, {
                className: "IroSlider",
                width: o,
                height: s,
                style: n
            }), p("defs", null, p("linearGradient", Object.assign({
                id: "g" + t
            }, {
                x1: "0%",
                y1: (n = "horizontal" === (n = r).layoutDirection) ? "100%" : "0%",
                x2: n ? "0%" : "100%",
                y2: "0%"
            }), u.map(function (t) {
                return p("stop", {
                    offset: t[0] + "%",
                    "stop-color": t[1]
                })
            })), h && p("pattern", {
                id: "b" + t,
                width: "8",
                height: "8",
                patternUnits: "userSpaceOnUse"
            }, p("rect", {
                x: "0",
                y: "0",
                width: "8",
                height: "8",
                fill: "#fff"
            }), p("rect", {
                x: "0",
                y: "0",
                width: "4",
                height: "4",
                fill: "#ccc"
            }), p("rect", {
                x: "4",
                y: "4",
                width: "4",
                height: "4",
                fill: "#ccc"
            })), h && p("pattern", {
                id: "f" + t,
                width: "100%",
                height: "100%"
            }, p("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: "url(" + Z("#b" + t) + ")"
            }), p("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: "url(" + Z("#g" + t) + ")"
            }))), p("rect", {
                className: "IroSliderBg",
                rx: l,
                ry: l,
                x: r.borderWidth / 2,
                y: r.borderWidth / 2,
                width: o - r.borderWidth,
                height: s - r.borderWidth,
                "stroke-width": r.borderWidth,
                stroke: r.borderColor,
                fill: "url(" + Z((h ? "#f" : "#g") + t) + ")"
            }), p(rt, {
                isActive: !0,
                index: i.index,
                r: r.handleRadius,
                url: r.handleSvg,
                props: r.handleProps,
                x: a.x,
                y: a.y
            }))
        })
    }

    function ot(i) {
        var t = J(i),
            r = t.width,
            o = t.height,
            s = t.radius,
            l = i.colors,
            a = i.parent,
            t = i.activeIndex,
            u = void 0 !== t && t < i.colors.length ? i.colors[t] : i.color,
            h = [[[0, "#fff"], [100, "hsl(" + u.hue + ",100%,50%)"]], [[0, "rgba(0,0,0,0)"], [100, "#000"]]],
            c = l.map(function (t) {
                return n = t, t = (r = J(e = i)).width, e = r.height, r = r.radius, n = n.hsv, t -= 2 * r, e -= 2 * r, {
                    x: r + n.s / 100 * t,
                    y: r + (e - n.v / 100 * e)
                };
                var e, n, r
            });
        return p(nt, Object.assign({}, i, {
            onInput: function (t, e, n) {
                var r;
                0 === n ? null !== (r = tt(i, t, e, c)) ? a.setActiveColor(r) : (a.inputActive = !0, u.hsv = Q(i, t, e), i.onInput(n)) : 1 === n && (a.inputActive = !0, u.hsv = Q(i, t, e)), i.onInput(n)
            }
        }), function (t, e, n) {
            return p("svg", Object.assign({}, e, {
                className: "IroBox",
                width: r,
                height: o,
                style: n
            }), p("defs", null, p("linearGradient", {
                id: "s" + t,
                x1: "0%",
                y1: "0%",
                x2: "100%",
                y2: "0%"
            }, h[0].map(function (t) {
                return p("stop", {
                    offset: t[0] + "%",
                    "stop-color": t[1]
                })
            })), p("linearGradient", {
                id: "l" + t,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%"
            }, h[1].map(function (t) {
                return p("stop", {
                    offset: t[0] + "%",
                    "stop-color": t[1]
                })
            })), p("pattern", {
                id: "f" + t,
                width: "100%",
                height: "100%"
            }, p("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: "url(" + Z("#s" + t) + ")"
            }), p("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: "url(" + Z("#l" + t) + ")"
            }))), p("rect", {
                rx: s,
                ry: s,
                x: i.borderWidth / 2,
                y: i.borderWidth / 2,
                width: r - i.borderWidth,
                height: o - i.borderWidth,
                "stroke-width": i.borderWidth,
                stroke: i.borderColor,
                fill: "url(" + Z("#f" + t) + ")"
            }), l.filter(function (t) {
                return t !== u
            }).map(function (t) {
                return p(rt, {
                    isActive: !1,
                    index: t.index,
                    fill: t.hslString,
                    r: i.handleRadius,
                    url: i.handleSvg,
                    props: i.handleProps,
                    x: c[t.index].x,
                    y: c[t.index].y
                })
            }), p(rt, {
                isActive: !0,
                index: u.index,
                fill: u.hslString,
                r: i.handleRadius,
                url: i.handleSvg,
                props: i.handleProps,
                x: c[u.index].x,
                y: c[u.index].y
            }))
        })
    }
    rt.defaultProps = {
        fill: "none",
        x: 0,
        y: 0,
        r: 8,
        url: null,
        props: {
            x: 0,
            y: 0
        }
    }, it.defaultProps = Object.assign({}, {
        sliderShape: "bar",
        sliderType: "value",
        minTemperature: 2200,
        maxTemperature: 11e3
    });
    var st = Array.apply(null, {
        length: 360
    }).map(function (t, e) {
        return e
    });

    function lt(l) {
        var t = K(l),
            r = t.width,
            a = t.radius,
            u = t.cx,
            h = t.cy,
            i = l.colors,
            o = l.borderWidth,
            s = l.parent,
            c = l.color,
            f = c.hsv,
            d = i.map(function (t) {
                return e = l, r = (n = t).hsv, i = (o = K(e)).cx, t = o.cy, n = e.width / 2 - e.padding - e.handleRadius - e.borderWidth, o = (180 + X(e, r.h, !0)) * (Math.PI / 180), n = r.s / 100 * n, e = "clockwise" === e.wheelDirection ? -1 : 1, {
                    x: i + n * Math.cos(o) * e,
                    y: t + n * Math.sin(o) * e
                };
                var e, n, r, i, o
            });
        return p(nt, Object.assign({}, l, {
            onInput: function (t, e, n) {
                var r;
                0 === n ? null !== (r = tt(l, t, e, d)) ? s.setActiveColor(r) : (s.inputActive = !0, c.hsv = Y(l, t, e), l.onInput(n)) : 1 === n && (s.inputActive = !0, c.hsv = Y(l, t, e)), l.onInput(n)
            }
        }), function (t, e, n) {
            return p("svg", Object.assign({}, e, {
                className: "IroWheel",
                width: r,
                height: r,
                style: n
            }), p("defs", null, p("radialGradient", {
                id: t
            }, p("stop", {
                offset: "0%",
                "stop-color": "#fff"
            }), p("stop", {
                offset: "100%",
                "stop-color": "#fff",
                "stop-opacity": "0"
            }))), p("g", {
                className: "IroWheelHue",
                "stroke-width": a,
                fill: "none"
            }, st.map(function (t) {
                return p("path", {
                    key: t,
                    d: (e = u, n = h, r = a / 2, s = (o = (i = t) + 1.5) - i <= 180 ? 0 : 1, i *= Math.PI / 180, o *= Math.PI / 180, "M " + (e + r * Math.cos(o)) + " " + (n + r * Math.sin(o)) + " A " + r + " " + r + " 0 " + s + " 0 " + (e + r * Math.cos(i)) + " " + (n + r * Math.sin(i))),
                    stroke: "hsl(" + X(l, t) + ", 100%, 50%)"
                });
                var e, n, r, i, o, s
            })), p("circle", {
                className: "IroWheelSaturation",
                cx: u,
                cy: h,
                r: a,
                fill: "url(" + Z("#" + t) + ")"
            }), l.wheelLightness && p("circle", {
                className: "IroWheelLightness",
                cx: u,
                cy: h,
                r: a,
                fill: "#000",
                opacity: 1 - f.v / 100
            }), p("circle", {
                className: "IroWheelBorder",
                cx: u,
                cy: h,
                r: a,
                fill: "none",
                stroke: l.borderColor,
                "stroke-width": o
            }), i.filter(function (t) {
                return t !== c
            }).map(function (t) {
                return p(rt, {
                    isActive: !1,
                    index: t.index,
                    fill: t.hslString,
                    r: l.handleRadius,
                    url: l.handleSvg,
                    props: l.handleProps,
                    x: d[t.index].x,
                    y: d[t.index].y
                })
            }), p(rt, {
                isActive: !0,
                index: c.index,
                fill: c.hslString,
                r: l.handleRadius,
                url: l.handleSvg,
                props: l.handleProps,
                x: d[c.index].x,
                y: d[c.index].y
            }))
        })
    }
    var at = function (n) {
        function t(t) {
            var e = this;
            n.call(this, t), this.colors = [], this.inputActive = !1, this.events = {}, this.activeEvents = {}, this.deferredEvents = {}, this.id = t.id, (0 < t.colors.length ? t.colors : [t.color]).forEach(function (t) {
                return e.addColor(t)
            }), this.setActiveColor(0), this.state = Object.assign({}, t, {
                color: this.color,
                colors: this.colors,
                layout: t.layout
            })
        }
        return n && (t.__proto__ = n), ((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.addColor = function (t, e) {
            void 0 === e && (e = this.colors.length);
            t = new z(t, this.onColorChange.bind(this));
            this.colors.splice(e, 0, t), this.colors.forEach(function (t, e) {
                return t.index = e
            }), this.state && this.setState({
                colors: this.colors
            }), this.deferredEmit("color:init", t)
        }, t.prototype.removeColor = function (t) {
            t = this.colors.splice(t, 1)[0];
            t.unbind(), this.colors.forEach(function (t, e) {
                return t.index = e
            }), this.state && this.setState({
                colors: this.colors
            }), t.index === this.color.index && this.setActiveColor(0), this.emit("color:remove", t)
        }, t.prototype.setActiveColor = function (t) {
            this.color = this.colors[t], this.state && this.setState({
                color: this.color
            }), this.emit("color:setActive", this.color)
        }, t.prototype.setColors = function (t) {
            var e = this;
            this.colors.forEach(function (t) {
                return t.unbind()
            }), this.colors = [], t.forEach(function (t) {
                return e.addColor(t)
            }), this.setActiveColor(0), this.emit("color:setAll", this.colors)
        }, t.prototype.on = function (t, e) {
            var n = this,
                r = this.events;
            (Array.isArray(t) ? t : [t]).forEach(function (t) {
                (r[t] || (r[t] = [])).push(e), n.deferredEvents[t] && (n.deferredEvents[t].forEach(function (t) {
                    e.apply(null, t)
                }), n.deferredEvents[t] = [])
            })
        }, t.prototype.off = function (t, e) {
            var n = this;
            (Array.isArray(t) ? t : [t]).forEach(function (t) {
                t = n.events[t];
                t && t.splice(t.indexOf(e), 1)
            })
        }, t.prototype.emit = function (t) {
            for (var e = this, n = [], r = arguments.length - 1; 0 < r--;) n[r] = arguments[r + 1];
            var i = this.activeEvents;
            !!i.hasOwnProperty(t) && i[t] || (i[t] = !0, (this.events[t] || []).forEach(function (t) {
                return t.apply(e, n)
            }), i[t] = !1)
        }, t.prototype.deferredEmit = function (t) {
            for (var e, n = [], r = arguments.length - 1; 0 < r--;) n[r] = arguments[r + 1];
            var i = this.deferredEvents;
            (e = this).emit.apply(e, [t].concat(n)), (i[t] || (i[t] = [])).push(n)
        }, t.prototype.setOptions = function (t) {
            this.setState(Object.assign({}, this.state, t))
        }, t.prototype.resize = function (t) {
            this.setOptions({
                width: t
            })
        }, t.prototype.reset = function () {
            this.colors.forEach(function (t) {
                return t.reset()
            }), this.setState({
                colors: this.colors
            })
        }, t.prototype.onMount = function (t) {
            this.el = t, this.deferredEmit("mount", this)
        }, t.prototype.onColorChange = function (t, e) {
            this.setState({
                color: this.color
            }), this.inputActive && (this.inputActive = !1, this.emit("input:change", t, e)), this.emit("color:change", t, e)
        }, t.prototype.emitInputEvent = function (t) {
            0 === t ? this.emit("input:start", this.color) : 1 === t ? this.emit("input:move", this.color) : 2 === t && this.emit("input:end", this.color)
        }, t.prototype.render = function (t, r) {
            var i = this,
                e = r.layout;
            return Array.isArray(e) || (e = [{
                component: lt
            }, {
                component: it
            }], r.transparency && e.push({
                component: it,
                options: {
                    sliderType: "alpha"
                }
            })), p("div", {
                class: "IroColorPicker",
                id: r.id,
                style: {
                    display: r.display
                }
            }, e.map(function (t, e) {
                var n = t.component,
                    t = t.options;
                return p(n, Object.assign({}, r, t, {
                    ref: void 0,
                    onInput: i.emitInputEvent.bind(i),
                    parent: i,
                    index: e
                }))
            }))
        }, t
    }(E);
    at.defaultProps = Object.assign({}, {
        width: 300,
        height: 300,
        handleRadius: 8,
        handleSvg: null,
        handleProps: {
            x: 0,
            y: 0
        },
        color: "#fff",
        colors: [],
        borderColor: "#fff",
        borderWidth: 0,
        wheelLightness: !0,
        wheelAngle: 0,
        wheelDirection: "anticlockwise",
        layoutDirection: "vertical",
        sliderSize: null,
        sliderMargin: 12,
        padding: 6
    }, {
        colors: [],
        display: "block",
        id: null,
        layout: "default",
        margin: null
    });
    var ut, ht, d = (ct.prototype = (ut = at).prototype, Object.assign(ct, ut), ct.__component = ut, ct);

    function ct(e, t) {
        var n, r, i, o, s, l = document.createElement("div");

        function a() {
            var t = e instanceof Element ? e : document.querySelector(e);
            t.appendChild(n.base), n.onMount(t)
        }
        return r = p(ut, Object.assign({}, {
            ref: function (t) {
                return n = t
            }
        }, t)), i = l, m.__p && m.__p(r, i), t = (s = o === u) ? null : o && o.__k || i.__k, r = p(S, null, [r]), l = [], A(i, s ? i.__k = r : (o || i).__k = r, t || x, x, void 0 !== i.ownerSVGElement, o && !s ? [o] : t ? null : w.slice.call(i.childNodes), l, !1, o || x, s), f(l, r), "loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a), n
    }
    return (t = ht = ht || {}).version = "5.2.3", t.Color = z, t.ColorPicker = d, (t = t.ui || (t.ui = {})).h = p, t.ComponentBase = nt, t.Handle = rt, t.Slider = it, t.Wheel = lt, t.Box = ot, ht
});
