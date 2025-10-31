import { g as c } from "./index-DSc-2N8p.js";
function f(t, i) {
  for (var o = 0; o < i.length; o++) {
    const e = i[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e) if (r !== "default" && !(r in t)) {
        const s = Object.getOwnPropertyDescriptor(e, r);
        s && Object.defineProperty(t, r, s.get ? s : { enumerable: true, get: () => e[r] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var n, u;
function b() {
  return u || (u = 1, n = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
  }), n;
}
var a = b();
const w = c(a), p = f({ __proto__: null, default: w }, [a]);
export {
  p as b
};
