import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const SideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.Console.error(error))
    }

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/educations-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    return (
        <div>
            <h4>All Category: {categories.length} </h4>
            <div>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary" > Log in With Google</Button>
                    <Button variant="outline-dark"> Log in with GitHub</Button>
                </ButtonGroup>
            </div>

        </div>
    );
};

export default SideNav;