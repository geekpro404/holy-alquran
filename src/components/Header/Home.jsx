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
                
            </Navbar.Offcanvas>
        </Navbar>
    )
};

export default Home
