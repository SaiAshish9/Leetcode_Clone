import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.7rem;
  margin-bottom: 1.5rem;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
`;

export const Dropdown = styled.div`
  color: #eff1f6bf;
  background-color: #ffffff1a;
  font-size: 0.85rem;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  border-radius: 5px;
  padding: 0.375rem 0.75rem;
  margin-right: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const PickOneContainer = styled.div`
  color: rgb(44 187 93);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
`;

export const ArrowDowmImage = styled(Image)`
  margin-left: 0.5rem;
  width: 17px;
  height: 17px;
`;

export const PickOneBubble = styled(Image)`
  height: 18px;
  width: 18px;
`;

export const BubbleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2cbb5d;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 5px 15px 0 #2db55d66;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin-right: 0.625rem;
`;

export const StyledSettingsImage = styled(Image)`
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0px 1px 3px #0000003d,
    0px 2px 8px #00000029;
  border-radius: 5px;
  background-color: #ffffff1a;
`;
