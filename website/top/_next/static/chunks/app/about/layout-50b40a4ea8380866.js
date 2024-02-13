(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[841, 763, 348], {
    6797: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 6173))
    },
    6173: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(7437)
          , o = r(4033)
          , s = r(6468)
          , l = r(1396)
          , c = r.n(l);
        t.default = ()=>{
            let e = (0,
            o.useRouter)();
            return (0,
            n.jsx)("div", {
                className: "flex items-center justify-center gap-36 md:py-10 lg:py-16 py-3 px-4 sm:px-0",
                children: (0,
                n.jsxs)("div", {
                    className: "sm:w-9/12 w-full flex flex-row justify-between items-center",
                    children: [(0,
                    n.jsx)("p", {
                        className: "cursor-pointer",
                        onClick: ()=>{
                            e.back()
                        }
                        ,
                        children: (0,
                        n.jsx)(s.dUf, {
                            className: "text-4xl"
                        })
                    }), (0,
                    n.jsx)(c(), {
                        href: "/",
                        children: (0,
                        n.jsx)("p", {
                            className: "text-md border-b sm:p-2 border-lightGrayText cursor-pointer hover:text-lightGrayText ",
                            children: "Back to Home"
                        })
                    })]
                })
            })
        }
    },
    622: function(e, t, r) {
        "use strict";
        var n = r(2265)
          , o = Symbol.for("react.element")
          , s = Symbol.for("react.fragment")
          , l = Object.prototype.hasOwnProperty
          , c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , i = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function a(e, t, r) {
            var n, s = {}, a = null, u = null;
            for (n in void 0 !== r && (a = "" + r),
            void 0 !== t.key && (a = "" + t.key),
            void 0 !== t.ref && (u = t.ref),
            t)
                l.call(t, n) && !i.hasOwnProperty(n) && (s[n] = t[n]);
            if (e && e.defaultProps)
                for (n in t = e.defaultProps)
                    void 0 === s[n] && (s[n] = t[n]);
            return {
                $$typeof: o,
                type: e,
                key: a,
                ref: u,
                props: s,
                _owner: c.current
            }
        }
        t.Fragment = s,
        t.jsx = a,
        t.jsxs = a
    },
    7437: function(e, t, r) {
        "use strict";
        e.exports = r(622)
    },
    1396: function(e, t, r) {
        e.exports = r(8326)
    },
    4033: function(e, t, r) {
        e.exports = r(94)
    },
    1172: function(e, t, r) {
        "use strict";
        r.d(t, {
            w_: function() {
                return i
            }
        });
        var n = r(2265)
          , o = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , s = n.createContext && n.createContext(o)
          , l = function() {
            return (l = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , c = function(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            return r
        };
        function i(e) {
            return function(t) {
                return n.createElement(a, l({
                    attr: l({}, e.attr)
                }, t), function e(t) {
                    return t && t.map(function(t, r) {
                        return n.createElement(t.tag, l({
                            key: r
                        }, t.attr), e(t.child))
                    })
                }(e.child))
            }
        }
        function a(e) {
            var t = function(t) {
                var r, o = e.attr, s = e.size, i = e.title, a = c(e, ["attr", "size", "title"]), u = s || t.size || "1em";
                return t.className && (r = t.className),
                e.className && (r = (r ? r + " " : "") + e.className),
                n.createElement("svg", l({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, o, a, {
                    className: r,
                    style: l(l({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: u,
                    width: u,
                    xmlns: "http://www.w3.org/2000/svg"
                }), i && n.createElement("title", null, i), e.children)
            };
            return void 0 !== s ? n.createElement(s.Consumer, null, function(e) {
                return t(e)
            }) : t(o)
        }
    }
}, function(e) {
    e.O(0, [190, 326, 971, 472, 744], function() {
        return e(e.s = 6797)
    }),
    _N_E = e.O()
}
]);
