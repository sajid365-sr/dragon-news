import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserInfo, verifyEmail } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(name, photoURL);
        setError("");
        form.reset();
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const updateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserInfo(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Form className="mt-5 w-75 mx-auto" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Photo URL"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleAccepted}
          label={
            <>
              Accept <Link to="/terms">Terms and conditions</Link>
            </>
          }
        />
      </Form.Group>

      <Button
        className="me-4 px-5"
        variant="primary"
        type="submit"
        disabled={!accepted}
      >
        Register
      </Button>

      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;
