import React, { Component } from "react";
import Leftpanel from "./Leftpanel";
import RightPanel from "./RightPanel";
import { Container } from "@material-ui/core";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="mainContainer">
        <Leftpanel />
        <RightPanel />
      </Container>
    );
  }
}

export default Dashboard;
