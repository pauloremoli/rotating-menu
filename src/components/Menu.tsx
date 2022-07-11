import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "hamburger-react";

const Background = styled.div`
  background-color: #333;
  min-height: 100vh;
  width: 100vw;
  z-index: -1;
`;

const CircleContainer = styled.div`
  position: fixed;
  top: -100px;
  left: -100px;
`;

const Circle = styled.div`
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
`;

const CircleButton = styled.div`
  z-index: 10;
  position: absolute;
  top: 60%;
  left: 60%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: white;

  &:focus {
    outline: none;
  }
`;

const Container = styled.div<{ showNav: boolean }>`
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  padding: 50px;
  overflow: hidden;
  ${(p) => (p.showNav ? "transform: rotate(-20deg)" : "")};
`;

const Nav = styled.nav`
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;
`;

const NavUl = styled.ul`
  list-style-type: none;
  padding-left: 30px;
`;

const NavLi = styled.li<{ index: number }>`
  list-style-type: none;
  text-transform: uppercase;
  margin: 40px 0;
  /* transform: translateX(-100%); */
  transition: transform 0.4s ease-in;
  margin-left: ${(p) => p.index * 5 + "px"};
`;

const NavLink = styled.a`
  display: flex;
  gap: 4px;
  text-decoration: none;
  font-family: sans-serif;
  color: white;
  :hover {
    text-decoration: underline;
  }
`;

export interface NavItem {
  text: string;
  link: string;
  icon?: React.ReactNode;
}

export interface MenuProps {
  content: React.ReactNode;
  navItems: NavItem[];
}

const Menu: React.FC<MenuProps> = ({ content, navItems, ...props }) => {
  const [showNav, setShowNav] = useState(false);
  const items: NavItem[] = [
    { text: "Home", link: "/home" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <>
      <Background>
        <Container showNav={showNav}>{content}</Container>

        <Nav>
          <NavUl>
            {items.map((item, index) => (
              <NavLi key={item.text} index={index}>
                <NavLink href={item.link}>
                  {item.icon}
                  {item.text}
                </NavLink>
              </NavLi>
            ))}
          </NavUl>
        </Nav>
        <CircleContainer>
          <Circle>
            <CircleButton>
              <Hamburger toggled={showNav} toggle={setShowNav} size={32} />
            </CircleButton>
          </Circle>
        </CircleContainer>
      </Background>
    </>
  );
};

export default Menu;
