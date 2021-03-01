function Scribble(t) {
    this.sketch = t || window, this.bowing = 1, this.roughness = 1, this.maxOffset = 2, this.numEllipseSteps = 9, this.ellipseInc = 2 * Math.PI / this.numEllipseSteps, this.getOffset = function (t, e) {
        return this.roughness * (this.sketch.random() * (e - t) + t)
    }, this.buildEllipse = function (t, e, s, i, h, n) {
        var f = this.getOffset(-.5, .5) - Math.PI / 2;
        this.sketch.beginShape(), this.sketch.curveVertex(this.getOffset(-h, h) + t + .9 * s * Math.cos(f - this.ellipseInc), this.getOffset(-h, h) + e + .9 * i * Math.sin(f - this.ellipseInc));
        for (var r = f; r < 2 * Math.PI + f - .01; r += this.ellipseInc) this.sketch.curveVertex(this.getOffset(-h, h) + t + s * Math.cos(r), this.getOffset(-h, h) + e + i * Math.sin(r));
        this.sketch.curveVertex(this.getOffset(-h, h) + t + s * Math.cos(f + 2 * Math.PI + .5 * n), this.getOffset(-h, h) + e + i * Math.sin(f + 2 * Math.PI + .5 * n)), this.sketch.curveVertex(this.getOffset(-h, h) + t + .98 * s * Math.cos(f + n), this.getOffset(-h, h) + e + .98 * i * Math.sin(f + n)), this.sketch.curveVertex(this.getOffset(-h, h) + t + .9 * s * Math.cos(f + .5 * n), this.getOffset(-h, h) + e + .9 * i * Math.sin(f + .5 * n)), this.sketch.endShape()
    }, this.getIntersectingLines = function (t, e, s) {
        for (var i = [], h = new Segment(t[0], t[1], t[2], t[3]), n = 0; n < e.length; n++) {
            var f = new Segment(e[n], s[n], e[(n + 1) % e.length], s[(n + 1) % e.length]);
            h.compare(f) == Relation.INTERSECTS && i.push([h.getIntersectionX(), h.getIntersectionY()])
        }
        return i
    }, this.scribbleLine = function (t, e, s, i) {
        var h = (t - s) * (t - s) + (e - i) * (e - i),
            n = this.maxOffset;
        this.maxOffset * this.maxOffset * 100 > h && (n = Math.sqrt(h) / 10);
        var f = n / 2,
            r = .2 + .2 * this.sketch.random(),
            a = this.bowing * this.maxOffset * (i - e) / 200,
            h = this.bowing * this.maxOffset * (t - s) / 200,
            a = this.getOffset(-a, a),
            h = this.getOffset(-h, h);
        this.sketch.noFill(), this.sketch.beginShape(), this.sketch.vertex(t + this.getOffset(-n, n), e + this.getOffset(-n, n)), this.sketch.curveVertex(t + this.getOffset(-n, n), e + this.getOffset(-n, n)), this.sketch.curveVertex(a + t + (s - t) * r + this.getOffset(-n, n), h + e + (i - e) * r + this.getOffset(-n, n)), this.sketch.curveVertex(a + t + 2 * (s - t) * r + this.getOffset(-n, n), h + e + 2 * (i - e) * r + this.getOffset(-n, n)), this.sketch.curveVertex(s + this.getOffset(-n, n), i + this.getOffset(-n, n)), this.sketch.vertex(s + this.getOffset(-n, n), i + this.getOffset(-n, n)), this.sketch.endShape(), this.sketch.beginShape(), this.sketch.vertex(t + this.getOffset(-f, f), e + this.getOffset(-f, f)), this.sketch.curveVertex(t + this.getOffset(-f, f), e + this.getOffset(-f, f)), this.sketch.curveVertex(a + t + (s - t) * r + this.getOffset(-f, f), h + e + (i - e) * r + this.getOffset(-f, f)), this.sketch.curveVertex(a + t + 2 * (s - t) * r + this.getOffset(-f, f), h + e + 2 * (i - e) * r + this.getOffset(-f, f)), this.sketch.curveVertex(s + this.getOffset(-f, f), i + this.getOffset(-f, f)), this.sketch.vertex(s + this.getOffset(-f, f), i + this.getOffset(-f, f)), this.sketch.endShape()
    }, this.scribbleCurve = function (t, e, s, i, h, n, f, r) {
        this.sketch.bezier(t + this.getOffset(-2, 2), e + this.getOffset(-2, 2), h + this.getOffset(-4, 4), n + this.getOffset(-3, 3), f + this.getOffset(-3, 3), r + this.getOffset(-3, 3), s + this.getOffset(-1, 1), i + this.getOffset(-1, 1)), this.sketch.bezier(t + this.getOffset(-2, 2), e + this.getOffset(-2, 2), h + this.getOffset(-3, 3), n + this.getOffset(-3, 3), f + this.getOffset(-3, 3), r + this.getOffset(-4, 4), s + this.getOffset(-2, 2), i + this.getOffset(-2, 2))
    }, this.scribbleRect = function (t, e, s, i) {
        var h = s / 2,
            s = i / 2,
            i = Math.min(t - h, t + h),
            t = Math.max(t - h, t + h),
            h = Math.min(e - s, e + s),
            s = Math.max(e - s, e + s);
        this.scribbleLine(i, h, t, h), this.scribbleLine(t, h, t, s), this.scribbleLine(t, s, i, s), this.scribbleLine(i, s, i, h)
    }, this.scribbleRoundedRect = function (t, e, s, i, h) {
        var n = s / 2,
            f = i / 2;
        0 == h || n < h || f < h ? this.scribbleRect(t, e, s, i) : (i = Math.min(t - n, t + n), t = Math.max(t - n, t + n), n = Math.min(e - f, e + f), f = Math.max(e - f, e + f), this.scribbleLine(i + h, n, t - h, n, 1.5), this.scribbleLine(t, n + h, t, f - h, 1.5), this.scribbleLine(t - h, f, i + h, f, 1.5), this.scribbleLine(i, f - h, i, n + h, 1.5), this.scribbleCurve(i + h, n, i, n + h, i + .1 * h, n + .1 * h, i + .1 * h, n + .1 * h), this.scribbleCurve(t - h, n, t, n + h, t - .1 * h, n + .1 * h, t - .1 * h, n + .1 * h), this.scribbleCurve(i + h, f, i, f - h, i + .1 * h, f - .1 * h, i + .1 * h, f - .1 * h), this.scribbleCurve(t - h, f, t, f - h, t - .1 * h, f - .1 * h, t - .1 * h, f - .1 * h))
    }, this.scribbleEllipse = function (t, e, s, i) {
        s = Math.abs(s / 2), i = Math.abs(i / 2);
        s += this.getOffset(.05 * -s, .05 * s), i += this.getOffset(.05 * -i, .05 * i), this.buildEllipse(t, e, s, i, 1, this.ellipseInc * this.getOffset(.1, this.getOffset(.4, 1))), this.buildEllipse(t, e, s, i, 1.5, 0)
    }, this.scribbleFilling = function (t, e, s, i) {
        if (null != t && null != e && 0 != t.length && 0 != e.length) {
            for (var h = this.sketch.radians(i % 180), n = Math.cos(h), i = Math.sin(h), h = Math.tan(h), f = t[0], r = t[0], a = e[0], g = e[0], c = 1; c < t.length; c++) f = Math.min(f, t[c]), r = Math.max(r, t[c]), a = Math.min(a, e[c]), g = Math.max(g, e[c]);
            for (var l, u = new HachureIterator(a - 1, g + 1, f - 1, r + 1, s, i, n, h); null != (l = u.getNextLine());)
                for (var o, b, O = this.getIntersectingLines(l, t, e), c = 0; c < O.length; c += 2) c < O.length - 1 && (o = O[c], b = O[c + 1], this.scribbleLine(o[0], o[1], b[0], b[1], 2))
        }
    }
}

