var De = {
        exports: {}
    },
    Bt = {};
var ns;

function So() {
    if (ns) return Bt;
    ns = 1;
    var t = Symbol.for("react.transitional.element"),
        e = Symbol.for("react.fragment");

    function n(s, i, o) {
        var r = null;
        if (o !== void 0 && (r = "" + o), i.key !== void 0 && (r = "" + i.key), "key" in i) {
            o = {};
            for (var u in i) u !== "key" && (o[u] = i[u])
        } else o = i;
        return i = o.ref, {
            $$typeof: t,
            type: s,
            key: r,
            ref: i !== void 0 ? i : null,
            props: o
        }
    }
    return Bt.Fragment = e, Bt.jsx = n, Bt.jsxs = n, Bt
}
var ss;

function wo() {
    return ss || (ss = 1, De.exports = So()), De.exports
}
var tt = wo(),
    Le = {
        exports: {}
    },
    b = {};
var is;

function Po() {
    if (is) return b;
    is = 1;
    var t = Symbol.for("react.transitional.element"),
        e = Symbol.for("react.portal"),
        n = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        o = Symbol.for("react.consumer"),
        r = Symbol.for("react.context"),
        u = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        a = Symbol.for("react.memo"),
        c = Symbol.for("react.lazy"),
        f = Symbol.for("react.activity"),
        d = Symbol.iterator;

    function p(h) {
        return h === null || typeof h != "object" ? null : (h = d && h[d] || h["@@iterator"], typeof h == "function" ? h : null)
    }
    var m = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        v = Object.assign,
        S = {};

    function g(h, y, M) {
        this.props = h, this.context = y, this.refs = S, this.updater = M || m
    }
    g.prototype.isReactComponent = {}, g.prototype.setState = function(h, y) {
        if (typeof h != "object" && typeof h != "function" && h != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, y, "setState")
    }, g.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate")
    };

    function w() {}
    w.prototype = g.prototype;

    function x(h, y, M) {
        this.props = h, this.context = y, this.refs = S, this.updater = M || m
    }
    var V = x.prototype = new w;
    V.constructor = x, v(V, g.prototype), V.isPureReactComponent = !0;
    var C = Array.isArray;

    function D() {}
    var E = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        A = Object.prototype.hasOwnProperty;

    function I(h, y, M) {
        var R = M.ref;
        return {
            $$typeof: t,
            type: h,
            key: y,
            ref: R !== void 0 ? R : null,
            props: M
        }
    }

    function W(h, y) {
        return I(h.type, y, h.props)
    }

    function Z(h) {
        return typeof h == "object" && h !== null && h.$$typeof === t
    }

    function Pt(h) {
        var y = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + h.replace(/[=:]/g, function(M) {
            return y[M]
        })
    }
    var ie = /\/+/g;

    function At(h, y) {
        return typeof h == "object" && h !== null && h.key != null ? Pt("" + h.key) : y.toString(36)
    }

    function re(h) {
        switch (h.status) {
            case "fulfilled":
                return h.value;
            case "rejected":
                throw h.reason;
            default:
                switch (typeof h.status == "string" ? h.then(D, D) : (h.status = "pending", h.then(function(y) {
                    h.status === "pending" && (h.status = "fulfilled", h.value = y)
                }, function(y) {
                    h.status === "pending" && (h.status = "rejected", h.reason = y)
                })), h.status) {
                    case "fulfilled":
                        return h.value;
                    case "rejected":
                        throw h.reason
                }
        }
        throw h
    }

    function yt(h, y, M, R, L) {
        var O = typeof h;
        (O === "undefined" || O === "boolean") && (h = null);
        var B = !1;
        if (h === null) B = !0;
        else switch (O) {
            case "bigint":
            case "string":
            case "number":
                B = !0;
                break;
            case "object":
                switch (h.$$typeof) {
                    case t:
                    case e:
                        B = !0;
                        break;
                    case c:
                        return B = h._init, yt(B(h._payload), y, M, R, L)
                }
        }
        if (B) return L = L(h), B = R === "" ? "." + At(h, 0) : R, C(L) ? (M = "", B != null && (M = B.replace(ie, "$&/") + "/"), yt(L, y, M, "", function(xo) {
            return xo
        })) : L != null && (Z(L) && (L = W(L, M + (L.key == null || h && h.key === L.key ? "" : ("" + L.key).replace(ie, "$&/") + "/") + B)), y.push(L)), 1;
        B = 0;
        var at = R === "" ? "." : R + ":";
        if (C(h))
            for (var X = 0; X < h.length; X++) R = h[X], O = at + At(R, X), B += yt(R, y, M, O, L);
        else if (X = p(h), typeof X == "function")
            for (h = X.call(h), X = 0; !(R = h.next()).done;) R = R.value, O = at + At(R, X++), B += yt(R, y, M, O, L);
        else if (O === "object") {
            if (typeof h.then == "function") return yt(re(h), y, M, R, L);
            throw y = String(h), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.")
        }
        return B
    }

    function j(h, y, M) {
        if (h == null) return h;
        var R = [],
            L = 0;
        return yt(h, R, "", "", function(O) {
            return y.call(M, O, L++)
        }), R
    }

    function Y(h) {
        if (h._status === -1) {
            var y = h._result;
            y = y(), y.then(function(M) {
                (h._status === 0 || h._status === -1) && (h._status = 1, h._result = M)
            }, function(M) {
                (h._status === 0 || h._status === -1) && (h._status = 2, h._result = M)
            }), h._status === -1 && (h._status = 0, h._result = y)
        }
        if (h._status === 1) return h._result.default;
        throw h._result
    }
    var ot = typeof reportError == "function" ? reportError : function(h) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var y = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
                    error: h
                });
                if (!window.dispatchEvent(y)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", h);
                return
            }
        },
        ft = {
            map: j,
            forEach: function(h, y, M) {
                j(h, function() {
                    y.apply(this, arguments)
                }, M)
            },
            count: function(h) {
                var y = 0;
                return j(h, function() {
                    y++
                }), y
            },
            toArray: function(h) {
                return j(h, function(y) {
                    return y
                }) || []
            },
            only: function(h) {
                if (!Z(h)) throw Error("React.Children.only expected to receive a single React element child.");
                return h
            }
        };
    return b.Activity = f, b.Children = ft, b.Component = g, b.Fragment = n, b.Profiler = i, b.PureComponent = x, b.StrictMode = s, b.Suspense = l, b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, b.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(h) {
            return E.H.useMemoCache(h)
        }
    }, b.cache = function(h) {
        return function() {
            return h.apply(null, arguments)
        }
    }, b.cacheSignal = function() {
        return null
    }, b.cloneElement = function(h, y, M) {
        if (h == null) throw Error("The argument must be a React element, but you passed " + h + ".");
        var R = v({}, h.props),
            L = h.key;
        if (y != null)
            for (O in y.key !== void 0 && (L = "" + y.key), y) !A.call(y, O) || O === "key" || O === "__self" || O === "__source" || O === "ref" && y.ref === void 0 || (R[O] = y[O]);
        var O = arguments.length - 2;
        if (O === 1) R.children = M;
        else if (1 < O) {
            for (var B = Array(O), at = 0; at < O; at++) B[at] = arguments[at + 2];
            R.children = B
        }
        return I(h.type, L, R)
    }, b.createContext = function(h) {
        return h = {
            $$typeof: r,
            _currentValue: h,
            _currentValue2: h,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, h.Provider = h, h.Consumer = {
            $$typeof: o,
            _context: h
        }, h
    }, b.createElement = function(h, y, M) {
        var R, L = {},
            O = null;
        if (y != null)
            for (R in y.key !== void 0 && (O = "" + y.key), y) A.call(y, R) && R !== "key" && R !== "__self" && R !== "__source" && (L[R] = y[R]);
        var B = arguments.length - 2;
        if (B === 1) L.children = M;
        else if (1 < B) {
            for (var at = Array(B), X = 0; X < B; X++) at[X] = arguments[X + 2];
            L.children = at
        }
        if (h && h.defaultProps)
            for (R in B = h.defaultProps, B) L[R] === void 0 && (L[R] = B[R]);
        return I(h, O, L)
    }, b.createRef = function() {
        return {
            current: null
        }
    }, b.forwardRef = function(h) {
        return {
            $$typeof: u,
            render: h
        }
    }, b.isValidElement = Z, b.lazy = function(h) {
        return {
            $$typeof: c,
            _payload: {
                _status: -1,
                _result: h
            },
            _init: Y
        }
    }, b.memo = function(h, y) {
        return {
            $$typeof: a,
            type: h,
            compare: y === void 0 ? null : y
        }
    }, b.startTransition = function(h) {
        var y = E.T,
            M = {};
        E.T = M;
        try {
            var R = h(),
                L = E.S;
            L !== null && L(M, R), typeof R == "object" && R !== null && typeof R.then == "function" && R.then(D, ot)
        } catch (O) {
            ot(O)
        } finally {
            y !== null && M.types !== null && (y.types = M.types), E.T = y
        }
    }, b.unstable_useCacheRefresh = function() {
        return E.H.useCacheRefresh()
    }, b.use = function(h) {
        return E.H.use(h)
    }, b.useActionState = function(h, y, M) {
        return E.H.useActionState(h, y, M)
    }, b.useCallback = function(h, y) {
        return E.H.useCallback(h, y)
    }, b.useContext = function(h) {
        return E.H.useContext(h)
    }, b.useDebugValue = function() {}, b.useDeferredValue = function(h, y) {
        return E.H.useDeferredValue(h, y)
    }, b.useEffect = function(h, y) {
        return E.H.useEffect(h, y)
    }, b.useEffectEvent = function(h) {
        return E.H.useEffectEvent(h)
    }, b.useId = function() {
        return E.H.useId()
    }, b.useImperativeHandle = function(h, y, M) {
        return E.H.useImperativeHandle(h, y, M)
    }, b.useInsertionEffect = function(h, y) {
        return E.H.useInsertionEffect(h, y)
    }, b.useLayoutEffect = function(h, y) {
        return E.H.useLayoutEffect(h, y)
    }, b.useMemo = function(h, y) {
        return E.H.useMemo(h, y)
    }, b.useOptimistic = function(h, y) {
        return E.H.useOptimistic(h, y)
    }, b.useReducer = function(h, y, M) {
        return E.H.useReducer(h, y, M)
    }, b.useRef = function(h) {
        return E.H.useRef(h)
    }, b.useState = function(h) {
        return E.H.useState(h)
    }, b.useSyncExternalStore = function(h, y, M) {
        return E.H.useSyncExternalStore(h, y, M)
    }, b.useTransition = function() {
        return E.H.useTransition()
    }, b.version = "19.2.3", b
}
var rs;

function Di() {
    return rs || (rs = 1, Le.exports = Po()), Le.exports
}
var T = Di(),
    ke = {
        exports: {}
    },
    K = {};
var os;

function Ao() {
    if (os) return K;
    os = 1;
    var t = Di();

    function e(l) {
        var a = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            a += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var c = 2; c < arguments.length; c++) a += "&args[]=" + encodeURIComponent(arguments[c])
        }
        return "Minified React error #" + l + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function n() {}
    var s = {
            d: {
                f: n,
                r: function() {
                    throw Error(e(522))
                },
                D: n,
                C: n,
                L: n,
                m: n,
                X: n,
                S: n,
                M: n
            },
            p: 0,
            findDOMNode: null
        },
        i = Symbol.for("react.portal");

    function o(l, a, c) {
        var f = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: i,
            key: f == null ? null : "" + f,
            children: l,
            containerInfo: a,
            implementation: c
        }
    }
    var r = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function u(l, a) {
        if (l === "font") return "";
        if (typeof a == "string") return a === "use-credentials" ? a : ""
    }
    return K.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, K.createPortal = function(l, a) {
        var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11) throw Error(e(299));
        return o(l, a, null, c)
    }, K.flushSync = function(l) {
        var a = r.T,
            c = s.p;
        try {
            if (r.T = null, s.p = 2, l) return l()
        } finally {
            r.T = a, s.p = c, s.d.f()
        }
    }, K.preconnect = function(l, a) {
        typeof l == "string" && (a ? (a = a.crossOrigin, a = typeof a == "string" ? a === "use-credentials" ? a : "" : void 0) : a = null, s.d.C(l, a))
    }, K.prefetchDNS = function(l) {
        typeof l == "string" && s.d.D(l)
    }, K.preinit = function(l, a) {
        if (typeof l == "string" && a && typeof a.as == "string") {
            var c = a.as,
                f = u(c, a.crossOrigin),
                d = typeof a.integrity == "string" ? a.integrity : void 0,
                p = typeof a.fetchPriority == "string" ? a.fetchPriority : void 0;
            c === "style" ? s.d.S(l, typeof a.precedence == "string" ? a.precedence : void 0, {
                crossOrigin: f,
                integrity: d,
                fetchPriority: p
            }) : c === "script" && s.d.X(l, {
                crossOrigin: f,
                integrity: d,
                fetchPriority: p,
                nonce: typeof a.nonce == "string" ? a.nonce : void 0
            })
        }
    }, K.preinitModule = function(l, a) {
        if (typeof l == "string")
            if (typeof a == "object" && a !== null) {
                if (a.as == null || a.as === "script") {
                    var c = u(a.as, a.crossOrigin);
                    s.d.M(l, {
                        crossOrigin: c,
                        integrity: typeof a.integrity == "string" ? a.integrity : void 0,
                        nonce: typeof a.nonce == "string" ? a.nonce : void 0
                    })
                }
            } else a == null && s.d.M(l)
    }, K.preload = function(l, a) {
        if (typeof l == "string" && typeof a == "object" && a !== null && typeof a.as == "string") {
            var c = a.as,
                f = u(c, a.crossOrigin);
            s.d.L(l, c, {
                crossOrigin: f,
                integrity: typeof a.integrity == "string" ? a.integrity : void 0,
                nonce: typeof a.nonce == "string" ? a.nonce : void 0,
                type: typeof a.type == "string" ? a.type : void 0,
                fetchPriority: typeof a.fetchPriority == "string" ? a.fetchPriority : void 0,
                referrerPolicy: typeof a.referrerPolicy == "string" ? a.referrerPolicy : void 0,
                imageSrcSet: typeof a.imageSrcSet == "string" ? a.imageSrcSet : void 0,
                imageSizes: typeof a.imageSizes == "string" ? a.imageSizes : void 0,
                media: typeof a.media == "string" ? a.media : void 0
            })
        }
    }, K.preloadModule = function(l, a) {
        if (typeof l == "string")
            if (a) {
                var c = u(a.as, a.crossOrigin);
                s.d.m(l, {
                    as: typeof a.as == "string" && a.as !== "script" ? a.as : void 0,
                    crossOrigin: c,
                    integrity: typeof a.integrity == "string" ? a.integrity : void 0
                })
            } else s.d.m(l)
    }, K.requestFormReset = function(l) {
        s.d.r(l)
    }, K.unstable_batchedUpdates = function(l, a) {
        return l(a)
    }, K.useFormState = function(l, a, c) {
        return r.H.useFormState(l, a, c)
    }, K.useFormStatus = function() {
        return r.H.useHostTransitionStatus()
    }, K.version = "19.2.3", K
}
var as;

function Wf() {
    if (as) return ke.exports;
    as = 1;

    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch {}
    }
    return t(), ke.exports = Ao(), ke.exports
}
const wn = T.createContext({});

function mt(t) {
    const e = T.useRef(null);
    return e.current === null && (e.current = t()), e.current
}
const Pn = typeof window < "u",
    Ee = Pn ? T.useLayoutEffect : T.useEffect,
    Ce = T.createContext(null);

function An(t, e) {
    t.indexOf(e) === -1 && t.push(e)
}

function En(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}

function Eo([...t], e, n) {
    const s = e < 0 ? t.length + e : e;
    if (s >= 0 && s < t.length) {
        const i = n < 0 ? t.length + n : n,
            [o] = t.splice(e, 1);
        t.splice(i, 0, o)
    }
    return t
}
const it = (t, e, n) => n > e ? e : n < t ? t : n;
let Xt = () => {};
const ct = {},
    Li = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);

function ki(t) {
    return typeof t == "object" && t !== null
}
const Oi = t => /^0[^.\s]+$/u.test(t);

function Cn(t) {
    let e;
    return () => (e === void 0 && (e = t()), e)
}
const q = t => t,
    Co = (t, e) => n => e(t(n)),
    te = (...t) => t.reduce(Co),
    Dt = (t, e, n) => {
        const s = e - t;
        return s === 0 ? 1 : (n - t) / s
    };
class bn {
    constructor() {
        this.subscriptions = []
    }
    add(e) {
        return An(this.subscriptions, e), () => En(this.subscriptions, e)
    }
    notify(e, n, s) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](e, n, s);
            else
                for (let o = 0; o < i; o++) {
                    const r = this.subscriptions[o];
                    r && r(e, n, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const lt = t => t * 1e3,
    Q = t => t / 1e3;

function Rn(t, e) {
    return e ? t * (1e3 / e) : 0
}
const Ii = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    bo = 1e-7,
    Ro = 12;

function Vo(t, e, n, s, i) {
    let o, r, u = 0;
    do r = e + (n - e) / 2, o = Ii(r, s, i) - t, o > 0 ? n = r : e = r; while (Math.abs(o) > bo && ++u < Ro);
    return r
}

function ee(t, e, n, s) {
    if (t === e && n === s) return q;
    const i = o => Vo(o, 0, 1, t, n);
    return o => o === 0 || o === 1 ? o : Ii(i(o), e, s)
}
const Bi = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
    _i = t => e => 1 - t(1 - e),
    ji = ee(.33, 1.53, .69, .99),
    Vn = _i(ji),
    Fi = Bi(Vn),
    Ni = t => (t *= 2) < 1 ? .5 * Vn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
    Mn = t => 1 - Math.sin(Math.acos(t)),
    Ui = _i(Mn),
    Wi = Bi(Mn),
    Mo = ee(.42, 0, 1, 1),
    Do = ee(0, 0, .58, 1),
    Hi = ee(.42, 0, .58, 1),
    Lo = t => Array.isArray(t) && typeof t[0] != "number",
    $i = t => Array.isArray(t) && typeof t[0] == "number",
    ko = {
        linear: q,
        easeIn: Mo,
        easeInOut: Hi,
        easeOut: Do,
        circIn: Mn,
        circInOut: Wi,
        circOut: Ui,
        backIn: Vn,
        backInOut: Fi,
        backOut: ji,
        anticipate: Ni
    },
    Oo = t => typeof t == "string",
    us = t => {
        if ($i(t)) {
            Xt(t.length === 4);
            const [e, n, s, i] = t;
            return ee(e, n, s, i)
        } else if (Oo(t)) return ko[t];
        return t
    },
    oe = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

function Io(t, e) {
    let n = new Set,
        s = new Set,
        i = !1,
        o = !1;
    const r = new WeakSet;
    let u = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function l(c) {
        r.has(c) && (a.schedule(c), t()), c(u)
    }
    const a = {
        schedule: (c, f = !1, d = !1) => {
            const m = d && i ? n : s;
            return f && r.add(c), m.has(c) || m.add(c), c
        },
        cancel: c => {
            s.delete(c), r.delete(c)
        },
        process: c => {
            if (u = c, i) {
                o = !0;
                return
            }
            i = !0, [n, s] = [s, n], n.forEach(l), n.clear(), i = !1, o && (o = !1, a.process(c))
        }
    };
    return a
}
const Bo = 40;

function Ki(t, e) {
    let n = !1,
        s = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        r = oe.reduce((x, V) => (x[V] = Io(o), x), {}),
        {
            setup: u,
            read: l,
            resolveKeyframes: a,
            preUpdate: c,
            update: f,
            preRender: d,
            render: p,
            postRender: m
        } = r,
        v = () => {
            const x = ct.useManualTiming ? i.timestamp : performance.now();
            n = !1, ct.useManualTiming || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, Bo), 1)), i.timestamp = x, i.isProcessing = !0, u.process(i), l.process(i), a.process(i), c.process(i), f.process(i), d.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && e && (s = !1, t(v))
        },
        S = () => {
            n = !0, s = !0, i.isProcessing || t(v)
        };
    return {
        schedule: oe.reduce((x, V) => {
            const C = r[V];
            return x[V] = (D, E = !1, A = !1) => (n || S(), C.schedule(D, E, A)), x
        }, {}),
        cancel: x => {
            for (let V = 0; V < oe.length; V++) r[oe[V]].cancel(x)
        },
        state: i,
        steps: r
    }
}
const {
    schedule: k,
    cancel: rt,
    state: H,
    steps: Oe
} = Ki(typeof requestAnimationFrame < "u" ? requestAnimationFrame : q, !0);
let he;

