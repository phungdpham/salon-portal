import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { Card, CardTitle, CardBody } from "../../components/Card";

class AddGroup extends Component {
    state = {
        groupName: []
    };

    componentDidMount() {
        this.loadGroups();
    }

    loadGroups = () => {
        API.getGroups()
            .then(res =>
                this.setState({ groupName: res.data })
            )
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
            API.saveGroup({
                groupName: this.state.groupName
            })
                .then(res => this.loadGroups())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <form>
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
            </form>
        )
    }
}

export default AddGroup;