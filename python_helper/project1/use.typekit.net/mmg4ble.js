/* Copyright 2024 © Adobe Systems */
/*{"k":"1.10.1","auto_updating":true,"last_published":"2023-03-31 05:01:19 UTC"}*/
(function(config) {
    (function() {
        'use strict';
        var f, g = [];

        function l(a) {
            g.push(a);
            1 == g.length && f()
        }

        function m() {
            for (; g.length;) g[0](), g.shift()
        }
        f = function() {
            setTimeout(m)
        };

        function n(a) {
            this.a = p;
            this.b = void 0;
            this.f = [];
            var b = this;
            try {
                a(function(a) {
                    q(b, a)
                }, function(a) {
                    r(b, a)
                })
            } catch (c) {
                r(b, c)
            }
        }
        var p = 2;

        function t(a) {
            return new n(function(b, c) {
                c(a)
            })
        }

        function u(a) {
            return new n(function(b) {
                b(a)
            })
        }

        function q(a, b) {
            if (a.a == p) {
                if (b == a) throw new TypeError;
                var c = !1;
                try {
                    var d = b && b.then;
                    if (null != b && "object" == typeof b && "function" == typeof d) {
                        d.call(b, function(b) {
                            c || q(a, b);
                            c = !0
                        }, function(b) {
                            c || r(a, b);
                            c = !0
                        });
                        return
                    }
                } catch (e) {
                    c || r(a, e);
                    return
                }
                a.a = 0;
                a.b = b;
                v(a)
            }
        }

        function r(a, b) {
            if (a.a == p) {
                if (b == a) throw new TypeError;
                a.a = 1;
                a.b = b;
                v(a)
            }
        }

        function v(a) {
            l(function() {
                if (a.a != p)
                    for (; a.f.length;) {
                        var b = a.f.shift(),
                            c = b[0],
                            d = b[1],
                            e = b[2],
                            b = b[3];
                        try {
                            0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b))
                        } catch (h) {
                            b(h)
                        }
                    }
            })
        }
        n.prototype.g = function(a) {
            return this.c(void 0, a)
        };
        n.prototype.c = function(a, b) {
            var c = this;
            return new n(function(d, e) {
                c.f.push([a, b, d, e]);
                v(c)
            })
        };

        function w(a) {
            return new n(function(b, c) {
                function d(c) {
                    return function(d) {
                        h[c] = d;
                        e += 1;
                        e == a.length && b(h)
                    }
                }
                var e = 0,
                    h = [];
                0 == a.length && b(h);
                for (var k = 0; k < a.length; k += 1) u(a[k]).c(d(k), c)
            })
        }

        function x(a) {
            return new n(function(b, c) {
                for (var d = 0; d < a.length; d += 1) u(a[d]).c(b, c)
            })
        };
        window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
    }());

    (function() {
        function n(a, b) {
            -1 === a.className.split(/\s+/).indexOf(b) && (a.className += " " + b)
        }

        function aa(a, b) {
            if (-1 !== a.className.split(/\s+/).indexOf(b)) {
                var c = a.className.split(/\s+/);
                c.splice(c.indexOf(b), 1);
                a.className = c.join(" ")
            }
        }

        function ba(a, b) {
            document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b)
        }

        function ca(a) {
            document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
                document.removeEventListener("DOMContentLoaded", c);
                a()
            }) : document.attachEvent("onreadystatechange", function d() {
                if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", d), a()
            })
        };

        function da(a) {
            this.g = document.createElement("div");
            this.g.setAttribute("aria-hidden", "true");
            this.g.appendChild(document.createTextNode(a));
            this.i = document.createElement("span");
            this.m = document.createElement("span");
            this.D = document.createElement("span");
            this.o = document.createElement("span");
            this.A = -1;
            this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.m.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.o.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.D.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
            this.i.appendChild(this.D);
            this.m.appendChild(this.o);
            this.g.appendChild(this.i);
            this.g.appendChild(this.m)
        }

        function u(a, b) {
            a.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";"
        }

        function ea(a) {
            var b = a.g.offsetWidth,
                c = b + 100;
            a.o.style.width = c + "px";
            a.m.scrollLeft = c;
            a.i.scrollLeft = a.i.scrollWidth + 100;
            return a.A !== b ? (a.A = b, !0) : !1
        }

        function fa(a, b) {
            function c() {
                var e = d;
                ea(e) && null !== e.g.parentNode && b(e.A)
            }
            var d = a;
            ba(a.i, c);
            ba(a.m, c);
            ea(a)
        };

        function ka() {
            var a = {};
            this.family = "_fff_";
            this.style = a.style || "normal";
            this.weight = a.weight || "normal";
            this.stretch = a.stretch || "normal"
        }
        var la = null,
            ma = null,
            na = null,
            oa = null;

        function pa() {
            if (null === ma)
                if (qa() && /Apple/.test(window.navigator.vendor)) {
                    var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    ma = !!a && 603 > parseInt(a[1], 10)
                } else ma = !1;
            return ma
        }

        function qa() {
            null === oa && (oa = !!document.fonts);
            return oa
        }

        function v(a, b) {
            var c = a.style,
                d = a.weight;
            if (null === na) {
                var e = document.createElement("div");
                try {
                    e.style.font = "condensed 100px sans-serif"
                } catch (f) {}
                na = "" !== e.style.font
            }
            return [c, d, na ? a.stretch : "", "100px", b].join(" ")
        }
        ka.prototype.load = function(a, b) {
            var c = this,
                d = a || "BESbswy",
                e = 0,
                f = b || 3E3,
                g = (new Date).getTime();
            return new Promise(function(h, k) {
                if (qa() && !pa()) {
                    var q = new Promise(function(m, r) {
                            function p() {
                                (new Date).getTime() - g >= f ? r() : document.fonts.load(v(c, '"' + c.family + '"'), d).then(function(t) {
                                    1 <= t.length ? m() : setTimeout(p, 25)
                                }, function() {
                                    r()
                                })
                            }
                            p()
                        }),
                        V = new Promise(function(m, r) {
                            e = setTimeout(r, f)
                        });
                    Promise.race([V, q]).then(function() {
                        clearTimeout(e);
                        h(c)
                    }, function() {
                        k(c)
                    })
                } else ca(function() {
                    function m() {
                        var l;
                        if (l = -1 != w && -1 != z || -1 != w && -1 != A || -1 != z && -1 != A)(l = w != z && w != A && z != A) || (null === la && (l = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), la = !!l && (536 > parseInt(l[1], 10) || 536 === parseInt(l[1], 10) && 11 >= parseInt(l[2], 10))), l = la && (w == ha && z == ha && A == ha || w == ia && z == ia && A == ia || w == ja && z == ja && A == ja)), l = !l;
                        l && (null !== x.parentNode && x.parentNode.removeChild(x), clearTimeout(e), h(c))
                    }

                    function r() {
                        if ((new Date).getTime() - g >= f) null !== x.parentNode && x.parentNode.removeChild(x), k(c);
                        else {
                            var l = document.hidden;
                            if (!0 === l || void 0 === l) w = p.g.offsetWidth, z = t.g.offsetWidth, A = B.g.offsetWidth, m();
                            e = setTimeout(r, 50)
                        }
                    }
                    var p = new da(d),
                        t = new da(d),
                        B = new da(d),
                        w = -1,
                        z = -1,
                        A = -1,
                        ha = -1,
                        ia = -1,
                        ja = -1,
                        x = document.createElement("div");
                    x.dir = "ltr";
                    u(p, v(c, "sans-serif"));
                    u(t, v(c, "serif"));
                    u(B, v(c, "monospace"));
                    x.appendChild(p.g);
                    x.appendChild(t.g);
                    x.appendChild(B.g);
                    document.body.appendChild(x);
                    ha = p.g.offsetWidth;
                    ia = t.g.offsetWidth;
                    ja = B.g.offsetWidth;
                    r();
                    fa(p, function(l) {
                        w = l;
                        m()
                    });
                    u(p, v(c, '"' + c.family + '",sans-serif'));
                    fa(t, function(l) {
                        z =
                            l;
                        m()
                    });
                    u(t, v(c, '"' + c.family + '",serif'));
                    fa(B, function(l) {
                        A = l;
                        m()
                    });
                    u(B, v(c, '"' + c.family + '",monospace'))
                })
            })
        };
        var ra = null;

        function sa() {
            if (!ra) {
                if (/MSIE|Trident/.test(navigator.userAgent)) return Promise.resolve(["woff", "opentype", "truetype"]);
                var a = document.createElement("style"),
                    b = document.getElementsByTagName("head")[0];
                a.appendChild(document.createTextNode('@font-face{font-family:"_fff_";src:url(data:font/woff2;base64,d09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAciuMTaGVo8IaqBbcKPeB3CyAAIO4unr9nb72QE3p00iGQQIZcAAcAMEJOztBx7zdWVWn//BAPW1l0BN429cPrCPE75MA637gPs0DjavNxzHtWeXXErKIV3AF9TbHqCTOATL2BgjeIH30lQwSAonU1LabV8Iz12wDvgd/obV5QVxXDKvUhW1QfWNrS6HzEQJaP4tBA==) format("woff2"),url(data:application/font-woff;base64,d09GRgABAAAAAAHgAAoAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABUAAAABcAAABOBIQEIWNtYXAAAAFwAAAAJgAAACwADABzZ2x5ZgAAAaAAAAAUAAAAFAwBPQJoZWFkAAAA9AAAAC0AAAA2CHEB92hoZWEAAAEkAAAAFgAAACQMAQgDaG10eAAAAWgAAAAIAAAACAgAAABsb2NhAAABmAAAAAYAAAAGAAoAAG1heHAAAAE8AAAAEwAAACAABAACbmFtZQAAAbQAAAAeAAAAIAAjCF5wb3N0AAAB1AAAAAwAAAAgAAMAAHgBY2BkYABhb81vuvH8Nl8ZmFgYQOBCWvVrMP3VURxEczBAxBmYQAQAAFIIBgAAAHgBY2BkYGBhAAEOKAkUQQVMAAJKABkAAHgBY2BkYGBgAkIgjQ0AAAC+AAcAeAFjAIEUBkYGcoECgwILmAEiASBRAK4AAAAAAAgAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoQgvsP//xDy/0EwnwEATX4GfAAAAAAAAAAKAAAAAQAAAAAIAAQAAAEAADEBCAAEAHgBY2BgYGKQY2BmYGThZGAEshmgbCYw2wEABjMAigAAeAFjYGbACwAAfQAE) format("woff")}'));
                b.appendChild(a);
                ra = (new ka).load("@", 5E3).then(function() {
                    var c = new da("@"),
                        d = ["opentype", "truetype"];
                    u(c, "_fff_");
                    document.body.appendChild(c.g);
                    var e = c.g.offsetWidth;
                    200 <= e && d.unshift("woff");
                    300 == e && d.unshift("woff2");
                    b.removeChild(a);
                    document.body.removeChild(c.g);
                    return d
                }, function() {
                    return ["opentype", "truetype"]
                })
            }
            return ra
        };

        function ta(a) {
            for (var b = /\burl\(('|"|)([^'"]+?)\1\)( format\(('|"|)([^'"]+?)\4\))?/g, c, d = []; c = b.exec(a);) c[2] && d.push({
                url: c[2],
                format: c[5]
            });
            return d
        };

        function ua(a, b) {
            this.status = b.status;
            this.ok = 200 <= b.status && 300 > b.status || 0 === b.status;
            this.statusText = b.statusText;
            this.body = a
        }
        ua.prototype.arrayBuffer = function() {
            return Promise.resolve(this.body)
        };
        var va = !(window.XDomainRequest && !("responseType" in XMLHttpRequest.prototype));

        function wa(a) {
            var b = {};
            return new Promise(function(c, d) {
                if (va) {
                    var e = new XMLHttpRequest;
                    e.onload = function() {
                        c(new ua(e.response, {
                            status: e.status,
                            statusText: e.statusText
                        }))
                    };
                    e.onerror = function() {
                        d(new TypeError("Network request failed"))
                    };
                    e.open("GET", a);
                    e.responseType = "arraybuffer";
                    b && Object.keys(b).forEach(function(f) {
                        e.setRequestHeader(f, b[f])
                    });
                    e.send(null)
                } else e = new XDomainRequest, e.open("GET", a.replace(/^http(s)?:/i, window.location.protocol)), e.ontimeout = function() {
                        return !0
                    }, e.onprogress = function() {
                        return !0
                    },
                    e.onload = function() {
                        c(new ua(e.responseText, {
                            status: e.status,
                            statusText: e.statusText
                        }))
                    }, e.onerror = function() {
                        d(new TypeError("Network request failed"))
                    }, setTimeout(function() {
                        e.send(null)
                    }, 0)
            })
        };

        function xa(a, b, c) {
            var d = this,
                e = c || {};
            this.source = b;
            this.m = null;
            this.g = [];
            this.promise = new Promise(function(f, g) {
                d.A = f;
                d.o = g
            });
            this.u = "unloaded";
            this.i = null;
            Object.defineProperties(this, {
                family: {
                    get: function() {
                        return a
                    }
                },
                style: {
                    get: function() {
                        return e.style || "normal"
                    }
                },
                weight: {
                    get: function() {
                        return e.weight || "normal"
                    }
                },
                stretch: {
                    get: function() {
                        return e.stretch || "normal"
                    }
                },
                display: {
                    get: function() {
                        return e.display || "auto"
                    }
                },
                unicodeRange: {
                    get: function() {
                        return e.unicodeRange || "U+0-10FFFF"
                    }
                },
                variant: {
                    get: function() {
                        return e.variant ||
                            "normal"
                    }
                },
                featureSettings: {
                    get: function() {
                        return e.featureSettings || "normal"
                    }
                },
                status: {
                    get: function() {
                        return this.u
                    }
                },
                loaded: {
                    get: function() {
                        return this.promise
                    }
                }
            });
            "string" === typeof b ? this.g = ta(b) : (this.m = b, this.u = "loaded", this.A(d))
        }
        var y = null;

        function ya(a, b) {
            for (var c = null, d = 0; d < b.length; d++)
                for (var e = 0; e < a.g.length; e++)
                    if (b[d] === a.g[e].format && null === c) {
                        c = a.g[e].url;
                        break
                    }
            c || 0 === b.length || (c = a.g[0].url);
            return c
        }
        xa.prototype.load = function() {
            var a = this;
            "unloaded" === a.u && (a.u = "loading", sa().then(function(b) {
                (b = ya(a, b)) ? wa(b).then(function(c) {
                    if (c.ok) return c.arrayBuffer();
                    throw c;
                }).then(function(c) {
                    a.m = c;
                    a.u = "loaded";
                    a.A(a)
                }).catch(function() {
                    a.u = "error";
                    a.o(a)
                }): (a.u = "error", a.o(a))
            }).catch(function() {
                a.u = "error";
                a.o(a)
            }));
            return this.promise
        };
        var C = document.createElement("div");

        function za(a) {
            C.style.cssText = "font:" + a;
            if (C.style.fontFamily) {
                a: {
                    a = C.style.fontFamily;
                    for (var b = "", c = [], d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        if ("'" === e || '"' === e) {
                            b = d + 1;
                            do
                                if (b = a.indexOf(e, b) + 1, !b) {
                                    a = null;
                                    break a
                                }
                            while ("\\" === a.charAt(b - 2));
                            c.push(a.slice(d + 1, b - 1));
                            d = b - 1;
                            b = ""
                        } else "," === e ? (b = b.trim(), "" !== b && (c.push(b), b = "")) : b += e
                    }
                    b = b.trim();
                    "" !== b && c.push(b);a = c
                }
                if (a) return {
                    size: C.style.fontSize,
                    lineHeight: C.style.lineHeight || "normal",
                    style: C.style.fontStyle || "normal",
                    variant: C.style.fontVariant ||
                        "normal",
                    weight: C.style.fontWeight || "normal",
                    stretch: C.style.fontStretch || "normal",
                    family: a
                }
            }
            return null
        };

        function D() {
            this.fonts = [];
            this.u = "loaded";
            Object.defineProperties(this, {
                status: {
                    get: function() {
                        return this.u
                    }
                },
                size: {
                    get: function() {
                        return this.fonts.length
                    }
                }
            })
        }
        D.prototype.add = function(a) {
            if (!this.has(a)) {
                y || (y = document.createElement("style"), document.head.appendChild(y));
                if ("loaded" === a.u) {
                    var b = new Uint8Array(a.m);
                    for (var c = "", d = 0; d < b.length; d++) c += String.fromCharCode(b[d]);
                    b = "url(data:font/opentype;base64," + btoa(c) + ")"
                } else b = a.source;
                y.sheet.insertRule('@font-face{font-family:"' + a.family + '";font-style:' + a.style + ";font-weight:" + a.weight + ";font-display:" + a.display + ";src:" + b + ";}", 0);
                a.i = y.sheet.cssRules[0];
                this.fonts.push(a)
            }
        };
        D.prototype["delete"] = function(a) {
            var b = this.fonts.indexOf(a);
            if (-1 !== b) {
                if (y && a.i)
                    for (var c = 0; c < y.sheet.cssRules.length; c++)
                        if (a.i === y.sheet.cssRules[c]) {
                            y.sheet.deleteRule(c);
                            a.i = null;
                            break
                        }
                this.fonts.splice(b, 1);
                return !0
            }
            return !1
        };
        D.prototype.clear = function() {
            this.fonts = []
        };
        D.prototype.has = function(a) {
            return -1 !== this.fonts.indexOf(a)
        };
        D.prototype.forEach = function(a) {
            var b = this;
            this.fonts.forEach(function(c, d) {
                a(c, d, b)
            })
        };

        function Aa(a, b) {
            function c(e) {
                return "bold" === e ? 700 : "normal" === e ? 400 : e
            }
            var d = za(b);
            return null === d ? null : a.fonts.filter(function(e) {
                for (var f = d.family, g = 0; g < f.length; g++)
                    if (e.family === f[g] && e.style === d.style && e.stretch === d.stretch && c(e.weight) === c(d.weight)) return !0;
                return !1
            })
        }
        D.prototype.load = function(a) {
            var b = this,
                c = Aa(this, a);
            return null === c ? Promise.reject([]) : c.length ? (b.u = "loading", Promise.all(c.map(function(d) {
                return d.load()
            })).then(function() {
                b.u = "loaded";
                return c
            }).catch(function() {
                b.u = "loaded";
                return c
            })) : Promise.resolve([])
        };
        D.prototype.check = function(a) {
            a = Aa(this, a);
            if (0 === a.length) return !1;
            for (var b = 0; b < a.length; b++)
                if ("loaded" !== a[b].status) return !1;
            return !0
        };
        if (window.FontFace) E = window.FontFace, E.prototype.load = window.FontFace.prototype.load, F = document.fonts;
        else {
            var E = xa;
            E.prototype.load = xa.prototype.load;
            var F = new D
        };

        function G(a, b) {
            return (a & 65535) * b + (((a >>> 16) * b & 65535) << 16)
        }

        function Ba(a, b) {
            a = G(a & 4294967295, 3432918353);
            a = G(a << 15 | a >>> 17, 461845907);
            b = (b || 0) ^ a;
            b = G(b << 13 | b >>> 19, 5) + 3864292196;
            b ^= 4;
            b = G(b ^ b >>> 16, 2246822507);
            b = G(b ^ b >>> 13, 3266489909);
            return (b ^ b >>> 16) >>> 0
        }

        function Ca(a, b) {
            b = b || 0;
            var c, d = a.length % 4,
                e = a.length - d;
            for (c = 0; c < e; c += 4) {
                var f = (a.charCodeAt(c) & 4294967295) << 0 | (a.charCodeAt(c + 1) & 4294967295) << 8 | (a.charCodeAt(c + 2) & 4294967295) << 16 | (a.charCodeAt(c + 3) & 4294967295) << 24;
                f = G(f, 3432918353);
                f = f << 15 | f >>> 17;
                f = G(f, 461845907);
                b ^= f;
                b = b << 13 | b >>> 19;
                b = G(b, 5) + 3864292196
            }
            f = 0;
            switch (d) {
                case 3:
                    f ^= (a.charCodeAt(c + 2) & 4294967295) << 16;
                case 2:
                    f ^= (a.charCodeAt(c + 1) & 4294967295) << 8;
                case 1:
                    f ^= (a.charCodeAt(c) & 4294967295) << 0, f = G(f, 3432918353), f = G(f << 15 | f >>> 17, 461845907), b ^= f
            }
            b ^=
                a.length;
            b = G(b ^ b >>> 16, 2246822507);
            b = G(b ^ b >>> 13, 3266489909);
            return (b ^ b >>> 16) >>> 0
        };

        function Da(a) {
            this.values = Array(Math.ceil(a / 32));
            this.size = a;
            for (a = 0; a < this.values.length; a++) this.values[a] = 0
        }
        Da.prototype.set = function(a) {
            if (Math.floor(a / 32 + 1) > this.values.length) throw Error("Index is out of bounds.");
            var b = Math.floor(a / 32);
            this.values[b] |= 1 << a - 32 * b
        };
        Da.prototype.has = function(a) {
            if (Math.floor(a / 32 + 1) > this.values.length) throw Error("Index is out of bounds.");
            var b = Math.floor(a / 32);
            return !!(this.values[b] & 1 << a - 32 * b)
        };

        function Ea(a, b) {
            this.size = a;
            this.g = b;
            this.data = new Da(a)
        }
        var H = [2449897292, 4218179547, 2675077685, 1031960064, 1478620578, 1386343184, 3194259988, 2656050674, 3012733295, 2193273665];
        Ea.prototype.add = function(a) {
            if ("string" !== typeof a && "number" !== typeof a) throw Error("Value should be a string or number.");
            for (var b = "number" === typeof a, c = 0; c < this.g; c++) this.data.set(b ? Ba(a, H[c]) % this.size : Ca(a, H[c]) % this.size)
        };
        Ea.prototype.has = function(a) {
            if ("string" !== typeof a && "number" !== typeof a) throw Error("Value should be a string or number.");
            for (var b = "number" === typeof a, c = 0; c < this.g; c++)
                if (!this.data.has(b ? Ba(a, H[c]) % this.size : Ca(a, H[c]) % this.size)) return !1;
            return !0
        };

        function Fa(a) {
            a = [a.size, a.g].concat(a.data.values);
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a[c];
                b += String.fromCharCode((d & 4278190080) >>> 24) + String.fromCharCode((d & 16711680) >>> 16) + String.fromCharCode((d & 65280) >>> 8) + String.fromCharCode((d & 255) >>> 0)
            }
            a = b;
            b = "";
            if (window.btoa) b = window.btoa(a);
            else {
                d = 0;
                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; a.charAt(d | 0) || (e = "=", d % 1); b += e.charAt(63 & f >> 8 - d % 1 * 8)) {
                    c = a.charCodeAt(d += .75);
                    if (255 < c) throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    var f = f << 8 | c
                }
            }
            return b.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
        };

        function I(a, b, c, d) {
            this.unicode = a;
            this.features = b || [];
            this.g = c || null;
            this.i = d || null
        }
        I.prototype.get = function(a) {
            var b = Ga(this);
            var c = "";
            if (null !== this.g)
                for (var d = new Uint8Array(this.g.buffer, this.g.byteOffset, this.g.byteLength), e = 0; e < d.byteLength; e++) 0 !== d[e] && (c += String.fromCharCode(d[e]));
            c = c.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
            d = Ha(this);
            return "" !== c ? {
                format: a,
                unicode: b,
                gdyn: c,
                v: "3"
            } : {
                format: a,
                unicode: b,
                features: d,
                v: "3"
            }
        };

        function Ga(a) {
            if (a.unicode.length) {
                var b = Math.min(Math.ceil(Math.log(.01) * (a.unicode.length || 1) / Math.log(1 / Math.pow(2, Math.log(2)))), 9586),
                    c = new Ea(b, Math.max(Math.min(Math.round(Math.log(2) * b / (a.unicode.length || 1)), H.length), 1));
                a.unicode.forEach(function(d) {
                    c.add(d)
                });
                return Fa(c)
            }
            return "AAAAAQAAAAEAAAAB"
        }

        function Ha(a) {
            return a.features.length ? a.features.map(function(b) {
                return b.trim()
            }).join(",") : "NONE"
        };

        function Ia() {
            this.keys = [];
            this.g = [];
            var a = 0,
                b = 2,
                c;
            a: for (; 64 > a; b++) {
                for (c = 2; c * c <= b; c++)
                    if (0 === b % c) continue a;
                8 > a && (this.g[a] = Ja(Math.pow(b, .5)));
                this.keys[a] = Ja(Math.pow(b, 1 / 3));
                a++
            }
        }
        Ia.prototype.hash = function(a) {
            var b = this.keys.slice(0),
                c = this.g.slice(0);
            a += String.fromCharCode(128);
            for (var d = Math.ceil((a.length / 4 + 2) / 16), e = Array(d), f = 0; f < d; f++) {
                e[f] = Array(16);
                for (var g = 0; 16 > g; g++) e[f][g] = a.charCodeAt(64 * f + 4 * g) << 24 | a.charCodeAt(64 * f + 4 * g + 1) << 16 | a.charCodeAt(64 * f + 4 * g + 2) << 8 | a.charCodeAt(64 * f + 4 * g + 3)
            }
            e[d - 1][14] = 8 * (a.length - 1) / Math.pow(2, 32);
            e[d - 1][14] = Math.floor(e[d - 1][14]);
            e[d - 1][15] = 8 * (a.length - 1) & 4294967295;
            a = Array(64);
            for (f = 0; f < d; f++) {
                for (g = 0; 16 > g; g++) a[g] = e[f][g];
                for (g = 16; 64 > g; g++) {
                    var h =
                        a[g - 15];
                    var k = a[g - 2];
                    a[g] = (J(17, k) ^ J(19, k) ^ k >>> 10) + a[g - 7] + (J(7, h) ^ J(18, h) ^ h >>> 3) + a[g - 16] & 4294967295
                }
                h = c[0];
                k = c[1];
                var q = c[2];
                var V = c[3];
                var m = c[4];
                var r = c[5];
                var p = c[6];
                var t = c[7];
                for (g = 0; 64 > g; g++) {
                    var B = t + (J(6, m) ^ J(11, m) ^ J(25, m)) + (m & r ^ ~m & p) + b[g] + a[g],
                        w = (J(2, h) ^ J(13, h) ^ J(22, h)) + (h & k ^ h & q ^ k & q);
                    t = p;
                    p = r;
                    r = m;
                    m = V + B & 4294967295;
                    V = q;
                    q = k;
                    k = h;
                    h = B + w & 4294967295
                }
                c[0] = c[0] + h & 4294967295;
                c[1] = c[1] + k & 4294967295;
                c[2] = c[2] + q & 4294967295;
                c[3] = c[3] + V & 4294967295;
                c[4] = c[4] + m & 4294967295;
                c[5] = c[5] + r & 4294967295;
                c[6] = c[6] + p &
                    4294967295;
                c[7] = c[7] + t & 4294967295
            }
            return K(c[0]) + K(c[1]) + K(c[2]) + K(c[3]) + K(c[4]) + K(c[5]) + K(c[6]) + K(c[7])
        };

        function J(a, b) {
            return b >>> a | b << 32 - a
        }

        function Ja(a) {
            return 4294967296 * (a - Math.floor(a)) | 0
        }

        function K(a) {
            for (var b = "", c, d = 7; 0 <= d; d--) c = a >>> 4 * d & 15, b += c.toString(16);
            return b
        };

        function Ka(a) {
            this.g = a
        }

        function L(a, b) {
            return a.g.replace(/\{([^\{\}]+)\}/g, function(c, d) {
                if ("?" == d.charAt(0)) {
                    c = d.slice(1).split(",");
                    d = [];
                    for (var e = 0; e < c.length; e++) b.hasOwnProperty(c[e]) && d.push(c[e] + "=" + encodeURIComponent(b[c[e]]));
                    return d.length ? "?" + d.join("&") : ""
                }
                return b.hasOwnProperty(d) ? encodeURIComponent(b[d]) : ""
            })
        };
        var La = !(window.XDomainRequest && !("responseType" in XMLHttpRequest.prototype));

        function M(a, b) {
            return new Promise(function(c, d) {
                var e = b || {
                    method: "GET",
                    headers: {},
                    body: null
                };
                if (La) {
                    var f = new XMLHttpRequest;
                    f.onload = function() {
                        c({
                            body: f.response,
                            status: f.status,
                            statusText: f.statusText
                        })
                    };
                    f.onerror = function() {
                        d(Error("Network request failed"))
                    };
                    f.open(e.method, a, !0);
                    f.responseType = "arraybuffer";
                    e.headers && Object.keys(e.headers).forEach(function(g) {
                        f.setRequestHeader(g, e.headers[g])
                    });
                    f.send(e.body)
                } else f = new XDomainRequest, f.open(e.method, a.replace(/^http(s)?:/i, window.location.protocol)),
                    f.ontimeout = function() {
                        return !0
                    }, f.onprogress = function() {
                        return !0
                    }, f.onload = function() {
                        c({
                            body: null,
                            status: f.status,
                            statusText: f.statusText
                        })
                    }, f.onerror = function() {
                        d(Error("Network request failed"))
                    }, setTimeout(function() {
                        f.send(e.body)
                    }, 0)
            })
        };

        function Ma(a, b, c) {
            this.unicode = a;
            this.features = b || [];
            this.g = c || null;
            this.i = null
        }
        var Na = {};
        Ma.prototype.create = function() {
            var a = this,
                b = Oa(a),
                c = new Ka(window.Typekit.config.primer);
            Na[b] || (Na[b] = new Promise(function(d, e) {
                var f = L(c, {
                    primer: Oa(a)
                });
                M(f, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: Pa(a)
                }).then(function(g) {
                    200 === g.status ? d(b) : e('Failed to create primer "' + f + '": ' + g.status)
                }).catch(function(g) {
                    e(g)
                })
            }));
            return Na[b]
        };

        function Qa(a) {
            var b = "";
            a = new Uint8Array(a.g.buffer, a.g.byteOffset, a.g.byteLength);
            for (var c = 0; c < a.byteLength; c++) b += String.fromCharCode(a[c]);
            return btoa(b)
        }

        function Ra(a) {
            return a.features.length ? a.features.map(function(b) {
                return b.trim()
            }).join(",") : "NONE"
        }

        function Pa(a) {
            var b = "version=1.0&unicode=" + encodeURIComponent(a.unicode.join(","));
            return b = a.g ? b + ("&dyna=" + encodeURIComponent(Qa(a))) : b + ("&features=" + encodeURIComponent(Ra(a)))
        }

        function Oa(a) {
            if (null === a.i) {
                var b = {
                    version: "1.0",
                    unicode: a.unicode.join(",")
                };
                a.g ? b.dyna = Qa(a) : b.features = Ra(a);
                a.i = (new Ia).hash(JSON.stringify(b))
            }
            return a.i
        };

        function Sa(a) {
            return a.map(function(b) {
                return "U+" + b.toString(16)
            }).join(",")
        };

        function N(a) {
            this.values = a || []
        }
        N.prototype.C = function() {
            for (var a = {}, b = 0; b < this.values.length; b++) a[this.values[b]] = this.values[b];
            return Object.keys(a).map(function(c) {
                return a[c]
            }).sort(function(c, d) {
                return c - d
            })
        };

        function Ta(a, b) {
            for (var c = {}, d = new N, e = 0; e < a.values.length; e++) c[a.values[e]] = !0;
            for (e = 0; e < b.values.length; e++) c[b.values[e]] || d.values.push(b.values[e]);
            return d
        }

        function Ua(a, b) {
            for (var c = {}, d = new N, e = 0; e < a.values.length; e++) c[a.values[e]] = !0;
            for (e = 0; e < b.values.length; e++) c[b.values[e]] && d.values.push(b.values[e]);
            return d
        }

        function O(a, b) {
            var c = new N;
            c.values = a.values.concat(b.values);
            return c
        }

        function P(a) {
            a = a.split(/\s*,\s*/);
            for (var b = [], c = 0; c < a.length; c++) {
                var d = /^(u\+([0-9a-f?]{1,6})(?:-([0-9a-f]{1,6}))?)$/i.exec(a[c]);
                if (d) {
                    if (-1 !== d[2].indexOf("?")) {
                        var e = parseInt(d[2].replace("?", "0"), 16);
                        d = parseInt(d[2].replace("?", "f"), 16)
                    } else e = parseInt(d[2], 16), d = d[3] ? parseInt(d[3], 16) : e;
                    if (e !== d)
                        for (; e <= d; e++) b.push(e);
                    else b.push(e)
                }
            }
            return new N(b)
        };

        function Q(a) {
            this.i = a;
            this.g = 0
        }
        Q.prototype.read = function(a, b) {
            var c = a.read(this.i, b || this.g);
            b || (this.g += a.B);
            return c
        };

        function Va(a, b, c) {
            for (var d = a.g, e = [], f = 0; f < c; f += 1) e.push(b.read(a.i, d)), d += b.B;
            a.g += b.B * c;
            return e
        };
        var Wa = {
                B: 1,
                read: function(a, b) {
                    return a.getUint8(b || 0)
                }
            },
            R = {
                B: 2,
                read: function(a, b) {
                    return a.getUint16(b || 0)
                }
            },
            S = {
                B: 4,
                read: function(a, b) {
                    return a.getUint32(b || 0)
                }
            },
            Xa = {
                B: 4,
                read: function(a, b) {
                    return a.getUint32(b || 0)
                }
            };

        function T(a) {
            return 0 === a % 4 ? a : a + (4 - a % 4)
        }

        function U(a, b) {
            a = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
            (new Uint8Array(b.buffer, b.byteOffset, b.byteLength)).set(a, 0)
        }

        function W(a) {
            var b = 0,
                c;
            for (c in a) b += a[c].B;
            return {
                B: b,
                read: function(d, e) {
                    e = e || 0;
                    var f = {},
                        g;
                    for (g in a) f[g] = a[g].read(d, e), e += a[g].B;
                    return f
                }
            }
        }

        function Ya(a) {
            for (var b = new Uint32Array(4), c = 0; c < a.byteLength; c += 4) b[0] += a.getUint32(c);
            return b[0]
        };
        var Za = W({
                type: S,
                O: R,
                W: R,
                T: R,
                V: R
            }),
            X = W({
                tag: Xa,
                R: S,
                offset: S,
                length: S
            });

        function $a(a) {
            this.arrayBuffer = a;
            this.A = new Q(new DataView(a));
            this.o = [];
            this.m = [];
            this.i = [];
            this.g = {};
            a = this.A.read(Za);
            if (1330926671 == a.type || 65536 == a.type) {
                a = Va(this.A, X, a.O);
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    this.i.push(c.tag);
                    this.g[c.tag] = new DataView(this.arrayBuffer, c.offset, T(c.length));
                    this.o[b] = c.length;
                    this.m[b] = c.offset
                }
            } else throw Error("Font data is invalid");
        }

        function ab(a, b) {
            for (var c = [], d = Za.B + X.B * a.i.length, e = 0; e < a.i.length; e++) {
                var f = a.i[e],
                    g = b.i[f] || null;
                if (null !== g) {
                    f = T(g.length) - T(a.o[e]);
                    for (var h = 0; h < a.i.length; h++) e !== h && a.m[h] > a.m[e] && (a.m[h] += f);
                    a.o[e] = g.length
                }
                d += T(a.o[e])
            }
            d = new ArrayBuffer(d);
            U(new DataView(a.arrayBuffer, 0, Za.B), new DataView(d, 0, Za.B));
            for (e = 0; e < a.i.length; e++) {
                f = a.i[e];
                g = b.i[f] || null;
                if (null !== g)
                    for (1668112752 !== f && 1195661646 !== f && U(a.g[f], new DataView(d, a.m[e], T(a.o[e]))), a.g[f] = new DataView(d, a.m[e], T(a.o[e])), g = g.L, h =
                        0; h < g.length; h++) g[h].apply(a.g[f]);
                else U(a.g[f], new DataView(d, a.m[e], T(a.o[e]))), a.g[f] = new DataView(d, a.m[e], T(a.o[e]));
                1751474532 === f && a.g[f].setUint32(8, 0);
                1330851634 === f && a.g[f].setUint16(8, 0);
                c[e] = Ya(a.g[f])
            }
            b = new DataView(d, Za.B, X.B * a.i.length);
            for (e = 0; e < a.i.length; e++) f = a.i[e], b.setUint32(e * X.B, f), b.setUint32(e * X.B + 4, c[e]), b.setUint32(e * X.B + 8, a.m[e]), b.setUint32(e * X.B + 12, a.o[e]);
            c = 2981146554 - Ya(new DataView(d));
            a.g[1751474532].setUint32(8, c);
            a.arrayBuffer = d
        };

        function bb(a, b) {
            this.tag = a;
            this.length = b;
            this.L = []
        };

        function cb(a, b, c) {
            this.type = a;
            this.offset = b;
            this.data = c
        }
        var db = W({
            offset: S,
            K: S,
            P: S
        });
        cb.prototype.apply = function(a) {
            if (1 === this.type || 2 === this.type) U(this.data, new DataView(a.buffer, a.byteOffset + this.offset, this.data.byteLength));
            else if (3 === this.type) {
                var b = this.data.getUint32(0),
                    c = new DataView(a.buffer, a.byteOffset + this.offset, a.byteLength - this.offset),
                    d = new DataView(a.buffer, a.byteOffset + this.offset - b, a.byteLength - this.offset);
                U(c, d)
            } else if (4 === this.type) {
                c = new Q(this.data);
                var e = Va(c, db, this.data.byteLength / db.B);
                for (b = 0; b < e.length; b++) c = new DataView(a.buffer, a.byteOffset + e[b].offset,
                    e[b].K), d = new DataView(a.buffer, a.byteOffset + e[b].offset + e[b].P, e[b].K), U(c, d)
            } else if (5 === this.type)
                for (c = new Q(this.data); c.g < this.data.byteLength;)
                    for (d = c.read(R), e = c.read(R), b = 0; b < e; b++)
                        for (var f = c.read(S), g = c.read(S); f < g;) a.setUint16(f, a.getUint16(f) + d), f += 2
        };

        function eb(a) {
            this.g = new Q(new DataView(a));
            this.i = {};
            this.m = [];
            this.status = this.g.read(Wa);
            if (0 === this.status) {
                this.g.g = 10;
                for (var b = Va(this.g, fb, this.g.read(R)), c = 0; c < b.length; c++) {
                    var d = new bb(b[c].tag, b[c].length);
                    this.m.push(d);
                    this.i[b[c].tag] = d
                }
                b = this.g.read(R);
                for (c = 0; c < b; c++) {
                    var e = this.g.read(gb);
                    d = this.i[e.tag];
                    for (var f = 0; f < e.N; f++) {
                        var g = this.g.read(hb),
                            h = new DataView(a, this.g.g, g.length);
                        d.L.push(new cb(g.type, g.offset, h));
                        this.g.g += g.length
                    }
                }
            }
        }

        function ib() {
            var a = new Uint8Array(new ArrayBuffer(1));
            a[0] = 1;
            return new eb(a.buffer)
        }
        var fb = W({
                tag: Xa,
                S: S,
                offset: S,
                length: S
            }),
            gb = W({
                tag: Xa,
                X: Wa,
                U: S,
                N: R
            }),
            hb = W({
                type: Wa,
                offset: S,
                length: S
            });

        function jb(a, b) {
            return new Promise(function(c, d) {
                var e = L(a, b.get("m"));
                if (e.length <= kb) M(e).then(function(k) {
                    200 === k.status ? c(k.body) : d(Error('Invalid fetch response: "' + e + '": ' + k.status))
                }).catch(function() {
                    d(Error('Failed to fetch: "' + e + '"'))
                });
                else {
                    var f = new Ma(b.unicode, b.features, b.i),
                        g = Oa(f),
                        h = L(a, {
                            format: "m",
                            primer: g
                        });
                    M(h).then(function(k) {
                        200 === k.status ? c(k.body) : 404 === k.status ? f.create().then(function() {
                            M(h).then(function(q) {
                                200 === q.status ? c(q.body) : d(Error('Invalid fetch response after creating primer "' +
                                    h + '": ' + q.status))
                            }).catch(function() {
                                d(Error('Failed to fetch: "' + h + '"'))
                            })
                        }).catch(function() {
                            d(Error('Failed to create primer "' + g + '"'))
                        }) : d(Error('Invalid fetch response: "' + h + '": ' + k.status))
                    }).catch(function() {
                        d(Error('Failed to fetch: "' + h + '"'))
                    })
                }
            })
        }
        var kb = 4096;

        function lb(a) {
            this.i = null;
            this.D = a;
            this.data = null;
            this.o = Promise.resolve();
            this.A = [];
            this.g = null
        }
        lb.prototype.load = function() {
            var a = this.D,
                b = this;
            b.i || (a.u = "loading", b.i = new Promise(function(c, d) {
                var e = new I(a.unicode.C(), a.features.C());
                jb(a.url, e).then(function(f) {
                    b.data = new $a(f);
                    ab(b.data, ib());
                    b.g = new E(a.family, (new DataView(b.data.arrayBuffer)).buffer, Y(a));
                    b.g.load().then(function() {
                        a.u = "loaded";
                        c(a)
                    }).catch(function(g) {
                        a.u = "error";
                        d(g)
                    })
                }).catch(function(f) {
                    a.u = "error";
                    d(f)
                })
            }));
            return b.i
        };
        lb.prototype.m = function() {
            return this.g
        };
        lb.prototype.H = function(a) {
            var b = this.D,
                c = this;
            c.A.push(a);
            c.o = c.o.then(function() {
                var d = P(c.A.join(","));
                c.A = [];
                var e = Ta(b.unicode, d);
                if (0 === e.values.length) return Promise.resolve();
                b.unicode = O(b.unicode, e);
                return "unloaded" === b.u ? Promise.resolve() : c.load().then(function() {
                    var f = c.data.g[1195661646],
                        g = c.data.g[1146703425];
                    if (!f || !g) return Promise.reject(Error('Font "' + b.family + '" does not contain DYNA/GDYN table.'));
                    f = new I(e.C(), null, f, g);
                    return jb(b.url, f).then(function(h) {
                        h = new eb(h);
                        return 0 ===
                            h.status ? (ab(c.data, h), c.g = new E(b.family, (new DataView(c.data.arrayBuffer)).buffer, Y(b)), F.add(c.g), c.g.load()) : Promise.resolve()
                    })
                })
            });
            return c.o
        };

        function mb(a) {
            if (6 < a.length) {
                var b = new DataView(a.buffer),
                    c = b.getUint8(0),
                    d = b.getUint8(1);
                b = b.getUint32(2);
                if (1 === d) {
                    a = new Uint8Array(a.buffer, 6);
                    a = new DataView(a.buffer, a.byteOffset, a.byteLength);
                    d = [];
                    for (var e = 0; e < a.byteLength;) {
                        var f = a.getUint16(e);
                        if (0 <= f && 55295 >= f || 57344 <= f && 65535 >= f) d.push(f), e += 2;
                        else if (55296 === (f & 63488)) f = ((f & 1023) << 10) + (a.getUint16(e + 2) & 1023) + 65536, d.push(f), e += 4;
                        else throw Error("Failed to decode: " + f);
                    }
                    if (d.length !== b) throw Error("Number of codepoints in header does not match data.");
                    return {
                        version: c,
                        I: d
                    }
                }
                throw Error("Invalid encoding type: " + d);
            }
            throw Error("Invalid ordering data.");
        };

        function nb(a) {
            return Math.log2 ? Math.log2(a) : Math.log(a) / Math.LN2
        }

        function ob(a) {
            this.size = 64;
            this.m = a;
            a = Math.ceil(a.length / 64);
            a--;
            a |= a >> 1;
            a |= a >> 2;
            a |= a >> 4;
            a |= a >> 8;
            a |= a >> 16;
            this.g = ++a;
            this.A = 1 === this.g ? 0 : Math.floor(nb(this.g + 1));
            this.i = Math.pow(2, this.A + 1) - 1;
            this.o = {};
            for (a = 0; a < this.g; a++)
                for (var b = a * this.size, c = Math.min(this.m.length, b + this.size); b < c; b++) this.o[this.m[b]] = a + (this.i - this.g)
        }

        function pb(a, b) {
            for (var c = {}, d = 0; d < b.length; d++) {
                var e = b[d];
                a.o.hasOwnProperty(e) && (e = a.o[e], c[e] = e)
            }
            a = [];
            for (var f in c) a.push(c[f]);
            return a.sort(function(g, h) {
                return g - h
            })
        }

        function qb(a, b) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = b[d];
                if (e < a.i) {
                    var f = Math.pow(2, Math.floor(nb(e + 1))),
                        g = a.g / f * a.size;
                    e = e - f + 1;
                    f = e * g;
                    c = c.concat(a.m.slice(f, f + Math.max(0, Math.min(a.m.length, f + g) - e * g)))
                }
            }
            return c.sort(function(h, k) {
                return h - k
            })
        }

        function rb(a, b, c) {
            c = c || .6;
            var d = pb(a, b);
            b = [];
            for (var e = 0; e < a.i; e++) b[e] = e < a.i - a.g ? null : -1 !== d.indexOf(e) ? 1 : 0;
            for (d = a.A; 0 < d; d--) {
                var f = Math.pow(2, d);
                for (e = 0; e < f; e++) {
                    var g = Math.pow(2, d) + e - 1,
                        h = Math.floor((g - 1) / 2);
                    b[h] = null === b[h] ? b[g] : b[h] + b[g]
                }
            }
            e = [];
            for (f = [0]; f.length;) g = f.pop(), g >= a.i || (d = Math.floor(nb(g + 1)), b[g] / (a.g / Math.pow(2, d)) >= c ? e.push(g) : (f.push(2 * g + 1), f.push(2 * g + 2)));
            return e.sort(function(k, q) {
                return k - q
            })
        };

        function sb(a, b) {
            this.o = a;
            this.A = null;
            this.D = Promise.resolve(a);
            this.G = [];
            this.g = null;
            a = mb(new Uint8Array(atob(b).split("").map(function(c) {
                return c.charCodeAt(0)
            })));
            this.J = a.I;
            this.M = a.version;
            this.I = new N(this.J);
            this.version = a.version;
            this.i = new ob(this.J);
            this.data = null
        }
        sb.prototype.m = function() {
            return this.g
        };
        sb.prototype.load = function() {
            var a = this.o,
                b = this;
            this.A || (a.u = "loading", this.A = new Promise(function(c, d) {
                var e = a.unicode.C(),
                    f = [];
                f = e.length ? rb(b.i, e) : [0];
                e = qb(b.i, f);
                a.unicode = O(a.unicode, new N(e));
                tb(b, f).then(function(g) {
                    b.data = new $a(g);
                    ab(b.data, ib());
                    b.g = new E(a.family, (new DataView(b.data.arrayBuffer)).buffer, Y(a));
                    b.g.load().then(function() {
                        a.u = "loaded";
                        c(a)
                    }).catch(function(h) {
                        a.u = "error";
                        d(h)
                    })
                }).catch(function(g) {
                    a.u = "error";
                    d(g)
                })
            }));
            return this.A
        };
        sb.prototype.H = function(a) {
            var b = this,
                c = this.o;
            b.G.push(a);
            b.D = b.D.then(function() {
                var d = P(b.G.join(","));
                b.G = [];
                d = Ua(b.I, d);
                d = Ta(c.unicode, d);
                if (0 === d.values.length) return Promise.resolve(c);
                var e = rb(b.i, c.unicode.C(), 1),
                    f = rb(b.i, d.C());
                d = qb(b.i, f);
                c.unicode = O(c.unicode, new N(d));
                return "unloaded" === c.u ? Promise.resolve(c) : b.load().then(function() {
                    return tb(b, f, e).then(function(g) {
                        g = new eb(g);
                        return 0 === g.status ? (ab(b.data, g), b.g = new E(c.family, (new DataView(b.data.arrayBuffer)).buffer, Y(c)), F.add(b.g),
                            b.g.load()) : Promise.resolve()
                    })
                })
            });
            return b.D
        };

        function tb(a, b, c) {
            var d = a.o;
            return new Promise(function(e, f) {
                var g = {
                    format: "m",
                    features: ub(d),
                    chunks: b.join("."),
                    order: a.M,
                    v: "4"
                };
                c && (g.state = c.join("."));
                var h = L(d.url, g);
                M(h).then(function(k) {
                    200 === k.status ? e(k.body) : f(Error('Invalid fetch response: "' + h + '": ' + k.status))
                }).catch(function() {
                    f(Error('Failed to fetch: "' + h + '"'))
                })
            })
        };

        function vb(a) {
            a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
            var b = [];
            do {
                var c = a.currentNode;
                if (c && "SCRIPT" !== c.nodeName && "STYLE" !== c.nodeName && "NOSCRIPT" !== c.nodeName && "TEMPLATE" !== c.nodeName && "LINK" !== c.nodeName && "TITLE" !== c.nodeName) {
                    c.shadowRoot && (b = b.concat(vb(c.shadowRoot)));
                    for (var d = c.childNodes, e = 0; e < d.length; e++) d[e].nodeType !== Node.TEXT_NODE || /^\s*$/.test(d[e].nodeValue) || b.push(d[e].nodeValue);
                    "INPUT" === c.nodeName && "hidden" !== c.type && "password" !== c.type && b.push(c.value);
                    "TEXTAREA" === c.nodeName && b.push(c.value)
                }
            } while (a.nextNode());
            return b
        }

        function wb(a) {
            a = vb(a).join("");
            for (var b = new N, c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                if (55296 === (d & 63488) && c < a.length) {
                    var e = a.charCodeAt(c + 1);
                    56320 === (e & 64512) ? b.values.push(((d & 1023) << 10) + (e & 1023) + 65536) : b.values.push(d);
                    c++
                } else b.values.push(d)
            }
            return b.C()
        };

        function xb(a, b) {
            this.o = a;
            this.A = b;
            this.i = null;
            this.m = [];
            var c = this;
            yb && (this.i = new MutationObserver(function(d) {
                for (var e = [], f = 0; f < d.length; f++)
                    if (d[f].addedNodes.length || "characterData" === d[f].type || "attributes" === d[f].type) {
                        var g = d[f].target;
                        3 === g.nodeType && (g = g.parentNode);
                        g && (e.push(g), g.shadowRoot && zb(c, g.shadowRoot))
                    }
                e.length && b(e)
            }))
        }
        var yb = !!window.MutationObserver;
        xb.prototype.g = function(a) {
            a.target && (a = a.target, 3 === a.nodeType && (a = a.parentNode), this.A([a]))
        };

        function Ab(a) {
            zb(a, a.o)
        }

        function Bb(a, b) {
            b = document.createTreeWalker(b, NodeFilter.SHOW_ELEMENT, null, !1);
            var c = new Set;
            do {
                var d = b.currentNode;
                d.shadowRoot && (c.add(d.shadowRoot), Bb(a, d.shadowRoot).forEach(function(e) {
                    c.add(e)
                }))
            } while (b.nextNode());
            return c
        }

        function zb(a, b) {
            Cb(a, b);
            Bb(a, b).forEach(function(c) {
                Cb(a, c)
            })
        }

        function Cb(a, b) {
            -1 < a.m.indexOf(b) || (yb ? a.i.observe(b, {
                attributes: !0,
                characterData: !0,
                subtree: !0,
                childList: !0
            }) : (b.addEventListener("DOMAttrModified", a.g.bind(a), !1), b.addEventListener("DOMNodeInserted", a.g.bind(a), !1), b.addEventListener("DOMCharacterDataModified", a.g.bind(a), !1)), a.m.push(b))
        };

        function Db(a) {
            var b = document.body,
                c = this;
            this.cache = {};
            this.g = new xb(b, function(d) {
                var e = [];
                d.forEach(function(f) {
                    wb(f).forEach(function(g) {
                        c.cache[g] || (e.push(g), c.cache[g] = !0)
                    })
                });
                e.length && a(e)
            })
        };

        function Eb(a) {
            this.i = a || {};
            this.g = document.documentElement
        }
        Eb.prototype.inactive = function() {
            aa(this.g, "wf-loading");
            n(this.g, "wf-inactive");
            Z(this, "inactive")
        };
        Eb.prototype.active = function() {
            aa(this.g, "wf-loading");
            n(this.g, "wf-active");
            Z(this, "active")
        };
        Eb.prototype.loading = function() {
            n(this.g, "wf-loading");
            Z(this, "loading")
        };

        function Fb(a, b) {
            aa(a.g, Gb(b, "loading"));
            n(a.g, Gb(b, "inactive"));
            Z(a, "fontinactive", b)
        }

        function Hb(a, b) {
            n(a.g, Gb(b, "loading"));
            Z(a, "fontloading", b)
        }

        function Gb(a, b) {
            return "wf-" + a.family + "-" + Ib(a) + "-" + b
        }

        function Z(a, b, c) {
            if (a.i[b]) try {
                if (c) a.i[b](c.family, Ib(c));
                else a.i[b]()
            } catch (d) {
                console.error('Typekit: Error in "' + b + '" callback', d)
            }
        };

        function Jb(a) {
            a = (a || "").split(/\s*,\s*/);
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = /^"([\u0020-\u007e]{1,4})"(?:\s+(\d+|on|off))?$/i.exec(a[c]);
                d && (b[d[1]] = d[2] ? parseInt(d[2].replace("on", "1").replace("off", "0"), 10) : 1)
            }
            return b
        };

        function Kb(a) {
            this.values = a || {}
        }
        Kb.prototype.C = function() {
            var a = this,
                b = [];
            Object.keys(this.values).forEach(function(c) {
                0 !== a.values[c] && b.push(c)
            });
            return b
        };

        function Lb(a) {
            a = (a || "").split(/\s*,\s*/);
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = /^([\u0020-\u007e]{1,4})$/i.exec(a[c]);
                d && (b[d[1]] = 1)
            }
            return new Kb(b)
        };

        function Mb(a) {
            this.i = a;
            this.o = null;
            this.A = Promise.resolve(a);
            this.D = [];
            var b = new I(a.unicode.C(), a.features.C());
            this.g = new E(a.family, Nb(this, b), Y(a))
        }

        function Nb(a, b) {
            a = a.i;
            var c = b.get("l"),
                d = b.get("d");
            b = b.get("m");
            return "url(" + L(a.url, c) + ') format("woff2"),url(' + L(a.url, d) + ') format("woff"),url(' + L(a.url, b) + ') format("opentype")'
        }
        Mb.prototype.m = function() {
            return this.g
        };
        Mb.prototype.load = function() {
            var a = this.i,
                b = this;
            this.o || (a.u = "loading", this.o = new Promise(function(c, d) {
                b.g.load().then(function() {
                    a.u = "loaded";
                    c(a)
                }).catch(function(e) {
                    a.u = "error";
                    d(e)
                })
            }));
            return this.o
        };
        Mb.prototype.H = function(a) {
            var b = this,
                c = this.i;
            b.D.push(a);
            b.A = b.A.then(function() {
                var d = P(b.D.join(","));
                b.D = [];
                d = Ta(c.unicode, d);
                if (0 === d.values.length) return Promise.resolve(c);
                c.unicode = O(c.unicode, d);
                return "unloaded" === c.u ? Promise.resolve(c) : b.load().then(function() {
                    var e = new I(c.unicode.C(), c.features.C());
                    b.g = new E(c.family, Nb(b, e), Y(c));
                    F.add(b.g);
                    return b.g.load().then(function() {
                        return c
                    })
                })
            });
            return b.A
        };
        var Ob = !!window.ArrayBuffer;

        function Pb(a, b, c) {
            var d = c || {};
            this.url = new Ka(b);
            this.unicode = P(d.unicodeRange || d.unicode || "");
            this.features = new Kb(Jb(d.featureSettings || ""));
            d.features && (this.features = Lb(d.features));
            delete d.featureSettings;
            this.u = "unloaded";
            Object.defineProperties(this, {
                family: {
                    get: function() {
                        return a.replace(/['"]/g, "")
                    }
                },
                style: {
                    get: function() {
                        return d.style || "normal"
                    }
                },
                weight: {
                    get: function() {
                        return d.weight || "normal"
                    }
                },
                stretch: {
                    get: function() {
                        return d.stretch || "normal"
                    }
                },
                display: {
                    get: function() {
                        return d.display || "auto"
                    }
                },
                unicodeRange: {
                    get: function() {
                        var e = this.unicode.C();
                        return e.length ? Sa(e) : "U+0-10ffff"
                    }
                },
                featureSettings: {
                    get: function() {
                        var e = this.features.C();
                        return e.length ? e.join(",") : "normal"
                    }
                },
                status: {
                    get: function() {
                        return this.u
                    }
                },
                dynamic: {
                    get: function() {
                        return d.dynamic || !1
                    }
                },
                variable: {
                    get: function() {
                        return d.variable || !1
                    }
                }
            });
            b = null;
            Ob && this.dynamic ? d.order ? b = new sb(this, d.order) : b = new lb(this) : b = new Mb(this);
            this.g = b
        }

        function Y(a) {
            return {
                style: a.style,
                weight: a.weight,
                stretch: a.stretch,
                unicodeRange: a.unicodeRange,
                display: a.display
            }
        }

        function Ib(a) {
            var b = a.weight.toString();
            return a.style[0] + ("b" === b[0] ? "7" : "n" === b[0] ? "4" : b[0])
        }

        function ub(a) {
            a = a.features.C();
            return a.length ? a.map(function(b) {
                return b.trim()
            }).join(",") : "NONE"
        }
        Pb.prototype.load = function() {
            return this.g.load()
        };
        Pb.prototype.update = function(a) {
            return this.g.H(a)
        };

        function Qb() {
            this.fonts = [];
            Object.defineProperties(this, {
                status: {
                    get: function() {
                        for (var a = 0; a < this.fonts.length; a++)
                            if ("loading" === this.fonts[a].status) return "loading";
                        return "loaded"
                    }
                },
                size: {
                    get: function() {
                        return this.fonts.length
                    }
                }
            })
        }
        Qb.prototype.has = function(a) {
            return -1 !== this.fonts.indexOf(a)
        };
        Qb.prototype.add = function(a) {
            if (!this.has(a)) {
                var b = a.g.m();
                b && F.add(b);
                this.fonts.push(a)
            }
            return this
        };
        Qb.prototype["delete"] = function(a) {
            var b = this.fonts.indexOf(a);
            return -1 !== b && (this.fonts.splice(b, 1), a = a.g.m()) ? F.delete(a) : !1
        };
        Qb.prototype.forEach = function(a) {
            var b = this;
            this.fonts.forEach(function(c, d) {
                a(c, d, b)
            })
        };

        function Rb(a) {
            this.url = new Ka(a.ping);
            this.A = a.p;
            this.o = a.h;
            this.i = a.a;
            this.D = a.t;
            this.version = a.j;
            this.g = window.location.hostname;
            this.m = a.l || ""
        }

        function Sb(a, b) {
            b.length && M(L(a.url, {
                s: a.A,
                k: a.D,
                ht: a.o,
                h: a.g,
                f: b.join("."),
                a: a.i,
                js: a.version,
                app: a.m,
                e: "js",
                _: Date.now()
            }))
        };

        function Tb() {
            this.data = new N;
            this.g = P("U+20-7E")
        }
        Tb.prototype.set = function(a) {
            this.data = O(this.data, a)
        };
        Tb.prototype.get = function() {
            return O(this.g, this.data)
        };

        function Ub() {
            var a = config;
            this.F = [];
            this.fonts = new Qb;
            this.cache = new Tb;
            this.ping = new Rb(a);
            this.g = a.c;
            a.f && (a.f.forEach(function(b) {
                this.F.push(new Pb(b.family, b.source, b.descriptors))
            }, this), a.ping && Sb(this.ping, a.f.map(function(b) {
                return b.id
            })))
        }

        function Vb(a) {
            a.F.forEach(function(b) {
                b.dynamic && b.update(Sa(a.cache.get().C()))
            })
        }

        function Wb(a) {
            if (a.g && a.g.length) {
                for (var b = document.createElement("style"), c = "", d = 0; d < a.g.length; d += 2) c += a.g[d] + "{font-family:" + a.g[d + 1] + ";}";
                b.textContent = c;
                document.head.appendChild(b)
            }
        }
        Ub.prototype.load = function(a) {
            var b = this,
                c = new Eb(a);
            c.loading();
            ca(function() {
                b.cache.set(new N(wb(document.body)));
                Ab((new Db(function(d) {
                    b.cache.set(new N(d));
                    Vb(b)
                })).g);
                Promise.all(b.F.map(function(d) {
                    Hb(c, d);
                    return d.dynamic ? d.update(Sa(b.cache.get().C())).then(function() {
                        return d.load()
                    }).catch(function(e) {
                        Fb(c, d);
                        throw e;
                    }) : d.load().catch(function(e) {
                        Fb(c, d);
                        throw e;
                    })
                })).then(function() {
                    b.F.map(function(d) {
                        aa(c.g, Gb(d, "loading"));
                        n(c.g, Gb(d, "active"));
                        Z(c, "fontactive", d);
                        b.fonts.add(d)
                    });
                    c.active()
                }).catch(function() {
                    c.inactive()
                })
            });
            Wb(b)
        };
        var Xb = new Ub;
        window.Typekit = {};
        window.Typekit.config = config;
        window.Typekit.load = Xb.load.bind(Xb);
        window.Typekit.fonts = Xb.fonts;
        window.Typekit.kit = Xb.F;
        window.Typekit.Font = function(a, b, c) {
            var d = window.Typekit.user,
                e = window.Typekit.token,
                f = c || {},
                g = (f.style || "normal").toString();
            f = (f.weight || "normal").toString();
            /^(normal|italic|oblique)$/.test(g) || (g = "normal");
            /^(([1-9]00)|normal|bold)$/.test(f) || (f = "400");
            g = g[0] + ("b" === f[0] ? "7" : "n" === f[0] ? "4" : f[0]);
            b = config.preview.replace("{user}", encodeURIComponent(d)).replace("{font_alias}", encodeURIComponent(b)).replace("{fvd}", encodeURIComponent(g)) + "&token=" + encodeURIComponent(e);
            return new Pb(a, b, c)
        };
    }());
}({
    "a": "85734742",
    "h": "tk",
    "t": "mmg4ble",
    "p": 1,
    "j": "1.10.1",
    "c": [".tk-adobe-song-std", "\"adobe-song-std\",sans-serif", ".tk-hatch", "\"hatch\",serif"],
    "l": "typekit",
    "type": "dynamic",
    "preview": "https://use.typekit.net/pf/{user}/{font_alias}/{fvd}/{format}{?subset_id,primer,token,unicode,features,gdyn,v,chunks,state,order}",
    "ping": "https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}",
    "primer": "https://primer.typekit.net/primer/{primer}",
    "f": [{
        "source": "https://use.typekit.net/af/c41acb/0000000000000000000176f5/27/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 21577,
        "dynamic": true,
        "family": "adobe-song-std",
        "descriptors": {
            "weight": "300",
            "display": "auto",
            "featureSettings": "\"ALL \"",
            "subset": "",
            "order": "AAEAAHYnAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF9OADACAKkAIHUoMAEwbjCkZeUwrzD8MPNOujDITgpOLVQIMLkwwzBZMFcwZzCSMOowizBmMOkwRFuaMEwA4DDXZbAwfk7lML8wbzC3MEswazCiZbkw6zBqMNUwXzDsMEowjDBVME9OCzBoMLAwZDBbUWVPGlVPWDSJi4mBT38wVGcsMOAwTTD7MOEwrTCJ/wgw7f8JMIow0DCrWSdSKTDJAKAwszCIMIIw4zC1doQwYDBCT1xRaDDAMFMwuDBIMI8wUTC7ZkKQeDCBMAxRbI2FMN1SBjANU+9nADB/fQQwk2b0UfpiEDBGMGP/AWcIgeowx/8flZMw3pDoMF1STTBhMMtUDDDnYMWITGzVdntlmXUfeT6ABVKgWDEwxnJ5MIR0BnEhMKZUwTBplYt27mEPICZbUDDWgP1S1f8aMNFO1lGFVt5lhzDTZjYw5ZAaXnQwqFThMHNT1iAUZDowqU6GixuJj1+MMKogHWshdx8w2jCjihhOKjBYIBxj0ohoANeM6k4Nii11O2cfMN9oA1/FZwlZGonjIBkwulALmthb5zC2esuVdzDBd+WWUJdiadhXMDB4YGkA6lu2kdFTFk6LXmKKF18PXxUACpqoYkuBAltUW6JgKmJAfmowp4mnk0tn0X0iT7aGGlBDj6518I/mVUZfwy+Yal9gJ5Z1IBMw4k9TY/UgIpnfio1ucmwXiut9uC90gzlo153mf6FUDS+iYSh1SyJhUMJS+IStVBFZfX5aL1cDw4qCeeNOynPAkcAA6XcmT5KRGWWhL5xpm07GZO9RSJBLlsZj1mN6kCEwEIz6nyx7M40QT/6FH4b4nrR/X2GYaW0wWlKbMNwweVwPISIwyni6APxP3QDhMHZbuSAYT+FcU30wMAAApVIlmExpHHJplptpfXe2MLGXcV6mX5dRhjDEVyhudiA7AOgAt3+Okc1ez1oaVZ5ZFld/APMgrIMjip5Qz1IHeTqW+wDtbEJsNACwc/5T11ufTogw1E7taEhSHV3lXpcw71HqkAGP/Yz8W/4w2ZAjYwFO4wCxWctmDgD6MKwA7AD3APJRKk9VAKQAqACtbTuZmQD5AKdX+jC9YR+KcU7YTvZOy1PdkzJXrH1CaDxh9FGZZXAwUluMbOiPCVlzVv0wEVRKY9BgHYpzYp5T8F9Te0lbiVxLUxeOq1tmXgJ2enuhMM1jB4oAMHJfhXJIMNhf3Hb4MNt6LpWignJZKU47ZS8woVQEMAVUjDDPa2NnKpBTkP0wbV5zkU1nnIpmjXdTn1kJkE5QmTBwfZpPv4+8bYlselW2MOYwjYrLUjZm+HUxYRttiE6kUY1td4/RdnFeOFxxfCGMx4j9fSCQMZBVaYJUc5gC/w+Y33b0VvJg831QU8JncXtWMIBXi16DZcVORXVMa9tOFm1BZ2VbYzCDe8RoIU4JMiJ5wWOlgm9Pm3ssU+N9RGV0UXFsWVNzmE1fN1P4Xd2KCJZkUUNcEU6scGuYqF9idWp7wGcb/14iD06MfTlmL4q/ijFuY5dbbtlixZBKjWlcSlvGMM6XXnOLm4dWSWXPe5d1N2KVTwFjRmVZlYB/21/1W6RO+3UwbpCIQ5i8ZitXnpheglGX82tijatqn09PW1hZK4rHhZ2ZFpZNXvpjoXp6/hVbVzBWk0mFZHZ9UjBnDU8RLvBPwFNYZT5RSXE2jLeRz3C5egt9YX3okGltD1KpXFVXH39uaGswhnsRZiAwtGKAUtmIU2v5Z1AwsmcrY9t3QIADWOtZD3leMK6QMlamWh5fcYt3WPJoqXGwfPtcop6JeH7/BoCyZT+RzlRonChPi1PLfAFTV4a5T02AH2dhhAGYLW7BU8p6ZZQOi4R3RXw5cE5qD3n7a9RiEVF3WfFPoZXRYhaB9JsBTtWYBnzIZyhrzmXpjbMwUILxWH1jqIy7jsqQIHoOiX9ep1ZoYKiMYWX9UXifjYHzkFSJEVBlfdpTu1/YT4Bif35U/www5HVwiyNTzViDUKxxZ26WZb2P1F4MU3Awh1wOdt18vpT2dANuL2U5fA1yR2uLVCtjomzBMGVwuneoXlBZKphYMHuLWGsbcOyKrVP+U0N7VImWUnVP7oKxXgNRTV/rk0yAd1KfU/f/HpamU/OIKWWtBCAwTlKLirBXC4Q9U0BoKlNKh497pYIsmhOAXphUndJTBT7KjjdsDmpeUrlue14rdwuNcnhtQfN/0mUdjKBZIY3vTkuTyHIuWUNJ35uvbQt1IJAAa+J50XK/gvhoJW3OU+RgA18yYnFd3181U6J/zFSwahluBXmPhKOPGjC8kttVjVbbhKBVS2l1PfyQFGQhNXJ8dGnLluOESVQ3XElUJoJeghdr5FXomw+Dw1pwddGG9nZml7dguVn1dqxOJlNUdn6a1H3gOgOd91gOkfNhS2uUWr1zSG6jbSJ1GXkjWlRQ6lxWbSNTQVz2bxSHDFM5aiFa7FmCjcGOZX1xOGNldXUzidKXAH+kZqxTWk5fkB9XElEahFd1Ok4H/wtoOYpVbfGMqVF2/1xaZms+jYow9nBjjKyYBZbidVlcRVLfa7WViVTlldyPb1+0bBGYCAAJZK5kwVAJ/xVsu3+pXrdytnmBdLBQEXnSW8xW4JdpXfFTOpAQiapbrpgYkGBY8H1jU8hS4lkxgAEwDlR9ej9enHvJkcxcMTB1O1Nmblffa3SD71PyT8JOm5dgeuBOOF8KguWKbWVbiFcwD4twUnJbeGJTi7aKZGeXSQNjsoCJggdXjnGxdyBKxmJVi4B385QeS/NrZIFOBEGVHYo7nKCCuFfOdzw7J4iLBDp5y26ATn4EOGU2XRFfXD2gZhRHanftiio9QHUjjv1lvEkdh7pW455CQCwAAAABAAIAAwAEAAUABgAHAAgACwAMAA0ADgAPABAAEQASABMAFAAVABYAFwAYABkAGgAbABwAHQAeAB8BAQETARsBKwFEAUgBTQFrAc4B0AHSAdQB1gHYAdoB3AH5AlECYQLHAskCygLLAtkDkQOSA5MDlAOVA5YDlwOYA5kDmgObA5wDnQOeA58DoAOhA6MDpAOlA6YDpwOoA6kDsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8QDxQPGA8cDyAPJBAEEEAQRBBIEEwQUBBUEFgQXBBgEGQQaBBsEHAQdBB4EHwQhBCIEIwQkBCUEJgQnBCgEKQQqBCsELAQtBC4ELwQwBDEEMgQzBDQENQQ2BDcEOQQ7BDwEPQQ+BD8EQARCBEMERARFBEYERwRIBEkESgRLBEwETQROBE8EUR4/IBAgFSAWICUgMCAyIDMgNSBdIQMhBSEJIRYhISFgIWEhYiFjIWQhZSFmIWchaCFpIWohayFwIXEhciFzIXQhdSF2IXcheCF5IZAhkSGSIZMhliGXIZghmSIIIhEiFSIaIh0iHiIfIiAiIyIlIiciKCIpIioiKyIuIjQiNSI2IjciPSJIIkwiUiJgImQiZSJmImcibiJvIpUimSKlIr8i7yMSJGAkYSRiJGMkZCRlJGYkZyRoJGkkdCR1JHYkdyR4JHkkeiR7JHwkfSR+JH8kgCSBJIIkgySEJIUkhiSHJIgkiSSKJIskjCSNJI4kjySQJJEkkiSTJJQklSSWJJckmCSZJJokmyUAJQElAiUDJQQlBSUGJQclCCUJJQolCyUMJQ0lDiUPJRAlESUSJRMlFCUVJRYlFyUYJRklGiUbJRwlHSUeJR8lICUhJSIlIyUkJSUlJiUnJSglKSUqJSslLCUtJS4lLyUwJTElMiUzJTQlNSU2JTclOCU5JTolOyU8JT0lPiU/JUAlQSVCJUMlRCVFJUYlRyVIJUklSiVLJVAlUSVSJVMlVCVVJVYlVyVYJVklWiVbJVwlXSVeJV8lYCVhJWIlYyVkJWUlZiVnJWglaSVqJWslbCVtJW4lbyVwJXElciVzJYElgiWDJYQlhSWGJYcliCWJJYoliyWMJY0ljiWPJZMllCWVJaAloSWyJbMlvCW9JcYlxyXLJc4lzyXiJeMl5CXlJgUmBiYJJkAmQi6ALoEugi6DLoQuhS6GLocuiC6JLoouiy6MLo0uji6PLpAukS6SLpMulC6VLpYuly6YLpkumy6cLp0uni6fLqAuoS6iLqMupC6lLqYupy6oLqkuqi6rLqwurS6uLq8usC6xLrIusy60LrUuti63LrguuS66LrsuvC69Lr4uvy7ALsEuwi7DLsQuxS7GLscuyC7JLsouyy7MLs0uzi7PLtAu0S7SLtMu1C7VLtYu1y7YLtku2i7bLtwu3S7eLt8u4C7hLuIu4y7kLuUu5i7nLugu6S7qLusu7C7tLu4u7y7xLvIu8y8ALwEvAi8DLwQvBS8GLwcvCC8JLwovCy8MLw0vDi8PLxAvES8SLxMvFC8VLxYvFy8YLxkvGi8bLxwvHS8eLx8vIC8hLyIvIy8kLyUvJi8nLygvKS8qLysvLC8tLy4vLy8wLzEvMi8zLzQvNS82LzcvOC85LzovOy88Lz0vPi8/L0AvQS9CL0MvRC9FL0YvRy9IL0kvSi9LL0wvTS9OL08vUC9RL1IvUy9UL1UvVi9YL1kvWi9bL1wvXS9eL18vYC9hL2IvYy9kL2UvZi9nL2gvaS9qL2svbC9tL24vby9wL3Evci9zL3Uvdi93L3gveS96L3svfC99L34vfy+AL4Evgi+DL4QvhS+GL4cviC+JL4oviy+ML40vji+PL5AvkS+SL5MvlC+VL5Yvly+ZL5ovmy+dL54vny+gL6Evoy+kL6Uvpi+nL6gvqS+qL6svrC+tL64vry+wL7Evsi+zL7QvtS+2L7cvuC+5L7ovuy+8L70vvi+/L8AvwS/CL8MvxC/FL8Yvxy/IL8kvyi/LL8wvzS/OL88v0C/RL9Iv0y/UL9Uv8C/xL/Iv8y/0L/Uv9i/3L/gv+S/6L/swAzAGMAcwCDAJMAowCzASMBMwFDAVMBYwFzAdMB4wITAiMCMwJDAlMCYwJzAoMCkwMzA0MDUwODA5MDowPjA/MEEwQzBFMEcwSTBcMF4wYjBsMHEwdDB3MHowfDB9MIUwjjCQMJEwlDCVMJYwmzCcMJ0wnjClML4wwjDFMMww0jDoMO4w8DDxMPIw9DD1MPcw+DD5MPow/TD+MQUxBjEHMQgxCTEKMQsxDDENMQ4xDzEQMRExEjETMRQxFTEWMRcxGDEZMRoxGzEcMR0xHjEfMSAxITEiMSMxJDElMSYxJzEoMSkxKjErMSwxoDGhMaIxozGkMaUxpjGnMagxqTGqMasxrDGtMa4xrzGwMbExsjGzMbQxtTG2MbcyIDIhMiMyJDIlMiYyJzIoMikyMTKjM44zjzOcM50znjOhM8QzzjPRM9Iz1TQANAE0AjQDNAQ0BTQGNAc0CDQJNAo0CzQMNA00DjQPNBA0ETQSNBM0FDQVNBY0FzQYNBk0GjQbNBw0HTQeNB80IDQhNCI0IzQkNCU0JjQnNCg0KTQqNCs0LDQtNC40LzQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NDo0OzQ8ND00PjQ/NEA0QTRCNEM0RDRFNEY0RzRINEk0SjRLNEw0TTRONE80UDRRNFI0UzRUNFU0VjRXNFg0WTRaNFs0XDRdNF40XzRgNGE0YjRjNGQ0ZTRmNGc0aDRpNGo0azRsNG00bjRvNHA0cTRyNHM0dDR1NHY0dzR4NHk0ejR7NHw0fTR+NH80gDSBNII0gzSENIU0hjSHNIg0iTSKNIs0jDSNNI40jzSQNJE0kjSTNJQ0lTSWNJc0mDSZNJo0mzScNJ00njSfNKA0oTSiNKM0pDSlNKY0pzSoNKk0qjSrNKw0rTSuNK80sDSxNLI0szS0NLU0tjS3NLg0uTS6NLs0vDS9NL40vzTANME0wjTDNMQ0xTTGNMc0yDTJNMo0yzTMNM00zjTPNNA00TTSNNM01DTVNNY01zTYNNk02jTbNNw03TTeNN804DThNOI04zTkNOU05jTnNOg06TTqNOs07DTtNO407zTwNPE08jTzNPQ09TT2NPc0+DT5NPo0+zT8NP00/jT/NQA1ATUCNQM1BDUFNQY1BzUINQk1CjULNQw1DTUONQ81EDURNRI1EzUUNRU1FjUXNRg1GTUaNRs1HDUdNR41HzUgNSE1IjUjNSQ1JTUmNSc1KDUpNSo1KzUsNS01LjUvNTA1MTUyNTM1NDU1NTY1NzU4NTk1OjU7NTw1PTU+NT81QDVBNUI1QzVENUU1RjVHNUg1STVKNUs1TDVNNU41TzVQNVE1UjVTNVQ1VTVWNVc1WDVZNVo1WzVcNV01XjVfNWA1YTViNWM1ZDVlNWY1ZzVoNWk1ajVrNWw1bTVuNW81cDVxNXM1dDV1NXY1dzV4NXk1ejV7NXw1fTV+NX81gDWBNYI1gzWENYU1hjWHNYg1iTWKNYs1jDWNNY41jzWQNZE1kjWTNZQ1lTWWNZc1mDWZNZo1mzWcNZ01njWfNaA1oTWiNaM1pDWlNaY1pzWoNak1qjWrNaw1rTWuNa81sDWxNbI1szW0NbU1tjW3Nbg1uTW6Nbs1vDW9Nb41vzXANcE1wjXDNcQ1xTXGNcc1yDXJNco1yzXMNc01zjXPNdA10TXSNdM11DXVNdY11zXYNdk12jXbNdw13TXeNd814DXhNeI14zXkNeU15jXnNeg16TXqNes17DXtNe417zXwNfE18jXzNfQ19TX2Nfc1+DX5Nfo1+zX8Nf01/jX/NgA2ATYCNgM2BDYFNgY2BzYINgk2CjYLNgw2DTYONg82EDYRNhI2EzYUNhU2FjYXNhg2GTYaNhs2HDYdNh42HzYgNiE2IjYjNiQ2JTYmNic2KDYpNio2KzYsNi02LjYvNjA2MTYyNjM2NDY1NjY2NzY4Njk2OjY7Njw2PTY+Nj82QDZBNkI2QzZENkU2RjZHNkg2STZKNks2TDZNNk42TzZQNlE2UjZTNlQ2VTZWNlc2WDZZNlo2WzZcNl02XjZfNmA2YTZiNmM2ZDZlNmY2ZzZoNmk2ajZrNmw2bTZuNm82cDZxNnI2czZ0NnU2djZ3Nng2eTZ6Nns2fDZ9Nn42fzaANoE2gjaDNoQ2hTaGNoc2iDaJNoo2izaMNo02jjaPNpA2kTaSNpM2lDaVNpY2lzaYNpk2mjabNpw2nTaeNp82oDahNqI2ozakNqU2pjanNqg2qTaqNqs2rDatNq42rzawNrE2sjazNrQ2tTa2Nrc2uDa5Nro2uza8Nr02vja/NsA2wTbCNsM2xDbFNsY2xzbINsk2yjbLNsw2zTbONs820DbRNtI20zbUNtU21jbXNtg22TbaNts23DbdNt423zbgNuE24jbjNuQ25TbmNuc26DbpNuo26zbsNu027jbvNvA28TbyNvM29Db1NvY29zb4Nvk2+jb7Nvw2/Tb+Nv83ADcBNwI3AzcENwU3BjcHNwg3CTcKNws3DDcNNw43DzcQNxE3EjcTNxQ3FTcWNxc3GDcZNxo3GzccNx03HjcfNyA3ITciNyM3JDclNyY3JzcoNyk3KjcrNyw3LTcuNy83MDcxNzI3Mzc0NzU3Njc3Nzg3OTc6Nzs3PDc9Nz43PzdAN0E3QjdDN0Q3RTdGN0c3SDdJN0o3SzdMN003TjdPN1A3UTdSN1M3VDdVN1Y3VzdYN1k3WjdbN1w3XTdeN183YDdhN2I3YzdkN2U3ZjdnN2g3aTdqN2s3bDdtN243bzdwN3E3cjdzN3Q3dTd2N3c3eDd5N3o3ezd8N303fjd/N4A3gTeCN4M3hDeFN4Y3hzeIN4k3ijeLN4w3jTeON483kDeRN5I3kzeUN5U3ljeXN5g3mTeaN5s3nDedN543nzegN6E3ojejN6Q3pTemN6c3qDepN6o3qzesN603rjevN7A3sTeyN7M3tDe1N7Y3tze4N7k3uje7N7w3vTe+N783wDfBN8I3wzfEN8U3xjfHN8g3yTfKN8s3zDfNN843zzfQN9E30jfTN9Q31TfWN9c32DfZN9o32zfcN9033jffN+A34TfiN+M35DflN+Y35zfoN+k36jfrN+w37TfuN+838DfxN/I38zf0N/U39jf3N/g3+Tf6N/s3/Df9N/43/zgAOAE4AjgDOAQ4BTgGOAc4CDgJOAo4CzgMOA04DjgPOBA4ETgSOBM4FDgVOBY4FzgYOBk4GjgbOBw4HTgeOB84IDghOCI4IzgkOCU4JjgnOCg4KTgqOCs4LDgtOC44LzgwODE4MjgzODQ4NTg2ODc4ODg5ODo4Ozg8OD04Pjg/OEA4QThCOEM4RDhFOEY4RzhIOEk4SjhLOEw4TThOOE84UDhROFI4UzhUOFU4VjhXOFg4WThaOFs4XDhdOF44XzhgOGE4YjhkOGU4ZjhnOGg4aThqOGs4bDhtOG44bzhwOHE4cjhzOHQ4dTh2OHc4eDh5OHo4ezh8OH04fjh/OIA4gTiCOIM4hDiFOIY4hziIOIk4ijiLOIw4jTiOOI84kDiROJI4kziUOJU4ljiXOJg4mTiaOJs4nDidOJ44nzigOKE4ojijOKQ4pTimOKc4qDipOKo4qzisOK04rjivOLA4sTiyOLM4tDi1OLY4tzi4OLk4uji7OLw4vTi+OL84wDjBOMI4wzjEOMU4xjjHOMg4yTjKOMs4zDjNOM44zzjQONE40jjTONQ41TjWONc42DjZONo42zjcON043jjfOOA44TjiOOM45DjlOOY45zjoOOk46jjrOOw47TjuOO848DjxOPI48zj0OPU49jj3OPg4+Tj6OPs4/Dj9OP44/zkAOQE5AjkDOQQ5BTkGOQc5CDkJOQo5CzkMOQ05DjkPORA5ETkSORM5FDkVORY5FzkYORk5GjkbORw5HTkeOR85IDkhOSI5IzkkOSU5JjknOSg5KTkqOSs5LDktOS45LzkwOTE5MjkzOTQ5NTk2OTc5ODk5OTo5Ozk8OT05Pjk/OUA5QTlCOUM5RDlFOUY5RzlIOUk5SjlLOUw5TTlOOU85UDlROVI5UzlUOVU5VjlXOVg5WTlaOVs5XDldOV45XzlgOWE5YjljOWQ5ZTlmOWc5aDlpOWo5azlsOW05bjlvOXA5cTlyOXM5dDl1OXY5dzl4OXk5ejl7OXw5fTl+OX85gDmBOYI5gzmEOYU5hjmHOYg5iTmKOYs5jDmNOY45jzmQOZE5kjmTOZQ5lTmWOZc5mDmZOZo5mzmcOZ05njmfOaA5oTmiOaM5pDmlOaY5pzmoOak5qjmrOaw5rTmuOa85sDmxObI5szm0ObU5tjm3Obg5uTm6Obs5vDm9Ob45vznAOcE5wjnDOcQ5xTnGOcc5yDnJOco5yznMOc05zjnPOdA50TnSOdM51DnVOdY51znYOdk52jnbOdw53TneOd854DnhOeI54znkOeU55jnnOeg56TnqOes57DntOe457znwOfE58jnzOfQ59Tn2Ofc5+Dn5Ofo5+zn8Of05/jn/OgA6AToCOgQ6BToGOgc6CDoJOgo6CzoMOg06DjoPOhA6EToSOhM6FDoVOhY6FzoYOhk6GjobOhw6HToeOh86IDohOiI6IzokOiU6JjonOig6KToqOis6LDotOi46LzowOjE6MjozOjQ6NTo2Ojc6ODo5Ojo6Ozo8Oj06Pjo/OkA6QTpCOkM6RDpFOkY6RzpIOkk6SjpLOkw6TTpOOk86UDpROlI6UzpUOlU6VjpXOlg6WTpaOls6XDpdOl46XzpgOmE6YjpjOmQ6ZTpmOmc6aDppOmo6azpsOm06bjpvOnA6cTpyOnM6dDp1OnY6dzp4Onk6ejp7Onw6fTp+On86gDqBOoI6gzqEOoU6hjqHOog6iTqKOos6jDqNOo46jzqQOpE6kjqTOpQ6lTqWOpc6mDqZOpo6mzqcOp06njqfOqA6oTqiOqM6pDqlOqY6pzqoOqk6qjqrOqw6rTquOq86sDqxOrI6szq0OrU6tjq3Org6uTq6Ors6vDq9Or46vzrAOsE6wjrDOsQ6xTrGOsc6yDrJOso6yzrMOs06zjrPOtA60TrSOtM61DrVOtY61zrYOtk62jrbOtw63TreOt864DrhOuI64zrkOuU65jrnOug66TrqOus67DrtOu467zrwOvE68jrzOvQ69Tr2Ovc6+Dr5Ovo6+zr8Ov06/jr/OwA7ATsCOwM7BDsFOwY7BzsIOwk7CjsLOww7DTsOOw87EDsROxI7EzsUOxU7FjsXOxg7GTsaOxs7HDsdOx47HzsgOyE7IjsjOyQ7JTsmOyg7KTsqOys7LDstOy47LzswOzE7MjszOzQ7NTs2Ozc7ODs5Ozo7Ozs8Oz07Pjs/O0A7QTtCO0M7RDtFO0Y7RztIO0k7SjtLO0w7TTtOO087UDtRO1I7VDtVO1Y7VztYO1k7WjtbO1w7XTteO187YDthO2I7YztkO2U7ZjtnO2g7aTtqO2s7bDttO247bztwO3E7cjtzO3Q7dTt2O3c7eDt5O3o7ezt8O307fjt/O4A7gTuCO4M7hDuFO4Y7hzuIO4k7ijuLO4w7jTuOO487kDuRO5I7kzuUO5U7ljuXO5g7mTuaO5s7nDudO547nzugO6E7ojujO6Q7pTumO6c7qDupO6o7qzusO607rjuvO7A7sTuyO7M7tDu1O7Y7tzu4O7k7uju7O7w7vTu+O787wDvBO8I7wzvEO8U7xjvHO8g7yTvKO8s7zDvNO847zzvQO9E70jvTO9Q71TvWO9c72DvZO9o72zvcO9073jvfO+A74TviO+M75DvlO+Y75zvoO+k76jvrO+w77TvuO+878DvxO/I78zv0O/U79jv3O/g7+Tv6O/s7/Dv9O/47/zwAPAE8AjwDPAQ8BTwGPAc8CDwJPAo8CzwMPA08DjwPPBA8ETwSPBM8FDwVPBY8FzwYPBk8GjwbPBw8HTwePB88IDwhPCI8IzwkPCU8JjwnPCg8KTwqPCs8LDwtPC48LzwwPDE8MjwzPDQ8NTw2PDc8ODw5PDo8Ozw8PD08Pjw/PEA8QTxCPEM8RDxFPEY8RzxIPEk8SjxLPEw8TTxOPE88UDxRPFI8UzxUPFU8VjxXPFg8WTxaPFs8XDxdPF48XzxgPGE8YjxjPGQ8ZTxmPGc8aDxpPGo8azxsPG08bjxvPHA8cTxyPHM8dDx1PHY8dzx4PHk8ejx7PHw8fTx+PH88gDyBPII8gzyEPIU8hjyHPIg8iTyKPIs8jDyNPI48jzyQPJE8kjyTPJQ8lTyWPJc8mDyZPJo8mzycPJ08njyfPKA8oTyiPKM8pDylPKY8pzyoPKk8qjyrPKw8rTyuPK88sDyxPLI8szy0PLU8tjy3PLg8uTy6PLs8vDy9PL48vzzAPME8wjzDPMQ8xTzGPMc8yDzJPMo8yzzMPM08zjzPPNA80TzSPNM81DzVPNY81zzYPNk82jzbPNw83TzePN884DzhPOI84zzkPOU85jznPOg86TzqPOs87DztPO487zzwPPE88jzzPPQ89Tz2PPc8+Dz5PPo8+zz8PP08/jz/PQA9AT0CPQM9BD0FPQY9Bz0IPQk9Cj0LPQw9DT0OPQ89ED0RPRI9Ez0UPRU9Fj0XPRg9GT0aPRs9HD0dPR49Hz0gPSE9Ij0jPSQ9JT0mPSc9KD0pPSo9Kz0sPS09Lj0vPTA9MT0yPTM9ND01PTY9Nz04PTk9Oj07PTw9PT0+PT89QT1CPUM9RD1FPUY9Rz1IPUk9Sj1LPUw9TT1OPU89UD1RPVI9Uz1UPVU9Vj1XPVg9WT1aPVs9XD1dPV49Xz1gPWE9Yj1jPWQ9ZT1mPWc9aD1pPWo9az1sPW09bj1vPXA9cT1yPXM9dD11PXY9dz14PXk9ej17PXw9fT1+PX89gD2BPYI9gz2EPYU9hj2HPYg9iT2KPYs9jD2NPY49jz2QPZE9kj2TPZQ9lT2WPZc9mD2ZPZo9mz2cPZ09nj2fPaE9oj2jPaQ9pT2mPac9qD2pPao9qz2sPa09rj2vPbA9sT2yPbM9tD21PbY9tz24Pbk9uj27Pbw9vT2+Pb89wD3BPcI9wz3EPcU9xj3HPcg9yT3KPcs9zD3NPc49zz3QPdE90j3TPdQ91T3WPdc92D3ZPdo92z3cPd093j3fPeA94T3iPeM95D3lPeY95z3oPek96j3rPew97T3uPe898D3xPfI98z30PfU99j33Pfg9+T36Pfs9/T3+Pf8+AD4BPgI+Az4EPgU+Bj4HPgg+CT4KPgs+DD4NPg4+Dz4QPhE+Ej4TPhQ+FT4WPhc+GD4ZPho+Gz4cPh0+Hj4fPiA+IT4iPiM+JD4lPiY+Jz4oPik+Kj4rPiw+LT4uPi8+MD4xPjI+Mz40PjU+Nj43Pjg+OT46Pjs+PD49Pj4+Pz5APkE+Qj5DPkQ+RT5GPkc+SD5JPko+Sz5MPk0+Tj5PPlA+UT5SPlM+VD5VPlY+Vz5YPlk+Wj5bPlw+XT5ePl8+YD5hPmI+Yz5kPmU+Zj5nPmg+aT5qPms+bD5tPm4+bz5wPnE+cj5zPnQ+dT52Pnc+eD55Pno+ez58Pn0+fj5/PoA+gT6CPoM+hD6FPoY+hz6IPok+ij6LPow+jT6OPo8+kD6RPpI+kz6UPpU+lj6XPpg+mT6aPps+nD6dPp4+nz6gPqE+oj6jPqQ+pT6mPqc+qD6pPqo+qz6sPq0+rj6vPrA+sT6yPrM+tD61PrY+tz64Prk+uj67Prw+vT6+Pr8+wD7BPsI+wz7EPsU+xj7HPsg+yT7LPsw+zT7OPs8+0D7RPtI+0z7UPtU+1j7XPtg+2T7aPts+3D7dPt4+3z7gPuE+4j7jPuQ+5T7mPuc+6D7pPuo+6z7sPu0+7j7vPvA+8T7yPvM+9D71PvY+9z74Pvk++j77Pvw+/T7+Pv8/AD8BPwI/Az8EPwU/Bj8HPwg/CT8KPws/DD8NPw4/Dz8QPxE/Ej8TPxQ/FT8WPxc/GD8ZPxo/Gz8cPx0/Hj8fPyA/IT8iPyM/JD8lPyY/Jz8oPyk/Kj8rPyw/LT8uPy8/MD8xPzI/Mz80PzU/Nj83Pzg/OT86Pzs/PD89Pz4/Pz9AP0E/Qj9DP0Q/RT9GP0c/SD9JP0o/Sz9MP00/Tj9PP1A/UT9SP1M/VD9VP1Y/Vz9YP1k/Wj9bP1w/XT9eP18/YD9hP2I/Yz9kP2U/Zj9nP2g/aT9qP2s/bD9tP24/bz9wP3E/cj9zP3Q/dT92P3c/eD95P3o/ez98P30/fj9/P4A/gT+CP4M/hD+FP4Y/hz+IP4k/ij+LP4w/jT+OP48/kD+RP5I/kz+UP5U/lj+XP5g/mT+aP5s/nD+dP54/nz+gP6E/oj+jP6Q/pT+mP6c/qD+pP6o/qz+sP60/rj+vP7A/sT+yP7M/tD+1P7Y/tz+4P7k/uj+7P7w/vT++P78/wD/BP8I/wz/EP8U/xj/HP8g/yT/KP8s/zD/NP84/zz/QP9E/0j/TP9Q/1T/WP9c/2D/ZP9o/2z/cP90/3j/fP+A/4T/iP+M/5D/lP+Y/5z/oP+k/6j/rP+w/7T/uP+8/8D/xP/I/8z/0P/U/9j/3P/g/+T/6P/s//D/9P/4//0AAQAFAAkADQARABUAGQAdACEAJQApAC0AMQA1ADkAPQBBAEUASQBNAFEAVQBZAF0AYQBlAGkAbQBxAHUAeQB9AIEAhQCJAI0AkQCVAJkAnQChAKUAqQCtALUAuQC9AMEAxQDJAM0A0QDVANkA3QDhAOUA6QDtAPEA9QD5AP0BAQEFAQkBDQERARUBGQEdASEBJQEpAS0BMQE1ATkBPQFBAUUBSQFNAVEBVQFZAV0BYQFlAWkBbQFxAXUBeQF9AYEBhQGJAY0BkQGVAZkBnQGhAaUBqQGtAbEBtQG5Ab0BwQHFAckBzQHRAdUB2QHdAeEB5QHpAe0B8QH1AfkB/QIBAgUCCQINAhECFQIZAh0CIQIlAikCLQIxAjUCOQI9AkECRQJJAk0CUQJVAlkCXQJhAmUCaQJtAnECdQJ5An0CgQKFAokCjQKRApUCmQKdAqECpQKpAq0CsQK1ArkCvQLBAsUCyQLNAtEC1QLZAt0C4QLlAukC7QLxAvUC+QL9AwEDBQMJAw0DEQMVAxkDHQMhAyUDKQMtAzEDNQM5Az0DQQNFA0kDTQNRA1UDWQNdA2EDZQNpA20DcQN1A3kDfQOBA4UDiQONA5EDlQOZA50DoQOlA6kDrQOxA7UDuQO9A8EDxQPJA80D0QPVA9kD3QPhA+UD6QPtA/ED9QP5A/0EAQQFBAkEDQQRBBUEGQQdBCEEJQQpBC0EMQQ1BDkEPQRBBEUESQRNBFEEVQRZBF0EYQRlBGkEbQRxBHUEeQR9BIEEhQSJBI0EkQSVBJkEnQShBKUEqQStBLEEtQS5BL0EwQTFBMkEzQTRBNUE2QTdBOEE5QTpBO0E8QT1BPkE/QUBBQUFCQUNBREFFQUZBR0FIQUlBSkFLQUxBTUFOQU9BUEFRQVJBU0FUQVVBVkFXQVhBWUFaQVtBXEFdQV5BX0FgQWFBYkFjQWRBZUFmQWdBaEFpQWpBa0FsQW1BbkFvQXBBcUFyQXNBdEF1QXZBd0F4QXlBekF7QXxBfUF+QX9BgEGBQYJBg0GEQYVBhkGHQYhBiUGKQYtBjEGNQY5Bj0GQQZFBkkGTQZRBlUGWQZdBmEGZQZpBm0GcQZ1BnkGfQaBBoUGiQaNBpEGlQaZBp0GoQalBqkGrQaxBrUGuQa9BsEGxQbJBs0G0QbVBtkG3QbhBuUG6QbtBvEG9Qb5Bv0HAQcFBwkHDQcRBxUHGQcdByEHJQcpBy0HMQc1BzkHPQdBB0UHSQdNB1EHVQdZB10HYQdlB2kHbQdxB3UHeQd9B4EHhQeJB40HkQeVB5kHnQehB6UHqQetB7EHtQe5B70HwQfFB8kH0QfVB9kH3QfhB+UH6QftB/EH9Qf5B/0IAQgFCAkIDQgRCBUIGQgdCCEIJQgpCC0IMQg1CDkIPQhBCEUISQhNCFEIVQhZCF0IYQhlCGkIbQhxCHUIeQh9CIEIhQiJCI0IkQiVCJkInQihCKUIqQitCLEItQi5CL0IwQjFCMkIzQjRCNUI2QjdCOEI5QjpCO0I8Qj1CPkI/QkBCQUJCQkNCREJFQkZCR0JIQklCSkJLQkxCTUJOQk9CUEJRQlJCU0JUQlVCVkJXQlhCWUJaQltCXEJdQl5CX0JgQmFCYkJjQmRCZUJmQmdCaEJpQmpCa0JsQm1CbkJvQnBCcUJyQnNCdEJ1QnZCd0J4QnlCekJ7QnxCfUJ+Qn9CgEKBQoJCg0KEQoVChkKHQohCiUKKQotCjEKNQo5Cj0KQQpFCkkKTQpRClUKWQpdCmEKZQppCm0KcQp1CnkKfQqBCoUKiQqNCpEKlQqZCp0KoQqlCqkKrQqxCrUKuQq9CsEKxQrJCs0K0QrVCtkK3QrhCuUK6QrtCvEK9Qr5Cv0LAQsFCwkLDQsRCxULGQsdCyELJQspCy0LMQs1CzkLPQtBC0ULSQtNC1ELVQtZC10LYQtlC2kLbQtxC3ULeQt9C4ELhQuJC40LkQuVC5kLnQuhC6ULqQutC7ELtQu5C70LwQvFC8kLzQvRC9UL2QvdC+EL5QvpC+0L8Qv1C/kL/QwBDAUMCQwNDBEMFQwZDB0MIQwlDCkMLQwxDDUMOQw9DEEMRQxJDE0MUQxVDFkMXQxhDGUMaQxtDHEMdQx5DH0MgQyFDIkMjQyRDJUMmQydDKEMpQypDK0MsQy1DLkMvQzBDMUMyQzNDNEM1QzZDN0M4QzlDOkM7QzxDPUM+Qz9DQENBQ0JDQ0NEQ0VDRkNHQ0hDSUNKQ0tDTENNQ05DT0NQQ1FDUkNTQ1RDVUNWQ1dDWENZQ1pDW0NcQ11DXkNfQ2BDYUNiQ2NDZENlQ2ZDZ0NoQ2lDakNrQ2xDbUNuQ29DcENxQ3JDc0N0Q3VDdkN3Q3hDeUN6Q3tDfEN9Q35Df0OAQ4FDgkODQ4RDhUOGQ4dDiEOJQ4pDi0OMQ41DjkOPQ5BDkUOSQ5NDlEOVQ5ZDl0OYQ5lDmkObQ5xDnUOeQ59DoEOhQ6JDo0OkQ6VDpkOnQ6hDqUOqQ6tDrEOtQ65Dr0OwQ7FDskOzQ7RDtUO2Q7dDuEO5Q7pDu0O8Q71DvkO/Q8BDwUPCQ8NDxEPFQ8ZDx0PIQ8lDykPLQ8xDzUPOQ89D0EPRQ9JD00PUQ9VD1kPXQ9hD2UPaQ9tD3EPdQ95D30PgQ+FD4kPjQ+RD5UPmQ+dD6EPpQ+pD60PsQ+1D7kPvQ/BD8UPyQ/ND9EP1Q/ZD90P4Q/lD+kP7Q/xD/UP+Q/9EAEQBRAJEA0QERAVEBkQHRAhECUQKRAtEDEQNRA5ED0QQRBFEEkQTRBREFUQWRBdEGEQZRBpEG0QcRB1EHkQfRCBEIUQiRCNEJEQlRCZEJ0QoRClEKkQrRCxELUQuRC9EMEQxRDJEM0Q0RDVENkQ3RDhEOUQ6RDtEPEQ9RD5EP0RAREFEQkRDRERERURGREdESERJREpES0RMRE1ETkRPRFBEUURSRFNEVERVRFZEV0RYRFlEWkRbRFxEXUReRF9EYERhRGJEY0RkRGVEZkRnRGhEaURqRGtEbERtRG5Eb0RwRHFEckRzRHREdUR2RHdEeER5RHpEe0R8RH1EfkR/RIBEgUSCRINEhESFRIZEh0SIRIlEikSLRIxEjUSORI9EkESRRJJEk0SURJVElkSXRJhEmUSaRJtEnESdRJ5En0SgRKFEokSjRKREpUSmRKdEqESpRKpEq0SsRK1ErkSvRLBEsUSyRLNEtES1RLZEt0S4RLlEukS7RLxEvUS+RL9EwETBRMJEw0TERMVExkTHRMhEyUTKRMtEzETNRM5Ez0TQRNFE0kTTRNRE1UTWRNdE2ETZRNpE20TcRN1E3kTfROBE4UTiRONE5ETlROZE50ToROlE6kTrROxE7UTuRO9E8ETxRPJE80T0RPVE9kT3RPhE+UT6RPtE/ET9RP5E/0UARQFFAkUDRQRFBUUGRQdFCEUJRQpFC0UMRQ1FDkUPRRBFEUUSRRNFFEUVRRZFF0UYRRlFGkUbRRxFHUUeRR9FIEUhRSJFI0UkRSVFJkUnRShFKUUqRStFLEUtRS5FL0UwRTFFMkUzRTRFNUU2RTdFOEU5RTpFO0U8RT1FPkU/RUBFQUVCRUNFREVFRUZFR0VIRUlFSkVLRUxFTUVORU9FUEVRRVJFU0VURVVFVkVXRVhFWUVaRVtFXEVdRV5FX0VgRWFFYkVjRWRFZUVmRWdFaEVpRWpFa0VsRW1FbkVvRXBFcUVyRXNFdEV1RXZFd0V4RXlFekV7RXxFfUV+RX9FgEWBRYJFg0WERYVFhkWHRYhFiUWKRYtFjEWNRY5Fj0WQRZFFkkWTRZRFlUWWRZdFmEWZRZpFm0WcRZ1FnkWfRaBFoUWiRaNFpEWlRaZFp0WoRalFqkWrRaxFrUWuRa9FsEWxRbJFs0W0RbVFtkW3RbhFuUW6RbtFvEW9Rb5Fv0XARcFFwkXDRcRFxUXGRcdFyEXJRcpFy0XMRc1FzkXPRdBF0UXSRdNF1EXVRdZF10XYRdlF2kXbRdxF3UXeRd9F4EXhReJF40XkReVF5kXnRehF6UXqRetF7EXtRe5F70XwRfFF8kXzRfRF9UX2RfdF+EX5RfpF+0X8Rf1F/kX/RgBGAUYCRgNGBEYFRgZGB0YIRglGCkYLRgxGDUYORg9GEEYRRhJGE0YURhVGFkYXRhhGGUYaRhtGHEYdRh5GH0YgRiFGIkYjRiRGJUYmRidGKEYpRipGK0YsRi1GLkYvRjBGMUYyRjNGNEY1RjZGN0Y4RjlGOkY7RjxGPUY+Rj9GQEZBRkJGQ0ZERkVGRkZHRkhGSUZKRktGTEZNRk5GT0ZQRlFGUkZTRlRGVUZWRldGWEZZRlpGW0ZcRl1GXkZfRmBGYUZiRmNGZEZlRmZGZ0ZoRmlGakZrRmxGbUZuRm9GcEZxRnJGc0Z0RnVGdkZ3RnhGeUZ6RntGfEZ9Rn5Gf0aARoFGgkaDRoRGhUaGRodGiEaJRopGi0aMRo1GjkaPRpBGkUaSRpNGlEaVRpZGl0aYRplGmkabRpxGnUaeRp9GoEahRqJGo0akRqVGpkanRqhGqUaqRqtGrEatRq5Gr0awRrFGskazRrRGtUa2RrdGuEa5RrpGu0a8Rr1Gvka/RsBGwUbCRsNGxEbFRsZGx0bIRslGykbLRsxGzUbORs9G0EbRRtJG00bURtVG1kbXRthG2UbaRttG3EbdRt5G30bgRuFG4kbjRuRG5UbmRudG6EbpRupG60bsRu1G7kbvRvBG8UbyRvNG9Eb1RvZG90b4RvlG+kb7RvxG/Ub+Rv9HAEcBRwJHA0cERwVHBkcHRwhHCUcKRwtHDEcNRw5HD0cQRxFHEkcTRxRHFUcWRxdHGEcZRxpHG0ccRx1HHkcfRyBHIUciRyNHJEclRyZHJ0coRylHKkcrRyxHLUcuRy9HMEcxRzJHM0c0RzVHNkc3RzhHOUc6RztHPEc9Rz5HP0dAR0FHQkdDR0RHRUdGR0dHSEdJR0pHS0dMR01HTkdPR1BHUUdSR1NHVEdVR1ZHV0dYR1lHWkdbR1xHXUdeR19HYEdhR2JHY0dkR2VHZkdnR2hHaUdrR2xHbUduR29HcEdxR3JHc0d0R3VHdkd3R3hHeUd6R3tHfEd9R35Hf0eAR4FHgkeDR4RHhUeGR4dHiEeJR4pHi0eMR41HjkePR5BHkUeSR5NHlEeVR5ZHl0eYR5lHmkebR5xHnUeeR59HoEehR6JHo0ekR6VHpkenR6hHqUeqR6tHrEetR65Hr0ewR7FHskezR7RHtUe2R7dHuEe5R7pHu0e8R71Hvke/R8BHwUfCR8NHxEfFR8ZHx0fIR8lHykfLR8xHzUfOR89H0EfRR9JH00fUR9VH1kfXR9hH2UfaR9tH3EfdR95H30fgR+FH4kfjR+RH5UfmR+dH6EfpR+pH60fsR+1H7kfvR/BH8UfyR/NH9Ef1R/ZH90f4R/lH+kf7R/xH/Uf+R/9IAEgBSAJIA0gESAVIBkgHSAhICUgKSAtIDEgNSA5ID0gQSBFIEkgTSBRIFUgWSBdIGEgZSBpIG0gcSB1IHkgfSCBIIUgiSCNIJEglSCZIJ0goSClIKkgrSCxILUguSC9IMEgxSDJIM0g0SDVINkg3SDhIOUg6SDtIPEg9SD5IP0hASEFIQkhDSERIRUhGSEdISEhJSEpIS0hMSE1ITkhPSFBIUUhSSFNIVEhVSFZIV0hYSFlIWkhbSFxIXUheSF9IYEhhSGJIY0hkSGVIZkhnSGhIaUhqSGtIbEhtSG5Ib0hwSHFIckhzSHRIdUh2SHdIeEh5SHpIe0h8SH1Ifkh/SIBIgUiCSINIhEiFSIZIh0iISIlIikiLSIxIjUiOSI9IkEiRSJJIk0iUSJVIlkiXSJhImUiaSJtInEidSJ5In0igSKFIokijSKRIpUimSKdIqEipSKpIq0isSK1IrkivSLBIsUiySLNItEi1SLZIt0i4SLlIuki7SLxIvUi+SL9IwEjBSMJIw0jESMVIxkjHSMhIyUjKSMtIzEjNSM5Iz0jQSNFI0kjTSNRI1UjWSNdI2EjZSNpI20jcSN1I3kjfSOBI4UjiSONI5EjlSOZI50joSOlI6kjrSOxI7UjuSO9I8EjxSPJI80j0SPVI9kj3SPhI+Uj6SPtI/Ej9SP5I/0kASQFJAkkESQVJBkkHSQhJCUkKSQtJDEkNSQ5JD0kQSRFJEkkTSRRJFUkWSRdJGEkZSRpJG0kcSR5JH0kgSSFJIkkjSSRJJUkmSSdJKEkpSSpJK0ksSS1JLkkvSTBJMUkySTNJNEk1STZJN0k4STlJOkk7STxJPUk+ST9JQElBSUJJQ0lESUVJRklHSUhJSUlKSUtJTElNSU5JT0lQSVFJUklTSVRJVUlWSVdJWElZSVpJW0lcSV1JXklfSWBJYUliSWNJZEllSWZJZ0loSWlJaklrSWxJbUluSW9JcElxSXJJc0l0SXVJdkl3SXhJeUl6SXtJfEl9SX5Jf0mASYFJgkmDSYRJhUmGSYdJiEmJSYpJi0mMSY1JjkmPSZBJkUmSSZNJlEmVSZZJl0mYSZlJmkmbSZxJnUmeSZ9JoEmhSaJJo0mkSaVJpkmnSahJqUmqSatJrEmtSa5Jr0mwSbFJskmzSbRJtUm2SbdJuEm5SbpJu0m8Sb1Jvkm/ScBJwUnCScNJxEnFScZJx0nISclJyknLScxJzUnOSc9J0EnRSdJJ00nUSdVJ1knXSdhJ2UnaSdtJ3EndSd5J4EnhSeJJ40nkSeVJ5knnSehJ6UnqSetJ7EntSe5J70nwSfFJ8knzSfRJ9Un2SfdJ+En5SfpJ+0n8Sf1J/kn/SgBKAUoCSgNKBEoFSgZKB0oISglKCkoLSgxKDUoOSg9KEEoRShJKE0oUShVKFkoXShhKGUoaShtKHEodSh5KH0ogSiFKIkojSiRKJUomSidKKEopSipKK0osSi1KLkovSjBKMUoySjNKNEo1SjZKN0o4SjlKOko7SjxKPUo+Sj9KQEpBSkJKQ0pESkVKRkpHSkhKSUpKSktKTEpNSk5KT0pQSlFKUkpTSlRKVUpWSldKWEpZSlpKW0pcSl1KXkpfSmBKYUpiSmNKZEplSmZKZ0poSmlKakprSmxKbUpuSm9KcEpxSnJKc0p0SnVKdkp3SnhKeUp6SntKfEp9Sn5Kf0qASoFKgkqDSoRKhUqGSodKiEqJSopKi0qMSo1KjkqPSpBKkUqSSpNKlEqVSpZKl0qYSplKmkqbSpxKnUqeSp9KoEqhSqJKo0qkSqVKpkqnSqhKqUqqSqtKrEqtSq5Kr0qwSrFKskqzSrRKtUq2SrdKuEq5SrpKu0q8Sr1Kvkq/SsBKwUrCSsNKxErFSsdKyErJSspKy0rMSs1KzkrPStBK0UrSStNK1ErVStZK10rYStlK2krbStxK3UreSt9K4ErhSuJK40rkSuVK5krnSuhK6UrqSutK7ErtSu5K70rwSvFK8krzSvRK9Ur2SvdK+Er5SvpK+0r8Sv1K/kr/SwBLAUsCSwNLBEsFSwZLB0sISwlLCksLSwxLDUsOSw9LEEsRSxJLE0sUSxVLFksXSxhLGUsaSxtLHEsdSx5LH0sgSyFLIksjSyRLJUsmSydLKEspSypLK0ssSy1LLksvSzBLMUsySzNLNEs1SzZLN0s4SzlLOks7SzxLPUs+Sz9LQEtBS0JLQ0tES0VLRktHS0hLSUtKS0tLTEtNS05LT0tQS1FLUktTS1RLVUtWS1dLWEtZS1pLW0tcS11LXktfS2BLYUtiS2NLZEtlS2ZLZ0toS2lLaktrS2xLbUtuS29LcEtxS3JLc0t0S3VLdkt3S3hLeUt6S3tLfEt9S35Lf0uAS4FLgkuDS4RLhUuGS4dLiEuJS4pLi0uMS41LjkuPS5BLkUuSS5NLlEuVS5ZLl0uYS5lLmkubS5xLnUueS59LoEuhS6JLo0ukS6VLpkunS6hLqUuqS6tLrEutS65Lr0uwS7FLskuzS7RLtUu2S7dLuEu5S7pLu0u8S71Lvku/S8BLwUvCS8NLxEvFS8ZLx0vIS8lLykvLS8xLzUvOS89L0EvRS9JL00vUS9VL1kvXS9hL2UvaS9tL3EvdS95L30vgS+FL4kvjS+RL5UvmS+dL6EvpS+pL60vsS+1L7kvvS/BL8UvyS/RL9Uv2S/dL+Ev5S/pL+0v8S/1L/kv/TABMAUwCTANMBEwFTAZMB0wITAlMCkwLTAxMDUwOTA9MEEwRTBJME0wUTBVMFkwXTBhMGUwaTBtMHEwdTB5MH0wgTCFMIkwjTCRMJUwmTCdMKEwpTCpMK0wsTC1MLkwvTDBMMUwyTDNMNEw1TDZMN0w4TDlMOkw7TDxMPUw+TD9MQExBTEJMQ0xETEVMRkxHTEhMSUxKTEtMTExNTE5MT0xQTFFMUkxTTFRMVUxWTFdMWExZTFpMW0xcTF1MXkxfTGBMYUxiTGNMZExlTGZMZ0xoTGlMakxrTGxMbUxuTG9McExxTHJMc0x0THVMdkx3THhMeUx6THtMfEx9TH5Mf0yATIFMgkyDTIRMhUyGTIdMiEyJTIpMi0yMTI1MjkyPTJBMkUySTJNMlEyVTJZMl0yYTJlMmkybTJxMnUyeTJ9MoEyhTKJMo0ykTKVMpkynTKhMqUyqTKtMrEytTK5Mr0ywTLFMskyzTLRMtUy2TLdMuEy5TLpMu0y8TL1Mvky/TMBMwUzCTMNMxEzFTMZMx0zITMlMykzLTMxMzUzOTM9M0EzRTNJM00zUTNVM1kzXTNhM2UzaTNtM3EzdTN5M30zgTOFM4kzjTORM5UzmTOdM6EzpTOpM60zsTO1M7kzvTPBM8UzyTPNM9Ez1TPZM90z4TPlM+kz7TPxM/Uz+TP9NAE0BTQJNA00ETQVNBk0HTQhNCU0KTQtNDE0NTQ5ND00QTRFNEk0TTRRNFU0WTRdNGE0ZTRpNG00cTR1NHk0fTSBNIU0iTSNNJE0lTSZNJ00oTSlNKk0rTSxNLU0uTS9NME0xTTJNM000TTVNNk03TThNOU06TTtNPE09TT5NP01ATUFNQk1DTURNRU1GTUdNSE1JTUpNS01MTU1NTk1PTVBNUU1STVNNVE1VTVZNV01YTVlNWk1bTVxNXU1eTV9NYE1hTWJNY01kTWVNZk1nTWhNaU1qTWtNbE1tTW5Nb01wTXFNck1zTXRNdU12TXdNeE15TXpNe018TX1Nfk1/TYBNgU2CTYNNhE2FTYZNh02ITYlNik2LTYxNjU2OTY9NkE2RTZJNk02UTZVNlk2XTZhNmU2aTZtNnE2dTZ5Nn02gTaFNok2jTaRNpU2mTadNqE2pTapNq02sTa1Nrk2vTbBNsU2yTbNNtE21TgFOAk4DTgROBU4GTghODE4OTg9OEE4RThJOE04UThVOF04YThlOGk4bThxOHU4eTh9OIE4hTiJOI04kTiVOJ04oTilOK04sTi5OL04wTjFOMk4zTjRONU42TjdOOU46TjxOPU4+Tj9OQE5BTkJOQ05ETkZOR05ITklOSk5MTk1OTk5PTlBOUU5STlNOVE5VTlZOV05YTllOWk5bTlxOXU5eTmBOYU5iTmNOZE5lTmZOZ05oTmlOak5rTmxObU5uTm9OcE5xTnJOc050TnVOdk53TnhOeU56TntOfE59Tn9OgE6BToJOg06EToVOh06JTopOjU6OTo9OkE6RTpJOk06UTpVOlk6XTphOmU6aTpxOnU6eTp9OoE6hTqJOo06lTqZOp06oTqlOqk6rTq1Ork6vTrBOsU6yTrNOtE61TrZOt064TrlOu068Tr1Ovk6/TsBOwU7CTsNOxE7FTsdOyE7JTsxOzU7OTs9O0E7RTtJO007UTtdO2U7aTttO3E7dTt5O307gTuFO4k7kTuZO507oTulO6k7rTuxO7k7vTvBO8U7yTvNO9E71TvdO+E75TvpO/E79Tv5O/08ATwJPA08ETwVPBk8HTwhPCU8KTwtPDE8NTw5PD08QTxJPE08UTxVPFk8XTxhPGU8bTxxPHU8eTx9PIE8hTyJPI08kTyVPJk8nTyhPKU8qTytPLE8tTy5PL08wTzFPMk8zTzRPNU82TzdPOE85TzpPO088Tz1PPk8/T0BPQU9CT0NPRE9FT0ZPR09IT0lPSk9LT0xPTk9QT1FPUk9UT1ZPV09YT1lPWk9bT11PXk9fT2BPYU9iT2NPZE9lT2ZPZ09oT2lPak9rT2xPbU9uT29PcE9xT3JPc090T3VPdk93T3hPeU96T3tPfE99T35PgU+CT4NPhE+FT4ZPh0+IT4lPik+MT41Pjk+PT5BPkU+TT5RPlU+WT5dPmE+ZT5pPnE+dT55Pn0+gT6JPo0+kT6VPpk+nT6hPqU+qT6tPrE+tT65Pr0+wT7FPsk+zT7RPtU+3T7hPuU+6T7tPvE+9T75PwU/DT8RPxU/GT8dPyE/JT8pPy0/MT81Pzk/PT9BP0U/ST9NP1E/VT9ZP10/YT9lP2k/bT9xP3k/fT+BP4k/jT+RP5U/mT+dP6E/pT+pP60/sT+1P70/wT/FP8k/zT/RP9U/2T/dP+E/5T/pP+0/8T/1P/1AAUAFQAlADUARQBVAGUAdQCFAKUAxQDVAOUA9QEFASUBNQFFAVUBZQF1AYUBlQGlAbUBxQHVAeUB9QIFAhUCJQI1AkUCVQJlAnUChQKVAqUCtQLFAtUC5QL1AwUDFQMlAzUDRQNVA2UDdQOFA5UDpQO1A8UD1QPlA/UEBQQVBCUERQRVBGUEdQSFBJUEpQS1BMUE1QTlBPUFBQUVBSUFNQVFBVUFZQV1BYUFlQWlBbUFxQXVBeUF9QYFBhUGJQY1BkUGZQZ1BoUGlQalBrUGxQbVBuUG9QcFBxUHJQc1B0UHVQdlB3UHhQeVB6UHtQfFB9UH5Qf1CAUIFQglCDUIRQhVCGUIdQiFCJUIpQi1CMUI1QjlCPUJBQkVCSUJNQlFCVUJZQl1CYUJpQm1CcUJ1QnlCfUKBQoVCiUKNQpFClUKZQp1CoUKlQqlCrUK1QrlCvULBQsVCyULNQtFC1ULZQt1C4ULlQulC7ULxQvVC+UL9QwFDBUMNQxFDFUMZQx1DIUMlQylDLUMxQzVDOUNBQ0VDSUNNQ1FDVUNZQ11DYUNlQ2lDbUNxQ3VDeUN9Q4FDhUOJQ41DkUOVQ5lDnUOhQ6VDrUOxQ7VDuUO9Q8FDxUPJQ81D0UPVQ9lD3UPhQ+VD6UPtQ/FD9UP5Q/1EAUQFRAlEDUQRRBVEGUQdRCFEJUQpRC1EMUQ1RDlEPURBREVESURNRFFEVURZRF1EYURlRG1EcUR1RHlEfUSBRIVEiUSNRJFElUSZRJ1EoUSlRK1EsUS1RLlEvUTBRMVEyUTNRNFE1UTZRN1E4UTlROlE7UTxRPVE+UT9RQFFBUUJRRFFFUUZRR1FKUUtRTFFOUU9RUFFRUVJRU1FUUVVRVlFXUVhRWVFaUVtRXFFdUV5RX1FgUWFRYlFjUWRRZlFnUWlRalFrUW1RblFvUXBRclFzUXRRdVF5UXpRe1F8UX1RflF/UYBRgVGCUYNRhFGHUYhRiVGKUYtRjFGOUY9RkFGRUZJRk1GUUZVRllGXUZhRmlGbUZxRnVGeUZ9RoFGhUaJRo1GkUaVRplGnUahRqVGqUatRrFGtUa5Rr1GwUbFRslGzUbRRtVG2UbdRuFG5UbpRu1G8Ub1RvlG/UcBRwVHCUcNRxFHFUcZRx1HIUclRylHLUcxRzVHOUc9R0FHRUdJR01HUUdVR1lHXUdhR2VHaUdtR3FHdUd5R31HgUeFR4lHjUeRR5VHmUedR6FHpUetR7FHtUe5R71HwUfFR8lHzUfRR9VH2UfdR+FH5UftR/FH9Uf5R/1IAUgFSAlIDUgRSBVIIUglSClILUgxSDVIOUg9SEFIRUhJSE1IUUhVSFlIXUhhSGVIaUhtSHFIeUh9SIFIhUiJSI1IkUiZSJ1IoUipSK1IsUi1SLlIvUjFSMlIzUjRSNVI3UjhSOVI6UjtSPFI9Uj5SP1JAUkFSQlJDUkRSRVJGUkdSSFJJUkpSS1JMUk5ST1JQUlFSUlJTUlRSVVJWUldSWFJZUlpSW1JcUl1SXlJfUmBSYVJiUmNSZFJlUmZSZ1JoUmlSalJrUmxSbVJuUm9ScFJxUnNSdFJ2UndSeFJ5UnpSe1J8Un1SflJ/UoBSgVKCUoNShFKFUoZSh1KIUolSilKMUo1SjlKPUpBSkVKSUpNSlFKVUpZSl1KYUplSmlKcUp1SnlKhUqJSo1KkUqVSplKnUqhSqlKrUqxSrVKuUq9SsFKxUrJSs1K0UrVStlK3UrhSulK7UrxSvVK+Ur9SwFLBUsJSw1LEUsVSxlLHUshSyVLKUstSzFLNUs5Sz1LQUtFS0lLTUtRS1lLXUthS2lLbUtxS3VLeUuBS4VLjUuRS5VLmUudS6FLpUupS61LsUu1S7lLvUvBS8VLyUvNS9FL1UvZS91L5UvpS+1L8Uv1S/lL/UwBTAVMCUwNTBFMGUwdTCFMJUwpTC1MMUw1TDlMPUxBTEVMSUxNTFFMVUxhTGVMaUxtTHFMdUx5TH1MgUyFTIlMjUyRTJVMmUydTKFMpUypTK1MsUy1TLlMvUzBTMVMyUzNTNFM1UzZTN1M4UztTPFM9Uz5TP1NCU0RTRVNGU0dTSFNJU0tTTFNNU05TT1NQU1FTUlNTU1VTVlNZU1tTXFNdU15TX1NgU2FTYlNjU2RTZVNmU2dTaFNpU2pTa1NsU21TblNvU3FTclN0U3VTdlN3U3hTeVN6U3tTfFN9U35Tf1OAU4FTglODU4RThVOGU4dTiFOJU4pTi1OMU41TjlOPU5BTkVOSU5NTlFOVU5ZTl1OYU5lTmlObU5xTnVOeU6BToVOjU6RTpVOmU6dTqFOpU6pTq1OsU61TrlOvU7BTsVOyU7NTtFO1U7ZTt1O4U7lTulO8U71TvlO/U8BTwVPDU8RTxVPGU8dTyVPMU85Tz1PQU9FT0lPTU9RT1VPYU9lT2lPbU9xT3lPfU+BT4VPiU+VT5lPnU+hT6VPqU+tT7FPtU+5T8VP0U/VT9lP5U/pT+1P8U/1T/1QAVAFUAlQDVAVUBlQHVAlUClQLVA5UD1QQVBJUE1QUVBVUFlQXVBhUGVQaVBtUHFQdVB5UH1QgVCFUIlQjVCRUJVQnVChUKVQqVCxULVQuVC9UMFQxVDJUM1Q0VDVUNlQ4VDlUOlQ7VDxUPVQ+VD9UQFRBVEJUQ1REVEVURlRHVEhUSVRLVExUTVROVE9UUFRRVFJUU1RUVFVUVlRXVFhUWVRaVFtUXFRdVF5UX1RgVGFUYlRjVGRUZVRmVGdUaVRqVGtUbFRtVG5Ub1RwVHFUclR0VHVUdlR3VHhUeVR6VHtUfFR+VH9UgFSBVIJUg1SEVIVUhlSHVIhUiVSKVItUjVSOVI9UkFSRVJJUk1SUVJVUllSXVJhUmVSaVJtUnFSdVJ5Un1SgVKFUolSjVKRUpVSmVKdUqFSpVKpUq1SsVK1UrlSvVLFUslSzVLRUtVS2VLdUuFS5VLpUu1S8VL1UvlS/VMBUwlTDVMRUxVTGVMdUyFTJVMpUy1TMVM1UzlTPVNBU0VTSVNNU1FTVVNZU11TYVNlU2lTbVNxU3VTeVN9U4FTiVONU5FTmVOdU6FTpVOpU61TsVO1U7lTvVPBU8VTyVPNU9FT1VPZU91T4VPlU+lT7VPxU/VT+VP9VAFUBVQJVA1UEVQVVBlUHVQhVCVUKVQtVDFUNVQ5VD1UQVRFVElUTVRRVFVUWVRdVGFUZVRpVG1UcVR1VHlUfVSBVIVUiVSNVJFUlVSZVJ1UoVSlVKlUrVSxVLVUuVS9VMFUxVTJVM1U0VTVVNlU3VThVOVU6VTtVPFU9VT5VP1VAVUFVQlVDVURVRVVHVUhVSVVKVUxVTVVOVVBVUVVSVVNVVFVVVVZVV1VYVVlVWlVbVVxVXVVeVV9VYFVhVWJVY1VkVWVVZlVnVWhVaVVqVWtVbFVtVW5Vb1VwVXFVclVzVXRVdVV2VXdVeFV5VXpVe1V8VX1VflV/VYBVgVWCVYNVhFWFVYZVh1WIVYlVilWLVYxVjlWPVZBVkVWSVZNVlFWVVZZVl1WYVZlVmlWbVZxVnVWfVaBVoVWiVaNVpFWlVaZVp1WoValVqlWrVaxVrVWuVa9VsFWxVbJVs1W0VbVVt1W4VblVulW7VbxVvVW+Vb9VwFXBVcJVw1XEVcVVxlXHVchVyVXKVctVzFXNVc5Vz1XQVdFV0lXTVdRV1VXWVddV2FXZVdpV21XcVd1V3lXfVeBV4VXiVeNV5FXlVeZV51XpVepV61XsVe1V7lXvVfBV8VXyVfNV9FX1VfZV91X4VflV+lX7VfxV/VX+Vf9WAFYBVgJWA1YEVgVWBlYHVghWCVYKVgtWDFYNVg5WD1YQVhFWElYTVhRWFVYWVhdWGFYZVhpWG1YcVh1WHlYfViBWIVYiViNWJFYlViZWJ1YoVilWKlYrVixWLVYuVi9WMFYxVjJWM1Y0VjVWNlY3VjhWOVY6VjtWPFY9Vj5WP1ZAVkFWQlZDVkRWRVZGVkdWSFZKVktWTFZNVk5WT1ZQVlFWUlZTVlRWVVZWVldWWFZZVlpWW1ZcVl1WXlZfVmBWYVZiVmNWZFZlVmZWZ1ZpVmpWa1ZsVm1WblZvVnBWcVZyVnNWdFZ1VnZWd1Z4VnlWelZ7VnxWfVZ+Vn9WgFaBVoJWg1aEVoVWhlaHVohWiVaKVotWjFaNVo5Wj1aQVpFWklaTVpRWlVaWVpdWmFaZVppWm1acVp1WnlafVqBWoVaiVqNWpFalVqdWqFapVqpWq1asVq1WrlavVrBWsVayVrNWtFa1VrZWt1a4VrlWula7VrxWvVa+Vr9WwFbBVsJWw1bEVsVWxlbHVshWyVbKVstWzFbNVs5Wz1bQVtFW0lbTVtRW1VbWVtdW2FbZVtpW3FbdVt9W4VbiVuRW5VbmVudW6FbpVupW61bsVu1W7lbvVvBW8VbzVvRW9Vb2VvdW+Fb5VvpW+1b8Vv5W/1cAVwFXAlcDVwRXBVcGVwdXCFcJVwpXDFcNVw5XD1cQVxFXE1cUVxVXFlcXVxhXGVcaVxtXHFcdVx5XIFchVyJXI1ckVyVXJlcnVylXKlcrVyxXLVcuVy9XMVcyVzNXNFc1VzZXN1c4VzlXOlc7VzxXPVc+Vz9XQFdBV0JXQ1dEV0VXRldHV0hXSVdKV0tXTFdNV05XT1dQV1FXUldTV1RXVVdWV1dXWFdZV1pXW1dcV11XXldfV2BXYVdiV2NXZFdlV2ZXZ1doV2lXaldrV2xXbVduV29XcFdxV3JXc1d0V3VXdld3V3hXeVd6V3tXfFd9V35XgFeBV4JXg1eEV4VXhleHV4hXiVeKV4xXjVePV5BXkVeSV5NXlFeVV5ZXl1eYV5lXmlebV5xXnVefV6BXoVeiV6NXpFelV6ZXp1eoV6lXqlerV61XrlevV7BXsVeyV7NXtFe1V7ZXt1e4V7lXule7V7xXvVe+V79XwFfBV8JXw1fEV8VXxlfHV8hXyVfKV8tXzFfNV89X0FfRV9JX01fUV9VX1lfXV9hX2VfaV9tX3FfdV95X4FfhV+JX41fkV+VX5lfnV+hX6VfqV+tX7FftV+5X71fwV/FX8lfzV/RX9Vf2V/dX+Ff5V/tX/Ff9V/5X/1gAWAFYAlgDWARYBVgGWAdYCFgJWApYC1gMWA1YD1gQWBFYElgTWBRYFVgWWBdYGFgZWBpYG1gcWB1YHlgfWCBYIVgiWCNYJFglWCZYJ1goWClYKlgrWCxYLVguWC9YMFgyWDNYNVg2WDdYOFg5WDpYO1g8WD1YPlg/WEBYQVhCWENYRFhFWEZYR1hIWElYSlhLWExYTVhOWE9YUFhRWFJYU1hUWFVYVlhXWFhYWVhaWFtYXFhdWF5YX1hgWGFYYlhjWGRYZVhmWGdYaFhpWGpYa1hsWG1YblhvWHBYcVhyWHNYdFh1WHZYd1h4WHlYelh7WHxYflh/WIBYgViCWIRYhViGWIdYiFiJWIpYi1iMWI1YjliPWJBYkViSWJNYlFiVWJZYl1iYWJlYmlibWJxYnVieWJ9YoFihWKJYo1ikWKVYplinWKhYqViqWKtYrFitWK5Yr1iwWLFYslizWLRYtVi2WLdYuFi5WLpYu1i8WL1Yvli/WMBYwVjCWMNYxFjFWMZYx1jIWMlYyljLWMxYzVjOWM9Y0FjRWNJY01jUWNVY1ljXWNhY2VjaWNtY3FjdWN5Y31jgWOFY4ljjWORY5VjmWOdY6FjpWOpY7FjtWO5Y71jxWPNY9Fj1WPZY91j4WPlY+lj7WPxY/Vj+WP9ZAFkBWQJZA1kEWQVZBlkHWQhZClkLWQxZDVkOWRBZEVkSWRNZFFkVWRdZGFkZWRtZHFkdWR5ZH1kgWSJZI1kkWSVZJlkoWSxZLVkuWS9ZMFkyWTNZNFk1WTZZN1k4WTlZOlk7WTxZPVk+WT9ZQFlBWUJZRFlFWUZZR1lIWUlZSllLWUxZTVlOWU9ZUFlRWVJZU1lUWVVZVllXWVhZWVlaWVtZXFldWV5ZX1lgWWFZYlljWWRZZVlmWWdZaFlpWWpZa1lsWW1ZbllvWXBZcVlyWXRZdVl2WXdZeFl5WXpZe1l8WX5Zf1mAWYFZg1mEWYVZhlmHWYhZiVmKWYtZjFmNWY5Zj1mQWZFZklmTWZRZlVmWWZdZmFmZWZpZm1mcWZ1ZnlmfWaBZoVmiWaNZpFmlWaZZp1moWalZqlmrWaxZrVmuWa9ZsFmxWbJZs1m0WbVZtlm3WbhZuVm6WbtZvFm9Wb5Zv1nAWcFZwlnDWcRZxVnGWcdZyFnJWcpZzFnNWc5Zz1nQWdFZ0lnTWdRZ1VnWWddZ2FnZWdpZ21ncWd1Z3lnfWeBZ4VniWeNZ5FnlWeZZ51noWelZ6lnrWexZ7VnuWe9Z8FnyWfNZ9Fn2WfdZ+Fn5WfpZ+1n8Wf1Z/ln/WgBaAVoCWgNaBFoFWgZaB1oIWglaCloLWgxaDVoOWg9aEFoRWhJaE1oUWhVaFloXWhhaGVobWhxaHVofWiBaIVoiWiNaJFolWiZaJ1ooWilaKlorWixaLVouWi9aMFoxWjJaM1o0WjVaNlo3WjhaOVo6WjtaPFo9Wj5aP1pAWkFaQlpDWkRaRVpGWkdaSFpJWkpaS1pMWk1aTlpPWlBaUVpSWlNaVVpWWldaWFpZWlpaW1pcWl1aXlpfWmBaYVpiWmNaZFplWmdaaFppWmpaa1psWm1ablpvWnFaclpzWnRadVp2WndaeFp5Wnpae1p8Wn1aflp/WoBagVqCWoNahFqFWoZah1qIWolailqLWoxajVqOWo9akFqRWpJak1qUWpVallqXWphamVqaWptanFqdWp5an1qgWqFaolqjWqRapVqmWqdaqFqpWqpaq1qsWq1arlqvWrBasVqyWrNatFq1WrZat1q4Wrlaulq7Wrxavlq/WsBawVrCWsNaxFrFWsZax1rIWslaylrLWsxazVrOWs9a0FrRWtJa01rUWtVa1lrXWtha2VraWtta3FrdWt5a31rgWuFa4lrjWuRa5VrmWuda6FrpWupa61rtWu5a71rwWvFa8lrzWvRa9Vr2Wvda+Fr5Wvpa+1r8Wv1a/lr/WwBbAVsCWwNbBFsFWwZbB1sIWwlbClsLWwxbDVsOWw9bEFsRWxJbE1sUWxVbFlsXWxhbGVsaWxtbHFsdWx5bH1sgWyFbIlsjWyRbJVsmWydbKFspWypbK1ssWy1bLlsvWzBbMVsyWzNbNFs1WzZbN1s4WzlbOls7WzxbPVs+Wz9bQFtBW0JbQ1tEW0VbRltHW0hbSVtKW0tbTFtNW05bT1tRW1JbU1tVW1ZbWVtaW1tbXFtdW15bX1tgW2FbYltkW2VbZ1toW2lbaltrW2xbbVtuW29bcFtxW3Jbc1t0W3Vbdlt3W3lbelt7W3xbfVt+W39bgFuBW4Jbg1uEW4VbhluHW4hbiluLW41bjluPW5BbkVuSW5NblFuVW5Zbl1uYW5lbm1ucW51bnlugW6Fbo1ulW6Zbp1uoW6lbqlurW6xbrVuvW7BbsVuyW7NbtFu1W7dbuFu6W7tbvFu9W75bv1vAW8FbwlvDW8RbxVvHW8hbyVvKW8tbzVvOW89b0FvRW9Jb01vUW9Vb1lvXW9hb2VvaW9tb3FvdW95b31vgW+Fb4lvjW+Rb5VvmW+hb6VvqW+tb7FvtW+5b71vwW/Fb8lvzW/Rb9Vv2W/db+Fv5W/pb+1v8W/1b/1wAXAFcAlwDXARcBVwGXAdcCFwJXApcC1wMXA1cEFwSXBNcFFwVXBZcF1wYXBlcGlwbXBxcHVweXB9cIFwhXCJcI1wkXCVcJlwnXChcKVwqXCtcLFwtXC5cL1wwXDJcM1w0XDVcNlw3XDhcOVw6XDtcPFw9XD5cP1xAXEFcQlxDXERcRlxHXEhcTFxNXE5cT1xQXFFcUlxUXFdcWFxZXFpcW1xcXF1cXlxfXGBcYVxiXGNcZFxlXGZcZ1xoXGlcalxrXGxcbVxuXG9ccFxyXHNcdFx1XHZcd1x4XHlcelx7XHxcfVx+XH9cgFyBXIJcg1yEXIVchlyHXIhciVyKXItcjFyNXI5cj1yQXJFcklyTXJRclVyWXJdcmFyZXJpcm1ycXJ1cnlyfXKBcoVyjXKRcpVymXKdcqFypXKpcq1ysXK1crlyvXLBcsVyyXLNctFy1XLZct1y4XLlculy7XLxcvVy+XL9cwFzBXMJcw1zEXMVcxlzHXMhcyVzKXMtczFzNXM5cz1zQXNFc0lzTXNRc1VzWXNdc2FzZXNpc21zcXN1c3lzfXOBc4VziXONc5FzlXOZc51zoXOlc6lzrXOxc7VzuXO9c8FzxXPJc81z0XPVc91z4XPlc+lz7XPxc/Vz+XP9dAF0BXQJdA10EXQVdBl0HXQhdCV0KXQtdDF0NXQ5dD10QXRJdE10UXRVdFl0XXRhdGV0aXRtdHF0dXR5dH10gXSFdIl0jXSRdJV0mXSddKF0pXSpdK10sXS1dLl0vXTBdMV0yXTNdNF01XTZdN104XTldOl07XTxdPV0+XT9dQF1BXUJdQ11EXUVdRl1HXUhdSV1KXUtdTF1NXU5dT11QXVFdUl1TXVRdVV1WXVddWF1ZXVpdW11cXV1dXl1fXWBdYV1iXWNdZF1lXWZdZ11oXWldal1rXWxdbV1uXW9dcF1xXXJdc110XXVddl13XXhdeV16XXtdfF19XX5df12AXYFdgl2DXYRdhV2GXYddiF2JXYpdi12MXY1djl2PXZBdkV2SXZNdlF2VXZZdl12YXZldml2bXZxdnV2eXZ9doF2hXaJdo12kXaVdpl2nXahdqV2qXatdrF2tXa5dr12wXbFdsl2zXbRdtV22XbdduF25Xbpdu128Xb1dvl2/XcBdwV3CXcNdxF3FXcZdx13IXcldyl3LXcxdzV3OXc9d0F3RXdJd013UXdVd1l3XXdhd2V3aXdtd3F3eXeBd4V3iXeNd5F3mXedd6F3pXepd613sXe1d7l3vXfBd8l3zXfRd9V32Xfdd+F35Xfpd+138Xf1d/l3/XgBeAV4EXgVeBl4HXgheCV4KXgteDV4OXg9eEF4RXhJeE14UXhVeFl4XXhheGV4aXhteHF4dXh5eH14gXiFeIl4jXiReJV4mXideKF4pXipeLF4tXi5eL14wXjFeMl4zXjReNV42XjdeOV46XjtePF49Xj5eP15AXkFeQl5DXkReRV5GXkdeSF5JXkpeS15MXk1eTl5PXlFeUl5TXlReVV5WXldeWF5ZXlpeW15cXl1eXl5fXmBeYV5jXmReZV5mXmdeaF5pXmpea15sXm1ebl5vXnBecV5yXnVedl53XnheeV56XntefF59Xn5ef16AXoFegl6EXoVehl6HXoheiV6KXotejF6NXo5ej16QXpFekl6TXpRelV6WXphemV6aXptenV6eXp9eoF6hXqJeo16kXqVeqF6pXqpeq16sXq1erl6vXrBesV6yXrNetF61XrZeuF65Xrpeu168Xr1evl6/XsBewV7CXsNexF7FXsZex17IXsleyl7LXsxezV7OXtBe0V7SXtNe1F7VXtZe117YXtle2l7bXtxe3V7eXt9e4F7hXuJe417kXuVe5l7nXuhe6V7qXute7F7tXu5e717wXvFe8l7zXvRe9V72Xvde+F75Xvte/F79Xv5e/18AXwFfAl8DXwRfBV8GXwdfCF8JXwtfDF8NXw5fEF8RXxJfE18UXxZfF18YXxlfGl8bXxxfHV8eXx9fIF8hXyJfI18kXyVfJl8nXyhfKV8qXytfLF8tXy5fL18wXzFfM180XzZfOF85XzpfO188Xz1fPl8/X0BfQV9CX0NfRF9FX0ZfR19IX0lfSl9LX0xfTV9OX09fUF9RX1JfVF9VX1ZfV19YX1lfWl9bX11fXl9fX2BfYV9jX2RfZV9mX2dfaF9pX2pfa19sX21fbl9vX3Bfcl9zX3RfdV92X3dfeF95X3pfe198X31ffl9/X4BfgV+CX4NfhF+GX4dfiF+JX4pfi1+NX45fj1+QX5Ffkl+TX5RflV+WX5hfmV+aX5tfnF+dX55fn1+gX6Ffol+jX6RfpV+mX6dfqF+pX6pfq1+sX61frl+vX7BfsV+yX7NftV+2X7dfuF+5X7pfu1+8X71fvl+/X8BfwV/CX8Rfxl/HX8hfyV/KX8tfzF/NX85fz1/QX9Ff0l/TX9Rf1V/WX9df2V/aX9tf3V/eX99f4F/hX+Jf41/kX+Vf5l/nX+hf6V/qX+xf7V/uX+9f8F/xX/Jf81/0X/Zf91/4X/lf+l/7X/xf/V/+X/9gAGABYAJgBGAFYAZgB2AIYAlgCmALYAxgDWAOYA9gEGARYBJgE2AUYBVgFmAXYBhgGWAaYBtgHGAeYB9gIGAhYCJgI2AkYCVgJmAoYClgK2AsYC1gLmAvYDBgMWAyYDNgNGA1YDZgN2A4YDlgOmA7YDxgPWA+YD9gQGBBYEJgQ2BEYEVgRmBHYEhgSWBKYEtgTGBNYE5gT2BQYFFgUmBTYFRgVWBWYFdgWGBZYFpgW2BcYF1gXmBfYGBgYWBiYGNgZGBlYGZgZ2BoYGpga2BsYG1gbmBvYHBgcWByYHNgdGB1YHZgd2B4YHlgemB7YHxgfWB+YH9ggGCBYIJgg2CEYIVghmCHYIhgiWCKYItgjGCNYI5gj2CQYJFgkmCTYJRglWCWYJdgmGCZYJpgm2CcYJ1gnmCfYKBgoWCiYKNgpGClYKZgp2CpYKpgq2CsYK1grmCvYLBgsWCyYLNgtGC1YLZgt2C4YLpgu2C8YL1gvmC/YMBgwWDCYMNgxGDGYMdgyGDJYMpgy2DMYM1gzmDPYNBg0WDSYNNg1GDVYNZg12DYYNlg2mDbYNxg3WDeYN9g4GDhYOJg42DkYOVg5mDnYOhg6WDqYOtg7GDtYO5g72DwYPFg8mD0YPVg9mD3YPhg+WD6YPtg/GD9YP5g/2EAYQFhAmEDYQRhBWEGYQdhCGEJYQphC2EMYQ1hDmEQYRFhEmETYRRhFWEWYRdhGGEZYRphHGEdYR5hIGEhYSJhI2EkYSVhJmEnYSlhKmErYSxhLWEuYS9hMGExYTJhM2E0YTVhNmE3YThhOWE6YTthPGE9YT5hP2FAYUFhQmFDYURhRWFGYUdhSGFJYUphTGFNYU5hT2FQYVFhUmFTYVRhVWFWYVdhWGFZYVphW2FcYV1hXmFfYWBhYWFiYWNhZGFlYWZhZ2FoYWlhamFrYWxhbWFuYW9hcGFxYXJhc2F0YXVhdmF3YXhheWF6YXthfGF9YX5hf2GAYYFhgmGDYYRhhWGGYYdhiGGJYYphi2GMYY1hjmGPYZBhkWGSYZNhlGGVYZZhl2GZYZphm2GcYZ1hnmGfYaBhoWGiYaNhpGGlYaZhp2GoYalhqmGrYaxhrWGuYa9hsGGxYbJhs2G0YbVhtmG3YbhhuWG6YbthvGG9Yb5hv2HAYcFhwmHDYcRhxWHGYcdhyGHJYcphy2HMYc1hzmHPYdBh0WHSYdNh1GHVYdZh12HYYdlh2mHbYdxh3WHeYd9h4GHhYeJh42HkYeVh5mHnYehh6WHqYeth7GHtYe5h72HwYfFh8mHzYfVh9mH3Yfhh+WH6Yfth/GH9Yf5h/2IAYgFiAmIDYgRiBWIGYgdiCGIJYgpiC2IMYg1iDmIPYhJiE2IUYhViF2IYYhliGmIbYhxiHWIeYh9iIGIhYiJiI2IkYiViJmInYihiKWIqYitiLGItYi5iL2IwYjFiMmIzYjRiNWI2YjdiOGI5YjpiO2I8Yj1iPmI/YkFiQmJDYkRiRWJGYkdiSGJJYkpiTGJNYk5iT2JQYlFiUmJUYlZiV2JYYlliWmJbYlxiXWJeYl9iYGJhYmJiY2JkYmViZmJnYmhiaWJqYmtibGJtYm5ib2JwYnJic2J0YnVidmJ3YnhieWJ6YntifGJ9Yn5igWKCYoNihGKFYoZih2KIYoliimKLYoxijWKOYo9ikGKRYpJik2KUYpZil2KYYplimmKbYpxinWKfYqBioWKiYqNipGKlYqZip2KoYqliqmKrYqxirWKuYq9isGKxYrJis2K0YrVitmK3YrhiuWK6YrtivGK9Yr5iv2LAYsFiwmLDYsRixmLHYshiyWLKYstizGLNYs5iz2LQYtFi0mLTYtRi1WLWYtdi2GLZYtpi22LcYt1i3mLfYuBi4WLiYuNi5GLlYuZi52LoYuli6mLrYuxi7WLuYu9i8GLxYvJi82L0YvVi9mL3Yvhi+WL6Yvti/GL9Yv5i/2MAYwJjA2MEYwVjBmMIYwljCmMLYwxjDWMOYw9jEGMRYxJjE2MUYxVjFmMXYxhjGWMaYxtjHGMdYx5jH2MgYyFjImMjYyRjJWMmYydjKGMpYypjK2MsYy1jLmMvYzBjMWMyYzNjNGM1YzZjN2M4YzljOmM7YzxjPWM+Yz9jQGNBY0JjQ2NEY0VjR2NIY0ljSmNLY0xjTWNOY09jUGNRY1JjU2NUY1VjVmNXY1hjWWNaY1tjXGNdY15jX2NgY2FjYmNjY2RjZWNmY2djaGNpY2pja2NsY21jbmNvY3BjcWNyY3NjdGN1Y3Zjd2N4Y3lje2N8Y31jfmN/Y4BjgWOCY4NjhGOFY4Zjh2OIY4ljimOLY4xjjWOOY49jkGORY5Jjk2OUY5VjlmOXY5hjmWOaY5tjnGOdY55jn2OgY6NjpGOmY6djqWOqY6tjrGOtY65jr2OwY7Fjs2O0Y7VjtmO3Y7hjuWO6Y7tjvGO9Y75jv2PAY8FjwmPDY8RjxWPGY8djyGPJY8pjy2PMY81jzmPPY9Fj02PUY9Vj12PYY9lj2mPcY91j3mPfY+Bj4WPiY+Nj5GPlY+Zj52PoY+lj6mPrY+xj7WPuY+9j8GPxY/Jj82P0Y/Zj92P4Y/lj+mP7Y/xj/WP+Y/9kAGQBZAJkA2QEZAVkBmQHZAhkCWQKZAtkDGQNZA5kD2QQZBFkEmQTZBRkFWQWZBdkGGQZZBpkG2QcZB1kHmQfZCBkImQjZCRkJWQmZCdkKGQpZCpkK2QsZC1kLmQvZDBkMWQyZDNkNGQ1ZDZkN2Q4ZDlkO2Q8ZD1kPmQ/ZEBkQWRCZENkRGRFZEZkR2RIZElkSmRLZExkTWROZE9kUGRRZFJkU2RUZFVkVmRXZFhkWWRaZFtkXGRdZF5kX2RgZGFkYmRjZGRkZWRmZGdkaGRpZGpka2RsZG1kbmRvZHBkcWRyZHNkdGR1ZHZkd2R4ZHlkemR7ZHxkfWR+ZH9kgGSBZIJkg2SEZIVkhmSHZIhkiWSKZItkjGSNZI5kj2SQZJFkkmSTZJRklWSWZJdkmGSZZJpkm2ScZJ1knmSfZKBkoWSiZKNkpGSlZKZkp2SoZKlkqmSrZKxkrWSvZLBksWSyZLNktGS1ZLZkt2S4ZLlkumS7ZLxkvWS+ZL9kwGTCZMNkxGTFZMZkx2TIZMlkymTLZMxkzWTOZM9k0GTRZNJk02TUZNVk1mTXZNhk2WTaZNtk3GTdZN5k32TgZOFk4mTjZORk5WTmZOdk6GTpZOpk62TsZO1k7mTwZPFk8mTzZPRk9WT2ZPdk+GT5ZPpk+2T8ZP1k/mT/ZQBlAWUCZQNlBGUFZQZlB2UIZQllCmULZQxlDWUOZQ9lEGURZRJlE2UUZRVlFmUXZRhlGWUaZRtlHGUeZR9lIGUhZSJlI2UkZSVlJmUnZShlKWUqZStlLGUtZS5lMGUxZTJlM2U0ZTVlN2U4ZTplO2U8ZT1lQGVBZUJlQ2VEZUVlRmVHZUhlSWVKZUtlTGVNZU5lT2VQZVFlUmVTZVRlVWVWZVdlWGVaZVxlXWVeZV9lYGVhZWJlY2VkZWVlZmVnZWhlaWVqZWtlbGVtZW5lb2VxZXJlc2V2ZXdleGV5ZXple2V8ZX1lfmV/ZYBlgWWCZYNlhGWFZYZliGWJZYpli2WMZY1ljmWPZZBlkWWSZZNllGWVZZZll2WYZZplm2WcZZ1lnmWfZaBlomWjZaRlpWWmZadlqGWpZaplq2WsZa5lr2WxZbJls2W0ZbVltmW3ZbhlumW7Zb5lv2XAZcFlwmXDZcRlxmXHZchlyWXKZctlzGXNZc5l0GXRZdJl02XUZdVl1mXXZdhl2WXaZdtl3GXdZd5l32XgZeFl4mXjZeRl5mXnZehl6mXrZexl7WXuZe9l8GXxZfJl82X0ZfVl9mX3Zfhl+WX6Zftl/GX+Zf9mAGYBZgJmA2YEZgVmBmYHZghmCWYKZgtmDGYNZg9mEGYRZhJmE2YVZhZmF2YYZhlmGmYbZhxmHWYeZh9mIWYiZiNmJGYlZiZmJ2YoZilmKmYsZi1mLmYwZjFmMmYzZjRmNWY3ZjhmOWY6ZjtmPGY9Zj5mP2ZAZkFmQ2ZEZkVmRmZHZkhmSWZKZktmTGZNZk5mT2ZQZlFmUmZTZlRmVWZWZldmWGZZZlpmW2ZcZl1mXmZfZmBmYWZiZmNmZGZlZmZmZ2ZoZmlmamZrZmxmbWZvZnBmcWZyZnNmdGZ1ZnZmd2Z4ZnlmemZ7ZnxmfWZ+Zn9mgGaBZoJmg2aEZoVmhmaHZohmiWaKZotmjGaNZo5mj2aQZpFmkmaTZpRmlWaWZpdmmGaZZppmm2acZp1mnmafZqBmoWaiZqNmpGalZqZmp2aoZqlmqmarZq1mrmavZrBmsWayZrNmtGa1ZrZmt2a4Zrlmuma7ZrxmvWa+Zr9mwGbBZsJmw2bEZsVmxmbHZshmyWbKZstmzGbNZs5mz2bQZtFm0mbTZtRm1WbWZtdm2GbZZtpm22bcZt1m3mbfZuBm4WbiZuNm5GblZuZm52boZulm6mbrZuxm7WbuZu9m8GbxZvJm82b1ZvZm92b5Zvpm+2b8Zv1m/mb/ZwFnAmcDZwRnBWcGZwdnCmcLZwxnDmcPZxBnEWcSZxNnFGcVZxZnF2cYZxlnGmccZx1nHmcgZyFnImcjZyRnJWcmZydnKWctZy5nL2cwZzFnMmczZzRnNWc2ZzdnOGc5ZzpnO2c8Zz1nPmc/Z0BnQWdCZ0NnRGdFZ0ZnR2dIZ0lnSmdLZ0xnTWdOZ09nUWdSZ1NnVGdVZ1ZnV2dYZ1lnWmdbZ1xnXWdeZ19nYGdiZ2NnZGdmZ2dnaGdpZ2pna2dsZ21nbmdvZ3BncmdzZ3RndWd2Z3dneGd5Z3pne2d8Z31nfmd/Z4BngWeCZ4NnhGeFZ4Znh2eIZ4lnimeLZ4xnjWeOZ49nkGeRZ5Jnk2eUZ5VnlmeYZ5lnmmebZ51nnmefZ6BnoWeiZ6NnpGelZ6Znp2eoZ6lnqmerZ6xnrWeuZ69nsGexZ7Jns2e0Z7Vntme3Z7hnuWe6Z7tnvGe9Z75nv2fAZ8FnwmfDZ8RnxWfGZ8dnyGfJZ8pny2fMZ81nzmfPZ9Bn0mfTZ9Rn1WfWZ9dn2GfZZ9pn22fcZ91n3mffZ+Bn4WfiZ+Nn5GflZ+Zn52foZ+ln6mfrZ+xn7WfuZ+9n8GfxZ/Jn82f0Z/Vn9mf3Z/hn+Wf6Z/tn/Gf9Z/5n/2gAaAFoAmgEaAVoBmgHaAhoCWgKaAtoDGgNaA5oD2gQaBFoEmgTaBRoFWgWaBdoGGgZaBpoG2gcaB1oHmgfaCBoImgjaCRoJmgnaChoKWgraCxoLWguaC9oMGgxaDJoM2g0aDVoNmg3aDhoOmg7aD1oPmg/aEBoQWhCaENoRGhFaEZoR2hJaEpoS2hMaE1oTmhPaFBoUWhSaFNoVGhVaFZoV2hYaFloWmhbaFxoXWheaF9oYGhhaGJoY2hkaGVoZmhnaGhoaWhqaGxobWhuaG9ocGhxaHJoc2h0aHVodmh3aHhoeWh6aHtofGh9aH5of2iAaIFogmiDaIRohWiGaIdoiGiJaIpoi2iMaI1ojmiPaJBokWiSaJNolGiVaJZol2iYaJlommibaJxonWieaJ9ooGihaKJoo2ikaKVopminaKhoqmiraKxorWiuaK9osGixaLJos2i0aLVotmi3aLhouWi6aLtovGi9aL5ov2jAaMFowmjDaMRoxWjGaMdoyGjJaMpoy2jMaM1ozmjPaNBo0WjSaNNo1GjVaNZo2GjZaNpo22jcaN1o3mjfaOBo4WjiaONo5GjlaOZo52joaOlo6mjraOxo7WjuaO9o8GjxaPJo82j0aPVo9mj3aPho+Wj6aPto/Gj9aP5o/2kAaQFpAmkDaQRpBWkGaQdpCGkJaQppC2kMaQ1pDmkPaRBpEWkSaRNpFGkVaRZpF2kYaRlpGmkbaR1pHmkfaSBpIWkiaSNpJGklaSZpJ2koaSlpKmkraSxpLWkuaS9pMGkxaTJpM2k0aTVpNmk3aThpOWk6aTtpPGk9aT5pP2lAaUFpQmlDaURpRWlGaUdpSGlJaUppS2lMaU1pTmlPaVBpUWlSaVNpVGlVaVZpV2lYaVlpWmlbaVxpXWleaV9pYGlhaWJpY2lkaWVpZmlnaWhpaWlqaWtpbGluaW9pcGlxaXJpc2l0aXZpd2l4aXlpeml7aXxpfml/aYBpgWmDaYRphWmGaYdpiGmJaYppi2mMaY1pjmmPaZBpkWmSaZNplGmVaZZpl2mYaZlpmmmcaZ1pnmmfaaBpoWmiaaNppGmlaaZpp2moaalpqmmraaxprWmuaa9psGmxabJps2m0abVptmm3abhpuWm6abtpvGm9ab5pv2nAacFpwmnDacRpxWnGacdpyGnJacppzGnNac5pz2nQadFp0mnTadRp1WnWaddp2Wnaadtp3Gndad5p32ngaeFp4mnjaeRp5Wnmaedp6Gnpaepp62nsae1p7mnvafBp8WnyafNp9Gn1afZp92n4aflp+mn7afxp/Wn+af9qAGoBagJqA2oEagVqBmoHaghqCWoKagtqDGoNag5qEGoRahJqE2oUahVqFmoXahhqGmobahxqHWoeah9qIGoiaiNqJGolaiZqJ2ooailqKmoraixqLWouai9qMGoxajJqM2o0ajVqNmo3ajhqOWo6ajtqPGo9aj5qP2pAakFqQmpDakRqRWpGakdqSGpJakpqS2pMak1qTmpPalBqUWpSalNqVGpValZqV2pYallqWmpbalxqXWpgamFqYmpjamRqZWpmamdqaGppampqa2psam1qbmpvanBqcWpyanNqdGp1anZqd2p4anlqemp7anxqfWp+an9qgGqBaoJqg2qEaoVqhmqHaohqiWqKaotqjGqNao5qj2qQapFqkmqTapRqlWqWapdqmGqZappqm2qcap1qnmqgaqFqomqjaqRqpWqmaqdqqGqpaqpqq2qsaq1qrmqvarBqsWqyarNqtGq1arZqt2q4arlqumq7arxqvWq+ar9qwGrBasJqw2rEasVqxmrHashqyWrKastqzGrNas5qz2rQatFq0mrTatRq1WrWatdq2GrZatpq22rcat1q3mrfauBq4WriauNq5GrlauZq52roaulq6mrrauxq7Wruau9q8GrxavJq82r0avVq9mr3avhq+Wr6avtq/Gr9av5q/2sAawFrAmsDawRrBWsGawdrCGsJawprC2sMaw1rDmsPaxBrEWsSaxNrFGsVaxZrF2sYaxlrGmscax1rHmsfayBrImsjayRrJWsmaydrKGspayprK2ssay1rLmsvazBrMWsyazNrNGs1azZrN2s4azlrOms7azxrPWs/a0BrQWtCa0NrRGtFa0ZrR2tIa0lrSmtLa0xrTWtOa09rUGtRa1JrU2tUa1VrVmtXa1hrWWtaa1trXGtda15rX2tga2FrZWtma2draGtpa2pra2tsa21rbmtva3BrcWtya3NrdWt2a3dreGt5a3pre2t8a31rfmt/a4BrgWuCa4NrhGuFa4Zrh2uIa4lrimuMa41rjmuPa5BrkWuSa5NrlWuWa5drmGuZa5prm2uca51rnmufa6BroWuia6NrpGula6Zrp2uoa6lrqmura6xrrWuua69rsGuxa7Jrs2u0a7Zrt2u4a7lrumu7a7xrvWu+a79rwGvBa8Jrw2vEa8VrxmvHa8hryWvKa8trzGvNa89r0GvRa9Jr02vVa9Zr12vYa9lr2mvca91r3mvfa+Br4Wvja+Vr5mvna+hr6Wvqa+tr7Gvta+5r72vwa/Fr8mvza/Rr9Wv2a/dr+Gv6a/tr/Gv9a/5r/2wAbAFsAmwDbARsBWwGbAdsCGwJbApsC2wMbA1sD2wQbBJsE2wUbBVsFmwYbBlsGmwbbBxsHWwebB9sIGwhbCJsI2wkbCVsJmwnbChsKWwqbCtsLGwtbC5sL2wwbDFsMmwzbDVsNmw3bDhsOWw6bDtsPGw9bD5sP2xAbEFsQ2xEbEVsRmxHbEhsSWxKbEtsTGxNbE5sT2xQbFFsUmxTbFRsVWxWbFdsWGxabFtsXGxdbF5sX2xgbGFsYmxjbGRsZWxmbGdsaGxpbGpsa2xsbG1sbmxvbHBscWxybHNsdGx1bHZsd2x4bHlse2x8bH1sfmx/bIBsgWyCbINshGyFbIZsh2yIbIlsimyLbIxsjWyObI9skGyRbJJsk2yUbJVslmyXbJhsmWyabJtsnGydbJ5sn2ygbKFsomyjbKRspWymbKdsqGypbKpsq2ysbK1srmyvbLBssWyybLNstGy1bLZst2y4bLlsumy8bL1svmy/bMBswmzDbMRsxWzGbMdsyGzJbMpsy2zMbM1szmzPbNBs0WzSbNNs1GzWbNds2GzZbNps22zcbN1s3mzfbOBs4WzibONs5GzlbOZs52zpbOps62zsbO1s7mzvbPBs8WzybPNs9Gz1bPZs92z4bPls+mz7bPxs/Wz+bP9tAG0BbQJtA20EbQVtBm0HbQhtCW0KbQxtDW0ObRBtEW0SbRNtFG0VbRZtF20YbRltGm0bbRxtHW0ebR9tIG0hbSRtJW0mbSdtKG0pbSptK20sbS1tLm0vbTBtMW0ybTNtNG01bTZtN204bTltOm08bT1tPm0/bUBtQm1DbURtRW1GbUdtSG1JbUptS21MbU1tTm1PbVBtUW1SbVNtVG1VbVZtV21YbVltWm1bbVxtXW1ebV9tYG1hbWJtY21kbWVtZm1nbWhtaW1qbWttbG1tbW5tb21wbXFtcm1zbXRtdW12bXhteW16bXttfG19bX5tf22AbYFtgm2DbYRthW2GbYdtim2LbYxtjW2ObY9tkG2RbZJtk22UbZVtlm2XbZhtmW2abZttnG2dbZ5tn22gbaFtom2jbaRtpW2mbadtqG2pbaptq22sba1trm2vbbBtsW2ybbNttG21bbZtt224bbltum27bbxtvW2+bb9twG3BbcJtw23EbcVtxm3HbchtyW3KbcttzG3Nbc9t0G3RbdJt023UbdVt1m3Xbdht2W3abdtt3G3dbd5t323gbeFt4m3jbeRt5W3mbedt6G3pbept623sbe1t7m3vbfBt8m3zbfRt9W32bfdt+G35bfpt+238bf1t/m3/bgBuAW4CbgNuBG4GbgduCG4JbgpuC24Mbg1uDm4PbhBuEW4SbhNuFG4VbhZuF24YbhluGm4bbhxuHW4ebh9uIG4hbiJuI24kbiVuJm4nbihuKW4qbituLG4tbi5uMG4xbjJuM240bjVuNm43bjhuOW46bjtuPG49bj5uP25AbkFuQm5DbkRuRW5GbkduSG5JbkpuS25Mbk1uTm5PblBuUW5SblNuVG5VblZuV25YblluWm5bblxuXW5ebl9uYG5hbmJuZG5lbmZuZ25obmluam5rbmxubW5ubm9ucG5xbnNudG51bndueG55bnpufG59bn5uf26BboJug26EboVuhm6HbohuiW6KbotujG6Nbo5uj26RbpJuk26UbpVul26Ybplumm6bbpxunW6ebp9uoG6hbqJupG6lbqZup26obqluqm6rbqxurW6ubq9usG6xbrJus260brVutm63brhuuW66brtuvG69br5uv27AbsJuw27EbsVuxm7HbshuyW7KbstuzG7Nbs5uz27QbtFu0m7TbtRu1W7Wbtdu2G7abttu3G7dbt5u327gbuFu4m7jbuRu5W7mbudu6G7pbupu627sbu1u7m7vbvBu8W7ybvNu9G71bvZu9274bvlu+m77bvxu/W7+bv9vAG8BbwJvA28EbwVvBm8HbwhvCW8KbwtvDG8Nbw5vD28QbxFvEm8TbxVvFm8XbxhvGW8abxtvHG8dbx5vH28gbyFvIm8jbyRvJW8mbydvKG8pbypvK28sby1vLm8vbzBvMW8ybzNvNG81bzZvN284bzlvOm87bzxvPW8+bz9vQG9Bb0JvQ29Eb0VvRm9Hb0hvSW9Kb0tvTG9Nb05vT29Qb1FvUm9Tb1RvVW9Wb1dvWG9Zb1pvW29cb11vXm9fb2BvYW9ib2NvZG9lb2ZvZ29ob2lvam9rb2xvbW9ub29vcG9xb3Jvc290b3Vvdm93b3hveW96b3tvfG99b35vf2+Ab4Fvgm+Db4RvhW+Gb4dviG+Jb4pvi2+Mb41vjm+Pb5BvkW+Sb5NvlG+Vb5Zvl2+Yb5lvmm+bb5xvnW+eb59voG+hb6Jvo2+kb6Vvpm+nb6hvqW+qb6tvrG+tb65vr2+wb7Fvsm+zb7RvtW+2b7dvuG+5b7pvu2+8b71vvm+/b8BvwW/Cb8NvxG/Fb8Zvx2/Ib8lvym/Lb8xvzW/Ob89v0G/Rb9Jv02/Ub9Vv1m/Xb9hv2W/ab9tv3G/db95v32/gb+Fv4m/jb+Rv5W/mb+dv6G/pb+pv62/sb+1v7m/vb/Bv8W/yb/Nv9G/1b/Zv92/4b/lv+m/7b/xv/W/+b/9wAHABcAJwA3AEcAVwBnAHcAhwCXAKcAtwDHANcA5wD3AQcBFwEnATcBRwFXAWcBdwGHAZcBpwG3AccB1wHnAfcCBwIXAicCNwJHAlcCZwJ3AocClwKnArcCxwLXAucC9wMHAxcDJwM3A0cDVwNnA3cDhwOXA6cDtwPHA9cD5wP3BAcEFwQnBDcERwRXBGcEdwSHBJcEpwS3BMcE1wT3BQcFFwUnBTcFRwVXBWcFdwWHBZcFpwW3BccF1wXnBfcGBwYXBicGRwZXBmcGdwaHBpcGpwbHBtcG5wb3BwcHFwcnBzcHRwdXB2cHdweHB5cHpwe3B8cH1wfnB/cIBwgXCCcINwhHCFcIZwh3CIcIlwinCLcIxwjXCOcI9wkHCRcJJwk3CUcJVwlnCXcJhwmXCacJtwnHCdcJ5wn3CgcKFwonCjcKRwpXCmcKdwqHCpcKpwq3CscK1wrnCvcLBwsXCycLNwtHC1cLZwt3C4cLtwvHC9cL5wv3DAcMFwwnDDcMRwxXDGcMdwyHDJcMpwy3DMcM1wznDPcNBw0XDScNNw1HDVcNZw13DYcNlw2nDbcNxw3XDecN9w4HDhcOJw43DkcOVw5nDncOhw6XDqcOtw7XDucO9w8HDxcPJw83D0cPVw9nD3cPhw+XD6cPtw/HD9cP5w/3EAcQFxAnEDcQRxBXEGcQdxCHEJcQpxC3EMcQ1xDnEPcRBxEXEScRNxFHEVcRZxF3EYcRlxGnEbcRxxHXEecR9xIHEicSNxJHElcSZxJ3EocSlxKnErcSxxLXEucS9xMHExcTJxM3E0cTVxN3E4cTlxOnE7cTxxPXE+cT9xQHFBcUJxQ3FEcUVxRnFHcUhxSXFKcUtxTHFNcU5xT3FQcVFxUnFTcVRxVXFWcVdxWHFZcVpxW3FccV1xXnFfcWBxYXFicWNxZHFlcWZxaHFpcWpxa3FscW1xbnFvcXBxcXFycXNxdHF1cXZxd3F4cXlxenF7cXxxfXF+cX9xgHGBcYJxg3GEcYVxhnGHcYhxiXGKcYtxjHGNcY5xj3GQcZFxknGTcZRxlXGWcZdxmHGZcZpxm3GccZ1xnnGfcaBxoXGicaNxpHGlcaZxp3GocalxqnGrcaxxrXGuca9xsnGzcbRxtXG2cbdxuHG5cbpxu3G8cb1xvnG/ccBxwXHCccNxxHHFccZxx3HIcclxynHLccxxzXHOcc9x0HHRcdJx03HUcdVx1nHXcdhx2XHacdtx3HHdcd5x33HgceFx4nHjceRx5XHmcedx6HHpcepx63Hsce1x7nHvcfBx8XHycfNx9HH1cfZx93H4cflx+nH7cfxx/XH+cf9yAHIBcgJyA3IEcgVyBnIHcghyCXIKcgtyDHINcg5yD3IQchFyEnITchRyFXIWchdyGHIZchpyG3Icch1yHnIfciByIXIiciNyJHIlciZyJ3IocilyKnIrcixyLXIvcjByMXIycjNyNHI1cjZyN3I4cjlyOnI7cjxyPXI+cj9yQHJBckJyQ3JEckVyRnJJckpyS3JMck1yTnJPclByUXJSclNyVHJVclZyV3JYcllyWnJbclxyXXJecl9yYHJhcmJyY3JkcmVyZnJncmhyanJrcmxybXJucm9ycHJxcnJyc3J0cnVydnJ3cnhyenJ7cnxyfXJ+cn9ygHKBcoJyg3KEcoVyhnKHcohyiXKKcotyjHKNco5yj3KQcpFyknKTcpRylXKWcpdymHKZcppym3Kccp1ynnKfcqByoXKicqNypHKlcqZyp3KocqlyqnKrcqxyrXKucq9ysHKxcrJys3K0crVyt3K4crlyunK7crxyvXK+csBywXLCcsNyxHLFcsZyx3LIcslyynLLcsxyzXLOcs9y0HLRctJy03LUctVy1nLXcthy2XLactty3HLdct5y33LgcuFy4nLjcuRy5XLmcudy6HLpcupy63Lscu1y7nLvcvBy8XLycvNy9HL1cvZy93L4cvly+nL7cvxy/XL+cv9zAHMBcwJzA3MEcwVzBnMHcwhzCXMKcwtzDHMNcw5zD3MQcxFzEnMTcxRzFXMWcxdzGHMZcxpzG3Mccx1zHnMfcyBzIXMicyNzJHMlcyZzJ3MocylzKnMrcyxzLXMucy9zMHMxczJzM3M0czVzNnM3czhzOXM6cztzPHM9cz5zP3NAc0FzQnNDc0RzRXNGc0dzSXNKc0tzTHNNc05zT3NQc1FzUnNTc1RzVXNWc1dzWHNZc1pzW3Ncc11zXnNfc2BzYXNic2NzZHNlc2ZzZ3Noc2lzanNrc2xzbXNuc29zcHNxc3Jzc3N0c3VzdnN3c3hzeXN6c3tzfHN9c35zf3OAc4FzgnODc4RzhXOGc4dziHOJc4pzjHONc45zj3OQc5FzknOTc5RzlXOWc5dzmHOZc5pzm3Occ51znnOfc6BzoXOic6NzpHOlc6Zzp3Ooc6lzqnOrc6xzrXOuc69zsHOxc7Jzs3O0c7VztnO3c7hzuXO6c7tzvHO9c75zv3PBc8Jzw3PEc8VzxnPHc8hzyXPKc8tzzHPNc85zz3PQc9Fz0nPTc9Rz1XPWc9dz2HPZc9pz23Pcc91z3nPfc+Bz4XPic+Nz5HPlc+Zz53Poc+lz6nPrc+xz7XPuc+9z8HPxc/Jz83P0c/Vz9nP3c/hz+XP6c/tz/HP9c/90AHQBdAJ0BHQFdAd0CHQJdAp0C3QMdA10DnQPdBB0EXQSdBN0FHQVdBZ0F3QYdBl0GnQbdBx0HXQedB90IHQhdCJ0I3QkdCV0JnQndCh0KXQqdCt0LHQtdC50L3QwdDF0MnQzdDR0NXQ2dDd0OHQ5dDp0O3Q8dD10PnQ/dEB0QXRCdEN0RHRFdEZ0R3RIdEl0SnRLdEx0TXROdE90UHRRdFJ0U3RUdFV0VnRXdFh0WXRadFt0XHRddF50X3RgdGF0YnRjdGR0ZXRmdGd0aHRpdGp0a3RsdG10bnRvdHB0cXRydHN0dHR1dHZ0d3R4dHl0enR7dHx0fXR+dH90gHSBdIJ0g3SEdIV0hnSHdIh0iXSKdIt0jHSNdI50j3SQdJF0knSTdJR0lXSWdJd0mHSZdJp0m3ScdJ10nnSfdKB0oXSidKN0pHSldKZ0p3SodKl0qnSrdKx0rXSudK90sXSydLN0tHS1dLZ0t3S4dLl0unS7dLx0vXS+dL90wHTBdMJ0w3TEdMV0xnTHdMh0yXTKdMt0zHTNdM50z3TQdNF00nTTdNR01XTWdNd02HTZdNp023TcdN103nTfdOB04XTidON05HTldOZ053TodOl06nTrdOx07XTudO908HTxdPJ083T0dPV09nT3dPh0+XT6dPt0/HT9dP50/3UAdQF1AnUDdQR1BXUGdQd1CHUJdQp1C3UMdQ11DnUPdRB1EXUSdRN1FHUVdRZ1F3UYdRp1G3UcdR11HnUhdSJ1JHUldSZ1J3UpdSp1K3UsdS11LnUvdTJ1NHU1dTZ1OHU5dTx1PXU+dT91QHVBdUJ1Q3VEdUV1RnVHdUh1SXVKdU11TnVPdVB1UXVSdVN1VHVVdVZ1V3VYdVp1W3VcdV11XnVfdWB1YXVidWN1ZHVldWZ1Z3VodWl1a3VsdW11bnVvdXF1cnVzdXR1dXV2dXd1eHV5dXp1e3V8dX11fnV/dYB1gXWCdYN1hHWFdYZ1h3WIdYl1inWLdYx1jXWOdY91kHWRdZJ1k3WUdZV1lnWXdZh1mXWadZt1nHWddZ51n3WgdaF1onWjdaR1pXWmdad1qHWpdap1q3Wsda11rnWvdbB1sXWydbN1tHW1dbZ1t3W4dbl1unW7dbx1vXW+db91wHXBdcJ1w3XEdcV1xnXHdch1yXXKdct1zHXNdc51z3XQddJ103XUddV11nXXddh12XXaddt13HXddd5133XgdeF14nXjdeR15XXmded16HXpdep163Xsde117nXvdfF18nXzdfR19XX2dfd1+HX5dfp1+3X8df11/nX/dgB2AXYCdgN2BHYFdgZ2B3YIdgl2CnYLdgx2DXYOdg92EHYRdhJ2E3YUdhV2FnYXdhh2GXYadht2HHYddh52H3YgdiF2InYjdiR2JXYmdid2KHYpdip2K3Ysdi12LnYvdjB2MXYydjN2NHY1djZ2N3Y4djl2OnY7djx2PXY+dj92QHZBdkJ2Q3ZEdkV2RnZHdkh2SXZKdkt2THZNdk52T3ZQdlF2UnZTdlR2VXZWdld2WHZZdlp2W3Zcdl12XnZfdmB2YXZidmN2ZHZldmd2aHZpdmp2a3Zsdm12bnZvdnB2cnZzdnR2dXZ2dnd2eHZ5dnx2f3aAdoF2gnaDdoV2hnaHdoh2iXaKdot2jHaNdo52j3aQdpF2knaTdpR2lXaWdpd2mHaZdpp2m3acdp12nnafdqB2oXaidqN2pHaldqZ2p3aodql2qnardq12rnavdrB2sXaydrN2tHa1drZ2t3a4drl2una7drx2vXa+dr92wHbBdsJ2w3bEdsV2xnbHdsh2yXbKdst2zHbNds52z3bQdtF20nbTdtR21XbWdtd22HbZdtp223bcdt5233bgduF24nbjduR25Xbmdud26Hbpdup263bsdu1273bwdvF28nbzdvV29nb3dvl2+nb7dvx2/Xb+dv93AHcBdwJ3A3cEdwV3BncHdwh3CXcKdwx3DXcOdw93EHcRdxJ3E3cUdxV3FncXdxh3GXcadxt3HHcddx53IXcidyN3JHcldyd3KHcpdyp3K3csdy13LncvdzB3MXcydzN3NHc1dzZ3N3c4dzl3Onc7dz13Pnc/d0F3QndDd0R3RndHd0h3SXdKd0t3THdNd053T3dQd1F3UndTd1R3VXdWd1d3WHdZd1p3W3dcd113Xndfd2B3YXdid2N3ZHdld2Z3Z3dod2l3andrd2x3bXdud293cHdxd3J3c3d0d3V3dnd3d3h3eXd6d3t3fHd9d353f3eAd4F3gneDd4R3hXeGd4d3iHeJd4p3i3eMd413jnePd5B3kXeSd5N3lHeVd5Z3l3eYd5l3mnebd5x3nXeed593oHehd6J3o3ekd6V3pnend6l3qnerd6x3rXeud693sHexd7J3s3e0d7V3t3e4d7l3une7d7x3vXe+d793wHfBd8J3w3fEd8V3xnfHd8h3yXfKd8t3zHfNd853z3fQd9F30nfTd9R31XfWd9d32HfZd9p323fcd9133nffd+B34Xfid+N35Hfmd+d36Hfpd+p363fsd+5373fwd/F38nf0d/V39nf3d/h3+Xf6d/t3/Hf9d/53/3gAeAF4AngDeAR4BXgGeAd4CHgJeAp4C3gMeA14DngPeBB4EXgSeBN4FHgVeBZ4F3gYeBl4GngbeBx4HXgeeB94IHgheCJ4I3gkeCV4JngneCh4KXgqeCt4LHgteC54L3gweDF4MngzeDR4NXg2eDd4OHg5eDp4O3g8eD14Png/eEB4QXhCeEN4RHhFeEZ4R3hIeEl4SnhLeEx4TXhOeE94UHhReFJ4U3hUeFV4VnhXeFh4WXhaeFt4XHhdeF54X3hgeGF4YnhjeGR4ZXhmeGd4aHhpeGp4a3hseG54b3hweHF4cnhzeHR4dXh2eHd4eHh5eHp4e3h8eH14f3iAeIF4gniDeIR4hXiGeId4iHiJeIp4i3iMeI14jniPeJB4kXiSeJN4lHiVeJZ4l3iYeJl4mnibeJx4nXieeJ94oHiheKJ4o3ikeKV4pnineKh4qXiqeKt4rHiteK54r3iweLF4snizeLR4tXi2eLd4uHi5eLt4vHi9eL54v3jAeMF4wnjDeMR4xXjGeMd4yHjJeMp4y3jMeM14znjPeNB40XjSeNN41HjVeNZ413jYeNl42njbeNx43XjeeN944HjheOJ443jkeOV45njneOh46XjqeOt47HjteO5473jwePF48njzePR49Xj2ePd4+Hj5ePp4+3j8eP14/nj/eQB5AXkCeQN5BHkFeQZ5B3kIeQl5CnkLeQx5DXkOeQ95EHkReRJ5E3kUeRV5FnkXeRh5GXkaeRt5HHkdeR55H3kgeSF5InkkeSV5JnkneSh5KXkqeSt5LHkteS55L3kweTF5MnkzeTR5NXk2eTd5OHk5eTt5PHk9eT95QHlBeUJ5Q3lEeUV5RnlHeUh5SXlKeUt5THlNeU55T3lQeVF5UnlTeVR5VXlWeVd5WHlZeVp5W3lceV15X3lgeWF5YnljeWR5ZXlmeWd5aHlpeWp5a3lseW15bnlveXB5cXlyeXN5dHl1eXZ5d3l4eXl5enl7eXx5fXl+eX95gHmCeYN5hHmFeYZ5h3mIeYl5inmLeYx5jXmOeZB5kXmSeZN5lHmVeZZ5l3mYeZl5mnmbeZx5nXmeeZ95oHmheaJ5o3mkeaV5pnmneah5qXmqeat5rHmtea55r3mwebF5snmzebR5tXm2ebd5uHm5ebp5u3m8eb15vnm/ecB5wnnDecR5xXnGecd5yHnJecp5zHnNec55z3nQedN51HnVedZ513nYedl52nnbedx53Xneed954HnheeJ55HnleeZ553noeel56nnreex57Xnuee958HnxefJ583n0efV59nn3efh5+Xn6efx5/Xn+ef96AHoBegJ6A3oEegV6BnoHegh6CXoKegx6DXoPehB6EXoSehN6FHoVehZ6F3oYehl6Gnobehx6HXoeeh96IHoheiJ6I3okeiV6Jnoneih6KXoqeit6LHotei96MHoxejJ6M3o0ejV6Nno3ejh6OXo6ejt6PHo9ej56QHpBekJ6Q3pEekV6RnpHekh6SXpKekt6THpNek56T3pQelF6UnpTelR6VXpWeld6WHpZelp6W3pcel16XnpfemB6YXpiemN6ZHpmemd6aHppemp6a3psem16bnpvenB6cXpyenN6dHp1enZ6d3p4enl6e3p8en16fnp/eoB6gXqCeoN6hHqFeoZ6h3qIeol6inqLeox6jXqOeo96kHqRepJ6k3qUepV6lnqXeph6mXqaept6nHqdep56n3qgeqF6onqjeqR6pXqmeqd6qHqpeqp6q3qseq16rnqverB6sXqyerN6tHq1erZ6t3q4erl6unq7erx6vXq+er96wHrBesJ6w3rEesV6xnrHesh6yXrKesx6zXrOes960HrRetJ603rUetV61nrXeth62Xraett63Hrdet5633rheuJ643rkeuV65nrneuh66Xrqeut67Hrteu5673rwevF68nrzevR69Xr2evd6+Hr5evp6+3r8ev16/nr/ewB7AXsCewN7BHsFewZ7B3sIewl7CnsLewx7DXsOew97EHsSexN7FHsVexZ7F3sYexl7Gnsbexx7HXseex97IHsheyJ7I3skeyV7Jnsneyh7KXsqeyt7LXsuey97MHsxezJ7NHs1ezZ7N3s4ezl7Ons7ezx7PXs+ez97QHtBe0J7Q3tEe0V7RntHe0h7SntLe0x7TXtOe097UHtRe1J7U3tVe1d7WHtZe1p7W3tce117Xntfe2B7YXtie2N7ZHtle2Z7Z3toe2l7antre2x7bXtue297cHtxe3J7c3t0e3V7dnt3e3h7eXt6e3t7fHt9e357f3uAe4F7gnuDe4R7hXuGe4d7iHuJe4p7i3uMe417jnuPe5B7kXuSe5N7lHuVe5Z7mHuZe5p7m3uce517nnufe6B7onuje6R7pnune6h7qXuqe6t7rHute657r3uwe7F7snuze7R7tXu2e7d7uHu5e7p7u3u8e717vnu/e8F7wnvDe8V7xnvHe8h7ynvLe8x7zXvOe8970HvRe9J703vUe9V71nvXe9h72Xvae9t73Hvde95733vge+F74nvje+R75Xvme+d76Hvpe+p763vse+177nvve/B78Xvye/N79Hv1e/Z793v4e/l7+nv7e/x7/Xv+e/98AHwCfAN8BHwFfAZ8B3wIfAl8CnwLfAx8DnwPfBB8EXwSfBN8FHwVfBZ8F3wYfBl8GnwbfBx8HXwefB98IHwifCN8JHwlfCZ8J3wofCl8KnwrfCx8LXwufC98MHwxfDJ8M3w0fDV8Nnw3fDh8Onw7fDx8PXw+fD98QHxBfEJ8Q3xEfEV8RnxHfEh8SXxKfEt8THxNfE58T3xQfFF8UnxTfFR8VXxWfFd8WHxZfFp8W3xcfF18XnxffGB8YXxifGN8ZHxlfGZ8Z3xofGl8anxrfGx8bXxufG98cHxxfHJ8c3x1fHZ8d3x4fHl8enx7fHx8fXx+fH98gHyBfIJ8g3yEfIV8hnyHfIh8iXyKfIt8jHyNfI58j3yQfJF8knyTfJR8lXyWfJd8mHyZfJp8m3ycfJ18nnyffKB8oXyifKN8pHylfKZ8p3yofKl8qnyrfKx8rXyufK98sHyxfLJ8s3y0fLV8tny3fLh8uXy6fLt8vHy9fL98wHzBfMJ8w3zEfMV8xnzHfMl8ynzLfMx8zXzOfM980HzRfNJ803zUfNV81nzXfNh82XzafNt83HzdfN5833zgfOF84nzjfOR85XzmfOd86HzpfOp863zsfO187nzvfPB88XzyfPN89Hz1fPZ893z4fPl8+nz8fP18/nz/fQB9AX0CfQN9BX0GfQd9CH0JfQp9C30MfQ19Dn0PfRB9EX0SfRN9FH0VfRZ9F30YfRl9Gn0bfRx9HX0efR99IX0jfSR9JX0mfSd9KH0pfSp9K30sfS19Ln0vfTF9Mn0zfTR9NX02fTd9OH06fTt9PH09fT59P31AfUF9Q31FfUZ9R31IfUl9Sn1LfUx9TX1OfU99UX1SfVN9VH1VfVZ9V31YfVl9Wn1bfVx9XX1efV99YH1ifWR9ZX1mfWd9aH1pfWp9a31sfW19bn1vfXB9cn1zfXR9dX12fXd9eH15fXp9e318fX19fn1/fYB9gX2CfYN9hH2FfYZ9h32IfYl9in2LfYx9jX2OfY99kH2RfZJ9k32UfZV9ln2XfZh9mX2bfZx9nX2efZ99oH2hfaJ9o32kfaV9pn2nfah9qX2qfat9rH2tfa59r32wfbF9sn2zfbR9tX22fbd9uX26fbt9vH29fb59v33AfcF9wn3DfcR9xX3Gfcd9yH3Jfcp9y33Mfc19zn3PfdB90X3SfdN91H3VfdZ9133Yfdl9233cfd193n3ffeF94n3jfeR95X3mfed96X3qfet97H3tfe59733wffF98n3zffR99X32ffd9+H35ffp9+338ff19/n3/fgB+AX4CfgN+BH4FfgZ+B34Ifgl+Cn4Lfgx+DX4Ofg9+EH4RfhJ+E34UfhV+Fn4Xfhh+GX4afht+HH4dfh5+H34gfiF+In4jfiR+JX4mfid+KH4pfip+K34sfi1+Ln4vfjB+MX4yfjN+NH41fjZ+N344fjl+On47fjx+PX4+fj9+QH5BfkJ+Q35EfkV+Rn5Hfkh+SX5Kfkt+TH5Nfk5+T35QflF+Un5TflV+Vn5Xflh+WX5bflx+XX5efl9+YH5hfmJ+Y35kfmV+Zn5nfmh+aX5rfmx+bX5ufm9+cH5xfnJ+c350fnV+dn53fnh+eX56fnt+fH59fn5+f36AfoF+gn6DfoR+hX6Gfod+iH6Jfop+i36Mfo1+jn6PfpB+kX6SfpN+lH6VfpZ+l36Yfpl+mn6bfpx+nX6efp9+oH6hfqJ+o36kfqV+pn6nfqh+qX6qfqt+rH6tfq5+r36wfrF+sn6zfrR+tX62frd+uH65frp+u368fr1+vn6/fsB+wX7CfsN+xH7FfsZ+x37Ifsl+yn7Lfsx+zX7Ofs9+0H7RftJ+037UftV+1n7Xfth+2X7aftt+3H7dft5+337gfuF+4n7jfuR+5X7mfud+6H7pfup+637sfu1+7n7vfvB+8X7yfvN+9H71fvZ+9374fvl++n77fvx+/X7+fv9/AH8BfwJ/A38EfwV/Bn8Hfwh/CX8Kfwt/DH8Nfw5/D38QfxF/En8TfxR/FX8Wfxd/GH8Zfxp/G38cfx1/Hn8ffyB/IX8ifyN/JH8lfyZ/J38ofyl/Kn8rfyx/LX8ufy9/MH8xfzJ/M380fzV/Nn83fzh/OX86fzt/PH89fz5/P39Af0F/Qn9Df0R/RX9Gf0d/SH9Jf0p/S39Mf01/Tn9Pf1B/UX9Sf1N/VH9Vf1Z/V39Yf1l/Wn9bf1x/XX9ef2B/YX9if2N/ZH9lf2Z/Z39of2l/an9rf2x/bX9vf3B/cX9yf3N/dH91f3Z/d394f3l/en97f3x/fX9+f39/gH+Bf4J/g3+Ef4V/hn+Hf4h/iX+Kf4t/jH+Nf49/kH+Rf5J/k3+Uf5V/ln+Xf5h/mX+af5t/nH+df55/n3+gf6J/o3+lf6Z/p3+of6p/q3+sf61/rn+vf7B/sX+yf7N/tH+1f7Z/t3+4f7l/un+7f7x/vX++f79/wH/Bf8J/w3/Ef8V/xn/Hf8h/yX/Kf8t/zX/Of89/0H/Rf9N/1H/Vf9Z/13/Yf9l/2n/cf91/3n/ff+B/4X/if+N/5H/lf+Z/53/of+l/6n/rf+x/7X/uf+9/8H/xf/J/83/0f/V/9n/3f/h/+X/6f/t//H/9f/5//4AAgAKABIAGgAeACIAJgAqAC4AMgA2ADoAPgBCAEYASgBOAFIAVgBaAF4AYgBmAGoAbgByAHYAegCCAIYAigCOAJIAlgCaAJ4AogCmAKoArgCyALYAugC+AMIAxgDKAM4A0gDWANoA3gDiAOYA6gDuAPIA9gD6AP4BAgEGAQoBDgESARYBGgEeASIBJgEqAS4BMgE2AToBPgFCAUYBSgFOAVIBVgFaAV4BYgFmAWoBbgFyAXYBfgGCAYYBigGOAZIBlgGaAZ4BogGmAaoBrgGyAbYBugG+AcIBxgHKAc4B0gHWAdoB4gHmAeoB7gHyAfYB+gH+AgICBgIKAg4CEgIWAhoCHgIiAioCLgIyAjYCOgI+AkICRgJKAk4CUgJWAloCXgJiAmYCagJuAnICdgJ6An4CggKGAooCjgKSApYCmgKeAqICpgKqAq4CsgK2AroCvgLCAsYCzgLSAtYC2gLeAuIC5gLqAu4C8gL2AvoC/gMCAwYDCgMOAxIDFgMaAx4DIgMmAyoDLgMyAzYDOgM+A0IDRgNKA04DUgNWA1oDXgNiA2YDagNuA3IDdgN6A34DggOGA4oDjgOSA5YDmgOeA6IDpgOqA64DsgO2A7oDvgPCA8YDygPOA9ID1gPaA94D4gPmA+oD7gPyA/oD/gQCBAYEDgQSBBYEGgQeBCIEJgQqBC4EMgQ2BDoEPgRCBEYESgROBFIEVgRaBF4EYgRmBGoEbgRyBHYEegR+BIIEhgSKBI4EkgSWBJoEngSiBKYEqgSuBLIEtgS6BL4EwgTGBMoEzgTSBNYE2gTeBOIE5gTqBO4E8gT2BPoE/gUCBQYFCgUOBRIFFgUaBR4FIgUmBSoFLgUyBTYFPgVCBUYFSgVOBVIFVgVaBV4FYgVmBWoFbgVyBXYFegV+BYIFhgWKBY4FkgWWBZoFngWiBaYFqgWuBbIFtgW6Bb4FwgXGBcoFzgXSBdYF2gXeBeIF5gXqBe4F8gX2BfoF/gYCBgYGCgYOBhIGFgYaBh4GIgYmBioGLgYyBjYGOgY+BkIGRgZKBk4GUgZWBloGXgZiBmYGagZuBnIGdgZ6Bn4GggaGBooGjgaSBpYGmgaeBqIGpgaqBq4Gsga2BroGvgbCBsYGygbOBtIG1gbaBt4G4gbmBuoG7gbyBvYG+gb+BwIHBgcKBw4HEgcWBxoHHgciByYHKgcuBzIHNgc6Bz4HQgdGB0oHTgdSB1YHWgdeB2IHZgdqB24Hcgd2B3oHfgeCB4YHigeOB5IHlgeaB54HogemB64Hsge2B7oHvgfCB8YHygfWB9oH3gfiB+YH6gfuB/IH9gf6B/4IAggGCAoIDggSCBYIGggiCCYIKgguCDIINgg6CD4IQghGCEoITghSCFYIWghiCGYIaghuCHIIdgh6CH4IggiGCIoIjgiSCJYImgieCKIIpgiqCK4Itgi6CL4IwgjGCMoIzgjSCNYI2gjeCOII5gjqCO4I8gj2CPoI/gkCCQYJCgkOCRIJFgkaCR4JIgkmCSoJLgkyCTYJOgk+CUIJSglOCVIJVglaCV4JYglmCWoJbglyCXYJfgmCCYYJigmOCZIJlgmaCZ4JogmmCaoJrgmyCbYJugnCCcYJzgnSCdYJ2gneCeIJ5gnqCe4J8gn2CfoJ/goCCgYKCgoOChIKFgoaCh4KIgomCioKLgoyCjYKOgo+CkIKRgpKCk4KUgpWCloKXgpiCmYKagpuCnIKdgp6Cn4KggqGCooKjgqSCpYKmgqeCqIKpgqqCq4Ksgq2CroKvgrCCsoKzgrSCtYK2greCuYK6gruCvIK9gr6Cv4LAgsGCwoLDgsSCxYLGgseCyILJgsqCy4LMgs2CzoLPgtCC0YLSgtOC1ILVgtaC14LYgtmC2oLbgtyC3YLegt+C4ILhguKC44LkguaC54LogumC6oLrguyC7YLugu+C8ILygvOC9IL1gvaC94L5gvqC+4L8gv2C/oL/gwCDAYMCgwODBIMFgwaDB4MIgwmDCoMLgwyDDYMOgw+DEIMRgxKDE4MUgxWDFoMXgxiDGYMagxuDHIMdgx6DH4MggyGDIoMkgyWDJoMngyiDKYMqgyuDLIMtgy6DL4MwgzGDMoMzgzSDNYM2gzeDOIM6gzuDPIM9gz6DP4NAg0GDQoNDg0SDRYNGg0eDSINJg0qDS4NMg02DToNPg1CDUYNSg1ODVINVg1aDV4NYg1mDWoNbg1yDXYNeg1+DYINhg2KDY4Nkg2WDZoNng2iDaYNqg2uDbINtg26Db4Nwg3GDcoNzg3SDdYN2g3eDeIN5g3qDe4N8g32DfoN/g4CDgYOCg4ODhIOFg4aDh4OIg4mDioOLg4yDjYOOg4+DkIORg5KDk4OUg5WDloOXg5iDmYOag5uDnIOdg56Dn4Ogg6GDooOjg6SDpYOmg6eDqIOpg6qDq4Osg62DroOvg7CDsYOyg7ODtIO1g7aDt4O4g7mDuoO7g7yDvYO+g7+DwIPBg8KDxIPFg8aDx4PIg8mDyoPLg8yDzYPOg8+D0IPRg9KD04PUg9WD1oPXg9iD2YPag9uD3IPdg96D34Pgg+GD4oPjg+SD5YPmg+eD6IPpg+qD64Psg+2D7oPwg/GD8oPzg/SD9YP2g/eD+IP5g/qD+4P8g/2D/oP/hACEAoQDhASEBYQGhAeECIQJhAqEC4QMhA2EDoQPhBCEEYQShBOEFIQVhBaEF4QYhBmEGoQbhByEHYQehB+EIIQhhCKEI4QkhCWEJoQnhCiEKYQqhCuELIQthC6EL4QwhDGEMoQzhDSENYQ2hDeEOIQ5hDqEO4Q8hD6EP4RAhEGEQoRDhESERYRGhEeESIRKhEuETIRNhE6ET4RQhFGEUoRThFSEVYRWhFiEWYRahFuEXIRdhF6EX4RghGGEYoRjhGSEZYRmhGeEaIRphGqEa4RshG2EboRvhHCEcYRyhHOEdIR1hHaEd4R4hHmEeoR7hHyEfYR+hH+EgISBhIKEg4SEhIWEhoSHhIiEiYSKhIuEjISNhI6Ej4SQhJGEkoSThJSElYSWhJeEmISZhJqEm4SchJ2EnoSfhKGEooSkhKWEpoSnhKiEqYSqhKuErISuhK+EsISxhLKEs4S0hLWEtoS3hLiEuYS6hLuEvIS9hL6Ev4TAhMGEwoTDhMSExYTGhMeEyITJhMqEy4TMhM2EzoTPhNCE0YTShNOE1ITVhNaE14TYhNmE2oTbhNyE3YTehN+E4IThhOKE44TkhOWE5oTnhOiE6YTqhOuE7ITthO6E74TwhPGE8oTzhPSE9YT2hPeE+IT5hPqE+4T8hP2E/oT/hQCFAYUChQOFBIUFhQaFB4UIhQmFCoULhQyFDYUOhQ+FEIURhRKFE4UUhRWFFoUXhRiFGYUahRuFHIUdhR6FIIUhhSKFI4UkhSWFJoUnhSiFKYUqhSuFLIUthS6FL4UwhTGFMoUzhTSFNYU2hTeFOIU5hTqFO4U8hT2FPoU/hUCFQYVChUOFRIVFhUaFR4VIhUmFSoVLhUyFTYVOhU+FUIVRhVKFU4VUhVWFVoVXhViFWYVahVuFXIVdhV6FX4VghWGFYoVjhWWFZoVnhWiFaYVqhWuFbIVthW6Fb4VwhXGFcoVzhXSFdYV2hXeFeIV5hXqFe4V8hX2FfoV/hYCFgYWChYOFhIWFhYaFh4WIhYmFioWLhYyFjYWOhY+FkIWRhZKFk4WUhZWFloWXhZiFmYWahZuFnIWehZ+FoIWhhaKFo4WkhaWFpoWnhaiFqYWqhauFrIWtha6Fr4WwhbGFsoWzhbSFtYW2hbeFuIW5hbqFu4W8hb2FvoW/hcCFwYXChcOFxIXFhcaFx4XIhcmFyoXLhcyFzYXOhc+F0IXRhdKF04XUhdWF1oXXhdiF2YXahduF3IXdhd6F34XgheGF4oXjheSF5YXmheeF6IXpheqF64Xshe2F7oXvhfCF8YXyhfOF9IX1hfaF94X4hfmF+oX7hfyF/YX+hf+GAIYBhgKGA4YEhgWGBoYHhgiGCYYKhguGDIYNhg6GD4YQhhGGEoYThhSGFYYWhheGGIYZhhuGHIYdhh6GH4YghiGGIoYjhiSGJYYmhieGKIYphiqGK4Yshi2GLoYvhjCGMYYyhjOGNIY1hjaGN4Y4hjmGOoY7hjyGPYY+hj+GQIZBhkKGQ4ZEhkWGRoZHhkiGSYZKhkuGTIZNhk6GT4ZQhlGGUoZThlSGVYZWhleGWIZZhlqGW4Zchl2GXoZfhmCGYYZihmOGZIZlhmaGZ4ZohmmGaoZrhmyGbYZuhm+GcIZxhnKGc4Z0hnWGdoZ3hniGeYZ6hnuGfIZ9hn6Gf4aAhoGGgoaDhoSGhYaGhoeGiIaJhoqGi4aMho2GjoaPhpCGkYaShpOGlIaVhpaGl4aYhpmGmoabhpyGnYaehp+GoIahhqKGo4akhqWGpoanhqiGqYaqhquGrIathq6Gr4awhrGGsoazhrSGtYa2hreGuIa6hruGvIa9hr6Gv4bAhsGGwobDhsSGxYbGhseGyIbJhsqGy4bMhs2GzobPhtCG0YbShtOG1IbVhtaG14bYhtmG2obbhtyG3Ybeht+G4IbhhuKG44bkhuWG5obnhuiG6YbqhuuG7Ibthu6G74bwhvGG8obzhvSG9Yb3hvmG+ob7hvyG/Yb+hv+HAIcBhwKHA4cEhwWHBocHhwiHCYcKhwuHDYcOhw+HEIcRhxKHE4cUhxWHFocXhxiHGYcahxuHHIcdhx6HH4cghyGHIocjhySHJYcmhyeHKIcphyqHK4cshy2HLocvhzCHMYcyhzOHNIc1hzaHN4c4hzmHOoc7hzyHPYc+hz+HQIdBh0KHQ4dEh0WHRodHh0iHSYdKh0uHTIdNh06HT4dQh1GHUodTh1SHVYdWh1eHWIdZh1qHW4dch12HXodfh2CHYYdih2OHZIdlh2aHZ4doh2mHaodrh2yHbYduh2+HcIdxh3KHc4d0h3WHdod3h3iHeYd6h3uHfId9h36Hf4eAh4GHgoeDh4SHhYeGh4eHiIeJh4qHi4eMh42HjoeQh5GHkoeTh5SHlYeWh5eHmIeZh5qHm4ech52Hnoefh6CHoYeih6OHpIelh6aHp4eoh6mHqoerh6yHrYeuh6+HsIexh7KHs4e0h7WHtoe3h7iHuYe7h7yHvYe+h7+HwIfBh8KHw4fEh8WHxofHh8iHyYfKh8uHzIfNh86Hz4fQh9GH0ofTh9SH1YfWh9eH2IfZh9qH24fch92H3offh+CH4Yfih+OH5Iflh+aH54foh+mH6ofrh+yH7Yfuh++H8Ifxh/KH84f0h/WH9of3h/iH+Yf6h/uH/If9h/6H/4gAiAGIAogDiASIBYgGiAeICIgJiAqIC4gMiA2IDogPiBCIEYgSiBOIFIgViBaIF4gYiBmIGogbiByIHYgeiB+IIIghiCKII4gkiCWIJogniCiIKogriCyILYguiC+IMIgxiDKIM4g0iDWINog3iDiIOYg6iDuIPIg9iD6IP4hAiEGIQohEiEWIRohHiEiISYhKiEuITYhOiE+IUIhRiFKIVIhViFaIWIhZiFqIW4hciF2IXohfiGCIYYhiiGOIZIhliGaIZ4hpiGqIa4hsiG2IbohviHCIcYhyiHOIdIh1iHaId4h4iHmIeoh7iHyIfYh+iH+IgIiBiIKIg4iEiIWIhoiHiIiIiYiKiIyIjYiOiI+IkIiRiJKIk4iUiJWIloiXiJiImYiaiJuInIidiJ6In4igiKGIooijiKSIpYimiKeIqIipiKqIq4isiK2IroiviLCIsYiyiLOItIi1iLaIt4i4iLmIuoi7iLyIvYi+iL+IwIjBiMKIw4jEiMWIxojHiMiIyYjKiMuIzIjNiM6Iz4jQiNGI0ojTiNSI1YjWiNeI2IjZiNqI24jciN2I3ojfiOCI4YjiiOOI5IjliOaI54joiOmI6ojriOyI7YjuiO+I8IjxiPKI84j0iPWI9oj3iPiI+Yj6iPuI/Ij+iP+JAIkBiQKJA4kEiQWJBokHiQiJCYkKiQuJDIkNiQ6JD4kQiRKJE4kUiRWJFokXiRiJGYkaiRuJHIkdiR6JH4kgiSGJIokjiSSJJYkmiSeJKIkpiSqJK4ksiS2JLokviTCJMYkyiTOJNIk1iTaJN4k4iTmJOok7iTyJPYk+iT+JQIlBiUKJQ4lEiUWJRolHiUiJSYlKiUuJTIlNiU6JT4lQiVGJUolTiVSJVYlWiVeJWIlZiVqJW4lciV2JXolfiWCJYYliiWOJZIlliWaJZ4loiWmJaolriWyJbYluiW+JcIlxiXKJc4l0iXWJdol3iXiJeYl6iXuJfIl9iX6JgImCiYOJhImFiYaJh4mIiYmJiomMiY2JjomQiZGJkomTiZSJlYmXiZiJmYmaiZuJnImdiZ6Jn4mgiaGJoomjiaSJpYmmiaiJqYmriayJrYmuia+JsImxibKJs4m0ibWJtom3ibiJuYm6ibuJvIm9ib6Jv4nAicGJwonDicSJxYnGiceJyInJicqJy4nMic2JzonPidCJ0YnTidSJ1YnWideJ2InZidqJ24ncid2J3onfieCJ4YniieSJ5YnmieeJ6InpieqJ64nsie2J7onvifCJ8YnyifOJ9In1ifaJ94n4ifmJ+on7ifyJ/Yn+if+KAYoCigOKBIoFigaKB4oJigqKC4oMig2KDooPihCKEYoSihOKFIoVihaKGYoaihuKHIodih6KH4ogiiGKIoojiiSKJYomiieKKIopiiuKLIouii+KMIoyijOKNIo1ijaKN4o4ijmKOoo8ij2KPoo/ikCKQYpCikOKRIpFikaKR4pIikmKSopLikyKTYpOik+KUIpRilKKU4pUilaKV4pYilmKWopbilyKXYpeil+KYIphimKKY4plimeKaIppimqKa4psim6Kb4pwinKKdIp1inaKd4p4inmKeop7inyKfYp+in+KgIqBioOKhIqFioaKh4qIiomKioqLioyKjoqPipCKkYqSipOKlIqVipaKl4qYipmKmoqbipyKnYqfiqCKoYqiiqOKpIqliqaKp4qoiqmKqoqriqyKroqvirGKsoqzirSKtYq2ireKuIq5irqKu4q8ir2KvorAisGKworDisSKxYrGisiKyYrKisyKzYrOis+K0IrRitKK04rUitWK1orXitiK2YraituK3Irdit6K34rgiuGK4orjiuSK5YrmiueK6IrpiuqK7Irtiu6K74rwivGK8orzivSK9Yr2iveK+Ir5ivqK+4r8iv2K/or/iwCLAYsCiwOLBIsFiwaLB4sIiwmLCosLiwyLDYsOiw+LEIsRixKLE4sUixWLFosXixiLGYsaixyLHYseix+LIIshiyKLJIsliyaLJ4soiymLKosriyyLLYsuiy+LMIsxizKLM4s0izWLNos3iziLOYs6izuLPIs9iz6LP4tAi0GLQotDi0SLRYtGi0eLSItJi0qLS4tMi02LTotPi1CLUYtSi1OLVItVi1aLV4tZi1qLW4tci12LXotfi2CLYYtii2OLZItli2aLZ4toi2mLaotri2yLbYtui2+LcYtyi3OLdIt1i3aLeIt5i3qLe4t8i32Lfot/i4GLgouDi4WLhouHi4iLiYuKi4uLjIuNi46Lj4uQi5GLkouTi5SLlYuWi5eLmIuZi5qLm4uci52Lnoufi6CLoYuii6OLpIuli6aLp4uoi6mLqouri6yLrYuui6+LsIuxi7KLs4u0i7WLt4u4i7mLuou7i7yLvYu+i7+LwIvBi8KLw4vEi8WLxovHi8iLyYvKi8uLzIvNi86Lz4vQi9GL0ovTi9SL1YvWi9eL2IvZi9qL24vci92L3ovfi+CL4Yvii+OL5Ivli+aL54voi+mL6ovri+yL7Yvui++L8Ivxi/KL84v0i/WL9ov3i/iL+Yv6i/uL/Iv9i/6L/4wAjAGMAowDjASMBYwGjAeMCIwJjAqMC4wMjA2MDowPjBCMEYwSjBOMFIwVjBaMF4wYjBmMGowbjByMHYwejB+MIIwhjCKMI4wkjCWMJownjCiMKYwqjCuMLIwtjC6ML4wwjDGMMowzjDSMNYw2jDeMOIw5jDqMO4w8jD2MPow/jECMQYxCjEOMRIxFjEaMR4xIjEmMSoxLjEyMTYxOjE+MUIxRjFKMU4xUjFWMVoxXjFiMWYxajFuMXIxdjF6MX4xgjGKMY4xkjGWMZoxnjGiMaYxqjGuMbIxtjG6Mb4xwjHGMcoxzjHSMdYx2jHeMeIx5jHqMe4x8jH2Mfox/jICMgYyCjIOMhIyFjIaMh4yIjImMioyLjIyMjYyOjI+MkIyRjJKMk4yUjJWMloyXjJiMmYyajJuMnIydjJ6Mn4yhjKKMo4ykjKWMpoynjKiMqoyrjK2MroyvjLCMsYyyjLOMtIy1jLaMuIy5jLqMvIy9jL6Mv4zAjMGMwozDjMSMxYzGjMiMyYzKjMuMzIzNjM6Mz4zQjNGM0ozTjNSM1YzWjNeM2IzZjNqM24zcjN2M3ozfjOCM4YzijOOM5IzljOaM54zojOmM64zsjO2M7ozvjPCM8YzyjPOM9Iz1jPaM94z4jPmM+4z9jP6M/40AjQGNAo0DjQSNBY0GjQeNCI0JjQqNC40MjQ2NDo0PjRGNEo0TjRSNFY0WjReNGI0ZjRqNG40cjR2NHo0fjSCNIY0ijSONJI0ljSaNJ40ojSmNKo0rjSyNLY0ujS+NMI0xjTKNM400jTWNNo03jTiNOY06jTuNPI09jT6NP41AjUGNQo1DjUSNRY1GjUeNSI1JjUqNS41MjU2NTo1PjVCNUY1SjVONVI1VjVaNV41YjVmNWo1bjVyNXY1ejV+NYI1hjWKNY41kjWWNZo1njWiNao1rjWyNbY1ujW+NcI1xjXONdI11jXaNeI15jXqNe418jX2Nfo1/jYCNgY2CjYONhI2GjYeNiI2JjYuNjI2NjY6Nj42QjZGNko2TjZSNlY2WjZeNmI2ZjZqNm42cjZ2Nno2fjaCNoY2ijaONpI2ljaaNp42ojamNqo2sja2Nro2vjbCNsY2yjbSNtY22jbeNuI25jbqNu428jb2Nvo2/jcCNwo3DjcSNxY3GjceNyI3JjcqNy43Mjc2Nzo3PjdCN0Y3SjdON1I3VjdaN143YjdmN2o3bjdyN3Y3ejd+N4I3hjeKN443kjeWN5o3njeiN6Y3qjeuN7I3tje6N8I3xjfKN8430jfWN9o33jfiN+Y36jfuN/I39jf6N/44AjgGOAo4DjgSOBY4GjgeOCI4JjgqOC44Mjg2ODo4PjhCOEY4SjhOOFI4VjhaOF44YjhmOGo4bjhyOHY4ejh+OII4hjiKOI44kjiWOJo4njiiOKY4qjiuOLI4tji6OL44wjjGOMo4zjjSONY42jjiOOY46jjuOPI49jj6OP45AjkGOQo5DjkSORY5GjkeOSI5JjkqOS45Mjk2OTo5PjlCOUY5SjlOOVI5VjlaOV45YjlmOWo5bjlyOXY5ejl+OYI5hjmKOY45kjmaOZ45ojmmOao5rjmyObY5ujm+OcI5xjnKOc450jnWOdo53jniOeY56jnuOfI59jn6Of46AjoGOgo6DjoSOhY6GjoeOiI6JjoqOi46Mjo2Ojo6PjpCOkY6SjpOOlI6VjpaOl46YjpmOmo6bjpyOnY6ejp+OoI6hjqKOo46kjqWOpo6njqiOqY6qjqyOrY6ujq+OsI6xjrKOs460jrWOto63jriOuY66jruOvI69jr6Ov47AjsGOwo7DjsSOxY7GjseOyI7JjsuOzI7Njs6Oz47QjtGO0o7TjtSO1Y7WjteO2I7ZjtqO247cjt2O3o7fjuCO4Y7ijuOO5I7ljuaO547ojumO6o7rjuyO7Y7uju+O8I7xjvKO8470jvWO9o73jviO+Y76jvuO/I7+jv+PAI8BjwKPA48EjwWPBo8HjwiPCo8LjwyPDY8Ojw+PEI8RjxKPE48UjxWPFo8XjxiPGY8bjxyPHY8ejx+PII8hjyKPI48kjyWPJo8njyiPKY8qjyuPLI8tjy6PL48wjzGPMo8zjzSPNY82jzePOI85jzqPO488jz2PPo8/j0CPQY9Cj0OPRI9Fj0aPR49Ij0mPSo9Lj0yPTY9Oj0+PUI9Rj1KPU49Uj1WPVo9Xj1iPWY9aj1uPXI9dj16PX49gj2GPYo9jj2SPZY9mj2ePaI9pj2qPa49sj22Pbo9wj3GPco9zj3SPdY92j3ePeI95j3qPe498j32Pfo9/j4CPgY+Cj4OPhI+Fj4aPh4+Ij4mPio+Lj4yPjY+Oj4+PkI+Rj5KPk4+Uj5WPlo+Xj5iPmY+aj5uPnI+dj56Pn4+gj6GPoo+jj6SPpY+mj6ePqI+pj6qPq4+sj62Pr4+wj7GPso+zj7SPtY+2j7ePuI+5j7qPu4+9j76Pv4/Aj8GPwo/Dj8SPxY/Gj8ePyI/Jj8qPy4/Mj82Pzo/Pj9CP0o/Tj9WP1o/Xj9iP2Y/aj9uP3I/dj96P34/gj+GP4o/jj+SP5Y/nj+iP6Y/qj+uP7I/tj+6P74/wj/GP8o/zj/SP9Y/2j/eP+I/5j/qP+4/8j/6P/5ACkAOQBJAFkAaQB5AIkAmQCpALkAyQDZAOkA+QEZASkBOQFZAWkBeQGJAZkBuQHJAdkB6QIpAkkCWQJpAnkCiQKZAqkCuQLJAtkC6QL5AwkDOQNJA1kDaQN5A4kDmQOpA7kDyQPZA+kD+QQJBBkEKQQ5BEkEWQRpBHkEiQSZBMkE2QT5BQkFGQUpBWkFeQWJBZkFqQW5BckF2QXpBfkGGQYpBjkGSQZZBmkGeQaJBqkGuQbJBtkG6Qb5BwkHGQcpBzkHSQdZB2kHeQeZB6kHuQfJB9kH6Qf5CAkIGQgpCDkISQhZCGkIeQiJCJkIqQi5CMkI2QjpCPkJCQkZCSkJOQlJCVkJaQl5CYkJmQmpCbkJyQnZCekJ+QoJChkKKQo5CkkKWQppCnkKiQqZCqkKuQrJCtkK6Qr5CwkLGQspCzkLSQtZC2kLeQuJC5kLqQu5C8kL2QvpC/kMCQwZDCkMOQxJDFkMaQx5DIkMmQypDLkMyQzZDOkM+Q0JDRkNKQ05DUkNWQ1pDXkNiQ2ZDakNuQ3JDdkN6Q35DgkOGQ4pDjkOSQ5ZDmkOeQ6ZDqkOuQ7JDtkO6Q75DwkPGQ8pDzkPSQ9ZD2kPeQ+JD5kPqQ+5D8kP6Q/5EAkQGRApEDkQSRBZEGkQeRCJEJkQqRC5EMkQ2RDpEPkRCREZESkRORFJEVkRaRF5EYkRqRG5EckR2RHpEfkSCRIZEikSORJJElkSaRJ5EokSmRKpErkSyRLZEukS+RMJExkTKRM5E0kTWRNpE3kTiROZE6kTuRPJE9kT6RP5FAkUGRQpFDkUSRRZFGkUeRSJFJkUqRS5FMkU6RT5FQkVGRUpFTkVSRVZFWkVeRWJFZkVqRW5FckV2RXpFfkWCRYZFikWORZJFlkWaRZ5FokWmRapFrkWyRbZFukW+RcJFxkXKRc5F0kXWRdpF3kXiReZF6kXuRfJF9kX6Rf5GAkYGRgpGDkYSRhZGGkYeRiJGJkYqRi5GMkY2RjpGPkZCRkZGSkZORlJGVkZaRl5GYkZmRmpGbkZyRnZGekZ+RoJGhkaKRo5GkkaWRppGnkaiRqZGqkauRrJGtka6Rr5GwkbGRspGzkbSRtZG2kbeRuJG5kbqRu5G8kb2RvpG/kcGRwpHDkcSRxZHGkceRyJHJkcqRy5HQkdKR05HUkdWR1pHXkdiR2ZHakduR3JHdkd6R35HgkeGR4pHjkeSR5ZHmkeeR6JHpkeqR65Hske2R7pHvkfCR8ZHykfSR9ZH2kfeR+JH5kfqR+5H8kf2R/pH/kgCSAZICkgOSBJIFkgaSB5IIkgmSCpILkgySDZIOkg+SEJIRkhKSE5IUkhWSFpIXkhiSGZIakhuSHJIdkh6SH5IgkiGSIpIjkiSSJZImkieSKJIpkiqSK5Iski2SLpIvkjCSMZIykjOSNJI1kjaSN5I4kjmSOpI7kjySPZI+kj+SQJJBkkKSQ5JEkkWSRpJHkkiSSZJKkkuSTJJNkk6ST5JQklGSUpJTklSSVZJWkleSWJJZklqSW5Jckl2SXpJfkmCSYZJikmOSZJJlkmaSZ5JokmmSapJrkmySbZJukm+ScJJxknKSc5J0knWSdpJ3kniSeZJ6knuSfJJ9kn6Sf5KAkoGSgpKDkoSShZKGkoeSiJKJkoqSi5KMko2SjpKPkpCSkZKSkpOSlJKVkpaSl5KYkpmSmpKbkpySnZKekp+SoJKhkqKSo5KkkqWSppKnkqiSqZKqkquSrJKtkq6Sr5KwkrGSspKzkrSStZK2kreSuJK5krqSu5K8kr2SvpK/ksCSwZLCksOSxJLFksaSx5LIksmSypLLksySzZLOks+S0JLRktKS05LUktWS1pLXktiS2ZLaktyS3ZLekt+S4JLhkuKS45LkkuWS5pLnkuiS6ZLqkuuS7JLtku6S75LwkvGS8pLzkvSS9ZL2kveS+JL5kvqS+5L8kv2S/pL/kwCTAZMCkwOTBJMFkwaTB5MIkwmTCpMLkwyTDZMOkw+TEJMRkxKTE5MUkxWTFpMXkxiTGZMakxuTHJMdkx6TH5MgkyGTIpMjkySTJZMmkyeTKJMpkyqTK5Msky2TLpMvkzCTMZMzkzSTNZM2kzeTOJM5kzqTO5M8kz2TPpM/k0CTQZNCk0OTRJNFk0aTR5NIk0qTTZNOk0+TUJNRk1KTU5NUk1WTVpNXk1iTWZNak1uTXJNdk16TX5Ngk2GTYpNjk2STZZNmk2eTaJNpk2qTa5Nsk22TbpNvk3CTcZNyk3OTdJN1k3aTd5N4k3mTepN7k3yTfZN+k3+TgJOBk4KTg5OEk4WThpOHk4iTiZOKk4uTjJONk46Tj5OQk5GTkpOTk5STlZOWk5eTmJOZk5qTm5Ock52TnpOfk6CToZOik6OTpJOlk6aTp5Ook6mTqpOrk6yTrZOuk6+TsJOxk7KTs5O0k7WTtpO3k7iTuZO6k7uTvJO9k76Tv5PAk8GTwpPDk8STxZPGk8eTyZPKk8uTzJPNk86Tz5PQk9GT0pPTk9ST1ZPWk9eT2JPZk9qT25Pck92T3pPfk+CT4ZPik+OT5JPlk+aT55Pok+mT6pPrk+yT7ZPuk++T8JPxk/KT85P0k/WT9pP3k/iT+ZP6k/uT/JP9k/6T/5QAlAGUApQDlASUBZQGlAeUCJQJlAqUC5QMlA2UD5QQlBGUEpQTlBSUFZQWlBeUGJQZlBqUG5QclB2UH5QglCGUIpQjlCSUJZQmlCeUKJQplCqUK5QslC2ULpQvlDCUMZQylDOUNJQ1lDaUN5Q4lDmUOpQ7lDyUPZQ+lD+UQJRBlEKUQ5RElEWURpRHlEiUSZRKlEuUTJRNlE6UT5RQlFGUUpRTlFSUVZRWlFeUWJRZlFqUW5RclF2UXpRflGCUYZRilGOUZJRllGaUZ5RolGmUapRrlGyUbZRulG+UcJRxlHKUc5R0lHWUdpR3lHiUeZR6lHuUfJR9lH6Uf5SAlIGUgpSDlISUhZSGlIeUiJSJlIqUi5SMlI2UjpSPlJCUkZSSlJOUlJSVlJaUl5SYlJmUmpSblJyUnZSelJ+UoJShlKKUo5SklKWUppSnlKiUqZSqlKuUrJStlK6Ur5SwlLGUspSzlLSUtZS2lLeUuJS5lLqUu5S8lL2UvpS/lMCUwZTClMOUxJTFlMaUx5TIlMmUypTLlMyUzZTOlM+U0JTRlNKU05TUlNWU1pTXlNiU2ZTalNuU3JTdlN6U35TglOGU4pTjlOSU5ZTmlOeU6JTplOqU65TslO2U7pTvlPCU8ZTylPOU9JT1lPeU+JT5lPqU+5T8lP2U/pT/lQCVAZUClQOVBJUFlQaVB5UIlQmVCpULlQyVDZUOlQ+VEJURlRKVE5UUlRWVFpUXlRiVGZUalRuVHJUelR+VIJUhlSKVI5UklSWVJpUnlSiVKZUqlSuVLJUtlS6VL5UwlTGVMpUzlTSVNZU2lTeVOJU5lTqVO5U8lT2VPpU/lUCVQZVClUOVRJVFlUaVR5VIlUmVSpVLlUyVTZVOlU+VUJVRlVKVU5VUlVWVVpVXlViVWZValVuVXJVdlV6VX5VglWGVYpVjlWSVZZVmlWeVaJVplWqVa5VslW2VbpVvlXCVcZVylXOVdJV1lXaVeJV5lXqVe5V8lX2VfpV/lYGVgpWDlYSVhZWGlYeViJWKlYyVjZWOlY+VkJWRlZKVlJWVlZaVl5WYlZmVmpWblZyVnZWelZ+VoJWhlaOVpJWllaaVp5WolamVqpWrlayVrZWula+VsJWxlbKVs5W0lbWVtpW3lbiVuZW6lbuVvJW9lb6Vv5XAlcGVwpXDlcSVxZXGlceVyJXJlcqVy5XMlc2VzpXPldCV0pXTldSV1ZXWldeV2JXZldqV25Xdld6V35XgleGV4pXjleSV5ZXmleeV6JXpleqV65Xsle2V7pXvlfCV8ZXylfOV9JX1lfaV95X4lfmV+pX7lfyV/ZX+lf+WAJYBlgKWA5YElgWWBpYHlgiWCZYKlguWDJYNlg6WD5YQlhGWEpYTlhSWFZYWlheWGJYZlhqWG5Yclh2WHpYfliCWIZYiliOWJJYlliaWJ5YolimWKpYrliyWLZYuli+WMJYxljKWM5Y0ljWWNpY3ljiWOZY6ljuWPJY9lj6WP5ZAlkGWQpZDlkSWRZZGlkeWSJZJlkqWS5ZMlk6WT5ZRllKWU5ZUllWWVpZXlliWWZZalluWXJZdll6WX5ZglmGWYpZjlmWWZpZnlmiWaZZqlmuWbJZtlm6Wb5ZwlnGWcpZzlnSWdpZ3lniWeZZ6lnuWfJZ9ln6Wf5aAloGWgpaDloSWhZaGloeWiJaJloqWi5aMlo2WjpaPlpCWkZaSlpOWlJaVlpaWl5aYlpmWmpaclp2WnpaflqCWoZailqOWpJallqeWqJaplqqWq5aslq2WrpavlrCWsZaylrOWtJa1lraWt5a4lrmWupa7lryWvZa+lr+WwJbBlsKWw5bElsWWx5bIlsmWypbLlsyWzZbOls+W0JbRltKW05bUltWW1pbXltiW2ZbaltuW3Jbdlt6W35bgluGW5JblluaW55bolumW6pbrluyW7Zbulu+W8JbxlvKW85b0lvWW9pb3lviW+Zb6lvyW/Zb+lv+XAZcClwOXBJcFlwaXB5cIlwmXCpcLlwyXDZcOlw+XEJcRlxKXE5cUlxWXFpcXlxiXGZcalxuXHJcdlx6XH5cglyGXIpcjlySXJZcmlyeXKJcplyqXK5csly2XLpcvlzCXMZcylzOXNJc1lzaXN5c4lzmXOpc7lzyXPZc+lz+XQJdBl0KXQ5dEl0WXRpdHl0iXSZdKl0uXTJdNl06XT5dQl1GXUpdTl1SXVZdWl1eXWJdZl1qXXJddl1+XYZdjl2SXZZdml2eXaJdql2uXbJdtl26Xb5dwl3KXc5d0l3WXdpd3l3iXeZd6l3uXfJd9l36Xf5eAl4GXgpeDl4SXhZeGl4eXiJeJl4qXi5eMl42XjpePl5CXkZeSl5OXlJeVl5aXl5eYl5mXmpebl5yXnZeel5+XoJehl6KXo5ekl6WXppenl6iXqZeql6uXrJetl66Xr5ewl7GXspezl7SXtZe2l7iXuZe6l7uXvJe9l76Xv5fAl8GXwpfDl8SXxZfGl8eXyJfJl8qXy5fMl82XzpfPl9CX0ZfSl9OX1JfVl9aX15fYl9mX2pfbl9yX3Zfel9+X4Jfhl+KX45fkl+WX5pfnl+iX6Zfql+uX7Jftl+6X75fwl/GX8pf0l/WX9pf3l/iX+Zf6l/uX/Jf9l/6X/5gAmAGYA5gEmAeYCZgKmAuYDJgNmA6YD5gQmBGYEpgTmBSYFZgWmBeYGZgamBuYHJgdmB6YH5ggmCGYIpgjmCSYJZgmmCeYKJgpmCqYK5gsmC6YL5gwmDGYMpgzmDSYNZg2mDeYOJg5mDqYO5g8mD2YPpg/mECYQZhCmEOYRJhFmEaYR5hImEmYSphLmE6YT5hQmFGYUphTmFWYVphXmFmYWphbmFyYXZhfmGCYYZhimGOYZJhlmGaYZ5homGmYaphrmGyYbZhumG+YcJhxmHKYc5h0mHWYdph3mHiYeZh6mHuYfJh9mH6Yf5iAmIGYgpiDmISYhZiGmIeYiJiJmIqYi5iMmI2YjpiPmJCYkZiSmJOYlJiVmJaYl5iYmJmYmpibmJyYnZiemJ+YoJihmKKYo5ikmKWYppinmKmYqpirmKyYrZiumK+YsJixmLKYs5i0mLWYtpi3mLiYuZi6mLuYvZi+mL+YwJjBmMKYw5jEmMWYxpjHmMiYyZjKmMuYzJjNmM6Yz5jQmNGY0pjTmNSY1ZjWmNeY2JjZmNqY25jcmN2Y3pjgmOGY4pjjmOSY5ZjmmOeY6JjpmOqY65jsmO2Y7pjvmPCY8ZjymPOY9Jj1mPaY95j4mPmY+pj7mPyY/Zj+mP+ZAJkBmQKZA5kEmQWZBpkHmQiZCZkKmQuZDJkNmQ6ZD5kQmRGZEpkTmRSZFZkXmRiZGZkamRuZHJkdmR6ZH5kgmSGZIpkjmSSZJZkmmSeZKJkpmSqZK5ksmS2ZLpkvmTCZMZkymTOZNJk1mTaZN5k4mTmZOpk7mTyZPZk+mT+ZQJlBmUKZQ5lEmUWZRplHmUiZSZlKmUuZTJlNmU6ZT5lQmVGZUplTmVSZVZlWmVeZWJlZmVqZW5lcmV2ZXplfmWCZYZlimWOZZJllmWaZZ5lomWmZaplrmWyZbZlumW+ZcJlxmXKZc5l0mXWZdpl3mXiZeZl6mXuZfJl9mX6Zf5mAmYGZgpmDmYSZhZmGmYeZiJmJmYqZi5mMmY2ZjpmPmZCZkZmSmZOZlJmVmZaZl5mYmZqZm5mcmZ2ZnpmfmaCZoZmimaOZpJmlmaaZp5momamZqpmrmayZrZmuma+ZsJmxmbKZs5m0mbWZtpm3mbiZuZm6mbuZvJm9mb6Zv5nAmcGZwpnDmcSZxZnGmceZyJnJmcqZy5nMmc2ZzpnPmdCZ0ZnSmdOZ1JnVmdaZ15nYmdmZ2pnbmdyZ3ZnemeCZ4ZnimeOZ5JnlmeaZ55nomemZ6pnrmeyZ7Znume+Z8JnxmfKZ85n0mfWZ9pn3mfiZ+Zn6mfuZ/Jn9mf6Z/5oAmgGaApoDmgSaBZoGmgeaCJoJmgqaC5oMmg2aDpoPmhCaEZoSmhSaFZoWmheaGJoZmhqaG5ocmh2aHpofmiCaIZoimiOaJJolmiaaJ5oomimaKpormiyaLZoumi+aMJoxmjKaM5o0mjWaNpo3mjiaOZo6mjuaPJo9mj6aP5pAmkGaQppDmkSaRZpGmkeaSJpJmkqaS5pMmk2aTppPmlCaUZpSmlOaVJpVmlaaV5pYmlmaWppbmlyaXZpeml+aYJphmmKaY5pkmmWaZppnmmiaaZpqmmuabJptmm6ab5pwmnGacppzmnSadZp2mneaeJp5mnqae5p8mn2afpp/moCagZqCmoOahJqFmoaah5qImomaipqLmoyajZqOmo+akJqRmpKak5qUmpWalpqXmpiamZqampuanJqdmp6an5qgmqGaopqjmqSapZqmmqeaqZqqmquarJqtmq6ar5qwmrGaspqzmrSatZq2mreauJq5mrqau5q8mr2avpq/msCawZrCmsOaxJrFmsaax5rImsmayprLmsyazZrOms+a0JrRmtKa05rVmtaa15rZmtqa25rcmt2a3prfmuCa4ZrimuOa5Jrlmuaa55romuma6prrmuya7Zrumu+a8JrxmvKa85r0mvWa9pr3mvia+Zr6mvua/Jr9mv6a/5sAmwKbA5sEmwWbBpsHmwibCZsKmwubDJsNmw6bEJsRmxKbE5sUmxWbFpsXmxibGZsamxubHJsdmx6bH5sgmyGbIpsjmySbJZsmmyebKJspmyqbK5ssmy2bLpsvmzCbMZsymzObNJs1mzabN5s4mzmbOps7mzybPZs+mz+bQJtBm0KbQ5tEm0WbRptHm0ibSZtKm0ubTJtNm06bT5tQm1GbUptTm1SbVZtWm1ebWJtZm1qbW5tcm12bXptfm2CbYZtim2ObZJtlm2abZ5tom2mbaptrm2ybbZtum2+bcJtxm3Kbc5t0m3Wbdpt3m3ibeZt6m3ubfJt9m36bf5uAm4GbgpuDm4SbhZuGm4ibiZuKm4ubjJuNm46bj5uQm5GbkpuTm5SblZuWm5ebmJuZm5qbm5ucm52bnpufm6CboZuim6ObpJulm6abp5uom6mbqpurm6ybrZuum7CbsZuym7ObtJu1m7abt5u4m7mbupu7m7ybvZu+m7+bwJvBm8Kbw5vEm8WbxpvHm8ibyZvKm8ubzJvNm86bz5vQm9Gb0pvTm9Sb1ZvWm9eb2JvZm9qb25vcm92b3pvfm+Cb4Zvim+Ob5Jvlm+ab55vom+mb6pvrm+yb7Zvum++b8Jvxm/Kb85v0m/Wb9pv3m/ib+Zv6m/ub/Jv9m/6b/5wAnAGcApwDnAScBZwGnAecCJwJnAqcC5wMnA2cDpwPnBCcEZwSnBOcFJwVnBacF5wYnBmcGpwbnBycHZwenB+cIJwhnCKcI5wknCWcJpwnnCmcKpwrnCycLZwunC+cMJwxnDKcM5w0nDWcNpw3nDicOZw6nDucPJw9nD6cP5xAnEGcQpxDnEScRZxGnEecSJxJnEqcS5xMnE2cTpxPnFCcUZxSnFOcVJxVnFacV5xYnFmcWpxbnFycXZxenF+cYJxhnGKcY5xknGWcZpxnnGicaZxqnGucbJxtnG6cb5xwnHGccpxznHScdZx2nHeceJx5nHqce5x8nH2cfpx/nICcgZyCnIOchJyFnIach5yInImcipyLnIycjZyOnI+ckJyRnJKck5yUnJWclpyXnJicmZyanJucnJydnJ6cn5yhnKKco5yknKWcppynnKicqZyqnKucrJytnK6cr5ywnLGcspyznLSctZy2nLecuJy5nLqcu5y8nL2cvpy/nMCcwZzCnMOcxJzFnMacx5zInMmcypzLnMyczZzOnM+c0JzRnNKc05zUnNWc1pzXnNic2ZzanNuc3JzdnN6c35zgnOGc4pzjnOSc5ZzmnOec6JzpnOqc65zsnO2c7pzvnPCc8ZzynPOc9Jz1nPac95z4nPmc+pz7nPyc/Zz+nP+dAJ0BnQKdA50EnQWdBp0HnQidCZ0KnQudDJ0NnQ6dD50QnRGdEp0TnRSdFZ0WnRedGJ0ZnRqdG50cnR2dHp0fnSCdIZ0inSOdJJ0lnSadJ50onSmdKp0rnSydLZ0unS+dMJ0xnTKdM500nTWdNp03nTidOZ06nTudPJ09nT6dP51AnUGdQp1DnUSdRZ1GnUedSJ1JnUqdS51MnU2dTp1PnVCdUZ1SnVOdVJ1VnVadV51YnVmdWp1bnVydXZ1enV+dYJ1hnWKdY51knWWdZp1nnWidaZ1qnWudbJ1tnW6db51wnXGdcp1znXSddZ12nXedeJ15nXqde518nX2dfp1/nYCdgZ2CnYOdhJ2FnYadh52InYmdip2LnYydjZ2OnY+dkJ2RnZKdk52UnZWdlp2XnZidmZ2anZudnJ2dnZ6dn52gnaGdop2jnaSdpZ2mnaedqJ2pnaqdq52sna2drp2vnbCdsZ2ynbOdtJ21nbadt524nbmdup27nbydvZ2+nb+dwJ3BncKdw53EncWdxp3HncidyZ3KncudzJ3Nnc6dz53QndGd053UndWd1p3Xndid2Z3andud3J3dnd6d353gneGd4p3jneSd5Z3nneid6Z3qneud7J3tne6d753wnfGd8p3znfSd9Z32nfid+Z36nfud/J39nf6d/54AngGeAp4DngSeBZ4GngeeCJ4JngqeC54Mng2eDp4PnhCeEZ4SnhOeFJ4VnhaeF54YnhmeGp4bnhyeHZ4enh+eIJ4hniKeI54kniWeJp4nniieKZ4qniueLJ4tni6eL54wnjGeMp4znjSeNZ42njeeOJ45njqeO548nj2ePp4/nkCeQZ5DnkSeRZ5GnkeeSJ5JnkqeS55Mnk2eTp5PnlCeUZ5SnlOeVJ5VnlaeV55YnlmeWp5bnlyeXZ5enl+eYJ5hnmKeY55knmWeZp5nnmieaZ5qnmuebJ5tnm6eb55wnnGecp5znnSedZ52nneeeJ55nnqee558nn2efp5/noCegZ6CnoOehJ6Fnoaeh56Inoqei56Mno2ejp6PnpCekZ6SnpOelJ6Vnpael56Ynpmemp6bnpyenZ6enp+eoJ6hnqKeo56knqWepp6nnqieqZ6qnquerJ6tnq6er56wnrGesp6znrWetp63nrieuZ66nruevJ69nr6ev57AnsGewp7DnsSexZ7GnseeyJ7Jnsqey57Mns2ezp7PntCe0Z7SntOe1J7Vntae157Yntme2p7bntye3Z7ent+e4J7hnuKe457knuWe5p7nnuie6Z7qnuue7J7tnu6e757wnvGe8p7znvSe9Z72nvee+J75nvqe+578nv2e/p7/nwCfAZ8CnwOfBJ8FnwafB58InwmfCp8LnwyfDZ8Onw+fEJ8RnxKfE58UnxWfFp8XnxifGZ8anxufHJ8dnx6fH58gnyGfIp8jnySfJZ8mnyefKJ8pnyqfK58tny6fL58wnzGfMp8znzSfNZ82nzefOJ85nzqfO588nz2fPp8/n0CfQZ9Cn0OfRJ9Fn0afR59In0mfSp9Ln0yfTZ9On0+fUJ9Rn1KfU59Un1WfVp9Xn1ifWZ9an1ufXJ9dn16fX59gn2GfYp9jn2SfZZ9mn2efaJ9pn2qfa59sn22fbp9vn3CfcZ9yn3OfdJ91n3afd594n3mfep97n3yffZ9+n3+fgJ+Bn4Kfg5+En4Wfhp+Hn4ifiZ+Kn4ufjJ+On4+fkJ+Rn5Kfk5+Un5Wflp+Xn5ifmZ+an5ufnJ+dn56fn5+gn6Gfop+jn6SfpZ+0n7Wftp+3n7ifuZ+6n7ugAKABoAKgA6AEoAWgBqAHoAigCaAKoAugDKANoA6gD6AQoBGgEqAToBSgFaAWoBegGKAZoBqgG6AcoB2gHqAfoCCgIaAioCOgJKAloCagJ6AooCmgKqAroCygLaAuoC+gMKAxoDKgM6A0oDWgNqA3oDigOaA6oDugPKA9oD6gP6BAoEGgQqBDoESgRaBGoEegSKBJoEqgS6BMoE2gTqBPoFCgUaBSoFOgVKBVoFagV6BYoFmgWqBboFygXaBeoF+gYKBhoGKgY6BkoGWgZqBnoGigaaBqoGugbKBtoG6gb6BwoHGgcqBzoHSgdaB2oHegeKB5oHqge6B8oH2gfqB/oICggaCCoIOghKCFoIagh6CIoImgiqCLoIygjaCOoI+gkKCRoJKgk6CUoJWglqCXoJigmaCaoJugnKCdoJ6gn6CgoKGgoqCjoKSgpaCmoKegqKCpoKqgq6CsoK2grqCvoLCgsaCyoLOgtKC1oLagt6C4oLmguqC7oLygvaC+oL+gwKDBoMKgw6DEoMWgxqDHoMigyaDKoMugzKDNoM6gz6DQoNGg0qDToNSg1aDWoNeg2KDZoNqg26DcoN2g3qDfoOCg4aDioOOg5KDloOag56DooOmg6qDroOyg7aDuoO+g8KDxoPKg86D0oPWg9qD3oPig+aD6oPug/KD9oP6g/6EAoQGhAqEDoQShBaEGoQehCKEJoQqhC6EMoQ2hDqEPoRChEaESoROhFKEVoRahF6EYoRmhGqEboRyhHaEeoR+hIKEhoSKhI6EkoSWhJqEnoSihKaEqoSuhLKEtoS6hL6EwoTGhMqEzoTShNaE2oTehOKE5oTqhO6E8oT2hPqE/oUChQaFCoUOhRKFFoUahR6FIoUmhSqFLoUyhTaFOoU+hUKFRoVKhU6FUoVWhVqFXoVihWaFaoVuhXKFdoV6hX6FgoWGhYqFjoWShZaFmoWehaKFpoWqha6FsoW2hbqFvoXChcaFyoXOhdKF1oXahd6F4oXmheqF7oXyhfaF+oX+hgKGBoYKhg6GEoYWhhqGHoYihiaGKoYuhjKGNoY6hj6GQoZGhkqGToZShlaGWoZehmKGZoZqhm6GcoZ2hnqGfoaChoaGioaOhpKGloaahp6GooamhqqGroayhraGuoa+hsKGxobKhs6G0obWhtqG3obihuaG6obuhvKG9ob6hv6HAocGhwqHDocShxaHGocehyKHJocqhy6HMoc2hzqHPodCh0aHSodOh1KHVodah16HYodmh2qHbodyh3aHeod+h4KHhoeKh46HkoeWh5qHnoeih6aHqoeuh7KHtoe6h76HwofGh8qHzofSh9aH2ofeh+KH5ofqh+6H8of2h/qH/ogCiAaICogOiBKIFogaiB6IIogmiCqILogyiDaIOog+iEKIRohKiE6IUohWiFqIXohiiGaIaohuiHKIdoh6iH6IgoiGiIqIjoiSiJaImoieiKKIpoiqiK6Isoi2iLqIvojCiMaIyojOiNKI1ojaiN6I4ojmiOqI7ojyiPaI+oj+iQKJBokKiQ6JEokWiRqJHokiiSaJKokuiTKJNok6iT6JQolGiUqJTolSiVaJWoleiWKJZolqiW6Jcol2iXqJfomCiYaJiomOiZKJlomaiZ6JoommiaqJromyibaJuom+icKJxonKic6J0onWidqJ3oniieaJ6onuifKJ9on6if6KAooGigqKDooSihaKGooeiiKKJooqii6KMoo2ijqKPopCikaKSopOilKKVopail6KYopmimqKbopyinaKeop+ioKKhoqKio6KkoqWipqKnoqiiqaKqoquirKKtoq6ir6KworGisqKzorSitaK2oreiuKK5orqiu6K8or2ivqK/osCiwaLCosOixKLFosaix6LIosmiyqLLosyizaLOos+i0KLRotKi06LUotWi1qLXotii2aLaotui3KLdot6i36LgouGi4qLjouSi5aLmouei6KLpouqi66Lsou2i7qLvovCi8aLyovOi9KL1ovai96L4ovmi+qL7ovyi/aL+ov+jAKMBowKjA6MEowWjBqMHowijCaMKowujDKMNow6jD6MQoxGjEqMToxSjFaMWoxejGKMZoxqjG6Mcox2jHqMfoyCjIaMioyOjJKMloyajJ6MooymjKqMroyyjLaMuoy+jMKMxozKjM6M0ozWjNqM3ozijOaM6ozujPKM9oz6jP6NAo0GjQqNDo0SjRaNGo0ejSKNJo0qjS6NMo02jTqNPo1CjUaNSo1OjVKNVo1ajV6NYo1mjWqNbo1yjXaNeo1+jYKNho2KjY6Nko2WjZqNno2ijaaNqo2ujbKNto26jb6Nwo3GjcqNzo3SjdaN2o3ejeKN5o3qje6N8o32jfqN/o4CjgaOCo4OjhKOFo4ajh6OIo4mjiqOLo4yjjaOOo4+jkKORo5Kjk6OUo5WjlqOXo5ijmaOao5ujnKOdo56jn6Ogo6GjoqOjo6SjpaOmo6ejqKOpo6qjq6Oso62jrqOvo7CjsaOyo7OjtKO1o7ajt6O4o7mjuqO7o7yjvaO+o7+jwKPBo8Kjw6PEo8WjxqPHo8ijyaPKo8ujzKPNo86jz6PQo9Gj0qPTo9Sj1aPWo9ej2KPZo9qj26Pco92j3qPfo+Cj4aPio+Oj5KPlo+aj56Poo+mj6qPro+yj7aPuo++j8KPxo/Kj86P0o/Wj9qP3o/ij+aP6o/uj/KP9o/6j/6QApAGkAqQDpASkBaQGpAekCKQJpAqkC6QMpA2kDqQPpBCkEaQSpBOkFKQVpBakF6QYpBmkGqQbpBykHaQepB+kIKQhpCKkI6QkpCWkJqQnpCikKaQqpCukLKQtpC6kL6QwpDGkMqQzpDSkNaQ2pDekOKQ5pDqkO6Q8pD2kPqQ/pECkQaRCpEOkRKRFpEakR6RIpEmkSqRLpEykTaROpE+kUKRRpFKkU6RUpFWkVqRXpFikWaRapFukXKRdpF6kX6RgpGGkYqRjpGSkZaRmpGekaKRppGqka6RspG2kbqRvpHCkcaRypHOkdKR1pHakd6R4pHmkeqR7pHykfaR+pH+kgKSBpIKkg6SEpIWkhqSHpIikiaSKpIukjKSQpJGkkqSTpJSklaSWpJekmKSZpJqkm6ScpJ2knqSfpKCkoaSipKOkpKSlpKakp6SopKmkqqSrpKykraSupK+ksKSxpLKks6S0pLWktqS3pLikuaS6pLukvKS9pL6kv6TApMGkwqTDpMSkxaTG52znjeeO54/nkOeR55Lnk+eU55XnlufH58jn5+fo5+nn6ufr5+zn7efu5+/n8Ofx5/Ln8+gV6BboF+gY6BnoGugb6BzoHege6B/oIOgh6CLoI+gk6CXoJugn6CjoKegq6CvoLOgt6C7oL+gw6DHoMugz6DToNeg26DfoOOg56DroO+g86D3oPug/6EDoQehC6EPoROhF6EboR+hI6EnoSuhL6EzoTehO6E/oUOhR6FLoU+hU6FXoVuhX6FjoWeha6FvoXOhd6F7oX+hg6GHoYuhj6GT5LPl5+ZX55/nx+gz6DfoO+g/6EfoT+hT6GPof+iD6Ifoj+iT6J/oo+in+EP4R/hL+E/4U/hb+F/4Y/hn+MP4x/jP+NP41/jb+N/44/jn+Ov47/jz+Pf4+/j/+QP5B/kL+Q/5E/kn+Sv5L/kz+Tf5O/k/+UP5R/lL+VP5V/lb+V/5Z/lr+W/5c/l3+Xv5f/mD+Yf5i/mP+ZP5l/mb+aP5p/mr+a/8C/wP/BP8F/wf/Cv8N/w7/EP8R/xL/E/8U/xb/F/8Y/xn/G/8c/x3/IP8h/yL/I/8k/yX/Jv8n/yj/Kf8q/yv/LP8t/y7/L/8w/zH/Mv8z/zT/Nf82/zf/OP85/zr/O/88/z3/Pv8//0D/Qf9C/0P/RP9F/0b/R/9I/0n/Sv9L/0z/Tf9O/0//UP9R/1L/U/9U/1X/Vv9X/1j/Wf9a/1v/Xf/g/+H/4v/j/+T/5dhA3IfYQNyJ2EDczNhB3QnYQt2d2EXd19hK3Y/YUN3+",
            "dynamic": true
        }
    }, {
        "source": "https://use.typekit.net/af/df1522/00000000000000007735adeb/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 34293,
        "dynamic": false,
        "family": "hatch",
        "descriptors": {
            "weight": "300",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-A3,U+A5-B4,U+B6-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAADrAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALEAuADNAMAA9QD6AO4gHgDQAM4A/QDsAPcAswDyALkAvQDZAMYAtgCoAK0AwQDDANQBUgDFAL4A+wD5AOUA0gDmAKcA3QDLAM8AqgDVALIA2gCvAMcA/gDvALwAwgDbAAAADQExAUEBQgFgAWEBeAF9AX4CxgLHAtgC2QLaAtsC3ALdIBogICAhIDAgRCISIh4iYCJkImUlyvsB+wI="
        }
    }, {
        "source": "https://use.typekit.net/af/88f8ed/00000000000000007735aded/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 34294,
        "dynamic": false,
        "family": "hatch",
        "descriptors": {
            "weight": "300",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-A3,U+A5-B4,U+B6-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAADrAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALEAuADNAMAA9QD6AO4gHgDQAM4A/QDsAPcAswDyALkAvQDZAMYAtgCoAK0AwQDDANQBUgDFAL4A+wD5AOUA0gDmAKcA3QDLAM8AqgDVALIA2gCvAMcA/gDvALwAwgDbAAAADQExAUEBQgFgAWEBeAF9AX4CxgLHAtgC2QLaAtsC3ALdIBogICAhIDAgRCISIh4iYCJkImUlyvsB+wI="
        }
    }, {
        "source": "https://use.typekit.net/af/d9ef56/00000000000000007735adf0/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 34295,
        "dynamic": false,
        "family": "hatch",
        "descriptors": {
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-A3,U+A5-B4,U+B6-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAADrAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALEAuADNAMAA9QD6AO4gHgDQAM4A/QDsAPcAswDyALkAvQDZAMYAtgCoAK0AwQDDANQBUgDFAL4A+wD5AOUA0gDmAKcA3QDLAM8AqgDVALIA2gCvAMcA/gDvALwAwgDbAAAADQExAUEBQgFgAWEBeAF9AX4CxgLHAtgC2QLaAtsC3ALdIBogICAhIDAgRCISIh4iYCJkImUlyvsB+wI="
        }
    }, {
        "source": "https://use.typekit.net/af/a56635/00000000000000007735adf3/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 34296,
        "dynamic": false,
        "family": "hatch",
        "descriptors": {
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-A3,U+A5-B4,U+B6-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAADrAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALEAuADNAMAA9QD6AO4gHgDQAM4A/QDsAPcAswDyALkAvQDZAMYAtgCoAK0AwQDDANQBUgDFAL4A+wD5AOUA0gDmAKcA3QDLAM8AqgDVALIA2gCvAMcA/gDvALwAwgDbAAAADQExAUEBQgFgAWEBeAF9AX4CxgLHAtgC2QLaAtsC3ALdIBogICAhIDAgRCISIh4iYCJkImUlyvsB+wI="
        }
    }, {
        "source": "https://use.typekit.net/af/ef54f9/00000000000000007735ae00/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 34297,
        "dynamic": false,
        "family": "hatch",
        "descriptors": {
            "weight": "500",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-A3,U+A5-B4,U+B6-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAADrAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALEAuADNAMAA9QD6AO4gHgDQAM4A/QDsAPcAswDyALkAvQDZAMYAtgCoAK0AwQDDANQBUgDFAL4A+wD5AOUA0gDmAKcA3QDLAM8AqgDVALIA2gCvAMcA/gDvALwAwgDbAAAADQExAUEBQgFgAWEBeAF9AX4CxgLHAtgC2QLaAtsC3ALdIBogICAhIDAgRCISIh4iYCJkImUlyvsB+wI="
        }
    }, {
        "source": "https://use.typekit.net/af/f248aa/00000000000000007735adf9/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 34298,
        "dynamic": false,
        "family": "hatch",
        "descriptors": {
            "weight": "500",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-A3,U+A5-B4,U+B6-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAADrAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALEAuADNAMAA9QD6AO4gHgDQAM4A/QDsAPcAswDyALkAvQDZAMYAtgCoAK0AwQDDANQBUgDFAL4A+wD5AOUA0gDmAKcA3QDLAM8AqgDVALIA2gCvAMcA/gDvALwAwgDbAAAADQExAUEBQgFgAWEBeAF9AX4CxgLHAtgC2QLaAtsC3ALdIBogICAhIDAgRCISIh4iYCJkImUlyvsB+wI="
        }
    }, {
        "source": "https://use.typekit.net/af/9200a7/00000000000000007735adfc/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 34299,
        "dynamic": false,
        "family": "hatch",
        "descriptors": {
            "weight": "700",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-A3,U+A5-B4,U+B6-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAADrAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALEAuADNAMAA9QD6AO4gHgDQAM4A/QDsAPcAswDyALkAvQDZAMYAtgCoAK0AwQDDANQBUgDFAL4A+wD5AOUA0gDmAKcA3QDLAM8AqgDVALIA2gCvAMcA/gDvALwAwgDbAAAADQExAUEBQgFgAWEBeAF9AX4CxgLHAtgC2QLaAtsC3ALdIBogICAhIDAgRCISIh4iYCJkImUlyvsB+wI="
        }
    }, {
        "source": "https://use.typekit.net/af/a075a1/00000000000000007735adff/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 34300,
        "dynamic": false,
        "family": "hatch",
        "descriptors": {
            "weight": "700",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-A3,U+A5-B4,U+B6-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAADrAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALEAuADNAMAA9QD6AO4gHgDQAM4A/QDsAPcAswDyALkAvQDZAMYAtgCoAK0AwQDDANQBUgDFAL4A+wD5AOUA0gDmAKcA3QDLAM8AqgDVALIA2gCvAMcA/gDvALwAwgDbAAAADQExAUEBQgFgAWEBeAF9AX4CxgLHAtgC2QLaAtsC3ALdIBogICAhIDAgRCISIh4iYCJkImUlyvsB+wI="
        }
    }]
}))