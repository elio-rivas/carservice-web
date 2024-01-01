import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li`
  ${tw`
    text-xs
    md:text-base 
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) 
    return (
      <Menu>
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
      </Menu>
    );
  

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
