import React from "react";
import {  PanelBody } from "../../components/Panel";


const ServiceList = props => (
        <PanelBody>
            {props.groups.map ( group => group.Name)}
        </PanelBody>
)

export default ServiceList;