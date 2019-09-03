import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { select } from "../actions/index";

class PhoneList extends Component {
  showList() {
    return this.props.phones.map(phone => {
      return (
        <li onClick={() => this.props.select(phone)} key={phone.id}>
          {phone.name}
        </li>
      );
    });
  }
  render() {
    return <ol>{this.showList()}</ol>;
  }
}

function mapStateToProps(state) {
  return {
    phones: state.phones
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ select: select }, dispatch);
}
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(PhoneList);
