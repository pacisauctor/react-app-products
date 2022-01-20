// @flow 
import * as React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


const Login = () => {

    const onSubmitEvent =  (e)=>{
        console.log("formulario enviado");
        e.preventDefault();
    }

    return <>
        <Container>
            <Row>
                <Col sm={12} md={3}></Col>
                <Col>
                    <Form onSubmit={onSubmitEvent}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control type="text" placeholder="user" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
                <Col sm={12} md={3}></Col>
            </Row>
        </Container>
    </>;
}

export default Login;