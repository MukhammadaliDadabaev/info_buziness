import React from "react";
import Office from "../../layouts/office/Office";
import ReactPlayer from "react-player";
import { NET } from "../../network";

const Video = () => {
  return (
    <Office>
      <ReactPlayer
        url={`${NET.WEB_URL}/video.mp4`}
        // url={"https://youtu.be/1_RCjJWUf_w"}
        playing={true}
        controls={true}
        width="75%"
        height="75%"
      />
    </Office>
  );
};

export default Video;
