import React from "react";
import { makeStyles } from "@material-ui/styles";
import pdficon from "../assets/pdf.png";
import graph from "../assets/graph.png";
import time from "../assets/timer_blue.png";
const useStyles = makeStyles({
  report: {
    padding: "20px 10px 0px",
    "& .card": {
      minHeight: "70px",
      borderRadius: "8px",
      background: "#382f9c",
      display: "flex",
      alignItems: "center",
      paddingLeft: "15px",
      color: "#fff",
      position: "relative",
      "& span": {
        fontSize: "10px",
        opacity: "0.5"
      },
      "& img": {
        marginRight: "15px"
      },
      "& h3": {
        margin: "0px"
      },
      "& .progress": {
        position: "absolute",
        right: "15px",
        fontSize: "12px",
        background: "#39c084",
        padding: "2px 10px",
        borderRadius: "4px"
      }
    },
    "& .card.card1": {
      margin: "15px 0px",
      background: "#f4f4f4",
      "& span": {
        color: "#a4a4a4",
        fontWeight: "bold"
      },
      "& h3": {
        color: "#000"
      },
      "& .progress": {
        background: "#eecfcf",
        color: "red"
      }
    },
    "& button": {
      borderRadius: "4px",
      minHeight: "35px",
      width: "100%",
      background: "#fff",
      border: "1px solid #f4f4f4",
      padding: "5px",
      color: "#382f9c",
      textTransform: "uppercase",
      fontSize: "10px",
      fontWeight: "600",
      margin: "25px 0px",
      "& img": {
        verticalAlign: "middle",
        marginRight: "5px"
      }
    }
  }
});
export default function Report() {
  const classes = useStyles();
  return (
    <div className={classes.report}>
      <div className="card">
        <img src={graph} alt="graph"></img>
        <div>
          <span>weekly activity</span>
          <h3>53%</h3>
        </div>
        <div className="progress"> 17% </div>
      </div>
      <div className="card card1">
        <img src={time} alt="time"></img>
        <div>
          <span>Worked This Week</span>
          <h3>10:20:23</h3>
        </div>
        <div className="progress"> 17% </div>
      </div>
      <button>
        {" "}
        <img src={pdficon} alt="pdficon"></img> Export as pdf
      </button>
    </div>
  );
}
