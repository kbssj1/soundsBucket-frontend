import React from 'react';
import * as S from "./styles";
import { ArtistCarousel, ArtistList } from '../../../components/index';

const ArtistChannelList = ({history}) => {

  return (
    <S.ArtistChannel>
      <ArtistCarousel showRank={false} onClick={() => {history.push("/kr/channel/0/artist");}} title={"취향저격 아티스트"}/>
      <ArtistCarousel showRank={true} onClick={() => {history.push("/kr/channel/0/artist");}} title={"가장 추천수가 많은 아티스트"}/>
      <ArtistCarousel showRank={true} onClick={() => {history.push("/kr/channel/0/artist");}} title={"조회수가 가장 많은 아티스트"}/>
      <ArtistList onClick={() => {history.push("/kr/channel/0/artist");}} />
    </S.ArtistChannel>
  );
};

export default ArtistChannelList;