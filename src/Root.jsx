import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, Bookmark, Contribution, Dashboard, Feedback, Footer, Hero, NotFound, Privacy, Search, SurahInfo, SurahList, Tafsir, Verses } from './components/';


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
                                <Bookmark />
                                <SurahList />
                                <Footer />
                            </>
                        )}
                    />
                    <Route path='/:chapterId' element={<Verses />} >
                        <Route path=':ayahId' element={<Tafsir />} />
                    </Route>
                    <Route path='/:chapterId/info' element={<SurahInfo />} />
                    <Route path='*' element={<NotFound />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/feedback' element={<Feedback />} />
                    <Route path='/contribution' element={<Contribution />} />
                    <Route path='/privacy' element={<Privacy />} />
                </Routes>
            </>
        );
    }
}

export default Root;
