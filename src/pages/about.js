import React from "react";
import { Page } from "./../layouts/page";
import "./sidebar.scss";
import { Helmet } from "react-helmet";

var information = [
  {
    title: "Overview",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nibh, hendrerit in dolor in, porta volutpat ligula. Morbi est augue, bibendum non neque ac, pretium eleifend sapien. Vestibulum nec nunc et neque venenatis dignissim in in mauris. Integer eget justo efficitur, tempus risus vitae, pretium metus. Vivamus vitae laoreet massa. Duis tellus lacus, dictum id laoreet quis, tristique at diam. Pellentesque faucibus ante a enim aliquam convallis. Donec nec purus tortor. Quisque ligula sem, dapibus semper malesuada at, aliquam ut eros. Quisque egestas mauris id porttitor sodales. Suspendisse fermentum lobortis finibus. Nullam ullamcorper, arcu at accumsan ultricies, eros tellus lacinia libero, eget tristique purus ligula in urna. Curabitur id lectus a sem fringilla mollis. Donec euismod eros ipsum, eget commodo velit maximus sit amet. Fusce malesuada condimentum enim, a ullamcorper ligula mollis sed."
  },
  {
    title: "About",
    information:
      "Mauris vitae dui sed augue consectetur porttitor at sed nulla. Donec luctus vel quam at sodales. Donec dignissim risus pharetra nisi interdum auctor. Morbi non condimentum quam, faucibus lacinia ante. Phasellus arcu mi, ullamcorper non felis sit amet, sollicitudin vehicula risus. Fusce eu lacus tempor, placerat felis ut, condimentum orci. Donec malesuada sapien at justo fringilla, eget commodo risus lacinia. Suspendisse potenti. Nullam aliquet elementum elit, id tincidunt nulla sollicitudin eu."
  }
];

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }
  updateInfo = stateChange => {
    var index = information
      .map(function(info) {
        return info.title;
      })
      .indexOf(stateChange.target.textContent);
    this.setState({
      currentPage: index
    });
  };

  render() {
    return (
      <Page>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About PARKr</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Helmet>
        <div>
          <ul id="slide-out" className="sidenav">
            {information.map((item, index) => (
              <li
                className="menu-item"
                onClick={this.updateInfo}
                key={`menu--${index}`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="section-container">
          <h1>{information[this.state.currentPage].title}</h1>
          <p>{information[this.state.currentPage].information}</p>
        </div>
      </Page>
    );
  }
}
