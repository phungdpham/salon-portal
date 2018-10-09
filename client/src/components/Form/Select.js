import React from "react";

export const Select = props => (
    <div className="input-group">
        <select className="custom-select" {...props}>
            <option selected>Choose Group</option>
            <option>Group 1</option>
            <option>Group 2</option>
            <option>Group 3</option>
        </select>

    </div>
)