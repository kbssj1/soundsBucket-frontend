import styled from 'styled-components';

export const Header = styled.header`
  padding: 1rem;
`;

export const Mobile = styled.div`
  display: block;
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

export const Desktop = styled.div`
  display: none;
  @media ${(props) => props.theme.desktop} {
    display: block;
  }
`;
