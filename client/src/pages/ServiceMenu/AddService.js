import React, { Component } from "react";
import { Input, Select, Option, FormBtn, TextArea } from "../../components/Form";
import API from "../../utils/API";
import { Card, CardTitle, CardBody } from "../../components/Card";

class AddService extends Component {
    state = {
        serviceName: "",
        price: "",
        groupSelect: [],
        description: ""
    };

    componentDidMount() {
        this.loadGroups();
        this.loadServices();
    }

    loadGroups = () => {
        API.getGroups()
            .then(res => {
                console.log(res);
                this.setState({groupSelect: res.data});
            })
    }
    
    loadServices = () => {
        API.getServices()
            .then(res => {
                console.log(res)
                this.setState({ serviceName: "", price: "", description: "" })
            })
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
        if (this.state.serviceName && this.state.price && this.state.groupSelect) {
            console.log("handleFormSubmit works fine");
            API.saveService({
                serviceName: this.state.serviceName,
                price: this.state.price,
                groupSelect: this.state.groupSelect,
                description: this.state.description
            })
                .then( res => this.loadServices())
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
                            value={this.state.price}
                            onChange={this.handleInputChange}
                            name="price"
                            placeholder="Price"
                        />
                        <Select 
                            value={this.state.groupSelect}
                            onChange={this.handleInputChange}
                            Placeholder="Select Group">
                                {this.state.groupSelect.map(group => (
                                    <Option key={group._id}>
                                        {group.groupSelect}
                                    </Option>
                                ))}
                        </Select>
                        <TextArea
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name="description"
                            placeholder="Service Descripton (optional)"
                        />
                        <FormBtn
                            disable={!(this.state.serviceName) && !(this.state.price) && !(this.state.groupSelect)}
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