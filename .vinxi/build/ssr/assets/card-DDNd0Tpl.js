import { jsx as e, jsxs as r, Fragment as k } from "react/jsx-runtime";
import * as h from "react";
import {
  flexRender as F,
  useReactTable as Z,
  getFacetedUniqueValues as J,
  getFilteredRowModel as Q,
  getFacetedRowModel as W,
  getSortedRowModel as X,
  getCoreRowModel as Y,
} from "@tanstack/react-table";
import { c as n, B as u, I as P, g as K } from "./input-BnCMX1ET.js";
import {
  S as C,
  D as ee,
  a as te,
  b as ae,
  c as re,
  d as ne,
  g as se,
} from "./dropdown-menu-CT42GEhg.js";
import {
  PlusCircledIcon as oe,
  CheckIcon as le,
  MixerHorizontalIcon as ie,
  Cross2Icon as de,
  DoubleArrowLeftIcon as ce,
  ChevronLeftIcon as me,
  ChevronRightIcon as ue,
  DoubleArrowRightIcon as ge,
} from "@radix-ui/react-icons";
import { Slot as pe } from "@radix-ui/react-slot";
import { cva as he } from "class-variance-authority";
import { Command as g } from "cmdk";
import {
  SearchIcon as fe,
  ArrowLeftCircleIcon as xe,
  ChevronDownIcon as R,
  CheckIcon as ve,
  ChevronUpIcon as be,
} from "lucide-react";
import * as b from "@radix-ui/react-popover";
import * as d from "@radix-ui/react-select";
function we({ className: t, ...a }) {
  return e("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: e("table", {
      "data-slot": "table",
      className: n("w-full caption-bottom text-sm", t),
      ...a,
    }),
  });
}
function Ne({ className: t, ...a }) {
  return e("thead", {
    "data-slot": "table-header",
    className: n("[&_tr]:border-b", t),
    ...a,
  });
}
function Ce({ className: t, ...a }) {
  return e("tbody", {
    "data-slot": "table-body",
    className: n("[&_tr:last-child]:border-0", t),
    ...a,
  });
}
function v({ className: t, ...a }) {
  return e("tr", {
    "data-slot": "table-row",
    className: n(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      t,
    ),
    ...a,
  });
}
function ye({ className: t, ...a }) {
  return e("th", {
    "data-slot": "table-head",
    className: n(
      "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      t,
    ),
    ...a,
  });
}
function w({ className: t, ...a }) {
  return e("td", {
    "data-slot": "table-cell",
    className: n(
      "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      t,
    ),
    ...a,
  });
}
function Se({ columns: t, table: a, isLoading: s, onClickCell: i }) {
  return s
    ? e(v, {
        children: e(w, {
          colSpan: t.length,
          className: "h-24 text-center",
          children: e("p", { className: "text-sm", children: "Fetching.." }),
        }),
      })
    : a.getRowModel().rows?.length
      ? a.getRowModel().rows.map((l) =>
          e(
            v,
            {
              "data-state": l.getIsSelected() && "selected",
              children: l.getVisibleCells().map((o) =>
                e(
                  w,
                  {
                    onClick: () => {
                      const c = o.column.columnDef;
                      i && i(l.original, c);
                    },
                    children: F(o.column.columnDef.cell, o.getContext()),
                  },
                  o.id,
                ),
              ),
            },
            l.id,
          ),
        )
      : e(v, {
          children: e(w, {
            colSpan: t.length,
            className: "h-24 text-center",
            children: e("p", {
              className: "text-lg font-medium",
              children: "No results.",
            }),
          }),
        });
}
const ke = he(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        table: "",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
function N({ className: t, variant: a, asChild: s = !1, ...i }) {
  return e(s ? pe : "span", {
    "data-slot": "badge",
    className: n(ke({ variant: a }), t),
    ...i,
  });
}
function Ie({ className: t, ...a }) {
  return e(g, {
    "data-slot": "command",
    className: n(
      "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
      t,
    ),
    ...a,
  });
}
function ze({ className: t, ...a }) {
  return r("div", {
    "data-slot": "command-input-wrapper",
    className: "flex h-9 items-center gap-2 border-b px-3",
    children: [
      e(fe, { className: "size-4 shrink-0 opacity-50" }),
      e(g.Input, {
        "data-slot": "command-input",
        className: n(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          t,
        ),
        ...a,
      }),
    ],
  });
}
function Fe({ className: t, ...a }) {
  return e(g.List, {
    "data-slot": "command-list",
    className: n(
      "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
      t,
    ),
    ...a,
  });
}
function Pe({ ...t }) {
  return e(g.Empty, {
    "data-slot": "command-empty",
    className: "py-6 text-center text-sm",
    ...t,
  });
}
function I({ className: t, ...a }) {
  return e(g.Group, {
    "data-slot": "command-group",
    className: n(
      "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
      t,
    ),
    ...a,
  });
}
function Re({ className: t, ...a }) {
  return e(g.Separator, {
    "data-slot": "command-separator",
    className: n("bg-border -mx-1 h-px", t),
    ...a,
  });
}
function z({ className: t, ...a }) {
  return e(g.Item, {
    "data-slot": "command-item",
    className: n(
      "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t,
    ),
    ...a,
  });
}
function Ve({ ...t }) {
  return e(b.Root, { "data-slot": "popover", ...t });
}
function De({ ...t }) {
  return e(b.Trigger, { "data-slot": "popover-trigger", ...t });
}
function Te({ className: t, align: a = "center", sideOffset: s = 4, ...i }) {
  return e(b.Portal, {
    children: e(b.Content, {
      "data-slot": "popover-content",
      align: a,
      sideOffset: s,
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        t,
      ),
      ...i,
    }),
  });
}
function _e({ column: t, title: a, options: s }) {
  const i = t?.getFacetedUniqueValues(),
    l = new Set(t?.getFilterValue());
  return r(Ve, {
    children: [
      e(De, {
        asChild: !0,
        children: r(u, {
          variant: "outline",
          className: "border-dashed",
          children: [
            e(oe, { className: "mr-2 h-4 w-4" }),
            e("p", { className: "text-neutral-dark", children: a }),
            l?.size > 0 &&
              r(k, {
                children: [
                  e(C, { orientation: "vertical", className: "mx-2 h-4" }),
                  e(N, {
                    variant: "table",
                    className: "rounded-sm px-1 font-normal lg:hidden",
                    children: l.size,
                  }),
                  e("div", {
                    className: "hidden space-x-1 lg:flex",
                    children:
                      l.size > 1
                        ? r(N, {
                            variant: "table",
                            children: [l.size, " selected"],
                          })
                        : s
                            .filter((o) => l.has(o.value))
                            .map((o) =>
                              e(
                                N,
                                { variant: "table", children: o.label },
                                o.value,
                              ),
                            ),
                  }),
                ],
              }),
          ],
        }),
      }),
      e(Te, {
        className: "max-w-[250px] p-0",
        align: "center",
        children: r(Ie, {
          children: [
            e(ze, { placeholder: a }),
            r(Fe, {
              children: [
                e(Pe, { children: "No results found." }),
                e(I, {
                  children: s.map((o) => {
                    const c = l.has(o.value);
                    return r(
                      z,
                      {
                        onSelect: () => {
                          c ? l.delete(o.value) : l.add(o.value);
                          const p = Array.from(l);
                          t?.setFilterValue(p.length ? p : void 0);
                        },
                        children: [
                          e("div", {
                            className: n(
                              "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                              c
                                ? "bg-primary text-primary-foreground"
                                : "opacity-50 [&_svg]:invisible",
                            ),
                            children: e(le, { className: n("h-4 w-4") }),
                          }),
                          o.icon &&
                            e(o.icon, {
                              className: "mr-2 h-4 w-4 text-muted-foreground",
                            }),
                          e("span", { children: o.label }),
                          i?.get(o.value) &&
                            e("span", {
                              className:
                                "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",
                              children: i.get(o.value),
                            }),
                        ],
                      },
                      o.value,
                    );
                  }),
                }),
                l.size > 0 &&
                  r(k, {
                    children: [
                      e(Re, {}),
                      e(I, {
                        children: e(z, {
                          onSelect: () => t?.setFilterValue(void 0),
                          className: "justify-center text-center",
                          children: "Clear filters",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Me({ table: t }) {
  return r(ee, {
    children: [
      e(te, {
        asChild: !0,
        children: r(u, {
          size: "sm",
          variant: "table",
          className:
            "hidden  border-2 lg:flex lg:items-center lg:justify-center text-neutral-dark space-x-2",
          children: [
            e(ie, { className: "h-4 w-4" }),
            e("p", { className: "text-sm leading-none", children: "View" }),
          ],
        }),
      }),
      r(ae, {
        align: "end",
        className: "w-[150px]",
        children: [
          e(re, {
            children: e("p", {
              className: "leading-7 [&:not(:first-child)]:mt-6",
              children: "Toggle columns",
            }),
          }),
          e(ne, {}),
          t
            .getAllColumns()
            .filter((a) => typeof a.accessorFn < "u" && a.getCanHide())
            .map((a) =>
              e(
                se,
                {
                  className: "capitalize",
                  checked: a.getIsVisible(),
                  onCheckedChange: (s) => a.toggleVisibility(!!s),
                  children: a.id,
                },
                a.id,
              ),
            ),
        ],
      }),
    ],
  });
}
function je({
  table: t,
  title: a,
  inputKey: s,
  facetOptions: i,
  showColumnControl: l,
  inputPlaceholder: o = "Filter anything...",
  handleRefreshTable: c,
}) {
  const p = t.getState().columnFilters.length > 0;
  return r("div", {
    className: "h-auto px-2 flex flex-col gap-y-4",
    children: [
      r("div", {
        className: "flex items-center justify-between gap-x-2",
        children: [
          a && e("h2", { className: "text-2xl font-semibold", children: a }),
          r("div", {
            className: "flex items-center gap-3",
            children: [
              l && e(Me, { table: t }),
              c &&
                r(u, {
                  onClick: c,
                  className: "gap-2",
                  children: [e(xe, { className: "w-4 h-4" }), " Refresh"],
                }),
            ],
          }),
        ],
      }),
      r("div", {
        className: "flex gap-x-2 items-center justify-between",
        children: [
          s &&
            e(P, {
              className: "w-full sm:max-w-xs lg:w-[250px]",
              placeholder: o,
              value: t.getColumn(s)?.getFilterValue() ?? "",
              onChange: (m) => t.getColumn(s)?.setFilterValue(m.target.value),
              containerClassName: "w-full sm:max-w-xs lg:w-[250px]",
            }),
          r("div", {
            className:
              "flex flex-col items-center md:flex-row gap-1 md:gap-x-2",
            children: [
              i?.map(
                (m) =>
                  t.getColumn(m.key) &&
                  e(
                    _e,
                    {
                      column: t.getColumn(m.key),
                      title: m.label,
                      options: m.options,
                    },
                    m.key,
                  ),
              ),
              p &&
                r(u, {
                  variant: "table",
                  onClick: () => t.resetColumnFilters(),
                  className: "h-8 px-2 lg:px-3",
                  children: ["Reset", e(de, { className: "ml-2 h-4 w-4" })],
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Be({ ...t }) {
  return e(d.Root, { "data-slot": "select", ...t });
}
function Ge({ ...t }) {
  return e(d.Value, { "data-slot": "select-value", ...t });
}
function Ae({ className: t, size: a = "default", children: s, ...i }) {
  return r(d.Trigger, {
    "data-slot": "select-trigger",
    "data-size": a,
    className: n(
      "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      t,
    ),
    ...i,
    children: [
      s,
      e(d.Icon, {
        asChild: !0,
        children: e(R, { className: "size-4 opacity-50" }),
      }),
    ],
  });
}
function He({ className: t, children: a, position: s = "popper", ...i }) {
  return e(d.Portal, {
    children: r(d.Content, {
      "data-slot": "select-content",
      className: n(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        s === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        t,
      ),
      position: s,
      ...i,
      children: [
        e(Ue, {}),
        e(d.Viewport, {
          className: n(
            "p-1",
            s === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
          ),
          children: a,
        }),
        e($e, {}),
      ],
    }),
  });
}
function Le({ className: t, children: a, ...s }) {
  return r(d.Item, {
    "data-slot": "select-item",
    className: n(
      "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
      t,
    ),
    ...s,
    children: [
      e("span", {
        className: "absolute right-2 flex size-3.5 items-center justify-center",
        children: e(d.ItemIndicator, {
          children: e(ve, { className: "size-4" }),
        }),
      }),
      e(d.ItemText, { children: a }),
    ],
  });
}
function Ue({ className: t, ...a }) {
  return e(d.ScrollUpButton, {
    "data-slot": "select-scroll-up-button",
    className: n("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: e(be, { className: "size-4" }),
  });
}
function $e({ className: t, ...a }) {
  return e(d.ScrollDownButton, {
    "data-slot": "select-scroll-down-button",
    className: n("flex cursor-default items-center justify-center py-1", t),
    ...a,
    children: e(R, { className: "size-4" }),
  });
}
const qe = [5, 10, 20];
function Ee({ table: t }) {
  return r("div", {
    className:
      "flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 px-2",
    children: [
      e("div", {
        className: "flex-1 text-muted-foreground",
        children: r("p", {
          children: [
            t.getFilteredSelectedRowModel().rows.length,
            " of",
            " ",
            t.getFilteredRowModel().rows.length,
            " row(s) selected.",
          ],
        }),
      }),
      r("div", {
        className:
          "flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4 lg:space-x-6",
        children: [
          r("div", {
            className: "flex items-center space-x-2",
            children: [
              e("p", {
                className: "text-muted-foreground",
                children: "Rows per page",
              }),
              r(Be, {
                value: `${t.getState().pagination.pageSize}`,
                onValueChange: (a) => {
                  t.setPageSize(Number(a));
                },
                children: [
                  e(Ae, {
                    className: "h-8 w-16",
                    children: e(Ge, {
                      placeholder: t.getState().pagination.pageSize,
                    }),
                  }),
                  e(He, {
                    side: "top",
                    children: qe.map((a) =>
                      e(Le, { value: `${a}`, children: a }, a),
                    ),
                  }),
                ],
              }),
            ],
          }),
          r("div", {
            className: "flex items-center space-x-2",
            children: [
              e("p", {
                className: "text-muted-foreground",
                children: "Go to page:",
              }),
              e(P, {
                type: "number",
                min: "1",
                max: t.getPageCount(),
                defaultValue: t.getState().pagination.pageIndex + 1,
                onChange: (a) => {
                  const s = a.target.value ? Number(a.target.value) - 1 : 0;
                  t.setPageIndex(s);
                },
                className: "w-16 sm:w-20",
              }),
            ],
          }),
          r("div", {
            className: " flex flex-row items-center",
            children: [
              e("div", {
                className:
                  "flex w-full justify-start sm:w-auto sm:justify-center",
                children: r("p", {
                  className: "text-muted-foreground text-sm",
                  children: [
                    "Page ",
                    t.getState().pagination.pageIndex + 1,
                    " of",
                    " ",
                    t.getPageCount(),
                  ],
                }),
              }),
              r("div", {
                className: "flex items-center space-x-2",
                children: [
                  r(u, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0 lg:flex hidden",
                    onClick: () => t.setPageIndex(0),
                    disabled: !t.getCanPreviousPage(),
                    children: [
                      e("span", {
                        className: "sr-only",
                        children: "Go to first page",
                      }),
                      e(ce, { className: "h-4 w-4" }),
                    ],
                  }),
                  r(u, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0",
                    onClick: () => t.previousPage(),
                    disabled: !t.getCanPreviousPage(),
                    children: [
                      e("span", {
                        className: "sr-only",
                        children: "Go to previous page",
                      }),
                      e(me, { className: "h-4 w-4" }),
                    ],
                  }),
                  r(u, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0",
                    onClick: () => t.nextPage(),
                    disabled: !t.getCanNextPage(),
                    children: [
                      e("span", {
                        className: "sr-only",
                        children: "Go to next page",
                      }),
                      e(ue, { className: "h-4 w-4" }),
                    ],
                  }),
                  r(u, {
                    variant: "pagination",
                    size: "icon",
                    className: "h-8 w-8 p-0 lg:flex hidden",
                    onClick: () => t.setPageIndex(t.getPageCount() - 1),
                    disabled: !t.getCanNextPage(),
                    children: [
                      e("span", {
                        className: "sr-only",
                        children: "Go to last page",
                      }),
                      e(ge, { className: "h-4 w-4" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function tt({
  data: t,
  title: a,
  columns: s,
  inputKey: i,
  initialSort: l,
  facetOptions: o,
  bodyClassName: c,
  tableClassName: p,
  isLoading: m = !1,
  containerClassName: V,
  showColumnControl: D = !0,
  inputPlaceholder: T = "Filter anything...",
  onClickCell: _,
  handleRefreshTable: M,
}) {
  const y = h.useRef(null),
    [j, B] = h.useState({}),
    [G, A] = h.useState({ pageIndex: 0, pageSize: 10 }),
    [H, L] = h.useState(l ?? []),
    [U, $] = h.useState([]),
    [q, E] = h.useState({}),
    O = () => {
      y?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    x = Z({
      data: t,
      columns: s,
      state: {
        sorting: H,
        pagination: G,
        rowSelection: j,
        columnFilters: U,
        columnVisibility: q,
      },
      manualPagination: !0,
      enableRowSelection: !0,
      onSortingChange: L,
      onPaginationChange: A,
      onRowSelectionChange: B,
      onColumnFiltersChange: $,
      onColumnVisibilityChange: E,
      getCoreRowModel: Y(),
      getSortedRowModel: X(),
      getFacetedRowModel: W(),
      getFilteredRowModel: Q(),
      getFacetedUniqueValues: J(),
      globalFilterFn: K,
    });
  return r("div", {
    ref: y,
    className: n(
      "flex flex-col space-y-4 px-4 py-3 bg-background rounded-xl border border-neutral-lighter shadow-sm shadow-neutral-lighter",
      V,
    ),
    children: [
      e(je, {
        title: a,
        table: x,
        inputKey: i,
        facetOptions: o,
        inputPlaceholder: T,
        showColumnControl: D,
        handleRefreshTable: M,
      }),
      e(C, {}),
      r(we, {
        className: n("max-h-64 overflow-auto", p),
        children: [
          e(Ne, {
            children: x
              .getHeaderGroups()
              .map((S) =>
                e(
                  v,
                  {
                    children: S.headers.map((f) =>
                      e(
                        ye,
                        {
                          className: "text-sm leading-[16px] font-medium",
                          colSpan: f.colSpan,
                          children: f.isPlaceholder
                            ? null
                            : F(f.column.columnDef.header, f.getContext()),
                        },
                        f.id,
                      ),
                    ),
                  },
                  S.id,
                ),
              ),
          }),
          e(Ce, {
            className: n("max-h-64 overflow-auto mini-scrollbar", c),
            children: e(Se, {
              table: x,
              columns: s,
              isLoading: m,
              onClickCell: _,
            }),
          }),
        ],
      }),
      e(C, {}),
      e("div", {
        className: "w-full overflow-x-auto",
        children: e(Ee, { resetScroll: O, table: x }),
      }),
    ],
  });
}
function at({ className: t, ...a }) {
  return e("div", {
    "data-slot": "card",
    className: n(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      t,
    ),
    ...a,
  });
}
function rt({ className: t, ...a }) {
  return e("div", {
    "data-slot": "card-header",
    className: n(
      "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
      t,
    ),
    ...a,
  });
}
function nt({ className: t, ...a }) {
  return e("div", {
    "data-slot": "card-title",
    className: n("leading-none font-semibold", t),
    ...a,
  });
}
function st({ className: t, ...a }) {
  return e("div", {
    "data-slot": "card-description",
    className: n("text-muted-foreground text-sm", t),
    ...a,
  });
}
function ot({ className: t, ...a }) {
  return e("div", {
    "data-slot": "card-content",
    className: n("px-6", t),
    ...a,
  });
}
function lt({ className: t, ...a }) {
  return e("div", {
    "data-slot": "card-footer",
    className: n("flex items-center px-6 [.border-t]:pt-6", t),
    ...a,
  });
}
export { at as C, tt as D, rt as a, nt as b, ot as c, st as d, lt as e };
