import React from "react";
import "./component-styles.scss";
import { ListItem, List, ListItemText, Button } from "@material-ui/core/";
import cx from "classnames";

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    var selectedItem = props.selected ? props.selected : props.list[0];
    this.state = {
      selected: selectedItem,
      openList: false
    };
    
  }

  clickHandler = (item) => {
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

    if(state) {
        this.setState({
            openList: state
          });
    }
    else {
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
        </Button>
        <List className="dropdown-list">
          {this.props.list.map((item, index) => (
            <ListItem
              key={`item--${index}`}
              className="dropdown-list-item"
              onClick={() => this.clickHandler(item)}
            >
              <ListItemText primary={`${item.name}`} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
