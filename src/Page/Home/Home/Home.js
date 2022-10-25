import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentDetails from '../../Shared/ContentDetails/ContentDetails';

const Home = () => {
    const allEducations = useLoaderData();
    return (
        <div>
            <h2>This is home page. {allEducations.length}</h2>
            {
                allEducations.map(educations => <ContentDetails
                    key={educations._id}
                    educations={educations}
                ></ContentDetails>)
            }
        </div>
    );
};

export default Home;