import * as React from "react";
import { render } from "react-dom";
//import { CountdownWidget } from "./widgets/countdown";
import { WeatherWidgetSingle } from "./widgets/weatherSingle";
import { ToDoList } from "./widgets/ToDoList";
import { TimeWidget } from "./widgets/time";

const widgets = [<TimeWidget />, <WeatherWidgetSingle />];
render(widgets, document.getElementById("root"));
if (module.hot) {
  module.hot.accept();
}
