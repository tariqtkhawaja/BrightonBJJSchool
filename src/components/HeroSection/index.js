import React from 'react'
import { HeroContainer, HeroBg, HeroLogo, HeroContent, HeroH1, HeroP } from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer id="Home">
            <HeroBg>
                <HeroLogo>
                    <img src={require('../../Assets/Images/Logo-transparent1.png')} height="500vh" width="auto" alt="Logo" />
                </HeroLogo>
            </HeroBg>
            <HeroContent>
                <HeroH1>Brighton BJJ School</HeroH1>
                <HeroP>Affordable Brazilian jiu jitsu and submission grappling in centre of Brighton. <p>Everyone is welcome regardless of affiliation.</p></HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
