import React from 'react'

export default function Home() {
  return (
    <section id="About" className='section-1'>
        <div className='section-1-hero'>
            <h1 id='mobile-hero-title' className='hero-title'>Hi, I'm Brian. I'm an associate software engineer.</h1>
            <div className='hero-aboutme-cont'>
            <h6 className='aboutMe'>Hardworking and dependable worker, capable of grasping concepts quickly with the ability to apply them. Dedicated to producing quality of high standard. Organized with high-level multitasking capability.</h6>
            </div>
            <div className='hero-learnMore'>
            <a href='/#Contact'><button id='mobile-glow' className='glow-on-hover'>Get in touch</button></a>
            </div>
        </div>
    </section>
  )
}
