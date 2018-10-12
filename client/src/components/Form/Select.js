import React from "react";

export const Select = ({ children}) => {
    return (
        <div className="input-group">
            <select className="custom-select">
                {/* <option selected>Choose Group</option> */}
                {children}
            </select>
        </div>
    );
}
