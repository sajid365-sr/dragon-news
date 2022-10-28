import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebook, FaTwitter, FaWhatsapp,FaLinkedin, FaTwitch } from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with GitHub</Button>
      </ButtonGroup>
      <div>
        <h5 className="mt-4">Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-3" role='button'><FaFacebook className="me-3"/> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-3" role='button'><FaWhatsapp className="me-3"/> WhatsApp</ListGroup.Item>
          <ListGroup.Item className="mb-3" role='button'><FaTwitter className="me-3"/> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-3" role='button'><FaLinkedin className="me-3"/> Linkedin</ListGroup.Item>
          <ListGroup.Item className="mb-3" role='button'><FaTwitch className="me-3"/> Twitch</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
