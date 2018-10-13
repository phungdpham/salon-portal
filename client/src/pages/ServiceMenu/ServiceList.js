import React, { Component } from "react";
import { Card, CardTitle, CardBody } from "../../components/Card";
import API from "../../utils/API";
import { Panel, PanelHeading, PanelBody } from "../../components/Panel";


class ServiceList extends Component {
    state = {
        groups: [],
        services: {}
    };

    componentDidMount() {
        this.loadServices();
    }

    // loadGroups = () => {
    //     API.getGroups()
    //         .then(res =>
    //             this.setState( { groups: res.data})
    //         )
    //         .catch(err => console.log(err));
    // }

    loadServices() {
        API.getServices()
            .then(res => this.setState({ services: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        
        //Grouping all services by GroupId
        const groupedServices = (services, GroupId) => {
            return services.reduce( (byGroup, obj) => {
                const ListofService = obj[GroupId];
                if (!byGroup[ListofService]) {
                    byGroup[ListofService] = []
                }
                byGroup[ListofService].push(obj);
                return byGroup;
            }, {});
        };
        console.log(groupedServices)


        return (
            <Panel>
                {/* {this.state.groups.map(group => (
                    <PanelHeading key={service._id}>
                        <strong>
                            {services.GroupId}
                        </strong> 
                    </PanelHeading>
                    <PanelBody>

                    </PanelBody>
                ))} */}

            </Panel>
        )
    };
}
export default ServiceList;