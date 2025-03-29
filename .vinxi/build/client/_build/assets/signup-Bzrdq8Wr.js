import { j as a, u as m, t as u } from "./client-B6Fwjkna.js";
import { I as r, B as i } from "./input-CHU7cpM5.js";
import { u as c, a as d, L as h, p as x } from "./index-B1QYg5Sc.js";
const f = function () {
  const { mutate: t, isPending: l } = c({
      mutationKey: ["login"],
      mutationFn: x,
      onSuccess: (e) => {},
      onError: (e) => {
        const n = e;
        console.error("Login error", n.response?.data.data),
          u("An error occured", {
            description: n.response?.data.data,
            descriptionClassName: "!text-neutral-700",
          });
      },
    }),
    { handleSubmit: o, Field: s } = d({
      defaultValues: { username: "", email: "", password: "" },
      onSubmit: async ({ value: e }) => {
        t(e);
      },
      validators: { onChange: m },
    });
  return a.jsxs("div", {
    className: "w-full h-screen flex flex-row",
    children: [
      a.jsx("div", { className: "lg:w-1/2 lg:flex hidden bg-primary" }),
      a.jsxs("div", {
        className:
          "relative flex lg:w-1/2 w-full h-full items-center justify-center",
        children: [
          a.jsx("img", {
            src: "/lumon.png",
            alt: "lumon logo",
            className: "absolute top-0 left-0 w-16 h-16 object-cover",
          }),
          a.jsxs("form", {
            onSubmit: (e) => {
              e.preventDefault(), e.stopPropagation(), o();
            },
            className: "flex w-[320px] items-start flex-col gap-4",
            children: [
              a.jsx("h1", {
                className: "text-2xl text-center font-semibold mb-2",
                children: "Sign Up",
              }),
              a.jsxs("div", {
                className: "w-full flex flex-col gap-3",
                children: [
                  a.jsx(s, {
                    name: "username",
                    children: (e) =>
                      a.jsx(a.Fragment, {
                        children: a.jsx(r, {
                          id: e.name,
                          label: "Username",
                          placeholder: "username",
                          name: e.name,
                          value: e.state.value,
                          onBlur: e.handleBlur,
                          onChange: (n) => e.handleChange(n.target.value),
                          fieldInfo: e,
                        }),
                      }),
                  }),
                  a.jsx(s, {
                    name: "email",
                    children: (e) =>
                      a.jsx(a.Fragment, {
                        children: a.jsx(r, {
                          id: e.name,
                          label: "Email",
                          type: "email",
                          placeholder: "Email",
                          name: e.name,
                          value: e.state.value,
                          onBlur: e.handleBlur,
                          onChange: (n) => e.handleChange(n.target.value),
                          fieldInfo: e,
                        }),
                      }),
                  }),
                  a.jsx(s, {
                    name: "password",
                    children: (e) =>
                      a.jsx(a.Fragment, {
                        children: a.jsx(r, {
                          id: e.name,
                          label: "Password",
                          type: "password",
                          placeholder: "Password",
                          name: e.name,
                          value: e.state.value,
                          onBlur: e.handleBlur,
                          onChange: (n) => e.handleChange(n.target.value),
                          fieldInfo: e,
                        }),
                      }),
                  }),
                  a.jsxs(h, {
                    to: "/login",
                    className: "text-xs",
                    children: [
                      "Already have an account? ",
                      a.jsx("span", {
                        className: "text-primary",
                        children: "Login here",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx(i, {
                isLoading: l,
                className: "w-full",
                children: "Login",
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
export { f as component };
