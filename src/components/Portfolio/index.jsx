import React from 'react';
import About from './AboutMeContainer';
import ContactMe from './ContactMeContainer';
import Profile from './ProfileContainer';

export default function Portfolio(){
    return (
        <div className="home-container">
            <Profile />
            <About />
            <ContactMe />
        </div>
    )
}