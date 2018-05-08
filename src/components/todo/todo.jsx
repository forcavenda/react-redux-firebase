import React from 'react';
import { Row, InputGroup, InputGroupAddon, Col, Input, Label } from 'reactstrap';

export default props => (
    <div>
        <Row>
            <Col xs="12" sm="9">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="username" />
                </InputGroup>
            </Col>
        </Row>
    </div>
)