import React from 'react';
import * as S from "./styles";
import { Image, Segment, Embed, Button, Icon, Label } from 'semantic-ui-react'

const ArtistDetail = () => {

  return (
    <S.ArtistDetailPage>
      <S.ArtistDetail>
        <Segment>
          <h2 style={{padding: "10px"}}> 아티스트 정보 </h2>
          <div style={{ display: "inline-block"}}>
            <Image src='/resources/img/artist.png' wrapped ui={true} floated='left'/>
            <div style={{ display: "inline"}}>
              <div style={{ display: "inline-block", width: "100px"}}> <label> 이름 </label> <h4 style={{display: "inline-block"}}> 썬앨 </h4> </div>
              <div style={{ display: "inline-block", width: "100px"}}> <label> 장르 </label> <h4 style={{display: "inline-block"}}> 장르 </h4> </div>
              <div style={{ display: "inline-block", width: "100px"}}> <label> 장르 </label> <h4 style={{display: "inline-block"}}> 장르 </h4> </div>
              <S.ArtistDetailButtonDesktop>
                <Button style={{marginTop: "20px"}} as='div' labelPosition='right'>
                  <Button color='red'>
                    <Icon name='thumbs up' />
                    Like
                  </Button>
                  <Label as='a' basic color='red' pointing='left'>
                    84
                  </Label>
                </Button> 
              </S.ArtistDetailButtonDesktop>
            </div>
          </div>
          <S.ArtistDetailButtonMobile>
            <Button style={{marginTop: "20px"}} as='div' labelPosition='right'>
              <Button color='red'>
                <Icon name='thumbs up' />
                Like
              </Button>
              <Label as='a' basic color='red' pointing='left'>
                84
              </Label>
            </Button> 
          </S.ArtistDetailButtonMobile>
          <h3> 소개 </h3>
          <p>
            편의점 알바하면서 래퍼 꿈을 가지게된 "썬앨" 입니다.
          </p>
          <h3> 영상 </h3>
          <Embed
            id='O6Xo21L0ybE'
            placeholder='/images/image-16by9.png'
            source='youtube'
          />

        </Segment>
      </S.ArtistDetail>
    </S.ArtistDetailPage>
  );
};

export default ArtistDetail;