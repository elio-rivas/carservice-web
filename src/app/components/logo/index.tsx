import React from 'react'

import CarLogoImg from '../../../assets/images/RLogo2.png';
import styled from 'styled-components';
import tw from 'twin.macro';

const LogoContainer  = styled.div`
    ${tw`
        flex
        items-center
    `};
`;

const LogoText = styled.div`
    ${tw`       
        text-xl
        md:text-2xl
        font-bold
        text-black
        ml-1
    `};    
    letter-spacing: -0.5px; /* Adjust the letter spacing */
`;

const Image = styled.div`
    width: auto;
    ${tw`h-12 md:h-12`};
    
    img {
        width:auto;
        height:100%;        
    }`;

export function Logo(){
    return <LogoContainer>
        <Image>
            <img src={CarLogoImg} alt={"Roberto's Auto Services"}/>
        </Image>
        <LogoText>Roberto's <br/>Auto Services</LogoText>
    </LogoContainer>
}