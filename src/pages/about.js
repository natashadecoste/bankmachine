import React from "react";
import cx from "classnames";
import { AboutIcon, OverviewIcon } from "./../icons/menuicons";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  AppBar,
  CssBaseline
} from "@material-ui/core/";
import { Exit } from "./../component/";
import { Logo } from "./../icons/bankrlogo";
import Helmet from "react-helmet";
import "./layouts.scss";
import "./../component/component-styles.scss";

import { createMuiTheme } from "@material-ui/core/styles/createMuiTheme";

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
var overview = (
  <p>
    Bankr is a web application that is built to replace your banker.
    Convienience for all your banking needs should be a first priority. By
    automating appropriate banking experiences, you can do things on YOUR time
    and Bankr will do the heavy lifting for you.
  </p>
);

var about = <p>Bankr makes it possible to do your everyday banking ANYTIME.</p>;

var information = [
  {
    title: "Meet Your New Bankr",
    page: "overview",
    information: overview
  },
  {
    title: "What Can I Do With Bankr?",
    page: "about",
    information: about
  }
];

const drawerWidth = 250;
const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: 50
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "overview"
    };
  }

  updateInfo = stateChange => {
    var x = stateChange.target;
    var y;
    if (x.nodeName === "path") {
      y = x.parentElement;
      y = y.getAttribute("data");
    } else if (x.nodeName === "svg") {
      y = x.getAttribute("data");
    } else {
      y = x.textContent;
    }

    this.setState({
      currentPage: y
    });


  };

  getIndex = () => {
    var set = this.state.currentPage;
    var index = information
      .map(function(info) {
        return info.page;
      })
      .indexOf(set);
    return index;
  }

  render() {
    return (
      <div className="section-container page-layout">
        <CssBaseline />
        <Helmet>
          <meta charSet="utf-8" />
          <title>About BANKr</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Helmet>
        <AppBar className="top-bar" position="fixed" style={styles.appBar}>
          <Logo />
          <Exit id="exit" />
        </AppBar>
        <Drawer
          style={styles.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: styles.drawerPaper }}
        >
          <div className="headspace" />
          <Divider />
          <List>
            {information.map((item, index) => (
              <ListItem
                className={cx("side-bar-item", {
                  active: this.state.currentPage === item.page
                })}
                key={`menu--${index}`}
                onClick={this.updateInfo}
              >
                {item.page === "about" && <AboutIcon />}
                {item.page === "overview" && <OverviewIcon />}
                <ListItemText primary={item.page} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main style={styles.content} className="content">
          <h1>{information[this.getIndex()].title}</h1>
          <div>{information[this.getIndex()].information}</div>
        </main>
      </div>
    );
  }
}
