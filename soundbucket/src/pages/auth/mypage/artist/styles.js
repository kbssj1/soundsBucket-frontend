import styled from 'styled-components';

export const Layout = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const MyPage = styled.div`
  width: 90%;
  max-width: 500px;
`;

export const MyArtistPage = styled.div`
  p {
    font-size: 0.8rem;
    color: gray;
  }
`;

export const MyArtistProfile = styled.div`
  p {
    font-size: 0.8rem;
    color: gray;
  }
  .actions {
    text-align: center;
  }
`;

// works
export const MyArtistWorks = styled.div`
  p {
    font-size: 0.8rem;
    color: gray;
  }
`;

export const MyArtistWorkDetail = styled.div`
  p {
    font-size: 0.8rem;
    color: gray;
  }
`;

export const MyArtistMediaUpload = styled.div`
  label{
    display: inline-block;
    background-color: #2185d0;
    color: white;
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
  }
`;