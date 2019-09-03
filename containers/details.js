import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    if (!this.props.phone) {
      return <p>Выберите телефон</p>;
    }
    return (
      <div>
        <h4>{this.props.phone.name}</h4>
        <img src={this.props.phone.img}></img>
        <br></br>
        <p>{this.props.phone.desc}</p>
        <p>Год: {this.props.phone.year}</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    phone: state.active
  };
}

export default connect(mapStateToProps)(Details);
