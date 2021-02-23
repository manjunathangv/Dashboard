import React from "react";
import logo from "../assets/logo.png";
import speedometer from "../assets/speedometer.png";
import graph from "../assets/graph.png";
import timer_white from "../assets/timer_white.png";
import bill from "../assets/bill.png";
import folder from "../assets/folder.png";
import calender from "../assets/icons8-today-96.png";
import help from "../assets/help.png";
import download from "../assets/download.png";
import notification from "../assets/notification.png";
import settings from "../assets/settings.png";
import profile from "../assets/profile.jpg";
import sidebar_overlay from "../assets/sidebar_overlay.png";

import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  leftpanel: {
    height: "100vh",
    width: "20vw",
    backgroundColor: "#382f9c",
    backgroundImage: `url(${sidebar_overlay})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom",
    position: "relative",
    "& > ul ": {
      listStyle: "none",
      color: "#fff",
      fontSize: "14px",
      marginBottom: "25px",
      paddingLeft: "0px",
      "& > li": {
        marginBottom: "20px",
        opacity: "0.5"
      }
    }
  }
});

export default function Leftpanel() {
  const classes = useStyles();
  return (
    <div className={classes.leftpanel}>
      <div className="closeicon">
        <div></div>
      </div>
      <img src={logo} alt="logo" className="logo" />
      <ul className="dashboarditems">
        <li className="active">
          <img src={speedometer} alt="speedometer" className="panelicons" />
          Dashboard
        </li>
        <li>
          <img src={graph} alt="graph" className="panelicons" />
          Activity
        </li>
        <li>
          <img src={timer_white} alt="timer_white" className="panelicons" />
          Timeline
        </li>
        <div className="divider"></div>
      </ul>

      <ul className="dashboarditems">
        <li className="">
          <img src={calender} alt="speedometer" className="panelicons" />
          To-Do
        </li>
        <li>
          <img src={bill} alt="graph" className="panelicons" />
          Invoices
        </li>
        <li>
          <img src={folder} alt="timer_white" className="panelicons" />
          Projects
        </li>
        <div className="divider"></div>
      </ul>

      <ul className="dashboarditems">
        <li className="">
          <img src={help} alt="help" className="panelicons" />
          Help
        </li>
        <li>
          <img src={download} alt="download" className="panelicons" />
          Download App
        </li>
      </ul>
      <div className="bottomdashboarditems">
        <div style={{ position: "relative" }}>
          <img src={notification} alt="notification" />
          <div className="notificationcount">2</div>
        </div>
        <div>
          <img src={settings} alt="settings" />
        </div>
        <div>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
}
