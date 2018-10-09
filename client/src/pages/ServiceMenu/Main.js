import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Card, CardBody, CardTitle } from "../../components/Card";
import AddGroup from "./AddGroup";
import { Form, Input, TextArea, FormBtn } from "../../components/Form";
import Wrapper from "../../components/Wrapper";
import AddService from "./AddService";


const ServiceMenu = () => (
    <Container fluid>
        <Row>
            <Col size="md-6">
                <Card>
                </Card>
            </Col>
            <Col size="md-6">
                <Card>
                    <CardTitle><h3>New Group</h3></CardTitle>
                    <CardBody>
                        <AddGroup />
                    </CardBody>
                </Card>
                <Card>
                    <CardTitle><h3>New Service</h3></CardTitle>

                    <CardBody>
                        <AddService />
                    </CardBody>
                </Card>
            </Col>
        </Row>

    </Container >

);

export default ServiceMenu;