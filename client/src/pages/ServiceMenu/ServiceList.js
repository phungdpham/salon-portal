import React, { Component } from "react";
import { Card, CardTitle, CardBody } from "../../components/Card";
import API from "../../utils/API";


class ServiceList extends Component {
    state = {
        // groupName: [],
        services: {}
    };

    componentDidMount() {
        // API.getGroups()
        //     .then(res =>
        //         this.setState( { groupName: res.data})
        //     )
        //     .catch(err => console.log(err));

        API.getServices()
            .then(res => this.setState({ serviceName: res.data, price: res.data, groupName: res.data, description: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Card>
                <CardTitle />
                <CardBody>
                    <ul className="list-group">
                        {/* {services.map(service => (
                            <li className="list-group-item" key={service.id}>
                                <span>{service.serviceName}</span>
                                <span>{service.price}</span>
                            </li>
                        ))} */}
                    </ul>
                </CardBody>
            </Card>
        )
    };
}
export default ServiceList;