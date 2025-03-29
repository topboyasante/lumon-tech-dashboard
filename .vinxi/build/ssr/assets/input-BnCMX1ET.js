import { jsx as t, jsxs as u } from "react/jsx-runtime";
import * as d from "react";
import { Slot as f } from "@radix-ui/react-slot";
import { cva as b } from "class-variance-authority";
import { LoaderCircle as g, EyeOff as h, Eye as x } from "lucide-react";
import { clsx as p } from "clsx";
import { twMerge as v } from "tailwind-merge";
function i(...r) {
  return v(p(r));
}
function I(r, a, o) {
  const e = r.getValue(a);
  return o.includes(e.toLowerCase());
}
const w = b(
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
  y = d.forwardRef(
    ({ className: r, variant: a, size: o, asChild: e = !1, ...s }, n) =>
      t(e ? f : "button", {
        className: i(w({ variant: a, size: o, className: r })),
        ref: n,
        ...s,
        children: s.isLoading
          ? t(g, { className: "animate-spin h-4 w-4" })
          : s.children,
      }),
  );
y.displayName = "Button";
const N = d.forwardRef(({ className: r, type: a, fieldInfo: o, ...e }, s) => {
  const [n, c] = d.useState(a !== "password"),
    l = o;
  return u("div", {
    className: i("relative flex w-full flex-col gap-2", e.labelClassName),
    children: [
      e.label &&
        t("label", {
          htmlFor: e.id,
          className: i(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            e.labelClassName,
          ),
          children: e.label,
        }),
      u("div", {
        className: "relative w-full",
        children: [
          t("input", {
            type: n ? "text" : a,
            className: i(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              r,
            ),
            ref: s,
            ...e,
          }),
          a === "password" &&
            t("button", {
              type: "button",
              className:
                "absolute right-2.5 bottom-2.5 text-gray-500 hover:text-gray-700",
              onClick: () => c(!n),
              children: n
                ? t(h, { className: "h-4 w-4" })
                : t(x, { className: "h-4 w-4" }),
            }),
        ],
      }),
      l?.state.meta.isTouched && l.state.meta.errors.length
        ? t("em", {
            className: "text-xs text-red-700",
            children: l.state.meta.errors.map((m) => m.message).join(", "),
          })
        : null,
    ],
  });
});
N.displayName = "Input";
export { y as B, N as I, i as c, I as g };
