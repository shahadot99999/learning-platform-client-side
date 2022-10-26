import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Educations = () => {
    const educations = useLoaderData();
    const { title, details, image_url, category_id } = educations;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">Go somewhere</Button>
                </Link>

            </Card.Body>
        </Card>
    );
};

export default Educations;