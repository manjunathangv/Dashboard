import React from "react";
import { makeStyles } from "@material-ui/styles";
import video_camera from "../assets/video_camera.png";
import picture from "../assets/picture.png";
const useStyles = makeStyles({
  report: {
    padding: "20px 10px 0px",
    "& > div": {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      marginBottom: "25px",
      "& button": {
        background: "#f0eff8",
        color: "#433ba1",
        borderRadius: "4px",
        fontSize: "12px",
        border: "none",
        padding: "6px 10px"
      },
      "& button.video": {
        background: "#382f9c",
        color: "#fff"
      }
    }
  }
});
export default function Report() {
  const classes = useStyles();
  return (
    <div className={classes.report}>
      <div>
        {" "}
        <img src={picture} alt="pictureicon"></img>
        <div className="title">shot_1_attach.png</div>
        <button>View</button>
      </div>
      <div>
        {" "}
        <img src={picture} alt="pictureicon1"></img>
        <div className="title">shot_2_attach.png</div>
        <button>View</button>
      </div>
      <div>
        {" "}
        <img src={video_camera} alt="video_camera"></img>
        <div className="title">Screen record.mov</div>
        <button className="video">play</button>
      </div>
    </div>
  );
}