function _o() {
    he = void 0
}
const z = {
        now: () => (he === void 0 && z.set(H.isProcessing || ct.useManualTiming ? H.timestamp : performance.now()), he),
        set: t => {
            he = t, queueMicrotask(_o)
        }
    },
    zi = t => e => typeof e == "string" && e.startsWith(t),
    Gi = zi("--"),
    jo = zi("var(--"),
    Dn = t => jo(t) ? Fo.test(t.split("/*")[0].trim()) : !1,
    Fo = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function ls(t) {
    return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--")
}
const kt = {
        test: t => typeof t == "number",
        parse: parseFloat,
        transform: t => t
    },
    qt = { ...kt,
        transform: t => it(0, 1, t)
    },
    ae = { ...kt,
        default: 1
    },
    Wt = t => Math.round(t * 1e5) / 1e5,
    Ln = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function No(t) {
    return t == null
}
const Uo = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    kn = (t, e) => n => !!(typeof n == "string" && Uo.test(n) && n.startsWith(t) || e && !No(n) && Object.prototype.hasOwnProperty.call(n, e)),
    Yi = (t, e, n) => s => {
        if (typeof s != "string") return s;
        const [i, o, r, u] = s.match(Ln);
        return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(r),
            alpha: u !== void 0 ? parseFloat(u) : 1
        }
    },
    Wo = t => it(0, 255, t),
    Ie = { ...kt,
        transform: t => Math.round(Wo(t))
    },
    xt = {
        test: kn("rgb", "red"),
        parse: Yi("red", "green", "blue"),
        transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: s = 1
        }) => "rgba(" + Ie.transform(t) + ", " + Ie.transform(e) + ", " + Ie.transform(n) + ", " + Wt(qt.transform(s)) + ")"
    };

function Ho(t) {
    let e = "",
        n = "",
        s = "",
        i = "";
    return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(s, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Ze = {
        test: kn("#"),
        parse: Ho,
        transform: xt.transform
    },
    ne = t => ({
        test: e => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
        parse: parseFloat,
        transform: e => `${e}${t}`
    }),
    ht = ne("deg"),
    ut = ne("%"),
    P = ne("px"),
    $o = ne("vh"),
    Ko = ne("vw"),
    cs = { ...ut,
        parse: t => ut.parse(t) / 100,
        transform: t => ut.transform(t * 100)
    },
    Et = {
        test: kn("hsl", "hue"),
        parse: Yi("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: s = 1
        }) => "hsla(" + Math.round(t) + ", " + ut.transform(Wt(e)) + ", " + ut.transform(Wt(n)) + ", " + Wt(qt.transform(s)) + ")"
    },
    N = {
        test: t => xt.test(t) || Ze.test(t) || Et.test(t),
        parse: t => xt.test(t) ? xt.parse(t) : Et.test(t) ? Et.parse(t) : Ze.parse(t),
        transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? xt.transform(t) : Et.transform(t),
        getAnimatableNone: t => {
            const e = N.parse(t);
            return e.alpha = 0, N.transform(e)
        }
    },
    zo = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function Go(t) {
    return isNaN(t) && typeof t == "string" && (t.match(Ln) ? .length || 0) + (t.match(zo) ? .length || 0) > 0
}
const Xi = "number",
    qi = "color",
    Yo = "var",
    Xo = "var(",
    fs = "${}",
    qo = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Zt(t) {
    const e = t.toString(),
        n = [],
        s = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let o = 0;
    const u = e.replace(qo, l => (N.test(l) ? (s.color.push(o), i.push(qi), n.push(N.parse(l))) : l.startsWith(Xo) ? (s.var.push(o), i.push(Yo), n.push(l)) : (s.number.push(o), i.push(Xi), n.push(parseFloat(l))), ++o, fs)).split(fs);
    return {
        values: n,
        split: u,
        indexes: s,
        types: i
    }
}

function Zi(t) {
    return Zt(t).values
}

function Ji(t) {
    const {
        split: e,
        types: n
    } = Zt(t), s = e.length;
    return i => {
        let o = "";
        for (let r = 0; r < s; r++)
            if (o += e[r], i[r] !== void 0) {
                const u = n[r];
                u === Xi ? o += Wt(i[r]) : u === qi ? o += N.transform(i[r]) : o += i[r]
            }
        return o
    }
}
const Zo = t => typeof t == "number" ? 0 : N.test(t) ? N.getAnimatableNone(t) : t;

function Jo(t) {
    const e = Zi(t);
    return Ji(t)(e.map(Zo))
}
const pt = {
    test: Go,
    parse: Zi,
    createTransformer: Ji,
    getAnimatableNone: Jo
};

function Be(t, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}

function Qo({
    hue: t,
    saturation: e,
    lightness: n,
    alpha: s
}) {
    t /= 360, e /= 100, n /= 100;
    let i = 0,
        o = 0,
        r = 0;
    if (!e) i = o = r = n;
    else {
        const u = n < .5 ? n * (1 + e) : n + e - n * e,
            l = 2 * n - u;
        i = Be(l, u, t + 1 / 3), o = Be(l, u, t), r = Be(l, u, t - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(r * 255),
        alpha: s
    }
}

function Te(t, e) {
    return n => n > 0 ? e : t
}
const _ = (t, e, n) => t + (e - t) * n,
    _e = (t, e, n) => {
        const s = t * t,
            i = n * (e * e - s) + s;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    ta = [Ze, xt, Et],
    ea = t => ta.find(e => e.test(t));

function hs(t) {
    const e = ea(t);
    if (!e) return !1;
    let n = e.parse(t);
    return e === Et && (n = Qo(n)), n
}
const ds = (t, e) => {
        const n = hs(t),
            s = hs(e);
        if (!n || !s) return Te(t, e);
        const i = { ...n
        };
        return o => (i.red = _e(n.red, s.red, o), i.green = _e(n.green, s.green, o), i.blue = _e(n.blue, s.blue, o), i.alpha = _(n.alpha, s.alpha, o), xt.transform(i))
    },
    Je = new Set(["none", "hidden"]);

function na(t, e) {
    return Je.has(t) ? n => n <= 0 ? t : e : n => n >= 1 ? e : t
}

function sa(t, e) {
    return n => _(t, e, n)
}

function On(t) {
    return typeof t == "number" ? sa : typeof t == "string" ? Dn(t) ? Te : N.test(t) ? ds : oa : Array.isArray(t) ? Qi : typeof t == "object" ? N.test(t) ? ds : ia : Te
}

function Qi(t, e) {
    const n = [...t],
        s = n.length,
        i = t.map((o, r) => On(o)(o, e[r]));
    return o => {
        for (let r = 0; r < s; r++) n[r] = i[r](o);
        return n
    }
}

function ia(t, e) {
    const n = { ...t,
            ...e
        },
        s = {};
    for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = On(t[i])(t[i], e[i]));
    return i => {
        for (const o in s) n[o] = s[o](i);
        return n
    }
}

function ra(t, e) {
    const n = [],
        s = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < e.values.length; i++) {
        const o = e.types[i],
            r = t.indexes[o][s[o]],
            u = t.values[r] ? ? 0;
        n[i] = u, s[o]++
    }
    return n
}
const oa = (t, e) => {
    const n = pt.createTransformer(e),
        s = Zt(t),
        i = Zt(e);
    return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? Je.has(t) && !i.values.length || Je.has(e) && !s.values.length ? na(t, e) : te(Qi(ra(s, i), i.values), n) : Te(t, e)
};

function tr(t, e, n) {
    return typeof t == "number" && typeof e == "number" && typeof n == "number" ? _(t, e, n) : On(t)(t, e)
}
const aa = t => {
        const e = ({
            timestamp: n
        }) => t(n);
        return {
            start: (n = !0) => k.update(e, n),
            stop: () => rt(e),
            now: () => H.isProcessing ? H.timestamp : z.now()
        }
    },
    er = (t, e, n = 10) => {
        let s = "";
        const i = Math.max(Math.round(e / n), 2);
        for (let o = 0; o < i; o++) s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${s.substring(0,s.length-2)})`
    },
    xe = 2e4;

function In(t) {
    let e = 0;
    const n = 50;
    let s = t.next(e);
    for (; !s.done && e < xe;) e += n, s = t.next(e);
    return e >= xe ? 1 / 0 : e
}

function ua(t, e = 100, n) {
    const s = n({ ...t,
            keyframes: [0, e]
        }),
        i = Math.min(In(s), xe);
    return {
        type: "keyframes",
        ease: o => s.next(i * o).value / e,
        duration: Q(i)
    }
}
const la = 5;

function nr(t, e, n) {
    const s = Math.max(e - la, 0);
    return Rn(n - t(s), e - s)
}
const F = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    je = .001;

function ca({
    duration: t = F.duration,
    bounce: e = F.bounce,
    velocity: n = F.velocity,
    mass: s = F.mass
}) {
    let i, o, r = 1 - e;
    r = it(F.minDamping, F.maxDamping, r), t = it(F.minDuration, F.maxDuration, Q(t)), r < 1 ? (i = a => {
        const c = a * r,
            f = c * t,
            d = c - n,
            p = Qe(a, r),
            m = Math.exp(-f);
        return je - d / p * m
    }, o = a => {
        const f = a * r * t,
            d = f * n + n,
            p = Math.pow(r, 2) * Math.pow(a, 2) * t,
            m = Math.exp(-f),
            v = Qe(Math.pow(a, 2), r);
        return (-i(a) + je > 0 ? -1 : 1) * ((d - p) * m) / v
    }) : (i = a => {
        const c = Math.exp(-a * t),
            f = (a - n) * t + 1;
        return -je + c * f
    }, o = a => {
        const c = Math.exp(-a * t),
            f = (n - a) * (t * t);
        return c * f
    });
    const u = 5 / t,
        l = ha(i, o, u);
    if (t = lt(t), isNaN(l)) return {
        stiffness: F.stiffness,
        damping: F.damping,
        duration: t
    }; {
        const a = Math.pow(l, 2) * s;
        return {
            stiffness: a,
            damping: r * 2 * Math.sqrt(s * a),
            duration: t
        }
    }
}
const fa = 12;

function ha(t, e, n) {
    let s = n;
    for (let i = 1; i < fa; i++) s = s - t(s) / e(s);
    return s
}

function Qe(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const da = ["duration", "bounce"],
    pa = ["stiffness", "damping", "mass"];

function ps(t, e) {
    return e.some(n => t[n] !== void 0)
}

function ma(t) {
    let e = {
        velocity: F.velocity,
        stiffness: F.stiffness,
        damping: F.damping,
        mass: F.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!ps(t, pa) && ps(t, da))
        if (t.visualDuration) {
            const n = t.visualDuration,
                s = 2 * Math.PI / (n * 1.2),
                i = s * s,
                o = 2 * it(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
            e = { ...e,
                mass: F.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = ca(t);
            e = { ...e,
                ...n,
                mass: F.mass
            }, e.isResolvedFromDuration = !0
        }
    return e
}

function Se(t = F.visualDuration, e = F.bounce) {
    const n = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: e
    } : t;
    let {
        restSpeed: s,
        restDelta: i
    } = n;
    const o = n.keyframes[0],
        r = n.keyframes[n.keyframes.length - 1],
        u = {
            done: !1,
            value: o
        },
        {
            stiffness: l,
            damping: a,
            mass: c,
            duration: f,
            velocity: d,
            isResolvedFromDuration: p
        } = ma({ ...n,
            velocity: -Q(n.velocity || 0)
        }),
        m = d || 0,
        v = a / (2 * Math.sqrt(l * c)),
        S = r - o,
        g = Q(Math.sqrt(l / c)),
        w = Math.abs(S) < 5;
    s || (s = w ? F.restSpeed.granular : F.restSpeed.default), i || (i = w ? F.restDelta.granular : F.restDelta.default);
    let x;
    if (v < 1) {
        const C = Qe(g, v);
        x = D => {
            const E = Math.exp(-v * g * D);
            return r - E * ((m + v * g * S) / C * Math.sin(C * D) + S * Math.cos(C * D))
        }
    } else if (v === 1) x = C => r - Math.exp(-g * C) * (S + (m + g * S) * C);
    else {
        const C = g * Math.sqrt(v * v - 1);
        x = D => {
            const E = Math.exp(-v * g * D),
                A = Math.min(C * D, 300);
            return r - E * ((m + v * g * S) * Math.sinh(A) + C * S * Math.cosh(A)) / C
        }
    }
    const V = {
        calculatedDuration: p && f || null,
        next: C => {
            const D = x(C);
            if (p) u.done = C >= f;
            else {
                let E = C === 0 ? m : 0;
                v < 1 && (E = C === 0 ? lt(m) : nr(x, C, D));
                const A = Math.abs(E) <= s,
                    I = Math.abs(r - D) <= i;
                u.done = A && I
            }
            return u.value = u.done ? r : D, u
        },
        toString: () => {
            const C = Math.min(In(V), xe),
                D = er(E => V.next(C * E).value, C, 30);
            return C + "ms " + D
        },
        toTransition: () => {}
    };
    return V
}
Se.applyToOptions = t => {
    const e = ua(t, 100, Se);
    return t.ease = e.ease, t.duration = lt(e.duration), t.type = "keyframes", t
};

function tn({
    keyframes: t,
    velocity: e = 0,
    power: n = .8,
    timeConstant: s = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: r,
    min: u,
    max: l,
    restDelta: a = .5,
    restSpeed: c
}) {
    const f = t[0],
        d = {
            done: !1,
            value: f
        },
        p = A => u !== void 0 && A < u || l !== void 0 && A > l,
        m = A => u === void 0 ? l : l === void 0 || Math.abs(u - A) < Math.abs(l - A) ? u : l;
    let v = n * e;
    const S = f + v,
        g = r === void 0 ? S : r(S);
    g !== S && (v = g - f);
    const w = A => -v * Math.exp(-A / s),
        x = A => g + w(A),
        V = A => {
            const I = w(A),
                W = x(A);
            d.done = Math.abs(I) <= a, d.value = d.done ? g : W
        };
    let C, D;
    const E = A => {
        p(d.value) && (C = A, D = Se({
            keyframes: [d.value, m(d.value)],
            velocity: nr(x, A, d.value),
            damping: i,
            stiffness: o,
            restDelta: a,
            restSpeed: c
        }))
    };
    return E(0), {
        calculatedDuration: null,
        next: A => {
            let I = !1;
            return !D && C === void 0 && (I = !0, V(A), E(A)), C !== void 0 && A >= C ? D.next(A - C) : (!I && V(A), d)
        }
    }
}

function ga(t, e, n) {
    const s = [],
        i = n || ct.mix || tr,
        o = t.length - 1;
    for (let r = 0; r < o; r++) {
        let u = i(t[r], t[r + 1]);
        if (e) {
            const l = Array.isArray(e) ? e[r] || q : e;
            u = te(l, u)
        }
        s.push(u)
    }
    return s
}

function Bn(t, e, {
    clamp: n = !0,
    ease: s,
    mixer: i
} = {}) {
    const o = t.length;
    if (Xt(o === e.length), o === 1) return () => e[0];
    if (o === 2 && e[0] === e[1]) return () => e[1];
    const r = t[0] === t[1];
    t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
    const u = ga(e, s, i),
        l = u.length,
        a = c => {
            if (r && c < t[0]) return e[0];
            let f = 0;
            if (l > 1)
                for (; f < t.length - 2 && !(c < t[f + 1]); f++);
            const d = Dt(t[f], t[f + 1], c);
            return u[f](d)
        };
    return n ? c => a(it(t[0], t[o - 1], c)) : a
}

function ya(t, e) {
    const n = t[t.length - 1];
    for (let s = 1; s <= e; s++) {
        const i = Dt(0, e, s);
        t.push(_(n, 1, i))
    }
}

function sr(t) {
    const e = [0];
    return ya(e, t.length - 1), e
}

function va(t, e) {
    return t.map(n => n * e)
}

function Ta(t, e) {
    return t.map(() => e || Hi).splice(0, t.length - 1)
}

function Ht({
    duration: t = 300,
    keyframes: e,
    times: n,
    ease: s = "easeInOut"
}) {
    const i = Lo(s) ? s.map(us) : us(s),
        o = {
            done: !1,
            value: e[0]
        },
        r = va(n && n.length === e.length ? n : sr(e), t),
        u = Bn(r, e, {
            ease: Array.isArray(i) ? i : Ta(e, i)
        });
    return {
        calculatedDuration: t,
        next: l => (o.value = u(l), o.done = l >= t, o)
    }
}
const xa = t => t !== null;

function _n(t, {
    repeat: e,
    repeatType: n = "loop"
}, s, i = 1) {
    const o = t.filter(xa),
        u = i < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
    return !u || s === void 0 ? o[u] : s
}
const Sa = {
    decay: tn,
    inertia: tn,
    tween: Ht,
    keyframes: Ht,
    spring: Se
};

function ir(t) {
    typeof t.type == "string" && (t.type = Sa[t.type])
}
class jn {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(e => {
            this.resolve = e
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(e, n) {
        return this.finished.then(e, n)
    }
}
const wa = t => t / 100;
class Fn extends jn {
    constructor(e) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            const {
                motionValue: n
            } = this.options;
            n && n.updatedAt !== z.now() && this.tick(z.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop ? .())
        }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: e
        } = this;
        ir(e);
        const {
            type: n = Ht,
            repeat: s = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: r = 0
        } = e;
        let {
            keyframes: u
        } = e;
        const l = n || Ht;
        l !== Ht && typeof u[0] != "number" && (this.mixKeyframes = te(wa, tr(u[0], u[1])), u = [0, 100]);
        const a = l({ ...e,
            keyframes: u
        });
        o === "mirror" && (this.mirroredGenerator = l({ ...e,
            keyframes: [...u].reverse(),
            velocity: -r
        })), a.calculatedDuration === null && (a.calculatedDuration = In(a));
        const {
            calculatedDuration: c
        } = a;
        this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (s + 1) - i, this.generator = a
    }
    updateTime(e) {
        const n = Math.round(e - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(e, n = !1) {
        const {
            generator: s,
            totalDuration: i,
            mixKeyframes: o,
            mirroredGenerator: r,
            resolvedDuration: u,
            calculatedDuration: l
        } = this;
        if (this.startTime === null) return s.next(0);
        const {
            delay: a = 0,
            keyframes: c,
            repeat: f,
            repeatType: d,
            repeatDelay: p,
            type: m,
            onUpdate: v,
            finalKeyframe: S
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
        const g = this.currentTime - a * (this.playbackSpeed >= 0 ? 1 : -1),
            w = this.playbackSpeed >= 0 ? g < 0 : g > i;
        this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let x = this.currentTime,
            V = s;
        if (f) {
            const A = Math.min(this.currentTime, i) / u;
            let I = Math.floor(A),
                W = A % 1;
            !W && A >= 1 && (W = 1), W === 1 && I--, I = Math.min(I, f + 1), !!(I % 2) && (d === "reverse" ? (W = 1 - W, p && (W -= p / u)) : d === "mirror" && (V = r)), x = it(0, 1, W) * u
        }
        const C = w ? {
            done: !1,
            value: c[0]
        } : V.next(x);
        o && (C.value = o(C.value));
        let {
            done: D
        } = C;
        !w && l !== null && (D = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
        return E && m !== tn && (C.value = _n(c, this.options, S, this.speed)), v && v(C.value), E && this.finish(), C
    }
    then(e, n) {
        return this.finished.then(e, n)
    }
    get duration() {
        return Q(this.calculatedDuration)
    }
    get iterationDuration() {
        const {
            delay: e = 0
        } = this.options || {};
        return this.duration + Q(e)
    }
    get time() {
        return Q(this.currentTime)
    }
    set time(e) {
        e = lt(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? .start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(e) {
        this.updateTime(z.now());
        const n = this.playbackSpeed !== e;
        this.playbackSpeed = e, n && (this.time = Q(this.currentTime))
    }
    play() {
        if (this.isStopped) return;
        const {
            driver: e = aa,
            startTime: n
        } = this.options;
        this.driver || (this.driver = e(i => this.tick(i))), this.options.onPlay ? .();
        const s = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ? ? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(z.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
    }
    cancel() {
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(e) {
        return this.startTime = 0, this.tick(e, !0)
    }
    attachTimeline(e) {
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), e.observe(this)
    }
}

function Pa(t) {
    for (let e = 1; e < t.length; e++) t[e] ? ? (t[e] = t[e - 1])
}
const St = t => t * 180 / Math.PI,
    en = t => {
        const e = St(Math.atan2(t[1], t[0]));
        return nn(e)
    },
    Aa = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
        rotate: en,
        rotateZ: en,
        skewX: t => St(Math.atan(t[1])),
        skewY: t => St(Math.atan(t[2])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
    },
    nn = t => (t = t % 360, t < 0 && (t += 360), t),
    ms = en,
    gs = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
    ys = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
    Ea = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: gs,
        scaleY: ys,
        scale: t => (gs(t) + ys(t)) / 2,
        rotateX: t => nn(St(Math.atan2(t[6], t[5]))),
        rotateY: t => nn(St(Math.atan2(-t[2], t[0]))),
        rotateZ: ms,
        rotate: ms,
        skewX: t => St(Math.atan(t[4])),
        skewY: t => St(Math.atan(t[1])),
        skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
    };

function sn(t) {
    return t.includes("scale") ? 1 : 0
}

function rn(t, e) {
    if (!t || t === "none") return sn(e);
    const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let s, i;
    if (n) s = Ea, i = n;
    else {
        const u = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        s = Aa, i = u
    }
    if (!i) return sn(e);
    const o = s[e],
        r = i[1].split(",").map(ba);
    return typeof o == "function" ? o(r) : r[o]
}
const Ca = (t, e) => {
    const {
        transform: n = "none"
    } = getComputedStyle(t);
    return rn(n, e)
};

function ba(t) {
    return parseFloat(t.trim())
}
const Ot = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    It = new Set(Ot),
    vs = t => t === kt || t === P,
    Ra = new Set(["x", "y", "z"]),
    Va = Ot.filter(t => !Ra.has(t));

function Ma(t) {
    const e = [];
    return Va.forEach(n => {
        const s = t.getValue(n);
        s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0))
    }), e
}
const dt = {
    width: ({
        x: t
    }, {
        paddingLeft: e = "0",
        paddingRight: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({
        y: t
    }, {
        paddingTop: e = "0",
        paddingBottom: n = "0"
    }) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {
        top: e
    }) => parseFloat(e),
    left: (t, {
        left: e
    }) => parseFloat(e),
    bottom: ({
        y: t
    }, {
        top: e
    }) => parseFloat(e) + (t.max - t.min),
    right: ({
        x: t
    }, {
        left: e
    }) => parseFloat(e) + (t.max - t.min),
    x: (t, {
        transform: e
    }) => rn(e, "x"),
    y: (t, {
        transform: e
    }) => rn(e, "y")
};
dt.translateX = dt.x;
dt.translateY = dt.y;
const wt = new Set;
let on = !1,
    an = !1,
    un = !1;

function rr() {
    if (an) {
        const t = Array.from(wt).filter(s => s.needsMeasurement),
            e = new Set(t.map(s => s.element)),
            n = new Map;
        e.forEach(s => {
            const i = Ma(s);
            i.length && (n.set(s, i), s.render())
        }), t.forEach(s => s.measureInitialState()), e.forEach(s => {
            s.render();
            const i = n.get(s);
            i && i.forEach(([o, r]) => {
                s.getValue(o) ? .set(r)
            })
        }), t.forEach(s => s.measureEndState()), t.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        })
    }
    an = !1, on = !1, wt.forEach(t => t.complete(un)), wt.clear()
}

function or() {
    wt.forEach(t => {
        t.readKeyframes(), t.needsMeasurement && (an = !0)
    })
}

function Da() {
    un = !0, or(), rr(), un = !1
}
class Nn {
    constructor(e, n, s, i, o, r = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (wt.add(this), on || (on = !0, k.read(or), k.resolveKeyframes(rr))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n,
            element: s,
            motionValue: i
        } = this;
        if (e[0] === null) {
            const o = i ? .get(),
                r = e[e.length - 1];
            if (o !== void 0) e[0] = o;
            else if (s && n) {
                const u = s.readValue(n, r);
                u != null && (e[0] = u)
            }
            e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0])
        }
        Pa(e)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(e = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), wt.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (wt.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const La = t => t.startsWith("--");

function ka(t, e, n) {
    La(e) ? t.style.setProperty(e, n) : t.style[e] = n
}
const ar = Cn(() => window.ScrollTimeline !== void 0),
    Oa = {};

function Ia(t, e) {
    const n = Cn(t);
    return () => Oa[e] ? ? n()
}
const ur = Ia(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    Ft = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`,
    Ts = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Ft([0, .65, .55, 1]),
        circOut: Ft([.55, 0, 1, .45]),
        backIn: Ft([.31, .01, .66, -.59]),
        backOut: Ft([.33, 1.53, .69, .99])
    };

