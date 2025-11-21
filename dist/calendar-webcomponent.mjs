import { jsx as oS } from "react/jsx-runtime";
import D2 from "react";
import O2 from "react-dom";
function FT(L) {
  return L && L.__esModule && Object.prototype.hasOwnProperty.call(L, "default") ? L.default : L;
}
var _g = { exports: {} }, np = {}, Hg = { exports: {} }, cS = {};
var S2;
function kT() {
  return S2 || (S2 = 1, (function(L) {
    function zl(O, Q) {
      var V = O.length;
      O.push(Q);
      t: for (; 0 < V; ) {
        var at = V - 1 >>> 1, dt = O[at];
        if (0 < Il(dt, Q))
          O[at] = Q, O[V] = dt, V = at;
        else break t;
      }
    }
    function ml(O) {
      return O.length === 0 ? null : O[0];
    }
    function N(O) {
      if (O.length === 0) return null;
      var Q = O[0], V = O.pop();
      if (V !== Q) {
        O[0] = V;
        t: for (var at = 0, dt = O.length, xe = dt >>> 1; at < xe; ) {
          var Wt = 2 * (at + 1) - 1, Ut = O[Wt], zt = Wt + 1, pl = O[zt];
          if (0 > Il(Ut, V))
            zt < dt && 0 > Il(pl, Ut) ? (O[at] = pl, O[zt] = V, at = zt) : (O[at] = Ut, O[Wt] = V, at = Wt);
          else if (zt < dt && 0 > Il(pl, V))
            O[at] = pl, O[zt] = V, at = zt;
          else break t;
        }
      }
      return Q;
    }
    function Il(O, Q) {
      var V = O.sortIndex - Q.sortIndex;
      return V !== 0 ? V : O.id - Q.id;
    }
    if (L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ya = performance;
      L.unstable_now = function() {
        return ya.now();
      };
    } else {
      var an = Date, K = an.now();
      L.unstable_now = function() {
        return an.now() - K;
      };
    }
    var yl = [], Pl = [], Fc = 1, it = null, Gt = 3, ke = !1, Ye = !1, ta = !1, Re = !1, ae = typeof setTimeout == "function" ? setTimeout : null, xn = typeof clearTimeout == "function" ? clearTimeout : null, Ve = typeof setImmediate < "u" ? setImmediate : null;
    function Bl(O) {
      for (var Q = ml(Pl); Q !== null; ) {
        if (Q.callback === null) N(Pl);
        else if (Q.startTime <= O)
          N(Pl), Q.sortIndex = Q.expirationTime, zl(yl, Q);
        else break;
        Q = ml(Pl);
      }
    }
    function nn(O) {
      if (ta = !1, Bl(O), !Ye)
        if (ml(yl) !== null)
          Ye = !0, ea || (ea = !0, Nt());
        else {
          var Q = ml(Pl);
          Q !== null && na(nn, Q.startTime - O);
        }
    }
    var ea = !1, Ie = -1, Bt = 5, la = -1;
    function I() {
      return Re ? !0 : !(L.unstable_now() - la < Bt);
    }
    function Ze() {
      if (Re = !1, ea) {
        var O = L.unstable_now();
        la = O;
        var Q = !0;
        try {
          t: {
            Ye = !1, ta && (ta = !1, xn(Ie), Ie = -1), ke = !0;
            var V = Gt;
            try {
              e: {
                for (Bl(O), it = ml(yl); it !== null && !(it.expirationTime > O && I()); ) {
                  var at = it.callback;
                  if (typeof at == "function") {
                    it.callback = null, Gt = it.priorityLevel;
                    var dt = at(
                      it.expirationTime <= O
                    );
                    if (O = L.unstable_now(), typeof dt == "function") {
                      it.callback = dt, Bl(O), Q = !0;
                      break e;
                    }
                    it === ml(yl) && N(yl), Bl(O);
                  } else N(yl);
                  it = ml(yl);
                }
                if (it !== null) Q = !0;
                else {
                  var xe = ml(Pl);
                  xe !== null && na(
                    nn,
                    xe.startTime - O
                  ), Q = !1;
                }
              }
              break t;
            } finally {
              it = null, Gt = V, ke = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? Nt() : ea = !1;
        }
      }
    }
    var Nt;
    if (typeof Ve == "function")
      Nt = function() {
        Ve(Ze);
      };
    else if (typeof MessageChannel < "u") {
      var Rt = new MessageChannel(), aa = Rt.port2;
      Rt.port1.onmessage = Ze, Nt = function() {
        aa.postMessage(null);
      };
    } else
      Nt = function() {
        ae(Ze, 0);
      };
    function na(O, Q) {
      Ie = ae(function() {
        O(L.unstable_now());
      }, Q);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, L.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Bt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return Gt;
    }, L.unstable_next = function(O) {
      switch (Gt) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = Gt;
      }
      var V = Gt;
      Gt = Q;
      try {
        return O();
      } finally {
        Gt = V;
      }
    }, L.unstable_requestPaint = function() {
      Re = !0;
    }, L.unstable_runWithPriority = function(O, Q) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var V = Gt;
      Gt = O;
      try {
        return Q();
      } finally {
        Gt = V;
      }
    }, L.unstable_scheduleCallback = function(O, Q, V) {
      var at = L.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? at + V : at) : V = at, O) {
        case 1:
          var dt = -1;
          break;
        case 2:
          dt = 250;
          break;
        case 5:
          dt = 1073741823;
          break;
        case 4:
          dt = 1e4;
          break;
        default:
          dt = 5e3;
      }
      return dt = V + dt, O = {
        id: Fc++,
        callback: Q,
        priorityLevel: O,
        startTime: V,
        expirationTime: dt,
        sortIndex: -1
      }, V > at ? (O.sortIndex = V, zl(Pl, O), ml(yl) === null && O === ml(Pl) && (ta ? (xn(Ie), Ie = -1) : ta = !0, na(nn, V - at))) : (O.sortIndex = dt, zl(yl, O), Ye || ke || (Ye = !0, ea || (ea = !0, Nt()))), O;
    }, L.unstable_shouldYield = I, L.unstable_wrapCallback = function(O) {
      var Q = Gt;
      return function() {
        var V = Gt;
        Gt = Q;
        try {
          return O.apply(this, arguments);
        } finally {
          Gt = V;
        }
      };
    };
  })(cS)), cS;
}
var iS = {};
var b2;
function IT() {
  return b2 || (b2 = 1, (function(L) {
    process.env.NODE_ENV !== "production" && (function() {
      function zl() {
        if (nn = !1, la) {
          var O = L.unstable_now();
          Nt = O;
          var Q = !0;
          try {
            t: {
              Ve = !1, Bl && (Bl = !1, Ie(I), I = -1), xn = !0;
              var V = ae;
              try {
                e: {
                  for (an(O), Re = N(ke); Re !== null && !(Re.expirationTime > O && yl()); ) {
                    var at = Re.callback;
                    if (typeof at == "function") {
                      Re.callback = null, ae = Re.priorityLevel;
                      var dt = at(
                        Re.expirationTime <= O
                      );
                      if (O = L.unstable_now(), typeof dt == "function") {
                        Re.callback = dt, an(O), Q = !0;
                        break e;
                      }
                      Re === N(ke) && Il(ke), an(O);
                    } else Il(ke);
                    Re = N(ke);
                  }
                  if (Re !== null) Q = !0;
                  else {
                    var xe = N(Ye);
                    xe !== null && Pl(
                      K,
                      xe.startTime - O
                    ), Q = !1;
                  }
                }
                break t;
              } finally {
                Re = null, ae = V, xn = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? Rt() : la = !1;
          }
        }
      }
      function ml(O, Q) {
        var V = O.length;
        O.push(Q);
        t: for (; 0 < V; ) {
          var at = V - 1 >>> 1, dt = O[at];
          if (0 < ya(dt, Q))
            O[at] = Q, O[V] = dt, V = at;
          else break t;
        }
      }
      function N(O) {
        return O.length === 0 ? null : O[0];
      }
      function Il(O) {
        if (O.length === 0) return null;
        var Q = O[0], V = O.pop();
        if (V !== Q) {
          O[0] = V;
          t: for (var at = 0, dt = O.length, xe = dt >>> 1; at < xe; ) {
            var Wt = 2 * (at + 1) - 1, Ut = O[Wt], zt = Wt + 1, pl = O[zt];
            if (0 > ya(Ut, V))
              zt < dt && 0 > ya(pl, Ut) ? (O[at] = pl, O[zt] = V, at = zt) : (O[at] = Ut, O[Wt] = V, at = Wt);
            else if (zt < dt && 0 > ya(pl, V))
              O[at] = pl, O[zt] = V, at = zt;
            else break t;
          }
        }
        return Q;
      }
      function ya(O, Q) {
        var V = O.sortIndex - Q.sortIndex;
        return V !== 0 ? V : O.id - Q.id;
      }
      function an(O) {
        for (var Q = N(Ye); Q !== null; ) {
          if (Q.callback === null) Il(Ye);
          else if (Q.startTime <= O)
            Il(Ye), Q.sortIndex = Q.expirationTime, ml(ke, Q);
          else break;
          Q = N(Ye);
        }
      }
      function K(O) {
        if (Bl = !1, an(O), !Ve)
          if (N(ke) !== null)
            Ve = !0, la || (la = !0, Rt());
          else {
            var Q = N(Ye);
            Q !== null && Pl(
              K,
              Q.startTime - O
            );
          }
      }
      function yl() {
        return nn ? !0 : !(L.unstable_now() - Nt < Ze);
      }
      function Pl(O, Q) {
        I = ea(function() {
          O(L.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Fc = performance;
        L.unstable_now = function() {
          return Fc.now();
        };
      } else {
        var it = Date, Gt = it.now();
        L.unstable_now = function() {
          return it.now() - Gt;
        };
      }
      var ke = [], Ye = [], ta = 1, Re = null, ae = 3, xn = !1, Ve = !1, Bl = !1, nn = !1, ea = typeof setTimeout == "function" ? setTimeout : null, Ie = typeof clearTimeout == "function" ? clearTimeout : null, Bt = typeof setImmediate < "u" ? setImmediate : null, la = !1, I = -1, Ze = 5, Nt = -1;
      if (typeof Bt == "function")
        var Rt = function() {
          Bt(zl);
        };
      else if (typeof MessageChannel < "u") {
        var aa = new MessageChannel(), na = aa.port2;
        aa.port1.onmessage = zl, Rt = function() {
          na.postMessage(null);
        };
      } else
        Rt = function() {
          ea(zl, 0);
        };
      L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, L.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ze = 0 < O ? Math.floor(1e3 / O) : 5;
      }, L.unstable_getCurrentPriorityLevel = function() {
        return ae;
      }, L.unstable_next = function(O) {
        switch (ae) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = ae;
        }
        var V = ae;
        ae = Q;
        try {
          return O();
        } finally {
          ae = V;
        }
      }, L.unstable_requestPaint = function() {
        nn = !0;
      }, L.unstable_runWithPriority = function(O, Q) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var V = ae;
        ae = O;
        try {
          return Q();
        } finally {
          ae = V;
        }
      }, L.unstable_scheduleCallback = function(O, Q, V) {
        var at = L.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? at + V : at) : V = at, O) {
          case 1:
            var dt = -1;
            break;
          case 2:
            dt = 250;
            break;
          case 5:
            dt = 1073741823;
            break;
          case 4:
            dt = 1e4;
            break;
          default:
            dt = 5e3;
        }
        return dt = V + dt, O = {
          id: ta++,
          callback: Q,
          priorityLevel: O,
          startTime: V,
          expirationTime: dt,
          sortIndex: -1
        }, V > at ? (O.sortIndex = V, ml(Ye, O), N(ke) === null && O === N(Ye) && (Bl ? (Ie(I), I = -1) : Bl = !0, Pl(K, V - at))) : (O.sortIndex = dt, ml(ke, O), Ve || xn || (Ve = !0, la || (la = !0, Rt()))), O;
      }, L.unstable_shouldYield = yl, L.unstable_wrapCallback = function(O) {
        var Q = ae;
        return function() {
          var V = ae;
          ae = Q;
          try {
            return O.apply(this, arguments);
          } finally {
            ae = V;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(iS)), iS;
}
var T2;
function M2() {
  return T2 || (T2 = 1, process.env.NODE_ENV === "production" ? Hg.exports = kT() : Hg.exports = IT()), Hg.exports;
}
var E2;
function PT() {
  if (E2) return np;
  E2 = 1;
  var L = M2(), zl = D2, ml = O2;
  function N(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Il(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ya(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function an(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function K(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function yl(l) {
    if (ya(l) !== l)
      throw Error(N(188));
  }
  function Pl(l) {
    var n = l.alternate;
    if (!n) {
      if (n = ya(l), n === null) throw Error(N(188));
      return n !== l ? null : l;
    }
    for (var u = l, i = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (i = s.return, i !== null) {
          u = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return yl(s), l;
          if (r === i) return yl(s), n;
          r = r.sibling;
        }
        throw Error(N(188));
      }
      if (u.return !== i.return) u = s, i = r;
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === u) {
            m = !0, u = s, i = r;
            break;
          }
          if (v === i) {
            m = !0, i = s, u = r;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = r.child; v; ) {
            if (v === u) {
              m = !0, u = r, i = s;
              break;
            }
            if (v === i) {
              m = !0, i = r, u = s;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(N(189));
        }
      }
      if (u.alternate !== i) throw Error(N(190));
    }
    if (u.tag !== 3) throw Error(N(188));
    return u.stateNode.current === u ? l : n;
  }
  function Fc(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Fc(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var it = Object.assign, Gt = Symbol.for("react.element"), ke = Symbol.for("react.transitional.element"), Ye = Symbol.for("react.portal"), ta = Symbol.for("react.fragment"), Re = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), xn = Symbol.for("react.consumer"), Ve = Symbol.for("react.context"), Bl = Symbol.for("react.forward_ref"), nn = Symbol.for("react.suspense"), ea = Symbol.for("react.suspense_list"), Ie = Symbol.for("react.memo"), Bt = Symbol.for("react.lazy"), la = Symbol.for("react.activity"), I = Symbol.for("react.memo_cache_sentinel"), Ze = Symbol.iterator;
  function Nt(l) {
    return l === null || typeof l != "object" ? null : (l = Ze && l[Ze] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Rt = Symbol.for("react.client.reference");
  function aa(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Rt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ta:
        return "Fragment";
      case ae:
        return "Profiler";
      case Re:
        return "StrictMode";
      case nn:
        return "Suspense";
      case ea:
        return "SuspenseList";
      case la:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ye:
          return "Portal";
        case Ve:
          return l.displayName || "Context";
        case xn:
          return (l._context.displayName || "Context") + ".Consumer";
        case Bl:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ie:
          return n = l.displayName || null, n !== null ? n : aa(l.type) || "Memo";
        case Bt:
          n = l._payload, l = l._init;
          try {
            return aa(l(n));
          } catch {
          }
      }
    return null;
  }
  var na = Array.isArray, O = zl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = ml.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, at = [], dt = -1;
  function xe(l) {
    return { current: l };
  }
  function Wt(l) {
    0 > dt || (l.current = at[dt], at[dt] = null, dt--);
  }
  function Ut(l, n) {
    dt++, at[dt] = l.current, l.current = n;
  }
  var zt = xe(null), pl = xe(null), ic = xe(null), Zf = xe(null);
  function Lf(l, n) {
    switch (Ut(ic, n), Ut(pl, l), Ut(zt, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Ev(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Ev(n), l = Py(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Wt(zt), Ut(zt, l);
  }
  function Uu() {
    Wt(zt), Wt(pl), Wt(ic);
  }
  function am(l) {
    l.memoizedState !== null && Ut(Zf, l);
    var n = zt.current, u = Py(n, l.type);
    n !== u && (Ut(pl, l), Ut(zt, u));
  }
  function $(l) {
    pl.current === l && (Wt(zt), Wt(pl)), Zf.current === l && (Wt(Zf), cr._currentValue = V);
  }
  var Jf, wf;
  function Gn(l) {
    if (Jf === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Jf = n && n[1] || "", wf = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Jf + l + wf;
  }
  var kc = !1;
  function Ft(l, n) {
    if (!l || kc) return "";
    kc = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var j = function() {
                throw Error();
              };
              if (Object.defineProperty(j.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(j, []);
                } catch (q) {
                  var C = q;
                }
                Reflect.construct(l, [], j);
              } else {
                try {
                  j.call();
                } catch (q) {
                  C = q;
                }
                l.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (q) {
                C = q;
              }
              (j = l()) && typeof j.catch == "function" && j.catch(function() {
              });
            }
          } catch (q) {
            if (q && C && typeof q.stack == "string")
              return [q.stack, C.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = i.DetermineComponentFrameRoot(), m = r[0], v = r[1];
      if (m && v) {
        var T = m.split(`
`), U = v.split(`
`);
        for (s = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < U.length && !U[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === T.length || s === U.length)
          for (i = T.length - 1, s = U.length - 1; 1 <= i && 0 <= s && T[i] !== U[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (T[i] !== U[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || T[i] !== U[s]) {
                  var Y = `
` + T[i].replace(" at new ", " at ");
                  return l.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", l.displayName)), Y;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      kc = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Gn(u) : "";
  }
  function nm(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Gn(l.type);
      case 16:
        return Gn("Lazy");
      case 13:
        return l.child !== n && n !== null ? Gn("Suspense Fallback") : Gn("Suspense");
      case 19:
        return Gn("SuspenseList");
      case 0:
      case 15:
        return Ft(l.type, !1);
      case 11:
        return Ft(l.type.render, !1);
      case 1:
        return Ft(l.type, !0);
      case 31:
        return Gn("Activity");
      default:
        return "";
    }
  }
  function Br(l) {
    try {
      var n = "", u = null;
      do
        n += nm(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  var um = Object.prototype.hasOwnProperty, ne = L.unstable_scheduleCallback, cm = L.unstable_cancelCallback, Ic = L.unstable_shouldYield, qr = L.unstable_requestPaint, vl = L.unstable_now, Bg = L.unstable_getCurrentPriorityLevel, Nr = L.unstable_ImmediatePriority, Yr = L.unstable_UserBlockingPriority, oc = L.unstable_NormalPriority, qg = L.unstable_LowPriority, im = L.unstable_IdlePriority, cp = L.log, ip = L.unstable_setDisableYieldValue, Pc = null, ua = null;
  function Cu(l) {
    if (typeof cp == "function" && ip(l), ua && typeof ua.setStrictMode == "function")
      try {
        ua.setStrictMode(Pc, l);
      } catch {
      }
  }
  var ql = Math.clz32 ? Math.clz32 : om, op = Math.log, fp = Math.LN2;
  function om(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (op(l) / fp | 0) | 0;
  }
  var _u = 256, un = 262144, fc = 4194304;
  function Xa(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ue(l, n, u) {
    var i = l.pendingLanes;
    if (i === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = i & 134217727;
    return v !== 0 ? (i = v & ~r, i !== 0 ? s = Xa(i) : (m &= v, m !== 0 ? s = Xa(m) : u || (u = v & ~l, u !== 0 && (s = Xa(u))))) : (v = i & ~r, v !== 0 ? s = Xa(v) : m !== 0 ? s = Xa(m) : u || (u = i & ~l, u !== 0 && (s = Xa(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function cn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function fo(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ti() {
    var l = fc;
    return fc <<= 1, (fc & 62914560) === 0 && (fc = 4194304), l;
  }
  function Kf(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function so(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function xr(l, n, u, i, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, T = l.expirationTimes, U = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var Y = 31 - ql(u), j = 1 << Y;
      v[Y] = 0, T[Y] = -1;
      var C = U[Y];
      if (C !== null)
        for (U[Y] = null, Y = 0; Y < C.length; Y++) {
          var q = C[Y];
          q !== null && (q.lane &= -536870913);
        }
      u &= ~j;
    }
    i !== 0 && $f(l, i, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function $f(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var i = 31 - ql(n);
    l.entangledLanes |= n, l.entanglements[i] = l.entanglements[i] | 1073741824 | u & 261930;
  }
  function jn(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var i = 31 - ql(u), s = 1 << i;
      s & n | l[i] & n && (l[i] |= n), u &= ~s;
    }
  }
  function pa(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Gr(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Gr(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function fm(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function jr() {
    var l = Q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : ir(l.type));
  }
  function sm(l, n) {
    var u = Q.p;
    try {
      return Q.p = l, n();
    } finally {
      Q.p = u;
    }
  }
  var on = Math.random().toString(36).slice(2), kt = "__reactFiber$" + on, Nl = "__reactProps$" + on, sc = "__reactContainer$" + on, Xr = "__reactEvents$" + on, rm = "__reactListeners$" + on, sp = "__reactHandles$" + on, dm = "__reactResources$" + on, Xn = "__reactMarker$" + on;
  function Qr(l) {
    delete l[kt], delete l[Nl], delete l[Xr], delete l[rm], delete l[sp];
  }
  function ei(l) {
    var n = l[kt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[sc] || u[kt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Un(l); l !== null; ) {
            if (u = l[kt]) return u;
            l = Un(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function li(l) {
    if (l = l[kt] || l[sc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function ro(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(N(33));
  }
  function ai(l) {
    var n = l[dm];
    return n || (n = l[dm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Lt(l) {
    l[Xn] = !0;
  }
  var ni = /* @__PURE__ */ new Set(), rc = {};
  function dc(l, n) {
    Qn(l, n), Qn(l + "Capture", n);
  }
  function Qn(l, n) {
    for (rc[l] = n, l = 0; l < n.length; l++)
      ni.add(n[l]);
  }
  var Vr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zr = {}, ho = {};
  function mo(l) {
    return um.call(ho, l) ? !0 : um.call(Zr, l) ? !1 : Vr.test(l) ? ho[l] = !0 : (Zr[l] = !0, !1);
  }
  function yo(l, n, u) {
    if (mo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function Lr(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Hu(l, n, u, i) {
    if (i === null) l.removeAttribute(u);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + i);
    }
  }
  function va(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Jr(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function hm(l, n, u) {
    var i = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var s = i.get, r = i.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function wr(l) {
    if (!l._valueTracker) {
      var n = Jr(l) ? "checked" : "value";
      l._valueTracker = hm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function mm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), i = "";
    return l && (i = Jr(l) ? l.checked ? "true" : "false" : l.value), l = i, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Wf(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Ng = /[\n"\\]/g;
  function ga(l) {
    return l.replace(
      Ng,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ff(l, n, u, i, s, r, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + va(n)) : l.value !== "" + va(n) && (l.value = "" + va(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? ui(l, m, va(n)) : u != null ? ui(l, m, va(u)) : i != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + va(v) : l.removeAttribute("name");
  }
  function kf(l, n, u, i, s, r, m, v) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        wr(l);
        return;
      }
      u = u != null ? "" + va(u) : "", n = n != null ? "" + va(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, l.checked = v ? l.checked : !!i, l.defaultChecked = !!i, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), wr(l);
  }
  function ui(l, n, u) {
    n === "number" && Wf(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function po(l, n, u, i) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && i && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + va(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, i && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function ym(l, n, u) {
    if (n != null && (n = "" + va(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + va(u) : "";
  }
  function pm(l, n, u, i) {
    if (n == null) {
      if (i != null) {
        if (u != null) throw Error(N(92));
        if (na(i)) {
          if (1 < i.length) throw Error(N(93));
          i = i[0];
        }
        u = i;
      }
      u == null && (u = ""), n = u;
    }
    u = va(n), l.defaultValue = u, i = l.textContent, i === u && i !== "" && i !== null && (l.value = i), wr(l);
  }
  function Vn(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var rp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function dp(l, n, u) {
    var i = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? i ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : i ? l.setProperty(n, u) : typeof u != "number" || u === 0 || rp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function hp(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(N(62));
    if (l = l.style, u != null) {
      for (var i in u)
        !u.hasOwnProperty(i) || n != null && n.hasOwnProperty(i) || (i.indexOf("--") === 0 ? l.setProperty(i, "") : i === "float" ? l.cssFloat = "" : l[i] = "");
      for (var s in n)
        i = n[s], n.hasOwnProperty(s) && u[s] !== i && dp(l, s, i);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && dp(l, r, n[r]);
  }
  function vm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), If = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qa(l) {
    return If.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function fn() {
  }
  var Kr = null;
  function $r(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Zn = null, ci = null;
  function Pf(l) {
    var n = li(l);
    if (n && (l = n.stateNode)) {
      var u = l[Nl] || null;
      t: switch (l = n.stateNode, n.type) {
        case "input":
          if (Ff(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + ga(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var i = u[n];
              if (i !== l && i.form === l.form) {
                var s = i[Nl] || null;
                if (!s) throw Error(N(90));
                Ff(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              i = u[n], i.form === l.form && mm(i);
          }
          break t;
        case "textarea":
          ym(l, u.value, u.defaultValue);
          break t;
        case "select":
          n = u.value, n != null && po(l, !!u.multiple, n, !1);
      }
    }
  }
  var vo = !1;
  function gm(l, n, u) {
    if (vo) return l(n, u);
    vo = !0;
    try {
      var i = l(n);
      return i;
    } finally {
      if (vo = !1, (Zn !== null || ci !== null) && (Po(), Zn && (n = Zn, l = ci, ci = Zn = null, Pf(n), l)))
        for (n = 0; n < l.length; n++) Pf(l[n]);
    }
  }
  function Pe(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var i = u[Nl] || null;
    if (i === null) return null;
    u = i[n];
    t: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (l = l.type, i = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !i;
        break t;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        N(231, n, typeof u)
      );
    return u;
  }
  var Bu = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ts = !1;
  if (Bu)
    try {
      var go = {};
      Object.defineProperty(go, "passive", {
        get: function() {
          ts = !0;
        }
      }), window.addEventListener("test", go, go), window.removeEventListener("test", go, go);
    } catch {
      ts = !1;
    }
  var qu = null, Sm = null, Wr = null;
  function bm() {
    if (Wr) return Wr;
    var l, n = Sm, u = n.length, i, s = "value" in qu ? qu.value : qu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (i = 1; i <= m && n[u - i] === s[r - i]; i++) ;
    return Wr = s.slice(l, 1 < i ? 1 - i : void 0);
  }
  function Fr(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function es() {
    return !0;
  }
  function mp() {
    return !1;
  }
  function gl(l) {
    function n(u, i, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(r) : r[v]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? es : mp, this.isPropagationStopped = mp, this;
    }
    return it(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = es);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = es);
      },
      persist: function() {
      },
      isPersistent: es
    }), n;
  }
  var hc = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ls = gl(hc), So = it({}, hc, { view: 0, detail: 0 }), xg = gl(So), Tm, Em, as, kr = it({}, So, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Va,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== as && (as && l.type === "mousemove" ? (Tm = l.screenX - as.screenX, Em = l.screenY - as.screenY) : Em = Tm = 0, as = l), Tm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Em;
    }
  }), bo = gl(kr), yp = it({}, kr, { dataTransfer: 0 }), pp = gl(yp), vp = it({}, So, { relatedTarget: 0 }), Ir = gl(vp), Am = it({}, hc, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), gp = gl(Am), ii = it({}, hc, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), oi = gl(ii), sn = it({}, hc, { data: 0 }), Sp = gl(sn), zm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ln = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, bp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function rn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = bp[l]) ? !!n[l] : !1;
  }
  function Va() {
    return rn;
  }
  var Pr = it({}, So, {
    key: function(l) {
      if (l.key) {
        var n = zm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Fr(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Ln[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Va,
    charCode: function(l) {
      return l.type === "keypress" ? Fr(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Fr(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), td = gl(Pr), Dm = it({}, kr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), dn = gl(Dm), Gg = it({}, So, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Va
  }), Tp = gl(Gg), Ep = it({}, hc, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jg = gl(Ep), Om = it({}, kr, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Xg = gl(Om), Ap = it({}, hc, {
    newState: 0,
    oldState: 0
  }), Mm = gl(Ap), ed = [9, 13, 27, 32], To = Bu && "CompositionEvent" in window, fi = null;
  Bu && "documentMode" in document && (fi = document.documentMode);
  var Dl = Bu && "TextEvent" in window && !fi, Rm = Bu && (!To || fi && 8 < fi && 11 >= fi), ns = " ", mc = !1;
  function ld(l, n) {
    switch (l) {
      case "keyup":
        return ed.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Um(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var si = !1;
  function zp(l, n) {
    switch (l) {
      case "compositionend":
        return Um(n);
      case "keypress":
        return n.which !== 32 ? null : (mc = !0, ns);
      case "textInput":
        return l = n.data, l === ns && mc ? null : l;
      default:
        return null;
    }
  }
  function Qg(l, n) {
    if (si)
      return l === "compositionend" || !To && ld(l, n) ? (l = bm(), Wr = Sm = qu = null, si = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Rm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Cm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Jn(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Cm[l.type] : n === "textarea";
  }
  function _m(l, n, u, i) {
    Zn ? ci ? ci.push(i) : ci = [i] : Zn = i, n = tr(n, "onChange"), 0 < n.length && (u = new ls(
      "onChange",
      "change",
      null,
      u,
      i
    ), l.push({ event: u, listeners: n }));
  }
  var ri = null, yc = null;
  function di(l) {
    Sv(l, 0);
  }
  function Eo(l) {
    var n = ro(l);
    if (mm(n)) return l;
  }
  function Hm(l, n) {
    if (l === "change") return n;
  }
  var ad = !1;
  if (Bu) {
    var Yl;
    if (Bu) {
      var hn = "oninput" in document;
      if (!hn) {
        var Bm = document.createElement("div");
        Bm.setAttribute("oninput", "return;"), hn = typeof Bm.oninput == "function";
      }
      Yl = hn;
    } else Yl = !1;
    ad = Yl && (!document.documentMode || 9 < document.documentMode);
  }
  function nd() {
    ri && (ri.detachEvent("onpropertychange", ud), yc = ri = null);
  }
  function ud(l) {
    if (l.propertyName === "value" && Eo(yc)) {
      var n = [];
      _m(
        n,
        yc,
        l,
        $r(l)
      ), gm(di, n);
    }
  }
  function Dp(l, n, u) {
    l === "focusin" ? (nd(), ri = n, yc = u, ri.attachEvent("onpropertychange", ud)) : l === "focusout" && nd();
  }
  function Op(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Eo(yc);
  }
  function pc(l, n) {
    if (l === "click") return Eo(n);
  }
  function hi(l, n) {
    if (l === "input" || l === "change")
      return Eo(n);
  }
  function Mp(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Ol = typeof Object.is == "function" ? Object.is : Mp;
  function Za(l, n) {
    if (Ol(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), i = Object.keys(n);
    if (u.length !== i.length) return !1;
    for (i = 0; i < u.length; i++) {
      var s = u[i];
      if (!um.call(n, s) || !Ol(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function qm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Nm(l, n) {
    var u = qm(l);
    l = 0;
    for (var i; u; ) {
      if (u.nodeType === 3) {
        if (i = l + u.textContent.length, l <= n && i >= n)
          return { node: u, offset: n - l };
        l = i;
      }
      t: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break t;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = qm(u);
    }
  }
  function mi(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? mi(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function vc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Wf(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Wf(l.document);
    }
    return n;
  }
  function us(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var cs = Bu && "documentMode" in document && 11 >= document.documentMode, gc = null, Ao = null, La = null, mn = !1;
  function cd(l, n, u) {
    var i = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    mn || gc == null || gc !== Wf(i) || (i = gc, "selectionStart" in i && us(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), La && Za(La, i) || (La = i, i = tr(Ao, "onSelect"), 0 < i.length && (n = new ls(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: i }), n.target = gc)));
  }
  function Nu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var yn = {
    animationend: Nu("Animation", "AnimationEnd"),
    animationiteration: Nu("Animation", "AnimationIteration"),
    animationstart: Nu("Animation", "AnimationStart"),
    transitionrun: Nu("Transition", "TransitionRun"),
    transitionstart: Nu("Transition", "TransitionStart"),
    transitioncancel: Nu("Transition", "TransitionCancel"),
    transitionend: Nu("Transition", "TransitionEnd")
  }, zo = {}, Sc = {};
  Bu && (Sc = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
  function Qt(l) {
    if (zo[l]) return zo[l];
    if (!yn[l]) return l;
    var n = yn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Sc)
        return zo[l] = n[u];
    return l;
  }
  var is = Qt("animationend"), Ym = Qt("animationiteration"), id = Qt("animationstart"), yi = Qt("transitionrun"), os = Qt("transitionstart"), wn = Qt("transitioncancel"), Rp = Qt("transitionend"), Kn = /* @__PURE__ */ new Map(), Do = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Do.push("scrollEnd");
  function xl(l, n) {
    Kn.set(l, n), dc(n, [l]);
  }
  var pi = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, de = [], tl = 0, Ja = 0;
  function Sa() {
    for (var l = tl, n = Ja = tl = 0; n < l; ) {
      var u = de[n];
      de[n++] = null;
      var i = de[n];
      de[n++] = null;
      var s = de[n];
      de[n++] = null;
      var r = de[n];
      if (de[n++] = null, i !== null && s !== null) {
        var m = i.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), i.pending = s;
      }
      r !== 0 && od(u, s, r);
    }
  }
  function ba(l, n, u, i) {
    de[tl++] = l, de[tl++] = n, de[tl++] = u, de[tl++] = i, Ja |= i, l.lanes |= i, l = l.alternate, l !== null && (l.lanes |= i);
  }
  function wa(l, n, u, i) {
    return ba(l, n, u, i), fs(l);
  }
  function Yu(l, n) {
    return ba(l, null, null, n), fs(l);
  }
  function od(l, n, u) {
    l.lanes |= u;
    var i = l.alternate;
    i !== null && (i.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, i = r.alternate, i !== null && (i.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - ql(u), l = r.hiddenUpdates, i = l[s], i === null ? l[s] = [n] : i.push(n), n.lane = u | 536870912), r) : null;
  }
  function fs(l) {
    if (50 < Io)
      throw Io = 0, Js = null, Error(N(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Gl = {};
  function Up(l, n, u, i) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ae(l, n, u, i) {
    return new Up(l, n, u, i);
  }
  function vi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function xu(l, n) {
    var u = l.alternate;
    return u === null ? (u = Ae(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function xm(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function fd(l, n, u, i, s, r) {
    var m = 0;
    if (i = l, typeof l == "function") vi(l) && (m = 1);
    else if (typeof l == "string")
      m = c0(
        l,
        u,
        zt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      t: switch (l) {
        case la:
          return l = Ae(31, u, n, s), l.elementType = la, l.lanes = r, l;
        case ta:
          return Gu(u.children, s, r, n);
        case Re:
          m = 8, s |= 24;
          break;
        case ae:
          return l = Ae(12, u, n, s | 2), l.elementType = ae, l.lanes = r, l;
        case nn:
          return l = Ae(13, u, n, s), l.elementType = nn, l.lanes = r, l;
        case ea:
          return l = Ae(19, u, n, s), l.elementType = ea, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ve:
                m = 10;
                break t;
              case xn:
                m = 9;
                break t;
              case Bl:
                m = 11;
                break t;
              case Ie:
                m = 14;
                break t;
              case Bt:
                m = 16, i = null;
                break t;
            }
          m = 29, u = Error(
            N(130, l === null ? "null" : typeof l, "")
          ), i = null;
      }
    return n = Ae(m, u, n, s), n.elementType = l, n.type = i, n.lanes = r, n;
  }
  function Gu(l, n, u, i) {
    return l = Ae(7, l, i, n), l.lanes = u, l;
  }
  function Oo(l, n, u) {
    return l = Ae(6, l, null, n), l.lanes = u, l;
  }
  function Gm(l) {
    var n = Ae(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function sd(l, n, u) {
    return n = Ae(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var jm = /* @__PURE__ */ new WeakMap();
  function Ta(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = jm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Br(n)
      }, jm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Br(n)
    };
  }
  var Ea = [], gi = 0, ss = null, Ce = 0, ca = [], jl = 0, pn = null, ia = 1, vn = "";
  function Ka(l, n) {
    Ea[gi++] = Ce, Ea[gi++] = ss, ss = l, Ce = n;
  }
  function Xm(l, n, u) {
    ca[jl++] = ia, ca[jl++] = vn, ca[jl++] = pn, pn = l;
    var i = ia;
    l = vn;
    var s = 32 - ql(i) - 1;
    i &= ~(1 << s), u += 1;
    var r = 32 - ql(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (i & (1 << m) - 1).toString(32), i >>= m, s -= m, ia = 1 << 32 - ql(n) + s | u << s | i, vn = r + l;
    } else
      ia = 1 << r | u << s | i, vn = l;
  }
  function Mo(l) {
    l.return !== null && (Ka(l, 1), Xm(l, 1, 0));
  }
  function rd(l) {
    for (; l === ss; )
      ss = Ea[--gi], Ea[gi] = null, Ce = Ea[--gi], Ea[gi] = null;
    for (; l === pn; )
      pn = ca[--jl], ca[jl] = null, vn = ca[--jl], ca[jl] = null, ia = ca[--jl], ca[jl] = null;
  }
  function rs(l, n) {
    ca[jl++] = ia, ca[jl++] = vn, ca[jl++] = pn, ia = n.id, vn = n.overflow, pn = l;
  }
  var el = null, ue = null, Ot = !1, $n = null, Le = !1, Wn = Error(N(519));
  function $a(l) {
    var n = Error(
      N(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Uo(Ta(n, l)), Wn;
  }
  function ds(l) {
    var n = l.stateNode, u = l.type, i = l.memoizedProps;
    switch (n[kt] = l, n[Nl] = i, u) {
      case "dialog":
        Dt("cancel", n), Dt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Dt("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < nf.length; u++)
          Dt(nf[u], n);
        break;
      case "source":
        Dt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Dt("error", n), Dt("load", n);
        break;
      case "details":
        Dt("toggle", n);
        break;
      case "input":
        Dt("invalid", n), kf(
          n,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        );
        break;
      case "select":
        Dt("invalid", n);
        break;
      case "textarea":
        Dt("invalid", n), pm(n, i.value, i.defaultValue, i.children);
    }
    u = i.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || i.suppressHydrationWarning === !0 || Wy(n.textContent, u) ? (i.popover != null && (Dt("beforetoggle", n), Dt("toggle", n)), i.onScroll != null && Dt("scroll", n), i.onScrollEnd != null && Dt("scrollend", n), i.onClick != null && (n.onclick = fn), n = !0) : n = !1, n || $a(l, !0);
  }
  function Ro(l) {
    for (el = l.return; el; )
      switch (el.tag) {
        case 5:
        case 31:
        case 13:
          Le = !1;
          return;
        case 27:
        case 3:
          Le = !0;
          return;
        default:
          el = el.return;
      }
  }
  function Fn(l) {
    if (l !== el) return !1;
    if (!Ot) return Ro(l), Ot = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || cf(l.type, l.memoizedProps)), u = !u), u && ue && $a(l), Ro(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
      ue = mh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
      ue = mh(l);
    } else
      n === 27 ? (n = ue, Rn(l.type) ? (l = ar, ar = null, ue = l) : ue = n) : ue = el ? Wl(l.stateNode.nextSibling) : null;
    return !0;
  }
  function bc() {
    ue = el = null, Ot = !1;
  }
  function Qm() {
    var l = $n;
    return l !== null && (Te === null ? Te = l : Te.push.apply(
      Te,
      l
    ), $n = null), l;
  }
  function Uo(l) {
    $n === null ? $n = [l] : $n.push(l);
  }
  var dd = xe(null), ju = null, gn = null;
  function Xl(l, n, u) {
    Ut(dd, n._currentValue), n._currentValue = u;
  }
  function Sn(l) {
    l._currentValue = dd.current, Wt(dd);
  }
  function hd(l, n, u) {
    for (; l !== null; ) {
      var i = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, i !== null && (i.childLanes |= n)) : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function kn(l, n, u, i) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        t: for (; r !== null; ) {
          var v = r;
          r = s;
          for (var T = 0; T < n.length; T++)
            if (v.context === n[T]) {
              r.lanes |= u, v = r.alternate, v !== null && (v.lanes |= u), hd(
                r.return,
                u,
                l
              ), i || (m = null);
              break t;
            }
          r = v.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(N(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), hd(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function ll(l, n, u, i) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(N(387));
        if (m = m.memoizedProps, m !== null) {
          var v = s.type;
          Ol(s.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (s === Zf.current) {
        if (m = s.alternate, m === null) throw Error(N(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(cr) : l = [cr]);
      }
      s = s.return;
    }
    l !== null && kn(
      n,
      l,
      u,
      i
    ), n.flags |= 262144;
  }
  function Si(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Ol(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ft(l) {
    ju = l, gn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function X(l) {
    return hs(ju, l);
  }
  function Xu(l, n) {
    return ju === null && ft(l), hs(l, n);
  }
  function hs(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, gn === null) {
      if (l === null) throw Error(N(308));
      gn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else gn = gn.next = n;
    return u;
  }
  var ze = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, i) {
        l.push(i);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Vm = L.unstable_scheduleCallback, Zm = L.unstable_NormalPriority, _e = {
    $$typeof: Ve,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ms() {
    return {
      controller: new ze(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ys(l) {
    l.refCount--, l.refCount === 0 && Vm(Zm, function() {
      l.controller.abort();
    });
  }
  var bi = null, ps = 0, Tc = 0, Ge = null;
  function Jt(l, n) {
    if (bi === null) {
      var u = bi = [];
      ps = 0, Tc = ch(), Ge = {
        status: "pending",
        value: void 0,
        then: function(i) {
          u.push(i);
        }
      };
    }
    return ps++, n.then(vs, vs), n;
  }
  function vs() {
    if (--ps === 0 && bi !== null) {
      Ge !== null && (Ge.status = "fulfilled");
      var l = bi;
      bi = null, Tc = 0, Ge = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function gs(l, n) {
    var u = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        i.status = "fulfilled", i.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (i.status = "rejected", i.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), i;
  }
  var Qu = O.S;
  O.S = function(l, n) {
    Yy = vl(), typeof n == "object" && n !== null && typeof n.then == "function" && Jt(l, n), Qu !== null && Qu(l, n);
  };
  var Aa = xe(null);
  function za() {
    var l = Aa.current;
    return l !== null ? l : Pt.pooledCache;
  }
  function Co(l, n) {
    n === null ? Ut(Aa, Aa.current) : Ut(Aa, n.pool);
  }
  function Ti() {
    var l = za();
    return l === null ? null : { parent: _e._currentValue, pool: l };
  }
  var Ec = Error(N(460)), Ei = Error(N(474)), _o = Error(N(542)), Ai = { then: function() {
  } };
  function Lm(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Jm(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(fn, fn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, md(l), l;
      default:
        if (typeof n.status == "string") n.then(fn, fn);
        else {
          if (l = Pt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(N(482));
          l = n, l.status = "pending", l.then(
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = i;
              }
            },
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = i;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, md(l), l;
        }
        throw zc = n, Ec;
    }
  }
  function Ac(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (zc = u, Ec) : u;
    }
  }
  var zc = null;
  function wm() {
    if (zc === null) throw Error(N(459));
    var l = zc;
    return zc = null, l;
  }
  function md(l) {
    if (l === Ec || l === _o)
      throw Error(N(483));
  }
  var Dc = null, zi = 0;
  function Ss(l) {
    var n = zi;
    return zi += 1, Dc === null && (Dc = []), Jm(Dc, l, n);
  }
  function Ho(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function bs(l, n) {
    throw n.$$typeof === Gt ? Error(N(525)) : (l = Object.prototype.toString.call(n), Error(
      N(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Cp(l) {
    function n(M, z) {
      if (l) {
        var R = M.deletions;
        R === null ? (M.deletions = [z], M.flags |= 16) : R.push(z);
      }
    }
    function u(M, z) {
      if (!l) return null;
      for (; z !== null; )
        n(M, z), z = z.sibling;
      return null;
    }
    function i(M) {
      for (var z = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? z.set(M.key, M) : z.set(M.index, M), M = M.sibling;
      return z;
    }
    function s(M, z) {
      return M = xu(M, z), M.index = 0, M.sibling = null, M;
    }
    function r(M, z, R) {
      return M.index = R, l ? (R = M.alternate, R !== null ? (R = R.index, R < z ? (M.flags |= 67108866, z) : R) : (M.flags |= 67108866, z)) : (M.flags |= 1048576, z);
    }
    function m(M) {
      return l && M.alternate === null && (M.flags |= 67108866), M;
    }
    function v(M, z, R, G) {
      return z === null || z.tag !== 6 ? (z = Oo(R, M.mode, G), z.return = M, z) : (z = s(z, R), z.return = M, z);
    }
    function T(M, z, R, G) {
      var P = R.type;
      return P === ta ? Y(
        M,
        z,
        R.props.children,
        G,
        R.key
      ) : z !== null && (z.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Bt && Ac(P) === z.type) ? (z = s(z, R.props), Ho(z, R), z.return = M, z) : (z = fd(
        R.type,
        R.key,
        R.props,
        null,
        M.mode,
        G
      ), Ho(z, R), z.return = M, z);
    }
    function U(M, z, R, G) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== R.containerInfo || z.stateNode.implementation !== R.implementation ? (z = sd(R, M.mode, G), z.return = M, z) : (z = s(z, R.children || []), z.return = M, z);
    }
    function Y(M, z, R, G, P) {
      return z === null || z.tag !== 7 ? (z = Gu(
        R,
        M.mode,
        G,
        P
      ), z.return = M, z) : (z = s(z, R), z.return = M, z);
    }
    function j(M, z, R) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = Oo(
          "" + z,
          M.mode,
          R
        ), z.return = M, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ke:
            return R = fd(
              z.type,
              z.key,
              z.props,
              null,
              M.mode,
              R
            ), Ho(R, z), R.return = M, R;
          case Ye:
            return z = sd(
              z,
              M.mode,
              R
            ), z.return = M, z;
          case Bt:
            return z = Ac(z), j(M, z, R);
        }
        if (na(z) || Nt(z))
          return z = Gu(
            z,
            M.mode,
            R,
            null
          ), z.return = M, z;
        if (typeof z.then == "function")
          return j(M, Ss(z), R);
        if (z.$$typeof === Ve)
          return j(
            M,
            Xu(M, z),
            R
          );
        bs(M, z);
      }
      return null;
    }
    function C(M, z, R, G) {
      var P = z !== null ? z.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return P !== null ? null : v(M, z, "" + R, G);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case ke:
            return R.key === P ? T(M, z, R, G) : null;
          case Ye:
            return R.key === P ? U(M, z, R, G) : null;
          case Bt:
            return R = Ac(R), C(M, z, R, G);
        }
        if (na(R) || Nt(R))
          return P !== null ? null : Y(M, z, R, G, null);
        if (typeof R.then == "function")
          return C(
            M,
            z,
            Ss(R),
            G
          );
        if (R.$$typeof === Ve)
          return C(
            M,
            z,
            Xu(M, R),
            G
          );
        bs(M, R);
      }
      return null;
    }
    function q(M, z, R, G, P) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return M = M.get(R) || null, v(z, M, "" + G, P);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case ke:
            return M = M.get(
              G.key === null ? R : G.key
            ) || null, T(z, M, G, P);
          case Ye:
            return M = M.get(
              G.key === null ? R : G.key
            ) || null, U(z, M, G, P);
          case Bt:
            return G = Ac(G), q(
              M,
              z,
              R,
              G,
              P
            );
        }
        if (na(G) || Nt(G))
          return M = M.get(R) || null, Y(z, M, G, P, null);
        if (typeof G.then == "function")
          return q(
            M,
            z,
            R,
            Ss(G),
            P
          );
        if (G.$$typeof === Ve)
          return q(
            M,
            z,
            R,
            Xu(z, G),
            P
          );
        bs(z, G);
      }
      return null;
    }
    function W(M, z, R, G) {
      for (var P = null, Yt = null, F = z, ht = z = 0, pt = null; F !== null && ht < R.length; ht++) {
        F.index > ht ? (pt = F, F = null) : pt = F.sibling;
        var Xt = C(
          M,
          F,
          R[ht],
          G
        );
        if (Xt === null) {
          F === null && (F = pt);
          break;
        }
        l && F && Xt.alternate === null && n(M, F), z = r(Xt, z, ht), Yt === null ? P = Xt : Yt.sibling = Xt, Yt = Xt, F = pt;
      }
      if (ht === R.length)
        return u(M, F), Ot && Ka(M, ht), P;
      if (F === null) {
        for (; ht < R.length; ht++)
          F = j(M, R[ht], G), F !== null && (z = r(
            F,
            z,
            ht
          ), Yt === null ? P = F : Yt.sibling = F, Yt = F);
        return Ot && Ka(M, ht), P;
      }
      for (F = i(F); ht < R.length; ht++)
        pt = q(
          F,
          M,
          ht,
          R[ht],
          G
        ), pt !== null && (l && pt.alternate !== null && F.delete(
          pt.key === null ? ht : pt.key
        ), z = r(
          pt,
          z,
          ht
        ), Yt === null ? P = pt : Yt.sibling = pt, Yt = pt);
      return l && F.forEach(function(_n) {
        return n(M, _n);
      }), Ot && Ka(M, ht), P;
    }
    function lt(M, z, R, G) {
      if (R == null) throw Error(N(151));
      for (var P = null, Yt = null, F = z, ht = z = 0, pt = null, Xt = R.next(); F !== null && !Xt.done; ht++, Xt = R.next()) {
        F.index > ht ? (pt = F, F = null) : pt = F.sibling;
        var _n = C(M, F, Xt.value, G);
        if (_n === null) {
          F === null && (F = pt);
          break;
        }
        l && F && _n.alternate === null && n(M, F), z = r(_n, z, ht), Yt === null ? P = _n : Yt.sibling = _n, Yt = _n, F = pt;
      }
      if (Xt.done)
        return u(M, F), Ot && Ka(M, ht), P;
      if (F === null) {
        for (; !Xt.done; ht++, Xt = R.next())
          Xt = j(M, Xt.value, G), Xt !== null && (z = r(Xt, z, ht), Yt === null ? P = Xt : Yt.sibling = Xt, Yt = Xt);
        return Ot && Ka(M, ht), P;
      }
      for (F = i(F); !Xt.done; ht++, Xt = R.next())
        Xt = q(F, M, ht, Xt.value, G), Xt !== null && (l && Xt.alternate !== null && F.delete(Xt.key === null ? ht : Xt.key), z = r(Xt, z, ht), Yt === null ? P = Xt : Yt.sibling = Xt, Yt = Xt);
      return l && F.forEach(function(qv) {
        return n(M, qv);
      }), Ot && Ka(M, ht), P;
    }
    function ee(M, z, R, G) {
      if (typeof R == "object" && R !== null && R.type === ta && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case ke:
            t: {
              for (var P = R.key; z !== null; ) {
                if (z.key === P) {
                  if (P = R.type, P === ta) {
                    if (z.tag === 7) {
                      u(
                        M,
                        z.sibling
                      ), G = s(
                        z,
                        R.props.children
                      ), G.return = M, M = G;
                      break t;
                    }
                  } else if (z.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Bt && Ac(P) === z.type) {
                    u(
                      M,
                      z.sibling
                    ), G = s(z, R.props), Ho(G, R), G.return = M, M = G;
                    break t;
                  }
                  u(M, z);
                  break;
                } else n(M, z);
                z = z.sibling;
              }
              R.type === ta ? (G = Gu(
                R.props.children,
                M.mode,
                G,
                R.key
              ), G.return = M, M = G) : (G = fd(
                R.type,
                R.key,
                R.props,
                null,
                M.mode,
                G
              ), Ho(G, R), G.return = M, M = G);
            }
            return m(M);
          case Ye:
            t: {
              for (P = R.key; z !== null; ) {
                if (z.key === P)
                  if (z.tag === 4 && z.stateNode.containerInfo === R.containerInfo && z.stateNode.implementation === R.implementation) {
                    u(
                      M,
                      z.sibling
                    ), G = s(z, R.children || []), G.return = M, M = G;
                    break t;
                  } else {
                    u(M, z);
                    break;
                  }
                else n(M, z);
                z = z.sibling;
              }
              G = sd(R, M.mode, G), G.return = M, M = G;
            }
            return m(M);
          case Bt:
            return R = Ac(R), ee(
              M,
              z,
              R,
              G
            );
        }
        if (na(R))
          return W(
            M,
            z,
            R,
            G
          );
        if (Nt(R)) {
          if (P = Nt(R), typeof P != "function") throw Error(N(150));
          return R = P.call(R), lt(
            M,
            z,
            R,
            G
          );
        }
        if (typeof R.then == "function")
          return ee(
            M,
            z,
            Ss(R),
            G
          );
        if (R.$$typeof === Ve)
          return ee(
            M,
            z,
            Xu(M, R),
            G
          );
        bs(M, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, z !== null && z.tag === 6 ? (u(M, z.sibling), G = s(z, R), G.return = M, M = G) : (u(M, z), G = Oo(R, M.mode, G), G.return = M, M = G), m(M)) : u(M, z);
    }
    return function(M, z, R, G) {
      try {
        zi = 0;
        var P = ee(
          M,
          z,
          R,
          G
        );
        return Dc = null, P;
      } catch (F) {
        if (F === Ec || F === _o) throw F;
        var Yt = Ae(29, F, null, M.mode);
        return Yt.lanes = G, Yt.return = M, Yt;
      } finally {
      }
    };
  }
  var Oc = Cp(!0), Km = Cp(!1), Vu = !1;
  function Ts(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function yd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Zu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Da(l, n, u) {
    var i = l.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (jt & 2) !== 0) {
      var s = i.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), i.pending = n, n = fs(l), od(l, null, u), n;
    }
    return ba(l, i, n, u), fs(l);
  }
  function Mc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, jn(l, u);
    }
  }
  function pd(l, n) {
    var u = l.updateQueue, i = l.alternate;
    if (i !== null && (i = i.updateQueue, u === i)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var $m = !1;
  function Rc() {
    if ($m) {
      var l = Ge;
      if (l !== null) throw l;
    }
  }
  function In(l, n, u, i) {
    $m = !1;
    var s = l.updateQueue;
    Vu = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var T = v, U = T.next;
      T.next = null, m === null ? r = U : m.next = U, m = T;
      var Y = l.alternate;
      Y !== null && (Y = Y.updateQueue, v = Y.lastBaseUpdate, v !== m && (v === null ? Y.firstBaseUpdate = U : v.next = U, Y.lastBaseUpdate = T));
    }
    if (r !== null) {
      var j = s.baseState;
      m = 0, Y = U = T = null, v = r;
      do {
        var C = v.lane & -536870913, q = C !== v.lane;
        if (q ? (Et & C) === C : (i & C) === C) {
          C !== 0 && C === Tc && ($m = !0), Y !== null && (Y = Y.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          t: {
            var W = l, lt = v;
            C = n;
            var ee = u;
            switch (lt.tag) {
              case 1:
                if (W = lt.payload, typeof W == "function") {
                  j = W.call(ee, j, C);
                  break t;
                }
                j = W;
                break t;
              case 3:
                W.flags = W.flags & -65537 | 128;
              case 0:
                if (W = lt.payload, C = typeof W == "function" ? W.call(ee, j, C) : W, C == null) break t;
                j = it({}, j, C);
                break t;
              case 2:
                Vu = !0;
            }
          }
          C = v.callback, C !== null && (l.flags |= 64, q && (l.flags |= 8192), q = s.callbacks, q === null ? s.callbacks = [C] : q.push(C));
        } else
          q = {
            lane: C,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, Y === null ? (U = Y = q, T = j) : Y = Y.next = q, m |= C;
        if (v = v.next, v === null) {
          if (v = s.shared.pending, v === null)
            break;
          q = v, v = q.next, q.next = null, s.lastBaseUpdate = q, s.shared.pending = null;
        }
      } while (!0);
      Y === null && (T = j), s.baseState = T, s.firstBaseUpdate = U, s.lastBaseUpdate = Y, r === null && (s.shared.lanes = 0), On |= m, l.lanes = m, l.memoizedState = j;
    }
  }
  function vd(l, n) {
    if (typeof l != "function")
      throw Error(N(191, l));
    l.call(n);
  }
  function Uc(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        vd(u[l], n);
  }
  var Je = xe(null), Di = xe(0);
  function _p(l, n) {
    l = Dn, Ut(Di, l), Ut(Je, n), Dn = l | n.baseLanes;
  }
  function Es() {
    Ut(Di, Dn), Ut(Je, Je.current);
  }
  function Bo() {
    Dn = Di.current, Wt(Je), Wt(Di);
  }
  var Ql = xe(null), Oa = null;
  function Pn(l) {
    var n = l.alternate;
    Ut(he, he.current & 1), Ut(Ql, l), Oa === null && (n === null || Je.current !== null || n.memoizedState !== null) && (Oa = l);
  }
  function qo(l) {
    Ut(he, he.current), Ut(Ql, l), Oa === null && (Oa = l);
  }
  function gd(l) {
    l.tag === 22 ? (Ut(he, he.current), Ut(Ql, l), Oa === null && (Oa = l)) : bn();
  }
  function bn() {
    Ut(he, he.current), Ut(Ql, Ql.current);
  }
  function Vl(l) {
    Wt(Ql), Oa === l && (Oa = null), Wt(he);
  }
  var he = xe(0);
  function No(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Ia(u) || Qc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var tu = 0, mt = null, wt = null, He = null, Oi = !1, Mi = !1, Lu = !1, As = 0, Yo = 0, Cc = null, Hp = 0;
  function Se() {
    throw Error(N(321));
  }
  function Ju(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Ol(l[u], n[u])) return !1;
    return !0;
  }
  function zs(l, n, u, i, s, r) {
    return tu = r, mt = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Xp : Nd, Lu = !1, r = u(i, s), Lu = !1, Mi && (r = Bp(
      n,
      u,
      i,
      s
    )), Sd(l), r;
  }
  function Sd(l) {
    O.H = Bs;
    var n = wt !== null && wt.next !== null;
    if (tu = 0, He = wt = mt = null, Oi = !1, Yo = 0, Cc = null, n) throw Error(N(300));
    l === null || Be || (l = l.dependencies, l !== null && Si(l) && (Be = !0));
  }
  function Bp(l, n, u, i) {
    mt = l;
    var s = 0;
    do {
      if (Mi && (Cc = null), Yo = 0, Mi = !1, 25 <= s) throw Error(N(301));
      if (s += 1, He = wt = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      O.H = Qp, r = n(u, i);
    } while (Mi);
    return r;
  }
  function Vg() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Ui(n) : n, l = l.useState()[0], (wt !== null ? wt.memoizedState : null) !== l && (mt.flags |= 1024), n;
  }
  function bd() {
    var l = As !== 0;
    return As = 0, l;
  }
  function Ri(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ds(l) {
    if (Oi) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Oi = !1;
    }
    tu = 0, He = wt = mt = null, Mi = !1, Yo = As = 0, Cc = null;
  }
  function al() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return He === null ? mt.memoizedState = He = l : He = He.next = l, He;
  }
  function De() {
    if (wt === null) {
      var l = mt.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = wt.next;
    var n = He === null ? mt.memoizedState : He.next;
    if (n !== null)
      He = n, wt = l;
    else {
      if (l === null)
        throw mt.alternate === null ? Error(N(467)) : Error(N(310));
      wt = l, l = {
        memoizedState: wt.memoizedState,
        baseState: wt.baseState,
        baseQueue: wt.baseQueue,
        queue: wt.queue,
        next: null
      }, He === null ? mt.memoizedState = He = l : He = He.next = l;
    }
    return He;
  }
  function Os() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ui(l) {
    var n = Yo;
    return Yo += 1, Cc === null && (Cc = []), l = Jm(Cc, l, n), n = mt, (He === null ? n.memoizedState : He.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Xp : Nd), l;
  }
  function xo(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ui(l);
      if (l.$$typeof === Ve) return X(l);
    }
    throw Error(N(438, String(l)));
  }
  function Td(l) {
    var n = null, u = mt.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var i = mt.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (n = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Os(), mt.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), i = 0; i < l; i++)
        u[i] = I;
    return n.index++, u;
  }
  function eu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function lu(l) {
    var n = De();
    return Ed(n, wt, l);
  }
  function Ed(l, n, u) {
    var i = l.queue;
    if (i === null) throw Error(N(311));
    i.lastRenderedReducer = u;
    var s = l.baseQueue, r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, i.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var v = m = null, T = null, U = n, Y = !1;
      do {
        var j = U.lane & -536870913;
        if (j !== U.lane ? (Et & j) === j : (tu & j) === j) {
          var C = U.revertLane;
          if (C === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }), j === Tc && (Y = !0);
          else if ((tu & C) === C) {
            U = U.next, C === Tc && (Y = !0);
            continue;
          } else
            j = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, T === null ? (v = T = j, m = r) : T = T.next = j, mt.lanes |= C, On |= C;
          j = U.action, Lu && u(r, j), r = U.hasEagerState ? U.eagerState : u(r, j);
        } else
          C = {
            lane: j,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          }, T === null ? (v = T = C, m = r) : T = T.next = C, mt.lanes |= j, On |= j;
        U = U.next;
      } while (U !== null && U !== n);
      if (T === null ? m = r : T.next = v, !Ol(r, l.memoizedState) && (Be = !0, Y && (u = Ge, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = T, i.lastRenderedState = r;
    }
    return s === null && (i.lanes = 0), [l.memoizedState, i.dispatch];
  }
  function Ad(l) {
    var n = De(), u = n.queue;
    if (u === null) throw Error(N(311));
    u.lastRenderedReducer = l;
    var i = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Ol(r, n.memoizedState) || (Be = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, i];
  }
  function Wm(l, n, u) {
    var i = mt, s = De(), r = Ot;
    if (r) {
      if (u === void 0) throw Error(N(407));
      u = u();
    } else u = n();
    var m = !Ol(
      (wt || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, Be = !0), s = s.queue, Rd(zd.bind(null, i, s, l), [
      l
    ]), s.getSnapshot !== n || m || He !== null && He.memoizedState.tag & 1) {
      if (i.flags |= 2048, _i(
        9,
        { destroy: void 0 },
        Fm.bind(
          null,
          i,
          s,
          u,
          n
        ),
        null
      ), Pt === null) throw Error(N(349));
      r || (tu & 127) !== 0 || Ms(i, n, u);
    }
    return u;
  }
  function Ms(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = mt.updateQueue, n === null ? (n = Os(), mt.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Fm(l, n, u, i) {
    n.value = u, n.getSnapshot = i, Dd(n) && Od(l);
  }
  function zd(l, n, u) {
    return u(function() {
      Dd(n) && Od(l);
    });
  }
  function Dd(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Ol(l, u);
    } catch {
      return !0;
    }
  }
  function Od(l) {
    var n = Yu(l, 2);
    n !== null && $l(n, l, 2);
  }
  function km(l) {
    var n = al();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Lu) {
        Cu(!0);
        try {
          u();
        } finally {
          Cu(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: eu,
      lastRenderedState: l
    }, n;
  }
  function nl(l, n, u, i) {
    return l.baseState = u, Ed(
      l,
      wt,
      typeof i == "function" ? i : eu
    );
  }
  function qp(l, n, u, i, s) {
    if (Hs(l)) throw Error(N(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      O.T !== null ? u(!0) : r.isTransition = !1, i(r), u = n.pending, u === null ? (r.next = n.pending = r, Im(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Im(l, n) {
    var u = n.action, i = n.payload, s = l.state;
    if (n.isTransition) {
      var r = O.T, m = {};
      O.T = m;
      try {
        var v = u(s, i), T = O.S;
        T !== null && T(m, v), Pm(l, n, v);
      } catch (U) {
        Ci(l, n, U);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), O.T = r;
      }
    } else
      try {
        r = u(s, i), Pm(l, n, r);
      } catch (U) {
        Ci(l, n, U);
      }
  }
  function Pm(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(i) {
        ty(l, n, i);
      },
      function(i) {
        return Ci(l, n, i);
      }
    ) : ty(l, n, u);
  }
  function ty(l, n, u) {
    n.status = "fulfilled", n.value = u, ey(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Im(l, u)));
  }
  function Ci(l, n, u) {
    var i = l.pending;
    if (l.pending = null, i !== null) {
      i = i.next;
      do
        n.status = "rejected", n.reason = u, ey(n), n = n.next;
      while (n !== i);
    }
    l.action = null;
  }
  function ey(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Rs(l, n) {
    return n;
  }
  function ly(l, n) {
    if (Ot) {
      var u = Pt.formState;
      if (u !== null) {
        t: {
          var i = mt;
          if (Ot) {
            if (ue) {
              e: {
                for (var s = ue, r = Le; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break e;
                  }
                  if (s = Wl(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                ue = Wl(
                  s.nextSibling
                ), i = s.data === "F!";
                break t;
              }
            }
            $a(i);
          }
          i = !1;
        }
        i && (n = u[0]);
      }
    }
    return u = al(), u.memoizedState = u.baseState = n, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rs,
      lastRenderedState: n
    }, u.queue = i, u = Bd.bind(
      null,
      mt,
      i
    ), i.dispatch = u, i = km(!1), r = _c.bind(
      null,
      mt,
      !1,
      i.queue
    ), i = al(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, i.queue = s, u = qp.bind(
      null,
      mt,
      s,
      r,
      u
    ), s.dispatch = u, i.memoizedState = l, [n, u, !1];
  }
  function Np(l) {
    var n = De();
    return Us(n, wt, l);
  }
  function Us(l, n, u) {
    if (n = Ed(
      l,
      n,
      Rs
    )[0], l = lu(eu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var i = Ui(n);
      } catch (m) {
        throw m === Ec ? _o : m;
      }
    else i = n;
    n = De();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (mt.flags |= 2048, _i(
      9,
      { destroy: void 0 },
      ay.bind(null, s, u),
      null
    )), [i, r, l];
  }
  function ay(l, n) {
    l.action = n;
  }
  function ny(l) {
    var n = De(), u = wt;
    if (u !== null)
      return Us(n, u, l);
    De(), n = n.memoizedState, u = De();
    var i = u.queue.dispatch;
    return u.memoizedState = l, [n, i, !1];
  }
  function _i(l, n, u, i) {
    return l = { tag: l, create: u, deps: i, inst: n, next: null }, n = mt.updateQueue, n === null && (n = Os(), mt.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (i = u.next, u.next = l, l.next = i, n.lastEffect = l), l;
  }
  function uy() {
    return De().memoizedState;
  }
  function Go(l, n, u, i) {
    var s = al();
    mt.flags |= l, s.memoizedState = _i(
      1 | n,
      { destroy: void 0 },
      u,
      i === void 0 ? null : i
    );
  }
  function jo(l, n, u, i) {
    var s = De();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    wt !== null && i !== null && Ju(i, wt.memoizedState.deps) ? s.memoizedState = _i(n, r, u, i) : (mt.flags |= l, s.memoizedState = _i(
      1 | n,
      r,
      u,
      i
    ));
  }
  function Md(l, n) {
    Go(8390656, 8, l, n);
  }
  function Rd(l, n) {
    jo(2048, 8, l, n);
  }
  function cy(l) {
    mt.flags |= 4;
    var n = mt.updateQueue;
    if (n === null)
      n = Os(), mt.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Cs(l) {
    var n = De().memoizedState;
    return cy({ ref: n, nextImpl: l }), function() {
      if ((jt & 2) !== 0) throw Error(N(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Ud(l, n) {
    return jo(4, 2, l, n);
  }
  function iy(l, n) {
    return jo(4, 4, l, n);
  }
  function Cd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function oy(l, n, u) {
    u = u != null ? u.concat([l]) : null, jo(4, 4, Cd.bind(null, n, l), u);
  }
  function Tn() {
  }
  function _d(l, n) {
    var u = De();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    return n !== null && Ju(n, i[1]) ? i[0] : (u.memoizedState = [l, n], l);
  }
  function Yp(l, n) {
    var u = De();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    if (n !== null && Ju(n, i[1]))
      return i[0];
    if (i = l(), Lu) {
      Cu(!0);
      try {
        l();
      } finally {
        Cu(!1);
      }
    }
    return u.memoizedState = [i, n], i;
  }
  function _s(l, n, u) {
    return u === void 0 || (tu & 1073741824) !== 0 && (Et & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = kp(), mt.lanes |= l, On |= l, u);
  }
  function au(l, n, u, i) {
    return Ol(u, n) ? u : Je.current !== null ? (l = _s(l, u, i), Ol(l, n) || (Be = !0), l) : (tu & 42) === 0 || (tu & 1073741824) !== 0 && (Et & 261930) === 0 ? (Be = !0, l.memoizedState = u) : (l = kp(), mt.lanes |= l, On |= l, n);
  }
  function Hd(l, n, u, i, s) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var m = O.T, v = {};
    O.T = v, _c(l, !1, n, u);
    try {
      var T = s(), U = O.S;
      if (U !== null && U(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var Y = gs(
          T,
          i
        );
        wu(
          l,
          n,
          Y,
          ra(l)
        );
      } else
        wu(
          l,
          n,
          i,
          ra(l)
        );
    } catch (j) {
      wu(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: j },
        ra()
      );
    } finally {
      Q.p = r, m !== null && v.types !== null && (m.types = v.types), O.T = m;
    }
  }
  function xp() {
  }
  function Xo(l, n, u, i) {
    if (l.tag !== 5) throw Error(N(476));
    var s = Qo(l).queue;
    Hd(
      l,
      s,
      n,
      V,
      u === null ? xp : function() {
        return It(l), u(i);
      }
    );
  }
  function Qo(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: eu,
        lastRenderedState: V
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: eu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function It(l) {
    var n = Qo(l);
    n.next === null && (n = l.alternate.memoizedState), wu(
      l,
      n.next.queue,
      {},
      ra()
    );
  }
  function fy() {
    return X(cr);
  }
  function Gp() {
    return De().memoizedState;
  }
  function sy() {
    return De().memoizedState;
  }
  function nu(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = ra();
          l = Zu(u);
          var i = Da(n, l, u);
          i !== null && ($l(i, n, u), Mc(i, n, u)), n = { cache: ms() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function jp(l, n, u) {
    var i = ra();
    u = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Hs(l) ? qd(n, u) : (u = wa(l, n, u, i), u !== null && ($l(u, l, i), ry(u, n, i)));
  }
  function Bd(l, n, u) {
    var i = ra();
    wu(l, n, u, i);
  }
  function wu(l, n, u, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Hs(l)) qd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, v = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = v, Ol(v, m))
            return ba(l, n, s, 0), Pt === null && Sa(), !1;
        } catch {
        } finally {
        }
      if (u = wa(l, n, s, i), u !== null)
        return $l(u, l, i), ry(u, n, i), !0;
    }
    return !1;
  }
  function _c(l, n, u, i) {
    if (i = {
      lane: 2,
      revertLane: ch(),
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Hs(l)) {
      if (n) throw Error(N(479));
    } else
      n = wa(
        l,
        u,
        i,
        2
      ), n !== null && $l(n, l, 2);
  }
  function Hs(l) {
    var n = l.alternate;
    return l === mt || n !== null && n === mt;
  }
  function qd(l, n) {
    Mi = Oi = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function ry(l, n, u) {
    if ((u & 4194048) !== 0) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, jn(l, u);
    }
  }
  var Bs = {
    readContext: X,
    use: xo,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useLayoutEffect: Se,
    useInsertionEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useSyncExternalStore: Se,
    useId: Se,
    useHostTransitionStatus: Se,
    useFormState: Se,
    useActionState: Se,
    useOptimistic: Se,
    useMemoCache: Se,
    useCacheRefresh: Se
  };
  Bs.useEffectEvent = Se;
  var Xp = {
    readContext: X,
    use: xo,
    useCallback: function(l, n) {
      return al().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: X,
    useEffect: Md,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Go(
        4194308,
        4,
        Cd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Go(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Go(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = al();
      n = n === void 0 ? null : n;
      var i = l();
      if (Lu) {
        Cu(!0);
        try {
          l();
        } finally {
          Cu(!1);
        }
      }
      return u.memoizedState = [i, n], i;
    },
    useReducer: function(l, n, u) {
      var i = al();
      if (u !== void 0) {
        var s = u(n);
        if (Lu) {
          Cu(!0);
          try {
            u(n);
          } finally {
            Cu(!1);
          }
        }
      } else s = n;
      return i.memoizedState = i.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, i.queue = l, l = l.dispatch = jp.bind(
        null,
        mt,
        l
      ), [i.memoizedState, l];
    },
    useRef: function(l) {
      var n = al();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = km(l);
      var n = l.queue, u = Bd.bind(null, mt, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Tn,
    useDeferredValue: function(l, n) {
      var u = al();
      return _s(u, l, n);
    },
    useTransition: function() {
      var l = km(!1);
      return l = Hd.bind(
        null,
        mt,
        l.queue,
        !0,
        !1
      ), al().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var i = mt, s = al();
      if (Ot) {
        if (u === void 0)
          throw Error(N(407));
        u = u();
      } else {
        if (u = n(), Pt === null)
          throw Error(N(349));
        (Et & 127) !== 0 || Ms(i, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Md(zd.bind(null, i, r, l), [
        l
      ]), i.flags |= 2048, _i(
        9,
        { destroy: void 0 },
        Fm.bind(
          null,
          i,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = al(), n = Pt.identifierPrefix;
      if (Ot) {
        var u = vn, i = ia;
        u = (i & ~(1 << 32 - ql(i) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = As++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = Hp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: fy,
    useFormState: ly,
    useActionState: ly,
    useOptimistic: function(l) {
      var n = al();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = _c.bind(
        null,
        mt,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Td,
    useCacheRefresh: function() {
      return al().memoizedState = nu.bind(
        null,
        mt
      );
    },
    useEffectEvent: function(l) {
      var n = al(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((jt & 2) !== 0)
          throw Error(N(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Nd = {
    readContext: X,
    use: xo,
    useCallback: _d,
    useContext: X,
    useEffect: Rd,
    useImperativeHandle: oy,
    useInsertionEffect: Ud,
    useLayoutEffect: iy,
    useMemo: Yp,
    useReducer: lu,
    useRef: uy,
    useState: function() {
      return lu(eu);
    },
    useDebugValue: Tn,
    useDeferredValue: function(l, n) {
      var u = De();
      return au(
        u,
        wt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = lu(eu)[0], n = De().memoizedState;
      return [
        typeof l == "boolean" ? l : Ui(l),
        n
      ];
    },
    useSyncExternalStore: Wm,
    useId: Gp,
    useHostTransitionStatus: fy,
    useFormState: Np,
    useActionState: Np,
    useOptimistic: function(l, n) {
      var u = De();
      return nl(u, wt, l, n);
    },
    useMemoCache: Td,
    useCacheRefresh: sy
  };
  Nd.useEffectEvent = Cs;
  var Qp = {
    readContext: X,
    use: xo,
    useCallback: _d,
    useContext: X,
    useEffect: Rd,
    useImperativeHandle: oy,
    useInsertionEffect: Ud,
    useLayoutEffect: iy,
    useMemo: Yp,
    useReducer: Ad,
    useRef: uy,
    useState: function() {
      return Ad(eu);
    },
    useDebugValue: Tn,
    useDeferredValue: function(l, n) {
      var u = De();
      return wt === null ? _s(u, l, n) : au(
        u,
        wt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Ad(eu)[0], n = De().memoizedState;
      return [
        typeof l == "boolean" ? l : Ui(l),
        n
      ];
    },
    useSyncExternalStore: Wm,
    useId: Gp,
    useHostTransitionStatus: fy,
    useFormState: ny,
    useActionState: ny,
    useOptimistic: function(l, n) {
      var u = De();
      return wt !== null ? nl(u, wt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Td,
    useCacheRefresh: sy
  };
  Qp.useEffectEvent = Cs;
  function Hi(l, n, u, i) {
    n = l.memoizedState, u = u(i, n), u = u == null ? n : it({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Wa = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var i = ra(), s = Zu(i);
      s.payload = n, u != null && (s.callback = u), n = Da(l, s, i), n !== null && ($l(n, l, i), Mc(n, l, i));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var i = ra(), s = Zu(i);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Da(l, s, i), n !== null && ($l(n, l, i), Mc(n, l, i));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = ra(), i = Zu(u);
      i.tag = 2, n != null && (i.callback = n), n = Da(l, i, u), n !== null && ($l(n, l, u), Mc(n, l, u));
    }
  };
  function dy(l, n, u, i, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(i, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Za(u, i) || !Za(s, r) : !0;
  }
  function Vp(l, n, u, i) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, i), n.state !== l && Wa.enqueueReplaceState(n, n.state, null);
  }
  function Hc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var i in n)
        i !== "ref" && (u[i] = n[i]);
    }
    if (l = l.defaultProps) {
      u === n && (u = it({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Yd(l) {
    pi(l);
  }
  function hy(l) {
    console.error(l);
  }
  function xd(l) {
    pi(l);
  }
  function Vo(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function qs(l, n, u) {
    try {
      var i = l.onCaughtError;
      i(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function my(l, n, u) {
    return u = Zu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Vo(l, n);
    }, u;
  }
  function yy(l) {
    return l = Zu(l), l.tag = 3, l;
  }
  function py(l, n, u, i) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        qs(n, u, i);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      qs(n, u, i), typeof s != "function" && (me === null ? me = /* @__PURE__ */ new Set([this]) : me.add(this));
      var v = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function Zg(l, n, u, i, s) {
    if (u.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (n = u.alternate, n !== null && ll(
        n,
        u,
        s,
        !0
      ), u = Ql.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Oa === null ? lh() : u.alternate === null && ie === 0 && (ie = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, i === Ai ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([i]) : n.add(i), $s(l, i, s)), !1;
          case 22:
            return u.flags |= 65536, i === Ai ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([i]) : u.add(i)), $s(l, i, s)), !1;
        }
        throw Error(N(435, u.tag));
      }
      return $s(l, i, s), lh(), !1;
    }
    if (Ot)
      return n = Ql.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, i !== Wn && (l = Error(N(422), { cause: i }), Uo(Ta(l, u)))) : (i !== Wn && (n = Error(N(423), {
        cause: i
      }), Uo(
        Ta(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, i = Ta(i, u), s = my(
        l.stateNode,
        i,
        s
      ), pd(l, s), ie !== 4 && (ie = 2)), !1;
    var r = Error(N(520), { cause: i });
    if (r = Ta(r, u), Ls === null ? Ls = [r] : Ls.push(r), ie !== 4 && (ie = 2), n === null) return !0;
    i = Ta(i, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = my(u.stateNode, i, l), pd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (me === null || !me.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = yy(s), py(
              s,
              l,
              u,
              i
            ), pd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Gd = Error(N(461)), Be = !1;
  function se(l, n, u, i) {
    n.child = l === null ? Km(n, null, u, i) : Oc(
      n,
      l.child,
      u,
      i
    );
  }
  function vy(l, n, u, i, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in i) {
      var m = {};
      for (var v in i)
        v !== "ref" && (m[v] = i[v]);
    } else m = i;
    return ft(n), i = zs(
      l,
      n,
      u,
      m,
      r,
      s
    ), v = bd(), l !== null && !Be ? (Ri(l, n, s), Ua(l, n, s)) : (Ot && v && Mo(n), n.flags |= 1, se(l, n, i, s), n.child);
  }
  function gy(l, n, u, i, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !vi(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Sy(
        l,
        n,
        r,
        i,
        s
      )) : (l = fd(
        u.type,
        null,
        i,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Qd(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Za, u(m, i) && l.ref === n.ref)
        return Ua(l, n, s);
    }
    return n.flags |= 1, l = xu(r, i), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Sy(l, n, u, i, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Za(r, i) && l.ref === n.ref)
        if (Be = !1, n.pendingProps = i = r, Qd(l, s))
          (l.flags & 131072) !== 0 && (Be = !0);
        else
          return n.lanes = l.lanes, Ua(l, n, s);
    }
    return jd(
      l,
      n,
      u,
      i,
      s
    );
  }
  function Zp(l, n, u, i) {
    var s = i.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), i.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (i = n.child = l.child, s = 0; i !== null; )
            s = s | i.lanes | i.childLanes, i = i.sibling;
          i = s & ~r;
        } else i = 0, n.child = null;
        return Zl(
          l,
          n,
          r,
          u,
          i
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Co(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? _p(n, r) : Es(), gd(n);
      else
        return i = n.lanes = 536870912, Zl(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          i
        );
    } else
      r !== null ? (Co(n, r.cachePool), _p(n, r), bn(), n.memoizedState = null) : (l !== null && Co(n, null), Es(), bn());
    return se(l, n, s, u), n.child;
  }
  function Bc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function Zl(l, n, u, i, s) {
    var r = za();
    return r = r === null ? null : { parent: _e._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Co(n, null), Es(), gd(n), l !== null && ll(l, n, i, !0), n.childLanes = s, null;
  }
  function Ns(l, n) {
    return n = Gs(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Ll(l, n, u) {
    return Oc(n, l.child, null, u), l = Ns(n, n.pendingProps), l.flags |= 2, Vl(n), n.memoizedState = null, l;
  }
  function Lp(l, n, u) {
    var i = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (Ot) {
        if (i.mode === "hidden")
          return l = Ns(n, i), n.lanes = 536870912, Bc(null, l);
        if (qo(n), (l = ue) ? (l = Dv(
          l,
          Le
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: pn !== null ? { id: ia, overflow: vn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Gm(l), u.return = n, n.child = u, el = n, ue = null)) : l = null, l === null) throw $a(n);
        return n.lanes = 536870912, null;
      }
      return Ns(n, i);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (qo(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = Ll(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(N(558));
      else if (Be || ll(l, n, u, !1), s = (u & l.childLanes) !== 0, Be || s) {
        if (i = Pt, i !== null && (m = pa(i, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, Yu(l, m), $l(i, l, m), Gd;
        lh(), n = Ll(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, ue = Wl(m.nextSibling), el = n, Ot = !0, $n = null, Le = !1, l !== null && rs(n, l), n = Ns(n, i), n.flags |= 4096;
      return n;
    }
    return l = xu(l.child, {
      mode: i.mode,
      children: i.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function Ma(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(N(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function jd(l, n, u, i, s) {
    return ft(n), u = zs(
      l,
      n,
      u,
      i,
      void 0,
      s
    ), i = bd(), l !== null && !Be ? (Ri(l, n, s), Ua(l, n, s)) : (Ot && i && Mo(n), n.flags |= 1, se(l, n, u, s), n.child);
  }
  function qc(l, n, u, i, s, r) {
    return ft(n), n.updateQueue = null, u = Bp(
      n,
      i,
      u,
      s
    ), Sd(l), i = bd(), l !== null && !Be ? (Ri(l, n, r), Ua(l, n, r)) : (Ot && i && Mo(n), n.flags |= 1, se(l, n, u, r), n.child);
  }
  function by(l, n, u, i, s) {
    if (ft(n), n.stateNode === null) {
      var r = Gl, m = u.contextType;
      typeof m == "object" && m !== null && (r = X(m)), r = new u(i, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Wa, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = i, r.state = n.memoizedState, r.refs = {}, Ts(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? X(m) : Gl, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Hi(
        n,
        u,
        m,
        i
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Wa.enqueueReplaceState(r, r.state, null), In(n, i, r, s), Rc(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !0;
    } else if (l === null) {
      r = n.stateNode;
      var v = n.memoizedProps, T = Hc(u, v);
      r.props = T;
      var U = r.context, Y = u.contextType;
      m = Gl, typeof Y == "object" && Y !== null && (m = X(Y));
      var j = u.getDerivedStateFromProps;
      Y = typeof j == "function" || typeof r.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, Y || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (v || U !== m) && Vp(
        n,
        r,
        i,
        m
      ), Vu = !1;
      var C = n.memoizedState;
      r.state = C, In(n, i, r, s), Rc(), U = n.memoizedState, v || C !== U || Vu ? (typeof j == "function" && (Hi(
        n,
        u,
        j,
        i
      ), U = n.memoizedState), (T = Vu || dy(
        n,
        u,
        T,
        i,
        C,
        U,
        m
      )) ? (Y || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = U), r.props = i, r.state = U, r.context = m, i = T) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !1);
    } else {
      r = n.stateNode, yd(l, n), m = n.memoizedProps, Y = Hc(u, m), r.props = Y, j = n.pendingProps, C = r.context, U = u.contextType, T = Gl, typeof U == "object" && U !== null && (T = X(U)), v = u.getDerivedStateFromProps, (U = typeof v == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== j || C !== T) && Vp(
        n,
        r,
        i,
        T
      ), Vu = !1, C = n.memoizedState, r.state = C, In(n, i, r, s), Rc();
      var q = n.memoizedState;
      m !== j || C !== q || Vu || l !== null && l.dependencies !== null && Si(l.dependencies) ? (typeof v == "function" && (Hi(
        n,
        u,
        v,
        i
      ), q = n.memoizedState), (Y = Vu || dy(
        n,
        u,
        Y,
        i,
        C,
        q,
        T
      ) || l !== null && l.dependencies !== null && Si(l.dependencies)) ? (U || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, q, T), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        i,
        q,
        T
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = q), r.props = i, r.state = q, r.context = T, i = Y) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && C === l.memoizedState || (n.flags |= 1024), i = !1);
    }
    return r = i, Ma(l, n), i = (n.flags & 128) !== 0, r || i ? (r = n.stateNode, u = i && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && i ? (n.child = Oc(
      n,
      l.child,
      null,
      s
    ), n.child = Oc(
      n,
      null,
      u,
      s
    )) : se(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Ua(
      l,
      n,
      s
    ), l;
  }
  function En(l, n, u, i) {
    return bc(), n.flags |= 256, se(l, n, u, i), n.child;
  }
  var Ys = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function xs(l) {
    return { baseLanes: l, cachePool: Ti() };
  }
  function Ra(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Kl), l;
  }
  function Ty(l, n, u) {
    var i = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (he.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (Ot) {
        if (s ? Pn(n) : bn(), (l = ue) ? (l = Dv(
          l,
          Le
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: pn !== null ? { id: ia, overflow: vn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Gm(l), u.return = n, n.child = u, el = n, ue = null)) : l = null, l === null) throw $a(n);
        return Qc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = i.children;
      return i = i.fallback, s ? (bn(), s = n.mode, v = Gs(
        { mode: "hidden", children: v },
        s
      ), i = Gu(
        i,
        s,
        u,
        null
      ), v.return = n, i.return = n, v.sibling = i, n.child = v, i = n.child, i.memoizedState = xs(u), i.childLanes = Ra(
        l,
        m,
        u
      ), n.memoizedState = Ys, Bc(null, i)) : (Pn(n), Nc(n, v));
    }
    var T = l.memoizedState;
    if (T !== null && (v = T.dehydrated, v !== null)) {
      if (r)
        n.flags & 256 ? (Pn(n), n.flags &= -257, n = Bi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (bn(), n.child = l.child, n.flags |= 128, n = null) : (bn(), v = i.fallback, s = n.mode, i = Gs(
          { mode: "visible", children: i.children },
          s
        ), v = Gu(
          v,
          s,
          u,
          null
        ), v.flags |= 2, i.return = n, v.return = n, i.sibling = v, n.child = i, Oc(
          n,
          l.child,
          null,
          u
        ), i = n.child, i.memoizedState = xs(u), i.childLanes = Ra(
          l,
          m,
          u
        ), n.memoizedState = Ys, n = Bc(null, i));
      else if (Pn(n), Qc(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var U = m.dgst;
        m = U, i = Error(N(419)), i.stack = "", i.digest = m, Uo({ value: i, source: null, stack: null }), n = Bi(
          l,
          n,
          u
        );
      } else if (Be || ll(l, n, u, !1), m = (u & l.childLanes) !== 0, Be || m) {
        if (m = Pt, m !== null && (i = pa(m, u), i !== 0 && i !== T.retryLane))
          throw T.retryLane = i, Yu(l, i), $l(m, l, i), Gd;
        Ia(v) || lh(), n = Bi(
          l,
          n,
          u
        );
      } else
        Ia(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, ue = Wl(
          v.nextSibling
        ), el = n, Ot = !0, $n = null, Le = !1, l !== null && rs(n, l), n = Nc(
          n,
          i.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (bn(), v = i.fallback, s = n.mode, T = l.child, U = T.sibling, i = xu(T, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = T.subtreeFlags & 65011712, U !== null ? v = xu(
      U,
      v
    ) : (v = Gu(
      v,
      s,
      u,
      null
    ), v.flags |= 2), v.return = n, i.return = n, i.sibling = v, n.child = i, Bc(null, i), i = n.child, v = l.child.memoizedState, v === null ? v = xs(u) : (s = v.cachePool, s !== null ? (T = _e._currentValue, s = s.parent !== T ? { parent: T, pool: T } : s) : s = Ti(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: s
    }), i.memoizedState = v, i.childLanes = Ra(
      l,
      m,
      u
    ), n.memoizedState = Ys, Bc(l.child, i)) : (Pn(n), u = l.child, l = u.sibling, u = xu(u, {
      mode: "visible",
      children: i.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Nc(l, n) {
    return n = Gs(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Gs(l, n) {
    return l = Ae(22, l, null, n), l.lanes = 0, l;
  }
  function Bi(l, n, u) {
    return Oc(n, l.child, null, u), l = Nc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function qi(l, n, u) {
    l.lanes |= n;
    var i = l.alternate;
    i !== null && (i.lanes |= n), hd(l.return, n, u);
  }
  function Xd(l, n, u, i, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = i, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function Ey(l, n, u) {
    var i = n.pendingProps, s = i.revealOrder, r = i.tail;
    i = i.children;
    var m = he.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, Ut(he, m), se(l, n, i, u), i = Ot ? Ce : 0, !v && l !== null && (l.flags & 128) !== 0)
      t: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && qi(l, u, n);
        else if (l.tag === 19)
          qi(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break t;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break t;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && No(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), Xd(
          n,
          !1,
          s,
          u,
          r,
          i
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && No(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        Xd(
          n,
          !0,
          u,
          null,
          r,
          i
        );
        break;
      case "together":
        Xd(
          n,
          !1,
          null,
          null,
          void 0,
          i
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Ua(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), On |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (ll(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(N(153));
    if (n.child !== null) {
      for (l = n.child, u = xu(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = xu(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Qd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Si(l)));
  }
  function Vd(l, n, u) {
    switch (n.tag) {
      case 3:
        Lf(n, n.stateNode.containerInfo), Xl(n, _e, l.memoizedState.cache), bc();
        break;
      case 27:
      case 5:
        am(n);
        break;
      case 4:
        Lf(n, n.stateNode.containerInfo);
        break;
      case 10:
        Xl(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, qo(n), null;
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (Pn(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ty(l, n, u) : (Pn(n), l = Ua(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Pn(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (i = (u & n.childLanes) !== 0, i || (ll(
          l,
          n,
          u,
          !1
        ), i = (u & n.childLanes) !== 0), s) {
          if (i)
            return Ey(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ut(he, he.current), i) break;
        return null;
      case 22:
        return n.lanes = 0, Zp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Xl(n, _e, l.memoizedState.cache);
    }
    return Ua(l, n, u);
  }
  function Ay(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Be = !0;
      else {
        if (!Qd(l, u) && (n.flags & 128) === 0)
          return Be = !1, Vd(
            l,
            n,
            u
          );
        Be = (l.flags & 131072) !== 0;
      }
    else
      Be = !1, Ot && (n.flags & 1048576) !== 0 && Xm(n, Ce, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        t: {
          var i = n.pendingProps;
          if (l = Ac(n.elementType), n.type = l, typeof l == "function")
            vi(l) ? (i = Hc(l, i), n.tag = 1, n = by(
              null,
              n,
              l,
              i,
              u
            )) : (n.tag = 0, n = jd(
              null,
              n,
              l,
              i,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Bl) {
                n.tag = 11, n = vy(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              } else if (s === Ie) {
                n.tag = 14, n = gy(
                  null,
                  n,
                  l,
                  i,
                  u
                );
                break t;
              }
            }
            throw n = aa(l) || l, Error(N(306, n, ""));
          }
        }
        return n;
      case 0:
        return jd(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return i = n.type, s = Hc(
          i,
          n.pendingProps
        ), by(
          l,
          n,
          i,
          s,
          u
        );
      case 3:
        t: {
          if (Lf(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(N(387));
          i = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, yd(l, n), In(n, i, null, u);
          var m = n.memoizedState;
          if (i = m.cache, Xl(n, _e, i), i !== r.cache && kn(
            n,
            [_e],
            u,
            !0
          ), Rc(), i = m.element, r.isDehydrated)
            if (r = {
              element: i,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = En(
                l,
                n,
                i,
                u
              );
              break t;
            } else if (i !== s) {
              s = Ta(
                Error(N(424)),
                n
              ), Uo(s), n = En(
                l,
                n,
                i,
                u
              );
              break t;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (ue = Wl(l.firstChild), el = n, Ot = !0, $n = null, Le = !0, u = Km(
                n,
                null,
                i,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (bc(), i === s) {
              n = Ua(
                l,
                n,
                u
              );
              break t;
            }
            se(l, n, i, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Ma(l, n), l === null ? (u = rf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : Ot || (u = n.type, l = n.pendingProps, i = Xc(
          ic.current
        ).createElement(u), i[kt] = n, i[Nl] = l, Sl(i, u, l), Lt(i), n.stateNode = i) : n.memoizedState = rf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return am(n), l === null && Ot && (i = n.stateNode = ff(
          n.type,
          n.pendingProps,
          ic.current
        ), el = n, Le = !0, s = ue, Rn(n.type) ? (ar = s, ue = Wl(i.firstChild)) : ue = s), se(
          l,
          n,
          n.pendingProps.children,
          u
        ), Ma(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && Ot && ((s = i = ue) && (i = wg(
          i,
          n.type,
          n.pendingProps,
          Le
        ), i !== null ? (n.stateNode = i, el = n, ue = Wl(i.firstChild), Le = !1, s = !0) : s = !1), s || $a(n)), am(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, i = r.children, cf(s, r) ? i = null : m !== null && cf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = zs(
          l,
          n,
          Vg,
          null,
          null,
          u
        ), cr._currentValue = s), Ma(l, n), se(l, n, i, u), n.child;
      case 6:
        return l === null && Ot && ((l = u = ue) && (u = gt(
          u,
          n.pendingProps,
          Le
        ), u !== null ? (n.stateNode = u, el = n, ue = null, l = !0) : l = !1), l || $a(n)), null;
      case 13:
        return Ty(l, n, u);
      case 4:
        return Lf(
          n,
          n.stateNode.containerInfo
        ), i = n.pendingProps, l === null ? n.child = Oc(
          n,
          null,
          i,
          u
        ) : se(l, n, i, u), n.child;
      case 11:
        return vy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return se(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return se(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return se(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return i = n.pendingProps, Xl(n, n.type, i.value), se(l, n, i.children, u), n.child;
      case 9:
        return s = n.type._context, i = n.pendingProps.children, ft(n), s = X(s), i = i(s), n.flags |= 1, se(l, n, i, u), n.child;
      case 14:
        return gy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Sy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Ey(l, n, u);
      case 31:
        return Lp(l, n, u);
      case 22:
        return Zp(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return ft(n), i = X(_e), l === null ? (s = za(), s === null && (s = Pt, r = ms(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: i, cache: s }, Ts(n), Xl(n, _e, s)) : ((l.lanes & u) !== 0 && (yd(l, n), In(n, null, null, u), Rc()), s = l.memoizedState, r = n.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Xl(n, _e, i)) : (i = r.cache, Xl(n, _e, i), i !== s.cache && kn(
          n,
          [_e],
          u,
          !0
        ))), se(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(N(156, n.tag));
  }
  function uu(l) {
    l.flags |= 4;
  }
  function zy(l, n, u, i, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (tv()) l.flags |= 8192;
        else
          throw zc = Ai, Ei;
    } else l.flags &= -16777217;
  }
  function Dy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !ha(n))
      if (tv()) l.flags |= 8192;
      else
        throw zc = Ai, Ei;
  }
  function Ml(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ti() : 536870912, l.lanes |= n, be |= n);
  }
  function Zo(l, n) {
    if (!Ot)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var i = null; u !== null; )
            u.alternate !== null && (i = u), u = u.sibling;
          i === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : i.sibling = null;
      }
  }
  function ot(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, i = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= i, l.childLanes = u, n;
  }
  function Jp(l, n, u) {
    var i = n.pendingProps;
    switch (rd(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ot(n), null;
      case 1:
        return ot(n), null;
      case 3:
        return u = n.stateNode, i = null, l !== null && (i = l.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), Sn(_e), Uu(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Fn(n) ? uu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Qm())), ot(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (uu(n), r !== null ? (ot(n), Dy(n, r)) : (ot(n), zy(
          n,
          s,
          null,
          i,
          u
        ))) : r ? r !== l.memoizedState ? (uu(n), ot(n), Dy(n, r)) : (ot(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== i && uu(n), ot(n), zy(
          n,
          s,
          l,
          i,
          u
        )), null;
      case 27:
        if ($(n), u = ic.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && uu(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(N(166));
            return ot(n), null;
          }
          l = zt.current, Fn(n) ? ds(n) : (l = ff(s, i, u), n.stateNode = l, uu(n));
        }
        return ot(n), null;
      case 5:
        if ($(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && uu(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(N(166));
            return ot(n), null;
          }
          if (r = zt.current, Fn(n))
            ds(n);
          else {
            var m = Xc(
              ic.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof i.is == "string" ? m.createElement("select", {
                      is: i.is
                    }) : m.createElement("select"), i.multiple ? r.multiple = !0 : i.size && (r.size = i.size);
                    break;
                  default:
                    r = typeof i.is == "string" ? m.createElement(s, { is: i.is }) : m.createElement(s);
                }
            }
            r[kt] = n, r[Nl] = i;
            t: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break t;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break t;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            t: switch (Sl(r, s, i), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && uu(n);
          }
        }
        return ot(n), zy(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== i && uu(n);
        else {
          if (typeof i != "string" && n.stateNode === null)
            throw Error(N(166));
          if (l = ic.current, Fn(n)) {
            if (l = n.stateNode, u = n.memoizedProps, i = null, s = el, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            l[kt] = n, l = !!(l.nodeValue === u || i !== null && i.suppressHydrationWarning === !0 || Wy(l.nodeValue, u)), l || $a(n, !0);
          } else
            l = Xc(l).createTextNode(
              i
            ), l[kt] = n, n.stateNode = l;
        }
        return ot(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (i = Fn(n), u !== null) {
            if (l === null) {
              if (!i) throw Error(N(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(557));
              l[kt] = n;
            } else
              bc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ot(n), l = !1;
          } else
            u = Qm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (Vl(n), n) : (Vl(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(N(558));
        }
        return ot(n), null;
      case 13:
        if (i = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Fn(n), i !== null && i.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(N(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(N(317));
              s[kt] = n;
            } else
              bc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ot(n), s = !1;
          } else
            s = Qm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Vl(n), n) : (Vl(n), null);
        }
        return Vl(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = i !== null, l = l !== null && l.memoizedState !== null, u && (i = n.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool), r = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== s && (i.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), Ml(n, n.updateQueue), ot(n), null);
      case 4:
        return Uu(), l === null && uf(n.stateNode.containerInfo), ot(n), null;
      case 10:
        return Sn(n.type), ot(n), null;
      case 19:
        if (Wt(he), i = n.memoizedState, i === null) return ot(n), null;
        if (s = (n.flags & 128) !== 0, r = i.rendering, r === null)
          if (s) Zo(i, !1);
          else {
            if (ie !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = No(l), r !== null) {
                  for (n.flags |= 128, Zo(i, !1), l = r.updateQueue, n.updateQueue = l, Ml(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    xm(u, l), u = u.sibling;
                  return Ut(
                    he,
                    he.current & 1 | 2
                  ), Ot && Ka(n, i.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            i.tail !== null && vl() > Vt && (n.flags |= 128, s = !0, Zo(i, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = No(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, Ml(n, l), Zo(i, !0), i.tail === null && i.tailMode === "hidden" && !r.alternate && !Ot)
                return ot(n), null;
            } else
              2 * vl() - i.renderingStartTime > Vt && u !== 536870912 && (n.flags |= 128, s = !0, Zo(i, !1), n.lanes = 4194304);
          i.isBackwards ? (r.sibling = n.child, n.child = r) : (l = i.last, l !== null ? l.sibling = r : n.child = r, i.last = r);
        }
        return i.tail !== null ? (l = i.tail, i.rendering = l, i.tail = l.sibling, i.renderingStartTime = vl(), l.sibling = null, u = he.current, Ut(
          he,
          s ? u & 1 | 2 : u & 1
        ), Ot && Ka(n, i.treeForkCount), l) : (ot(n), null);
      case 22:
      case 23:
        return Vl(n), Bo(), i = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== i && (n.flags |= 8192) : i && (n.flags |= 8192), i ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (ot(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ot(n), u = n.updateQueue, u !== null && Ml(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== u && (n.flags |= 2048), l !== null && Wt(Aa), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Sn(_e), ot(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(N(156, n.tag));
  }
  function wp(l, n) {
    switch (rd(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Sn(_e), Uu(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return $(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Vl(n), n.alternate === null)
            throw Error(N(340));
          bc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (Vl(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(N(340));
          bc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return Wt(he), null;
      case 4:
        return Uu(), null;
      case 10:
        return Sn(n.type), null;
      case 22:
      case 23:
        return Vl(n), Bo(), l !== null && Wt(Aa), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Sn(_e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Kp(l, n) {
    switch (rd(n), n.tag) {
      case 3:
        Sn(_e), Uu();
        break;
      case 26:
      case 27:
      case 5:
        $(n);
        break;
      case 4:
        Uu();
        break;
      case 31:
        n.memoizedState !== null && Vl(n);
        break;
      case 13:
        Vl(n);
        break;
      case 19:
        Wt(he);
        break;
      case 10:
        Sn(n.type);
        break;
      case 22:
      case 23:
        Vl(n), Bo(), l !== null && Wt(Aa);
        break;
      case 24:
        Sn(_e);
    }
  }
  function Fa(l, n) {
    try {
      var u = n.updateQueue, i = u !== null ? u.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            i = void 0;
            var r = u.create, m = u.inst;
            i = r(), m.destroy = i;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (v) {
      $t(n, n.return, v);
    }
  }
  function Ca(l, n, u) {
    try {
      var i = n.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & l) === l) {
            var m = i.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, s = n;
              var T = u, U = v;
              try {
                U();
              } catch (Y) {
                $t(
                  s,
                  T,
                  Y
                );
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (Y) {
      $t(n, n.return, Y);
    }
  }
  function Zd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Uc(n, u);
      } catch (i) {
        $t(l, l.return, i);
      }
    }
  }
  function Yc(l, n, u) {
    u.props = Hc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (i) {
      $t(l, n, i);
    }
  }
  function cu(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var i = l.stateNode;
            break;
          case 30:
            i = l.stateNode;
            break;
          default:
            i = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(i) : u.current = i;
      }
    } catch (s) {
      $t(l, n, s);
    }
  }
  function An(l, n) {
    var u = l.ref, i = l.refCleanup;
    if (u !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          $t(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          $t(l, n, s);
        }
      else u.current = null;
  }
  function Oy(l) {
    var n = l.type, u = l.memoizedProps, i = l.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && i.focus();
          break t;
        case "img":
          u.src ? i.src = u.src : u.srcSet && (i.srcset = u.srcSet);
      }
    } catch (s) {
      $t(l, l.return, s);
    }
  }
  function Ld(l, n, u) {
    try {
      var i = l.stateNode;
      ky(i, l.type, u, n), i[Nl] = n;
    } catch (s) {
      $t(l, l.return, s);
    }
  }
  function My(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Rn(l.type) || l.tag === 4;
  }
  function Lo(l) {
    t: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || My(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Rn(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue t;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Jo(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = fn));
    else if (i !== 4 && (i === 27 && Rn(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Jo(l, n, u), l = l.sibling; l !== null; )
        Jo(l, n, u), l = l.sibling;
  }
  function wo(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (i !== 4 && (i === 27 && Rn(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (wo(l, n, u), l = l.sibling; l !== null; )
        wo(l, n, u), l = l.sibling;
  }
  function Ry(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var i = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Sl(n, i, u), n[kt] = l, n[Nl] = u;
    } catch (r) {
      $t(l, l.return, r);
    }
  }
  var Ku = !1, je = !1, Jd = !1, Uy = typeof WeakSet == "function" ? WeakSet : Set, ul = null;
  function Ko(l, n) {
    if (l = l.containerInfo, rh = Ke, l = vc(l), us(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        t: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var i = u.getSelection && u.getSelection();
          if (i && i.rangeCount !== 0) {
            u = i.anchorNode;
            var s = i.anchorOffset, r = i.focusNode;
            i = i.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break t;
            }
            var m = 0, v = -1, T = -1, U = 0, Y = 0, j = l, C = null;
            e: for (; ; ) {
              for (var q; j !== u || s !== 0 && j.nodeType !== 3 || (v = m + s), j !== r || i !== 0 && j.nodeType !== 3 || (T = m + i), j.nodeType === 3 && (m += j.nodeValue.length), (q = j.firstChild) !== null; )
                C = j, j = q;
              for (; ; ) {
                if (j === l) break e;
                if (C === u && ++U === s && (v = m), C === r && ++Y === i && (T = m), (q = j.nextSibling) !== null) break;
                j = C, C = j.parentNode;
              }
              j = q;
            }
            u = v === -1 || T === -1 ? null : { start: v, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (dh = { focusedElem: l, selectionRange: u }, Ke = !1, ul = n; ul !== null; )
      if (n = ul, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, ul = l;
      else
        for (; ul !== null; ) {
          switch (n = ul, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, i = u.stateNode;
                try {
                  var W = Hc(
                    u.type,
                    s
                  );
                  l = i.getSnapshotBeforeUpdate(
                    W,
                    r
                  ), i.__reactInternalSnapshotBeforeUpdate = l;
                } catch (lt) {
                  $t(
                    u,
                    u.return,
                    lt
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  lr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      lr(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(N(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, ul = l;
            break;
          }
          ul = n.return;
        }
  }
  function js(l, n, u) {
    var i = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        $u(l, u), i & 4 && Fa(5, u);
        break;
      case 1:
        if ($u(l, u), i & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              $t(u, u.return, m);
            }
          else {
            var s = Hc(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              $t(
                u,
                u.return,
                m
              );
            }
          }
        i & 64 && Zd(u), i & 512 && cu(u, u.return);
        break;
      case 3:
        if ($u(l, u), i & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Uc(l, n);
          } catch (m) {
            $t(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && i & 4 && Ry(u);
      case 26:
      case 5:
        $u(l, u), n === null && i & 4 && Oy(u), i & 512 && cu(u, u.return);
        break;
      case 12:
        $u(l, u);
        break;
      case 31:
        $u(l, u), i & 4 && $p(l, u);
        break;
      case 13:
        $u(l, u), i & 4 && Hy(l, u), i & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = _a.bind(
          null,
          u
        ), of(l, u))));
        break;
      case 22:
        if (i = u.memoizedState !== null || Ku, !i) {
          n = n !== null && n.memoizedState !== null || je, s = Ku;
          var r = je;
          Ku = i, (je = n) && !r ? zn(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : $u(l, u), Ku = s, je = r;
        }
        break;
      case 30:
        break;
      default:
        $u(l, u);
    }
  }
  function Cy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Cy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Qr(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ce = null, Jl = !1;
  function iu(l, n, u) {
    for (u = u.child; u !== null; )
      _y(l, n, u), u = u.sibling;
  }
  function _y(l, n, u) {
    if (ua && typeof ua.onCommitFiberUnmount == "function")
      try {
        ua.onCommitFiberUnmount(Pc, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        je || An(u, n), iu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        je || An(u, n);
        var i = ce, s = Jl;
        Rn(u.type) && (ce = u.stateNode, Jl = !1), iu(
          l,
          n,
          u
        ), Vi(u.stateNode), ce = i, Jl = s;
        break;
      case 5:
        je || An(u, n);
      case 6:
        if (i = ce, s = Jl, ce = null, iu(
          l,
          n,
          u
        ), ce = i, Jl = s, ce !== null)
          if (Jl)
            try {
              (ce.nodeType === 9 ? ce.body : ce.nodeName === "HTML" ? ce.ownerDocument.body : ce).removeChild(u.stateNode);
            } catch (r) {
              $t(
                u,
                n,
                r
              );
            }
          else
            try {
              ce.removeChild(u.stateNode);
            } catch (r) {
              $t(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        ce !== null && (Jl ? (l = ce, e0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Sf(l)) : e0(ce, u.stateNode));
        break;
      case 4:
        i = ce, s = Jl, ce = u.stateNode.containerInfo, Jl = !0, iu(
          l,
          n,
          u
        ), ce = i, Jl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ca(2, u, n), je || Ca(4, u, n), iu(
          l,
          n,
          u
        );
        break;
      case 1:
        je || (An(u, n), i = u.stateNode, typeof i.componentWillUnmount == "function" && Yc(
          u,
          n,
          i
        )), iu(
          l,
          n,
          u
        );
        break;
      case 21:
        iu(
          l,
          n,
          u
        );
        break;
      case 22:
        je = (i = je) || u.memoizedState !== null, iu(
          l,
          n,
          u
        ), je = i;
        break;
      default:
        iu(
          l,
          n,
          u
        );
    }
  }
  function $p(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Sf(l);
      } catch (u) {
        $t(n, n.return, u);
      }
    }
  }
  function Hy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Sf(l);
      } catch (u) {
        $t(n, n.return, u);
      }
  }
  function Xs(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Uy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Uy()), n;
      default:
        throw Error(N(435, l.tag));
    }
  }
  function Qs(l, n) {
    var u = Xs(l);
    n.forEach(function(i) {
      if (!u.has(i)) {
        u.add(i);
        var s = yv.bind(null, l, i);
        i.then(s, s);
      }
    });
  }
  function wl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var i = 0; i < u.length; i++) {
        var s = u[i], r = l, m = n, v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Rn(v.type)) {
                ce = v.stateNode, Jl = !1;
                break t;
              }
              break;
            case 5:
              ce = v.stateNode, Jl = !1;
              break t;
            case 3:
            case 4:
              ce = v.stateNode.containerInfo, Jl = !0;
              break t;
          }
          v = v.return;
        }
        if (ce === null) throw Error(N(160));
        _y(r, m, s), ce = null, Jl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        wd(n, l), n = n.sibling;
  }
  var yt = null;
  function wd(l, n) {
    var u = l.alternate, i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        wl(n, l), oa(l), i & 4 && (Ca(3, l, l.return), Fa(3, l), Ca(5, l, l.return));
        break;
      case 1:
        wl(n, l), oa(l), i & 512 && (je || u === null || An(u, u.return)), i & 64 && Ku && (l = l.updateQueue, l !== null && (i = l.callbacks, i !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? i : u.concat(i))));
        break;
      case 26:
        var s = yt;
        if (wl(n, l), oa(l), i & 512 && (je || u === null || An(u, u.return)), i & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (i = l.memoizedState, u === null)
            if (i === null)
              if (l.stateNode === null) {
                t: {
                  i = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  e: switch (i) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Xn] || r[kt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(i), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), Sl(r, i, u), r[kt] = l, Lt(r), i = r;
                      break t;
                    case "link":
                      var m = u0(
                        "link",
                        "href",
                        s
                      ).get(i + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      r = s.createElement(i), Sl(r, i, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = u0(
                        "meta",
                        "content",
                        s
                      ).get(i + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (r = m[v], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      r = s.createElement(i), Sl(r, i, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(N(468, i));
                  }
                  r[kt] = l, Lt(r), i = r;
                }
                l.stateNode = i;
              } else
                vh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = n0(
                s,
                i,
                l.memoizedProps
              );
          else
            r !== i ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, i === null ? vh(
              s,
              l.type,
              l.stateNode
            ) : n0(
              s,
              i,
              l.memoizedProps
            )) : i === null && l.stateNode !== null && Ld(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        wl(n, l), oa(l), i & 512 && (je || u === null || An(u, u.return)), u !== null && i & 4 && Ld(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (wl(n, l), oa(l), i & 512 && (je || u === null || An(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Vn(s, "");
          } catch (W) {
            $t(l, l.return, W);
          }
        }
        i & 4 && l.stateNode != null && (s = l.memoizedProps, Ld(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), i & 1024 && (Jd = !0);
        break;
      case 6:
        if (wl(n, l), oa(l), i & 4) {
          if (l.stateNode === null)
            throw Error(N(162));
          i = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = i;
          } catch (W) {
            $t(l, l.return, W);
          }
        }
        break;
      case 3:
        if (mf = null, s = yt, yt = Rl(n.containerInfo), wl(n, l), yt = s, oa(l), i & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Sf(n.containerInfo);
          } catch (W) {
            $t(l, l.return, W);
          }
        Jd && (Jd = !1, By(l));
        break;
      case 4:
        i = yt, yt = Rl(
          l.stateNode.containerInfo
        ), wl(n, l), oa(l), yt = i;
        break;
      case 12:
        wl(n, l), oa(l);
        break;
      case 31:
        wl(n, l), oa(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Qs(l, i)));
        break;
      case 13:
        wl(n, l), oa(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Mn = vl()), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Qs(l, i)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, U = Ku, Y = je;
        if (Ku = U || s, je = Y || T, wl(n, l), je = Y, Ku = U, oa(l), i & 8192)
          t: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || T || Ku || je || Ni(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (r = T.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = T.stateNode;
                    var j = T.memoizedProps.style, C = j != null && j.hasOwnProperty("display") ? j.display : null;
                    v.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (W) {
                  $t(T, T.return, W);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (W) {
                  $t(T, T.return, W);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var q = T.stateNode;
                  s ? qe(q, !0) : qe(T.stateNode, !1);
                } catch (W) {
                  $t(T, T.return, W);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break t;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        i & 4 && (i = l.updateQueue, i !== null && (u = i.retryQueue, u !== null && (i.retryQueue = null, Qs(l, u))));
        break;
      case 19:
        wl(n, l), oa(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, Qs(l, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        wl(n, l), oa(l);
    }
  }
  function oa(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, i = l.return; i !== null; ) {
          if (My(i)) {
            u = i;
            break;
          }
          i = i.return;
        }
        if (u == null) throw Error(N(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Lo(l);
            wo(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Vn(m, ""), u.flags &= -33);
            var v = Lo(l);
            wo(l, v, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, U = Lo(l);
            Jo(
              l,
              U,
              T
            );
            break;
          default:
            throw Error(N(161));
        }
      } catch (Y) {
        $t(l, l.return, Y);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function By(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        By(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function $u(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        js(l, n.alternate, n), n = n.sibling;
  }
  function Ni(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ca(4, n, n.return), Ni(n);
          break;
        case 1:
          An(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Yc(
            n,
            n.return,
            u
          ), Ni(n);
          break;
        case 27:
          Vi(n.stateNode);
        case 26:
        case 5:
          An(n, n.return), Ni(n);
          break;
        case 22:
          n.memoizedState === null && Ni(n);
          break;
        case 30:
          Ni(n);
          break;
        default:
          Ni(n);
      }
      l = l.sibling;
    }
  }
  function zn(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          zn(
            s,
            r,
            u
          ), Fa(4, r);
          break;
        case 1:
          if (zn(
            s,
            r,
            u
          ), i = r, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (U) {
              $t(i, i.return, U);
            }
          if (i = r, s = i.updateQueue, s !== null) {
            var v = i.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  vd(T[s], v);
            } catch (U) {
              $t(i, i.return, U);
            }
          }
          u && m & 64 && Zd(r), cu(r, r.return);
          break;
        case 27:
          Ry(r);
        case 26:
        case 5:
          zn(
            s,
            r,
            u
          ), u && i === null && m & 4 && Oy(r), cu(r, r.return);
          break;
        case 12:
          zn(
            s,
            r,
            u
          );
          break;
        case 31:
          zn(
            s,
            r,
            u
          ), u && m & 4 && $p(s, r);
          break;
        case 13:
          zn(
            s,
            r,
            u
          ), u && m & 4 && Hy(s, r);
          break;
        case 22:
          r.memoizedState === null && zn(
            s,
            r,
            u
          ), cu(r, r.return);
          break;
        case 30:
          break;
        default:
          zn(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Kd(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && ys(u));
  }
  function $d(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && ys(l));
  }
  function ka(l, n, u, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        $o(
          l,
          n,
          u,
          i
        ), n = n.sibling;
  }
  function $o(l, n, u, i) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ka(
          l,
          n,
          u,
          i
        ), s & 2048 && Fa(9, n);
        break;
      case 1:
        ka(
          l,
          n,
          u,
          i
        );
        break;
      case 3:
        ka(
          l,
          n,
          u,
          i
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && ys(l)));
        break;
      case 12:
        if (s & 2048) {
          ka(
            l,
            n,
            u,
            i
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, v = r.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (T) {
            $t(n, n.return, T);
          }
        } else
          ka(
            l,
            n,
            u,
            i
          );
        break;
      case 31:
        ka(
          l,
          n,
          u,
          i
        );
        break;
      case 13:
        ka(
          l,
          n,
          u,
          i
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? ka(
          l,
          n,
          u,
          i
        ) : Vs(l, n) : r._visibility & 2 ? ka(
          l,
          n,
          u,
          i
        ) : (r._visibility |= 2, Wo(
          l,
          n,
          u,
          i,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && Kd(m, n);
        break;
      case 24:
        ka(
          l,
          n,
          u,
          i
        ), s & 2048 && $d(n.alternate, n);
        break;
      default:
        ka(
          l,
          n,
          u,
          i
        );
    }
  }
  function Wo(l, n, u, i, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, v = u, T = i, U = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Wo(
            r,
            m,
            v,
            T,
            s
          ), Fa(8, m);
          break;
        case 23:
          break;
        case 22:
          var Y = m.stateNode;
          m.memoizedState !== null ? Y._visibility & 2 ? Wo(
            r,
            m,
            v,
            T,
            s
          ) : Vs(
            r,
            m
          ) : (Y._visibility |= 2, Wo(
            r,
            m,
            v,
            T,
            s
          )), s && U & 2048 && Kd(
            m.alternate,
            m
          );
          break;
        case 24:
          Wo(
            r,
            m,
            v,
            T,
            s
          ), s && U & 2048 && $d(m.alternate, m);
          break;
        default:
          Wo(
            r,
            m,
            v,
            T,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Vs(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, i = n, s = i.flags;
        switch (i.tag) {
          case 22:
            Vs(u, i), s & 2048 && Kd(
              i.alternate,
              i
            );
            break;
          case 24:
            Vs(u, i), s & 2048 && $d(i.alternate, i);
            break;
          default:
            Vs(u, i);
        }
        n = n.sibling;
      }
  }
  var fa = 8192;
  function ou(l, n, u) {
    if (l.subtreeFlags & fa)
      for (l = l.child; l !== null; )
        Wp(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function Wp(l, n, u) {
    switch (l.tag) {
      case 26:
        ou(
          l,
          n,
          u
        ), l.flags & fa && l.memoizedState !== null && hu(
          u,
          yt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ou(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var i = yt;
        yt = Rl(l.stateNode.containerInfo), ou(
          l,
          n,
          u
        ), yt = i;
        break;
      case 22:
        l.memoizedState === null && (i = l.alternate, i !== null && i.memoizedState !== null ? (i = fa, fa = 16777216, ou(
          l,
          n,
          u
        ), fa = i) : ou(
          l,
          n,
          u
        ));
        break;
      default:
        ou(
          l,
          n,
          u
        );
    }
  }
  function Wd(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Fo(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          ul = i, Fd(
            i,
            l
          );
        }
      Wd(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        qy(l), l = l.sibling;
  }
  function qy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Fo(l), l.flags & 2048 && Ca(9, l, l.return);
        break;
      case 3:
        Fo(l);
        break;
      case 12:
        Fo(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Zs(l)) : Fo(l);
        break;
      default:
        Fo(l);
    }
  }
  function Zs(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          ul = i, Fd(
            i,
            l
          );
        }
      Wd(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Ca(8, n, n.return), Zs(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Zs(n));
          break;
        default:
          Zs(n);
      }
      l = l.sibling;
    }
  }
  function Fd(l, n) {
    for (; ul !== null; ) {
      var u = ul;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ca(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var i = u.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          ys(u.memoizedState.cache);
      }
      if (i = u.child, i !== null) i.return = u, ul = i;
      else
        t: for (u = l; ul !== null; ) {
          i = ul;
          var s = i.sibling, r = i.return;
          if (Cy(i), i === u) {
            ul = null;
            break t;
          }
          if (s !== null) {
            s.return = r, ul = s;
            break t;
          }
          ul = r;
        }
    }
  }
  var Fp = {
    getCacheForType: function(l) {
      var n = X(_e), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return X(_e).controller.signal;
    }
  }, Ny = typeof WeakMap == "function" ? WeakMap : Map, jt = 0, Pt = null, Mt = null, Et = 0, Kt = 0, ut = null, fu = !1, xc = !1, kd = !1, Dn = 0, ie = 0, On = 0, Yi = 0, Id = 0, Kl = 0, be = 0, Ls = null, Te = null, Pd = !1, Mn = 0, Yy = 0, Vt = 1 / 0, ko = null, me = null, we = 0, Wu = null, Gc = null, su = 0, sa = 0, th = null, eh = null, Io = 0, Js = null;
  function ra() {
    return (jt & 2) !== 0 && Et !== 0 ? Et & -Et : O.T !== null ? ch() : jr();
  }
  function kp() {
    if (Kl === 0)
      if ((Et & 536870912) === 0 || Ot) {
        var l = un;
        un <<= 1, (un & 3932160) === 0 && (un = 262144), Kl = l;
      } else Kl = 536870912;
    return l = Ql.current, l !== null && (l.flags |= 32), Kl;
  }
  function $l(l, n, u) {
    (l === Pt && (Kt === 2 || Kt === 9) || l.cancelPendingCommit !== null) && (ru(l, 0), Fu(
      l,
      Et,
      Kl,
      !1
    )), so(l, u), ((jt & 2) === 0 || l !== Pt) && (l === Pt && ((jt & 2) === 0 && (Yi |= u), ie === 4 && Fu(
      l,
      Et,
      Kl,
      !1
    )), du(l));
  }
  function Ip(l, n, u) {
    if ((jt & 6) !== 0) throw Error(N(327));
    var i = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || cn(l, n), s = i ? av(l, n) : ah(l, n, !0), r = i;
    do {
      if (s === 0) {
        xc && !i && Fu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !Pp(u)) {
          s = ah(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            t: {
              var v = l;
              s = Ls;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (ru(v, m).flags |= 256), m = ah(
                v,
                m,
                !1
              ), m !== 2) {
                if (kd && !T) {
                  v.errorRecoveryDisabledLanes |= r, Yi |= r, s = 4;
                  break t;
                }
                r = Te, Te = s, r !== null && (Te === null ? Te = r : Te.push.apply(
                  Te,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          ru(l, 0), Fu(l, n, 0, !0);
          break;
        }
        t: {
          switch (i = l, r = s, r) {
            case 0:
            case 1:
              throw Error(N(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Fu(
                i,
                n,
                Kl,
                !fu
              );
              break t;
            case 2:
              Te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(N(329));
          }
          if ((n & 62914560) === n && (s = Mn + 300 - vl(), 10 < s)) {
            if (Fu(
              i,
              n,
              Kl,
              !fu
            ), Ue(i, 0, !0) !== 0) break t;
            su = n, i.timeoutHandle = er(
              ws.bind(
                null,
                i,
                u,
                Te,
                ko,
                Pd,
                n,
                Kl,
                Yi,
                be,
                fu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          ws(
            i,
            u,
            Te,
            ko,
            Pd,
            n,
            Kl,
            Yi,
            be,
            fu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    du(l);
  }
  function ws(l, n, u, i, s, r, m, v, T, U, Y, j, C, q) {
    if (l.timeoutHandle = -1, j = n.subtreeFlags, j & 8192 || (j & 16785408) === 16785408) {
      j = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: fn
      }, Wp(
        n,
        r,
        j
      );
      var W = (r & 62914560) === r ? Mn - vl() : (r & 4194048) === r ? Yy - vl() : 0;
      if (W = i0(
        j,
        W
      ), W !== null) {
        su = r, l.cancelPendingCommit = W(
          iv.bind(
            null,
            l,
            n,
            r,
            u,
            i,
            s,
            m,
            v,
            T,
            Y,
            j,
            null,
            C,
            q
          )
        ), Fu(l, r, m, !U);
        return;
      }
    }
    iv(
      l,
      n,
      r,
      u,
      i,
      s,
      m,
      v,
      T
    );
  }
  function Pp(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var i = 0; i < u.length; i++) {
          var s = u[i], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Ol(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Fu(l, n, u, i) {
    n &= ~Id, n &= ~Yi, l.suspendedLanes |= n, l.pingedLanes &= ~n, i && (l.warmLanes |= n), i = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - ql(s), m = 1 << r;
      i[r] = -1, s &= ~m;
    }
    u !== 0 && $f(l, u, n);
  }
  function Po() {
    return (jt & 6) === 0 ? (Iu(0), !1) : !0;
  }
  function xy() {
    if (Mt !== null) {
      if (Kt === 0)
        var l = Mt.return;
      else
        l = Mt, gn = ju = null, Ds(l), Dc = null, zi = 0, l = Mt;
      for (; l !== null; )
        Kp(l.alternate, l), l = l.return;
      Mt = null;
    }
  }
  function ru(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Av(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), su = 0, xy(), Pt = l, Mt = u = xu(l.current, null), Et = n, Kt = 0, ut = null, fu = !1, xc = cn(l, n), kd = !1, be = Kl = Id = Yi = On = ie = 0, Te = Ls = null, Pd = !1, (n & 8) !== 0 && (n |= n & 32);
    var i = l.entangledLanes;
    if (i !== 0)
      for (l = l.entanglements, i &= n; 0 < i; ) {
        var s = 31 - ql(i), r = 1 << s;
        n |= l[s], i &= ~r;
      }
    return Dn = n, Sa(), u;
  }
  function tf(l, n) {
    mt = null, O.H = Bs, n === Ec || n === _o ? (n = wm(), Kt = 3) : n === Ei ? (n = wm(), Kt = 4) : Kt = n === Gd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, ut = n, Mt === null && (ie = 1, Vo(
      l,
      Ta(n, l.current)
    ));
  }
  function tv() {
    var l = Ql.current;
    return l === null ? !0 : (Et & 4194048) === Et ? Oa === null : (Et & 62914560) === Et || (Et & 536870912) !== 0 ? l === Oa : !1;
  }
  function ev() {
    var l = O.H;
    return O.H = Bs, l === null ? Bs : l;
  }
  function lv() {
    var l = O.A;
    return O.A = Fp, l;
  }
  function lh() {
    ie = 4, fu || (Et & 4194048) !== Et && Ql.current !== null || (xc = !0), (On & 134217727) === 0 && (Yi & 134217727) === 0 || Pt === null || Fu(
      Pt,
      Et,
      Kl,
      !1
    );
  }
  function ah(l, n, u) {
    var i = jt;
    jt |= 2;
    var s = ev(), r = lv();
    (Pt !== l || Et !== n) && (ko = null, ru(l, n)), n = !1;
    var m = ie;
    t: do
      try {
        if (Kt !== 0 && Mt !== null) {
          var v = Mt, T = ut;
          switch (Kt) {
            case 8:
              xy(), m = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ql.current === null && (n = !0);
              var U = Kt;
              if (Kt = 0, ut = null, xi(l, v, T, U), u && xc) {
                m = 0;
                break t;
              }
              break;
            default:
              U = Kt, Kt = 0, ut = null, xi(l, v, T, U);
          }
        }
        Lg(), m = ie;
        break;
      } catch (Y) {
        tf(l, Y);
      }
    while (!0);
    return n && l.shellSuspendCounter++, gn = ju = null, jt = i, O.H = s, O.A = r, Mt === null && (Pt = null, Et = 0, Sa()), m;
  }
  function Lg() {
    for (; Mt !== null; ) nv(Mt);
  }
  function av(l, n) {
    var u = jt;
    jt |= 2;
    var i = ev(), s = lv();
    Pt !== l || Et !== n ? (ko = null, Vt = vl() + 500, ru(l, n)) : xc = cn(
      l,
      n
    );
    t: do
      try {
        if (Kt !== 0 && Mt !== null) {
          n = Mt;
          var r = ut;
          e: switch (Kt) {
            case 1:
              Kt = 0, ut = null, xi(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Lm(r)) {
                Kt = 0, ut = null, uv(n);
                break;
              }
              n = function() {
                Kt !== 2 && Kt !== 9 || Pt !== l || (Kt = 7), du(l);
              }, r.then(n, n);
              break t;
            case 3:
              Kt = 7;
              break t;
            case 4:
              Kt = 5;
              break t;
            case 7:
              Lm(r) ? (Kt = 0, ut = null, uv(n)) : (Kt = 0, ut = null, xi(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (Mt.tag) {
                case 26:
                  m = Mt.memoizedState;
                case 5:
                case 27:
                  var v = Mt;
                  if (m ? ha(m) : v.stateNode.complete) {
                    Kt = 0, ut = null;
                    var T = v.sibling;
                    if (T !== null) Mt = T;
                    else {
                      var U = v.return;
                      U !== null ? (Mt = U, Ks(U)) : Mt = null;
                    }
                    break e;
                  }
              }
              Kt = 0, ut = null, xi(l, n, r, 5);
              break;
            case 6:
              Kt = 0, ut = null, xi(l, n, r, 6);
              break;
            case 8:
              xy(), ie = 6;
              break t;
            default:
              throw Error(N(462));
          }
        }
        jc();
        break;
      } catch (Y) {
        tf(l, Y);
      }
    while (!0);
    return gn = ju = null, O.H = i, O.A = s, jt = u, Mt !== null ? 0 : (Pt = null, Et = 0, Sa(), ie);
  }
  function jc() {
    for (; Mt !== null && !Ic(); )
      nv(Mt);
  }
  function nv(l) {
    var n = Ay(l.alternate, l, Dn);
    l.memoizedProps = l.pendingProps, n === null ? Ks(l) : Mt = n;
  }
  function uv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = qc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Et
        );
        break;
      case 11:
        n = qc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Et
        );
        break;
      case 5:
        Ds(n);
      default:
        Kp(u, n), n = Mt = xm(n, Dn), n = Ay(u, n, Dn);
    }
    l.memoizedProps = l.pendingProps, n === null ? Ks(l) : Mt = n;
  }
  function xi(l, n, u, i) {
    gn = ju = null, Ds(n), Dc = null, zi = 0;
    var s = n.return;
    try {
      if (Zg(
        l,
        s,
        n,
        u,
        Et
      )) {
        ie = 1, Vo(
          l,
          Ta(u, l.current)
        ), Mt = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw Mt = s, r;
      ie = 1, Vo(
        l,
        Ta(u, l.current)
      ), Mt = null;
      return;
    }
    n.flags & 32768 ? (Ot || i === 1 ? l = !0 : xc || (Et & 536870912) !== 0 ? l = !1 : (fu = l = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = Ql.current, i !== null && i.tag === 13 && (i.flags |= 16384))), cv(n, l)) : Ks(n);
  }
  function Ks(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        cv(
          n,
          fu
        );
        return;
      }
      l = n.return;
      var u = Jp(
        n.alternate,
        n,
        Dn
      );
      if (u !== null) {
        Mt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Mt = n;
        return;
      }
      Mt = n = l;
    } while (n !== null);
    ie === 0 && (ie = 5);
  }
  function cv(l, n) {
    do {
      var u = wp(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Mt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Mt = l;
        return;
      }
      Mt = l = u;
    } while (l !== null);
    ie = 6, Mt = null;
  }
  function iv(l, n, u, i, s, r, m, v, T) {
    l.cancelPendingCommit = null;
    do
      ef();
    while (we !== 0);
    if ((jt & 6) !== 0) throw Error(N(327));
    if (n !== null) {
      if (n === l.current) throw Error(N(177));
      if (r = n.lanes | n.childLanes, r |= Ja, xr(
        l,
        u,
        r,
        m,
        v,
        T
      ), l === Pt && (Mt = Pt = null, Et = 0), Gc = n, Wu = l, su = u, sa = r, th = s, eh = i, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, pv(oc, function() {
        return dv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), i = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || i) {
        i = O.T, O.T = null, s = Q.p, Q.p = 2, m = jt, jt |= 4;
        try {
          Ko(l, n, u);
        } finally {
          jt = m, Q.p = s, O.T = i;
        }
      }
      we = 1, ov(), fv(), sv();
    }
  }
  function ov() {
    if (we === 1) {
      we = 0;
      var l = Wu, n = Gc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = jt;
        jt |= 4;
        try {
          wd(n, l);
          var r = dh, m = vc(l.containerInfo), v = r.focusedElem, T = r.selectionRange;
          if (m !== v && v && v.ownerDocument && mi(
            v.ownerDocument.documentElement,
            v
          )) {
            if (T !== null && us(v)) {
              var U = T.start, Y = T.end;
              if (Y === void 0 && (Y = U), "selectionStart" in v)
                v.selectionStart = U, v.selectionEnd = Math.min(
                  Y,
                  v.value.length
                );
              else {
                var j = v.ownerDocument || document, C = j && j.defaultView || window;
                if (C.getSelection) {
                  var q = C.getSelection(), W = v.textContent.length, lt = Math.min(T.start, W), ee = T.end === void 0 ? lt : Math.min(T.end, W);
                  !q.extend && lt > ee && (m = ee, ee = lt, lt = m);
                  var M = Nm(
                    v,
                    lt
                  ), z = Nm(
                    v,
                    ee
                  );
                  if (M && z && (q.rangeCount !== 1 || q.anchorNode !== M.node || q.anchorOffset !== M.offset || q.focusNode !== z.node || q.focusOffset !== z.offset)) {
                    var R = j.createRange();
                    R.setStart(M.node, M.offset), q.removeAllRanges(), lt > ee ? (q.addRange(R), q.extend(z.node, z.offset)) : (R.setEnd(z.node, z.offset), q.addRange(R));
                  }
                }
              }
            }
            for (j = [], q = v; q = q.parentNode; )
              q.nodeType === 1 && j.push({
                element: q,
                left: q.scrollLeft,
                top: q.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < j.length; v++) {
              var G = j[v];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          Ke = !!rh, dh = rh = null;
        } finally {
          jt = s, Q.p = i, O.T = u;
        }
      }
      l.current = n, we = 2;
    }
  }
  function fv() {
    if (we === 2) {
      we = 0;
      var l = Wu, n = Gc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var i = Q.p;
        Q.p = 2;
        var s = jt;
        jt |= 4;
        try {
          js(l, n.alternate, n);
        } finally {
          jt = s, Q.p = i, O.T = u;
        }
      }
      we = 3;
    }
  }
  function sv() {
    if (we === 4 || we === 3) {
      we = 0, qr();
      var l = Wu, n = Gc, u = su, i = eh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? we = 5 : (we = 0, Gc = Wu = null, rv(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (me = null), fm(u), n = n.stateNode, ua && typeof ua.onCommitFiberRoot == "function")
        try {
          ua.onCommitFiberRoot(
            Pc,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        n = O.T, s = Q.p, Q.p = 2, O.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < i.length; m++) {
            var v = i[m];
            r(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          O.T = n, Q.p = s;
        }
      }
      (su & 3) !== 0 && ef(), du(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === Js ? Io++ : (Io = 0, Js = l) : Io = 0, Iu(0);
    }
  }
  function rv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, ys(n)));
  }
  function ef() {
    return ov(), fv(), sv(), dv();
  }
  function dv() {
    if (we !== 5) return !1;
    var l = Wu, n = sa;
    sa = 0;
    var u = fm(su), i = O.T, s = Q.p;
    try {
      Q.p = 32 > u ? 32 : u, O.T = null, u = th, th = null;
      var r = Wu, m = su;
      if (we = 0, Gc = Wu = null, su = 0, (jt & 6) !== 0) throw Error(N(331));
      var v = jt;
      if (jt |= 4, qy(r.current), $o(
        r,
        r.current,
        m,
        u
      ), jt = v, Iu(0, !1), ua && typeof ua.onPostCommitFiberRoot == "function")
        try {
          ua.onPostCommitFiberRoot(Pc, r);
        } catch {
        }
      return !0;
    } finally {
      Q.p = s, O.T = i, rv(l, n);
    }
  }
  function hv(l, n, u) {
    n = Ta(u, n), n = my(l.stateNode, n, 2), l = Da(l, n, 2), l !== null && (so(l, 2), du(l));
  }
  function $t(l, n, u) {
    if (l.tag === 3)
      hv(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          hv(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (me === null || !me.has(i))) {
            l = Ta(u, l), u = yy(2), i = Da(n, u, 2), i !== null && (py(
              u,
              i,
              n,
              l
            ), so(i, 2), du(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function $s(l, n, u) {
    var i = l.pingCache;
    if (i === null) {
      i = l.pingCache = new Ny();
      var s = /* @__PURE__ */ new Set();
      i.set(n, s);
    } else
      s = i.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(n, s));
    s.has(u) || (kd = !0, s.add(u), l = Gy.bind(null, l, n, u), n.then(l, l));
  }
  function Gy(l, n, u) {
    var i = l.pingCache;
    i !== null && i.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Pt === l && (Et & u) === u && (ie === 4 || ie === 3 && (Et & 62914560) === Et && 300 > vl() - Mn ? (jt & 2) === 0 && ru(l, 0) : Id |= u, be === Et && (be = 0)), du(l);
  }
  function mv(l, n) {
    n === 0 && (n = ti()), l = Yu(l, n), l !== null && (so(l, n), du(l));
  }
  function _a(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), mv(l, u);
  }
  function yv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var i = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        i = l.stateNode;
        break;
      case 22:
        i = l.stateNode._retryCache;
        break;
      default:
        throw Error(N(314));
    }
    i !== null && i.delete(n), mv(l, u);
  }
  function pv(l, n) {
    return ne(l, n);
  }
  var lf = null, Gi = null, jy = !1, nh = !1, Xy = !1, ku = 0;
  function du(l) {
    l !== Gi && l.next === null && (Gi === null ? lf = Gi = l : Gi = Gi.next = l), nh = !0, jy || (jy = !0, Fs());
  }
  function Iu(l, n) {
    if (!Xy && nh) {
      Xy = !0;
      do
        for (var u = !1, i = lf; i !== null; ) {
          if (l !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = i.suspendedLanes, v = i.pingedLanes;
              r = (1 << 31 - ql(42 | l) + 1) - 1, r &= s & ~(m & ~v), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, ji(i, r));
          } else
            r = Et, r = Ue(
              i,
              i === Pt ? r : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (r & 3) === 0 || cn(i, r) || (u = !0, ji(i, r));
          i = i.next;
        }
      while (u);
      Xy = !1;
    }
  }
  function uh() {
    Qy();
  }
  function Qy() {
    nh = jy = !1;
    var l = 0;
    ku !== 0 && Jg() && (l = ku);
    for (var n = vl(), u = null, i = lf; i !== null; ) {
      var s = i.next, r = Vy(i, n);
      r === 0 ? (i.next = null, u === null ? lf = s : u.next = s, s === null && (Gi = u)) : (u = i, (l !== 0 || (r & 3) !== 0) && (nh = !0)), i = s;
    }
    we !== 0 && we !== 5 || Iu(l), ku !== 0 && (ku = 0);
  }
  function Vy(l, n) {
    for (var u = l.suspendedLanes, i = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - ql(r), v = 1 << m, T = s[m];
      T === -1 ? ((v & u) === 0 || (v & i) !== 0) && (s[m] = fo(v, n)) : T <= n && (l.expiredLanes |= v), r &= ~v;
    }
    if (n = Pt, u = Et, u = Ue(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i = l.callbackNode, u === 0 || l === n && (Kt === 2 || Kt === 9) || l.cancelPendingCommit !== null)
      return i !== null && i !== null && cm(i), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || cn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (i !== null && cm(i), fm(u)) {
        case 2:
        case 8:
          u = Yr;
          break;
        case 32:
          u = oc;
          break;
        case 268435456:
          u = im;
          break;
        default:
          u = oc;
      }
      return i = Ws.bind(null, l), u = ne(u, i), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return i !== null && i !== null && cm(i), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Ws(l, n) {
    if (we !== 0 && we !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (ef() && l.callbackNode !== u)
      return null;
    var i = Et;
    return i = Ue(
      l,
      l === Pt ? i : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i === 0 ? null : (Ip(l, i, n), Vy(l, vl()), l.callbackNode != null && l.callbackNode === u ? Ws.bind(null, l) : null);
  }
  function ji(l, n) {
    if (ef()) return null;
    Ip(l, n, !0);
  }
  function Fs() {
    zv(function() {
      (jt & 6) !== 0 ? ne(
        Nr,
        uh
      ) : Qy();
    });
  }
  function ch() {
    if (ku === 0) {
      var l = Tc;
      l === 0 && (l = _u, _u <<= 1, (_u & 261888) === 0 && (_u = 256)), ku = l;
    }
    return ku;
  }
  function vv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Qa("" + l);
  }
  function Xi(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function ks(l, n, u, i, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = vv(
        (s[Nl] || null).action
      ), m = i.submitter;
      m && (n = (n = m[Nl] || null) ? vv(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var v = new ls(
        "action",
        "action",
        null,
        i,
        s
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (ku !== 0) {
                  var T = m ? Xi(s, m) : new FormData(s);
                  Xo(
                    u,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: r
                    },
                    null,
                    T
                  );
                }
              } else
                typeof r == "function" && (v.preventDefault(), T = m ? Xi(s, m) : new FormData(s), Xo(
                  u,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: r
                  },
                  r,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var ih = 0; ih < Do.length; ih++) {
    var af = Do[ih], Zy = af.toLowerCase(), Ly = af[0].toUpperCase() + af.slice(1);
    xl(
      Zy,
      "on" + Ly
    );
  }
  xl(is, "onAnimationEnd"), xl(Ym, "onAnimationIteration"), xl(id, "onAnimationStart"), xl("dblclick", "onDoubleClick"), xl("focusin", "onFocus"), xl("focusout", "onBlur"), xl(yi, "onTransitionRun"), xl(os, "onTransitionStart"), xl(wn, "onTransitionCancel"), xl(Rp, "onTransitionEnd"), Qn("onMouseEnter", ["mouseout", "mouseover"]), Qn("onMouseLeave", ["mouseout", "mouseover"]), Qn("onPointerEnter", ["pointerout", "pointerover"]), Qn("onPointerLeave", ["pointerout", "pointerover"]), dc(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), dc(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), dc("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), dc(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), dc(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), dc(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var nf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), gv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nf)
  );
  function Sv(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var i = l[u], s = i.event;
      i = i.listeners;
      t: {
        var r = void 0;
        if (n)
          for (var m = i.length - 1; 0 <= m; m--) {
            var v = i[m], T = v.instance, U = v.currentTarget;
            if (v = v.listener, T !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = U;
            try {
              r(s);
            } catch (Y) {
              pi(Y);
            }
            s.currentTarget = null, r = T;
          }
        else
          for (m = 0; m < i.length; m++) {
            if (v = i[m], T = v.instance, U = v.currentTarget, v = v.listener, T !== r && s.isPropagationStopped())
              break t;
            r = v, s.currentTarget = U;
            try {
              r(s);
            } catch (Y) {
              pi(Y);
            }
            s.currentTarget = null, r = T;
          }
      }
    }
  }
  function Dt(l, n) {
    var u = n[Xr];
    u === void 0 && (u = n[Xr] = /* @__PURE__ */ new Set());
    var i = l + "__bubble";
    u.has(i) || (Is(n, l, 2, !1), u.add(i));
  }
  function Jy(l, n, u) {
    var i = 0;
    n && (i |= 4), Is(
      u,
      l,
      i,
      n
    );
  }
  var oh = "_reactListening" + Math.random().toString(36).slice(2);
  function uf(l) {
    if (!l[oh]) {
      l[oh] = !0, ni.forEach(function(u) {
        u !== "selectionchange" && (gv.has(u) || Jy(u, !1, l), Jy(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[oh] || (n[oh] = !0, Jy("selectionchange", !1, n));
    }
  }
  function Is(l, n, u, i) {
    switch (ir(n)) {
      case 2:
        var s = mu;
        break;
      case 8:
        s = yu;
        break;
      default:
        s = bl;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ts || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), i ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function wy(l, n, u, i, s) {
    var r = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      t: for (; ; ) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var v = i.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = ei(v), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              i = r = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    gm(function() {
      var U = r, Y = $r(u), j = [];
      t: {
        var C = Kn.get(l);
        if (C !== void 0) {
          var q = ls, W = l;
          switch (l) {
            case "keypress":
              if (Fr(u) === 0) break t;
            case "keydown":
            case "keyup":
              q = td;
              break;
            case "focusin":
              W = "focus", q = Ir;
              break;
            case "focusout":
              W = "blur", q = Ir;
              break;
            case "beforeblur":
            case "afterblur":
              q = Ir;
              break;
            case "click":
              if (u.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              q = bo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              q = pp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              q = Tp;
              break;
            case is:
            case Ym:
            case id:
              q = gp;
              break;
            case Rp:
              q = jg;
              break;
            case "scroll":
            case "scrollend":
              q = xg;
              break;
            case "wheel":
              q = Xg;
              break;
            case "copy":
            case "cut":
            case "paste":
              q = oi;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              q = dn;
              break;
            case "toggle":
            case "beforetoggle":
              q = Mm;
          }
          var lt = (n & 4) !== 0, ee = !lt && (l === "scroll" || l === "scrollend"), M = lt ? C !== null ? C + "Capture" : null : C;
          lt = [];
          for (var z = U, R; z !== null; ) {
            var G = z;
            if (R = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || R === null || M === null || (G = Pe(z, M), G != null && lt.push(
              Ps(z, G, R)
            )), ee) break;
            z = z.return;
          }
          0 < lt.length && (C = new q(
            C,
            W,
            null,
            u,
            Y
          ), j.push({ event: C, listeners: lt }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (C = l === "mouseover" || l === "pointerover", q = l === "mouseout" || l === "pointerout", C && u !== Kr && (W = u.relatedTarget || u.fromElement) && (ei(W) || W[sc]))
            break t;
          if ((q || C) && (C = Y.window === Y ? Y : (C = Y.ownerDocument) ? C.defaultView || C.parentWindow : window, q ? (W = u.relatedTarget || u.toElement, q = U, W = W ? ei(W) : null, W !== null && (ee = ya(W), lt = W.tag, W !== ee || lt !== 5 && lt !== 27 && lt !== 6) && (W = null)) : (q = null, W = U), q !== W)) {
            if (lt = bo, G = "onMouseLeave", M = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (lt = dn, G = "onPointerLeave", M = "onPointerEnter", z = "pointer"), ee = q == null ? C : ro(q), R = W == null ? C : ro(W), C = new lt(
              G,
              z + "leave",
              q,
              u,
              Y
            ), C.target = ee, C.relatedTarget = R, G = null, ei(Y) === U && (lt = new lt(
              M,
              z + "enter",
              W,
              u,
              Y
            ), lt.target = R, lt.relatedTarget = ee, G = lt), ee = G, q && W)
              e: {
                for (lt = bv, M = q, z = W, R = 0, G = M; G; G = lt(G))
                  R++;
                G = 0;
                for (var P = z; P; P = lt(P))
                  G++;
                for (; 0 < R - G; )
                  M = lt(M), R--;
                for (; 0 < G - R; )
                  z = lt(z), G--;
                for (; R--; ) {
                  if (M === z || z !== null && M === z.alternate) {
                    lt = M;
                    break e;
                  }
                  M = lt(M), z = lt(z);
                }
                lt = null;
              }
            else lt = null;
            q !== null && fh(
              j,
              C,
              q,
              lt,
              !1
            ), W !== null && ee !== null && fh(
              j,
              ee,
              W,
              lt,
              !0
            );
          }
        }
        t: {
          if (C = U ? ro(U) : window, q = C.nodeName && C.nodeName.toLowerCase(), q === "select" || q === "input" && C.type === "file")
            var Yt = Hm;
          else if (Jn(C))
            if (ad)
              Yt = hi;
            else {
              Yt = Op;
              var F = Dp;
            }
          else
            q = C.nodeName, !q || q.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? U && vm(U.elementType) && (Yt = Hm) : Yt = pc;
          if (Yt && (Yt = Yt(l, U))) {
            _m(
              j,
              Yt,
              u,
              Y
            );
            break t;
          }
          F && F(l, C, U), l === "focusout" && U && C.type === "number" && U.memoizedProps.value != null && ui(C, "number", C.value);
        }
        switch (F = U ? ro(U) : window, l) {
          case "focusin":
            (Jn(F) || F.contentEditable === "true") && (gc = F, Ao = U, La = null);
            break;
          case "focusout":
            La = Ao = gc = null;
            break;
          case "mousedown":
            mn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mn = !1, cd(j, u, Y);
            break;
          case "selectionchange":
            if (cs) break;
          case "keydown":
          case "keyup":
            cd(j, u, Y);
        }
        var ht;
        if (To)
          t: {
            switch (l) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break t;
              case "compositionend":
                pt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break t;
            }
            pt = void 0;
          }
        else
          si ? ld(l, u) && (pt = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (pt = "onCompositionStart");
        pt && (Rm && u.locale !== "ko" && (si || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && si && (ht = bm()) : (qu = Y, Sm = "value" in qu ? qu.value : qu.textContent, si = !0)), F = tr(U, pt), 0 < F.length && (pt = new Sp(
          pt,
          l,
          null,
          u,
          Y
        ), j.push({ event: pt, listeners: F }), ht ? pt.data = ht : (ht = Um(u), ht !== null && (pt.data = ht)))), (ht = Dl ? zp(l, u) : Qg(l, u)) && (pt = tr(U, "onBeforeInput"), 0 < pt.length && (F = new Sp(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Y
        ), j.push({
          event: F,
          listeners: pt
        }), F.data = ht)), ks(
          j,
          l,
          U,
          u,
          Y
        );
      }
      Sv(j, n);
    });
  }
  function Ps(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function tr(l, n) {
    for (var u = n + "Capture", i = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Pe(l, u), s != null && i.unshift(
        Ps(l, s, r)
      ), s = Pe(l, n), s != null && i.push(
        Ps(l, s, r)
      )), l.tag === 3) return i;
      l = l.return;
    }
    return [];
  }
  function bv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function fh(l, n, u, i, s) {
    for (var r = n._reactName, m = []; u !== null && u !== i; ) {
      var v = u, T = v.alternate, U = v.stateNode;
      if (v = v.tag, T !== null && T === i) break;
      v !== 5 && v !== 26 && v !== 27 || U === null || (T = U, s ? (U = Pe(u, r), U != null && m.unshift(
        Ps(u, U, T)
      )) : s || (U = Pe(u, r), U != null && m.push(
        Ps(u, U, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Tv = /\r\n?/g, Ky = /\u0000|\uFFFD/g;
  function $y(l) {
    return (typeof l == "string" ? l : "" + l).replace(Tv, `
`).replace(Ky, "");
  }
  function Wy(l, n) {
    return n = $y(n), $y(l) === n;
  }
  function te(l, n, u, i, s, r) {
    switch (u) {
      case "children":
        typeof i == "string" ? n === "body" || n === "textarea" && i === "" || Vn(l, i) : (typeof i == "number" || typeof i == "bigint") && n !== "body" && Vn(l, "" + i);
        break;
      case "className":
        Lr(l, "class", i);
        break;
      case "tabIndex":
        Lr(l, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Lr(l, u, i);
        break;
      case "style":
        hp(l, i, r);
        break;
      case "data":
        if (n !== "object") {
          Lr(l, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = Qa("" + i), l.setAttribute(u, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && te(l, n, "name", s.name, s, null), te(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), te(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), te(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (te(l, n, "encType", s.encType, s, null), te(l, n, "method", s.method, s, null), te(l, n, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = Qa("" + i), l.setAttribute(u, i);
        break;
      case "onClick":
        i != null && (l.onclick = fn);
        break;
      case "onScroll":
        i != null && Dt("scroll", l);
        break;
      case "onScrollEnd":
        i != null && Dt("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(N(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(N(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        l.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Qa("" + i), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "" + i) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        i === !0 ? l.setAttribute(u, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? l.removeAttribute(u) : l.setAttribute(u, i);
        break;
      case "popover":
        Dt("beforetoggle", l), Dt("toggle", l), yo(l, "popover", i);
        break;
      case "xlinkActuate":
        Hu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Hu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Hu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Hu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Hu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Hu(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Hu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Hu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Hu(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        yo(l, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Yg.get(u) || u, yo(l, u, i));
    }
  }
  function Fy(l, n, u, i, s, r) {
    switch (u) {
      case "style":
        hp(l, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(N(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(N(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof i == "string" ? Vn(l, i) : (typeof i == "number" || typeof i == "bigint") && Vn(l, "" + i);
        break;
      case "onScroll":
        i != null && Dt("scroll", l);
        break;
      case "onScrollEnd":
        i != null && Dt("scrollend", l);
        break;
      case "onClick":
        i != null && (l.onclick = fn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!rc.hasOwnProperty(u))
          t: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Nl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof i == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, i, s);
              break t;
            }
            u in l ? l[u] = i : i === !0 ? l.setAttribute(u, "") : yo(l, u, i);
          }
    }
  }
  function Sl(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Dt("error", l), Dt("load", l);
        var i = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(N(137, n));
                default:
                  te(l, n, r, m, u, null);
              }
          }
        s && te(l, n, "srcSet", u.srcSet, u, null), i && te(l, n, "src", u.src, u, null);
        return;
      case "input":
        Dt("invalid", l);
        var v = r = m = s = null, T = null, U = null;
        for (i in u)
          if (u.hasOwnProperty(i)) {
            var Y = u[i];
            if (Y != null)
              switch (i) {
                case "name":
                  s = Y;
                  break;
                case "type":
                  m = Y;
                  break;
                case "checked":
                  T = Y;
                  break;
                case "defaultChecked":
                  U = Y;
                  break;
                case "value":
                  r = Y;
                  break;
                case "defaultValue":
                  v = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(N(137, n));
                  break;
                default:
                  te(l, n, i, Y, u, null);
              }
          }
        kf(
          l,
          r,
          v,
          T,
          U,
          m,
          s,
          !1
        );
        return;
      case "select":
        Dt("invalid", l), i = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (v = u[s], v != null))
            switch (s) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                i = v;
              default:
                te(l, n, s, v, u, null);
            }
        n = r, u = m, l.multiple = !!i, n != null ? po(l, !!i, n, !1) : u != null && po(l, !!i, u, !0);
        return;
      case "textarea":
        Dt("invalid", l), r = s = i = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                i = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(N(91));
                break;
              default:
                te(l, n, m, v, u, null);
            }
        pm(l, i, s, r);
        return;
      case "option":
        for (T in u)
          if (u.hasOwnProperty(T) && (i = u[T], i != null))
            switch (T) {
              case "selected":
                l.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                te(l, n, T, i, u, null);
            }
        return;
      case "dialog":
        Dt("beforetoggle", l), Dt("toggle", l), Dt("cancel", l), Dt("close", l);
        break;
      case "iframe":
      case "object":
        Dt("load", l);
        break;
      case "video":
      case "audio":
        for (i = 0; i < nf.length; i++)
          Dt(nf[i], l);
        break;
      case "image":
        Dt("error", l), Dt("load", l);
        break;
      case "details":
        Dt("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Dt("error", l), Dt("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in u)
          if (u.hasOwnProperty(U) && (i = u[U], i != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(N(137, n));
              default:
                te(l, n, U, i, u, null);
            }
        return;
      default:
        if (vm(n)) {
          for (Y in u)
            u.hasOwnProperty(Y) && (i = u[Y], i !== void 0 && Fy(
              l,
              n,
              Y,
              i,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (i = u[v], i != null && te(l, n, v, i, u, null));
  }
  function ky(l, n, u, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, v = null, T = null, U = null, Y = null;
        for (q in u) {
          var j = u[q];
          if (u.hasOwnProperty(q) && j != null)
            switch (q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = j;
              default:
                i.hasOwnProperty(q) || te(l, n, q, null, i, j);
            }
        }
        for (var C in i) {
          var q = i[C];
          if (j = u[C], i.hasOwnProperty(C) && (q != null || j != null))
            switch (C) {
              case "type":
                r = q;
                break;
              case "name":
                s = q;
                break;
              case "checked":
                U = q;
                break;
              case "defaultChecked":
                Y = q;
                break;
              case "value":
                m = q;
                break;
              case "defaultValue":
                v = q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null)
                  throw Error(N(137, n));
                break;
              default:
                q !== j && te(
                  l,
                  n,
                  C,
                  q,
                  i,
                  j
                );
            }
        }
        Ff(
          l,
          m,
          v,
          T,
          U,
          Y,
          r,
          s
        );
        return;
      case "select":
        q = m = v = C = null;
        for (r in u)
          if (T = u[r], u.hasOwnProperty(r) && T != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                q = T;
              default:
                i.hasOwnProperty(r) || te(
                  l,
                  n,
                  r,
                  null,
                  i,
                  T
                );
            }
        for (s in i)
          if (r = i[s], T = u[s], i.hasOwnProperty(s) && (r != null || T != null))
            switch (s) {
              case "value":
                C = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== T && te(
                  l,
                  n,
                  s,
                  r,
                  i,
                  T
                );
            }
        n = v, u = m, i = q, C != null ? po(l, !!u, C, !1) : !!i != !!u && (n != null ? po(l, !!u, n, !0) : po(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        q = C = null;
        for (v in u)
          if (s = u[v], u.hasOwnProperty(v) && s != null && !i.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                te(l, n, v, null, i, s);
            }
        for (m in i)
          if (s = i[m], r = u[m], i.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                q = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(N(91));
                break;
              default:
                s !== r && te(l, n, m, s, i, r);
            }
        ym(l, C, q);
        return;
      case "option":
        for (var W in u)
          if (C = u[W], u.hasOwnProperty(W) && C != null && !i.hasOwnProperty(W))
            switch (W) {
              case "selected":
                l.selected = !1;
                break;
              default:
                te(
                  l,
                  n,
                  W,
                  null,
                  i,
                  C
                );
            }
        for (T in i)
          if (C = i[T], q = u[T], i.hasOwnProperty(T) && C !== q && (C != null || q != null))
            switch (T) {
              case "selected":
                l.selected = C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                te(
                  l,
                  n,
                  T,
                  C,
                  i,
                  q
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var lt in u)
          C = u[lt], u.hasOwnProperty(lt) && C != null && !i.hasOwnProperty(lt) && te(l, n, lt, null, i, C);
        for (U in i)
          if (C = i[U], q = u[U], i.hasOwnProperty(U) && C !== q && (C != null || q != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(N(137, n));
                break;
              default:
                te(
                  l,
                  n,
                  U,
                  C,
                  i,
                  q
                );
            }
        return;
      default:
        if (vm(n)) {
          for (var ee in u)
            C = u[ee], u.hasOwnProperty(ee) && C !== void 0 && !i.hasOwnProperty(ee) && Fy(
              l,
              n,
              ee,
              void 0,
              i,
              C
            );
          for (Y in i)
            C = i[Y], q = u[Y], !i.hasOwnProperty(Y) || C === q || C === void 0 && q === void 0 || Fy(
              l,
              n,
              Y,
              C,
              i,
              q
            );
          return;
        }
    }
    for (var M in u)
      C = u[M], u.hasOwnProperty(M) && C != null && !i.hasOwnProperty(M) && te(l, n, M, null, i, C);
    for (j in i)
      C = i[j], q = u[j], !i.hasOwnProperty(j) || C === q || C == null && q == null || te(l, n, j, C, i, q);
  }
  function sh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Iy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), i = 0; i < u.length; i++) {
        var s = u[i], r = s.transferSize, m = s.initiatorType, v = s.duration;
        if (r && v && sh(m)) {
          for (m = 0, v = s.responseEnd, i += 1; i < u.length; i++) {
            var T = u[i], U = T.startTime;
            if (U > v) break;
            var Y = T.transferSize, j = T.initiatorType;
            Y && sh(j) && (T = T.responseEnd, m += Y * (T < v ? 1 : (v - U) / (T - U)));
          }
          if (--i, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var rh = null, dh = null;
  function Xc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ev(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Py(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function cf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var hh = null;
  function Jg() {
    var l = window.event;
    return l && l.type === "popstate" ? l === hh ? !1 : (hh = l, !0) : (hh = null, !1);
  }
  var er = typeof setTimeout == "function" ? setTimeout : void 0, Av = typeof clearTimeout == "function" ? clearTimeout : void 0, Qi = typeof Promise == "function" ? Promise : void 0, zv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qi < "u" ? function(l) {
    return Qi.resolve(null).then(l).catch(t0);
  } : er;
  function t0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Rn(l) {
    return l === "head";
  }
  function e0(l, n) {
    var u = n, i = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (i === 0) {
            l.removeChild(s), Sf(n);
            return;
          }
          i--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          i++;
        else if (u === "html")
          Vi(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Vi(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, v = r.nodeName;
            r[Xn] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && Vi(l.ownerDocument.body);
      u = s;
    } while (u);
    Sf(n);
  }
  function qe(l, n) {
    var u = l;
    l = 0;
    do {
      var i = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), i && i.nodeType === 8)
        if (u = i.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = i;
    } while (u);
  }
  function lr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lr(u), Qr(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function wg(l, n, u, i) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (i) {
        if (!l[Xn])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Wl(l.nextSibling), l === null) break;
    }
    return null;
  }
  function gt(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Wl(l.nextSibling), l === null)) return null;
    return l;
  }
  function Dv(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Wl(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ia(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Qc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function of(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var i = function() {
        n(), u.removeEventListener("DOMContentLoaded", i);
      };
      u.addEventListener("DOMContentLoaded", i), l._reactRetry = i;
    }
  }
  function Wl(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var ar = null;
  function mh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Wl(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Un(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ff(l, n, u) {
    switch (n = Xc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(N(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(N(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(N(454));
        return l;
      default:
        throw Error(N(451));
    }
  }
  function Vi(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Qr(l);
  }
  var da = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Set();
  function Rl(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Cn = Q.d;
  Q.d = {
    f: Kg,
    r: Ov,
    D: B,
    C: Zt,
    L: $g,
    m: l0,
    X: Pu,
    S: a0,
    M: Vc
  };
  function Kg() {
    var l = Cn.f(), n = Po();
    return l || n;
  }
  function Ov(l) {
    var n = li(l);
    n !== null && n.tag === 5 && n.type === "form" ? It(n) : Cn.r(l);
  }
  var sf = typeof document > "u" ? null : document;
  function Xe(l, n, u) {
    var i = sf;
    if (i && typeof n == "string" && n) {
      var s = ga(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), nr.has(s) || (nr.add(s), l = { rel: l, crossOrigin: u, href: n }, i.querySelector(s) === null && (n = i.createElement("link"), Sl(n, "link", l), Lt(n), i.head.appendChild(n)));
    }
  }
  function B(l) {
    Cn.D(l), Xe("dns-prefetch", l, null);
  }
  function Zt(l, n) {
    Cn.C(l, n), Xe("preconnect", l, n);
  }
  function $g(l, n, u) {
    Cn.L(l, n, u);
    var i = sf;
    if (i && l && n) {
      var s = 'link[rel="preload"][as="' + ga(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + ga(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + ga(
        u.imageSizes
      ) + '"]')) : s += '[href="' + ga(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Ha(l);
          break;
        case "script":
          r = Zi(l);
      }
      da.has(r) || (l = it(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), da.set(r, l), i.querySelector(s) !== null || n === "style" && i.querySelector(Zc(r)) || n === "script" && i.querySelector(hf(r)) || (n = i.createElement("link"), Sl(n, "link", l), Lt(n), i.head.appendChild(n)));
    }
  }
  function l0(l, n) {
    Cn.m(l, n);
    var u = sf;
    if (u && l) {
      var i = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + ga(i) + '"][href="' + ga(l) + '"]', r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Zi(l);
      }
      if (!da.has(r) && (l = it({ rel: "modulepreload", href: l }, n), da.set(r, l), u.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(hf(r)))
              return;
        }
        i = u.createElement("link"), Sl(i, "link", l), Lt(i), u.head.appendChild(i);
      }
    }
  }
  function a0(l, n, u) {
    Cn.S(l, n, u);
    var i = sf;
    if (i && l) {
      var s = ai(i).hoistableStyles, r = Ha(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = i.querySelector(
          Zc(r)
        ))
          v.loading = 5;
        else {
          l = it(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = da.get(r)) && yh(l, u);
          var T = m = i.createElement("link");
          Lt(T), Sl(T, "link", l), T._p = new Promise(function(U, Y) {
            T.onload = U, T.onerror = Y;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, ur(m, n, i);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, s.set(r, m);
      }
    }
  }
  function Pu(l, n) {
    Cn.X(l, n);
    var u = sf;
    if (u && l) {
      var i = ai(u).hoistableScripts, s = Zi(l), r = i.get(s);
      r || (r = u.querySelector(hf(s)), r || (l = it({ src: l, async: !0 }, n), (n = da.get(s)) && ph(l, n), r = u.createElement("script"), Lt(r), Sl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function Vc(l, n) {
    Cn.M(l, n);
    var u = sf;
    if (u && l) {
      var i = ai(u).hoistableScripts, s = Zi(l), r = i.get(s);
      r || (r = u.querySelector(hf(s)), r || (l = it({ src: l, async: !0, type: "module" }, n), (n = da.get(s)) && ph(l, n), r = u.createElement("script"), Lt(r), Sl(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function rf(l, n, u, i) {
    var s = (s = ic.current) ? Rl(s) : null;
    if (!s) throw Error(N(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Ha(u.href), u = ai(
          s
        ).hoistableStyles, i = u.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Ha(u.href);
          var r = ai(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Zc(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), da.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, da.set(l, u), r || Mv(
            s,
            l,
            u,
            m.state
          ))), n && i === null)
            throw Error(N(528, ""));
          return m;
        }
        if (n && i !== null)
          throw Error(N(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Zi(u), u = ai(
          s
        ).hoistableScripts, i = u.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(N(444, l));
    }
  }
  function Ha(l) {
    return 'href="' + ga(l) + '"';
  }
  function Zc(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function df(l) {
    return it({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Mv(l, n, u, i) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? i.loading = 1 : (n = l.createElement("link"), i.preload = n, n.addEventListener("load", function() {
      return i.loading |= 1;
    }), n.addEventListener("error", function() {
      return i.loading |= 2;
    }), Sl(n, "link", u), Lt(n), l.head.appendChild(n));
  }
  function Zi(l) {
    return '[src="' + ga(l) + '"]';
  }
  function hf(l) {
    return "script[async]" + l;
  }
  function n0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var i = l.querySelector(
            'style[data-href~="' + ga(u.href) + '"]'
          );
          if (i)
            return n.instance = i, Lt(i), i;
          var s = it({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return i = (l.ownerDocument || l).createElement(
            "style"
          ), Lt(i), Sl(i, "style", s), ur(i, u.precedence, l), n.instance = i;
        case "stylesheet":
          s = Ha(u.href);
          var r = l.querySelector(
            Zc(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Lt(r), r;
          i = df(u), (s = da.get(s)) && yh(i, s), r = (l.ownerDocument || l).createElement("link"), Lt(r);
          var m = r;
          return m._p = new Promise(function(v, T) {
            m.onload = v, m.onerror = T;
          }), Sl(r, "link", i), n.state.loading |= 4, ur(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Zi(u.src), (s = l.querySelector(
            hf(r)
          )) ? (n.instance = s, Lt(s), s) : (i = u, (s = da.get(r)) && (i = it({}, u), ph(i, s)), l = l.ownerDocument || l, s = l.createElement("script"), Lt(s), Sl(s, "link", i), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(N(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (i = n.instance, n.state.loading |= 4, ur(i, u.precedence, l));
    return n.instance;
  }
  function ur(l, n, u) {
    for (var i = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, r = s, m = 0; m < i.length; m++) {
      var v = i[m];
      if (v.dataset.precedence === n) r = v;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function yh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function ph(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var mf = null;
  function u0(l, n, u) {
    if (mf === null) {
      var i = /* @__PURE__ */ new Map(), s = mf = /* @__PURE__ */ new Map();
      s.set(u, i);
    } else
      s = mf, i = s.get(u), i || (i = /* @__PURE__ */ new Map(), s.set(u, i));
    if (i.has(l)) return i;
    for (i.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Xn] || r[kt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var v = i.get(m);
        v ? v.push(r) : i.set(m, [r]);
      }
    }
    return i;
  }
  function vh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function c0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function ha(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function hu(l, n, u, i) {
    if (u.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = Ha(i.href), r = n.querySelector(
          Zc(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = gh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Lt(r);
          return;
        }
        r = n.ownerDocument || n, i = df(i), (s = da.get(s)) && yh(i, s), r = r.createElement("link"), Lt(r);
        var m = r;
        m._p = new Promise(function(v, T) {
          m.onload = v, m.onerror = T;
        }), Sl(r, "link", i), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = gh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Ba = 0;
  function i0(l, n) {
    return l.stylesheets && l.count === 0 && bh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var i = setTimeout(function() {
        if (l.stylesheets && bh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Ba === 0 && (Ba = 62500 * Iy());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && bh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Ba ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(i), clearTimeout(s);
      };
    } : null;
  }
  function gh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) bh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Sh = null;
  function bh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Sh = /* @__PURE__ */ new Map(), n.forEach(cl, l), Sh = null, gh.call(l));
  }
  function cl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Sh.get(l);
      if (u) var i = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Sh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), i = m);
        }
        i && u.set(null, i);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || i, r === i && u.set(null, s), u.set(m, s), this.count++, i = gh.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var cr = {
    $$typeof: Ve,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function o0(l, n, u, i, s, r, m, v, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kf(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kf(0), this.hiddenUpdates = Kf(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Th(l, n, u, i, s, r, m, v, T, U, Y, j) {
    return l = new o0(
      l,
      n,
      u,
      m,
      T,
      U,
      Y,
      j,
      v
    ), n = 1, r === !0 && (n |= 24), r = Ae(3, null, null, n), l.current = r, r.stateNode = l, n = ms(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: i,
      isDehydrated: u,
      cache: n
    }, Ts(r), l;
  }
  function Li(l) {
    return l ? (l = Gl, l) : Gl;
  }
  function Rv(l, n, u, i, s, r) {
    s = Li(s), i.context === null ? i.context = s : i.pendingContext = s, i = Zu(n), i.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (i.callback = r), u = Da(l, i, n), u !== null && ($l(u, l, n), Mc(u, l, n));
  }
  function Eh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function f0(l, n) {
    Eh(l, n), (l = l.alternate) && Eh(l, n);
  }
  function Uv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Yu(l, 67108864);
      n !== null && $l(n, l, 67108864), f0(l, 67108864);
    }
  }
  function Ji(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ra();
      n = Gr(n);
      var u = Yu(l, n);
      u !== null && $l(u, l, n), f0(l, n);
    }
  }
  var Ke = !0;
  function mu(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = Q.p;
    try {
      Q.p = 2, bl(l, n, u, i);
    } finally {
      Q.p = r, O.T = s;
    }
  }
  function yu(l, n, u, i) {
    var s = O.T;
    O.T = null;
    var r = Q.p;
    try {
      Q.p = 8, bl(l, n, u, i);
    } finally {
      Q.p = r, O.T = s;
    }
  }
  function bl(l, n, u, i) {
    if (Ke) {
      var s = s0(i);
      if (s === null)
        wy(
          l,
          n,
          i,
          Ah,
          u
        ), tc(l, i);
      else if (Wg(
        s,
        l,
        n,
        u,
        i
      ))
        i.stopPropagation();
      else if (tc(l, i), n & 4 && -1 < Fl.indexOf(l)) {
        for (; s !== null; ) {
          var r = li(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = Xa(r.pendingLanes);
                  if (m !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - ql(m);
                      v.entanglements[1] |= T, m &= ~T;
                    }
                    du(r), (jt & 6) === 0 && (Vt = vl() + 500, Iu(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = Yu(r, 2), v !== null && $l(v, r, 2), Po(), f0(r, 2);
            }
          if (r = s0(i), r === null && wy(
            l,
            n,
            i,
            Ah,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else
        wy(
          l,
          n,
          i,
          null,
          u
        );
    }
  }
  function s0(l) {
    return l = $r(l), yf(l);
  }
  var Ah = null;
  function yf(l) {
    if (Ah = null, l = ei(l), l !== null) {
      var n = ya(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = an(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = K(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Ah = l, null;
  }
  function ir(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bg()) {
          case Nr:
            return 2;
          case Yr:
            return 8;
          case oc:
          case qg:
            return 32;
          case im:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var pf = !1, $e = null, Tl = null, Ul = null, Lc = /* @__PURE__ */ new Map(), Pa = /* @__PURE__ */ new Map(), ye = [], Fl = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        $e = null;
        break;
      case "dragenter":
      case "dragleave":
        Tl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ul = null;
        break;
      case "pointerover":
      case "pointerout":
        Lc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pa.delete(n.pointerId);
    }
  }
  function wi(l, n, u, i, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: i,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = li(n), n !== null && Uv(n)), l) : (l.eventSystemFlags |= i, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function Wg(l, n, u, i, s) {
    switch (n) {
      case "focusin":
        return $e = wi(
          $e,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "dragenter":
        return Tl = wi(
          Tl,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "mouseover":
        return Ul = wi(
          Ul,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Lc.set(
          r,
          wi(
            Lc.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Pa.set(
          r,
          wi(
            Pa.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Cv(l) {
    var n = ei(l.target);
    if (n !== null) {
      var u = ya(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = an(u), n !== null) {
            l.blockedOn = n, sm(l.priority, function() {
              Ji(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = K(u), n !== null) {
            l.blockedOn = n, sm(l.priority, function() {
              Ji(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function or(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = s0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var i = new u.constructor(
          u.type,
          u
        );
        Kr = i, u.target.dispatchEvent(i), Kr = null;
      } else
        return n = li(u), n !== null && Uv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function vf(l, n, u) {
    or(l) && u.delete(n);
  }
  function _v() {
    pf = !1, $e !== null && or($e) && ($e = null), Tl !== null && or(Tl) && (Tl = null), Ul !== null && or(Ul) && (Ul = null), Lc.forEach(vf), Pa.forEach(vf);
  }
  function pu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, pf || (pf = !0, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      _v
    )));
  }
  var gf = null;
  function Hv(l) {
    gf !== l && (gf = l, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      function() {
        gf === l && (gf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], i = l[n + 1], s = l[n + 2];
          if (typeof i != "function") {
            if (yf(i || u) === null)
              continue;
            break;
          }
          var r = li(u);
          r !== null && (l.splice(n, 3), n -= 3, Xo(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: i
            },
            i,
            s
          ));
        }
      }
    ));
  }
  function Sf(l) {
    function n(T) {
      return pu(T, l);
    }
    $e !== null && pu($e, l), Tl !== null && pu(Tl, l), Ul !== null && pu(Ul, l), Lc.forEach(n), Pa.forEach(n);
    for (var u = 0; u < ye.length; u++) {
      var i = ye[u];
      i.blockedOn === l && (i.blockedOn = null);
    }
    for (; 0 < ye.length && (u = ye[0], u.blockedOn === null); )
      Cv(u), u.blockedOn === null && ye.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (i = 0; i < u.length; i += 3) {
        var s = u[i], r = u[i + 1], m = s[Nl] || null;
        if (typeof r == "function")
          m || Hv(u);
        else if (m) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[Nl] || null)
              v = m.formAction;
            else if (yf(s) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[i + 1] = v : (u.splice(i, 3), i -= 3), Hv(u);
        }
      }
  }
  function r0() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), i || setTimeout(u, 20);
    }
    function u() {
      if (!i && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var i = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        i = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function zh(l) {
    this._internalRoot = l;
  }
  Dh.prototype.render = zh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(N(409));
    var u = n.current, i = ra();
    Rv(u, i, l, n, null, null);
  }, Dh.prototype.unmount = zh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Rv(l.current, 2, null, l, null, null), Po(), n[sc] = null;
    }
  };
  function Dh(l) {
    this._internalRoot = l;
  }
  Dh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = jr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < ye.length && n !== 0 && n < ye[u].priority; u++) ;
      ye.splice(u, 0, l), u === 0 && Cv(l);
    }
  };
  var d0 = zl.version;
  if (d0 !== "19.2.0")
    throw Error(
      N(
        527,
        d0,
        "19.2.0"
      )
    );
  Q.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(N(188)) : (l = Object.keys(l).join(","), Error(N(268, l)));
    return l = Pl(n), l = l !== null ? Fc(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Bv = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fr.isDisabled && fr.supportsFiber)
      try {
        Pc = fr.inject(
          Bv
        ), ua = fr;
      } catch {
      }
  }
  return np.createRoot = function(l, n) {
    if (!Il(l)) throw Error(N(299));
    var u = !1, i = "", s = Yd, r = hy, m = xd;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Th(
      l,
      1,
      !1,
      null,
      null,
      u,
      i,
      null,
      s,
      r,
      m,
      r0
    ), l[sc] = n.current, uf(l), new zh(n);
  }, np.hydrateRoot = function(l, n, u) {
    if (!Il(l)) throw Error(N(299));
    var i = !1, s = "", r = Yd, m = hy, v = xd, T = null;
    return u != null && (u.unstable_strictMode === !0 && (i = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Th(
      l,
      1,
      !0,
      n,
      u ?? null,
      i,
      s,
      T,
      r,
      m,
      v,
      r0
    ), n.context = Li(null), u = n.current, i = ra(), i = Gr(i), s = Zu(i), s.callback = null, Da(u, s, i), u = i, n.current.lanes = u, so(n, u), du(n), l[sc] = n.current, uf(l), new Dh(n);
  }, np.version = "19.2.0", np;
}
var up = {};
var A2;
function t3() {
  return A2 || (A2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function L(t, e) {
      for (t = t.memoizedState; t !== null && 0 < e; )
        t = t.next, e--;
      return t;
    }
    function zl(t, e, a, c) {
      if (a >= e.length) return c;
      var o = e[a], f = Xe(t) ? t.slice() : gt({}, t);
      return f[o] = zl(t[o], e, a + 1, c), f;
    }
    function ml(t, e, a) {
      if (e.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var c = 0; c < a.length - 1; c++)
          if (e[c] !== a[c]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return N(t, e, a, 0);
      }
    }
    function N(t, e, a, c) {
      var o = e[c], f = Xe(t) ? t.slice() : gt({}, t);
      return c + 1 === e.length ? (f[a[c]] = f[o], Xe(f) ? f.splice(o, 1) : delete f[o]) : f[o] = N(
        t[o],
        e,
        a,
        c + 1
      ), f;
    }
    function Il(t, e, a) {
      var c = e[a], o = Xe(t) ? t.slice() : gt({}, t);
      return a + 1 === e.length ? (Xe(o) ? o.splice(c, 1) : delete o[c], o) : (o[c] = Il(t[c], e, a + 1), o);
    }
    function ya() {
      return !1;
    }
    function an() {
      return null;
    }
    function K() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function yl() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Pl() {
    }
    function Fc() {
    }
    function it(t) {
      var e = [];
      return t.forEach(function(a) {
        e.push(a);
      }), e.sort().join(", ");
    }
    function Gt(t, e, a, c) {
      return new Qg(t, e, a, c);
    }
    function ke(t, e) {
      t.context === Af && (fh(t.current, 2, e, t, null, null), Ca());
    }
    function Ye(t, e) {
      if (Su !== null) {
        var a = e.staleFamilies;
        e = e.updatedFamilies, Xs(), zp(
          t.current,
          e,
          a
        ), Ca();
      }
    }
    function ta(t) {
      Su = t;
    }
    function Re(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function ae(t) {
      var e = t, a = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (a = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? a : null;
    }
    function xn(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Ve(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function Bl(t) {
      if (ae(t) !== t)
        throw Error("Unable to find node on an unmounted component.");
    }
    function nn(t) {
      var e = t.alternate;
      if (!e) {
        if (e = ae(t), e === null)
          throw Error("Unable to find node on an unmounted component.");
        return e !== t ? null : t;
      }
      for (var a = t, c = e; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (c = o.return, c !== null) {
            a = c;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Bl(o), t;
            if (f === c) return Bl(o), e;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== c.return) a = o, c = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, c = f;
              break;
            }
            if (h === c) {
              d = !0, c = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, c = o;
                break;
              }
              if (h === c) {
                d = !0, c = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== c)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? t : e;
    }
    function ea(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = ea(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    function Ie(t) {
      return t === null || typeof t != "object" ? null : (t = Ov && t[Ov] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    function Bt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === sf ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case of:
          return "Fragment";
        case ar:
          return "Profiler";
        case Wl:
          return "StrictMode";
        case Vi:
          return "Suspense";
        case da:
          return "SuspenseList";
        case Cn:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case Qc:
            return "Portal";
          case Un:
            return t.displayName || "Context";
          case mh:
            return (t._context.displayName || "Context") + ".Consumer";
          case ff:
            var e = t.render;
            return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case nr:
            return e = t.displayName || null, e !== null ? e : Bt(t.type) || "Memo";
          case Rl:
            e = t._payload, t = t._init;
            try {
              return Bt(t(e));
            } catch {
            }
        }
      return null;
    }
    function la(t) {
      return typeof t.tag == "number" ? I(t) : typeof t.name == "string" ? t.name : null;
    }
    function I(t) {
      var e = t.type;
      switch (t.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (e._context.displayName || "Context") + ".Consumer";
        case 10:
          return e.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return t = e.render, t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return e;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Bt(e);
        case 8:
          return e === Wl ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof e == "function")
            return e.displayName || e.name || null;
          if (typeof e == "string") return e;
          break;
        case 29:
          if (e = t._debugInfo, e != null) {
            for (var a = e.length - 1; 0 <= a; a--)
              if (typeof e[a].name == "string") return e[a].name;
          }
          if (t.return !== null)
            return I(t.return);
      }
      return null;
    }
    function Ze(t) {
      return { current: t };
    }
    function Nt(t, e) {
      0 > Pu ? console.error("Unexpected pop.") : (e !== a0[Pu] && console.error("Unexpected Fiber popped."), t.current = l0[Pu], l0[Pu] = null, a0[Pu] = null, Pu--);
    }
    function Rt(t, e, a) {
      Pu++, l0[Pu] = t.current, a0[Pu] = a, t.current = e;
    }
    function aa(t) {
      return t === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), t;
    }
    function na(t, e) {
      Rt(Ha, e, t), Rt(rf, t, t), Rt(Vc, null, t);
      var a = e.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", e = (e = e.documentElement) && (e = e.namespaceURI) ? Pp(e) : co;
          break;
        default:
          if (a = e.tagName, e = e.namespaceURI)
            e = Pp(e), e = Fu(
              e,
              a
            );
          else
            switch (a) {
              case "svg":
                e = em;
                break;
              case "math":
                e = zg;
                break;
              default:
                e = co;
            }
      }
      a = a.toLowerCase(), a = mm(null, a), a = {
        context: e,
        ancestorInfo: a
      }, Nt(Vc, t), Rt(Vc, a, t);
    }
    function O(t) {
      Nt(Vc, t), Nt(rf, t), Nt(Ha, t);
    }
    function Q() {
      return aa(Vc.current);
    }
    function V(t) {
      t.memoizedState !== null && Rt(Zc, t, t);
      var e = aa(Vc.current), a = t.type, c = Fu(e.context, a);
      a = mm(e.ancestorInfo, a), c = { context: c, ancestorInfo: a }, e !== c && (Rt(rf, t, t), Rt(Vc, c, t));
    }
    function at(t) {
      rf.current === t && (Nt(Vc, t), Nt(rf, t)), Zc.current === t && (Nt(Zc, t), ep._currentValue = Hr);
    }
    function dt() {
    }
    function xe() {
      if (df === 0) {
        Mv = console.log, Zi = console.info, hf = console.warn, n0 = console.error, ur = console.group, yh = console.groupCollapsed, ph = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: dt,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      df++;
    }
    function Wt() {
      if (df--, df === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: gt({}, t, { value: Mv }),
          info: gt({}, t, { value: Zi }),
          warn: gt({}, t, { value: hf }),
          error: gt({}, t, { value: n0 }),
          group: gt({}, t, { value: ur }),
          groupCollapsed: gt({}, t, { value: yh }),
          groupEnd: gt({}, t, { value: ph })
        });
      }
      0 > df && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Ut(t) {
      var e = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, t = t.stack, Error.prepareStackTrace = e, t.startsWith(`Error: react-stack-top-frame
`) && (t = t.slice(29)), e = t.indexOf(`
`), e !== -1 && (t = t.slice(e + 1)), e = t.indexOf("react_stack_bottom_frame"), e !== -1 && (e = t.lastIndexOf(
        `
`,
        e
      )), e !== -1)
        t = t.slice(0, e);
      else return "";
      return t;
    }
    function zt(t) {
      if (mf === void 0)
        try {
          throw Error();
        } catch (a) {
          var e = a.stack.trim().match(/\n( *(at )?)/);
          mf = e && e[1] || "", u0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + mf + t + u0;
    }
    function pl(t, e) {
      if (!t || vh) return "";
      var a = c0.get(t);
      if (a !== void 0) return a;
      vh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var c = null;
      c = B.H, B.H = null, xe();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var S = function() {
                  throw Error();
                };
                if (Object.defineProperty(S.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(S, []);
                  } catch (Z) {
                    var _ = Z;
                  }
                  Reflect.construct(t, [], S);
                } else {
                  try {
                    S.call();
                  } catch (Z) {
                    _ = Z;
                  }
                  t.call(S.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Z) {
                  _ = Z;
                }
                (S = t()) && typeof S.catch == "function" && S.catch(function() {
                });
              }
            } catch (Z) {
              if (Z && _ && typeof Z.stack == "string")
                return [Z.stack, _.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), A = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < A.length && !A[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === A.length)
            for (f = p.length - 1, d = A.length - 1; 1 <= f && 0 <= d && p[f] !== A[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== A[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== A[d]) {
                    var D = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), typeof t == "function" && c0.set(t, D), D;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        vh = !1, B.H = c, Wt(), Error.prepareStackTrace = a;
      }
      return p = (p = t ? t.displayName || t.name : "") ? zt(p) : "", typeof t == "function" && c0.set(t, p), p;
    }
    function ic(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return zt(t.type);
        case 16:
          return zt("Lazy");
        case 13:
          return t.child !== e && e !== null ? zt("Suspense Fallback") : zt("Suspense");
        case 19:
          return zt("SuspenseList");
        case 0:
        case 15:
          return pl(t.type, !1);
        case 11:
          return pl(t.type.render, !1);
        case 1:
          return pl(t.type, !0);
        case 31:
          return zt("Activity");
        default:
          return "";
      }
    }
    function Zf(t) {
      try {
        var e = "", a = null;
        do {
          e += ic(t, a);
          var c = t._debugInfo;
          if (c)
            for (var o = c.length - 1; 0 <= o; o--) {
              var f = c[o];
              if (typeof f.name == "string") {
                var d = e;
                t: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var A = Ut(p), D = A.lastIndexOf(`
`), S = D === -1 ? A : A.slice(D + 1);
                    if (S.indexOf(h) !== -1) {
                      var _ = `
` + S;
                      break t;
                    }
                  }
                  _ = zt(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                e = d + _;
              }
            }
          a = t, t = t.return;
        } while (t);
        return e;
      } catch (Z) {
        return `
Error generating stack: ` + Z.message + `
` + Z.stack;
      }
    }
    function Lf(t) {
      return (t = t ? t.displayName || t.name : "") ? zt(t) : "";
    }
    function Uu() {
      if (ha === null) return null;
      var t = ha._debugOwner;
      return t != null ? la(t) : null;
    }
    function am() {
      if (ha === null) return "";
      var t = ha;
      try {
        var e = "";
        switch (t.tag === 6 && (t = t.return), t.tag) {
          case 26:
          case 27:
          case 5:
            e += zt(t.type);
            break;
          case 13:
            e += zt("Suspense");
            break;
          case 19:
            e += zt("SuspenseList");
            break;
          case 31:
            e += zt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            t._debugOwner || e !== "" || (e += Lf(
              t.type
            ));
            break;
          case 11:
            t._debugOwner || e !== "" || (e += Lf(
              t.type.render
            ));
        }
        for (; t; )
          if (typeof t.tag == "number") {
            var a = t;
            t = a._debugOwner;
            var c = a._debugStack;
            if (t && c) {
              var o = Ut(c);
              o !== "" && (e += `
` + o);
            }
          } else if (t.debugStack != null) {
            var f = t.debugStack;
            (t = t.owner) && f && (e += `
` + Ut(f));
          } else break;
        var d = e;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function $(t, e, a, c, o, f, d) {
      var h = ha;
      Jf(t);
      try {
        return t !== null && t._debugTask ? t._debugTask.run(
          e.bind(null, a, c, o, f, d)
        ) : e(a, c, o, f, d);
      } finally {
        Jf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Jf(t) {
      B.getCurrentStack = t === null ? null : am, hu = !1, ha = t;
    }
    function wf(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function Gn(t) {
      try {
        return kc(t), !1;
      } catch {
        return !0;
      }
    }
    function kc(t) {
      return "" + t;
    }
    function Ft(t, e) {
      if (Gn(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          wf(t)
        ), kc(t);
    }
    function nm(t, e) {
      if (Gn(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          e,
          wf(t)
        ), kc(t);
    }
    function Br(t) {
      if (Gn(t))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          wf(t)
        ), kc(t);
    }
    function um(t) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var e = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (e.isDisabled) return !0;
      if (!e.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ji = e.inject(t), Ke = e;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!e.checkDCE;
    }
    function ne(t) {
      if (typeof f0 == "function" && Uv(t), Ke && typeof Ke.setStrictMode == "function")
        try {
          Ke.setStrictMode(Ji, t);
        } catch (e) {
          mu || (mu = !0, console.error(
            "React instrumentation encountered an error: %o",
            e
          ));
        }
    }
    function cm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (s0(t) / Ah | 0) | 0;
    }
    function Ic(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), t;
      }
    }
    function qr(t, e, a) {
      var c = t.pendingLanes;
      if (c === 0) return 0;
      var o = 0, f = t.suspendedLanes, d = t.pingedLanes;
      t = t.warmLanes;
      var h = c & 134217727;
      return h !== 0 ? (c = h & ~f, c !== 0 ? o = Ic(c) : (d &= h, d !== 0 ? o = Ic(d) : a || (a = h & ~t, a !== 0 && (o = Ic(a))))) : (h = c & ~f, h !== 0 ? o = Ic(h) : d !== 0 ? o = Ic(d) : a || (a = c & ~t, a !== 0 && (o = Ic(a)))), o === 0 ? 0 : e !== 0 && e !== o && (e & f) === 0 && (f = o & -o, a = e & -e, f >= a || f === 32 && (a & 4194048) !== 0) ? e : o;
    }
    function vl(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Bg(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Nr() {
      var t = pf;
      return pf <<= 1, (pf & 62914560) === 0 && (pf = 4194304), t;
    }
    function Yr(t) {
      for (var e = [], a = 0; 31 > a; a++) e.push(t);
      return e;
    }
    function oc(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function qg(t, e, a, c, o, f) {
      var d = t.pendingLanes;
      t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
      var h = t.entanglements, y = t.expirationTimes, p = t.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var A = 31 - bl(a), D = 1 << A;
        h[A] = 0, y[A] = -1;
        var S = p[A];
        if (S !== null)
          for (p[A] = null, A = 0; A < S.length; A++) {
            var _ = S[A];
            _ !== null && (_.lane &= -536870913);
          }
        a &= ~D;
      }
      c !== 0 && im(t, c, 0), f !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(d & ~e));
    }
    function im(t, e, a) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var c = 31 - bl(e);
      t.entangledLanes |= e, t.entanglements[c] = t.entanglements[c] | 1073741824 | a & 261930;
    }
    function cp(t, e) {
      var a = t.entangledLanes |= e;
      for (t = t.entanglements; a; ) {
        var c = 31 - bl(a), o = 1 << c;
        o & e | t[c] & e && (t[c] |= e), a &= ~o;
      }
    }
    function ip(t, e) {
      var a = e & -e;
      return a = (a & 42) !== 0 ? 1 : Pc(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
    }
    function Pc(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function ua(t, e, a) {
      if (yu)
        for (t = t.pendingUpdatersLaneMap; 0 < a; ) {
          var c = 31 - bl(a), o = 1 << c;
          t[c].add(e), a &= ~o;
        }
    }
    function Cu(t, e) {
      if (yu)
        for (var a = t.pendingUpdatersLaneMap, c = t.memoizedUpdaters; 0 < e; ) {
          var o = 31 - bl(e);
          t = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && c.has(d) || c.add(f);
          }), o.clear()), e &= ~t;
        }
    }
    function ql(t) {
      return t &= -t, $e < t ? Tl < t ? (t & 134217727) !== 0 ? Ul : Lc : Tl : $e;
    }
    function op() {
      var t = Zt.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? Ul : rh(t.type));
    }
    function fp(t, e) {
      var a = Zt.p;
      try {
        return Zt.p = t, e();
      } finally {
        Zt.p = a;
      }
    }
    function om(t) {
      delete t[ye], delete t[Fl], delete t[wi], delete t[Wg], delete t[Cv];
    }
    function _u(t) {
      var e = t[ye];
      if (e) return e;
      for (var a = t.parentNode; a; ) {
        if (e = a[tc] || a[ye]) {
          if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
            for (t = Gi(t); t !== null; ) {
              if (a = t[ye])
                return a;
              t = Gi(t);
            }
          return e;
        }
        t = a, a = t.parentNode;
      }
      return null;
    }
    function un(t) {
      if (t = t[ye] || t[tc]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
          return t;
      }
      return null;
    }
    function fc(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6)
        return t.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Xa(t) {
      var e = t[or];
      return e || (e = t[or] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
    }
    function Ue(t) {
      t[vf] = !0;
    }
    function cn(t, e) {
      fo(t, e), fo(t + "Capture", e);
    }
    function fo(t, e) {
      pu[t] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        t
      ), pu[t] = e;
      var a = t.toLowerCase();
      for (gf[a] = t, t === "onDoubleClick" && (gf.ondblclick = t), t = 0; t < e.length; t++)
        _v.add(e[t]);
    }
    function ti(t, e) {
      Hv[e.type] || e.onChange || e.onInput || e.readOnly || e.disabled || e.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), e.onChange || e.readOnly || e.disabled || e.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Kf(t) {
      return Ba.call(zh, t) ? !0 : Ba.call(r0, t) ? !1 : Sf.test(t) ? zh[t] = !0 : (r0[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function so(t, e, a) {
      if (Kf(e)) {
        if (!t.hasAttribute(e)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return t = t.getAttribute(e), t === "" && a === !0 ? !0 : (Ft(a, e), t === "" + a ? a : t);
      }
    }
    function xr(t, e, a) {
      if (Kf(e))
        if (a === null) t.removeAttribute(e);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              t.removeAttribute(e);
              return;
            case "boolean":
              var c = e.toLowerCase().slice(0, 5);
              if (c !== "data-" && c !== "aria-") {
                t.removeAttribute(e);
                return;
              }
          }
          Ft(a, e), t.setAttribute(e, "" + a);
        }
    }
    function $f(t, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        Ft(a, e), t.setAttribute(e, "" + a);
      }
    }
    function jn(t, e, a, c) {
      if (c === null) t.removeAttribute(a);
      else {
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(a);
            return;
        }
        Ft(c, a), t.setAttributeNS(e, a, "" + c);
      }
    }
    function pa(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return Br(t), t;
        default:
          return "";
      }
    }
    function Gr(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function fm(t, e, a) {
      var c = Object.getOwnPropertyDescriptor(
        t.constructor.prototype,
        e
      );
      if (!t.hasOwnProperty(e) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
        var o = c.get, f = c.set;
        return Object.defineProperty(t, e, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Br(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(t, e, {
          enumerable: c.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            Br(d), a = "" + d;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function jr(t) {
      if (!t._valueTracker) {
        var e = Gr(t) ? "checked" : "value";
        t._valueTracker = fm(
          t,
          e,
          "" + t[e]
        );
      }
    }
    function sm(t) {
      if (!t) return !1;
      var e = t._valueTracker;
      if (!e) return !0;
      var a = e.getValue(), c = "";
      return t && (c = Gr(t) ? t.checked ? "true" : "false" : t.value), t = c, t !== a ? (e.setValue(t), !0) : !1;
    }
    function on(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    function kt(t) {
      return t.replace(
        Dh,
        function(e) {
          return "\\" + e.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Nl(t, e) {
      e.checked === void 0 || e.defaultChecked === void 0 || Bv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Uu() || "A component",
        e.type
      ), Bv = !0), e.value === void 0 || e.defaultValue === void 0 || d0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Uu() || "A component",
        e.type
      ), d0 = !0);
    }
    function sc(t, e, a, c, o, f, d, h) {
      t.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Ft(d, "type"), t.type = d) : t.removeAttribute("type"), e != null ? d === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + pa(e)) : t.value !== "" + pa(e) && (t.value = "" + pa(e)) : d !== "submit" && d !== "reset" || t.removeAttribute("value"), e != null ? rm(t, d, pa(e)) : a != null ? rm(t, d, pa(a)) : c != null && t.removeAttribute("value"), o == null && f != null && (t.defaultChecked = !!f), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Ft(h, "name"), t.name = "" + pa(h)) : t.removeAttribute("name");
    }
    function Xr(t, e, a, c, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Ft(f, "type"), t.type = f), e != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || e != null)) {
          jr(t);
          return;
        }
        a = a != null ? "" + pa(a) : "", e = e != null ? "" + pa(e) : a, h || e === t.value || (t.value = e), t.defaultValue = e;
      }
      c = c ?? o, c = typeof c != "function" && typeof c != "symbol" && !!c, t.checked = h ? t.checked : !!c, t.defaultChecked = !!c, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Ft(d, "name"), t.name = d), jr(t);
    }
    function rm(t, e, a) {
      e === "number" && on(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
    }
    function sp(t, e) {
      e.value == null && (typeof e.children == "object" && e.children !== null ? lr.Children.forEach(e.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : e.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), e.selected == null || fr || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), fr = !0);
    }
    function dm() {
      var t = Uu();
      return t ? `

Check the render method of \`` + t + "`." : "";
    }
    function Xn(t, e, a, c) {
      if (t = t.options, e) {
        e = {};
        for (var o = 0; o < a.length; o++)
          e["$" + a[o]] = !0;
        for (a = 0; a < t.length; a++)
          o = e.hasOwnProperty("$" + t[a].value), t[a].selected !== o && (t[a].selected = o), o && c && (t[a].defaultSelected = !0);
      } else {
        for (a = "" + pa(a), e = null, o = 0; o < t.length; o++) {
          if (t[o].value === a) {
            t[o].selected = !0, c && (t[o].defaultSelected = !0);
            return;
          }
          e !== null || t[o].disabled || (e = t[o]);
        }
        e !== null && (e.selected = !0);
      }
    }
    function Qr(t, e) {
      for (t = 0; t < i.length; t++) {
        var a = i[t];
        if (e[a] != null) {
          var c = Xe(e[a]);
          e.multiple && !c ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            dm()
          ) : !e.multiple && c && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            dm()
          );
        }
      }
      e.value === void 0 || e.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function ei(t, e) {
      e.value === void 0 || e.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Uu() || "A component"
      ), s = !0), e.children != null && e.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function li(t, e, a) {
      if (e != null && (e = "" + pa(e), e !== t.value && (t.value = e), a == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = a != null ? "" + pa(a) : "";
    }
    function ro(t, e, a, c) {
      if (e == null) {
        if (c != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Xe(c)) {
            if (1 < c.length)
              throw Error("<textarea> can only have at most one child.");
            c = c[0];
          }
          a = c;
        }
        a == null && (a = ""), e = a;
      }
      a = pa(e), t.defaultValue = a, c = t.textContent, c === a && c !== "" && c !== null && (t.value = c), jr(t);
    }
    function ai(t, e) {
      return t.serverProps === void 0 && t.serverTail.length === 0 && t.children.length === 1 && 3 < t.distanceFromLeaf && t.distanceFromLeaf > 15 - e ? ai(t.children[0], e) : t;
    }
    function Lt(t) {
      return "  " + "  ".repeat(t);
    }
    function ni(t) {
      return "+ " + "  ".repeat(t);
    }
    function rc(t) {
      return "- " + "  ".repeat(t);
    }
    function dc(t) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return t.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return t = t.type, t.displayName || t.name || null;
        case 11:
          return t = t.type.render, t.displayName || t.name || null;
        case 1:
          return t = t.type, t.displayName || t.name || null;
        default:
          return null;
      }
    }
    function Qn(t, e) {
      return r.test(t) ? (t = JSON.stringify(t), t.length > e - 2 ? 8 > e ? '{"..."}' : "{" + t.slice(0, e - 7) + '..."}' : "{" + t + "}") : t.length > e ? 5 > e ? '{"..."}' : t.slice(0, e - 3) + "..." : t;
    }
    function Vr(t, e, a) {
      var c = 120 - 2 * a;
      if (e === null)
        return ni(a) + Qn(t, c) + `
`;
      if (typeof e == "string") {
        for (var o = 0; o < e.length && o < t.length && e.charCodeAt(o) === t.charCodeAt(o); o++) ;
        return o > c - 8 && 10 < o && (t = "..." + t.slice(o - 8), e = "..." + e.slice(o - 8)), ni(a) + Qn(t, c) + `
` + rc(a) + Qn(e, c) + `
`;
      }
      return Lt(a) + Qn(t, c) + `
`;
    }
    function Zr(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(e, a) {
        return a;
      });
    }
    function ho(t, e) {
      switch (typeof t) {
        case "string":
          return t = JSON.stringify(t), t.length > e ? 5 > e ? '"..."' : t.slice(0, e - 4) + '..."' : t;
        case "object":
          if (t === null) return "null";
          if (Xe(t)) return "[...]";
          if (t.$$typeof === Ia)
            return (e = Bt(t.type)) ? "<" + e + ">" : "<...>";
          var a = Zr(t);
          if (a === "Object") {
            a = "", e -= 2;
            for (var c in t)
              if (t.hasOwnProperty(c)) {
                var o = JSON.stringify(c);
                if (o !== '"' + c + '"' && (c = o), e -= c.length - 2, o = ho(
                  t[c],
                  15 > e ? e : 15
                ), e -= o.length, 0 > e) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + c + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (e = t.displayName || t.name) ? "function " + e : "function";
        default:
          return String(t);
      }
    }
    function mo(t, e) {
      return typeof t != "string" || r.test(t) ? "{" + ho(t, e - 2) + "}" : t.length > e - 2 ? 5 > e ? '"..."' : '"' + t.slice(0, e - 5) + '..."' : '"' + t + '"';
    }
    function yo(t, e, a) {
      var c = 120 - a.length - t.length, o = [], f;
      for (f in e)
        if (e.hasOwnProperty(f) && f !== "children") {
          var d = mo(
            e[f],
            120 - a.length - f.length - 1
          );
          c -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + t + `>
` : 0 < c ? a + "<" + t + " " + o.join(" ") + `>
` : a + "<" + t + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function Lr(t, e, a) {
      var c = "", o = gt({}, e), f;
      for (f in t)
        if (t.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = ho(t[f], d);
          e.hasOwnProperty(f) ? (d = ho(e[f], d), c += ni(a) + f + ": " + h + `
`, c += rc(a) + f + ": " + d + `
`) : c += ni(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (t = ho(
          o[y],
          120 - 2 * a - y.length - 2
        ), c += rc(a) + y + ": " + t + `
`);
      return c;
    }
    function Hu(t, e, a, c) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += yo(
          t,
          e,
          Lt(c)
        );
      else {
        for (var d in e)
          if (e.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (c + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = e[d];
              y = a[y];
              var A = mo(
                p,
                h
              );
              h = mo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && Zr(p) === "Object" && Zr(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < A.indexOf("...") || -1 < h.indexOf("...")) ? o += Lt(c + 1) + d + `={{
` + Lr(
                p,
                y,
                c + 2
              ) + Lt(c + 1) + `}}
` : (o += ni(c + 1) + d + "=" + A + `
`, o += rc(c + 1) + d + "=" + h + `
`);
            } else
              o += Lt(c + 1) + d + "=" + mo(e[d], h) + `
`;
          }
        f.forEach(function(D) {
          if (D !== "children") {
            var S = 120 - 2 * (c + 1) - D.length - 1;
            o += rc(c + 1) + D + "=" + mo(a[D], S) + `
`;
          }
        }), o = o === "" ? Lt(c) + "<" + t + `>
` : Lt(c) + "<" + t + `
` + o + Lt(c) + `>
`;
      }
      return t = a.children, e = e.children, typeof t == "string" || typeof t == "number" || typeof t == "bigint" ? (f = "", (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (f = "" + e), o += Vr(f, "" + t, c + 1)) : (typeof e == "string" || typeof e == "number" || typeof e == "bigint") && (o = t == null ? o + Vr("" + e, null, c + 1) : o + Vr("" + e, void 0, c + 1)), o;
    }
    function va(t, e) {
      var a = dc(t);
      if (a === null) {
        for (a = "", t = t.child; t; )
          a += va(t, e), t = t.sibling;
        return a;
      }
      return Lt(e) + "<" + a + `>
`;
    }
    function Jr(t, e) {
      var a = ai(t, e);
      if (a !== t && (t.children.length !== 1 || t.children[0] !== a))
        return Lt(e) + `...
` + Jr(a, e + 1);
      a = "";
      var c = t.fiber._debugInfo;
      if (c)
        for (var o = 0; o < c.length; o++) {
          var f = c[o].name;
          typeof f == "string" && (a += Lt(e) + "<" + f + `>
`, e++);
        }
      if (c = "", o = t.fiber.pendingProps, t.fiber.tag === 6)
        c = Vr(o, t.serverProps, e), e++;
      else if (f = dc(t.fiber), f !== null)
        if (t.serverProps === void 0) {
          c = e;
          var d = 120 - 2 * c - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = mo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          c = Lt(c) + "<" + f + h + `>
`, e++;
        } else
          t.serverProps === null ? (c = yo(
            f,
            o,
            ni(e)
          ), e++) : typeof t.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (c = Hu(
            f,
            o,
            t.serverProps,
            e
          ), e++);
      var p = "";
      for (o = t.fiber.child, f = 0; o && f < t.children.length; )
        d = t.children[f], d.fiber === o ? (p += Jr(d, e), f++) : p += va(o, e), o = o.sibling;
      for (o && 0 < t.children.length && (p += Lt(e) + `...
`), o = t.serverTail, t.serverProps === null && e--, t = 0; t < o.length; t++)
        f = o[t], p = typeof f == "string" ? p + (rc(e) + Qn(f, 120 - 2 * e) + `
`) : p + yo(
          f.type,
          f.props,
          rc(e)
        );
      return a + c + p;
    }
    function hm(t) {
      try {
        return `

` + Jr(t, 0);
      } catch {
        return "";
      }
    }
    function wr(t, e, a) {
      for (var c = e, o = null, f = 0; c; )
        c === t && (f = 0), o = {
          fiber: c,
          children: o !== null ? [o] : [],
          serverProps: c === e ? a : c === t ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, c = c.return;
      return o !== null ? hm(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function mm(t, e) {
      var a = gt({}, t || Y), c = { tag: e };
      return v.indexOf(e) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), T.indexOf(e) !== -1 && (a.pTagInButtonScope = null), m.indexOf(e) !== -1 && e !== "address" && e !== "div" && e !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = c, e === "form" && (a.formTag = c), e === "a" && (a.aTagInScope = c), e === "button" && (a.buttonTagInScope = c), e === "nobr" && (a.nobrTagInScope = c), e === "p" && (a.pTagInButtonScope = c), e === "li" && (a.listItemTagAutoclosing = c), (e === "dd" || e === "dt") && (a.dlItemTagAutoclosing = c), e === "#document" || e === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = c), t !== null || e !== "#document" && e !== "html" && e !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Wf(t, e, a) {
      switch (e) {
        case "select":
          return t === "hr" || t === "option" || t === "optgroup" || t === "script" || t === "template" || t === "#text";
        case "optgroup":
          return t === "option" || t === "#text";
        case "option":
          return t === "#text";
        case "tr":
          return t === "th" || t === "td" || t === "style" || t === "script" || t === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return t === "tr" || t === "style" || t === "script" || t === "template";
        case "colgroup":
          return t === "col" || t === "template";
        case "table":
          return t === "caption" || t === "colgroup" || t === "tbody" || t === "tfoot" || t === "thead" || t === "style" || t === "script" || t === "template";
        case "head":
          return t === "base" || t === "basefont" || t === "bgsound" || t === "link" || t === "meta" || t === "title" || t === "noscript" || t === "noframes" || t === "style" || t === "script" || t === "template";
        case "html":
          if (a) break;
          return t === "head" || t === "body" || t === "frameset";
        case "frameset":
          return t === "frame";
        case "#document":
          if (!a) return t === "html";
      }
      switch (t) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e !== "h1" && e !== "h2" && e !== "h3" && e !== "h4" && e !== "h5" && e !== "h6";
        case "rp":
        case "rt":
          return U.indexOf(e) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return e == null;
        case "head":
          return a || e === null;
        case "html":
          return a && e === "#document" || e === null;
        case "body":
          return a && (e === "#document" || e === "html") || e === null;
      }
      return !0;
    }
    function Ng(t, e) {
      switch (t) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return e.pTagInButtonScope;
        case "form":
          return e.formTag || e.pTagInButtonScope;
        case "li":
          return e.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return e.dlItemTagAutoclosing;
        case "button":
          return e.buttonTagInScope;
        case "a":
          return e.aTagInScope;
        case "nobr":
          return e.nobrTagInScope;
      }
      return null;
    }
    function ga(t, e) {
      for (; t; ) {
        switch (t.tag) {
          case 5:
          case 26:
          case 27:
            if (t.type === e) return t;
        }
        t = t.return;
      }
      return null;
    }
    function Ff(t, e) {
      e = e || Y;
      var a = e.current;
      if (e = (a = Wf(
        t,
        a && a.tag,
        e.implicitRootScope
      ) ? null : a) ? null : Ng(t, e), e = a || e, !e) return !0;
      var c = e.tag;
      if (e = String(!!a) + "|" + t + "|" + c, j[e]) return !1;
      j[e] = !0;
      var o = (e = ha) ? ga(e.return, c) : null, f = e !== null && o !== null ? wr(o, e, null) : "", d = "<" + t + ">";
      return a ? (a = "", c === "table" && t === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        c,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        c,
        f
      ), e && (t = e.return, o === null || t === null || o === t && t._debugOwner === e._debugOwner || $(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          c,
          d
        );
      })), !1;
    }
    function kf(t, e, a) {
      if (a || Wf("#text", e, !1))
        return !0;
      if (a = "#text|" + e, j[a]) return !1;
      j[a] = !0;
      var c = (a = ha) ? ga(a, e) : null;
      return a = a !== null && c !== null ? wr(
        c,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(t) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        e,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        e,
        a
      ), !1;
    }
    function ui(t, e) {
      if (e) {
        var a = t.firstChild;
        if (a && a === t.lastChild && a.nodeType === 3) {
          a.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    function po(t) {
      return t.replace(M, function(e, a) {
        return a.toUpperCase();
      });
    }
    function ym(t, e, a) {
      var c = e.indexOf("--") === 0;
      c || (-1 < e.indexOf("-") ? R.hasOwnProperty(e) && R[e] || (R[e] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        e,
        po(e.replace(ee, "ms-"))
      )) : lt.test(e) ? R.hasOwnProperty(e) && R[e] || (R[e] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        e,
        e.charAt(0).toUpperCase() + e.slice(1)
      )) : !z.test(a) || G.hasOwnProperty(a) && G[a] || (G[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        e,
        a.replace(z, "")
      )), typeof a == "number" && (isNaN(a) ? P || (P = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        e
      )) : isFinite(a) || Yt || (Yt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        e
      )))), a == null || typeof a == "boolean" || a === "" ? c ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : c ? t.setProperty(e, a) : typeof a != "number" || a === 0 || F.has(e) ? e === "float" ? t.cssFloat = a : (nm(a, e), t[e] = ("" + a).trim()) : t[e] = a + "px";
    }
    function pm(t, e, a) {
      if (e != null && typeof e != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (e && Object.freeze(e), t = t.style, a != null) {
        if (e) {
          var c = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !e.hasOwnProperty(o))
                for (var f = C[o] || [o], d = 0; d < f.length; d++)
                  c[f[d]] = o;
          }
          for (var h in e)
            if (e.hasOwnProperty(h) && (!a || a[h] !== e[h]))
              for (o = C[h] || [h], f = 0; f < o.length; f++)
                c[o[f]] = h;
          h = {};
          for (var y in e)
            for (o = C[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in c)
            if (o = c[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var A = e[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                A == null || typeof A == "boolean" || A === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var D in a)
          !a.hasOwnProperty(D) || e != null && e.hasOwnProperty(D) || (D.indexOf("--") === 0 ? t.setProperty(D, "") : D === "float" ? t.cssFloat = "" : t[D] = "");
        for (var S in e)
          p = e[S], e.hasOwnProperty(S) && a[S] !== p && ym(t, S, p);
      } else
        for (c in e)
          e.hasOwnProperty(c) && ym(t, c, e[c]);
    }
    function Vn(t) {
      if (t.indexOf("-") === -1) return !1;
      switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function rp(t) {
      return Xt.get(t) || t;
    }
    function dp(t, e) {
      if (Ba.call(Oh, e) && Oh[e])
        return !0;
      if (U2.test(e)) {
        if (t = "aria-" + e.slice(4).toLowerCase(), t = qv.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            e
          ), Oh[e] = !0;
        if (e !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            e,
            t
          ), Oh[e] = !0;
      }
      if (R2.test(e)) {
        if (t = e.toLowerCase(), t = qv.hasOwnProperty(t) ? t : null, t == null) return Oh[e] = !0, !1;
        e !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          e,
          t
        ), Oh[e] = !0);
      }
      return !0;
    }
    function hp(t, e) {
      var a = [], c;
      for (c in e)
        dp(t, c) || a.push(c);
      e = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        e,
        t
      );
    }
    function vm(t, e, a, c) {
      if (Ba.call(qa, e) && qa[e])
        return !0;
      var o = e.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), qa[e] = !0;
      if (typeof a == "function" && (t === "form" && e === "action" || t === "input" && e === "formAction" || t === "button" && e === "formAction"))
        return !0;
      if (c != null) {
        if (t = c.possibleRegistrationNames, c.registrationNameDependencies.hasOwnProperty(e))
          return !0;
        if (c = t.hasOwnProperty(o) ? t[o] : null, c != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            e,
            c
          ), qa[e] = !0;
        if (sS.test(e))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            e
          ), qa[e] = !0;
      } else if (sS.test(e))
        return C2.test(e) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          e
        ), qa[e] = !0;
      if (_2.test(e) || H2.test(e)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), qa[e] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), qa[e] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), qa[e] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          e
        ), qa[e] = !0;
      if (_n.hasOwnProperty(o)) {
        if (o = _n[o], o !== e)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            e,
            o
          ), qa[e] = !0;
      } else if (e !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          e,
          o
        ), qa[e] = !0;
      switch (e) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (e) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = e.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                e,
                e,
                a,
                e
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                e,
                e,
                a,
                e,
                e,
                e
              ), qa[e] = !0);
          }
        case "function":
        case "symbol":
          return qa[e] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (e) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              e,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              e,
              a
            ), qa[e] = !0;
          }
      }
      return !0;
    }
    function Yg(t, e, a) {
      var c = [], o;
      for (o in e)
        vm(t, o, e[o], a) || c.push(o);
      e = c.map(function(f) {
        return "`" + f + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      ) : 1 < c.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        e,
        t
      );
    }
    function If(t) {
      return B2.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Qa() {
    }
    function fn(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    function Kr(t) {
      var e = un(t);
      if (e && (t = e.stateNode)) {
        var a = t[Fl] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (sc(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), e = a.name, a.type === "radio" && e != null) {
              for (a = t; a.parentNode; ) a = a.parentNode;
              for (Ft(e, "name"), a = a.querySelectorAll(
                'input[name="' + kt(
                  "" + e
                ) + '"][type="radio"]'
              ), e = 0; e < a.length; e++) {
                var c = a[e];
                if (c !== t && c.form === t.form) {
                  var o = c[Fl] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  sc(
                    c,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (e = 0; e < a.length; e++)
                c = a[e], c.form === t.form && sm(c);
            }
            break t;
          case "textarea":
            li(t, a.value, a.defaultValue);
            break t;
          case "select":
            e = a.value, e != null && Xn(t, !!a.multiple, e, !1);
        }
      }
    }
    function $r(t, e, a) {
      if (Fg) return t(e, a);
      Fg = !0;
      try {
        var c = t(e);
        return c;
      } finally {
        if (Fg = !1, (Mh !== null || Rh !== null) && (Ca(), Mh && (e = Mh, t = Rh, Rh = Mh = null, Kr(e), t)))
          for (e = 0; e < t.length; e++) Kr(t[e]);
      }
    }
    function Zn(t, e) {
      var a = t.stateNode;
      if (a === null) return null;
      var c = a[Fl] || null;
      if (c === null) return null;
      a = c[e];
      t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (c = !c.disabled) || (t = t.type, c = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !c;
          break t;
        default:
          t = !1;
      }
      if (t) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + e + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function ci() {
      if (Nv) return Nv;
      var t, e = Ig, a = e.length, c, o = "value" in bf ? bf.value : bf.textContent, f = o.length;
      for (t = 0; t < a && e[t] === o[t]; t++) ;
      var d = a - t;
      for (c = 1; c <= d && e[a - c] === o[f - c]; c++) ;
      return Nv = o.slice(t, 1 < c ? 1 - c : void 0);
    }
    function Pf(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function vo() {
      return !0;
    }
    function gm() {
      return !1;
    }
    function Pe(t) {
      function e(a, c, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = c, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in t)
          t.hasOwnProperty(h) && (a = t[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? vo : gm, this.isPropagationStopped = gm, this;
      }
      return gt(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vo);
        },
        persist: function() {
        },
        isPersistent: vo
      }), e;
    }
    function Bu(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = w2[t]) ? !!e[t] : !1;
    }
    function ts() {
      return Bu;
    }
    function go(t, e) {
      switch (t) {
        case "keyup":
          return nT.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== mS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function qu(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    function Sm(t, e) {
      switch (t) {
        case "compositionend":
          return qu(e);
        case "keypress":
          return e.which !== pS ? null : (gS = !0, vS);
        case "textInput":
          return t = e.data, t === vS && gS ? null : t;
        default:
          return null;
      }
    }
    function Wr(t, e) {
      if (Uh)
        return t === "compositionend" || !l1 && go(t, e) ? (t = ci(), Nv = Ig = bf = null, Uh = !1, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
              return e.char;
            if (e.which)
              return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return yS && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    function bm(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!cT[t.type] : e === "textarea";
    }
    function Fr(t) {
      if (!Jc) return !1;
      t = "on" + t;
      var e = t in document;
      return e || (e = document.createElement("div"), e.setAttribute(t, "return;"), e = typeof e[t] == "function"), e;
    }
    function es(t, e, a, c) {
      Mh ? Rh ? Rh.push(c) : Rh = [c] : Mh = c, e = On(e, "onChange"), 0 < e.length && (a = new Yv(
        "onChange",
        "change",
        null,
        a,
        c
      ), t.push({ event: a, listeners: e }));
    }
    function mp(t) {
      Kt(t, 0);
    }
    function gl(t) {
      var e = fc(t);
      if (sm(e)) return t;
    }
    function hc(t, e) {
      if (t === "change") return e;
    }
    function ls() {
      g0 && (g0.detachEvent("onpropertychange", So), S0 = g0 = null);
    }
    function So(t) {
      if (t.propertyName === "value" && gl(S0)) {
        var e = [];
        es(
          e,
          S0,
          t,
          fn(t)
        ), $r(mp, e);
      }
    }
    function xg(t, e, a) {
      t === "focusin" ? (ls(), g0 = e, S0 = a, g0.attachEvent("onpropertychange", So)) : t === "focusout" && ls();
    }
    function Tm(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return gl(S0);
    }
    function Em(t, e) {
      if (t === "click") return gl(e);
    }
    function as(t, e) {
      if (t === "input" || t === "change")
        return gl(e);
    }
    function kr(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    function bo(t, e) {
      if (Na(t, e)) return !0;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
      var a = Object.keys(t), c = Object.keys(e);
      if (a.length !== c.length) return !1;
      for (c = 0; c < a.length; c++) {
        var o = a[c];
        if (!Ba.call(e, o) || !Na(t[o], e[o]))
          return !1;
      }
      return !0;
    }
    function yp(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function pp(t, e) {
      var a = yp(t);
      t = 0;
      for (var c; a; ) {
        if (a.nodeType === 3) {
          if (c = t + a.textContent.length, t <= e && c >= e)
            return { node: a, offset: e - t };
          t = c;
        }
        t: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break t;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = yp(a);
      }
    }
    function vp(t, e) {
      return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? vp(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
    }
    function Ir(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = on(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var a = typeof e.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) t = e.contentWindow;
        else break;
        e = on(t.document);
      }
      return e;
    }
    function Am(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    function gp(t, e, a) {
      var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      n1 || Ch == null || Ch !== on(c) || (c = Ch, "selectionStart" in c && Am(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
      }), b0 && bo(b0, c) || (b0 = c, c = On(a1, "onSelect"), 0 < c.length && (e = new Yv(
        "onSelect",
        "select",
        null,
        e,
        a
      ), t.push({ event: e, listeners: c }), e.target = Ch)));
    }
    function ii(t, e) {
      var a = {};
      return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
    }
    function oi(t) {
      if (u1[t]) return u1[t];
      if (!_h[t]) return t;
      var e = _h[t], a;
      for (a in e)
        if (e.hasOwnProperty(a) && a in bS)
          return u1[t] = e[a];
      return t;
    }
    function sn(t, e) {
      DS.set(t, e), cn(e, [t]);
    }
    function Sp(t) {
      for (var e = Gv, a = 0; a < t.length; a++) {
        var c = t[a];
        if (typeof c == "object" && c !== null)
          if (Xe(c) && c.length === 2 && typeof c[0] == "string") {
            if (e !== Gv && e !== s1)
              return o1;
            e = s1;
          } else return o1;
        else {
          if (typeof c == "function" || typeof c == "string" && 50 < c.length || e !== Gv && e !== f1)
            return o1;
          e = f1;
        }
      }
      return e;
    }
    function zm(t, e, a, c) {
      for (var o in t)
        Ba.call(t, o) && o[0] !== "_" && Ln(o, t[o], e, a, c);
    }
    function Ln(t, e, a, c, o) {
      switch (typeof e) {
        case "object":
          if (e === null) {
            e = "null";
            break;
          } else {
            if (e.$$typeof === Ia) {
              var f = Bt(e.type) || "…", d = e.key;
              e = e.props;
              var h = Object.keys(e), y = h.length;
              if (d == null && y === 0) {
                e = "<" + f + " />";
                break;
              }
              if (3 > c || y === 1 && h[0] === "children" && d == null) {
                e = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(c) + t,
                "<" + f
              ]), d !== null && Ln(
                "key",
                d,
                a,
                c + 1,
                o
              ), t = !1;
              for (var p in e)
                p === "children" ? e.children != null && (!Xe(e.children) || 0 < e.children.length) && (t = !0) : Ba.call(e, p) && p[0] !== "_" && Ln(
                  p,
                  e[p],
                  a,
                  c + 1,
                  o
                );
              a.push([
                "",
                t ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(e), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Sp(e), p === f1 || p === Gv) {
                e = JSON.stringify(e);
                break;
              } else if (p === s1) {
                for (a.push([
                  o + "  ".repeat(c) + t,
                  ""
                ]), t = 0; t < e.length; t++)
                  f = e[t], Ln(
                    f[0],
                    f[1],
                    a,
                    c + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (e.status === "fulfilled") {
                if (f = a.length, Ln(
                  t,
                  e.value,
                  a,
                  c,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (e.status === "rejected" && (f = a.length, Ln(
                t,
                e.reason,
                a,
                c,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(c) + t,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(e)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(c) + t,
              f === "Object" ? 3 > c ? "" : "…" : f
            ]), 3 > c && zm(e, a, c + 1, o);
            return;
          }
        case "function":
          e = e.name === "" ? "() => {}" : e.name + "() {}";
          break;
        case "string":
          e = e === hT ? "…" : JSON.stringify(e);
          break;
        case "undefined":
          e = "undefined";
          break;
        case "boolean":
          e = e ? "true" : "false";
          break;
        default:
          e = String(e);
      }
      a.push([
        o + "  ".repeat(c) + t,
        e
      ]);
    }
    function bp(t, e, a, c) {
      var o = !0;
      for (d in t)
        d in e || (a.push([
          jv + "  ".repeat(c) + d,
          "…"
        ]), o = !1);
      for (var f in e)
        if (f in t) {
          var d = t[f], h = e[f];
          if (d !== h) {
            if (c === 0 && f === "children")
              o = "  ".repeat(c) + f, a.push(
                [jv + o, "…"],
                [Xv + o, "…"]
              );
            else {
              if (!(3 <= c)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Ia) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Bt(h.type) || "…", o = "  ".repeat(c) + f, d = "<" + d + " … />", a.push(
                        [jv + o, d],
                        [Xv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        RS + "  ".repeat(c) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, bp(
                        d,
                        h,
                        a,
                        c + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    RS + "  ".repeat(c) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              Ln(f, d, a, c, jv), Ln(f, h, a, c, Xv);
            }
            o = !1;
          }
        } else
          a.push([
            Xv + "  ".repeat(c) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function rn(t) {
      qt = t & 63 ? "Blocking" : t & 64 ? "Gesture" : t & 4194176 ? "Transition" : t & 62914560 ? "Suspense" : t & 2080374784 ? "Idle" : "Other";
    }
    function Va(t, e, a, c) {
      pe && (Ef.start = e, Ef.end = a, Ki.color = "warning", Ki.tooltipText = c, Ki.properties = null, (t = t._debugTask) ? t.run(
        performance.measure.bind(
          performance,
          c,
          Ef
        )
      ) : performance.measure(c, Ef));
    }
    function Pr(t, e, a) {
      Va(t, e, a, "Reconnect");
    }
    function td(t, e, a, c, o) {
      var f = I(t);
      if (f !== null && pe) {
        var d = t.alternate, h = t.actualDuration;
        if (d === null || d.child !== t.child)
          for (var y = t.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        c = 0.5 > h ? c ? "tertiary-light" : "primary-light" : 10 > h ? c ? "tertiary" : "primary" : 100 > h ? c ? "tertiary-dark" : "primary-dark" : "error";
        var p = t.memoizedProps;
        h = t._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [mT], p = bp(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Tf && (d.lanes & o) === 0 && 100 < t.actualDuration ? (Tf = !0, y[0] = yT, Ki.color = "warning", Ki.tooltipText = US) : (Ki.color = c, Ki.tooltipText = f), Ki.properties = y, Ef.start = e, Ef.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Ef
          )
        ) : performance.measure(
          "​" + f,
          Ef
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            vu,
            void 0,
            c
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          vu,
          void 0,
          c
        );
      }
    }
    function Dm(t, e, a, c) {
      if (pe) {
        var o = I(t);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < c.length; h++) {
            var y = c[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          t.key !== null && Ln("key", t.key, d, 0, ""), t.memoizedProps !== null && zm(t.memoizedProps, d, 0, ""), f == null && (f = t._debugTask), t = {
            start: e,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: vu,
                tooltipText: t.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, t)
          ) : performance.measure("​" + o, t);
        }
      }
    }
    function dn(t, e, a, c, o) {
      if (o !== null) {
        if (pe) {
          var f = I(t);
          if (f !== null) {
            c = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              c.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            t.key !== null && Ln("key", t.key, c, 0, ""), t.memoizedProps !== null && zm(t.memoizedProps, c, 0, ""), e = {
              start: e,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: vu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: c
                }
              }
            }, (t = t._debugTask) ? t.run(
              performance.measure.bind(
                performance,
                "​" + f,
                e
              )
            ) : performance.measure("​" + f, e);
          }
        }
      } else
        f = I(t), f !== null && pe && (o = 1 > c ? "secondary-light" : 100 > c ? "secondary" : 500 > c ? "secondary-dark" : "error", (t = t._debugTask) ? t.run(
          console.timeStamp.bind(
            console,
            f,
            e,
            a,
            vu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          e,
          a,
          vu,
          void 0,
          o
        ));
    }
    function Gg(t, e, a, c) {
      if (pe && !(e <= t)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", c ? c.run(
          console.timeStamp.bind(
            console,
            a,
            t,
            e,
            qt,
            _t,
            o
          )
        ) : console.timeStamp(
          a,
          t,
          e,
          qt,
          _t,
          o
        );
      }
    }
    function Tp(t, e, a, c) {
      !pe || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          t,
          e,
          qt,
          _t,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        t,
        e,
        qt,
        _t,
        a
      ));
    }
    function Ep(t, e, a, c) {
      !pe || e <= t || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", c ? c.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          t,
          e,
          qt,
          _t,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        t,
        e,
        qt,
        _t,
        a
      ));
    }
    function jg(t, e, a, c, o, f) {
      if (pe && !(e <= t)) {
        a = [];
        for (var d = 0; d < c.length; d++) {
          var h = c[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "primary-dark",
              track: qt,
              trackGroup: _t,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", t)
        ) : performance.measure("Recovered", t);
      }
    }
    function Om(t, e, a, c) {
      !pe || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          "Errored",
          t,
          e,
          qt,
          _t,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        t,
        e,
        qt,
        _t,
        "error"
      ));
    }
    function Xg(t, e, a, c) {
      !pe || e <= t || (c ? c.run(
        console.timeStamp.bind(
          console,
          a,
          t,
          e,
          qt,
          _t,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        t,
        e,
        qt,
        _t,
        "secondary-light"
      ));
    }
    function Ap(t, e, a, c, o) {
      if (pe && !(e <= t)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        t = {
          start: t,
          end: e,
          detail: {
            devtools: {
              color: "error",
              track: qt,
              trackGroup: _t,
              tooltipText: c ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", t)
        ) : performance.measure("Errored", t);
      }
    }
    function Mm(t, e, a) {
      !pe || e <= t || console.timeStamp(
        "Animating",
        t,
        e,
        qt,
        _t,
        "secondary-dark"
      );
    }
    function ed() {
      for (var t = Hh, e = r1 = Hh = 0; e < t; ) {
        var a = gu[e];
        gu[e++] = null;
        var c = gu[e];
        gu[e++] = null;
        var o = gu[e];
        gu[e++] = null;
        var f = gu[e];
        if (gu[e++] = null, c !== null && o !== null) {
          var d = c.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), c.pending = o;
        }
        f !== 0 && Rm(a, o, f);
      }
    }
    function To(t, e, a, c) {
      gu[Hh++] = t, gu[Hh++] = e, gu[Hh++] = a, gu[Hh++] = c, r1 |= c, t.lanes |= c, t = t.alternate, t !== null && (t.lanes |= c);
    }
    function fi(t, e, a, c) {
      return To(t, e, a, c), ns(t);
    }
    function Dl(t, e) {
      return To(t, null, null, e), ns(t);
    }
    function Rm(t, e, a) {
      t.lanes |= a;
      var c = t.alternate;
      c !== null && (c.lanes |= a);
      for (var o = !1, f = t.return; f !== null; )
        f.childLanes |= a, c = f.alternate, c !== null && (c.childLanes |= a), f.tag === 22 && (t = f.stateNode, t === null || t._visibility & T0 || (o = !0)), t = f, f = f.return;
      return t.tag === 3 ? (f = t.stateNode, o && e !== null && (o = 31 - bl(a), t = f.hiddenUpdates, c = t[o], c === null ? t[o] = [e] : c.push(e), e.lane = a | 536870912), f) : null;
    }
    function ns(t) {
      if ($0 > _T)
        throw Or = $0 = 0, W0 = L1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Or > HT && (Or = 0, W0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), t.alternate === null && (t.flags & 4098) !== 0 && ka(t);
      for (var e = t, a = e.return; a !== null; )
        e.alternate === null && (e.flags & 4098) !== 0 && ka(t), e = a, a = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    function mc(t) {
      if (Su === null) return t;
      var e = Su(t);
      return e === void 0 ? t : e.current;
    }
    function ld(t) {
      if (Su === null) return t;
      var e = Su(t);
      return e === void 0 ? t != null && typeof t.render == "function" && (e = mc(t.render), t.render !== e) ? (e = { $$typeof: ff, render: e }, t.displayName !== void 0 && (e.displayName = t.displayName), e) : t : e.current;
    }
    function Um(t, e) {
      if (Su === null) return !1;
      var a = t.elementType;
      e = e.type;
      var c = !1, o = typeof e == "object" && e !== null ? e.$$typeof : null;
      switch (t.tag) {
        case 1:
          typeof e == "function" && (c = !0);
          break;
        case 0:
          (typeof e == "function" || o === Rl) && (c = !0);
          break;
        case 11:
          (o === ff || o === Rl) && (c = !0);
          break;
        case 14:
        case 15:
          (o === nr || o === Rl) && (c = !0);
          break;
        default:
          return !1;
      }
      return !!(c && (t = Su(a), t !== void 0 && t === Su(e)));
    }
    function si(t) {
      Su !== null && typeof WeakSet == "function" && (Bh === null && (Bh = /* @__PURE__ */ new WeakSet()), Bh.add(t));
    }
    function zp(t, e, a) {
      do {
        var c = t, o = c.alternate, f = c.child, d = c.sibling, h = c.tag;
        c = c.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = c;
            break;
          case 11:
            y = c.render;
        }
        if (Su === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (c = !1, y !== null && (y = Su(y), y !== void 0 && (a.has(y) ? c = !0 : e.has(y) && (h === 1 ? c = !0 : p = !0))), Bh !== null && (Bh.has(t) || o !== null && Bh.has(o)) && (c = !0), c && (t._debugNeedsRemount = !0), (c || p) && (o = Dl(t, 2), o !== null && ot(o, t, 2)), f === null || c || zp(
          f,
          e,
          a
        ), d === null) break;
        t = d;
      } while (!0);
    }
    function Qg(t, e, a, c) {
      this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, CS || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Cm(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Jn(t, e) {
      var a = t.alternate;
      switch (a === null ? (a = Gt(
        t.tag,
        e,
        t.key,
        t.mode
      ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a._debugOwner = t._debugOwner, a._debugStack = t._debugStack, a._debugTask = t._debugTask, a._debugHookTypes = t._debugHookTypes, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a.selfBaseDuration = t.selfBaseDuration, a.treeBaseDuration = t.treeBaseDuration, a._debugInfo = t._debugInfo, a._debugNeedsRemount = t._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = mc(t.type);
          break;
        case 1:
          a.type = mc(t.type);
          break;
        case 11:
          a.type = ld(t.type);
      }
      return a;
    }
    function _m(t, e) {
      t.flags &= 65011714;
      var a = t.alternate;
      return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null, t.selfBaseDuration = 0, t.treeBaseDuration = 0) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext,
        _debugThenableState: e._debugThenableState
      }, t.selfBaseDuration = a.selfBaseDuration, t.treeBaseDuration = a.treeBaseDuration), t;
    }
    function ri(t, e, a, c, o, f) {
      var d = 0, h = t;
      if (typeof t == "function")
        Cm(t) && (d = 1), h = mc(h);
      else if (typeof t == "string")
        d = Q(), d = Sv(t, a, d) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else
        t: switch (t) {
          case Cn:
            return e = Gt(31, a, e, o), e.elementType = Cn, e.lanes = f, e;
          case of:
            return di(
              a.children,
              o,
              f,
              e
            );
          case Wl:
            d = 8, o |= ma, o |= ec;
            break;
          case ar:
            return t = a, c = o, typeof t.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof t.id
            ), e = Gt(12, t, e, c | St), e.elementType = ar, e.lanes = f, e.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, e;
          case Vi:
            return e = Gt(13, a, e, o), e.elementType = Vi, e.lanes = f, e;
          case da:
            return e = Gt(19, a, e, o), e.elementType = da, e.lanes = f, e;
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case Un:
                  d = 10;
                  break t;
                case mh:
                  d = 9;
                  break t;
                case ff:
                  d = 11, h = ld(h);
                  break t;
                case nr:
                  d = 14;
                  break t;
                case Rl:
                  d = 16, h = null;
                  break t;
              }
            h = "", (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), t === null ? a = "null" : Xe(t) ? a = "array" : t !== void 0 && t.$$typeof === Ia ? (a = "<" + (Bt(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof t, (d = c ? la(c) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return e = Gt(d, a, e, o), e.elementType = t, e.type = h, e.lanes = f, e._debugOwner = c, e;
    }
    function yc(t, e, a) {
      return e = ri(
        t.type,
        t.key,
        t.props,
        t._owner,
        e,
        a
      ), e._debugOwner = t._owner, e._debugStack = t._debugStack, e._debugTask = t._debugTask, e;
    }
    function di(t, e, a, c) {
      return t = Gt(7, t, c, e), t.lanes = a, t;
    }
    function Eo(t, e, a) {
      return t = Gt(6, t, null, e), t.lanes = a, t;
    }
    function Hm(t) {
      var e = Gt(18, null, null, ct);
      return e.stateNode = t, e;
    }
    function ad(t, e, a) {
      return e = Gt(
        4,
        t.children !== null ? t.children : [],
        t.key,
        e
      ), e.lanes = a, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    function Yl(t, e) {
      if (typeof t == "object" && t !== null) {
        var a = d1.get(t);
        return a !== void 0 ? a : (e = {
          value: t,
          source: e,
          stack: Zf(e)
        }, d1.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Zf(e)
      };
    }
    function hn(t, e) {
      pc(), qh[Nh++] = E0, qh[Nh++] = Qv, Qv = t, E0 = e;
    }
    function Bm(t, e, a) {
      pc(), bu[Tu++] = Wi, bu[Tu++] = Fi, bu[Tu++] = rr, rr = t;
      var c = Wi;
      t = Fi;
      var o = 32 - bl(c) - 1;
      c &= ~(1 << o), a += 1;
      var f = 32 - bl(e) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (c & (1 << d) - 1).toString(32), c >>= d, o -= d, Wi = 1 << 32 - bl(e) + o | a << o | c, Fi = f + t;
      } else
        Wi = 1 << f | a << o | c, Fi = t;
    }
    function nd(t) {
      pc(), t.return !== null && (hn(t, 1), Bm(t, 1, 0));
    }
    function ud(t) {
      for (; t === Qv; )
        Qv = qh[--Nh], qh[Nh] = null, E0 = qh[--Nh], qh[Nh] = null;
      for (; t === rr; )
        rr = bu[--Tu], bu[Tu] = null, Fi = bu[--Tu], bu[Tu] = null, Wi = bu[--Tu], bu[Tu] = null;
    }
    function Dp() {
      return pc(), rr !== null ? { id: Wi, overflow: Fi } : null;
    }
    function Op(t, e) {
      pc(), bu[Tu++] = Wi, bu[Tu++] = Fi, bu[Tu++] = rr, Wi = e.id, Fi = e.overflow, rr = t;
    }
    function pc() {
      Ct || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function hi(t, e) {
      if (t.return === null) {
        if (Hn === null)
          Hn = {
            fiber: t,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: e
          };
        else {
          if (Hn.fiber !== t)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Hn.distanceFromLeaf > e && (Hn.distanceFromLeaf = e);
        }
        return Hn;
      }
      var a = hi(
        t.return,
        e + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === t ? (a = a[a.length - 1], a.distanceFromLeaf > e && (a.distanceFromLeaf = e), a) : (e = {
        fiber: t,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: e
      }, a.push(e), e);
    }
    function Mp() {
      Ct && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Ol(t, e) {
      wc || (t = hi(t, 0), t.serverProps = null, e !== null && (e = yv(e), t.serverTail.push(e)));
    }
    function Za(t) {
      var e = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", c = Hn;
      throw c !== null && (Hn = null, a = hm(c)), cs(
        Yl(
          Error(
            "Hydration failed because the server rendered " + (e ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          t
        )
      ), h1;
    }
    function qm(t) {
      var e = t.stateNode, a = t.type, c = t.memoizedProps;
      switch (e[ye] = t, e[Fl] = c, Kl(a, c), a) {
        case "dialog":
          ut("cancel", e), ut("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          ut("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < F0.length; a++)
            ut(F0[a], e);
          break;
        case "source":
          ut("error", e);
          break;
        case "img":
        case "image":
        case "link":
          ut("error", e), ut("load", e);
          break;
        case "details":
          ut("toggle", e);
          break;
        case "input":
          ti("input", c), ut("invalid", e), Nl(e, c), Xr(
            e,
            c.value,
            c.defaultValue,
            c.checked,
            c.defaultChecked,
            c.type,
            c.name,
            !0
          );
          break;
        case "option":
          sp(e, c);
          break;
        case "select":
          ti("select", c), ut("invalid", e), Qr(e, c);
          break;
        case "textarea":
          ti("textarea", c), ut("invalid", e), ei(e, c), ro(
            e,
            c.value,
            c.defaultValue,
            c.children
          );
      }
      a = c.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || c.suppressHydrationWarning === !0 || Yy(e.textContent, a) ? (c.popover != null && (ut("beforetoggle", e), ut("toggle", e)), c.onScroll != null && ut("scroll", e), c.onScrollEnd != null && ut("scrollend", e), c.onClick != null && (e.onclick = Qa), e = !0) : e = !1, e || Za(t, !0);
    }
    function Nm(t) {
      for (kl = t.return; kl; )
        switch (kl.tag) {
          case 5:
          case 31:
          case 13:
            Eu = !1;
            return;
          case 27:
          case 3:
            Eu = !0;
            return;
          default:
            kl = kl.return;
        }
    }
    function mi(t) {
      if (t !== kl) return !1;
      if (!Ct)
        return Nm(t), Ct = !0, !1;
      var e = t.tag, a;
      if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Po(t.type, t.memoizedProps)), a = !a), a && ve) {
        for (a = ve; a; ) {
          var c = hi(t, 0), o = yv(a);
          c.serverTail.push(o), a = o.type === "Suspense" ? lf(a) : _a(a.nextSibling);
        }
        Za(t);
      }
      if (Nm(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ve = lf(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        ve = lf(t);
      } else
        e === 27 ? (e = ve, jc(t.type) ? (t = lS, lS = null, ve = t) : ve = e) : ve = kl ? _a(t.stateNode.nextSibling) : null;
      return !0;
    }
    function vc() {
      ve = kl = null, wc = Ct = !1;
    }
    function us() {
      var t = zf;
      return t !== null && (ja === null ? ja = t : ja.push.apply(
        ja,
        t
      ), zf = null), t;
    }
    function cs(t) {
      zf === null ? zf = [t] : zf.push(t);
    }
    function gc() {
      var t = Hn;
      if (t !== null) {
        Hn = null;
        for (var e = hm(t); 0 < t.children.length; )
          t = t.children[0];
        $(t.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            e
          );
        });
      }
    }
    function Ao() {
      Yh = Vv = null, xh = !1;
    }
    function La(t, e, a) {
      Rt(m1, e._currentValue, t), e._currentValue = a, Rt(y1, e._currentRenderer, t), e._currentRenderer !== void 0 && e._currentRenderer !== null && e._currentRenderer !== HS && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), e._currentRenderer = HS;
    }
    function mn(t, e) {
      t._currentValue = m1.current;
      var a = y1.current;
      Nt(y1, e), t._currentRenderer = a, Nt(m1, e);
    }
    function cd(t, e, a) {
      for (; t !== null; ) {
        var c = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, c !== null && (c.childLanes |= e)) : c !== null && (c.childLanes & e) !== e && (c.childLanes |= e), t === a) break;
        t = t.return;
      }
      t !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Nu(t, e, a, c) {
      var o = t.child;
      for (o !== null && (o.return = t); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          t: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < e.length; y++)
              if (h.context === e[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), cd(
                  f.return,
                  a,
                  t
                ), c || (d = null);
                break t;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), cd(
            d,
            a,
            t
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === t) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function yn(t, e, a, c) {
      t = null;
      for (var o = e, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            Na(o.pendingProps.value, d.value) || (t !== null ? t.push(h) : t = [h]);
          }
        } else if (o === Zc.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ep) : t = [ep]);
        }
        o = o.return;
      }
      t !== null && Nu(
        e,
        t,
        a,
        c
      ), e.flags |= 262144;
    }
    function zo(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!Na(
          t.context._currentValue,
          t.memoizedValue
        ))
          return !0;
        t = t.next;
      }
      return !1;
    }
    function Sc(t) {
      Vv = t, Yh = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Qt(t) {
      return xh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Ym(Vv, t);
    }
    function is(t, e) {
      return Vv === null && Sc(t), Ym(t, e);
    }
    function Ym(t, e) {
      var a = e._currentValue;
      if (e = { context: e, memoizedValue: a, next: null }, Yh === null) {
        if (t === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Yh = e, t.dependencies = {
          lanes: 0,
          firstContext: e,
          _debugThenableState: null
        }, t.flags |= 524288;
      } else Yh = Yh.next = e;
      return a;
    }
    function id() {
      return {
        controller: new gT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function yi(t) {
      t.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), t.refCount++;
    }
    function os(t) {
      t.refCount--, 0 > t.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), t.refCount === 0 && ST(bT, function() {
        t.controller.abort();
      });
    }
    function wn(t, e, a) {
      (t & 127) !== 0 ? 0 > Kc && (Kc = ol(), z0 = Zv(e), p1 = e, a != null && (v1 = I(a)), (xt & (Al | Nn)) !== Hl && (Ne = !0, Of = A0), t = tf(), e = ru(), t !== Gh || e !== D0 ? Gh = -1.1 : e !== null && (Of = A0), mr = t, D0 = e) : (t & 4194048) !== 0 && 0 > Au && (Au = ol(), O0 = Zv(e), BS = e, a != null && (qS = I(a)), 0 > to) && (t = tf(), e = ru(), (t !== Rf || e !== yr) && (Rf = -1.1), Mf = t, yr = e);
    }
    function Rp(t) {
      if (0 > Kc) {
        Kc = ol(), z0 = t._debugTask != null ? t._debugTask : null, (xt & (Al | Nn)) !== Hl && (Of = A0);
        var e = tf(), a = ru();
        e !== Gh || a !== D0 ? Gh = -1.1 : a !== null && (Of = A0), mr = e, D0 = a;
      }
      0 > Au && (Au = ol(), O0 = t._debugTask != null ? t._debugTask : null, 0 > to) && (t = tf(), e = ru(), (t !== Rf || e !== yr) && (Rf = -1.1), Mf = t, yr = e);
    }
    function Kn() {
      var t = dr;
      return dr = 0, t;
    }
    function Do(t) {
      var e = dr;
      return dr = t, e;
    }
    function xl(t) {
      var e = dr;
      return dr += t, e;
    }
    function pi() {
      nt = et = -1.1;
    }
    function de() {
      var t = et;
      return et = -1.1, t;
    }
    function tl(t) {
      0 <= t && (et = t);
    }
    function Ja() {
      var t = Oe;
      return Oe = -0, t;
    }
    function Sa(t) {
      0 <= t && (Oe = t);
    }
    function ba() {
      var t = Ee;
      return Ee = null, t;
    }
    function wa() {
      var t = Ne;
      return Ne = !1, t;
    }
    function Yu(t) {
      Ya = ol(), 0 > t.actualStartTime && (t.actualStartTime = Ya);
    }
    function od(t) {
      if (0 <= Ya) {
        var e = ol() - Ya;
        t.actualDuration += e, t.selfBaseDuration = e, Ya = -1;
      }
    }
    function fs(t) {
      if (0 <= Ya) {
        var e = ol() - Ya;
        t.actualDuration += e, Ya = -1;
      }
    }
    function Gl() {
      if (0 <= Ya) {
        var t = ol(), e = t - Ya;
        Ya = -1, dr += e, Oe += e, nt = t;
      }
    }
    function Up(t) {
      Ee === null && (Ee = []), Ee.push(t), Ii === null && (Ii = []), Ii.push(t);
    }
    function Ae() {
      Ya = ol(), 0 > et && (et = Ya);
    }
    function vi(t) {
      for (var e = t.child; e; )
        t.actualDuration += e.actualDuration, e = e.sibling;
    }
    function xu(t, e) {
      if (R0 === null) {
        var a = R0 = [];
        S1 = 0, pr = Ny(), jh = {
          status: "pending",
          value: void 0,
          then: function(c) {
            a.push(c);
          }
        };
      }
      return S1++, e.then(xm, xm), e;
    }
    function xm() {
      if (--S1 === 0 && (-1 < Au || (to = -1.1), R0 !== null)) {
        jh !== null && (jh.status = "fulfilled");
        var t = R0;
        R0 = null, pr = 0, jh = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function fd(t, e) {
      var a = [], c = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return t.then(
        function() {
          c.status = "fulfilled", c.value = e;
          for (var o = 0; o < a.length; o++) (0, a[o])(e);
        },
        function(o) {
          for (c.status = "rejected", c.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), c;
    }
    function Gu() {
      var t = vr.current;
      return t !== null ? t : fe.pooledCache;
    }
    function Oo(t, e) {
      e === null ? Rt(vr, vr.current, t) : Rt(vr, e.pool, t);
    }
    function Gm() {
      var t = Gu();
      return t === null ? null : { parent: il._currentValue, pool: t };
    }
    function sd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function jm(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Ta(t, e, a) {
      B.actQueue !== null && (B.didUsePromise = !0);
      var c = t.thenables;
      if (a = c[a], a === void 0 ? c.push(e) : a !== e && (t.didWarnAboutUncachedPromise || (t.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), e.then(Qa, Qa), e = a), e._debugInfo === void 0) {
        t = performance.now(), c = e.displayName;
        var o = {
          name: typeof c == "string" ? c : "Promise",
          start: t,
          end: t,
          value: e
        };
        e._debugInfo = [{ awaited: o }], e.status !== "fulfilled" && e.status !== "rejected" && (t = function() {
          o.end = performance.now();
        }, e.then(t, t));
      }
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, ss(t), t;
        default:
          if (typeof e.status == "string")
            e.then(Qa, Qa);
          else {
            if (t = fe, t !== null && 100 < t.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            t = e, t.status = "pending", t.then(
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (e.status === "pending") {
                  var d = e;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, ss(t), t;
          }
          throw Sr = e, N0 = !0, Xh;
      }
    }
    function Ea(t) {
      try {
        return DT(t);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Sr = e, N0 = !0, Xh) : e;
      }
    }
    function gi() {
      if (Sr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = Sr;
      return Sr = null, N0 = !1, t;
    }
    function ss(t) {
      if (t === Xh || t === kv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ce(t) {
      var e = bt;
      return t != null && (bt = e === null ? t : e.concat(t)), e;
    }
    function ca() {
      var t = bt;
      if (t != null) {
        for (var e = t.length - 1; 0 <= e; e--)
          if (t[e].name != null) {
            var a = t[e].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function jl(t, e, a) {
      for (var c = Object.keys(t.props), o = 0; o < c.length; o++) {
        var f = c[o];
        if (f !== "children" && f !== "key") {
          e === null && (e = yc(t, a.mode, 0), e._debugInfo = bt, e.return = a), $(
            e,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function pn(t) {
      var e = Y0;
      return Y0 += 1, Qh === null && (Qh = sd()), Ta(Qh, t, e);
    }
    function ia(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function vn(t, e) {
      throw e.$$typeof === Dv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (t = Object.prototype.toString.call(e), Error(
        "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Ka(t, e) {
      var a = ca();
      a !== null ? a.run(
        vn.bind(null, t, e)
      ) : vn(t, e);
    }
    function Xm(t, e) {
      var a = I(t) || "Component";
      tb[a] || (tb[a] = !0, e = e.displayName || e.name || "Component", t.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        e,
        e,
        e
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        e,
        e,
        a,
        e,
        a
      ));
    }
    function Mo(t, e) {
      var a = ca();
      a !== null ? a.run(
        Xm.bind(null, t, e)
      ) : Xm(t, e);
    }
    function rd(t, e) {
      var a = I(t) || "Component";
      eb[a] || (eb[a] = !0, e = String(e), t.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        e
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        e,
        a
      ));
    }
    function rs(t, e) {
      var a = ca();
      a !== null ? a.run(
        rd.bind(null, t, e)
      ) : rd(t, e);
    }
    function el(t) {
      function e(g, b) {
        if (t) {
          var E = g.deletions;
          E === null ? (g.deletions = [b], g.flags |= 16) : E.push(b);
        }
      }
      function a(g, b) {
        if (!t) return null;
        for (; b !== null; )
          e(g, b), b = b.sibling;
        return null;
      }
      function c(g) {
        for (var b = /* @__PURE__ */ new Map(); g !== null; )
          g.key !== null ? b.set(g.key, g) : b.set(g.index, g), g = g.sibling;
        return b;
      }
      function o(g, b) {
        return g = Jn(g, b), g.index = 0, g.sibling = null, g;
      }
      function f(g, b, E) {
        return g.index = E, t ? (E = g.alternate, E !== null ? (E = E.index, E < b ? (g.flags |= 67108866, b) : E) : (g.flags |= 67108866, b)) : (g.flags |= 1048576, b);
      }
      function d(g) {
        return t && g.alternate === null && (g.flags |= 67108866), g;
      }
      function h(g, b, E, x) {
        return b === null || b.tag !== 6 ? (b = Eo(
          E,
          g.mode,
          x
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = bt, b) : (b = o(b, E), b.return = g, b._debugInfo = bt, b);
      }
      function y(g, b, E, x) {
        var J = E.type;
        return J === of ? (b = A(
          g,
          b,
          E.props.children,
          x,
          E.key
        ), jl(E, b, g), b) : b !== null && (b.elementType === J || Um(b, E) || typeof J == "object" && J !== null && J.$$typeof === Rl && Ea(J) === b.type) ? (b = o(b, E.props), ia(b, E), b.return = g, b._debugOwner = E._owner, b._debugInfo = bt, b) : (b = yc(E, g.mode, x), ia(b, E), b.return = g, b._debugInfo = bt, b);
      }
      function p(g, b, E, x) {
        return b === null || b.tag !== 4 || b.stateNode.containerInfo !== E.containerInfo || b.stateNode.implementation !== E.implementation ? (b = ad(E, g.mode, x), b.return = g, b._debugInfo = bt, b) : (b = o(b, E.children || []), b.return = g, b._debugInfo = bt, b);
      }
      function A(g, b, E, x, J) {
        return b === null || b.tag !== 7 ? (b = di(
          E,
          g.mode,
          x,
          J
        ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = bt, b) : (b = o(b, E), b.return = g, b._debugInfo = bt, b);
      }
      function D(g, b, E) {
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
          return b = Eo(
            "" + b,
            g.mode,
            E
          ), b.return = g, b._debugOwner = g, b._debugTask = g._debugTask, b._debugInfo = bt, b;
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case Ia:
              return E = yc(
                b,
                g.mode,
                E
              ), ia(E, b), E.return = g, g = Ce(b._debugInfo), E._debugInfo = bt, bt = g, E;
            case Qc:
              return b = ad(
                b,
                g.mode,
                E
              ), b.return = g, b._debugInfo = bt, b;
            case Rl:
              var x = Ce(b._debugInfo);
              return b = Ea(b), g = D(g, b, E), bt = x, g;
          }
          if (Xe(b) || Ie(b))
            return E = di(
              b,
              g.mode,
              E,
              null
            ), E.return = g, E._debugOwner = g, E._debugTask = g._debugTask, g = Ce(b._debugInfo), E._debugInfo = bt, bt = g, E;
          if (typeof b.then == "function")
            return x = Ce(b._debugInfo), g = D(
              g,
              pn(b),
              E
            ), bt = x, g;
          if (b.$$typeof === Un)
            return D(
              g,
              is(g, b),
              E
            );
          Ka(g, b);
        }
        return typeof b == "function" && Mo(g, b), typeof b == "symbol" && rs(g, b), null;
      }
      function S(g, b, E, x) {
        var J = b !== null ? b.key : null;
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return J !== null ? null : h(g, b, "" + E, x);
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Ia:
              return E.key === J ? (J = Ce(E._debugInfo), g = y(
                g,
                b,
                E,
                x
              ), bt = J, g) : null;
            case Qc:
              return E.key === J ? p(g, b, E, x) : null;
            case Rl:
              return J = Ce(E._debugInfo), E = Ea(E), g = S(
                g,
                b,
                E,
                x
              ), bt = J, g;
          }
          if (Xe(E) || Ie(E))
            return J !== null ? null : (J = Ce(E._debugInfo), g = A(
              g,
              b,
              E,
              x,
              null
            ), bt = J, g);
          if (typeof E.then == "function")
            return J = Ce(E._debugInfo), g = S(
              g,
              b,
              pn(E),
              x
            ), bt = J, g;
          if (E.$$typeof === Un)
            return S(
              g,
              b,
              is(g, E),
              x
            );
          Ka(g, E);
        }
        return typeof E == "function" && Mo(g, E), typeof E == "symbol" && rs(g, E), null;
      }
      function _(g, b, E, x, J) {
        if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
          return g = g.get(E) || null, h(b, g, "" + x, J);
        if (typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case Ia:
              return E = g.get(
                x.key === null ? E : x.key
              ) || null, g = Ce(x._debugInfo), b = y(
                b,
                E,
                x,
                J
              ), bt = g, b;
            case Qc:
              return g = g.get(
                x.key === null ? E : x.key
              ) || null, p(b, g, x, J);
            case Rl:
              var rt = Ce(x._debugInfo);
              return x = Ea(x), b = _(
                g,
                b,
                E,
                x,
                J
              ), bt = rt, b;
          }
          if (Xe(x) || Ie(x))
            return E = g.get(E) || null, g = Ce(x._debugInfo), b = A(
              b,
              E,
              x,
              J,
              null
            ), bt = g, b;
          if (typeof x.then == "function")
            return rt = Ce(x._debugInfo), b = _(
              g,
              b,
              E,
              pn(x),
              J
            ), bt = rt, b;
          if (x.$$typeof === Un)
            return _(
              g,
              b,
              E,
              is(b, x),
              J
            );
          Ka(b, x);
        }
        return typeof x == "function" && Mo(b, x), typeof x == "symbol" && rs(b, x), null;
      }
      function Z(g, b, E, x) {
        if (typeof E != "object" || E === null) return x;
        switch (E.$$typeof) {
          case Ia:
          case Qc:
            Fc(g, b, E);
            var J = E.key;
            if (typeof J != "string") break;
            if (x === null) {
              x = /* @__PURE__ */ new Set(), x.add(J);
              break;
            }
            if (!x.has(J)) {
              x.add(J);
              break;
            }
            $(b, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                J
              );
            });
            break;
          case Rl:
            E = Ea(E), Z(g, b, E, x);
        }
        return x;
      }
      function w(g, b, E, x) {
        for (var J = null, rt = null, tt = null, k = b, vt = b = 0, ge = null; k !== null && vt < E.length; vt++) {
          k.index > vt ? (ge = k, k = null) : ge = k.sibling;
          var Fe = S(
            g,
            k,
            E[vt],
            x
          );
          if (Fe === null) {
            k === null && (k = ge);
            break;
          }
          J = Z(
            g,
            Fe,
            E[vt],
            J
          ), t && k && Fe.alternate === null && e(g, k), b = f(Fe, b, vt), tt === null ? rt = Fe : tt.sibling = Fe, tt = Fe, k = ge;
        }
        if (vt === E.length)
          return a(g, k), Ct && hn(g, vt), rt;
        if (k === null) {
          for (; vt < E.length; vt++)
            k = D(g, E[vt], x), k !== null && (J = Z(
              g,
              k,
              E[vt],
              J
            ), b = f(
              k,
              b,
              vt
            ), tt === null ? rt = k : tt.sibling = k, tt = k);
          return Ct && hn(g, vt), rt;
        }
        for (k = c(k); vt < E.length; vt++)
          ge = _(
            k,
            g,
            vt,
            E[vt],
            x
          ), ge !== null && (J = Z(
            g,
            ge,
            E[vt],
            J
          ), t && ge.alternate !== null && k.delete(
            ge.key === null ? vt : ge.key
          ), b = f(
            ge,
            b,
            vt
          ), tt === null ? rt = ge : tt.sibling = ge, tt = ge);
        return t && k.forEach(function(oo) {
          return e(g, oo);
        }), Ct && hn(g, vt), rt;
      }
      function re(g, b, E, x) {
        if (E == null)
          throw Error("An iterable object provided no iterator.");
        for (var J = null, rt = null, tt = b, k = b = 0, vt = null, ge = null, Fe = E.next(); tt !== null && !Fe.done; k++, Fe = E.next()) {
          tt.index > k ? (vt = tt, tt = null) : vt = tt.sibling;
          var oo = S(g, tt, Fe.value, x);
          if (oo === null) {
            tt === null && (tt = vt);
            break;
          }
          ge = Z(
            g,
            oo,
            Fe.value,
            ge
          ), t && tt && oo.alternate === null && e(g, tt), b = f(oo, b, k), rt === null ? J = oo : rt.sibling = oo, rt = oo, tt = vt;
        }
        if (Fe.done)
          return a(g, tt), Ct && hn(g, k), J;
        if (tt === null) {
          for (; !Fe.done; k++, Fe = E.next())
            tt = D(g, Fe.value, x), tt !== null && (ge = Z(
              g,
              tt,
              Fe.value,
              ge
            ), b = f(
              tt,
              b,
              k
            ), rt === null ? J = tt : rt.sibling = tt, rt = tt);
          return Ct && hn(g, k), J;
        }
        for (tt = c(tt); !Fe.done; k++, Fe = E.next())
          vt = _(
            tt,
            g,
            k,
            Fe.value,
            x
          ), vt !== null && (ge = Z(
            g,
            vt,
            Fe.value,
            ge
          ), t && vt.alternate !== null && tt.delete(
            vt.key === null ? k : vt.key
          ), b = f(
            vt,
            b,
            k
          ), rt === null ? J = vt : rt.sibling = vt, rt = vt);
        return t && tt.forEach(function(WT) {
          return e(g, WT);
        }), Ct && hn(g, k), J;
      }
      function Ht(g, b, E, x) {
        if (typeof E == "object" && E !== null && E.type === of && E.key === null && (jl(E, null, g), E = E.props.children), typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Ia:
              var J = Ce(E._debugInfo);
              t: {
                for (var rt = E.key; b !== null; ) {
                  if (b.key === rt) {
                    if (rt = E.type, rt === of) {
                      if (b.tag === 7) {
                        a(
                          g,
                          b.sibling
                        ), x = o(
                          b,
                          E.props.children
                        ), x.return = g, x._debugOwner = E._owner, x._debugInfo = bt, jl(E, x, g), g = x;
                        break t;
                      }
                    } else if (b.elementType === rt || Um(
                      b,
                      E
                    ) || typeof rt == "object" && rt !== null && rt.$$typeof === Rl && Ea(rt) === b.type) {
                      a(
                        g,
                        b.sibling
                      ), x = o(b, E.props), ia(x, E), x.return = g, x._debugOwner = E._owner, x._debugInfo = bt, g = x;
                      break t;
                    }
                    a(g, b);
                    break;
                  } else e(g, b);
                  b = b.sibling;
                }
                E.type === of ? (x = di(
                  E.props.children,
                  g.mode,
                  x,
                  E.key
                ), x.return = g, x._debugOwner = g, x._debugTask = g._debugTask, x._debugInfo = bt, jl(E, x, g), g = x) : (x = yc(
                  E,
                  g.mode,
                  x
                ), ia(x, E), x.return = g, x._debugInfo = bt, g = x);
              }
              return g = d(g), bt = J, g;
            case Qc:
              t: {
                for (J = E, E = J.key; b !== null; ) {
                  if (b.key === E)
                    if (b.tag === 4 && b.stateNode.containerInfo === J.containerInfo && b.stateNode.implementation === J.implementation) {
                      a(
                        g,
                        b.sibling
                      ), x = o(
                        b,
                        J.children || []
                      ), x.return = g, g = x;
                      break t;
                    } else {
                      a(g, b);
                      break;
                    }
                  else e(g, b);
                  b = b.sibling;
                }
                x = ad(
                  J,
                  g.mode,
                  x
                ), x.return = g, g = x;
              }
              return d(g);
            case Rl:
              return J = Ce(E._debugInfo), E = Ea(E), g = Ht(
                g,
                b,
                E,
                x
              ), bt = J, g;
          }
          if (Xe(E))
            return J = Ce(E._debugInfo), g = w(
              g,
              b,
              E,
              x
            ), bt = J, g;
          if (Ie(E)) {
            if (J = Ce(E._debugInfo), rt = Ie(E), typeof rt != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var tt = rt.call(E);
            return tt === E ? (g.tag !== 0 || Object.prototype.toString.call(g.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(tt) !== "[object Generator]") && (IS || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), IS = !0) : E.entries !== rt || A1 || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), A1 = !0), g = re(
              g,
              b,
              tt,
              x
            ), bt = J, g;
          }
          if (typeof E.then == "function")
            return J = Ce(E._debugInfo), g = Ht(
              g,
              b,
              pn(E),
              x
            ), bt = J, g;
          if (E.$$typeof === Un)
            return Ht(
              g,
              b,
              is(g, E),
              x
            );
          Ka(g, E);
        }
        return typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint" ? (J = "" + E, b !== null && b.tag === 6 ? (a(
          g,
          b.sibling
        ), x = o(b, J), x.return = g, g = x) : (a(g, b), x = Eo(
          J,
          g.mode,
          x
        ), x.return = g, x._debugOwner = g, x._debugTask = g._debugTask, x._debugInfo = bt, g = x), d(g)) : (typeof E == "function" && Mo(g, E), typeof E == "symbol" && rs(g, E), a(g, b));
      }
      return function(g, b, E, x) {
        var J = bt;
        bt = null;
        try {
          Y0 = 0;
          var rt = Ht(
            g,
            b,
            E,
            x
          );
          return Qh = null, rt;
        } catch (ge) {
          if (ge === Xh || ge === kv) throw ge;
          var tt = Gt(29, ge, null, g.mode);
          tt.lanes = x, tt.return = g;
          var k = tt._debugInfo = bt;
          if (tt._debugOwner = g._debugOwner, tt._debugTask = g._debugTask, k != null) {
            for (var vt = k.length - 1; 0 <= vt; vt--)
              if (typeof k[vt].stack == "string") {
                tt._debugOwner = k[vt], tt._debugTask = k[vt].debugTask;
                break;
              }
          }
          return tt;
        } finally {
          bt = J;
        }
      };
    }
    function ue(t, e) {
      var a = Xe(t);
      return t = !a && typeof Ie(t) == "function", a || t ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        e,
        a
      ), !1) : !0;
    }
    function Ot(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function $n(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function Le(t) {
      return {
        lane: t,
        tag: ab,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Wn(t, e, a) {
      var c = t.updateQueue;
      if (c === null) return null;
      if (c = c.shared, D1 === c && !cb) {
        var o = I(t);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), cb = !0;
      }
      return (xt & Al) !== Hl ? (o = c.pending, o === null ? e.next = e : (e.next = o.next, o.next = e), c.pending = e, e = ns(t), Rm(t, null, a), e) : (To(t, c, e, a), ns(t));
    }
    function $a(t, e, a) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, cp(t, a);
      }
    }
    function ds(t, e) {
      var a = t.updateQueue, c = t.alternate;
      if (c !== null && (c = c.updateQueue, a === c)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = e : f = f.next = e;
        } else o = f = e;
        a = {
          baseState: c.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: c.shared,
          callbacks: c.callbacks
        }, t.updateQueue = a;
        return;
      }
      t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
    }
    function Ro() {
      if (O1) {
        var t = jh;
        if (t !== null) throw t;
      }
    }
    function Fn(t, e, a, c) {
      O1 = !1;
      var o = t.updateQueue;
      Uf = !1, D1 = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var A = t.alternate;
        A !== null && (A = A.updateQueue, h = A.lastBaseUpdate, h !== d && (h === null ? A.firstBaseUpdate = p : h.next = p, A.lastBaseUpdate = y));
      }
      if (f !== null) {
        var D = o.baseState;
        d = 0, A = p = y = null, h = f;
        do {
          var S = h.lane & -536870913, _ = S !== h.lane;
          if (_ ? (Tt & S) === S : (c & S) === S) {
            S !== 0 && S === pr && (O1 = !0), A !== null && (A = A.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            t: {
              S = t;
              var Z = h, w = e, re = a;
              switch (Z.tag) {
                case nb:
                  if (Z = Z.payload, typeof Z == "function") {
                    xh = !0;
                    var Ht = Z.call(
                      re,
                      D,
                      w
                    );
                    if (S.mode & ma) {
                      ne(!0);
                      try {
                        Z.call(re, D, w);
                      } finally {
                        ne(!1);
                      }
                    }
                    xh = !1, D = Ht;
                    break t;
                  }
                  D = Z;
                  break t;
                case z1:
                  S.flags = S.flags & -65537 | 128;
                case ab:
                  if (Ht = Z.payload, typeof Ht == "function") {
                    if (xh = !0, Z = Ht.call(
                      re,
                      D,
                      w
                    ), S.mode & ma) {
                      ne(!0);
                      try {
                        Ht.call(re, D, w);
                      } finally {
                        ne(!1);
                      }
                    }
                    xh = !1;
                  } else Z = Ht;
                  if (Z == null) break t;
                  D = gt({}, D, Z);
                  break t;
                case ub:
                  Uf = !0;
              }
            }
            S = h.callback, S !== null && (t.flags |= 64, _ && (t.flags |= 8192), _ = o.callbacks, _ === null ? o.callbacks = [S] : _.push(S));
          } else
            _ = {
              lane: S,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, A === null ? (p = A = _, y = D) : A = A.next = _, d |= S;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            _ = h, h = _.next, _.next = null, o.lastBaseUpdate = _, o.shared.pending = null;
          }
        } while (!0);
        A === null && (y = D), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = A, f === null && (o.shared.lanes = 0), Hf |= d, t.lanes = d, t.memoizedState = D;
      }
      D1 = null;
    }
    function bc(t, e) {
      if (typeof t != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + t
        );
      t.call(e);
    }
    function Qm(t, e) {
      var a = t.shared.hiddenCallbacks;
      if (a !== null)
        for (t.shared.hiddenCallbacks = null, t = 0; t < a.length; t++)
          bc(a[t], e);
    }
    function Uo(t, e) {
      var a = t.callbacks;
      if (a !== null)
        for (t.callbacks = null, t = 0; t < a.length; t++)
          bc(a[t], e);
    }
    function dd(t, e) {
      var a = Wc;
      Rt(Pv, a, t), Rt(Vh, e, t), Wc = a | e.baseLanes;
    }
    function ju(t) {
      Rt(Pv, Wc, t), Rt(
        Vh,
        Vh.current,
        t
      );
    }
    function gn(t) {
      Wc = Pv.current, Nt(Vh, t), Nt(Pv, t);
    }
    function Xl(t) {
      var e = t.alternate;
      Rt(
        We,
        We.current & Zh,
        t
      ), Rt(Bn, t, t), zu === null && (e === null || Vh.current !== null || e.memoizedState !== null) && (zu = t);
    }
    function Sn(t) {
      Rt(We, We.current, t), Rt(Bn, t, t), zu === null && (zu = t);
    }
    function hd(t) {
      t.tag === 22 ? (Rt(We, We.current, t), Rt(Bn, t, t), zu === null && (zu = t)) : kn(t);
    }
    function kn(t) {
      Rt(We, We.current, t), Rt(
        Bn,
        Bn.current,
        t
      );
    }
    function ll(t) {
      Nt(Bn, t), zu === t && (zu = null), Nt(We, t);
    }
    function Si(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var a = e.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || $s(a) || Gy(a)))
            return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    function ft() {
      var t = H;
      Ou === null ? Ou = [t] : Ou.push(t);
    }
    function X() {
      var t = H;
      if (Ou !== null && (ao++, Ou[ao] !== t)) {
        var e = I(st);
        if (!ib.has(e) && (ib.add(e), Ou !== null)) {
          for (var a = "", c = 0; c <= ao; c++) {
            var o = Ou[c], f = c === ao ? t : o;
            for (o = c + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            e,
            a
          );
        }
      }
    }
    function Xu(t) {
      t == null || Xe(t) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        H,
        typeof t
      );
    }
    function hs() {
      var t = I(st);
      fb.has(t) || (fb.add(t), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        t
      ));
    }
    function ze() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Vm(t, e) {
      if (j0) return !1;
      if (e === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          H
        ), !1;
      t.length !== e.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        H,
        "[" + e.join(", ") + "]",
        "[" + t.join(", ") + "]"
      );
      for (var a = 0; a < e.length && a < t.length; a++)
        if (!Na(t[a], e[a])) return !1;
      return !0;
    }
    function Zm(t, e, a, c, o, f) {
      eo = f, st = e, Ou = t !== null ? t._debugHookTypes : null, ao = -1, j0 = t !== null && t.type !== e.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = I(st), M1.has(f) || (M1.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), e.memoizedState = null, e.updateQueue = null, e.lanes = 0, B.H = t !== null && t.memoizedState !== null ? U1 : Ou !== null ? sb : R1, Tr = f = (e.mode & ma) !== ct;
      var d = b1(a, c, o);
      if (Tr = !1, Jh && (d = ms(
        e,
        a,
        c,
        o
      )), f) {
        ne(!0);
        try {
          d = ms(
            e,
            a,
            c,
            o
          );
        } finally {
          ne(!1);
        }
      }
      return _e(t, e), d;
    }
    function _e(t, e) {
      e._debugHookTypes = Ou, e.dependencies === null ? lo !== null && (e.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: lo
      }) : e.dependencies._debugThenableState = lo, B.H = X0;
      var a = oe !== null && oe.next !== null;
      if (eo = 0, Ou = H = fl = oe = st = null, ao = -1, t !== null && (t.flags & 65011712) !== (e.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), eg = !1, G0 = 0, lo = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      t === null || sl || (t = t.dependencies, t !== null && zo(t) && (sl = !0)), N0 ? (N0 = !1, t = !0) : t = !1, t && (e = I(e) || "Unknown", ob.has(e) || M1.has(e) || (ob.add(e), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function ms(t, e, a, c) {
      st = t;
      var o = 0;
      do {
        if (Jh && (lo = null), G0 = 0, Jh = !1, o >= MT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, j0 = !1, fl = oe = null, t.updateQueue != null) {
          var f = t.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        ao = -1, B.H = rb, f = b1(e, a, c);
      } while (Jh);
      return f;
    }
    function ys() {
      var t = B.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? gs(e) : e, t = t.useState()[0], (oe !== null ? oe.memoizedState : null) !== t && (st.flags |= 1024), e;
    }
    function bi() {
      var t = lg !== 0;
      return lg = 0, t;
    }
    function ps(t, e, a) {
      e.updateQueue = t.updateQueue, e.flags = (e.mode & ec) !== ct ? e.flags & -402655237 : e.flags & -2053, t.lanes &= ~a;
    }
    function Tc(t) {
      if (eg) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        eg = !1;
      }
      eo = 0, Ou = fl = oe = st = null, ao = -1, H = null, Jh = !1, G0 = lg = 0, lo = null;
    }
    function Ge() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return fl === null ? st.memoizedState = fl = t : fl = fl.next = t, fl;
    }
    function Jt() {
      if (oe === null) {
        var t = st.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = oe.next;
      var e = fl === null ? st.memoizedState : fl.next;
      if (e !== null)
        fl = e, oe = t;
      else {
        if (t === null)
          throw st.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        oe = t, t = {
          memoizedState: oe.memoizedState,
          baseState: oe.baseState,
          baseQueue: oe.baseQueue,
          queue: oe.queue,
          next: null
        }, fl === null ? st.memoizedState = fl = t : fl = fl.next = t;
      }
      return fl;
    }
    function vs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function gs(t) {
      var e = G0;
      return G0 += 1, lo === null && (lo = sd()), t = Ta(lo, t, e), e = st, (fl === null ? e.memoizedState : fl.next) === null && (e = e.alternate, B.H = e !== null && e.memoizedState !== null ? U1 : R1), t;
    }
    function Qu(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return gs(t);
        if (t.$$typeof === Un) return Qt(t);
      }
      throw Error("An unsupported type was passed to use(): " + String(t));
    }
    function Aa(t) {
      var e = null, a = st.updateQueue;
      if (a !== null && (e = a.memoCache), e == null) {
        var c = st.alternate;
        c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (e = {
          data: c.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = { data: [], index: 0 }), a === null && (a = vs(), st.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0 || j0)
        for (a = e.data[e.index] = Array(t), c = 0; c < t; c++)
          a[c] = Kg;
      else
        a.length !== t && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          t
        );
      return e.index++, a;
    }
    function za(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Co(t, e, a) {
      var c = Ge();
      if (a !== void 0) {
        var o = a(e);
        if (Tr) {
          ne(!0);
          try {
            a(e);
          } finally {
            ne(!1);
          }
        }
      } else o = e;
      return c.memoizedState = c.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, c.queue = t, t = t.dispatch = Vg.bind(
        null,
        st,
        t
      ), [c.memoizedState, t];
    }
    function Ti(t) {
      var e = Jt();
      return Ec(e, oe, t);
    }
    function Ec(t, e, a) {
      var c = t.queue;
      if (c === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      c.lastRenderedReducer = a;
      var o = t.baseQueue, f = c.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        e.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), e.baseQueue = o = f, c.pending = null;
      }
      if (f = t.baseState, o === null) t.memoizedState = f;
      else {
        e = o.next;
        var h = d = null, y = null, p = e, A = !1;
        do {
          var D = p.lane & -536870913;
          if (D !== p.lane ? (Tt & D) === D : (eo & D) === D) {
            var S = p.revertLane;
            if (S === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), D === pr && (A = !0);
            else if ((eo & S) === S) {
              p = p.next, S === pr && (A = !0);
              continue;
            } else
              D = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = D, d = f) : y = y.next = D, st.lanes |= S, Hf |= S;
            D = p.action, Tr && a(f, D), f = p.hasEagerState ? p.eagerState : a(f, D);
          } else
            S = {
              lane: D,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = S, d = f) : y = y.next = S, st.lanes |= D, Hf |= D;
          p = p.next;
        } while (p !== null && p !== e);
        if (y === null ? d = f : y.next = h, !Na(f, t.memoizedState) && (sl = !0, A && (a = jh, a !== null)))
          throw a;
        t.memoizedState = f, t.baseState = d, t.baseQueue = y, c.lastRenderedState = f;
      }
      return o === null && (c.lanes = 0), [t.memoizedState, c.dispatch];
    }
    function Ei(t) {
      var e = Jt(), a = e.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = t;
      var c = a.dispatch, o = a.pending, f = e.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = t(f, d.action), d = d.next;
        while (d !== o);
        Na(f, e.memoizedState) || (sl = !0), e.memoizedState = f, e.baseQueue === null && (e.baseState = f), a.lastRenderedState = f;
      }
      return [f, c];
    }
    function _o(t, e, a) {
      var c = st, o = Ge();
      if (Ct) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Lh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Lh = !0);
      } else {
        if (f = e(), Lh || (a = e(), Na(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Lh = !0)), fe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Tt & 127) !== 0 || Lm(c, e, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: e }, o.queue = a, Di(
        Ac.bind(null, c, a, t),
        [t]
      ), c.flags |= 2048, In(
        Du | Ga,
        { destroy: void 0 },
        Jm.bind(
          null,
          c,
          a,
          f,
          e
        ),
        null
      ), f;
    }
    function Ai(t, e, a) {
      var c = st, o = Jt(), f = Ct;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = e(), !Lh) {
        var d = e();
        Na(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Lh = !0);
      }
      (d = !Na(
        (oe || o).memoizedState,
        a
      )) && (o.memoizedState = a, sl = !0), o = o.queue;
      var h = Ac.bind(null, c, o, t);
      if (Je(2048, Ga, h, [t]), o.getSnapshot !== e || d || fl !== null && fl.memoizedState.tag & Du) {
        if (c.flags |= 2048, In(
          Du | Ga,
          { destroy: void 0 },
          Jm.bind(
            null,
            c,
            o,
            a,
            e
          ),
          null
        ), fe === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (eo & 127) !== 0 || Lm(c, e, a);
      }
      return a;
    }
    function Lm(t, e, a) {
      t.flags |= 16384, t = { getSnapshot: e, value: a }, e = st.updateQueue, e === null ? (e = vs(), st.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
    }
    function Jm(t, e, a, c) {
      e.value = a, e.getSnapshot = c, zc(e) && wm(t);
    }
    function Ac(t, e, a) {
      return a(function() {
        zc(e) && (wn(2, "updateSyncExternalStore()", t), wm(t));
      });
    }
    function zc(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var a = e();
        return !Na(t, a);
      } catch {
        return !0;
      }
    }
    function wm(t) {
      var e = Dl(t, 2);
      e !== null && ot(e, t, 2);
    }
    function md(t) {
      var e = Ge();
      if (typeof t == "function") {
        var a = t;
        if (t = a(), Tr) {
          ne(!0);
          try {
            a();
          } finally {
            ne(!1);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: za,
        lastRenderedState: t
      }, e;
    }
    function Dc(t) {
      t = md(t);
      var e = t.queue, a = bd.bind(null, st, e);
      return e.dispatch = a, [t.memoizedState, a];
    }
    function zi(t) {
      var e = Ge();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Ds.bind(
        null,
        st,
        !0,
        a
      ), a.dispatch = e, [t, e];
    }
    function Ss(t, e) {
      var a = Jt();
      return Ho(a, oe, t, e);
    }
    function Ho(t, e, a, c) {
      return t.baseState = a, Ec(
        t,
        oe,
        typeof c == "function" ? c : za
      );
    }
    function bs(t, e) {
      var a = Jt();
      return oe !== null ? Ho(a, oe, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    }
    function Cp(t, e, a, c, o) {
      if (al(t))
        throw Error("Cannot update form state while rendering.");
      if (t = e.action, t !== null) {
        var f = {
          payload: o,
          action: t,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        B.T !== null ? a(!0) : f.isTransition = !1, c(f), a = e.pending, a === null ? (f.next = e.pending = f, Oc(e, f)) : (f.next = a.next, e.pending = a.next = f);
      }
    }
    function Oc(t, e) {
      var a = e.action, c = e.payload, o = t.state;
      if (e.isTransition) {
        var f = B.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), B.T = d;
        try {
          var h = a(o, c), y = B.S;
          y !== null && y(d, h), Km(t, e, h);
        } catch (p) {
          Ts(t, e, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), B.T = f, f === null && d._updatedFibers && (t = d._updatedFibers.size, d._updatedFibers.clear(), 10 < t && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, c), Km(t, e, d);
        } catch (p) {
          Ts(t, e, p);
        }
    }
    function Km(t, e, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (B.asyncTransitions++, a.then(Oi, Oi), a.then(
        function(c) {
          Vu(t, e, c);
        },
        function(c) {
          return Ts(t, e, c);
        }
      ), e.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Vu(t, e, a);
    }
    function Vu(t, e, a) {
      e.status = "fulfilled", e.value = a, yd(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, Oc(t, a)));
    }
    function Ts(t, e, a) {
      var c = t.pending;
      if (t.pending = null, c !== null) {
        c = c.next;
        do
          e.status = "rejected", e.reason = a, yd(e), e = e.next;
        while (e !== c);
      }
      t.action = null;
    }
    function yd(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Zu(t, e) {
      return e;
    }
    function Da(t, e) {
      if (Ct) {
        var a = fe.formState;
        if (a !== null) {
          t: {
            var c = st;
            if (Ct) {
              if (ve) {
                e: {
                  for (var o = ve, f = Eu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break e;
                    }
                    if (o = _a(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break e;
                    }
                  }
                  f = o.data, o = f === I1 || f === Fb ? o : null;
                }
                if (o) {
                  ve = _a(
                    o.nextSibling
                  ), c = o.data === I1;
                  break t;
                }
              }
              Za(c);
            }
            c = !1;
          }
          c && (e = a[0]);
        }
      }
      return a = Ge(), a.memoizedState = a.baseState = e, c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zu,
        lastRenderedState: e
      }, a.queue = c, a = bd.bind(
        null,
        st,
        c
      ), c.dispatch = a, c = md(!1), f = Ds.bind(
        null,
        st,
        !1,
        c.queue
      ), c = Ge(), o = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, c.queue = o, a = Cp.bind(
        null,
        st,
        o,
        f,
        a
      ), o.dispatch = a, c.memoizedState = t, [e, a, !1];
    }
    function Mc(t) {
      var e = Jt();
      return pd(e, oe, t);
    }
    function pd(t, e, a) {
      if (e = Ec(
        t,
        e,
        Zu
      )[0], t = Ti(za)[0], typeof e == "object" && e !== null && typeof e.then == "function")
        try {
          var c = gs(e);
        } catch (d) {
          throw d === Xh ? kv : d;
        }
      else c = e;
      e = Jt();
      var o = e.queue, f = o.dispatch;
      return a !== e.memoizedState && (st.flags |= 2048, In(
        Du | Ga,
        { destroy: void 0 },
        $m.bind(null, o, a),
        null
      )), [c, f, t];
    }
    function $m(t, e) {
      t.action = e;
    }
    function Rc(t) {
      var e = Jt(), a = oe;
      if (a !== null)
        return pd(e, a, t);
      Jt(), e = e.memoizedState, a = Jt();
      var c = a.queue.dispatch;
      return a.memoizedState = t, [e, c, !1];
    }
    function In(t, e, a, c) {
      return t = { tag: t, create: a, deps: c, inst: e, next: null }, e = st.updateQueue, e === null && (e = vs(), st.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (c = a.next, a.next = t, t.next = c, e.lastEffect = t), t;
    }
    function vd(t) {
      var e = Ge();
      return t = { current: t }, e.memoizedState = t;
    }
    function Uc(t, e, a, c) {
      var o = Ge();
      st.flags |= t, o.memoizedState = In(
        Du | e,
        { destroy: void 0 },
        a,
        c === void 0 ? null : c
      );
    }
    function Je(t, e, a, c) {
      var o = Jt();
      c = c === void 0 ? null : c;
      var f = o.memoizedState.inst;
      oe !== null && c !== null && Vm(c, oe.memoizedState.deps) ? o.memoizedState = In(e, f, a, c) : (st.flags |= t, o.memoizedState = In(
        Du | e,
        f,
        a,
        c
      ));
    }
    function Di(t, e) {
      (st.mode & ec) !== ct ? Uc(276826112, Ga, t, e) : Uc(8390656, Ga, t, e);
    }
    function _p(t) {
      st.flags |= 4;
      var e = st.updateQueue;
      if (e === null)
        e = vs(), st.updateQueue = e, e.events = [t];
      else {
        var a = e.events;
        a === null ? e.events = [t] : a.push(t);
      }
    }
    function Es(t) {
      var e = Ge(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((xt & Al) !== Hl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function Bo(t) {
      var e = Jt().memoizedState;
      return _p({ ref: e, nextImpl: t }), function() {
        if ((xt & Al) !== Hl)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return e.impl.apply(void 0, arguments);
      };
    }
    function Ql(t, e) {
      var a = 4194308;
      return (st.mode & ec) !== ct && (a |= 134217728), Uc(a, qn, t, e);
    }
    function Oa(t, e) {
      if (typeof e == "function") {
        t = t();
        var a = e(t);
        return function() {
          typeof a == "function" ? a() : e(null);
        };
      }
      if (e != null)
        return e.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(e).join(", ") + "}"
        ), t = t(), e.current = t, function() {
          e.current = null;
        };
    }
    function Pn(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null;
      var c = 4194308;
      (st.mode & ec) !== ct && (c |= 134217728), Uc(
        c,
        qn,
        Oa.bind(null, e, t),
        a
      );
    }
    function qo(t, e, a) {
      typeof e != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        e !== null ? typeof e : "null"
      ), a = a != null ? a.concat([t]) : null, Je(
        4,
        qn,
        Oa.bind(null, e, t),
        a
      );
    }
    function gd(t, e) {
      return Ge().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    }
    function bn(t, e) {
      var a = Jt();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      return e !== null && Vm(e, c[1]) ? c[0] : (a.memoizedState = [t, e], t);
    }
    function Vl(t, e) {
      var a = Ge();
      e = e === void 0 ? null : e;
      var c = t();
      if (Tr) {
        ne(!0);
        try {
          t();
        } finally {
          ne(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function he(t, e) {
      var a = Jt();
      e = e === void 0 ? null : e;
      var c = a.memoizedState;
      if (e !== null && Vm(e, c[1]))
        return c[0];
      if (c = t(), Tr) {
        ne(!0);
        try {
          t();
        } finally {
          ne(!1);
        }
      }
      return a.memoizedState = [c, e], c;
    }
    function No(t, e) {
      var a = Ge();
      return wt(a, t, e);
    }
    function tu(t, e) {
      var a = Jt();
      return He(
        a,
        oe.memoizedState,
        t,
        e
      );
    }
    function mt(t, e) {
      var a = Jt();
      return oe === null ? wt(a, t, e) : He(
        a,
        oe.memoizedState,
        t,
        e
      );
    }
    function wt(t, e, a) {
      return a === void 0 || (eo & 1073741824) !== 0 && (Tt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = Zo(), st.lanes |= t, Hf |= t, a);
    }
    function He(t, e, a, c) {
      return Na(a, e) ? a : Vh.current !== null ? (t = wt(t, a, c), Na(t, e) || (sl = !0), t) : (eo & 42) === 0 || (eo & 1073741824) !== 0 && (Tt & 261930) === 0 ? (sl = !0, t.memoizedState = a) : (t = Zo(), st.lanes |= t, Hf |= t, e);
    }
    function Oi() {
      B.asyncTransitions--;
    }
    function Mi(t, e, a, c, o) {
      var f = Zt.p;
      Zt.p = f !== 0 && f < Tl ? f : Tl;
      var d = B.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), B.T = h, Ds(t, !1, e, a);
      try {
        var y = o(), p = B.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          B.asyncTransitions++, y.then(Oi, Oi);
          var A = fd(
            y,
            c
          );
          Ri(
            t,
            e,
            A,
            Ml(t)
          );
        } else
          Ri(
            t,
            e,
            c,
            Ml(t)
          );
      } catch (D) {
        Ri(
          t,
          e,
          { then: function() {
          }, status: "rejected", reason: D },
          Ml(t)
        );
      } finally {
        Zt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), B.T = d, d === null && h._updatedFibers && (t = h._updatedFibers.size, h._updatedFibers.clear(), 10 < t && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Lu(t, e, a, c) {
      if (t.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = As(t).queue;
      Rp(t), Mi(
        t,
        o,
        e,
        Hr,
        a === null ? Pl : function() {
          return Yo(t), a(c);
        }
      );
    }
    function As(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Hr,
        baseState: Hr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: za,
          lastRenderedState: Hr
        },
        next: null
      };
      var a = {};
      return e.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: za,
          lastRenderedState: a
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Yo(t) {
      B.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var e = As(t);
      e.next === null && (e = t.alternate.memoizedState), Ri(
        t,
        e.next.queue,
        {},
        Ml(t)
      );
    }
    function Cc() {
      var t = md(!1);
      return t = Mi.bind(
        null,
        st,
        t.queue,
        !0,
        !1
      ), Ge().memoizedState = t, [!1, t];
    }
    function Hp() {
      var t = Ti(za)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : gs(t),
        e
      ];
    }
    function Se() {
      var t = Ei(za)[0], e = Jt().memoizedState;
      return [
        typeof t == "boolean" ? t : gs(t),
        e
      ];
    }
    function Ju() {
      return Qt(ep);
    }
    function zs() {
      var t = Ge(), e = fe.identifierPrefix;
      if (Ct) {
        var a = Fi, c = Wi;
        a = (c & ~(1 << 32 - bl(c) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = lg++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = OT++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    }
    function Sd() {
      return Ge().memoizedState = Bp.bind(
        null,
        st
      );
    }
    function Bp(t, e) {
      for (var a = t.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var c = Ml(a), o = Le(c), f = Wn(a, o, c);
            f !== null && (wn(c, "refresh()", t), ot(f, a, c), $a(f, a, c)), t = id(), e != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: t };
            return;
        }
        a = a.return;
      }
    }
    function Vg(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Ml(t);
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      al(t) ? De(e, o) : (o = fi(t, e, o, c), o !== null && (wn(c, "dispatch()", t), ot(o, t, c), Os(o, e, c)));
    }
    function bd(t, e, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Ml(t), Ri(t, e, a, c) && wn(c, "setState()", t);
    }
    function Ri(t, e, a, c) {
      var o = {
        lane: c,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (al(t)) De(e, o);
      else {
        var f = t.alternate;
        if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = e.lastRenderedReducer, f !== null)) {
          var d = B.H;
          B.H = ac;
          try {
            var h = e.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, Na(y, h))
              return To(t, e, o, 0), fe === null && ed(), !1;
          } catch {
          } finally {
            B.H = d;
          }
        }
        if (a = fi(t, e, o, c), a !== null)
          return ot(a, t, c), Os(a, e, c), !0;
      }
      return !1;
    }
    function Ds(t, e, a, c) {
      if (B.T === null && pr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), c = {
        lane: 2,
        revertLane: Ny(),
        gesture: null,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, al(t)) {
        if (e)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        e = fi(
          t,
          a,
          c,
          2
        ), e !== null && (wn(2, "setOptimistic()", t), ot(e, t, 2));
    }
    function al(t) {
      var e = t.alternate;
      return t === st || e !== null && e === st;
    }
    function De(t, e) {
      Jh = eg = !0;
      var a = t.pending;
      a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
    }
    function Os(t, e, a) {
      if ((a & 4194048) !== 0) {
        var c = e.lanes;
        c &= t.pendingLanes, a |= c, e.lanes = a, cp(t, a);
      }
    }
    function Ui(t) {
      if (t !== null && typeof t != "function") {
        var e = String(t);
        Eb.has(e) || (Eb.add(e), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function xo(t, e, a, c) {
      var o = t.memoizedState, f = a(c, o);
      if (t.mode & ma) {
        ne(!0);
        try {
          f = a(c, o);
        } finally {
          ne(!1);
        }
      }
      f === void 0 && (e = Bt(e) || "Component", gb.has(e) || (gb.add(e), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        e
      ))), o = f == null ? o : gt({}, o, f), t.memoizedState = o, t.lanes === 0 && (t.updateQueue.baseState = o);
    }
    function Td(t, e, a, c, o, f, d) {
      var h = t.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          c,
          f,
          d
        ), t.mode & ma) {
          ne(!0);
          try {
            a = h.shouldComponentUpdate(
              c,
              f,
              d
            );
          } finally {
            ne(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Bt(e) || "Component"
        ), a;
      }
      return e.prototype && e.prototype.isPureReactComponent ? !bo(a, c) || !bo(o, f) : !0;
    }
    function eu(t, e, a, c) {
      var o = e.state;
      typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, c), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, c), e.state !== o && (t = I(t) || "Component", hb.has(t) || (hb.add(t), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        t
      )), C1.enqueueReplaceState(
        e,
        e.state,
        null
      ));
    }
    function lu(t, e) {
      var a = e;
      if ("ref" in e) {
        a = {};
        for (var c in e)
          c !== "ref" && (a[c] = e[c]);
      }
      if (t = t.defaultProps) {
        a === e && (a = gt({}, a));
        for (var o in t)
          a[o] === void 0 && (a[o] = t[o]);
      }
      return a;
    }
    function Ed(t) {
      i1(t), console.warn(
        `%s

%s
`,
        wh ? "An error occurred in the <" + wh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Ad(t) {
      var e = wh ? "The above error occurred in the <" + wh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((_1 || "Anonymous") + ".");
      if (typeof t == "object" && t !== null && typeof t.environmentName == "string") {
        var c = t.environmentName;
        t = [
          `%o

%s

%s
`,
          t,
          e,
          a
        ].slice(0), typeof t[0] == "string" ? t.splice(
          0,
          1,
          n2 + " " + t[0],
          u2,
          Mg + c + Mg,
          c2
        ) : t.splice(
          0,
          0,
          n2,
          u2,
          Mg + c + Mg,
          c2
        ), t.unshift(console), c = KT.apply(console.error, t), c();
      } else
        console.error(
          `%o

%s

%s
`,
          t,
          e,
          a
        );
    }
    function Wm(t) {
      i1(t);
    }
    function Ms(t, e) {
      try {
        wh = e.source ? I(e.source) : null, _1 = null;
        var a = e.value;
        if (B.actQueue !== null)
          B.thrownErrors.push(a);
        else {
          var c = t.onUncaughtError;
          c(a, { componentStack: e.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Fm(t, e, a) {
      try {
        wh = a.source ? I(a.source) : null, _1 = I(e);
        var c = t.onCaughtError;
        c(a.value, {
          componentStack: a.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function zd(t, e, a) {
      return a = Le(a), a.tag = z1, a.payload = { element: null }, a.callback = function() {
        $(e.source, Ms, t, e);
      }, a;
    }
    function Dd(t) {
      return t = Le(t), t.tag = z1, t;
    }
    function Od(t, e, a, c) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = c.value;
        t.payload = function() {
          return o(f);
        }, t.callback = function() {
          si(a), $(
            c.source,
            Fm,
            e,
            a,
            c
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (t.callback = function() {
        si(a), $(
          c.source,
          Fm,
          e,
          a,
          c
        ), typeof o != "function" && (qf === null ? qf = /* @__PURE__ */ new Set([this]) : qf.add(this)), ET(this, c), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          I(a) || "Unknown"
        );
      });
    }
    function km(t, e, a, c, o) {
      if (a.flags |= 32768, yu && $o(t, o), c !== null && typeof c == "object" && typeof c.then == "function") {
        if (e = a.alternate, e !== null && yn(
          e,
          a,
          o,
          !0
        ), Ct && (wc = !0), a = Bn.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return zu === null ? Jo() : a.alternate === null && Me === uo && (Me = ug), a.flags &= -257, a.flags |= 65536, a.lanes = o, c === Iv ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([c]) : e.add(c), wd(t, c, o)), !1;
            case 22:
              return a.flags |= 65536, c === Iv ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([c])
              }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([c]) : a.add(c)), wd(t, c, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return wd(t, c, o), Jo(), !1;
      }
      if (Ct)
        return wc = !0, e = Bn.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, c !== h1 && cs(
          Yl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: c }
            ),
            a
          )
        )) : (c !== h1 && cs(
          Yl(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: c }
            ),
            a
          )
        ), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, c = Yl(c, a), o = zd(
          t.stateNode,
          c,
          o
        ), ds(t, o), Me !== Cf && (Me = Er)), !1;
      var f = Yl(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: c }
        ),
        a
      );
      if (w0 === null ? w0 = [f] : w0.push(f), Me !== Cf && (Me = Er), e === null) return !0;
      c = Yl(c, a), a = e;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, t = o & -o, a.lanes |= t, t = zd(
              a.stateNode,
              c,
              t
            ), ds(a, t), !1;
          case 1:
            if (e = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (qf === null || !qf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Dd(o), Od(
                o,
                t,
                a,
                c
              ), ds(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function nl(t, e, a, c) {
      e.child = t === null ? lb(e, null, a, c) : br(
        e,
        t.child,
        a,
        c
      );
    }
    function qp(t, e, a, c, o) {
      a = a.render;
      var f = e.ref;
      if ("ref" in c) {
        var d = {};
        for (var h in c)
          h !== "ref" && (d[h] = c[h]);
      } else d = c;
      return Sc(e), c = Zm(
        t,
        e,
        a,
        d,
        f,
        o
      ), h = bi(), t !== null && !sl ? (ps(t, e, o), Tn(t, e, o)) : (Ct && h && nd(e), e.flags |= 1, nl(t, e, c, o), e.child);
    }
    function Im(t, e, a, c, o) {
      if (t === null) {
        var f = a.type;
        return typeof f == "function" && !Cm(f) && f.defaultProps === void 0 && a.compare === null ? (a = mc(f), e.tag = 15, e.type = a, Go(e, f), Pm(
          t,
          e,
          a,
          c,
          o
        )) : (t = ri(
          a.type,
          null,
          c,
          e,
          e.mode,
          o
        ), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (f = t.child, !_d(t, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : bo, a(d, c) && t.ref === e.ref)
          return Tn(
            t,
            e,
            o
          );
      }
      return e.flags |= 1, t = Jn(f, c), t.ref = e.ref, t.return = e, e.child = t;
    }
    function Pm(t, e, a, c, o) {
      if (t !== null) {
        var f = t.memoizedProps;
        if (bo(f, c) && t.ref === e.ref && e.type === t.type)
          if (sl = !1, e.pendingProps = c = f, _d(t, o))
            (t.flags & 131072) !== 0 && (sl = !0);
          else
            return e.lanes = t.lanes, Tn(t, e, o);
      }
      return ay(
        t,
        e,
        a,
        c,
        o
      );
    }
    function ty(t, e, a, c) {
      var o = c.children, f = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: T0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), c.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, t !== null) {
            for (c = e.child = t.child, o = 0; c !== null; )
              o = o | c.lanes | c.childLanes, c = c.sibling;
            c = o & ~f;
          } else c = 0, e.child = null;
          return ey(
            t,
            e,
            f,
            a,
            c
          );
        }
        if ((a & 536870912) !== 0)
          e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Oo(
            e,
            f !== null ? f.cachePool : null
          ), f !== null ? dd(e, f) : ju(e), hd(e);
        else
          return c = e.lanes = 536870912, ey(
            t,
            e,
            f !== null ? f.baseLanes | a : a,
            a,
            c
          );
      } else
        f !== null ? (Oo(e, f.cachePool), dd(e, f), kn(e), e.memoizedState = null) : (t !== null && Oo(e, null), ju(e), kn(e));
      return nl(t, e, o, a), e.child;
    }
    function Ci(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: T0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function ey(t, e, a, c, o) {
      var f = Gu();
      return f = f === null ? null : {
        parent: il._currentValue,
        pool: f
      }, e.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, t !== null && Oo(e, null), ju(e), hd(e), t !== null && yn(t, e, c, !0), e.childLanes = o, null;
    }
    function Rs(t, e) {
      var a = e.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), e = Cs(
        { mode: e.mode, children: e.children },
        t.mode
      ), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function ly(t, e, a) {
      return br(e, t.child, null, a), t = Rs(
        e,
        e.pendingProps
      ), t.flags |= 2, ll(e), e.memoizedState = null, t;
    }
    function Np(t, e, a) {
      var c = e.pendingProps, o = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (Ct) {
          if (c.mode === "hidden")
            return t = Rs(e, c), e.lanes = 536870912, Ci(null, t);
          if (Sn(e), (t = ve) ? (a = $t(
            t,
            Eu
          ), a = a !== null && a.data === Rr ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Dp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Hm(a), c.return = e, e.child = c, kl = e, ve = null)) : a = null, a === null)
            throw Ol(e, t), Za(e);
          return e.lanes = 536870912, null;
        }
        return Rs(e, c);
      }
      var f = t.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Sn(e), o)
          if (e.flags & 256)
            e.flags &= -257, e = ly(
              t,
              e,
              a
            );
          else if (e.memoizedState !== null)
            e.child = t.child, e.flags |= 128, e = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Mp(), (a & 536870912) !== 0 && Lo(e), sl || yn(
          t,
          e,
          a,
          !1
        ), o = (a & t.childLanes) !== 0, sl || o) {
          if (c = fe, c !== null && (d = ip(
            c,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Dl(t, d), ot(c, t, d), H1;
          Jo(), e = ly(
            t,
            e,
            a
          );
        } else
          t = f.treeContext, ve = _a(
            d.nextSibling
          ), kl = e, Ct = !0, zf = null, wc = !1, Hn = null, Eu = !1, t !== null && Op(e, t), e = Rs(e, c), e.flags |= 4096;
        return e;
      }
      return f = t.child, c = { mode: c.mode, children: c.children }, (a & 536870912) !== 0 && (a & t.lanes) !== 0 && Lo(e), t = Jn(f, c), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Us(t, e) {
      var a = e.ref;
      if (a === null)
        t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (t === null || t.ref !== a) && (e.flags |= 4194816);
      }
    }
    function ay(t, e, a, c, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Bt(a) || "Unknown";
        Ab[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Ab[f] = !0);
      }
      return e.mode & ma && lc.recordLegacyContextWarning(
        e,
        null
      ), t === null && (Go(e, e.type), a.contextTypes && (f = Bt(a) || "Unknown", Db[f] || (Db[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Sc(e), a = Zm(
        t,
        e,
        a,
        c,
        void 0,
        o
      ), c = bi(), t !== null && !sl ? (ps(t, e, o), Tn(t, e, o)) : (Ct && c && nd(e), e.flags |= 1, nl(t, e, a, o), e.child);
    }
    function ny(t, e, a, c, o, f) {
      return Sc(e), ao = -1, j0 = t !== null && t.type !== e.type, e.updateQueue = null, a = ms(
        e,
        c,
        a,
        o
      ), _e(t, e), c = bi(), t !== null && !sl ? (ps(t, e, f), Tn(t, e, f)) : (Ct && c && nd(e), e.flags |= 1, nl(t, e, a, f), e.child);
    }
    function _i(t, e, a, c, o) {
      switch (an(e)) {
        case !1:
          var f = e.stateNode, d = new e.type(
            e.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          e.flags |= 128, e.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (e.lanes |= h, d = fe, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Dd(h), Od(
            h,
            d,
            e,
            Yl(f, e)
          ), ds(e, h);
      }
      if (Sc(e), e.stateNode === null) {
        if (d = Af, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Un) && !Tb.has(a) && (Tb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === mh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Bt(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Qt(f)), f = new a(c, d), e.mode & ma) {
          ne(!0);
          try {
            f = new a(c, d);
          } finally {
            ne(!1);
          }
        }
        if (d = e.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = C1, e.stateNode = f, f._reactInternals = e, f._reactInternalInstance = db, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Bt(a) || "Component", mb.has(d) || (mb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Bt(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            pb.has(f) || (pb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = e.stateNode, d = Bt(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !bb.has(a) && (bb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Sb.has(a) && (Sb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Bt(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== c, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || yb.has(a) || (yb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Bt(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Xe(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = e.stateNode, f.props = c, f.state = e.memoizedState, f.refs = {}, Ot(e), d = a.contextType, f.context = typeof d == "object" && d !== null ? Qt(d) : Af, f.state === c && (d = Bt(a) || "Component", vb.has(d) || (vb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), e.mode & ma && lc.recordLegacyContextWarning(
          e,
          f
        ), lc.recordUnsafeLifecycleWarnings(
          e,
          f
        ), f.state = e.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (xo(
          e,
          a,
          d,
          c
        ), f.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          I(e) || "Component"
        ), C1.enqueueReplaceState(
          f,
          f.state,
          null
        )), Fn(e, c, f, o), Ro(), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & ec) !== ct && (e.flags |= 134217728), f = !0;
      } else if (t === null) {
        f = e.stateNode;
        var A = e.memoizedProps;
        h = lu(a, A), f.props = h;
        var D = f.context;
        y = a.contextType, d = Af, typeof y == "object" && y !== null && (d = Qt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", A = e.pendingProps !== A, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (A || D !== d) && eu(
          e,
          f,
          c,
          d
        ), Uf = !1;
        var S = e.memoizedState;
        f.state = S, Fn(e, c, f, o), Ro(), D = e.memoizedState, A || S !== D || Uf ? (typeof p == "function" && (xo(
          e,
          a,
          p,
          c
        ), D = e.memoizedState), (h = Uf || Td(
          e,
          a,
          h,
          c,
          S,
          D,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & ec) !== ct && (e.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & ec) !== ct && (e.flags |= 134217728), e.memoizedProps = c, e.memoizedState = D), f.props = c, f.state = D, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (e.flags |= 4194308), (e.mode & ec) !== ct && (e.flags |= 134217728), f = !1);
      } else {
        f = e.stateNode, $n(t, e), d = e.memoizedProps, y = lu(a, d), f.props = y, p = e.pendingProps, S = f.context, D = a.contextType, h = Af, typeof D == "object" && D !== null && (h = Qt(D)), A = a.getDerivedStateFromProps, (D = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || S !== h) && eu(
          e,
          f,
          c,
          h
        ), Uf = !1, S = e.memoizedState, f.state = S, Fn(e, c, f, o), Ro();
        var _ = e.memoizedState;
        d !== p || S !== _ || Uf || t !== null && t.dependencies !== null && zo(t.dependencies) ? (typeof A == "function" && (xo(
          e,
          a,
          A,
          c
        ), _ = e.memoizedState), (y = Uf || Td(
          e,
          a,
          y,
          c,
          S,
          _,
          h
        ) || t !== null && t.dependencies !== null && zo(t.dependencies)) ? (D || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(c, _, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          c,
          _,
          h
        )), typeof f.componentDidUpdate == "function" && (e.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = c, e.memoizedState = _), f.props = c, f.state = _, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), f = !1);
      }
      if (h = f, Us(t, e), d = (e.flags & 128) !== 0, h || d) {
        if (h = e.stateNode, Jf(e), d && typeof a.getDerivedStateFromError != "function")
          a = null, Ya = -1;
        else if (a = VS(h), e.mode & ma) {
          ne(!0);
          try {
            VS(h);
          } finally {
            ne(!1);
          }
        }
        e.flags |= 1, t !== null && d ? (e.child = br(
          e,
          t.child,
          null,
          o
        ), e.child = br(
          e,
          null,
          a,
          o
        )) : nl(t, e, a, o), e.memoizedState = h.state, t = e.child;
      } else
        t = Tn(
          t,
          e,
          o
        );
      return o = e.stateNode, f && o.props !== c && (Kh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        I(e) || "a component"
      ), Kh = !0), t;
    }
    function uy(t, e, a, c) {
      return vc(), e.flags |= 256, nl(t, e, a, c), e.child;
    }
    function Go(t, e) {
      e && e.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        e.displayName || e.name || "Component"
      ), typeof e.getDerivedStateFromProps == "function" && (t = Bt(e) || "Unknown", Ob[t] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        t
      ), Ob[t] = !0)), typeof e.contextType == "object" && e.contextType !== null && (e = Bt(e) || "Unknown", zb[e] || (console.error(
        "%s: Function components do not support contextType.",
        e
      ), zb[e] = !0));
    }
    function jo(t) {
      return { baseLanes: t, cachePool: Gm() };
    }
    function Md(t, e, a) {
      return t = t !== null ? t.childLanes & ~a : 0, e && (t |= ln), t;
    }
    function Rd(t, e, a) {
      var c, o = e.pendingProps;
      ya(e) && (e.flags |= 128);
      var f = !1, d = (e.flags & 128) !== 0;
      if ((c = d) || (c = t !== null && t.memoizedState === null ? !1 : (We.current & x0) !== 0), c && (f = !0, e.flags &= -129), c = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (Ct) {
          if (f ? Xl(e) : kn(e), (t = ve) ? (a = $t(
            t,
            Eu
          ), a = a !== null && a.data !== Rr ? a : null, a !== null && (c = {
            dehydrated: a,
            treeContext: Dp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, e.memoizedState = c, c = Hm(a), c.return = e, e.child = c, kl = e, ve = null)) : a = null, a === null)
            throw Ol(e, t), Za(e);
          return Gy(a) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          kn(e);
          var y = e.mode;
          return h = Cs(
            { mode: "hidden", children: h },
            y
          ), o = di(
            o,
            y,
            a,
            null
          ), h.return = e, o.return = e, h.sibling = o, e.child = h, o = e.child, o.memoizedState = jo(a), o.childLanes = Md(
            t,
            c,
            a
          ), e.memoizedState = B1, Ci(
            null,
            o
          );
        }
        return Xl(e), cy(
          e,
          h
        );
      }
      var p = t.memoizedState;
      if (p !== null) {
        var A = p.dehydrated;
        if (A !== null) {
          if (d)
            e.flags & 256 ? (Xl(e), e.flags &= -257, e = Ud(
              t,
              e,
              a
            )) : e.memoizedState !== null ? (kn(e), e.child = t.child, e.flags |= 128, e = null) : (kn(e), h = o.fallback, y = e.mode, o = Cs(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = di(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = e, h.return = e, o.sibling = h, e.child = o, br(
              e,
              t.child,
              null,
              a
            ), o = e.child, o.memoizedState = jo(a), o.childLanes = Md(
              t,
              c,
              a
            ), e.memoizedState = B1, e = Ci(
              null,
              o
            ));
          else if (Xl(e), Mp(), (a & 536870912) !== 0 && Lo(e), Gy(
            A
          )) {
            if (c = A.nextSibling && A.nextSibling.dataset, c) {
              h = c.dgst;
              var D = c.msg;
              y = c.stck;
              var S = c.cstck;
            }
            f = D, c = h, o = y, A = S, h = f, y = A, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = c, c = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: c
            }, typeof c == "string" && d1.set(
              h,
              o
            ), cs(o), e = Ud(
              t,
              e,
              a
            );
          } else if (sl || yn(
            t,
            e,
            a,
            !1
          ), c = (a & t.childLanes) !== 0, sl || c) {
            if (c = fe, c !== null && (o = ip(
              c,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Dl(
                t,
                o
              ), ot(
                c,
                t,
                o
              ), H1;
            $s(
              A
            ) || Jo(), e = Ud(
              t,
              e,
              a
            );
          } else
            $s(
              A
            ) ? (e.flags |= 192, e.child = t.child, e = null) : (t = p.treeContext, ve = _a(
              A.nextSibling
            ), kl = e, Ct = !0, zf = null, wc = !1, Hn = null, Eu = !1, t !== null && Op(e, t), e = cy(
              e,
              o.children
            ), e.flags |= 4096);
          return e;
        }
      }
      return f ? (kn(e), h = o.fallback, y = e.mode, S = t.child, A = S.sibling, o = Jn(
        S,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = S.subtreeFlags & 65011712, A !== null ? h = Jn(
        A,
        h
      ) : (h = di(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = e, o.return = e, o.sibling = h, e.child = o, Ci(null, o), o = e.child, h = t.child.memoizedState, h === null ? h = jo(a) : (y = h.cachePool, y !== null ? (S = il._currentValue, y = y.parent !== S ? { parent: S, pool: S } : y) : y = Gm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Md(
        t,
        c,
        a
      ), e.memoizedState = B1, Ci(
        t.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & t.lanes) !== 0 && Lo(e), Xl(e), a = t.child, t = a.sibling, a = Jn(a, {
        mode: "visible",
        children: o.children
      }), a.return = e, a.sibling = null, t !== null && (c = e.deletions, c === null ? (e.deletions = [t], e.flags |= 16) : c.push(t)), e.child = a, e.memoizedState = null, a);
    }
    function cy(t, e) {
      return e = Cs(
        { mode: "visible", children: e },
        t.mode
      ), e.return = t, t.child = e;
    }
    function Cs(t, e) {
      return t = Gt(22, t, null, e), t.lanes = 0, t;
    }
    function Ud(t, e, a) {
      return br(e, t.child, null, a), t = cy(
        e,
        e.pendingProps.children
      ), t.flags |= 2, e.memoizedState = null, t;
    }
    function iy(t, e, a) {
      t.lanes |= e;
      var c = t.alternate;
      c !== null && (c.lanes |= e), cd(
        t.return,
        e,
        a
      );
    }
    function Cd(t, e, a, c, o, f) {
      var d = t.memoizedState;
      d === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = e, d.rendering = null, d.renderingStartTime = 0, d.last = c, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function oy(t, e, a) {
      var c = e.pendingProps, o = c.revealOrder, f = c.tail, d = c.children, h = We.current;
      if ((c = (h & x0) !== 0) ? (h = h & Zh | x0, e.flags |= 128) : h &= Zh, Rt(We, h, e), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Mb[h])
        if (Mb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", ng[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (ng[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (ng[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (ng[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      t: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (Xe(d)) {
          for (h = 0; h < d.length; h++)
            if (!ue(
              d[h],
              h
            ))
              break t;
        } else if (h = Ie(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!ue(y.value, p)) break t;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (nl(t, e, d, a), Ct ? (pc(), d = E0) : d = 0, !c && t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && iy(t, a, e);
          else if (t.tag === 19)
            iy(t, a, e);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = e.child, o = null; a !== null; )
            t = a.alternate, t !== null && Si(t) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = e.child, e.child = null) : (o = a.sibling, a.sibling = null), Cd(
            e,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = e.child, e.child = null; o !== null; ) {
            if (t = o.alternate, t !== null && Si(t) === null) {
              e.child = o;
              break;
            }
            t = o.sibling, o.sibling = a, a = o, o = t;
          }
          Cd(
            e,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Cd(
            e,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function Tn(t, e, a) {
      if (t !== null && (e.dependencies = t.dependencies), Ya = -1, Hf |= e.lanes, (a & e.childLanes) === 0)
        if (t !== null) {
          if (yn(
            t,
            e,
            a,
            !1
          ), (a & e.childLanes) === 0)
            return null;
        } else return null;
      if (t !== null && e.child !== t.child)
        throw Error("Resuming work not yet implemented.");
      if (e.child !== null) {
        for (t = e.child, a = Jn(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
          t = t.sibling, a = a.sibling = Jn(t, t.pendingProps), a.return = e;
        a.sibling = null;
      }
      return e.child;
    }
    function _d(t, e) {
      return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && zo(t)));
    }
    function Yp(t, e, a) {
      switch (e.tag) {
        case 3:
          na(
            e,
            e.stateNode.containerInfo
          ), La(
            e,
            il,
            t.memoizedState.cache
          ), vc();
          break;
        case 27:
        case 5:
          V(e);
          break;
        case 4:
          na(
            e,
            e.stateNode.containerInfo
          );
          break;
        case 10:
          La(
            e,
            e.type,
            e.memoizedProps.value
          );
          break;
        case 12:
          (a & e.childLanes) !== 0 && (e.flags |= 4), e.flags |= 2048;
          var c = e.stateNode;
          c.effectDuration = -0, c.passiveEffectDuration = -0;
          break;
        case 31:
          if (e.memoizedState !== null)
            return e.flags |= 128, Sn(e), null;
          break;
        case 13:
          if (c = e.memoizedState, c !== null)
            return c.dehydrated !== null ? (Xl(e), e.flags |= 128, null) : (a & e.child.childLanes) !== 0 ? Rd(
              t,
              e,
              a
            ) : (Xl(e), t = Tn(
              t,
              e,
              a
            ), t !== null ? t.sibling : null);
          Xl(e);
          break;
        case 19:
          var o = (t.flags & 128) !== 0;
          if (c = (a & e.childLanes) !== 0, c || (yn(
            t,
            e,
            a,
            !1
          ), c = (a & e.childLanes) !== 0), o) {
            if (c)
              return oy(
                t,
                e,
                a
              );
            e.flags |= 128;
          }
          if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Rt(
            We,
            We.current,
            e
          ), c) break;
          return null;
        case 22:
          return e.lanes = 0, ty(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          La(
            e,
            il,
            t.memoizedState.cache
          );
      }
      return Tn(t, e, a);
    }
    function _s(t, e, a) {
      if (e._debugNeedsRemount && t !== null) {
        a = ri(
          e.type,
          e.key,
          e.pendingProps,
          e._debugOwner || null,
          e.mode,
          e.lanes
        ), a._debugStack = e._debugStack, a._debugTask = e._debugTask;
        var c = e.return;
        if (c === null) throw Error("Cannot swap the root fiber.");
        if (t.alternate = null, e.alternate = null, a.index = e.index, a.sibling = e.sibling, a.return = e.return, a.ref = e.ref, a._debugInfo = e._debugInfo, e === c.child)
          c.child = a;
        else {
          var o = c.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== e; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return e = c.deletions, e === null ? (c.deletions = [t], c.flags |= 16) : e.push(t), a.flags |= 2, a;
      }
      if (t !== null)
        if (t.memoizedProps !== e.pendingProps || e.type !== t.type)
          sl = !0;
        else {
          if (!_d(t, a) && (e.flags & 128) === 0)
            return sl = !1, Yp(
              t,
              e,
              a
            );
          sl = (t.flags & 131072) !== 0;
        }
      else
        sl = !1, (c = Ct) && (pc(), c = (e.flags & 1048576) !== 0), c && (c = e.index, pc(), Bm(e, E0, c));
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: if (c = e.pendingProps, t = Ea(e.elementType), e.type = t, typeof t == "function")
            Cm(t) ? (c = lu(
              t,
              c
            ), e.tag = 1, e.type = t = mc(t), e = _i(
              null,
              e,
              t,
              c,
              a
            )) : (e.tag = 0, Go(e, t), e.type = t = mc(t), e = ay(
              null,
              e,
              t,
              c,
              a
            ));
          else {
            if (t != null) {
              if (o = t.$$typeof, o === ff) {
                e.tag = 11, e.type = t = ld(t), e = qp(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              } else if (o === nr) {
                e.tag = 14, e = Im(
                  null,
                  e,
                  t,
                  c,
                  a
                );
                break t;
              }
            }
            throw e = "", t !== null && typeof t == "object" && t.$$typeof === Rl && (e = " Did you wrap a component in React.lazy() more than once?"), a = Bt(t) || t, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + e
            );
          }
          return e;
        case 0:
          return ay(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 1:
          return c = e.type, o = lu(
            c,
            e.pendingProps
          ), _i(
            t,
            e,
            c,
            o,
            a
          );
        case 3:
          t: {
            if (na(
              e,
              e.stateNode.containerInfo
            ), t === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            c = e.pendingProps;
            var f = e.memoizedState;
            o = f.element, $n(t, e), Fn(e, c, null, a);
            var d = e.memoizedState;
            if (c = d.cache, La(e, il, c), c !== f.cache && Nu(
              e,
              [il],
              a,
              !0
            ), Ro(), c = d.element, f.isDehydrated)
              if (f = {
                element: c,
                isDehydrated: !1,
                cache: d.cache
              }, e.updateQueue.baseState = f, e.memoizedState = f, e.flags & 256) {
                e = uy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else if (c !== o) {
                o = Yl(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  e
                ), cs(o), e = uy(
                  t,
                  e,
                  c,
                  a
                );
                break t;
              } else {
                switch (t = e.stateNode.containerInfo, t.nodeType) {
                  case 9:
                    t = t.body;
                    break;
                  default:
                    t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
                }
                for (ve = _a(t.firstChild), kl = e, Ct = !0, zf = null, wc = !1, Hn = null, Eu = !0, a = lb(
                  e,
                  null,
                  c,
                  a
                ), e.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
              }
            else {
              if (vc(), c === o) {
                e = Tn(
                  t,
                  e,
                  a
                );
                break t;
              }
              nl(
                t,
                e,
                c,
                a
              );
            }
            e = e.child;
          }
          return e;
        case 26:
          return Us(t, e), t === null ? (a = Vy(
            e.type,
            null,
            e.pendingProps,
            null
          )) ? e.memoizedState = a : Ct || (a = e.type, t = e.pendingProps, c = aa(
            Ha.current
          ), c = ws(
            c
          ).createElement(a), c[ye] = e, c[Fl] = t, me(c, a, t), Ue(c), e.stateNode = c) : e.memoizedState = Vy(
            e.type,
            t.memoizedProps,
            e.pendingProps,
            t.memoizedState
          ), null;
        case 27:
          return V(e), t === null && Ct && (c = aa(Ha.current), o = Q(), c = e.stateNode = ku(
            e.type,
            e.pendingProps,
            c,
            o,
            !1
          ), wc || (o = ra(
            c,
            e.type,
            e.pendingProps,
            o
          ), o !== null && (hi(e, 0).serverProps = o)), kl = e, Eu = !0, o = ve, jc(e.type) ? (lS = o, ve = _a(
            c.firstChild
          )) : ve = o), nl(
            t,
            e,
            e.pendingProps.children,
            a
          ), Us(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && Ct && (f = Q(), c = Ff(
            e.type,
            f.ancestorInfo
          ), o = ve, (d = !o) || (d = dv(
            o,
            e.type,
            e.pendingProps,
            Eu
          ), d !== null ? (e.stateNode = d, wc || (f = ra(
            d,
            e.type,
            e.pendingProps,
            f
          ), f !== null && (hi(e, 0).serverProps = f)), kl = e, ve = _a(
            d.firstChild
          ), Eu = !1, f = !0) : f = !1, d = !f), d && (c && Ol(e, o), Za(e))), V(e), o = e.type, f = e.pendingProps, d = t !== null ? t.memoizedProps : null, c = f.children, Po(o, f) ? c = null : d !== null && Po(o, d) && (e.flags |= 32), e.memoizedState !== null && (o = Zm(
            t,
            e,
            ys,
            null,
            null,
            a
          ), ep._currentValue = o), Us(t, e), nl(
            t,
            e,
            c,
            a
          ), e.child;
        case 6:
          return t === null && Ct && (a = e.pendingProps, t = Q(), c = t.ancestorInfo.current, a = c != null ? kf(
            a,
            c.tag,
            t.ancestorInfo.implicitRootScope
          ) : !0, t = ve, (c = !t) || (c = hv(
            t,
            e.pendingProps,
            Eu
          ), c !== null ? (e.stateNode = c, kl = e, ve = null, c = !0) : c = !1, c = !c), c && (a && Ol(e, t), Za(e))), null;
        case 13:
          return Rd(t, e, a);
        case 4:
          return na(
            e,
            e.stateNode.containerInfo
          ), c = e.pendingProps, t === null ? e.child = br(
            e,
            null,
            c,
            a
          ) : nl(
            t,
            e,
            c,
            a
          ), e.child;
        case 11:
          return qp(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 7:
          return nl(
            t,
            e,
            e.pendingProps,
            a
          ), e.child;
        case 8:
          return nl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 12:
          return e.flags |= 4, e.flags |= 2048, c = e.stateNode, c.effectDuration = -0, c.passiveEffectDuration = -0, nl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 10:
          return c = e.type, o = e.pendingProps, f = o.value, "value" in o || Rb || (Rb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), La(e, c, f), nl(
            t,
            e,
            o.children,
            a
          ), e.child;
        case 9:
          return o = e.type._context, c = e.pendingProps.children, typeof c != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Sc(e), o = Qt(o), c = b1(
            c,
            o,
            void 0
          ), e.flags |= 1, nl(
            t,
            e,
            c,
            a
          ), e.child;
        case 14:
          return Im(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 15:
          return Pm(
            t,
            e,
            e.type,
            e.pendingProps,
            a
          );
        case 19:
          return oy(
            t,
            e,
            a
          );
        case 31:
          return Np(t, e, a);
        case 22:
          return ty(
            t,
            e,
            a,
            e.pendingProps
          );
        case 24:
          return Sc(e), c = Qt(il), t === null ? (o = Gu(), o === null && (o = fe, f = id(), o.pooledCache = f, yi(f), f !== null && (o.pooledCacheLanes |= a), o = f), e.memoizedState = {
            parent: c,
            cache: o
          }, Ot(e), La(e, il, o)) : ((t.lanes & a) !== 0 && ($n(t, e), Fn(e, null, null, a), Ro()), o = t.memoizedState, f = e.memoizedState, o.parent !== c ? (o = {
            parent: c,
            cache: c
          }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), La(e, il, c)) : (c = f.cache, La(e, il, c), c !== o.cache && Nu(
            e,
            [il],
            a,
            !0
          ))), nl(
            t,
            e,
            e.pendingProps.children,
            a
          ), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function au(t) {
      t.flags |= 4;
    }
    function Hd(t, e, a, c, o) {
      if ((e = (t.mode & vT) !== ct) && (e = !1), e) {
        if (t.flags |= 16777216, (o & 335544128) === o)
          if (t.stateNode.complete) t.flags |= 8192;
          else if (Oy()) t.flags |= 8192;
          else
            throw Sr = Iv, E1;
      } else t.flags &= -16777217;
    }
    function xp(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & Mu) !== _r)
        t.flags &= -16777217;
      else if (t.flags |= 16777216, !Dt(e))
        if (Oy()) t.flags |= 8192;
        else
          throw Sr = Iv, E1;
    }
    function Xo(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Nr() : 536870912, t.lanes |= e, Dr |= e);
    }
    function Qo(t, e) {
      if (!Ct)
        switch (t.tailMode) {
          case "hidden":
            e = t.tail;
            for (var a = null; e !== null; )
              e.alternate !== null && (a = e), e = e.sibling;
            a === null ? t.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = t.tail;
            for (var c = null; a !== null; )
              a.alternate !== null && (c = a), a = a.sibling;
            c === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : c.sibling = null;
        }
    }
    function It(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, a = 0, c = 0;
      if (e)
        if ((t.mode & St) !== ct) {
          for (var o = t.selfBaseDuration, f = t.child; f !== null; )
            a |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          t.treeBaseDuration = o;
        } else
          for (o = t.child; o !== null; )
            a |= o.lanes | o.childLanes, c |= o.subtreeFlags & 65011712, c |= o.flags & 65011712, o.return = t, o = o.sibling;
      else if ((t.mode & St) !== ct) {
        o = t.actualDuration, f = t.selfBaseDuration;
        for (var d = t.child; d !== null; )
          a |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        t.actualDuration = o, t.treeBaseDuration = f;
      } else
        for (o = t.child; o !== null; )
          a |= o.lanes | o.childLanes, c |= o.subtreeFlags, c |= o.flags, o.return = t, o = o.sibling;
      return t.subtreeFlags |= c, t.childLanes = a, e;
    }
    function fy(t, e, a) {
      var c = e.pendingProps;
      switch (ud(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return It(e), null;
        case 1:
          return It(e), null;
        case 3:
          return a = e.stateNode, c = null, t !== null && (c = t.memoizedState.cache), e.memoizedState.cache !== c && (e.flags |= 2048), mn(il, e), O(e), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (mi(e) ? (gc(), au(e)) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, us())), It(e), null;
        case 26:
          var o = e.type, f = e.memoizedState;
          return t === null ? (au(e), f !== null ? (It(e), xp(
            e,
            f
          )) : (It(e), Hd(
            e,
            o,
            null,
            c,
            a
          ))) : f ? f !== t.memoizedState ? (au(e), It(e), xp(
            e,
            f
          )) : (It(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== c && au(e), It(e), Hd(
            e,
            o,
            t,
            c,
            a
          )), null;
        case 27:
          if (at(e), a = aa(Ha.current), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && au(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return It(e), null;
            }
            t = Q(), mi(e) ? qm(e) : (t = ku(
              o,
              c,
              a,
              t,
              !0
            ), e.stateNode = t, au(e));
          }
          return It(e), null;
        case 5:
          if (at(e), o = e.type, t !== null && e.stateNode != null)
            t.memoizedProps !== c && au(e);
          else {
            if (!c) {
              if (e.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return It(e), null;
            }
            var d = Q();
            if (mi(e))
              qm(e);
            else {
              switch (f = aa(Ha.current), Ff(o, d.ancestorInfo), d = d.context, f = ws(f), d) {
                case em:
                  f = f.createElementNS(
                    pt,
                    o
                  );
                  break;
                case zg:
                  f = f.createElementNS(
                    ht,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        pt,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        ht,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof c.is == "string" ? f.createElement("select", {
                        is: c.is
                      }) : f.createElement("select"), c.multiple ? f.multiple = !0 : c.size && (f.size = c.size);
                      break;
                    default:
                      f = typeof c.is == "string" ? f.createElement(o, {
                        is: c.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || Ba.call(Ib, o) || (Ib[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[ye] = e, f[Fl] = c;
              t: for (d = e.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === e) break t;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e)
                    break t;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              e.stateNode = f;
              t: switch (me(f, o, c), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break t;
                case "img":
                  c = !0;
                  break t;
                default:
                  c = !1;
              }
              c && au(e);
            }
          }
          return It(e), Hd(
            e,
            e.type,
            t === null ? null : t.memoizedProps,
            e.pendingProps,
            a
          ), null;
        case 6:
          if (t && e.stateNode != null)
            t.memoizedProps !== c && au(e);
          else {
            if (typeof c != "string" && e.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (t = aa(Ha.current), a = Q(), mi(e)) {
              if (t = e.stateNode, a = e.memoizedProps, o = !wc, c = null, f = kl, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = pv(
                      t,
                      a,
                      c
                    ), o !== null && (hi(e, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    c = f.memoizedProps, o && (o = pv(
                      t,
                      a,
                      c
                    ), o !== null && (hi(
                      e,
                      0
                    ).serverProps = o));
                }
              t[ye] = e, t = !!(t.nodeValue === a || c !== null && c.suppressHydrationWarning === !0 || Yy(t.nodeValue, a)), t || Za(e, !0);
            } else
              o = a.ancestorInfo.current, o != null && kf(
                c,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), t = ws(t).createTextNode(
                c
              ), t[ye] = e, e.stateNode = t;
          }
          return It(e), null;
        case 31:
          if (a = e.memoizedState, t === null || t.memoizedState !== null) {
            if (c = mi(e), a !== null) {
              if (t === null) {
                if (!c)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                t[ye] = e, It(e), (e.mode & St) !== ct && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              } else
                gc(), vc(), (e.flags & 128) === 0 && (a = e.memoizedState = null), e.flags |= 4, It(e), (e.mode & St) !== ct && a !== null && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration));
              t = !1;
            } else
              a = us(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
            if (!t)
              return e.flags & 256 ? (ll(e), e) : (ll(e), null);
            if ((e.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return It(e), null;
        case 13:
          if (c = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (o = c, f = mi(e), o !== null && o.dehydrated !== null) {
              if (t === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = e.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[ye] = e, It(e), (e.mode & St) !== ct && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              } else
                gc(), vc(), (e.flags & 128) === 0 && (o = e.memoizedState = null), e.flags |= 4, It(e), (e.mode & St) !== ct && o !== null && (o = e.child, o !== null && (e.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = us(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return e.flags & 256 ? (ll(e), e) : (ll(e), null);
          }
          return ll(e), (e.flags & 128) !== 0 ? (e.lanes = a, (e.mode & St) !== ct && vi(e), e) : (a = c !== null, t = t !== null && t.memoizedState !== null, a && (c = e.child, o = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (o = c.alternate.memoizedState.cachePool.pool), f = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (f = c.memoizedState.cachePool.pool), f !== o && (c.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), Xo(e, e.updateQueue), It(e), (e.mode & St) !== ct && a && (t = e.child, t !== null && (e.treeBaseDuration -= t.treeBaseDuration)), null);
        case 4:
          return O(e), t === null && xc(
            e.stateNode.containerInfo
          ), It(e), null;
        case 10:
          return mn(e.type, e), It(e), null;
        case 19:
          if (Nt(We, e), c = e.memoizedState, c === null) return It(e), null;
          if (o = (e.flags & 128) !== 0, f = c.rendering, f === null)
            if (o) Qo(c, !1);
            else {
              if (Me !== uo || t !== null && (t.flags & 128) !== 0)
                for (t = e.child; t !== null; ) {
                  if (f = Si(t), f !== null) {
                    for (e.flags |= 128, Qo(c, !1), t = f.updateQueue, e.updateQueue = t, Xo(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                      _m(a, t), a = a.sibling;
                    return Rt(
                      We,
                      We.current & Zh | x0,
                      e
                    ), Ct && hn(e, c.treeForkCount), e.child;
                  }
                  t = t.sibling;
                }
              c.tail !== null && cl() > rg && (e.flags |= 128, o = !0, Qo(c, !1), e.lanes = 4194304);
            }
          else {
            if (!o)
              if (t = Si(f), t !== null) {
                if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Xo(e, t), Qo(c, !0), c.tail === null && c.tailMode === "hidden" && !f.alternate && !Ct)
                  return It(e), null;
              } else
                2 * cl() - c.renderingStartTime > rg && a !== 536870912 && (e.flags |= 128, o = !0, Qo(c, !1), e.lanes = 4194304);
            c.isBackwards ? (f.sibling = e.child, e.child = f) : (t = c.last, t !== null ? t.sibling = f : e.child = f, c.last = f);
          }
          return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = cl(), t.sibling = null, a = We.current, a = o ? a & Zh | x0 : a & Zh, Rt(We, a, e), Ct && hn(e, c.treeForkCount), t) : (It(e), null);
        case 22:
        case 23:
          return ll(e), gn(e), c = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== c && (e.flags |= 8192) : c && (e.flags |= 8192), c ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (It(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : It(e), a = e.updateQueue, a !== null && Xo(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), c = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (c = e.memoizedState.cachePool.pool), c !== a && (e.flags |= 2048), t !== null && Nt(vr, e), null;
        case 24:
          return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), mn(il, e), It(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + e.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Gp(t, e) {
      switch (ud(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & St) !== ct && vi(e), e) : null;
        case 3:
          return mn(il, e), O(e), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return at(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (ll(e), e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            vc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & St) !== ct && vi(e), e) : null;
        case 13:
          if (ll(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            vc();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & St) !== ct && vi(e), e) : null;
        case 19:
          return Nt(We, e), null;
        case 4:
          return O(e), null;
        case 10:
          return mn(e.type, e), null;
        case 22:
        case 23:
          return ll(e), gn(e), t !== null && Nt(vr, e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, (e.mode & St) !== ct && vi(e), e) : null;
        case 24:
          return mn(il, e), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function sy(t, e) {
      switch (ud(e), e.tag) {
        case 3:
          mn(il, e), O(e);
          break;
        case 26:
        case 27:
        case 5:
          at(e);
          break;
        case 4:
          O(e);
          break;
        case 31:
          e.memoizedState !== null && ll(e);
          break;
        case 13:
          ll(e);
          break;
        case 19:
          Nt(We, e);
          break;
        case 10:
          mn(e.type, e);
          break;
        case 22:
        case 23:
          ll(e), gn(e), t !== null && Nt(vr, e);
          break;
        case 24:
          mn(il, e);
      }
    }
    function nu(t) {
      return (t.mode & St) !== ct;
    }
    function jp(t, e) {
      nu(t) ? (Ae(), wu(e, t), Gl()) : wu(e, t);
    }
    function Bd(t, e, a) {
      nu(t) ? (Ae(), _c(
        a,
        t,
        e
      ), Gl()) : _c(
        a,
        t,
        e
      );
    }
    function wu(t, e) {
      try {
        var a = e.updateQueue, c = a !== null ? a.lastEffect : null;
        if (c !== null) {
          var o = c.next;
          a = o;
          do {
            if ((a.tag & t) === t && (c = void 0, (t & xa) !== tg && (Ih = !0), c = $(
              e,
              AT,
              a
            ), (t & xa) !== tg && (Ih = !1), c !== void 0 && typeof c != "function")) {
              var f = void 0;
              f = (a.tag & qn) !== 0 ? "useLayoutEffect" : (a.tag & xa) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = c === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof c.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + c, $(
                e,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        yt(e, e.return, h);
      }
    }
    function _c(t, e, a) {
      try {
        var c = e.updateQueue, o = c !== null ? c.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          c = f;
          do {
            if ((c.tag & t) === t) {
              var d = c.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (t & xa) !== tg && (Ih = !0), o = e, $(
                o,
                zT,
                o,
                a,
                h
              ), (t & xa) !== tg && (Ih = !1));
            }
            c = c.next;
          } while (c !== f);
        }
      } catch (y) {
        yt(e, e.return, y);
      }
    }
    function Hs(t, e) {
      nu(t) ? (Ae(), wu(e, t), Gl()) : wu(e, t);
    }
    function qd(t, e, a) {
      nu(t) ? (Ae(), _c(
        a,
        t,
        e
      ), Gl()) : _c(
        a,
        t,
        e
      );
    }
    function ry(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var a = t.stateNode;
        t.type.defaultProps || "ref" in t.memoizedProps || Kh || (a.props !== t.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          I(t) || "instance"
        ), a.state !== t.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          I(t) || "instance"
        ));
        try {
          $(
            t,
            Uo,
            e,
            a
          );
        } catch (c) {
          yt(t, t.return, c);
        }
      }
    }
    function Bs(t, e, a) {
      return t.getSnapshotBeforeUpdate(e, a);
    }
    function Xp(t, e) {
      var a = e.memoizedProps, c = e.memoizedState;
      e = t.stateNode, t.type.defaultProps || "ref" in t.memoizedProps || Kh || (e.props !== t.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        I(t) || "instance"
      ), e.state !== t.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        I(t) || "instance"
      ));
      try {
        var o = lu(
          t.type,
          a
        ), f = $(
          t,
          Bs,
          e,
          o,
          c
        );
        a = Ub, f !== void 0 || a.has(t.type) || (a.add(t.type), $(t, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            I(t)
          );
        })), e.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        yt(t, t.return, d);
      }
    }
    function Nd(t, e, a) {
      a.props = lu(
        t.type,
        t.memoizedProps
      ), a.state = t.memoizedState, nu(t) ? (Ae(), $(
        t,
        $S,
        t,
        e,
        a
      ), Gl()) : $(
        t,
        $S,
        t,
        e,
        a
      );
    }
    function Qp(t) {
      var e = t.ref;
      if (e !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        if (typeof e == "function")
          if (nu(t))
            try {
              Ae(), t.refCleanup = e(a);
            } finally {
              Gl();
            }
          else t.refCleanup = e(a);
        else
          typeof e == "string" ? console.error("String refs are no longer supported.") : e.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            I(t)
          ), e.current = a;
      }
    }
    function Hi(t, e) {
      try {
        $(t, Qp, t);
      } catch (a) {
        yt(t, e, a);
      }
    }
    function Wa(t, e) {
      var a = t.ref, c = t.refCleanup;
      if (a !== null)
        if (typeof c == "function")
          try {
            if (nu(t))
              try {
                Ae(), $(t, c);
              } finally {
                Gl(t);
              }
            else $(t, c);
          } catch (o) {
            yt(t, e, o);
          } finally {
            t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (nu(t))
              try {
                Ae(), $(t, a, null);
              } finally {
                Gl(t);
              }
            else $(t, a, null);
          } catch (o) {
            yt(t, e, o);
          }
        else a.current = null;
    }
    function dy(t, e, a, c) {
      var o = t.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, e = e === null ? "mount" : "update", $v && (e = "nested-update"), typeof o == "function" && o(
        f,
        e,
        t.actualDuration,
        t.treeBaseDuration,
        t.actualStartTime,
        a
      ), typeof d == "function" && d(f, e, c, a);
    }
    function Vp(t, e, a, c) {
      var o = t.memoizedProps;
      t = o.id, o = o.onPostCommit, e = e === null ? "mount" : "update", $v && (e = "nested-update"), typeof o == "function" && o(
        t,
        e,
        c,
        a
      );
    }
    function Hc(t) {
      var e = t.type, a = t.memoizedProps, c = t.stateNode;
      try {
        $(
          t,
          ev,
          c,
          e,
          a,
          t
        );
      } catch (o) {
        yt(t, t.return, o);
      }
    }
    function Yd(t, e, a) {
      try {
        $(
          t,
          lh,
          t.stateNode,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        yt(t, t.return, c);
      }
    }
    function hy(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && jc(t.type) || t.tag === 4;
    }
    function xd(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || hy(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && jc(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Vo(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? (av(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e)) : (av(a), e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(t), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = Qa));
      else if (c !== 4 && (c === 27 && jc(t.type) && (a = t.stateNode, e = null), t = t.child, t !== null))
        for (Vo(t, e, a), t = t.sibling; t !== null; )
          Vo(t, e, a), t = t.sibling;
    }
    function qs(t, e, a) {
      var c = t.tag;
      if (c === 5 || c === 6)
        t = t.stateNode, e ? a.insertBefore(t, e) : a.appendChild(t);
      else if (c !== 4 && (c === 27 && jc(t.type) && (a = t.stateNode), t = t.child, t !== null))
        for (qs(t, e, a), t = t.sibling; t !== null; )
          qs(t, e, a), t = t.sibling;
    }
    function my(t) {
      for (var e, a = t.return; a !== null; ) {
        if (hy(a)) {
          e = a;
          break;
        }
        a = a.return;
      }
      if (e == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (e.tag) {
        case 27:
          e = e.stateNode, a = xd(t), qs(
            t,
            a,
            e
          );
          break;
        case 5:
          a = e.stateNode, e.flags & 32 && (ah(a), e.flags &= -33), e = xd(t), qs(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          e = e.stateNode.containerInfo, a = xd(t), Vo(
            t,
            a,
            e
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function yy(t) {
      var e = t.stateNode, a = t.memoizedProps;
      try {
        $(
          t,
          du,
          t.type,
          a,
          e,
          t
        );
      } catch (c) {
        yt(t, t.return, c);
      }
    }
    function py(t, e) {
      return e.tag === 31 ? (e = e.memoizedState, t.memoizedState !== null && e === null) : e.tag === 13 ? (t = t.memoizedState, e = e.memoizedState, t !== null && t.dehydrated !== null && (e === null || e.dehydrated === null)) : e.tag === 3 ? t.memoizedState.isDehydrated && (e.flags & 256) === 0 : !1;
    }
    function Zg(t, e) {
      if (t = t.containerInfo, P1 = Rg, t = Ir(t), Am(t)) {
        if ("selectionStart" in t)
          var a = {
            start: t.selectionStart,
            end: t.selectionEnd
          };
        else
          t: {
            a = (a = t.ownerDocument) && a.defaultView || window;
            var c = a.getSelection && a.getSelection();
            if (c && c.rangeCount !== 0) {
              a = c.anchorNode;
              var o = c.anchorOffset, f = c.focusNode;
              c = c.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break t;
              }
              var d = 0, h = -1, y = -1, p = 0, A = 0, D = t, S = null;
              e: for (; ; ) {
                for (var _; D !== a || o !== 0 && D.nodeType !== 3 || (h = d + o), D !== f || c !== 0 && D.nodeType !== 3 || (y = d + c), D.nodeType === 3 && (d += D.nodeValue.length), (_ = D.firstChild) !== null; )
                  S = D, D = _;
                for (; ; ) {
                  if (D === t) break e;
                  if (S === a && ++p === o && (h = d), S === f && ++A === c && (y = d), (_ = D.nextSibling) !== null) break;
                  D = S, S = D.parentNode;
                }
                D = _;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (tS = {
        focusedElem: t,
        selectionRange: a
      }, Rg = !1, _l = e; _l !== null; )
        if (e = _l, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
          t.return = e, _l = t;
        else
          for (; _l !== null; ) {
            switch (t = e = _l, a = t.alternate, o = t.flags, t.tag) {
              case 0:
                if ((o & 4) !== 0 && (t = t.updateQueue, t = t !== null ? t.events : null, t !== null))
                  for (a = 0; a < t.length; a++)
                    o = t[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Xp(t, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (t = t.stateNode.containerInfo, a = t.nodeType, a === 9)
                    ef(t);
                  else if (a === 1)
                    switch (t.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        ef(t);
                        break;
                      default:
                        t.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (t = e.sibling, t !== null) {
              t.return = e.return, _l = t;
              break;
            }
            _l = e.return;
          }
    }
    function Gd(t, e, a) {
      var c = de(), o = Ja(), f = ba(), d = wa(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ma(t, a), h & 4 && jp(a, qn | Du);
          break;
        case 1:
          if (Ma(t, a), h & 4)
            if (t = a.stateNode, e === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Kh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                I(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                I(a) || "instance"
              )), nu(a) ? (Ae(), $(
                a,
                T1,
                a,
                t
              ), Gl()) : $(
                a,
                T1,
                a,
                t
              );
            else {
              var y = lu(
                a.type,
                e.memoizedProps
              );
              e = e.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Kh || (t.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                I(a) || "instance"
              ), t.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                I(a) || "instance"
              )), nu(a) ? (Ae(), $(
                a,
                JS,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              ), Gl()) : $(
                a,
                JS,
                a,
                t,
                y,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && ry(a), h & 512 && Hi(a, a.return);
          break;
        case 3:
          if (e = Kn(), Ma(t, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              $(
                a,
                Uo,
                h,
                y
              );
            } catch (A) {
              yt(a, a.return, A);
            }
          }
          t.effectDuration += Do(e);
          break;
        case 27:
          e === null && h & 4 && yy(a);
        case 26:
        case 5:
          if (Ma(t, a), e === null) {
            if (h & 4) Hc(a);
            else if (h & 64) {
              t = a.type, e = a.memoizedProps, y = a.stateNode;
              try {
                $(
                  a,
                  lv,
                  y,
                  t,
                  e,
                  a
                );
              } catch (A) {
                yt(
                  a,
                  a.return,
                  A
                );
              }
            }
          }
          h & 512 && Hi(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Kn(), Ma(t, a), t = a.stateNode, t.effectDuration += xl(h);
            try {
              $(
                a,
                dy,
                a,
                e,
                Df,
                t.effectDuration
              );
            } catch (A) {
              yt(a, a.return, A);
            }
          } else Ma(t, a);
          break;
        case 31:
          Ma(t, a), h & 4 && gy(t, a);
          break;
        case 13:
          Ma(t, a), h & 4 && Sy(t, a), h & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (h = $u.bind(
            null,
            a
          ), mv(t, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || no, !h) {
            e = e !== null && e.memoizedState !== null || rl, y = no;
            var p = rl;
            no = h, (rl = e) && !p ? (En(
              t,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & St) !== ct && 0 <= et && 0 <= nt && 0.05 < nt - et && Pr(
              a,
              et,
              nt
            )) : Ma(t, a), no = y, rl = p;
          }
          break;
        case 30:
          break;
        default:
          Ma(t, a);
      }
      (a.mode & St) !== ct && 0 <= et && 0 <= nt && ((Ne || 0.05 < Oe) && dn(
        a,
        et,
        nt,
        Oe,
        Ee
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < nt - et && (py(
        a.return.alternate,
        a.return
      ) || Va(
        a,
        et,
        nt,
        "Mount"
      ))), tl(c), Sa(o), Ee = f, Ne = d;
    }
    function Be(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, Be(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && om(e)), t.stateNode = null, t._debugOwner = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    function se(t, e, a) {
      for (a = a.child; a !== null; )
        vy(
          t,
          e,
          a
        ), a = a.sibling;
    }
    function vy(t, e, a) {
      if (Ke && typeof Ke.onCommitFiberUnmount == "function")
        try {
          Ke.onCommitFiberUnmount(Ji, a);
        } catch (p) {
          mu || (mu = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var c = de(), o = Ja(), f = ba(), d = wa();
      switch (a.tag) {
        case 26:
          rl || Wa(a, e), se(
            t,
            e,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (t = a.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          rl || Wa(a, e);
          var h = dl, y = tn;
          jc(a.type) && (dl = a.stateNode, tn = !1), se(
            t,
            e,
            a
          ), $(
            a,
            Iu,
            a.stateNode
          ), dl = h, tn = y;
          break;
        case 5:
          rl || Wa(a, e);
        case 6:
          if (h = dl, y = tn, dl = null, se(
            t,
            e,
            a
          ), dl = h, tn = y, dl !== null)
            if (tn)
              try {
                $(
                  a,
                  uv,
                  dl,
                  a.stateNode
                );
              } catch (p) {
                yt(
                  a,
                  e,
                  p
                );
              }
            else
              try {
                $(
                  a,
                  nv,
                  dl,
                  a.stateNode
                );
              } catch (p) {
                yt(
                  a,
                  e,
                  p
                );
              }
          break;
        case 18:
          dl !== null && (tn ? (t = dl, xi(
            t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
            a.stateNode
          ), Qi(t)) : xi(dl, a.stateNode));
          break;
        case 4:
          h = dl, y = tn, dl = a.stateNode.containerInfo, tn = !0, se(
            t,
            e,
            a
          ), dl = h, tn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          _c(
            xa,
            a,
            e
          ), rl || Bd(
            a,
            e,
            qn
          ), se(
            t,
            e,
            a
          );
          break;
        case 1:
          rl || (Wa(a, e), h = a.stateNode, typeof h.componentWillUnmount == "function" && Nd(
            a,
            e,
            h
          )), se(
            t,
            e,
            a
          );
          break;
        case 21:
          se(
            t,
            e,
            a
          );
          break;
        case 22:
          rl = (h = rl) || a.memoizedState !== null, se(
            t,
            e,
            a
          ), rl = h;
          break;
        default:
          se(
            t,
            e,
            a
          );
      }
      (a.mode & St) !== ct && 0 <= et && 0 <= nt && (Ne || 0.05 < Oe) && dn(
        a,
        et,
        nt,
        Oe,
        Ee
      ), tl(c), Sa(o), Ee = f, Ne = d;
    }
    function gy(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          $(
            e,
            nh,
            t
          );
        } catch (a) {
          yt(e, e.return, a);
        }
      }
    }
    function Sy(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
        try {
          $(
            e,
            Xy,
            t
          );
        } catch (a) {
          yt(e, e.return, a);
        }
    }
    function Zp(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new Cb()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Cb()), e;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + t.tag + "). This is a bug in React."
          );
      }
    }
    function Bc(t, e) {
      var a = Zp(t);
      e.forEach(function(c) {
        if (!a.has(c)) {
          if (a.add(c), yu)
            if ($h !== null && Wh !== null)
              $o(Wh, $h);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Ni.bind(null, t, c);
          c.then(o, o);
        }
      });
    }
    function Zl(t, e) {
      var a = e.deletions;
      if (a !== null)
        for (var c = 0; c < a.length; c++) {
          var o = t, f = e, d = a[c], h = de(), y = f;
          t: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (jc(y.type)) {
                  dl = y.stateNode, tn = !1;
                  break t;
                }
                break;
              case 5:
                dl = y.stateNode, tn = !1;
                break t;
              case 3:
              case 4:
                dl = y.stateNode.containerInfo, tn = !0;
                break t;
            }
            y = y.return;
          }
          if (dl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          vy(o, f, d), dl = null, tn = !1, (d.mode & St) !== ct && 0 <= et && 0 <= nt && 0.05 < nt - et && Va(
            d,
            et,
            nt,
            "Unmount"
          ), tl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (e.subtreeFlags & 13886)
        for (e = e.child; e !== null; )
          Ns(e, t), e = e.sibling;
    }
    function Ns(t, e) {
      var a = de(), c = Ja(), o = ba(), f = wa(), d = t.alternate, h = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zl(e, t), Ll(t), h & 4 && (_c(
            xa | Du,
            t,
            t.return
          ), wu(xa | Du, t), Bd(
            t,
            t.return,
            qn | Du
          ));
          break;
        case 1:
          if (Zl(e, t), Ll(t), h & 512 && (rl || d === null || Wa(d, d.return)), h & 64 && no && (h = t.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = nc, Zl(e, t), Ll(t), h & 512 && (rl || d === null || Wa(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = t.memoizedState, d === null)
              if (h === null)
                if (t.stateNode === null) {
                  t: {
                    h = t.type, d = t.memoizedProps, y = y.ownerDocument || y;
                    e: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[vf] || p[ye] || p.namespaceURI === pt || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), me(p, h, d), p[ye] = t, Ue(p), h = p;
                        break t;
                      case "link":
                        var A = nf(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (A) {
                          for (var D = 0; D < A.length; D++)
                            if (p = A[D], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), me(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (A = nf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (D = 0; D < A.length; D++)
                            if (p = A[D], Ft(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              A.splice(D, 1);
                              break e;
                            }
                        }
                        p = y.createElement(h), me(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[ye] = t, Ue(p), h = p;
                  }
                  t.stateNode = h;
                } else
                  gv(
                    y,
                    t.type,
                    t.stateNode
                  );
              else
                t.stateNode = ih(
                  y,
                  h,
                  t.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? gv(
                y,
                t.type,
                t.stateNode
              ) : ih(
                y,
                h,
                t.memoizedProps
              )) : h === null && t.stateNode !== null && Yd(
                t,
                t.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Zl(e, t), Ll(t), h & 512 && (rl || d === null || Wa(d, d.return)), d !== null && h & 4 && Yd(
            t,
            t.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Zl(e, t), Ll(t), h & 512 && (rl || d === null || Wa(d, d.return)), t.flags & 32) {
            y = t.stateNode;
            try {
              $(
                t,
                ah,
                y
              );
            } catch (w) {
              yt(t, t.return, w);
            }
          }
          h & 4 && t.stateNode != null && (y = t.memoizedProps, Yd(
            t,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (q1 = !0, t.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Zl(e, t), Ll(t), h & 4) {
            if (t.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = t.memoizedProps, d = d !== null ? d.memoizedProps : h, y = t.stateNode;
            try {
              $(
                t,
                Lg,
                y,
                d,
                h
              );
            } catch (w) {
              yt(t, t.return, w);
            }
          }
          break;
        case 3:
          if (y = Kn(), Dg = null, p = nc, nc = uh(e.containerInfo), Zl(e, t), nc = p, Ll(t), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              $(
                t,
                jy,
                e.containerInfo
              );
            } catch (w) {
              yt(t, t.return, w);
            }
          q1 && (q1 = !1, Lp(t)), e.effectDuration += Do(
            y
          );
          break;
        case 4:
          h = nc, nc = uh(
            t.stateNode.containerInfo
          ), Zl(e, t), Ll(t), nc = h;
          break;
        case 12:
          h = Kn(), Zl(e, t), Ll(t), t.stateNode.effectDuration += xl(h);
          break;
        case 31:
          Zl(e, t), Ll(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, Bc(t, h)));
          break;
        case 13:
          Zl(e, t), Ll(t), t.child.flags & 8192 && t.memoizedState !== null != (d !== null && d.memoizedState !== null) && (sg = cl()), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, Bc(t, h)));
          break;
        case 22:
          y = t.memoizedState !== null;
          var S = d !== null && d.memoizedState !== null, _ = no, Z = rl;
          if (no = _ || y, rl = Z || S, Zl(e, t), rl = Z, no = _, S && !y && !_ && !Z && (t.mode & St) !== ct && 0 <= et && 0 <= nt && 0.05 < nt - et && Pr(
            t,
            et,
            nt
          ), Ll(t), h & 8192)
            t: for (e = t.stateNode, e._visibility = y ? e._visibility & ~T0 : e._visibility | T0, !y || d === null || S || no || rl || (qc(t), (t.mode & St) !== ct && 0 <= et && 0 <= nt && 0.05 < nt - et && Va(
              t,
              et,
              nt,
              "Disconnect"
            )), d = null, e = t; ; ) {
              if (e.tag === 5 || e.tag === 26) {
                if (d === null) {
                  S = d = e;
                  try {
                    p = S.stateNode, y ? $(
                      S,
                      iv,
                      p
                    ) : $(
                      S,
                      sv,
                      S.stateNode,
                      S.memoizedProps
                    );
                  } catch (w) {
                    yt(S, S.return, w);
                  }
                }
              } else if (e.tag === 6) {
                if (d === null) {
                  S = e;
                  try {
                    A = S.stateNode, y ? $(
                      S,
                      ov,
                      A
                    ) : $(
                      S,
                      rv,
                      A,
                      S.memoizedProps
                    );
                  } catch (w) {
                    yt(S, S.return, w);
                  }
                }
              } else if (e.tag === 18) {
                if (d === null) {
                  S = e;
                  try {
                    D = S.stateNode, y ? $(
                      S,
                      cv,
                      D
                    ) : $(
                      S,
                      fv,
                      S.stateNode
                    );
                  } catch (w) {
                    yt(S, S.return, w);
                  }
                }
              } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break t;
                d === e && (d = null), e = e.return;
              }
              d === e && (d = null), e.sibling.return = e.return, e = e.sibling;
            }
          h & 4 && (h = t.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, Bc(t, d))));
          break;
        case 19:
          Zl(e, t), Ll(t), h & 4 && (h = t.updateQueue, h !== null && (t.updateQueue = null, Bc(t, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Zl(e, t), Ll(t);
      }
      (t.mode & St) !== ct && 0 <= et && 0 <= nt && ((Ne || 0.05 < Oe) && dn(
        t,
        et,
        nt,
        Oe,
        Ee
      ), t.alternate === null && t.return !== null && t.return.alternate !== null && 0.05 < nt - et && (py(
        t.return.alternate,
        t.return
      ) || Va(
        t,
        et,
        nt,
        "Mount"
      ))), tl(a), Sa(c), Ee = o, Ne = f;
    }
    function Ll(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          $(t, my, t);
        } catch (a) {
          yt(t, t.return, a);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function Lp(t) {
      if (t.subtreeFlags & 1024)
        for (t = t.child; t !== null; ) {
          var e = t;
          Lp(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
        }
    }
    function Ma(t, e) {
      if (e.subtreeFlags & 8772)
        for (e = e.child; e !== null; )
          Gd(t, e.alternate, e), e = e.sibling;
    }
    function jd(t) {
      var e = de(), a = Ja(), c = ba(), o = wa();
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Bd(
            t,
            t.return,
            qn
          ), qc(t);
          break;
        case 1:
          Wa(t, t.return);
          var f = t.stateNode;
          typeof f.componentWillUnmount == "function" && Nd(
            t,
            t.return,
            f
          ), qc(t);
          break;
        case 27:
          $(
            t,
            Iu,
            t.stateNode
          );
        case 26:
        case 5:
          Wa(t, t.return), qc(t);
          break;
        case 22:
          t.memoizedState === null && qc(t);
          break;
        case 30:
          qc(t);
          break;
        default:
          qc(t);
      }
      (t.mode & St) !== ct && 0 <= et && 0 <= nt && (Ne || 0.05 < Oe) && dn(
        t,
        et,
        nt,
        Oe,
        Ee
      ), tl(e), Sa(a), Ee = c, Ne = o;
    }
    function qc(t) {
      for (t = t.child; t !== null; )
        jd(t), t = t.sibling;
    }
    function by(t, e, a, c) {
      var o = de(), f = Ja(), d = ba(), h = wa(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          En(
            t,
            a,
            c
          ), jp(a, qn);
          break;
        case 1:
          if (En(
            t,
            a,
            c
          ), e = a.stateNode, typeof e.componentDidMount == "function" && $(
            a,
            T1,
            a,
            e
          ), e = a.updateQueue, e !== null) {
            t = a.stateNode;
            try {
              $(
                a,
                Qm,
                e,
                t
              );
            } catch (p) {
              yt(a, a.return, p);
            }
          }
          c && y & 64 && ry(a), Hi(a, a.return);
          break;
        case 27:
          yy(a);
        case 26:
        case 5:
          En(
            t,
            a,
            c
          ), c && e === null && y & 4 && Hc(a), Hi(a, a.return);
          break;
        case 12:
          if (c && y & 4) {
            y = Kn(), En(
              t,
              a,
              c
            ), c = a.stateNode, c.effectDuration += xl(y);
            try {
              $(
                a,
                dy,
                a,
                e,
                Df,
                c.effectDuration
              );
            } catch (p) {
              yt(a, a.return, p);
            }
          } else
            En(
              t,
              a,
              c
            );
          break;
        case 31:
          En(
            t,
            a,
            c
          ), c && y & 4 && gy(t, a);
          break;
        case 13:
          En(
            t,
            a,
            c
          ), c && y & 4 && Sy(t, a);
          break;
        case 22:
          a.memoizedState === null && En(
            t,
            a,
            c
          ), Hi(a, a.return);
          break;
        case 30:
          break;
        default:
          En(
            t,
            a,
            c
          );
      }
      (a.mode & St) !== ct && 0 <= et && 0 <= nt && (Ne || 0.05 < Oe) && dn(
        a,
        et,
        nt,
        Oe,
        Ee
      ), tl(o), Sa(f), Ee = d, Ne = h;
    }
    function En(t, e, a) {
      for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; )
        by(
          t,
          e.alternate,
          e,
          a
        ), e = e.sibling;
    }
    function Ys(t, e) {
      var a = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && yi(t), a != null && os(a));
    }
    function xs(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (yi(e), t != null && os(t));
    }
    function Ra(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (e = e.child; e !== null; ) {
          var f = e.sibling;
          Ty(
            t,
            e,
            a,
            c,
            f !== null ? f.actualStartTime : o
          ), e = f;
        }
    }
    function Ty(t, e, a, c, o) {
      var f = de(), d = Ja(), h = ba(), y = wa(), p = Tf, A = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (e.mode & St) !== ct && 0 < e.actualStartTime && (e.flags & 1) !== 0 && td(
            e,
            e.actualStartTime,
            o,
            El,
            a
          ), Ra(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && Hs(e, Ga | Du);
          break;
        case 1:
          (e.mode & St) !== ct && 0 < e.actualStartTime && ((e.flags & 128) !== 0 ? Dm(
            e,
            e.actualStartTime,
            o,
            []
          ) : (e.flags & 1) !== 0 && td(
            e,
            e.actualStartTime,
            o,
            El,
            a
          )), Ra(
            t,
            e,
            a,
            c,
            o
          );
          break;
        case 3:
          var D = Kn(), S = El;
          El = e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) === 0, Ra(
            t,
            e,
            a,
            c,
            o
          ), El = S, A & 2048 && (a = null, e.alternate !== null && (a = e.alternate.memoizedState.cache), c = e.memoizedState.cache, c !== a && (yi(c), a != null && os(a))), t.passiveEffectDuration += Do(
            D
          );
          break;
        case 12:
          if (A & 2048) {
            A = Kn(), Ra(
              t,
              e,
              a,
              c,
              o
            ), t = e.stateNode, t.passiveEffectDuration += xl(A);
            try {
              $(
                e,
                Vp,
                e,
                e.alternate,
                Df,
                t.passiveEffectDuration
              );
            } catch (_) {
              yt(e, e.return, _);
            }
          } else
            Ra(
              t,
              e,
              a,
              c,
              o
            );
          break;
        case 31:
          A = El, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D !== null && S === null ? (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (El = !1, D = D.hydrationErrors, D !== null && Dm(
            e,
            e.actualStartTime,
            o,
            D
          )) : El = !0) : El = !1, Ra(
            t,
            e,
            a,
            c,
            o
          ), El = A;
          break;
        case 13:
          A = El, D = e.alternate !== null ? e.alternate.memoizedState : null, S = e.memoizedState, D === null || D.dehydrated === null || S !== null && S.dehydrated !== null ? El = !1 : (S = e.deletions, S !== null && 0 < S.length && S[0].tag === 18 ? (El = !1, D = D.hydrationErrors, D !== null && Dm(
            e,
            e.actualStartTime,
            o,
            D
          )) : El = !0), Ra(
            t,
            e,
            a,
            c,
            o
          ), El = A;
          break;
        case 23:
          break;
        case 22:
          S = e.stateNode, D = e.alternate, e.memoizedState !== null ? S._visibility & $i ? Ra(
            t,
            e,
            a,
            c,
            o
          ) : Bi(
            t,
            e,
            a,
            c,
            o
          ) : S._visibility & $i ? Ra(
            t,
            e,
            a,
            c,
            o
          ) : (S._visibility |= $i, Nc(
            t,
            e,
            a,
            c,
            (e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child),
            o
          ), (e.mode & St) === ct || El || (t = e.actualStartTime, 0 <= t && 0.05 < o - t && Pr(e, t, o), 0 <= et && 0 <= nt && 0.05 < nt - et && Pr(
            e,
            et,
            nt
          ))), A & 2048 && Ys(
            D,
            e
          );
          break;
        case 24:
          Ra(
            t,
            e,
            a,
            c,
            o
          ), A & 2048 && xs(e.alternate, e);
          break;
        default:
          Ra(
            t,
            e,
            a,
            c,
            o
          );
      }
      (e.mode & St) !== ct && ((t = !El && e.alternate === null && e.return !== null && e.return.alternate !== null) && (a = e.actualStartTime, 0 <= a && 0.05 < o - a && Va(
        e,
        a,
        o,
        "Mount"
      )), 0 <= et && 0 <= nt && ((Ne || 0.05 < Oe) && dn(
        e,
        et,
        nt,
        Oe,
        Ee
      ), t && 0.05 < nt - et && Va(
        e,
        et,
        nt,
        "Mount"
      ))), tl(f), Sa(d), Ee = h, Ne = y, Tf = p;
    }
    function Nc(t, e, a, c, o, f) {
      for (o = o && ((e.subtreeFlags & 10256) !== 0 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child)), e = e.child; e !== null; ) {
        var d = e.sibling;
        Gs(
          t,
          e,
          a,
          c,
          o,
          d !== null ? d.actualStartTime : f
        ), e = d;
      }
    }
    function Gs(t, e, a, c, o, f) {
      var d = de(), h = Ja(), y = ba(), p = wa(), A = Tf;
      o && (e.mode & St) !== ct && 0 < e.actualStartTime && (e.flags & 1) !== 0 && td(
        e,
        e.actualStartTime,
        f,
        El,
        a
      );
      var D = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Nc(
            t,
            e,
            a,
            c,
            o,
            f
          ), Hs(e, Ga);
          break;
        case 23:
          break;
        case 22:
          var S = e.stateNode;
          e.memoizedState !== null ? S._visibility & $i ? Nc(
            t,
            e,
            a,
            c,
            o,
            f
          ) : Bi(
            t,
            e,
            a,
            c,
            f
          ) : (S._visibility |= $i, Nc(
            t,
            e,
            a,
            c,
            o,
            f
          )), o && D & 2048 && Ys(
            e.alternate,
            e
          );
          break;
        case 24:
          Nc(
            t,
            e,
            a,
            c,
            o,
            f
          ), o && D & 2048 && xs(e.alternate, e);
          break;
        default:
          Nc(
            t,
            e,
            a,
            c,
            o,
            f
          );
      }
      (e.mode & St) !== ct && 0 <= et && 0 <= nt && (Ne || 0.05 < Oe) && dn(
        e,
        et,
        nt,
        Oe,
        Ee
      ), tl(d), Sa(h), Ee = y, Ne = p, Tf = A;
    }
    function Bi(t, e, a, c, o) {
      if (e.subtreeFlags & 10256 || e.actualDuration !== 0 && (e.alternate === null || e.alternate.child !== e.child))
        for (var f = e.child; f !== null; ) {
          e = f.sibling;
          var d = t, h = a, y = c, p = e !== null ? e.actualStartTime : o, A = Tf;
          (f.mode & St) !== ct && 0 < f.actualStartTime && (f.flags & 1) !== 0 && td(
            f,
            f.actualStartTime,
            p,
            El,
            h
          );
          var D = f.flags;
          switch (f.tag) {
            case 22:
              Bi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && Ys(f.alternate, f);
              break;
            case 24:
              Bi(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && xs(f.alternate, f);
              break;
            default:
              Bi(
                d,
                f,
                h,
                y,
                p
              );
          }
          Tf = A, f = e;
        }
    }
    function qi(t, e, a) {
      if (t.subtreeFlags & Q0)
        for (t = t.child; t !== null; )
          Xd(
            t,
            e,
            a
          ), t = t.sibling;
    }
    function Xd(t, e, a) {
      switch (t.tag) {
        case 26:
          qi(
            t,
            e,
            a
          ), t.flags & Q0 && t.memoizedState !== null && Jy(
            a,
            nc,
            t.memoizedState,
            t.memoizedProps
          );
          break;
        case 5:
          qi(
            t,
            e,
            a
          );
          break;
        case 3:
        case 4:
          var c = nc;
          nc = uh(
            t.stateNode.containerInfo
          ), qi(
            t,
            e,
            a
          ), nc = c;
          break;
        case 22:
          t.memoizedState === null && (c = t.alternate, c !== null && c.memoizedState !== null ? (c = Q0, Q0 = 16777216, qi(
            t,
            e,
            a
          ), Q0 = c) : qi(
            t,
            e,
            a
          ));
          break;
        default:
          qi(
            t,
            e,
            a
          );
      }
    }
    function Ey(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function Ua(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = de();
            _l = c, uu(
              c,
              t
            ), (c.mode & St) !== ct && 0 <= et && 0 <= nt && 0.05 < nt - et && Va(
              c,
              et,
              nt,
              "Unmount"
            ), tl(o);
          }
        Ey(t);
      }
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Qd(t), t = t.sibling;
    }
    function Qd(t) {
      var e = de(), a = Ja(), c = ba(), o = wa();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ua(t), t.flags & 2048 && qd(
            t,
            t.return,
            Ga | Du
          );
          break;
        case 3:
          var f = Kn();
          Ua(t), t.stateNode.passiveEffectDuration += Do(f);
          break;
        case 12:
          f = Kn(), Ua(t), t.stateNode.passiveEffectDuration += xl(f);
          break;
        case 22:
          f = t.stateNode, t.memoizedState !== null && f._visibility & $i && (t.return === null || t.return.tag !== 13) ? (f._visibility &= ~$i, Vd(t), (t.mode & St) !== ct && 0 <= et && 0 <= nt && 0.05 < nt - et && Va(
            t,
            et,
            nt,
            "Disconnect"
          )) : Ua(t);
          break;
        default:
          Ua(t);
      }
      (t.mode & St) !== ct && 0 <= et && 0 <= nt && (Ne || 0.05 < Oe) && dn(
        t,
        et,
        nt,
        Oe,
        Ee
      ), tl(e), Sa(a), Ne = o, Ee = c;
    }
    function Vd(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null)
          for (var a = 0; a < e.length; a++) {
            var c = e[a], o = de();
            _l = c, uu(
              c,
              t
            ), (c.mode & St) !== ct && 0 <= et && 0 <= nt && 0.05 < nt - et && Va(
              c,
              et,
              nt,
              "Unmount"
            ), tl(o);
          }
        Ey(t);
      }
      for (t = t.child; t !== null; )
        Ay(t), t = t.sibling;
    }
    function Ay(t) {
      var e = de(), a = Ja(), c = ba(), o = wa();
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          qd(
            t,
            t.return,
            Ga
          ), Vd(t);
          break;
        case 22:
          var f = t.stateNode;
          f._visibility & $i && (f._visibility &= ~$i, Vd(t));
          break;
        default:
          Vd(t);
      }
      (t.mode & St) !== ct && 0 <= et && 0 <= nt && (Ne || 0.05 < Oe) && dn(
        t,
        et,
        nt,
        Oe,
        Ee
      ), tl(e), Sa(a), Ne = o, Ee = c;
    }
    function uu(t, e) {
      for (; _l !== null; ) {
        var a = _l, c = a, o = e, f = de(), d = Ja(), h = ba(), y = wa();
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            qd(
              c,
              o,
              Ga
            );
            break;
          case 23:
          case 22:
            c.memoizedState !== null && c.memoizedState.cachePool !== null && (o = c.memoizedState.cachePool.pool, o != null && yi(o));
            break;
          case 24:
            os(c.memoizedState.cache);
        }
        if ((c.mode & St) !== ct && 0 <= et && 0 <= nt && (Ne || 0.05 < Oe) && dn(
          c,
          et,
          nt,
          Oe,
          Ee
        ), tl(f), Sa(d), Ne = y, Ee = h, c = a.child, c !== null) c.return = a, _l = c;
        else
          t: for (a = t; _l !== null; ) {
            if (c = _l, f = c.sibling, d = c.return, Be(c), c === a) {
              _l = null;
              break t;
            }
            if (f !== null) {
              f.return = d, _l = f;
              break t;
            }
            _l = d;
          }
      }
    }
    function zy() {
      UT.forEach(function(t) {
        return t();
      });
    }
    function Dy() {
      var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return t || B.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), t;
    }
    function Ml(t) {
      if ((xt & Al) !== Hl && Tt !== 0)
        return Tt & -Tt;
      var e = B.T;
      return e !== null ? (e._updatedFibers || (e._updatedFibers = /* @__PURE__ */ new Set()), e._updatedFibers.add(t), Ny()) : op();
    }
    function Zo() {
      if (ln === 0)
        if ((Tt & 536870912) === 0 || Ct) {
          var t = ir;
          ir <<= 1, (ir & 3932160) === 0 && (ir = 262144), ln = t;
        } else ln = 536870912;
      return t = Bn.current, t !== null && (t.flags |= 32), ln;
    }
    function ot(t, e, a) {
      if (Ih && console.error("useInsertionEffect must not schedule updates."), J1 && (mg = !0), (t === fe && (le === Ar || le === zr) || t.cancelPendingCommit !== null) && (cu(t, 0), Fa(
        t,
        Tt,
        ln,
        !1
      )), oc(t, a), (xt & Al) !== Hl && t === fe) {
        if (hu)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              t = At && I(At) || "Unknown", Jb.has(t) || (Jb.add(t), e = I(e) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                e,
                t,
                t
              ));
              break;
            case 1:
              Lb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Lb = !0);
          }
      } else
        yu && ua(t, e, a), Vs(e), t === fe && ((xt & Al) === Hl && (Bf |= a), Me === Cf && Fa(
          t,
          Tt,
          ln,
          !1
        )), fa(t);
    }
    function Jp(t, e, a) {
      if ((xt & (Al | Nn)) !== Hl)
        throw Error("Should not already be working.");
      if (Tt !== 0 && At !== null) {
        var c = At, o = cl();
        switch (xS) {
          case L0:
          case Ar:
            var f = M0;
            pe && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                vu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              vu,
              void 0,
              "primary-light"
            ));
            break;
          case zr:
            f = M0, pe && ((c = c._debugTask) ? c.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                vu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              vu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            pe && (c = o - M0, 3 > c || console.timeStamp(
              "Blocked",
              M0,
              o,
              vu,
              void 0,
              5 > c ? "primary-light" : 10 > c ? "primary" : 100 > c ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || vl(t, e)) ? Ku(t, e) : wo(t, e, !0);
      var d = a;
      do {
        if (f === uo) {
          Fh && !a && Fa(t, e, 0, !1), e = le, M0 = ol(), xS = e;
          break;
        } else {
          if (c = cl(), o = t.current.alternate, d && !Kp(o)) {
            rn(e), o = Cl, f = c, !pe || f <= o || (Qe ? Qe.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                qt,
                _t,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              qt,
              _t,
              "error"
            )), Yc(e, c), f = wo(t, e, !1), d = !1;
            continue;
          }
          if (f === Er) {
            if (d = e, t.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              rn(e), Om(
                Cl,
                c,
                e,
                Qe
              ), Yc(e, c), e = h;
              t: {
                c = t, f = d, d = w0;
                var y = c.current.memoizedState.isDehydrated;
                if (y && (cu(c, h).flags |= 256), h = wo(
                  c,
                  h,
                  !1
                ), h !== Er) {
                  if (x1 && !y) {
                    c.errorRecoveryDisabledLanes |= f, Bf |= f, f = Cf;
                    break t;
                  }
                  c = ja, ja = d, c !== null && (ja === null ? ja = c : ja.push.apply(
                    ja,
                    c
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Er) continue;
              c = cl();
            }
          }
          if (f === Z0) {
            rn(e), Om(
              Cl,
              c,
              e,
              Qe
            ), Yc(e, c), cu(t, 0), Fa(t, e, 0, !0);
            break;
          }
          t: {
            switch (a = t, f) {
              case uo:
              case Z0:
                throw Error("Root did not complete. This is a bug in React.");
              case Cf:
                if ((e & 4194048) !== e) break;
              case cg:
                rn(e), Tp(
                  Cl,
                  c,
                  e,
                  Qe
                ), Yc(e, c), o = e, (o & 127) !== 0 ? Jv = c : (o & 4194048) !== 0 && (wv = c), Fa(
                  a,
                  e,
                  ln,
                  !_f
                );
                break t;
              case Er:
                ja = null;
                break;
              case ug:
              case _b:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (B.actQueue !== null)
              ce(
                a,
                o,
                e,
                ja,
                K0,
                fg,
                ln,
                Bf,
                Dr,
                f,
                null,
                null,
                Cl,
                c
              );
            else {
              if ((e & 62914560) === e && (d = sg + qb - cl(), 10 < d)) {
                if (Fa(
                  a,
                  e,
                  ln,
                  !_f
                ), qr(a, 0, !0) !== 0) break t;
                uc = e, a.timeoutHandle = Pb(
                  wp.bind(
                    null,
                    a,
                    o,
                    ja,
                    K0,
                    fg,
                    e,
                    ln,
                    Bf,
                    Dr,
                    _f,
                    f,
                    "Throttled",
                    Cl,
                    c
                  ),
                  d
                );
                break t;
              }
              wp(
                a,
                o,
                ja,
                K0,
                fg,
                e,
                ln,
                Bf,
                Dr,
                _f,
                f,
                null,
                Cl,
                c
              );
            }
          }
        }
        break;
      } while (!0);
      fa(t);
    }
    function wp(t, e, a, c, o, f, d, h, y, p, A, D, S, _) {
      t.timeoutHandle = Cr;
      var Z = e.subtreeFlags, w = null;
      if ((Z & 8192 || (Z & 16785408) === 16785408) && (w = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qa
      }, Xd(e, f, w), Z = (f & 62914560) === f ? sg - cl() : (f & 4194048) === f ? Bb - cl() : 0, Z = oh(w, Z), Z !== null)) {
        uc = f, t.cancelPendingCommit = Z(
          ce.bind(
            null,
            t,
            e,
            f,
            a,
            c,
            o,
            d,
            h,
            y,
            A,
            w,
            w.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < w.count ? 0 < w.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : w.imgCount === 1 ? "Suspended on an Image" : 0 < w.imgCount ? "Suspended on Images" : null,
            S,
            _
          )
        ), Fa(
          t,
          f,
          d,
          !p
        );
        return;
      }
      ce(
        t,
        e,
        f,
        a,
        c,
        o,
        d,
        h,
        y,
        A,
        w,
        D,
        S,
        _
      );
    }
    function Kp(t) {
      for (var e = t; ; ) {
        var a = e.tag;
        if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var c = 0; c < a.length; c++) {
            var o = a[c], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Na(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = e.child, e.subtreeFlags & 16384 && a !== null)
          a.return = e, e = a;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return !0;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return !0;
    }
    function Fa(t, e, a, c) {
      e &= ~G1, e &= ~Bf, t.suspendedLanes |= e, t.pingedLanes &= ~e, c && (t.warmLanes |= e), c = t.expirationTimes;
      for (var o = e; 0 < o; ) {
        var f = 31 - bl(o), d = 1 << f;
        c[f] = -1, o &= ~d;
      }
      a !== 0 && im(t, a, e);
    }
    function Ca() {
      return (xt & (Al | Nn)) === Hl ? (ou(0), !1) : !0;
    }
    function Zd() {
      if (At !== null) {
        if (le === en)
          var t = At.return;
        else
          t = At, Ao(), Tc(t), Qh = null, Y0 = 0, t = At;
        for (; t !== null; )
          sy(t.alternate, t), t = t.return;
        At = null;
      }
    }
    function Yc(t, e) {
      (t & 127) !== 0 && (hr = e), (t & 4194048) !== 0 && (Pi = e), (t & 62914560) !== 0 && (NS = e), (t & 2080374784) !== 0 && (YS = e);
    }
    function cu(t, e) {
      pe && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        _t,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        _t,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        _t,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        _t,
        "primary-light"
      ));
      var a = Cl;
      if (Cl = ol(), Tt !== 0 && 0 < a) {
        if (rn(Tt), Me === ug || Me === Cf)
          Tp(
            a,
            Cl,
            e,
            Qe
          );
        else {
          var c = Cl, o = Qe;
          if (pe && !(c <= a)) {
            var f = (e & 738197653) === e ? "tertiary-dark" : "primary-dark", d = (e & 536870912) === e ? "Prewarm" : (e & 201326741) === e ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                c,
                qt,
                _t,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              c,
              qt,
              _t,
              f
            );
          }
        }
        Yc(Tt, Cl);
      }
      if (a = Qe, Qe = null, (e & 127) !== 0) {
        Qe = z0, o = 0 <= Kc && Kc < hr ? hr : Kc, c = 0 <= mr && mr < hr ? hr : mr, f = 0 <= c ? c : 0 <= o ? o : Cl, 0 <= Jv ? (rn(2), Ep(
          Jv,
          f,
          e,
          a
        )) : Kv & 127, a = o;
        var h = c, y = D0, p = 0 < Gh, A = Of === A0, D = Of === Lv;
        if (o = Cl, c = z0, f = p1, d = v1, pe) {
          if (qt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var S = p ? "secondary-light" : "warning";
            c ? c.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                qt,
                _t,
                S
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              qt,
              _t,
              S
            );
          }
          o > a && (h = A ? "error" : (e & 738197653) === e ? "tertiary-light" : "primary-light", A = D ? "Promise Resolved" : A ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", D = [], d != null && D.push(["Component name", d]), f != null && D.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: D,
                track: qt,
                trackGroup: _t,
                color: h
              }
            }
          }, c ? c.run(
            performance.measure.bind(
              performance,
              A,
              a
            )
          ) : performance.measure(A, a));
        }
        Kc = -1.1, Of = 0, v1 = p1 = null, Jv = -1.1, Gh = mr, mr = -1.1, hr = ol();
      }
      if ((e & 4194048) !== 0 && (Qe = O0, o = 0 <= to && to < Pi ? Pi : to, a = 0 <= Au && Au < Pi ? Pi : Au, c = 0 <= Mf && Mf < Pi ? Pi : Mf, f = 0 <= c ? c : 0 <= a ? a : Cl, 0 <= wv ? (rn(256), Ep(
        wv,
        f,
        e,
        Qe
      )) : Kv & 4194048, D = c, h = yr, y = 0 < Rf, p = g1 === Lv, f = Cl, c = O0, d = BS, A = qS, pe && (qt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < D ? D > o && (D = o) : D = o, o > D && h !== null && (S = y ? "secondary-light" : "warning", c ? c.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          D,
          o,
          qt,
          _t,
          S
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        D,
        o,
        qt,
        _t,
        S
      )), a > o && (c ? c.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          qt,
          _t,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        qt,
        _t,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", D = [], A != null && D.push(["Component name", A]), d != null && D.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: D,
            track: qt,
            trackGroup: _t,
            color: "primary-light"
          }
        }
      }, c ? c.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), Au = to = -1.1, g1 = 0, wv = -1.1, Rf = Mf, Mf = -1.1, Pi = ol()), (e & 62914560) !== 0 && (Kv & 62914560) !== 0 && (rn(4194304), Mm(NS, Cl)), (e & 2080374784) !== 0 && (Kv & 2080374784) !== 0 && (rn(268435456), Mm(YS, Cl)), a = t.timeoutHandle, a !== Cr && (t.timeoutHandle = Cr, VT(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), uc = 0, Zd(), fe = t, At = a = Jn(
        t.current,
        null
      ), Tt = e, le = en, Yn = null, _f = !1, Fh = vl(t, e), x1 = !1, Me = uo, Dr = ln = G1 = Bf = Hf = 0, ja = w0 = null, fg = !1, (e & 8) !== 0 && (e |= e & 32), c = t.entangledLanes, c !== 0)
        for (t = t.entanglements, c &= e; 0 < c; )
          o = 31 - bl(c), f = 1 << o, e |= t[o], c &= ~f;
      return Wc = e, ed(), t = MS(), 1e3 < t - OS && (B.recentlyCreatedOwnerStacks = 0, OS = t), lc.discardPendingWarnings(), a;
    }
    function An(t, e) {
      st = null, B.H = X0, B.getCurrentStack = null, hu = !1, ha = null, e === Xh || e === kv ? (e = gi(), le = L0) : e === E1 ? (e = gi(), le = Hb) : le = e === H1 ? Y1 : e !== null && typeof e == "object" && typeof e.then == "function" ? J0 : ig, Yn = e;
      var a = At;
      a === null ? (Me = Z0, Ms(
        t,
        Yl(e, t.current)
      )) : a.mode & St && od(a);
    }
    function Oy() {
      var t = Bn.current;
      return t === null ? !0 : (Tt & 4194048) === Tt ? zu === null : (Tt & 62914560) === Tt || (Tt & 536870912) !== 0 ? t === zu : !1;
    }
    function Ld() {
      var t = B.H;
      return B.H = X0, t === null ? X0 : t;
    }
    function My() {
      var t = B.A;
      return B.A = RT, t;
    }
    function Lo(t) {
      Qe === null && (Qe = t._debugTask == null ? null : t._debugTask);
    }
    function Jo() {
      Me = Cf, _f || (Tt & 4194048) !== Tt && Bn.current !== null || (Fh = !0), (Hf & 134217727) === 0 && (Bf & 134217727) === 0 || fe === null || Fa(
        fe,
        Tt,
        ln,
        !1
      );
    }
    function wo(t, e, a) {
      var c = xt;
      xt |= Al;
      var o = Ld(), f = My();
      if (fe !== t || Tt !== e) {
        if (yu) {
          var d = t.memoizedUpdaters;
          0 < d.size && ($o(t, Tt), d.clear()), Cu(t, e);
        }
        K0 = null, cu(t, e);
      }
      e = !1, d = Me;
      t: do
        try {
          if (le !== en && At !== null) {
            var h = At, y = Yn;
            switch (le) {
              case Y1:
                Zd(), d = cg;
                break t;
              case L0:
              case Ar:
              case zr:
              case J0:
                Bn.current === null && (e = !0);
                var p = le;
                if (le = en, Yn = null, Ko(t, h, y, p), a && Fh) {
                  d = uo;
                  break t;
                }
                break;
              default:
                p = le, le = en, Yn = null, Ko(t, h, y, p);
            }
          }
          Ry(), d = Me;
          break;
        } catch (A) {
          An(t, A);
        }
      while (!0);
      return e && t.shellSuspendCounter++, Ao(), xt = c, B.H = o, B.A = f, At === null && (fe = null, Tt = 0, ed()), d;
    }
    function Ry() {
      for (; At !== null; ) Jd(At);
    }
    function Ku(t, e) {
      var a = xt;
      xt |= Al;
      var c = Ld(), o = My();
      if (fe !== t || Tt !== e) {
        if (yu) {
          var f = t.memoizedUpdaters;
          0 < f.size && ($o(t, Tt), f.clear()), Cu(t, e);
        }
        K0 = null, rg = cl() + Nb, cu(t, e);
      } else
        Fh = vl(
          t,
          e
        );
      t: do
        try {
          if (le !== en && At !== null)
            e: switch (e = At, f = Yn, le) {
              case ig:
                le = en, Yn = null, Ko(
                  t,
                  e,
                  f,
                  ig
                );
                break;
              case Ar:
              case zr:
                if (jm(f)) {
                  le = en, Yn = null, Uy(e);
                  break;
                }
                e = function() {
                  le !== Ar && le !== zr || fe !== t || (le = og), fa(t);
                }, f.then(e, e);
                break t;
              case L0:
                le = og;
                break t;
              case Hb:
                le = N1;
                break t;
              case og:
                jm(f) ? (le = en, Yn = null, Uy(e)) : (le = en, Yn = null, Ko(
                  t,
                  e,
                  f,
                  og
                ));
                break;
              case N1:
                var d = null;
                switch (At.tag) {
                  case 26:
                    d = At.memoizedState;
                  case 5:
                  case 27:
                    var h = At;
                    if (d ? Dt(d) : h.stateNode.complete) {
                      le = en, Yn = null;
                      var y = h.sibling;
                      if (y !== null) At = y;
                      else {
                        var p = h.return;
                        p !== null ? (At = p, js(p)) : At = null;
                      }
                      break e;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                le = en, Yn = null, Ko(
                  t,
                  e,
                  f,
                  N1
                );
                break;
              case J0:
                le = en, Yn = null, Ko(
                  t,
                  e,
                  f,
                  J0
                );
                break;
              case Y1:
                Zd(), Me = cg;
                break t;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          B.actQueue !== null ? Ry() : je();
          break;
        } catch (A) {
          An(t, A);
        }
      while (!0);
      return Ao(), B.H = c, B.A = o, xt = a, At !== null ? uo : (fe = null, Tt = 0, ed(), Me);
    }
    function je() {
      for (; At !== null && !Sh(); )
        Jd(At);
    }
    function Jd(t) {
      var e = t.alternate;
      (t.mode & St) !== ct ? (Yu(t), e = $(
        t,
        _s,
        e,
        t,
        Wc
      ), od(t)) : e = $(
        t,
        _s,
        e,
        t,
        Wc
      ), t.memoizedProps = t.pendingProps, e === null ? js(t) : At = e;
    }
    function Uy(t) {
      var e = $(t, ul, t);
      t.memoizedProps = t.pendingProps, e === null ? js(t) : At = e;
    }
    function ul(t) {
      var e = t.alternate, a = (t.mode & St) !== ct;
      switch (a && Yu(t), t.tag) {
        case 15:
        case 0:
          e = ny(
            e,
            t,
            t.pendingProps,
            t.type,
            void 0,
            Tt
          );
          break;
        case 11:
          e = ny(
            e,
            t,
            t.pendingProps,
            t.type.render,
            t.ref,
            Tt
          );
          break;
        case 5:
          Tc(t);
        default:
          sy(e, t), t = At = _m(t, Wc), e = _s(e, t, Wc);
      }
      return a && od(t), e;
    }
    function Ko(t, e, a, c) {
      Ao(), Tc(e), Qh = null, Y0 = 0;
      var o = e.return;
      try {
        if (km(
          t,
          o,
          e,
          a,
          Tt
        )) {
          Me = Z0, Ms(
            t,
            Yl(a, t.current)
          ), At = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw At = o, f;
        Me = Z0, Ms(
          t,
          Yl(a, t.current)
        ), At = null;
        return;
      }
      e.flags & 32768 ? (Ct || c === ig ? t = !0 : Fh || (Tt & 536870912) !== 0 ? t = !1 : (_f = t = !0, (c === Ar || c === zr || c === L0 || c === J0) && (c = Bn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), Cy(e, t)) : js(e);
    }
    function js(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Cy(
            e,
            _f
          );
          return;
        }
        var a = e.alternate;
        if (t = e.return, Yu(e), a = $(
          e,
          fy,
          a,
          e,
          Wc
        ), (e.mode & St) !== ct && fs(e), a !== null) {
          At = a;
          return;
        }
        if (e = e.sibling, e !== null) {
          At = e;
          return;
        }
        At = e = t;
      } while (e !== null);
      Me === uo && (Me = _b);
    }
    function Cy(t, e) {
      do {
        var a = Gp(t.alternate, t);
        if (a !== null) {
          a.flags &= 32767, At = a;
          return;
        }
        if ((t.mode & St) !== ct) {
          fs(t), a = t.actualDuration;
          for (var c = t.child; c !== null; )
            a += c.actualDuration, c = c.sibling;
          t.actualDuration = a;
        }
        if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
          At = t;
          return;
        }
        At = t = a;
      } while (t !== null);
      Me = cg, At = null;
    }
    function ce(t, e, a, c, o, f, d, h, y, p, A, D, S, _) {
      t.cancelPendingCommit = null;
      do
        Xs();
      while (hl !== Nf);
      if (lc.flushLegacyContextWarning(), lc.flushPendingUnsafeLifecycleWarnings(), (xt & (Al | Nn)) !== Hl)
        throw Error("Should not already be working.");
      if (rn(a), p === Er ? Om(
        S,
        _,
        a,
        Qe
      ) : c !== null ? jg(
        S,
        _,
        a,
        c,
        e !== null && e.alternate !== null && e.alternate.memoizedState.isDehydrated && (e.flags & 256) !== 0,
        Qe
      ) : Gg(
        S,
        _,
        a,
        Qe
      ), e !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), e === t.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = e.lanes | e.childLanes, f |= r1, qg(
          t,
          a,
          f,
          d,
          h,
          y
        ), t === fe && (At = fe = null, Tt = 0), kh = e, Yf = t, uc = a, Q1 = f, Z1 = o, Qb = c, V1 = _, Vb = D, cc = dg, Zb = null, e.actualDuration !== 0 || (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Wo(Li, function() {
          return P0 = window.event, cc === dg && (cc = X1), Qs(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), Ii = null, Df = ol(), D !== null && Xg(
          _,
          Df,
          D,
          Qe
        ), c = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || c) {
          c = B.T, B.T = null, o = Zt.p, Zt.p = $e, d = xt, xt |= Nn;
          try {
            Zg(t, e, a);
          } finally {
            xt = d, Zt.p = o, B.T = c;
          }
        }
        hl = xb, Jl(), iu(), _y();
      }
    }
    function Jl() {
      if (hl === xb) {
        hl = Nf;
        var t = Yf, e = kh, a = uc, c = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || c) {
          c = B.T, B.T = null;
          var o = Zt.p;
          Zt.p = $e;
          var f = xt;
          xt |= Nn;
          try {
            $h = a, Wh = t, pi(), Ns(e, t), Wh = $h = null, a = tS;
            var d = Ir(t.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && vp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Am(h)) {
                var p = y.start, A = y.end;
                if (A === void 0 && (A = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    A,
                    h.value.length
                  );
                else {
                  var D = h.ownerDocument || document, S = D && D.defaultView || window;
                  if (S.getSelection) {
                    var _ = S.getSelection(), Z = h.textContent.length, w = Math.min(
                      y.start,
                      Z
                    ), re = y.end === void 0 ? w : Math.min(y.end, Z);
                    !_.extend && w > re && (d = re, re = w, w = d);
                    var Ht = pp(
                      h,
                      w
                    ), g = pp(
                      h,
                      re
                    );
                    if (Ht && g && (_.rangeCount !== 1 || _.anchorNode !== Ht.node || _.anchorOffset !== Ht.offset || _.focusNode !== g.node || _.focusOffset !== g.offset)) {
                      var b = D.createRange();
                      b.setStart(Ht.node, Ht.offset), _.removeAllRanges(), w > re ? (_.addRange(b), _.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), _.addRange(b));
                    }
                  }
                }
              }
              for (D = [], _ = h; _ = _.parentNode; )
                _.nodeType === 1 && D.push({
                  element: _,
                  left: _.scrollLeft,
                  top: _.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < D.length; h++) {
                var E = D[h];
                E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
              }
            }
            Rg = !!P1, tS = P1 = null;
          } finally {
            xt = f, Zt.p = o, B.T = c;
          }
        }
        t.current = e, hl = Gb;
      }
    }
    function iu() {
      if (hl === Gb) {
        hl = Nf;
        var t = Zb;
        if (t !== null) {
          Df = ol();
          var e = ki, a = Df;
          !pe || a <= e || console.timeStamp(
            t,
            e,
            a,
            qt,
            _t,
            "secondary-light"
          );
        }
        t = Yf, e = kh, a = uc;
        var c = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || c) {
          c = B.T, B.T = null;
          var o = Zt.p;
          Zt.p = $e;
          var f = xt;
          xt |= Nn;
          try {
            $h = a, Wh = t, pi(), Gd(
              t,
              e.alternate,
              e
            ), Wh = $h = null;
          } finally {
            xt = f, Zt.p = o, B.T = c;
          }
        }
        t = V1, e = Vb, ki = ol(), t = e === null ? t : Df, e = ki, a = cc === j1, c = Qe, Ii !== null ? Ap(
          t,
          e,
          Ii,
          !1,
          c
        ) : !pe || e <= t || (c ? c.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            t,
            e,
            qt,
            _t,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          t,
          e,
          qt,
          _t,
          a ? "error" : "secondary-dark"
        )), hl = jb;
      }
    }
    function _y() {
      if (hl === Xb || hl === jb) {
        if (hl === Xb) {
          var t = ki;
          ki = ol();
          var e = ki, a = cc === j1;
          !pe || e <= t || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            t,
            e,
            qt,
            _t,
            a ? " error" : "secondary-light"
          ), cc !== j1 && (cc = Yb);
        }
        hl = Nf, bh(), t = Yf;
        var c = kh;
        e = uc, a = Qb;
        var o = c.actualDuration !== 0 || (c.subtreeFlags & 10256) !== 0 || (c.flags & 10256) !== 0;
        o ? hl = hg : (hl = Nf, kh = Yf = null, Hy(
          t,
          t.pendingLanes
        ), Or = 0, W0 = null);
        var f = t.pendingLanes;
        if (f === 0 && (qf = null), o || $d(t), f = ql(e), c = c.stateNode, Ke && typeof Ke.onCommitFiberRoot == "function")
          try {
            var d = (c.current.flags & 128) === 128;
            switch (f) {
              case $e:
                var h = o0;
                break;
              case Tl:
                h = Th;
                break;
              case Ul:
                h = Li;
                break;
              case Lc:
                h = Eh;
                break;
              default:
                h = Li;
            }
            Ke.onCommitFiberRoot(
              Ji,
              c,
              h,
              d
            );
          } catch (D) {
            mu || (mu = !0, console.error(
              "React instrumentation encountered an error: %o",
              D
            ));
          }
        if (yu && t.memoizedUpdaters.clear(), zy(), a !== null) {
          d = B.T, h = Zt.p, Zt.p = $e, B.T = null;
          try {
            var y = t.onRecoverableError;
            for (c = 0; c < a.length; c++) {
              var p = a[c], A = $p(p.stack);
              $(
                p.source,
                y,
                p.value,
                A
              );
            }
          } finally {
            B.T = d, Zt.p = h;
          }
        }
        (uc & 3) !== 0 && Xs(), fa(t), f = t.pendingLanes, (e & 261930) !== 0 && (f & 42) !== 0 ? (Wv = !0, t === L1 ? $0++ : ($0 = 0, L1 = t)) : $0 = 0, o || Yc(e, ki), ou(0);
      }
    }
    function $p(t) {
      return t = { componentStack: t }, Object.defineProperty(t, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), t;
    }
    function Hy(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, os(e)));
    }
    function Xs() {
      return Jl(), iu(), _y(), Qs();
    }
    function Qs() {
      if (hl !== hg) return !1;
      var t = Yf, e = Q1;
      Q1 = 0;
      var a = ql(uc), c = Ul > a ? Ul : a;
      a = B.T;
      var o = Zt.p;
      try {
        Zt.p = c, B.T = null;
        var f = Z1;
        Z1 = null, c = Yf;
        var d = uc;
        if (hl = Nf, kh = Yf = null, uc = 0, (xt & (Al | Nn)) !== Hl)
          throw Error("Cannot flush passive effects while already rendering.");
        rn(d), J1 = !0, mg = !1;
        var h = 0;
        if (Ii = null, h = cl(), cc === Yb)
          Mm(
            ki,
            h,
            TT
          );
        else {
          var y = ki, p = h, A = cc === X1;
          !pe || p <= y || (Qe ? Qe.run(
            console.timeStamp.bind(
              console,
              A ? "Waiting for Paint" : "Waiting",
              y,
              p,
              qt,
              _t,
              "secondary-light"
            )
          ) : console.timeStamp(
            A ? "Waiting for Paint" : "Waiting",
            y,
            p,
            qt,
            _t,
            "secondary-light"
          ));
        }
        y = xt, xt |= Nn;
        var D = c.current;
        pi(), Qd(D);
        var S = c.current;
        D = V1, pi(), Ty(
          c,
          S,
          d,
          f,
          D
        ), $d(c), xt = y;
        var _ = cl();
        if (S = h, D = Qe, Ii !== null ? Ap(
          S,
          _,
          Ii,
          !0,
          D
        ) : !pe || _ <= S || (D ? D.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            S,
            _,
            qt,
            _t,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          S,
          _,
          qt,
          _t,
          "secondary-dark"
        )), Yc(d, _), ou(0, !1), mg ? c === W0 ? Or++ : (Or = 0, W0 = c) : Or = 0, mg = J1 = !1, Ke && typeof Ke.onPostCommitFiberRoot == "function")
          try {
            Ke.onPostCommitFiberRoot(Ji, c);
          } catch (w) {
            mu || (mu = !0, console.error(
              "React instrumentation encountered an error: %o",
              w
            ));
          }
        var Z = c.current.stateNode;
        return Z.effectDuration = 0, Z.passiveEffectDuration = 0, !0;
      } finally {
        Zt.p = o, B.T = a, Hy(t, e);
      }
    }
    function wl(t, e, a) {
      e = Yl(a, e), Up(e), e = zd(t.stateNode, e, 2), t = Wn(t, e, 2), t !== null && (oc(t, 2), fa(t));
    }
    function yt(t, e, a) {
      if (Ih = !1, t.tag === 3)
        wl(t, t, a);
      else {
        for (; e !== null; ) {
          if (e.tag === 3) {
            wl(
              e,
              t,
              a
            );
            return;
          }
          if (e.tag === 1) {
            var c = e.stateNode;
            if (typeof e.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (qf === null || !qf.has(c))) {
              t = Yl(a, t), Up(t), a = Dd(2), c = Wn(e, a, 2), c !== null && (Od(
                a,
                c,
                e,
                t
              ), oc(c, 2), fa(c));
              return;
            }
          }
          e = e.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function wd(t, e, a) {
      var c = t.pingCache;
      if (c === null) {
        c = t.pingCache = new CT();
        var o = /* @__PURE__ */ new Set();
        c.set(e, o);
      } else
        o = c.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), c.set(e, o));
      o.has(a) || (x1 = !0, o.add(a), c = oa.bind(null, t, e, a), yu && $o(t, a), e.then(c, c));
    }
    function oa(t, e, a) {
      var c = t.pingCache;
      c !== null && c.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Kc && (hr = Kc = ol(), z0 = Zv("Promise Resolved"), Of = Lv) : (a & 4194048) !== 0 && 0 > Au && (Pi = Au = ol(), O0 = Zv("Promise Resolved"), g1 = Lv), Dy() && B.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), fe === t && (Tt & a) === a && (Me === Cf || Me === ug && (Tt & 62914560) === Tt && cl() - sg < qb ? (xt & Al) === Hl && cu(t, 0) : G1 |= a, Dr === Tt && (Dr = 0)), fa(t);
    }
    function By(t, e) {
      e === 0 && (e = Nr()), t = Dl(t, e), t !== null && (oc(t, e), fa(t));
    }
    function $u(t) {
      var e = t.memoizedState, a = 0;
      e !== null && (a = e.retryLane), By(t, a);
    }
    function Ni(t, e) {
      var a = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var c = t.stateNode, o = t.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          c = t.stateNode;
          break;
        case 22:
          c = t.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      c !== null && c.delete(e), By(t, a);
    }
    function zn(t, e, a) {
      if ((e.subtreeFlags & 67117056) !== 0)
        for (e = e.child; e !== null; ) {
          var c = t, o = e, f = o.type === Wl;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && $(
            o,
            Kd,
            c,
            o
          ) : zn(
            c,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? $(
            o,
            Kd,
            c,
            o
          ) : o.subtreeFlags & 67108864 && $(
            o,
            zn,
            c,
            o,
            f
          )), e = e.sibling;
        }
    }
    function Kd(t, e) {
      ne(!0);
      try {
        jd(e), Ay(e), by(t, e.alternate, e, !1), Gs(t, e, 0, null, !1, 0);
      } finally {
        ne(!1);
      }
    }
    function $d(t) {
      var e = !0;
      t.current.mode & (ma | ec) || (e = !1), zn(
        t,
        t.current,
        e
      );
    }
    function ka(t) {
      if ((xt & Al) === Hl) {
        var e = t.tag;
        if (e === 3 || e === 1 || e === 0 || e === 11 || e === 14 || e === 15) {
          if (e = I(t) || "ReactComponent", yg !== null) {
            if (yg.has(e)) return;
            yg.add(e);
          } else yg = /* @__PURE__ */ new Set([e]);
          $(t, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function $o(t, e) {
      yu && t.memoizedUpdaters.forEach(function(a) {
        ua(t, a, e);
      });
    }
    function Wo(t, e) {
      var a = B.actQueue;
      return a !== null ? (a.push(e), BT) : i0(t, e);
    }
    function Vs(t) {
      Dy() && B.actQueue === null && $(t, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          I(t)
        );
      });
    }
    function fa(t) {
      t !== Ph && t.next === null && (Ph === null ? pg = Ph = t : Ph = Ph.next = t), vg = !0, B.actQueue !== null ? K1 || (K1 = !0, Fp()) : w1 || (w1 = !0, Fp());
    }
    function ou(t, e) {
      if (!$1 && vg) {
        $1 = !0;
        do
          for (var a = !1, c = pg; c !== null; ) {
            if (t !== 0) {
              var o = c.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = c.suspendedLanes, h = c.pingedLanes;
                f = (1 << 31 - bl(42 | t) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, Zs(c, f));
            } else
              f = Tt, f = qr(
                c,
                c === fe ? f : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== Cr
              ), (f & 3) === 0 || vl(c, f) || (a = !0, Zs(c, f));
            c = c.next;
          }
        while (a);
        $1 = !1;
      }
    }
    function Wp() {
      P0 = window.event, Wd();
    }
    function Wd() {
      vg = K1 = w1 = !1;
      var t = 0;
      xf !== 0 && xy() && (t = xf);
      for (var e = cl(), a = null, c = pg; c !== null; ) {
        var o = c.next, f = Fo(c, e);
        f === 0 ? (c.next = null, a === null ? pg = o : a.next = o, o === null && (Ph = a)) : (a = c, (t !== 0 || (f & 3) !== 0) && (vg = !0)), c = o;
      }
      hl !== Nf && hl !== hg || ou(t), xf !== 0 && (xf = 0);
    }
    function Fo(t, e) {
      for (var a = t.suspendedLanes, c = t.pingedLanes, o = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - bl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & c) !== 0) && (o[d] = Bg(h, e)) : y <= e && (t.expiredLanes |= h), f &= ~h;
      }
      if (e = fe, a = Tt, a = qr(
        t,
        t === e ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Cr
      ), c = t.callbackNode, a === 0 || t === e && (le === Ar || le === zr) || t.cancelPendingCommit !== null)
        return c !== null && Fd(c), t.callbackNode = null, t.callbackPriority = 0;
      if ((a & 3) === 0 || vl(t, a)) {
        if (e = a & -a, e !== t.callbackPriority || B.actQueue !== null && c !== W1)
          Fd(c);
        else return e;
        switch (ql(a)) {
          case $e:
          case Tl:
            a = Th;
            break;
          case Ul:
            a = Li;
            break;
          case Lc:
            a = Eh;
            break;
          default:
            a = Li;
        }
        return c = qy.bind(null, t), B.actQueue !== null ? (B.actQueue.push(c), a = W1) : a = i0(a, c), t.callbackPriority = e, t.callbackNode = a, e;
      }
      return c !== null && Fd(c), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function qy(t, e) {
      if (Wv = $v = !1, P0 = window.event, hl !== Nf && hl !== hg)
        return t.callbackNode = null, t.callbackPriority = 0, null;
      var a = t.callbackNode;
      if (cc === dg && (cc = X1), Xs() && t.callbackNode !== a)
        return null;
      var c = Tt;
      return c = qr(
        t,
        t === fe ? c : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== Cr
      ), c === 0 ? null : (Jp(
        t,
        c,
        e
      ), Fo(t, cl()), t.callbackNode != null && t.callbackNode === a ? qy.bind(null, t) : null);
    }
    function Zs(t, e) {
      if (Xs()) return null;
      $v = Wv, Wv = !1, Jp(t, e, !0);
    }
    function Fd(t) {
      t !== W1 && t !== null && gh(t);
    }
    function Fp() {
      B.actQueue !== null && B.actQueue.push(function() {
        return Wd(), null;
      }), ZT(function() {
        (xt & (Al | Nn)) !== Hl ? i0(
          o0,
          Wp
        ) : Wd();
      });
    }
    function Ny() {
      if (xf === 0) {
        var t = pr;
        t === 0 && (t = yf, yf <<= 1, (yf & 261888) === 0 && (yf = 256)), xf = t;
      }
      return xf;
    }
    function jt(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : (Ft(t, "action"), If("" + t));
    }
    function Pt(t, e) {
      var a = e.ownerDocument.createElement("input");
      return a.name = e.name, a.value = e.value, t.id && a.setAttribute("form", t.id), e.parentNode.insertBefore(a, e), t = new FormData(t), a.parentNode.removeChild(a), t;
    }
    function Mt(t, e, a, c, o) {
      if (e === "submit" && a && a.stateNode === o) {
        var f = jt(
          (o[Fl] || null).action
        ), d = c.submitter;
        d && (e = (e = d[Fl] || null) ? jt(e.formAction) : d.getAttribute("formAction"), e !== null && (f = e, d = null));
        var h = new Yv(
          "action",
          "action",
          null,
          c,
          o
        );
        t.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (c.defaultPrevented) {
                  if (xf !== 0) {
                    var y = d ? Pt(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), Lu(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Pt(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), Lu(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Et(t, e, a) {
      t.currentTarget = a;
      try {
        e(t);
      } catch (c) {
        i1(c);
      }
      t.currentTarget = null;
    }
    function Kt(t, e) {
      e = (e & 4) !== 0;
      for (var a = 0; a < t.length; a++) {
        var c = t[a];
        t: {
          var o = void 0, f = c.event;
          if (c = c.listeners, e)
            for (var d = c.length - 1; 0 <= d; d--) {
              var h = c[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? $(
                y,
                Et,
                f,
                h,
                p
              ) : Et(f, h, p), o = y;
            }
          else
            for (d = 0; d < c.length; d++) {
              if (h = c[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break t;
              y !== null ? $(
                y,
                Et,
                f,
                h,
                p
              ) : Et(f, h, p), o = y;
            }
        }
      }
    }
    function ut(t, e) {
      F1.has(t) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        t
      );
      var a = e[wi];
      a === void 0 && (a = e[wi] = /* @__PURE__ */ new Set());
      var c = t + "__bubble";
      a.has(c) || (kd(e, t, 2, !1), a.add(c));
    }
    function fu(t, e, a) {
      F1.has(t) && !e && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        t
      );
      var c = 0;
      e && (c |= 4), kd(
        a,
        t,
        c,
        e
      );
    }
    function xc(t) {
      if (!t[gg]) {
        t[gg] = !0, _v.forEach(function(a) {
          a !== "selectionchange" && (F1.has(a) || fu(a, !1, t), fu(a, !0, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[gg] || (e[gg] = !0, fu("selectionchange", !1, e));
      }
    }
    function kd(t, e, a, c) {
      switch (rh(e)) {
        case $e:
          var o = Fy;
          break;
        case Tl:
          o = Sl;
          break;
        default:
          o = ky;
      }
      a = o.bind(
        null,
        e,
        a,
        t
      ), o = void 0, !kg || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), c ? o !== void 0 ? t.addEventListener(e, a, {
        capture: !0,
        passive: o
      }) : t.addEventListener(e, a, !0) : o !== void 0 ? t.addEventListener(e, a, {
        passive: o
      }) : t.addEventListener(
        e,
        a,
        !1
      );
    }
    function Dn(t, e, a, c, o) {
      var f = c;
      if ((e & 1) === 0 && (e & 2) === 0 && c !== null)
        t: for (; ; ) {
          if (c === null) return;
          var d = c.tag;
          if (d === 3 || d === 4) {
            var h = c.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = c.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = _u(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                c = f = d;
                continue t;
              }
              h = h.parentNode;
            }
          }
          c = c.return;
        }
      $r(function() {
        var p = f, A = fn(a), D = [];
        t: {
          var S = DS.get(t);
          if (S !== void 0) {
            var _ = Yv, Z = t;
            switch (t) {
              case "keypress":
                if (Pf(a) === 0) break t;
              case "keydown":
              case "keyup":
                _ = $2;
                break;
              case "focusin":
                Z = "focus", _ = e1;
                break;
              case "focusout":
                Z = "blur", _ = e1;
                break;
              case "beforeblur":
              case "afterblur":
                _ = e1;
                break;
              case "click":
                if (a.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                _ = rS;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                _ = Y2;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                _ = k2;
                break;
              case TS:
              case ES:
              case AS:
                _ = j2;
                break;
              case zS:
                _ = P2;
                break;
              case "scroll":
              case "scrollend":
                _ = q2;
                break;
              case "wheel":
                _ = eT;
                break;
              case "copy":
              case "cut":
              case "paste":
                _ = Q2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                _ = hS;
                break;
              case "toggle":
              case "beforetoggle":
                _ = aT;
            }
            var w = (e & 4) !== 0, re = !w && (t === "scroll" || t === "scrollend"), Ht = w ? S !== null ? S + "Capture" : null : S;
            w = [];
            for (var g = p, b; g !== null; ) {
              var E = g;
              if (b = E.stateNode, E = E.tag, E !== 5 && E !== 26 && E !== 27 || b === null || Ht === null || (E = Zn(g, Ht), E != null && w.push(
                ie(
                  g,
                  E,
                  b
                )
              )), re) break;
              g = g.return;
            }
            0 < w.length && (S = new _(
              S,
              Z,
              null,
              a,
              A
            ), D.push({
              event: S,
              listeners: w
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (S = t === "mouseover" || t === "pointerover", _ = t === "mouseout" || t === "pointerout", S && a !== h0 && (Z = a.relatedTarget || a.fromElement) && (_u(Z) || Z[tc]))
              break t;
            if ((_ || S) && (S = A.window === A ? A : (S = A.ownerDocument) ? S.defaultView || S.parentWindow : window, _ ? (Z = a.relatedTarget || a.toElement, _ = p, Z = Z ? _u(Z) : null, Z !== null && (re = ae(Z), w = Z.tag, Z !== re || w !== 5 && w !== 27 && w !== 6) && (Z = null)) : (_ = null, Z = p), _ !== Z)) {
              if (w = rS, E = "onMouseLeave", Ht = "onMouseEnter", g = "mouse", (t === "pointerout" || t === "pointerover") && (w = hS, E = "onPointerLeave", Ht = "onPointerEnter", g = "pointer"), re = _ == null ? S : fc(_), b = Z == null ? S : fc(Z), S = new w(
                E,
                g + "leave",
                _,
                a,
                A
              ), S.target = re, S.relatedTarget = b, E = null, _u(A) === p && (w = new w(
                Ht,
                g + "enter",
                Z,
                a,
                A
              ), w.target = b, w.relatedTarget = re, E = w), re = E, _ && Z)
                e: {
                  for (w = Yi, Ht = _, g = Z, b = 0, E = Ht; E; E = w(E))
                    b++;
                  E = 0;
                  for (var x = g; x; x = w(x))
                    E++;
                  for (; 0 < b - E; )
                    Ht = w(Ht), b--;
                  for (; 0 < E - b; )
                    g = w(g), E--;
                  for (; b--; ) {
                    if (Ht === g || g !== null && Ht === g.alternate) {
                      w = Ht;
                      break e;
                    }
                    Ht = w(Ht), g = w(g);
                  }
                  w = null;
                }
              else w = null;
              _ !== null && Id(
                D,
                S,
                _,
                w,
                !1
              ), Z !== null && re !== null && Id(
                D,
                re,
                Z,
                w,
                !0
              );
            }
          }
          t: {
            if (S = p ? fc(p) : window, _ = S.nodeName && S.nodeName.toLowerCase(), _ === "select" || _ === "input" && S.type === "file")
              var J = hc;
            else if (bm(S))
              if (SS)
                J = as;
              else {
                J = Tm;
                var rt = xg;
              }
            else
              _ = S.nodeName, !_ || _.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? p && Vn(p.elementType) && (J = hc) : J = Em;
            if (J && (J = J(t, p))) {
              es(
                D,
                J,
                a,
                A
              );
              break t;
            }
            rt && rt(t, S, p), t === "focusout" && p && S.type === "number" && p.memoizedProps.value != null && rm(S, "number", S.value);
          }
          switch (rt = p ? fc(p) : window, t) {
            case "focusin":
              (bm(rt) || rt.contentEditable === "true") && (Ch = rt, a1 = p, b0 = null);
              break;
            case "focusout":
              b0 = a1 = Ch = null;
              break;
            case "mousedown":
              n1 = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              n1 = !1, gp(
                D,
                a,
                A
              );
              break;
            case "selectionchange":
              if (iT) break;
            case "keydown":
            case "keyup":
              gp(
                D,
                a,
                A
              );
          }
          var tt;
          if (l1)
            t: {
              switch (t) {
                case "compositionstart":
                  var k = "onCompositionStart";
                  break t;
                case "compositionend":
                  k = "onCompositionEnd";
                  break t;
                case "compositionupdate":
                  k = "onCompositionUpdate";
                  break t;
              }
              k = void 0;
            }
          else
            Uh ? go(t, a) && (k = "onCompositionEnd") : t === "keydown" && a.keyCode === mS && (k = "onCompositionStart");
          k && (yS && a.locale !== "ko" && (Uh || k !== "onCompositionStart" ? k === "onCompositionEnd" && Uh && (tt = ci()) : (bf = A, Ig = "value" in bf ? bf.value : bf.textContent, Uh = !0)), rt = On(
            p,
            k
          ), 0 < rt.length && (k = new dS(
            k,
            t,
            null,
            a,
            A
          ), D.push({
            event: k,
            listeners: rt
          }), tt ? k.data = tt : (tt = qu(a), tt !== null && (k.data = tt)))), (tt = uT ? Sm(t, a) : Wr(t, a)) && (k = On(
            p,
            "onBeforeInput"
          ), 0 < k.length && (rt = new Z2(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            A
          ), D.push({
            event: rt,
            listeners: k
          }), rt.data = tt)), Mt(
            D,
            t,
            p,
            a,
            A
          );
        }
        Kt(D, e);
      });
    }
    function ie(t, e, a) {
      return {
        instance: t,
        listener: e,
        currentTarget: a
      };
    }
    function On(t, e) {
      for (var a = e + "Capture", c = []; t !== null; ) {
        var o = t, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Zn(t, a), o != null && c.unshift(
          ie(t, o, f)
        ), o = Zn(t, e), o != null && c.push(
          ie(t, o, f)
        )), t.tag === 3) return c;
        t = t.return;
      }
      return [];
    }
    function Yi(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function Id(t, e, a, c, o) {
      for (var f = e._reactName, d = []; a !== null && a !== c; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === c) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = Zn(a, f), p != null && d.unshift(
          ie(a, p, y)
        )) : o || (p = Zn(a, f), p != null && d.push(
          ie(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && t.push({ event: e, listeners: d });
    }
    function Kl(t, e) {
      hp(t, e), t !== "input" && t !== "textarea" && t !== "select" || e == null || e.value !== null || fS || (fS = !0, t === "select" && e.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        t
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        t
      ));
      var a = {
        registrationNameDependencies: pu,
        possibleRegistrationNames: gf
      };
      Vn(t) || typeof e.is == "string" || Yg(t, e, a), e.contentEditable && !e.suppressContentEditableWarning && e.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function be(t, e, a, c) {
      e !== a && (a = Mn(a), Mn(e) !== a && (c[t] = e));
    }
    function Ls(t, e, a) {
      e.forEach(function(c) {
        a[Wu(c)] = c === "style" ? Gc(t) : t.getAttribute(c);
      });
    }
    function Te(t, e) {
      e === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        t,
        t,
        t
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        t,
        typeof e
      );
    }
    function Pd(t, e) {
      return t = t.namespaceURI === ht || t.namespaceURI === pt ? t.ownerDocument.createElementNS(
        t.namespaceURI,
        t.tagName
      ) : t.ownerDocument.createElement(t.tagName), t.innerHTML = e, t.innerHTML;
    }
    function Mn(t) {
      return Gn(t) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        wf(t)
      ), kc(t)), (typeof t == "string" ? t : "" + t).replace(qT, `
`).replace(NT, "");
    }
    function Yy(t, e) {
      return e = Mn(e), Mn(t) === e;
    }
    function Vt(t, e, a, c, o, f) {
      switch (a) {
        case "children":
          typeof c == "string" ? (kf(c, e, !1), e === "body" || e === "textarea" && c === "" || ui(t, c)) : (typeof c == "number" || typeof c == "bigint") && (kf("" + c, e, !1), e !== "body" && ui(t, "" + c));
          break;
        case "className":
          $f(t, "class", c);
          break;
        case "tabIndex":
          $f(t, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          $f(t, a, c);
          break;
        case "style":
          pm(t, c, f);
          break;
        case "data":
          if (e !== "object") {
            $f(t, "data", c);
            break;
          }
        case "src":
        case "href":
          if (c === "" && (e !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), t.removeAttribute(a);
            break;
          }
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
            t.removeAttribute(a);
            break;
          }
          Ft(c, a), c = If("" + c), t.setAttribute(a, c);
          break;
        case "action":
        case "formAction":
          if (c != null && (e === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof c == "function" && (o.encType == null && o.method == null || Tg || (Tg = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || bg || (bg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : e === "input" || e === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : e !== "input" || o.type === "submit" || o.type === "image" || Sg ? e !== "button" || o.type == null || o.type === "submit" || Sg ? typeof c == "function" && (o.name == null || $b || ($b = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Tg || (Tg = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || bg || (bg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Sg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Sg = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof c == "function") {
            t.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (e !== "input" && Vt(t, e, "name", o.name, o, null), Vt(
              t,
              e,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Vt(
              t,
              e,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Vt(
              t,
              e,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Vt(
              t,
              e,
              "encType",
              o.encType,
              o,
              null
            ), Vt(t, e, "method", o.method, o, null), Vt(
              t,
              e,
              "target",
              o.target,
              o,
              null
            )));
          if (c == null || typeof c == "symbol" || typeof c == "boolean") {
            t.removeAttribute(a);
            break;
          }
          Ft(c, a), c = If("" + c), t.setAttribute(a, c);
          break;
        case "onClick":
          c != null && (typeof c != "function" && Te(a, c), t.onclick = Qa);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && Te(a, c), ut("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && Te(a, c), ut("scrollend", t));
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "multiple":
          t.multiple = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "muted":
          t.muted = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
            t.removeAttribute("xlink:href");
            break;
          }
          Ft(c, a), a = If("" + c), t.setAttributeNS(Mr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          c != null && typeof c != "function" && typeof c != "symbol" ? (Ft(c, a), t.setAttribute(a, "" + c)) : t.removeAttribute(a);
          break;
        case "inert":
          c !== "" || Eg[a] || (Eg[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          c && typeof c != "function" && typeof c != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
          break;
        case "capture":
        case "download":
          c === !0 ? t.setAttribute(a, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? (Ft(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? (Ft(c, a), t.setAttribute(a, c)) : t.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? t.removeAttribute(a) : (Ft(c, a), t.setAttribute(a, c));
          break;
        case "popover":
          ut("beforetoggle", t), ut("toggle", t), xr(t, "popover", c);
          break;
        case "xlinkActuate":
          jn(
            t,
            Mr,
            "xlink:actuate",
            c
          );
          break;
        case "xlinkArcrole":
          jn(
            t,
            Mr,
            "xlink:arcrole",
            c
          );
          break;
        case "xlinkRole":
          jn(
            t,
            Mr,
            "xlink:role",
            c
          );
          break;
        case "xlinkShow":
          jn(
            t,
            Mr,
            "xlink:show",
            c
          );
          break;
        case "xlinkTitle":
          jn(
            t,
            Mr,
            "xlink:title",
            c
          );
          break;
        case "xlinkType":
          jn(
            t,
            Mr,
            "xlink:type",
            c
          );
          break;
        case "xmlBase":
          jn(
            t,
            k1,
            "xml:base",
            c
          );
          break;
        case "xmlLang":
          jn(
            t,
            k1,
            "xml:lang",
            c
          );
          break;
        case "xmlSpace":
          jn(
            t,
            k1,
            "xml:space",
            c
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), xr(t, "is", c);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          Wb || c == null || typeof c != "object" || (Wb = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            c
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = rp(a), xr(t, a, c)) : pu.hasOwnProperty(a) && c != null && typeof c != "function" && Te(a, c);
      }
    }
    function ko(t, e, a, c, o, f) {
      switch (a) {
        case "style":
          pm(t, c, f);
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              t.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof c == "string" ? ui(t, c) : (typeof c == "number" || typeof c == "bigint") && ui(t, "" + c);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && Te(a, c), ut("scroll", t));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && Te(a, c), ut("scrollend", t));
          break;
        case "onClick":
          c != null && (typeof c != "function" && Te(a, c), t.onclick = Qa);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (pu.hasOwnProperty(a))
            c != null && typeof c != "function" && Te(a, c);
          else
            t: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), e = a.slice(2, o ? a.length - 7 : void 0), f = t[Fl] || null, f = f != null ? f[a] : null, typeof f == "function" && t.removeEventListener(e, f, o), typeof c == "function")) {
                typeof f != "function" && f !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(e, c, o);
                break t;
              }
              a in t ? t[a] = c : c === !0 ? t.setAttribute(a, "") : xr(t, a, c);
            }
      }
    }
    function me(t, e, a) {
      switch (Kl(e, a), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ut("error", t), ut("load", t);
          var c = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    c = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Vt(t, e, f, d, a, null);
                }
            }
          o && Vt(t, e, "srcSet", a.srcSet, a, null), c && Vt(t, e, "src", a.src, a, null);
          return;
        case "input":
          ti("input", a), ut("invalid", t);
          var h = f = d = o = null, y = null, p = null;
          for (c in a)
            if (a.hasOwnProperty(c)) {
              var A = a[c];
              if (A != null)
                switch (c) {
                  case "name":
                    o = A;
                    break;
                  case "type":
                    d = A;
                    break;
                  case "checked":
                    y = A;
                    break;
                  case "defaultChecked":
                    p = A;
                    break;
                  case "value":
                    f = A;
                    break;
                  case "defaultValue":
                    h = A;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (A != null)
                      throw Error(
                        e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Vt(t, e, c, A, a, null);
                }
            }
          Nl(t, a), Xr(
            t,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ti("select", a), ut("invalid", t), c = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  c = h;
                default:
                  Vt(
                    t,
                    e,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Qr(t, a), e = f, a = d, t.multiple = !!c, e != null ? Xn(t, !!c, e, !1) : a != null && Xn(t, !!c, a, !0);
          return;
        case "textarea":
          ti("textarea", a), ut("invalid", t), f = o = c = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  c = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Vt(
                    t,
                    e,
                    d,
                    h,
                    a,
                    null
                  );
              }
          ei(t, a), ro(t, c, o, f);
          return;
        case "option":
          sp(t, a);
          for (y in a)
            if (a.hasOwnProperty(y) && (c = a[y], c != null))
              switch (y) {
                case "selected":
                  t.selected = c && typeof c != "function" && typeof c != "symbol";
                  break;
                default:
                  Vt(t, e, y, c, a, null);
              }
          return;
        case "dialog":
          ut("beforetoggle", t), ut("toggle", t), ut("cancel", t), ut("close", t);
          break;
        case "iframe":
        case "object":
          ut("load", t);
          break;
        case "video":
        case "audio":
          for (c = 0; c < F0.length; c++)
            ut(F0[c], t);
          break;
        case "image":
          ut("error", t), ut("load", t);
          break;
        case "details":
          ut("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          ut("error", t), ut("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (c = a[p], c != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Vt(t, e, p, c, a, null);
              }
          return;
        default:
          if (Vn(e)) {
            for (A in a)
              a.hasOwnProperty(A) && (c = a[A], c !== void 0 && ko(
                t,
                e,
                A,
                c,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (c = a[h], c != null && Vt(t, e, h, c, a, null));
    }
    function we(t, e, a, c) {
      switch (Kl(e, c), e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, A = null;
          for (_ in a) {
            var D = a[_];
            if (a.hasOwnProperty(_) && D != null)
              switch (_) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = D;
                default:
                  c.hasOwnProperty(_) || Vt(
                    t,
                    e,
                    _,
                    null,
                    c,
                    D
                  );
              }
          }
          for (var S in c) {
            var _ = c[S];
            if (D = a[S], c.hasOwnProperty(S) && (_ != null || D != null))
              switch (S) {
                case "type":
                  f = _;
                  break;
                case "name":
                  o = _;
                  break;
                case "checked":
                  p = _;
                  break;
                case "defaultChecked":
                  A = _;
                  break;
                case "value":
                  d = _;
                  break;
                case "defaultValue":
                  h = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  _ !== D && Vt(
                    t,
                    e,
                    S,
                    _,
                    c,
                    D
                  );
              }
          }
          e = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, c = c.type === "checkbox" || c.type === "radio" ? c.checked != null : c.value != null, e || !c || Kb || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Kb = !0), !e || c || wb || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), wb = !0), sc(
            t,
            d,
            h,
            y,
            p,
            A,
            f,
            o
          );
          return;
        case "select":
          _ = d = h = S = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  _ = y;
                default:
                  c.hasOwnProperty(f) || Vt(
                    t,
                    e,
                    f,
                    null,
                    c,
                    y
                  );
              }
          for (o in c)
            if (f = c[o], y = a[o], c.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  S = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Vt(
                    t,
                    e,
                    o,
                    f,
                    c,
                    y
                  );
              }
          c = h, e = d, a = _, S != null ? Xn(t, !!e, S, !1) : !!a != !!e && (c != null ? Xn(t, !!e, c, !0) : Xn(t, !!e, e ? [] : "", !1));
          return;
        case "textarea":
          _ = S = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !c.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Vt(t, e, h, null, c, o);
              }
          for (d in c)
            if (o = c[d], f = a[d], c.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  S = o;
                  break;
                case "defaultValue":
                  _ = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Vt(t, e, d, o, c, f);
              }
          li(t, S, _);
          return;
        case "option":
          for (var Z in a)
            if (S = a[Z], a.hasOwnProperty(Z) && S != null && !c.hasOwnProperty(Z))
              switch (Z) {
                case "selected":
                  t.selected = !1;
                  break;
                default:
                  Vt(
                    t,
                    e,
                    Z,
                    null,
                    c,
                    S
                  );
              }
          for (y in c)
            if (S = c[y], _ = a[y], c.hasOwnProperty(y) && S !== _ && (S != null || _ != null))
              switch (y) {
                case "selected":
                  t.selected = S && typeof S != "function" && typeof S != "symbol";
                  break;
                default:
                  Vt(
                    t,
                    e,
                    y,
                    S,
                    c,
                    _
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var w in a)
            S = a[w], a.hasOwnProperty(w) && S != null && !c.hasOwnProperty(w) && Vt(
              t,
              e,
              w,
              null,
              c,
              S
            );
          for (p in c)
            if (S = c[p], _ = a[p], c.hasOwnProperty(p) && S !== _ && (S != null || _ != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(
                      e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Vt(
                    t,
                    e,
                    p,
                    S,
                    c,
                    _
                  );
              }
          return;
        default:
          if (Vn(e)) {
            for (var re in a)
              S = a[re], a.hasOwnProperty(re) && S !== void 0 && !c.hasOwnProperty(re) && ko(
                t,
                e,
                re,
                void 0,
                c,
                S
              );
            for (A in c)
              S = c[A], _ = a[A], !c.hasOwnProperty(A) || S === _ || S === void 0 && _ === void 0 || ko(
                t,
                e,
                A,
                S,
                c,
                _
              );
            return;
          }
      }
      for (var Ht in a)
        S = a[Ht], a.hasOwnProperty(Ht) && S != null && !c.hasOwnProperty(Ht) && Vt(t, e, Ht, null, c, S);
      for (D in c)
        S = c[D], _ = a[D], !c.hasOwnProperty(D) || S === _ || S == null && _ == null || Vt(t, e, D, S, c, _);
    }
    function Wu(t) {
      switch (t) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return t;
      }
    }
    function Gc(t) {
      var e = {};
      t = t.style;
      for (var a = 0; a < t.length; a++) {
        var c = t[a];
        e[c] = t.getPropertyValue(c);
      }
      return e;
    }
    function su(t, e, a) {
      if (e != null && typeof e != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var c, o = c = "", f;
        for (f in e)
          if (e.hasOwnProperty(f)) {
            var d = e[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (nm(d, f), c += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || F.has(f) ? (nm(d, f), c += o + f.replace(q, "-$1").toLowerCase().replace(W, "-ms-") + ":" + ("" + d).trim()) : c += o + f.replace(q, "-$1").toLowerCase().replace(W, "-ms-") + ":" + d + "px", o = ";");
          }
        c = c || null, e = t.getAttribute("style"), e !== c && (c = Mn(c), Mn(e) !== c && (a.style = Gc(t)));
      }
    }
    function sa(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Ft(c, e), t === "" + c)
              return;
        }
      be(e, t, c, f);
    }
    function th(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
        }
        if (!c) return;
      } else
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (c) return;
        }
      be(e, t, c, f);
    }
    function eh(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (Ft(c, a), t === "" + c)
              return;
        }
      be(e, t, c, f);
    }
    function Io(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(c)) return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(c) && (Ft(c, e), t === "" + c))
              return;
        }
      be(e, t, c, f);
    }
    function Js(t, e, a, c, o, f) {
      if (o.delete(a), t = t.getAttribute(a), t === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Ft(c, e), a = If("" + c), t === a)
              return;
        }
      be(e, t, c, f);
    }
    function ra(t, e, a, c) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = t.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Vn(e)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (pu.hasOwnProperty(y))
                typeof p != "function" && Te(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || be(
                      "children",
                      t.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = t.innerHTML, p = p ? p.__html : void 0, p != null && (p = Pd(t, p), be(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), su(t, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = so(
                      t,
                      "class",
                      p
                    ), be(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    c.context === co && e !== "svg" && e !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = so(
                      t,
                      y,
                      p
                    ), be(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (pu.hasOwnProperty(p))
              typeof y != "function" && Te(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || be(
                    "children",
                    t.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = t.innerHTML, y = y ? y.__html : void 0, y != null && (y = Pd(t, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  sa(
                    t,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  sa(
                    t,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), su(t, y, o);
                  continue;
                case "multiple":
                  f.delete(p), be(
                    p,
                    t.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), be(
                    p,
                    t.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), be(
                    p,
                    t.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (e !== "object") {
                    f.delete(p), d = t.getAttribute("data"), be(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || e === "a" && p === "href" || e === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  Js(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = t.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === YT) {
                    f.delete(p.toLowerCase()), be(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Js(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Js(
                    t,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  eh(
                    t,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  eh(
                    t,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  eh(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  th(
                    t,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  t: {
                    h = t;
                    var A = d = p, D = o;
                    if (f.delete(A), h = h.getAttribute(A), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break t;
                        default:
                          if (y === !1) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break t;
                          break;
                        default:
                          if (Ft(y, d), h === "" + y)
                            break t;
                      }
                    be(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  t: {
                    if (h = t, A = d = p, D = o, f.delete(A), h = h.getAttribute(A), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break t;
                        default:
                          if (isNaN(y) || 1 > y) break t;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (Ft(y, d), h === "" + y))
                            break t;
                      }
                    be(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "rowSpan":
                  Io(
                    t,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Io(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  sa(
                    t,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  sa(
                    t,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  sa(
                    t,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  sa(
                    t,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  sa(
                    t,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  sa(
                    t,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  sa(
                    t,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  sa(
                    t,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  sa(
                    t,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  sa(
                    t,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Eg[p] || (Eg[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), th(
                    t,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = rp(p), d = !1, c.context === co && e !== "svg" && e !== "math" ? f.delete(h.toLowerCase()) : (A = p.toLowerCase(), A = _n.hasOwnProperty(
                      A
                    ) && _n[A] || null, A !== null && A !== p && (d = !0, f.delete(A)), f.delete(h));
                    t: if (A = t, D = h, h = y, Kf(D))
                      if (A.hasAttribute(D))
                        A = A.getAttribute(
                          D
                        ), Ft(
                          h,
                          D
                        ), h = A === "" + h ? h : A;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break t;
                          case "boolean":
                            if (A = D.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
                              break t;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || be(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Ls(t, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function kp(t, e) {
      switch (t.length) {
        case 0:
          return "";
        case 1:
          return t[0];
        case 2:
          return t[0] + " " + e + " " + t[1];
        default:
          return t.slice(0, -1).join(", ") + ", " + e + " " + t[t.length - 1];
      }
    }
    function $l(t) {
      switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function Ip() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), c = 0; c < a.length; c++) {
          var o = a[c], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && $l(d)) {
            for (d = 0, h = o.responseEnd, c += 1; c < a.length; c++) {
              var y = a[c], p = y.startTime;
              if (p > h) break;
              var A = y.transferSize, D = y.initiatorType;
              A && $l(D) && (y = y.responseEnd, d += A * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--c, e += 8 * (f + d) / (o.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    function ws(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Pp(t) {
      switch (t) {
        case pt:
          return em;
        case ht:
          return zg;
        default:
          return co;
      }
    }
    function Fu(t, e) {
      if (t === co)
        switch (e) {
          case "svg":
            return em;
          case "math":
            return zg;
          default:
            return co;
        }
      return t === em && e === "foreignObject" ? co : t;
    }
    function Po(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    function xy() {
      var t = window.event;
      return t && t.type === "popstate" ? t === eS ? !1 : (eS = t, !0) : (eS = null, !1);
    }
    function ru() {
      var t = window.event;
      return t && t !== P0 ? t.type : null;
    }
    function tf() {
      var t = window.event;
      return t && t !== P0 ? t.timeStamp : -1.1;
    }
    function tv(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function ev(t, e, a) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && t.focus();
          break;
        case "img":
          a.src ? t.src = a.src : a.srcSet && (t.srcset = a.srcSet);
      }
    }
    function lv() {
    }
    function lh(t, e, a, c) {
      we(t, e, a, c), t[Fl] = c;
    }
    function ah(t) {
      ui(t, "");
    }
    function Lg(t, e, a) {
      t.nodeValue = a;
    }
    function av(t) {
      if (!t.__reactWarnedAboutChildrenConflict) {
        var e = t[Fl] || null;
        if (e !== null) {
          var a = un(t);
          a !== null && (typeof e.children == "string" || typeof e.children == "number" ? (t.__reactWarnedAboutChildrenConflict = !0, $(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : e.dangerouslySetInnerHTML != null && (t.__reactWarnedAboutChildrenConflict = !0, $(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function jc(t) {
      return t === "head";
    }
    function nv(t, e) {
      t.removeChild(e);
    }
    function uv(t, e) {
      (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).removeChild(e);
    }
    function xi(t, e) {
      var a = e, c = 0;
      do {
        var o = a.nextSibling;
        if (t.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === I0 || a === Ag) {
            if (c === 0) {
              t.removeChild(o), Qi(e);
              return;
            }
            c--;
          } else if (a === k0 || a === Gf || a === Ur || a === tm || a === Rr)
            c++;
          else if (a === GT)
            Iu(
              t.ownerDocument.documentElement
            );
          else if (a === XT) {
            a = t.ownerDocument.head, Iu(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[vf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === jT && Iu(t.ownerDocument.body);
        a = o;
      } while (a);
      Qi(e);
    }
    function Ks(t, e) {
      var a = t;
      t = 0;
      do {
        var c = a.nextSibling;
        if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), c && c.nodeType === 8)
          if (a = c.data, a === I0) {
            if (t === 0) break;
            t--;
          } else
            a !== k0 && a !== Gf && a !== Ur && a !== tm || t++;
        a = c;
      } while (a);
    }
    function cv(t) {
      Ks(t, !0);
    }
    function iv(t) {
      t = t.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ov(t) {
      t.nodeValue = "";
    }
    function fv(t) {
      Ks(t, !1);
    }
    function sv(t, e) {
      e = e[QT], e = e != null && e.hasOwnProperty("display") ? e.display : null, t.style.display = e == null || typeof e == "boolean" ? "" : ("" + e).trim();
    }
    function rv(t, e) {
      t.nodeValue = e;
    }
    function ef(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var a = e;
        switch (e = e.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            ef(a), om(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(a);
      }
    }
    function dv(t, e, a, c) {
      for (; t.nodeType === 1; ) {
        var o = a;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!c && (t.nodeName !== "INPUT" || t.type !== "hidden"))
            break;
        } else if (c) {
          if (!t[vf])
            switch (e) {
              case "meta":
                if (!t.hasAttribute("itemprop")) break;
                return t;
              case "link":
                if (f = t.getAttribute("rel"), f === "stylesheet" && t.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return t;
              case "style":
                if (t.hasAttribute("data-precedence")) break;
                return t;
              case "script":
                if (f = t.getAttribute("src"), (f !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                  break;
                return t;
              default:
                return t;
            }
        } else if (e === "input" && t.type === "hidden") {
          Ft(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && t.getAttribute("name") === f)
            return t;
        } else return t;
        if (t = _a(t.nextSibling), t === null) break;
      }
      return null;
    }
    function hv(t, e, a) {
      if (e === "") return null;
      for (; t.nodeType !== 3; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = _a(t.nextSibling), t === null)) return null;
      return t;
    }
    function $t(t, e) {
      for (; t.nodeType !== 8; )
        if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = _a(t.nextSibling), t === null)) return null;
      return t;
    }
    function $s(t) {
      return t.data === Gf || t.data === Ur;
    }
    function Gy(t) {
      return t.data === tm || t.data === Gf && t.ownerDocument.readyState !== kb;
    }
    function mv(t, e) {
      var a = t.ownerDocument;
      if (t.data === Ur)
        t._reactRetry = e;
      else if (t.data !== Gf || a.readyState !== kb)
        e();
      else {
        var c = function() {
          e(), a.removeEventListener("DOMContentLoaded", c);
        };
        a.addEventListener("DOMContentLoaded", c), t._reactRetry = c;
      }
    }
    function _a(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === k0 || e === tm || e === Gf || e === Ur || e === Rr || e === I1 || e === Fb)
            break;
          if (e === I0 || e === Ag)
            return null;
        }
      }
      return t;
    }
    function yv(t) {
      if (t.nodeType === 1) {
        for (var e = t.nodeName.toLowerCase(), a = {}, c = t.attributes, o = 0; o < c.length; o++) {
          var f = c[o];
          a[Wu(f.name)] = f.name.toLowerCase() === "style" ? Gc(t) : f.value;
        }
        return { type: e, props: a };
      }
      return t.nodeType === 8 ? t.data === Rr ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : t.nodeValue;
    }
    function pv(t, e, a) {
      return a === null || a[xT] !== !0 ? (t.nodeValue === e ? t = null : (e = Mn(e), t = Mn(t.nodeValue) === e ? null : t.nodeValue), t) : null;
    }
    function lf(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === I0 || a === Ag) {
            if (e === 0)
              return _a(t.nextSibling);
            e--;
          } else
            a !== k0 && a !== tm && a !== Gf && a !== Ur && a !== Rr || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Gi(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var a = t.data;
          if (a === k0 || a === tm || a === Gf || a === Ur || a === Rr) {
            if (e === 0) return t;
            e--;
          } else
            a !== I0 && a !== Ag || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function jy(t) {
      Qi(t);
    }
    function nh(t) {
      Qi(t);
    }
    function Xy(t) {
      Qi(t);
    }
    function ku(t, e, a, c, o) {
      switch (o && Ff(t, c.ancestorInfo), e = ws(a), t) {
        case "html":
          if (t = e.documentElement, !t)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "head":
          if (t = e.head, !t)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        case "body":
          if (t = e.body, !t)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return t;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function du(t, e, a, c) {
      if (!a[tc] && un(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (t) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      me(a, t, e), a[ye] = c, a[Fl] = e;
    }
    function Iu(t) {
      for (var e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      om(t);
    }
    function uh(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Qy(t, e, a) {
      var c = lm;
      if (c && typeof e == "string" && e) {
        var o = kt(e);
        o = 'link[rel="' + t + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), a2.has(o) || (a2.add(o), t = { rel: t, crossOrigin: a, href: e }, c.querySelector(o) === null && (e = c.createElement("link"), me(e, "link", t), Ue(e), c.head.appendChild(e)));
      }
    }
    function Vy(t, e, a, c) {
      var o = (o = Ha.current) ? uh(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = ji(a.href), e = Xa(o).hoistableStyles, c = e.get(a), c || (c = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            t = ji(a.href);
            var f = Xa(o).hoistableStyles, d = f.get(t);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: _r, preload: null }
            }, f.set(t, d), (f = o.querySelector(
              Fs(t)
            )) && !f._p && (d.instance = f, d.state.loading = tp | Mu), !Ru.has(t))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Ru.set(t, h), f || vv(
                o,
                t,
                h,
                d.state
              );
            }
            if (e && c === null)
              throw a = `

  - ` + Ws(e) + `
  + ` + Ws(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (e && c !== null)
            throw a = `

  - ` + Ws(e) + `
  + ` + Ws(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Xi(a), e = Xa(o).hoistableScripts, c = e.get(a), c || (c = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + t + '". this is a bug in React.'
          );
      }
    }
    function Ws(t) {
      var e = 0, a = "<link";
      return typeof t.rel == "string" ? (e++, a += ' rel="' + t.rel + '"') : Ba.call(t, "rel") && (e++, a += ' rel="' + (t.rel === null ? "null" : "invalid type " + typeof t.rel) + '"'), typeof t.href == "string" ? (e++, a += ' href="' + t.href + '"') : Ba.call(t, "href") && (e++, a += ' href="' + (t.href === null ? "null" : "invalid type " + typeof t.href) + '"'), typeof t.precedence == "string" ? (e++, a += ' precedence="' + t.precedence + '"') : Ba.call(t, "precedence") && (e++, a += " precedence={" + (t.precedence === null ? "null" : "invalid type " + typeof t.precedence) + "}"), Object.getOwnPropertyNames(t).length > e && (a += " ..."), a + " />";
    }
    function ji(t) {
      return 'href="' + kt(t) + '"';
    }
    function Fs(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function ch(t) {
      return gt({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function vv(t, e, a, c) {
      t.querySelector(
        'link[rel="preload"][as="style"][' + e + "]"
      ) ? c.loading = tp : (e = t.createElement("link"), c.preload = e, e.addEventListener("load", function() {
        return c.loading |= tp;
      }), e.addEventListener("error", function() {
        return c.loading |= e2;
      }), me(e, "link", a), Ue(e), t.head.appendChild(e));
    }
    function Xi(t) {
      return '[src="' + kt(t) + '"]';
    }
    function ks(t) {
      return "script[async]" + t;
    }
    function ih(t, e, a) {
      if (e.count++, e.instance === null)
        switch (e.type) {
          case "style":
            var c = t.querySelector(
              'style[data-href~="' + kt(a.href) + '"]'
            );
            if (c)
              return e.instance = c, Ue(c), c;
            var o = gt({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return c = (t.ownerDocument || t).createElement("style"), Ue(c), me(c, "style", o), af(c, a.precedence, t), e.instance = c;
          case "stylesheet":
            o = ji(a.href);
            var f = t.querySelector(
              Fs(o)
            );
            if (f)
              return e.state.loading |= Mu, e.instance = f, Ue(f), f;
            c = ch(a), (o = Ru.get(o)) && Zy(c, o), f = (t.ownerDocument || t).createElement("link"), Ue(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), me(f, "link", c), e.state.loading |= Mu, af(f, a.precedence, t), e.instance = f;
          case "script":
            return f = Xi(a.src), (o = t.querySelector(
              ks(f)
            )) ? (e.instance = o, Ue(o), o) : (c = a, (o = Ru.get(f)) && (c = gt({}, a), Ly(c, o)), t = t.ownerDocument || t, o = t.createElement("script"), Ue(o), me(o, "link", c), t.head.appendChild(o), e.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + e.type + '". this is a bug in React.'
            );
        }
      else
        e.type === "stylesheet" && (e.state.loading & Mu) === _r && (c = e.instance, e.state.loading |= Mu, af(c, a.precedence, t));
      return e.instance;
    }
    function af(t, e, a) {
      for (var c = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = c.length ? c[c.length - 1] : null, f = o, d = 0; d < c.length; d++) {
        var h = c[d];
        if (h.dataset.precedence === e) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(t, f.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
    }
    function Zy(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function Ly(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    function nf(t, e, a) {
      if (Dg === null) {
        var c = /* @__PURE__ */ new Map(), o = Dg = /* @__PURE__ */ new Map();
        o.set(a, c);
      } else
        o = Dg, c = o.get(a), c || (c = /* @__PURE__ */ new Map(), o.set(a, c));
      if (c.has(t)) return c;
      for (c.set(t, null), a = a.getElementsByTagName(t), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[vf] || f[ye] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== pt) {
          var d = f.getAttribute(e) || "";
          d = t + d;
          var h = c.get(d);
          h ? h.push(f) : c.set(d, [f]);
        }
      }
      return c;
    }
    function gv(t, e, a) {
      t = t.ownerDocument || t, t.head.insertBefore(
        a,
        e === "title" ? t.querySelector("head > title") : null
      );
    }
    function Sv(t, e, a) {
      var c = !a.ancestorInfo.containerTagInScope;
      if (a.context === em || e.itemProp != null)
        return !c || e.itemProp == null || t !== "meta" && t !== "title" && t !== "style" && t !== "link" && t !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          t,
          t
        ), !1;
      switch (t) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") {
            c && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) {
            if (e.rel === "stylesheet" && typeof e.precedence == "string") {
              t = e.href;
              var o = e.onError, f = e.disabled;
              a = [], e.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = kp(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                t,
                f,
                o
              );
            }
            c && (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (e.onError || e.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (e.rel) {
            case "stylesheet":
              return t = e.precedence, e = e.disabled, typeof t != "string" && c && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof t == "string" && e == null;
            default:
              return !0;
          }
        case "script":
          if (t = e.async && typeof e.async != "function" && typeof e.async != "symbol", !t || e.onLoad || e.onError || !e.src || typeof e.src != "string") {
            c && (t ? e.onLoad || e.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          c && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            t
          );
      }
      return !1;
    }
    function Dt(t) {
      return !(t.type === "stylesheet" && (t.state.loading & l2) === _r);
    }
    function Jy(t, e, a, c) {
      if (a.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (a.state.loading & Mu) === _r) {
        if (a.instance === null) {
          var o = ji(c.href), f = e.querySelector(
            Fs(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = uf.bind(t), e.then(t, t)), a.state.loading |= Mu, a.instance = f, Ue(f);
            return;
          }
          f = e.ownerDocument || e, c = ch(c), (o = Ru.get(o)) && Zy(c, o), f = f.createElement("link"), Ue(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), me(f, "link", c), a.instance = f;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & l2) === _r && (t.count++, a = uf.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
      }
    }
    function oh(t, e) {
      return t.stylesheets && t.count === 0 && Is(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
        var c = setTimeout(function() {
          if (t.stylesheets && Is(t, t.stylesheets), t.unsuspend) {
            var f = t.unsuspend;
            t.unsuspend = null, f();
          }
        }, LT + e);
        0 < t.imgBytes && aS === 0 && (aS = 125 * Ip() * wT);
        var o = setTimeout(
          function() {
            if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Is(t, t.stylesheets), t.unsuspend)) {
              var f = t.unsuspend;
              t.unsuspend = null, f();
            }
          },
          (t.imgBytes > aS ? 50 : JT) + e
        );
        return t.unsuspend = a, function() {
          t.unsuspend = null, clearTimeout(c), clearTimeout(o);
        };
      } : null;
    }
    function uf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Is(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    function Is(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Og = /* @__PURE__ */ new Map(), e.forEach(wy, t), Og = null, uf.call(t));
    }
    function wy(t, e) {
      if (!(e.state.loading & Mu)) {
        var a = Og.get(t);
        if (a) var c = a.get(nS);
        else {
          a = /* @__PURE__ */ new Map(), Og.set(t, a);
          for (var o = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), c = d);
          }
          c && a.set(nS, c);
        }
        o = e.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || c, f === c && a.set(nS, o), a.set(d, o), this.count++, c = uf.bind(this), o.addEventListener("load", c), o.addEventListener("error", c), f ? f.parentNode.insertBefore(o, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= Mu;
      }
    }
    function Ps(t, e, a, c, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Cr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yr(0), this.hiddenUpdates = Yr(null), this.identifierPrefix = c, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), t = this.pendingUpdatersLaneMap = [], e = 0; 31 > e; e++) t.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function tr(t, e, a, c, o, f, d, h, y, p, A, D) {
      return t = new Ps(
        t,
        e,
        a,
        d,
        y,
        p,
        A,
        D,
        h
      ), e = pT, f === !0 && (e |= ma | ec), e |= St, f = Gt(3, null, null, e), t.current = f, f.stateNode = t, e = id(), yi(e), t.pooledCache = e, yi(e), f.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: e
      }, Ot(f), t;
    }
    function bv(t) {
      return t ? (t = Af, t) : Af;
    }
    function fh(t, e, a, c, o, f) {
      if (Ke && typeof Ke.onScheduleFiberRoot == "function")
        try {
          Ke.onScheduleFiberRoot(Ji, c, a);
        } catch (d) {
          mu || (mu = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = bv(o), c.context === null ? c.context = o : c.pendingContext = o, hu && ha !== null && !i2 && (i2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        I(ha) || "Unknown"
      )), c = Le(e), c.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), c.callback = f), a = Wn(t, c, e), a !== null && (wn(e, "root.render()", null), ot(a, t, e), $a(a, t, e));
    }
    function Tv(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var a = t.retryLane;
        t.retryLane = a !== 0 && a < e ? a : e;
      }
    }
    function Ky(t, e) {
      Tv(t, e), (t = t.alternate) && Tv(t, e);
    }
    function $y(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Dl(t, 67108864);
        e !== null && ot(e, t, 67108864), Ky(t, 67108864);
      }
    }
    function Wy(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Ml(t);
        e = Pc(e);
        var a = Dl(t, e);
        a !== null && ot(a, t, e), Ky(t, e);
      }
    }
    function te() {
      return ha;
    }
    function Fy(t, e, a, c) {
      var o = B.T;
      B.T = null;
      var f = Zt.p;
      try {
        Zt.p = $e, ky(t, e, a, c);
      } finally {
        Zt.p = f, B.T = o;
      }
    }
    function Sl(t, e, a, c) {
      var o = B.T;
      B.T = null;
      var f = Zt.p;
      try {
        Zt.p = Tl, ky(t, e, a, c);
      } finally {
        Zt.p = f, B.T = o;
      }
    }
    function ky(t, e, a, c) {
      if (Rg) {
        var o = sh(c);
        if (o === null)
          Dn(
            t,
            e,
            c,
            Ug,
            a
          ), dh(t, c);
        else if (Ev(
          o,
          t,
          e,
          a,
          c
        ))
          c.stopPropagation();
        else if (dh(t, c), e & 4 && -1 < $T.indexOf(t)) {
          for (; o !== null; ) {
            var f = un(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ic(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - bl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      fa(f), (xt & (Al | Nn)) === Hl && (rg = cl() + Nb, ou(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Dl(f, 2), h !== null && ot(h, f, 2), Ca(), Ky(f, 2);
              }
            if (f = sh(c), f === null && Dn(
              t,
              e,
              c,
              Ug,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && c.stopPropagation();
        } else
          Dn(
            t,
            e,
            c,
            null,
            a
          );
      }
    }
    function sh(t) {
      return t = fn(t), Iy(t);
    }
    function Iy(t) {
      if (Ug = null, t = _u(t), t !== null) {
        var e = ae(t);
        if (e === null) t = null;
        else {
          var a = e.tag;
          if (a === 13) {
            if (t = xn(e), t !== null) return t;
            t = null;
          } else if (a === 31) {
            if (t = Ve(e), t !== null) return t;
            t = null;
          } else if (a === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
              return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return Ug = t, null;
    }
    function rh(t) {
      switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return $e;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Tl;
        case "message":
          switch (cr()) {
            case o0:
              return $e;
            case Th:
              return Tl;
            case Li:
            case Rv:
              return Ul;
            case Eh:
              return Lc;
            default:
              return Ul;
          }
        default:
          return Ul;
      }
    }
    function dh(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          jf = null;
          break;
        case "dragenter":
        case "dragleave":
          Xf = null;
          break;
        case "mouseover":
        case "mouseout":
          Qf = null;
          break;
        case "pointerover":
        case "pointerout":
          lp.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ap.delete(e.pointerId);
      }
    }
    function Xc(t, e, a, c, o, f) {
      return t === null || t.nativeEvent !== f ? (t = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: f,
        targetContainers: [o]
      }, e !== null && (e = un(e), e !== null && $y(e)), t) : (t.eventSystemFlags |= c, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
    }
    function Ev(t, e, a, c, o) {
      switch (e) {
        case "focusin":
          return jf = Xc(
            jf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "dragenter":
          return Xf = Xc(
            Xf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "mouseover":
          return Qf = Xc(
            Qf,
            t,
            e,
            a,
            c,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return lp.set(
            f,
            Xc(
              lp.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, ap.set(
            f,
            Xc(
              ap.get(f) || null,
              t,
              e,
              a,
              c,
              o
            )
          ), !0;
      }
      return !1;
    }
    function Py(t) {
      var e = _u(t.target);
      if (e !== null) {
        var a = ae(e);
        if (a !== null) {
          if (e = a.tag, e === 13) {
            if (e = xn(a), e !== null) {
              t.blockedOn = e, fp(t.priority, function() {
                Wy(a);
              });
              return;
            }
          } else if (e === 31) {
            if (e = Ve(a), e !== null) {
              t.blockedOn = e, fp(t.priority, function() {
                Wy(a);
              });
              return;
            }
          } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function cf(t) {
      if (t.blockedOn !== null) return !1;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var a = sh(t.nativeEvent);
        if (a === null) {
          a = t.nativeEvent;
          var c = new a.constructor(
            a.type,
            a
          ), o = c;
          h0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), h0 = o, a.target.dispatchEvent(c), h0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), h0 = null;
        } else
          return e = un(a), e !== null && $y(e), t.blockedOn = a, !1;
        e.shift();
      }
      return !0;
    }
    function hh(t, e, a) {
      cf(t) && a.delete(e);
    }
    function Jg() {
      uS = !1, jf !== null && cf(jf) && (jf = null), Xf !== null && cf(Xf) && (Xf = null), Qf !== null && cf(Qf) && (Qf = null), lp.forEach(hh), ap.forEach(hh);
    }
    function er(t, e) {
      t.blockedOn === e && (t.blockedOn = null, uS || (uS = !0, qe.unstable_scheduleCallback(
        qe.unstable_NormalPriority,
        Jg
      )));
    }
    function Av(t) {
      Cg !== t && (Cg = t, qe.unstable_scheduleCallback(
        qe.unstable_NormalPriority,
        function() {
          Cg === t && (Cg = null);
          for (var e = 0; e < t.length; e += 3) {
            var a = t[e], c = t[e + 1], o = t[e + 2];
            if (typeof c != "function") {
              if (Iy(c || a) === null)
                continue;
              break;
            }
            var f = un(a);
            f !== null && (t.splice(e, 3), e -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: c
            }, Object.freeze(a), Lu(
              f,
              a,
              c,
              o
            ));
          }
        }
      ));
    }
    function Qi(t) {
      function e(y) {
        return er(y, t);
      }
      jf !== null && er(jf, t), Xf !== null && er(Xf, t), Qf !== null && er(Qf, t), lp.forEach(e), ap.forEach(e);
      for (var a = 0; a < Vf.length; a++) {
        var c = Vf[a];
        c.blockedOn === t && (c.blockedOn = null);
      }
      for (; 0 < Vf.length && (a = Vf[0], a.blockedOn === null); )
        Py(a), a.blockedOn === null && Vf.shift();
      if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
        for (c = 0; c < a.length; c += 3) {
          var o = a[c], f = a[c + 1], d = o[Fl] || null;
          if (typeof f == "function")
            d || Av(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Fl] || null)
                h = d.formAction;
              else if (Iy(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[c + 1] = h : (a.splice(c, 3), c -= 3), Av(a);
          }
        }
    }
    function zv() {
      function t(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function e() {
        o !== null && (o(), o = null), c || setTimeout(a, 20);
      }
      function a() {
        if (!c && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var c = !1, o = null;
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
          c = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener(
            "navigatesuccess",
            e
          ), navigation.removeEventListener(
            "navigateerror",
            e
          ), o !== null && (o(), o = null);
        };
      }
    }
    function t0(t) {
      this._internalRoot = t;
    }
    function Rn(t) {
      this._internalRoot = t;
    }
    function e0(t) {
      t[tc] && (t._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var qe = M2(), lr = D2, wg = O2, gt = Object.assign, Dv = Symbol.for("react.element"), Ia = Symbol.for("react.transitional.element"), Qc = Symbol.for("react.portal"), of = Symbol.for("react.fragment"), Wl = Symbol.for("react.strict_mode"), ar = Symbol.for("react.profiler"), mh = Symbol.for("react.consumer"), Un = Symbol.for("react.context"), ff = Symbol.for("react.forward_ref"), Vi = Symbol.for("react.suspense"), da = Symbol.for("react.suspense_list"), nr = Symbol.for("react.memo"), Rl = Symbol.for("react.lazy"), Cn = Symbol.for("react.activity"), Kg = Symbol.for("react.memo_cache_sentinel"), Ov = Symbol.iterator, sf = Symbol.for("react.client.reference"), Xe = Array.isArray, B = lr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Zt = wg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $g = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), l0 = [], a0 = [], Pu = -1, Vc = Ze(null), rf = Ze(null), Ha = Ze(null), Zc = Ze(null), df = 0, Mv, Zi, hf, n0, ur, yh, ph;
    dt.__reactDisabledLog = !0;
    var mf, u0, vh = !1, c0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), ha = null, hu = !1, Ba = Object.prototype.hasOwnProperty, i0 = qe.unstable_scheduleCallback, gh = qe.unstable_cancelCallback, Sh = qe.unstable_shouldYield, bh = qe.unstable_requestPaint, cl = qe.unstable_now, cr = qe.unstable_getCurrentPriorityLevel, o0 = qe.unstable_ImmediatePriority, Th = qe.unstable_UserBlockingPriority, Li = qe.unstable_NormalPriority, Rv = qe.unstable_LowPriority, Eh = qe.unstable_IdlePriority, f0 = qe.log, Uv = qe.unstable_setDisableYieldValue, Ji = null, Ke = null, mu = !1, yu = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", bl = Math.clz32 ? Math.clz32 : cm, s0 = Math.log, Ah = Math.LN2, yf = 256, ir = 262144, pf = 4194304, $e = 2, Tl = 8, Ul = 32, Lc = 268435456, Pa = Math.random().toString(36).slice(2), ye = "__reactFiber$" + Pa, Fl = "__reactProps$" + Pa, tc = "__reactContainer$" + Pa, wi = "__reactEvents$" + Pa, Wg = "__reactListeners$" + Pa, Cv = "__reactHandles$" + Pa, or = "__reactResources$" + Pa, vf = "__reactMarker$" + Pa, _v = /* @__PURE__ */ new Set(), pu = {}, gf = {}, Hv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Sf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), r0 = {}, zh = {}, Dh = /[\n"\\]/g, d0 = !1, Bv = !1, fr = !1, l = !1, n = !1, u = !1, i = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), v = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), T = v.concat(["button"]), U = "dd dt li option optgroup p rp rt".split(" "), Y = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, j = {}, C = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, q = /([A-Z])/g, W = /^ms-/, lt = /^(?:webkit|moz|o)[A-Z]/, ee = /^-ms-/, M = /-(.)/g, z = /;\s*$/, R = {}, G = {}, P = !1, Yt = !1, F = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), ht = "http://www.w3.org/1998/Math/MathML", pt = "http://www.w3.org/2000/svg", Xt = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), _n = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, qv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Oh = {}, R2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), U2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), fS = !1, qa = {}, sS = /^on./, C2 = /^on[^A-Z]/, _2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), H2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), B2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, h0 = null, Mh = null, Rh = null, Fg = !1, Jc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kg = !1;
    if (Jc)
      try {
        var m0 = {};
        Object.defineProperty(m0, "passive", {
          get: function() {
            kg = !0;
          }
        }), window.addEventListener("test", m0, m0), window.removeEventListener("test", m0, m0);
      } catch {
        kg = !1;
      }
    var bf = null, Ig = null, Nv = null, sr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Yv = Pe(sr), y0 = gt({}, sr, { view: 0, detail: 0 }), q2 = Pe(y0), Pg, t1, p0, xv = gt({}, y0, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ts,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== p0 && (p0 && t.type === "mousemove" ? (Pg = t.screenX - p0.screenX, t1 = t.screenY - p0.screenY) : t1 = Pg = 0, p0 = t), Pg);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : t1;
      }
    }), rS = Pe(xv), N2 = gt({}, xv, { dataTransfer: 0 }), Y2 = Pe(N2), x2 = gt({}, y0, { relatedTarget: 0 }), e1 = Pe(x2), G2 = gt({}, sr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), j2 = Pe(G2), X2 = gt({}, sr, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), Q2 = Pe(X2), V2 = gt({}, sr, { data: 0 }), dS = Pe(
      V2
    ), Z2 = dS, L2 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, J2 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, w2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, K2 = gt({}, y0, {
      key: function(t) {
        if (t.key) {
          var e = L2[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = Pf(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? J2[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ts,
      charCode: function(t) {
        return t.type === "keypress" ? Pf(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? Pf(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), $2 = Pe(K2), W2 = gt({}, xv, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), hS = Pe(W2), F2 = gt({}, y0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ts
    }), k2 = Pe(F2), I2 = gt({}, sr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), P2 = Pe(I2), tT = gt({}, xv, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), eT = Pe(tT), lT = gt({}, sr, {
      newState: 0,
      oldState: 0
    }), aT = Pe(lT), nT = [9, 13, 27, 32], mS = 229, l1 = Jc && "CompositionEvent" in window, v0 = null;
    Jc && "documentMode" in document && (v0 = document.documentMode);
    var uT = Jc && "TextEvent" in window && !v0, yS = Jc && (!l1 || v0 && 8 < v0 && 11 >= v0), pS = 32, vS = String.fromCharCode(pS), gS = !1, Uh = !1, cT = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, g0 = null, S0 = null, SS = !1;
    Jc && (SS = Fr("input") && (!document.documentMode || 9 < document.documentMode));
    var Na = typeof Object.is == "function" ? Object.is : kr, iT = Jc && "documentMode" in document && 11 >= document.documentMode, Ch = null, a1 = null, b0 = null, n1 = !1, _h = {
      animationend: ii("Animation", "AnimationEnd"),
      animationiteration: ii("Animation", "AnimationIteration"),
      animationstart: ii("Animation", "AnimationStart"),
      transitionrun: ii("Transition", "TransitionRun"),
      transitionstart: ii("Transition", "TransitionStart"),
      transitioncancel: ii("Transition", "TransitionCancel"),
      transitionend: ii("Transition", "TransitionEnd")
    }, u1 = {}, bS = {};
    Jc && (bS = document.createElement("div").style, "AnimationEvent" in window || (delete _h.animationend.animation, delete _h.animationiteration.animation, delete _h.animationstart.animation), "TransitionEvent" in window || delete _h.transitionend.transition);
    var TS = oi("animationend"), ES = oi("animationiteration"), AS = oi("animationstart"), oT = oi("transitionrun"), fT = oi("transitionstart"), sT = oi("transitioncancel"), zS = oi("transitionend"), DS = /* @__PURE__ */ new Map(), c1 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    c1.push("scrollEnd");
    var OS = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var rT = performance, MS = function() {
        return rT.now();
      };
    else {
      var dT = Date;
      MS = function() {
        return dT.now();
      };
    }
    var i1 = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, hT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Gv = 0, o1 = 1, f1 = 2, s1 = 3, jv = "– ", Xv = "+ ", RS = "  ", pe = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", vu = "Components ⚛", _t = "Scheduler ⚛", qt = "Blocking", Tf = !1, Ki = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: vu
    }, Ef = {
      start: -0,
      end: -0,
      detail: { devtools: Ki }
    }, mT = ["Changed Props", ""], US = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", yT = ["Changed Props", US], T0 = 1, $i = 2, gu = [], Hh = 0, r1 = 0, Af = {};
    Object.freeze(Af);
    var Su = null, Bh = null, ct = 0, pT = 1, St = 2, ma = 8, ec = 16, vT = 32, CS = !1;
    try {
      var _S = Object.preventExtensions({});
    } catch {
      CS = !0;
    }
    var d1 = /* @__PURE__ */ new WeakMap(), qh = [], Nh = 0, Qv = null, E0 = 0, bu = [], Tu = 0, rr = null, Wi = 1, Fi = "", kl = null, ve = null, Ct = !1, wc = !1, Hn = null, zf = null, Eu = !1, h1 = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), m1 = Ze(null), y1 = Ze(null), HS = {}, Vv = null, Yh = null, xh = !1, gT = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: !1,
        addEventListener: function(a, c) {
          t.push(c);
        }
      };
      this.abort = function() {
        e.aborted = !0, t.forEach(function(a) {
          return a();
        });
      };
    }, ST = qe.unstable_scheduleCallback, bT = qe.unstable_NormalPriority, il = {
      $$typeof: Un,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, ol = qe.unstable_now, Zv = console.createTask ? console.createTask : function() {
      return null;
    }, A0 = 1, Lv = 2, Cl = -0, Df = -0, ki = -0, Ii = null, Ya = -1.1, dr = -0, Oe = -0, et = -1.1, nt = -1.1, Ee = null, Ne = !1, hr = -0, Kc = -1.1, z0 = null, Of = 0, p1 = null, v1 = null, mr = -1.1, D0 = null, Gh = -1.1, Jv = -1.1, Pi = -0, to = -1.1, Au = -1.1, g1 = 0, O0 = null, BS = null, qS = null, Mf = -1.1, yr = null, Rf = -1.1, wv = -1.1, NS = -0, YS = -0, Kv = 0, TT = null, xS = 0, M0 = -1.1, $v = !1, Wv = !1, R0 = null, S1 = 0, pr = 0, jh = null, GS = B.S;
    B.S = function(t, e) {
      if (Bb = cl(), typeof e == "object" && e !== null && typeof e.then == "function") {
        if (0 > to && 0 > Au) {
          to = ol();
          var a = tf(), c = ru();
          (a !== Rf || c !== yr) && (Rf = -1.1), Mf = a, yr = c;
        }
        xu(t, e);
      }
      GS !== null && GS(t, e);
    };
    var vr = Ze(null), lc = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, U0 = [], C0 = [], _0 = [], H0 = [], B0 = [], q0 = [], gr = /* @__PURE__ */ new Set();
    lc.recordUnsafeLifecycleWarnings = function(t, e) {
      gr.has(t.type) || (typeof e.componentWillMount == "function" && e.componentWillMount.__suppressDeprecationWarning !== !0 && U0.push(t), t.mode & ma && typeof e.UNSAFE_componentWillMount == "function" && C0.push(t), typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && _0.push(t), t.mode & ma && typeof e.UNSAFE_componentWillReceiveProps == "function" && H0.push(t), typeof e.componentWillUpdate == "function" && e.componentWillUpdate.__suppressDeprecationWarning !== !0 && B0.push(t), t.mode & ma && typeof e.UNSAFE_componentWillUpdate == "function" && q0.push(t));
    }, lc.flushPendingUnsafeLifecycleWarnings = function() {
      var t = /* @__PURE__ */ new Set();
      0 < U0.length && (U0.forEach(function(h) {
        t.add(
          I(h) || "Component"
        ), gr.add(h.type);
      }), U0 = []);
      var e = /* @__PURE__ */ new Set();
      0 < C0.length && (C0.forEach(function(h) {
        e.add(
          I(h) || "Component"
        ), gr.add(h.type);
      }), C0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < _0.length && (_0.forEach(function(h) {
        a.add(
          I(h) || "Component"
        ), gr.add(h.type);
      }), _0 = []);
      var c = /* @__PURE__ */ new Set();
      0 < H0.length && (H0.forEach(
        function(h) {
          c.add(
            I(h) || "Component"
          ), gr.add(h.type);
        }
      ), H0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < B0.length && (B0.forEach(function(h) {
        o.add(
          I(h) || "Component"
        ), gr.add(h.type);
      }), B0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < q0.length && (q0.forEach(function(h) {
        f.add(
          I(h) || "Component"
        ), gr.add(h.type);
      }), q0 = []), 0 < e.size) {
        var d = it(
          e
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < c.size && (d = it(
        c
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = it(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < t.size && (d = it(t), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = it(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = it(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Fv = /* @__PURE__ */ new Map(), jS = /* @__PURE__ */ new Set();
    lc.recordLegacyContextWarning = function(t, e) {
      for (var a = null, c = t; c !== null; )
        c.mode & ma && (a = c), c = c.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !jS.has(t.type) && (c = Fv.get(a), t.type.contextTypes != null || t.type.childContextTypes != null || e !== null && typeof e.getChildContext == "function") && (c === void 0 && (c = [], Fv.set(a, c)), c.push(t));
    }, lc.flushLegacyContextWarning = function() {
      Fv.forEach(function(t) {
        if (t.length !== 0) {
          var e = t[0], a = /* @__PURE__ */ new Set();
          t.forEach(function(o) {
            a.add(I(o) || "Component"), jS.add(o.type);
          });
          var c = it(a);
          $(e, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              c
            );
          });
        }
      });
    }, lc.discardPendingWarnings = function() {
      U0 = [], C0 = [], _0 = [], H0 = [], B0 = [], q0 = [], Fv = /* @__PURE__ */ new Map();
    };
    var XS = {
      react_stack_bottom_frame: function(t, e, a) {
        var c = hu;
        hu = !0;
        try {
          return t(e, a);
        } finally {
          hu = c;
        }
      }
    }, b1 = XS.react_stack_bottom_frame.bind(XS), QS = {
      react_stack_bottom_frame: function(t) {
        var e = hu;
        hu = !0;
        try {
          return t.render();
        } finally {
          hu = e;
        }
      }
    }, VS = QS.react_stack_bottom_frame.bind(QS), ZS = {
      react_stack_bottom_frame: function(t, e) {
        try {
          e.componentDidMount();
        } catch (a) {
          yt(t, t.return, a);
        }
      }
    }, T1 = ZS.react_stack_bottom_frame.bind(
      ZS
    ), LS = {
      react_stack_bottom_frame: function(t, e, a, c, o) {
        try {
          e.componentDidUpdate(a, c, o);
        } catch (f) {
          yt(t, t.return, f);
        }
      }
    }, JS = LS.react_stack_bottom_frame.bind(
      LS
    ), wS = {
      react_stack_bottom_frame: function(t, e) {
        var a = e.stack;
        t.componentDidCatch(e.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, ET = wS.react_stack_bottom_frame.bind(
      wS
    ), KS = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a.componentWillUnmount();
        } catch (c) {
          yt(t, e, c);
        }
      }
    }, $S = KS.react_stack_bottom_frame.bind(
      KS
    ), WS = {
      react_stack_bottom_frame: function(t) {
        var e = t.create;
        return t = t.inst, e = e(), t.destroy = e;
      }
    }, AT = WS.react_stack_bottom_frame.bind(WS), FS = {
      react_stack_bottom_frame: function(t, e, a) {
        try {
          a();
        } catch (c) {
          yt(t, e, c);
        }
      }
    }, zT = FS.react_stack_bottom_frame.bind(FS), kS = {
      react_stack_bottom_frame: function(t) {
        var e = t._init;
        return e(t._payload);
      }
    }, DT = kS.react_stack_bottom_frame.bind(kS), Xh = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), E1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), kv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Iv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Sr = null, N0 = !1, Qh = null, Y0 = 0, bt = null, A1, IS = A1 = !1, PS = {}, tb = {}, eb = {};
    Fc = function(t, e, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var c = I(t), o = c || "null";
        if (!PS[o]) {
          PS[o] = !0, a = a._owner, t = t._debugOwner;
          var f = "";
          t && typeof t.tag == "number" && (o = I(t)) && (f = `

Check the render method of \`` + o + "`."), f || c && (f = `

Check the top-level render call using <` + c + ">.");
          var d = "";
          a != null && t !== a && (c = null, typeof a.tag == "number" ? c = I(a) : typeof a.name == "string" && (c = a.name), c && (d = " It was passed a child from " + c + ".")), $(e, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var br = el(!0), lb = el(!1), ab = 0, nb = 1, ub = 2, z1 = 3, Uf = !1, cb = !1, D1 = null, O1 = !1, Vh = Ze(null), Pv = Ze(0), Bn = Ze(null), zu = null, Zh = 1, x0 = 2, We = Ze(0), tg = 0, Du = 1, xa = 2, qn = 4, Ga = 8, Lh, ib = /* @__PURE__ */ new Set(), ob = /* @__PURE__ */ new Set(), M1 = /* @__PURE__ */ new Set(), fb = /* @__PURE__ */ new Set(), eo = 0, st = null, oe = null, fl = null, eg = !1, Jh = !1, Tr = !1, lg = 0, G0 = 0, lo = null, OT = 0, MT = 25, H = null, Ou = null, ao = -1, j0 = !1, X0 = {
      readContext: Qt,
      use: Qu,
      useCallback: ze,
      useContext: ze,
      useEffect: ze,
      useImperativeHandle: ze,
      useLayoutEffect: ze,
      useInsertionEffect: ze,
      useMemo: ze,
      useReducer: ze,
      useRef: ze,
      useState: ze,
      useDebugValue: ze,
      useDeferredValue: ze,
      useTransition: ze,
      useSyncExternalStore: ze,
      useId: ze,
      useHostTransitionStatus: ze,
      useFormState: ze,
      useActionState: ze,
      useOptimistic: ze,
      useMemoCache: ze,
      useCacheRefresh: ze
    };
    X0.useEffectEvent = ze;
    var R1 = null, sb = null, U1 = null, rb = null, $c = null, ac = null, ag = null;
    R1 = {
      readContext: function(t) {
        return Qt(t);
      },
      use: Qu,
      useCallback: function(t, e) {
        return H = "useCallback", ft(), Xu(e), gd(t, e);
      },
      useContext: function(t) {
        return H = "useContext", ft(), Qt(t);
      },
      useEffect: function(t, e) {
        return H = "useEffect", ft(), Xu(e), Di(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", ft(), Xu(a), Pn(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        H = "useInsertionEffect", ft(), Xu(e), Uc(4, xa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", ft(), Xu(e), Ql(t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", ft(), Xu(e);
        var a = B.H;
        B.H = $c;
        try {
          return Vl(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", ft();
        var c = B.H;
        B.H = $c;
        try {
          return Co(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function(t) {
        return H = "useRef", ft(), vd(t);
      },
      useState: function(t) {
        H = "useState", ft();
        var e = B.H;
        B.H = $c;
        try {
          return Dc(t);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", ft();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", ft(), No(t, e);
      },
      useTransition: function() {
        return H = "useTransition", ft(), Cc();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", ft(), _o(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", ft(), zs();
      },
      useFormState: function(t, e) {
        return H = "useFormState", ft(), hs(), Da(t, e);
      },
      useActionState: function(t, e) {
        return H = "useActionState", ft(), Da(t, e);
      },
      useOptimistic: function(t) {
        return H = "useOptimistic", ft(), zi(t);
      },
      useHostTransitionStatus: Ju,
      useMemoCache: Aa,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", ft(), Sd();
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", ft(), Es(t);
      }
    }, sb = {
      readContext: function(t) {
        return Qt(t);
      },
      use: Qu,
      useCallback: function(t, e) {
        return H = "useCallback", X(), gd(t, e);
      },
      useContext: function(t) {
        return H = "useContext", X(), Qt(t);
      },
      useEffect: function(t, e) {
        return H = "useEffect", X(), Di(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", X(), Pn(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        H = "useInsertionEffect", X(), Uc(4, xa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", X(), Ql(t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", X();
        var a = B.H;
        B.H = $c;
        try {
          return Vl(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", X();
        var c = B.H;
        B.H = $c;
        try {
          return Co(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function(t) {
        return H = "useRef", X(), vd(t);
      },
      useState: function(t) {
        H = "useState", X();
        var e = B.H;
        B.H = $c;
        try {
          return Dc(t);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", X();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", X(), No(t, e);
      },
      useTransition: function() {
        return H = "useTransition", X(), Cc();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", X(), _o(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", X(), zs();
      },
      useActionState: function(t, e) {
        return H = "useActionState", X(), Da(t, e);
      },
      useFormState: function(t, e) {
        return H = "useFormState", X(), hs(), Da(t, e);
      },
      useOptimistic: function(t) {
        return H = "useOptimistic", X(), zi(t);
      },
      useHostTransitionStatus: Ju,
      useMemoCache: Aa,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", X(), Sd();
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", X(), Es(t);
      }
    }, U1 = {
      readContext: function(t) {
        return Qt(t);
      },
      use: Qu,
      useCallback: function(t, e) {
        return H = "useCallback", X(), bn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", X(), Qt(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", X(), Je(2048, Ga, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", X(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", X(), Je(4, xa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", X(), Je(4, qn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", X();
        var a = B.H;
        B.H = ac;
        try {
          return he(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", X();
        var c = B.H;
        B.H = ac;
        try {
          return Ti(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", X(), Jt().memoizedState;
      },
      useState: function() {
        H = "useState", X();
        var t = B.H;
        B.H = ac;
        try {
          return Ti(za);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", X();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", X(), tu(t, e);
      },
      useTransition: function() {
        return H = "useTransition", X(), Hp();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", X(), Ai(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", X(), Jt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", X(), hs(), Mc(t);
      },
      useActionState: function(t) {
        return H = "useActionState", X(), Mc(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", X(), Ss(t, e);
      },
      useHostTransitionStatus: Ju,
      useMemoCache: Aa,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", X(), Jt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", X(), Bo(t);
      }
    }, rb = {
      readContext: function(t) {
        return Qt(t);
      },
      use: Qu,
      useCallback: function(t, e) {
        return H = "useCallback", X(), bn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", X(), Qt(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", X(), Je(2048, Ga, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", X(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", X(), Je(4, xa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", X(), Je(4, qn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", X();
        var a = B.H;
        B.H = ag;
        try {
          return he(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", X();
        var c = B.H;
        B.H = ag;
        try {
          return Ei(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", X(), Jt().memoizedState;
      },
      useState: function() {
        H = "useState", X();
        var t = B.H;
        B.H = ag;
        try {
          return Ei(za);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", X();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", X(), mt(t, e);
      },
      useTransition: function() {
        return H = "useTransition", X(), Se();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", X(), Ai(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", X(), Jt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", X(), hs(), Rc(t);
      },
      useActionState: function(t) {
        return H = "useActionState", X(), Rc(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", X(), bs(t, e);
      },
      useHostTransitionStatus: Ju,
      useMemoCache: Aa,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", X(), Jt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", X(), Bo(t);
      }
    }, $c = {
      readContext: function(t) {
        return yl(), Qt(t);
      },
      use: function(t) {
        return K(), Qu(t);
      },
      useCallback: function(t, e) {
        return H = "useCallback", K(), ft(), gd(t, e);
      },
      useContext: function(t) {
        return H = "useContext", K(), ft(), Qt(t);
      },
      useEffect: function(t, e) {
        return H = "useEffect", K(), ft(), Di(t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", K(), ft(), Pn(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        H = "useInsertionEffect", K(), ft(), Uc(4, xa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", K(), ft(), Ql(t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", K(), ft();
        var a = B.H;
        B.H = $c;
        try {
          return Vl(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", K(), ft();
        var c = B.H;
        B.H = $c;
        try {
          return Co(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function(t) {
        return H = "useRef", K(), ft(), vd(t);
      },
      useState: function(t) {
        H = "useState", K(), ft();
        var e = B.H;
        B.H = $c;
        try {
          return Dc(t);
        } finally {
          B.H = e;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", K(), ft();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", K(), ft(), No(t, e);
      },
      useTransition: function() {
        return H = "useTransition", K(), ft(), Cc();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", K(), ft(), _o(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", K(), ft(), zs();
      },
      useFormState: function(t, e) {
        return H = "useFormState", K(), ft(), Da(t, e);
      },
      useActionState: function(t, e) {
        return H = "useActionState", K(), ft(), Da(t, e);
      },
      useOptimistic: function(t) {
        return H = "useOptimistic", K(), ft(), zi(t);
      },
      useMemoCache: function(t) {
        return K(), Aa(t);
      },
      useHostTransitionStatus: Ju,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", ft(), Sd();
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", K(), ft(), Es(t);
      }
    }, ac = {
      readContext: function(t) {
        return yl(), Qt(t);
      },
      use: function(t) {
        return K(), Qu(t);
      },
      useCallback: function(t, e) {
        return H = "useCallback", K(), X(), bn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", K(), X(), Qt(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", K(), X(), Je(2048, Ga, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", K(), X(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", K(), X(), Je(4, xa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", K(), X(), Je(4, qn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", K(), X();
        var a = B.H;
        B.H = ac;
        try {
          return he(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", K(), X();
        var c = B.H;
        B.H = ac;
        try {
          return Ti(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", K(), X(), Jt().memoizedState;
      },
      useState: function() {
        H = "useState", K(), X();
        var t = B.H;
        B.H = ac;
        try {
          return Ti(za);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", K(), X();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", K(), X(), tu(t, e);
      },
      useTransition: function() {
        return H = "useTransition", K(), X(), Hp();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", K(), X(), Ai(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", K(), X(), Jt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", K(), X(), Mc(t);
      },
      useActionState: function(t) {
        return H = "useActionState", K(), X(), Mc(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", K(), X(), Ss(t, e);
      },
      useMemoCache: function(t) {
        return K(), Aa(t);
      },
      useHostTransitionStatus: Ju,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", X(), Jt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", K(), X(), Bo(t);
      }
    }, ag = {
      readContext: function(t) {
        return yl(), Qt(t);
      },
      use: function(t) {
        return K(), Qu(t);
      },
      useCallback: function(t, e) {
        return H = "useCallback", K(), X(), bn(t, e);
      },
      useContext: function(t) {
        return H = "useContext", K(), X(), Qt(t);
      },
      useEffect: function(t, e) {
        H = "useEffect", K(), X(), Je(2048, Ga, t, e);
      },
      useImperativeHandle: function(t, e, a) {
        return H = "useImperativeHandle", K(), X(), qo(t, e, a);
      },
      useInsertionEffect: function(t, e) {
        return H = "useInsertionEffect", K(), X(), Je(4, xa, t, e);
      },
      useLayoutEffect: function(t, e) {
        return H = "useLayoutEffect", K(), X(), Je(4, qn, t, e);
      },
      useMemo: function(t, e) {
        H = "useMemo", K(), X();
        var a = B.H;
        B.H = ac;
        try {
          return he(t, e);
        } finally {
          B.H = a;
        }
      },
      useReducer: function(t, e, a) {
        H = "useReducer", K(), X();
        var c = B.H;
        B.H = ac;
        try {
          return Ei(t, e, a);
        } finally {
          B.H = c;
        }
      },
      useRef: function() {
        return H = "useRef", K(), X(), Jt().memoizedState;
      },
      useState: function() {
        H = "useState", K(), X();
        var t = B.H;
        B.H = ac;
        try {
          return Ei(za);
        } finally {
          B.H = t;
        }
      },
      useDebugValue: function() {
        H = "useDebugValue", K(), X();
      },
      useDeferredValue: function(t, e) {
        return H = "useDeferredValue", K(), X(), mt(t, e);
      },
      useTransition: function() {
        return H = "useTransition", K(), X(), Se();
      },
      useSyncExternalStore: function(t, e, a) {
        return H = "useSyncExternalStore", K(), X(), Ai(
          t,
          e,
          a
        );
      },
      useId: function() {
        return H = "useId", K(), X(), Jt().memoizedState;
      },
      useFormState: function(t) {
        return H = "useFormState", K(), X(), Rc(t);
      },
      useActionState: function(t) {
        return H = "useActionState", K(), X(), Rc(t);
      },
      useOptimistic: function(t, e) {
        return H = "useOptimistic", K(), X(), bs(t, e);
      },
      useMemoCache: function(t) {
        return K(), Aa(t);
      },
      useHostTransitionStatus: Ju,
      useCacheRefresh: function() {
        return H = "useCacheRefresh", X(), Jt().memoizedState;
      },
      useEffectEvent: function(t) {
        return H = "useEffectEvent", K(), X(), Bo(t);
      }
    };
    var db = {}, hb = /* @__PURE__ */ new Set(), mb = /* @__PURE__ */ new Set(), yb = /* @__PURE__ */ new Set(), pb = /* @__PURE__ */ new Set(), vb = /* @__PURE__ */ new Set(), gb = /* @__PURE__ */ new Set(), Sb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), Tb = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set();
    Object.freeze(db);
    var C1 = {
      enqueueSetState: function(t, e, a) {
        t = t._reactInternals;
        var c = Ml(t), o = Le(c);
        o.payload = e, a != null && (Ui(a), o.callback = a), e = Wn(t, o, c), e !== null && (wn(c, "this.setState()", t), ot(e, t, c), $a(e, t, c));
      },
      enqueueReplaceState: function(t, e, a) {
        t = t._reactInternals;
        var c = Ml(t), o = Le(c);
        o.tag = nb, o.payload = e, a != null && (Ui(a), o.callback = a), e = Wn(t, o, c), e !== null && (wn(c, "this.replaceState()", t), ot(e, t, c), $a(e, t, c));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var a = Ml(t), c = Le(a);
        c.tag = ub, e != null && (Ui(e), c.callback = e), e = Wn(t, c, a), e !== null && (wn(a, "this.forceUpdate()", t), ot(e, t, a), $a(e, t, a));
      }
    }, wh = null, _1 = null, H1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), sl = !1, Ab = {}, zb = {}, Db = {}, Ob = {}, Kh = !1, Mb = {}, ng = {}, B1 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Rb = !1, Ub = null;
    Ub = /* @__PURE__ */ new Set();
    var no = !1, rl = !1, q1 = !1, Cb = typeof WeakSet == "function" ? WeakSet : Set, _l = null, $h = null, Wh = null, dl = null, tn = !1, nc = null, El = !1, Q0 = 8192, RT = {
      getCacheForType: function(t) {
        var e = Qt(il), a = e.data.get(t);
        return a === void 0 && (a = t(), e.data.set(t, a)), a;
      },
      cacheSignal: function() {
        return Qt(il).controller.signal;
      },
      getOwner: function() {
        return ha;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var V0 = Symbol.for;
      V0("selector.component"), V0("selector.has_pseudo_class"), V0("selector.role"), V0("selector.test_id"), V0("selector.text");
    }
    var UT = [], CT = typeof WeakMap == "function" ? WeakMap : Map, Hl = 0, Al = 2, Nn = 4, uo = 0, Z0 = 1, Er = 2, ug = 3, Cf = 4, cg = 6, _b = 5, xt = Hl, fe = null, At = null, Tt = 0, en = 0, ig = 1, Ar = 2, L0 = 3, Hb = 4, N1 = 5, J0 = 6, og = 7, Y1 = 8, zr = 9, le = en, Yn = null, _f = !1, Fh = !1, x1 = !1, Wc = 0, Me = uo, Hf = 0, Bf = 0, G1 = 0, ln = 0, Dr = 0, w0 = null, ja = null, fg = !1, sg = 0, Bb = 0, qb = 300, rg = 1 / 0, Nb = 500, K0 = null, Qe = null, qf = null, dg = 0, j1 = 1, X1 = 2, Yb = 3, Nf = 0, xb = 1, Gb = 2, jb = 3, Xb = 4, hg = 5, hl = 0, Yf = null, kh = null, uc = 0, Q1 = 0, V1 = -0, Z1 = null, Qb = null, Vb = null, cc = dg, Zb = null, _T = 50, $0 = 0, L1 = null, J1 = !1, mg = !1, HT = 50, Or = 0, W0 = null, Ih = !1, yg = null, Lb = !1, Jb = /* @__PURE__ */ new Set(), BT = {}, pg = null, Ph = null, w1 = !1, K1 = !1, vg = !1, $1 = !1, xf = 0, W1 = {};
    (function() {
      for (var t = 0; t < c1.length; t++) {
        var e = c1[t], a = e.toLowerCase();
        e = e[0].toUpperCase() + e.slice(1), sn(a, "on" + e);
      }
      sn(TS, "onAnimationEnd"), sn(ES, "onAnimationIteration"), sn(AS, "onAnimationStart"), sn("dblclick", "onDoubleClick"), sn("focusin", "onFocus"), sn("focusout", "onBlur"), sn(oT, "onTransitionRun"), sn(fT, "onTransitionStart"), sn(sT, "onTransitionCancel"), sn(zS, "onTransitionEnd");
    })(), fo("onMouseEnter", ["mouseout", "mouseover"]), fo("onMouseLeave", ["mouseout", "mouseover"]), fo("onPointerEnter", ["pointerout", "pointerover"]), fo("onPointerLeave", ["pointerout", "pointerover"]), cn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), cn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), cn("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), cn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), cn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), cn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var F0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), F1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(F0)
    ), gg = "_reactListening" + Math.random().toString(36).slice(2), wb = !1, Kb = !1, Sg = !1, $b = !1, bg = !1, Tg = !1, Wb = !1, Eg = {}, qT = /\r\n?/g, NT = /\u0000|\uFFFD/g, Mr = "http://www.w3.org/1999/xlink", k1 = "http://www.w3.org/XML/1998/namespace", YT = "javascript:throw new Error('React form unexpectedly submitted.')", xT = "suppressHydrationWarning", Rr = "&", Ag = "/&", k0 = "$", I0 = "/$", Gf = "$?", Ur = "$~", tm = "$!", GT = "html", jT = "body", XT = "head", I1 = "F!", Fb = "F", kb = "loading", QT = "style", co = 0, em = 1, zg = 2, P1 = null, tS = null, Ib = { dialog: !0, webview: !0 }, eS = null, P0 = void 0, Pb = typeof setTimeout == "function" ? setTimeout : void 0, VT = typeof clearTimeout == "function" ? clearTimeout : void 0, Cr = -1, t2 = typeof Promise == "function" ? Promise : void 0, ZT = typeof queueMicrotask == "function" ? queueMicrotask : typeof t2 < "u" ? function(t) {
      return t2.resolve(null).then(t).catch(tv);
    } : Pb, lS = null, _r = 0, tp = 1, e2 = 2, l2 = 3, Mu = 4, Ru = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Set(), io = Zt.d;
    Zt.d = {
      f: function() {
        var t = io.f(), e = Ca();
        return t || e;
      },
      r: function(t) {
        var e = un(t);
        e !== null && e.tag === 5 && e.type === "form" ? Yo(e) : io.r(t);
      },
      D: function(t) {
        io.D(t), Qy("dns-prefetch", t, null);
      },
      C: function(t, e) {
        io.C(t, e), Qy("preconnect", t, e);
      },
      L: function(t, e, a) {
        io.L(t, e, a);
        var c = lm;
        if (c && t && e) {
          var o = 'link[rel="preload"][as="' + kt(e) + '"]';
          e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + kt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + kt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + kt(t) + '"]';
          var f = o;
          switch (e) {
            case "style":
              f = ji(t);
              break;
            case "script":
              f = Xi(t);
          }
          Ru.has(f) || (t = gt(
            {
              rel: "preload",
              href: e === "image" && a && a.imageSrcSet ? void 0 : t,
              as: e
            },
            a
          ), Ru.set(f, t), c.querySelector(o) !== null || e === "style" && c.querySelector(
            Fs(f)
          ) || e === "script" && c.querySelector(ks(f)) || (e = c.createElement("link"), me(e, "link", t), Ue(e), c.head.appendChild(e)));
        }
      },
      m: function(t, e) {
        io.m(t, e);
        var a = lm;
        if (a && t) {
          var c = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + kt(c) + '"][href="' + kt(t) + '"]', f = o;
          switch (c) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Xi(t);
          }
          if (!Ru.has(f) && (t = gt({ rel: "modulepreload", href: t }, e), Ru.set(f, t), a.querySelector(o) === null)) {
            switch (c) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(ks(f)))
                  return;
            }
            c = a.createElement("link"), me(c, "link", t), Ue(c), a.head.appendChild(c);
          }
        }
      },
      X: function(t, e) {
        io.X(t, e);
        var a = lm;
        if (a && t) {
          var c = Xa(a).hoistableScripts, o = Xi(t), f = c.get(o);
          f || (f = a.querySelector(
            ks(o)
          ), f || (t = gt({ src: t, async: !0 }, e), (e = Ru.get(o)) && Ly(t, e), f = a.createElement("script"), Ue(f), me(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      },
      S: function(t, e, a) {
        io.S(t, e, a);
        var c = lm;
        if (c && t) {
          var o = Xa(c).hoistableStyles, f = ji(t);
          e = e || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: _r, preload: null };
            if (d = c.querySelector(
              Fs(f)
            ))
              h.loading = tp | Mu;
            else {
              t = gt(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": e
                },
                a
              ), (a = Ru.get(f)) && Zy(t, a);
              var y = d = c.createElement("link");
              Ue(y), me(y, "link", t), y._p = new Promise(function(p, A) {
                y.onload = p, y.onerror = A;
              }), y.addEventListener("load", function() {
                h.loading |= tp;
              }), y.addEventListener("error", function() {
                h.loading |= e2;
              }), h.loading |= Mu, af(d, e, c);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(t, e) {
        io.M(t, e);
        var a = lm;
        if (a && t) {
          var c = Xa(a).hoistableScripts, o = Xi(t), f = c.get(o);
          f || (f = a.querySelector(
            ks(o)
          ), f || (t = gt({ src: t, async: !0, type: "module" }, e), (e = Ru.get(o)) && Ly(t, e), f = a.createElement("script"), Ue(f), me(f, "link", t), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      }
    };
    var lm = typeof document > "u" ? null : document, Dg = null, LT = 6e4, JT = 800, wT = 500, aS = 0, nS = null, Og = null, Hr = $g, ep = {
      $$typeof: Un,
      Provider: null,
      Consumer: null,
      _currentValue: Hr,
      _currentValue2: Hr,
      _threadCount: 0
    }, n2 = "%c%s%c", u2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", c2 = "", Mg = " ", KT = Function.prototype.bind, i2 = !1, o2 = null, f2 = null, s2 = null, r2 = null, d2 = null, h2 = null, m2 = null, y2 = null, p2 = null, v2 = null;
    o2 = function(t, e, a, c) {
      e = L(t, e), e !== null && (a = zl(e.memoizedState, a, 0, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = gt({}, t.memoizedProps), a = Dl(t, 2), a !== null && ot(a, t, 2));
    }, f2 = function(t, e, a) {
      e = L(t, e), e !== null && (a = Il(e.memoizedState, a, 0), e.memoizedState = a, e.baseState = a, t.memoizedProps = gt({}, t.memoizedProps), a = Dl(t, 2), a !== null && ot(a, t, 2));
    }, s2 = function(t, e, a, c) {
      e = L(t, e), e !== null && (a = ml(e.memoizedState, a, c), e.memoizedState = a, e.baseState = a, t.memoizedProps = gt({}, t.memoizedProps), a = Dl(t, 2), a !== null && ot(a, t, 2));
    }, r2 = function(t, e, a) {
      t.pendingProps = zl(t.memoizedProps, e, 0, a), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Dl(t, 2), e !== null && ot(e, t, 2);
    }, d2 = function(t, e) {
      t.pendingProps = Il(t.memoizedProps, e, 0), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Dl(t, 2), e !== null && ot(e, t, 2);
    }, h2 = function(t, e, a) {
      t.pendingProps = ml(
        t.memoizedProps,
        e,
        a
      ), t.alternate && (t.alternate.pendingProps = t.pendingProps), e = Dl(t, 2), e !== null && ot(e, t, 2);
    }, m2 = function(t) {
      var e = Dl(t, 2);
      e !== null && ot(e, t, 2);
    }, y2 = function(t) {
      var e = Nr(), a = Dl(t, e);
      a !== null && ot(a, t, e);
    }, p2 = function(t) {
      an = t;
    }, v2 = function(t) {
      ya = t;
    };
    var Rg = !0, Ug = null, uS = !1, jf = null, Xf = null, Qf = null, lp = /* @__PURE__ */ new Map(), ap = /* @__PURE__ */ new Map(), Vf = [], $T = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Cg = null;
    if (Rn.prototype.render = t0.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Re(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = t;
      var c = e.current, o = Ml(c);
      fh(c, o, a, e, null, null);
    }, Rn.prototype.unmount = t0.prototype.unmount = function() {
      var t = arguments;
      if (typeof t[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), t = this._internalRoot, t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        (xt & (Al | Nn)) !== Hl && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), fh(t.current, 2, null, t, null, null), Ca(), e[tc] = null;
      }
    }, Rn.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = op();
        t = { blockedOn: null, target: t, priority: e };
        for (var a = 0; a < Vf.length && e !== 0 && e < Vf[a].priority; a++) ;
        Vf.splice(a, 0, t), a === 0 && Py(t);
      }
    }, (function() {
      var t = lr.version;
      if (t !== "19.2.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (t + `
  - react-dom:  19.2.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Zt.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0)
        throw typeof t.render == "function" ? Error("Unable to find node on an unmounted component.") : (t = Object.keys(t).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + t
        ));
      return t = nn(e), t = t !== null ? ea(t) : null, t = t === null ? null : t.stateNode, t;
    }, !(function() {
      var t = {
        bundleType: 1,
        version: "19.2.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: B,
        reconcilerVersion: "19.2.0"
      };
      return t.overrideHookState = o2, t.overrideHookStateDeletePath = f2, t.overrideHookStateRenamePath = s2, t.overrideProps = r2, t.overridePropsDeletePath = d2, t.overridePropsRenamePath = h2, t.scheduleUpdate = m2, t.scheduleRetry = y2, t.setErrorHandler = p2, t.setSuspenseHandler = v2, t.scheduleRefresh = Ye, t.scheduleRoot = ke, t.setRefreshHandler = ta, t.getCurrentFiber = te, um(t);
    })() && Jc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var g2 = window.location.protocol;
      /^(https?|file):$/.test(g2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (g2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    up.createRoot = function(t, e) {
      if (!Re(t))
        throw Error("Target container is not a DOM element.");
      e0(t);
      var a = !1, c = "", o = Ed, f = Ad, d = Wm;
      return e != null && (e.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof e == "object" && e !== null && e.$$typeof === Ia && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (c = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (f = e.onCaughtError), e.onRecoverableError !== void 0 && (d = e.onRecoverableError)), e = tr(
        t,
        1,
        !1,
        null,
        null,
        a,
        c,
        null,
        o,
        f,
        d,
        zv
      ), t[tc] = e.current, xc(t), new t0(e);
    }, up.hydrateRoot = function(t, e, a) {
      if (!Re(t))
        throw Error("Target container is not a DOM element.");
      e0(t), e === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var c = !1, o = "", f = Ed, d = Ad, h = Wm, y = null;
      return a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), e = tr(
        t,
        1,
        !0,
        e,
        a ?? null,
        c,
        o,
        y,
        f,
        d,
        h,
        zv
      ), e.context = bv(null), a = e.current, c = Ml(a), c = Pc(c), o = Le(c), o.callback = null, Wn(a, o, c), wn(c, "hydrateRoot()", null), a = c, e.current.lanes = a, oc(e, a), fa(e), t[tc] = e.current, xc(t), new Rn(e);
    }, up.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), up;
}
var z2;
function e3() {
  if (z2) return _g.exports;
  z2 = 1;
  function L() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch (zl) {
        console.error(zl);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (L(), _g.exports = PT()) : _g.exports = t3(), _g.exports;
}
var l3 = e3();
const a3 = /* @__PURE__ */ FT(l3), n3 = () => /* @__PURE__ */ oS("div", { className: "flex justify-center items-center h-screen", children: /* @__PURE__ */ oS("div", { className: "bg-red-500 h-40 w-40" }) });
class u3 extends HTMLElement {
  connectedCallback() {
    const zl = this.attachShadow({ mode: "open" });
    this.root = a3.createRoot(zl), this.renderComponent();
  }
  renderComponent() {
    this.root.render(/* @__PURE__ */ oS(n3, {}));
  }
  disconnectedCallback() {
    this.root && this.root.unmount();
  }
}
customElements.get("calendar-webcomponent") || customElements.define("calendar-webcomponent", u3);
