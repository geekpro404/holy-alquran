import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Header/Dashboard';
import Hero from './components/Hero';
import SurahInfo from './components/SurahInfo';
import SurahList from './components/SurahList';
import Tafsir from './components/Tafsir';
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
                    <Route path="/surah/:chapterId" element={<Verses />} />
                    <Route path="/surah/:chapterId/info" element={<SurahInfo />} />
                    <Route path='/surah/:chapterId/verse/:verseId' element={<Tafsir />} />
                </Routes>
            </>
        )
    }
}

export default Root;
