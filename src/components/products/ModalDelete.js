import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

import {deleteProducts} from '../../services/products.service'
import Swal from "sweetalert2";

const ModalDelete = ({product})=> {
    const [show, setShow] = useState(false);
  
    const deleteProductEvent = () =>{
        deleteProducts(product.id).then((response)=>{
            setShow(false);
            Swal.fire({
                title: response.data.message,
                text: '',
                icon: 'info',
                confirmButtonText: 'Oka'
              }).then(()=>{
                  window.location.href="/productos"
              })
        }).catch(error=>{
            console.log(error);
        })
    }
    return (
      <>
        <Button variant="danger" onClick={() => setShow(true)}>
          Eliminar
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="modal-product-delete"
        >
        <ModalHeader closeButton>
            <ModalTitle>Eliminar</ModalTitle>
        </ModalHeader>  
          <ModalBody>
            <p>
              ¿Estás seguro de eliminar el producto {product.name}?
            </p>
            <Button onClick={deleteProductEvent}>Si</Button>
          </ModalBody>
        </Modal>
      </>
    );
  }
  
  export default ModalDelete;