function lr(t, e) {
    if (t) return typeof t == "function" ? ur() ? er(t, e) : "ease-out" : $i(t) ? Ft(t) : Array.isArray(t) ? t.map(n => lr(n, e) || Ts.easeOut) : Ts[t]
}

function Ba(t, e, n, {
    delay: s = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: r = "loop",
    ease: u = "easeOut",
    times: l
} = {}, a = void 0) {
    const c = {
        [e]: n
    };
    l && (c.offset = l);
    const f = lr(u, i);
    Array.isArray(f) && (c.easing = f);
    const d = {
        delay: s,
        duration: i,
        easing: Array.isArray(f) ? "linear" : f,
        fill: "both",
        iterations: o + 1,
        direction: r === "reverse" ? "alternate" : "normal"
    };
    return a && (d.pseudoElement = a), t.animate(c, d)
}

function cr(t) {
    return typeof t == "function" && "applyToOptions" in t
}

function _a({
    type: t,
    ...e
}) {
    return cr(t) && ur() ? t.applyToOptions(e) : (e.duration ? ? (e.duration = 300), e.ease ? ? (e.ease = "easeOut"), e)
}
class ja extends jn {
    constructor(e) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
        const {
            element: n,
            name: s,
            keyframes: i,
            pseudoElement: o,
            allowFlatten: r = !1,
            finalKeyframe: u,
            onComplete: l
        } = e;
        this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, Xt(typeof e.type != "string");
        const a = _a(e);
        this.animation = Ba(n, s, i, a, o), a.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !o) {
                const c = _n(i, this.options, u, this.speed);
                this.updateMotionValue ? this.updateMotionValue(c) : ka(n, s, c), this.animation.cancel()
            }
            l ? .(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish ? .()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: e
        } = this;
        e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        this.isPseudoElement || this.animation.commitStyles ? .()
    }
    get duration() {
        const e = this.animation.effect ? .getComputedTiming ? .().duration || 0;
        return Q(Number(e))
    }
    get iterationDuration() {
        const {
            delay: e = 0
        } = this.options || {};
        return this.duration + Q(e)
    }
    get time() {
        return Q(Number(this.animation.currentTime) || 0)
    }
    set time(e) {
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = lt(e)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(e) {
        e < 0 && (this.finishedTime = null), this.animation.playbackRate = e
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ? ? Number(this.animation.startTime)
    }
    set startTime(e) {
        this.manualStartTime = this.animation.startTime = e
    }
    attachTimeline({
        timeline: e,
        observe: n
    }) {
        return this.allowFlatten && this.animation.effect ? .updateTiming({
            easing: "linear"
        }), this.animation.onfinish = null, e && ar() ? (this.animation.timeline = e, q) : n(this)
    }
}
const fr = {
    anticipate: Ni,
    backInOut: Fi,
    circInOut: Wi
};

function Fa(t) {
    return t in fr
}

function Na(t) {
    typeof t.ease == "string" && Fa(t.ease) && (t.ease = fr[t.ease])
}
const Fe = 10;
class Ua extends ja {
    constructor(e) {
        Na(e), ir(e), super(e), e.startTime !== void 0 && (this.startTime = e.startTime), this.options = e
    }
    updateMotionValue(e) {
        const {
            motionValue: n,
            onUpdate: s,
            onComplete: i,
            element: o,
            ...r
        } = this.options;
        if (!n) return;
        if (e !== void 0) {
            n.set(e);
            return
        }
        const u = new Fn({ ...r,
                autoplay: !1
            }),
            l = Math.max(Fe, z.now() - this.startTime),
            a = it(0, Fe, l - Fe);
        n.setWithVelocity(u.sample(Math.max(0, l - a)).value, u.sample(l).value, a), u.stop()
    }
}
const xs = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (pt.test(t) || t === "0") && !t.startsWith("url("));

function Wa(t) {
    const e = t[0];
    if (t.length === 1) return !0;
    for (let n = 0; n < t.length; n++)
        if (t[n] !== e) return !0
}

function Ha(t, e, n, s) {
    const i = t[0];
    if (i === null) return !1;
    if (e === "display" || e === "visibility") return !0;
    const o = t[t.length - 1],
        r = xs(i, e),
        u = xs(o, e);
    return !r || !u ? !1 : Wa(t) || (n === "spring" || cr(n)) && s
}

