import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import { GoogleAuthProvider } from 'firebase/auth';


const SideNav = () => {

    // const { providerLogin } = useContext(AuthContext);

    // const googleProvider = new GoogleAuthProvider()

    // const handleGoogleSignIn = () => {
    //     providerLogin(googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(error => console.Console.error(error))
    // }

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-shahadot99999.vercel.app/educations-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    return (
        <div>
            <h4>All Category </h4>
            <div>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>


        </div>
    );
};

export default SideNav;