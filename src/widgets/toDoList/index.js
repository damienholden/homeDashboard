import React from "react";
import { check } from "prettier";
export class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div className="widget toDoList fl-ns w-90 w-25-ns ma2-ns pa2 center">
        <h2 className="ma0 mb2">ToDo:</h2>
        <input
          type="text"
          placeholder="What do you need to do?"
          className="db input-reset ba b--black-20 pa2 mb2 db w-100"
        />
        <a
          class="ma3 f6 link dim br2 ba bw1 ph3 pv2 mb2 dib white center"
          href="#"
        >
          Add
        </a>
        <div className="list"></div>
      </div>
    );
  }
}
