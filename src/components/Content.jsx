import React from "react";
import './library.json'
import {Col, Row, Container} from 'react-bootstrap'
import Adidas from './images/selector_img/adidas.png'
import Nike from './images/selector_img/nike.png'
import Jordans from './images/selector_img/jordan.png'
import Navbar from "./Navbar";
import './Content.css'
import shoe_library from './library.js'
import Footer from "./Footer";

const Content = () => {
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
                    <Col>
                      <div className="item_box" key={index}> 
                        <div className="bg-img">
                            <img src={item.picture} alt="" className="size"/>
                            </div>                           
                            {item.name}<br/>
                            {item.price}<br/>
                            {item.size}                            
                       </div>
                    </Col>)                       
                    })}                   
            </Row>
            <Row>                
              {shoe_library.adidas.map((item, index)=>{
                return(
                    <Col>
                      <div className="item_box" key={index}> 
                        {/*<div className="bg-img">
                            <img src={item.picture} alt="" className="size"/>
                </div>*/}                           
                            {item.name}<br/>
                            {item.price}<br/>
                            {item.size}                            
                       </div>
                    </Col>)                       
                    })}                   
            </Row>
            <Row>                
              {shoe_library.jordans.map((item, index)=>{
                return(
                    <Col>
                      <div className="item_box" key={index}> 
                        {/*<div className="bg-img">
                            <img src={item.picture} alt="" className="size"/>
                </div>*/}                           
                            {item.name}<br/>
                            {item.price}<br/>
                            {item.size}                            
                       </div>
                    </Col>)                       
                    })}                   
            </Row>  
            <Row>
                <Footer/>
            </Row>
        </Container>
    )
}

export default Content;