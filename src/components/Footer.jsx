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

                    <div className={`col-md-4 my-3 my-md-0 ${classes.navigate}`}>
                        <h5>Navigate</h5>
                        <ul className="nav flex-column">
                            <Link to={`/`}>Home</Link>
                            <Link to={`/about-us`}>About Us</Link>
                            <Link to={`/feedback`}>Feedback</Link>
                            <Link to={`/bug-reports`}>Bug Reports</Link>
                            <Link to={`/contribution`}>Contribution</Link>
                            <Link to={`/privacy`}>Privacy</Link>
                        </ul>
                    </div>

                    <div className={`col-md-4 my-3 my-md-0 ${classes.popularLinks}`}>
                        <h5>Popular Links</h5>
                        <ul className="nav flex-column">
                            <Link to={`/surah/103`}>Al Asr</Link>
                            <Link to={`/surah/112`}>Al Ikhlas</Link>
                            <Link to={`/surah/55`}>Ar-Rahman</Link>
                            <Link to={`/surah/36`}>Yasin</Link>
                            <Link to={`/surah/67`}>Al Mulk</Link>
                            <Link to={`/surah/82`}>Al Infitar</Link>
                        </ul>
                    </div>
                </div>

                
            </div>
        </>
    )
};

export default Footer;