function HachureIterator(t, e, s, i, h, n, f, r) {
    var a, g, c, l, u, o = n,
        b = r,
        O = t,
        M = e,
        E = s,
        x = i,
        m = h;
    Math.abs(o) < 1e-4 ? a = E + m : .9999 < Math.abs(o) ? a = O + m : (g = (M - O) * Math.abs(b), a = E - Math.abs(g), c = Math.abs(m / f), l = new Segment(E, M, E, O), u = new Segment(x, M, x, O)), this.getNextLine = function () {
        if (Math.abs(o) < 1e-4) {
            if (a < x) {
                var t = [a, O, a, M];
                return a += m, t
            }
        } else if (.9999 < Math.abs(o)) {
            if (a < M) {
                t = [E, a, x, a];
                return a += m, t
            }
        } else {
            var e = a - g / 2,
                s = a + g / 2,
                i = M,
                h = O;
            if (a < x + g) {
                for (; e < E && s < E || x < e && x < s;)
                    if (e = (a += c) - g / 2, s = a + g / 2, x + g < a) return null;
                var n = new Segment(e, i, s, h);
                return n.compare(l) == Relation.INTERSECTS && (e = n.getIntersectionX(), i = n.getIntersectionY()), n.compare(u) == Relation.INTERSECTS && (s = n.getIntersectionX(), h = n.getIntersectionY()), 0 < b && (e = x - (e - E), s = x - (s - E)), a += c, t = [e, i, s, h]
            }
        }
        return null
    }
}

