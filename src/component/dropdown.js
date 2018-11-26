import React from "react";
import "./component-styles.scss";
import {
  ListItem,
  List,
  ListItemText,
  Button,
  Popover
} from "@material-ui/core/";
import cx from "classnames";
import { Chevron } from "../icons/chevron";

export class Dropdown extends React.Component {
  anchorEl;
  constructor(props) {
    super(props);
    var selectedItem = props.selected ? props.selected : props.list[0];
    this.state = {
      selected: selectedItem,
      openList: false
    };
  }

  clickHandler = item => {
    if (this.props.select) {
      // we want to select it within the dropdown AND within the PARENT component
      this.props.select(item); // parent selection
      this.setState({
        selected: item
      });
      this.toggleList(false);
    }
  };

  toggleList = (event, state) => {
    this.anchorEl = event.currentTarget;
    if (state) {
      this.setState({
        openList: state
      });
    } else {
      var prevstate = this.state.openList;
      this.setState({
        openList: !prevstate
      });
    }
  };

  render() {
    return (
      <div className={cx("dropdown-field", { open: this.state.openList })}>
        {this.props.label && <label>{this.props.label}</label>}
        <Button
          variant="contained"
          color="primary"
          className="dropdown-button"
          onClick={this.toggleList}
        >
          {this.state.selected.name}
          <Chevron />
        </Button>
        <Popover
          open={this.state.openList}
          anchorEl={this.anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          onClose={() => this.toggleList(false)}
        >
          <List className="dropdown-list">
            {this.props.list.map((item, index) => (
              <ListItem
                key={`item--${index}`}
                className="dropdown-list-item"
                onClick={() => this.clickHandler(item)}
              >
                {item.balance && (
                  <ListItemText primary={`${item.name} -- ${item.balance}`} />
                )}
                {!item.balance && <ListItemText primary={`${item.name}`} />}
              </ListItem>
            ))}
          </List>
        </Popover>
      </div>
    );
  }
}
