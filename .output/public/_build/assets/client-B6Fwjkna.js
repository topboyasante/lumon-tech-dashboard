const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/dashboard-MGHvxcA4.js",
      "assets/input-CHU7cpM5.js",
      "assets/dropdown-menu-DJQEXZ3J.js",
      "assets/x-CsqFnHNT.js",
      "assets/signup-Bzrdq8Wr.js",
      "assets/index-B1QYg5Sc.js",
      "assets/login-MamCEnAE.js",
      "assets/index-K460dCOQ.js",
      "assets/generateCategoricalChart-cXdD9WE3.js",
      "assets/loans-BxJXDgO2.js",
    ]),
) => i.map((i) => d[i]);
function k0(s, i) {
  for (var l = 0; l < i.length; l++) {
    const u = i[l];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const c in u)
        if (c !== "default" && !(c in s)) {
          const f = Object.getOwnPropertyDescriptor(u, c);
          f &&
            Object.defineProperty(
              s,
              c,
              f.get ? f : { enumerable: !0, get: () => u[c] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }),
  );
}
var $1 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function kp(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var Cc = { exports: {} },
  al = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function H0() {
  if (ap) return al;
  ap = 1;
  var s = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function l(u, c, f) {
    var d = null;
    if (
      (f !== void 0 && (d = "" + f),
      c.key !== void 0 && (d = "" + c.key),
      "key" in c)
    ) {
      f = {};
      for (var m in c) m !== "key" && (f[m] = c[m]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: s, type: u, key: d, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return (al.Fragment = i), (al.jsx = l), (al.jsxs = l), al;
}
var ip;
function q0() {
  return ip || ((ip = 1), (Cc.exports = H0())), Cc.exports;
}
var P = q0();
const Ii = new WeakMap(),
  Ir = new WeakMap(),
  eu = { current: [] };
let Dc = !1,
  cl = 0;
const ll = new Set(),
  Yr = new Map();
function Hp(s) {
  const i = Array.from(s).sort((l, u) =>
    l instanceof ts && l.options.deps.includes(u)
      ? 1
      : u instanceof ts && u.options.deps.includes(l)
        ? -1
        : 0,
  );
  for (const l of i) {
    if (eu.current.includes(l)) continue;
    eu.current.push(l), l.recompute();
    const u = Ir.get(l);
    if (u)
      for (const c of u) {
        const f = Ii.get(c);
        f && Hp(f);
      }
  }
}
function Z0(s) {
  s.listeners.forEach((i) => i({ prevVal: s.prevState, currentVal: s.state }));
}
function V0(s) {
  s.listeners.forEach((i) => i({ prevVal: s.prevState, currentVal: s.state }));
}
function qp(s) {
  if (
    (cl > 0 && !Yr.has(s) && Yr.set(s, s.prevState),
    ll.add(s),
    !(cl > 0) && !Dc)
  )
    try {
      for (Dc = !0; ll.size > 0; ) {
        const i = Array.from(ll);
        ll.clear();
        for (const l of i) {
          const u = Yr.get(l) ?? l.prevState;
          (l.prevState = u), Z0(l);
        }
        for (const l of i) {
          const u = Ii.get(l);
          u && (eu.current.push(l), Hp(u));
        }
        for (const l of i) {
          const u = Ii.get(l);
          if (u) for (const c of u) V0(c);
        }
      }
    } finally {
      (Dc = !1), (eu.current = []), Yr.clear();
    }
}
function zc(s) {
  cl++;
  try {
    s();
  } finally {
    if ((cl--, cl === 0)) {
      const i = Array.from(ll)[0];
      i && qp(i);
    }
  }
}
class $c {
  constructor(i, l) {
    (this.listeners = new Set()),
      (this.subscribe = (u) => {
        var c, f;
        this.listeners.add(u);
        const d =
          (f = (c = this.options) == null ? void 0 : c.onSubscribe) == null
            ? void 0
            : f.call(c, u, this);
        return () => {
          this.listeners.delete(u), d?.();
        };
      }),
      (this.setState = (u) => {
        var c, f, d;
        (this.prevState = this.state),
          (this.state =
            (c = this.options) != null && c.updateFn
              ? this.options.updateFn(this.prevState)(u)
              : u(this.prevState)),
          (d = (f = this.options) == null ? void 0 : f.onUpdate) == null ||
            d.call(f),
          qp(this);
      }),
      (this.prevState = i),
      (this.state = i),
      (this.options = l);
  }
}
class ts {
  constructor(i) {
    (this.listeners = new Set()),
      (this._subscriptions = []),
      (this.lastSeenDepValues = []),
      (this.getDepVals = () => {
        const l = [],
          u = [];
        for (const c of this.options.deps) l.push(c.prevState), u.push(c.state);
        return (
          (this.lastSeenDepValues = u),
          { prevDepVals: l, currDepVals: u, prevVal: this.prevState ?? void 0 }
        );
      }),
      (this.recompute = () => {
        var l, u;
        this.prevState = this.state;
        const {
          prevDepVals: c,
          currDepVals: f,
          prevVal: d,
        } = this.getDepVals();
        (this.state = this.options.fn({
          prevDepVals: c,
          currDepVals: f,
          prevVal: d,
        })),
          (u = (l = this.options).onUpdate) == null || u.call(l);
      }),
      (this.checkIfRecalculationNeededDeeply = () => {
        for (const f of this.options.deps)
          f instanceof ts && f.checkIfRecalculationNeededDeeply();
        let l = !1;
        const u = this.lastSeenDepValues,
          { currDepVals: c } = this.getDepVals();
        for (let f = 0; f < c.length; f++)
          if (c[f] !== u[f]) {
            l = !0;
            break;
          }
        l && this.recompute();
      }),
      (this.mount = () => (
        this.registerOnGraph(),
        this.checkIfRecalculationNeededDeeply(),
        () => {
          this.unregisterFromGraph();
          for (const l of this._subscriptions) l();
        }
      )),
      (this.subscribe = (l) => {
        var u, c;
        this.listeners.add(l);
        const f =
          (c = (u = this.options).onSubscribe) == null
            ? void 0
            : c.call(u, l, this);
        return () => {
          this.listeners.delete(l), f?.();
        };
      }),
      (this.options = i),
      (this.state = i.fn({
        prevDepVals: void 0,
        prevVal: void 0,
        currDepVals: this.getDepVals().currDepVals,
      }));
  }
  registerOnGraph(i = this.options.deps) {
    for (const l of i)
      if (l instanceof ts)
        l.registerOnGraph(), this.registerOnGraph(l.options.deps);
      else if (l instanceof $c) {
        let u = Ii.get(l);
        u || ((u = new Set()), Ii.set(l, u)), u.add(this);
        let c = Ir.get(this);
        c || ((c = new Set()), Ir.set(this, c)), c.add(l);
      }
  }
  unregisterFromGraph(i = this.options.deps) {
    for (const l of i)
      if (l instanceof ts) this.unregisterFromGraph(l.options.deps);
      else if (l instanceof $c) {
        const u = Ii.get(l);
        u && u.delete(this);
        const c = Ir.get(this);
        c && c.delete(l);
      }
  }
}
const Ea = "__TSR_index",
  sp = "popstate",
  lp = "beforeunload";
function Zp(s) {
  let i = s.getLocation();
  const l = new Set(),
    u = (d) => {
      (i = s.getLocation()), l.forEach((m) => m({ location: i, action: d }));
    },
    c = (d) => {
      (s.notifyOnIndexChange ?? !0) ? u(d) : (i = s.getLocation());
    },
    f = async ({ task: d, navigateOpts: m, ...y }) => {
      var p, g;
      if (m?.ignoreBlocker ?? !1) {
        d();
        return;
      }
      const w = ((p = s.getBlockers) == null ? void 0 : p.call(s)) ?? [],
        z = y.type === "PUSH" || y.type === "REPLACE";
      if (typeof document < "u" && w.length && z)
        for (const D of w) {
          const k = dl(y.path, y.state);
          if (
            await D.blockerFn({
              currentLocation: i,
              nextLocation: k,
              action: y.type,
            })
          ) {
            (g = s.onBlocked) == null || g.call(s);
            return;
          }
        }
      d();
    };
  return {
    get location() {
      return i;
    },
    get length() {
      return s.getLength();
    },
    subscribers: l,
    subscribe: (d) => (
      l.add(d),
      () => {
        l.delete(d);
      }
    ),
    push: (d, m, y) => {
      const p = i.state[Ea];
      (m = Pc(p + 1, m)),
        f({
          task: () => {
            s.pushState(d, m), u({ type: "PUSH" });
          },
          navigateOpts: y,
          type: "PUSH",
          path: d,
          state: m,
        });
    },
    replace: (d, m, y) => {
      const p = i.state[Ea];
      (m = Pc(p, m)),
        f({
          task: () => {
            s.replaceState(d, m), u({ type: "REPLACE" });
          },
          navigateOpts: y,
          type: "REPLACE",
          path: d,
          state: m,
        });
    },
    go: (d, m) => {
      f({
        task: () => {
          s.go(d), c({ type: "GO", index: d });
        },
        navigateOpts: m,
        type: "GO",
      });
    },
    back: (d) => {
      f({
        task: () => {
          s.back(d?.ignoreBlocker ?? !1), c({ type: "BACK" });
        },
        navigateOpts: d,
        type: "BACK",
      });
    },
    forward: (d) => {
      f({
        task: () => {
          s.forward(d?.ignoreBlocker ?? !1), c({ type: "FORWARD" });
        },
        navigateOpts: d,
        type: "FORWARD",
      });
    },
    canGoBack: () => i.state[Ea] !== 0,
    createHref: (d) => s.createHref(d),
    block: (d) => {
      var m;
      if (!s.setBlockers) return () => {};
      const y = ((m = s.getBlockers) == null ? void 0 : m.call(s)) ?? [];
      return (
        s.setBlockers([...y, d]),
        () => {
          var p, g;
          const v = ((p = s.getBlockers) == null ? void 0 : p.call(s)) ?? [];
          (g = s.setBlockers) == null ||
            g.call(
              s,
              v.filter((w) => w !== d),
            );
        }
      );
    },
    flush: () => {
      var d;
      return (d = s.flush) == null ? void 0 : d.call(s);
    },
    destroy: () => {
      var d;
      return (d = s.destroy) == null ? void 0 : d.call(s);
    },
    notify: u,
  };
}
function Pc(s, i) {
  return i || (i = {}), { ...i, key: rf(), [Ea]: s };
}
function Y0(s) {
  var i;
  const l = typeof document < "u" ? window : void 0,
    u = l.history.pushState,
    c = l.history.replaceState;
  let f = [];
  const d = () => f,
    m = (N) => (f = N),
    y = (N) => N,
    p = () =>
      dl(
        `${l.location.pathname}${l.location.search}${l.location.hash}`,
        l.history.state,
      );
  ((i = l.history.state) != null && i.key) ||
    l.history.replaceState({ [Ea]: 0, key: rf() }, "");
  let g = p(),
    v,
    w = !1,
    z = !1,
    D = !1,
    k = !1;
  const V = () => g;
  let Y, it;
  const tt = () => {
      Y &&
        ((B._ignoreSubscribers = !0),
        (Y.isPush ? l.history.pushState : l.history.replaceState)(
          Y.state,
          "",
          Y.href,
        ),
        (B._ignoreSubscribers = !1),
        (Y = void 0),
        (it = void 0),
        (v = void 0));
    },
    mt = (N, ut, st) => {
      const J = y(ut);
      it || (v = g),
        (g = dl(ut, st)),
        (Y = { href: J, state: st, isPush: Y?.isPush || N === "push" }),
        it || (it = Promise.resolve().then(() => tt()));
    },
    W = (N) => {
      (g = p()), B.notify({ type: N });
    },
    X = async () => {
      if (z) {
        z = !1;
        return;
      }
      const N = p(),
        ut = N.state[Ea] - g.state[Ea],
        st = ut === 1,
        J = ut === -1,
        et = (!st && !J) || w;
      w = !1;
      const Rt = et ? "GO" : J ? "BACK" : "FORWARD",
        rt = et ? { type: "GO", index: ut } : { type: J ? "BACK" : "FORWARD" };
      if (D) D = !1;
      else {
        const E = d();
        if (typeof document < "u" && E.length) {
          for (const q of E)
            if (
              await q.blockerFn({
                currentLocation: g,
                nextLocation: N,
                action: Rt,
              })
            ) {
              (z = !0), l.history.go(1), B.notify(rt);
              return;
            }
        }
      }
      (g = p()), B.notify(rt);
    },
    at = (N) => {
      if (k) {
        k = !1;
        return;
      }
      let ut = !1;
      const st = d();
      if (typeof document < "u" && st.length)
        for (const J of st) {
          const et = J.enableBeforeUnload ?? !0;
          if (et === !0) {
            ut = !0;
            break;
          }
          if (typeof et == "function" && et() === !0) {
            ut = !0;
            break;
          }
        }
      if (ut) return N.preventDefault(), (N.returnValue = "");
    },
    B = Zp({
      getLocation: V,
      getLength: () => l.history.length,
      pushState: (N, ut) => mt("push", N, ut),
      replaceState: (N, ut) => mt("replace", N, ut),
      back: (N) => (N && (D = !0), (k = !0), l.history.back()),
      forward: (N) => {
        N && (D = !0), (k = !0), l.history.forward();
      },
      go: (N) => {
        (w = !0), l.history.go(N);
      },
      createHref: (N) => y(N),
      flush: tt,
      destroy: () => {
        (l.history.pushState = u),
          (l.history.replaceState = c),
          l.removeEventListener(lp, at, { capture: !0 }),
          l.removeEventListener(sp, X);
      },
      onBlocked: () => {
        v && g !== v && (g = v);
      },
      getBlockers: d,
      setBlockers: m,
      notifyOnIndexChange: !1,
    });
  return (
    l.addEventListener(lp, at, { capture: !0 }),
    l.addEventListener(sp, X),
    (l.history.pushState = function (...N) {
      const ut = u.apply(l.history, N);
      return B._ignoreSubscribers || W("PUSH"), ut;
    }),
    (l.history.replaceState = function (...N) {
      const ut = c.apply(l.history, N);
      return B._ignoreSubscribers || W("REPLACE"), ut;
    }),
    B
  );
}
function G0(s = { initialEntries: ["/"] }) {
  const i = s.initialEntries;
  let l = s.initialIndex
    ? Math.min(Math.max(s.initialIndex, 0), i.length - 1)
    : i.length - 1;
  const u = i.map((f, d) => Pc(d, void 0));
  return Zp({
    getLocation: () => dl(i[l], u[l]),
    getLength: () => i.length,
    pushState: (f, d) => {
      l < i.length - 1 && (i.splice(l + 1), u.splice(l + 1)),
        u.push(d),
        i.push(f),
        (l = Math.max(i.length - 1, 0));
    },
    replaceState: (f, d) => {
      (u[l] = d), (i[l] = f);
    },
    back: () => {
      l = Math.max(l - 1, 0);
    },
    forward: () => {
      l = Math.min(l + 1, i.length - 1);
    },
    go: (f) => {
      l = Math.min(Math.max(l + f, 0), i.length - 1);
    },
    createHref: (f) => f,
  });
}
function dl(s, i) {
  const l = s.indexOf("#"),
    u = s.indexOf("?");
  return {
    href: s,
    pathname: s.substring(
      0,
      l > 0 ? (u > 0 ? Math.min(l, u) : l) : u > 0 ? u : s.length,
    ),
    hash: l > -1 ? s.substring(l) : "",
    search: u > -1 ? s.slice(u, l === -1 ? void 0 : l) : "",
    state: i || { [Ea]: 0, key: rf() },
  };
}
function rf() {
  return (Math.random() + 1).toString(36).substring(7);
}
var Q0 = "Invariant failed";
function wn(s, i) {
  if (!s) throw new Error(Q0);
}
function $i(s) {
  return s[s.length - 1];
}
function X0(s) {
  return typeof s == "function";
}
function rl(s, i) {
  return X0(s) ? s(i) : s;
}
function Fc(s, i) {
  return i.reduce((l, u) => ((l[u] = s[u]), l), {});
}
function en(s, i) {
  if (s === i) return s;
  const l = i,
    u = up(s) && up(l);
  if (u || (Jn(s) && Jn(l))) {
    const c = u ? s : Object.keys(s),
      f = c.length,
      d = u ? l : Object.keys(l),
      m = d.length,
      y = u ? [] : {};
    let p = 0;
    for (let g = 0; g < m; g++) {
      const v = u ? g : d[g];
      ((!u && c.includes(v)) || u) && s[v] === void 0 && l[v] === void 0
        ? ((y[v] = void 0), p++)
        : ((y[v] = en(s[v], l[v])), y[v] === s[v] && s[v] !== void 0 && p++);
    }
    return f === m && p === f ? s : y;
  }
  return l;
}
function Jn(s) {
  if (!rp(s)) return !1;
  const i = s.constructor;
  if (typeof i > "u") return !0;
  const l = i.prototype;
  return !(!rp(l) || !l.hasOwnProperty("isPrototypeOf"));
}
function rp(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function up(s) {
  return Array.isArray(s) && s.length === Object.keys(s).length;
}
function op(s, i) {
  let l = Object.keys(s);
  return i && (l = l.filter((u) => s[u] !== void 0)), l;
}
function fl(s, i, l) {
  if (s === i) return !0;
  if (typeof s != typeof i) return !1;
  if (Jn(s) && Jn(i)) {
    const u = l?.ignoreUndefined ?? !0,
      c = op(s, u),
      f = op(i, u);
    return !l?.partial && c.length !== f.length
      ? !1
      : f.every((d) => fl(s[d], i[d], l));
  }
  return Array.isArray(s) && Array.isArray(i)
    ? s.length !== i.length
      ? !1
      : !s.some((u, c) => !fl(u, i[c], l))
    : !1;
}
function Ki(s) {
  let i, l;
  const u = new Promise((c, f) => {
    (i = c), (l = f);
  });
  return (
    (u.status = "pending"),
    (u.resolve = (c) => {
      (u.status = "resolved"), (u.value = c), i(c), s?.(c);
    }),
    (u.reject = (c) => {
      (u.status = "rejected"), l(c);
    }),
    u
  );
}
function K0(s) {
  return /%[0-9A-Fa-f]{2}/.test(s);
}
function $n(s) {
  return mu(s.filter((i) => i !== void 0).join("/"));
}
function mu(s) {
  return s.replace(/\/{2,}/g, "/");
}
function uf(s) {
  return s === "/" ? s : s.replace(/^\/{1,}/, "");
}
function ti(s) {
  return s === "/" ? s : s.replace(/\/{1,}$/, "");
}
function J0(s) {
  return ti(uf(s));
}
function cp(s, i) {
  return s?.endsWith("/") && s !== "/" && s !== `${i}/` ? s.slice(0, -1) : s;
}
function P1(s, i, l) {
  return cp(s, l) === cp(i, l);
}
function $0({
  basepath: s,
  base: i,
  to: l,
  trailingSlash: u = "never",
  caseSensitive: c,
}) {
  var f, d;
  (i = nu(s, i, c)), (l = nu(s, l, c));
  let m = as(i);
  const y = as(l);
  m.length > 1 && ((f = $i(m)) == null ? void 0 : f.value) === "/" && m.pop(),
    y.forEach((g, v) => {
      g.value === "/"
        ? v
          ? v === y.length - 1 && m.push(g)
          : (m = [g])
        : g.value === ".."
          ? m.pop()
          : g.value === "." || m.push(g);
    }),
    m.length > 1 &&
      (((d = $i(m)) == null ? void 0 : d.value) === "/"
        ? u === "never" && m.pop()
        : u === "always" && m.push({ type: "pathname", value: "/" }));
  const p = $n([s, ...m.map((g) => g.value)]);
  return mu(p);
}
function as(s) {
  if (!s) return [];
  s = mu(s);
  const i = [];
  if (
    (s.slice(0, 1) === "/" &&
      ((s = s.substring(1)), i.push({ type: "pathname", value: "/" })),
    !s)
  )
    return i;
  const l = s.split("/").filter(Boolean);
  return (
    i.push(
      ...l.map((u) =>
        u === "$" || u === "*"
          ? { type: "wildcard", value: u }
          : u.charAt(0) === "$"
            ? { type: "param", value: u }
            : {
                type: "pathname",
                value: u.includes("%25")
                  ? u
                      .split("%25")
                      .map((c) => decodeURI(c))
                      .join("%25")
                  : decodeURI(u),
              },
      ),
    ),
    s.slice(-1) === "/" &&
      ((s = s.substring(1)), i.push({ type: "pathname", value: "/" })),
    i
  );
}
function Gr({
  path: s,
  params: i,
  leaveWildcards: l,
  leaveParams: u,
  decodeCharMap: c,
}) {
  const f = as(s);
  function d(p) {
    const g = i[p],
      v = typeof g == "string";
    return ["*", "_splat"].includes(p)
      ? v
        ? encodeURI(g)
        : g
      : v
        ? P0(g, c)
        : g;
  }
  const m = {},
    y = $n(
      f.map((p) => {
        if (p.type === "wildcard") {
          m._splat = i._splat;
          const g = d("_splat");
          return l ? `${p.value}${g ?? ""}` : g;
        }
        if (p.type === "param") {
          const g = p.value.substring(1);
          if (((m[g] = i[g]), u)) {
            const v = d(p.value);
            return `${p.value}${v ?? ""}`;
          }
          return d(g) ?? "undefined";
        }
        return p.value;
      }),
    );
  return { usedParams: m, interpolatedPath: y };
}
function P0(s, i) {
  let l = encodeURIComponent(s);
  if (i) for (const [u, c] of i) l = l.replaceAll(u, c);
  return l;
}
function Qr(s, i, l) {
  const u = F0(s, i, l);
  if (!(l.to && !u)) return u ?? {};
}
function nu(s, i, l = !1) {
  const u = l ? s : s.toLowerCase(),
    c = l ? i : i.toLowerCase();
  switch (!0) {
    case u === "/":
      return i;
    case c === u:
      return "";
    case i.length < s.length:
      return i;
    case c[u.length] !== "/":
      return i;
    case c.startsWith(u):
      return i.slice(s.length);
    default:
      return i;
  }
}
function F0(s, i, l) {
  if (s !== "/" && !i.startsWith(s)) return;
  i = nu(s, i, l.caseSensitive);
  const u = nu(s, `${l.to ?? "$"}`, l.caseSensitive),
    c = as(i),
    f = as(u);
  i.startsWith("/") || c.unshift({ type: "pathname", value: "/" }),
    u.startsWith("/") || f.unshift({ type: "pathname", value: "/" });
  const d = {};
  return (() => {
    for (let y = 0; y < Math.max(c.length, f.length); y++) {
      const p = c[y],
        g = f[y],
        v = y >= c.length - 1,
        w = y >= f.length - 1;
      if (g) {
        if (g.type === "wildcard") {
          const z = decodeURI($n(c.slice(y).map((D) => D.value)));
          return (d["*"] = z), (d._splat = z), !0;
        }
        if (g.type === "pathname") {
          if (g.value === "/" && !p?.value) return !0;
          if (p) {
            if (l.caseSensitive) {
              if (g.value !== p.value) return !1;
            } else if (g.value.toLowerCase() !== p.value.toLowerCase())
              return !1;
          }
        }
        if (!p) return !1;
        if (g.type === "param") {
          if (p.value === "/") return !1;
          p.value.charAt(0) !== "$" &&
            (d[g.value.substring(1)] = decodeURIComponent(p.value));
        }
      }
      if (!v && w)
        return (
          (d["**"] = $n(c.slice(y + 1).map((z) => z.value))),
          !!l.fuzzy && g?.value !== "/"
        );
    }
    return !0;
  })()
    ? d
    : void 0;
}
function nn(s) {
  return !!s?.isNotFound;
}
const au = "tsr-scroll-restoration-v1_3";
let Vp = !1;
try {
  Vp = typeof window < "u" && typeof window.sessionStorage == "object";
} catch {}
const W0 = (s, i) => {
    let l;
    return (...u) => {
      l ||
        (l = setTimeout(() => {
          s(...u), (l = null);
        }, i));
    };
  },
  Pi = Vp
    ? {
        state: JSON.parse(window.sessionStorage.getItem(au) || "null") || {},
        set: (i) => (
          (Pi.state = rl(i, Pi.state) || Pi.state),
          window.sessionStorage.setItem(au, JSON.stringify(Pi.state))
        ),
      }
    : void 0,
  Wc = (s) => s.state.key || s.href;
function I0(s) {
  const i = [];
  let l;
  for (; (l = s.parentNode); )
    i.unshift(`${s.tagName}:nth-child(${[].indexOf.call(l.children, s) + 1})`),
      (s = l);
  return `${i.join(" > ")}`.toLowerCase();
}
let iu = !1;
function Yp(s, i, l, u, c) {
  var f;
  let d;
  try {
    d = JSON.parse(sessionStorage.getItem(s) || "{}");
  } catch (p) {
    console.error(p);
    return;
  }
  const m = i || ((f = window.history.state) == null ? void 0 : f.key),
    y = d[m];
  (iu = !0),
    (() => {
      if (u && y) {
        for (const g in y) {
          const v = y[g];
          if (g === "window")
            window.scrollTo({ top: v.scrollY, left: v.scrollX, behavior: l });
          else if (g) {
            const w = document.querySelector(g);
            w && ((w.scrollLeft = v.scrollX), (w.scrollTop = v.scrollY));
          }
        }
        return;
      }
      const p = window.location.hash.split("#")[1];
      if (p) {
        const g =
          (window.history.state || {}).__hashScrollIntoViewOptions ?? !0;
        if (g) {
          const v = document.getElementById(p);
          v && v.scrollIntoView(g);
        }
        return;
      }
      ["window", ...(c?.filter((g) => g !== "window") ?? [])].forEach((g) => {
        const v = g === "window" ? window : document.querySelector(g);
        v && v.scrollTo({ top: 0, left: 0, behavior: l });
      });
    })(),
    (iu = !1);
}
function tg(s, i) {
  if (
    ((s.options.scrollRestoration ?? !1) && (s.isScrollRestoring = !0),
    typeof document > "u" || s.isScrollRestorationSetup)
  )
    return;
  (s.isScrollRestorationSetup = !0), (iu = !1);
  const u = s.options.getScrollRestorationKey || Wc;
  window.history.scrollRestoration = "manual";
  const c = (f) => {
    if (iu || !s.isScrollRestoring) return;
    let d = "";
    if (f.target === document || f.target === window) d = "window";
    else {
      const y = f.target.getAttribute("data-scroll-restoration-id");
      y ? (d = `[data-scroll-restoration-id="${y}"]`) : (d = I0(f.target));
    }
    const m = u(s.state.location);
    Pi.set((y) => {
      const p = (y[m] = y[m] || {}),
        g = (p[d] = p[d] || {});
      if (d === "window")
        (g.scrollX = window.scrollX || 0), (g.scrollY = window.scrollY || 0);
      else if (d) {
        const v = document.querySelector(d);
        v && ((g.scrollX = v.scrollLeft || 0), (g.scrollY = v.scrollTop || 0));
      }
      return y;
    });
  };
  typeof document < "u" && document.addEventListener("scroll", W0(c, 100), !0),
    s.subscribe("onRendered", (f) => {
      const d = u(f.toLocation);
      if (!s.resetNextScroll) {
        s.resetNextScroll = !0;
        return;
      }
      Yp(
        au,
        d,
        s.options.scrollRestorationBehavior || void 0,
        s.isScrollRestoring || void 0,
        s.options.scrollToTopSelectors || void 0,
      ),
        s.isScrollRestoring && Pi.set((m) => ((m[d] = m[d] || {}), m));
    });
}
function eg(s, i) {
  let l,
    u,
    c,
    f = "";
  for (l in s)
    if ((c = s[l]) !== void 0)
      if (Array.isArray(c))
        for (u = 0; u < c.length; u++)
          f && (f += "&"),
            (f += encodeURIComponent(l) + "=" + encodeURIComponent(c[u]));
      else
        f && (f += "&"),
          (f += encodeURIComponent(l) + "=" + encodeURIComponent(c));
  return "" + f;
}
function fp(s) {
  if (!s) return "";
  const i = K0(s)
    ? decodeURIComponent(s)
    : decodeURIComponent(encodeURIComponent(s));
  return i === "false"
    ? !1
    : i === "true"
      ? !0
      : +i * 0 === 0 && +i + "" === i
        ? +i
        : i;
}
function ng(s, i) {
  let l, u;
  const c = {},
    f = s.split("&");
  for (; (l = f.shift()); ) {
    const d = l.indexOf("=");
    if (d !== -1) {
      (u = l.slice(0, d)), (u = decodeURIComponent(u));
      const m = l.slice(d + 1);
      c[u] !== void 0 ? (c[u] = [].concat(c[u], fp(m))) : (c[u] = fp(m));
    } else (u = l), (u = decodeURIComponent(u)), (c[u] = "");
  }
  return c;
}
const ag = sg(JSON.parse),
  ig = lg(JSON.stringify, JSON.parse);
function sg(s) {
  return (i) => {
    i.substring(0, 1) === "?" && (i = i.substring(1));
    const l = ng(i);
    for (const u in l) {
      const c = l[u];
      if (typeof c == "string")
        try {
          l[u] = s(c);
        } catch {}
    }
    return l;
  };
}
function lg(s, i) {
  function l(u) {
    if (typeof u == "object" && u !== null)
      try {
        return s(u);
      } catch {}
    else if (typeof u == "string" && typeof i == "function")
      try {
        return i(u), s(u);
      } catch {}
    return u;
  }
  return (u) => {
    (u = { ...u }),
      Object.keys(u).forEach((f) => {
        const d = u[f];
        typeof d > "u" || d === void 0 ? delete u[f] : (u[f] = l(d));
      });
    const c = eg(u).toString();
    return c ? `?${c}` : "";
  };
}
const fn = "__root__";
function Ia(s) {
  return !!s?.isRedirect;
}
function Nc(s) {
  return !!s?.isRedirect && s.href;
}
function rg(s) {
  return s instanceof Error
    ? { name: s.name, message: s.message }
    : { data: s };
}
function es(s) {
  const i = s.resolvedLocation,
    l = s.location,
    u = i?.pathname !== l.pathname,
    c = i?.href !== l.href,
    f = i?.hash !== l.hash;
  return {
    fromLocation: i,
    toLocation: l,
    pathChanged: u,
    hrefChanged: c,
    hashChanged: f,
  };
}
class ug {
  constructor(i) {
    (this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
      (this.resetNextScroll = !0),
      (this.shouldViewTransition = void 0),
      (this.isViewTransitionTypesSupported = void 0),
      (this.subscribers = new Set()),
      (this.isScrollRestoring = !1),
      (this.isScrollRestorationSetup = !1),
      (this.startTransition = (l) => l()),
      (this.update = (l) => {
        var u;
        l.notFoundRoute &&
          console.warn(
            "The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.",
          );
        const c = this.options;
        (this.options = { ...this.options, ...l }),
          (this.isServer = this.options.isServer ?? typeof document > "u"),
          (this.pathParamsDecodeCharMap = this.options
            .pathParamsAllowedCharacters
            ? new Map(
                this.options.pathParamsAllowedCharacters.map((f) => [
                  encodeURIComponent(f),
                  f,
                ]),
              )
            : void 0),
          (!this.basepath || (l.basepath && l.basepath !== c.basepath)) &&
            (l.basepath === void 0 || l.basepath === "" || l.basepath === "/"
              ? (this.basepath = "/")
              : (this.basepath = `/${J0(l.basepath)}`)),
          (!this.history ||
            (this.options.history && this.options.history !== this.history)) &&
            ((this.history =
              this.options.history ??
              (this.isServer
                ? G0({ initialEntries: [this.basepath || "/"] })
                : Y0())),
            (this.latestLocation = this.parseLocation())),
          this.options.routeTree !== this.routeTree &&
            ((this.routeTree = this.options.routeTree), this.buildRouteTree()),
          this.__store ||
            ((this.__store = new $c(cg(this.latestLocation), {
              onUpdate: () => {
                this.__store.state = {
                  ...this.state,
                  cachedMatches: this.state.cachedMatches.filter(
                    (f) => !["redirected"].includes(f.status),
                  ),
                };
              },
            })),
            tg(this)),
          typeof window < "u" &&
            "CSS" in window &&
            typeof ((u = window.CSS) == null ? void 0 : u.supports) ==
              "function" &&
            (this.isViewTransitionTypesSupported = window.CSS.supports(
              "selector(:active-view-transition-type(a)",
            ));
      }),
      (this.buildRouteTree = () => {
        (this.routesById = {}), (this.routesByPath = {});
        const l = this.options.notFoundRoute;
        l &&
          (l.init({
            originalIndex: 99999999999,
            defaultSsr: this.options.defaultSsr,
          }),
          (this.routesById[l.id] = l));
        const u = (d) => {
          d.forEach((m, y) => {
            m.init({ originalIndex: y, defaultSsr: this.options.defaultSsr });
            const p = this.routesById[m.id];
            if (
              (wn(!p, `Duplicate routes found with id: ${String(m.id)}`),
              (this.routesById[m.id] = m),
              !m.isRoot && m.path)
            ) {
              const v = ti(m.fullPath);
              (!this.routesByPath[v] || m.fullPath.endsWith("/")) &&
                (this.routesByPath[v] = m);
            }
            const g = m.children;
            g?.length && u(g);
          });
        };
        u([this.routeTree]);
        const c = [];
        Object.values(this.routesById).forEach((d, m) => {
          var y;
          if (d.isRoot || !d.path) return;
          const p = uf(d.fullPath),
            g = as(p);
          for (
            ;
            g.length > 1 && ((y = g[0]) == null ? void 0 : y.value) === "/";

          )
            g.shift();
          const v = g.map((w) =>
            w.value === "/"
              ? 0.75
              : w.type === "param"
                ? 0.5
                : w.type === "wildcard"
                  ? 0.25
                  : 1,
          );
          c.push({ child: d, trimmed: p, parsed: g, index: m, scores: v });
        }),
          (this.flatRoutes = c
            .sort((d, m) => {
              const y = Math.min(d.scores.length, m.scores.length);
              for (let p = 0; p < y; p++)
                if (d.scores[p] !== m.scores[p])
                  return m.scores[p] - d.scores[p];
              if (d.scores.length !== m.scores.length)
                return m.scores.length - d.scores.length;
              for (let p = 0; p < y; p++)
                if (d.parsed[p].value !== m.parsed[p].value)
                  return d.parsed[p].value > m.parsed[p].value ? 1 : -1;
              return d.index - m.index;
            })
            .map((d, m) => ((d.child.rank = m), d.child)));
      }),
      (this.subscribe = (l, u) => {
        const c = { eventType: l, fn: u };
        return (
          this.subscribers.add(c),
          () => {
            this.subscribers.delete(c);
          }
        );
      }),
      (this.emit = (l) => {
        this.subscribers.forEach((u) => {
          u.eventType === l.type && u.fn(l);
        });
      }),
      (this.parseLocation = (l, u) => {
        const c = ({ pathname: y, search: p, hash: g, state: v }) => {
            const w = this.options.parseSearch(p),
              z = this.options.stringifySearch(w);
            return {
              pathname: y,
              searchStr: z,
              search: en(l?.search, w),
              hash: g.split("#").reverse()[0] ?? "",
              href: `${y}${z}${g}`,
              state: en(l?.state, v),
            };
          },
          f = c(u ?? this.history.location),
          { __tempLocation: d, __tempKey: m } = f.state;
        if (d && (!m || m === this.tempLocationKey)) {
          const y = c(d);
          return (
            (y.state.key = f.state.key),
            delete y.state.__tempLocation,
            { ...y, maskedLocation: f }
          );
        }
        return f;
      }),
      (this.resolvePathWithBase = (l, u) =>
        $0({
          basepath: this.basepath,
          base: l,
          to: mu(u),
          trailingSlash: this.options.trailingSlash,
          caseSensitive: this.options.caseSensitive,
        })),
      (this.matchRoutes = (l, u, c) =>
        typeof l == "string"
          ? this.matchRoutesInternal({ pathname: l, search: u }, c)
          : this.matchRoutesInternal(l, u)),
      (this.getMatchedRoutes = (l, u) => {
        let c = {};
        const f = ti(l.pathname),
          d = (g) =>
            Qr(this.basepath, f, {
              to: g.fullPath,
              caseSensitive:
                g.options.caseSensitive ?? this.options.caseSensitive,
              fuzzy: !0,
            });
        let m = u?.to !== void 0 ? this.routesByPath[u.to] : void 0;
        m
          ? (c = d(m))
          : (m = this.flatRoutes.find((g) => {
              const v = d(g);
              return v ? ((c = v), !0) : !1;
            }));
        let y = m || this.routesById[fn];
        const p = [y];
        for (; y.parentRoute; ) (y = y.parentRoute), p.unshift(y);
        return { matchedRoutes: p, routeParams: c, foundRoute: m };
      }),
      (this.cancelMatch = (l) => {
        const u = this.getMatch(l);
        u && (u.abortController.abort(), clearTimeout(u.pendingTimeout));
      }),
      (this.cancelMatches = () => {
        var l;
        (l = this.state.pendingMatches) == null ||
          l.forEach((u) => {
            this.cancelMatch(u.id);
          });
      }),
      (this.buildLocation = (l) => {
        const u = (f = {}, d) => {
            var m, y, p, g, v, w, z;
            const D = f._fromLocation
                ? this.matchRoutes(f._fromLocation, { _buildLocation: !0 })
                : this.state.matches,
              k =
                f.from != null
                  ? D.find((J) =>
                      Qr(this.basepath, ti(J.pathname), {
                        to: f.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      }),
                    )
                  : void 0,
              V = k?.pathname || this.latestLocation.pathname;
            wn(
              f.from == null || k != null,
              "Could not find match for from: " + f.from,
            );
            const Y =
                (m = this.state.pendingMatches) != null && m.length
                  ? (y = $i(this.state.pendingMatches)) == null
                    ? void 0
                    : y.search
                  : ((p = $i(D)) == null ? void 0 : p.search) ||
                    this.latestLocation.search,
              it = d?.matchedRoutes.filter((J) =>
                D.find((et) => et.routeId === J.id),
              );
            let tt;
            if (f.to) {
              const J =
                k?.fullPath ||
                ((g = $i(D)) == null ? void 0 : g.fullPath) ||
                this.latestLocation.pathname;
              tt = this.resolvePathWithBase(J, `${f.to}`);
            } else {
              const J =
                this.routesById[
                  (v = it?.find((et) => {
                    const Rt = Gr({
                      path: et.fullPath,
                      params: d?.routeParams ?? {},
                      decodeCharMap: this.pathParamsDecodeCharMap,
                    }).interpolatedPath;
                    return $n([this.basepath, Rt]) === V;
                  })) == null
                    ? void 0
                    : v.id
                ];
              tt = this.resolvePathWithBase(V, J?.to ?? V);
            }
            const mt = { ...((w = $i(D)) == null ? void 0 : w.params) };
            let W =
              (f.params ?? !0) === !0 ? mt : { ...mt, ...rl(f.params, mt) };
            Object.keys(W).length > 0 &&
              d?.matchedRoutes
                .map((J) => {
                  var et;
                  return (
                    ((et = J.options.params) == null ? void 0 : et.stringify) ??
                    J.options.stringifyParams
                  );
                })
                .filter(Boolean)
                .forEach((J) => {
                  W = { ...W, ...J(W) };
                }),
              (tt = Gr({
                path: tt,
                params: W ?? {},
                leaveWildcards: !1,
                leaveParams: l.leaveParams,
                decodeCharMap: this.pathParamsDecodeCharMap,
              }).interpolatedPath);
            let X = Y;
            if (
              l._includeValidateSearch &&
              (z = this.options.search) != null &&
              z.strict
            ) {
              let J = {};
              d?.matchedRoutes.forEach((et) => {
                try {
                  et.options.validateSearch &&
                    (J = {
                      ...J,
                      ...(Uc(et.options.validateSearch, { ...J, ...X }) ?? {}),
                    });
                } catch {}
              }),
                (X = J);
            }
            (X = ((J) => {
              const et =
                  d?.matchedRoutes.reduce((E, q) => {
                    var I;
                    const dt = [];
                    if ("search" in q.options)
                      (I = q.options.search) != null &&
                        I.middlewares &&
                        dt.push(...q.options.search.middlewares);
                    else if (
                      q.options.preSearchFilters ||
                      q.options.postSearchFilters
                    ) {
                      const S = ({ search: M, next: Z }) => {
                        let j = M;
                        "preSearchFilters" in q.options &&
                          q.options.preSearchFilters &&
                          (j = q.options.preSearchFilters.reduce(
                            (ht, K) => K(ht),
                            M,
                          ));
                        const $ = Z(j);
                        return "postSearchFilters" in q.options &&
                          q.options.postSearchFilters
                          ? q.options.postSearchFilters.reduce(
                              (ht, K) => K(ht),
                              $,
                            )
                          : $;
                      };
                      dt.push(S);
                    }
                    if (l._includeValidateSearch && q.options.validateSearch) {
                      const S = ({ search: M, next: Z }) => {
                        const j = Z(M);
                        try {
                          return {
                            ...j,
                            ...(Uc(q.options.validateSearch, j) ?? {}),
                          };
                        } catch {
                          return j;
                        }
                      };
                      dt.push(S);
                    }
                    return E.concat(dt);
                  }, []) ?? [],
                Rt = ({ search: E }) =>
                  f.search ? (f.search === !0 ? E : rl(f.search, E)) : {};
              et.push(Rt);
              const rt = (E, q) => {
                if (E >= et.length) return q;
                const I = et[E];
                return I({ search: q, next: (S) => rt(E + 1, S) });
              };
              return rt(0, J);
            })(X)),
              (X = en(Y, X));
            const B = this.options.stringifySearch(X),
              N =
                f.hash === !0
                  ? this.latestLocation.hash
                  : f.hash
                    ? rl(f.hash, this.latestLocation.hash)
                    : void 0,
              ut = N ? `#${N}` : "";
            let st =
              f.state === !0
                ? this.latestLocation.state
                : f.state
                  ? rl(f.state, this.latestLocation.state)
                  : {};
            return (
              (st = en(this.latestLocation.state, st)),
              {
                pathname: tt,
                search: X,
                searchStr: B,
                state: st,
                hash: N ?? "",
                href: `${tt}${B}${ut}`,
                unmaskOnReload: f.unmaskOnReload,
              }
            );
          },
          c = (f = {}, d) => {
            var m;
            const y = u(f);
            let p = d ? u(d) : void 0;
            if (!p) {
              let w = {};
              const z =
                (m = this.options.routeMasks) == null
                  ? void 0
                  : m.find((D) => {
                      const k = Qr(this.basepath, y.pathname, {
                        to: D.from,
                        caseSensitive: !1,
                        fuzzy: !1,
                      });
                      return k ? ((w = k), !0) : !1;
                    });
              if (z) {
                const { from: D, ...k } = z;
                (d = { ...Fc(l, ["from"]), ...k, params: w }), (p = u(d));
              }
            }
            const g = this.getMatchedRoutes(y, f),
              v = u(f, g);
            if (p) {
              const w = this.getMatchedRoutes(p, d),
                z = u(d, w);
              v.maskedLocation = z;
            }
            return v;
          };
        return l.mask ? c(l, { ...Fc(l, ["from"]), ...l.mask }) : c(l);
      }),
      (this.commitLocation = ({
        viewTransition: l,
        ignoreBlocker: u,
        ...c
      }) => {
        const f = () => {
            const y = ["key", "__TSR_index", "__hashScrollIntoViewOptions"];
            y.forEach((g) => {
              c.state[g] = this.latestLocation.state[g];
            });
            const p = fl(c.state, this.latestLocation.state);
            return (
              y.forEach((g) => {
                delete c.state[g];
              }),
              p
            );
          },
          d = this.latestLocation.href === c.href,
          m = this.commitLocationPromise;
        if (
          ((this.commitLocationPromise = Ki(() => {
            m?.resolve();
          })),
          d && f())
        )
          this.load();
        else {
          let { maskedLocation: y, hashScrollIntoView: p, ...g } = c;
          y &&
            ((g = {
              ...y,
              state: {
                ...y.state,
                __tempKey: void 0,
                __tempLocation: {
                  ...g,
                  search: g.searchStr,
                  state: {
                    ...g.state,
                    __tempKey: void 0,
                    __tempLocation: void 0,
                    key: void 0,
                  },
                },
              },
            }),
            (g.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
              (g.state.__tempKey = this.tempLocationKey)),
            (g.state.__hashScrollIntoViewOptions =
              p ?? this.options.defaultHashScrollIntoView ?? !0),
            (this.shouldViewTransition = l),
            this.history[c.replace ? "replace" : "push"](g.href, g.state, {
              ignoreBlocker: u,
            });
        }
        return (
          (this.resetNextScroll = c.resetScroll ?? !0),
          this.history.subscribers.size || this.load(),
          this.commitLocationPromise
        );
      }),
      (this.buildAndCommitLocation = ({
        replace: l,
        resetScroll: u,
        hashScrollIntoView: c,
        viewTransition: f,
        ignoreBlocker: d,
        href: m,
        ...y
      } = {}) => {
        if (m) {
          const g = this.history.location.state.__TSR_index,
            v = dl(m, { __TSR_index: l ? g : g + 1 });
          (y.to = v.pathname),
            (y.search = this.options.parseSearch(v.search)),
            (y.hash = v.hash.slice(1));
        }
        const p = this.buildLocation({ ...y, _includeValidateSearch: !0 });
        return this.commitLocation({
          ...p,
          viewTransition: f,
          replace: l,
          resetScroll: u,
          hashScrollIntoView: c,
          ignoreBlocker: d,
        });
      }),
      (this.navigate = ({ to: l, reloadDocument: u, href: c, ...f }) => {
        if (u) {
          if (!c) {
            const d = this.buildLocation({ to: l, ...f });
            c = this.history.createHref(d.href);
          }
          f.replace ? window.location.replace(c) : (window.location.href = c);
          return;
        }
        return this.buildAndCommitLocation({ ...f, href: c, to: l });
      }),
      (this.load = async (l) => {
        this.latestLocation = this.parseLocation(this.latestLocation);
        let u, c, f;
        for (
          f = new Promise((d) => {
            this.startTransition(async () => {
              var m;
              try {
                const y = this.latestLocation,
                  p = this.state.resolvedLocation;
                this.cancelMatches();
                let g;
                zc(() => {
                  (g = this.matchRoutes(y)),
                    this.__store.setState((v) => ({
                      ...v,
                      status: "pending",
                      isLoading: !0,
                      location: y,
                      pendingMatches: g,
                      cachedMatches: v.cachedMatches.filter(
                        (w) => !g.find((z) => z.id === w.id),
                      ),
                    }));
                }),
                  this.state.redirect ||
                    this.emit({
                      type: "onBeforeNavigate",
                      ...es({ resolvedLocation: p, location: y }),
                    }),
                  this.emit({
                    type: "onBeforeLoad",
                    ...es({ resolvedLocation: p, location: y }),
                  }),
                  await this.loadMatches({
                    sync: l?.sync,
                    matches: g,
                    location: y,
                    onReady: async () => {
                      this.startViewTransition(async () => {
                        let v, w, z;
                        zc(() => {
                          this.__store.setState((D) => {
                            const k = D.matches,
                              V = D.pendingMatches || D.matches;
                            return (
                              (v = k.filter(
                                (Y) => !V.find((it) => it.id === Y.id),
                              )),
                              (w = V.filter(
                                (Y) => !k.find((it) => it.id === Y.id),
                              )),
                              (z = k.filter((Y) =>
                                V.find((it) => it.id === Y.id),
                              )),
                              {
                                ...D,
                                isLoading: !1,
                                loadedAt: Date.now(),
                                matches: V,
                                pendingMatches: void 0,
                                cachedMatches: [
                                  ...D.cachedMatches,
                                  ...v.filter((Y) => Y.status !== "error"),
                                ],
                              }
                            );
                          }),
                            this.clearExpiredCache();
                        }),
                          [
                            [v, "onLeave"],
                            [w, "onEnter"],
                            [z, "onStay"],
                          ].forEach(([D, k]) => {
                            D.forEach((V) => {
                              var Y, it;
                              (it = (Y =
                                this.looseRoutesById[V.routeId].options)[k]) ==
                                null || it.call(Y, V);
                            });
                          });
                      });
                    },
                  });
              } catch (y) {
                Nc(y)
                  ? ((u = y),
                    this.isServer ||
                      this.navigate({ ...u, replace: !0, ignoreBlocker: !0 }))
                  : nn(y) && (c = y),
                  this.__store.setState((p) => ({
                    ...p,
                    statusCode: u
                      ? u.statusCode
                      : c
                        ? 404
                        : p.matches.some((g) => g.status === "error")
                          ? 500
                          : 200,
                    redirect: u,
                  }));
              }
              this.latestLoadPromise === f &&
                ((m = this.commitLocationPromise) == null || m.resolve(),
                (this.latestLoadPromise = void 0),
                (this.commitLocationPromise = void 0)),
                d();
            });
          }),
            this.latestLoadPromise = f,
            await f;
          this.latestLoadPromise && f !== this.latestLoadPromise;

        )
          await this.latestLoadPromise;
        this.hasNotFoundMatch() &&
          this.__store.setState((d) => ({ ...d, statusCode: 404 }));
      }),
      (this.startViewTransition = (l) => {
        const u =
          this.shouldViewTransition ?? this.options.defaultViewTransition;
        if (
          (delete this.shouldViewTransition,
          u &&
            typeof document < "u" &&
            "startViewTransition" in document &&
            typeof document.startViewTransition == "function")
        ) {
          let c;
          typeof u == "object" && this.isViewTransitionTypesSupported
            ? (c = { update: l, types: u.types })
            : (c = l),
            document.startViewTransition(c);
        } else l();
      }),
      (this.updateMatch = (l, u) => {
        var c;
        let f;
        const d =
            (c = this.state.pendingMatches) == null
              ? void 0
              : c.find((g) => g.id === l),
          m = this.state.matches.find((g) => g.id === l),
          y = this.state.cachedMatches.find((g) => g.id === l),
          p = d ? "pendingMatches" : m ? "matches" : y ? "cachedMatches" : "";
        return (
          p &&
            this.__store.setState((g) => {
              var v;
              return {
                ...g,
                [p]:
                  (v = g[p]) == null
                    ? void 0
                    : v.map((w) => (w.id === l ? (f = u(w)) : w)),
              };
            }),
          f
        );
      }),
      (this.getMatch = (l) =>
        [
          ...this.state.cachedMatches,
          ...(this.state.pendingMatches ?? []),
          ...this.state.matches,
        ].find((u) => u.id === l)),
      (this.loadMatches = async ({
        location: l,
        matches: u,
        preload: c,
        onReady: f,
        updateMatch: d = this.updateMatch,
        sync: m,
      }) => {
        let y,
          p = !1;
        const g = async () => {
            p || ((p = !0), await f?.());
          },
          v = (z) => !!(c && !this.state.matches.find((D) => D.id === z));
        !this.isServer && !this.state.matches.length && g();
        const w = (z, D) => {
          var k, V, Y, it;
          if (Nc(D) && !D.reloadDocument) throw D;
          if (Ia(D) || nn(D)) {
            if (
              (d(z.id, (tt) => ({
                ...tt,
                status: Ia(D) ? "redirected" : nn(D) ? "notFound" : "error",
                isFetching: !1,
                error: D,
                beforeLoadPromise: void 0,
                loaderPromise: void 0,
              })),
              D.routeId || (D.routeId = z.routeId),
              (k = z.beforeLoadPromise) == null || k.resolve(),
              (V = z.loaderPromise) == null || V.resolve(),
              (Y = z.loadPromise) == null || Y.resolve(),
              Ia(D))
            )
              throw (
                ((p = !0),
                (D = this.resolveRedirect({ ...D, _fromLocation: l })),
                D)
              );
            if (nn(D))
              throw (
                (this._handleNotFound(u, D, { updateMatch: d }),
                (it = this.serverSsr) == null ||
                  it.onMatchSettled({
                    router: this,
                    match: this.getMatch(z.id),
                  }),
                D)
              );
          }
        };
        try {
          await new Promise((z, D) => {
            (async () => {
              var k, V, Y, it;
              try {
                const tt = (X, at, B) => {
                  var N, ut;
                  const { id: st, routeId: J } = u[X],
                    et = this.looseRoutesById[J];
                  if (at instanceof Promise) throw at;
                  (at.routerCode = B), (y = y ?? X), w(this.getMatch(st), at);
                  try {
                    (ut = (N = et.options).onError) == null || ut.call(N, at);
                  } catch (Rt) {
                    (at = Rt), w(this.getMatch(st), at);
                  }
                  d(st, (Rt) => {
                    var rt, E;
                    return (
                      (rt = Rt.beforeLoadPromise) == null || rt.resolve(),
                      (E = Rt.loadPromise) == null || E.resolve(),
                      {
                        ...Rt,
                        error: at,
                        status: "error",
                        isFetching: !1,
                        updatedAt: Date.now(),
                        abortController: new AbortController(),
                        beforeLoadPromise: void 0,
                      }
                    );
                  });
                };
                for (const [X, { id: at, routeId: B }] of u.entries()) {
                  const N = this.getMatch(at),
                    ut = (k = u[X - 1]) == null ? void 0 : k.id,
                    st = this.looseRoutesById[B],
                    J = st.options.pendingMs ?? this.options.defaultPendingMs,
                    et = !!(
                      f &&
                      !this.isServer &&
                      !v(at) &&
                      (st.options.loader || st.options.beforeLoad) &&
                      typeof J == "number" &&
                      J !== 1 / 0 &&
                      (st.options.pendingComponent ??
                        ((V = this.options) == null
                          ? void 0
                          : V.defaultPendingComponent))
                    );
                  let Rt = !0;
                  if (
                    ((N.beforeLoadPromise || N.loaderPromise) &&
                      (et &&
                        setTimeout(() => {
                          try {
                            g();
                          } catch {}
                        }, J),
                      await N.beforeLoadPromise,
                      (Rt = this.getMatch(at).status !== "success")),
                    Rt)
                  ) {
                    try {
                      d(at, (At) => {
                        const ct = At.loadPromise;
                        return {
                          ...At,
                          loadPromise: Ki(() => {
                            ct?.resolve();
                          }),
                          beforeLoadPromise: Ki(),
                        };
                      });
                      const rt = new AbortController();
                      let E;
                      et &&
                        (E = setTimeout(() => {
                          try {
                            g();
                          } catch {}
                        }, J));
                      const { paramsError: q, searchError: I } =
                        this.getMatch(at);
                      q && tt(X, q, "PARSE_PARAMS"),
                        I && tt(X, I, "VALIDATE_SEARCH");
                      const dt = () =>
                        ut
                          ? this.getMatch(ut).context
                          : (this.options.context ?? {});
                      d(at, (At) => ({
                        ...At,
                        isFetching: "beforeLoad",
                        fetchCount: At.fetchCount + 1,
                        abortController: rt,
                        pendingTimeout: E,
                        context: { ...dt(), ...At.__routeContext },
                      }));
                      const {
                          search: S,
                          params: M,
                          context: Z,
                          cause: j,
                        } = this.getMatch(at),
                        $ = v(at),
                        ht = {
                          search: S,
                          abortController: rt,
                          params: M,
                          preload: $,
                          context: Z,
                          location: l,
                          navigate: (At) =>
                            this.navigate({ ...At, _fromLocation: l }),
                          buildLocation: this.buildLocation,
                          cause: $ ? "preload" : j,
                          matches: u,
                        },
                        K =
                          (await ((it = (Y = st.options).beforeLoad) == null
                            ? void 0
                            : it.call(Y, ht))) ?? {};
                      (Ia(K) || nn(K)) && tt(X, K, "BEFORE_LOAD"),
                        d(at, (At) => ({
                          ...At,
                          __beforeLoadContext: K,
                          context: { ...dt(), ...At.__routeContext, ...K },
                          abortController: rt,
                        }));
                    } catch (rt) {
                      tt(X, rt, "BEFORE_LOAD");
                    }
                    d(at, (rt) => {
                      var E;
                      return (
                        (E = rt.beforeLoadPromise) == null || E.resolve(),
                        { ...rt, beforeLoadPromise: void 0, isFetching: !1 }
                      );
                    });
                  }
                }
                const mt = u.slice(0, y),
                  W = [];
                mt.forEach(({ id: X, routeId: at }, B) => {
                  W.push(
                    (async () => {
                      const { loaderPromise: N } = this.getMatch(X);
                      let ut = !1,
                        st = !1;
                      if (N) {
                        await N;
                        const J = this.getMatch(X);
                        J.error && w(J, J.error);
                      } else {
                        const J = W[B - 1],
                          et = this.looseRoutesById[at],
                          Rt = () => {
                            const {
                                params: j,
                                loaderDeps: $,
                                abortController: ht,
                                context: K,
                                cause: At,
                              } = this.getMatch(X),
                              ct = v(X);
                            return {
                              params: j,
                              deps: $,
                              preload: !!ct,
                              parentMatchPromise: J,
                              abortController: ht,
                              context: K,
                              location: l,
                              navigate: (jt) =>
                                this.navigate({ ...jt, _fromLocation: l }),
                              cause: ct ? "preload" : At,
                              route: et,
                            };
                          },
                          rt = Date.now() - this.getMatch(X).updatedAt,
                          E = v(X),
                          q = E
                            ? (et.options.preloadStaleTime ??
                              this.options.defaultPreloadStaleTime ??
                              3e4)
                            : (et.options.staleTime ??
                              this.options.defaultStaleTime ??
                              0),
                          I = et.options.shouldReload,
                          dt = typeof I == "function" ? I(Rt()) : I;
                        d(X, (j) => ({
                          ...j,
                          loaderPromise: Ki(),
                          preload:
                            !!E && !this.state.matches.find(($) => $.id === X),
                        }));
                        const S = async () => {
                            var j, $, ht, K, At, ct, jt, Te, Oe, an, vn;
                            try {
                              const _e = async () => {
                                const ee = this.getMatch(X);
                                ee.minPendingPromise &&
                                  (await ee.minPendingPromise);
                              };
                              try {
                                this.loadRouteChunk(et),
                                  d(X, (Le) => ({
                                    ...Le,
                                    isFetching: "loader",
                                  }));
                                const ee = await (($ = (j = et.options)
                                  .loader) == null
                                  ? void 0
                                  : $.call(j, Rt()));
                                w(this.getMatch(X), ee),
                                  await et._lazyPromise,
                                  await _e();
                                const Be = {
                                    matches: u,
                                    match: this.getMatch(X),
                                    params: this.getMatch(X).params,
                                    loaderData: ee,
                                  },
                                  Bt =
                                    (K = (ht = et.options).head) == null
                                      ? void 0
                                      : K.call(ht, Be),
                                  za = Bt?.meta,
                                  Ce = Bt?.links,
                                  si = Bt?.scripts,
                                  Fn =
                                    (ct = (At = et.options).scripts) == null
                                      ? void 0
                                      : ct.call(At, Be),
                                  me =
                                    (Te = (jt = et.options).headers) == null
                                      ? void 0
                                      : Te.call(jt, { loaderData: ee });
                                d(X, (Le) => ({
                                  ...Le,
                                  error: void 0,
                                  status: "success",
                                  isFetching: !1,
                                  updatedAt: Date.now(),
                                  loaderData: ee,
                                  meta: za,
                                  links: Ce,
                                  headScripts: si,
                                  headers: me,
                                  scripts: Fn,
                                }));
                              } catch (ee) {
                                let Be = ee;
                                await _e(), w(this.getMatch(X), ee);
                                try {
                                  (an = (Oe = et.options).onError) == null ||
                                    an.call(Oe, ee);
                                } catch (Bt) {
                                  (Be = Bt), w(this.getMatch(X), Bt);
                                }
                                d(X, (Bt) => ({
                                  ...Bt,
                                  error: Be,
                                  status: "error",
                                  isFetching: !1,
                                }));
                              }
                              (vn = this.serverSsr) == null ||
                                vn.onMatchSettled({
                                  router: this,
                                  match: this.getMatch(X),
                                }),
                                await et._componentsPromise;
                            } catch (_e) {
                              d(X, (ee) => ({ ...ee, loaderPromise: void 0 })),
                                w(this.getMatch(X), _e);
                            }
                          },
                          { status: M, invalid: Z } = this.getMatch(X);
                        (ut = M === "success" && (Z || (dt ?? rt > q))),
                          (E && et.options.preload === !1) ||
                            (ut && !m
                              ? ((st = !0),
                                (async () => {
                                  try {
                                    await S();
                                    const { loaderPromise: j, loadPromise: $ } =
                                      this.getMatch(X);
                                    j?.resolve(),
                                      $?.resolve(),
                                      d(X, (ht) => ({
                                        ...ht,
                                        loaderPromise: void 0,
                                      }));
                                  } catch (j) {
                                    Nc(j) && (await this.navigate(j));
                                  }
                                })())
                              : (M !== "success" || (ut && m)) && (await S()));
                      }
                      if (!st) {
                        const { loaderPromise: J, loadPromise: et } =
                          this.getMatch(X);
                        J?.resolve(), et?.resolve();
                      }
                      return (
                        d(X, (J) => ({
                          ...J,
                          isFetching: st ? J.isFetching : !1,
                          loaderPromise: st ? J.loaderPromise : void 0,
                          invalid: !1,
                        })),
                        this.getMatch(X)
                      );
                    })(),
                  );
                }),
                  await Promise.all(W),
                  z();
              } catch (tt) {
                D(tt);
              }
            })();
          }),
            await g();
        } catch (z) {
          if (Ia(z) || nn(z)) throw (nn(z) && !c && (await g()), z);
        }
        return u;
      }),
      (this.invalidate = (l) => {
        const u = (c) => {
          var f;
          return (((f = l?.filter) == null ? void 0 : f.call(l, c)) ?? !0)
            ? {
                ...c,
                invalid: !0,
                ...(c.status === "error"
                  ? { status: "pending", error: void 0 }
                  : {}),
              }
            : c;
        };
        return (
          this.__store.setState((c) => {
            var f;
            return {
              ...c,
              matches: c.matches.map(u),
              cachedMatches: c.cachedMatches.map(u),
              pendingMatches:
                (f = c.pendingMatches) == null ? void 0 : f.map(u),
            };
          }),
          this.load({ sync: l?.sync })
        );
      }),
      (this.resolveRedirect = (l) => {
        const u = l;
        return u.href || (u.href = this.buildLocation(u).href), u;
      }),
      (this.clearCache = (l) => {
        const u = l?.filter;
        u !== void 0
          ? this.__store.setState((c) => ({
              ...c,
              cachedMatches: c.cachedMatches.filter((f) => !u(f)),
            }))
          : this.__store.setState((c) => ({ ...c, cachedMatches: [] }));
      }),
      (this.clearExpiredCache = () => {
        const l = (u) => {
          const c = this.looseRoutesById[u.routeId];
          if (!c.options.loader) return !0;
          const f =
            (u.preload
              ? (c.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
              : (c.options.gcTime ?? this.options.defaultGcTime)) ??
            5 * 60 * 1e3;
          return !(u.status !== "error" && Date.now() - u.updatedAt < f);
        };
        this.clearCache({ filter: l });
      }),
      (this.loadRouteChunk = (l) => (
        l._lazyPromise === void 0 &&
          (l.lazyFn
            ? (l._lazyPromise = l.lazyFn().then((u) => {
                const { id: c, ...f } = u.options;
                Object.assign(l.options, f);
              }))
            : (l._lazyPromise = Promise.resolve())),
        l._componentsPromise === void 0 &&
          (l._componentsPromise = l._lazyPromise.then(() =>
            Promise.all(
              Gp.map(async (u) => {
                const c = l.options[u];
                c?.preload && (await c.preload());
              }),
            ),
          )),
        l._componentsPromise
      )),
      (this.preloadRoute = async (l) => {
        const u = this.buildLocation(l);
        let c = this.matchRoutes(u, { throwOnError: !0, preload: !0, dest: l });
        const f = new Set(
            [...this.state.matches, ...(this.state.pendingMatches ?? [])].map(
              (m) => m.id,
            ),
          ),
          d = new Set([...f, ...this.state.cachedMatches.map((m) => m.id)]);
        zc(() => {
          c.forEach((m) => {
            d.has(m.id) ||
              this.__store.setState((y) => ({
                ...y,
                cachedMatches: [...y.cachedMatches, m],
              }));
          });
        });
        try {
          return (
            (c = await this.loadMatches({
              matches: c,
              location: u,
              preload: !0,
              updateMatch: (m, y) => {
                f.has(m)
                  ? (c = c.map((p) => (p.id === m ? y(p) : p)))
                  : this.updateMatch(m, y);
              },
            })),
            c
          );
        } catch (m) {
          if (Ia(m))
            return m.reloadDocument
              ? void 0
              : await this.preloadRoute({ ...m, _fromLocation: u });
          nn(m) || console.error(m);
          return;
        }
      }),
      (this.matchRoute = (l, u) => {
        const c = {
            ...l,
            to: l.to ? this.resolvePathWithBase(l.from || "", l.to) : void 0,
            params: l.params || {},
            leaveParams: !0,
          },
          f = this.buildLocation(c);
        if (u?.pending && this.state.status !== "pending") return !1;
        const m = (u?.pending === void 0 ? !this.state.isLoading : u.pending)
            ? this.latestLocation
            : this.state.resolvedLocation || this.state.location,
          y = Qr(this.basepath, m.pathname, { ...u, to: f.pathname });
        return !y || (l.params && !fl(y, l.params, { partial: !0 }))
          ? !1
          : y && (u?.includeSearch ?? !0)
            ? fl(m.search, f.search, { partial: !0 })
              ? y
              : !1
            : y;
      }),
      (this._handleNotFound = (
        l,
        u,
        { updateMatch: c = this.updateMatch } = {},
      ) => {
        var f;
        const d = this.routesById[u.routeId ?? ""] ?? this.routeTree,
          m = {};
        for (const p of l) m[p.routeId] = p;
        !d.options.notFoundComponent &&
          (f = this.options) != null &&
          f.defaultNotFoundComponent &&
          (d.options.notFoundComponent = this.options.defaultNotFoundComponent),
          wn(d.options.notFoundComponent);
        const y = m[d.id];
        wn(y, "Could not find match for route: " + d.id),
          c(y.id, (p) => ({
            ...p,
            status: "notFound",
            error: u,
            isFetching: !1,
          })),
          u.routerCode === "BEFORE_LOAD" &&
            d.parentRoute &&
            ((u.routeId = d.parentRoute.id),
            this._handleNotFound(l, u, { updateMatch: c }));
      }),
      (this.hasNotFoundMatch = () =>
        this.__store.state.matches.some(
          (l) => l.status === "notFound" || l.globalNotFound,
        )),
      this.update({
        defaultPreloadDelay: 50,
        defaultPendingMs: 1e3,
        defaultPendingMinMs: 500,
        context: void 0,
        ...i,
        caseSensitive: i.caseSensitive ?? !1,
        notFoundMode: i.notFoundMode ?? "fuzzy",
        stringifySearch: i.stringifySearch ?? ig,
        parseSearch: i.parseSearch ?? ag,
      }),
      typeof document < "u" && (window.__TSR_ROUTER__ = this);
  }
  get state() {
    return this.__store.state;
  }
  get looseRoutesById() {
    return this.routesById;
  }
  matchRoutesInternal(i, l) {
    const {
      foundRoute: u,
      matchedRoutes: c,
      routeParams: f,
    } = this.getMatchedRoutes(i, l?.dest);
    let d = !1;
    (u ? u.path !== "/" && f["**"] : ti(i.pathname)) &&
      (this.options.notFoundRoute
        ? c.push(this.options.notFoundRoute)
        : (d = !0));
    const m = (() => {
        if (d) {
          if (this.options.notFoundMode !== "root")
            for (let v = c.length - 1; v >= 0; v--) {
              const w = c[v];
              if (w.children) return w.id;
            }
          return fn;
        }
      })(),
      y = c.map((v) => {
        var w;
        let z;
        const D =
          ((w = v.options.params) == null ? void 0 : w.parse) ??
          v.options.parseParams;
        if (D)
          try {
            const k = D(f);
            Object.assign(f, k);
          } catch (k) {
            if (((z = new og(k.message, { cause: k })), l?.throwOnError))
              throw z;
            return z;
          }
      }),
      p = [],
      g = (v) =>
        v?.id
          ? (v.context ?? this.options.context ?? {})
          : (this.options.context ?? {});
    return (
      c.forEach((v, w) => {
        var z, D;
        const k = p[w - 1],
          [V, Y, it] = (() => {
            const et = k?.search ?? i.search,
              Rt = k?._strictSearch ?? {};
            try {
              const rt = Uc(v.options.validateSearch, { ...et }) ?? {};
              return [{ ...et, ...rt }, { ...Rt, ...rt }, void 0];
            } catch (rt) {
              let E = rt;
              if (
                (rt instanceof su || (E = new su(rt.message, { cause: rt })),
                l?.throwOnError)
              )
                throw E;
              return [et, {}, E];
            }
          })(),
          tt =
            ((D = (z = v.options).loaderDeps) == null
              ? void 0
              : D.call(z, { search: V })) ?? "",
          mt = tt ? JSON.stringify(tt) : "",
          { usedParams: W, interpolatedPath: X } = Gr({
            path: v.fullPath,
            params: f,
            decodeCharMap: this.pathParamsDecodeCharMap,
          }),
          at =
            Gr({
              path: v.id,
              params: f,
              leaveWildcards: !0,
              decodeCharMap: this.pathParamsDecodeCharMap,
            }).interpolatedPath + mt,
          B = this.getMatch(at),
          N = this.state.matches.find((et) => et.routeId === v.id),
          ut = N ? "stay" : "enter";
        let st;
        if (B)
          st = {
            ...B,
            cause: ut,
            params: N ? en(N.params, f) : f,
            _strictParams: W,
            search: en(N ? N.search : B.search, V),
            _strictSearch: Y,
          };
        else {
          const et =
            v.options.loader || v.options.beforeLoad || v.lazyFn || fg(v)
              ? "pending"
              : "success";
          st = {
            id: at,
            index: w,
            routeId: v.id,
            params: N ? en(N.params, f) : f,
            _strictParams: W,
            pathname: $n([this.basepath, X]),
            updatedAt: Date.now(),
            search: N ? en(N.search, V) : V,
            _strictSearch: Y,
            searchError: void 0,
            status: et,
            isFetching: !1,
            error: void 0,
            paramsError: y[w],
            __routeContext: {},
            __beforeLoadContext: {},
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ut,
            loaderDeps: N ? en(N.loaderDeps, tt) : tt,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: v.options.staticData || {},
            loadPromise: Ki(),
            fullPath: v.fullPath,
          };
        }
        l?.preload || (st.globalNotFound = m === v.id), (st.searchError = it);
        const J = g(k);
        (st.context = {
          ...J,
          ...st.__routeContext,
          ...st.__beforeLoadContext,
        }),
          p.push(st);
      }),
      p.forEach((v, w) => {
        var z, D, k, V, Y, it, tt, mt;
        const W = this.looseRoutesById[v.routeId];
        if (!this.getMatch(v.id) && l?._buildLocation !== !0) {
          const at = p[w - 1],
            B = g(at),
            N = {
              deps: v.loaderDeps,
              params: v.params,
              context: B,
              location: i,
              navigate: (ut) => this.navigate({ ...ut, _fromLocation: i }),
              buildLocation: this.buildLocation,
              cause: v.cause,
              abortController: v.abortController,
              preload: !!v.preload,
              matches: p,
            };
          (v.__routeContext =
            ((D = (z = W.options).context) == null ? void 0 : D.call(z, N)) ??
            {}),
            (v.context = {
              ...B,
              ...v.__routeContext,
              ...v.__beforeLoadContext,
            });
        }
        if (v.status === "success") {
          v.headers =
            (V = (k = W.options).headers) == null
              ? void 0
              : V.call(k, { loaderData: v.loaderData });
          const at = {
              matches: p,
              match: v,
              params: v.params,
              loaderData: v.loaderData,
            },
            B = (it = (Y = W.options).head) == null ? void 0 : it.call(Y, at);
          (v.links = B?.links),
            (v.headScripts = B?.scripts),
            (v.meta = B?.meta),
            (v.scripts =
              (mt = (tt = W.options).scripts) == null
                ? void 0
                : mt.call(tt, at));
        }
      }),
      p
    );
  }
}
class su extends Error {}
class og extends Error {}
function cg(s) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: s,
    matches: [],
    pendingMatches: [],
    cachedMatches: [],
    statusCode: 200,
  };
}
function Uc(s, i) {
  if (s == null) return {};
  if ("~standard" in s) {
    const l = s["~standard"].validate(i);
    if (l instanceof Promise) throw new su("Async validation not supported");
    if (l.issues)
      throw new su(JSON.stringify(l.issues, void 0, 2), { cause: l });
    return l.value;
  }
  return "parse" in s ? s.parse(i) : typeof s == "function" ? s(i) : {};
}
const Gp = [
  "component",
  "errorComponent",
  "pendingComponent",
  "notFoundComponent",
];
function fg(s) {
  var i;
  for (const l of Gp) if ((i = s.options[l]) != null && i.preload) return !0;
  return !1;
}
const Rn = Symbol.for("TSR_DEFERRED_PROMISE");
function dg(s, i) {
  const l = s;
  return (
    l[Rn] ||
      ((l[Rn] = { status: "pending" }),
      l
        .then((u) => {
          (l[Rn].status = "success"), (l[Rn].data = u);
        })
        .catch((u) => {
          (l[Rn].status = "error"),
            (l[Rn].error = { data: rg(u), __isServerError: !0 });
        })),
    l
  );
}
class Qp {
  constructor(i) {
    if (
      ((this.init = (l) => {
        var u, c;
        this.originalIndex = l.originalIndex;
        const f = this.options,
          d = !f?.path && !f?.id;
        if (
          ((this.parentRoute =
            (c = (u = this.options).getParentRoute) == null
              ? void 0
              : c.call(u)),
          d)
        )
          this._path = fn;
        else if (!this.parentRoute)
          throw new Error(
            "Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.",
          );
        let m = d ? fn : f?.path;
        m && m !== "/" && (m = uf(m));
        const y = f?.id || m;
        let p = d
          ? fn
          : $n([this.parentRoute.id === fn ? "" : this.parentRoute.id, y]);
        m === fn && (m = "/"), p !== fn && (p = $n(["/", p]));
        const g = p === fn ? "/" : $n([this.parentRoute.fullPath, m]);
        (this._path = m),
          (this._id = p),
          (this._fullPath = g),
          (this._to = g),
          (this._ssr = f?.ssr ?? l.defaultSsr ?? !0);
      }),
      (this.addChildren = (l) => this._addFileChildren(l)),
      (this._addFileChildren = (l) => (
        Array.isArray(l) && (this.children = l),
        typeof l == "object" &&
          l !== null &&
          (this.children = Object.values(l)),
        this
      )),
      (this._addFileTypes = () => this),
      (this.updateLoader = (l) => (Object.assign(this.options, l), this)),
      (this.update = (l) => (Object.assign(this.options, l), this)),
      (this.lazy = (l) => ((this.lazyFn = l), this)),
      (this.options = i || {}),
      (this.isRoot = !i?.getParentRoute),
      i?.id && i?.path)
    )
      throw new Error("Route cannot have both an 'id' and a 'path' option.");
  }
  get to() {
    return this._to;
  }
  get id() {
    return this._id;
  }
  get path() {
    return this._path;
  }
  get fullPath() {
    return this._fullPath;
  }
  get ssr() {
    return this._ssr;
  }
}
class hg extends Qp {
  constructor(i) {
    super(i);
  }
}
const Fi = {
    stringify: (s) =>
      JSON.stringify(s, function (l, u) {
        const c = this[l],
          f = Xr.find((d) => d.stringifyCondition(c));
        return f ? f.stringify(c) : u;
      }),
    parse: (s) =>
      JSON.parse(s, function (l, u) {
        const c = this[l];
        if (Jn(c)) {
          const f = Xr.find((d) => d.parseCondition(c));
          if (f) return f.parse(c);
        }
        return u;
      }),
    encode: (s) => {
      if (Array.isArray(s)) return s.map((l) => Fi.encode(l));
      if (Jn(s))
        return Object.fromEntries(
          Object.entries(s).map(([l, u]) => [l, Fi.encode(u)]),
        );
      const i = Xr.find((l) => l.stringifyCondition(s));
      return i ? i.stringify(s) : s;
    },
    decode: (s) => {
      if (Jn(s)) {
        const i = Xr.find((l) => l.parseCondition(s));
        if (i) return i.parse(s);
      }
      return Array.isArray(s)
        ? s.map((i) => Fi.decode(i))
        : Jn(s)
          ? Object.fromEntries(
              Object.entries(s).map(([i, l]) => [i, Fi.decode(l)]),
            )
          : s;
    },
  },
  il = (s, i, l, u) => ({
    key: s,
    stringifyCondition: i,
    stringify: (c) => ({ [`$${s}`]: l(c) }),
    parseCondition: (c) => Object.hasOwn(c, `$${s}`),
    parse: (c) => u(c[`$${s}`]),
  }),
  Xr = [
    il(
      "undefined",
      (s) => s === void 0,
      () => 0,
      () => {},
    ),
    il(
      "date",
      (s) => s instanceof Date,
      (s) => s.toISOString(),
      (s) => new Date(s),
    ),
    il(
      "error",
      (s) => s instanceof Error,
      (s) => ({ ...s, message: s.message, stack: void 0, cause: s.cause }),
      (s) => Object.assign(new Error(s.message), s),
    ),
    il(
      "formData",
      (s) => s instanceof FormData,
      (s) => {
        const i = {};
        return (
          s.forEach((l, u) => {
            const c = i[u];
            c !== void 0
              ? Array.isArray(c)
                ? c.push(l)
                : (i[u] = [c, l])
              : (i[u] = l);
          }),
          i
        );
      },
      (s) => {
        const i = new FormData();
        return (
          Object.entries(s).forEach(([l, u]) => {
            Array.isArray(u)
              ? u.forEach((c) => i.append(l, c))
              : i.append(l, u);
          }),
          i
        );
      },
    ),
    il(
      "bigint",
      (s) => typeof s == "bigint",
      (s) => s.toString(),
      (s) => BigInt(s),
    ),
  ];
function mg(s) {
  var i, l, u;
  wn((i = window.__TSR_SSR__) == null ? void 0 : i.dehydrated);
  const { manifest: c, dehydratedData: f } = Fi.parse(
    window.__TSR_SSR__.dehydrated,
  );
  (s.ssr = { manifest: c, serializer: Fi }),
    (s.clientSsr = {
      getStreamedValue: (y) => {
        var p;
        if (s.isServer) return;
        const g =
          (p = window.__TSR_SSR__) == null ? void 0 : p.streamedValues[y];
        if (g)
          return (
            g.parsed || (g.parsed = s.ssr.serializer.parse(g.value)), g.parsed
          );
      },
    });
  const d = s.matchRoutes(s.state.location),
    m = Promise.all(
      d.map((y) => {
        const p = s.looseRoutesById[y.routeId];
        return s.loadRouteChunk(p);
      }),
    );
  return (
    d.forEach((y) => {
      var p;
      const g = window.__TSR_SSR__.matches.find((v) => v.id === y.id);
      return (
        g
          ? (Object.assign(y, g),
            g.__beforeLoadContext &&
              (y.__beforeLoadContext = s.ssr.serializer.parse(
                g.__beforeLoadContext,
              )),
            g.loaderData &&
              (y.loaderData = s.ssr.serializer.parse(g.loaderData)),
            g.error && (y.error = s.ssr.serializer.parse(g.error)),
            (p = y.extracted) == null ||
              p.forEach((v) => {
                Ic(y, ["loaderData", ...v.path], v.value);
              }))
          : Object.assign(y, { status: "success", updatedAt: Date.now() }),
        y
      );
    }),
    s.__store.setState((y) => ({ ...y, matches: d })),
    (u = (l = s.options).hydrate) == null || u.call(l, f),
    s.state.matches.forEach((y) => {
      var p, g, v, w, z, D;
      const k = s.looseRoutesById[y.routeId],
        V = s.state.matches[y.index - 1],
        Y = V?.context ?? s.options.context ?? {},
        it = {
          deps: y.loaderDeps,
          params: y.params,
          context: Y,
          location: s.state.location,
          navigate: (X) =>
            s.navigate({ ...X, _fromLocation: s.state.location }),
          buildLocation: s.buildLocation,
          cause: y.cause,
          abortController: y.abortController,
          preload: !1,
          matches: d,
        };
      (y.__routeContext =
        ((g = (p = k.options).context) == null ? void 0 : g.call(p, it)) ?? {}),
        (y.context = { ...Y, ...y.__routeContext, ...y.__beforeLoadContext });
      const tt = {
          matches: s.state.matches,
          match: y,
          params: y.params,
          loaderData: y.loaderData,
        },
        mt = (w = (v = k.options).head) == null ? void 0 : w.call(v, tt),
        W = (D = (z = k.options).scripts) == null ? void 0 : D.call(z, tt);
      (y.meta = mt?.meta),
        (y.links = mt?.links),
        (y.headScripts = mt?.scripts),
        (y.scripts = W);
    }),
    m
  );
}
function Ic(s, i, l) {
  i.length === 1 && (s[i[0]] = l);
  const [u, ...c] = i;
  Array.isArray(s) ? Ic(s[Number(u)], c, l) : Jn(s) && Ic(s[u], c, l);
}
const pg = "modulepreload",
  vg = function (s) {
    return "/_build/" + s;
  },
  dp = {},
  Oa = function (i, l, u) {
    let c = Promise.resolve();
    if (l && l.length > 0) {
      document.getElementsByTagName("link");
      const d = document.querySelector("meta[property=csp-nonce]"),
        m = d?.nonce || d?.getAttribute("nonce");
      c = Promise.allSettled(
        l.map((y) => {
          if (((y = vg(y)), y in dp)) return;
          dp[y] = !0;
          const p = y.endsWith(".css"),
            g = p ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${y}"]${g}`)) return;
          const v = document.createElement("link");
          if (
            ((v.rel = p ? "stylesheet" : pg),
            p || (v.as = "script"),
            (v.crossOrigin = ""),
            (v.href = y),
            m && v.setAttribute("nonce", m),
            document.head.appendChild(v),
            p)
          )
            return new Promise((w, z) => {
              v.addEventListener("load", w),
                v.addEventListener("error", () =>
                  z(new Error(`Unable to preload CSS for ${y}`)),
                );
            });
        }),
      );
    }
    function f(d) {
      const m = new Event("vite:preloadError", { cancelable: !0 });
      if (((m.payload = d), window.dispatchEvent(m), !m.defaultPrevented))
        throw d;
    }
    return c.then((d) => {
      for (const m of d || []) m.status === "rejected" && f(m.reason);
      return i().catch(f);
    });
  };
var jc = { exports: {} },
  Et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hp;
function yg() {
  if (hp) return Et;
  hp = 1;
  var s = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    v = Symbol.iterator;
  function w(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (v && S[v]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    k = {};
  function V(S, M, Z) {
    (this.props = S),
      (this.context = M),
      (this.refs = k),
      (this.updater = Z || z);
  }
  (V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (S, M) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, S, M, "setState");
    }),
    (V.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function Y() {}
  Y.prototype = V.prototype;
  function it(S, M, Z) {
    (this.props = S),
      (this.context = M),
      (this.refs = k),
      (this.updater = Z || z);
  }
  var tt = (it.prototype = new Y());
  (tt.constructor = it), D(tt, V.prototype), (tt.isPureReactComponent = !0);
  var mt = Array.isArray,
    W = { H: null, A: null, T: null, S: null, V: null },
    X = Object.prototype.hasOwnProperty;
  function at(S, M, Z, j, $, ht) {
    return (
      (Z = ht.ref),
      { $$typeof: s, type: S, key: M, ref: Z !== void 0 ? Z : null, props: ht }
    );
  }
  function B(S, M) {
    return at(S.type, M, void 0, void 0, void 0, S.props);
  }
  function N(S) {
    return typeof S == "object" && S !== null && S.$$typeof === s;
  }
  function ut(S) {
    var M = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (Z) {
        return M[Z];
      })
    );
  }
  var st = /\/+/g;
  function J(S, M) {
    return typeof S == "object" && S !== null && S.key != null
      ? ut("" + S.key)
      : M.toString(36);
  }
  function et() {}
  function Rt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(et, et)
            : ((S.status = "pending"),
              S.then(
                function (M) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = M));
                },
                function (M) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = M));
                },
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function rt(S, M, Z, j, $) {
    var ht = typeof S;
    (ht === "undefined" || ht === "boolean") && (S = null);
    var K = !1;
    if (S === null) K = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case s:
            case i:
              K = !0;
              break;
            case g:
              return (K = S._init), rt(K(S._payload), M, Z, j, $);
          }
      }
    if (K)
      return (
        ($ = $(S)),
        (K = j === "" ? "." + J(S, 0) : j),
        mt($)
          ? ((Z = ""),
            K != null && (Z = K.replace(st, "$&/") + "/"),
            rt($, M, Z, "", function (jt) {
              return jt;
            }))
          : $ != null &&
            (N($) &&
              ($ = B(
                $,
                Z +
                  ($.key == null || (S && S.key === $.key)
                    ? ""
                    : ("" + $.key).replace(st, "$&/") + "/") +
                  K,
              )),
            M.push($)),
        1
      );
    K = 0;
    var At = j === "" ? "." : j + ":";
    if (mt(S))
      for (var ct = 0; ct < S.length; ct++)
        (j = S[ct]), (ht = At + J(j, ct)), (K += rt(j, M, Z, ht, $));
    else if (((ct = w(S)), typeof ct == "function"))
      for (S = ct.call(S), ct = 0; !(j = S.next()).done; )
        (j = j.value), (ht = At + J(j, ct++)), (K += rt(j, M, Z, ht, $));
    else if (ht === "object") {
      if (typeof S.then == "function") return rt(Rt(S), M, Z, j, $);
      throw (
        ((M = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (M === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : M) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return K;
  }
  function E(S, M, Z) {
    if (S == null) return S;
    var j = [],
      $ = 0;
    return (
      rt(S, j, "", "", function (ht) {
        return M.call(Z, ht, $++);
      }),
      j
    );
  }
  function q(S) {
    if (S._status === -1) {
      var M = S._result;
      (M = M()),
        M.then(
          function (Z) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = Z));
          },
          function (Z) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = Z));
          },
        ),
        S._status === -1 && ((S._status = 0), (S._result = M));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var I =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var M = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(M)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function dt() {}
  return (
    (Et.Children = {
      map: E,
      forEach: function (S, M, Z) {
        E(
          S,
          function () {
            M.apply(this, arguments);
          },
          Z,
        );
      },
      count: function (S) {
        var M = 0;
        return (
          E(S, function () {
            M++;
          }),
          M
        );
      },
      toArray: function (S) {
        return (
          E(S, function (M) {
            return M;
          }) || []
        );
      },
      only: function (S) {
        if (!N(S))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return S;
      },
    }),
    (Et.Component = V),
    (Et.Fragment = l),
    (Et.Profiler = c),
    (Et.PureComponent = it),
    (Et.StrictMode = u),
    (Et.Suspense = y),
    (Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W),
    (Et.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return W.H.useMemoCache(S);
      },
    }),
    (Et.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (Et.cloneElement = function (S, M, Z) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + ".",
        );
      var j = D({}, S.props),
        $ = S.key,
        ht = void 0;
      if (M != null)
        for (K in (M.ref !== void 0 && (ht = void 0),
        M.key !== void 0 && ($ = "" + M.key),
        M))
          !X.call(M, K) ||
            K === "key" ||
            K === "__self" ||
            K === "__source" ||
            (K === "ref" && M.ref === void 0) ||
            (j[K] = M[K]);
      var K = arguments.length - 2;
      if (K === 1) j.children = Z;
      else if (1 < K) {
        for (var At = Array(K), ct = 0; ct < K; ct++)
          At[ct] = arguments[ct + 2];
        j.children = At;
      }
      return at(S.type, $, void 0, void 0, ht, j);
    }),
    (Et.createContext = function (S) {
      return (
        (S = {
          $$typeof: d,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: f, _context: S }),
        S
      );
    }),
    (Et.createElement = function (S, M, Z) {
      var j,
        $ = {},
        ht = null;
      if (M != null)
        for (j in (M.key !== void 0 && (ht = "" + M.key), M))
          X.call(M, j) &&
            j !== "key" &&
            j !== "__self" &&
            j !== "__source" &&
            ($[j] = M[j]);
      var K = arguments.length - 2;
      if (K === 1) $.children = Z;
      else if (1 < K) {
        for (var At = Array(K), ct = 0; ct < K; ct++)
          At[ct] = arguments[ct + 2];
        $.children = At;
      }
      if (S && S.defaultProps)
        for (j in ((K = S.defaultProps), K)) $[j] === void 0 && ($[j] = K[j]);
      return at(S, ht, void 0, void 0, null, $);
    }),
    (Et.createRef = function () {
      return { current: null };
    }),
    (Et.forwardRef = function (S) {
      return { $$typeof: m, render: S };
    }),
    (Et.isValidElement = N),
    (Et.lazy = function (S) {
      return { $$typeof: g, _payload: { _status: -1, _result: S }, _init: q };
    }),
    (Et.memo = function (S, M) {
      return { $$typeof: p, type: S, compare: M === void 0 ? null : M };
    }),
    (Et.startTransition = function (S) {
      var M = W.T,
        Z = {};
      W.T = Z;
      try {
        var j = S(),
          $ = W.S;
        $ !== null && $(Z, j),
          typeof j == "object" &&
            j !== null &&
            typeof j.then == "function" &&
            j.then(dt, I);
      } catch (ht) {
        I(ht);
      } finally {
        W.T = M;
      }
    }),
    (Et.unstable_useCacheRefresh = function () {
      return W.H.useCacheRefresh();
    }),
    (Et.use = function (S) {
      return W.H.use(S);
    }),
    (Et.useActionState = function (S, M, Z) {
      return W.H.useActionState(S, M, Z);
    }),
    (Et.useCallback = function (S, M) {
      return W.H.useCallback(S, M);
    }),
    (Et.useContext = function (S) {
      return W.H.useContext(S);
    }),
    (Et.useDebugValue = function () {}),
    (Et.useDeferredValue = function (S, M) {
      return W.H.useDeferredValue(S, M);
    }),
    (Et.useEffect = function (S, M, Z) {
      var j = W.H;
      if (typeof Z == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return j.useEffect(S, M);
    }),
    (Et.useId = function () {
      return W.H.useId();
    }),
    (Et.useImperativeHandle = function (S, M, Z) {
      return W.H.useImperativeHandle(S, M, Z);
    }),
    (Et.useInsertionEffect = function (S, M) {
      return W.H.useInsertionEffect(S, M);
    }),
    (Et.useLayoutEffect = function (S, M) {
      return W.H.useLayoutEffect(S, M);
    }),
    (Et.useMemo = function (S, M) {
      return W.H.useMemo(S, M);
    }),
    (Et.useOptimistic = function (S, M) {
      return W.H.useOptimistic(S, M);
    }),
    (Et.useReducer = function (S, M, Z) {
      return W.H.useReducer(S, M, Z);
    }),
    (Et.useRef = function (S) {
      return W.H.useRef(S);
    }),
    (Et.useState = function (S) {
      return W.H.useState(S);
    }),
    (Et.useSyncExternalStore = function (S, M, Z) {
      return W.H.useSyncExternalStore(S, M, Z);
    }),
    (Et.useTransition = function () {
      return W.H.useTransition();
    }),
    (Et.version = "19.1.0"),
    Et
  );
}
var mp;
function Ml() {
  return mp || ((mp = 1), (jc.exports = yg())), jc.exports;
}
var _t = Ml();
const Q = kp(_t),
  F1 = k0({ __proto__: null, default: Q }, [_t]);
function gg({ promise: s }) {
  const i = dg(s);
  if (i[Rn].status === "pending") throw i;
  if (i[Rn].status === "error") throw i[Rn].error;
  return [i[Rn].data, i];
}
function bg(s) {
  const i = P.jsx(_g, { ...s });
  return s.fallback
    ? P.jsx(_t.Suspense, { fallback: s.fallback, children: i })
    : i;
}
function _g(s) {
  const [i] = gg(s);
  return s.children(i);
}
function of(s) {
  const i = s.errorComponent ?? pu;
  return P.jsx(Sg, {
    getResetKey: s.getResetKey,
    onCatch: s.onCatch,
    children: ({ error: l, reset: u }) =>
      l ? _t.createElement(i, { error: l, reset: u }) : s.children,
  });
}
class Sg extends _t.Component {
  constructor() {
    super(...arguments), (this.state = { error: null });
  }
  static getDerivedStateFromProps(i) {
    return { resetKey: i.getResetKey() };
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidUpdate(i, l) {
    l.error && l.resetKey !== this.state.resetKey && this.reset();
  }
  componentDidCatch(i, l) {
    this.props.onCatch && this.props.onCatch(i, l);
  }
  render() {
    return this.props.children({
      error:
        this.state.resetKey !== this.props.getResetKey()
          ? null
          : this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
}
function pu({ error: s }) {
  const [i, l] = _t.useState(!1);
  return P.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      P.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          P.jsx("strong", {
            style: { fontSize: "1rem" },
            children: "Something went wrong!",
          }),
          P.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => l((u) => !u),
            children: i ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      P.jsx("div", { style: { height: ".25rem" } }),
      i
        ? P.jsx("div", {
            children: P.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: s.message
                ? P.jsx("code", { children: s.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
var Bc = { exports: {} },
  Lc = {},
  kc = { exports: {} },
  Hc = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pp;
function xg() {
  if (pp) return Hc;
  pp = 1;
  var s = Ml();
  function i(v, w) {
    return (v === w && (v !== 0 || 1 / v === 1 / w)) || (v !== v && w !== w);
  }
  var l = typeof Object.is == "function" ? Object.is : i,
    u = s.useState,
    c = s.useEffect,
    f = s.useLayoutEffect,
    d = s.useDebugValue;
  function m(v, w) {
    var z = w(),
      D = u({ inst: { value: z, getSnapshot: w } }),
      k = D[0].inst,
      V = D[1];
    return (
      f(
        function () {
          (k.value = z), (k.getSnapshot = w), y(k) && V({ inst: k });
        },
        [v, z, w],
      ),
      c(
        function () {
          return (
            y(k) && V({ inst: k }),
            v(function () {
              y(k) && V({ inst: k });
            })
          );
        },
        [v],
      ),
      d(z),
      z
    );
  }
  function y(v) {
    var w = v.getSnapshot;
    v = v.value;
    try {
      var z = w();
      return !l(v, z);
    } catch {
      return !0;
    }
  }
  function p(v, w) {
    return w();
  }
  var g =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? p
      : m;
  return (
    (Hc.useSyncExternalStore =
      s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : g),
    Hc
  );
}
var vp;
function Eg() {
  return vp || ((vp = 1), (kc.exports = xg())), kc.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yp;
function Tg() {
  if (yp) return Lc;
  yp = 1;
  var s = Ml(),
    i = Eg();
  function l(p, g) {
    return (p === g && (p !== 0 || 1 / p === 1 / g)) || (p !== p && g !== g);
  }
  var u = typeof Object.is == "function" ? Object.is : l,
    c = i.useSyncExternalStore,
    f = s.useRef,
    d = s.useEffect,
    m = s.useMemo,
    y = s.useDebugValue;
  return (
    (Lc.useSyncExternalStoreWithSelector = function (p, g, v, w, z) {
      var D = f(null);
      if (D.current === null) {
        var k = { hasValue: !1, value: null };
        D.current = k;
      } else k = D.current;
      D = m(
        function () {
          function Y(X) {
            if (!it) {
              if (
                ((it = !0), (tt = X), (X = w(X)), z !== void 0 && k.hasValue)
              ) {
                var at = k.value;
                if (z(at, X)) return (mt = at);
              }
              return (mt = X);
            }
            if (((at = mt), u(tt, X))) return at;
            var B = w(X);
            return z !== void 0 && z(at, B)
              ? ((tt = X), at)
              : ((tt = X), (mt = B));
          }
          var it = !1,
            tt,
            mt,
            W = v === void 0 ? null : v;
          return [
            function () {
              return Y(g());
            },
            W === null
              ? void 0
              : function () {
                  return Y(W());
                },
          ];
        },
        [g, v, w, z],
      );
      var V = c(p, D[0], D[1]);
      return (
        d(
          function () {
            (k.hasValue = !0), (k.value = V);
          },
          [V],
        ),
        y(V),
        V
      );
    }),
    Lc
  );
}
var gp;
function Rg() {
  return gp || ((gp = 1), (Bc.exports = Tg())), Bc.exports;
}
var wg = Rg();
function Ag(s, i = (l) => l) {
  return wg.useSyncExternalStoreWithSelector(
    s.subscribe,
    () => s.state,
    () => s.state,
    i,
    Mg,
  );
}
function Mg(s, i) {
  if (Object.is(s, i)) return !0;
  if (typeof s != "object" || s === null || typeof i != "object" || i === null)
    return !1;
  if (s instanceof Map && i instanceof Map) {
    if (s.size !== i.size) return !1;
    for (const [u, c] of s) if (!i.has(u) || !Object.is(c, i.get(u))) return !1;
    return !0;
  }
  if (s instanceof Set && i instanceof Set) {
    if (s.size !== i.size) return !1;
    for (const u of s) if (!i.has(u)) return !1;
    return !0;
  }
  const l = Object.keys(s);
  if (l.length !== Object.keys(i).length) return !1;
  for (let u = 0; u < l.length; u++)
    if (
      !Object.prototype.hasOwnProperty.call(i, l[u]) ||
      !Object.is(s[l[u]], i[l[u]])
    )
      return !1;
  return !0;
}
const qc = _t.createContext(null);
function Xp() {
  return typeof document > "u"
    ? qc
    : window.__TSR_ROUTER_CONTEXT__
      ? window.__TSR_ROUTER_CONTEXT__
      : ((window.__TSR_ROUTER_CONTEXT__ = qc), qc);
}
function pn(s) {
  const i = _t.useContext(Xp());
  return s?.warn, i;
}
function se(s) {
  const i = pn({ warn: s?.router === void 0 }),
    l = s?.router || i,
    u = _t.useRef(void 0);
  return Ag(l.__store, (c) => {
    if (s?.select) {
      if (s.structuralSharing ?? l.options.defaultStructuralSharing) {
        const f = en(u.current, s.select(c));
        return (u.current = f), f;
      }
      return s.select(c);
    }
    return c;
  });
}
const vu = _t.createContext(void 0),
  Og = _t.createContext(void 0);
function Ta(s) {
  const i = _t.useContext(s.from ? Og : vu);
  return se({
    select: (u) => {
      const c = u.matches.find((f) =>
        s.from ? s.from === f.routeId : f.id === i,
      );
      if (
        (wn(
          !((s.shouldThrow ?? !0) && !c),
          `Could not find ${s.from ? `an active match from "${s.from}"` : "a nearest match!"}`,
        ),
        c !== void 0)
      )
        return s.select ? s.select(c) : c;
    },
    structuralSharing: s.structuralSharing,
  });
}
function Kp(s) {
  return Ta({
    from: s.from,
    strict: s.strict,
    structuralSharing: s.structuralSharing,
    select: (i) => (s.select ? s.select(i.loaderData) : i.loaderData),
  });
}
function Jp(s) {
  const { select: i, ...l } = s;
  return Ta({ ...l, select: (u) => (i ? i(u.loaderDeps) : u.loaderDeps) });
}
function $p(s) {
  return Ta({
    from: s.from,
    strict: s.strict,
    shouldThrow: s.shouldThrow,
    structuralSharing: s.structuralSharing,
    select: (i) => (s.select ? s.select(i.params) : i.params),
  });
}
function Pp(s) {
  return Ta({
    from: s.from,
    strict: s.strict,
    shouldThrow: s.shouldThrow,
    structuralSharing: s.structuralSharing,
    select: (i) => (s.select ? s.select(i.search) : i.search),
  });
}
function Fp(s) {
  const { navigate: i } = pn();
  return _t.useCallback((l) => i({ from: s?.from, ...l }), [s?.from, i]);
}
let Cg = class extends Qp {
  constructor(i) {
    super(i),
      (this.useMatch = (l) =>
        Ta({
          select: l?.select,
          from: this.id,
          structuralSharing: l?.structuralSharing,
        })),
      (this.useRouteContext = (l) =>
        Ta({
          ...l,
          from: this.id,
          select: (u) => (l?.select ? l.select(u.context) : u.context),
        })),
      (this.useSearch = (l) =>
        Pp({
          select: l?.select,
          structuralSharing: l?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (l) =>
        $p({
          select: l?.select,
          structuralSharing: l?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (l) => Jp({ ...l, from: this.id })),
      (this.useLoaderData = (l) => Kp({ ...l, from: this.id })),
      (this.useNavigate = () => Fp({ from: this.fullPath })),
      (this.$$typeof = Symbol.for("react.memo"));
  }
};
function Dg(s) {
  return new Cg(s);
}
function zg() {
  return (s) => Ug(s);
}
class Ng extends hg {
  constructor(i) {
    super(i),
      (this.useMatch = (l) =>
        Ta({
          select: l?.select,
          from: this.id,
          structuralSharing: l?.structuralSharing,
        })),
      (this.useRouteContext = (l) =>
        Ta({
          ...l,
          from: this.id,
          select: (u) => (l?.select ? l.select(u.context) : u.context),
        })),
      (this.useSearch = (l) =>
        Pp({
          select: l?.select,
          structuralSharing: l?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (l) =>
        $p({
          select: l?.select,
          structuralSharing: l?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (l) => Jp({ ...l, from: this.id })),
      (this.useLoaderData = (l) => Kp({ ...l, from: this.id })),
      (this.useNavigate = () => Fp({ from: this.fullPath }));
  }
}
function Ug(s) {
  return new Ng(s);
}
function Ca(s) {
  return new jg(s, { silent: !0 }).createRoute;
}
class jg {
  constructor(i, l) {
    (this.path = i),
      (this.createRoute = (u) => {
        this.silent;
        const c = Dg(u);
        return (c.isRoot = !1), c;
      }),
      (this.silent = l?.silent);
  }
}
function Bg(s) {
  const i = se({
    select: (l) => `not-found-${l.location.pathname}-${l.status}`,
  });
  return P.jsx(of, {
    getResetKey: () => i,
    onCatch: (l, u) => {
      var c;
      if (nn(l)) (c = s.onCatch) == null || c.call(s, l, u);
      else throw l;
    },
    errorComponent: ({ error: l }) => {
      var u;
      if (nn(l)) return (u = s.fallback) == null ? void 0 : u.call(s, l);
      throw l;
    },
    children: s.children,
  });
}
function Lg() {
  return P.jsx("p", { children: "Not Found" });
}
function tu(s) {
  return P.jsx(P.Fragment, { children: s.children });
}
function Wp(s, i, l) {
  return i.options.notFoundComponent
    ? P.jsx(i.options.notFoundComponent, { data: l })
    : s.options.defaultNotFoundComponent
      ? P.jsx(s.options.defaultNotFoundComponent, { data: l })
      : P.jsx(Lg, {});
}
var Zc, bp;
function kg() {
  if (bp) return Zc;
  bp = 1;
  const s = {},
    i = s.hasOwnProperty,
    l = (B, N) => {
      for (const ut in B) i.call(B, ut) && N(ut, B[ut]);
    },
    u = (B, N) => (
      N &&
        l(N, (ut, st) => {
          B[ut] = st;
        }),
      B
    ),
    c = (B, N) => {
      const ut = B.length;
      let st = -1;
      for (; ++st < ut; ) N(B[st]);
    },
    f = (B) => "\\u" + ("0000" + B).slice(-4),
    d = (B, N) => {
      let ut = B.toString(16);
      return N ? ut : ut.toUpperCase();
    },
    m = s.toString,
    y = Array.isArray,
    p = (B) => typeof Buffer == "function" && Buffer.isBuffer(B),
    g = (B) => m.call(B) == "[object Object]",
    v = (B) => typeof B == "string" || m.call(B) == "[object String]",
    w = (B) => typeof B == "number" || m.call(B) == "[object Number]",
    z = (B) => typeof B == "bigint",
    D = (B) => typeof B == "function",
    k = (B) => m.call(B) == "[object Map]",
    V = (B) => m.call(B) == "[object Set]",
    Y = {
      "\\": "\\\\",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
    },
    it = /[\\\b\f\n\r\t]/,
    tt = /[0-9]/,
    mt = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
    W = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,
    X =
      /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,
    at = (B, N) => {
      const ut = () => {
          (q = E), ++N.indentLevel, (E = N.indent.repeat(N.indentLevel));
        },
        st = {
          escapeEverything: !1,
          minimal: !1,
          isScriptContext: !1,
          quotes: "single",
          wrap: !1,
          es6: !1,
          json: !1,
          compact: !0,
          lowercaseHex: !1,
          numbers: "decimal",
          indent: "	",
          indentLevel: 0,
          __inline1__: !1,
          __inline2__: !1,
        },
        J = N && N.json;
      J && ((st.quotes = "double"), (st.wrap = !0)),
        (N = u(st, N)),
        N.quotes != "single" &&
          N.quotes != "double" &&
          N.quotes != "backtick" &&
          (N.quotes = "single");
      const et =
          N.quotes == "double" ? '"' : N.quotes == "backtick" ? "`" : "'",
        Rt = N.compact,
        rt = N.lowercaseHex;
      let E = N.indent.repeat(N.indentLevel),
        q = "";
      const I = N.__inline1__,
        dt = N.__inline2__,
        S = Rt
          ? ""
          : `
`;
      let M,
        Z = !0;
      const j = N.numbers == "binary",
        $ = N.numbers == "octal",
        ht = N.numbers == "decimal",
        K = N.numbers == "hexadecimal";
      if ((J && B && D(B.toJSON) && (B = B.toJSON()), !v(B))) {
        if (k(B))
          return B.size == 0
            ? "new Map()"
            : (Rt || ((N.__inline1__ = !0), (N.__inline2__ = !1)),
              "new Map(" + at(Array.from(B), N) + ")");
        if (V(B))
          return B.size == 0
            ? "new Set()"
            : "new Set(" + at(Array.from(B), N) + ")";
        if (p(B))
          return B.length == 0
            ? "Buffer.from([])"
            : "Buffer.from(" + at(Array.from(B), N) + ")";
        if (y(B))
          return (
            (M = []),
            (N.wrap = !0),
            I && ((N.__inline1__ = !1), (N.__inline2__ = !0)),
            dt || ut(),
            c(B, (ct) => {
              (Z = !1),
                dt && (N.__inline2__ = !1),
                M.push((Rt || dt ? "" : E) + at(ct, N));
            }),
            Z
              ? "[]"
              : dt
                ? "[" + M.join(", ") + "]"
                : "[" + S + M.join("," + S) + S + (Rt ? "" : q) + "]"
          );
        if (w(B) || z(B)) {
          if (J) return JSON.stringify(Number(B));
          let ct;
          if (ht) ct = String(B);
          else if (K) {
            let jt = B.toString(16);
            rt || (jt = jt.toUpperCase()), (ct = "0x" + jt);
          } else
            j ? (ct = "0b" + B.toString(2)) : $ && (ct = "0o" + B.toString(8));
          return z(B) ? ct + "n" : ct;
        } else
          return z(B)
            ? J
              ? JSON.stringify(Number(B))
              : B + "n"
            : g(B)
              ? ((M = []),
                (N.wrap = !0),
                ut(),
                l(B, (ct, jt) => {
                  (Z = !1),
                    M.push(
                      (Rt ? "" : E) +
                        at(ct, N) +
                        ":" +
                        (Rt ? "" : " ") +
                        at(jt, N),
                    );
                }),
                Z ? "{}" : "{" + S + M.join("," + S) + S + (Rt ? "" : q) + "}")
              : J
                ? JSON.stringify(B) || "null"
                : String(B);
      }
      const At = N.escapeEverything ? W : X;
      return (
        (M = B.replace(At, (ct, jt, Te, Oe, an, vn) => {
          if (jt) {
            if (N.minimal) return jt;
            const ee = jt.charCodeAt(0),
              Be = jt.charCodeAt(1);
            if (N.es6) {
              const Bt = (ee - 55296) * 1024 + Be - 56320 + 65536;
              return "\\u{" + d(Bt, rt) + "}";
            }
            return f(d(ee, rt)) + f(d(Be, rt));
          }
          if (Te) return f(d(Te.charCodeAt(0), rt));
          if (ct == "\0" && !J && !tt.test(vn.charAt(an + 1))) return "\\0";
          if (Oe) return Oe == et || N.escapeEverything ? "\\" + Oe : Oe;
          if (it.test(ct)) return Y[ct];
          if (N.minimal && !mt.test(ct)) return ct;
          const _e = d(ct.charCodeAt(0), rt);
          return J || _e.length > 2 ? f(_e) : "\\x" + ("00" + _e).slice(-2);
        })),
        et == "`" && (M = M.replace(/\$\{/g, "\\${")),
        N.isScriptContext &&
          (M = M.replace(/<\/(script|style)/gi, "<\\/$1").replace(
            /<!--/g,
            J ? "\\u003C!--" : "\\x3C!--",
          )),
        N.wrap && (M = et + M + et),
        M
      );
    };
  return (at.version = "3.0.2"), (Zc = at), Zc;
}
kg();
function Hg({ children: s, log: i }) {
  return typeof document < "u"
    ? null
    : P.jsx("script", {
        className: "tsr-once",
        dangerouslySetInnerHTML: {
          __html: [
            s,
            "",
            'if (typeof __TSR_SSR__ !== "undefined") __TSR_SSR__.cleanScripts()',
          ].filter(Boolean).join(`
`),
        },
      });
}
function qg() {
  const s = pn(),
    l = (s.options.getScrollRestorationKey || Wc)(s.latestLocation),
    u = l !== Wc(s.latestLocation) ? l : null;
  return !s.isScrollRestoring || !s.isServer
    ? null
    : P.jsx(Hg, {
        children: `(${Yp.toString()})(${JSON.stringify(au)},${JSON.stringify(u)}, undefined, true)`,
        log: !1,
      });
}
const Ip = _t.memo(function ({ matchId: i }) {
  var l, u;
  const c = pn(),
    f = se({
      select: (Y) => {
        var it;
        return (it = Y.matches.find((tt) => tt.id === i)) == null
          ? void 0
          : it.routeId;
      },
    });
  wn(f);
  const d = c.routesById[f],
    m = d.options.pendingComponent ?? c.options.defaultPendingComponent,
    y = m ? P.jsx(m, {}) : null,
    p = d.options.errorComponent ?? c.options.defaultErrorComponent,
    g = d.options.onCatch ?? c.options.defaultOnCatch,
    v = d.isRoot
      ? (d.options.notFoundComponent ??
        ((l = c.options.notFoundRoute) == null ? void 0 : l.options.component))
      : d.options.notFoundComponent,
    w =
      (!d.isRoot || d.options.wrapInSuspense) &&
      (d.options.wrapInSuspense ??
        m ??
        ((u = d.options.errorComponent) == null ? void 0 : u.preload))
        ? _t.Suspense
        : tu,
    z = p ? of : tu,
    D = v ? Bg : tu,
    k = se({ select: (Y) => Y.loadedAt }),
    V = se({
      select: (Y) => {
        var it;
        const tt = Y.matches.findIndex((mt) => mt.id === i);
        return (it = Y.matches[tt - 1]) == null ? void 0 : it.routeId;
      },
    });
  return P.jsxs(P.Fragment, {
    children: [
      P.jsx(vu.Provider, {
        value: i,
        children: P.jsx(w, {
          fallback: y,
          children: P.jsx(z, {
            getResetKey: () => k,
            errorComponent: p || pu,
            onCatch: (Y, it) => {
              if (nn(Y)) throw Y;
              g?.(Y, it);
            },
            children: P.jsx(D, {
              fallback: (Y) => {
                if (
                  !v ||
                  (Y.routeId && Y.routeId !== f) ||
                  (!Y.routeId && !d.isRoot)
                )
                  throw Y;
                return _t.createElement(v, Y);
              },
              children: P.jsx(Vg, { matchId: i }),
            }),
          }),
        }),
      }),
      V === fn && c.options.scrollRestoration
        ? P.jsxs(P.Fragment, { children: [P.jsx(Zg, {}), P.jsx(qg, {})] })
        : null,
    ],
  });
});
function Zg() {
  var s;
  const i = pn(),
    l = _t.useRef(void 0);
  return P.jsx(
    "script",
    {
      suppressHydrationWarning: !0,
      ref: (u) => {
        var c;
        u &&
          (l.current === void 0 ||
            l.current.href !==
              ((c = i.state.resolvedLocation) == null ? void 0 : c.href)) &&
          (i.emit({ type: "onRendered", ...es(i.state) }),
          (l.current = i.state.resolvedLocation));
      },
    },
    (s = i.state.resolvedLocation) == null ? void 0 : s.state.key,
  );
}
const Vg = _t.memo(function ({ matchId: i }) {
    var l, u, c;
    const f = pn(),
      {
        match: d,
        key: m,
        routeId: y,
      } = se({
        select: (w) => {
          const z = w.matches.findIndex((tt) => tt.id === i),
            D = w.matches[z],
            k = D.routeId,
            V =
              f.routesById[k].options.remountDeps ??
              f.options.defaultRemountDeps,
            Y = V?.({
              routeId: k,
              loaderDeps: D.loaderDeps,
              params: D._strictParams,
              search: D._strictSearch,
            });
          return {
            key: Y ? JSON.stringify(Y) : void 0,
            routeId: k,
            match: Fc(D, ["id", "status", "error"]),
          };
        },
        structuralSharing: !0,
      }),
      p = f.routesById[y],
      g = _t.useMemo(() => {
        const w = p.options.component ?? f.options.defaultComponent;
        return w ? P.jsx(w, {}, m) : P.jsx(cf, {});
      }, [m, p.options.component, f.options.defaultComponent]),
      v = (p.options.errorComponent ?? f.options.defaultErrorComponent) || pu;
    if (d.status === "notFound") return wn(nn(d.error)), Wp(f, p, d.error);
    if (d.status === "redirected")
      throw (
        (wn(Ia(d.error)),
        (l = f.getMatch(d.id)) == null ? void 0 : l.loadPromise)
      );
    if (d.status === "error") {
      if (f.isServer)
        return P.jsx(v, {
          error: d.error,
          reset: void 0,
          info: { componentStack: "" },
        });
      throw d.error;
    }
    if (d.status === "pending") {
      const w = p.options.pendingMinMs ?? f.options.defaultPendingMinMs;
      if (
        w &&
        !((u = f.getMatch(d.id)) != null && u.minPendingPromise) &&
        !f.isServer
      ) {
        const z = Ki();
        Promise.resolve().then(() => {
          f.updateMatch(d.id, (D) => ({ ...D, minPendingPromise: z }));
        }),
          setTimeout(() => {
            z.resolve(),
              f.updateMatch(d.id, (D) => ({ ...D, minPendingPromise: void 0 }));
          }, w);
      }
      throw (c = f.getMatch(d.id)) == null ? void 0 : c.loadPromise;
    }
    return g;
  }),
  cf = _t.memo(function () {
    const i = pn(),
      l = _t.useContext(vu),
      u = se({
        select: (p) => {
          var g;
          return (g = p.matches.find((v) => v.id === l)) == null
            ? void 0
            : g.routeId;
        },
      }),
      c = i.routesById[u],
      f = se({
        select: (p) => {
          const v = p.matches.find((w) => w.id === l);
          return wn(v), v.globalNotFound;
        },
      }),
      d = se({
        select: (p) => {
          var g;
          const v = p.matches,
            w = v.findIndex((z) => z.id === l);
          return (g = v[w + 1]) == null ? void 0 : g.id;
        },
      });
    if (f) return Wp(i, c, void 0);
    if (!d) return null;
    const m = P.jsx(Ip, { matchId: d }),
      y = i.options.defaultPendingComponent
        ? P.jsx(i.options.defaultPendingComponent, {})
        : null;
    return l === fn ? P.jsx(_t.Suspense, { fallback: y, children: m }) : m;
  });
function Yg(s) {
  return typeof s?.message != "string"
    ? !1
    : s.message.startsWith("Failed to fetch dynamically imported module") ||
        s.message.startsWith("error loading dynamically imported module") ||
        s.message.startsWith("Importing a module script failed");
}
function Gg({ children: s, fallback: i = null }) {
  return Xg()
    ? P.jsx(P.Fragment, { children: s })
    : P.jsx(P.Fragment, { children: i });
}
function Qg() {
  return () => {};
}
function Xg() {
  return _t.useSyncExternalStore(
    Qg,
    () => !0,
    () => !1,
  );
}
function Da(s, i, l) {
  let u, c, f, d;
  const m = () =>
      typeof document > "u" && l?.() === !1
        ? ((c = () => null), Promise.resolve())
        : (u ||
            (u = s()
              .then((p) => {
                (u = void 0), (c = p[i]);
              })
              .catch((p) => {
                if (
                  ((f = p),
                  Yg(f) &&
                    f instanceof Error &&
                    typeof window < "u" &&
                    typeof sessionStorage < "u")
                ) {
                  const g = `tanstack_router_reload:${f.message}`;
                  sessionStorage.getItem(g) ||
                    (sessionStorage.setItem(g, "1"), (d = !0));
                }
              })),
          u),
    y = function (g) {
      if (d) throw (window.location.reload(), new Promise(() => {}));
      if (f) throw f;
      if (!c) throw m();
      return l?.() === !1
        ? P.jsx(Gg, {
            fallback: P.jsx(cf, {}),
            children: _t.createElement(c, g),
          })
        : _t.createElement(c, g);
    };
  return (y.preload = m), y;
}
var Vc = { exports: {} },
  xe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _p;
function Kg() {
  if (_p) return xe;
  _p = 1;
  var s = Ml();
  function i(y) {
    var p = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        p += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var u = {
      d: {
        f: l,
        r: function () {
          throw Error(i(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function f(y, p, g) {
    var v =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: v == null ? null : "" + v,
      children: y,
      containerInfo: p,
      implementation: g,
    };
  }
  var d = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(y, p) {
    if (y === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (xe.createPortal = function (y, p) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(i(299));
      return f(y, p, null, g);
    }),
    (xe.flushSync = function (y) {
      var p = d.T,
        g = u.p;
      try {
        if (((d.T = null), (u.p = 2), y)) return y();
      } finally {
        (d.T = p), (u.p = g), u.d.f();
      }
    }),
    (xe.preconnect = function (y, p) {
      typeof y == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        u.d.C(y, p));
    }),
    (xe.prefetchDNS = function (y) {
      typeof y == "string" && u.d.D(y);
    }),
    (xe.preinit = function (y, p) {
      if (typeof y == "string" && p && typeof p.as == "string") {
        var g = p.as,
          v = m(g, p.crossOrigin),
          w = typeof p.integrity == "string" ? p.integrity : void 0,
          z = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        g === "style"
          ? u.d.S(y, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: v,
              integrity: w,
              fetchPriority: z,
            })
          : g === "script" &&
            u.d.X(y, {
              crossOrigin: v,
              integrity: w,
              fetchPriority: z,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (xe.preinitModule = function (y, p) {
      if (typeof y == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var g = m(p.as, p.crossOrigin);
            u.d.M(y, {
              crossOrigin: g,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && u.d.M(y);
    }),
    (xe.preload = function (y, p) {
      if (
        typeof y == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var g = p.as,
          v = m(g, p.crossOrigin);
        u.d.L(y, g, {
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (xe.preloadModule = function (y, p) {
      if (typeof y == "string")
        if (p) {
          var g = m(p.as, p.crossOrigin);
          u.d.m(y, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: g,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else u.d.m(y);
    }),
    (xe.requestFormReset = function (y) {
      u.d.r(y);
    }),
    (xe.unstable_batchedUpdates = function (y, p) {
      return y(p);
    }),
    (xe.useFormState = function (y, p, g) {
      return d.H.useFormState(y, p, g);
    }),
    (xe.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (xe.version = "19.1.0"),
    xe
  );
}
var Sp;
function tv() {
  if (Sp) return Vc.exports;
  Sp = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), (Vc.exports = Kg()), Vc.exports;
}
var Jg = tv();
const $g = kp(Jg),
  Kr = typeof window < "u" ? _t.useLayoutEffect : _t.useEffect;
function Yc(s) {
  const i = _t.useRef({ value: s, prev: null }),
    l = i.current.value;
  return s !== l && (i.current = { value: s, prev: l }), i.current.prev;
}
function I1(s, i, l = {}, u = {}) {
  const c = _t.useRef(typeof IntersectionObserver == "function"),
    f = _t.useRef(null);
  return (
    _t.useEffect(() => {
      if (!(!s.current || !c.current || u.disabled))
        return (
          (f.current = new IntersectionObserver(([d]) => {
            i(d);
          }, l)),
          f.current.observe(s.current),
          () => {
            var d;
            (d = f.current) == null || d.disconnect();
          }
        );
    }, [i, l, u.disabled, s]),
    f.current
  );
}
function tS(s) {
  const i = _t.useRef(null);
  return _t.useImperativeHandle(s, () => i.current, []), i;
}
function Pg() {
  const s = pn(),
    i = _t.useRef({ router: s, mounted: !1 }),
    l = se({ select: ({ isLoading: v }) => v }),
    [u, c] = _t.useState(!1),
    f = se({
      select: (v) => v.matches.some((w) => w.status === "pending"),
      structuralSharing: !0,
    }),
    d = Yc(l),
    m = l || u || f,
    y = Yc(m),
    p = l || f,
    g = Yc(p);
  return (
    s.isServer ||
      (s.startTransition = (v) => {
        c(!0),
          _t.startTransition(() => {
            v(), c(!1);
          });
      }),
    _t.useEffect(() => {
      const v = s.history.subscribe(s.load),
        w = s.buildLocation({
          to: s.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        ti(s.latestLocation.href) !== ti(w.href) &&
          s.commitLocation({ ...w, replace: !0 }),
        () => {
          v();
        }
      );
    }, [s, s.history]),
    Kr(() => {
      if (
        (typeof window < "u" && s.clientSsr) ||
        (i.current.router === s && i.current.mounted)
      )
        return;
      (i.current = { router: s, mounted: !0 }),
        (async () => {
          try {
            await s.load();
          } catch (w) {
            console.error(w);
          }
        })();
    }, [s]),
    Kr(() => {
      d && !l && s.emit({ type: "onLoad", ...es(s.state) });
    }, [d, s, l]),
    Kr(() => {
      g && !p && s.emit({ type: "onBeforeRouteMount", ...es(s.state) });
    }, [p, g, s]),
    Kr(() => {
      y &&
        !m &&
        (s.emit({ type: "onResolved", ...es(s.state) }),
        s.__store.setState((v) => ({
          ...v,
          status: "idle",
          resolvedLocation: v.location,
        })));
    }, [m, y, s]),
    null
  );
}
function Fg() {
  const s = pn(),
    i = s.options.defaultPendingComponent
      ? P.jsx(s.options.defaultPendingComponent, {})
      : null,
    l = s.isServer || (typeof document < "u" && s.clientSsr) ? tu : _t.Suspense,
    u = P.jsxs(l, { fallback: i, children: [P.jsx(Pg, {}), P.jsx(Wg, {})] });
  return s.options.InnerWrap ? P.jsx(s.options.InnerWrap, { children: u }) : u;
}
function Wg() {
  const s = se({
      select: (l) => {
        var u;
        return (u = l.matches[0]) == null ? void 0 : u.id;
      },
    }),
    i = se({ select: (l) => l.loadedAt });
  return P.jsx(vu.Provider, {
    value: s,
    children: P.jsx(of, {
      getResetKey: () => i,
      errorComponent: pu,
      onCatch: (l) => {
        l.message || l.toString();
      },
      children: s ? P.jsx(Ip, { matchId: s }) : null,
    }),
  });
}
function eS(s) {
  return se({
    select: (i) => {
      const l = i.matches;
      return s?.select ? s.select(l) : l;
    },
    structuralSharing: s?.structuralSharing,
  });
}
const Ig = (s) => new tb(s);
class tb extends ug {
  constructor(i) {
    super(i);
  }
}
function eb({ router: s, children: i, ...l }) {
  s.update({
    ...s.options,
    ...l,
    context: { ...s.options.context, ...l.context },
  });
  const u = Xp(),
    c = P.jsx(u.Provider, { value: s, children: i });
  return s.options.Wrap ? P.jsx(s.options.Wrap, { children: c }) : c;
}
function nb({ router: s, ...i }) {
  return P.jsx(eb, { router: s, ...i, children: P.jsx(Fg, {}) });
}
function ev({ tag: s, attrs: i, children: l }) {
  switch (s) {
    case "title":
      return P.jsx("title", {
        ...i,
        suppressHydrationWarning: !0,
        children: l,
      });
    case "meta":
      return P.jsx("meta", { ...i, suppressHydrationWarning: !0 });
    case "link":
      return P.jsx("link", { ...i, suppressHydrationWarning: !0 });
    case "style":
      return P.jsx("style", { ...i, dangerouslySetInnerHTML: { __html: l } });
    case "script":
      return i && i.src
        ? P.jsx("script", { ...i, suppressHydrationWarning: !0 })
        : typeof l == "string"
          ? P.jsx("script", {
              ...i,
              dangerouslySetInnerHTML: { __html: l },
              suppressHydrationWarning: !0,
            })
          : null;
    default:
      return null;
  }
}
const ab = () => {
  const s = pn(),
    i = se({ select: (d) => d.matches.map((m) => m.meta).filter(Boolean) }),
    l = _t.useMemo(() => {
      const d = [],
        m = {};
      let y;
      return (
        [...i].reverse().forEach((p) => {
          [...p].reverse().forEach((g) => {
            if (g)
              if (g.title) y || (y = { tag: "title", children: g.title });
              else {
                const v = g.name ?? g.property;
                if (v) {
                  if (m[v]) return;
                  m[v] = !0;
                }
                d.push({ tag: "meta", attrs: { ...g } });
              }
          });
        }),
        y && d.push(y),
        d.reverse(),
        d
      );
    }, [i]),
    u = se({
      select: (d) =>
        d.matches
          .map((m) => m.links)
          .filter(Boolean)
          .flat(1)
          .map((m) => ({ tag: "link", attrs: { ...m } })),
      structuralSharing: !0,
    }),
    c = se({
      select: (d) => {
        const m = [];
        return (
          d.matches
            .map((y) => s.looseRoutesById[y.routeId])
            .forEach((y) => {
              var p, g, v, w;
              return (w =
                (v =
                  (g = (p = s.ssr) == null ? void 0 : p.manifest) == null
                    ? void 0
                    : g.routes[y.id]) == null
                  ? void 0
                  : v.preloads) == null
                ? void 0
                : w.filter(Boolean).forEach((z) => {
                    m.push({
                      tag: "link",
                      attrs: { rel: "modulepreload", href: z },
                    });
                  });
            }),
          m
        );
      },
      structuralSharing: !0,
    }),
    f = se({
      select: (d) =>
        d.matches
          .map((m) => m.headScripts)
          .flat(1)
          .filter(Boolean)
          .map(({ children: m, ...y }) => ({
            tag: "script",
            attrs: { ...y },
            children: m,
          })),
      structuralSharing: !0,
    });
  return sb([...l, ...c, ...u, ...f], (d) => JSON.stringify(d));
};
function ib() {
  return ab().map((i) =>
    _t.createElement(ev, { ...i, key: `tsr-meta-${JSON.stringify(i)}` }),
  );
}
function sb(s, i) {
  const l = new Set();
  return s.filter((u) => {
    const c = i(u);
    return l.has(c) ? !1 : (l.add(c), !0);
  });
}
const lb = () => {
  const s = pn(),
    i = se({
      select: (c) => {
        var f;
        const d = [],
          m = (f = s.ssr) == null ? void 0 : f.manifest;
        return m
          ? (c.matches
              .map((y) => s.looseRoutesById[y.routeId])
              .forEach((y) => {
                var p, g;
                return (g = (p = m.routes[y.id]) == null ? void 0 : p.assets) ==
                  null
                  ? void 0
                  : g
                      .filter((v) => v.tag === "script")
                      .forEach((v) => {
                        d.push({
                          tag: "script",
                          attrs: v.attrs,
                          children: v.children,
                        });
                      });
              }),
            d)
          : [];
      },
      structuralSharing: !0,
    }),
    { scripts: l } = se({
      select: (c) => ({
        scripts: c.matches
          .map((f) => f.scripts)
          .flat(1)
          .filter(Boolean)
          .map(({ children: f, ...d }) => ({
            tag: "script",
            attrs: { ...d, suppressHydrationWarning: !0 },
            children: f,
          })),
      }),
    }),
    u = [...l, ...i];
  return P.jsx(P.Fragment, {
    children: u.map((c, f) =>
      _t.createElement(ev, { ...c, key: `tsr-scripts-${c.tag}-${f}` }),
    ),
  });
};
let Jr;
function rb(s) {
  return (
    Jr ||
      (s.router.state.matches.length
        ? (Jr = Promise.resolve())
        : (Jr = mg(s.router))),
    P.jsx(bg, { promise: Jr, children: () => P.jsx(nb, { router: s.router }) })
  );
}
var Gc = { exports: {} },
  sl = {},
  Qc = { exports: {} },
  Xc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xp;
function ub() {
  return (
    xp ||
      ((xp = 1),
      (function (s) {
        function i(E, q) {
          var I = E.length;
          E.push(q);
          t: for (; 0 < I; ) {
            var dt = (I - 1) >>> 1,
              S = E[dt];
            if (0 < c(S, q)) (E[dt] = q), (E[I] = S), (I = dt);
            else break t;
          }
        }
        function l(E) {
          return E.length === 0 ? null : E[0];
        }
        function u(E) {
          if (E.length === 0) return null;
          var q = E[0],
            I = E.pop();
          if (I !== q) {
            E[0] = I;
            t: for (var dt = 0, S = E.length, M = S >>> 1; dt < M; ) {
              var Z = 2 * (dt + 1) - 1,
                j = E[Z],
                $ = Z + 1,
                ht = E[$];
              if (0 > c(j, I))
                $ < S && 0 > c(ht, j)
                  ? ((E[dt] = ht), (E[$] = I), (dt = $))
                  : ((E[dt] = j), (E[Z] = I), (dt = Z));
              else if ($ < S && 0 > c(ht, I))
                (E[dt] = ht), (E[$] = I), (dt = $);
              else break t;
            }
          }
          return q;
        }
        function c(E, q) {
          var I = E.sortIndex - q.sortIndex;
          return I !== 0 ? I : E.id - q.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          s.unstable_now = function () {
            return f.now();
          };
        } else {
          var d = Date,
            m = d.now();
          s.unstable_now = function () {
            return d.now() - m;
          };
        }
        var y = [],
          p = [],
          g = 1,
          v = null,
          w = 3,
          z = !1,
          D = !1,
          k = !1,
          V = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          it = typeof clearTimeout == "function" ? clearTimeout : null,
          tt = typeof setImmediate < "u" ? setImmediate : null;
        function mt(E) {
          for (var q = l(p); q !== null; ) {
            if (q.callback === null) u(p);
            else if (q.startTime <= E)
              u(p), (q.sortIndex = q.expirationTime), i(y, q);
            else break;
            q = l(p);
          }
        }
        function W(E) {
          if (((k = !1), mt(E), !D))
            if (l(y) !== null) (D = !0), X || ((X = !0), J());
            else {
              var q = l(p);
              q !== null && rt(W, q.startTime - E);
            }
        }
        var X = !1,
          at = -1,
          B = 5,
          N = -1;
        function ut() {
          return V ? !0 : !(s.unstable_now() - N < B);
        }
        function st() {
          if (((V = !1), X)) {
            var E = s.unstable_now();
            N = E;
            var q = !0;
            try {
              t: {
                (D = !1), k && ((k = !1), it(at), (at = -1)), (z = !0);
                var I = w;
                try {
                  e: {
                    for (
                      mt(E), v = l(y);
                      v !== null && !(v.expirationTime > E && ut());

                    ) {
                      var dt = v.callback;
                      if (typeof dt == "function") {
                        (v.callback = null), (w = v.priorityLevel);
                        var S = dt(v.expirationTime <= E);
                        if (((E = s.unstable_now()), typeof S == "function")) {
                          (v.callback = S), mt(E), (q = !0);
                          break e;
                        }
                        v === l(y) && u(y), mt(E);
                      } else u(y);
                      v = l(y);
                    }
                    if (v !== null) q = !0;
                    else {
                      var M = l(p);
                      M !== null && rt(W, M.startTime - E), (q = !1);
                    }
                  }
                  break t;
                } finally {
                  (v = null), (w = I), (z = !1);
                }
                q = void 0;
              }
            } finally {
              q ? J() : (X = !1);
            }
          }
        }
        var J;
        if (typeof tt == "function")
          J = function () {
            tt(st);
          };
        else if (typeof MessageChannel < "u") {
          var et = new MessageChannel(),
            Rt = et.port2;
          (et.port1.onmessage = st),
            (J = function () {
              Rt.postMessage(null);
            });
        } else
          J = function () {
            Y(st, 0);
          };
        function rt(E, q) {
          at = Y(function () {
            E(s.unstable_now());
          }, q);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (E) {
            E.callback = null;
          }),
          (s.unstable_forceFrameRate = function (E) {
            0 > E || 125 < E
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (B = 0 < E ? Math.floor(1e3 / E) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (s.unstable_next = function (E) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = w;
            }
            var I = w;
            w = q;
            try {
              return E();
            } finally {
              w = I;
            }
          }),
          (s.unstable_requestPaint = function () {
            V = !0;
          }),
          (s.unstable_runWithPriority = function (E, q) {
            switch (E) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                E = 3;
            }
            var I = w;
            w = E;
            try {
              return q();
            } finally {
              w = I;
            }
          }),
          (s.unstable_scheduleCallback = function (E, q, I) {
            var dt = s.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay),
                  (I = typeof I == "number" && 0 < I ? dt + I : dt))
                : (I = dt),
              E)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = I + S),
              (E = {
                id: g++,
                callback: q,
                priorityLevel: E,
                startTime: I,
                expirationTime: S,
                sortIndex: -1,
              }),
              I > dt
                ? ((E.sortIndex = I),
                  i(p, E),
                  l(y) === null &&
                    E === l(p) &&
                    (k ? (it(at), (at = -1)) : (k = !0), rt(W, I - dt)))
                : ((E.sortIndex = S),
                  i(y, E),
                  D || z || ((D = !0), X || ((X = !0), J()))),
              E
            );
          }),
          (s.unstable_shouldYield = ut),
          (s.unstable_wrapCallback = function (E) {
            var q = w;
            return function () {
              var I = w;
              w = q;
              try {
                return E.apply(this, arguments);
              } finally {
                w = I;
              }
            };
          });
      })(Xc)),
    Xc
  );
}
var Ep;
function ob() {
  return Ep || ((Ep = 1), (Qc.exports = ub())), Qc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tp;
function cb() {
  if (Tp) return sl;
  Tp = 1;
  var s = ob(),
    i = Ml(),
    l = tv();
  function u(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (f(t) !== t) throw Error(u(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(u(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var o = r.alternate;
      if (o === null) {
        if (((a = r.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (r.child === o.child) {
        for (o = r.child; o; ) {
          if (o === n) return m(r), t;
          if (o === a) return m(r), e;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== a.return) (n = r), (a = o);
      else {
        for (var h = !1, b = r.child; b; ) {
          if (b === n) {
            (h = !0), (n = r), (a = o);
            break;
          }
          if (b === a) {
            (h = !0), (a = r), (n = o);
            break;
          }
          b = b.sibling;
        }
        if (!h) {
          for (b = o.child; b; ) {
            if (b === n) {
              (h = !0), (n = o), (a = r);
              break;
            }
            if (b === a) {
              (h = !0), (a = o), (n = r);
              break;
            }
            b = b.sibling;
          }
          if (!h) throw Error(u(189));
        }
      }
      if (n.alternate !== a) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = p(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var g = Object.assign,
    v = Symbol.for("react.element"),
    w = Symbol.for("react.transitional.element"),
    z = Symbol.for("react.portal"),
    D = Symbol.for("react.fragment"),
    k = Symbol.for("react.strict_mode"),
    V = Symbol.for("react.profiler"),
    Y = Symbol.for("react.provider"),
    it = Symbol.for("react.consumer"),
    tt = Symbol.for("react.context"),
    mt = Symbol.for("react.forward_ref"),
    W = Symbol.for("react.suspense"),
    X = Symbol.for("react.suspense_list"),
    at = Symbol.for("react.memo"),
    B = Symbol.for("react.lazy"),
    N = Symbol.for("react.activity"),
    ut = Symbol.for("react.memo_cache_sentinel"),
    st = Symbol.iterator;
  function J(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (st && t[st]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var et = Symbol.for("react.client.reference");
  function Rt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === et ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case D:
        return "Fragment";
      case V:
        return "Profiler";
      case k:
        return "StrictMode";
      case W:
        return "Suspense";
      case X:
        return "SuspenseList";
      case N:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case z:
          return "Portal";
        case tt:
          return (t.displayName || "Context") + ".Provider";
        case it:
          return (t._context.displayName || "Context") + ".Consumer";
        case mt:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case at:
          return (
            (e = t.displayName || null), e !== null ? e : Rt(t.type) || "Memo"
          );
        case B:
          (e = t._payload), (t = t._init);
          try {
            return Rt(t(e));
          } catch {}
      }
    return null;
  }
  var rt = Array.isArray,
    E = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    dt = [],
    S = -1;
  function M(t) {
    return { current: t };
  }
  function Z(t) {
    0 > S || ((t.current = dt[S]), (dt[S] = null), S--);
  }
  function j(t, e) {
    S++, (dt[S] = t.current), (t.current = e);
  }
  var $ = M(null),
    ht = M(null),
    K = M(null),
    At = M(null);
  function ct(t, e) {
    switch ((j(K, e), j(ht, t), j($, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Dm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Dm(e)), (t = zm(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Z($), j($, t);
  }
  function jt() {
    Z($), Z(ht), Z(K);
  }
  function Te(t) {
    t.memoizedState !== null && j(At, t);
    var e = $.current,
      n = zm(e, t.type);
    e !== n && (j(ht, t), j($, n));
  }
  function Oe(t) {
    ht.current === t && (Z($), Z(ht)),
      At.current === t && (Z(At), (Ws._currentValue = I));
  }
  var an = Object.prototype.hasOwnProperty,
    vn = s.unstable_scheduleCallback,
    _e = s.unstable_cancelCallback,
    ee = s.unstable_shouldYield,
    Be = s.unstable_requestPaint,
    Bt = s.unstable_now,
    za = s.unstable_getCurrentPriorityLevel,
    Ce = s.unstable_ImmediatePriority,
    si = s.unstable_UserBlockingPriority,
    Fn = s.unstable_NormalPriority,
    me = s.unstable_LowPriority,
    Le = s.unstable_IdlePriority,
    _u = s.log,
    Su = s.unstable_setDisableYieldValue,
    yn = null,
    Re = null;
  function sn(t) {
    if (
      (typeof _u == "function" && Su(t),
      Re && typeof Re.setStrictMode == "function")
    )
      try {
        Re.setStrictMode(yn, t);
      } catch {}
  }
  var pe = Math.clz32 ? Math.clz32 : In,
    Wn = Math.log,
    Cl = Math.LN2;
  function In(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Wn(t) / Cl) | 0)) | 0;
  }
  var li = 256,
    ri = 4194304;
  function gn(t) {
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
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
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
        return t;
    }
  }
  function Na(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var r = 0,
      o = t.suspendedLanes,
      h = t.pingedLanes;
    t = t.warmLanes;
    var b = a & 134217727;
    return (
      b !== 0
        ? ((a = b & ~o),
          a !== 0
            ? (r = gn(a))
            : ((h &= b),
              h !== 0
                ? (r = gn(h))
                : n || ((n = b & ~t), n !== 0 && (r = gn(n)))))
        : ((b = a & ~o),
          b !== 0
            ? (r = gn(b))
            : h !== 0
              ? (r = gn(h))
              : n || ((n = a & ~t), n !== 0 && (r = gn(n)))),
      r === 0
        ? 0
        : e !== 0 &&
            e !== r &&
            (e & o) === 0 &&
            ((o = r & -r),
            (n = e & -e),
            o >= n || (o === 32 && (n & 4194048) !== 0))
          ? e
          : r
    );
  }
  function Ua(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function rs(t, e) {
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
        return -1;
    }
  }
  function ln() {
    var t = li;
    return (li <<= 1), (li & 4194048) === 0 && (li = 256), t;
  }
  function Dl() {
    var t = ri;
    return (ri <<= 1), (ri & 62914560) === 0 && (ri = 4194304), t;
  }
  function us(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function ta(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function zl(t, e, n, a, r, o) {
    var h = t.pendingLanes;
    (t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0);
    var b = t.entanglements,
      _ = t.expirationTimes,
      A = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var U = 31 - pe(n),
        H = 1 << U;
      (b[U] = 0), (_[U] = -1);
      var O = A[U];
      if (O !== null)
        for (A[U] = null, U = 0; U < O.length; U++) {
          var C = O[U];
          C !== null && (C.lane &= -536870913);
        }
      n &= ~H;
    }
    a !== 0 && St(t, a, 0),
      o !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(h & ~e));
  }
  function St(t, e, n) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - pe(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 4194090));
  }
  function Pt(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - pe(n),
        r = 1 << a;
      (r & e) | (t[a] & e) && (t[a] |= e), (n &= ~r);
    }
  }
  function ne(t) {
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
  function ve(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function ja() {
    var t = q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Fm(t.type));
  }
  function le(t, e) {
    var n = q.p;
    try {
      return (q.p = t), e();
    } finally {
      q.p = n;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    Wt = "__reactFiber$" + Ft,
    Yt = "__reactProps$" + Ft,
    oe = "__reactContainer$" + Ft,
    ui = "__reactEvents$" + Ft,
    Cn = "__reactListeners$" + Ft,
    gf = "__reactHandles$" + Ft,
    bf = "__reactResources$" + Ft,
    os = "__reactMarker$" + Ft;
  function xu(t) {
    delete t[Wt], delete t[Yt], delete t[ui], delete t[Cn], delete t[gf];
  }
  function oi(t) {
    var e = t[Wt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[oe] || n[Wt])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Bm(t); t !== null; ) {
            if ((n = t[Wt])) return n;
            t = Bm(t);
          }
        return e;
      }
      (t = n), (n = t.parentNode);
    }
    return null;
  }
  function ci(t) {
    if ((t = t[Wt] || t[oe])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function cs(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(u(33));
  }
  function fi(t) {
    var e = t[bf];
    return (
      e ||
        (e = t[bf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function ce(t) {
    t[os] = !0;
  }
  var _f = new Set(),
    Sf = {};
  function Ba(t, e) {
    di(t, e), di(t + "Capture", e);
  }
  function di(t, e) {
    for (Sf[t] = e, t = 0; t < e.length; t++) _f.add(e[t]);
  }
  var Cv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    xf = {},
    Ef = {};
  function Dv(t) {
    return an.call(Ef, t)
      ? !0
      : an.call(xf, t)
        ? !1
        : Cv.test(t)
          ? (Ef[t] = !0)
          : ((xf[t] = !0), !1);
  }
  function Nl(t, e, n) {
    if (Dv(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Ul(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function Dn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  var Eu, Tf;
  function hi(t) {
    if (Eu === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        (Eu = (e && e[1]) || ""),
          (Tf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : "");
      }
    return (
      `
` +
      Eu +
      t +
      Tf
    );
  }
  var Tu = !1;
  function Ru(t, e) {
    if (!t || Tu) return "";
    Tu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (C) {
                  var O = C;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (C) {
                  O = C;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                O = C;
              }
              (H = t()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (C) {
            if (C && O && typeof C.stack == "string") return [C.stack, O.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      r &&
        r.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = a.DetermineComponentFrameRoot(),
        h = o[0],
        b = o[1];
      if (h && b) {
        var _ = h.split(`
`),
          A = b.split(`
`);
        for (
          r = a = 0;
          a < _.length && !_[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; r < A.length && !A[r].includes("DetermineComponentFrameRoot"); )
          r++;
        if (a === _.length || r === A.length)
          for (
            a = _.length - 1, r = A.length - 1;
            1 <= a && 0 <= r && _[a] !== A[r];

          )
            r--;
        for (; 1 <= a && 0 <= r; a--, r--)
          if (_[a] !== A[r]) {
            if (a !== 1 || r !== 1)
              do
                if ((a--, r--, 0 > r || _[a] !== A[r])) {
                  var U =
                    `
` + _[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      U.includes("<anonymous>") &&
                      (U = U.replace("<anonymous>", t.displayName)),
                    U
                  );
                }
              while (1 <= a && 0 <= r);
            break;
          }
      }
    } finally {
      (Tu = !1), (Error.prepareStackTrace = n);
    }
    return (n = t ? t.displayName || t.name : "") ? hi(n) : "";
  }
  function zv(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return hi(t.type);
      case 16:
        return hi("Lazy");
      case 13:
        return hi("Suspense");
      case 19:
        return hi("SuspenseList");
      case 0:
      case 15:
        return Ru(t.type, !1);
      case 11:
        return Ru(t.type.render, !1);
      case 1:
        return Ru(t.type, !0);
      case 31:
        return hi("Activity");
      default:
        return "";
    }
  }
  function Rf(t) {
    try {
      var e = "";
      do (e += zv(t)), (t = t.return);
      while (t);
      return e;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  function Xe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function wf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Nv(t) {
    var e = wf(t) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var r = n.get,
        o = n.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (h) {
            (a = "" + h), o.call(this, h);
          },
        }),
        Object.defineProperty(t, e, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (h) {
            a = "" + h;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function jl(t) {
    t._valueTracker || (t._valueTracker = Nv(t));
  }
  function Af(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = wf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Bl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Uv = /[\n"\\]/g;
  function Ke(t) {
    return t.replace(Uv, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function wu(t, e, n, a, r, o, h, b) {
    (t.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (t.type = h)
        : t.removeAttribute("type"),
      e != null
        ? h === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Xe(e))
          : t.value !== "" + Xe(e) && (t.value = "" + Xe(e))
        : (h !== "submit" && h !== "reset") || t.removeAttribute("value"),
      e != null
        ? Au(t, h, Xe(e))
        : n != null
          ? Au(t, h, Xe(n))
          : a != null && t.removeAttribute("value"),
      r == null && o != null && (t.defaultChecked = !!o),
      r != null &&
        (t.checked = r && typeof r != "function" && typeof r != "symbol"),
      b != null &&
      typeof b != "function" &&
      typeof b != "symbol" &&
      typeof b != "boolean"
        ? (t.name = "" + Xe(b))
        : t.removeAttribute("name");
  }
  function Mf(t, e, n, a, r, o, h, b) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) return;
      (n = n != null ? "" + Xe(n) : ""),
        (e = e != null ? "" + Xe(e) : n),
        b || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? r),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = b ? t.checked : !!a),
      (t.defaultChecked = !!a),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.name = h);
  }
  function Au(t, e, n) {
    (e === "number" && Bl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function mi(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var r = 0; r < n.length; r++) e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        (r = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== r && (t[n].selected = r),
          r && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Xe(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          (t[r].selected = !0), a && (t[r].defaultSelected = !0);
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Of(t, e, n) {
    if (
      e != null &&
      ((e = "" + Xe(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Xe(n) : "";
  }
  function Cf(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(u(92));
        if (rt(a)) {
          if (1 < a.length) throw Error(u(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), (e = n);
    }
    (n = Xe(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a);
  }
  function pi(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var jv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Df(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || jv.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function zf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(u(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var r in e)
        (a = e[r]), e.hasOwnProperty(r) && n[r] !== a && Df(t, r, a);
    } else for (var o in e) e.hasOwnProperty(o) && Df(t, o, e[o]);
  }
  function Mu(t) {
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
  var Bv = new Map([
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
      ["xHeight", "x-height"],
    ]),
    Lv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ll(t) {
    return Lv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Ou = null;
  function Cu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var vi = null,
    yi = null;
  function Nf(t) {
    var e = ci(t);
    if (e && (t = e.stateNode)) {
      var n = t[Yt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (wu(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ke("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var r = a[Yt] || null;
                if (!r) throw Error(u(90));
                wu(
                  a,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              (a = n[e]), a.form === t.form && Af(a);
          }
          break t;
        case "textarea":
          Of(t, n.value, n.defaultValue);
          break t;
        case "select":
          (e = n.value), e != null && mi(t, !!n.multiple, e, !1);
      }
    }
  }
  var Du = !1;
  function Uf(t, e, n) {
    if (Du) return t(e, n);
    Du = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Du = !1),
        (vi !== null || yi !== null) &&
          (xr(), vi && ((e = vi), (t = yi), (yi = vi = null), Nf(e), t)))
      )
        for (e = 0; e < t.length; e++) Nf(t[e]);
    }
  }
  function fs(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[Yt] || null;
    if (a === null) return null;
    n = a[e];
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
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(u(231, e, typeof n));
    return n;
  }
  var zn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    zu = !1;
  if (zn)
    try {
      var ds = {};
      Object.defineProperty(ds, "passive", {
        get: function () {
          zu = !0;
        },
      }),
        window.addEventListener("test", ds, ds),
        window.removeEventListener("test", ds, ds);
    } catch {
      zu = !1;
    }
  var ea = null,
    Nu = null,
    kl = null;
  function jf() {
    if (kl) return kl;
    var t,
      e = Nu,
      n = e.length,
      a,
      r = "value" in ea ? ea.value : ea.textContent,
      o = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++);
    var h = n - t;
    for (a = 1; a <= h && e[n - a] === r[o - a]; a++);
    return (kl = r.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Hl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ql() {
    return !0;
  }
  function Bf() {
    return !1;
  }
  function De(t) {
    function e(n, a, r, o, h) {
      (this._reactName = n),
        (this._targetInst = r),
        (this.type = a),
        (this.nativeEvent = o),
        (this.target = h),
        (this.currentTarget = null);
      for (var b in t)
        t.hasOwnProperty(b) && ((n = t[b]), (this[b] = n ? n(o) : o[b]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? ql
          : Bf),
        (this.isPropagationStopped = Bf),
        this
      );
    }
    return (
      g(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ql));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ql));
        },
        persist: function () {},
        isPersistent: ql,
      }),
      e
    );
  }
  var La = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Zl = De(La),
    hs = g({}, La, { view: 0, detail: 0 }),
    kv = De(hs),
    Uu,
    ju,
    ms,
    Vl = g({}, hs, {
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
      getModifierState: Lu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ms &&
              (ms && t.type === "mousemove"
                ? ((Uu = t.screenX - ms.screenX), (ju = t.screenY - ms.screenY))
                : (ju = Uu = 0),
              (ms = t)),
            Uu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : ju;
      },
    }),
    Lf = De(Vl),
    Hv = g({}, Vl, { dataTransfer: 0 }),
    qv = De(Hv),
    Zv = g({}, hs, { relatedTarget: 0 }),
    Bu = De(Zv),
    Vv = g({}, La, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yv = De(Vv),
    Gv = g({}, La, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Qv = De(Gv),
    Xv = g({}, La, { data: 0 }),
    kf = De(Xv),
    Kv = {
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
      MozPrintableKey: "Unidentified",
    },
    Jv = {
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
      224: "Meta",
    },
    $v = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Pv(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = $v[t])
        ? !!e[t]
        : !1;
  }
  function Lu() {
    return Pv;
  }
  var Fv = g({}, hs, {
      key: function (t) {
        if (t.key) {
          var e = Kv[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Hl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Jv[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Lu,
      charCode: function (t) {
        return t.type === "keypress" ? Hl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Hl(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Wv = De(Fv),
    Iv = g({}, Vl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Hf = De(Iv),
    ty = g({}, hs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Lu,
    }),
    ey = De(ty),
    ny = g({}, La, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ay = De(ny),
    iy = g({}, Vl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    sy = De(iy),
    ly = g({}, La, { newState: 0, oldState: 0 }),
    ry = De(ly),
    uy = [9, 13, 27, 32],
    ku = zn && "CompositionEvent" in window,
    ps = null;
  zn && "documentMode" in document && (ps = document.documentMode);
  var oy = zn && "TextEvent" in window && !ps,
    qf = zn && (!ku || (ps && 8 < ps && 11 >= ps)),
    Zf = " ",
    Vf = !1;
  function Yf(t, e) {
    switch (t) {
      case "keyup":
        return uy.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gf(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var gi = !1;
  function cy(t, e) {
    switch (t) {
      case "compositionend":
        return Gf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Vf = !0), Zf);
      case "textInput":
        return (t = e.data), t === Zf && Vf ? null : t;
      default:
        return null;
    }
  }
  function fy(t, e) {
    if (gi)
      return t === "compositionend" || (!ku && Yf(t, e))
        ? ((t = jf()), (kl = Nu = ea = null), (gi = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return qf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var dy = {
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
    week: !0,
  };
  function Qf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!dy[t.type] : e === "textarea";
  }
  function Xf(t, e, n, a) {
    vi ? (yi ? yi.push(a) : (yi = [a])) : (vi = a),
      (e = Mr(e, "onChange")),
      0 < e.length &&
        ((n = new Zl("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e }));
  }
  var vs = null,
    ys = null;
  function hy(t) {
    wm(t, 0);
  }
  function Yl(t) {
    var e = cs(t);
    if (Af(e)) return t;
  }
  function Kf(t, e) {
    if (t === "change") return e;
  }
  var Jf = !1;
  if (zn) {
    var Hu;
    if (zn) {
      var qu = "oninput" in document;
      if (!qu) {
        var $f = document.createElement("div");
        $f.setAttribute("oninput", "return;"),
          (qu = typeof $f.oninput == "function");
      }
      Hu = qu;
    } else Hu = !1;
    Jf = Hu && (!document.documentMode || 9 < document.documentMode);
  }
  function Pf() {
    vs && (vs.detachEvent("onpropertychange", Ff), (ys = vs = null));
  }
  function Ff(t) {
    if (t.propertyName === "value" && Yl(ys)) {
      var e = [];
      Xf(e, ys, t, Cu(t)), Uf(hy, e);
    }
  }
  function my(t, e, n) {
    t === "focusin"
      ? (Pf(), (vs = e), (ys = n), vs.attachEvent("onpropertychange", Ff))
      : t === "focusout" && Pf();
  }
  function py(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Yl(ys);
  }
  function vy(t, e) {
    if (t === "click") return Yl(e);
  }
  function yy(t, e) {
    if (t === "input" || t === "change") return Yl(e);
  }
  function gy(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ke = typeof Object.is == "function" ? Object.is : gy;
  function gs(t, e) {
    if (ke(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var r = n[a];
      if (!an.call(e, r) || !ke(t[r], e[r])) return !1;
    }
    return !0;
  }
  function Wf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function If(t, e) {
    var n = Wf(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Wf(n);
    }
  }
  function td(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? td(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function ed(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Bl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Bl(t.document);
    }
    return e;
  }
  function Zu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var by = zn && "documentMode" in document && 11 >= document.documentMode,
    bi = null,
    Vu = null,
    bs = null,
    Yu = !1;
  function nd(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yu ||
      bi == null ||
      bi !== Bl(a) ||
      ((a = bi),
      "selectionStart" in a && Zu(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (bs && gs(bs, a)) ||
        ((bs = a),
        (a = Mr(Vu, "onSelect")),
        0 < a.length &&
          ((e = new Zl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = bi))));
  }
  function ka(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var _i = {
      animationend: ka("Animation", "AnimationEnd"),
      animationiteration: ka("Animation", "AnimationIteration"),
      animationstart: ka("Animation", "AnimationStart"),
      transitionrun: ka("Transition", "TransitionRun"),
      transitionstart: ka("Transition", "TransitionStart"),
      transitioncancel: ka("Transition", "TransitionCancel"),
      transitionend: ka("Transition", "TransitionEnd"),
    },
    Gu = {},
    ad = {};
  zn &&
    ((ad = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete _i.animationend.animation,
      delete _i.animationiteration.animation,
      delete _i.animationstart.animation),
    "TransitionEvent" in window || delete _i.transitionend.transition);
  function Ha(t) {
    if (Gu[t]) return Gu[t];
    if (!_i[t]) return t;
    var e = _i[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in ad) return (Gu[t] = e[n]);
    return t;
  }
  var id = Ha("animationend"),
    sd = Ha("animationiteration"),
    ld = Ha("animationstart"),
    _y = Ha("transitionrun"),
    Sy = Ha("transitionstart"),
    xy = Ha("transitioncancel"),
    rd = Ha("transitionend"),
    ud = new Map(),
    Qu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Qu.push("scrollEnd");
  function rn(t, e) {
    ud.set(t, e), Ba(e, [t]);
  }
  var od = new WeakMap();
  function Je(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = od.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Rf(e) }), od.set(t, e), e);
    }
    return { value: t, source: e, stack: Rf(e) };
  }
  var $e = [],
    Si = 0,
    Xu = 0;
  function Gl() {
    for (var t = Si, e = (Xu = Si = 0); e < t; ) {
      var n = $e[e];
      $e[e++] = null;
      var a = $e[e];
      $e[e++] = null;
      var r = $e[e];
      $e[e++] = null;
      var o = $e[e];
      if ((($e[e++] = null), a !== null && r !== null)) {
        var h = a.pending;
        h === null ? (r.next = r) : ((r.next = h.next), (h.next = r)),
          (a.pending = r);
      }
      o !== 0 && cd(n, r, o);
    }
  }
  function Ql(t, e, n, a) {
    ($e[Si++] = t),
      ($e[Si++] = e),
      ($e[Si++] = n),
      ($e[Si++] = a),
      (Xu |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Ku(t, e, n, a) {
    return Ql(t, e, n, a), Xl(t);
  }
  function xi(t, e) {
    return Ql(t, null, null, e), Xl(t);
  }
  function cd(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var r = !1, o = t.return; o !== null; )
      (o.childLanes |= n),
        (a = o.alternate),
        a !== null && (a.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (r = !0)),
        (t = o),
        (o = o.return);
    return t.tag === 3
      ? ((o = t.stateNode),
        r &&
          e !== null &&
          ((r = 31 - pe(n)),
          (t = o.hiddenUpdates),
          (a = t[r]),
          a === null ? (t[r] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function Xl(t) {
    if (50 < Gs) throw ((Gs = 0), (tc = null), Error(u(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ei = {};
  function Ey(t, e, n, a) {
    (this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function He(t, e, n, a) {
    return new Ey(t, e, n, a);
  }
  function Ju(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function Nn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = He(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function fd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Kl(t, e, n, a, r, o) {
    var h = 0;
    if (((a = t), typeof t == "function")) Ju(t) && (h = 1);
    else if (typeof t == "string")
      h = R0(t, n, $.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case N:
          return (t = He(31, n, e, r)), (t.elementType = N), (t.lanes = o), t;
        case D:
          return qa(n.children, r, o, e);
        case k:
          (h = 8), (r |= 24);
          break;
        case V:
          return (
            (t = He(12, n, e, r | 2)), (t.elementType = V), (t.lanes = o), t
          );
        case W:
          return (t = He(13, n, e, r)), (t.elementType = W), (t.lanes = o), t;
        case X:
          return (t = He(19, n, e, r)), (t.elementType = X), (t.lanes = o), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Y:
              case tt:
                h = 10;
                break t;
              case it:
                h = 9;
                break t;
              case mt:
                h = 11;
                break t;
              case at:
                h = 14;
                break t;
              case B:
                (h = 16), (a = null);
                break t;
            }
          (h = 29),
            (n = Error(u(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = He(h, n, e, r)), (e.elementType = t), (e.type = a), (e.lanes = o), e
    );
  }
  function qa(t, e, n, a) {
    return (t = He(7, t, a, e)), (t.lanes = n), t;
  }
  function $u(t, e, n) {
    return (t = He(6, t, null, e)), (t.lanes = n), t;
  }
  function Pu(t, e, n) {
    return (
      (e = He(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Ti = [],
    Ri = 0,
    Jl = null,
    $l = 0,
    Pe = [],
    Fe = 0,
    Za = null,
    Un = 1,
    jn = "";
  function Va(t, e) {
    (Ti[Ri++] = $l), (Ti[Ri++] = Jl), (Jl = t), ($l = e);
  }
  function dd(t, e, n) {
    (Pe[Fe++] = Un), (Pe[Fe++] = jn), (Pe[Fe++] = Za), (Za = t);
    var a = Un;
    t = jn;
    var r = 32 - pe(a) - 1;
    (a &= ~(1 << r)), (n += 1);
    var o = 32 - pe(e) + r;
    if (30 < o) {
      var h = r - (r % 5);
      (o = (a & ((1 << h) - 1)).toString(32)),
        (a >>= h),
        (r -= h),
        (Un = (1 << (32 - pe(e) + r)) | (n << r) | a),
        (jn = o + t);
    } else (Un = (1 << o) | (n << r) | a), (jn = t);
  }
  function Fu(t) {
    t.return !== null && (Va(t, 1), dd(t, 1, 0));
  }
  function Wu(t) {
    for (; t === Jl; )
      (Jl = Ti[--Ri]), (Ti[Ri] = null), ($l = Ti[--Ri]), (Ti[Ri] = null);
    for (; t === Za; )
      (Za = Pe[--Fe]),
        (Pe[Fe] = null),
        (jn = Pe[--Fe]),
        (Pe[Fe] = null),
        (Un = Pe[--Fe]),
        (Pe[Fe] = null);
  }
  var we = null,
    Jt = null,
    Ut = !1,
    Ya = null,
    bn = !1,
    Iu = Error(u(519));
  function Ga(t) {
    var e = Error(u(418, ""));
    throw (xs(Je(e, t)), Iu);
  }
  function hd(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[Wt] = t), (e[Yt] = a), n)) {
      case "dialog":
        Ct("cancel", e), Ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ct("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Xs.length; n++) Ct(Xs[n], e);
        break;
      case "source":
        Ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Ct("error", e), Ct("load", e);
        break;
      case "details":
        Ct("toggle", e);
        break;
      case "input":
        Ct("invalid", e),
          Mf(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          jl(e);
        break;
      case "select":
        Ct("invalid", e);
        break;
      case "textarea":
        Ct("invalid", e), Cf(e, a.value, a.defaultValue, a.children), jl(e);
    }
    (n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Cm(e.textContent, n)
        ? (a.popover != null && (Ct("beforetoggle", e), Ct("toggle", e)),
          a.onScroll != null && Ct("scroll", e),
          a.onScrollEnd != null && Ct("scrollend", e),
          a.onClick != null && (e.onclick = Or),
          (e = !0))
        : (e = !1),
      e || Ga(t);
  }
  function md(t) {
    for (we = t.return; we; )
      switch (we.tag) {
        case 5:
        case 13:
          bn = !1;
          return;
        case 27:
        case 3:
          bn = !0;
          return;
        default:
          we = we.return;
      }
  }
  function _s(t) {
    if (t !== we) return !1;
    if (!Ut) return md(t), (Ut = !0), !1;
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || vc(t.type, t.memoizedProps))),
        (n = !n)),
      n && Jt && Ga(t),
      md(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(u(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((n = t.data), n === "/$")) {
              if (e === 0) {
                Jt = on(t.nextSibling);
                break t;
              }
              e--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
          t = t.nextSibling;
        }
        Jt = null;
      }
    } else
      e === 27
        ? ((e = Jt), ya(t.type) ? ((t = _c), (_c = null), (Jt = t)) : (Jt = e))
        : (Jt = we ? on(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ss() {
    (Jt = we = null), (Ut = !1);
  }
  function pd() {
    var t = Ya;
    return (
      t !== null &&
        (Ue === null ? (Ue = t) : Ue.push.apply(Ue, t), (Ya = null)),
      t
    );
  }
  function xs(t) {
    Ya === null ? (Ya = [t]) : Ya.push(t);
  }
  var to = M(null),
    Qa = null,
    Bn = null;
  function na(t, e, n) {
    j(to, e._currentValue), (e._currentValue = n);
  }
  function Ln(t) {
    (t._currentValue = to.current), Z(to);
  }
  function eo(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function no(t, e, n, a) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var o = r.dependencies;
      if (o !== null) {
        var h = r.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var b = o;
          o = r;
          for (var _ = 0; _ < e.length; _++)
            if (b.context === e[_]) {
              (o.lanes |= n),
                (b = o.alternate),
                b !== null && (b.lanes |= n),
                eo(o.return, n, t),
                a || (h = null);
              break t;
            }
          o = b.next;
        }
      } else if (r.tag === 18) {
        if (((h = r.return), h === null)) throw Error(u(341));
        (h.lanes |= n),
          (o = h.alternate),
          o !== null && (o.lanes |= n),
          eo(h, n, t),
          (h = null);
      } else h = r.child;
      if (h !== null) h.return = r;
      else
        for (h = r; h !== null; ) {
          if (h === t) {
            h = null;
            break;
          }
          if (((r = h.sibling), r !== null)) {
            (r.return = h.return), (h = r);
            break;
          }
          h = h.return;
        }
      r = h;
    }
  }
  function Es(t, e, n, a) {
    t = null;
    for (var r = e, o = !1; r !== null; ) {
      if (!o) {
        if ((r.flags & 524288) !== 0) o = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var h = r.alternate;
        if (h === null) throw Error(u(387));
        if (((h = h.memoizedProps), h !== null)) {
          var b = r.type;
          ke(r.pendingProps.value, h.value) ||
            (t !== null ? t.push(b) : (t = [b]));
        }
      } else if (r === At.current) {
        if (((h = r.alternate), h === null)) throw Error(u(387));
        h.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (t !== null ? t.push(Ws) : (t = [Ws]));
      }
      r = r.return;
    }
    t !== null && no(e, t, n, a), (e.flags |= 262144);
  }
  function Pl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ke(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Xa(t) {
    (Qa = t),
      (Bn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Se(t) {
    return vd(Qa, t);
  }
  function Fl(t, e) {
    return Qa === null && Xa(t), vd(t, e);
  }
  function vd(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), Bn === null)) {
      if (t === null) throw Error(u(308));
      (Bn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Bn = Bn.next = e;
    return n;
  }
  var Ty =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                });
            };
          },
    Ry = s.unstable_scheduleCallback,
    wy = s.unstable_NormalPriority,
    re = {
      $$typeof: tt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ao() {
    return { controller: new Ty(), data: new Map(), refCount: 0 };
  }
  function Ts(t) {
    t.refCount--,
      t.refCount === 0 &&
        Ry(wy, function () {
          t.controller.abort();
        });
  }
  var Rs = null,
    io = 0,
    wi = 0,
    Ai = null;
  function Ay(t, e) {
    if (Rs === null) {
      var n = (Rs = []);
      (io = 0),
        (wi = rc()),
        (Ai = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        });
    }
    return io++, e.then(yd, yd), e;
  }
  function yd() {
    if (--io === 0 && Rs !== null) {
      Ai !== null && (Ai.status = "fulfilled");
      var t = Rs;
      (Rs = null), (wi = 0), (Ai = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function My(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var r = 0; r < n.length; r++) (0, n[r])(e);
        },
        function (r) {
          for (a.status = "rejected", a.reason = r, r = 0; r < n.length; r++)
            (0, n[r])(void 0);
        },
      ),
      a
    );
  }
  var gd = E.S;
  E.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      Ay(t, e),
      gd !== null && gd(t, e);
  };
  var Ka = M(null);
  function so() {
    var t = Ka.current;
    return t !== null ? t : Gt.pooledCache;
  }
  function Wl(t, e) {
    e === null ? j(Ka, Ka.current) : j(Ka, e.pool);
  }
  function bd() {
    var t = so();
    return t === null ? null : { parent: re._currentValue, pool: t };
  }
  var ws = Error(u(460)),
    _d = Error(u(474)),
    Il = Error(u(542)),
    lo = { then: function () {} };
  function Sd(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function tr() {}
  function xd(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(tr, tr), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Td(t), t);
      default:
        if (typeof e.status == "string") e.then(tr, tr);
        else {
          if (((t = Gt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(u(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "fulfilled"), (r.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var r = e;
                  (r.status = "rejected"), (r.reason = a);
                }
              },
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Td(t), t);
        }
        throw ((As = e), ws);
    }
  }
  var As = null;
  function Ed() {
    if (As === null) throw Error(u(459));
    var t = As;
    return (As = null), t;
  }
  function Td(t) {
    if (t === ws || t === Il) throw Error(u(483));
  }
  var aa = !1;
  function ro(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function uo(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function ia(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function sa(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Lt & 2) !== 0)) {
      var r = a.pending;
      return (
        r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
        (a.pending = e),
        (e = Xl(t)),
        cd(t, null, n),
        e
      );
    }
    return Ql(t, a, e, n), Xl(t);
  }
  function Ms(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), Pt(t, n);
    }
  }
  function oo(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var r = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          o === null ? (r = o = h) : (o = o.next = h), (n = n.next);
        } while (n !== null);
        o === null ? (r = o = e) : (o = o.next = e);
      } else r = o = e;
      (n = {
        baseState: a.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: o,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n);
      return;
    }
    (t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e);
  }
  var co = !1;
  function Os() {
    if (co) {
      var t = Ai;
      if (t !== null) throw t;
    }
  }
  function Cs(t, e, n, a) {
    co = !1;
    var r = t.updateQueue;
    aa = !1;
    var o = r.firstBaseUpdate,
      h = r.lastBaseUpdate,
      b = r.shared.pending;
    if (b !== null) {
      r.shared.pending = null;
      var _ = b,
        A = _.next;
      (_.next = null), h === null ? (o = A) : (h.next = A), (h = _);
      var U = t.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (b = U.lastBaseUpdate),
        b !== h &&
          (b === null ? (U.firstBaseUpdate = A) : (b.next = A),
          (U.lastBaseUpdate = _)));
    }
    if (o !== null) {
      var H = r.baseState;
      (h = 0), (U = A = _ = null), (b = o);
      do {
        var O = b.lane & -536870913,
          C = O !== b.lane;
        if (C ? (Dt & O) === O : (a & O) === O) {
          O !== 0 && O === wi && (co = !0),
            U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  tag: b.tag,
                  payload: b.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var gt = t,
              pt = b;
            O = e;
            var Zt = n;
            switch (pt.tag) {
              case 1:
                if (((gt = pt.payload), typeof gt == "function")) {
                  H = gt.call(Zt, H, O);
                  break t;
                }
                H = gt;
                break t;
              case 3:
                gt.flags = (gt.flags & -65537) | 128;
              case 0:
                if (
                  ((gt = pt.payload),
                  (O = typeof gt == "function" ? gt.call(Zt, H, O) : gt),
                  O == null)
                )
                  break t;
                H = g({}, H, O);
                break t;
              case 2:
                aa = !0;
            }
          }
          (O = b.callback),
            O !== null &&
              ((t.flags |= 64),
              C && (t.flags |= 8192),
              (C = r.callbacks),
              C === null ? (r.callbacks = [O]) : C.push(O));
        } else
          (C = {
            lane: O,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null,
          }),
            U === null ? ((A = U = C), (_ = H)) : (U = U.next = C),
            (h |= O);
        if (((b = b.next), b === null)) {
          if (((b = r.shared.pending), b === null)) break;
          (C = b),
            (b = C.next),
            (C.next = null),
            (r.lastBaseUpdate = C),
            (r.shared.pending = null);
        }
      } while (!0);
      U === null && (_ = H),
        (r.baseState = _),
        (r.firstBaseUpdate = A),
        (r.lastBaseUpdate = U),
        o === null && (r.shared.lanes = 0),
        (ha |= h),
        (t.lanes = h),
        (t.memoizedState = H);
    }
  }
  function Rd(t, e) {
    if (typeof t != "function") throw Error(u(191, t));
    t.call(e);
  }
  function wd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Rd(n[t], e);
  }
  var Mi = M(null),
    er = M(0);
  function Ad(t, e) {
    (t = Gn), j(er, t), j(Mi, e), (Gn = t | e.baseLanes);
  }
  function fo() {
    j(er, Gn), j(Mi, Mi.current);
  }
  function ho() {
    (Gn = er.current), Z(Mi), Z(er);
  }
  var la = 0,
    wt = null,
    Ht = null,
    ae = null,
    nr = !1,
    Oi = !1,
    Ja = !1,
    ar = 0,
    Ds = 0,
    Ci = null,
    Oy = 0;
  function It() {
    throw Error(u(321));
  }
  function mo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!ke(t[n], e[n])) return !1;
    return !0;
  }
  function po(t, e, n, a, r, o) {
    return (
      (la = o),
      (wt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (E.H = t === null || t.memoizedState === null ? ch : fh),
      (Ja = !1),
      (o = n(a, r)),
      (Ja = !1),
      Oi && (o = Od(e, n, a, r)),
      Md(t),
      o
    );
  }
  function Md(t) {
    E.H = or;
    var e = Ht !== null && Ht.next !== null;
    if (((la = 0), (ae = Ht = wt = null), (nr = !1), (Ds = 0), (Ci = null), e))
      throw Error(u(300));
    t === null ||
      fe ||
      ((t = t.dependencies), t !== null && Pl(t) && (fe = !0));
  }
  function Od(t, e, n, a) {
    wt = t;
    var r = 0;
    do {
      if ((Oi && (Ci = null), (Ds = 0), (Oi = !1), 25 <= r))
        throw Error(u(301));
      if (((r += 1), (ae = Ht = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (E.H = By), (o = e(n, a));
    } while (Oi);
    return o;
  }
  function Cy() {
    var t = E.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? zs(e) : e),
      (t = t.useState()[0]),
      (Ht !== null ? Ht.memoizedState : null) !== t && (wt.flags |= 1024),
      e
    );
  }
  function vo() {
    var t = ar !== 0;
    return (ar = 0), t;
  }
  function yo(t, e, n) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n);
  }
  function go(t) {
    if (nr) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      nr = !1;
    }
    (la = 0), (ae = Ht = wt = null), (Oi = !1), (Ds = ar = 0), (Ci = null);
  }
  function ze() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ae === null ? (wt.memoizedState = ae = t) : (ae = ae.next = t), ae;
  }
  function ie() {
    if (Ht === null) {
      var t = wt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Ht.next;
    var e = ae === null ? wt.memoizedState : ae.next;
    if (e !== null) (ae = e), (Ht = t);
    else {
      if (t === null)
        throw wt.alternate === null ? Error(u(467)) : Error(u(310));
      (Ht = t),
        (t = {
          memoizedState: Ht.memoizedState,
          baseState: Ht.baseState,
          baseQueue: Ht.baseQueue,
          queue: Ht.queue,
          next: null,
        }),
        ae === null ? (wt.memoizedState = ae = t) : (ae = ae.next = t);
    }
    return ae;
  }
  function bo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function zs(t) {
    var e = Ds;
    return (
      (Ds += 1),
      Ci === null && (Ci = []),
      (t = xd(Ci, t, e)),
      (e = wt),
      (ae === null ? e.memoizedState : ae.next) === null &&
        ((e = e.alternate),
        (E.H = e === null || e.memoizedState === null ? ch : fh)),
      t
    );
  }
  function ir(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return zs(t);
      if (t.$$typeof === tt) return Se(t);
    }
    throw Error(u(438, String(t)));
  }
  function _o(t) {
    var e = null,
      n = wt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = wt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = bo()), (wt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = ut;
    return e.index++, n;
  }
  function kn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function sr(t) {
    var e = ie();
    return So(e, Ht, t);
  }
  function So(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = n;
    var r = t.baseQueue,
      o = a.pending;
    if (o !== null) {
      if (r !== null) {
        var h = r.next;
        (r.next = o.next), (o.next = h);
      }
      (e.baseQueue = r = o), (a.pending = null);
    }
    if (((o = t.baseState), r === null)) t.memoizedState = o;
    else {
      e = r.next;
      var b = (h = null),
        _ = null,
        A = e,
        U = !1;
      do {
        var H = A.lane & -536870913;
        if (H !== A.lane ? (Dt & H) === H : (la & H) === H) {
          var O = A.revertLane;
          if (O === 0)
            _ !== null &&
              (_ = _.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: A.action,
                  hasEagerState: A.hasEagerState,
                  eagerState: A.eagerState,
                  next: null,
                }),
              H === wi && (U = !0);
          else if ((la & O) === O) {
            (A = A.next), O === wi && (U = !0);
            continue;
          } else
            (H = {
              lane: 0,
              revertLane: A.revertLane,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null,
            }),
              _ === null ? ((b = _ = H), (h = o)) : (_ = _.next = H),
              (wt.lanes |= O),
              (ha |= O);
          (H = A.action),
            Ja && n(o, H),
            (o = A.hasEagerState ? A.eagerState : n(o, H));
        } else
          (O = {
            lane: H,
            revertLane: A.revertLane,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null,
          }),
            _ === null ? ((b = _ = O), (h = o)) : (_ = _.next = O),
            (wt.lanes |= H),
            (ha |= H);
        A = A.next;
      } while (A !== null && A !== e);
      if (
        (_ === null ? (h = o) : (_.next = b),
        !ke(o, t.memoizedState) && ((fe = !0), U && ((n = Ai), n !== null)))
      )
        throw n;
      (t.memoizedState = o),
        (t.baseState = h),
        (t.baseQueue = _),
        (a.lastRenderedState = o);
    }
    return r === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function xo(t) {
    var e = ie(),
      n = e.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      r = n.pending,
      o = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var h = (r = r.next);
      do (o = t(o, h.action)), (h = h.next);
      while (h !== r);
      ke(o, e.memoizedState) || (fe = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, a];
  }
  function Cd(t, e, n) {
    var a = wt,
      r = ie(),
      o = Ut;
    if (o) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else n = e();
    var h = !ke((Ht || r).memoizedState, n);
    h && ((r.memoizedState = n), (fe = !0)), (r = r.queue);
    var b = Nd.bind(null, a, r, t);
    if (
      (Ns(2048, 8, b, [t]),
      r.getSnapshot !== e || h || (ae !== null && ae.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Di(9, lr(), zd.bind(null, a, r, n, e), null),
        Gt === null)
      )
        throw Error(u(349));
      o || (la & 124) !== 0 || Dd(a, e, n);
    }
    return n;
  }
  function Dd(t, e, n) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = wt.updateQueue),
      e === null
        ? ((e = bo()), (wt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
  }
  function zd(t, e, n, a) {
    (e.value = n), (e.getSnapshot = a), Ud(e) && jd(t);
  }
  function Nd(t, e, n) {
    return n(function () {
      Ud(e) && jd(t);
    });
  }
  function Ud(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ke(t, n);
    } catch {
      return !0;
    }
  }
  function jd(t) {
    var e = xi(t, 2);
    e !== null && Ge(e, t, 2);
  }
  function Eo(t) {
    var e = ze();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Ja)) {
        sn(!0);
        try {
          n();
        } finally {
          sn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Bd(t, e, n, a) {
    return (t.baseState = n), So(t, Ht, typeof a == "function" ? a : kn);
  }
  function Dy(t, e, n, a, r) {
    if (ur(t)) throw Error(u(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          o.listeners.push(h);
        },
      };
      E.T !== null ? n(!0) : (o.isTransition = !1),
        a(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), Ld(e, o))
          : ((o.next = n.next), (e.pending = n.next = o));
    }
  }
  function Ld(t, e) {
    var n = e.action,
      a = e.payload,
      r = t.state;
    if (e.isTransition) {
      var o = E.T,
        h = {};
      E.T = h;
      try {
        var b = n(r, a),
          _ = E.S;
        _ !== null && _(h, b), kd(t, e, b);
      } catch (A) {
        To(t, e, A);
      } finally {
        E.T = o;
      }
    } else
      try {
        (o = n(r, a)), kd(t, e, o);
      } catch (A) {
        To(t, e, A);
      }
  }
  function kd(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            Hd(t, e, a);
          },
          function (a) {
            return To(t, e, a);
          },
        )
      : Hd(t, e, n);
  }
  function Hd(t, e, n) {
    (e.status = "fulfilled"),
      (e.value = n),
      qd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Ld(t, n)));
  }
  function To(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = n), qd(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function qd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Zd(t, e) {
    return e;
  }
  function Vd(t, e) {
    if (Ut) {
      var n = Gt.formState;
      if (n !== null) {
        t: {
          var a = wt;
          if (Ut) {
            if (Jt) {
              e: {
                for (var r = Jt, o = bn; r.nodeType !== 8; ) {
                  if (!o) {
                    r = null;
                    break e;
                  }
                  if (((r = on(r.nextSibling)), r === null)) {
                    r = null;
                    break e;
                  }
                }
                (o = r.data), (r = o === "F!" || o === "F" ? r : null);
              }
              if (r) {
                (Jt = on(r.nextSibling)), (a = r.data === "F!");
                break t;
              }
            }
            Ga(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = ze()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zd,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = rh.bind(null, wt, a)),
      (a.dispatch = n),
      (a = Eo(!1)),
      (o = Oo.bind(null, wt, !1, a.queue)),
      (a = ze()),
      (r = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = r),
      (n = Dy.bind(null, wt, r, o, n)),
      (r.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function Yd(t) {
    var e = ie();
    return Gd(e, Ht, t);
  }
  function Gd(t, e, n) {
    if (
      ((e = So(t, e, Zd)[0]),
      (t = sr(kn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = zs(e);
      } catch (h) {
        throw h === ws ? Il : h;
      }
    else a = e;
    e = ie();
    var r = e.queue,
      o = r.dispatch;
    return (
      n !== e.memoizedState &&
        ((wt.flags |= 2048), Di(9, lr(), zy.bind(null, r, n), null)),
      [a, o, t]
    );
  }
  function zy(t, e) {
    t.action = e;
  }
  function Qd(t) {
    var e = ie(),
      n = Ht;
    if (n !== null) return Gd(e, n, t);
    ie(), (e = e.memoizedState), (n = ie());
    var a = n.queue.dispatch;
    return (n.memoizedState = t), [e, a, !1];
  }
  function Di(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = wt.updateQueue),
      e === null && ((e = bo()), (wt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function lr() {
    return { destroy: void 0, resource: void 0 };
  }
  function Xd() {
    return ie().memoizedState;
  }
  function rr(t, e, n, a) {
    var r = ze();
    (a = a === void 0 ? null : a),
      (wt.flags |= t),
      (r.memoizedState = Di(1 | e, lr(), n, a));
  }
  function Ns(t, e, n, a) {
    var r = ie();
    a = a === void 0 ? null : a;
    var o = r.memoizedState.inst;
    Ht !== null && a !== null && mo(a, Ht.memoizedState.deps)
      ? (r.memoizedState = Di(e, o, n, a))
      : ((wt.flags |= t), (r.memoizedState = Di(1 | e, o, n, a)));
  }
  function Kd(t, e) {
    rr(8390656, 8, t, e);
  }
  function Jd(t, e) {
    Ns(2048, 8, t, e);
  }
  function $d(t, e) {
    return Ns(4, 2, t, e);
  }
  function Pd(t, e) {
    return Ns(4, 4, t, e);
  }
  function Fd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Wd(t, e, n) {
    (n = n != null ? n.concat([t]) : null), Ns(4, 4, Fd.bind(null, e, t), n);
  }
  function Ro() {}
  function Id(t, e) {
    var n = ie();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && mo(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function th(t, e) {
    var n = ie();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && mo(e, a[1])) return a[0];
    if (((a = t()), Ja)) {
      sn(!0);
      try {
        t();
      } finally {
        sn(!1);
      }
    }
    return (n.memoizedState = [a, e]), a;
  }
  function wo(t, e, n) {
    return n === void 0 || (la & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = am()), (wt.lanes |= t), (ha |= t), n);
  }
  function eh(t, e, n, a) {
    return ke(n, e)
      ? n
      : Mi.current !== null
        ? ((t = wo(t, n, a)), ke(t, e) || (fe = !0), t)
        : (la & 42) === 0
          ? ((fe = !0), (t.memoizedState = n))
          : ((t = am()), (wt.lanes |= t), (ha |= t), e);
  }
  function nh(t, e, n, a, r) {
    var o = q.p;
    q.p = o !== 0 && 8 > o ? o : 8;
    var h = E.T,
      b = {};
    (E.T = b), Oo(t, !1, e, n);
    try {
      var _ = r(),
        A = E.S;
      if (
        (A !== null && A(b, _),
        _ !== null && typeof _ == "object" && typeof _.then == "function")
      ) {
        var U = My(_, a);
        Us(t, e, U, Ye(t));
      } else Us(t, e, a, Ye(t));
    } catch (H) {
      Us(t, e, { then: function () {}, status: "rejected", reason: H }, Ye());
    } finally {
      (q.p = o), (E.T = h);
    }
  }
  function Ny() {}
  function Ao(t, e, n, a) {
    if (t.tag !== 5) throw Error(u(476));
    var r = ah(t).queue;
    nh(
      t,
      r,
      e,
      I,
      n === null
        ? Ny
        : function () {
            return ih(t), n(a);
          },
    );
  }
  function ah(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kn,
        lastRenderedState: I,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: kn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function ih(t) {
    var e = ah(t).next.queue;
    Us(t, e, {}, Ye());
  }
  function Mo() {
    return Se(Ws);
  }
  function sh() {
    return ie().memoizedState;
  }
  function lh() {
    return ie().memoizedState;
  }
  function Uy(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ye();
          t = ia(n);
          var a = sa(e, t, n);
          a !== null && (Ge(a, e, n), Ms(a, e, n)),
            (e = { cache: ao() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function jy(t, e, n) {
    var a = Ye();
    (n = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ur(t)
        ? uh(e, n)
        : ((n = Ku(t, e, n, a)), n !== null && (Ge(n, t, a), oh(n, e, a)));
  }
  function rh(t, e, n) {
    var a = Ye();
    Us(t, e, n, a);
  }
  function Us(t, e, n, a) {
    var r = {
      lane: a,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ur(t)) uh(e, r);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var h = e.lastRenderedState,
            b = o(h, n);
          if (((r.hasEagerState = !0), (r.eagerState = b), ke(b, h)))
            return Ql(t, e, r, 0), Gt === null && Gl(), !1;
        } catch {
        } finally {
        }
      if (((n = Ku(t, e, r, a)), n !== null))
        return Ge(n, t, a), oh(n, e, a), !0;
    }
    return !1;
  }
  function Oo(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: rc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ur(t))
    ) {
      if (e) throw Error(u(479));
    } else (e = Ku(t, n, a, 2)), e !== null && Ge(e, t, 2);
  }
  function ur(t) {
    var e = t.alternate;
    return t === wt || (e !== null && e === wt);
  }
  function uh(t, e) {
    Oi = nr = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e);
  }
  function oh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (n |= a), (e.lanes = n), Pt(t, n);
    }
  }
  var or = {
      readContext: Se,
      use: ir,
      useCallback: It,
      useContext: It,
      useEffect: It,
      useImperativeHandle: It,
      useLayoutEffect: It,
      useInsertionEffect: It,
      useMemo: It,
      useReducer: It,
      useRef: It,
      useState: It,
      useDebugValue: It,
      useDeferredValue: It,
      useTransition: It,
      useSyncExternalStore: It,
      useId: It,
      useHostTransitionStatus: It,
      useFormState: It,
      useActionState: It,
      useOptimistic: It,
      useMemoCache: It,
      useCacheRefresh: It,
    },
    ch = {
      readContext: Se,
      use: ir,
      useCallback: function (t, e) {
        return (ze().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: Se,
      useEffect: Kd,
      useImperativeHandle: function (t, e, n) {
        (n = n != null ? n.concat([t]) : null),
          rr(4194308, 4, Fd.bind(null, e, t), n);
      },
      useLayoutEffect: function (t, e) {
        return rr(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        rr(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ze();
        e = e === void 0 ? null : e;
        var a = t();
        if (Ja) {
          sn(!0);
          try {
            t();
          } finally {
            sn(!1);
          }
        }
        return (n.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, n) {
        var a = ze();
        if (n !== void 0) {
          var r = n(e);
          if (Ja) {
            sn(!0);
            try {
              n(e);
            } finally {
              sn(!1);
            }
          }
        } else r = e;
        return (
          (a.memoizedState = a.baseState = r),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: r,
          }),
          (a.queue = t),
          (t = t.dispatch = jy.bind(null, wt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ze();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = Eo(t);
        var e = t.queue,
          n = rh.bind(null, wt, e);
        return (e.dispatch = n), [t.memoizedState, n];
      },
      useDebugValue: Ro,
      useDeferredValue: function (t, e) {
        var n = ze();
        return wo(n, t, e);
      },
      useTransition: function () {
        var t = Eo(!1);
        return (
          (t = nh.bind(null, wt, t.queue, !0, !1)),
          (ze().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = wt,
          r = ze();
        if (Ut) {
          if (n === void 0) throw Error(u(407));
          n = n();
        } else {
          if (((n = e()), Gt === null)) throw Error(u(349));
          (Dt & 124) !== 0 || Dd(a, e, n);
        }
        r.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (r.queue = o),
          Kd(Nd.bind(null, a, o, t), [t]),
          (a.flags |= 2048),
          Di(9, lr(), zd.bind(null, a, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ze(),
          e = Gt.identifierPrefix;
        if (Ut) {
          var n = jn,
            a = Un;
          (n = (a & ~(1 << (32 - pe(a) - 1))).toString(32) + n),
            (e = "«" + e + "R" + n),
            (n = ar++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "»");
        } else (n = Oy++), (e = "«" + e + "r" + n.toString(32) + "»");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Mo,
      useFormState: Vd,
      useActionState: Vd,
      useOptimistic: function (t) {
        var e = ze();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Oo.bind(null, wt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: _o,
      useCacheRefresh: function () {
        return (ze().memoizedState = Uy.bind(null, wt));
      },
    },
    fh = {
      readContext: Se,
      use: ir,
      useCallback: Id,
      useContext: Se,
      useEffect: Jd,
      useImperativeHandle: Wd,
      useInsertionEffect: $d,
      useLayoutEffect: Pd,
      useMemo: th,
      useReducer: sr,
      useRef: Xd,
      useState: function () {
        return sr(kn);
      },
      useDebugValue: Ro,
      useDeferredValue: function (t, e) {
        var n = ie();
        return eh(n, Ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = sr(kn)[0],
          e = ie().memoizedState;
        return [typeof t == "boolean" ? t : zs(t), e];
      },
      useSyncExternalStore: Cd,
      useId: sh,
      useHostTransitionStatus: Mo,
      useFormState: Yd,
      useActionState: Yd,
      useOptimistic: function (t, e) {
        var n = ie();
        return Bd(n, Ht, t, e);
      },
      useMemoCache: _o,
      useCacheRefresh: lh,
    },
    By = {
      readContext: Se,
      use: ir,
      useCallback: Id,
      useContext: Se,
      useEffect: Jd,
      useImperativeHandle: Wd,
      useInsertionEffect: $d,
      useLayoutEffect: Pd,
      useMemo: th,
      useReducer: xo,
      useRef: Xd,
      useState: function () {
        return xo(kn);
      },
      useDebugValue: Ro,
      useDeferredValue: function (t, e) {
        var n = ie();
        return Ht === null ? wo(n, t, e) : eh(n, Ht.memoizedState, t, e);
      },
      useTransition: function () {
        var t = xo(kn)[0],
          e = ie().memoizedState;
        return [typeof t == "boolean" ? t : zs(t), e];
      },
      useSyncExternalStore: Cd,
      useId: sh,
      useHostTransitionStatus: Mo,
      useFormState: Qd,
      useActionState: Qd,
      useOptimistic: function (t, e) {
        var n = ie();
        return Ht !== null
          ? Bd(n, Ht, t, e)
          : ((n.baseState = t), [t, n.queue.dispatch]);
      },
      useMemoCache: _o,
      useCacheRefresh: lh,
    },
    zi = null,
    js = 0;
  function cr(t) {
    var e = js;
    return (js += 1), zi === null && (zi = []), xd(zi, t, e);
  }
  function Bs(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function fr(t, e) {
    throw e.$$typeof === v
      ? Error(u(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          u(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function dh(t) {
    var e = t._init;
    return e(t._payload);
  }
  function hh(t) {
    function e(T, x) {
      if (t) {
        var R = T.deletions;
        R === null ? ((T.deletions = [x]), (T.flags |= 16)) : R.push(x);
      }
    }
    function n(T, x) {
      if (!t) return null;
      for (; x !== null; ) e(T, x), (x = x.sibling);
      return null;
    }
    function a(T) {
      for (var x = new Map(); T !== null; )
        T.key !== null ? x.set(T.key, T) : x.set(T.index, T), (T = T.sibling);
      return x;
    }
    function r(T, x) {
      return (T = Nn(T, x)), (T.index = 0), (T.sibling = null), T;
    }
    function o(T, x, R) {
      return (
        (T.index = R),
        t
          ? ((R = T.alternate),
            R !== null
              ? ((R = R.index), R < x ? ((T.flags |= 67108866), x) : R)
              : ((T.flags |= 67108866), x))
          : ((T.flags |= 1048576), x)
      );
    }
    function h(T) {
      return t && T.alternate === null && (T.flags |= 67108866), T;
    }
    function b(T, x, R, L) {
      return x === null || x.tag !== 6
        ? ((x = $u(R, T.mode, L)), (x.return = T), x)
        : ((x = r(x, R)), (x.return = T), x);
    }
    function _(T, x, R, L) {
      var lt = R.type;
      return lt === D
        ? U(T, x, R.props.children, L, R.key)
        : x !== null &&
            (x.elementType === lt ||
              (typeof lt == "object" &&
                lt !== null &&
                lt.$$typeof === B &&
                dh(lt) === x.type))
          ? ((x = r(x, R.props)), Bs(x, R), (x.return = T), x)
          : ((x = Kl(R.type, R.key, R.props, null, T.mode, L)),
            Bs(x, R),
            (x.return = T),
            x);
    }
    function A(T, x, R, L) {
      return x === null ||
        x.tag !== 4 ||
        x.stateNode.containerInfo !== R.containerInfo ||
        x.stateNode.implementation !== R.implementation
        ? ((x = Pu(R, T.mode, L)), (x.return = T), x)
        : ((x = r(x, R.children || [])), (x.return = T), x);
    }
    function U(T, x, R, L, lt) {
      return x === null || x.tag !== 7
        ? ((x = qa(R, T.mode, L, lt)), (x.return = T), x)
        : ((x = r(x, R)), (x.return = T), x);
    }
    function H(T, x, R) {
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return (x = $u("" + x, T.mode, R)), (x.return = T), x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case w:
            return (
              (R = Kl(x.type, x.key, x.props, null, T.mode, R)),
              Bs(R, x),
              (R.return = T),
              R
            );
          case z:
            return (x = Pu(x, T.mode, R)), (x.return = T), x;
          case B:
            var L = x._init;
            return (x = L(x._payload)), H(T, x, R);
        }
        if (rt(x) || J(x))
          return (x = qa(x, T.mode, R, null)), (x.return = T), x;
        if (typeof x.then == "function") return H(T, cr(x), R);
        if (x.$$typeof === tt) return H(T, Fl(T, x), R);
        fr(T, x);
      }
      return null;
    }
    function O(T, x, R, L) {
      var lt = x !== null ? x.key : null;
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return lt !== null ? null : b(T, x, "" + R, L);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case w:
            return R.key === lt ? _(T, x, R, L) : null;
          case z:
            return R.key === lt ? A(T, x, R, L) : null;
          case B:
            return (lt = R._init), (R = lt(R._payload)), O(T, x, R, L);
        }
        if (rt(R) || J(R)) return lt !== null ? null : U(T, x, R, L, null);
        if (typeof R.then == "function") return O(T, x, cr(R), L);
        if (R.$$typeof === tt) return O(T, x, Fl(T, R), L);
        fr(T, R);
      }
      return null;
    }
    function C(T, x, R, L, lt) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return (T = T.get(R) || null), b(x, T, "" + L, lt);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case w:
            return (
              (T = T.get(L.key === null ? R : L.key) || null), _(x, T, L, lt)
            );
          case z:
            return (
              (T = T.get(L.key === null ? R : L.key) || null), A(x, T, L, lt)
            );
          case B:
            var Mt = L._init;
            return (L = Mt(L._payload)), C(T, x, R, L, lt);
        }
        if (rt(L) || J(L)) return (T = T.get(R) || null), U(x, T, L, lt, null);
        if (typeof L.then == "function") return C(T, x, R, cr(L), lt);
        if (L.$$typeof === tt) return C(T, x, R, Fl(x, L), lt);
        fr(x, L);
      }
      return null;
    }
    function gt(T, x, R, L) {
      for (
        var lt = null, Mt = null, ft = x, vt = (x = 0), he = null;
        ft !== null && vt < R.length;
        vt++
      ) {
        ft.index > vt ? ((he = ft), (ft = null)) : (he = ft.sibling);
        var Nt = O(T, ft, R[vt], L);
        if (Nt === null) {
          ft === null && (ft = he);
          break;
        }
        t && ft && Nt.alternate === null && e(T, ft),
          (x = o(Nt, x, vt)),
          Mt === null ? (lt = Nt) : (Mt.sibling = Nt),
          (Mt = Nt),
          (ft = he);
      }
      if (vt === R.length) return n(T, ft), Ut && Va(T, vt), lt;
      if (ft === null) {
        for (; vt < R.length; vt++)
          (ft = H(T, R[vt], L)),
            ft !== null &&
              ((x = o(ft, x, vt)),
              Mt === null ? (lt = ft) : (Mt.sibling = ft),
              (Mt = ft));
        return Ut && Va(T, vt), lt;
      }
      for (ft = a(ft); vt < R.length; vt++)
        (he = C(ft, T, vt, R[vt], L)),
          he !== null &&
            (t &&
              he.alternate !== null &&
              ft.delete(he.key === null ? vt : he.key),
            (x = o(he, x, vt)),
            Mt === null ? (lt = he) : (Mt.sibling = he),
            (Mt = he));
      return (
        t &&
          ft.forEach(function (xa) {
            return e(T, xa);
          }),
        Ut && Va(T, vt),
        lt
      );
    }
    function pt(T, x, R, L) {
      if (R == null) throw Error(u(151));
      for (
        var lt = null,
          Mt = null,
          ft = x,
          vt = (x = 0),
          he = null,
          Nt = R.next();
        ft !== null && !Nt.done;
        vt++, Nt = R.next()
      ) {
        ft.index > vt ? ((he = ft), (ft = null)) : (he = ft.sibling);
        var xa = O(T, ft, Nt.value, L);
        if (xa === null) {
          ft === null && (ft = he);
          break;
        }
        t && ft && xa.alternate === null && e(T, ft),
          (x = o(xa, x, vt)),
          Mt === null ? (lt = xa) : (Mt.sibling = xa),
          (Mt = xa),
          (ft = he);
      }
      if (Nt.done) return n(T, ft), Ut && Va(T, vt), lt;
      if (ft === null) {
        for (; !Nt.done; vt++, Nt = R.next())
          (Nt = H(T, Nt.value, L)),
            Nt !== null &&
              ((x = o(Nt, x, vt)),
              Mt === null ? (lt = Nt) : (Mt.sibling = Nt),
              (Mt = Nt));
        return Ut && Va(T, vt), lt;
      }
      for (ft = a(ft); !Nt.done; vt++, Nt = R.next())
        (Nt = C(ft, T, vt, Nt.value, L)),
          Nt !== null &&
            (t &&
              Nt.alternate !== null &&
              ft.delete(Nt.key === null ? vt : Nt.key),
            (x = o(Nt, x, vt)),
            Mt === null ? (lt = Nt) : (Mt.sibling = Nt),
            (Mt = Nt));
      return (
        t &&
          ft.forEach(function (L0) {
            return e(T, L0);
          }),
        Ut && Va(T, vt),
        lt
      );
    }
    function Zt(T, x, R, L) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === D &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case w:
            t: {
              for (var lt = R.key; x !== null; ) {
                if (x.key === lt) {
                  if (((lt = R.type), lt === D)) {
                    if (x.tag === 7) {
                      n(T, x.sibling),
                        (L = r(x, R.props.children)),
                        (L.return = T),
                        (T = L);
                      break t;
                    }
                  } else if (
                    x.elementType === lt ||
                    (typeof lt == "object" &&
                      lt !== null &&
                      lt.$$typeof === B &&
                      dh(lt) === x.type)
                  ) {
                    n(T, x.sibling),
                      (L = r(x, R.props)),
                      Bs(L, R),
                      (L.return = T),
                      (T = L);
                    break t;
                  }
                  n(T, x);
                  break;
                } else e(T, x);
                x = x.sibling;
              }
              R.type === D
                ? ((L = qa(R.props.children, T.mode, L, R.key)),
                  (L.return = T),
                  (T = L))
                : ((L = Kl(R.type, R.key, R.props, null, T.mode, L)),
                  Bs(L, R),
                  (L.return = T),
                  (T = L));
            }
            return h(T);
          case z:
            t: {
              for (lt = R.key; x !== null; ) {
                if (x.key === lt)
                  if (
                    x.tag === 4 &&
                    x.stateNode.containerInfo === R.containerInfo &&
                    x.stateNode.implementation === R.implementation
                  ) {
                    n(T, x.sibling),
                      (L = r(x, R.children || [])),
                      (L.return = T),
                      (T = L);
                    break t;
                  } else {
                    n(T, x);
                    break;
                  }
                else e(T, x);
                x = x.sibling;
              }
              (L = Pu(R, T.mode, L)), (L.return = T), (T = L);
            }
            return h(T);
          case B:
            return (lt = R._init), (R = lt(R._payload)), Zt(T, x, R, L);
        }
        if (rt(R)) return gt(T, x, R, L);
        if (J(R)) {
          if (((lt = J(R)), typeof lt != "function")) throw Error(u(150));
          return (R = lt.call(R)), pt(T, x, R, L);
        }
        if (typeof R.then == "function") return Zt(T, x, cr(R), L);
        if (R.$$typeof === tt) return Zt(T, x, Fl(T, R), L);
        fr(T, R);
      }
      return (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
        ? ((R = "" + R),
          x !== null && x.tag === 6
            ? (n(T, x.sibling), (L = r(x, R)), (L.return = T), (T = L))
            : (n(T, x), (L = $u(R, T.mode, L)), (L.return = T), (T = L)),
          h(T))
        : n(T, x);
    }
    return function (T, x, R, L) {
      try {
        js = 0;
        var lt = Zt(T, x, R, L);
        return (zi = null), lt;
      } catch (ft) {
        if (ft === ws || ft === Il) throw ft;
        var Mt = He(29, ft, null, T.mode);
        return (Mt.lanes = L), (Mt.return = T), Mt;
      } finally {
      }
    };
  }
  var Ni = hh(!0),
    mh = hh(!1),
    We = M(null),
    _n = null;
  function ra(t) {
    var e = t.alternate;
    j(ue, ue.current & 1),
      j(We, t),
      _n === null &&
        (e === null || Mi.current !== null || e.memoizedState !== null) &&
        (_n = t);
  }
  function ph(t) {
    if (t.tag === 22) {
      if ((j(ue, ue.current), j(We, t), _n === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (_n = t);
      }
    } else ua();
  }
  function ua() {
    j(ue, ue.current), j(We, We.current);
  }
  function Hn(t) {
    Z(We), _n === t && (_n = null), Z(ue);
  }
  var ue = M(0);
  function dr(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || bc(n))
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  function Co(t, e, n, a) {
    (e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : g({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Do = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = Ye(),
        r = ia(a);
      (r.payload = e),
        n != null && (r.callback = n),
        (e = sa(t, r, a)),
        e !== null && (Ge(e, t, a), Ms(e, t, a));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = Ye(),
        r = ia(a);
      (r.tag = 1),
        (r.payload = e),
        n != null && (r.callback = n),
        (e = sa(t, r, a)),
        e !== null && (Ge(e, t, a), Ms(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ye(),
        a = ia(n);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = sa(t, a, n)),
        e !== null && (Ge(e, t, n), Ms(e, t, n));
    },
  };
  function vh(t, e, n, a, r, o, h) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, o, h)
        : e.prototype && e.prototype.isPureReactComponent
          ? !gs(n, a) || !gs(r, o)
          : !0
    );
  }
  function yh(t, e, n, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Do.enqueueReplaceState(e, e.state, null);
  }
  function $a(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = g({}, n));
      for (var r in t) n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  var hr =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function gh(t) {
    hr(t);
  }
  function bh(t) {
    console.error(t);
  }
  function _h(t) {
    hr(t);
  }
  function mr(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Sh(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function zo(t, e, n) {
    return (
      (n = ia(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        mr(t, e);
      }),
      n
    );
  }
  function xh(t) {
    return (t = ia(t)), (t.tag = 3), t;
  }
  function Eh(t, e, n, a) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = a.value;
      (t.payload = function () {
        return r(o);
      }),
        (t.callback = function () {
          Sh(e, n, a);
        });
    }
    var h = n.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (t.callback = function () {
        Sh(e, n, a),
          typeof r != "function" &&
            (ma === null ? (ma = new Set([this])) : ma.add(this));
        var b = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: b !== null ? b : "",
        });
      });
  }
  function Ly(t, e, n, a, r) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Es(e, n, r, !0),
        (n = We.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 13:
            return (
              _n === null ? nc() : n.alternate === null && $t === 0 && ($t = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              a === lo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  ic(t, a, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === lo
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  ic(t, a, r)),
              !1
            );
        }
        throw Error(u(435, n.tag));
      }
      return ic(t, a, r), nc(), !1;
    }
    if (Ut)
      return (
        (e = We.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = r),
            a !== Iu && ((t = Error(u(422), { cause: a })), xs(Je(t, n))))
          : (a !== Iu && ((e = Error(u(423), { cause: a })), xs(Je(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (r &= -r),
            (t.lanes |= r),
            (a = Je(a, n)),
            (r = zo(t.stateNode, a, r)),
            oo(t, r),
            $t !== 4 && ($t = 2)),
        !1
      );
    var o = Error(u(520), { cause: a });
    if (
      ((o = Je(o, n)),
      Ys === null ? (Ys = [o]) : Ys.push(o),
      $t !== 4 && ($t = 2),
      e === null)
    )
      return !0;
    (a = Je(a, n)), (n = e);
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = r & -r),
            (n.lanes |= t),
            (t = zo(n.stateNode, a, t)),
            oo(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (ma === null || !ma.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (r &= -r),
              (n.lanes |= r),
              (r = xh(r)),
              Eh(r, t, n, a),
              oo(n, r),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Th = Error(u(461)),
    fe = !1;
  function ye(t, e, n, a) {
    e.child = t === null ? mh(e, null, n, a) : Ni(e, t.child, n, a);
  }
  function Rh(t, e, n, a, r) {
    n = n.render;
    var o = e.ref;
    if ("ref" in a) {
      var h = {};
      for (var b in a) b !== "ref" && (h[b] = a[b]);
    } else h = a;
    return (
      Xa(e),
      (a = po(t, e, n, h, o, r)),
      (b = vo()),
      t !== null && !fe
        ? (yo(t, e, r), qn(t, e, r))
        : (Ut && b && Fu(e), (e.flags |= 1), ye(t, e, a, r), e.child)
    );
  }
  function wh(t, e, n, a, r) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Ju(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), Ah(t, e, o, a, r))
        : ((t = Kl(n.type, null, a, e, e.mode, r)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !qo(t, r))) {
      var h = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : gs), n(h, a) && t.ref === e.ref)
      )
        return qn(t, e, r);
    }
    return (
      (e.flags |= 1),
      (t = Nn(o, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ah(t, e, n, a, r) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (gs(o, a) && t.ref === e.ref)
        if (((fe = !1), (e.pendingProps = a = o), qo(t, r)))
          (t.flags & 131072) !== 0 && (fe = !0);
        else return (e.lanes = t.lanes), qn(t, e, r);
    }
    return No(t, e, n, a, r);
  }
  function Mh(t, e, n) {
    var a = e.pendingProps,
      r = a.children,
      o = t !== null ? t.memoizedState : null;
    if (a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (((a = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (r = e.child = t.child, o = 0; r !== null; )
            (o = o | r.lanes | r.childLanes), (r = r.sibling);
          e.childLanes = o & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return Oh(t, e, a, n);
      }
      if ((n & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Wl(e, o !== null ? o.cachePool : null),
          o !== null ? Ad(e, o) : fo(),
          ph(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Oh(t, e, o !== null ? o.baseLanes | n : n, n)
        );
    } else
      o !== null
        ? (Wl(e, o.cachePool), Ad(e, o), ua(), (e.memoizedState = null))
        : (t !== null && Wl(e, null), fo(), ua());
    return ye(t, e, r, n), e.child;
  }
  function Oh(t, e, n, a) {
    var r = so();
    return (
      (r = r === null ? null : { parent: re._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && Wl(e, null),
      fo(),
      ph(e),
      t !== null && Es(t, e, a, !0),
      null
    );
  }
  function pr(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(u(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function No(t, e, n, a, r) {
    return (
      Xa(e),
      (n = po(t, e, n, a, void 0, r)),
      (a = vo()),
      t !== null && !fe
        ? (yo(t, e, r), qn(t, e, r))
        : (Ut && a && Fu(e), (e.flags |= 1), ye(t, e, n, r), e.child)
    );
  }
  function Ch(t, e, n, a, r, o) {
    return (
      Xa(e),
      (e.updateQueue = null),
      (n = Od(e, a, n, r)),
      Md(t),
      (a = vo()),
      t !== null && !fe
        ? (yo(t, e, o), qn(t, e, o))
        : (Ut && a && Fu(e), (e.flags |= 1), ye(t, e, n, o), e.child)
    );
  }
  function Dh(t, e, n, a, r) {
    if ((Xa(e), e.stateNode === null)) {
      var o = Ei,
        h = n.contextType;
      typeof h == "object" && h !== null && (o = Se(h)),
        (o = new n(a, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = Do),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = a),
        (o.state = e.memoizedState),
        (o.refs = {}),
        ro(e),
        (h = n.contextType),
        (o.context = typeof h == "object" && h !== null ? Se(h) : Ei),
        (o.state = e.memoizedState),
        (h = n.getDerivedStateFromProps),
        typeof h == "function" && (Co(e, n, h, a), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((h = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          h !== o.state && Do.enqueueReplaceState(o, o.state, null),
          Cs(e, a, o, r),
          Os(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      o = e.stateNode;
      var b = e.memoizedProps,
        _ = $a(n, b);
      o.props = _;
      var A = o.context,
        U = n.contextType;
      (h = Ei), typeof U == "object" && U !== null && (h = Se(U));
      var H = n.getDerivedStateFromProps;
      (U =
        typeof H == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (b = e.pendingProps !== b),
        U ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((b || A !== h) && yh(e, o, a, h)),
        (aa = !1);
      var O = e.memoizedState;
      (o.state = O),
        Cs(e, a, o, r),
        Os(),
        (A = e.memoizedState),
        b || O !== A || aa
          ? (typeof H == "function" && (Co(e, n, H, a), (A = e.memoizedState)),
            (_ = aa || vh(e, n, _, a, O, A, h))
              ? (U ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = A)),
            (o.props = a),
            (o.state = A),
            (o.context = h),
            (a = _))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (o = e.stateNode),
        uo(t, e),
        (h = e.memoizedProps),
        (U = $a(n, h)),
        (o.props = U),
        (H = e.pendingProps),
        (O = o.context),
        (A = n.contextType),
        (_ = Ei),
        typeof A == "object" && A !== null && (_ = Se(A)),
        (b = n.getDerivedStateFromProps),
        (A =
          typeof b == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((h !== H || O !== _) && yh(e, o, a, _)),
        (aa = !1),
        (O = e.memoizedState),
        (o.state = O),
        Cs(e, a, o, r),
        Os();
      var C = e.memoizedState;
      h !== H ||
      O !== C ||
      aa ||
      (t !== null && t.dependencies !== null && Pl(t.dependencies))
        ? (typeof b == "function" && (Co(e, n, b, a), (C = e.memoizedState)),
          (U =
            aa ||
            vh(e, n, U, a, O, C, _) ||
            (t !== null && t.dependencies !== null && Pl(t.dependencies)))
            ? (A ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(a, C, _),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(a, C, _)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (h === t.memoizedProps && O === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (h === t.memoizedProps && O === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = C)),
          (o.props = a),
          (o.state = C),
          (o.context = _),
          (a = U))
        : (typeof o.componentDidUpdate != "function" ||
            (h === t.memoizedProps && O === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (h === t.memoizedProps && O === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (o = a),
      pr(t, e),
      (a = (e.flags & 128) !== 0),
      o || a
        ? ((o = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Ni(e, t.child, null, r)),
              (e.child = Ni(e, null, n, r)))
            : ye(t, e, n, r),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = qn(t, e, r)),
      t
    );
  }
  function zh(t, e, n, a) {
    return Ss(), (e.flags |= 256), ye(t, e, n, a), e.child;
  }
  var Uo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function jo(t) {
    return { baseLanes: t, cachePool: bd() };
  }
  function Bo(t, e, n) {
    return (t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ie), t;
  }
  function Nh(t, e, n) {
    var a = e.pendingProps,
      r = !1,
      o = (e.flags & 128) !== 0,
      h;
    if (
      ((h = o) ||
        (h =
          t !== null && t.memoizedState === null ? !1 : (ue.current & 2) !== 0),
      h && ((r = !0), (e.flags &= -129)),
      (h = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ut) {
        if ((r ? ra(e) : ua(), Ut)) {
          var b = Jt,
            _;
          if ((_ = b)) {
            t: {
              for (_ = b, b = bn; _.nodeType !== 8; ) {
                if (!b) {
                  b = null;
                  break t;
                }
                if (((_ = on(_.nextSibling)), _ === null)) {
                  b = null;
                  break t;
                }
              }
              b = _;
            }
            b !== null
              ? ((e.memoizedState = {
                  dehydrated: b,
                  treeContext: Za !== null ? { id: Un, overflow: jn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (_ = He(18, null, null, 0)),
                (_.stateNode = b),
                (_.return = e),
                (e.child = _),
                (we = e),
                (Jt = null),
                (_ = !0))
              : (_ = !1);
          }
          _ || Ga(e);
        }
        if (
          ((b = e.memoizedState),
          b !== null && ((b = b.dehydrated), b !== null))
        )
          return bc(b) ? (e.lanes = 32) : (e.lanes = 536870912), null;
        Hn(e);
      }
      return (
        (b = a.children),
        (a = a.fallback),
        r
          ? (ua(),
            (r = e.mode),
            (b = vr({ mode: "hidden", children: b }, r)),
            (a = qa(a, r, n, null)),
            (b.return = e),
            (a.return = e),
            (b.sibling = a),
            (e.child = b),
            (r = e.child),
            (r.memoizedState = jo(n)),
            (r.childLanes = Bo(t, h, n)),
            (e.memoizedState = Uo),
            a)
          : (ra(e), Lo(e, b))
      );
    }
    if (
      ((_ = t.memoizedState), _ !== null && ((b = _.dehydrated), b !== null))
    ) {
      if (o)
        e.flags & 256
          ? (ra(e), (e.flags &= -257), (e = ko(t, e, n)))
          : e.memoizedState !== null
            ? (ua(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (ua(),
              (r = a.fallback),
              (b = e.mode),
              (a = vr({ mode: "visible", children: a.children }, b)),
              (r = qa(r, b, n, null)),
              (r.flags |= 2),
              (a.return = e),
              (r.return = e),
              (a.sibling = r),
              (e.child = a),
              Ni(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = jo(n)),
              (a.childLanes = Bo(t, h, n)),
              (e.memoizedState = Uo),
              (e = r));
      else if ((ra(e), bc(b))) {
        if (((h = b.nextSibling && b.nextSibling.dataset), h)) var A = h.dgst;
        (h = A),
          (a = Error(u(419))),
          (a.stack = ""),
          (a.digest = h),
          xs({ value: a, source: null, stack: null }),
          (e = ko(t, e, n));
      } else if (
        (fe || Es(t, e, n, !1), (h = (n & t.childLanes) !== 0), fe || h)
      ) {
        if (
          ((h = Gt),
          h !== null &&
            ((a = n & -n),
            (a = (a & 42) !== 0 ? 1 : ne(a)),
            (a = (a & (h.suspendedLanes | n)) !== 0 ? 0 : a),
            a !== 0 && a !== _.retryLane))
        )
          throw ((_.retryLane = a), xi(t, a), Ge(h, t, a), Th);
        b.data === "$?" || nc(), (e = ko(t, e, n));
      } else
        b.data === "$?"
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = _.treeContext),
            (Jt = on(b.nextSibling)),
            (we = e),
            (Ut = !0),
            (Ya = null),
            (bn = !1),
            t !== null &&
              ((Pe[Fe++] = Un),
              (Pe[Fe++] = jn),
              (Pe[Fe++] = Za),
              (Un = t.id),
              (jn = t.overflow),
              (Za = e)),
            (e = Lo(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return r
      ? (ua(),
        (r = a.fallback),
        (b = e.mode),
        (_ = t.child),
        (A = _.sibling),
        (a = Nn(_, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = _.subtreeFlags & 65011712),
        A !== null ? (r = Nn(A, r)) : ((r = qa(r, b, n, null)), (r.flags |= 2)),
        (r.return = e),
        (a.return = e),
        (a.sibling = r),
        (e.child = a),
        (a = r),
        (r = e.child),
        (b = t.child.memoizedState),
        b === null
          ? (b = jo(n))
          : ((_ = b.cachePool),
            _ !== null
              ? ((A = re._currentValue),
                (_ = _.parent !== A ? { parent: A, pool: A } : _))
              : (_ = bd()),
            (b = { baseLanes: b.baseLanes | n, cachePool: _ })),
        (r.memoizedState = b),
        (r.childLanes = Bo(t, h, n)),
        (e.memoizedState = Uo),
        a)
      : (ra(e),
        (n = t.child),
        (t = n.sibling),
        (n = Nn(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((h = e.deletions),
          h === null ? ((e.deletions = [t]), (e.flags |= 16)) : h.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Lo(t, e) {
    return (
      (e = vr({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function vr(t, e) {
    return (
      (t = He(22, t, null, e)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function ko(t, e, n) {
    return (
      Ni(e, t.child, null, n),
      (t = Lo(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Uh(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), eo(t.return, e, n);
  }
  function Ho(t, e, n, a, r) {
    var o = t.memoizedState;
    o === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: r,
        })
      : ((o.isBackwards = e),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = a),
        (o.tail = n),
        (o.tailMode = r));
  }
  function jh(t, e, n) {
    var a = e.pendingProps,
      r = a.revealOrder,
      o = a.tail;
    if ((ye(t, e, a.children, n), (a = ue.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Uh(t, n, e);
          else if (t.tag === 19) Uh(t, n, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((j(ue, a), r)) {
      case "forwards":
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate),
            t !== null && dr(t) === null && (r = n),
            (n = n.sibling);
        (n = r),
          n === null
            ? ((r = e.child), (e.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          Ho(e, !1, r, n, o);
        break;
      case "backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && dr(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        Ho(e, !0, n, null, o);
        break;
      case "together":
        Ho(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function qn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (ha |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Es(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(u(153));
    if (e.child !== null) {
      for (
        t = e.child, n = Nn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (n = n.sibling = Nn(t, t.pendingProps)),
          (n.return = e);
      n.sibling = null;
    }
    return e.child;
  }
  function qo(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Pl(t)));
  }
  function ky(t, e, n) {
    switch (e.tag) {
      case 3:
        ct(e, e.stateNode.containerInfo),
          na(e, re, t.memoizedState.cache),
          Ss();
        break;
      case 27:
      case 5:
        Te(e);
        break;
      case 4:
        ct(e, e.stateNode.containerInfo);
        break;
      case 10:
        na(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ra(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Nh(t, e, n)
              : (ra(e), (t = qn(t, e, n)), t !== null ? t.sibling : null);
        ra(e);
        break;
      case 19:
        var r = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (Es(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          r)
        ) {
          if (a) return jh(t, e, n);
          e.flags |= 128;
        }
        if (
          ((r = e.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          j(ue, ue.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Mh(t, e, n);
      case 24:
        na(e, re, t.memoizedState.cache);
    }
    return qn(t, e, n);
  }
  function Bh(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) fe = !0;
      else {
        if (!qo(t, n) && (e.flags & 128) === 0) return (fe = !1), ky(t, e, n);
        fe = (t.flags & 131072) !== 0;
      }
    else (fe = !1), Ut && (e.flags & 1048576) !== 0 && dd(e, $l, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            r = a._init;
          if (((a = r(a._payload)), (e.type = a), typeof a == "function"))
            Ju(a)
              ? ((t = $a(a, t)), (e.tag = 1), (e = Dh(null, e, a, t, n)))
              : ((e.tag = 0), (e = No(null, e, a, t, n)));
          else {
            if (a != null) {
              if (((r = a.$$typeof), r === mt)) {
                (e.tag = 11), (e = Rh(null, e, a, t, n));
                break t;
              } else if (r === at) {
                (e.tag = 14), (e = wh(null, e, a, t, n));
                break t;
              }
            }
            throw ((e = Rt(a) || a), Error(u(306, e, "")));
          }
        }
        return e;
      case 0:
        return No(t, e, e.type, e.pendingProps, n);
      case 1:
        return (a = e.type), (r = $a(a, e.pendingProps)), Dh(t, e, a, r, n);
      case 3:
        t: {
          if ((ct(e, e.stateNode.containerInfo), t === null))
            throw Error(u(387));
          a = e.pendingProps;
          var o = e.memoizedState;
          (r = o.element), uo(t, e), Cs(e, a, null, n);
          var h = e.memoizedState;
          if (
            ((a = h.cache),
            na(e, re, a),
            a !== o.cache && no(e, [re], n, !0),
            Os(),
            (a = h.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: a, isDehydrated: !1, cache: h.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = zh(t, e, a, n);
              break t;
            } else if (a !== r) {
              (r = Je(Error(u(424)), e)), xs(r), (e = zh(t, e, a, n));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Jt = on(t.firstChild),
                  we = e,
                  Ut = !0,
                  Ya = null,
                  bn = !0,
                  n = mh(e, null, a, n),
                  e.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
            }
          else {
            if ((Ss(), a === r)) {
              e = qn(t, e, n);
              break t;
            }
            ye(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          pr(t, e),
          t === null
            ? (n = qm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Ut ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = Cr(K.current).createElement(n)),
                (a[Wt] = e),
                (a[Yt] = t),
                be(a, n, t),
                ce(a),
                (e.stateNode = a))
            : (e.memoizedState = qm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Te(e),
          t === null &&
            Ut &&
            ((a = e.stateNode = Lm(e.type, e.pendingProps, K.current)),
            (we = e),
            (bn = !0),
            (r = Jt),
            ya(e.type) ? ((_c = r), (Jt = on(a.firstChild))) : (Jt = r)),
          ye(t, e, e.pendingProps.children, n),
          pr(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ut &&
            ((r = a = Jt) &&
              ((a = d0(a, e.type, e.pendingProps, bn)),
              a !== null
                ? ((e.stateNode = a),
                  (we = e),
                  (Jt = on(a.firstChild)),
                  (bn = !1),
                  (r = !0))
                : (r = !1)),
            r || Ga(e)),
          Te(e),
          (r = e.type),
          (o = e.pendingProps),
          (h = t !== null ? t.memoizedProps : null),
          (a = o.children),
          vc(r, o) ? (a = null) : h !== null && vc(r, h) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((r = po(t, e, Cy, null, null, n)), (Ws._currentValue = r)),
          pr(t, e),
          ye(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ut &&
            ((t = n = Jt) &&
              ((n = h0(n, e.pendingProps, bn)),
              n !== null
                ? ((e.stateNode = n), (we = e), (Jt = null), (t = !0))
                : (t = !1)),
            t || Ga(e)),
          null
        );
      case 13:
        return Nh(t, e, n);
      case 4:
        return (
          ct(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Ni(e, null, a, n)) : ye(t, e, a, n),
          e.child
        );
      case 11:
        return Rh(t, e, e.type, e.pendingProps, n);
      case 7:
        return ye(t, e, e.pendingProps, n), e.child;
      case 8:
        return ye(t, e, e.pendingProps.children, n), e.child;
      case 12:
        return ye(t, e, e.pendingProps.children, n), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          na(e, e.type, a.value),
          ye(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (r = e.type._context),
          (a = e.pendingProps.children),
          Xa(e),
          (r = Se(r)),
          (a = a(r)),
          (e.flags |= 1),
          ye(t, e, a, n),
          e.child
        );
      case 14:
        return wh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Ah(t, e, e.type, e.pendingProps, n);
      case 19:
        return jh(t, e, n);
      case 31:
        return (
          (a = e.pendingProps),
          (n = e.mode),
          (a = { mode: a.mode, children: a.children }),
          t === null
            ? ((n = vr(a, n)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n))
            : ((n = Nn(t.child, a)),
              (n.ref = e.ref),
              (e.child = n),
              (n.return = e),
              (e = n)),
          e
        );
      case 22:
        return Mh(t, e, n);
      case 24:
        return (
          Xa(e),
          (a = Se(re)),
          t === null
            ? ((r = so()),
              r === null &&
                ((r = Gt),
                (o = ao()),
                (r.pooledCache = o),
                o.refCount++,
                o !== null && (r.pooledCacheLanes |= n),
                (r = o)),
              (e.memoizedState = { parent: a, cache: r }),
              ro(e),
              na(e, re, r))
            : ((t.lanes & n) !== 0 && (uo(t, e), Cs(e, null, null, n), Os()),
              (r = t.memoizedState),
              (o = e.memoizedState),
              r.parent !== a
                ? ((r = { parent: a, cache: a }),
                  (e.memoizedState = r),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = r),
                  na(e, re, a))
                : ((a = o.cache),
                  na(e, re, a),
                  a !== r.cache && no(e, [re], n, !0))),
          ye(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(u(156, e.tag));
  }
  function Zn(t) {
    t.flags |= 4;
  }
  function Lh(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !Qm(e))) {
      if (
        ((e = We.current),
        e !== null &&
          ((Dt & 4194048) === Dt
            ? _n !== null
            : ((Dt & 62914560) !== Dt && (Dt & 536870912) === 0) || e !== _n))
      )
        throw ((As = lo), _d);
      t.flags |= 8192;
    }
  }
  function yr(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Dl() : 536870912), (t.lanes |= e), (Li |= e));
  }
  function Ls(t, e) {
    if (!Ut)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            e.alternate !== null && (n = e), (e = e.sibling);
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Xt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (a |= r.subtreeFlags & 65011712),
          (a |= r.flags & 65011712),
          (r.return = t),
          (r = r.sibling);
    else
      for (r = t.child; r !== null; )
        (n |= r.lanes | r.childLanes),
          (a |= r.subtreeFlags),
          (a |= r.flags),
          (r.return = t),
          (r = r.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = n), e;
  }
  function Hy(t, e, n) {
    var a = e.pendingProps;
    switch ((Wu(e), e.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Xt(e), null;
      case 1:
        return Xt(e), null;
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ln(re),
          jt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (_s(e)
              ? Zn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), pd())),
          Xt(e),
          null
        );
      case 26:
        return (
          (n = e.memoizedState),
          t === null
            ? (Zn(e),
              n !== null ? (Xt(e), Lh(e, n)) : (Xt(e), (e.flags &= -16777217)))
            : n
              ? n !== t.memoizedState
                ? (Zn(e), Xt(e), Lh(e, n))
                : (Xt(e), (e.flags &= -16777217))
              : (t.memoizedProps !== a && Zn(e), Xt(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Oe(e), (n = K.current);
        var r = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && Zn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(u(166));
            return Xt(e), null;
          }
          (t = $.current),
            _s(e) ? hd(e) : ((t = Lm(r, a, n)), (e.stateNode = t), Zn(e));
        }
        return Xt(e), null;
      case 5:
        if ((Oe(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Zn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(u(166));
            return Xt(e), null;
          }
          if (((t = $.current), _s(e))) hd(e);
          else {
            switch (((r = Cr(K.current)), t)) {
              case 1:
                t = r.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                t = r.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    t = r.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    t = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    (t = r.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? r.createElement("select", { is: a.is })
                        : r.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? r.createElement(n, { is: a.is })
                        : r.createElement(n);
                }
            }
            (t[Wt] = e), (t[Yt] = a);
            t: for (r = e.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                (r.child.return = r), (r = r.child);
                continue;
              }
              if (r === e) break t;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === e) break t;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            }
            e.stateNode = t;
            t: switch ((be(t, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Zn(e);
          }
        }
        return Xt(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Zn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(u(166));
          if (((t = K.current), _s(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (r = we),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  a = r.memoizedProps;
              }
            (t[Wt] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Cm(t.nodeValue, n)
              )),
              t || Ga(e);
          } else (t = Cr(t).createTextNode(a)), (t[Wt] = e), (e.stateNode = t);
        }
        return Xt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((r = _s(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!r) throw Error(u(318));
              if (
                ((r = e.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(u(317));
              r[Wt] = e;
            } else
              Ss(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Xt(e), (r = !1);
          } else
            (r = pd()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = r),
              (r = !0);
          if (!r) return e.flags & 256 ? (Hn(e), e) : (Hn(e), null);
        }
        if ((Hn(e), (e.flags & 128) !== 0)) return (e.lanes = n), e;
        if (
          ((n = a !== null), (t = t !== null && t.memoizedState !== null), n)
        ) {
          (a = e.child),
            (r = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (r = a.alternate.memoizedState.cachePool.pool);
          var o = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (o = a.memoizedState.cachePool.pool),
            o !== r && (a.flags |= 2048);
        }
        return (
          n !== t && n && (e.child.flags |= 8192),
          yr(e, e.updateQueue),
          Xt(e),
          null
        );
      case 4:
        return jt(), t === null && fc(e.stateNode.containerInfo), Xt(e), null;
      case 10:
        return Ln(e.type), Xt(e), null;
      case 19:
        if ((Z(ue), (r = e.memoizedState), r === null)) return Xt(e), null;
        if (((a = (e.flags & 128) !== 0), (o = r.rendering), o === null))
          if (a) Ls(r, !1);
          else {
            if ($t !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = dr(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      Ls(r, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      yr(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    fd(n, t), (n = n.sibling);
                  return j(ue, (ue.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            r.tail !== null &&
              Bt() > _r &&
              ((e.flags |= 128), (a = !0), Ls(r, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = dr(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                yr(e, t),
                Ls(r, !0),
                r.tail === null &&
                  r.tailMode === "hidden" &&
                  !o.alternate &&
                  !Ut)
              )
                return Xt(e), null;
            } else
              2 * Bt() - r.renderingStartTime > _r &&
                n !== 536870912 &&
                ((e.flags |= 128), (a = !0), Ls(r, !1), (e.lanes = 4194304));
          r.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = r.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (r.last = o));
        }
        return r.tail !== null
          ? ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = Bt()),
            (e.sibling = null),
            (t = ue.current),
            j(ue, a ? (t & 1) | 2 : t & 1),
            e)
          : (Xt(e), null);
      case 22:
      case 23:
        return (
          Hn(e),
          ho(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Xt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Xt(e),
          (n = e.updateQueue),
          n !== null && yr(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && Z(Ka),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          Ln(re),
          Xt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, e.tag));
  }
  function qy(t, e) {
    switch ((Wu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ln(re),
          jt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Oe(e), null;
      case 13:
        if (
          (Hn(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(u(340));
          Ss();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Z(ue), null;
      case 4:
        return jt(), null;
      case 10:
        return Ln(e.type), null;
      case 22:
      case 23:
        return (
          Hn(e),
          ho(),
          t !== null && Z(Ka),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Ln(re), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function kh(t, e) {
    switch ((Wu(e), e.tag)) {
      case 3:
        Ln(re), jt();
        break;
      case 26:
      case 27:
      case 5:
        Oe(e);
        break;
      case 4:
        jt();
        break;
      case 13:
        Hn(e);
        break;
      case 19:
        Z(ue);
        break;
      case 10:
        Ln(e.type);
        break;
      case 22:
      case 23:
        Hn(e), ho(), t !== null && Z(Ka);
        break;
      case 24:
        Ln(re);
    }
  }
  function ks(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var r = a.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var o = n.create,
              h = n.inst;
            (a = o()), (h.destroy = a);
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (b) {
      Vt(e, e.return, b);
    }
  }
  function oa(t, e, n) {
    try {
      var a = e.updateQueue,
        r = a !== null ? a.lastEffect : null;
      if (r !== null) {
        var o = r.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            var h = a.inst,
              b = h.destroy;
            if (b !== void 0) {
              (h.destroy = void 0), (r = e);
              var _ = n,
                A = b;
              try {
                A();
              } catch (U) {
                Vt(r, _, U);
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (U) {
      Vt(e, e.return, U);
    }
  }
  function Hh(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        wd(e, n);
      } catch (a) {
        Vt(t, t.return, a);
      }
    }
  }
  function qh(t, e, n) {
    (n.props = $a(t.type, t.memoizedProps)), (n.state = t.memoizedState);
    try {
      n.componentWillUnmount();
    } catch (a) {
      Vt(t, e, a);
    }
  }
  function Hs(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
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
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (r) {
      Vt(t, e, r);
    }
  }
  function Sn(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (r) {
          Vt(t, e, r);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Vt(t, e, r);
        }
      else n.current = null;
  }
  function Zh(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (r) {
      Vt(t, t.return, r);
    }
  }
  function Zo(t, e, n) {
    try {
      var a = t.stateNode;
      r0(a, t.type, n, e), (a[Yt] = e);
    } catch (r) {
      Vt(t, t.return, r);
    }
  }
  function Vh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ya(t.type)) ||
      t.tag === 4
    );
  }
  function Vo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Vh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ya(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Yo(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Or));
    else if (
      a !== 4 &&
      (a === 27 && ya(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Yo(t, e, n), t = t.sibling; t !== null; )
        Yo(t, e, n), (t = t.sibling);
  }
  function gr(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && ya(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (gr(t, e, n), t = t.sibling; t !== null; )
        gr(t, e, n), (t = t.sibling);
  }
  function Yh(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      be(e, a, n), (e[Wt] = t), (e[Yt] = n);
    } catch (o) {
      Vt(t, t.return, o);
    }
  }
  var Vn = !1,
    te = !1,
    Go = !1,
    Gh = typeof WeakSet == "function" ? WeakSet : Set,
    de = null;
  function Zy(t, e) {
    if (((t = t.containerInfo), (mc = Br), (t = ed(t)), Zu(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var r = a.anchorOffset,
              o = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break t;
            }
            var h = 0,
              b = -1,
              _ = -1,
              A = 0,
              U = 0,
              H = t,
              O = null;
            e: for (;;) {
              for (
                var C;
                H !== n || (r !== 0 && H.nodeType !== 3) || (b = h + r),
                  H !== o || (a !== 0 && H.nodeType !== 3) || (_ = h + a),
                  H.nodeType === 3 && (h += H.nodeValue.length),
                  (C = H.firstChild) !== null;

              )
                (O = H), (H = C);
              for (;;) {
                if (H === t) break e;
                if (
                  (O === n && ++A === r && (b = h),
                  O === o && ++U === a && (_ = h),
                  (C = H.nextSibling) !== null)
                )
                  break;
                (H = O), (O = H.parentNode);
              }
              H = C;
            }
            n = b === -1 || _ === -1 ? null : { start: b, end: _ };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      pc = { focusedElem: t, selectionRange: n }, Br = !1, de = e;
      de !== null;

    )
      if (
        ((e = de), (t = e.child), (e.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = e), (de = t);
      else
        for (; de !== null; ) {
          switch (((e = de), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                (t = void 0),
                  (n = e),
                  (r = o.memoizedProps),
                  (o = o.memoizedState),
                  (a = n.stateNode);
                try {
                  var gt = $a(n.type, r, n.elementType === n.type);
                  (t = a.getSnapshotBeforeUpdate(gt, o)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (pt) {
                  Vt(n, n.return, pt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  gc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gc(t);
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
              if ((t & 1024) !== 0) throw Error(u(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (de = t);
            break;
          }
          de = e.return;
        }
  }
  function Qh(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ca(t, n), a & 4 && ks(5, n);
        break;
      case 1:
        if ((ca(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (h) {
              Vt(n, n.return, h);
            }
          else {
            var r = $a(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(r, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              Vt(n, n.return, h);
            }
          }
        a & 64 && Hh(n), a & 512 && Hs(n, n.return);
        break;
      case 3:
        if ((ca(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            wd(t, e);
          } catch (h) {
            Vt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Yh(n);
      case 26:
      case 5:
        ca(t, n), e === null && a & 4 && Zh(n), a & 512 && Hs(n, n.return);
        break;
      case 12:
        ca(t, n);
        break;
      case 13:
        ca(t, n),
          a & 4 && Jh(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Py.bind(null, n)), m0(t, n))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Vn), !a)) {
          (e = (e !== null && e.memoizedState !== null) || te), (r = Vn);
          var o = te;
          (Vn = a),
            (te = e) && !o ? fa(t, n, (n.subtreeFlags & 8772) !== 0) : ca(t, n),
            (Vn = r),
            (te = o);
        }
        break;
      case 30:
        break;
      default:
        ca(t, n);
    }
  }
  function Xh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Xh(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && xu(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Qt = null,
    Ne = !1;
  function Yn(t, e, n) {
    for (n = n.child; n !== null; ) Kh(t, e, n), (n = n.sibling);
  }
  function Kh(t, e, n) {
    if (Re && typeof Re.onCommitFiberUnmount == "function")
      try {
        Re.onCommitFiberUnmount(yn, n);
      } catch {}
    switch (n.tag) {
      case 26:
        te || Sn(n, e),
          Yn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
        break;
      case 27:
        te || Sn(n, e);
        var a = Qt,
          r = Ne;
        ya(n.type) && ((Qt = n.stateNode), (Ne = !1)),
          Yn(t, e, n),
          Js(n.stateNode),
          (Qt = a),
          (Ne = r);
        break;
      case 5:
        te || Sn(n, e);
      case 6:
        if (
          ((a = Qt),
          (r = Ne),
          (Qt = null),
          Yn(t, e, n),
          (Qt = a),
          (Ne = r),
          Qt !== null)
        )
          if (Ne)
            try {
              (Qt.nodeType === 9
                ? Qt.body
                : Qt.nodeName === "HTML"
                  ? Qt.ownerDocument.body
                  : Qt
              ).removeChild(n.stateNode);
            } catch (o) {
              Vt(n, e, o);
            }
          else
            try {
              Qt.removeChild(n.stateNode);
            } catch (o) {
              Vt(n, e, o);
            }
        break;
      case 18:
        Qt !== null &&
          (Ne
            ? ((t = Qt),
              jm(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              nl(t))
            : jm(Qt, n.stateNode));
        break;
      case 4:
        (a = Qt),
          (r = Ne),
          (Qt = n.stateNode.containerInfo),
          (Ne = !0),
          Yn(t, e, n),
          (Qt = a),
          (Ne = r);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        te || oa(2, n, e), te || oa(4, n, e), Yn(t, e, n);
        break;
      case 1:
        te ||
          (Sn(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && qh(n, e, a)),
          Yn(t, e, n);
        break;
      case 21:
        Yn(t, e, n);
        break;
      case 22:
        (te = (a = te) || n.memoizedState !== null), Yn(t, e, n), (te = a);
        break;
      default:
        Yn(t, e, n);
    }
  }
  function Jh(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        nl(t);
      } catch (n) {
        Vt(e, e.return, n);
      }
  }
  function Vy(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Gh()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new Gh()),
          e
        );
      default:
        throw Error(u(435, t.tag));
    }
  }
  function Qo(t, e) {
    var n = Vy(t);
    e.forEach(function (a) {
      var r = Fy.bind(null, t, a);
      n.has(a) || (n.add(a), a.then(r, r));
    });
  }
  function qe(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var r = n[a],
          o = t,
          h = e,
          b = h;
        t: for (; b !== null; ) {
          switch (b.tag) {
            case 27:
              if (ya(b.type)) {
                (Qt = b.stateNode), (Ne = !1);
                break t;
              }
              break;
            case 5:
              (Qt = b.stateNode), (Ne = !1);
              break t;
            case 3:
            case 4:
              (Qt = b.stateNode.containerInfo), (Ne = !0);
              break t;
          }
          b = b.return;
        }
        if (Qt === null) throw Error(u(160));
        Kh(o, h, r),
          (Qt = null),
          (Ne = !1),
          (o = r.alternate),
          o !== null && (o.return = null),
          (r.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) $h(e, t), (e = e.sibling);
  }
  var un = null;
  function $h(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        qe(e, t),
          Ze(t),
          a & 4 && (oa(3, t, t.return), ks(3, t), oa(5, t, t.return));
        break;
      case 1:
        qe(e, t),
          Ze(t),
          a & 512 && (te || n === null || Sn(n, n.return)),
          a & 64 &&
            Vn &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
        break;
      case 26:
        var r = un;
        if (
          (qe(e, t),
          Ze(t),
          a & 512 && (te || n === null || Sn(n, n.return)),
          a & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (n = t.memoizedProps),
                    (r = r.ownerDocument || r);
                  e: switch (a) {
                    case "title":
                      (o = r.getElementsByTagName("title")[0]),
                        (!o ||
                          o[os] ||
                          o[Wt] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = r.createElement(a)),
                          r.head.insertBefore(
                            o,
                            r.querySelector("head > title"),
                          )),
                        be(o, a, n),
                        (o[Wt] = t),
                        ce(o),
                        (a = o);
                      break t;
                    case "link":
                      var h = Ym("link", "href", r).get(a + (n.href || ""));
                      if (h) {
                        for (var b = 0; b < h.length; b++)
                          if (
                            ((o = h[b]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            h.splice(b, 1);
                            break e;
                          }
                      }
                      (o = r.createElement(a)),
                        be(o, a, n),
                        r.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (h = Ym("meta", "content", r).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (b = 0; b < h.length; b++)
                          if (
                            ((o = h[b]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            h.splice(b, 1);
                            break e;
                          }
                      }
                      (o = r.createElement(a)),
                        be(o, a, n),
                        r.head.appendChild(o);
                      break;
                    default:
                      throw Error(u(468, a));
                  }
                  (o[Wt] = t), ce(o), (a = o);
                }
                t.stateNode = a;
              } else Gm(r, t.type, t.stateNode);
            else t.stateNode = Vm(r, a, t.memoizedProps);
          else
            o !== a
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                a === null
                  ? Gm(r, t.type, t.stateNode)
                  : Vm(r, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                Zo(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        qe(e, t),
          Ze(t),
          a & 512 && (te || n === null || Sn(n, n.return)),
          n !== null && a & 4 && Zo(t, t.memoizedProps, n.memoizedProps);
        break;
      case 5:
        if (
          (qe(e, t),
          Ze(t),
          a & 512 && (te || n === null || Sn(n, n.return)),
          t.flags & 32)
        ) {
          r = t.stateNode;
          try {
            pi(r, "");
          } catch (C) {
            Vt(t, t.return, C);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((r = t.memoizedProps), Zo(t, r, n !== null ? n.memoizedProps : r)),
          a & 1024 && (Go = !0);
        break;
      case 6:
        if ((qe(e, t), Ze(t), a & 4)) {
          if (t.stateNode === null) throw Error(u(162));
          (a = t.memoizedProps), (n = t.stateNode);
          try {
            n.nodeValue = a;
          } catch (C) {
            Vt(t, t.return, C);
          }
        }
        break;
      case 3:
        if (
          ((Nr = null),
          (r = un),
          (un = Dr(e.containerInfo)),
          qe(e, t),
          (un = r),
          Ze(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            nl(e.containerInfo);
          } catch (C) {
            Vt(t, t.return, C);
          }
        Go && ((Go = !1), Ph(t));
        break;
      case 4:
        (a = un),
          (un = Dr(t.stateNode.containerInfo)),
          qe(e, t),
          Ze(t),
          (un = a);
        break;
      case 12:
        qe(e, t), Ze(t);
        break;
      case 13:
        qe(e, t),
          Ze(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Fo = Bt()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Qo(t, a)));
        break;
      case 22:
        r = t.memoizedState !== null;
        var _ = n !== null && n.memoizedState !== null,
          A = Vn,
          U = te;
        if (
          ((Vn = A || r),
          (te = U || _),
          qe(e, t),
          (te = U),
          (Vn = A),
          Ze(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = r ? e._visibility & -2 : e._visibility | 1,
              r && (n === null || _ || Vn || te || Pa(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                _ = n = e;
                try {
                  if (((o = _.stateNode), r))
                    (h = o.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none");
                  else {
                    b = _.stateNode;
                    var H = _.memoizedProps.style,
                      O =
                        H != null && H.hasOwnProperty("display")
                          ? H.display
                          : null;
                    b.style.display =
                      O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (C) {
                  Vt(_, _.return, C);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                _ = e;
                try {
                  _.stateNode.nodeValue = r ? "" : _.memoizedProps;
                } catch (C) {
                  Vt(_, _.return, C);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              n === e && (n = null), (e = e.return);
            }
            n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), Qo(t, n))));
        break;
      case 19:
        qe(e, t),
          Ze(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Qo(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        qe(e, t), Ze(t);
    }
  }
  function Ze(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Vh(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(u(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              o = Vo(t);
            gr(t, o, r);
            break;
          case 5:
            var h = n.stateNode;
            n.flags & 32 && (pi(h, ""), (n.flags &= -33));
            var b = Vo(t);
            gr(t, b, h);
            break;
          case 3:
          case 4:
            var _ = n.stateNode.containerInfo,
              A = Vo(t);
            Yo(t, A, _);
            break;
          default:
            throw Error(u(161));
        }
      } catch (U) {
        Vt(t, t.return, U);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Ph(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Ph(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function ca(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) Qh(t, e.alternate, e), (e = e.sibling);
  }
  function Pa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          oa(4, e, e.return), Pa(e);
          break;
        case 1:
          Sn(e, e.return);
          var n = e.stateNode;
          typeof n.componentWillUnmount == "function" && qh(e, e.return, n),
            Pa(e);
          break;
        case 27:
          Js(e.stateNode);
        case 26:
        case 5:
          Sn(e, e.return), Pa(e);
          break;
        case 22:
          e.memoizedState === null && Pa(e);
          break;
        case 30:
          Pa(e);
          break;
        default:
          Pa(e);
      }
      t = t.sibling;
    }
  }
  function fa(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        r = t,
        o = e,
        h = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          fa(r, o, n), ks(4, o);
          break;
        case 1:
          if (
            (fa(r, o, n),
            (a = o),
            (r = a.stateNode),
            typeof r.componentDidMount == "function")
          )
            try {
              r.componentDidMount();
            } catch (A) {
              Vt(a, a.return, A);
            }
          if (((a = o), (r = a.updateQueue), r !== null)) {
            var b = a.stateNode;
            try {
              var _ = r.shared.hiddenCallbacks;
              if (_ !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < _.length; r++)
                  Rd(_[r], b);
            } catch (A) {
              Vt(a, a.return, A);
            }
          }
          n && h & 64 && Hh(o), Hs(o, o.return);
          break;
        case 27:
          Yh(o);
        case 26:
        case 5:
          fa(r, o, n), n && a === null && h & 4 && Zh(o), Hs(o, o.return);
          break;
        case 12:
          fa(r, o, n);
          break;
        case 13:
          fa(r, o, n), n && h & 4 && Jh(r, o);
          break;
        case 22:
          o.memoizedState === null && fa(r, o, n), Hs(o, o.return);
          break;
        case 30:
          break;
        default:
          fa(r, o, n);
      }
      e = e.sibling;
    }
  }
  function Xo(t, e) {
    var n = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ts(n));
  }
  function Ko(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ts(t));
  }
  function xn(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Fh(t, e, n, a), (e = e.sibling);
  }
  function Fh(t, e, n, a) {
    var r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        xn(t, e, n, a), r & 2048 && ks(9, e);
        break;
      case 1:
        xn(t, e, n, a);
        break;
      case 3:
        xn(t, e, n, a),
          r & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ts(t)));
        break;
      case 12:
        if (r & 2048) {
          xn(t, e, n, a), (t = e.stateNode);
          try {
            var o = e.memoizedProps,
              h = o.id,
              b = o.onPostCommit;
            typeof b == "function" &&
              b(
                h,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (_) {
            Vt(e, e.return, _);
          }
        } else xn(t, e, n, a);
        break;
      case 13:
        xn(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        (o = e.stateNode),
          (h = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? xn(t, e, n, a)
              : qs(t, e)
            : o._visibility & 2
              ? xn(t, e, n, a)
              : ((o._visibility |= 2),
                Ui(t, e, n, a, (e.subtreeFlags & 10256) !== 0)),
          r & 2048 && Xo(h, e);
        break;
      case 24:
        xn(t, e, n, a), r & 2048 && Ko(e.alternate, e);
        break;
      default:
        xn(t, e, n, a);
    }
  }
  function Ui(t, e, n, a, r) {
    for (r = r && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var o = t,
        h = e,
        b = n,
        _ = a,
        A = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          Ui(o, h, b, _, r), ks(8, h);
          break;
        case 23:
          break;
        case 22:
          var U = h.stateNode;
          h.memoizedState !== null
            ? U._visibility & 2
              ? Ui(o, h, b, _, r)
              : qs(o, h)
            : ((U._visibility |= 2), Ui(o, h, b, _, r)),
            r && A & 2048 && Xo(h.alternate, h);
          break;
        case 24:
          Ui(o, h, b, _, r), r && A & 2048 && Ko(h.alternate, h);
          break;
        default:
          Ui(o, h, b, _, r);
      }
      e = e.sibling;
    }
  }
  function qs(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          r = a.flags;
        switch (a.tag) {
          case 22:
            qs(n, a), r & 2048 && Xo(a.alternate, a);
            break;
          case 24:
            qs(n, a), r & 2048 && Ko(a.alternate, a);
            break;
          default:
            qs(n, a);
        }
        e = e.sibling;
      }
  }
  var Zs = 8192;
  function ji(t) {
    if (t.subtreeFlags & Zs)
      for (t = t.child; t !== null; ) Wh(t), (t = t.sibling);
  }
  function Wh(t) {
    switch (t.tag) {
      case 26:
        ji(t),
          t.flags & Zs &&
            t.memoizedState !== null &&
            A0(un, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ji(t);
        break;
      case 3:
      case 4:
        var e = un;
        (un = Dr(t.stateNode.containerInfo)), ji(t), (un = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = Zs), (Zs = 16777216), ji(t), (Zs = e))
            : ji(t));
        break;
      default:
        ji(t);
    }
  }
  function Ih(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function Vs(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (de = a), em(a, t);
        }
      Ih(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) tm(t), (t = t.sibling);
  }
  function tm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Vs(t), t.flags & 2048 && oa(9, t, t.return);
        break;
      case 3:
        Vs(t);
        break;
      case 12:
        Vs(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), br(t))
          : Vs(t);
        break;
      default:
        Vs(t);
    }
  }
  function br(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          (de = a), em(a, t);
        }
      Ih(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          oa(8, e, e.return), br(e);
          break;
        case 22:
          (n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), br(e));
          break;
        default:
          br(e);
      }
      t = t.sibling;
    }
  }
  function em(t, e) {
    for (; de !== null; ) {
      var n = de;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          oa(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ts(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) (a.return = n), (de = a);
      else
        t: for (n = t; de !== null; ) {
          a = de;
          var r = a.sibling,
            o = a.return;
          if ((Xh(a), a === n)) {
            de = null;
            break t;
          }
          if (r !== null) {
            (r.return = o), (de = r);
            break t;
          }
          de = o;
        }
    }
  }
  var Yy = {
      getCacheForType: function (t) {
        var e = Se(re),
          n = e.data.get(t);
        return n === void 0 && ((n = t()), e.data.set(t, n)), n;
      },
    },
    Gy = typeof WeakMap == "function" ? WeakMap : Map,
    Lt = 0,
    Gt = null,
    Ot = null,
    Dt = 0,
    kt = 0,
    Ve = null,
    da = !1,
    Bi = !1,
    Jo = !1,
    Gn = 0,
    $t = 0,
    ha = 0,
    Fa = 0,
    $o = 0,
    Ie = 0,
    Li = 0,
    Ys = null,
    Ue = null,
    Po = !1,
    Fo = 0,
    _r = 1 / 0,
    Sr = null,
    ma = null,
    ge = 0,
    pa = null,
    ki = null,
    Hi = 0,
    Wo = 0,
    Io = null,
    nm = null,
    Gs = 0,
    tc = null;
  function Ye() {
    if ((Lt & 2) !== 0 && Dt !== 0) return Dt & -Dt;
    if (E.T !== null) {
      var t = wi;
      return t !== 0 ? t : rc();
    }
    return ja();
  }
  function am() {
    Ie === 0 && (Ie = (Dt & 536870912) === 0 || Ut ? ln() : 536870912);
    var t = We.current;
    return t !== null && (t.flags |= 32), Ie;
  }
  function Ge(t, e, n) {
    ((t === Gt && (kt === 2 || kt === 9)) || t.cancelPendingCommit !== null) &&
      (qi(t, 0), va(t, Dt, Ie, !1)),
      ta(t, n),
      ((Lt & 2) === 0 || t !== Gt) &&
        (t === Gt &&
          ((Lt & 2) === 0 && (Fa |= n), $t === 4 && va(t, Dt, Ie, !1)),
        En(t));
  }
  function im(t, e, n) {
    if ((Lt & 6) !== 0) throw Error(u(327));
    var a = (!n && (e & 124) === 0 && (e & t.expiredLanes) === 0) || Ua(t, e),
      r = a ? Ky(t, e) : ac(t, e, !0),
      o = a;
    do {
      if (r === 0) {
        Bi && !a && va(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !Qy(n))) {
          (r = ac(t, e, !1)), (o = !1);
          continue;
        }
        if (r === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var h = 0;
          else
            (h = t.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0);
          if (h !== 0) {
            e = h;
            t: {
              var b = t;
              r = Ys;
              var _ = b.current.memoizedState.isDehydrated;
              if ((_ && (qi(b, h).flags |= 256), (h = ac(b, h, !1)), h !== 2)) {
                if (Jo && !_) {
                  (b.errorRecoveryDisabledLanes |= o), (Fa |= o), (r = 4);
                  break t;
                }
                (o = Ue),
                  (Ue = r),
                  o !== null && (Ue === null ? (Ue = o) : Ue.push.apply(Ue, o));
              }
              r = h;
            }
            if (((o = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          qi(t, 0), va(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (o = r), o)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              va(a, e, Ie, !da);
              break t;
            case 2:
              Ue = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((e & 62914560) === e && ((r = Fo + 300 - Bt()), 10 < r)) {
            if ((va(a, e, Ie, !da), Na(a, 0, !0) !== 0)) break t;
            a.timeoutHandle = Nm(
              sm.bind(null, a, n, Ue, Sr, Po, e, Ie, Fa, Li, da, o, 2, -0, 0),
              r,
            );
            break t;
          }
          sm(a, n, Ue, Sr, Po, e, Ie, Fa, Li, da, o, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    En(t);
  }
  function sm(t, e, n, a, r, o, h, b, _, A, U, H, O, C) {
    if (
      ((t.timeoutHandle = -1),
      (H = e.subtreeFlags),
      (H & 8192 || (H & 16785408) === 16785408) &&
        ((Fs = { stylesheets: null, count: 0, unsuspend: w0 }),
        Wh(e),
        (H = M0()),
        H !== null))
    ) {
      (t.cancelPendingCommit = H(
        dm.bind(null, t, e, o, n, a, r, h, b, _, U, 1, O, C),
      )),
        va(t, o, h, !A);
      return;
    }
    dm(t, e, o, n, a, r, h, b, _);
  }
  function Qy(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var r = n[a],
            o = r.getSnapshot;
          r = r.value;
          try {
            if (!ke(o(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        (n.return = e), (e = n);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function va(t, e, n, a) {
    (e &= ~$o),
      (e &= ~Fa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var r = e; 0 < r; ) {
      var o = 31 - pe(r),
        h = 1 << o;
      (a[o] = -1), (r &= ~h);
    }
    n !== 0 && St(t, n, e);
  }
  function xr() {
    return (Lt & 6) === 0 ? (Qs(0), !1) : !0;
  }
  function ec() {
    if (Ot !== null) {
      if (kt === 0) var t = Ot.return;
      else (t = Ot), (Bn = Qa = null), go(t), (zi = null), (js = 0), (t = Ot);
      for (; t !== null; ) kh(t.alternate, t), (t = t.return);
      Ot = null;
    }
  }
  function qi(t, e) {
    var n = t.timeoutHandle;
    n !== -1 && ((t.timeoutHandle = -1), o0(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      ec(),
      (Gt = t),
      (Ot = n = Nn(t.current, null)),
      (Dt = e),
      (kt = 0),
      (Ve = null),
      (da = !1),
      (Bi = Ua(t, e)),
      (Jo = !1),
      (Li = Ie = $o = Fa = ha = $t = 0),
      (Ue = Ys = null),
      (Po = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var r = 31 - pe(a),
          o = 1 << r;
        (e |= t[r]), (a &= ~o);
      }
    return (Gn = e), Gl(), n;
  }
  function lm(t, e) {
    (wt = null),
      (E.H = or),
      e === ws || e === Il
        ? ((e = Ed()), (kt = 3))
        : e === _d
          ? ((e = Ed()), (kt = 4))
          : (kt =
              e === Th
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Ve = e),
      Ot === null && (($t = 1), mr(t, Je(e, t.current)));
  }
  function rm() {
    var t = E.H;
    return (E.H = or), t === null ? or : t;
  }
  function um() {
    var t = E.A;
    return (E.A = Yy), t;
  }
  function nc() {
    ($t = 4),
      da || ((Dt & 4194048) !== Dt && We.current !== null) || (Bi = !0),
      ((ha & 134217727) === 0 && (Fa & 134217727) === 0) ||
        Gt === null ||
        va(Gt, Dt, Ie, !1);
  }
  function ac(t, e, n) {
    var a = Lt;
    Lt |= 2;
    var r = rm(),
      o = um();
    (Gt !== t || Dt !== e) && ((Sr = null), qi(t, e)), (e = !1);
    var h = $t;
    t: do
      try {
        if (kt !== 0 && Ot !== null) {
          var b = Ot,
            _ = Ve;
          switch (kt) {
            case 8:
              ec(), (h = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              We.current === null && (e = !0);
              var A = kt;
              if (((kt = 0), (Ve = null), Zi(t, b, _, A), n && Bi)) {
                h = 0;
                break t;
              }
              break;
            default:
              (A = kt), (kt = 0), (Ve = null), Zi(t, b, _, A);
          }
        }
        Xy(), (h = $t);
        break;
      } catch (U) {
        lm(t, U);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Bn = Qa = null),
      (Lt = a),
      (E.H = r),
      (E.A = o),
      Ot === null && ((Gt = null), (Dt = 0), Gl()),
      h
    );
  }
  function Xy() {
    for (; Ot !== null; ) om(Ot);
  }
  function Ky(t, e) {
    var n = Lt;
    Lt |= 2;
    var a = rm(),
      r = um();
    Gt !== t || Dt !== e
      ? ((Sr = null), (_r = Bt() + 500), qi(t, e))
      : (Bi = Ua(t, e));
    t: do
      try {
        if (kt !== 0 && Ot !== null) {
          e = Ot;
          var o = Ve;
          e: switch (kt) {
            case 1:
              (kt = 0), (Ve = null), Zi(t, e, o, 1);
              break;
            case 2:
            case 9:
              if (Sd(o)) {
                (kt = 0), (Ve = null), cm(e);
                break;
              }
              (e = function () {
                (kt !== 2 && kt !== 9) || Gt !== t || (kt = 7), En(t);
              }),
                o.then(e, e);
              break t;
            case 3:
              kt = 7;
              break t;
            case 4:
              kt = 5;
              break t;
            case 7:
              Sd(o)
                ? ((kt = 0), (Ve = null), cm(e))
                : ((kt = 0), (Ve = null), Zi(t, e, o, 7));
              break;
            case 5:
              var h = null;
              switch (Ot.tag) {
                case 26:
                  h = Ot.memoizedState;
                case 5:
                case 27:
                  var b = Ot;
                  if (!h || Qm(h)) {
                    (kt = 0), (Ve = null);
                    var _ = b.sibling;
                    if (_ !== null) Ot = _;
                    else {
                      var A = b.return;
                      A !== null ? ((Ot = A), Er(A)) : (Ot = null);
                    }
                    break e;
                  }
              }
              (kt = 0), (Ve = null), Zi(t, e, o, 5);
              break;
            case 6:
              (kt = 0), (Ve = null), Zi(t, e, o, 6);
              break;
            case 8:
              ec(), ($t = 6);
              break t;
            default:
              throw Error(u(462));
          }
        }
        Jy();
        break;
      } catch (U) {
        lm(t, U);
      }
    while (!0);
    return (
      (Bn = Qa = null),
      (E.H = a),
      (E.A = r),
      (Lt = n),
      Ot !== null ? 0 : ((Gt = null), (Dt = 0), Gl(), $t)
    );
  }
  function Jy() {
    for (; Ot !== null && !ee(); ) om(Ot);
  }
  function om(t) {
    var e = Bh(t.alternate, t, Gn);
    (t.memoizedProps = t.pendingProps), e === null ? Er(t) : (Ot = e);
  }
  function cm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ch(n, e, e.pendingProps, e.type, void 0, Dt);
        break;
      case 11:
        e = Ch(n, e, e.pendingProps, e.type.render, e.ref, Dt);
        break;
      case 5:
        go(e);
      default:
        kh(n, e), (e = Ot = fd(e, Gn)), (e = Bh(n, e, Gn));
    }
    (t.memoizedProps = t.pendingProps), e === null ? Er(t) : (Ot = e);
  }
  function Zi(t, e, n, a) {
    (Bn = Qa = null), go(e), (zi = null), (js = 0);
    var r = e.return;
    try {
      if (Ly(t, r, e, n, Dt)) {
        ($t = 1), mr(t, Je(n, t.current)), (Ot = null);
        return;
      }
    } catch (o) {
      if (r !== null) throw ((Ot = r), o);
      ($t = 1), mr(t, Je(n, t.current)), (Ot = null);
      return;
    }
    e.flags & 32768
      ? (Ut || a === 1
          ? (t = !0)
          : Bi || (Dt & 536870912) !== 0
            ? (t = !1)
            : ((da = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = We.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        fm(e, t))
      : Er(e);
  }
  function Er(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        fm(e, da);
        return;
      }
      t = e.return;
      var n = Hy(e.alternate, e, Gn);
      if (n !== null) {
        Ot = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Ot = e;
        return;
      }
      Ot = e = t;
    } while (e !== null);
    $t === 0 && ($t = 5);
  }
  function fm(t, e) {
    do {
      var n = qy(t.alternate, t);
      if (n !== null) {
        (n.flags &= 32767), (Ot = n);
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Ot = t;
        return;
      }
      Ot = t = n;
    } while (t !== null);
    ($t = 6), (Ot = null);
  }
  function dm(t, e, n, a, r, o, h, b, _) {
    t.cancelPendingCommit = null;
    do Tr();
    while (ge !== 0);
    if ((Lt & 6) !== 0) throw Error(u(327));
    if (e !== null) {
      if (e === t.current) throw Error(u(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= Xu),
        zl(t, n, o, h, b, _),
        t === Gt && ((Ot = Gt = null), (Dt = 0)),
        (ki = e),
        (pa = t),
        (Hi = n),
        (Wo = o),
        (Io = r),
        (nm = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Wy(Fn, function () {
              return ym(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = E.T), (E.T = null), (r = q.p), (q.p = 2), (h = Lt), (Lt |= 4);
        try {
          Zy(t, e, n);
        } finally {
          (Lt = h), (q.p = r), (E.T = a);
        }
      }
      (ge = 1), hm(), mm(), pm();
    }
  }
  function hm() {
    if (ge === 1) {
      ge = 0;
      var t = pa,
        e = ki,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        (n = E.T), (E.T = null);
        var a = q.p;
        q.p = 2;
        var r = Lt;
        Lt |= 4;
        try {
          $h(e, t);
          var o = pc,
            h = ed(t.containerInfo),
            b = o.focusedElem,
            _ = o.selectionRange;
          if (
            h !== b &&
            b &&
            b.ownerDocument &&
            td(b.ownerDocument.documentElement, b)
          ) {
            if (_ !== null && Zu(b)) {
              var A = _.start,
                U = _.end;
              if ((U === void 0 && (U = A), "selectionStart" in b))
                (b.selectionStart = A),
                  (b.selectionEnd = Math.min(U, b.value.length));
              else {
                var H = b.ownerDocument || document,
                  O = (H && H.defaultView) || window;
                if (O.getSelection) {
                  var C = O.getSelection(),
                    gt = b.textContent.length,
                    pt = Math.min(_.start, gt),
                    Zt = _.end === void 0 ? pt : Math.min(_.end, gt);
                  !C.extend && pt > Zt && ((h = Zt), (Zt = pt), (pt = h));
                  var T = If(b, pt),
                    x = If(b, Zt);
                  if (
                    T &&
                    x &&
                    (C.rangeCount !== 1 ||
                      C.anchorNode !== T.node ||
                      C.anchorOffset !== T.offset ||
                      C.focusNode !== x.node ||
                      C.focusOffset !== x.offset)
                  ) {
                    var R = H.createRange();
                    R.setStart(T.node, T.offset),
                      C.removeAllRanges(),
                      pt > Zt
                        ? (C.addRange(R), C.extend(x.node, x.offset))
                        : (R.setEnd(x.node, x.offset), C.addRange(R));
                  }
                }
              }
            }
            for (H = [], C = b; (C = C.parentNode); )
              C.nodeType === 1 &&
                H.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
            for (
              typeof b.focus == "function" && b.focus(), b = 0;
              b < H.length;
              b++
            ) {
              var L = H[b];
              (L.element.scrollLeft = L.left), (L.element.scrollTop = L.top);
            }
          }
          (Br = !!mc), (pc = mc = null);
        } finally {
          (Lt = r), (q.p = a), (E.T = n);
        }
      }
      (t.current = e), (ge = 2);
    }
  }
  function mm() {
    if (ge === 2) {
      ge = 0;
      var t = pa,
        e = ki,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        (n = E.T), (E.T = null);
        var a = q.p;
        q.p = 2;
        var r = Lt;
        Lt |= 4;
        try {
          Qh(t, e.alternate, e);
        } finally {
          (Lt = r), (q.p = a), (E.T = n);
        }
      }
      ge = 3;
    }
  }
  function pm() {
    if (ge === 4 || ge === 3) {
      (ge = 0), Be();
      var t = pa,
        e = ki,
        n = Hi,
        a = nm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (ge = 5)
        : ((ge = 0), (ki = pa = null), vm(t, t.pendingLanes));
      var r = t.pendingLanes;
      if (
        (r === 0 && (ma = null),
        ve(n),
        (e = e.stateNode),
        Re && typeof Re.onCommitFiberRoot == "function")
      )
        try {
          Re.onCommitFiberRoot(yn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = E.T), (r = q.p), (q.p = 2), (E.T = null);
        try {
          for (var o = t.onRecoverableError, h = 0; h < a.length; h++) {
            var b = a[h];
            o(b.value, { componentStack: b.stack });
          }
        } finally {
          (E.T = e), (q.p = r);
        }
      }
      (Hi & 3) !== 0 && Tr(),
        En(t),
        (r = t.pendingLanes),
        (n & 4194090) !== 0 && (r & 42) !== 0
          ? t === tc
            ? Gs++
            : ((Gs = 0), (tc = t))
          : (Gs = 0),
        Qs(0);
    }
  }
  function vm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ts(e)));
  }
  function Tr(t) {
    return hm(), mm(), pm(), ym();
  }
  function ym() {
    if (ge !== 5) return !1;
    var t = pa,
      e = Wo;
    Wo = 0;
    var n = ve(Hi),
      a = E.T,
      r = q.p;
    try {
      (q.p = 32 > n ? 32 : n), (E.T = null), (n = Io), (Io = null);
      var o = pa,
        h = Hi;
      if (((ge = 0), (ki = pa = null), (Hi = 0), (Lt & 6) !== 0))
        throw Error(u(331));
      var b = Lt;
      if (
        ((Lt |= 4),
        tm(o.current),
        Fh(o, o.current, h, n),
        (Lt = b),
        Qs(0, !1),
        Re && typeof Re.onPostCommitFiberRoot == "function")
      )
        try {
          Re.onPostCommitFiberRoot(yn, o);
        } catch {}
      return !0;
    } finally {
      (q.p = r), (E.T = a), vm(t, e);
    }
  }
  function gm(t, e, n) {
    (e = Je(n, e)),
      (e = zo(t.stateNode, e, 2)),
      (t = sa(t, e, 2)),
      t !== null && (ta(t, 2), En(t));
  }
  function Vt(t, e, n) {
    if (t.tag === 3) gm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          gm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ma === null || !ma.has(a)))
          ) {
            (t = Je(n, t)),
              (n = xh(2)),
              (a = sa(e, n, 2)),
              a !== null && (Eh(n, a, e, t), ta(a, 2), En(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function ic(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new Gy();
      var r = new Set();
      a.set(e, r);
    } else (r = a.get(e)), r === void 0 && ((r = new Set()), a.set(e, r));
    r.has(n) ||
      ((Jo = !0), r.add(n), (t = $y.bind(null, t, e, n)), e.then(t, t));
  }
  function $y(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Gt === t &&
        (Dt & n) === n &&
        ($t === 4 || ($t === 3 && (Dt & 62914560) === Dt && 300 > Bt() - Fo)
          ? (Lt & 2) === 0 && qi(t, 0)
          : ($o |= n),
        Li === Dt && (Li = 0)),
      En(t);
  }
  function bm(t, e) {
    e === 0 && (e = Dl()), (t = xi(t, e)), t !== null && (ta(t, e), En(t));
  }
  function Py(t) {
    var e = t.memoizedState,
      n = 0;
    e !== null && (n = e.retryLane), bm(t, n);
  }
  function Fy(t, e) {
    var n = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    a !== null && a.delete(e), bm(t, n);
  }
  function Wy(t, e) {
    return vn(t, e);
  }
  var Rr = null,
    Vi = null,
    sc = !1,
    wr = !1,
    lc = !1,
    Wa = 0;
  function En(t) {
    t !== Vi &&
      t.next === null &&
      (Vi === null ? (Rr = Vi = t) : (Vi = Vi.next = t)),
      (wr = !0),
      sc || ((sc = !0), t0());
  }
  function Qs(t, e) {
    if (!lc && wr) {
      lc = !0;
      do
        for (var n = !1, a = Rr; a !== null; ) {
          if (t !== 0) {
            var r = a.pendingLanes;
            if (r === 0) var o = 0;
            else {
              var h = a.suspendedLanes,
                b = a.pingedLanes;
              (o = (1 << (31 - pe(42 | t) + 1)) - 1),
                (o &= r & ~(h & ~b)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((n = !0), Em(a, o));
          } else
            (o = Dt),
              (o = Na(
                a,
                a === Gt ? o : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || Ua(a, o) || ((n = !0), Em(a, o));
          a = a.next;
        }
      while (n);
      lc = !1;
    }
  }
  function Iy() {
    _m();
  }
  function _m() {
    wr = sc = !1;
    var t = 0;
    Wa !== 0 && (u0() && (t = Wa), (Wa = 0));
    for (var e = Bt(), n = null, a = Rr; a !== null; ) {
      var r = a.next,
        o = Sm(a, e);
      o === 0
        ? ((a.next = null),
          n === null ? (Rr = r) : (n.next = r),
          r === null && (Vi = n))
        : ((n = a), (t !== 0 || (o & 3) !== 0) && (wr = !0)),
        (a = r);
    }
    Qs(t);
  }
  function Sm(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        r = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var h = 31 - pe(o),
        b = 1 << h,
        _ = r[h];
      _ === -1
        ? ((b & n) === 0 || (b & a) !== 0) && (r[h] = rs(b, e))
        : _ <= e && (t.expiredLanes |= b),
        (o &= ~b);
    }
    if (
      ((e = Gt),
      (n = Dt),
      (n = Na(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (kt === 2 || kt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && _e(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Ua(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && _e(a), ve(n))) {
        case 2:
        case 8:
          n = si;
          break;
        case 32:
          n = Fn;
          break;
        case 268435456:
          n = Le;
          break;
        default:
          n = Fn;
      }
      return (
        (a = xm.bind(null, t)),
        (n = vn(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && _e(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function xm(t, e) {
    if (ge !== 0 && ge !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var n = t.callbackNode;
    if (Tr() && t.callbackNode !== n) return null;
    var a = Dt;
    return (
      (a = Na(
        t,
        t === Gt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (im(t, a, e),
          Sm(t, Bt()),
          t.callbackNode != null && t.callbackNode === n
            ? xm.bind(null, t)
            : null)
    );
  }
  function Em(t, e) {
    if (Tr()) return null;
    im(t, e, !0);
  }
  function t0() {
    c0(function () {
      (Lt & 6) !== 0 ? vn(Ce, Iy) : _m();
    });
  }
  function rc() {
    return Wa === 0 && (Wa = ln()), Wa;
  }
  function Tm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ll("" + t);
  }
  function Rm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function e0(t, e, n, a, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var o = Tm((r[Yt] || null).action),
        h = a.submitter;
      h &&
        ((e = (e = h[Yt] || null)
          ? Tm(e.formAction)
          : h.getAttribute("formAction")),
        e !== null && ((o = e), (h = null)));
      var b = new Zl("action", "action", null, a, r);
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Wa !== 0) {
                  var _ = h ? Rm(r, h) : new FormData(r);
                  Ao(
                    n,
                    { pending: !0, data: _, method: r.method, action: o },
                    null,
                    _,
                  );
                }
              } else
                typeof o == "function" &&
                  (b.preventDefault(),
                  (_ = h ? Rm(r, h) : new FormData(r)),
                  Ao(
                    n,
                    { pending: !0, data: _, method: r.method, action: o },
                    o,
                    _,
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var uc = 0; uc < Qu.length; uc++) {
    var oc = Qu[uc],
      n0 = oc.toLowerCase(),
      a0 = oc[0].toUpperCase() + oc.slice(1);
    rn(n0, "on" + a0);
  }
  rn(id, "onAnimationEnd"),
    rn(sd, "onAnimationIteration"),
    rn(ld, "onAnimationStart"),
    rn("dblclick", "onDoubleClick"),
    rn("focusin", "onFocus"),
    rn("focusout", "onBlur"),
    rn(_y, "onTransitionRun"),
    rn(Sy, "onTransitionStart"),
    rn(xy, "onTransitionCancel"),
    rn(rd, "onTransitionEnd"),
    di("onMouseEnter", ["mouseout", "mouseover"]),
    di("onMouseLeave", ["mouseout", "mouseover"]),
    di("onPointerEnter", ["pointerout", "pointerover"]),
    di("onPointerLeave", ["pointerout", "pointerover"]),
    Ba(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ba(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ba("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ba(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ba(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ba(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var Xs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    i0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Xs),
    );
  function wm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        r = a.event;
      a = a.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var h = a.length - 1; 0 <= h; h--) {
            var b = a[h],
              _ = b.instance,
              A = b.currentTarget;
            if (((b = b.listener), _ !== o && r.isPropagationStopped()))
              break t;
            (o = b), (r.currentTarget = A);
            try {
              o(r);
            } catch (U) {
              hr(U);
            }
            (r.currentTarget = null), (o = _);
          }
        else
          for (h = 0; h < a.length; h++) {
            if (
              ((b = a[h]),
              (_ = b.instance),
              (A = b.currentTarget),
              (b = b.listener),
              _ !== o && r.isPropagationStopped())
            )
              break t;
            (o = b), (r.currentTarget = A);
            try {
              o(r);
            } catch (U) {
              hr(U);
            }
            (r.currentTarget = null), (o = _);
          }
      }
    }
  }
  function Ct(t, e) {
    var n = e[ui];
    n === void 0 && (n = e[ui] = new Set());
    var a = t + "__bubble";
    n.has(a) || (Am(e, t, 2, !1), n.add(a));
  }
  function cc(t, e, n) {
    var a = 0;
    e && (a |= 4), Am(n, t, a, e);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function fc(t) {
    if (!t[Ar]) {
      (t[Ar] = !0),
        _f.forEach(function (n) {
          n !== "selectionchange" && (i0.has(n) || cc(n, !1, t), cc(n, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ar] || ((e[Ar] = !0), cc("selectionchange", !1, e));
    }
  }
  function Am(t, e, n, a) {
    switch (Fm(e)) {
      case 2:
        var r = D0;
        break;
      case 8:
        r = z0;
        break;
      default:
        r = Rc;
    }
    (n = r.bind(null, e, n, t)),
      (r = void 0),
      !zu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (r = !0),
      a
        ? r !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: r })
          : t.addEventListener(e, n, !0)
        : r !== void 0
          ? t.addEventListener(e, n, { passive: r })
          : t.addEventListener(e, n, !1);
  }
  function dc(t, e, n, a, r) {
    var o = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var h = a.tag;
        if (h === 3 || h === 4) {
          var b = a.stateNode.containerInfo;
          if (b === r) break;
          if (h === 4)
            for (h = a.return; h !== null; ) {
              var _ = h.tag;
              if ((_ === 3 || _ === 4) && h.stateNode.containerInfo === r)
                return;
              h = h.return;
            }
          for (; b !== null; ) {
            if (((h = oi(b)), h === null)) return;
            if (((_ = h.tag), _ === 5 || _ === 6 || _ === 26 || _ === 27)) {
              a = o = h;
              continue t;
            }
            b = b.parentNode;
          }
        }
        a = a.return;
      }
    Uf(function () {
      var A = o,
        U = Cu(n),
        H = [];
      t: {
        var O = ud.get(t);
        if (O !== void 0) {
          var C = Zl,
            gt = t;
          switch (t) {
            case "keypress":
              if (Hl(n) === 0) break t;
            case "keydown":
            case "keyup":
              C = Wv;
              break;
            case "focusin":
              (gt = "focus"), (C = Bu);
              break;
            case "focusout":
              (gt = "blur"), (C = Bu);
              break;
            case "beforeblur":
            case "afterblur":
              C = Bu;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              C = Lf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = qv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = ey;
              break;
            case id:
            case sd:
            case ld:
              C = Yv;
              break;
            case rd:
              C = ay;
              break;
            case "scroll":
            case "scrollend":
              C = kv;
              break;
            case "wheel":
              C = sy;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = Qv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Hf;
              break;
            case "toggle":
            case "beforetoggle":
              C = ry;
          }
          var pt = (e & 4) !== 0,
            Zt = !pt && (t === "scroll" || t === "scrollend"),
            T = pt ? (O !== null ? O + "Capture" : null) : O;
          pt = [];
          for (var x = A, R; x !== null; ) {
            var L = x;
            if (
              ((R = L.stateNode),
              (L = L.tag),
              (L !== 5 && L !== 26 && L !== 27) ||
                R === null ||
                T === null ||
                ((L = fs(x, T)), L != null && pt.push(Ks(x, L, R))),
              Zt)
            )
              break;
            x = x.return;
          }
          0 < pt.length &&
            ((O = new C(O, gt, null, n, U)),
            H.push({ event: O, listeners: pt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((O = t === "mouseover" || t === "pointerover"),
            (C = t === "mouseout" || t === "pointerout"),
            O &&
              n !== Ou &&
              (gt = n.relatedTarget || n.fromElement) &&
              (oi(gt) || gt[oe]))
          )
            break t;
          if (
            (C || O) &&
            ((O =
              U.window === U
                ? U
                : (O = U.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            C
              ? ((gt = n.relatedTarget || n.toElement),
                (C = A),
                (gt = gt ? oi(gt) : null),
                gt !== null &&
                  ((Zt = f(gt)),
                  (pt = gt.tag),
                  gt !== Zt || (pt !== 5 && pt !== 27 && pt !== 6)) &&
                  (gt = null))
              : ((C = null), (gt = A)),
            C !== gt)
          ) {
            if (
              ((pt = Lf),
              (L = "onMouseLeave"),
              (T = "onMouseEnter"),
              (x = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((pt = Hf),
                (L = "onPointerLeave"),
                (T = "onPointerEnter"),
                (x = "pointer")),
              (Zt = C == null ? O : cs(C)),
              (R = gt == null ? O : cs(gt)),
              (O = new pt(L, x + "leave", C, n, U)),
              (O.target = Zt),
              (O.relatedTarget = R),
              (L = null),
              oi(U) === A &&
                ((pt = new pt(T, x + "enter", gt, n, U)),
                (pt.target = R),
                (pt.relatedTarget = Zt),
                (L = pt)),
              (Zt = L),
              C && gt)
            )
              e: {
                for (pt = C, T = gt, x = 0, R = pt; R; R = Yi(R)) x++;
                for (R = 0, L = T; L; L = Yi(L)) R++;
                for (; 0 < x - R; ) (pt = Yi(pt)), x--;
                for (; 0 < R - x; ) (T = Yi(T)), R--;
                for (; x--; ) {
                  if (pt === T || (T !== null && pt === T.alternate)) break e;
                  (pt = Yi(pt)), (T = Yi(T));
                }
                pt = null;
              }
            else pt = null;
            C !== null && Mm(H, O, C, pt, !1),
              gt !== null && Zt !== null && Mm(H, Zt, gt, pt, !0);
          }
        }
        t: {
          if (
            ((O = A ? cs(A) : window),
            (C = O.nodeName && O.nodeName.toLowerCase()),
            C === "select" || (C === "input" && O.type === "file"))
          )
            var lt = Kf;
          else if (Qf(O))
            if (Jf) lt = yy;
            else {
              lt = py;
              var Mt = my;
            }
          else
            (C = O.nodeName),
              !C ||
              C.toLowerCase() !== "input" ||
              (O.type !== "checkbox" && O.type !== "radio")
                ? A && Mu(A.elementType) && (lt = Kf)
                : (lt = vy);
          if (lt && (lt = lt(t, A))) {
            Xf(H, lt, n, U);
            break t;
          }
          Mt && Mt(t, O, A),
            t === "focusout" &&
              A &&
              O.type === "number" &&
              A.memoizedProps.value != null &&
              Au(O, "number", O.value);
        }
        switch (((Mt = A ? cs(A) : window), t)) {
          case "focusin":
            (Qf(Mt) || Mt.contentEditable === "true") &&
              ((bi = Mt), (Vu = A), (bs = null));
            break;
          case "focusout":
            bs = Vu = bi = null;
            break;
          case "mousedown":
            Yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Yu = !1), nd(H, n, U);
            break;
          case "selectionchange":
            if (by) break;
          case "keydown":
          case "keyup":
            nd(H, n, U);
        }
        var ft;
        if (ku)
          t: {
            switch (t) {
              case "compositionstart":
                var vt = "onCompositionStart";
                break t;
              case "compositionend":
                vt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                vt = "onCompositionUpdate";
                break t;
            }
            vt = void 0;
          }
        else
          gi
            ? Yf(t, n) && (vt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (vt = "onCompositionStart");
        vt &&
          (qf &&
            n.locale !== "ko" &&
            (gi || vt !== "onCompositionStart"
              ? vt === "onCompositionEnd" && gi && (ft = jf())
              : ((ea = U),
                (Nu = "value" in ea ? ea.value : ea.textContent),
                (gi = !0))),
          (Mt = Mr(A, vt)),
          0 < Mt.length &&
            ((vt = new kf(vt, t, null, n, U)),
            H.push({ event: vt, listeners: Mt }),
            ft
              ? (vt.data = ft)
              : ((ft = Gf(n)), ft !== null && (vt.data = ft)))),
          (ft = oy ? cy(t, n) : fy(t, n)) &&
            ((vt = Mr(A, "onBeforeInput")),
            0 < vt.length &&
              ((Mt = new kf("onBeforeInput", "beforeinput", null, n, U)),
              H.push({ event: Mt, listeners: vt }),
              (Mt.data = ft))),
          e0(H, t, A, n, U);
      }
      wm(H, e);
    });
  }
  function Ks(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Mr(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var r = t,
        o = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          o === null ||
          ((r = fs(t, n)),
          r != null && a.unshift(Ks(t, r, o)),
          (r = fs(t, e)),
          r != null && a.push(Ks(t, r, o))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function Yi(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Mm(t, e, n, a, r) {
    for (var o = e._reactName, h = []; n !== null && n !== a; ) {
      var b = n,
        _ = b.alternate,
        A = b.stateNode;
      if (((b = b.tag), _ !== null && _ === a)) break;
      (b !== 5 && b !== 26 && b !== 27) ||
        A === null ||
        ((_ = A),
        r
          ? ((A = fs(n, o)), A != null && h.unshift(Ks(n, A, _)))
          : r || ((A = fs(n, o)), A != null && h.push(Ks(n, A, _)))),
        (n = n.return);
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var s0 = /\r\n?/g,
    l0 = /\u0000|\uFFFD/g;
  function Om(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        s0,
        `
`,
      )
      .replace(l0, "");
  }
  function Cm(t, e) {
    return (e = Om(e)), Om(t) === e;
  }
  function Or() {}
  function qt(t, e, n, a, r, o) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || pi(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            pi(t, "" + a);
        break;
      case "className":
        Ul(t, "class", a);
        break;
      case "tabIndex":
        Ul(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ul(t, n, a);
        break;
      case "style":
        zf(t, a, o);
        break;
      case "data":
        if (e !== "object") {
          Ul(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        (a = Ll("" + a)), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && qt(t, e, "name", r.name, r, null),
                qt(t, e, "formEncType", r.formEncType, r, null),
                qt(t, e, "formMethod", r.formMethod, r, null),
                qt(t, e, "formTarget", r.formTarget, r, null))
              : (qt(t, e, "encType", r.encType, r, null),
                qt(t, e, "method", r.method, r, null),
                qt(t, e, "target", r.target, r, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        (a = Ll("" + a)), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Or);
        break;
      case "onScroll":
        a != null && Ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((n = a.__html), n != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (n = Ll("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
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
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        Ct("beforetoggle", t), Ct("toggle", t), Nl(t, "popover", a);
        break;
      case "xlinkActuate":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Dn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Dn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Nl(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Bv.get(n) || n), Nl(t, n, a));
    }
  }
  function hc(t, e, n, a, r, o) {
    switch (n) {
      case "style":
        zf(t, a, o);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(u(61));
          if (((n = a.__html), n != null)) {
            if (r.children != null) throw Error(u(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? pi(t, a)
          : (typeof a == "number" || typeof a == "bigint") && pi(t, "" + a);
        break;
      case "onScroll":
        a != null && Ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Ct("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Or);
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
        if (!Sf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((r = n.endsWith("Capture")),
              (e = n.slice(2, r ? n.length - 7 : void 0)),
              (o = t[Yt] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, r),
              typeof a == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, r);
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
                ? t.setAttribute(n, "")
                : Nl(t, n, a);
          }
    }
  }
  function be(t, e, n) {
    switch (e) {
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
        Ct("error", t), Ct("load", t);
        var a = !1,
          r = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var h = n[o];
            if (h != null)
              switch (o) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, e));
                default:
                  qt(t, e, o, h, n, null);
              }
          }
        r && qt(t, e, "srcSet", n.srcSet, n, null),
          a && qt(t, e, "src", n.src, n, null);
        return;
      case "input":
        Ct("invalid", t);
        var b = (o = h = r = null),
          _ = null,
          A = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var U = n[a];
            if (U != null)
              switch (a) {
                case "name":
                  r = U;
                  break;
                case "type":
                  h = U;
                  break;
                case "checked":
                  _ = U;
                  break;
                case "defaultChecked":
                  A = U;
                  break;
                case "value":
                  o = U;
                  break;
                case "defaultValue":
                  b = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null) throw Error(u(137, e));
                  break;
                default:
                  qt(t, e, a, U, n, null);
              }
          }
        Mf(t, o, b, _, A, h, r, !1), jl(t);
        return;
      case "select":
        Ct("invalid", t), (a = h = o = null);
        for (r in n)
          if (n.hasOwnProperty(r) && ((b = n[r]), b != null))
            switch (r) {
              case "value":
                o = b;
                break;
              case "defaultValue":
                h = b;
                break;
              case "multiple":
                a = b;
              default:
                qt(t, e, r, b, n, null);
            }
        (e = o),
          (n = h),
          (t.multiple = !!a),
          e != null ? mi(t, !!a, e, !1) : n != null && mi(t, !!a, n, !0);
        return;
      case "textarea":
        Ct("invalid", t), (o = r = a = null);
        for (h in n)
          if (n.hasOwnProperty(h) && ((b = n[h]), b != null))
            switch (h) {
              case "value":
                a = b;
                break;
              case "defaultValue":
                r = b;
                break;
              case "children":
                o = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(u(91));
                break;
              default:
                qt(t, e, h, b, n, null);
            }
        Cf(t, a, r, o), jl(t);
        return;
      case "option":
        for (_ in n)
          if (n.hasOwnProperty(_) && ((a = n[_]), a != null))
            switch (_) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                qt(t, e, _, a, n, null);
            }
        return;
      case "dialog":
        Ct("beforetoggle", t), Ct("toggle", t), Ct("cancel", t), Ct("close", t);
        break;
      case "iframe":
      case "object":
        Ct("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Xs.length; a++) Ct(Xs[a], t);
        break;
      case "image":
        Ct("error", t), Ct("load", t);
        break;
      case "details":
        Ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Ct("error", t), Ct("load", t);
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
        for (A in n)
          if (n.hasOwnProperty(A) && ((a = n[A]), a != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, e));
              default:
                qt(t, e, A, a, n, null);
            }
        return;
      default:
        if (Mu(e)) {
          for (U in n)
            n.hasOwnProperty(U) &&
              ((a = n[U]), a !== void 0 && hc(t, e, U, a, n, void 0));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && ((a = n[b]), a != null && qt(t, e, b, a, n, null));
  }
  function r0(t, e, n, a) {
    switch (e) {
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
        var r = null,
          o = null,
          h = null,
          b = null,
          _ = null,
          A = null,
          U = null;
        for (C in n) {
          var H = n[C];
          if (n.hasOwnProperty(C) && H != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = H;
              default:
                a.hasOwnProperty(C) || qt(t, e, C, null, a, H);
            }
        }
        for (var O in a) {
          var C = a[O];
          if (((H = n[O]), a.hasOwnProperty(O) && (C != null || H != null)))
            switch (O) {
              case "type":
                o = C;
                break;
              case "name":
                r = C;
                break;
              case "checked":
                A = C;
                break;
              case "defaultChecked":
                U = C;
                break;
              case "value":
                h = C;
                break;
              case "defaultValue":
                b = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(u(137, e));
                break;
              default:
                C !== H && qt(t, e, O, C, a, H);
            }
        }
        wu(t, h, b, _, A, U, o, r);
        return;
      case "select":
        C = h = b = O = null;
        for (o in n)
          if (((_ = n[o]), n.hasOwnProperty(o) && _ != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                C = _;
              default:
                a.hasOwnProperty(o) || qt(t, e, o, null, a, _);
            }
        for (r in a)
          if (
            ((o = a[r]),
            (_ = n[r]),
            a.hasOwnProperty(r) && (o != null || _ != null))
          )
            switch (r) {
              case "value":
                O = o;
                break;
              case "defaultValue":
                b = o;
                break;
              case "multiple":
                h = o;
              default:
                o !== _ && qt(t, e, r, o, a, _);
            }
        (e = b),
          (n = h),
          (a = C),
          O != null
            ? mi(t, !!n, O, !1)
            : !!a != !!n &&
              (e != null ? mi(t, !!n, e, !0) : mi(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        C = O = null;
        for (b in n)
          if (
            ((r = n[b]),
            n.hasOwnProperty(b) && r != null && !a.hasOwnProperty(b))
          )
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                qt(t, e, b, null, a, r);
            }
        for (h in a)
          if (
            ((r = a[h]),
            (o = n[h]),
            a.hasOwnProperty(h) && (r != null || o != null))
          )
            switch (h) {
              case "value":
                O = r;
                break;
              case "defaultValue":
                C = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(u(91));
                break;
              default:
                r !== o && qt(t, e, h, r, a, o);
            }
        Of(t, O, C);
        return;
      case "option":
        for (var gt in n)
          if (
            ((O = n[gt]),
            n.hasOwnProperty(gt) && O != null && !a.hasOwnProperty(gt))
          )
            switch (gt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                qt(t, e, gt, null, a, O);
            }
        for (_ in a)
          if (
            ((O = a[_]),
            (C = n[_]),
            a.hasOwnProperty(_) && O !== C && (O != null || C != null))
          )
            switch (_) {
              case "selected":
                t.selected =
                  O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                qt(t, e, _, O, a, C);
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
        for (var pt in n)
          (O = n[pt]),
            n.hasOwnProperty(pt) &&
              O != null &&
              !a.hasOwnProperty(pt) &&
              qt(t, e, pt, null, a, O);
        for (A in a)
          if (
            ((O = a[A]),
            (C = n[A]),
            a.hasOwnProperty(A) && O !== C && (O != null || C != null))
          )
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(u(137, e));
                break;
              default:
                qt(t, e, A, O, a, C);
            }
        return;
      default:
        if (Mu(e)) {
          for (var Zt in n)
            (O = n[Zt]),
              n.hasOwnProperty(Zt) &&
                O !== void 0 &&
                !a.hasOwnProperty(Zt) &&
                hc(t, e, Zt, void 0, a, O);
          for (U in a)
            (O = a[U]),
              (C = n[U]),
              !a.hasOwnProperty(U) ||
                O === C ||
                (O === void 0 && C === void 0) ||
                hc(t, e, U, O, a, C);
          return;
        }
    }
    for (var T in n)
      (O = n[T]),
        n.hasOwnProperty(T) &&
          O != null &&
          !a.hasOwnProperty(T) &&
          qt(t, e, T, null, a, O);
    for (H in a)
      (O = a[H]),
        (C = n[H]),
        !a.hasOwnProperty(H) ||
          O === C ||
          (O == null && C == null) ||
          qt(t, e, H, O, a, C);
  }
  var mc = null,
    pc = null;
  function Cr(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Dm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function vc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yc = null;
  function u0() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === yc
        ? !1
        : ((yc = t), !0)
      : ((yc = null), !1);
  }
  var Nm = typeof setTimeout == "function" ? setTimeout : void 0,
    o0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Um = typeof Promise == "function" ? Promise : void 0,
    c0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Um < "u"
          ? function (t) {
              return Um.resolve(null).then(t).catch(f0);
            }
          : Nm;
  function f0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ya(t) {
    return t === "head";
  }
  function jm(t, e) {
    var n = e,
      a = 0,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((t.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (0 < a && 8 > a) {
            n = a;
            var h = t.ownerDocument;
            if ((n & 1 && Js(h.documentElement), n & 2 && Js(h.body), n & 4))
              for (n = h.head, Js(n), h = n.firstChild; h; ) {
                var b = h.nextSibling,
                  _ = h.nodeName;
                h[os] ||
                  _ === "SCRIPT" ||
                  _ === "STYLE" ||
                  (_ === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
                  n.removeChild(h),
                  (h = b);
              }
          }
          if (r === 0) {
            t.removeChild(o), nl(e);
            return;
          }
          r--;
        } else
          n === "$" || n === "$?" || n === "$!"
            ? r++
            : (a = n.charCodeAt(0) - 48);
      else a = 0;
      n = o;
    } while (n);
    nl(e);
  }
  function gc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gc(n), xu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function d0(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[os])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== r.rel ||
                t.getAttribute("href") !==
                  (r.href == null || r.href === "" ? null : r.href) ||
                t.getAttribute("crossorigin") !==
                  (r.crossOrigin == null ? null : r.crossOrigin) ||
                t.getAttribute("title") !== (r.title == null ? null : r.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (r.src == null ? null : r.src) ||
                  t.getAttribute("type") !== (r.type == null ? null : r.type) ||
                  t.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = on(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function h0(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = on(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function bc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function m0(t, e) {
    var n = t.ownerDocument;
    if (t.data !== "$?" || n.readyState === "complete") e();
    else {
      var a = function () {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function on(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  var _c = null;
  function Bm(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (e === 0) return t;
          e--;
        } else n === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Lm(t, e, n) {
    switch (((e = Cr(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(u(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(u(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(u(454));
        return t;
      default:
        throw Error(u(451));
    }
  }
  function Js(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    xu(t);
  }
  var tn = new Map(),
    km = new Set();
  function Dr(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Qn = q.d;
  q.d = { f: p0, r: v0, D: y0, C: g0, L: b0, m: _0, X: x0, S: S0, M: E0 };
  function p0() {
    var t = Qn.f(),
      e = xr();
    return t || e;
  }
  function v0(t) {
    var e = ci(t);
    e !== null && e.tag === 5 && e.type === "form" ? ih(e) : Qn.r(t);
  }
  var Gi = typeof document > "u" ? null : document;
  function Hm(t, e, n) {
    var a = Gi;
    if (a && typeof e == "string" && e) {
      var r = Ke(e);
      (r = 'link[rel="' + t + '"][href="' + r + '"]'),
        typeof n == "string" && (r += '[crossorigin="' + n + '"]'),
        km.has(r) ||
          (km.add(r),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(r) === null &&
            ((e = a.createElement("link")),
            be(e, "link", t),
            ce(e),
            a.head.appendChild(e)));
    }
  }
  function y0(t) {
    Qn.D(t), Hm("dns-prefetch", t, null);
  }
  function g0(t, e) {
    Qn.C(t, e), Hm("preconnect", t, e);
  }
  function b0(t, e, n) {
    Qn.L(t, e, n);
    var a = Gi;
    if (a && t && e) {
      var r = 'link[rel="preload"][as="' + Ke(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + Ke(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (r += '[imagesizes="' + Ke(n.imageSizes) + '"]'))
        : (r += '[href="' + Ke(t) + '"]');
      var o = r;
      switch (e) {
        case "style":
          o = Qi(t);
          break;
        case "script":
          o = Xi(t);
      }
      tn.has(o) ||
        ((t = g(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        tn.set(o, t),
        a.querySelector(r) !== null ||
          (e === "style" && a.querySelector($s(o))) ||
          (e === "script" && a.querySelector(Ps(o))) ||
          ((e = a.createElement("link")),
          be(e, "link", t),
          ce(e),
          a.head.appendChild(e)));
    }
  }
  function _0(t, e) {
    Qn.m(t, e);
    var n = Gi;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        r =
          'link[rel="modulepreload"][as="' + Ke(a) + '"][href="' + Ke(t) + '"]',
        o = r;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Xi(t);
      }
      if (
        !tn.has(o) &&
        ((t = g({ rel: "modulepreload", href: t }, e)),
        tn.set(o, t),
        n.querySelector(r) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ps(o))) return;
        }
        (a = n.createElement("link")),
          be(a, "link", t),
          ce(a),
          n.head.appendChild(a);
      }
    }
  }
  function S0(t, e, n) {
    Qn.S(t, e, n);
    var a = Gi;
    if (a && t) {
      var r = fi(a).hoistableStyles,
        o = Qi(t);
      e = e || "default";
      var h = r.get(o);
      if (!h) {
        var b = { loading: 0, preload: null };
        if ((h = a.querySelector($s(o)))) b.loading = 5;
        else {
          (t = g({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = tn.get(o)) && Sc(t, n);
          var _ = (h = a.createElement("link"));
          ce(_),
            be(_, "link", t),
            (_._p = new Promise(function (A, U) {
              (_.onload = A), (_.onerror = U);
            })),
            _.addEventListener("load", function () {
              b.loading |= 1;
            }),
            _.addEventListener("error", function () {
              b.loading |= 2;
            }),
            (b.loading |= 4),
            zr(h, e, a);
        }
        (h = { type: "stylesheet", instance: h, count: 1, state: b }),
          r.set(o, h);
      }
    }
  }
  function x0(t, e) {
    Qn.X(t, e);
    var n = Gi;
    if (n && t) {
      var a = fi(n).hoistableScripts,
        r = Xi(t),
        o = a.get(r);
      o ||
        ((o = n.querySelector(Ps(r))),
        o ||
          ((t = g({ src: t, async: !0 }, e)),
          (e = tn.get(r)) && xc(t, e),
          (o = n.createElement("script")),
          ce(o),
          be(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(r, o));
    }
  }
  function E0(t, e) {
    Qn.M(t, e);
    var n = Gi;
    if (n && t) {
      var a = fi(n).hoistableScripts,
        r = Xi(t),
        o = a.get(r);
      o ||
        ((o = n.querySelector(Ps(r))),
        o ||
          ((t = g({ src: t, async: !0, type: "module" }, e)),
          (e = tn.get(r)) && xc(t, e),
          (o = n.createElement("script")),
          ce(o),
          be(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(r, o));
    }
  }
  function qm(t, e, n, a) {
    var r = (r = K.current) ? Dr(r) : null;
    if (!r) throw Error(u(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Qi(n.href)),
            (n = fi(r).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Qi(n.href);
          var o = fi(r).hoistableStyles,
            h = o.get(t);
          if (
            (h ||
              ((r = r.ownerDocument || r),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, h),
              (o = r.querySelector($s(t))) &&
                !o._p &&
                ((h.instance = o), (h.state.loading = 5)),
              tn.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                tn.set(t, n),
                o || T0(r, t, n, h.state))),
            e && a === null)
          )
            throw Error(u(528, ""));
          return h;
        }
        if (e && a !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Xi(n)),
              (n = fi(r).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, t));
    }
  }
  function Qi(t) {
    return 'href="' + Ke(t) + '"';
  }
  function $s(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Zm(t) {
    return g({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function T0(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        be(e, "link", n),
        ce(e),
        t.head.appendChild(e));
  }
  function Xi(t) {
    return '[src="' + Ke(t) + '"]';
  }
  function Ps(t) {
    return "script[async]" + t;
  }
  function Vm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Ke(n.href) + '"]');
          if (a) return (e.instance = a), ce(a), a;
          var r = g({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            ce(a),
            be(a, "style", r),
            zr(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          r = Qi(n.href);
          var o = t.querySelector($s(r));
          if (o) return (e.state.loading |= 4), (e.instance = o), ce(o), o;
          (a = Zm(n)),
            (r = tn.get(r)) && Sc(a, r),
            (o = (t.ownerDocument || t).createElement("link")),
            ce(o);
          var h = o;
          return (
            (h._p = new Promise(function (b, _) {
              (h.onload = b), (h.onerror = _);
            })),
            be(o, "link", a),
            (e.state.loading |= 4),
            zr(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = Xi(n.src)),
            (r = t.querySelector(Ps(o)))
              ? ((e.instance = r), ce(r), r)
              : ((a = n),
                (r = tn.get(o)) && ((a = g({}, n)), xc(a, r)),
                (t = t.ownerDocument || t),
                (r = t.createElement("script")),
                ce(r),
                be(r, "link", a),
                t.head.appendChild(r),
                (e.instance = r))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), zr(a, n.precedence, t));
    return e.instance;
  }
  function zr(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        r = a.length ? a[a.length - 1] : null,
        o = r,
        h = 0;
      h < a.length;
      h++
    ) {
      var b = a[h];
      if (b.dataset.precedence === e) o = b;
      else if (o !== r) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Sc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function xc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Nr = null;
  function Ym(t, e, n) {
    if (Nr === null) {
      var a = new Map(),
        r = (Nr = new Map());
      r.set(n, a);
    } else (r = Nr), (a = r.get(n)), a || ((a = new Map()), r.set(n, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), r = 0;
      r < n.length;
      r++
    ) {
      var o = n[r];
      if (
        !(
          o[os] ||
          o[Wt] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = o.getAttribute(e) || "";
        h = t + h;
        var b = a.get(h);
        b ? b.push(o) : a.set(h, [o]);
      }
    }
    return a;
  }
  function Gm(t, e, n) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      );
  }
  function R0(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Qm(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Fs = null;
  function w0() {}
  function A0(t, e, n) {
    if (Fs === null) throw Error(u(475));
    var a = Fs;
    if (
      e.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var r = Qi(n.href),
          o = t.querySelector($s(r));
        if (o) {
          (t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Ur.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = o),
            ce(o);
          return;
        }
        (o = t.ownerDocument || t),
          (n = Zm(n)),
          (r = tn.get(r)) && Sc(n, r),
          (o = o.createElement("link")),
          ce(o);
        var h = o;
        (h._p = new Promise(function (b, _) {
          (h.onload = b), (h.onerror = _);
        })),
          be(o, "link", n),
          (e.instance = o);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Ur.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function M0() {
    if (Fs === null) throw Error(u(475));
    var t = Fs;
    return (
      t.stylesheets && t.count === 0 && Ec(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var n = setTimeout(function () {
              if ((t.stylesheets && Ec(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Ur() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Ec(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var jr = null;
  function Ec(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (jr = new Map()),
        e.forEach(O0, t),
        (jr = null),
        Ur.call(t));
  }
  function O0(t, e) {
    if (!(e.state.loading & 4)) {
      var n = jr.get(t);
      if (n) var a = n.get(null);
      else {
        (n = new Map()), jr.set(t, n);
        for (
          var r = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            o = 0;
          o < r.length;
          o++
        ) {
          var h = r[o];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (n.set(h.dataset.precedence, h), (a = h));
        }
        a && n.set(null, a);
      }
      (r = e.instance),
        (h = r.getAttribute("data-precedence")),
        (o = n.get(h) || a),
        o === a && n.set(null, r),
        n.set(h, r),
        this.count++,
        (a = Ur.bind(this)),
        r.addEventListener("load", a),
        r.addEventListener("error", a),
        o
          ? o.parentNode.insertBefore(r, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(r, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Ws = {
    $$typeof: tt,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0,
  };
  function C0(t, e, n, a, r, o, h, b) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = us(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = us(0)),
      (this.hiddenUpdates = us(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = r),
      (this.onCaughtError = o),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map());
  }
  function Xm(t, e, n, a, r, o, h, b, _, A, U, H) {
    return (
      (t = new C0(t, e, n, h, b, _, A, H)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = He(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = ao()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: a, isDehydrated: n, cache: e }),
      ro(o),
      t
    );
  }
  function Km(t) {
    return t ? ((t = Ei), t) : Ei;
  }
  function Jm(t, e, n, a, r, o) {
    (r = Km(r)),
      a.context === null ? (a.context = r) : (a.pendingContext = r),
      (a = ia(e)),
      (a.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (a.callback = o),
      (n = sa(t, a, e)),
      n !== null && (Ge(n, t, e), Ms(n, t, e));
  }
  function $m(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Tc(t, e) {
    $m(t, e), (t = t.alternate) && $m(t, e);
  }
  function Pm(t) {
    if (t.tag === 13) {
      var e = xi(t, 67108864);
      e !== null && Ge(e, t, 67108864), Tc(t, 67108864);
    }
  }
  var Br = !0;
  function D0(t, e, n, a) {
    var r = E.T;
    E.T = null;
    var o = q.p;
    try {
      (q.p = 2), Rc(t, e, n, a);
    } finally {
      (q.p = o), (E.T = r);
    }
  }
  function z0(t, e, n, a) {
    var r = E.T;
    E.T = null;
    var o = q.p;
    try {
      (q.p = 8), Rc(t, e, n, a);
    } finally {
      (q.p = o), (E.T = r);
    }
  }
  function Rc(t, e, n, a) {
    if (Br) {
      var r = wc(a);
      if (r === null) dc(t, e, a, Lr, n), Wm(t, a);
      else if (U0(r, t, e, n, a)) a.stopPropagation();
      else if ((Wm(t, a), e & 4 && -1 < N0.indexOf(t))) {
        for (; r !== null; ) {
          var o = ci(r);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var h = gn(o.pendingLanes);
                  if (h !== 0) {
                    var b = o;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; h; ) {
                      var _ = 1 << (31 - pe(h));
                      (b.entanglements[1] |= _), (h &= ~_);
                    }
                    En(o), (Lt & 6) === 0 && ((_r = Bt() + 500), Qs(0));
                  }
                }
                break;
              case 13:
                (b = xi(o, 2)), b !== null && Ge(b, o, 2), xr(), Tc(o, 2);
            }
          if (((o = wc(a)), o === null && dc(t, e, a, Lr, n), o === r)) break;
          r = o;
        }
        r !== null && a.stopPropagation();
      } else dc(t, e, a, null, n);
    }
  }
  function wc(t) {
    return (t = Cu(t)), Ac(t);
  }
  var Lr = null;
  function Ac(t) {
    if (((Lr = null), (t = oi(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Lr = t), null;
  }
  function Fm(t) {
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
        switch (za()) {
          case Ce:
            return 2;
          case si:
            return 8;
          case Fn:
          case me:
            return 32;
          case Le:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mc = !1,
    ga = null,
    ba = null,
    _a = null,
    Is = new Map(),
    tl = new Map(),
    Sa = [],
    N0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Wm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ga = null;
        break;
      case "dragenter":
      case "dragleave":
        ba = null;
        break;
      case "mouseover":
      case "mouseout":
        _a = null;
        break;
      case "pointerover":
      case "pointerout":
        Is.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tl.delete(e.pointerId);
    }
  }
  function el(t, e, n, a, r, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: o,
          targetContainers: [r],
        }),
        e !== null && ((e = ci(e)), e !== null && Pm(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        r !== null && e.indexOf(r) === -1 && e.push(r),
        t);
  }
  function U0(t, e, n, a, r) {
    switch (e) {
      case "focusin":
        return (ga = el(ga, t, e, n, a, r)), !0;
      case "dragenter":
        return (ba = el(ba, t, e, n, a, r)), !0;
      case "mouseover":
        return (_a = el(_a, t, e, n, a, r)), !0;
      case "pointerover":
        var o = r.pointerId;
        return Is.set(o, el(Is.get(o) || null, t, e, n, a, r)), !0;
      case "gotpointercapture":
        return (
          (o = r.pointerId), tl.set(o, el(tl.get(o) || null, t, e, n, a, r)), !0
        );
    }
    return !1;
  }
  function Im(t) {
    var e = oi(t.target);
    if (e !== null) {
      var n = f(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = d(n)), e !== null)) {
            (t.blockedOn = e),
              le(t.priority, function () {
                if (n.tag === 13) {
                  var a = Ye();
                  a = ne(a);
                  var r = xi(n, a);
                  r !== null && Ge(r, n, a), Tc(n, a);
                }
              });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function kr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = wc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        (Ou = a), n.target.dispatchEvent(a), (Ou = null);
      } else return (e = ci(n)), e !== null && Pm(e), (t.blockedOn = n), !1;
      e.shift();
    }
    return !0;
  }
  function tp(t, e, n) {
    kr(t) && n.delete(e);
  }
  function j0() {
    (Mc = !1),
      ga !== null && kr(ga) && (ga = null),
      ba !== null && kr(ba) && (ba = null),
      _a !== null && kr(_a) && (_a = null),
      Is.forEach(tp),
      tl.forEach(tp);
  }
  function Hr(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Mc ||
        ((Mc = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, j0)));
  }
  var qr = null;
  function ep(t) {
    qr !== t &&
      ((qr = t),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        qr === t && (qr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            r = t[e + 2];
          if (typeof a != "function") {
            if (Ac(a || n) === null) continue;
            break;
          }
          var o = ci(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ao(o, { pending: !0, data: r, method: n.method, action: a }, a, r));
        }
      }));
  }
  function nl(t) {
    function e(_) {
      return Hr(_, t);
    }
    ga !== null && Hr(ga, t),
      ba !== null && Hr(ba, t),
      _a !== null && Hr(_a, t),
      Is.forEach(e),
      tl.forEach(e);
    for (var n = 0; n < Sa.length; n++) {
      var a = Sa[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Sa.length && ((n = Sa[0]), n.blockedOn === null); )
      Im(n), n.blockedOn === null && Sa.shift();
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var r = n[a],
          o = n[a + 1],
          h = r[Yt] || null;
        if (typeof o == "function") h || ep(n);
        else if (h) {
          var b = null;
          if (o && o.hasAttribute("formAction")) {
            if (((r = o), (h = o[Yt] || null))) b = h.formAction;
            else if (Ac(r) !== null) continue;
          } else b = h.action;
          typeof b == "function" ? (n[a + 1] = b) : (n.splice(a, 3), (a -= 3)),
            ep(n);
        }
      }
  }
  function Oc(t) {
    this._internalRoot = t;
  }
  (Zr.prototype.render = Oc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(u(409));
      var n = e.current,
        a = Ye();
      Jm(n, a, t, e, null, null);
    }),
    (Zr.prototype.unmount = Oc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          Jm(t.current, 2, null, t, null, null), xr(), (e[oe] = null);
        }
      });
  function Zr(t) {
    this._internalRoot = t;
  }
  Zr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = ja();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Sa.length && e !== 0 && e < Sa[n].priority; n++);
      Sa.splice(n, 0, t), n === 0 && Im(t);
    }
  };
  var np = i.version;
  if (np !== "19.1.0") throw Error(u(527, np, "19.1.0"));
  q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(u(188))
        : ((t = Object.keys(t).join(",")), Error(u(268, t)));
    return (
      (t = y(e)),
      (t = t !== null ? p(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var B0 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vr.isDisabled && Vr.supportsFiber)
      try {
        (yn = Vr.inject(B0)), (Re = Vr);
      } catch {}
  }
  return (
    (sl.createRoot = function (t, e) {
      if (!c(t)) throw Error(u(299));
      var n = !1,
        a = "",
        r = gh,
        o = bh,
        h = _h,
        b = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (r = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (h = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (b = e.unstable_transitionCallbacks)),
        (e = Xm(t, 1, !1, null, null, n, a, r, o, h, b, null)),
        (t[oe] = e.current),
        fc(t),
        new Oc(e)
      );
    }),
    (sl.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(u(299));
      var a = !1,
        r = "",
        o = gh,
        h = bh,
        b = _h,
        _ = null,
        A = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (h = n.onCaughtError),
          n.onRecoverableError !== void 0 && (b = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (_ = n.unstable_transitionCallbacks),
          n.formState !== void 0 && (A = n.formState)),
        (e = Xm(t, 1, !0, e, n ?? null, a, r, o, h, b, _, A)),
        (e.context = Km(null)),
        (n = e.current),
        (a = Ye()),
        (a = ne(a)),
        (r = ia(a)),
        (r.callback = null),
        sa(n, r, a),
        (n = a),
        (e.current.lanes = n),
        ta(e, n),
        En(e),
        (t[oe] = e.current),
        fc(t),
        new Zr(e)
      );
    }),
    (sl.version = "19.1.0"),
    sl
  );
}
var Rp;
function fb() {
  if (Rp) return Gc.exports;
  Rp = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (i) {
        console.error(i);
      }
  }
  return s(), (Gc.exports = cb()), Gc.exports;
}
var db = fb(),
  yu = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(s) {
      return (
        this.listeners.add(s),
        this.onSubscribe(),
        () => {
          this.listeners.delete(s), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  gu = typeof window > "u" || "Deno" in globalThis;
function cn() {}
function hb(s, i) {
  return typeof s == "function" ? s(i) : s;
}
function mb(s) {
  return typeof s == "number" && s >= 0 && s !== 1 / 0;
}
function pb(s, i) {
  return Math.max(s + (i || 0) - Date.now(), 0);
}
function wp(s, i) {
  return typeof s == "function" ? s(i) : s;
}
function vb(s, i) {
  return typeof s == "function" ? s(i) : s;
}
function Ap(s, i) {
  const {
    type: l = "all",
    exact: u,
    fetchStatus: c,
    predicate: f,
    queryKey: d,
    stale: m,
  } = s;
  if (d) {
    if (u) {
      if (i.queryHash !== ff(d, i.options)) return !1;
    } else if (!ml(i.queryKey, d)) return !1;
  }
  if (l !== "all") {
    const y = i.isActive();
    if ((l === "active" && !y) || (l === "inactive" && y)) return !1;
  }
  return !(
    (typeof m == "boolean" && i.isStale() !== m) ||
    (c && c !== i.state.fetchStatus) ||
    (f && !f(i))
  );
}
function Mp(s, i) {
  const { exact: l, status: u, predicate: c, mutationKey: f } = s;
  if (f) {
    if (!i.options.mutationKey) return !1;
    if (l) {
      if (hl(i.options.mutationKey) !== hl(f)) return !1;
    } else if (!ml(i.options.mutationKey, f)) return !1;
  }
  return !((u && i.state.status !== u) || (c && !c(i)));
}
function ff(s, i) {
  return (i?.queryKeyHashFn || hl)(s);
}
function hl(s) {
  return JSON.stringify(s, (i, l) =>
    tf(l)
      ? Object.keys(l)
          .sort()
          .reduce((u, c) => ((u[c] = l[c]), u), {})
      : l,
  );
}
function ml(s, i) {
  return s === i
    ? !0
    : typeof s != typeof i
      ? !1
      : s && i && typeof s == "object" && typeof i == "object"
        ? !Object.keys(i).some((l) => !ml(s[l], i[l]))
        : !1;
}
function nv(s, i) {
  if (s === i) return s;
  const l = Op(s) && Op(i);
  if (l || (tf(s) && tf(i))) {
    const u = l ? s : Object.keys(s),
      c = u.length,
      f = l ? i : Object.keys(i),
      d = f.length,
      m = l ? [] : {};
    let y = 0;
    for (let p = 0; p < d; p++) {
      const g = l ? p : f[p];
      ((!l && u.includes(g)) || l) && s[g] === void 0 && i[g] === void 0
        ? ((m[g] = void 0), y++)
        : ((m[g] = nv(s[g], i[g])), m[g] === s[g] && s[g] !== void 0 && y++);
    }
    return c === d && y === c ? s : m;
  }
  return i;
}
function nS(s, i) {
  if (!i || Object.keys(s).length !== Object.keys(i).length) return !1;
  for (const l in s) if (s[l] !== i[l]) return !1;
  return !0;
}
function Op(s) {
  return Array.isArray(s) && s.length === Object.keys(s).length;
}
function tf(s) {
  if (!Cp(s)) return !1;
  const i = s.constructor;
  if (i === void 0) return !0;
  const l = i.prototype;
  return !(
    !Cp(l) ||
    !l.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(s) !== Object.prototype
  );
}
function Cp(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function yb(s) {
  return new Promise((i) => {
    setTimeout(i, s);
  });
}
function gb(s, i, l) {
  return typeof l.structuralSharing == "function"
    ? l.structuralSharing(s, i)
    : l.structuralSharing !== !1
      ? nv(s, i)
      : i;
}
function bb(s, i, l = 0) {
  const u = [...s, i];
  return l && u.length > l ? u.slice(1) : u;
}
function _b(s, i, l = 0) {
  const u = [i, ...s];
  return l && u.length > l ? u.slice(0, -1) : u;
}
var df = Symbol();
function av(s, i) {
  return !s.queryFn && i?.initialPromise
    ? () => i.initialPromise
    : !s.queryFn || s.queryFn === df
      ? () => Promise.reject(new Error(`Missing queryFn: '${s.queryHash}'`))
      : s.queryFn;
}
var Sb = class extends yu {
    #t;
    #e;
    #n;
    constructor() {
      super(),
        (this.#n = (s) => {
          if (!gu && window.addEventListener) {
            const i = () => s();
            return (
              window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(s) {
      (this.#n = s),
        this.#e?.(),
        (this.#e = s((i) => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
        }));
    }
    setFocused(s) {
      this.#t !== s && ((this.#t = s), this.onFocus());
    }
    onFocus() {
      const s = this.isFocused();
      this.listeners.forEach((i) => {
        i(s);
      });
    }
    isFocused() {
      return typeof this.#t == "boolean"
        ? this.#t
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  iv = new Sb(),
  xb = class extends yu {
    #t = !0;
    #e;
    #n;
    constructor() {
      super(),
        (this.#n = (s) => {
          if (!gu && window.addEventListener) {
            const i = () => s(!0),
              l = () => s(!1);
            return (
              window.addEventListener("online", i, !1),
              window.addEventListener("offline", l, !1),
              () => {
                window.removeEventListener("online", i),
                  window.removeEventListener("offline", l);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(), (this.#e = void 0));
    }
    setEventListener(s) {
      (this.#n = s), this.#e?.(), (this.#e = s(this.setOnline.bind(this)));
    }
    setOnline(s) {
      this.#t !== s &&
        ((this.#t = s),
        this.listeners.forEach((l) => {
          l(s);
        }));
    }
    isOnline() {
      return this.#t;
    }
  },
  lu = new xb();
function Eb() {
  let s, i;
  const l = new Promise((c, f) => {
    (s = c), (i = f);
  });
  (l.status = "pending"), l.catch(() => {});
  function u(c) {
    Object.assign(l, c), delete l.resolve, delete l.reject;
  }
  return (
    (l.resolve = (c) => {
      u({ status: "fulfilled", value: c }), s(c);
    }),
    (l.reject = (c) => {
      u({ status: "rejected", reason: c }), i(c);
    }),
    l
  );
}
function Tb(s) {
  return Math.min(1e3 * 2 ** s, 3e4);
}
function sv(s) {
  return (s ?? "online") === "online" ? lu.isOnline() : !0;
}
var lv = class extends Error {
  constructor(s) {
    super("CancelledError"),
      (this.revert = s?.revert),
      (this.silent = s?.silent);
  }
};
function Kc(s) {
  return s instanceof lv;
}
function rv(s) {
  let i = !1,
    l = 0,
    u = !1,
    c;
  const f = Eb(),
    d = (k) => {
      u || (w(new lv(k)), s.abort?.());
    },
    m = () => {
      i = !0;
    },
    y = () => {
      i = !1;
    },
    p = () =>
      iv.isFocused() &&
      (s.networkMode === "always" || lu.isOnline()) &&
      s.canRun(),
    g = () => sv(s.networkMode) && s.canRun(),
    v = (k) => {
      u || ((u = !0), s.onSuccess?.(k), c?.(), f.resolve(k));
    },
    w = (k) => {
      u || ((u = !0), s.onError?.(k), c?.(), f.reject(k));
    },
    z = () =>
      new Promise((k) => {
        (c = (V) => {
          (u || p()) && k(V);
        }),
          s.onPause?.();
      }).then(() => {
        (c = void 0), u || s.onContinue?.();
      }),
    D = () => {
      if (u) return;
      let k;
      const V = l === 0 ? s.initialPromise : void 0;
      try {
        k = V ?? s.fn();
      } catch (Y) {
        k = Promise.reject(Y);
      }
      Promise.resolve(k)
        .then(v)
        .catch((Y) => {
          if (u) return;
          const it = s.retry ?? (gu ? 0 : 3),
            tt = s.retryDelay ?? Tb,
            mt = typeof tt == "function" ? tt(l, Y) : tt,
            W =
              it === !0 ||
              (typeof it == "number" && l < it) ||
              (typeof it == "function" && it(l, Y));
          if (i || !W) {
            w(Y);
            return;
          }
          l++,
            s.onFail?.(l, Y),
            yb(mt)
              .then(() => (p() ? void 0 : z()))
              .then(() => {
                i ? w(Y) : D();
              });
        });
    };
  return {
    promise: f,
    cancel: d,
    continue: () => (c?.(), f),
    cancelRetry: m,
    continueRetry: y,
    canStart: g,
    start: () => (g() ? D() : z().then(D), f),
  };
}
var Rb = (s) => setTimeout(s, 0);
function wb() {
  let s = [],
    i = 0,
    l = (m) => {
      m();
    },
    u = (m) => {
      m();
    },
    c = Rb;
  const f = (m) => {
      i
        ? s.push(m)
        : c(() => {
            l(m);
          });
    },
    d = () => {
      const m = s;
      (s = []),
        m.length &&
          c(() => {
            u(() => {
              m.forEach((y) => {
                l(y);
              });
            });
          });
    };
  return {
    batch: (m) => {
      let y;
      i++;
      try {
        y = m();
      } finally {
        i--, i || d();
      }
      return y;
    },
    batchCalls:
      (m) =>
      (...y) => {
        f(() => {
          m(...y);
        });
      },
    schedule: f,
    setNotifyFunction: (m) => {
      l = m;
    },
    setBatchNotifyFunction: (m) => {
      u = m;
    },
    setScheduler: (m) => {
      c = m;
    },
  };
}
var Ae = wb(),
  uv = class {
    #t;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        mb(this.gcTime) &&
          (this.#t = setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(s) {
      this.gcTime = Math.max(
        this.gcTime || 0,
        s ?? (gu ? 1 / 0 : 5 * 60 * 1e3),
      );
    }
    clearGcTimeout() {
      this.#t && (clearTimeout(this.#t), (this.#t = void 0));
    }
  },
  Ab = class extends uv {
    #t;
    #e;
    #n;
    #i;
    #a;
    #l;
    #r;
    constructor(s) {
      super(),
        (this.#r = !1),
        (this.#l = s.defaultOptions),
        this.setOptions(s.options),
        (this.observers = []),
        (this.#i = s.client),
        (this.#n = this.#i.getQueryCache()),
        (this.queryKey = s.queryKey),
        (this.queryHash = s.queryHash),
        (this.#t = Ob(this.options)),
        (this.state = s.state ?? this.#t),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#a?.promise;
    }
    setOptions(s) {
      (this.options = { ...this.#l, ...s }),
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(s, i) {
      const l = gb(this.state.data, s, this.options);
      return (
        this.#s({
          data: l,
          type: "success",
          dataUpdatedAt: i?.updatedAt,
          manual: i?.manual,
        }),
        l
      );
    }
    setState(s, i) {
      this.#s({ type: "setState", state: s, setStateOptions: i });
    }
    cancel(s) {
      const i = this.#a?.promise;
      return this.#a?.cancel(s), i ? i.then(cn).catch(cn) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#t);
    }
    isActive() {
      return this.observers.some((s) => vb(s.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === df ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
      return this.state.isInvalidated
        ? !0
        : this.getObserversCount() > 0
          ? this.observers.some((s) => s.getCurrentResult().isStale)
          : this.state.data === void 0;
    }
    isStaleByTime(s = 0) {
      return (
        this.state.isInvalidated ||
        this.state.data === void 0 ||
        !pb(this.state.dataUpdatedAt, s)
      );
    }
    onFocus() {
      this.observers
        .find((i) => i.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    onOnline() {
      this.observers
        .find((i) => i.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#a?.continue();
    }
    addObserver(s) {
      this.observers.includes(s) ||
        (this.observers.push(s),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: s }));
    }
    removeObserver(s) {
      this.observers.includes(s) &&
        ((this.observers = this.observers.filter((i) => i !== s)),
        this.observers.length ||
          (this.#a &&
            (this.#r ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: s }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: "invalidate" });
    }
    fetch(s, i) {
      if (this.state.fetchStatus !== "idle") {
        if (this.state.data !== void 0 && i?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
      }
      if ((s && this.setOptions(s), !this.options.queryFn)) {
        const m = this.observers.find((y) => y.options.queryFn);
        m && this.setOptions(m.options);
      }
      const l = new AbortController(),
        u = (m) => {
          Object.defineProperty(m, "signal", {
            enumerable: !0,
            get: () => ((this.#r = !0), l.signal),
          });
        },
        c = () => {
          const m = av(this.options, i),
            y = { client: this.#i, queryKey: this.queryKey, meta: this.meta };
          return (
            u(y),
            (this.#r = !1),
            this.options.persister ? this.options.persister(m, y, this) : m(y)
          );
        },
        f = {
          fetchOptions: i,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: c,
        };
      u(f),
        this.options.behavior?.onFetch(f, this),
        (this.#e = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== f.fetchOptions?.meta) &&
          this.#s({ type: "fetch", meta: f.fetchOptions?.meta });
      const d = (m) => {
        (Kc(m) && m.silent) || this.#s({ type: "error", error: m }),
          Kc(m) ||
            (this.#n.config.onError?.(m, this),
            this.#n.config.onSettled?.(this.state.data, m, this)),
          this.scheduleGc();
      };
      return (
        (this.#a = rv({
          initialPromise: i?.initialPromise,
          fn: f.fetchFn,
          abort: l.abort.bind(l),
          onSuccess: (m) => {
            if (m === void 0) {
              d(new Error(`${this.queryHash} data is undefined`));
              return;
            }
            try {
              this.setData(m);
            } catch (y) {
              d(y);
              return;
            }
            this.#n.config.onSuccess?.(m, this),
              this.#n.config.onSettled?.(m, this.state.error, this),
              this.scheduleGc();
          },
          onError: d,
          onFail: (m, y) => {
            this.#s({ type: "failed", failureCount: m, error: y });
          },
          onPause: () => {
            this.#s({ type: "pause" });
          },
          onContinue: () => {
            this.#s({ type: "continue" });
          },
          retry: f.options.retry,
          retryDelay: f.options.retryDelay,
          networkMode: f.options.networkMode,
          canRun: () => !0,
        })),
        this.#a.start()
      );
    }
    #s(s) {
      const i = (l) => {
        switch (s.type) {
          case "failed":
            return {
              ...l,
              fetchFailureCount: s.failureCount,
              fetchFailureReason: s.error,
            };
          case "pause":
            return { ...l, fetchStatus: "paused" };
          case "continue":
            return { ...l, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...l,
              ...Mb(l.data, this.options),
              fetchMeta: s.meta ?? null,
            };
          case "success":
            return {
              ...l,
              data: s.data,
              dataUpdateCount: l.dataUpdateCount + 1,
              dataUpdatedAt: s.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!s.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const u = s.error;
            return Kc(u) && u.revert && this.#e
              ? { ...this.#e, fetchStatus: "idle" }
              : {
                  ...l,
                  error: u,
                  errorUpdateCount: l.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: l.fetchFailureCount + 1,
                  fetchFailureReason: u,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...l, isInvalidated: !0 };
          case "setState":
            return { ...l, ...s.state };
        }
      };
      (this.state = i(this.state)),
        Ae.batch(() => {
          this.observers.forEach((l) => {
            l.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: s });
        });
    }
  };
function Mb(s, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: sv(i.networkMode) ? "fetching" : "paused",
    ...(s === void 0 && { error: null, status: "pending" }),
  };
}
function Ob(s) {
  const i =
      typeof s.initialData == "function" ? s.initialData() : s.initialData,
    l = i !== void 0,
    u = l
      ? typeof s.initialDataUpdatedAt == "function"
        ? s.initialDataUpdatedAt()
        : s.initialDataUpdatedAt
      : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: l ? (u ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: l ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Cb = class extends yu {
    constructor(s = {}) {
      super(), (this.config = s), (this.#t = new Map());
    }
    #t;
    build(s, i, l) {
      const u = i.queryKey,
        c = i.queryHash ?? ff(u, i);
      let f = this.get(c);
      return (
        f ||
          ((f = new Ab({
            client: s,
            queryKey: u,
            queryHash: c,
            options: s.defaultQueryOptions(i),
            state: l,
            defaultOptions: s.getQueryDefaults(u),
          })),
          this.add(f)),
        f
      );
    }
    add(s) {
      this.#t.has(s.queryHash) ||
        (this.#t.set(s.queryHash, s), this.notify({ type: "added", query: s }));
    }
    remove(s) {
      const i = this.#t.get(s.queryHash);
      i &&
        (s.destroy(),
        i === s && this.#t.delete(s.queryHash),
        this.notify({ type: "removed", query: s }));
    }
    clear() {
      Ae.batch(() => {
        this.getAll().forEach((s) => {
          this.remove(s);
        });
      });
    }
    get(s) {
      return this.#t.get(s);
    }
    getAll() {
      return [...this.#t.values()];
    }
    find(s) {
      const i = { exact: !0, ...s };
      return this.getAll().find((l) => Ap(i, l));
    }
    findAll(s = {}) {
      const i = this.getAll();
      return Object.keys(s).length > 0 ? i.filter((l) => Ap(s, l)) : i;
    }
    notify(s) {
      Ae.batch(() => {
        this.listeners.forEach((i) => {
          i(s);
        });
      });
    }
    onFocus() {
      Ae.batch(() => {
        this.getAll().forEach((s) => {
          s.onFocus();
        });
      });
    }
    onOnline() {
      Ae.batch(() => {
        this.getAll().forEach((s) => {
          s.onOnline();
        });
      });
    }
  },
  Db = class extends uv {
    #t;
    #e;
    #n;
    constructor(s) {
      super(),
        (this.mutationId = s.mutationId),
        (this.#e = s.mutationCache),
        (this.#t = []),
        (this.state = s.state || zb()),
        this.setOptions(s.options),
        this.scheduleGc();
    }
    setOptions(s) {
      (this.options = s), this.updateGcTime(this.options.gcTime);
    }
    get meta() {
      return this.options.meta;
    }
    addObserver(s) {
      this.#t.includes(s) ||
        (this.#t.push(s),
        this.clearGcTimeout(),
        this.#e.notify({ type: "observerAdded", mutation: this, observer: s }));
    }
    removeObserver(s) {
      (this.#t = this.#t.filter((i) => i !== s)),
        this.scheduleGc(),
        this.#e.notify({
          type: "observerRemoved",
          mutation: this,
          observer: s,
        });
    }
    optionalRemove() {
      this.#t.length ||
        (this.state.status === "pending"
          ? this.scheduleGc()
          : this.#e.remove(this));
    }
    continue() {
      return this.#n?.continue() ?? this.execute(this.state.variables);
    }
    async execute(s) {
      this.#n = rv({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(s)
            : Promise.reject(new Error("No mutationFn found")),
        onFail: (u, c) => {
          this.#i({ type: "failed", failureCount: u, error: c });
        },
        onPause: () => {
          this.#i({ type: "pause" });
        },
        onContinue: () => {
          this.#i({ type: "continue" });
        },
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#e.canRun(this),
      });
      const i = this.state.status === "pending",
        l = !this.#n.canStart();
      try {
        if (!i) {
          this.#i({ type: "pending", variables: s, isPaused: l }),
            await this.#e.config.onMutate?.(s, this);
          const c = await this.options.onMutate?.(s);
          c !== this.state.context &&
            this.#i({ type: "pending", context: c, variables: s, isPaused: l });
        }
        const u = await this.#n.start();
        return (
          await this.#e.config.onSuccess?.(u, s, this.state.context, this),
          await this.options.onSuccess?.(u, s, this.state.context),
          await this.#e.config.onSettled?.(
            u,
            null,
            this.state.variables,
            this.state.context,
            this,
          ),
          await this.options.onSettled?.(u, null, s, this.state.context),
          this.#i({ type: "success", data: u }),
          u
        );
      } catch (u) {
        try {
          throw (
            (await this.#e.config.onError?.(u, s, this.state.context, this),
            await this.options.onError?.(u, s, this.state.context),
            await this.#e.config.onSettled?.(
              void 0,
              u,
              this.state.variables,
              this.state.context,
              this,
            ),
            await this.options.onSettled?.(void 0, u, s, this.state.context),
            u)
          );
        } finally {
          this.#i({ type: "error", error: u });
        }
      } finally {
        this.#e.runNext(this);
      }
    }
    #i(s) {
      const i = (l) => {
        switch (s.type) {
          case "failed":
            return {
              ...l,
              failureCount: s.failureCount,
              failureReason: s.error,
            };
          case "pause":
            return { ...l, isPaused: !0 };
          case "continue":
            return { ...l, isPaused: !1 };
          case "pending":
            return {
              ...l,
              context: s.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: s.isPaused,
              status: "pending",
              variables: s.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...l,
              data: s.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...l,
              data: void 0,
              error: s.error,
              failureCount: l.failureCount + 1,
              failureReason: s.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = i(this.state)),
        Ae.batch(() => {
          this.#t.forEach((l) => {
            l.onMutationUpdate(s);
          }),
            this.#e.notify({ mutation: this, type: "updated", action: s });
        });
    }
  };
function zb() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Nb = class extends yu {
  constructor(s = {}) {
    super(),
      (this.config = s),
      (this.#t = new Set()),
      (this.#e = new Map()),
      (this.#n = 0);
  }
  #t;
  #e;
  #n;
  build(s, i, l) {
    const u = new Db({
      mutationCache: this,
      mutationId: ++this.#n,
      options: s.defaultMutationOptions(i),
      state: l,
    });
    return this.add(u), u;
  }
  add(s) {
    this.#t.add(s);
    const i = $r(s);
    if (typeof i == "string") {
      const l = this.#e.get(i);
      l ? l.push(s) : this.#e.set(i, [s]);
    }
    this.notify({ type: "added", mutation: s });
  }
  remove(s) {
    if (this.#t.delete(s)) {
      const i = $r(s);
      if (typeof i == "string") {
        const l = this.#e.get(i);
        if (l)
          if (l.length > 1) {
            const u = l.indexOf(s);
            u !== -1 && l.splice(u, 1);
          } else l[0] === s && this.#e.delete(i);
      }
    }
    this.notify({ type: "removed", mutation: s });
  }
  canRun(s) {
    const i = $r(s);
    if (typeof i == "string") {
      const u = this.#e.get(i)?.find((c) => c.state.status === "pending");
      return !u || u === s;
    } else return !0;
  }
  runNext(s) {
    const i = $r(s);
    return typeof i == "string"
      ? (this.#e
          .get(i)
          ?.find((u) => u !== s && u.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    Ae.batch(() => {
      this.#t.forEach((s) => {
        this.notify({ type: "removed", mutation: s });
      }),
        this.#t.clear(),
        this.#e.clear();
    });
  }
  getAll() {
    return Array.from(this.#t);
  }
  find(s) {
    const i = { exact: !0, ...s };
    return this.getAll().find((l) => Mp(i, l));
  }
  findAll(s = {}) {
    return this.getAll().filter((i) => Mp(s, i));
  }
  notify(s) {
    Ae.batch(() => {
      this.listeners.forEach((i) => {
        i(s);
      });
    });
  }
  resumePausedMutations() {
    const s = this.getAll().filter((i) => i.state.isPaused);
    return Ae.batch(() => Promise.all(s.map((i) => i.continue().catch(cn))));
  }
};
function $r(s) {
  return s.options.scope?.id;
}
function Dp(s) {
  return {
    onFetch: (i, l) => {
      const u = i.options,
        c = i.fetchOptions?.meta?.fetchMore?.direction,
        f = i.state.data?.pages || [],
        d = i.state.data?.pageParams || [];
      let m = { pages: [], pageParams: [] },
        y = 0;
      const p = async () => {
        let g = !1;
        const v = (D) => {
            Object.defineProperty(D, "signal", {
              enumerable: !0,
              get: () => (
                i.signal.aborted
                  ? (g = !0)
                  : i.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                i.signal
              ),
            });
          },
          w = av(i.options, i.fetchOptions),
          z = async (D, k, V) => {
            if (g) return Promise.reject();
            if (k == null && D.pages.length) return Promise.resolve(D);
            const Y = {
              client: i.client,
              queryKey: i.queryKey,
              pageParam: k,
              direction: V ? "backward" : "forward",
              meta: i.options.meta,
            };
            v(Y);
            const it = await w(Y),
              { maxPages: tt } = i.options,
              mt = V ? _b : bb;
            return {
              pages: mt(D.pages, it, tt),
              pageParams: mt(D.pageParams, k, tt),
            };
          };
        if (c && f.length) {
          const D = c === "backward",
            k = D ? Ub : zp,
            V = { pages: f, pageParams: d },
            Y = k(u, V);
          m = await z(V, Y, D);
        } else {
          const D = s ?? f.length;
          do {
            const k = y === 0 ? (d[0] ?? u.initialPageParam) : zp(u, m);
            if (y > 0 && k == null) break;
            (m = await z(m, k)), y++;
          } while (y < D);
        }
        return m;
      };
      i.options.persister
        ? (i.fetchFn = () =>
            i.options.persister?.(
              p,
              {
                client: i.client,
                queryKey: i.queryKey,
                meta: i.options.meta,
                signal: i.signal,
              },
              l,
            ))
        : (i.fetchFn = p);
    },
  };
}
function zp(s, { pages: i, pageParams: l }) {
  const u = i.length - 1;
  return i.length > 0 ? s.getNextPageParam(i[u], i, l[u], l) : void 0;
}
function Ub(s, { pages: i, pageParams: l }) {
  return i.length > 0 ? s.getPreviousPageParam?.(i[0], i, l[0], l) : void 0;
}
var ov = class {
    #t;
    #e;
    #n;
    #i;
    #a;
    #l;
    #r;
    #s;
    constructor(s = {}) {
      (this.#t = s.queryCache || new Cb()),
        (this.#e = s.mutationCache || new Nb()),
        (this.#n = s.defaultOptions || {}),
        (this.#i = new Map()),
        (this.#a = new Map()),
        (this.#l = 0);
    }
    mount() {
      this.#l++,
        this.#l === 1 &&
          ((this.#r = iv.subscribe(async (s) => {
            s && (await this.resumePausedMutations(), this.#t.onFocus());
          })),
          (this.#s = lu.subscribe(async (s) => {
            s && (await this.resumePausedMutations(), this.#t.onOnline());
          })));
    }
    unmount() {
      this.#l--,
        this.#l === 0 &&
          (this.#r?.(), (this.#r = void 0), this.#s?.(), (this.#s = void 0));
    }
    isFetching(s) {
      return this.#t.findAll({ ...s, fetchStatus: "fetching" }).length;
    }
    isMutating(s) {
      return this.#e.findAll({ ...s, status: "pending" }).length;
    }
    getQueryData(s) {
      const i = this.defaultQueryOptions({ queryKey: s });
      return this.#t.get(i.queryHash)?.state.data;
    }
    ensureQueryData(s) {
      const i = this.defaultQueryOptions(s),
        l = this.#t.build(this, i),
        u = l.state.data;
      return u === void 0
        ? this.fetchQuery(s)
        : (s.revalidateIfStale &&
            l.isStaleByTime(wp(i.staleTime, l)) &&
            this.prefetchQuery(i),
          Promise.resolve(u));
    }
    getQueriesData(s) {
      return this.#t.findAll(s).map(({ queryKey: i, state: l }) => {
        const u = l.data;
        return [i, u];
      });
    }
    setQueryData(s, i, l) {
      const u = this.defaultQueryOptions({ queryKey: s }),
        f = this.#t.get(u.queryHash)?.state.data,
        d = hb(i, f);
      if (d !== void 0)
        return this.#t.build(this, u).setData(d, { ...l, manual: !0 });
    }
    setQueriesData(s, i, l) {
      return Ae.batch(() =>
        this.#t
          .findAll(s)
          .map(({ queryKey: u }) => [u, this.setQueryData(u, i, l)]),
      );
    }
    getQueryState(s) {
      const i = this.defaultQueryOptions({ queryKey: s });
      return this.#t.get(i.queryHash)?.state;
    }
    removeQueries(s) {
      const i = this.#t;
      Ae.batch(() => {
        i.findAll(s).forEach((l) => {
          i.remove(l);
        });
      });
    }
    resetQueries(s, i) {
      const l = this.#t;
      return Ae.batch(
        () => (
          l.findAll(s).forEach((u) => {
            u.reset();
          }),
          this.refetchQueries({ type: "active", ...s }, i)
        ),
      );
    }
    cancelQueries(s, i = {}) {
      const l = { revert: !0, ...i },
        u = Ae.batch(() => this.#t.findAll(s).map((c) => c.cancel(l)));
      return Promise.all(u).then(cn).catch(cn);
    }
    invalidateQueries(s, i = {}) {
      return Ae.batch(
        () => (
          this.#t.findAll(s).forEach((l) => {
            l.invalidate();
          }),
          s?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...s, type: s?.refetchType ?? s?.type ?? "active" },
                i,
              )
        ),
      );
    }
    refetchQueries(s, i = {}) {
      const l = { ...i, cancelRefetch: i.cancelRefetch ?? !0 },
        u = Ae.batch(() =>
          this.#t
            .findAll(s)
            .filter((c) => !c.isDisabled())
            .map((c) => {
              let f = c.fetch(void 0, l);
              return (
                l.throwOnError || (f = f.catch(cn)),
                c.state.fetchStatus === "paused" ? Promise.resolve() : f
              );
            }),
        );
      return Promise.all(u).then(cn);
    }
    fetchQuery(s) {
      const i = this.defaultQueryOptions(s);
      i.retry === void 0 && (i.retry = !1);
      const l = this.#t.build(this, i);
      return l.isStaleByTime(wp(i.staleTime, l))
        ? l.fetch(i)
        : Promise.resolve(l.state.data);
    }
    prefetchQuery(s) {
      return this.fetchQuery(s).then(cn).catch(cn);
    }
    fetchInfiniteQuery(s) {
      return (s.behavior = Dp(s.pages)), this.fetchQuery(s);
    }
    prefetchInfiniteQuery(s) {
      return this.fetchInfiniteQuery(s).then(cn).catch(cn);
    }
    ensureInfiniteQueryData(s) {
      return (s.behavior = Dp(s.pages)), this.ensureQueryData(s);
    }
    resumePausedMutations() {
      return lu.isOnline()
        ? this.#e.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#t;
    }
    getMutationCache() {
      return this.#e;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(s) {
      this.#n = s;
    }
    setQueryDefaults(s, i) {
      this.#i.set(hl(s), { queryKey: s, defaultOptions: i });
    }
    getQueryDefaults(s) {
      const i = [...this.#i.values()],
        l = {};
      return (
        i.forEach((u) => {
          ml(s, u.queryKey) && Object.assign(l, u.defaultOptions);
        }),
        l
      );
    }
    setMutationDefaults(s, i) {
      this.#a.set(hl(s), { mutationKey: s, defaultOptions: i });
    }
    getMutationDefaults(s) {
      const i = [...this.#a.values()],
        l = {};
      return (
        i.forEach((u) => {
          ml(s, u.mutationKey) && Object.assign(l, u.defaultOptions);
        }),
        l
      );
    }
    defaultQueryOptions(s) {
      if (s._defaulted) return s;
      const i = {
        ...this.#n.queries,
        ...this.getQueryDefaults(s.queryKey),
        ...s,
        _defaulted: !0,
      };
      return (
        i.queryHash || (i.queryHash = ff(i.queryKey, i)),
        i.refetchOnReconnect === void 0 &&
          (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === df && (i.enabled = !1),
        i
      );
    }
    defaultMutationOptions(s) {
      return s?._defaulted
        ? s
        : {
            ...this.#n.mutations,
            ...(s?.mutationKey && this.getMutationDefaults(s.mutationKey)),
            ...s,
            _defaulted: !0,
          };
    }
    clear() {
      this.#t.clear(), this.#e.clear();
    }
  },
  cv = _t.createContext(void 0),
  aS = (s) => {
    const i = _t.useContext(cv);
    if (!i)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return i;
  },
  jb = ({ client: s, children: i }) => (
    _t.useEffect(
      () => (
        s.mount(),
        () => {
          s.unmount();
        }
      ),
      [s],
    ),
    P.jsx(cv.Provider, { value: s, children: i })
  );
const fv = Q.createContext(null),
  Pr = "lumon_auth_user",
  Bb = ({ children: s }) => {
    const [i, l] = Q.useState(() => {
        if (typeof window > "u") return null;
        const d = localStorage.getItem(Pr);
        return d ? JSON.parse(d) : null;
      }),
      u = !!i;
    console.log(u);
    const c = Q.useCallback(async () => {
        typeof window < "u" && localStorage.removeItem(Pr), l(null);
      }, []),
      f = Q.useCallback(async (d) => {
        typeof window < "u" && localStorage.setItem(Pr, JSON.stringify(d)),
          l(d);
      }, []);
    return (
      Q.useEffect(() => {
        i && typeof window < "u" && localStorage.setItem(Pr, JSON.stringify(i));
      }, [i]),
      P.jsx(fv.Provider, {
        value: { user: i, isAuthenticated: u, login: f, logout: c },
        children: s,
      })
    );
  };
function iS() {
  const s = Q.useContext(fv);
  if (!s) throw new Error("useAuth must be used within an AuthProvider");
  return s;
}
const Lb = "/_build/assets/app-BzPYWJrc.css";
var kb = (s, i, l, u, c, f, d, m) => {
    let y = document.documentElement,
      p = ["light", "dark"];
    function g(z) {
      (Array.isArray(s) ? s : [s]).forEach((D) => {
        let k = D === "class",
          V = k && f ? c.map((Y) => f[Y] || Y) : c;
        k
          ? (y.classList.remove(...V), y.classList.add(f && f[z] ? f[z] : z))
          : y.setAttribute(D, z);
      }),
        v(z);
    }
    function v(z) {
      m && p.includes(z) && (y.style.colorScheme = z);
    }
    function w() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (u) g(u);
    else
      try {
        let z = localStorage.getItem(i) || l,
          D = d && z === "system" ? w() : z;
        g(D);
      } catch {}
  },
  Hb = _t.createContext(void 0),
  qb = { setTheme: (s) => {}, themes: [] },
  Zb = () => {
    var s;
    return (s = _t.useContext(Hb)) != null ? s : qb;
  };
_t.memo(
  ({
    forcedTheme: s,
    storageKey: i,
    attribute: l,
    enableSystem: u,
    enableColorScheme: c,
    defaultTheme: f,
    value: d,
    themes: m,
    nonce: y,
    scriptProps: p,
  }) => {
    let g = JSON.stringify([l, i, f, s, m, d, u, c]).slice(1, -1);
    return _t.createElement("script", {
      ...p,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? y : "",
      dangerouslySetInnerHTML: { __html: `(${kb.toString()})(${g})` },
    });
  },
);
function Vb(s) {
  if (typeof document > "u") return;
  let i = document.head || document.getElementsByTagName("head")[0],
    l = document.createElement("style");
  (l.type = "text/css"),
    i.appendChild(l),
    l.styleSheet
      ? (l.styleSheet.cssText = s)
      : l.appendChild(document.createTextNode(s));
}
const Yb = (s) => {
    switch (s) {
      case "success":
        return Xb;
      case "info":
        return Jb;
      case "warning":
        return Kb;
      case "error":
        return $b;
      default:
        return null;
    }
  },
  Gb = Array(12).fill(0),
  Qb = ({ visible: s, className: i }) =>
    Q.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", i].filter(Boolean).join(" "),
        "data-visible": s,
      },
      Q.createElement(
        "div",
        { className: "sonner-spinner" },
        Gb.map((l, u) =>
          Q.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${u}`,
          }),
        ),
      ),
    ),
  Xb = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  Kb = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  Jb = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  $b = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Q.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  Pb = Q.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    Q.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    Q.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  Fb = () => {
    const [s, i] = Q.useState(document.hidden);
    return (
      Q.useEffect(() => {
        const l = () => {
          i(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", l),
          () => window.removeEventListener("visibilitychange", l)
        );
      }, []),
      s
    );
  };
let ef = 1;
class Wb {
  constructor() {
    (this.subscribe = (i) => (
      this.subscribers.push(i),
      () => {
        const l = this.subscribers.indexOf(i);
        this.subscribers.splice(l, 1);
      }
    )),
      (this.publish = (i) => {
        this.subscribers.forEach((l) => l(i));
      }),
      (this.addToast = (i) => {
        this.publish(i), (this.toasts = [...this.toasts, i]);
      }),
      (this.create = (i) => {
        var l;
        const { message: u, ...c } = i,
          f =
            typeof i?.id == "number" ||
            ((l = i.id) == null ? void 0 : l.length) > 0
              ? i.id
              : ef++,
          d = this.toasts.find((y) => y.id === f),
          m = i.dismissible === void 0 ? !0 : i.dismissible;
        return (
          this.dismissedToasts.has(f) && this.dismissedToasts.delete(f),
          d
            ? (this.toasts = this.toasts.map((y) =>
                y.id === f
                  ? (this.publish({ ...y, ...i, id: f, title: u }),
                    { ...y, ...i, id: f, dismissible: m, title: u })
                  : y,
              ))
            : this.addToast({ title: u, ...c, dismissible: m, id: f }),
          f
        );
      }),
      (this.dismiss = (i) => (
        i
          ? (this.dismissedToasts.add(i),
            requestAnimationFrame(() =>
              this.subscribers.forEach((l) => l({ id: i, dismiss: !0 })),
            ))
          : this.toasts.forEach((l) => {
              this.subscribers.forEach((u) => u({ id: l.id, dismiss: !0 }));
            }),
        i
      )),
      (this.message = (i, l) => this.create({ ...l, message: i })),
      (this.error = (i, l) => this.create({ ...l, message: i, type: "error" })),
      (this.success = (i, l) =>
        this.create({ ...l, type: "success", message: i })),
      (this.info = (i, l) => this.create({ ...l, type: "info", message: i })),
      (this.warning = (i, l) =>
        this.create({ ...l, type: "warning", message: i })),
      (this.loading = (i, l) =>
        this.create({ ...l, type: "loading", message: i })),
      (this.promise = (i, l) => {
        if (!l) return;
        let u;
        l.loading !== void 0 &&
          (u = this.create({
            ...l,
            promise: i,
            type: "loading",
            message: l.loading,
            description:
              typeof l.description != "function" ? l.description : void 0,
          }));
        const c = Promise.resolve(i instanceof Function ? i() : i);
        let f = u !== void 0,
          d;
        const m = c
            .then(async (p) => {
              if (((d = ["resolve", p]), Q.isValidElement(p)))
                (f = !1), this.create({ id: u, type: "default", message: p });
              else if (t_(p) && !p.ok) {
                f = !1;
                const v =
                    typeof l.error == "function"
                      ? await l.error(`HTTP error! status: ${p.status}`)
                      : l.error,
                  w =
                    typeof l.description == "function"
                      ? await l.description(`HTTP error! status: ${p.status}`)
                      : l.description,
                  D =
                    typeof v == "object" && !Q.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: u, type: "error", description: w, ...D });
              } else if (p instanceof Error) {
                f = !1;
                const v =
                    typeof l.error == "function" ? await l.error(p) : l.error,
                  w =
                    typeof l.description == "function"
                      ? await l.description(p)
                      : l.description,
                  D =
                    typeof v == "object" && !Q.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: u, type: "error", description: w, ...D });
              } else if (l.success !== void 0) {
                f = !1;
                const v =
                    typeof l.success == "function"
                      ? await l.success(p)
                      : l.success,
                  w =
                    typeof l.description == "function"
                      ? await l.description(p)
                      : l.description,
                  D =
                    typeof v == "object" && !Q.isValidElement(v)
                      ? v
                      : { message: v };
                this.create({ id: u, type: "success", description: w, ...D });
              }
            })
            .catch(async (p) => {
              if (((d = ["reject", p]), l.error !== void 0)) {
                f = !1;
                const g =
                    typeof l.error == "function" ? await l.error(p) : l.error,
                  v =
                    typeof l.description == "function"
                      ? await l.description(p)
                      : l.description,
                  z =
                    typeof g == "object" && !Q.isValidElement(g)
                      ? g
                      : { message: g };
                this.create({ id: u, type: "error", description: v, ...z });
              }
            })
            .finally(() => {
              f && (this.dismiss(u), (u = void 0)),
                l.finally == null || l.finally.call(l);
            }),
          y = () =>
            new Promise((p, g) =>
              m.then(() => (d[0] === "reject" ? g(d[1]) : p(d[1]))).catch(g),
            );
        return typeof u != "string" && typeof u != "number"
          ? { unwrap: y }
          : Object.assign(u, { unwrap: y });
      }),
      (this.custom = (i, l) => {
        const u = l?.id || ef++;
        return this.create({ jsx: i(u), id: u, ...l }), u;
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((i) => !this.dismissedToasts.has(i.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set());
  }
}
const je = new Wb(),
  Ib = (s, i) => {
    const l = i?.id || ef++;
    return je.addToast({ title: s, ...i, id: l }), l;
  },
  t_ = (s) =>
    s &&
    typeof s == "object" &&
    "ok" in s &&
    typeof s.ok == "boolean" &&
    "status" in s &&
    typeof s.status == "number",
  e_ = Ib,
  n_ = () => je.toasts,
  a_ = () => je.getActiveToasts(),
  sS = Object.assign(
    e_,
    {
      success: je.success,
      info: je.info,
      warning: je.warning,
      error: je.error,
      custom: je.custom,
      message: je.message,
      promise: je.promise,
      dismiss: je.dismiss,
      loading: je.loading,
    },
    { getHistory: n_, getToasts: a_ },
  );
Vb(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function Fr(s) {
  return s.label !== void 0;
}
const i_ = 3,
  s_ = "24px",
  l_ = "16px",
  Np = 4e3,
  r_ = 356,
  u_ = 14,
  o_ = 45,
  c_ = 200;
function Tn(...s) {
  return s.filter(Boolean).join(" ");
}
function f_(s) {
  const [i, l] = s.split("-"),
    u = [];
  return i && u.push(i), l && u.push(l), u;
}
const d_ = (s) => {
  var i, l, u, c, f, d, m, y, p;
  const {
      invert: g,
      toast: v,
      unstyled: w,
      interacting: z,
      setHeights: D,
      visibleToasts: k,
      heights: V,
      index: Y,
      toasts: it,
      expanded: tt,
      removeToast: mt,
      defaultRichColors: W,
      closeButton: X,
      style: at,
      cancelButtonStyle: B,
      actionButtonStyle: N,
      className: ut = "",
      descriptionClassName: st = "",
      duration: J,
      position: et,
      gap: Rt,
      expandByDefault: rt,
      classNames: E,
      icons: q,
      closeButtonAriaLabel: I = "Close toast",
    } = s,
    [dt, S] = Q.useState(null),
    [M, Z] = Q.useState(null),
    [j, $] = Q.useState(!1),
    [ht, K] = Q.useState(!1),
    [At, ct] = Q.useState(!1),
    [jt, Te] = Q.useState(!1),
    [Oe, an] = Q.useState(!1),
    [vn, _e] = Q.useState(0),
    [ee, Be] = Q.useState(0),
    Bt = Q.useRef(v.duration || J || Np),
    za = Q.useRef(null),
    Ce = Q.useRef(null),
    si = Y === 0,
    Fn = Y + 1 <= k,
    me = v.type,
    Le = v.dismissible !== !1,
    _u = v.className || "",
    Su = v.descriptionClassName || "",
    yn = Q.useMemo(
      () => V.findIndex((St) => St.toastId === v.id) || 0,
      [V, v.id],
    ),
    Re = Q.useMemo(() => {
      var St;
      return (St = v.closeButton) != null ? St : X;
    }, [v.closeButton, X]),
    sn = Q.useMemo(() => v.duration || J || Np, [v.duration, J]),
    pe = Q.useRef(0),
    Wn = Q.useRef(0),
    Cl = Q.useRef(0),
    In = Q.useRef(null),
    [li, ri] = et.split("-"),
    gn = Q.useMemo(
      () => V.reduce((St, Pt, ne) => (ne >= yn ? St : St + Pt.height), 0),
      [V, yn],
    ),
    Na = Fb(),
    Ua = v.invert || g,
    rs = me === "loading";
  (Wn.current = Q.useMemo(() => yn * Rt + gn, [yn, gn])),
    Q.useEffect(() => {
      Bt.current = sn;
    }, [sn]),
    Q.useEffect(() => {
      $(!0);
    }, []),
    Q.useEffect(() => {
      const St = Ce.current;
      if (St) {
        const Pt = St.getBoundingClientRect().height;
        return (
          Be(Pt),
          D((ne) => [
            { toastId: v.id, height: Pt, position: v.position },
            ...ne,
          ]),
          () => D((ne) => ne.filter((ve) => ve.toastId !== v.id))
        );
      }
    }, [D, v.id]),
    Q.useLayoutEffect(() => {
      if (!j) return;
      const St = Ce.current,
        Pt = St.style.height;
      St.style.height = "auto";
      const ne = St.getBoundingClientRect().height;
      (St.style.height = Pt),
        Be(ne),
        D((ve) =>
          ve.find((le) => le.toastId === v.id)
            ? ve.map((le) => (le.toastId === v.id ? { ...le, height: ne } : le))
            : [{ toastId: v.id, height: ne, position: v.position }, ...ve],
        );
    }, [j, v.title, v.description, D, v.id]);
  const ln = Q.useCallback(() => {
    K(!0),
      _e(Wn.current),
      D((St) => St.filter((Pt) => Pt.toastId !== v.id)),
      setTimeout(() => {
        mt(v);
      }, c_);
  }, [v, mt, D, Wn]);
  Q.useEffect(() => {
    if (
      (v.promise && me === "loading") ||
      v.duration === 1 / 0 ||
      v.type === "loading"
    )
      return;
    let St;
    return (
      tt || z || Na
        ? (() => {
            if (Cl.current < pe.current) {
              const ve = new Date().getTime() - pe.current;
              Bt.current = Bt.current - ve;
            }
            Cl.current = new Date().getTime();
          })()
        : (() => {
            Bt.current !== 1 / 0 &&
              ((pe.current = new Date().getTime()),
              (St = setTimeout(() => {
                v.onAutoClose == null || v.onAutoClose.call(v, v), ln();
              }, Bt.current)));
          })(),
      () => clearTimeout(St)
    );
  }, [tt, z, v, me, Na, ln]),
    Q.useEffect(() => {
      v.delete && ln();
    }, [ln, v.delete]);
  function Dl() {
    var St;
    if (q?.loading) {
      var Pt;
      return Q.createElement(
        "div",
        {
          className: Tn(
            E?.loader,
            v == null || (Pt = v.classNames) == null ? void 0 : Pt.loader,
            "sonner-loader",
          ),
          "data-visible": me === "loading",
        },
        q.loading,
      );
    }
    return Q.createElement(Qb, {
      className: Tn(
        E?.loader,
        v == null || (St = v.classNames) == null ? void 0 : St.loader,
      ),
      visible: me === "loading",
    });
  }
  const us = v.icon || q?.[me] || Yb(me);
  var ta, zl;
  return Q.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Ce,
      className: Tn(
        ut,
        _u,
        E?.toast,
        v == null || (i = v.classNames) == null ? void 0 : i.toast,
        E?.default,
        E?.[me],
        v == null || (l = v.classNames) == null ? void 0 : l[me],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (ta = v.richColors) != null ? ta : W,
      "data-styled": !(v.jsx || v.unstyled || w),
      "data-mounted": j,
      "data-promise": !!v.promise,
      "data-swiped": Oe,
      "data-removed": ht,
      "data-visible": Fn,
      "data-y-position": li,
      "data-x-position": ri,
      "data-index": Y,
      "data-front": si,
      "data-swiping": At,
      "data-dismissible": Le,
      "data-type": me,
      "data-invert": Ua,
      "data-swipe-out": jt,
      "data-swipe-direction": M,
      "data-expanded": !!(tt || (rt && j)),
      style: {
        "--index": Y,
        "--toasts-before": Y,
        "--z-index": it.length - Y,
        "--offset": `${ht ? vn : Wn.current}px`,
        "--initial-height": rt ? "auto" : `${ee}px`,
        ...at,
        ...v.style,
      },
      onDragEnd: () => {
        ct(!1), S(null), (In.current = null);
      },
      onPointerDown: (St) => {
        rs ||
          !Le ||
          ((za.current = new Date()),
          _e(Wn.current),
          St.target.setPointerCapture(St.pointerId),
          St.target.tagName !== "BUTTON" &&
            (ct(!0), (In.current = { x: St.clientX, y: St.clientY })));
      },
      onPointerUp: () => {
        var St, Pt, ne;
        if (jt || !Le) return;
        In.current = null;
        const ve = Number(
            ((St = Ce.current) == null
              ? void 0
              : St.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          ja = Number(
            ((Pt = Ce.current) == null
              ? void 0
              : Pt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          le =
            new Date().getTime() -
            ((ne = za.current) == null ? void 0 : ne.getTime()),
          Ft = dt === "x" ? ve : ja,
          Wt = Math.abs(Ft) / le;
        if (Math.abs(Ft) >= o_ || Wt > 0.11) {
          _e(Wn.current),
            v.onDismiss == null || v.onDismiss.call(v, v),
            Z(
              dt === "x" ? (ve > 0 ? "right" : "left") : ja > 0 ? "down" : "up",
            ),
            ln(),
            Te(!0);
          return;
        } else {
          var Yt, oe;
          (Yt = Ce.current) == null ||
            Yt.style.setProperty("--swipe-amount-x", "0px"),
            (oe = Ce.current) == null ||
              oe.style.setProperty("--swipe-amount-y", "0px");
        }
        an(!1), ct(!1), S(null);
      },
      onPointerMove: (St) => {
        var Pt, ne, ve;
        if (
          !In.current ||
          !Le ||
          ((Pt = window.getSelection()) == null
            ? void 0
            : Pt.toString().length) > 0
        )
          return;
        const le = St.clientY - In.current.y,
          Ft = St.clientX - In.current.x;
        var Wt;
        const Yt = (Wt = s.swipeDirections) != null ? Wt : f_(et);
        !dt &&
          (Math.abs(Ft) > 1 || Math.abs(le) > 1) &&
          S(Math.abs(Ft) > Math.abs(le) ? "x" : "y");
        let oe = { x: 0, y: 0 };
        const ui = (Cn) => 1 / (1.5 + Math.abs(Cn) / 20);
        if (dt === "y") {
          if (Yt.includes("top") || Yt.includes("bottom"))
            if (
              (Yt.includes("top") && le < 0) ||
              (Yt.includes("bottom") && le > 0)
            )
              oe.y = le;
            else {
              const Cn = le * ui(le);
              oe.y = Math.abs(Cn) < Math.abs(le) ? Cn : le;
            }
        } else if (dt === "x" && (Yt.includes("left") || Yt.includes("right")))
          if (
            (Yt.includes("left") && Ft < 0) ||
            (Yt.includes("right") && Ft > 0)
          )
            oe.x = Ft;
          else {
            const Cn = Ft * ui(Ft);
            oe.x = Math.abs(Cn) < Math.abs(Ft) ? Cn : Ft;
          }
        (Math.abs(oe.x) > 0 || Math.abs(oe.y) > 0) && an(!0),
          (ne = Ce.current) == null ||
            ne.style.setProperty("--swipe-amount-x", `${oe.x}px`),
          (ve = Ce.current) == null ||
            ve.style.setProperty("--swipe-amount-y", `${oe.y}px`);
      },
    },
    Re && !v.jsx && me !== "loading"
      ? Q.createElement(
          "button",
          {
            "aria-label": I,
            "data-disabled": rs,
            "data-close-button": !0,
            onClick:
              rs || !Le
                ? () => {}
                : () => {
                    ln(), v.onDismiss == null || v.onDismiss.call(v, v);
                  },
            className: Tn(
              E?.closeButton,
              v == null || (u = v.classNames) == null ? void 0 : u.closeButton,
            ),
          },
          (zl = q?.close) != null ? zl : Pb,
        )
      : null,
    (me || v.icon || v.promise) &&
      v.icon !== null &&
      (q?.[me] !== null || v.icon)
      ? Q.createElement(
          "div",
          {
            "data-icon": "",
            className: Tn(
              E?.icon,
              v == null || (c = v.classNames) == null ? void 0 : c.icon,
            ),
          },
          v.promise || (v.type === "loading" && !v.icon)
            ? v.icon || Dl()
            : null,
          v.type !== "loading" ? us : null,
        )
      : null,
    Q.createElement(
      "div",
      {
        "data-content": "",
        className: Tn(
          E?.content,
          v == null || (f = v.classNames) == null ? void 0 : f.content,
        ),
      },
      Q.createElement(
        "div",
        {
          "data-title": "",
          className: Tn(
            E?.title,
            v == null || (d = v.classNames) == null ? void 0 : d.title,
          ),
        },
        v.jsx ? v.jsx : typeof v.title == "function" ? v.title() : v.title,
      ),
      v.description
        ? Q.createElement(
            "div",
            {
              "data-description": "",
              className: Tn(
                st,
                Su,
                E?.description,
                v == null || (m = v.classNames) == null
                  ? void 0
                  : m.description,
              ),
            },
            typeof v.description == "function"
              ? v.description()
              : v.description,
          )
        : null,
    ),
    Q.isValidElement(v.cancel)
      ? v.cancel
      : v.cancel && Fr(v.cancel)
        ? Q.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: v.cancelButtonStyle || B,
              onClick: (St) => {
                Fr(v.cancel) &&
                  Le &&
                  (v.cancel.onClick == null ||
                    v.cancel.onClick.call(v.cancel, St),
                  ln());
              },
              className: Tn(
                E?.cancelButton,
                v == null || (y = v.classNames) == null
                  ? void 0
                  : y.cancelButton,
              ),
            },
            v.cancel.label,
          )
        : null,
    Q.isValidElement(v.action)
      ? v.action
      : v.action && Fr(v.action)
        ? Q.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: v.actionButtonStyle || N,
              onClick: (St) => {
                Fr(v.action) &&
                  (v.action.onClick == null ||
                    v.action.onClick.call(v.action, St),
                  !St.defaultPrevented && ln());
              },
              className: Tn(
                E?.actionButton,
                v == null || (p = v.classNames) == null
                  ? void 0
                  : p.actionButton,
              ),
            },
            v.action.label,
          )
        : null,
  );
};
function Up() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const s = document.documentElement.getAttribute("dir");
  return s === "auto" || !s
    ? window.getComputedStyle(document.documentElement).direction
    : s;
}
function h_(s, i) {
  const l = {};
  return (
    [s, i].forEach((u, c) => {
      const f = c === 1,
        d = f ? "--mobile-offset" : "--offset",
        m = f ? l_ : s_;
      function y(p) {
        ["top", "right", "bottom", "left"].forEach((g) => {
          l[`${d}-${g}`] = typeof p == "number" ? `${p}px` : p;
        });
      }
      typeof u == "number" || typeof u == "string"
        ? y(u)
        : typeof u == "object"
          ? ["top", "right", "bottom", "left"].forEach((p) => {
              u[p] === void 0
                ? (l[`${d}-${p}`] = m)
                : (l[`${d}-${p}`] =
                    typeof u[p] == "number" ? `${u[p]}px` : u[p]);
            })
          : y(m);
    }),
    l
  );
}
const m_ = Q.forwardRef(function (i, l) {
    const {
        invert: u,
        position: c = "bottom-right",
        hotkey: f = ["altKey", "KeyT"],
        expand: d,
        closeButton: m,
        className: y,
        offset: p,
        mobileOffset: g,
        theme: v = "light",
        richColors: w,
        duration: z,
        style: D,
        visibleToasts: k = i_,
        toastOptions: V,
        dir: Y = Up(),
        gap: it = u_,
        icons: tt,
        containerAriaLabel: mt = "Notifications",
      } = i,
      [W, X] = Q.useState([]),
      at = Q.useMemo(
        () =>
          Array.from(
            new Set(
              [c].concat(W.filter((M) => M.position).map((M) => M.position)),
            ),
          ),
        [W, c],
      ),
      [B, N] = Q.useState([]),
      [ut, st] = Q.useState(!1),
      [J, et] = Q.useState(!1),
      [Rt, rt] = Q.useState(
        v !== "system"
          ? v
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      E = Q.useRef(null),
      q = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      I = Q.useRef(null),
      dt = Q.useRef(!1),
      S = Q.useCallback((M) => {
        X((Z) => {
          var j;
          return (
            ((j = Z.find(($) => $.id === M.id)) != null && j.delete) ||
              je.dismiss(M.id),
            Z.filter(({ id: $ }) => $ !== M.id)
          );
        });
      }, []);
    return (
      Q.useEffect(
        () =>
          je.subscribe((M) => {
            if (M.dismiss) {
              requestAnimationFrame(() => {
                X((Z) =>
                  Z.map((j) => (j.id === M.id ? { ...j, delete: !0 } : j)),
                );
              });
              return;
            }
            setTimeout(() => {
              $g.flushSync(() => {
                X((Z) => {
                  const j = Z.findIndex(($) => $.id === M.id);
                  return j !== -1
                    ? [...Z.slice(0, j), { ...Z[j], ...M }, ...Z.slice(j + 1)]
                    : [M, ...Z];
                });
              });
            });
          }),
        [W],
      ),
      Q.useEffect(() => {
        if (v !== "system") {
          rt(v);
          return;
        }
        if (
          (v === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? rt("dark")
              : rt("light")),
          typeof window > "u")
        )
          return;
        const M = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          M.addEventListener("change", ({ matches: Z }) => {
            rt(Z ? "dark" : "light");
          });
        } catch {
          M.addListener(({ matches: j }) => {
            try {
              rt(j ? "dark" : "light");
            } catch ($) {
              console.error($);
            }
          });
        }
      }, [v]),
      Q.useEffect(() => {
        W.length <= 1 && st(!1);
      }, [W]),
      Q.useEffect(() => {
        const M = (Z) => {
          var j;
          if (f.every((K) => Z[K] || Z.code === K)) {
            var ht;
            st(!0), (ht = E.current) == null || ht.focus();
          }
          Z.code === "Escape" &&
            (document.activeElement === E.current ||
              ((j = E.current) != null &&
                j.contains(document.activeElement))) &&
            st(!1);
        };
        return (
          document.addEventListener("keydown", M),
          () => document.removeEventListener("keydown", M)
        );
      }, [f]),
      Q.useEffect(() => {
        if (E.current)
          return () => {
            I.current &&
              (I.current.focus({ preventScroll: !0 }),
              (I.current = null),
              (dt.current = !1));
          };
      }, [E.current]),
      Q.createElement(
        "section",
        {
          ref: l,
          "aria-label": `${mt} ${q}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        at.map((M, Z) => {
          var j;
          const [$, ht] = M.split("-");
          return W.length
            ? Q.createElement(
                "ol",
                {
                  key: M,
                  dir: Y === "auto" ? Up() : Y,
                  tabIndex: -1,
                  ref: E,
                  className: y,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": Rt,
                  "data-y-position": $,
                  "data-lifted": ut && W.length > 1 && !d,
                  "data-x-position": ht,
                  style: {
                    "--front-toast-height": `${((j = B[0]) == null ? void 0 : j.height) || 0}px`,
                    "--width": `${r_}px`,
                    "--gap": `${it}px`,
                    ...D,
                    ...h_(p, g),
                  },
                  onBlur: (K) => {
                    dt.current &&
                      !K.currentTarget.contains(K.relatedTarget) &&
                      ((dt.current = !1),
                      I.current &&
                        (I.current.focus({ preventScroll: !0 }),
                        (I.current = null)));
                  },
                  onFocus: (K) => {
                    (K.target instanceof HTMLElement &&
                      K.target.dataset.dismissible === "false") ||
                      dt.current ||
                      ((dt.current = !0), (I.current = K.relatedTarget));
                  },
                  onMouseEnter: () => st(!0),
                  onMouseMove: () => st(!0),
                  onMouseLeave: () => {
                    J || st(!1);
                  },
                  onDragEnd: () => st(!1),
                  onPointerDown: (K) => {
                    (K.target instanceof HTMLElement &&
                      K.target.dataset.dismissible === "false") ||
                      et(!0);
                  },
                  onPointerUp: () => et(!1),
                },
                W.filter(
                  (K) => (!K.position && Z === 0) || K.position === M,
                ).map((K, At) => {
                  var ct, jt;
                  return Q.createElement(d_, {
                    key: K.id,
                    icons: tt,
                    index: At,
                    toast: K,
                    defaultRichColors: w,
                    duration: (ct = V?.duration) != null ? ct : z,
                    className: V?.className,
                    descriptionClassName: V?.descriptionClassName,
                    invert: u,
                    visibleToasts: k,
                    closeButton: (jt = V?.closeButton) != null ? jt : m,
                    interacting: J,
                    position: M,
                    style: V?.style,
                    unstyled: V?.unstyled,
                    classNames: V?.classNames,
                    cancelButtonStyle: V?.cancelButtonStyle,
                    actionButtonStyle: V?.actionButtonStyle,
                    closeButtonAriaLabel: V?.closeButtonAriaLabel,
                    removeToast: S,
                    toasts: W.filter((Te) => Te.position == K.position),
                    heights: B.filter((Te) => Te.position == K.position),
                    setHeights: N,
                    expandByDefault: d,
                    gap: it,
                    expanded: ut,
                    swipeDirections: i.swipeDirections,
                  });
                }),
              )
            : null;
        }),
      )
    );
  }),
  p_ = ({ ...s }) => {
    const { theme: i = "system" } = Zb();
    return P.jsx(m_, {
      theme: i,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      },
      ...s,
    });
  },
  hf = zg()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Lumon" },
      ],
      links: [{ rel: "stylesheet", href: Lb }],
    }),
    component: v_,
  });
function v_() {
  const s = new ov();
  return P.jsx(y_, {
    children: P.jsx(jb, {
      client: s,
      children: P.jsxs(Bb, { children: [P.jsx(cf, {}), P.jsx(p_, {})] }),
    }),
  });
}
function y_({ children: s }) {
  return P.jsxs("html", {
    children: [
      P.jsx("head", { children: P.jsx(ib, {}) }),
      P.jsxs("body", { children: [s, P.jsx(lb, {})] }),
    ],
  });
}
const g_ = () => Oa(() => import("./_main-B8Ff00OR.js"), []),
  dv = Ca("/_main")({ component: Da(g_, "component", () => dv.ssr) }),
  b_ = () => Oa(() => import("./_auth-B9JvSQGq.js"), []),
  hv = Ca("/_auth")({ component: Da(b_, "component", () => hv.ssr) }),
  __ = () => Oa(() => import("./index-8LS07egg.js"), []),
  mv = Ca("/_main/")({ component: Da(__, "component", () => mv.ssr) }),
  S_ = () =>
    Oa(() => import("./dashboard-MGHvxcA4.js"), __vite__mapDeps([0, 1, 2, 3])),
  pv = Ca("/_main/dashboard")({ component: Da(S_, "component", () => pv.ssr) });
var zt;
(function (s) {
  s.assertEqual = (c) => c;
  function i(c) {}
  s.assertIs = i;
  function l(c) {
    throw new Error();
  }
  (s.assertNever = l),
    (s.arrayToEnum = (c) => {
      const f = {};
      for (const d of c) f[d] = d;
      return f;
    }),
    (s.getValidEnumValues = (c) => {
      const f = s.objectKeys(c).filter((m) => typeof c[c[m]] != "number"),
        d = {};
      for (const m of f) d[m] = c[m];
      return s.objectValues(d);
    }),
    (s.objectValues = (c) =>
      s.objectKeys(c).map(function (f) {
        return c[f];
      })),
    (s.objectKeys =
      typeof Object.keys == "function"
        ? (c) => Object.keys(c)
        : (c) => {
            const f = [];
            for (const d in c)
              Object.prototype.hasOwnProperty.call(c, d) && f.push(d);
            return f;
          }),
    (s.find = (c, f) => {
      for (const d of c) if (f(d)) return d;
    }),
    (s.isInteger =
      typeof Number.isInteger == "function"
        ? (c) => Number.isInteger(c)
        : (c) => typeof c == "number" && isFinite(c) && Math.floor(c) === c);
  function u(c, f = " | ") {
    return c.map((d) => (typeof d == "string" ? `'${d}'` : d)).join(f);
  }
  (s.joinValues = u),
    (s.jsonStringifyReplacer = (c, f) =>
      typeof f == "bigint" ? f.toString() : f);
})(zt || (zt = {}));
var nf;
(function (s) {
  s.mergeShapes = (i, l) => ({ ...i, ...l });
})(nf || (nf = {}));
const nt = zt.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Kn = (s) => {
    switch (typeof s) {
      case "undefined":
        return nt.undefined;
      case "string":
        return nt.string;
      case "number":
        return isNaN(s) ? nt.nan : nt.number;
      case "boolean":
        return nt.boolean;
      case "function":
        return nt.function;
      case "bigint":
        return nt.bigint;
      case "symbol":
        return nt.symbol;
      case "object":
        return Array.isArray(s)
          ? nt.array
          : s === null
            ? nt.null
            : s.then &&
                typeof s.then == "function" &&
                s.catch &&
                typeof s.catch == "function"
              ? nt.promise
              : typeof Map < "u" && s instanceof Map
                ? nt.map
                : typeof Set < "u" && s instanceof Set
                  ? nt.set
                  : typeof Date < "u" && s instanceof Date
                    ? nt.date
                    : nt.object;
      default:
        return nt.unknown;
    }
  },
  G = zt.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  x_ = (s) => JSON.stringify(s, null, 2).replace(/"([^"]+)":/g, "$1:");
class Qe extends Error {
  get errors() {
    return this.issues;
  }
  constructor(i) {
    super(),
      (this.issues = []),
      (this.addIssue = (u) => {
        this.issues = [...this.issues, u];
      }),
      (this.addIssues = (u = []) => {
        this.issues = [...this.issues, ...u];
      });
    const l = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, l)
      : (this.__proto__ = l),
      (this.name = "ZodError"),
      (this.issues = i);
  }
  format(i) {
    const l =
        i ||
        function (f) {
          return f.message;
        },
      u = { _errors: [] },
      c = (f) => {
        for (const d of f.issues)
          if (d.code === "invalid_union") d.unionErrors.map(c);
          else if (d.code === "invalid_return_type") c(d.returnTypeError);
          else if (d.code === "invalid_arguments") c(d.argumentsError);
          else if (d.path.length === 0) u._errors.push(l(d));
          else {
            let m = u,
              y = 0;
            for (; y < d.path.length; ) {
              const p = d.path[y];
              y === d.path.length - 1
                ? ((m[p] = m[p] || { _errors: [] }), m[p]._errors.push(l(d)))
                : (m[p] = m[p] || { _errors: [] }),
                (m = m[p]),
                y++;
            }
          }
      };
    return c(this), u;
  }
  static assert(i) {
    if (!(i instanceof Qe)) throw new Error(`Not a ZodError: ${i}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, zt.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(i = (l) => l.message) {
    const l = {},
      u = [];
    for (const c of this.issues)
      c.path.length > 0
        ? ((l[c.path[0]] = l[c.path[0]] || []), l[c.path[0]].push(i(c)))
        : u.push(i(c));
    return { formErrors: u, fieldErrors: l };
  }
  get formErrors() {
    return this.flatten();
  }
}
Qe.create = (s) => new Qe(s);
const is = (s, i) => {
  let l;
  switch (s.code) {
    case G.invalid_type:
      s.received === nt.undefined
        ? (l = "Required")
        : (l = `Expected ${s.expected}, received ${s.received}`);
      break;
    case G.invalid_literal:
      l = `Invalid literal value, expected ${JSON.stringify(s.expected, zt.jsonStringifyReplacer)}`;
      break;
    case G.unrecognized_keys:
      l = `Unrecognized key(s) in object: ${zt.joinValues(s.keys, ", ")}`;
      break;
    case G.invalid_union:
      l = "Invalid input";
      break;
    case G.invalid_union_discriminator:
      l = `Invalid discriminator value. Expected ${zt.joinValues(s.options)}`;
      break;
    case G.invalid_enum_value:
      l = `Invalid enum value. Expected ${zt.joinValues(s.options)}, received '${s.received}'`;
      break;
    case G.invalid_arguments:
      l = "Invalid function arguments";
      break;
    case G.invalid_return_type:
      l = "Invalid function return type";
      break;
    case G.invalid_date:
      l = "Invalid date";
      break;
    case G.invalid_string:
      typeof s.validation == "object"
        ? "includes" in s.validation
          ? ((l = `Invalid input: must include "${s.validation.includes}"`),
            typeof s.validation.position == "number" &&
              (l = `${l} at one or more positions greater than or equal to ${s.validation.position}`))
          : "startsWith" in s.validation
            ? (l = `Invalid input: must start with "${s.validation.startsWith}"`)
            : "endsWith" in s.validation
              ? (l = `Invalid input: must end with "${s.validation.endsWith}"`)
              : zt.assertNever(s.validation)
        : s.validation !== "regex"
          ? (l = `Invalid ${s.validation}`)
          : (l = "Invalid");
      break;
    case G.too_small:
      s.type === "array"
        ? (l = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "more than"} ${s.minimum} element(s)`)
        : s.type === "string"
          ? (l = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at least" : "over"} ${s.minimum} character(s)`)
          : s.type === "number"
            ? (l = `Number must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${s.minimum}`)
            : s.type === "date"
              ? (l = `Date must be ${s.exact ? "exactly equal to " : s.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(s.minimum))}`)
              : (l = "Invalid input");
      break;
    case G.too_big:
      s.type === "array"
        ? (l = `Array must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "less than"} ${s.maximum} element(s)`)
        : s.type === "string"
          ? (l = `String must contain ${s.exact ? "exactly" : s.inclusive ? "at most" : "under"} ${s.maximum} character(s)`)
          : s.type === "number"
            ? (l = `Number must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}`)
            : s.type === "bigint"
              ? (l = `BigInt must be ${s.exact ? "exactly" : s.inclusive ? "less than or equal to" : "less than"} ${s.maximum}`)
              : s.type === "date"
                ? (l = `Date must be ${s.exact ? "exactly" : s.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(s.maximum))}`)
                : (l = "Invalid input");
      break;
    case G.custom:
      l = "Invalid input";
      break;
    case G.invalid_intersection_types:
      l = "Intersection results could not be merged";
      break;
    case G.not_multiple_of:
      l = `Number must be a multiple of ${s.multipleOf}`;
      break;
    case G.not_finite:
      l = "Number must be finite";
      break;
    default:
      (l = i.defaultError), zt.assertNever(s);
  }
  return { message: l };
};
let vv = is;
function E_(s) {
  vv = s;
}
function ru() {
  return vv;
}
const uu = (s) => {
    const { data: i, path: l, errorMaps: u, issueData: c } = s,
      f = [...l, ...(c.path || [])],
      d = { ...c, path: f };
    if (c.message !== void 0) return { ...c, path: f, message: c.message };
    let m = "";
    const y = u
      .filter((p) => !!p)
      .slice()
      .reverse();
    for (const p of y) m = p(d, { data: i, defaultError: m }).message;
    return { ...c, path: f, message: m };
  },
  T_ = [];
function F(s, i) {
  const l = ru(),
    u = uu({
      issueData: i,
      data: s.data,
      path: s.path,
      errorMaps: [
        s.common.contextualErrorMap,
        s.schemaErrorMap,
        l,
        l === is ? void 0 : is,
      ].filter((c) => !!c),
    });
  s.common.issues.push(u);
}
class Ee {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(i, l) {
    const u = [];
    for (const c of l) {
      if (c.status === "aborted") return bt;
      c.status === "dirty" && i.dirty(), u.push(c.value);
    }
    return { status: i.value, value: u };
  }
  static async mergeObjectAsync(i, l) {
    const u = [];
    for (const c of l) {
      const f = await c.key,
        d = await c.value;
      u.push({ key: f, value: d });
    }
    return Ee.mergeObjectSync(i, u);
  }
  static mergeObjectSync(i, l) {
    const u = {};
    for (const c of l) {
      const { key: f, value: d } = c;
      if (f.status === "aborted" || d.status === "aborted") return bt;
      f.status === "dirty" && i.dirty(),
        d.status === "dirty" && i.dirty(),
        f.value !== "__proto__" &&
          (typeof d.value < "u" || c.alwaysSet) &&
          (u[f.value] = d.value);
    }
    return { status: i.value, value: u };
  }
}
const bt = Object.freeze({ status: "aborted" }),
  Wi = (s) => ({ status: "dirty", value: s }),
  Me = (s) => ({ status: "valid", value: s }),
  af = (s) => s.status === "aborted",
  sf = (s) => s.status === "dirty",
  ni = (s) => s.status === "valid",
  pl = (s) => typeof Promise < "u" && s instanceof Promise;
function ou(s, i, l, u) {
  if (typeof i == "function" ? s !== i || !0 : !i.has(s))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it",
    );
  return i.get(s);
}
function yv(s, i, l, u, c) {
  if (typeof i == "function" ? s !== i || !0 : !i.has(s))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it",
    );
  return i.set(s, l), l;
}
var ot;
(function (s) {
  (s.errToObj = (i) => (typeof i == "string" ? { message: i } : i || {})),
    (s.toString = (i) => (typeof i == "string" ? i : i?.message));
})(ot || (ot = {}));
var ul, ol;
class Mn {
  constructor(i, l, u, c) {
    (this._cachedPath = []),
      (this.parent = i),
      (this.data = l),
      (this._path = u),
      (this._key = c);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const jp = (s, i) => {
  if (ni(i)) return { success: !0, data: i.value };
  if (!s.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const l = new Qe(s.common.issues);
      return (this._error = l), this._error;
    },
  };
};
function xt(s) {
  if (!s) return {};
  const {
    errorMap: i,
    invalid_type_error: l,
    required_error: u,
    description: c,
  } = s;
  if (i && (l || u))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return i
    ? { errorMap: i, description: c }
    : {
        errorMap: (d, m) => {
          var y, p;
          const { message: g } = s;
          return d.code === "invalid_enum_value"
            ? { message: g ?? m.defaultError }
            : typeof m.data > "u"
              ? {
                  message:
                    (y = g ?? u) !== null && y !== void 0 ? y : m.defaultError,
                }
              : d.code !== "invalid_type"
                ? { message: m.defaultError }
                : {
                    message:
                      (p = g ?? l) !== null && p !== void 0
                        ? p
                        : m.defaultError,
                  };
        },
        description: c,
      };
}
class Tt {
  get description() {
    return this._def.description;
  }
  _getType(i) {
    return Kn(i.data);
  }
  _getOrReturnCtx(i, l) {
    return (
      l || {
        common: i.parent.common,
        data: i.data,
        parsedType: Kn(i.data),
        schemaErrorMap: this._def.errorMap,
        path: i.path,
        parent: i.parent,
      }
    );
  }
  _processInputParams(i) {
    return {
      status: new Ee(),
      ctx: {
        common: i.parent.common,
        data: i.data,
        parsedType: Kn(i.data),
        schemaErrorMap: this._def.errorMap,
        path: i.path,
        parent: i.parent,
      },
    };
  }
  _parseSync(i) {
    const l = this._parse(i);
    if (pl(l)) throw new Error("Synchronous parse encountered promise.");
    return l;
  }
  _parseAsync(i) {
    const l = this._parse(i);
    return Promise.resolve(l);
  }
  parse(i, l) {
    const u = this.safeParse(i, l);
    if (u.success) return u.data;
    throw u.error;
  }
  safeParse(i, l) {
    var u;
    const c = {
        common: {
          issues: [],
          async: (u = l?.async) !== null && u !== void 0 ? u : !1,
          contextualErrorMap: l?.errorMap,
        },
        path: l?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: i,
        parsedType: Kn(i),
      },
      f = this._parseSync({ data: i, path: c.path, parent: c });
    return jp(c, f);
  }
  "~validate"(i) {
    var l, u;
    const c = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: i,
      parsedType: Kn(i),
    };
    if (!this["~standard"].async)
      try {
        const f = this._parseSync({ data: i, path: [], parent: c });
        return ni(f) ? { value: f.value } : { issues: c.common.issues };
      } catch (f) {
        !(
          (u =
            (l = f?.message) === null || l === void 0
              ? void 0
              : l.toLowerCase()) === null || u === void 0
        ) &&
          u.includes("encountered") &&
          (this["~standard"].async = !0),
          (c.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: i, path: [], parent: c }).then((f) =>
      ni(f) ? { value: f.value } : { issues: c.common.issues },
    );
  }
  async parseAsync(i, l) {
    const u = await this.safeParseAsync(i, l);
    if (u.success) return u.data;
    throw u.error;
  }
  async safeParseAsync(i, l) {
    const u = {
        common: { issues: [], contextualErrorMap: l?.errorMap, async: !0 },
        path: l?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: i,
        parsedType: Kn(i),
      },
      c = this._parse({ data: i, path: u.path, parent: u }),
      f = await (pl(c) ? c : Promise.resolve(c));
    return jp(u, f);
  }
  refine(i, l) {
    const u = (c) =>
      typeof l == "string" || typeof l > "u"
        ? { message: l }
        : typeof l == "function"
          ? l(c)
          : l;
    return this._refinement((c, f) => {
      const d = i(c),
        m = () => f.addIssue({ code: G.custom, ...u(c) });
      return typeof Promise < "u" && d instanceof Promise
        ? d.then((y) => (y ? !0 : (m(), !1)))
        : d
          ? !0
          : (m(), !1);
    });
  }
  refinement(i, l) {
    return this._refinement((u, c) =>
      i(u) ? !0 : (c.addIssue(typeof l == "function" ? l(u, c) : l), !1),
    );
  }
  _refinement(i) {
    return new mn({
      schema: this,
      typeName: yt.ZodEffects,
      effect: { type: "refinement", refinement: i },
    });
  }
  superRefine(i) {
    return this._refinement(i);
  }
  constructor(i) {
    (this.spa = this.safeParseAsync),
      (this._def = i),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (l) => this["~validate"](l),
      });
  }
  optional() {
    return An.create(this, this._def);
  }
  nullable() {
    return Ma.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return hn.create(this);
  }
  promise() {
    return ls.create(this, this._def);
  }
  or(i) {
    return bl.create([this, i], this._def);
  }
  and(i) {
    return _l.create(this, i, this._def);
  }
  transform(i) {
    return new mn({
      ...xt(this._def),
      schema: this,
      typeName: yt.ZodEffects,
      effect: { type: "transform", transform: i },
    });
  }
  default(i) {
    const l = typeof i == "function" ? i : () => i;
    return new Rl({
      ...xt(this._def),
      innerType: this,
      defaultValue: l,
      typeName: yt.ZodDefault,
    });
  }
  brand() {
    return new mf({ typeName: yt.ZodBranded, type: this, ...xt(this._def) });
  }
  catch(i) {
    const l = typeof i == "function" ? i : () => i;
    return new wl({
      ...xt(this._def),
      innerType: this,
      catchValue: l,
      typeName: yt.ZodCatch,
    });
  }
  describe(i) {
    const l = this.constructor;
    return new l({ ...this._def, description: i });
  }
  pipe(i) {
    return Ol.create(this, i);
  }
  readonly() {
    return Al.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const R_ = /^c[^\s-]{8,}$/i,
  w_ = /^[0-9a-z]+$/,
  A_ = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  M_ =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  O_ = /^[a-z0-9_-]{21}$/i,
  C_ = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  D_ =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  z_ =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  N_ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Jc;
const U_ =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  j_ =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  B_ =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  L_ =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  k_ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  H_ = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  gv =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  q_ = new RegExp(`^${gv}$`);
function bv(s) {
  let i = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    s.precision
      ? (i = `${i}\\.\\d{${s.precision}}`)
      : s.precision == null && (i = `${i}(\\.\\d+)?`),
    i
  );
}
function Z_(s) {
  return new RegExp(`^${bv(s)}$`);
}
function _v(s) {
  let i = `${gv}T${bv(s)}`;
  const l = [];
  return (
    l.push(s.local ? "Z?" : "Z"),
    s.offset && l.push("([+-]\\d{2}:?\\d{2})"),
    (i = `${i}(${l.join("|")})`),
    new RegExp(`^${i}$`)
  );
}
function V_(s, i) {
  return !!(
    ((i === "v4" || !i) && U_.test(s)) ||
    ((i === "v6" || !i) && B_.test(s))
  );
}
function Y_(s, i) {
  if (!C_.test(s)) return !1;
  try {
    const [l] = s.split("."),
      u = l
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(l.length + ((4 - (l.length % 4)) % 4), "="),
      c = JSON.parse(atob(u));
    return !(
      typeof c != "object" ||
      c === null ||
      !c.typ ||
      !c.alg ||
      (i && c.alg !== i)
    );
  } catch {
    return !1;
  }
}
function G_(s, i) {
  return !!(
    ((i === "v4" || !i) && j_.test(s)) ||
    ((i === "v6" || !i) && L_.test(s))
  );
}
class dn extends Tt {
  _parse(i) {
    if (
      (this._def.coerce && (i.data = String(i.data)),
      this._getType(i) !== nt.string)
    ) {
      const f = this._getOrReturnCtx(i);
      return (
        F(f, {
          code: G.invalid_type,
          expected: nt.string,
          received: f.parsedType,
        }),
        bt
      );
    }
    const u = new Ee();
    let c;
    for (const f of this._def.checks)
      if (f.kind === "min")
        i.data.length < f.value &&
          ((c = this._getOrReturnCtx(i, c)),
          F(c, {
            code: G.too_small,
            minimum: f.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "max")
        i.data.length > f.value &&
          ((c = this._getOrReturnCtx(i, c)),
          F(c, {
            code: G.too_big,
            maximum: f.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "length") {
        const d = i.data.length > f.value,
          m = i.data.length < f.value;
        (d || m) &&
          ((c = this._getOrReturnCtx(i, c)),
          d
            ? F(c, {
                code: G.too_big,
                maximum: f.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: f.message,
              })
            : m &&
              F(c, {
                code: G.too_small,
                minimum: f.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: f.message,
              }),
          u.dirty());
      } else if (f.kind === "email")
        z_.test(i.data) ||
          ((c = this._getOrReturnCtx(i, c)),
          F(c, {
            validation: "email",
            code: G.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "emoji")
        Jc || (Jc = new RegExp(N_, "u")),
          Jc.test(i.data) ||
            ((c = this._getOrReturnCtx(i, c)),
            F(c, {
              validation: "emoji",
              code: G.invalid_string,
              message: f.message,
            }),
            u.dirty());
      else if (f.kind === "uuid")
        M_.test(i.data) ||
          ((c = this._getOrReturnCtx(i, c)),
          F(c, {
            validation: "uuid",
            code: G.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "nanoid")
        O_.test(i.data) ||
          ((c = this._getOrReturnCtx(i, c)),
          F(c, {
            validation: "nanoid",
            code: G.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "cuid")
        R_.test(i.data) ||
          ((c = this._getOrReturnCtx(i, c)),
          F(c, {
            validation: "cuid",
            code: G.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "cuid2")
        w_.test(i.data) ||
          ((c = this._getOrReturnCtx(i, c)),
          F(c, {
            validation: "cuid2",
            code: G.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "ulid")
        A_.test(i.data) ||
          ((c = this._getOrReturnCtx(i, c)),
          F(c, {
            validation: "ulid",
            code: G.invalid_string,
            message: f.message,
          }),
          u.dirty());
      else if (f.kind === "url")
        try {
          new URL(i.data);
        } catch {
          (c = this._getOrReturnCtx(i, c)),
            F(c, {
              validation: "url",
              code: G.invalid_string,
              message: f.message,
            }),
            u.dirty();
        }
      else
        f.kind === "regex"
          ? ((f.regex.lastIndex = 0),
            f.regex.test(i.data) ||
              ((c = this._getOrReturnCtx(i, c)),
              F(c, {
                validation: "regex",
                code: G.invalid_string,
                message: f.message,
              }),
              u.dirty()))
          : f.kind === "trim"
            ? (i.data = i.data.trim())
            : f.kind === "includes"
              ? i.data.includes(f.value, f.position) ||
                ((c = this._getOrReturnCtx(i, c)),
                F(c, {
                  code: G.invalid_string,
                  validation: { includes: f.value, position: f.position },
                  message: f.message,
                }),
                u.dirty())
              : f.kind === "toLowerCase"
                ? (i.data = i.data.toLowerCase())
                : f.kind === "toUpperCase"
                  ? (i.data = i.data.toUpperCase())
                  : f.kind === "startsWith"
                    ? i.data.startsWith(f.value) ||
                      ((c = this._getOrReturnCtx(i, c)),
                      F(c, {
                        code: G.invalid_string,
                        validation: { startsWith: f.value },
                        message: f.message,
                      }),
                      u.dirty())
                    : f.kind === "endsWith"
                      ? i.data.endsWith(f.value) ||
                        ((c = this._getOrReturnCtx(i, c)),
                        F(c, {
                          code: G.invalid_string,
                          validation: { endsWith: f.value },
                          message: f.message,
                        }),
                        u.dirty())
                      : f.kind === "datetime"
                        ? _v(f).test(i.data) ||
                          ((c = this._getOrReturnCtx(i, c)),
                          F(c, {
                            code: G.invalid_string,
                            validation: "datetime",
                            message: f.message,
                          }),
                          u.dirty())
                        : f.kind === "date"
                          ? q_.test(i.data) ||
                            ((c = this._getOrReturnCtx(i, c)),
                            F(c, {
                              code: G.invalid_string,
                              validation: "date",
                              message: f.message,
                            }),
                            u.dirty())
                          : f.kind === "time"
                            ? Z_(f).test(i.data) ||
                              ((c = this._getOrReturnCtx(i, c)),
                              F(c, {
                                code: G.invalid_string,
                                validation: "time",
                                message: f.message,
                              }),
                              u.dirty())
                            : f.kind === "duration"
                              ? D_.test(i.data) ||
                                ((c = this._getOrReturnCtx(i, c)),
                                F(c, {
                                  validation: "duration",
                                  code: G.invalid_string,
                                  message: f.message,
                                }),
                                u.dirty())
                              : f.kind === "ip"
                                ? V_(i.data, f.version) ||
                                  ((c = this._getOrReturnCtx(i, c)),
                                  F(c, {
                                    validation: "ip",
                                    code: G.invalid_string,
                                    message: f.message,
                                  }),
                                  u.dirty())
                                : f.kind === "jwt"
                                  ? Y_(i.data, f.alg) ||
                                    ((c = this._getOrReturnCtx(i, c)),
                                    F(c, {
                                      validation: "jwt",
                                      code: G.invalid_string,
                                      message: f.message,
                                    }),
                                    u.dirty())
                                  : f.kind === "cidr"
                                    ? G_(i.data, f.version) ||
                                      ((c = this._getOrReturnCtx(i, c)),
                                      F(c, {
                                        validation: "cidr",
                                        code: G.invalid_string,
                                        message: f.message,
                                      }),
                                      u.dirty())
                                    : f.kind === "base64"
                                      ? k_.test(i.data) ||
                                        ((c = this._getOrReturnCtx(i, c)),
                                        F(c, {
                                          validation: "base64",
                                          code: G.invalid_string,
                                          message: f.message,
                                        }),
                                        u.dirty())
                                      : f.kind === "base64url"
                                        ? H_.test(i.data) ||
                                          ((c = this._getOrReturnCtx(i, c)),
                                          F(c, {
                                            validation: "base64url",
                                            code: G.invalid_string,
                                            message: f.message,
                                          }),
                                          u.dirty())
                                        : zt.assertNever(f);
    return { status: u.value, value: i.data };
  }
  _regex(i, l, u) {
    return this.refinement((c) => i.test(c), {
      validation: l,
      code: G.invalid_string,
      ...ot.errToObj(u),
    });
  }
  _addCheck(i) {
    return new dn({ ...this._def, checks: [...this._def.checks, i] });
  }
  email(i) {
    return this._addCheck({ kind: "email", ...ot.errToObj(i) });
  }
  url(i) {
    return this._addCheck({ kind: "url", ...ot.errToObj(i) });
  }
  emoji(i) {
    return this._addCheck({ kind: "emoji", ...ot.errToObj(i) });
  }
  uuid(i) {
    return this._addCheck({ kind: "uuid", ...ot.errToObj(i) });
  }
  nanoid(i) {
    return this._addCheck({ kind: "nanoid", ...ot.errToObj(i) });
  }
  cuid(i) {
    return this._addCheck({ kind: "cuid", ...ot.errToObj(i) });
  }
  cuid2(i) {
    return this._addCheck({ kind: "cuid2", ...ot.errToObj(i) });
  }
  ulid(i) {
    return this._addCheck({ kind: "ulid", ...ot.errToObj(i) });
  }
  base64(i) {
    return this._addCheck({ kind: "base64", ...ot.errToObj(i) });
  }
  base64url(i) {
    return this._addCheck({ kind: "base64url", ...ot.errToObj(i) });
  }
  jwt(i) {
    return this._addCheck({ kind: "jwt", ...ot.errToObj(i) });
  }
  ip(i) {
    return this._addCheck({ kind: "ip", ...ot.errToObj(i) });
  }
  cidr(i) {
    return this._addCheck({ kind: "cidr", ...ot.errToObj(i) });
  }
  datetime(i) {
    var l, u;
    return typeof i == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: i,
        })
      : this._addCheck({
          kind: "datetime",
          precision: typeof i?.precision > "u" ? null : i?.precision,
          offset: (l = i?.offset) !== null && l !== void 0 ? l : !1,
          local: (u = i?.local) !== null && u !== void 0 ? u : !1,
          ...ot.errToObj(i?.message),
        });
  }
  date(i) {
    return this._addCheck({ kind: "date", message: i });
  }
  time(i) {
    return typeof i == "string"
      ? this._addCheck({ kind: "time", precision: null, message: i })
      : this._addCheck({
          kind: "time",
          precision: typeof i?.precision > "u" ? null : i?.precision,
          ...ot.errToObj(i?.message),
        });
  }
  duration(i) {
    return this._addCheck({ kind: "duration", ...ot.errToObj(i) });
  }
  regex(i, l) {
    return this._addCheck({ kind: "regex", regex: i, ...ot.errToObj(l) });
  }
  includes(i, l) {
    return this._addCheck({
      kind: "includes",
      value: i,
      position: l?.position,
      ...ot.errToObj(l?.message),
    });
  }
  startsWith(i, l) {
    return this._addCheck({ kind: "startsWith", value: i, ...ot.errToObj(l) });
  }
  endsWith(i, l) {
    return this._addCheck({ kind: "endsWith", value: i, ...ot.errToObj(l) });
  }
  min(i, l) {
    return this._addCheck({ kind: "min", value: i, ...ot.errToObj(l) });
  }
  max(i, l) {
    return this._addCheck({ kind: "max", value: i, ...ot.errToObj(l) });
  }
  length(i, l) {
    return this._addCheck({ kind: "length", value: i, ...ot.errToObj(l) });
  }
  nonempty(i) {
    return this.min(1, ot.errToObj(i));
  }
  trim() {
    return new dn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new dn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new dn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((i) => i.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((i) => i.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((i) => i.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((i) => i.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((i) => i.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((i) => i.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((i) => i.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((i) => i.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((i) => i.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((i) => i.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((i) => i.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((i) => i.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((i) => i.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((i) => i.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((i) => i.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((i) => i.kind === "base64url");
  }
  get minLength() {
    let i = null;
    for (const l of this._def.checks)
      l.kind === "min" && (i === null || l.value > i) && (i = l.value);
    return i;
  }
  get maxLength() {
    let i = null;
    for (const l of this._def.checks)
      l.kind === "max" && (i === null || l.value < i) && (i = l.value);
    return i;
  }
}
dn.create = (s) => {
  var i;
  return new dn({
    checks: [],
    typeName: yt.ZodString,
    coerce: (i = s?.coerce) !== null && i !== void 0 ? i : !1,
    ...xt(s),
  });
};
function Q_(s, i) {
  const l = (s.toString().split(".")[1] || "").length,
    u = (i.toString().split(".")[1] || "").length,
    c = l > u ? l : u,
    f = parseInt(s.toFixed(c).replace(".", "")),
    d = parseInt(i.toFixed(c).replace(".", ""));
  return (f % d) / Math.pow(10, c);
}
class Ra extends Tt {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(i) {
    if (
      (this._def.coerce && (i.data = Number(i.data)),
      this._getType(i) !== nt.number)
    ) {
      const f = this._getOrReturnCtx(i);
      return (
        F(f, {
          code: G.invalid_type,
          expected: nt.number,
          received: f.parsedType,
        }),
        bt
      );
    }
    let u;
    const c = new Ee();
    for (const f of this._def.checks)
      f.kind === "int"
        ? zt.isInteger(i.data) ||
          ((u = this._getOrReturnCtx(i, u)),
          F(u, {
            code: G.invalid_type,
            expected: "integer",
            received: "float",
            message: f.message,
          }),
          c.dirty())
        : f.kind === "min"
          ? (f.inclusive ? i.data < f.value : i.data <= f.value) &&
            ((u = this._getOrReturnCtx(i, u)),
            F(u, {
              code: G.too_small,
              minimum: f.value,
              type: "number",
              inclusive: f.inclusive,
              exact: !1,
              message: f.message,
            }),
            c.dirty())
          : f.kind === "max"
            ? (f.inclusive ? i.data > f.value : i.data >= f.value) &&
              ((u = this._getOrReturnCtx(i, u)),
              F(u, {
                code: G.too_big,
                maximum: f.value,
                type: "number",
                inclusive: f.inclusive,
                exact: !1,
                message: f.message,
              }),
              c.dirty())
            : f.kind === "multipleOf"
              ? Q_(i.data, f.value) !== 0 &&
                ((u = this._getOrReturnCtx(i, u)),
                F(u, {
                  code: G.not_multiple_of,
                  multipleOf: f.value,
                  message: f.message,
                }),
                c.dirty())
              : f.kind === "finite"
                ? Number.isFinite(i.data) ||
                  ((u = this._getOrReturnCtx(i, u)),
                  F(u, { code: G.not_finite, message: f.message }),
                  c.dirty())
                : zt.assertNever(f);
    return { status: c.value, value: i.data };
  }
  gte(i, l) {
    return this.setLimit("min", i, !0, ot.toString(l));
  }
  gt(i, l) {
    return this.setLimit("min", i, !1, ot.toString(l));
  }
  lte(i, l) {
    return this.setLimit("max", i, !0, ot.toString(l));
  }
  lt(i, l) {
    return this.setLimit("max", i, !1, ot.toString(l));
  }
  setLimit(i, l, u, c) {
    return new Ra({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: i, value: l, inclusive: u, message: ot.toString(c) },
      ],
    });
  }
  _addCheck(i) {
    return new Ra({ ...this._def, checks: [...this._def.checks, i] });
  }
  int(i) {
    return this._addCheck({ kind: "int", message: ot.toString(i) });
  }
  positive(i) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ot.toString(i),
    });
  }
  negative(i) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ot.toString(i),
    });
  }
  nonpositive(i) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ot.toString(i),
    });
  }
  nonnegative(i) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ot.toString(i),
    });
  }
  multipleOf(i, l) {
    return this._addCheck({
      kind: "multipleOf",
      value: i,
      message: ot.toString(l),
    });
  }
  finite(i) {
    return this._addCheck({ kind: "finite", message: ot.toString(i) });
  }
  safe(i) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ot.toString(i),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ot.toString(i),
    });
  }
  get minValue() {
    let i = null;
    for (const l of this._def.checks)
      l.kind === "min" && (i === null || l.value > i) && (i = l.value);
    return i;
  }
  get maxValue() {
    let i = null;
    for (const l of this._def.checks)
      l.kind === "max" && (i === null || l.value < i) && (i = l.value);
    return i;
  }
  get isInt() {
    return !!this._def.checks.find(
      (i) =>
        i.kind === "int" || (i.kind === "multipleOf" && zt.isInteger(i.value)),
    );
  }
  get isFinite() {
    let i = null,
      l = null;
    for (const u of this._def.checks) {
      if (u.kind === "finite" || u.kind === "int" || u.kind === "multipleOf")
        return !0;
      u.kind === "min"
        ? (l === null || u.value > l) && (l = u.value)
        : u.kind === "max" && (i === null || u.value < i) && (i = u.value);
    }
    return Number.isFinite(l) && Number.isFinite(i);
  }
}
Ra.create = (s) =>
  new Ra({
    checks: [],
    typeName: yt.ZodNumber,
    coerce: s?.coerce || !1,
    ...xt(s),
  });
class wa extends Tt {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(i) {
    if (this._def.coerce)
      try {
        i.data = BigInt(i.data);
      } catch {
        return this._getInvalidInput(i);
      }
    if (this._getType(i) !== nt.bigint) return this._getInvalidInput(i);
    let u;
    const c = new Ee();
    for (const f of this._def.checks)
      f.kind === "min"
        ? (f.inclusive ? i.data < f.value : i.data <= f.value) &&
          ((u = this._getOrReturnCtx(i, u)),
          F(u, {
            code: G.too_small,
            type: "bigint",
            minimum: f.value,
            inclusive: f.inclusive,
            message: f.message,
          }),
          c.dirty())
        : f.kind === "max"
          ? (f.inclusive ? i.data > f.value : i.data >= f.value) &&
            ((u = this._getOrReturnCtx(i, u)),
            F(u, {
              code: G.too_big,
              type: "bigint",
              maximum: f.value,
              inclusive: f.inclusive,
              message: f.message,
            }),
            c.dirty())
          : f.kind === "multipleOf"
            ? i.data % f.value !== BigInt(0) &&
              ((u = this._getOrReturnCtx(i, u)),
              F(u, {
                code: G.not_multiple_of,
                multipleOf: f.value,
                message: f.message,
              }),
              c.dirty())
            : zt.assertNever(f);
    return { status: c.value, value: i.data };
  }
  _getInvalidInput(i) {
    const l = this._getOrReturnCtx(i);
    return (
      F(l, {
        code: G.invalid_type,
        expected: nt.bigint,
        received: l.parsedType,
      }),
      bt
    );
  }
  gte(i, l) {
    return this.setLimit("min", i, !0, ot.toString(l));
  }
  gt(i, l) {
    return this.setLimit("min", i, !1, ot.toString(l));
  }
  lte(i, l) {
    return this.setLimit("max", i, !0, ot.toString(l));
  }
  lt(i, l) {
    return this.setLimit("max", i, !1, ot.toString(l));
  }
  setLimit(i, l, u, c) {
    return new wa({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: i, value: l, inclusive: u, message: ot.toString(c) },
      ],
    });
  }
  _addCheck(i) {
    return new wa({ ...this._def, checks: [...this._def.checks, i] });
  }
  positive(i) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ot.toString(i),
    });
  }
  negative(i) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ot.toString(i),
    });
  }
  nonpositive(i) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ot.toString(i),
    });
  }
  nonnegative(i) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ot.toString(i),
    });
  }
  multipleOf(i, l) {
    return this._addCheck({
      kind: "multipleOf",
      value: i,
      message: ot.toString(l),
    });
  }
  get minValue() {
    let i = null;
    for (const l of this._def.checks)
      l.kind === "min" && (i === null || l.value > i) && (i = l.value);
    return i;
  }
  get maxValue() {
    let i = null;
    for (const l of this._def.checks)
      l.kind === "max" && (i === null || l.value < i) && (i = l.value);
    return i;
  }
}
wa.create = (s) => {
  var i;
  return new wa({
    checks: [],
    typeName: yt.ZodBigInt,
    coerce: (i = s?.coerce) !== null && i !== void 0 ? i : !1,
    ...xt(s),
  });
};
class vl extends Tt {
  _parse(i) {
    if (
      (this._def.coerce && (i.data = !!i.data), this._getType(i) !== nt.boolean)
    ) {
      const u = this._getOrReturnCtx(i);
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.boolean,
          received: u.parsedType,
        }),
        bt
      );
    }
    return Me(i.data);
  }
}
vl.create = (s) =>
  new vl({ typeName: yt.ZodBoolean, coerce: s?.coerce || !1, ...xt(s) });
class ai extends Tt {
  _parse(i) {
    if (
      (this._def.coerce && (i.data = new Date(i.data)),
      this._getType(i) !== nt.date)
    ) {
      const f = this._getOrReturnCtx(i);
      return (
        F(f, {
          code: G.invalid_type,
          expected: nt.date,
          received: f.parsedType,
        }),
        bt
      );
    }
    if (isNaN(i.data.getTime())) {
      const f = this._getOrReturnCtx(i);
      return F(f, { code: G.invalid_date }), bt;
    }
    const u = new Ee();
    let c;
    for (const f of this._def.checks)
      f.kind === "min"
        ? i.data.getTime() < f.value &&
          ((c = this._getOrReturnCtx(i, c)),
          F(c, {
            code: G.too_small,
            message: f.message,
            inclusive: !0,
            exact: !1,
            minimum: f.value,
            type: "date",
          }),
          u.dirty())
        : f.kind === "max"
          ? i.data.getTime() > f.value &&
            ((c = this._getOrReturnCtx(i, c)),
            F(c, {
              code: G.too_big,
              message: f.message,
              inclusive: !0,
              exact: !1,
              maximum: f.value,
              type: "date",
            }),
            u.dirty())
          : zt.assertNever(f);
    return { status: u.value, value: new Date(i.data.getTime()) };
  }
  _addCheck(i) {
    return new ai({ ...this._def, checks: [...this._def.checks, i] });
  }
  min(i, l) {
    return this._addCheck({
      kind: "min",
      value: i.getTime(),
      message: ot.toString(l),
    });
  }
  max(i, l) {
    return this._addCheck({
      kind: "max",
      value: i.getTime(),
      message: ot.toString(l),
    });
  }
  get minDate() {
    let i = null;
    for (const l of this._def.checks)
      l.kind === "min" && (i === null || l.value > i) && (i = l.value);
    return i != null ? new Date(i) : null;
  }
  get maxDate() {
    let i = null;
    for (const l of this._def.checks)
      l.kind === "max" && (i === null || l.value < i) && (i = l.value);
    return i != null ? new Date(i) : null;
  }
}
ai.create = (s) =>
  new ai({
    checks: [],
    coerce: s?.coerce || !1,
    typeName: yt.ZodDate,
    ...xt(s),
  });
class cu extends Tt {
  _parse(i) {
    if (this._getType(i) !== nt.symbol) {
      const u = this._getOrReturnCtx(i);
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.symbol,
          received: u.parsedType,
        }),
        bt
      );
    }
    return Me(i.data);
  }
}
cu.create = (s) => new cu({ typeName: yt.ZodSymbol, ...xt(s) });
class yl extends Tt {
  _parse(i) {
    if (this._getType(i) !== nt.undefined) {
      const u = this._getOrReturnCtx(i);
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.undefined,
          received: u.parsedType,
        }),
        bt
      );
    }
    return Me(i.data);
  }
}
yl.create = (s) => new yl({ typeName: yt.ZodUndefined, ...xt(s) });
class gl extends Tt {
  _parse(i) {
    if (this._getType(i) !== nt.null) {
      const u = this._getOrReturnCtx(i);
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.null,
          received: u.parsedType,
        }),
        bt
      );
    }
    return Me(i.data);
  }
}
gl.create = (s) => new gl({ typeName: yt.ZodNull, ...xt(s) });
class ss extends Tt {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(i) {
    return Me(i.data);
  }
}
ss.create = (s) => new ss({ typeName: yt.ZodAny, ...xt(s) });
class ei extends Tt {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(i) {
    return Me(i.data);
  }
}
ei.create = (s) => new ei({ typeName: yt.ZodUnknown, ...xt(s) });
class Pn extends Tt {
  _parse(i) {
    const l = this._getOrReturnCtx(i);
    return (
      F(l, {
        code: G.invalid_type,
        expected: nt.never,
        received: l.parsedType,
      }),
      bt
    );
  }
}
Pn.create = (s) => new Pn({ typeName: yt.ZodNever, ...xt(s) });
class fu extends Tt {
  _parse(i) {
    if (this._getType(i) !== nt.undefined) {
      const u = this._getOrReturnCtx(i);
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.void,
          received: u.parsedType,
        }),
        bt
      );
    }
    return Me(i.data);
  }
}
fu.create = (s) => new fu({ typeName: yt.ZodVoid, ...xt(s) });
class hn extends Tt {
  _parse(i) {
    const { ctx: l, status: u } = this._processInputParams(i),
      c = this._def;
    if (l.parsedType !== nt.array)
      return (
        F(l, {
          code: G.invalid_type,
          expected: nt.array,
          received: l.parsedType,
        }),
        bt
      );
    if (c.exactLength !== null) {
      const d = l.data.length > c.exactLength.value,
        m = l.data.length < c.exactLength.value;
      (d || m) &&
        (F(l, {
          code: d ? G.too_big : G.too_small,
          minimum: m ? c.exactLength.value : void 0,
          maximum: d ? c.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: c.exactLength.message,
        }),
        u.dirty());
    }
    if (
      (c.minLength !== null &&
        l.data.length < c.minLength.value &&
        (F(l, {
          code: G.too_small,
          minimum: c.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: c.minLength.message,
        }),
        u.dirty()),
      c.maxLength !== null &&
        l.data.length > c.maxLength.value &&
        (F(l, {
          code: G.too_big,
          maximum: c.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: c.maxLength.message,
        }),
        u.dirty()),
      l.common.async)
    )
      return Promise.all(
        [...l.data].map((d, m) => c.type._parseAsync(new Mn(l, d, l.path, m))),
      ).then((d) => Ee.mergeArray(u, d));
    const f = [...l.data].map((d, m) =>
      c.type._parseSync(new Mn(l, d, l.path, m)),
    );
    return Ee.mergeArray(u, f);
  }
  get element() {
    return this._def.type;
  }
  min(i, l) {
    return new hn({
      ...this._def,
      minLength: { value: i, message: ot.toString(l) },
    });
  }
  max(i, l) {
    return new hn({
      ...this._def,
      maxLength: { value: i, message: ot.toString(l) },
    });
  }
  length(i, l) {
    return new hn({
      ...this._def,
      exactLength: { value: i, message: ot.toString(l) },
    });
  }
  nonempty(i) {
    return this.min(1, i);
  }
}
hn.create = (s, i) =>
  new hn({
    type: s,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: yt.ZodArray,
    ...xt(i),
  });
function Ji(s) {
  if (s instanceof Kt) {
    const i = {};
    for (const l in s.shape) {
      const u = s.shape[l];
      i[l] = An.create(Ji(u));
    }
    return new Kt({ ...s._def, shape: () => i });
  } else
    return s instanceof hn
      ? new hn({ ...s._def, type: Ji(s.element) })
      : s instanceof An
        ? An.create(Ji(s.unwrap()))
        : s instanceof Ma
          ? Ma.create(Ji(s.unwrap()))
          : s instanceof On
            ? On.create(s.items.map((i) => Ji(i)))
            : s;
}
class Kt extends Tt {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const i = this._def.shape(),
      l = zt.objectKeys(i);
    return (this._cached = { shape: i, keys: l });
  }
  _parse(i) {
    if (this._getType(i) !== nt.object) {
      const p = this._getOrReturnCtx(i);
      return (
        F(p, {
          code: G.invalid_type,
          expected: nt.object,
          received: p.parsedType,
        }),
        bt
      );
    }
    const { status: u, ctx: c } = this._processInputParams(i),
      { shape: f, keys: d } = this._getCached(),
      m = [];
    if (
      !(this._def.catchall instanceof Pn && this._def.unknownKeys === "strip")
    )
      for (const p in c.data) d.includes(p) || m.push(p);
    const y = [];
    for (const p of d) {
      const g = f[p],
        v = c.data[p];
      y.push({
        key: { status: "valid", value: p },
        value: g._parse(new Mn(c, v, c.path, p)),
        alwaysSet: p in c.data,
      });
    }
    if (this._def.catchall instanceof Pn) {
      const p = this._def.unknownKeys;
      if (p === "passthrough")
        for (const g of m)
          y.push({
            key: { status: "valid", value: g },
            value: { status: "valid", value: c.data[g] },
          });
      else if (p === "strict")
        m.length > 0 &&
          (F(c, { code: G.unrecognized_keys, keys: m }), u.dirty());
      else if (p !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const p = this._def.catchall;
      for (const g of m) {
        const v = c.data[g];
        y.push({
          key: { status: "valid", value: g },
          value: p._parse(new Mn(c, v, c.path, g)),
          alwaysSet: g in c.data,
        });
      }
    }
    return c.common.async
      ? Promise.resolve()
          .then(async () => {
            const p = [];
            for (const g of y) {
              const v = await g.key,
                w = await g.value;
              p.push({ key: v, value: w, alwaysSet: g.alwaysSet });
            }
            return p;
          })
          .then((p) => Ee.mergeObjectSync(u, p))
      : Ee.mergeObjectSync(u, y);
  }
  get shape() {
    return this._def.shape();
  }
  strict(i) {
    return (
      ot.errToObj,
      new Kt({
        ...this._def,
        unknownKeys: "strict",
        ...(i !== void 0
          ? {
              errorMap: (l, u) => {
                var c, f, d, m;
                const y =
                  (d =
                    (f = (c = this._def).errorMap) === null || f === void 0
                      ? void 0
                      : f.call(c, l, u).message) !== null && d !== void 0
                    ? d
                    : u.defaultError;
                return l.code === "unrecognized_keys"
                  ? {
                      message:
                        (m = ot.errToObj(i).message) !== null && m !== void 0
                          ? m
                          : y,
                    }
                  : { message: y };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Kt({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Kt({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(i) {
    return new Kt({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...i }),
    });
  }
  merge(i) {
    return new Kt({
      unknownKeys: i._def.unknownKeys,
      catchall: i._def.catchall,
      shape: () => ({ ...this._def.shape(), ...i._def.shape() }),
      typeName: yt.ZodObject,
    });
  }
  setKey(i, l) {
    return this.augment({ [i]: l });
  }
  catchall(i) {
    return new Kt({ ...this._def, catchall: i });
  }
  pick(i) {
    const l = {};
    return (
      zt.objectKeys(i).forEach((u) => {
        i[u] && this.shape[u] && (l[u] = this.shape[u]);
      }),
      new Kt({ ...this._def, shape: () => l })
    );
  }
  omit(i) {
    const l = {};
    return (
      zt.objectKeys(this.shape).forEach((u) => {
        i[u] || (l[u] = this.shape[u]);
      }),
      new Kt({ ...this._def, shape: () => l })
    );
  }
  deepPartial() {
    return Ji(this);
  }
  partial(i) {
    const l = {};
    return (
      zt.objectKeys(this.shape).forEach((u) => {
        const c = this.shape[u];
        i && !i[u] ? (l[u] = c) : (l[u] = c.optional());
      }),
      new Kt({ ...this._def, shape: () => l })
    );
  }
  required(i) {
    const l = {};
    return (
      zt.objectKeys(this.shape).forEach((u) => {
        if (i && !i[u]) l[u] = this.shape[u];
        else {
          let f = this.shape[u];
          for (; f instanceof An; ) f = f._def.innerType;
          l[u] = f;
        }
      }),
      new Kt({ ...this._def, shape: () => l })
    );
  }
  keyof() {
    return Sv(zt.objectKeys(this.shape));
  }
}
Kt.create = (s, i) =>
  new Kt({
    shape: () => s,
    unknownKeys: "strip",
    catchall: Pn.create(),
    typeName: yt.ZodObject,
    ...xt(i),
  });
Kt.strictCreate = (s, i) =>
  new Kt({
    shape: () => s,
    unknownKeys: "strict",
    catchall: Pn.create(),
    typeName: yt.ZodObject,
    ...xt(i),
  });
Kt.lazycreate = (s, i) =>
  new Kt({
    shape: s,
    unknownKeys: "strip",
    catchall: Pn.create(),
    typeName: yt.ZodObject,
    ...xt(i),
  });
class bl extends Tt {
  _parse(i) {
    const { ctx: l } = this._processInputParams(i),
      u = this._def.options;
    function c(f) {
      for (const m of f) if (m.result.status === "valid") return m.result;
      for (const m of f)
        if (m.result.status === "dirty")
          return l.common.issues.push(...m.ctx.common.issues), m.result;
      const d = f.map((m) => new Qe(m.ctx.common.issues));
      return F(l, { code: G.invalid_union, unionErrors: d }), bt;
    }
    if (l.common.async)
      return Promise.all(
        u.map(async (f) => {
          const d = { ...l, common: { ...l.common, issues: [] }, parent: null };
          return {
            result: await f._parseAsync({
              data: l.data,
              path: l.path,
              parent: d,
            }),
            ctx: d,
          };
        }),
      ).then(c);
    {
      let f;
      const d = [];
      for (const y of u) {
        const p = { ...l, common: { ...l.common, issues: [] }, parent: null },
          g = y._parseSync({ data: l.data, path: l.path, parent: p });
        if (g.status === "valid") return g;
        g.status === "dirty" && !f && (f = { result: g, ctx: p }),
          p.common.issues.length && d.push(p.common.issues);
      }
      if (f) return l.common.issues.push(...f.ctx.common.issues), f.result;
      const m = d.map((y) => new Qe(y));
      return F(l, { code: G.invalid_union, unionErrors: m }), bt;
    }
  }
  get options() {
    return this._def.options;
  }
}
bl.create = (s, i) => new bl({ options: s, typeName: yt.ZodUnion, ...xt(i) });
const Xn = (s) =>
  s instanceof xl
    ? Xn(s.schema)
    : s instanceof mn
      ? Xn(s.innerType())
      : s instanceof El
        ? [s.value]
        : s instanceof Aa
          ? s.options
          : s instanceof Tl
            ? zt.objectValues(s.enum)
            : s instanceof Rl
              ? Xn(s._def.innerType)
              : s instanceof yl
                ? [void 0]
                : s instanceof gl
                  ? [null]
                  : s instanceof An
                    ? [void 0, ...Xn(s.unwrap())]
                    : s instanceof Ma
                      ? [null, ...Xn(s.unwrap())]
                      : s instanceof mf || s instanceof Al
                        ? Xn(s.unwrap())
                        : s instanceof wl
                          ? Xn(s._def.innerType)
                          : [];
class bu extends Tt {
  _parse(i) {
    const { ctx: l } = this._processInputParams(i);
    if (l.parsedType !== nt.object)
      return (
        F(l, {
          code: G.invalid_type,
          expected: nt.object,
          received: l.parsedType,
        }),
        bt
      );
    const u = this.discriminator,
      c = l.data[u],
      f = this.optionsMap.get(c);
    return f
      ? l.common.async
        ? f._parseAsync({ data: l.data, path: l.path, parent: l })
        : f._parseSync({ data: l.data, path: l.path, parent: l })
      : (F(l, {
          code: G.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [u],
        }),
        bt);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(i, l, u) {
    const c = new Map();
    for (const f of l) {
      const d = Xn(f.shape[i]);
      if (!d.length)
        throw new Error(
          `A discriminator value for key \`${i}\` could not be extracted from all schema options`,
        );
      for (const m of d) {
        if (c.has(m))
          throw new Error(
            `Discriminator property ${String(i)} has duplicate value ${String(m)}`,
          );
        c.set(m, f);
      }
    }
    return new bu({
      typeName: yt.ZodDiscriminatedUnion,
      discriminator: i,
      options: l,
      optionsMap: c,
      ...xt(u),
    });
  }
}
function lf(s, i) {
  const l = Kn(s),
    u = Kn(i);
  if (s === i) return { valid: !0, data: s };
  if (l === nt.object && u === nt.object) {
    const c = zt.objectKeys(i),
      f = zt.objectKeys(s).filter((m) => c.indexOf(m) !== -1),
      d = { ...s, ...i };
    for (const m of f) {
      const y = lf(s[m], i[m]);
      if (!y.valid) return { valid: !1 };
      d[m] = y.data;
    }
    return { valid: !0, data: d };
  } else if (l === nt.array && u === nt.array) {
    if (s.length !== i.length) return { valid: !1 };
    const c = [];
    for (let f = 0; f < s.length; f++) {
      const d = s[f],
        m = i[f],
        y = lf(d, m);
      if (!y.valid) return { valid: !1 };
      c.push(y.data);
    }
    return { valid: !0, data: c };
  } else
    return l === nt.date && u === nt.date && +s == +i
      ? { valid: !0, data: s }
      : { valid: !1 };
}
class _l extends Tt {
  _parse(i) {
    const { status: l, ctx: u } = this._processInputParams(i),
      c = (f, d) => {
        if (af(f) || af(d)) return bt;
        const m = lf(f.value, d.value);
        return m.valid
          ? ((sf(f) || sf(d)) && l.dirty(), { status: l.value, value: m.data })
          : (F(u, { code: G.invalid_intersection_types }), bt);
      };
    return u.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: u.data, path: u.path, parent: u }),
          this._def.right._parseAsync({
            data: u.data,
            path: u.path,
            parent: u,
          }),
        ]).then(([f, d]) => c(f, d))
      : c(
          this._def.left._parseSync({ data: u.data, path: u.path, parent: u }),
          this._def.right._parseSync({ data: u.data, path: u.path, parent: u }),
        );
  }
}
_l.create = (s, i, l) =>
  new _l({ left: s, right: i, typeName: yt.ZodIntersection, ...xt(l) });
class On extends Tt {
  _parse(i) {
    const { status: l, ctx: u } = this._processInputParams(i);
    if (u.parsedType !== nt.array)
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.array,
          received: u.parsedType,
        }),
        bt
      );
    if (u.data.length < this._def.items.length)
      return (
        F(u, {
          code: G.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        bt
      );
    !this._def.rest &&
      u.data.length > this._def.items.length &&
      (F(u, {
        code: G.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      l.dirty());
    const f = [...u.data]
      .map((d, m) => {
        const y = this._def.items[m] || this._def.rest;
        return y ? y._parse(new Mn(u, d, u.path, m)) : null;
      })
      .filter((d) => !!d);
    return u.common.async
      ? Promise.all(f).then((d) => Ee.mergeArray(l, d))
      : Ee.mergeArray(l, f);
  }
  get items() {
    return this._def.items;
  }
  rest(i) {
    return new On({ ...this._def, rest: i });
  }
}
On.create = (s, i) => {
  if (!Array.isArray(s))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new On({ items: s, typeName: yt.ZodTuple, rest: null, ...xt(i) });
};
class Sl extends Tt {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(i) {
    const { status: l, ctx: u } = this._processInputParams(i);
    if (u.parsedType !== nt.object)
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.object,
          received: u.parsedType,
        }),
        bt
      );
    const c = [],
      f = this._def.keyType,
      d = this._def.valueType;
    for (const m in u.data)
      c.push({
        key: f._parse(new Mn(u, m, u.path, m)),
        value: d._parse(new Mn(u, u.data[m], u.path, m)),
        alwaysSet: m in u.data,
      });
    return u.common.async
      ? Ee.mergeObjectAsync(l, c)
      : Ee.mergeObjectSync(l, c);
  }
  get element() {
    return this._def.valueType;
  }
  static create(i, l, u) {
    return l instanceof Tt
      ? new Sl({ keyType: i, valueType: l, typeName: yt.ZodRecord, ...xt(u) })
      : new Sl({
          keyType: dn.create(),
          valueType: i,
          typeName: yt.ZodRecord,
          ...xt(l),
        });
  }
}
class du extends Tt {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(i) {
    const { status: l, ctx: u } = this._processInputParams(i);
    if (u.parsedType !== nt.map)
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.map,
          received: u.parsedType,
        }),
        bt
      );
    const c = this._def.keyType,
      f = this._def.valueType,
      d = [...u.data.entries()].map(([m, y], p) => ({
        key: c._parse(new Mn(u, m, u.path, [p, "key"])),
        value: f._parse(new Mn(u, y, u.path, [p, "value"])),
      }));
    if (u.common.async) {
      const m = new Map();
      return Promise.resolve().then(async () => {
        for (const y of d) {
          const p = await y.key,
            g = await y.value;
          if (p.status === "aborted" || g.status === "aborted") return bt;
          (p.status === "dirty" || g.status === "dirty") && l.dirty(),
            m.set(p.value, g.value);
        }
        return { status: l.value, value: m };
      });
    } else {
      const m = new Map();
      for (const y of d) {
        const p = y.key,
          g = y.value;
        if (p.status === "aborted" || g.status === "aborted") return bt;
        (p.status === "dirty" || g.status === "dirty") && l.dirty(),
          m.set(p.value, g.value);
      }
      return { status: l.value, value: m };
    }
  }
}
du.create = (s, i, l) =>
  new du({ valueType: i, keyType: s, typeName: yt.ZodMap, ...xt(l) });
class ii extends Tt {
  _parse(i) {
    const { status: l, ctx: u } = this._processInputParams(i);
    if (u.parsedType !== nt.set)
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.set,
          received: u.parsedType,
        }),
        bt
      );
    const c = this._def;
    c.minSize !== null &&
      u.data.size < c.minSize.value &&
      (F(u, {
        code: G.too_small,
        minimum: c.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: c.minSize.message,
      }),
      l.dirty()),
      c.maxSize !== null &&
        u.data.size > c.maxSize.value &&
        (F(u, {
          code: G.too_big,
          maximum: c.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: c.maxSize.message,
        }),
        l.dirty());
    const f = this._def.valueType;
    function d(y) {
      const p = new Set();
      for (const g of y) {
        if (g.status === "aborted") return bt;
        g.status === "dirty" && l.dirty(), p.add(g.value);
      }
      return { status: l.value, value: p };
    }
    const m = [...u.data.values()].map((y, p) =>
      f._parse(new Mn(u, y, u.path, p)),
    );
    return u.common.async ? Promise.all(m).then((y) => d(y)) : d(m);
  }
  min(i, l) {
    return new ii({
      ...this._def,
      minSize: { value: i, message: ot.toString(l) },
    });
  }
  max(i, l) {
    return new ii({
      ...this._def,
      maxSize: { value: i, message: ot.toString(l) },
    });
  }
  size(i, l) {
    return this.min(i, l).max(i, l);
  }
  nonempty(i) {
    return this.min(1, i);
  }
}
ii.create = (s, i) =>
  new ii({
    valueType: s,
    minSize: null,
    maxSize: null,
    typeName: yt.ZodSet,
    ...xt(i),
  });
class ns extends Tt {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(i) {
    const { ctx: l } = this._processInputParams(i);
    if (l.parsedType !== nt.function)
      return (
        F(l, {
          code: G.invalid_type,
          expected: nt.function,
          received: l.parsedType,
        }),
        bt
      );
    function u(m, y) {
      return uu({
        data: m,
        path: l.path,
        errorMaps: [
          l.common.contextualErrorMap,
          l.schemaErrorMap,
          ru(),
          is,
        ].filter((p) => !!p),
        issueData: { code: G.invalid_arguments, argumentsError: y },
      });
    }
    function c(m, y) {
      return uu({
        data: m,
        path: l.path,
        errorMaps: [
          l.common.contextualErrorMap,
          l.schemaErrorMap,
          ru(),
          is,
        ].filter((p) => !!p),
        issueData: { code: G.invalid_return_type, returnTypeError: y },
      });
    }
    const f = { errorMap: l.common.contextualErrorMap },
      d = l.data;
    if (this._def.returns instanceof ls) {
      const m = this;
      return Me(async function (...y) {
        const p = new Qe([]),
          g = await m._def.args.parseAsync(y, f).catch((z) => {
            throw (p.addIssue(u(y, z)), p);
          }),
          v = await Reflect.apply(d, this, g);
        return await m._def.returns._def.type.parseAsync(v, f).catch((z) => {
          throw (p.addIssue(c(v, z)), p);
        });
      });
    } else {
      const m = this;
      return Me(function (...y) {
        const p = m._def.args.safeParse(y, f);
        if (!p.success) throw new Qe([u(y, p.error)]);
        const g = Reflect.apply(d, this, p.data),
          v = m._def.returns.safeParse(g, f);
        if (!v.success) throw new Qe([c(g, v.error)]);
        return v.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...i) {
    return new ns({ ...this._def, args: On.create(i).rest(ei.create()) });
  }
  returns(i) {
    return new ns({ ...this._def, returns: i });
  }
  implement(i) {
    return this.parse(i);
  }
  strictImplement(i) {
    return this.parse(i);
  }
  static create(i, l, u) {
    return new ns({
      args: i || On.create([]).rest(ei.create()),
      returns: l || ei.create(),
      typeName: yt.ZodFunction,
      ...xt(u),
    });
  }
}
class xl extends Tt {
  get schema() {
    return this._def.getter();
  }
  _parse(i) {
    const { ctx: l } = this._processInputParams(i);
    return this._def.getter()._parse({ data: l.data, path: l.path, parent: l });
  }
}
xl.create = (s, i) => new xl({ getter: s, typeName: yt.ZodLazy, ...xt(i) });
class El extends Tt {
  _parse(i) {
    if (i.data !== this._def.value) {
      const l = this._getOrReturnCtx(i);
      return (
        F(l, {
          received: l.data,
          code: G.invalid_literal,
          expected: this._def.value,
        }),
        bt
      );
    }
    return { status: "valid", value: i.data };
  }
  get value() {
    return this._def.value;
  }
}
El.create = (s, i) => new El({ value: s, typeName: yt.ZodLiteral, ...xt(i) });
function Sv(s, i) {
  return new Aa({ values: s, typeName: yt.ZodEnum, ...xt(i) });
}
class Aa extends Tt {
  constructor() {
    super(...arguments), ul.set(this, void 0);
  }
  _parse(i) {
    if (typeof i.data != "string") {
      const l = this._getOrReturnCtx(i),
        u = this._def.values;
      return (
        F(l, {
          expected: zt.joinValues(u),
          received: l.parsedType,
          code: G.invalid_type,
        }),
        bt
      );
    }
    if (
      (ou(this, ul) || yv(this, ul, new Set(this._def.values)),
      !ou(this, ul).has(i.data))
    ) {
      const l = this._getOrReturnCtx(i),
        u = this._def.values;
      return (
        F(l, { received: l.data, code: G.invalid_enum_value, options: u }), bt
      );
    }
    return Me(i.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const i = {};
    for (const l of this._def.values) i[l] = l;
    return i;
  }
  get Values() {
    const i = {};
    for (const l of this._def.values) i[l] = l;
    return i;
  }
  get Enum() {
    const i = {};
    for (const l of this._def.values) i[l] = l;
    return i;
  }
  extract(i, l = this._def) {
    return Aa.create(i, { ...this._def, ...l });
  }
  exclude(i, l = this._def) {
    return Aa.create(
      this.options.filter((u) => !i.includes(u)),
      { ...this._def, ...l },
    );
  }
}
ul = new WeakMap();
Aa.create = Sv;
class Tl extends Tt {
  constructor() {
    super(...arguments), ol.set(this, void 0);
  }
  _parse(i) {
    const l = zt.getValidEnumValues(this._def.values),
      u = this._getOrReturnCtx(i);
    if (u.parsedType !== nt.string && u.parsedType !== nt.number) {
      const c = zt.objectValues(l);
      return (
        F(u, {
          expected: zt.joinValues(c),
          received: u.parsedType,
          code: G.invalid_type,
        }),
        bt
      );
    }
    if (
      (ou(this, ol) ||
        yv(this, ol, new Set(zt.getValidEnumValues(this._def.values))),
      !ou(this, ol).has(i.data))
    ) {
      const c = zt.objectValues(l);
      return (
        F(u, { received: u.data, code: G.invalid_enum_value, options: c }), bt
      );
    }
    return Me(i.data);
  }
  get enum() {
    return this._def.values;
  }
}
ol = new WeakMap();
Tl.create = (s, i) =>
  new Tl({ values: s, typeName: yt.ZodNativeEnum, ...xt(i) });
class ls extends Tt {
  unwrap() {
    return this._def.type;
  }
  _parse(i) {
    const { ctx: l } = this._processInputParams(i);
    if (l.parsedType !== nt.promise && l.common.async === !1)
      return (
        F(l, {
          code: G.invalid_type,
          expected: nt.promise,
          received: l.parsedType,
        }),
        bt
      );
    const u = l.parsedType === nt.promise ? l.data : Promise.resolve(l.data);
    return Me(
      u.then((c) =>
        this._def.type.parseAsync(c, {
          path: l.path,
          errorMap: l.common.contextualErrorMap,
        }),
      ),
    );
  }
}
ls.create = (s, i) => new ls({ type: s, typeName: yt.ZodPromise, ...xt(i) });
class mn extends Tt {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === yt.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(i) {
    const { status: l, ctx: u } = this._processInputParams(i),
      c = this._def.effect || null,
      f = {
        addIssue: (d) => {
          F(u, d), d.fatal ? l.abort() : l.dirty();
        },
        get path() {
          return u.path;
        },
      };
    if (((f.addIssue = f.addIssue.bind(f)), c.type === "preprocess")) {
      const d = c.transform(u.data, f);
      if (u.common.async)
        return Promise.resolve(d).then(async (m) => {
          if (l.value === "aborted") return bt;
          const y = await this._def.schema._parseAsync({
            data: m,
            path: u.path,
            parent: u,
          });
          return y.status === "aborted"
            ? bt
            : y.status === "dirty" || l.value === "dirty"
              ? Wi(y.value)
              : y;
        });
      {
        if (l.value === "aborted") return bt;
        const m = this._def.schema._parseSync({
          data: d,
          path: u.path,
          parent: u,
        });
        return m.status === "aborted"
          ? bt
          : m.status === "dirty" || l.value === "dirty"
            ? Wi(m.value)
            : m;
      }
    }
    if (c.type === "refinement") {
      const d = (m) => {
        const y = c.refinement(m, f);
        if (u.common.async) return Promise.resolve(y);
        if (y instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return m;
      };
      if (u.common.async === !1) {
        const m = this._def.schema._parseSync({
          data: u.data,
          path: u.path,
          parent: u,
        });
        return m.status === "aborted"
          ? bt
          : (m.status === "dirty" && l.dirty(),
            d(m.value),
            { status: l.value, value: m.value });
      } else
        return this._def.schema
          ._parseAsync({ data: u.data, path: u.path, parent: u })
          .then((m) =>
            m.status === "aborted"
              ? bt
              : (m.status === "dirty" && l.dirty(),
                d(m.value).then(() => ({ status: l.value, value: m.value }))),
          );
    }
    if (c.type === "transform")
      if (u.common.async === !1) {
        const d = this._def.schema._parseSync({
          data: u.data,
          path: u.path,
          parent: u,
        });
        if (!ni(d)) return d;
        const m = c.transform(d.value, f);
        if (m instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: l.value, value: m };
      } else
        return this._def.schema
          ._parseAsync({ data: u.data, path: u.path, parent: u })
          .then((d) =>
            ni(d)
              ? Promise.resolve(c.transform(d.value, f)).then((m) => ({
                  status: l.value,
                  value: m,
                }))
              : d,
          );
    zt.assertNever(c);
  }
}
mn.create = (s, i, l) =>
  new mn({ schema: s, typeName: yt.ZodEffects, effect: i, ...xt(l) });
mn.createWithPreprocess = (s, i, l) =>
  new mn({
    schema: i,
    effect: { type: "preprocess", transform: s },
    typeName: yt.ZodEffects,
    ...xt(l),
  });
class An extends Tt {
  _parse(i) {
    return this._getType(i) === nt.undefined
      ? Me(void 0)
      : this._def.innerType._parse(i);
  }
  unwrap() {
    return this._def.innerType;
  }
}
An.create = (s, i) =>
  new An({ innerType: s, typeName: yt.ZodOptional, ...xt(i) });
class Ma extends Tt {
  _parse(i) {
    return this._getType(i) === nt.null
      ? Me(null)
      : this._def.innerType._parse(i);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ma.create = (s, i) =>
  new Ma({ innerType: s, typeName: yt.ZodNullable, ...xt(i) });
class Rl extends Tt {
  _parse(i) {
    const { ctx: l } = this._processInputParams(i);
    let u = l.data;
    return (
      l.parsedType === nt.undefined && (u = this._def.defaultValue()),
      this._def.innerType._parse({ data: u, path: l.path, parent: l })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Rl.create = (s, i) =>
  new Rl({
    innerType: s,
    typeName: yt.ZodDefault,
    defaultValue: typeof i.default == "function" ? i.default : () => i.default,
    ...xt(i),
  });
class wl extends Tt {
  _parse(i) {
    const { ctx: l } = this._processInputParams(i),
      u = { ...l, common: { ...l.common, issues: [] } },
      c = this._def.innerType._parse({
        data: u.data,
        path: u.path,
        parent: { ...u },
      });
    return pl(c)
      ? c.then((f) => ({
          status: "valid",
          value:
            f.status === "valid"
              ? f.value
              : this._def.catchValue({
                  get error() {
                    return new Qe(u.common.issues);
                  },
                  input: u.data,
                }),
        }))
      : {
          status: "valid",
          value:
            c.status === "valid"
              ? c.value
              : this._def.catchValue({
                  get error() {
                    return new Qe(u.common.issues);
                  },
                  input: u.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
wl.create = (s, i) =>
  new wl({
    innerType: s,
    typeName: yt.ZodCatch,
    catchValue: typeof i.catch == "function" ? i.catch : () => i.catch,
    ...xt(i),
  });
class hu extends Tt {
  _parse(i) {
    if (this._getType(i) !== nt.nan) {
      const u = this._getOrReturnCtx(i);
      return (
        F(u, {
          code: G.invalid_type,
          expected: nt.nan,
          received: u.parsedType,
        }),
        bt
      );
    }
    return { status: "valid", value: i.data };
  }
}
hu.create = (s) => new hu({ typeName: yt.ZodNaN, ...xt(s) });
const X_ = Symbol("zod_brand");
class mf extends Tt {
  _parse(i) {
    const { ctx: l } = this._processInputParams(i),
      u = l.data;
    return this._def.type._parse({ data: u, path: l.path, parent: l });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ol extends Tt {
  _parse(i) {
    const { status: l, ctx: u } = this._processInputParams(i);
    if (u.common.async)
      return (async () => {
        const f = await this._def.in._parseAsync({
          data: u.data,
          path: u.path,
          parent: u,
        });
        return f.status === "aborted"
          ? bt
          : f.status === "dirty"
            ? (l.dirty(), Wi(f.value))
            : this._def.out._parseAsync({
                data: f.value,
                path: u.path,
                parent: u,
              });
      })();
    {
      const c = this._def.in._parseSync({
        data: u.data,
        path: u.path,
        parent: u,
      });
      return c.status === "aborted"
        ? bt
        : c.status === "dirty"
          ? (l.dirty(), { status: "dirty", value: c.value })
          : this._def.out._parseSync({
              data: c.value,
              path: u.path,
              parent: u,
            });
    }
  }
  static create(i, l) {
    return new Ol({ in: i, out: l, typeName: yt.ZodPipeline });
  }
}
class Al extends Tt {
  _parse(i) {
    const l = this._def.innerType._parse(i),
      u = (c) => (ni(c) && (c.value = Object.freeze(c.value)), c);
    return pl(l) ? l.then((c) => u(c)) : u(l);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Al.create = (s, i) =>
  new Al({ innerType: s, typeName: yt.ZodReadonly, ...xt(i) });
function Bp(s, i) {
  const l =
    typeof s == "function" ? s(i) : typeof s == "string" ? { message: s } : s;
  return typeof l == "string" ? { message: l } : l;
}
function xv(s, i = {}, l) {
  return s
    ? ss.create().superRefine((u, c) => {
        var f, d;
        const m = s(u);
        if (m instanceof Promise)
          return m.then((y) => {
            var p, g;
            if (!y) {
              const v = Bp(i, u),
                w =
                  (g = (p = v.fatal) !== null && p !== void 0 ? p : l) !==
                    null && g !== void 0
                    ? g
                    : !0;
              c.addIssue({ code: "custom", ...v, fatal: w });
            }
          });
        if (!m) {
          const y = Bp(i, u),
            p =
              (d = (f = y.fatal) !== null && f !== void 0 ? f : l) !== null &&
              d !== void 0
                ? d
                : !0;
          c.addIssue({ code: "custom", ...y, fatal: p });
        }
      })
    : ss.create();
}
const K_ = { object: Kt.lazycreate };
var yt;
(function (s) {
  (s.ZodString = "ZodString"),
    (s.ZodNumber = "ZodNumber"),
    (s.ZodNaN = "ZodNaN"),
    (s.ZodBigInt = "ZodBigInt"),
    (s.ZodBoolean = "ZodBoolean"),
    (s.ZodDate = "ZodDate"),
    (s.ZodSymbol = "ZodSymbol"),
    (s.ZodUndefined = "ZodUndefined"),
    (s.ZodNull = "ZodNull"),
    (s.ZodAny = "ZodAny"),
    (s.ZodUnknown = "ZodUnknown"),
    (s.ZodNever = "ZodNever"),
    (s.ZodVoid = "ZodVoid"),
    (s.ZodArray = "ZodArray"),
    (s.ZodObject = "ZodObject"),
    (s.ZodUnion = "ZodUnion"),
    (s.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (s.ZodIntersection = "ZodIntersection"),
    (s.ZodTuple = "ZodTuple"),
    (s.ZodRecord = "ZodRecord"),
    (s.ZodMap = "ZodMap"),
    (s.ZodSet = "ZodSet"),
    (s.ZodFunction = "ZodFunction"),
    (s.ZodLazy = "ZodLazy"),
    (s.ZodLiteral = "ZodLiteral"),
    (s.ZodEnum = "ZodEnum"),
    (s.ZodEffects = "ZodEffects"),
    (s.ZodNativeEnum = "ZodNativeEnum"),
    (s.ZodOptional = "ZodOptional"),
    (s.ZodNullable = "ZodNullable"),
    (s.ZodDefault = "ZodDefault"),
    (s.ZodCatch = "ZodCatch"),
    (s.ZodPromise = "ZodPromise"),
    (s.ZodBranded = "ZodBranded"),
    (s.ZodPipeline = "ZodPipeline"),
    (s.ZodReadonly = "ZodReadonly");
})(yt || (yt = {}));
const J_ = (s, i = { message: `Input not instance of ${s.name}` }) =>
    xv((l) => l instanceof s, i),
  Ev = dn.create,
  Tv = Ra.create,
  $_ = hu.create,
  P_ = wa.create,
  Rv = vl.create,
  F_ = ai.create,
  W_ = cu.create,
  I_ = yl.create,
  t1 = gl.create,
  e1 = ss.create,
  n1 = ei.create,
  a1 = Pn.create,
  i1 = fu.create,
  s1 = hn.create,
  l1 = Kt.create,
  r1 = Kt.strictCreate,
  u1 = bl.create,
  o1 = bu.create,
  c1 = _l.create,
  f1 = On.create,
  d1 = Sl.create,
  h1 = du.create,
  m1 = ii.create,
  p1 = ns.create,
  v1 = xl.create,
  y1 = El.create,
  g1 = Aa.create,
  b1 = Tl.create,
  _1 = ls.create,
  Lp = mn.create,
  S1 = An.create,
  x1 = Ma.create,
  E1 = mn.createWithPreprocess,
  T1 = Ol.create,
  R1 = () => Ev().optional(),
  w1 = () => Tv().optional(),
  A1 = () => Rv().optional(),
  M1 = {
    string: (s) => dn.create({ ...s, coerce: !0 }),
    number: (s) => Ra.create({ ...s, coerce: !0 }),
    boolean: (s) => vl.create({ ...s, coerce: !0 }),
    bigint: (s) => wa.create({ ...s, coerce: !0 }),
    date: (s) => ai.create({ ...s, coerce: !0 }),
  },
  O1 = bt;
var Wr = Object.freeze({
  __proto__: null,
  defaultErrorMap: is,
  setErrorMap: E_,
  getErrorMap: ru,
  makeIssue: uu,
  EMPTY_PATH: T_,
  addIssueToContext: F,
  ParseStatus: Ee,
  INVALID: bt,
  DIRTY: Wi,
  OK: Me,
  isAborted: af,
  isDirty: sf,
  isValid: ni,
  isAsync: pl,
  get util() {
    return zt;
  },
  get objectUtil() {
    return nf;
  },
  ZodParsedType: nt,
  getParsedType: Kn,
  ZodType: Tt,
  datetimeRegex: _v,
  ZodString: dn,
  ZodNumber: Ra,
  ZodBigInt: wa,
  ZodBoolean: vl,
  ZodDate: ai,
  ZodSymbol: cu,
  ZodUndefined: yl,
  ZodNull: gl,
  ZodAny: ss,
  ZodUnknown: ei,
  ZodNever: Pn,
  ZodVoid: fu,
  ZodArray: hn,
  ZodObject: Kt,
  ZodUnion: bl,
  ZodDiscriminatedUnion: bu,
  ZodIntersection: _l,
  ZodTuple: On,
  ZodRecord: Sl,
  ZodMap: du,
  ZodSet: ii,
  ZodFunction: ns,
  ZodLazy: xl,
  ZodLiteral: El,
  ZodEnum: Aa,
  ZodNativeEnum: Tl,
  ZodPromise: ls,
  ZodEffects: mn,
  ZodTransformer: mn,
  ZodOptional: An,
  ZodNullable: Ma,
  ZodDefault: Rl,
  ZodCatch: wl,
  ZodNaN: hu,
  BRAND: X_,
  ZodBranded: mf,
  ZodPipeline: Ol,
  ZodReadonly: Al,
  custom: xv,
  Schema: Tt,
  ZodSchema: Tt,
  late: K_,
  get ZodFirstPartyTypeKind() {
    return yt;
  },
  coerce: M1,
  any: e1,
  array: s1,
  bigint: P_,
  boolean: Rv,
  date: F_,
  discriminatedUnion: o1,
  effect: Lp,
  enum: g1,
  function: p1,
  instanceof: J_,
  intersection: c1,
  lazy: v1,
  literal: y1,
  map: h1,
  nan: $_,
  nativeEnum: b1,
  never: a1,
  null: t1,
  nullable: x1,
  number: Tv,
  object: l1,
  oboolean: A1,
  onumber: w1,
  optional: S1,
  ostring: R1,
  pipeline: T1,
  preprocess: E1,
  promise: _1,
  record: d1,
  set: m1,
  strictObject: r1,
  string: Ev,
  symbol: W_,
  transformer: Lp,
  tuple: f1,
  undefined: I_,
  union: u1,
  unknown: n1,
  void: i1,
  NEVER: O1,
  ZodIssueCode: G,
  quotelessJson: x_,
  ZodError: Qe,
});
const C1 = () =>
    Oa(() => import("./signup-Bzrdq8Wr.js"), __vite__mapDeps([4, 1, 5])),
  wv = Ca("/_auth/signup")({ component: Da(C1, "component", () => wv.ssr) }),
  lS = Wr.object({
    username: Wr.string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be at most 20 characters long")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ),
    email: Wr.string().email("Invalid email format"),
    password: Wr.string()
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password must be at most 100 characters long"),
  }),
  D1 = () =>
    Oa(() => import("./login-MamCEnAE.js"), __vite__mapDeps([6, 1, 5])),
  Av = Ca("/_auth/login")({ component: Da(D1, "component", () => Av.ssr) }),
  z1 = () =>
    Oa(() => import("./index-K460dCOQ.js"), __vite__mapDeps([7, 8, 1, 2])),
  Mv = Ca("/_main/dashboard/")({
    component: Da(z1, "component", () => Mv.ssr),
  }),
  N1 = () =>
    Oa(() => import("./loans-BxJXDgO2.js"), __vite__mapDeps([9, 8, 1, 2, 3])),
  Ov = Ca("/_main/dashboard/loans")({
    component: Da(N1, "component", () => Ov.ssr),
  }),
  pf = dv.update({ id: "/_main", getParentRoute: () => hf }),
  vf = hv.update({ id: "/_auth", getParentRoute: () => hf }),
  U1 = mv.update({ id: "/", path: "/", getParentRoute: () => pf }),
  yf = pv.update({
    id: "/dashboard",
    path: "/dashboard",
    getParentRoute: () => pf,
  }),
  j1 = wv.update({ id: "/signup", path: "/signup", getParentRoute: () => vf }),
  B1 = Av.update({ id: "/login", path: "/login", getParentRoute: () => vf }),
  L1 = Mv.update({ id: "/", path: "/", getParentRoute: () => yf }),
  k1 = Ov.update({ id: "/loans", path: "/loans", getParentRoute: () => yf }),
  H1 = { AuthLoginRoute: B1, AuthSignupRoute: j1 },
  q1 = vf._addFileChildren(H1),
  Z1 = { MainDashboardLoansRoute: k1, MainDashboardIndexRoute: L1 },
  V1 = yf._addFileChildren(Z1),
  Y1 = { MainDashboardRoute: V1, MainIndexRoute: U1 },
  G1 = pf._addFileChildren(Y1),
  Q1 = { AuthRoute: q1, MainRoute: G1 },
  X1 = hf._addFileChildren(Q1)._addFileTypes();
function K1() {
  const s = new ov();
  return Ig({
    routeTree: X1,
    context: { queryClient: s, auth: void 0 },
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });
}
const J1 = K1();
db.hydrateRoot(document, P.jsx(rb, { router: J1 }));
const rS = void 0;
export {
  Wr as A,
  $1 as B,
  wn as C,
  ts as D,
  F1 as E,
  $g as F,
  rS as G,
  cf as O,
  Q as R,
  yu as S,
  iS as a,
  Fp as b,
  pn as c,
  tS as d,
  se as e,
  eS as f,
  I1 as g,
  Kr as h,
  rl as i,
  P as j,
  P1 as k,
  cp as l,
  fl as m,
  Jg as n,
  hl as o,
  zb as p,
  Ae as q,
  _t as r,
  nS as s,
  sS as t,
  lS as u,
  aS as v,
  zc as w,
  $c as x,
  Ag as y,
  kp as z,
};
