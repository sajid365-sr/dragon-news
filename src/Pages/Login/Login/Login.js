import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";



const Login = () => {

  
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    const {signIn, setLoading} = useContext(AuthContext);
    useTitle('Login');

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
            setError('');
            if(user.emailVerified){
                
                navigate(from, {replace : true});
            }
            else{
                toast.error('Your email is not verified. Please verify email.');
                
            }
        })
        .catch(e =>{
            setError(e.message)
        })
        .finally(() => {
          setLoading(false);
        })
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

      <Form.Text className="text-danger">
        {error}
      </Form.Text>
    </Form>
  );
};

export default Login;
