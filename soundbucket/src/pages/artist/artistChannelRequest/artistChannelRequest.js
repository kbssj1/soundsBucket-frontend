import React, { useState } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import * as S from "./styles";
import { Button } from "../../../elemnet/index";
import { ArtistChannelRequestModal } from "../../../components/index";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ArtistChannelRequest = ({history}) => {
  const [activeArtistRequestForm, setArtistRequestFormActive] = useState(false);

  return (
    <S.ArtistChannelRequest>
      <div className="mainDesktop">
        <Image wrapped style={{width:"60%"}} src='/resources/img/singer.png'/>
        <div style={{position: "relative", left: "50px",alignSelf: "center"}}>
          <div style={{paddingBottom: "50px"}}>
            <h2>가수의 '꿈'을 절대</h2>
            <h2>포기하지 마세요.</h2>
          </div>
          <div>
            <p>아티스트 수요조사를 통해 팬을 확보하고 </p>
            <p>팬들에게 앨범 제작 후원도 받으세요. </p>
          </div>
          <Button style={{marginTop:"50px"}} content={"아티스트채널 신청하기"} primary={true} size="big" onClick={() => {setArtistRequestFormActive(true);}} />
        </div>
      </div>
      <div className="mainMobile">
        <h2>가수의 '꿈'을 절대 포기하지 마세요.</h2>
        <div style={{marginTop:"30px"}}>
          <p>아티스트 수요조사를 통해 팬을 확보하고 </p>
          <p>팬들에게 앨범 제작 후원도 받으세요. </p>
        </div>
        <Button style={{marginTop:"30px", marginBottom: "30px"}} content={"아티스트채널 신청하기"} size="large" primary={true} onClick={() => {setArtistRequestFormActive(true);}} />
      </div>
      <div className="statistics">
        <Carousel showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true} autoPlay={true}>
          <div className="element">
            <div className="element_detail">
              <h5>지금까지 5개의 앨범이 사운즈버킷을 통해 제작되었습니다</h5>
            </div>
          </div>
          <div className="element">
            <div className="element_detail">
              <h5>지금까지 앨범제작비용 {Number(300000000).toLocaleString()}원이 펀딩되었습니다 </h5>
            </div>
          </div>
          <div className="element">
            <div className="element_detail">
              <h5>사운즈버킷에 등록된 아티스트 수가 500명 입니다 </h5>
            </div>
          </div>
        </Carousel>
      </div>
      <S.SoundBucketSupport>
        <h5>사운즈버킷을 이용해야 하는 이유</h5>
        <div style={{marginTop:"30px"}}>
          <div className="fragmentList">
            <div className="fragment">
              <Icon.Group size='huge'>
                <Icon size='big' name='circle outline' />
                <Icon name='microphone'/>
              </Icon.Group>
              <h5> 녹음 스튜디오 </h5>
              <p> 고품질의 녹음 스튜디오</p>
            </div>
            <div className="fragment">
              <Icon.Group size='huge'>
                <Icon size='big' name='circle outline' />
                <Icon name='video'/>
              </Icon.Group>
              <h5> 뮤직 비디오 제작 </h5>
              <p> 각 분야의 전문가들이 제작 </p>
            </div>
            <div className="fragment">
              <Icon.Group size='huge'>
                <Icon size='big' name='circle outline' />
                <Icon name='music'/>
              </Icon.Group>
              <h5> 앨범 제작 지원 </h5>
              <p> 팬들의 후원으로 앨범 제작 </p>
            </div>
            <div className="fragment">
              <Icon.Group size='huge'>
                <Icon size='big' name='circle outline' />
                <Icon name='rocket'/>
              </Icon.Group>
              <h5> 협찬 및 광고 </h5>
              <p> 수익 창출 지원 </p>
            </div>
          </div>
        </div>
      </S.SoundBucketSupport>
      <ArtistChannelRequestModal open={activeArtistRequestForm} onCancel={() => {setArtistRequestFormActive(false);}} onRequest={() => {setArtistRequestFormActive(false);history.push("/kr/request_artist_channel/form")}}/>
    </S.ArtistChannelRequest>
  );
};

export default ArtistChannelRequest;