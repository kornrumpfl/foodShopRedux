import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
export default function NavBar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <Nav>
      <StyledNavLink to="/" end>
        <h2>Shooping App</h2>
      </StyledNavLink>
      <StyledNavLink to="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-bag-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
        </svg>
        <span>
          <span>{cartTotalQuantity}</span>
        </span>
      </StyledNavLink>
    </Nav>
  );
}

const StyledNavLink = styled(NavLink)`
  width: 100%;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: solid black;
  a {
    text-decoration: none;
    color: black;
  }
`;
