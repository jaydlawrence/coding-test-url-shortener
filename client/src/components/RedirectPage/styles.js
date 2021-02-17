import styled from 'styled-components';
import { LinearProgress } from '@material-ui/core';

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
`;

export const Loading = styled(LinearProgress)`
  margin: 1rem 0 !important;
`;