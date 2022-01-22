// @flow 
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { getCategories } from '../../services/category.service';
import { createProduct, updateProduct } from '../../services/products.service';
import Swal from 'sweetalert2';

const FormSaveProduct = ({data}) =>{

    const [categories, setCategories] = useState([]);

    const [name, setName] = useState(data ? data.name: "");
    const [cost, setCost] = useState(data ? data.cost: 0);
    const [price, setPrice] = useState(data ? data.price: 0);
    const [categoryId, setCategoryId] = useState(data ? data.categoryId: 0);
    const onSubmitEvent = (e) =>{
        const sendRequest = data ? updateProduct : createProduct;
        const formData = {name, cost, price,categoryId, tagsId:[], isActive: true};
        sendRequest(data ? data.id: undefined ,formData).then((response)=>{
            
            Swal.fire({
                title: response.data.message,
                text: '',
                icon: 'info',
                confirmButtonText: 'Oka'
              }).then(()=>{
                  window.location.href ="/productos";
              })
            console.log(response.data);

        }).catch(error=>{
            console.log(error.response);
        })
        e.preventDefault();
    }

    useEffect(() => {
        getCategories().then((response)=>{
            setCategories(response.data.data);
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


    return <Form onSubmit={onSubmitEvent}>
    <Form.Group className="mb-3">
        <Form.Label>Nombre: </Form.Label>
        <Form.Control type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Costo: </Form.Label>
        <Form.Control type="text" placeholder="Costo" value={cost} onChange={(e) => setCost(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Precio: </Form.Label>
        <Form.Control type="text" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label>Categoría: </Form.Label>
        <Form.Select type="text" placeholder="Precio" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
            <option disabled>Select a option</option>
            {categories.map((category)=><option key={category.id} value={category.id}>{category.name}</option>)}
        </Form.Select>
    </Form.Group>

    
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
}
export default FormSaveProduct;