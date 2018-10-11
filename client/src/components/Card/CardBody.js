import React from "react";

export const CardBody = props => (
    <div className="card-body">
            <ul className="list-group list-group-lush" id="showCardContent">
                {props.children}
            </ul>
    </div>
);