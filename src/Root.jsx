import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Header/Dashboard';
import Hero from './components/Hero';
import SurahList from './components/SurahList';
import { Verses } from './components/Verses';

class Root extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                </Routes>
                <Routes>
                    <Route path='/' element={<Hero />} />
                </Routes>
                <Routes>
                    <Route path='/' element={<SurahList />} />
                    <Route path="/:chapterId" element={<Verses />} />
                </Routes>
            </>
        )
    }
}

export default Root;
