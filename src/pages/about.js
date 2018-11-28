import React from "react";
import cx from "classnames";
import {
  AboutIcon,
  OverviewIcon,
  DepositIcon,
  WithdrawIcon,
  TransferIcon,
  SummaryIcon,
  LoanIcon,
  CurrencyExchangeIcon
} from "./../icons/menuicons";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  AppBar,
  CssBaseline,
  Paper
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
  <div>
    <p>
      Bankr is a web application that is built to replace your banker.
      Convienience for all your banking needs should be a first priority. By
      automating appropriate banking experiences, you can do things on YOUR time
      and Bankr will do the heavy lifting for you.
    </p>
    <Paper className="bankr-paper implementation">
      <h2>Implementation</h2>
      <p>
        Bankr was built using Git (with Github), Gatsby.js (incl. webpack,
        browsersync), ReactJS, SCSS and Google Material UI.
      </p>
      <p style={{fontSize: "0.7em", marginTop: "1.2em"}}>
        Gatsby.js gets the project running quickly with a development server and
        Github facilitates the collaboration effort. ReactJS is being used to
        manage states (bank accounts) on the front end (on refresh all changes
        are lost). Pages are build from custome ReactJS components that depend
        on smaller Material UI components (buttons, input, etc). Building on
        Material UI helps cut down time of development because their styles
        closely aligned with Bankr wireframes making them a stellar foundation.
        Our custom styles for pages, layouts and custom icons are controlled
        with our custom SCSS sheets.
      </p>
    </Paper>
  </div>
);

var about = (
  <div>
    <p>Bankr makes it possible to do your everyday banking ANYTIME.</p>
    <Paper className="bankr-paper features">
      <h2>Features</h2>
      <p>Bankr has lots of features so you can bank better. AND faster.</p>
      <ul>
        <li>
          <SummaryIcon />
          The user shall have the ability to check/display account balances{" "}
        </li>
        <li>
          <WithdrawIcon />
          The user shall have the ability to withdraw cash from any of their
          accounts
        </li>
        <li>
          <DepositIcon />
          The user shall have the ability to deposit cash into any of their
          accounts
        </li>
        <li>
          <TransferIcon />
          The user shall be able to transfer money between accounts{" "}
        </li>
        <li>
          <LoanIcon />
          The user shall be able to submit a loan form during their banking
          session
        </li>
        <li>
          <CurrencyExchangeIcon />
          The user shall be able to view their balances in different currencies{" "}
        </li>
      </ul>
    </Paper>
    <Paper className="bankr-paper footer">
      <svg x="0px" y="0px" viewBox="0 0 286.054 286.054">
        <path
          style={{ fill: "#94d7a0" }}
          d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027   c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236   c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209   S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972   c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723   c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843   C160.878,195.732,152.878,187.723,143.036,187.723z"
        />
      </svg>
      <p>
        Bankr is built on top of Google's{" "}
        <a href="https://material-ui.com">Material UI Library</a>.
      </p>
    </Paper>
  </div>
);

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
  };

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
