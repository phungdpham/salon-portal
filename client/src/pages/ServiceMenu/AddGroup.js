import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { Card, CardTitle, CardBody } from "../../components/Card";

class AddGroup extends Component {
    state = {
        // groups: [],
        groupName: ""
    };

    componentDidMount() {
        this.loadGroups();
    }

    loadGroups = () => {
        console.log("hitting this")
        API.getGroups()
            .then(res =>{
                console.log(res)
                this.setState({ groups: res.data, groupName: "" })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.groupName) {
            console.log("HandleFormSubmit works")
            API.saveGroup({
                groupName: this.state.groupName
            })
                .then(res => this.loadGroups())
                .catch(err => console.log(err));
        };
    };

    render() {
        return (
                <Card>
                    <CardTitle>Add New Group</CardTitle>
                    <CardBody>
                            <Input
                                value={this.state.groupName}
                                onChange={this.handleInputChange}
                                name="groupName"
                                placeholder="Group Name"
                            />
                            <FormBtn
                                disabled={!(this.state.groupName)}
                                onClick={this.handleFormSubmit}
                            >
                                Add Group
                            </FormBtn>
                    </CardBody>
                </Card>
        )
    }
}

export default AddGroup;