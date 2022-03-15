import React from 'react';
import Navigasi from '../../components/Navigasi';
import Profile from './Profile/Profile';
import './Home.css';

export default function Home(){
    return (
        <div className="home-container">
            <Navigasi />
            <Profile />
        </div>
    )
}