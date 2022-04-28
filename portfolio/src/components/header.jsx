import React from "react";

export default function Header() {
    return (
    <header>
        <nav>
            <div id='mobile-logo'className='logo'>
                <a href="/#About">
                <img src='/images/200pxDuc.png' alt='logo' />
                </a>
            </div>
            <ul id='mobile'>
                <a href="/#About"><button id='mobile-btn'>About</button></a>
                <a href="/#Skills"><button id='mobile-btn'>Skills</button></a>
                <a href="/#Work"><button id='mobile-btn'>Work</button></a>
                <a href="/#Contact"><button id='mobile-btn'>Contact</button></a>
                <a href='/resumeRevised.pdf' download="Brian K's Resume"><button id='mobile-btn'>Resume</button></a>
            </ul>
            <div id='mobile-socials' className='socials'>
                <a href='https://www.linkedin.com/in/brian-k/' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                <a href='https://github.com/Dood3l' target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-2x"></i></a>
            </div>
        </nav>
    </header>
    )
}

 