import React from "react";
export class TimeWidget extends React.Component {
  constructor(props) {
    super(props);
    const then = new Date("2020, 3, 14");
    const today = new Date();
    const count = Math.abs(Math.round((today - then) / (1000 * 60 * 60 * 24)));
    this.state = {
      count: count,
    };
  }
  componentDidMount() {
    setInterval(() => {
      var today = new Date();
      var isTwelveHour, mins;
      var mins = today.getMinutes();
      var hours = today.getHours();
      if (hours - 12 > 0) {
        hours -= 12;
        isTwelveHour = true;
      }
      if (today.getMinutes() < 10) {
        mins = `0${today.getMinutes()}`;
      }
      var time = hours + ":" + mins + (isTwelveHour ? "pm" : "am");

      this.setState({
        time: time,
      });
    }, 1000);
  }
  render() {
    return (
      <div className="widget countdown fl w-25 pa2">
        <div className="heading">Local Time:</div>
        <div className="time">{this.state.time}</div>
        {/* <Skeleton variant="rect" width={210} height={118} /> */}
      </div>
    );
  }
}
