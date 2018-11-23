import React from "react";
import "./component-styles.scss";

export class BackgroundVideo extends React.Component {
  counter = 0;
  componentDidMount = () => {
    setTimeout(() => {
      document.getElementById(`vid-${this.counter}`).play();
    },5);

    setTimeout(()=>{
      document.getElementById(`vid-${this.counter}`).style.opacity = 0.3;

      document.getElementsByClassName("title-content")[0].style.opacity = 1;
      document.getElementsByClassName("keyboard-wrapper")[0].style.opacity = 1;

      
    }, 300);
    
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
        id={`vid-${this.counter}`}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }}
          src={this.props.src}
          autoPlay={true}
          muted="muted"
          loop
        />
      </div>
    );
  }
}
