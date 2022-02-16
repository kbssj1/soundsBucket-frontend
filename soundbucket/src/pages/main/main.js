import React  from 'react';
import * as S from "./styles";
import { MainPageArtistCarousel, MainCarousel, Footbar } from '../../components/index';

const Main = ({history}) => {
  
  return (
    <S.Main>
      <MainCarousel history={history} />
      <MainPageArtistCarousel showRank={true} title={"조회수가 가장 많은 아티스트"} onClick={() => {history.push("/kr/channel/0/artist");}} />
      <Footbar />
    </S.Main>
  );
};

export default Main;