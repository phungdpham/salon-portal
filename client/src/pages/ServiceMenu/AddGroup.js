import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class AddGroup extends Component {
    state = {
        groupName: []
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
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <form>
                <Input
                    value={this.state.groupName}
                    onChange={this.handleInputChange}
                    name="groupName"
                    placeholder="Add New Group of Service"
                />
                <FormBtn
                    disabled={!(this.state.groupName)}
                    onClick={this.handleFormSubmit}
                />
            </form>


        )
    }
}

export default AddGroup;