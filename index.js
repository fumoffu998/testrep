import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducers from "./reducers";
import Page from "./components/Page";
import MenuPopupState from "./materialui/style";
import Weather from "./components/Weather";
import Form from "./components/form";
import WeatherInfo from "./components/WeatherInfo";
import gettingWeather from "./components/gettingWeather";
import { Provider } from "react-redux";

const store = createStore(allReducers);


ReactDOM.render(
  <Provider store={store}>
    <MenuPopupState />
    <Page />
    <hr />
    <Weather />
    <Form weatherMess={<gettingWeather />} />
    <WeatherInfo />
  </Provider>,
  document.getElementById("root")
);
