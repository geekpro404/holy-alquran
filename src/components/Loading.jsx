import React from 'react';
import { Spinner } from 'react-bootstrap'
import classes from '../styles/all.module.css'

const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 py-5 text-center">
                    <Spinner animation="border" className={classes.spinner}/>
                </div>
            </div>
        </div>
    )
};

export default Loading;
