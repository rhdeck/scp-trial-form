//#eslint-disable-file
(function (r) {
  typeof define == "function" && define.amd ? define(r) : r();
})(function () {
  "use strict";
  var g = Object.defineProperty;
  var l = Object.getOwnPropertySymbols;
  var p = Object.prototype.hasOwnProperty,
    y = Object.prototype.propertyIsEnumerable;
  var c = (r, a, e) =>
      a in r
        ? g(r, a, { enumerable: !0, configurable: !0, writable: !0, value: e })
        : (r[a] = e),
    w = (r, a) => {
      for (var e in a || (a = {})) p.call(a, e) && c(r, e, a[e]);
      if (l) for (var e of l(a)) y.call(a, e) && c(r, e, a[e]);
      return r;
    };
  var h = (r, a, e) =>
    new Promise((d, s) => {
      var m = (n) => {
          try {
            o(e.next(n));
          } catch (i) {
            s(i);
          }
        },
        f = (n) => {
          try {
            o(e.throw(n));
          } catch (i) {
            s(i);
          }
        },
        o = (n) => (n.done ? d(n.value) : Promise.resolve(n.value).then(m, f));
      o((e = e.apply(r, a)).next());
    });
  const r = (d) => {
      document.readyState !== "loading"
        ? d()
        : document.addEventListener("DOMContentLoaded", d);
    },
    a = (d = []) => {
      const [s, ...m] = d;
      let f = !0;
      switch (s) {
        case "init":
          const o = w(
            {
              target: "#reform-embed",
              background: "default",
              onFormSubmitted: function () {},
              onFormLoaded: function () {},
            },
            m[0] ? m[0] : {}
          );
          if (!o.url) throw new Error("Reform url is required.");
          if (!["default", "transparent"].includes(o.background))
            throw new Error(
              "'background' must be either 'default' or 'transparent'"
            );
          const n = new URL(o.url).pathname.split("/").filter((t) => t)[1],
            i = document.createElement("iframe");
          (i.src = o.url),
            (i.style.display = "block"),
            (i.style.width = "100%"),
            (i.style.height = "100%"),
            (i.style.border = "0");
          const u = document.querySelector(o.target);
          (u.style.width = "100%"),
            u.appendChild(i),
            window.addEventListener("message", (t) =>
              h(this, null, function* () {
                t.data.sender === "reform" &&
                  t.data.form === n &&
                  (t.data.height &&
                    t.data.type !== "page.resized" &&
                    ((i.style.height = t.data.height + "px"),
                    f || u.scrollIntoView(!0)),
                  t.data.type === "page.resized" &&
                    (i.style.height = t.data.height + "px"),
                  t.data.redirect &&
                    (yield o.onFormSubmitted(t.data.answers),
                    (window.location = t.data.location)),
                  t.data.type === "page.changed" && (f = !1),
                  t.data.type === "loaded" &&
                    ((i.style.backgroundColor =
                      o.background === "transparent" ? "transparent" : "white"),
                    f && o.onFormLoaded()),
                  t.data.type === "form.submitted" &&
                    (yield o.onFormSubmitted(t.data.answers)));
              })
            );
      }
    };
  (window.Reform =
    window.Reform ||
    function () {
      (Reform.q = Reform.q || []).push(arguments);
    }),
    r(() => {
      const d = window.Reform.q || [];
      (window.Reform = (...s) => a(s)),
        d.forEach((s) => {
          window.Reform.apply(null, Array.from(s));
        });
    });
  const e = {
    init: (d) => {
      Reform("init", { url: d, target: "#reform-embed" });
    },
  };
  window.reform = e;
});
