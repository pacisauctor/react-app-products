import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FormSaveProduct from "./FormSaveProduct";


const ModalSave = ({product})=> {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <Button variant={product ?"warning": "primary"} onClick={() => setShow(true)}>
        {product ? "Actualizar": "Nuevo"}
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="modal-product-update"
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-product-update">
              {product ? "Editar": "Nuevo"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormSaveProduct data={product}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default ModalSave;