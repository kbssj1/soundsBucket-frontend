import React, { useState, useEffect } from 'react';
import * as S from "./styles";
import { PreviewArtistCarousel } from '../../../components/index';
import PreviewChannelDetail from "./previewChannelDetail";
import Typist from 'react-typist';
// import { ArtistList } from "../../../components/index";
import { useDispatch, useSelector } from 'react-redux';
import { getArtistList } from '../../../system/redux/artistActions';

const PreviewChannel = ({history}) => {
  const dispatch = useDispatch();
  const [activeDetailForm, setDetailFormActive] = useState(false);
  const state = useSelector(state => state.artistReducer);

  useEffect(() => {    
    dispatch(getArtistList());
  }, [dispatch]);

  return (
    <S.PreviewChannelPage>
      <S.Title>
        <Typist
          avgTypingDelay={200}
          startDelay={500}
          show={false}
          className="main"
        >
          <span>음악 유망주들을 찾아보세요</span>
        </Typist> 
        <Typist 
          avgTypingDelay={100}
          startDelay={3000}
          className="sub"
        >
          <span> * 마음에 드는 아티스트들을 찾아보세요 </span>
          <Typist.Delay ms={1500} />
          <br />
          <br />
          <span> * 좋아하는 아티스트에게 좋아요를 눌러보세요 </span>
        </Typist>
      </S.Title>
      <S.ArtistList>
        <h3 style={{padding: "1vw"}}> 현재 등록된 아티스트 </h3>
        {state.artist_list.length > 0 && <PreviewArtistCarousel artist={state.artist_list} onClick={() => {setDetailFormActive(true);}} />}
      </S.ArtistList >
      {/* <ArtistList onClick={() => {setDetailFormActive(true);}} /> */}
      <PreviewChannelDetail open={activeDetailForm} onClose={() => {setDetailFormActive(false);}}/>
    </S.PreviewChannelPage>
  );
};

export default PreviewChannel;