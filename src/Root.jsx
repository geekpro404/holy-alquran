import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Tafsir from './components/Tafsir';
import { Dashboard, Hero, Bookmark, SurahList, Footer, Verses, SurahInfo, NotFound, Search, AboutUs, Feedback, Contribution, Privacy } from './Export'


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
                        {/* <Route path='verse.verse_key' element={<Verses />} /> */}
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
