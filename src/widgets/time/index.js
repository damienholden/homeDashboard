import React from "react";
export class TimeWidget extends React.Component {
  constructor(props) {
    super(props);
    const then = new Date("2020, 3, 14");
    const today = new Date();
    const count = Math.abs(Math.round((today - then) / (1000 * 60 * 60 * 24)));
    this.state = {
      count: count
    };
  }
  componentDidMount() {
    setInterval(() => {
      var today = new Date();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      this.setState({
        time: time
      });
    }, 1000);
  }
  render() {
    return (
      <div className="widget countdown fl w-25 pa2">
        <div className="heading">Time</div>
        <div className="time">{this.state.time}</div>
        {/* <Skeleton variant="rect" width={210} height={118} /> */}
      </div>
    );
  }
}
