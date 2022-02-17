import React from 'react';
import { Link } from 'react-router-dom'
import classes from '../styles/all.module.css'

const Footer = () => {
    return (
        <>
            <div className="container pb-4">
                <div className="row">
                    <hr />
                    <div className="col-md-4">
                        <Link to='/' className={classes.brandLink}>
                            Al Quran
                        </Link>
                        <p className={classes.moto}>Read, study & learn Holy Al Quran.</p>
                        <small className={classes.description}>
                            Al-Quran is a Sadaqah Jariyah. I hope to make it easy for everyone to read, study, & learn Al-Quran. Al-Quran has many names including The Noble Quran, Al-Quran Al-Kareem, Al-Ketab, Al-Furqan, Al-Maw'itha, Al-Thikr & Al-Noor.
                        </small>
                    </div>

            </div>
        </>
    )
};

export default Footer;
