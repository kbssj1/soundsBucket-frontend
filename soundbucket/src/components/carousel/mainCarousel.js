import React  from 'react';
import { Image } from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from "../../elemnet/index";
import * as S from "./styles";
import { useDispatch } from 'react-redux';
import { validate } from '../../system/redux/authActions';

const MainCarousel = ({history}) => {
  const dispatch = useDispatch();

  return (
    <div style={{marginBottom: "2rem"}}>
      <Carousel showStatus={false} infiniteLoop={true} autoPlay={true} showThumbs={false} >
        <div>         
          <S.SoundsbucketOpen>
            <div className="description">
              <div className="description_text">
                <h1>사운즈버킷 플랫폼이 오픈되었습니다 <br/> 아티스트에게는 새로운 기회를 주고 <br/> 팬들에게는 듣고 보는 음악에서 <br/> 소유하고, 기획에 참여할 수 있는 기회를 가질 수 있습니다 </h1>
              </div>
              <div className="description_action">
                <Button color="black" size="huge" content="아티스트 보기" onClick={() => {history.push("/kr/channel");dispatch(validate());}} /> 
                <div className="bottom_button">
                  <Button color="black" size="huge" content="아티스트 채널 신청하기" onClick={() => {history.push("/kr/request_artist_channel");dispatch(validate());}} /> 
                </div>
              </div>
            </div>
            <div style={{ minWidth: "300px"}} className="image">
              <Image src='/resources/img/soundsbucket.png'/> 
            </div>              
          </S.SoundsbucketOpen>
        </div>
      </Carousel>
    </div>
  );
};

export default MainCarousel;