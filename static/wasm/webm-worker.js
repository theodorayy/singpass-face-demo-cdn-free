var n,
  e,
  t,
  r =
    ((n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0),
    function(e) {
      e = void 0 !== (e = e || {}) ? e : {}
      var t,
        r = {}
      for (t in e) e.hasOwnProperty(t) && (r[t] = e[t])
      ;(e.arguments = []),
        (e.thisProgram = "./this.program"),
        (e.quit = function(n, e) {
          throw e
        }),
        (e.preRun = []),
        (e.postRun = [])
      var i,
        a,
        o = !1,
        s = !1
      ;(o = "object" == typeof window),
        (s = "function" == typeof importScripts),
        (i = "object" == typeof process && "function" == typeof require && !o && !s),
        (a = !o && !i && !s)
      var c,
        f,
        l = ""
      i
        ? ((l = __dirname + "/"),
          (e.read = function(n, e) {
            var t
            return (
              c || (c = require("fs")),
              f || (f = require("path")),
              (n = f.normalize(n)),
              (t = c.readFileSync(n)),
              e ? t : t.toString()
            )
          }),
          (e.readBinary = function(n) {
            var t = e.read(n, !0)
            return t.buffer || (t = new Uint8Array(t)), d(t.buffer), t
          }),
          process.argv.length > 1 && (e.thisProgram = process.argv[1].replace(/\\/g, "/")),
          (e.arguments = process.argv.slice(2)),
          process.on("uncaughtException", function(n) {
            if (!(n instanceof Fe)) throw n
          }),
          process.on("unhandledRejection", Oe),
          (e.quit = function(n) {
            process.exit(n)
          }),
          (e.inspect = function() {
            return "[Emscripten Module object]"
          }))
        : a
        ? ("undefined" != typeof read &&
            (e.read = function(n) {
              return read(n)
            }),
          (e.readBinary = function(n) {
            var e
            return "function" == typeof readbuffer
              ? new Uint8Array(readbuffer(n))
              : (d("object" == typeof (e = read(n, "binary"))), e)
          }),
          "undefined" != typeof scriptArgs
            ? (e.arguments = scriptArgs)
            : void 0 !== arguments && (e.arguments = arguments),
          "function" == typeof quit &&
            (e.quit = function(n) {
              quit(n)
            }))
        : (o || s) &&
          (s ? (l = self.location.href) : document.currentScript && (l = document.currentScript.src),
          n && (l = n),
          (l = 0 !== l.indexOf("blob:") ? l.substr(0, l.lastIndexOf("/") + 1) : ""),
          (e.read = function(n) {
            var e = new XMLHttpRequest()
            return e.open("GET", n, !1), e.send(null), e.responseText
          }),
          s &&
            (e.readBinary = function(n) {
              var e = new XMLHttpRequest()
              return e.open("GET", n, !1), (e.responseType = "arraybuffer"), e.send(null), new Uint8Array(e.response)
            }),
          (e.readAsync = function(n, e, t) {
            var r = new XMLHttpRequest()
            r.open("GET", n, !0),
              (r.responseType = "arraybuffer"),
              (r.onload = function() {
                200 == r.status || (0 == r.status && r.response) ? e(r.response) : t()
              }),
              (r.onerror = t),
              r.send(null)
          }),
          (e.setWindowTitle = function(n) {
            document.title = n
          }))
      var u =
          e.print ||
          ("undefined" != typeof console ? console.log.bind(console) : "undefined" != typeof print ? print : null),
        p =
          e.printErr ||
          ("undefined" != typeof printErr
            ? printErr
            : ("undefined" != typeof console && console.warn.bind(console)) || u)
      for (t in r) r.hasOwnProperty(t) && (e[t] = r[t])
      r = void 0
      var v,
        h = {
          "f64-rem": function(n, e) {
            return n % e
          },
          debugger: function() {},
        },
        m = 0
      "object" != typeof WebAssembly && p("no native wasm support detected")
      var y = !1
      function d(n, e) {
        n || Oe("Assertion failed: " + e)
      }
      var g,
        w,
        b,
        T,
        C,
        $,
        P,
        _,
        F,
        E = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0
      function O(n, e, t) {
        for (var r = e + t, i = e; n[i] && !(i >= r); ) ++i
        if (i - e > 16 && n.subarray && E) return E.decode(n.subarray(e, i))
        for (var a = ""; e < i; ) {
          var o = n[e++]
          if (128 & o) {
            var s = 63 & n[e++]
            if (192 != (224 & o)) {
              var c = 63 & n[e++]
              if (
                (o =
                  224 == (240 & o)
                    ? ((15 & o) << 12) | (s << 6) | c
                    : ((7 & o) << 18) | (s << 12) | (c << 6) | (63 & n[e++])) < 65536
              )
                a += String.fromCharCode(o)
              else {
                var f = o - 65536
                a += String.fromCharCode(55296 | (f >> 10), 56320 | (1023 & f))
              }
            } else a += String.fromCharCode(((31 & o) << 6) | s)
          } else a += String.fromCharCode(o)
        }
        return a
      }
      function j(n, e) {
        return n ? O(b, n, e) : ""
      }
      function R(n, e) {
        return n % e > 0 && (n += e - (n % e)), n
      }
      function S() {
        ;(e.HEAP8 = w = new Int8Array(g)),
          (e.HEAP16 = T = new Int16Array(g)),
          (e.HEAP32 = $ = new Int32Array(g)),
          (e.HEAPU8 = b = new Uint8Array(g)),
          (e.HEAPU16 = C = new Uint16Array(g)),
          (e.HEAPU32 = P = new Uint32Array(g)),
          (e.HEAPF32 = _ = new Float32Array(g)),
          (e.HEAPF64 = F = new Float64Array(g))
      }
      "undefined" != typeof TextDecoder && new TextDecoder("utf-16le")
      var W = e.TOTAL_MEMORY || 16777216
      function D(n) {
        for (; n.length > 0; ) {
          var t = n.shift()
          if ("function" != typeof t) {
            var r = t.func
            "number" == typeof r
              ? void 0 === t.arg
                ? e.dynCall_v(r)
                : e.dynCall_vi(r, t.arg)
              : r(void 0 === t.arg ? null : t.arg)
          } else t()
        }
      }
      W < 5242880 && p("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + W + "! (TOTAL_STACK=5242880)"),
        e.buffer
          ? (g = e.buffer)
          : "object" == typeof WebAssembly && "function" == typeof WebAssembly.Memory
          ? ((v = new WebAssembly.Memory({ initial: W / 65536 })), (g = v.buffer))
          : (g = new ArrayBuffer(W)),
        S(),
        ($[19276] = 5320240)
      var k = [],
        N = [],
        L = [],
        q = [],
        M = !1,
        V = 0,
        z = null,
        B = null
      ;(e.preloadedImages = {}), (e.preloadedAudios = {})
      var G = "data:application/octet-stream;base64,"
      function J(n) {
        return String.prototype.startsWith ? n.startsWith(G) : 0 === n.indexOf(G)
      }
      var K,
        X = "webm-wasm.wasm"
      function Y() {
        try {
          if (e.wasmBinary) return new Uint8Array(e.wasmBinary)
          if (e.readBinary) return e.readBinary(X)
          throw "both async and sync fetching of the wasm failed"
        } catch (n) {
          Oe(n)
        }
      }
      function A(n) {
        var t = { env: n, global: { NaN: NaN, Infinity: Infinity }, "global.Math": Math, asm2wasm: h }
        function r(n, t) {
          ;(e.asm = n.exports),
            (function(n) {
              if (
                (V--,
                e.monitorRunDependencies && e.monitorRunDependencies(V),
                0 == V && (null !== z && (clearInterval(z), (z = null)), B))
              ) {
                var t = B
                ;(B = null), t()
              }
            })()
        }
        if ((V++, e.monitorRunDependencies && e.monitorRunDependencies(V), e.instantiateWasm))
          try {
            return e.instantiateWasm(t, r)
          } catch (n) {
            return p("Module.instantiateWasm callback failed with error: " + n), !1
          }
        function i(n) {
          r(n.instance)
        }
        function a(n) {
          ;(e.wasmBinary || (!o && !s) || "function" != typeof fetch
            ? new Promise(function(n, e) {
                n(Y())
              })
            : fetch(X, { credentials: "same-origin" })
                .then(function(n) {
                  if (!n.ok) throw "failed to load wasm binary file at '" + X + "'"
                  return n.arrayBuffer()
                })
                .catch(function() {
                  return Y()
                })
          )
            .then(function(n) {
              return WebAssembly.instantiate(n, t)
            })
            .then(n, function(n) {
              p("failed to asynchronously prepare wasm: " + n), Oe(n)
            })
        }
        return (
          e.wasmBinary || "function" != typeof WebAssembly.instantiateStreaming || J(X) || "function" != typeof fetch
            ? a(i)
            : WebAssembly.instantiateStreaming(fetch(X, { credentials: "same-origin" }), t).then(i, function(n) {
                p("wasm streaming compile failed: " + n), p("falling back to ArrayBuffer instantiation"), a(i)
              }),
          {}
        )
      }
      J(X) || ((K = X), (X = e.locateFile ? e.locateFile(K, l) : l + K)),
        (e.asm = function(n, e, t) {
          return (
            (e.memory = v),
            (e.table = new WebAssembly.Table({ initial: 528, maximum: 528, element: "anyfunc" })),
            (e.__memory_base = 1024),
            (e.__table_base = 0),
            A(e)
          )
        }),
        N.push({
          func: function() {
            pe()
          },
        })
      var Z = {
        buffers: [null, [], []],
        printChar: function(n, e) {
          var t = Z.buffers[n]
          0 === e || 10 === e ? ((1 === n ? u : p)(O(t, 0)), (t.length = 0)) : t.push(e)
        },
        varargs: 0,
        get: function(n) {
          return (Z.varargs += 4), $[(Z.varargs - 4) >> 2]
        },
        getStr: function() {
          return j(Z.get())
        },
        get64: function() {
          var n = Z.get()
          return Z.get(), n
        },
        getZero: function() {
          Z.get()
        },
      }
      function Q(n) {
        switch (n) {
          case 1:
            return 0
          case 2:
            return 1
          case 4:
            return 2
          case 8:
            return 3
          default:
            throw new TypeError("Unknown type size: " + n)
        }
      }
      var H = void 0
      function U(n) {
        for (var e = "", t = n; b[t]; ) e += H[b[t++]]
        return e
      }
      var I = {},
        x = {},
        nn = {},
        en = 48,
        tn = 57
      function rn(n) {
        if (void 0 === n) return "_unknown"
        var e = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)
        return e >= en && e <= tn ? "_" + n : n
      }
      function an(n, e) {
        return (
          (n = rn(n)),
          new Function(
            "body",
            "return function " + n + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'
          )(e)
        )
      }
      function on(n, e) {
        var t = an(e, function(n) {
          ;(this.name = e), (this.message = n)
          var t = new Error(n).stack
          void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
        })
        return (
          (t.prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.toString = function() {
            return void 0 === this.message ? this.name : this.name + ": " + this.message
          }),
          t
        )
      }
      var sn = void 0
      function cn(n) {
        throw new sn(n)
      }
      var fn = void 0
      function ln(n) {
        throw new fn(n)
      }
      function un(n, e, t) {
        function r(e) {
          var r = t(e)
          r.length !== n.length && ln("Mismatched type converter count")
          for (var i = 0; i < n.length; ++i) pn(n[i], r[i])
        }
        n.forEach(function(n) {
          nn[n] = e
        })
        var i = new Array(e.length),
          a = [],
          o = 0
        e.forEach(function(n, e) {
          x.hasOwnProperty(n)
            ? (i[e] = x[n])
            : (a.push(n),
              I.hasOwnProperty(n) || (I[n] = []),
              I[n].push(function() {
                ;(i[e] = x[n]), ++o === a.length && r(i)
              }))
        }),
          0 === a.length && r(i)
      }
      function pn(n, e, t) {
        if (((t = t || {}), !("argPackAdvance" in e)))
          throw new TypeError("registerType registeredInstance requires argPackAdvance")
        var r = e.name
        if ((n || cn('type "' + r + '" must have a positive integer typeid pointer'), x.hasOwnProperty(n))) {
          if (t.ignoreDuplicateRegistrations) return
          cn("Cannot register type '" + r + "' twice")
        }
        if (((x[n] = e), delete nn[n], I.hasOwnProperty(n))) {
          var i = I[n]
          delete I[n],
            i.forEach(function(n) {
              n()
            })
        }
      }
      function vn(n) {
        if (!(this instanceof Cn)) return !1
        if (!(n instanceof Cn)) return !1
        for (
          var e = this.$$.ptrType.registeredClass, t = this.$$.ptr, r = n.$$.ptrType.registeredClass, i = n.$$.ptr;
          e.baseClass;

        )
          (t = e.upcast(t)), (e = e.baseClass)
        for (; r.baseClass; ) (i = r.upcast(i)), (r = r.baseClass)
        return e === r && t === i
      }
      function hn(n) {
        cn(n.$$.ptrType.registeredClass.name + " instance already deleted")
      }
      function mn() {
        if ((this.$$.ptr || hn(this), this.$$.preservePointerOnDelete)) return (this.$$.count.value += 1), this
        var n,
          e = Object.create(Object.getPrototypeOf(this), {
            $$: {
              value:
                ((n = this.$$),
                {
                  count: n.count,
                  deleteScheduled: n.deleteScheduled,
                  preservePointerOnDelete: n.preservePointerOnDelete,
                  ptr: n.ptr,
                  ptrType: n.ptrType,
                  smartPtr: n.smartPtr,
                  smartPtrType: n.smartPtrType,
                }),
            },
          })
        return (e.$$.count.value += 1), (e.$$.deleteScheduled = !1), e
      }
      function yn() {
        var n
        this.$$.ptr || hn(this),
          this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && cn("Object already scheduled for deletion"),
          (this.$$.count.value -= 1),
          0 === this.$$.count.value &&
            ((n = this.$$).smartPtr
              ? n.smartPtrType.rawDestructor(n.smartPtr)
              : n.ptrType.registeredClass.rawDestructor(n.ptr)),
          this.$$.preservePointerOnDelete || ((this.$$.smartPtr = void 0), (this.$$.ptr = void 0))
      }
      function dn() {
        return !this.$$.ptr
      }
      var gn = void 0,
        wn = []
      function bn() {
        for (; wn.length; ) {
          var n = wn.pop()
          ;(n.$$.deleteScheduled = !1), n.delete()
        }
      }
      function Tn() {
        return (
          this.$$.ptr || hn(this),
          this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && cn("Object already scheduled for deletion"),
          wn.push(this),
          1 === wn.length && gn && gn(bn),
          (this.$$.deleteScheduled = !0),
          this
        )
      }
      function Cn() {}
      var $n = {}
      function Pn(n, e, t) {
        if (void 0 === n[e].overloadTable) {
          var r = n[e]
          ;(n[e] = function() {
            return (
              n[e].overloadTable.hasOwnProperty(arguments.length) ||
                cn(
                  "Function '" +
                    t +
                    "' called with an invalid number of arguments (" +
                    arguments.length +
                    ") - expects one of (" +
                    n[e].overloadTable +
                    ")!"
                ),
              n[e].overloadTable[arguments.length].apply(this, arguments)
            )
          }),
            (n[e].overloadTable = []),
            (n[e].overloadTable[r.argCount] = r)
        }
      }
      function _n(n, e, t, r, i, a, o, s) {
        ;(this.name = n),
          (this.constructor = e),
          (this.instancePrototype = t),
          (this.rawDestructor = r),
          (this.baseClass = i),
          (this.getActualType = a),
          (this.upcast = o),
          (this.downcast = s),
          (this.pureVirtualFunctions = [])
      }
      function Fn(n, e, t) {
        for (; e !== t; )
          e.upcast || cn("Expected null or instance of " + t.name + ", got an instance of " + e.name),
            (n = e.upcast(n)),
            (e = e.baseClass)
        return n
      }
      function En(n, e) {
        return null === e
          ? (this.isReference && cn("null is not a valid " + this.name), 0)
          : (e.$$ || cn('Cannot pass "' + ee(e) + '" as a ' + this.name),
            e.$$.ptr || cn("Cannot pass deleted object as a pointer of type " + this.name),
            Fn(e.$$.ptr, e.$$.ptrType.registeredClass, this.registeredClass))
      }
      function On(n, e) {
        var t
        if (null === e)
          return (
            this.isReference && cn("null is not a valid " + this.name),
            this.isSmartPointer ? ((t = this.rawConstructor()), null !== n && n.push(this.rawDestructor, t), t) : 0
          )
        if (
          (e.$$ || cn('Cannot pass "' + ee(e) + '" as a ' + this.name),
          e.$$.ptr || cn("Cannot pass deleted object as a pointer of type " + this.name),
          !this.isConst &&
            e.$$.ptrType.isConst &&
            cn(
              "Cannot convert argument of type " +
                (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) +
                " to parameter type " +
                this.name
            ),
          (t = Fn(e.$$.ptr, e.$$.ptrType.registeredClass, this.registeredClass)),
          this.isSmartPointer)
        )
          switch (
            (void 0 === e.$$.smartPtr && cn("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy)
          ) {
            case 0:
              e.$$.smartPtrType === this
                ? (t = e.$$.smartPtr)
                : cn(
                    "Cannot convert argument of type " +
                      (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) +
                      " to parameter type " +
                      this.name
                  )
              break
            case 1:
              t = e.$$.smartPtr
              break
            case 2:
              if (e.$$.smartPtrType === this) t = e.$$.smartPtr
              else {
                var r = e.clone()
                ;(t = this.rawShare(
                  t,
                  ne(function() {
                    r.delete()
                  })
                )),
                  null !== n && n.push(this.rawDestructor, t)
              }
              break
            default:
              cn("Unsupporting sharing policy")
          }
        return t
      }
      function jn(n, e) {
        return null === e
          ? (this.isReference && cn("null is not a valid " + this.name), 0)
          : (e.$$ || cn('Cannot pass "' + ee(e) + '" as a ' + this.name),
            e.$$.ptr || cn("Cannot pass deleted object as a pointer of type " + this.name),
            e.$$.ptrType.isConst &&
              cn("Cannot convert argument of type " + e.$$.ptrType.name + " to parameter type " + this.name),
            Fn(e.$$.ptr, e.$$.ptrType.registeredClass, this.registeredClass))
      }
      function Rn(n) {
        return this.fromWireType(P[n >> 2])
      }
      function Sn(n) {
        return this.rawGetPointee && (n = this.rawGetPointee(n)), n
      }
      function Wn(n) {
        this.rawDestructor && this.rawDestructor(n)
      }
      function Dn(n) {
        null !== n && n.delete()
      }
      function kn() {
        return Object.keys(qn).length
      }
      function Nn() {
        var n = []
        for (var e in qn) qn.hasOwnProperty(e) && n.push(qn[e])
        return n
      }
      function Ln(n) {
        ;(gn = n), wn.length && gn && gn(bn)
      }
      var qn = {}
      function Mn(n, e) {
        return (
          (e = (function(n, e) {
            for (void 0 === e && cn("ptr should not be undefined"); n.baseClass; ) (e = n.upcast(e)), (n = n.baseClass)
            return e
          })(n, e)),
          qn[e]
        )
      }
      function Vn(n, e) {
        return (
          (e.ptrType && e.ptr) || ln("makeClassHandle requires ptr and ptrType"),
          !!e.smartPtrType != !!e.smartPtr && ln("Both smartPtrType and smartPtr must be specified"),
          (e.count = { value: 1 }),
          Object.create(n, { $$: { value: e } })
        )
      }
      function zn(n) {
        var e = this.getPointee(n)
        if (!e) return this.destructor(n), null
        var t = Mn(this.registeredClass, e)
        if (void 0 !== t) {
          if (0 === t.$$.count.value) return (t.$$.ptr = e), (t.$$.smartPtr = n), t.clone()
          var r = t.clone()
          return this.destructor(n), r
        }
        function i() {
          return Vn(
            this.registeredClass.instancePrototype,
            this.isSmartPointer
              ? { ptrType: this.pointeeType, ptr: e, smartPtrType: this, smartPtr: n }
              : { ptrType: this, ptr: n }
          )
        }
        var a,
          o = this.registeredClass.getActualType(e),
          s = $n[o]
        if (!s) return i.call(this)
        var c = (function n(e, t, r) {
          if (t === r) return e
          if (void 0 === r.baseClass) return null
          var i = n(e, t, r.baseClass)
          return null === i ? null : r.downcast(i)
        })(e, this.registeredClass, (a = this.isConst ? s.constPointerType : s.pointerType).registeredClass)
        return null === c
          ? i.call(this)
          : Vn(
              a.registeredClass.instancePrototype,
              this.isSmartPointer ? { ptrType: a, ptr: c, smartPtrType: this, smartPtr: n } : { ptrType: a, ptr: c }
            )
      }
      function Bn(n, e, t, r, i, a, o, s, c, f, l) {
        ;(this.name = n),
          (this.registeredClass = e),
          (this.isReference = t),
          (this.isConst = r),
          (this.isSmartPointer = i),
          (this.pointeeType = a),
          (this.sharingPolicy = o),
          (this.rawGetPointee = s),
          (this.rawConstructor = c),
          (this.rawShare = f),
          (this.rawDestructor = l),
          i || void 0 !== e.baseClass
            ? (this.toWireType = On)
            : r
            ? ((this.toWireType = En), (this.destructorFunction = null))
            : ((this.toWireType = jn), (this.destructorFunction = null))
      }
      function Gn(n, t) {
        var r
        if (((n = U(n)), void 0 !== e["FUNCTION_TABLE_" + n])) r = e["FUNCTION_TABLE_" + n][t]
        else if ("undefined" != typeof FUNCTION_TABLE) r = FUNCTION_TABLE[t]
        else {
          var i = e["dynCall_" + n]
          void 0 === i &&
            void 0 === (i = e["dynCall_" + n.replace(/f/g, "d")]) &&
            cn("No dynCall invoker for signature: " + n),
            (r = (function(e) {
              for (var r = [], i = 1; i < n.length; ++i) r.push("a" + i)
              var a = "return function dynCall_" + n + "_" + t + "(" + r.join(", ") + ") {\n"
              return (
                (a += "    return dynCall(rawFunction" + (r.length ? ", " : "") + r.join(", ") + ");\n"),
                (a += "};\n"),
                new Function("dynCall", "rawFunction", a)(e, t)
              )
            })(i))
        }
        return "function" != typeof r && cn("unknown function pointer with signature " + n + ": " + t), r
      }
      var Jn = void 0
      function Kn(n) {
        var e = ce(n),
          t = U(e)
        return fe(e), t
      }
      function Xn(n, e) {
        var t = [],
          r = {}
        throw (e.forEach(function n(e) {
          r[e] || x[e] || (nn[e] ? nn[e].forEach(n) : (t.push(e), (r[e] = !0)))
        }),
        new Jn(n + ": " + t.map(Kn).join([", "])))
      }
      function Yn(n, e) {
        for (var t = [], r = 0; r < n; r++) t.push($[(e >> 2) + r])
        return t
      }
      function An(n) {
        for (; n.length; ) {
          var e = n.pop()
          n.pop()(e)
        }
      }
      function Zn(n, e, t, r, i) {
        var a = e.length
        a < 2 && cn("argTypes array size mismatch! Must at least get return value and 'this' types!")
        for (var o = null !== e[1] && null !== t, s = !1, c = 1; c < e.length; ++c)
          if (null !== e[c] && void 0 === e[c].destructorFunction) {
            s = !0
            break
          }
        var f = "void" !== e[0].name,
          l = "",
          u = ""
        for (c = 0; c < a - 2; ++c)
          (l += (0 !== c ? ", " : "") + "arg" + c), (u += (0 !== c ? ", " : "") + "arg" + c + "Wired")
        var p =
          "return function " +
          rn(n) +
          "(" +
          l +
          ") {\nif (arguments.length !== " +
          (a - 2) +
          ") {\nthrowBindingError('function " +
          n +
          " called with ' + arguments.length + ' arguments, expected " +
          (a - 2) +
          " args!');\n}\n"
        s && (p += "var destructors = [];\n")
        var v = s ? "destructors" : "null",
          h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
          m = [cn, r, i, An, e[0], e[1]]
        for (o && (p += "var thisWired = classParam.toWireType(" + v + ", this);\n"), c = 0; c < a - 2; ++c)
          (p +=
            "var arg" + c + "Wired = argType" + c + ".toWireType(" + v + ", arg" + c + "); // " + e[c + 2].name + "\n"),
            h.push("argType" + c),
            m.push(e[c + 2])
        if (
          (o && (u = "thisWired" + (u.length > 0 ? ", " : "") + u),
          (p += (f ? "var rv = " : "") + "invoker(fn" + (u.length > 0 ? ", " : "") + u + ");\n"),
          s)
        )
          p += "runDestructors(destructors);\n"
        else
          for (c = o ? 1 : 2; c < e.length; ++c) {
            var y = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired"
            null !== e[c].destructorFunction &&
              ((p += y + "_dtor(" + y + "); // " + e[c].name + "\n"),
              h.push(y + "_dtor"),
              m.push(e[c].destructorFunction))
          }
        return (
          f && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"),
          h.push((p += "}\n")),
          (function(n, e) {
            if (!(n instanceof Function))
              throw new TypeError("new_ called with constructor type " + typeof n + " which is not a function")
            var t = an(n.name || "unknownFunctionName", function() {})
            t.prototype = n.prototype
            var r = new t(),
              i = n.apply(r, e)
            return i instanceof Object ? i : r
          })(Function, h).apply(null, m)
        )
      }
      var Qn = [],
        Hn = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }]
      function Un(n) {
        n > 4 && 0 == --Hn[n].refcount && ((Hn[n] = void 0), Qn.push(n))
      }
      function In() {
        for (var n = 0, e = 5; e < Hn.length; ++e) void 0 !== Hn[e] && ++n
        return n
      }
      function xn() {
        for (var n = 5; n < Hn.length; ++n) if (void 0 !== Hn[n]) return Hn[n]
        return null
      }
      function ne(n) {
        switch (n) {
          case void 0:
            return 1
          case null:
            return 2
          case !0:
            return 3
          case !1:
            return 4
          default:
            var e = Qn.length ? Qn.pop() : Hn.length
            return (Hn[e] = { refcount: 1, value: n }), e
        }
      }
      function ee(n) {
        if (null === n) return "null"
        var e = typeof n
        return "object" === e || "array" === e || "function" === e ? n.toString() : "" + n
      }
      function te(n, e) {
        switch (e) {
          case 2:
            return function(n) {
              return this.fromWireType(_[n >> 2])
            }
          case 3:
            return function(n) {
              return this.fromWireType(F[n >> 3])
            }
          default:
            throw new TypeError("Unknown float type: " + n)
        }
      }
      function re(n, e, t) {
        switch (e) {
          case 0:
            return t
              ? function(n) {
                  return w[n]
                }
              : function(n) {
                  return b[n]
                }
          case 1:
            return t
              ? function(n) {
                  return T[n >> 1]
                }
              : function(n) {
                  return C[n >> 1]
                }
          case 2:
            return t
              ? function(n) {
                  return $[n >> 2]
                }
              : function(n) {
                  return P[n >> 2]
                }
          default:
            throw new TypeError("Unknown integer type: " + n)
        }
      }
      function ie(n, e) {
        var t = x[n]
        return void 0 === t && cn(e + " has unknown type " + Kn(n)), t
      }
      function ae() {
        return w.length
      }
      !(function() {
        for (var n = new Array(256), e = 0; e < 256; ++e) n[e] = String.fromCharCode(e)
        H = n
      })(),
        (sn = e.BindingError = on(Error, "BindingError")),
        (fn = e.InternalError = on(Error, "InternalError")),
        (Cn.prototype.isAliasOf = vn),
        (Cn.prototype.clone = mn),
        (Cn.prototype.delete = yn),
        (Cn.prototype.isDeleted = dn),
        (Cn.prototype.deleteLater = Tn),
        (Bn.prototype.getPointee = Sn),
        (Bn.prototype.destructor = Wn),
        (Bn.prototype.argPackAdvance = 8),
        (Bn.prototype.readValueFromPointer = Rn),
        (Bn.prototype.deleteObject = Dn),
        (Bn.prototype.fromWireType = zn),
        (e.getInheritedInstanceCount = kn),
        (e.getLiveInheritedInstances = Nn),
        (e.flushPendingDeletes = bn),
        (e.setDelayFunction = Ln),
        (Jn = e.UnboundTypeError = on(Error, "UnboundTypeError")),
        (e.count_emval_handles = In),
        (e.get_first_emval = xn)
      var oe = {
          e: Oe,
          b: function(n) {
            m = n
          },
          c: function() {
            return m
          },
          C: function(n, e) {
            var t = he()
            try {
              return me(n, e)
            } catch (n) {
              if ((ve(t), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          S: function(n) {
            var e = he()
            try {
              return ye(n)
            } catch (n) {
              if ((ve(e), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          x: function(n, e) {
            var t = he()
            try {
              return de(n, e)
            } catch (n) {
              if ((ve(t), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          g: function(n, e, t) {
            var r = he()
            try {
              return ge(n, e, t)
            } catch (n) {
              if ((ve(r), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          I: function(n, e, t, r, i, a, o, s) {
            var c = he()
            try {
              return we(n, e, t, r, i, a, o, s)
            } catch (n) {
              if ((ve(c), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          J: function(n, e, t, r, i, a, o, s) {
            var c = he()
            try {
              return be(n, e, t, r, i, a, o, s)
            } catch (n) {
              if ((ve(c), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          i: function(n, e) {
            var t = he()
            try {
              Te(n, e)
            } catch (n) {
              if ((ve(t), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          l: function(n, e, t) {
            var r = he()
            try {
              Ce(n, e, t)
            } catch (n) {
              if ((ve(r), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          H: function(n, e, t, r) {
            var i = he()
            try {
              $e(n, e, t, r)
            } catch (n) {
              if ((ve(i), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          f: function(n, e, t, r, i) {
            var a = he()
            try {
              Pe(n, e, t, r, i)
            } catch (n) {
              if ((ve(a), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          ea: function(n, e, t, r, i, a) {
            var o = he()
            try {
              _e(n, e, t, r, i, a)
            } catch (n) {
              if ((ve(o), n !== n + 0 && "longjmp" !== n)) throw n
              ue(1, 0)
            }
          },
          w: function(n) {
            return le(n)
          },
          da: function() {
            throw ((y = !0), "Pure virtual function called!")
          },
          v: function(n, e, t) {
            throw n
          },
          ca: function() {},
          G: function(n) {
            return e.___errno_location && ($[e.___errno_location() >> 2] = n), n
          },
          ba: function(n, e) {
            Z.varargs = e
            try {
              var t = Z.getStreamFromFD(),
                r = (Z.get(), Z.get()),
                i = Z.get(),
                a = Z.get(),
                o = r
              return (
                FS.llseek(t, o, a), ($[i >> 2] = t.position), t.getdents && 0 === o && 0 === a && (t.getdents = null), 0
              )
            } catch (n) {
              return ("undefined" != typeof FS && n instanceof FS.ErrnoError) || Oe(n), -n.errno
            }
          },
          aa: function(n, e) {
            Z.varargs = e
            try {
              var t = Z.getStreamFromFD(),
                r = Z.get(),
                i = Z.get()
              return Z.doReadv(t, r, i)
            } catch (n) {
              return ("undefined" != typeof FS && n instanceof FS.ErrnoError) || Oe(n), -n.errno
            }
          },
          F: function(n, e) {
            Z.varargs = e
            try {
              for (var t = Z.get(), r = Z.get(), i = Z.get(), a = 0, o = 0; o < i; o++) {
                for (var s = $[(r + 8 * o) >> 2], c = $[(r + (8 * o + 4)) >> 2], f = 0; f < c; f++)
                  Z.printChar(t, b[s + f])
                a += c
              }
              return a
            } catch (n) {
              return ("undefined" != typeof FS && n instanceof FS.ErrnoError) || Oe(n), -n.errno
            }
          },
          r: function(n, e) {
            Z.varargs = e
            try {
              return 0
            } catch (n) {
              return ("undefined" != typeof FS && n instanceof FS.ErrnoError) || Oe(n), -n.errno
            }
          },
          $: function(n, e) {
            Z.varargs = e
            try {
              var t = Z.getStr(),
                r = Z.get(),
                i = Z.get()
              return FS.open(t, r, i).fd
            } catch (n) {
              return ("undefined" != typeof FS && n instanceof FS.ErrnoError) || Oe(n), -n.errno
            }
          },
          E: function(n, e) {
            Z.varargs = e
            try {
              return 0
            } catch (n) {
              return ("undefined" != typeof FS && n instanceof FS.ErrnoError) || Oe(n), -n.errno
            }
          },
          D: function(n, e) {
            Z.varargs = e
            try {
              var t = Z.getStreamFromFD()
              return FS.close(t), 0
            } catch (n) {
              return ("undefined" != typeof FS && n instanceof FS.ErrnoError) || Oe(n), -n.errno
            }
          },
          u: function() {},
          _: function(n, e, t, r, i) {
            var a = Q(t)
            pn(n, {
              name: (e = U(e)),
              fromWireType: function(n) {
                return !!n
              },
              toWireType: function(n, e) {
                return e ? r : i
              },
              argPackAdvance: 8,
              readValueFromPointer: function(n) {
                var r
                if (1 === t) r = w
                else if (2 === t) r = T
                else {
                  if (4 !== t) throw new TypeError("Unknown boolean type size: " + e)
                  r = $
                }
                return this.fromWireType(r[n >> a])
              },
              destructorFunction: null,
            })
          },
          Z: function(n, t, r, i, a, o, s, c, f, l, u, p, v) {
            ;(u = U(u)), (o = Gn(a, o)), c && (c = Gn(s, c)), l && (l = Gn(f, l)), (v = Gn(p, v))
            var h = rn(u)
            !(function(n, t, r) {
              e.hasOwnProperty(n)
                ? ((void 0 === r || (void 0 !== e[n].overloadTable && void 0 !== e[n].overloadTable[r])) &&
                    cn("Cannot register public name '" + n + "' twice"),
                  Pn(e, n, n),
                  e.hasOwnProperty(r) &&
                    cn(
                      "Cannot register multiple overloads of a function with the same number of arguments (" + r + ")!"
                    ),
                  (e[n].overloadTable[r] = t))
                : ((e[n] = t), void 0 !== r && (e[n].numArguments = r))
            })(h, function() {
              Xn("Cannot construct " + u + " due to unbound types", [i])
            }),
              un([n, t, r], i ? [i] : [], function(t) {
                var r, a
                ;(t = t[0]), (a = i ? (r = t.registeredClass).instancePrototype : Cn.prototype)
                var s = an(h, function() {
                    if (Object.getPrototypeOf(this) !== f) throw new sn("Use 'new' to construct " + u)
                    if (void 0 === p.constructor_body) throw new sn(u + " has no accessible constructor")
                    var n = p.constructor_body[arguments.length]
                    if (void 0 === n)
                      throw new sn(
                        "Tried to invoke ctor of " +
                          u +
                          " with invalid number of parameters (" +
                          arguments.length +
                          ") - expected (" +
                          Object.keys(p.constructor_body).toString() +
                          ") parameters instead!"
                      )
                    return n.apply(this, arguments)
                  }),
                  f = Object.create(a, { constructor: { value: s } })
                s.prototype = f
                var p = new _n(u, s, f, v, r, o, c, l),
                  m = new Bn(u, p, !0, !1, !1),
                  y = new Bn(u + "*", p, !1, !1, !1),
                  d = new Bn(u + " const*", p, !1, !0, !1)
                return (
                  ($n[n] = { pointerType: y, constPointerType: d }),
                  (function(n, t, r) {
                    e.hasOwnProperty(n) || ln("Replacing nonexistant public symbol"),
                      void 0 !== e[n].overloadTable && void 0 !== r
                        ? (e[n].overloadTable[r] = t)
                        : ((e[n] = t), (e[n].argCount = r))
                  })(h, s),
                  [m, y, d]
                )
              })
          },
          Y: function(n, e, t, r, i, a) {
            var o = Yn(e, t)
            ;(i = Gn(r, i)),
              un([], [n], function(n) {
                var t = "constructor " + (n = n[0]).name
                if (
                  (void 0 === n.registeredClass.constructor_body && (n.registeredClass.constructor_body = []),
                  void 0 !== n.registeredClass.constructor_body[e - 1])
                )
                  throw new sn(
                    "Cannot register multiple constructors with identical number of parameters (" +
                      (e - 1) +
                      ") for class '" +
                      n.name +
                      "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
                  )
                return (
                  (n.registeredClass.constructor_body[e - 1] = function() {
                    Xn("Cannot construct " + n.name + " due to unbound types", o)
                  }),
                  un([], o, function(r) {
                    return (
                      (n.registeredClass.constructor_body[e - 1] = function() {
                        var n = arguments
                        arguments.length !== e - 1 &&
                          cn(t + " called with " + arguments.length + " arguments, expected " + (e - 1))
                        var o = [],
                          s = new Array(e)
                        s[0] = a
                        for (var c = 1; c < e; ++c) s[c] = r[c].toWireType(o, n[c - 1])
                        var f = i.apply(null, s)
                        return An(o), r[0].fromWireType(f)
                      }),
                      []
                    )
                  }),
                  []
                )
              })
          },
          t: function(n, e, t, r, i, a, o, s) {
            var c = Yn(t, r)
            ;(e = U(e)),
              (a = Gn(i, a)),
              un([], [n], function(n) {
                var r = (n = n[0]).name + "." + e
                function i() {
                  Xn("Cannot call " + r + " due to unbound types", c)
                }
                s && n.registeredClass.pureVirtualFunctions.push(e)
                var f = n.registeredClass.instancePrototype,
                  l = f[e]
                return (
                  void 0 === l || (void 0 === l.overloadTable && l.className !== n.name && l.argCount === t - 2)
                    ? ((i.argCount = t - 2), (i.className = n.name), (f[e] = i))
                    : (Pn(f, e, r), (f[e].overloadTable[t - 2] = i)),
                  un([], c, function(i) {
                    var s = Zn(r, i, n, a, o)
                    return (
                      void 0 === f[e].overloadTable
                        ? ((s.argCount = t - 2), (f[e] = s))
                        : (f[e].overloadTable[t - 2] = s),
                      []
                    )
                  }),
                  []
                )
              })
          },
          X: function(n, e) {
            pn(n, {
              name: (e = U(e)),
              fromWireType: function(n) {
                var e = Hn[n].value
                return Un(n), e
              },
              toWireType: function(n, e) {
                return ne(e)
              },
              argPackAdvance: 8,
              readValueFromPointer: Rn,
              destructorFunction: null,
            })
          },
          B: function(n, e, t) {
            var r = Q(t)
            pn(n, {
              name: (e = U(e)),
              fromWireType: function(n) {
                return n
              },
              toWireType: function(n, e) {
                if ("number" != typeof e && "boolean" != typeof e)
                  throw new TypeError('Cannot convert "' + ee(e) + '" to ' + this.name)
                return e
              },
              argPackAdvance: 8,
              readValueFromPointer: te(e, r),
              destructorFunction: null,
            })
          },
          j: function(n, e, t, r, i) {
            ;(e = U(e)), -1 === i && (i = 4294967295)
            var a = Q(t),
              o = function(n) {
                return n
              }
            if (0 === r) {
              var s = 32 - 8 * t
              o = function(n) {
                return (n << s) >>> s
              }
            }
            var c = -1 != e.indexOf("unsigned")
            pn(n, {
              name: e,
              fromWireType: o,
              toWireType: function(n, t) {
                if ("number" != typeof t && "boolean" != typeof t)
                  throw new TypeError('Cannot convert "' + ee(t) + '" to ' + this.name)
                if (t < r || t > i)
                  throw new TypeError(
                    'Passing a number "' +
                      ee(t) +
                      '" from JS side to C/C++ side to an argument of type "' +
                      e +
                      '", which is outside the valid range [' +
                      r +
                      ", " +
                      i +
                      "]!"
                  )
                return c ? t >>> 0 : 0 | t
              },
              argPackAdvance: 8,
              readValueFromPointer: re(e, a, 0 !== r),
              destructorFunction: null,
            })
          },
          h: function(n, e, t) {
            var r = [
              Int8Array,
              Uint8Array,
              Int16Array,
              Uint16Array,
              Int32Array,
              Uint32Array,
              Float32Array,
              Float64Array,
            ][e]
            function i(n) {
              return new r(P.buffer, P[1 + (n >>= 2)], P[n])
            }
            pn(
              n,
              { name: (t = U(t)), fromWireType: i, argPackAdvance: 8, readValueFromPointer: i },
              { ignoreDuplicateRegistrations: !0 }
            )
          },
          A: function(n, e) {
            var t = "std::string" === (e = U(e))
            pn(n, {
              name: e,
              fromWireType: function(n) {
                var e,
                  r = P[n >> 2]
                if (t) {
                  var i = b[n + 4 + r],
                    a = 0
                  0 != i && ((a = i), (b[n + 4 + r] = 0))
                  for (var o = n + 4, s = 0; s <= r; ++s) {
                    var c = n + 4 + s
                    if (0 == b[c]) {
                      var f = j(o)
                      void 0 === e ? (e = f) : ((e += String.fromCharCode(0)), (e += f)), (o = c + 1)
                    }
                  }
                  0 != a && (b[n + 4 + r] = a)
                } else {
                  var l = new Array(r)
                  for (s = 0; s < r; ++s) l[s] = String.fromCharCode(b[n + 4 + s])
                  e = l.join("")
                }
                return fe(n), e
              },
              toWireType: function(n, e) {
                e instanceof ArrayBuffer && (e = new Uint8Array(e))
                var r = "string" == typeof e
                r ||
                  e instanceof Uint8Array ||
                  e instanceof Uint8ClampedArray ||
                  e instanceof Int8Array ||
                  cn("Cannot pass non-string to std::string")
                var i = (t && r
                    ? function() {
                        return (function(n) {
                          for (var e = 0, t = 0; t < n.length; ++t) {
                            var r = n.charCodeAt(t)
                            r >= 55296 && r <= 57343 && (r = (65536 + ((1023 & r) << 10)) | (1023 & n.charCodeAt(++t))),
                              r <= 127 ? ++e : (e += r <= 2047 ? 2 : r <= 65535 ? 3 : 4)
                          }
                          return e
                        })(e)
                      }
                    : function() {
                        return e.length
                      })(),
                  a = le(4 + i + 1)
                if (((P[a >> 2] = i), t && r))
                  !(function(n, e, t, r) {
                    if (!(r > 0)) return 0
                    for (var i = t + r - 1, a = 0; a < n.length; ++a) {
                      var o = n.charCodeAt(a)
                      if (
                        (o >= 55296 && o <= 57343 && (o = (65536 + ((1023 & o) << 10)) | (1023 & n.charCodeAt(++a))),
                        o <= 127)
                      ) {
                        if (t >= i) break
                        e[t++] = o
                      } else if (o <= 2047) {
                        if (t + 1 >= i) break
                        ;(e[t++] = 192 | (o >> 6)), (e[t++] = 128 | (63 & o))
                      } else if (o <= 65535) {
                        if (t + 2 >= i) break
                        ;(e[t++] = 224 | (o >> 12)), (e[t++] = 128 | ((o >> 6) & 63)), (e[t++] = 128 | (63 & o))
                      } else {
                        if (t + 3 >= i) break
                        ;(e[t++] = 240 | (o >> 18)),
                          (e[t++] = 128 | ((o >> 12) & 63)),
                          (e[t++] = 128 | ((o >> 6) & 63)),
                          (e[t++] = 128 | (63 & o))
                      }
                    }
                    e[t] = 0
                  })(e, b, a + 4, i + 1)
                else if (r)
                  for (var o = 0; o < i; ++o) {
                    var s = e.charCodeAt(o)
                    s > 255 && (fe(a), cn("String has UTF-16 code units that do not fit in 8 bits")), (b[a + 4 + o] = s)
                  }
                else for (o = 0; o < i; ++o) b[a + 4 + o] = e[o]
                return null !== n && n.push(fe, a), a
              },
              argPackAdvance: 8,
              readValueFromPointer: Rn,
              destructorFunction: function(n) {
                fe(n)
              },
            })
          },
          W: function(n, e, t) {
            var r, i
            ;(t = U(t)),
              2 === e
                ? ((r = function() {
                    return C
                  }),
                  (i = 1))
                : 4 === e &&
                  ((r = function() {
                    return P
                  }),
                  (i = 2)),
              pn(n, {
                name: t,
                fromWireType: function(n) {
                  for (var e = r(), t = P[n >> 2], a = new Array(t), o = (n + 4) >> i, s = 0; s < t; ++s)
                    a[s] = String.fromCharCode(e[o + s])
                  return fe(n), a.join("")
                },
                toWireType: function(n, t) {
                  var a = r(),
                    o = t.length,
                    s = le(4 + o * e)
                  P[s >> 2] = o
                  for (var c = (s + 4) >> i, f = 0; f < o; ++f) a[c + f] = t.charCodeAt(f)
                  return null !== n && n.push(fe, s), s
                },
                argPackAdvance: 8,
                readValueFromPointer: Rn,
                destructorFunction: function(n) {
                  fe(n)
                },
              })
          },
          V: function(n, e) {
            pn(n, {
              isVoid: !0,
              name: (e = U(e)),
              argPackAdvance: 0,
              fromWireType: function() {},
              toWireType: function(n, e) {},
            })
          },
          U: function(n, e, t, r) {
            n = (function(n) {
              return n || cn("Cannot use deleted val. handle = " + n), Hn[n].value
            })(n)
            for (
              var i = (function(n, e, t) {
                  for (var r = new Array(n), i = 0; i < n; ++i) r[i] = ie($[(e >> 2) + i], "parameter " + i)
                  return r
                })(e, t),
                a = new Array(e),
                o = 0;
              o < e;
              ++o
            ) {
              var s = i[o]
              ;(a[o] = s.readValueFromPointer(r)), (r += s.argPackAdvance)
            }
            return ne(n.apply(void 0, a))
          },
          T: Un,
          z: function(n) {
            n > 4 && (Hn[n].refcount += 1)
          },
          y: function(n, e) {
            return ne((n = ie(n, "_emval_take_value")).readValueFromPointer(e))
          },
          s: function() {
            e.abort()
          },
          R: ae,
          Q: function(n, e, t) {
            b.set(b.subarray(e, e + t), n)
          },
          P: function(n) {
            var e = ae()
            if (n > 2147418112) return !1
            for (var t = Math.max(e, 16777216); t < n; )
              t = t <= 536870912 ? R(2 * t, 65536) : Math.min(R((3 * t + 2147483648) / 4, 65536), 2147418112)
            var r = (function(n) {
              n = R(n, 65536)
              var e = g.byteLength
              try {
                return -1 !== v.grow((n - e) / 65536) ? (g = v.buffer) : null
              } catch (n) {
                return null
              }
            })(t)
            return !(!r || r.byteLength != t || (S(), 0))
          },
          k: function(n) {
            var e = Date.now()
            return ($[n >> 2] = (e / 1e3) | 0), ($[(n + 4) >> 2] = ((e % 1e3) * 1e3) | 0), 0
          },
          q: function(n) {
            return Math.log(n) / Math.LN10
          },
          O: function() {
            Oe("trap!")
          },
          d: function(n, e) {
            throw (ue(n, e || 1), "longjmp")
          },
          p: function() {
            return 0
          },
          n: function() {
            return 0
          },
          o: function() {
            return 0
          },
          m: function() {
            return 0
          },
          N: function() {
            return 11
          },
          M: function() {},
          L: function(n) {
            var e = (Date.now() / 1e3) | 0
            return n && ($[n >> 2] = e), e
          },
          K: function(n) {
            Oe("OOM")
          },
          a: 77104,
        },
        se = e.asm({}, oe, g)
      e.asm = se
      var ce = (e.___getTypeName = function() {
          return e.asm.fa.apply(null, arguments)
        }),
        fe = (e._free = function() {
          return e.asm.ga.apply(null, arguments)
        }),
        le = (e._malloc = function() {
          return e.asm.ha.apply(null, arguments)
        }),
        ue = (e._setThrew = function() {
          return e.asm.ia.apply(null, arguments)
        }),
        pe = (e.globalCtors = function() {
          return e.asm.Ia.apply(null, arguments)
        }),
        ve = (e.stackRestore = function() {
          return e.asm.Ja.apply(null, arguments)
        }),
        he = (e.stackSave = function() {
          return e.asm.Ka.apply(null, arguments)
        }),
        me = (e.dynCall_dd = function() {
          return e.asm.ja.apply(null, arguments)
        }),
        ye = (e.dynCall_i = function() {
          return e.asm.ka.apply(null, arguments)
        }),
        de = (e.dynCall_ii = function() {
          return e.asm.la.apply(null, arguments)
        }),
        ge = (e.dynCall_iii = function() {
          return e.asm.ma.apply(null, arguments)
        }),
        we =
          ((e.dynCall_iiii = function() {
            return e.asm.na.apply(null, arguments)
          }),
          (e.dynCall_iiiii = function() {
            return e.asm.oa.apply(null, arguments)
          }),
          (e.dynCall_iiiiii = function() {
            return e.asm.pa.apply(null, arguments)
          }),
          (e.dynCall_iiiiiiii = function() {
            return e.asm.qa.apply(null, arguments)
          })),
        be =
          ((e.dynCall_iiiiiiiii = function() {
            return e.asm.ra.apply(null, arguments)
          }),
          (e.dynCall_iiiiiiiiii = function() {
            return e.asm.sa.apply(null, arguments)
          }),
          (e.dynCall_iiiiiiiiiiiiiiiiii = function() {
            return e.asm.ta.apply(null, arguments)
          }),
          (e.dynCall_iiiijj = function() {
            return e.asm.ua.apply(null, arguments)
          })),
        Te =
          ((e.dynCall_iiijiii = function() {
            return e.asm.va.apply(null, arguments)
          }),
          (e.dynCall_iij = function() {
            return e.asm.wa.apply(null, arguments)
          }),
          (e.dynCall_ji = function() {
            return e.asm.xa.apply(null, arguments)
          }),
          (e.dynCall_v = function() {
            return e.asm.ya.apply(null, arguments)
          }),
          (e.dynCall_vi = function() {
            return e.asm.za.apply(null, arguments)
          })),
        Ce = (e.dynCall_vii = function() {
          return e.asm.Aa.apply(null, arguments)
        }),
        $e = (e.dynCall_viii = function() {
          return e.asm.Ba.apply(null, arguments)
        }),
        Pe = (e.dynCall_viiii = function() {
          return e.asm.Ca.apply(null, arguments)
        }),
        _e = (e.dynCall_viiiii = function() {
          return e.asm.Da.apply(null, arguments)
        })
      function Fe(n) {
        ;(this.name = "ExitStatus"), (this.message = "Program terminated with exit(" + n + ")"), (this.status = n)
      }
      function Ee(n) {
        function t() {
          e.calledRun ||
            ((e.calledRun = !0),
            y ||
              (M || ((M = !0), D(N)),
              D(L),
              e.onRuntimeInitialized && e.onRuntimeInitialized(),
              (function() {
                if (e.postRun)
                  for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length; )
                    (n = e.postRun.shift()), q.unshift(n)
                var n
                D(q)
              })()))
        }
        ;(n = n || e.arguments),
          V > 0 ||
            ((function() {
              if (e.preRun)
                for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length; )
                  (n = e.preRun.shift()), k.unshift(n)
              var n
              D(k)
            })(),
            V > 0 ||
              e.calledRun ||
              (e.setStatus
                ? (e.setStatus("Running..."),
                  setTimeout(function() {
                    setTimeout(function() {
                      e.setStatus("")
                    }, 1),
                      t()
                  }, 1))
                : t()))
      }
      function Oe(n) {
        throw (e.onAbort && e.onAbort(n),
        void 0 !== n ? (u(n), p(n), (n = JSON.stringify(n))) : (n = ""),
        (y = !0),
        "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.")
      }
      if (
        ((e.dynCall_viiiiii = function() {
          return e.asm.Ea.apply(null, arguments)
        }),
        (e.dynCall_viiiiiii = function() {
          return e.asm.Fa.apply(null, arguments)
        }),
        (e.dynCall_viiiiiiiiiii = function() {
          return e.asm.Ga.apply(null, arguments)
        }),
        (e.dynCall_vijj = function() {
          return e.asm.Ha.apply(null, arguments)
        }),
        (e.asm = se),
        (e.then = function(n) {
          if (e.calledRun) n(e)
          else {
            var t = e.onRuntimeInitialized
            e.onRuntimeInitialized = function() {
              t && t(), n(e)
            }
          }
          return e
        }),
        ((Fe.prototype = new Error()).constructor = Fe),
        (B = function n() {
          e.calledRun || Ee(), e.calledRun || (B = n)
        }),
        (e.run = Ee),
        (e.abort = Oe),
        e.preInit)
      )
        for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); e.preInit.length > 0; ) e.preInit.pop()()
      return (e.noExitRuntime = !0), Ee(), e
    }),
  i = { width: 300, height: 150, timebaseNum: 1, timebaseDen: 30, bitrate: 200, realtime: !1 }
try {
  ;(e = require("worker_threads")), (t = e.parentPort)
} catch (n) {
  t = self
}
function a(n) {
  return new Promise(function(e) {
    return "once" in n
      ? n.once("message", e)
      : n.addEventListener(
          "message",
          function(n) {
            return e(n.data)
          },
          { once: !0 }
        )
  })
}
!(function() {
  try {
    Promise.resolve(a(t)).then(function(n) {
      return Promise.resolve(
        ((e = r),
        (o = n),
        new Promise(function(n) {
          var t = e({
            noInitialRun: !0,
            locateFile: function(n) {
              return n.endsWith(".wasm") ? o : n
            },
            onRuntimeInitialized: function() {
              delete t.then, n(t)
            },
          })
        }))
      ).then(function(n) {
        return (
          t.postMessage("READY"),
          Promise.resolve(a(t)).then(function(e) {
            var r = Object.assign({}, i, e)
            "kLive" in r || (r.kLive = r.realtime)
            var a = new n.WebmEncoder(
              r.timebaseNum,
              r.timebaseDen,
              r.width,
              r.height,
              r.bitrate,
              r.realtime,
              r.kLive,
              function(n) {
                var e = new Uint8Array(n)
                t.postMessage(e.buffer, [e.buffer])
              }
            )
            !(function(n, e) {
              if ("on" in n) return n.on("message", e)
              n.addEventListener("message", function(n) {
                return e(n.data)
              })
            })(t, function(n) {
              if (!n) return a.finalize(), t.postMessage(null), void a.delete()
              a.addRGBAFrame(n)
            })
          })
        )
      })
      var e, o
    })
  } catch (n) {
    return Promise.reject(n)
  }
})()
//# sourceMappingURL=webm-worker.js.map