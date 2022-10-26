import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentDetails from '../Shared/ContentDetails/ContentDetails';

const Category = () => {
    const categoryEducations = useLoaderData();
    return (
        <div>
            <h2> This is Category.{categoryEducations.length}</h2>
            {
                categoryEducations.map(educations => <ContentDetails
                    key={educations._id}
                    educations={educations}
                ></ContentDetails>)
            }
        </div>
    );
};

export default Category;