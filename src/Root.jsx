import React, { Component } from 'react';
import Header from './components/Header';
import SurahList from './components/SurahList';
import { Verses } from './components/Verses';

class Root extends Component {
    render() {
        return (
            <>
                <Header />
                <SurahList />
                <Verses />
            </>
        )
    }
}

export default Root;
