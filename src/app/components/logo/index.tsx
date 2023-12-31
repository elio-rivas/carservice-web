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
        md:text-xl
        font-bold
        text-black
        ml-4
    `};
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
        <LogoText>Roberto's <br/> Auto Services</LogoText>
    </LogoContainer>
}