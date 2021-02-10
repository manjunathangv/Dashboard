import React from "react";
import { makeStyles } from "@material-ui/styles";
import moreicon from "../assets/more.png";
const useStyles = makeStyles({
  report: {
    padding: "20px 10px 0px",
    "& .todos": {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      "&  .todoCard": {
        borderRadius: "6px",
        border: "1px solid #e0d6d6",
        background: "#f8f8f8",
        width: "75%",
        position: "relative",
        padding: "12px",
        "& img": {
          position: "absolute",
          top: "20px",
          right: "15px"
        },
        "& h2": {
          margin: "0px",
          fontSize: "16px",
          color: "#191919",
          marginBottom: "5px",
          fontWeight: "500"
        },
        "& span": {
          fontSize: "14px",
          color: "#9a9898"
        }
      },
      "& .todoDate": {
        width: "20%",
        "& > div:first-child": {
          fontWeight: "bold",
          fontSize: "28px"
        },
        "& > div": {
          color: "#000",
          textAlign: "center"
        }
      }
    },
    "& .active .todoDate": {
      "& > div": {
        color: "#382f9c !important"
      }
    },
    "& .todos.active .todoCard": {
      background: "#fff"
    }
  }
});
export default function Todo() {
  const classes = useStyles();
  return (
    <div className={classes.report}>
      <div className="todos active">
        <div className="todoDate">
          <div>28</div>
          <div>May</div>
        </div>
        <div className="todoCard">
          <h2>Revamp Instgram app</h2>
          <span>Today</span>
          <img src={moreicon} alt="more"></img>
        </div>
      </div>
      <div className="todos">
        <div className="todoDate">
          <div>28</div>
          <div>May</div>
        </div>
        <div className="todoCard">
          <h2>Revamp Instgram app</h2>
          <span>Today</span>
          <img src={moreicon} alt="more"></img>
        </div>
      </div>
      <div className="todos">
        <div className="todoDate">
          <div>28</div>
          <div>May</div>
        </div>
        <div className="todoCard">
          <h2>Revamp Instgram app</h2>
          <span>Today</span>
          <img src={moreicon} alt="more"></img>
        </div>
      </div>
    </div>
  );
}
