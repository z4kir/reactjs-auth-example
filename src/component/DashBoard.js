import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "reactstrap";

const DashBoard = () => {
    const navigation=useNavigate()
  return (
    <div>
   
      <Container>
        <h1>DashBoard</h1>
        <Button
          onClick={() => {
              localStorage.removeItem('token')
            navigation("/login");
          }}
        >
          LogOut
        </Button>
      </Container>
    </div>
  );
};

export default DashBoard;
