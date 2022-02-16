import styled from 'styled-components';

export const ArtistChannel = styled.div`
  margin-top: 1rem;
`;

export const ArtistChannelDetailPage = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const ArtistChannelDetail = styled.div`
  max-width: 600px;
  min-width: 300px;
  width: 50%;
`;

export const ArtistChannelDetailButtonDesktop = styled.div`
  display: none;
  @media ${(props) => props.theme.desktop} {
    display: block;
  }
`;

export const ArtistChannelDetailButtonMobile = styled.div`
  display: block;
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

export const ArtistFeed = styled.div`
  label {
    color : gray;
  }
  hr {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const FanFeed = styled.div`
  label {
    color : gray;
  }
  hr {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;


export const ArtistFunding = styled.div`
  .comment {
    font-size: 0.8rem;
    color: gray;
  }
  label {
    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  }
  h4 {
    @media ${(props) => props.theme.desktop} {
      display: none;
    }
  }
`;

export const ArtistFundingImpossible = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ArtistFundingPossible = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type=number] {
      -moz-appearance:textfield; /* Firefox */
  }
`;

export const ArtistDetailPage = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const ArtistDetail = styled.div`
  max-width: 600px;
  min-width: 300px;
`;

export const ArtistDetailButtonDesktop = styled.div`
  display: none;
  @media ${(props) => props.theme.desktop} {
    display: block;
  }
`;

export const ArtistDetailButtonMobile = styled.div`
  display: block;
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;