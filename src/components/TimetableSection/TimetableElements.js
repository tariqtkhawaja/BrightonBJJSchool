import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../Navbar/NavbarElements";

export const TimetableContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    height: calc(100vh - ${NAVBAR_HEIGHT});
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TopLine = styled.p`
    color: var(--blue);
    font-size: 16px;
    line-height: 16px ;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    margin-top: 18%;
`;

export const TimetableContainer = styled.div`
  color: white;
  padding: 20px;
  border: 2px solid white;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
  background: rgba(0,0,0,0.5);
  border-radius: 8px;
`;




export const TimetableHeader = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  letter-spacing: 10px;
  font-size: 36px;
  z-index: 1;
`;

export const TimetableSubHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 5px;
  font-size: 24px;
  z-index: 1;
`;

export const DayOfTheWeek = styled.div`

  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 5px;
  z-index: 1;
`;

export const TimetableRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  z-index: 1;
`;

export const TimetableCell = styled.div`
  flex: 1;
  text-align: start;
  letter-spacing: 2px;
  margin-bottom: 2px;
  padding: 5px 0;
  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: left;
    font-size: smaller;
    padding: 5px 0;
  }

`;

export const ClassTime = styled.span`
  color: var(--blue);
  font-weight: bold;
`;