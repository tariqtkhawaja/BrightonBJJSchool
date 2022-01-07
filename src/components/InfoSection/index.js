import React from 'react'
import {
    InfoContainer,
    InfoBg,
    InfoLogo,
    InfoContent,
    InfoH1,
    InfoP
} from './InfoElements'

const WhoWeAre = () => {
    return (
        <>
            <InfoContainer >
                <InfoBg>
                    <InfoLogo>
                        <img src={require('../../Assets/Images/Logo-transparent1.png')} height="500vh" width="auto" alt="Logo" />
                    </InfoLogo>
                </InfoBg>
                <InfoContent>
                    <InfoH1>Who We Are</InfoH1>
                    <InfoP>We are a friendly Brazilian Jiu Jitsu gym, offering affordable classes in central Brighton.
                        <p>
                            We are most suitable for beginners level and so ideal for white and blue belts especially. <p>
                            </p>
                            We are mainly focused on sport jiu jitsu but also incorporate elements of self defence.
                        </p><br>
                        </br>
                        <p>We offer Gi and submission grappling classes.</p>
                        <br></br><p>We are aiming to create relaxed and safe training environment for everyone to enjoy our favourite martial art, but if you like to push yourself more, you will also find suitable training partners here.</p>
                    </InfoP>
                </InfoContent>
            </InfoContainer>
        </>
    )
}

export default WhoWeAre
