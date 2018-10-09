import React, { Component } from "react";
import { Input, Select, FormBtn, TextArea } from "../../components/Form";
import API from "../../utils/API";

class AddService extends Component {
    state = {
        serviceName: [],
        price: "",
        groupName: [],
        description: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.erviceName && this.state.price && this.state.groupName) {
            API.saveService({
                serviceName: this.state.serviceName,
                price: this.state.price,
                groupName: this.state.price,
                description: this.state.description
            })
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <form>
                <Input
                    value={this.state.serviceName}
                    onChange={this.handleInputChange}
                    name="serviceName"
                    placeholder="Sevice Name"
                />
                <Input
                    value={this.state.serviceName}
                    onChange={this.handleInputChange}
                    name="price"
                    placeholder="Price"
                />
                <Select
                    value={this.state.serviceName}
                    onChange={this.handleInputChange}
                    name="price"
                    placeholder="Price"
                />
                <TextArea
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    name="description"
                    placeholder="Add Service Descripton (optional)"
                />
                <FormBtn
                    disable={!(this.state.serviceName) && !(this.state.price) && !(this.state.groupName)}
                    onClick={this.handleFormSubmit}
                />

            </form>
        )
    }



}

export default AddService;