
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const News = () => {

    const newsDetails = useLoaderData();
    const {_id, title, author, image_url, details, total_view} = newsDetails;
    console.log(newsDetails)

    return (
        <div>
            <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
                <Image 
                roundedCircle
                src={author.img}
                style={{height:'60px'}}
                ></Image>
                <div>
                    <p className="mb-0">{author.name}</p>
                    <p className="mb-0">{author.published_date}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark className="me-3" />
                <FaShareAlt />
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
              { details }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
        <Link to="/"><FaArrowLeft className='text-dark' style={{transform:'scale(1.7)'}}/></Link>
        </div>
    );
};

export default News;