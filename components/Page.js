import React from "react";
import PhoneList from "../containers/phone-list";
import Details from "../containers/details";

const page = () => (
  <div>
    <h2>Phones:</h2>
    <PhoneList />
    <hr></hr>
    <h4>Details:</h4>
    <Details />
  </div>
);
export default page;
