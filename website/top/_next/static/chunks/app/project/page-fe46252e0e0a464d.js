(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[880], {
    9848: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 5262)),
        Promise.resolve().then(r.t.bind(r, 8326, 23))
    },
    5262: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(7437)
          , o = r(2410)
          , l = r(1396)
          , s = r.n(l)
          , a = r(6691)
          , i = r.n(a)
          , c = r(2265);
        t.default = e=>{
            let {data: t} = e
              , {title: r, description: l, githubLink: a, slideshow: u, videoSrc: f} = t
              , [d,m] = (0,
            c.useState)(0);
            return (0,
            c.useEffect)(()=>{
                if (u && u.length > 0) {
                    let e = setTimeout(()=>{
                        m(e=>e === u.length - 1 ? 0 : e + 1)
                    }
                    , 4e3);
                    return ()=>clearTimeout(e)
                }
            }
            , [d, u]),
            (0,
            n.jsx)("div", {
                className: "flex flex-col justify-center items-center lg:gap-36 lg:py-10 sm:pt-10 pt-4",
                children: (0,
                n.jsxs)("div", {
                    className: "lg:w-8/12 w-10/12 flex flex-col gap-10 justify-center items-center",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-10 justify-center items-start",
                        "data-aos": "fade-up",
                        children: [(0,
                        n.jsx)("p", {
                            className: "sm:text-6xl text-4xl font-bold border-t-4 pt-10 border-lightGrayText",
                            children: r
                        }), (0,
                        n.jsx)("p", {
                            className: "text-md text-lightGrayText",
                            children: l
                        }), (0,
                        n.jsx)(s(), {
                            href: a,
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: (0,
                            n.jsxs)("p", {
                                className: "px-10 py-2 text-md text-cyan-400 border-2 border-cyan-400 flex flex-row gap-2 items-center cursor-pointer hover:bg-cyan-900 hover:bg-opacity-70 transition-all ease-in-out",
                                children: ["Github Link Here ", (0,
                                n.jsx)(o.$PT, {})]
                            })
                        })]
                    }), (0,
                    n.jsx)("div", {
                        children: u && (0,
                        n.jsx)("div", {
                            className: "flex lg:justify-start items-center sm:mt-6 mt-3",
                            "data-aos": "flip-up",
                            children: (0,
                            n.jsx)(i(), {
                                src: u[d],
                                width: 500,
                                height: 400,
                                alt: "slide",
                                className: "w-full lg:h-[500px] sm:rounded-lg"
                            })
                        })
                    }), f && (0,
                    n.jsx)("div", {
                        className: "flex lg:justify-end items-center sm:mt-6 mt-3",
                        "data-aos": "zoom-in",
                        children: (0,
                        n.jsx)("video", {
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            className: "z-10 w-full lg:h-[500px] sm:rounded-lg",
                            children: (0,
                            n.jsx)("source", {
                                src: f,
                                type: "video/mp4"
                            })
                        })
                    })]
                })
            })
        }
    },
    679: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            unstable_getImgProps: function() {
                return i
            },
            default: function() {
                return c
            }
        });
        let n = r(1024)
          , o = r(7929)
          , l = r(2637)
          , s = r(413)
          , a = n._(r(9950))
          , i = e=>{
            (0,
            l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
            let {props: t} = (0,
            o.getImgProps)(e, {
                defaultLoader: a.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,r] of Object.entries(t))
                void 0 === r && delete t[e];
            return {
                props: t
            }
        }
          , c = s.Image
    },
    622: function(e, t, r) {
        "use strict";
        var n = r(2265)
          , o = Symbol.for("react.element")
          , l = Symbol.for("react.fragment")
          , s = Object.prototype.hasOwnProperty
          , a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , i = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function c(e, t, r) {
            var n, l = {}, c = null, u = null;
            for (n in void 0 !== r && (c = "" + r),
            void 0 !== t.key && (c = "" + t.key),
            void 0 !== t.ref && (u = t.ref),
            t)
                s.call(t, n) && !i.hasOwnProperty(n) && (l[n] = t[n]);
            if (e && e.defaultProps)
                for (n in t = e.defaultProps)
                    void 0 === l[n] && (l[n] = t[n]);
            return {
                $$typeof: o,
                type: e,
                key: c,
                ref: u,
                props: l,
                _owner: a.current
            }
        }
        t.Fragment = l,
        t.jsx = c,
        t.jsxs = c
    },
    7437: function(e, t, r) {
        "use strict";
        e.exports = r(622)
    },
    6691: function(e, t, r) {
        e.exports = r(679)
    },
    1396: function(e, t, r) {
        e.exports = r(8326)
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
          , l = n.createContext && n.createContext(o)
          , s = function() {
            return (s = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , a = function(e, t) {
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
                return n.createElement(c, s({
                    attr: s({}, e.attr)
                }, t), function e(t) {
                    return t && t.map(function(t, r) {
                        return n.createElement(t.tag, s({
                            key: r
                        }, t.attr), e(t.child))
                    })
                }(e.child))
            }
        }
        function c(e) {
            var t = function(t) {
                var r, o = e.attr, l = e.size, i = e.title, c = a(e, ["attr", "size", "title"]), u = l || t.size || "1em";
                return t.className && (r = t.className),
                e.className && (r = (r ? r + " " : "") + e.className),
                n.createElement("svg", s({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, o, c, {
                    className: r,
                    style: s(s({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: u,
                    width: u,
                    xmlns: "http://www.w3.org/2000/svg"
                }), i && n.createElement("title", null, i), e.children)
            };
            return void 0 !== l ? n.createElement(l.Consumer, null, function(e) {
                return t(e)
            }) : t(o)
        }
    }
}, function(e) {
    e.O(0, [400, 326, 413, 971, 472, 744], function() {
        return e(e.s = 9848)
    }),
    _N_E = e.O()
}
]);