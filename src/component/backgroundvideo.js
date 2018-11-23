import React from "react";
import "./component-styles.scss";

export class BackgroundVideo extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
        this.videoNode.play();
    },
        100
    )
    //console.log(document.getElementById("vid")); //.play();
  };

  render() {
    return (
      <div
        className="background-video"
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "100%",
          overflow: "hidden"
        }}
      >
        <video
        id="vid"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }}
          src={this.props.src}
          ref={node => (this.videoNode = node)}
        />
      </div>
    );
  }
}
