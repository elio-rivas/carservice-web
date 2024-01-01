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
        text-base
        md:text-lg
        lg:text-xl   /* Larger size for larger screens */
        xl:text-2xl  /* Even larger size for extra-large screens */
        font-bold
        text-black
        ml-1
    `};    
    letter-spacing: -0.5px; /* Adjust the letter spacing */
    //text-shadow: 0.5px 0.5px 0.5px rgba(255,0,0,0.5); 
`;

const Image = styled.div`
    width: auto;
    ${tw`h-16 md:h-16`};
    
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