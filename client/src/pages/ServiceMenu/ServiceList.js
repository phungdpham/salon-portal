import React, { Component } from "react";
import { Card, CardTitle, CardBody } from "../../components/Card";
import API from "../../utils/API";

class ServiceList extends Component {
    state = {
        group: [],
        service: {}
    };

    componentDidMount() {
        API.getGroups()
            .then(res =>
                this.setState( { group: res.data})
            )
            .catch(err => console.log(err));

        API.getServices()
            .then(res => this.setState({ serviceName: res.data, price: "", groupName: res.data, description: ""})
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Card>
                <CardTitle>
                    <h1>
                        {this.state.group}
                    </h1>
                </CardTitle>
                <CardBody />
            </Card>
        )
    };
}
export default ServiceList;