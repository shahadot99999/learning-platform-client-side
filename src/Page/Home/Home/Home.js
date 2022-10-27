import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentDetails from '../../Shared/ContentDetails/ContentDetails';

const Home = () => {
    const allEducations = useLoaderData();
    return (
        <div>

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