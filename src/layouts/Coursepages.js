import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// import ContentDetails from '../Page/Shared/ContentDetails/ContentDetails';
import Footer from '../Page/Shared/Footer/Footer';
import Header from '../Page/Shared/Header/Header';
import SideNav from '../Page/Shared/SideNav/SideNav';

const CoursePages = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                        <SideNav></SideNav>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>


            <Footer></Footer>
        </div>

    );
};

export default CoursePages;