import React from 'react';
import { Navbar, Offcanvas, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineFeedback, MdOutlinePrivacyTip } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import classes from '../../styles/all.module.css';



const Home = () => {
    return (
        <Navbar collapseOnSelect bg="light" expand={false}>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className={classes.homeIcon} />
            <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
            >

                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel" className={classes.brandLink}>Al Quran</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <small className={classes.heading}>Menu</small>
                    <Nav className={`justify-content-end flex-grow-1 pe-3 ${classes.nav}`}>
                        <Link to='/'><AiOutlineHome /> Home</Link>
                        <Link to='/about-us'><BsInfoCircle /> About Us</Link>
                        <Link to='/feedback'><MdOutlineFeedback /> Feedback</Link>
                        <Link to='/contribution'><FaRegEdit /> Contribution</Link>
                        <Link to='/privacy'><MdOutlinePrivacyTip /> Privacy</Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    )
};

export default Home
