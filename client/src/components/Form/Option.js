import React from "react";

export const Option = props => (
    <option name={props.name}> 
        { props.children }
    </option>
);