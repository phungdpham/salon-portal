import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import { Card, CardBody, CardTitle } from "../../components/Card";
import AddGroup from "./AddGroup";
import { Form, Input, TextArea, FormBtn } from "../../components/Form";
import Wrapper from "../../components/Wrapper";
import AddService from "./AddService";
import { PanelGroup, Panel } from "../../components/Panel";
import ServiceList from "./ServiceList";


const ServiceMenu = () => (
    <Container fluid>
        <Row>
            <Col size="md-8">
                <PanelGroup>
                    <h1>Salon Service Menu</h1>
                   <ServiceList />
                </PanelGroup>
            </Col>
            <Col size="md-4">
                <Panel>
                    <AddService />
                    <AddGroup />
                </Panel>
            </Col>
        </Row>

    </Container >

);

export default ServiceMenu;