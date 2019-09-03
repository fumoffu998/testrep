import React from "react";

class Form extends React.Component {
  render() {
    console.log(this.props.weatherMess)
    return (

      <form onSubmit={this.props.weatherMess}>
        <input type="text" name="city" placeholder="City"></input>
        <button>Weather</button>
      </form>
    );
  }
}

export default Form;
