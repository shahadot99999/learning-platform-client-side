import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ContentDetails = ({ educations }) => {
    const { _id, title, image_url, details } = educations;
    return (
        <Card className="mb-5 bg-success ">

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img varient='top' src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 250) + '...'}<Link to={`/educations/${_id}`}>Read More</Link></p>
                            : <p>{details}</p>
                    }
                </Card.Text>

            </Card.Body>

        </Card>
    );
};

export default ContentDetails;