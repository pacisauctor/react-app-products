import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';



const ModalDetail = ({product})=> {
    const [show, setShow] = useState(false);
    const getDateFormated = (dateText) =>{
      const event = new Date(dateText)
      return event.toLocaleString('es-US', { timeZone: 'UTC' })
    }
    return (
      <>
        <Button variant="success" onClick={() => setShow(true)}>
          Ver
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="modal-product-update"
        >
          <Modal.Header closeButton>
            <Modal.Title id="modal-product-update">
              Detalles del producto
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Card>
          <Card.Body>
            <Card.Title>{product.name} - {product.idCategory.name}</Card.Title>
            <Card.Text>
              <strong>Precio</strong>: {product.price}
            </Card.Text>
            <Card.Text>
              <strong>Costo</strong>: {product.cost}
            </Card.Text>
            <Card.Text>
              <strong>Fecha de creación</strong>: {getDateFormated(product.dateCreated)}
            </Card.Text>
          </Card.Body>
        </Card>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  export default ModalDetail;