import React, { Component } from "react";
import Clock from "react-live-clock";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <Clock
          ticking={true}
          format={"dddd, MMMM Mo, YYYY | hh:mm:ss A"}
          style={{ fontSize: "3em" }}
        />
      </div>
    );
  }
}

export default DashBoard;
