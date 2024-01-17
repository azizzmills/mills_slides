import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from './Navbar'

const Checkout = () =>{
    return(
        <Container>
            <Row>
                <Navbar/>
            </Row>
            <Row>
                <Col>
                    <p>Trial Run Bro</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Checkout;