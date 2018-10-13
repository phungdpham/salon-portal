import React from "react";
import { PanelHeading } from "../../components/Panel";


const GroupList = props => (

        <PanelHeading>
            <h1>
            {props.stateInfo.groupSelect.map ( group => group.groupName)}
            </h1>
        </PanelHeading>

)

export default GroupList;