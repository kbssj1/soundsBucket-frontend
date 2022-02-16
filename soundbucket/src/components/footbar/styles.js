import styled from 'styled-components';

export const FootBar = styled.div`
  background-color: whitesmoke;
  margin-top: 50px;
  padding-top: 30px;
  padding-bottom: 10px;
  .container {
    padding-top: 30px;
    margin: auto;
    max-width: 1200px;
    .main_info {
      display: flex;
      flex-direction: row;
      @media ${(props) => props.theme.mobile} {
        flex-direction: column;
        line-height: 20px;
      }
      .headerdivider {
        background: #d9d9d9;
        width: 2px;
        margin-left: 10px;
        margin-right: 10px;
        @media ${(props) => props.theme.mobile} {
          display: none;
        }
      }
    }
  }

`;