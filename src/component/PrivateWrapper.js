import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import Navigation from './Navigation';


const PrivateWrapper = () => {
    let isAtuh=localStorage.getItem("token") !== null ?true :false

    console.log("checkking  "+isAtuh);
  return(
      <>
       {isAtuh?
       <Row>
           <Col md={4}>
              <Navigation />
            </Col>
          <Col md={8}>
          <Outlet/>
             
          </Col>
       </Row>
       :<Navigate to={"/Login"} />}
      </>
  )
}

export default PrivateWrapper