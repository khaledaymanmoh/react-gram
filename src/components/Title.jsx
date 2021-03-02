import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <StyledTitle>
      <h1>ReactGram</h1>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  margin-top: 1rem;
  font-family: 'Akaya Telivigala', cursive;
  text-align: center;
  color: #822659;
`;

export default Title;
