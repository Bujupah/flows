import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import RootComponent from "./root.component.js";

import plugin from "./plugin.json";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootComponent,
  domElementGetter,
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];

export const unload = [reactLifecycles.unload];

function domElementGetter() {
  let el = document.getElementById(plugin.id);
  if (!el) {
    el = document.createElement("div");
    el.id = plugin.id;
    document.body.appendChild(el);
  }

  return el;
}
