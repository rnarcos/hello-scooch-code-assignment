import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';
import { Card, CardHeader, CardBody, CardHeading } from '../../components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e7ebf0;
  overflow: auto;
`;

export const StyledCard = styled(Card)`
  width: max(50%, 300px);
  padding: 0;
`;

export const StyledCardHeader = styled(CardHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCardBody = styled(CardBody)`
  padding: 1rem 2rem;
`;

export const HeaderCenteringHelper = styled.div`
  flex: 0.3;
`;

export const CardBodyText = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

export const StyledCardHeading = styled(CardHeading)`
  text-align: center;
  font-weight: bold;

  flex: 1;
`;

export const ButtonContainer = styled.div`
  flex: 0.3;
  margin-left: 1rem;
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 50%;
  border: 0;

  cursor: pointer;
`;

export const StyledChevronLeftIcon = styled(FiChevronLeft)`
  height: 1.5rem;
  width: 1.5rem;
`;
