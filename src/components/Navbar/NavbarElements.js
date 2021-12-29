import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5ren calc((100vw - 1000px) / 2);
z-index: 10;
`
export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items:
`