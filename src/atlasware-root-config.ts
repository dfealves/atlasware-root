import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@atlasware/login-mfe",
  app: () =>
    System.import("@atlasware/login-mfe"),
  activeWhen: (location) => location.pathname === '/login',
});

registerApplication({
  name: "@atlasware/dashboard-mfe",
  app: () =>
    System.import("@atlasware/dashboard-mfe"),
  activeWhen: ["/dashboard"],
});

// registerApplication({
//   name: "@atlasware/navbar",
//   app: () => System.import("@atlasware/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
