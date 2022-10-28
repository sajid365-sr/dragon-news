import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const navigate = useNavigate();
    const {signIn} = useContext(AuthContext);
    const handleSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/');
        })
        .catch(e => console.error(e));
    }


  return (
    <Form onSubmit={handleSubmit} className="mt-5 w-75 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>

      <Button className="me-4 px-5" variant="primary" type="submit">
        Login
      </Button>

      {/* <Form.Text className="text-danger">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form>
  );
};

export default Login;
