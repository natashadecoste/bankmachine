import React from "react";
import { Summary, Deposit, Transfer, Withdraw, Exit } from "./../component/";
import { SummaryIcon, DepositIcon, TransferIcon, WithdrawIcon} from "./../icons/menuicons"
import { Drawer, Divider, List, ListItem, ListItemText, AppBar} from '@material-ui/core/';
import { Logo} from "./../icons/bankrlogo"
import CssBaseline from "@material-ui/core/CssBaseline";
import Helmet from 'react-helmet';
import "./layouts.scss";


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

const pages = ["deposit", "withdraw","transfer", "summary"];


export default class Session extends React.Component {
  account1 = { balance: 400, name: "Chequeing" };
  account2 = { balance: 150, name: "Savings" };
  accounts = [this.account1, this.account2];

  constructor(props) {
    super(props);
    this.state = { currentPage: "withdraw" };

  }

  widthdrawAmount = (amount, account) => {
    // taking away the amount from an account
    console.log(amount);
    console.log(account);
  }

  updatePage = pagename => {
    var x = pagename.target.textContent;
    this.setState({
      currentPage: x
    });

  }

  render() {
    return (
      <div className="page-layout">
      <CssBaseline />
      <Helmet>
        <meta charSet="utf-8" />
        <title>PARKr Session</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <AppBar className="top-bar" position="fixed" style={styles.appBar}><Logo/>
      <Exit id="exit"/>
      </AppBar>
      <Drawer
        style={styles.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: styles.drawerPaper}}>
                <div className="headspace" />
                <Divider />
                <List>
                  {pages.map((item, index) => (
                        <ListItem
                          className="side-bar-item"
                          key={`menu--${index}`}
                          onClick={this.updatePage}
                        >
                        {item === "deposit" && <DepositIcon/>}
                        {/* {item === "deposit" && <Logo/>} */}
                        {item === "summary" && <SummaryIcon/>}
                        {item === "transfer" && <TransferIcon/>}
                        {item === "withdraw" && <WithdrawIcon/>}
                        <ListItemText primary={item}/>
                        </ListItem>
                      ))}

                </List>
        </Drawer>
        <main style={styles.content} className="content">
                 {this.state.currentPage === ("summary" ) && (
                    <Summary accounts={this.accounts} />
                  )}
                  {this.state.currentPage === "deposit" && (
                    <Deposit accounts={this.accounts} />
                  )}
                  {this.state.currentPage === "transfer" && (
                    <Transfer accounts={this.accounts} />
                  )}
                  {this.state.currentPage === "withdraw" && (
                    <Withdraw accounts={this.accounts} />
                  )}
        </main>
        </div>
    
      
    );
  }
}
