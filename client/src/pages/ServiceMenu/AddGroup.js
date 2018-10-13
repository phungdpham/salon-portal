import React from "react";
import {Card, CardTitle, CardBody} from "../../components/Card";
import { Input, FormBtn } from "../../components/Form";



const AddGroup = props => (
    <Card>
        <CardTitle>Add New Group</CardTitle>
        <CardBody>
        <Input
                value={props.stateInfo.groupName}
                onChange={props.handleInput}
                name="groupName"
                placeholder="Group Name"
            />
            <FormBtn
                disabled={!(props.stateInfo.groupName)}
                onClick={props.handleFormSubmit}
            >
                Add Group
        </FormBtn>
        </CardBody>
    </Card>
)

export default AddGroup;

