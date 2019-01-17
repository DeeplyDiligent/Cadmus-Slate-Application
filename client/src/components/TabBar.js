import styled from "styled-components";

export const TabBar = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 0px 18px;
`;

export const TabBarItem = styled.button`
  outline: 0;
  border: 0;
  border-bottom: 2px solid ${p => (p.selected ? "#4c4cff" : "transparent")};
  opacity: ${p => (p.selected ? "1" : "0.54")};
  font-size: 14px;
  padding: 0px 18px;
  width: auto;
  height: 100%;
  font-weight: 500;
  margin-right: 18px;
  background: transparent;

  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
