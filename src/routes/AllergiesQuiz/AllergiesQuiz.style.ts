import styled from 'styled-components';
import { Button, Card } from '../../components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e7ebf0;
  overflow: auto;
`;

export const StyledCard = styled(Card)`
  width: max(50%, 300px);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  column-gap: 0.75rem;
  margin-top: 1.25rem;
`;

export const StyledButton = styled(Button)`
  flex: 1;
`;
