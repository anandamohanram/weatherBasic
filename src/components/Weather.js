import React from "react";

const weather = props => {
  return (
        <div>
          {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
          {props.temperature && <p>Temperature: {props.temperature} &#8457;</p>}
          {props.humidity && <p>Humidity: {props.humidity}</p>}
          {props.description && <p>Conditions:  {props.description}</p>}
          {props.error && <p>{props.error}</p>}
        </div>
  );
};

export default weather;