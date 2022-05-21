import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Login from "./component/Login";
import Home from "./component/Home";
import PrivateWrapper from "./component/PrivateWrapper";
import DashBoard from "./component/DashBoard";
import Navigation from "./component/Navigation";
import React ,{useEffect,useState}from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./component/Form";
function App() {

  const [loading, setLoading] = useState(true)
  const [showLogin, setShowLogin] = useState(true)

  const verify=()=>{
let token=localStorage.getItem("token")
console.log("token : "+localStorage.getItem("token"));
if (token !== null ) {
  console.log("checkkk1 ");
  setShowLogin(false)
  setLoading(false)
} else {
  console.log("checkkk2 ");

  setShowLogin(true)
  setLoading(false)
}
}
  useEffect(() => {
  verify() 
  }, [])
const setShowLogIn=(val)=>{
setShowLogin(val)
}
  
  if (!loading) {
    return (
      <Router>
          <Container>
        <Row className="justify-content-center">
        
          <Routes>
            <Route path="/" element={<Home isVerify={showLogin}/>}/>
            <Route path="/login" element={<Login setShowLogin={setShowLogIn} />} />
            <Route   element={<PrivateWrapper/>} >
            
              <Route path="/dashboard" element={<DashBoard/>}/>
              <Route path="/form" element={<Form/>}/>

       
            </Route>

          </Routes>

        </Row>
          </Container>
      </Router>
    );
  } else {
    return <>
  
    </>;
  }
}

export default App;
