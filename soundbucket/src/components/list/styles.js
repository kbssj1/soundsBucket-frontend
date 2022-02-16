import styled from 'styled-components';

export const AllArtistListPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AllArtistList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export const AllArtistFilter = styled.div`
  padding: 20px;
`;