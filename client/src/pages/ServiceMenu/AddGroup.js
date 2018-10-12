import React, { Component } from "react";
import { Input, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import { Card, CardTitle, CardBody } from "../../components/Card";

class AddGroup extends Component {
    state = {
        groupName: [],
        newGroup:""
    };

    componentDidMount() {
        this.loadGroups();
    }

    loadGroups = () => {
        console.log("hitting this")
        API.getGroups()
            .then(res =>{
                console.log(res)
                this.setState({ groupName: res.data })
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
        const grouping = this.state.newGroup
        if (this.state.newGroup) {
            console.log("happening")
            API.saveGroup({
                groupName: grouping
            })
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
                                value={this.state.newGroup}
                                onChange={this.handleInputChange}
                                name="newGroup"
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