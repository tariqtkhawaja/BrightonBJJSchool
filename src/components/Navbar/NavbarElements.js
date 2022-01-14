import styled from 'styled-components';
import { NavLink as LinkR } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const NAVBAR_HEIGHT = '80px';


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: ${NAVBAR_HEIGHT};
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`

export const NavLink = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 80%;
    cursor: pointer;

    &.active{ 
      color: var(--blue);
      border-bottom: 3px solid var(--blue);
      
}
`
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

@media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    position: relative;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
}
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* margin-right: -24px; */
  
    /* 2nd Nav */
    margin-right: 24px;

    @media screen and (max-width: 768px) {
       display: none;
    }

`
export const NavBtnLink = styled(LinkR)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s, ease-in-out;
    text-decoration: none;

    /* 2nd Nav */
    margin-left: 24px;
  
    &:hover { 
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #018606;
  }
`