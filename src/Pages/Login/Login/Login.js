import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

const Login = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button className="me-4 px-5" variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-danger">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form>
  );
};

export default Login;