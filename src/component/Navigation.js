import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, List, ListGroup, ListGroupItem } from 'reactstrap'

const Navigation = () => {
    const navigation=useNavigate()
    const pathName=useLocation().pathname

//  console.log("pathname : "+pathName);
  return (
    <div style={{borderWidth:1,borderRadius:5,borderColor:'black'}}>
        <h1 style={{textAlign:'center'}}>Navigation</h1>
        <Container>
            <ListGroup>
                <ListGroupItem style={{cursor:'pointer'}} onClick={()=>{navigation("/dashboard")}}   active={pathName==="/dashboard"?true:false} >DashBoard</ListGroupItem>
                <ListGroupItem style={{cursor:'pointer'}} onClick={()=>{navigation("/form")}} active={pathName==="/form"?true:false}  >Form</ListGroupItem>
                <ListGroupItem   >Setting</ListGroupItem>

            </ListGroup>
            
        </Container>

    </div>
  )
}

export default Navigation