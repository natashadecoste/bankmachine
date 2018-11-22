import React from "react";
import { Drawer, Divider, List, ListItem, ListItemText, AppBar} from '@material-ui/core/';
import Helmet from 'react-helmet';
import "./layouts.scss";

import { createMuiTheme } from '@material-ui/core/styles/createMuiTheme';

//import createMuiTheme from 'material-ui/styles/createMuiTheme'

// export default createMuiTheme({
//   palette: {
//     primary: purple,
//     secondary: green,
//     error: red,
//   },
// })


// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: '#bbdefb',
//         },
//         secondary: {
//             main: '#0d47a1',
//         },
//     },
//     typography: {
//         useNextVariants: true,
//     },
//   });

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

const drawerWidth = 250;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: 50,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  }
});

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
      <div className="page-layout">
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
      <AppBar className="top-bar" position="fixed" style={styles.appBar}> Logo </AppBar>
      <Drawer
        style={styles.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: styles.drawerPaper}}>
                <div className="headspace" />
                <Divider />
                <List>
                  {information.map((item, index) => (
                        <ListItem
                          key={`menu--${index}`}
                          onClick={this.updateInfo}
                        >
                        <ListItemText primary={item.title}/>
                        </ListItem>
                      ))}

                </List>
        </Drawer>
        <main style={styles.content} className="content">
          <h1>{information[this.state.currentPage].title}</h1>
          <p>{information[this.state.currentPage].information}</p>
        </main>

      {/* {this.props.children} */}
    </div>
    );
  }
}





// <div>
// <ul id="slide-out" className="sidenav">
//   {information.map((item, index) => (
//     <li
//       className="menu-item"
//       onClick={this.updateInfo}
//       key={`menu--${index}`}
//     >
//       {item.title}
//     </li>
//   ))}
// </ul>
// </div>
// <div className="section-container">
// <h1>{information[this.state.currentPage].title}</h1>
// <p>{information[this.state.currentPage].information}</p>
// </div>