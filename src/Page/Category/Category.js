import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const educations = useLoaderData();
    return (
        <div>
            <h5> This is Category.{educations.length}</h5>
        </div>
    );
};

export default Category;