function ln(t) {
    t.duration = 0, t.type = "keyframes"
}
const $a = new Set(["opacity", "clipPath", "filter", "transform"]),
    Ka = Cn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function za(t) {
    const {
        motionValue: e,
        name: n,
        repeatDelay: s,
        repeatType: i,
        damping: o,
        type: r
    } = t;
    if (!(e ? .owner ? .current instanceof HTMLElement)) return !1;
    const {
        onUpdate: l,
        transformTemplate: a
    } = e.owner.getProps();
    return Ka() && n && $a.has(n) && (n !== "transform" || !a) && !l && !s && i !== "mirror" && o !== 0 && r !== "inertia"
}
const Ga = 40;
class Ya extends jn {
    constructor({
        autoplay: e = !0,
        delay: n = 0,
        type: s = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: r = "loop",
        keyframes: u,
        name: l,
        motionValue: a,
        element: c,
        ...f
    }) {
        super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
        }, this.createdAt = z.now();
        const d = {
                autoplay: e,
                delay: n,
                type: s,
                repeat: i,
                repeatDelay: o,
                repeatType: r,
                name: l,
                motionValue: a,
                element: c,
                ...f
            },
            p = c ? .KeyframeResolver || Nn;
        this.keyframeResolver = new p(u, (m, v, S) => this.onKeyframesResolved(m, v, d, !S), l, a, c), this.keyframeResolver ? .scheduleResolve()
    }
    onKeyframesResolved(e, n, s, i) {
        this.keyframeResolver = void 0;
        const {
            name: o,
            type: r,
            velocity: u,
            delay: l,
            isHandoff: a,
            onUpdate: c
        } = s;
        this.resolvedAt = z.now(), Ha(e, o, r, u) || ((ct.instantAnimations || !l) && c ? .(_n(e, s, n)), e[0] = e[e.length - 1], ln(s), s.repeat = 0);
        const d = {
                startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Ga ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: n,
                ...s,
                keyframes: e
            },
            p = !a && za(d) ? new Ua({ ...d,
                element: d.motionValue.owner.current
            }) : new Fn(d);
        p.finished.then(() => this.notifyFinished()).catch(q), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(e, n) {
        return this.finished.finally(e).then(() => {})
    }
    get animation() {
        return this._animation || (this.keyframeResolver ? .resume(), Da()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(e) {
        this.animation.time = e
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(e) {
        this.animation.speed = e
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(e) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
    }
}
const Xa = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function qa(t) {
    const e = Xa.exec(t);
    if (!e) return [, ];
    const [, n, s, i] = e;
    return [`--${n??s}`, i]
}

function hr(t, e, n = 1) {
    const [s, i] = qa(t);
    if (!s) return;
    const o = window.getComputedStyle(e).getPropertyValue(s);
    if (o) {
        const r = o.trim();
        return Li(r) ? parseFloat(r) : r
    }
    return Dn(i) ? hr(i, e, n + 1) : i
}

function Un(t, e) {
    return t ? .[e] ? ? t ? .default ? ? t
}
const dr = new Set(["width", "height", "top", "left", "right", "bottom", ...Ot]),
    Za = {
        test: t => t === "auto",
        parse: t => t
    },
    pr = t => e => e.test(t),
    mr = [kt, P, ut, ht, Ko, $o, Za],
    Ss = t => mr.find(pr(t));

function Ja(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Oi(t) : !0
}
const Qa = new Set(["brightness", "contrast", "saturate", "opacity"]);

function tu(t) {
    const [e, n] = t.slice(0, -1).split("(");
    if (e === "drop-shadow") return t;
    const [s] = n.match(Ln) || [];
    if (!s) return t;
    const i = n.replace(s, "");
    let o = Qa.has(e) ? 1 : 0;
    return s !== n && (o *= 100), e + "(" + o + i + ")"
}
const eu = /\b([a-z-]*)\(.*?\)/gu,
    cn = { ...pt,
        getAnimatableNone: t => {
            const e = t.match(eu);
            return e ? e.map(tu).join(" ") : t
        }
    },
    ws = { ...kt,
        transform: Math.round
    },
    nu = {
        rotate: ht,
        rotateX: ht,
        rotateY: ht,
        rotateZ: ht,
        scale: ae,
        scaleX: ae,
        scaleY: ae,
        scaleZ: ae,
        skew: ht,
        skewX: ht,
        skewY: ht,
        distance: P,
        translateX: P,
        translateY: P,
        translateZ: P,
        x: P,
        y: P,
        z: P,
        perspective: P,
        transformPerspective: P,
        opacity: qt,
        originX: cs,
        originY: cs,
        originZ: P
    },
    Wn = {
        borderWidth: P,
        borderTopWidth: P,
        borderRightWidth: P,
        borderBottomWidth: P,
        borderLeftWidth: P,
        borderRadius: P,
        radius: P,
        borderTopLeftRadius: P,
        borderTopRightRadius: P,
        borderBottomRightRadius: P,
        borderBottomLeftRadius: P,
        width: P,
        maxWidth: P,
        height: P,
        maxHeight: P,
        top: P,
        right: P,
        bottom: P,
        left: P,
        inset: P,
        insetBlock: P,
        insetBlockStart: P,
        insetBlockEnd: P,
        insetInline: P,
        insetInlineStart: P,
        insetInlineEnd: P,
        padding: P,
        paddingTop: P,
        paddingRight: P,
        paddingBottom: P,
        paddingLeft: P,
        paddingBlock: P,
        paddingBlockStart: P,
        paddingBlockEnd: P,
        paddingInline: P,
        paddingInlineStart: P,
        paddingInlineEnd: P,
        margin: P,
        marginTop: P,
        marginRight: P,
        marginBottom: P,
        marginLeft: P,
        marginBlock: P,
        marginBlockStart: P,
        marginBlockEnd: P,
        marginInline: P,
        marginInlineStart: P,
        marginInlineEnd: P,
        backgroundPositionX: P,
        backgroundPositionY: P,
        ...nu,
        zIndex: ws,
        fillOpacity: qt,
        strokeOpacity: qt,
        numOctaves: ws
    },
    su = { ...Wn,
        color: N,
        backgroundColor: N,
        outlineColor: N,
        fill: N,
        stroke: N,
        borderColor: N,
        borderTopColor: N,
        borderRightColor: N,
        borderBottomColor: N,
        borderLeftColor: N,
        filter: cn,
        WebkitFilter: cn
    },
    gr = t => su[t];

function yr(t, e) {
    let n = gr(t);
    return n !== cn && (n = pt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const iu = new Set(["auto", "none", "0"]);

function ru(t, e, n) {
    let s = 0,
        i;
    for (; s < t.length && !i;) {
        const o = t[s];
        typeof o == "string" && !iu.has(o) && Zt(o).values.length && (i = t[s]), s++
    }
    if (i && n)
        for (const o of e) t[o] = yr(n, i)
}
class ou extends Nn {
    constructor(e, n, s, i, o) {
        super(e, n, s, i, o, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: e,
            element: n,
            name: s
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let c = 0; c < e.length; c++) {
            let f = e[c];
            if (typeof f == "string" && (f = f.trim(), Dn(f))) {
                const d = hr(f, n.current);
                d !== void 0 && (e[c] = d), c === e.length - 1 && (this.finalKeyframe = f)
            }
        }
        if (this.resolveNoneKeyframes(), !dr.has(s) || e.length !== 2) return;
        const [i, o] = e, r = Ss(i), u = Ss(o), l = ls(i), a = ls(o);
        if (l !== a && dt[s]) {
            this.needsMeasurement = !0;
            return
        }
        if (r !== u)
            if (vs(r) && vs(u))
                for (let c = 0; c < e.length; c++) {
                    const f = e[c];
                    typeof f == "string" && (e[c] = parseFloat(f))
                } else dt[s] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: e,
            name: n
        } = this, s = [];
        for (let i = 0; i < e.length; i++)(e[i] === null || Ja(e[i])) && s.push(i);
        s.length && ru(e, s, n)
    }
    measureInitialState() {
        const {
            element: e,
            unresolvedKeyframes: n,
            name: s
        } = this;
        if (!e || !e.current) return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = dt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && e.getValue(s, i).jump(i, !1)
    }
    measureEndState() {
        const {
            element: e,
            name: n,
            unresolvedKeyframes: s
        } = this;
        if (!e || !e.current) return;
        const i = e.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const o = s.length - 1,
            r = s[o];
        s[o] = dt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.removedTransforms ? .length && this.removedTransforms.forEach(([u, l]) => {
            e.getValue(u).set(l)
        }), this.resolveNoneKeyframes()
    }
}

function vr(t, e, n) {
    if (t instanceof EventTarget) return [t];
    if (typeof t == "string") {
        const i = document.querySelectorAll(t);
        return i ? Array.from(i) : []
    }
    return Array.from(t)
}
const Tr = (t, e) => e && typeof t == "number" ? e.transform(t) : t;

function Hn(t) {
    return ki(t) && "offsetHeight" in t
}
const Ps = 30,
    au = t => !isNaN(parseFloat(t)),
    $t = {
        current: void 0
    };
class uu {
    constructor(e, n = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = s => {
            const i = z.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                for (const o of this.dependents) o.dirty()
        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner
    }
    setCurrent(e) {
        this.current = e, this.updatedAt = z.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = au(this.current))
    }
    setPrevFrameValue(e = this.current) {
        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
    }
    onChange(e) {
        return this.on("change", e)
    }
    on(e, n) {
        this.events[e] || (this.events[e] = new bn);
        const s = this.events[e].add(n);
        return e === "change" ? () => {
            s(), k.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : s
    }
    clearListeners() {
        for (const e in this.events) this.events[e].clear()
    }
    attach(e, n) {
        this.passiveEffect = e, this.stopPassiveEffect = n
    }
    set(e) {
        this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
    }
    setWithVelocity(e, n, s) {
        this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s
    }
    jump(e, n = !0) {
        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change ? .notify(this.current)
    }
    addDependent(e) {
        this.dependents || (this.dependents = new Set), this.dependents.add(e)
    }
    removeDependent(e) {
        this.dependents && this.dependents.delete(e)
    }
    get() {
        return $t.current && $t.current.push(this), this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const e = z.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Ps) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ps);
        return Rn(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(e) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function st(t, e) {
    return new uu(t, e)
}
const {
    schedule: $n
} = Ki(queueMicrotask, !1), nt = {
    x: !1,
    y: !1
};

function xr() {
    return nt.x || nt.y
}

function lu(t) {
    return t === "x" || t === "y" ? nt[t] ? null : (nt[t] = !0, () => {
        nt[t] = !1
    }) : nt.x || nt.y ? null : (nt.x = nt.y = !0, () => {
        nt.x = nt.y = !1
    })
}

function Sr(t, e) {
    const n = vr(t),
        s = new AbortController,
        i = {
            passive: !0,
            ...e,
            signal: s.signal
        };
    return [n, i, () => s.abort()]
}

function As(t) {
    return !(t.pointerType === "touch" || xr())
}

function cu(t, e, n = {}) {
    const [s, i, o] = Sr(t, n), r = u => {
        if (!As(u)) return;
        const {
            target: l
        } = u, a = e(l, u);
        if (typeof a != "function" || !l) return;
        const c = f => {
            As(f) && (a(f), l.removeEventListener("pointerleave", c))
        };
        l.addEventListener("pointerleave", c, i)
    };
    return s.forEach(u => {
        u.addEventListener("pointerenter", r, i)
    }), o
}
const wr = (t, e) => e ? t === e ? !0 : wr(t, e.parentElement) : !1,
    Kn = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1,
    fu = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function Pr(t) {
    return fu.has(t.tagName) || t.isContentEditable === !0
}
const de = new WeakSet;

function Es(t) {
    return e => {
        e.key === "Enter" && t(e)
    }
}

function Ne(t, e) {
    t.dispatchEvent(new PointerEvent("pointer" + e, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const hu = (t, e) => {
    const n = t.currentTarget;
    if (!n) return;
    const s = Es(() => {
        if (de.has(n)) return;
        Ne(n, "down");
        const i = Es(() => {
                Ne(n, "up")
            }),
            o = () => Ne(n, "cancel");
        n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e)
    });
    n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e)
};

function Cs(t) {
    return Kn(t) && !xr()
}

function du(t, e, n = {}) {
    const [s, i, o] = Sr(t, n), r = u => {
        const l = u.currentTarget;
        if (!Cs(u)) return;
        de.add(l);
        const a = e(l, u),
            c = (p, m) => {
                window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), de.has(l) && de.delete(l), Cs(p) && typeof a == "function" && a(p, {
                    success: m
                })
            },
            f = p => {
                c(p, l === window || l === document || n.useGlobalTarget || wr(l, p.target))
            },
            d = p => {
                c(p, !1)
            };
        window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i)
    };
    return s.forEach(u => {
        (n.useGlobalTarget ? window : u).addEventListener("pointerdown", r, i), Hn(u) && (u.addEventListener("focus", a => hu(a, i)), !Pr(u) && !u.hasAttribute("tabindex") && (u.tabIndex = 0))
    }), o
}

function zn(t) {
    return ki(t) && "ownerSVGElement" in t
}
const pe = new WeakMap;
let me;
const Ar = (t, e, n) => (s, i) => i && i[0] ? i[0][t + "Size"] : zn(s) && "getBBox" in s ? s.getBBox()[e] : s[n],
    pu = Ar("inline", "width", "offsetWidth"),
    mu = Ar("block", "height", "offsetHeight");

function gu({
    target: t,
    borderBoxSize: e
}) {
    pe.get(t) ? .forEach(n => {
        n(t, {
            get width() {
                return pu(t, e)
            },
            get height() {
                return mu(t, e)
            }
        })
    })
}

function yu(t) {
    t.forEach(gu)
}

function vu() {
    typeof ResizeObserver > "u" || (me = new ResizeObserver(yu))
}

function Tu(t, e) {
    me || vu();
    const n = vr(t);
    return n.forEach(s => {
        let i = pe.get(s);
        i || (i = new Set, pe.set(s, i)), i.add(e), me ? .observe(s)
    }), () => {
        n.forEach(s => {
            const i = pe.get(s);
            i ? .delete(e), i ? .size || me ? .unobserve(s)
        })
    }
}
const ge = new Set;
let Ct;

function xu() {
    Ct = () => {
        const t = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        ge.forEach(e => e(t))
    }, window.addEventListener("resize", Ct)
}

function Su(t) {
    return ge.add(t), Ct || xu(), () => {
        ge.delete(t), !ge.size && typeof Ct == "function" && (window.removeEventListener("resize", Ct), Ct = void 0)
    }
}

function wu(t, e) {
    return typeof t == "function" ? Su(t) : Tu(t, e)
}

function Er(t, e) {
    let n;
    const s = () => {
        const {
            currentTime: i
        } = e, r = (i === null ? 0 : i.value) / 100;
        n !== r && t(r), n = r
    };
    return k.preUpdate(s, !0), () => rt(s)
}

function Pu(t) {
    return zn(t) && t.tagName === "svg"
}

function Au(...t) {
    const e = !Array.isArray(t[0]),
        n = e ? 0 : -1,
        s = t[0 + n],
        i = t[1 + n],
        o = t[2 + n],
        r = t[3 + n],
        u = Bn(i, o, r);
    return e ? u(s) : u
}
const $ = t => !!(t && t.getVelocity),
    Eu = [...mr, N, pt],
    Cu = t => Eu.find(pr(t)),
    be = T.createContext({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });

function bs(t, e) {
    if (typeof t == "function") return t(e);
    t != null && (t.current = e)
}

function bu(...t) {
    return e => {
        let n = !1;
        const s = t.map(i => {
            const o = bs(i, e);
            return !n && typeof o == "function" && (n = !0), o
        });
        if (n) return () => {
            for (let i = 0; i < s.length; i++) {
                const o = s[i];
                typeof o == "function" ? o() : bs(t[i], null)
            }
        }
    }
}

function Ru(...t) {
    return T.useCallback(bu(...t), t)
}
class Vu extends T.Component {
    getSnapshotBeforeUpdate(e) {
        const n = this.props.childRef.current;
        if (n && e.isPresent && !this.props.isPresent) {
            const s = n.offsetParent,
                i = Hn(s) && s.offsetWidth || 0,
                o = this.props.sizeRef.current;
            o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function Mu({
    children: t,
    isPresent: e,
    anchorX: n,
    root: s
}) {
    const i = T.useId(),
        o = T.useRef(null),
        r = T.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: u
        } = T.useContext(be),
        l = t.props ? .ref ? ? t ? .ref,
        a = Ru(o, l);
    return T.useInsertionEffect(() => {
        const {
            width: c,
            height: f,
            top: d,
            left: p,
            right: m
        } = r.current;
        if (e || !o.current || !c || !f) return;
        const v = n === "left" ? `left: ${p}` : `right: ${m}`;
        o.current.dataset.motionPopId = i;
        const S = document.createElement("style");
        u && (S.nonce = u);
        const g = s ? ? document.head;
        return g.appendChild(S), S.sheet && S.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${f}px !important;
            ${v}px !important;
            top: ${d}px !important;
          }
        `), () => {
            g.contains(S) && g.removeChild(S)
        }
    }, [e]), tt.jsx(Vu, {
        isPresent: e,
        childRef: o,
        sizeRef: r,
        children: T.cloneElement(t, {
            ref: a
        })
    })
}
const Du = ({
    children: t,
    initial: e,
    isPresent: n,
    onExitComplete: s,
    custom: i,
    presenceAffectsLayout: o,
    mode: r,
    anchorX: u,
    root: l
}) => {
    const a = mt(Lu),
        c = T.useId();
    let f = !0,
        d = T.useMemo(() => (f = !1, {
            id: c,
            initial: e,
            isPresent: n,
            custom: i,
            onExitComplete: p => {
                a.set(p, !0);
                for (const m of a.values())
                    if (!m) return;
                s && s()
            },
            register: p => (a.set(p, !1), () => a.delete(p))
        }), [n, a, s]);
    return o && f && (d = { ...d
    }), T.useMemo(() => {
        a.forEach((p, m) => a.set(m, !1))
    }, [n]), T.useEffect(() => {
        !n && !a.size && s && s()
    }, [n]), r === "popLayout" && (t = tt.jsx(Mu, {
        isPresent: n,
        anchorX: u,
        root: l,
        children: t
    })), tt.jsx(Ce.Provider, {
        value: d,
        children: t
    })
};

function Lu() {
    return new Map
}

function Cr(t = !0) {
    const e = T.useContext(Ce);
    if (e === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: s,
        register: i
    } = e, o = T.useId();
    T.useEffect(() => {
        if (t) return i(o)
    }, [t]);
    const r = T.useCallback(() => t && s && s(o), [o, s, t]);
    return !n && s ? [!1, r] : [!0]
}
const ue = t => t.key || "";

function Rs(t) {
    const e = [];
    return T.Children.forEach(t, n => {
        T.isValidElement(n) && e.push(n)
    }), e
}
const Hf = ({
        children: t,
        custom: e,
        initial: n = !0,
        onExitComplete: s,
        presenceAffectsLayout: i = !0,
        mode: o = "sync",
        propagate: r = !1,
        anchorX: u = "left",
        root: l
    }) => {
        const [a, c] = Cr(r), f = T.useMemo(() => Rs(t), [t]), d = r && !a ? [] : f.map(ue), p = T.useRef(!0), m = T.useRef(f), v = mt(() => new Map), S = T.useRef(new Set), [g, w] = T.useState(f), [x, V] = T.useState(f);
        Ee(() => {
            p.current = !1, m.current = f;
            for (let E = 0; E < x.length; E++) {
                const A = ue(x[E]);
                d.includes(A) ? (v.delete(A), S.current.delete(A)) : v.get(A) !== !0 && v.set(A, !1)
            }
        }, [x, d.length, d.join("-")]);
        const C = [];
        if (f !== g) {
            let E = [...f];
            for (let A = 0; A < x.length; A++) {
                const I = x[A],
                    W = ue(I);
                d.includes(W) || (E.splice(A, 0, I), C.push(I))
            }
            return o === "wait" && C.length && (E = C), V(Rs(E)), w(f), null
        }
        const {
            forceRender: D
        } = T.useContext(wn);
        return tt.jsx(tt.Fragment, {
            children: x.map(E => {
                const A = ue(E),
                    I = r && !a ? !1 : f === x || d.includes(A),
                    W = () => {
                        if (S.current.has(A)) return;
                        if (S.current.add(A), v.has(A)) v.set(A, !0);
                        else return;
                        let Z = !0;
                        v.forEach(Pt => {
                            Pt || (Z = !1)
                        }), Z && (D ? .(), V(m.current), r && c ? .(), s && s())
                    };
                return tt.jsx(Du, {
                    isPresent: I,
                    initial: !p.current || n ? void 0 : !1,
                    custom: e,
                    presenceAffectsLayout: i,
                    mode: o,
                    root: l,
                    onExitComplete: I ? void 0 : W,
                    anchorX: u,
                    children: E
                }, A)
            })
        })
    },
    br = T.createContext({
        strict: !1
    }),
    Vs = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Lt = {};
for (const t in Vs) Lt[t] = {
    isEnabled: e => Vs[t].some(n => !!e[n])
};

function ku(t) {
    for (const e in t) Lt[e] = { ...Lt[e],
        ...t[e]
    }
}
const Ou = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function we(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Ou.has(t)
}
let Rr = t => !we(t);

function Iu(t) {
    typeof t == "function" && (Rr = e => e.startsWith("on") ? !we(e) : t(e))
}
try {
    Iu(require("@emotion/is-prop-valid").default)
} catch {}

function Bu(t, e, n) {
    const s = {};
    for (const i in t) i === "values" && typeof t.values == "object" || (Rr(i) || n === !0 && we(i) || !e && !we(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
    return s
}
const Re = T.createContext({});

function Ve(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}

function Jt(t) {
    return typeof t == "string" || Array.isArray(t)
}
const Gn = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Yn = ["initial", ...Gn];

function Me(t) {
    return Ve(t.animate) || Yn.some(e => Jt(t[e]))
}

function Vr(t) {
    return !!(Me(t) || t.variants)
}

function _u(t, e) {
    if (Me(t)) {
        const {
            initial: n,
            animate: s
        } = t;
        return {
            initial: n === !1 || Jt(n) ? n : void 0,
            animate: Jt(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? e : {}
}

function ju(t) {
    const {
        initial: e,
        animate: n
    } = _u(t, T.useContext(Re));
    return T.useMemo(() => ({
        initial: e,
        animate: n
    }), [Ms(e), Ms(n)])
}

function Ms(t) {
    return Array.isArray(t) ? t.join(" ") : t
}

function Ds(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const _t = {
        correct: (t, e) => {
            if (!e.target) return t;
            if (typeof t == "string")
                if (P.test(t)) t = parseFloat(t);
                else return t;
            const n = Ds(t, e.target.x),
                s = Ds(t, e.target.y);
            return `${n}% ${s}%`
        }
    },
    Fu = {
        correct: (t, {
            treeScale: e,
            projectionDelta: n
        }) => {
            const s = t,
                i = pt.parse(t);
            if (i.length > 5) return s;
            const o = pt.createTransformer(t),
                r = typeof i[0] != "number" ? 1 : 0,
                u = n.x.scale * e.x,
                l = n.y.scale * e.y;
            i[0 + r] /= u, i[1 + r] /= l;
            const a = _(u, l, .5);
            return typeof i[2 + r] == "number" && (i[2 + r] /= a), typeof i[3 + r] == "number" && (i[3 + r] /= a), o(i)
        }
    },
    fn = {
        borderRadius: { ..._t,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: _t,
        borderTopRightRadius: _t,
        borderBottomLeftRadius: _t,
        borderBottomRightRadius: _t,
        boxShadow: Fu
    };

function Mr(t, {
    layout: e,
    layoutId: n
}) {
    return It.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!fn[t] || t === "opacity")
}
const Nu = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Uu = Ot.length;

function Wu(t, e, n) {
    let s = "",
        i = !0;
    for (let o = 0; o < Uu; o++) {
        const r = Ot[o],
            u = t[r];
        if (u === void 0) continue;
        let l = !0;
        if (typeof u == "number" ? l = u === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(u) === 0, !l || n) {
            const a = Tr(u, Wn[r]);
            if (!l) {
                i = !1;
                const c = Nu[r] || r;
                s += `${c}(${a}) `
            }
            n && (e[r] = a)
        }
    }
    return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s
}

function Xn(t, e, n) {
    const {
        style: s,
        vars: i,
        transformOrigin: o
    } = t;
    let r = !1,
        u = !1;
    for (const l in e) {
        const a = e[l];
        if (It.has(l)) {
            r = !0;
            continue
        } else if (Gi(l)) {
            i[l] = a;
            continue
        } else {
            const c = Tr(a, Wn[l]);
            l.startsWith("origin") ? (u = !0, o[l] = c) : s[l] = c
        }
    }
    if (e.transform || (r || n ? s.transform = Wu(e, t.transform, n) : s.transform && (s.transform = "none")), u) {
        const {
            originX: l = "50%",
            originY: a = "50%",
            originZ: c = 0
        } = o;
        s.transformOrigin = `${l} ${a} ${c}`
    }
}
const qn = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Dr(t, e, n) {
    for (const s in e) !$(e[s]) && !Mr(s, n) && (t[s] = e[s])
}

function Hu({
    transformTemplate: t
}, e) {
    return T.useMemo(() => {
        const n = qn();
        return Xn(n, e, t), Object.assign({}, n.vars, n.style)
    }, [e])
}

function $u(t, e) {
    const n = t.style || {},
        s = {};
    return Dr(s, n, t), Object.assign(s, Hu(t, e)), s
}

function Ku(t, e) {
    const n = {},
        s = $u(t, e);
    return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag==="x"?"y":"x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n
}
const zu = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Gu = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Yu(t, e, n = 1, s = 0, i = !0) {
    t.pathLength = 1;
    const o = i ? zu : Gu;
    t[o.offset] = P.transform(-s);
    const r = P.transform(e),
        u = P.transform(n);
    t[o.array] = `${r} ${u}`
}
const Xu = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function Lr(t, {
    attrX: e,
    attrY: n,
    attrScale: s,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: r = 0,
    ...u
}, l, a, c) {
    if (Xn(t, u, a), l) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style, t.style = {};
    const {
        attrs: f,
        style: d
    } = t;
    f.transform && (d.transform = f.transform, delete f.transform), (d.transform || f.transformOrigin) && (d.transformOrigin = f.transformOrigin ? ? "50% 50%", delete f.transformOrigin), d.transform && (d.transformBox = c ? .transformBox ? ? "fill-box", delete f.transformBox);
    for (const p of Xu) f[p] !== void 0 && (d[p] = f[p], delete f[p]);
    e !== void 0 && (f.x = e), n !== void 0 && (f.y = n), s !== void 0 && (f.scale = s), i !== void 0 && Yu(f, i, o, r, !1)
}
const kr = () => ({ ...qn(),
        attrs: {}
    }),
    Or = t => typeof t == "string" && t.toLowerCase() === "svg";

function qu(t, e, n, s) {
    const i = T.useMemo(() => {
        const o = kr();
        return Lr(o, e, Or(s), t.transformTemplate, t.style), { ...o.attrs,
            style: { ...o.style
            }
        }
    }, [e]);
    if (t.style) {
        const o = {};
        Dr(o, t.style, t), i.style = { ...o,
            ...i.style
        }
    }
    return i
}
const Zu = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Zn(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(Zu.indexOf(t) > -1 || /[A-Z]/u.test(t))
}

function Ju(t, e, n, {
    latestValues: s
}, i, o = !1, r) {
    const l = (r ? ? Zn(t) ? qu : Ku)(e, s, i, t),
        a = Bu(e, typeof t == "string", o),
        c = t !== T.Fragment ? { ...a,
            ...l,
            ref: n
        } : {},
        {
            children: f
        } = e,
        d = T.useMemo(() => $(f) ? f.get() : f, [f]);
    return T.createElement(t, { ...c,
        children: d
    })
}

function Ls(t) {
    const e = [{}, {}];
    return t ? .values.forEach((n, s) => {
        e[0][s] = n.get(), e[1][s] = n.getVelocity()
    }), e
}

function Jn(t, e, n, s) {
    if (typeof e == "function") {
        const [i, o] = Ls(s);
        e = e(n !== void 0 ? n : t.custom, i, o)
    }
    if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
        const [i, o] = Ls(s);
        e = e(n !== void 0 ? n : t.custom, i, o)
    }
    return e
}

function ye(t) {
    return $(t) ? t.get() : t
}

function Qu({
    scrapeMotionValuesFromProps: t,
    createRenderState: e
}, n, s, i) {
    return {
        latestValues: tl(n, s, i, t),
        renderState: e()
    }
}

function tl(t, e, n, s) {
    const i = {},
        o = s(t, {});
    for (const d in o) i[d] = ye(o[d]);
    let {
        initial: r,
        animate: u
    } = t;
    const l = Me(t),
        a = Vr(t);
    e && a && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), u === void 0 && (u = e.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || r === !1;
    const f = c ? u : r;
    if (f && typeof f != "boolean" && !Ve(f)) {
        const d = Array.isArray(f) ? f : [f];
        for (let p = 0; p < d.length; p++) {
            const m = Jn(t, d[p]);
            if (m) {
                const {
                    transitionEnd: v,
                    transition: S,
                    ...g
                } = m;
                for (const w in g) {
                    let x = g[w];
                    if (Array.isArray(x)) {
                        const V = c ? x.length - 1 : 0;
                        x = x[V]
                    }
                    x !== null && (i[w] = x)
                }
                for (const w in v) i[w] = v[w]
            }
        }
    }
    return i
}
const Ir = t => (e, n) => {
    const s = T.useContext(Re),
        i = T.useContext(Ce),
        o = () => Qu(t, e, s, i);
    return n ? o() : mt(o)
};

function Qn(t, e, n) {
    const {
        style: s
    } = t, i = {};
    for (const o in s)($(s[o]) || e.style && $(e.style[o]) || Mr(o, t) || n ? .getValue(o) ? .liveStyle !== void 0) && (i[o] = s[o]);
    return i
}
const el = Ir({
    scrapeMotionValuesFromProps: Qn,
    createRenderState: qn
});

function Br(t, e, n) {
    const s = Qn(t, e, n);
    for (const i in t)
        if ($(t[i]) || $(e[i])) {
            const o = Ot.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            s[o] = t[i]
        }
    return s
}
const nl = Ir({
        scrapeMotionValuesFromProps: Br,
        createRenderState: kr
    }),
    sl = Symbol.for("motionComponentSymbol");

function il(t, e, n) {
    const s = T.useRef(n);
    T.useInsertionEffect(() => {
        s.current = n
    });
    const i = T.useRef(null);
    return T.useCallback(o => {
        o && t.onMount ? .(o), e && (o ? e.mount(o) : e.unmount());
        const r = s.current;
        if (typeof r == "function")
            if (o) {
                const u = r(o);
                typeof u == "function" && (i.current = u)
            } else i.current ? (i.current(), i.current = null) : r(o);
        else r && (r.current = o)
    }, [e])
}
const ts = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    rl = "framerAppearId",
    _r = "data-" + ts(rl),
    jr = T.createContext({});

function Nt(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}

function ol(t, e, n, s, i, o) {
    const {
        visualElement: r
    } = T.useContext(Re), u = T.useContext(br), l = T.useContext(Ce), a = T.useContext(be).reducedMotion, c = T.useRef(null);
    s = s || u.renderer, !c.current && s && (c.current = s(t, {
        visualState: e,
        parent: r,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: a,
        isSVG: o
    }));
    const f = c.current,
        d = T.useContext(jr);
    f && !f.projection && i && (f.type === "html" || f.type === "svg") && al(c.current, n, i, d);
    const p = T.useRef(!1);
    T.useInsertionEffect(() => {
        f && p.current && f.update(n, l)
    });
    const m = n[_r],
        v = T.useRef(!!m && !window.MotionHandoffIsComplete ? .(m) && window.MotionHasOptimisedAnimation ? .(m));
    return Ee(() => {
        f && (p.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), f.scheduleRenderMicrotask(), v.current && f.animationState && f.animationState.animateChanges())
    }), T.useEffect(() => {
        f && (!v.current && f.animationState && f.animationState.animateChanges(), v.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete ? .(m)
        }), v.current = !1), f.enteringChildren = void 0)
    }), f
}

function al(t, e, n, s) {
    const {
        layoutId: i,
        layout: o,
        drag: r,
        dragConstraints: u,
        layoutScroll: l,
        layoutRoot: a,
        layoutCrossfade: c
    } = e;
    t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Fr(t.parent)), t.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!r || u && Nt(u),
        visualElement: t,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: s,
        crossfade: c,
        layoutScroll: l,
        layoutRoot: a
    })
}

function Fr(t) {
    if (t) return t.options.allowProjection !== !1 ? t.projection : Fr(t.parent)
}

function Ue(t, {
    forwardMotionProps: e = !1,
    type: n
} = {}, s, i) {
    s && ku(s);
    const o = n ? n === "svg" : Zn(t),
        r = o ? nl : el;

    function u(a, c) {
        let f;
        const d = { ...T.useContext(be),
                ...a,
                layoutId: ul(a)
            },
            {
                isStatic: p
            } = d,
            m = ju(a),
            v = r(a, p);
        if (!p && Pn) {
            ll();
            const S = cl(d);
            f = S.MeasureLayout, m.visualElement = ol(t, v, d, i, S.ProjectionNode, o)
        }
        return tt.jsxs(Re.Provider, {
            value: m,
            children: [f && m.visualElement ? tt.jsx(f, {
                visualElement: m.visualElement,
                ...d
            }) : null, Ju(t, a, il(v, m.visualElement, c), v, p, e, o)]
        })
    }
    u.displayName = `motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;
    const l = T.forwardRef(u);
    return l[sl] = t, l
}

function ul({
    layoutId: t
}) {
    const e = T.useContext(wn).id;
    return e && t !== void 0 ? e + "-" + t : t
}

function ll(t, e) {
    T.useContext(br).strict
}

function cl(t) {
    const {
        drag: e,
        layout: n
    } = Lt;
    if (!e && !n) return {};
    const s = { ...e,
        ...n
    };
    return {
        MeasureLayout: e ? .isEnabled(t) || n ? .isEnabled(t) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}

function fl(t, e) {
    if (typeof Proxy > "u") return Ue;
    const n = new Map,
        s = (o, r) => Ue(o, r, t, e),
        i = (o, r) => s(o, r);
    return new Proxy(i, {
        get: (o, r) => r === "create" ? s : (n.has(r) || n.set(r, Ue(r, void 0, t, e)), n.get(r))
    })
}

function Nr({
    top: t,
    left: e,
    right: n,
    bottom: s
}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: s
        }
    }
}

function hl({
    x: t,
    y: e
}) {
    return {
        top: e.min,
        right: t.max,
        bottom: e.max,
        left: t.min
    }
}

function dl(t, e) {
    if (!e) return t;
    const n = e({
            x: t.left,
            y: t.top
        }),
        s = e({
            x: t.right,
            y: t.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: s.y,
        right: s.x
    }
}

function We(t) {
    return t === void 0 || t === 1
}

function hn({
    scale: t,
    scaleX: e,
    scaleY: n
}) {
    return !We(t) || !We(e) || !We(n)
}

function Tt(t) {
    return hn(t) || Ur(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}

function Ur(t) {
    return ks(t.x) || ks(t.y)
}

function ks(t) {
    return t && t !== "0%"
}

function Pe(t, e, n) {
    const s = t - n,
        i = e * s;
    return n + i
}

function Os(t, e, n, s, i) {
    return i !== void 0 && (t = Pe(t, i, s)), Pe(t, n, s) + e
}

function dn(t, e = 0, n = 1, s, i) {
    t.min = Os(t.min, e, n, s, i), t.max = Os(t.max, e, n, s, i)
}

function Wr(t, {
    x: e,
    y: n
}) {
    dn(t.x, e.translate, e.scale, e.originPoint), dn(t.y, n.translate, n.scale, n.originPoint)
}
const Is = .999999999999,
    Bs = 1.0000000000001;

function pl(t, e, n, s = !1) {
    const i = n.length;
    if (!i) return;
    e.x = e.y = 1;
    let o, r;
    for (let u = 0; u < i; u++) {
        o = n[u], r = o.projectionDelta;
        const {
            visualElement: l
        } = o.options;
        l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && Rt(t, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Wr(t, r)), s && Tt(o.latestValues) && Rt(t, o.latestValues))
    }
    e.x < Bs && e.x > Is && (e.x = 1), e.y < Bs && e.y > Is && (e.y = 1)
}

function bt(t, e) {
    t.min = t.min + e, t.max = t.max + e
}

function _s(t, e, n, s, i = .5) {
    const o = _(t.min, t.max, i);
    dn(t, e, n, o, s)
}

function Rt(t, e) {
    _s(t.x, e.x, e.scaleX, e.scale, e.originX), _s(t.y, e.y, e.scaleY, e.scale, e.originY)
}

function Hr(t, e) {
    return Nr(dl(t.getBoundingClientRect(), e))
}

function ml(t, e, n) {
    const s = Hr(t, n),
        {
            scroll: i
        } = e;
    return i && (bt(s.x, i.offset.x), bt(s.y, i.offset.y)), s
}
const js = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Vt = () => ({
        x: js(),
        y: js()
    }),
    Fs = () => ({
        min: 0,
        max: 0
    }),
    U = () => ({
        x: Fs(),
        y: Fs()
    }),
    pn = {
        current: null
    },
    $r = {
        current: !1
    };

function gl() {
    if ($r.current = !0, !!Pn)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)"),
                e = () => pn.current = t.matches;
            t.addEventListener("change", e), e()
        } else pn.current = !1
}
const yl = new WeakMap;

function vl(t, e, n) {
    for (const s in e) {
        const i = e[s],
            o = n[s];
        if ($(i)) t.addValue(s, i);
        else if ($(o)) t.addValue(s, st(i, {
            owner: t
        }));
        else if (o !== i)
            if (t.hasValue(s)) {
                const r = t.getValue(s);
                r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i)
            } else {
                const r = t.getStaticValue(s);
                t.addValue(s, st(r !== void 0 ? r : i, {
                    owner: t
                }))
            }
    }
    for (const s in n) e[s] === void 0 && t.removeValue(s);
    return e
}
const Ns = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Tl {
    scrapeMotionValuesFromProps(e, n, s) {
        return {}
    }
    constructor({
        parent: e,
        props: n,
        presenceContext: s,
        reducedMotionConfig: i,
        blockInitialAnimation: o,
        visualState: r
    }, u = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Nn, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const d = z.now();
            this.renderScheduledAt < d && (this.renderScheduledAt = d, k.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: a
        } = r;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = a, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = u, this.blockInitialAnimation = !!o, this.isControllingVariants = Me(n), this.isVariantNode = Vr(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
        const {
            willChange: c,
            ...f
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const d in f) {
            const p = f[d];
            l[d] !== void 0 && $(p) && p.set(l[d])
        }
    }
    mount(e) {
        this.current = e, yl.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : ($r.current || gl(), this.shouldReduceMotion = pn.current), this.parent ? .addChild(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(), rt(this.notifyUpdate), rt(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this);
        for (const e in this.events) this.events[e].clear();
        for (const e in this.features) {
            const n = this.features[e];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    addChild(e) {
        this.children.add(e), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(e)
    }
    removeChild(e) {
        this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e)
    }
    bindToMotionValue(e, n) {
        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
        const s = It.has(e);
        s && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", r => {
            this.latestValues[e] = r, this.props.onUpdate && k.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
            i(), o && o(), n.owner && n.stop()
        })
    }
    sortNodePosition(e) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
        let e = "animation";
        for (e in Lt) {
            const n = Lt[e];
            if (!n) continue;
            const {
                isEnabled: s,
                Feature: i
            } = n;
            if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
                const o = this.features[e];
                o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : U()
    }
    getStaticValue(e) {
        return this.latestValues[e]
    }
    setStaticValue(e, n) {
        this.latestValues[e] = n
    }
    update(e, n) {
        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let s = 0; s < Ns.length; s++) {
            const i = Ns[s];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = "on" + i,
                r = e[o];
            r && (this.propEventSubscriptions[i] = this.on(i, r))
        }
        this.prevMotionValues = vl(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(e) {
        return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(e) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e)
    }
    addValue(e, n) {
        const s = this.values.get(e);
        n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get())
    }
    removeValue(e) {
        this.values.delete(e);
        const n = this.valueSubscriptions.get(e);
        n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
        return this.values.has(e)
    }
    getValue(e, n) {
        if (this.props.values && this.props.values[e]) return this.props.values[e];
        let s = this.values.get(e);
        return s === void 0 && n !== void 0 && (s = st(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(e, s)), s
    }
    readValue(e, n) {
        let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ? ? this.readValueFromInstance(this.current, e, this.options);
        return s != null && (typeof s == "string" && (Li(s) || Oi(s)) ? s = parseFloat(s) : !Cu(s) && pt.test(n) && (s = yr(e, n)), this.setBaseTarget(e, $(s) ? s.get() : s)), $(s) ? s.get() : s
    }
    setBaseTarget(e, n) {
        this.baseTarget[e] = n
    }
    getBaseTarget(e) {
        const {
            initial: n
        } = this.props;
        let s;
        if (typeof n == "string" || typeof n == "object") {
            const o = Jn(this.props, n, this.presenceContext ? .custom);
            o && (s = o[e])
        }
        if (n && s !== void 0) return s;
        const i = this.getBaseTargetFromProps(this.props, e);
        return i !== void 0 && !$(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e]
    }
    on(e, n) {
        return this.events[e] || (this.events[e] = new bn), this.events[e].add(n)
    }
    notify(e, ...n) {
        this.events[e] && this.events[e].notify(...n)
    }
    scheduleRenderMicrotask() {
        $n.render(this.render)
    }
}
class Kr extends Tl {
    constructor() {
        super(...arguments), this.KeyframeResolver = ou
    }
    sortInstanceNodePosition(e, n) {
        return e.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, n) {
        return e.style ? e.style[n] : void 0
    }
    removeValueFromRenderState(e, {
        vars: n,
        style: s
    }) {
        delete n[e], delete s[e]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: e
        } = this.props;
        $(e) && (this.childSubscription = e.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function zr(t, {
    style: e,
    vars: n
}, s, i) {
    const o = t.style;
    let r;
    for (r in e) o[r] = e[r];
    i ? .applyProjectionStyles(o, s);
    for (r in n) o.setProperty(r, n[r])
}

function xl(t) {
    return window.getComputedStyle(t)
}
class Sl extends Kr {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = zr
    }
    readValueFromInstance(e, n) {
        if (It.has(n)) return this.projection ? .isProjecting ? sn(n) : Ca(e, n); {
            const s = xl(e),
                i = (Gi(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(e, {
        transformPagePoint: n
    }) {
        return Hr(e, n)
    }
    build(e, n, s) {
        Xn(e, n, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return Qn(e, n, s)
    }
}
const Gr = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function wl(t, e, n, s) {
    zr(t, e, void 0, s);
    for (const i in e.attrs) t.setAttribute(Gr.has(i) ? i : ts(i), e.attrs[i])
}
class Pl extends Kr {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = U
    }
    getBaseTargetFromProps(e, n) {
        return e[n]
    }
    readValueFromInstance(e, n) {
        if (It.has(n)) {
            const s = gr(n);
            return s && s.default || 0
        }
        return n = Gr.has(n) ? n : ts(n), e.getAttribute(n)
    }
    scrapeMotionValuesFromProps(e, n, s) {
        return Br(e, n, s)
    }
    build(e, n, s) {
        Lr(e, n, this.isSVGTag, s.transformTemplate, s.style)
    }
    renderInstance(e, n, s, i) {
        wl(e, n, s, i)
    }
    mount(e) {
        this.isSVGTag = Or(e.tagName), super.mount(e)
    }
}
const Al = (t, e) => e.isSVG ? ? Zn(t) ? new Pl(e) : new Sl(e, {
    allowProjection: t !== T.Fragment
});

function Mt(t, e, n) {
    const s = t.getProps();
    return Jn(s, e, n !== void 0 ? n : s.custom, t)
}
const mn = t => Array.isArray(t);

function El(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, st(n))
}

function Cl(t) {
    return mn(t) ? t[t.length - 1] || 0 : t
}

function bl(t, e) {
    const n = Mt(t, e);
    let {
        transitionEnd: s = {},
        transition: i = {},
        ...o
    } = n || {};
    o = { ...o,
        ...s
    };
    for (const r in o) {
        const u = Cl(o[r]);
        El(t, r, u)
    }
}

function Rl(t) {
    return !!($(t) && t.add)
}

function gn(t, e) {
    const n = t.getValue("willChange");
    if (Rl(n)) return n.add(e);
    if (!n && ct.WillChange) {
        const s = new ct.WillChange("auto");
        t.addValue("willChange", s), s.add(e)
    }
}

function Yr(t) {
    return t.props[_r]
}
const Vl = t => t !== null;

function Ml(t, {
    repeat: e,
    repeatType: n = "loop"
}, s) {
    const i = t.filter(Vl),
        o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
    return i[o]
}
const Dl = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Ll = t => ({
        type: "spring",
        stiffness: 550,
        damping: t === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    kl = {
        type: "keyframes",
        duration: .8
    },
    Ol = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Il = (t, {
        keyframes: e
    }) => e.length > 2 ? kl : It.has(t) ? t.startsWith("scale") ? Ll(e[1]) : Dl : Ol;

function Bl({
    when: t,
    delay: e,
    delayChildren: n,
    staggerChildren: s,
    staggerDirection: i,
    repeat: o,
    repeatType: r,
    repeatDelay: u,
    from: l,
    elapsed: a,
    ...c
}) {
    return !!Object.keys(c).length
}
const es = (t, e, n, s = {}, i, o) => r => {
    const u = Un(s, t) || {},
        l = u.delay || s.delay || 0;
    let {
        elapsed: a = 0
    } = s;
    a = a - lt(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: e.getVelocity(),
        ...u,
        delay: -a,
        onUpdate: d => {
            e.set(d), u.onUpdate && u.onUpdate(d)
        },
        onComplete: () => {
            r(), u.onComplete && u.onComplete()
        },
        name: t,
        motionValue: e,
        element: o ? void 0 : i
    };
    Bl(u) || Object.assign(c, Il(t, c)), c.duration && (c.duration = lt(c.duration)), c.repeatDelay && (c.repeatDelay = lt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (ln(c), c.delay === 0 && (f = !0)), (ct.instantAnimations || ct.skipAnimations) && (f = !0, ln(c), c.delay = 0), c.allowFlatten = !u.type && !u.ease, f && !o && e.get() !== void 0) {
        const d = Ml(c.keyframes, u);
        if (d !== void 0) {
            k.update(() => {
                c.onUpdate(d), c.onComplete()
            });
            return
        }
    }
    return u.isSync ? new Fn(c) : new Ya(c)
};

function _l({
    protectedKeys: t,
    needsAnimating: e
}, n) {
    const s = t.hasOwnProperty(n) && e[n] !== !0;
    return e[n] = !1, s
}

function Xr(t, e, {
    delay: n = 0,
    transitionOverride: s,
    type: i
} = {}) {
    let {
        transition: o = t.getDefaultTransition(),
        transitionEnd: r,
        ...u
    } = e;
    s && (o = s);
    const l = [],
        a = i && t.animationState && t.animationState.getState()[i];
    for (const c in u) {
        const f = t.getValue(c, t.latestValues[c] ? ? null),
            d = u[c];
        if (d === void 0 || a && _l(a, c)) continue;
        const p = {
                delay: n,
                ...Un(o || {}, c)
            },
            m = f.get();
        if (m !== void 0 && !f.isAnimating && !Array.isArray(d) && d === m && !p.velocity) continue;
        let v = !1;
        if (window.MotionHandoffAnimation) {
            const g = Yr(t);
            if (g) {
                const w = window.MotionHandoffAnimation(g, c, k);
                w !== null && (p.startTime = w, v = !0)
            }
        }
        gn(t, c), f.start(es(c, f, d, t.shouldReduceMotion && dr.has(c) ? {
            type: !1
        } : p, t, v));
        const S = f.animation;
        S && l.push(S)
    }
    return r && Promise.all(l).then(() => {
        k.update(() => {
            r && bl(t, r)
        })
    }), l
}

function qr(t, e, n, s = 0, i = 1) {
    const o = Array.from(t).sort((a, c) => a.sortNodePosition(c)).indexOf(e),
        r = t.size,
        u = (r - 1) * s;
    return typeof n == "function" ? n(o, r) : i === 1 ? o * s : u - o * s
}

function yn(t, e, n = {}) {
    const s = Mt(t, e, n.type === "exit" ? t.presenceContext ? .custom : void 0);
    let {
        transition: i = t.getDefaultTransition() || {}
    } = s || {};
    n.transitionOverride && (i = n.transitionOverride);
    const o = s ? () => Promise.all(Xr(t, s, n)) : () => Promise.resolve(),
        r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
            const {
                delayChildren: a = 0,
                staggerChildren: c,
                staggerDirection: f
            } = i;
            return jl(t, e, l, a, c, f, n)
        } : () => Promise.resolve(),
        {
            when: u
        } = i;
    if (u) {
        const [l, a] = u === "beforeChildren" ? [o, r] : [r, o];
        return l().then(() => a())
    } else return Promise.all([o(), r(n.delay)])
}

function jl(t, e, n = 0, s = 0, i = 0, o = 1, r) {
    const u = [];
    for (const l of t.variantChildren) l.notify("AnimationStart", e), u.push(yn(l, e, { ...r,
        delay: n + (typeof s == "function" ? 0 : s) + qr(t.variantChildren, l, s, i, o)
    }).then(() => l.notify("AnimationComplete", e)));
    return Promise.all(u)
}

function Fl(t, e, n = {}) {
    t.notify("AnimationStart", e);
    let s;
    if (Array.isArray(e)) {
        const i = e.map(o => yn(t, o, n));
        s = Promise.all(i)
    } else if (typeof e == "string") s = yn(t, e, n);
    else {
        const i = typeof e == "function" ? Mt(t, e, n.custom) : e;
        s = Promise.all(Xr(t, i, n))
    }
    return s.then(() => {
        t.notify("AnimationComplete", e)
    })
}

function Zr(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let s = 0; s < n; s++)
        if (e[s] !== t[s]) return !1;
    return !0
}
const Nl = Yn.length;

function Jr(t) {
    if (!t) return;
    if (!t.isControllingVariants) {
        const n = t.parent ? Jr(t.parent) || {} : {};
        return t.props.initial !== void 0 && (n.initial = t.props.initial), n
    }
    const e = {};
    for (let n = 0; n < Nl; n++) {
        const s = Yn[n],
            i = t.props[s];
        (Jt(i) || i === !1) && (e[s] = i)
    }
    return e
}
const Ul = [...Gn].reverse(),
    Wl = Gn.length;

function Hl(t) {
    return e => Promise.all(e.map(({
        animation: n,
        options: s
    }) => Fl(t, n, s)))
}

function $l(t) {
    let e = Hl(t),
        n = Us(),
        s = !0;
    const i = l => (a, c) => {
        const f = Mt(t, c, l === "exit" ? t.presenceContext ? .custom : void 0);
        if (f) {
            const {
                transition: d,
                transitionEnd: p,
                ...m
            } = f;
            a = { ...a,
                ...m,
                ...p
            }
        }
        return a
    };

    function o(l) {
        e = l(t)
    }

    function r(l) {
        const {
            props: a
        } = t, c = Jr(t.parent) || {}, f = [], d = new Set;
        let p = {},
            m = 1 / 0;
        for (let S = 0; S < Wl; S++) {
            const g = Ul[S],
                w = n[g],
                x = a[g] !== void 0 ? a[g] : c[g],
                V = Jt(x),
                C = g === l ? w.isActive : null;
            C === !1 && (m = S);
            let D = x === c[g] && x !== a[g] && V;
            if (D && s && t.manuallyAnimateOnMount && (D = !1), w.protectedKeys = { ...p
                }, !w.isActive && C === null || !x && !w.prevProp || Ve(x) || typeof x == "boolean") continue;
            const E = Kl(w.prevProp, x);
            let A = E || g === l && w.isActive && !D && V || S > m && V,
                I = !1;
            const W = Array.isArray(x) ? x : [x];
            let Z = W.reduce(i(g), {});
            C === !1 && (Z = {});
            const {
                prevResolvedValues: Pt = {}
            } = w, ie = { ...Pt,
                ...Z
            }, At = j => {
                A = !0, d.has(j) && (I = !0, d.delete(j)), w.needsAnimating[j] = !0;
                const Y = t.getValue(j);
                Y && (Y.liveStyle = !1)
            };
            for (const j in ie) {
                const Y = Z[j],
                    ot = Pt[j];
                if (p.hasOwnProperty(j)) continue;
                let ft = !1;
                mn(Y) && mn(ot) ? ft = !Zr(Y, ot) : ft = Y !== ot, ft ? Y != null ? At(j) : d.add(j) : Y !== void 0 && d.has(j) ? At(j) : w.protectedKeys[j] = !0
            }
            w.prevProp = x, w.prevResolvedValues = Z, w.isActive && (p = { ...p,
                ...Z
            }), s && t.blockInitialAnimation && (A = !1);
            const re = D && E;
            A && (!re || I) && f.push(...W.map(j => {
                const Y = {
                    type: g
                };
                if (typeof j == "string" && s && !re && t.manuallyAnimateOnMount && t.parent) {
                    const {
                        parent: ot
                    } = t, ft = Mt(ot, j);
                    if (ot.enteringChildren && ft) {
                        const {
                            delayChildren: h
                        } = ft.transition || {};
                        Y.delay = qr(ot.enteringChildren, t, h)
                    }
                }
                return {
                    animation: j,
                    options: Y
                }
            }))
        }
        if (d.size) {
            const S = {};
            if (typeof a.initial != "boolean") {
                const g = Mt(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                g && g.transition && (S.transition = g.transition)
            }
            d.forEach(g => {
                const w = t.getBaseTarget(g),
                    x = t.getValue(g);
                x && (x.liveStyle = !0), S[g] = w ? ? null
            }), f.push({
                animation: S
            })
        }
        let v = !!f.length;
        return s && (a.initial === !1 || a.initial === a.animate) && !t.manuallyAnimateOnMount && (v = !1), s = !1, v ? e(f) : Promise.resolve()
    }

    function u(l, a) {
        if (n[l].isActive === a) return Promise.resolve();
        t.variantChildren ? .forEach(f => f.animationState ? .setActive(l, a)), n[l].isActive = a;
        const c = r(l);
        for (const f in n) n[f].protectedKeys = {};
        return c
    }
    return {
        animateChanges: r,
        setActive: u,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Us()
        }
    }
}

function Kl(t, e) {
    return typeof e == "string" ? e !== t : Array.isArray(e) ? !Zr(e, t) : !1
}

function vt(t = !1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Us() {
    return {
        animate: vt(!0),
        whileInView: vt(),
        whileHover: vt(),
        whileTap: vt(),
        whileDrag: vt(),
        whileFocus: vt(),
        exit: vt()
    }
}
class gt {
    constructor(e) {
        this.isMounted = !1, this.node = e
    }
    update() {}
}
class zl extends gt {
    constructor(e) {
        super(e), e.animationState || (e.animationState = $l(e))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: e
        } = this.node.getProps();
        Ve(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: e
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        e !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(), this.unmountControls ? .()
    }
}
let Gl = 0;
class Yl extends gt {
    constructor() {
        super(...arguments), this.id = Gl++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: e,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: s
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || e === s) return;
        const i = this.node.animationState.setActive("exit", !e);
        n && !e && i.then(() => {
            n(this.id)
        })
    }
    mount() {
        const {
            register: e,
            onExitComplete: n
        } = this.node.presenceContext || {};
        n && n(this.id), e && (this.unmount = e(this.id))
    }
    unmount() {}
}
const Xl = {
    animation: {
        Feature: zl
    },
    exit: {
        Feature: Yl
    }
};

function Qt(t, e, n, s = {
    passive: !0
}) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n)
}

function se(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const ql = t => e => Kn(e) && t(e, se(e));

function Kt(t, e, n, s) {
    return Qt(t, e, ql(n), s)
}
const Qr = 1e-4,
    Zl = 1 - Qr,
    Jl = 1 + Qr,
    to = .01,
    Ql = 0 - to,
    tc = 0 + to;

function G(t) {
    return t.max - t.min
}

function ec(t, e, n) {
    return Math.abs(t - e) <= n
}

function Ws(t, e, n, s = .5) {
    t.origin = s, t.originPoint = _(e.min, e.max, t.origin), t.scale = G(n) / G(e), t.translate = _(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Zl && t.scale <= Jl || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Ql && t.translate <= tc || isNaN(t.translate)) && (t.translate = 0)
}

function zt(t, e, n, s) {
    Ws(t.x, e.x, n.x, s ? s.originX : void 0), Ws(t.y, e.y, n.y, s ? s.originY : void 0)
}

function Hs(t, e, n) {
    t.min = n.min + e.min, t.max = t.min + G(e)
}

function nc(t, e, n) {
    Hs(t.x, e.x, n.x), Hs(t.y, e.y, n.y)
}

function $s(t, e, n) {
    t.min = e.min - n.min, t.max = t.min + G(e)
}

function Ae(t, e, n) {
    $s(t.x, e.x, n.x), $s(t.y, e.y, n.y)
}

function J(t) {
    return [t("x"), t("y")]
}
const eo = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null,
    Ks = (t, e) => Math.abs(t - e);

function sc(t, e) {
    const n = Ks(t.x, e.x),
        s = Ks(t.y, e.y);
    return Math.sqrt(n ** 2 + s ** 2)
}
const zs = new Set(["auto", "scroll"]);
class no {
    constructor(e, n, {
        transformPagePoint: s,
        contextWindow: i = window,
        dragSnapToOrigin: o = !1,
        distanceThreshold: r = 3,
        element: u
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = p => {
                this.handleScroll(p.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const p = $e(this.lastMoveEventInfo, this.history),
                    m = this.startEvent !== null,
                    v = sc(p.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!m && !v) return;
                const {
                    point: S
                } = p, {
                    timestamp: g
                } = H;
                this.history.push({ ...S,
                    timestamp: g
                });
                const {
                    onStart: w,
                    onMove: x
                } = this.handlers;
                m || (w && w(this.lastMoveEvent, p), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, p)
            }, this.handlePointerMove = (p, m) => {
                this.lastMoveEvent = p, this.lastMoveEventInfo = He(m, this.transformPagePoint), k.update(this.updatePoint, !0)
            }, this.handlePointerUp = (p, m) => {
                this.end();
                const {
                    onEnd: v,
                    onSessionEnd: S,
                    resumeAnimation: g
                } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && g && g(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const w = $e(p.type === "pointercancel" ? this.lastMoveEventInfo : He(m, this.transformPagePoint), this.history);
                this.startEvent && v && v(p, w), S && S(p, w)
            }, !Kn(e)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.distanceThreshold = r, this.contextWindow = i || window;
        const l = se(e),
            a = He(l, this.transformPagePoint),
            {
                point: c
            } = a,
            {
                timestamp: f
            } = H;
        this.history = [{ ...c,
            timestamp: f
        }];
        const {
            onSessionStart: d
        } = n;
        d && d(e, $e(a, this.history)), this.removeListeners = te(Kt(this.contextWindow, "pointermove", this.handlePointerMove), Kt(this.contextWindow, "pointerup", this.handlePointerUp), Kt(this.contextWindow, "pointercancel", this.handlePointerUp)), u && this.startScrollTracking(u)
    }
    startScrollTracking(e) {
        let n = e.parentElement;
        for (; n;) {
            const s = getComputedStyle(n);
            (zs.has(s.overflowX) || zs.has(s.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }), n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
            passive: !0
        }), window.addEventListener("scroll", this.onWindowScroll, {
            passive: !0
        }), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(e) {
        const n = this.scrollPositions.get(e);
        if (!n) return;
        const s = e === window,
            i = s ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: e.scrollLeft,
                y: e.scrollTop
            },
            o = {
                x: i.x - n.x,
                y: i.y - n.y
            };
        o.x === 0 && o.y === 0 || (s ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += o.x, this.lastMoveEventInfo.point.y += o.y) : this.history.length > 0 && (this.history[0].x -= o.x, this.history[0].y -= o.y), this.scrollPositions.set(e, i), k.update(this.updatePoint, !0))
    }
    updateHandlers(e) {
        this.handlers = e
    }
    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), rt(this.updatePoint)
    }
}

function He(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}

function Gs(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}

function $e({
    point: t
}, e) {
    return {
        point: t,
        delta: Gs(t, so(e)),
        offset: Gs(t, ic(e)),
        velocity: rc(e, .1)
    }
}

function ic(t) {
    return t[0]
}

function so(t) {
    return t[t.length - 1]
}

function rc(t, e) {
    if (t.length < 2) return {
        x: 0,
        y: 0
    };
    let n = t.length - 1,
        s = null;
    const i = so(t);
    for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > lt(e)));) n--;
    if (!s) return {
        x: 0,
        y: 0
    };
    const o = Q(i.timestamp - s.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const r = {
        x: (i.x - s.x) / o,
        y: (i.y - s.y) / o
    };
    return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
}

function oc(t, {
    min: e,
    max: n
}, s) {
    return e !== void 0 && t < e ? t = s ? _(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? _(n, t, s.max) : Math.min(t, n)), t
}

function Ys(t, e, n) {
    return {
        min: e !== void 0 ? t.min + e : void 0,
        max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
    }
}

function ac(t, {
    top: e,
    left: n,
    bottom: s,
    right: i
}) {
    return {
        x: Ys(t.x, n, i),
        y: Ys(t.y, e, s)
    }
}

function Xs(t, e) {
    let n = e.min - t.min,
        s = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), {
        min: n,
        max: s
    }
}

function uc(t, e) {
    return {
        x: Xs(t.x, e.x),
        y: Xs(t.y, e.y)
    }
}

function lc(t, e) {
    let n = .5;
    const s = G(t),
        i = G(e);
    return i > s ? n = Dt(e.min, e.max - s, t.min) : s > i && (n = Dt(t.min, t.max - i, e.min)), it(0, 1, n)
}

function cc(t, e) {
    const n = {};
    return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n
}
const vn = .35;

function fc(t = vn) {
    return t === !1 ? t = 0 : t === !0 && (t = vn), {
        x: qs(t, "left", "right"),
        y: qs(t, "top", "bottom")
    }
}

function qs(t, e, n) {
    return {
        min: Zs(t, e),
        max: Zs(t, n)
    }
}

function Zs(t, e) {
    return typeof t == "number" ? t : t[e] || 0
}
const hc = new WeakMap;
class dc {
    constructor(e) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = U(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e
    }
    start(e, {
        snapToCursor: n = !1,
        distanceThreshold: s
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const o = f => {
                n ? (this.stopAnimation(), this.snapToCursor(se(f).point)) : this.pauseAnimation()
            },
            r = (f, d) => {
                this.stopAnimation();
                const {
                    drag: p,
                    dragPropagation: m,
                    onDragStart: v
                } = this.getProps();
                if (p && !m && (this.openDragLock && this.openDragLock(), this.openDragLock = lu(p), !this.openDragLock)) return;
                this.latestPointerEvent = f, this.latestPanInfo = d, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), J(g => {
                    let w = this.getAxisMotionValue(g).get() || 0;
                    if (ut.test(w)) {
                        const {
                            projection: x
                        } = this.visualElement;
                        if (x && x.layout) {
                            const V = x.layout.layoutBox[g];
                            V && (w = G(V) * (parseFloat(w) / 100))
                        }
                    }
                    this.originPoint[g] = w
                }), v && k.postRender(() => v(f, d)), gn(this.visualElement, "transform");
                const {
                    animationState: S
                } = this.visualElement;
                S && S.setActive("whileDrag", !0)
            },
            u = (f, d) => {
                this.latestPointerEvent = f, this.latestPanInfo = d;
                const {
                    dragPropagation: p,
                    dragDirectionLock: m,
                    onDirectionLock: v,
                    onDrag: S
                } = this.getProps();
                if (!p && !this.openDragLock) return;
                const {
                    offset: g
                } = d;
                if (m && this.currentDirection === null) {
                    this.currentDirection = pc(g), this.currentDirection !== null && v && v(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, g), this.updateAxis("y", d.point, g), this.visualElement.render(), S && S(f, d)
            },
            l = (f, d) => {
                this.latestPointerEvent = f, this.latestPanInfo = d, this.stop(f, d), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            a = () => J(f => this.getAnimationState(f) === "paused" && this.getAxisMotionValue(f).animation ? .play()),
            {
                dragSnapToOrigin: c
            } = this.getProps();
        this.panSession = new no(e, {
            onSessionStart: o,
            onStart: r,
            onMove: u,
            onSessionEnd: l,
            resumeAnimation: a
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: s,
            contextWindow: eo(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(e, n) {
        const s = e || this.latestPointerEvent,
            i = n || this.latestPanInfo,
            o = this.isDragging;
        if (this.cancel(), !o || !i || !s) return;
        const {
            velocity: r
        } = i;
        this.startAnimation(r);
        const {
            onDragEnd: u
        } = this.getProps();
        u && k.postRender(() => u(s, i))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: e,
            animationState: n
        } = this.visualElement;
        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: s
        } = this.getProps();
        !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(e, n, s) {
        const {
            drag: i
        } = this.getProps();
        if (!s || !le(e, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(e);
        let r = this.originPoint[e] + s[e];
        this.constraints && this.constraints[e] && (r = oc(r, this.constraints[e], this.elastic[e])), o.set(r)
    }
    resolveConstraints() {
        const {
            dragConstraints: e,
            dragElastic: n
        } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, i = this.constraints;
        e && Nt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = ac(s.layoutBox, e) : this.constraints = !1, this.elastic = fc(n), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && J(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = cc(s.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: e,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!e || !Nt(e)) return !1;
        const s = e.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = ml(s, i.root, this.visualElement.getTransformPagePoint());
        let r = uc(i.layout.layoutBox, o);
        if (n) {
            const u = n(hl(r));
            this.hasMutatedConstraints = !!u, u && (r = Nr(u))
        }
        return r
    }
    startAnimation(e) {
        const {
            drag: n,
            dragMomentum: s,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: r,
            onDragTransitionEnd: u
        } = this.getProps(), l = this.constraints || {}, a = J(c => {
            if (!le(c, n, this.currentDirection)) return;
            let f = l && l[c] || {};
            r && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6,
                p = i ? 40 : 1e7,
                m = {
                    type: "inertia",
                    velocity: s ? e[c] : 0,
                    bounceStiffness: d,
                    bounceDamping: p,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...f
                };
            return this.startAxisValueAnimation(c, m)
        });
        return Promise.all(a).then(u)
    }
    startAxisValueAnimation(e, n) {
        const s = this.getAxisMotionValue(e);
        return gn(this.visualElement, e), s.start(es(e, s, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        J(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
        J(e => this.getAxisMotionValue(e).animation ? .pause())
    }
    getAnimationState(e) {
        return this.getAxisMotionValue(e).animation ? .state
    }
    getAxisMotionValue(e) {
        const n = `_drag${e.toUpperCase()}`,
            s = this.visualElement.getProps(),
            i = s[n];
        return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0)
    }
    snapToCursor(e) {
        J(n => {
            const {
                drag: s
            } = this.getProps();
            if (!le(n, s, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: r,
                    max: u
                } = i.layout.layoutBox[n], l = o.get() || 0;
                o.set(e[n] - _(r, u, .5) + l)
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: e,
            dragConstraints: n
        } = this.getProps(), {
            projection: s
        } = this.visualElement;
        if (!Nt(n) || !s || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        J(r => {
            const u = this.getAxisMotionValue(r);
            if (u && this.constraints !== !1) {
                const l = u.get();
                i[r] = lc({
                    min: l,
                    max: l
                }, this.constraints[r])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), J(r => {
            if (!le(r, e, null)) return;
            const u = this.getAxisMotionValue(r),
                {
                    min: l,
                    max: a
                } = this.constraints[r];
            u.set(_(l, a, i[r]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        hc.set(this.visualElement, this);
        const e = this.visualElement.current,
            n = Kt(e, "pointerdown", l => {
                const {
                    drag: a,
                    dragListener: c = !0
                } = this.getProps();
                a && c && !Pr(l.target) && this.start(l)
            }),
            s = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                Nt(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), k.read(s);
        const r = Qt(window, "resize", () => this.scalePositionWithinConstraints()),
            u = i.addEventListener("didUpdate", (({
                delta: l,
                hasLayoutChanged: a
            }) => {
                this.isDragging && a && (J(c => {
                    const f = this.getAxisMotionValue(c);
                    f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate))
                }), this.visualElement.render())
            }));
        return () => {
            r(), n(), o(), u && u()
        }
    }
    getProps() {
        const e = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: s = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: r = vn,
                dragMomentum: u = !0
            } = e;
        return { ...e,
            drag: n,
            dragDirectionLock: s,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: r,
            dragMomentum: u
        }
    }
}

function le(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t)
}

function pc(t, e = 10) {
    let n = null;
    return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
}
class mc extends gt {
    constructor(e) {
        super(e), this.removeGroupControls = q, this.removeListeners = q, this.controls = new dc(e)
    }
    mount() {
        const {
            dragControls: e
        } = this.node.getProps();
        e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || q
    }
    update() {
        const {
            dragControls: e
        } = this.node.getProps(), {
            dragControls: n
        } = this.node.prevProps || {};
        e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Js = t => (e, n) => {
    t && k.postRender(() => t(e, n))
};
class gc extends gt {
    constructor() {
        super(...arguments), this.removePointerDownListener = q
    }
    onPointerDown(e) {
        this.session = new no(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: eo(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: e,
            onPanStart: n,
            onPan: s,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: Js(e),
            onStart: Js(n),
            onMove: s,
            onEnd: (o, r) => {
                delete this.session, i && k.postRender(() => i(o, r))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Kt(this.node.current, "pointerdown", e => this.onPointerDown(e))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const ve = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
let Ke = !1;
class yc extends T.Component {
    componentDidMount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s,
            layoutId: i
        } = this.props, {
            projection: o
        } = e;
        o && (n.group && n.group.add(o), s && s.register && i && s.register(o), Ke && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({ ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), ve.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(e) {
        const {
            layoutDependency: n,
            visualElement: s,
            drag: i,
            isPresent: o
        } = this.props, {
            projection: r
        } = s;
        return r && (r.isPresent = o, Ke = !0, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || k.postRender(() => {
            const u = r.getStack();
            (!u || !u.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: e
        } = this.props.visualElement;
        e && (e.root.didUpdate(), $n.postRender(() => {
            !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: e,
            layoutGroup: n,
            switchLayoutGroup: s
        } = this.props, {
            projection: i
        } = e;
        Ke = !0, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: e
        } = this.props;
        e && e()
    }
    render() {
        return null
    }
}

function io(t) {
    const [e, n] = Cr(), s = T.useContext(wn);
    return tt.jsx(yc, { ...t,
        layoutGroup: s,
        switchLayoutGroup: T.useContext(jr),
        isPresent: e,
        safeToRemove: n
    })
}

function vc(t, e, n) {
    const s = $(t) ? t : st(t);
    return s.start(es("", s, e, n)), s.animation
}
const Tc = (t, e) => t.depth - e.depth;
class xc {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(e) {
        An(this.children, e), this.isDirty = !0
    }
    remove(e) {
        En(this.children, e), this.isDirty = !0
    }
    forEach(e) {
        this.isDirty && this.children.sort(Tc), this.isDirty = !1, this.children.forEach(e)
    }
}

function Sc(t, e) {
    const n = z.now(),
        s = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= e && (rt(s), t(o - e))
        };
    return k.setup(s, !0), () => rt(s)
}
const ro = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    wc = ro.length,
    Qs = t => typeof t == "string" ? parseFloat(t) : t,
    ti = t => typeof t == "number" || P.test(t);

function Pc(t, e, n, s, i, o) {
    i ? (t.opacity = _(0, n.opacity ? ? 1, Ac(s)), t.opacityExit = _(e.opacity ? ? 1, 0, Ec(s))) : o && (t.opacity = _(e.opacity ? ? 1, n.opacity ? ? 1, s));
    for (let r = 0; r < wc; r++) {
        const u = `border${ro[r]}Radius`;
        let l = ei(e, u),
            a = ei(n, u);
        if (l === void 0 && a === void 0) continue;
        l || (l = 0), a || (a = 0), l === 0 || a === 0 || ti(l) === ti(a) ? (t[u] = Math.max(_(Qs(l), Qs(a), s), 0), (ut.test(a) || ut.test(l)) && (t[u] += "%")) : t[u] = a
    }(e.rotate || n.rotate) && (t.rotate = _(e.rotate || 0, n.rotate || 0, s))
}

function ei(t, e) {
    return t[e] !== void 0 ? t[e] : t.borderRadius
}
const Ac = oo(0, .5, Ui),
    Ec = oo(.5, .95, q);

function oo(t, e, n) {
    return s => s < t ? 0 : s > e ? 1 : n(Dt(t, e, s))
}

function ni(t, e) {
    t.min = e.min, t.max = e.max
}

function et(t, e) {
    ni(t.x, e.x), ni(t.y, e.y)
}

function si(t, e) {
    t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
}

function ii(t, e, n, s, i) {
    return t -= e, t = Pe(t, 1 / n, s), i !== void 0 && (t = Pe(t, 1 / i, s)), t
}

function Cc(t, e = 0, n = 1, s = .5, i, o = t, r = t) {
    if (ut.test(e) && (e = parseFloat(e), e = _(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
    let u = _(o.min, o.max, s);
    t === o && (u -= e), t.min = ii(t.min, e, n, u, i), t.max = ii(t.max, e, n, u, i)
}

function ri(t, e, [n, s, i], o, r) {
    Cc(t, e[n], e[s], e[i], e.scale, o, r)
}
const bc = ["x", "scaleX", "originX"],
    Rc = ["y", "scaleY", "originY"];

function oi(t, e, n, s) {
    ri(t.x, e, bc, n ? n.x : void 0, s ? s.x : void 0), ri(t.y, e, Rc, n ? n.y : void 0, s ? s.y : void 0)
}

function ai(t) {
    return t.translate === 0 && t.scale === 1
}

function ao(t) {
    return ai(t.x) && ai(t.y)
}

function ui(t, e) {
    return t.min === e.min && t.max === e.max
}

function Vc(t, e) {
    return ui(t.x, e.x) && ui(t.y, e.y)
}

function li(t, e) {
    return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
}

function uo(t, e) {
    return li(t.x, e.x) && li(t.y, e.y)
}

function ci(t) {
    return G(t.x) / G(t.y)
}

function fi(t, e) {
    return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
}
class Mc {
    constructor() {
        this.members = []
    }
    add(e) {
        An(this.members, e), e.scheduleRender()
    }
    remove(e) {
        if (En(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(e) {
        const n = this.members.findIndex(i => e === i);
        if (n === 0) return !1;
        let s;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                s = o;
                break
            }
        }
        return s ? (this.promote(s), !0) : !1
    }
    promote(e, n) {
        const s = this.lead;
        if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
            s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            const {
                crossfade: i
            } = e.options;
            i === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(e => {
            const {
                options: n,
                resumingFrom: s
            } = e;
            n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(e => {
            e.instance && e.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function Dc(t, e, n) {
    let s = "";
    const i = t.x.translate / e.x,
        o = t.y.translate / e.y,
        r = n ? .z || 0;
    if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1/e.x}, ${1/e.y}) `), n) {
        const {
            transformPerspective: a,
            rotate: c,
            rotateX: f,
            rotateY: d,
            skewX: p,
            skewY: m
        } = n;
        a && (s = `perspective(${a}px) ${s}`), c && (s += `rotate(${c}deg) `), f && (s += `rotateX(${f}deg) `), d && (s += `rotateY(${d}deg) `), p && (s += `skewX(${p}deg) `), m && (s += `skewY(${m}deg) `)
    }
    const u = t.x.scale * e.x,
        l = t.y.scale * e.y;
    return (u !== 1 || l !== 1) && (s += `scale(${u}, ${l})`), s || "none"
}
const ze = ["", "X", "Y", "Z"],
    Lc = 1e3;
let kc = 0;

function Ge(t, e, n, s) {
    const {
        latestValues: i
    } = e;
    i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0))
}

function lo(t) {
    if (t.hasCheckedOptimisedAppear = !0, t.root === t) return;
    const {
        visualElement: e
    } = t.options;
    if (!e) return;
    const n = Yr(e);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: o
        } = t.options;
        window.MotionCancelOptimisedAnimation(n, "transform", k, !(i || o))
    }
    const {
        parent: s
    } = t;
    s && !s.hasCheckedOptimisedAppear && lo(s)
}

function co({
    attachResizeListener: t,
    defaultParent: e,
    measureScroll: n,
    checkIsScrollRoot: s,
    resetTransform: i
}) {
    return class {
        constructor(r = {}, u = e ? .()) {
            this.id = kc++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(Bc), this.nodes.forEach(Nc), this.nodes.forEach(Uc), this.nodes.forEach(_c)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = r, this.root = u ? u.root || u : this, this.path = u ? [...u.path, u] : [], this.parent = u, this.depth = u ? u.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new xc)
        }
        addEventListener(r, u) {
            return this.eventHandlers.has(r) || this.eventHandlers.set(r, new bn), this.eventHandlers.get(r).add(u)
        }
        notifyListeners(r, ...u) {
            const l = this.eventHandlers.get(r);
            l && l.notify(...u)
        }
        hasListeners(r) {
            return this.eventHandlers.has(r)
        }
        mount(r) {
            if (this.instance) return;
            this.isSVG = zn(r) && !Pu(r), this.instance = r;
            const {
                layoutId: u,
                layout: l,
                visualElement: a
            } = this.options;
            if (a && !a.current && a.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || u) && (this.isLayoutDirty = !0), t) {
                let c, f = 0;
                const d = () => this.root.updateBlockedByResize = !1;
                k.read(() => {
                    f = window.innerWidth
                }), t(r, () => {
                    const p = window.innerWidth;
                    p !== f && (f = p, this.root.updateBlockedByResize = !0, c && c(), c = Sc(d, 250), ve.hasAnimatedSinceResize && (ve.hasAnimatedSinceResize = !1, this.nodes.forEach(pi)))
                })
            }
            u && this.root.registerSharedNode(u, this), this.options.animate !== !1 && a && (u || l) && this.addEventListener("didUpdate", ({
                delta: c,
                hasLayoutChanged: f,
                hasRelativeLayoutChanged: d,
                layout: p
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const m = this.options.transition || a.getDefaultTransition() || zc,
                    {
                        onLayoutAnimationStart: v,
                        onLayoutAnimationComplete: S
                    } = a.getProps(),
                    g = !this.targetLayout || !uo(this.targetLayout, p),
                    w = !f && d;
                if (this.options.layoutRoot || this.resumeFrom || w || f && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const x = { ...Un(m, "layout"),
                        onPlay: v,
                        onComplete: S
                    };
                    (a.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x), this.setAnimationOrigin(c, w)
                } else f || pi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = p
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const r = this.getStack();
            r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), rt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Wc), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: r
            } = this.options;
            return r && r.getProps().transformTemplate
        }
        willUpdate(r = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lo(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: u,
                layout: l
            } = this.options;
            if (u === void 0 && !l) return;
            const a = this.getTransformTemplate();
            this.prevTransformTemplateValue = a ? a(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hi);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(di);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Fc), this.nodes.forEach(Oc), this.nodes.forEach(Ic)) : this.nodes.forEach(di), this.clearAllSnapshots();
            const u = z.now();
            H.delta = it(0, 1e3 / 60, u - H.timestamp), H.timestamp = u, H.isProcessing = !0, Oe.update.process(H), Oe.preRender.process(H), Oe.render.process(H), H.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, $n.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(jc), this.sharedNodes.forEach(Hc)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, k.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            k.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !G(this.snapshot.measuredBox.x) && !G(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const r = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = U(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: u
            } = this.options;
            u && u.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0)
        }
        updateScroll(r = "measure") {
            let u = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (u = !1), u && this.instance) {
                const l = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: r,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                u = this.projectionDelta && !ao(this.projectionDelta),
                l = this.getTransformTemplate(),
                a = l ? l(this.latestValues, "") : void 0,
                c = a !== this.prevTransformTemplateValue;
            r && this.instance && (u || Tt(this.latestValues) || c) && (i(this.instance, a), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(r = !0) {
            const u = this.measurePageBox();
            let l = this.removeElementScroll(u);
            return r && (l = this.removeTransform(l)), Gc(l), {
                animationId: this.root.animationId,
                measuredBox: u,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: r
            } = this.options;
            if (!r) return U();
            const u = r.measureViewportBox();
            if (!(this.scroll ? .wasRoot || this.path.some(Yc))) {
                const {
                    scroll: a
                } = this.root;
                a && (bt(u.x, a.offset.x), bt(u.y, a.offset.y))
            }
            return u
        }
        removeElementScroll(r) {
            const u = U();
            if (et(u, r), this.scroll ? .wasRoot) return u;
            for (let l = 0; l < this.path.length; l++) {
                const a = this.path[l],
                    {
                        scroll: c,
                        options: f
                    } = a;
                a !== this.root && c && f.layoutScroll && (c.wasRoot && et(u, r), bt(u.x, c.offset.x), bt(u.y, c.offset.y))
            }
            return u
        }
        applyTransform(r, u = !1) {
            const l = U();
            et(l, r);
            for (let a = 0; a < this.path.length; a++) {
                const c = this.path[a];
                !u && c.options.layoutScroll && c.scroll && c !== c.root && Rt(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), Tt(c.latestValues) && Rt(l, c.latestValues)
            }
            return Tt(this.latestValues) && Rt(l, this.latestValues), l
        }
        removeTransform(r) {
            const u = U();
            et(u, r);
            for (let l = 0; l < this.path.length; l++) {
                const a = this.path[l];
                if (!a.instance || !Tt(a.latestValues)) continue;
                hn(a.latestValues) && a.updateSnapshot();
                const c = U(),
                    f = a.measurePageBox();
                et(c, f), oi(u, a.latestValues, a.snapshot ? a.snapshot.layoutBox : void 0, c)
            }
            return Tt(this.latestValues) && oi(u, this.latestValues), u
        }
        setTargetDelta(r) {
            this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(r) {
            this.options = { ...this.options,
                ...r,
                crossfade: r.crossfade !== void 0 ? r.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== H.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(r = !1) {
            const u = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== u;
            if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: c,
                layoutId: f
            } = this.options;
            if (!this.layout || !(c || f)) return;
            this.resolvedRelativeTargetAt = H.timestamp;
            const d = this.getClosestProjectingParent();
            d && this.linkedParentVersion !== d.layoutVersion && !d.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (d && d.layout ? this.createRelativeTarget(d, this.layout.layoutBox, d.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = U(), this.targetWithTransforms = U()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), nc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : et(this.target, this.layout.layoutBox), Wr(this.target, this.targetDelta)) : et(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, d && !!d.resumingFrom == !!this.resumingFrom && !d.options.layoutScroll && d.target && this.animationProgress !== 1 ? this.createRelativeTarget(d, this.target, d.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || hn(this.parent.latestValues) || Ur(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(r, u, l) {
            this.relativeParent = r, this.linkedParentVersion = r.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = U(), this.relativeTargetOrigin = U(), Ae(this.relativeTargetOrigin, u, l), et(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            const r = this.getLead(),
                u = !!this.resumingFrom || this !== r;
            let l = !0;
            if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (l = !1), u && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === H.timestamp && (l = !1), l) return;
            const {
                layout: a,
                layoutId: c
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(a || c)) return;
            et(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                d = this.treeScale.y;
            pl(this.layoutCorrected, this.treeScale, this.path, u), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = U());
            const {
                target: p
            } = r;
            if (!p) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (si(this.prevProjectionDelta.x, this.projectionDelta.x), si(this.prevProjectionDelta.y, this.projectionDelta.y)), zt(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== d || !fi(this.projectionDelta.x, this.prevProjectionDelta.x) || !fi(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(r = !0) {
            if (this.options.visualElement ? .scheduleRender(), r) {
                const u = this.getStack();
                u && u.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Vt(), this.projectionDelta = Vt(), this.projectionDeltaWithTransform = Vt()
        }
        setAnimationOrigin(r, u = !1) {
            const l = this.snapshot,
                a = l ? l.latestValues : {},
                c = { ...this.latestValues
                },
                f = Vt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !u;
            const d = U(),
                p = l ? l.source : void 0,
                m = this.layout ? this.layout.source : void 0,
                v = p !== m,
                S = this.getStack(),
                g = !S || S.members.length <= 1,
                w = !!(v && !g && this.options.crossfade === !0 && !this.path.some(Kc));
            this.animationProgress = 0;
            let x;
            this.mixTargetDelta = V => {
                const C = V / 1e3;
                mi(f.x, r.x, C), mi(f.y, r.y, C), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ae(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), $c(this.relativeTarget, this.relativeTargetOrigin, d, C), x && Vc(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = U()), et(x, this.relativeTarget)), v && (this.animationValues = c, Pc(c, a, this.latestValues, C, w, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(r) {
            this.notifyListeners("animationStart"), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && (rt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = k.update(() => {
                ve.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = st(0)), this.currentAnimation = vc(this.motionValue, [0, 1e3], { ...r,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: u => {
                        this.mixTargetDelta(u), r.onUpdate && r.onUpdate(u)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        r.onComplete && r.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const r = this.getStack();
            r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Lc), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const r = this.getLead();
            let {
                targetWithTransforms: u,
                target: l,
                layout: a,
                latestValues: c
            } = r;
            if (!(!u || !l || !a)) {
                if (this !== r && this.layout && a && fo(this.options.animationType, this.layout.layoutBox, a.layoutBox)) {
                    l = this.target || U();
                    const f = G(this.layout.layoutBox.x);
                    l.x.min = r.target.x.min, l.x.max = l.x.min + f;
                    const d = G(this.layout.layoutBox.y);
                    l.y.min = r.target.y.min, l.y.max = l.y.min + d
                }
                et(u, l), Rt(u, c), zt(this.projectionDeltaWithTransform, this.layoutCorrected, u, c)
            }
        }
        registerSharedNode(r, u) {
            this.sharedNodes.has(r) || this.sharedNodes.set(r, new Mc), this.sharedNodes.get(r).add(u);
            const a = u.options.initialPromotionConfig;
            u.promote({
                transition: a ? a.transition : void 0,
                preserveFollowOpacity: a && a.shouldPreserveFollowOpacity ? a.shouldPreserveFollowOpacity(u) : void 0
            })
        }
        isLead() {
            const r = this.getStack();
            return r ? r.lead === this : !0
        }
        getLead() {
            const {
                layoutId: r
            } = this.options;
            return r ? this.getStack() ? .lead || this : this
        }
        getPrevLead() {
            const {
                layoutId: r
            } = this.options;
            return r ? this.getStack() ? .prevLead : void 0
        }
        getStack() {
            const {
                layoutId: r
            } = this.options;
            if (r) return this.root.sharedNodes.get(r)
        }
        promote({
            needsReset: r,
            transition: u,
            preserveFollowOpacity: l
        } = {}) {
            const a = this.getStack();
            a && a.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), u && this.setOptions({
                transition: u
            })
        }
        relegate() {
            const r = this.getStack();
            return r ? r.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: r
            } = this.options;
            if (!r) return;
            let u = !1;
            const {
                latestValues: l
            } = r;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (u = !0), !u) return;
            const a = {};
            l.z && Ge("z", r, a, this.animationValues);
            for (let c = 0; c < ze.length; c++) Ge(`rotate${ze[c]}`, r, a, this.animationValues), Ge(`skew${ze[c]}`, r, a, this.animationValues);
            r.render();
            for (const c in a) r.setStaticValue(c, a[c]), this.animationValues && (this.animationValues[c] = a[c]);
            r.scheduleRender()
        }
        applyProjectionStyles(r, u) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                r.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = ye(u ? .pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const a = this.getLead();
            if (!this.projectionDelta || !this.layout || !a.target) {
                this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = ye(u ? .pointerEvents) || ""), this.hasProjected && !Tt(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = !1);
                return
            }
            r.visibility = "";
            const c = a.animationValues || a.latestValues;
            this.applyTransformsToTarget();
            let f = Dc(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (f = l(c, f)), r.transform = f;
            const {
                x: d,
                y: p
            } = this.projectionDelta;
            r.transformOrigin = `${d.origin*100}% ${p.origin*100}% 0`, a.animationValues ? r.opacity = a === this ? c.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : r.opacity = a === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const m in fn) {
                if (c[m] === void 0) continue;
                const {
                    correct: v,
                    applyTo: S,
                    isCSSVariable: g
                } = fn[m], w = f === "none" ? c[m] : v(c[m], a);
                if (S) {
                    const x = S.length;
                    for (let V = 0; V < x; V++) r[S[V]] = w
                } else g ? this.options.visualElement.renderState.vars[m] = w : r[m] = w
            }
            this.options.layoutId && (r.pointerEvents = a === this ? ye(u ? .pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(r => r.currentAnimation ? .stop()), this.root.nodes.forEach(hi), this.root.sharedNodes.clear()
        }
    }
}

function Oc(t) {
    t.updateLayout()
}

function Ic(t) {
    const e = t.resumeFrom ? .snapshot || t.snapshot;
    if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
        const {
            layoutBox: n,
            measuredBox: s
        } = t.layout, {
            animationType: i
        } = t.options, o = e.source !== t.layout.source;
        i === "size" ? J(c => {
            const f = o ? e.measuredBox[c] : e.layoutBox[c],
                d = G(f);
            f.min = n[c].min, f.max = f.min + d
        }) : fo(i, e.layoutBox, n) && J(c => {
            const f = o ? e.measuredBox[c] : e.layoutBox[c],
                d = G(n[c]);
            f.max = f.min + d, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[c].max = t.relativeTarget[c].min + d)
        });
        const r = Vt();
        zt(r, n, e.layoutBox);
        const u = Vt();
        o ? zt(u, t.applyTransform(s, !0), e.measuredBox) : zt(u, n, e.layoutBox);
        const l = !ao(r);
        let a = !1;
        if (!t.resumeFrom) {
            const c = t.getClosestProjectingParent();
            if (c && !c.resumeFrom) {
                const {
                    snapshot: f,
                    layout: d
                } = c;
                if (f && d) {
                    const p = U();
                    Ae(p, e.layoutBox, f.layoutBox);
                    const m = U();
                    Ae(m, n, d.layoutBox), uo(p, m) || (a = !0), c.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = p, t.relativeParent = c)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: e,
            delta: u,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: a
        })
    } else if (t.isLead()) {
        const {
            onExitComplete: n
        } = t.options;
        n && n()
    }
    t.options.transition = void 0
}

function Bc(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}

function _c(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}

function jc(t) {
    t.clearSnapshot()
}

function hi(t) {
    t.clearMeasurements()
}

function di(t) {
    t.isLayoutDirty = !1
}

function Fc(t) {
    const {
        visualElement: e
    } = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
}

function pi(t) {
    t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
}

function Nc(t) {
    t.resolveTargetDelta()
}

function Uc(t) {
    t.calcProjection()
}

function Wc(t) {
    t.resetSkewAndRotation()
}

function Hc(t) {
    t.removeLeadSnapshot()
}

function mi(t, e, n) {
    t.translate = _(e.translate, 0, n), t.scale = _(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
}

function gi(t, e, n, s) {
    t.min = _(e.min, n.min, s), t.max = _(e.max, n.max, s)
}

function $c(t, e, n, s) {
    gi(t.x, e.x, n.x, s), gi(t.y, e.y, n.y, s)
}

function Kc(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const zc = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    yi = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
    vi = yi("applewebkit/") && !yi("chrome/") ? Math.round : q;

function Ti(t) {
    t.min = vi(t.min), t.max = vi(t.max)
}

function Gc(t) {
    Ti(t.x), Ti(t.y)
}

function fo(t, e, n) {
    return t === "position" || t === "preserve-aspect" && !ec(ci(e), ci(n), .2)
}

function Yc(t) {
    return t !== t.root && t.scroll ? .wasRoot
}
const Xc = co({
        attachResizeListener: (t, e) => Qt(t, "resize", e),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Ye = {
        current: void 0
    },
    ho = co({
        measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
        }),
        defaultParent: () => {
            if (!Ye.current) {
                const t = new Xc({});
                t.mount(window), t.setOptions({
                    layoutScroll: !0
                }), Ye.current = t
            }
            return Ye.current
        },
        resetTransform: (t, e) => {
            t.style.transform = e !== void 0 ? e : "none"
        },
        checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
    }),
    qc = {
        pan: {
            Feature: gc
        },
        drag: {
            Feature: mc,
            ProjectionNode: ho,
            MeasureLayout: io
        }
    };

function xi(t, e, n) {
    const {
        props: s
    } = t;
    t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n,
        o = s[i];
    o && k.postRender(() => o(e, se(e)))
}
class Zc extends gt {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = cu(e, (n, s) => (xi(this.node, s, "Start"), i => xi(this.node, i, "End"))))
    }
    unmount() {}
}
class Jc extends gt {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let e = !1;
        try {
            e = this.node.current.matches(":focus-visible")
        } catch {
            e = !0
        }!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = te(Qt(this.node.current, "focus", () => this.onFocus()), Qt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Si(t, e, n) {
    const {
        props: s
    } = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
    t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n),
        o = s[i];
    o && k.postRender(() => o(e, se(e)))
}
class Qc extends gt {
    mount() {
        const {
            current: e
        } = this.node;
        e && (this.unmount = du(e, (n, s) => (Si(this.node, s, "Start"), (i, {
            success: o
        }) => Si(this.node, i, o ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Tn = new WeakMap,
    Xe = new WeakMap,
    tf = t => {
        const e = Tn.get(t.target);
        e && e(t)
    },
    ef = t => {
        t.forEach(tf)
    };

function nf({
    root: t,
    ...e
}) {
    const n = t || document;
    Xe.has(n) || Xe.set(n, {});
    const s = Xe.get(n),
        i = JSON.stringify(e);
    return s[i] || (s[i] = new IntersectionObserver(ef, {
        root: t,
        ...e
    })), s[i]
}

function sf(t, e, n) {
    const s = nf(e);
    return Tn.set(t, n), s.observe(t), () => {
        Tn.delete(t), s.unobserve(t)
    }
}
const rf = {
    some: 0,
    all: 1
};
class of extends gt {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: e = {}
        } = this.node.getProps(), {
            root: n,
            margin: s,
            amount: i = "some",
            once: o
        } = e, r = {
            root: n ? n.current : void 0,
            rootMargin: s,
            threshold: typeof i == "number" ? i : rf[i]
        }, u = l => {
            const {
                isIntersecting: a
            } = l;
            if (this.isInView === a || (this.isInView = a, o && !a && this.hasEnteredView)) return;
            a && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", a);
            const {
                onViewportEnter: c,
                onViewportLeave: f
            } = this.node.getProps(), d = a ? c : f;
            d && d(l)
        };
        return sf(this.node.current, r, u)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: e,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(af(e, n)) && this.startObserver()
    }
    unmount() {}
}

function af({
    viewport: t = {}
}, {
    viewport: e = {}
} = {}) {
    return n => t[n] !== e[n]
}
const uf = {
        inView: {
            Feature: of
        },
        tap: {
            Feature: Qc
        },
        focus: {
            Feature: Jc
        },
        hover: {
            Feature: Zc
        }
    },
    lf = {
        layout: {
            ProjectionNode: ho,
            MeasureLayout: io
        }
    },
    cf = { ...Xl,
        ...uf,
        ...qc,
        ...lf
    },
    po = fl(cf, Al),
    ff = 50,
    wi = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0
    }),
    hf = () => ({
        time: 0,
        x: wi(),
        y: wi()
    }),
    df = {
        x: {
            length: "Width",
            position: "Left"
        },
        y: {
            length: "Height",
            position: "Top"
        }
    };

function Pi(t, e, n, s) {
    const i = n[e],
        {
            length: o,
            position: r
        } = df[e],
        u = i.current,
        l = n.time;
    i.current = t[`scroll${r}`], i.scrollLength = t[`scroll${o}`] - t[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = Dt(0, i.scrollLength, i.current);
    const a = s - l;
    i.velocity = a > ff ? 0 : Rn(i.current - u, a)
}

function pf(t, e, n) {
    Pi(t, "x", e, n), Pi(t, "y", e, n), e.time = n
}

function mf(t, e) {
    const n = {
        x: 0,
        y: 0
    };
    let s = t;
    for (; s && s !== e;)
        if (Hn(s)) n.x += s.offsetLeft, n.y += s.offsetTop, s = s.offsetParent;
        else if (s.tagName === "svg") {
        const i = s.getBoundingClientRect();
        s = s.parentElement;
        const o = s.getBoundingClientRect();
        n.x += i.left - o.left, n.y += i.top - o.top
    } else if (s instanceof SVGGraphicsElement) {
        const {
            x: i,
            y: o
        } = s.getBBox();
        n.x += i, n.y += o;
        let r = null,
            u = s.parentNode;
        for (; !r;) u.tagName === "svg" && (r = u), u = s.parentNode;
        s = r
    } else break;
    return n
}
const xn = {
    start: 0,
    center: .5,
    end: 1
};

function Ai(t, e, n = 0) {
    let s = 0;
    if (t in xn && (t = xn[t]), typeof t == "string") {
        const i = parseFloat(t);
        t.endsWith("px") ? s = i : t.endsWith("%") ? t = i / 100 : t.endsWith("vw") ? s = i / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? s = i / 100 * document.documentElement.clientHeight : t = i
    }
    return typeof t == "number" && (s = e * t), n + s
}
const gf = [0, 0];

function yf(t, e, n, s) {
    let i = Array.isArray(t) ? t : gf,
        o = 0,
        r = 0;
    return typeof t == "number" ? i = [t, t] : typeof t == "string" && (t = t.trim(), t.includes(" ") ? i = t.split(" ") : i = [t, xn[t] ? t : "0"]), o = Ai(i[0], n, s), r = Ai(i[1], e), o - r
}
const vf = {
        All: [
            [0, 0],
            [1, 1]
        ]
    },
    Tf = {
        x: 0,
        y: 0
    };

function xf(t) {
    return "getBBox" in t && t.tagName !== "svg" ? t.getBBox() : {
        width: t.clientWidth,
        height: t.clientHeight
    }
}

function Sf(t, e, n) {
    const {
        offset: s = vf.All
    } = n, {
        target: i = t,
        axis: o = "y"
    } = n, r = o === "y" ? "height" : "width", u = i !== t ? mf(i, t) : Tf, l = i === t ? {
        width: t.scrollWidth,
        height: t.scrollHeight
    } : xf(i), a = {
        width: t.clientWidth,
        height: t.clientHeight
    };
    e[o].offset.length = 0;
    let c = !e[o].interpolate;
    const f = s.length;
    for (let d = 0; d < f; d++) {
        const p = yf(s[d], a[r], l[r], u[o]);
        !c && p !== e[o].interpolatorOffsets[d] && (c = !0), e[o].offset[d] = p
    }
    c && (e[o].interpolate = Bn(e[o].offset, sr(s), {
        clamp: !1
    }), e[o].interpolatorOffsets = [...e[o].offset]), e[o].progress = it(0, 1, e[o].interpolate(e[o].current))
}

function wf(t, e = t, n) {
    if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
        let s = e;
        for (; s && s !== t;) n.x.targetOffset += s.offsetLeft, n.y.targetOffset += s.offsetTop, s = s.offsetParent
    }
    n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
}

function Pf(t, e, n, s = {}) {
    return {
        measure: i => {
            wf(t, s.target, n), pf(t, n, i), (s.offset || s.target) && Sf(t, n, s)
        },
        notify: () => e(n)
    }
}
const jt = new WeakMap,
    Ei = new WeakMap,
    qe = new WeakMap,
    Ci = t => t === document.scrollingElement ? window : t;

function mo(t, {
    container: e = document.scrollingElement,
    ...n
} = {}) {
    if (!e) return q;
    let s = qe.get(e);
    s || (s = new Set, qe.set(e, s));
    const i = hf(),
        o = Pf(e, t, i, n);
    if (s.add(o), !jt.has(e)) {
        const u = () => {
                for (const f of s) f.measure(H.timestamp);
                k.preUpdate(l)
            },
            l = () => {
                for (const f of s) f.notify()
            },
            a = () => k.read(u);
        jt.set(e, a);
        const c = Ci(e);
        window.addEventListener("resize", a, {
            passive: !0
        }), e !== document.documentElement && Ei.set(e, wu(e, a)), c.addEventListener("scroll", a, {
            passive: !0
        }), a()
    }
    const r = jt.get(e);
    return k.read(r, !1, !0), () => {
        rt(r);
        const u = qe.get(e);
        if (!u || (u.delete(o), u.size)) return;
        const l = jt.get(e);
        jt.delete(e), l && (Ci(e).removeEventListener("scroll", l), Ei.get(e) ? .(), window.removeEventListener("resize", l))
    }
}
const bi = new Map;

function Af(t) {
    const e = {
            value: 0
        },
        n = mo(s => {
            e.value = s[t.axis].progress * 100
        }, t);
    return {
        currentTime: e,
        cancel: n
    }
}

function go({
    source: t,
    container: e,
    ...n
}) {
    const {
        axis: s
    } = n;
    t && (e = t);
    const i = bi.get(e) ? ? new Map;
    bi.set(e, i);
    const o = n.target ? ? "self",
        r = i.get(o) ? ? {},
        u = s + (n.offset ? ? []).join(",");
    return r[u] || (r[u] = !n.target && ar() ? new ScrollTimeline({
        source: e,
        axis: s
    }) : Af({
        container: e,
        ...n
    })), r[u]
}

function Ef(t, e) {
    const n = go(e);
    return t.attachTimeline({
        timeline: e.target ? void 0 : n,
        observe: s => (s.pause(), Er(i => {
            s.time = s.iterationDuration * i
        }, n))
    })
}

function Cf(t) {
    return t.length === 2
}

function bf(t, e) {
    return Cf(t) ? mo(n => {
        t(n[e.axis].progress, n)
    }, e) : Er(t, go(e))
}

function Rf(t, {
    axis: e = "y",
    container: n = document.scrollingElement,
    ...s
} = {}) {
    if (!n) return q;
    const i = {
        axis: e,
        container: n,
        ...s
    };
    return typeof t == "function" ? bf(t, i) : Ef(t, i)
}
const Vf = () => ({
        scrollX: st(0),
        scrollY: st(0),
        scrollXProgress: st(0),
        scrollYProgress: st(0)
    }),
    ce = t => t ? !t.current : !1;

function Kf({
    container: t,
    target: e,
    ...n
} = {}) {
    const s = mt(Vf),
        i = T.useRef(null),
        o = T.useRef(!1),
        r = T.useCallback(() => (i.current = Rf((u, {
            x: l,
            y: a
        }) => {
            s.scrollX.set(l.current), s.scrollXProgress.set(l.progress), s.scrollY.set(a.current), s.scrollYProgress.set(a.progress)
        }, { ...n,
            container: t ? .current || void 0,
            target: e ? .current || void 0
        }), () => {
            i.current ? .()
        }), [t, e, JSON.stringify(n.offset)]);
    return Ee(() => {
        if (o.current = !1, ce(t) || ce(e)) {
            o.current = !0;
            return
        } else return r()
    }, [r]), T.useEffect(() => {
        if (o.current) return Xt(!ce(t)), Xt(!ce(e)), r()
    }, [r]), s
}

function yo(t) {
    const e = mt(() => st(t)),
        {
            isStatic: n
        } = T.useContext(be);
    if (n) {
        const [, s] = T.useState(t);
        T.useEffect(() => e.on("change", s), [])
    }
    return e
}

function vo(t, e) {
    const n = yo(e()),
        s = () => n.set(e());
    return s(), Ee(() => {
        const i = () => k.preRender(s, !1, !0),
            o = t.map(r => r.on("change", i));
        return () => {
            o.forEach(r => r()), rt(s)
        }
    }), n
}

function Mf(t) {
    $t.current = [], t();
    const e = vo($t.current, t);
    return $t.current = void 0, e
}

function Df(t, e, n, s) {
    if (typeof t == "function") return Mf(t);
    const i = typeof e == "function" ? e : Au(e, n, s);
    return Array.isArray(t) ? Ri(t, i) : Ri([t], ([o]) => i(o))
}

function Ri(t, e) {
    const n = mt(() => []);
    return vo(t, () => {
        n.length = 0;
        const s = t.length;
        for (let i = 0; i < s; i++) n[i] = t[i].get();
        return e(n)
    })
}
const To = T.createContext(null);

function Lf(t, e, n, s) {
    if (!s) return t;
    const i = t.findIndex(c => c.value === e);
    if (i === -1) return t;
    const o = s > 0 ? 1 : -1,
        r = t[i + o];
    if (!r) return t;
    const u = t[i],
        l = r.layout,
        a = _(l.min, l.max, .5);
    return o === 1 && u.layout.max + n > a || o === -1 && u.layout.min + n < a ? Eo(t, i, i + o) : t
}

function kf({
    children: t,
    as: e = "ul",
    axis: n = "y",
    onReorder: s,
    values: i,
    ...o
}, r) {
    const u = mt(() => po[e]),
        l = [],
        a = T.useRef(!1),
        c = T.useRef(null),
        f = {
            axis: n,
            groupRef: c,
            registerItem: (m, v) => {
                const S = l.findIndex(g => m === g.value);
                S !== -1 ? l[S].layout = v[n] : l.push({
                    value: m,
                    layout: v[n]
                }), l.sort(If)
            },
            updateOrder: (m, v, S) => {
                if (a.current) return;
                const g = Lf(l, m, v, S);
                l !== g && (a.current = !0, s(g.map(Of).filter(w => i.indexOf(w) !== -1)))
            }
        };
    T.useEffect(() => {
        a.current = !1
    });
    const d = m => {
            c.current = m, typeof r == "function" ? r(m) : r && (r.current = m)
        },
        p = {
            overflowAnchor: "none",
            ...o.style
        };
    return tt.jsx(u, { ...o,
        style: p,
        ref: d,
        ignoreStrict: !0,
        children: tt.jsx(To.Provider, {
            value: f,
            children: t
        })
    })
}
const zf = T.forwardRef(kf);

function Of(t) {
    return t.value
}

function If(t, e) {
    return t.layout.min - e.layout.min
}
const fe = 50,
    Vi = 25,
    Bf = new Set(["auto", "scroll"]),
    Gt = new WeakMap,
    Yt = new WeakMap;
let Ut = null;

function _f() {
    if (Ut) {
        const t = Sn(Ut, "y");
        t && (Yt.delete(t), Gt.delete(t));
        const e = Sn(Ut, "x");
        e && e !== t && (Yt.delete(e), Gt.delete(e)), Ut = null
    }
}

function jf(t, e) {
    const n = getComputedStyle(t),
        s = e === "x" ? n.overflowX : n.overflowY;
    return Bf.has(s)
}

function Sn(t, e) {
    let n = t ? .parentElement;
    for (; n;) {
        if (jf(n, e)) return n;
        n = n.parentElement
    }
    return null
}

function Ff(t, e, n) {
    const s = e.getBoundingClientRect(),
        i = n === "x" ? s.left : s.top,
        o = n === "x" ? s.right : s.bottom,
        r = t - i,
        u = o - t;
    if (r < fe) {
        const l = 1 - r / fe;
        return {
            amount: -Vi * l * l,
            edge: "start"
        }
    } else if (u < fe) {
        const l = 1 - u / fe;
        return {
            amount: Vi * l * l,
            edge: "end"
        }
    }
    return {
        amount: 0,
        edge: null
    }
}

function Nf(t, e, n, s) {
    if (!t) return;
    Ut = t;
    const i = Sn(t, n);
    if (!i) return;
    const {
        amount: o,
        edge: r
    } = Ff(e, i, n);
    if (r === null) {
        Yt.delete(i), Gt.delete(i);
        return
    }
    if (Yt.get(i) !== r) {
        if (!(r === "start" && s < 0 || r === "end" && s > 0)) return;
        Yt.set(i, r);
        const a = n === "x" ? i.scrollWidth - i.clientWidth : i.scrollHeight - i.clientHeight;
        Gt.set(i, a)
    }
    if (o > 0) {
        const l = Gt.get(i);
        if ((n === "x" ? i.scrollLeft : i.scrollTop) >= l) return
    }
    n === "x" ? i.scrollLeft += o : i.scrollTop += o
}

function Mi(t, e = 0) {
    return $(t) ? t : yo(e)
}

function Uf({
    children: t,
    style: e = {},
    value: n,
    as: s = "li",
    onDrag: i,
    onDragEnd: o,
    layout: r = !0,
    ...u
}, l) {
    const a = mt(() => po[s]),
        c = T.useContext(To),
        f = {
            x: Mi(e.x),
            y: Mi(e.y)
        },
        d = Df([f.x, f.y], ([g, w]) => g || w ? 1 : "unset"),
        {
            axis: p,
            registerItem: m,
            updateOrder: v,
            groupRef: S
        } = c;
    return tt.jsx(a, {
        drag: p,
        ...u,
        dragSnapToOrigin: !0,
        style: { ...e,
            x: f.x,
            y: f.y,
            zIndex: d
        },
        layout: r,
        onDrag: (g, w) => {
            const {
                velocity: x,
                point: V
            } = w, C = f[p].get();
            v(n, C, x[p]), Nf(S.current, V[p], p, x[p]), i && i(g, w)
        },
        onDragEnd: (g, w) => {
            _f(), o && o(g, w)
        },
        onLayoutMeasure: g => {
            m(n, g)
        },
        ref: l,
        ignoreStrict: !0,
        children: t
    })
}
const Gf = T.forwardRef(Uf);
export {
    Hf as A, zf as R, Wf as a, T as b, Df as c, Gf as d, tt as j, po as m, Di as r, Kf as u
};