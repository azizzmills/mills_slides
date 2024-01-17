import React from "react";
import {Container, Col, Row} from 'react-bootstrap'
import './Footer.css'
import LinkedIn from './images/linkedin-icon.png'
import Facebook from './images/fb.png'
import Gmail from './images/gmail.png'
import Twitter from './images/twitter.png'
import Instagram from './images/instagram.png'

const Footer = () => {
    return (      
          <Container className="bg-dark text-center text-white w-100" fluid>
            <Row> 
              <Col>                  
                   <img src={Twitter}  className="btn btn-outline-light btn-floating m-1" alt="Twitter"/>
                   <img src={Facebook}  className="btn btn-outline-light btn-floating m-1" alt="Facebook"/>
                   <img src={Instagram}  className="btn btn-outline-light btn-floating m-1" alt="Instagram"/>
                   <img src={Gmail}  className="btn btn-outline-light btn-floating m-1" alt="Gmail"/>
                   <img src={LinkedIn}  className="btn btn-outline-light btn-floating m-1" alt="LinkedIn"/>                          
              </Col>
             </Row>        
          </Container>      
    );
}
export default Footer;