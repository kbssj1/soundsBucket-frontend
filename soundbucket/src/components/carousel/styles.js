import styled from 'styled-components';

export const SoundsbucketOpen = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  .description {
    padding: 50px;
    @media ${(props) => props.theme.mobile} {
      padding: 0px;
    }
    .description_text {
      text-align: start;
      @media ${(props) => props.theme.mobile} {
        text-align: center;
        h1 {
          font-size: 1.6rem;
        }
      }
    }
    .description_action {
      display: flex;
      padding-top: 20px;
      text-align: start;
      @media ${(props) => props.theme.mobile} {
        text-align: center;
        display: block;
      }
      .bottom_button {
        @media ${(props) => props.theme.mobile} {
          padding-top: 10px;
        }  
      }
    }
  }
  .image {
    width: 25%;
    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  }
`;