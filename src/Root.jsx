import React, { Component } from 'react';
import Dashboard from './components/Header/Dashboard';
import SurahList from './components/SurahList';
import { Verses } from './components/Verses';

class Root extends Component {
    render() {
        return (
            <>
                <Dashboard />
                <SurahList />
                <Verses />
            </>
        )
    }
}

export default Root;
