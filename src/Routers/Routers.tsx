import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import ContactsPage from '../Pages/ContactsPage/ContactsPage';

export default function Routers() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route index element={<div>No page is selected.</div> } />
            <Route path='/contacts' element={<ContactsPage />}/>
        </Routes>
    )
}
