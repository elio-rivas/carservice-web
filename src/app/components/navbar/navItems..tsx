import React from "react";
import styled, {css} from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import { menuStyles } from "./menuStyle";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{menu?: any}>`
  ${tw`
    text-sm
    md:text-base 
    text-black
    font-bold
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};  

  @media (min-width: ${SCREENS.lg}) {
    font-size: 1rem; /* Adjust the font size for larger screens */
  }
  
  @media (min-width: ${SCREENS.xl}) {
    font-size: 1.1rem; /* Adjust the font size for extra-large screens */
  }
  
  @media (min-width: ${SCREENS['2xl']}) {
    font-size: 1.2rem; /* Adjust the font size for 2xl screens */
  }

  ${({ menu })=> menu && css`
    ${tw`
        text-white
        text-sm
        mb-3
        focus:text-white
    `};
  `};

`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#">Services</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Parts</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Contacts Us</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Home</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  } else {
    return (      
        <ListContainer>
          <NavItem>
            <a href="#">Services</a>
          </NavItem>
          <NavItem>
            <a href="#">Parts</a>
          </NavItem>
          <NavItem>
            <a href="#">Contacts Us</a>
          </NavItem>
          <NavItem>
            <a href="#">Home</a>
          </NavItem>
        </ListContainer>
      
    );
  }
}
