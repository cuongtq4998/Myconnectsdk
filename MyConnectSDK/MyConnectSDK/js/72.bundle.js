"use strict";
(self.webpackChunkmini_app = self.webpackChunkmini_app || []).push([
    [72], {
        2072: function (e, t, n) {
            n.r(t), n.d(t, {
                default: function () {
                    return E
                },
                embed: function () {
                    return R
                },
                parent: function () {
                    return M
                }
            });
            var t = n(5101),
                a = n.n(t),
                t = n(4585),
                s = n.n(t);

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e) {
                return function (e) {
                    if (Array.isArray(e)) return r(e)
                }(e) || function (e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function (e, t) {
                    if (e) {
                        if ("string" == typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function f(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(n) {
                var r = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var e, t = i(n);
                    return e = r ? (e = i(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== o(e) && "function" != typeof e ? function (e) {
                        if (void 0 !== e) return e;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(t) : e
                }
            }

            function i(e) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var d = 1,
                h = 2,
                m = 3,
                v = {
                    1: 'Not found the command "%s"',
                    2: "%s"
                },
                g = function () {
                    ! function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && p(e, t)
                    }(i, a());
                    var e, t, n, u, r, o = y(i);

                    function i() {
                        var e;
                        return function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (e = o.call(this))._commands = {}, e._promises = {}, e
                    }
                    return e = i, (t = [{
                        key: "_sendErr",
                        value: function (e, t) {
                            this._postMessage({
                                type: h,
                                id: e,
                                error: t
                            })
                        }
                    }, {
                        key: "_sendErrCode",
                        value: function (e, t, n) {
                            n = s().format(v[t], n);
                            this._sendErr(e, [t, n])
                        }
                    }, {
                        key: "_sendRes",
                        value: function (e, t) {
                            this._postMessage({
                                type: h,
                                id: e,
                                result: t
                            })
                        }
                    }, {
                        key: "_handleReq",
                        value: (u = regeneratorRuntime.mark(function e(t, n, r) {
                            var o, i;
                            return regeneratorRuntime.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = this._commands[n]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", this._sendErrCode(t, 1, n));
                                    case 3:
                                        return e.prev = 3, e.next = 6, o.apply(null, r);
                                    case 6:
                                        i = e.sent, this._sendRes(t, i), e.next = 14;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(3), this._sendErrCode(t, 2, e.t0.message), console.error(e.t0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [3, 10]
                            ])
                        }), r = function () {
                            var e = this,
                                a = arguments;
                            return new Promise(function (t, n) {
                                var r = u.apply(e, a);

                                function o(e) {
                                    f(r, t, n, o, i, "next", e)
                                }

                                function i(e) {
                                    f(r, t, n, o, i, "throw", e)
                                }
                                o(void 0)
                            })
                        }, function (e, t, n) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "_handleRes",
                        value: function (e, t, n) {
                            if (this._promises[e]) {
                                var r = this._promises[e],
                                    o = r.resolve,
                                    r = r.reject;
                                if (delete this._promises[e], n) return r(n);
                                o(t)
                            }
                        }
                    }, {
                        key: "_handleEvent",
                        value: function (e, t) {
                            this.emit.apply(this, [e].concat(c(t)))
                        }
                    }, {
                        key: "genId",
                        value: function () {
                            return Date.now().toString(36) + Math.round(9999999 * Math.random()).toString(36)
                        }
                    }, {
                        key: "onMessage",
                        value: function (e) {
                            if (!e || !e.id || ![d, h, m].includes(e.type)) return !1;
                            if (e.type == d && "string" == typeof e.command && Array.isArray(e.args)) this._handleReq(e.id, e.command, e.args);
                            else if (e.type == h) this._handleRes(e.id, e.result, e.error);
                            else {
                                if (e.type != m) return !1;
                                this._handleEvent(e.id, e.args)
                            }
                            return !0
                        }
                    }, {
                        key: "applyCmd",
                        value: function (r, o) {
                            var i = this;
                            return new Promise(function (e, t) {
                                var n = i.genId();
                                i._postMessage({
                                    type: d,
                                    id: n,
                                    command: r,
                                    args: o
                                }), i._promises[n] = {
                                    resolve: e,
                                    reject: t
                                }
                            })
                        }
                    }, {
                        key: "callCmd",
                        value: function (e) {
                            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            return this.applyCmd(e, n)
                        }
                    }, {
                        key: "fireEvent",
                        value: function (e) {
                            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            this._postMessage({
                                type: m,
                                id: e,
                                args: n
                            })
                        }
                    }, {
                        key: "portCmds",
                        value: function (e) {
                            var o = this;
                            e.forEach(function (r) {
                                o[r] || (o[r] = function () {
                                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                    return o.applyCmd(r, t)
                                })
                            })
                        }
                    }, {
                        key: "register",
                        value: function (e, t) {
                            if ("string" != typeof e) throw new Error('The param "command" must be a string');
                            if ("function" != typeof t) throw new Error('The param "callback" must be a function');
                            this._commands[e] = t
                        }
                    }, {
                        key: "extends",
                        value: function (t) {
                            var n = this;
                            Object.keys(t).forEach(function (e) {
                                return n.register(e, t[e])
                            }), this.fireEvent("extended", Object.keys(this._commands))
                        }
                    }]) && l(e.prototype, t), n && l(e, n), i
                }();
            events = {}, methods = {}, keys = {
                back: 8,
                enter: 13,
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                space: 32
            };

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        s = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function w(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function _(e, t) {
                return (_ = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function k(n) {
                var r = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var e, t = P(n);
                    return e = r ? (e = P(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments), t = this, !(e = e) || "object" !== u(e) && "function" != typeof e ? O(t) : e
                }
            }

            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var S, E = function () {
                    ! function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && _(e, t)
                    }(i, g);
                    var e, t, n, u, r, o = k(i);

                    function i(e) {
                        var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "*";
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = o.call(this)).target = e, t.origin = n;
                        try {
                            t.targetWindow = t.target.contentWindow || t.target
                        } catch (e) {
                            t.targetWindow = t.target
                        }
                        return t._handleMessages = t.handleMessages.bind(O(t)), t._init(), t
                    }
                    return e = i, t = [{
                        key: "_postMessage",
                        value: function (e) {
                            console.log(e)
                        }
                    }, {
                        key: "_handlePing",
                        value: function () {
                            var e = this;
                            clearTimeout(this._monitorAliveTimer), this._monitorAliveTimer = setTimeout(function () {
                                return e.emit("interrupted")
                            }, 12e3)
                        }
                    }, {
                        key: "_pingLoop",
                        value: function () {
                            var e = this;
                            this._pingIntervalTimer = setInterval(function () {
                                e._postMessage({
                                    id: Date.now(),
                                    type: 4
                                })
                            }, 3e3)
                        }
                    }, {
                        key: "getOS",
                        value: function () {
                            var e = window.navigator.userAgent,
                                t = (null === (t = window.navigator) || void 0 === t || null === (n = t.userAgentData) || void 0 === n ? void 0 : n.platform) || window.navigator.platform,
                                n = null;
                            return -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t) ? n = "Mac OS" : -1 !== ["iPhone", "iPad", "iPod"].indexOf(t) ? n = "iOS" : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t) ? n = "Windows" : /Android/.test(e) ? n = "Android" : /Linux/.test(t) && (n = "Linux"), n
                        }
                    }, {
                        key: "_init",
                        value: function () {
                            console.log("OS", this.getOS()), webkit.messageHandlers.gatewaySdk.postMessage({
                                someProp: "some value"
                            }), gatewaySdk.getMethods(), this.target === window.parent ? this._pingLoop() : this._handlePing(), this.fireEvent("loaded")
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            window.removeEventListener("message", this._handleMessages), clearInterval(this._pingIntervalTimer), clearTimeout(this._monitorAliveTimer)
                        }
                    }, {
                        key: "handleMessages",
                        value: (u = regeneratorRuntime.mark(function e(t) {
                            var n, r;
                            return regeneratorRuntime.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.data, r = t.source, n && '%}sP:Y85"D#6c@RM' == n.channel && r === this.targetWindow) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        this.onMessage(n) || 4 != n.type || this._handlePing();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }), r = function () {
                            var e = this,
                                a = arguments;
                            return new Promise(function (t, n) {
                                var r = u.apply(e, a);

                                function o(e) {
                                    b(r, t, n, o, i, "next", e)
                                }

                                function i(e) {
                                    b(r, t, n, o, i, "throw", e)
                                }
                                o(void 0)
                            })
                        }, function (e) {
                            return r.apply(this, arguments)
                        })
                    }], n = [{
                        key: "create",
                        value: function (e, t) {
                            var n = document.createElement("iframe");
                            return n.src = t, n.title = "FPT Play Embedder", n.setAttribute("frameborder", "0"), Object.assign(n.style, {
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%"
                            }), e.appendChild(n), new i(n)
                        }
                    }], t && w(e.prototype, t), n && w(e, n), i
                }(),
                M = function () {
                    return S = S || new E(window.parent)
                },
                R = function (e, t) {
                    return E.create(e, t)
                }
        }
    }
]);