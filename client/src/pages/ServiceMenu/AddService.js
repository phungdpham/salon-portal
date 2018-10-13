import React from "react";
import { Input, Select, Option,  TextArea, FormBtn } from "../../components/Form";
import { Card, CardTitle, CardBody } from "../../components/Card";

const AddService = props => (
    <form>
        <Card>
            <CardTitle>Add New Service</CardTitle>
            <CardBody>
                <Input
                    value={props.stateInfo.serviceName}
                    onChange={props.handleInput}                    
                    name="serviceName"
                    placeholder="Sevice Name"
                />
                <Input
                    value={props.stateInfo.price}
                    onChange={props.handleInput}
                    name="price"
                    placeholder="Price"
                />
                <Select
                    name="selectedGroup"
                    onChange={props.handleInput}
                    Placeholder="Select Group">
                    {props.stateInfo.groupSelect.map(group => (
                        <Option key={group._id}>
                            {group.groupName}
                        </Option>
                    ))}
                </Select>
                <TextArea
                    value={props.stateInfo.description}
                    onChange={props.handleInput}
                    name="description"
                    placeholder="Service Descripton (optional)"
                />
                <FormBtn
                    disable={!(props.stateInfo.serviceName) && !(props.stateInfo.price) && !(props.stateInfo.groupSelect)}
                    onClick={props.handleFormSubmit}
                >
                                    Add Service
                </FormBtn>

            </CardBody>
        </Card>

    </form>
)
            

export default AddService;