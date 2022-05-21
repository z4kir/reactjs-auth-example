import React ,{useEffect,useState}from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup ,Label,Input, Container, Button} from "reactstrap";

const Login = ({setShowLogin}) => {
    
  const navigation = useNavigate();
  const [userName, setUserName] = useState("");
  const [passWOrd, setPassWord] = useState("");

  const login2 = () => {
      console.log("userName : "+userName);
      console.log("password : "+passWOrd);

    if (userName === "zakir" && passWOrd === "1234") {
        console.log("checkkkkk");
        setShowLogin(true)
      localStorage.setItem("token", "yes");
      navigation("/dashboard");
    }
  };
  const handleForm=(e)=>{
      e.preventDefault() 
      login2();
  }
  return (
    <div  className="card"
    style={{padding:10,marginTop:10,width:500}}
    >
      <h1 className="text-center">Login</h1>
      <Form onSubmit={(e)=>handleForm(e)}>
        <FormGroup className="my-2 ">
          <Label  for="username" style={{}}>username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username here"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup  className="my-2 ">
          <Label  for="password">password</Label>
          <Input
        //   hidden={true}
            type="password"
            
            name="password"
            id="password"
            placeholder="Enter password here"
        
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />
        </FormGroup>

        <Button
          type="submit"
          color="success"
          className="me-2"
     
        >
         Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
