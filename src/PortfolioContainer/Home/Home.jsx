import React from 'react';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import './Home.css';

export default function Home(){
    return (
        <div className="home-container">
            <NavBar />
            <Profile />
        </div>
    )
}