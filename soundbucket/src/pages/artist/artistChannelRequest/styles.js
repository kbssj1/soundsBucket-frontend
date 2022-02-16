import styled from 'styled-components';

export const ArtistChannelRequest = styled.div`
  margin-top: 1rem;
  p {
    font-size: 1.5rem;
    line-height: 10px;
  }
  h2 {
    font-size: 3.5rem;
    line-height: 30px;
  }
  h5 {
    font-size: 1.8rem;
  }
  .statistics {
    .element {
      background-color: #2185d0;
      color: white;
      height: 120px;
      .element_detail {
        position: relative;
        top: 40px;
        @media ${(props) => props.theme.mobile} {
          top: 50px;
          h5 {
            font-size: 1rem;
          }
        }
      }
    }
  }
  .mainDesktop {
    display: flex;
    flex-direction: row;
    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  }
  .mainMobile {
    @media ${(props) => props.theme.desktop} {
      display: none;
    }
    text-align: center;
    p {
      font-size: 1rem;
      line-height: normal;
    }
    h2 {
      line-height: normal;
    }
  }
`;

export const SoundBucketSupport = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h2 {
    line-height: normal;
  }
  p {
    font-size: 1.0rem;
  }
  .fragmentList {
    display: flex;
    justify-content: center;
    flex-direction: row;
    .fragment{
      color: black;
      padding: 20px;
      margin: 10px;
    }
    @media ${(props) => props.theme.mobile} {
      flex-direction: column;
    }
  }
`;

export const ArtistChannelRequestForm = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const ArtistChannelRequestFormPage = styled.div`
  max-width: 600px;
  min-width: 300px;
  width: 50%;
  p {
    font-size: 0.8rem;
    color: gray;
  }
`;
