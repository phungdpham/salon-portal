import React from "react";

export const CardBody = props => (
    <div className="card-body">
            <ul className="list-group list-group-lush">
                {props.children}
            </ul>
    </div>
);