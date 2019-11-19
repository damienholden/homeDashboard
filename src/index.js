import * as React from "react";
import { render } from "react-dom";
import { CountdownWidget } from "./widgets/countdown";
import { WeatherWidget } from "./widgets/weather";
const widgets = [<CountdownWidget />, <WeatherWidget />];
render(widgets, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