function Segment(t, e, s, i) {
    var n = t,
        f = e,
        r = s,
        a = i,
        g = Number.MAX_VALUE,
        c = Number.MAX_VALUE,
        l = a - f,
        u = n - r,
        o = r * f - n * a,
        h = 0 == l && 0 == u && 0 == o;
    this.compare = function (t) {
        if (this.isUndefined() || t.isUndefined()) return Relation.UNDEFINED;
        var e = Number.MAX_VALUE,
            s = Number.MAX_VALUE,
            i = 0,
            h = 0;
        return 1e-5 < Math.abs(u) && (e = -l / u, i = -o / u), 1e-5 < Math.abs(t.getB()) && (s = -t.getA() / t.getB(), h = -t.getC() / t.getB()), e == Number.MAX_VALUE ? s == Number.MAX_VALUE ? -o / l != -t.getC() / t.getA() ? Relation.SEPARATE : f >= Math.min(t.getPy1(), t.getPy2()) && f <= Math.max(t.getPy1(), t.getPy2()) ? (g = n, c = f, Relation.INTERSECTS) : a >= Math.min(t.getPy1(), t.getPy2()) && a <= Math.max(t.getPy1(), t.getPy2()) ? (g = r, c = a, Relation.INTERSECTS) : Relation.SEPARATE : (f - (c = s * (g = n) + h)) * (c - a) < -1e-5 || (t.getPy1() - c) * (c - t.getPy2()) < -1e-5 || Math.abs(t.getA()) < 1e-5 && (t.getPx1() - g) * (g - t.getPx2()) < -1e-5 ? Relation.SEPARATE : Relation.INTERSECTS : s == Number.MAX_VALUE ? (g = t.getPx1(), c = e * g + i, (t.getPy1() - c) * (c - t.getPy2()) < -1e-5 || (f - c) * (c - a) < -1e-5 || Math.abs(l) < 1e-5 && (n - g) * (g - r) < -1e-5 ? Relation.SEPARATE : Relation.INTERSECTS) : e == s ? i != h ? Relation.SEPARATE : n >= Math.min(t.getPx1(), t.getPx2()) && n <= Math.max(t.getPy1(), t.getPy2()) ? (g = n, c = f, Relation.INTERSECTS) : r >= Math.min(t.getPx1(), t.getPx2()) && r <= Math.max(t.getPx1(), t.getPx2()) ? (g = r, c = a, Relation.INTERSECTS) : Relation.SEPARATE : (c = e * (g = (h - i) / (e - s)) + i, (n - g) * (g - r) < -1e-5 || (t.getPx1() - g) * (g - t.getPx2()) < -1e-5 ? Relation.SEPARATE : Relation.INTERSECTS)
    }, this.getPx1 = function () {
        return n
    }, this.getPy1 = function () {
        return f
    }, this.getPx2 = function () {
        return r
    }, this.getPy2 = function () {
        return a
    }, this.isUndefined = function () {
        return h
    }, this.getA = function () {
        return l
    }, this.getB = function () {
        return u
    }, this.getC = function () {
        return o
    }, this.getIntersectionX = function () {
        return g
    }, this.getIntersectionY = function () {
        return c
    }, this.getLength = function (t, e, s, i) {
        t = s - t, e = i - e;
        return Math.sqrt(t * t + e * e)
    }
}
var Relation = {
    LEFT: 1,
    RIGHT: 2,
    INTERSECTS: 3,
    AHEAD: 4,
    BEHIND: 5,
    SEPARATE: 6,
    UNDEFINED: 7
};
