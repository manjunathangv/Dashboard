import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button } from "@material-ui/core";
import moreicon from "../assets/more.png";
import Tabletimesheet from "./Table";
import Report from "./Report";
import Screenshots from "./Screenshots";
import Todo from "./Todo";
const useStyles = makeStyles({
  RightPanel: {
    width: "80vw",
    paddingTop: "10px",
    background: "#fff",
    marginTop: "25px",
    "& > .leftgrid": {
      borderRight: "1px solid #f1e5e5",
      borderTop: "1px solid #f1e5e5",

      padding: "12px",
      overflow: "auto"
    },
    "& > .buttoncontainer": {
      display: "flex",
      justifyContent: "space-between",
      padding: "19px 32px"
    },
    "& > .rightgrid": {
      borderTop: "1px solid #f1e5e5",

      padding: "12px",
      overflow: "auto"
    },
    "&  h5": {
      margin: "0px",
      paddingLeft: "20px",
      position: "relative",
      "& img": {
        position: "absolute",
        right: "0px",
        top: "10px"
      },
      "& button": {
        fontSize: "10px",
        background: "#e9e8f4",
        color: "#3e359f",
        fontWeight: "700",
        position: "absolute",
        right: "30px",
        top: "-2px"
      }
    }
  }
});

export default function RightPanel(props) {
  console.log(props.todos);
  const classes = useStyles();
  return (
    <Grid className={classes.RightPanel} container>
      <Grid item xs={12} className="buttoncontainer">
        <Button variant="contained">Dropdown</Button>
        <Button
          variant="contained"
          style={{
            background: "#e9e8f4",
            color: "#3e359f",
            fontWeight: "bold"
          }}
        >
          +Add Project
        </Button>
      </Grid>
      <Grid item xs={8} className="leftgrid">
        <h5>
          Timesheet <Button>View Full Sheet</Button>
          <img src={moreicon} alt="more"></img>
          <Tabletimesheet />
        </h5>
      </Grid>
      <Grid item xs={4} className="rightgrid">
        <h5>Report</h5>
        <Report />
      </Grid>
      <Grid item xs={8} className="leftgrid">
        <h5>To-Do lists</h5>
        <Todo
          todos={props.todos}
          addtodo={props.addtodo}
          removetodo={props.removetodo}
        />
      </Grid>
      <Grid item xs={4} className="rightgrid">
        <h5>Screenshots</h5>
        <Screenshots />
      </Grid>
    </Grid>
  );
}
