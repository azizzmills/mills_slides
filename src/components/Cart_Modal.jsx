import React from 'react';
import { useState } from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './library'
import shoe_library from './library';

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{shoe_library.adidas.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
         <Col>          
            {shoe_library.adidas.picture}          
          </Col>
          <Col>
            {shoe_library.adidas.price}<br/>
            {shoe_library.adidas.size} <br/>
            Enter the amount of pairs: <input type="number" className='shoe_Amount' />
          </Col>
         </Row>
        </Modal.Body>
        <Modal.Footer>          
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;