import React ,{useEffect,useState}from "react";
import { useNavigate } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

const Home = ({isVerify}) => {
    const navigation=useNavigate()
  return (
    <div>
        <Container style={{textAlign:'center'}}>
        <h1>Home</h1>
        <Button onClick={()=>{
            console.log("isVerify"+isVerify)
            if (isVerify) {
                
                navigation("/login")
            } else {
                navigation("/dashboard")
                
            }
            }} >Login</Button>

        </Container>
        </div>
  )
}

export default Home