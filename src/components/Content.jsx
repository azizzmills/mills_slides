import React from "react";
import './library.json'
import {Col, Row, Container, Button} from 'react-bootstrap'
import Adidas from './images/Adidas-logo.png'
import Nike from './images/nike logo.jpg'
import Jordans from './images/jordan logo.png'
import Navbar from "./Navbar";
import './Content.css'
import shoe_library from './library.js'
import Footer from "./Footer";

const Content = () => {
    const sendToCart = () =>{
        
    }
   
    return(
        <Container>
            <Row className="mb-5">
                <Col>
                   <Navbar/>   
                </Col>
            </Row>            
            <Row className="pt-5">
                <Col>
                    <div className="brand_selector">
                        <p>All</p>
                    </div>
                </Col>
                <Col>
                    <div className="brand_selector">
                    <img src={Nike} alt="Nike" />
                    <p>Nike</p>
                    </div>                    
                </Col>
                <Col>
                    <div className="brand_selector">
                    <img src={Adidas} alt="Adidas" />
                    <p>Adidas</p>
                    </div>                    
                </Col>
                <Col>
                    <div className="brand_selector">
                    <img src={Jordans} alt="Jordans" />
                    <p>Jordans</p>
                    </div>                    
                </Col>
            </Row>
            <Row>                
              {shoe_library.nike.map((item, index)=>{
                return(
                    <Col className="pt-3">
                      <div className="item_box" key={index}> 
                        <div className="bg-img">
                            <img src={item.picture} alt="" className="pic_size"/>
                            </div>                           
                            {item.name}<br/>
                            {item.price}<br/>
                            {item.size}                            
                       </div>
                       <Button className="add_To_Cart" onclick={sendToCart}>Add to Cart</Button>
                    </Col>)                       
                    })}                   
            </Row>
            <Row>               
              {shoe_library.adidas.map((item, index)=>{
                return(
                    <Col className="pt-3">
                      <div className="item_box" key={index}> 
                        <div className="bg-img">
                            <img src={item.picture} alt="" className="pic_size"/>
                        </div> 
                        <div className="item_content">
                            {item.name}<br/>
                            ${item.price}<br/>
                            Size :  {item.size}                             
                        </div>                         
                       </div>
                       <Button className="add_To_Cart">Add to Cart</Button>
                    </Col>)                       
                    })}                   
            </Row>
            <Row>                
              {shoe_library.jordans.map((item, index)=>{
                return(
                    <Col className="pt-3 pb-3">
                      <div className="item_box" key={index}> 
                        <div className="bg-img">
                            <img src={item.picture} alt="" className="pic_size"/>
                        </div>                          
                            {item.name}<br/>
                            {item.price}<br/>
                            {item.size}                            
                       </div>
                       <Button className="add_To_Cart">Add to Cart</Button>
                    </Col >)                       
                    })}                   
            </Row>  
            <Row>
                <Footer/>
            </Row>
        </Container>
    )
}

export default Content;