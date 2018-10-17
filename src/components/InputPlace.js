import React from "react";

const inputplaces = props => {
  return (
    <form onSubmit={props.getWeather}>
    <select name="country" className="countries" id="countryId">
    <option value="">Select Country</option>
    </select>
    <select name="state" className="states" id="stateId">
    <option value="">Select State</option>
    </select>
    <select name="city" className="cities" id="cityId">
    <option value="">Select City</option>
    </select>

      <button>Get Weather</button>
    </form>
  );
};

export default inputplaces;
