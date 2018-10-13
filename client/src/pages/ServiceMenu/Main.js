import React, { Component } from "react";
import API from "../../utils/API";
//Importing components
import { Container, Row, Col } from "../../components/Grid";
import { PanelGroup, Panel,  PanelBody } from "../../components/Panel";
import { Input, Select, Option,  TextArea, FormBtn } from "../../components/Form";
//importing JSX
import AddGroup from "./AddGroup";
import AddService from "./AddService";
import GroupList from "./GroupList";


class ServiceMenu extends Component {
    state = {
        serviceName: "",
        price: "",
        description: "",
        groupName: "",
        selectedGroup: "",
        groupSelect: []

    };

    componentDidMount() {
        this.loadGroups();
        this.loadServices();
    }

    loadGroups = () => {
        console.log("loading Group data");
        API.getGroups()
            .then(res => {
                console.log(res);
                this.setState({ groupSelect: res.data, groupName: "" });
            })
    }

    loadServices = () => {
        console.log("loading services data");
        API.getServices()
            .then(res => {
                console.log(res)
                this.setState({ selectedGroup: "", serviceName: "", price: "", description: "" })
            })
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleGroupFormSubmit = event => {
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

    handleServiceFormSubmit = event => {
        event.preventDefault();
        if (this.state.serviceName && this.state.price && this.state.groupSelect) {
            console.log("handleFormSubmit works fine");
            API.saveService({
                serviceName: this.state.serviceName,
                price: this.state.price,
                selectedGroup: this.state.groupSelect,
                description: this.state.description
            })
                .then(res => this.loadServices())
                .catch(err => console.log(err));
        }
    };

    render() {
        //Grouping all services by GroupId
        // const groupedServices = (services, GroupId) => {
        //     return services.reduce( (byGroup, obj) => {
        //         const ListofService = obj[GroupId];
        //         if (!byGroup[ListofService]) {
        //             byGroup[ListofService] = []
        //         }
        //         byGroup[ListofService].push(obj);
        //         return byGroup;
        //     }, {});
        // };
        // console.log(groupedServices);

        return (

            <Container fluid>
                <Row>
                    <Col size="md-8">
                        <PanelGroup>
                            <h1>Salon Service Menu</h1>
                            <GroupList
                                groups = {this.groupSelect}
                                stateInfo = {this.state}
                            />


                        </PanelGroup>
                    </Col>
                    <Col size="md-4">
                        <Panel>
                            <AddService 
                                handleInput = {this.handleInputChange}
                                handleFormSubmit = {this.handleServiceFormSubmit}
                                stateInfo = {this.state}
                            />
                            <AddGroup
                               handleInput = {this.handleInputChange}
                               handleFormSubmit = {this.handleGroupFormSubmit}
                               stateInfo = {this.state}
                            />
                        </Panel>
                    </Col>
                </Row>

            </Container >

        )
    }
}

export default ServiceMenu;


            // <Card>
            //     <CardTitle>Add New Group</CardTitle>
            //     <CardBody>
            //             <Input
            //                 value={this.state.groupName}
            //                 onChange={this.handleInputChange}
            //                 name="groupName"
            //                 placeholder="Group Name"
            //             />
            //             <FormBtn
            //                 disabled={!(this.state.groupName)}
            //                 onClick={this.handleFormSubmit}
            //             >
            //                 Add Group
            //             </FormBtn>
            //     </CardBody>
            // </Card>