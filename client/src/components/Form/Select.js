import React from "react";

export const Select = (props) => {
    return (
        <div className="input-group">
            <select className="custom-select" name={props.name}>
                {/* <option selected>Choose Group</option> */}
                {props.children}
            </select>
        </div>
    );
}
