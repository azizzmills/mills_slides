import React from "react";
import {Container, Col, Row} from 'react-bootstrap'

const Footer = () => {
    return (      
          <Container className="bg-dark text-center text-white w-100" fluid>
            <Row className="w-100">
              <Col>                  
                          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><img src={""} alt="try" className="fab fa-facebook-f"/></a>

                          
                          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><img src={""} alt="try" className="fab fa-twitter"/>
                          </a>

                         
                          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><img src={""} alt="try" className="fab fa-google"/>
                          </a>

                          
                          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><img src={""} alt="try" className="fab fa-instagram"/>
                          </a>

                          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><img src={""} alt="try" className="fab fa-linkedin-in"/>
                          </a>

                          
                          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><img src={""} alt="try" className="fab fa-github"/>
                          </a>
              </Col>
             </Row>        
          </Container>      
    );
}
export default Footer;