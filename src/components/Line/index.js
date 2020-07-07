import styled from 'styled-components';

const Line = styled.div`
  width: 8px;
  height: 100%;
  background: ${({ color }) => color ? color : '#333'};
  margin: 0 16px;
  /* border-radius: 2px; */
`;

export default Line;