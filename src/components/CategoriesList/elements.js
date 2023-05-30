import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";
import { grayColorLight, primaryColor } from "../UI/variables";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
`;

export const AlertIcon = styled(FiAlertTriangle)`
  color: ${primaryColor};
  font-size: 8rem;
`;

export const DialogText = styled.p`
  font-size: 2.1rem;
  color: ${grayColorLight};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;
