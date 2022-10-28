import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

const Register = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required />
      </Form.Group>

      <Button className="me-4 px-5" variant="primary" type="submit">
        Register
      </Button>

      {/* <Form.Text className="text-danger">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form>
  );
};

export default Register;
