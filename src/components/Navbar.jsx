import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Nav>
      <Hamburger onClick={toggleMenu}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>
      <Ul menuOpen={menuOpen}>
        <li>
          <NavLink href="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink href="/live-coding">Live-Coding</NavLink>
        </li>
        <li>
          <NavLink href="/tutorial">Tutorials</NavLink>
        </li>
        <li>
          <NavLink href="/quiz">Quiz</NavLink>
        </li>
        <li>
          <NavLink href="/leaderboard">Leaderboard</NavLink>
        </li>
      </Ul>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgb(37, 150, 190);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: rgb(37, 150, 190);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  transition: color 0.3s;

  &:hover {
    color: #f2fcfe;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
  transition: 0.4s;
`;
