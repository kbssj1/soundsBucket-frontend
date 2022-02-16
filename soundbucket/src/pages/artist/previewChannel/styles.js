import styled from 'styled-components';

export const PreviewChannelPage = styled.div`
  
`;

export const Title = styled.div`
  padding: 8vw;

  .main {
    text-align: center;
    span {
      color: #22BAD9;
      font-size: 5.2vw;
    }
  }
  .sub {
    position: relative;
    left: 10vw;
    padding-top: 10vh;
    span {
      color: hotpink;
      font-size: 1.8vw;
    }
  }
`;

export const PreviewChannelDetailDescription = styled.div`
  padding: 20px;
  background-color: #2185d0;
  color: white;
  height: 250px;
`;

export const ArtistList = styled.div`
  margin-top: 50px;
`;

export const AllArtistListPage = styled.div`
  display: flex;
  flex-direction: column;
`;


export const AllArtistList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

