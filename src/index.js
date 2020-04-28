import * as React from "react";
import { render } from "react-dom";
import { CountdownWidget } from "./widgets/countdown";
import { WeatherWidget } from "./widgets/weather";
import { TimeWidget } from "./widgets/time";

const widgets = [<TimeWidget />];
//<CountdownWidget />
render(widgets, document.getElementById("root"));
if (module.hot) {
  module.hot.accept();
}
