import * as isActive from "./activity.js";
import * as singleSpa from "single-spa";

singleSpa.registerApplication(
  "flow-navbar-ui",
  () => SystemJS.import("@portal/flow-navbar-ui"),
  isActive.navbar
);

singleSpa.registerApplication(
  "flow-fetch-service",
  () => SystemJS.import("@portal/flow-fetch-service"),
  true
);

singleSpa.start();
