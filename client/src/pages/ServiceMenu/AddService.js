import React, { Component } from "react";
import { Input, Select, FormBtn, TextArea } from "../../components/Form";
import API from "../../utils/API";
import { Card, CardTitle, CardBody } from "../../components/Card";

class AddService extends Component {
    state = {
        serviceName: [],
        price: "",
        groupName: [],
        description: ""
    };

    componentDidMount() {
        this.loadServices();
    }

    loadServices = () => {
        API.getServices()
            .then(res =>
                this.setState({ serviceName: res.data, price: res.data, groupName: res.data, description: res.data})
                )
                .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.serviceName && this.state.price && this.state.groupName) {
            API.saveService({
                serviceName: this.state.serviceName,
                price: this.state.price,
                groupName: this.state.groupName,
                description: this.state.description
            })
                .then(res => this.loadServices())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <form>
                <Card>
                    <CardTitle>Add New Service</CardTitle>
                    <CardBody>
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
                        >
                            Add Service
                        </FormBtn>
                    </CardBody>
                </Card>

            </form>
        )
    }



}

export default AddService;