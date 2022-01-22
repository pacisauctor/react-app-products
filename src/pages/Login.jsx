// @flow 
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { login } from '../actions/auth';
import store from '../store';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'


const Login = ({message}) => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const onSubmitEvent =  (e)=>{
        console.log("formulario enviado");
        store.dispatch(login(user, password)).then(()=>{
            
        }).catch(()=>{
            
        })


        e.preventDefault();
    }

    useEffect(() => {
        if(message){
            Swal.fire({
                title: message.message,
                text: message.status,
                icon: message.status >= 400 ? 'error': 'info',
                confirmButtonText: 'Cool'
              }).then(()=>{
                  if(message.status === 200){
                    window.location.href="/";
                  }
              })
        }
    }, [message]);
    return <>
        <Container>
            <Row>
                <Col sm={12} md={3}></Col>
                <Col>
                    <Form onSubmit={onSubmitEvent}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User: </Form.Label>
                        <Form.Control type="text" placeholder="user" value={user} onChange={(e) => setUser(e.target.value)} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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

const mapStateToProps = (state) =>{
    const { message }  = state.message;
    return {
        
        message,
    }
}

export default connect(mapStateToProps)(Login);