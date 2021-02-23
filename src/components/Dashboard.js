import React, { Component } from "react";
import Leftpanel from "./Leftpanel";
import RightPanel from "./RightPanel";
import { Container } from "@material-ui/core";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          date: 28,
          month: "may",
          title: "Revamp Instgram app"
        },
        {
          date: 29,
          month: "may",
          title: "Revamp Instgram app"
        },
        {
          date: 30,
          month: "Jan",
          title: "Revamp Instgram app"
        }
      ]
    };
  }
  addTodo = () => {
    console.log("added");
    let newtodos = this.state.todos;
    newtodos.unshift({
      date: 31,
      month: "Dec",
      title: "Revamp Gpay  app"
    });
    this.setState({ todos: newtodos });
  };
  removetodo = index => {
    console.log("remove todo" + index);
    let newtodos = this.state.todos.filter((item, i) => {
      return index !== i;
    });
    this.setState({ todos: newtodos });
  };
  render() {
    return (
      <Container className="mainContainer">
        <Leftpanel />
        <RightPanel
          todos={this.state.todos}
          addtodo={this.addTodo}
          removetodo={this.removetodo}
        />
      </Container>
    );
  }
}

export default Dashboard;
