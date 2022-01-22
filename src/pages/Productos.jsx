// @flow 
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import {getProducts} from '../services/products.service'
import { ModalDelete,ModalSave, ModalDetail } from '../components/products';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Productos = ({message}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((response)=>{
            setProducts(response.data.data);
            console.log(response.data.data);
        }).catch((error) =>{
            try{
                console.log(error.response)
                const message = error.response
                Swal.fire({
                    title: message.data.error,
                    text: message.data.message,
                    icon: 'error',
                    confirmButtonText: 'Login :D'
                  }).then(()=>{
                        window.location.href="/login";
                  })

            }catch(e){
                console.log(e);
            }
        })
    }, []);

    return(<>
        <Container>
            <Row>
                <Col>
                <ModalSave/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Costo</th>
                        <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product)=><tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.cost}</td>
                        <td>{product.price}</td>
                        <td> 
                        <ModalDelete product={product}/>
                        <ModalSave product={product}/>
                        <ModalDetail product={product} />

                        </td>
                        </tr>)}
                        
                    </tbody>
                </Table>
                
                </Col>
            </Row>
        </Container>
        
        </>
    );
}


const mapStateToProps = (state) =>{
    const { message }  = state.message;
    return {
        
        message,
    }
}

export default connect(mapStateToProps)(Productos);