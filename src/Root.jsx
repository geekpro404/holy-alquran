import React, { Component } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Header/Dashboard';
import Hero from './components/Hero';
import SurahInfo from './components/SurahInfo';
import SurahList from './components/SurahList';
import Verses from './components/Verses';
import Footer from './components/Footer';
import NotFound from './components/Others/NotFound';
import AboutUs from './components/Others/AboutUs';

class Root extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route
                        path='/'
                        element={(
                            <>
                                <Dashboard />
                                <Hero />
                                <SurahList />
                                <Footer />
                            </>
                        )}
                    />
                    <Route path='/surah/:chapterId' element={<Verses />} >
                        <Route path=':verseId' element={<Verses />} />
                    </Route>
                    <Route path='/surah/:chapterId/info' element={<SurahInfo />} />
                    <Route path='*' element={<NotFound />} />
                    
                </Routes>
            </>
        );
    }
}

export default Root;
