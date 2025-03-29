import { r as g, j as k } from "./client-B6Fwjkna.js";
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ie = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ee = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (o, t, r) =>
      r ? r.toUpperCase() : t.toLowerCase(),
    ),
  pe = (e) => {
    const o = Ee(e);
    return o.charAt(0).toUpperCase() + o.slice(1);
  },
  ye = (...e) =>
    e
      .filter((o, t, r) => !!o && o.trim() !== "" && r.indexOf(o) === t)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ve = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = g.forwardRef(
  (
    {
      color: e = "currentColor",
      size: o = 24,
      strokeWidth: t = 2,
      absoluteStrokeWidth: r,
      className: n = "",
      children: s,
      iconNode: i,
      ...u
    },
    d,
  ) =>
    g.createElement(
      "svg",
      {
        ref: d,
        ...Ve,
        width: o,
        height: o,
        stroke: e,
        strokeWidth: r ? (Number(t) * 24) / Number(o) : t,
        className: ye("lucide", n),
        ...u,
      },
      [
        ...i.map(([f, m]) => g.createElement(f, m)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oe = (e, o) => {
  const t = g.forwardRef(({ className: r, ...n }, s) =>
    g.createElement(Ge, {
      ref: s,
      iconNode: o,
      className: ye(`lucide-${Ie(pe(e))}`, `lucide-${e}`, r),
      ...n,
    }),
  );
  return (t.displayName = pe(e)), t;
};
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Le = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  Te = oe("eye-off", Le);
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oe = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  _e = oe("eye", Oe);
/**
 * @license lucide-react v0.485.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fe = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  $e = oe("loader-circle", Fe);
function fe(e, o) {
  if (typeof e == "function") return e(o);
  e != null && (e.current = o);
}
function we(...e) {
  return (o) => {
    let t = !1;
    const r = e.map((n) => {
      const s = fe(n, o);
      return !t && typeof s == "function" && (t = !0), s;
    });
    if (t)
      return () => {
        for (let n = 0; n < r.length; n++) {
          const s = r[n];
          typeof s == "function" ? s() : fe(e[n], null);
        }
      };
  };
}
function Ot(...e) {
  return g.useCallback(we(...e), e);
}
var ve = g.forwardRef((e, o) => {
  const { children: t, ...r } = e,
    n = g.Children.toArray(t),
    s = n.find(We);
  if (s) {
    const i = s.props.children,
      u = n.map((d) =>
        d === s
          ? g.Children.count(i) > 1
            ? g.Children.only(null)
            : g.isValidElement(i)
              ? i.props.children
              : null
          : d,
      );
    return k.jsx(Y, {
      ...r,
      ref: o,
      children: g.isValidElement(i) ? g.cloneElement(i, void 0, u) : null,
    });
  }
  return k.jsx(Y, { ...r, ref: o, children: t });
});
ve.displayName = "Slot";
var Y = g.forwardRef((e, o) => {
  const { children: t, ...r } = e;
  if (g.isValidElement(t)) {
    const n = He(t),
      s = Ue(r, t.props);
    return (
      t.type !== g.Fragment && (s.ref = o ? we(o, n) : n), g.cloneElement(t, s)
    );
  }
  return g.Children.count(t) > 1 ? g.Children.only(null) : null;
});
Y.displayName = "SlotClone";
var Be = ({ children: e }) => k.jsx(k.Fragment, { children: e });
function We(e) {
  return g.isValidElement(e) && e.type === Be;
}
function Ue(e, o) {
  const t = { ...o };
  for (const r in o) {
    const n = e[r],
      s = o[r];
    /^on[A-Z]/.test(r)
      ? n && s
        ? (t[r] = (...u) => {
            s(...u), n(...u);
          })
        : n && (t[r] = n)
      : r === "style"
        ? (t[r] = { ...n, ...s })
        : r === "className" && (t[r] = [n, s].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function He(e) {
  let o = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    t = o && "isReactWarning" in o && o.isReactWarning;
  return t
    ? e.ref
    : ((o = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (t = o && "isReactWarning" in o && o.isReactWarning),
      t ? e.props.ref : e.props.ref || e.ref);
}
function ke(e) {
  var o,
    t,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (o = 0; o < n; o++)
        e[o] && (t = ke(e[o])) && (r && (r += " "), (r += t));
    } else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Ce() {
  for (var e, o, t = 0, r = "", n = arguments.length; t < n; t++)
    (e = arguments[t]) && (o = ke(e)) && (r && (r += " "), (r += o));
  return r;
}
const be = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  me = Ce,
  Ze = (e, o) => (t) => {
    var r;
    if (o?.variants == null) return me(e, t?.class, t?.className);
    const { variants: n, defaultVariants: s } = o,
      i = Object.keys(n).map((f) => {
        const m = t?.[f],
          y = s?.[f];
        if (m === null) return null;
        const z = be(m) || be(y);
        return n[f][z];
      }),
      u =
        t &&
        Object.entries(t).reduce((f, m) => {
          let [y, z] = m;
          return z === void 0 || (f[y] = z), f;
        }, {}),
      d =
        o == null || (r = o.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((f, m) => {
              let { class: y, className: z, ...R } = m;
              return Object.entries(R).every((w) => {
                let [v, A] = w;
                return Array.isArray(A)
                  ? A.includes({ ...s, ...u }[v])
                  : { ...s, ...u }[v] === A;
              })
                ? [...f, y, z]
                : f;
            }, []);
    return me(e, i, d, t?.class, t?.className);
  },
  ne = "-",
  qe = (e) => {
    const o = Ke(e),
      { conflictingClassGroups: t, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const u = i.split(ne);
        return u[0] === "" && u.length !== 1 && u.shift(), ze(u, o) || De(i);
      },
      getConflictingClassGroupIds: (i, u) => {
        const d = t[i] || [];
        return u && r[i] ? [...d, ...r[i]] : d;
      },
    };
  },
  ze = (e, o) => {
    if (e.length === 0) return o.classGroupId;
    const t = e[0],
      r = o.nextPart.get(t),
      n = r ? ze(e.slice(1), r) : void 0;
    if (n) return n;
    if (o.validators.length === 0) return;
    const s = e.join(ne);
    return o.validators.find(({ validator: i }) => i(s))?.classGroupId;
  },
  ge = /^\[(.+)\]$/,
  De = (e) => {
    if (ge.test(e)) {
      const o = ge.exec(e)[1],
        t = o?.substring(0, o.indexOf(":"));
      if (t) return "arbitrary.." + t;
    }
  },
  Ke = (e) => {
    const { theme: o, classGroups: t } = e,
      r = { nextPart: new Map(), validators: [] };
    for (const n in t) ee(t[n], r, n, o);
    return r;
  },
  ee = (e, o, t, r) => {
    e.forEach((n) => {
      if (typeof n == "string") {
        const s = n === "" ? o : he(o, n);
        s.classGroupId = t;
        return;
      }
      if (typeof n == "function") {
        if (Je(n)) {
          ee(n(r), o, t, r);
          return;
        }
        o.validators.push({ validator: n, classGroupId: t });
        return;
      }
      Object.entries(n).forEach(([s, i]) => {
        ee(i, he(o, s), t, r);
      });
    });
  },
  he = (e, o) => {
    let t = e;
    return (
      o.split(ne).forEach((r) => {
        t.nextPart.has(r) ||
          t.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (t = t.nextPart.get(r));
      }),
      t
    );
  },
  Je = (e) => e.isThemeGetter,
  Xe = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let o = 0,
      t = new Map(),
      r = new Map();
    const n = (s, i) => {
      t.set(s, i), o++, o > e && ((o = 0), (r = t), (t = new Map()));
    };
    return {
      get(s) {
        let i = t.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return n(s, i), i;
      },
      set(s, i) {
        t.has(s) ? t.set(s, i) : n(s, i);
      },
    };
  },
  te = "!",
  re = ":",
  Qe = re.length,
  Ye = (e) => {
    const { prefix: o, experimentalParseClassName: t } = e;
    let r = (n) => {
      const s = [];
      let i = 0,
        u = 0,
        d = 0,
        f;
      for (let w = 0; w < n.length; w++) {
        let v = n[w];
        if (i === 0 && u === 0) {
          if (v === re) {
            s.push(n.slice(d, w)), (d = w + Qe);
            continue;
          }
          if (v === "/") {
            f = w;
            continue;
          }
        }
        v === "[" ? i++ : v === "]" ? i-- : v === "(" ? u++ : v === ")" && u--;
      }
      const m = s.length === 0 ? n : n.substring(d),
        y = et(m),
        z = y !== m,
        R = f && f > d ? f - d : void 0;
      return {
        modifiers: s,
        hasImportantModifier: z,
        baseClassName: y,
        maybePostfixModifierPosition: R,
      };
    };
    if (o) {
      const n = o + re,
        s = r;
      r = (i) =>
        i.startsWith(n)
          ? s(i.substring(n.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: i,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (t) {
      const n = r;
      r = (s) => t({ className: s, parseClassName: n });
    }
    return r;
  },
  et = (e) =>
    e.endsWith(te)
      ? e.substring(0, e.length - 1)
      : e.startsWith(te)
        ? e.substring(1)
        : e,
  tt = (e) => {
    const o = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const n = [];
      let s = [];
      return (
        r.forEach((i) => {
          i[0] === "[" || o[i] ? (n.push(...s.sort(), i), (s = [])) : s.push(i);
        }),
        n.push(...s.sort()),
        n
      );
    };
  },
  rt = (e) => ({
    cache: Xe(e.cacheSize),
    parseClassName: Ye(e),
    sortModifiers: tt(e),
    ...qe(e),
  }),
  ot = /\s+/,
  nt = (e, o) => {
    const {
        parseClassName: t,
        getClassGroupId: r,
        getConflictingClassGroupIds: n,
        sortModifiers: s,
      } = o,
      i = [],
      u = e.trim().split(ot);
    let d = "";
    for (let f = u.length - 1; f >= 0; f -= 1) {
      const m = u[f],
        {
          isExternal: y,
          modifiers: z,
          hasImportantModifier: R,
          baseClassName: w,
          maybePostfixModifierPosition: v,
        } = t(m);
      if (y) {
        d = m + (d.length > 0 ? " " + d : d);
        continue;
      }
      let A = !!v,
        P = r(A ? w.substring(0, v) : w);
      if (!P) {
        if (!A) {
          d = m + (d.length > 0 ? " " + d : d);
          continue;
        }
        if (((P = r(w)), !P)) {
          d = m + (d.length > 0 ? " " + d : d);
          continue;
        }
        A = !1;
      }
      const F = s(z).join(":"),
        $ = R ? F + te : F,
        V = $ + P;
      if (i.includes(V)) continue;
      i.push(V);
      const G = n(P, A);
      for (let c = 0; c < G.length; ++c) {
        const S = G[c];
        i.push($ + S);
      }
      d = m + (d.length > 0 ? " " + d : d);
    }
    return d;
  };
function st() {
  let e = 0,
    o,
    t,
    r = "";
  for (; e < arguments.length; )
    (o = arguments[e++]) && (t = Se(o)) && (r && (r += " "), (r += t));
  return r;
}
const Se = (e) => {
  if (typeof e == "string") return e;
  let o,
    t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (o = Se(e[r])) && (t && (t += " "), (t += o));
  return t;
};
function at(e, ...o) {
  let t,
    r,
    n,
    s = i;
  function i(d) {
    const f = o.reduce((m, y) => y(m), e());
    return (t = rt(f)), (r = t.cache.get), (n = t.cache.set), (s = u), u(d);
  }
  function u(d) {
    const f = r(d);
    if (f) return f;
    const m = nt(d, t);
    return n(d, m), m;
  }
  return function () {
    return s(st.apply(null, arguments));
  };
}
const h = (e) => {
    const o = (t) => t[e] || [];
    return (o.isThemeGetter = !0), o;
  },
  Ae = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Me = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  lt = /^\d+\/\d+$/,
  it = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ct =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  dt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  ut = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  pt =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  T = (e) => lt.test(e),
  p = (e) => !!e && !Number.isNaN(Number(e)),
  I = (e) => !!e && Number.isInteger(Number(e)),
  xe = (e) => e.endsWith("%") && p(e.slice(0, -1)),
  N = (e) => it.test(e),
  ft = () => !0,
  bt = (e) => ct.test(e) && !dt.test(e),
  se = () => !1,
  mt = (e) => ut.test(e),
  gt = (e) => pt.test(e),
  ht = (e) => !a(e) && !l(e),
  xt = (e) => O(e, Pe, se),
  a = (e) => Ae.test(e),
  E = (e) => O(e, je, bt),
  Q = (e) => O(e, Rt, p),
  yt = (e) => O(e, Ne, se),
  wt = (e) => O(e, Re, gt),
  vt = (e) => O(e, se, mt),
  l = (e) => Me.test(e),
  q = (e) => _(e, je),
  kt = (e) => _(e, Pt),
  Ct = (e) => _(e, Ne),
  zt = (e) => _(e, Pe),
  St = (e) => _(e, Re),
  At = (e) => _(e, jt, !0),
  O = (e, o, t) => {
    const r = Ae.exec(e);
    return r ? (r[1] ? o(r[1]) : t(r[2])) : !1;
  },
  _ = (e, o, t = !1) => {
    const r = Me.exec(e);
    return r ? (r[1] ? o(r[1]) : t) : !1;
  },
  Ne = (e) => e === "position",
  Mt = new Set(["image", "url"]),
  Re = (e) => Mt.has(e),
  Nt = new Set(["length", "size", "percentage"]),
  Pe = (e) => Nt.has(e),
  je = (e) => e === "length",
  Rt = (e) => e === "number",
  Pt = (e) => e === "family-name",
  jt = (e) => e === "shadow",
  It = () => {
    const e = h("color"),
      o = h("font"),
      t = h("text"),
      r = h("font-weight"),
      n = h("tracking"),
      s = h("leading"),
      i = h("breakpoint"),
      u = h("container"),
      d = h("spacing"),
      f = h("radius"),
      m = h("shadow"),
      y = h("inset-shadow"),
      z = h("drop-shadow"),
      R = h("blur"),
      w = h("perspective"),
      v = h("aspect"),
      A = h("ease"),
      P = h("animate"),
      F = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      V = () => ["auto", "hidden", "clip", "visible", "scroll"],
      G = () => ["auto", "contain", "none"],
      c = () => [l, a, d],
      S = () => [T, "full", "auto", ...c()],
      ae = () => [I, "none", "subgrid", l, a],
      le = () => ["auto", { span: ["full", I, l, a] }, l, a],
      B = () => [I, "auto", l, a],
      ie = () => ["auto", "min", "max", "fr", l, a],
      K = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
      ],
      L = () => ["start", "end", "center", "stretch"],
      M = () => ["auto", ...c()],
      j = () => [
        T,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...c(),
      ],
      b = () => [e, l, a],
      J = () => [xe, E],
      x = () => ["", "none", "full", f, l, a],
      C = () => ["", p, q, E],
      W = () => ["solid", "dashed", "dotted", "double"],
      ce = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      de = () => ["", "none", R, l, a],
      ue = () => [
        "center",
        "top",
        "top-right",
        "right",
        "bottom-right",
        "bottom",
        "bottom-left",
        "left",
        "top-left",
        l,
        a,
      ],
      U = () => ["none", p, l, a],
      H = () => ["none", p, l, a],
      X = () => [p, l, a],
      Z = () => [T, "full", ...c()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [N],
        breakpoint: [N],
        color: [ft],
        container: [N],
        "drop-shadow": [N],
        ease: ["in", "out", "in-out"],
        font: [ht],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [N],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [N],
        shadow: [N],
        spacing: ["px", p],
        text: [N],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", T, a, l, v] }],
        container: ["container"],
        columns: [{ columns: [p, a, l, u] }],
        "break-after": [{ "break-after": F() }],
        "break-before": [{ "break-before": F() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...$(), a, l] }],
        overflow: [{ overflow: V() }],
        "overflow-x": [{ "overflow-x": V() }],
        "overflow-y": [{ "overflow-y": V() }],
        overscroll: [{ overscroll: G() }],
        "overscroll-x": [{ "overscroll-x": G() }],
        "overscroll-y": [{ "overscroll-y": G() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: S() }],
        "inset-x": [{ "inset-x": S() }],
        "inset-y": [{ "inset-y": S() }],
        start: [{ start: S() }],
        end: [{ end: S() }],
        top: [{ top: S() }],
        right: [{ right: S() }],
        bottom: [{ bottom: S() }],
        left: [{ left: S() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [I, "auto", l, a] }],
        basis: [{ basis: [T, "full", "auto", u, ...c()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [p, T, "auto", "initial", "none", a] }],
        grow: [{ grow: ["", p, l, a] }],
        shrink: [{ shrink: ["", p, l, a] }],
        order: [{ order: [I, "first", "last", "none", l, a] }],
        "grid-cols": [{ "grid-cols": ae() }],
        "col-start-end": [{ col: le() }],
        "col-start": [{ "col-start": B() }],
        "col-end": [{ "col-end": B() }],
        "grid-rows": [{ "grid-rows": ae() }],
        "row-start-end": [{ row: le() }],
        "row-start": [{ "row-start": B() }],
        "row-end": [{ "row-end": B() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ie() }],
        "auto-rows": [{ "auto-rows": ie() }],
        gap: [{ gap: c() }],
        "gap-x": [{ "gap-x": c() }],
        "gap-y": [{ "gap-y": c() }],
        "justify-content": [{ justify: [...K(), "normal"] }],
        "justify-items": [{ "justify-items": [...L(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...L()] }],
        "align-content": [{ content: ["normal", ...K()] }],
        "align-items": [{ items: [...L(), "baseline"] }],
        "align-self": [{ self: ["auto", ...L(), "baseline"] }],
        "place-content": [{ "place-content": K() }],
        "place-items": [{ "place-items": [...L(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...L()] }],
        p: [{ p: c() }],
        px: [{ px: c() }],
        py: [{ py: c() }],
        ps: [{ ps: c() }],
        pe: [{ pe: c() }],
        pt: [{ pt: c() }],
        pr: [{ pr: c() }],
        pb: [{ pb: c() }],
        pl: [{ pl: c() }],
        m: [{ m: M() }],
        mx: [{ mx: M() }],
        my: [{ my: M() }],
        ms: [{ ms: M() }],
        me: [{ me: M() }],
        mt: [{ mt: M() }],
        mr: [{ mr: M() }],
        mb: [{ mb: M() }],
        ml: [{ ml: M() }],
        "space-x": [{ "space-x": c() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": c() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: j() }],
        w: [{ w: [u, "screen", ...j()] }],
        "min-w": [{ "min-w": [u, "screen", "none", ...j()] }],
        "max-w": [
          { "max-w": [u, "screen", "none", "prose", { screen: [i] }, ...j()] },
        ],
        h: [{ h: ["screen", ...j()] }],
        "min-h": [{ "min-h": ["screen", "none", ...j()] }],
        "max-h": [{ "max-h": ["screen", ...j()] }],
        "font-size": [{ text: ["base", t, q, E] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, l, Q] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              xe,
              a,
            ],
          },
        ],
        "font-family": [{ font: [kt, a, o] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [n, l, a] }],
        "line-clamp": [{ "line-clamp": [p, "none", l, Q] }],
        leading: [{ leading: [s, ...c()] }],
        "list-image": [{ "list-image": ["none", l, a] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", l, a] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: b() }],
        "text-color": [{ text: b() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...W(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [p, "from-font", "auto", l, E] },
        ],
        "text-decoration-color": [{ decoration: b() }],
        "underline-offset": [{ "underline-offset": [p, "auto", l, a] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: c() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              l,
              a,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", l, a] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...$(), Ct, yt] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", zt, xt] }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  I,
                  l,
                  a,
                ],
                radial: ["", l, a],
                conic: [I, l, a],
              },
              St,
              wt,
            ],
          },
        ],
        "bg-color": [{ bg: b() }],
        "gradient-from-pos": [{ from: J() }],
        "gradient-via-pos": [{ via: J() }],
        "gradient-to-pos": [{ to: J() }],
        "gradient-from": [{ from: b() }],
        "gradient-via": [{ via: b() }],
        "gradient-to": [{ to: b() }],
        rounded: [{ rounded: x() }],
        "rounded-s": [{ "rounded-s": x() }],
        "rounded-e": [{ "rounded-e": x() }],
        "rounded-t": [{ "rounded-t": x() }],
        "rounded-r": [{ "rounded-r": x() }],
        "rounded-b": [{ "rounded-b": x() }],
        "rounded-l": [{ "rounded-l": x() }],
        "rounded-ss": [{ "rounded-ss": x() }],
        "rounded-se": [{ "rounded-se": x() }],
        "rounded-ee": [{ "rounded-ee": x() }],
        "rounded-es": [{ "rounded-es": x() }],
        "rounded-tl": [{ "rounded-tl": x() }],
        "rounded-tr": [{ "rounded-tr": x() }],
        "rounded-br": [{ "rounded-br": x() }],
        "rounded-bl": [{ "rounded-bl": x() }],
        "border-w": [{ border: C() }],
        "border-w-x": [{ "border-x": C() }],
        "border-w-y": [{ "border-y": C() }],
        "border-w-s": [{ "border-s": C() }],
        "border-w-e": [{ "border-e": C() }],
        "border-w-t": [{ "border-t": C() }],
        "border-w-r": [{ "border-r": C() }],
        "border-w-b": [{ "border-b": C() }],
        "border-w-l": [{ "border-l": C() }],
        "divide-x": [{ "divide-x": C() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": C() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...W(), "hidden", "none"] }],
        "divide-style": [{ divide: [...W(), "hidden", "none"] }],
        "border-color": [{ border: b() }],
        "border-color-x": [{ "border-x": b() }],
        "border-color-y": [{ "border-y": b() }],
        "border-color-s": [{ "border-s": b() }],
        "border-color-e": [{ "border-e": b() }],
        "border-color-t": [{ "border-t": b() }],
        "border-color-r": [{ "border-r": b() }],
        "border-color-b": [{ "border-b": b() }],
        "border-color-l": [{ "border-l": b() }],
        "divide-color": [{ divide: b() }],
        "outline-style": [{ outline: [...W(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [p, l, a] }],
        "outline-w": [{ outline: ["", p, q, E] }],
        "outline-color": [{ outline: [e] }],
        shadow: [{ shadow: ["", "none", m, At, vt] }],
        "shadow-color": [{ shadow: b() }],
        "inset-shadow": [{ "inset-shadow": ["none", l, a, y] }],
        "inset-shadow-color": [{ "inset-shadow": b() }],
        "ring-w": [{ ring: C() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: b() }],
        "ring-offset-w": [{ "ring-offset": [p, E] }],
        "ring-offset-color": [{ "ring-offset": b() }],
        "inset-ring-w": [{ "inset-ring": C() }],
        "inset-ring-color": [{ "inset-ring": b() }],
        opacity: [{ opacity: [p, l, a] }],
        "mix-blend": [
          { "mix-blend": [...ce(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ce() }],
        filter: [{ filter: ["", "none", l, a] }],
        blur: [{ blur: de() }],
        brightness: [{ brightness: [p, l, a] }],
        contrast: [{ contrast: [p, l, a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", z, l, a] }],
        grayscale: [{ grayscale: ["", p, l, a] }],
        "hue-rotate": [{ "hue-rotate": [p, l, a] }],
        invert: [{ invert: ["", p, l, a] }],
        saturate: [{ saturate: [p, l, a] }],
        sepia: [{ sepia: ["", p, l, a] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", l, a] }],
        "backdrop-blur": [{ "backdrop-blur": de() }],
        "backdrop-brightness": [{ "backdrop-brightness": [p, l, a] }],
        "backdrop-contrast": [{ "backdrop-contrast": [p, l, a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", p, l, a] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p, l, a] }],
        "backdrop-invert": [{ "backdrop-invert": ["", p, l, a] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p, l, a] }],
        "backdrop-saturate": [{ "backdrop-saturate": [p, l, a] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", p, l, a] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": c() }],
        "border-spacing-x": [{ "border-spacing-x": c() }],
        "border-spacing-y": [{ "border-spacing-y": c() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              l,
              a,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [p, "initial", l, a] }],
        ease: [{ ease: ["linear", "initial", A, l, a] }],
        delay: [{ delay: [p, l, a] }],
        animate: [{ animate: ["none", P, l, a] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [w, l, a] }],
        "perspective-origin": [{ "perspective-origin": ue() }],
        rotate: [{ rotate: U() }],
        "rotate-x": [{ "rotate-x": U() }],
        "rotate-y": [{ "rotate-y": U() }],
        "rotate-z": [{ "rotate-z": U() }],
        scale: [{ scale: H() }],
        "scale-x": [{ "scale-x": H() }],
        "scale-y": [{ "scale-y": H() }],
        "scale-z": [{ "scale-z": H() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: X() }],
        "skew-x": [{ "skew-x": X() }],
        "skew-y": [{ "skew-y": X() }],
        transform: [{ transform: [l, a, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: ue() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Z() }],
        "translate-x": [{ "translate-x": Z() }],
        "translate-y": [{ "translate-y": Z() }],
        "translate-z": [{ "translate-z": Z() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: b() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: b() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              l,
              a,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": c() }],
        "scroll-mx": [{ "scroll-mx": c() }],
        "scroll-my": [{ "scroll-my": c() }],
        "scroll-ms": [{ "scroll-ms": c() }],
        "scroll-me": [{ "scroll-me": c() }],
        "scroll-mt": [{ "scroll-mt": c() }],
        "scroll-mr": [{ "scroll-mr": c() }],
        "scroll-mb": [{ "scroll-mb": c() }],
        "scroll-ml": [{ "scroll-ml": c() }],
        "scroll-p": [{ "scroll-p": c() }],
        "scroll-px": [{ "scroll-px": c() }],
        "scroll-py": [{ "scroll-py": c() }],
        "scroll-ps": [{ "scroll-ps": c() }],
        "scroll-pe": [{ "scroll-pe": c() }],
        "scroll-pt": [{ "scroll-pt": c() }],
        "scroll-pr": [{ "scroll-pr": c() }],
        "scroll-pb": [{ "scroll-pb": c() }],
        "scroll-pl": [{ "scroll-pl": c() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", l, a] },
        ],
        fill: [{ fill: ["none", ...b()] }],
        "stroke-w": [{ stroke: [p, q, E, Q] }],
        stroke: [{ stroke: ["none", ...b()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "before",
        "after",
        "placeholder",
        "file",
        "marker",
        "selection",
        "first-line",
        "first-letter",
        "backdrop",
        "*",
        "**",
      ],
    };
  },
  Et = at(It);
function D(...e) {
  return Et(Ce(e));
}
function _t(e, o, t) {
  const r = e.getValue(o);
  return t.includes(r.toLowerCase());
}
const Vt = Ze(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
          table: "",
          pagination: "",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Gt = g.forwardRef(
    ({ className: e, variant: o, size: t, asChild: r = !1, ...n }, s) => {
      const i = r ? ve : "button";
      return k.jsx(i, {
        className: D(Vt({ variant: o, size: t, className: e })),
        ref: s,
        ...n,
        children: n.isLoading
          ? k.jsx($e, { className: "animate-spin h-4 w-4" })
          : n.children,
      });
    },
  );
Gt.displayName = "Button";
const Lt = g.forwardRef(({ className: e, type: o, fieldInfo: t, ...r }, n) => {
  const [s, i] = g.useState(o !== "password"),
    u = t;
  return k.jsxs("div", {
    className: D("relative flex w-full flex-col gap-2", r.labelClassName),
    children: [
      r.label &&
        k.jsx("label", {
          htmlFor: r.id,
          className: D(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            r.labelClassName,
          ),
          children: r.label,
        }),
      k.jsxs("div", {
        className: "relative w-full",
        children: [
          k.jsx("input", {
            type: s ? "text" : o,
            className: D(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              e,
            ),
            ref: n,
            ...r,
          }),
          o === "password" &&
            k.jsx("button", {
              type: "button",
              className:
                "absolute right-2.5 bottom-2.5 text-gray-500 hover:text-gray-700",
              onClick: () => i(!s),
              children: s
                ? k.jsx(Te, { className: "h-4 w-4" })
                : k.jsx(_e, { className: "h-4 w-4" }),
            }),
        ],
      }),
      u?.state.meta.isTouched && u.state.meta.errors.length
        ? k.jsx("em", {
            className: "text-xs text-red-700",
            children: u.state.meta.errors.map((d) => d.message).join(", "),
          })
        : null,
    ],
  });
});
Lt.displayName = "Input";
export {
  Gt as B,
  Lt as I,
  Be as S,
  D as a,
  ve as b,
  oe as c,
  Ze as d,
  Ce as e,
  we as f,
  _t as g,
  Ot as u,
};
